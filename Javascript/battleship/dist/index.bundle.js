"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: Helvetica;   \r\n    list-style-type: none;\r\n    text-decoration: none;\r\n}\r\n\r\n/* ----------- HEADER ----------- */\r\n\r\nheader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 30px;\r\n}\r\n\r\nheader > h2 {\r\n    font-size: 35px;\r\n}\r\n\r\n#play {\r\n    display: flex;\r\n    padding: 7px 30px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n}\r\n\r\n/* ----------- GAMEBOARD ----------- */\r\n\r\n.battlefields {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.battlefield {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.battlefield-label {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.ui-draggable {\r\n    cursor: grab;\r\n}\r\n\r\n.ui-draggable:active {\r\n    cursor: grabbing;\r\n}\r\n\r\n.wait {\r\n    opacity: 0.2;\r\n    cursor: default;\r\n}\r\n\r\n.grid {\r\n    display: grid;\r\n}\r\n\r\n.row {\r\n    display: flex;\r\n}\r\n\r\nth {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.cell, td, th {\r\n    flex: 1;\r\n    height: 40px;\r\n    width: 40px;\r\n}\r\n\r\n.cell {\r\n    border: solid 1px;\r\n}\r\n\r\n.cell:hover {\r\n    background-color: lightblue;\r\n}\r\n\r\n.cell-fill {\r\n    background-color: blue;\r\n}\r\n\r\n.cell-hit {\r\n    background-color: red;\r\n}\r\n\r\n.cell-miss {\r\n    background-color: black;\r\n}\r\n\r\n/* ----------- SHIPYARD ----------- */\r\n\r\n.shipyard {\r\n    padding: 2rem;\r\n    align-self: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1px;\r\n}\r\n\r\n.shipyard > div {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 10px;\r\n}\r\n\r\n.ship-box {\r\n    height: 40px;\r\n    background-color: blue;\r\n    position: relative;\r\n}\r\n\r\n.rival > .shipyard {\r\n    display: none;\r\n}\r\n\r\n/* ----------- ATTACK-LIST ----------- */\r\n\r\n.attack-list {\r\n    display: flex;\r\n    gap: 5px;\r\n    height: 100px;\r\n    width: 100px;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-self: center;\r\n}\r\n\r\n.ship {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 1px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.ship-part {\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color: blue;\r\n}\r\n\r\n.hit {\r\n    background-color: red;\r\n}\r\n\r\n/* ----------- PLAY-AGAIN ----------- */\r\n\r\n.play-again-modal {\r\n    position: absolute;\r\n    left: 0; \r\n    right: 0; \r\n    margin-left: auto; \r\n    margin-right: auto; \r\n    width: 100px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,sBAAsB;IACtB,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA,mCAAmC;;AAEnC;IACI,aAAa;IACb,8BAA8B;IAC9B,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA,sCAAsC;;AAEtC;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,OAAO;IACP,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA,qCAAqC;;AAErC;IACI,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA,wCAAwC;;AAExC;IACI,aAAa;IACb,QAAQ;IACR,aAAa;IACb,YAAY;IACZ,eAAe;IACf,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA,uCAAuC;;AAEvC;IACI,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;AACtB","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: Helvetica;   \r\n    list-style-type: none;\r\n    text-decoration: none;\r\n}\r\n\r\n/* ----------- HEADER ----------- */\r\n\r\nheader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 30px;\r\n}\r\n\r\nheader > h2 {\r\n    font-size: 35px;\r\n}\r\n\r\n#play {\r\n    display: flex;\r\n    padding: 7px 30px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n}\r\n\r\n/* ----------- GAMEBOARD ----------- */\r\n\r\n.battlefields {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.battlefield {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.battlefield-label {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.ui-draggable {\r\n    cursor: grab;\r\n}\r\n\r\n.ui-draggable:active {\r\n    cursor: grabbing;\r\n}\r\n\r\n.wait {\r\n    opacity: 0.2;\r\n    cursor: default;\r\n}\r\n\r\n.grid {\r\n    display: grid;\r\n}\r\n\r\n.row {\r\n    display: flex;\r\n}\r\n\r\nth {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.cell, td, th {\r\n    flex: 1;\r\n    height: 40px;\r\n    width: 40px;\r\n}\r\n\r\n.cell {\r\n    border: solid 1px;\r\n}\r\n\r\n.cell:hover {\r\n    background-color: lightblue;\r\n}\r\n\r\n.cell-fill {\r\n    background-color: blue;\r\n}\r\n\r\n.cell-hit {\r\n    background-color: red;\r\n}\r\n\r\n.cell-miss {\r\n    background-color: black;\r\n}\r\n\r\n/* ----------- SHIPYARD ----------- */\r\n\r\n.shipyard {\r\n    padding: 2rem;\r\n    align-self: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1px;\r\n}\r\n\r\n.shipyard > div {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 10px;\r\n}\r\n\r\n.ship-box {\r\n    height: 40px;\r\n    background-color: blue;\r\n    position: relative;\r\n}\r\n\r\n.rival > .shipyard {\r\n    display: none;\r\n}\r\n\r\n/* ----------- ATTACK-LIST ----------- */\r\n\r\n.attack-list {\r\n    display: flex;\r\n    gap: 5px;\r\n    height: 100px;\r\n    width: 100px;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-self: center;\r\n}\r\n\r\n.ship {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 1px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.ship-part {\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color: blue;\r\n}\r\n\r\n.hit {\r\n    background-color: red;\r\n}\r\n\r\n/* ----------- PLAY-AGAIN ----------- */\r\n\r\n.play-again-modal {\r\n    position: absolute;\r\n    left: 0; \r\n    right: 0; \r\n    margin-left: auto; \r\n    margin-right: auto; \r\n    width: 100px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/components/AttackList.js":
/*!**************************************!*\
  !*** ./src/components/AttackList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const AttackList = (board) => {
  const { ships } = board;

  const element = document.createElement('div');
  element.classList.add('attack-list');

  ships.forEach((ship) => {
    const { length } = ship;
    const shipHitArray = document.createElement('div');
    shipHitArray.classList.add('ship');
    shipHitArray.dataset.id = ship.id;
    shipHitArray.classList.add(`length-${length}`);

    let index = 1;
    ship.hitArray.forEach(() => {
      const shipPart = document.createElement('div');
      shipPart.classList.add('ship-part');
      shipPart.classList.add(`part-${index}`);
      index += 1;
      shipHitArray.appendChild(shipPart);
    });

    element.appendChild(shipHitArray);
  });

  const update = (id) => {
    const ship = document.querySelector(`.ship[data-id='${id}']`);
    const found = [...ship.children].find((part) => !part.classList.contains('hit'));
    found.classList.add('hit');
  };
  return {
    element,
    update,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AttackList);


/***/ }),

/***/ "./src/components/Battlefield.js":
/*!***************************************!*\
  !*** ./src/components/Battlefield.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shipyard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shipyard */ "./src/components/Shipyard.js");


const Battlefield = (board) => {
  const element = document.createElement('div');
  element.classList.add('battlefield');

  const label = document.createElement('div');
  label.classList.add('battlefield-label');

  element.appendChild(label);
  element.appendChild(board.element);
  element.appendChild((0,_Shipyard__WEBPACK_IMPORTED_MODULE_0__["default"])());

  const setLabel = (text) => {
    label.textContent = text;
  };

  const setAttackList = (attackList) => {
    element.appendChild(attackList.element);
  };

  return {
    element,
    board,
    setLabel,
    setAttackList,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Battlefield);


/***/ }),

/***/ "./src/components/Gameboard.js":
/*!*************************************!*\
  !*** ./src/components/Gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../coords */ "./src/coords.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ship */ "./src/ship.js");



const GameboardComponent = (gameboard) => {
  const element = document.createElement('div');
  element.classList.add('gameboard');

  const boardGrid = document.createElement('table');
  boardGrid.classList.add('grid');

  const tableHead = document.createElement('thead');

  const lettersRow = document.createElement('tr');
  lettersRow.classList.add('row');
  const { length } = gameboard.size;
  const letterCodePoint = 65;
  for (let i = 0; i <= length; i += 1) {
    const th = document.createElement('th');
    th.scope = 'col';
    if (i !== 0) th.textContent = `${String.fromCodePoint(letterCodePoint + i - 1)}`;
    lettersRow.appendChild(th);
  }

  tableHead.appendChild(lettersRow);

  const tableBody = document.createElement('tbody');

  for (let i = 0; i < gameboard.size.length; i += 1) {
    const row = document.createElement('tr');
    row.classList.add('row');
    row.id = `row-${i}`;

    const th = document.createElement('th');
    th.scope = 'row';
    th.textContent = i + 1;
    row.appendChild(th);

    for (let j = 0; j < gameboard.size[0].length; j += 1) {
      const cell = document.createElement('td');
      cell.classList.add('cell');
      const content = document.createElement('div');
      content.classList.add('cell-content');
      content.dataset.x = i;
      content.dataset.y = j;
      cell.appendChild(content);

      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  }

  boardGrid.appendChild(tableHead);
  boardGrid.appendChild(tableBody);

  element.appendChild(boardGrid);

  const placeShip = (target, dragged) => {
    const content = target.firstChild;
    content.appendChild(dragged);
    const shipLength = Number(dragged.dataset.length);
    for (let i = 0; i < shipLength; i += 1) {
      target.classList.add('cell-busy');
      target = target.nextSibling;
    }
  };

  const changeCell = (x, y, target) => {
    gameboard.size[x][y] === undefined ? target.classList.add('cell-miss') : target.classList.add('cell-hit');
  };

  const receiveAttack = (player, target) => {
    let x;
    let y;
    let newTarget;

    if (target) {
      newTarget = target;
      if (!newTarget.classList.contains('cell-miss') && !newTarget.classList.contains('cell-hit')) {
        ({ x } = newTarget.children[0].dataset);
        ({ y } = newTarget.children[0].dataset);
        player.attack(x, y, gameboard);
      }
    } else {
      ({ x, y } = player.botAttack(gameboard));
      newTarget = document.querySelector(`.cell-content[data-x='${x}'][data-y='${y}']`).parentNode;
    }
    changeCell(x, y, newTarget);
    return { x, y };
  };

  const placeAllShips = () => {
    const ships = element.querySelectorAll('.ship-box');
    ships.forEach((ship) => {
      const shipLength = Number(ship.dataset.length);
      const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(shipLength);
      const parent = ship.parentNode;
      const x = Number(parent.dataset.x);
      const y = Number(parent.dataset.y);
      const coords = (0,_coords__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y);
      gameboard.placeShip(newShip, coords);
    });
  };

  return {
    element,
    gameboard,
    placeShip,
    receiveAttack,
    placeAllShips,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameboardComponent);


/***/ }),

/***/ "./src/components/PlayAgain.js":
/*!*************************************!*\
  !*** ./src/components/PlayAgain.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const PlayAgain = (winner) => {
    const element = document.createElement('div');
    element.classList.add('play-again-modal');

    const text = document.createElement('div');
    text.classList.add('play-again-text');
    text.textContent = `Game Over. ${winner} has won!`;

    const button = document.createElement('button');
    button.classList.add('play-again-button');
    button.textContent = 'Play Again';
    button.addEventListener('click', _utils__WEBPACK_IMPORTED_MODULE_0__.reset);

    element.appendChild(text);
    element.appendChild(button);

    return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayAgain);

/***/ }),

