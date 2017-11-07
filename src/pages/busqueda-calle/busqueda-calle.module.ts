import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusquedaCallePage } from './busqueda-calle';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    BusquedaCallePage,
  ],
  imports: [
    IonicPageModule.forChild(BusquedaCallePage),
    TranslateModule
  ],
  exports: [
    BusquedaCallePage
  ]
})
export class BusquedaCallePageModule {}
