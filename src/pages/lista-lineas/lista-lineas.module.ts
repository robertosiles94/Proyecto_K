import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaLineas } from './lista-lineas';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ListaLineas,
  ],
  imports: [
    IonicPageModule.forChild(ListaLineas),
    TranslateModule
  ],
  exports: [
    ListaLineas
  ]
})
export class ListaLineasModule {}