import { NgModule } from '@angular/core';
import { HomePage } from './home';
import { IonicPageModule, IonicApp, IonicPage } from 'ionic-angular';
import { SuperTabs, SuperTabsModule } from 'ionic2-super-tabs';


@NgModule({
    declarations:[
        HomePage
    ],
    imports:[
        IonicPageModule.forChild(HomePage),
        SuperTabsModule
    ],
    exports:[
        HomePage
    ]
})

export class HomeModule{

}