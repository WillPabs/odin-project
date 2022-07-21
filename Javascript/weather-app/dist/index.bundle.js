"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["index"],{

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const config = {
  API_KEY: '438599a11d7d7143fcc67c604ef7b063',
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");


const key = _config__WEBPACK_IMPORTED_MODULE_0__["default"].API_KEY;

// REQUEST BY CITY NAME
const getCityData = async (cityName) => {
  const outputDiv = document.querySelector('#search-output');
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
    console.log('Searching');
    const response = await fetch(url, { mode: 'cors' });
    const json = await response.json();
    outputDiv.textContent = JSON.stringify(json);
  } catch (err) {
    outputDiv.textContent = err;
  }
};

const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', () => {
  const cityName = document.querySelector('#search').value;
  getCityData(cityName);
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDSlE7O0FBRTlCLFlBQVksdURBQWM7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLFNBQVMsU0FBUyxJQUFJO0FBQzNGO0FBQ0Esd0NBQXdDLGNBQWM7QUFDdEQ7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbmZpZyA9IHtcbiAgQVBJX0tFWTogJzQzODU5OWExMWQ3ZDcxNDNmY2M2N2M2MDRlZjdiMDYzJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuXG5jb25zdCBrZXkgPSBjb25maWcuQVBJX0tFWTtcblxuLy8gUkVRVUVTVCBCWSBDSVRZIE5BTUVcbmNvbnN0IGdldENpdHlEYXRhID0gYXN5bmMgKGNpdHlOYW1lKSA9PiB7XG4gIGNvbnN0IG91dHB1dERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtb3V0cHV0Jyk7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mYXBwaWQ9JHtrZXl9YDtcbiAgICBjb25zb2xlLmxvZygnU2VhcmNoaW5nJyk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgb3V0cHV0RGl2LnRleHRDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG91dHB1dERpdi50ZXh0Q29udGVudCA9IGVycjtcbiAgfVxufTtcblxuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1idXR0b24nKTtcbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJykudmFsdWU7XG4gIGdldENpdHlEYXRhKGNpdHlOYW1lKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9