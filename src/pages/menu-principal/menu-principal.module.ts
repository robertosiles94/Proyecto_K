import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPrincipal } from './menu-principal';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    MenuPrincipal,
  ],
  imports: [
    IonicPageModule.forChild(MenuPrincipal),
    TranslateModule
  ],
  exports: [
    MenuPrincipal
  ]
})
export class MenuPrincipalModule {}