import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

/*
  Generated class for the Yeucaunhantin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-yeucaunhantin',
  templateUrl: 'yeucaunhantin.html'
})
export class Yeucaunhantin {
  public house; toilet; freetime; cooking; parking;
  security; market; bus; supermarket; school: boolean;

  constructor(public navCtrl: NavController, private toastCtrl: ToastController) { }

  ionViewDidLoad() {
    console.log('Hello Yeucaunhantin Page');
  }

  getNotification() {
    if (this.house != false) {
      this.house = " House Checked ";
    }
    else {
      this.house = null;
    }
    console.log("object");
  }

  presentToast() {
    if(this.house == null){
      this.house = "";
    }
    let toast = this.toastCtrl.create({
      message: 'Nhận thông báo từ: ' + this.house ,
      duration: 3000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
