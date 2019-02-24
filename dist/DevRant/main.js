(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Service/devrant_api.ts":
/*!****************************************!*\
  !*** ./src/app/Service/devrant_api.ts ***!
  \****************************************/
/*! exports provided: DevRantApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevRantApiService", function() { return DevRantApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Constants */ "./src/app/common/Constants.ts");
/* harmony import */ var _common_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/local-storage */ "./src/app/common/local-storage.ts");





var DevRantApiService = /** @class */ (function () {
    function DevRantApiService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.x_token = "";
        if (storage.getStorageData("login") != null) {
            var login = storage.getStorageData("login");
            if (login) {
                this.x_token = storage.getStorageData("token");
            }
        }
    }
    DevRantApiService.prototype.refresh = function () {
        if (this.storage.getStorageData("login") != null) {
            var login = this.storage.getStorageData("login");
            if (login) {
                this.x_token = this.storage.getStorageData("token");
            }
        }
    };
    DevRantApiService.prototype.userActivate = function (username, password) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json"
        });
        var options = { headers: headers };
        return this.http.post(_common_Constants__WEBPACK_IMPORTED_MODULE_3__["USER_ACTIVATE"], { username: username, password: password }, options);
    };
    DevRantApiService.prototype.userDeactivate = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            "X-Token": this.x_token
        });
        var options = { headers: headers };
        return this.http.post(_common_Constants__WEBPACK_IMPORTED_MODULE_3__["USER_DEACTIVATE"], {}, options);
    };
    DevRantApiService.prototype.getAllPost = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            "X-Token": this.x_token
        });
        var options = { headers: headers };
        return this.http.get(_common_Constants__WEBPACK_IMPORTED_MODULE_3__["GET_POST_LIST"], options);
    };
    DevRantApiService.prototype.upVote = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            "X-Token": this.x_token
        });
        var options = { headers: headers };
        return this.http.post(_common_Constants__WEBPACK_IMPORTED_MODULE_3__["VOTE"], { postId: id, direction: "up" }, options);
    };
    DevRantApiService.prototype.downVote = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            "X-Token": this.x_token
        });
        var options = { headers: headers };
        return this.http.post(_common_Constants__WEBPACK_IMPORTED_MODULE_3__["VOTE"], { postId: id, direction: "down" }, options);
    };
    DevRantApiService.prototype.resetVote = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            "X-Token": this.x_token
        });
        var options = { headers: headers };
        return this.http.post(_common_Constants__WEBPACK_IMPORTED_MODULE_3__["VOTE"], { postId: id, direction: "reset" }, options);
    };
    DevRantApiService.prototype.addNewPost = function (content) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            "X-Token": this.x_token
        });
        var options = { headers: headers };
        return this.http.post(_common_Constants__WEBPACK_IMPORTED_MODULE_3__["ADD_NEW_POST"], { content: content }, options);
    };
    DevRantApiService.prototype.getPostDeatils = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            "X-Token": this.x_token
        });
        var options = { headers: headers };
        return this.http.get(_common_Constants__WEBPACK_IMPORTED_MODULE_3__["POST_DETAILS"] + id, options);
    };
    DevRantApiService.prototype.deletePost = function (postId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            "X-Token": this.x_token
        });
        // let a =new RequestOptionsArgs(){
        // }
        var options = { body: { postId: postId }, headers: headers };
        return this.http.request("delete", _common_Constants__WEBPACK_IMPORTED_MODULE_3__["POST_DELETE"], options);
    };
    DevRantApiService.prototype.deleteComment = function (postId, commentId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            "X-Token": this.x_token
        });
        // let a =new RequestOptionsArgs(){
        // }
        var options = { body: { postId: postId, commentId: commentId }, headers: headers };
        return this.http.request("delete", _common_Constants__WEBPACK_IMPORTED_MODULE_3__["COMMENT_DELETE"], options);
    };
    DevRantApiService.prototype.addNewComment = function (postId, comment) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            "X-Token": this.x_token
        });
        var options = { headers: headers };
        return this.http.post(_common_Constants__WEBPACK_IMPORTED_MODULE_3__["ADD_COOMENT"], { postId: postId, comment: comment }, options);
    };
    DevRantApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_local_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"]])
    ], DevRantApiService);
    return DevRantApiService;
}());



/***/ }),

/***/ "./src/app/alert/alert.component.css":
/*!*******************************************!*\
  !*** ./src/app/alert/alert.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/alert/alert.component.html":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start of alert popup -->\r\n<!-- ======================= -->\r\n\r\n<div class=\"popup popup--open\" *ngIf=\"isOpen\">\r\n  <div class=\"popup__header\">\r\n      <div title=\"Close\" class=\"close layout--center\" (click)=\"closeAlert()\">\r\n          X\r\n      </div>\r\n  </div>\r\n  <div class=\"popup__body layout--center\">\r\n      <div class=\"popup__body-inner\">\r\n\r\n          <div class=\"form\">\r\n              <div class=\"form__title\">\r\n                  <span class=\"highlight\">#</span>{{alertTitle}}!\r\n              </div>\r\n              <div class=\"form__description\">\r\n                  You can not vote on your own post :)\r\n                  <!-- {{alertDescription}} -->\r\n              </div>\r\n              <form name=\"alert\"  [formGroup]=\"angForm\"\r\n              novalidate>\r\n                  <div class=\"alert\">\r\n                      <input type=\"submit\" value=\"OK\" (click)=\"closeAlert()\" />\r\n                  </div>\r\n              </form>\r\n          </div>\r\n\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- ======================= -->\r\n<!-- End of alert popup -->"

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.service */ "./src/app/alert/alert.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService, fb) {
        this.alertService = alertService;
        this.fb = fb;
        this.isOpen = true;
        this.alertTitle = "";
        this.alertDescription = "";
        this.createForm();
        console.log("alert data:", this.data);
        this.alertData = this.data;
        // this.alertTitle=this.alertData.title;
        // this.alertDescription=this.alertData.description;
    }
    AlertComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({});
    };
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.status.subscribe(function (val) {
            _this.isOpen = val;
        });
    };
    AlertComponent.prototype.closeAlert = function () {
        this.alertService.display(false);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlertComponent.prototype, "data", void 0);
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/alert/alert.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/alert/alert.service.ts":
/*!****************************************!*\
  !*** ./src/app/alert/alert.service.ts ***!
  \****************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");



var AlertService = /** @class */ (function () {
    function AlertService() {
        this.status = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    AlertService.prototype.display = function (value) {
        this.status.next(value);
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\r\n  <!-- Start of Header -->\r\n  <!-- ======================= -->\r\n\r\n  <app-header></app-header>\r\n\r\n  <!-- ======================= -->\r\n  <!-- End of Header -->\r\n\r\n  <!-- Start of Main Section -->\r\n  <!-- ======================= -->\r\n\r\n  <!-- <app-main-content></app-main-content> -->\r\n  <router-outlet></router-outlet>\r\n\r\n  <!-- ======================= -->\r\n  <!-- End of Main Section -->\r\n</div>\r\n\r\n<app-login-popup></app-login-popup>\r\n\r\n<!-- <app-alert></app-alert> -->\r\n\r\n<app-new-post></app-new-post>\r\n\r\n<app-new-comment></app-new-comment>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'DevRant';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-content/main-content.component */ "./src/app/main-content/main-content.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loader/loader.service */ "./src/app/loader/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rant_details_rant_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rant-details/rant-details.component */ "./src/app/rant-details/rant-details.component.ts");
/* harmony import */ var _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login-popup/login-popup.component */ "./src/app/login-popup/login-popup.component.ts");
/* harmony import */ var _login_popup_login_popup_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login-popup/login-popup.service */ "./src/app/login-popup/login-popup.service.ts");
/* harmony import */ var angular2_focus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular2-focus */ "./node_modules/angular2-focus/dist/angular2-focus.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Service_devrant_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Service/devrant_api */ "./src/app/Service/devrant_api.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _header_header_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./header/header.service */ "./src/app/header/header.service.ts");
/* harmony import */ var _common_local_storage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./common/local-storage */ "./src/app/common/local-storage.ts");
/* harmony import */ var _rant_list_rant_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./rant-list/rant-list.component */ "./src/app/rant-list/rant-list.component.ts");
/* harmony import */ var _rant_rant_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./rant/rant.component */ "./src/app/rant/rant.component.ts");
/* harmony import */ var _rant_list_rant_list_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./rant-list/rant-list.service */ "./src/app/rant-list/rant-list.service.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./alert/alert.service */ "./src/app/alert/alert.service.ts");
/* harmony import */ var _vote_section_vote_section_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./vote-section/vote-section.component */ "./src/app/vote-section/vote-section.component.ts");
/* harmony import */ var _new_post_new_post_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./new-post/new-post.component */ "./src/app/new-post/new-post.component.ts");
/* harmony import */ var _new_post_new_post_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./new-post/new-post.service */ "./src/app/new-post/new-post.service.ts");
/* harmony import */ var _vote_section_vote_section_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./vote-section/vote-section.service */ "./src/app/vote-section/vote-section.service.ts");
/* harmony import */ var _rant_details_rant_details_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./rant-details/rant-details.service */ "./src/app/rant-details/rant-details.service.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/comment/comment.component.ts");
/* harmony import */ var _new_comment_new_comment_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./new-comment/new-comment.component */ "./src/app/new-comment/new-comment.component.ts");
/* harmony import */ var _new_comment_new_comment_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./new-comment/new-comment.service */ "./src/app/new-comment/new-comment.service.ts");
/* harmony import */ var _main_content_refresh_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./main-content/refresh.service */ "./src/app/main-content/refresh.service.ts");
/* harmony import */ var _comment_comment_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./comment/comment.service */ "./src/app/comment/comment.service.ts");



