/***/ "./src/components/Ship.js":
/*!********************************!*\
  !*** ./src/components/Ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ShipComponent = (ship) => {
  const element = document.createElement('div');
  element.classList.add('ship-box');
  element.classList.add('ui-draggable');

  element.draggable = true;

  element.style.width = `${ship.length * 40}px`;

  element.dataset.id = Math.floor(Math.random() * 1000);

  element.dataset.length = ship.length;

  return {
    element,
    ship,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShipComponent);


/***/ }),

/***/ "./src/components/Shipyard.js":
/*!************************************!*\
  !*** ./src/components/Shipyard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/components/Ship.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ship */ "./src/ship.js");



const Shipyard = () => {
  const element = document.createElement('div');
  element.classList.add('shipyard');

  const len1Container = document.createElement('div');
  len1Container.classList.add('ships_len1');

  const ship_len1_1 = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(1)).element;
  const ship_len1_2 = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(1)).element;
  const ship_len1_3 = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(1)).element;
  const ship_len1_4 = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(1)).element;

  const len2Container = document.createElement('div');
  len2Container.classList.add('ships_len2');

  const ship_len2_1 = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(2)).element;
  const ship_len2_2 = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(2)).element;
  const ship_len2_3 = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(2)).element;

  const len3Container = document.createElement('div');
  len3Container.classList.add('ships_len3');

  const ship_len3_1 = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3)).element;
  const ship_len3_2 = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3)).element;

  const len4Container = document.createElement('div');
  len4Container.classList.add('ships_len4');

  const ship_len4_1 = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(4)).element;

  len1Container.appendChild(ship_len1_1);
  len1Container.appendChild(ship_len1_2);
  len1Container.appendChild(ship_len1_3);
  len1Container.appendChild(ship_len1_4);

  len2Container.appendChild(ship_len2_1);
  len2Container.appendChild(ship_len2_2);
  len2Container.appendChild(ship_len2_3);

  len3Container.appendChild(ship_len3_1);
  len3Container.appendChild(ship_len3_2);

  len4Container.appendChild(ship_len4_1);

  element.appendChild(len1Container);
  element.appendChild(len2Container);
  element.appendChild(len3Container);
  element.appendChild(len4Container);

  return element;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shipyard);


/***/ }),

/***/ "./src/coords.js":
/*!***********************!*\
  !*** ./src/coords.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Coords = (x, y) => {
    const obj = {};
    obj.x = x;
    obj.y = y;
    return obj;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Coords);

/***/ }),

/***/ "./src/drag.js":
/*!*********************!*\
  !*** ./src/drag.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Drag = (board) => {
  let dragged = null;

  const start = (ev) => {
    dragged = ev.target;
    let shipLength = dragged.dataset.length;
    let newTarget = ev.target.parentNode.parentNode;
    if (dragged.parentNode.parentNode.classList.contains('cell-busy')) {
      while (shipLength > 0) {
        newTarget.classList.remove('cell-busy');
        newTarget = newTarget.nextSibling;
        shipLength -= 1;
      }
    }
    ev.dataTransfer.setData('text', ev.target.id);
  };

  const dragover = (ev) => {
    ev.preventDefault();
  };

  const drop = (ev) => {
    ev.preventDefault();
    let shipLength = dragged.dataset.length;
    let newTarget = ev.target;
    while (shipLength > 0) {
      if (!newTarget) return;
      if (newTarget.classList.contains('cell-busy')) return;
      if (checkIfBusy(newTarget)) return;
      newTarget = newTarget.nextSibling;
      shipLength -= 1;
    }
    if (ev.target.classList.contains('cell')) {
      const { target } = ev;
      board.placeShip(target, dragged);
    }
  };

  const checkDirection = (x, y) => {
    const directions = [];
    const left = document.querySelector(`.cell-content[data-x='${x}'][data-y='${y - 1}']`);
    const right = document.querySelector(`.cell-content[data-x='${x}'][data-y='${y + 1}']`);
    const down = document.querySelector(`.cell-content[data-x='${x + 1}'][data-y='${y}']`);
    const up = document.querySelector(`.cell-content[data-x='${x - 1}'][data-y='${y}']`);
    const lld = document.querySelector(`.cell-content[data-x='${x + 1}'][data-y='${y - 1}']`);
    const lud = document.querySelector(`.cell-content[data-x='${x - 1}'][data-y='${y - 1}']`);
    const rld = document.querySelector(`.cell-content[data-x='${x + 1}'][data-y='${y + 1}']`);
    const rud = document.querySelector(`.cell-content[data-x='${x - 1}'][data-y='${y + 1}']`);
    if (left) directions.push(left);
    if (right) directions.push(right);
    if (down) directions.push(down);
    if (up) directions.push(up);
    if (lld) directions.push(lld);
    if (lud) directions.push(lud);
    if (rld) directions.push(rld);
    if (rud) directions.push(rud);
    return directions;
  };

  const checkIfBusy = (target) => {
    let x;
    let y;
    if (target.classList.contains('ship-box')) {
      x = Number(target.parentNode.dataset.x);
      y = Number(target.parentNode.dataset.y);
    } else {
      x = Number(target.firstChild.dataset.x);
      y = Number(target.firstChild.dataset.y);
    }

    const directions = checkDirection(x, y);
    for (let j = 0; j < directions.length; j += 1) {
      const direction = directions[j].parentNode;
      if (direction.classList.contains('cell-busy')) return true;
    }
    return false;
  };

  return {
    start,
    dragover,
    drop,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Drag);


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_AttackList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AttackList */ "./src/components/AttackList.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _components_PlayAgain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/PlayAgain */ "./src/components/PlayAgain.js");




const Game = (boards, players) => {
  const { player1, player2 } = players;
  const { field1, field2 } = boards;

  // game starts
  document.querySelector('.self .shipyard').style.display = 'none';
  const rival = document.querySelector('.rival');
  const self = document.querySelector('.self .gameboard');
  rival.classList.remove('wait');
  self.classList.add('wait');
  field1.board.placeAllShips();
  const attackList1 = (0,_components_AttackList__WEBPACK_IMPORTED_MODULE_0__["default"])(field1.board.gameboard);
  const attackList2 = (0,_components_AttackList__WEBPACK_IMPORTED_MODULE_0__["default"])(field2.board.gameboard);
  field1.setAttackList(attackList1);
  field2.setAttackList(attackList2);

  const turnTracker = [];
  const setTurn = () => {
    if (turnTracker.length === 0) {
      turnTracker.push(player1);
      return { player: player1, field: field2 };
    }

    // player2's turn
    if (turnTracker[turnTracker.length - 1] === player1) {
      turnTracker.push(player2);
      return { player: player2, field: field1 };
    }

    // player1's turn
    if (turnTracker[turnTracker.length - 1] === player2) {
      turnTracker.push(player1);
      return { player: player1, field: field2 };
    }
  };

  const isGameOver = (board, player) => {
    if (board.allShipsSunk()) {
      setTimeout(() => {
        console.log('Game Over');
        document.querySelector('.battlefields').classList.add('wait');
        const header = document.querySelector('header h2');
        header.after((0,_components_PlayAgain__WEBPACK_IMPORTED_MODULE_2__["default"])(player.name));
      }, 200);
    }
  };

  let { player, field } = setTurn();
  const playerMove = (e) => {
    const missedAtkCount = field.board.gameboard.missedAttacks.length;
    const { x, y } = field.board.receiveAttack(player, e.target);
    isGameOver(field.board.gameboard, player);
    if (missedAtkCount !== field.board.gameboard.missedAttacks.length) {
      ({ player, field } = setTurn());
    } else {
      const { id } = field.board.gameboard.size[x][y];
      attackList2.update(id);
    }
  };

  const botMove = () => {
    const missedAtkCount = field.board.gameboard.missedAttacks.length;
    const { x, y } = field.board.receiveAttack(player);
    isGameOver(field.board.gameboard, player);
    if (missedAtkCount !== field.board.gameboard.missedAttacks.length) {
      ({ player, field } = setTurn());
    } else {
      const { id } = field.board.gameboard.size[x][y];
      attackList1.update(id);
      botMove();
    }
  };

  const fullTurn = (e) => {
    field2.board.element.classList.remove('wait');
    playerMove(e);
    if (player.name === 'bot') {
      field2.board.element.classList.add('wait');
      field1.board.element.classList.remove('wait');
      document.querySelectorAll('.rival .cell').forEach((cell) => {
        cell.removeEventListener('click', fullTurn);
      });
      setTimeout(() => {
        botMove();
        field1.board.element.classList.add('wait');
        field2.board.element.classList.remove('wait');
        document.querySelectorAll('.rival .cell').forEach((cell) => {
          cell.addEventListener('click', fullTurn);
        });
      }, 1000);
    }
    isGameOver(field1.board.gameboard, player2);
  };

  document.querySelectorAll('.ship-box').forEach((ship) => {
    ship.parentNode.removeChild(ship);
  });
  document.querySelectorAll('.rival .cell').forEach((cell) => {
    cell.addEventListener('click', fullTurn);
  });

  // ---- 2 PLAYER LOGIC ----
  // const selfBoard = document.querySelector('.self .gameboard');
  // const rivalBoard = document.querySelector('.rival .gameboard');

  // ({ currentPlayer, currentField } = setTurn());
  // }

  // const makeMove = (e) => {
  //   const content = e.target.children[0];
  //   const { x } = content.dataset;
  //   const { y } = content.dataset;
  //   const boardElement = e.target.parentNode.parentNode.parentNode.parentNode;
  //   const board = boardElement.parentNode.classList.contains('self') ? field1.board.gameboard : field2.board.gameboard;
  //   const otherBoardElement = board === field1.board.gameboard ? rivalBoard : selfBoard;
  //   const boardCells = boardElement.querySelectorAll('.cell');
  //   const otherBoardCells = otherBoardElement.querySelectorAll('.cell');
  //   if (!e.target.classList.contains('cell-miss') && !e.target.classList.contains('cell-hit')) {
  //     board.size[x][y] === undefined ? e.target.classList.add('cell-miss') : e.target.classList.add('cell-hit');
  //     currentPlayer.attack(x, y, board);
  //     if (board.allShipsSunk()) {
  //       // removeMove(boardCells);
  //       removeMove(otherBoardCells);
  //       setTimeout(() => {
  //         console.log('Game Over');
  //         document.querySelector('.battlefields').classList.add('wait');
  //         const header = document.querySelector('header h2');
  //         header.after(PlayAgain(currentPlayer.name));
  //       }, 500);
  //     }
  //     if (e.target.classList.contains('cell-miss')) {
  //       // removeMove(boardCells);
  //       addMove(otherBoardCells);
  //       boardElement.classList.add('wait');
  //       otherBoardElement.classList.remove('wait');
  //       currentPlayer = setTurn();
  //       const otherBoard = boardElement.parentNode.classList.contains('self') ? field2.board.gameboard : field1.board.gameboard;
  //       const botAttack = setInterval(() => {
  //         const botAttackCoords = currentPlayer.botAttack(otherBoard);
  //         const botX = botAttackCoords.x;
  //         const botY = botAttackCoords.y;
  //         const targetE = document.querySelector(`.cell-content[data-x='${botX}'][data-y='${botY}']`).parentNode;
  //         otherBoard.size[botX][botY] === undefined ? targetE.classList.add('cell-miss') : targetE.classList.add('cell-hit');
  //         console.log(`x: ${botX} y: ${botY} ${currentPlayer.name}`);
  //         if (targetE.classList.contains('cell-miss')) {
  //           // addMove(boardCells);
  //           removeMove(otherBoardCells);
  //           boardElement.classList.remove('wait');
  //           otherBoardElement.classList.add('wait');
  //           currentPlayer = setTurn();
  //           console.log(`After turn ${currentPlayer.name}`);
  //           clearInterval(botAttack);
  //         }
  //       }, 1000);
  //     }
  //   }
  // };

  const resetButton = document.querySelector('#leave-game');
  resetButton.addEventListener('click', () => {
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.reset)(field1, field2);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coords */ "./src/coords.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");



const Gameboard = (factor) => {
  const obj = Object.create(gameboardFunctions);
  obj.size = Array.from(Array(factor), () => (Array(factor)));
  obj.missedAttacks = [];
  obj.successfulAttacks = [];
  obj.ships = [];
  return obj;
};

const gameboardFunctions = {
  placeShip(ship, coords, direction = 'horizontal') {
    if (direction === 'vertical' && Number(coords.x) + Number(ship.length) > this.size.length + 1) {
      throw Error('Ship out of bounds');
    }
    if (direction === 'horizontal' && Number(coords.y) + Number(ship.length) > this.size[0].length + 1) {
      throw Error('Ship out of bounds');
    }

    this.ships.push(ship);
    for (let i = 0; i < ship.length; i++) {
      direction === 'horizontal'
        ? this.size[coords.x][coords.y + i] = ship
        : this.size[coords.x + i][coords.y] = ship;
    }
  },
  receiveAttack(coords) {
    const ship = this.size[coords.x][coords.y];
    if (ship) {
      const position = this.calculateShipPosition(coords);
      ship.hit(position);
      this.successfulAttacks.push(coords);
    } else {
      this.missedAttacks.push(coords);
    }
  },
  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  },
  calculateShipPosition(coords) {
    let { x } = coords;
    let { y } = coords;
    const start = { x, y };
    let position = 0;
    
    // vertically placed ships
    // if (x - 1 >= 0 && x + 1 < this.size.length) {
    //   console.log(`x: ${x}`)
    //   if (this.size[x - 1][y] !== undefined) {
    //     while (x >= 0 && this.size[x][y] !== undefined) {
    //       start.x = x;
    //       x--;
    //     }
    //     if (coords.x !== start.x) position = coords.x - start.x;
    //   }
    // }

    // horizontally placed ships
    if (y - 1 >= 0 && y < this.size.length) {
      if (this.size[x][y - 1] !== undefined) {
        while (y >= 0 && this.size[x][y] !== undefined) {
          start.y = y;
          y--;
        }
        if (coords.y !== start.y) position = coords.y - start.y;
      }
    }
    return position;
  },
  getAttackableCells() {
    const attackableCells = [];
    const cells = this.size;
    for (let i = 0; i < cells.length; i++) {
      for (let j = 0; j < cells[0].length; j++) {
        const coords = (0,_coords__WEBPACK_IMPORTED_MODULE_0__["default"])(i, j);
        const position = this.calculateShipPosition(coords);
        if (cells[i][j] === undefined || !cells[i][j].hitArray[position]) {
          attackableCells.push(coords);
        }
      }
    }
    return attackableCells;
  },
  generateShips() {
    const ship1L_1 = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(1);
    const ship1L_2 = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(1);
    const ship1L_3 = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(1);
    const ship1L_4 = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(1);

    const ship2L_1 = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(2);
    const ship2L_2 = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(2);
    const ship2L_3 = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(2);

    const ship3L_1 = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3);
    const ship3L_2 = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3);

    const ship4L_1 = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(4);

    const coords1 = (0,_coords__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 0);
    const coords2 = (0,_coords__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 2);
    const coords3 = (0,_coords__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 4);
    const coords4 = (0,_coords__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 6);
    const coords5 = (0,_coords__WEBPACK_IMPORTED_MODULE_0__["default"])(2, 0);
    const coords6 = (0,_coords__WEBPACK_IMPORTED_MODULE_0__["default"])(4, 0);
    const coords7 = (0,_coords__WEBPACK_IMPORTED_MODULE_0__["default"])(6, 0);
    const coords8 = (0,_coords__WEBPACK_IMPORTED_MODULE_0__["default"])(3, 3);
    const coords9 = (0,_coords__WEBPACK_IMPORTED_MODULE_0__["default"])(5, 6);
    const coords10 = (0,_coords__WEBPACK_IMPORTED_MODULE_0__["default"])(9, 3);

    this.placeShip(ship1L_1, coords1);
    this.placeShip(ship1L_2, coords2);
    this.placeShip(ship1L_3, coords3);
    this.placeShip(ship1L_4, coords4);

    this.placeShip(ship2L_1, coords5);
    this.placeShip(ship2L_2, coords6);
    this.placeShip(ship2L_3, coords7);

    this.placeShip(ship3L_1, coords8);
    this.placeShip(ship3L_2, coords9);

    this.placeShip(ship4L_1, coords10);
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Gameboard */ "./src/components/Gameboard.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _components_Battlefield__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Battlefield */ "./src/components/Battlefield.js");
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setup */ "./src/setup.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./src/utils.js");









