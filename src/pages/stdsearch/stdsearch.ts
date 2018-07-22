import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { StudentModalPage } from '../student_modal_page/student-modal-page';

@Component({
  selector: 'page-stdsearch',
  templateUrl: 'stdsearch.html'
})
export class StdsearchPage {

  url:string = '/studentsapp/studentlist/'+'getresultbyroll.php?rollno='+'ee16b'

  content:any;
  stdlist=[];
  numstr="";
  show:boolean;

  link:string;
  data_particular:any;
  
  name="";
  rollno="";
  imageURL="";

  constructor(platform: Platform,private http: Http,public modalCtrl: ModalController) 
  {
  	console.log("0");
    platform.ready().then(() => 
    {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
     console.log("1");
     for(var i=25;i<=40;i++)
    {
     	if(i<10)
     		{
     			this.numstr='00'+i.toString();
     		}
     	else if(i<100)
     		{
     			this.numstr='0'+i.toString();
     		}
     	else
     		{
     			this.numstr=i.toString();
     		}
     	console.log("2");
      	this.http.get(this.url+this.numstr).subscribe(res => 
      	{
        	this.content=res.json(); 

        	this.stdlist.push([this.content[0].username,this.content[0].fullname,this.content[0].url]);
        	this.stdlist.sort(function(name1, name2)
        	{
	    	if ( name1[0] < name2[0] )
	    	{
	    		return -1;
	    	}
	    	else if( name1[0] > name2[0] )
	    	{
	        return 1;
	    	}
	    	else
	    	{
	    	return 0;	
	    	}
	    	});
        	console.log("4");
		});
    }

      console.log(this.stdlist);
    });
    console.log("5");
    this.show=false;
    console.log("6");
  }

  showImage(stdRollno)
  { 
      console.log(stdRollno);
      console.log(stdRollno);
  /*
  	this.link = '/studentsapp/studentlist/'+'getresultbyroll.php?rollno='+rollno;
  	
  	this.http.get(this.link).subscribe(res => 
  		{
        	this.data_particular=res.json();
        	this.name=this.data_particular[0].fullname;
        	this.rollno=this.data_particular[0].username;
        	this.imageURL=this.data_particular[0].url;
        	console.log("last of showImage");
        });
  	this.show=true;  */
    let modal = this.modalCtrl.create(StudentModalPage,{Roll_num:stdRollno});

    modal.present();
  }


}
