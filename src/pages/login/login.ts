import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';
import { PersonalInfoService } from '../../services/personalinfo';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  url:string = 'https://students.iitm.ac.in/studentsapp/login/index.php';

  public content:any;
  if_ldap:boolean=false;
  if_freshie:boolean=false;
  public RollNumber:string;
  public Password:string;

  //loginStatus:boolean=false;
  message:string='';

  theme:any;
  obj:any;
  stdlist=[];
  numstr="";
  imag:any;
  imageToShow: any;

  constructor(platform: Platform,private http: Http,public viewCtrl: ViewController,public personalInfoService:PersonalInfoService) 
  {
  	    platform.ready().then(() => {

    	this.theme='green';
    });
  }

  ldap()
  {
  	this.if_ldap=true;
  	this.if_freshie=false;
  }
  freshie()
  {
  	this.if_freshie=true;
  	this.if_ldap=false;
  }

  dologin()
  {
  	const data1 = new FormData();
      	data1.append('roll', this.RollNumber);
      	data1.append('pass', this.Password);
        this.http.post(this.url,data1).subscribe(res =>
        {
          //console.log(res);
          this.content=res.json();
          console.log(res);
          console.log(this.content);
          if(this.content.success==1)
          {
          	this.personalInfoService.loginStatus=true;
          	this.personalInfoService.personalInfo=this.content;
          	this.viewCtrl.dismiss();
          }
          else
          {
          	this.message=this.content.message;
          }
        }
        										);
  }

}
