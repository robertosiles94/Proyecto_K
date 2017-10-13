import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcercaDe } from './acerca-de';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AcercaDe,
  ],
  imports: [
    IonicPageModule.forChild(AcercaDe),
    TranslateModule
  ],
  exports: [
    AcercaDe
  ]
})
export class ConfiguracionPageModule {}