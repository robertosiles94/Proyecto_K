import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PuntoEstrategico } from './puntos-estrategicos';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PuntoEstrategico,
  ],
  imports: [
    IonicPageModule.forChild(PuntoEstrategico),
    TranslateModule
  ],
  exports: [
    PuntoEstrategico
  ]
})
export class PuntoEstrategicoModule {}