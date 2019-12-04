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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet (activate)=\"onActivate($event)\" ></router-outlet>\r\n \r\n \r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ClientApp';
    }
    AppComponent.prototype.onActivate = function (event) {
        window.scroll(0, 0);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routing.module */ "./src/app/routing.module.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _modules_shared_module_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/shared-module/shared.module */ "./src/app/modules/shared-module/shared.module.ts");
/* harmony import */ var _modules_worksheet_module_worksheet_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/worksheet-module/worksheet.module */ "./src/app/modules/worksheet-module/worksheet.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//system imports







//App Imports


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _modules_worksheet_module_worksheet_module__WEBPACK_IMPORTED_MODULE_8__["WorkSheetModule"],
                _modules_shared_module_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"].forRoot(),
                _routing_module__WEBPACK_IMPORTED_MODULE_4__["routing"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/shared-module/components/worksheet-grid-row.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/shared-module/components/worksheet-grid-row.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<form [formGroup]=\"WorkSheetEntryForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n  <td>\r\n    <input type=\"text\" formControlName=\"title\" />\r\n    <div *ngIf=\"submitted && workSheetForm.title.errors\">\r\n      <div *ngIf=\"workSheetForm.title.errors.required\">Title is required</div>\r\n    </div>\r\n  </td>\r\n  <td>\r\n    <p-dropdown [options]=\"workType\"\r\n                optionLabel=\"name\"\r\n                placeholder=\"Please select a Type\"\r\n                formControlName=\"type\"\r\n                defaultLabel=\"Select Type\"\r\n                [showClear]=\"true\" [filter]=\"true\" [autoWidth]=\"false\"></p-dropdown>\r\n\r\n    <div *ngIf=\"submitted && workSheetForm.type.errors\">\r\n      <div *ngIf=\"workSheetForm.type.errors.required\">Type is required</div>\r\n    </div>\r\n  </td>\r\n  <td>\r\n    <input type=\"text\" formControlName=\"duration\" />\r\n    <div *ngIf=\"submitted && workSheetForm.duration.errors\">\r\n      <div *ngIf=\"workSheetForm.duration.errors.required\">Duration is required</div>\r\n      Please enter a duration in hh:mm format\r\n    </div>\r\n  </td>\r\n  <td>\r\n    <input type=\"text\" formControlName=\"hourlyrate\" />\r\n    <div *ngIf=\"submitted && workSheetForm.hourlyrate.errors\">\r\n      Please enter a valid number for hourly rate\r\n    </div>\r\n  </td>\r\n  <td>\r\n    {{calculateTotal}}\r\n  </td>\r\n  \r\n  <td>\r\n\r\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Save\" />\r\n    &nbsp;\r\n    <input type=\"button\" class=\"btn btn-secondary\" value=\"Cancel\" />\r\n  </td>\r\n</form>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/shared-module/components/worksheet-grid-row.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shared-module/components/worksheet-grid-row.component.ts ***!
  \**********************************************************************************/
/*! exports provided: WorkSheetGridRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkSheetGridRow", function() { return WorkSheetGridRow; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkSheetGridRow = /** @class */ (function () {
    function WorkSheetGridRow(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.regexValidDecimal = /^\d+(\.\d{1,2})?$/;
        this.regexValidDuration = /^\d+([:][0-5][0-9])?$/;
        //init work types..
        this.workType = [
            { value: "1", name: "Telephone Call" },
            { value: "2", name: "Research " },
            { value: "3", name: "Drafting Document " }
        ];
    }
    Object.defineProperty(WorkSheetGridRow.prototype, "workSheetForm", {
        get: function () {
            return this.WorkSheetEntryForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    WorkSheetGridRow.prototype.ngOnInit = function () {
        //Init Reactive form for new work sheet entry. the same will be used for Edit..
        this.WorkSheetEntryForm = this.formBuilder.group({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.rowData.title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'type': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((this.rowData.typeId == null ? null : this.getWorkTypeValue(this.rowData.typeId)), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'duration': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.rowData.duration, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.regexValidDuration)]),
            'hourlyrate': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.rowData.hourlyrate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.regexValidDecimal)),
        });
    };
    WorkSheetGridRow.prototype.getWorkTypeValue = function (value) {
        return this.workType.filter(function (obj) { return obj.value == value; })[0];
    };
    Object.defineProperty(WorkSheetGridRow.prototype, "calculateTotal", {
        get: function () {
            if (this.workSheetForm.duration.valid && this.workSheetForm.hourlyrate.valid) {
                debugger;
                var durration = this.workSheetForm.duration;
                var rate = this.workSheetForm.hourlyrate.value.length == 0 ? this.rowData : parseFloat(this.workSheetForm.hourlyrate.value);
                //if (durration != null) {
                //  var minutes = durration.getMinutes();
                //  if (minutes)
                //    var rate = this.workSheetNewRow.hourlyrate.length == 0 ? this.defaultHourlyRate : parseFloat(this.workSheetNewRow.hourlyrate);
                //}
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    WorkSheetGridRow.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.WorkSheetEntryForm.invalid) {
            return;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("rowData"),
        __metadata("design:type", Object)
    ], WorkSheetGridRow.prototype, "rowData", void 0);
    WorkSheetGridRow = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            //We have to display the component tag as <TR> so enclosed the selector in []
            selector: '[worksheet-row]',
            template: __webpack_require__(/*! ./worksheet-grid-row.component.html */ "./src/app/modules/shared-module/components/worksheet-grid-row.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], WorkSheetGridRow);
    return WorkSheetGridRow;
}());



/***/ }),

/***/ "./src/app/modules/shared-module/components/worksheet-grid.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/shared-module/components/worksheet-grid.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\r\n  <div class=\"row\">\r\n    <div class=\"col-2\">\r\n      <input type=\"button\" value=\"Add New\" class=\"btn btn-primary\" (click)=\"addNewRow();\" />\r\n    </div>\r\n    <div class=\"col-2\">\r\n      <input type=\"button\" value=\"Submit\" class=\"btn btn-primary\" (click)=\"addNewRow();\" />\r\n    </div>\r\n  </div> \r\n\r\n  <table>\r\n    <tr>\r\n      <th>Title</th>\r\n      <th>Type</th>\r\n      <th>Duration</th>\r\n      <th>Hourly Rate</th>\r\n      <th>Total</th>\r\n      <th></th>\r\n    </tr>\r\n\r\n      <tr worksheet-row *ngIf=\"isAddMode\" [rowData]=\"workSheetNewRow\"></tr>\r\n  \r\n  </table>\r\n\r\n  \r\n\r\n  <!--\r\n  <p>\r\n    Default Hourly Rate:${{defaultHourlyRate}}\r\n  </p>\r\n\r\n  <div class=\"col-12\">\r\n    <p-table [value]=\"workSheetData\" editMode=\"row\">\r\n      <ng-template pTemplate=\"header\">\r\n        <tr>\r\n          <th>Title</th>\r\n          <th>Type</th>\r\n          <th>Duration</th>\r\n          <th>Hourly Rate</th>\r\n          <th>Total</th>\r\n          <th></th>\r\n        </tr>\r\n        <tr *ngIf=\"isAddMode\">\r\n          <td>\r\n            <input type=\"text\" [(ngModel)]=\"workSheetNewRow.title\">\r\n\r\n          </td>\r\n          <td>\r\n\r\n            <p-dropdown [options]=\"workType\" optionLabel=\"name\" [(ngModel)]=\"selectedWorkType\"></p-dropdown>\r\n\r\n          </td>\r\n          <td>\r\n            <p-calendar [(ngModel)]=\"workSheetNewRow.duration\" [timeOnly]=\"true\"></p-calendar>\r\n            \\\r\n          </td>\r\n          <td>\r\n\r\n            <input type=\"text\" [(ngModel)]=\"workSheetNewRow.hourlyrate\">\r\n          </td>\r\n          <td>{{calculateTotal}}</td>\r\n          <td style=\"text-align:center\">\r\n            <input type=\"button\" class=\"btn btn-primary\" value=\"Save\" (click)=\"saveTimeSheetEnty();\" />\r\n            &nbsp;\r\n            <input type=\"button\" class=\"btn btn-secondary\" value=\"Cancel\" (click)=\"isAddMode=false;\" />\r\n          </td>\r\n        </tr>\r\n\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-rowData let-editing=\"editing\" let-ri=\"rowIndex\">\r\n        <tr [pEditableRow]=\"rowData\">\r\n\r\n          <td>\r\n            <p-cellEditor>\r\n              <ng-template pTemplate=\"input\">\r\n                <input pInputText type=\"text\" [(ngModel)]=\"rowData.state\" required [ngStyle]=\"{'width':'100%'}\">\r\n              </ng-template>\r\n              <ng-template pTemplate=\"output\">\r\n                {{rowData.title}}\r\n              </ng-template>\r\n            </p-cellEditor>\r\n          </td>\r\n          <td>\r\n            <p-cellEditor>\r\n              <ng-template pTemplate=\"input\">\r\n                <p-dropdown [options]=\"workType\" optionLabel=\"name\" [(ngModel)]=\"selectedWorkType\" [style]=\"{'width':'100%'}\"></p-dropdown>\r\n              </ng-template>\r\n              <ng-template pTemplate=\"output\">\r\n                {{rowData.type}}\r\n              </ng-template>\r\n            </p-cellEditor>\r\n          </td>\r\n\r\n          <td>\r\n            <p-cellEditor>\r\n              <ng-template pTemplate=\"input\">\r\n                <input pInputText type=\"text\" [(ngModel)]=\"rowData.duration\" [ngStyle]=\"{'width':'100%'}\">\r\n              </ng-template>\r\n              <ng-template pTemplate=\"output\">\r\n                {{rowData.duration}}\r\n              </ng-template>\r\n            </p-cellEditor>\r\n          </td>\r\n          <td>\r\n            <p-cellEditor>\r\n              <ng-template pTemplate=\"input\">\r\n                <input pInputText type=\"text\" [(ngModel)]=\"rowData.hourlyrate\" [ngStyle]=\"{'width':'100%'}\">\r\n              </ng-template>\r\n              <ng-template pTemplate=\"output\">\r\n                {{rowData.hourlyrate}}\r\n              </ng-template>\r\n            </p-cellEditor>\r\n          </td>\r\n          <td>\r\n            <p-cellEditor>\r\n              <ng-template pTemplate=\"input\">\r\n                <input pInputText type=\"text\" [(ngModel)]=\"rowData.total\" [ngStyle]=\"{'width':'100%'}\">\r\n              </ng-template>\r\n              <ng-template pTemplate=\"output\">\r\n                {{rowData.total}}\r\n              </ng-template>\r\n            </p-cellEditor>\r\n          </td>\r\n\r\n          <td style=\"text-align:center\">\r\n            <button *ngIf=\"!editing\" type=\"button\" id=\"{{rowData.recordId}}\" pInitEditableRow class=\"btn btn-primary\" (click)=\"onRowEditInit(rowData)\">Edit</button>\r\n            <button *ngIf=\"editing\" type=\"button\" pSaveEditableRow class=\"btn btn-primary\" style=\"margin-right: .5em\" (click)=\"onRowEditSave(rowData)\"> Save</button>\r\n            <button *ngIf=\"editing\" type=\"button\" pCancelEditableRow class=\"btn btn-primary\" (click)=\"onRowEditCancel(rowData, ri)\"> Cancel</button>\r\n            <button *ngIf=\"!editing\" type=\"button\" style=\"margin-right: .5em\" class=\"btn btn-danger\"> Delete</button>\r\n\r\n          </td>\r\n\r\n        </tr>\r\n\r\n\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n\r\n\r\n\r\n  -->\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/shared-module/components/worksheet-grid.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/shared-module/components/worksheet-grid.component.ts ***!
  \******************************************************************************/
/*! exports provided: WorkSheetGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkSheetGrid", function() { return WorkSheetGrid; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkSheetGrid = /** @class */ (function () {
    function WorkSheetGrid(renderer, elem) {
        this.renderer = renderer;
        this.elem = elem;
        this.workSheetData = [];
        this.defaultHourlyRate = 250.50;
        this.clonedRecord = {};
        this.isAddMode = false;
        this.workType = [
            { value: "1", name: "Telephone Call" },
            { value: "2", name: "Research " },
            { value: "3", name: "Drafting Document " }
        ];
    }
    WorkSheetGrid.prototype.onRowEditInit = function (workSheetModel) {
        debugger;
        this.clonedRecord[workSheetModel.recordId] = __assign({}, workSheetModel);
    };
    WorkSheetGrid.prototype.addNewRow = function () {
        this.isAddMode = true;
        this.workSheetNewRow = { recordId: this.maxRecordId, state: 1, title: "", type: "", typeId: "", duration: "", defaultRate: this.defaultHourlyRate, hourlyrate: "", total: "" };
    };
    WorkSheetGrid.prototype.saveTimeSheetEnty = function () {
        this.workSheetNewRow.typeId = this.selectedWorkType.value;
        this.workSheetNewRow.type = this.selectedWorkType.name;
        this.workSheetData.push(this.workSheetNewRow);
        this.isAddMode = false;
    };
    Object.defineProperty(WorkSheetGrid.prototype, "maxRecordId", {
        get: function () {
            return this.workSheetData.length + 1;
            ;
        },
        enumerable: true,
        configurable: true
    });
    WorkSheetGrid = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'worksheet-grid',
            template: __webpack_require__(/*! ./worksheet-grid.component.html */ "./src/app/modules/shared-module/components/worksheet-grid.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], WorkSheetGrid);
    return WorkSheetGrid;
}());



/***/ }),

/***/ "./src/app/modules/shared-module/shared.module.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/shared-module/shared.module.ts ***!
  \********************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_worksheet_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/worksheet-grid.component */ "./src/app/modules/shared-module/components/worksheet-grid.component.ts");
