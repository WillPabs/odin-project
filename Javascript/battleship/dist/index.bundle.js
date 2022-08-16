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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: Helvetica;   \r\n    list-style-type: none;\r\n    text-decoration: none;\r\n}\r\n\r\n/* ----------- GAMEBOARD ----------- */\r\n\r\n.battlefields {\r\n    display: flex;\r\n}\r\n\r\n.battlefield {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.ui-draggable {\r\n    cursor: grab;\r\n}\r\n\r\n.ui-draggable:active {\r\n    cursor: grabbing;\r\n}\r\n\r\n.shipyard {\r\n    padding: 2rem;\r\n    align-self: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1px;\r\n}\r\n\r\n.shipyard > div {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 10px;\r\n}\r\n\r\n.ship-box {\r\n    height: 50px;\r\n    background-color: blue;\r\n    position: relative;\r\n}\r\n\r\n.gameboard {\r\n    cursor: pointer;\r\n}\r\n\r\n.wait {\r\n    opacity: 0.2;\r\n    cursor: default;\r\n}\r\n\r\n.grid {\r\n    display: grid;\r\n}\r\n\r\n.row {\r\n    display: flex;\r\n}\r\n\r\nth {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.cell, td, th {\r\n    flex: 1;\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.cell {\r\n    border: solid 1px;\r\n}\r\n\r\n.cell-busy {\r\n    cursor: grab;\r\n}\r\n\r\n.cell:hover {\r\n    background-color: lightblue;\r\n}\r\n\r\n.cell-fill {\r\n    background-color: blue;\r\n}\r\n\r\n.cell-hit {\r\n    background-color: red;\r\n}\r\n\r\n.cell-miss {\r\n    background-color: black;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,sBAAsB;IACtB,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA,sCAAsC;;AAEtC;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,OAAO;IACP,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: Helvetica;   \r\n    list-style-type: none;\r\n    text-decoration: none;\r\n}\r\n\r\n/* ----------- GAMEBOARD ----------- */\r\n\r\n.battlefields {\r\n    display: flex;\r\n}\r\n\r\n.battlefield {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.ui-draggable {\r\n    cursor: grab;\r\n}\r\n\r\n.ui-draggable:active {\r\n    cursor: grabbing;\r\n}\r\n\r\n.shipyard {\r\n    padding: 2rem;\r\n    align-self: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1px;\r\n}\r\n\r\n.shipyard > div {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 10px;\r\n}\r\n\r\n.ship-box {\r\n    height: 50px;\r\n    background-color: blue;\r\n    position: relative;\r\n}\r\n\r\n.gameboard {\r\n    cursor: pointer;\r\n}\r\n\r\n.wait {\r\n    opacity: 0.2;\r\n    cursor: default;\r\n}\r\n\r\n.grid {\r\n    display: grid;\r\n}\r\n\r\n.row {\r\n    display: flex;\r\n}\r\n\r\nth {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.cell, td, th {\r\n    flex: 1;\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.cell {\r\n    border: solid 1px;\r\n}\r\n\r\n.cell-busy {\r\n    cursor: grab;\r\n}\r\n\r\n.cell:hover {\r\n    background-color: lightblue;\r\n}\r\n\r\n.cell-fill {\r\n    background-color: blue;\r\n}\r\n\r\n.cell-hit {\r\n    background-color: red;\r\n}\r\n\r\n.cell-miss {\r\n    background-color: black;\r\n}"],"sourceRoot":""}]);
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
  console.log(ships);

  ships.forEach((ship) => {
    const shipHitArray = document.createElement('div');
    shipHitArray.classList.add('ship');
    ship.hitArray.forEach((part) => {
      const shipPart = document.createElement('div');
      shipPart.classList.add('ship-part');
      shipPart.textContent = part;
      shipHitArray.appendChild(shipPart);
    });

    element.appendChild(shipHitArray);
  });

  const render = () => {
    ships.forEach((ship) => {
      ship.hitArray.forEach((part) => {
        const shipPart = document.querySelector('.ship-part');
        shipPart.innerHTML = part;
        console.log(shipPart);
        console.log(part);
      });
    });
  };
  return {
    element,
    render,
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


const Battlefield = (board, attackList) => {
  const element = document.createElement('div');
  element.classList.add('battlefield');

  const shipyard = (0,_Shipyard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  element.appendChild(board.element);
  element.appendChild(attackList.element);
  element.appendChild(shipyard);

  return {
    element,
    board,
    attackList,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Battlefield);


/***/ }),

/***/ "./src/components/CreatePlayer.js":
/*!****************************************!*\
  !*** ./src/components/CreatePlayer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../player */ "./src/player.js");


const CreatePlayer = () => {
  const container = document.createElement('div');
  container.classList.add('create-player-container');

  const label = document.createElement('label');
  label.classList.add('create-player-label');
  label.textContent = 'Enter Player Name';

  const input = document.createElement('input');
  input.classList.add('player-name-input');
  input.type = 'text';

  const button = document.createElement('button');
  button.classList.add('player-name-button');
  button.textContent = 'Create';
  button.addEventListener('click', () => {
    const { value } = input;
    const newPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
    return newPlayer;
  });

  container.appendChild(label);
  container.appendChild(input);
  container.appendChild(button);

  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreatePlayer);


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
    const shipLength = dragged.dataset.length;
    const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(dragged.dataset.length);
    const x = Number(content.dataset.x);
    const y = Number(content.dataset.y);
    const coords = (0,_coords__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y);
    gameboard.placeShip(ship, coords);
    for (let i = 0; i < shipLength; i += 1) {
      target.classList.add('cell-busy');
      target = target.nextSibling;
    }
  };

  return {
    element,
    gameboard,
    placeShip,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameboardComponent);


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

  element.style.width = `${ship.length * 50}px`;

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

  /* fix bug that allows user to place ships next to eachother
        problem occurs when user starts drag ship but places it back in same cell
    */
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
/* harmony import */ var _drag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag */ "./src/drag.js");


const Game = (boards, players) => {
  const { player1, player2 } = players;
  const { field1, field2 } = boards;

  const turnTracker = [];
  const setTurn = () => {
    if (turnTracker.length === 0) {
      turnTracker.push(player1);
      return player1;
    }

    // player2's turn
    if (turnTracker[turnTracker.length - 1] === player1) {
      turnTracker.push(player2);
      return player2;
    }

    // player1's turn
    if (turnTracker[turnTracker.length - 1] === player2) {
      turnTracker.push(player1);
      return player1;
    }
  };

  let currentPlayer = setTurn();
  const selfBoard = document.querySelector('.self');
  const rivalBoard = document.querySelector('.rival');
  const makeMove = (e) => {
    const content = e.target.children[0];
    const { x } = content.dataset;
    const { y } = content.dataset;
    const boardElement = e.target.parentNode.parentNode.parentNode.parentNode;
    const board = boardElement.classList.contains('self') ? field1.board.gameboard : field2.board.gameboard;
    const otherBoardElement = board === field1.board.gameboard ? rivalBoard : selfBoard;
    if (!e.target.classList.contains('cell-miss') && !e.target.classList.contains('cell-hit')) {
      removeMove(boardElement.querySelectorAll('.cell'));
      otherBoardElement.classList.remove('wait');
      board.size[x][y] === undefined ? e.target.classList.add('cell-miss') : e.target.classList.add('cell-hit');
      currentPlayer.attack(x, y, board);
      addMove(otherBoardElement.querySelectorAll('.cell'));
      boardElement.classList.add('wait');
      if (board.allShipsSunk()) {
        setTimeout(() => {
          alert(`${currentPlayer.name} has won`);
        }, 500);
      }
      currentPlayer = setTurn();
    }
  };

  const removeMove = (board) => {
    board.forEach((cell) => {
      cell.removeEventListener('click', makeMove);
    });
  };
  const addMove = (board) => {
    board.forEach((cell) => {
      cell.addEventListener('click', makeMove);
    });
  };

  // make it specific to each board
  const playing = () => {
    document.querySelectorAll('.ship-box').forEach((ship) => {
      console.log(ship.parentNode);
      ship.parentNode.removeChild(ship);
    });
    document.querySelectorAll('.cell').forEach((cell) => {
      cell.addEventListener('click', makeMove);
    });
  };

  const setUp = (board) => {
    console.log('setting up');
    const drag = (0,_drag__WEBPACK_IMPORTED_MODULE_0__["default"])(board);
    document.querySelectorAll('.ship-box').forEach((ship) => ship.addEventListener('dragstart', drag.start));
    document.querySelectorAll('.cell').forEach((cell) => cell.addEventListener('dragover', drag.dragover));
    document.querySelectorAll('.cell').forEach((cell) => cell.addEventListener('drop', drag.drop));
  };

  setUp(field1.board);

  const playButton = document.querySelector('#play');
  playButton.addEventListener('click', () => {
    console.log('Game Start');
    console.log(field1.board.gameboard.size);
    playing();
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
    if (x - 1 >= 0 && x + 1 < this.size.length) {
      if (this.size[x - 1][y] !== undefined) {
        while (x >= 0 && this.size[x][y] !== undefined) {
          start.x = x;
          x--;
        }
        if (coords.x !== start.x) position = coords.x - start.x;
      }
    }
    if (y - 1 >= 0 && y + 1 < this.size[0].length && x >= 0 && x < this.size.length) {
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

    const coords1 = (0,_coords__WEBPACK_IMPORTED_MODULE_0__["default"])(1, 4);
    const coords2 = (0,_coords__WEBPACK_IMPORTED_MODULE_0__["default"])(1, 6);
    const coords3 = (0,_coords__WEBPACK_IMPORTED_MODULE_0__["default"])(8, 1);
    const coords4 = (0,_coords__WEBPACK_IMPORTED_MODULE_0__["default"])(9, 3);

    this.placeShip(ship1L_1, coords1);
    this.placeShip(ship1L_2, coords2);
    this.placeShip(ship1L_3, coords3);
    this.placeShip(ship1L_4, coords4);
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
/* harmony import */ var _components_CreatePlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/CreatePlayer */ "./src/components/CreatePlayer.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _components_AttackList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/AttackList */ "./src/components/AttackList.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _components_Battlefield__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Battlefield */ "./src/components/Battlefield.js");









const body = document.querySelector('body');

const playerInput = (0,_components_CreatePlayer__WEBPACK_IMPORTED_MODULE_1__["default"])();

const playButton = document.querySelector('#button');

body.appendChild(playerInput);

const gameboard1 = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"])(10);
const gameboard2 = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"])(10);
gameboard2.generateShips();

const attackList1 = (0,_components_AttackList__WEBPACK_IMPORTED_MODULE_5__["default"])(gameboard1);
const attackList2 = (0,_components_AttackList__WEBPACK_IMPORTED_MODULE_5__["default"])(gameboard2);

const field = document.querySelector('.battlefields');

const boardComponent1 = (0,_components_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])(gameboard1);
boardComponent1.element.classList.add('self');
const boardComponent2 = (0,_components_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])(gameboard2);
boardComponent2.element.classList.add('rival');

const field1 = (0,_components_Battlefield__WEBPACK_IMPORTED_MODULE_7__["default"])(boardComponent1, attackList1);
const field2 = (0,_components_Battlefield__WEBPACK_IMPORTED_MODULE_7__["default"])(boardComponent2, attackList2);

field.appendChild(field1.element);
field.appendChild(field2.element);

(0,_game__WEBPACK_IMPORTED_MODULE_4__["default"])(
  { field1, field2 },
  { player1: (0,_player__WEBPACK_IMPORTED_MODULE_3__["default"])('will'), player2: (0,_player__WEBPACK_IMPORTED_MODULE_3__["default"])('bot') },
);


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
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

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
  obj.length = length;
  obj.hitArray = Array(length).fill(false);
  return obj;
};

const shipFunctions = {
  isSunk() {
    return this.hitArray.every((hitbox) => hitbox === true);
  },
  hit(num) {
    this.hitArray[num] = true;
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzREFBUztBQUM1QixtQkFBbUIsc0RBQVM7QUFDNUI7QUFDQTtBQUNBLG9CQUFvQixrRUFBVTtBQUM5QixvQkFBb0Isa0VBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlFQUFrQjtBQUMxQztBQUNBLHdCQUF3QixpRUFBa0I7QUFDMUM7QUFDQTtBQUNBLGVBQWUsbUVBQVc7QUFDMUIsZUFBZSxtRUFBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFJO0FBQ0osSUFBSSxnQkFBZ0I7QUFDcEIsSUFBSSxTQUFTLG1EQUFNLG1CQUFtQixtREFBTSxTQUFTO0FBQ3JEOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEM4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtREFBTTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtREFBTTtBQUM5QiwyQ0FBMkMsS0FBSyxPQUFPLHVDQUF1QztBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7QUM5QnJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvQXR0YWNrTGlzdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvQmF0dGxlZmllbGQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL0NyZWF0ZVBsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9TaGlweWFyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Nvb3Jkcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RyYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgICBcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tIEdBTUVCT0FSRCAtLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi5iYXR0bGVmaWVsZHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmF0dGxlZmllbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4udWktZHJhZ2dhYmxlIHtcXHJcXG4gICAgY3Vyc29yOiBncmFiO1xcclxcbn1cXHJcXG5cXHJcXG4udWktZHJhZ2dhYmxlOmFjdGl2ZSB7XFxyXFxuICAgIGN1cnNvcjogZ3JhYmJpbmc7XFxyXFxufVxcclxcblxcclxcbi5zaGlweWFyZCB7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5zaGlweWFyZCA+IGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWJveCB7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2FpdCB7XFxyXFxuICAgIG9wYWNpdHk6IDAuMjtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcblxcclxcbi5yb3cge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG50aCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbCwgdGQsIHRoIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwtYnVzeSB7XFxyXFxuICAgIGN1cnNvcjogZ3JhYjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGw6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLWZpbGwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC1oaXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLW1pc3Mge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6Qjs7QUFFQSxzQ0FBc0M7O0FBRXRDO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7ICAgXFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLSBHQU1FQk9BUkQgLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4uYmF0dGxlZmllbGRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhdHRsZWZpZWxkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnVpLWRyYWdnYWJsZSB7XFxyXFxuICAgIGN1cnNvcjogZ3JhYjtcXHJcXG59XFxyXFxuXFxyXFxuLnVpLWRyYWdnYWJsZTphY3RpdmUge1xcclxcbiAgICBjdXJzb3I6IGdyYWJiaW5nO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcHlhcmQge1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcHlhcmQgPiBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1ib3gge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndhaXQge1xcclxcbiAgICBvcGFjaXR5OiAwLjI7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxudGgge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwsIHRkLCB0aCB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHg7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLWJ1c3kge1xcclxcbiAgICBjdXJzb3I6IGdyYWI7XFxyXFxufVxcclxcblxcclxcbi5jZWxsOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC1maWxsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwtaGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC1taXNzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgQXR0YWNrTGlzdCA9IChib2FyZCkgPT4ge1xyXG4gIGNvbnN0IHsgc2hpcHMgfSA9IGJvYXJkO1xyXG5cclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhdHRhY2stbGlzdCcpO1xyXG4gIGNvbnNvbGUubG9nKHNoaXBzKTtcclxuXHJcbiAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xyXG4gICAgY29uc3Qgc2hpcEhpdEFycmF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzaGlwSGl0QXJyYXkuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xyXG4gICAgc2hpcC5oaXRBcnJheS5mb3JFYWNoKChwYXJ0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHNoaXBQYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHNoaXBQYXJ0LmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGFydCcpO1xyXG4gICAgICBzaGlwUGFydC50ZXh0Q29udGVudCA9IHBhcnQ7XHJcbiAgICAgIHNoaXBIaXRBcnJheS5hcHBlbmRDaGlsZChzaGlwUGFydCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNoaXBIaXRBcnJheSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgICAgc2hpcC5oaXRBcnJheS5mb3JFYWNoKChwYXJ0KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2hpcFBhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1wYXJ0Jyk7XHJcbiAgICAgICAgc2hpcFBhcnQuaW5uZXJIVE1MID0gcGFydDtcclxuICAgICAgICBjb25zb2xlLmxvZyhzaGlwUGFydCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGFydCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZXR1cm4ge1xyXG4gICAgZWxlbWVudCxcclxuICAgIHJlbmRlcixcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXR0YWNrTGlzdDtcclxuIiwiaW1wb3J0IFNoaXB5YXJkIGZyb20gJy4vU2hpcHlhcmQnO1xyXG5cclxuY29uc3QgQmF0dGxlZmllbGQgPSAoYm9hcmQsIGF0dGFja0xpc3QpID0+IHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdiYXR0bGVmaWVsZCcpO1xyXG5cclxuICBjb25zdCBzaGlweWFyZCA9IFNoaXB5YXJkKCk7XHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChib2FyZC5lbGVtZW50KTtcclxuICBlbGVtZW50LmFwcGVuZENoaWxkKGF0dGFja0xpc3QuZWxlbWVudCk7XHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChzaGlweWFyZCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBlbGVtZW50LFxyXG4gICAgYm9hcmQsXHJcbiAgICBhdHRhY2tMaXN0LFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXR0bGVmaWVsZDtcclxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi9wbGF5ZXInO1xyXG5cclxuY29uc3QgQ3JlYXRlUGxheWVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtcGxheWVyLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLXBsYXllci1sYWJlbCcpO1xyXG4gIGxhYmVsLnRleHRDb250ZW50ID0gJ0VudGVyIFBsYXllciBOYW1lJztcclxuXHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoJ3BsYXllci1uYW1lLWlucHV0Jyk7XHJcbiAgaW5wdXQudHlwZSA9ICd0ZXh0JztcclxuXHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1uYW1lLWJ1dHRvbicpO1xyXG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdDcmVhdGUnO1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGlucHV0O1xyXG4gICAgY29uc3QgbmV3UGxheWVyID0gUGxheWVyKHZhbHVlKTtcclxuICAgIHJldHVybiBuZXdQbGF5ZXI7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVBsYXllcjtcclxuIiwiaW1wb3J0IENvb3JkcyBmcm9tICcuLi9jb29yZHMnO1xyXG5pbXBvcnQgU2hpcCBmcm9tICcuLi9zaGlwJztcclxuXHJcbmNvbnN0IEdhbWVib2FyZENvbXBvbmVudCA9IChnYW1lYm9hcmQpID0+IHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQnKTtcclxuXHJcbiAgY29uc3QgYm9hcmRHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcclxuICBib2FyZEdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZCcpO1xyXG5cclxuICBjb25zdCB0YWJsZUhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xyXG5cclxuICBjb25zdCBsZXR0ZXJzUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICBsZXR0ZXJzUm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xyXG4gIGNvbnN0IHsgbGVuZ3RoIH0gPSBnYW1lYm9hcmQuc2l6ZTtcclxuICBjb25zdCBsZXR0ZXJDb2RlUG9pbnQgPSA2NTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8PSBsZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgdGguc2NvcGUgPSAnY29sJztcclxuICAgIGlmIChpICE9PSAwKSB0aC50ZXh0Q29udGVudCA9IGAke1N0cmluZy5mcm9tQ29kZVBvaW50KGxldHRlckNvZGVQb2ludCArIGkgLSAxKX1gO1xyXG4gICAgbGV0dGVyc1Jvdy5hcHBlbmRDaGlsZCh0aCk7XHJcbiAgfVxyXG5cclxuICB0YWJsZUhlYWQuYXBwZW5kQ2hpbGQobGV0dGVyc1Jvdyk7XHJcblxyXG4gIGNvbnN0IHRhYmxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZWJvYXJkLnNpemUubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93Jyk7XHJcbiAgICByb3cuaWQgPSBgcm93LSR7aX1gO1xyXG5cclxuICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgIHRoLnNjb3BlID0gJ3Jvdyc7XHJcbiAgICB0aC50ZXh0Q29udGVudCA9IGkgKyAxO1xyXG4gICAgcm93LmFwcGVuZENoaWxkKHRoKTtcclxuXHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdhbWVib2FyZC5zaXplWzBdLmxlbmd0aDsgaiArPSAxKSB7XHJcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NlbGwtY29udGVudCcpO1xyXG4gICAgICBjb250ZW50LmRhdGFzZXQueCA9IGk7XHJcbiAgICAgIGNvbnRlbnQuZGF0YXNldC55ID0gajtcclxuICAgICAgY2VsbC5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuXHJcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgIH1cclxuICAgIHRhYmxlQm9keS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gIH1cclxuXHJcbiAgYm9hcmRHcmlkLmFwcGVuZENoaWxkKHRhYmxlSGVhZCk7XHJcbiAgYm9hcmRHcmlkLmFwcGVuZENoaWxkKHRhYmxlQm9keSk7XHJcblxyXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYm9hcmRHcmlkKTtcclxuXHJcbiAgY29uc3QgcGxhY2VTaGlwID0gKHRhcmdldCwgZHJhZ2dlZCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRhcmdldC5maXJzdENoaWxkO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkcmFnZ2VkKTtcclxuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBkcmFnZ2VkLmRhdGFzZXQubGVuZ3RoO1xyXG4gICAgY29uc3Qgc2hpcCA9IFNoaXAoZHJhZ2dlZC5kYXRhc2V0Lmxlbmd0aCk7XHJcbiAgICBjb25zdCB4ID0gTnVtYmVyKGNvbnRlbnQuZGF0YXNldC54KTtcclxuICAgIGNvbnN0IHkgPSBOdW1iZXIoY29udGVudC5kYXRhc2V0LnkpO1xyXG4gICAgY29uc3QgY29vcmRzID0gQ29vcmRzKHgsIHkpO1xyXG4gICAgZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwLCBjb29yZHMpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2NlbGwtYnVzeScpO1xyXG4gICAgICB0YXJnZXQgPSB0YXJnZXQubmV4dFNpYmxpbmc7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGVsZW1lbnQsXHJcbiAgICBnYW1lYm9hcmQsXHJcbiAgICBwbGFjZVNoaXAsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZENvbXBvbmVudDtcclxuIiwiY29uc3QgU2hpcENvbXBvbmVudCA9IChzaGlwKSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hpcC1ib3gnKTtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3VpLWRyYWdnYWJsZScpO1xyXG5cclxuICBlbGVtZW50LmRyYWdnYWJsZSA9IHRydWU7XHJcblxyXG4gIGVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHtzaGlwLmxlbmd0aCAqIDUwfXB4YDtcclxuXHJcbiAgZWxlbWVudC5kYXRhc2V0LmlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCk7XHJcblxyXG4gIGVsZW1lbnQuZGF0YXNldC5sZW5ndGggPSBzaGlwLmxlbmd0aDtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGVsZW1lbnQsXHJcbiAgICBzaGlwLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGlwQ29tcG9uZW50O1xyXG4iLCJpbXBvcnQgU2hpcENvbXBvbmVudCBmcm9tICcuL1NoaXAnO1xyXG5pbXBvcnQgU2hpcCBmcm9tICcuLi9zaGlwJztcclxuXHJcbmNvbnN0IFNoaXB5YXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NoaXB5YXJkJyk7XHJcblxyXG4gIGNvbnN0IGxlbjFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsZW4xQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NoaXBzX2xlbjEnKTtcclxuXHJcbiAgY29uc3Qgc2hpcF9sZW4xXzEgPSBTaGlwQ29tcG9uZW50KFNoaXAoMSkpLmVsZW1lbnQ7XHJcbiAgY29uc3Qgc2hpcF9sZW4xXzIgPSBTaGlwQ29tcG9uZW50KFNoaXAoMSkpLmVsZW1lbnQ7XHJcbiAgY29uc3Qgc2hpcF9sZW4xXzMgPSBTaGlwQ29tcG9uZW50KFNoaXAoMSkpLmVsZW1lbnQ7XHJcbiAgY29uc3Qgc2hpcF9sZW4xXzQgPSBTaGlwQ29tcG9uZW50KFNoaXAoMSkpLmVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0IGxlbjJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsZW4yQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NoaXBzX2xlbjInKTtcclxuXHJcbiAgY29uc3Qgc2hpcF9sZW4yXzEgPSBTaGlwQ29tcG9uZW50KFNoaXAoMikpLmVsZW1lbnQ7XHJcbiAgY29uc3Qgc2hpcF9sZW4yXzIgPSBTaGlwQ29tcG9uZW50KFNoaXAoMikpLmVsZW1lbnQ7XHJcbiAgY29uc3Qgc2hpcF9sZW4yXzMgPSBTaGlwQ29tcG9uZW50KFNoaXAoMikpLmVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0IGxlbjNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsZW4zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NoaXBzX2xlbjMnKTtcclxuXHJcbiAgY29uc3Qgc2hpcF9sZW4zXzEgPSBTaGlwQ29tcG9uZW50KFNoaXAoMykpLmVsZW1lbnQ7XHJcbiAgY29uc3Qgc2hpcF9sZW4zXzIgPSBTaGlwQ29tcG9uZW50KFNoaXAoMykpLmVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0IGxlbjRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsZW40Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NoaXBzX2xlbjQnKTtcclxuXHJcbiAgY29uc3Qgc2hpcF9sZW40XzEgPSBTaGlwQ29tcG9uZW50KFNoaXAoNCkpLmVsZW1lbnQ7XHJcblxyXG4gIGxlbjFDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcF9sZW4xXzEpO1xyXG4gIGxlbjFDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcF9sZW4xXzIpO1xyXG4gIGxlbjFDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcF9sZW4xXzMpO1xyXG4gIGxlbjFDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcF9sZW4xXzQpO1xyXG5cclxuICBsZW4yQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBfbGVuMl8xKTtcclxuICBsZW4yQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBfbGVuMl8yKTtcclxuICBsZW4yQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBfbGVuMl8zKTtcclxuXHJcbiAgbGVuM0NvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwX2xlbjNfMSk7XHJcbiAgbGVuM0NvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwX2xlbjNfMik7XHJcblxyXG4gIGxlbjRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcF9sZW40XzEpO1xyXG5cclxuICBlbGVtZW50LmFwcGVuZENoaWxkKGxlbjFDb250YWluZXIpO1xyXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQobGVuMkNvbnRhaW5lcik7XHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChsZW4zQ29udGFpbmVyKTtcclxuICBlbGVtZW50LmFwcGVuZENoaWxkKGxlbjRDb250YWluZXIpO1xyXG5cclxuICByZXR1cm4gZWxlbWVudDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoaXB5YXJkO1xyXG4iLCJjb25zdCBDb29yZHMgPSAoeCwgeSkgPT4ge1xyXG4gICAgY29uc3Qgb2JqID0ge307XHJcbiAgICBvYmoueCA9IHg7XHJcbiAgICBvYmoueSA9IHk7XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb29yZHM7IiwiY29uc3QgRHJhZyA9IChib2FyZCkgPT4ge1xyXG4gIGxldCBkcmFnZ2VkID0gbnVsbDtcclxuXHJcbiAgLyogZml4IGJ1ZyB0aGF0IGFsbG93cyB1c2VyIHRvIHBsYWNlIHNoaXBzIG5leHQgdG8gZWFjaG90aGVyXHJcbiAgICAgICAgcHJvYmxlbSBvY2N1cnMgd2hlbiB1c2VyIHN0YXJ0cyBkcmFnIHNoaXAgYnV0IHBsYWNlcyBpdCBiYWNrIGluIHNhbWUgY2VsbFxyXG4gICAgKi9cclxuICBjb25zdCBzdGFydCA9IChldikgPT4ge1xyXG4gICAgZHJhZ2dlZCA9IGV2LnRhcmdldDtcclxuICAgIGxldCBzaGlwTGVuZ3RoID0gZHJhZ2dlZC5kYXRhc2V0Lmxlbmd0aDtcclxuICAgIGxldCBuZXdUYXJnZXQgPSBldi50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgaWYgKGRyYWdnZWQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnY2VsbC1idXN5JykpIHtcclxuICAgICAgd2hpbGUgKHNoaXBMZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbmV3VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2NlbGwtYnVzeScpO1xyXG4gICAgICAgIG5ld1RhcmdldCA9IG5ld1RhcmdldC5uZXh0U2libGluZztcclxuICAgICAgICBzaGlwTGVuZ3RoIC09IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgZXYudGFyZ2V0LmlkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkcmFnb3ZlciA9IChldikgPT4ge1xyXG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkcm9wID0gKGV2KSA9PiB7XHJcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHNoaXBMZW5ndGggPSBkcmFnZ2VkLmRhdGFzZXQubGVuZ3RoO1xyXG4gICAgbGV0IG5ld1RhcmdldCA9IGV2LnRhcmdldDtcclxuICAgIHdoaWxlIChzaGlwTGVuZ3RoID4gMCkge1xyXG4gICAgICBpZiAoIW5ld1RhcmdldCkgcmV0dXJuO1xyXG4gICAgICBpZiAobmV3VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbC1idXN5JykpIHJldHVybjtcclxuICAgICAgaWYgKGNoZWNrSWZCdXN5KG5ld1RhcmdldCkpIHJldHVybjtcclxuICAgICAgbmV3VGFyZ2V0ID0gbmV3VGFyZ2V0Lm5leHRTaWJsaW5nO1xyXG4gICAgICBzaGlwTGVuZ3RoIC09IDE7XHJcbiAgICB9XHJcbiAgICBpZiAoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSB7XHJcbiAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldjtcclxuICAgICAgYm9hcmQucGxhY2VTaGlwKHRhcmdldCwgZHJhZ2dlZCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hlY2tEaXJlY3Rpb24gPSAoeCwgeSkgPT4ge1xyXG4gICAgY29uc3QgZGlyZWN0aW9ucyA9IFtdO1xyXG4gICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsLWNvbnRlbnRbZGF0YS14PScke3h9J11bZGF0YS15PScke3kgLSAxfSddYCk7XHJcbiAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsLWNvbnRlbnRbZGF0YS14PScke3h9J11bZGF0YS15PScke3kgKyAxfSddYCk7XHJcbiAgICBjb25zdCBkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGwtY29udGVudFtkYXRhLXg9JyR7eCArIDF9J11bZGF0YS15PScke3l9J11gKTtcclxuICAgIGNvbnN0IHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGwtY29udGVudFtkYXRhLXg9JyR7eCAtIDF9J11bZGF0YS15PScke3l9J11gKTtcclxuICAgIGNvbnN0IGxsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsLWNvbnRlbnRbZGF0YS14PScke3ggKyAxfSddW2RhdGEteT0nJHt5IC0gMX0nXWApO1xyXG4gICAgY29uc3QgbHVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNlbGwtY29udGVudFtkYXRhLXg9JyR7eCAtIDF9J11bZGF0YS15PScke3kgLSAxfSddYCk7XHJcbiAgICBjb25zdCBybGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbC1jb250ZW50W2RhdGEteD0nJHt4ICsgMX0nXVtkYXRhLXk9JyR7eSArIDF9J11gKTtcclxuICAgIGNvbnN0IHJ1ZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsLWNvbnRlbnRbZGF0YS14PScke3ggLSAxfSddW2RhdGEteT0nJHt5ICsgMX0nXWApO1xyXG4gICAgaWYgKGxlZnQpIGRpcmVjdGlvbnMucHVzaChsZWZ0KTtcclxuICAgIGlmIChyaWdodCkgZGlyZWN0aW9ucy5wdXNoKHJpZ2h0KTtcclxuICAgIGlmIChkb3duKSBkaXJlY3Rpb25zLnB1c2goZG93bik7XHJcbiAgICBpZiAodXApIGRpcmVjdGlvbnMucHVzaCh1cCk7XHJcbiAgICBpZiAobGxkKSBkaXJlY3Rpb25zLnB1c2gobGxkKTtcclxuICAgIGlmIChsdWQpIGRpcmVjdGlvbnMucHVzaChsdWQpO1xyXG4gICAgaWYgKHJsZCkgZGlyZWN0aW9ucy5wdXNoKHJsZCk7XHJcbiAgICBpZiAocnVkKSBkaXJlY3Rpb25zLnB1c2gocnVkKTtcclxuICAgIHJldHVybiBkaXJlY3Rpb25zO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoZWNrSWZCdXN5ID0gKHRhcmdldCkgPT4ge1xyXG4gICAgbGV0IHg7XHJcbiAgICBsZXQgeTtcclxuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLWJveCcpKSB7XHJcbiAgICAgIHggPSBOdW1iZXIodGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC54KTtcclxuICAgICAgeSA9IE51bWJlcih0YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LnkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeCA9IE51bWJlcih0YXJnZXQuZmlyc3RDaGlsZC5kYXRhc2V0LngpO1xyXG4gICAgICB5ID0gTnVtYmVyKHRhcmdldC5maXJzdENoaWxkLmRhdGFzZXQueSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGlyZWN0aW9ucyA9IGNoZWNrRGlyZWN0aW9uKHgsIHkpO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBkaXJlY3Rpb25zLmxlbmd0aDsgaiArPSAxKSB7XHJcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGRpcmVjdGlvbnNbal0ucGFyZW50Tm9kZTtcclxuICAgICAgaWYgKGRpcmVjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwtYnVzeScpKSByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc3RhcnQsXHJcbiAgICBkcmFnb3ZlcixcclxuICAgIGRyb3AsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyYWc7XHJcbiIsImltcG9ydCBEcmFnIGZyb20gJy4vZHJhZyc7XHJcblxyXG5jb25zdCBHYW1lID0gKGJvYXJkcywgcGxheWVycykgPT4ge1xyXG4gIGNvbnN0IHsgcGxheWVyMSwgcGxheWVyMiB9ID0gcGxheWVycztcclxuICBjb25zdCB7IGZpZWxkMSwgZmllbGQyIH0gPSBib2FyZHM7XHJcblxyXG4gIGNvbnN0IHR1cm5UcmFja2VyID0gW107XHJcbiAgY29uc3Qgc2V0VHVybiA9ICgpID0+IHtcclxuICAgIGlmICh0dXJuVHJhY2tlci5sZW5ndGggPT09IDApIHtcclxuICAgICAgdHVyblRyYWNrZXIucHVzaChwbGF5ZXIxKTtcclxuICAgICAgcmV0dXJuIHBsYXllcjE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcGxheWVyMidzIHR1cm5cclxuICAgIGlmICh0dXJuVHJhY2tlclt0dXJuVHJhY2tlci5sZW5ndGggLSAxXSA9PT0gcGxheWVyMSkge1xyXG4gICAgICB0dXJuVHJhY2tlci5wdXNoKHBsYXllcjIpO1xyXG4gICAgICByZXR1cm4gcGxheWVyMjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwbGF5ZXIxJ3MgdHVyblxyXG4gICAgaWYgKHR1cm5UcmFja2VyW3R1cm5UcmFja2VyLmxlbmd0aCAtIDFdID09PSBwbGF5ZXIyKSB7XHJcbiAgICAgIHR1cm5UcmFja2VyLnB1c2gocGxheWVyMSk7XHJcbiAgICAgIHJldHVybiBwbGF5ZXIxO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGxldCBjdXJyZW50UGxheWVyID0gc2V0VHVybigpO1xyXG4gIGNvbnN0IHNlbGZCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxmJyk7XHJcbiAgY29uc3Qgcml2YWxCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaXZhbCcpO1xyXG4gIGNvbnN0IG1ha2VNb3ZlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBlLnRhcmdldC5jaGlsZHJlblswXTtcclxuICAgIGNvbnN0IHsgeCB9ID0gY29udGVudC5kYXRhc2V0O1xyXG4gICAgY29uc3QgeyB5IH0gPSBjb250ZW50LmRhdGFzZXQ7XHJcbiAgICBjb25zdCBib2FyZEVsZW1lbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgYm9hcmQgPSBib2FyZEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxmJykgPyBmaWVsZDEuYm9hcmQuZ2FtZWJvYXJkIDogZmllbGQyLmJvYXJkLmdhbWVib2FyZDtcclxuICAgIGNvbnN0IG90aGVyQm9hcmRFbGVtZW50ID0gYm9hcmQgPT09IGZpZWxkMS5ib2FyZC5nYW1lYm9hcmQgPyByaXZhbEJvYXJkIDogc2VsZkJvYXJkO1xyXG4gICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwtbWlzcycpICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwtaGl0JykpIHtcclxuICAgICAgcmVtb3ZlTW92ZShib2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKSk7XHJcbiAgICAgIG90aGVyQm9hcmRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3dhaXQnKTtcclxuICAgICAgYm9hcmQuc2l6ZVt4XVt5XSA9PT0gdW5kZWZpbmVkID8gZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY2VsbC1taXNzJykgOiBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjZWxsLWhpdCcpO1xyXG4gICAgICBjdXJyZW50UGxheWVyLmF0dGFjayh4LCB5LCBib2FyZCk7XHJcbiAgICAgIGFkZE1vdmUob3RoZXJCb2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKSk7XHJcbiAgICAgIGJvYXJkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3YWl0Jyk7XHJcbiAgICAgIGlmIChib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgYWxlcnQoYCR7Y3VycmVudFBsYXllci5uYW1lfSBoYXMgd29uYCk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgICAgfVxyXG4gICAgICBjdXJyZW50UGxheWVyID0gc2V0VHVybigpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZU1vdmUgPSAoYm9hcmQpID0+IHtcclxuICAgIGJvYXJkLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VNb3ZlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgYWRkTW92ZSA9IChib2FyZCkgPT4ge1xyXG4gICAgYm9hcmQuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZU1vdmUpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gbWFrZSBpdCBzcGVjaWZpYyB0byBlYWNoIGJvYXJkXHJcbiAgY29uc3QgcGxheWluZyA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWJveCcpLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgICAgY29uc29sZS5sb2coc2hpcC5wYXJlbnROb2RlKTtcclxuICAgICAgc2hpcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNoaXApO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VNb3ZlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldFVwID0gKGJvYXJkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnc2V0dGluZyB1cCcpO1xyXG4gICAgY29uc3QgZHJhZyA9IERyYWcoYm9hcmQpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAtYm94JykuZm9yRWFjaCgoc2hpcCkgPT4gc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnLnN0YXJ0KSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpLmZvckVhY2goKGNlbGwpID0+IGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnLmRyYWdvdmVyKSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpLmZvckVhY2goKGNlbGwpID0+IGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyYWcuZHJvcCkpO1xyXG4gIH07XHJcblxyXG4gIHNldFVwKGZpZWxkMS5ib2FyZCk7XHJcblxyXG4gIGNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheScpO1xyXG4gIHBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnR2FtZSBTdGFydCcpO1xyXG4gICAgY29uc29sZS5sb2coZmllbGQxLmJvYXJkLmdhbWVib2FyZC5zaXplKTtcclxuICAgIHBsYXlpbmcoKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XHJcbiIsImltcG9ydCBDb29yZHMgZnJvbSAnLi9jb29yZHMnO1xyXG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xyXG5cclxuY29uc3QgR2FtZWJvYXJkID0gKGZhY3RvcikgPT4ge1xyXG4gIGNvbnN0IG9iaiA9IE9iamVjdC5jcmVhdGUoZ2FtZWJvYXJkRnVuY3Rpb25zKTtcclxuICBvYmouc2l6ZSA9IEFycmF5LmZyb20oQXJyYXkoZmFjdG9yKSwgKCkgPT4gKEFycmF5KGZhY3RvcikpKTtcclxuICBvYmoubWlzc2VkQXR0YWNrcyA9IFtdO1xyXG4gIG9iai5zaGlwcyA9IFtdO1xyXG4gIHJldHVybiBvYmo7XHJcbn07XHJcblxyXG5jb25zdCBnYW1lYm9hcmRGdW5jdGlvbnMgPSB7XHJcbiAgcGxhY2VTaGlwKHNoaXAsIGNvb3JkcywgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnKSB7XHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnICYmIE51bWJlcihjb29yZHMueCkgKyBOdW1iZXIoc2hpcC5sZW5ndGgpID4gdGhpcy5zaXplLmxlbmd0aCArIDEpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ1NoaXAgb3V0IG9mIGJvdW5kcycpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnICYmIE51bWJlcihjb29yZHMueSkgKyBOdW1iZXIoc2hpcC5sZW5ndGgpID4gdGhpcy5zaXplWzBdLmxlbmd0aCArIDEpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ1NoaXAgb3V0IG9mIGJvdW5kcycpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJ1xyXG4gICAgICAgID8gdGhpcy5zaXplW2Nvb3Jkcy54XVtjb29yZHMueSArIGldID0gc2hpcFxyXG4gICAgICAgIDogdGhpcy5zaXplW2Nvb3Jkcy54ICsgaV1bY29vcmRzLnldID0gc2hpcDtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlY2VpdmVBdHRhY2soY29vcmRzKSB7XHJcbiAgICBjb25zdCBzaGlwID0gdGhpcy5zaXplW2Nvb3Jkcy54XVtjb29yZHMueV07XHJcbiAgICBpZiAoc2hpcCkge1xyXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuY2FsY3VsYXRlU2hpcFBvc2l0aW9uKGNvb3Jkcyk7XHJcbiAgICAgIHNoaXAuaGl0KHBvc2l0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubWlzc2VkQXR0YWNrcy5wdXNoKGNvb3Jkcyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBhbGxTaGlwc1N1bmsoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XHJcbiAgfSxcclxuICBjYWxjdWxhdGVTaGlwUG9zaXRpb24oY29vcmRzKSB7XHJcbiAgICBsZXQgeyB4IH0gPSBjb29yZHM7XHJcbiAgICBsZXQgeyB5IH0gPSBjb29yZHM7XHJcbiAgICBjb25zdCBzdGFydCA9IHsgeCwgeSB9O1xyXG4gICAgbGV0IHBvc2l0aW9uID0gMDtcclxuICAgIGlmICh4IC0gMSA+PSAwICYmIHggKyAxIDwgdGhpcy5zaXplLmxlbmd0aCkge1xyXG4gICAgICBpZiAodGhpcy5zaXplW3ggLSAxXVt5XSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgd2hpbGUgKHggPj0gMCAmJiB0aGlzLnNpemVbeF1beV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgc3RhcnQueCA9IHg7XHJcbiAgICAgICAgICB4LS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb29yZHMueCAhPT0gc3RhcnQueCkgcG9zaXRpb24gPSBjb29yZHMueCAtIHN0YXJ0Lng7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh5IC0gMSA+PSAwICYmIHkgKyAxIDwgdGhpcy5zaXplWzBdLmxlbmd0aCAmJiB4ID49IDAgJiYgeCA8IHRoaXMuc2l6ZS5sZW5ndGgpIHtcclxuICAgICAgaWYgKHRoaXMuc2l6ZVt4XVt5IC0gMV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHdoaWxlICh5ID49IDAgJiYgdGhpcy5zaXplW3hdW3ldICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHN0YXJ0LnkgPSB5O1xyXG4gICAgICAgICAgeS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29vcmRzLnkgIT09IHN0YXJ0LnkpIHBvc2l0aW9uID0gY29vcmRzLnkgLSBzdGFydC55O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcG9zaXRpb247XHJcbiAgfSxcclxuICBnZXRBdHRhY2thYmxlQ2VsbHMoKSB7XHJcbiAgICBjb25zdCBhdHRhY2thYmxlQ2VsbHMgPSBbXTtcclxuICAgIGNvbnN0IGNlbGxzID0gdGhpcy5zaXplO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNlbGxzWzBdLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmRzID0gQ29vcmRzKGksIGopO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5jYWxjdWxhdGVTaGlwUG9zaXRpb24oY29vcmRzKTtcclxuICAgICAgICBpZiAoY2VsbHNbaV1bal0gPT09IHVuZGVmaW5lZCB8fCAhY2VsbHNbaV1bal0uaGl0QXJyYXlbcG9zaXRpb25dKSB7XHJcbiAgICAgICAgICBhdHRhY2thYmxlQ2VsbHMucHVzaChjb29yZHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF0dGFja2FibGVDZWxscztcclxuICB9LFxyXG4gIGdlbmVyYXRlU2hpcHMoKSB7XHJcbiAgICBjb25zdCBzaGlwMUxfMSA9IFNoaXAoMSk7XHJcbiAgICBjb25zdCBzaGlwMUxfMiA9IFNoaXAoMSk7XHJcbiAgICBjb25zdCBzaGlwMUxfMyA9IFNoaXAoMSk7XHJcbiAgICBjb25zdCBzaGlwMUxfNCA9IFNoaXAoMSk7XHJcblxyXG4gICAgY29uc3Qgc2hpcDJMXzEgPSBTaGlwKDIpO1xyXG4gICAgY29uc3Qgc2hpcDJMXzIgPSBTaGlwKDIpO1xyXG4gICAgY29uc3Qgc2hpcDJMXzMgPSBTaGlwKDIpO1xyXG5cclxuICAgIGNvbnN0IHNoaXAzTF8xID0gU2hpcCgzKTtcclxuICAgIGNvbnN0IHNoaXAzTF8yID0gU2hpcCgzKTtcclxuXHJcbiAgICBjb25zdCBzaGlwNExfMSA9IFNoaXAoNCk7XHJcblxyXG4gICAgY29uc3QgY29vcmRzMSA9IENvb3JkcygxLCA0KTtcclxuICAgIGNvbnN0IGNvb3JkczIgPSBDb29yZHMoMSwgNik7XHJcbiAgICBjb25zdCBjb29yZHMzID0gQ29vcmRzKDgsIDEpO1xyXG4gICAgY29uc3QgY29vcmRzNCA9IENvb3Jkcyg5LCAzKTtcclxuXHJcbiAgICB0aGlzLnBsYWNlU2hpcChzaGlwMUxfMSwgY29vcmRzMSk7XHJcbiAgICB0aGlzLnBsYWNlU2hpcChzaGlwMUxfMiwgY29vcmRzMik7XHJcbiAgICB0aGlzLnBsYWNlU2hpcChzaGlwMUxfMywgY29vcmRzMyk7XHJcbiAgICB0aGlzLnBsYWNlU2hpcChzaGlwMUxfNCwgY29vcmRzNCk7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcclxuIiwiaW1wb3J0IEdhbWVib2FyZENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvR2FtZWJvYXJkJztcclxuaW1wb3J0IENyZWF0ZVBsYXllciBmcm9tICcuL2NvbXBvbmVudHMvQ3JlYXRlUGxheWVyJztcclxuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xyXG5pbXBvcnQgQXR0YWNrTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvQXR0YWNrTGlzdCc7XHJcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcclxuaW1wb3J0IEJhdHRsZWZpZWxkIGZyb20gJy4vY29tcG9uZW50cy9CYXR0bGVmaWVsZCc7XHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5cclxuY29uc3QgcGxheWVySW5wdXQgPSBDcmVhdGVQbGF5ZXIoKTtcclxuXHJcbmNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uJyk7XHJcblxyXG5ib2R5LmFwcGVuZENoaWxkKHBsYXllcklucHV0KTtcclxuXHJcbmNvbnN0IGdhbWVib2FyZDEgPSBHYW1lYm9hcmQoMTApO1xyXG5jb25zdCBnYW1lYm9hcmQyID0gR2FtZWJvYXJkKDEwKTtcclxuZ2FtZWJvYXJkMi5nZW5lcmF0ZVNoaXBzKCk7XHJcblxyXG5jb25zdCBhdHRhY2tMaXN0MSA9IEF0dGFja0xpc3QoZ2FtZWJvYXJkMSk7XHJcbmNvbnN0IGF0dGFja0xpc3QyID0gQXR0YWNrTGlzdChnYW1lYm9hcmQyKTtcclxuXHJcbmNvbnN0IGZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhdHRsZWZpZWxkcycpO1xyXG5cclxuY29uc3QgYm9hcmRDb21wb25lbnQxID0gR2FtZWJvYXJkQ29tcG9uZW50KGdhbWVib2FyZDEpO1xyXG5ib2FyZENvbXBvbmVudDEuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZWxmJyk7XHJcbmNvbnN0IGJvYXJkQ29tcG9uZW50MiA9IEdhbWVib2FyZENvbXBvbmVudChnYW1lYm9hcmQyKTtcclxuYm9hcmRDb21wb25lbnQyLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncml2YWwnKTtcclxuXHJcbmNvbnN0IGZpZWxkMSA9IEJhdHRsZWZpZWxkKGJvYXJkQ29tcG9uZW50MSwgYXR0YWNrTGlzdDEpO1xyXG5jb25zdCBmaWVsZDIgPSBCYXR0bGVmaWVsZChib2FyZENvbXBvbmVudDIsIGF0dGFja0xpc3QyKTtcclxuXHJcbmZpZWxkLmFwcGVuZENoaWxkKGZpZWxkMS5lbGVtZW50KTtcclxuZmllbGQuYXBwZW5kQ2hpbGQoZmllbGQyLmVsZW1lbnQpO1xyXG5cclxuR2FtZShcclxuICB7IGZpZWxkMSwgZmllbGQyIH0sXHJcbiAgeyBwbGF5ZXIxOiBQbGF5ZXIoJ3dpbGwnKSwgcGxheWVyMjogUGxheWVyKCdib3QnKSB9LFxyXG4pO1xyXG4iLCJpbXBvcnQgQ29vcmRzIGZyb20gXCIuL2Nvb3Jkc1wiO1xyXG5cclxuY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcclxuICAgIGxldCBvYmogPSBPYmplY3QuY3JlYXRlKHBsYXllckZ1bmN0aW9ucyk7XHJcbiAgICBvYmoubmFtZSA9IG5hbWU7XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5jb25zdCBwbGF5ZXJGdW5jdGlvbnMgPSB7XHJcbiAgICBhdHRhY2soeCwgeSwgZ2FtZWJvYXJkKSB7XHJcbiAgICAgICAgY29uc3QgY29vcmRzID0geyB4OiB4LCB5OiB5IH07XHJcbiAgICAgICAgZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRzKTtcclxuICAgIH0sXHJcbiAgICBib3RBdHRhY2soZ2FtZWJvYXJkKSB7XHJcbiAgICAgICAgY29uc3QgYXR0YWNrYWJsZUNlbGxzID0gZ2FtZWJvYXJkLmdldEF0dGFja2FibGVDZWxscygpO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGdhbWVib2FyZC5zaXplLmxlbmd0aDtcclxuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlbmd0aCk7XHJcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW5ndGgpO1xyXG4gICAgICAgIGxldCBuZXdDb29yZHMgPSBDb29yZHMoeCwgeSk7XHJcbiAgICAgICAgbGV0IGZvdW5kID0gYXR0YWNrYWJsZUNlbGxzLmZpbmQoY2VsbCA9PiBKU09OLnN0cmluZ2lmeShjZWxsKSA9PT0gSlNPTi5zdHJpbmdpZnkobmV3Q29vcmRzKSk7XHJcbiAgICAgICAgd2hpbGUgKGZvdW5kID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IG5ld1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW5ndGgpO1xyXG4gICAgICAgICAgICBsZXQgbmV3WSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlbmd0aCk7XHJcbiAgICAgICAgICAgIG5ld0Nvb3JkcyA9IENvb3JkcyhuZXdYLCBuZXdZKTtcclxuICAgICAgICAgICAgZm91bmQgPSBhdHRhY2thYmxlQ2VsbHMuZmluZCgoe3gsIHl9KSA9PiB7IHggPT09IG5ld0Nvb3Jkcy54ICYmIHkgPT09IG5ld0Nvb3Jkcy55fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGZvdW5kKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsImNvbnN0IFNoaXAgPSAobGVuZ3RoKSA9PiB7XHJcbiAgY29uc3Qgb2JqID0gT2JqZWN0LmNyZWF0ZShzaGlwRnVuY3Rpb25zKTtcclxuICBvYmoubGVuZ3RoID0gbGVuZ3RoO1xyXG4gIG9iai5oaXRBcnJheSA9IEFycmF5KGxlbmd0aCkuZmlsbChmYWxzZSk7XHJcbiAgcmV0dXJuIG9iajtcclxufTtcclxuXHJcbmNvbnN0IHNoaXBGdW5jdGlvbnMgPSB7XHJcbiAgaXNTdW5rKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGl0QXJyYXkuZXZlcnkoKGhpdGJveCkgPT4gaGl0Ym94ID09PSB0cnVlKTtcclxuICB9LFxyXG4gIGhpdChudW0pIHtcclxuICAgIHRoaXMuaGl0QXJyYXlbbnVtXSA9IHRydWU7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoaXA7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==