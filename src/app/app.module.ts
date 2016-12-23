import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { IOHomeApi } from '../shared/shared';
import {
  Rent, Register, PostedNews, Login
  , Info, RequestNews, FindHouse, Home
} from '../pages/pages';

@NgModule({
  declarations: [
    MyApp,
    FindHouse,
    Rent,
    Home,
    Register,
    Login,
    RequestNews,
    Info,
    PostedNews
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FindHouse,
    Rent,
    Home,
    Register,
    Login,
    RequestNews,
    Info,
    PostedNews
  ],
  providers: [IOHomeApi]
})
export class AppModule { }
