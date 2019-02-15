import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RtfHelloPage } from './rtf-hello';

@NgModule({
  declarations: [
    RtfHelloPage,
  ],
  imports: [
    IonicPageModule.forChild(RtfHelloPage),
  ],
})
export class RtfHelloPageModule {}
