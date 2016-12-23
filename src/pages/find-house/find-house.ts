import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AlertController,Platform } from 'ionic-angular';
import { Rent } from '../pages';
@Component({
  selector: 'page-find-house',
  templateUrl: 'find-house.html'
})
export class FindHouse {
  /*house1: boolean = false; house2: boolean = false; house3: boolean = false; house4: boolean = false;
  gt1: boolean = false; gt2: boolean = false; gt3: boolean = false; gt4: boolean = false; gt5: boolean = false;
  dt1: boolean = false; dt2: boolean = false; dt3: boolean = false; dt4: boolean = false; dt5: boolean = false;
  tp1: boolean = false; tp2: boolean = false; tp3: boolean = false;
  q1: boolean = false; q2: boolean = false; q3: boolean = false; q4: boolean = false;
  p1: boolean = false; p2: boolean = false; p3: boolean = false; p4: boolean = false;
  tp: boolean = false; qh: boolean = false; px: boolean = false;*/
  dv: any; gt: any; dt: any; tp: any; qh: any; px: any;
  gt1: any; gt2: any; gt3: any; gt4: any; gt5: any;
  dt1: any; dt2: any; dt3: any; dt4: any;
  dv1: any; dv2: any; dv3: any; dv4: any;
  q1: any ; q2: any; q3: any; q4: any;
  p1: any; p2: any; p3: any; p4: any;
  tp1: any; tp2: any; tp3: any;
  pet: string = "one";
  isAndroid: boolean = false;
  constructor(public alerCtrl: AlertController, platform:Platform, public navCtrl: NavController, public toastCtrl: ToastController) {
  this.isAndroid=platform.is('android');
  
  } 
  getCheckbox(){
    if((this.dv=="dv1"||this.dv=="dv2"||this.dv=="dv3"||this.dv=="dv4") && (this.dt=="dt1"||this.dt=="dt2"||this.dt=="dt3"||this.dt=="dt4") && (this.tp=="tp1"||this.tp=="tp2"||this.tp=="tp3") && (this.qh=="q1"||this.qh=="q2"||this.qh=="q3"||this.qh=="q4") && (this.px=="p1"||this.px=="p2"||this.px=="p3"||this.px=="p4") && (this.gt=="gt1"||this.gt=="gt2"||this.gt=="gt3"||this.gt=="gt4"||this.gt=="gt5"))
    {
      this.navCtrl.push(Rent);
    }
    else 
    {
      let toast = this.toastCtrl.create({
        message: "Bạn chưa chọn đầy đủ thông tin",
        duration: 2000,
        position: 'middle'
      });
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
      toast.present();
    }
    console.log("object");
  }

  presentToastRequestNews(){
    this.getCheckbox();
  }
}
