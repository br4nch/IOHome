import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-posted-news',
  templateUrl: 'posted-news.html'
})
export class PostedNews {
  kind: any = ""; roomNumber: any = ""; object: any = ""; phone: any = "";
  area: any = ""; address: any = ""; cost: any = "";
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) { }

  ionViewDidLoad() {
    console.log('Hello PostedNews Page');
  }
  presentToastPostedNews() {
    let toast = this.toastCtrl.create({
      message: "Đăng tin từ \nLoại: " + this.kind + "\nSố phòng: " + this.roomNumber + "\nĐối tượng: " + this.object + "\nSĐT: "
      + this.phone + "\nDiện tích: " + this.area + "\nĐịa chỉ: " + this.address + "\nGiá tiền: " + this.cost,
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
