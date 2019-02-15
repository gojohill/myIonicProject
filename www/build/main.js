webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_bookservice_bookservice__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// This page will display the Cover Page with a menu.  If the cover picture is clicked on it
// go to the table of contents page.
var HelloIonicPage = /** @class */ (function () {
    function HelloIonicPage(bookService, navCtrl) {
        this.bookService = bookService;
        this.navCtrl = navCtrl;
        // Get the Book from the Provider
        this.myBook = this.bookService.getBook();
    }
    // clicking on the cover picture will take you to the Table of Contents Page
    HelloIonicPage.prototype.gotoTOC = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */]);
    };
    HelloIonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\RTF\src\pages\hello-ionic\hello-ionic.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{myBook.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding text-center (click)="gotoTOC()">\n\n\n  <h1>{{myBook.title}} - {{myBook.subTitle}}</h1>\n  <br>\n  <ion-grid>\n      <ion-row>\n          <ion-col col-12>\n            \n              <img id="coverImg" src="../../assets/imgs/coverpg.png">\n            \n          </ion-col>\n      </ion-row>\n  </ion-grid>\n  \n  <br>\n  <h4>{{myBook.author}}</h4>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\RTF\src\pages\hello-ionic\hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_bookservice_bookservice__["a" /* BookserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HelloIonicPage);
    return HelloIonicPage;
}());

//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hello_ionic_hello_ionic__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_bookservice_bookservice__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListPage = /** @class */ (function () {
    function ListPage(bookService, navCtrl, navParams) {
        this.bookService = bookService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // get the book 
        this.myBook = this.bookService.getBook();
        this.icons = ['book'];
        this.items = [];
        this.items.push({
            title: 'Cover Page',
            note: 'Cover Page My Ionic Book',
            icon: this.icons[0],
            chapter: 0
        });
        // load the chapters to be displayed
        for (var i = 0; i < this.myBook.chapters.length; i++) {
            this.items.push({
                title: 'Chapter ' + this.myBook.chapters[i].nbr,
                note: 'This is Chapter #' + this.myBook.chapters[i].nbr,
                icon: this.icons[0],
                chapter: this.myBook.chapters[i].nbr
            });
        }
    }
    // go to the item selected from the Table of Contents
    ListPage.prototype.itemTapped = function (event, item) {
        if (item.title === 'Cover Page') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__hello_ionic_hello_ionic__["a" /* HelloIonicPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], {
                item: item
            });
        }
    };
    // clicking on the right arrow will take you to the first page
    ListPage.prototype.gotoPg1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], {
            item: {
                title: 'Chapter ' + this.myBook.chapters[0].nbr,
                note: 'This is Chapter #' + this.myBook.chapters[0].nbr,
                icon: this.icons[0],
                chapter: this.myBook.chapters[0].nbr
            }
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\RTF\src\pages\list\list.html"*/'<ion-header>\n  <div id="grid1">\n    <ion-grid>\n      <ion-row>\n        <div id="div1">\n          <ion-col col-1>\n            <ion-navbar id="navBar">\n              <button ion-button menuToggle>\n                <ion-icon name="menu"></ion-icon>\n              </button>\n            </ion-navbar>\n          </ion-col>\n        </div>\n        <div id="div2">\n          <ion-col col-10>\n            <ion-title>Table of Content</ion-title>\n          </ion-col>\n        </div>\n        <div id="div3">\n          <ion-col col-2>\n            <button >\n              <ion-icon id="#titleforward" name="arrow-forward" (click)="gotoPg1()"></ion-icon>\n            </button>\n          </ion-col>\n        </div>\n      </ion-row>\n    </ion-grid>\n\n\n  </div>\n</ion-header>\n\n<ion-content>\n  <div>\n\n\n\n    <ion-list>\n      <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n        <ion-icon name="{{item.icon}}" item-left></ion-icon>\n        {{item.title}}\n        <div class="item-note" item-right>\n          {{item.note}}\n        </div>\n      </button>\n    </ion-list>\n\n\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\RTF\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_bookservice_bookservice__["a" /* BookserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
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
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bookservice_bookservice__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// ionic service to access the book

/**
 * This displays the pages with a previous and next page button
 */
var ItemDetailsPage = /** @class */ (function () {
    function ItemDetailsPage(bookService, navCtrl, navParams) {
        this.bookService = bookService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pgNbr = 0;
        this.pageOf = 0;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Get the chapter that was selected from the Table of Contents
        this.selectedChapter = bookService.getChapter(this.selectedItem.chapter);
        // Get the first page of the chapter that was selected from the Table of Contents
        this.selectedPage = bookService.getPage(this.selectedItem.chapter, this.pgNbr);
        this.pageOf = this.calcPgNbr(this.selectedChapter.nbr, this.selectedPage.pgNbr);
    }
    // goes to the next page in the current Chapter or the next Chapter
    ItemDetailsPage.prototype.nextPg = function () {
        if (this.pgNbr < (this.selectedChapter.pages.length - 1)) {
            this.pgNbr++;
            this.selectedPage = this.bookService.getPage(this.selectedItem.chapter, this.pgNbr);
        }
        else {
            if (this.selectedItem.chapter < (this.bookService.getNbrOfChapters())) {
                this.selectedItem.chapter++;
                this.pgNbr = 0;
                this.selectedChapter = this.bookService.getChapter(this.selectedItem.chapter);
                this.selectedPage = this.bookService.getPage(this.selectedItem.chapter, this.pgNbr);
            }
        }
        this.pageOf = this.calcPgNbr(this.selectedChapter.nbr, this.selectedPage.pgNbr);
    };
    // goes to the previous page of the current Chapter or the previous Chapter
    ItemDetailsPage.prototype.prevPg = function () {
        if (this.pgNbr > 0) {
            this.pgNbr--;
            this.selectedPage = this.bookService.getPage(this.selectedItem.chapter, this.pgNbr);
        }
        else {
            if (this.selectedItem.chapter > 1) {
                this.selectedItem.chapter--;
                this.pgNbr = this.bookService.getPagesInChapter(this.selectedItem.chapter) - 1;
                this.selectedChapter = this.bookService.getChapter(this.selectedItem.chapter);
                this.selectedPage = this.bookService.getPage(this.selectedItem.chapter, this.pgNbr);
            }
        }
        this.pageOf = this.calcPgNbr(this.selectedChapter.nbr, this.selectedPage.pgNbr);
    };
    ItemDetailsPage.prototype.calcPgNbr = function (chapterNbr, currentPgNbr) {
        return (10 * (chapterNbr - 1)) + currentPgNbr;
    };
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-details',template:/*ion-inline-start:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\RTF\src\pages\item-details\item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Chapter {{selectedItem.chapter}} <div id="titleDiv">Page {{pageOf}}</div></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedChapter.title}}\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n  </h3>\n\n  <ion-content padding>\n\n    <button ion-button block (click)="prevPg()">\n      &lt;&lt;&nbsp;&nbsp;prev page\n    </button>\n\n    <div id=\'pageTxt\'>\n      {{selectedPage.pgText}}\n    </div>\n\n    <div id="pgNbr">\n      - {{pageOf}} -\n    </div>\n    <br>\n    <button ion-button block (click)="nextPg()">\n      next page&nbsp;&nbsp;&gt;&gt;\n    </button>\n\n\n\n\n  </ion-content>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\RTF\src\pages\item-details\item-details.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_bookservice_bookservice__["a" /* BookserviceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_bookservice_bookservice__["a" /* BookserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RtfHelloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pdfpopulator_pdfpopulator__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import 'rxjs/add/operator/catch';
/**
 * Generated class for the RtfHelloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RtfHelloPage = /** @class */ (function () {
    function RtfHelloPage(Pdfpopulator, navCtrl, navParams) {
        this.Pdfpopulator = Pdfpopulator;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // change this to true to use the redit url
        this.useRedit = this.Pdfpopulator.useRedit;
        //this.populateData();
    }
    RtfHelloPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RtfHelloPage');
        if (this.useRedit) {
            this.urlIs = this.Pdfpopulator.getReditUrl();
        }
        else {
            this.urlIs = this.Pdfpopulator.getPDFUrl();
        }
    };
    RtfHelloPage.prototype.seeIfRedit = function () {
        this.useRedit = !this.useRedit;
        if (this.useRedit)
            this.urlIs = this.Pdfpopulator.getReditUrl();
        else
            this.urlIs = this.Pdfpopulator.getPDFUrl();
    };
    RtfHelloPage.prototype.populateData = function () {
        var _this = this;
        alert(this.urlIs);
        this.Pdfpopulator.getData(this.urlIs, this.useRedit).subscribe(function (data) {
            console.log(data);
            if (_this.useRedit)
                _this.dataIs = data.data.children;
            else
                _this.dataIs = data;
        }, function (err) {
            console.log(err.message);
            alert(err.message);
            if (_this.useRedit)
                _this.dataIs = null;
            else
                _this.dataIs = null;
        });
    };
    RtfHelloPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rtf-hello',template:/*ion-inline-start:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\RTF\src\pages\rtf-hello\rtf-hello.html"*/'<!--\n  Generated template for the RtfHelloPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Center City</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  Enter Url:&nbsp;<input id="urlInput" [(ngModel)]="urlIs" >\n  <br>\n  Use Reddit: &nbsp;\n  <input type = "checkbox" [(ngModel)]="useRedit" (click)="seeIfRedit()"/>\n  <br>\n  <button ion-button block (click)="populateData()">\n    Populate Data\n  </button>\n\n  <br>\n\n  <ion-item *ngFor="let d of dataIs">\n    <ion-grid>\n      <ion-row>\n        <div *ngIf="useRedit;else other_content">\n          <ion-col col-12>\n            {{d.kind}} - {{d.data.author}} - {{d.data.id}}\n          </ion-col>\n        </div>\n\n        <ng-template #other_content>\n          <ion-col col-5>\n            {{d.fieldName}}\n          </ion-col>\n          <ion-col col-4>\n            {{d.fieldValue}}\n          </ion-col>\n          <ion-col col-3>\n            {{d.fieldType}}\n          </ion-col>\n        </ng-template>\n\n      </ion-row>\n    </ion-grid>\n\n  </ion-item>\n\n  <!-- <ion-grid>\n    <ion-row>\n\n      <ion-col col-1>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n</ion-content>'/*ion-inline-end:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\RTF\src\pages\rtf-hello\rtf-hello.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_pdfpopulator_pdfpopulator__["a" /* PdfpopulatorProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_pdfpopulator_pdfpopulator__["a" /* PdfpopulatorProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RtfHelloPage);
    return RtfHelloPage;
}());

//# sourceMappingURL=rtf-hello.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RtfFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pdfpopulator_pdfpopulator__ = __webpack_require__(42);
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
 * Generated class for the RtfFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RtfFormPage = /** @class */ (function () {
    function RtfFormPage(navCtrl, navParams, formBuilder, PDFPopulator) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.PDFPopulator = PDFPopulator;
        this.fileUrl = null;
        this.test = false;
        this.myForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(60), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(60), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            city: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            state: [''],
            zip: [''],
            dob: [''],
            age: [''],
            phone: [''],
            otherphone: [''],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])],
            marritalStatus: [],
            livingWith: [],
            livingWithOther: [''],
            spouseName: [''],
            spouseAge: [''],
            dateOfMarriage: [''],
            marriageRating: [''],
            spouseSession: [''],
            spouseSaved: [''],
            firstMarriage: [''],
            multiMarriageExplain: [''],
            child1Name: [''],
            child1Age: [''],
            child1Sex: [''],
            child1WhichMarriage: [''],
            child1SelfSupporting: [false],
            child1Married: [false],
            child1Alive: [true],
            child1AgeCauseOfDeath: [''],
            child2Name: [''],
            child2Age: [''],
            child2Sex: [''],
            child2WhichMarriage: [''],
            child2SelfSupporting: [false],
            child2Married: [false],
            child2Alive: [true],
            child2AgeCauseOfDeath: [''],
            Child3Name: [''],
            Child3Age: [''],
            Child3Sex: [''],
            Child3WhichMarriage: [''],
            Child3SelfSupporting: [false],
            Child3Married: [false],
            Child3Alive: [true],
            Child3AgeCauseOfDeath: [''],
            Child4Name: [''],
            Child4Age: [''],
            Child4Sex: [''],
            Child4WhichMarriage: [''],
            Child4SelfSupporting: [false],
            Child4Married: [false],
            Child4Alive: [true],
            Child4AgeCauseOfDeath: [''],
            saved: [false],
            savedWhen: [''],
            savedDescribe: [''],
            savedDescribe2: [''],
            baptismHolySpirit: [''],
            baptismHolySpiritWhen: [''],
            currentRelationshipGod: [''],
            churchAfflications: [''],
            reasonForSession: [''],
            affectsLifeStyle: [''],
            feelAboutYourself: [''],
            relationship: []
        });
        this.name = this.myForm.controls['name'];
        this.address = this.myForm.controls['address'];
        this.city = this.myForm.controls['city'];
        this.state = this.myForm.controls['state'];
        this.zip = this.myForm.controls['zip'];
    }
    RtfFormPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RtfFormPage');
    };
    RtfFormPage.prototype.submitPg = function () {
        var _this = this;
        this.errormsg = "";
        if (this.name.hasError('required')) {
            this.errormsg = "Name required";
            return;
        }
        if (this.address.hasError('required')) {
            this.errormsg = "Address required";
            return;
        }
        var jsonData = this.prepareJson();
        this.PDFPopulator.populatePDF(jsonData).subscribe(function (response) {
            //console.log(response)
            var file = new Blob([response], { type: 'application/pdf' });
            //Build a URL from the file
            //console.log(file)
            alert(file);
            _this.fileUrl = _this.PDFPopulator.transform(URL.createObjectURL(file));
        }, function (err) {
            //console.log(err.message);
            alert(err.message);
        });
    };
    RtfFormPage.prototype.prepareJson = function () {
        var formObj = this.myForm.getRawValue();
        var object = {};
        var object1 = {
            "emailGroup": [
                {
                    "toEmail": [
                        "gojohill@yahoo.com"
                    ],
                    "fromEmail": "cccInnerHealing@gmail.com",
                    "ccEmail": [
                        "gojohill@outlook.com"
                    ],
                    "bccEmail": [
                        "gojohill@gmail.com"
                    ]
                }
            ],
            "sendEmail": false,
            "subject": "Testing PDF from PDFMaker2",
            "content": "Attached is the PDF that needs to be reviewed"
        };
        var object2 = {};
        var object3 = {};
        object['hdr'] = object1;
        object['data'] =
            [
                {
                    "fieldName": "Name",
                    "fieldValue": formObj.name,
                    "fieldType": "Tx"
                },
                {
                    "fieldName": "Address",
                    "fieldValue": formObj.address,
                    "fieldType": "Tx"
                },
                {
                    "fieldName": "CityStateZip",
                    "fieldValue": formObj.city + ", " + formObj.state + " " + formObj.zip,
                    "fieldType": "Tx"
                },
                {
                    "fieldName": "DOB",
                    "fieldValue": formObj.dob,
                    "fieldType": "Tx"
                },
                {
                    "fieldName": "Age",
                    "fieldValue": formObj.age,
                    "fieldType": "Tx"
                },
                {
                    "fieldName": "Home Phone",
                    "fieldValue": formObj.phone,
                    "fieldType": "Tx"
                },
                {
                    "fieldName": "Cell",
                    "fieldValue": formObj.otherphone,
                    "fieldType": "Tx"
                },
                {
                    "fieldName": "Email",
                    "fieldValue": formObj.email,
                    "fieldType": "Tx"
                }
            ];
        console.log(formObj.marritalStatus);
        object['data'].push({
            "fieldName": formObj.marritalStatus,
            "fieldValue": "On",
            "fieldType": "Btn"
        });
        if (formObj.livingWith) {
            object['data'].push({
                "fieldName": formObj.livingWith,
                "fieldValue": "On",
                "fieldType": "Btn"
            });
        }
        if (formObj.livingWithOther) {
            object['data'].push({
                "fieldName": "Other",
                "fieldValue": formObj.livingWithOther,
                "fieldType": "Txt"
            });
        }
        object['data'].push({
            "fieldName": 'Spouses Name',
            "fieldValue": formObj.spouseName,
            "fieldType": "Txt"
        });
        object['data'].push({
            "fieldName": 'Age_2',
            "fieldValue": formObj.dateOfMarriage,
            "fieldType": "Txt"
        });
        object['data'].push({
            "fieldName": 'Date of Marriage',
            "fieldValue": formObj.spouseAge,
            "fieldType": "Txt"
        });
        if (formObj.livingWith) {
            object['data'].push({
                "fieldName": formObj.livingWith,
                "fieldValue": "On",
                "fieldType": "Btn"
            });
        }
        object['data'].push({
            "fieldName": 'Other',
            "fieldValue": formObj.livingWithOther,
            "fieldType": "Txt"
        });
        /**
         *  firstMarriage: [''],
        multiMarriageExplain: ['']
         */
        if (formObj.marriageRating) {
            object['data'].push({
                "fieldName": formObj.marriageRating,
                "fieldValue": "On",
                "fieldType": "Btn"
            });
        }
        if (formObj.spouseSession) {
            object['data'].push({
                "fieldName": formObj.spouseSession,
                "fieldValue": "On",
                "fieldType": "Btn"
            });
        }
        if (formObj.spouseSaved) {
            object['data'].push({
                "fieldName": formObj.spouseSaved,
                "fieldValue": "On",
                "fieldType": "Btn"
            });
        }
        if (formObj.firstMarriage) {
            object['data'].push({
                "fieldName": formObj.firstMarriage,
                "fieldValue": "On",
                "fieldType": "Btn"
            });
        }
        object['data'].push({
            "fieldName": 'If not please explain',
            "fieldValue": formObj.multiMarriageExplain,
            "fieldType": "Txt"
        });
        /**
         * child1Name: [''],
        child1Age: [''],
        child1Sex: [''],
        child1WhichMarriage: ['']
         */
        object['data'].push({
            "fieldName": 'NameRow1',
            "fieldValue": formObj.child1Name,
            "fieldType": "Txt"
        });
        object['data'].push({
            "fieldName": 'AgeRow1',
            "fieldValue": formObj.child1Age,
            "fieldType": "Txt"
        });
        object['data'].push({
            "fieldName": 'SexRow1',
            "fieldValue": formObj.child1Sex,
            "fieldType": "Txt"
        });
        object['data'].push({
            "fieldName": 'From which MarriageRow1',
            "fieldValue": formObj.child1WhichMarriage,
            "fieldType": "Txt"
        });
        if (formObj.child1SelfSupporting) {
            object['data'].push({
                "fieldName": 'SelfSupportingRow1',
                "fieldValue": 'On',
                "fieldType": "Btn"
            });
        }
        if (formObj.child1Married) {
            object['data'].push({
                "fieldName": 'ChildMarriedRow1',
                "fieldValue": 'On',
                "fieldType": "Btn"
            });
        }
        if (formObj.child1Alive) {
            object['data'].push({
                "fieldName": 'ChildStillLivingRow1',
                "fieldValue": 'On',
                "fieldType": "Btn"
            });
        }
        object['data'].push({
            "fieldName": 'Age at and Cause of Death',
            "fieldValue": formObj.child1AgeCauseOfDeath,
            "fieldType": "Txt"
        });
        //Child 2
        object['data'].push({
            "fieldName": 'NameRow2',
            "fieldValue": formObj.child2Name,
            "fieldType": "Txt"
        });
        object['data'].push({
            "fieldName": 'AgeRow2',
            "fieldValue": formObj.child2Age,
            "fieldType": "Txt"
        });
        object['data'].push({
            "fieldName": 'SexRow2',
            "fieldValue": formObj.child2Sex,
            "fieldType": "Txt"
        });
        object['data'].push({
            "fieldName": 'From which MarriageRow2',
            "fieldValue": formObj.child2WhichMarriage,
            "fieldType": "Txt"
        });
        if (formObj.child2SelfSupporting) {
            object['data'].push({
                "fieldName": 'SelfSupportingRow2',
                "fieldValue": 'On',
                "fieldType": "Btn"
            });
        }
        if (formObj.child2Married) {
            object['data'].push({
                "fieldName": 'ChildMarriedRow2',
                "fieldValue": 'On',
                "fieldType": "Btn"
            });
        }
        if (formObj.child2Alive) {
            object['data'].push({
                "fieldName": 'ChildStillLivingRow2',
                "fieldValue": 'On',
                "fieldType": "Btn"
            });
        }
        object['data'].push({
            "fieldName": 'Age at and Cause of DeathRow2',
            "fieldValue": formObj.child2AgeCauseOfDeath,
            "fieldType": "Txt"
        });
        //Child 3
        object['data'].push({
            "fieldName": 'NameRow3',
            "fieldValue": formObj.Child3Name,
            "fieldType": "Txt"
        });
        object['data'].push({
            "fieldName": 'AgeRow3',
            "fieldValue": formObj.Child3Age,
            "fieldType": "Txt"
        });
        object['data'].push({
            "fieldName": 'SexRow3',
            "fieldValue": formObj.Child3Sex,
            "fieldType": "Txt"
        });
        object['data'].push({
            "fieldName": 'From which MarriageRow3',
            "fieldValue": formObj.Child3WhichMarriage,
            "fieldType": "Txt"
        });
        if (formObj.Child3SelfSupporting) {
            object['data'].push({
                "fieldName": 'SelfSupportingRow3',
                "fieldValue": 'On',
                "fieldType": "Btn"
            });
        }
        if (formObj.Child3Married) {
            object['data'].push({
                "fieldName": 'ChildMarriedRow3',
                "fieldValue": 'On',
                "fieldType": "Btn"
            });
        }
        if (formObj.Child3Alive) {
            object['data'].push({
                "fieldName": 'ChildStillLivingRow3',
                "fieldValue": 'On',
                "fieldType": "Btn"
            });
        }
        object['data'].push({
            "fieldName": 'Age at and Cause of DeathRow3',
            "fieldValue": formObj.Child3AgeCauseOfDeath,
            "fieldType": "Txt"
        });
        //Child 4
        object['data'].push({
            "fieldName": 'NameRow4',
            "fieldValue": formObj.Child4Name,
            "fieldType": "Txt"
        });
        object['data'].push({
            "fieldName": 'AgeRow4',
            "fieldValue": formObj.Child4Age,
            "fieldType": "Txt"
        });
        object['data'].push({
            "fieldName": 'SexRow4',
            "fieldValue": formObj.Child4Sex,
            "fieldType": "Txt"
        });
        object['data'].push({
            "fieldName": 'From which MarriageRow4',
            "fieldValue": formObj.Child4WhichMarriage,
            "fieldType": "Txt"
        });
        if (formObj.Child4SelfSupporting) {
            object['data'].push({
                "fieldName": 'SelfSupportingRow4',
                "fieldValue": 'On',
                "fieldType": "Btn"
            });
        }
        if (formObj.Child4Married) {
            object['data'].push({
                "fieldName": 'ChildMarriedRow4',
                "fieldValue": 'On',
                "fieldType": "Btn"
            });
        }
        if (formObj.Child4Alive) {
            object['data'].push({
                "fieldName": 'ChildStillLivingRow4',
                "fieldValue": 'On',
                "fieldType": "Btn"
            });
        }
        object['data'].push({
            "fieldName": 'Age at and Cause of DeathRow4',
            "fieldValue": formObj.Child4AgeCauseOfDeath,
            "fieldType": "Txt"
        });
        // Saved and When
        if (formObj.saved) {
            object['data'].push({
                "fieldName": formObj.saved,
                "fieldValue": 'On',
                "fieldType": "Btn"
            });
        }
        object['data'].push({
            "fieldName": 'undefined_13',
            "fieldValue": formObj.savedWhen,
            "fieldType": "Txt"
        });
        object['data'].push({
            "fieldName": 'When',
            "fieldValue": formObj.savedDescribe,
            "fieldType": "Txt"
        });
        object['data'].push({
            "fieldName": 'Briefly tell what happened',
            "fieldValue": formObj.savedDescribe2,
            "fieldType": "Txt"
        });
        //baptismHolySpirit: [''],
        //baptismHolySpiritWhen: ['']
        if (formObj.baptismHolySpirit) {
            object['data'].push({
                "fieldName": formObj.baptismHolySpirit,
                "fieldValue": 'On',
                "fieldType": "Btn"
            });
        }
        object['data'].push({
            "fieldName": 'undefined_14',
            "fieldValue": formObj.baptismHolySpiritWhen,
            "fieldType": "Txt"
        });
        //Describe your present relationship with the Lord 1
        object['data'].push({
            "fieldName": 'Describe your present relationship with the Lord 1',
            "fieldValue": formObj.currentRelationshipGod,
            "fieldType": "Txt"
        });
        object['data'].push({
            "fieldName": 'Please list all previous church affiliations',
            "fieldValue": formObj.churchAfflications,
            "fieldType": "Txt"
        });
        object['data'].push({
            "fieldName": '1 Describe the issue that prompted you to seek ministry at this time 1',
            "fieldValue": formObj.reasonForSession,
            "fieldType": "Txt"
        });
        object['data'].push({
            "fieldName": '2 How is your life affected by this issue 1',
            "fieldValue": formObj.affectsLifeStyle,
            "fieldType": "Txt"
        });
        object['data'].push({
            "fieldName": '3 How do you feel about yourself because of this issue 1',
            "fieldValue": formObj.feelAboutYourself,
            "fieldType": "Txt"
        });
        console.log(object);
        return object;
    };
    RtfFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rtf-form',template:/*ion-inline-start:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\RTF\src\pages\rtf-form\rtf-form.html"*/'<!--\n  Generated template for the RtfFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Center City - RTF Form </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form [formGroup]="myForm">\n    <ion-grid>\n      <ion-row>\n        <ion-item>\n          <ion-label floating color="primary">Name</ion-label>\n          <ion-input formControlName=\'name\' type="text"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="name.hasError(\'required\') && name.touched">\n          <p>name is required</p>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-item>\n          <ion-label floating color="primary">Address</ion-label>\n          <ion-input [formControl]="myForm.controls[\'address\']" type="text"></ion-input>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <ion-item>\n            <ion-label floating color="primary">City</ion-label>\n            <ion-input [formControl]="myForm.controls[\'city\']" type="text"></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col col-4>\n          <ion-item>\n            <ion-label floating color="primary">State</ion-label>\n            <ion-input [formControl]="myForm.controls[\'state\']"></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col col-2>\n          <ion-item>\n            <ion-label floating color="primary">Zip</ion-label>\n            <ion-input [formControl]="myForm.controls[\'zip\']"></ion-input>\n          </ion-item>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-3>\n          <ion-item>\n            <ion-label floating color="primary">DOB</ion-label>\n            <ion-input [formControl]="myForm.controls[\'dob\']"></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col col-3>\n          <ion-item>\n            <ion-label floating color="primary">Age</ion-label>\n            <ion-input [formControl]="myForm.controls[\'age\']"></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col col-3>\n          <ion-item>\n            <ion-label floating color="primary">Phone</ion-label>\n            <ion-input [formControl]="myForm.controls[\'phone\']"></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col col-3>\n          <ion-item>\n            <ion-label floating color="primary">Other Phone</ion-label>\n            <ion-input [formControl]="myForm.controls[\'otherphone\']"></ion-input>\n          </ion-item>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-item>\n          <ion-label floating color="primary">Email</ion-label>\n          <ion-input [formControl]="myForm.controls[\'email\']"></ion-input>\n        </ion-item>\n      </ion-row>\n\n      <ion-row radio-group formControlName="marritalStatus" class="radio_box">\n        <ion-col>\n          <ion-label color="primary" class="labelOther">Current Marrital Status:</ion-label>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Single</ion-label>\n            <ion-radio value="Marital Status  Single"></ion-radio>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Married</ion-label>\n            <ion-radio value="Married"></ion-radio>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Seperated</ion-label>\n            <ion-radio value="Seperated"></ion-radio>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Divorced</ion-label>\n            <ion-radio value="Divorced"></ion-radio>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Widowed</ion-label>\n            <ion-radio value="Widowed"></ion-radio>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Remarried</ion-label>\n            <ion-radio value="Remarried"></ion-radio>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row radio-group formControlName="livingWith" class="radio_box">\n        <ion-col>\n          <ion-label color="primary" class="labelOther">Presently living with:</ion-label>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Parents</ion-label>\n            <ion-radio value="Presently living with  Parents"></ion-radio>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Spouse</ion-label>\n            <ion-radio value="Spouse"></ion-radio>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Alone</ion-label>\n            <ion-radio value="Alone"></ion-radio>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Other</ion-label>\n            <ion-input formControlName="livingWithOther"></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary"></ion-label>\n\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary"></ion-label>\n\n          </ion-item>\n        </ion-col>\n\n\n      </ion-row>\n\n      <!-- Spouse Row -->\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label floating color="primary">Spouse Name</ion-label>\n            <ion-input formControlName=\'spouseName\' type="text"></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label floating color="primary">Age</ion-label>\n            <ion-input formControlName=\'spouseAge\' type="text"></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label floating color="primary">Date Of Marriage</ion-label>\n            <ion-input formControlName=\'dateOfMarriage\' type="text"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Rate Your Marriage  -->\n\n      <ion-row radio-group formControlName="marriageRating" class="radio_box">\n        <ion-col>\n          <ion-label color="primary" class="labelOther">Please Rate Your Marriage:</ion-label>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Dissatisfied</ion-label>\n            <ion-radio value="Please Rate Your Marriage  Dissatisfied"></ion-radio>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Average</ion-label>\n            <ion-radio value="Average"></ion-radio>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Satisfied</ion-label>\n            <ion-radio value="Satisfied"></ion-radio>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Very Satisfied</ion-label>\n            <ion-radio value="Very Satisfied"></ion-radio>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary"></ion-label>\n\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary"></ion-label>\n\n          </ion-item>\n        </ion-col>\n\n\n      </ion-row>\n\n      <ion-row radio-group formControlName="spouseSession" class="radio_box">\n        <ion-col>\n          <ion-item>\n            <ion-label class="labelOtherLeft" color="primary">If your current issue involves your spouse,\n              is he/she willing to also receive 1-2 ministry sessions?</ion-label>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Yes</ion-label>\n            <ion-radio value="Yes"></ion-radio>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">No</ion-label>\n            <ion-radio value="No"></ion-radio>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Uncertain</ion-label>\n            <ion-radio value="Uncertain"></ion-radio>\n          </ion-item>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row radio-group formControlName="spouseSaved" class="radio_box">\n        <ion-col>\n          <ion-item>\n            <ion-label class="labelOther" color="primary">Is your sponse saved?</ion-label>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Yes</ion-label>\n            <ion-radio value="Is spouse saved Yes"></ion-radio>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">No</ion-label>\n            <ion-radio value="No_2"></ion-radio>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Uncertain</ion-label>\n            <ion-radio value="Uncertain_2"></ion-radio>\n          </ion-item>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row radio-group formControlName="firstMarriage" class="radio_box">\n        <ion-col>\n          <ion-item>\n            <ion-label class="labelOther" color="primary">Is this your first marriage?</ion-label>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">Yes</ion-label>\n            <ion-radio value="First marriage Yes"></ion-radio>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">No</ion-label>\n            <ion-radio value="First marriage No"></ion-radio>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label color="primary">If not, please explain: </ion-label>\n            <ion-input formControlName=\'multiMarriageExplain\' type="text"></ion-input>\n          </ion-item>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label class="labelOtherLeft" color="primary">CHILDREN</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label class="labelOtherLeft" color="primary">If you have any children or step-children,\n              please fill in the following information. </ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <div class="childTable">\n        <ion-row class="childrenHeading">\n          <ion-col class="childColumn">\n            <ion-label class="labelOtherLeft" color="primary">Name</ion-label>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-label class="labelOtherLeft" color="primary">Age</ion-label>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-label class="labelOtherLeft" color="primary">Sex</ion-label>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-label class="labelOtherLeft" color="primary">From Which Marriage?</ion-label>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-label class="labelOtherLeft" color="primary">Self Supporting?</ion-label>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-label class="labelOtherLeft" color="primary">Married?</ion-label>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-label class="labelOtherLeft" color="primary">Still Alive?</ion-label>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-label class="labelOtherLeft" color="primary">Age at and Cause of Death</ion-label>\n          </ion-col>\n        </ion-row>\n\n        <!-- Child 1 -->\n        <ion-row>\n          <ion-col class="childColumn">\n            <ion-input formControlName=\'child1Name\' type="text"></ion-input>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-input formControlName=\'child1Age\' type="text"></ion-input>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-input formControlName=\'child1Sex\' type="text"></ion-input>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-input formControlName=\'child1WhichMarriage\' type="text"></ion-input>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-checkbox formControlName=\'child1SelfSupporting\'></ion-checkbox>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-checkbox formControlName=\'child1Married\'></ion-checkbox>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-checkbox formControlName=\'child1Alive\'></ion-checkbox>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-input formControlName=\'child1AgeCauseOfDeath\' type="text"></ion-input>\n          </ion-col>\n        </ion-row>\n\n        <!-- Child 2 -->\n        <ion-row>\n          <ion-col class="childColumn">\n            <ion-input formControlName=\'child2Name\' type="text"></ion-input>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-input formControlName=\'child2Age\' type="text"></ion-input>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-input formControlName=\'child2Sex\' type="text"></ion-input>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-input formControlName=\'child2WhichMarriage\' type="text"></ion-input>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-checkbox formControlName=\'child2SelfSupporting\'></ion-checkbox>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-checkbox formControlName=\'child2Married\'></ion-checkbox>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-checkbox formControlName=\'child2Alive\'></ion-checkbox>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-input formControlName=\'child2AgeCauseOfDeath\' type="text"></ion-input>\n          </ion-col>\n        </ion-row>\n\n        <!-- Child 3 -->\n        <ion-row>\n          <ion-col class="childColumn">\n            <ion-input formControlName=\'Child3Name\' type="text"></ion-input>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-input formControlName=\'Child3Age\' type="text"></ion-input>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-input formControlName=\'Child3Sex\' type="text"></ion-input>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-input formControlName=\'Child3WhichMarriage\' type="text"></ion-input>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-checkbox formControlName=\'Child3SelfSupporting\'></ion-checkbox>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-checkbox formControlName=\'Child3Married\'></ion-checkbox>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-checkbox formControlName=\'Child3Alive\'></ion-checkbox>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-input formControlName=\'Child3AgeCauseOfDeath\' type="text"></ion-input>\n          </ion-col>\n        </ion-row>\n\n        <!-- Child 4 -->\n        <ion-row>\n          <ion-col class="childColumn">\n            <ion-input formControlName=\'Child4Name\' type="text"></ion-input>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-input formControlName=\'Child4Age\' type="text"></ion-input>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-input formControlName=\'Child4Sex\' type="text"></ion-input>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-input formControlName=\'Child4WhichMarriage\' type="text"></ion-input>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-checkbox formControlName=\'Child4SelfSupporting\'></ion-checkbox>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-checkbox formControlName=\'Child4Married\'></ion-checkbox>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-checkbox formControlName=\'Child4Alive\'></ion-checkbox>\n          </ion-col>\n          <ion-col class="childColumn">\n            <ion-input formControlName=\'Child4AgeCauseOfDeath\' type="text"></ion-input>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label class="labelOtherLeft" color="primary">SPIRITUAL/RELIGIOUS BACKGROUND</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row radio-group formControlName="saved" class="radio_box">\n          <ion-col>\n            <ion-item>\n              <ion-label class="labelOtherLeft" color="primary">Have you made a commitment to Jesus Christ as Lord and\n                Savior?</ion-label>\n            </ion-item>\n          </ion-col>\n\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary">Yes</ion-label>\n              <ion-radio value="Have you made a commitment to Jesus Christ as Lord and Savior  Yes"></ion-radio>\n            </ion-item>\n          </ion-col>\n\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary">No</ion-label>\n              <ion-radio value="No_3"></ion-radio>\n            </ion-item>\n          </ion-col>\n\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary">When?</ion-label>\n              <ion-input formControlName=\'savedWhen\' type="text"></ion-input>\n            </ion-item>\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label class="labelOtherLeft" color="primary">Briefly tell what happened:</ion-label>\n              <ion-input formControlName=\'savedDescribe\' maxlength="69" type="text"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-input formControlName=\'savedDescribe2\' maxlength="93" type="text"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row radio-group formControlName="baptismHolySpirit" class="radio_box">\n          <ion-col>\n            <ion-item>\n              <ion-label class="labelOtherLeft" color="primary">Have you received the Baptism of the Holy Spirit?\n              </ion-label>\n            </ion-item>\n          </ion-col>\n\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary">Yes</ion-label>\n              <ion-radio value="Have you received the Baptism of the Holy Spirit  Yes"></ion-radio>\n            </ion-item>\n          </ion-col>\n\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary">No</ion-label>\n              <ion-radio value="No_4"></ion-radio>\n            </ion-item>\n          </ion-col>\n\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary">When?</ion-label>\n              <ion-input formControlName=\'baptismHolySpiritWhen\' type="text"></ion-input>\n            </ion-item>\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label class="labelOtherLeft" color="primary">Describe your present relationship with the Lord\n              </ion-label>\n            </ion-item>\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-textarea formControlName=\'currentRelationshipGod\'></ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label class="labelOtherLeft" color="primary">Please list all previous church affiliations:\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-textarea formControlName=\'churchAfflications\'></ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label class="labelOtherLeft" color="primary">DESCRIPTION OF YOUR CURRENT ISSUE</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label class="labelOtherLeft" color="primary">1. Describe the issue that prompted you to seek ministry at this time.</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-textarea formControlName=\'reasonForSession\'></ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <!-- #2 -->\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label class="labelOtherLeft" color="primary">2. How is your life affected by this issue?</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-textarea formControlName=\'affectsLifeStyle\'></ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <!-- #3 -->\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label class="labelOtherLeft" color="primary">3. How do you feel about yourself because of this issue?</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-textarea formControlName=\'feelAboutYourself\'></ion-textarea>\n          </ion-item>\n        </ion-row>\n\n         <!-- #4 -->\n         <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label class="labelOtherLeft" color="primary">4. What is the most painful or difficult thing for you about this issue?</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-textarea formControlName=\'feelAboutYourself\'></ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <!-- #5 -->\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label class="labelOtherLeft" color="primary">5. On a scale of 1-10, how painful is this issue (10 being very painful)?</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-item>\n            <ion-textarea formControlName=\'feelAboutYourself\'></ion-textarea>\n          </ion-item>\n        </ion-row>\n\n\n\n      </div>\n\n    </ion-grid>\n\n    \n    \n    \n    \n    6. How are others that you love being affected because of this issue?\n    7. How is your relationship with God being affected by this issue?\n    8. When did the issue begin? Is it an ongoing issue?\n    9. List any similarities between your current issue and painful situations you have experienced in your\nchildhood. List any similarities with painful situations in the more recent past.\n10. What will happen if this issue is not resolved?\n11. What do you see as your ‘contribution’ to the issue?\n12. What patterns or issues in your family line do you believe may be similar to your issue?\n13. What ways have you already tried to resolve this issue?\n14. Please list any word curses spoken to/about you, either currently or in the past, that could relate to your\ncurrent issue. (example: “You are such a failure,” or “You are so stupid.”)\n15. Please list any curses (or thoughts) you have spoken about yourself that relate to the issue.\n(example: “I will never be able to succeed.”)\n16. Please list any judgments or vows you have made against anyone else that might relate to your current\nissue. (example: “Men/women are untrustworthy and will always let me down.”)\n\n__________________________________________________________________________________________________________________________________\n__________________________________________________________________________________________________________________________________\n\n  </form>\n  <button block ion-button (click)="submitPg()">Submit</button>\n  <p>{{errormsg}}</p>\n\n  <!-- show if the fileUrl is not null -->\n  <ion-item *ngIf="fileUrl">\n    <div>\n      <object [data]="fileUrl" type="application/pdf">\n      </object>\n    </div>\n  </ion-item>\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\RTF\src\pages\rtf-form\rtf-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_pdfpopulator_pdfpopulator__["a" /* PdfpopulatorProvider */]])
    ], RtfFormPage);
    return RtfFormPage;
}());

