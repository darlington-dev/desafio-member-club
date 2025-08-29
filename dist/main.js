/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _modules_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/form.js */ \"./src/modules/form.js\");\n/* harmony import */ var _modules_page_load_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/page-load.js */ \"./src/modules/page-load.js\");\n/* harmony import */ var _modules_page_load_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_page_load_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n//CSS\n\n\n//JS\n\n\n\n//# sourceURL=webpack://desafiomemberclub/./src/main.js?");

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_client_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/client-details */ \"./src/services/client-details.js\");\n/* harmony import */ var _sections_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/client */ \"./src/modules/sections/client.js\");\n/* harmony import */ var _sections_fidelity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/fidelity */ \"./src/modules/sections/fidelity.js\");\n/* harmony import */ var _sections_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/history */ \"./src/modules/sections/history.js\");\n/* harmony import */ var _sections_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/progress */ \"./src/modules/sections/progress.js\");\nfunction _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = \"function\" == typeof Symbol ? Symbol : {}, n = r.iterator || \"@@iterator\", o = r.toStringTag || \"@@toStringTag\"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, \"_invoke\", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError(\"Generator is already running\"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = \"next\"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError(\"iterator result is not an object\"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i[\"return\"]) && t.call(i), c < 2 && (u = TypeError(\"The iterator does not provide a '\" + o + \"' method\"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, \"GeneratorFunction\")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, \"constructor\", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = \"GeneratorFunction\", _regeneratorDefine2(GeneratorFunctionPrototype, o, \"GeneratorFunction\"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, \"Generator\"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, \"toString\", function () { return \"[object Generator]\"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }\nfunction _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, \"\", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o(\"next\", 0), o(\"throw\", 1), o(\"return\", 2)); }, _regeneratorDefine2(e, r, n, t); }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\n\n\n\n\n\nvar form = document.querySelector('form');\nvar input = document.getElementById('id-cartao');\nvar MAXIMO_CARACTERES_INPUT = 15;\nform.addEventListener('submit', /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(event) {\n    var formData, data, clientDetails, name, clientSince, appointmentHistory, image, loyaltyCard, totalCuts, cutsNeeded, cutsRemaining;\n    return _regenerator().w(function (_context) {\n      while (1) switch (_context.n) {\n        case 0:\n          event.preventDefault();\n          formData = new FormData(form);\n          data = Object.fromEntries(formData);\n          _context.n = 1;\n          return (0,_services_client_details__WEBPACK_IMPORTED_MODULE_0__.getClientDetails)({\n            id: data['id-cartao']\n          });\n        case 1:\n          clientDetails = _context.v;\n          name = clientDetails.name, clientSince = clientDetails.clientSince, appointmentHistory = clientDetails.appointmentHistory, image = clientDetails.image, loyaltyCard = clientDetails.loyaltyCard;\n          totalCuts = loyaltyCard.totalCuts, cutsNeeded = loyaltyCard.cutsNeeded, cutsRemaining = loyaltyCard.cutsRemaining;\n          (0,_sections_client__WEBPACK_IMPORTED_MODULE_1__.mountClientDetails)({\n            name: name,\n            clientSince: clientSince,\n            image: image\n          });\n          (0,_sections_history__WEBPACK_IMPORTED_MODULE_3__.mountHistoryLog)({\n            appointmentHistory: appointmentHistory\n          });\n          (0,_sections_fidelity__WEBPACK_IMPORTED_MODULE_2__.mountFidelityPoints)({\n            id: data['id-cartao'],\n            cutsNeeded: cutsNeeded,\n            totalCuts: totalCuts\n          });\n          (0,_sections_progress__WEBPACK_IMPORTED_MODULE_4__.mountMilestone)({\n            totalCuts: totalCuts,\n            cutsNeeded: cutsNeeded,\n            cutsRemaining: cutsRemaining\n          });\n          if (totalCuts >= cutsNeeded) {\n            alert('Parabéns! Você atingiu a quantidade necessária de cortes para ganhar um brinde!');\n          }\n        case 2:\n          return _context.a(2);\n      }\n    }, _callee);\n  }));\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}());\ninput.addEventListener('input', function (event) {\n  var value = event.target.value.replace(/\\D/g, '');\n  value = value.replace(/(\\d{3})(\\d{3})(\\d{3})(\\d{3})/, '$1-$2-$3-$4');\n  value = value.substring(0, MAXIMO_CARACTERES_INPUT);\n  event.target.value = value;\n});\n\n//# sourceURL=webpack://desafiomemberclub/./src/modules/form.js?");

