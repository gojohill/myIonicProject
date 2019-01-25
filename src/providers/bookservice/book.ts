import { chapter } from "./chapter"
import { page } from "./page"
import { PGTEXT } from "./pgText"

export class book {
  title: string;
  subTitle: string;
  author: string;
  chapters: chapter[] = [];

  constructor() {

  }

  loadPages(chaptersParm: chapter[], chapterNbr: number, textIs: string, textOdd: string) {
    console.log(chapterNbr);
    var tempNbr = chapterNbr;
    tempNbr++;

    chaptersParm[chapterNbr] = new chapter;
    chaptersParm[chapterNbr].nbr = tempNbr;
    chaptersParm[chapterNbr].title = "Chapter " + tempNbr + " of the Whole Story";

    var i;
    var tempPage;
    for (i = 0; i < 10; i++) {

      tempPage = new page;

      chaptersParm[chapterNbr].pages[i] = tempPage;
      chaptersParm[chapterNbr].pages[i].pgNbr = (i + 1);
      if (i == 0) {
        chaptersParm[chapterNbr].pages[i].pgText = "\n" + textIs;
      } else {
        if (i % 2 == 0)
          chaptersParm[chapterNbr].pages[i].pgText = "\n" + "This is the ODD page of the story. " + textOdd;
        else
          chaptersParm[chapterNbr].pages[i].pgText = "\n" + "This is the EVEN page of the story. " + textOdd;
      }
    }

  }

}

export const PAGES: page[] = [
  { pgNbr: 1, pgText: PGTEXT },
  { pgNbr: 2, pgText: PGTEXT },
  { pgNbr: 3, pgText: PGTEXT },
  { pgNbr: 4, pgText: PGTEXT },
  { pgNbr: 5, pgText: PGTEXT },
  { pgNbr: 6, pgText: PGTEXT },
  { pgNbr: 7, pgText: PGTEXT },
  { pgNbr: 8, pgText: PGTEXT },
  { pgNbr: 9, pgText: PGTEXT },
  { pgNbr: 10, pgText: "THE end..... Lived Happily Ever After" }
];

export const CHAPTERS: chapter[] = [
  { nbr: 1, title: "Chapter 1 of the Whole Story", pages: PAGES },
  { nbr: 2, title: "Chapter 2 of the Whole Story", pages: PAGES },
  { nbr: 3, title: "Chapter 3 of the Whole Story", pages: PAGES },
  { nbr: 4, title: "Chapter 4 of the Whole Story", pages: PAGES },
  { nbr: 5, title: "Chapter 5 of the Whole Story", pages: PAGES },
  { nbr: 6, title: "Chapter 6 of the Whole Story", pages: PAGES },
  { nbr: 7, title: "Chapter 7 of the Whole Story", pages: PAGES },
  { nbr: 8, title: "Chapter 8 of the Whole Story", pages: PAGES },
  { nbr: 9, title: "Chapter 9 of the Whole Story", pages: PAGES },
  { nbr: 10, title: "Chapter 10 of the Whole Story", pages: PAGES }
]

// export const MyBOOK: book = {
//   title: 'MyIonic Book',
//   subTitle: 'The Whole Story',
//   author: 'Some Author',
//   chapters: CHAPTERS
// }