//# sourceMappingURL=rtf-form.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RtfTestpdfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_ngx__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer_ngx__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener_ngx__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_document_viewer_ngx__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RtfTestpdfPage = /** @class */ (function () {
    function RtfTestpdfPage(navCtrl, navParams, platform, fileIs, ft, fileOpener, document) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.ft = ft;
        this.fileOpener = fileOpener;
        this.document = document;
        this.myfile = fileIs;
    }
    RtfTestpdfPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RtfTestpdfPage');
    };
    RtfTestpdfPage.prototype.openLocalPdf = function () {
        alert(this.platform);
        var filePath = this.myfile.applicationDirectory + 'www/assets';
        if (this.platform.is("android")) {
        }
        else {
            //if (this.platform.is("ios")) {
            var options = {
                title: 'My Document'
            };
            this.document.viewDocument(filePath + "/TestPDF.pdf", 'applicatioin/pdf', options);
        }
    };
    RtfTestpdfPage.prototype.downloadAndOpenPdf = function () { };
    RtfTestpdfPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rtf-testpdf',template:/*ion-inline-start:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\RTF\src\pages\rtf-testpdf\rtf-testpdf.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Center City - RTF Test Pdf </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button full (click)="openLocalPdf()">Open Local PDF</button>\n  <button ion-button full (click)="downloadAndOpenPdf()">Download and Open PDF</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\RTF\src\pages\rtf-testpdf\rtf-testpdf.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_ngx__["a" /* File */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer_ngx__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener_ngx__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_document_viewer_ngx__["a" /* DocumentViewer */]])
    ], RtfTestpdfPage);
    return RtfTestpdfPage;
}());

