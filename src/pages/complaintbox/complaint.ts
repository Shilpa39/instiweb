import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-complaint',
  templateUrl: 'complaint.html'
})
export class ComplaintPage {

  url:string = '/studentsapp/studentlist/'+'getresultbyroll.php?rollno='+'ee16b'

  content:any;
  stdlist=[];
  numstr="";
  imag:any;
  imageToShow: any;

  constructor(platform: Platform,private http: Http) {}

}
