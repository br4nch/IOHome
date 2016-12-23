import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import {
  PostedNews, RequestNews, FindHouse, Home
} from '../pages/pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = Home;
  pages: Array<{ title: string, component: any }>;
  constructor(public platform: Platform) {
    this.initializeApp();
    this.pages = [
      { title: "Trang chủ", component: Home },
      { title: 'Yêu cầu tìm nhà trọ', component: FindHouse },
      { title: 'Đăng tin', component: PostedNews },
      { title: 'Nhận thông báo', component: RequestNews },
    ];

  }
  initializeApp() {
    this.platform.ready().then(() => { StatusBar.styleDefault(); });
  }
  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