//# sourceMappingURL=rtf-testpdf.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
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
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignInPage = /** @class */ (function () {
    function SignInPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.credentialsForm = this.formBuilder.group({
            email: ['gojohill@yahoo.com'],
            password: ['Bunker99']
        });
    }
    SignInPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignInPage');
    };
    SignInPage.prototype.onSignIn = function () {
        alert("You signed on!!! Yay!!!");
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-sign-in',template:/*ion-inline-start:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\RTF\src\pages\sign-in\sign-in.html"*/'<!--\n  Generated template for the SignInPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>sign-in</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="credentialsForm">\n\n        <ion-item>\n          <ion-label floating>Email</ion-label>\n          <ion-input [formControl]="credentialsForm.controls[\'email\']"\n              type="email"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input [formControl]="credentialsForm.controls[\'password\']"\n              type="password"></ion-input>\n        </ion-item>      \n      \n        <ion-row>\n          <ion-col text-center>\n            <button ion-button block color="secondary" (click)="onSignIn()">\n              Sign in\n            </button>\n          </ion-col>\n        </ion-row>\n      \n        <ion-row>\n          <ion-col text-center>\n            <button ion-button clear color="light" (click)="onForgotPassword()">\n              Forgot your password?\n            </button>\n          </ion-col>\n        </ion-row>\n      \n      </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\RTF\src\pages\sign-in\sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RtfPdfpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pdfpopulator_pdfpopulator__ = __webpack_require__(42);
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
 * Generated class for the RtfPdfpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RtfPdfpagePage = /** @class */ (function () {
    function RtfPdfpagePage(navCtrl, navParams, PDFPopulator) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.PDFPopulator = PDFPopulator;
        this.fileUrl = null;
        //this.fileUrl = this.PDFPopulator.transform('../assets/TestPDF.pdf');
    }
    RtfPdfpagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RtfPdfpagePage');
    };
    RtfPdfpagePage.prototype.goGetPDF = function () {
        var _this = this;
        var parmUrl = ''; //set in populatePDF right Now
        this.PDFPopulator.getPDF(parmUrl).subscribe(function (response) {
            //console.log(response)
            var file = new Blob([response], { type: 'application/pdf' });
            //Build a URL from the file
            //console.log(file)
            alert(file);
            _this.fileUrl = _this.PDFPopulator.transform(URL.createObjectURL(file));
        }, function (err) {
            //console.log(err.message);
            alert(err.message);
        });
    };
    RtfPdfpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rtf-pdfpage',template:/*ion-inline-start:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\RTF\src\pages\rtf-pdfpage\rtf-pdfpage.html"*/'<!--\n  Generated template for the RtfPdfpagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Center City - RTF PDF Form </ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n\n\n<ion-content padding>\n\n    <button ion-button full (click)="goGetPDF()">Get PDF</button>\n\n  <!-- show if the fileUrl is not null -->\n  <ion-item *ngIf="fileUrl">\n    <div>\n      <object [data]="fileUrl" type="application/pdf">\n      </object>\n    </div>\n  </ion-item>\n\n</ion-content>'/*ion-inline-end:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\RTF\src\pages\rtf-pdfpage\rtf-pdfpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_pdfpopulator_pdfpopulator__["a" /* PdfpopulatorProvider */]])
    ], RtfPdfpagePage);
    return RtfPdfpagePage;
}());

