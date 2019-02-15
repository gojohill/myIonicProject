import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DynamicTestFormPage } from './dynamic-test-form';

@NgModule({
  declarations: [
    DynamicTestFormPage,
  ],
  imports: [
    IonicPageModule.forChild(DynamicTestFormPage),
  ],
})
export class DynamicTestFormPageModule {}
