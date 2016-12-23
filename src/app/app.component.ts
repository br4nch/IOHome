import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import {
  Register, Login, Rent, PostedNews
  , Info, RequestNews, FindHouse, Home
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
      { title: 'Đăng nhập', component: Login },
      { title: 'Đăng kí', component: Register },
      { title: 'Đăng tin', component: PostedNews },
      { title: 'Yêu cầu tìm nhà trọ', component: FindHouse },
      { title: 'Thuê nhà', component: Rent },
      { title: 'Thông tin nhà trọ', component: Info },
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