//# sourceMappingURL=rtf-pdfpage.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RtfDisplayFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pdfpopulator_pdfpopulator__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(7);
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
 * Generated class for the RtfDisplayFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RtfDisplayFormPage = /** @class */ (function () {
    function RtfDisplayFormPage(Pdfpopulator, navCtrl, navParams, formBuilder) {
        this.Pdfpopulator = Pdfpopulator;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.htmllLine = "<h1>hi</h1>";
        this.myForm = formBuilder.group({
            Name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(60), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])]
        });
    }
    RtfDisplayFormPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RtfDisplayFormPage');
    };
    RtfDisplayFormPage.prototype.GetPDFDataAndForm = function () {
        var _this = this;
        var Variable = "Name";
        alert(this.urlIs);
        this.Pdfpopulator.getForm().subscribe(function (data) {
            console.log(data);
            _this.dataIs = data;
        }, function (err) {
            console.log(err.message);
            alert(err.message);
            _this.dataIs = null;
        });
        //this.myForm = this.formBuilder.group  :
    };
    RtfDisplayFormPage.prototype.ShowFormData = function () {
        var formObj = this.myForm.getRawValue();
        console.log(formObj.Name);
    };
    RtfDisplayFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rtf-display-form',template:/*ion-inline-start:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\RTF\src\pages\rtf-display-form\rtf-display-form.html"*/'<!--\n  Generated template for the RtfDisplayFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Center City - RTF Form from Database </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div ng-app="myApp" ng-controller="myCtrl">\n    <div ng-bind-html="trustedHtml"></div>\n  </div>\n\n  <div>[innerHTML]="htmllLine"</div>\n\n  <button ion-button block (click)="GetPDFDataAndForm()">\n    Get PDF Form and Data\n  </button>\n\n  <button ion-button block (click)="ShowFormData()">\n      Show Data on Form\n    </button>\n\n  <form [formGroup]="myForm">\n\n    <ion-item *ngFor="let d of dataIs">\n      <ion-grid>\n        <ion-row>\n          <div *ngIf="useRedit;else other_content">\n            <ion-col col-12>\n              {{d.kind}} - {{d.data.author}} - {{d.data.id}}\n            </ion-col>\n          </div>\n\n          <ion-col col-5>\n            {{d.fieldName}}\n          </ion-col>\n          <ion-col col-4>\n            {{d.fieldValue}}\n          </ion-col>\n          <div *ngIf="d.formFieldType===\'input\'; then thenBlock else elseBlock"></div>\n\n          <ng-template #elseBlock>Content to render when condition is false.</ng-template>\n\n          <ng-template #thenBlock>\n            <ion-col col-3>\n              <div *ngIf="d.fieldName===\'Name\'; else elseBlock"><input formControlName={{d.fieldName}} type="text" /></div>\n              <ng-template #elseBlock><input type="text"/></ng-template>\n            </ion-col>\n          </ng-template>\n          <ng-template #elseBlock>\n            <ion-col col-3>\n              {{d.fieldType}}\n            </ion-col>\n          </ng-template>\n\n        </ion-row>\n      </ion-grid>\n\n    </ion-item>\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\RTF\src\pages\rtf-display-form\rtf-display-form.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_pdfpopulator_pdfpopulator__["a" /* PdfpopulatorProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_pdfpopulator_pdfpopulator__["a" /* PdfpopulatorProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], RtfDisplayFormPage);
    return RtfDisplayFormPage;
}());

