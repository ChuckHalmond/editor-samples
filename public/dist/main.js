var main;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!../editor/css/elements/containers/container.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../editor/css/elements/containers/container.css ***!
  \*********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editor_samples_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../editor-samples/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _editor_samples_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_samples_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_samples_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../editor-samples/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _editor_samples_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_samples_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _editor_samples_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_editor_samples_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host([droptarget]) {\r\n    background-color: var(--theme-droptarget-item-color);\r\n}", "",{"version":3,"sources":["webpack://./../editor/css/elements/containers/container.css"],"names":[],"mappings":"AAAA;IACI,oDAAoD;AACxD","sourcesContent":[":host([droptarget]) {\r\n    background-color: var(--theme-droptarget-item-color);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../editor/css/elements/containers/trees/treeitem.css":
/*!************************************************************!*\
  !*** ../editor/css/elements/containers/trees/treeitem.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _editor_samples_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../editor-samples/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _editor_samples_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_samples_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_samples_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../editor-samples/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _editor_samples_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_samples_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_samples_node_modules_css_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../../editor-samples/node_modules/css-loader/dist/cjs.js!../container.css */ "./node_modules/css-loader/dist/cjs.js!../editor/css/elements/containers/container.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _editor_samples_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_editor_samples_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_editor_samples_node_modules_css_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host {\r\n    display: block;\r\n    user-select: none;\r\n}\r\n\r\n/* \r\nAdded from container.css\r\n:host([droptarget]) {\r\n    background-color: var(--theme-droptarget-item-color);\r\n}\r\n*/\r\n\r\n:host(:focus-visible) {\r\n    outline: none;\r\n}\r\n\r\n:host([active]):host-context(e-tree:focus-within) [part=\"content\"] {\r\n    outline: 1px solid var(--theme-focused-item-outline-color);\r\n    outline-offset: -1px;\r\n}\r\n\r\n[part=\"content\"]:hover {\r\n    background-color: var(--theme-hovered-item-color);\r\n}\r\n\r\n:host([selected]) [part=\"content\"] {\r\n    background-color: var(--theme-selected-item-color);\r\n}\r\n\r\n[part=\"content\"] {\r\n    display: flex;\r\n    line-height: 22px;\r\n    padding-left: 12px;\r\n}\r\n\r\n:host(:not([type=\"parent\"])) ::slotted([slot=\"group\"]),\r\n:host(:not([expanded])) ::slotted([slot=\"group\"]) {\r\n    display: none;\r\n}\r\n\r\n:host(:not([type=\"parent\"])) [part=\"arrow\"]::before {\r\n    visibility: hidden;\r\n}\r\n\r\n[part=\"arrow\"] {\r\n    display: inline-block;\r\n    width: 18px;\r\n    height: 18px;\r\n    margin: 1px 4px 1px 1px;\r\n}\r\n\r\n[part=\"arrow\"]::before {\r\n    display: inline-block;\r\n    width: 18px;\r\n    height: 18px;\r\n    margin: 1px;\r\n    content: \"\";\r\n\r\n    mask-size: 18px 18px;\r\n    -webkit-mask-size: 18px 18px;\r\n    background-color: none;\r\n}\r\n\r\n:host(:not([expanded])) [part=\"arrow\"]::before {\r\n    -webkit-mask-image: var(--theme-arrow-right-image);\r\n    mask-image: var(--theme-arrow-right-image);\r\n    background-color: black;\r\n}\r\n\r\n:host([expanded]) [part=\"arrow\"]::before {\r\n    -webkit-mask-image: var(--theme-arrow-dropdown-image);\r\n    mask-image: var(--theme-arrow-dropdown-image);\r\n    background-color: black;\r\n}", "",{"version":3,"sources":["webpack://./../editor/css/elements/containers/trees/treeitem.css"],"names":[],"mappings":"AAEA;IACI,cAAc;IACd,iBAAiB;AACrB;;AAEA;;;;;CAKC;;AAED;IACI,aAAa;AACjB;;AAEA;IACI,0DAA0D;IAC1D,oBAAoB;AACxB;;AAEA;IACI,iDAAiD;AACrD;;AAEA;IACI,kDAAkD;AACtD;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,WAAW;;IAEX,oBAAoB;IACpB,4BAA4B;IAC5B,sBAAsB;AAC1B;;AAEA;IACI,kDAAkD;IAClD,0CAA0C;IAC1C,uBAAuB;AAC3B;;AAEA;IACI,qDAAqD;IACrD,6CAA6C;IAC7C,uBAAuB;AAC3B","sourcesContent":["@import \"../container.css\";\r\n\r\n:host {\r\n    display: block;\r\n    user-select: none;\r\n}\r\n\r\n/* \r\nAdded from container.css\r\n:host([droptarget]) {\r\n    background-color: var(--theme-droptarget-item-color);\r\n}\r\n*/\r\n\r\n:host(:focus-visible) {\r\n    outline: none;\r\n}\r\n\r\n:host([active]):host-context(e-tree:focus-within) [part=\"content\"] {\r\n    outline: 1px solid var(--theme-focused-item-outline-color);\r\n    outline-offset: -1px;\r\n}\r\n\r\n[part=\"content\"]:hover {\r\n    background-color: var(--theme-hovered-item-color);\r\n}\r\n\r\n:host([selected]) [part=\"content\"] {\r\n    background-color: var(--theme-selected-item-color);\r\n}\r\n\r\n[part=\"content\"] {\r\n    display: flex;\r\n    line-height: 22px;\r\n    padding-left: 12px;\r\n}\r\n\r\n:host(:not([type=\"parent\"])) ::slotted([slot=\"group\"]),\r\n:host(:not([expanded])) ::slotted([slot=\"group\"]) {\r\n    display: none;\r\n}\r\n\r\n:host(:not([type=\"parent\"])) [part=\"arrow\"]::before {\r\n    visibility: hidden;\r\n}\r\n\r\n[part=\"arrow\"] {\r\n    display: inline-block;\r\n    width: 18px;\r\n    height: 18px;\r\n    margin: 1px 4px 1px 1px;\r\n}\r\n\r\n[part=\"arrow\"]::before {\r\n    display: inline-block;\r\n    width: 18px;\r\n    height: 18px;\r\n    margin: 1px;\r\n    content: \"\";\r\n\r\n    mask-size: 18px 18px;\r\n    -webkit-mask-size: 18px 18px;\r\n    background-color: none;\r\n}\r\n\r\n:host(:not([expanded])) [part=\"arrow\"]::before {\r\n    -webkit-mask-image: var(--theme-arrow-right-image);\r\n    mask-image: var(--theme-arrow-right-image);\r\n    background-color: black;\r\n}\r\n\r\n:host([expanded]) [part=\"arrow\"]::before {\r\n    -webkit-mask-image: var(--theme-arrow-dropdown-image);\r\n    mask-image: var(--theme-arrow-dropdown-image);\r\n    background-color: black;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/MyGridView.ts":
/*!***************************!*\
  !*** ./src/MyGridView.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyGridRowModel": () => (/* binding */ MyGridRowModel),
/* harmony export */   "MyGridView": () => (/* binding */ MyGridView)
/* harmony export */ });
/* harmony import */ var editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! editor/lib/elements/Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var editor_lib_models_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! editor/lib/models/Model */ "../editor/lib/models/Model.js");
/* harmony import */ var editor_lib_views_GridView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! editor/lib/views/GridView */ "../editor/lib/views/GridView.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





class MyGridRowModel extends editor_lib_views_GridView__WEBPACK_IMPORTED_MODULE_2__.GridRowModel {
    name;
    age;
    color;
    constructor(init) {
        super(init);
        const { name, age, color } = init;
        this.name = name;
        this.age = age;
        this.color = color;
    }
}
__decorate([
    (0,editor_lib_models_Model__WEBPACK_IMPORTED_MODULE_1__.ReactiveProperty)()
], MyGridRowModel.prototype, "name", void 0);
__decorate([
    (0,editor_lib_models_Model__WEBPACK_IMPORTED_MODULE_1__.ReactiveProperty)()
], MyGridRowModel.prototype, "age", void 0);
__decorate([
    (0,editor_lib_models_Model__WEBPACK_IMPORTED_MODULE_1__.ReactiveProperty)()
], MyGridRowModel.prototype, "color", void 0);
var style;
let MyGridView = class MyGridView extends editor_lib_views_GridView__WEBPACK_IMPORTED_MODULE_2__.GridView {
    #searchFilter;
    static {
        style = /*css*/ `
            e-gridcell[headers="age"] {
                text-align: right;
            }
        `;
    }
    constructor() {
        super();
        this.#searchFilter = null;
        const { shadowRoot } = this;
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [
            ...shadowRoot.adoptedStyleSheets, adoptedStylesheet
        ];
    }
    renderShadow() {
        const shadowNode = super.renderShadow();
        shadowNode.insertBefore((0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("div", {
            children: (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("input", {
                attributes: {
                    type: "search"
                },
                listeners: {
                    input: this.#handleSearchInputEvent.bind(this)
                }
            })
        }), shadowNode.firstChild);
        return shadowNode;
    }
    filter(row) {
        const searchFilter = this.#searchFilter;
        return super.filter(row) &&
            (searchFilter ? searchFilter.filter(row) : true);
    }
    setSearchFilter(filter) {
        const { model, gridElement } = this;
        const { rows } = model;
        this.#searchFilter = filter;
        Array.from(rows.values()).forEach((row_i) => {
            const rowElement = this.getRowElement(row_i);
            if (rowElement) {
                rowElement.hidden = !this.filter(row_i);
            }
        });
        gridElement.clearSelection();
    }
    #handleSearchInputEvent(event) {
        const { target } = event;
        if (target instanceof HTMLInputElement) {
            const { value } = target;
            if (value !== "") {
                this.setSearchFilter({
                    filter: (row) => row.name.toLowerCase().includes(value.toLowerCase())
                });
            }
            else {
                this.setSearchFilter(null);
            }
        }
    }
};
MyGridView = __decorate([
    (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.CustomElement)({
        name: "e-mygridview"
    })
], MyGridView);


/***/ }),

/***/ "./src/MyTreeView.ts":
/*!***************************!*\
  !*** ./src/MyTreeView.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyTreeItemModel": () => (/* binding */ MyTreeItemModel),
/* harmony export */   "MyTreeItemModelList": () => (/* binding */ MyTreeItemModelList),
/* harmony export */   "MyTreeView": () => (/* binding */ MyTreeView)
/* harmony export */ });
/* harmony import */ var editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! editor/lib/elements/Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var editor_lib_models_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! editor/lib/models/Model */ "../editor/lib/models/Model.js");
/* harmony import */ var editor_lib_views_TreeView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! editor/lib/views/TreeView */ "../editor/lib/views/TreeView.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






class MyTreeItemModel extends editor_lib_views_TreeView__WEBPACK_IMPORTED_MODULE_2__.TreeItemModel {
    childCount;
    visibility;
    constructor(init) {
        super(init);
        this.childCount = this.childItems.length;
        this.visibility = true;
        this.addEventListener("modelchange", this.#handleModelChangeEvent.bind(this));
    }
    show() {
        this.visibility = true;
    }
    hide() {
        this.visibility = false;
    }
    display() {
        console.log(this.id);
    }
    #handleModelChangeEvent(event) {
        const { target } = event;
        const { childItems } = this;
        if (target == childItems) {
            this.childCount = childItems.length;
        }
    }
}
__decorate([
    (0,editor_lib_models_Model__WEBPACK_IMPORTED_MODULE_1__.ReactiveProperty)()
], MyTreeItemModel.prototype, "childCount", void 0);
__decorate([
    (0,editor_lib_models_Model__WEBPACK_IMPORTED_MODULE_1__.ReactiveProperty)()
], MyTreeItemModel.prototype, "visibility", void 0);
class MyTreeItemModelList extends editor_lib_views_TreeView__WEBPACK_IMPORTED_MODULE_2__.TreeItemModelList {
    constructor(items) {
        super(items);
    }
    get count() {
        return this.items.length;
    }
    show() {
        this.items.forEach(item_i => item_i.show());
    }
    hide() {
        this.items.forEach(item_i => item_i.hide());
    }
    display() {
        const result = this.items.map(item_i => item_i.id).join(" ");
        console.log(result);
    }
}
let MyTreeView = class MyTreeView extends editor_lib_views_TreeView__WEBPACK_IMPORTED_MODULE_2__.TreeView {
    render() {
        super.render();
        const { shadowRoot, treeElement } = this;
        const stylesheet = new CSSStyleSheet();
        (async () => {
            stylesheet.replace((await __webpack_require__.e(/*! import() */ "public_css_mytreeview_css").then(__webpack_require__.bind(__webpack_require__, /*! ../public/css/mytreeview.css */ "./public/css/mytreeview.css"))).default[0][1]);
        })();
        shadowRoot.adoptedStyleSheets = [stylesheet];
        treeElement.addEventListener("keydown", this.#handleKeyDownEvent.bind(this));
    }
    itemContentDelegate(item) {
        return (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.fragment)((0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.reactiveElement)(item, (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("span", {
            attributes: {
                class: "label"
            }
        }), ["id"], (label, property, oldValue, newValue) => {
            label.textContent = newValue;
        }), (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.reactiveElement)(item, (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("span", {
            attributes: {
                class: "badge"
            }
        }), ["childCount", "type"], (badge, property, oldValue, newValue) => {
            switch (property) {
                case "type": {
                    if (newValue === "leaf") {
                        badge.textContent = null;
                        badge.hidden = true;
                    }
                    else {
                        badge.textContent = `(${item.childCount})`;
                        badge.hidden = false;
                    }
                    break;
                }
                case "childCount": {
                    badge.textContent = `(${newValue})`;
                    break;
                }
            }
        }));
    }
    itemToolbarDelegate(item) {
        return (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.reactiveElement)(item, (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-toolbar", {
            children: [
                (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-toolbaritem", {
                    attributes: {
                        name: "edit",
                        type: "button",
                        label: "Edit",
                        iconed: true
                    },
                    listeners: {
                        click: () => {
                            this.showEditItemDialog(item);
                        }
                    }
                }),
                (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-toolbaritem", {
                    attributes: {
                        name: "visibility",
                        type: "checkbox",
                        label: "Visibility",
                        iconed: true
                    },
                    listeners: {
                        click: (event) => {
                            item.visibility ?
                                item.hide() :
                                item.show();
                            event.stopPropagation();
                        }
                    }
                })
            ]
        }), ["visibility", "type"], (toolbar, property, oldValue, newValue) => {
            switch (property) {
                case "visibility": {
                    const visibilityItem = toolbar
                        .querySelector("e-toolbaritem[name=visibility]");
                    if (visibilityItem) {
                        const label = newValue ? "Hide" : "Show";
                        visibilityItem.label = label;
                        visibilityItem.title = label;
                        visibilityItem.pressed = newValue;
                    }
                    break;
                }
                case "type": {
                    const typeSelect = toolbar
                        .querySelector("e-toolbaritem[name=type] e-select");
                    if (typeSelect) {
                        typeSelect
                            .querySelector(`e-option[value="${newValue}"]`)
                            .selected = true;
                    }
                    break;
                }
            }
        });
    }
    itemMenuDelegate() {
        console.log("here");
        const { treeElement } = this;
        const { activeItem: activeItemElement } = treeElement;
        const selectedItems = this.selectedItems();
        const activeItem = this.activeItem();
        return (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menu", {
            attributes: {
                contextual: true
            },
            children: [
                (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menuitemgroup", {
                    children: [
                        (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menuitem", {
                            attributes: {
                                type: "button",
                                label: "Edit"
                            },
                            children: "Edit",
                            listeners: {
                                click: (function () {
                                    selectedItems.forEach((selectItem) => {
                                        this.showEditItemDialog(selectItem);
                                    });
                                }).bind(this)
                            }
                        }),
                        (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menuitem", {
                            attributes: {
                                type: "checkbox",
                                label: activeItem.visibility ? "Hide" : "Show"
                            },
                            children: activeItem.visibility ? "Hide" : "Show",
                            listeners: {
                                click: () => {
                                    const selectedItemsList = selectedItems.includes(activeItem) ?
                                        new MyTreeItemModelList(selectedItems) : new MyTreeItemModelList([activeItem]);
                                    activeItem.visibility ?
                                        selectedItemsList.hide() :
                                        selectedItemsList.show();
                                    activeItemElement.focus();
                                }
                            }
                        })
                    ]
                }),
                (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-separator"),
                (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menuitemgroup", {
                    children: [
                        (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menuitem", {
                            attributes: {
                                label: "Delete"
                            },
                            children: "Delete",
                            listeners: {
                                click: () => {
                                    const selectedItemsList = selectedItems.includes(activeItem) ?
                                        new MyTreeItemModelList(selectedItems) : new MyTreeItemModelList([activeItem]);
                                    const { count } = selectedItemsList;
                                    const doRemove = confirm(`Remove ${count} items?`);
                                    if (doRemove) {
                                        selectedItemsList.remove();
                                    }
                                    treeElement.focus();
                                }
                            }
                        })
                    ]
                })
            ]
        });
    }
    #handleKeyDownEvent(event) {
        const { currentTarget, key } = event;
        const targetTree = currentTarget;
        const { activeItem } = targetTree;
        if (activeItem) {
            const activeItemModel = this.treeItem(activeItem);
            switch (key) {
                case "Delete": {
                    const selectedItems = this.selectedItems();
                    const selectedItemsList = selectedItems.includes(activeItemModel) ?
                        new editor_lib_views_TreeView__WEBPACK_IMPORTED_MODULE_2__.TreeItemModelList(selectedItems) : new editor_lib_views_TreeView__WEBPACK_IMPORTED_MODULE_2__.TreeItemModelList([activeItemModel]);
                    const { count } = selectedItemsList;
                    const doRemove = confirm(`Remove ${count} items?`);
                    if (doRemove) {
                        selectedItemsList.remove();
                    }
                    targetTree.focus();
                    event.preventDefault();
                    break;
                }
            }
        }
    }
    showEditItemDialog(item) {
        const { shadowRoot } = this;
        const { visibility, id, type } = item;
        const dialog = (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("dialog", {
            children: [
                (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("form", {
                    attributes: {
                        method: "dialog"
                    },
                    children: [
                        (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menubar", {
                            attributes: {
                                tabindex: 0
                            },
                            children: [
                                (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menuitem", {
                                    attributes: {
                                        type: "menu",
                                        label: "Menu 1"
                                    },
                                    children: [
                                        "Menu 1",
                                        (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menu", {
                                            attributes: {
                                                slot: "menu"
                                            },
                                            children: [
                                                (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menuitem", {
                                                    attributes: {
                                                        type: "checkbox"
                                                    },
                                                    children: "Menuitem 1"
                                                }),
                                                (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menuitem", {
                                                    attributes: {
                                                        type: "checkbox"
                                                    },
                                                    children: "Menuitem 2"
                                                }),
                                                (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menuitem", {
                                                    attributes: {
                                                        type: "submenu"
                                                    },
                                                    children: [
                                                        "Submenu 1",
                                                        (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menu", {
                                                            attributes: {
                                                                slot: "menu"
                                                            },
                                                            children: [
                                                                (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menuitem", {
                                                                    attributes: {
                                                                        label: "SubmenuItem 1",
                                                                        name: "radio",
                                                                        value: String(0),
                                                                        type: "radio"
                                                                    },
                                                                    children: "SubmenuItem 1"
                                                                }),
                                                                (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menuitem", {
                                                                    attributes: {
                                                                        label: "SubmenuItem 2",
                                                                        name: "radio",
                                                                        value: String(1),
                                                                        type: "radio"
                                                                    },
                                                                    children: "SubmenuItem 2"
                                                                }),
                                                                (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menuitem", {
                                                                    attributes: {
                                                                        label: "SubmenuItem 3",
                                                                        name: "radio",
                                                                        value: String(3),
                                                                        type: "radio"
                                                                    },
                                                                    children: "SubmenuItem 3"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-tablist", {
                            attributes: {
                                tabindex: 0
                            },
                            children: [
                                (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-tab", {
                                    attributes: {
                                        controls: "properties"
                                    },
                                    children: "Properties"
                                })
                            ]
                        }),
                        (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-tabpanel", {
                            attributes: {
                                id: "properties"
                            },
                            children: [
                                (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("fieldset", {
                                    children: [
                                        (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("legend", {
                                            children: "Item information"
                                        }),
                                        (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("div", {
                                            attributes: {
                                                class: "form-content"
                                            },
                                            children: [
                                                (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("label", {
                                                    attributes: {
                                                        for: "visibility"
                                                    },
                                                    children: "Visibility"
                                                }),
                                                (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("input", {
                                                    attributes: {
                                                        id: "visibility",
                                                        type: "checkbox",
                                                        name: "visibility",
                                                        checked: visibility,
                                                        tabindex: 0,
                                                        autofocus: true
                                                    }
                                                }),
                                                (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("label", {
                                                    attributes: {
                                                        for: "id"
                                                    },
                                                    children: "ID"
                                                }),
                                                (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("input", {
                                                    attributes: {
                                                        id: "id",
                                                        type: "text",
                                                        name: "id",
                                                        value: id,
                                                        tabindex: 0
                                                    }
                                                }),
                                                (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("label", {
                                                    attributes: {
                                                        for: "type"
                                                    },
                                                    children: "Type"
                                                }),
                                                (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("select", {
                                                    attributes: {
                                                        id: "type",
                                                        name: "type",
                                                        tabindex: 0
                                                    },
                                                    children: ["parent", "leaf"].map(type_i => (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("option", {
                                                        attributes: {
                                                            label: type_i,
                                                            value: type_i,
                                                            selected: type === type_i
                                                        }
                                                    }))
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("footer", {
                            attributes: {
                                class: "dialog-footer"
                            },
                            children: [
                                (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("button", {
                                    attributes: {
                                        type: "submit",
                                        value: "confirm"
                                    },
                                    children: "Confirm"
                                }),
                                (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("button", {
                                    attributes: {
                                        value: "cancel"
                                    },
                                    children: "Cancel"
                                })
                            ]
                        })
                    ]
                })
            ],
            listeners: {
                close: (event) => {
                    const { currentTarget } = event;
                    const targetDialog = currentTarget;
                    if (targetDialog.returnValue === "confirm") {
                        const form = targetDialog.querySelector("form");
                        const formData = new FormData(form);
                        item.visibility = Boolean(formData.get("visibility"));
                        item.type = String(formData.get("type"));
                        item.id = String(formData.get("id"));
                    }
                    targetDialog.remove();
                }
            }
        });
        shadowRoot.append(dialog);
        dialog.showModal();
    }
};
MyTreeView = __decorate([
    (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.CustomElement)({
        name: "e-mytreeview"
    })
], MyTreeView);
;


/***/ }),

/***/ "../editor/lib/elements/Element.js":
/*!*****************************************!*\
  !*** ../editor/lib/elements/Element.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeMutationMixinBase": () => (/* binding */ AttributeMutationMixinBase),
/* harmony export */   "AttributeProperty": () => (/* binding */ AttributeProperty),
/* harmony export */   "CustomElement": () => (/* binding */ CustomElement),
/* harmony export */   "QueryAllProperty": () => (/* binding */ QueryAllProperty),
/* harmony export */   "QueryProperty": () => (/* binding */ QueryProperty),
/* harmony export */   "Stylesheet": () => (/* binding */ Stylesheet),
/* harmony export */   "areAttributesMatching": () => (/* binding */ areAttributesMatching),
/* harmony export */   "element": () => (/* binding */ element),
/* harmony export */   "fragment": () => (/* binding */ fragment),
/* harmony export */   "reactiveChildElements": () => (/* binding */ reactiveChildElements),
/* harmony export */   "reactiveElement": () => (/* binding */ reactiveElement),
/* harmony export */   "reactiveElementsMap": () => (/* binding */ reactiveElementsMap),
/* harmony export */   "revokeReactiveChildElements": () => (/* binding */ revokeReactiveChildElements),
/* harmony export */   "revokeReactiveElement": () => (/* binding */ revokeReactiveElement),
/* harmony export */   "textNode": () => (/* binding */ textNode),
/* harmony export */   "trimMultilineIndent": () => (/* binding */ trimMultilineIndent)
/* harmony export */ });
/* harmony import */ var _models_Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Model */ "../editor/lib/models/Model.js");
/* harmony import */ var _Snippets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Snippets */ "../editor/lib/elements/Snippets.js");


















const AttributeProperty = function (init) {
    return (target, property) => {
        const { constructor } = target;
        const { prototype } = constructor;
        const propertyName = String(property);
        const { defaultValue = null, observed = false, name = (0,_Snippets__WEBPACK_IMPORTED_MODULE_1__.camelToTrain)(propertyName) } = init;
        if (observed) {
            const observedAttributes = Reflect.get(constructor, "observedAttributes", constructor);
            if (Array.isArray(observedAttributes)) {
                observedAttributes.push(name);
            }
            else {
                Object.defineProperty(constructor, "observedAttributes", {
                    value: [name],
                    writable: false
                });
            }
        }
        const { type } = init;
        switch (type) {
            case Boolean: {
                Object.defineProperty(prototype, propertyName, {
                    get: function () {
                        return this.hasAttribute(name);
                    },
                    set: function (value) {
                        if (value) {
                            this.setAttribute(name, "");
                        }
                        else {
                            this.removeAttribute(name);
                        }
                    }
                });
                break;
            }
            case Object: {
                Object.defineProperty(prototype, propertyName, {
                    get: function () {
                        const val = this.getAttribute(name);
                        return (val !== null) ? JSON.parse(val) : defaultValue;
                    },
                    set: function (value) {
                        if (value !== null) {
                            this.setAttribute(name, JSON.stringify(value));
                        }
                        else {
                            this.removeAttribute(name);
                        }
                    }
                });
                break;
            }
            case Number: {
                Object.defineProperty(prototype, propertyName, {
                    get: function () {
                        const val = this.getAttribute(name);
                        return (val !== null) ? parseFloat(val) : defaultValue;
                    },
                    set: function (value) {
                        if (value !== null) {
                            this.setAttribute(name, value);
                        }
                        else {
                            this.removeAttribute(name);
                        }
                    }
                });
                break;
            }
            case String:
            default: {
                Object.defineProperty(prototype, propertyName, {
                    get: function () {
                        const val = this.getAttribute(name);
                        return (val !== null) ? val : defaultValue;
                    },
                    set: function (value) {
                        if (value !== null) {
                            this.setAttribute(name, value);
                        }
                        else {
                            this.removeAttribute(name);
                        }
                    }
                });
                break;
            }
        }
    };
};
function Stylesheet(text) {
    const stylesheet = new CSSStyleSheet();
    stylesheet.replaceSync(text);
    return stylesheet;
}
function trimMultilineIndent(text) {
    const newlineIndex = text.indexOf("\n");
    text = text.substring(newlineIndex + 1);
    const indentMatch = text.match(/^[\s]*/);
    if (indentMatch) {
        const indent = text.substring(0, indentMatch[0].length);
        text = text.replaceAll(indent, "").trimEnd();
    }
    return text;
}
const CustomElement = function (init) {
    return (elementCtor) => {
        const { name, options } = init;
        if (!customElements.get(name)) {
            customElements.define(name, elementCtor, options);
        }
        return elementCtor;
    };
};
const QueryProperty = function (init) {
    return (target, propertyKey) => {
        const { constructor } = target;
        const { prototype } = constructor;
        const propertyName = String(propertyKey);
        const { selector } = init;
        const withinShadowRoot = init.withinShadowRoot ?? false;
        const getter = withinShadowRoot ? function () {
            return this.shadowRoot.querySelector(selector);
        } : function () {
            return this.querySelector(selector);
        };
        Object.defineProperty(prototype, propertyName, {
            get: getter
        });
    };
};
const QueryAllProperty = function (init) {
    return (target, propertyKey) => {
        const { constructor } = target;
        const { prototype } = constructor;
        const propertyName = String(propertyKey);
        const { selector } = init;
        const withinShadowRoot = init.withinShadowRoot ?? false;
        const getter = withinShadowRoot ? function () {
            return Array.from(this.shadowRoot.querySelectorAll(selector));
        } : function () {
            return Array.from(this.querySelectorAll(selector));
        };
        Object.defineProperty(prototype, propertyName, {
            get: getter
        });
    };
};
function fragment(...nodes) {
    const fragment = document.createDocumentFragment();
    fragment.append(...nodes);
    return fragment;
}
function textNode(text) {
    return document.createTextNode(text);
}
function element(tagName, init) {
    if (init) {
        const { options, attributes, dataset, children, listeners } = init;
        const element = document.createElement(tagName, options);
        if (attributes) {
            Object.entries(attributes).forEach(([attributeName, attributeValue]) => {
                if (attributeValue !== undefined) {
                    if (typeof attributeValue === "boolean") {
                        element.toggleAttribute((0,_Snippets__WEBPACK_IMPORTED_MODULE_1__.camelToTrain)(attributeName), attributeValue);
                    }
                    else {
                        element.setAttribute((0,_Snippets__WEBPACK_IMPORTED_MODULE_1__.camelToTrain)(attributeName), String(attributeValue));
                    }
                }
            });
        }
        if (dataset) {
            const { dataset: elementDataset } = element;
            Object.entries(dataset).forEach(([attributeName, attributeValue]) => {
                if (typeof attributeValue === "boolean") {
                    if (attributeValue) {
                        elementDataset[(0,_Snippets__WEBPACK_IMPORTED_MODULE_1__.camelToTrain)(attributeName)] = "";
                    }
                    else {
                        delete elementDataset[(0,_Snippets__WEBPACK_IMPORTED_MODULE_1__.camelToTrain)(attributeName)];
                    }
                }
                else {
                    elementDataset[(0,_Snippets__WEBPACK_IMPORTED_MODULE_1__.camelToTrain)(attributeName)] = String(attributeValue);
                }
            });
        }
        if (children) {
            if (typeof children === "function") {
                children(element);
            }
            else if (typeof children === "object" && "length" in children) {
                element.append(...Array.from(children));
            }
            else {
                element.append(children);
            }
        }
        if (listeners) {
            Object.entries(listeners).forEach(([name_i, listener_i]) => {
                if (Array.isArray(listener_i)) {
                    element.addEventListener(name_i, listener_i[0], listener_i[1]);
                }
                else {
                    element.addEventListener(name_i, listener_i);
                }
            });
        }
        return element;
    }
    return document.createElement(tagName);
}
const reactiveElementsMap = new WeakMap();
const reactiveElementsFinalizationRegistry = new FinalizationRegistry((heldValue) => {
    const { model, reactiveElement } = heldValue;
    const reactiveElementsMapEntry = reactiveElementsMap.get(model);
    if (reactiveElementsMapEntry !== undefined) {
        const { reactiveElementsArray } = reactiveElementsMapEntry;
        reactiveElementsArray.splice(reactiveElementsArray.indexOf(reactiveElement), 1);
    }
});
const reactiveElementsPropertyObserver = new _models_Model__WEBPACK_IMPORTED_MODULE_0__.ModelChangeObserver((records) => {
    records.forEach((record_i) => {
        const { target, propertyName, oldValue, newValue } = record_i;
        const { reactiveElementsArray } = reactiveElementsMap.get(target);
        reactiveElementsArray.forEach(reactiveElement_i => {
            const { elementRef, react, properties } = reactiveElement_i;
            const element = elementRef.deref();
            if (element) {
                if (properties.includes(propertyName)) {
                    react(element, propertyName, oldValue, newValue);
                }
            }
        });
    });
});
function reactiveElement(model, element, properties, react) {
    const elementRef = new WeakRef(element);
    const reactiveElement = { elementRef, react, properties };
    const reactiveElementsMapEntry = reactiveElementsMap.get(model);
    reactiveElementsFinalizationRegistry.register(element, { model, reactiveElement });
    if (!reactiveElementsMapEntry) {
        const observerOptions = {
            properties: true,
            propertiesFilter: properties
        };
        const reactiveElementsArray = [reactiveElement];
        reactiveElementsMap.set(model, { observerOptions, reactiveElementsArray });
        reactiveElementsPropertyObserver.observe(model, observerOptions);
    }
    else {
        const { reactiveElementsArray, observerOptions } = reactiveElementsMapEntry;
        const { propertiesFilter } = observerOptions;
        reactiveElementsArray.push(reactiveElement);
        observerOptions.propertiesFilter = propertiesFilter ?
            propertiesFilter.concat(properties.filter(property_i => !propertiesFilter.includes(property_i))) : properties.filter((property_i, i, properties) => properties.indexOf(property_i) === i);
    }
    properties.forEach((property_i) => {
        if (property_i in model) {
            const value = Reflect.get(model, property_i, model);
            react(element, property_i, undefined, value);
        }
    });
    return element;
}
function revokeReactiveElement(model, element) {
    const reactiveElementsMapEntry = reactiveElementsMap.get(model);
    if (reactiveElementsMapEntry) {
        const { reactiveElementsArray } = reactiveElementsMapEntry;
        const reactiveElementIndex = reactiveElementsArray.findIndex(reactiveElement => reactiveElement.elementRef.deref() === element);
        if (reactiveElementIndex > -1) {
            reactiveElementsArray.splice(reactiveElementIndex, 1);
        }
        if (reactiveElementsArray.length === 0) {
            reactiveElementsMap.delete(model);
        }
    }
}
const reactiveChildElementsMap = new WeakMap();
const reactiveChildElementsFinalizationRegistry = new FinalizationRegistry((heldValue) => {
    const { list, reactiveChildElement } = heldValue;
    const reactiveChildrenElementsMapEntry = reactiveChildElementsMap.get(list);
    if (reactiveChildrenElementsMapEntry) {
        const { reactiveChildElementsArray } = reactiveChildrenElementsMapEntry;
        reactiveChildElementsArray.splice(reactiveChildElementsArray.indexOf(reactiveChildElement), 1);
    }
});
const reactiveChildElementsObserver = new _models_Model__WEBPACK_IMPORTED_MODULE_0__.ModelChangeObserver((records) => {
    let range = null;
    Array.from(records.values()).forEach((record_i) => {
        const { target } = record_i;
        const list = target;
        const { length: listLength } = list;
        const { reactiveChildElementsArray } = reactiveChildElementsMap.get(list);
        reactiveChildElementsArray.forEach((reactiveChildElements_i) => {
            const { parentRef, mapping, placeholder } = reactiveChildElements_i;
            const parent = parentRef.deref();
            if (parent) {
                const { firstChild, children } = parent;
                const { length: childrenCount } = children;
                if (placeholder && listLength > 0 && firstChild == placeholder) {
                    parent.removeChild(placeholder);
                }
                const { changeType, LIST_INSERT, LIST_REMOVE, LIST_SORT } = record_i;
                switch (changeType) {
                    case LIST_INSERT: {
                        const { insertedIndex, insertedItems } = record_i;
                        const insertedItemsArray = Array.from(insertedItems.values()).map(mapping);
                        const { length: childrenCount } = children;
                        if (insertedIndex < childrenCount) {
                            children[insertedIndex].before(...insertedItemsArray);
                        }
                        else {
                            parent.append(...insertedItemsArray);
                        }
                        break;
                    }
                    case LIST_REMOVE: {
                        const { removedIndex, removedItems } = record_i;
                        const { length: removedCount } = removedItems;
                        range = range ?? document.createRange();
                        const removeEndIndex = removedIndex + (removedCount - 1);
                        if (removeEndIndex < childrenCount) {
                            range.setStartBefore(children[removedIndex]);
                            range.setEndAfter(children[removeEndIndex]);
                            range.deleteContents();
                        }
                        break;
                    }
                    case LIST_SORT: {
                        const { sortedIndices } = record_i;
                        const childrenArray = Array.from(children);
                        parent.append(...sortedIndices.filter(index_i => index_i < childrenCount).map(index_i => childrenArray[index_i]));
                        break;
                    }
                }
                if (listLength == 0 && placeholder) {
                    parent.append(placeholder);
                }
            }
        });
    });
});
function reactiveChildElements(list, mapping, placeholder) {
    return (parent) => {
        const parentRef = new WeakRef(parent);
        const reactiveChildElementsMapEntry = reactiveChildElementsMap.get(list);
        const reactiveChildElement = { parentRef, mapping, placeholder };
        reactiveChildElementsFinalizationRegistry.register(parent, { list, reactiveChildElement });
        if (!reactiveChildElementsMapEntry) {
            const reactiveChildElementsArray = [reactiveChildElement];
            reactiveChildElementsMap.set(list, { reactiveChildElementsArray });
            reactiveChildElementsObserver.observe(list, {
                childList: true
            });
        }
        else {
            const { reactiveChildElementsArray } = reactiveChildElementsMapEntry;
            reactiveChildElementsArray.push(reactiveChildElement);
        }
        const children = list.length == 0 && placeholder ?
            [placeholder] : Array.from(list.values()).map(mapping);
        parent.replaceChildren(...children);
    };
}
function revokeReactiveChildElements(list, parent) {
    const reactiveChildElementsMapEntry = reactiveChildElementsMap.get(list);
    if (reactiveChildElementsMapEntry) {
        const { reactiveChildElementsArray } = reactiveChildElementsMapEntry;
        const reactiveChildElementsIndex = reactiveChildElementsArray.findIndex(reactiveChildElement => reactiveChildElement.parentRef.deref() === parent);
        if (reactiveChildElementsIndex > -1) {
            reactiveChildElementsArray.splice(reactiveChildElementsIndex, 1);
        }
        if (reactiveChildElementsArray.length === 0) {
            reactiveChildElementsMap.delete(list);
        }
    }
}
function areAttributesMatching(referenceAttributeType, referenceAttributeName, referenceAttributeValue, attributeName, attributeValue) {
    if (referenceAttributeName == attributeName) {
        switch (referenceAttributeType) {
            case "boolean":
                return referenceAttributeValue == "" && attributeValue == "";
            case "string":
                return referenceAttributeValue !== "" && (referenceAttributeValue == attributeValue);
            case "list":
                return (referenceAttributeValue !== "" && attributeValue !== null) && new RegExp(`${referenceAttributeValue}\s*?`, "g").test(attributeValue);
        }
    }
    return false;
}
class AttributeMutationMixinBase {
    attributeName;
    attributeValue;
    attributeType;
    constructor(attributeName, attributeType = "boolean", attributeValue = "") {
        this.attributeName = attributeName;
        this.attributeType = attributeType;
        this.attributeValue = attributeValue;
    }
    attach() {
        throw new TypeError("Not implemented method.");
    }
    detach() {
        throw new TypeError("Not implemented method.");
    }
}
//# sourceMappingURL=Element.js.map

/***/ }),

/***/ "../editor/lib/elements/Snippets.js":
/*!******************************************!*\
  !*** ../editor/lib/elements/Snippets.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "camelToSnake": () => (/* binding */ camelToSnake),
/* harmony export */   "camelToTrain": () => (/* binding */ camelToTrain),
/* harmony export */   "constructor": () => (/* binding */ constructor),
/* harmony export */   "snakeToCamel": () => (/* binding */ snakeToCamel),
/* harmony export */   "trainToCamel": () => (/* binding */ trainToCamel)
/* harmony export */ });





function snakeToCamel(str) {
    return str.split('_').map(str => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()).join("");
}
function camelToSnake(str) {
    return str.replace(/(?<!^)(?=[A-Z])/g, '_').toLowerCase();
}
function trainToCamel(str) {
    return str.split('-').map(str => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()).join("");
}
function camelToTrain(str) {
    return str.replace(/(?<!^)(?=[A-Z])/g, '-').toLowerCase();
}
const constructor = (prototype, construct, constructors) => {
    return Object.assign(construct, {
        prototype,
        ...constructors
    });
};
//# sourceMappingURL=Snippets.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/grid/Grid.js":
/*!******************************************************!*\
  !*** ../editor/lib/elements/containers/grid/Grid.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEGridElement": () => (/* binding */ HTMLEGridElement)
/* harmony export */ });
/* harmony import */ var _stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../stylesheets/Theme */ "../editor/lib/stylesheets/Theme.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var _GridBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GridBody */ "../editor/lib/elements/containers/grid/GridBody.js");
/* harmony import */ var _GridCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GridCell */ "../editor/lib/elements/containers/grid/GridCell.js");
/* harmony import */ var _GridHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GridHead */ "../editor/lib/elements/containers/grid/GridHead.js");
/* harmony import */ var _GridRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GridRow */ "../editor/lib/elements/containers/grid/GridRow.js");
/* harmony import */ var _GridRowGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GridRowGroup */ "../editor/lib/elements/containers/grid/GridRowGroup.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













_GridHead__WEBPACK_IMPORTED_MODULE_4__.HTMLEGridHeadElement;
_GridBody__WEBPACK_IMPORTED_MODULE_2__.HTMLEGridBodyElement;
var shadowTemplate;
var style;
let HTMLEGridElementBase = class HTMLEGridElementBase extends HTMLElement {
    cells() {
        return Array.from(this.querySelectorAll("e-gridcell"));
    }
    rows() {
        return Array.from(this.querySelectorAll("e-gridrow"));
    }
    get activeCell() {
        return this.querySelector("e-gridcell[active]");
    }
    get activeRow() {
        return this.querySelector("e-gridrow[active]");
    }
    get body() {
        return this.querySelector(":scope > e-gridbody");
    }
    get head() {
        return this.querySelector(":scope > e-gridhead");
    }
    #onSelection;
    #hasSelectionChanged;
    #cellsWalker;
    #rowsWalker;
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("slot"));
        style = /*css*/ `
            :host {
                display: table;
                user-select: none;
                line-height: 22px;
            }
            
            :host(:focus) {
                outline: 1px solid var(--theme-focused-item-outline-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_FOCUSED_ITEM_OUTLINE_COLOR});
                outline-offset: -1px;
            }
        `;
    }
    constructor() {
        super();
        this.#cellsWalker = document.createTreeWalker(this, NodeFilter.SHOW_ELEMENT, this.#cellsWalkerNodeFilter.bind(this));
        this.#rowsWalker = document.createTreeWalker(this, NodeFilter.SHOW_ELEMENT, this.#rowsWalkerNodeFilter.bind(this));
        this.#onSelection = false;
        this.#hasSelectionChanged = false;
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
        this.addEventListener("click", this.#handleClickEvent.bind(this));
        this.addEventListener("contextmenu", this.#handleContextMenuEvent.bind(this));
        this.addEventListener("dblclick", this.#handleDblClickEvent.bind(this));
        this.addEventListener("focus", this.#handleFocusEvent.bind(this));
        this.addEventListener("focusin", this.#handleFocusInEvent.bind(this));
        this.addEventListener("keydown", this.#handleKeyDownEvent.bind(this));
        this.addEventListener("select", this.#handleSelectEvent.bind(this));
        shadowRoot.addEventListener("slotchange", this.#handleSlotChangeEvent.bind(this));
    }
    connectedCallback() {
        const { tabIndex } = this;
        this.tabIndex = tabIndex;
    }
    beginSelection() {
        this.#onSelection = true;
    }
    endSelection() {
        this.#onSelection = false;
        if (this.#hasSelectionChanged) {
            this.dispatchEvent(new Event("selectionchange", { bubbles: true }));
            this.#hasSelectionChanged = false;
        }
    }
    clearSelection() {
        this.#clearCellsSelection();
        this.#clearRowsSelection();
    }
    selectedCells() {
        return Array.from(this.querySelectorAll("e-gridcell[selected]"));
    }
    selectedRows() {
        return Array.from(this.querySelectorAll("e-gridrow[selected]"));
    }
    #cellsWalkerNodeFilter(node) {
        if (node instanceof _GridCell__WEBPACK_IMPORTED_MODULE_3__.HTMLEGridCellElement && !node.hidden) {
            return NodeFilter.FILTER_ACCEPT;
        }
        if (node instanceof _GridBody__WEBPACK_IMPORTED_MODULE_2__.HTMLEGridBodyElement || node instanceof _GridRowGroup__WEBPACK_IMPORTED_MODULE_6__.HTMLEGridRowGroupElement || node instanceof _GridRow__WEBPACK_IMPORTED_MODULE_5__.HTMLEGridRowElement) {
            return NodeFilter.FILTER_SKIP;
        }
        return NodeFilter.FILTER_REJECT;
    }
    #rowsWalkerNodeFilter(node) {
        if (node instanceof _GridRow__WEBPACK_IMPORTED_MODULE_5__.HTMLEGridRowElement && !node.hidden) {
            return NodeFilter.FILTER_ACCEPT;
        }
        if (node instanceof _GridBody__WEBPACK_IMPORTED_MODULE_2__.HTMLEGridBodyElement || node instanceof _GridRowGroup__WEBPACK_IMPORTED_MODULE_6__.HTMLEGridRowGroupElement) {
            return NodeFilter.FILTER_SKIP;
        }
        return NodeFilter.FILTER_REJECT;
    }
    #getCellsRange(from, to) {
        const cells = Array.from(this.cells());
        const fromIndex = cells.indexOf(from);
        const toIndex = cells.indexOf(to);
        if (fromIndex > -1 && toIndex > -1) {
            if (from == to) {
                return [from];
            }
            return cells.slice(Math.min(fromIndex, toIndex), Math.max(fromIndex, toIndex) + 1);
        }
        return [];
    }
    #getRowsRange(from, to) {
        if (from == to) {
            return [from];
        }
        const position = from.compareDocumentPosition(to);
        if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
            const range = [from];
            let nextVisibleRow = this.#nextRow(from);
            while (nextVisibleRow && nextVisibleRow !== to) {
                range.push(nextVisibleRow);
                nextVisibleRow = this.#nextRow(nextVisibleRow);
            }
            range.push(to);
            return range;
        }
        else if (position & Node.DOCUMENT_POSITION_PRECEDING) {
            const range = [from];
            let previousVisibleRow = this.#previousRow(from);
            while (previousVisibleRow && previousVisibleRow !== to) {
                range.push(previousVisibleRow);
                previousVisibleRow = this.#previousRow(previousVisibleRow);
            }
            range.push(to);
            return range;
        }
        return [];
    }
    #setCellsSelection(...cells) {
        this.beginSelection();
        const selectedCells = this.selectedCells();
        selectedCells.forEach((selectedCell_i) => {
            if (!cells.includes(selectedCell_i)) {
                selectedCell_i.selected = false;
            }
        });
        cells.forEach((cell_i) => {
            if (!cell_i.selected) {
                cell_i.selected = true;
            }
        });
        this.endSelection();
    }
    #setRowsSelection(...rows) {
        this.beginSelection();
        const selectedRows = this.selectedRows();
        selectedRows.forEach((selectedRow_i) => {
            if (!rows.includes(selectedRow_i)) {
                selectedRow_i.selected = false;
            }
        });
        rows.forEach((row_i) => {
            if (!row_i.selected) {
                row_i.selected = true;
            }
        });
        this.endSelection();
    }
    #addCellsToSelection(...cells) {
        this.beginSelection();
        cells.forEach((cell_i) => {
            if (!cell_i.selected) {
                cell_i.selected = true;
            }
        });
        this.endSelection();
    }
    #addRowsToSelection(...rows) {
        this.beginSelection();
        rows.forEach((row_i) => {
            if (!row_i.selected) {
                row_i.selected = true;
            }
        });
        this.endSelection();
    }
    #removeCellsFromSelection(...cells) {
        this.beginSelection();
        const selectedCells = this.selectedCells();
        cells.forEach((cell_i) => {
            if (selectedCells.includes(cell_i)) {
                cell_i.selected = false;
            }
        });
        this.endSelection();
    }
    #removeRowsFromSelection(...rows) {
        this.beginSelection();
        const selectedRows = this.selectedRows();
        rows.forEach((row_i) => {
            if (selectedRows.includes(row_i)) {
                row_i.selected = false;
            }
        });
        this.endSelection();
    }
    #clearCellsSelection() {
        this.beginSelection();
        const selectedCells = this.selectedCells();
        selectedCells.forEach((cell_i) => {
            if (cell_i.selected) {
                cell_i.selected = false;
            }
        });
        this.endSelection();
    }
    #clearRowsSelection() {
        this.beginSelection();
        const selectedRows = this.selectedRows();
        selectedRows.forEach((row_i) => {
            if (row_i.selected) {
                row_i.selected = false;
            }
        });
        this.endSelection();
    }
    #setActiveCell(cell) {
        const { activeCell } = this;
        if (activeCell !== null && activeCell !== cell) {
            activeCell.active = false;
            activeCell.tabIndex = -1;
        }
        if (cell !== null) {
            const cellsWalker = this.#cellsWalker;
            cellsWalker.currentNode = cell;
            cell.active = true;
            cell.tabIndex = 0;
        }
    }
    #setActiveRow(row) {
        const { activeRow } = this;
        if (activeRow !== null && activeRow !== row) {
            activeRow.active = false;
            activeRow.tabIndex = -1;
        }
        if (row !== null) {
            const rowsWalker = this.#rowsWalker;
            rowsWalker.currentNode = row;
            row.active = true;
            row.tabIndex = 0;
        }
    }
    #firstCell(row) {
        const cellsWalker = this.#cellsWalker;
        cellsWalker.currentNode = row;
        return cellsWalker.firstChild();
    }
    #lastCell(row) {
        const cellsWalker = this.#cellsWalker;
        cellsWalker.currentNode = row;
        return cellsWalker.lastChild();
    }
    #previousCell(cell) {
        const cellsWalker = this.#cellsWalker;
        cellsWalker.currentNode = cell;
        return cellsWalker.previousNode();
    }
    #nextCell(cell) {
        const cellsWalker = this.#cellsWalker;
        cellsWalker.currentNode = cell;
        return cellsWalker.nextNode();
    }
    #closestRow(cell) {
        const rowsWalker = this.#rowsWalker;
        rowsWalker.currentNode = cell;
        return rowsWalker.parentNode();
    }
    #firstRow() {
        const rowsWalker = this.#rowsWalker;
        const { root } = rowsWalker;
        rowsWalker.currentNode = root;
        return rowsWalker.firstChild();
    }
    #lastRow() {
        const rowsWalker = this.#rowsWalker;
        const { root } = rowsWalker;
        rowsWalker.currentNode = root;
        return rowsWalker.lastChild();
    }
    #previousRow(row) {
        const rowsWalker = this.#rowsWalker;
        rowsWalker.currentNode = row;
        return rowsWalker.previousNode();
    }
    #nextRow(row) {
        const rowsWalker = this.#rowsWalker;
        rowsWalker.currentNode = row;
        return rowsWalker.nextNode();
    }
    #topCell(cell) {
        const closestRow = this.#closestRow(cell);
        if (closestRow) {
            const closestRowCells = closestRow.cells();
            const cellIndex = closestRowCells.indexOf(cell);
            const previousRow = this.#previousRow(closestRow);
            if (previousRow) {
                const previousRowCells = previousRow.cells();
                return previousRowCells[Math.min(cellIndex, previousRowCells.length)];
            }
        }
        return null;
    }
    #bottomCell(cell) {
        const closestRow = this.#closestRow(cell);
        if (closestRow) {
            const closestRowCells = closestRow.cells();
            const cellIndex = closestRowCells.indexOf(cell);
            const nextRow = this.#nextRow(closestRow);
            if (nextRow) {
                const nextRowCells = nextRow.cells();
                return nextRowCells[Math.min(cellIndex, nextRowCells.length)];
            }
        }
        return null;
    }
    #handleClickEvent(event) {
        const { ctrlKey, shiftKey } = event;
        const { selectby } = this;
        switch (selectby) {
            case "cell": {
                const composedPath = event.composedPath();
                const targetCell = composedPath.find(target_i => target_i instanceof _GridBody__WEBPACK_IMPORTED_MODULE_2__.HTMLEGridBodyElement) ? composedPath.find(target_i => target_i instanceof _GridCell__WEBPACK_IMPORTED_MODULE_3__.HTMLEGridCellElement) : null;
                const selectedCells = this.selectedCells();
                if (targetCell instanceof _GridCell__WEBPACK_IMPORTED_MODULE_3__.HTMLEGridCellElement) {
                    if (!shiftKey && !ctrlKey) {
                        this.#setCellsSelection(targetCell);
                    }
                    else if (ctrlKey) {
                        !targetCell.selected ?
                            this.#addCellsToSelection(targetCell) :
                            this.#removeCellsFromSelection(targetCell);
                    }
                    else if (shiftKey) {
                        const lastSelectedCell = selectedCells[selectedCells.length - 1];
                        if (lastSelectedCell) {
                            const range = this.#getCellsRange(lastSelectedCell, targetCell);
                            if (range) {
                                selectedCells.includes(targetCell) ?
                                    this.#removeCellsFromSelection(...range) :
                                    this.#addCellsToSelection(...range);
                            }
                        }
                        else {
                            this.#setCellsSelection(targetCell);
                        }
                    }
                }
                break;
            }
            case "row": {
                const selectedRows = this.selectedRows();
                const composedPath = event.composedPath();
                const targetRow = composedPath.find(target_i => target_i instanceof _GridBody__WEBPACK_IMPORTED_MODULE_2__.HTMLEGridBodyElement) ? composedPath.find(target_i => target_i instanceof _GridRow__WEBPACK_IMPORTED_MODULE_5__.HTMLEGridRowElement) : null;
                if (targetRow instanceof _GridRow__WEBPACK_IMPORTED_MODULE_5__.HTMLEGridRowElement) {
                    if (!shiftKey && !ctrlKey) {
                        this.#setRowsSelection(targetRow);
                    }
                    else if (ctrlKey) {
                        !targetRow.selected ?
                            this.#addRowsToSelection(targetRow) :
                            this.#removeRowsFromSelection(targetRow);
                    }
                    else if (shiftKey) {
                        const lastSelectedRow = selectedRows[selectedRows.length - 1];
                        if (lastSelectedRow) {
                            const range = this.#getRowsRange(lastSelectedRow, targetRow);
                            if (range) {
                                selectedRows.includes(targetRow) ?
                                    this.#removeRowsFromSelection(...range) :
                                    this.#addRowsToSelection(...range);
                            }
                        }
                        else {
                            this.#setRowsSelection(targetRow);
                        }
                    }
                }
                break;
            }
        }
        event.stopPropagation();
    }
    #handleContextMenuEvent(event) {
        event.stopPropagation();
    }
    #handleDblClickEvent(event) {
        event.stopPropagation();
    }
    #handleKeyDownEvent(event) {
        const { key } = event;
        const { selectby, activeCell, activeRow } = this;
        switch (key) {
            case "a": {
                const { ctrlKey } = event;
                if (ctrlKey) {
                    switch (selectby) {
                        case "cell": {
                            const firstRow = this.#firstRow();
                            const firstCell = firstRow ? this.#firstCell(firstRow) : null;
                            const lastRow = this.#lastRow();
                            const lastCell = lastRow ? this.#lastCell(lastRow) : null;
                            if (firstCell && lastCell) {
                                const range = this.#getCellsRange(firstCell, lastCell);
                                if (range) {
                                    this.#setCellsSelection(...range);
                                }
                            }
                            break;
                        }
                        case "row": {
                            const firstRow = this.#firstRow();
                            const lastRow = this.#lastRow();
                            if (firstRow && lastRow) {
                                const range = this.#getRowsRange(firstRow, lastRow);
                                if (range) {
                                    this.#setRowsSelection(...range);
                                }
                            }
                            break;
                        }
                    }
                }
                event.preventDefault();
                break;
            }
            case "ArrowLeft": {
                if (selectby == "cell") {
                    if (activeCell) {
                        const previousCell = this.#previousCell(activeCell);
                        if (previousCell) {
                            previousCell.focus({ preventScroll: true });
                            const { shiftKey } = event;
                            if (shiftKey) {
                                previousCell.selected ?
                                    this.#removeCellsFromSelection(previousCell) :
                                    this.#addCellsToSelection(previousCell);
                            }
                        }
                    }
                }
                event.stopPropagation();
                break;
            }
            case "ArrowRight": {
                if (selectby == "cell") {
                    if (activeCell) {
                        const nextCell = this.#nextCell(activeCell);
                        if (nextCell) {
                            nextCell.focus({ preventScroll: true });
                            const { shiftKey } = event;
                            if (shiftKey) {
                                nextCell.selected ?
                                    this.#removeCellsFromSelection(nextCell) :
                                    this.#addCellsToSelection(nextCell);
                            }
                        }
                    }
                }
                event.stopPropagation();
                break;
            }
            case "ArrowUp": {
                switch (selectby) {
                    case "cell": {
                        const firstRow = activeRow ?? this.#firstRow();
                        const topCell = activeCell ?
                            this.#topCell(activeCell) :
                            firstRow ?
                                this.#firstCell(firstRow) :
                                null;
                        if (topCell) {
                            topCell.focus({ preventScroll: true });
                            const { shiftKey } = event;
                            if (shiftKey) {
                                topCell.selected ?
                                    this.#removeCellsFromSelection(topCell) :
                                    this.#addCellsToSelection(topCell);
                            }
                        }
                        break;
                    }
                    case "row": {
                        const previousRow = activeRow ?
                            this.#previousRow(activeRow) :
                            this.#firstRow();
                        if (previousRow) {
                            previousRow.focus({ preventScroll: true });
                            const { shiftKey } = event;
                            if (shiftKey) {
                                previousRow.selected ?
                                    this.#removeRowsFromSelection(previousRow) :
                                    this.#addRowsToSelection(previousRow);
                            }
                        }
                        break;
                    }
                }
                event.stopPropagation();
                break;
            }
            case "ArrowDown": {
                switch (selectby) {
                    case "cell":
                        {
                            const lastRow = activeRow ?? this.#lastRow();
                            const bottomCell = activeCell ?
                                this.#bottomCell(activeCell) :
                                lastRow ?
                                    this.#lastCell(lastRow) :
                                    null;
                            if (bottomCell) {
                                bottomCell.focus({ preventScroll: true });
                                const { shiftKey } = event;
                                if (shiftKey) {
                                    bottomCell.selected ?
                                        this.#removeCellsFromSelection(bottomCell) :
                                        this.#addCellsToSelection(bottomCell);
                                }
                            }
                        }
                        break;
                    case "row": {
                        const nextRow = activeRow ?
                            this.#nextRow(activeRow) :
                            this.#lastRow();
                        if (nextRow) {
                            nextRow.focus({ preventScroll: true });
                            const { shiftKey } = event;
                            if (shiftKey) {
                                nextRow.selected ?
                                    this.#removeRowsFromSelection(nextRow) :
                                    this.#addRowsToSelection(nextRow);
                            }
                        }
                        break;
                    }
                }
                event.stopPropagation();
                break;
            }
            case "Home": {
                switch (selectby) {
                    case "cell": {
                        if (activeRow) {
                            const firstCell = this.#firstCell(activeRow);
                            if (firstCell) {
                                firstCell.focus({ preventScroll: true });
                            }
                        }
                        break;
                    }
                    case "row": {
                        const firstRow = this.#firstRow();
                        if (firstRow) {
                            firstRow.focus({ preventScroll: true });
                        }
                        break;
                    }
                }
                event.stopPropagation();
                break;
            }
            case "End": {
                switch (selectby) {
                    case "cell": {
                        if (activeRow) {
                            const lastCell = this.#lastCell(activeRow);
                            if (lastCell) {
                                lastCell.focus({ preventScroll: true });
                            }
                        }
                        break;
                    }
                    case "row": {
                        const lastRow = this.#lastRow();
                        if (lastRow) {
                            lastRow.focus({ preventScroll: true });
                        }
                        break;
                    }
                }
                event.stopPropagation();
                break;
            }
            case "Enter": {
                switch (selectby) {
                    case "cell": {
                        if (activeCell) {
                            this.#setCellsSelection(activeCell);
                            activeCell.click();
                        }
                        break;
                    }
                    case "row": {
                        if (activeRow) {
                            this.#setRowsSelection(activeRow);
                            activeRow.click();
                        }
                        break;
                    }
                }
                event.stopPropagation();
                break;
            }
            case "Escape": {
                switch (selectby) {
                    case "cell": {
                        this.#clearCellsSelection();
                        this.#setActiveCell(null);
                        break;
                    }
                    case "row": {
                        this.#clearRowsSelection();
                        this.#setActiveRow(null);
                        break;
                    }
                }
                this.focus();
                event.stopPropagation();
                break;
            }
        }
    }
    #handleFocusEvent(event) {
        const { relatedTarget } = event;
        const { selectby } = this;
        switch (selectby) {
            case "cell": {
                const { activeCell } = this;
                if (activeCell && relatedTarget !== activeCell) {
                    activeCell.focus();
                }
                break;
            }
            case "row": {
                const { activeRow } = this;
                if (activeRow && relatedTarget !== activeRow) {
                    activeRow.focus();
                }
                break;
            }
        }
    }
    #handleFocusInEvent(event) {
        const { target } = event;
        const { selectby } = this;
        switch (selectby) {
            case "cell": {
                const targetCell = target.closest("e-gridcell");
                if (targetCell) {
                    this.#setActiveCell(targetCell);
                }
                break;
            }
            case "row": {
                const targetRow = target.closest("e-gridrow");
                if (targetRow) {
                    this.#setActiveRow(targetRow);
                }
                break;
            }
        }
    }
    #handleSelectEvent() {
        if (this.#onSelection) {
            this.#hasSelectionChanged = true;
        }
        else {
            this.dispatchEvent(new Event("selectionchange", { bubbles: true }));
        }
    }
    #handleSlotChangeEvent(event) {
        const { target } = event;
        const assignedRows = target
            .assignedElements()
            .filter(element_i => element_i instanceof _GridRow__WEBPACK_IMPORTED_MODULE_5__.HTMLEGridRowElement);
        assignedRows.forEach((row_i, i) => {
            row_i.posinset = i;
        });
    }
};
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String })
], HTMLEGridElementBase.prototype, "name", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String, defaultValue: "cell" })
], HTMLEGridElementBase.prototype, "selectby", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean })
], HTMLEGridElementBase.prototype, "multiselectable", void 0);
HTMLEGridElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.CustomElement)({
        name: "e-grid"
    })
], HTMLEGridElementBase);
var HTMLEGridElement = HTMLEGridElementBase;
//# sourceMappingURL=Grid.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/grid/GridBody.js":
/*!**********************************************************!*\
  !*** ../editor/lib/elements/containers/grid/GridBody.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEGridBodyElement": () => (/* binding */ HTMLEGridBodyElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var _GridCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridCell */ "../editor/lib/elements/containers/grid/GridCell.js");
