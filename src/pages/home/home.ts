import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Rent, FindHouse, Login, PostedNews } from '../pages';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Home Page');
  }
  goToRent(){
    this.navCtrl.push(Rent);
  }
  goToFindHouse(){
    this.navCtrl.push(FindHouse);
  }
  goToLogin(){
    this.navCtrl.push(Login);
  }
  goToPostedNews(){
    this.navCtrl.push(PostedNews)
  }

}
