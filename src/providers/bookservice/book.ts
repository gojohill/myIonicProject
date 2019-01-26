import { chapter } from "./chapter"
import { page } from "./page"

// class that holds the book
export class book {
  title: string;
  subTitle: string;
  author: string;
  // book has chapters - chapters have pages
  chapters: chapter[] = [];

  loadPages(chaptersParm: chapter[], chapterNbr: number, textIs: string, textOther: string) {
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
        chaptersParm[chapterNbr].pages[i].pgText = "\n Chapter " + tempNbr + "- A Chapter in the Whole Story\n\n" + textIs;
      } else {
        if (i % 2 == 0)
          chaptersParm[chapterNbr].pages[i].pgText = "\n" + "This is the ODD page of the story. " + textOther;
        else
          chaptersParm[chapterNbr].pages[i].pgText = "\n" + "This is the EVEN page of the story. " + textOther;
      }
    }

  }

}

