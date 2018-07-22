import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { IonicStorageModule } from '@ionic/storage';

import { AngularFireModule } from 'angularfire2'; 
import { AngularFireAuthModule } from 'angularfire2/auth'; 
import { AngularFireDatabaseModule } from 'angularfire2/database'; 

import { MyApp } from './app.component';
import { UsersDataProvider } from '../providers/users/users-data';
import { EventsDataProvider } from '../providers/events/events-data';
import { HttpModule } from '@angular/http';
import firebase from 'firebase';

var fireBaseconfig = {
  apiKey: "AIzaSyDPi88WJVtbI-RfH6i3iLYSMm350w_yiGw",
  authDomain: "jornadacientificabank.firebaseapp.com",
  databaseURL: "https://jornadacientificabank.firebaseio.com",
  projectId: "jornadacientificabank",
  storageBucket: "jornadacientificabank.appspot.com",
  messagingSenderId: "932347915147"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    SuperTabsModule.forRoot(),
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(fireBaseconfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersDataProvider,
    EventsDataProvider
  ]
})
export class AppModule {}
