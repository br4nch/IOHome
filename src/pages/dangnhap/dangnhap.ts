import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Dangnhap page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dangnhap',
  templateUrl: 'dangnhap.html'
})
export class Dangnhap {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Dangnhap Page');
  }

}
