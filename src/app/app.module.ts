import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import {Timnha} from '../pages/Timnha/Timnha';
import {Yeucautim} from '../pages/Yeucautim/Yeucautim';
import {Tabthuenha} from '../pages/Tabthuenha/Tabthuenha';
import {Trangchu} from '../pages/Trangchu/Trangchu';
import {Dangki} from '../pages/Dangki/Dangki';
import {Dangnhap} from '../pages/Dangnhap/Dangnhap';
import {Yeucaunhantin}  from '../pages/Yeucaunhantin/Yeucaunhantin';
import {Thongtin} from '../pages/Thongtin/Thongtin';
import {Dangtin} from '../pages/Dangtin/Dangtin';
import {Thongtinnhatro} from '../pages/Thongtinnhatro/Thongtinnhatro';


@NgModule({
  declarations: [
    MyApp,
    Timnha,

    Yeucautim,
    Tabthuenha,
    Trangchu,
    Dangki,
    Dangnhap,
    Yeucaunhantin,
    Thongtin,
    Dangtin,
    Thongtinnhatro,

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Timnha,
    Yeucautim,
    Tabthuenha,
    Trangchu,
    Dangki,
    Dangnhap,
    Yeucaunhantin,
    Thongtin,
    Dangtin,
    Thongtinnhatro,

  ],
  providers: []
})
export class AppModule {}