var appRoutes = [
    { path: "rant/:id", component: _rant_details_rant_details_component__WEBPACK_IMPORTED_MODULE_10__["RantDetailsComponent"] },
    { path: "", component: _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_6__["MainContentComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_6__["MainContentComponent"],
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"],
                _rant_details_rant_details_component__WEBPACK_IMPORTED_MODULE_10__["RantDetailsComponent"],
                _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_11__["LoginPopupComponent"],
                _rant_list_rant_list_component__WEBPACK_IMPORTED_MODULE_20__["RantListComponent"],
                _rant_rant_component__WEBPACK_IMPORTED_MODULE_21__["RantComponent"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_23__["AlertComponent"],
                _vote_section_vote_section_component__WEBPACK_IMPORTED_MODULE_25__["VoteSectionComponent"],
                _new_post_new_post_component__WEBPACK_IMPORTED_MODULE_26__["NewPostComponent"],
                _comment_comment_component__WEBPACK_IMPORTED_MODULE_30__["CommentComponent"],
                _new_comment_new_comment_component__WEBPACK_IMPORTED_MODULE_31__["NewCommentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes),
                angular2_focus__WEBPACK_IMPORTED_MODULE_13__["FocusModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                angular_webstorage_service__WEBPACK_IMPORTED_MODULE_17__["StorageServiceModule"]
            ],
            providers: [
                _loader_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"],
                _login_popup_login_popup_service__WEBPACK_IMPORTED_MODULE_12__["LoginService"],
                _Service_devrant_api__WEBPACK_IMPORTED_MODULE_15__["DevRantApiService"],
                _header_header_service__WEBPACK_IMPORTED_MODULE_18__["HeaderService"],
                _common_local_storage__WEBPACK_IMPORTED_MODULE_19__["LocalStorage"],
                _rant_list_rant_list_service__WEBPACK_IMPORTED_MODULE_22__["PostListRefreshService"],
                _alert_alert_service__WEBPACK_IMPORTED_MODULE_24__["AlertService"],
                _new_post_new_post_service__WEBPACK_IMPORTED_MODULE_27__["NewPostService"],
                _vote_section_vote_section_service__WEBPACK_IMPORTED_MODULE_28__["VoteService"],
                _rant_details_rant_details_service__WEBPACK_IMPORTED_MODULE_29__["PostDetailsRefreshService"],
                _new_comment_new_comment_service__WEBPACK_IMPORTED_MODULE_32__["NewCommentService"],
                _main_content_refresh_service__WEBPACK_IMPORTED_MODULE_33__["MainRefreshService"],
                _comment_comment_service__WEBPACK_IMPORTED_MODULE_34__["CommentRefreshService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/comment/comment.component.css":
/*!***********************************************!*\
  !*** ./src/app/comment/comment.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/comment/comment.component.html":
/*!************************************************!*\
  !*** ./src/app/comment/comment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"comment\">\r\n    <div class=\"comment__inner\">\r\n      <div class=\"comment__body\">\r\n        <div class=\"profile\">\r\n          <div class=\"profile__picture\">\r\n            <svg height=\"36\" width=\"36\">\r\n              <circle cx=\"18\" cy=\"18\" r=\"18\" fill=\"#5c5f6f\" />\r\n            </svg>\r\n          </div>\r\n          <div class=\"profile__name\">\r\n            {{comment.author}}\r\n          </div>\r\n        </div>\r\n        <div class=\"post__details\">\r\n            {{comment.comment}}\r\n          <br />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"comment__footer\">\r\n      <div class=\"comment__delete\" *ngIf=\"ismyComment\" (click)=\"deleteComment()\">DELETE</div>\r\n      <div class=\"comment__time\"> {{comment.displayTime}}</div>\r\n    </div>\r\n  </section>"

/***/ }),

/***/ "./src/app/comment/comment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comment/comment.component.ts ***!
  \**********************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_devrant_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/devrant_api */ "./src/app/Service/devrant_api.ts");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader/loader.service */ "./src/app/loader/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rant_details_rant_details_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rant-details/rant-details.service */ "./src/app/rant-details/rant-details.service.ts");
/* harmony import */ var _comment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comment.service */ "./src/app/comment/comment.service.ts");







var CommentComponent = /** @class */ (function () {
    function CommentComponent(devrantApi, loaderService, router, refreshService, commentRefresh) {
        this.devrantApi = devrantApi;
        this.loaderService = loaderService;
        this.router = router;
        this.refreshService = refreshService;
        this.commentRefresh = commentRefresh;
        // console.log("comment",this.comment);
        var url = window.location.pathname;
        var urlsplit = url.split("/").slice(-1)[0];
        console.log("id :", urlsplit);
        this.id = urlsplit;
    }
    CommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commentRefresh.status.subscribe(function (val) {
            _this.comment = _this.data;
            _this.ismyComment = _this.comment.isMyComment;
        });
        this.comment = this.data;
        this.ismyComment = this.comment.isMyComment;
        console.log("comment", this.comment);
    };
    CommentComponent.prototype.deleteComment = function () {
        var _this = this;
        this.loaderService.display(true);
        this.devrantApi.deleteComment(this.id, this.comment.id).subscribe(function (data) {
            console.log("post list call");
            // this.data=data;
            if (data.ok) {
                console.log(data);
                // this.post=data.post;
                // this.voteService.update(this.post);
                // this.isMyPost=data.post.isMyPost;
                window.location.reload();
                _this.loaderService.display(false);
                _this.refreshService.refresh(true);
                // this.router.navigateByUrl('/rant/'+this.id);
            }
            else {
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommentComponent.prototype, "data", void 0);
    CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-comment",
            template: __webpack_require__(/*! ./comment.component.html */ "./src/app/comment/comment.component.html"),
            styles: [__webpack_require__(/*! ./comment.component.css */ "./src/app/comment/comment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Service_devrant_api__WEBPACK_IMPORTED_MODULE_2__["DevRantApiService"],
            _loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _rant_details_rant_details_service__WEBPACK_IMPORTED_MODULE_5__["PostDetailsRefreshService"],
            _comment_service__WEBPACK_IMPORTED_MODULE_6__["CommentRefreshService"]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/comment/comment.service.ts":
/*!********************************************!*\
  !*** ./src/app/comment/comment.service.ts ***!
  \********************************************/
/*! exports provided: CommentRefreshService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentRefreshService", function() { return CommentRefreshService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");



var CommentRefreshService = /** @class */ (function () {
    function CommentRefreshService() {
        this.status = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    CommentRefreshService.prototype.display = function (value) {
        this.status.next(value);
    };
    CommentRefreshService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CommentRefreshService);
    return CommentRefreshService;
}());



/***/ }),

/***/ "./src/app/common/Constants.ts":
/*!*************************************!*\
  !*** ./src/app/common/Constants.ts ***!
  \*************************************/
/*! exports provided: default, USER_ACTIVATE, USER_DEACTIVATE, GET_POST_LIST, VOTE, ADD_NEW_POST, POST_DETAILS, POST_DELETE, COMMENT_DELETE, ADD_COOMENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ACTIVATE", function() { return USER_ACTIVATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_DEACTIVATE", function() { return USER_DEACTIVATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POST_LIST", function() { return GET_POST_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOTE", function() { return VOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_NEW_POST", function() { return ADD_NEW_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_DETAILS", function() { return POST_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_DELETE", function() { return POST_DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMENT_DELETE", function() { return COMMENT_DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COOMENT", function() { return ADD_COOMENT; });
var ERROR_MESSAGES = {
    LOGIN_USERNAME_EMPTY: "Username is required !",
    LOGIN_PASSWORD_EMPTY: "Password is required !",
    LOGIN_RESPONSE_INVALID_CREDENTIALS: "Invalid username or password"
};
var BASE_URL = "https://api.devrant.thusitha.site";
var USER_ACTIVATE = BASE_URL + "/v1/user.activate";
var USER_DEACTIVATE = BASE_URL + "/v1/user.deactivate";
var GET_POST_LIST = BASE_URL + "/v1/post.list";
var VOTE = BASE_URL + "/v1/post.vote";
var ADD_NEW_POST = BASE_URL + "/v1/post.add";
var POST_DETAILS = BASE_URL + "/v1/post.details?postId=";
var POST_DELETE = BASE_URL + "/v1/post.delete";
var COMMENT_DELETE = BASE_URL + "/v1/comment.delete";
var ADD_COOMENT = BASE_URL + "/v1/comment.add";
/* harmony default export */ __webpack_exports__["default"] = (ERROR_MESSAGES);



/***/ }),

/***/ "./src/app/common/local-storage.ts":
/*!*****************************************!*\
  !*** ./src/app/common/local-storage.ts ***!
  \*****************************************/
/*! exports provided: LocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorage", function() { return LocalStorage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.service */ "./src/app/header/header.service.ts");




var LocalStorage = /** @class */ (function () {
    function LocalStorage(storage, headerService) {
        this.storage = storage;
        this.headerService = headerService;
    }
    LocalStorage.prototype.storeDate = function (key, value) {
        this.storage.set(key, value);
    };
    LocalStorage.prototype.getStorageData = function (key) {
        return this.storage.get(key);
    };
    LocalStorage.prototype.clearData = function (key) {
        this.storage.remove(key);
    };
    LocalStorage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["WebStorageService"], _header_header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"]])
    ], LocalStorage);
    return LocalStorage;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"header layout--center\">\r\n  <div class=\"header__content layout--wrapped\">\r\n      <div class=\"brand\">\r\n          <a href=\"/\"><div class=\"brand__name\"><span>#</span>DEVRANT</div></a>\r\n      </div>\r\n\r\n      <!-- User Profile -->\r\n      <div class=\"profile layout--center\" *ngIf=\"login\">\r\n          <div class=\"profile__picture\">\r\n              <svg height=\"36\" width=\"36\">\r\n                  <circle cx=\"18\" cy=\"18\" r=\"18\" fill=\"#5c5f6f\"></circle>\r\n              </svg>\r\n          </div>\r\n          <div class=\"profile__name\">{{username}}</div>\r\n      </div>\r\n\r\n      <div class=\"join\">\r\n          <span (click)=\"openLoginPopup()\" *ngIf=\"logout\">Join</span>\r\n          <span *ngIf=\"login\" (click)=\"clickLogout()\">Sign Out</span>\r\n      </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_popup_login_popup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login-popup/login-popup.service */ "./src/app/login-popup/login-popup.service.ts");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.service */ "./src/app/header/header.service.ts");
/* harmony import */ var _common_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/local-storage */ "./src/app/common/local-storage.ts");
/* harmony import */ var _Service_devrant_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Service/devrant_api */ "./src/app/Service/devrant_api.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_content_refresh_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../main-content/refresh.service */ "./src/app/main-content/refresh.service.ts");
/* harmony import */ var _rant_list_rant_list_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../rant-list/rant-list.service */ "./src/app/rant-list/rant-list.service.ts");









var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(storage, loginServic, headerService, devrantApi, router, refresh, refreshService) {
        this.storage = storage;
        this.loginServic = loginServic;
        this.headerService = headerService;
        this.devrantApi = devrantApi;
        this.router = router;
        this.refresh = refresh;
        this.refreshService = refreshService;
        this.login = false;
        this.logout = true;
    }
    //LoaderService is for the spinner
    //for the spinner
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.headerService.status.subscribe(function (val) {
            _this.login = val;
            _this.logout = !val;
            if (_this.login) {
                _this.username = _this.storage.getStorageData("username");
            }
        });
    };
    HeaderComponent.prototype.clickLogout = function () {
        var _this = this;
        this.devrantApi.userDeactivate().subscribe(function (data) {
            console.log(data);
            if (data.ok) {
                _this.storage.clearData("login");
                _this.storage.clearData("token");
                _this.storage.clearData("username");
                // this.loginService.display(false);
                _this.headerService.login(false);
                _this.router.navigateByUrl("/");
                _this.devrantApi.refresh();
                _this.refreshService.refresh(true);
            }
            else {
            }
        });
    };
    HeaderComponent.prototype.openLoginPopup = function () {
        this.loginServic.display(true);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-header",
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_local_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"],
            _login_popup_login_popup_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"],
            _Service_devrant_api__WEBPACK_IMPORTED_MODULE_5__["DevRantApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _main_content_refresh_service__WEBPACK_IMPORTED_MODULE_7__["MainRefreshService"],
            _rant_list_rant_list_service__WEBPACK_IMPORTED_MODULE_8__["PostListRefreshService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/header/header.service.ts":
/*!******************************************!*\
  !*** ./src/app/header/header.service.ts ***!
  \******************************************/
/*! exports provided: HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return HeaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");



var HeaderService = /** @class */ (function () {
    function HeaderService() {
        this.status = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    HeaderService.prototype.login = function (value) {
        this.status.next(value);
    };
    HeaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], HeaderService);
    return HeaderService;
}());



/***/ }),

/***/ "./src/app/loader/loader.component.css":
/*!*********************************************!*\
  !*** ./src/app/loader/loader.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/loader/loader.component.html":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showLoader\">\r\n  <div class=\"loader\">\r\n    <div class=\"spinner\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.service */ "./src/app/loader/loader.service.ts");



