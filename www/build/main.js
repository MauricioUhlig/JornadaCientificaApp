webpackJsonp([11],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_users_data__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventsDataProvider = /** @class */ (function () {
    function EventsDataProvider(http, userData) {
        this.http = http;
        this.userData = userData;
    }
    EventsDataProvider.prototype.carregarEventos = function () {
        debugger;
        if (this.data)
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.data);
        else {
            return this.http.get('assets/data/data.json')
                .map(this.processData, this);
        }
    };
    EventsDataProvider.prototype.processData = function (data) {
        var _this = this;
        debugger;
        this.data = data.json();
        this.data.tracks = [];
        this.data.schedule.forEach(function (day) {
            day.groups.forEach(function (group) {
                group.sessions.forEach(function (session) {
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
                        session.tracks.forEach(function (track) {
                            if (_this.data.tracks.indexOf(track) < 0) {
                                _this.data.tracks.push(track);
                            }
                        });
                    }
                });
            });
        });
        return this.data;
    };
    EventsDataProvider.prototype.getTimeline = function (dayIndex, queryText, excludeTracks, segment) {
        var _this = this;
        if (queryText === void 0) { queryText = ''; }
        if (excludeTracks === void 0) { excludeTracks = []; }
        if (segment === void 0) { segment = 'all'; }
        return this.carregarEventos().map(function (data) {
            var day = data.schedule[dayIndex];
            day.shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            var queryWords = queryText.split(' ').filter(function (w) { return !!w.trim().length; });
            day.groups.forEach(function (group) {
                group.hide = true;
                group.sessions.forEach(function (session) {
                    _this.buscarEvento(session, queryWords, excludeTracks, segment);
                    if (!session.hide) {
                        group.hide = false;
                        day.shownSessions++;
                    }
                });
            });
            return day;
        });
    };
    EventsDataProvider.prototype.getTracks = function () {
        return this.carregarEventos().map(function (data) {
            return data.tracks.sort();
        });
    };
    EventsDataProvider.prototype.buscarEvento = function (session, queryWords, excludeTracks, segment) {
        var matchesQueryText = false;
        if (queryWords.length) {
            queryWords.forEach(function (queryWord) {
                if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                    matchesQueryText = true;
                }
            });
        }
        else {
            matchesQueryText = true;
        }
        var matchesTracks = false;
        session.tracks.forEach(function (trackName) {
            if (excludeTracks.indexOf(trackName) === -1) {
                matchesTracks = true;
            }
        });
        var matchesSegment = false;
        if (segment === 'favorites') {
            if (this.userData.hasFavorite(session.name)) {
                matchesSegment = true;
            }
        }
        else {
            matchesSegment = true;
        }
        // all tests must be true if it should not be hidden
        session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
        //session.hide = !(matchesQueryText && matchesTracks);
    };
    EventsDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1__users_users_data__["a" /* UsersDataProvider */]])
    ], EventsDataProvider);
    return EventsDataProvider;
}());

