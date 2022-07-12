"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: Helvetica;   \r\n    list-style-type: none;\r\n    text-decoration: none;\r\n}\r\n\r\nheader, footer {\r\n    background: rgb(85, 85, 85);\r\n}\r\n\r\n.header, \r\n.footer { \r\n    height: 5rem;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.main {\r\n    display: grid;\r\n    grid-template-columns: 1fr 6fr;\r\n    min-height: calc(100vh - 10rem);\r\n}\r\n\r\n.main > div {\r\n    padding-top: 3rem;\r\n    padding-bottom: 3rem;\r\n}\r\n\r\n#projects-bar {\r\n    grid-column: 1;\r\n    grid-column-end: auto;\r\n    background: rgb(85, 85, 85);\r\n}\r\n\r\n.footer {\r\n    justify-content: center;\r\n}\r\n\r\n.footer-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\na:visited {\r\n    color: inherit;\r\n}\r\n\r\na:hover {\r\n    border-bottom: 1px solid;\r\n}\r\n\r\n/* --------- HEADER --------- */\r\n\r\nheader {\r\n    padding-left: 2rem;\r\n    padding-right: 2rem;\r\n}\r\n\r\n.header {\r\n    font-weight: bold;\r\n}\r\n\r\n.header-left, \r\n.header-right {\r\n    display: flex;\r\n    flex: 1;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.header-right {\r\n    justify-content: flex-end;\r\n}\r\n\r\n.logo-name {\r\n    font-size: 2rem;\r\n}\r\n\r\n/* --------- PROFILE-HEADER --------- */\r\n\r\n.profile-header {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.profile-pic {\r\n    border-radius: 30px;\r\n}\r\n\r\n/* --------- MAIN --------- */\r\n\r\n/* --------- PROJECTS-BAR --------- */\r\n\r\n#projects-bar {\r\n    display: flex;\r\n    flex-direction: column; /* Should be row but displays as column */\r\n    align-items: center;\r\n    text-align: center;\r\n    gap: 1rem;\r\n}\r\n\r\n#projects-bar-heading {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.project-links {\r\n    display: grid;\r\n    gap: 1rem;\r\n}\r\n\r\n.project-link {\r\n    flex: 1;\r\n}\r\n\r\n/* --------- CONTENT --------- */\r\n\r\n.content {\r\n    padding-left: 3rem;\r\n    padding-right: 3rem;\r\n}\r\n\r\n.content-container {\r\n    display: grid;\r\n}\r\n\r\n/* --------- PROJECTS --------- */\r\n\r\n.projects-header {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n}\r\n\r\n.projects-heading {\r\n    font-size: 1.6rem;\r\n}\r\n\r\n.project-options-container {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    gap: 1rem;\r\n    align-items: center;\r\n}\r\n\r\n.projects-list-container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 2rem;\r\n    padding-top: 2rem;\r\n}\r\n\r\n.project-overview {\r\n    background-color: rgb(107, 103, 103);\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 2rem;\r\n    border-radius: 2rem;\r\n    min-width: 300px;\r\n    max-width: 350px;\r\n    flex: 1;\r\n}\r\n\r\n.project-overview-tasks {\r\n    padding-top: .4rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .4rem;\r\n}\r\n\r\n.projects-task {\r\n    display: flex;\r\n}\r\n\r\n/* --------- PROJECT --------- */\r\n\r\n.project-header {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n}\r\n\r\n.project-heading {\r\n    font-size: 1.4rem;\r\n}\r\n\r\n.project-title {\r\n    font-size: 1.4rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.project-tasks {\r\n    padding-top: .4rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .4rem;\r\n}\r\n\r\n.tasks-list {\r\n    flex: 1;\r\n}\r\n\r\n.priority {\r\n    display: flex;\r\n    align-items: center;\r\n    font-weight: bold;\r\n    gap: .5rem;\r\n    justify-content: center;\r\n}\r\n\r\n.tasks {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .4rem;\r\n}\r\n\r\n.project-task {\r\n    display: flex;\r\n    background-color: rgb(107, 103, 103);\r\n    padding: .5rem;\r\n    border-radius: 20px;\r\n}\r\n\r\n.task-finished {\r\n    margin-right: .4rem;\r\n}\r\n\r\n.task-due-date {\r\n    margin-left: auto;\r\n}\r\n\r\n/* --------- TASK --------- */\r\n\r\n.task {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: rgb(107, 103, 103);\r\n    padding: 2rem;\r\n    border-radius: 2rem;\r\n    gap: 1rem;\r\n}\r\n\r\n.task-header {\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n    display: flex;\r\n    gap: 1rem;\r\n    align-items: center;\r\n}\r\n\r\n.task-priority {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.task-header > .task-title {\r\n    font-size: 1.8rem;\r\n}\r\n\r\n.description-label {\r\n    text-decoration: underline;\r\n    font-size: 1.1rem;\r\n}\r\n\r\n/* --------- MEDIA QUERIES --------- */\r\n\r\n@media screen and (min-width: 750px) {\r\n    .project-tasks {\r\n        flex-direction: row;\r\n    }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,sBAAsB;IACtB,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;;IAEI,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,+BAA+B;AACnC;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,2BAA2B;AAC/B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA,+BAA+B;;AAE/B;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;IAEI,aAAa;IACb,OAAO;IACP,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;AACnB;;AAEA,uCAAuC;;AAEvC;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,mBAAmB;AACvB;;AAEA,6BAA6B;;AAE7B,qCAAqC;;AAErC;IACI,aAAa;IACb,sBAAsB,EAAE,yCAAyC;IACjE,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,OAAO;AACX;;AAEA,gCAAgC;;AAEhC;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA,iCAAiC;;AAEjC;IACI,aAAa;IACb,qCAAqC;AACzC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;IAChB,OAAO;AACX;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA,gCAAgC;;AAEhC;IACI,aAAa;IACb,qCAAqC;AACzC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,UAAU;IACV,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA,6BAA6B;;AAE7B;IACI,aAAa;IACb,sBAAsB;IACtB,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA,sCAAsC;;AAEtC;IACI;QACI,mBAAmB;IACvB;AACJ","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: Helvetica;   \r\n    list-style-type: none;\r\n    text-decoration: none;\r\n}\r\n\r\nheader, footer {\r\n    background: rgb(85, 85, 85);\r\n}\r\n\r\n.header, \r\n.footer { \r\n    height: 5rem;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.main {\r\n    display: grid;\r\n    grid-template-columns: 1fr 6fr;\r\n    min-height: calc(100vh - 10rem);\r\n}\r\n\r\n.main > div {\r\n    padding-top: 3rem;\r\n    padding-bottom: 3rem;\r\n}\r\n\r\n#projects-bar {\r\n    grid-column: 1;\r\n    grid-column-end: auto;\r\n    background: rgb(85, 85, 85);\r\n}\r\n\r\n.footer {\r\n    justify-content: center;\r\n}\r\n\r\n.footer-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\na:visited {\r\n    color: inherit;\r\n}\r\n\r\na:hover {\r\n    border-bottom: 1px solid;\r\n}\r\n\r\n/* --------- HEADER --------- */\r\n\r\nheader {\r\n    padding-left: 2rem;\r\n    padding-right: 2rem;\r\n}\r\n\r\n.header {\r\n    font-weight: bold;\r\n}\r\n\r\n.header-left, \r\n.header-right {\r\n    display: flex;\r\n    flex: 1;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.header-right {\r\n    justify-content: flex-end;\r\n}\r\n\r\n.logo-name {\r\n    font-size: 2rem;\r\n}\r\n\r\n/* --------- PROFILE-HEADER --------- */\r\n\r\n.profile-header {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.profile-pic {\r\n    border-radius: 30px;\r\n}\r\n\r\n/* --------- MAIN --------- */\r\n\r\n/* --------- PROJECTS-BAR --------- */\r\n\r\n#projects-bar {\r\n    display: flex;\r\n    flex-direction: column; /* Should be row but displays as column */\r\n    align-items: center;\r\n    text-align: center;\r\n    gap: 1rem;\r\n}\r\n\r\n#projects-bar-heading {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.project-links {\r\n    display: grid;\r\n    gap: 1rem;\r\n}\r\n\r\n.project-link {\r\n    flex: 1;\r\n}\r\n\r\n/* --------- CONTENT --------- */\r\n\r\n.content {\r\n    padding-left: 3rem;\r\n    padding-right: 3rem;\r\n}\r\n\r\n.content-container {\r\n    display: grid;\r\n}\r\n\r\n/* --------- PROJECTS --------- */\r\n\r\n.projects-header {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n}\r\n\r\n.projects-heading {\r\n    font-size: 1.6rem;\r\n}\r\n\r\n.project-options-container {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    gap: 1rem;\r\n    align-items: center;\r\n}\r\n\r\n.projects-list-container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 2rem;\r\n    padding-top: 2rem;\r\n}\r\n\r\n.project-overview {\r\n    background-color: rgb(107, 103, 103);\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 2rem;\r\n    border-radius: 2rem;\r\n    min-width: 300px;\r\n    max-width: 350px;\r\n    flex: 1;\r\n}\r\n\r\n.project-overview-tasks {\r\n    padding-top: .4rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .4rem;\r\n}\r\n\r\n.projects-task {\r\n    display: flex;\r\n}\r\n\r\n/* --------- PROJECT --------- */\r\n\r\n.project-header {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n}\r\n\r\n.project-heading {\r\n    font-size: 1.4rem;\r\n}\r\n\r\n.project-title {\r\n    font-size: 1.4rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.project-tasks {\r\n    padding-top: .4rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .4rem;\r\n}\r\n\r\n.tasks-list {\r\n    flex: 1;\r\n}\r\n\r\n.priority {\r\n    display: flex;\r\n    align-items: center;\r\n    font-weight: bold;\r\n    gap: .5rem;\r\n    justify-content: center;\r\n}\r\n\r\n.tasks {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .4rem;\r\n}\r\n\r\n.project-task {\r\n    display: flex;\r\n    background-color: rgb(107, 103, 103);\r\n    padding: .5rem;\r\n    border-radius: 20px;\r\n}\r\n\r\n.task-finished {\r\n    margin-right: .4rem;\r\n}\r\n\r\n.task-due-date {\r\n    margin-left: auto;\r\n}\r\n\r\n/* --------- TASK --------- */\r\n\r\n.task {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: rgb(107, 103, 103);\r\n    padding: 2rem;\r\n    border-radius: 2rem;\r\n    gap: 1rem;\r\n}\r\n\r\n.task-header {\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n    display: flex;\r\n    gap: 1rem;\r\n    align-items: center;\r\n}\r\n\r\n.task-priority {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.task-header > .task-title {\r\n    font-size: 1.8rem;\r\n}\r\n\r\n.description-label {\r\n    text-decoration: underline;\r\n    font-size: 1.1rem;\r\n}\r\n\r\n/* --------- MEDIA QUERIES --------- */\r\n\r\n@media screen and (min-width: 750px) {\r\n    .project-tasks {\r\n        flex-direction: row;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/Content.js":
/*!***********************************!*\
  !*** ./src/components/Content.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Content": () => (/* binding */ Content),
