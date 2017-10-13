import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Configuracion } from './configuracion';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    Configuracion,
  ],
  imports: [
    IonicPageModule.forChild(Configuracion),
    TranslateModule
  ],
  exports: [
    Configuracion
  ]
})
export class ConfiguracionPageModule {}