//# sourceMappingURL=rtf-display-form.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicTestFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
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
 * Generated class for the DynamicTestFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DynamicTestFormPage = /** @class */ (function () {
    function DynamicTestFormPage() {
        var _this = this;
        this.fields = [
            {
                type: 'text',
                name: 'firstName',
                label: 'First Name',
                value: '',
                required: true,
            },
            {
                type: 'text',
                name: 'lastName',
                label: 'Last Name',
                value: '',
                required: true,
            },
            {
                type: 'text',
                name: 'email',
                label: 'Email',
                value: '',
                required: true,
            },
            {
                type: 'file',
                name: 'picture',
                label: 'Picture',
                required: true,
                onUpload: this.onUpload.bind(this)
            },
            {
                type: 'dropdown',
                name: 'country',
                label: 'Country',
                value: 'in',
                required: true,
                options: [
                    { key: 'in', label: 'India' },
                    { key: 'us', label: 'USA' }
                ]
            },
            {
                type: 'radio',
                name: 'country',
                label: 'Country',
                value: 'in',
                required: true,
                options: [
                    { key: 'm', label: 'Male' },
                    { key: 'f', label: 'Female' }
                ]
            },
            {
                type: 'checkbox',
                name: 'hobby',
                label: 'Hobby',
                required: true,
                options: [
                    { key: 'f', label: 'Fishing' },
                    { key: 'c', label: 'Cooking' }
                ]
            }
        ];
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            fields: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](JSON.stringify(this.fields))
        });
        this.unsubcribe = this.form.valueChanges.subscribe(function (update) {
            console.log(update);
            _this.fields = JSON.parse(update.fields);
        });
    }
    DynamicTestFormPage.prototype.onUpload = function (e) {
        console.log(e);
    };
    DynamicTestFormPage.prototype.getFields = function () {
        return this.fields;
    };
    DynamicTestFormPage.prototype.ngDistroy = function () {
        this.unsubcribe();
    };
    DynamicTestFormPage.prototype.ShowFormData = function () {
        var formObj = this.form.getRawValue();
        console.log(formObj);
        console.log(formObj.fields);
    };
    DynamicTestFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dynamic-test-form',template:/*ion-inline-start:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\RTF\src\pages\dynamic-test-form\dynamic-test-form.html"*/'<div class="col-sm-12">\n  <div class="card">\n    <div class="card-header">Dynamic Forms</div>\n    <div class="card-body">\n      <dynamic-form-builder [fields]="getFields()"></dynamic-form-builder>\n    </div>\n  </div>\n</div>\n\n\n<div class="col-sm-12">\n  <div class="form-group" [formGroup]="form">\n    <label>JSON</label>\n    <textarea formControlName="fields" class="form-control" rows="3"></textarea>\n    \n  </div>\n</div>\n\n<button ion-button block (click)="ShowFormData()">\n  Show Data on Form\n</button>'/*ion-inline-end:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\RTF\src\pages\dynamic-test-form\dynamic-test-form.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], DynamicTestFormPage);
    return DynamicTestFormPage;
}());

//# sourceMappingURL=dynamic-test-form.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_rtf_hello_rtf_hello__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_rtf_form_rtf_form__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sign_in_sign_in__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_rtf_testpdf_rtf_testpdf__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_rtf_pdfpage_rtf_pdfpage__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_rtf_display_form_rtf_display_form__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_dynamic_test_form_dynamic_test_form__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_bookservice_bookservice__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_pdfpopulator_pdfpopulator__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_ngx__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_opener_ngx__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_file_transfer_ngx__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_document_viewer_ngx__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_dynamic_form_builder_module__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























