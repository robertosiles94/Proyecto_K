import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MiDestino } from './mi-destino';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    MiDestino,
  ],
  imports: [
    IonicPageModule.forChild(MiDestino),
    TranslateModule
  ],
  exports: [
    MiDestino
  ]
})
export class MiDestinoModule {}