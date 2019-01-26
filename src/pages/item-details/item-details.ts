import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// ionic service to access the book
import { BookserviceProvider } from '../../providers/bookservice/bookservice';

/**
 * This displays the pages with a previous and next page button
 */

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
  pageOf = 0;
  

  constructor(public bookService: BookserviceProvider, public navCtrl: NavController,
    public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    // Get the chapter that was selected from the Table of Contents
    this.selectedChapter = bookService.getChapter(this.selectedItem.chapter);
    // Get the first page of the chapter that was selected from the Table of Contents
    this.selectedPage = bookService.getPage(this.selectedItem.chapter, this.pgNbr);

    this.pageOf=this.calcPgNbr(this.selectedChapter.nbr,this.selectedPage.pgNbr);
  }

  // goes to the next page in the current Chapter or the next Chapter
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
   
    this.pageOf=this.calcPgNbr(this.selectedChapter.nbr,this.selectedPage.pgNbr);
    
  }

  // goes to the previous page of the current Chapter or the previous Chapter
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
    this.pageOf=this.calcPgNbr(this.selectedChapter.nbr,this.selectedPage.pgNbr);
  }

  calcPgNbr(chapterNbr: number, currentPgNbr: number) {
    return (10*(chapterNbr-1))+currentPgNbr;
  }
}
