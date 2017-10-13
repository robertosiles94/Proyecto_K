import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Ayuda } from './ayuda';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    Ayuda,
  ],
  imports: [
    IonicPageModule.forChild(Ayuda),
    TranslateModule
  ],
  exports: [
    Ayuda
  ]
})
export class AyudaModule {}