var LoaderComponent = /** @class */ (function () {
    //LoaderService is for the spinner
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
    }
    //for the spinner
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.status.subscribe(function (val) {
            _this.showLoader = val;
        });
    };
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/loader/loader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/loader/loader.service.ts":
/*!******************************************!*\
  !*** ./src/app/loader/loader.service.ts ***!
  \******************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");



var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.status = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    LoaderService.prototype.display = function (value) {
        this.status.next(value);
    };
    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/login-popup/login-popup.component.css":
/*!*******************************************************!*\
  !*** ./src/app/login-popup/login-popup.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBvcHVwL2xvZ2luLXBvcHVwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login-popup/login-popup.component.html":
/*!********************************************************!*\
  !*** ./src/app/login-popup/login-popup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start of login popup -->\r\n<!-- ======================= -->\r\n<div *ngIf=\"isOpen\">\r\n  <div class=\"popup popup--open\">\r\n    <div class=\"popup__header\">\r\n      <div\r\n        title=\"Close\"\r\n        class=\"close layout--center\"\r\n        (click)=\"closeLoginPopup()\"\r\n      >\r\n        X\r\n      </div>\r\n    </div>\r\n    <div class=\"popup__body layout--center\">\r\n      <div class=\"popup__body-inner\">\r\n        <div class=\"form\">\r\n          <div class=\"form__title\">\r\n            JOIN <span class=\"highlight\">#</span>DEVRANT\r\n          </div>\r\n          <div class=\"form__description\">\r\n            Vote and comment on others' rants. Post your own.\r\n          </div>\r\n          <form\r\n            name=\"login\"\r\n            [formGroup]=\"angForm\"\r\n            novalidate\r\n            (keyup.enter)=\"keyDownFunction()\"\r\n          >\r\n            <div class=\"login\">\r\n              <div class=\"form-group loginCustom\" *ngIf=\"showInputFeild\">\r\n                <input\r\n                  type=\"text\"\r\n                  placeholder=\"USERNAME\"\r\n                  focus=\"true\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"name\"\r\n                  [(ngModel)]=\"loginInput.username\"\r\n                />\r\n              </div>\r\n\r\n              <div class=\"form-group loginCustom\" *ngIf=\"showInputFeild\">\r\n                <input\r\n                  type=\"password\"\r\n                  placeholder=\"PASSWORD\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"password\"\r\n                  [(ngModel)]=\"loginInput.pass\"\r\n                />\r\n              </div>\r\n\r\n              <app-loader></app-loader>\r\n\r\n              <div\r\n                *ngIf=\"\r\n                  angForm.controls['name'].invalid &&\r\n                  (angForm.controls['name'].dirty ||\r\n                    angForm.controls['name'].touched)\r\n                \"\r\n              >\r\n                <div *ngIf=\"angForm.controls['name'].errors.required\">\r\n                  <div class=\"form__error\">\r\n                    {{ name_error }}\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div\r\n                *ngIf=\"\r\n                  angForm.controls['password'].invalid &&\r\n                  (angForm.controls['password'].dirty ||\r\n                    angForm.controls['password'].touched)\r\n                \"\r\n              >\r\n                <div *ngIf=\"angForm.controls['password'].errors.required\">\r\n                  <div class=\"form__error\">\r\n                    {{ password_error }}\r\n                  </div>\r\n                </div>\r\n                \r\n              </div>\r\n              <div *ngIf=\"loginFaild\">\r\n                  <div class=\"form__error\">\r\n                    {{ requestError }}\r\n                  </div>\r\n                </div>\r\n              <div class=\"loginCustom\">\r\n                <input\r\n                  type=\"button\"\r\n                  value=\"LET ME IN\"\r\n                  (click)=\"submitClick()\"\r\n                  [disabled]=\"angForm.pristine || angForm.invalid || isLoading\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- ======================= -->\r\n<!-- End of login popup -->\r\n"

/***/ }),

