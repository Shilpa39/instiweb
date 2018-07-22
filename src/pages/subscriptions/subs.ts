import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-subs',
  templateUrl: 'subs.html'
})
export class SubsPage {

  subs=
  [
  {name:'Extra Mural Lectures',enabled:true},
  {name:'Extra Mural Lectures',enabled:true},
  {name:'Extra Mural Lectures',enabled:true},
  {name:'Extra Mural Lectures',enabled:true},
  {name:'Extra Mural Lectures',enabled:true},
  {name:'Extra Mural Lectures',enabled:true},
  {name:'Extra Mural Lectures',enabled:true},
  {name:'Extra Mural Lectures',enabled:true},
  ];

  constructor(platform: Platform,private http: Http) {}

SubscribeTo(subName:string)
{
	
}

}