/***/ }),

/***/ "./src/modules/page-load.js":
/*!**********************************!*\
  !*** ./src/modules/page-load.js ***!
  \**********************************/
/***/ (() => {

eval("var suggestion = document.querySelector('.suggestion');\nvar input = document.querySelector('.input');\nsuggestion.querySelectorAll('button').forEach(function (button) {\n  button.addEventListener('click', function (event) {\n    input.value = event.target.textContent;\n  });\n});\n\n//# sourceURL=webpack://desafiomemberclub/./src/modules/page-load.js?");

/***/ }),

/***/ "./src/modules/sections/client.js":
/*!****************************************!*\
  !*** ./src/modules/sections/client.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mountClientDetails: () => (/* binding */ mountClientDetails)\n/* harmony export */ });\nvar profile = document.querySelector('.profile');\nfunction mountClientDetails(_ref) {\n  var name = _ref.name,\n    clientSince = _ref.clientSince,\n    userImageURL = _ref.image;\n  // limpar conteudo antes de inserir novo html\n  profile.innerHTML = '';\n\n  /**\r\n   * Conteúdo da imagem\r\n   * <div class=\"image\">\r\n   *   <img src=\"\" alt=\"Imagem de Perfil\">\r\n   * </div>\r\n   */\n  var image = document.createElement('div');\n  image.classList.add('image');\n  var img = document.createElement('img');\n  img.src = userImageURL;\n  image.append(img);\n\n  /**\r\n   * Estrutura de detalhes do cliente\r\n   * <div class=\"flex flex-column\">\r\n   *   <h2 class=\"title-sm text-base-gray-600\">Usuário</h2>\r\n   *   <p class=\"text-xs text-base-gray-500\">Cliente desde 18/09/2023</p>\r\n   * </div>\r\n   */\n  var details = document.createElement('div');\n  details.classList.add('flex');\n  details.classList.add('flex-column');\n  var title = document.createElement('h2');\n  title.classList.add('title-sm');\n  title.classList.add('text-base-gray-600');\n  title.textContent = name;\n  var paragraph = document.createElement('p');\n  paragraph.classList.add('text-xs');\n  paragraph.classList.add('text-base-gray-500');\n  paragraph.textContent = \"Cliente desde \".concat(clientSince);\n  details.append(title, paragraph);\n  profile.append(image, details);\n}\n\n//# sourceURL=webpack://desafiomemberclub/./src/modules/sections/client.js?");

/***/ }),

/***/ "./src/modules/sections/fidelity.js":
/*!******************************************!*\
  !*** ./src/modules/sections/fidelity.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mountFidelityPoints: () => (/* binding */ mountFidelityPoints)\n/* harmony export */ });\nvar fidelity = document.querySelector('.fidelity');\nfunction mountFidelityPoints(_ref) {\n  var id = _ref.id,\n    cutsNeeded = _ref.cutsNeeded,\n    totalCuts = _ref.totalCuts;\n  fidelity.querySelector('.tag').innerHTML = '';\n  fidelity.querySelector('.tag').textContent = \"ID: \".concat(id);\n  var boxList = fidelity.querySelector('div:last-child');\n  boxList.innerHTML = '';\n  for (var index = 0; index < cutsNeeded; index++) {\n    var grayBox = document.createElement('div');\n    grayBox.classList.add('gray-box');\n    if (cutsNeeded - 1 === index && cutsNeeded > totalCuts) {\n      var img = document.createElement('img');\n      img.src = './src/assets/GrayGift.svg';\n      img.alt = 'Ícone de presente cinza, parecendo desabilitado';\n      grayBox.append(img);\n    }\n    boxList.append(grayBox);\n  }\n  for (var _index = 0; _index < totalCuts; _index++) {\n    var iconeVerificado = document.createElement('img');\n    iconeVerificado.src = './src/assets/PinCheck.png';\n    iconeVerificado.alt = 'Ícone de verificado verde com sombra';\n    if (_index === cutsNeeded - 1 && cutsNeeded >= totalCuts) {\n      iconeVerificado.classList.add('achievement');\n    }\n    fidelity.querySelector(\".gray-box:nth-child(\".concat(_index + 1, \")\")).appendChild(iconeVerificado);\n  }\n}\n\n//# sourceURL=webpack://desafiomemberclub/./src/modules/sections/fidelity.js?");