/* harmony import */ var _components_worksheet_grid_row_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/worksheet-grid-row.component */ "./src/app/modules/shared-module/components/worksheet-grid-row.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//angular imports..





//PrimNG



//App import 

//App import 

var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1
        };
    };
    var SharedModule_1;
    SharedModule = SharedModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_worksheet_grid_component__WEBPACK_IMPORTED_MODULE_8__["WorkSheetGrid"],
                _components_worksheet_grid_row_component__WEBPACK_IMPORTED_MODULE_9__["WorkSheetGridRow"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"]
            ],
            exports: [
                _components_worksheet_grid_component__WEBPACK_IMPORTED_MODULE_8__["WorkSheetGrid"],
                _components_worksheet_grid_row_component__WEBPACK_IMPORTED_MODULE_9__["WorkSheetGridRow"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/modules/worksheet-module/components/worksheet.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/worksheet-module/components/worksheet.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n \r\n<worksheet-grid  ></worksheet-grid>\r\n"

/***/ }),

/***/ "./src/app/modules/worksheet-module/components/worksheet.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/worksheet-module/components/worksheet.component.ts ***!
  \****************************************************************************/
/*! exports provided: WorkSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkSheet", function() { return WorkSheet; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WorkSheet = /** @class */ (function () {
    function WorkSheet() {
    }
    WorkSheet.prototype.ngOnInit = function () {
    };
    WorkSheet = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'worksheet',
            template: __webpack_require__(/*! ./worksheet.component.html */ "./src/app/modules/worksheet-module/components/worksheet.component.html"),
        })
    ], WorkSheet);
    return WorkSheet;
}());



