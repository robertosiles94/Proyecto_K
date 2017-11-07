import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RadioMovilPage } from './radio-movil';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    RadioMovilPage,
  ],
  imports: [
    IonicPageModule.forChild(RadioMovilPage),
    TranslateModule
  ],
  exports: [
    RadioMovilPage
  ]
})
export class RadioMovilPageModule {}
