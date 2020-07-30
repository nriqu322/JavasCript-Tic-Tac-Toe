/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/master.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/master.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body {\\n  font-size: 12px;\\n  color: #05f2db;\\n  font-family: 'Press Start 2P', cursive;\\n  background-color: #011126;\\n}\\n\\nmain {\\n  border: solid #f23005 1px;\\n  padding: 10px;\\n}\\n\\nh1 {\\n  text-shadow: 4px 4px 0 #f2c029;\\n}\\n\\nform input {\\n  background-color: #c8b4e6;\\n  color: #011640;\\n  border: solid #05f2db 2px;\\n}\\n\\n.yellow {\\n  color: #f2c029;\\n  text-shadow: 4px 4px 0 #f23005;\\n}\\n\\n.button {\\n  background-color: #05f2db;\\n  height: 40px;\\n}\\n\\n.button:hover {\\n  background-color: #05c7f2;\\n  transform: scale(1.1);\\n}\\n\\n.board-container {\\n  margin-bottom: 100px !important;\\n  max-width: 300px;\\n}\\n\\n.dis-player1,\\n.dis-player2 {\\n  display: none;\\n  border: solid 2px #05f2db;\\n  padding: 10px;\\n  transition: 0.2s;\\n}\\n\\n.player-turn {\\n  box-shadow: 5px 10px #05f2db;\\n  transition: 0.2s;\\n}\\n\\n.name1-container,\\n.name2-container {\\n  position: relative;\\n  top: -10px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: #011126;\\n}\\n\\n.p1name,\\n.p2name {\\n  background-color: #011126;\\n  font-size: 14px;\\n}\\n\\n.p1symbol,\\n.p2symbol {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border: solid 2px #bf268a;\\n  height: 50px;\\n  width: 100px;\\n  font-size: 22px;\\n  margin-top: 12px;\\n}\\n\\n.p1score,\\n.p2score {\\n  position: relative;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border: solid 2px #bf268a;\\n  height: 60px;\\n  width: 100px;\\n  margin-top: 12px;\\n}\\n\\n.score1,\\n.score2 {\\n  font-size: 20px;\\n}\\n\\n.absolute {\\n  position: absolute;\\n  top: -10px;\\n  background-color: #011126;\\n}\\n\\n.cell {\\n  height: 100px;\\n  border: solid 3px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 40px;\\n  transition: 0.2s;\\n}\\n\\n.cell:hover {\\n  background-color: #f23005;\\n  transition: 0.2s;\\n  cursor: pointer;\\n}\\n\\n.cell:first-child,\\n.cell:nth-child(2),\\n.cell:nth-child(3) {\\n  border-top: none;\\n  margin-top: 25px;\\n}\\n\\n.cell:nth-child(3n + 1) {\\n  border-left: none;\\n}\\n\\n.cell:nth-child(3n + 3) {\\n  border-right: none;\\n}\\n\\n.cell:last-child,\\n.cell:nth-child(7),\\n.cell:nth-child(8) {\\n  border-bottom: none;\\n}\\n\\n.display-players {\\n  max-width: 500px;\\n}\\n\\n.win {\\n  background-color: #0fc50f;\\n}\\n\\n.message {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100vw;\\n  height: 100vh;\\n  background-color: rgba(0, 0, 0, 0.7);\\n  display: none;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 20px;\\n  font-weight: bold;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/master.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n\n\n\nconst displayController = (() => {\n  let message;\n  let countMarks = 0;\n  let currentPlayer;\n  let messageContainer;\n  let newButton;\n  let resetButton;\n\n  const gameOverMessage = (string) => {\n    messageContainer = document.querySelector('.message');\n    messageContainer.style.display = 'flex';\n\n    message = document.querySelector('.result-message');\n    message.textContent = `${string}`;\n\n    newButton = document.querySelector('.new-game');\n    newButton.textContent = 'New Game';\n\n    resetButton = document.querySelector('.reset-game');\n    resetButton.textContent = 'Reset Game';\n  };\n\n  const resetGame = () => {\n    document.getElementById('reset-game').addEventListener('click', () => {\n      window.location.reload();\n    });\n  };\n\n  const resetBoard = () => {\n    document.getElementById('new-game').addEventListener('click', () => {\n      const cell = _gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCells();\n      for (let i = 0; i < 9; i += 1) {\n        cell[i].textContent = '';\n        cell[i].classList.remove('win');\n      }\n      document.querySelector('.message').style.display = 'none';\n    });\n  };\n\n  const checkWins = (cell) => {\n    _gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].winCombos.forEach((combo) => {\n      const elem1 = combo[0];\n      const elem2 = combo[1];\n      const elem3 = combo[2];\n\n      if (\n        cell[elem1].innerHTML\n        && cell[elem1].innerHTML === cell[elem2].innerHTML\n        && cell[elem1].innerHTML === cell[elem3].innerHTML\n      ) {\n        cell[elem1].classList.add('win');\n        cell[elem2].classList.add('win');\n        cell[elem3].classList.add('win');\n\n        gameOverMessage(`${currentPlayer.name} wins`);\n        resetGame();\n        resetBoard();\n        currentPlayer.score += 1;\n        countMarks = 0;\n      }\n    });\n  };\n\n\n  const checkTie = (countMarks) => {\n    if (countMarks === 9) {\n      gameOverMessage('It\\'s a tie');\n      resetGame();\n      resetBoard();\n      countMarks = 0;\n    }\n  };\n\n\n  const getPlayersData = () => {\n    const pname1 = document.getElementById('player1').value;\n    const pname2 = document.getElementById('player2').value;\n    const player1 = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pname1, 'X');\n    const player2 = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pname2, 'O');\n    return [player1, player2];\n  };\n\n  const playerMove = () => {\n    const players = getPlayersData();\n    const player1 = players[0];\n    const player2 = players[1];\n    _gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayPlayers(player1, player2);\n    const cell = _gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCells();\n\n\n    for (let i = 0; i < 9; i += 1) {\n      // eslint-disable-next-line no-loop-func\n      cell[i].addEventListener('click', () => {\n        if (cell[i].textContent === '') {\n          if (countMarks % 2 === 0) {\n            cell[i].textContent = player1.symbol;\n            currentPlayer = player1;\n          } else {\n            cell[i].textContent = player2.symbol;\n            currentPlayer = player2;\n          }\n          countMarks += 1;\n        }\n        _gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateStyle(currentPlayer, player1);\n        displayController.checkWins(cell);\n        _gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateScore(currentPlayer, player1);\n        displayController.checkTie(countMarks);\n      });\n    }\n  };\n\n  const submitBtn = () => {\n    _gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderCell();\n    playerMove();\n    const form = document.getElementById('players-form');\n    form.style.display = 'none';\n  };\n\n  return {\n    checkWins, checkTie, getPlayersData, submitBtn, playerMove,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (displayController);\n\n//# sourceURL=webpack:///./src/displayController.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst gameBoard = (() => {\n  const board = document.getElementById('board');\n  const winCombos = [\n    [0, 1, 2],\n    [3, 4, 5],\n    [6, 7, 8],\n    [0, 3, 6],\n    [1, 4, 7],\n    [2, 5, 8],\n    [0, 4, 8],\n    [2, 4, 6],\n  ];\n\n  const renderCell = () => {\n    for (let i = 0; i < 9; i += 1) {\n      const cell = document.createElement('div');\n      cell.classList.add('cell', 'col-4');\n      cell.id = `cell-${i}`;\n      board.appendChild(cell);\n    }\n  };\n\n  const getCells = () => {\n    const cell = document.querySelectorAll('.cell');\n    return cell;\n  };\n\n  const displayPlayers = (player1, player2) => {\n    const p1 = document.querySelector('.dis-player1');\n    const p2 = document.querySelector('.dis-player2');\n\n    const nameCont1 = document.querySelector('.name1-container');\n    const pName1 = document.createElement('div');\n    pName1.classList.add('p1name', 'absolute');\n    pName1.textContent = player1.name;\n\n    const pSymbol1 = document.createElement('div');\n    pSymbol1.classList.add('p1symbol');\n    pSymbol1.textContent = player1.symbol;\n\n    const pScore1 = document.createElement('div');\n    const scoreTitle1 = document.createElement('span');\n    const score1 = document.createElement('div');\n    pScore1.classList.add('p1score');\n    scoreTitle1.classList.add('absolute');\n    scoreTitle1.textContent = 'SCORE';\n    score1.classList.add('score1');\n    score1.textContent = player1.score;\n\n    nameCont1.appendChild(pName1);\n    p1.append(pSymbol1);\n    p1.appendChild(pScore1);\n    pScore1.appendChild(scoreTitle1);\n    pScore1.appendChild(score1);\n    p1.classList.add('d-flex', 'flex-column');\n\n    const nameCont2 = document.querySelector('.name2-container');\n    const pName2 = document.createElement('div');\n    pName2.classList.add('p2name', 'absolute');\n    pName2.textContent = player2.name;\n\n    const pSymbol2 = document.createElement('div');\n    pSymbol2.classList.add('p2symbol');\n    pSymbol2.textContent = player2.symbol;\n\n    const pScore2 = document.createElement('div');\n    const scoreTitle2 = document.createElement('span');\n    const score2 = document.createElement('div');\n    pScore2.classList.add('p2score');\n    scoreTitle2.classList.add('absolute');\n    scoreTitle2.textContent = 'SCORE';\n    score2.classList.add('score2');\n    score2.textContent = player2.score;\n\n    nameCont2.appendChild(pName2);\n    p2.append(pSymbol2);\n    p2.appendChild(pScore2);\n    pScore2.appendChild(scoreTitle2);\n    pScore2.appendChild(score2);\n    p2.classList.add('d-flex', 'flex-column');\n  };\n\n  const updateStyle = (currentPlayer, player) => {\n    if (currentPlayer === player) {\n      document.querySelector('.dis-player1').classList.remove('player-turn');\n      document.querySelector('.dis-player2').classList.add('player-turn');\n    } else {\n      document.querySelector('.dis-player2').classList.remove('player-turn');\n      document.querySelector('.dis-player1').classList.add('player-turn');\n    }\n  };\n\n  const updateScore = (currentPlayer, player1) => {\n    if (currentPlayer === player1) {\n      const pScore1 = document.querySelector('.score1');\n      pScore1.textContent = currentPlayer.score;\n    } else {\n      const pScore2 = document.querySelector('.score2');\n      pScore2.textContent = currentPlayer.score;\n    }\n  };\n\n  return {\n    winCombos, renderCell, getCells, displayPlayers, updateScore, updateStyle,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameBoard);\n\n//# sourceURL=webpack:///./src/gameBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _master_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./master.css */ \"./src/master.css\");\n/* harmony import */ var _master_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_master_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController */ \"./src/displayController.js\");\n\n\n\nconst gameStart = () => {\n  document.getElementById('players-form').onsubmit = () => {\n    _displayController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].submitBtn();\n    return false;\n  };\n};\n\ngameStart();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/master.css":
/*!************************!*\
  !*** ./src/master.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./master.css */ \"./node_modules/css-loader/dist/cjs.js!./src/master.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/master.css?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Player = (name, symbol, score = 0) => ({ name, symbol, score });\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });