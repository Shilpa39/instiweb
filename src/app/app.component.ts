import { Component,ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverContentPage } from '../app/popover';
import { ModalController } from 'ionic-angular';

import { LoginPage } from '../pages/login/login';
import { PersonalInfoService } from '../services/personalinfo';

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
import { MessPage } from '../pages/mess/mess';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = NotifPage;

  pages=
  [
  {page:NotifPage,name:'Notifications',icon:'ios-notifications'},
  {page:StdsearchPage,name:'Student Search',icon:'search'},
  {page:MessPage,name:'Mess Menu',icon:'ios-restaurant'},
  {page:MapPage,name:'Insti Map',icon:'map'},
  {page:CalendarPage,name:'Calendar',icon:'calendar'},
  {page:TimetablePage,name:'Time Table',icon:'school'},
  {page:ImpcontactsPage,name:'Important Contacts',icon:'contacts'},
  {page:ComplaintPage,name:'Complaint Box',icon:'chatboxes'}
  ];
  
  options=
  [
  {page:ProfilePage,name:'Profile',icon:'person'},
  {page:AboutusPage,name:'About Us',icon:'information-circle'}
  ];

  bottomtabs=
  [
  {page:NotifPage,name:'Notifications',icon:'home'},
  {page:OrgPage,name:'Organizations',icon:'people'},
  {page:SubsPage,name:'Subscriptions',icon:'paper'},
  ];

  fullname:string='';
  username:string='';

  @ViewChild('mycontent') nav: NavController;

  presentpage:any='Notifications';
  content:any;
  theme:any;
  loginStatus:boolean=false;
  imageurl:string="../assets/imgs/logo.png";
  url:string="https://photos.iitm.ac.in/byroll.php?roll=";
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public popoverCtrl: PopoverController,public modalCtrl: ModalController,public personalInfoService:PersonalInfoService) {
    this.theme='green';
    if(personalInfoService.loginStatus==false)
    {
      let modal = modalCtrl.create(LoginPage);
      modal.present();
      return ;
    }
  }

loaddetails()
{
    if(this.personalInfoService.loginStatus)
    {
      this.imageurl=this.url+this.personalInfoService.personalInfo.result[0].username;
      this.fullname=this.personalInfoService.personalInfo.result[0].fullname.toUpperCase();
      this.username=this.personalInfoService.personalInfo.result[0].username;
    }
}

openpage(inp:any,naam:string)
{
  if(naam=='About Us')
  {
    let modal = this.modalCtrl.create(AboutusPage);
    modal.present();
    return;
  }
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

logout()
{
  console.log(this.personalInfoService.personalInfo);
  this.personalInfoService.loginStatus=false;
  this.personalInfoService.personalInfo={};
  let modal = this.modalCtrl.create(LoginPage);
      modal.present();
      return ;
}

}