/* harmony export */   "switchContent": () => (/* binding */ switchContent)
/* harmony export */ });
const Content = (content) => {
    const contentDiv = document.querySelector('.content');
    if (!contentDiv) {
        const container = document.createElement('div');
        container.classList.add('content');
        container.appendChild(content);
        return container;
    } else {
        switchContent(content);
    }
}

const switchContent = (content) => {
    const container = document.querySelector('.content');
    container.replaceChildren(content);
}

/***/ }),

/***/ "./src/components/CreateProject.js":
/*!*****************************************!*\
  !*** ./src/components/CreateProject.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateProject": () => (/* binding */ CreateProject)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project */ "./src/project.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");



const CreateProject = (user) => {
    const container = document.createElement('div');
    container.id = 'create-project';

    const form = document.createElement('form');
    const heading = document.createElement('h2');
    heading.textContent = 'Create Project';

    const title = createField('title', 'text');

    const button = document.createElement('button');
    button.textContent = 'Create';
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const projectName = document.querySelector('#title').value;
        const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__.Project)(projectName);
        user.addProject(newProject);
    });

    form.appendChild(heading);
    form.appendChild(title);
    form.appendChild(button);

    container.appendChild(form);
    return container;
};

const createField = (fieldName, inputType) => {
    const field = document.createElement('div');
    field.classList.add('field');

    const label = document.createElement('label');
    label.setAttribute('for', fieldName);
    const firstLetterCapital = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.makeFirstLetterCapital)(fieldName);
    label.textContent = `${firstLetterCapital} : `;

    const input = document.createElement('input');
    input.setAttribute('type', inputType);
    input.setAttribute('id', fieldName);
    input.setAttribute('name', fieldName);

    field.appendChild(label);
    field.appendChild(input);
    return field;
};

/***/ }),

/***/ "./src/components/CreateTask.js":
/*!**************************************!*\
  !*** ./src/components/CreateTask.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateTask": () => (/* binding */ CreateTask)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../task */ "./src/task.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");



const CreateTask = (project) => {
    const container = document.createElement('div');
    container.id = 'create-task';

    const form = document.createElement('form');
    
    const heading = document.createElement('h2');
    heading.textContent = 'Create Task';
    
    const title = createField('title', 'text');
    const description = createField('description', 'text');
    const dueDate = createField('due-date', 'date');
    const priority = createField('priority', 'text');
    const notes = createField('notes', 'text');
    const submit = createField('create', 'button');
    
    form.appendChild(heading);
    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDate);
    form.appendChild(priority);
    form.appendChild(notes);
    form.appendChild(submit);
    
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const newTask = convertFormToTask(form);
        project.addTask(newTask);
    });
    
    container.appendChild(form);
    return container;
};

const createField = (fieldName, inputType) => {
    const field = document.createElement('div');
    field.classList.add('field');

    const label = document.createElement('label');
    label.setAttribute('for', fieldName);
    label.textContent = `${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.makeFirstLetterCapital)(fieldName)} : `;

    const input = document.createElement('input');
    input.setAttribute('type', inputType);
    if (input.type === 'button') input.value = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.makeFirstLetterCapital)(fieldName);
    input.setAttribute('id', fieldName);
    input.setAttribute('name', fieldName);

    field.appendChild(label);
    field.appendChild(input);
    return field;
};

const convertFormToTask = (form) => {
    const formData = new FormData(form);
    const values = formData.values();
    const taskArray = [];
    for (const value of values) {
        taskArray.push(value);
    }
    return (0,_task__WEBPACK_IMPORTED_MODULE_0__.Task)(...taskArray);
}

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* binding */ Footer)
/* harmony export */ });
const Footer = () => {
    const container = document.createElement('div');
    container.classList.add('footer');

    const content = document.createElement('div');
    content.classList.add('footer-content');

    const copyright = document.createElement('div');
    copyright.id = 'footer-copyright';
    copyright.textContent = '© Fulfill'

    const rights = document.createElement('div');
    rights.id = 'footer-rights';
    rights.textContent = 'All Rights Reserved';

    const year = document.createElement('div');
    year.id = 'footer-year';
    year.textContent = '2022';

    content.appendChild(copyright);
    content.appendChild(rights);
    content.appendChild(year);

    container.appendChild(content);
    return container;
};

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _ProfileHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileHeader */ "./src/components/ProfileHeader.js");



const Header = (user) => {
    const container = document.createElement('header');
    container.classList.add('header');

    const left = document.createElement('div');
    left.classList.add('header-left');

    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_0__;

    const logoName = document.createElement('div');
    logoName.classList.add('logo-name');
    logoName.textContent = 'FulFill';
    left.appendChild(logo);
    left.appendChild(logoName);
    

    const right = document.createElement('div');
    right.classList.add('header-right');
    right.appendChild((0,_ProfileHeader__WEBPACK_IMPORTED_MODULE_1__.ProfileHeader)(user));
    
    container.appendChild(left);
    container.appendChild(right);
    return container;
}

/***/ }),

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Main": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _ProjectBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectBar */ "./src/components/ProjectBar.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Content */ "./src/components/Content.js");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projects */ "./src/components/Projects.js");




const Main = (user) => {
    const main = document.createElement('main');
    main.classList.add('main');
    const navbar = (0,_ProjectBar__WEBPACK_IMPORTED_MODULE_0__.ProjectBar)(user);
    const mainContent = (0,_Content__WEBPACK_IMPORTED_MODULE_1__.Content)((0,_Projects__WEBPACK_IMPORTED_MODULE_2__.Projects)(user));
    main.appendChild(navbar);
    main.appendChild(mainContent);
    return main;
}

/***/ }),

/***/ "./src/components/ProfileHeader.js":
/*!*****************************************!*\
  !*** ./src/components/ProfileHeader.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileHeader": () => (/* binding */ ProfileHeader)
/* harmony export */ });
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content */ "./src/components/Content.js");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects */ "./src/components/Projects.js");



const ProfileHeader = (user) => {
    const profileHeader = document.createElement('div');
    profileHeader.classList.add('profile-header');
    profileHeader.addEventListener('click', () => {
        (0,_Content__WEBPACK_IMPORTED_MODULE_0__.Content)((0,_Projects__WEBPACK_IMPORTED_MODULE_1__.Projects)(user));
    });

    const profilePicDiv = document.createElement('img');
    profilePicDiv.classList.add('profile-pic');
    profilePicDiv.src = user.profilePicture;
    profilePicDiv.style.width = '50px';

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');
    nameDiv.textContent = user.name;

    profileHeader.appendChild(profilePicDiv);
    profileHeader.appendChild(nameDiv);
    return profileHeader;
}


/***/ }),

/***/ "./src/components/ProjectBar.js":
/*!**************************************!*\
  !*** ./src/components/ProjectBar.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectBar": () => (/* binding */ ProjectBar)
/* harmony export */ });
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content */ "./src/components/Content.js");
/* harmony import */ var _Tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tasks */ "./src/components/Tasks.js");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projects */ "./src/components/Projects.js");




const ProjectBar = (user) => {
    const projectBar = document.createElement('div');
    projectBar.id = 'projects-bar';

    const heading = document.createElement('div');
    heading.id = 'projects-bar-heading';
    heading.textContent = 'Your Projects';
    projectBar.appendChild(heading);

    const projects = user.projects;
    const links = createProjectLinks(projects);
    projectBar.appendChild(links);

    const allProjectsLink = document.createElement('a');
    allProjectsLink.classList.add('all-projects-link');
    allProjectsLink.textContent = 'View Projects';
    allProjectsLink.href = '#';
    allProjectsLink.addEventListener('click', () => {
        (0,_Content__WEBPACK_IMPORTED_MODULE_0__.Content)((0,_Projects__WEBPACK_IMPORTED_MODULE_2__.Projects)(user));
        
        const newProjects = user.projects;
        const replace = document.querySelector('.project-links');
        refreshProjectsBar(newProjects, replace, projectBar);
    });

    projectBar.appendChild(allProjectsLink);
    return projectBar;
};

const createProjectLinks = (projects) => {
    const container = document.createElement('div');
    container.classList.add('project-links');
    projects.forEach(project => {
        const link = document.createElement('a');
        link.classList.add('project-link');
        link.href = '#';
        link.textContent = project.getTitle();
        link.addEventListener('click', () => {
            (0,_Content__WEBPACK_IMPORTED_MODULE_0__.switchContent)((0,_Tasks__WEBPACK_IMPORTED_MODULE_1__.Tasks)(project));
        })
        container.appendChild(link);
    });
    return container;
};

const refreshProjectsBar = (newProjects, node, projectBar) => {
    if (newProjects.length !== node.childElementCount) {
        const newLinks = createProjectLinks(newProjects);
        projectBar.replaceChild(newLinks, node);
    };
};

/***/ }),

/***/ "./src/components/Projects.js":
/*!************************************!*\
  !*** ./src/components/Projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Projects": () => (/* binding */ Projects)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _CreateProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateProject */ "./src/components/CreateProject.js");
/* harmony import */ var _Tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tasks */ "./src/components/Tasks.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content */ "./src/components/Content.js");





const Projects = (user) => {
    const container = document.createElement('div');
    container.classList.add('content-container');

    const projectsHeader = createProjectsHeader(user);

    const projects = createProjectsList(user.projects);
    
    container.appendChild(projectsHeader);
    container.appendChild(projects);
    return container;
};

