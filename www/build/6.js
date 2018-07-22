webpackJsonp([6],{

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(742);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(370);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var RegisterPage = /** @class */ (function () {
    function RegisterPage(afauth, toastCtrl, navCtrl, navParams) {
        this.afauth = afauth;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    RegisterPage.prototype.newRegister = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var toastMessage, result;
            return __generator(this, function (_a) {
                debugger;
                toastMessage = this.toastCtrl.create({ duration: 3000, position: 'bottom' }) //Formato da Mensagem
                ;
                if (user.email == null || user.password == null) {
                    toastMessage.setMessage('Todos os Campos devem ser preenchidos');
                    toastMessage.present();
                }
                else {
                    result = this.afauth.auth.createUserAndRetrieveDataWithEmailAndPassword(user.email, user.password);
                    console.log(result);
                    result.then(function (result) {
                        //user.sendEmailVerification(); //Dispara o email para o usuario 
                        toastMessage.setMessage('Usuario Cadastrado com Sucesso');
                        toastMessage.present();
                        _this.navCtrl.setRoot('ProfilePage'); //    this.navCtrl.setRoot('HomePage'); 
                    })
                        .catch(function (error) {
                        //Tratamento de erros do Firebase
                        if (error.code == 'auth/email-already-in-use')
                            toastMessage.setMessage('O e-mail digitado já esta em uso');
                        else if (error.code == 'auth/invalid-email')
                            toastMessage.setMessage('O e-mail digitado não é valido');
                        else if (error.code == 'auth/operation-not-allowed')
                            toastMessage.setMessage('Não esta habilitado criar usuários');
                        else if (error.code == 'auth/weak-password')
                            toastMessage.setMessage('A senha digitada é muito fraca');
                        toastMessage.present();
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Gabriel Ramos\Desktop\_IonicApps\JornadaCientifica2018\JornadaCientifica_Official\JornadaCientificaApp\src\pages\register\register.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>Novo Usuário</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item style="background-color:#fbfbfc;">\n    <ion-label floating>Email</ion-label>\n    <ion-input type="text" name="email" ></ion-input>\n  </ion-item>\n  <ion-item style="background-color:#fbfbfc;">\n    <ion-label floating>Senha</ion-label>\n    <ion-input type="password" name="password"></ion-input>\n  </ion-item>\n\n  <button ion-button block clear (click)="newRegister()">Criar Usuário</button>\n</ion-content> -->\n\n<ion-header>\n    <ion-navbar></ion-navbar>\n</ion-header>\n\n<ion-content padding class="home-background">\n  <br>\n  <div text-center><img src="assets/imgs/user.png" width="170" ></div>\n  <br>\n  <ion-list no-lines padding-top> \n    <ion-item style="background:#fff ">\n      <ion-input type="text" name="email" placeholder="Email" [(ngModel)]="user.email"></ion-input>\n    </ion-item>\n    <br>\n    <ion-item style="background:#fff ">\n      <ion-input type="password" name="password" placeholder="Senha"[(ngModel)]="user.password"></ion-input>\n    </ion-item>\n    <br/>\n    <button ion-button round block  color="primary" (click)="newRegister(user)">Avançar</button>\n  </ion-list>\n</ion-content>\n\n\n<!-- <ion-footer (click)="login()">\n  <ion-toolbar style="text-align:center;color:#a4a5a6">\n    Já possui uma conta ? <span style="color:#000">Entrar agora</span>\n  </ion-toolbar>\n</ion-footer> -->\n\n'/*ion-inline-end:"C:\Users\Gabriel Ramos\Desktop\_IonicApps\JornadaCientifica2018\JornadaCientifica_Official\JornadaCientificaApp\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=6.js.map