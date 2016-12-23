import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { IOHomeApi } from '../../shared/shared';
import { Home, Register } from '../pages';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
  msg: any ;
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
      this.msg = "Bạn chưa nhập thông tin";
    }
    else {
      this.msg = "Sai thông tin đăng nhập";
    }
    let toast = this.toastCtrl.create({
        message: this.msg,
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
  goToRegister(){
    this.navCtrl.push(Register);
  }
}

