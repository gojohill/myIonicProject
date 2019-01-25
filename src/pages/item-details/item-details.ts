import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
// ionic service to access the book
import { BookserviceProvider } from '../../providers/bookservice/bookservice';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html',
  providers: [BookserviceProvider]
})
export class ItemDetailsPage {
  selectedItem: any;
  bookIs: any;
  selectedChapter: any;
  selectedPage: any;
  pgNbr = 0;

  constructor(public bookService: BookserviceProvider, public navCtrl: NavController,
    public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.selectedChapter = bookService.getChapter(this.selectedItem.chapter);
    console.log(this.selectedChapter.title)
    this.selectedPage = bookService.getPage(this.selectedItem.chapter, this.pgNbr);
  }

  nextPg() {

    if (this.pgNbr < (this.selectedChapter.pages.length - 1)) {
      this.pgNbr++;
      this.selectedPage = this.bookService.getPage(this.selectedItem.chapter, this.pgNbr);
    } else {
      if (this.selectedItem.chapter < (this.bookService.getNbrOfChapters())) {
        this.selectedItem.chapter++;
        this.pgNbr = 0;
        this.selectedChapter = this.bookService.getChapter(this.selectedItem.chapter);
        this.selectedPage = this.bookService.getPage(this.selectedItem.chapter, this.pgNbr);
      }
    }
  }

  prevPg() {
    if (this.pgNbr > 0) {
      this.pgNbr--;
      this.selectedPage = this.bookService.getPage(this.selectedItem.chapter, this.pgNbr);
    } else {
      if (this.selectedItem.chapter > 1) {
        this.selectedItem.chapter--;
        this.pgNbr = this.bookService.getPagesInChapter(this.selectedItem.chapter) - 1;
        this.selectedChapter = this.bookService.getChapter(this.selectedItem.chapter);
        this.selectedPage = this.bookService.getPage(this.selectedItem.chapter, this.pgNbr);

      }
    }
  }
}
