import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Linea } from './lineas';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    Linea,
  ],
  imports: [
    IonicPageModule.forChild(Linea),
    TranslateModule
  ],
  exports: [
    Linea
  ]
})
export class LineaModule {}