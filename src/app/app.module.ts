import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';
import { NavController } from 'ionic-angular';
import { PopoverContentPage } from '../app/popover';

import { MyApp } from './app.component';

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
import { StudentModalPage } from '../pages/student_modal_page/student-modal-page';
import { OrgIndPage } from '../pages/org_ind/org_ind';
import { MessPage } from '../pages/mess/mess';

@NgModule({
  declarations: [
    MyApp,
    NotifPage,
    OrgPage,
    StdsearchPage,
    MapPage,
    CalendarPage,
    TimetablePage,
    ImpcontactsPage,
    ComplaintPage,
    ProfilePage,
    SubsPage,
    AboutusPage,
    PopoverContentPage,
    StudentModalPage,
    OrgIndPage,
    MessPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotifPage,
    OrgPage,
    StdsearchPage,
    MapPage,
    CalendarPage,
    TimetablePage,
    ImpcontactsPage,
    ComplaintPage,
    ProfilePage,
    SubsPage,
    AboutusPage,
    PopoverContentPage ,
    StudentModalPage,
    OrgIndPage,
    MessPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
