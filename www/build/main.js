webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
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
    HelloIonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\MyIonicProject\src\pages\hello-ionic\hello-ionic.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Ionic Book</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding text-center>\n\n\n  <h1>My Iconic Book - The Whole Story</h1>\n  <h3>Cover Page</h3>\n  <br>  \n  <ion-img width="25%" height="50%" src="../../assets/imgs/coverpg.png" ng-click="nextpage();"></ion-img>\n  <br>\n  <h4>by Some Author</h4>\n\n\n  \n</ion-content>'/*ion-inline-end:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\MyIonicProject\src\pages\hello-ionic\hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HelloIonicPage);
    return HelloIonicPage;
}());

//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hello_ionic_hello_ionic__ = __webpack_require__(189);
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], ListPage);
    return ListPage;
    var _a, _b;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPage = /** @class */ (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-details',template:/*ion-inline-start:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\MyIonicProject\src\pages\item-details\item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Iconic Book</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n\n  <button (click)="goBack()">\n    There\'s no place like home\n  </button>\n\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedItem.title}} {{selectedItem.chapter}}\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n  </h3>\n\n  <h4 text-center *ngIf="selectedItem">\n    Lorem Ipsum - {{selectedItem.title}}\n  </h4>\n\n  <ion-content padding class="action-sheets-basic-page">\n    <button ion-button block (click)="openMenu()">\n      Show Action Sheet\n    </button>\n    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."\n    "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."\n\n\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac ligula ultrices, sagittis ante nec, sodales\n    tellus. Aenean mollis est eu neque lacinia, at accumsan quam rhoncus. Suspendisse potenti. In maximus, mi nec\n    venenatis tincidunt, dui metus fringilla nunc, id tristique purus ex sit amet nulla. Suspendisse potenti. Nulla\n    porttitor neque nec faucibus hendrerit. Mauris quis nulla diam. Donec lacinia augue lorem, id lacinia nibh accumsan\n    id. Fusce cursus aliquam ante in eleifend.\n\n    Nam ullamcorper egestas nibh quis finibus. Maecenas vitae eros ut nibh egestas aliquet ultrices sit amet mauris.\n    Nulla non dictum mauris. Sed in elementum ipsum, ut tempus metus. Mauris vel tellus convallis, dapibus velit\n    suscipit, maximus nisi. Nunc ut purus eget ex fringilla tincidunt ac at purus. Curabitur tempor, ipsum a hendrerit\n    venenatis, ante elit porttitor est, dictum vehicula libero nisl ac odio. Donec sed nulla ut turpis consequat\n    interdum ut in velit. Sed aliquet sodales lectus eget auctor. Proin dapibus urna sed diam varius, bibendum volutpat\n    eros sagittis. Fusce interdum vel neque sit amet posuere. Ut lobortis erat ut commodo laoreet. Integer dignissim\n    ullamcorper elit, et rutrum ipsum tempus eu. Cras cursus ac urna ut congue.\n\n    Etiam dictum, sem at malesuada consectetur, urna neque pretium ante, vitae ornare ex velit a augue. Mauris nibh\n    quam, posuere non euismod eget, elementum in lectus. Quisque vel dui eu nisl imperdiet luctus. Fusce nisl dolor,\n    aliquam vel arcu non, dignissim convallis nibh. Quisque at vehicula dui, non lacinia purus. Quisque odio ex,\n    porttitor non metus ornare, molestie auctor urna. Sed ac pulvinar nunc, a consequat nunc. Proin a velit a lectus\n    lobortis rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean\n    bibendum lectus et elit mattis pretium. Mauris metus tortor, dictum sit amet laoreet hendrerit, vulputate eget\n    lacus. Etiam elementum sem ac nunc scelerisque, sed viverra nisl suscipit.\n\n    Ut gravida lectus mauris, non porttitor ligula placerat dictum. Morbi sed vehicula velit. Orci varius natoque\n    penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus pretium venenatis mi, et fringilla odio\n    suscipit non. Maecenas eu mauris vestibulum, tincidunt diam id, lacinia risus. Praesent ultricies sem rhoncus,\n    ullamcorper purus ut, pharetra velit. Phasellus lacinia tortor sed ipsum porttitor, a commodo ipsum accumsan.\n\n    Fusce varius purus vel eros finibus volutpat. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur\n    adipiscing elit. Suspendisse vel euismod libero. Fusce lobortis mollis fringilla. Lorem ipsum dolor sit amet,\n    consectetur adipiscing elit. Sed varius velit lorem, sit amet ultrices lorem imperdiet ac. Etiam pretium enim sed\n    dui sodales ultrices. Phasellus tincidunt orci et leo vestibulum maximus. Integer odio tellus, egestas a elit eu,\n    congue pulvinar nunc. Donec semper justo metus, eget aliquam eros iaculis sed. Mauris augue libero, tempor at risus\n    in, accumsan rutrum arcu. Sed mattis ac est at blandit. Phasellus velit est, pharetra at justo vitae, tincidunt\n    fringilla arcu.\n\n    Donec blandit urna ac diam malesuada, eget laoreet ipsum sodales. Aenean ut ipsum tristique, commodo urna suscipit,\n    malesuada massa. Ut convallis velit ante, quis dignissim tortor accumsan ut. Sed dignissim erat commodo nisl\n    commodo, sit amet pharetra nunc interdum. Aenean dictum orci ac ipsum bibendum, non imperdiet sem vulputate. Donec\n    et dui maximus massa feugiat viverra in sed massa. Sed vestibulum lacus vitae fringilla ullamcorper. Nam mollis in\n    enim et convallis. Nullam sit amet viverra velit, eget posuere elit. Nunc vitae dui vestibulum, finibus justo\n    vitae, faucibus justo. Suspendisse imperdiet urna eget aliquet dictum.\n\n    Nam euismod posuere augue quis molestie. Donec eget est eget dolor hendrerit luctus et blandit ante. Maecenas ut ex\n    quis dolor ultricies dignissim vel accumsan arcu. Nam id ultrices urna. Suspendisse a enim placerat, sollicitudin\n    libero ut, interdum nisi. Vivamus enim odio, hendrerit at libero eget, ultricies auctor quam. Ut aliquam tincidunt\n    odio at vestibulum. Sed turpis lectus, rutrum sed diam non, pharetra lacinia erat. Phasellus eros ipsum, eleifend\n    sit amet neque sit amet, vulputate sagittis ex. Sed finibus erat a mattis rhoncus. Maecenas auctor a nulla eu\n    aliquam. Sed lobortis ornare massa, suscipit dictum libero. Integer sed felis in risus porta mollis. Lorem ipsum\n    dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis ligula ut leo ullamcorper aliquet. Praesent in\n    mauris ligula.\n\n    Sed at quam urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus tristique nisl eu\n    lobortis. Nam fringilla tempus est et faucibus. Praesent finibus felis quis dolor tincidunt, sed sollicitudin nunc\n    mollis. Aenean consequat, nibh sit amet convallis tincidunt, arcu nisl rutrum purus, sit amet consectetur ligula\n    erat sit amet tellus. Nunc gravida cursus ante a efficitur. Phasellus eu augue et massa faucibus eleifend a rhoncus\n    tellus.\n\n    Donec pretium nisl quam, nec faucibus nisi tempus vel. Morbi ultricies ornare vulputate. Praesent semper\n    scelerisque accumsan. Nullam hendrerit volutpat blandit. Mauris eu dui neque. Etiam et lobortis ipsum. Quisque ac\n    pulvinar turpis. Nulla mollis leo ex, pellentesque consectetur urna varius at. Suspendisse augue ipsum, blandit id\n    orci rutrum, fermentum finibus dui. Nam tincidunt velit sed arcu gravida, et suscipit lacus semper. Pellentesque\n    dapibus tincidunt interdum. Aenean quis lorem enim. Aliquam malesuada tellus eu urna elementum, et interdum augue\n    fringilla. Nam aliquet vel felis et vehicula.\n\n    Vivamus urna ex, commodo in porttitor aliquam, suscipit nec purus. Donec vitae malesuada dui. Aenean placerat\n    eleifend massa, non fringilla neque condimentum eu. Cras nec lacus tempor, eleifend lectus eget, auctor dui. Donec\n    tempus, lorem vitae molestie condimentum, nisi risus ornare magna, non sodales arcu urna vitae est. Morbi maximus,\n    nunc ac pellentesque vulputate, sem dolor varius arcu, auctor ornare lacus eros ut justo. Pellentesque habitant\n    morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus a condimentum elit. Vivamus lorem\n    purus, facilisis ac feugiat gravida, vulputate eget felis. Phasellus lobortis laoreet neque sed tincidunt.\n\n    Aliquam bibendum suscipit quam, sed scelerisque lorem malesuada sit amet. Nunc ut blandit tellus. Suspendisse\n    potenti. Morbi cursus dapibus urna quis porta. Fusce hendrerit enim et nunc vestibulum suscipit. Aenean sit amet\n    interdum enim, ac auctor nibh. Donec iaculis tempus posuere. Donec et luctus odio, vitae consequat libero.\n\n    Sed auctor turpis lectus, nec mattis sapien rutrum sit amet. Pellentesque luctus ante turpis, at placerat est\n    bibendum non. Sed fermentum nulla nisl, sit amet tristique leo lobortis et. Duis pharetra pellentesque ligula eget\n    semper. Duis dictum sed ipsum at venenatis. Curabitur feugiat leo sem, sed luctus leo interdum quis. Integer a\n    varius purus, eu placerat neque. Phasellus luctus justo eros, sed euismod urna congue at. Aenean scelerisque lorem\n    sit amet metus interdum, eget fermentum lorem porttitor. In non eros metus. Cras lacinia enim nec mi tincidunt\n    laoreet. Aenean rutrum luctus quam, et aliquam dolor porta vitae. Nulla non imperdiet lectus. Proin eu velit\n    faucibus, hendrerit ipsum eu, semper leo. Sed mauris neque, lobortis a est sit amet, consectetur finibus justo.\n    Maecenas eget tellus ut lacus mattis porttitor eget sit amet odio.\n\n    Quisque et maximus quam. Praesent finibus luctus justo, sit amet vehicula velit commodo in. Aliquam erat volutpat.\n    Curabitur pharetra libero eu mollis sagittis. Morbi urna felis, bibendum dapibus est in, mollis placerat orci.\n    Maecenas lacinia lobortis finibus. Sed accumsan neque libero, lobortis tristique metus porta nec. Praesent vel\n    commodo quam. Integer quis risus justo. Integer luctus eros sed orci interdum fermentum. Integer vehicula semper\n    sodales. Fusce eu rutrum erat, non lacinia neque. Pellentesque tristique interdum dolor, vulputate accumsan sapien\n    pretium ut. Proin id egestas neque. Praesent laoreet non velit hendrerit commodo. Vivamus ut nisl sem.\n\n    Nullam euismod risus ex, et condimentum purus sollicitudin sollicitudin. Donec nibh turpis, commodo eget rutrum ac,\n    feugiat eu magna. Nunc pulvinar nisi eget velit elementum rhoncus. Curabitur iaculis leo lorem, et varius magna\n    accumsan id. Sed mattis at magna sit amet tempus. Pellentesque laoreet, erat quis dignissim feugiat, orci augue\n    finibus lorem, non sodales est quam eu nisl. Nullam ornare risus nibh, ac porta erat iaculis bibendum. Donec\n    scelerisque purus elit, id suscipit turpis mattis in. In vitae pharetra mi.\n\n    Praesent lobortis massa id enim aliquet sodales. Aliquam id pellentesque lacus. Nam ultricies porta nisi quis\n    maximus. In at pellentesque sem, nec porta nunc. Quisque viverra erat non velit sagittis, quis hendrerit diam\n    finibus. Donec aliquam ac justo et posuere. Quisque molestie mauris sit amet facilisis sollicitudin. Ut eleifend\n    aliquet rutrum. In ante nisi, porta ut neque sodales, tincidunt condimentum risus. Pellentesque feugiat mattis dui.\n    Curabitur tempor quis est sed suscipit. In mollis quam id purus ornare, a bibendum tellus scelerisque. Cras vitae\n    nulla eu magna pellentesque condimentum. Nunc consequat diam pretium, porta tellus eu, ultrices mauris. Aliquam ut\n    tempor enim, vulputate laoreet justo. Donec condimentum, felis quis dignissim vulputate, massa mauris congue erat,\n    quis tempus diam sapien id risus.\n\n    In in tempor lectus, vitae sollicitudin neque. Proin molestie vel magna a elementum. Nullam a arcu id mi tristique\n    vulputate. Nullam convallis vitae turpis a congue. Aenean quis mauris dapibus, tincidunt magna eget, consequat sem.\n    Aliquam ornare vitae nulla nec elementum. Pellentesque posuere congue tortor, et blandit diam accumsan iaculis.\n    Donec ultrices sollicitudin tortor et ornare. Etiam non elit sit amet purus cursus mollis vel eget velit. Nam\n    molestie, orci sit amet facilisis condimentum, turpis tellus rutrum dui, eget ultrices risus neque sed augue.\n\n    Mauris enim elit, gravida at nibh quis, cursus pretium augue. Morbi a massa commodo, semper ante vitae, aliquam ex.\n    Nam posuere dui libero, non dapibus ligula cursus vel. Fusce ligula dolor, ultricies ac lobortis a, blandit quis\n    nisl. Donec in nisi nec elit pulvinar sollicitudin non id justo. Praesent dignissim posuere turpis ut volutpat.\n    Curabitur vestibulum metus eget magna ornare, vitae finibus enim pellentesque.\n\n    Aenean dapibus lacus eget mauris bibendum, nec elementum leo interdum. Curabitur id lacus congue, cursus nisi et,\n    lobortis metus. Donec semper efficitur pellentesque. Nulla ut aliquet sem. Nam elementum turpis libero, eu posuere\n    sapien feugiat faucibus. Phasellus consequat facilisis tincidunt. Nunc nisl felis, commodo at ullamcorper ac,\n    dictum ut purus.\n\n    Nunc eu ligula sapien. Sed venenatis condimentum quam, eget vestibulum mauris egestas ut. Curabitur sit amet felis\n    ligula. Phasellus cursus massa eget ipsum eleifend, eu euismod sem commodo. Duis porttitor, dolor nec accumsan\n    pellentesque, urna felis feugiat dolor, vel vehicula diam lacus ut leo. Pellentesque euismod ornare mauris eget\n    auctor. Nulla sollicitudin augue nec interdum aliquam. Donec vel fringilla libero. Proin a enim luctus, cursus urna\n    sed, lobortis ante. Proin malesuada rutrum egestas. In cursus tellus eget felis maximus, vitae porta ipsum maximus.\n    Nunc eget dignissim sem. Donec turpis mi, posuere at leo id, ullamcorper faucibus velit. Proin laoreet id tortor\n    eget hendrerit. Quisque efficitur justo non lorem iaculis pellentesque. Nullam vitae neque ac lacus egestas\n    ultrices.\n\n    Mauris non elementum nisl. Phasellus quis dolor cursus, malesuada risus a, malesuada erat. Nunc congue nulla ut\n    aliquam aliquam. Sed tincidunt elit a magna luctus lobortis. Curabitur lacinia dui id leo laoreet, vitae volutpat\n    magna aliquet. Aliquam ac lacinia dolor, vel gravida quam. Maecenas libero lectus, ullamcorper eget congue eu,\n    egestas sagittis massa. Donec euismod arcu sit amet massa porta dapibus. Ut nulla nisl, commodo ut enim id,\n    tincidunt suscipit odio.\n\n    Generated 20 paragraphs, 1799 words, 12106 bytes of Lorem Ipsum\n\n  </ion-content>\n\n  <div>\n    Lorem Ipsum\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\MyIonicProject\src\pages\item-details\item-details.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], ItemDetailsPage);
    return ItemDetailsPage;
    var _a, _b;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(195);
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
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_list__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(195);
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
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\MyIonicProject\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\gojoh\OneDrive\1_BethelTech\MyIonicApps\MyIonicProject\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _e || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map