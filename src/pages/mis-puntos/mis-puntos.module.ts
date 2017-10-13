import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MisPuntosPage } from './mis-puntos';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    MisPuntosPage,
  ],
  imports: [
    IonicPageModule.forChild(MisPuntosPage),
    TranslateModule
  ],
  exports: [
    MisPuntosPage
  ]
})
export class MisPuntosPageModule {}