/* harmony import */ var _GridRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GridRow */ "../editor/lib/elements/containers/grid/GridRow.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var shadowTemplate;
var style;
let HTMLEGridBodyElementBase = class HTMLEGridBodyElementBase extends HTMLElement {
    cells() {
        return Array.from(this.querySelectorAll("e-gridcell"));
    }
    rows() {
        return Array.from(this.querySelectorAll("e-gridrow"));
    }
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("slot"));
        style = /*css*/ `
            :host {
                display: table-row-group;
            }
        `;
    }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
        shadowRoot.addEventListener("slotchange", this.#handleSlotChangeEvent.bind(this));
    }
    #handleSlotChangeEvent(event) {
        const { target } = event;
        const assignedItems = target
            .assignedElements()
            .filter(element_i => element_i instanceof _GridCell__WEBPACK_IMPORTED_MODULE_1__.HTMLEGridCellElement);
        assignedItems.forEach((item_i, i) => {
            item_i.posinset = i;
        });
    }
};
HTMLEGridBodyElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.CustomElement)({
        name: "e-gridbody"
    })
], HTMLEGridBodyElementBase);
var HTMLEGridBodyElement = HTMLEGridBodyElementBase;
//# sourceMappingURL=GridBody.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/grid/GridCell.js":
/*!**********************************************************!*\
  !*** ../editor/lib/elements/containers/grid/GridCell.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEGridCellElement": () => (/* binding */ HTMLEGridCellElement)
/* harmony export */ });
/* harmony import */ var _stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../stylesheets/Theme */ "../editor/lib/stylesheets/Theme.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var shadowTemplate;
var style;
let HTMLEGridCellElementBase = class HTMLEGridCellElementBase extends HTMLElement {
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("slot"));
        style = /*css*/ `
            :host {
                display: table-cell;
                text-align: left;
            }
            
            :host([type="columnheader"]:hover) {
                background-color: var(--theme-hovered-item-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_HOVERED_ITEM_COLOR});
            }
            
            :host(:hover):host-context(e-grid:is(:not([selectby]), [selectby="cell"])) {
                background-color: var(--theme-hovered-item-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_HOVERED_ITEM_COLOR});
            }
            
            :host([type="columnheader"][active]) {
                background-color: var(--theme-focused-item-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_FOCUSED_ITEM_COLOR});
            }
            
            :host([active]):host-context(e-grid:focus-within:is(:not([selectby]), [selectby="cell"])) {
                outline: 1px solid var(--theme-focused-item-outline-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_FOCUSED_ITEM_OUTLINE_COLOR});
                outline-offset: -1px;
            }
            
            :host([selected]):host-context(e-grid:is(:not([selectby]), [selectby="cell"])) {
                background-color: var(--theme-selected-item-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_SELECTED_ITEM_COLOR});
            }
        `;
    }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "selected": {
                this.dispatchEvent(new Event("select", { bubbles: true }));
                break;
            }
        }
    }
};
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String })
], HTMLEGridCellElementBase.prototype, "name", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String })
], HTMLEGridCellElementBase.prototype, "headers", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String })
], HTMLEGridCellElementBase.prototype, "type", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Number })
], HTMLEGridCellElementBase.prototype, "posinset", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean })
], HTMLEGridCellElementBase.prototype, "droptarget", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean })
], HTMLEGridCellElementBase.prototype, "active", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean, observed: true })
], HTMLEGridCellElementBase.prototype, "selected", void 0);
HTMLEGridCellElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.CustomElement)({
        name: "e-gridcell"
    })
], HTMLEGridCellElementBase);
var HTMLEGridCellElement = HTMLEGridCellElementBase;
//# sourceMappingURL=GridCell.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/grid/GridHead.js":
/*!**********************************************************!*\
  !*** ../editor/lib/elements/containers/grid/GridHead.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEGridHeadElement": () => (/* binding */ HTMLEGridHeadElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var _GridCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridCell */ "../editor/lib/elements/containers/grid/GridCell.js");
/* harmony import */ var _GridRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GridRow */ "../editor/lib/elements/containers/grid/GridRow.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var shadowTemplate;
var style;
let HTMLEGridHeadElementBase = class HTMLEGridHeadElementBase extends HTMLElement {
    cells() {
        return Array.from(this.querySelectorAll("e-gridcell"));
    }
    rows() {
        return Array.from(this.querySelectorAll("e-gridrow"));
    }
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("slot"));
        style = /*css*/ `
            :host {
                display: table-header-group;
            }
        `;
    }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
        shadowRoot.addEventListener("slotchange", this.#handleSlotChangeEvent.bind(this));
    }
    #handleSlotChangeEvent(event) {
        const { target } = event;
        const assignedItems = target
            .assignedElements()
            .filter(element_i => element_i instanceof _GridCell__WEBPACK_IMPORTED_MODULE_1__.HTMLEGridCellElement);
        assignedItems.forEach((item_i, i) => {
            item_i.posinset = i;
        });
    }
};
HTMLEGridHeadElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.CustomElement)({
        name: "e-gridhead"
    })
], HTMLEGridHeadElementBase);
var HTMLEGridHeadElement = HTMLEGridHeadElementBase;
//# sourceMappingURL=GridHead.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/grid/GridRow.js":
/*!*********************************************************!*\
  !*** ../editor/lib/elements/containers/grid/GridRow.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEGridRowElement": () => (/* binding */ HTMLEGridRowElement)
/* harmony export */ });
/* harmony import */ var _stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../stylesheets/Theme */ "../editor/lib/stylesheets/Theme.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var _GridCell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GridCell */ "../editor/lib/elements/containers/grid/GridCell.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var shadowTemplate;
var style;
let HTMLEGridRowElementBase = class HTMLEGridRowElementBase extends HTMLElement {
    cells() {
        return Array.from(this.querySelectorAll("e-gridcell"));
    }
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("slot"));
        style = /*css*/ `
            :host {
                display: table-row;
            }
            
            :host(:hover):host-context(e-grid:is([selectby="row"])) {
                background-color: var(--theme-hovered-item-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_HOVERED_ITEM_COLOR});
            }
            
            :host([active]):host-context(e-grid:focus-within:is([selectby="row"])) {
                outline: 1px solid var(--theme-focused-item-outline-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_FOCUSED_ITEM_OUTLINE_COLOR});
                outline-offset: -1px;
            }
            
            :host([selected]):host-context(e-grid:is([selectby="row"])) {
                background-color: var(--theme-selected-item-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_SELECTED_ITEM_COLOR});
            }
        `;
    }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
        shadowRoot.addEventListener("slotchange", this.#handleSlotChangeEvent.bind(this));
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "selected": {
                this.dispatchEvent(new Event("select", { bubbles: true }));
                break;
            }
        }
    }
    #handleSlotChangeEvent(event) {
        const { target } = event;
        const assignedCells = target
            .assignedElements()
            .filter(element_i => element_i instanceof _GridCell__WEBPACK_IMPORTED_MODULE_2__.HTMLEGridCellElement);
        assignedCells.forEach((cell_i, i) => {
            cell_i.posinset = i;
        });
    }
};
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String })
], HTMLEGridRowElementBase.prototype, "name", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean })
], HTMLEGridRowElementBase.prototype, "active", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean })
], HTMLEGridRowElementBase.prototype, "selected", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Number })
], HTMLEGridRowElementBase.prototype, "posinset", void 0);
HTMLEGridRowElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.CustomElement)({
        name: "e-gridrow"
    })
], HTMLEGridRowElementBase);
var HTMLEGridRowElement = HTMLEGridRowElementBase;
//# sourceMappingURL=GridRow.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/grid/GridRowGroup.js":
/*!**************************************************************!*\
  !*** ../editor/lib/elements/containers/grid/GridRowGroup.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEGridRowGroupElement": () => (/* binding */ HTMLEGridRowGroupElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var _GridRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridRow */ "../editor/lib/elements/containers/grid/GridRow.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var shadowTemplate;
var style;
let HTMLEGridRowGroupElementBase = class HTMLEGridRowGroupElementBase extends HTMLElement {
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("slot"));
        style = /*css*/ `
            :host {
                display: table-row-group;
            }
        `;
    }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
        shadowRoot.addEventListener("slotchange", this.#handleSlotChangeEvent.bind(this));
    }
    #handleSlotChangeEvent(event) {
        const { target } = event;
        const assignedItems = target
            .assignedElements()
            .filter(element_i => element_i instanceof _GridRow__WEBPACK_IMPORTED_MODULE_1__.HTMLEGridRowElement);
        assignedItems.forEach((item_i, i) => {
            item_i.posinset = i;
        });
    }
};
HTMLEGridRowGroupElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.CustomElement)({
        name: "e-gridrowgroup"
    })
], HTMLEGridRowGroupElementBase);
var HTMLEGridRowGroupElement = HTMLEGridRowGroupElementBase;
//# sourceMappingURL=GridRowGroup.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/grid/index.js":
/*!*******************************************************!*\
  !*** ../editor/lib/elements/containers/grid/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEGridBodyElement": () => (/* reexport safe */ _GridBody__WEBPACK_IMPORTED_MODULE_1__.HTMLEGridBodyElement),
/* harmony export */   "HTMLEGridCellElement": () => (/* reexport safe */ _GridCell__WEBPACK_IMPORTED_MODULE_2__.HTMLEGridCellElement),
/* harmony export */   "HTMLEGridElement": () => (/* reexport safe */ _Grid__WEBPACK_IMPORTED_MODULE_0__.HTMLEGridElement),
/* harmony export */   "HTMLEGridHeadElement": () => (/* reexport safe */ _GridHead__WEBPACK_IMPORTED_MODULE_3__.HTMLEGridHeadElement),
/* harmony export */   "HTMLEGridRowElement": () => (/* reexport safe */ _GridRow__WEBPACK_IMPORTED_MODULE_4__.HTMLEGridRowElement),
/* harmony export */   "HTMLEGridRowGroupElement": () => (/* reexport safe */ _GridRowGroup__WEBPACK_IMPORTED_MODULE_5__.HTMLEGridRowGroupElement)
/* harmony export */ });
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid */ "../editor/lib/elements/containers/grid/Grid.js");
/* harmony import */ var _GridBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridBody */ "../editor/lib/elements/containers/grid/GridBody.js");
/* harmony import */ var _GridCell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GridCell */ "../editor/lib/elements/containers/grid/GridCell.js");
/* harmony import */ var _GridHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GridHead */ "../editor/lib/elements/containers/grid/GridHead.js");
/* harmony import */ var _GridRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GridRow */ "../editor/lib/elements/containers/grid/GridRow.js");
/* harmony import */ var _GridRowGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GridRowGroup */ "../editor/lib/elements/containers/grid/GridRowGroup.js");












//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/lists/List.js":
/*!*******************************************************!*\
  !*** ../editor/lib/elements/containers/lists/List.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEListElement": () => (/* binding */ HTMLEListElement)
