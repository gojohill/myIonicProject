import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
//import { Observable } from "rxjs/Observable";
//import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class PdfpopulatorProvider {

  posts: any;
  public useRedit: boolean
  urlIs: string;
  populateUrl: string;
  reditUrl: string;

  constructor(public http: HttpClient, private sanitizer: DomSanitizer) {
    console.log('Hello PdfpopulatorProvider Provider');

    this.posts = null;

    this.getPDFUrl();
    this.populateUrl = this.getPopulatePDFUrl();
    // change this to false use the pdfpopulator 10.0.2.2
    this.reditUrl = 'https://www.reddit.com/r/gifs/top/.json?limit=2&sort=hot';
    this.useRedit = false;



  }


  transform(html) {
    //return this.sanitizer.bypassSecurityTrustResourceUrl('http://docs.google.com/gview?embedded=true&url='+html);
    return this.sanitizer.bypassSecurityTrustResourceUrl(html);
  }

  createAuthorizationHeader(headers: HttpHeaders) {
    headers.append('Authorization', 'Basic ' +
      btoa('username:password'));
    headers.append('Content-Type', 'application/json');
  }

  getReditUrl() {
    return this.reditUrl;
  }

  getPDFUrl() {
    this.urlIs = 'http://localhost:8090/pdf/getdata/05975022-70fe-41cf-9e33-20507ee53001';
    this.urlIs = 'http://localhost:8090/test/observables';

    this.urlIs = 'http://10.0.2.2:8090/pdf/getdata/05975022-70fe-41cf-9e33-20507ee53001';
    this.urlIs = 'http://10.0.2.2:8090/test/observables';
    this.urlIs = 'https://stark-lake-65295.herokuapp.com/pdf/getdata/530abff7-3b1e-4a99-93a7-2d84328a619b'
    return this.urlIs;

  }

  getTheFormURL() {
    return 'http://localhost:8090/pdfformdata/getmappedform/b7fc3ee6-51d9-4686-9cc1-7f5c2bb53234';
  }


  getThePDFUrl() {
    // localhost version
    return 'http://localhost:8090/pdf/getpdf/b7fc3ee6-51d9-4686-9cc1-7f5c2bb53234';
    //return 'http://10.0.2.2:8090/pdf/populate/b7fc3ee6-51d9-4686-9cc1-7f5c2bb53234';
    //return 'https://stark-lake-65295.herokuapp.com/pdf/populate/73b4fe10-128b-49c1-bda9-2e1365d6e7dc';
  }

  getPopulatePDFUrl() {
    // localhost version
    //return 'http://localhost:8090/pdf/populate/b7fc3ee6-51d9-4686-9cc1-7f5c2bb53234';
    //return 'http://10.0.2.2:8090/pdf/populate/b7fc3ee6-51d9-4686-9cc1-7f5c2bb53234';
    return 'https://stark-lake-65295.herokuapp.com/pdf/populate/73b4fe10-128b-49c1-bda9-2e1365d6e7dc';
  }

  getPDF(urlParm):Observable<any> {
    urlParm = this.getThePDFUrl();
    return this.http.post(urlParm, ''
      , {
        headers: new HttpHeaders().set('Authorization', 'basic UGFja21hbjpQYWNrbWFuMTIz')
          .append('Content-Type', 'application/json'),
          responseType: 'blob'
      }
    );

  }

  /**
   * This funtion gets the the form and pdf data 
   */
  getForm(): Observable<any> {
    let xurlParm = this.getTheFormURL();
    return this.http.get(xurlParm
      , {
        headers: new HttpHeaders().set('Authorization', 'basic UGFja21hbjpQYWNrbWFuMTIz')
      }
    );
  }


  populatePDF(dataIs): Observable<any> {
    //alert("in populate pdf");
    let urlParm = this.getPopulatePDFUrl();
    console.log(urlParm)
    //let headers = new HttpHeaders();
    //this.createAuthorizationHeader(headers);

    let tempData = this.prepareJson();

    console.log(tempData);
    console.log(dataIs);
    return this.http.post(urlParm, dataIs
      , {
        headers: new HttpHeaders().set('Authorization', 'basic UGFja21hbjpQYWNrbWFuMTIz')
          .append('Content-Type', 'application/json'),
          responseType: 'blob'
      }
    );

  }

  getData(urlParm, useReditParm): Observable<any> {
    this.posts = null;
    if (useReditParm) {

      return this.http.get(this.reditUrl);
      //  .subscribe((data: any) => {

      //   return data.data.children;


      // }, err => {
      //   alert(err.message);
      //   console.log(err.message);
      //   return null;
      // });
    }
    else {
      //return this.http.get('http://localhost:8090/pdf/getdata/05975022-70fe-41cf-9e33-20507ee53001',
      return this.http.get(urlParm
        , {
          headers: new HttpHeaders().set('Authorization', 'basic UGFja21hbjpQYWNrbWFuMTIz')
        }
      );
      // .subscribe(data => {
      //   return data;
      // }, err => {
      //   alert(err.message);
      //   console.log(err.message);
      //   return null;
      // })
    }

    //.subscribe(data => {
    //this.posts = data;
    //console.log(this.posts);
    //return this.posts;
    //});
    //console.log(this.posts)
    //return this.posts;
  }


  prepareJson() {
    var object = {};
    var object1 = {
      "emailGroup": [
        {
          "toEmail": [
            "gojohill@yahoo.com"
          ],
          "fromEmail": "cccInnerHealing@gmail.com",
          "ccEmail": [
            "gojohill@outlook.com"
          ],
          "bccEmail": [
            "gojohill@gmail.com"
          ]
        }
      ],
      "sendEmail": true,
      "subject": "Testing PDF from PDFMaker2",
      "content": "Attached is the PDF that needs to be reviewed"
    }

    var object2 = {};
    var object3 = {};

    object['hdr'] = object1;
    object['data'] =
      [
        {
          "fieldName": "Name",
          "fieldValue": "John",
          "fieldType": "Tx"
        },
        {
          "fieldName": "Address",
          "fieldValue": "6051 Poage Valley Rd",
          "fieldType": "Tx"
        },
        {
          "fieldName": "CityStateZip",
          "fieldValue": "Roanoke, VA 24018",
          "fieldType": "Tx"
        },
        {
          "fieldName": "DOB",
          "fieldValue": "02/22/1963",
          "fieldType": "Tx"
        },
        {
          "fieldName": "Age",
          "fieldValue": "55",
          "fieldType": "Tx"
        },
        {
          "fieldName": "Home Phone",
          "fieldValue": "5402067134",
          "fieldType": "Tx"
        },
        {
          "fieldName": "Cell",
          "fieldValue": "",
          "fieldType": "Tx"
        },
        {
          "fieldName": "Email",
          "fieldValue": "gojohill@yahoo.com",
          "fieldType": "Tx"
        }
      ]

    console.log(object);

    return object;

  }



}
