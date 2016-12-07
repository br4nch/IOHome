import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-request-find',
  templateUrl: 'request-find.html'
})
export class RequestFind {
   testRadioOpen: boolean;
  testRadioResult;
 testRadioOpen1: boolean;
  testRadioResult1;
  testRadioOpen2: boolean;
  testRadioResult2;

  constructor(public alerCtrl: AlertController) {}
doRadio() {
    let alert = this.alerCtrl.create();
    alert.setTitle('Gia Hạn');

    alert.addInput({
      type: 'radio',
      label: '3 ngày',
      value: 'blue',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: '5 ngày',
      value: 'green'
    });

    alert.addInput({
      type: 'radio',
      label: '1 tuần',
      value: 'red'
    });

    alert.addInput({
      type: 'radio',
      label: '2 tuần',
      value: 'yellow'
    });

    // alert.addInput({
    //   type: 'radio',
    //   label: 'Địa Điểm Xa Nhất',
    //   value: 'purple'
    // });

    // alert.addInput({
    //   type: 'radio',
    //   label: 'Địa Điểm Gần Nhất',
    //   value: 'white'
    // });
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



doRadio1() {
    let alert = this.alerCtrl.create();
    alert.setTitle('Thông Báo');

    alert.addInput({
      type: 'radio',
      label: 'Turn on',
      value: 'blue',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Turn off',
      value: 'green'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen1 = false;
        this.testRadioResult1 = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen1 = true;
    });
  }

doRadio2() {
    let alert = this.alerCtrl.create();
    alert.setTitle('Xóa');

    alert.addInput({
      type: 'radio',
      label: 'Yes',
      value: 'blue',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'No',
      value: 'green'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen2 = false;
        this.testRadioResult2 = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen2 = true;
    });
  }
}
