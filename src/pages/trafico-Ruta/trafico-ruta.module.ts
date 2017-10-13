import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TraficoRuta } from './trafico-ruta';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    TraficoRuta,
  ],
  imports: [
    IonicPageModule.forChild(TraficoRuta),
    TranslateModule
  ],
  exports: [
    TraficoRuta
  ]
})
export class TraficoRutaModule {}