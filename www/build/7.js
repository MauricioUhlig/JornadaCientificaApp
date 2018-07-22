webpackJsonp([7],{

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(741);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, platform, actionsheetCtrl, toastCtrl, afauth, afDataBase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
        this.toastCtrl = toastCtrl;
        this.afauth = afauth;
        this.afDataBase = afDataBase;
        this.profile = {};
        this.isFAESA = true;
        this.isAluno = true;
        this.isProfessor = false;
        this.isVisitante = false;
        if (this.type == "") {
            this.type = "Aluno";
            this.isFAESA = true;
            this.isAluno = true;
            this.isProfessor = false;
            this.isVisitante = false;
        }
    }
    ProfilePage.prototype.openMenu = function () {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Tipo do Usuario',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Aluno',
                    icon: 'arrow-dropright-circle',
                    handler: function () {
                        _this.type = "Aluno";
                        _this.isFAESA = true;
                        _this.isAluno = true;
                        _this.isProfessor = false;
                        _this.isVisitante = false;
                    }
                },
                {
                    text: 'Professor',
                    icon: 'arrow-dropright-circle',
                    handler: function () {
                        _this.type = "Professor";
                        _this.isFAESA = true;
                        _this.isAluno = false;
                        _this.isProfessor = true;
                        _this.isVisitante = false;
                    }
                },
                {
                    text: 'Visitante',
                    icon: 'arrow-dropright-circle',
                    handler: function () {
                        _this.type = "Visitante";
                        _this.isFAESA = false;
                        _this.isAluno = false;
                        _this.isProfessor = false;
                        _this.isVisitante = true;
                    }
                },
            ]
        });
        actionSheet.present();
    };
    ProfilePage.prototype.addProfile = function () {
        var _this = this;
        var toastMessage = this.toastCtrl.create({ duration: 3000, position: 'bottom' }); //Formato da Mensagem
        if (this.profile.firstName == null)
            toastMessage.setMessage('Nome deve estar preenchido').present();
        else if (this.profile.lastName == null)
            toastMessage.setMessage('Sobrenome deve estar preenchido').present();
        else if (this.profile.nickName == null)
            toastMessage.setMessage('Nome de Usuário deve estar preenchido').present();
        else if (this.profile.tel == null)
            toastMessage.setMessage('Telefone de Contato deve estar preenchido').present();
        else {
            this.profile.tipoUsuario = this.type;
            this.afauth.authState.take(1).subscribe(function (auth) {
                _this.afDataBase
                    .object("profile/" + auth.uid)
                    .set(_this.profile)
                    .then(function () { return _this.navCtrl.setRoot('HomePage'); });
            });
        }
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Gabriel Ramos\Desktop\_IonicApps\JornadaCientifica2018\JornadaCientifica_Official\JornadaCientificaApp\src\pages\profile\profile.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>profile</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding class="home-background">\n  \n  <div text-center><img src="assets/imgs/user.png" width="90" ></div>\n    \n\n  <ion-grid>\n    <ion-row>\n        <ion-col>\n            <button ion-button block round color="primary" (click)="openMenu()"> \n                Tipo do Usuario : {{type}} \n            </button>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n\n  <ion-list no-lines padding-top>\n<!-- <ion-card>\n      <img src="{{ myphoto }}"/>\n      <ion-row>\n          <ion-col><button ion-button icon-start clear small (click)="searchPicture()"><ion-icon name="add-circle"></ion-icon></button></ion-col>\n          <ion-col><button ion-button icon-start clear small (click)="takePicture()"  ><ion-icon name="aperture"></ion-icon></button></ion-col>\n          <ion-col><button ion-button icon-start clear small (click)="cropPicture()"  ><ion-icon name="crop"></ion-icon></button></ion-col>\n      </ion-row>\n  </ion-card> -->\n       <ion-item style="background:#fff;">\n          <ion-input type="text" [(ngModel)]="profile.firstName" placeholder="Nome" required></ion-input>\n      </ion-item>\n       <ion-item style="background:#fff;">\n          <ion-input type="text" [(ngModel)]="profile.lastName" placeholder="Sobrenome" required></ion-input>\n      </ion-item>\n       <ion-item style="background:#fff;">\n          <ion-input type="text" [(ngModel)]="profile.nickName" placeholder="Nome de usuário" required></ion-input>\n      </ion-item>\n       <ion-item style="background:#fff;" *ngIf="isFAESA">\n          <ion-input type="number" [(ngModel)]="profile.matricula"  placeholder="Numero de Matricula" ></ion-input> \n      </ion-item>\n       <ion-item style="background:#fff;">\n          <ion-input type="number" [(ngModel)]="profile.tel"  placeholder="Telefone de Contato" ></ion-input>\n      </ion-item>\n       <ion-item style="background:#fff;" *ngIf="isAluno">\n          <ion-input type="text" maxLength="50"  [(ngModel)]="profile.curso" placeholder="Qual Curso você esta fazendo ?" ></ion-input>\n      </ion-item>\n       <ion-item style="background:#fff;" *ngIf="isProfessor">\n        <ion-input type="text" maxLength="50"  [(ngModel)]="profile.graduacao" placeholder="Qual a sua Graduação ? " ></ion-input>\n    </ion-item>\n     <ion-item style="background:#fff;" *ngIf="isProfessor">\n      <ion-input type="text" maxLength="50"  [(ngModel)]="profile.posgraduacao" placeholder="Possui alguma Pós-Graduação ?" ></ion-input>\n  </ion-item>\n   <ion-item style="background:#fff;" *ngIf="isProfessor">\n    <ion-input type="text" maxLength="50"  [(ngModel)]="profile.mestrado" placeholder="Possui Mestrado ?" ></ion-input>\n  </ion-item>\n   <ion-item style="background:#fff;" *ngIf="isProfessor">\n    <ion-input type="text" maxLength="50"  [(ngModel)]="profile.doutorado" placeholder="Possui Doutorado ?" ></ion-input>\n  </ion-item>\n       <ion-item style="background:#fff;" *ngIf="isAluno"> \n          <ion-input type="text" maxLength="50"  [(ngModel)]="profile.periodo" placeholder="Periodo"></ion-input>\n      </ion-item>\n       <ion-item style="background:#fff;" *ngIf="isVisitante"> \n          <ion-textarea maxLength="100" styke="#36465D"  [(ngModel)]="profile.comoConheceu" placeholder="Como conheceu o Evento ?"></ion-textarea> \n      </ion-item> \n   \n  </ion-list>\n\n  <button ion-button block round color="primary" (click)="addProfile(profile)">Registrar Perfil</button>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gabriel Ramos\Desktop\_IonicApps\JornadaCientifica2018\JornadaCientifica_Official\JornadaCientificaApp\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* Platform */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=7.js.map