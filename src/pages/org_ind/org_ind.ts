import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';


@Component({
  selector: 'page-org_ind',
  templateUrl: 'org_ind.html'
})
export class OrgIndPage 
{

OrgName:string;
theme:any;

posts=
[
	{When:'34 days ago'},
	{When:'41 days ago'}
];

	constructor(
        public params: NavParams,
        private http: Http,
      public viewCtrl: ViewController)
  {
  	this.OrgName=this.params.get('Orgname');
  	this.theme='green';
  }

  dismiss() 
  {
    this.viewCtrl.dismiss();
  }
}