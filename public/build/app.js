(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./administratorDashboard.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/administratorDashboard.js",
	"./animalHandler.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/animalHandler.js",
	"./avisFormValidator.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/avisFormValidator.js",
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js",
	"./loginformValidator.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/loginformValidator.js",
	"./repportLogs.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/repportLogs.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_turbo_dist_turbo_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-turbo/dist/turbo_controller.js */ "./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-turbo--turbo-core': _symfony_ux_turbo_dist_turbo_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"],
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/administratorDashboard.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/administratorDashboard.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav-admin').forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        var targetUrl = this.getAttribute('href');
        fetch(targetUrl).then(function (response) {
          return response.text();
        }).then(function (html) {
          document.querySelector('#content-area').innerHTML = html;
        })["catch"](function (error) {
          return console.warn('Something went wrong.', error);
        });
      });
    });
  });
}

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/animalHandler.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/animalHandler.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  $(document).ready(function () {
    $('.card-animal-container').hide(); // Masquer toutes les divs au chargement de la page

    $('.habitat-button').on('click', function (event) {
      event.preventDefault();
      var habitatId = $(this).attr('id').split('-')[1];
      $('.card-animal-container').hide(); // Masquer toutes les divs
      $('#displHabitat-' + habitatId).show(); // Afficher la div correspondante
      console.log($(this).attr('id'));
      var formData = $(this).val();
      console.log(formData);
    });
  });
}
;

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/avisFormValidator.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/avisFormValidator.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  $('#toggleRange1').on('click', function () {
    alert('clicked');
    this.classList.toggle('bi-star-fill');
  });
  $('#btnSubmitLoginform').on('click', function () {
    $.ajax({
      url: '/login',
      method: 'GET'
    });
  });
}
;

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * homeControllerScript.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/homeControllerScript.js';
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/loginformValidator.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/loginformValidator.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  $('#togglePassword').on('click', function () {
    var type = $('#inputLoginPass').attr('type') === 'password' ? 'text' : 'password';
    $('#inputLoginPass').attr('type', type);
    this.classList.toggle('bi-eye');
  });
  $('#btnSubmitLoginform').on('click', function () {
    $.ajax({
      url: '/login',
      method: 'GET'
    });
  });
}
;

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/repportLogs.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/repportLogs.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  console.log('Script loaded'); // Debugging statement

  $(document).ready(function () {
    console.log('Script loaded2'); // Debugging statement
    var datas = [];
    function fetchAnimalData(route, habitatId) {
      fetch(route + habitatId).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log('Fetched data:', data); // Debugging statement
        var animalSelect = $('#repport_logs_modifiedAnimal');
        animalSelect.empty(); // Clear existing options
        animalSelect.append('<option value="">Sélectionnez un animal</option>');
        data.animals.forEach(function (animal) {
          var option = $('<option></option>').attr('value', animal.id).text(animal.name);
          console.log('Appending option:', option); // Debugging statement
          animalSelect.append(option);
          datas.push(animal); // Add animal to the array
          console.log(data);
        });
      })["catch"](function (error) {
        console.error('Error fetching data:', error); // Debugging statement
      });
    }
    $('#habitat-select').on('change', function (event) {
      var habitatId = event.target.value;
      console.log('Selected habitat:', habitatId);
      fetchAnimalData('/employee/health/', habitatId);
      fetchAnimalData('/veterinarian/health/', habitatId);
    });
    $('#add_repport_log').on('click', function (e) {
      e.preventDefault();
      console.log('Add report log button clicked'); // Debugging statement
      console.log(_typeof($('#repport_logs_date').val()));
      var postData = {
        modifiedAnimal: $('#repport_logs_modifiedAnimal').val(),
        modifiedHabitat: $('#repport_logs_modifiedHabitat').val(),
        date: $('#repport_logs_date').val(),
        modifiedField: $('#repport_logs_modified_field').val(),
        newValue: $('#repport_logs_new_value').val()
      };
      console.log('Post data:', postData); // Debugging statement
      function fetchData() {
        return _fetchData.apply(this, arguments);
      }
      function _fetchData() {
        _fetchData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var divAjaxGet, response, data;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                divAjaxGet = document.querySelector("#test-get");
                _context.prev = 1;
                _context.next = 4;
                return fetch('/repportlogs/new', {
                  dataType: 'json',
                  data: {
                    data: postData
                  },
                  method: 'POST',
                  headers: {
                    "X-Requested-with": "XMLHttpRequest",
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    data: postData
                  })
                });
              case 4:
                response = _context.sent;
                _context.next = 7;
                return response.json();
              case 7:
                data = _context.sent;
                console.log('Posted data:', data); // Debugging statement
                divAjaxGet.innerHTML = JSON.stringify(data);

                //         })
                _context.next = 15;
                break;
              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);
                console.error("Erreur lors de la récupération des données:", _context.t0);
              case 15:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[1, 12]]);
        }));
        return _fetchData.apply(this, arguments);
      }
      fetchData();
    });
  });
}

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_Rating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Rating */ "./assets/components/Rating.js");
/* harmony import */ var _controllers_loginformValidator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controllers/loginformValidator.js */ "./assets/controllers/loginformValidator.js");
/* harmony import */ var _controllers_administratorDashboard_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controllers/administratorDashboard.js */ "./assets/controllers/administratorDashboard.js");
/* harmony import */ var _controllers_animalHandler_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controllers/animalHandler.js */ "./assets/controllers/animalHandler.js");
/* harmony import */ var _controllers_repportLogs_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controllers/repportLogs.js */ "./assets/controllers/repportLogs.js");



/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */

// loads the jquery package from node_modules





_hotwired_turbo__WEBPACK_IMPORTED_MODULE_3__.start();

// import the function from greet.js (the .js extension is optional)
// ./ (or ../) means to look for a local file




jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).ready(function () {
  (0,_controllers_loginformValidator_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_controllers_administratorDashboard_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_controllers_animalHandler_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_controllers_repportLogs_js__WEBPACK_IMPORTED_MODULE_10__["default"])();
  // $('body').prepend('<h1>' +  + '</h1>');
});
react_dom__WEBPACK_IMPORTED_MODULE_5__.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_Rating__WEBPACK_IMPORTED_MODULE_6__["default"], null), document.getElementById('rating-value'));

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/components/Rating.js":
/*!*************************************!*\
  !*** ./assets/components/Rating.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BasicRating)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_Rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Rating */ "./node_modules/@mui/material/Rating/Rating.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




function BasicRating() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(2),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    value = _React$useState2[0],
    setValue = _React$useState2[1];
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    document.getElementById('opinion_rating').value = value;
  }, [value]);
  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
    document.getElementById('opinion_rating').value = newValue;
  };
  console.log(value);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Rating__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "simple-controlled",
    value: value,
    onChange: handleChange
  });
}

/***/ }),

/***/ "./assets/controllers/administratorDashboard.js":
/*!******************************************************!*\
  !*** ./assets/controllers/administratorDashboard.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav-admin').forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        var targetUrl = this.getAttribute('href');
        fetch(targetUrl).then(function (response) {
          return response.text();
        }).then(function (html) {
          document.querySelector('#content-area').innerHTML = html;
        })["catch"](function (error) {
          return console.warn('Something went wrong.', error);
        });
      });
    });
  });
}

/***/ }),

/***/ "./assets/controllers/animalHandler.js":
/*!*********************************************!*\
  !*** ./assets/controllers/animalHandler.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  $(document).ready(function () {
    $('.card-animal-container').hide(); // Masquer toutes les divs au chargement de la page

    $('.habitat-button').on('click', function (event) {
      event.preventDefault();
      var habitatId = $(this).attr('id').split('-')[1];
      $('.card-animal-container').hide(); // Masquer toutes les divs
      $('#displHabitat-' + habitatId).show(); // Afficher la div correspondante
      console.log($(this).attr('id'));
      var formData = $(this).val();
      console.log(formData);
    });
  });
}
;

/***/ }),

/***/ "./assets/controllers/loginformValidator.js":
/*!**************************************************!*\
  !*** ./assets/controllers/loginformValidator.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  $('#togglePassword').on('click', function () {
    var type = $('#inputLoginPass').attr('type') === 'password' ? 'text' : 'password';
    $('#inputLoginPass').attr('type', type);
    this.classList.toggle('bi-eye');
  });
  $('#btnSubmitLoginform').on('click', function () {
    $.ajax({
      url: '/login',
      method: 'GET'
    });
  });
}
;

/***/ }),

/***/ "./assets/controllers/repportLogs.js":
/*!*******************************************!*\
  !*** ./assets/controllers/repportLogs.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  console.log('Script loaded'); // Debugging statement

  $(document).ready(function () {
    console.log('Script loaded2'); // Debugging statement
    var datas = [];
    function fetchAnimalData(route, habitatId) {
      fetch(route + habitatId).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log('Fetched data:', data); // Debugging statement
        var animalSelect = $('#repport_logs_modifiedAnimal');
        animalSelect.empty(); // Clear existing options
        animalSelect.append('<option value="">Sélectionnez un animal</option>');
        data.animals.forEach(function (animal) {
          var option = $('<option></option>').attr('value', animal.id).text(animal.name);
          console.log('Appending option:', option); // Debugging statement
          animalSelect.append(option);
          datas.push(animal); // Add animal to the array
          console.log(data);
        });
      })["catch"](function (error) {
        console.error('Error fetching data:', error); // Debugging statement
      });
    }
    $('#habitat-select').on('change', function (event) {
      var habitatId = event.target.value;
      console.log('Selected habitat:', habitatId);
      fetchAnimalData('/employee/health/', habitatId);
      fetchAnimalData('/veterinarian/health/', habitatId);
    });
    $('#add_repport_log').on('click', function (e) {
      e.preventDefault();
      console.log('Add report log button clicked'); // Debugging statement
      console.log(_typeof($('#repport_logs_date').val()));
      var postData = {
        modifiedAnimal: $('#repport_logs_modifiedAnimal').val(),
        modifiedHabitat: $('#repport_logs_modifiedHabitat').val(),
        date: $('#repport_logs_date').val(),
        modifiedField: $('#repport_logs_modified_field').val(),
        newValue: $('#repport_logs_new_value').val()
      };
      console.log('Post data:', postData); // Debugging statement
      function fetchData() {
        return _fetchData.apply(this, arguments);
      }
      function _fetchData() {
        _fetchData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var divAjaxGet, response, data;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                divAjaxGet = document.querySelector("#test-get");
                _context.prev = 1;
                _context.next = 4;
                return fetch('/repportlogs/new', {
                  dataType: 'json',
                  data: {
                    data: postData
                  },
                  method: 'POST',
                  headers: {
                    "X-Requested-with": "XMLHttpRequest",
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    data: postData
                  })
                });
              case 4:
                response = _context.sent;
                _context.next = 7;
                return response.json();
              case 7:
                data = _context.sent;
                console.log('Posted data:', data); // Debugging statement
                divAjaxGet.innerHTML = JSON.stringify(data);

                //         })
                _context.next = 15;
                break;
              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);
                console.error("Erreur lors de la récupération des données:", _context.t0);
              case 15:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[1, 12]]);
        }));
        return _fetchData.apply(this, arguments);
      }
      fetchData();
    });
  });
}

/***/ }),

/***/ "./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js":
/*!*****************************************************************!*\
  !*** ./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ turbo_controller)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var turbo_controller = /*#__PURE__*/function (_Controller) {
  function turbo_controller() {
    _classCallCheck(this, turbo_controller);
    return _callSuper(this, turbo_controller, arguments);
  }
  _inherits(turbo_controller, _Controller);
  return _createClass(turbo_controller);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller);


