webpackJsonp([1],{

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsSchedulePageModule", function() { return TabsSchedulePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_schedule__ = __webpack_require__(744);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsSchedulePageModule = /** @class */ (function () {
    function TabsSchedulePageModule() {
    }
    TabsSchedulePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs_schedule__["a" /* TabsSchedulePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs_schedule__["a" /* TabsSchedulePage */]),
            ],
        })
    ], TabsSchedulePageModule);
    return TabsSchedulePageModule;
}());

//# sourceMappingURL=tabs-schedule.module.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events_events_data__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventDetailsPage = /** @class */ (function () {
    function EventDetailsPage(navCtrl, navParams, dataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        debugger;
    }
    EventDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        debugger;
        this.dataProvider.carregarEventos().subscribe(function (data) {
            debugger;
            if (data && data.schedule && data.schedule[0] && data.schedule[0].groups) {
                debugger;
                for (var _i = 0, _a = data.schedule[0].groups; _i < _a.length; _i++) {
                    var group = _a[_i];
                    debugger;
                    if (group && group.sessions) {
                        debugger;
                        for (var _b = 0, _c = group.sessions; _b < _c.length; _b++) {
                            var session = _c[_b];
                            debugger;
                            if (session && session.id === _this.navParams.data.sessionId) {
                                debugger;
                                _this.session = session;
                                break;
                            }
                        }
                    }
                }
            }
        });
    };
    EventDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-details',template:/*ion-inline-start:"C:\Users\Gabriel Ramos\Desktop\_IonicApps\JornadaCientifica2018\JornadaCientifica_Official\JornadaCientificaApp\src\pages\event-details\event-details.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title *ngIf="session">{{session.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="session">\n    <h1>{{session.name}}</h1>\n    <h4 *ngFor="let speaker of session?.speakers">\n    {{speaker.name}}\n  </h4>\n    <p>{{session.timeStart}} - {{session.timeEnd}}</p>\n    <p>{{session.location}}</p>\n    <p>{{session.description}}</p>\n  </div>\n</ion-content>\n  '/*ion-inline-end:"C:\Users\Gabriel Ramos\Desktop\_IonicApps\JornadaCientifica2018\JornadaCientifica_Official\JornadaCientificaApp\src\pages\event-details\event-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_events_events_data__["a" /* EventsDataProvider */]])
    ], EventDetailsPage);
    return EventDetailsPage;
}());

//# sourceMappingURL=event-details.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events_events_data__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventFilterPage = /** @class */ (function () {
    function EventFilterPage(navCtrl, navParams, confData, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.confData = confData;
        this.viewCtrl = viewCtrl;
        this.tracks = [];
        var excludedTrackNames = this.navParams.data;
        this.confData
            .getTracks()
            .subscribe(function (trackNames) {
            trackNames.forEach(function (trackName) {
                _this.tracks.push({
                    name: trackName,
                    isChecked: (excludedTrackNames.indexOf(trackName) === -1)
                });
            });
        });
    }
    EventFilterPage.prototype.resetFilters = function () {
        this.tracks.forEach(function (track) {
            track.isChecked = true;
        });
    };
    EventFilterPage.prototype.applyFilters = function () {
        var excludedTrackNames = this.tracks.filter(function (c) { return !c.isChecked; }).map(function (c) { return c.name; });
        this.dismiss(excludedTrackNames);
    };
    EventFilterPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    EventFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-filter',template:/*ion-inline-start:"C:\Users\Gabriel Ramos\Desktop\_IonicApps\JornadaCientifica2018\JornadaCientifica_Official\JornadaCientificaApp\src\pages\event-filter\event-filter.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">Cancel</button>\n      </ion-buttons>\n  \n      <ion-title>Opções</ion-title>\n  \n      <ion-buttons end>\n        <button ion-button (click)="applyFilters()" strong>OK</button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class="outer-content">\n  \n    <ion-list>\n      <ion-list-header>Tracks</ion-list-header>\n  \n      <ion-item *ngFor="let track of tracks" [attr.track]="track.name | lowercase">\n        <span item-start class="dot"></span>\n        <ion-label>{{track.name}}</ion-label>\n        <ion-toggle [(ngModel)]="track.isChecked" color="secondary"></ion-toggle>\n      </ion-item>\n  \n    </ion-list>\n  \n    <ion-list>\n      <button ion-item (click)="resetFilters()" detail-none class="reset-filters">\n        Reset All Filters\n      </button>\n    </ion-list>\n  \n  </ion-content>'/*ion-inline-end:"C:\Users\Gabriel Ramos\Desktop\_IonicApps\JornadaCientifica2018\JornadaCientifica_Official\JornadaCientificaApp\src\pages\event-filter\event-filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_events_events_data__["a" /* EventsDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */]])
    ], EventFilterPage);
    return EventFilterPage;
}());