const createProjectsHeader = (user) => {
    const projectHeader = document.createElement('div');
    projectHeader.classList.add('projects-header');

    const heading = document.createElement('div');
    heading.classList.add('projects-heading');
    heading.textContent = `${user.name[0].toUpperCase() + user.name.substring(1)}'s Projects`;

    const projectOptions = document.createElement('div');
    projectOptions.classList.add('project-options-container');

    const createProject = document.createElement('a');
    createProject.classList.add('create-project-link');
    createProject.classList.add('project-option');
    createProject.href = '#';
    createProject.addEventListener('click', () => {
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.showCreate)(projectHeader, document.querySelector('#create-project'), _CreateProject__WEBPACK_IMPORTED_MODULE_1__.CreateProject.bind(null, user));
    });
    createProject.textContent = 'Add Project';

    const showFinished = document.createElement('a');
    showFinished.classList.add('show-finished-link');
    createProject.classList.add('project-option');
    showFinished.href = '#';
    showFinished.textContent = 'Show Finished';

    projectOptions.appendChild(createProject);
    projectOptions.appendChild(showFinished);

    projectHeader.appendChild(heading);
    projectHeader.appendChild(projectOptions);
    return projectHeader;
};


const createProjectsList = (projects) => {
    const container = document.createElement('div');
    container.classList.add('projects-list-container');

    projects.forEach(project => {
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('project-overview');
        
        const heading = document.createElement('div');
        heading.classList.add('project-heading');
        heading.textContent = project.title;
        heading.addEventListener('click', () => {
            (0,_Content__WEBPACK_IMPORTED_MODULE_3__.switchContent)((0,_Tasks__WEBPACK_IMPORTED_MODULE_2__.Tasks)(project));
        });
        
        const tasksContainer = document.createElement('div');
        tasksContainer.classList.add('project-overview-tasks');
        const size = 4;
        const tasks = project.getTaskList().slice(0, size);
        tasks.forEach(task => {
            tasksContainer.appendChild(createProjectTask(task));
        });

        projectContainer.appendChild(heading);
        projectContainer.appendChild(tasksContainer);
        container.appendChild(projectContainer);
    });
    return container;
};

const createProjectTask = (task) => {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('projects-task');

    const taskFinishToggle = document.createElement('input');
    taskFinishToggle.classList.add('task-finished');
    taskFinishToggle.type = 'checkbox';
    taskFinishToggle.checked = task.finished;

    taskFinishToggle.addEventListener('click', () => {
        task.finished = taskFinishToggle.checked;
    })

    const taskTitle = document.createElement('div');
    taskTitle.textContent = task.title;

    taskContainer.appendChild(taskFinishToggle);
    taskContainer.appendChild(taskTitle);
    return taskContainer;
}

/***/ }),

/***/ "./src/components/Task.js":
/*!********************************!*\
  !*** ./src/components/Task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskNode": () => (/* binding */ TaskNode)
/* harmony export */ });
/* harmony import */ var _priority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../priority */ "./src/priority.js");


const TaskNode = (task) => {
    const taskNode = document.createElement('div');
    taskNode.classList.add('task');

    const taskHeader = document.createElement('div');
    taskHeader.classList.add('task-header');
    
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('task-title');
    titleDiv.textContent = task.title;
    
    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('task-priority');
    const priorityColor = document.createElement('img');
    priorityColor.classList.add('priority-color');
    const level = _priority__WEBPACK_IMPORTED_MODULE_0__.PRIORITY.find(p => p.type.toLowerCase() === task.priority);
    priorityColor.src = level.img;
    const priorityType = document.createElement('div');
    priorityType.classList.add('priority-text');
    priorityType.textContent = task.priority.toUpperCase();
    priorityDiv.appendChild(priorityColor);
    priorityDiv.appendChild(priorityType);

    const dueDateDiv = document.createElement('div');
    dueDateDiv.classList.add('task-due-date')
    dueDateDiv.textContent = task.dueDate;

    taskHeader.appendChild(titleDiv);
    taskHeader.appendChild(priorityDiv);
    taskHeader.appendChild(dueDateDiv);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('task-description');
    const label = document.createElement('label');
    label.classList.add('description-label');
    label.textContent = 'Description : ';
    const descriptionText = document.createElement('div');
    descriptionText.classList.add('description-text');
    descriptionText.textContent = task.description; 
    descriptionDiv.appendChild(label);
    descriptionDiv.appendChild(descriptionText);

    const notesDiv = document.createElement('div');
    notesDiv.classList.add('task-notes');
    notesDiv.textContent = task.notes;

    taskNode.appendChild(taskHeader);
    taskNode.appendChild(descriptionDiv);
    taskNode.appendChild(notesDiv);
    return taskNode;
};

/***/ }),

/***/ "./src/components/Tasks.js":
/*!*********************************!*\
  !*** ./src/components/Tasks.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tasks": () => (/* binding */ Tasks)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _CreateTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateTask */ "./src/components/CreateTask.js");
/* harmony import */ var _images_red_circle_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/red_circle.png */ "./src/images/red_circle.png");
/* harmony import */ var _images_yellow_circle_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/yellow_circle.png */ "./src/images/yellow_circle.png");
/* harmony import */ var _images_blue_circle_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/blue_circle.png */ "./src/images/blue_circle.png");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Content */ "./src/components/Content.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Task */ "./src/components/Task.js");








const Tasks = (project) => {
    const container = document.createElement('div');
    container.classList.add('project');
    container.id = project.getTitle();

    const projectHeader = createProjectHeader(project);

    const projectTasks = document.createElement('div');
    projectTasks.classList.add('project-tasks');
    
    const highPriorityTasks = project.getTasksByPriority('high');
    const mediumPriorityTasks = project.getTasksByPriority('medium');
    const lowPriorityTasks = project.getTasksByPriority('low');

    const highPriorityTaskList = createTaskList(highPriorityTasks, _images_red_circle_png__WEBPACK_IMPORTED_MODULE_2__);
    const mediumPriorityTaskList = createTaskList(mediumPriorityTasks, _images_yellow_circle_png__WEBPACK_IMPORTED_MODULE_3__);
    const lowPriorityTaskList = createTaskList(lowPriorityTasks, _images_blue_circle_png__WEBPACK_IMPORTED_MODULE_4__);

    projectTasks.appendChild(highPriorityTaskList);
    projectTasks.appendChild(mediumPriorityTaskList);
    projectTasks.appendChild(lowPriorityTaskList);

    container.appendChild(projectHeader);
    container.appendChild(projectTasks);
    return container;
};

const createProjectHeader = (project) => {
    const projectHeader = document.createElement('div');
    projectHeader.classList.add('project-header');

    const projectTitle = document.createElement('div');
    projectTitle.classList.add('project-title');
    projectTitle.textContent = project.getTitle();

    const projectOptions = document.createElement('div');
    projectOptions.classList.add('project-options-container');

    const createTask = document.createElement('a');
    createTask.classList.add('create-task-link');
    createTask.href = '#';
    createTask.addEventListener('click', () => {
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.showCreate)(projectHeader, document.querySelector('#create-task'), _CreateTask__WEBPACK_IMPORTED_MODULE_1__.CreateTask.bind(null, project));
    });
    createTask.textContent = 'Create Task';

    const showFinshed = document.createElement('a');
    showFinshed.classList.add('show-finished-link');
    showFinshed.href = '#';
    showFinshed.textContent = 'Show Finished';

    projectOptions.appendChild(createTask);
    projectOptions.appendChild(showFinshed);

    projectHeader.appendChild(projectTitle);
    projectHeader.appendChild(projectOptions);
    return projectHeader;
};

const createTaskList = (tasks, level) => {
    const container = document.createElement('div');
    container.classList.add('tasks-list');

    const priority = document.createElement('div');
    priority.classList.add('priority');

    const priorityColor = document.createElement('img');
    priorityColor.classList.add('priority-color');
    priorityColor.src = level;
    
    if (tasks.length > 0) {
        priority.appendChild(priorityColor);
        const priorityType = document.createElement('div');
        priorityType.classList.add('priority-text');
        priorityType.textContent = tasks[0].priority.toUpperCase();
        priority.appendChild(priorityType);
    };

    const ul = document.createElement('ul');
    ul.classList.add('tasks');

    tasks.forEach(task => {
        const li = createListItem(task);
        ul.appendChild(li);
    });

    container.appendChild(priority);
    container.appendChild(ul);
    return container;
};

const createListItem = (task) => {
    const li = document.createElement('li');
    li.classList.add('project-task');

    const taskFinishToggle = document.createElement('input');
    taskFinishToggle.classList.add('task-finished');
    taskFinishToggle.type = 'checkbox';
    taskFinishToggle.checked = task.finished;

    taskFinishToggle.addEventListener('click', () => {
        task.finished = taskFinishToggle.checked;
    });

    const title = document.createElement('div');
    title.classList.add('task-title');
    title.textContent = task.title;
    title.addEventListener('click', () => {
        (0,_Content__WEBPACK_IMPORTED_MODULE_5__.switchContent)((0,_Task__WEBPACK_IMPORTED_MODULE_6__.TaskNode)(task));
    });

    const dueDate = document.createElement('div');
    dueDate.classList.add('task-due-date');
    dueDate.textContent = task.dueDate;

    li.appendChild(taskFinishToggle);
    li.appendChild(title);
    li.appendChild(dueDate);
    return li;
};


/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayUserContent": () => (/* binding */ displayUserContent)
/* harmony export */ });
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Main */ "./src/components/Main.js");




const generateUserContent = (user) => {
    const header = (0,_components_Header__WEBPACK_IMPORTED_MODULE_0__.Header)(user);
    const main = (0,_components_Main__WEBPACK_IMPORTED_MODULE_2__.Main)(user);
    return { header, main };
}

const displayUserContent = (user) => {
    const userContent = generateUserContent(user);
    document.querySelector('header').appendChild(userContent.header);
    document.querySelector('main').appendChild(userContent.main);
    
    const footer = (0,_components_Footer__WEBPACK_IMPORTED_MODULE_1__.Footer)();
    document.querySelector('footer').appendChild(footer);
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/user.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _images_DeadGod_5011_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/DeadGod_5011.png */ "./src/images/DeadGod_5011.png");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");







