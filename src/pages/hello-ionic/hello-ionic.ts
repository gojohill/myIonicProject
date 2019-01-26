import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list'
import { BookserviceProvider } from '../../providers/bookservice/bookservice';
import { book } from '../../providers/bookservice/book';

// This page will display the Cover Page with a menu.  If the cover picture is clicked on it
// go to the table of contents page.

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  // myBook has the data for the book
  myBook: book;

  constructor(public bookService: BookserviceProvider, public navCtrl: NavController) {
    // Get the Book from the Provider
    this.myBook = this.bookService.getBook();


  }
  // clicking on the cover picture will take you to the Table of Contents Page
  gotoTOC() {
    this.navCtrl.push(ListPage)
  }


}
