import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsGamePage } from './tabs-game';

@NgModule({
  declarations: [
    TabsGamePage,
  ],
  imports: [
    IonicPageModule.forChild(TabsGamePage),
  ],
})
export class TabsGamePageModule {}