//

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_rtf_hello_rtf_hello__["a" /* RtfHelloPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_rtf_form_rtf_form__["a" /* RtfFormPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_rtf_testpdf_rtf_testpdf__["a" /* RtfTestpdfPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_rtf_pdfpage_rtf_pdfpage__["a" /* RtfPdfpagePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_dynamic_test_form_dynamic_test_form__["a" /* DynamicTestFormPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_rtf_display_form_rtf_display_form__["a" /* RtfDisplayFormPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sign_in_sign_in__["a" /* SignInPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_23__components_dynamic_form_builder_module__["a" /* DynamicFormBuilderModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_9__pages_sign_in_sign_in__["a" /* SignInPage */], name: 'SignInPage', segment: 'sign-in' },
                        { component: __WEBPACK_IMPORTED_MODULE_8__pages_rtf_form_rtf_form__["a" /* RtfFormPage */], name: 'RtfFromPage', segment: 'rtf-form' }
                    ]
                }),
                //HttpModule, 
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_rtf_hello_rtf_hello__["a" /* RtfHelloPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_rtf_form_rtf_form__["a" /* RtfFormPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_rtf_testpdf_rtf_testpdf__["a" /* RtfTestpdfPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_rtf_pdfpage_rtf_pdfpage__["a" /* RtfPdfpagePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_dynamic_test_form_dynamic_test_form__["a" /* DynamicTestFormPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_rtf_display_form_rtf_display_form__["a" /* RtfDisplayFormPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sign_in_sign_in__["a" /* SignInPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_bookservice_bookservice__["a" /* BookserviceProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_pdfpopulator_pdfpopulator__["a" /* PdfpopulatorProvider */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_ngx__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_opener_ngx__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_file_transfer_ngx__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_document_viewer_ngx__["a" /* DocumentViewer */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_list__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_rtf_hello_rtf_hello__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_rtf_form_rtf_form__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_rtf_testpdf_rtf_testpdf__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sign_in_sign_in__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_rtf_pdfpage_rtf_pdfpage__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_rtf_display_form_rtf_display_form__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_dynamic_test_form_dynamic_test_form__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(212);
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
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_dynamic_test_form_dynamic_test_form__["a" /* DynamicTestFormPage */]; //RtfDisplayFormPage; //RtfPdfpagePage; //RtfFormPage; //RtfTestpdfPage;//RtfFormPage;
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Dynamic Form', component: __WEBPACK_IMPORTED_MODULE_10__pages_dynamic_test_form_dynamic_test_form__["a" /* DynamicTestFormPage */] },
            { title: 'RTF Form from Database', component: __WEBPACK_IMPORTED_MODULE_9__pages_rtf_display_form_rtf_display_form__["a" /* RtfDisplayFormPage */] },
            { title: 'RTF Form', component: __WEBPACK_IMPORTED_MODULE_5__pages_rtf_form_rtf_form__["a" /* RtfFormPage */] },
            { title: 'RTF Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_rtf_hello_rtf_hello__["a" /* RtfHelloPage */] },
            { title: 'RTF PDF', component: __WEBPACK_IMPORTED_MODULE_6__pages_rtf_testpdf_rtf_testpdf__["a" /* RtfTestpdfPage */] },
            { title: 'RTF PDF Page', component: __WEBPACK_IMPORTED_MODULE_8__pages_rtf_pdfpage_rtf_pdfpage__["a" /* RtfPdfpagePage */] },
            { title: 'Cover Page', component: __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */] },
            { title: 'Table of Content', component: __WEBPACK_IMPORTED_MODULE_3__pages_list_list__["a" /* ListPage */] },
            { title: 'Signin Page', component: __WEBPACK_IMPORTED_MODULE_7__pages_sign_in_sign_in__["a" /* SignInPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\RTF\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\RTF\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return book; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chapter__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page__ = __webpack_require__(279);


// class that holds the book
var book = /** @class */ (function () {
    function book() {
        // book has chapters - chapters have pages
        this.chapters = [];
    }
    book.prototype.loadPages = function (chaptersParm, chapterNbr, textIs, textOther) {
        console.log(chapterNbr);
        var tempNbr = chapterNbr;
        tempNbr++;
        chaptersParm[chapterNbr] = new __WEBPACK_IMPORTED_MODULE_0__chapter__["a" /* chapter */];
        chaptersParm[chapterNbr].nbr = tempNbr;
        chaptersParm[chapterNbr].title = "Chapter " + tempNbr + " of the Whole Story";
        var i;
        var tempPage;
        for (i = 0; i < 10; i++) {
            tempPage = new __WEBPACK_IMPORTED_MODULE_1__page__["a" /* page */];
            chaptersParm[chapterNbr].pages[i] = tempPage;
            chaptersParm[chapterNbr].pages[i].pgNbr = (i + 1);
            if (i == 0) {
                chaptersParm[chapterNbr].pages[i].pgText = "\n Chapter " + tempNbr + "- A Chapter in the Whole Story\n\n" + textIs;
            }
            else {
                if (i % 2 == 0)
                    chaptersParm[chapterNbr].pages[i].pgText = "\n" + "This is the ODD page of the story. " + textOther;
                else
                    chaptersParm[chapterNbr].pages[i].pgText = "\n" + "This is the EVEN page of the story. " + textOther;
            }
        }
    };
    return book;
}());

//# sourceMappingURL=book.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chapter; });
var chapter = /** @class */ (function () {
    function chapter() {
        this.pages = [];
    }
    return chapter;
}());

//# sourceMappingURL=chapter.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return page; });
var page = /** @class */ (function () {
    function page() {
    }
    return page;
}());

//# sourceMappingURL=page.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PGTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PGTEXTODD; });
var PGTEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus at lectus sit amet consectetur. Morbi a neque nec diam pharetra varius. Proin ac leo nec risus bibendum efficitur ac quis ipsum. Aenean faucibus bibendum turpis, ac scelerisque tortor ornare pretium. Mauris pellentesque gravida quam blandit condimentum. Quisque non sapien dui. Praesent vel massa sit amet sem hendrerit efficitur. Fusce auctor risus ut porttitor mollis. Phasellus dolor eros, ullamcorper quis lectus vel, suscipit rutrum nunc. Quisque vitae turpis egestas, semper enim eu, tristique metus. Aliquam sit amet neque quis velit sagittis euismod dictum nec purus. Praesent feugiat erat velit, in suscipit lectus maximus vitae." +
    "  Proin eu lorem tincidunt est pellentesque ullamcorper ut non eros. Proin consequat, enim ut ornare sagittis, urna nulla blandit velit, vulputate mattis lectus nisl non turpis. Cras iaculis ligula ac maximus sagittis. Cras varius imperdiet augue, id varius massa ullamcorper non. Nulla facilisi. Fusce maximus vitae nisi vel blandit. In consectetur egestas maximus. Morbi ultricies augue nec mi placerat, vel pellentesque nisl convallis. Donec viverra molestie nisi pellentesque iaculis. Nullam ut tortor neque. Sed quis mollis nisi."
    +
        "  Donec pulvinar arcu id lacinia iaculis. Sed fermentum pharetra feugiat. Donec gravida nisl ut lectus placerat, ut gravida nulla porta. Quisque tristique arcu eu metus tincidunt, vitae lobortis enim tristique. In tellus est, ullamcorper ut tempus sit amet, pellentesque sit amet felis. Etiam porta, sapien at finibus ultrices, ipsum est lobortis nulla, in tincidunt urna elit vitae tortor. Nunc interdum erat vitae orci ultrices, eu lobortis urna mollis. Cras finibus turpis in tristique tempor. Suspendisse eu commodo leo, eget posuere dui. Curabitur a tortor diam. Fusce mollis gravida ullamcorper." +
    "  Curabitur efficitur iaculis felis. Nam vitae accumsan ipsum. Maecenas a nisl feugiat, tincidunt dui et, lobortis leo. Quisque sit amet facilisis eros. Suspendisse vehicula ex sed nulla convallis tempor. Duis sit amet justo non nibh vulputate tincidunt quis ac purus. Mauris pellentesque laoreet nunc sit amet placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet tellus in lorem gravida tristique vel sit amet ex. Ut turpis quam, molestie non vehicula sed, consequat sed mauris. Praesent magna magna, sollicitudin at sollicitudin sit amet, aliquam non ante. Mauris nunc eros, gravida quis aliquet in, facilisis ullamcorper dolor. Curabitur eleifend et elit ac rhoncus. Nullam ac tincidunt nisl. Vestibulum imperdiet sed orci id consectetur. Vestibulum mauris tortor, laoreet a mi eget, volutpat laoreet purus." +
    " Maecenas nunc metus, ultrices commodo turpis sit amet, pharetra vulputate ligula. Fusce porttitor ut ex eget fermentum. Ut volutpat dolor quis ligula blandit, id tempus ex interdum. Mauris iaculis sem ut purus volutpat tincidunt. Nulla ut tellus vitae orci pulvinar aliquam. Integer vitae odio nec purus tempus mattis. Mauris vitae sapien in arcu vestibulum laoreet.";
var PGTEXTODD = "This is the even page of the story.  The Ionic Story, My Ionic Story.  This is just a story and is not a real historic event.  This is just to display on a screen.  If you want to read more you will have to write it yourself.  The thing is the story has no characters and that will always be a problem for a story.  This is going to be short because it is a short story.  Actually, it is a really short story. ";
//# sourceMappingURL=pgText.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormBuilderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dynamic_form_builder_component__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__field_builder_field_builder_component__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__atoms_textbox__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__atoms_dropdown__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__atoms_file__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__atoms_checkbox__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__atoms_radio__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// components







var DynamicFormBuilderModule = /** @class */ (function () {
    function DynamicFormBuilderModule() {
    }
    DynamicFormBuilderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* ReactiveFormsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__dynamic_form_builder_component__["a" /* DynamicFormBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__field_builder_field_builder_component__["a" /* FieldBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__atoms_textbox__["a" /* TextBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_6__atoms_dropdown__["a" /* DropDownComponent */],
                __WEBPACK_IMPORTED_MODULE_8__atoms_checkbox__["a" /* CheckBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_7__atoms_file__["a" /* FileComponent */],
                __WEBPACK_IMPORTED_MODULE_9__atoms_radio__["a" /* RadioComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__dynamic_form_builder_component__["a" /* DynamicFormBuilderComponent */]],
            providers: []
        })
    ], DynamicFormBuilderModule);
    return DynamicFormBuilderModule;
}());

