import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { BookserviceProvider } from '../../providers/bookservice/bookservice';
import { book } from '../../providers/bookservice/book';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{ title: string, note: string, icon: string, chapter: number }>;
  myBook: book;


  constructor(public bookService: BookserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
    // get the book 
    this.myBook = this.bookService.getBook();

    this.icons = ['book'];

    this.items = [];

    this.items.push({
      title: 'Cover Page',
      note: 'Cover Page My Ionic Book',
      icon: this.icons[0],
      chapter: 0
    })

    // load the chapters to be displayed
    for (let i = 0; i < this.myBook.chapters.length; i++) {
      this.items.push({
        title: 'Chapter ' + this.myBook.chapters[i].nbr,
        note: 'This is Chapter #' + this.myBook.chapters[i].nbr,
        icon: this.icons[0],
        chapter: this.myBook.chapters[i].nbr
      });
    }

  }

  // go to the item selected from the Table of Contents
  itemTapped(event, item) {

    if (item.title === 'Cover Page') {
      this.navCtrl.push(HelloIonicPage)
    }
    else {
      this.navCtrl.push(ItemDetailsPage, {
        item: item
      });
    }
  }

  // clicking on the right arrow will take you to the first page
  gotoPg1() {
    this.navCtrl.push(ItemDetailsPage, {
      item: {
        title: 'Chapter ' + this.myBook.chapters[0].nbr,
        note: 'This is Chapter #' + this.myBook.chapters[0].nbr,
        icon: this.icons[0],
        chapter: this.myBook.chapters[0].nbr
      }
    })
  }
}
