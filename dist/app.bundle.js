/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/questionnaire.js":
/*!*********************************!*\
  !*** ./src/js/questionnaire.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Questionnaire\": () => (/* binding */ Questionnaire)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Questionnaire = /*#__PURE__*/function () {\n  function Questionnaire(question, reponse) {\n    _classCallCheck(this, Questionnaire);\n\n    this.question = question;\n    this.reponse = reponse;\n  }\n\n  _createClass(Questionnaire, [{\n    key: \"creatQuestionnaireElement\",\n    value: function creatQuestionnaireElement() {\n      var container = document.querySelector(\".container\");\n      var divQ = document.createElement(\"div\");\n      var divQR = document.createElement(\"div\");\n      var divR = document.createElement(\"div\");\n      divQ.setAttribute(\"class\", \"question\");\n      divQ.textContent = this.question;\n      divR.setAttribute(\"class\", \"reponse\");\n      divR.textContent = this.reponse;\n      divQR.setAttribute(\"class\", \"qr\");\n      divQR.appendChild(divQ);\n      divQR.appendChild(divR);\n      container.appendChild(divQR);\n      divQ.addEventListener(\"click\", function () {\n        divR.classList.toggle(\"show\");\n        divR.animate([{\n          opacity: 0\n        }, {\n          opacity: 1\n        }], {\n          // timing options\n          duration: 2000,\n          iterations: 1\n        });\n      });\n    }\n  }], [{\n    key: \"storeInLocalstorage\",\n    value: function storeInLocalstorage(newquestion) {\n      var stock = this.getQuestionnaireDuStorage();\n      stock.push(newquestion);\n      localStorage.setItem(\"questionnaire\", JSON.stringify(stock));\n    }\n  }, {\n    key: \"getQuestionnaireDuStorage\",\n    value: function getQuestionnaireDuStorage() {\n      return localStorage.getItem(\"questionnaire\") == null ? [] : JSON.parse(localStorage.getItem(\"questionnaire\"));\n    } //   toggleReponse(response) {\n    //     if (response.style.display == \"none\") {\n    //       response.style.display = \"block\";\n    //     } else {\n    //       response.style.display = \"none\";\n    //     }\n    //   }\n\n  }]);\n\n  return Questionnaire;\n}();\n\n//# sourceURL=webpack://tp1/./src/js/questionnaire.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _questionnaire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questionnaire */ \"./src/js/questionnaire.js\");\n\nvar questions = document.querySelectorAll(\".question\");\nvar formulaire = document.getElementById(\"qrform\");\n\nfunction creatNewQR() {\n  var newQuestion = new _questionnaire__WEBPACK_IMPORTED_MODULE_0__.Questionnaire(formulaire.elements[\"question\"].value, formulaire.elements[\"reponse\"].value);\n  newQuestion.creatQuestionnaireElement();\n  _questionnaire__WEBPACK_IMPORTED_MODULE_0__.Questionnaire.storeInLocalstorage(newQuestion);\n}\n/**\r\n * get elements from local storage ans create new element in the container\r\n */\n\n\nfunction loadElements() {\n  _questionnaire__WEBPACK_IMPORTED_MODULE_0__.Questionnaire.getQuestionnaireDuStorage().forEach(function (qr) {\n    new _questionnaire__WEBPACK_IMPORTED_MODULE_0__.Questionnaire(qr.question, qr.reponse).creatQuestionnaireElement(); // qr.creatQuestionnaireElement();\n  });\n}\n\nloadElements();\nformulaire.addEventListener(\"submit\", function (event) {\n  // stop form submission\n  event.preventDefault();\n  creatNewQR();\n  formulaire.elements[\"question\"].value = \"\";\n  formulaire.elements[\"reponse\"].value = \"\";\n  console.log(formulaire.elements[\"question\"].value);\n});\n\n//# sourceURL=webpack://tp1/./src/js/script.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;