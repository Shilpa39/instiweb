import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutusPage } from '../pages/aboutus/aboutus';


@Component({
  template: `
      <button ion-item full (click)="openabout()">About</button>
      <button ion-item full >Log out</button>
`
})

export class PopoverContentPage {
constructor(public navCtrl: NavController) {}

openabout()
{
	this.navCtrl.push(AboutusPage);
}

}

