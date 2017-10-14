import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RadioMovilPage } from './radio-movil';

@NgModule({
  declarations: [
    RadioMovilPage,
  ],
  imports: [
    IonicPageModule.forChild(RadioMovilPage),
  ],
  exports: [
    RadioMovilPage
  ]
})
export class RadioMovilPageModule {}
