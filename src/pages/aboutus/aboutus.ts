import { Component } from '@angular/core';
import { NavController ,ViewController} from 'ionic-angular';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-aboutus',
  templateUrl: 'aboutus.html'
})
export class AboutusPage {

theme:any;

  constructor(platform: Platform,private http: Http,public viewCtrl: ViewController) {
    platform.ready().then(() => {

    	this.theme='green';
    });
  }

  dismiss() 
  {
    this.viewCtrl.dismiss();
  }

}
