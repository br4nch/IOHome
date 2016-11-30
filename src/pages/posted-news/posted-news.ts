import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-posted-news',
  templateUrl: 'posted-news.html'
})
export class PostedNews {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PostedNews Page');
  }

}