/***/ "./src/app/login-popup/login-popup.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login-popup/login-popup.component.ts ***!
  \******************************************************/
/*! exports provided: LoginPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPopupComponent", function() { return LoginPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_popup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-popup.service */ "./src/app/login-popup/login-popup.service.ts");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader/loader.service */ "./src/app/loader/loader.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Constants */ "./src/app/common/Constants.ts");
/* harmony import */ var _Service_devrant_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Service/devrant_api */ "./src/app/Service/devrant_api.ts");
/* harmony import */ var _header_header_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../header/header.service */ "./src/app/header/header.service.ts");
/* harmony import */ var _common_local_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/local-storage */ "./src/app/common/local-storage.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rant_list_rant_list_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../rant-list/rant-list.service */ "./src/app/rant-list/rant-list.service.ts");











var LoginPopupComponent = /** @class */ (function () {
    //LoaderService is for the spinner
    function LoginPopupComponent(headerService, storage, loginService, renderer, loaderService, fb, devrantApi, route, 
    // private refreshService:MainRefreshService,
    refreshService) {
        this.headerService = headerService;
        this.storage = storage;
        this.loginService = loginService;
        this.renderer = renderer;
        this.loaderService = loaderService;
        this.fb = fb;
        this.devrantApi = devrantApi;
        this.route = route;
        this.refreshService = refreshService;
        this.name = "";
        this.password = "";
        this.isLoading = false;
        this.showInputFeild = true;
        this.requestError = "";
        // userName:any;
        this.loginInput = {};
        this.loginFaild = false;
        this.createForm();
        this.name_error = _common_Constants__WEBPACK_IMPORTED_MODULE_5__["default"].LOGIN_USERNAME_EMPTY;
        this.password_error = _common_Constants__WEBPACK_IMPORTED_MODULE_5__["default"].LOGIN_PASSWORD_EMPTY;
    }
    LoginPopupComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            name: [this.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: [this.password, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    //for the spinner
    LoginPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.status.subscribe(function (val) {
            _this.isOpen = val;
        });
    };
    LoginPopupComponent.prototype.closeLoginPopup = function () {
        this.loginService.display(false);
        this.loaderService.display(false);
        this.loginFaild = false;
        this.angForm.reset();
    };
    LoginPopupComponent.prototype.submitClick = function () {
        var _this = this;
        console.log("username :" + this.loginInput.username, "pasword :" + this.loginInput.pass);
        this.loaderService.display(true);
        this.isLoading = true;
        this.showInputFeild = false;
        this.devrantApi
            .userActivate(this.loginInput.username, this.loginInput.pass)
            .subscribe(function (data) {
            console.log(data);
            if (data.ok) {
                _this.loginFaild = false;
                _this.storage.storeDate("login", true);
                _this.storage.storeDate("token", data.token);
                _this.storage.storeDate("username", data.username);
                _this.loginService.display(false);
                _this.headerService.login(true);
                // this.route.navigateByUrl("/");
                // window.location.reload();
                _this.devrantApi.refresh();
                _this.refreshService.refresh(true);
            }
            else {
                _this.loginFaild = true;
                _this.headerService.login(false);
                if (data.error == "INVALID_CREDENTIALS") {
                    console.log("login faild");
                    _this.requestError =
                        "This can occur for invalid username and password or a wrong password for a given username.";
                }
                else if (data.error == "SERVER_ERROR") {
                    _this.requestError = "A server side error has been occurred.";
                }
            }
            _this.loaderService.display(false);
            _this.isLoading = false;
            _this.showInputFeild = true;
        });
    };
    LoginPopupComponent.prototype.keyDownFunction = function () { };
    LoginPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login-popup",
            template: __webpack_require__(/*! ./login-popup.component.html */ "./src/app/login-popup/login-popup.component.html"),
            styles: [__webpack_require__(/*! ./login-popup.component.css */ "./src/app/login-popup/login-popup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_header_header_service__WEBPACK_IMPORTED_MODULE_7__["HeaderService"],
            _common_local_storage__WEBPACK_IMPORTED_MODULE_8__["LocalStorage"],
            _login_popup_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _Service_devrant_api__WEBPACK_IMPORTED_MODULE_6__["DevRantApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _rant_list_rant_list_service__WEBPACK_IMPORTED_MODULE_10__["PostListRefreshService"]])
    ], LoginPopupComponent);
    return LoginPopupComponent;
}());



/***/ }),

/***/ "./src/app/login-popup/login-popup.service.ts":
/*!****************************************************!*\
  !*** ./src/app/login-popup/login-popup.service.ts ***!
  \****************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");



var LoginService = /** @class */ (function () {
    function LoginService() {
        this.status = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    LoginService.prototype.display = function (value) {
        this.status.next(value);
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/main-content/main-content.component.css":
/*!*********************************************************!*\
  !*** ./src/app/main-content/main-content.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tY29udGVudC9tYWluLWNvbnRlbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main-content/main-content.component.html":
/*!**********************************************************!*\
  !*** ./src/app/main-content/main-content.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"main layout--center\">\r\n  <div class=\"main__content layout--wrapped\">\r\n    <!-- Start of Rant List Page -->\r\n    <!-- ======================= -->\r\n\r\n    <app-rant-list></app-rant-list>\r\n\r\n    <!-- ======================= -->\r\n    <!-- End of Rant List Page -->\r\n\r\n    <!-- Start of Rant Details Page-->\r\n    <!-- ======================= -->\r\n\r\n   <!-- <app-rant-details></app-rant-details> -->\r\n\r\n    <!-- ======================= -->\r\n    <!-- End of Rant Details Page-->\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/main-content/main-content.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main-content/main-content.component.ts ***!
  \********************************************************/
/*! exports provided: MainContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentComponent", function() { return MainContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loader/loader.service */ "./src/app/loader/loader.service.ts");
/* harmony import */ var _common_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/local-storage */ "./src/app/common/local-storage.ts");
/* harmony import */ var _header_header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.service */ "./src/app/header/header.service.ts");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alert/alert.service */ "./src/app/alert/alert.service.ts");
/* harmony import */ var _refresh_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./refresh.service */ "./src/app/main-content/refresh.service.ts");







var MainContentComponent = /** @class */ (function () {
    function MainContentComponent(loaderService, storage, headerService, alertService, refreshService) {
        this.loaderService = loaderService;
        this.storage = storage;
        this.headerService = headerService;
        this.alertService = alertService;
        this.refreshService = refreshService;
        if (storage.getStorageData("login") != null) {
            var login = storage.getStorageData("login");
            if (login) {
                headerService.login(true);
            }
        }
    }
    MainContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refreshService.status.subscribe(function (val) {
            if (_this.storage.getStorageData("login") != null) {
                var login = _this.storage.getStorageData("login");
                if (login) {
                    _this.headerService.login(true);
                }
            }
        });
    };
    MainContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-main-content",
            template: __webpack_require__(/*! ./main-content.component.html */ "./src/app/main-content/main-content.component.html"),
            styles: [__webpack_require__(/*! ./main-content.component.css */ "./src/app/main-content/main-content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"],
            _common_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"],
            _header_header_service__WEBPACK_IMPORTED_MODULE_4__["HeaderService"],
            _alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _refresh_service__WEBPACK_IMPORTED_MODULE_6__["MainRefreshService"]])
    ], MainContentComponent);
    return MainContentComponent;
}());



