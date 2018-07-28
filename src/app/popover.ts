import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { ModalController } from 'ionic-angular';


@Component({
  template: `
      <button ion-item full (click)="openabout()">About</button>
      <button ion-item full >Log out</button>
`
})

export class PopoverContentPage {
constructor(public modalCtrl: ModalController) {}

openabout()
{
	let modal = this.modalCtrl.create(AboutusPage);
    modal.present();
}

}

