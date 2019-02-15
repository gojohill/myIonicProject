import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PdfpopulatorProvider } from '../../providers/pdfpopulator/pdfpopulator';
import { Observable } from 'rxjs/Observable';
import { Validators, FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { HtmlTagDefinition } from '@angular/compiler';

/**
 * Generated class for the RtfDisplayFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rtf-display-form',
  templateUrl: 'rtf-display-form.html',
  providers: [PdfpopulatorProvider]
})
export class RtfDisplayFormPage {
  dataIs: Observable<any[]>;
  myForm: FormGroup;
  htmllLine: any;
  urlIs: string

  constructor(public Pdfpopulator: PdfpopulatorProvider, public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder) {

    this.htmllLine = "<h1>hi</h1>"


    this.myForm = formBuilder.group({
      Name: ['', Validators.compose([Validators.maxLength(60), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RtfDisplayFormPage');
  }

  GetPDFDataAndForm() {
    var Variable = "Name"

    alert(this.urlIs)
    this.Pdfpopulator.getForm().subscribe(data => {
      console.log(data)
      this.dataIs = data;
    }, err => {
      console.log(err.message);
      alert(err.message)
      this.dataIs = null;
    });

    //this.myForm = this.formBuilder.group  :


    
  }

  ShowFormData() {
    let formObj = this.myForm.getRawValue();
    console.log(formObj.Name)
  }


}