/***/ }),

/***/ "./src/app/main-content/refresh.service.ts":
/*!*************************************************!*\
  !*** ./src/app/main-content/refresh.service.ts ***!
  \*************************************************/
/*! exports provided: MainRefreshService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRefreshService", function() { return MainRefreshService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");



var MainRefreshService = /** @class */ (function () {
    function MainRefreshService() {
        this.status = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    MainRefreshService.prototype.display = function (value) {
        this.status.next(value);
    };
    MainRefreshService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], MainRefreshService);
    return MainRefreshService;
}());



/***/ }),

/***/ "./src/app/new-comment/new-comment.component.css":
/*!*******************************************************!*\
  !*** ./src/app/new-comment/new-comment.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1jb21tZW50L25ldy1jb21tZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/new-comment/new-comment.component.html":
/*!********************************************************!*\
  !*** ./src/app/new-comment/new-comment.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start of comment popup -->\r\n<!-- ======================= -->\r\n\r\n<div class=\"popup popup--open\" *ngIf=\"isOpen\">\r\n  <div class=\"popup__header\">\r\n    <div title=\"Close\" class=\"close layout--center\" (click)=\"closeCommentPost()\">\r\n      X\r\n    </div>\r\n  </div>\r\n  <div class=\"popup__body layout--center\">\r\n    <div class=\"popup__body-inner\">\r\n      <div class=\"form\">\r\n        <div class=\"form__title\">\r\n          NEW <span class=\"highlight\">#</span>COMMENT\r\n        </div>\r\n        <div class=\"form__description\">\r\n          Comment with 140 characters.\r\n        </div>\r\n        <form name=\"new-comment\" [formGroup]=\"angForm\" novalidate>\r\n          <div class=\"new-comment\">\r\n            <div class=\"form-group\" *ngIf=\"showInputFeild\">\r\n              <textarea\r\n                maxlength=\"140\"\r\n                focus=\"true\"\r\n                class=\"form-control\"\r\n                formControlName=\"content\"\r\n                [(ngModel)]=\"loginInput.username\"\r\n              ></textarea>\r\n            </div>\r\n\r\n            <app-loader></app-loader>\r\n\r\n            <div\r\n              *ngIf=\"\r\n                angForm.controls['content'].invalid &&\r\n                (angForm.controls['content'].dirty ||\r\n                  angForm.controls['content'].touched)\r\n              \"\r\n            >\r\n              <div *ngIf=\"angForm.controls['content'].errors.required\">\r\n                <div class=\"form__error\">\r\n                  {{ content_error }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"newpostCustom\"> -->\r\n            <input\r\n              type=\"submit\"\r\n              value=\"COMMENT\"\r\n              (click)=\"submitClick()\"\r\n              [disabled]=\"angForm.pristine || angForm.invalid || isLoading\"\r\n            />\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- ======================= -->\r\n<!-- End of comment popup -->\r\n"

/***/ }),

/***/ "./src/app/new-comment/new-comment.component.ts":
/*!******************************************************!*\
  !*** ./src/app/new-comment/new-comment.component.ts ***!
  \******************************************************/
/*! exports provided: NewCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCommentComponent", function() { return NewCommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rant_list_rant_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rant-list/rant-list.service */ "./src/app/rant-list/rant-list.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader/loader.service */ "./src/app/loader/loader.service.ts");
/* harmony import */ var _Service_devrant_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Service/devrant_api */ "./src/app/Service/devrant_api.ts");
/* harmony import */ var _new_comment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-comment.service */ "./src/app/new-comment/new-comment.service.ts");
/* harmony import */ var _rant_details_rant_details_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rant-details/rant-details.service */ "./src/app/rant-details/rant-details.service.ts");
/* harmony import */ var _comment_comment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../comment/comment.service */ "./src/app/comment/comment.service.ts");









var NewCommentComponent = /** @class */ (function () {
    function NewCommentComponent(refreshPost, fb, newCommentService, loaderService, devrantApi, refreshPostDetails, commentRefresh) {
        this.refreshPost = refreshPost;
        this.fb = fb;
        this.newCommentService = newCommentService;
        this.loaderService = loaderService;
        this.devrantApi = devrantApi;
        this.refreshPostDetails = refreshPostDetails;
        this.commentRefresh = commentRefresh;
        this.showInputFeild = true;
        this.isLoading = false;
        this.loginInput = {};
        this.content_error = "Comment content is required";
        this.requestError = "";
        this.createForm();
        var url = window.location.pathname;
        var urlsplit = url.split("/").slice(-1)[0];
        console.log("id :", urlsplit);
        this.id = urlsplit;
    }
    NewCommentComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            content: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            //  password: [this.password, Validators.required ]
        });
    };
    NewCommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newCommentService.status.subscribe(function (val) {
            _this.isOpen = val;
        });
    };
    NewCommentComponent.prototype.closeCommentPost = function () {
        this.newCommentService.display(false);
        this.angForm.reset();
    };
    NewCommentComponent.prototype.submitClick = function () {
        var _this = this;
        this.loaderService.display(true);
        this.isLoading = true;
        this.showInputFeild = false;
        this.devrantApi.addNewComment(this.id, this.loginInput.username).subscribe(function (data) {
            console.log(data);
            if (data.ok) {
                _this.newCommentService.display(false);
                window.location.reload();
                // this.devrantApi.refresh();
                _this.commentRefresh.display(true);
                _this.refreshPostDetails.refresh(true);
            }
            else {
                if (data.error == "INVALID_CREDENTIALS") {
                    // this.loginService.display(true);
                }
                else if (data.error == "SERVER_ERROR") {
                    _this.requestError = "A server side error has been occurred.";
                }
            }
            _this.loaderService.display(false);
            _this.isLoading = false;
            _this.showInputFeild = true;
        });
    };
    NewCommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-new-comment",
            template: __webpack_require__(/*! ./new-comment.component.html */ "./src/app/new-comment/new-comment.component.html"),
            styles: [__webpack_require__(/*! ./new-comment.component.css */ "./src/app/new-comment/new-comment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rant_list_rant_list_service__WEBPACK_IMPORTED_MODULE_2__["PostListRefreshService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _new_comment_service__WEBPACK_IMPORTED_MODULE_6__["NewCommentService"],
            _loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _Service_devrant_api__WEBPACK_IMPORTED_MODULE_5__["DevRantApiService"],
            _rant_details_rant_details_service__WEBPACK_IMPORTED_MODULE_7__["PostDetailsRefreshService"],
            _comment_comment_service__WEBPACK_IMPORTED_MODULE_8__["CommentRefreshService"]])
    ], NewCommentComponent);
    return NewCommentComponent;
}());



/***/ }),

/***/ "./src/app/new-comment/new-comment.service.ts":
/*!****************************************************!*\
  !*** ./src/app/new-comment/new-comment.service.ts ***!
  \****************************************************/
/*! exports provided: NewCommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCommentService", function() { return NewCommentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");



var NewCommentService = /** @class */ (function () {
    function NewCommentService() {
        this.status = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    NewCommentService.prototype.display = function (value) {
        this.status.next(value);
    };
    NewCommentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], NewCommentService);
    return NewCommentService;
}());



/***/ }),

