import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class Register {
  public event = {
    month: '1995-09-27',
  }
  msg: any;
  name: any;
  username: any;
  password: any;
  repassword: any;
  sex: any;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) { }

  ionViewDidLoad() {
    console.log('Hello Register Page');
  }
  doRegister() {
    if (this.name != null && this.username != null && this.password != null && this.repassword != null && this.sex != null) {
      this.msg ="Bạn đã đăng ký thành công";
    } else {
      this.msg = "Bạn chưa điền đủ thông tin";
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

}
