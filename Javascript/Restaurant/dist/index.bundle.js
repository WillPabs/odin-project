"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: Arial;   \r\n}\r\n\r\nbody {\r\n    background: url('https://images.unsplash.com/photo-1518188770546-efd25d4ca263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80');\r\n    background-size: fill;\r\n    min-height: 100vh;\r\n    min-width: 700px;\r\n    width: 100vw;\r\n    overflow-x: hidden;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nnav {\r\n    display: grid;\r\n    justify-self: center;\r\n    justify-items: center;\r\n    align-items: end;\r\n    height: fit-content;\r\n    padding-top: 10px;\r\n    background: rgba(0, 0, 0, 1);\r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template-rows: auto 8fr;\r\n    justify-items: center;\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.container {\r\n    color: black;\r\n    display: grid;\r\n    grid-template-rows: repeat(auto, 1fr);\r\n    background: rgba(0, 0, 0, 1);\r\n    width: 50%;\r\n    justify-items: center;\r\n    border-radius: 10px;\r\n}\r\n\r\n.outer {\r\n    text-align: center;\r\n    position: relative;\r\n    margin: 2rem;\r\n    border-radius: 30px;\r\n    display: grid;\r\n    padding: 1rem;\r\n    width: 90%;\r\n    max-width: 500px;\r\n    background-color: rgba(216, 184, 0, 0.384);\r\n    clip-path: polygon( 0 21%, 11% 0, 89% 0, 100% 21%, 100% 79%, 89% 100%, 11% 100%, 0 79%);\r\n}\r\n\r\n.inner {\r\n    background: rgba(255, 255, 255, 0.8);\r\n    padding: 1rem;\r\n    clip-path: polygon( 0 20%, 10% 0, 90% 0, 100% 20%, 100% 80%, 90% 100%, 10% 100%, 0 80%);\r\n}\r\n\r\n.headline {\r\n    display: grid;\r\n    align-content: center;\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n    width: 65%;\r\n    max-width: 700px;\r\n    position: relative;\r\n}\r\n\r\n/* ---------- HOMEPAGE ---------- */\r\n\r\n.home-info-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#pabs {\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n    gap: 20px;\r\n}\r\n\r\n#pabs .home-info {\r\n    display: flex;\r\n    align-items: flex-end;\r\n}\r\n\r\n#pabs .home-title {\r\n    align-self: flex-start;\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.home-title {\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n    display: flex;\r\n    padding-left: 2rem;\r\n}\r\n\r\n#hours .home-info {\r\n    white-space: pre-line;\r\n}\r\n\r\n.bottom-center {\r\n    left: 43%;\r\n    top: 53%;\r\n}\r\n\r\n.top-right {\r\n    right: 15%;\r\n    top: 25px;\r\n    height: 30px !important;\r\n}\r\n\r\n.rest-icon-left {\r\n    height: 35px !important;\r\n    top: 13%;\r\n    left: 3%;\r\n}\r\n\r\n.rest-icon-right {\r\n    bottom: 5%;\r\n    right: 7%;\r\n    height: 35px !important;\r\n}\r\n\r\n\r\n/* ---------- MENU ---------- */\r\n\r\n.menu-group {\r\n    font-size: 1.6rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 2rem;\r\n    gap: 10px;\r\n}\r\n\r\n.item-name {\r\n    font-size: 1.3rem;\r\n    font-weight: bold;\r\n    align-self: flex-start;\r\n}\r\n\r\n.item-price {\r\n    font-weight: bold;\r\n}\r\n\r\n.item-price, .item-desc {\r\n    padding-left: 30px;\r\n    text-align: start;\r\n}\r\n\r\n.item-image {\r\n    display: flex;\r\n    height: 200px;\r\n    width: 200px;\r\n    align-self: flex-end;\r\n    border: solid 1px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.decorations {\r\n    position: absolute;\r\n    height: 50px;\r\n    z-index: 1;\r\n}\r\n\r\n.icon-left {\r\n    top: 25%;\r\n    left: 10%;\r\n}\r\n\r\n.icon-right {\r\n    transform: scaleX(-1);\r\n    top: 25%;\r\n    right: 10%;\r\n}\r\n\r\n\r\n/* ---------- CONTACT ---------- */\r\n\r\n.contact {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: start;\r\n    position: relative;\r\n}\r\n\r\n.contact-name {\r\n    font-weight: bold;\r\n    font-size: 1.1rem;\r\n    padding-bottom: 10px;\r\n    padding-left: 15px;\r\n}\r\n\r\n.contact-position, \r\n.contact-number,\r\n.contact-email {\r\n    padding-left: 50px;\r\n}\r\n\r\n.contact-pic {\r\n    height: 100px;\r\n    width: 100px;\r\n    position: absolute;\r\n    border-radius: 20px;\r\n    top: 10px;\r\n    right: 40px;\r\n}\r\n\r\n@media screen and (max-width: 820px) {\r\n    .contact-pic {\r\n        height: 75px;\r\n        width: 75px;\r\n        right: 15px;\r\n        top: 20px;\r\n    }\r\n}\r\n\r\n/* ---------- FOOTER ---------- */\r\n\r\nfooter {\r\n    background: rgba(0, 0, 0, 1);\r\n    color: white;\r\n    margin-top: auto;\r\n    min-height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\nfooter > ul {\r\n    display: flex;\r\n    flex: 1;\r\n}\r\n\r\nfooter > ul > li {\r\n    flex: 1;\r\n    list-style-type: none;\r\n    text-align: center;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: Arial;   \r\n}\r\n\r\nbody {\r\n    background: url('https://images.unsplash.com/photo-1518188770546-efd25d4ca263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80');\r\n    background-size: fill;\r\n    min-height: 100vh;\r\n    min-width: 700px;\r\n    width: 100vw;\r\n    overflow-x: hidden;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nnav {\r\n    display: grid;\r\n    justify-self: center;\r\n    justify-items: center;\r\n    align-items: end;\r\n    height: fit-content;\r\n    padding-top: 10px;\r\n    background: rgba(0, 0, 0, 1);\r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template-rows: auto 8fr;\r\n    justify-items: center;\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.container {\r\n    color: black;\r\n    display: grid;\r\n    grid-template-rows: repeat(auto, 1fr);\r\n    background: rgba(0, 0, 0, 1);\r\n    width: 50%;\r\n    justify-items: center;\r\n    border-radius: 10px;\r\n}\r\n\r\n.outer {\r\n    text-align: center;\r\n    position: relative;\r\n    margin: 2rem;\r\n    border-radius: 30px;\r\n    display: grid;\r\n    padding: 1rem;\r\n    width: 90%;\r\n    max-width: 500px;\r\n    background-color: rgba(216, 184, 0, 0.384);\r\n    clip-path: polygon( 0 21%, 11% 0, 89% 0, 100% 21%, 100% 79%, 89% 100%, 11% 100%, 0 79%);\r\n}\r\n\r\n.inner {\r\n    background: rgba(255, 255, 255, 0.8);\r\n    padding: 1rem;\r\n    clip-path: polygon( 0 20%, 10% 0, 90% 0, 100% 20%, 100% 80%, 90% 100%, 10% 100%, 0 80%);\r\n}\r\n\r\n.headline {\r\n    display: grid;\r\n    align-content: center;\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n    width: 65%;\r\n    max-width: 700px;\r\n    position: relative;\r\n}\r\n\r\n/* ---------- HOMEPAGE ---------- */\r\n\r\n.home-info-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#pabs {\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n    gap: 20px;\r\n}\r\n\r\n#pabs .home-info {\r\n    display: flex;\r\n    align-items: flex-end;\r\n}\r\n\r\n#pabs .home-title {\r\n    align-self: flex-start;\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.home-title {\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n    display: flex;\r\n    padding-left: 2rem;\r\n}\r\n\r\n#hours .home-info {\r\n    white-space: pre-line;\r\n}\r\n\r\n.bottom-center {\r\n    left: 43%;\r\n    top: 53%;\r\n}\r\n\r\n.top-right {\r\n    right: 15%;\r\n    top: 25px;\r\n    height: 30px !important;\r\n}\r\n\r\n.rest-icon-left {\r\n    height: 35px !important;\r\n    top: 13%;\r\n    left: 3%;\r\n}\r\n\r\n.rest-icon-right {\r\n    bottom: 5%;\r\n    right: 7%;\r\n    height: 35px !important;\r\n}\r\n\r\n\r\n/* ---------- MENU ---------- */\r\n\r\n.menu-group {\r\n    font-size: 1.6rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 2rem;\r\n    gap: 10px;\r\n}\r\n\r\n.item-name {\r\n    font-size: 1.3rem;\r\n    font-weight: bold;\r\n    align-self: flex-start;\r\n}\r\n\r\n.item-price {\r\n    font-weight: bold;\r\n}\r\n\r\n.item-price, .item-desc {\r\n    padding-left: 30px;\r\n    text-align: start;\r\n}\r\n\r\n.item-image {\r\n    display: flex;\r\n    height: 200px;\r\n    width: 200px;\r\n    align-self: flex-end;\r\n    border: solid 1px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.decorations {\r\n    position: absolute;\r\n    height: 50px;\r\n    z-index: 1;\r\n}\r\n\r\n.icon-left {\r\n    top: 25%;\r\n    left: 10%;\r\n}\r\n\r\n.icon-right {\r\n    transform: scaleX(-1);\r\n    top: 25%;\r\n    right: 10%;\r\n}\r\n\r\n\r\n/* ---------- CONTACT ---------- */\r\n\r\n.contact {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: start;\r\n    position: relative;\r\n}\r\n\r\n.contact-name {\r\n    font-weight: bold;\r\n    font-size: 1.1rem;\r\n    padding-bottom: 10px;\r\n    padding-left: 15px;\r\n}\r\n\r\n.contact-position, \r\n.contact-number,\r\n.contact-email {\r\n    padding-left: 50px;\r\n}\r\n\r\n.contact-pic {\r\n    height: 100px;\r\n    width: 100px;\r\n    position: absolute;\r\n    border-radius: 20px;\r\n    top: 10px;\r\n    right: 40px;\r\n}\r\n\r\n@media screen and (max-width: 820px) {\r\n    .contact-pic {\r\n        height: 75px;\r\n        width: 75px;\r\n        right: 15px;\r\n        top: 20px;\r\n    }\r\n}\r\n\r\n/* ---------- FOOTER ---------- */\r\n\r\nfooter {\r\n    background: rgba(0, 0, 0, 1);\r\n    color: white;\r\n    margin-top: auto;\r\n    min-height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\nfooter > ul {\r\n    display: flex;\r\n    flex: 1;\r\n}\r\n\r\nfooter > ul > li {\r\n    flex: 1;\r\n    list-style-type: none;\r\n    text-align: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/tab.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/tab.css ***!
  \******************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".tabs {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    min-width: 40%;\r\n    justify-self: center;\r\n    justify-items: center;\r\n    padding-top: 10px;\r\n}\r\n\r\n.tab {\r\n    padding: 10px;\r\n    border-top: solid 1px;\r\n    border-left: solid 1px;\r\n    border-right: solid 1px;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    color: white;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.tab:focus {\r\n    background: white;\r\n    color: rgba(0, 0, 0);\r\n}", "",{"version":3,"sources":["webpack://./src/styles/tab.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,qCAAqC;IACrC,cAAc;IACd,oBAAoB;IACpB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,sBAAsB;IACtB,uBAAuB;IACvB,8BAA8B;IAC9B,YAAY;IACZ,4BAA4B;IAC5B,6BAA6B;IAC7B,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;AACxB","sourcesContent":[".tabs {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    min-width: 40%;\r\n    justify-self: center;\r\n    justify-items: center;\r\n    padding-top: 10px;\r\n}\r\n\r\n.tab {\r\n    padding: 10px;\r\n    border-top: solid 1px;\r\n    border-left: solid 1px;\r\n    border-right: solid 1px;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    color: white;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.tab:focus {\r\n    background: white;\r\n    color: rgba(0, 0, 0);\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/tab.css":
/*!****************************!*\
  !*** ./src/styles/tab.css ***!
  \****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_tab_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./tab.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/tab.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_tab_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_tab_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_tab_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_tab_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addContact": () => (/* binding */ addContact)
/* harmony export */ });
/* harmony import */ var _images_DeadGod_5011_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/DeadGod_5011.png */ "./src/images/DeadGod_5011.png");
/* harmony import */ var _images_GenMeta_3063_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/GenMeta_3063.png */ "./src/images/GenMeta_3063.png");



