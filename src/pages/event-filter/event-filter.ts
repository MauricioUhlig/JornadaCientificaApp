import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController } from 'ionic-angular';
import { EventsDataProvider } from '../../providers/events/events-data';

@IonicPage()
@Component({
  selector: 'page-event-filter',
  templateUrl: 'event-filter.html',
})
export class EventFilterPage {

  tracks: Array<{name: string, isChecked: boolean}> = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public confData: EventsDataProvider,
    public viewCtrl: ViewController) {

      let excludedTrackNames = this.navParams.data;

      this.confData
        .getTracks()
        .subscribe((trackNames: string[]) => {
          trackNames.forEach(trackName => {
            this.tracks.push({
              name: trackName,
              isChecked: (excludedTrackNames.indexOf(trackName) === -1)
            });
          });
      });
  }


  resetFilters() {
    this.tracks.forEach(track => {
      track.isChecked = true;
    });
  }

  applyFilters() {
    let excludedTrackNames = this.tracks.filter(c => !c.isChecked).map(c => c.name);
    this.dismiss(excludedTrackNames);
  }

  dismiss(data?: any) {
    this.viewCtrl.dismiss(data);
  }
}
