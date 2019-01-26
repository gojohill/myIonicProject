//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import class that represents the book
import { book } from './book';
import {PGTEXT, PGTEXTODD} from './pgText'

/*
  Generated class for the BookserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookserviceProvider {
  myBook: book;


  //constructor(public http: HttpClient) {
  //}

  constructor() {
    this.myBook = new book;

    this.myBook.title = 'MyIonic Book';
    this.myBook.subTitle = 'The Whole Story';
    this.myBook.author = 'Some Author';

    this.myBook.loadPages(this.myBook.chapters,0,PGTEXT, PGTEXTODD);
    this.myBook.loadPages(this.myBook.chapters,1,PGTEXT, PGTEXTODD);
    this.myBook.loadPages(this.myBook.chapters,2,PGTEXT, PGTEXTODD);
    this.myBook.loadPages(this.myBook.chapters,3,PGTEXT, PGTEXTODD);
    this.myBook.loadPages(this.myBook.chapters,4,PGTEXT, PGTEXTODD);
    this.myBook.loadPages(this.myBook.chapters,5,PGTEXT, PGTEXTODD);
    this.myBook.loadPages(this.myBook.chapters,6,PGTEXT, PGTEXTODD);
    this.myBook.loadPages(this.myBook.chapters,7,PGTEXT, PGTEXTODD);
    this.myBook.loadPages(this.myBook.chapters,8,PGTEXT, PGTEXTODD);
    //this.myBook.loadPages(this.myBook.chapters,9,PGTEXT, PGTEXTODD);


    console.log("length of chapters")
    console.log(this.myBook.chapters.length)
  }

  getBook() {
    return this.myBook;
  }

  getAllChapters() {
    return this.myBook.chapters;
  }
  getChapter(chapterNbr: number) {

    return this.myBook.chapters[this.filterChapterNbr(chapterNbr)];

  }

  getNbrOfChapters() {
    return this.myBook.chapters.length;
  }

  getPagesInChapter(chapterNbr: number) {
    return this.myBook.chapters[this.filterChapterNbr(chapterNbr)].pages.length;
  }

  getPage(chapterNbr: number, pgNbr: number) {
    return this.myBook.chapters[this.filterChapterNbr(chapterNbr)].pages[pgNbr];
  }

  filterChapterNbr(nbrIn: number) {
    if (nbrIn > this.getNbrOfChapters())
      nbrIn = this.getNbrOfChapters();

    if (nbrIn > 0)
      nbrIn--;
    else
      nbrIn = 0;

    return nbrIn;

  }

}
