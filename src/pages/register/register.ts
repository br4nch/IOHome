import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class Register {
    public event = {
    month: '1995-09-27',
    }
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Register Page');
  }

}
