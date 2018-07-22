import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsProfilePage } from './tabs-profile';

@NgModule({
  declarations: [
    TabsProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(TabsProfilePage),
  ],
})
export class TabsProfilePageModule {}
