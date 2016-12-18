import { Component } from '@angular/core';
import { AlertController, Platform, NavController} from 'ionic-angular';
import { IOHomeApi } from '../../shared/shared';
import {Info,FindHouse} from '../pages';

@Component({
  selector: 'page-rent',
  templateUrl: 'rent.html'
})
export class Rent {
  houseinfos: any;
  houseinfos1: any;
  houseinfos2: any;
  testRadioOpen: boolean;
  testRadioResult;
  pet: string = "chuaxem";
  isAndroid: boolean = false;
  constructor(public alerCtrl: AlertController, platform: Platform, private ioHomeApi: IOHomeApi, public navCtrl:NavController) {
    this.isAndroid = platform.is('android');
  }
   ionViewDidLoad(){
    this.ioHomeApi.getHouseInfo().then(data => this.houseinfos = data);
    this.ioHomeApi.getHouseInfo1().then(data => this.houseinfos1 = data);
    this.ioHomeApi.getHouseInfo2().then(data => this.houseinfos2 = data);
    console.log('Load House Info!!!!!');
  }
  goToInfor() {
    this.navCtrl.push(Info);
  }
    goToFindHouse() {
    this.navCtrl.push(FindHouse);
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