//# sourceMappingURL=dynamic-form-builder.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormBuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DynamicFormBuilderComponent = /** @class */ (function () {
    function DynamicFormBuilderComponent() {
        this.onSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.fields = [];
    }
    DynamicFormBuilderComponent.prototype.ngOnInit = function () {
        var fieldsCtrls = {};
        for (var _i = 0, _a = this.fields; _i < _a.length; _i++) {
            var f = _a[_i];
            if (f.type != 'checkbox') {
                fieldsCtrls[f.name] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](f.value || '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required);
            }
            else {
                var opts = {};
                for (var _b = 0, _c = f.options; _b < _c.length; _b++) {
                    var opt = _c[_b];
                    opts[opt.key] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](opt.value);
                }
                fieldsCtrls[f.name] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */](opts);
            }
        }
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */](fieldsCtrls);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], DynamicFormBuilderComponent.prototype, "onSubmit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], DynamicFormBuilderComponent.prototype, "fields", void 0);
    DynamicFormBuilderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'dynamic-form-builder',
            template: "\n    <form (ngSubmit)=\"onSubmit.emit(this.form.value)\" [formGroup]=\"form\" class=\"form-horizontal\">\n      <div *ngFor=\"let field of fields\">\n          <field-builder [field]=\"field\" [form]=\"form\"></field-builder>\n      </div>\n      <div class=\"form-row\"></div>\n      <div class=\"form-group row\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-9\">\n          <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-primary\">Save</button>\n          <strong >Saved all values</strong>\n        </div>\n      </div>\n    </form>\n  ",
        }),
        __metadata("design:paramtypes", [])
    ], DynamicFormBuilderComponent);
    return DynamicFormBuilderComponent;
}());

//# sourceMappingURL=dynamic-form-builder.component.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldBuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FieldBuilderComponent = /** @class */ (function () {
    function FieldBuilderComponent() {
    }
    Object.defineProperty(FieldBuilderComponent.prototype, "isValid", {
        get: function () { return this.form.controls[this.field.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldBuilderComponent.prototype, "isDirty", {
        get: function () { return this.form.controls[this.field.name].dirty; },
        enumerable: true,
        configurable: true
    });
    FieldBuilderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], FieldBuilderComponent.prototype, "field", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], FieldBuilderComponent.prototype, "form", void 0);
    FieldBuilderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'field-builder',
            template: "\n  <div class=\"form-group row\" [formGroup]=\"form\">\n    <label class=\"col-md-3 form-control-label\" [attr.for]=\"field.label\">\n      {{field.label}}\n      <strong class=\"text-danger\" *ngIf=\"field.required\">*</strong>\n    </label>\n    <div class=\"col-md-9\" [ngSwitch]=\"field.type\">\n      <textbox *ngSwitchCase=\"'text'\" [field]=\"field\" [form]=\"form\"></textbox>\n      <dropdown *ngSwitchCase=\"'dropdown'\" [field]=\"field\" [form]=\"form\"></dropdown>\n      <checkbox *ngSwitchCase=\"'checkbox'\" [field]=\"field\" [form]=\"form\"></checkbox>\n      <radio *ngSwitchCase=\"'radio'\" [field]=\"field\" [form]=\"form\"></radio>\n      <file *ngSwitchCase=\"'file'\" [field]=\"field\" [form]=\"form\"></file>\n      <div class=\"alert alert-danger my-1 p-2 fadeInDown animated\" *ngIf=\"!isValid && isDirty\">{{field.label}} is required</div>\n    </div>\n  </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], FieldBuilderComponent);
    return FieldBuilderComponent;
}());

//# sourceMappingURL=field-builder.component.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// text,email,tel,textarea,password, 
var TextBoxComponent = /** @class */ (function () {
    function TextBoxComponent() {
        this.field = {};
    }
    Object.defineProperty(TextBoxComponent.prototype, "isValid", {
        get: function () { return this.form.controls[this.field.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextBoxComponent.prototype, "isDirty", {
        get: function () { return this.form.controls[this.field.name].dirty; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TextBoxComponent.prototype, "field", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], TextBoxComponent.prototype, "form", void 0);
    TextBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'textbox',
            template: "\n      <div [formGroup]=\"form\">\n        <input *ngIf=\"!field.multiline\" [attr.type]=\"field.type\" class=\"form-control\"  [id]=\"field.name\" [name]=\"field.name\" [formControlName]=\"field.name\">\n        <textarea *ngIf=\"field.multiline\" [class.is-invalid]=\"isDirty && !isValid\" [formControlName]=\"field.name\" [id]=\"field.name\"\n        rows=\"9\" class=\"form-control\" [placeholder]=\"field.placeholder\"></textarea>\n      </div> \n    "
        }),
        __metadata("design:paramtypes", [])
    ], TextBoxComponent);
    return TextBoxComponent;
}());

//# sourceMappingURL=textbox.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropDownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropDownComponent = /** @class */ (function () {
    function DropDownComponent() {
        this.field = {};
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], DropDownComponent.prototype, "field", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], DropDownComponent.prototype, "form", void 0);
    DropDownComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'dropdown',
            template: "\n      <div [formGroup]=\"form\">\n        <select class=\"form-control\" [id]=\"field.name\" [formControlName]=\"field.name\">\n          <option *ngFor=\"let opt of field.options\" [value]=\"opt.key\">{{opt.label}}</option>\n        </select>\n      </div> \n    "
        }),
        __metadata("design:paramtypes", [])
    ], DropDownComponent);
    return DropDownComponent;
}());

//# sourceMappingURL=dropdown.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// text,email,tel,textarea,password, 
var FileComponent = /** @class */ (function () {
    function FileComponent() {
        this.field = {};
    }
    Object.defineProperty(FileComponent.prototype, "isValid", {
        get: function () { return this.form.controls[this.field.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileComponent.prototype, "isDirty", {
        get: function () { return this.form.controls[this.field.name].dirty; },
        enumerable: true,
        configurable: true
    });
    FileComponent.prototype.ngOnChange = function () {
        console.log(this.field.value);
        // this.field.value.
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], FileComponent.prototype, "field", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], FileComponent.prototype, "form", void 0);
    FileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'file',
            template: "\n      <div [formGroup]=\"form\">\n        <div *ngIf=\"!field.value\" class=\"drop-container dropzone\" dropZone (hovered)=\"toggleHover($event)\"\n          (dropped)=\"field.onUpload($event)\" [class.hovering]=\"isHovering\">\n          <p class=\"m-0\">\n            Drag a file here or\n            <label class=\"upload-button\">\n              <input type=\"file\" multiple=\"\" (change)=\"field.onUpload($event.target.files)\"> browse\n            </label>\n            to upload.\n          </p>\n        </div>\n        <div *ngIf=\"field.value\">\n          <!-- <button type=\"button\" class=\"btn btn-primary\">Change</button> -->\n          <div class=\"card\">\n            <img class=\"card-img-top\" [src]=\"field.value\">\n          </div>\n        </div>\n      </div> \n    ",
            styles: [
                "\n      .drop-container {\n        background: #fff;\n        border-radius: 6px;\n        height: 150px;\n        width: 100%;\n        box-shadow: 1px 2px 20px hsla(0,0%,4%,.1);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border: 2px dashed #c0c4c7;\n      }\n      p {\n        font-size: 16px;\n        font-weight: 400;\n        color: #c0c4c7; \n      }\n      .upload-button {\n        display: inline-block;\n        border: none;\n        outline: none;\n        cursor: pointer;\n        color: #5754a3;\n      }\n      .upload-button input {\n        display: none;\n      }\n      .dropzone { \n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column; \n        border-radius: 5px;\n        background: white;\n        margin: 10px 0;\n      }\n      .dropzone.hovering {\n          border: 2px solid #f16624;\n          color: #dadada !important;\n      }\n      progress::-webkit-progress-value {\n        transition: width 0.1s ease;\n      }\n      "
            ]
        }),
        __metadata("design:paramtypes", [])
    ], FileComponent);
    return FileComponent;
}());

//# sourceMappingURL=file.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckBoxComponent = /** @class */ (function () {
    function CheckBoxComponent() {
        this.field = {};
    }
    Object.defineProperty(CheckBoxComponent.prototype, "isValid", {
        get: function () { return this.form.controls[this.field.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBoxComponent.prototype, "isDirty", {
        get: function () { return this.form.controls[this.field.name].dirty; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CheckBoxComponent.prototype, "field", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], CheckBoxComponent.prototype, "form", void 0);
    CheckBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'checkbox',
            template: "\n      <div [formGroup]=\"form\">\n        <div [formGroupName]=\"field.name\" >\n          <div *ngFor=\"let opt of field.options\" class=\"form-check form-check\">\n          <label class=\"form-check-label\">\n             <input [formControlName]=\"opt.key\" class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\" />\n             {{opt.label}}</label>\n          </div>\n        </div>\n\n      </div> \n    "
        })
    ], CheckBoxComponent);
    return CheckBoxComponent;
}());

//# sourceMappingURL=checkbox.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
        this.field = {};
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], RadioComponent.prototype, "field", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], RadioComponent.prototype, "form", void 0);
    RadioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'radio',
            template: "\n      <div [formGroup]=\"form\">\n        <div class=\"form-check\" *ngFor=\"let opt of field.options\">\n          <input class=\"form-check-input\" type=\"radio\" [value]=\"opt.key\" >\n          <label class=\"form-check-label\">\n            {{opt.label}}\n          </label>\n        </div>\n      </div> \n    "
        })
    ], RadioComponent);
    return RadioComponent;
}());

//# sourceMappingURL=radio.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfpopulatorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Http } from '@angular/http';