/* harmony export */ });
/* harmony import */ var _stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../stylesheets/Theme */ "../editor/lib/stylesheets/Theme.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListItem */ "../editor/lib/elements/containers/lists/ListItem.js");
/* harmony import */ var _ListItemGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListItemGroup */ "../editor/lib/elements/containers/lists/ListItemGroup.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var shadowTemplate;
var style;
let HTMLEListElementBase = class HTMLEListElementBase extends HTMLElement {
    get activeItem() {
        return this.querySelector("e-listitem[active]");
    }
    get dropTargetItem() {
        return this.querySelector("e-listitem[droptarget]");
    }
    #onSelection;
    #hasSelectionChanged;
    #walker;
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("style", {
            children: [
                /*css*/ `

                    `
            ]
        }), (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("slot", {
            children: [
                (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("slot")
            ]
        }));
        style = /*css*/ `
            :host {
                display: block;
            }
            
            :host(:focus) {
                outline: 1px solid var(--theme-focused-item-outline-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_FOCUSED_ITEM_OUTLINE_COLOR});
                outline-offset: -1px;
            }
        `;
    }
    items() {
        return Array.from(this.querySelectorAll(":is(:scope, :scope > e-listitemgroup) > e-listitem"));
    }
    constructor() {
        super();
        this.#walker = document.createTreeWalker(this, NodeFilter.SHOW_ELEMENT, this.#walkerNodeFilter.bind(this));
        this.#onSelection = false;
        this.#hasSelectionChanged = false;
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
        this.addEventListener("contextmenu", this.#handleContextMenuEvent.bind(this));
        this.addEventListener("dragend", this.#handleDragEndEvent.bind(this));
        this.addEventListener("dragenter", this.#handleDragEnterEvent.bind(this));
        this.addEventListener("dragover", this.#handleDragOverEvent.bind(this));
        this.addEventListener("dragleave", this.#handleDragLeaveEvent.bind(this));
        this.addEventListener("dragstart", this.#handleDragStartEvent.bind(this));
        this.addEventListener("drop", this.#handleDropEvent.bind(this));
        this.addEventListener("focus", this.#handleFocusEvent.bind(this));
        this.addEventListener("focusin", this.#handleFocusInEvent.bind(this));
        this.addEventListener("keydown", this.#handleKeyDownEvent.bind(this));
        this.addEventListener("mousedown", this.#handleMouseDownEvent.bind(this));
        this.addEventListener("select", this.#handleSelectEvent.bind(this));
        shadowRoot.addEventListener("slotchange", this.#handleSlotChangeEvent.bind(this));
    }
    connectedCallback() {
        const tabIndex = this.getAttribute("tabindex");
        this.tabIndex = tabIndex === null ? 0 : parseInt(tabIndex);
    }
    beginSelection() {
        this.#onSelection = true;
    }
    endSelection() {
        this.#onSelection = false;
        if (this.#hasSelectionChanged) {
            this.dispatchEvent(new Event("selectionchange", { bubbles: true }));
            this.#hasSelectionChanged = false;
        }
    }
    selectedItems() {
        const selectedItems = [];
        const walker = this.#walker;
        walker.currentNode = walker.root;
        let item = this.#firstItem();
        while (item !== null) {
            if (item.selected) {
                selectedItems.push(item);
            }
            item = this.#nextItem(item);
        }
        return selectedItems;
    }
    #walkerNodeFilter(node) {
        if (node instanceof _ListItem__WEBPACK_IMPORTED_MODULE_2__.HTMLEListItemElement) {
            return NodeFilter.FILTER_ACCEPT;
        }
        if (node instanceof _ListItemGroup__WEBPACK_IMPORTED_MODULE_3__.HTMLEListItemGroupElement) {
            return NodeFilter.FILTER_SKIP;
        }
        return NodeFilter.FILTER_REJECT;
    }
    #getItemsRange(from, to) {
        const items = this.items();
        const fromIndex = items.indexOf(from);
        const toIndex = items.indexOf(to);
        if (fromIndex > -1 && toIndex > -1) {
            if (from == to) {
                return [from];
            }
            return items.slice(Math.min(fromIndex, toIndex), Math.max(fromIndex, toIndex) + 1);
        }
        return [];
    }
    #setSelection(...items) {
        this.beginSelection();
        const selectedItems = this.selectedItems();
        selectedItems.forEach((selectedItem_i) => {
            if (!items.includes(selectedItem_i)) {
                selectedItem_i.selected = false;
            }
        });
        items.forEach((item_i) => {
            if (this.contains(item_i) && !item_i.selected) {
                item_i.selected = true;
            }
        });
        this.endSelection();
    }
    #addToSelection(...items) {
        this.beginSelection();
        items.forEach((item_i) => {
            if (!item_i.selected) {
                item_i.selected = true;
            }
        });
        this.endSelection();
    }
    #removeFromSelection(...items) {
        this.beginSelection();
        const selectedItems = this.selectedItems();
        items.forEach((item_i) => {
            if (selectedItems.includes(item_i)) {
                item_i.selected = false;
            }
        });
        this.endSelection();
    }
    #clearSelection() {
        this.beginSelection();
        const selectedItems = this.selectedItems();
        selectedItems.forEach((item_i) => {
            if (item_i.selected) {
                item_i.selected = false;
            }
        });
        this.endSelection();
    }
    #setActiveItem(item) {
        const { activeItem, items } = this;
        if (activeItem !== null && activeItem !== item) {
            activeItem.active = false;
            activeItem.tabIndex = -1;
        }
        if (item !== null) {
            item.active = true;
            item.tabIndex = 0;
        }
    }
    #setDropTargetItem(item) {
        const { dropTargetItem } = this;
        if (dropTargetItem !== null && dropTargetItem !== item) {
            dropTargetItem.droptarget = false;
        }
        if (item !== null) {
            this.droptarget = true;
            item.droptarget = true;
        }
        else {
            this.droptarget = false;
        }
    }
    #firstItem() {
        const walker = this.#walker;
        const { root } = walker;
        walker.currentNode = root;
        return walker.firstChild();
    }
    #lastItem() {
        const walker = this.#walker;
        const { root } = walker;
        walker.currentNode = root;
        return walker.lastChild();
    }
    #previousItem(item) {
        const walker = this.#walker;
        walker.currentNode = item;
        const previousItem = walker.previousNode();
        return previousItem;
    }
    #nextItem(item) {
        const walker = this.#walker;
        walker.currentNode = item;
        const nextItem = walker.nextNode();
        return nextItem;
    }
    #handleContextMenuEvent(event) {
        const { target } = event;
        if (target instanceof _ListItem__WEBPACK_IMPORTED_MODULE_2__.HTMLEListItemElement) {
            const selectedItems = this.selectedItems();
            if (!selectedItems.includes(target)) {
                this.#setSelection(target);
            }
            target.focus({ preventScroll: true });
            event.preventDefault();
        }
    }
    #handleDragEndEvent() {
        this.#setDropTargetItem(null);
    }
    #handleDragEnterEvent(event) {
        const { target } = event;
        if (target instanceof _ListItem__WEBPACK_IMPORTED_MODULE_2__.HTMLEListItemElement) {
            this.#setDropTargetItem(target);
        }
        event.preventDefault();
    }
    #handleDragOverEvent(event) {
        event.preventDefault();
    }
    #handleDragLeaveEvent(event) {
        const { relatedTarget } = event;
        if (relatedTarget instanceof Element) {
            const parentItem = relatedTarget.closest("e-listitem");
            if (!parentItem) {
                let rootNode = relatedTarget;
                while (!(rootNode instanceof _ListItem__WEBPACK_IMPORTED_MODULE_2__.HTMLEListItemElement || rootNode instanceof Document)) {
                    rootNode = rootNode.getRootNode();
                    if (rootNode instanceof ShadowRoot) {
                        rootNode = rootNode.host;
                    }
                }
                if (rootNode instanceof Document) {
                    this.#setDropTargetItem(null);
                }
            }
        }
    }
    #handleDragStartEvent(event) {
        const { target } = event;
        if (target instanceof _ListItem__WEBPACK_IMPORTED_MODULE_2__.HTMLEListItemElement) {
            const selectedItems = this.selectedItems();
            if (!selectedItems.includes(target)) {
                this.#setSelection(target);
            }
        }
    }
    #handleDropEvent() {
        this.#setDropTargetItem(null);
    }
    #handleFocusEvent(event) {
        const { relatedTarget } = event;
        const { activeItem } = this;
        if (activeItem && relatedTarget !== activeItem) {
            activeItem.focus();
        }
    }
    #handleFocusInEvent(event) {
        const { target } = event;
        if (target instanceof _ListItem__WEBPACK_IMPORTED_MODULE_2__.HTMLEListItemElement) {
            this.#setActiveItem(target);
        }
    }
    #handleKeyDownEvent(event) {
        const { key } = event;
        const { activeItem } = this;
        switch (key) {
            case "a": {
                const { ctrlKey } = event;
                if (ctrlKey) {
                    const walker = this.#walker;
                    const { root } = walker;
                    const firstItem = (walker.currentNode = walker.parentNode() ?? root, walker.firstChild());
                    const lastItem = (walker.currentNode = walker.parentNode() ?? root, walker.lastChild());
                    const range = this.#getItemsRange(firstItem, lastItem);
                    if (range) {
                        this.#setSelection(...range);
                    }
                }
                event.preventDefault();
                break;
            }
            case "ArrowUp": {
                if (activeItem) {
                    const previousItem = this.#previousItem(activeItem);
                    if (previousItem) {
                        previousItem.focus({ preventScroll: true });
                        const { shiftKey } = event;
                        if (shiftKey) {
                            previousItem.selected ?
                                this.#removeFromSelection(previousItem) :
                                this.#addToSelection(previousItem);
                        }
                    }
                }
                else {
                    const firstItem = this.#firstItem();
                    if (firstItem) {
                        firstItem.focus({ preventScroll: true });
                    }
                }
                event.stopPropagation();
                break;
            }
            case "ArrowDown": {
                if (activeItem) {
                    const nextItem = this.#nextItem(activeItem);
                    if (nextItem) {
                        nextItem.focus({ preventScroll: true });
                        const { shiftKey } = event;
                        if (shiftKey) {
                            nextItem.selected ?
                                this.#removeFromSelection(nextItem) :
                                this.#addToSelection(nextItem);
                        }
                    }
                }
                else {
                    const lastItem = this.#lastItem();
                    if (lastItem) {
                        lastItem.focus({ preventScroll: true });
                    }
                }
                event.stopPropagation();
                break;
            }
            case "Home": {
                const firstItem = this.#firstItem();
                if (firstItem) {
                    firstItem.focus({ preventScroll: true });
                }
                event.stopPropagation();
                break;
            }
            case "End": {
                const lastItem = this.#lastItem();
                if (lastItem) {
                    lastItem.focus({ preventScroll: true });
                }
                event.stopPropagation();
                break;
            }
            case "Enter": {
                const { activeItem } = this;
                if (activeItem) {
                    this.#setSelection(activeItem);
                    activeItem.click();
                }
                event.stopPropagation();
                break;
            }
            case "Escape": {
                this.#clearSelection();
                this.#setActiveItem(null);
                this.focus();
                event.stopPropagation();
                break;
            }
        }
    }
    #handleMouseDownEvent(event) {
        const { target, ctrlKey, shiftKey } = event;
        const selectedItems = this.selectedItems();
        if (target instanceof _ListItem__WEBPACK_IMPORTED_MODULE_2__.HTMLEListItemElement) {
            if (!shiftKey && !ctrlKey) {
                this.#setSelection(target);
            }
            else if (ctrlKey) {
                (!target.selected) ?
                    this.#addToSelection(target) :
                    this.#removeFromSelection(target);
                event.stopPropagation();
            }
            else if (shiftKey) {
                const lastSelectedItem = selectedItems[selectedItems.length - 1];
                if (lastSelectedItem) {
                    const range = this.#getItemsRange(lastSelectedItem, target);
                    if (range) {
                        if (selectedItems.includes(target)) {
                            this.#removeFromSelection(...range);
                        }
                        else {
                            this.#addToSelection(...range);
                        }
                    }
                }
                else {
                    this.#setSelection(target);
                }
                event.stopPropagation();
            }
        }
    }
    #handleSelectEvent() {
        if (!this.#onSelection) {
            this.dispatchEvent(new Event("selectionchange", { bubbles: true }));
        }
    }
    #handleSlotChangeEvent(event) {
        const { target } = event;
        const assignedItems = target
            .assignedElements()
            .filter(element_i => element_i instanceof _ListItem__WEBPACK_IMPORTED_MODULE_2__.HTMLEListItemElement);
        assignedItems.forEach((item_i, i) => {
            item_i.posinset = i;
        });
    }
};
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String })
], HTMLEListElementBase.prototype, "name", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean })
], HTMLEListElementBase.prototype, "droptarget", void 0);
HTMLEListElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.CustomElement)({
        name: "e-list"
    })
], HTMLEListElementBase);
var HTMLEListElement = HTMLEListElementBase;
//# sourceMappingURL=List.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/lists/ListItem.js":
/*!***********************************************************!*\
  !*** ../editor/lib/elements/containers/lists/ListItem.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEListItemElement": () => (/* binding */ HTMLEListItemElement)
/* harmony export */ });
/* harmony import */ var _stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../stylesheets/Theme */ "../editor/lib/stylesheets/Theme.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var _menus_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menus/Menu */ "../editor/lib/elements/containers/menus/Menu.js");
/* harmony import */ var _toolbars_ToolBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toolbars/ToolBar */ "../editor/lib/elements/containers/toolbars/ToolBar.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var shadowTemplate;
var style;
let HTMLEListItemElementBase = class HTMLEListItemElementBase extends HTMLElement {
    get badge() {
        return this.#badge;
    }
    get toolbar() {
        return this.#toolbar;
    }
    get menu() {
        return this.#menu;
    }
    #badge;
    #toolbar;
    #menu;
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("slot"));
        style = /*css*/ `
            :host {
                display: flex;
                user-select: none;
                line-height: 22px;
            }
            
            :host([droptarget]) {
                background-color: var(--theme-droptarget-item-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_DROPTARGET_ITEM_COLOR});
            }
            
            :host(:hover) {
                background-color: var(--theme-hovered-item-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_HOVERED_ITEM_COLOR});
            }
            
            :host([active]) {
                outline: 1px solid var(--theme-focused-item-outline-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_FOCUSED_ITEM_OUTLINE_COLOR});
                outline-offset: -1px;
            }
            
            :host(:focus) {
                background-color: var(--theme-focused-item-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_FOCUSED_ITEM_COLOR});
            }
            
            :host([selected]) {
                background-color: var(--theme-selected-item-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_SELECTED_ITEM_COLOR});
            }
        `;
    }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
        this.#badge = null;
        this.#menu = null;
        this.#toolbar = null;
        shadowRoot.addEventListener("slotchange", this.#handleSlotChangeEvent.bind(this));
    }
    connectedCallback() {
        const { tabIndex } = this;
        this.tabIndex = tabIndex;
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "selected": {
                this.dispatchEvent(new Event("select", { bubbles: true }));
                break;
            }
            case "label": {
                const { shadowRoot } = this;
                const labelPart = shadowRoot.querySelector("[part=label]");
                if (labelPart) {
                    labelPart.textContent = newValue;
                }
                break;
            }
        }
    }
    #handleSlotChangeEvent(event) {
        const { target } = event;
        const { name: slotName } = target;
        switch (slotName) {
            case "toolbar": {
                const element = target.assignedElements()[0];
                this.#toolbar = element instanceof _toolbars_ToolBar__WEBPACK_IMPORTED_MODULE_3__.HTMLEToolBarElement ? element : null;
                break;
            }
            case "badge": {
                const element = target.assignedElements()[0];
                this.#badge = element instanceof HTMLSpanElement ? element : null;
                break;
            }
            case "menu": {
                const element = target.assignedElements()[0];
                this.#menu = element instanceof _menus_Menu__WEBPACK_IMPORTED_MODULE_2__.HTMLEMenuElement ? element : null;
                break;
            }
        }
    }
};
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String })
], HTMLEListItemElementBase.prototype, "name", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Number })
], HTMLEListItemElementBase.prototype, "posinset", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String, observed: true })
], HTMLEListItemElementBase.prototype, "label", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean })
], HTMLEListItemElementBase.prototype, "droptarget", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean })
], HTMLEListItemElementBase.prototype, "active", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean, observed: true })
], HTMLEListItemElementBase.prototype, "selected", void 0);
HTMLEListItemElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.CustomElement)({
        name: "e-listitem"
    })
], HTMLEListItemElementBase);
var HTMLEListItemElement = HTMLEListItemElementBase;
//# sourceMappingURL=ListItem.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/lists/ListItemGroup.js":
/*!****************************************************************!*\
  !*** ../editor/lib/elements/containers/lists/ListItemGroup.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEListItemGroupElement": () => (/* binding */ HTMLEListItemGroupElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListItem */ "../editor/lib/elements/containers/lists/ListItem.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var shadowTemplate;
var style;
let HTMLEListItemGroupElementBase = class HTMLEListItemGroupElementBase extends HTMLElement {
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("slot"));
        style = /*css*/ `
            :host {
                display: block;
            }
        `;
    }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
        shadowRoot.addEventListener("slotchange", this.#handleSlotChangeEvent.bind(this));
    }
    #handleSlotChangeEvent(event) {
        const { target } = event;
        const assignedItems = target
            .assignedElements()
            .filter(element_i => element_i instanceof _ListItem__WEBPACK_IMPORTED_MODULE_1__.HTMLEListItemElement);
        assignedItems.forEach((item_i, i) => {
            item_i.posinset = i;
        });
    }
};
HTMLEListItemGroupElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.CustomElement)({
        name: "e-listitemgroup"
    })
], HTMLEListItemGroupElementBase);
var HTMLEListItemGroupElement = HTMLEListItemGroupElementBase;
//# sourceMappingURL=ListItemGroup.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/lists/index.js":
/*!********************************************************!*\
  !*** ../editor/lib/elements/containers/lists/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEListElement": () => (/* reexport safe */ _List__WEBPACK_IMPORTED_MODULE_0__.HTMLEListElement),
/* harmony export */   "HTMLEListItemElement": () => (/* reexport safe */ _ListItem__WEBPACK_IMPORTED_MODULE_1__.HTMLEListItemElement),
/* harmony export */   "HTMLEListItemGroupElement": () => (/* reexport safe */ _ListItemGroup__WEBPACK_IMPORTED_MODULE_2__.HTMLEListItemGroupElement)
/* harmony export */ });
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ "../editor/lib/elements/containers/lists/List.js");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListItem */ "../editor/lib/elements/containers/lists/ListItem.js");
/* harmony import */ var _ListItemGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListItemGroup */ "../editor/lib/elements/containers/lists/ListItemGroup.js");






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/menus/Menu.js":
/*!*******************************************************!*\
  !*** ../editor/lib/elements/containers/menus/Menu.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMenu": () => (/* binding */ EMenu),
/* harmony export */   "HTMLEMenuElement": () => (/* binding */ HTMLEMenuElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem */ "../editor/lib/elements/containers/menus/MenuItem.js");
/* harmony import */ var _MenuItemGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItemGroup */ "../editor/lib/elements/containers/menus/MenuItemGroup.js");
/* harmony import */ var _Snippets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Snippets */ "../editor/lib/elements/Snippets.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HTMLEMenuElementBase_1;








var shadowTemplate;
var style;
var toggleAnimations;
var HIDE_DELAY_MS = 200;
var SHOW_DELAY_MS = 400;
let HTMLEMenuElementBase = HTMLEMenuElementBase_1 = class HTMLEMenuElementBase extends HTMLElement {
    items() {
        return Array.from(this.querySelectorAll(":is(:scope, :scope > e-menuitemgroup) > e-menuitem"));
    }
    get activeIndex() {
        return this.#activeIndex;
    }
    get activeItem() {
        const { activeIndex } = this;
        return (this.querySelector(":is(:scope, :scope > e-menuitemgroup) > e-menuitem:focus-within") ?? activeIndex > -1) ? this.items()[activeIndex] ?? null : null;
    }
    #walker;
    #activeIndex;
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("slot"));
        style = /*css*/ `
            :host {
                display: flex;
                flex-direction: column;
            
                padding: 3px;
                background-color: white;
                width: max-content;
                box-sizing: border-box;
            
                -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0 1px 3px;
                box-shadow: rgba(0, 0, 0, 0.2) 0 1px 3px;
            }
            
            :host([contextual]) {
                z-index: 1;
                position: absolute;
            }
        `;
        toggleAnimations = new WeakMap();
    }
    constructor() {
        super();
        this.#activeIndex = -1;
        this.#walker = document.createTreeWalker(this, NodeFilter.SHOW_ELEMENT, this.#walkerNodeFilter.bind(this));
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
        this.addEventListener("click", this.#handleClickEvent.bind(this));
        this.addEventListener("mouseover", this.#handleMouseOverEvent.bind(this));
        this.addEventListener("mouseout", this.#handleMouseOutEvent.bind(this));
        this.addEventListener("focusin", this.#handleFocusInEvent.bind(this));
        this.addEventListener("focusout", this.#handleFocusOutEvent.bind(this));
        this.addEventListener("keydown", this.#handleKeyDownEvent.bind(this));
    }
    connectedCallback() {
        const tabindex = this.getAttribute("tabindex");
        this.tabIndex = tabindex !== null ? parseInt(tabindex) : -1;
    }
    positionContextual(x, y) {
        const { style } = this;
        const { width: menuWidth, height: menuHeight } = this.getBoundingClientRect();
        const { scrollX, scrollY } = window;
        const left = x + scrollX;
        const top = y + scrollY;
        const { clientWidth, clientHeight } = document.body;
        const overflowX = left + menuWidth - clientWidth;
        const overflowY = top + menuHeight - clientHeight;
        style.setProperty("left", `${overflowX > 0 ? left - menuWidth : left}px`);
        style.setProperty("top", `${overflowY > 0 ? top - menuHeight : top}px`);
    }
    #collapseSubmenus() {
        this.querySelectorAll(":is(:scope, :scope > e-menuitemgroup) > e-menuitem[expanded]")
            .forEach((item_i) => {
            item_i.collapse();
        });
    }
    #nearestItem(target) {
        return Array.from(this.querySelectorAll(":is(:scope, :scope > e-menuitemgroup) > e-menuitem")).find(item_i => item_i.contains(target)) ?? null;
    }
    #walkerNodeFilter(node) {
        if (node instanceof _MenuItem__WEBPACK_IMPORTED_MODULE_1__.HTMLEMenuItemElement) {
            return NodeFilter.FILTER_ACCEPT;
        }
        if (node instanceof _MenuItemGroup__WEBPACK_IMPORTED_MODULE_2__.HTMLEMenuItemGroupElement) {
            return NodeFilter.FILTER_SKIP;
        }
        return NodeFilter.FILTER_REJECT;
    }
    firstItem() {
        const walker = this.#walker;
        walker.currentNode = walker.root;
        return walker.firstChild();
    }
    #lastItem() {
        const walker = this.#walker;
        walker.currentNode = walker.root;
        return walker.lastChild();
    }
    #previousItem(item) {
        const walker = this.#walker;
        walker.currentNode = item;
        return walker.previousNode();
    }
    #nextItem(item) {
        const walker = this.#walker;
        walker.currentNode = item;
        return walker.nextNode();
    }
    #firstChildItem(item) {
        const { menu } = item;
        return menu instanceof HTMLEMenuElementBase_1 ?
            menu.firstItem() :
            null;
    }
    #setActiveItem(item) {
        if (item !== null) {
            this.#activeIndex = this.items().indexOf(item);
        }
    }
    #handleClickEvent(event) {
        const { target } = event;
        const targetItem = target.closest("e-menuitem");
        if (targetItem) {
            const { type, checked } = targetItem;
            switch (type) {
                case "checkbox": {
                    targetItem.checked = !checked;
                    break;
                }
                case "radio": {
                    const { name, value } = targetItem;
                    targetItem.checked = true;
                    this.querySelectorAll(`:is(:scope, :scope > e-menuitemgroup) > e-menuitem[type=radio][name=${name}]`)
                        .forEach((radio_i) => {
                        radio_i.checked = radio_i.value == value;
                    });
                    break;
                }
                case "menu":
                case "submenu": {
                    targetItem.toggle();
                    break;
                }
            }
        }
        event.stopPropagation();
    }
    #handleFocusInEvent(event) {
        const { target } = event;
        if (target instanceof _MenuItem__WEBPACK_IMPORTED_MODULE_1__.HTMLEMenuItemElement) {
            const nearestItem = this.#nearestItem(target);
            if (nearestItem) {
                this.#setActiveItem(nearestItem);
            }
        }
    }
    #handleFocusOutEvent(event) {
        const { relatedTarget } = event;
        const lostFocusWithin = !this.contains(relatedTarget);
        if (lostFocusWithin) {
            const { contextual } = this;
            if (contextual) {
                try {
                    this.remove();
                }
                catch (error) { }
                ;
            }
            else {
                const { activeItem } = this;
                if (activeItem?.expanded) {
                    activeItem.collapse();
                }
                this.#setActiveItem(null);
            }
        }
    }
    #handleKeyDownEvent(event) {
        const { key } = event;
        const { activeItem } = this;
        switch (key) {
            case "ArrowUp": {
                const previousItem = activeItem ?
                    this.#previousItem(activeItem) ?? this.#lastItem() :
                    this.firstItem();
                previousItem?.focus({ preventScroll: true });
                event.stopPropagation();
                break;
            }
            case "ArrowDown": {
                const nextItem = activeItem ?
                    this.#nextItem(activeItem) ?? this.firstItem() :
                    this.firstItem();
                nextItem?.focus({ preventScroll: true });
                event.stopPropagation();
                break;
            }
            case "Home": {
                const firstItem = this.firstItem();
                firstItem?.focus({ preventScroll: true });
                event.stopPropagation();
                break;
            }
            case "End": {
                const lastItem = this.#lastItem();
                lastItem?.focus({ preventScroll: true });
                event.stopPropagation();
                break;
            }
            case "Enter":
            case " ": {
                if (activeItem) {
                    const { type } = activeItem;
                    switch (type) {
                        case "menu":
                        case "submenu": {
                            activeItem.expand();
                            if (activeItem.expanded) {
                                const firstChildItem = this.#firstChildItem(activeItem);
                                firstChildItem?.focus({ preventScroll: true });
                            }
                            break;
                        }
                        default: {
                            activeItem.click();
                            break;
                        }
                    }
                    event.stopPropagation();
                }
                break;
            }
            case "Escape": {
                if (activeItem) {
                    const isClosestTargetMenu = event.composedPath().find(target_i => target_i instanceof HTMLEMenuElement) == this;
                    if (!isClosestTargetMenu) {
                        activeItem.collapse();
                        activeItem.focus({ preventScroll: true });
                        event.stopPropagation();
                    }
                    else {
                        const { contextual } = this;
                        if (contextual) {
                            this.blur();
                            this.dispatchEvent(new Event("close", { bubbles: true }));
                            event.stopPropagation();
                        }
                    }
                }
                break;
            }
            case "ArrowLeft": {
                if (activeItem) {
                    const isClosestTargetMenu = event.composedPath().find(target_i => target_i instanceof HTMLEMenuElement) == this;
                    if (!isClosestTargetMenu) {
                        activeItem.collapse();
                        activeItem.focus({ preventScroll: true });
                        event.stopPropagation();
                    }
                }
                break;
            }
            case "ArrowRight": {
                if (activeItem) {
                    const { type } = activeItem;
                    switch (type) {
                        case "submenu": {
                            if (!activeItem.expanded) {
                                activeItem.expand();
                                const firstChildItem = this.#firstChildItem(activeItem);
                                firstChildItem?.focus({ preventScroll: true });
                                event.stopPropagation();
                            }
                            break;
                        }
                    }
                }
                break;
            }
        }
    }
    #handleMouseOutEvent(event) {
        const { target, relatedTarget } = event;
        if (target instanceof _MenuItem__WEBPACK_IMPORTED_MODULE_1__.HTMLEMenuItemElement) {
            const nearestItem = this.#nearestItem(target);
            if (nearestItem !== null) {
                if (nearestItem.type == "submenu" &&
                    !nearestItem.expanded) {
                    toggleAnimations.get(nearestItem)?.cancel();
                }
                const isTargetClosestMenu = event.composedPath().find(target_i => target_i instanceof HTMLEMenuElement) == this;
                if (isTargetClosestMenu) {
                    const { activeItem } = this;
                    if (activeItem?.type == "submenu" &&
                        activeItem.expanded) {
                        let toggleAnimation = toggleAnimations.get(activeItem);
                        if (toggleAnimation) {
                            toggleAnimation.cancel();
                        }
                        toggleAnimation = activeItem.animate(null, {
                            duration: HIDE_DELAY_MS
                        });
                        toggleAnimations.set(activeItem, toggleAnimation);
                        const { finished } = toggleAnimation;
                        finished
                            .then(() => {
                            activeItem.collapse();
                        })
                            .catch(() => undefined)
                            .finally(() => {
                            toggleAnimations.delete(activeItem);
                        });
                    }
                    const { left, right, top, bottom } = (() => {
                        const parentItem = this.closest("e-menuitem");
                        if (parentItem && !parentItem.expanded) {
                            parentItem.expand();
                            const menuRect = this.getBoundingClientRect();
                            parentItem.collapse();
                            return menuRect;
                        }
                        else {
                            return this.getBoundingClientRect();
                        }
                    })();
                    const { clientX, clientY } = event;
                    const intersectsWithMouse = !(left > clientX || right < clientX || top > clientY || bottom < clientY);
                    const containsRelatedTarget = this.contains(relatedTarget);
                    if (intersectsWithMouse && containsRelatedTarget) {
                        if (relatedTarget instanceof HTMLEMenuElement && relatedTarget !== this) {
                            relatedTarget.focus({ preventScroll: true });
                        }
                        else {
                            this.focus({ preventScroll: true });
                            this.#setActiveItem(null);
                        }
                    }
                    if (!intersectsWithMouse) {
                        this.focus({ preventScroll: true });
                        this.#setActiveItem(null);
                    }
                }
            }
        }
    }
    #handleMouseOverEvent(event) {
        const { target } = event;
        if (target instanceof _MenuItem__WEBPACK_IMPORTED_MODULE_1__.HTMLEMenuItemElement) {
            const nearestItem = this.#nearestItem(target);
            if (nearestItem !== null) {
                if (nearestItem.type === "submenu" && nearestItem.expanded) {
                    toggleAnimations.get(nearestItem)?.cancel();
                }
                const isTargetClosestMenu = event.composedPath().find(target_i => target_i instanceof HTMLEMenuElement) == this;
                if (isTargetClosestMenu) {
                    const { activeItem } = this;
                    if (activeItem?.type === "submenu" &&
                        activeItem.expanded &&
                        !activeItem.contains(target)) {
                        let toggleAnimation = toggleAnimations.get(activeItem);
                        if (toggleAnimation) {
                            toggleAnimation.cancel();
                        }
                        toggleAnimation = activeItem.animate(null, {
                            duration: SHOW_DELAY_MS
                        });
                        toggleAnimations.set(activeItem, toggleAnimation);
                        const { finished } = toggleAnimation;
                        finished
                            .then(() => {
                            activeItem.collapse();
                        })
                            .catch(() => undefined)
                            .finally(() => {
                            toggleAnimations.delete(activeItem);
                        });
                    }
                    this.#setActiveItem(nearestItem);
                    nearestItem.focus({ preventScroll: true });
                    if (nearestItem.type === "submenu") {
                        if (!nearestItem.expanded) {
                            let toggleAnimation = toggleAnimations.get(nearestItem);
                            if (toggleAnimation) {
                                toggleAnimation.cancel();
                            }
                            toggleAnimation = nearestItem.animate(null, {
                                duration: HIDE_DELAY_MS
                            });
                            toggleAnimations.set(nearestItem, toggleAnimation);
                            const { finished } = toggleAnimation;
                            finished
                                .then(() => {
                                const { activeItem } = this;
                                this.#collapseSubmenus();
                                if (activeItem) {
                                    toggleAnimations.get(activeItem)?.cancel();
                                    activeItem.expand();
                                    activeItem.menu?.focus({ preventScroll: true });
                                }
                            })
                                .catch(() => undefined)
                                .finally(() => {
                                toggleAnimations.delete(nearestItem);
                            });
                        }
                        else {
                            nearestItem.menu?.focus({ preventScroll: true });
                        }
                    }
                }
            }
        }
    }
};
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.AttributeProperty)({ type: String })
], HTMLEMenuElementBase.prototype, "name", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.AttributeProperty)({ type: Boolean })
], HTMLEMenuElementBase.prototype, "contextual", void 0);
HTMLEMenuElementBase = HTMLEMenuElementBase_1 = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.CustomElement)({
        name: "e-menu"
    })
], HTMLEMenuElementBase);
var HTMLEMenuElement = HTMLEMenuElementBase;
var EMenu = (0,_Snippets__WEBPACK_IMPORTED_MODULE_3__.constructor)(HTMLEMenuElement.prototype, (init) => {
    const { name, children } = init;
    return (0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menu", {
        attributes: {
            name: name,
            tabindex: -1,
        },
        children: children
    });
});
//# sourceMappingURL=Menu.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/menus/MenuBar.js":
/*!**********************************************************!*\
  !*** ../editor/lib/elements/containers/menus/MenuBar.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEMenuBarElement": () => (/* binding */ HTMLEMenuBarElement)
/* harmony export */ });
/* harmony import */ var _stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../stylesheets/Theme */ "../editor/lib/stylesheets/Theme.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItem */ "../editor/lib/elements/containers/menus/MenuItem.js");
/* harmony import */ var _MenuItemGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuItemGroup */ "../editor/lib/elements/containers/menus/MenuItemGroup.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ "../editor/lib/elements/containers/menus/Menu.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var shadowTemplate;
var style;
let HTMLEMenuBarElementBase = class HTMLEMenuBarElementBase extends HTMLElement {
    #activeIndex;
    #walker;
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("slot"));
        style = /*css*/ `
            :host {
                position: relative;
                display: flex;
                flex-direction: row;
                width: max-content;
            }
            
            :host(:focus) {
                outline: 1px solid var(--theme-focused-item-outline-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_FOCUSED_ITEM_OUTLINE_COLOR});
                outline-offset: -1px;
            }
        `;
    }
    constructor() {
        super();
        this.#walker = document.createTreeWalker(this, NodeFilter.SHOW_ELEMENT, this.#walkerNodeFilter.bind(this));
        this.#activeIndex = -1;
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
        this.addEventListener("click", this.#handleClickEvent.bind(this));
        this.addEventListener("focus", this.#handleFocusEvent.bind(this));
        this.addEventListener("focusin", this.#handleFocusInEvent.bind(this));
        this.addEventListener("focusout", this.#handleFocusOutEvent.bind(this));
        this.addEventListener("mouseover", this.#handleMouseOverEvent.bind(this));
        this.addEventListener("keydown", this.#handleKeyDownEvent.bind(this));
    }
    connectedCallback() {
        const tabindex = this.getAttribute("tabindex");
        this.tabIndex = tabindex !== null ? parseInt(tabindex) : -1;
    }
    items() {
        return Array.from(this.querySelectorAll(":is(:scope, :scope > e-menuitemgroup) > e-menuitem"));
    }
    get activeIndex() {
        return this.#activeIndex;
    }
    get activeItem() {
        const { activeIndex } = this;
        return (this.querySelector(":is(:scope, :scope > e-menuitemgroup) > e-menuitem:focus-within") ?? activeIndex > -1) ? this.items()[activeIndex] ?? null : null;
    }
    #walkerNodeFilter(node) {
        if (node instanceof _MenuItem__WEBPACK_IMPORTED_MODULE_2__.HTMLEMenuItemElement && !(node.disabled || node.hidden)) {
            return NodeFilter.FILTER_ACCEPT;
        }
        if (node instanceof _MenuItemGroup__WEBPACK_IMPORTED_MODULE_3__.HTMLEMenuItemGroupElement) {
            return NodeFilter.FILTER_SKIP;
        }
        return NodeFilter.FILTER_REJECT;
    }
    firstItem() {
        const walker = this.#walker;
        walker.currentNode = walker.root;
        return walker.firstChild();
    }
    #lastItem() {
        const walker = this.#walker;
        walker.currentNode = walker.root;
        return walker.lastChild();
    }
    #previousItem(item) {
        const walker = this.#walker;
        walker.currentNode = item;
        return walker.previousSibling();
    }
    #nextItem(item) {
        const walker = this.#walker;
        walker.currentNode = item;
        return walker.nextSibling();
    }
    #firstChildItem(item) {
        const { menu } = item;
        if (menu) {
            const walker = this.#walker;
            walker.currentNode = menu;
            return walker.firstChild();
        }
        return null;
    }
    #setActiveItem(item) {
        const { activeItem, expanded } = this;
        if (activeItem !== null && activeItem !== item) {
            activeItem.collapse();
        }
        if (item !== null) {
            if (expanded) {
                item.expand();
            }
            this.#activeIndex = this.items().indexOf(item);
        }
        else {
            this.#activeIndex = -1;
        }
    }
    get #items() {
        return Array.from(this.querySelectorAll(":is(:scope, :scope > e-menuitemgroup) > e-menuitem"));
    }
    #isClosestMenu(target) {
        return target.closest(":is(e-menubar, e-menu)") == this;
    }
    #nearestItem(target) {
        return this.#items.find(item_i => item_i.contains(target)) ?? null;
    }
    #handleFocusEvent(event) {
        const { relatedTarget } = event;
        const { activeItem } = this;
        if (!this.contains(relatedTarget)) {
            (activeItem ?? this.firstItem())?.focus();
        }
    }
    #handleFocusInEvent(event) {
        const { target } = event;
        if (target instanceof Element) {
            const nearestItem = this.#nearestItem(target);
            this.#setActiveItem(nearestItem);
            this.tabIndex = -1;
        }
    }
    #handleFocusOutEvent(event) {
        const { target, relatedTarget } = event;
        if (target instanceof HTMLElement) {
            const nearestItem = this.#nearestItem(target);
            if (nearestItem) {
                nearestItem.collapse();
            }
        }
        const lostFocusWithin = !this.contains(relatedTarget);
        if (lostFocusWithin) {
            this.expanded = false;
            this.tabIndex = 0;
        }
    }
    #handleMouseOverEvent(event) {
        const { target } = event;
        const { expanded, activeItem } = this;
        if (target instanceof _MenuItem__WEBPACK_IMPORTED_MODULE_2__.HTMLEMenuItemElement) {
            const isClosestMenu = this.#isClosestMenu(target);
            if (isClosestMenu && target !== activeItem && expanded) {
                const { menu } = target;
                if (menu) {
                    target.expand();
                    menu.focus({ preventScroll: true });
                }
            }
        }
    }
    #handleClickEvent(event) {
        const { target } = event;
        const { expanded, activeItem } = this;
        if (target instanceof _MenuItem__WEBPACK_IMPORTED_MODULE_2__.HTMLEMenuItemElement) {
            const isClosestMenu = this.#isClosestMenu(target);
            if (isClosestMenu) {
                const isExpanded = !expanded;
                this.expanded = isExpanded;
                if (isExpanded) {
                    if (activeItem && !activeItem.expanded) {
                        activeItem.expand();
                    }
                    const { menu } = target;
                    menu?.focus({ preventScroll: true });
                }
                else {
                    if (activeItem) {
                        activeItem.collapse();
                        activeItem.blur();
                    }
                }
            }
        }
    }
    #handleKeyDownEvent(event) {
        const { key } = event;
        const { expanded } = this;
        let { activeItem } = this;
        switch (key) {
            case "ArrowLeft": {
                const previousItem = activeItem ?
                    this.#previousItem(activeItem) ?? this.#lastItem() :
                    this.firstItem();
                previousItem?.focus({ preventScroll: true });
                ({ activeItem } = this);
                if (expanded && activeItem) {
                    const firstChildItem = this.#firstChildItem(activeItem);
                    firstChildItem?.focus({ preventScroll: true });
                }
                break;
            }
            case "ArrowRight": {
                const nextItem = activeItem ?
                    this.#nextItem(activeItem) ?? this.firstItem() :
                    this.#lastItem();
                nextItem?.focus({ preventScroll: true });
                ({ activeItem } = this);
                if (expanded && activeItem) {
                    const firstChildItem = this.#firstChildItem(activeItem);
                    firstChildItem?.focus({ preventScroll: true });
                }
                break;
            }
            case "Enter":
            case " ": {
                if (activeItem) {
                    this.expanded = !expanded;
                    if (!expanded) {
                        const firstChildItem = this.#firstChildItem(activeItem);
                        firstChildItem?.focus({ preventScroll: true });
                    }
                }
                break;
            }
            case "Escape": {
                if (expanded) {
                    this.expanded = false;
                    if (activeItem) {
                        activeItem.collapse();
                        activeItem.focus({ preventScroll: true });
                    }
                }
                else {
                    this.focus({ preventScroll: true });
                }
                event.stopPropagation();
                break;
            }
        }
    }
};
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String })
], HTMLEMenuBarElementBase.prototype, "name", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean })
], HTMLEMenuBarElementBase.prototype, "expanded", void 0);
HTMLEMenuBarElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.CustomElement)({
        name: "e-menubar"
    })
], HTMLEMenuBarElementBase);
var HTMLEMenuBarElement = HTMLEMenuBarElementBase;
//# sourceMappingURL=MenuBar.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/menus/MenuButton.js":
/*!*************************************************************!*\
  !*** ../editor/lib/elements/containers/menus/MenuButton.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMenuButton": () => (/* binding */ EMenuButton),
