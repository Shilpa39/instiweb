import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-notif',
  templateUrl: 'notif.html'
})
export class NotifPage {

  events=
  [
      {
        "type" : "Event",
        "organisation" : "Culturals",
        "heading" : "Stagecoach 2018",
        "content" : "../../assets/imgs/logo.png"
      }
  ];

  starred:string;
  starColor:string;

  constructor(platform: Platform,private http: Http) {
    platform.ready().then(() => {

          this.starred="ios-star-outline";
          this.starColor="black"

      }
    );
  }

  StarIt()
  {
      if(this.starred=="ios-star")
      {
        this.starred="ios-star-outline";
        this.starColor="black"

      }
      else
      {
        this.starred="ios-star";
        this.starColor="yellow"
      }
  }

}
