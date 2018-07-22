import { Component, ViewChild } from '@angular/core';
import {  IonicPage, NavParams, AlertController,
          App, FabContainer, ItemSliding, 
          List, ModalController, NavController, 
          ToastController,LoadingController,  Refresher 
        } from 'ionic-angular';

import { UsersDataProvider } from '../../providers/users/users-data';
import { EventsDataProvider } from '../../providers/events/events-data';

import { EventDetailsPage } from '../event-details/event-details' ;
import { EventFilterPage } from '../event-filter/event-filter';


@IonicPage()
@Component({
  selector: 'page-tabs-schedule',
  templateUrl: 'tabs-schedule.html',
})
export class TabsSchedulePage {

  @ViewChild('idEventos', { read: List }) listaEventos: List;
  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  shownSessions: any = [];
  groups: any = [];
  confDate: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public confData: EventsDataProvider,
    public user: UsersDataProvider) {}

  ionViewDidLoad() {
    this.atualizarEventos();
  }

  atualizarEventos() {
    this.listaEventos && this.listaEventos.closeSlidingItems();
    this.confData
      .getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment)
      .subscribe((data: any) => {
        this.shownSessions = data.shownSessions;
        this.groups = data.groups;
      });
  }

  presentFilter() {
    debugger
    let modal = this.modalCtrl.create(EventFilterPage, this.excludeTracks);
    modal.present();

    modal.onWillDismiss((data: any[]) => {
      if (data) {
        this.excludeTracks = data;
        this.atualizarEventos();
      }
    });
  }

  addFavorite(slidingItem: ItemSliding, sessionData: any) {

    if (this.user.hasFavorite(sessionData.name)) {
      this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
    } else {
      this.user.addFavorite(sessionData.name);
      let alert = this.alertCtrl.create({
        title: 'Favorite Added',
        buttons: [{
          text: 'OK',
          handler: () => {
            slidingItem.close();
          }
        }]
      });
      alert.present();
    }

  }

  removeFavorite(slidingItem: ItemSliding, sessionData: any, title: string) {
    let alert = this.alertCtrl.create({
      title: title,
      message: 'Would you like to remove this session from your favorites?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            slidingItem.close();
          }
        },
        {
          text: 'Remove',
          handler: () => {
            this.user.removeFavorite(sessionData.name);
            this.atualizarEventos();
            slidingItem.close();
          }
        }
      ]
    });
    alert.present();
  }


  goToSessionDetail(sessionData: any) {
    debugger
    this.navCtrl.push(EventDetailsPage, { sessionId: sessionData.id, name: sessionData.name });
  }

  doRefresh(refresher: Refresher) {
    this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
      this.shownSessions = data.shownSessions;
      this.groups = data.groups;
      
      setTimeout(() => {
        refresher.complete();

        const toast = this.toastCtrl.create({
          message: 'Sessions have been updated.',
          duration: 3000
        });
        toast.present();
      }, 1000);
    });
  }
}