/* harmony export */   "HTMLEMenuButtonElement": () => (/* binding */ HTMLEMenuButtonElement)
/* harmony export */ });
/* harmony import */ var _stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../stylesheets/Theme */ "../editor/lib/stylesheets/Theme.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ "../editor/lib/elements/containers/menus/Menu.js");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuItem */ "../editor/lib/elements/containers/menus/MenuItem.js");
/* harmony import */ var _MenuItemGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuItemGroup */ "../editor/lib/elements/containers/menus/MenuItemGroup.js");
/* harmony import */ var _Snippets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Snippets */ "../editor/lib/elements/Snippets.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var shadowTemplate;
var style;
let HTMLEMenuButtonElementBase = class HTMLEMenuButtonElementBase extends HTMLElement {
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("slot"), (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("slot", {
            attributes: {
                name: "menu"
            }
        }));
        style = /*css*/ `
            :host {
                position: relative;
                display: inline-block;
                padding: 2px;
                line-height: 18px;
                user-select: none;
                white-space: nowrap;
                cursor: pointer;
            }
            
            :host(:focus) {
                outline: 1px solid var(--theme-focused-item-outline-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_FOCUSED_ITEM_OUTLINE_COLOR});
                outline-offset: -1px;
            }
            
            :host(:focus-within:not(:focus)) {
                background-color: var(--theme-focused-item-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_FOCUSED_ITEM_COLOR});
            }
            
            :host(:hover:not(:focus-within)) {
                background-color: var(--theme-hovered-item-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_HOVERED_ITEM_COLOR});
            }
            
            :host([disabled]) {
                color: lightgray;
            }
            
            ::slotted([slot="menu"]) {
                z-index: 1;
                position: absolute;
                color: initial;
            }
            
            :host(:not([expanded])) ::slotted([slot="menu"]) {
                opacity: 0;
                pointer-events: none;
            }
            
            :host::after {
                display: inline-block;
                text-align: center;
                width: 18px;
                height: 18px;
                content: "▾";
            }
        `;
    }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
        this.addEventListener("keydown", this.#handleKeyDownEvent.bind(this));
        this.addEventListener("click", this.#handleClickEvent.bind(this));
        this.addEventListener("focusout", this.#handleFocusOutEvent.bind(this));
    }
    connectedCallback() {
        const tabindex = this.getAttribute("tabindex");
        this.tabIndex = tabindex !== null ? parseInt(tabindex) : -1;
    }
    toggle(force) {
        const { expanded } = this;
        const expand = force ?? !expanded;
        expand ? this.expand() : this.collapse();
    }
    expand() {
        const { expanded } = this;
        if (!expanded) {
            this.expanded = true;
            this.#positionMenu();
        }
    }
    collapse() {
        const { expanded } = this;
        if (expanded) {
            this.expanded = false;
        }
    }
    #positionMenu() {
        const { menu } = this;
        if (menu !== null) {
            const { width, height } = this.getBoundingClientRect();
            const { style: menuStyle } = menu;
            const { width: menuWidth, height: menuHeight } = menu.getBoundingClientRect();
            const { clientWidth, clientHeight } = document.body;
            const { offsetLeft, offsetTop } = this;
            const overflowX = offsetLeft + width + menuWidth - clientWidth;
            const overflowY = offsetTop + menuHeight - clientHeight;
            menuStyle.setProperty("left", `${overflowX > 0 ?
                width - menuWidth :
                0}px`);
            menuStyle.setProperty("top", `${overflowY > 0 ?
                -menuHeight :
                height}px`);
        }
    }
    #handleClickEvent(event) {
        const { target } = event;
        const { menu } = this;
        if (menu && !menu.contains(target)) {
            this.toggle();
            const { expanded } = this;
            if (expanded) {
                menu?.focus({ preventScroll: true });
            }
        }
    }
    #handleFocusOutEvent(event) {
        const { relatedTarget } = event;
        const lostFocusWithin = !this.contains(relatedTarget);
        if (lostFocusWithin) {
            this.collapse();
        }
    }
    #handleKeyDownEvent(event) {
        const { key } = event;
        const { expanded } = this;
        switch (key) {
            case "ArrowDown":
            case "Enter":
                if (!expanded) {
                    this.expand();
                    this.firstItem?.focus({ preventScroll: true });
                    event.stopPropagation();
                }
                break;
            case "Escape":
                if (expanded) {
                    this.collapse();
                }
                this.focus({ preventScroll: true });
                event.stopPropagation();
                break;
        }
    }
};
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.QueryProperty)({ selector: ":scope > e-menu[slot=menu]" })
], HTMLEMenuButtonElementBase.prototype, "menu", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.QueryProperty)({ selector: ":scope > e-menu[slot=menu] e-menuitem" })
], HTMLEMenuButtonElementBase.prototype, "firstItem", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String })
], HTMLEMenuButtonElementBase.prototype, "name", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean })
], HTMLEMenuButtonElementBase.prototype, "disabled", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean })
], HTMLEMenuButtonElementBase.prototype, "expanded", void 0);
HTMLEMenuButtonElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.CustomElement)({
        name: "e-menubutton"
    })
], HTMLEMenuButtonElementBase);
var HTMLEMenuButtonElement = HTMLEMenuButtonElementBase;
var EMenuButton = (0,_Snippets__WEBPACK_IMPORTED_MODULE_5__.constructor)(HTMLEMenuButtonElement.prototype, (init) => {
    const { menu } = init;
    menu.slot = "menu";
    return (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("e-menubutton", {
        attributes: {
            tabindex: -1
        },
        children: [menu]
    });
});
//# sourceMappingURL=MenuButton.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/menus/MenuItem.js":
/*!***********************************************************!*\
  !*** ../editor/lib/elements/containers/menus/MenuItem.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMenuItem": () => (/* binding */ EMenuItem),
/* harmony export */   "HTMLEMenuItemElement": () => (/* binding */ HTMLEMenuItemElement)
/* harmony export */ });
/* harmony import */ var _stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../stylesheets/Theme */ "../editor/lib/stylesheets/Theme.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var _Snippets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Snippets */ "../editor/lib/elements/Snippets.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var shadowTemplate;
var style;
let HTMLEMenuItemElementBase = class HTMLEMenuItemElementBase extends HTMLElement {
    internals;
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("span", {
            attributes: {
                part: "icon"
            }
        }), (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("span", {
            attributes: {
                part: "label"
            },
            children: [
                (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("slot")
            ]
        }), (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("span", {
            attributes: {
                part: "arrow"
            }
        }), (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("slot", {
            attributes: {
                name: "menu"
            }
        }));
        style = /*css*/ `
            :host {
                display: flex;
                user-select: none;
                white-space: nowrap;
                box-sizing: border-box;
            }
            
            :host([disabled]) {
                opacity: 0.38;
                pointer-events: none;
            }
            
            :host(:focus-within) {
                background-color: ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_FOCUSED_ITEM_COLOR};
            }
            
            :host(:is([type="menu"], [type="submenu"])) ::slotted([slot="menu"]) {
                z-index: 1;
                position: absolute;
            }
            
            :host(:is([type="menu"], [type="submenu"]):not([expanded])) ::slotted([slot="menu"]) {
                width: 0;
                height: 0;
                padding: 0;
                opacity: 0;
                pointer-events: none;
                overflow: hidden;
            }
            
            :host([type="submenu"]) [part="icon"] {
                visibility: hidden;
            }
            
            :host([type="menu"]) [part="icon"],
            :host(:not([type="submenu"])) [part="arrow"] {
                display: none;
            }
            
            :host(:is([type="checkbox"], [type="radio"])[checked]) [part="icon"]::before {
                -webkit-mask-image: var(--theme-arrow-done-image, url(${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_CHECKED_IMAGE}));
                mask-image: var(--theme-arrow-done-image, url(${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_CHECKED_IMAGE}));
                background-color: black;
            }
            
            :host([type="submenu"]) [part="arrow"]::after {
                -webkit-mask-image: var(--theme-arrow-right-image, url(${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_ARROW_RIGHT_IMAGE}));
                mask-image: var(--theme-arrow-right-image, url(${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_ARROW_RIGHT_IMAGE}));
                background-color: black;
            }
            
            [part="icon"],
            [part="label"],
            [part="arrow"] {
                pointer-events: none;
            }
            
            [part="icon"] {
                flex: none;
                display: inline-block;
                width: 18px;
                height: 18px;
                padding: 2px;
                overflow: hidden;
                margin-right: 4px;
            }
            
            [part="label"] {
                flex: auto;
                line-height: 18px;
                padding: 2px;
                margin-left: 8px;
                margin-right: 8px;
            }
            
            :host(:is(:not([type]), [type="button"], [type="radio"], [type="checkbox"])[checked]) [part="icon"] {
                background-color: var(--theme-activated-item-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_ACTIVATED_ITEM_COLOR});
            }
            
            :host(:is(:not([type]), [type="button"], [type="radio"], [type="checkbox"])) [part="icon"]::before {
                display: inline-block;
                width: 18px;
                height: 18px;
                content: "";
                mask-size: 18px 18px;
                -webkit-mask-size: 18px 18px;

                mask-image: none;
                -webkit-mask-image: none;
                background-color: none;
            }
            
            [part="arrow"] {
                flex: none;
                display: inline-block;
                width: 18px;
                height: 18px;
                margin: 1px 4px 1px 1px;
            }
            
            [part="arrow"]::after {
                display: inline-block;
                width: 18px;
                height: 18px;
                margin: 1px;
                content: "";
                mask-size: 18px 18px;
                -webkit-mask-size: 18px 18px;

                mask-image: none;
                -webkit-mask-image: none;
                background-color: none;
            }

            :host(:hover):host-context(e-menubar:focus),
            :host(:hover):host-context(e-menubar:not(:focus-within)) {
                background-color: var(--theme-hovered-item-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_HOVERED_ITEM_COLOR});
            }
        `;
    }
    constructor() {
        super();
        const internals = this.attachInternals();
        this.internals = internals;
        internals.role = "menuitem";
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        const { tabIndex } = this;
        this.tabIndex = tabIndex;
    }
    attributeChangedCallback(attributeName, oldValue, newValue) {
        const { internals } = this;
        switch (attributeName) {
            case "type": {
                switch (newValue) {
                    case "checkbox":
                    case "radio": {
                        internals.role = `menuitem${newValue}`;
                        break;
                    }
                    default: {
                        internals.role = "menuitem";
                        break;
                    }
                }
                break;
            }
            case "checked": {
                internals.ariaChecked = String(newValue !== null);
                break;
            }
            case "disabled": {
                internals.ariaDisabled = String(newValue !== null);
                break;
            }
            case "expanded": {
                internals.ariaExpanded = String(newValue !== null);
                break;
            }
            case "label": {
                internals.ariaLabel = newValue;
                break;
            }
        }
    }
    toggle(force) {
        const { type, expanded } = this;
        switch (type) {
            case "menu":
            case "submenu": {
                const expand = force ?? !expanded;
                this.expanded = expand;
                if (expand) {
                    this.#positionMenu();
                }
                this.dispatchEvent(new Event("toggle", { bubbles: true }));
                break;
            }
        }
    }
    expand() {
        const { type, expanded } = this;
        switch (type) {
            case "menu":
            case "submenu": {
                if (!expanded) {
                    this.expanded = true;
                    this.#positionMenu();
                }
                break;
            }
        }
    }
    collapse() {
        const { type, expanded } = this;
        switch (type) {
            case "menu":
            case "submenu": {
                if (expanded) {
                    this.expanded = false;
                }
                break;
            }
        }
    }
    #positionMenu() {
        const { menu } = this;
        if (menu !== null) {
            const { width, height } = this.getBoundingClientRect();
            const { style: menuStyle } = menu;
            const { width: menuWidth, height: menuHeight } = menu.getBoundingClientRect();
            const { clientWidth, clientHeight } = document.body;
            const { type, offsetLeft, offsetTop } = this;
            const overflowX = offsetLeft + width + menuWidth - clientWidth;
            const overflowY = offsetTop + menuHeight - clientHeight;
            if (type === "menu") {
                menuStyle.setProperty("left", `${overflowX > 0 ?
                    offsetLeft + width - menuWidth :
                    offsetLeft}px`);
                menuStyle.setProperty("top", `${overflowY > 0 ?
                    offsetTop - menuHeight :
                    offsetTop + height}px`);
            }
            else {
                menuStyle.setProperty("left", `${overflowX > 0 ?
                    offsetLeft - menuWidth :
                    offsetLeft + width}px`);
                menuStyle.setProperty("top", `${overflowY > 0 ?
                    offsetTop + height - menuHeight :
                    offsetTop}px`);
            }
        }
    }
};
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.QueryProperty)({ selector: ":scope > e-menu[slot=menu]" })
], HTMLEMenuItemElementBase.prototype, "menu", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String })
], HTMLEMenuItemElementBase.prototype, "name", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String, observed: true })
], HTMLEMenuItemElementBase.prototype, "label", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String })
], HTMLEMenuItemElementBase.prototype, "value", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String })
], HTMLEMenuItemElementBase.prototype, "hotkey", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean, observed: true })
], HTMLEMenuItemElementBase.prototype, "disabled", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean, observed: true })
], HTMLEMenuItemElementBase.prototype, "checked", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean, observed: true })
], HTMLEMenuItemElementBase.prototype, "expanded", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean })
], HTMLEMenuItemElementBase.prototype, "overflown", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String, defaultValue: "button", observed: true })
], HTMLEMenuItemElementBase.prototype, "type", void 0);
HTMLEMenuItemElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.CustomElement)({
        name: "e-menuitem"
    })
], HTMLEMenuItemElementBase);
var HTMLEMenuItemElement = HTMLEMenuItemElementBase;
var EMenuItem = (0,_Snippets__WEBPACK_IMPORTED_MODULE_2__.constructor)(HTMLEMenuItemElement.prototype, (init) => {
    const { label, name, type, value, trigger, menu } = init;
    if (menu) {
        menu.slot = "menu";
    }
    return (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("e-menuitem", {
        attributes: {
            tabindex: -1,
            title: label,
            name: name,
            value: value,
            type: type
        },
        children: menu ? [
            label,
            menu
        ] : [
            label
        ],
        listeners: {
            click: trigger
        }
    });
}, {
    button(init) {
        return new EMenuItem({
            ...init, type: "button"
        });
    },
    checkbox(init) {
        return new EMenuItem({
            ...init, type: "checkbox"
        });
    },
    radio(init) {
        return new EMenuItem({
            ...init, type: "radio"
        });
    },
    menu(init) {
        return new EMenuItem({
            ...init, type: "menu"
        });
    },
    submenu(init) {
        return new EMenuItem({
            ...init, type: "submenu"
        });
    }
});
//# sourceMappingURL=MenuItem.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/menus/MenuItemGroup.js":
/*!****************************************************************!*\
  !*** ../editor/lib/elements/containers/menus/MenuItemGroup.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMenuItemGroup": () => (/* binding */ EMenuItemGroup),
/* harmony export */   "HTMLEMenuItemGroupElement": () => (/* binding */ HTMLEMenuItemGroupElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var _Snippets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Snippets */ "../editor/lib/elements/Snippets.js");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItem */ "../editor/lib/elements/containers/menus/MenuItem.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var shadowTemplate;
var style;
let HTMLEMenuItemGroupElementBase = class HTMLEMenuItemGroupElementBase extends HTMLElement {
    internals;
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("span", {
            attributes: {
                part: "label"
            }
        }), (0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("slot"));
        style = /*css*/ `
            :host {
                display: flex;
                flex-direction: column;
            }
            
            [part="label"] {
                font-weight: bold;
            }
            
            :host([label]) [part="label"] {
                padding-bottom: 6px;
            }
        `;
    }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
        const internals = this.attachInternals();
        internals.role = "group";
        this.internals = internals;
    }
    attributeChangedCallback(name, oldValue, newValue) {
        const { internals } = this;
        switch (name) {
            case "label":
                internals.ariaLabel = newValue;
                break;
        }
    }
};
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.AttributeProperty)({ type: String })
], HTMLEMenuItemGroupElementBase.prototype, "name", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.AttributeProperty)({ type: String, observed: true })
], HTMLEMenuItemGroupElementBase.prototype, "label", void 0);
HTMLEMenuItemGroupElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.CustomElement)({
        name: "e-menuitemgroup"
    })
], HTMLEMenuItemGroupElementBase);
var HTMLEMenuItemGroupElement = HTMLEMenuItemGroupElementBase;
var EMenuItemGroup = (0,_Snippets__WEBPACK_IMPORTED_MODULE_1__.constructor)(HTMLEMenuItemGroupElement.prototype, (init) => {
    const { name, items } = init;
    return (0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menuitemgroup", {
        attributes: {
            name: name
        },
        children: items
    });
}, {
    radios: (init) => {
        const { name, items } = init;
        return (0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menuitemgroup", {
            attributes: {
                name: name
            },
            children: items.map(({ label, value }) => new _MenuItem__WEBPACK_IMPORTED_MODULE_2__.EMenuItem({ name, label, type: "radio", value }))
        });
    }
});
//# sourceMappingURL=MenuItemGroup.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/menus/index.js":
/*!********************************************************!*\
  !*** ../editor/lib/elements/containers/menus/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEMenuBarElement": () => (/* reexport safe */ _MenuBar__WEBPACK_IMPORTED_MODULE_0__.HTMLEMenuBarElement),
/* harmony export */   "HTMLEMenuButtonElement": () => (/* reexport safe */ _MenuButton__WEBPACK_IMPORTED_MODULE_1__.HTMLEMenuButtonElement),
/* harmony export */   "HTMLEMenuElement": () => (/* reexport safe */ _Menu__WEBPACK_IMPORTED_MODULE_2__.HTMLEMenuElement),
/* harmony export */   "HTMLEMenuItemElement": () => (/* reexport safe */ _MenuItem__WEBPACK_IMPORTED_MODULE_3__.HTMLEMenuItemElement),
/* harmony export */   "HTMLEMenuItemGroupElement": () => (/* reexport safe */ _MenuItemGroup__WEBPACK_IMPORTED_MODULE_4__.HTMLEMenuItemGroupElement)
/* harmony export */ });
/* harmony import */ var _MenuBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuBar */ "../editor/lib/elements/containers/menus/MenuBar.js");
/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuButton */ "../editor/lib/elements/containers/menus/MenuButton.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ "../editor/lib/elements/containers/menus/Menu.js");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuItem */ "../editor/lib/elements/containers/menus/MenuItem.js");
/* harmony import */ var _MenuItemGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuItemGroup */ "../editor/lib/elements/containers/menus/MenuItemGroup.js");










//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/status/StatusBar.js":
/*!*************************************************************!*\
  !*** ../editor/lib/elements/containers/status/StatusBar.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEStatusBarElement": () => (/* binding */ HTMLEStatusBarElement)
/* harmony export */ });
/* harmony import */ var _stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../stylesheets/Theme */ "../editor/lib/stylesheets/Theme.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var _StatusItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StatusItem */ "../editor/lib/elements/containers/status/StatusItem.js");
/* harmony import */ var _StatusItemGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StatusItemGroup */ "../editor/lib/elements/containers/status/StatusItemGroup.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var shadowTemplate;
var style;
let HTMLEStatusBarElementBase = class HTMLEStatusBarElementBase extends HTMLElement {
    get activeItem() {
        return this.querySelector("e-statusitem[active]");
    }
    items() {
        return Array.from(this.querySelectorAll(":is(:scope, :scope > e-statusitemgroup) > e-statusitem"));
    }
    #walker;
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("slot"));
        style = /*css*/ `
            :host {
                display: flex;
                flex-direction: row;
            }

            :host(:focus) {
                outline: 1px solid var(--theme-focused-item-outline-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_FOCUSED_ITEM_OUTLINE_COLOR});
                outline-offset: -1px;
            }

            ::slotted(e-statusitem:not(:first-child)) {
                margin-left: 4px;
            }
        `;
    }
    constructor() {
        super();
        this.#walker = document.createTreeWalker(this, NodeFilter.SHOW_ELEMENT, this.#nodeFilter.bind(this));
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
        this.addEventListener("contextmenu", this.#handleContextMenuEvent.bind(this));
        this.addEventListener("dblclick", this.#handleDblClickEvent.bind(this));
        this.addEventListener("focus", this.#handleFocusEvent.bind(this));
        this.addEventListener("focusin", this.#handleFocusInEvent.bind(this));
        this.addEventListener("focusout", this.#handleFocusOutEvent.bind(this));
        this.addEventListener("keydown", this.#handleKeyDownEvent.bind(this));
    }
    connectedCallback() {
        const { tabIndex } = this;
        this.tabIndex = tabIndex;
    }
    #nodeFilter(node) {
        if (node instanceof _StatusItem__WEBPACK_IMPORTED_MODULE_2__.HTMLEStatusItemElement) {
            return NodeFilter.FILTER_ACCEPT;
        }
        if (node instanceof _StatusItemGroup__WEBPACK_IMPORTED_MODULE_3__.HTMLEStatusItemGroupElement) {
            return NodeFilter.FILTER_SKIP;
        }
        return NodeFilter.FILTER_REJECT;
    }
    firstItem() {
        const walker = this.#walker;
        walker.currentNode = walker.root;
        return walker.firstChild();
    }
    #lastItem() {
        const walker = this.#walker;
        walker.currentNode = walker.root;
        return walker.lastChild();
    }
    #previousItem(item) {
        const walker = this.#walker;
        walker.currentNode = item;
        const previousItem = walker.previousSibling();
        return previousItem;
    }
    #nextItem(item) {
        const walker = this.#walker;
        walker.currentNode = item;
        return walker.nextSibling();
    }
    #setActiveItem(item) {
        const { activeItem } = this;
        if (activeItem !== null && activeItem !== item) {
            activeItem.active = false;
        }
        if (item !== null) {
            item.active = true;
        }
    }
    #handleContextMenuEvent(event) {
        event.stopPropagation();
    }
    #handleDblClickEvent(event) {
        event.stopPropagation();
    }
    #handleFocusEvent(event) {
        const { relatedTarget } = event;
        const { activeItem } = this;
        if (!this.contains(relatedTarget)) {
            (activeItem ?? this.firstItem())?.focus();
        }
    }
    #handleFocusInEvent(event) {
        const { target } = event;
        const targetItem = target.closest("e-statusitem");
        if (targetItem) {
            this.#setActiveItem(targetItem);
            this.tabIndex = -1;
        }
    }
    #handleFocusOutEvent(event) {
        const { relatedTarget } = event;
        const lostFocusWithin = !this.contains(relatedTarget);
        if (lostFocusWithin) {
            this.tabIndex = 0;
        }
    }
    #handleKeyDownEvent(event) {
        const { key } = event;
        const { activeItem } = this;
        switch (key) {
            case "Enter": {
                if (activeItem) {
                    activeItem.click();
                    event.stopPropagation();
                }
                break;
            }
            case "ArrowLeft": {
                if (activeItem) {
                    const previousItem = this.#previousItem(activeItem);
                    if (previousItem) {
                        previousItem.focus({ preventScroll: true });
                    }
                }
                else {
                    const firstItem = this.firstItem();
                    if (firstItem) {
                        firstItem.focus({ preventScroll: true });
                    }
                }
                event.stopPropagation();
                break;
            }
            case "ArrowRight": {
                if (activeItem) {
                    const nextItem = this.#nextItem(activeItem);
                    if (nextItem) {
                        nextItem.focus({ preventScroll: true });
                    }
                }
                else {
                    const lastItem = this.#lastItem();
                    if (lastItem) {
                        lastItem.focus({ preventScroll: true });
                    }
                }
                event.stopPropagation();
                break;
            }
            case "Home": {
                const firstItem = this.firstItem();
                if (firstItem) {
                    firstItem.focus({ preventScroll: true });
                }
                event.stopPropagation();
                break;
            }
            case "End": {
                const lastItem = this.#lastItem();
                if (lastItem) {
                    lastItem.focus({ preventScroll: true });
                }
                event.stopPropagation();
                break;
            }
            case "Escape": {
                this.focus({ preventScroll: true });
                event.stopPropagation();
                break;
            }
        }
    }
};
HTMLEStatusBarElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.CustomElement)({
        name: "e-statusbar"
    })
], HTMLEStatusBarElementBase);
var HTMLEStatusBarElement = HTMLEStatusBarElementBase;
//# sourceMappingURL=StatusBar.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/status/StatusItem.js":
/*!**************************************************************!*\
  !*** ../editor/lib/elements/containers/status/StatusItem.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EStatusItem": () => (/* binding */ EStatusItem),
/* harmony export */   "HTMLEStatusItemElement": () => (/* binding */ HTMLEStatusItemElement)
/* harmony export */ });
/* harmony import */ var _stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../stylesheets/Theme */ "../editor/lib/stylesheets/Theme.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var shadowTemplate;
var style;
let HTMLEStatusItemElementBase = class HTMLEStatusItemElementBase extends HTMLElement {
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("span", {
            attributes: {
                part: "content"
            },
            children: (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("slot")
        }));
        style = /*css*/ `
            :host {
                display: flex;
                user-select: none;
                white-space: nowrap;
                cursor: pointer;
                line-height: 22px;
            }
            
            :host([disabled]) {
                opacity: 0.38;
                pointer-events: none;
            }
            
            :host(:hover) {
                background-color: var(--theme-hovered-item-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_HOVERED_ITEM_COLOR});
            }
            
            :host(:focus-within):host-context(e-statusbar:focus-within) {
                outline: 1px solid var(--theme-focused-item-outline-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_FOCUSED_ITEM_OUTLINE_COLOR});
                outline-offset: -1px;
            }
            
            [part="content"] {
                padding: 0 4px;
            }
        `;
    }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        const { tabIndex } = this;
        this.tabIndex = tabIndex;
    }
};
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean })
], HTMLEStatusItemElementBase.prototype, "active", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String })
], HTMLEStatusItemElementBase.prototype, "name", void 0);
HTMLEStatusItemElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.CustomElement)({
        name: "e-statusitem"
    })
], HTMLEStatusItemElementBase);
var HTMLEStatusItemElement = HTMLEStatusItemElementBase;
var EStatusItem = Object.assign(function (init) {
    const { label, name, onclick } = init;
    return (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("e-statusitem", {
        attributes: {
            title: label,
            name: name,
        },
        children: label,
        listeners: {
            click: onclick
        }
    });
}, {
    prototype: HTMLEStatusItemElement.prototype
});
//# sourceMappingURL=StatusItem.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/status/StatusItemGroup.js":
/*!*******************************************************************!*\
  !*** ../editor/lib/elements/containers/status/StatusItemGroup.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEStatusItemGroupElement": () => (/* binding */ HTMLEStatusItemGroupElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var _StatusItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatusItem */ "../editor/lib/elements/containers/status/StatusItem.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var shadowTemplate;
var style;
let HTMLEStatusItemGroupElementBase = class HTMLEStatusItemGroupElementBase extends HTMLElement {
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("slot"));
        style = /*css*/ `
            :host {
                display: flex;
                width: max-content;
                flex-direction: row;
            }
        `;
    }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "label": {
                const label = this.shadowRoot.querySelector("[part='label']");
                if (label) {
                    label.textContent = newValue;
                }
                break;
            }
        }
    }
};
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.AttributeProperty)({ type: String })
], HTMLEStatusItemGroupElementBase.prototype, "name", void 0);
HTMLEStatusItemGroupElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.CustomElement)({
        name: "e-statusitemgroup"
    })
], HTMLEStatusItemGroupElementBase);
var HTMLEStatusItemGroupElement = HTMLEStatusItemGroupElementBase;
//# sourceMappingURL=StatusItemGroup.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/status/index.js":
/*!*********************************************************!*\
  !*** ../editor/lib/elements/containers/status/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEStatusBarElement": () => (/* reexport safe */ _StatusBar__WEBPACK_IMPORTED_MODULE_0__.HTMLEStatusBarElement),
/* harmony export */   "HTMLEStatusItemElement": () => (/* reexport safe */ _StatusItem__WEBPACK_IMPORTED_MODULE_1__.HTMLEStatusItemElement),
/* harmony export */   "HTMLEStatusItemGroupElement": () => (/* reexport safe */ _StatusItemGroup__WEBPACK_IMPORTED_MODULE_2__.HTMLEStatusItemGroupElement)
/* harmony export */ });
/* harmony import */ var _StatusBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatusBar */ "../editor/lib/elements/containers/status/StatusBar.js");
/* harmony import */ var _StatusItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatusItem */ "../editor/lib/elements/containers/status/StatusItem.js");
/* harmony import */ var _StatusItemGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StatusItemGroup */ "../editor/lib/elements/containers/status/StatusItemGroup.js");






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/tabs/Tab.js":
/*!*****************************************************!*\
  !*** ../editor/lib/elements/containers/tabs/Tab.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLETabElement": () => (/* binding */ HTMLETabElement)
/* harmony export */ });
/* harmony import */ var _stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../stylesheets/Theme */ "../editor/lib/stylesheets/Theme.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var _TabPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabPanel */ "../editor/lib/elements/containers/tabs/TabPanel.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var shadowTemplate;
var style;
let HTMLETabElementBase = class HTMLETabElementBase extends HTMLElement {
    get panel() {
        const { controls } = this;
        const rootNode = this.getRootNode();
        if (rootNode instanceof Document || rootNode instanceof ShadowRoot) {
            return rootNode.querySelector(`e-tabpanel[id='${controls}']`);
        }
        return null;
    }
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("slot"));
        style = /*css*/ `
            :host {
                display: inline-block;
                user-select: none;
                white-space: nowrap;
                padding: 4px;
            }
            
            :host([disabled]) {
                opacity: 0.38;
                pointer-events: none;
            }
            
            :host(:hover) {
                background-color: var(--theme-hovered-item-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_HOVERED_ITEM_COLOR});
            }
        `;
    }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        const { tabIndex } = this;
        this.tabIndex = tabIndex;
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "selected": {
                this.dispatchEvent(new Event("select", { bubbles: true }));
                break;
            }
        }
    }
    select() {
        this.selected = true;
    }
};
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String })
], HTMLETabElementBase.prototype, "name", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean })
], HTMLETabElementBase.prototype, "disabled", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String, observed: true })
], HTMLETabElementBase.prototype, "controls", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean })
], HTMLETabElementBase.prototype, "active", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean, observed: true })
], HTMLETabElementBase.prototype, "selected", void 0);
HTMLETabElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.CustomElement)({
        name: "e-tab"
    })
], HTMLETabElementBase);
var HTMLETabElement = HTMLETabElementBase;
//# sourceMappingURL=Tab.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/tabs/TabList.js":
/*!*********************************************************!*\
  !*** ../editor/lib/elements/containers/tabs/TabList.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLETabListElement": () => (/* binding */ HTMLETabListElement)
/* harmony export */ });
/* harmony import */ var _stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../stylesheets/Theme */ "../editor/lib/stylesheets/Theme.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tab */ "../editor/lib/elements/containers/tabs/Tab.js");
/* harmony import */ var _TabPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TabPanel */ "../editor/lib/elements/containers/tabs/TabPanel.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var shadowTemplate;
var style;
var SELECT_ANIMATION_DURATION = 200;
let HTMLETabListElementBase = class HTMLETabListElementBase extends HTMLElement {
    #walker;
    get tabs() {
        return Array.from(this.querySelectorAll("e-tab"));
    }
    get activeTab() {
        return this.querySelector("e-tab[active]");
    }
    get selectedTab() {
        return this.querySelector("e-tab[selected]");
    }
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("slot"));
        style = /*css*/ `
            :host {
                position: relative;
                display: flex;
            }

            :host::after {
                position: absolute;
                display: inline-block;
                content: "";
                z-index: -1;
                transform: translateY(-100%);
                box-sizing: border-box;
                border-top: 2px solid var(--theme-focused-item-outline-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_FOCUSED_ITEM_OUTLINE_COLOR});
            }
        `;
    }
    constructor() {
        super();
        this.#walker = document.createTreeWalker(this, NodeFilter.SHOW_ELEMENT, this.#walkerNodeFilter.bind(this));
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
        this.addEventListener("click", this.#handleClickEvent.bind(this));
        this.addEventListener("focus", this.#handleFocusEvent.bind(this));
        this.addEventListener("focusin", this.#handleFocusInEvent.bind(this));
        this.addEventListener("focusout", this.#handleFocusOutEvent.bind(this));
        this.addEventListener("keydown", this.#handleKeyDownEvent.bind(this));
        this.addEventListener("select", this.#handleSelectEvent.bind(this));
        this.addEventListener("select", this.#handleSelectEvent.bind(this));
    }
    connectedCallback() {
        const { tabIndex, selectedTab } = this;
        this.tabIndex = tabIndex;
        customElements.upgrade(this);
        const tabToSelect = selectedTab ?? this.firstItem();
        if (tabToSelect) {
            this.#selectTab(tabToSelect);
            setTimeout(() => {
                const { width: tabWidth, height: tabHeight } = tabToSelect.getBoundingClientRect();
                const { offsetLeft } = tabToSelect;
                this.animate([{
                        width: `${tabWidth}px`,
                        left: `${offsetLeft}px`,
                        top: `${tabHeight}px`
                    }], {
                    duration: 0,
                    fill: "forwards",
                    easing: "ease-in-out",
                    pseudoElement: "::after"
                });
            });
        }
    }
    #walkerNodeFilter(node) {
        if (node instanceof _Tab__WEBPACK_IMPORTED_MODULE_2__.HTMLETabElement) {
            return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_REJECT;
    }
    firstItem() {
        const walker = this.#walker;
        walker.currentNode = walker.root;
        return walker.firstChild();
    }
    #lastItem() {
        const walker = this.#walker;
        walker.currentNode = walker.root;
        return walker.lastChild();
    }
    #previousItem(item) {
        const walker = this.#walker;
        walker.currentNode = item;
        return walker.previousNode();
    }
    #nextItem(item) {
        const walker = this.#walker;
        walker.currentNode = item;
        return walker.nextNode();
    }
    #setActiveTab(item) {
        const { activeTab } = this;
        if (activeTab !== null && activeTab !== item) {
            activeTab.active = false;
        }
        if (item !== null) {
            item.active = true;
        }
    }
    #selectTab(tab) {
        const { selectedTab } = this;
        if (tab !== selectedTab) {
            tab.selected = true;
        }
    }
    #handleClickEvent(event) {
        const { target } = event;
        const targetTab = target.closest("e-tab");
        if (targetTab) {
            targetTab.select();
            const { width: tabWidth, height: tabHeight } = targetTab.getBoundingClientRect();
            const { offsetLeft } = targetTab;
            this.animate([{
                    width: `${tabWidth}px`,
                    left: `${offsetLeft}px`,
                    top: `${tabHeight}px`
                }], {
                duration: SELECT_ANIMATION_DURATION,
                fill: "forwards",
                easing: "ease-in-out",
                pseudoElement: "::after"
            });
        }
    }
    #handleFocusEvent(event) {
        const { relatedTarget } = event;
        const { selectedTab } = this;
        if (!this.contains(relatedTarget)) {
            (selectedTab ?? this.firstItem())?.focus();
        }
    }
    #handleFocusInEvent(event) {
        const { target } = event;
        const targetTab = target.closest("e-tab");
        if (targetTab) {
            this.#setActiveTab(targetTab);
            this.tabIndex = -1;
        }
    }
    #handleFocusOutEvent(event) {
        const { relatedTarget } = event;
        const lostFocusWithin = !this.contains(relatedTarget);
        if (lostFocusWithin) {
            this.tabIndex = 0;
        }
    }
    #handleKeyDownEvent(event) {
        const { key } = event;
        const { activeTab } = this;
        switch (key) {
            case "ArrowLeft": {
                const previousTab = activeTab ?
                    this.#previousItem(activeTab) ?? this.#lastItem() :
                    this.firstItem();
                previousTab?.focus({ preventScroll: true });
                event.stopPropagation();
                break;
            }
            case "ArrowRight": {
                const nextTab = activeTab ?
                    this.#nextItem(activeTab) ?? this.firstItem() :
                    this.#lastItem();
                nextTab?.focus({ preventScroll: true });
                event.stopPropagation();
                break;
            }
            case "Home": {
                const firstItem = this.firstItem();
                if (firstItem) {
                    firstItem.focus({ preventScroll: true });
                }
                event.stopPropagation();
                break;
            }
            case "End": {
                const lastItem = this.#lastItem();
                if (lastItem) {
                    lastItem.focus({ preventScroll: true });
                }
                event.stopPropagation();
                break;
            }
            case "Enter": {
                activeTab?.click();
                event.stopPropagation();
                break;
            }
        }
    }
    #handleSelectEvent(event) {
        const { target } = event;
        const targetTab = target;
        if (targetTab.selected) {
            const { tabs } = this;
            tabs.forEach((tab_i) => {
                if (tab_i !== targetTab) {
                    tab_i.selected = false;
                    const { panel } = tab_i;
                    if (panel) {
                        panel.hidden = true;
                    }
                }
            });
            const { panel } = targetTab;
            if (panel) {
                panel.hidden = false;
            }
        }
    }
};
HTMLETabListElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.CustomElement)({
        name: "e-tablist"
    })
], HTMLETabListElementBase);
var HTMLETabListElement = HTMLETabListElementBase;
//# sourceMappingURL=TabList.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/tabs/TabPanel.js":
/*!**********************************************************!*\
  !*** ../editor/lib/elements/containers/tabs/TabPanel.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLETabPanelElement": () => (/* binding */ HTMLETabPanelElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var shadowTemplate;