const addContact = () => {
    
    const createContact = (position, name, number, email, profilePicture) => {
        const outer = document.createElement('div');
        outer.classList.add('outer');

        const contactContainer = document.createElement('div');
        contactContainer.classList.add('contact');
        contactContainer.classList.add('inner');
        
        const nameDiv = document.createElement('div');
        nameDiv.textContent = name;
        nameDiv.classList.add('contact-name');

        const positionDiv = document.createElement('div');
        positionDiv.textContent = position;
        positionDiv.classList.add('contact-position');

        const numberDiv = document.createElement('div');
        numberDiv.textContent = number;
        numberDiv.classList.add('contact-number');
        
        const emailDiv = document.createElement('div');
        emailDiv.textContent = email;
        emailDiv.classList.add('contact-email');
        
        const profilePictureDiv = document.createElement('img');
        profilePictureDiv.src = profilePicture;
        profilePictureDiv.classList.add('contact-pic');

        contactContainer.appendChild(nameDiv);
        contactContainer.appendChild(positionDiv);
        contactContainer.appendChild(numberDiv);
        contactContainer.appendChild(emailDiv);
        contactContainer.appendChild(profilePictureDiv);

        outer.appendChild(contactContainer);
        return outer;
    };

    const container = document.createElement('div');
    container.id = 'contact-container';
    container.classList.add('container');
    
    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.classList.add('outer');
    const inner = document.createElement('div');
    inner.classList.add('inner');
    inner.textContent = 'Contact Us';
    headline.appendChild(inner);
    container.appendChild(headline);

    const will = createContact('CEO', 'William Pabitero', '111-111-1111', 'goated@dev.com', _images_DeadGod_5011_png__WEBPACK_IMPORTED_MODULE_0__);
    const elon = createContact('Chief Technoking', 'Elon Musk', '123-999-0000', 'elon@musk.com', _images_GenMeta_3063_png__WEBPACK_IMPORTED_MODULE_1__);
    container.appendChild(will);
    container.appendChild(elon);

    return container;
}

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addFooter": () => (/* binding */ addFooter)
/* harmony export */ });
const addFooter = () => {

    const renderFooterList = (items) => {
        const ul = document.createElement('ul');
        items.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
        return ul;
    };

    const footerList = [
        'Menu images used from unsplash.com',
        'Other icons used from flaticon.com',
        'Contact images used from self'
    ];

    return renderFooterList(footerList);
};

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addHomepage": () => (/* binding */ addHomepage)
/* harmony export */ });
/* harmony import */ var _images_restaurant_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/restaurant.png */ "./src/images/restaurant.png");
/* harmony import */ var _images_hours_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/hours.png */ "./src/images/hours.png");
/* harmony import */ var _images_location_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/location.png */ "./src/images/location.png");
/* harmony import */ var _images_utensils_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/utensils.png */ "./src/images/utensils.png");





