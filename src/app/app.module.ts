import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { IOHomeApi } from '../shared/shared';
import {Timnha} from '../pages/Timnha/Timnha';
import {Yeucautim} from '../pages/Yeucautim/Yeucautim';
import {Tabthuenha} from '../pages/Tabthuenha/Tabthuenha';
import {Trangchu} from '../pages/Trangchu/Trangchu';
import {Dangki} from '../pages/Dangki/Dangki';
import {Dangnhap} from '../pages/Dangnhap/Dangnhap';
import {Yeucaunhantin}  from '../pages/Yeucaunhantin/Yeucaunhantin';
import {Thongtin} from '../pages/Thongtin/Thongtin';
import {Dangtin} from '../pages/Dangtin/Dangtin';

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
    Dangtin
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
    Dangtin
  ],
  providers: [IOHomeApi]
})
export class AppModule { }
