import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  url:string = '/studentsapp/studentlist/'+'getresultbyroll.php?rollno='+'ee16b'

  content:any;
  stdlist=[];
  numstr="";
  imag:any;
  imageToShow: any;

  constructor(platform: Platform,private http: Http) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
     for(var i=1;i<=10;i++)
     {
     	if(i<10){this.numstr='00'+i.toString();}
     	else if(i<100){this.numstr='0'+i.toString();}
     	else{this.numstr=i.toString();}
      	this.http.get(this.url+this.numstr).subscribe(res => {
        this.content=res.json();
        this.http.get(this.content[0].url)
        .subscribe(res => {this.imag=res.blob();
        	console.log(this.imag);});
       /* this.http.get(this.content[0].url).subscribe(imageSource => {
        	console.log('entered');
        	this.imag=imageSource._body;
        });*/
        createImageFromBlob(image: Blob) {
   		let reader = new FileReader();
   		reader.addEventListener("load", () => {
      	this.imageToShow = reader.result;
  		 }, false);

   		if (image) {
      	reader.readAsDataURL(image);}
		}
        this.stdlist.push([this.content[0].username,this.content[0].fullname,this.imag,this.content[0].url]);
		});
      }
      console.log(this.stdlist);
      }
    );
  }

}