var style;
let HTMLETabPanelElementBase = class HTMLETabPanelElementBase extends HTMLElement {
    get tab() {
        const { id } = this;
        return this.getRootNode().querySelector(`e-tab[controls=${id}]`);
    }
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("slot"));
        style = /*css*/ `
            :host {
                display: block;
                padding: 4px;
            }
            
            :host([hidden]) {
                display: none;
            }
        `;
    }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        const { tab } = this;
        if (tab) {
            customElements.upgrade(tab);
            const { selected } = tab;
            this.hidden = !selected;
        }
    }
};
HTMLETabPanelElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.CustomElement)({
        name: "e-tabpanel"
    })
], HTMLETabPanelElementBase);
var HTMLETabPanelElement = HTMLETabPanelElementBase;
//# sourceMappingURL=TabPanel.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/tabs/index.js":
/*!*******************************************************!*\
  !*** ../editor/lib/elements/containers/tabs/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLETabElement": () => (/* reexport safe */ _Tab__WEBPACK_IMPORTED_MODULE_0__.HTMLETabElement),
/* harmony export */   "HTMLETabListElement": () => (/* reexport safe */ _TabList__WEBPACK_IMPORTED_MODULE_1__.HTMLETabListElement),
/* harmony export */   "HTMLETabPanelElement": () => (/* reexport safe */ _TabPanel__WEBPACK_IMPORTED_MODULE_2__.HTMLETabPanelElement)
/* harmony export */ });
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tab */ "../editor/lib/elements/containers/tabs/Tab.js");
/* harmony import */ var _TabList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabList */ "../editor/lib/elements/containers/tabs/TabList.js");
/* harmony import */ var _TabPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabPanel */ "../editor/lib/elements/containers/tabs/TabPanel.js");






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/toolbars/ToolBar.js":
/*!*************************************************************!*\
  !*** ../editor/lib/elements/containers/toolbars/ToolBar.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEToolBarElement": () => (/* binding */ HTMLEToolBarElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var _ToolBarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToolBarItem */ "../editor/lib/elements/containers/toolbars/ToolBarItem.js");
/* harmony import */ var _ToolBarItemGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToolBarItemGroup */ "../editor/lib/elements/containers/toolbars/ToolBarItemGroup.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var shadowTemplate;
var style;
var wasExpandedOnMouseDown;
let HTMLEToolBarElementBase = class HTMLEToolBarElementBase extends HTMLElement {
    get activeItem() {
        return this.querySelector("e-toolbaritem[active]");
    }
    items() {
        return Array.from(this.querySelectorAll(":is(:scope, :scope > e-toolbaritemgroup) > e-toolbaritem"));
    }
    #walker;
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("slot"));
        wasExpandedOnMouseDown = new WeakMap();
        style = /*css*/ `
            :host {
                display: flex;
                flex-direction: row;
            }
        `;
    }
    constructor() {
        super();
        this.#walker = document.createTreeWalker(this, NodeFilter.SHOW_ELEMENT, this.#nodeFilter.bind(this));
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
        this.addEventListener("click", this.#handleClickEvent.bind(this));
        this.addEventListener("contextmenu", this.#handleContextMenuEvent.bind(this));
        this.addEventListener("dblclick", this.#handleDblClickEvent.bind(this));
        this.addEventListener("focus", this.#handleFocusEvent.bind(this));
        this.addEventListener("focusin", this.#handleFocusInEvent.bind(this));
        this.addEventListener("focusout", this.#handleFocusOutEvent.bind(this));
        this.addEventListener("mousedown", this.#handleMouseDownEvent.bind(this));
        this.addEventListener("keydown", this.#handleKeyDownEvent.bind(this));
    }
    connectedCallback() {
        const { tabIndex } = this;
        this.tabIndex = tabIndex;
    }
    #nodeFilter(node) {
        if (node instanceof _ToolBarItem__WEBPACK_IMPORTED_MODULE_1__.HTMLEToolBarItemElement) {
            return NodeFilter.FILTER_ACCEPT;
        }
        if (node instanceof _ToolBarItemGroup__WEBPACK_IMPORTED_MODULE_2__.HTMLEToolBarItemGroupElement) {
            return NodeFilter.FILTER_SKIP;
        }
        return NodeFilter.FILTER_REJECT;
    }
    firstItem() {
        const walker = this.#walker;
        walker.currentNode = walker.root;
        return walker.firstChild();
    }
    #lastItem() {
        const walker = this.#walker;
        walker.currentNode = walker.root;
        return walker.lastChild();
    }
    #previousItem(item) {
        const walker = this.#walker;
        walker.currentNode = item;
        const previousItem = walker.previousSibling();
        return previousItem;
    }
    #nextItem(item) {
        const walker = this.#walker;
        walker.currentNode = item;
        return walker.nextSibling();
    }
    #setActiveItem(item) {
        const { activeItem } = this;
        if (activeItem !== null && activeItem !== item) {
            activeItem.active = false;
        }
        if (item !== null) {
            item.active = true;
        }
    }
    #handleClickEvent(event) {
        const { target } = event;
        const targetItem = target.closest("e-toolbaritem");
        if (targetItem) {
            const { type, pressed } = targetItem;
            switch (type) {
                case "checkbox": {
                    targetItem.pressed = !pressed;
                    break;
                }
                case "radio": {
                    targetItem.pressed = true;
                    break;
                }
                case "menubutton": {
                    const { menubutton } = targetItem;
                    if (menubutton && !menubutton.contains(target)) {
                        const expand = !wasExpandedOnMouseDown.get(targetItem);
                        menubutton.toggle(expand);
                        if (expand) {
                            menubutton.firstItem?.focus({ preventScroll: true });
                        }
                    }
                    break;
                }
                case "select": {
                    const { select } = targetItem;
                    if (select && !select.contains(target)) {
                        const expand = !wasExpandedOnMouseDown.get(targetItem);
                        select.toggle(expand);
                    }
                    break;
                }
            }
        }
        event.stopPropagation();
    }
    #handleContextMenuEvent(event) {
        event.stopPropagation();
    }
    #handleDblClickEvent(event) {
        event.stopPropagation();
    }
    #handleFocusEvent(event) {
        const { relatedTarget } = event;
        const { activeItem } = this;
        if (!this.contains(relatedTarget)) {
            (activeItem ?? this.firstItem())?.focus();
        }
    }
    #handleFocusInEvent(event) {
        const { target } = event;
        const targetItem = target.closest("e-toolbaritem");
        if (targetItem) {
            this.#setActiveItem(targetItem);
            this.tabIndex = -1;
        }
    }
    #handleFocusOutEvent(event) {
        const { relatedTarget } = event;
        const lostFocusWithin = !this.contains(relatedTarget);
        if (lostFocusWithin) {
            this.tabIndex = 0;
        }
    }
    #handleMouseDownEvent(event) {
        const { target } = event;
        const targetItem = target.closest("e-toolbaritem");
        if (targetItem) {
            const { type } = targetItem;
            switch (type) {
                case "menubutton": {
                    const { menubutton } = targetItem;
                    if (menubutton && !menubutton.contains(target)) {
                        wasExpandedOnMouseDown.set(targetItem, menubutton.expanded);
                    }
                    break;
                }
                case "select": {
                    const { select } = targetItem;
                    if (select && !select.contains(target)) {
                        wasExpandedOnMouseDown.set(targetItem, select.expanded);
                    }
                    break;
                }
            }
        }
    }
    #handleKeyDownEvent(event) {
        const { key } = event;
        const { activeItem } = this;
        switch (key) {
            case "Enter":
            case " ": {
                if (activeItem) {
                    const { type } = activeItem;
                    switch (type) {
                        case "menubutton": {
                            const { menubutton } = activeItem;
                            if (menubutton) {
                                menubutton.expand();
                                menubutton.firstItem?.focus({ preventScroll: true });
                            }
                            break;
                        }
                        case "select": {
                            const { select } = activeItem;
                            if (select) {
                                select.expand();
                            }
                            break;
                        }
                        default: {
                            activeItem.click();
                            break;
                        }
                    }
                    event.stopPropagation();
                }
                break;
            }
            case "ArrowLeft": {
                if (activeItem) {
                    const previousItem = this.#previousItem(activeItem);
                    if (previousItem) {
                        previousItem.focus({ preventScroll: true });
                    }
                }
                else {
                    const firstItem = this.firstItem();
                    if (firstItem) {
                        firstItem.focus({ preventScroll: true });
                    }
                }
                event.stopPropagation();
                break;
            }
            case "ArrowRight": {
                if (activeItem) {
                    const nextItem = this.#nextItem(activeItem);
                    if (nextItem) {
                        nextItem.focus({ preventScroll: true });
                    }
                }
                else {
                    const lastItem = this.#lastItem();
                    if (lastItem) {
                        lastItem.focus({ preventScroll: true });
                    }
                }
                event.stopPropagation();
                break;
            }
            case "ArrowDown": {
                if (activeItem) {
                    const { type } = activeItem;
                    switch (type) {
                        case "select": {
                            activeItem.select?.expand();
                            event.stopPropagation();
                            break;
                        }
                    }
                }
                break;
            }
            case "Home": {
                const firstItem = this.firstItem();
                if (firstItem) {
                    firstItem.focus({ preventScroll: true });
                }
                event.stopPropagation();
                break;
            }
            case "End": {
                const lastItem = this.#lastItem();
                if (lastItem) {
                    lastItem.focus({ preventScroll: true });
                }
                event.stopPropagation();
                break;
            }
        }
    }
};
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.AttributeProperty)({ type: String })
], HTMLEToolBarElementBase.prototype, "name", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.AttributeProperty)({ type: String })
], HTMLEToolBarElementBase.prototype, "orientation", void 0);
HTMLEToolBarElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.CustomElement)({
        name: "e-toolbar"
    })
], HTMLEToolBarElementBase);
var HTMLEToolBarElement = HTMLEToolBarElementBase;
//# sourceMappingURL=ToolBar.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/toolbars/ToolBarItem.js":
/*!*****************************************************************!*\
  !*** ../editor/lib/elements/containers/toolbars/ToolBarItem.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EToolBarItem": () => (/* binding */ EToolBarItem),
/* harmony export */   "HTMLEToolBarItemElement": () => (/* binding */ HTMLEToolBarItemElement)
/* harmony export */ });
/* harmony import */ var _stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../stylesheets/Theme */ "../editor/lib/stylesheets/Theme.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var _Snippets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Snippets */ "../editor/lib/elements/Snippets.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var shadowTemplate;
var style;
var iconPartTemplate;
let HTMLEToolBarItemElementBase = class HTMLEToolBarItemElementBase extends HTMLElement {
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("slot"), (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("slot", {
            attributes: {
                name: "select"
            }
        }), (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("slot", {
            attributes: {
                name: "menubutton"
            }
        }));
        iconPartTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("span", {
            attributes: {
                part: "icon"
            }
        });
        style = /*css*/ `
            :host {
                display: flex;
                user-select: none;
                white-space: nowrap;
                cursor: pointer;
                line-height: 22px;
            }
            
            :host([disabled]) {
                opacity: 0.38;
                pointer-events: none;
            }
            
            :host(:hover) {
                background-color: var(--theme-hovered-item-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_HOVERED_ITEM_COLOR});
            }
            
            :host([pressed]),
            :host(:active) {
                background-color: var(--theme-activated-item-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_ACTIVATED_ITEM_COLOR});
            }
            
            :host(:not([iconed])) [part="icon"] {
                display: none;
            }

            [part="icon"] {
                flex: none;
                display: inline-block;
                width: 18px;
                height: 18px;
                padding: 2px;
                overflow: hidden;
            }
            
            [part="icon"]::before {
                display: inline-block;
                width: 18px;
                height: 18px;
                content: "";
                mask-size: 18px 18px;
                -webkit-mask-size: 18px 18px;
                background-color: none;
                -webkit-mask-image: none;
                mask-image: none;
                filter: none;
            }
            
            :host(:focus) {
                outline: 1px solid var(--theme-focused-item-outline-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_FOCUSED_ITEM_OUTLINE_COLOR});
                outline-offset: -1px;
            }
            
            :host([type="select"]:focus) ::slotted(e-select) {
                border-color: transparent;
            }
        `;
    }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        const { tabIndex } = this;
        this.tabIndex = tabIndex;
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "label": {
                //...
                break;
            }
            case "iconed": {
                const { shadowRoot } = this;
                if (newValue !== null) {
                    shadowRoot.prepend(iconPartTemplate.cloneNode(true));
                }
                else {
                    const iconPart = this.#icon();
                    if (iconPart) {
                        iconPart.remove();
                    }
                }
                break;
            }
        }
    }
    #icon() {
        return this.shadowRoot.querySelector("[part=icon]");
    }
};
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.QueryProperty)({ selector: ":scope > e-menubutton[slot=menubutton]" })
], HTMLEToolBarItemElementBase.prototype, "menubutton", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.QueryProperty)({ selector: ":scope > e-select[slot=select]" })
], HTMLEToolBarItemElementBase.prototype, "select", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean })
], HTMLEToolBarItemElementBase.prototype, "active", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean })
], HTMLEToolBarItemElementBase.prototype, "pressed", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean })
], HTMLEToolBarItemElementBase.prototype, "expanded", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean, observed: true })
], HTMLEToolBarItemElementBase.prototype, "iconed", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String, observed: true })
], HTMLEToolBarItemElementBase.prototype, "value", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String })
], HTMLEToolBarItemElementBase.prototype, "name", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String, observed: true })
], HTMLEToolBarItemElementBase.prototype, "label", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String })
], HTMLEToolBarItemElementBase.prototype, "type", void 0);
HTMLEToolBarItemElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.CustomElement)({
        name: "e-toolbaritem"
    })
], HTMLEToolBarItemElementBase);
var HTMLEToolBarItemElement = HTMLEToolBarItemElementBase;
var EToolBarItem = (0,_Snippets__WEBPACK_IMPORTED_MODULE_2__.constructor)(HTMLEToolBarItemElement.prototype, (init) => {
    const { label, name, type, value, trigger, menubutton, select } = init;
    if (menubutton) {
        menubutton.slot = "menubutton";
    }
    if (select) {
        select.slot = "select";
    }
    return (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("e-toolbaritem", {
        attributes: {
            tabindex: -1,
            title: label,
            name: name,
            value: value,
            type: type
        },
        children: menubutton ? [menubutton] : select ? [select] : undefined,
        listeners: {
            click: trigger
        }
    });
}, {
    button(init) {
        return new EToolBarItem({
            ...init, type: "button"
        });
    },
    checkbox(init) {
        return new EToolBarItem({
            ...init, type: "checkbox"
        });
    },
    radio(init) {
        return new EToolBarItem({
            ...init, type: "radio"
        });
    },
    menubutton(init) {
        return new EToolBarItem({
            ...init, type: "menubutton"
        });
    },
    select(init) {
        return new EToolBarItem({
            ...init, type: "select"
        });
    }
});
//# sourceMappingURL=ToolBarItem.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/toolbars/ToolBarItemGroup.js":
/*!**********************************************************************!*\
  !*** ../editor/lib/elements/containers/toolbars/ToolBarItemGroup.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEToolBarItemGroupElement": () => (/* binding */ HTMLEToolBarItemGroupElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var _ToolBarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToolBarItem */ "../editor/lib/elements/containers/toolbars/ToolBarItem.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var shadowTemplate;
var style;
let HTMLEToolBarItemGroupElementBase = class HTMLEToolBarItemGroupElementBase extends HTMLElement {
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("slot"));
        style = /*css*/ `
            :host {
                display: flex;
                width: max-content;
                flex-direction: row;
            }
        `;
    }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "label": {
                const label = this.shadowRoot.querySelector("[part='label']");
                if (label) {
                    label.textContent = newValue;
                }
                break;
            }
        }
    }
};
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.AttributeProperty)({ type: String })
], HTMLEToolBarItemGroupElementBase.prototype, "name", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.AttributeProperty)({ type: String, observed: true })
], HTMLEToolBarItemGroupElementBase.prototype, "label", void 0);
HTMLEToolBarItemGroupElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.CustomElement)({
        name: "e-toolbaritemgroup"
    })
], HTMLEToolBarItemGroupElementBase);
var HTMLEToolBarItemGroupElement = HTMLEToolBarItemGroupElementBase;
//# sourceMappingURL=ToolBarItemGroup.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/trees/Tree.js":
/*!*******************************************************!*\
  !*** ../editor/lib/elements/containers/trees/Tree.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLETreeElement": () => (/* binding */ HTMLETreeElement)
/* harmony export */ });
/* harmony import */ var _stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../stylesheets/Theme */ "../editor/lib/stylesheets/Theme.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var _TreeItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TreeItem */ "../editor/lib/elements/containers/trees/TreeItem.js");
/* harmony import */ var _TreeItemGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TreeItemGroup */ "../editor/lib/elements/containers/trees/TreeItemGroup.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var shadowTemplate;
var style;
let HTMLETreeElementBase = class HTMLETreeElementBase extends HTMLElement {
    items;
    get activeItem() {
        return this.querySelector("e-treeitem[active]");
    }
    get dropTargetItem() {
        return this.querySelector("e-treeitem[droptarget]");
    }
    #onSelection;
    #hasSelectionChanged;
    #walker;
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("slot"));
        style = /*css*/ `
            :host {
                display: block;
            }
            
            :host(:focus) {
                outline: 1px solid var(--theme-focused-item-outline-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_FOCUSED_ITEM_OUTLINE_COLOR});
                outline-offset: -1px;
            }
        `;
    }
    constructor() {
        super();
        this.#walker = document.createTreeWalker(this, NodeFilter.SHOW_ELEMENT, this.#nodeFilter.bind(this));
        this.#onSelection = false;
        this.#hasSelectionChanged = false;
        this.items = this.getElementsByTagName("e-treeitem");
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
        this.addEventListener("click", this.#handleClickEvent.bind(this));
        this.addEventListener("contextmenu", this.#handleContextMenuEvent.bind(this));
        this.addEventListener("dblclick", this.#handleDblClickEvent.bind(this));
        this.addEventListener("mousedown", this.#handleMouseDownEvent.bind(this));
        this.addEventListener("dragend", this.#handleDragEndEvent.bind(this));
        this.addEventListener("dragenter", this.#handleDragEnterEvent.bind(this));
        this.addEventListener("dragleave", this.#handleDragLeaveEvent.bind(this));
        this.addEventListener("dragover", this.#handleDragOverEvent.bind(this));
        this.addEventListener("drop", this.#handleDropEvent.bind(this));
        this.addEventListener("focus", this.#handleFocusEvent.bind(this));
        this.addEventListener("focusin", this.#handleFocusInEvent.bind(this));
        this.addEventListener("focusout", this.#handleFocusOutEvent.bind(this));
        this.addEventListener("keydown", this.#handleKeyDownEvent.bind(this));
        this.addEventListener("select", this.#handleSelectEvent.bind(this));
    }
    connectedCallback() {
        const { tabIndex } = this;
        this.tabIndex = tabIndex;
    }
    selectedItems() {
        const selectedItems = [];
        const walker = this.#walker;
        walker.currentNode = walker.root;
        let item = this.firstItem();
        while (item !== null) {
            if (item.selected) {
                selectedItems.push(item);
            }
            item = this.#nextItem(item);
        }
        return selectedItems;
    }
    beginSelection() {
        this.#onSelection = true;
    }
    endSelection() {
        this.#onSelection = false;
        if (this.#hasSelectionChanged) {
            this.dispatchEvent(new Event("selectionchange", { bubbles: true }));
            this.#hasSelectionChanged = false;
        }
    }
    #nodeFilter(node) {
        if (node instanceof _TreeItem__WEBPACK_IMPORTED_MODULE_2__.HTMLETreeItemElement) {
            return NodeFilter.FILTER_ACCEPT;
        }
        if (node instanceof _TreeItemGroup__WEBPACK_IMPORTED_MODULE_3__.HTMLETreeItemGroupElement) {
            return NodeFilter.FILTER_SKIP;
        }
        return NodeFilter.FILTER_REJECT;
    }
    #getItemsRange(from, to) {
        if (from == to) {
            return [from];
        }
        const position = from.compareDocumentPosition(to);
        if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
            const range = [from];
            let nextVisibleItem = this.#nextItem(from);
            while (nextVisibleItem && nextVisibleItem !== to) {
                range.push(nextVisibleItem);
                nextVisibleItem = this.#nextItem(nextVisibleItem);
            }
            range.push(to);
            return range;
        }
        else if (position & Node.DOCUMENT_POSITION_PRECEDING) {
            const range = [from];
            let previousVisibleItem = this.#previousItem(from);
            while (previousVisibleItem && previousVisibleItem !== to) {
                range.push(previousVisibleItem);
                previousVisibleItem = this.#previousItem(previousVisibleItem);
            }
            range.push(to);
            return range;
        }
        return [];
    }
    #setSelection(...items) {
        const selectedItems = this.selectedItems();
        this.beginSelection();
        selectedItems.forEach((selectedItem_i) => {
            if (!items.includes(selectedItem_i)) {
                selectedItem_i.selected = false;
            }
        });
        items.forEach((item_i) => {
            if (this.contains(item_i) && !item_i.selected) {
                item_i.selected = true;
            }
        });
        this.endSelection();
    }
    #addToSelection(...items) {
        this.beginSelection();
        items.forEach((item_i) => {
            if (!item_i.selected) {
                item_i.selected = true;
            }
        });
        this.endSelection();
    }
    #removeFromSelection(...items) {
        const selectedItems = this.selectedItems();
        this.beginSelection();
        items.forEach((item_i) => {
            if (selectedItems.includes(item_i)) {
                item_i.selected = false;
            }
        });
        this.endSelection();
    }
    #clearSelection() {
        const selectedItems = this.selectedItems();
        this.beginSelection();
        selectedItems.forEach((item_i) => {
            item_i.selected = false;
        });
        this.endSelection();
    }
    #setActiveItem(item) {
        const { activeItem } = this;
        if (activeItem !== null && activeItem !== item) {
            activeItem.active = false;
            activeItem.tabIndex = -1;
        }
        if (item !== null) {
            const walker = this.#walker;
            walker.currentNode = item;
            item.active = true;
            item.tabIndex = 0;
        }
    }
    #setDropTargetItem(item) {
        const { dropTargetItem } = this;
        if (dropTargetItem !== null && dropTargetItem !== item) {
            dropTargetItem.droptarget = false;
        }
        if (item !== null) {
            this.droptarget = true;
            item.droptarget = true;
        }
        else {
            this.droptarget = false;
        }
    }
    firstItem() {
        const walker = this.#walker;
        const { root } = walker;
        walker.currentNode = root;
        return walker.firstChild();
    }
    #lastItem() {
        const walker = this.#walker;
        const { root } = walker;
        walker.currentNode = root;
        return walker.lastChild();
    }
    #previousItem(item) {
        const walker = this.#walker;
        walker.currentNode = item;
        const previousSibling = walker.previousSibling();
        return previousSibling ?
            this.#deepestItem(previousSibling) :
            walker.parentNode();
    }
    #nextItem(item) {
        const walker = this.#walker;
        walker.currentNode = item;
        const { type, expanded } = item;
        return (type === "leaf" ?
            walker.nextNode() :
            expanded ?
                walker.nextNode() :
                walker.nextSibling() ??
                    (walker.parentNode(), walker.nextSibling()));
    }
    #deepestItem(item) {
        if (item.expanded) {
            const walker = this.#walker;
            const lastItem = walker.lastChild();
            if (lastItem) {
                return this.#deepestItem(lastItem);
            }
        }
        return item;
    }
    #handleClickEvent(event) {
        const { target, shiftKey, ctrlKey } = event;
        const targetItem = target.closest("e-treeitem");
        if (targetItem) {
            if (!shiftKey && !ctrlKey) {
                this.#setSelection(targetItem);
                const { type } = targetItem;
                if (type == "parent") {
                    targetItem.toggle();
                }
            }
        }
        event.stopPropagation();
    }
    #handleContextMenuEvent(event) {
        event.stopPropagation();
    }
    #handleDblClickEvent(event) {
        event.stopPropagation();
    }
    #handleDragEndEvent() {
        this.#setDropTargetItem(null);
    }
    #handleDragEnterEvent(event) {
        const { target } = event;
        const targetItem = target.closest("e-treeitem");
        if (targetItem) {
            const { type } = targetItem;
            if (type == "parent") {
                targetItem.toggle(true);
            }
            this.#setDropTargetItem(targetItem);
        }
        event.preventDefault();
    }
    #handleDragOverEvent(event) {
        event.preventDefault();
    }
    #handleDragLeaveEvent(event) {
        const { relatedTarget } = event;
        if (relatedTarget instanceof Element) {
            const parentItem = relatedTarget.closest("e-treeitem");
            if (!parentItem) {
                let rootNode = relatedTarget;
                while (!(rootNode instanceof _TreeItem__WEBPACK_IMPORTED_MODULE_2__.HTMLETreeItemElement || rootNode instanceof Document)) {
                    rootNode = rootNode.getRootNode();
                    if (rootNode instanceof ShadowRoot) {
                        rootNode = rootNode.host;
                    }
                }
                if (rootNode instanceof Document) {
                    this.#setDropTargetItem(null);
                }
            }
        }
    }
    #handleDropEvent() {
        this.#setDropTargetItem(null);
    }
    #handleKeyDownEvent(event) {
        const { key } = event;
        const { activeItem } = this;
        switch (key) {
            case "a": {
                const { ctrlKey } = event;
                if (ctrlKey) {
                    if (activeItem) {
                        const walker = this.#walker;
                        walker.currentNode = activeItem;
                        const firstItem = (walker.currentNode = walker.parentNode() ?? this, walker.firstChild());
                        const lastItem = (walker.currentNode = walker.parentNode() ?? this, walker.lastChild());
                        if (firstItem && lastItem) {
                            const range = this.#getItemsRange(firstItem, this.#deepestItem(lastItem));
                            if (range) {
                                this.#setSelection(...range);
                            }
                        }
                    }
                }
                event.preventDefault();
                break;
            }
            case "ArrowLeft": {
                if (activeItem) {
                    if (activeItem.expanded) {
                        activeItem.toggle();
                    }
                    else {
                        const walker = this.#walker;
                        const parentItem = walker.parentNode();
                        if (parentItem) {
                            parentItem.focus({ preventScroll: true });
                        }
                    }
                }
                event.stopPropagation();
                break;
            }
            case "ArrowRight": {
                if (activeItem) {
                    if (!activeItem.expanded) {
                        activeItem.toggle();
                    }
                }
                event.stopPropagation();
                break;
            }
            case "ArrowUp": {
                if (activeItem) {
                    const previousItem = this.#previousItem(activeItem);
                    if (previousItem) {
                        previousItem.focus({ preventScroll: true });
                        const { shiftKey } = event;
                        if (shiftKey) {
                            previousItem.selected ?
                                this.#removeFromSelection(previousItem) :
                                this.#addToSelection(previousItem);
                        }
                    }
                }
                else {
                    const firstItem = this.firstItem();
                    if (firstItem) {
                        firstItem.focus({ preventScroll: true });
                    }
                }
                event.stopPropagation();
                break;
            }
            case "ArrowDown": {
                if (activeItem) {
                    const nextItem = this.#nextItem(activeItem);
                    if (nextItem) {
                        nextItem.focus({ preventScroll: true });
                        const { shiftKey } = event;
                        if (shiftKey) {
                            nextItem.selected ?
                                this.#removeFromSelection(nextItem) :
                                this.#addToSelection(nextItem);
                        }
                    }
                }
                else {
                    const lastItem = this.#lastItem();
                    if (lastItem) {
                        lastItem.focus({ preventScroll: true });
                    }
                }
                event.stopPropagation();
                break;
            }
            case "Home": {
                const firstItem = this.firstItem();
                if (firstItem) {
                    firstItem.focus({ preventScroll: true });
                }
                event.stopPropagation();
                break;
            }
            case "End": {
                const lastItem = this.#lastItem();
                if (lastItem) {
                    lastItem.focus({ preventScroll: true });
                }
                event.stopPropagation();
                break;
            }
            case "Enter": {
                if (activeItem) {
                    this.#setSelection(activeItem);
                    activeItem.click();
                }
                event.stopPropagation();
                break;
            }
            case "Escape": {
                this.#clearSelection();
                this.#setActiveItem(null);
                this.focus();
                event.stopPropagation();
                break;
            }
        }
    }
    #handleFocusEvent(event) {
        const { relatedTarget } = event;
        const { activeItem } = this;
        if (!this.contains(relatedTarget)) {
            (activeItem ?? this.firstItem())?.focus();
        }
    }
    #handleFocusInEvent(event) {
        const { target } = event;
        const targetItem = target.closest("e-treeitem");
        if (targetItem) {
            this.#setActiveItem(targetItem);
            this.tabIndex = -1;
        }
    }
    #handleFocusOutEvent(event) {
        const { relatedTarget } = event;
        const lostFocusWithin = !this.contains(relatedTarget);
        if (lostFocusWithin) {
            this.tabIndex = 0;
        }
    }
    #handleMouseDownEvent(event) {
        const { target, ctrlKey, shiftKey, button } = event;
        if (target instanceof _TreeItem__WEBPACK_IMPORTED_MODULE_2__.HTMLETreeItemElement) {
            const { selected } = target;
            switch (button) {
                case 0:
                    {
                        if (!shiftKey && !ctrlKey && !selected) {
                            this.#setSelection(target);
                        }
                        else if (ctrlKey) {
                            if (selected) {
                                target.blur();
                            }
                            (!selected) ?
                                this.#addToSelection(target) :
                                this.#removeFromSelection(target);
                            event.stopPropagation();
                        }
                        else if (shiftKey) {
                            const { activeItem } = this;
                            if (activeItem) {
                                const range = this.#getItemsRange(activeItem, target);
                                if (range) {
                                    this.#setSelection(...range);
                                }
                            }
                            event.stopPropagation();
                        }
                    }
                    break;
                case 2: {
                    if (!selected) {
                        this.#setSelection(target);
                    }
                    break;
                }
            }
        }
    }
    #handleSelectEvent() {
        if (this.#onSelection) {
            this.#hasSelectionChanged = true;
        }
        else {
            this.dispatchEvent(new Event("selectionchange", { bubbles: true }));
        }
    }
};
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean })
], HTMLETreeElementBase.prototype, "droptarget", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String })
], HTMLETreeElementBase.prototype, "name", void 0);
HTMLETreeElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.CustomElement)({
        name: "e-tree"
    })
], HTMLETreeElementBase);
var HTMLETreeElement = HTMLETreeElementBase;
//# sourceMappingURL=Tree.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/trees/TreeItem.js":
/*!***********************************************************!*\
  !*** ../editor/lib/elements/containers/trees/TreeItem.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLETreeItemElement": () => (/* binding */ HTMLETreeItemElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var _css_elements_containers_trees_treeitem_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../css/elements/containers/trees/treeitem.css */ "../editor/css/elements/containers/trees/treeitem.css");
/* harmony import */ var _stylesheets_Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../stylesheets/Theme */ "../editor/lib/stylesheets/Theme.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var shadowTemplate;
var style;
let HTMLETreeItemElementBase = class HTMLETreeItemElementBase extends HTMLElement {
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("div", {
            attributes: {
                part: "content"
            },
            children: [
                (0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("span", {
                    attributes: {
                        part: "arrow"
                    }
                }),
                (0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("slot")
            ]
        }), (0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("slot", {
            attributes: {
                name: "group"
            }
        }));
    }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_2__.theme.stylesheet, ...Array.from(_css_elements_containers_trees_treeitem_css__WEBPACK_IMPORTED_MODULE_1__["default"]).map((item) => {
                const [count, source] = item;
                const stylesheet = new CSSStyleSheet();
                stylesheet.replace(source);
                return stylesheet;
            })];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        const { tabIndex } = this;
        this.tabIndex = tabIndex;
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "expanded": {
                this.dispatchEvent(new Event("toggle", { bubbles: true }));
                break;
            }
            case "selected": {
                this.dispatchEvent(new Event("select", { bubbles: true }));
                break;
            }
            case "label": {
                const labelPart = this.shadowRoot.querySelector("[part=label]");
                if (labelPart) {
                    labelPart.textContent = newValue;
                }
                break;
            }
            case "level": {
                this.shadowRoot.adoptedStyleSheets[2].cssRules[5].styleMap.set("padding-left", `${12 * Number(newValue)}px`);
                break;
            }
        }
    }
    toggle(force) {
        const { expanded } = this;
        this.expanded = force ?? !expanded;
    }
};
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.AttributeProperty)({ type: String })
], HTMLETreeItemElementBase.prototype, "name", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.AttributeProperty)({ type: Number })
], HTMLETreeItemElementBase.prototype, "posinset", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.AttributeProperty)({ type: String, observed: true })
], HTMLETreeItemElementBase.prototype, "label", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.AttributeProperty)({ type: Boolean, observed: true })
], HTMLETreeItemElementBase.prototype, "expanded", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.AttributeProperty)({ type: Boolean })
], HTMLETreeItemElementBase.prototype, "droptarget", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.AttributeProperty)({ type: Boolean })
], HTMLETreeItemElementBase.prototype, "active", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.AttributeProperty)({ type: Boolean, observed: true })
], HTMLETreeItemElementBase.prototype, "selected", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.AttributeProperty)({ type: Number, observed: true })
], HTMLETreeItemElementBase.prototype, "level", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.AttributeProperty)({ type: String, defaultValue: "leaf" })
], HTMLETreeItemElementBase.prototype, "type", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.QueryProperty)({ selector: ":scope > e-treeitemgroup[slot=group]" })
], HTMLETreeItemElementBase.prototype, "group", void 0);
HTMLETreeItemElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.CustomElement)({
        name: "e-treeitem"
    })
], HTMLETreeItemElementBase);
var HTMLETreeItemElement = HTMLETreeItemElementBase;
//# sourceMappingURL=TreeItem.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/trees/TreeItemGroup.js":
/*!****************************************************************!*\
  !*** ../editor/lib/elements/containers/trees/TreeItemGroup.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLETreeItemGroupElement": () => (/* binding */ HTMLETreeItemGroupElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var _TreeItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TreeItem */ "../editor/lib/elements/containers/trees/TreeItem.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var shadowTemplate;
var style;
let HTMLETreeItemGroupElementBase = class HTMLETreeItemGroupElementBase extends HTMLElement {
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("slot"));
        style = /*css*/ `
            :host {
                display: block;
            }
        `;
    }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
    }
};
HTMLETreeItemGroupElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.CustomElement)({
        name: "e-treeitemgroup"
    })
], HTMLETreeItemGroupElementBase);
var HTMLETreeItemGroupElement = HTMLETreeItemGroupElementBase;
//# sourceMappingURL=TreeItemGroup.js.map

/***/ }),

/***/ "../editor/lib/elements/containers/trees/index.js":
/*!********************************************************!*\
  !*** ../editor/lib/elements/containers/trees/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLETreeElement": () => (/* reexport safe */ _Tree__WEBPACK_IMPORTED_MODULE_0__.HTMLETreeElement),
