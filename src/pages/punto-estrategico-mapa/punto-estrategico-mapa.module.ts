import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PuntoEstrategicoMapa } from './punto-estrategico-mapa';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PuntoEstrategicoMapa,
  ],
  imports: [
    IonicPageModule.forChild(PuntoEstrategicoMapa),
    TranslateModule
  ],
  exports: [
    PuntoEstrategicoMapa
  ]
})
export class PuntoEstrategicoMapaModule {}