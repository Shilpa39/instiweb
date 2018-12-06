import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-mess',
  templateUrl: 'mess.html'
})
export class MessPage {

messes=[];
//mess=any[];
content:any;
arr=[];
theme:any;
url:string = 'https://students.iitm.ac.in/studentsapp/messmenu/get_messmenu.php';
types=["SI1","SI2","NI1","NI2"];
fullnames=["South Indian 1","South Indian 2","North Indian 1","North Indian 2"];
order=[];


  constructor(platform: Platform,private http: Http) 
  {
    this.theme='green';
    platform.ready().then(() => 
    {
/*
    this.http.get(this.url+this.types[0]).subscribe(res =>
    {
        this.messes=res.json();
    }
      );
  */  for(var c=0;c<4;c++)
    {
      const data1 = new FormData();
      data1.append('menutype', this.types[c]);
        this.http.post(this.url,data1).subscribe(res =>
        {
          //console.log(res);
          this.content=res.json();
          this.arr.push(this.content.map(i => i.menu.replace(/\n/g, "<br />")));
            this.messes.push(this.content);
            console.log(this.content);
            for(var k=0;k<4;k++)
            {
            if(this.content[0].messtype==this.types[k])
            {this.order.push(this.fullnames[k]);}
            }
        }
        );
    }

    });

  }

}