/* harmony export */   "HTMLETreeItemElement": () => (/* reexport safe */ _TreeItem__WEBPACK_IMPORTED_MODULE_1__.HTMLETreeItemElement),
/* harmony export */   "HTMLETreeItemGroupElement": () => (/* reexport safe */ _TreeItemGroup__WEBPACK_IMPORTED_MODULE_2__.HTMLETreeItemGroupElement)
/* harmony export */ });
/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tree */ "../editor/lib/elements/containers/trees/Tree.js");
/* harmony import */ var _TreeItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TreeItem */ "../editor/lib/elements/containers/trees/TreeItem.js");
/* harmony import */ var _TreeItemGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TreeItemGroup */ "../editor/lib/elements/containers/trees/TreeItemGroup.js");






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../editor/lib/elements/controls/sashes/HeightSash.js":
/*!************************************************************!*\
  !*** ../editor/lib/elements/controls/sashes/HeightSash.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEHeightSashElement": () => (/* binding */ HTMLEHeightSashElement)
/* harmony export */ });
/* harmony import */ var _stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../stylesheets/Theme */ "../editor/lib/stylesheets/Theme.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var style;
let HTMLEHeightSashElementBase = class HTMLEHeightSashElementBase extends HTMLElement {
    get target() {
        return this.#target;
    }
    static {
        style = /*css*/ `
            :host {
                display: block;
                background-color: var(--theme-selected-item-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_SELECTED_ITEM_COLOR});
                transition-property: opacity;
                transition-delay: 0.2s;
                transition-duration: 0.2s;
                transition-timing-function: ease-out;
                
                height: 2px;
                cursor: ns-resize;
            }
        `;
    }
    #target;
    #onCapture;
    #queuedPointerCallback;
    #pointerMovement;
    constructor() {
        super();
        this.#target = null;
        this.#queuedPointerCallback = null;
        this.#pointerMovement = 0;
        this.#onCapture = false;
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        this.addEventListener("pointerdown", this.#handlePointerDownEvent.bind(this));
        this.addEventListener("pointermove", this.#handlePointerMoveEvent.bind(this));
        this.addEventListener("pointerup", this.#handlePointerUpEvent.bind(this));
    }
    #pointerMoveCallback() {
        const target = this.#target;
        if (target !== null) {
            const targetComputedStyle = window.getComputedStyle(target);
            const { style } = target;
            const { growdir } = this;
            const movementY = this.#pointerMovement;
            const height = parseFloat(targetComputedStyle.getPropertyValue("height"));
            const newHeight = Math.trunc(height + (growdir == "top" ? -1 : 1) * movementY);
            style.setProperty("height", `${newHeight}px`);
            const computedNewHeight = parseFloat(targetComputedStyle.getPropertyValue("height"));
            style.setProperty("height", `${computedNewHeight}px`);
            this.dispatchEvent(new Event("resize"));
        }
        this.#queuedPointerCallback = null;
    }
    #handlePointerDownEvent(event) {
        const { pointerId } = event;
        const { controls } = this;
        const rootNode = this.getRootNode();
        this.#target = rootNode.getElementById(controls);
        this.setPointerCapture(pointerId);
        this.#onCapture = true;
    }
    #handlePointerMoveEvent(event) {
        if (this.#onCapture) {
            if (this.#queuedPointerCallback == null) {
                this.#pointerMovement = event.movementY;
                this.#queuedPointerCallback = this.#pointerMoveCallback.bind(this);
                requestAnimationFrame(this.#queuedPointerCallback);
            }
            else {
                this.#pointerMovement += event.movementY;
            }
        }
    }
    #handlePointerUpEvent(event) {
        const { pointerId } = event;
        this.releasePointerCapture(pointerId);
        this.#onCapture = false;
    }
};
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String })
], HTMLEHeightSashElementBase.prototype, "controls", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String, defaultValue: "top" })
], HTMLEHeightSashElementBase.prototype, "growdir", void 0);
HTMLEHeightSashElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.CustomElement)({
        name: "e-hsash"
    })
], HTMLEHeightSashElementBase);
var HTMLEHeightSashElement = HTMLEHeightSashElementBase;
//# sourceMappingURL=HeightSash.js.map

/***/ }),

/***/ "../editor/lib/elements/controls/sashes/WidthSash.js":
/*!***********************************************************!*\
  !*** ../editor/lib/elements/controls/sashes/WidthSash.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEWidthSashElement": () => (/* binding */ HTMLEWidthSashElement)
/* harmony export */ });
/* harmony import */ var _stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../stylesheets/Theme */ "../editor/lib/stylesheets/Theme.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var style;
let HTMLEWidthSashElementBase = class HTMLEWidthSashElementBase extends HTMLElement {
    get target() {
        return this.#target;
    }
    #target;
    #onCapture;
    #queuedPointerCallback;
    #pointerMovement;
    static {
        style = /*css*/ `
            :host {
                display: block;
                background-color: var(--theme-selected-item-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_SELECTED_ITEM_COLOR});
                transition-property: opacity;
                transition-delay: 0.2s;
                transition-duration: 0.2s;
                transition-timing-function: ease-out;
                
                width: 2px;
                cursor: ew-resize;
            }
        `;
    }
    constructor() {
        super();
        this.#target = null;
        this.#queuedPointerCallback = null;
        this.#pointerMovement = 0;
        this.#onCapture = false;
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        this.addEventListener("pointerdown", this.#handlePointerDownEvent.bind(this));
        this.addEventListener("pointermove", this.#handlePointerMoveEvent.bind(this));
        this.addEventListener("pointerup", this.#handlePointerUpEvent.bind(this));
    }
    setWidth(width) {
        const target = this.#target;
        if (target !== null) {
            const { max } = this;
            const { style } = target;
            style.setProperty("width", `${width}px`);
            if (max) {
                style.setProperty("max-width", `${width}px`);
            }
        }
    }
    #pointerMoveCallback() {
        const target = this.#target;
        if (target !== null) {
            const targetComputedStyle = window.getComputedStyle(target);
            const { growdir } = this;
            const movementX = this.#pointerMovement;
            const width = parseFloat(targetComputedStyle.getPropertyValue("width"));
            const newWidth = width + (growdir == "right" ? 1 : -1) * movementX;
            this.setWidth(newWidth);
            this.dispatchEvent(new Event("resize"));
        }
        this.#pointerMovement = 0;
        this.#queuedPointerCallback = null;
    }
    #handlePointerDownEvent(event) {
        const { pointerId } = event;
        const { controls } = this;
        const rootNode = this.getRootNode();
        this.#target = rootNode.getElementById(controls);
        this.setPointerCapture(pointerId);
        this.#onCapture = true;
    }
    #handlePointerMoveEvent(event) {
        if (this.#onCapture) {
            if (this.#queuedPointerCallback == null) {
                this.#queuedPointerCallback = this.#pointerMoveCallback.bind(this);
                requestAnimationFrame(this.#queuedPointerCallback);
            }
            this.#pointerMovement += event.movementX;
        }
    }
    #handlePointerUpEvent(event) {
        const { pointerId } = event;
        this.releasePointerCapture(pointerId);
        this.#onCapture = false;
    }
};
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String, observed: true })
], HTMLEWidthSashElementBase.prototype, "controls", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String, defaultValue: "right" })
], HTMLEWidthSashElementBase.prototype, "growdir", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean })
], HTMLEWidthSashElementBase.prototype, "max", void 0);
HTMLEWidthSashElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.CustomElement)({
        name: "e-wsash"
    })
], HTMLEWidthSashElementBase);
var HTMLEWidthSashElement = HTMLEWidthSashElementBase;
//# sourceMappingURL=WidthSash.js.map

/***/ }),

/***/ "../editor/lib/elements/controls/sashes/index.js":
/*!*******************************************************!*\
  !*** ../editor/lib/elements/controls/sashes/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEHeightSashElement": () => (/* reexport safe */ _HeightSash__WEBPACK_IMPORTED_MODULE_0__.HTMLEHeightSashElement),
/* harmony export */   "HTMLEWidthSashElement": () => (/* reexport safe */ _WidthSash__WEBPACK_IMPORTED_MODULE_1__.HTMLEWidthSashElement)
/* harmony export */ });
/* harmony import */ var _HeightSash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeightSash */ "../editor/lib/elements/controls/sashes/HeightSash.js");
/* harmony import */ var _WidthSash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WidthSash */ "../editor/lib/elements/controls/sashes/WidthSash.js");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../editor/lib/elements/controls/select/Option.js":
/*!********************************************************!*\
  !*** ../editor/lib/elements/controls/select/Option.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEOptionElement": () => (/* binding */ HTMLEOptionElement)
/* harmony export */ });
/* harmony import */ var _stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../stylesheets/Theme */ "../editor/lib/stylesheets/Theme.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var shadowTemplate;
var style;
let HTMLEOptionElementBase = class HTMLEOptionElementBase extends HTMLElement {
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("span", {
            attributes: {
                part: "label"
            }
        }));
        style = /*css*/ `
            :host {
                display: flex;
                user-select: none;
                white-space: nowrap;
                line-height: 22px;
                padding: 0 12px;
            }
            
            :host(:hover) {
                background-color: var(--theme-hovered-item-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_HOVERED_ITEM_COLOR});
            }
            
            :host(:focus-within) {
                outline: 1px solid var(--theme-focused-item-outline-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_FOCUSED_ITEM_OUTLINE_COLOR});
                outline-offset: -1px;
            }
            
            :host([selected]) {
                background-color: var(--theme-selected-item-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_SELECTED_ITEM_COLOR});
            }
            
            :host([disabled]) {
                opacity: 0.38;
                pointer-events: none;
            }
            
            :host(::before) {
                display: flex;
                content: "";
                width: 18px;
                height: 18px;
                margin-right: 6px;
            
                mask-size: 18px 18px;
                -webkit-mask-size: 18px 18px;

                mask-image: none;
                background-color: none;
                -webkit-mask-image: none;
            }
        `;
    }
    constructor() {
        super();
        const internals = this.attachInternals();
        internals.role = "option";
        this.internals = internals;
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        const { tabIndex } = this;
        this.tabIndex = tabIndex;
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "label": {
                const { shadowRoot } = this;
                const labelPart = shadowRoot.querySelector("[part=label]");
                if (labelPart) {
                    labelPart.textContent = newValue;
                }
                break;
            }
            case "selected": {
                const { internals, selected } = this;
                internals.ariaSelected = String(selected);
                this.dispatchEvent(new Event("select", { bubbles: true }));
                break;
            }
        }
    }
};
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String })
], HTMLEOptionElementBase.prototype, "name", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String })
], HTMLEOptionElementBase.prototype, "value", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String, observed: true })
], HTMLEOptionElementBase.prototype, "label", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean })
], HTMLEOptionElementBase.prototype, "disabled", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean, observed: true })
], HTMLEOptionElementBase.prototype, "selected", void 0);
HTMLEOptionElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.CustomElement)({
        name: "e-option"
    })
], HTMLEOptionElementBase);
var HTMLEOptionElement = HTMLEOptionElementBase;
//# sourceMappingURL=Option.js.map

/***/ }),

/***/ "../editor/lib/elements/controls/select/OptionGroup.js":
/*!*************************************************************!*\
  !*** ../editor/lib/elements/controls/select/OptionGroup.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEOptionGroupElement": () => (/* binding */ HTMLEOptionGroupElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var shadowTemplate;
var style;
let HTMLEOptionGroupElementBase = class HTMLEOptionGroupElementBase extends HTMLElement {
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("slot"));
        style = /*css*/ `
            :host {
                display: block;
            }
        `;
    }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
    }
};
HTMLEOptionGroupElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.CustomElement)({
        name: "e-optiongroup"
    })
], HTMLEOptionGroupElementBase);
var HTMLEOptionGroupElement = HTMLEOptionGroupElementBase;
//# sourceMappingURL=OptionGroup.js.map

/***/ }),

/***/ "../editor/lib/elements/controls/select/Select.js":
/*!********************************************************!*\
  !*** ../editor/lib/elements/controls/select/Select.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLESelectElement": () => (/* binding */ HTMLESelectElement)
/* harmony export */ });
/* harmony import */ var _stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../stylesheets/Theme */ "../editor/lib/stylesheets/Theme.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Option */ "../editor/lib/elements/controls/select/Option.js");
/* harmony import */ var _OptionGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OptionGroup */ "../editor/lib/elements/controls/select/OptionGroup.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var shadowTemplate;
var style;
var mutationObserver;
let HTMLESelectElementBase = class HTMLESelectElementBase extends HTMLElement {
    internals;
    static get formAssociated() {
        return true;
    }
    get options() {
        return Array.from(this.querySelectorAll("e-option"));
    }
    get activeOption() {
        return this.querySelector("e-option:focus-within") ?? null;
    }
    get selectedOption() {
        return this.querySelector("e-option[selected]") ?? null;
    }
    #walker;
    #wasExpandedOnMouseDown;
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("div", {
            attributes: {
                part: "content"
            },
            children: [
                (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("output", {
                    attributes: {
                        part: "value"
                    }
                })
            ]
        }), (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("div", {
            attributes: {
                part: "box"
            },
            children: (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("slot")
        }));
        style = /*css*/ `
            :host {
                position: relative;
                display: inline-block;
                user-select: none;
                line-height: 20px;
                border: 1px solid grey;
            }

            :host(:focus) {
                outline: 1px solid var(--theme-focused-item-outline-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_FOCUSED_ITEM_OUTLINE_COLOR});
                outline-offset: -1px;
            }
            
            :host(:focus-within:not(:focus)) {
                background-color: var(--theme-focused-item-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_FOCUSED_ITEM_COLOR});
            }
            
            :host([disabled]) {
                opacity: 0.38;
                pointer-events: none;
            }
            
            [part="content"] {
                display: flex;
                overflow: hidden;
                padding: 0 4px;
            }
            
            [part="content"]::after {
                display: inline-block;
                text-align: center;
                width: 20px;
                height: 20px;
                margin-left: 6px;
                content: "▾";
            }
            
            [part="value"] {
                margin-right: auto;
                text-align: right;
            }
            
            [part="box"] {
                z-index: 1;
                position: absolute;
            
                display: block;
                padding: 6px 0;
                width: max-content;
            
                background-color: white;
            
                -webkit-box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 6px;
                -moz-box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 6px;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 6px;
            }
            
            :host(:not([expanded])) [part="box"] {
                width: 0;
                height: 0;
                padding: 0;
                opacity: 0;
                pointer-events: none;
                overflow: hidden;
            }
        `;
        mutationObserver = new MutationObserver((mutationsList) => {
            mutationsList.forEach((mutation) => {
                const { target } = mutation;
                const select = target;
                const { selectedOption, value, options } = select;
                if (!selectedOption) {
                    const optionToSelect = value ? options.find(option_i => option_i.value === value) : select.#firstOption();
                    if (optionToSelect) {
                        optionToSelect.selected = true;
                    }
                    else {
                        select.#setSelectedOption(null);
                    }
                }
            });
        });
    }
    constructor() {
        super();
        const internals = this.attachInternals();
        internals.role = "combobox";
        this.internals = internals;
        this.#wasExpandedOnMouseDown = false;
        this.#walker = document.createTreeWalker(this, NodeFilter.SHOW_ELEMENT, this.#walkerNodeFilter.bind(this));
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
        this.addEventListener("click", this.#handleClickEvent.bind(this));
        this.addEventListener("focusout", this.#handleFocusOutEvent.bind(this));
        this.addEventListener("mousedown", this.#handleMouseDownEvent.bind(this));
        this.addEventListener("mouseover", this.#handleMouseOverEvent.bind(this));
        this.addEventListener("keydown", this.#handleKeyDownEvent.bind(this));
        this.addEventListener("select", this.#handleSelectEvent.bind(this));
        mutationObserver.observe(this, {
            childList: true,
            subtree: true
        });
    }
    connectedCallback() {
        const { options, selectedOption, value } = this;
        const { tabIndex } = this;
        this.tabIndex = tabIndex;
        customElements.upgrade(this);
        const optionToSelect = selectedOption ?? (value ? options.find(option_i => option_i.value === value) : null) ?? this.#firstOption();
        if (optionToSelect) {
            if (optionToSelect === selectedOption) {
                this.#setSelectedOption(selectedOption);
            }
            else {
                this.#selectOption(optionToSelect);
            }
        }
    }
    expand() {
        const { expanded } = this;
        if (!expanded) {
            this.expanded = true;
            this.#positionBox();
            const { selectedOption } = this;
            if (selectedOption) {
                selectedOption.focus({ preventScroll: true });
            }
        }
    }
    collapse() {
        const { expanded } = this;
        if (expanded) {
            this.expanded = false;
            this.focus();
        }
    }
    toggle(force) {
        const { expanded } = this;
        const expand = force ?? !expanded;
        expand ? this.expand() : this.collapse();
    }
    #value() {
        return this.shadowRoot.querySelector("[part=value]");
    }
    #box() {
        return this.shadowRoot.querySelector("[part=box]");
    }
    #walkerNodeFilter(node) {
        if (node instanceof _Option__WEBPACK_IMPORTED_MODULE_2__.HTMLEOptionElement && !node.disabled && !node.hidden) {
            return NodeFilter.FILTER_ACCEPT;
        }
        else if (node instanceof _OptionGroup__WEBPACK_IMPORTED_MODULE_3__.HTMLEOptionGroupElement) {
            return NodeFilter.FILTER_SKIP;
        }
        return NodeFilter.FILTER_REJECT;
    }
    #firstOption() {
        const walker = this.#walker;
        walker.currentNode = walker.root;
        return walker.firstChild();
    }
    #lastOption() {
        const walker = this.#walker;
        walker.currentNode = walker.root;
        return walker.lastChild();
    }
    #previousOption(option) {
        const walker = this.#walker;
        walker.currentNode = option;
        return walker.previousNode();
    }
    #nextOption(option) {
        const walker = this.#walker;
        walker.currentNode = option;
        return walker.nextNode();
    }
    #selectOption(option) {
        const { selectedOption } = this;
        if (option !== selectedOption) {
            option.selected = true;
        }
    }
    #setSelectedOption(option) {
        const { label, value } = option ?? { label: "", value: "" };
        const { internals } = this;
        this.#value().textContent = label;
        internals.setFormValue(value);
    }
    #positionBox() {
        const box = this.#box();
        const { offsetLeft, offsetTop } = this;
        const { width, height } = this.getBoundingClientRect();
        const { style: boxStyle } = box;
        const { width: boxWidth, height: boxHeight } = box.getBoundingClientRect();
        const { clientWidth, clientHeight } = document.body;
        const overflowX = offsetLeft + width + boxWidth - clientWidth;
        const overflowY = offsetTop + boxHeight - clientHeight;
        boxStyle.setProperty("left", `${overflowX > 0 ?
            width - boxWidth :
            0}px`);
        boxStyle.setProperty("top", `${overflowY > 0 ?
            -(height - 1) :
            (height - 1)}px`);
    }
    #handleClickEvent(event) {
        const { target } = event;
        const { expanded } = this;
        const wasExpandedOnMouseDown = this.#wasExpandedOnMouseDown;
        if (!expanded && !wasExpandedOnMouseDown) {
            const { selectedOption } = this;
            this.expand();
            (selectedOption ?? this.#firstOption() ?? this).focus({ preventScroll: true });
        }
        else {
            this.collapse();
            const targetOption = target.closest("e-option");
            if (targetOption) {
                this.#selectOption(targetOption);
            }
        }
        this.#wasExpandedOnMouseDown = false;
        event.stopPropagation();
    }
    #handleFocusOutEvent(event) {
        const { relatedTarget } = event;
        const lostFocusWithin = !this.contains(relatedTarget);
        if (lostFocusWithin || this === relatedTarget) {
            this.collapse();
        }
    }
    #handleMouseDownEvent() {
        const { expanded } = this;
        this.#wasExpandedOnMouseDown = expanded;
    }
    #handleMouseOverEvent(event) {
        const { target } = event;
        const targetOption = target.closest("e-option");
        if (targetOption) {
            targetOption.focus({ preventScroll: true });
        }
    }
    #handleKeyDownEvent(event) {
        const { key } = event;
        const { expanded, activeOption, selectedOption } = this;
        switch (key) {
            case "ArrowUp": {
                if (expanded) {
                    const previousOption = activeOption ?
                        this.#previousOption(activeOption) :
                        this.#firstOption();
                    if (previousOption) {
                        previousOption.focus({ preventScroll: true });
                    }
                }
                else {
                    const previousOption = selectedOption ?
                        this.#previousOption(selectedOption) :
                        this.#firstOption();
                    if (previousOption) {
                        this.#selectOption(previousOption);
                    }
                }
                event.stopPropagation();
                break;
            }
            case "ArrowDown": {
                if (expanded) {
                    const nextOption = activeOption ?
                        this.#nextOption(activeOption) :
                        this.#lastOption();
                    if (nextOption) {
                        nextOption.focus({ preventScroll: true });
                    }
                }
                else {
                    const nextOption = selectedOption ?
                        this.#nextOption(selectedOption) :
                        this.#lastOption();
                    if (nextOption) {
                        this.#selectOption(nextOption);
                    }
                }
                event.stopPropagation();
                break;
            }
            case "Home": {
                const firstOption = this.#firstOption();
                if (firstOption) {
                    if (expanded) {
                        firstOption.focus({ preventScroll: true });
                    }
                    else {
                        this.#selectOption(firstOption);
                    }
                }
                event.stopPropagation();
                break;
            }
            case "End": {
                const lastOption = this.#lastOption();
                if (lastOption) {
                    if (expanded) {
                        lastOption.focus({ preventScroll: true });
                    }
                    else {
                        this.#selectOption(lastOption);
                    }
                }
                event.stopPropagation();
                break;
            }
            case "Enter":
            case " ": {
                (activeOption ?? this).click();
                event.stopPropagation();
                break;
            }
            case "Escape": {
                if (expanded) {
                    this.collapse();
                    event.stopPropagation();
                    event.preventDefault();
                }
                break;
            }
            default: {
                const { length: keyLength } = key;
                if (keyLength == 1) {
                    const keyCode = key.charCodeAt(0);
                    const { options } = this;
                    const activeIndex = activeOption ? options.indexOf(activeOption) : -1;
                    const matchingOption = options.find((option_i, i) => option_i.label.toLowerCase().charCodeAt(0) == keyCode && i > activeIndex) ?? options.find((option_i) => option_i.label.toLowerCase().charCodeAt(0) == keyCode);
                    if (matchingOption) {
                        matchingOption.focus({ preventScroll: true });
                    }
                    event.stopPropagation();
                }
                break;
            }
        }
    }
    #handleSelectEvent(event) {
        const { target } = event;
        const targetOption = target.closest("e-option");
        if (targetOption) {
            const { selected } = targetOption;
            if (selected) {
                const { options } = this;
                options.forEach((option_i) => {
                    if (option_i !== targetOption && option_i.selected) {
                        option_i.selected = false;
                    }
                });
                this.#setSelectedOption(targetOption);
            }
            else {
                const { selectedOption } = this;
                if (selectedOption === null) {
                    const firstOption = this.#firstOption();
                    if (firstOption !== null) {
                        this.#setSelectedOption(firstOption);
                    }
                }
            }
        }
    }
};
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String })
], HTMLESelectElementBase.prototype, "name", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String, observed: true })
], HTMLESelectElementBase.prototype, "value", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String, defaultValue: "select", observed: true })
], HTMLESelectElementBase.prototype, "type", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: Boolean })
], HTMLESelectElementBase.prototype, "expanded", void 0);
HTMLESelectElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.CustomElement)({
        name: "e-select"
    })
], HTMLESelectElementBase);
var HTMLESelectElement = HTMLESelectElementBase;
//# sourceMappingURL=Select.js.map

/***/ }),

/***/ "../editor/lib/elements/controls/select/index.js":
/*!*******************************************************!*\
  !*** ../editor/lib/elements/controls/select/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEOptionElement": () => (/* reexport safe */ _Option__WEBPACK_IMPORTED_MODULE_1__.HTMLEOptionElement),
/* harmony export */   "HTMLEOptionGroupElement": () => (/* reexport safe */ _OptionGroup__WEBPACK_IMPORTED_MODULE_2__.HTMLEOptionGroupElement),
/* harmony export */   "HTMLESelectElement": () => (/* reexport safe */ _Select__WEBPACK_IMPORTED_MODULE_0__.HTMLESelectElement)
/* harmony export */ });
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select */ "../editor/lib/elements/controls/select/Select.js");
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Option */ "../editor/lib/elements/controls/select/Option.js");
/* harmony import */ var _OptionGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OptionGroup */ "../editor/lib/elements/controls/select/OptionGroup.js");






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../editor/lib/elements/misc/Handle.js":
/*!*********************************************!*\
  !*** ../editor/lib/elements/misc/Handle.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEHandleElement": () => (/* binding */ HTMLEHandleElement)
/* harmony export */ });
/* harmony import */ var _stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stylesheets/Theme */ "../editor/lib/stylesheets/Theme.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Element */ "../editor/lib/elements/Element.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var style;
let HTMLEHandleElementBase = class HTMLEHandleElementBase extends HTMLElement {
    #target;
    #onCapture;
    static {
        style = /*css*/ `
            :host {
                display: block;
                            
                width: 24px;
                height: 12px;
                
                background-color: var(--theme-selected-item-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_SELECTED_ITEM_COLOR});

                -webkit-mask-image: url("/assets/dots.png");
                mask-image: url("/assets/dots.png");

                -webkit-mask-repeat: repeat;
                mask-repeat: repeat;
                cursor: move;
            }
        `;
    }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        this.#target = null;
        this.#onCapture = false;
        this.addEventListener("pointerdown", this.#handlePointerDownEvent.bind(this));
        this.addEventListener("pointermove", this.#handlePointerMoveEvent.bind(this));
        this.addEventListener("pointerup", this.#handlePointerUpEvent.bind(this));
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "controls": {
                const { controls } = this;
                this.#target = document.getElementById(controls);
                break;
            }
        }
    }
    #handlePointerUpEvent(event) {
        const { pointerId } = event;
        this.releasePointerCapture(pointerId);
        this.#onCapture = false;
    }
    #handlePointerDownEvent(event) {
        const { pointerId } = event;
        const { controls } = this;
        this.#target = document.getElementById(controls);
        this.setPointerCapture(pointerId);
        this.#onCapture = true;
    }
    #handlePointerMoveEvent(event) {
        if (this.#onCapture) {
            const target = this.#target;
            if (target !== null) {
                const targetComputedStyle = window.getComputedStyle(target);
                const { movementX, movementY } = event;
                const { width: rectWidth, height: rectHeight } = target.getBoundingClientRect();
                const outerElement = target.parentElement ?? document.body;
                const { left: outerRectLeft, right: outerRectRight, top: outerRectTop, bottom: outerRectBottom } = outerElement.getBoundingClientRect();
                const left = parseFloat(targetComputedStyle.getPropertyValue("left"));
                const newLeft = Math.max(outerRectLeft, Math.min(Math.trunc(left + movementX), outerRectRight - rectWidth));
                const top = parseFloat(targetComputedStyle.getPropertyValue("top"));
                const newTop = Math.max(outerRectTop, Math.min(Math.trunc(top + movementY), outerRectBottom - rectHeight));
                target.style.setProperty("left", `${newLeft}px`);
                target.style.setProperty("top", `${newTop}px`);
                this.dispatchEvent(new CustomEvent("move"));
            }
        }
    }
};
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String, observed: true })
], HTMLEHandleElementBase.prototype, "controls", void 0);
HTMLEHandleElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.CustomElement)({
        name: "e-handle"
    })
], HTMLEHandleElementBase);
var HTMLEHandleElement = HTMLEHandleElementBase;
//# sourceMappingURL=Handle.js.map

/***/ }),

/***/ "../editor/lib/elements/misc/Import.js":
/*!*********************************************!*\
  !*** ../editor/lib/elements/misc/Import.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEImportElement": () => (/* binding */ HTMLEImportElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "../editor/lib/elements/Element.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let HTMLEImportElementBase = class HTMLEImportElementBase extends HTMLElement {
    connectedCallback() {
        const { src } = this;
        if (src) {
            this.#importRequest(src);
        }
    }
    async #importRequest(src) {
        this.outerHTML = await fetch(src).then((response) => {
            if (response.ok) {
                return response.text();
            }
            else {
                throw new Error(response.statusText);
            }
        });
        this.dispatchEvent(new Event("load", { bubbles: true }));
    }
};
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.AttributeProperty)({ type: String })
], HTMLEImportElementBase.prototype, "src", void 0);
HTMLEImportElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.CustomElement)({
        name: "e-import"
    })
], HTMLEImportElementBase);
var HTMLEImportElement = HTMLEImportElementBase;
//# sourceMappingURL=Import.js.map

/***/ }),

/***/ "../editor/lib/elements/misc/Loader.js":
/*!*********************************************!*\
  !*** ../editor/lib/elements/misc/Loader.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLELoaderElement": () => (/* binding */ HTMLELoaderElement)
/* harmony export */ });
/* harmony import */ var _stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../stylesheets/Theme */ "../editor/lib/stylesheets/Theme.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Element */ "../editor/lib/elements/Element.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var barShadowTemplate;
var spinnerShadowTemplate;
var style;
let HTMLELoaderElementBase = class HTMLELoaderElementBase extends HTMLElement {
    static {
        barShadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("template");
        barShadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("div", {
            attributes: {
                part: "bar"
            },
            children: [
                (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("div", {
                    attributes: {
                        part: "slider"
                    },
                    children: [
                        (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("div", {
                            attributes: {
                                part: "cursor"
                            }
                        })
                    ]
                })
            ]
        }));
        spinnerShadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("template");
        spinnerShadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_1__.element)("div", {
            attributes: {
                part: "spinner"
            }
        }));
        style = /*css*/ `
            :host {
                display: inline-block;
            }

            :host(:is(:not([type]), [type="bar"])) {
                border: 1px solid gainsboro;
                border-radius: 4px;
            }
        
            [part="bar"] {
                position: relative;
                overflow: hidden;
                height: 6px;
                width: 100%;
                width: 86px;
                border-radius: 4px;
                background-color: whitesmoke;
            }
        
            [part="slider"] {
                display: flex;
                position: absolute;
                width: 100%;
                height: 100%;
                animation-name: slider;
            }
        
            [part="slider"],
            [part="cursor"] {
                border-radius: 4px;
                will-change: transform;
                animation-duration: 1s;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
            }
        
            [part="cursor"] {
                display: block;
                width: 32px;
                background-color: var(--theme-activated-item-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_SELECTED_ITEM_COLOR});
                animation-name: cursor;
            }
        
            :host([type="spinner"]) {
                display: inline-block;
                width: 20px;
                height: 20px;
            }
        
            [part="spinner"] {
                display: inline-block;
                width: 18px;
                height: 18px;
            }
        
            [part="spinner"]::after {
                content: "";
                display: block;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                border-width: 4px;
                border-style: solid;
                border-color: transparent var(--theme-activated-item-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_SELECTED_ITEM_COLOR});
                animation: spin 1.2s linear infinite;
            }
        
            @keyframes slider {
                0% {
                    transform: translateX(0%);
                }
                100% {
                    transform: translateX(100%);
                }
            }
        
            @keyframes cursor {
                0% {
                    transform: translateX(-100%);
                }
                100% {
                    transform: translateX(100%);
                }
            }
        
            @keyframes spin {
                0% {
                    transform: rotate(0);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
        `;
    }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.replaceChildren(barShadowTemplate.content.cloneNode(true));
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "type": {
                this.#updateTemplate();
                break;
            }
        }
    }
    #updateTemplate() {
        const { type, shadowRoot } = this;
        switch (type) {
            case "spinner": {
                shadowRoot.replaceChildren(spinnerShadowTemplate.content.cloneNode(true));
                break;
            }
            case "bar": {
                shadowRoot.replaceChildren(barShadowTemplate.content.cloneNode(true));
                break;
            }
        }
    }
};
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.AttributeProperty)({ type: String, defaultValue: "bar", observed: true })
], HTMLELoaderElementBase.prototype, "type", void 0);
HTMLELoaderElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_1__.CustomElement)({
        name: "e-loader"
    })
], HTMLELoaderElementBase);
var HTMLELoaderElement = HTMLELoaderElementBase;
//# sourceMappingURL=Loader.js.map

/***/ }),

/***/ "../editor/lib/elements/misc/Separator.js":
/*!************************************************!*\
  !*** ../editor/lib/elements/misc/Separator.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLESeparatorElement": () => (/* binding */ HTMLESeparatorElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "../editor/lib/elements/Element.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var style;
let HTMLESeparatorElementBase = class HTMLESeparatorElementBase extends HTMLElement {
    #internals;
    static {
        style = /*css*/ `
            :host {
                display: block;
                margin: 10px 0 10px 27px;
                border: none;
                border-top: 1px solid lightgrey;
            }
        `;
    }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        this.#internals = this.attachInternals();
        this.#internals.role = "separator";
    }
};
HTMLESeparatorElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.CustomElement)({
        name: "e-separator"
    })
], HTMLESeparatorElementBase);
var HTMLESeparatorElement = HTMLESeparatorElementBase;
//# sourceMappingURL=Separator.js.map

/***/ }),

/***/ "../editor/lib/elements/misc/ToolTip.js":
/*!**********************************************!*\
  !*** ../editor/lib/elements/misc/ToolTip.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEToolTipElement": () => (/* binding */ HTMLEToolTipElement)