const createInfo = (title, info) => {
    const outer = document.createElement('div');
    outer.classList.add('outer');

    const container = document.createElement('div');
    container.classList.add('home-info-container');
    container.classList.add('inner');
    container.id = String(title).toLowerCase();

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('home-title');
    titleDiv.textContent = title;

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('home-info');
    infoDiv.textContent = info;

    container.appendChild(titleDiv);
    container.appendChild(infoDiv);
    outer.append(container);
    return outer;
}

const outer = document.createElement('div');
outer.classList.add('outer');
outer.classList.add('headline');
const utensils = document.createElement('img');
utensils.src = _images_utensils_png__WEBPACK_IMPORTED_MODULE_3__;
utensils.classList.add('decorations');
utensils.classList.add('rest-icon-left');
const utensils1 = document.createElement('img');
utensils1.src = _images_utensils_png__WEBPACK_IMPORTED_MODULE_3__;
utensils1.classList.add('decorations');
utensils1.classList.add('rest-icon-right');
const headline = document.createElement('div');
headline.textContent = 'Pabs Eats';
headline.classList.add('inner');
outer.appendChild(utensils);
outer.appendChild(utensils1);
outer.appendChild(headline);

const sum = 'We are a 5 Michelin star restuarant. Enjoy our finest cuisine in all of The Milky Way.';
const summary = createInfo('Pabs', sum);
const rest = document.createElement('img');
rest.src = _images_restaurant_png__WEBPACK_IMPORTED_MODULE_0__;
rest.classList.add('decorations');
rest.classList.add('bottom-center');
summary.appendChild(rest);

const times = `Sunday: 8am - 8pm
Monday: 6am - 6pm
Tuesday: 6am - 6pm
Wednesday: 6am - 6pm
Thursday: 6am - 10pm
Friday: 6am - 10pm
Saturday: 8am - 10pm`;
const hours = createInfo('Hours', times);
const hIcon = document.createElement('img');
hIcon.src = _images_hours_png__WEBPACK_IMPORTED_MODULE_1__;
hIcon.classList.add('decorations');
hIcon.classList.add('top-right');
hours.appendChild(hIcon);

const address = '123 Water Street, New York, NY';
const location = createInfo('Location', address);
const loc = document.createElement('img');
loc.src = _images_location_png__WEBPACK_IMPORTED_MODULE_2__;
loc.classList.add('decorations');
loc.classList.add('top-right');
location.appendChild(loc);

const homeContainer = document.createElement('div');
homeContainer.id = 'home-container';
homeContainer.classList.add('container');
homeContainer.appendChild(outer);
homeContainer.appendChild(summary);
homeContainer.appendChild(hours);
homeContainer.appendChild(location);

const addHomepage = () => {
    return homeContainer;
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab */ "./src/tab.js");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");





const body = document.body;

const nav = document.querySelector('nav');
nav.appendChild((0,_tab__WEBPACK_IMPORTED_MODULE_0__.addTab)());

const footer = document.querySelector('footer');
footer.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_2__.addFooter)());

const content = document.querySelector('#content');
content.appendChild((0,_homepage__WEBPACK_IMPORTED_MODULE_1__.addHomepage)());

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        if (document.querySelector('.container') === null) {
            let obj = _tab__WEBPACK_IMPORTED_MODULE_0__.tabs.find(t => t.name === e.target.textContent);
            content.appendChild(obj.func());
        } else {
            document.querySelector('.container').remove();
            let obj = _tab__WEBPACK_IMPORTED_MODULE_0__.tabs.find(t => t.name === e.target.textContent);
            content.appendChild(obj.func());
        };
    });
});



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addMenu": () => (/* binding */ addMenu)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _images_menu_steak_avif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/menu/steak.avif */ "./src/images/menu/steak.avif");
/* harmony import */ var _images_menu_salmon_avif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/menu/salmon.avif */ "./src/images/menu/salmon.avif");
/* harmony import */ var _images_menu_chicken_avif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/menu/chicken.avif */ "./src/images/menu/chicken.avif");
/* harmony import */ var _images_menu_seltzer_avif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/menu/seltzer.avif */ "./src/images/menu/seltzer.avif");
/* harmony import */ var _images_menu_beer_avif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/menu/beer.avif */ "./src/images/menu/beer.avif");
/* harmony import */ var _images_menu_tequila_avif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/menu/tequila.avif */ "./src/images/menu/tequila.avif");
/* harmony import */ var _images_menu_fries_avif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/menu/fries.avif */ "./src/images/menu/fries.avif");
/* harmony import */ var _images_menu_salad_avif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/menu/salad.avif */ "./src/images/menu/salad.avif");
/* harmony import */ var _images_menu_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/menu.png */ "./src/images/menu.png");
/* harmony import */ var _images_dish_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/dish.png */ "./src/images/dish.png");
/* harmony import */ var _images_beverage_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/beverage.png */ "./src/images/beverage.png");
/* harmony import */ var _images_sides_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/sides.png */ "./src/images/sides.png");














const createMenuGroup = (text, icon) =>  {
    const outer = document.createElement('div');
    outer.classList.add('outer');
    const iconLeft = document.createElement('img');
    iconLeft.classList.add('decorations');
    iconLeft.classList.add('icon-left');
    iconLeft.src = icon;
    const iconRight = document.createElement('img');
    iconRight.classList.add('decorations');
    iconRight.classList.add('icon-right');
    iconRight.src = icon;
    const menuG = document.createElement('div');
    menuG.classList.add('menu-group');
    menuG.classList.add('inner');
    menuG.textContent = text;
    outer.appendChild(iconLeft);
    outer.appendChild(iconRight);
    outer.appendChild(menuG);
    return outer;
}

const createMenuItem = (name, price, description, image) => {
    const outer = document.createElement('div');
    outer.classList.add('outer');

    const item = document.createElement('div');
    item.classList.add('item');
    item.classList.add('inner');
    item.id = name;

    const itemName = document.createElement('div');
    itemName.classList.add('item-name');
    itemName.textContent = name;

    const itemDesc = document.createElement('div');
    itemDesc.classList.add('item-desc');
    itemDesc.textContent = description;

    const itemPrice = document.createElement('div');
    itemPrice.classList.add('item-price');
    itemPrice.textContent = price;
    
    const itemImage = document.createElement('img');
    itemImage.classList.add('item-image');
    itemImage.src = image;
    
    item.appendChild(itemName);
    item.appendChild(itemDesc);
    item.appendChild(itemPrice);
    item.appendChild(itemImage);
    outer.appendChild(item);
    return outer;
}

const menuContainer = document.createElement('div');
menuContainer.id = 'menu-container';
menuContainer.classList.add('container');

const headline = document.createElement('div');
const menuImage = document.createElement('img');
menuImage.src = _images_menu_png__WEBPACK_IMPORTED_MODULE_9__;
menuImage.classList.add('decorations');
menuImage.classList.add('icon-left');
const menuImage1 = document.createElement('img');
menuImage1.src = _images_menu_png__WEBPACK_IMPORTED_MODULE_9__;
menuImage1.classList.add('decorations');
menuImage1.classList.add('icon-right');
const innerHeadline = document.createElement('div');
innerHeadline.textContent = 'Menu';
innerHeadline.classList.add('inner');
headline.classList.add('headline');
headline.classList.add('outer');
headline.appendChild(menuImage);
headline.appendChild(menuImage1);
headline.appendChild(innerHeadline);
menuContainer.appendChild(headline);