/***/ "./src/app/new-post/new-post.component.css":
/*!*************************************************!*\
  !*** ./src/app/new-post/new-post.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1wb3N0L25ldy1wb3N0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/new-post/new-post.component.html":
/*!**************************************************!*\
  !*** ./src/app/new-post/new-post.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start of post popup -->\r\n<!-- ======================= -->\r\n\r\n<div class=\"popup popup--open\" *ngIf=\"isOpen\">\r\n  <div class=\"popup__header\">\r\n    <div title=\"Close\" class=\"close layout--center\" (click)=\"closeNewPost()\">\r\n      X\r\n    </div>\r\n  </div>\r\n  <div class=\"popup__body layout--center\">\r\n    <div class=\"popup__body-inner\">\r\n      <div class=\"form\">\r\n        <div class=\"form__title\">NEW <span class=\"highlight\">#</span>RANT</div>\r\n        <div class=\"form__description\">\r\n          Express yourself with 140 characters.\r\n        </div>\r\n        <form name=\"new-rant\" [formGroup]=\"angForm\" novalidate>\r\n          <div class=\"new-rant\">\r\n            <div class=\"form-group newpostCustom\" *ngIf=\"showInputFeild\">\r\n              <textarea\r\n                maxlength=\"140\"\r\n                focus=\"true\"\r\n                class=\"form-control\"\r\n                formControlName=\"content\"\r\n                [(ngModel)]=\"loginInput.username\"\r\n              ></textarea>\r\n            </div>\r\n\r\n            <app-loader></app-loader>\r\n\r\n            <div\r\n              *ngIf=\"\r\n                angForm.controls['content'].invalid &&\r\n                (angForm.controls['content'].dirty ||\r\n                  angForm.controls['content'].touched)\r\n              \"\r\n            >\r\n              <div *ngIf=\"angForm.controls['content'].errors.required\">\r\n                <div class=\"form__error\">\r\n                  {{ content_error }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"newpostCustom\"> -->\r\n            <input\r\n              type=\"submit\"\r\n              value=\"POST\"\r\n              (click)=\"submitClick()\"\r\n              [disabled]=\"angForm.pristine || angForm.invalid || isLoading\"\r\n            />\r\n            <!-- </div> -->\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- ======================= -->\r\n<!-- End of post popup -->\r\n"

/***/ }),

/***/ "./src/app/new-post/new-post.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-post/new-post.component.ts ***!
  \************************************************/
/*! exports provided: NewPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPostComponent", function() { return NewPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _new_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-post.service */ "./src/app/new-post/new-post.service.ts");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader/loader.service */ "./src/app/loader/loader.service.ts");
/* harmony import */ var _Service_devrant_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Service/devrant_api */ "./src/app/Service/devrant_api.ts");
/* harmony import */ var _rant_list_rant_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rant-list/rant-list.service */ "./src/app/rant-list/rant-list.service.ts");







var NewPostComponent = /** @class */ (function () {
    function NewPostComponent(refreshPost, fb, newPostService, loaderService, devrantApi) {
        this.refreshPost = refreshPost;
        this.fb = fb;
        this.newPostService = newPostService;
        this.loaderService = loaderService;
        this.devrantApi = devrantApi;
        this.showInputFeild = true;
        this.isLoading = false;
        this.loginInput = {};
        this.content_error = "post content is required";
        this.requestError = "";
        this.createForm();
    }
    NewPostComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    NewPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newPostService.status.subscribe(function (val) {
            _this.isOpen = val;
        });
    };
    NewPostComponent.prototype.closeNewPost = function () {
        this.newPostService.display(false);
        this.angForm.reset();
    };
    NewPostComponent.prototype.submitClick = function () {
        var _this = this;
        this.loaderService.display(true);
        this.isLoading = true;
        this.showInputFeild = false;
        this.devrantApi.addNewPost(this.loginInput.username).subscribe(function (data) {
            console.log(data);
            if (data.ok) {
                _this.newPostService.display(false);
                _this.refreshPost.refresh(true);
            }
            else {
                if (data.error == "INVALID_CREDENTIALS") {
                    // this.loginService.display(true);
                }
                else if (data.error == "SERVER_ERROR") {
                    _this.requestError = "A server side error has been occurred.";
                }
            }
            _this.loaderService.display(false);
            _this.isLoading = false;
            _this.showInputFeild = true;
        });
    };
    NewPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-new-post",
            template: __webpack_require__(/*! ./new-post.component.html */ "./src/app/new-post/new-post.component.html"),
            styles: [__webpack_require__(/*! ./new-post.component.css */ "./src/app/new-post/new-post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rant_list_rant_list_service__WEBPACK_IMPORTED_MODULE_6__["PostListRefreshService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _new_post_service__WEBPACK_IMPORTED_MODULE_3__["NewPostService"], _loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"], _Service_devrant_api__WEBPACK_IMPORTED_MODULE_5__["DevRantApiService"]])
    ], NewPostComponent);
    return NewPostComponent;
}());



/***/ }),

/***/ "./src/app/new-post/new-post.service.ts":
/*!**********************************************!*\
  !*** ./src/app/new-post/new-post.service.ts ***!
  \**********************************************/
/*! exports provided: NewPostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPostService", function() { return NewPostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");



var NewPostService = /** @class */ (function () {
    function NewPostService() {
        this.status = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    NewPostService.prototype.display = function (value) {
        this.status.next(value);
    };
    NewPostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], NewPostService);
    return NewPostService;
}());



/***/ }),

/***/ "./src/app/rant-details/rant-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/rant-details/rant-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhbnQtZGV0YWlscy9yYW50LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/rant-details/rant-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/rant-details/rant-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader></app-loader>\r\n<section class=\"main layout--center\">\r\n    <div class=\"main__content layout--wrapped\">\r\n<div class=\"rant-details layout--center\">\r\n  <section class=\"post-hero\">\r\n    <div class=\"post-hero__inner\">\r\n      <div class=\"score\">\r\n          <app-vote-section [data]=\"post\"></app-vote-section>\r\n      </div>\r\n      <div class=\"post-hero__body\">\r\n        <div class=\"profile\">\r\n          <div class=\"profile__picture\">\r\n            <svg height=\"36\" width=\"36\">\r\n              <circle cx=\"18\" cy=\"18\" r=\"18\" fill=\"#5c5f6f\" />\r\n            </svg>\r\n          </div>\r\n          <div class=\"profile__name\">\r\n            {{post.author}}\r\n          </div>\r\n        </div>\r\n        <div class=\"post__details\">\r\n            {{post.content}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"post-hero__footer\">\r\n      <div class=\"post-hero__delete\" *ngIf=\"isMyPost\" (click)=\"deletePost()\">DELETE</div>\r\n      <div class=\"post-hero__time\">{{post.displayTime}}</div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"comments layout--center\">\r\n    <h1 class=\"comments__title\"><span>#</span>Comments</h1>\r\n\r\n    <div *ngIf=\"noComment\" class=\"nocomment\" style=\"color: #d31c41;\r\n    padding: 0 0 12px 0;\r\n    text-align: center;\r\n    width: 100%;\r\n    font-size: 18px;\">\r\n        No comments added.\r\n    </div>\r\n\r\n    <app-comment *ngFor=\"let comment of comments\" [data]=\"comment\"></app-comment>\r\n   \r\n  </section>\r\n\r\n  <div class=\"rant__comment layout--center\" title=\"Comment\" (click)=\"openNewComment()\">\r\n    <svg class=\"icon\" viewBox=\"0 0 31 32\" width=\"100%\" height=\"100%\">\r\n      <path\r\n        d=\"M24.732 24.371v7.629l-7.267-7.267h-8.808c-4.781 \r\n                  0-8.657-3.875-8.657-8.657v-7.42c0-4.781 3.876-8.657 \r\n                  8.657-8.657h13.604c4.781 0 8.657 3.875 8.657 8.657v7.42c0 \r\n                  3.922-2.61 7.23-6.186 8.294z\"\r\n      ></path>\r\n    </svg>\r\n  </div>\r\n</div>\r\n</div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/rant-details/rant-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/rant-details/rant-details.component.ts ***!
  \********************************************************/
/*! exports provided: RantDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RantDetailsComponent", function() { return RantDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_devrant_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/devrant_api */ "./src/app/Service/devrant_api.ts");
/* harmony import */ var _common_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/local-storage */ "./src/app/common/local-storage.ts");
/* harmony import */ var _header_header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.service */ "./src/app/header/header.service.ts");
/* harmony import */ var _vote_section_vote_section_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vote-section/vote-section.service */ "./src/app/vote-section/vote-section.service.ts");
/* harmony import */ var _rant_details_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rant-details.service */ "./src/app/rant-details/rant-details.service.ts");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loader/loader.service */ "./src/app/loader/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_comment_new_comment_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../new-comment/new-comment.service */ "./src/app/new-comment/new-comment.service.ts");