const task = (0,_task__WEBPACK_IMPORTED_MODULE_0__.Task)('Read', 'Finish Chapter 1', '6/28/22', 'high');
const task1 = (0,_task__WEBPACK_IMPORTED_MODULE_0__.Task)('Dentist Appointment', '4:30pm sharp at 14 Meadows Lane', '6/28/22', 'medium');
const task2 = (0,_task__WEBPACK_IMPORTED_MODULE_0__.Task)('Do dishes', 'Put everything in dishwasher except glasses', '6/28/22', 'low');
const task3 = (0,_task__WEBPACK_IMPORTED_MODULE_0__.Task)('Do this', 'Put everything in dishwasher except glasses', '6/28/22', 'low');
const task4 = (0,_task__WEBPACK_IMPORTED_MODULE_0__.Task)('Do that', 'Put everything in dishwasher except glasses', '6/28/22', 'low');
const task5 = (0,_task__WEBPACK_IMPORTED_MODULE_0__.Task)('Prep food', 'put food in containers', '7/13/22', 'medium');
const task6 = (0,_task__WEBPACK_IMPORTED_MODULE_0__.Task)('Walk dog', 'take dog for walk', '7/13/22', 'high');
const task7 = (0,_task__WEBPACK_IMPORTED_MODULE_0__.Task)('Mop floor', 'mop the floor', '7/13/22', 'low');


const project = (0,_project__WEBPACK_IMPORTED_MODULE_1__.Project)('Project1');
project.addTask(task);
project.addTask(task1);
project.addTask(task2);
project.addTask(task3);

const project1 = (0,_project__WEBPACK_IMPORTED_MODULE_1__.Project)('Project2');
project1.addTask(task);
project1.addTask(task1);
project1.addTask(task2);
project1.addTask(task4);

const project2 = (0,_project__WEBPACK_IMPORTED_MODULE_1__.Project)('Project3');
project2.addTask(task5);

const project3 = (0,_project__WEBPACK_IMPORTED_MODULE_1__.Project)('Project4');
project3.addTask(task6);
project3.addTask(task7);

const user1 = (0,_user__WEBPACK_IMPORTED_MODULE_2__.User)('William Pabitero');
user1.addProfilePicture(_images_DeadGod_5011_png__WEBPACK_IMPORTED_MODULE_4__);
user1.addProject(project);
user1.addProject(project1);
user1.addProject(project2);
user1.addProject(project3);

(0,_display__WEBPACK_IMPORTED_MODULE_3__.displayUserContent)(user1);


/***/ }),

/***/ "./src/priority.js":
/*!*************************!*\
  !*** ./src/priority.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PRIORITY": () => (/* binding */ PRIORITY)
/* harmony export */ });
/* harmony import */ var _src_images_red_circle_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../src/images/red_circle.png */ "./src/images/red_circle.png");
/* harmony import */ var _src_images_yellow_circle_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../src/images/yellow_circle.png */ "./src/images/yellow_circle.png");
/* harmony import */ var _src_images_blue_circle_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../src/images/blue_circle.png */ "./src/images/blue_circle.png");




const PRIORITY = Object.freeze([
    {
        type : 'HIGH',
        img : _src_images_red_circle_png__WEBPACK_IMPORTED_MODULE_0__
    },
    {
        type : 'MEDIUM',
        img : _src_images_yellow_circle_png__WEBPACK_IMPORTED_MODULE_1__
    },
    {
        type : 'LOW',
        img : _src_images_blue_circle_png__WEBPACK_IMPORTED_MODULE_2__
    }
]);

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
const Project = (title) => {
    let self = {};
    self.title = title;
    self.taskList = [];
    self.finishedTasks = [];

    return Object.assign(self, projectFunctions);
};

const projectFunctions = {
    addTask(task) {
        this.taskList.push(task);
    },
    removeTask(task) {
        const index = this.taskList.findIndex(task);
        taskList.slice(index, 1);
    },
    finishTask(task) {
        if (task in this.taskList) {
            this.finishedTasks.push(task);
        };
    },
    getTitle() {
        return this.title;
    },
    getTaskList() {
        return this.taskList;
    },
    getTasksByPriority(priority) {
        if (priority === 'high') return this.getHighPriorityTasks();
        else if (priority === 'medium') return this.getMediumPriorityTasks();
        else if (priority === 'low') return this.getLowPriorityTasks();
    },
    getHighPriorityTasks() {
        const high = [];
        for (let i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i].priority === 'high') high.push(this.taskList[i]);
        };
        return high;
    },
    getMediumPriorityTasks() {
        const medium = [];
        for (let i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i].priority === 'medium') medium.push(this.taskList[i]);
        };
        return medium;
    },
    getLowPriorityTasks() {
        const low = [];
        for (let i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i].priority === 'low') low.push(this.taskList[i]);
        };
        return low;
    },
    getFinishedTasks() {
        return this.finishedTasks;
    }
};

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
const Task = (title, description, dueDate, priority, notes) => {
    let self = {};
    self.title = title;
    self.description = description;
    self.dueDate = dueDate;
    self.priority = priority;
    self.notes = notes;
    self.finished = false;
    
    return Object.assign(self, taskFunctions);
};

const Priority = {
    HIGH: 'High',
    MEDIUM: 'Medium',
    LOW: 'Low'
}

const taskFunctions = {
    setTitle(newTitle) {
        this.title = newTitle;
    },
    toggleFinished() {
        this.finished === true ? this.finished = false : this.finished = true;
    }
};

/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
const User = (name) => {
    let self = {};
    self.name = name;
    self.projects = [];
    self.profilePicture;

    return Object.assign(self, userFunctions);
} 

const userFunctions = {
    addProject(project) {
        this.projects.push(project);
    },
    addProfilePicture(url) {
        if (/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url)) {
            this.profilePicture = url;
        } else {
            throw 'This is not a valid image.';
        }
    }
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeFirstLetterCapital": () => (/* binding */ makeFirstLetterCapital),
/* harmony export */   "showCreate": () => (/* binding */ showCreate)
/* harmony export */ });
const showCreate = (head, toInsert, callback) => {
    if (!toInsert) {
        const createContainer = callback();
        head.parentNode.insertBefore(createContainer, head.nextSibling);
    } else {
        toggleShow(toInsert);
    }
}

const toggleShow = (toInsert) => {
    const createP = toInsert;
    if (createP.style.display === 'none') {
        createP.style.display = 'inline';
    } else {
        createP.style.display = 'none';
    }
}

const makeFirstLetterCapital = (fieldName) => {
    return (fieldName[0].toUpperCase() + fieldName.substring(1));
} 

/***/ }),

/***/ "./src/images/DeadGod_5011.png":
/*!*************************************!*\
  !*** ./src/images/DeadGod_5011.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33a879f7a1b47c4705e4.png";

/***/ }),

/***/ "./src/images/blue_circle.png":
/*!************************************!*\
  !*** ./src/images/blue_circle.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05258b6683df33080678.png";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a5c8976a7492f660636.png";

/***/ }),

/***/ "./src/images/red_circle.png":
/*!***********************************!*\
  !*** ./src/images/red_circle.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "028c962c1ca774d44183.png";

/***/ }),

