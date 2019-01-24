import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{ title: string, note: string, icon: string, chapter: number }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['book'];

    this.items = [];

    this.items.push({
      title: 'Cover Page',
      note: 'Cover Page My Ionic Book',
      icon: this.icons[0],
      chapter: 0
    })

    // this.items.push({
    //   title: 'Table of Contents',
    //     note: 'Table of Contents',
    //     icon: this.icons[0]
    // })

    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Chapter ' + i,
        note: 'This is Chapter #' + i,
        icon: this.icons[0],
        chapter: i
      });
    }
  }

  itemTapped(event, item) {
    if (item.title === 'Cover Page') {
      this.navCtrl.push(HelloIonicPage, { item: item })
    }
    else {
      this.navCtrl.push(ItemDetailsPage, {
        item: item
      });
    }
  }
}