const gameboard1 = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])(10);
const gameboard2 = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])(10);
gameboard2.generateShips();

const field = document.querySelector('.battlefields');

const boardComponent1 = (0,_components_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])(gameboard1);
const boardComponent2 = (0,_components_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])(gameboard2);

const field1 = (0,_components_Battlefield__WEBPACK_IMPORTED_MODULE_5__["default"])(boardComponent1);
const field2 = (0,_components_Battlefield__WEBPACK_IMPORTED_MODULE_5__["default"])(boardComponent2);
field1.element.classList.add('self');
field2.element.classList.add('rival');

field1.setLabel('Your Grid');
field2.setLabel('Rival Grid');

field.appendChild(field1.element);
field.appendChild(field2.element);

(0,_setup__WEBPACK_IMPORTED_MODULE_6__["default"])(field1.board);

const playButton = document.querySelector('#play');
playButton.addEventListener('click', () => {
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_7__.checkAllShipsPlaced)()) {
    alert('Please place all remaining ships on the board');
  } else {
    (0,_game__WEBPACK_IMPORTED_MODULE_3__["default"])(
      { field1, field2 },
      { player1: (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])('will'), player2: (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])('bot') },
    );
    playButton.style.display = 'none';
  }
});


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coords */ "./src/coords.js");


const Player = (name) => {
    let obj = Object.create(playerFunctions);
    obj.name = name;
    return obj;
}

const playerFunctions = {
    attack(x, y, gameboard) {
        const coords = { x: x, y: y };
        gameboard.receiveAttack(coords);
    },
    botAttack(gameboard) {
        const attackableCells = gameboard.getAttackableCells();
        const length = gameboard.size.length;
        let x = Math.floor(Math.random() * length);
        let y = Math.floor(Math.random() * length);
        let newCoords = (0,_coords__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y);
        let found = attackableCells.find(cell => JSON.stringify(cell) === JSON.stringify(newCoords));
        while (found === undefined) {
            let newX = Math.floor(Math.random() * length);
            let newY = Math.floor(Math.random() * length);
            newCoords = (0,_coords__WEBPACK_IMPORTED_MODULE_0__["default"])(newX, newY);
            found = attackableCells.find(({x, y}) => { x === newCoords.x && y === newCoords.y});
        }
        gameboard.receiveAttack(found);
        return found;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/setup.js":
/*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _drag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag */ "./src/drag.js");


const setUp = (board) => {
  console.log('setting up');
  document.querySelector('.rival').classList.add('wait');
  const drag = (0,_drag__WEBPACK_IMPORTED_MODULE_0__["default"])(board);
  document.querySelectorAll('.ship-box').forEach((ship) => ship.addEventListener('dragstart', drag.start));
  document.querySelectorAll('.self .cell').forEach((cell) => cell.addEventListener('dragover', drag.dragover));
  document.querySelectorAll('.self .cell').forEach((cell) => cell.addEventListener('drop', drag.drop));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setUp);


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (length) => {
  const obj = Object.create(shipFunctions);
  obj.id = Math.floor(Math.random() * 1000);
  obj.length = length;
  obj.hitArray = Array(length).fill(false);
  return obj;
};

const shipFunctions = {
  isSunk() {
    return this.hitArray.every((hitbox) => hitbox === true);
  },
  hit(num) {
    if (num < this.length) this.hitArray[num] = true;
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkAllShipsPlaced": () => (/* binding */ checkAllShipsPlaced),
/* harmony export */   "reset": () => (/* binding */ reset)
/* harmony export */ });
/* harmony import */ var _components_Battlefield__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Battlefield */ "./src/components/Battlefield.js");
/* harmony import */ var _components_Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Gameboard */ "./src/components/Gameboard.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");




const reset = (field1, field2) => {
  const gameboard1 = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"])(10);
  const gameboard2 = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"])(10);
  gameboard2.generateShips();

  const boardComponent1 = (0,_components_Gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])(gameboard1);
  const boardComponent2 = (0,_components_Gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])(gameboard2);

  field1 = (0,_components_Battlefield__WEBPACK_IMPORTED_MODULE_0__["default"])(boardComponent1);
  field2 = (0,_components_Battlefield__WEBPACK_IMPORTED_MODULE_0__["default"])(boardComponent2);
  window.location.reload();
};