/***/ }),

/***/ "./src/app/modules/worksheet-module/services/worksheetdata.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/worksheet-module/services/worksheetdata.service.ts ***!
  \****************************************************************************/
/*! exports provided: WorkSheetDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkSheetDataService", function() { return WorkSheetDataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkSheetDataService = /** @class */ (function () {
    function WorkSheetDataService(http) {
        this.http = http;
    }
    WorkSheetDataService.prototype.getWorkSheetData = function () {
    };
    WorkSheetDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], WorkSheetDataService);
    return WorkSheetDataService;
}());



/***/ }),

/***/ "./src/app/modules/worksheet-module/worksheet.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/worksheet-module/worksheet.module.ts ***!
  \**************************************************************/
/*! exports provided: WorkSheetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkSheetModule", function() { return WorkSheetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-module/shared.module */ "./src/app/modules/shared-module/shared.module.ts");
/* harmony import */ var _components_worksheet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/worksheet.component */ "./src/app/modules/worksheet-module/components/worksheet.component.ts");
/* harmony import */ var _services_worksheetdata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/worksheetdata.service */ "./src/app/modules/worksheet-module/services/worksheetdata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//angular imports..





var WorkSheetModule = /** @class */ (function () {
    function WorkSheetModule() {
    }
    WorkSheetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_worksheet_component__WEBPACK_IMPORTED_MODULE_3__["WorkSheet"]
            ],
            imports: [
                _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            providers: [_services_worksheetdata_service__WEBPACK_IMPORTED_MODULE_4__["WorkSheetDataService"]]
        })
    ], WorkSheetModule);
    return WorkSheetModule;
}());



/***/ }),

/***/ "./src/app/routing.module.ts":
/*!***********************************!*\
  !*** ./src/app/routing.module.ts ***!
  \***********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_worksheet_module_components_worksheet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/worksheet-module/components/worksheet.component */ "./src/app/modules/worksheet-module/components/worksheet.component.ts");


var APP_ROUTES = [
    {
        path: '',
        redirectTo: 'worksheet',
        pathMatch: 'full'
    },
    {
        path: 'worksheet',
        component: _modules_worksheet_module_components_worksheet_component__WEBPACK_IMPORTED_MODULE_1__["WorkSheet"]
    },
    { path: '**', redirectTo: '/404' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES, { useHash: true });


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

module.exports = __webpack_require__(/*! C:\Users\faiqs\source\repos\fshahafridi\PracticeEvolveTimeSheet\PracticeEvolve\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map