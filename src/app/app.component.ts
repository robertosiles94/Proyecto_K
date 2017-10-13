import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SQLite } from '@ionic-native/sqlite';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { KaypiServices } from '../providers/kaypi-services';
import {
  Push,
  PushToken
} from '@ionic/cloud-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'HomePage';
  lineas: any;

  constructor(platform: Platform, 
    public translateService: TranslateService, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    public db: KaypiServices, 
    public push: Push, 
    public sqlite: SQLite) {
    platform.ready().then(() => {
      
      
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.registerToken();
      this.getNotifications();
    });
  }

  private registerToken() {
    this.push.register().then((t: PushToken) => {
      return this.push.saveToken(t, {
        ignore_user: true
      });
    }).then((t: PushToken) => {
      console.log('Token saved:', t.token);
    });
  }

  private getNotifications() {
    this.push.rx.notification()
      .subscribe((msg) => {
        alert(msg.title + ': ' + msg.text);
      });
  }

  private createDatabase(){
  this.sqlite.create({
    name: 'kaypiDB.db',
    location: 'default'
  })
  .then((db) => {
    console.log(db);
  })
  .catch(error =>{
    console.error(error);
  });
}
}