/* harmony export */ });
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element */ "../editor/lib/elements/Element.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var shadowTemplate;
var style;
var HIDE_DELAY_MS = 100;
var SHOW_DELAY_MS = 200;
var ANIMATION_DURATION = 100;
let HTMLEToolTipElementBase = class HTMLEToolTipElementBase extends HTMLElement {
    get target() {
        return this.#target;
    }
    #target;
    #targetListenerObject;
    #documentListenerObject;
    #toggleAnimation;
    static {
        shadowTemplate = (0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("template");
        shadowTemplate.content.append((0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("div", {
            attributes: {
                part: "container"
            },
            children: [
                (0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("span", {
                    attributes: {
                        part: "arrow"
                    }
                }),
                (0,_Element__WEBPACK_IMPORTED_MODULE_0__.element)("slot")
            ]
        }));
        style = /*css*/ `
            :host {
                position: fixed;
                display: inline-block;
                z-index: 1;
                padding: 4px;
                border-radius: 3px;
                box-sizing: border-box;
                background-color: white;
                border: 1px solid black;
                pointer-events: none;
            }
            
            :host([hidden]) {
                display: none;
            }

            :host(:not([visible])) {
                opacity: 0;
            }
            
            [part="arrow"] {
                display: inline-block;
                position: fixed;
                z-index: 1;
                width: 4px;
                height: 4px;
                box-sizing: border-box;
                background-color: white;
                border: 1px solid black;
                border-width: 0 1px 1px 0;
            }
            
            :host(:is(:not([position]), [position="top"])) [part="arrow"] {
                transform: translate(-2px, -2px) rotate(45deg);
            }
            
            :host(:is([position="bottom"])) [part="arrow"] {
                transform: translate(-2px, -2px) rotate(225deg);
            }
            
            :host(:is([position="left"])) [part="arrow"] {
                transform: translate(-2px, -2px) rotate(315deg);
            }
            
            :host(:is([position="right"])) [part="arrow"] {
                transform: translate(-2px, -2px) rotate(135deg);
            }        
        `;
    }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet];
        shadowRoot.append(shadowTemplate.content.cloneNode(true));
        this.#target = null;
        this.#toggleAnimation = null;
        this.#targetListenerObject = (function (tooltip) {
            return {
                handleEvent(event) {
                    const { type } = event;
                    switch (type) {
                        case "mouseenter": {
                            tooltip.#handleTargetMouseEnterEvent();
                            break;
                        }
                        case "mouseleave": {
                            tooltip.#handleTargetMouseLeaveEvent();
                            break;
                        }
                    }
                }
            };
        })(this);
        this.#documentListenerObject = (function (tooltip) {
            return {
                handleEvent(event) {
                    const { type } = event;
                    switch (type) {
                        case "keydown": {
                            tooltip.#handleDocumentKeyDownEvent(event);
                            break;
                        }
                    }
                }
            };
        })(this);
    }
    connectedCallback() {
        this.#setTarget();
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "for": {
                this.#setTarget();
                break;
            }
        }
    }
    #setTarget() {
        const { htmlFor } = this;
        if (htmlFor) {
            const rootNode = this.getRootNode();
            if (rootNode instanceof Document || rootNode instanceof ShadowRoot) {
                const target = rootNode.getElementById(htmlFor);
                if (target !== null) {
                    const oldTarget = this.#target;
                    const targetListenerObject = this.#targetListenerObject;
                    if (oldTarget) {
                        oldTarget.removeEventListener("mouseenter", targetListenerObject);
                        oldTarget.removeEventListener("mouseleave", targetListenerObject);
                    }
                    target.addEventListener("mouseenter", targetListenerObject);
                    target.addEventListener("mouseleave", targetListenerObject);
                }
                this.#target = target;
            }
            this.#position();
        }
    }
    show(options) {
        const { immediate = false } = options ?? {};
        let toggleAnimation = this.#toggleAnimation;
        if (toggleAnimation !== null) {
            const { id } = toggleAnimation;
            if (id === "hide") {
                toggleAnimation.cancel();
            }
            else if (!immediate) {
                return;
            }
        }
        if (!this.visible) {
            this.hidden = false;
            toggleAnimation = this.animate([
                { opacity: 0 },
                { opacity: 1 }
            ], {
                id: "show",
                delay: immediate ? 0 : SHOW_DELAY_MS,
                duration: immediate ? 0 : ANIMATION_DURATION
            });
            const { finished } = toggleAnimation;
            finished.then(() => {
                this.visible = true;
            }).catch(_ => void 0);
            this.#toggleAnimation = toggleAnimation;
            this.#position();
        }
        else {
            this.#toggleAnimation = null;
        }
    }
    hide(options) {
        const { immediate = false } = options ?? {};
        let toggleAnimation = this.#toggleAnimation;
        if (toggleAnimation !== null) {
            const { id } = toggleAnimation;
            if (id === "show") {
                toggleAnimation.cancel();
            }
            else if (!immediate) {
                return;
            }
        }
        if (this.visible) {
            toggleAnimation = this.animate([
                { opacity: 1 },
                { opacity: 0 }
            ], {
                id: "hide",
                delay: immediate ? 0 : HIDE_DELAY_MS,
                duration: immediate ? 0 : ANIMATION_DURATION
            });
            const { finished } = toggleAnimation;
            finished.then(() => {
                this.visible = false;
                this.hidden = true;
            }).catch(_ => void 0);
            this.#toggleAnimation = toggleAnimation;
        }
        else {
            this.#toggleAnimation = null;
        }
    }
    #arrow() {
        return this.shadowRoot.querySelector("[part=arrow]");
    }
    #position() {
        const target = this.#target;
        if (target !== null) {
            const { top: targetTop, bottom: targetBottom, left: targetLeft, right: targetRight } = target.getBoundingClientRect();
            const { width: tooltipWidth, height: tooltipHeight } = this.getBoundingClientRect();
            const tooltipHalfWidth = tooltipWidth / 2;
            const tooltipHalfHeight = tooltipHeight / 2;
            const targetCenter = (targetRight + targetLeft) / 2;
            const targetMiddle = (targetBottom + targetTop) / 2;
            const { position, style: tooltipStyle } = this;
            const arrow = this.#arrow();
            const { style: arrowStyle } = arrow;
            const { width: arrowWidth, height: arrowHeight } = arrow.getBoundingClientRect();
            const arrowHalfWidth = arrowWidth / 2;
            const arrowHalfHeight = arrowHeight / 2;
            const { clientWidth } = document.body;
            switch (position) {
                case "top": {
                    tooltipStyle.setProperty("top", `${targetTop - tooltipHeight - arrowHalfHeight}px`);
                    tooltipStyle.setProperty("left", `${Math.max(0, Math.min(targetCenter - tooltipHalfWidth, clientWidth - tooltipWidth))}px`);
                    arrowStyle.setProperty("top", `${targetTop - arrowHalfHeight}px`);
                    arrowStyle.setProperty("left", `${targetCenter}px`);
                    break;
                }
                case "bottom": {
                    tooltipStyle.setProperty("top", `${targetBottom + arrowHalfHeight}px`);
                    tooltipStyle.setProperty("left", `${Math.max(0, Math.min(targetCenter - tooltipHalfWidth, clientWidth - tooltipWidth))}px`);
                    arrowStyle.setProperty("top", `${targetBottom + arrowHalfHeight}px`);
                    arrowStyle.setProperty("left", `${targetCenter}px`);
                    break;
                }
                case "left": {
                    tooltipStyle.setProperty("top", `${targetMiddle - tooltipHalfHeight}px`);
                    tooltipStyle.setProperty("left", `${targetLeft - tooltipWidth - arrowHalfWidth}px`);
                    arrowStyle.setProperty("top", `${targetMiddle}px`);
                    arrowStyle.setProperty("left", `${targetLeft - arrowHalfWidth}px`);
                    break;
                }
                case "right": {
                    tooltipStyle.setProperty("top", `${targetMiddle - tooltipHalfHeight}px`);
                    tooltipStyle.setProperty("left", `${targetRight + arrowHalfWidth}px`);
                    arrowStyle.setProperty("top", `${targetMiddle}px`);
                    arrowStyle.setProperty("left", `${targetRight + arrowHalfWidth}px`);
                    break;
                }
            }
        }
    }
    #handleTargetMouseEnterEvent() {
        this.show();
        const toggleAnimation = this.#toggleAnimation;
        if (toggleAnimation) {
            const documentListenerObject = this.#documentListenerObject;
            const { finished } = toggleAnimation;
            finished.then(() => {
                document.addEventListener("keydown", documentListenerObject);
            }).catch(_ => void 0);
        }
    }
    #handleTargetMouseLeaveEvent() {
        this.hide();
        const toggleAnimation = this.#toggleAnimation;
        if (toggleAnimation) {
            const documentListenerObject = this.#documentListenerObject;
            const { finished } = toggleAnimation;
            finished.then(() => {
                document.removeEventListener("keydown", documentListenerObject);
            }).catch(_ => void 0);
        }
    }
    #handleDocumentKeyDownEvent(event) {
        const { key } = event;
        switch (key) {
            case "Escape": {
                this.hide({
                    immediate: true
                });
                break;
            }
        }
    }
};
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.AttributeProperty)({ type: String, observed: true, name: "for" })
], HTMLEToolTipElementBase.prototype, "htmlFor", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.AttributeProperty)({ type: String, defaultValue: "top" })
], HTMLEToolTipElementBase.prototype, "position", void 0);
__decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.AttributeProperty)({ type: Boolean })
], HTMLEToolTipElementBase.prototype, "visible", void 0);
HTMLEToolTipElementBase = __decorate([
    (0,_Element__WEBPACK_IMPORTED_MODULE_0__.CustomElement)({
        name: "e-tooltip"
    })
], HTMLEToolTipElementBase);
var HTMLEToolTipElement = HTMLEToolTipElementBase;
//# sourceMappingURL=ToolTip.js.map

/***/ }),

/***/ "../editor/lib/elements/misc/index.js":
/*!********************************************!*\
  !*** ../editor/lib/elements/misc/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLEHandleElement": () => (/* reexport safe */ _Handle__WEBPACK_IMPORTED_MODULE_0__.HTMLEHandleElement),
/* harmony export */   "HTMLEImportElement": () => (/* reexport safe */ _Import__WEBPACK_IMPORTED_MODULE_1__.HTMLEImportElement),
/* harmony export */   "HTMLELoaderElement": () => (/* reexport safe */ _Loader__WEBPACK_IMPORTED_MODULE_2__.HTMLELoaderElement),
/* harmony export */   "HTMLESeparatorElement": () => (/* reexport safe */ _Separator__WEBPACK_IMPORTED_MODULE_3__.HTMLESeparatorElement),
/* harmony export */   "HTMLEToolTipElement": () => (/* reexport safe */ _ToolTip__WEBPACK_IMPORTED_MODULE_4__.HTMLEToolTipElement)
/* harmony export */ });
/* harmony import */ var _Handle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Handle */ "../editor/lib/elements/misc/Handle.js");
/* harmony import */ var _Import__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Import */ "../editor/lib/elements/misc/Import.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader */ "../editor/lib/elements/misc/Loader.js");
/* harmony import */ var _Separator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Separator */ "../editor/lib/elements/misc/Separator.js");
/* harmony import */ var _ToolTip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ToolTip */ "../editor/lib/elements/misc/ToolTip.js");










//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../editor/lib/models/Model.js":
/*!*************************************!*\
  !*** ../editor/lib/models/Model.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelChangeObserver": () => (/* binding */ ModelChangeObserver),
/* harmony export */   "ModelChangeRecord": () => (/* binding */ ModelChangeRecord),
/* harmony export */   "ModelEvent": () => (/* binding */ ModelEvent),
/* harmony export */   "ModelList": () => (/* binding */ ModelList),
/* harmony export */   "ModelNode": () => (/* binding */ ModelNode),
/* harmony export */   "ModelObject": () => (/* binding */ ModelObject),
/* harmony export */   "ReactiveProperty": () => (/* binding */ ReactiveProperty)
/* harmony export */ });







class ModelChangeRecordBase {
    target;
    changeType;
    propertyName;
    oldValue;
    newValue;
    removedIndex;
    removedItems;
    insertedIndex;
    insertedItems;
    sortedIndices;
    constructor(init) {
        this.target = init.target;
        this.changeType = init.changeType;
        this.propertyName = init.propertyName ?? null;
        this.oldValue = init.oldValue ?? undefined;
        this.newValue = init.newValue ?? undefined;
        this.removedIndex = init.removedIndex ?? 0;
        this.removedItems = new ModelNodesList(init.removedItems ?? []);
        this.insertedIndex = init.insertedIndex ?? 0;
        this.insertedItems = new ModelNodesList(init.insertedItems ?? []);
        this.sortedIndices = init.sortedIndices ?? [];
    }
    static get PROPERTY_CHANGE() {
        return 1;
    }
    static get LIST_REMOVE() {
        return 2;
    }
    static get LIST_INSERT() {
        return 3;
    }
    static get LIST_SORT() {
        return 4;
    }
    get PROPERTY_CHANGE() {
        return ModelChangeRecordBase.PROPERTY_CHANGE;
    }
    get LIST_REMOVE() {
        return ModelChangeRecordBase.LIST_REMOVE;
    }
    get LIST_INSERT() {
        return ModelChangeRecordBase.LIST_INSERT;
    }
    get LIST_SORT() {
        return ModelChangeRecordBase.LIST_SORT;
    }
}
var ModelChangeRecord = ModelChangeRecordBase;
class ModelNodesListBase {
    #items;
    constructor(items) {
        this.#items = items.slice();
    }
    get length() {
        return this.#items.length;
    }
    item(index) {
        return this.#items[index] ?? null;
    }
    values() {
        return this.#items.values();
    }
}
var ModelNodesList = ModelNodesListBase;
class ModelEventBase {
    type;
    #currentTarget;
    #target;
    constructor(type) {
        this.type = type;
        this.#currentTarget = null;
        this.#target = null;
    }
    get currentTarget() {
        return this.#currentTarget;
    }
    get target() {
        return this.#target;
    }
    static ModelEventTargetAccessor = new class ModelEventTargetAccessor {
        setCurrentTarget(event, currentTarget) {
            if (event instanceof ModelEventBase) {
                event.#currentTarget = currentTarget;
            }
        }
        setTarget(event, target) {
            if (event instanceof ModelEventBase) {
                event.#target = target;
            }
        }
    };
}
var ModelEventTargetAccessor = ModelEventBase.ModelEventTargetAccessor;
delete ModelEventBase.ModelEventTargetAccessor;
var ModelEvent = ModelEventBase;
class ModelEventTargetBase {
    #callbacks;
    constructor() {
        this.#callbacks = new Map();
    }
    receiveEvent(event) {
        const { type } = event;
        const callbacks = this.#callbacks.get(type);
        ModelEventTargetAccessor.setCurrentTarget(event, this);
        if (callbacks) {
            callbacks.forEach((callback_i) => {
                callback_i(event);
            });
        }
    }
    addEventListener(type, callback) {
        const callbacks = this.#callbacks.get(type);
        if (callbacks) {
            callbacks.push(callback);
        }
        else {
            this.#callbacks.set(type, [callback]);
        }
    }
    removeEventListener(type, callback) {
        const callbacks = this.#callbacks.get(type);
        if (callbacks) {
            const callbackIndex = callbacks.findIndex(callback_i => callback_i == callback);
            if (callbackIndex > -1) {
                callbacks.splice(callbackIndex, 1);
            }
            if (callbacks.length == 0) {
                this.#callbacks.delete(type);
            }
        }
    }
    dispatchEvent(event) {
        ModelEventTargetAccessor.setTarget(event, this);
        this.receiveEvent(event);
    }
}
var ModelEventTarget = ModelEventTargetBase;
class ModelNodeBase extends ModelEventTargetBase {
    #parentNode;
    #records;
    #isRecording;
    constructor() {
        super();
        this.#parentNode = null;
        this.#records = [];
        this.#isRecording = false;
    }
    get parentNode() {
        return this.#parentNode;
    }
    setParent(parentNode) {
        if (parentNode !== null) {
            let isCyclicReference = parentNode == this;
            let { parentNode: ancestorNode } = parentNode;
            while (!isCyclicReference && ancestorNode !== null) {
                ({ parentNode: ancestorNode } = ancestorNode);
                isCyclicReference = ancestorNode == this;
            }
            if (!isCyclicReference) {
                this.#parentNode = parentNode;
            }
            else {
                throw new TypeError("Failed to set parent on ModelNode: circular reference detected in the hierarchy.");
            }
        }
        else {
            this.#parentNode = null;
        }
    }
    beginChanges() {
        this.#isRecording = true;
    }
    endChanges() {
        this.dispatchEvent(new ModelEvent("modelchange"));
        this.#records.splice(0);
        this.#isRecording = false;
    }
    getRecords() {
        return this.#records.slice();
    }
    receiveEvent(event) {
        super.receiveEvent(event);
        const { parentNode } = this;
        if (parentNode) {
            parentNode.receiveEvent(event);
        }
    }
    #triggerChange(property, oldValue, newValue) {
        const records = this.#records;
        const record = new ModelChangeRecord({
            target: this,
            changeType: ModelChangeRecord.PROPERTY_CHANGE,
            propertyName: property,
            oldValue, newValue
        });
        records.push(record);
        if (!this.#isRecording) {
            this.dispatchEvent(new ModelEvent("modelchange"));
            records.splice(0);
        }
    }
    #handleRecord(record) {
        this.#records.push(record);
        if (!this.#isRecording) {
            this.dispatchEvent(new ModelEvent("modelchange"));
            this.#records.splice(0);
        }
    }
    static ModelNodeRecordsAccessor = new class ModelNodeRecordsAccessor {
        triggerChange(node, property, oldValue, newValue) {
            if (node instanceof ModelNodeBase) {
                node.#triggerChange(property, oldValue, newValue);
            }
        }
        handleRecord(node, record) {
            if (node instanceof ModelNodeBase) {
                node.#handleRecord(record);
            }
        }
    };
}
var ModelNodeRecordsAccessor = ModelNodeBase.ModelNodeRecordsAccessor;
delete ModelNodeBase.ModelNodeRecordsAccessor;
var ModelNode = ModelNodeBase;
const ReactiveProperty = function () {
    return (target, property) => {
        const { constructor } = target;
        const { prototype } = constructor;
        const setter = function (value) {
            const oldValue = ModelReactivePropertiesAccessor.getProperty(this, property);
            ModelReactivePropertiesAccessor.setProperty(this, property, value);
            if (value !== oldValue) {
                ModelNodeRecordsAccessor.triggerChange(this, property, oldValue, value);
            }
            return true;
        };
        const getter = function () {
            return ModelReactivePropertiesAccessor.getProperty(this, property);
        };
        Object.defineProperty(prototype, property, {
            set: setter,
            get: getter,
            enumerable: true
        });
    };
};
class ModelObjectBase extends ModelNodeBase {
    #properties;
    constructor() {
        super();
        this.#properties = new Map();
    }
    static ModelReactivePropertiesAccessor = new class ModelReactivePropertiesAccessor {
        setProperty(node, property, value) {
            if (node instanceof ModelObjectBase) {
                node.#properties.set(property, value);
            }
        }
        getProperty(node, property) {
            if (node instanceof ModelObjectBase) {
                return node.#properties.get(property);
            }
        }
    };
}
var ModelReactivePropertiesAccessor = ModelObjectBase.ModelReactivePropertiesAccessor;
delete ModelObjectBase.ModelReactivePropertiesAccessor;
var ModelObject = ModelObjectBase;
class ModelListBase extends ModelNodeBase {
    #items;
    constructor(items) {
        super();
        this.#items = items?.slice() ?? [];
    }
    setParent(parentNode) {
        super.setParent(parentNode);
        this.#items.forEach((item_i) => {
            item_i.setParent(parentNode);
        });
    }
    get length() {
        return this.#items.length;
    }
    get(index) {
        return this.#items[index] ?? null;
    }
    index(item) {
        return this.#items.indexOf(item);
    }
    values() {
        return this.#items.values();
    }
    sort(compareFunction) {
        const items = this.#items;
        const indexedItems = items.map((item_i, i) => {
            return {
                item: item_i,
                index: i
            };
        });
        indexedItems.sort((indexedItem_a, indexedItem_b) => {
            return compareFunction(indexedItem_a.item, indexedItem_b.item);
        });
        this.#items = indexedItems.map(indexedItem_i => indexedItem_i.item);
        const record = new ModelChangeRecord({
            target: this,
            changeType: ModelChangeRecord.LIST_SORT,
            sortedIndices: indexedItems.map(indexedItem_i => indexedItem_i.index)
        });
        ModelNodeRecordsAccessor.handleRecord(this, record);
    }
    prepend(...items) {
        const _items = this.#items;
        const { parentNode } = this;
        if (parentNode) {
            items.forEach(item_i => {
                item_i.setParent(parentNode);
            });
        }
        _items.splice(0, 0, ...items);
        const record = new ModelChangeRecord({
            target: this,
            changeType: ModelChangeRecord.LIST_INSERT,
            insertedIndex: 0,
            insertedItems: items
        });
        ModelNodeRecordsAccessor.handleRecord(this, record);
    }
    append(...items) {
        const _items = this.#items;
        const { length } = _items;
        const { parentNode } = this;
        if (parentNode) {
            items.forEach(item_i => {
                item_i.setParent(parentNode);
            });
        }
        _items.push(...items);
        const record = new ModelChangeRecord({
            target: this,
            changeType: ModelChangeRecord.LIST_INSERT,
            insertedIndex: length,
            insertedItems: items
        });
        ModelNodeRecordsAccessor.handleRecord(this, record);
    }
    insert(index, ...items) {
        const _items = this.#items;
        const { length } = _items;
        const positiveIndex = Math.abs(index);
        if (positiveIndex <= length) {
            if (index >= 0) {
                const { parentNode } = this;
                items.forEach(item_i => {
                    item_i.setParent(parentNode);
                });
                if (index < length) {
                    _items.splice(index, 0, ...items);
                }
                else {
                    _items.push(...items);
                }
            }
            else if (index < 0) {
                index = length - index;
                const { parentNode } = this;
                if (parentNode) {
                    items.forEach(item_i => {
                        item_i.setParent(parentNode);
                    });
                }
                _items.splice(index, 0, ...items);
            }
            const record = new ModelChangeRecord({
                target: this,
                changeType: ModelChangeRecord.LIST_INSERT,
                insertedIndex: index,
                insertedItems: items.slice()
            });
            ModelNodeRecordsAccessor.handleRecord(this, record);
        }
    }
    remove(item) {
        const _items = this.#items;
        const index = _items.indexOf(item);
        if (index > -1) {
            const item = _items.splice(index, 1)[0];
            const { parentNode } = this;
            if (parentNode) {
                item.setParent(null);
            }
            const record = new ModelChangeRecord({
                target: this,
                changeType: ModelChangeRecord.LIST_REMOVE,
                removedIndex: index,
                removedItems: [item]
            });
            ModelNodeRecordsAccessor.handleRecord(this, record);
        }
    }
    clear() {
        const items = this.#items;
        const { length } = items;
        if (length > 0) {
            const removedItems = items.splice(0);
            const { parentNode } = this;
            if (parentNode) {
                removedItems.forEach((removedItem_i) => {
                    removedItem_i.setParent(null);
                });
            }
            const record = new ModelChangeRecord({
                target: this,
                changeType: ModelChangeRecord.LIST_REMOVE,
                removedIndex: 0,
                removedItems: removedItems
            });
            ModelNodeRecordsAccessor.handleRecord(this, record);
        }
    }
}
;
var ModelList = ModelListBase;
class ModelChangeObserverBase {
    #callback;
    #records;
    #disconnected;
    #references;
    constructor(callback) {
        this.#callback = callback;
        this.#records = [];
        this.#disconnected = false;
        this.#references = new WeakMap();
    }
    observe(node, options) {
        this.#disconnected = false;
        const references = this.#references;
        let reference = references.get(node);
        if (!reference) {
            const listener = this.#handleModelEvent.bind(this);
            node.addEventListener("modelchange", listener);
            reference = { listener, options };
            references.set(node, reference);
        }
        else {
            references.set(node, reference);
        }
    }
    unobserve(node) {
        const references = this.#references;
        let reference = references.get(node);
        if (reference) {
            const { listener } = reference;
            node.removeEventListener("modelchange", listener);
        }
    }
    disconnect() {
        this.#records.splice(0);
        this.#disconnected = true;
    }
    #trigger() {
        const records = this.#records.splice(0);
        if (records.length > 0) {
            this.#callback(records);
        }
    }
    #handleModelEvent(event) {
        if (!this.#disconnected) {
            const { target, currentTarget } = event;
            const reference = this.#references.get(currentTarget);
            if (reference) {
                const { options } = reference;
                const { properties, propertiesFilter, childList, subtree } = options;
                if (subtree) {
                    if (properties && target instanceof ModelNode) {
                        if (propertiesFilter) {
                            this.#records.push(...target.getRecords()
                                .filter(record_i => {
                                const { propertyName } = record_i;
                                return propertiesFilter.includes(propertyName);
                            }));
                        }
                        else {
                            this.#records.push(...target.getRecords());
                        }
                        this.#trigger();
                    }
                    else if (childList && target instanceof ModelList) {
                        this.#records.push(...target.getRecords());
                        this.#trigger();
                    }
                }
                else if (target == currentTarget) {
                    if (properties && target instanceof ModelNode) {
                        if (propertiesFilter) {
                            this.#records.push(...target.getRecords()
                                .filter(record_i => {
                                const { propertyName } = record_i;
                                return propertiesFilter.includes(propertyName);
                            }));
                        }
                        else {
                            this.#records.push(...target.getRecords());
                        }
                        this.#trigger();
                    }
                    else if (childList && target instanceof ModelList) {
                        this.#records.push(...target.getRecords());
                        this.#trigger();
                    }
                }
            }
        }
    }
}
var ModelChangeObserver = ModelChangeObserverBase;
//# sourceMappingURL=Model.js.map

/***/ }),

/***/ "../editor/lib/stylesheets/Reset.js":
/*!******************************************!*\
  !*** ../editor/lib/stylesheets/Reset.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resetStylesheet": () => (/* binding */ resetStylesheet)
/* harmony export */ });
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Theme */ "../editor/lib/stylesheets/Theme.js");


const resetStylesheet = new CSSStyleSheet();
resetStylesheet.replace(/*css*/ `
    
    html.fullscreen,
    html.fullscreen > body {
        height: 100%;
    }

    dialog {
        overflow: visible;
    }

    body {
        font-size: 13px;
        margin: 0;
    }

    ::backdrop {
        background-color: rgba(120, 120, 120, 0.2);
    }

    ::selection {
        background-color: ${_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_SELECTED_ITEM_COLOR};
    }
    
    input,
    output,
    button,
    select,
    textarea {
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        box-sizing: content-box;
    }

    dialog {
        box-sizing: border-box;
    }

    input {
        border: 1px solid grey;
    }

    legend {
        padding: 0 6px;
    }

    select,
    progress {
        height: 22px;
    }

    input {
        height: 18px;
    }

    input:is([type="radio"], [type="checkbox"]) {
        width: 18px; 
    }

    input[type="color" i] {
        border: none;
        padding: 0;
    }

    ::-webkit-color-swatch {
        border: none;
    }

    ::-webkit-color-swatch-wrapper {
        padding: 0;
    }

    ::-webkit-search-cancel-button {
        appearance: none;
    }

    dialog,
    fieldset {
        padding: 8px;
        border: 1px solid lightgrey;
    }

    button[type="submit"] {
        border-width: 2px;
    }

    button:hover {
        background-color: var(--theme-hovered-item-color, ${_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_HOVERED_ITEM_COLOR});
    }

    button:not([aria-pressed]):focus,
    button[aria-pressed="true"] {
        background-color: var(--theme-focused-item-color, ${_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_FOCUSED_ITEM_COLOR});
    }

    button {
        height: 18px;
        appearance: none;
        background: none;
        border: 1px solid var(--theme-focused-item-outline-color, ${_Theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME_FOCUSED_ITEM_OUTLINE_COLOR});
    }

    table {
        border-spacing: 0;
    }

    ul {
        padding: 0;
        margin: 0;
    }
`);
//# sourceMappingURL=Reset.js.map

/***/ }),

/***/ "../editor/lib/stylesheets/Theme.js":
/*!******************************************!*\
  !*** ../editor/lib/stylesheets/Theme.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_THEME_ACTIVATED_ITEM_COLOR": () => (/* binding */ DEFAULT_THEME_ACTIVATED_ITEM_COLOR),
/* harmony export */   "DEFAULT_THEME_ARROW_DROPDOWN_IMAGE": () => (/* reexport default export from named module */ _assets_arrow_drop_down_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "DEFAULT_THEME_ARROW_DROPUP_IMAGE": () => (/* reexport default export from named module */ _assets_arrow_drop_up_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "DEFAULT_THEME_ARROW_RIGHT_IMAGE": () => (/* reexport default export from named module */ _assets_arrow_right_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "DEFAULT_THEME_CHECKED_IMAGE": () => (/* reexport default export from named module */ _assets_done_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   "DEFAULT_THEME_DROPTARGET_ITEM_COLOR": () => (/* binding */ DEFAULT_THEME_DROPTARGET_ITEM_COLOR),
/* harmony export */   "DEFAULT_THEME_FOCUSED_ITEM_COLOR": () => (/* binding */ DEFAULT_THEME_FOCUSED_ITEM_COLOR),
/* harmony export */   "DEFAULT_THEME_FOCUSED_ITEM_OUTLINE_COLOR": () => (/* binding */ DEFAULT_THEME_FOCUSED_ITEM_OUTLINE_COLOR),
/* harmony export */   "DEFAULT_THEME_HOVERED_ITEM_COLOR": () => (/* binding */ DEFAULT_THEME_HOVERED_ITEM_COLOR),
/* harmony export */   "DEFAULT_THEME_SELECTED_ITEM_COLOR": () => (/* binding */ DEFAULT_THEME_SELECTED_ITEM_COLOR),
/* harmony export */   "theme": () => (/* binding */ theme)
/* harmony export */ });
/* harmony import */ var _assets_arrow_right_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/arrow_right_FILL0_wght400_GRAD0_opsz48.svg */ "../editor/assets/arrow_right_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _assets_arrow_drop_down_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.svg */ "../editor/assets/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _assets_arrow_drop_up_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/arrow_drop_up_FILL0_wght400_GRAD0_opsz48.svg */ "../editor/assets/arrow_drop_up_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _assets_done_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/done_FILL0_wght400_GRAD0_opsz48.svg */ "../editor/assets/done_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _assets_fonts_Open_Sans_OpenSans_VariableFont_wdth_wght_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf */ "../editor/assets/fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf");
/* harmony import */ var _models_Model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/Model */ "../editor/lib/models/Model.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















const DEFAULT_THEME_TINT = 203;
const DEFAULT_THEME_ACCENT_COLOR = `hsl(var(--theme-tint, ${DEFAULT_THEME_TINT}), 92%, 50%, 50%)`;
const DEFAULT_THEME_HOVERED_ITEM_COLOR = `hsl(var(--theme-tint, ${DEFAULT_THEME_TINT}), 92%, 80%, 50%)`;
const DEFAULT_THEME_FOCUSED_ITEM_COLOR = `hsl(var(--theme-tint, ${DEFAULT_THEME_TINT}), 92%, 50%, 50%)`;
const DEFAULT_THEME_FOCUSED_ITEM_OUTLINE_COLOR = `hsl(var(--theme-tint, ${DEFAULT_THEME_TINT}), 92%, 50%)`;
const DEFAULT_THEME_SELECTED_ITEM_COLOR = `hsl(var(--theme-tint, ${DEFAULT_THEME_TINT}), 92%, 75%, 75%)`;
const DEFAULT_THEME_ACTIVATED_ITEM_COLOR = `hsl(var(--theme-tint, ${DEFAULT_THEME_TINT}), 92%, 50%, 50%)`;
const DEFAULT_THEME_DROPTARGET_ITEM_COLOR = `hsl(var(--theme-tint, ${DEFAULT_THEME_TINT}), 92%, 50%, 50%)`;
class Theme extends _models_Model__WEBPACK_IMPORTED_MODULE_5__.ModelObject {
    stylesheet;
    images() {
        return new Map([
            ["checkedImage", this.checkedImage],
            ["arrowRightImage", this.arrowRightImage],
            ["arrowDropDownImage", this.arrowDropDownImage],
            ["arrowDropUpImage", this.arrowDropUpImage],
        ]);
    }
    constructor() {
        super();
        this.stylesheet = new CSSStyleSheet();
        this.stylesheet.replace(/*css*/ `
            :root {
                --theme-accent-color: ${DEFAULT_THEME_ACCENT_COLOR};
                --theme-hovered-item-color: ${DEFAULT_THEME_HOVERED_ITEM_COLOR};
                --theme-focused-item-color: ${DEFAULT_THEME_FOCUSED_ITEM_COLOR};
                --theme-focused-item-outline-color: ${DEFAULT_THEME_FOCUSED_ITEM_OUTLINE_COLOR};
                --theme-selected-item-color: ${DEFAULT_THEME_SELECTED_ITEM_COLOR};
                --theme-activated-item-color: ${DEFAULT_THEME_ACTIVATED_ITEM_COLOR};
                --theme-droptarget-item-color: ${DEFAULT_THEME_DROPTARGET_ITEM_COLOR};

                --theme-tint: ${DEFAULT_THEME_TINT};
                --theme-arrow-right-image: url(${_assets_arrow_right_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_0__});
                --theme-arrow-dropdown-image: url(${_assets_arrow_drop_down_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__});
                --theme-arrow-dropup-image: url(${_assets_arrow_drop_up_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_2__});
                --theme-checked-image: url(${_assets_arrow_drop_down_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__});

                --theme-arrow-color: var(--font-color);
                --theme-arrow-icon-collapsed: var(--arrow-right);
                --theme-arrow-icon-expanded: var(--arrow-dropdown);

                --theme-sortorder-indicator-color: var(--font-color);
                --theme-sortorder-indicator-ascending: var(--arrow-dropup);
                --theme-sortorder-indicator-descending: var(--arrow-dropdown);
            }
            
            @font-face {
                font-family: "Open Sans";
                src: url(${_assets_fonts_Open_Sans_OpenSans_VariableFont_wdth_wght_ttf__WEBPACK_IMPORTED_MODULE_4__}) format("truetype")
            }

            :root {
                font-size: 10px;
                font-family: "Open Sans";
                accent-color: var(--theme-accent-color);
            }

            ::selection {
                background-color: var(--theme-selected-item-color);
            }
        `);
        this.addEventListener("modelchange", this.#handleModelChangeEvent.bind(this));
        this.tint = DEFAULT_THEME_TINT;
        this.arrowRightImage = _assets_arrow_right_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_0__;
        this.arrowDropDownImage = _assets_arrow_drop_down_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__;
        this.arrowDropUpImage = _assets_arrow_drop_up_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_2__;
        this.checkedImage = _assets_arrow_drop_down_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__;
    }
    #handleModelChangeEvent() {
        const { stylesheet } = this;
        const variablesMap = stylesheet.cssRules[0].styleMap;
        const records = this.getRecords();
        records.forEach((record) => {
            const { propertyName, newValue } = record;
            switch (propertyName) {
                case "tint": {
                    variablesMap.set("--theme-tint", String(newValue));
                    break;
                }
                case "checkedImage": {
                    variablesMap.set("--theme-checked-image", `url(${String(newValue)})`);
                    break;
                }
                case "arrowRightImage": {
                    variablesMap.set("--theme-arrow-right-image", `url(${String(newValue)})`);
                    break;
                }
                case "arrowDropDown": {
                    variablesMap.set("--theme-arrow-dropdown-image", `url(${String(newValue)})`);
                    break;
                }
                case "arrowDropUp": {
                    variablesMap.set("--theme-arrow-dropup-image", `url(${String(newValue)})`);
                    break;
                }
            }
        });
    }
}
__decorate([
    (0,_models_Model__WEBPACK_IMPORTED_MODULE_5__.ReactiveProperty)()
], Theme.prototype, "tint", void 0);
__decorate([
    (0,_models_Model__WEBPACK_IMPORTED_MODULE_5__.ReactiveProperty)()
], Theme.prototype, "checkedImage", void 0);
__decorate([
    (0,_models_Model__WEBPACK_IMPORTED_MODULE_5__.ReactiveProperty)()
], Theme.prototype, "arrowRightImage", void 0);
__decorate([
    (0,_models_Model__WEBPACK_IMPORTED_MODULE_5__.ReactiveProperty)()
], Theme.prototype, "arrowDropDownImage", void 0);
__decorate([
    (0,_models_Model__WEBPACK_IMPORTED_MODULE_5__.ReactiveProperty)()
], Theme.prototype, "arrowDropUpImage", void 0);
const theme = new Theme();
//# sourceMappingURL=Theme.js.map

/***/ }),

/***/ "../editor/lib/views/GridView.js":
/*!***************************************!*\
  !*** ../editor/lib/views/GridView.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridColumnModel": () => (/* binding */ GridColumnModel),
/* harmony export */   "GridModel": () => (/* binding */ GridModel),
/* harmony export */   "GridRowModel": () => (/* binding */ GridRowModel),
/* harmony export */   "GridView": () => (/* binding */ GridView)
/* harmony export */ });
/* harmony import */ var _elements_Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var _models_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Model */ "../editor/lib/models/Model.js");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View */ "../editor/lib/views/View.js");
/* harmony import */ var _stylesheets_Reset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stylesheets/Reset */ "../editor/lib/stylesheets/Reset.js");
/* harmony import */ var _elements_controls_sashes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/controls/sashes */ "../editor/lib/elements/controls/sashes/index.js");
/* harmony import */ var _elements_containers_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../elements/containers/grid */ "../editor/lib/elements/containers/grid/index.js");
/* harmony import */ var _elements_containers_menus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../elements/containers/menus */ "../editor/lib/elements/containers/menus/index.js");
/* harmony import */ var _stylesheets_Theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stylesheets/Theme */ "../editor/lib/stylesheets/Theme.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












