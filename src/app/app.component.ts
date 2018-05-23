import { Component,ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverContentPage } from '../app/popover';

import { NotifPage } from '../pages/notif/notif';
import { OrgPage } from '../pages/organisations/org';
import { StdsearchPage } from '../pages/stdsearch/stdsearch';
import { MapPage } from '../pages/instimap/map';
import { CalendarPage } from '../pages/calendar/calendar';
import { TimetablePage } from '../pages/timetable/timetable';
import { ImpcontactsPage } from '../pages/impcontacts/impcontacts';
import { ComplaintPage } from '../pages/complaintbox/complaint';
import { ProfilePage } from '../pages/profile/profile';
import { SubsPage } from '../pages/subscriptions/subs';
import { AboutusPage } from '../pages/aboutus/aboutus';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = NotifPage;

  pages=[
  {page:NotifPage,name:'Notifications',icon:'home'},
  {page:OrgPage,name:'Organizations',icon:'people'},
  {page:StdsearchPage,name:'Student Search',icon:'search'},
  {page:MapPage,name:'Insti Map',icon:'map'},
  {page:CalendarPage,name:'Calendar',icon:'calendar'},
  {page:TimetablePage,name:'Time Table',icon:'school'},
  {page:ImpcontactsPage,name:'Important Contacts',icon:'contacts'},
  {page:ComplaintPage,name:'Complaint Box',icon:'chatboxes'}];
  
  options=[
  {page:ProfilePage,name:'Profile',icon:'person'},
  {page:SubsPage,name:'Subscriptions',icon:'paper'},
  {page:AboutusPage,name:'About Us',icon:'information-circle'}
  ];

  @ViewChild('mycontent') nav: NavController;

  presentpage='Notifications';
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public popoverCtrl: PopoverController) {
  }

openpage(inp:any,naam:string)
{
  this.nav.push(inp);
  this.presentpage=naam;
}

openPopover(myEvent) 
  {
    let popover = this.popoverCtrl.create(PopoverContentPage);
    popover.present({
      ev: myEvent
    });
  }

}