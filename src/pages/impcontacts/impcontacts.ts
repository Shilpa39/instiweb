import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-impcontacts',
  templateUrl: 'impcontacts.html'
})
export class ImpcontactsPage {

contacts_a=[
	{
		"name" : "Medical Emergency",
		"phone" : "04422578888"
	},
	{
		"name" : "Security",
		"phone" : "04422578888"
	},
	{
		"name" : "Tele counselling",
		"phone" : "04422575555"
	},
	{
		"name" : "LAN complaints",
		"phone" : "04422575987"
	},
	{
		"name" : "Electrical Complaints",
		"phone" : "04422578187"
	},
	{
		"name" : "CCW Office",
		"phone" : "04422578504"
	}
];

contacts_e=
[
	{
		"designation" : "Student General Secretary",
		"name" : "Kompella Kashyap Sriram",
		"phone" : "",
		"mail" : "",
		"photo" : "../../assets/imgs/logo.png"
	}
];

  constructor(platform: Platform,private http: Http) 
  {
  	this.contactType="Administrative";
  }

}
