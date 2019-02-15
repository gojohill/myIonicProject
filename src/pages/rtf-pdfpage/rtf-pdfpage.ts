import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PdfpopulatorProvider } from '../../providers/pdfpopulator/pdfpopulator';

/**
 * Generated class for the RtfPdfpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rtf-pdfpage',
  templateUrl: 'rtf-pdfpage.html',
})
export class RtfPdfpagePage {
  fileUrl: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private PDFPopulator: PdfpopulatorProvider) {
    //this.fileUrl = this.PDFPopulator.transform('../assets/TestPDF.pdf');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RtfPdfpagePage');
  }

  goGetPDF() {
    let parmUrl = '' //set in populatePDF right Now
    this.PDFPopulator.getPDF(parmUrl).subscribe(response => {
      //console.log(response)
      const file = new Blob(
        [response],
        { type: 'application/pdf' });
      //Build a URL from the file
      //console.log(file)
      alert(file);

      this.fileUrl = this.PDFPopulator.transform(URL.createObjectURL(file));
    }, err => {
      //console.log(err.message);
      alert(err.message)
    });
  }

}
