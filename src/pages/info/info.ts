import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class Info {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Info Page');
  }

}