/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js-node_modules_mui_material_Rating-5873f5"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0JzRTtBQUN0RSxpRUFBZTtBQUNmLG1DQUFtQyxrRkFBWTtBQUMvQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNERCw2QkFBZSxzQ0FBWTtFQUN6QkEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO0lBQ3hERCxRQUFRLENBQUNFLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBVUMsSUFBSSxFQUFFO01BQzlEQSxJQUFJLENBQUNILGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVSSxLQUFLLEVBQUU7UUFDOUNBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7UUFDdEIsSUFBSUMsU0FBUyxHQUFHLElBQUksQ0FBQ0MsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUN6Q0MsS0FBSyxDQUFDRixTQUFTLENBQUMsQ0FDYkcsSUFBSSxDQUFDLFVBQUFDLFFBQVE7VUFBQSxPQUFJQSxRQUFRLENBQUNDLElBQUksQ0FBQyxDQUFDO1FBQUEsRUFBQyxDQUNqQ0YsSUFBSSxDQUFDLFVBQUFHLElBQUksRUFBSTtVQUNaYixRQUFRLENBQUNjLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQ0MsU0FBUyxHQUFHRixJQUFJO1FBQzFELENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQUcsS0FBSztVQUFBLE9BQUlDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLHVCQUF1QixFQUFFRixLQUFLLENBQUM7UUFBQSxFQUFDO01BQ2pFLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztBQUVKOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBLDZCQUFlLHNDQUFZO0VBQ3ZCRyxDQUFDLENBQUNuQixRQUFRLENBQUMsQ0FBQ29CLEtBQUssQ0FBQyxZQUFZO0lBQzFCRCxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUVwQ0YsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVWpCLEtBQUssRUFBRTtNQUM5Q0EsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztNQUN0QixJQUFJaUIsU0FBUyxHQUFHSixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNoRE4sQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUNFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNwQ0YsQ0FBQyxDQUFDLGdCQUFnQixHQUFHSSxTQUFTLENBQUMsQ0FBQ0csSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ3hDVCxPQUFPLENBQUNVLEdBQUcsQ0FBQ1IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDL0IsSUFBSUksUUFBUSxHQUFHVCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNVLEdBQUcsQ0FBQyxDQUFDO01BQzVCWixPQUFPLENBQUNVLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDO0lBQ3pCLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUNOO0FBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRCw2QkFBZSxvQ0FBVUUsSUFBSSxFQUFFO0VBQzNCWCxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWTtJQUN2Q1MsS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUNsQixJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLGNBQWMsQ0FBQztFQUN2QyxDQUFDLENBQUM7RUFDRmQsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUNHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBVztJQUM5Q0gsQ0FBQyxDQUFDZSxJQUFJLENBQUM7TUFDTEMsR0FBRyxFQUFFLFFBQVE7TUFDYkMsTUFBTSxFQUFFO0lBQ1YsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0FBQ0o7QUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYMkM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBLElBQUFFLFFBQUEsMEJBQUFDLFdBQUE7RUFBQSxTQUFBRCxTQUFBO0lBQUFFLGVBQUEsT0FBQUYsUUFBQTtJQUFBLE9BQUFHLFVBQUEsT0FBQUgsUUFBQSxFQUFBSSxTQUFBO0VBQUE7RUFBQUMsU0FBQSxDQUFBTCxRQUFBLEVBQUFDLFdBQUE7RUFBQSxPQUFBSyxZQUFBLENBQUFOLFFBQUE7SUFBQU8sR0FBQTtJQUFBQyxLQUFBLEVBVUksU0FBQUMsT0FBT0EsQ0FBQSxFQUFHO01BQ04sSUFBSSxDQUFDQyxPQUFPLENBQUNDLFdBQVcsR0FBRyx1RUFBdUU7SUFDdEc7RUFBQztBQUFBLEVBSHdCWiwwREFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYdkMsNkJBQWUsb0NBQVVQLElBQUksRUFBRTtFQUM3QlgsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWTtJQUMzQyxJQUFNNkIsSUFBSSxHQUFHaEMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNLLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxVQUFVLEdBQUcsTUFBTSxHQUFHLFVBQVU7SUFDbkZMLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDSyxJQUFJLENBQUMsTUFBTSxFQUFFMkIsSUFBSSxDQUFDO0lBQ3ZDLElBQUksQ0FBQ25CLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztFQUNqQyxDQUFDLENBQUM7RUFDRmQsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUNHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBVztJQUM5Q0gsQ0FBQyxDQUFDZSxJQUFJLENBQUM7TUFDTEMsR0FBRyxFQUFFLFFBQVE7TUFDYkMsTUFBTSxFQUFFO0lBQ1YsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0FBQ0o7QUFBQzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0NYRCxxSkFBQWdCLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLENBQUEsU0FBQUMsQ0FBQSxFQUFBRCxDQUFBLE9BQUFFLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLENBQUEsR0FBQUgsQ0FBQSxDQUFBSSxjQUFBLEVBQUFDLENBQUEsR0FBQUosTUFBQSxDQUFBSyxjQUFBLGNBQUFQLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLElBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLENBQUFULEtBQUEsS0FBQWdCLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLGFBQUEsdUJBQUFDLENBQUEsR0FBQU4sQ0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBaEIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUMsTUFBQSxDQUFBSyxjQUFBLENBQUFQLENBQUEsRUFBQUQsQ0FBQSxJQUFBUCxLQUFBLEVBQUFTLENBQUEsRUFBQWdCLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFuQixDQUFBLENBQUFELENBQUEsV0FBQWlCLE1BQUEsbUJBQUFoQixDQUFBLElBQUFnQixNQUFBLFlBQUFBLE9BQUFoQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxnQkFBQW1CLEtBQUFwQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFJLENBQUEsR0FBQVQsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFNBQUEsWUFBQWtCLFNBQUEsR0FBQXRCLENBQUEsR0FBQXNCLFNBQUEsRUFBQVgsQ0FBQSxHQUFBUixNQUFBLENBQUFvQixNQUFBLENBQUFkLENBQUEsQ0FBQUwsU0FBQSxHQUFBUyxDQUFBLE9BQUFXLE9BQUEsQ0FBQW5CLENBQUEsZ0JBQUFFLENBQUEsQ0FBQUksQ0FBQSxlQUFBbEIsS0FBQSxFQUFBZ0MsZ0JBQUEsQ0FBQXhCLENBQUEsRUFBQUMsQ0FBQSxFQUFBVyxDQUFBLE1BQUFGLENBQUEsYUFBQWUsU0FBQXpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLG1CQUFBSixJQUFBLFlBQUE2QixHQUFBLEVBQUExQixDQUFBLENBQUEyQixJQUFBLENBQUE1QixDQUFBLEVBQUFFLENBQUEsY0FBQUQsQ0FBQSxhQUFBSCxJQUFBLFdBQUE2QixHQUFBLEVBQUExQixDQUFBLFFBQUFELENBQUEsQ0FBQXFCLElBQUEsR0FBQUEsSUFBQSxNQUFBUSxDQUFBLHFCQUFBQyxDQUFBLHFCQUFBQyxDQUFBLGdCQUFBQyxDQUFBLGdCQUFBQyxDQUFBLGdCQUFBWCxVQUFBLGNBQUFZLGtCQUFBLGNBQUFDLDJCQUFBLFNBQUFDLENBQUEsT0FBQW5CLE1BQUEsQ0FBQW1CLENBQUEsRUFBQXpCLENBQUEscUNBQUEwQixDQUFBLEdBQUFsQyxNQUFBLENBQUFtQyxjQUFBLEVBQUFDLENBQUEsR0FBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFBLENBQUEsQ0FBQUcsTUFBQSxRQUFBRCxDQUFBLElBQUFBLENBQUEsS0FBQXJDLENBQUEsSUFBQUcsQ0FBQSxDQUFBdUIsSUFBQSxDQUFBVyxDQUFBLEVBQUE1QixDQUFBLE1BQUF5QixDQUFBLEdBQUFHLENBQUEsT0FBQUUsQ0FBQSxHQUFBTiwwQkFBQSxDQUFBL0IsU0FBQSxHQUFBa0IsU0FBQSxDQUFBbEIsU0FBQSxHQUFBRCxNQUFBLENBQUFvQixNQUFBLENBQUFhLENBQUEsWUFBQU0sc0JBQUF6QyxDQUFBLGdDQUFBbkQsT0FBQSxXQUFBa0QsQ0FBQSxJQUFBaUIsTUFBQSxDQUFBaEIsQ0FBQSxFQUFBRCxDQUFBLFlBQUFDLENBQUEsZ0JBQUEwQyxPQUFBLENBQUEzQyxDQUFBLEVBQUFDLENBQUEsc0JBQUEyQyxjQUFBM0MsQ0FBQSxFQUFBRCxDQUFBLGFBQUE2QyxPQUFBM0MsQ0FBQSxFQUFBSyxDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxRQUFBRSxDQUFBLEdBQUFhLFFBQUEsQ0FBQXpCLENBQUEsQ0FBQUMsQ0FBQSxHQUFBRCxDQUFBLEVBQUFNLENBQUEsbUJBQUFNLENBQUEsQ0FBQWYsSUFBQSxRQUFBaUIsQ0FBQSxHQUFBRixDQUFBLENBQUFjLEdBQUEsRUFBQUUsQ0FBQSxHQUFBZCxDQUFBLENBQUF0QixLQUFBLFNBQUFvQyxDQUFBLGdCQUFBaUIsT0FBQSxDQUFBakIsQ0FBQSxLQUFBeEIsQ0FBQSxDQUFBdUIsSUFBQSxDQUFBQyxDQUFBLGVBQUE3QixDQUFBLENBQUErQyxPQUFBLENBQUFsQixDQUFBLENBQUFtQixPQUFBLEVBQUEzRixJQUFBLFdBQUE0QyxDQUFBLElBQUE0QyxNQUFBLFNBQUE1QyxDQUFBLEVBQUFRLENBQUEsRUFBQUUsQ0FBQSxnQkFBQVYsQ0FBQSxJQUFBNEMsTUFBQSxVQUFBNUMsQ0FBQSxFQUFBUSxDQUFBLEVBQUFFLENBQUEsUUFBQVgsQ0FBQSxDQUFBK0MsT0FBQSxDQUFBbEIsQ0FBQSxFQUFBeEUsSUFBQSxXQUFBNEMsQ0FBQSxJQUFBYyxDQUFBLENBQUF0QixLQUFBLEdBQUFRLENBQUEsRUFBQVEsQ0FBQSxDQUFBTSxDQUFBLGdCQUFBZCxDQUFBLFdBQUE0QyxNQUFBLFVBQUE1QyxDQUFBLEVBQUFRLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLENBQUFFLENBQUEsQ0FBQWMsR0FBQSxTQUFBekIsQ0FBQSxFQUFBSyxDQUFBLG9CQUFBZCxLQUFBLFdBQUFBLE1BQUFRLENBQUEsRUFBQUksQ0FBQSxhQUFBNEMsMkJBQUEsZUFBQWpELENBQUEsV0FBQUEsQ0FBQSxFQUFBRSxDQUFBLElBQUEyQyxNQUFBLENBQUE1QyxDQUFBLEVBQUFJLENBQUEsRUFBQUwsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBQSxDQUFBLEdBQUFBLENBQUEsR0FBQUEsQ0FBQSxDQUFBN0MsSUFBQSxDQUFBNEYsMEJBQUEsRUFBQUEsMEJBQUEsSUFBQUEsMEJBQUEscUJBQUF4QixpQkFBQXpCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFFLENBQUEsR0FBQXNCLENBQUEsbUJBQUFwQixDQUFBLEVBQUFFLENBQUEsUUFBQUosQ0FBQSxLQUFBd0IsQ0FBQSxRQUFBbUIsS0FBQSxzQ0FBQTNDLENBQUEsS0FBQXlCLENBQUEsb0JBQUF2QixDQUFBLFFBQUFFLENBQUEsV0FBQWxCLEtBQUEsRUFBQVEsQ0FBQSxFQUFBa0QsSUFBQSxlQUFBOUMsQ0FBQSxDQUFBdEIsTUFBQSxHQUFBMEIsQ0FBQSxFQUFBSixDQUFBLENBQUFzQixHQUFBLEdBQUFoQixDQUFBLFVBQUFFLENBQUEsR0FBQVIsQ0FBQSxDQUFBK0MsUUFBQSxNQUFBdkMsQ0FBQSxRQUFBRSxDQUFBLEdBQUFzQyxtQkFBQSxDQUFBeEMsQ0FBQSxFQUFBUixDQUFBLE9BQUFVLENBQUEsUUFBQUEsQ0FBQSxLQUFBa0IsQ0FBQSxtQkFBQWxCLENBQUEscUJBQUFWLENBQUEsQ0FBQXRCLE1BQUEsRUFBQXNCLENBQUEsQ0FBQWlELElBQUEsR0FBQWpELENBQUEsQ0FBQWtELEtBQUEsR0FBQWxELENBQUEsQ0FBQXNCLEdBQUEsc0JBQUF0QixDQUFBLENBQUF0QixNQUFBLFFBQUF3QixDQUFBLEtBQUFzQixDQUFBLFFBQUF0QixDQUFBLEdBQUF5QixDQUFBLEVBQUEzQixDQUFBLENBQUFzQixHQUFBLEVBQUF0QixDQUFBLENBQUFtRCxpQkFBQSxDQUFBbkQsQ0FBQSxDQUFBc0IsR0FBQSx1QkFBQXRCLENBQUEsQ0FBQXRCLE1BQUEsSUFBQXNCLENBQUEsQ0FBQW9ELE1BQUEsV0FBQXBELENBQUEsQ0FBQXNCLEdBQUEsR0FBQXBCLENBQUEsR0FBQXdCLENBQUEsTUFBQUssQ0FBQSxHQUFBVixRQUFBLENBQUExQixDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxvQkFBQStCLENBQUEsQ0FBQXRDLElBQUEsUUFBQVMsQ0FBQSxHQUFBRixDQUFBLENBQUE4QyxJQUFBLEdBQUFuQixDQUFBLEdBQUFGLENBQUEsRUFBQU0sQ0FBQSxDQUFBVCxHQUFBLEtBQUFNLENBQUEscUJBQUF4QyxLQUFBLEVBQUEyQyxDQUFBLENBQUFULEdBQUEsRUFBQXdCLElBQUEsRUFBQTlDLENBQUEsQ0FBQThDLElBQUEsa0JBQUFmLENBQUEsQ0FBQXRDLElBQUEsS0FBQVMsQ0FBQSxHQUFBeUIsQ0FBQSxFQUFBM0IsQ0FBQSxDQUFBdEIsTUFBQSxZQUFBc0IsQ0FBQSxDQUFBc0IsR0FBQSxHQUFBUyxDQUFBLENBQUFULEdBQUEsbUJBQUEwQixvQkFBQXJELENBQUEsRUFBQUUsQ0FBQSxRQUFBRyxDQUFBLEdBQUFILENBQUEsQ0FBQW5CLE1BQUEsRUFBQXdCLENBQUEsR0FBQVAsQ0FBQSxDQUFBWSxRQUFBLENBQUFQLENBQUEsT0FBQUUsQ0FBQSxLQUFBTixDQUFBLFNBQUFDLENBQUEsQ0FBQWtELFFBQUEscUJBQUEvQyxDQUFBLElBQUFMLENBQUEsQ0FBQVksUUFBQSxlQUFBVixDQUFBLENBQUFuQixNQUFBLGFBQUFtQixDQUFBLENBQUF5QixHQUFBLEdBQUExQixDQUFBLEVBQUFvRCxtQkFBQSxDQUFBckQsQ0FBQSxFQUFBRSxDQUFBLGVBQUFBLENBQUEsQ0FBQW5CLE1BQUEsa0JBQUFzQixDQUFBLEtBQUFILENBQUEsQ0FBQW5CLE1BQUEsWUFBQW1CLENBQUEsQ0FBQXlCLEdBQUEsT0FBQStCLFNBQUEsdUNBQUFyRCxDQUFBLGlCQUFBNEIsQ0FBQSxNQUFBeEIsQ0FBQSxHQUFBaUIsUUFBQSxDQUFBbkIsQ0FBQSxFQUFBUCxDQUFBLENBQUFZLFFBQUEsRUFBQVYsQ0FBQSxDQUFBeUIsR0FBQSxtQkFBQWxCLENBQUEsQ0FBQVgsSUFBQSxTQUFBSSxDQUFBLENBQUFuQixNQUFBLFlBQUFtQixDQUFBLENBQUF5QixHQUFBLEdBQUFsQixDQUFBLENBQUFrQixHQUFBLEVBQUF6QixDQUFBLENBQUFrRCxRQUFBLFNBQUFuQixDQUFBLE1BQUF0QixDQUFBLEdBQUFGLENBQUEsQ0FBQWtCLEdBQUEsU0FBQWhCLENBQUEsR0FBQUEsQ0FBQSxDQUFBd0MsSUFBQSxJQUFBakQsQ0FBQSxDQUFBRixDQUFBLENBQUEyRCxVQUFBLElBQUFoRCxDQUFBLENBQUFsQixLQUFBLEVBQUFTLENBQUEsQ0FBQTBELElBQUEsR0FBQTVELENBQUEsQ0FBQTZELE9BQUEsZUFBQTNELENBQUEsQ0FBQW5CLE1BQUEsS0FBQW1CLENBQUEsQ0FBQW5CLE1BQUEsV0FBQW1CLENBQUEsQ0FBQXlCLEdBQUEsR0FBQTFCLENBQUEsR0FBQUMsQ0FBQSxDQUFBa0QsUUFBQSxTQUFBbkIsQ0FBQSxJQUFBdEIsQ0FBQSxJQUFBVCxDQUFBLENBQUFuQixNQUFBLFlBQUFtQixDQUFBLENBQUF5QixHQUFBLE9BQUErQixTQUFBLHNDQUFBeEQsQ0FBQSxDQUFBa0QsUUFBQSxTQUFBbkIsQ0FBQSxjQUFBNkIsYUFBQTdELENBQUEsUUFBQUQsQ0FBQSxLQUFBK0QsTUFBQSxFQUFBOUQsQ0FBQSxZQUFBQSxDQUFBLEtBQUFELENBQUEsQ0FBQWdFLFFBQUEsR0FBQS9ELENBQUEsV0FBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFpRSxVQUFBLEdBQUFoRSxDQUFBLEtBQUFELENBQUEsQ0FBQWtFLFFBQUEsR0FBQWpFLENBQUEsV0FBQWtFLFVBQUEsQ0FBQUMsSUFBQSxDQUFBcEUsQ0FBQSxjQUFBcUUsY0FBQXBFLENBQUEsUUFBQUQsQ0FBQSxHQUFBQyxDQUFBLENBQUFxRSxVQUFBLFFBQUF0RSxDQUFBLENBQUFGLElBQUEsb0JBQUFFLENBQUEsQ0FBQTJCLEdBQUEsRUFBQTFCLENBQUEsQ0FBQXFFLFVBQUEsR0FBQXRFLENBQUEsYUFBQXdCLFFBQUF2QixDQUFBLFNBQUFrRSxVQUFBLE1BQUFKLE1BQUEsYUFBQTlELENBQUEsQ0FBQW5ELE9BQUEsQ0FBQWdILFlBQUEsY0FBQVMsS0FBQSxpQkFBQS9CLE9BQUF4QyxDQUFBLFFBQUFBLENBQUEsV0FBQUEsQ0FBQSxRQUFBRSxDQUFBLEdBQUFGLENBQUEsQ0FBQVcsQ0FBQSxPQUFBVCxDQUFBLFNBQUFBLENBQUEsQ0FBQTBCLElBQUEsQ0FBQTVCLENBQUEsNEJBQUFBLENBQUEsQ0FBQTRELElBQUEsU0FBQTVELENBQUEsT0FBQXdFLEtBQUEsQ0FBQXhFLENBQUEsQ0FBQXlFLE1BQUEsU0FBQWxFLENBQUEsT0FBQUUsQ0FBQSxZQUFBbUQsS0FBQSxhQUFBckQsQ0FBQSxHQUFBUCxDQUFBLENBQUF5RSxNQUFBLE9BQUFwRSxDQUFBLENBQUF1QixJQUFBLENBQUE1QixDQUFBLEVBQUFPLENBQUEsVUFBQXFELElBQUEsQ0FBQW5FLEtBQUEsR0FBQU8sQ0FBQSxDQUFBTyxDQUFBLEdBQUFxRCxJQUFBLENBQUFULElBQUEsT0FBQVMsSUFBQSxTQUFBQSxJQUFBLENBQUFuRSxLQUFBLEdBQUFRLENBQUEsRUFBQTJELElBQUEsQ0FBQVQsSUFBQSxPQUFBUyxJQUFBLFlBQUFuRCxDQUFBLENBQUFtRCxJQUFBLEdBQUFuRCxDQUFBLGdCQUFBaUQsU0FBQSxDQUFBWixPQUFBLENBQUE5QyxDQUFBLGtDQUFBa0MsaUJBQUEsQ0FBQTlCLFNBQUEsR0FBQStCLDBCQUFBLEVBQUE1QixDQUFBLENBQUFrQyxDQUFBLG1CQUFBaEQsS0FBQSxFQUFBMEMsMEJBQUEsRUFBQWhCLFlBQUEsU0FBQVosQ0FBQSxDQUFBNEIsMEJBQUEsbUJBQUExQyxLQUFBLEVBQUF5QyxpQkFBQSxFQUFBZixZQUFBLFNBQUFlLGlCQUFBLENBQUF3QyxXQUFBLEdBQUF6RCxNQUFBLENBQUFrQiwwQkFBQSxFQUFBcEIsQ0FBQSx3QkFBQWYsQ0FBQSxDQUFBMkUsbUJBQUEsYUFBQTFFLENBQUEsUUFBQUQsQ0FBQSx3QkFBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUEyRSxXQUFBLFdBQUE1RSxDQUFBLEtBQUFBLENBQUEsS0FBQWtDLGlCQUFBLDZCQUFBbEMsQ0FBQSxDQUFBMEUsV0FBQSxJQUFBMUUsQ0FBQSxDQUFBdkIsSUFBQSxPQUFBdUIsQ0FBQSxDQUFBNkUsSUFBQSxhQUFBNUUsQ0FBQSxXQUFBRSxNQUFBLENBQUEyRSxjQUFBLEdBQUEzRSxNQUFBLENBQUEyRSxjQUFBLENBQUE3RSxDQUFBLEVBQUFrQywwQkFBQSxLQUFBbEMsQ0FBQSxDQUFBOEUsU0FBQSxHQUFBNUMsMEJBQUEsRUFBQWxCLE1BQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSx5QkFBQWQsQ0FBQSxDQUFBRyxTQUFBLEdBQUFELE1BQUEsQ0FBQW9CLE1BQUEsQ0FBQWtCLENBQUEsR0FBQXhDLENBQUEsS0FBQUQsQ0FBQSxDQUFBZ0YsS0FBQSxhQUFBL0UsQ0FBQSxhQUFBK0MsT0FBQSxFQUFBL0MsQ0FBQSxPQUFBeUMscUJBQUEsQ0FBQUUsYUFBQSxDQUFBeEMsU0FBQSxHQUFBYSxNQUFBLENBQUEyQixhQUFBLENBQUF4QyxTQUFBLEVBQUFTLENBQUEsaUNBQUFiLENBQUEsQ0FBQTRDLGFBQUEsR0FBQUEsYUFBQSxFQUFBNUMsQ0FBQSxDQUFBaUYsS0FBQSxhQUFBaEYsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLGVBQUFBLENBQUEsS0FBQUEsQ0FBQSxHQUFBeUUsT0FBQSxPQUFBdkUsQ0FBQSxPQUFBaUMsYUFBQSxDQUFBdkIsSUFBQSxDQUFBcEIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxHQUFBRSxDQUFBLFVBQUFULENBQUEsQ0FBQTJFLG1CQUFBLENBQUF6RSxDQUFBLElBQUFTLENBQUEsR0FBQUEsQ0FBQSxDQUFBaUQsSUFBQSxHQUFBdkcsSUFBQSxXQUFBNEMsQ0FBQSxXQUFBQSxDQUFBLENBQUFrRCxJQUFBLEdBQUFsRCxDQUFBLENBQUFSLEtBQUEsR0FBQWtCLENBQUEsQ0FBQWlELElBQUEsV0FBQWxCLHFCQUFBLENBQUFELENBQUEsR0FBQXhCLE1BQUEsQ0FBQXdCLENBQUEsRUFBQTFCLENBQUEsZ0JBQUFFLE1BQUEsQ0FBQXdCLENBQUEsRUFBQTlCLENBQUEsaUNBQUFNLE1BQUEsQ0FBQXdCLENBQUEsNkRBQUF6QyxDQUFBLENBQUFtRixJQUFBLGFBQUFsRixDQUFBLFFBQUFELENBQUEsR0FBQUcsTUFBQSxDQUFBRixDQUFBLEdBQUFDLENBQUEsZ0JBQUFHLENBQUEsSUFBQUwsQ0FBQSxFQUFBRSxDQUFBLENBQUFrRSxJQUFBLENBQUEvRCxDQUFBLFVBQUFILENBQUEsQ0FBQWtGLE9BQUEsYUFBQXhCLEtBQUEsV0FBQTFELENBQUEsQ0FBQXVFLE1BQUEsU0FBQXhFLENBQUEsR0FBQUMsQ0FBQSxDQUFBbUYsR0FBQSxRQUFBcEYsQ0FBQSxJQUFBRCxDQUFBLFNBQUE0RCxJQUFBLENBQUFuRSxLQUFBLEdBQUFRLENBQUEsRUFBQTJELElBQUEsQ0FBQVQsSUFBQSxPQUFBUyxJQUFBLFdBQUFBLElBQUEsQ0FBQVQsSUFBQSxPQUFBUyxJQUFBLFFBQUE1RCxDQUFBLENBQUF3QyxNQUFBLEdBQUFBLE1BQUEsRUFBQWhCLE9BQUEsQ0FBQXBCLFNBQUEsS0FBQXdFLFdBQUEsRUFBQXBELE9BQUEsRUFBQStDLEtBQUEsV0FBQUEsTUFBQXZFLENBQUEsYUFBQXNGLElBQUEsV0FBQTFCLElBQUEsV0FBQU4sSUFBQSxRQUFBQyxLQUFBLEdBQUF0RCxDQUFBLE9BQUFrRCxJQUFBLFlBQUFDLFFBQUEsY0FBQXJFLE1BQUEsZ0JBQUE0QyxHQUFBLEdBQUExQixDQUFBLE9BQUFrRSxVQUFBLENBQUFySCxPQUFBLENBQUF1SCxhQUFBLElBQUFyRSxDQUFBLFdBQUFFLENBQUEsa0JBQUFBLENBQUEsQ0FBQXFGLE1BQUEsT0FBQWxGLENBQUEsQ0FBQXVCLElBQUEsT0FBQTFCLENBQUEsTUFBQXNFLEtBQUEsRUFBQXRFLENBQUEsQ0FBQXNGLEtBQUEsY0FBQXRGLENBQUEsSUFBQUQsQ0FBQSxNQUFBd0YsSUFBQSxXQUFBQSxLQUFBLFNBQUF0QyxJQUFBLFdBQUFsRCxDQUFBLFFBQUFrRSxVQUFBLElBQUFHLFVBQUEsa0JBQUFyRSxDQUFBLENBQUFILElBQUEsUUFBQUcsQ0FBQSxDQUFBMEIsR0FBQSxjQUFBK0QsSUFBQSxLQUFBbEMsaUJBQUEsV0FBQUEsa0JBQUF4RCxDQUFBLGFBQUFtRCxJQUFBLFFBQUFuRCxDQUFBLE1BQUFFLENBQUEsa0JBQUF5RixPQUFBdEYsQ0FBQSxFQUFBRSxDQUFBLFdBQUFJLENBQUEsQ0FBQWIsSUFBQSxZQUFBYSxDQUFBLENBQUFnQixHQUFBLEdBQUEzQixDQUFBLEVBQUFFLENBQUEsQ0FBQTBELElBQUEsR0FBQXZELENBQUEsRUFBQUUsQ0FBQSxLQUFBTCxDQUFBLENBQUFuQixNQUFBLFdBQUFtQixDQUFBLENBQUF5QixHQUFBLEdBQUExQixDQUFBLEtBQUFNLENBQUEsYUFBQUEsQ0FBQSxRQUFBNEQsVUFBQSxDQUFBTSxNQUFBLE1BQUFsRSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBMEQsVUFBQSxDQUFBNUQsQ0FBQSxHQUFBSSxDQUFBLEdBQUFGLENBQUEsQ0FBQTZELFVBQUEsaUJBQUE3RCxDQUFBLENBQUFzRCxNQUFBLFNBQUE0QixNQUFBLGFBQUFsRixDQUFBLENBQUFzRCxNQUFBLFNBQUF1QixJQUFBLFFBQUF6RSxDQUFBLEdBQUFSLENBQUEsQ0FBQXVCLElBQUEsQ0FBQW5CLENBQUEsZUFBQU0sQ0FBQSxHQUFBVixDQUFBLENBQUF1QixJQUFBLENBQUFuQixDQUFBLHFCQUFBSSxDQUFBLElBQUFFLENBQUEsYUFBQXVFLElBQUEsR0FBQTdFLENBQUEsQ0FBQXVELFFBQUEsU0FBQTJCLE1BQUEsQ0FBQWxGLENBQUEsQ0FBQXVELFFBQUEsZ0JBQUFzQixJQUFBLEdBQUE3RSxDQUFBLENBQUF3RCxVQUFBLFNBQUEwQixNQUFBLENBQUFsRixDQUFBLENBQUF3RCxVQUFBLGNBQUFwRCxDQUFBLGFBQUF5RSxJQUFBLEdBQUE3RSxDQUFBLENBQUF1RCxRQUFBLFNBQUEyQixNQUFBLENBQUFsRixDQUFBLENBQUF1RCxRQUFBLHFCQUFBakQsQ0FBQSxRQUFBbUMsS0FBQSxxREFBQW9DLElBQUEsR0FBQTdFLENBQUEsQ0FBQXdELFVBQUEsU0FBQTBCLE1BQUEsQ0FBQWxGLENBQUEsQ0FBQXdELFVBQUEsWUFBQVIsTUFBQSxXQUFBQSxPQUFBeEQsQ0FBQSxFQUFBRCxDQUFBLGFBQUFFLENBQUEsUUFBQWlFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBdkUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFLLENBQUEsUUFBQTRELFVBQUEsQ0FBQWpFLENBQUEsT0FBQUssQ0FBQSxDQUFBd0QsTUFBQSxTQUFBdUIsSUFBQSxJQUFBakYsQ0FBQSxDQUFBdUIsSUFBQSxDQUFBckIsQ0FBQSx3QkFBQStFLElBQUEsR0FBQS9FLENBQUEsQ0FBQTBELFVBQUEsUUFBQXhELENBQUEsR0FBQUYsQ0FBQSxhQUFBRSxDQUFBLGlCQUFBUixDQUFBLG1CQUFBQSxDQUFBLEtBQUFRLENBQUEsQ0FBQXNELE1BQUEsSUFBQS9ELENBQUEsSUFBQUEsQ0FBQSxJQUFBUyxDQUFBLENBQUF3RCxVQUFBLEtBQUF4RCxDQUFBLGNBQUFFLENBQUEsR0FBQUYsQ0FBQSxHQUFBQSxDQUFBLENBQUE2RCxVQUFBLGNBQUEzRCxDQUFBLENBQUFiLElBQUEsR0FBQUcsQ0FBQSxFQUFBVSxDQUFBLENBQUFnQixHQUFBLEdBQUEzQixDQUFBLEVBQUFTLENBQUEsU0FBQTFCLE1BQUEsZ0JBQUE2RSxJQUFBLEdBQUFuRCxDQUFBLENBQUF3RCxVQUFBLEVBQUFoQyxDQUFBLFNBQUEyRCxRQUFBLENBQUFqRixDQUFBLE1BQUFpRixRQUFBLFdBQUFBLFNBQUEzRixDQUFBLEVBQUFELENBQUEsb0JBQUFDLENBQUEsQ0FBQUgsSUFBQSxRQUFBRyxDQUFBLENBQUEwQixHQUFBLHFCQUFBMUIsQ0FBQSxDQUFBSCxJQUFBLG1CQUFBRyxDQUFBLENBQUFILElBQUEsUUFBQThELElBQUEsR0FBQTNELENBQUEsQ0FBQTBCLEdBQUEsZ0JBQUExQixDQUFBLENBQUFILElBQUEsU0FBQTRGLElBQUEsUUFBQS9ELEdBQUEsR0FBQTFCLENBQUEsQ0FBQTBCLEdBQUEsT0FBQTVDLE1BQUEsa0JBQUE2RSxJQUFBLHlCQUFBM0QsQ0FBQSxDQUFBSCxJQUFBLElBQUFFLENBQUEsVUFBQTRELElBQUEsR0FBQTVELENBQUEsR0FBQWlDLENBQUEsS0FBQTRELE1BQUEsV0FBQUEsT0FBQTVGLENBQUEsYUFBQUQsQ0FBQSxRQUFBbUUsVUFBQSxDQUFBTSxNQUFBLE1BQUF6RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBaUUsVUFBQSxDQUFBbkUsQ0FBQSxPQUFBRSxDQUFBLENBQUErRCxVQUFBLEtBQUFoRSxDQUFBLGNBQUEyRixRQUFBLENBQUExRixDQUFBLENBQUFvRSxVQUFBLEVBQUFwRSxDQUFBLENBQUFnRSxRQUFBLEdBQUFHLGFBQUEsQ0FBQW5FLENBQUEsR0FBQStCLENBQUEseUJBQUE2RCxPQUFBN0YsQ0FBQSxhQUFBRCxDQUFBLFFBQUFtRSxVQUFBLENBQUFNLE1BQUEsTUFBQXpFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFpRSxVQUFBLENBQUFuRSxDQUFBLE9BQUFFLENBQUEsQ0FBQTZELE1BQUEsS0FBQTlELENBQUEsUUFBQUksQ0FBQSxHQUFBSCxDQUFBLENBQUFvRSxVQUFBLGtCQUFBakUsQ0FBQSxDQUFBUCxJQUFBLFFBQUFTLENBQUEsR0FBQUYsQ0FBQSxDQUFBc0IsR0FBQSxFQUFBMEMsYUFBQSxDQUFBbkUsQ0FBQSxZQUFBSyxDQUFBLFlBQUEyQyxLQUFBLDhCQUFBNkMsYUFBQSxXQUFBQSxjQUFBL0YsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsZ0JBQUErQyxRQUFBLEtBQUF4QyxRQUFBLEVBQUE0QixNQUFBLENBQUF4QyxDQUFBLEdBQUEyRCxVQUFBLEVBQUF6RCxDQUFBLEVBQUEyRCxPQUFBLEVBQUF4RCxDQUFBLG9CQUFBdEIsTUFBQSxVQUFBNEMsR0FBQSxHQUFBMUIsQ0FBQSxHQUFBZ0MsQ0FBQSxPQUFBakMsQ0FBQTtBQUFBLFNBQUFnRyxtQkFBQTNGLENBQUEsRUFBQUosQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUssQ0FBQSxFQUFBSSxDQUFBLEVBQUFFLENBQUEsY0FBQUosQ0FBQSxHQUFBSixDQUFBLENBQUFNLENBQUEsRUFBQUUsQ0FBQSxHQUFBRSxDQUFBLEdBQUFOLENBQUEsQ0FBQWhCLEtBQUEsV0FBQVksQ0FBQSxnQkFBQUwsQ0FBQSxDQUFBSyxDQUFBLEtBQUFJLENBQUEsQ0FBQTBDLElBQUEsR0FBQWxELENBQUEsQ0FBQWMsQ0FBQSxJQUFBbUUsT0FBQSxDQUFBbkMsT0FBQSxDQUFBaEMsQ0FBQSxFQUFBMUQsSUFBQSxDQUFBNkMsQ0FBQSxFQUFBSyxDQUFBO0FBQUEsU0FBQTBGLGtCQUFBNUYsQ0FBQSw2QkFBQUosQ0FBQSxTQUFBRCxDQUFBLEdBQUFYLFNBQUEsYUFBQTZGLE9BQUEsV0FBQWhGLENBQUEsRUFBQUssQ0FBQSxRQUFBSSxDQUFBLEdBQUFOLENBQUEsQ0FBQTZGLEtBQUEsQ0FBQWpHLENBQUEsRUFBQUQsQ0FBQSxZQUFBbUcsTUFBQTlGLENBQUEsSUFBQTJGLGtCQUFBLENBQUFyRixDQUFBLEVBQUFULENBQUEsRUFBQUssQ0FBQSxFQUFBNEYsS0FBQSxFQUFBQyxNQUFBLFVBQUEvRixDQUFBLGNBQUErRixPQUFBL0YsQ0FBQSxJQUFBMkYsa0JBQUEsQ0FBQXJGLENBQUEsRUFBQVQsQ0FBQSxFQUFBSyxDQUFBLEVBQUE0RixLQUFBLEVBQUFDLE1BQUEsV0FBQS9GLENBQUEsS0FBQThGLEtBQUE7QUFBQSxTQUFBckQsUUFBQXZDLENBQUEsc0NBQUF1QyxPQUFBLHdCQUFBcEMsTUFBQSx1QkFBQUEsTUFBQSxDQUFBRSxRQUFBLGFBQUFMLENBQUEsa0JBQUFBLENBQUEsZ0JBQUFBLENBQUEsV0FBQUEsQ0FBQSx5QkFBQUcsTUFBQSxJQUFBSCxDQUFBLENBQUFxRSxXQUFBLEtBQUFsRSxNQUFBLElBQUFILENBQUEsS0FBQUcsTUFBQSxDQUFBTixTQUFBLHFCQUFBRyxDQUFBLEtBQUF1QyxPQUFBLENBQUF2QyxDQUFBO0FBREEsNkJBQWUsc0NBQVk7RUFDdkIzQyxPQUFPLENBQUNVLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDOztFQUU5QlIsQ0FBQyxDQUFDbkIsUUFBUSxDQUFDLENBQUNvQixLQUFLLENBQUMsWUFBWTtJQUMxQkgsT0FBTyxDQUFDVSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQy9CLElBQUkrSCxLQUFLLEdBQUcsRUFBRTtJQUNkLFNBQVNDLGVBQWVBLENBQUNDLEtBQUssRUFBRXJJLFNBQVMsRUFBRTtNQUN2Q2QsS0FBSyxDQUFDbUosS0FBSyxHQUFHckksU0FBUyxDQUFDLENBQ25CYixJQUFJLENBQUMsVUFBQUMsUUFBUTtRQUFBLE9BQUlBLFFBQVEsQ0FBQ2tKLElBQUksQ0FBQyxDQUFDO01BQUEsRUFBQyxDQUNqQ25KLElBQUksQ0FBQyxVQUFBb0osSUFBSSxFQUFJO1FBQ1Y3SSxPQUFPLENBQUNVLEdBQUcsQ0FBQyxlQUFlLEVBQUVtSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUlDLFlBQVksR0FBRzVJLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQztRQUNwRDRJLFlBQVksQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCRCxZQUFZLENBQUNFLE1BQU0sQ0FBQyxrREFBa0QsQ0FBQztRQUN2RUgsSUFBSSxDQUFDSSxPQUFPLENBQUMvSixPQUFPLENBQUMsVUFBVWdLLE1BQU0sRUFBRTtVQUNuQyxJQUFJQyxNQUFNLEdBQUdqSixDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLE9BQU8sRUFBRTJJLE1BQU0sQ0FBQ0UsRUFBRSxDQUFDLENBQUN6SixJQUFJLENBQUN1SixNQUFNLENBQUNySSxJQUFJLENBQUM7VUFDOUViLE9BQU8sQ0FBQ1UsR0FBRyxDQUFDLG1CQUFtQixFQUFFeUksTUFBTSxDQUFDLENBQUMsQ0FBQztVQUMxQ0wsWUFBWSxDQUFDRSxNQUFNLENBQUNHLE1BQU0sQ0FBQztVQUMzQlYsS0FBSyxDQUFDakMsSUFBSSxDQUFDMEMsTUFBTSxDQUFDLENBQUMsQ0FBQztVQUNwQmxKLE9BQU8sQ0FBQ1UsR0FBRyxDQUFDbUksSUFBSSxDQUFDO1FBQ3JCLENBQUMsQ0FBQztNQUNOLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQTlJLEtBQUssRUFBSTtRQUNaQyxPQUFPLENBQUNELEtBQUssQ0FBQyxzQkFBc0IsRUFBRUEsS0FBSyxDQUFDLENBQUMsQ0FBQztNQUNsRCxDQUFDLENBQUM7SUFDVjtJQUVBRyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0csRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFVakIsS0FBSyxFQUFFO01BQy9DLElBQU1rQixTQUFTLEdBQUdsQixLQUFLLENBQUNpSyxNQUFNLENBQUN4SCxLQUFLO01BQ3BDN0IsT0FBTyxDQUFDVSxHQUFHLENBQUMsbUJBQW1CLEVBQUVKLFNBQVMsQ0FBQztNQUUzQ29JLGVBQWUsQ0FBQyxtQkFBbUIsRUFBRXBJLFNBQVMsQ0FBQztNQUMvQ29JLGVBQWUsQ0FBQyx1QkFBdUIsRUFBRXBJLFNBQVMsQ0FBQztJQUN2RCxDQUFDLENBQUM7SUFFRkosQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUNHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQytCLENBQUMsRUFBSztNQUNyQ0EsQ0FBQyxDQUFDL0MsY0FBYyxDQUFDLENBQUM7TUFDbEJXLE9BQU8sQ0FBQ1UsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztNQUM5Q1YsT0FBTyxDQUFDVSxHQUFHLENBQUF3RSxPQUFBLENBQVNoRixDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQ1UsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ25ELElBQU0wSSxRQUFRLEdBQUc7UUFDYkMsY0FBYyxFQUFFckosQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUNVLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZENEksZUFBZSxFQUFFdEosQ0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUNVLEdBQUcsQ0FBQyxDQUFDO1FBQ3pENkksSUFBSSxFQUFFdkosQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUNVLEdBQUcsQ0FBQyxDQUFDO1FBQ25DOEksYUFBYSxFQUFFeEosQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUNVLEdBQUcsQ0FBQyxDQUFDO1FBQ3REK0ksUUFBUSxFQUFFekosQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUNVLEdBQUcsQ0FBQztNQUMvQyxDQUFDO01BRURaLE9BQU8sQ0FBQ1UsR0FBRyxDQUFDLFlBQVksRUFBRTRJLFFBQVEsQ0FBQyxDQUFDLENBQUM7TUFBQSxTQUN0Qk0sU0FBU0EsQ0FBQTtRQUFBLE9BQUFDLFVBQUEsQ0FBQXZCLEtBQUEsT0FBQTdHLFNBQUE7TUFBQTtNQUFBLFNBQUFvSSxXQUFBO1FBQUFBLFVBQUEsR0FBQXhCLGlCQUFBLGNBQUFsRyxtQkFBQSxHQUFBOEUsSUFBQSxDQUF4QixTQUFBNkMsUUFBQTtVQUFBLElBQUFDLFVBQUEsRUFBQXJLLFFBQUEsRUFBQW1KLElBQUE7VUFBQSxPQUFBMUcsbUJBQUEsR0FBQXNCLElBQUEsVUFBQXVHLFNBQUFDLFFBQUE7WUFBQSxrQkFBQUEsUUFBQSxDQUFBdkMsSUFBQSxHQUFBdUMsUUFBQSxDQUFBakUsSUFBQTtjQUFBO2dCQUVRK0QsVUFBVSxHQUFHaEwsUUFBUSxDQUFDYyxhQUFhLENBQUMsV0FBVyxDQUFDO2dCQUFBb0ssUUFBQSxDQUFBdkMsSUFBQTtnQkFBQXVDLFFBQUEsQ0FBQWpFLElBQUE7Z0JBQUEsT0FHM0J4RyxLQUFLLENBQUMsa0JBQWtCLEVBQUU7a0JBQzNDMEssUUFBUSxFQUFFLE1BQU07a0JBQ2hCckIsSUFBSSxFQUFFO29CQUFFQSxJQUFJLEVBQUVTO2tCQUFTLENBQUM7a0JBQ3hCbkksTUFBTSxFQUFFLE1BQU07a0JBQ2RnSixPQUFPLEVBQUU7b0JBQ0wsa0JBQWtCLEVBQUUsZ0JBQWdCO29CQUNwQyxjQUFjLEVBQUU7a0JBQ3BCLENBQUM7a0JBQ0RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM7b0JBQUV6QixJQUFJLEVBQUVTO2tCQUFTLENBQUM7Z0JBRTNDLENBQUMsQ0FBQztjQUFBO2dCQVZFNUosUUFBUSxHQUFBdUssUUFBQSxDQUFBdkUsSUFBQTtnQkFBQXVFLFFBQUEsQ0FBQWpFLElBQUE7Z0JBQUEsT0FXS3RHLFFBQVEsQ0FBQ2tKLElBQUksQ0FBQyxDQUFDO2NBQUE7Z0JBQTVCQyxJQUFJLEdBQUFvQixRQUFBLENBQUF2RSxJQUFBO2dCQUNSMUYsT0FBTyxDQUFDVSxHQUFHLENBQUMsY0FBYyxFQUFFbUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbkNrQixVQUFVLENBQUNqSyxTQUFTLEdBQUd1SyxJQUFJLENBQUNDLFNBQVMsQ0FBQ3pCLElBQUksQ0FBQzs7Z0JBRTNDO2dCQUFBb0IsUUFBQSxDQUFBakUsSUFBQTtnQkFBQTtjQUFBO2dCQUFBaUUsUUFBQSxDQUFBdkMsSUFBQTtnQkFBQXVDLFFBQUEsQ0FBQU0sRUFBQSxHQUFBTixRQUFBO2dCQUdBakssT0FBTyxDQUFDRCxLQUFLLENBQUMsNkNBQTZDLEVBQUFrSyxRQUFBLENBQUFNLEVBQU8sQ0FBQztjQUFDO2NBQUE7Z0JBQUEsT0FBQU4sUUFBQSxDQUFBcEMsSUFBQTtZQUFBO1VBQUEsR0FBQWlDLE9BQUE7UUFBQSxDQUUzRTtRQUFBLE9BQUFELFVBQUEsQ0FBQXZCLEtBQUEsT0FBQTdHLFNBQUE7TUFBQTtNQUNEbUksU0FBUyxDQUFDLENBQUM7SUFFZixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUV3QjtBQUNHOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDdUI7QUFDa0I7QUFDZjtBQUNPO0FBQ1E7QUFDekNZLGtEQUFXLENBQUMsQ0FBQzs7QUFFYjtBQUNBO0FBQ3FFO0FBQ1E7QUFDbEI7QUFDSjtBQUd2RHRLLDZDQUFDLENBQUNuQixRQUFRLENBQUMsQ0FBQ29CLEtBQUssQ0FBQyxZQUFZO0VBQzFCMEssOEVBQWtCLENBQUMsQ0FBQztFQUNwQkMsa0ZBQXNCLENBQUMsQ0FBQztFQUN4QkMseUVBQWEsQ0FBQyxDQUFDO0VBQ2ZDLHdFQUFXLENBQUMsQ0FBQztFQUNiO0FBQ0osQ0FBQyxDQUFDO0FBRUZOLDZDQUFlLGNBQUNELGdEQUFBLENBQUNFLDBEQUFNLE1BQUUsQ0FBQyxFQUFFNUwsUUFBUSxDQUFDb00sY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENSOztBQUU1RDtBQUNPLElBQU1FLEdBQUcsR0FBR0QsMEVBQWdCLENBQUNFLHlJQUluQyxDQUFDO0FBQ0Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUK0I7QUFDSztBQUNNO0FBQ1E7QUFFbkMsU0FBU0ksV0FBV0EsQ0FBQSxFQUFHO0VBQ3BDLElBQUFDLGVBQUEsR0FBMEJsQiwyQ0FBYyxDQUFDLENBQUMsQ0FBQztJQUFBb0IsZ0JBQUEsR0FBQUMsY0FBQSxDQUFBSCxlQUFBO0lBQXBDOUosS0FBSyxHQUFBZ0ssZ0JBQUE7SUFBRUUsUUFBUSxHQUFBRixnQkFBQTtFQUN0QnBCLDRDQUFlLENBQUMsWUFBTTtJQUNwQjFMLFFBQVEsQ0FBQ29NLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDdEosS0FBSyxHQUFHQSxLQUFLO0VBQ3pELENBQUMsRUFBRSxDQUFDQSxLQUFLLENBQUMsQ0FBQztFQUVYLElBQU1vSyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSTdNLEtBQUssRUFBRXVLLFFBQVEsRUFBSztJQUN4Q29DLFFBQVEsQ0FBQ3BDLFFBQVEsQ0FBQztJQUNsQjVLLFFBQVEsQ0FBQ29NLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDdEosS0FBSyxHQUFHOEgsUUFBUTtFQUM1RCxDQUFDO0VBQ0QzSixPQUFPLENBQUNVLEdBQUcsQ0FBQ21CLEtBQUssQ0FBQztFQUNsQixvQkFDRTRJLGdEQUFBLENBQUNFLDREQUFNO0lBQ0w5SixJQUFJLEVBQUMsbUJBQW1CO0lBQ3hCZ0IsS0FBSyxFQUFFQSxLQUFNO0lBQ2JxSyxRQUFRLEVBQUVEO0VBQWEsQ0FDaEIsQ0FBQztBQUVkOzs7Ozs7Ozs7Ozs7Ozs7QVJyQkEsNkJBQWUsc0NBQVk7RUFDekJsTixRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7SUFDeERELFFBQVEsQ0FBQ0UsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFVQyxJQUFJLEVBQUU7TUFDOURBLElBQUksQ0FBQ0gsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVVJLEtBQUssRUFBRTtRQUM5Q0EsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztRQUN0QixJQUFJQyxTQUFTLEdBQUcsSUFBSSxDQUFDQyxZQUFZLENBQUMsTUFBTSxDQUFDO1FBQ3pDQyxLQUFLLENBQUNGLFNBQVMsQ0FBQyxDQUNiRyxJQUFJLENBQUMsVUFBQUMsUUFBUTtVQUFBLE9BQUlBLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7UUFBQSxFQUFDLENBQ2pDRixJQUFJLENBQUMsVUFBQUcsSUFBSSxFQUFJO1VBQ1piLFFBQVEsQ0FBQ2MsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDQyxTQUFTLEdBQUdGLElBQUk7UUFDMUQsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFBRyxLQUFLO1VBQUEsT0FBSUMsT0FBTyxDQUFDQyxJQUFJLENBQUMsdUJBQXVCLEVBQUVGLEtBQUssQ0FBQztRQUFBLEVBQUM7TUFDakUsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0FBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkEsNkJBQWUsc0NBQVk7RUFDdkJHLENBQUMsQ0FBQ25CLFFBQVEsQ0FBQyxDQUFDb0IsS0FBSyxDQUFDLFlBQVk7SUFDMUJELENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBRXBDRixDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0csRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVakIsS0FBSyxFQUFFO01BQzlDQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BQ3RCLElBQUlpQixTQUFTLEdBQUdKLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2hETixDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ3BDRixDQUFDLENBQUMsZ0JBQWdCLEdBQUdJLFNBQVMsQ0FBQyxDQUFDRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDeENULE9BQU8sQ0FBQ1UsR0FBRyxDQUFDUixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUMvQixJQUFJSSxRQUFRLEdBQUdULENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ1UsR0FBRyxDQUFDLENBQUM7TUFDNUJaLE9BQU8sQ0FBQ1UsR0FBRyxDQUFDQyxRQUFRLENBQUM7SUFDekIsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ047QUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBR2RELDZCQUFlLG9DQUFVRSxJQUFJLEVBQUU7RUFDN0JYLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDRyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVk7SUFDM0MsSUFBTTZCLElBQUksR0FBR2hDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDSyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssVUFBVSxHQUFHLE1BQU0sR0FBRyxVQUFVO0lBQ25GTCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLE1BQU0sRUFBRTJCLElBQUksQ0FBQztJQUN2QyxJQUFJLENBQUNuQixTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFDakMsQ0FBQyxDQUFDO0VBQ0ZkLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDRyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVc7SUFDOUNILENBQUMsQ0FBQ2UsSUFBSSxDQUFDO01BQ0xDLEdBQUcsRUFBRSxRQUFRO01BQ2JDLE1BQU0sRUFBRTtJQUNWLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztBQUNKO0FBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7K0NDWEQscUpBQUFnQixtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxDQUFBLFNBQUFDLENBQUEsRUFBQUQsQ0FBQSxPQUFBRSxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxDQUFBLEdBQUFILENBQUEsQ0FBQUksY0FBQSxFQUFBQyxDQUFBLEdBQUFKLE1BQUEsQ0FBQUssY0FBQSxjQUFBUCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxJQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxDQUFBVCxLQUFBLEtBQUFnQixDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxDQUFBLEdBQUFOLENBQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQWhCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFDLE1BQUEsQ0FBQUssY0FBQSxDQUFBUCxDQUFBLEVBQUFELENBQUEsSUFBQVAsS0FBQSxFQUFBUyxDQUFBLEVBQUFnQixVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBbkIsQ0FBQSxDQUFBRCxDQUFBLFdBQUFpQixNQUFBLG1CQUFBaEIsQ0FBQSxJQUFBZ0IsTUFBQSxZQUFBQSxPQUFBaEIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsZ0JBQUFtQixLQUFBcEIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBSSxDQUFBLEdBQUFULENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxTQUFBLFlBQUFrQixTQUFBLEdBQUF0QixDQUFBLEdBQUFzQixTQUFBLEVBQUFYLENBQUEsR0FBQVIsTUFBQSxDQUFBb0IsTUFBQSxDQUFBZCxDQUFBLENBQUFMLFNBQUEsR0FBQVMsQ0FBQSxPQUFBVyxPQUFBLENBQUFuQixDQUFBLGdCQUFBRSxDQUFBLENBQUFJLENBQUEsZUFBQWxCLEtBQUEsRUFBQWdDLGdCQUFBLENBQUF4QixDQUFBLEVBQUFDLENBQUEsRUFBQVcsQ0FBQSxNQUFBRixDQUFBLGFBQUFlLFNBQUF6QixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxtQkFBQUosSUFBQSxZQUFBNkIsR0FBQSxFQUFBMUIsQ0FBQSxDQUFBMkIsSUFBQSxDQUFBNUIsQ0FBQSxFQUFBRSxDQUFBLGNBQUFELENBQUEsYUFBQUgsSUFBQSxXQUFBNkIsR0FBQSxFQUFBMUIsQ0FBQSxRQUFBRCxDQUFBLENBQUFxQixJQUFBLEdBQUFBLElBQUEsTUFBQVEsQ0FBQSxxQkFBQUMsQ0FBQSxxQkFBQUMsQ0FBQSxnQkFBQUMsQ0FBQSxnQkFBQUMsQ0FBQSxnQkFBQVgsVUFBQSxjQUFBWSxrQkFBQSxjQUFBQywyQkFBQSxTQUFBQyxDQUFBLE9BQUFuQixNQUFBLENBQUFtQixDQUFBLEVBQUF6QixDQUFBLHFDQUFBMEIsQ0FBQSxHQUFBbEMsTUFBQSxDQUFBbUMsY0FBQSxFQUFBQyxDQUFBLEdBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBQSxDQUFBLENBQUFHLE1BQUEsUUFBQUQsQ0FBQSxJQUFBQSxDQUFBLEtBQUFyQyxDQUFBLElBQUFHLENBQUEsQ0FBQXVCLElBQUEsQ0FBQVcsQ0FBQSxFQUFBNUIsQ0FBQSxNQUFBeUIsQ0FBQSxHQUFBRyxDQUFBLE9BQUFFLENBQUEsR0FBQU4sMEJBQUEsQ0FBQS9CLFNBQUEsR0FBQWtCLFNBQUEsQ0FBQWxCLFNBQUEsR0FBQUQsTUFBQSxDQUFBb0IsTUFBQSxDQUFBYSxDQUFBLFlBQUFNLHNCQUFBekMsQ0FBQSxnQ0FBQW5ELE9BQUEsV0FBQWtELENBQUEsSUFBQWlCLE1BQUEsQ0FBQWhCLENBQUEsRUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGdCQUFBMEMsT0FBQSxDQUFBM0MsQ0FBQSxFQUFBQyxDQUFBLHNCQUFBMkMsY0FBQTNDLENBQUEsRUFBQUQsQ0FBQSxhQUFBNkMsT0FBQTNDLENBQUEsRUFBQUssQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsUUFBQUUsQ0FBQSxHQUFBYSxRQUFBLENBQUF6QixDQUFBLENBQUFDLENBQUEsR0FBQUQsQ0FBQSxFQUFBTSxDQUFBLG1CQUFBTSxDQUFBLENBQUFmLElBQUEsUUFBQWlCLENBQUEsR0FBQUYsQ0FBQSxDQUFBYyxHQUFBLEVBQUFFLENBQUEsR0FBQWQsQ0FBQSxDQUFBdEIsS0FBQSxTQUFBb0MsQ0FBQSxnQkFBQWlCLE9BQUEsQ0FBQWpCLENBQUEsS0FBQXhCLENBQUEsQ0FBQXVCLElBQUEsQ0FBQUMsQ0FBQSxlQUFBN0IsQ0FBQSxDQUFBK0MsT0FBQSxDQUFBbEIsQ0FBQSxDQUFBbUIsT0FBQSxFQUFBM0YsSUFBQSxXQUFBNEMsQ0FBQSxJQUFBNEMsTUFBQSxTQUFBNUMsQ0FBQSxFQUFBUSxDQUFBLEVBQUFFLENBQUEsZ0JBQUFWLENBQUEsSUFBQTRDLE1BQUEsVUFBQTVDLENBQUEsRUFBQVEsQ0FBQSxFQUFBRSxDQUFBLFFBQUFYLENBQUEsQ0FBQStDLE9BQUEsQ0FBQWxCLENBQUEsRUFBQXhFLElBQUEsV0FBQTRDLENBQUEsSUFBQWMsQ0FBQSxDQUFBdEIsS0FBQSxHQUFBUSxDQUFBLEVBQUFRLENBQUEsQ0FBQU0sQ0FBQSxnQkFBQWQsQ0FBQSxXQUFBNEMsTUFBQSxVQUFBNUMsQ0FBQSxFQUFBUSxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxDQUFBRSxDQUFBLENBQUFjLEdBQUEsU0FBQXpCLENBQUEsRUFBQUssQ0FBQSxvQkFBQWQsS0FBQSxXQUFBQSxNQUFBUSxDQUFBLEVBQUFJLENBQUEsYUFBQTRDLDJCQUFBLGVBQUFqRCxDQUFBLFdBQUFBLENBQUEsRUFBQUUsQ0FBQSxJQUFBMkMsTUFBQSxDQUFBNUMsQ0FBQSxFQUFBSSxDQUFBLEVBQUFMLENBQUEsRUFBQUUsQ0FBQSxnQkFBQUEsQ0FBQSxHQUFBQSxDQUFBLEdBQUFBLENBQUEsQ0FBQTdDLElBQUEsQ0FBQTRGLDBCQUFBLEVBQUFBLDBCQUFBLElBQUFBLDBCQUFBLHFCQUFBeEIsaUJBQUF6QixDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBRSxDQUFBLEdBQUFzQixDQUFBLG1CQUFBcEIsQ0FBQSxFQUFBRSxDQUFBLFFBQUFKLENBQUEsS0FBQXdCLENBQUEsUUFBQW1CLEtBQUEsc0NBQUEzQyxDQUFBLEtBQUF5QixDQUFBLG9CQUFBdkIsQ0FBQSxRQUFBRSxDQUFBLFdBQUFsQixLQUFBLEVBQUFRLENBQUEsRUFBQWtELElBQUEsZUFBQTlDLENBQUEsQ0FBQXRCLE1BQUEsR0FBQTBCLENBQUEsRUFBQUosQ0FBQSxDQUFBc0IsR0FBQSxHQUFBaEIsQ0FBQSxVQUFBRSxDQUFBLEdBQUFSLENBQUEsQ0FBQStDLFFBQUEsTUFBQXZDLENBQUEsUUFBQUUsQ0FBQSxHQUFBc0MsbUJBQUEsQ0FBQXhDLENBQUEsRUFBQVIsQ0FBQSxPQUFBVSxDQUFBLFFBQUFBLENBQUEsS0FBQWtCLENBQUEsbUJBQUFsQixDQUFBLHFCQUFBVixDQUFBLENBQUF0QixNQUFBLEVBQUFzQixDQUFBLENBQUFpRCxJQUFBLEdBQUFqRCxDQUFBLENBQUFrRCxLQUFBLEdBQUFsRCxDQUFBLENBQUFzQixHQUFBLHNCQUFBdEIsQ0FBQSxDQUFBdEIsTUFBQSxRQUFBd0IsQ0FBQSxLQUFBc0IsQ0FBQSxRQUFBdEIsQ0FBQSxHQUFBeUIsQ0FBQSxFQUFBM0IsQ0FBQSxDQUFBc0IsR0FBQSxFQUFBdEIsQ0FBQSxDQUFBbUQsaUJBQUEsQ0FBQW5ELENBQUEsQ0FBQXNCLEdBQUEsdUJBQUF0QixDQUFBLENBQUF0QixNQUFBLElBQUFzQixDQUFBLENBQUFvRCxNQUFBLFdBQUFwRCxDQUFBLENBQUFzQixHQUFBLEdBQUFwQixDQUFBLEdBQUF3QixDQUFBLE1BQUFLLENBQUEsR0FBQVYsUUFBQSxDQUFBMUIsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsb0JBQUErQixDQUFBLENBQUF0QyxJQUFBLFFBQUFTLENBQUEsR0FBQUYsQ0FBQSxDQUFBOEMsSUFBQSxHQUFBbkIsQ0FBQSxHQUFBRixDQUFBLEVBQUFNLENBQUEsQ0FBQVQsR0FBQSxLQUFBTSxDQUFBLHFCQUFBeEMsS0FBQSxFQUFBMkMsQ0FBQSxDQUFBVCxHQUFBLEVBQUF3QixJQUFBLEVBQUE5QyxDQUFBLENBQUE4QyxJQUFBLGtCQUFBZixDQUFBLENBQUF0QyxJQUFBLEtBQUFTLENBQUEsR0FBQXlCLENBQUEsRUFBQTNCLENBQUEsQ0FBQXRCLE1BQUEsWUFBQXNCLENBQUEsQ0FBQXNCLEdBQUEsR0FBQVMsQ0FBQSxDQUFBVCxHQUFBLG1CQUFBMEIsb0JBQUFyRCxDQUFBLEVBQUFFLENBQUEsUUFBQUcsQ0FBQSxHQUFBSCxDQUFBLENBQUFuQixNQUFBLEVBQUF3QixDQUFBLEdBQUFQLENBQUEsQ0FBQVksUUFBQSxDQUFBUCxDQUFBLE9BQUFFLENBQUEsS0FBQU4sQ0FBQSxTQUFBQyxDQUFBLENBQUFrRCxRQUFBLHFCQUFBL0MsQ0FBQSxJQUFBTCxDQUFBLENBQUFZLFFBQUEsZUFBQVYsQ0FBQSxDQUFBbkIsTUFBQSxhQUFBbUIsQ0FBQSxDQUFBeUIsR0FBQSxHQUFBMUIsQ0FBQSxFQUFBb0QsbUJBQUEsQ0FBQXJELENBQUEsRUFBQUUsQ0FBQSxlQUFBQSxDQUFBLENBQUFuQixNQUFBLGtCQUFBc0IsQ0FBQSxLQUFBSCxDQUFBLENBQUFuQixNQUFBLFlBQUFtQixDQUFBLENBQUF5QixHQUFBLE9BQUErQixTQUFBLHVDQUFBckQsQ0FBQSxpQkFBQTRCLENBQUEsTUFBQXhCLENBQUEsR0FBQWlCLFFBQUEsQ0FBQW5CLENBQUEsRUFBQVAsQ0FBQSxDQUFBWSxRQUFBLEVBQUFWLENBQUEsQ0FBQXlCLEdBQUEsbUJBQUFsQixDQUFBLENBQUFYLElBQUEsU0FBQUksQ0FBQSxDQUFBbkIsTUFBQSxZQUFBbUIsQ0FBQSxDQUFBeUIsR0FBQSxHQUFBbEIsQ0FBQSxDQUFBa0IsR0FBQSxFQUFBekIsQ0FBQSxDQUFBa0QsUUFBQSxTQUFBbkIsQ0FBQSxNQUFBdEIsQ0FBQSxHQUFBRixDQUFBLENBQUFrQixHQUFBLFNBQUFoQixDQUFBLEdBQUFBLENBQUEsQ0FBQXdDLElBQUEsSUFBQWpELENBQUEsQ0FBQUYsQ0FBQSxDQUFBMkQsVUFBQSxJQUFBaEQsQ0FBQSxDQUFBbEIsS0FBQSxFQUFBUyxDQUFBLENBQUEwRCxJQUFBLEdBQUE1RCxDQUFBLENBQUE2RCxPQUFBLGVBQUEzRCxDQUFBLENBQUFuQixNQUFBLEtBQUFtQixDQUFBLENBQUFuQixNQUFBLFdBQUFtQixDQUFBLENBQUF5QixHQUFBLEdBQUExQixDQUFBLEdBQUFDLENBQUEsQ0FBQWtELFFBQUEsU0FBQW5CLENBQUEsSUFBQXRCLENBQUEsSUFBQVQsQ0FBQSxDQUFBbkIsTUFBQSxZQUFBbUIsQ0FBQSxDQUFBeUIsR0FBQSxPQUFBK0IsU0FBQSxzQ0FBQXhELENBQUEsQ0FBQWtELFFBQUEsU0FBQW5CLENBQUEsY0FBQTZCLGFBQUE3RCxDQUFBLFFBQUFELENBQUEsS0FBQStELE1BQUEsRUFBQTlELENBQUEsWUFBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFnRSxRQUFBLEdBQUEvRCxDQUFBLFdBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBaUUsVUFBQSxHQUFBaEUsQ0FBQSxLQUFBRCxDQUFBLENBQUFrRSxRQUFBLEdBQUFqRSxDQUFBLFdBQUFrRSxVQUFBLENBQUFDLElBQUEsQ0FBQXBFLENBQUEsY0FBQXFFLGNBQUFwRSxDQUFBLFFBQUFELENBQUEsR0FBQUMsQ0FBQSxDQUFBcUUsVUFBQSxRQUFBdEUsQ0FBQSxDQUFBRixJQUFBLG9CQUFBRSxDQUFBLENBQUEyQixHQUFBLEVBQUExQixDQUFBLENBQUFxRSxVQUFBLEdBQUF0RSxDQUFBLGFBQUF3QixRQUFBdkIsQ0FBQSxTQUFBa0UsVUFBQSxNQUFBSixNQUFBLGFBQUE5RCxDQUFBLENBQUFuRCxPQUFBLENBQUFnSCxZQUFBLGNBQUFTLEtBQUEsaUJBQUEvQixPQUFBeEMsQ0FBQSxRQUFBQSxDQUFBLFdBQUFBLENBQUEsUUFBQUUsQ0FBQSxHQUFBRixDQUFBLENBQUFXLENBQUEsT0FBQVQsQ0FBQSxTQUFBQSxDQUFBLENBQUEwQixJQUFBLENBQUE1QixDQUFBLDRCQUFBQSxDQUFBLENBQUE0RCxJQUFBLFNBQUE1RCxDQUFBLE9BQUF3RSxLQUFBLENBQUF4RSxDQUFBLENBQUF5RSxNQUFBLFNBQUFsRSxDQUFBLE9BQUFFLENBQUEsWUFBQW1ELEtBQUEsYUFBQXJELENBQUEsR0FBQVAsQ0FBQSxDQUFBeUUsTUFBQSxPQUFBcEUsQ0FBQSxDQUFBdUIsSUFBQSxDQUFBNUIsQ0FBQSxFQUFBTyxDQUFBLFVBQUFxRCxJQUFBLENBQUFuRSxLQUFBLEdBQUFPLENBQUEsQ0FBQU8sQ0FBQSxHQUFBcUQsSUFBQSxDQUFBVCxJQUFBLE9BQUFTLElBQUEsU0FBQUEsSUFBQSxDQUFBbkUsS0FBQSxHQUFBUSxDQUFBLEVBQUEyRCxJQUFBLENBQUFULElBQUEsT0FBQVMsSUFBQSxZQUFBbkQsQ0FBQSxDQUFBbUQsSUFBQSxHQUFBbkQsQ0FBQSxnQkFBQWlELFNBQUEsQ0FBQVosT0FBQSxDQUFBOUMsQ0FBQSxrQ0FBQWtDLGlCQUFBLENBQUE5QixTQUFBLEdBQUErQiwwQkFBQSxFQUFBNUIsQ0FBQSxDQUFBa0MsQ0FBQSxtQkFBQWhELEtBQUEsRUFBQTBDLDBCQUFBLEVBQUFoQixZQUFBLFNBQUFaLENBQUEsQ0FBQTRCLDBCQUFBLG1CQUFBMUMsS0FBQSxFQUFBeUMsaUJBQUEsRUFBQWYsWUFBQSxTQUFBZSxpQkFBQSxDQUFBd0MsV0FBQSxHQUFBekQsTUFBQSxDQUFBa0IsMEJBQUEsRUFBQXBCLENBQUEsd0JBQUFmLENBQUEsQ0FBQTJFLG1CQUFBLGFBQUExRSxDQUFBLFFBQUFELENBQUEsd0JBQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBMkUsV0FBQSxXQUFBNUUsQ0FBQSxLQUFBQSxDQUFBLEtBQUFrQyxpQkFBQSw2QkFBQWxDLENBQUEsQ0FBQTBFLFdBQUEsSUFBQTFFLENBQUEsQ0FBQXZCLElBQUEsT0FBQXVCLENBQUEsQ0FBQTZFLElBQUEsYUFBQTVFLENBQUEsV0FBQUUsTUFBQSxDQUFBMkUsY0FBQSxHQUFBM0UsTUFBQSxDQUFBMkUsY0FBQSxDQUFBN0UsQ0FBQSxFQUFBa0MsMEJBQUEsS0FBQWxDLENBQUEsQ0FBQThFLFNBQUEsR0FBQTVDLDBCQUFBLEVBQUFsQixNQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEseUJBQUFkLENBQUEsQ0FBQUcsU0FBQSxHQUFBRCxNQUFBLENBQUFvQixNQUFBLENBQUFrQixDQUFBLEdBQUF4QyxDQUFBLEtBQUFELENBQUEsQ0FBQWdGLEtBQUEsYUFBQS9FLENBQUEsYUFBQStDLE9BQUEsRUFBQS9DLENBQUEsT0FBQXlDLHFCQUFBLENBQUFFLGFBQUEsQ0FBQXhDLFNBQUEsR0FBQWEsTUFBQSxDQUFBMkIsYUFBQSxDQUFBeEMsU0FBQSxFQUFBUyxDQUFBLGlDQUFBYixDQUFBLENBQUE0QyxhQUFBLEdBQUFBLGFBQUEsRUFBQTVDLENBQUEsQ0FBQWlGLEtBQUEsYUFBQWhGLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxlQUFBQSxDQUFBLEtBQUFBLENBQUEsR0FBQXlFLE9BQUEsT0FBQXZFLENBQUEsT0FBQWlDLGFBQUEsQ0FBQXZCLElBQUEsQ0FBQXBCLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsR0FBQUUsQ0FBQSxVQUFBVCxDQUFBLENBQUEyRSxtQkFBQSxDQUFBekUsQ0FBQSxJQUFBUyxDQUFBLEdBQUFBLENBQUEsQ0FBQWlELElBQUEsR0FBQXZHLElBQUEsV0FBQTRDLENBQUEsV0FBQUEsQ0FBQSxDQUFBa0QsSUFBQSxHQUFBbEQsQ0FBQSxDQUFBUixLQUFBLEdBQUFrQixDQUFBLENBQUFpRCxJQUFBLFdBQUFsQixxQkFBQSxDQUFBRCxDQUFBLEdBQUF4QixNQUFBLENBQUF3QixDQUFBLEVBQUExQixDQUFBLGdCQUFBRSxNQUFBLENBQUF3QixDQUFBLEVBQUE5QixDQUFBLGlDQUFBTSxNQUFBLENBQUF3QixDQUFBLDZEQUFBekMsQ0FBQSxDQUFBbUYsSUFBQSxhQUFBbEYsQ0FBQSxRQUFBRCxDQUFBLEdBQUFHLE1BQUEsQ0FBQUYsQ0FBQSxHQUFBQyxDQUFBLGdCQUFBRyxDQUFBLElBQUFMLENBQUEsRUFBQUUsQ0FBQSxDQUFBa0UsSUFBQSxDQUFBL0QsQ0FBQSxVQUFBSCxDQUFBLENBQUFrRixPQUFBLGFBQUF4QixLQUFBLFdBQUExRCxDQUFBLENBQUF1RSxNQUFBLFNBQUF4RSxDQUFBLEdBQUFDLENBQUEsQ0FBQW1GLEdBQUEsUUFBQXBGLENBQUEsSUFBQUQsQ0FBQSxTQUFBNEQsSUFBQSxDQUFBbkUsS0FBQSxHQUFBUSxDQUFBLEVBQUEyRCxJQUFBLENBQUFULElBQUEsT0FBQVMsSUFBQSxXQUFBQSxJQUFBLENBQUFULElBQUEsT0FBQVMsSUFBQSxRQUFBNUQsQ0FBQSxDQUFBd0MsTUFBQSxHQUFBQSxNQUFBLEVBQUFoQixPQUFBLENBQUFwQixTQUFBLEtBQUF3RSxXQUFBLEVBQUFwRCxPQUFBLEVBQUErQyxLQUFBLFdBQUFBLE1BQUF2RSxDQUFBLGFBQUFzRixJQUFBLFdBQUExQixJQUFBLFdBQUFOLElBQUEsUUFBQUMsS0FBQSxHQUFBdEQsQ0FBQSxPQUFBa0QsSUFBQSxZQUFBQyxRQUFBLGNBQUFyRSxNQUFBLGdCQUFBNEMsR0FBQSxHQUFBMUIsQ0FBQSxPQUFBa0UsVUFBQSxDQUFBckgsT0FBQSxDQUFBdUgsYUFBQSxJQUFBckUsQ0FBQSxXQUFBRSxDQUFBLGtCQUFBQSxDQUFBLENBQUFxRixNQUFBLE9BQUFsRixDQUFBLENBQUF1QixJQUFBLE9BQUExQixDQUFBLE1BQUFzRSxLQUFBLEVBQUF0RSxDQUFBLENBQUFzRixLQUFBLGNBQUF0RixDQUFBLElBQUFELENBQUEsTUFBQXdGLElBQUEsV0FBQUEsS0FBQSxTQUFBdEMsSUFBQSxXQUFBbEQsQ0FBQSxRQUFBa0UsVUFBQSxJQUFBRyxVQUFBLGtCQUFBckUsQ0FBQSxDQUFBSCxJQUFBLFFBQUFHLENBQUEsQ0FBQTBCLEdBQUEsY0FBQStELElBQUEsS0FBQWxDLGlCQUFBLFdBQUFBLGtCQUFBeEQsQ0FBQSxhQUFBbUQsSUFBQSxRQUFBbkQsQ0FBQSxNQUFBRSxDQUFBLGtCQUFBeUYsT0FBQXRGLENBQUEsRUFBQUUsQ0FBQSxXQUFBSSxDQUFBLENBQUFiLElBQUEsWUFBQWEsQ0FBQSxDQUFBZ0IsR0FBQSxHQUFBM0IsQ0FBQSxFQUFBRSxDQUFBLENBQUEwRCxJQUFBLEdBQUF2RCxDQUFBLEVBQUFFLENBQUEsS0FBQUwsQ0FBQSxDQUFBbkIsTUFBQSxXQUFBbUIsQ0FBQSxDQUFBeUIsR0FBQSxHQUFBMUIsQ0FBQSxLQUFBTSxDQUFBLGFBQUFBLENBQUEsUUFBQTRELFVBQUEsQ0FBQU0sTUFBQSxNQUFBbEUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQTBELFVBQUEsQ0FBQTVELENBQUEsR0FBQUksQ0FBQSxHQUFBRixDQUFBLENBQUE2RCxVQUFBLGlCQUFBN0QsQ0FBQSxDQUFBc0QsTUFBQSxTQUFBNEIsTUFBQSxhQUFBbEYsQ0FBQSxDQUFBc0QsTUFBQSxTQUFBdUIsSUFBQSxRQUFBekUsQ0FBQSxHQUFBUixDQUFBLENBQUF1QixJQUFBLENBQUFuQixDQUFBLGVBQUFNLENBQUEsR0FBQVYsQ0FBQSxDQUFBdUIsSUFBQSxDQUFBbkIsQ0FBQSxxQkFBQUksQ0FBQSxJQUFBRSxDQUFBLGFBQUF1RSxJQUFBLEdBQUE3RSxDQUFBLENBQUF1RCxRQUFBLFNBQUEyQixNQUFBLENBQUFsRixDQUFBLENBQUF1RCxRQUFBLGdCQUFBc0IsSUFBQSxHQUFBN0UsQ0FBQSxDQUFBd0QsVUFBQSxTQUFBMEIsTUFBQSxDQUFBbEYsQ0FBQSxDQUFBd0QsVUFBQSxjQUFBcEQsQ0FBQSxhQUFBeUUsSUFBQSxHQUFBN0UsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBMkIsTUFBQSxDQUFBbEYsQ0FBQSxDQUFBdUQsUUFBQSxxQkFBQWpELENBQUEsUUFBQW1DLEtBQUEscURBQUFvQyxJQUFBLEdBQUE3RSxDQUFBLENBQUF3RCxVQUFBLFNBQUEwQixNQUFBLENBQUFsRixDQUFBLENBQUF3RCxVQUFBLFlBQUFSLE1BQUEsV0FBQUEsT0FBQXhELENBQUEsRUFBQUQsQ0FBQSxhQUFBRSxDQUFBLFFBQUFpRSxVQUFBLENBQUFNLE1BQUEsTUFBQXZFLENBQUEsU0FBQUEsQ0FBQSxRQUFBSyxDQUFBLFFBQUE0RCxVQUFBLENBQUFqRSxDQUFBLE9BQUFLLENBQUEsQ0FBQXdELE1BQUEsU0FBQXVCLElBQUEsSUFBQWpGLENBQUEsQ0FBQXVCLElBQUEsQ0FBQXJCLENBQUEsd0JBQUErRSxJQUFBLEdBQUEvRSxDQUFBLENBQUEwRCxVQUFBLFFBQUF4RCxDQUFBLEdBQUFGLENBQUEsYUFBQUUsQ0FBQSxpQkFBQVIsQ0FBQSxtQkFBQUEsQ0FBQSxLQUFBUSxDQUFBLENBQUFzRCxNQUFBLElBQUEvRCxDQUFBLElBQUFBLENBQUEsSUFBQVMsQ0FBQSxDQUFBd0QsVUFBQSxLQUFBeEQsQ0FBQSxjQUFBRSxDQUFBLEdBQUFGLENBQUEsR0FBQUEsQ0FBQSxDQUFBNkQsVUFBQSxjQUFBM0QsQ0FBQSxDQUFBYixJQUFBLEdBQUFHLENBQUEsRUFBQVUsQ0FBQSxDQUFBZ0IsR0FBQSxHQUFBM0IsQ0FBQSxFQUFBUyxDQUFBLFNBQUExQixNQUFBLGdCQUFBNkUsSUFBQSxHQUFBbkQsQ0FBQSxDQUFBd0QsVUFBQSxFQUFBaEMsQ0FBQSxTQUFBMkQsUUFBQSxDQUFBakYsQ0FBQSxNQUFBaUYsUUFBQSxXQUFBQSxTQUFBM0YsQ0FBQSxFQUFBRCxDQUFBLG9CQUFBQyxDQUFBLENBQUFILElBQUEsUUFBQUcsQ0FBQSxDQUFBMEIsR0FBQSxxQkFBQTFCLENBQUEsQ0FBQUgsSUFBQSxtQkFBQUcsQ0FBQSxDQUFBSCxJQUFBLFFBQUE4RCxJQUFBLEdBQUEzRCxDQUFBLENBQUEwQixHQUFBLGdCQUFBMUIsQ0FBQSxDQUFBSCxJQUFBLFNBQUE0RixJQUFBLFFBQUEvRCxHQUFBLEdBQUExQixDQUFBLENBQUEwQixHQUFBLE9BQUE1QyxNQUFBLGtCQUFBNkUsSUFBQSx5QkFBQTNELENBQUEsQ0FBQUgsSUFBQSxJQUFBRSxDQUFBLFVBQUE0RCxJQUFBLEdBQUE1RCxDQUFBLEdBQUFpQyxDQUFBLEtBQUE0RCxNQUFBLFdBQUFBLE9BQUE1RixDQUFBLGFBQUFELENBQUEsUUFBQW1FLFVBQUEsQ0FBQU0sTUFBQSxNQUFBekUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQWlFLFVBQUEsQ0FBQW5FLENBQUEsT0FBQUUsQ0FBQSxDQUFBK0QsVUFBQSxLQUFBaEUsQ0FBQSxjQUFBMkYsUUFBQSxDQUFBMUYsQ0FBQSxDQUFBb0UsVUFBQSxFQUFBcEUsQ0FBQSxDQUFBZ0UsUUFBQSxHQUFBRyxhQUFBLENBQUFuRSxDQUFBLEdBQUErQixDQUFBLHlCQUFBNkQsT0FBQTdGLENBQUEsYUFBQUQsQ0FBQSxRQUFBbUUsVUFBQSxDQUFBTSxNQUFBLE1BQUF6RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBaUUsVUFBQSxDQUFBbkUsQ0FBQSxPQUFBRSxDQUFBLENBQUE2RCxNQUFBLEtBQUE5RCxDQUFBLFFBQUFJLENBQUEsR0FBQUgsQ0FBQSxDQUFBb0UsVUFBQSxrQkFBQWpFLENBQUEsQ0FBQVAsSUFBQSxRQUFBUyxDQUFBLEdBQUFGLENBQUEsQ0FBQXNCLEdBQUEsRUFBQTBDLGFBQUEsQ0FBQW5FLENBQUEsWUFBQUssQ0FBQSxZQUFBMkMsS0FBQSw4QkFBQTZDLGFBQUEsV0FBQUEsY0FBQS9GLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGdCQUFBK0MsUUFBQSxLQUFBeEMsUUFBQSxFQUFBNEIsTUFBQSxDQUFBeEMsQ0FBQSxHQUFBMkQsVUFBQSxFQUFBekQsQ0FBQSxFQUFBMkQsT0FBQSxFQUFBeEQsQ0FBQSxvQkFBQXRCLE1BQUEsVUFBQTRDLEdBQUEsR0FBQTFCLENBQUEsR0FBQWdDLENBQUEsT0FBQWpDLENBQUE7QUFBQSxTQUFBZ0csbUJBQUEzRixDQUFBLEVBQUFKLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFLLENBQUEsRUFBQUksQ0FBQSxFQUFBRSxDQUFBLGNBQUFKLENBQUEsR0FBQUosQ0FBQSxDQUFBTSxDQUFBLEVBQUFFLENBQUEsR0FBQUUsQ0FBQSxHQUFBTixDQUFBLENBQUFoQixLQUFBLFdBQUFZLENBQUEsZ0JBQUFMLENBQUEsQ0FBQUssQ0FBQSxLQUFBSSxDQUFBLENBQUEwQyxJQUFBLEdBQUFsRCxDQUFBLENBQUFjLENBQUEsSUFBQW1FLE9BQUEsQ0FBQW5DLE9BQUEsQ0FBQWhDLENBQUEsRUFBQTFELElBQUEsQ0FBQTZDLENBQUEsRUFBQUssQ0FBQTtBQUFBLFNBQUEwRixrQkFBQTVGLENBQUEsNkJBQUFKLENBQUEsU0FBQUQsQ0FBQSxHQUFBWCxTQUFBLGFBQUE2RixPQUFBLFdBQUFoRixDQUFBLEVBQUFLLENBQUEsUUFBQUksQ0FBQSxHQUFBTixDQUFBLENBQUE2RixLQUFBLENBQUFqRyxDQUFBLEVBQUFELENBQUEsWUFBQW1HLE1BQUE5RixDQUFBLElBQUEyRixrQkFBQSxDQUFBckYsQ0FBQSxFQUFBVCxDQUFBLEVBQUFLLENBQUEsRUFBQTRGLEtBQUEsRUFBQUMsTUFBQSxVQUFBL0YsQ0FBQSxjQUFBK0YsT0FBQS9GLENBQUEsSUFBQTJGLGtCQUFBLENBQUFyRixDQUFBLEVBQUFULENBQUEsRUFBQUssQ0FBQSxFQUFBNEYsS0FBQSxFQUFBQyxNQUFBLFdBQUEvRixDQUFBLEtBQUE4RixLQUFBO0FBQUEsU0FBQXJELFFBQUF2QyxDQUFBLHNDQUFBdUMsT0FBQSx3QkFBQXBDLE1BQUEsdUJBQUFBLE1BQUEsQ0FBQUUsUUFBQSxhQUFBTCxDQUFBLGtCQUFBQSxDQUFBLGdCQUFBQSxDQUFBLFdBQUFBLENBQUEseUJBQUFHLE1BQUEsSUFBQUgsQ0FBQSxDQUFBcUUsV0FBQSxLQUFBbEUsTUFBQSxJQUFBSCxDQUFBLEtBQUFHLE1BQUEsQ0FBQU4sU0FBQSxxQkFBQUcsQ0FBQSxLQUFBdUMsT0FBQSxDQUFBdkMsQ0FBQTtBQURBLDZCQUFlLHNDQUFZO0VBQ3ZCM0MsT0FBTyxDQUFDVSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQzs7RUFFOUJSLENBQUMsQ0FBQ25CLFFBQVEsQ0FBQyxDQUFDb0IsS0FBSyxDQUFDLFlBQVk7SUFDMUJILE9BQU8sQ0FBQ1UsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUMvQixJQUFJK0gsS0FBSyxHQUFHLEVBQUU7SUFDZCxTQUFTQyxlQUFlQSxDQUFDQyxLQUFLLEVBQUVySSxTQUFTLEVBQUU7TUFDdkNkLEtBQUssQ0FBQ21KLEtBQUssR0FBR3JJLFNBQVMsQ0FBQyxDQUNuQmIsSUFBSSxDQUFDLFVBQUFDLFFBQVE7UUFBQSxPQUFJQSxRQUFRLENBQUNrSixJQUFJLENBQUMsQ0FBQztNQUFBLEVBQUMsQ0FDakNuSixJQUFJLENBQUMsVUFBQW9KLElBQUksRUFBSTtRQUNWN0ksT0FBTyxDQUFDVSxHQUFHLENBQUMsZUFBZSxFQUFFbUksSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJQyxZQUFZLEdBQUc1SSxDQUFDLENBQUMsOEJBQThCLENBQUM7UUFDcEQ0SSxZQUFZLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QkQsWUFBWSxDQUFDRSxNQUFNLENBQUMsa0RBQWtELENBQUM7UUFDdkVILElBQUksQ0FBQ0ksT0FBTyxDQUFDL0osT0FBTyxDQUFDLFVBQVVnSyxNQUFNLEVBQUU7VUFDbkMsSUFBSUMsTUFBTSxHQUFHakosQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUNLLElBQUksQ0FBQyxPQUFPLEVBQUUySSxNQUFNLENBQUNFLEVBQUUsQ0FBQyxDQUFDekosSUFBSSxDQUFDdUosTUFBTSxDQUFDckksSUFBSSxDQUFDO1VBQzlFYixPQUFPLENBQUNVLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRXlJLE1BQU0sQ0FBQyxDQUFDLENBQUM7VUFDMUNMLFlBQVksQ0FBQ0UsTUFBTSxDQUFDRyxNQUFNLENBQUM7VUFDM0JWLEtBQUssQ0FBQ2pDLElBQUksQ0FBQzBDLE1BQU0sQ0FBQyxDQUFDLENBQUM7VUFDcEJsSixPQUFPLENBQUNVLEdBQUcsQ0FBQ21JLElBQUksQ0FBQztRQUNyQixDQUFDLENBQUM7TUFDTixDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUE5SSxLQUFLLEVBQUk7UUFDWkMsT0FBTyxDQUFDRCxLQUFLLENBQUMsc0JBQXNCLEVBQUVBLEtBQUssQ0FBQyxDQUFDLENBQUM7TUFDbEQsQ0FBQyxDQUFDO0lBQ1Y7SUFFQUcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVWpCLEtBQUssRUFBRTtNQUMvQyxJQUFNa0IsU0FBUyxHQUFHbEIsS0FBSyxDQUFDaUssTUFBTSxDQUFDeEgsS0FBSztNQUNwQzdCLE9BQU8sQ0FBQ1UsR0FBRyxDQUFDLG1CQUFtQixFQUFFSixTQUFTLENBQUM7TUFFM0NvSSxlQUFlLENBQUMsbUJBQW1CLEVBQUVwSSxTQUFTLENBQUM7TUFDL0NvSSxlQUFlLENBQUMsdUJBQXVCLEVBQUVwSSxTQUFTLENBQUM7SUFDdkQsQ0FBQyxDQUFDO0lBRUZKLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDRyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMrQixDQUFDLEVBQUs7TUFDckNBLENBQUMsQ0FBQy9DLGNBQWMsQ0FBQyxDQUFDO01BQ2xCVyxPQUFPLENBQUNVLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7TUFDOUNWLE9BQU8sQ0FBQ1UsR0FBRyxDQUFBd0UsT0FBQSxDQUFTaEYsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUNVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNuRCxJQUFNMEksUUFBUSxHQUFHO1FBQ2JDLGNBQWMsRUFBRXJKLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDVSxHQUFHLENBQUMsQ0FBQztRQUN2RDRJLGVBQWUsRUFBRXRKLENBQUMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDVSxHQUFHLENBQUMsQ0FBQztRQUN6RDZJLElBQUksRUFBRXZKLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDVSxHQUFHLENBQUMsQ0FBQztRQUNuQzhJLGFBQWEsRUFBRXhKLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDVSxHQUFHLENBQUMsQ0FBQztRQUN0RCtJLFFBQVEsRUFBRXpKLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDVSxHQUFHLENBQUM7TUFDL0MsQ0FBQztNQUVEWixPQUFPLENBQUNVLEdBQUcsQ0FBQyxZQUFZLEVBQUU0SSxRQUFRLENBQUMsQ0FBQyxDQUFDO01BQUEsU0FDdEJNLFNBQVNBLENBQUE7UUFBQSxPQUFBQyxVQUFBLENBQUF2QixLQUFBLE9BQUE3RyxTQUFBO01BQUE7TUFBQSxTQUFBb0ksV0FBQTtRQUFBQSxVQUFBLEdBQUF4QixpQkFBQSxjQUFBbEcsbUJBQUEsR0FBQThFLElBQUEsQ0FBeEIsU0FBQTZDLFFBQUE7VUFBQSxJQUFBQyxVQUFBLEVBQUFySyxRQUFBLEVBQUFtSixJQUFBO1VBQUEsT0FBQTFHLG1CQUFBLEdBQUFzQixJQUFBLFVBQUF1RyxTQUFBQyxRQUFBO1lBQUEsa0JBQUFBLFFBQUEsQ0FBQXZDLElBQUEsR0FBQXVDLFFBQUEsQ0FBQWpFLElBQUE7Y0FBQTtnQkFFUStELFVBQVUsR0FBR2hMLFFBQVEsQ0FBQ2MsYUFBYSxDQUFDLFdBQVcsQ0FBQztnQkFBQW9LLFFBQUEsQ0FBQXZDLElBQUE7Z0JBQUF1QyxRQUFBLENBQUFqRSxJQUFBO2dCQUFBLE9BRzNCeEcsS0FBSyxDQUFDLGtCQUFrQixFQUFFO2tCQUMzQzBLLFFBQVEsRUFBRSxNQUFNO2tCQUNoQnJCLElBQUksRUFBRTtvQkFBRUEsSUFBSSxFQUFFUztrQkFBUyxDQUFDO2tCQUN4Qm5JLE1BQU0sRUFBRSxNQUFNO2tCQUNkZ0osT0FBTyxFQUFFO29CQUNMLGtCQUFrQixFQUFFLGdCQUFnQjtvQkFDcEMsY0FBYyxFQUFFO2tCQUNwQixDQUFDO2tCQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO29CQUFFekIsSUFBSSxFQUFFUztrQkFBUyxDQUFDO2dCQUUzQyxDQUFDLENBQUM7Y0FBQTtnQkFWRTVKLFFBQVEsR0FBQXVLLFFBQUEsQ0FBQXZFLElBQUE7Z0JBQUF1RSxRQUFBLENBQUFqRSxJQUFBO2dCQUFBLE9BV0t0RyxRQUFRLENBQUNrSixJQUFJLENBQUMsQ0FBQztjQUFBO2dCQUE1QkMsSUFBSSxHQUFBb0IsUUFBQSxDQUFBdkUsSUFBQTtnQkFDUjFGLE9BQU8sQ0FBQ1UsR0FBRyxDQUFDLGNBQWMsRUFBRW1JLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ25Da0IsVUFBVSxDQUFDakssU0FBUyxHQUFHdUssSUFBSSxDQUFDQyxTQUFTLENBQUN6QixJQUFJLENBQUM7O2dCQUUzQztnQkFBQW9CLFFBQUEsQ0FBQWpFLElBQUE7Z0JBQUE7Y0FBQTtnQkFBQWlFLFFBQUEsQ0FBQXZDLElBQUE7Z0JBQUF1QyxRQUFBLENBQUFNLEVBQUEsR0FBQU4sUUFBQTtnQkFHQWpLLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLDZDQUE2QyxFQUFBa0ssUUFBQSxDQUFBTSxFQUFPLENBQUM7Y0FBQztjQUFBO2dCQUFBLE9BQUFOLFFBQUEsQ0FBQXBDLElBQUE7WUFBQTtVQUFBLEdBQUFpQyxPQUFBO1FBQUEsQ0FFM0U7UUFBQSxPQUFBRCxVQUFBLENBQUF2QixLQUFBLE9BQUE3RyxTQUFBO01BQUE7TUFDRG1JLFNBQVMsQ0FBQyxDQUFDO0lBRWYsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBSTlFZ0Q7QUFDdkI7QUFBQSxJQUVuQnVDLGdCQUFnQiwwQkFBQTdLLFdBQUE7RUFBQSxTQUFBNkssaUJBQUE7SUFBQTVLLGVBQUEsT0FBQTRLLGdCQUFBO0lBQUEsT0FBQTNLLFVBQUEsT0FBQTJLLGdCQUFBLEVBQUExSyxTQUFBO0VBQUE7RUFBQUMsU0FBQSxDQUFBeUssZ0JBQUEsRUFBQTdLLFdBQUE7RUFBQSxPQUFBSyxZQUFBLENBQUF3SyxnQkFBQTtBQUFBLEVBQVMvSywwREFBVTs7Ozs7Ozs7Ozs7OztBQ0h6QyIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9hZG1pbmlzdHJhdG9yRGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9hbmltYWxIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9hdmlzRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvbG9naW5mb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9yZXBwb3J0TG9ncy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUmF0aW5nLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXR1cmJvL2Fzc2V0cy9kaXN0L3R1cmJvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz84ZjU5Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hZG1pbmlzdHJhdG9yRGFzaGJvYXJkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvYWRtaW5pc3RyYXRvckRhc2hib2FyZC5qc1wiLFxuXHRcIi4vYW5pbWFsSGFuZGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2FuaW1hbEhhbmRsZXIuanNcIixcblx0XCIuL2F2aXNGb3JtVmFsaWRhdG9yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvYXZpc0Zvcm1WYWxpZGF0b3IuanNcIixcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9sb2dpbmZvcm1WYWxpZGF0b3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9sb2dpbmZvcm1WYWxpZGF0b3IuanNcIixcblx0XCIuL3JlcHBvcnRMb2dzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvcmVwcG9ydExvZ3MuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJpbXBvcnQgY29udHJvbGxlcl8wIGZyb20gJ0BzeW1mb255L3V4LXR1cmJvL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC10dXJiby0tdHVyYm8tY29yZSc6IGNvbnRyb2xsZXJfMCxcbn07IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWFkbWluJykuZm9yRWFjaChmdW5jdGlvbiAobGluaykge1xuICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgdGFyZ2V0VXJsID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgZmV0Y2godGFyZ2V0VXJsKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAudGhlbihodG1sID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50LWFyZWEnKS5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUud2FybignU29tZXRoaW5nIHdlbnQgd3JvbmcuJywgZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5jYXJkLWFuaW1hbC1jb250YWluZXInKS5oaWRlKCk7IC8vIE1hc3F1ZXIgdG91dGVzIGxlcyBkaXZzIGF1IGNoYXJnZW1lbnQgZGUgbGEgcGFnZVxuXG4gICAgICAgICQoJy5oYWJpdGF0LWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBoYWJpdGF0SWQgPSAkKHRoaXMpLmF0dHIoJ2lkJykuc3BsaXQoJy0nKVsxXTtcbiAgICAgICAgICAgICQoJy5jYXJkLWFuaW1hbC1jb250YWluZXInKS5oaWRlKCk7IC8vIE1hc3F1ZXIgdG91dGVzIGxlcyBkaXZzXG4gICAgICAgICAgICAkKCcjZGlzcGxIYWJpdGF0LScgKyBoYWJpdGF0SWQpLnNob3coKTsgLy8gQWZmaWNoZXIgbGEgZGl2IGNvcnJlc3BvbmRhbnRlXG4gICAgICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpLmF0dHIoJ2lkJykpO1xuICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICQoJyN0b2dnbGVSYW5nZTEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYWxlcnQoJ2NsaWNrZWQnKTtcclxuICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdiaS1zdGFyLWZpbGwnKTtcclxuICAgIH0pXHJcbiAgICAkKCcjYnRuU3VibWl0TG9naW5mb3JtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2xvZ2luJyxcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9O1xyXG4gICIsImltcG9ydCB7Q29udHJvbGxlcn0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhvbWVDb250cm9sbGVyU2NyaXB0LmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaG9tZUNvbnRyb2xsZXJTY3JpcHQuanMnO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChuYW1lKSB7XG4gICQoJyN0b2dnbGVQYXNzd29yZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB0eXBlID0gJCgnI2lucHV0TG9naW5QYXNzJykuYXR0cigndHlwZScpID09PSAncGFzc3dvcmQnID8gJ3RleHQnIDogJ3Bhc3N3b3JkJztcbiAgICAkKCcjaW5wdXRMb2dpblBhc3MnKS5hdHRyKCd0eXBlJywgdHlwZSk7XG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdiaS1leWUnKTtcbiAgfSlcbiAgJCgnI2J0blN1Ym1pdExvZ2luZm9ybScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvbG9naW4nLFxuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICB9KVxuICB9KVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnU2NyaXB0IGxvYWRlZCcpOyAvLyBEZWJ1Z2dpbmcgc3RhdGVtZW50XG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTY3JpcHQgbG9hZGVkMicpOyAvLyBEZWJ1Z2dpbmcgc3RhdGVtZW50XG4gICAgICAgIGxldCBkYXRhcyA9IFtdO1xuICAgICAgICBmdW5jdGlvbiBmZXRjaEFuaW1hbERhdGEocm91dGUsIGhhYml0YXRJZCkge1xuICAgICAgICAgICAgZmV0Y2gocm91dGUgKyBoYWJpdGF0SWQpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmV0Y2hlZCBkYXRhOicsIGRhdGEpOyAvLyBEZWJ1Z2dpbmcgc3RhdGVtZW50XG4gICAgICAgICAgICAgICAgICAgIHZhciBhbmltYWxTZWxlY3QgPSAkKCcjcmVwcG9ydF9sb2dzX21vZGlmaWVkQW5pbWFsJyk7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hbFNlbGVjdC5lbXB0eSgpOyAvLyBDbGVhciBleGlzdGluZyBvcHRpb25zXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hbFNlbGVjdC5hcHBlbmQoJzxvcHRpb24gdmFsdWU9XCJcIj5Tw6lsZWN0aW9ubmV6IHVuIGFuaW1hbDwvb3B0aW9uPicpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmFuaW1hbHMuZm9yRWFjaChmdW5jdGlvbiAoYW5pbWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3B0aW9uID0gJCgnPG9wdGlvbj48L29wdGlvbj4nKS5hdHRyKCd2YWx1ZScsIGFuaW1hbC5pZCkudGV4dChhbmltYWwubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXBwZW5kaW5nIG9wdGlvbjonLCBvcHRpb24pOyAvLyBEZWJ1Z2dpbmcgc3RhdGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYWxTZWxlY3QuYXBwZW5kKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhcy5wdXNoKGFuaW1hbCk7IC8vIEFkZCBhbmltYWwgdG8gdGhlIGFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTsgLy8gRGVidWdnaW5nIHN0YXRlbWVudFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnI2hhYml0YXQtc2VsZWN0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgY29uc3QgaGFiaXRhdElkID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlbGVjdGVkIGhhYml0YXQ6JywgaGFiaXRhdElkKTtcblxuICAgICAgICAgICAgZmV0Y2hBbmltYWxEYXRhKCcvZW1wbG95ZWUvaGVhbHRoLycsIGhhYml0YXRJZCk7XG4gICAgICAgICAgICBmZXRjaEFuaW1hbERhdGEoJy92ZXRlcmluYXJpYW4vaGVhbHRoLycsIGhhYml0YXRJZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJyNhZGRfcmVwcG9ydF9sb2cnKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FkZCByZXBvcnQgbG9nIGJ1dHRvbiBjbGlja2VkJyk7IC8vIERlYnVnZ2luZyBzdGF0ZW1lbnRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiAoJCgnI3JlcHBvcnRfbG9nc19kYXRlJykudmFsKCkpKTtcbiAgICAgICAgICAgIGNvbnN0IHBvc3REYXRhID0ge1xuICAgICAgICAgICAgICAgIG1vZGlmaWVkQW5pbWFsOiAkKCcjcmVwcG9ydF9sb2dzX21vZGlmaWVkQW5pbWFsJykudmFsKCksXG4gICAgICAgICAgICAgICAgbW9kaWZpZWRIYWJpdGF0OiAkKCcjcmVwcG9ydF9sb2dzX21vZGlmaWVkSGFiaXRhdCcpLnZhbCgpLFxuICAgICAgICAgICAgICAgIGRhdGU6ICQoJyNyZXBwb3J0X2xvZ3NfZGF0ZScpLnZhbCgpLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVkRmllbGQ6ICQoJyNyZXBwb3J0X2xvZ3NfbW9kaWZpZWRfZmllbGQnKS52YWwoKSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogJCgnI3JlcHBvcnRfbG9nc19uZXdfdmFsdWUnKS52YWwoKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Bvc3QgZGF0YTonLCBwb3N0RGF0YSk7IC8vIERlYnVnZ2luZyBzdGF0ZW1lbnRcbiAgICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcblxuICAgICAgICAgICAgICAgIGxldCBkaXZBamF4R2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZXN0LWdldFwiKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvcmVwcG9ydGxvZ3MvbmV3Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgZGF0YTogcG9zdERhdGEgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtd2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGRhdGE6IHBvc3REYXRhIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUG9zdGVkIGRhdGE6JywgZGF0YSk7IC8vIERlYnVnZ2luZyBzdGF0ZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgZGl2QWpheEdldC5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGVzIGRvbm7DqWVzOlwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmV0Y2hEYXRhKCk7XG5cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgJy4vYm9vdHN0cmFwLmpzJztcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuXG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cbiAqL1xuXG4vLyBsb2FkcyB0aGUganF1ZXJ5IHBhY2thZ2UgZnJvbSBub2RlX21vZHVsZXNcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgKiBhcyBUdXJibyBmcm9tICdAaG90d2lyZWQvdHVyYm8nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJhdGluZyBmcm9tICcuL2NvbXBvbmVudHMvUmF0aW5nJztcblR1cmJvLnN0YXJ0KCk7XG5cbi8vIGltcG9ydCB0aGUgZnVuY3Rpb24gZnJvbSBncmVldC5qcyAodGhlIC5qcyBleHRlbnNpb24gaXMgb3B0aW9uYWwpXG4vLyAuLyAob3IgLi4vKSBtZWFucyB0byBsb29rIGZvciBhIGxvY2FsIGZpbGVcbmltcG9ydCBsb2dpbmZvcm1WYWxpZGF0b3IgZnJvbSAnLi9jb250cm9sbGVycy9sb2dpbmZvcm1WYWxpZGF0b3IuanMnO1xuaW1wb3J0IGFkbWluaXN0cmF0b3JEYXNoYm9hcmQgZnJvbSAnLi9jb250cm9sbGVycy9hZG1pbmlzdHJhdG9yRGFzaGJvYXJkLmpzJztcbmltcG9ydCBhbmltYWxIYW5kbGVyIGZyb20gJy4vY29udHJvbGxlcnMvYW5pbWFsSGFuZGxlci5qcyc7XG5pbXBvcnQgcmVwcG9ydExvZ3MgZnJvbSAnLi9jb250cm9sbGVycy9yZXBwb3J0TG9ncy5qcyc7XG5cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIGxvZ2luZm9ybVZhbGlkYXRvcigpO1xuICAgIGFkbWluaXN0cmF0b3JEYXNoYm9hcmQoKTtcbiAgICBhbmltYWxIYW5kbGVyKCk7XG4gICAgcmVwcG9ydExvZ3MoKTtcbiAgICAvLyAkKCdib2R5JykucHJlcGVuZCgnPGgxPicgKyAgKyAnPC9oMT4nKTtcbn0pO1xuXG5SZWFjdERPTS5yZW5kZXIoPFJhdGluZyAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhdGluZy12YWx1ZScpKTsiLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBSYXRpbmcgZnJvbSAnQG11aS9tYXRlcmlhbC9SYXRpbmcnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFzaWNSYXRpbmcoKSB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMik7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29waW5pb25fcmF0aW5nJykudmFsdWUgPSB2YWx1ZTtcbiAgfSwgW3ZhbHVlXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xuICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Bpbmlvbl9yYXRpbmcnKS52YWx1ZSA9IG5ld1ZhbHVlO1xuICB9O1xuICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gIHJldHVybiAoXG4gICAgPFJhdGluZ1xuICAgICAgbmFtZT1cInNpbXBsZS1jb250cm9sbGVkXCJcbiAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgPjwvUmF0aW5nPlxuICApO1xufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5pbXBvcnQgJ0Bob3R3aXJlZC90dXJibyc7XG5cbmNsYXNzIHR1cmJvX2NvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbn1cblxuZXhwb3J0IHsgdHVyYm9fY29udHJvbGxlciBhcyBkZWZhdWx0IH07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJsaW5rIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldFVybCIsImdldEF0dHJpYnV0ZSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwidGV4dCIsImh0bWwiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwiZXJyb3IiLCJjb25zb2xlIiwid2FybiIsIiQiLCJyZWFkeSIsImhpZGUiLCJvbiIsImhhYml0YXRJZCIsImF0dHIiLCJzcGxpdCIsInNob3ciLCJsb2ciLCJmb3JtRGF0YSIsInZhbCIsIm5hbWUiLCJhbGVydCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJDb250cm9sbGVyIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbm5lY3QiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJkZWZhdWx0IiwidHlwZSIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJkYXRhcyIsImZldGNoQW5pbWFsRGF0YSIsInJvdXRlIiwianNvbiIsImRhdGEiLCJhbmltYWxTZWxlY3QiLCJlbXB0eSIsImFwcGVuZCIsImFuaW1hbHMiLCJhbmltYWwiLCJvcHRpb24iLCJpZCIsInRhcmdldCIsInBvc3REYXRhIiwibW9kaWZpZWRBbmltYWwiLCJtb2RpZmllZEhhYml0YXQiLCJkYXRlIiwibW9kaWZpZWRGaWVsZCIsIm5ld1ZhbHVlIiwiZmV0Y2hEYXRhIiwiX2ZldGNoRGF0YSIsIl9jYWxsZWUiLCJkaXZBamF4R2V0IiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImRhdGFUeXBlIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidDAiLCJUdXJibyIsIlJlYWN0IiwiUmVhY3RET00iLCJSYXRpbmciLCJzdGFydCIsImxvZ2luZm9ybVZhbGlkYXRvciIsImFkbWluaXN0cmF0b3JEYXNoYm9hcmQiLCJhbmltYWxIYW5kbGVyIiwicmVwcG9ydExvZ3MiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJCb3giLCJUeXBvZ3JhcGh5IiwiQmFzaWNSYXRpbmciLCJfUmVhY3QkdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsIl9SZWFjdCR1c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNldFZhbHVlIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlIiwib25DaGFuZ2UiLCJ0dXJib19jb250cm9sbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==