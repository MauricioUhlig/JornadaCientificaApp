webpackJsonp([2],{

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsTrophiesPageModule", function() { return TabsTrophiesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_trophies__ = __webpack_require__(745);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsTrophiesPageModule = /** @class */ (function () {
    function TabsTrophiesPageModule() {
    }
    TabsTrophiesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs_trophies__["a" /* TabsTrophiesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs_trophies__["a" /* TabsTrophiesPage */]),
            ],
        })
    ], TabsTrophiesPageModule);
    return TabsTrophiesPageModule;
}());

//# sourceMappingURL=tabs-trophies.module.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsTrophiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TabsTrophiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsTrophiesPage = /** @class */ (function () {
    function TabsTrophiesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TabsTrophiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsTrophiesPage');
    };
    TabsTrophiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs-trophies',template:/*ion-inline-start:"C:\Users\Gabriel Ramos\Desktop\_IonicApps\JornadaCientifica2018\JornadaCientifica_Official\JornadaCientificaApp\src\pages\tabs-trophies\tabs-trophies.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Troféus</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/trofeu.jpg">\n      </ion-avatar>\n      <h2>Trofeu</h2>\n      <p>Descrição do Trofeu</p>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/trofeu.jpg">\n      </ion-avatar>\n      <h2>Trofeu</h2>\n      <p>Descrição do Trofeu</p>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/trofeu.jpg">\n      </ion-avatar>\n      <h2>Trofeu</h2>\n      <p>Descrição do Trofeu</p>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/trofeu.jpg">\n      </ion-avatar>\n      <h2>Trofeu</h2>\n      <p>Descrição do Trofeu</p>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/trofeu.jpg">\n      </ion-avatar>\n      <h2>Trofeu</h2>\n      <p>Descrição do Trofeu</p>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/trofeu.jpg">\n      </ion-avatar>\n      <h2>Trofeu</h2>\n      <p>Descrição do Trofeu</p>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/trofeu.jpg">\n      </ion-avatar>\n      <h2>Trofeu</h2>\n      <p>Descrição do Trofeu</p>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/trofeu.jpg">\n      </ion-avatar>\n      <h2>Trofeu</h2>\n      <p>Descrição do Trofeu</p>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../assets/imgs/trofeu.jpg">\n      </ion-avatar>\n      <h2>Trofeu</h2>\n      <p>Descrição do Trofeu</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gabriel Ramos\Desktop\_IonicApps\JornadaCientifica2018\JornadaCientifica_Official\JornadaCientificaApp\src\pages\tabs-trophies\tabs-trophies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], TabsTrophiesPage);
    return TabsTrophiesPage;
}());

//# sourceMappingURL=tabs-trophies.js.map

/***/ })

});
//# sourceMappingURL=2.js.map