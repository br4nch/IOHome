import { Component } from '@angular/core';
import { AlertController,Platform } from 'ionic-angular';

/*
  Generated class for the Tabthuenha page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabthuenha',
  templateUrl: 'tabthuenha.html'
})
export class Tabthuenha {
  testRadioOpen: boolean;
  testRadioResult;
  pet: string = "chuaxem";
  isAndroid: boolean = false;
  constructor(public alerCtrl: AlertController, platform:Platform) {
this.isAndroid=platform.is('android');
  }
 doRadio() {
    let alert = this.alerCtrl.create();
    alert.setTitle('Sắp Xếp');

    alert.addInput({
      type: 'radio',
      label: 'Giá Từ Cao Đến Thấp',
      value: 'blue',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Giá Từ Thấp Đến Cao',
      value: 'green'
    });

    alert.addInput({
      type: 'radio',
      label: 'Tin Mới Nhất',
      value: 'red'
    });

    alert.addInput({
      type: 'radio',
      label: 'Tin Cũ',
      value: 'yellow'
    });

    alert.addInput({
      type: 'radio',
      label: 'Địa Điểm Xa Nhất',
      value: 'purple'
    });

    alert.addInput({
      type: 'radio',
      label: 'Địa Điểm Gần Nhất',
      value: 'white'
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }

}
