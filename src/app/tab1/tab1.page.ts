import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import * as tf from '@tensorflow/tfjs'
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements AfterViewInit {

  @ViewChild('canvas', { static: false }) canvas!: ElementRef;
  private context!: CanvasRenderingContext2D;
  private isDrawing: boolean = false;

  model: any;

  recognizedChar: any;

  suggestions: any;

  constructor(
    private alertController: AlertController,
    private dataService: DataService
  ) {
    this.loadModel();
  }

  ngAfterViewInit() {
    this.context = this.canvas.nativeElement.getContext('2d');
  }

  async presentAlert(value: any) {
    const alert = await this.alertController.create({
      header: value,
      buttons: ['Okay']
    });

    await alert.present();
  }

  async loadModel() {
    const modelUrl = 'assets/models/tamil-chars/model.json';
    try {
      this.model = await tf.loadLayersModel(modelUrl);
      console.log('Model loaded successfully');
    } catch (error) {
      console.error('Error loading the model:', error);
    }
  }


  startDrawing(event: MouseEvent | TouchEvent) {
    event.preventDefault();
    this.isDrawing = true;
    this.draw(event);
  }

  draw(event: MouseEvent | TouchEvent) {
    event.preventDefault();
    if (!this.isDrawing) return;

    const rect = this.canvas.nativeElement.getBoundingClientRect();
    const x = (event instanceof TouchEvent ? event.touches[0].clientX : event.clientX) - rect.left;
    const y = (event instanceof TouchEvent ? event.touches[0].clientY : event.clientY) - rect.top;

    this.context.lineWidth = 5;
    this.context.lineCap = 'round';
    this.context.strokeStyle = 'black';

    this.context.lineTo(x, y);
    this.context.stroke();
    this.context.beginPath();
    this.context.moveTo(x, y);
  }

  endDrawing(event: MouseEvent | TouchEvent) {
    event.preventDefault();
    this.isDrawing = false;
    this.context.beginPath();
  }

  resetCanvas() {
    const canvas = this.canvas.nativeElement;
    this.context.clearRect(0, 0, canvas.width, canvas.height);
    this.recognizedChar = null;
  }

  findOut() {
    const canvas = this.canvas.nativeElement;
    const ctx = this.context
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let minX = canvas.width, minY = canvas.height, maxX = 0, maxY = 0;
    for (let y = 0; y < canvas.height; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const index = (y * canvas.width + x) * 4; // Each pixel takes 4 array indices (RGBA)
        const alpha = imageData.data[index + 3]; // Alpha value

        if (alpha > 0) {
          minX = Math.min(minX, x);
          minY = Math.min(minY, y);
          maxX = Math.max(maxX, x);
          maxY = Math.max(maxY, y);
        }
      }
    }

    const croppedCanvas = document.createElement('canvas');
    const croppedContext: any = croppedCanvas.getContext('2d');

    croppedCanvas.width = maxX - minX;
    croppedCanvas.height = maxY - minY;

    croppedContext.fillStyle = 'white';
    croppedContext.fillRect(0, 0, croppedCanvas.width, croppedCanvas.height);

    croppedContext.drawImage(canvas, minX, minY, croppedCanvas.width, croppedCanvas.height, 0, 0, croppedCanvas.width, croppedCanvas.height);

    const croppedImageDataUrl = croppedCanvas.toDataURL('image/png');

    console.log(croppedImageDataUrl)

    const rawImage = new Image();

    rawImage.src = croppedImageDataUrl;

    rawImage.onload = async () => {
      const rawTensor = tf.browser.fromPixels(rawImage, 1);
      var resized = tf.image.resizeBilinear(rawTensor, [64, 100]);
      const floatPixels = tf.cast(resized, 'float32');
      const normalizedPixels = tf.div(floatPixels, 255);
      const { mean, variance } = tf.moments(normalizedPixels);
      const std = tf.sqrt(variance);
      const normalizedTensor = tf.div(tf.sub(normalizedPixels, mean), std);
      var tensor = normalizedTensor.expandDims(0);
      var prediction = this.model.predict(tensor);
      const predictedClassIndex = prediction.argMax(1).dataSync()[0];
      this.recognizedChar = this.dataService.classArray.find((obj: any) => obj.class === String(predictedClassIndex))?.letter
      rawTensor.dispose();
    };
  }
}
