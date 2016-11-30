import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { IOHomeApi } from '../shared/shared';
import {
  Rent, Register, PostedNews, Login
  , Info, RequestFind, RequestNews, FindHouse, Home
} from '../pages/pages';

@NgModule({
  declarations: [
    MyApp,
    FindHouse,
    RequestFind,
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
    RequestFind,
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
