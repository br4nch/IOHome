import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { IOHomeApi } from '../../shared/shared';
import { Home } from '../pages'; 

@Component({ 
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
  user: any;
  username: any;
  password: any;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private ioHomeApi: IOHomeApi) {

  }

  ionViewDidLoad() {
    this.ioHomeApi.getUserInfo().then(data => this.user = data);
        console.log('Hello Login Page');
  }
  forgetAccount() {
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
  doLogin() {
    if (this.username != null && this.password != null) {
        this.navCtrl.push(Home);
      
  }else{
    let toast = this.toastCtrl.create({
      message: "Sai thông tin đăng nhập",
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
}