class GridModel extends _models_Model__WEBPACK_IMPORTED_MODULE_1__.ModelObject {
    rows;
    columns;
    constructor(init) {
        super();
        const { rows: initRows = [], columns: initColumns = [] } = init ?? {};
        const rows = new _models_Model__WEBPACK_IMPORTED_MODULE_1__.ModelList(initRows);
        rows.setParent(this);
        this.rows = rows;
        const columns = new _models_Model__WEBPACK_IMPORTED_MODULE_1__.ModelList(initColumns);
        columns.setParent(this);
        this.columns = columns;
    }
    getColumnByName(name) {
        return Array.from(this.columns.values()).find(column_i => column_i.name == name) ?? null;
    }
    sortByColumn(column, sortOrder) {
        Array.from(this.columns.values()).forEach((column_i) => {
            column_i.sortorder = column_i === column ? sortOrder : undefined;
        });
        const sortTest = (() => {
            const { type } = column;
            switch (type) {
                case String: {
                    return (row_1, row_2) => {
                        const cell_1 = String(column.extract(row_1));
                        const cell_2 = String(column.extract(row_2));
                        return sortOrder * cell_1.localeCompare(cell_2);
                    };
                }
                default: {
                    return (row_1, row_2) => {
                        const cell_1 = Number(column.extract(row_1));
                        const cell_2 = Number(column.extract(row_2));
                        return Math.sign(sortOrder * (cell_1 - cell_2));
                    };
                }
            }
        })();
        this.rows.sort(sortTest);
    }
}
class GridColumnModel extends _models_Model__WEBPACK_IMPORTED_MODULE_1__.ModelObject {
    name;
    type;
    label;
    extract;
    filters;
    sortorder;
    constructor(init) {
        super();
        const { name, type, label, extract, filters = [] } = init;
        this.name = name;
        this.type = type;
        this.label = label;
        this.extract = extract;
        this.filters = filters;
    }
}
__decorate([
    (0,_models_Model__WEBPACK_IMPORTED_MODULE_1__.ReactiveProperty)()
], GridColumnModel.prototype, "sortorder", void 0);
class GridRowModel extends _models_Model__WEBPACK_IMPORTED_MODULE_1__.ModelObject {
    id;
    constructor(init) {
        super();
        const { id } = init;
        this.id = id;
    }
}
var style;
let GridViewBase = class GridViewBase extends _View__WEBPACK_IMPORTED_MODULE_2__.View {
    #columnDelegate;
    #cellDelegate;
    #displayFilters;
    static {
        style = /*css*/ `
            :host {
                display: block;
            }
            
            e-gridrow[hidden] {
                display: none;
            }
            
            e-gridcell[type="gridcell"] {
                max-width: 0;
                overflow: clip;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            
            e-gridcell[type="columnheader"] {
                width: 120px;
            }
            
            .gridcell-label,
            .gridheader-label {
                padding-left: 4px;
            }
            
            .gridcell-content {
                overflow: clip;
            }
            
            .gridheader-content {
                display: flex;
            }
            
            .gridheader-label {
                flex: 1 1 0;
                overflow: clip;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            
            e-treeitem::part(arrow) {
                display: inline-block;
                width: 18px;
                height: 18px;
                margin: 1px 4px 1px 1px;
            }
            
            .gridheader-sort-indicator {
                display: inline-block;
                width: 18px;
                height: 18px;
            }
            
            .gridheader-sort-indicator::before {
                display: inline-block;
                width: 18px;
                height: 18px;
                margin: 1px;
                content: "";

                mask-size: 18px 18px;
                -webkit-mask-size: 18px 18px;
                background-color: none;
            }
            
            e-gridcell[type="columnheader"]:not([data-sortorder]) .gridheader-sort-indicator::before {
                background-color: unset;
            }
            
            e-gridcell[type="columnheader"][data-sortorder="1"] .gridheader-sort-indicator::before {
                -webkit-mask-image: var(--theme-arrow-dropup-image, url(${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_THEME_ARROW_DROPUP_IMAGE}));
                mask-image: var(--theme-arrow-dropup-image, url(${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_THEME_ARROW_DROPUP_IMAGE}));
                background-color: black;
            }
            
            e-gridcell[type="columnheader"][data-sortorder="-1"] .gridheader-sort-indicator::before {
                -webkit-mask-image: var(--theme-arrow-dropdown-image, url(${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_THEME_ARROW_DROPDOWN_IMAGE}));
                mask-image: var(--theme-arrow-dropdown-image, url(${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_THEME_ARROW_DROPDOWN_IMAGE}));
                background-color: black;
            }
        `;
    }
    constructor(model) {
        super();
        this.#displayFilters = [];
        this.#cellDelegate =
            (row, column) => (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("label", {
                children: column.extract(row)
            });
        this.#columnDelegate =
            (column) => (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("label", {
                children: column.label
            });
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet, _stylesheets_Reset__WEBPACK_IMPORTED_MODULE_3__.resetStylesheet];
        this.setModel(model ?? new GridModel());
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "resizable":
            case "sortable": {
                this.render();
                break;
            }
        }
    }
    get gridElement() {
        return this.shadowRoot.querySelector("e-grid");
    }
    setColumnDelegate(delegate) {
        this.#columnDelegate = delegate;
    }
    setCellDelegate(delegate) {
        this.#cellDelegate = delegate;
    }
    getRowElement(row) {
        return this.shadowRoot.querySelector(`e-grid > e-gridbody > e-gridrow[data-index='${row.id}']`);
    }
    getColumnHeaderElement(column) {
        return this.shadowRoot.querySelector(`e-grid > e-gridhead > e-gridcell[id=${column.name}]`);
    }
    getColumnCellsElements(column) {
        return Array.from(this.shadowRoot.querySelectorAll(`e-grid > e-gridbody > e-gridrow > e-gridcell[headers~=${column.name}]`));
    }
    renderShadow() {
        const { model } = this;
        return (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.fragment)((0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-grid", {
            attributes: {
                tabindex: 0,
                selectby: "row",
                multisectable: true
            },
            children: [
                (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-gridhead", {
                    children: (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.reactiveChildElements)(model.columns, column => this.#renderGridColumnHeaderCell(column)),
                    listeners: {
                        contextmenu: this.#handleHeadContextMenuEvent.bind(this),
                        click: this.#handleHeadClickEvent.bind(this)
                    }
                }),
                (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-gridbody", {
                    children: (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.reactiveChildElements)(model.rows, row => this.#renderGridBodyRow(row))
                })
            ]
        }));
    }
    filter(row) {
        const displayFilters = this.#displayFilters;
        return (displayFilters.length > 0 ? displayFilters.some(filter_i => filter_i.filter(row)) : true);
    }
    addDisplayFilter(filter) {
        const { model, gridElement } = this;
        const { rows } = model;
        const displayFilters = this.#displayFilters;
        if (!displayFilters.includes(filter)) {
            displayFilters.push(filter);
            Array.from(rows.values()).forEach((row_i) => {
                const rowElement = this.getRowElement(row_i);
                if (rowElement) {
                    rowElement.hidden = !this.filter(row_i);
                }
            });
        }
        gridElement.clearSelection();
    }
    removeDisplayFilter(filter) {
        const { model, gridElement } = this;
        const { rows } = model;
        const displayFilters = this.#displayFilters;
        const filterIndex = displayFilters.indexOf(filter);
        if (filterIndex > -1) {
            displayFilters.splice(filterIndex, 1);
            Array.from(rows.values()).forEach((row_i) => {
                const rowElement = this.getRowElement(row_i);
                if (rowElement) {
                    rowElement.hidden = !this.filter(row_i);
                }
            });
        }
        gridElement.clearSelection();
    }
    removeAllDisplayFilters() {
        const { model, gridElement } = this;
        const { rows } = model;
        const displayFilters = this.#displayFilters;
        displayFilters.splice(0, displayFilters.length);
        Array.from(rows.values()).forEach((row_i) => {
            const rowElement = this.getRowElement(row_i);
            if (rowElement) {
                rowElement.hidden = !this.filter(row_i);
            }
        });
        gridElement.clearSelection();
    }
    #renderGridColumnHeaderCell(column) {
        const gridColumnElement = (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.reactiveElement)(column, (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-gridcell", {
            attributes: {
                type: "columnheader",
                id: column.name
            },
            children: [
                (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("span", {
                    attributes: {
                        class: "gridheader-content"
                    },
                    children: [
                        (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("span", {
                            attributes: {
                                class: "gridheader-label"
                            },
                            children: this.#columnDelegate(column)
                        }),
                        (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("span", {
                            attributes: {
                                class: "gridheader-sort-indicator"
                            }
                        }),
                        (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-wsash", {
                            attributes: {
                                controls: column.name
                            }
                        })
                    ]
                })
            ]
        }), ["sortorder"], (cell, property, oldValue, newValue) => {
            switch (property) {
                case "sortorder": {
                    const { dataset } = cell;
                    if (typeof newValue !== "undefined") {
                        dataset.sortorder = newValue.toString();
                    }
                    else {
                        delete dataset.sortorder;
                    }
                    break;
                }
            }
        });
        return gridColumnElement;
    }
    #renderGridBodyRow(row) {
        const { model } = this;
        const gridRowElement = (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-gridrow", {
            attributes: {
                tabindex: -1
            },
            dataset: {
                index: row.id
            },
            children: (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.reactiveChildElements)(model.columns, column => this.#renderGridDataCell(row, column))
        });
        return gridRowElement;
    }
    #renderGridDataCell(row, column) {
        const gridCellElement = (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-gridcell", {
            attributes: {
                type: "gridcell",
                headers: column.name
            },
            children: (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("span", {
                attributes: {
                    class: "gridcell-content"
                },
                children: [
                    (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("span", {
                        attributes: {
                            class: "gridcell-label"
                        },
                        children: this.#cellDelegate(row, column)
                    })
                ]
            })
        });
        return gridCellElement;
    }
    #handleHeadContextMenuEvent(event) {
        const { clientX, clientY, currentTarget, target } = event;
        const { gridElement } = this;
        const targetHead = currentTarget;
        const targetHeader = target.closest("e-gridcell");
        const { model } = this;
        if (targetHeader) {
            const column = model.getColumnByName(targetHeader.id);
            const { sortorder, filters } = column;
            const contextMenu = (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menu", {
                attributes: {
                    contextual: true
                },
                children: [
                    (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menuitem", {
                        attributes: {
                            label: "Resize Auto"
                        },
                        children: "Resize auto",
                        listeners: {
                            click: () => {
                                const columnHeaderElement = this.getColumnHeaderElement(column);
                                if (columnHeaderElement) {
                                    const { style } = columnHeaderElement;
                                    const labels = this.getColumnCellsElements(column).map(cell_i => cell_i.querySelector(".gridcell-label"));
                                    const maxWidth = labels.reduce((maxWidth, label) => Math.max(maxWidth, label.getBoundingClientRect().width), 0);
                                    style.setProperty("width", `${maxWidth}px`);
                                }
                                gridElement.focus();
                            }
                        }
                    }),
                    (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menuitem", {
                        attributes: {
                            label: "Resize To Default"
                        },
                        children: "Resize to Default",
                        listeners: {
                            click: () => {
                                const columnHeaderElement = this.getColumnHeaderElement(column);
                                if (columnHeaderElement) {
                                    const { style } = columnHeaderElement;
                                    style.removeProperty("width");
                                }
                                gridElement.focus();
                            }
                        }
                    }),
                    (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menuitem", {
                        attributes: {
                            type: "submenu",
                            label: "Sort",
                        },
                        children: [
                            "Sort",
                            (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menu", {
                                attributes: {
                                    slot: "menu"
                                },
                                children: [
                                    (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menuitem", {
                                        attributes: {
                                            type: "radio",
                                            name: "sort",
                                            value: "1",
                                            label: "Ascending",
                                            checked: sortorder === 1
                                        },
                                        children: "Ascending"
                                    }),
                                    (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menuitem", {
                                        attributes: {
                                            type: "radio",
                                            name: "sort",
                                            value: "-1",
                                            label: "Descending",
                                            checked: sortorder === -1
                                        },
                                        children: "Descending"
                                    })
                                ],
                                listeners: {
                                    click: (event) => {
                                        const { target } = event;
                                        const targetItem = target.closest("e-menuitem");
                                        if (targetItem) {
                                            model.sortByColumn(column, Number(targetItem.value));
                                        }
                                        gridElement.focus();
                                    }
                                }
                            })
                        ]
                    }),
                    (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menuitem", {
                        attributes: {
                            type: "submenu",
                            label: "Filter"
                        },
                        children: [
                            "Filter",
                            (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menu", {
                                attributes: {
                                    slot: "menu"
                                },
                                children: filters.map(filter => {
                                    const { name } = filter;
                                    return (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menuitem", {
                                        attributes: {
                                            type: "checkbox",
                                            checked: this.#displayFilters.includes(filter),
                                            label: name
                                        },
                                        children: name
                                    });
                                }).concat((0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-menuitem", {
                                    attributes: {
                                        type: "button",
                                        label: "Remove filters"
                                    },
                                    children: "Remove filters"
                                })),
                                listeners: {
                                    click: (event) => {
                                        const { target } = event;
                                        const targetItem = target.closest("e-menuitem");
                                        if (targetItem) {
                                            const { checked, label } = targetItem;
                                            const filter = filters.find(filter => filter.name === label);
                                            if (filter) {
                                                if (checked) {
                                                    this.addDisplayFilter(filter);
                                                }
                                                else {
                                                    this.removeDisplayFilter(filter);
                                                }
                                            }
                                            else {
                                                this.removeAllDisplayFilters();
                                            }
                                        }
                                        gridElement.focus();
                                    }
                                }
                            })
                        ]
                    })
                ]
            });
            targetHead.append(contextMenu);
            contextMenu.positionContextual(clientX, clientY);
            contextMenu.focus({ preventScroll: true });
            event.preventDefault();
        }
    }
    #handleHeadClickEvent(event) {
        const { target } = event;
        const targetIsHeaderContent = target.matches("e-gridcell[type=columnheader] :scope:not(e-wsash)");
        if (targetIsHeaderContent) {
            const targetHeader = target.closest("e-gridcell");
            const { model } = this;
            const { columns } = model;
            if (targetHeader) {
                const targetColumn = Array.from(columns.values()).find(column_i => column_i.name == targetHeader.id);
                if (targetColumn) {
                    const { sortorder = -1 } = targetColumn;
                    model.sortByColumn(targetColumn, -sortorder);
                }
            }
        }
    }
};
GridViewBase = __decorate([
    (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.CustomElement)({
        name: "e-gridview"
    })
], GridViewBase);
var GridView = GridViewBase;
//# sourceMappingURL=GridView.js.map

/***/ }),

/***/ "../editor/lib/views/TreeView.js":
/*!***************************************!*\
  !*** ../editor/lib/views/TreeView.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeItemModel": () => (/* binding */ TreeItemModel),
/* harmony export */   "TreeItemModelList": () => (/* binding */ TreeItemModelList),
/* harmony export */   "TreeModel": () => (/* binding */ TreeModel),
/* harmony export */   "TreeView": () => (/* binding */ TreeView)
/* harmony export */ });
/* harmony import */ var _elements_Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var _models_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Model */ "../editor/lib/models/Model.js");
/* harmony import */ var _stylesheets_Reset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stylesheets/Reset */ "../editor/lib/stylesheets/Reset.js");
/* harmony import */ var _stylesheets_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stylesheets/Theme */ "../editor/lib/stylesheets/Theme.js");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./View */ "../editor/lib/views/View.js");
/* harmony import */ var _elements_containers_trees__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../elements/containers/trees */ "../editor/lib/elements/containers/trees/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










class TreeModel extends _models_Model__WEBPACK_IMPORTED_MODULE_1__.ModelObject {
    items;
    childItems;
    sortFunction;
    constructor(init) {
        super();
        const { items = [], sortFunction } = init ?? {};
        items.forEach((item_i, i) => item_i.index = i);
        const childItems = new _models_Model__WEBPACK_IMPORTED_MODULE_1__.ModelList(items);
        childItems.setParent(this);
        this.childItems = childItems;
        this.items = new _models_Model__WEBPACK_IMPORTED_MODULE_1__.ModelList(this.subtreeItems());
        this.sortFunction = sortFunction ??
            function (item_a, item_b) {
                return item_a.id.localeCompare(item_b.id);
            };
        this.addEventListener("modelchange", this.#handleModelChangeEvent.bind(this));
    }
    #handleModelChangeEvent(event) {
        const { target } = event;
        const { items, sortFunction, subtreeItems } = this;
        if (target instanceof _models_Model__WEBPACK_IMPORTED_MODULE_1__.ModelList) {
            const records = target.getRecords();
            records.forEach((record_i) => {
                const { insertedItems, removedItems } = record_i;
                const flattenedInsertedItems = Array.from(insertedItems.values()).flatMap(insertedItem_i => Array.of(insertedItem_i, ...subtreeItems.call(insertedItem_i)));
                const flattenedRemovedItems = Array.from(removedItems.values()).flatMap(removedItem_i => Array.of(removedItem_i, ...subtreeItems.call(removedItem_i)));
                items.beginChanges();
                items.append(...flattenedInsertedItems);
                flattenedRemovedItems.forEach((removedItem_i) => items.remove(removedItem_i));
                if (sortFunction)
                    items.sort(sortFunction);
                items.endChanges();
            });
            Array.from(target.values()).forEach((item_i, i) => {
                item_i.index = i;
            });
        }
    }
    subtreeItems() {
        const { childItems } = this;
        return Array.from(childItems.values()).flatMap(treeItem_i => Array.of(treeItem_i, ...treeItem_i.subtreeItems()));
    }
    getItemByUri(uri) {
        const { childItems } = this;
        const { length: itemsCount } = childItems;
        const { length: uriLength } = uri;
        for (let i = 0; i < itemsCount; i++) {
            const item_i = childItems.get(i);
            const { uri: itemUri } = item_i;
            const { length: itemUriLength } = itemUri;
            if (uri.startsWith(itemUri)) {
                if (itemUriLength === uriLength) {
                    return item_i;
                }
                return TreeModel.prototype.getItemByUri.call(item_i, uri);
            }
        }
        return null;
    }
}
class TreeItemModelList {
    items;
    constructor(items) {
        this.items = items;
    }
    get count() {
        return this.items.length;
    }
    remove() {
        const { items } = this;
        const removedItemsGroups = items.reduce((map, item_i) => {
            const { parentNode } = item_i;
            if (parentNode instanceof TreeItemModel || parentNode instanceof TreeModel) {
                const { childItems } = parentNode;
                const group = map.get(childItems);
                if (group)
                    group.push(item_i);
                else
                    map.set(childItems, [item_i]);
            }
            return map;
        }, new Map());
        Array.from(removedItemsGroups.entries()).forEach(([list_i, children_i]) => {
            list_i.beginChanges();
            children_i.forEach((child_i) => {
                list_i.remove(child_i);
            });
            list_i.endChanges();
        });
    }
}
class TreeItemModel extends _models_Model__WEBPACK_IMPORTED_MODULE_1__.ModelObject {
    childItems;
    id;
    type;
    index;
    get level() {
        const { parentNode } = this;
        if (parentNode instanceof TreeItemModel) {
            return parentNode.level + 1;
        }
        else {
            return 0;
        }
    }
    get uri() {
        const { parentNode, id } = this;
        if (parentNode instanceof TreeItemModel) {
            return `${parentNode.uri}${id}/`;
        }
        return `${id}/`;
    }
    get parentItem() {
        const { parentNode } = this;
        if (parentNode instanceof TreeItemModel) {
            return parentNode;
        }
        return null;
    }
    constructor(init) {
        super();
        const { id, type, items = [] } = init;
        items.forEach((item_i, i) => item_i.index = i);
        const childItems = new _models_Model__WEBPACK_IMPORTED_MODULE_1__.ModelList(items);
        childItems.setParent(this);
        this.id = id;
        this.childItems = childItems;
        this.type = type;
        this.index = -1;
    }
    subtreeItems() {
        const { childItems } = this;
        return Array.from(childItems.values()).flatMap(treeItem_i => Array.of(treeItem_i, ...treeItem_i.subtreeItems()));
    }
    remove() {
        const { parentNode } = this;
        if (parentNode instanceof TreeItemModel || parentNode instanceof TreeModel) {
            const { childItems } = parentNode;
            if (childItems) {
                childItems.remove(this);
            }
        }
    }
}
__decorate([
    (0,_models_Model__WEBPACK_IMPORTED_MODULE_1__.ReactiveProperty)()
], TreeItemModel.prototype, "id", void 0);
__decorate([
    (0,_models_Model__WEBPACK_IMPORTED_MODULE_1__.ReactiveProperty)()
], TreeItemModel.prototype, "type", void 0);
__decorate([
    (0,_models_Model__WEBPACK_IMPORTED_MODULE_1__.ReactiveProperty)()
], TreeItemModel.prototype, "index", void 0);
var style;
let TreeViewBase = class TreeViewBase extends _View__WEBPACK_IMPORTED_MODULE_4__.View {
    #dragImages;
    static {
        style = /*css*/ `
            :host {
                display: block;
            }
            
            .offscreen {
                position: absolute;
                top: 0;
                left: 0;
                transform: translateY(-100%);
                display: block;
                pointer-events: none;
            }
            
            .dragimage {
                white-space: nowrap;
                margin: 1px;
                display: inline-block;
                outline: 1px solid var(--theme-focused-item-outline-color, ${_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_THEME_FOCUSED_ITEM_OUTLINE_COLOR});
                outline-offset: -1px;
                border-radius: 3px; 
                padding: 2px 4px;
            }
        `;
    }
    constructor(model) {
        super();
        this.#dragImages = new WeakMap();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const adoptedStylesheet = new CSSStyleSheet();
        adoptedStylesheet.replace(style);
        shadowRoot.adoptedStyleSheets = [adoptedStylesheet, _stylesheets_Reset__WEBPACK_IMPORTED_MODULE_2__.resetStylesheet];
        this.setModel(model ?? new TreeModel());
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "draggable": {
                const { treeElement } = this;
                if (treeElement) {
                    Array.from(treeElement.items).forEach(item_i => item_i.draggable = newValue !== null);
                }
                break;
            }
        }
    }
    get treeElement() {
        return this.shadowRoot.querySelector("e-tree");
    }
    treeItemElement(item) {
        return this.shadowRoot.querySelector(`e-treeitem[uri=${item.uri}]`);
    }
    #getTreeItemElementUri(item) {
        let uri = "";
        let closestItem = item;
        while (closestItem !== null) {
            const { dataset, parentElement } = closestItem;
            uri = `${dataset.id}/` + uri;
            closestItem = parentElement?.closest("e-treeitem") ?? null;
        }
        return uri;
    }
    treeItem(element) {
        return this.model.getItemByUri(this.#getTreeItemElementUri(element));
    }
    renderShadow() {
        const { model } = this;
        const treeElement = (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-tree", {
            attributes: {
                tabindex: 0,
            },
            children: (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.reactiveChildElements)(model.childItems, item => this.#renderTreeItem(item)),
            listeners: {
                dragstart: this.#handleDragStartEvent.bind(this),
                drop: this.#handleDropEvent.bind(this),
                contextmenu: this.#handleContextMenuEvent.bind(this),
                focus: this.#handleFocusEvent.bind(this),
                focusin: this.#handleFocusInEvent.bind(this),
                focusout: this.#handleFocusOutEvent.bind(this),
            }
        });
        return (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.fragment)(treeElement, (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("div", {
            attributes: {
                class: "offscreen",
                hidden: true
            },
            children: (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.reactiveChildElements)(model.items, item => this.#renderTreeItemDragImage(item))
        }));
    }
    itemContentDelegate(item) {
        return (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.reactiveElement)(item, (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("span"), ["name"], (label, property, oldValue, newValue) => {
            label.textContent = newValue;
        });
    }
    itemToolbarDelegate(item) {
        return null;
    }
    itemMenuDelegate() {
        return null;
    }
    selectedItems() {
        const { treeElement } = this;
        if (treeElement) {
            const selectedElements = treeElement.selectedItems();
            return selectedElements.map(item_i => this.treeItem(item_i));
        }
        return [];
    }
    activeItem() {
        const { treeElement } = this;
        if (treeElement) {
            const { activeItem } = treeElement;
            return activeItem ?
                this.treeItem(activeItem) :
                null;
        }
        return null;
    }
    #getDragImage(model) {
        return this.#dragImages.get(model)?.deref() ?? null;
    }
    #renderTreeItem(item) {
        const { draggable } = this;
        const { index, level, id } = item;
        const toolbar = this.itemToolbarDelegate(item);
        const content = this.itemContentDelegate(item);
        const treeItemElement = (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.reactiveElement)(item, (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-treeitem", {
            attributes: {
                draggable: String(draggable),
                posinset: index,
                level: level
            },
            dataset: {
                id: id
            },
            children: [
                ...(content ? [content] : []),
                ...(toolbar ? [toolbar] : [])
            ]
        }), ["index", "id", "type"], (treeitem, propertyName, oldValue, newValue) => {
            switch (propertyName) {
                case "index": {
                    treeitem.posinset = newValue;
                    break;
                }
                case "id": {
                    const { dataset } = treeitem;
                    dataset.id = newValue;
                    break;
                }
                case "type": {
                    treeitem.type = newValue;
                    switch (newValue) {
                        case "parent": {
                            treeitem.append((0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-treeitemgroup", {
                                attributes: {
                                    slot: "group"
                                },
                                children: (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.reactiveChildElements)(item.childItems, item => this.#renderTreeItem(item))
                            }));
                            break;
                        }
                        case "leaf": {
                            const { group } = treeitem;
                            if (group) {
                                group.remove();
                            }
                            break;
                        }
                    }
                    break;
                }
            }
        });
        return treeItemElement;
    }
    #renderTreeItemDragImage(item) {
        const dragImageElement = (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.reactiveElement)(item, (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("span", {
            attributes: {
                class: "dragimage"
            }
        }), ["name"], (span, property, oldValue, newValue) => {
            span.textContent = newValue;
        });
        this.#dragImages.set(item, new WeakRef(dragImageElement));
        return dragImageElement;
    }
    #handleDragStartEvent(event) {
        const { currentTarget, target } = event;
        const targetTree = currentTarget;
        const targetItem = target.closest("e-treeitem");
        const { model } = this;
        if (targetItem) {
            const { dataTransfer } = event;
            const selectedElements = targetTree.selectedItems();
            const { length: selectedCount } = selectedElements;
            if (selectedCount > 0) {
                const selectedUris = selectedElements
                    .map(element_i => this.#getTreeItemElementUri(element_i))
                    .filter((uri_i, _, uris) => !uris.some(uri_j => uri_i.startsWith(`${uri_j}/`)));
                const selectedUrisString = selectedUris.join("\n");
                const lastUri = selectedUris[selectedUris.length - 1];
                const lastItem = model.getItemByUri(lastUri);
                if (lastItem && dataTransfer) {
                    dataTransfer.dropEffect = "move";
                    dataTransfer.setData("text/plain", selectedUrisString);
                    const dragImage = this.#getDragImage(lastItem);
                    if (dragImage) {
                        dataTransfer.setDragImage(dragImage, -16, 0);
                    }
                }
            }
        }
    }
    #handleDropEvent(event) {
        const { currentTarget, target } = event;
        const targetTree = currentTarget;
        const targetItem = target.closest("e-treeitem");
        const { model } = this;
        const { sortFunction } = model;
        if (targetItem) {
            const { dataTransfer } = event;
            if (dataTransfer) {
                const targetUri = this.#getTreeItemElementUri(targetItem);
                const targetItemModel = model.getItemByUri(targetUri);
                const transferedUris = dataTransfer.getData("text/plain").split("\n");
                const targetIsWithin = transferedUris.some(uri_i => targetUri.startsWith(`${uri_i}/`) || uri_i === targetUri);
                if (!targetIsWithin) {
                    const transferedItems = (transferedUris.map(uri_i => model.getItemByUri(uri_i)).filter(item_i => item_i !== null));
                    const { type: targetType, parentItem: targetParentItem } = targetItemModel;
                    const { childItems: targetList } = targetType === "parent" ? targetItemModel :
                        targetParentItem ? targetParentItem : model;
                    const targetItems = Array.from(targetList.values());
                    targetItems.forEach((item_i) => {
                        const sameLabelIndex = transferedItems.findIndex(item_j => item_j.id === item_i.id);
                        if (sameLabelIndex > -1) {
                            const doReplace = confirm(`Replace ${item_i.id}?`);
                            if (doReplace) {
                                targetList.remove(item_i);
                            }
                            else {
                                transferedItems.copyWithin(sameLabelIndex, sameLabelIndex + 1);
                                transferedItems.length--;
                            }
                        }
                    });
                    const transferedItemsModelList = new TreeItemModelList(transferedItems);
                    transferedItemsModelList.remove();
                    if (sortFunction) {
                        targetList.beginChanges();
                        targetList.append(...transferedItems);
                        targetList.sort(sortFunction);
                        targetList.endChanges();
                    }
                    else {
                        targetList.insert(targetItem.posinset, ...transferedItems);
                    }
                    const newElements = targetTree.querySelectorAll(`e-treeitem:is(${transferedItems.map(item_i => `[data-uri="${item_i.uri}"]`).join(",")})`);
                    targetTree.beginSelection();
                    newElements.forEach(element_i => element_i.selected = true);
                    targetTree.endSelection();
                }
            }
        }
    }
    #handleContextMenuEvent(event) {
        const { clientX, clientY, currentTarget, target } = event;
        const targetTree = currentTarget;
        const targetItem = target.closest("e-treeitem");
        if (targetItem) {
            const contextMenu = this.itemMenuDelegate();
            if (contextMenu !== null) {
                contextMenu.contextual = true;
                contextMenu.addEventListener("close", () => {
                    targetItem.focus({ preventScroll: true });
                });
                targetTree.append(contextMenu);
                contextMenu.positionContextual(clientX, clientY);
                contextMenu.focus({ preventScroll: true });
            }
        }
        event.preventDefault();
    }
    #handleFocusEvent(event) {
        const { currentTarget, relatedTarget } = event;
        const targetTree = currentTarget;
        if (relatedTarget !== null && !this.contains(relatedTarget)) {
            const relatedPosition = relatedTarget.compareDocumentPosition(this);
            if (!(relatedPosition & Node.DOCUMENT_POSITION_DISCONNECTED) && (relatedPosition & Node.DOCUMENT_POSITION_PRECEDING)) {
                const { activeItem } = targetTree;
                if (activeItem) {
                    const itemToolbar = activeItem.querySelector("e-toolbar");
                    if (itemToolbar) {
                        event.preventDefault();
                        itemToolbar.focus();
                    }
                }
            }
        }
    }
    #handleFocusInEvent(event) {
        const { target } = event;
        const targetItem = target.closest("e-treeitem");
        if (targetItem) {
            const itemToolbar = targetItem.querySelector("e-toolbar");
            if (itemToolbar) {
                itemToolbar.tabIndex = itemToolbar.contains(target) ? -1 : 0;
            }
        }
    }
    #handleFocusOutEvent(event) {
        const { target } = event;
        const targetItem = target.closest("e-treeitem");
        if (targetItem) {
            const itemToolbar = targetItem.querySelector("e-toolbar");
            if (itemToolbar) {
                itemToolbar.tabIndex = itemToolbar.contains(target) ? 0 : -1;
            }
        }
    }
};
__decorate([
    (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.AttributeProperty)({ type: Boolean, observed: true })
], TreeViewBase.prototype, "draggable", void 0);
TreeViewBase = __decorate([
    (0,_elements_Element__WEBPACK_IMPORTED_MODULE_0__.CustomElement)({
        name: "e-treeview"
    })
], TreeViewBase);
var TreeView = TreeViewBase;
//# sourceMappingURL=TreeView.js.map

/***/ }),

/***/ "../editor/lib/views/View.js":
/*!***********************************!*\
  !*** ../editor/lib/views/View.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "View": () => (/* binding */ View)
/* harmony export */ });

class ViewBase extends HTMLElement {
    #model;
    constructor() {
        super();
        this.#model = null;
    }
    get model() {
        return this.#model;
    }
    setModel(model) {
        if (model !== this.#model) {
            this.#model = model;
        }
    }
    renderLight() {
        return;
    }
    renderShadow() {
        return;
    }
    render() {
        const { shadowRoot } = this;
        if (shadowRoot !== null) {
            const shadow = this.renderShadow();
            if (shadow) {
                shadowRoot.replaceChildren(shadow);
            }
        }
        const light = this.renderLight();
        if (light) {
            this.replaceChildren(light);
        }
    }
}
var View = ViewBase;
//# sourceMappingURL=View.js.map

/***/ }),

/***/ "../editor/assets/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.svg":
/*!***********************************************************************!*\
  !*** ../editor/assets/arrow_drop_down_FILL0_wght400_GRAD0_opsz48.svg ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3497bd64f93b4d706808.svg";

/***/ }),

/***/ "../editor/assets/arrow_drop_up_FILL0_wght400_GRAD0_opsz48.svg":
/*!*********************************************************************!*\
  !*** ../editor/assets/arrow_drop_up_FILL0_wght400_GRAD0_opsz48.svg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9d0fda0b3ef93e52697.svg";

/***/ }),

/***/ "../editor/assets/arrow_right_FILL0_wght400_GRAD0_opsz48.svg":
/*!*******************************************************************!*\
  !*** ../editor/assets/arrow_right_FILL0_wght400_GRAD0_opsz48.svg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "43c54c9d5c843fa6e1a4.svg";

/***/ }),

/***/ "../editor/assets/done_FILL0_wght400_GRAD0_opsz48.svg":
/*!************************************************************!*\
  !*** ../editor/assets/done_FILL0_wght400_GRAD0_opsz48.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "983207f640fb42a9d859.svg";

/***/ }),

/***/ "../editor/assets/fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf":
/*!****************************************************************************!*\
  !*** ../editor/assets/fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a42bbe687810bdc6e9e8.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "main:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmain"] = self["webpackChunkmain"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "main": () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! editor/lib/elements/Element */ "../editor/lib/elements/Element.js");
/* harmony import */ var editor_lib_views_GridView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! editor/lib/views/GridView */ "../editor/lib/views/GridView.js");
/* harmony import */ var editor_lib_views_TreeView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! editor/lib/views/TreeView */ "../editor/lib/views/TreeView.js");
/* harmony import */ var editor_lib_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! editor/lib/stylesheets/Theme */ "../editor/lib/stylesheets/Theme.js");
/* harmony import */ var _src_MyTreeView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/MyTreeView */ "./src/MyTreeView.ts");
/* harmony import */ var _src_MyGridView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/MyGridView */ "./src/MyGridView.ts");
/* harmony import */ var editor_lib_elements_containers_lists__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! editor/lib/elements/containers/lists */ "../editor/lib/elements/containers/lists/index.js");
/* harmony import */ var editor_lib_elements_containers_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! editor/lib/elements/containers/tabs */ "../editor/lib/elements/containers/tabs/index.js");
/* harmony import */ var editor_lib_elements_containers_menus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! editor/lib/elements/containers/menus */ "../editor/lib/elements/containers/menus/index.js");
/* harmony import */ var editor_lib_elements_containers_status__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! editor/lib/elements/containers/status */ "../editor/lib/elements/containers/status/index.js");
/* harmony import */ var editor_lib_elements_controls_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! editor/lib/elements/controls/select */ "../editor/lib/elements/controls/select/index.js");
/* harmony import */ var editor_lib_elements_misc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! editor/lib/elements/misc */ "../editor/lib/elements/misc/index.js");












async function main() {
    document.adoptedStyleSheets = [editor_lib_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_3__.theme.stylesheet];
    document.head.append(...Object.values(editor_lib_stylesheets_Theme__WEBPACK_IMPORTED_MODULE_3__.theme.images()).map((img) => (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("link", {
        attributes: {
            rel: "preload",
            as: "image",
            href: img,
            crossorigin: "anonymous"
        }
    })));
    const gridView = new _src_MyGridView__WEBPACK_IMPORTED_MODULE_5__.MyGridView();
    gridView.setModel(new editor_lib_views_GridView__WEBPACK_IMPORTED_MODULE_1__.GridModel({
        columns: [
            new editor_lib_views_GridView__WEBPACK_IMPORTED_MODULE_1__.GridColumnModel({
                name: "name",
                type: String,
                label: "Nom",
                extract: (row) => row.name
            }),
            new editor_lib_views_GridView__WEBPACK_IMPORTED_MODULE_1__.GridColumnModel({
                name: "color",
                type: String,
                label: "Couleur",
                extract: (row) => row.color
            }),
            new editor_lib_views_GridView__WEBPACK_IMPORTED_MODULE_1__.GridColumnModel({
                name: "age",
                type: Number,
                label: "Age",
                extract: (row) => String(row.age),
                filters: [{
                        name: "Minors",
                        filter: (row) => row.age < 18
                    }, {
                        name: "Majors",
                        filter: (row) => row.age >= 18
                    }]
            })
        ],
        rows: [
            new _src_MyGridView__WEBPACK_IMPORTED_MODULE_5__.MyGridRowModel({
                id: 1,
                name: "Louis",
                age: 13,
                color: "bleu"
            }),
            new _src_MyGridView__WEBPACK_IMPORTED_MODULE_5__.MyGridRowModel({
                id: 2,
                name: "Marine",
                age: 21,
                color: "bleu"
            }),
            new _src_MyGridView__WEBPACK_IMPORTED_MODULE_5__.MyGridRowModel({
                id: 3,
                name: "Jean-Christophe",
                age: 32,
                color: "rouge"
            }),
            new _src_MyGridView__WEBPACK_IMPORTED_MODULE_5__.MyGridRowModel({
                id: 4,
                name: "Anne",
                age: 54,
                color: "jaune"
            }),
            new _src_MyGridView__WEBPACK_IMPORTED_MODULE_5__.MyGridRowModel({
                id: 5,
                name: "Claude",
                age: 61,
                color: "noir"
            }),
            new _src_MyGridView__WEBPACK_IMPORTED_MODULE_5__.MyGridRowModel({
                id: 6,
                name: "Benoît",
                age: 38,
                color: "vert"
            })
        ]
    }));
    document.body.append(gridView);
    gridView.render();
    const treeModel = new editor_lib_views_TreeView__WEBPACK_IMPORTED_MODULE_2__.TreeModel({
        items: [
            new _src_MyTreeView__WEBPACK_IMPORTED_MODULE_4__.MyTreeItemModel({
                id: "TI 0",
                type: "parent",
                items: [
                    new _src_MyTreeView__WEBPACK_IMPORTED_MODULE_4__.MyTreeItemModel({
                        id: "TI 1A",
                        type: "parent",
                        items: [
                            new _src_MyTreeView__WEBPACK_IMPORTED_MODULE_4__.MyTreeItemModel({
                                type: "leaf",
                                id: "TI 1AX"
                            }),
                        ]
                    }),
                    new _src_MyTreeView__WEBPACK_IMPORTED_MODULE_4__.MyTreeItemModel({
                        type: "parent",
                        id: "TI 1B"
                    })
                ]
            }),
            new _src_MyTreeView__WEBPACK_IMPORTED_MODULE_4__.MyTreeItemModel({
                id: "TI 1",
                type: "parent",
                items: [
                    new _src_MyTreeView__WEBPACK_IMPORTED_MODULE_4__.MyTreeItemModel({
                        id: "TI 1A",
                        type: "parent",
                        items: [
                            new _src_MyTreeView__WEBPACK_IMPORTED_MODULE_4__.MyTreeItemModel({
                                type: "leaf",
                                id: "TI 1AX"
                            }),
                        ]
                    }),
                    new _src_MyTreeView__WEBPACK_IMPORTED_MODULE_4__.MyTreeItemModel({
                        type: "parent",
                        id: "TI 1B"
                    })
                ]
            }),
            new _src_MyTreeView__WEBPACK_IMPORTED_MODULE_4__.MyTreeItemModel({
                type: "leaf",
                id: "TI 2"
            }),
            new _src_MyTreeView__WEBPACK_IMPORTED_MODULE_4__.MyTreeItemModel({
                type: "leaf",
                id: "TI 3"
            })
        ]
    });
    const treeView = new _src_MyTreeView__WEBPACK_IMPORTED_MODULE_4__.MyTreeView();
    treeView.draggable = true;
    treeView.setModel(treeModel);
    treeView.render();
    document.body.append(treeView);
    document.body.append(...[
        "builtins",
        "tablist",
        "select",
        "sash",
        "loaders",
        "tree",
        "menus",
        "list",
        "status"
    ].map(example => {
        return (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("details", {
            children: [
                (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("summary", {
                    children: `${example}.html`
                }),
                (0,editor_lib_elements_Element__WEBPACK_IMPORTED_MODULE_0__.element)("e-import", {
                    attributes: {
                        src: `example/${example}.html`
                    }
                })
            ]
        });
    }));
}

})();

main = __webpack_exports__;
/******/ })()
;