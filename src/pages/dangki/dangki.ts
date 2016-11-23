import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Dangki page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dangki',
  templateUrl: 'dangki.html'
})
export class Dangki {
    public event = {
    month: '1995-09-27',
    }
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Dangki Page');
  }

}
