import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import * as tf from '@tensorflow/tfjs'


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  model:any;

  constructor(
    private alertController: AlertController
  ) {
    this.loadModel();
  }

  async presentAlert(value:any) {
    const alert = await this.alertController.create({
      header: value,
      buttons: ['Okay']
    });

    await alert.present();
  }

  async loadModel() {
    // const modelUrl = 'assets/models/tamil-char-recognition/model.json';
    const modelUrl = 'assets/models/linear-regression/model.json';
    try {
      this.model = await tf.loadLayersModel(modelUrl);
      console.log('Model loaded successfully');
      const input = tf.tensor2d([10.0], [1,1]);
      const result = this.model.predict(input);
      const predictionsArray = await result.array();
      this.presentAlert(predictionsArray[0])
    } catch (error) {
      console.error('Error loading the model:', error);
    }
  }
}
