import { Component} from '@angular/core';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {Nav,NavController} from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController) {
    this.icons = ['book'];
    
    this.items = [];
    
    this.items.push({
      title: 'Cover Page',
        note: 'Cover Page My Ionic Book',
        icon: this.icons[0]
    })

    this.items.push({
      title: 'Table of Contents',
        note: 'Table of Contents',
        icon: this.icons[0]
    })

    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Chapter ' + i,
        note: 'This is Chapter #' + i,
        icon: this.icons[0]
      });
    }


    

  }


  

}