const mainDish = createMenuGroup('Main Dishes', _images_dish_png__WEBPACK_IMPORTED_MODULE_10__);
const steak = createMenuItem('Tomahawk Steak', '$1000', 'Rare steak from the fields of Japan', _images_menu_steak_avif__WEBPACK_IMPORTED_MODULE_1__);
const salmon = createMenuItem('Fresh Atlantic Salmon', '$49.99', 'Fresh caught wild salmon of the Atlantic', _images_menu_salmon_avif__WEBPACK_IMPORTED_MODULE_2__);
const chicken = createMenuItem('Grilled Peruvian Chicken', '$29.99', 'Organic grass fed chicken', _images_menu_chicken_avif__WEBPACK_IMPORTED_MODULE_3__);
menuContainer.appendChild(mainDish);
menuContainer.appendChild(steak);
menuContainer.appendChild(salmon);
menuContainer.appendChild(chicken);

const bevs = createMenuGroup('Beverages', _images_beverage_png__WEBPACK_IMPORTED_MODULE_11__);
const seltzer = createMenuItem('Happy Dad', '$9.99', 'Hard Seltzer from Nelk Boys', _images_menu_seltzer_avif__WEBPACK_IMPORTED_MODULE_4__);
const beer = createMenuItem('Stella Artois', '$7.99', 'Fresh beer', _images_menu_beer_avif__WEBPACK_IMPORTED_MODULE_5__);
const tequila = createMenuItem('Casamigos', '$39.99', 'Tequila baby!!!', _images_menu_tequila_avif__WEBPACK_IMPORTED_MODULE_6__);
menuContainer.appendChild(bevs);
menuContainer.appendChild(seltzer);
menuContainer.appendChild(beer);
menuContainer.appendChild(tequila);

const sides = createMenuGroup('Sides', _images_sides_png__WEBPACK_IMPORTED_MODULE_12__);
const fries = createMenuItem('French Fries', '$4.99', 'Fresh cut potatoes', _images_menu_fries_avif__WEBPACK_IMPORTED_MODULE_7__);
const salad = createMenuItem('Kale Salad', '$6.99', 'Fresh vegetable salad', _images_menu_salad_avif__WEBPACK_IMPORTED_MODULE_8__);
menuContainer.appendChild(sides);
menuContainer.appendChild(fries);
menuContainer.appendChild(salad);

const addMenu = () => {
    return menuContainer;
}








/***/ }),

/***/ "./src/tab.js":
/*!********************!*\
  !*** ./src/tab.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTab": () => (/* binding */ addTab),
/* harmony export */   "tabs": () => (/* binding */ tabs)
/* harmony export */ });
/* harmony import */ var _styles_tab_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/tab.css */ "./src/styles/tab.css");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





const createTab = (text) => {
    const container = document.createElement('div');
    container.classList.add('tab-container');
    const tab = document.createElement('button');
    tab.classList.add('tab');
    tab.textContent = text;
    container.appendChild(tab);
    return container;
}

const tabs = [
    {
        'name': 'Home',
        'func': _homepage__WEBPACK_IMPORTED_MODULE_1__.addHomepage
    }, 
    { 
        'name': 'Menu',
        'func': _menu__WEBPACK_IMPORTED_MODULE_2__.addMenu
    },
    { 
        'name': 'Contact',
        'func': _contact__WEBPACK_IMPORTED_MODULE_3__.addContact
    }
];

const home = createTab('Home');
const menu = createTab('Menu');
const contact = createTab('Contact');

const container = document.createElement('div');
container.classList.add('tabs');

container.appendChild(home);
container.appendChild(menu);
container.appendChild(contact);

const addTab = () => {
    return container;
}



/***/ }),

/***/ "./src/images/DeadGod_5011.png":
/*!*************************************!*\
  !*** ./src/images/DeadGod_5011.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/33a879f7a1b47c4705e4.png";

/***/ }),

/***/ "./src/images/GenMeta_3063.png":
/*!*************************************!*\
  !*** ./src/images/GenMeta_3063.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/810e26dfe0f5c644b55d.png";

/***/ }),

/***/ "./src/images/beverage.png":
/*!*********************************!*\
  !*** ./src/images/beverage.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ad6649623474a5c3dcb6.png";

/***/ }),

/***/ "./src/images/dish.png":
/*!*****************************!*\
  !*** ./src/images/dish.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/c4101d0a0ce362fe6aed.png";

/***/ }),

/***/ "./src/images/hours.png":
/*!******************************!*\
  !*** ./src/images/hours.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/521fc3a8cb96a61d071a.png";

/***/ }),

/***/ "./src/images/location.png":
/*!*********************************!*\
  !*** ./src/images/location.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/e26e4743254c2367c3eb.png";

/***/ }),

/***/ "./src/images/menu.png":
/*!*****************************!*\
  !*** ./src/images/menu.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ba677e672cfac784faee.png";

/***/ }),

/***/ "./src/images/menu/beer.avif":
/*!***********************************!*\
  !*** ./src/images/menu/beer.avif ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/0cea49dec46e64f53d7c.avif";

/***/ }),

/***/ "./src/images/menu/chicken.avif":
/*!**************************************!*\
  !*** ./src/images/menu/chicken.avif ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/3a928bdbe9710dc17148.avif";

/***/ }),

/***/ "./src/images/menu/fries.avif":
/*!************************************!*\
  !*** ./src/images/menu/fries.avif ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/f535c395b789f5621ab4.avif";

/***/ }),

/***/ "./src/images/menu/salad.avif":
/*!************************************!*\
  !*** ./src/images/menu/salad.avif ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ecaab41e0148bcdf311f.avif";

/***/ }),

/***/ "./src/images/menu/salmon.avif":
/*!*************************************!*\
  !*** ./src/images/menu/salmon.avif ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/9e6a18117aa2a6659434.avif";

/***/ }),

/***/ "./src/images/menu/seltzer.avif":
/*!**************************************!*\
  !*** ./src/images/menu/seltzer.avif ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/85807973a7ee761eb501.avif";

/***/ }),

/***/ "./src/images/menu/steak.avif":
/*!************************************!*\
  !*** ./src/images/menu/steak.avif ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/38bf68a52ef3ffab2cdb.avif";

/***/ }),

/***/ "./src/images/menu/tequila.avif":
/*!**************************************!*\
  !*** ./src/images/menu/tequila.avif ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/71f72d3e92479dd11528.avif";

/***/ }),

/***/ "./src/images/restaurant.png":
/*!***********************************!*\
  !*** ./src/images/restaurant.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/9867397ac6f7e01ce1eb.png";

/***/ }),

/***/ "./src/images/sides.png":
/*!******************************!*\
  !*** ./src/images/sides.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/0f4041361703dec18dcb.png";

/***/ }),