//import { Observable } from "rxjs/Observable";
//import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
var PdfpopulatorProvider = /** @class */ (function () {
    function PdfpopulatorProvider(http, sanitizer) {
        this.http = http;
        this.sanitizer = sanitizer;
        console.log('Hello PdfpopulatorProvider Provider');
        this.posts = null;
        this.getPDFUrl();
        this.populateUrl = this.getPopulatePDFUrl();
        // change this to false use the pdfpopulator 10.0.2.2
        this.reditUrl = 'https://www.reddit.com/r/gifs/top/.json?limit=2&sort=hot';
        this.useRedit = false;
    }
    PdfpopulatorProvider.prototype.transform = function (html) {
        //return this.sanitizer.bypassSecurityTrustResourceUrl('http://docs.google.com/gview?embedded=true&url='+html);
        return this.sanitizer.bypassSecurityTrustResourceUrl(html);
    };
    PdfpopulatorProvider.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Basic ' +
            btoa('username:password'));
        headers.append('Content-Type', 'application/json');
    };
    PdfpopulatorProvider.prototype.getReditUrl = function () {
        return this.reditUrl;
    };
    PdfpopulatorProvider.prototype.getPDFUrl = function () {
        this.urlIs = 'http://localhost:8090/pdf/getdata/05975022-70fe-41cf-9e33-20507ee53001';
        this.urlIs = 'http://localhost:8090/test/observables';
        this.urlIs = 'http://10.0.2.2:8090/pdf/getdata/05975022-70fe-41cf-9e33-20507ee53001';
        this.urlIs = 'http://10.0.2.2:8090/test/observables';
        this.urlIs = 'https://stark-lake-65295.herokuapp.com/pdf/getdata/530abff7-3b1e-4a99-93a7-2d84328a619b';
        return this.urlIs;
    };
    PdfpopulatorProvider.prototype.getTheFormURL = function () {
        return 'http://localhost:8090/pdfformdata/getmappedform/b7fc3ee6-51d9-4686-9cc1-7f5c2bb53234';
    };
    PdfpopulatorProvider.prototype.getThePDFUrl = function () {
        // localhost version
        return 'http://localhost:8090/pdf/getpdf/b7fc3ee6-51d9-4686-9cc1-7f5c2bb53234';
        //return 'http://10.0.2.2:8090/pdf/populate/b7fc3ee6-51d9-4686-9cc1-7f5c2bb53234';
        //return 'https://stark-lake-65295.herokuapp.com/pdf/populate/73b4fe10-128b-49c1-bda9-2e1365d6e7dc';
    };
    PdfpopulatorProvider.prototype.getPopulatePDFUrl = function () {
        // localhost version
        //return 'http://localhost:8090/pdf/populate/b7fc3ee6-51d9-4686-9cc1-7f5c2bb53234';
        //return 'http://10.0.2.2:8090/pdf/populate/b7fc3ee6-51d9-4686-9cc1-7f5c2bb53234';
        return 'https://stark-lake-65295.herokuapp.com/pdf/populate/73b4fe10-128b-49c1-bda9-2e1365d6e7dc';
    };
    PdfpopulatorProvider.prototype.getPDF = function (urlParm) {
        urlParm = this.getThePDFUrl();
        return this.http.post(urlParm, '', {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'basic UGFja21hbjpQYWNrbWFuMTIz')
                .append('Content-Type', 'application/json'),
            responseType: 'blob'
        });
    };
    /**
     * This funtion gets the the form and pdf data
     */
    PdfpopulatorProvider.prototype.getForm = function () {
        var xurlParm = this.getTheFormURL();
        return this.http.get(xurlParm, {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'basic UGFja21hbjpQYWNrbWFuMTIz')
        });
    };
    PdfpopulatorProvider.prototype.populatePDF = function (dataIs) {
        //alert("in populate pdf");
        var urlParm = this.getPopulatePDFUrl();
        console.log(urlParm);
        //let headers = new HttpHeaders();
        //this.createAuthorizationHeader(headers);
        var tempData = this.prepareJson();
        console.log(tempData);
        console.log(dataIs);
        return this.http.post(urlParm, dataIs, {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'basic UGFja21hbjpQYWNrbWFuMTIz')
                .append('Content-Type', 'application/json'),
            responseType: 'blob'
        });
    };
    PdfpopulatorProvider.prototype.getData = function (urlParm, useReditParm) {
        this.posts = null;
        if (useReditParm) {
            return this.http.get(this.reditUrl);
            //  .subscribe((data: any) => {
            //   return data.data.children;
            // }, err => {
            //   alert(err.message);
            //   console.log(err.message);
            //   return null;
            // });
        }
        else {
            //return this.http.get('http://localhost:8090/pdf/getdata/05975022-70fe-41cf-9e33-20507ee53001',
            return this.http.get(urlParm, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'basic UGFja21hbjpQYWNrbWFuMTIz')
            });
            // .subscribe(data => {
            //   return data;
            // }, err => {
            //   alert(err.message);
            //   console.log(err.message);
            //   return null;
            // })
        }
        //.subscribe(data => {
        //this.posts = data;
        //console.log(this.posts);
        //return this.posts;
        //});
        //console.log(this.posts)
        //return this.posts;
    };
    PdfpopulatorProvider.prototype.prepareJson = function () {
        var object = {};
        var object1 = {
            "emailGroup": [
                {
                    "toEmail": [
                        "gojohill@yahoo.com"
                    ],
                    "fromEmail": "cccInnerHealing@gmail.com",
                    "ccEmail": [
                        "gojohill@outlook.com"
                    ],
                    "bccEmail": [
                        "gojohill@gmail.com"
                    ]
                }
            ],
            "sendEmail": true,
            "subject": "Testing PDF from PDFMaker2",
            "content": "Attached is the PDF that needs to be reviewed"
        };
        var object2 = {};
        var object3 = {};
        object['hdr'] = object1;
        object['data'] =
            [
                {
                    "fieldName": "Name",
                    "fieldValue": "John",
                    "fieldType": "Tx"
                },
                {
                    "fieldName": "Address",
                    "fieldValue": "6051 Poage Valley Rd",
                    "fieldType": "Tx"
                },
                {
                    "fieldName": "CityStateZip",
                    "fieldValue": "Roanoke, VA 24018",
                    "fieldType": "Tx"
                },
                {
                    "fieldName": "DOB",
                    "fieldValue": "02/22/1963",
                    "fieldType": "Tx"
                },
                {
                    "fieldName": "Age",
                    "fieldValue": "55",
                    "fieldType": "Tx"
                },
                {
                    "fieldName": "Home Phone",
                    "fieldValue": "5402067134",
                    "fieldType": "Tx"
                },
                {
                    "fieldName": "Cell",
                    "fieldValue": "",
                    "fieldType": "Tx"
                },
                {
                    "fieldName": "Email",
                    "fieldValue": "gojohill@yahoo.com",
                    "fieldType": "Tx"
                }
            ];
        console.log(object);
        return object;
    };
    PdfpopulatorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], PdfpopulatorProvider);
    return PdfpopulatorProvider;
}());

//# sourceMappingURL=pdfpopulator.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pgText__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';

// import class that represents the book


/*
  Generated class for the BookserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BookserviceProvider = /** @class */ (function () {
    //constructor(public http: HttpClient) {
    //}
    function BookserviceProvider() {
        this.myBook = new __WEBPACK_IMPORTED_MODULE_1__book__["a" /* book */];
        this.myBook.title = 'MyIonic Book';
        this.myBook.subTitle = 'The Whole Story';
        this.myBook.author = 'Some Author';
        this.myBook.loadPages(this.myBook.chapters, 0, __WEBPACK_IMPORTED_MODULE_2__pgText__["a" /* PGTEXT */], __WEBPACK_IMPORTED_MODULE_2__pgText__["b" /* PGTEXTODD */]);
        this.myBook.loadPages(this.myBook.chapters, 1, __WEBPACK_IMPORTED_MODULE_2__pgText__["a" /* PGTEXT */], __WEBPACK_IMPORTED_MODULE_2__pgText__["b" /* PGTEXTODD */]);
        this.myBook.loadPages(this.myBook.chapters, 2, __WEBPACK_IMPORTED_MODULE_2__pgText__["a" /* PGTEXT */], __WEBPACK_IMPORTED_MODULE_2__pgText__["b" /* PGTEXTODD */]);
        this.myBook.loadPages(this.myBook.chapters, 3, __WEBPACK_IMPORTED_MODULE_2__pgText__["a" /* PGTEXT */], __WEBPACK_IMPORTED_MODULE_2__pgText__["b" /* PGTEXTODD */]);
        this.myBook.loadPages(this.myBook.chapters, 4, __WEBPACK_IMPORTED_MODULE_2__pgText__["a" /* PGTEXT */], __WEBPACK_IMPORTED_MODULE_2__pgText__["b" /* PGTEXTODD */]);
        this.myBook.loadPages(this.myBook.chapters, 5, __WEBPACK_IMPORTED_MODULE_2__pgText__["a" /* PGTEXT */], __WEBPACK_IMPORTED_MODULE_2__pgText__["b" /* PGTEXTODD */]);
        this.myBook.loadPages(this.myBook.chapters, 6, __WEBPACK_IMPORTED_MODULE_2__pgText__["a" /* PGTEXT */], __WEBPACK_IMPORTED_MODULE_2__pgText__["b" /* PGTEXTODD */]);
        this.myBook.loadPages(this.myBook.chapters, 7, __WEBPACK_IMPORTED_MODULE_2__pgText__["a" /* PGTEXT */], __WEBPACK_IMPORTED_MODULE_2__pgText__["b" /* PGTEXTODD */]);
        this.myBook.loadPages(this.myBook.chapters, 8, __WEBPACK_IMPORTED_MODULE_2__pgText__["a" /* PGTEXT */], __WEBPACK_IMPORTED_MODULE_2__pgText__["b" /* PGTEXTODD */]);
        //this.myBook.loadPages(this.myBook.chapters,9,PGTEXT, PGTEXTODD);
        console.log("length of chapters");
        console.log(this.myBook.chapters.length);
    }
    BookserviceProvider.prototype.getBook = function () {
        return this.myBook;
    };
    BookserviceProvider.prototype.getAllChapters = function () {
        return this.myBook.chapters;
    };
    BookserviceProvider.prototype.getChapter = function (chapterNbr) {
        return this.myBook.chapters[this.filterChapterNbr(chapterNbr)];
    };
    BookserviceProvider.prototype.getNbrOfChapters = function () {
        return this.myBook.chapters.length;
    };
    BookserviceProvider.prototype.getPagesInChapter = function (chapterNbr) {
        return this.myBook.chapters[this.filterChapterNbr(chapterNbr)].pages.length;
    };
    BookserviceProvider.prototype.getPage = function (chapterNbr, pgNbr) {
        return this.myBook.chapters[this.filterChapterNbr(chapterNbr)].pages[pgNbr];
    };
    BookserviceProvider.prototype.filterChapterNbr = function (nbrIn) {
        if (nbrIn > this.getNbrOfChapters())
            nbrIn = this.getNbrOfChapters();
        if (nbrIn > 0)
            nbrIn--;
        else
            nbrIn = 0;
        return nbrIn;
    };
    BookserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BookserviceProvider);
    return BookserviceProvider;
}());

//# sourceMappingURL=bookservice.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map