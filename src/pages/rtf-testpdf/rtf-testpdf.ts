import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { File } from '@ionic-native/file/ngx'
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';



@IonicPage()
@Component({
  selector: 'page-rtf-testpdf',
  templateUrl: 'rtf-testpdf.html',
})
export class RtfTestpdfPage {
  myfile: File;

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform,
    fileIs: File, private ft: FileTransfer, private fileOpener: FileOpener, private document: DocumentViewer) {
     this.myfile = fileIs;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RtfTestpdfPage');
  }

  openLocalPdf() {
    alert(this.platform);

    let filePath = this.myfile.applicationDirectory + 'www/assets';

    if (this.platform.is("android")) {

    } else {
      //if (this.platform.is("ios")) {
        const options: DocumentViewerOptions = {
          title: 'My Document'
        }
        this.document.viewDocument(`${filePath}/TestPDF.pdf`, 'applicatioin/pdf', options)


    }
  }

  downloadAndOpenPdf() { }

}