var RantDetailsComponent = /** @class */ (function () {
    function RantDetailsComponent(devrantApi, storage, headerService, voteService, refreshService, loaderService, router, commentService) {
        var _this = this;
        this.devrantApi = devrantApi;
        this.storage = storage;
        this.headerService = headerService;
        this.voteService = voteService;
        this.refreshService = refreshService;
        this.loaderService = loaderService;
        this.router = router;
        this.commentService = commentService;
        this.post = {};
        if (storage.getStorageData("login") != null) {
            var login = storage.getStorageData("login");
            if (login) {
                headerService.login(true);
            }
        }
        var url = window.location.pathname;
        var urlsplit = url.split("/").slice(-1)[0];
        console.log("id :", urlsplit);
        this.id = urlsplit;
        this.devrantApi.getPostDeatils(this.id).subscribe(function (data) {
            console.log("post list call");
            // this.data=data;
            if (data.ok) {
                console.log(data);
                _this.post = data.post;
                _this.voteService.update(_this.post);
                _this.isMyPost = data.post.isMyPost;
                _this.comments = data.post.comments;
                _this.noComment = data.post.comments.length < 1 ? true : false;
                // this.loaderService.display(false);
            }
            else {
            }
        });
    }
    RantDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refreshService.status.subscribe(function (val) {
            console.log("refresh page");
            if (val) {
                _this.loaderService.display(true);
                _this.devrantApi.getPostDeatils(_this.id).subscribe(function (data) {
                    console.log("post list call");
                    // this.data=data;
                    if (data.ok) {
                        console.log(data);
                        _this.post = data.post;
                        _this.voteService.update(_this.post);
                        _this.isMyPost = data.post.isMyPost;
                        _this.loaderService.display(false);
                    }
                    else {
                    }
                });
            }
        });
    };
    RantDetailsComponent.prototype.deletePost = function () {
        var _this = this;
        this.loaderService.display(true);
        this.devrantApi.deletePost(this.id).subscribe(function (data) {
            console.log("post list call");
            // this.data=data;
            if (data.ok) {
                console.log(data);
                // this.post=data.post;
                // this.voteService.update(this.post);
                // this.isMyPost=data.post.isMyPost;
                _this.loaderService.display(false);
                _this.router.navigateByUrl("/");
            }
            else {
            }
        });
    };
    RantDetailsComponent.prototype.openNewComment = function () {
        this.commentService.display(true);
    };
    RantDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-rant-details",
            template: __webpack_require__(/*! ./rant-details.component.html */ "./src/app/rant-details/rant-details.component.html"),
            styles: [__webpack_require__(/*! ./rant-details.component.css */ "./src/app/rant-details/rant-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Service_devrant_api__WEBPACK_IMPORTED_MODULE_2__["DevRantApiService"],
            _common_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorage"],
            _header_header_service__WEBPACK_IMPORTED_MODULE_4__["HeaderService"],
            _vote_section_vote_section_service__WEBPACK_IMPORTED_MODULE_5__["VoteService"],
            _rant_details_service__WEBPACK_IMPORTED_MODULE_6__["PostDetailsRefreshService"],
            _loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _new_comment_new_comment_service__WEBPACK_IMPORTED_MODULE_9__["NewCommentService"]])
    ], RantDetailsComponent);
    return RantDetailsComponent;
}());



/***/ }),

/***/ "./src/app/rant-details/rant-details.service.ts":
/*!******************************************************!*\
  !*** ./src/app/rant-details/rant-details.service.ts ***!
  \******************************************************/
/*! exports provided: PostDetailsRefreshService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailsRefreshService", function() { return PostDetailsRefreshService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");



var PostDetailsRefreshService = /** @class */ (function () {
    function PostDetailsRefreshService() {
        this.status = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    PostDetailsRefreshService.prototype.refresh = function (value) {
        this.status.next(value);
    };
    PostDetailsRefreshService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], PostDetailsRefreshService);
    return PostDetailsRefreshService;
}());



/***/ }),

/***/ "./src/app/rant-list/rant-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/rant-list/rant-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhbnQtbGlzdC9yYW50LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/rant-list/rant-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/rant-list/rant-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader></app-loader>\r\n<div class=\"post-list\">\r\n  <!-- Start of Loader -->\r\n    <!-- ======================= -->\r\n   \r\n    <!-- ======================= -->\r\n    <!-- End of loader -->\r\n  <!-- <app-rant></app-rant> -->\r\n  <!-- <div *ngFor=\"let post of posts\" style=\"display:inline\"> -->\r\n      \r\n        <app-rant *ngFor=\"let post of posts\" [data]=\"post\"></app-rant>\r\n    <!-- </div> -->\r\n \r\n</div>\r\n<div class=\"rant__add\" title=\"Add Rant\" (click)=\"openNewPost()\">+</div>\r\n"

/***/ }),

/***/ "./src/app/rant-list/rant-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/rant-list/rant-list.component.ts ***!
  \**************************************************/
/*! exports provided: RantListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RantListComponent", function() { return RantListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_devrant_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/devrant_api */ "./src/app/Service/devrant_api.ts");
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader/loader.service */ "./src/app/loader/loader.service.ts");
/* harmony import */ var _rant_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rant-list.service */ "./src/app/rant-list/rant-list.service.ts");
/* harmony import */ var _new_post_new_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../new-post/new-post.service */ "./src/app/new-post/new-post.service.ts");
/* harmony import */ var _common_local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/local-storage */ "./src/app/common/local-storage.ts");
/* harmony import */ var _login_popup_login_popup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login-popup/login-popup.service */ "./src/app/login-popup/login-popup.service.ts");








var RantListComponent = /** @class */ (function () {
    // data:{ok:any,posts:any};
    function RantListComponent(loginService, storage, devrantApi, loaderService, refreshService, newPostService) {
        this.loginService = loginService;
        this.storage = storage;
        this.devrantApi = devrantApi;
        this.loaderService = loaderService;
        this.refreshService = refreshService;
        this.newPostService = newPostService;
        if (storage.getStorageData("login") != null) {
            this.login = storage.getStorageData("login");
        }
    }
    RantListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("before post list call");
        this.loaderService.display(true);
        this.devrantApi.getAllPost().subscribe(function (data) {
            console.log("post list call");
            // this.data=data;
            if (data.ok) {
                // console.log(data);
                _this.posts = data.posts;
                _this.loaderService.display(false);
            }
            else {
            }
        });
        this.refreshService.status.subscribe(function (val) {
            console.log("refresh page");
            if (val) {
                _this.loaderService.display(true);
                _this.devrantApi.getAllPost().subscribe(function (data) {
                    console.log("post list call");
                    // this.data=data;
                    if (data.ok) {
                        // console.log(data);
                        _this.posts = data.posts;
                        _this.loaderService.display(false);
                    }
                    else {
                    }
                });
            }
        });
    };
    RantListComponent.prototype.openNewPost = function () {
        if (this.login) {
            this.newPostService.display(true);
        }
        else {
            this.loginService.display(true);
        }
    };
    RantListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-rant-list",
            template: __webpack_require__(/*! ./rant-list.component.html */ "./src/app/rant-list/rant-list.component.html"),
            styles: [__webpack_require__(/*! ./rant-list.component.css */ "./src/app/rant-list/rant-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_popup_login_popup_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
            _common_local_storage__WEBPACK_IMPORTED_MODULE_6__["LocalStorage"],
            _Service_devrant_api__WEBPACK_IMPORTED_MODULE_2__["DevRantApiService"],
            _loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _rant_list_service__WEBPACK_IMPORTED_MODULE_4__["PostListRefreshService"],
            _new_post_new_post_service__WEBPACK_IMPORTED_MODULE_5__["NewPostService"]])
    ], RantListComponent);
    return RantListComponent;
}());



/***/ }),

/***/ "./src/app/rant-list/rant-list.service.ts":
/*!************************************************!*\
  !*** ./src/app/rant-list/rant-list.service.ts ***!
  \************************************************/
/*! exports provided: PostListRefreshService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListRefreshService", function() { return PostListRefreshService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");



var PostListRefreshService = /** @class */ (function () {
    function PostListRefreshService() {
        this.status = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    PostListRefreshService.prototype.refresh = function (value) {
        this.status.next(value);
    };
    PostListRefreshService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], PostListRefreshService);
    return PostListRefreshService;
}());



/***/ }),

