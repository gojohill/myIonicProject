webpackJsonp([0],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bookservice_bookservice__ = __webpack_require__(192);
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

var ItemDetailsPage = /** @class */ (function () {
    function ItemDetailsPage(bookService, navCtrl, navParams) {
        this.bookService = bookService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pgNbr = 0;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.selectedChapter = bookService.getChapter(this.selectedItem.chapter);
        console.log(this.selectedChapter.title);
        this.selectedPage = bookService.getPage(this.selectedItem.chapter, this.pgNbr);
    }
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
    };
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
    };
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-details',template:/*ion-inline-start:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\MyIonicProject\src\pages\item-details\item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Chapter {{selectedItem.chapter}} <div id="titleDiv">Page {{selectedPage.pgNbr}}</div></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedChapter.title}}\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n  </h3>\n\n  <ion-content padding>\n\n    <button ion-button block (click)="prevPg()">\n      &lt;&lt;&nbsp;&nbsp;prev page\n    </button>\n\n    <div id=\'pageTxt\'>\n      {{selectedPage.pgText}}\n    </div>\n\n    <div id="pgNbr">\n      - {{selectedPage.pgNbr}} -\n    </div>\n    <br>\n    <button ion-button block (click)="nextPg()">\n      next page&nbsp;&nbsp;&gt;&gt;\n    </button>\n\n\n\n\n  </ion-content>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\MyIonicProject\src\pages\item-details\item-details.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_bookservice_bookservice__["a" /* BookserviceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_bookservice_bookservice__["a" /* BookserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pgText__ = __webpack_require__(193);
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
        this.myBook.loadPages(this.myBook.chapters, 9, __WEBPACK_IMPORTED_MODULE_2__pgText__["a" /* PGTEXT */], __WEBPACK_IMPORTED_MODULE_2__pgText__["b" /* PGTEXTODD */]);
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

/***/ }),

/***/ 193:
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

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_bookservice_bookservice__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_bookservice_bookservice__["a" /* BookserviceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_list__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(197);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Cover Page', component: __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */] },
            { title: 'Table of Content', component: __WEBPACK_IMPORTED_MODULE_3__pages_list_list__["a" /* ListPage */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\MyIonicProject\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\MyIonicProject\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return book; });
/* unused harmony export PAGES */
/* unused harmony export CHAPTERS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chapter__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pgText__ = __webpack_require__(193);



var book = /** @class */ (function () {
    function book() {
        this.chapters = [];
    }
    book.prototype.loadPages = function (chaptersParm, chapterNbr, textIs, textOdd) {
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
                chaptersParm[chapterNbr].pages[i].pgText = "\n" + textIs;
            }
            else {
                if (i % 2 == 0)
                    chaptersParm[chapterNbr].pages[i].pgText = "\n" + "This is the ODD page of the story. " + textOdd;
                else
                    chaptersParm[chapterNbr].pages[i].pgText = "\n" + "This is the EVEN page of the story. " + textOdd;
            }
        }
    };
    return book;
}());

var PAGES = [
    { pgNbr: 1, pgText: __WEBPACK_IMPORTED_MODULE_2__pgText__["a" /* PGTEXT */] },
    { pgNbr: 2, pgText: __WEBPACK_IMPORTED_MODULE_2__pgText__["a" /* PGTEXT */] },
    { pgNbr: 3, pgText: __WEBPACK_IMPORTED_MODULE_2__pgText__["a" /* PGTEXT */] },
    { pgNbr: 4, pgText: __WEBPACK_IMPORTED_MODULE_2__pgText__["a" /* PGTEXT */] },
    { pgNbr: 5, pgText: __WEBPACK_IMPORTED_MODULE_2__pgText__["a" /* PGTEXT */] },
    { pgNbr: 6, pgText: __WEBPACK_IMPORTED_MODULE_2__pgText__["a" /* PGTEXT */] },
    { pgNbr: 7, pgText: __WEBPACK_IMPORTED_MODULE_2__pgText__["a" /* PGTEXT */] },
    { pgNbr: 8, pgText: __WEBPACK_IMPORTED_MODULE_2__pgText__["a" /* PGTEXT */] },
    { pgNbr: 9, pgText: __WEBPACK_IMPORTED_MODULE_2__pgText__["a" /* PGTEXT */] },
    { pgNbr: 10, pgText: "THE end..... Lived Happily Ever After" }
];
var CHAPTERS = [
    { nbr: 1, title: "Chapter 1 of the Whole Story", pages: PAGES },
    { nbr: 2, title: "Chapter 2 of the Whole Story", pages: PAGES },
    { nbr: 3, title: "Chapter 3 of the Whole Story", pages: PAGES },
    { nbr: 4, title: "Chapter 4 of the Whole Story", pages: PAGES },
    { nbr: 5, title: "Chapter 5 of the Whole Story", pages: PAGES },
    { nbr: 6, title: "Chapter 6 of the Whole Story", pages: PAGES },
    { nbr: 7, title: "Chapter 7 of the Whole Story", pages: PAGES },
    { nbr: 8, title: "Chapter 8 of the Whole Story", pages: PAGES },
    { nbr: 9, title: "Chapter 9 of the Whole Story", pages: PAGES },
    { nbr: 10, title: "Chapter 10 of the Whole Story", pages: PAGES }
];
// export const MyBOOK: book = {
//   title: 'MyIonic Book',
//   subTitle: 'The Whole Story',
//   author: 'Some Author',
//   chapters: CHAPTERS
// }
//# sourceMappingURL=book.js.map

/***/ }),

/***/ 266:
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

/***/ 267:
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

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HelloIonicPage = /** @class */ (function () {
    function HelloIonicPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.icons = ['book'];
        this.items = [];
        this.items.push({
            title: 'Cover Page',
            note: 'Cover Page My Ionic Book',
            icon: this.icons[0]
        });
        this.items.push({
            title: 'Table of Contents',
            note: 'Table of Contents',
            icon: this.icons[0]
        });
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Chapter ' + i,
                note: 'This is Chapter #' + i,
                icon: this.icons[0]
            });
        }
    }
    HelloIonicPage.prototype.gotoTOC = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */], { item: this.items });
    };
    HelloIonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\MyIonicProject\src\pages\hello-ionic\hello-ionic.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Ionic Book</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding text-center>\n\n\n  <h1>My Iconic Book - The Whole Story</h1>\n  <h3>Cover Page</h3>\n  <br>\n  <div id="coverImg">\n    <img src="../../assets/imgs/coverpg.png" (click)="gotoTOC()">\n  </div>\n  <br>\n  <h4>by Some Author</h4>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\MyIonicProject\src\pages\hello-ionic\hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HelloIonicPage);
    return HelloIonicPage;
}());

//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hello_ionic_hello_ionic__ = __webpack_require__(98);
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
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = ['book'];
        this.items = [];
        this.items.push({
            title: 'Cover Page',
            note: 'Cover Page My Ionic Book',
            icon: this.icons[0],
            chapter: 0
        });
        // this.items.push({
        //   title: 'Table of Contents',
        //     note: 'Table of Contents',
        //     icon: this.icons[0]
        // })
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Chapter ' + i,
                note: 'This is Chapter #' + i,
                icon: this.icons[0],
                chapter: i
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        if (item.title === 'Cover Page') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__hello_ionic_hello_ionic__["a" /* HelloIonicPage */], { item: item });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], {
                item: item
            });
        }
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\MyIonicProject\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Table of Contents</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\MyIonicProject\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map