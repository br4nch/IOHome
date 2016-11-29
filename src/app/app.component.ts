import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { Timnha } from '../pages/Timnha/Timnha';
import { Yeucautim } from '../pages/Yeucautim/Yeucautim';
import { Tabthuenha } from '../pages/Tabthuenha/Tabthuenha';
import { Trangchu } from '../pages/Trangchu/Trangchu';
import { Dangki } from '../pages/Dangki/Dangki';
import { Dangnhap } from '../pages/Dangnhap/Dangnhap';
import { Yeucaunhantin } from '../pages/Yeucaunhantin/Yeucaunhantin';
import { Thongtin } from '../pages/Thongtin/Thongtin';
import { Dangtin } from '../pages/Dangtin/Dangtin';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = Trangchu;
  pages: Array<{ title: string, component: any }>;
  constructor(public platform: Platform) {
    this.initializeApp();
    this.pages = [
      { title: "Trang chủ", component: Trangchu },
      { title: 'Đăng nhập', component: Dangnhap },
      { title: 'Đăng kí', component: Dangki },
      { title: 'Yêu cầu tìm nhà trọ', component: Yeucautim },
      { title: 'Tìm nhà trọ', component: Timnha },
      { title: 'Thông tin nhà trọ', component: Thongtin },
      { title: 'Thuê nhà', component: Tabthuenha },
      { title: 'Nhận thông báo', component: Yeucaunhantin },
      { title: 'Đăng tin', component: Dangtin },
    ];

  }
  initializeApp() {
    this.platform.ready().then(() => { StatusBar.styleDefault(); });
  }
  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
