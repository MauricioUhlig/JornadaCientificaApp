import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from 'ionic-angular';

import { UsersDataProvider } from '../providers/users/users-data';
import { EventsDataProvider } from '../providers/events/events-data';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:string = 'LoginPage';

  constructor(
    platform: Platform, statusBar: StatusBar, 
    splashScreen: SplashScreen, userData:UsersDataProvider,
    eventsData:EventsDataProvider) {

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    eventsData.carregarEventos()
 

  }
}

