import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsSchedulePage } from './tabs-schedule';

@NgModule({
  declarations: [
    TabsSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(TabsSchedulePage),
  ],
})
export class TabsSchedulePageModule {}
