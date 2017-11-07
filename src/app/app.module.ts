import { BrowserModule } from '@angular/platform-browser';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { KaypiServices } from '../providers/kaypi-services';
import { SQLite } from '@ionic-native/sqlite';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { MyApp } from './app.component';
import { AppVersion } from '@ionic-native/app-version';
import { Geolocation } from '@ionic-native/geolocation';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Network } from '@ionic-native/network';
import { Zip } from '@ionic-native/zip';
import { Diagnostic } from '@ionic-native/diagnostic';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { Clipboard } from '@ionic-native/clipboard';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '8dfa1dbe'
  },
  'push': {
    'sender_id': '266629492600',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434',
        'forceShow': true
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule,
    CloudModule.forRoot(cloudSettings),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [Http]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    Geolocation,
    Diagnostic,
    Network,
    FileTransfer,
    Zip,
    File,
    AppVersion,
    OpenNativeSettings,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    KaypiServices,
    SQLite,
    Clipboard
  ]
})
export class AppModule {}
