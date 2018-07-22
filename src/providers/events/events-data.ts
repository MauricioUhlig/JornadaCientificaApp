import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { UsersDataProvider } from '../users/users-data';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';   
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class EventsDataProvider {
    data: any;
    constructor(
      public http: Http, public userData: UsersDataProvider) { }

    carregarEventos(): any {
        debugger
        if (this.data) 
          return Observable.of(this.data);
        else {
          return this.http.get('assets/data/data.json')
            .map(this.processData, this);
        }
      }

      processData(data: any) {
        debugger
        this.data = data.json();
        this.data.tracks = [];
    
        this.data.schedule.forEach((day: any) => {          // foreach para cada dia 
          day.groups.forEach((group: any) => {              // foreach para cada grupo de eventos por hora
            group.sessions.forEach((session: any) => {      // foreach para cada evento
              session.speakers = [];
              // if (session.speakerNames) {
              //   session.speakerNames.forEach((speakerName: any) => {
              //     let speaker = this.data.speakers.find((s: any) => s.name === speakerName);
              //     if (speaker) {
              //       session.speakers.push(speaker);
              //       speaker.sessions = speaker.sessions || [];
              //       speaker.sessions.push(session);
              //     }
              //   });
              // }
    
              if (session.tracks) {
                session.tracks.forEach((track: any) => {
                  if (this.data.tracks.indexOf(track) < 0) {
                    this.data.tracks.push(track);
                  }
                });
              }

            });
          });
        });
    
        return this.data;
      }


      getTimeline(dayIndex: number, queryText = '', excludeTracks: any[] = [], segment = 'all') {
        return this.carregarEventos().map((data: any) => {
          let day = data.schedule[dayIndex];
          day.shownSessions = 0;
    
          queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
          let queryWords = queryText.split(' ').filter(w => !!w.trim().length);
    
          day.groups.forEach((group: any) => {
            group.hide = true;
    
            group.sessions.forEach((session: any) => {
              
              this.buscarEvento(session, queryWords, excludeTracks, segment);  
              if (!session.hide) {  
                group.hide = false;
                day.shownSessions++;
              }
            });
    
          });
    
          return day;
        });
      }


  getTracks() {
    return this.carregarEventos().map((data: any) => {
      return data.tracks.sort();
    });
  }


      buscarEvento(session: any, queryWords: string[], excludeTracks: any[], segment: string) {

        let matchesQueryText = false;
        if (queryWords.length) {  // of any query word is in the session name than it passes the query test
          queryWords.forEach((queryWord: string) => {
            if (session.name.toLowerCase().indexOf(queryWord) > -1) {
              matchesQueryText = true;
            }
          });
        } 
        else {
          matchesQueryText = true; 
        }
    
      
        let matchesTracks = false;
        session.tracks.forEach((trackName: string) => {
          if (excludeTracks.indexOf(trackName) === -1) {
            matchesTracks = true;
          }
        });
    
        let matchesSegment = false;
        if (segment === 'favorites') {
          if (this.userData.hasFavorite(session.name)) {
            matchesSegment = true;
          }
        } else {
          matchesSegment = true;
        }
    
        // all tests must be true if it should not be hidden
         session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
        //session.hide = !(matchesQueryText && matchesTracks);
      }
    
    

}