const checkAllShipsPlaced = () => {
  const ships = document.querySelectorAll('.self .shipyard div');
  for (const ship of ships) {
    if (ship.children.length !== 0) return false;
  }
  return true;
};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWUsaURBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDWHJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakIrQjtBQUNLO0FBQ3BCO0FBQ3BDO0FBQ0E7QUFDQSxxQkFBcUIsc0RBQVM7QUFDOUIscUJBQXFCLHNEQUFTO0FBQzlCO0FBQ0E7QUFDQSwwQkFBMEIsaUVBQWtCO0FBQzVDLDBCQUEwQixpRUFBa0I7QUFDNUM7QUFDQSxXQUFXLG1FQUFXO0FBQ3RCLFdBQVcsbUVBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9BdHRhY2tMaXN0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9CYXR0bGVmaWVsZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9QbGF5QWdhaW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL1NoaXB5YXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29vcmRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZHJhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NldHVwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgICBcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tIEhFQURFUiAtLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyID4gaDIge1xcclxcbiAgICBmb250LXNpemU6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbiNwbGF5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZzogN3B4IDMwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLSBHQU1FQk9BUkQgLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4uYmF0dGxlZmllbGRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5iYXR0bGVmaWVsZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5iYXR0bGVmaWVsZC1sYWJlbCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udWktZHJhZ2dhYmxlIHtcXHJcXG4gICAgY3Vyc29yOiBncmFiO1xcclxcbn1cXHJcXG5cXHJcXG4udWktZHJhZ2dhYmxlOmFjdGl2ZSB7XFxyXFxuICAgIGN1cnNvcjogZ3JhYmJpbmc7XFxyXFxufVxcclxcblxcclxcbi53YWl0IHtcXHJcXG4gICAgb3BhY2l0eTogMC4yO1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi5ncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbnRoIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLCB0ZCwgdGgge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbCB7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwtZmlsbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLWhpdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwtbWlzcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLSBTSElQWUFSRCAtLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi5zaGlweWFyZCB7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5zaGlweWFyZCA+IGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWJveCB7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucml2YWwgPiAuc2hpcHlhcmQge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLSBBVFRBQ0stTElTVCAtLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi5hdHRhY2stbGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBnYXA6IDFweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXBhcnQge1xcclxcbiAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLSBQTEFZLUFHQUlOIC0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuLnBsYXktYWdhaW4tbW9kYWwge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDA7IFxcclxcbiAgICByaWdodDogMDsgXFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyBcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixxQkFBcUI7QUFDekI7O0FBRUEsbUNBQW1DOztBQUVuQztJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQSxzQ0FBc0M7O0FBRXRDO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBLHFDQUFxQzs7QUFFckM7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEsd0NBQXdDOztBQUV4QztJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQSx1Q0FBdUM7O0FBRXZDO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7ICAgXFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLSBIRUFERVIgLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciA+IGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmc6IDdweCAzMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0gR0FNRUJPQVJEIC0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuLmJhdHRsZWZpZWxkcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYmF0dGxlZmllbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uYmF0dGxlZmllbGQtbGFiZWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnVpLWRyYWdnYWJsZSB7XFxyXFxuICAgIGN1cnNvcjogZ3JhYjtcXHJcXG59XFxyXFxuXFxyXFxuLnVpLWRyYWdnYWJsZTphY3RpdmUge1xcclxcbiAgICBjdXJzb3I6IGdyYWJiaW5nO1xcclxcbn1cXHJcXG5cXHJcXG4ud2FpdCB7XFxyXFxuICAgIG9wYWNpdHk6IDAuMjtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcblxcclxcbi5yb3cge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG50aCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbCwgdGQsIHRoIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGw6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLWZpbGwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC1oaXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLW1pc3Mge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0gU0hJUFlBUkQgLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4uc2hpcHlhcmQge1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcHlhcmQgPiBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1ib3gge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJpdmFsID4gLnNoaXB5YXJkIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0gQVRUQUNLLUxJU1QgLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4uYXR0YWNrLWxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaGlwIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiAxcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1wYXJ0IHtcXHJcXG4gICAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0gUExBWS1BR0FJTiAtLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi5wbGF5LWFnYWluLW1vZGFsIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwOyBcXHJcXG4gICAgcmlnaHQ6IDA7IFxcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bzsgXFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IEF0dGFja0xpc3QgPSAoYm9hcmQpID0+IHtcclxuICBjb25zdCB7IHNoaXBzIH0gPSBib2FyZDtcclxuXHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYXR0YWNrLWxpc3QnKTtcclxuXHJcbiAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xyXG4gICAgY29uc3QgeyBsZW5ndGggfSA9IHNoaXA7XHJcbiAgICBjb25zdCBzaGlwSGl0QXJyYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNoaXBIaXRBcnJheS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XHJcbiAgICBzaGlwSGl0QXJyYXkuZGF0YXNldC5pZCA9IHNoaXAuaWQ7XHJcbiAgICBzaGlwSGl0QXJyYXkuY2xhc3NMaXN0LmFkZChgbGVuZ3RoLSR7bGVuZ3RofWApO1xyXG5cclxuICAgIGxldCBpbmRleCA9IDE7XHJcbiAgICBzaGlwLmhpdEFycmF5LmZvckVhY2goKCkgPT4ge1xyXG4gICAgICBjb25zdCBzaGlwUGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBzaGlwUGFydC5jbGFzc0xpc3QuYWRkKCdzaGlwLXBhcnQnKTtcclxuICAgICAgc2hpcFBhcnQuY2xhc3NMaXN0LmFkZChgcGFydC0ke2luZGV4fWApO1xyXG4gICAgICBpbmRleCArPSAxO1xyXG4gICAgICBzaGlwSGl0QXJyYXkuYXBwZW5kQ2hpbGQoc2hpcFBhcnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChzaGlwSGl0QXJyYXkpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCB1cGRhdGUgPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2hpcFtkYXRhLWlkPScke2lkfSddYCk7XHJcbiAgICBjb25zdCBmb3VuZCA9IFsuLi5zaGlwLmNoaWxkcmVuXS5maW5kKChwYXJ0KSA9PiAhcGFydC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpKTtcclxuICAgIGZvdW5kLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xyXG4gIH07XHJcbiAgcmV0dXJuIHtcclxuICAgIGVsZW1lbnQsXHJcbiAgICB1cGRhdGUsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF0dGFja0xpc3Q7XHJcbiIsImltcG9ydCBTaGlweWFyZCBmcm9tICcuL1NoaXB5YXJkJztcclxuXHJcbmNvbnN0IEJhdHRsZWZpZWxkID0gKGJvYXJkKSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmF0dGxlZmllbGQnKTtcclxuXHJcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdiYXR0bGVmaWVsZC1sYWJlbCcpO1xyXG5cclxuICBlbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICBlbGVtZW50LmFwcGVuZENoaWxkKGJvYXJkLmVsZW1lbnQpO1xyXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoU2hpcHlhcmQoKSk7XHJcblxyXG4gIGNvbnN0IHNldExhYmVsID0gKHRleHQpID0+IHtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gdGV4dDtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZXRBdHRhY2tMaXN0ID0gKGF0dGFja0xpc3QpID0+IHtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYXR0YWNrTGlzdC5lbGVtZW50KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZWxlbWVudCxcclxuICAgIGJvYXJkLFxyXG4gICAgc2V0TGFiZWwsXHJcbiAgICBzZXRBdHRhY2tMaXN0LFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXR0bGVmaWVsZDtcclxuIiwiaW1wb3J0IENvb3JkcyBmcm9tICcuLi9jb29yZHMnO1xyXG5pbXBvcnQgU2hpcCBmcm9tICcuLi9zaGlwJztcclxuXHJcbmNvbnN0IEdhbWVib2FyZENvbXBvbmVudCA9IChnYW1lYm9hcmQpID0+IHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQnKTtcclxuXHJcbiAgY29uc3QgYm9hcmRHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcclxuICBib2FyZEdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZCcpO1xyXG5cclxuICBjb25zdCB0YWJsZUhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xyXG5cclxuICBjb25zdCBsZXR0ZXJzUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICBsZXR0ZXJzUm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xyXG4gIGNvbnN0IHsgbGVuZ3RoIH0gPSBnYW1lYm9hcmQuc2l6ZTtcclxuICBjb25zdCBsZXR0ZXJDb2RlUG9pbnQgPSA2NTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8PSBsZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgdGguc2NvcGUgPSAnY29sJztcclxuICAgIGlmIChpICE9PSAwKSB0aC50ZXh0Q29udGVudCA9IGAke1N0cmluZy5mcm9tQ29kZVBvaW50KGxldHRlckNvZGVQb2ludCArIGkgLSAxKX1gO1xyXG4gICAgbGV0dGVyc1Jvdy5hcHBlbmRDaGlsZCh0aCk7XHJcbiAgfVxyXG5cclxuICB0YWJsZUhlYWQuYXBwZW5kQ2hpbGQobGV0dGVyc1Jvdyk7XHJcblxyXG4gIGNvbnN0IHRhYmxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZWJvYXJkLnNpemUubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93Jyk7XHJcbiAgICByb3cuaWQgPSBgcm93LSR7aX1gO1xyXG5cclxuICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgIHRoLnNjb3BlID0gJ3Jvdyc7XHJcbiAgICB0aC50ZXh0Q29udGVudCA9IGkgKyAxO1xyXG4gICAgcm93LmFwcGVuZENoaWxkKHRoKTtcclxuXHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdhbWVib2FyZC5zaXplWzBdLmxlbmd0aDsgaiArPSAxKSB7XHJcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NlbGwtY29udGVudCcpO1xyXG4gICAgICBjb250ZW50LmRhdGFzZXQueCA9IGk7XHJcbiAgICAgIGNvbnRlbnQuZGF0YXNldC55ID0gajtcclxuICAgICAgY2VsbC5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuXHJcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgIH1cclxuICAgIHRhYmxlQm9keS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gIH1cclxuXHJcbiAgYm9hcmRHcmlkLmFwcGVuZENoaWxkKHRhYmxlSGVhZCk7XHJcbiAgYm9hcmRHcmlkLmFwcGVuZENoaWxkKHRhYmxlQm9keSk7XHJcblxyXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYm9hcmRHcmlkKTtcclxuXHJcbiAgY29uc3QgcGxhY2VTaGlwID0gKHRhcmdldCwgZHJhZ2dlZCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRhcmdldC5maXJzdENoaWxkO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkcmFnZ2VkKTtcclxuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBOdW1iZXIoZHJhZ2dlZC5kYXRhc2V0Lmxlbmd0aCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnY2VsbC1idXN5Jyk7XHJcbiAgICAgIHRhcmdldCA9IHRhcmdldC5uZXh0U2libGluZztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VDZWxsID0gKHgsIHksIHRhcmdldCkgPT4ge1xyXG4gICAgZ2FtZWJvYXJkLnNpemVbeF1beV0gPT09IHVuZGVmaW5lZCA/IHRhcmdldC5jbGFzc0xpc3QuYWRkKCdjZWxsLW1pc3MnKSA6IHRhcmdldC5jbGFzc0xpc3QuYWRkKCdjZWxsLWhpdCcpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAocGxheWVyLCB0YXJnZXQpID0+IHtcclxuICAgIGxldCB4O1xyXG4gICAgbGV0IHk7XHJcbiAgICBsZXQgbmV3VGFyZ2V0O1xyXG5cclxuICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgbmV3VGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICBpZiAoIW5ld1RhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwtbWlzcycpICYmICFuZXdUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsLWhpdCcpKSB7XHJcbiAgICAgICAgKHsgeCB9ID0gbmV3VGFyZ2V0LmNoaWxkcmVuWzBdLmRhdGFzZXQpO1xyXG4gICAgICAgICh7IHkgfSA9IG5ld1RhcmdldC5jaGlsZHJlblswXS5kYXRhc2V0KTtcclxuICAgICAgICBwbGF5ZXIuYXR0YWNrKHgsIHksIGdhbWVib2FyZCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICh7IHgsIHkgfSA9IHBsYXllci5ib3RBdHRhY2soZ2FtZWJvYXJkKSk7XHJcbiAgICAgIG5ld1RhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsLWNvbnRlbnRbZGF0YS14PScke3h9J11bZGF0YS15PScke3l9J11gKS5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlQ2VsbCh4LCB5LCBuZXdUYXJnZXQpO1xyXG4gICAgcmV0dXJuIHsgeCwgeSB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBsYWNlQWxsU2hpcHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzaGlwcyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtYm94Jyk7XHJcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBOdW1iZXIoc2hpcC5kYXRhc2V0Lmxlbmd0aCk7XHJcbiAgICAgIGNvbnN0IG5ld1NoaXAgPSBTaGlwKHNoaXBMZW5ndGgpO1xyXG4gICAgICBjb25zdCBwYXJlbnQgPSBzaGlwLnBhcmVudE5vZGU7XHJcbiAgICAgIGNvbnN0IHggPSBOdW1iZXIocGFyZW50LmRhdGFzZXQueCk7XHJcbiAgICAgIGNvbnN0IHkgPSBOdW1iZXIocGFyZW50LmRhdGFzZXQueSk7XHJcbiAgICAgIGNvbnN0IGNvb3JkcyA9IENvb3Jkcyh4LCB5KTtcclxuICAgICAgZ2FtZWJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBjb29yZHMpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGVsZW1lbnQsXHJcbiAgICBnYW1lYm9hcmQsXHJcbiAgICBwbGFjZVNoaXAsXHJcbiAgICByZWNlaXZlQXR0YWNrLFxyXG4gICAgcGxhY2VBbGxTaGlwcyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkQ29tcG9uZW50O1xyXG4iLCJpbXBvcnQgeyByZXNldCB9IGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmNvbnN0IFBsYXlBZ2FpbiA9ICh3aW5uZXIpID0+IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncGxheS1hZ2Fpbi1tb2RhbCcpO1xyXG5cclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRleHQuY2xhc3NMaXN0LmFkZCgncGxheS1hZ2Fpbi10ZXh0Jyk7XHJcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gYEdhbWUgT3Zlci4gJHt3aW5uZXJ9IGhhcyB3b24hYDtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwbGF5LWFnYWluLWJ1dHRvbicpO1xyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1BsYXkgQWdhaW4nO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXQpO1xyXG5cclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXlBZ2FpbjsiLCJjb25zdCBTaGlwQ29tcG9uZW50ID0gKHNoaXApID0+IHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzaGlwLWJveCcpO1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndWktZHJhZ2dhYmxlJyk7XHJcblxyXG4gIGVsZW1lbnQuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuXHJcbiAgZWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3NoaXAubGVuZ3RoICogNDB9cHhgO1xyXG5cclxuICBlbGVtZW50LmRhdGFzZXQuaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcclxuXHJcbiAgZWxlbWVudC5kYXRhc2V0Lmxlbmd0aCA9IHNoaXAubGVuZ3RoO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZWxlbWVudCxcclxuICAgIHNoaXAsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoaXBDb21wb25lbnQ7XHJcbiIsImltcG9ydCBTaGlwQ29tcG9uZW50IGZyb20gJy4vU2hpcCc7XHJcbmltcG9ydCBTaGlwIGZyb20gJy4uL3NoaXAnO1xyXG5cclxuY29uc3QgU2hpcHlhcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hpcHlhcmQnKTtcclxuXHJcbiAgY29uc3QgbGVuMUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxlbjFDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hpcHNfbGVuMScpO1xyXG5cclxuICBjb25zdCBzaGlwX2xlbjFfMSA9IFNoaXBDb21wb25lbnQoU2hpcCgxKSkuZWxlbWVudDtcclxuICBjb25zdCBzaGlwX2xlbjFfMiA9IFNoaXBDb21wb25lbnQoU2hpcCgxKSkuZWxlbWVudDtcclxuICBjb25zdCBzaGlwX2xlbjFfMyA9IFNoaXBDb21wb25lbnQoU2hpcCgxKSkuZWxlbWVudDtcclxuICBjb25zdCBzaGlwX2xlbjFfNCA9IFNoaXBDb21wb25lbnQoU2hpcCgxKSkuZWxlbWVudDtcclxuXHJcbiAgY29uc3QgbGVuMkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxlbjJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hpcHNfbGVuMicpO1xyXG5cclxuICBjb25zdCBzaGlwX2xlbjJfMSA9IFNoaXBDb21wb25lbnQoU2hpcCgyKSkuZWxlbWVudDtcclxuICBjb25zdCBzaGlwX2xlbjJfMiA9IFNoaXBDb21wb25lbnQoU2hpcCgyKSkuZWxlbWVudDtcclxuICBjb25zdCBzaGlwX2xlbjJfMyA9IFNoaXBDb21wb25lbnQoU2hpcCgyKSkuZWxlbWVudDtcclxuXHJcbiAgY29uc3QgbGVuM0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxlbjNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hpcHNfbGVuMycpO1xyXG5cclxuICBjb25zdCBzaGlwX2xlbjNfMSA9IFNoaXBDb21wb25lbnQoU2hpcCgzKSkuZWxlbWVudDtcclxuICBjb25zdCBzaGlwX2xlbjNfMiA9IFNoaXBDb21wb25lbnQoU2hpcCgzKSkuZWxlbWVudDtcclxuXHJcbiAgY29uc3QgbGVuNENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxlbjRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hpcHNfbGVuNCcpO1xyXG5cclxuICBjb25zdCBzaGlwX2xlbjRfMSA9IFNoaXBDb21wb25lbnQoU2hpcCg0KSkuZWxlbWVudDtcclxuXHJcbiAgbGVuMUNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwX2xlbjFfMSk7XHJcbiAgbGVuMUNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwX2xlbjFfMik7XHJcbiAgbGVuMUNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwX2xlbjFfMyk7XHJcbiAgbGVuMUNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwX2xlbjFfNCk7XHJcblxyXG4gIGxlbjJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcF9sZW4yXzEpO1xyXG4gIGxlbjJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcF9sZW4yXzIpO1xyXG4gIGxlbjJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcF9sZW4yXzMpO1xyXG5cclxuICBsZW4zQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBfbGVuM18xKTtcclxuICBsZW4zQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBfbGVuM18yKTtcclxuXHJcbiAgbGVuNENvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwX2xlbjRfMSk7XHJcblxyXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQobGVuMUNvbnRhaW5lcik7XHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChsZW4yQ29udGFpbmVyKTtcclxuICBlbGVtZW50LmFwcGVuZENoaWxkKGxlbjNDb250YWluZXIpO1xyXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQobGVuNENvbnRhaW5lcik7XHJcblxyXG4gIHJldHVybiBlbGVtZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hpcHlhcmQ7XHJcbiIsImNvbnN0IENvb3JkcyA9ICh4LCB5KSA9PiB7XHJcbiAgICBjb25zdCBvYmogPSB7fTtcclxuICAgIG9iai54ID0geDtcclxuICAgIG9iai55ID0geTtcclxuICAgIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvb3JkczsiLCJjb25zdCBEcmFnID0gKGJvYXJkKSA9PiB7XHJcbiAgbGV0IGRyYWdnZWQgPSBudWxsO1xyXG5cclxuICBjb25zdCBzdGFydCA9IChldikgPT4ge1xyXG4gICAgZHJhZ2dlZCA9IGV2LnRhcmdldDtcclxuICAgIGxldCBzaGlwTGVuZ3RoID0gZHJhZ2dlZC5kYXRhc2V0Lmxlbmd0aDtcclxuICAgIGxldCBuZXdUYXJnZXQgPSBldi50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgaWYgKGRyYWdnZWQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnY2VsbC1idXN5JykpIHtcclxuICAgICAgd2hpbGUgKHNoaXBMZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbmV3VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2NlbGwtYnVzeScpO1xyXG4gICAgICAgIG5ld1RhcmdldCA9IG5ld1RhcmdldC5uZXh0U2libGluZztcclxuICAgICAgICBzaGlwTGVuZ3RoIC09IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgZXYudGFyZ2V0LmlkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkcmFnb3ZlciA9IChldikgPT4ge1xyXG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkcm9wID0gKGV2KSA9PiB7XHJcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHNoaXBMZW5ndGggPSBkcmFnZ2VkLmRhdGFzZXQubGVuZ3RoO1xyXG4gICAgbGV0IG5ld1RhcmdldCA9IGV2LnRhcmdldDtcclxuICAgIHdoaWxlIChzaGlwTGVuZ3RoID4gMCkge1xyXG4gICAgICBpZiAoIW5ld1RhcmdldCkgcmV0dXJuO1xyXG4gICAgICBpZiAobmV3VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbC1idXN5JykpIHJldHVybjtcclxuICAgICAgaWYgKGNoZWNrSWZCdXN5KG5ld1RhcmdldCkpIHJldHVybjtcclxuICAgICAgbmV3VGFyZ2V0ID0gbmV3VGFyZ2V0Lm5leHRTaWJsaW5nO1xyXG4gICAgICBzaGlwTGVuZ3RoIC09IDE7XHJcbiAgICB9XHJcbiAgICBpZiAoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSB7XHJcbiAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldjtcclxuICAgICAgYm9hcmQucGxhY2VTaGlwKHRhcmdldCwgZHJhZ2dlZCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hlY2tEaXJlY3Rpb24gPSAoeCwgeSkgPT4ge1xyXG4gICAgY29uc3QgZGlyZWN0aW9ucyA9IFtdO1xyXG4gICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsLWNvbnRlbnRbZGF0YS14PScke3h9J11bZGF0YS15PScke3kgLSAxfSddYCk7XHJcbiAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsLWNvbnRlbnRbZGF0YS14PScke3h9J11bZGF0YS15PScke3kgKyAxfSddYCk7XHJcbiAgICBjb25zdCBkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGwtY29udGVudFtkYXRhLXg9JyR7eCArIDF9J11bZGF0YS15PScke3l9J11gKTtcclxuICAgIGNvbnN0IHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGwtY29udGVudFtkYXRhLXg9JyR7eCAtIDF9J11bZGF0YS15PScke3l9J11gKTtcclxuICAgIGNvbnN0IGxsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsLWNvbnRlbnRbZGF0YS14PScke3ggKyAxfSddW2RhdGEteT0nJHt5IC0gMX0nXWApO1xyXG4gICAgY29uc3QgbHVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGwtY29udGVudFtkYXRhLXg9JyR7eCAtIDF9J11bZGF0YS15PScke3kgLSAxfSddYCk7XHJcbiAgICBjb25zdCBybGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbC1jb250ZW50W2RhdGEteD0nJHt4ICsgMX0nXVtkYXRhLXk9JyR7eSArIDF9J11gKTtcclxuICAgIGNvbnN0IHJ1ZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsLWNvbnRlbnRbZGF0YS14PScke3ggLSAxfSddW2RhdGEteT0nJHt5ICsgMX0nXWApO1xyXG4gICAgaWYgKGxlZnQpIGRpcmVjdGlvbnMucHVzaChsZWZ0KTtcclxuICAgIGlmIChyaWdodCkgZGlyZWN0aW9ucy5wdXNoKHJpZ2h0KTtcclxuICAgIGlmIChkb3duKSBkaXJlY3Rpb25zLnB1c2goZG93bik7XHJcbiAgICBpZiAodXApIGRpcmVjdGlvbnMucHVzaCh1cCk7XHJcbiAgICBpZiAobGxkKSBkaXJlY3Rpb25zLnB1c2gobGxkKTtcclxuICAgIGlmIChsdWQpIGRpcmVjdGlvbnMucHVzaChsdWQpO1xyXG4gICAgaWYgKHJsZCkgZGlyZWN0aW9ucy5wdXNoKHJsZCk7XHJcbiAgICBpZiAocnVkKSBkaXJlY3Rpb25zLnB1c2gocnVkKTtcclxuICAgIHJldHVybiBkaXJlY3Rpb25zO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoZWNrSWZCdXN5ID0gKHRhcmdldCkgPT4ge1xyXG4gICAgbGV0IHg7XHJcbiAgICBsZXQgeTtcclxuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLWJveCcpKSB7XHJcbiAgICAgIHggPSBOdW1iZXIodGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC54KTtcclxuICAgICAgeSA9IE51bWJlcih0YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LnkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeCA9IE51bWJlcih0YXJnZXQuZmlyc3RDaGlsZC5kYXRhc2V0LngpO1xyXG4gICAgICB5ID0gTnVtYmVyKHRhcmdldC5maXJzdENoaWxkLmRhdGFzZXQueSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGlyZWN0aW9ucyA9IGNoZWNrRGlyZWN0aW9uKHgsIHkpO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBkaXJlY3Rpb25zLmxlbmd0aDsgaiArPSAxKSB7XHJcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGRpcmVjdGlvbnNbal0ucGFyZW50Tm9kZTtcclxuICAgICAgaWYgKGRpcmVjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwtYnVzeScpKSByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc3RhcnQsXHJcbiAgICBkcmFnb3ZlcixcclxuICAgIGRyb3AsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyYWc7XHJcbiIsImltcG9ydCBBdHRhY2tMaXN0IGZyb20gJy4vY29tcG9uZW50cy9BdHRhY2tMaXN0JztcclxuaW1wb3J0IHsgcmVzZXQgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IFBsYXlBZ2FpbiBmcm9tICcuL2NvbXBvbmVudHMvUGxheUFnYWluJztcclxuXHJcbmNvbnN0IEdhbWUgPSAoYm9hcmRzLCBwbGF5ZXJzKSA9PiB7XHJcbiAgY29uc3QgeyBwbGF5ZXIxLCBwbGF5ZXIyIH0gPSBwbGF5ZXJzO1xyXG4gIGNvbnN0IHsgZmllbGQxLCBmaWVsZDIgfSA9IGJvYXJkcztcclxuXHJcbiAgLy8gZ2FtZSBzdGFydHNcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZiAuc2hpcHlhcmQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIGNvbnN0IHJpdmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpdmFsJyk7XHJcbiAgY29uc3Qgc2VsZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxmIC5nYW1lYm9hcmQnKTtcclxuICByaXZhbC5jbGFzc0xpc3QucmVtb3ZlKCd3YWl0Jyk7XHJcbiAgc2VsZi5jbGFzc0xpc3QuYWRkKCd3YWl0Jyk7XHJcbiAgZmllbGQxLmJvYXJkLnBsYWNlQWxsU2hpcHMoKTtcclxuICBjb25zdCBhdHRhY2tMaXN0MSA9IEF0dGFja0xpc3QoZmllbGQxLmJvYXJkLmdhbWVib2FyZCk7XHJcbiAgY29uc3QgYXR0YWNrTGlzdDIgPSBBdHRhY2tMaXN0KGZpZWxkMi5ib2FyZC5nYW1lYm9hcmQpO1xyXG4gIGZpZWxkMS5zZXRBdHRhY2tMaXN0KGF0dGFja0xpc3QxKTtcclxuICBmaWVsZDIuc2V0QXR0YWNrTGlzdChhdHRhY2tMaXN0Mik7XHJcblxyXG4gIGNvbnN0IHR1cm5UcmFja2VyID0gW107XHJcbiAgY29uc3Qgc2V0VHVybiA9ICgpID0+IHtcclxuICAgIGlmICh0dXJuVHJhY2tlci5sZW5ndGggPT09IDApIHtcclxuICAgICAgdHVyblRyYWNrZXIucHVzaChwbGF5ZXIxKTtcclxuICAgICAgcmV0dXJuIHsgcGxheWVyOiBwbGF5ZXIxLCBmaWVsZDogZmllbGQyIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcGxheWVyMidzIHR1cm5cclxuICAgIGlmICh0dXJuVHJhY2tlclt0dXJuVHJhY2tlci5sZW5ndGggLSAxXSA9PT0gcGxheWVyMSkge1xyXG4gICAgICB0dXJuVHJhY2tlci5wdXNoKHBsYXllcjIpO1xyXG4gICAgICByZXR1cm4geyBwbGF5ZXI6IHBsYXllcjIsIGZpZWxkOiBmaWVsZDEgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwbGF5ZXIxJ3MgdHVyblxyXG4gICAgaWYgKHR1cm5UcmFja2VyW3R1cm5UcmFja2VyLmxlbmd0aCAtIDFdID09PSBwbGF5ZXIyKSB7XHJcbiAgICAgIHR1cm5UcmFja2VyLnB1c2gocGxheWVyMSk7XHJcbiAgICAgIHJldHVybiB7IHBsYXllcjogcGxheWVyMSwgZmllbGQ6IGZpZWxkMiB9O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzR2FtZU92ZXIgPSAoYm9hcmQsIHBsYXllcikgPT4ge1xyXG4gICAgaWYgKGJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIE92ZXInKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmF0dGxlZmllbGRzJykuY2xhc3NMaXN0LmFkZCgnd2FpdCcpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBoMicpO1xyXG4gICAgICAgIGhlYWRlci5hZnRlcihQbGF5QWdhaW4ocGxheWVyLm5hbWUpKTtcclxuICAgICAgfSwgMjAwKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBsZXQgeyBwbGF5ZXIsIGZpZWxkIH0gPSBzZXRUdXJuKCk7XHJcbiAgY29uc3QgcGxheWVyTW92ZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBtaXNzZWRBdGtDb3VudCA9IGZpZWxkLmJvYXJkLmdhbWVib2FyZC5taXNzZWRBdHRhY2tzLmxlbmd0aDtcclxuICAgIGNvbnN0IHsgeCwgeSB9ID0gZmllbGQuYm9hcmQucmVjZWl2ZUF0dGFjayhwbGF5ZXIsIGUudGFyZ2V0KTtcclxuICAgIGlzR2FtZU92ZXIoZmllbGQuYm9hcmQuZ2FtZWJvYXJkLCBwbGF5ZXIpO1xyXG4gICAgaWYgKG1pc3NlZEF0a0NvdW50ICE9PSBmaWVsZC5ib2FyZC5nYW1lYm9hcmQubWlzc2VkQXR0YWNrcy5sZW5ndGgpIHtcclxuICAgICAgKHsgcGxheWVyLCBmaWVsZCB9ID0gc2V0VHVybigpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHsgaWQgfSA9IGZpZWxkLmJvYXJkLmdhbWVib2FyZC5zaXplW3hdW3ldO1xyXG4gICAgICBhdHRhY2tMaXN0Mi51cGRhdGUoaWQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGJvdE1vdmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtaXNzZWRBdGtDb3VudCA9IGZpZWxkLmJvYXJkLmdhbWVib2FyZC5taXNzZWRBdHRhY2tzLmxlbmd0aDtcclxuICAgIGNvbnN0IHsgeCwgeSB9ID0gZmllbGQuYm9hcmQucmVjZWl2ZUF0dGFjayhwbGF5ZXIpO1xyXG4gICAgaXNHYW1lT3ZlcihmaWVsZC5ib2FyZC5nYW1lYm9hcmQsIHBsYXllcik7XHJcbiAgICBpZiAobWlzc2VkQXRrQ291bnQgIT09IGZpZWxkLmJvYXJkLmdhbWVib2FyZC5taXNzZWRBdHRhY2tzLmxlbmd0aCkge1xyXG4gICAgICAoeyBwbGF5ZXIsIGZpZWxkIH0gPSBzZXRUdXJuKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgeyBpZCB9ID0gZmllbGQuYm9hcmQuZ2FtZWJvYXJkLnNpemVbeF1beV07XHJcbiAgICAgIGF0dGFja0xpc3QxLnVwZGF0ZShpZCk7XHJcbiAgICAgIGJvdE1vdmUoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmdWxsVHVybiA9IChlKSA9PiB7XHJcbiAgICBmaWVsZDIuYm9hcmQuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd3YWl0Jyk7XHJcbiAgICBwbGF5ZXJNb3ZlKGUpO1xyXG4gICAgaWYgKHBsYXllci5uYW1lID09PSAnYm90Jykge1xyXG4gICAgICBmaWVsZDIuYm9hcmQuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3YWl0Jyk7XHJcbiAgICAgIGZpZWxkMS5ib2FyZC5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3dhaXQnKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJpdmFsIC5jZWxsJykuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdWxsVHVybik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBib3RNb3ZlKCk7XHJcbiAgICAgICAgZmllbGQxLmJvYXJkLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd2FpdCcpO1xyXG4gICAgICAgIGZpZWxkMi5ib2FyZC5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3dhaXQnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucml2YWwgLmNlbGwnKS5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVsbFR1cm4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuICAgIGlzR2FtZU92ZXIoZmllbGQxLmJvYXJkLmdhbWVib2FyZCwgcGxheWVyMik7XHJcbiAgfTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtYm94JykuZm9yRWFjaCgoc2hpcCkgPT4ge1xyXG4gICAgc2hpcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNoaXApO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yaXZhbCAuY2VsbCcpLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdWxsVHVybik7XHJcbiAgfSk7XHJcblxyXG4gIC8vIC0tLS0gMiBQTEFZRVIgTE9HSUMgLS0tLVxyXG4gIC8vIGNvbnN0IHNlbGZCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxmIC5nYW1lYm9hcmQnKTtcclxuICAvLyBjb25zdCByaXZhbEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpdmFsIC5nYW1lYm9hcmQnKTtcclxuXHJcbiAgLy8gKHsgY3VycmVudFBsYXllciwgY3VycmVudEZpZWxkIH0gPSBzZXRUdXJuKCkpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gY29uc3QgbWFrZU1vdmUgPSAoZSkgPT4ge1xyXG4gIC8vICAgY29uc3QgY29udGVudCA9IGUudGFyZ2V0LmNoaWxkcmVuWzBdO1xyXG4gIC8vICAgY29uc3QgeyB4IH0gPSBjb250ZW50LmRhdGFzZXQ7XHJcbiAgLy8gICBjb25zdCB7IHkgfSA9IGNvbnRlbnQuZGF0YXNldDtcclxuICAvLyAgIGNvbnN0IGJvYXJkRWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgLy8gICBjb25zdCBib2FyZCA9IGJvYXJkRWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnc2VsZicpID8gZmllbGQxLmJvYXJkLmdhbWVib2FyZCA6IGZpZWxkMi5ib2FyZC5nYW1lYm9hcmQ7XHJcbiAgLy8gICBjb25zdCBvdGhlckJvYXJkRWxlbWVudCA9IGJvYXJkID09PSBmaWVsZDEuYm9hcmQuZ2FtZWJvYXJkID8gcml2YWxCb2FyZCA6IHNlbGZCb2FyZDtcclxuICAvLyAgIGNvbnN0IGJvYXJkQ2VsbHMgPSBib2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcclxuICAvLyAgIGNvbnN0IG90aGVyQm9hcmRDZWxscyA9IG90aGVyQm9hcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XHJcbiAgLy8gICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbC1taXNzJykgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbC1oaXQnKSkge1xyXG4gIC8vICAgICBib2FyZC5zaXplW3hdW3ldID09PSB1bmRlZmluZWQgPyBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjZWxsLW1pc3MnKSA6IGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2NlbGwtaGl0Jyk7XHJcbiAgLy8gICAgIGN1cnJlbnRQbGF5ZXIuYXR0YWNrKHgsIHksIGJvYXJkKTtcclxuICAvLyAgICAgaWYgKGJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XHJcbiAgLy8gICAgICAgLy8gcmVtb3ZlTW92ZShib2FyZENlbGxzKTtcclxuICAvLyAgICAgICByZW1vdmVNb3ZlKG90aGVyQm9hcmRDZWxscyk7XHJcbiAgLy8gICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBPdmVyJyk7XHJcbiAgLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmF0dGxlZmllbGRzJykuY2xhc3NMaXN0LmFkZCgnd2FpdCcpO1xyXG4gIC8vICAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIGgyJyk7XHJcbiAgLy8gICAgICAgICBoZWFkZXIuYWZ0ZXIoUGxheUFnYWluKGN1cnJlbnRQbGF5ZXIubmFtZSkpO1xyXG4gIC8vICAgICAgIH0sIDUwMCk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbC1taXNzJykpIHtcclxuICAvLyAgICAgICAvLyByZW1vdmVNb3ZlKGJvYXJkQ2VsbHMpO1xyXG4gIC8vICAgICAgIGFkZE1vdmUob3RoZXJCb2FyZENlbGxzKTtcclxuICAvLyAgICAgICBib2FyZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd2FpdCcpO1xyXG4gIC8vICAgICAgIG90aGVyQm9hcmRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3dhaXQnKTtcclxuICAvLyAgICAgICBjdXJyZW50UGxheWVyID0gc2V0VHVybigpO1xyXG4gIC8vICAgICAgIGNvbnN0IG90aGVyQm9hcmQgPSBib2FyZEVsZW1lbnQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGYnKSA/IGZpZWxkMi5ib2FyZC5nYW1lYm9hcmQgOiBmaWVsZDEuYm9hcmQuZ2FtZWJvYXJkO1xyXG4gIC8vICAgICAgIGNvbnN0IGJvdEF0dGFjayA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAvLyAgICAgICAgIGNvbnN0IGJvdEF0dGFja0Nvb3JkcyA9IGN1cnJlbnRQbGF5ZXIuYm90QXR0YWNrKG90aGVyQm9hcmQpO1xyXG4gIC8vICAgICAgICAgY29uc3QgYm90WCA9IGJvdEF0dGFja0Nvb3Jkcy54O1xyXG4gIC8vICAgICAgICAgY29uc3QgYm90WSA9IGJvdEF0dGFja0Nvb3Jkcy55O1xyXG4gIC8vICAgICAgICAgY29uc3QgdGFyZ2V0RSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsLWNvbnRlbnRbZGF0YS14PScke2JvdFh9J11bZGF0YS15PScke2JvdFl9J11gKS5wYXJlbnROb2RlO1xyXG4gIC8vICAgICAgICAgb3RoZXJCb2FyZC5zaXplW2JvdFhdW2JvdFldID09PSB1bmRlZmluZWQgPyB0YXJnZXRFLmNsYXNzTGlzdC5hZGQoJ2NlbGwtbWlzcycpIDogdGFyZ2V0RS5jbGFzc0xpc3QuYWRkKCdjZWxsLWhpdCcpO1xyXG4gIC8vICAgICAgICAgY29uc29sZS5sb2coYHg6ICR7Ym90WH0geTogJHtib3RZfSAke2N1cnJlbnRQbGF5ZXIubmFtZX1gKTtcclxuICAvLyAgICAgICAgIGlmICh0YXJnZXRFLmNsYXNzTGlzdC5jb250YWlucygnY2VsbC1taXNzJykpIHtcclxuICAvLyAgICAgICAgICAgLy8gYWRkTW92ZShib2FyZENlbGxzKTtcclxuICAvLyAgICAgICAgICAgcmVtb3ZlTW92ZShvdGhlckJvYXJkQ2VsbHMpO1xyXG4gIC8vICAgICAgICAgICBib2FyZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnd2FpdCcpO1xyXG4gIC8vICAgICAgICAgICBvdGhlckJvYXJkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3YWl0Jyk7XHJcbiAgLy8gICAgICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBzZXRUdXJuKCk7XHJcbiAgLy8gICAgICAgICAgIGNvbnNvbGUubG9nKGBBZnRlciB0dXJuICR7Y3VycmVudFBsYXllci5uYW1lfWApO1xyXG4gIC8vICAgICAgICAgICBjbGVhckludGVydmFsKGJvdEF0dGFjayk7XHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgICAgfSwgMTAwMCk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH1cclxuICAvLyB9O1xyXG5cclxuICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWF2ZS1nYW1lJyk7XHJcbiAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICByZXNldChmaWVsZDEsIGZpZWxkMik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xyXG4iLCJpbXBvcnQgQ29vcmRzIGZyb20gJy4vY29vcmRzJztcclxuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcclxuXHJcbmNvbnN0IEdhbWVib2FyZCA9IChmYWN0b3IpID0+IHtcclxuICBjb25zdCBvYmogPSBPYmplY3QuY3JlYXRlKGdhbWVib2FyZEZ1bmN0aW9ucyk7XHJcbiAgb2JqLnNpemUgPSBBcnJheS5mcm9tKEFycmF5KGZhY3RvciksICgpID0+IChBcnJheShmYWN0b3IpKSk7XHJcbiAgb2JqLm1pc3NlZEF0dGFja3MgPSBbXTtcclxuICBvYmouc3VjY2Vzc2Z1bEF0dGFja3MgPSBbXTtcclxuICBvYmouc2hpcHMgPSBbXTtcclxuICByZXR1cm4gb2JqO1xyXG59O1xyXG5cclxuY29uc3QgZ2FtZWJvYXJkRnVuY3Rpb25zID0ge1xyXG4gIHBsYWNlU2hpcChzaGlwLCBjb29yZHMsIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJykge1xyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJyAmJiBOdW1iZXIoY29vcmRzLngpICsgTnVtYmVyKHNoaXAubGVuZ3RoKSA+IHRoaXMuc2l6ZS5sZW5ndGggKyAxKSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdTaGlwIG91dCBvZiBib3VuZHMnKTtcclxuICAgIH1cclxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyAmJiBOdW1iZXIoY29vcmRzLnkpICsgTnVtYmVyKHNoaXAubGVuZ3RoKSA+IHRoaXMuc2l6ZVswXS5sZW5ndGggKyAxKSB7XHJcbiAgICAgIHRocm93IEVycm9yKCdTaGlwIG91dCBvZiBib3VuZHMnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCdcclxuICAgICAgICA/IHRoaXMuc2l6ZVtjb29yZHMueF1bY29vcmRzLnkgKyBpXSA9IHNoaXBcclxuICAgICAgICA6IHRoaXMuc2l6ZVtjb29yZHMueCArIGldW2Nvb3Jkcy55XSA9IHNoaXA7XHJcbiAgICB9XHJcbiAgfSxcclxuICByZWNlaXZlQXR0YWNrKGNvb3Jkcykge1xyXG4gICAgY29uc3Qgc2hpcCA9IHRoaXMuc2l6ZVtjb29yZHMueF1bY29vcmRzLnldO1xyXG4gICAgaWYgKHNoaXApIHtcclxuICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmNhbGN1bGF0ZVNoaXBQb3NpdGlvbihjb29yZHMpO1xyXG4gICAgICBzaGlwLmhpdChwb3NpdGlvbik7XHJcbiAgICAgIHRoaXMuc3VjY2Vzc2Z1bEF0dGFja3MucHVzaChjb29yZHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5taXNzZWRBdHRhY2tzLnB1c2goY29vcmRzKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGFsbFNoaXBzU3VuaygpIHtcclxuICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcclxuICB9LFxyXG4gIGNhbGN1bGF0ZVNoaXBQb3NpdGlvbihjb29yZHMpIHtcclxuICAgIGxldCB7IHggfSA9IGNvb3JkcztcclxuICAgIGxldCB7IHkgfSA9IGNvb3JkcztcclxuICAgIGNvbnN0IHN0YXJ0ID0geyB4LCB5IH07XHJcbiAgICBsZXQgcG9zaXRpb24gPSAwO1xyXG4gICAgXHJcbiAgICAvLyB2ZXJ0aWNhbGx5IHBsYWNlZCBzaGlwc1xyXG4gICAgLy8gaWYgKHggLSAxID49IDAgJiYgeCArIDEgPCB0aGlzLnNpemUubGVuZ3RoKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKGB4OiAke3h9YClcclxuICAgIC8vICAgaWYgKHRoaXMuc2l6ZVt4IC0gMV1beV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgLy8gICAgIHdoaWxlICh4ID49IDAgJiYgdGhpcy5zaXplW3hdW3ldICE9PSB1bmRlZmluZWQpIHtcclxuICAgIC8vICAgICAgIHN0YXJ0LnggPSB4O1xyXG4gICAgLy8gICAgICAgeC0tO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBpZiAoY29vcmRzLnggIT09IHN0YXJ0LngpIHBvc2l0aW9uID0gY29vcmRzLnggLSBzdGFydC54O1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaG9yaXpvbnRhbGx5IHBsYWNlZCBzaGlwc1xyXG4gICAgaWYgKHkgLSAxID49IDAgJiYgeSA8IHRoaXMuc2l6ZS5sZW5ndGgpIHtcclxuICAgICAgaWYgKHRoaXMuc2l6ZVt4XVt5IC0gMV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHdoaWxlICh5ID49IDAgJiYgdGhpcy5zaXplW3hdW3ldICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHN0YXJ0LnkgPSB5O1xyXG4gICAgICAgICAgeS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29vcmRzLnkgIT09IHN0YXJ0LnkpIHBvc2l0aW9uID0gY29vcmRzLnkgLSBzdGFydC55O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcG9zaXRpb247XHJcbiAgfSxcclxuICBnZXRBdHRhY2thYmxlQ2VsbHMoKSB7XHJcbiAgICBjb25zdCBhdHRhY2thYmxlQ2VsbHMgPSBbXTtcclxuICAgIGNvbnN0IGNlbGxzID0gdGhpcy5zaXplO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNlbGxzWzBdLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmRzID0gQ29vcmRzKGksIGopO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5jYWxjdWxhdGVTaGlwUG9zaXRpb24oY29vcmRzKTtcclxuICAgICAgICBpZiAoY2VsbHNbaV1bal0gPT09IHVuZGVmaW5lZCB8fCAhY2VsbHNbaV1bal0uaGl0QXJyYXlbcG9zaXRpb25dKSB7XHJcbiAgICAgICAgICBhdHRhY2thYmxlQ2VsbHMucHVzaChjb29yZHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF0dGFja2FibGVDZWxscztcclxuICB9LFxyXG4gIGdlbmVyYXRlU2hpcHMoKSB7XHJcbiAgICBjb25zdCBzaGlwMUxfMSA9IFNoaXAoMSk7XHJcbiAgICBjb25zdCBzaGlwMUxfMiA9IFNoaXAoMSk7XHJcbiAgICBjb25zdCBzaGlwMUxfMyA9IFNoaXAoMSk7XHJcbiAgICBjb25zdCBzaGlwMUxfNCA9IFNoaXAoMSk7XHJcblxyXG4gICAgY29uc3Qgc2hpcDJMXzEgPSBTaGlwKDIpO1xyXG4gICAgY29uc3Qgc2hpcDJMXzIgPSBTaGlwKDIpO1xyXG4gICAgY29uc3Qgc2hpcDJMXzMgPSBTaGlwKDIpO1xyXG5cclxuICAgIGNvbnN0IHNoaXAzTF8xID0gU2hpcCgzKTtcclxuICAgIGNvbnN0IHNoaXAzTF8yID0gU2hpcCgzKTtcclxuXHJcbiAgICBjb25zdCBzaGlwNExfMSA9IFNoaXAoNCk7XHJcblxyXG4gICAgY29uc3QgY29vcmRzMSA9IENvb3JkcygwLCAwKTtcclxuICAgIGNvbnN0IGNvb3JkczIgPSBDb29yZHMoMCwgMik7XHJcbiAgICBjb25zdCBjb29yZHMzID0gQ29vcmRzKDAsIDQpO1xyXG4gICAgY29uc3QgY29vcmRzNCA9IENvb3JkcygwLCA2KTtcclxuICAgIGNvbnN0IGNvb3JkczUgPSBDb29yZHMoMiwgMCk7XHJcbiAgICBjb25zdCBjb29yZHM2ID0gQ29vcmRzKDQsIDApO1xyXG4gICAgY29uc3QgY29vcmRzNyA9IENvb3Jkcyg2LCAwKTtcclxuICAgIGNvbnN0IGNvb3JkczggPSBDb29yZHMoMywgMyk7XHJcbiAgICBjb25zdCBjb29yZHM5ID0gQ29vcmRzKDUsIDYpO1xyXG4gICAgY29uc3QgY29vcmRzMTAgPSBDb29yZHMoOSwgMyk7XHJcblxyXG4gICAgdGhpcy5wbGFjZVNoaXAoc2hpcDFMXzEsIGNvb3JkczEpO1xyXG4gICAgdGhpcy5wbGFjZVNoaXAoc2hpcDFMXzIsIGNvb3JkczIpO1xyXG4gICAgdGhpcy5wbGFjZVNoaXAoc2hpcDFMXzMsIGNvb3JkczMpO1xyXG4gICAgdGhpcy5wbGFjZVNoaXAoc2hpcDFMXzQsIGNvb3JkczQpO1xyXG5cclxuICAgIHRoaXMucGxhY2VTaGlwKHNoaXAyTF8xLCBjb29yZHM1KTtcclxuICAgIHRoaXMucGxhY2VTaGlwKHNoaXAyTF8yLCBjb29yZHM2KTtcclxuICAgIHRoaXMucGxhY2VTaGlwKHNoaXAyTF8zLCBjb29yZHM3KTtcclxuXHJcbiAgICB0aGlzLnBsYWNlU2hpcChzaGlwM0xfMSwgY29vcmRzOCk7XHJcbiAgICB0aGlzLnBsYWNlU2hpcChzaGlwM0xfMiwgY29vcmRzOSk7XHJcblxyXG4gICAgdGhpcy5wbGFjZVNoaXAoc2hpcDRMXzEsIGNvb3JkczEwKTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xyXG4iLCJpbXBvcnQgR2FtZWJvYXJkQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9HYW1lYm9hcmQnO1xyXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XHJcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcclxuaW1wb3J0IEJhdHRsZWZpZWxkIGZyb20gJy4vY29tcG9uZW50cy9CYXR0bGVmaWVsZCc7XHJcbmltcG9ydCBzZXRVcCBmcm9tICcuL3NldHVwJztcclxuaW1wb3J0IHsgY2hlY2tBbGxTaGlwc1BsYWNlZCB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuY29uc3QgZ2FtZWJvYXJkMSA9IEdhbWVib2FyZCgxMCk7XHJcbmNvbnN0IGdhbWVib2FyZDIgPSBHYW1lYm9hcmQoMTApO1xyXG5nYW1lYm9hcmQyLmdlbmVyYXRlU2hpcHMoKTtcclxuXHJcbmNvbnN0IGZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhdHRsZWZpZWxkcycpO1xyXG5cclxuY29uc3QgYm9hcmRDb21wb25lbnQxID0gR2FtZWJvYXJkQ29tcG9uZW50KGdhbWVib2FyZDEpO1xyXG5jb25zdCBib2FyZENvbXBvbmVudDIgPSBHYW1lYm9hcmRDb21wb25lbnQoZ2FtZWJvYXJkMik7XHJcblxyXG5jb25zdCBmaWVsZDEgPSBCYXR0bGVmaWVsZChib2FyZENvbXBvbmVudDEpO1xyXG5jb25zdCBmaWVsZDIgPSBCYXR0bGVmaWVsZChib2FyZENvbXBvbmVudDIpO1xyXG5maWVsZDEuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZWxmJyk7XHJcbmZpZWxkMi5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3JpdmFsJyk7XHJcblxyXG5maWVsZDEuc2V0TGFiZWwoJ1lvdXIgR3JpZCcpO1xyXG5maWVsZDIuc2V0TGFiZWwoJ1JpdmFsIEdyaWQnKTtcclxuXHJcbmZpZWxkLmFwcGVuZENoaWxkKGZpZWxkMS5lbGVtZW50KTtcclxuZmllbGQuYXBwZW5kQ2hpbGQoZmllbGQyLmVsZW1lbnQpO1xyXG5cclxuc2V0VXAoZmllbGQxLmJvYXJkKTtcclxuXHJcbmNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheScpO1xyXG5wbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGlmICghY2hlY2tBbGxTaGlwc1BsYWNlZCgpKSB7XHJcbiAgICBhbGVydCgnUGxlYXNlIHBsYWNlIGFsbCByZW1haW5pbmcgc2hpcHMgb24gdGhlIGJvYXJkJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIEdhbWUoXHJcbiAgICAgIHsgZmllbGQxLCBmaWVsZDIgfSxcclxuICAgICAgeyBwbGF5ZXIxOiBQbGF5ZXIoJ3dpbGwnKSwgcGxheWVyMjogUGxheWVyKCdib3QnKSB9LFxyXG4gICAgKTtcclxuICAgIHBsYXlCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgQ29vcmRzIGZyb20gXCIuL2Nvb3Jkc1wiO1xyXG5cclxuY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcclxuICAgIGxldCBvYmogPSBPYmplY3QuY3JlYXRlKHBsYXllckZ1bmN0aW9ucyk7XHJcbiAgICBvYmoubmFtZSA9IG5hbWU7XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5jb25zdCBwbGF5ZXJGdW5jdGlvbnMgPSB7XHJcbiAgICBhdHRhY2soeCwgeSwgZ2FtZWJvYXJkKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmRzID0geyB4OiB4LCB5OiB5IH07XHJcbiAgICAgICAgZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRzKTtcclxuICAgIH0sXHJcbiAgICBib3RBdHRhY2soZ2FtZWJvYXJkKSB7XHJcbiAgICAgICAgY29uc3QgYXR0YWNrYWJsZUNlbGxzID0gZ2FtZWJvYXJkLmdldEF0dGFja2FibGVDZWxscygpO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGdhbWVib2FyZC5zaXplLmxlbmd0aDtcclxuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlbmd0aCk7XHJcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW5ndGgpO1xyXG4gICAgICAgIGxldCBuZXdDb29yZHMgPSBDb29yZHMoeCwgeSk7XHJcbiAgICAgICAgbGV0IGZvdW5kID0gYXR0YWNrYWJsZUNlbGxzLmZpbmQoY2VsbCA9PiBKU09OLnN0cmluZ2lmeShjZWxsKSA9PT0gSlNPTi5zdHJpbmdpZnkobmV3Q29vcmRzKSk7XHJcbiAgICAgICAgd2hpbGUgKGZvdW5kID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IG5ld1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW5ndGgpO1xyXG4gICAgICAgICAgICBsZXQgbmV3WSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlbmd0aCk7XHJcbiAgICAgICAgICAgIG5ld0Nvb3JkcyA9IENvb3JkcyhuZXdYLCBuZXdZKTtcclxuICAgICAgICAgICAgZm91bmQgPSBhdHRhY2thYmxlQ2VsbHMuZmluZCgoe3gsIHl9KSA9PiB7IHggPT09IG5ld0Nvb3Jkcy54ICYmIHkgPT09IG5ld0Nvb3Jkcy55fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGZvdW5kKTtcclxuICAgICAgICByZXR1cm4gZm91bmQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJpbXBvcnQgRHJhZyBmcm9tICcuL2RyYWcnO1xyXG5cclxuY29uc3Qgc2V0VXAgPSAoYm9hcmQpID0+IHtcclxuICBjb25zb2xlLmxvZygnc2V0dGluZyB1cCcpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaXZhbCcpLmNsYXNzTGlzdC5hZGQoJ3dhaXQnKTtcclxuICBjb25zdCBkcmFnID0gRHJhZyhib2FyZCk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtYm94JykuZm9yRWFjaCgoc2hpcCkgPT4gc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnLnN0YXJ0KSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGYgLmNlbGwnKS5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZy5kcmFnb3ZlcikpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxmIC5jZWxsJykuZm9yRWFjaCgoY2VsbCkgPT4gY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJhZy5kcm9wKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXRVcDtcclxuIiwiY29uc3QgU2hpcCA9IChsZW5ndGgpID0+IHtcclxuICBjb25zdCBvYmogPSBPYmplY3QuY3JlYXRlKHNoaXBGdW5jdGlvbnMpO1xyXG4gIG9iai5pZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xyXG4gIG9iai5sZW5ndGggPSBsZW5ndGg7XHJcbiAgb2JqLmhpdEFycmF5ID0gQXJyYXkobGVuZ3RoKS5maWxsKGZhbHNlKTtcclxuICByZXR1cm4gb2JqO1xyXG59O1xyXG5cclxuY29uc3Qgc2hpcEZ1bmN0aW9ucyA9IHtcclxuICBpc1N1bmsoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5oaXRBcnJheS5ldmVyeSgoaGl0Ym94KSA9PiBoaXRib3ggPT09IHRydWUpO1xyXG4gIH0sXHJcbiAgaGl0KG51bSkge1xyXG4gICAgaWYgKG51bSA8IHRoaXMubGVuZ3RoKSB0aGlzLmhpdEFycmF5W251bV0gPSB0cnVlO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xyXG4iLCJpbXBvcnQgQmF0dGxlZmllbGQgZnJvbSAnLi9jb21wb25lbnRzL0JhdHRsZWZpZWxkJztcclxuaW1wb3J0IEdhbWVib2FyZENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvR2FtZWJvYXJkJztcclxuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XHJcblxyXG5jb25zdCByZXNldCA9IChmaWVsZDEsIGZpZWxkMikgPT4ge1xyXG4gIGNvbnN0IGdhbWVib2FyZDEgPSBHYW1lYm9hcmQoMTApO1xyXG4gIGNvbnN0IGdhbWVib2FyZDIgPSBHYW1lYm9hcmQoMTApO1xyXG4gIGdhbWVib2FyZDIuZ2VuZXJhdGVTaGlwcygpO1xyXG5cclxuICBjb25zdCBib2FyZENvbXBvbmVudDEgPSBHYW1lYm9hcmRDb21wb25lbnQoZ2FtZWJvYXJkMSk7XHJcbiAgY29uc3QgYm9hcmRDb21wb25lbnQyID0gR2FtZWJvYXJkQ29tcG9uZW50KGdhbWVib2FyZDIpO1xyXG5cclxuICBmaWVsZDEgPSBCYXR0bGVmaWVsZChib2FyZENvbXBvbmVudDEpO1xyXG4gIGZpZWxkMiA9IEJhdHRsZWZpZWxkKGJvYXJkQ29tcG9uZW50Mik7XHJcbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG59O1xyXG5cclxuY29uc3QgY2hlY2tBbGxTaGlwc1BsYWNlZCA9ICgpID0+IHtcclxuICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxmIC5zaGlweWFyZCBkaXYnKTtcclxuICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcclxuICAgIGlmIChzaGlwLmNoaWxkcmVuLmxlbmd0aCAhPT0gMCkgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgcmVzZXQsXHJcbiAgY2hlY2tBbGxTaGlwc1BsYWNlZCxcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9