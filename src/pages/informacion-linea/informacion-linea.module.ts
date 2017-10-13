import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformacionLinea } from './informacion-linea';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    InformacionLinea,
  ],
  imports: [
    IonicPageModule.forChild(InformacionLinea),
    TranslateModule
  ],
  exports: [
    InformacionLinea
  ]
})
export class InformacionLineaModule {}