import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage , ToastController} from 'ionic-angular';
import { SuperTab, SuperTabs } from 'ionic2-super-tabs';
 
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  pages = [
    { pageName:'TabsProfilePage', title :'Palestrantes', icon:'contact', id:'profileTab'},
    { pageName:'TabsSchedulePage', title :'Eventos', icon:'calendar', id:'eventosTab'},
    { pageName:'TabsGamePage', title :'Jogos', icon:'game-controller-b', id:'gameficationTab'},
    { pageName:'TabsTrophiesPage', title :'Trofeus  ', icon:'trophy', id:'trophyTab'},
  ]
  selectedTab=0;
  @ViewChild(SuperTabs) superTabs: SuperTabs;

  constructor(
    private toast: ToastController,  public  navCtrl: NavController) {}

  onTabSelected(ev:any){
    this.selectedTab = ev.index;
    this.superTabs.clearBadge(this.pages[ev.index].id)
  }


}
