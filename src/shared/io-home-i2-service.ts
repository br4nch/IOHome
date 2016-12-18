import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class IOHomeApi {
    private baseUrl = "https://io-home-i2.firebaseio.com/"
    constructor(private http: Http) { }

    getHouseInfo() {
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/house-infos.json`)
                .subscribe(res => resolve(res.json()));
        });
    }
    getHouseInfo1() {
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/house-infos2.json`)
                .subscribe(res => resolve(res.json()));
        });
    }
    getHouseInfo2() {
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/house-infos3.json`)
                .subscribe(res => resolve(res.json()));
        });
    }
    getUserInfo() {
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/user.json`)
                .subscribe(res => resolve(res.json()));
        });
    }
}    