//# sourceMappingURL=events-data.js.map

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/event-details/event-details.module": [
		720,
		10
	],
	"../pages/event-filter/event-filter.module": [
		721,
		9
	],
	"../pages/home/home.module": [
		722,
		8
	],
	"../pages/login/login.module": [
		723,
		0
	],
	"../pages/profile/profile.module": [
		724,
		7
	],
	"../pages/register/register.module": [
		725,
		6
	],
	"../pages/reset-password/reset-password.module": [
		726,
		5
	],
	"../pages/tabs-game/tabs-game.module": [
		727,
		4
	],
	"../pages/tabs-profile/tabs-profile.module": [
		728,
		3
	],
	"../pages/tabs-schedule/tabs-schedule.module": [
		729,
		1
	],
	"../pages/tabs-trophies/tabs-trophies.module": [
		730,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 217;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(382);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_super_tabs__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_users_users_data__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_events_events_data__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var fireBaseconfig = {
    apiKey: "AIzaSyDPi88WJVtbI-RfH6i3iLYSMm350w_yiGw",
    authDomain: "jornadacientificabank.firebaseapp.com",
    databaseURL: "https://jornadacientificabank.firebaseio.com",
    projectId: "jornadacientificabank",
    storageBucket: "jornadacientificabank.appspot.com",
    messagingSenderId: "932347915147"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic2_super_tabs__["b" /* SuperTabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/event-details/event-details.module#EventDetailsPageModule', name: 'EventDetailsPage', segment: 'event-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-filter/event-filter.module#EventFilterPageModule', name: 'EventFilterPage', segment: 'event-filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomeModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs-game/tabs-game.module#TabsGamePageModule', name: 'TabsGamePage', segment: 'tabs-game', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs-profile/tabs-profile.module#TabsProfilePageModule', name: 'TabsProfilePage', segment: 'tabs-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs-schedule/tabs-schedule.module#TabsSchedulePageModule', name: 'TabsSchedulePage', segment: 'tabs-schedule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs-trophies/tabs-trophies.module#TabsTrophiesPageModule', name: 'TabsTrophiesPage', segment: 'tabs-trophies', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(fireBaseconfig),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_users_users_data__["a" /* UsersDataProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_events_events_data__["a" /* EventsDataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_users_users_data__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_events_events_data__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, userData, eventsData) {
        this.rootPage = 'LoginPage';
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
        eventsData.carregarEventos();
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Gabriel Ramos\Desktop\_IonicApps\JornadaCientifica2018\JornadaCientifica_Official\JornadaCientificaApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Gabriel Ramos\Desktop\_IonicApps\JornadaCientifica2018\JornadaCientifica_Official\JornadaCientificaApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_users_users_data__["a" /* UsersDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_events_events_data__["a" /* EventsDataProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UsersDataProvider = /** @class */ (function () {
    function UsersDataProvider() {
        this._favorites = [];
        // private api_url = 'URL DA API'
        // constructor(public http: HttpClient) {}
        // login(email:string,password:string){
        //   return new Promise((resolve, reject) => {
        //     var data = { email:email, password:password };
        //     let urlEspecifica = this.api_url + 'login';
        //     this.http.post(urlEspecifica , data)
        //       .subscribe(
        //         (result:any) => { resolve(result.json()) },
        //         (error)      => { reject(error.json())   }
        //       )
        //   });
        // }  
        // //pegar todos os usuarios pro rank
        // getAllUsers(page:number){
        //   return new Promise((resolve, reject) => {
        //     let urlEspecifica = this.api_url + 'users?per_page=10&page='+ page;
        //     this.http.get(urlEspecifica)
        //       .subscribe(
        //         (result:any) => { resolve(result.json()) },
        //         (error)      => { reject(error.json())   }
        //       )
        //   });
        // }
        // //Informações do usuario especifico
        // getOneUser(id:number){
        //   return new Promise((resolve, reject) => {
        //     let urlEspecifica = this.api_url + 'users/'+ id;
        //     this.http.get(urlEspecifica)
        //       .subscribe(
        //         (result:any) => { resolve(result.json()) },
        //         (error)      => { reject(error.json())   }
        //       )
        //   });
        // }
        //----------------------CRUD DE USUARIOS-------------------
        //  // {"email": "email@email","password": "123456"} => {"token": "QpwL5tke4Pnpja7X"}
        // createAccout(email:string,password:string){
        //   return new Promise((resolve, reject) => {
        //     var data = { email:email, password:password };
        //     let urlEspecifica = this.api_url + 'register';
        //     this.http.post(urlEspecifica, data)
        //       .subscribe(
        //         (result:any) => { resolve(result.json()) },
        //         (error)      => { reject(error.json())   }
        //       )
        //   });
        // } 
        // insertUser(user:any){
        //   return new Promise((resolve, reject) => {
        //     let urlEspecifica = this.api_url + 'users';
        //     this.http.post(urlEspecifica, user)
        //       .subscribe(
        //         (result:any) => { resolve(result.json()) },
        //         (error)      => { reject(error.json())   }
        //       )
        //   });
        // }
        // updateUser(user:any){
        //   return new Promise((resolve, reject) => {
        //     let urlEspecifica = this.api_url + 'users/'+ user.id;
        //     let data= {
        //       "first_name":user.first_name, 
        //       "last_name":user.last_name
        //     }
        //     this.http.put(urlEspecifica, user)
        //       .subscribe(
        //         (result:any) => { resolve(result.json()) },
        //         (error)      => { reject(error.json())   }
        //       )
        //   });
        // }
        // deleteUser(id:number){
        //   return new Promise((resolve, reject) => {
        //     let urlEspecifica = this.api_url + 'users/'+ id;
        //     this.http.delete(urlEspecifica)
        //       .subscribe(
        //         (result:any) => { resolve(result.json()) },
        //         (error)      => { reject(error.json())   }
        //       )
        //   });
        // }
    }
    UsersDataProvider.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    ;
    UsersDataProvider.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    ;
    UsersDataProvider.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    ;
    UsersDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], UsersDataProvider);
    return UsersDataProvider;
}());

//# sourceMappingURL=users-data.js.map

/***/ })

},[377]);
//# sourceMappingURL=main.js.map