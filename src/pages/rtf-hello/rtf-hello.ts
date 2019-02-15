import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PdfpopulatorProvider } from '../../providers/pdfpopulator/pdfpopulator';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/catch';

/**
 * Generated class for the RtfHelloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rtf-hello',
  templateUrl: 'rtf-hello.html',
  providers: [PdfpopulatorProvider]
})
export class RtfHelloPage {

  dataIs: Observable<any[]>
  useRedit: boolean
  urlIs: string

  constructor(public Pdfpopulator: PdfpopulatorProvider, public navCtrl: NavController, public navParams: NavParams) {



    // change this to true to use the redit url
    this.useRedit = this.Pdfpopulator.useRedit;

    //this.populateData();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RtfHelloPage');

    if (this.useRedit) {
      this.urlIs = this.Pdfpopulator.getReditUrl();
    } else {
      this.urlIs = this.Pdfpopulator.getPDFUrl();
    }


  }

  seeIfRedit() {
    this.useRedit=!this.useRedit;
    if (this.useRedit)
      this.urlIs = this.Pdfpopulator.getReditUrl();
    else
      this.urlIs = this.Pdfpopulator.getPDFUrl();
  }

  populateData() {
    alert(this.urlIs)
    this.Pdfpopulator.getData(this.urlIs, this.useRedit).subscribe(data => {
      console.log(data)
      if (this.useRedit)
        this.dataIs = data.data.children;
      else
        this.dataIs = data;
    }, err => {
      console.log(err.message);
      alert(err.message)
      if (this.useRedit)
        this.dataIs = null;
      else
        this.dataIs = null;
    });
  }


}
