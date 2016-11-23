import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Dangtin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dangtin',
  templateUrl: 'dangtin.html'
})
export class Dangtin {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Dangtin Page');
  }

}
