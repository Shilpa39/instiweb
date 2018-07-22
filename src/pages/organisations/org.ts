import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';
import { OrgIndPage } from '../org_ind/org_ind';
import { ModalController } from 'ionic-angular';


@Component({
  selector: 'page-org',
  templateUrl: 'org.html'
})
export class OrgPage {

orgs=
  [
  {imageURL:'../../assets/imgs/logo.png',name:'Insti Media',details:'blah blah blah'},
  {imageURL:'../../assets/imgs/logo.png',name:'Media Club at IIT Madras',details:'blah blah blah blah...blah blah blah blah...blah blah blah blah...blah blah blah blah...blah blah blah blah...blah blah blah blah...'}
  ];

  constructor(public modalCtrl: ModalController) {}

  OrgOpen(orgname:string)
  {
  	let modal = this.modalCtrl.create(OrgIndPage,{Orgname:orgname});
    modal.present();
  }

}
