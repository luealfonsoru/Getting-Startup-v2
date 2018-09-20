webpackJsonp([0],{

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContestPageModule", function() { return ContestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contest__ = __webpack_require__(592);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContestPageModule = (function () {
    function ContestPageModule() {
    }
    ContestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contest__["a" /* ContestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contest__["a" /* ContestPage */]),
            ],
        })
    ], ContestPageModule);
    return ContestPageModule;
}());

//# sourceMappingURL=contest.module.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the ContestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContestPage = (function () {
    function ContestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.added = false;
        this.selected = false;
    }
    ContestPage.prototype.addIt = function () {
        console.log("hola");
        this.selected = true;
    };
    ContestPage.prototype.selectIt = function () {
        this.added = true;
        this.selected = false;
    };
    ContestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContestPage');
    };
    ContestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contest',template:/*ion-inline-start:"/home/lucholuis123/Getting Startup v2/src/pages/contest/contest.html"*/'<!--\n  Generated template for the ContestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title></ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content class="main-background">\n      <ion-row>\n          <ion-card style="height: 25vh; width:80vw;padding: 0px;margin: 0px; background-color: #000000;">\n            <img src="assets/img/p1.jpg">\n            <div class="card-title">Concurso de gatos</div>\n          </ion-card>\n          <ion-card style="height: 25vh; width:20vw;padding: 0px;margin: 0px; background-color: #0c80a0;" *ngIf="!added">\n              <div class="card-title"><ion-icon style="color:white;" name="add-circle" (click)="addIt()"></ion-icon></div>\n              <div class="card-subtitle" style="margin-left: 2%">Unirme</div>\n          </ion-card>\n          <ion-card style="height: 25vh; width:20vw;padding: 0px;margin: 0px; background-color: #0c80a0;" *ngIf="added">\n              <div class="card-title"><ion-icon style="color:white;" name="remove-circle"></ion-icon></div>\n              <div class="card-subtitle" style="margin-left: 2%">Abandonar</div>\n          </ion-card>\n        </ion-row>\n        <ion-list *ngIf="selected">\n            <ion-item  (click)="selectIt()" >\n              Mi proyecto\n            </ion-item>\n          </ion-list>\n  \n        <ion-row>\n            <ion-card style="height: 15vh; width:93vw; background-color: #0c80a0;margin-top:10px; margin-bottom: 2px">\n                <div class="about-title">Descripción</div>\n                <div class="about-subtitle">"Concurso de proyectos temáticos: si tu proyecto tiene que ver con gatos ¡inscríbete! :3"</div>\n            </ion-card>\n          </ion-row>\n          <ion-row style="padding-bottom: 0px">\n              <ion-card style="height: 8vh; width:25vw; background-color: #0c80a0;">\n                <div class="card-section">Perks</div>\n              </ion-card> \n                  <ion-card style="height: 8vh; width:8vh; background-color: #0c80a0;margin-left:1px;margin-right:1px;margin-top:12px;margin-bottom: 2px;" >\n                      <ion-icon name="color-palette" class="white-icon"></ion-icon>\n                      <div class="card-subsection">Artistico</div>\n                    </ion-card>\n              </ion-row>\n              <ion-row style="padding-bottom: 0px">\n                  <ion-card style="height: 8vh; width:35vw; background-color: #0c80a0;margin-top:10px">\n                    <div class="card-section">Proyectos Inscritos</div>\n                  </ion-card> \n                      <ion-card style="height: 8vh; width:25vw; background-color: #0c80a0;margin-left:1px;margin-right:1px;margin-top:10px;margin-bottom: 2px;" *ngIf="added">\n                          <ion-icon name="md-cube" class="white-icon"></ion-icon>\n                          <div class="card-subsection">Mi Proyecto</div>\n                        </ion-card>\n                  </ion-row>\n                  <ion-row style="padding-bottom: 0px">\n                      <ion-card style="height: 8vh; width:25vw; background-color: #0c80a0;">\n                        <div class="card-section">Premios</div>\n                      </ion-card> \n                          <ion-card style="height: 8vh; width:8vh; background-color: #0c80a0;margin-left:1px;margin-right:1px;margin-top:12px;margin-bottom: 2px;" >\n                              <ion-icon name="trophy" class="white-icon"></ion-icon>\n                              <div class="card-subsection">Trofeo</div>\n                            </ion-card>\n                            <ion-card style="height: 8vh; width:8vh; background-color: #0c80a0;margin-left:1px;margin-right:1px;margin-top:12px;margin-bottom: 2px;" >\n                                <ion-icon name="md-cash" class="white-icon"></ion-icon>\n                                <div class="card-subsection">Patrocinio</div>\n                              </ion-card>\n                      </ion-row>\n                      <ion-row style="padding-bottom: 0px">\n                          <ion-card style="height: 8vh; width:35vw; background-color: #0c80a0;margin-top:10px">\n                            <div class="card-section">Requisitos o condiciones</div>\n                          </ion-card> \n                              <ion-card style="height: 8vh; width:25vw; background-color: #0c80a0;margin-left:1px;margin-right:1px;margin-top:10px;margin-bottom: 2px;">\n                                  <ion-icon name="md-star-outline" class="white-icon"></ion-icon>\n                                  <div class="card-subsection">Proyecto Nuevo</div>\n                                </ion-card>\n                                <ion-card style="height: 8vh; width:25vw; background-color: #0c80a0;margin-left:1px;margin-right:1px;margin-top:10px;margin-bottom: 2px;">\n                                    <ion-icon name="md-time" class="white-icon"></ion-icon>\n                                    <div class="card-subsection">Hasta 21/09/2018</div>\n                                  </ion-card>\n                          </ion-row>\n  \n  </ion-content>'/*ion-inline-end:"/home/lucholuis123/Getting Startup v2/src/pages/contest/contest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ContestPage);
    return ContestPage;
}());

//# sourceMappingURL=contest.js.map

/***/ })

});
//# sourceMappingURL=0.js.map