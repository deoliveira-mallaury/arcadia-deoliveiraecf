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
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  $(document).ready(function () {
    $('.test').on('click', function (e) {
      e.preventDefault();
      console.log($(this).attr('id'));
      var animalId = $(this).attr('id');
      console.log('test clicked');
      console.log('Fetch request initiated'); // Log the fetch request

      fetch('/repport/logs/new', {
        // Ensure the URL is correct
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          animalId: animalId
        }) // Send animalId as JSON
      }).then(function (response) {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text(); // Change to .text() to see the raw response
      }).then(function (data) {
        console.log('Success:', data);
        // Update the turbo-frame with the new content
        document.getElementById('new_repport_log').innerHTML = data;
      })["catch"](function (error) {
        console.error('Error:', error);
        // Display an error message to the user
        alert('An error occurred: ' + error.message);
      });
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
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  $(document).ready(function () {
    $('.test').on('click', function (e) {
      e.preventDefault();
      console.log($(this).attr('id'));
      var animalId = $(this).attr('id');
      console.log('test clicked');
      console.log('Fetch request initiated'); // Log the fetch request

      fetch('/repport/logs/new', {
        // Ensure the URL is correct
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          animalId: animalId
        }) // Send animalId as JSON
      }).then(function (response) {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text(); // Change to .text() to see the raw response
      }).then(function (data) {
        console.log('Success:', data);
        // Update the turbo-frame with the new content
        document.getElementById('new_repport_log').innerHTML = data;
      })["catch"](function (error) {
        console.error('Error:', error);
        // Display an error message to the user
        alert('An error occurred: ' + error.message);
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUM7SUFDVixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FJbkNnRDtBQUN2QjtBQUFBLElBRW5CNEIsZ0JBQWdCLDBCQUFBbkQsV0FBQTtFQUFBLFNBQUFtRCxpQkFBQTtJQUFBbEQsZUFBQSxPQUFBa0QsZ0JBQUE7SUFBQSxPQUFBakQsVUFBQSxPQUFBaUQsZ0JBQUEsRUFBQWhELFNBQUE7RUFBQTtFQUFBQyxTQUFBLENBQUErQyxnQkFBQSxFQUFBbkQsV0FBQTtFQUFBLE9BQUFLLFlBQUEsQ0FBQThDLGdCQUFBO0FBQUEsRUFBU3JELDBEQUFVOzs7Ozs7Ozs7Ozs7O0FDSHpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2FkbWluaXN0cmF0b3JEYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2FuaW1hbEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2F2aXNGb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9sb2dpbmZvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL3JlcHBvcnRMb2dzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9SYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtdHVyYm8vYXNzZXRzL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hZG1pbmlzdHJhdG9yRGFzaGJvYXJkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvYWRtaW5pc3RyYXRvckRhc2hib2FyZC5qc1wiLFxuXHRcIi4vYW5pbWFsSGFuZGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2FuaW1hbEhhbmRsZXIuanNcIixcblx0XCIuL2F2aXNGb3JtVmFsaWRhdG9yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvYXZpc0Zvcm1WYWxpZGF0b3IuanNcIixcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9sb2dpbmZvcm1WYWxpZGF0b3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9sb2dpbmZvcm1WYWxpZGF0b3IuanNcIixcblx0XCIuL3JlcHBvcnRMb2dzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvcmVwcG9ydExvZ3MuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJpbXBvcnQgY29udHJvbGxlcl8wIGZyb20gJ0BzeW1mb255L3V4LXR1cmJvL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC10dXJiby0tdHVyYm8tY29yZSc6IGNvbnRyb2xsZXJfMCxcbn07IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWFkbWluJykuZm9yRWFjaChmdW5jdGlvbiAobGluaykge1xuICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgdGFyZ2V0VXJsID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgZmV0Y2godGFyZ2V0VXJsKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAudGhlbihodG1sID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50LWFyZWEnKS5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUud2FybignU29tZXRoaW5nIHdlbnQgd3JvbmcuJywgZXJyb3IpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5jYXJkLWFuaW1hbC1jb250YWluZXInKS5oaWRlKCk7IC8vIE1hc3F1ZXIgdG91dGVzIGxlcyBkaXZzIGF1IGNoYXJnZW1lbnQgZGUgbGEgcGFnZVxuXG4gICAgICAgICQoJy5oYWJpdGF0LWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBoYWJpdGF0SWQgPSAkKHRoaXMpLmF0dHIoJ2lkJykuc3BsaXQoJy0nKVsxXTtcbiAgICAgICAgICAgICQoJy5jYXJkLWFuaW1hbC1jb250YWluZXInKS5oaWRlKCk7IC8vIE1hc3F1ZXIgdG91dGVzIGxlcyBkaXZzXG4gICAgICAgICAgICAkKCcjZGlzcGxIYWJpdGF0LScgKyBoYWJpdGF0SWQpLnNob3coKTsgLy8gQWZmaWNoZXIgbGEgZGl2IGNvcnJlc3BvbmRhbnRlXG4gICAgICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpLmF0dHIoJ2lkJykpO1xuICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICQoJyN0b2dnbGVSYW5nZTEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYWxlcnQoJ2NsaWNrZWQnKTtcclxuICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdiaS1zdGFyLWZpbGwnKTtcclxuICAgIH0pXHJcbiAgICAkKCcjYnRuU3VibWl0TG9naW5mb3JtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAnL2xvZ2luJyxcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9O1xyXG4gICIsImltcG9ydCB7Q29udHJvbGxlcn0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhvbWVDb250cm9sbGVyU2NyaXB0LmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaG9tZUNvbnRyb2xsZXJTY3JpcHQuanMnO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChuYW1lKSB7XG4gICQoJyN0b2dnbGVQYXNzd29yZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB0eXBlID0gJCgnI2lucHV0TG9naW5QYXNzJykuYXR0cigndHlwZScpID09PSAncGFzc3dvcmQnID8gJ3RleHQnIDogJ3Bhc3N3b3JkJztcbiAgICAkKCcjaW5wdXRMb2dpblBhc3MnKS5hdHRyKCd0eXBlJywgdHlwZSk7XG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdiaS1leWUnKTtcbiAgfSlcbiAgJCgnI2J0blN1Ym1pdExvZ2luZm9ybScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvbG9naW4nLFxuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICB9KVxuICB9KVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy50ZXN0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCQodGhpcykuYXR0cignaWQnKSk7XG4gICAgICAgICAgICBjb25zdCBhbmltYWxJZCA9ICQodGhpcykuYXR0cignaWQnKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QgY2xpY2tlZCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZldGNoIHJlcXVlc3QgaW5pdGlhdGVkJyk7IC8vIExvZyB0aGUgZmV0Y2ggcmVxdWVzdFxuXG4gICAgICAgICAgICBmZXRjaCgnL3JlcHBvcnQvbG9ncy9uZXcnLCB7IC8vIEVuc3VyZSB0aGUgVVJMIGlzIGNvcnJlY3RcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGFuaW1hbElkOiBhbmltYWxJZCB9KSwgLy8gU2VuZCBhbmltYWxJZCBhcyBKU09OXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpOyAvLyBDaGFuZ2UgdG8gLnRleHQoKSB0byBzZWUgdGhlIHJhdyByZXNwb25zZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzOicsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHR1cmJvLWZyYW1lIHdpdGggdGhlIG5ldyBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdfcmVwcG9ydF9sb2cnKS5pbm5lckhUTUwgPSBkYXRhO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZSB0byB0aGUgdXNlclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnQW4gZXJyb3Igb2NjdXJyZWQ6ICcgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgJy4vYm9vdHN0cmFwLmpzJztcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuXG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cbiAqL1xuXG4vLyBsb2FkcyB0aGUganF1ZXJ5IHBhY2thZ2UgZnJvbSBub2RlX21vZHVsZXNcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgKiBhcyBUdXJibyBmcm9tICdAaG90d2lyZWQvdHVyYm8nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJhdGluZyBmcm9tICcuL2NvbXBvbmVudHMvUmF0aW5nJztcblR1cmJvLnN0YXJ0KCk7XG5cbi8vIGltcG9ydCB0aGUgZnVuY3Rpb24gZnJvbSBncmVldC5qcyAodGhlIC5qcyBleHRlbnNpb24gaXMgb3B0aW9uYWwpXG4vLyAuLyAob3IgLi4vKSBtZWFucyB0byBsb29rIGZvciBhIGxvY2FsIGZpbGVcbmltcG9ydCBsb2dpbmZvcm1WYWxpZGF0b3IgZnJvbSAnLi9jb250cm9sbGVycy9sb2dpbmZvcm1WYWxpZGF0b3IuanMnO1xuaW1wb3J0IGFkbWluaXN0cmF0b3JEYXNoYm9hcmQgZnJvbSAnLi9jb250cm9sbGVycy9hZG1pbmlzdHJhdG9yRGFzaGJvYXJkLmpzJztcbmltcG9ydCBhbmltYWxIYW5kbGVyIGZyb20gJy4vY29udHJvbGxlcnMvYW5pbWFsSGFuZGxlci5qcyc7XG5pbXBvcnQgcmVwcG9ydExvZ3MgZnJvbSAnLi9jb250cm9sbGVycy9yZXBwb3J0TG9ncy5qcyc7XG5cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIGxvZ2luZm9ybVZhbGlkYXRvcigpO1xuICAgIGFkbWluaXN0cmF0b3JEYXNoYm9hcmQoKTtcbiAgICBhbmltYWxIYW5kbGVyKCk7XG4gICAgcmVwcG9ydExvZ3MoKTtcbiAgICAvLyAkKCdib2R5JykucHJlcGVuZCgnPGgxPicgKyAgKyAnPC9oMT4nKTtcbn0pO1xuXG5SZWFjdERPTS5yZW5kZXIoPFJhdGluZyAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhdGluZy12YWx1ZScpKTsiLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBSYXRpbmcgZnJvbSAnQG11aS9tYXRlcmlhbC9SYXRpbmcnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFzaWNSYXRpbmcoKSB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMik7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29waW5pb25fcmF0aW5nJykudmFsdWUgPSB2YWx1ZTtcbiAgfSwgW3ZhbHVlXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xuICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3Bpbmlvbl9yYXRpbmcnKS52YWx1ZSA9IG5ld1ZhbHVlO1xuICB9O1xuICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gIHJldHVybiAoXG4gICAgPFJhdGluZ1xuICAgICAgbmFtZT1cInNpbXBsZS1jb250cm9sbGVkXCJcbiAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgPjwvUmF0aW5nPlxuICApO1xufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5pbXBvcnQgJ0Bob3R3aXJlZC90dXJibyc7XG5cbmNsYXNzIHR1cmJvX2NvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbn1cblxuZXhwb3J0IHsgdHVyYm9fY29udHJvbGxlciBhcyBkZWZhdWx0IH07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJsaW5rIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldFVybCIsImdldEF0dHJpYnV0ZSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwidGV4dCIsImh0bWwiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwiZXJyb3IiLCJjb25zb2xlIiwid2FybiIsIiQiLCJyZWFkeSIsImhpZGUiLCJvbiIsImhhYml0YXRJZCIsImF0dHIiLCJzcGxpdCIsInNob3ciLCJsb2ciLCJmb3JtRGF0YSIsInZhbCIsIm5hbWUiLCJhbGVydCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJDb250cm9sbGVyIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbm5lY3QiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJkZWZhdWx0IiwidHlwZSIsImUiLCJhbmltYWxJZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiRXJyb3IiLCJkYXRhIiwiZ2V0RWxlbWVudEJ5SWQiLCJtZXNzYWdlIiwiVHVyYm8iLCJSZWFjdCIsIlJlYWN0RE9NIiwiUmF0aW5nIiwic3RhcnQiLCJsb2dpbmZvcm1WYWxpZGF0b3IiLCJhZG1pbmlzdHJhdG9yRGFzaGJvYXJkIiwiYW5pbWFsSGFuZGxlciIsInJlcHBvcnRMb2dzIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsIkJveCIsIlR5cG9ncmFwaHkiLCJCYXNpY1JhdGluZyIsIl9SZWFjdCR1c2VTdGF0ZSIsInVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2V0VmFsdWUiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDaGFuZ2UiLCJuZXdWYWx1ZSIsIm9uQ2hhbmdlIiwidHVyYm9fY29udHJvbGxlciJdLCJzb3VyY2VSb290IjoiIn0=