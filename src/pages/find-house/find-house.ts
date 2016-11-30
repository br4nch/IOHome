import { Component } from '@angular/core';

import { AlertController,Platform } from 'ionic-angular';

@Component({
  selector: 'page-find-house',
  templateUrl: 'find-house.html'
})
export class FindHouse {
 pet: string = "one";
  isAndroid: boolean = false;
  constructor(public alerCtrl: AlertController, platform:Platform) {
this.isAndroid=platform.is('android');
  }
}
