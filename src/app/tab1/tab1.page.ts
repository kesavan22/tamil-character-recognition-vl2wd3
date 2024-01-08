import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import * as tf from '@tensorflow/tfjs'


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

  constructor(
    private alertController: AlertController
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
    // const modelUrl = 'assets/models/tamil-char-recognition/model.json';
    // const modelUrl = 'assets/models/linear-regression/model.json';
    const modelUrl = 'assets/models/aToAku/model.json';
    try {
      this.model = await tf.loadLayersModel(modelUrl);
      console.log('Model loaded successfully');
      // const input = tf.tensor2d([10.0], [1, 1]);
      // const result = this.model.predict(input);
      // const predictionsArray = await result.array();
      // this.presentAlert(predictionsArray[0])
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
  }


  findOut() {
    const canvas = this.canvas.nativeElement;
    const imageData = this.context.getImageData(0, 0, canvas.width, canvas.height);

    // Find the bounding box of the drawn content
    let minX = canvas.width;
    let minY = canvas.height;
    let maxX = 0;
    let maxY = 0;

    for (let y = 0; y < canvas.height; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const index = (y * canvas.width + x) * 4;
        const alpha = imageData.data[index + 3];

        if (alpha > 0) {
          minX = Math.min(minX, x);
          minY = Math.min(minY, y);
          maxX = Math.max(maxX, x);
          maxY = Math.max(maxY, y);
        }
      }
    }

    // Crop the drawn area
    const croppedCanvas = document.createElement('canvas');
    const croppedContext: any = croppedCanvas.getContext('2d');

    const width = maxX - minX;
    const height = maxY - minY;

    croppedCanvas.width = width;
    croppedCanvas.height = height;

    croppedContext.drawImage(canvas, minX, minY, width, height, 0, 0, width, height);

    const dataUrl = croppedCanvas.toDataURL('image/png');

    const img = new Image();

    img.src = dataUrl;

    img.onload = async () => {
      const rawTensor = tf.browser.fromPixels(img, 1);
      var resized = tf.image.resizeBilinear(rawTensor, [28, 28]);
      const floatPixels = tf.cast(resized, 'float32');
      const normalizedPixels = tf.div(floatPixels, 255);
      const { mean, variance } = tf.moments(normalizedPixels);
      const std = tf.sqrt(variance);
      const normalizedTensor = tf.div(tf.sub(normalizedPixels, mean), std);
      var tensor = normalizedTensor.expandDims(0);
      var prediction = this.model.predict(tensor);
      const predictedClassIndex = prediction.argMax(1).dataSync()[0];
      console.log(predictedClassIndex)
      rawTensor.dispose();
    };
  }
}
