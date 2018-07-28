import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-mess',
  templateUrl: 'mess.html'
})
export class MessPage {

messes:any[];
random=[];
theme:any;
foodtypes=['Breakfast','Lunch','Dinner'];
Days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  constructor(platform: Platform,private http: Http) 
  {
    this.theme='green';

  	this.messes=
    [
  	[	
  		[
  			['food1','food2','food3'],
  			['food4','food5','food6'],
  			['food7','food8','food9']
  		],
  		[
  			['food1','food2','food3'],
  			['food4','food5','food6'],
  			['food7','food8','food9']
  		],
  		[
  			['food1','food2','food3'],
  			['food4','food5','food6'],
  			['food7','food8','food9']
  		]
  	],
    [  
      [
        ['food1','food2','food3'],
        ['food4','food5','food6'],
        ['food7','food8','food9']
      ],
      [
        ['food1','food2','food3'],
        ['food4','food5','food6'],
        ['food7','food8','food9']
      ],
      [
        ['food1','food2','food3'],
        ['food4','food5','food6'],
        ['food7','food8','food9']
      ]
    ]
    ];

    this.random=['Aqwe','Bggh','Chghg','Djgh'];


  }

}