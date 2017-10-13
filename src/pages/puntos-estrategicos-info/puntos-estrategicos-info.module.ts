import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PuntosEstrategicosInfo } from './puntos-estrategicos-info';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PuntosEstrategicosInfo,
  ],
  imports: [
    IonicPageModule.forChild(PuntosEstrategicosInfo),
    TranslateModule
  ],
  exports: [
    PuntosEstrategicosInfo
  ]
})
export class PuntosEstrategicosInfoModule {}