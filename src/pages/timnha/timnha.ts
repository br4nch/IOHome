import { Component } from '@angular/core';

import { AlertController,Platform } from 'ionic-angular';

/*
  Generated class for the Timnha page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-timnha',
  templateUrl: 'timnha.html'
})
export class Timnha {
 pet: string = "one";
  isAndroid: boolean = false;
  constructor(public alerCtrl: AlertController, platform:Platform) {
this.isAndroid=platform.is('android');
  }
}