/***/ "./src/app/rant/rant.component.css":
/*!*****************************************!*\
  !*** ./src/app/rant/rant.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhbnQvcmFudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/rant/rant.component.html":
/*!******************************************!*\
  !*** ./src/app/rant/rant.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"post\" id=\"{{post.id}}\" href=\"/rant/{{post.id}}\" style=\"text-decoration : none;\">\r\n    <!-- [routerLink]=\"['/rant/',post.id]\" -->\r\n    <div class=\"post__inner\">\r\n     <app-vote-section [data]=\"post\"></app-vote-section>\r\n      <div class=\"post__body\">\r\n        {{post.content}}\r\n      </div>\r\n    </div>\r\n    <div class=\"post__footer\">\r\n      <div class=\"post__time\">{{post.displayTime}}</div>\r\n      <div class=\"post__comments\">\r\n        <svg class=\"icon\" viewBox=\"0 0 31 32\">\r\n          <path\r\n            d=\"M24.732 24.371v7.629l-7.267-7.267h-8.808c-4.781 \r\n                      0-8.657-3.875-8.657-8.657v-7.42c0-4.781 3.876-8.657 \r\n                      8.657-8.657h13.604c4.781 0 8.657 3.875 8.657 8.657v7.42c0 \r\n                      3.922-2.61 7.23-6.186 8.294z\"\r\n          ></path>\r\n        </svg>\r\n        {{post.commentCount}}\r\n      </div>\r\n    </div>\r\n  </a>\r\n\r\n  <app-alert [data]=\"alertdata\"></app-alert>"

/***/ }),

/***/ "./src/app/rant/rant.component.ts":
/*!****************************************!*\
  !*** ./src/app/rant/rant.component.ts ***!
  \****************************************/
/*! exports provided: RantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RantComponent", function() { return RantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_devrant_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/devrant_api */ "./src/app/Service/devrant_api.ts");
/* harmony import */ var _login_popup_login_popup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login-popup/login-popup.service */ "./src/app/login-popup/login-popup.service.ts");
/* harmony import */ var _rant_list_rant_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rant-list/rant-list.service */ "./src/app/rant-list/rant-list.service.ts");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alert/alert.service */ "./src/app/alert/alert.service.ts");






var RantComponent = /** @class */ (function () {
    function RantComponent(devrantApi, loginService, refreshService, alertService) {
        this.devrantApi = devrantApi;
        this.loginService = loginService;
        this.refreshService = refreshService;
        this.alertService = alertService;
        this.alertTitle = "";
        this.alertDescription = "";
        this.alertdata = { "title": "OPPS",
            "description": "You can not vote on your own post" };
    }
    RantComponent.prototype.ngOnInit = function () {
        this.post = this.data;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RantComponent.prototype, "data", void 0);
    RantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-rant",
            template: __webpack_require__(/*! ./rant.component.html */ "./src/app/rant/rant.component.html"),
            styles: [__webpack_require__(/*! ./rant.component.css */ "./src/app/rant/rant.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Service_devrant_api__WEBPACK_IMPORTED_MODULE_2__["DevRantApiService"],
            _login_popup_login_popup_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _rant_list_rant_list_service__WEBPACK_IMPORTED_MODULE_4__["PostListRefreshService"],
            _alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], RantComponent);
    return RantComponent;
}());



/***/ }),

/***/ "./src/app/vote-section/vote-section.component.css":
/*!*********************************************************!*\
  !*** ./src/app/vote-section/vote-section.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZvdGUtc2VjdGlvbi92b3RlLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/vote-section/vote-section.component.html":
/*!**********************************************************!*\
  !*** ./src/app/vote-section/vote-section.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"score\">\r\n    <div class=\"score__up layout--center\" [ngClass]=\"{'checked': id === 1 }\" (click)=\"upVoteClick($event)\">++</div>\r\n    <div class=\"score__board layout--center\">{{post.votes}}</div>\r\n    <div class=\"score__down layout--center\" [ngClass]=\"{'checked': id === -1 }\" (click)=\"downVoteClick($event)\">--</div>\r\n  </div>"

/***/ }),

/***/ "./src/app/vote-section/vote-section.component.ts":
/*!********************************************************!*\
  !*** ./src/app/vote-section/vote-section.component.ts ***!
  \********************************************************/
/*! exports provided: VoteSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteSectionComponent", function() { return VoteSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_devrant_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/devrant_api */ "./src/app/Service/devrant_api.ts");
/* harmony import */ var _login_popup_login_popup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login-popup/login-popup.service */ "./src/app/login-popup/login-popup.service.ts");
/* harmony import */ var _rant_list_rant_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rant-list/rant-list.service */ "./src/app/rant-list/rant-list.service.ts");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alert/alert.service */ "./src/app/alert/alert.service.ts");
/* harmony import */ var _vote_section_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vote-section.service */ "./src/app/vote-section/vote-section.service.ts");
/* harmony import */ var _rant_details_rant_details_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rant-details/rant-details.service */ "./src/app/rant-details/rant-details.service.ts");








var VoteSectionComponent = /** @class */ (function () {
    function VoteSectionComponent(devrantApi, loginService, refreshService, refreshService2, alertService, voteService) {
        this.devrantApi = devrantApi;
        this.loginService = loginService;
        this.refreshService = refreshService;
        this.refreshService2 = refreshService2;
        this.alertService = alertService;
        this.voteService = voteService;
    }
    VoteSectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.voteService.status.subscribe(function (val) {
            _this.post = val;
            console.log("val", val);
            if (_this.post.myVote == 1) {
                _this.addClass(1);
            }
            else if (_this.post.myVote == -1) {
                _this.addClass(-1);
            }
        });
        console.log("vote :", this.data);
        this.post = this.data;
        if (this.post.myVote == 1) {
            this.addClass(1);
        }
        else if (this.post.myVote == -1) {
            this.addClass(-1);
        }
        // console.log("posts",this.data);
    };
    VoteSectionComponent.prototype.addClass = function (id) {
        this.id = id;
    };
    VoteSectionComponent.prototype.upVoteClick = function (e) {
        e.preventDefault();
        if (this.post.myVote == 1) {
            this.resetVote();
        }
        else {
            this.upVote();
        }
    };
    VoteSectionComponent.prototype.downVoteClick = function (e) {
        e.preventDefault();
        if (this.post.myVote == -1) {
            this.resetVote();
        }
        else {
            this.downVote();
        }
    };
    VoteSectionComponent.prototype.upVote = function () {
        var _this = this;
        this.devrantApi.upVote(this.post.id).subscribe(function (data) {
            console.log(data);
            if (data.ok) {
                _this.refreshService.refresh(true);
                _this.refreshService2.refresh(true);
            }
            else {
                if (data.error == "ACCESS_DENIED") {
                    _this.loginService.display(true);
                }
                else if (data.error == "AUTHOR_CANNOT_VOTE") {
                    // this.alertdata={ "title" : "OPPS",
                    // "description" : "You can not vote on your own post"};
                    _this.alertService.display(true);
                }
            }
        });
    };
    VoteSectionComponent.prototype.resetVote = function () {
        var _this = this;
        this.devrantApi.resetVote(this.post.id).subscribe(function (data) {
            console.log(data);
            if (data.ok) {
                _this.refreshService.refresh(true);
                _this.refreshService2.refresh(true);
            }
            else {
                if (data.error == "ACCESS_DENIED") {
                    _this.loginService.display(true);
                }
            }
        });
    };
    VoteSectionComponent.prototype.downVote = function () {
        var _this = this;
        this.devrantApi.downVote(this.post.id).subscribe(function (data) {
            console.log(data);
            if (data.ok) {
                _this.refreshService.refresh(true);
                _this.refreshService2.refresh(true);
            }
            else {
                if (data.error == "ACCESS_DENIED") {
                    _this.loginService.display(true);
                }
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VoteSectionComponent.prototype, "data", void 0);
    VoteSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vote-section',
            template: __webpack_require__(/*! ./vote-section.component.html */ "./src/app/vote-section/vote-section.component.html"),
            styles: [__webpack_require__(/*! ./vote-section.component.css */ "./src/app/vote-section/vote-section.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Service_devrant_api__WEBPACK_IMPORTED_MODULE_2__["DevRantApiService"],
            _login_popup_login_popup_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _rant_list_rant_list_service__WEBPACK_IMPORTED_MODULE_4__["PostListRefreshService"],
            _rant_details_rant_details_service__WEBPACK_IMPORTED_MODULE_7__["PostDetailsRefreshService"],
            _alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"], _vote_section_service__WEBPACK_IMPORTED_MODULE_6__["VoteService"]])
    ], VoteSectionComponent);
    return VoteSectionComponent;
}());



/***/ }),

/***/ "./src/app/vote-section/vote-section.service.ts":
/*!******************************************************!*\
  !*** ./src/app/vote-section/vote-section.service.ts ***!
  \******************************************************/
/*! exports provided: VoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteService", function() { return VoteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");



var VoteService = /** @class */ (function () {
    function VoteService() {
        this.status = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    VoteService.prototype.update = function (value) {
        this.status.next(value);
    };
    VoteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], VoteService);
    return VoteService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dhammika_s\Desktop\New folder (3)\Angular\DevRant\Angular\DevRant\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map