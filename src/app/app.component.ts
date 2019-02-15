import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { RtfHelloPage } from '../pages/rtf-hello/rtf-hello';
import { RtfFormPage } from '../pages/rtf-form/rtf-form';
import {RtfTestpdfPage} from '../pages/rtf-testpdf/rtf-testpdf';
import { SignInPage } from '../pages/sign-in/sign-in';
import { RtfPdfpagePage } from '../pages/rtf-pdfpage/rtf-pdfpage';
import { RtfDisplayFormPage} from '../pages/rtf-display-form/rtf-display-form';
import {DynamicTestFormPage} from '../pages/dynamic-test-form/dynamic-test-form';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = DynamicTestFormPage; //RtfDisplayFormPage; //RtfPdfpagePage; //RtfFormPage; //RtfTestpdfPage;//RtfFormPage;
  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [ 
      { title: 'Dynamic Form', component: DynamicTestFormPage }, 
      { title: 'RTF Form from Database', component: RtfDisplayFormPage },
      { title: 'RTF Form', component: RtfFormPage },
      { title: 'RTF Home', component: RtfHelloPage },
      { title: 'RTF PDF', component: RtfTestpdfPage},
      { title: 'RTF PDF Page', component: RtfPdfpagePage},
      { title: 'Cover Page', component: HelloIonicPage },
      { title: 'Table of Content', component: ListPage },
      { title: 'Signin Page', component: SignInPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
