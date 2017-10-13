import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LineaRuta } from './linea-ruta';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LineaRuta,
  ],
  imports: [
    IonicPageModule.forChild(LineaRuta),
    TranslateModule
  ],
  exports: [
    LineaRuta
  ]
})
export class LineaRutaModule {}