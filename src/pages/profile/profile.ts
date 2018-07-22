import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

theme:any;
hostel:string;
Room:string;
Phone:number;
Email:string;
Mess:string;
phoneclick:boolean;
mailclick:boolean;

  constructor(platform: Platform,private http: Http) 
  {
  	this.theme='green';
  	this.hostel='SHARAVATHI';
	this.Room='482';
	this.Phone=7012903343;
	this.Email='ee16b039@smail.iitm.ac.in';
	this.Mess='Annamalai-SI-Vin GF';
	this.phoneclick=false;
	this.mailclick=false;

  }

  phoneClick()
  {
  	this.phoneclick=true;
  }

  mailClick()
  {
  	this.mailclick=true;
  }

}
