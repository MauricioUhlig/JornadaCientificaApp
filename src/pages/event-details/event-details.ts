import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventsDataProvider } from '../../providers/events/events-data';

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})

export class EventDetailsPage {

  session: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public dataProvider: EventsDataProvider,
  ) {debugger}

  ionViewDidLoad() {
    debugger
    this.dataProvider.carregarEventos().subscribe((data: any) => {
      debugger
      if (data && data.schedule && data.schedule[0] && data.schedule[0].groups ) 
      {debugger
        for (const group of data.schedule[0].groups) 
        {debugger
          if (group && group.sessions) 
          {debugger
            for (const session of group.sessions) 
            {debugger
              if (session && session.id === this.navParams.data.sessionId) 
              {debugger
                this.session = session;
                break;
              }
            }
          }
        }
      }
    });
  }

}
