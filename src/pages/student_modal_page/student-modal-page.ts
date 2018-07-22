import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';


@Component({
  selector: 'page-student-modal-page',
  templateUrl: 'student-modal-page.html'
})
export class StudentModalPage 
{

rollno:string;
link:string;
data_particular:any;

name="";
stdRollno="";
imageURL="";
room_no="";
hostel="";
mailid="";
theme:any;

constructor(
        public params: NavParams,
        private http: Http,
      public viewCtrl: ViewController)
  {
    console.log("first of modal");
    this.theme='green';

    this.rollno=this.params.get('Roll_num');
    this.link = '/studentsapp/studentlist/'+'getresultbyroll.php?rollno='+this.rollno;
    
      this.http.get(this.link).subscribe(res => 
      {
          this.data_particular=res.json();
          this.name=this.data_particular[0].fullname;
          this.stdRollno=this.data_particular[0].username;
          this.imageURL=this.data_particular[0].url;
          this.room_no=this.data_particular[0].roomno;
          this.hostel=this.data_particular[0].hostel;
          this.mailid=this.rollno+'@smail.iitm.ac.in';
          console.log("last of showImage");
       });
  }

  dismiss() 
  {
    this.viewCtrl.dismiss();
  }

}
