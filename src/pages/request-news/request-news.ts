import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Home } from '../pages';

@Component({
  selector: 'page-request-news',
  templateUrl: 'request-news.html'
})
export class RequestNews {
  fake: boolean = false; house: boolean = false; toilet: boolean = false; freetime: boolean = false;
  cooking: boolean = false; parking: boolean = false; security: boolean = false;
  market: boolean = false; bus: boolean = false; supermarket: boolean = false;
  school: boolean = false;
  private message: any = null;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) { }
  ionViewDidLoad() {
    console.log('Hello RequestNews Page');
  }

  getNotification() {
    if (this.fake == true) {
      this.message += "";
    }
    else {
      this.message = "";
    }
    if (this.house == true) {
      this.message += "Nhà mặt tiền," + " ";
    }
    if (this.toilet == true) {
      this.message += "Nhà vệ sinh riêng," + " ";
    }
    if (this.freetime == true) {
      this.message += "Tự do giờ giấc," + " ";
    }
    if (this.cooking == true) {
      this.message += "Cho nấu ăn," + " ";
    }
    if (this.parking == true) {
      this.message += "Có chỗ để xe," + " ";
    }
    if (this.security == true) {
      this.message += "Khu vực an ninh," + " ";
    }
    if (this.market == true) {
      this.message += "Gần chợ," + " ";
    }
    if (this.bus == true) {
      this.message += "Gần trạm xe bus," + " ";
    }
    if (this.supermarket == true) {
      this.message += "Gần siêu thị," + " ";
    }
    if (this.school == true) {
      this.message += "Gần trường";
    }
    console.log("object");
  }

  presentToastRequestNews() {
    this.getNotification();
    let toast = this.toastCtrl.create({
      message: "Nhận bảng tin từ: " + this.message,
      duration: 3000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
     this.navCtrl.pop(Home);
  }

}
