import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {}

  ionViewDidLoad() {
    console.log('Hello Login Page');
  }
  forgetAccount(){
    let toast = this.toastCtrl.create({
      message: "Quên tài khoản? Kệ bạn =_=",
      duration: 5000,
      showCloseButton: true,
      closeButtonText: 'Ok',
      position: 'middle',
      cssClass: 'posted-news'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
