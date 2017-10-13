import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Noticias } from './noticias';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    Noticias,
  ],
  imports: [
    IonicPageModule.forChild(Noticias),
    TranslateModule
  ],
  exports: [
    Noticias
  ]
})
export class NoticiasModule {}