/***/ "./src/images/yellow_circle.png":
/*!**************************************!*\
  !*** ./src/images/yellow_circle.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e4bc82f5ad072c5c108.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSztBQUNMO0FBQ0E7QUFDQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6RE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQk87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvQ29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9DcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9NYWluLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGVIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvUHJvamVjdEJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgICBcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciwgZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDg1LCA4NSwgODUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLCBcXHJcXG4uZm9vdGVyIHsgXFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMHJlbSk7XFxyXFxufVxcclxcblxcclxcbi5tYWluID4gZGl2IHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDNyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMtYmFyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICAgIGdyaWQtY29sdW1uLWVuZDogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDg1LCA4NSwgODUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmE6dmlzaXRlZCB7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0gSEVBREVSIC0tLS0tLS0tLSAqL1xcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxlZnQsIFxcclxcbi5oZWFkZXItcmlnaHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItcmlnaHQge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0gUFJPRklMRS1IRUFERVIgLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuLnByb2ZpbGUtaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1waWMge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0gTUFJTiAtLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0gUFJPSkVDVFMtQkFSIC0tLS0tLS0tLSAqL1xcclxcblxcclxcbiNwcm9qZWN0cy1iYXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTaG91bGQgYmUgcm93IGJ1dCBkaXNwbGF5cyBhcyBjb2x1bW4gKi9cXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cy1iYXItaGVhZGluZyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saW5rcyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGluayB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLSBDT05URU5UIC0tLS0tLS0tLSAqL1xcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0gUFJPSkVDVFMgLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuLnByb2plY3RzLWhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1oZWFkaW5nIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW9wdGlvbnMtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtbGlzdC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW92ZXJ2aWV3IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNywgMTAzLCAxMDMpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1vdmVydmlldy10YXNrcyB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAuNHJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLXRhc2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0gUFJPSkVDVCAtLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4ucHJvamVjdC1oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1oZWFkaW5nIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10YXNrcyB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAuNHJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWxpc3Qge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZ2FwOiAuNXJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogLjRyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRhc2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA3LCAxMDMsIDEwMyk7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1maW5pc2hlZCB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogLjRyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWR1ZS1kYXRlIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLSBUQVNLIC0tLS0tLS0tLSAqL1xcclxcblxcclxcbi50YXNrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNywgMTAzLCAxMDMpO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWhlYWRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1wcmlvcml0eSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWhlYWRlciA+IC50YXNrLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbi1sYWJlbCB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tIE1FRElBIFFVRVJJRVMgLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcXHJcXG4gICAgLnByb2plY3QtdGFza3Mge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7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bUJBQW1CO0lBQ3ZCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgICBcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciwgZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDg1LCA4NSwgODUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLCBcXHJcXG4uZm9vdGVyIHsgXFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMHJlbSk7XFxyXFxufVxcclxcblxcclxcbi5tYWluID4gZGl2IHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDNyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMtYmFyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICAgIGdyaWQtY29sdW1uLWVuZDogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDg1LCA4NSwgODUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmE6dmlzaXRlZCB7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0gSEVBREVSIC0tLS0tLS0tLSAqL1xcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWxlZnQsIFxcclxcbi5oZWFkZXItcmlnaHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItcmlnaHQge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0gUFJPRklMRS1IRUFERVIgLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuLnByb2ZpbGUtaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1waWMge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0gTUFJTiAtLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0gUFJPSkVDVFMtQkFSIC0tLS0tLS0tLSAqL1xcclxcblxcclxcbiNwcm9qZWN0cy1iYXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTaG91bGQgYmUgcm93IGJ1dCBkaXNwbGF5cyBhcyBjb2x1bW4gKi9cXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cy1iYXItaGVhZGluZyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saW5rcyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGluayB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLSBDT05URU5UIC0tLS0tLS0tLSAqL1xcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0gUFJPSkVDVFMgLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuLnByb2plY3RzLWhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1oZWFkaW5nIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW9wdGlvbnMtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtbGlzdC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW92ZXJ2aWV3IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNywgMTAzLCAxMDMpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1vdmVydmlldy10YXNrcyB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAuNHJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLXRhc2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0gUFJPSkVDVCAtLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4ucHJvamVjdC1oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1oZWFkaW5nIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10YXNrcyB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAuNHJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWxpc3Qge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZ2FwOiAuNXJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogLjRyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRhc2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA3LCAxMDMsIDEwMyk7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1maW5pc2hlZCB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogLjRyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWR1ZS1kYXRlIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLSBUQVNLIC0tLS0tLS0tLSAqL1xcclxcblxcclxcbi50YXNrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNywgMTAzLCAxMDMpO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWhlYWRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1wcmlvcml0eSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWhlYWRlciA+IC50YXNrLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbi1sYWJlbCB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tIE1FRElBIFFVRVJJRVMgLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcXHJcXG4gICAgLnByb2plY3QtdGFza3Mge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IENvbnRlbnQgPSAoY29udGVudCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICBpZiAoIWNvbnRlbnREaXYpIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzd2l0Y2hDb250ZW50KGNvbnRlbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3dpdGNoQ29udGVudCA9IChjb250ZW50KSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbihjb250ZW50KTtcclxufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi9wcm9qZWN0JztcclxuaW1wb3J0IHsgbWFrZUZpcnN0TGV0dGVyQ2FwaXRhbCB9IGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVQcm9qZWN0ID0gKHVzZXIpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLmlkID0gJ2NyZWF0ZS1wcm9qZWN0JztcclxuXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBQcm9qZWN0JztcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUZpZWxkKCd0aXRsZScsICd0ZXh0Jyk7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQ3JlYXRlJztcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykudmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgICAgIHVzZXIuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlRmllbGQgPSAoZmllbGROYW1lLCBpbnB1dFR5cGUpID0+IHtcclxuICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKCdmaWVsZCcpO1xyXG5cclxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgZmllbGROYW1lKTtcclxuICAgIGNvbnN0IGZpcnN0TGV0dGVyQ2FwaXRhbCA9IG1ha2VGaXJzdExldHRlckNhcGl0YWwoZmllbGROYW1lKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYCR7Zmlyc3RMZXR0ZXJDYXBpdGFsfSA6IGA7XHJcblxyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgaW5wdXRUeXBlKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBmaWVsZE5hbWUpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgZmllbGROYW1lKTtcclxuXHJcbiAgICBmaWVsZC5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgICBmaWVsZC5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICByZXR1cm4gZmllbGQ7XHJcbn07IiwiaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuLi90YXNrXCI7XHJcbmltcG9ydCB7IG1ha2VGaXJzdExldHRlckNhcGl0YWwgfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVUYXNrID0gKHByb2plY3QpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLmlkID0gJ2NyZWF0ZS10YXNrJztcclxuXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgXHJcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnQ3JlYXRlIFRhc2snO1xyXG4gICAgXHJcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUZpZWxkKCd0aXRsZScsICd0ZXh0Jyk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZUZpZWxkKCdkZXNjcmlwdGlvbicsICd0ZXh0Jyk7XHJcbiAgICBjb25zdCBkdWVEYXRlID0gY3JlYXRlRmllbGQoJ2R1ZS1kYXRlJywgJ2RhdGUnKTtcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gY3JlYXRlRmllbGQoJ3ByaW9yaXR5JywgJ3RleHQnKTtcclxuICAgIGNvbnN0IG5vdGVzID0gY3JlYXRlRmllbGQoJ25vdGVzJywgJ3RleHQnKTtcclxuICAgIGNvbnN0IHN1Ym1pdCA9IGNyZWF0ZUZpZWxkKCdjcmVhdGUnLCAnYnV0dG9uJyk7XHJcbiAgICBcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChub3Rlcyk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XHJcbiAgICBcclxuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBjb252ZXJ0Rm9ybVRvVGFzayhmb3JtKTtcclxuICAgICAgICBwcm9qZWN0LmFkZFRhc2sobmV3VGFzayk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUZpZWxkID0gKGZpZWxkTmFtZSwgaW5wdXRUeXBlKSA9PiB7XHJcbiAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZmllbGQuY2xhc3NMaXN0LmFkZCgnZmllbGQnKTtcclxuXHJcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGZpZWxkTmFtZSk7XHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGAke21ha2VGaXJzdExldHRlckNhcGl0YWwoZmllbGROYW1lKX0gOiBgO1xyXG5cclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGlucHV0VHlwZSk7XHJcbiAgICBpZiAoaW5wdXQudHlwZSA9PT0gJ2J1dHRvbicpIGlucHV0LnZhbHVlID0gbWFrZUZpcnN0TGV0dGVyQ2FwaXRhbChmaWVsZE5hbWUpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGZpZWxkTmFtZSk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBmaWVsZE5hbWUpO1xyXG5cclxuICAgIGZpZWxkLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgIGZpZWxkLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgIHJldHVybiBmaWVsZDtcclxufTtcclxuXHJcbmNvbnN0IGNvbnZlcnRGb3JtVG9UYXNrID0gKGZvcm0pID0+IHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG4gICAgY29uc3QgdmFsdWVzID0gZm9ybURhdGEudmFsdWVzKCk7XHJcbiAgICBjb25zdCB0YXNrQXJyYXkgPSBbXTtcclxuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XHJcbiAgICAgICAgdGFza0FycmF5LnB1c2godmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFRhc2soLi4udGFza0FycmF5KTtcclxufSIsImV4cG9ydCBjb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1jb250ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb3B5cmlnaHQuaWQgPSAnZm9vdGVyLWNvcHlyaWdodCc7XHJcbiAgICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSAnwqkgRnVsZmlsbCdcclxuXHJcbiAgICBjb25zdCByaWdodHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJpZ2h0cy5pZCA9ICdmb290ZXItcmlnaHRzJztcclxuICAgIHJpZ2h0cy50ZXh0Q29udGVudCA9ICdBbGwgUmlnaHRzIFJlc2VydmVkJztcclxuXHJcbiAgICBjb25zdCB5ZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB5ZWFyLmlkID0gJ2Zvb3Rlci15ZWFyJztcclxuICAgIHllYXIudGV4dENvbnRlbnQgPSAnMjAyMic7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChyaWdodHMpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh5ZWFyKTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG59OyIsImltcG9ydCBsb2dvSWNvbiBmcm9tICcuLi9pbWFnZXMvbG9nby5wbmcnO1xyXG5pbXBvcnQgeyBQcm9maWxlSGVhZGVyIH0gZnJvbSAnLi9Qcm9maWxlSGVhZGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAodXNlcikgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XHJcblxyXG4gICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGVmdC5jbGFzc0xpc3QuYWRkKCdoZWFkZXItbGVmdCcpO1xyXG5cclxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xyXG4gICAgbG9nby5zcmMgPSBsb2dvSWNvbjtcclxuXHJcbiAgICBjb25zdCBsb2dvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbG9nb05hbWUuY2xhc3NMaXN0LmFkZCgnbG9nby1uYW1lJyk7XHJcbiAgICBsb2dvTmFtZS50ZXh0Q29udGVudCA9ICdGdWxGaWxsJztcclxuICAgIGxlZnQuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgICBsZWZ0LmFwcGVuZENoaWxkKGxvZ29OYW1lKTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByaWdodC5jbGFzc0xpc3QuYWRkKCdoZWFkZXItcmlnaHQnKTtcclxuICAgIHJpZ2h0LmFwcGVuZENoaWxkKFByb2ZpbGVIZWFkZXIodXNlcikpO1xyXG4gICAgXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHQpO1xyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxufSIsImltcG9ydCB7IFByb2plY3RCYXIgfSBmcm9tICcuL1Byb2plY3RCYXInO1xyXG5pbXBvcnQgeyBDb250ZW50IH0gZnJvbSAnLi9Db250ZW50JztcclxuaW1wb3J0IHsgUHJvamVjdHMgfSBmcm9tICcuL1Byb2plY3RzJztcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluID0gKHVzZXIpID0+IHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcclxuICAgIGNvbnN0IG5hdmJhciA9IFByb2plY3RCYXIodXNlcik7XHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IENvbnRlbnQoUHJvamVjdHModXNlcikpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChuYXZiYXIpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XHJcbiAgICByZXR1cm4gbWFpbjtcclxufSIsImltcG9ydCB7IENvbnRlbnQgfSBmcm9tIFwiLi9Db250ZW50XCI7XHJcbmltcG9ydCB7IFByb2plY3RzIH0gZnJvbSBcIi4vUHJvamVjdHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9maWxlSGVhZGVyID0gKHVzZXIpID0+IHtcclxuICAgIGNvbnN0IHByb2ZpbGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2ZpbGVIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvZmlsZS1oZWFkZXInKTtcclxuICAgIHByb2ZpbGVIZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgQ29udGVudChQcm9qZWN0cyh1c2VyKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBwcm9maWxlUGljRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBwcm9maWxlUGljRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2ZpbGUtcGljJyk7XHJcbiAgICBwcm9maWxlUGljRGl2LnNyYyA9IHVzZXIucHJvZmlsZVBpY3R1cmU7XHJcbiAgICBwcm9maWxlUGljRGl2LnN0eWxlLndpZHRoID0gJzUwcHgnO1xyXG5cclxuICAgIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5hbWVEaXYuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xyXG4gICAgbmFtZURpdi50ZXh0Q29udGVudCA9IHVzZXIubmFtZTtcclxuXHJcbiAgICBwcm9maWxlSGVhZGVyLmFwcGVuZENoaWxkKHByb2ZpbGVQaWNEaXYpO1xyXG4gICAgcHJvZmlsZUhlYWRlci5hcHBlbmRDaGlsZChuYW1lRGl2KTtcclxuICAgIHJldHVybiBwcm9maWxlSGVhZGVyO1xyXG59XHJcbiIsImltcG9ydCB7IENvbnRlbnQsIHN3aXRjaENvbnRlbnQgfSBmcm9tICcuL0NvbnRlbnQnO1xyXG5pbXBvcnQgeyBUYXNrcyB9IGZyb20gJy4vVGFza3MnO1xyXG5pbXBvcnQgeyBQcm9qZWN0cyB9IGZyb20gJy4vUHJvamVjdHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3RCYXIgPSAodXNlcikgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvamVjdEJhci5pZCA9ICdwcm9qZWN0cy1iYXInO1xyXG5cclxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlYWRpbmcuaWQgPSAncHJvamVjdHMtYmFyLWhlYWRpbmcnO1xyXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdZb3VyIFByb2plY3RzJztcclxuICAgIHByb2plY3RCYXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdHMgPSB1c2VyLnByb2plY3RzO1xyXG4gICAgY29uc3QgbGlua3MgPSBjcmVhdGVQcm9qZWN0TGlua3MocHJvamVjdHMpO1xyXG4gICAgcHJvamVjdEJhci5hcHBlbmRDaGlsZChsaW5rcyk7XHJcblxyXG4gICAgY29uc3QgYWxsUHJvamVjdHNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgYWxsUHJvamVjdHNMaW5rLmNsYXNzTGlzdC5hZGQoJ2FsbC1wcm9qZWN0cy1saW5rJyk7XHJcbiAgICBhbGxQcm9qZWN0c0xpbmsudGV4dENvbnRlbnQgPSAnVmlldyBQcm9qZWN0cyc7XHJcbiAgICBhbGxQcm9qZWN0c0xpbmsuaHJlZiA9ICcjJztcclxuICAgIGFsbFByb2plY3RzTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBDb250ZW50KFByb2plY3RzKHVzZXIpKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0cyA9IHVzZXIucHJvamVjdHM7XHJcbiAgICAgICAgY29uc3QgcmVwbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpbmtzJyk7XHJcbiAgICAgICAgcmVmcmVzaFByb2plY3RzQmFyKG5ld1Byb2plY3RzLCByZXBsYWNlLCBwcm9qZWN0QmFyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHByb2plY3RCYXIuYXBwZW5kQ2hpbGQoYWxsUHJvamVjdHNMaW5rKTtcclxuICAgIHJldHVybiBwcm9qZWN0QmFyO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlUHJvamVjdExpbmtzID0gKHByb2plY3RzKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpbmtzJyk7XHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpbmsnKTtcclxuICAgICAgICBsaW5rLmhyZWYgPSAnIyc7XHJcbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcclxuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2hDb250ZW50KFRhc2tzKHByb2plY3QpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxufTtcclxuXHJcbmNvbnN0IHJlZnJlc2hQcm9qZWN0c0JhciA9IChuZXdQcm9qZWN0cywgbm9kZSwgcHJvamVjdEJhcikgPT4ge1xyXG4gICAgaWYgKG5ld1Byb2plY3RzLmxlbmd0aCAhPT0gbm9kZS5jaGlsZEVsZW1lbnRDb3VudCkge1xyXG4gICAgICAgIGNvbnN0IG5ld0xpbmtzID0gY3JlYXRlUHJvamVjdExpbmtzKG5ld1Byb2plY3RzKTtcclxuICAgICAgICBwcm9qZWN0QmFyLnJlcGxhY2VDaGlsZChuZXdMaW5rcywgbm9kZSk7XHJcbiAgICB9O1xyXG59OyIsImltcG9ydCB7IHNob3dDcmVhdGUgfSBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IENyZWF0ZVByb2plY3QgfSBmcm9tICcuL0NyZWF0ZVByb2plY3QnO1xyXG5pbXBvcnQgeyBUYXNrcyB9IGZyb20gJy4vVGFza3MnO1xyXG5pbXBvcnQgeyBzd2l0Y2hDb250ZW50IH0gZnJvbSAnLi9Db250ZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0cyA9ICh1c2VyKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RzSGVhZGVyID0gY3JlYXRlUHJvamVjdHNIZWFkZXIodXNlcik7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdHMgPSBjcmVhdGVQcm9qZWN0c0xpc3QodXNlci5wcm9qZWN0cyk7XHJcbiAgICBcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRlcik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVByb2plY3RzSGVhZGVyID0gKHVzZXIpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtaGVhZGVyJyk7XHJcblxyXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy1oZWFkaW5nJyk7XHJcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gYCR7dXNlci5uYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyB1c2VyLm5hbWUuc3Vic3RyaW5nKDEpfSdzIFByb2plY3RzYDtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0T3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvamVjdE9wdGlvbnMuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1vcHRpb25zLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBjcmVhdGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1wcm9qZWN0LWxpbmsnKTtcclxuICAgIGNyZWF0ZVByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1vcHRpb24nKTtcclxuICAgIGNyZWF0ZVByb2plY3QuaHJlZiA9ICcjJztcclxuICAgIGNyZWF0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgc2hvd0NyZWF0ZShwcm9qZWN0SGVhZGVyLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXByb2plY3QnKSwgQ3JlYXRlUHJvamVjdC5iaW5kKG51bGwsIHVzZXIpKTtcclxuICAgIH0pO1xyXG4gICAgY3JlYXRlUHJvamVjdC50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XHJcblxyXG4gICAgY29uc3Qgc2hvd0ZpbmlzaGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgc2hvd0ZpbmlzaGVkLmNsYXNzTGlzdC5hZGQoJ3Nob3ctZmluaXNoZWQtbGluaycpO1xyXG4gICAgY3JlYXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW9wdGlvbicpO1xyXG4gICAgc2hvd0ZpbmlzaGVkLmhyZWYgPSAnIyc7XHJcbiAgICBzaG93RmluaXNoZWQudGV4dENvbnRlbnQgPSAnU2hvdyBGaW5pc2hlZCc7XHJcblxyXG4gICAgcHJvamVjdE9wdGlvbnMuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdCk7XHJcbiAgICBwcm9qZWN0T3B0aW9ucy5hcHBlbmRDaGlsZChzaG93RmluaXNoZWQpO1xyXG5cclxuICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RPcHRpb25zKTtcclxuICAgIHJldHVybiBwcm9qZWN0SGVhZGVyO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZVByb2plY3RzTGlzdCA9IChwcm9qZWN0cykgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtbGlzdC1jb250YWluZXInKTtcclxuXHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtb3ZlcnZpZXcnKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWhlYWRpbmcnKTtcclxuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcclxuICAgICAgICBoZWFkaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2hDb250ZW50KFRhc2tzKHByb2plY3QpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtb3ZlcnZpZXctdGFza3MnKTtcclxuICAgICAgICBjb25zdCBzaXplID0gNDtcclxuICAgICAgICBjb25zdCB0YXNrcyA9IHByb2plY3QuZ2V0VGFza0xpc3QoKS5zbGljZSgwLCBzaXplKTtcclxuICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0VGFzayh0YXNrKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrc0NvbnRhaW5lcik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlUHJvamVjdFRhc2sgPSAodGFzaykgPT4ge1xyXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy10YXNrJyk7XHJcblxyXG4gICAgY29uc3QgdGFza0ZpbmlzaFRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0YXNrRmluaXNoVG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZmluaXNoZWQnKTtcclxuICAgIHRhc2tGaW5pc2hUb2dnbGUudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgICB0YXNrRmluaXNoVG9nZ2xlLmNoZWNrZWQgPSB0YXNrLmZpbmlzaGVkO1xyXG5cclxuICAgIHRhc2tGaW5pc2hUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgdGFzay5maW5pc2hlZCA9IHRhc2tGaW5pc2hUb2dnbGUuY2hlY2tlZDtcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xyXG5cclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0ZpbmlzaFRvZ2dsZSk7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XHJcbiAgICByZXR1cm4gdGFza0NvbnRhaW5lcjtcclxufSIsImltcG9ydCB7IFBSSU9SSVRZIH0gZnJvbSBcIi4uL3ByaW9yaXR5XCI7XHJcblxyXG5leHBvcnQgY29uc3QgVGFza05vZGUgPSAodGFzaykgPT4ge1xyXG4gICAgY29uc3QgdGFza05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tOb2RlLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuXHJcbiAgICBjb25zdCB0YXNrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2staGVhZGVyJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XHJcbiAgICB0aXRsZURpdi50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcbiAgICBcclxuICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLXByaW9yaXR5Jyk7XHJcbiAgICBjb25zdCBwcmlvcml0eUNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBwcmlvcml0eUNvbG9yLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWNvbG9yJyk7XHJcbiAgICBjb25zdCBsZXZlbCA9IFBSSU9SSVRZLmZpbmQocCA9PiBwLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gdGFzay5wcmlvcml0eSk7XHJcbiAgICBwcmlvcml0eUNvbG9yLnNyYyA9IGxldmVsLmltZztcclxuICAgIGNvbnN0IHByaW9yaXR5VHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJpb3JpdHlUeXBlLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LXRleHQnKTtcclxuICAgIHByaW9yaXR5VHlwZS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHkudG9VcHBlckNhc2UoKTtcclxuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5Q29sb3IpO1xyXG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlUeXBlKTtcclxuXHJcbiAgICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZHVlLWRhdGUnKVxyXG4gICAgZHVlRGF0ZURpdi50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcclxuXHJcbiAgICB0YXNrSGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcclxuICAgIHRhc2tIZWFkZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xyXG4gICAgdGFza0hlYWRlci5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjcmlwdGlvbicpO1xyXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24tbGFiZWwnKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uIDogJztcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVzY3JpcHRpb25UZXh0LmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uLXRleHQnKTtcclxuICAgIGRlc2NyaXB0aW9uVGV4dC50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247IFxyXG4gICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0KTtcclxuXHJcbiAgICBjb25zdCBub3Rlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbm90ZXNEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1ub3RlcycpO1xyXG4gICAgbm90ZXNEaXYudGV4dENvbnRlbnQgPSB0YXNrLm5vdGVzO1xyXG5cclxuICAgIHRhc2tOb2RlLmFwcGVuZENoaWxkKHRhc2tIZWFkZXIpO1xyXG4gICAgdGFza05vZGUuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xyXG4gICAgdGFza05vZGUuYXBwZW5kQ2hpbGQobm90ZXNEaXYpO1xyXG4gICAgcmV0dXJuIHRhc2tOb2RlO1xyXG59OyIsImltcG9ydCB7IHNob3dDcmVhdGUgfSBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IENyZWF0ZVRhc2sgfSBmcm9tICcuL0NyZWF0ZVRhc2snO1xyXG5pbXBvcnQgaGlnaCBmcm9tICcuLi9pbWFnZXMvcmVkX2NpcmNsZS5wbmcnO1xyXG5pbXBvcnQgbWVkaXVtIGZyb20gJy4uL2ltYWdlcy95ZWxsb3dfY2lyY2xlLnBuZyc7XHJcbmltcG9ydCBsb3cgZnJvbSAnLi4vaW1hZ2VzL2JsdWVfY2lyY2xlLnBuZyc7XHJcbmltcG9ydCB7IHN3aXRjaENvbnRlbnQgfSBmcm9tICcuL0NvbnRlbnQnO1xyXG5pbXBvcnQgeyBUYXNrTm9kZSB9IGZyb20gJy4vVGFzayc7XHJcblxyXG5leHBvcnQgY29uc3QgVGFza3MgPSAocHJvamVjdCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xyXG4gICAgY29udGFpbmVyLmlkID0gcHJvamVjdC5nZXRUaXRsZSgpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBjcmVhdGVQcm9qZWN0SGVhZGVyKHByb2plY3QpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvamVjdFRhc2tzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGFza3MnKTtcclxuICAgIFxyXG4gICAgY29uc3QgaGlnaFByaW9yaXR5VGFza3MgPSBwcm9qZWN0LmdldFRhc2tzQnlQcmlvcml0eSgnaGlnaCcpO1xyXG4gICAgY29uc3QgbWVkaXVtUHJpb3JpdHlUYXNrcyA9IHByb2plY3QuZ2V0VGFza3NCeVByaW9yaXR5KCdtZWRpdW0nKTtcclxuICAgIGNvbnN0IGxvd1ByaW9yaXR5VGFza3MgPSBwcm9qZWN0LmdldFRhc2tzQnlQcmlvcml0eSgnbG93Jyk7XHJcblxyXG4gICAgY29uc3QgaGlnaFByaW9yaXR5VGFza0xpc3QgPSBjcmVhdGVUYXNrTGlzdChoaWdoUHJpb3JpdHlUYXNrcywgaGlnaCk7XHJcbiAgICBjb25zdCBtZWRpdW1Qcmlvcml0eVRhc2tMaXN0ID0gY3JlYXRlVGFza0xpc3QobWVkaXVtUHJpb3JpdHlUYXNrcywgbWVkaXVtKTtcclxuICAgIGNvbnN0IGxvd1ByaW9yaXR5VGFza0xpc3QgPSBjcmVhdGVUYXNrTGlzdChsb3dQcmlvcml0eVRhc2tzLCBsb3cpO1xyXG5cclxuICAgIHByb2plY3RUYXNrcy5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHlUYXNrTGlzdCk7XHJcbiAgICBwcm9qZWN0VGFza3MuYXBwZW5kQ2hpbGQobWVkaXVtUHJpb3JpdHlUYXNrTGlzdCk7XHJcbiAgICBwcm9qZWN0VGFza3MuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHlUYXNrTGlzdCk7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RUYXNrcyk7XHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlUHJvamVjdEhlYWRlciA9IChwcm9qZWN0KSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaGVhZGVyJyk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xyXG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0T3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW9wdGlvbnMtY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgY3JlYXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGNyZWF0ZVRhc2suY2xhc3NMaXN0LmFkZCgnY3JlYXRlLXRhc2stbGluaycpO1xyXG4gICAgY3JlYXRlVGFzay5ocmVmID0gJyMnO1xyXG4gICAgY3JlYXRlVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBzaG93Q3JlYXRlKHByb2plY3RIZWFkZXIsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtdGFzaycpLCBDcmVhdGVUYXNrLmJpbmQobnVsbCwgcHJvamVjdCkpO1xyXG4gICAgfSk7XHJcbiAgICBjcmVhdGVUYXNrLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBUYXNrJztcclxuXHJcbiAgICBjb25zdCBzaG93Rmluc2hlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIHNob3dGaW5zaGVkLmNsYXNzTGlzdC5hZGQoJ3Nob3ctZmluaXNoZWQtbGluaycpO1xyXG4gICAgc2hvd0ZpbnNoZWQuaHJlZiA9ICcjJztcclxuICAgIHNob3dGaW5zaGVkLnRleHRDb250ZW50ID0gJ1Nob3cgRmluaXNoZWQnO1xyXG5cclxuICAgIHByb2plY3RPcHRpb25zLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2spO1xyXG4gICAgcHJvamVjdE9wdGlvbnMuYXBwZW5kQ2hpbGQoc2hvd0ZpbnNoZWQpO1xyXG5cclxuICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxuICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIHByb2plY3RIZWFkZXI7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVUYXNrTGlzdCA9ICh0YXNrcywgbGV2ZWwpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tzLWxpc3QnKTtcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eUNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBwcmlvcml0eUNvbG9yLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWNvbG9yJyk7XHJcbiAgICBwcmlvcml0eUNvbG9yLnNyYyA9IGxldmVsO1xyXG4gICAgXHJcbiAgICBpZiAodGFza3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5Q29sb3IpO1xyXG4gICAgICAgIGNvbnN0IHByaW9yaXR5VHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHByaW9yaXR5VHlwZS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS10ZXh0Jyk7XHJcbiAgICAgICAgcHJpb3JpdHlUeXBlLnRleHRDb250ZW50ID0gdGFza3NbMF0ucHJpb3JpdHkudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eVR5cGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICB1bC5jbGFzc0xpc3QuYWRkKCd0YXNrcycpO1xyXG5cclxuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgY29uc3QgbGkgPSBjcmVhdGVMaXN0SXRlbSh0YXNrKTtcclxuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHVsKTtcclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVMaXN0SXRlbSA9ICh0YXNrKSA9PiB7XHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsaS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhc2snKTtcclxuXHJcbiAgICBjb25zdCB0YXNrRmluaXNoVG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRhc2tGaW5pc2hUb2dnbGUuY2xhc3NMaXN0LmFkZCgndGFzay1maW5pc2hlZCcpO1xyXG4gICAgdGFza0ZpbmlzaFRvZ2dsZS50eXBlID0gJ2NoZWNrYm94JztcclxuICAgIHRhc2tGaW5pc2hUb2dnbGUuY2hlY2tlZCA9IHRhc2suZmluaXNoZWQ7XHJcblxyXG4gICAgdGFza0ZpbmlzaFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB0YXNrLmZpbmlzaGVkID0gdGFza0ZpbmlzaFRvZ2dsZS5jaGVja2VkO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcclxuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaENvbnRlbnQoVGFza05vZGUodGFzaykpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWR1ZS1kYXRlJyk7XHJcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xyXG5cclxuICAgIGxpLmFwcGVuZENoaWxkKHRhc2tGaW5pc2hUb2dnbGUpO1xyXG4gICAgbGkuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgbGkuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XHJcbiAgICByZXR1cm4gbGk7XHJcbn07XHJcbiIsImltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvRm9vdGVyJztcclxuaW1wb3J0IHsgTWFpbiB9IGZyb20gJy4vY29tcG9uZW50cy9NYWluJztcclxuXHJcbmNvbnN0IGdlbmVyYXRlVXNlckNvbnRlbnQgPSAodXNlcikgPT4ge1xyXG4gICAgY29uc3QgaGVhZGVyID0gSGVhZGVyKHVzZXIpO1xyXG4gICAgY29uc3QgbWFpbiA9IE1haW4odXNlcik7XHJcbiAgICByZXR1cm4geyBoZWFkZXIsIG1haW4gfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRpc3BsYXlVc2VyQ29udGVudCA9ICh1c2VyKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyQ29udGVudCA9IGdlbmVyYXRlVXNlckNvbnRlbnQodXNlcik7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5hcHBlbmRDaGlsZCh1c2VyQ29udGVudC5oZWFkZXIpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmFwcGVuZENoaWxkKHVzZXJDb250ZW50Lm1haW4pO1xyXG4gICAgXHJcbiAgICBjb25zdCBmb290ZXIgPSBGb290ZXIoKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpLmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn07IiwiaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vdGFzayc7XHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHsgZGlzcGxheVVzZXJDb250ZW50IH0gZnJvbSAnLi9kaXNwbGF5JztcclxuaW1wb3J0IHBmcDEgZnJvbSAnLi9pbWFnZXMvRGVhZEdvZF81MDExLnBuZyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGVzLmNzcyc7XHJcblxyXG5jb25zdCB0YXNrID0gVGFzaygnUmVhZCcsICdGaW5pc2ggQ2hhcHRlciAxJywgJzYvMjgvMjInLCAnaGlnaCcpO1xyXG5jb25zdCB0YXNrMSA9IFRhc2soJ0RlbnRpc3QgQXBwb2ludG1lbnQnLCAnNDozMHBtIHNoYXJwIGF0IDE0IE1lYWRvd3MgTGFuZScsICc2LzI4LzIyJywgJ21lZGl1bScpO1xyXG5jb25zdCB0YXNrMiA9IFRhc2soJ0RvIGRpc2hlcycsICdQdXQgZXZlcnl0aGluZyBpbiBkaXNod2FzaGVyIGV4Y2VwdCBnbGFzc2VzJywgJzYvMjgvMjInLCAnbG93Jyk7XHJcbmNvbnN0IHRhc2szID0gVGFzaygnRG8gdGhpcycsICdQdXQgZXZlcnl0aGluZyBpbiBkaXNod2FzaGVyIGV4Y2VwdCBnbGFzc2VzJywgJzYvMjgvMjInLCAnbG93Jyk7XHJcbmNvbnN0IHRhc2s0ID0gVGFzaygnRG8gdGhhdCcsICdQdXQgZXZlcnl0aGluZyBpbiBkaXNod2FzaGVyIGV4Y2VwdCBnbGFzc2VzJywgJzYvMjgvMjInLCAnbG93Jyk7XHJcbmNvbnN0IHRhc2s1ID0gVGFzaygnUHJlcCBmb29kJywgJ3B1dCBmb29kIGluIGNvbnRhaW5lcnMnLCAnNy8xMy8yMicsICdtZWRpdW0nKTtcclxuY29uc3QgdGFzazYgPSBUYXNrKCdXYWxrIGRvZycsICd0YWtlIGRvZyBmb3Igd2FsaycsICc3LzEzLzIyJywgJ2hpZ2gnKTtcclxuY29uc3QgdGFzazcgPSBUYXNrKCdNb3AgZmxvb3InLCAnbW9wIHRoZSBmbG9vcicsICc3LzEzLzIyJywgJ2xvdycpO1xyXG5cclxuXHJcbmNvbnN0IHByb2plY3QgPSBQcm9qZWN0KCdQcm9qZWN0MScpO1xyXG5wcm9qZWN0LmFkZFRhc2sodGFzayk7XHJcbnByb2plY3QuYWRkVGFzayh0YXNrMSk7XHJcbnByb2plY3QuYWRkVGFzayh0YXNrMik7XHJcbnByb2plY3QuYWRkVGFzayh0YXNrMyk7XHJcblxyXG5jb25zdCBwcm9qZWN0MSA9IFByb2plY3QoJ1Byb2plY3QyJyk7XHJcbnByb2plY3QxLmFkZFRhc2sodGFzayk7XHJcbnByb2plY3QxLmFkZFRhc2sodGFzazEpO1xyXG5wcm9qZWN0MS5hZGRUYXNrKHRhc2syKTtcclxucHJvamVjdDEuYWRkVGFzayh0YXNrNCk7XHJcblxyXG5jb25zdCBwcm9qZWN0MiA9IFByb2plY3QoJ1Byb2plY3QzJyk7XHJcbnByb2plY3QyLmFkZFRhc2sodGFzazUpO1xyXG5cclxuY29uc3QgcHJvamVjdDMgPSBQcm9qZWN0KCdQcm9qZWN0NCcpO1xyXG5wcm9qZWN0My5hZGRUYXNrKHRhc2s2KTtcclxucHJvamVjdDMuYWRkVGFzayh0YXNrNyk7XHJcblxyXG5jb25zdCB1c2VyMSA9IFVzZXIoJ1dpbGxpYW0gUGFiaXRlcm8nKTtcclxudXNlcjEuYWRkUHJvZmlsZVBpY3R1cmUocGZwMSk7XHJcbnVzZXIxLmFkZFByb2plY3QocHJvamVjdCk7XHJcbnVzZXIxLmFkZFByb2plY3QocHJvamVjdDEpO1xyXG51c2VyMS5hZGRQcm9qZWN0KHByb2plY3QyKTtcclxudXNlcjEuYWRkUHJvamVjdChwcm9qZWN0Myk7XHJcblxyXG5kaXNwbGF5VXNlckNvbnRlbnQodXNlcjEpO1xyXG4iLCJpbXBvcnQgaGlnaCBmcm9tICcvc3JjL2ltYWdlcy9yZWRfY2lyY2xlLnBuZyc7XHJcbmltcG9ydCBtZWRpdW0gZnJvbSAnL3NyYy9pbWFnZXMveWVsbG93X2NpcmNsZS5wbmcnO1xyXG5pbXBvcnQgbG93IGZyb20gJy9zcmMvaW1hZ2VzL2JsdWVfY2lyY2xlLnBuZyc7XHJcblxyXG5leHBvcnQgY29uc3QgUFJJT1JJVFkgPSBPYmplY3QuZnJlZXplKFtcclxuICAgIHtcclxuICAgICAgICB0eXBlIDogJ0hJR0gnLFxyXG4gICAgICAgIGltZyA6IGhpZ2hcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZSA6ICdNRURJVU0nLFxyXG4gICAgICAgIGltZyA6IG1lZGl1bVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0eXBlIDogJ0xPVycsXHJcbiAgICAgICAgaW1nIDogbG93XHJcbiAgICB9XHJcbl0pOyIsImV4cG9ydCBjb25zdCBQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XHJcbiAgICBsZXQgc2VsZiA9IHt9O1xyXG4gICAgc2VsZi50aXRsZSA9IHRpdGxlO1xyXG4gICAgc2VsZi50YXNrTGlzdCA9IFtdO1xyXG4gICAgc2VsZi5maW5pc2hlZFRhc2tzID0gW107XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oc2VsZiwgcHJvamVjdEZ1bmN0aW9ucyk7XHJcbn07XHJcblxyXG5jb25zdCBwcm9qZWN0RnVuY3Rpb25zID0ge1xyXG4gICAgYWRkVGFzayh0YXNrKSB7XHJcbiAgICAgICAgdGhpcy50YXNrTGlzdC5wdXNoKHRhc2spO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZVRhc2sodGFzaykge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy50YXNrTGlzdC5maW5kSW5kZXgodGFzayk7XHJcbiAgICAgICAgdGFza0xpc3Quc2xpY2UoaW5kZXgsIDEpO1xyXG4gICAgfSxcclxuICAgIGZpbmlzaFRhc2sodGFzaykge1xyXG4gICAgICAgIGlmICh0YXNrIGluIHRoaXMudGFza0xpc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hlZFRhc2tzLnB1c2godGFzayk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBnZXRUaXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcclxuICAgIH0sXHJcbiAgICBnZXRUYXNrTGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YXNrTGlzdDtcclxuICAgIH0sXHJcbiAgICBnZXRUYXNrc0J5UHJpb3JpdHkocHJpb3JpdHkpIHtcclxuICAgICAgICBpZiAocHJpb3JpdHkgPT09ICdoaWdoJykgcmV0dXJuIHRoaXMuZ2V0SGlnaFByaW9yaXR5VGFza3MoKTtcclxuICAgICAgICBlbHNlIGlmIChwcmlvcml0eSA9PT0gJ21lZGl1bScpIHJldHVybiB0aGlzLmdldE1lZGl1bVByaW9yaXR5VGFza3MoKTtcclxuICAgICAgICBlbHNlIGlmIChwcmlvcml0eSA9PT0gJ2xvdycpIHJldHVybiB0aGlzLmdldExvd1ByaW9yaXR5VGFza3MoKTtcclxuICAgIH0sXHJcbiAgICBnZXRIaWdoUHJpb3JpdHlUYXNrcygpIHtcclxuICAgICAgICBjb25zdCBoaWdoID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhc2tMaXN0W2ldLnByaW9yaXR5ID09PSAnaGlnaCcpIGhpZ2gucHVzaCh0aGlzLnRhc2tMaXN0W2ldKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBoaWdoO1xyXG4gICAgfSxcclxuICAgIGdldE1lZGl1bVByaW9yaXR5VGFza3MoKSB7XHJcbiAgICAgICAgY29uc3QgbWVkaXVtID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhc2tMaXN0W2ldLnByaW9yaXR5ID09PSAnbWVkaXVtJykgbWVkaXVtLnB1c2godGhpcy50YXNrTGlzdFtpXSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbWVkaXVtO1xyXG4gICAgfSxcclxuICAgIGdldExvd1ByaW9yaXR5VGFza3MoKSB7XHJcbiAgICAgICAgY29uc3QgbG93ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhc2tMaXN0W2ldLnByaW9yaXR5ID09PSAnbG93JykgbG93LnB1c2godGhpcy50YXNrTGlzdFtpXSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbG93O1xyXG4gICAgfSxcclxuICAgIGdldEZpbmlzaGVkVGFza3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluaXNoZWRUYXNrcztcclxuICAgIH1cclxufTsiLCJleHBvcnQgY29uc3QgVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcykgPT4ge1xyXG4gICAgbGV0IHNlbGYgPSB7fTtcclxuICAgIHNlbGYudGl0bGUgPSB0aXRsZTtcclxuICAgIHNlbGYuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHNlbGYuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICBzZWxmLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICBzZWxmLm5vdGVzID0gbm90ZXM7XHJcbiAgICBzZWxmLmZpbmlzaGVkID0gZmFsc2U7XHJcbiAgICBcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHNlbGYsIHRhc2tGdW5jdGlvbnMpO1xyXG59O1xyXG5cclxuY29uc3QgUHJpb3JpdHkgPSB7XHJcbiAgICBISUdIOiAnSGlnaCcsXHJcbiAgICBNRURJVU06ICdNZWRpdW0nLFxyXG4gICAgTE9XOiAnTG93J1xyXG59XHJcblxyXG5jb25zdCB0YXNrRnVuY3Rpb25zID0ge1xyXG4gICAgc2V0VGl0bGUobmV3VGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlRmluaXNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5maW5pc2hlZCA9PT0gdHJ1ZSA/IHRoaXMuZmluaXNoZWQgPSBmYWxzZSA6IHRoaXMuZmluaXNoZWQgPSB0cnVlO1xyXG4gICAgfVxyXG59OyIsImV4cG9ydCBjb25zdCBVc2VyID0gKG5hbWUpID0+IHtcclxuICAgIGxldCBzZWxmID0ge307XHJcbiAgICBzZWxmLm5hbWUgPSBuYW1lO1xyXG4gICAgc2VsZi5wcm9qZWN0cyA9IFtdO1xyXG4gICAgc2VsZi5wcm9maWxlUGljdHVyZTtcclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihzZWxmLCB1c2VyRnVuY3Rpb25zKTtcclxufSBcclxuXHJcbmNvbnN0IHVzZXJGdW5jdGlvbnMgPSB7XHJcbiAgICBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgICB9LFxyXG4gICAgYWRkUHJvZmlsZVBpY3R1cmUodXJsKSB7XHJcbiAgICAgICAgaWYgKC9cXC4oanBnfGpwZWd8cG5nfHdlYnB8YXZpZnxnaWZ8c3ZnKSQvLnRlc3QodXJsKSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2ZpbGVQaWN0dXJlID0gdXJsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93ICdUaGlzIGlzIG5vdCBhIHZhbGlkIGltYWdlLic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IHNob3dDcmVhdGUgPSAoaGVhZCwgdG9JbnNlcnQsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICBpZiAoIXRvSW5zZXJ0KSB7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlQ29udGFpbmVyID0gY2FsbGJhY2soKTtcclxuICAgICAgICBoZWFkLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNyZWF0ZUNvbnRhaW5lciwgaGVhZC5uZXh0U2libGluZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvZ2dsZVNob3codG9JbnNlcnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB0b2dnbGVTaG93ID0gKHRvSW5zZXJ0KSA9PiB7XHJcbiAgICBjb25zdCBjcmVhdGVQID0gdG9JbnNlcnQ7XHJcbiAgICBpZiAoY3JlYXRlUC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgICAgICBjcmVhdGVQLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3JlYXRlUC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFrZUZpcnN0TGV0dGVyQ2FwaXRhbCA9IChmaWVsZE5hbWUpID0+IHtcclxuICAgIHJldHVybiAoZmllbGROYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyBmaWVsZE5hbWUuc3Vic3RyaW5nKDEpKTtcclxufSAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=