/***/ }),

/***/ "./src/modules/sections/history.js":
/*!*****************************************!*\
  !*** ./src/modules/sections/history.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mountHistoryLog: () => (/* binding */ mountHistoryLog)\n/* harmony export */ });\nvar history = document.querySelector('.history');\nfunction mountHistoryLog(_ref) {\n  var appointmentHistory = _ref.appointmentHistory;\n  history.querySelector('span').textContent = '';\n  var quantidadeCortes = appointmentHistory.length;\n  history.querySelector('span').textContent = \"\".concat(quantidadeCortes, \" cortes\");\n  history.querySelector('ul').innerHTML = '';\n  for (var index = 0; index < quantidadeCortes; index++) {\n    var _appointmentHistory$i = appointmentHistory[index],\n      date = _appointmentHistory$i.date,\n      time = _appointmentHistory$i.time;\n    var li = document.createElement('li');\n    li.classList.add('flex');\n    li.classList.add('items-center');\n    li.classList.add('space-between');\n    var div = document.createElement('div');\n    var p = document.createElement('p');\n    p.classList.add('subtitle-sm');\n    p.classList.add('text-base-gray-600');\n    p.textContent = date;\n    var small = document.createElement('small');\n    small.classList.add('text-xs');\n    small.classList.add('text-base-gray-500');\n    small.textContent = time;\n\n    /**\r\n     * <div>\r\n     *   <p class=\"subtitle-sm text-base-gray-600\">29/04/2024</p>\r\n     *   <small class=\"text-xs text-base-gray-500\">18:30</small>\r\n     * </div>\r\n     */\n    div.append(p, small);\n    var verified = document.createElement('div');\n    verified.classList.add('verified');\n    var img = document.createElement('img');\n    img.src = './src/assets/Verificado.svg';\n    img.alt = 'Ícone de verificado';\n\n    /**\r\n     * <div class=\"verified\">\r\n     *   <img \r\n     *     src=\"./src/assets/Verificado.svg\" \r\n     *     alt=\"Ícone de verificado\"\r\n     *   />\r\n     * </div>\r\n     */\n    verified.append(img);\n    li.append(div, verified);\n    history.querySelector('ul').append(li);\n  }\n}\n\n//# sourceURL=webpack://desafiomemberclub/./src/modules/sections/history.js?");

/***/ }),

/***/ "./src/modules/sections/progress.js":
/*!******************************************!*\
  !*** ./src/modules/sections/progress.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mountMilestone: () => (/* binding */ mountMilestone)\n/* harmony export */ });\nvar milestone = document.querySelector('.milestone');\nfunction mountMilestone(_ref) {\n  var totalCuts = _ref.totalCuts,\n    cutsNeeded = _ref.cutsNeeded,\n    cutsRemaining = _ref.cutsRemaining;\n  milestone.querySelector('h3').innerHTML = '';\n  milestone.querySelector('.progress-text').innerHTML = '';\n  milestone.querySelector('h3').textContent = cutsRemaining;\n  var percentage = totalCuts / cutsNeeded * 100;\n  milestone.querySelector('.progress').style.setProperty('--dynamic-width', \"\".concat(percentage, \"%\"));\n  milestone.querySelector('.progress-text').textContent = \"\".concat(totalCuts, \" de \").concat(cutsNeeded);\n}\n\n//# sourceURL=webpack://desafiomemberclub/./src/modules/sections/progress.js?");

/***/ }),

/***/ "./src/services/api-config.js":
/*!************************************!*\
  !*** ./src/services/api-config.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   apiConfig: () => (/* binding */ apiConfig)\n/* harmony export */ });\nvar apiConfig = {\n  baseURL: \"development\" === 'http://localhost:3000'\n};\n\n//# sourceURL=webpack://desafiomemberclub/./src/services/api-config.js?");

