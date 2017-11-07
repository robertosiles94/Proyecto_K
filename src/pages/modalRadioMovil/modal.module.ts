import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalRadioMovilPage } from './modal';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ModalRadioMovilPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalRadioMovilPage),
    TranslateModule
  ],
  exports: [
    ModalRadioMovilPage
  ]
})
export class ModalRadioMovilPageModule {}
