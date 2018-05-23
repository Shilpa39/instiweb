import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-aboutus',
  templateUrl: 'aboutus.html'
})
export class AboutusPage {

  constructor(platform: Platform,private http: Http) {
    platform.ready().then(() => {});
  }

}
