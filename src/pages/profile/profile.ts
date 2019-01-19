import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PersonalInfoService } from '../../services/personalinfo';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

theme:any;
fullname:string='';
username:string='';
hostel:string='';
Room:string='';
Phone:number;
Email:string='';
Mess:string='';
phoneclick:boolean=false;
mailclick:boolean=false;
imageURL="../../assets/imgs/logo.png";
url:string="https://photos.iitm.ac.in/byroll.php?roll=";


pushPage: any;

  constructor(platform: Platform,private http: Http,public personalInfoService:PersonalInfoService) 
  {
  	this.theme='green';
    this.pushPage=LoginPage;
    console.log("profile.ts result",personalInfoService.personalInfo.result[0].username);

  if(personalInfoService.loginStatus)
  {
    this.imageURL=this.url+personalInfoService.personalInfo.result[0].username;
    this.fullname=personalInfoService.personalInfo.result[0].fullname;
    this.username=personalInfoService.personalInfo.result[0].username;
    this.hostel=personalInfoService.personalInfo.result[0].hostel;
    this.Room=personalInfoService.personalInfo.result[0].room;
  }
  

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
