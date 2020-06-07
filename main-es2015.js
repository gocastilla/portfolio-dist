(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");







const routes = [
    {
        path: '',
        component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    },
    {
        path: 'contact',
        component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
    },
    {
        path: '**',
        component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");





class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100%;\n  width: 100%;\n  background-color: #282828;\n}\n[_nghost-%COMP%]    > section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1 1 100%;\n  width: 100%;\n  max-width: 640px;\n  box-sizing: border-box;\n  padding: 32px;\n}\n@media (max-width: 639px) {\n  [_nghost-%COMP%]    > section[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    justify-content: flex-start;\n  }\n}\n[_nghost-%COMP%]    > section[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  box-sizing: border-box;\n  border: 5px solid #000000;\n  color: #161620;\n  background-color: #e9e9df;\n  margin-top: -5px;\n  box-shadow: 10px 10px rgba(0, 0, 0, 0.5);\n  height: auto;\n  min-height: 200px;\n}\n@media (max-width: 639px) {\n  [_nghost-%COMP%]    > section[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%] {\n    margin-top: -0.7vw;\n    border: 0.8vw solid #000000;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhbGJlclxcRG9jdW1lbnRzXFxHaXRIdWJcXHBvcnRmb2xpby9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DOlxcVXNlcnNcXGFsYmVyXFxEb2N1bWVudHNcXEdpdEh1YlxccG9ydGZvbGlvL3NyY1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkNQaUI7QUNNbkI7QUZHRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FFREo7QUZHSTtFQVhGO0lBWUksdUJBQUE7SUFDQSwyQkFBQTtFRUFKO0FBQ0Y7QUZFSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNDL0JPO0VEZ0NQLHlCQ2pDUTtFRGtDUixnQkFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FFQU47QUZFTTtFQWZGO0lBZ0JJLGtCQUFBO0lBQ0EsMkJBQUE7RUVDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgJj5zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleDogMSAxIDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNjQwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMzJweDtcclxuXHJcbiAgICBAbWVkaWEgKCRtZWRpYSkge1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgICY+YXJ0aWNsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgYm9yZGVyOiA1cHggc29saWQgIzAwMDAwMDtcclxuICAgICAgY29sb3I6ICRkYXJrLWNvbG9yO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtY29sb3I7XHJcbiAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAkc2hhZG93LWNvbG9yO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG5cclxuICAgICAgQG1lZGlhICgkbWVkaWEpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMC43dnc7XHJcbiAgICAgICAgYm9yZGVyOiAwLjh2dyBzb2xpZCAjMDAwMDAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWNvbG9yOiAjNGZmNThhO1xyXG4kZGFya2VyLXByaW1hcnktY29sb3I6ICMzNWIzNjI7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xyXG4kbGlnaHQtY29sb3I6ICNlOWU5ZGY7XHJcbiRkYXJrLWNvbG9yOiAjMTYxNjIwO1xyXG4kbWVkaWE6ICdtYXgtd2lkdGg6IDYzOXB4JztcclxuJHNoYWRvdy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcbn1cbjpob3N0ID4gc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4OiAxIDEgMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjQwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDMycHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgOmhvc3QgPiBzZWN0aW9uIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbn1cbjpob3N0ID4gc2VjdGlvbiA+IGFydGljbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDAwMDA7XG4gIGNvbG9yOiAjMTYxNjIwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWRmO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIDpob3N0ID4gc2VjdGlvbiA+IGFydGljbGUge1xuICAgIG1hcmdpbi10b3A6IC0wLjd2dztcbiAgICBib3JkZXI6IDAuOHZ3IHNvbGlkICMwMDAwMDA7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _components_funny_button_funny_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/funny-button/funny-button.component */ "./src/app/components/funny-button/funny-button.component.ts");
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/seo/seo.service */ "./src/app/services/seo/seo.service.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_10__["SeoService"]], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
        _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
        _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
        _components_funny_button_funny_button_component__WEBPACK_IMPORTED_MODULE_9__["FunnyButtonComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
                    _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                    _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                    _components_funny_button_funny_button_component__WEBPACK_IMPORTED_MODULE_9__["FunnyButtonComponent"]
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
                providers: [_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_10__["SeoService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Copyright (c) 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Alberto G\u00F3mez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 16px;\n  text-align: center;\n  border-top: 5px solid #000000;\n  color: #161620;\n  background-color: #e9e9df;\n  margin-top: 70px;\n}\n[_nghost-%COMP%]   app-funny-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -80px;\n  right: 30px;\n}\n@media (max-width: 639px) {\n  [_nghost-%COMP%] {\n    border-top: 0.8vw solid #000000;\n    line-height: 24px;\n  }\n  [_nghost-%COMP%]   strong[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxhbGJlclxcRG9jdW1lbnRzXFxHaXRIdWJcXHBvcnRmb2xpby9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL0M6XFxVc2Vyc1xcYWxiZXJcXERvY3VtZW50c1xcR2l0SHViXFxwb3J0Zm9saW8vc3JjXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQ05XO0VET1gseUJDUlk7RURTWixnQkFBQTtBRURGO0FGR0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FFREo7QUZJRTtFQWxCRjtJQW1CSSwrQkFBQTtJQUNBLGlCQUFBO0VFREY7RUZHRTtJQUNFLGNBQUE7RUVESjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgY29sb3I6ICRkYXJrLWNvbG9yO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1jb2xvcjtcclxuICBtYXJnaW4tdG9wOiA3MHB4O1xyXG5cclxuICBhcHAtZnVubnktYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTgwcHg7XHJcbiAgICByaWdodDogMzBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAoJG1lZGlhKSB7XHJcbiAgICBib3JkZXItdG9wOiAwLjh2dyBzb2xpZCAjMDAwMDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcblxyXG4gICAgc3Ryb25nIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWNvbG9yOiAjNGZmNThhO1xyXG4kZGFya2VyLXByaW1hcnktY29sb3I6ICMzNWIzNjI7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xyXG4kbGlnaHQtY29sb3I6ICNlOWU5ZGY7XHJcbiRkYXJrLWNvbG9yOiAjMTYxNjIwO1xyXG4kbWVkaWE6ICdtYXgtd2lkdGg6IDYzOXB4JztcclxuJHNoYWRvdy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMDAwMDAwO1xuICBjb2xvcjogIzE2MTYyMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTlkZjtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cbjpob3N0IGFwcC1mdW5ueS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTgwcHg7XG4gIHJpZ2h0OiAzMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIDpob3N0IHtcbiAgICBib3JkZXItdG9wOiAwLjh2dyBzb2xpZCAjMDAwMDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB9XG4gIDpob3N0IHN0cm9uZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/funny-button/funny-button.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/funny-button/funny-button.component.ts ***!
  \*******************************************************************/
/*! exports provided: FunnyButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunnyButtonComponent", function() { return FunnyButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "click": a0 }; };
const _c1 = function () { return ["active"]; };
const _c2 = function () { return { exact: true }; };
const _c3 = ["*"];
class FunnyButtonComponent {
    constructor() { }
    hover(event) {
        if (!this.click) {
            this.click = true;
            setTimeout(() => {
                this.click = false;
            }, 300);
        }
    }
}
FunnyButtonComponent.ɵfac = function FunnyButtonComponent_Factory(t) { return new (t || FunnyButtonComponent)(); };
FunnyButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FunnyButtonComponent, selectors: [["app-funny-button"]], inputs: { routerLink: "routerLink" }, ngContentSelectors: _c3, decls: 2, vars: 8, consts: [[3, "routerLink", "ngClass", "routerLinkActive", "routerLinkActiveOptions", "click"]], template: function FunnyButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FunnyButtonComponent_Template_a_click_0_listener($event) { return ctx.hover($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.routerLink)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.click))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 100%;\n  position: relative;\n  width: auto;\n  height: 60px;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  padding: 0 15px;\n  height: 50px;\n  width: auto;\n  color: #161620;\n  background-color: #e9e9df;\n  box-shadow: 10px 10px rgba(0, 0, 0, 0.5);\n  border: 5px solid #000000;\n  text-decoration: none;\n  transition: background-color 0.1s;\n}\n@media (max-width: 639px) {\n  [_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n    border: 0.8vw solid #000000;\n  }\n}\n[_nghost-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: #4ff58a;\n}\n[_nghost-%COMP%]   a.click[_ngcontent-%COMP%] {\n  -webkit-animation: clickEffect 0.25s 0s 1 ease-out;\n          animation: clickEffect 0.25s 0s 1 ease-out;\n}\n@-webkit-keyframes clickEffect {\n  0% {\n    transform: translateX(0) translateY(0);\n    box-shadow: 10px 10px rgba(0, 0, 0, 0.5);\n  }\n  50% {\n    transform: translateX(5px) translateY(5px);\n    box-shadow: 0px 0px rgba(0, 0, 0, 0.5);\n  }\n  100% {\n    transform: translateX(0) translateY(0);\n    box-shadow: 10px 10px rgba(0, 0, 0, 0.5);\n  }\n}\n@keyframes clickEffect {\n  0% {\n    transform: translateX(0) translateY(0);\n    box-shadow: 10px 10px rgba(0, 0, 0, 0.5);\n  }\n  50% {\n    transform: translateX(5px) translateY(5px);\n    box-shadow: 0px 0px rgba(0, 0, 0, 0.5);\n  }\n  100% {\n    transform: translateX(0) translateY(0);\n    box-shadow: 10px 10px rgba(0, 0, 0, 0.5);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mdW5ueS1idXR0b24vQzpcXFVzZXJzXFxhbGJlclxcRG9jdW1lbnRzXFxHaXRIdWJcXHBvcnRmb2xpby9zcmNcXGFwcFxcY29tcG9uZW50c1xcZnVubnktYnV0dG9uXFxmdW5ueS1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZnVubnktYnV0dG9uL2Z1bm55LWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mdW5ueS1idXR0b24vQzpcXFVzZXJzXFxhbGJlclxcRG9jdW1lbnRzXFxHaXRIdWJcXHBvcnRmb2xpby9zcmNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREY7QURHRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNFZlM7RUZnQlQseUJFakJVO0VGa0JWLHdDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0FDREo7QURHSTtFQWhCRjtJQWlCSSwyQkFBQTtFQ0FKO0FBQ0Y7QURFSTtFQUNFLHlCRS9CVTtBRCtCaEI7QURHSTtFQWtCRSxrREFBQTtVQUFBLDBDQUFBO0FDbEJOO0FEQ007RUFDRTtJQUNFLHNDQUFBO0lBQ0Esd0NBQUE7RUNDUjtFREVNO0lBQ0UsMENBQUE7SUFDQSxzQ0FBQTtFQ0FSO0VER007SUFDRSxzQ0FBQTtJQUNBLHdDQUFBO0VDRFI7QUFDRjtBRGJNO0VBQ0U7SUFDRSxzQ0FBQTtJQUNBLHdDQUFBO0VDQ1I7RURFTTtJQUNFLDBDQUFBO0lBQ0Esc0NBQUE7RUNBUjtFREdNO0lBQ0Usc0NBQUE7SUFDQSx3Q0FBQTtFQ0RSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Z1bm55LWJ1dHRvbi9mdW5ueS1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogNjBweDtcclxuXHJcbiAgYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGNvbG9yOiAkZGFyay1jb2xvcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1jb2xvcjtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAkc2hhZG93LWNvbG9yO1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzAwMDAwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcztcclxuXHJcbiAgICBAbWVkaWEgKCRtZWRpYSkge1xyXG4gICAgICBib3JkZXI6IDAuOHZ3IHNvbGlkICMwMDAwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAmLmNsaWNrIHtcclxuICAgICAgQGtleWZyYW1lcyBjbGlja0VmZmVjdCB7XHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggJHNoYWRvdy1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDUwJSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KSB0cmFuc2xhdGVZKDVweCk7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4ICRzaGFkb3ctY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4ICRzaGFkb3ctY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBhbmltYXRpb246IGNsaWNrRWZmZWN0IDAuMjVzIDBzIDEgZWFzZS1vdXQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNjBweDtcbn1cbjpob3N0IGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBjb2xvcjogIzE2MTYyMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTlkZjtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXM7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgOmhvc3QgYSB7XG4gICAgYm9yZGVyOiAwLjh2dyBzb2xpZCAjMDAwMDAwO1xuICB9XG59XG46aG9zdCBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZmY1OGE7XG59XG46aG9zdCBhLmNsaWNrIHtcbiAgYW5pbWF0aW9uOiBjbGlja0VmZmVjdCAwLjI1cyAwcyAxIGVhc2Utb3V0O1xufVxuQGtleWZyYW1lcyBjbGlja0VmZmVjdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgwKTtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCkgdHJhbnNsYXRlWSg1cHgpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDApO1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIH1cbn0iLCIkcHJpbWFyeS1jb2xvcjogIzRmZjU4YTtcclxuJGRhcmtlci1wcmltYXJ5LWNvbG9yOiAjMzViMzYyO1xyXG4kYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcclxuJGxpZ2h0LWNvbG9yOiAjZTllOWRmO1xyXG4kZGFyay1jb2xvcjogIzE2MTYyMDtcclxuJG1lZGlhOiAnbWF4LXdpZHRoOiA2MzlweCc7XHJcbiRzaGFkb3ctY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FunnyButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-funny-button',
                templateUrl: './funny-button.component.html',
                styleUrls: ['./funny-button.component.scss']
            }]
    }], function () { return []; }, { routerLink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _funny_button_funny_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../funny-button/funny-button.component */ "./src/app/components/funny-button/funny-button.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 6, vars: 0, consts: [["routerLink", "/"], ["routerLink", "/contact"], ["src", "../../../assets/images/me.png", "alt", "Me", 1, "me"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-funny-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-funny-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);
    } }, directives: [_funny_button_funny_button_component__WEBPACK_IMPORTED_MODULE_1__["FunnyButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n[_nghost-%COMP%]   nav[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n  list-style-type: none;\n}\n[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   app-funny-button[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   .me[_ngcontent-%COMP%] {\n  display: block;\n  box-sizing: border-box;\n  width: 86.81%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxhbGJlclxcRG9jdW1lbnRzXFxHaXRIdWJcXHBvcnRmb2xpby9zcmNcXGFwcFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDREY7QURHRTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNESjtBREdJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0ROO0FES0U7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBuYXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHJcbiAgICBhcHAtZnVubnktYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDg2LjgxJTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IG5hdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuOmhvc3QgbmF2IGFwcC1mdW5ueS1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbjpob3N0IC5tZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogODYuODElO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/seo/seo.service */ "./src/app/services/seo/seo.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class AboutComponent {
    constructor(seoService) {
        this.seoService = seoService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.seoService.setTitle('Alberto Gómez');
        setTimeout(() => {
            this.isLoading = false;
        }, 100);
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__["SeoService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 21, vars: 1, consts: [[1, "page", 3, "ngClass"], ["type", "1", "start", "0"], ["href", "https://en.wikipedia.org/wiki/Province_of_Almer%C3%ADa", "target", "_blank"], ["href", "https://coderty.com", "target", "_blank"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hi, my name is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Alberto G\u00F3mez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " and:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "I'm a web developer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Focused on user experience and interfaces.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Living in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Almer\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " And working at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Coderty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isLoading ? "loading" : "ready");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.page[_ngcontent-%COMP%] {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  opacity: 0;\n  padding: 16px 32px 16px;\n  transition: padding 0.5s, opacity 0.5s;\n}\n\n.page.ready[_ngcontent-%COMP%] {\n  padding: 32px 32px 0;\n  opacity: 1;\n}\n\n.page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 24px;\n  padding-bottom: 32px;\n}\n\n.page[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #35b362;\n  font-weight: 600;\n}\n\n[_nghost-%COMP%] {\n  padding-bottom: 32px;\n}\n\nol[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 35px;\n  line-height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvQzpcXFVzZXJzXFxhbGJlclxcRG9jdW1lbnRzXFxHaXRIdWJcXHBvcnRmb2xpby9zcmNcXHN0eWxlc1xcX21peGlucy5zY3NzIiwic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWJvdXQvQzpcXFVzZXJzXFxhbGJlclxcRG9jdW1lbnRzXFxHaXRIdWJcXHBvcnRmb2xpby9zcmNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9hYm91dC9DOlxcVXNlcnNcXGFsYmVyXFxEb2N1bWVudHNcXEdpdEh1YlxccG9ydGZvbGlvL3NyY1xcYXBwXFxwYWdlc1xcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUNBSjs7QURHRTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQ0FBQTtBQ0FKOztBREVJO0VBQ0Usb0JBQUE7RUFDQSxVQUFBO0FDQU47O0FER0k7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0ROOztBRElJO0VBQ0UscUJBQUE7RUFDQSxjRTFCaUI7RUYyQmpCLGdCQUFBO0FDRk47O0FFckJBO0VBQ0Usb0JBQUE7QUZ3QkY7O0FFckJBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUZ3QkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBwYWdlKCkge1xyXG4gIDpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAucGFnZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDMycHggMTZweDtcclxuICAgIHRyYW5zaXRpb246IHBhZGRpbmcgMC41cywgb3BhY2l0eSAwLjVzO1xyXG5cclxuICAgICYucmVhZHkge1xyXG4gICAgICBwYWRkaW5nOiAzMnB4IDMycHggMDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgY29sb3I6ICRkYXJrZXItcHJpbWFyeS1jb2xvcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwO1xuICBwYWRkaW5nOiAxNnB4IDMycHggMTZweDtcbiAgdHJhbnNpdGlvbjogcGFkZGluZyAwLjVzLCBvcGFjaXR5IDAuNXM7XG59XG4ucGFnZS5yZWFkeSB7XG4gIHBhZGRpbmc6IDMycHggMzJweCAwO1xuICBvcGFjaXR5OiAxO1xufVxuLnBhZ2UgcCB7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xufVxuLnBhZ2UgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMzNWIzNjI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbjpob3N0IHtcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XG59XG5cbm9sIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufSIsIiRwcmltYXJ5LWNvbG9yOiAjNGZmNThhO1xyXG4kZGFya2VyLXByaW1hcnktY29sb3I6ICMzNWIzNjI7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xyXG4kbGlnaHQtY29sb3I6ICNlOWU5ZGY7XHJcbiRkYXJrLWNvbG9yOiAjMTYxNjIwO1xyXG4kbWVkaWE6ICdtYXgtd2lkdGg6IDYzOXB4JztcclxuJHNoYWRvdy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL21peGluc1wiO1xyXG5cclxuQGluY2x1ZGUgcGFnZSgpO1xyXG5cclxuOmhvc3Qge1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xyXG59XHJcblxyXG5vbCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMzVweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return [{ type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__["SeoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/seo/seo.service */ "./src/app/services/seo/seo.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class ContactComponent {
    constructor(seoService) {
        this.seoService = seoService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.seoService.setTitle('Contact - Alberto Gómez');
        setTimeout(() => {
            this.isLoading = false;
        }, 100);
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__["SeoService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 14, vars: 1, consts: [[1, "page", 3, "ngClass"], ["href", "https://github.com/gocastilla", "target", "_blank"], ["href", "https://twitter.com/gocastilla", "target", "_blank"], ["href", "mailto:hi@albertogomez.dev"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "I spend (most of) the day on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "You can send me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "an email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ", I suppose. (Greetings, traveler from the past)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isLoading ? "loading" : "ready");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.page[_ngcontent-%COMP%] {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  opacity: 0;\n  padding: 16px 32px 16px;\n  transition: padding 0.5s, opacity 0.5s;\n}\n\n.page.ready[_ngcontent-%COMP%] {\n  padding: 32px 32px 0;\n  opacity: 1;\n}\n\n.page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 24px;\n  padding-bottom: 32px;\n}\n\n.page[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #35b362;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9DOlxcVXNlcnNcXGFsYmVyXFxEb2N1bWVudHNcXEdpdEh1YlxccG9ydGZvbGlvL3NyY1xcc3R5bGVzXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29udGFjdC9DOlxcVXNlcnNcXGFsYmVyXFxEb2N1bWVudHNcXEdpdEh1YlxccG9ydGZvbGlvL3NyY1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdFO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FDQUo7O0FERUk7RUFDRSxvQkFBQTtFQUNBLFVBQUE7QUNBTjs7QURHSTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDRE47O0FESUk7RUFDRSxxQkFBQTtFQUNBLGNFMUJpQjtFRjJCakIsZ0JBQUE7QUNGTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBwYWdlKCkge1xyXG4gIDpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAucGFnZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDMycHggMTZweDtcclxuICAgIHRyYW5zaXRpb246IHBhZGRpbmcgMC41cywgb3BhY2l0eSAwLjVzO1xyXG5cclxuICAgICYucmVhZHkge1xyXG4gICAgICBwYWRkaW5nOiAzMnB4IDMycHggMDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgY29sb3I6ICRkYXJrZXItcHJpbWFyeS1jb2xvcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwO1xuICBwYWRkaW5nOiAxNnB4IDMycHggMTZweDtcbiAgdHJhbnNpdGlvbjogcGFkZGluZyAwLjVzLCBvcGFjaXR5IDAuNXM7XG59XG4ucGFnZS5yZWFkeSB7XG4gIHBhZGRpbmc6IDMycHggMzJweCAwO1xuICBvcGFjaXR5OiAxO1xufVxuLnBhZ2UgcCB7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xufVxuLnBhZ2UgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMzNWIzNjI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59IiwiJHByaW1hcnktY29sb3I6ICM0ZmY1OGE7XHJcbiRkYXJrZXItcHJpbWFyeS1jb2xvcjogIzM1YjM2MjtcclxuJGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XHJcbiRsaWdodC1jb2xvcjogI2U5ZTlkZjtcclxuJGRhcmstY29sb3I6ICMxNjE2MjA7XHJcbiRtZWRpYTogJ21heC13aWR0aDogNjM5cHgnO1xyXG4kc2hhZG93LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return [{ type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__["SeoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/seo/seo.service */ "./src/app/services/seo/seo.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class NotFoundComponent {
    constructor(seoService) {
        this.seoService = seoService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.seoService.setTitle('Page not found - Alberto Gómez');
        setTimeout(() => {
            this.isLoading = false;
        }, 100);
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__["SeoService"])); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 3, vars: 1, consts: [[1, "page", 3, "ngClass"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404 // Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isLoading ? "loading" : "ready");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.page[_ngcontent-%COMP%] {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  opacity: 0;\n  padding: 16px 32px 16px;\n  transition: padding 0.5s, opacity 0.5s;\n}\n\n.page.ready[_ngcontent-%COMP%] {\n  padding: 32px 32px 0;\n  opacity: 1;\n}\n\n.page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 24px;\n  padding-bottom: 32px;\n}\n\n.page[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #35b362;\n  font-weight: 600;\n}\n\n[_nghost-%COMP%] {\n  padding-bottom: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL0M6XFxVc2Vyc1xcYWxiZXJcXERvY3VtZW50c1xcR2l0SHViXFxwb3J0Zm9saW8vc3JjXFxzdHlsZXNcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL0M6XFxVc2Vyc1xcYWxiZXJcXERvY3VtZW50c1xcR2l0SHViXFxwb3J0Zm9saW8vc3JjXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL0M6XFxVc2Vyc1xcYWxiZXJcXERvY3VtZW50c1xcR2l0SHViXFxwb3J0Zm9saW8vc3JjXFxhcHBcXHBhZ2VzXFxub3QtZm91bmRcXG5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0U7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0NBQUE7QUNBSjs7QURFSTtFQUNFLG9CQUFBO0VBQ0EsVUFBQTtBQ0FOOztBREdJO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNETjs7QURJSTtFQUNFLHFCQUFBO0VBQ0EsY0UxQmlCO0VGMkJqQixnQkFBQTtBQ0ZOOztBRXJCQTtFQUNFLG9CQUFBO0FGd0JGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBwYWdlKCkge1xyXG4gIDpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAucGFnZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDMycHggMTZweDtcclxuICAgIHRyYW5zaXRpb246IHBhZGRpbmcgMC41cywgb3BhY2l0eSAwLjVzO1xyXG5cclxuICAgICYucmVhZHkge1xyXG4gICAgICBwYWRkaW5nOiAzMnB4IDMycHggMDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgY29sb3I6ICRkYXJrZXItcHJpbWFyeS1jb2xvcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwO1xuICBwYWRkaW5nOiAxNnB4IDMycHggMTZweDtcbiAgdHJhbnNpdGlvbjogcGFkZGluZyAwLjVzLCBvcGFjaXR5IDAuNXM7XG59XG4ucGFnZS5yZWFkeSB7XG4gIHBhZGRpbmc6IDMycHggMzJweCAwO1xuICBvcGFjaXR5OiAxO1xufVxuLnBhZ2UgcCB7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xufVxuLnBhZ2UgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMzNWIzNjI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbjpob3N0IHtcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XG59IiwiJHByaW1hcnktY29sb3I6ICM0ZmY1OGE7XHJcbiRkYXJrZXItcHJpbWFyeS1jb2xvcjogIzM1YjM2MjtcclxuJGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XHJcbiRsaWdodC1jb2xvcjogI2U5ZTlkZjtcclxuJGRhcmstY29sb3I6ICMxNjE2MjA7XHJcbiRtZWRpYTogJ21heC13aWR0aDogNjM5cHgnO1xyXG4kc2hhZG93LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvbWl4aW5zJztcclxuXHJcbkBpbmNsdWRlIHBhZ2UoKTtcclxuXHJcbjpob3N0IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss']
            }]
    }], function () { return [{ type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__["SeoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/seo/seo.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/seo/seo.service.ts ***!
  \*********************************************/
/*! exports provided: SeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoService", function() { return SeoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class SeoService {
    constructor(title, meta) {
        this.title = title;
        this.meta = meta;
    }
    setTitle(titleText) {
        this.title.setTitle(titleText);
    }
    setDescription(descriptionText) {
        this.meta.updateTag({ name: 'description', content: descriptionText });
    }
}
SeoService.ɵfac = function SeoService_Factory(t) { return new (t || SeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"])); };
SeoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SeoService, factory: SeoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\alber\Documents\GitHub\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map