//# sourceMappingURL=event-filter.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsSchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_users_data__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_events_events_data__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_details_event_details__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_filter_event_filter__ = __webpack_require__(731);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsSchedulePage = /** @class */ (function () {
    function TabsSchedulePage(navCtrl, navParams, alertCtrl, app, loadingCtrl, modalCtrl, toastCtrl, confData, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.confData = confData;
        this.user = user;
        this.dayIndex = 0;
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracks = [];
        this.shownSessions = [];
        this.groups = [];
    }
    TabsSchedulePage.prototype.ionViewDidLoad = function () {
        this.atualizarEventos();
    };
    TabsSchedulePage.prototype.atualizarEventos = function () {
        var _this = this;
        this.listaEventos && this.listaEventos.closeSlidingItems();
        this.confData
            .getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment)
            .subscribe(function (data) {
            _this.shownSessions = data.shownSessions;
            _this.groups = data.groups;
        });
    };
    TabsSchedulePage.prototype.presentFilter = function () {
        var _this = this;
        debugger;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__event_filter_event_filter__["a" /* EventFilterPage */], this.excludeTracks);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.excludeTracks = data;
                _this.atualizarEventos();
            }
        });
    };
    TabsSchedulePage.prototype.addFavorite = function (slidingItem, sessionData) {
        if (this.user.hasFavorite(sessionData.name)) {
            this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
        }
        else {
            this.user.addFavorite(sessionData.name);
            var alert_1 = this.alertCtrl.create({
                title: 'Favorite Added',
                buttons: [{
                        text: 'OK',
                        handler: function () {
                            slidingItem.close();
                        }
                    }]
            });
            alert_1.present();
        }
    };
    TabsSchedulePage.prototype.removeFavorite = function (slidingItem, sessionData, title) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: 'Would you like to remove this session from your favorites?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        slidingItem.close();
                    }
                },
                {
                    text: 'Remove',
                    handler: function () {
                        _this.user.removeFavorite(sessionData.name);
                        _this.atualizarEventos();
                        slidingItem.close();
                    }
                }
            ]
        });
        alert.present();
    };
    TabsSchedulePage.prototype.goToSessionDetail = function (sessionData) {
        debugger;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__event_details_event_details__["a" /* EventDetailsPage */], { sessionId: sessionData.id, name: sessionData.name });
    };
    TabsSchedulePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe(function (data) {
            _this.shownSessions = data.shownSessions;
            _this.groups = data.groups;
            setTimeout(function () {
                refresher.complete();
                var toast = _this.toastCtrl.create({
                    message: 'Sessions have been updated.',
                    duration: 3000
                });
                toast.present();
            }, 1000);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('idEventos', { read: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* List */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* List */])
    ], TabsSchedulePage.prototype, "listaEventos", void 0);
    TabsSchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs-schedule',template:/*ion-inline-start:"C:\Users\Gabriel Ramos\Desktop\_IonicApps\JornadaCientifica2018\JornadaCientifica_Official\JornadaCientificaApp\src\pages\tabs-schedule\tabs-schedule.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n\n    <!-- <ion-segment [(ngModel)]="segment" (ionChange)="atualizarEventos()">\n      <ion-segment-button value="all">\n        Todos\n      </ion-segment-button>\n      <ion-segment-button value="favorites">\n        Favoritos\n      </ion-segment-button>\n    </ion-segment> -->\n\n\n      <ion-toolbar no-border>\n          <ion-searchbar color="primary"\n                         [(ngModel)]="queryText"\n                         (ionInput)="atualizarEventos()"\n                         placeholder="Search">\n          </ion-searchbar>\n        </ion-toolbar>\n\n    \n      <!--teste para pegar eventos de uma área de conhecimento só-->\n    <!--  <ion-buttons end>\n      <button ion-button icon-only (click)="presentFilter()">\n        <ion-icon ios="ios-settings" md="md-settings"></ion-icon>\n      </button>\n    </ion-buttons> -->\n\n  </ion-navbar> \n</ion-header>\n\n<ion-content>\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  \n    <ion-list #idEventos [hidden]="shownSessions === 0">\n  \n      <ion-item-group *ngFor="let group of groups" [hidden]="group.hide">\n  \n        <ion-item-divider sticky>\n          <ion-label>{{group.time}}</ion-label>\n        </ion-item-divider>\n  \n        <ion-item-sliding *ngFor="let session of group.sessions" \n                  #slidingItem [attr.track]="session.tracks[0] | lowercase" \n                  [hidden]="session.hide">\n  \n           <button ion-item > <!-- TESTE (click)="goToSessionDetail(session)" -->\n            <h3>{{session.name}}</h3>\n            <p>{{session.timeStart}} &mdash; {{session.timeEnd}} : {{session.location}}</p>\n          </button>\n  \n          <!-- \n            TESTE\n            <ion-item-options>\n            <button ion-button color="favorite" \n                    (click)="addFavorite(slidingItem, session)" \n                    *ngIf="segment === \'all\'">Favoritar\n            </button>\n            <button ion-button color="danger" \n                    (click)="removeFavorite(slidingItem, session, \'Remove Favorite\')" \n                    *ngIf="segment === \'favorites\'">Remover\n            </button>\n          </ion-item-options> -->\n  \n        </ion-item-sliding>\n  \n      </ion-item-group>\n  \n    </ion-list>\n  \n    <ion-list-header [hidden]="shownSessions > 0">\n       Nenhum Evento Encontrado\n    </ion-list-header>\n  \n  \n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Gabriel Ramos\Desktop\_IonicApps\JornadaCientifica2018\JornadaCientifica_Official\JornadaCientificaApp\src\pages\tabs-schedule\tabs-schedule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_events_events_data__["a" /* EventsDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_users_users_data__["a" /* UsersDataProvider */]])
    ], TabsSchedulePage);
    return TabsSchedulePage;
}());

//# sourceMappingURL=tabs-schedule.js.map

/***/ })

});
//# sourceMappingURL=1.js.map