/***/ "./src/images/utensils.png":
/*!*********************************!*\
  !*** ./src/images/utensils.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/f59076a2f63c2fe0626e.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHNEQUFVO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsK0NBQVM7QUFDaEQsNEVBQTRFLG9EQUFRO0FBQ3BGLDZFQUE2RSxvREFBUTtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SDBCO0FBQ2U7QUFDUjtBQUNNO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0RBQVc7QUFDM0IsS0FBSztBQUNMO0FBQ0E7QUFDQSxnQkFBZ0IsMENBQU87QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQSxnQkFBZ0IsZ0RBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL3RhYi5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL3RhYi5jc3M/Yjk4MCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvdGFiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsOyAgIFxcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxODE4ODc3MDU0Ni1lZmQyNWQ0Y2EyNjM/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTExNzEmcT04MCcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGZpbGw7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBtaW4td2lkdGg6IDcwMHB4O1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDhmcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLCAxZnIpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5vdXRlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW46IDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE2LCAxODQsIDAsIDAuMzg0KTtcXHJcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKCAwIDIxJSwgMTElIDAsIDg5JSAwLCAxMDAlIDIxJSwgMTAwJSA3OSUsIDg5JSAxMDAlLCAxMSUgMTAwJSwgMCA3OSUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5uZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGNsaXAtcGF0aDogcG9seWdvbiggMCAyMCUsIDEwJSAwLCA5MCUgMCwgMTAwJSAyMCUsIDEwMCUgODAlLCA5MCUgMTAwJSwgMTAlIDEwMCUsIDAgODAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRsaW5lIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB3aWR0aDogNjUlO1xcclxcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0gSE9NRVBBR0UgLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi5ob21lLWluZm8tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuI3BhYnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3BhYnMgLmhvbWUtaW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuI3BhYnMgLmhvbWUtdGl0bGUge1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtdGl0bGUge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2hvdXJzIC5ob21lLWluZm8ge1xcclxcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20tY2VudGVyIHtcXHJcXG4gICAgbGVmdDogNDMlO1xcclxcbiAgICB0b3A6IDUzJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcC1yaWdodCB7XFxyXFxuICAgIHJpZ2h0OiAxNSU7XFxyXFxuICAgIHRvcDogMjVweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5yZXN0LWljb24tbGVmdCB7XFxyXFxuICAgIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xcclxcbiAgICB0b3A6IDEzJTtcXHJcXG4gICAgbGVmdDogMyU7XFxyXFxufVxcclxcblxcclxcbi5yZXN0LWljb24tcmlnaHQge1xcclxcbiAgICBib3R0b206IDUlO1xcclxcbiAgICByaWdodDogNyU7XFxyXFxuICAgIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tIE1FTlUgLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi5tZW51LWdyb3VwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tbmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tcHJpY2Uge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tcHJpY2UsIC5pdGVtLWRlc2Mge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1pbWFnZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVjb3JhdGlvbnMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24tbGVmdCB7XFxyXFxuICAgIHRvcDogMjUlO1xcclxcbiAgICBsZWZ0OiAxMCU7XFxyXFxufVxcclxcblxcclxcbi5pY29uLXJpZ2h0IHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xcclxcbiAgICB0b3A6IDI1JTtcXHJcXG4gICAgcmlnaHQ6IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLSBDT05UQUNUIC0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4uY29udGFjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LW5hbWUge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXBvc2l0aW9uLCBcXHJcXG4uY29udGFjdC1udW1iZXIsXFxyXFxuLmNvbnRhY3QtZW1haWwge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXBpYyB7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICB0b3A6IDEwcHg7XFxyXFxuICAgIHJpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xcclxcbiAgICAuY29udGFjdC1waWMge1xcclxcbiAgICAgICAgaGVpZ2h0OiA3NXB4O1xcclxcbiAgICAgICAgd2lkdGg6IDc1cHg7XFxyXFxuICAgICAgICByaWdodDogMTVweDtcXHJcXG4gICAgICAgIHRvcDogMjBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tIEZPT1RFUiAtLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgPiB1bCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciA+IHVsID4gbGkge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpTEFBaUw7SUFDakwscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsMENBQTBDO0lBQzFDLHVGQUF1RjtBQUMzRjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsdUZBQXVGO0FBQzNGOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBLG1DQUFtQzs7QUFFbkM7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixRQUFRO0lBQ1IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCx1QkFBdUI7QUFDM0I7OztBQUdBLCtCQUErQjs7QUFFL0I7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFFBQVE7SUFDUixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsUUFBUTtJQUNSLFVBQVU7QUFDZDs7O0FBR0Esa0NBQWtDOztBQUVsQztJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7O0lBR0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsV0FBVztRQUNYLFNBQVM7SUFDYjtBQUNKOztBQUVBLGlDQUFpQzs7QUFFakM7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxPQUFPO0lBQ1AscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWw7ICAgXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE4MTg4NzcwNTQ2LWVmZDI1ZDRjYTI2Mz9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTE3MSZxPTgwJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogZmlsbDtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1pbi13aWR0aDogNzAwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gOGZyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8sIDFmcik7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm91dGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbjogMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTYsIDE4NCwgMCwgMC4zODQpO1xcclxcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oIDAgMjElLCAxMSUgMCwgODklIDAsIDEwMCUgMjElLCAxMDAlIDc5JSwgODklIDEwMCUsIDExJSAxMDAlLCAwIDc5JSk7XFxyXFxufVxcclxcblxcclxcbi5pbm5lciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKCAwIDIwJSwgMTAlIDAsIDkwJSAwLCAxMDAlIDIwJSwgMTAwJSA4MCUsIDkwJSAxMDAlLCAxMCUgMTAwJSwgMCA4MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGxpbmUge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHdpZHRoOiA2NSU7XFxyXFxuICAgIG1heC13aWR0aDogNzAwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLSBIT01FUEFHRSAtLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuLmhvbWUtaW5mby1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4jcGFicyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcGFicyAuaG9tZS1pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4jcGFicyAuaG9tZS10aXRsZSB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS10aXRsZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaG91cnMgLmhvbWUtaW5mbyB7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbS1jZW50ZXIge1xcclxcbiAgICBsZWZ0OiA0MyU7XFxyXFxuICAgIHRvcDogNTMlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wLXJpZ2h0IHtcXHJcXG4gICAgcmlnaHQ6IDE1JTtcXHJcXG4gICAgdG9wOiAyNXB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3QtaWNvbi1sZWZ0IHtcXHJcXG4gICAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHRvcDogMTMlO1xcclxcbiAgICBsZWZ0OiAzJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3QtaWNvbi1yaWdodCB7XFxyXFxuICAgIGJvdHRvbTogNSU7XFxyXFxuICAgIHJpZ2h0OiA3JTtcXHJcXG4gICAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0gTUVOVSAtLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuLm1lbnUtZ3JvdXAge1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1wcmljZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1wcmljZSwgLml0ZW0tZGVzYyB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWltYWdlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5kZWNvcmF0aW9ucyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1sZWZ0IHtcXHJcXG4gICAgdG9wOiAyNSU7XFxyXFxuICAgIGxlZnQ6IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24tcmlnaHQge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxyXFxuICAgIHRvcDogMjUlO1xcclxcbiAgICByaWdodDogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tIENPTlRBQ1QgLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi5jb250YWN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtbmFtZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtcG9zaXRpb24sIFxcclxcbi5jb250YWN0LW51bWJlcixcXHJcXG4uY29udGFjdC1lbWFpbCB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtcGljIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIHRvcDogMTBweDtcXHJcXG4gICAgcmlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyMHB4KSB7XFxyXFxuICAgIC5jb250YWN0LXBpYyB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDc1cHg7XFxyXFxuICAgICAgICB3aWR0aDogNzVweDtcXHJcXG4gICAgICAgIHJpZ2h0OiAxNXB4O1xcclxcbiAgICAgICAgdG9wOiAyMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0gRk9PVEVSIC0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciA+IHVsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyID4gdWwgPiBsaSB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudGFicyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIG1pbi13aWR0aDogNDAlO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYiB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweDtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweDtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi50YWI6Zm9jdXMge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCk7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdGFiLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50YWJzIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAgbWluLXdpZHRoOiA0MCU7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFiIHtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4O1xcclxcbiAgICBib3JkZXItbGVmdDogc29saWQgMXB4O1xcclxcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYjpmb2N1cyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YWIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YWIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwZnAxIGZyb20gJy4vaW1hZ2VzL0RlYWRHb2RfNTAxMS5wbmcnO1xyXG5pbXBvcnQgcGZwMiBmcm9tICcuL2ltYWdlcy9HZW5NZXRhXzMwNjMucG5nJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb250YWN0ID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjcmVhdGVDb250YWN0ID0gKHBvc2l0aW9uLCBuYW1lLCBudW1iZXIsIGVtYWlsLCBwcm9maWxlUGljdHVyZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgb3V0ZXIuY2xhc3NMaXN0LmFkZCgnb3V0ZXInKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xyXG4gICAgICAgIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5uZXInKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbmFtZURpdi50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICAgICAgbmFtZURpdi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LW5hbWUnKTtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwb3NpdGlvbkRpdi50ZXh0Q29udGVudCA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHBvc2l0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtcG9zaXRpb24nKTtcclxuXHJcbiAgICAgICAgY29uc3QgbnVtYmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbnVtYmVyRGl2LnRleHRDb250ZW50ID0gbnVtYmVyO1xyXG4gICAgICAgIG51bWJlckRpdi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LW51bWJlcicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGVtYWlsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZW1haWxEaXYudGV4dENvbnRlbnQgPSBlbWFpbDtcclxuICAgICAgICBlbWFpbERpdi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWVtYWlsJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcHJvZmlsZVBpY3R1cmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBwcm9maWxlUGljdHVyZURpdi5zcmMgPSBwcm9maWxlUGljdHVyZTtcclxuICAgICAgICBwcm9maWxlUGljdHVyZURpdi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXBpYycpO1xyXG5cclxuICAgICAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVEaXYpO1xyXG4gICAgICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocG9zaXRpb25EaXYpO1xyXG4gICAgICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobnVtYmVyRGl2KTtcclxuICAgICAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsRGl2KTtcclxuICAgICAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2ZpbGVQaWN0dXJlRGl2KTtcclxuXHJcbiAgICAgICAgb3V0ZXIuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XHJcbiAgICAgICAgcmV0dXJuIG91dGVyO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5pZCA9ICdjb250YWN0LWNvbnRhaW5lcic7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBoZWFkbGluZS5jbGFzc0xpc3QuYWRkKCdoZWFkbGluZScpO1xyXG4gICAgaGVhZGxpbmUuY2xhc3NMaXN0LmFkZCgnb3V0ZXInKTtcclxuICAgIGNvbnN0IGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbm5lci5jbGFzc0xpc3QuYWRkKCdpbm5lcicpO1xyXG4gICAgaW5uZXIudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XHJcbiAgICBoZWFkbGluZS5hcHBlbmRDaGlsZChpbm5lcik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xyXG5cclxuICAgIGNvbnN0IHdpbGwgPSBjcmVhdGVDb250YWN0KCdDRU8nLCAnV2lsbGlhbSBQYWJpdGVybycsICcxMTEtMTExLTExMTEnLCAnZ29hdGVkQGRldi5jb20nLCBwZnAxKTtcclxuICAgIGNvbnN0IGVsb24gPSBjcmVhdGVDb250YWN0KCdDaGllZiBUZWNobm9raW5nJywgJ0Vsb24gTXVzaycsICcxMjMtOTk5LTAwMDAnLCAnZWxvbkBtdXNrLmNvbScsIHBmcDIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdpbGwpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsb24pO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbn0iLCJleHBvcnQgY29uc3QgYWRkRm9vdGVyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJlbmRlckZvb3Rlckxpc3QgPSAoaXRlbXMpID0+IHtcclxuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGxpLnRleHRDb250ZW50ID0gaXRlbTtcclxuICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB1bDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZm9vdGVyTGlzdCA9IFtcclxuICAgICAgICAnTWVudSBpbWFnZXMgdXNlZCBmcm9tIHVuc3BsYXNoLmNvbScsXHJcbiAgICAgICAgJ090aGVyIGljb25zIHVzZWQgZnJvbSBmbGF0aWNvbi5jb20nLFxyXG4gICAgICAgICdDb250YWN0IGltYWdlcyB1c2VkIGZyb20gc2VsZidcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIHJlbmRlckZvb3Rlckxpc3QoZm9vdGVyTGlzdCk7XHJcbn07IiwiaW1wb3J0IHJlc3RJY29uIGZyb20gJy4vaW1hZ2VzL3Jlc3RhdXJhbnQucG5nJztcclxuaW1wb3J0IGhvdXJzSWNvbiBmcm9tICcuL2ltYWdlcy9ob3Vycy5wbmcnO1xyXG5pbXBvcnQgbG9jYXRpb25JY29uIGZyb20gJy4vaW1hZ2VzL2xvY2F0aW9uLnBuZyc7XHJcbmltcG9ydCB1dGVuSWNvbiBmcm9tICcuL2ltYWdlcy91dGVuc2lscy5wbmcnO1xyXG5cclxuY29uc3QgY3JlYXRlSW5mbyA9ICh0aXRsZSwgaW5mbykgPT4ge1xyXG4gICAgY29uc3Qgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG91dGVyLmNsYXNzTGlzdC5hZGQoJ291dGVyJyk7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9tZS1pbmZvLWNvbnRhaW5lcicpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lubmVyJyk7XHJcbiAgICBjb250YWluZXIuaWQgPSBTdHJpbmcodGl0bGUpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ2hvbWUtdGl0bGUnKTtcclxuICAgIHRpdGxlRGl2LnRleHRDb250ZW50ID0gdGl0bGU7XHJcblxyXG4gICAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdob21lLWluZm8nKTtcclxuICAgIGluZm9EaXYudGV4dENvbnRlbnQgPSBpbmZvO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZURpdik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0Rpdik7XHJcbiAgICBvdXRlci5hcHBlbmQoY29udGFpbmVyKTtcclxuICAgIHJldHVybiBvdXRlcjtcclxufVxyXG5cclxuY29uc3Qgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxub3V0ZXIuY2xhc3NMaXN0LmFkZCgnb3V0ZXInKTtcclxub3V0ZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGxpbmUnKTtcclxuY29uc3QgdXRlbnNpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxudXRlbnNpbHMuc3JjID0gdXRlbkljb247XHJcbnV0ZW5zaWxzLmNsYXNzTGlzdC5hZGQoJ2RlY29yYXRpb25zJyk7XHJcbnV0ZW5zaWxzLmNsYXNzTGlzdC5hZGQoJ3Jlc3QtaWNvbi1sZWZ0Jyk7XHJcbmNvbnN0IHV0ZW5zaWxzMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG51dGVuc2lsczEuc3JjID0gdXRlbkljb247XHJcbnV0ZW5zaWxzMS5jbGFzc0xpc3QuYWRkKCdkZWNvcmF0aW9ucycpO1xyXG51dGVuc2lsczEuY2xhc3NMaXN0LmFkZCgncmVzdC1pY29uLXJpZ2h0Jyk7XHJcbmNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmhlYWRsaW5lLnRleHRDb250ZW50ID0gJ1BhYnMgRWF0cyc7XHJcbmhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoJ2lubmVyJyk7XHJcbm91dGVyLmFwcGVuZENoaWxkKHV0ZW5zaWxzKTtcclxub3V0ZXIuYXBwZW5kQ2hpbGQodXRlbnNpbHMxKTtcclxub3V0ZXIuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xyXG5cclxuY29uc3Qgc3VtID0gJ1dlIGFyZSBhIDUgTWljaGVsaW4gc3RhciByZXN0dWFyYW50LiBFbmpveSBvdXIgZmluZXN0IGN1aXNpbmUgaW4gYWxsIG9mIFRoZSBNaWxreSBXYXkuJztcclxuY29uc3Qgc3VtbWFyeSA9IGNyZWF0ZUluZm8oJ1BhYnMnLCBzdW0pO1xyXG5jb25zdCByZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbnJlc3Quc3JjID0gcmVzdEljb247XHJcbnJlc3QuY2xhc3NMaXN0LmFkZCgnZGVjb3JhdGlvbnMnKTtcclxucmVzdC5jbGFzc0xpc3QuYWRkKCdib3R0b20tY2VudGVyJyk7XHJcbnN1bW1hcnkuYXBwZW5kQ2hpbGQocmVzdCk7XHJcblxyXG5jb25zdCB0aW1lcyA9IGBTdW5kYXk6IDhhbSAtIDhwbVxyXG5Nb25kYXk6IDZhbSAtIDZwbVxyXG5UdWVzZGF5OiA2YW0gLSA2cG1cclxuV2VkbmVzZGF5OiA2YW0gLSA2cG1cclxuVGh1cnNkYXk6IDZhbSAtIDEwcG1cclxuRnJpZGF5OiA2YW0gLSAxMHBtXHJcblNhdHVyZGF5OiA4YW0gLSAxMHBtYDtcclxuY29uc3QgaG91cnMgPSBjcmVhdGVJbmZvKCdIb3VycycsIHRpbWVzKTtcclxuY29uc3QgaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuaEljb24uc3JjID0gaG91cnNJY29uO1xyXG5oSWNvbi5jbGFzc0xpc3QuYWRkKCdkZWNvcmF0aW9ucycpO1xyXG5oSWNvbi5jbGFzc0xpc3QuYWRkKCd0b3AtcmlnaHQnKTtcclxuaG91cnMuYXBwZW5kQ2hpbGQoaEljb24pO1xyXG5cclxuY29uc3QgYWRkcmVzcyA9ICcxMjMgV2F0ZXIgU3RyZWV0LCBOZXcgWW9yaywgTlknO1xyXG5jb25zdCBsb2NhdGlvbiA9IGNyZWF0ZUluZm8oJ0xvY2F0aW9uJywgYWRkcmVzcyk7XHJcbmNvbnN0IGxvYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5sb2Muc3JjID0gbG9jYXRpb25JY29uO1xyXG5sb2MuY2xhc3NMaXN0LmFkZCgnZGVjb3JhdGlvbnMnKTtcclxubG9jLmNsYXNzTGlzdC5hZGQoJ3RvcC1yaWdodCcpO1xyXG5sb2NhdGlvbi5hcHBlbmRDaGlsZChsb2MpO1xyXG5cclxuY29uc3QgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5ob21lQ29udGFpbmVyLmlkID0gJ2hvbWUtY29udGFpbmVyJztcclxuaG9tZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChvdXRlcik7XHJcbmhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VtbWFyeSk7XHJcbmhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnMpO1xyXG5ob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRIb21lcGFnZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBob21lQ29udGFpbmVyO1xyXG59OyIsImltcG9ydCB7IHRhYnMsIGFkZFRhYiB9IGZyb20gXCIuL3RhYlwiO1xyXG5pbXBvcnQgeyBhZGRIb21lcGFnZSB9IGZyb20gXCIuL2hvbWVwYWdlXCI7XHJcbmltcG9ydCB7IGFkZEZvb3RlciB9IGZyb20gXCIuL2Zvb3RlclwiO1xyXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xyXG5uYXYuYXBwZW5kQ2hpbGQoYWRkVGFiKCkpO1xyXG5cclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XHJcbmZvb3Rlci5hcHBlbmRDaGlsZChhZGRGb290ZXIoKSk7XHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuY29udGVudC5hcHBlbmRDaGlsZChhZGRIb21lcGFnZSgpKTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKS5mb3JFYWNoKHRhYiA9PiB7XHJcbiAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IG9iaiA9IHRhYnMuZmluZCh0ID0+IHQubmFtZSA9PT0gZS50YXJnZXQudGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG9iai5mdW5jKCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgbGV0IG9iaiA9IHRhYnMuZmluZCh0ID0+IHQubmFtZSA9PT0gZS50YXJnZXQudGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG9iai5mdW5jKCkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4iLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBzdGVha0ltZyBmcm9tICcuL2ltYWdlcy9tZW51L3N0ZWFrLmF2aWYnO1xyXG5pbXBvcnQgc2FsbW9uSW1nIGZyb20gJy4vaW1hZ2VzL21lbnUvc2FsbW9uLmF2aWYnO1xyXG5pbXBvcnQgY2hpY2tlbkltZyBmcm9tICcuL2ltYWdlcy9tZW51L2NoaWNrZW4uYXZpZic7XHJcbmltcG9ydCBzZWx0emVySW1nIGZyb20gJy4vaW1hZ2VzL21lbnUvc2VsdHplci5hdmlmJztcclxuaW1wb3J0IGJlZXJJbWcgZnJvbSAnLi9pbWFnZXMvbWVudS9iZWVyLmF2aWYnO1xyXG5pbXBvcnQgdGVxdWlsYUltZyBmcm9tICcuL2ltYWdlcy9tZW51L3RlcXVpbGEuYXZpZic7XHJcbmltcG9ydCBmcmllc0ltZyBmcm9tICcuL2ltYWdlcy9tZW51L2ZyaWVzLmF2aWYnO1xyXG5pbXBvcnQgc2FsYWRJbWcgZnJvbSAnLi9pbWFnZXMvbWVudS9zYWxhZC5hdmlmJztcclxuaW1wb3J0IG1lbnVJY29uIGZyb20gJy4vaW1hZ2VzL21lbnUucG5nJztcclxuaW1wb3J0IGRpc2hJY29uIGZyb20gJy4vaW1hZ2VzL2Rpc2gucG5nJztcclxuaW1wb3J0IGJldkljb24gZnJvbSAnLi9pbWFnZXMvYmV2ZXJhZ2UucG5nJztcclxuaW1wb3J0IHNpZGVzSWNvbiBmcm9tICcuL2ltYWdlcy9zaWRlcy5wbmcnO1xyXG5cclxuY29uc3QgY3JlYXRlTWVudUdyb3VwID0gKHRleHQsIGljb24pID0+ICB7XHJcbiAgICBjb25zdCBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgb3V0ZXIuY2xhc3NMaXN0LmFkZCgnb3V0ZXInKTtcclxuICAgIGNvbnN0IGljb25MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpY29uTGVmdC5jbGFzc0xpc3QuYWRkKCdkZWNvcmF0aW9ucycpO1xyXG4gICAgaWNvbkxlZnQuY2xhc3NMaXN0LmFkZCgnaWNvbi1sZWZ0Jyk7XHJcbiAgICBpY29uTGVmdC5zcmMgPSBpY29uO1xyXG4gICAgY29uc3QgaWNvblJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpY29uUmlnaHQuY2xhc3NMaXN0LmFkZCgnZGVjb3JhdGlvbnMnKTtcclxuICAgIGljb25SaWdodC5jbGFzc0xpc3QuYWRkKCdpY29uLXJpZ2h0Jyk7XHJcbiAgICBpY29uUmlnaHQuc3JjID0gaWNvbjtcclxuICAgIGNvbnN0IG1lbnVHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51Ry5jbGFzc0xpc3QuYWRkKCdtZW51LWdyb3VwJyk7XHJcbiAgICBtZW51Ry5jbGFzc0xpc3QuYWRkKCdpbm5lcicpO1xyXG4gICAgbWVudUcudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaWNvbkxlZnQpO1xyXG4gICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaWNvblJpZ2h0KTtcclxuICAgIG91dGVyLmFwcGVuZENoaWxkKG1lbnVHKTtcclxuICAgIHJldHVybiBvdXRlcjtcclxufVxyXG5cclxuY29uc3QgY3JlYXRlTWVudUl0ZW0gPSAobmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBpbWFnZSkgPT4ge1xyXG4gICAgY29uc3Qgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG91dGVyLmNsYXNzTGlzdC5hZGQoJ291dGVyJyk7XHJcblxyXG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XHJcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2lubmVyJyk7XHJcbiAgICBpdGVtLmlkID0gbmFtZTtcclxuXHJcbiAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgnaXRlbS1uYW1lJyk7XHJcbiAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcblxyXG4gICAgY29uc3QgaXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW1EZXNjLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZGVzYycpO1xyXG4gICAgaXRlbURlc2MudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXByaWNlJyk7XHJcbiAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcclxuICAgIFxyXG4gICAgY29uc3QgaXRlbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpdGVtSW1hZ2UuY2xhc3NMaXN0LmFkZCgnaXRlbS1pbWFnZScpO1xyXG4gICAgaXRlbUltYWdlLnNyYyA9IGltYWdlO1xyXG4gICAgXHJcbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcclxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbURlc2MpO1xyXG4gICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xyXG4gICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtSW1hZ2UpO1xyXG4gICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICByZXR1cm4gb3V0ZXI7XHJcbn1cclxuXHJcbmNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxubWVudUNvbnRhaW5lci5pZCA9ICdtZW51LWNvbnRhaW5lcic7XHJcbm1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcblxyXG5jb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCBtZW51SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxubWVudUltYWdlLnNyYyA9IG1lbnVJY29uO1xyXG5tZW51SW1hZ2UuY2xhc3NMaXN0LmFkZCgnZGVjb3JhdGlvbnMnKTtcclxubWVudUltYWdlLmNsYXNzTGlzdC5hZGQoJ2ljb24tbGVmdCcpO1xyXG5jb25zdCBtZW51SW1hZ2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbm1lbnVJbWFnZTEuc3JjID0gbWVudUljb247XHJcbm1lbnVJbWFnZTEuY2xhc3NMaXN0LmFkZCgnZGVjb3JhdGlvbnMnKTtcclxubWVudUltYWdlMS5jbGFzc0xpc3QuYWRkKCdpY29uLXJpZ2h0Jyk7XHJcbmNvbnN0IGlubmVySGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuaW5uZXJIZWFkbGluZS50ZXh0Q29udGVudCA9ICdNZW51JztcclxuaW5uZXJIZWFkbGluZS5jbGFzc0xpc3QuYWRkKCdpbm5lcicpO1xyXG5oZWFkbGluZS5jbGFzc0xpc3QuYWRkKCdoZWFkbGluZScpO1xyXG5oZWFkbGluZS5jbGFzc0xpc3QuYWRkKCdvdXRlcicpO1xyXG5oZWFkbGluZS5hcHBlbmRDaGlsZChtZW51SW1hZ2UpO1xyXG5oZWFkbGluZS5hcHBlbmRDaGlsZChtZW51SW1hZ2UxKTtcclxuaGVhZGxpbmUuYXBwZW5kQ2hpbGQoaW5uZXJIZWFkbGluZSk7XHJcbm1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xyXG5cclxuY29uc3QgbWFpbkRpc2ggPSBjcmVhdGVNZW51R3JvdXAoJ01haW4gRGlzaGVzJywgZGlzaEljb24pO1xyXG5jb25zdCBzdGVhayA9IGNyZWF0ZU1lbnVJdGVtKCdUb21haGF3ayBTdGVhaycsICckMTAwMCcsICdSYXJlIHN0ZWFrIGZyb20gdGhlIGZpZWxkcyBvZiBKYXBhbicsIHN0ZWFrSW1nKTtcclxuY29uc3Qgc2FsbW9uID0gY3JlYXRlTWVudUl0ZW0oJ0ZyZXNoIEF0bGFudGljIFNhbG1vbicsICckNDkuOTknLCAnRnJlc2ggY2F1Z2h0IHdpbGQgc2FsbW9uIG9mIHRoZSBBdGxhbnRpYycsIHNhbG1vbkltZyk7XHJcbmNvbnN0IGNoaWNrZW4gPSBjcmVhdGVNZW51SXRlbSgnR3JpbGxlZCBQZXJ1dmlhbiBDaGlja2VuJywgJyQyOS45OScsICdPcmdhbmljIGdyYXNzIGZlZCBjaGlja2VuJywgY2hpY2tlbkltZyk7XHJcbm1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkRpc2gpO1xyXG5tZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHN0ZWFrKTtcclxubWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChzYWxtb24pO1xyXG5tZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWNrZW4pO1xyXG5cclxuY29uc3QgYmV2cyA9IGNyZWF0ZU1lbnVHcm91cCgnQmV2ZXJhZ2VzJywgYmV2SWNvbik7XHJcbmNvbnN0IHNlbHR6ZXIgPSBjcmVhdGVNZW51SXRlbSgnSGFwcHkgRGFkJywgJyQ5Ljk5JywgJ0hhcmQgU2VsdHplciBmcm9tIE5lbGsgQm95cycsIHNlbHR6ZXJJbWcpO1xyXG5jb25zdCBiZWVyID0gY3JlYXRlTWVudUl0ZW0oJ1N0ZWxsYSBBcnRvaXMnLCAnJDcuOTknLCAnRnJlc2ggYmVlcicsIGJlZXJJbWcpO1xyXG5jb25zdCB0ZXF1aWxhID0gY3JlYXRlTWVudUl0ZW0oJ0Nhc2FtaWdvcycsICckMzkuOTknLCAnVGVxdWlsYSBiYWJ5ISEhJywgdGVxdWlsYUltZyk7XHJcbm1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoYmV2cyk7XHJcbm1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsdHplcik7XHJcbm1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoYmVlcik7XHJcbm1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQodGVxdWlsYSk7XHJcblxyXG5jb25zdCBzaWRlcyA9IGNyZWF0ZU1lbnVHcm91cCgnU2lkZXMnLCBzaWRlc0ljb24pO1xyXG5jb25zdCBmcmllcyA9IGNyZWF0ZU1lbnVJdGVtKCdGcmVuY2ggRnJpZXMnLCAnJDQuOTknLCAnRnJlc2ggY3V0IHBvdGF0b2VzJywgZnJpZXNJbWcpO1xyXG5jb25zdCBzYWxhZCA9IGNyZWF0ZU1lbnVJdGVtKCdLYWxlIFNhbGFkJywgJyQ2Ljk5JywgJ0ZyZXNoIHZlZ2V0YWJsZSBzYWxhZCcsIHNhbGFkSW1nKTtcclxubWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlcyk7XHJcbm1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJpZXMpO1xyXG5tZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHNhbGFkKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRNZW51ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG1lbnVDb250YWluZXI7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICcuL3N0eWxlcy90YWIuY3NzJztcclxuaW1wb3J0IHsgYWRkSG9tZXBhZ2UgfSBmcm9tIFwiLi9ob21lcGFnZVwiO1xyXG5pbXBvcnQgeyBhZGRNZW51IH0gZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgeyBhZGRDb250YWN0IH0gZnJvbSAnLi9jb250YWN0JztcclxuXHJcbmNvbnN0IGNyZWF0ZVRhYiA9ICh0ZXh0KSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YWItY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcclxuICAgIHRhYi50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFiKTtcclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmNvbnN0IHRhYnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAnSG9tZScsXHJcbiAgICAgICAgJ2Z1bmMnOiBhZGRIb21lcGFnZVxyXG4gICAgfSwgXHJcbiAgICB7IFxyXG4gICAgICAgICduYW1lJzogJ01lbnUnLFxyXG4gICAgICAgICdmdW5jJzogYWRkTWVudVxyXG4gICAgfSxcclxuICAgIHsgXHJcbiAgICAgICAgJ25hbWUnOiAnQ29udGFjdCcsXHJcbiAgICAgICAgJ2Z1bmMnOiBhZGRDb250YWN0XHJcbiAgICB9XHJcbl07XHJcblxyXG5jb25zdCBob21lID0gY3JlYXRlVGFiKCdIb21lJyk7XHJcbmNvbnN0IG1lbnUgPSBjcmVhdGVUYWIoJ01lbnUnKTtcclxuY29uc3QgY29udGFjdCA9IGNyZWF0ZVRhYignQ29udGFjdCcpO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YWJzJyk7XHJcblxyXG5jb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZSk7XHJcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51KTtcclxuY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xyXG5cclxuY29uc3QgYWRkVGFiID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IHsgXHJcbiAgICB0YWJzLCBcclxuICAgIGFkZFRhYiBcclxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=