/***/ }),

/***/ "./src/services/client-details.js":
/*!****************************************!*\
  !*** ./src/services/client-details.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getClientDetails: () => (/* binding */ getClientDetails)\n/* harmony export */ });\n/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-config */ \"./src/services/api-config.js\");\nfunction _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = \"function\" == typeof Symbol ? Symbol : {}, n = r.iterator || \"@@iterator\", o = r.toStringTag || \"@@toStringTag\"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, \"_invoke\", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError(\"Generator is already running\"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = \"next\"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError(\"iterator result is not an object\"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i[\"return\"]) && t.call(i), c < 2 && (u = TypeError(\"The iterator does not provide a '\" + o + \"' method\"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, \"GeneratorFunction\")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, \"constructor\", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = \"GeneratorFunction\", _regeneratorDefine2(GeneratorFunctionPrototype, o, \"GeneratorFunction\"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, \"Generator\"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, \"toString\", function () { return \"[object Generator]\"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }\nfunction _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, \"\", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o(\"next\", 0), o(\"throw\", 1), o(\"return\", 2)); }, _regeneratorDefine2(e, r, n, t); }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\n\nvar MENSAGEM_CLIENTE_NAO_ENCONTRADO = 'Cliente não foi encontrado, tente outro ID!';\nfunction getClientDetails(_x) {\n  return _getClientDetails.apply(this, arguments);\n}\nfunction _getClientDetails() {\n  _getClientDetails = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref) {\n    var id, url, response, data, _t;\n    return _regenerator().w(function (_context) {\n      while (1) switch (_context.p = _context.n) {\n        case 0:\n          id = _ref.id;\n          if (id) {\n            _context.n = 1;\n            break;\n          }\n          throw new Error('ID is required');\n        case 1:\n          _context.p = 1;\n          url = \"\".concat(_api_config__WEBPACK_IMPORTED_MODULE_0__.apiConfig.baseURL, \"/clients/\").concat(id);\n          _context.n = 2;\n          return fetch(url);\n        case 2:\n          response = _context.v;\n          _context.n = 3;\n          return response.json();\n        case 3:\n          data = _context.v;\n          if (data.id) {\n            _context.n = 4;\n            break;\n          }\n          throw new Error(MENSAGEM_CLIENTE_NAO_ENCONTRADO);\n        case 4:\n          alert('Cliente encontrado!');\n          return _context.a(2, data);\n        case 5:\n          _context.p = 5;\n          _t = _context.v;\n          console.log(_t);\n          alert(MENSAGEM_CLIENTE_NAO_ENCONTRADO);\n          throw new Error(MENSAGEM_CLIENTE_NAO_ENCONTRADO);\n        case 6:\n          return _context.a(2);\n      }\n    }, _callee, null, [[1, 5]]);\n  }));\n  return _getClientDetails.apply(this, arguments);\n}\n\n//# sourceURL=webpack://desafiomemberclub/./src/services/client-details.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n    /* Color styles */\r\n    --main---pink: rgba(214, 88, 179, 1);\r\n    --main---green: rgba(69, 180, 66, 1);\r\n    --main---green-0\\\\.12-opacity: rgba(69, 180, 66, .12);\r\n    --base---white: rgba(255, 255, 255, 1);\r\n    --base---gray-100: rgba(244, 241, 242, 1);\r\n    --base---gray-200: rgba(233, 231, 233, 1);\r\n    --base---gray-300: rgba(223, 220, 223, 1);\r\n    --base---gray-400: rgba(206, 202, 205, 1);\r\n    --base---gray-500: rgba(117, 108, 113, 1);\r\n    --base---gray-600: rgba(74, 68, 72, 1);\r\n    --base---gray-700: rgba(51, 43, 49, 1);\r\n    --linear-gradient: linear-gradient(90deg, #2DAA6E 0%, #2DAAAA 33%, #856CCF 67%, #D658B3 100%);\r\n\r\n    /* sizes / spacing */\r\n    --spacing---xs: 0.25rem;\r\n    --spacing---sm: 0.5rem;\r\n    --spacing---md: 1rem;\r\n    --radius--lg: 1rem;\r\n    --radius--md: 0.75rem;\r\n    --radius--sm: 0.5rem;\r\n\r\n    /* Text-size styles */\r\n    --font-family: 'Oxygen', sans-serif;\r\n\r\n    /* base size: body---text--md (16px) */\r\n    --heading---title--md: 1.5rem;\r\n    --heading---title--sm: 1.125rem;\r\n    --heading---subtitle--md: 0.875rem;\r\n    --heading---subtitle--sm: 0.75rem;\r\n    --body---text--md: 1rem;\r\n    --body---text--sm: 0.875rem;\r\n    --body---text--xs: 0.75rem;\r\n    --font-bold: 700;\r\n    --font-regular: 400;\r\n\r\n    --title-md: var(--font-bold) var(--heading---title--md)/140% var(--font-family);\r\n    --title-sm: var(--font-bold) var(--heading---title--sm)/140% var(--font-family);\r\n    --subtitle-md: var(--font-bold) var(--heading---subtitle--md)/140% var(--font-family);\r\n    --subtitle-sm: var(--font-bold) var(--heading---subtitle--sm)/140% var(--font-family);\r\n    --text-md: var(--font-regular) var(--body---text--md)/140% var(--font-family);\r\n    --text-sm: var(--font-regular) var(--body---text--sm)/140% var(--font-family);\r\n    --text-xs: var(--font-regular) var(--body---text--xs)/140% var(--font-family);\r\n}\r\n\r\nbody {\r\n    background: var(--base---gray-200);\r\n    font: var(--text-md);\r\n    padding-bottom: 2rem;\r\n}\r\n\r\n.container {\r\n    max-width: 936px;\r\n    padding-inline: 0.75rem;\r\n    margin-inline: auto;\r\n}\r\n\r\n.flex {\r\n    display: flex;\r\n}\r\n\r\n.flex-column {\r\n    flex-direction: column;\r\n}\r\n\r\n.flex-wrap {\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.space-between {\r\n    justify-content: space-between;\r\n}\r\n\r\n.items-start {\r\n    align-items: flex-start;\r\n}\r\n\r\n.items-center {\r\n    align-items: center;\r\n}\r\n\r\n.items-baseline {\r\n    align-items: baseline;\r\n}\r\n\r\n.flex-1 {\r\n    flex: 1;\r\n}\r\n\r\n.gap-1 {\r\n    gap: 1rem;\r\n}\r\n\r\n.gap-1\\\\.5 {\r\n    gap: 1.5rem;\r\n}\r\n\r\n.gap-2 {\r\n    gap: 2rem;\r\n}\r\n\r\n.gap-0\\\\.75 {\r\n    gap: 0.75rem;\r\n}\r\n\r\n.gap-0\\\\.5 {\r\n    gap: 0.5rem;\r\n}\r\n\r\n.gap-0\\\\.25 {\r\n    gap: 0.25rem;\r\n}\r\n\r\n\r\n.text-main-pink {\r\n    color: var(--main---pink);\r\n}\r\n\r\n.text-main-green {\r\n    color: var(--main---green);\r\n}\r\n\r\n.text-base-white {\r\n    color: var(--base---white);\r\n}\r\n\r\n.text-base-gray-100 {\r\n    color: var(--base---gray-100);\r\n}\r\n\r\n.text-base-gray-200 {\r\n    color: var(--base---gray-200);\r\n}\r\n\r\n.text-base-gray-300 {\r\n    color: var(--base---gray-300);\r\n}\r\n\r\n.text-base-gray-400 {\r\n    color: var(--base---gray-400);\r\n}\r\n\r\n.text-base-gray-500 {\r\n    color: var(--base---gray-500);\r\n}\r\n\r\n.text-base-gray-600 {\r\n    color: var(--base---gray-600);\r\n}\r\n\r\n.text-base-gray-700 {\r\n    color: var(--base---gray-700);\r\n}\r\n\r\n\r\n\r\nheader {\r\n    & img {\r\n        display: block;\r\n        margin-inline: auto;\r\n        width: 116px;\r\n        margin-top: 4rem;\r\n    }\r\n}\r\n\r\n.title-md {\r\n    font: var(--title-md);\r\n}\r\n\r\n.title-sm {\r\n    font: var(--title-sm);\r\n}\r\n\r\n.subtitle-md {\r\n    font: var(--subtitle-md);\r\n    text-transform: uppercase;\r\n}\r\n\r\n.subtitle-sm {\r\n    font: var(--subtitle-sm);\r\n    text-transform: uppercase;\r\n}\r\n\r\n.text-md {\r\n    font: var(--text-md);\r\n}\r\n\r\n.text-sm {\r\n    font: var(--text-sm);\r\n}\r\n\r\n.text-xs {\r\n    font: var(--text-xs);\r\n}\r\n\r\n.text-nowrap {\r\n    white-space: nowrap;\r\n}\r\n\r\n.form {\r\n    position: relative;\r\n    max-width: 400px;\r\n    width: 100%;\r\n    margin-inline: auto;\r\n    margin-top: 2rem;\r\n    margin-bottom: 4rem;\r\n\r\n    @media (max-width: 768px) {\r\n        margin-bottom: 2rem;\r\n    }\r\n\r\n    & > button {\r\n        position: absolute;\r\n        z-index: 2;\r\n        top: var(--spacing---sm);\r\n        right: var(--spacing---sm);\r\n        height: 40px;\r\n        width: 40px;\r\n        border-radius: var(--radius--sm);\r\n        border: none;\r\n        background: var(--base---gray-700);\r\n        cursor: pointer;\r\n\r\n        &:disabled {\r\n            opacity: .6;\r\n            cursor: not-allowed;\r\n        }\r\n\r\n        &:hover:not(:disabled) {\r\n            background: var(--base---gray-600);\r\n        }\r\n    }\r\n}\r\n\r\n.input {\r\n    position: relative;\r\n    z-index: 1;\r\n    --submit-button-width: 40px;\r\n    width: 100%;\r\n    padding-left: var(--spacing---md);\r\n    padding-right: calc(var(--submit-button-width) + var(--spacing---md));\r\n    height: 56px;\r\n    border-radius: var(--radius--md);\r\n    border: 1px solid var(--base---gray-400);\r\n    background-color: var(--base---gray-300);\r\n\r\n    &:focus,\r\n    &:active {\r\n        outline: none;\r\n        border-width: 1.5px;\r\n        border-color: var(--main---pink);\r\n    }\r\n}\r\n\r\n.suggestion {\r\n    margin-top: .25rem;\r\n    display: inline-block;\r\n\r\n    button {\r\n        text-decoration: underline;\r\n        color: var(--main---pink);\r\n        border: none;\r\n        cursor: pointer;\r\n        background: transparent;\r\n    }\r\n}\r\n\r\n.grid {\r\n    display: grid;\r\n    grid-template-areas: \r\n        'profile fidelity'\r\n        'history fidelity'\r\n        'history milestone';\r\n    grid-template-columns: 320px 2fr;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .grid {\r\n        grid-template-areas: \r\n            'profile'\r\n            'fidelity'\r\n            'milestone'\r\n            'history';\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: auto;\r\n        gap: .5rem;\r\n    }\r\n}\r\n\r\n.profile {\r\n    grid-area: profile;\r\n}\r\n\r\n.history {\r\n    grid-area: history;\r\n}\r\n\r\n.fidelity {\r\n    grid-area: fidelity;\r\n}\r\n\r\n.milestone {\r\n    grid-area: milestone;\r\n}\r\n\r\n.fidelity {\r\n    height: 100%;\r\n}\r\n\r\n/* Perfil */\r\n.profile .image {\r\n    position: relative;\r\n    display: grid;\r\n    place-items: center;\r\n    width: 56px;\r\n    height: 56px;\r\n\r\n    &:before {\r\n        content: '';\r\n        position: absolute;\r\n        z-index: 1;\r\n        inset: 0;\r\n        border-radius: 10px;\r\n        background: conic-gradient(\r\n            #D658B3 0%,\r\n            #AF74DE 13%, \r\n            #6B84DE 25%, \r\n            #5DCAB7 38%, \r\n            #45B442 50%, \r\n            #5EC6B9 62%,\r\n            #698DD9 73%,\r\n            #B173DC 87%,\r\n            #D658B3 100%\r\n        );\r\n        width: 100%;\r\n        height: 100%;\r\n        display: block;\r\n    }\r\n\r\n    & img {\r\n        position: relative;\r\n        z-index: 2;\r\n        width: 52px;\r\n        height: 52px;\r\n        border-radius: var(--radius--sm);\r\n        border: 1.5px solid var(--base---gray-100);\r\n    }\r\n}\r\n\r\n/* Histórico */\r\n.history header {\r\n    padding-bottom: var(--spacing---md);\r\n    border-bottom: 1px solid var(--base---gray-200);\r\n    margin-bottom: var(--spacing---md);\r\n}\r\n\r\n.history {\r\n    height: 360px;\r\n    overflow: auto;\r\n\r\n    & .verified {\r\n        height: 32px;\r\n        width: 32px;\r\n        display: grid;\r\n        place-items: center;\r\n        border-radius: 50%;\r\n        background: var(--main---green-0\\\\.12-opacity);\r\n    }\r\n}\r\n\r\n/* Fidelidade */\r\n.fidelity {\r\n    padding: 2rem;\r\n\r\n    @media (max-width: 768px) {\r\n        padding: 1rem;\r\n    }\r\n\r\n    & .tag {\r\n        display: flex;\r\n        align-items: center;\r\n        background: var(--base---gray-300);\r\n        color: var(--base---gray-500);\r\n        border-radius: 100px;\r\n        padding-inline: 0.75rem;\r\n        padding-block: 0.375rem;\r\n    }\r\n\r\n    @media (max-width: 768px) {\r\n        & .tag {\r\n            font-size: var(--body---text--xs);\r\n            text-wrap: nowrap;\r\n            margin-left: 1rem;\r\n        }\r\n\r\n        & > div:last-child {\r\n            gap: .5rem;\r\n        }\r\n    }\r\n\r\n    & .gray-box {\r\n        display: grid;\r\n        place-items: center;\r\n        height: 87px;\r\n        width: 87px;\r\n        border-radius: 20px;\r\n        background: var(--base---gray-200);\r\n\r\n        img {\r\n            width: 64px;\r\n        }\r\n\r\n        &:last-child img:not(.achievement) {\r\n            width: 40px;\r\n        }\r\n    }\r\n\r\n    @media (max-width: 768px) {\r\n        & .gray-box {\r\n            height: 64px;\r\n            width: 64px;\r\n\r\n            img {\r\n                width: 46px;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n/* Cortes Restantes */\r\n.milestone {\r\n    padding-inline: 2rem;\r\n\r\n    & .image {\r\n        display: grid;\r\n        place-items: center;\r\n        border-radius: 50%;\r\n        background: var(--base---gray-200);\r\n        width: 72px;\r\n        height: 72px;\r\n        overflow: hidden;\r\n    }\r\n\r\n    & img {\r\n        width: 64px;\r\n    }\r\n\r\n    .progress-container {\r\n        --bar-height: 8px;\r\n        position: relative;\r\n        display: flex;\r\n        align-items: center;\r\n\r\n        & .progress-bar {\r\n            position: relative;\r\n            height: var(--bar-height);\r\n            background: var(--base---gray-300);\r\n            border-radius: 100px;\r\n            width: 100%;\r\n            margin-right: 1rem;\r\n        }\r\n\r\n        & .progress {\r\n            position: absolute;\r\n            top: 50%;\r\n            transform: translateY(-50%);\r\n            left: 0;\r\n            height: var(--bar-height);\r\n            /* --dynamic-width: variável muda de valor por Javascript */\r\n            width: var(--dynamic-width, 0%);\r\n            background: var(--linear-gradient);\r\n            border-radius: 100px;\r\n        }\r\n    }\r\n}\r\n\r\n\r\n.card {\r\n    background: var(--base---gray-100);\r\n    border-radius: var(--radius--lg);\r\n    border: 1px solid var(--base---gray-300);\r\n    padding: var(--spacing---md);\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://desafiomemberclub/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://desafiomemberclub/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://desafiomemberclub/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://desafiomemberclub/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://desafiomemberclub/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://desafiomemberclub/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://desafiomemberclub/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://desafiomemberclub/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://desafiomemberclub/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://desafiomemberclub/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;