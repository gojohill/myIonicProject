import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { RtfHelloPage } from '../pages/rtf-hello/rtf-hello';
import { RtfFormPage } from '../pages/rtf-form/rtf-form';
import { SignInPage } from '../pages/sign-in/sign-in';
import { RtfTestpdfPage } from '../pages/rtf-testpdf/rtf-testpdf';
import { RtfPdfpagePage } from '../pages/rtf-pdfpage/rtf-pdfpage';
import { RtfDisplayFormPage} from '../pages/rtf-display-form/rtf-display-form';
import {DynamicTestFormPage} from '../pages/dynamic-test-form/dynamic-test-form';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BookserviceProvider } from '../providers/bookservice/bookservice';
import { PdfpopulatorProvider } from '../providers/pdfpopulator/pdfpopulator';


import { HttpClientModule } from '@angular/common/http';

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx'
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';

//
import { DynamicFormBuilderModule } from '../components/dynamic-form-builder.module'

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    RtfHelloPage,
    RtfFormPage,
    RtfTestpdfPage,
    RtfPdfpagePage,
    DynamicTestFormPage,
    RtfDisplayFormPage,
    SignInPage
  ],
  imports: [
    BrowserModule,
    DynamicFormBuilderModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: SignInPage, name: 'SignInPage', segment: 'sign-in' },
        { component: RtfFormPage, name: 'RtfFromPage', segment: 'rtf-form' }
      ]
    }),
    //HttpModule, 
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    RtfHelloPage,
    RtfFormPage,
    RtfTestpdfPage,
    RtfPdfpagePage,
    DynamicTestFormPage,
    RtfDisplayFormPage,
    SignInPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BookserviceProvider,
    PdfpopulatorProvider,
    File,
    FileOpener,
    FileTransfer,
    DocumentViewer
  ]
})
export class AppModule { }
