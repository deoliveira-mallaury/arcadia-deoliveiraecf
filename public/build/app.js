(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./administratorDashboard.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/administratorDashboard.js",
	"./avisFormValidator.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/avisFormValidator.js",
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js",
	"./loginformValidator.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/loginformValidator.js"
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
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  $(document).ready(function () {
    $('.nav-admin').click(function (event) {
      event.preventDefault();
      var targetUrl = $(this).data('target');
      $('#content-area').load(targetUrl);
    });
    $('#new-user-form').submit(function (event) {
      event.preventDefault();
      var formData = $(this).serialize();
      $.ajax({
        type: 'POST',
        url: $(this).attr('action'),
        data: formData,
        success: function success(response) {
          if (response.success) {
            var newRow = "\n                      <tr id=\"user-".concat(response.user.id, "\">\n                          <td>").concat(response.user.email, "</td>\n                          <td>").concat(response.user.roles, "</td>\n                          <td>").concat(response.user.name, "</td>\n                          <td>").concat(response.user.lastname, "</td>\n                          <td>\n                              <i class=\"bi bi-trash-fill float-end\" data-bs-toggle=\"modal\" data-bs-target=\"#deleteModal-").concat(response.user.id, "\"></i>\n                          </td>\n                      </tr>\n                  ");
            $('#user-table tbody').append(newRow);
          } else {
            alert('Failed to add user.');
          }
        },
        error: function error() {
          alert('An error occurred.');
        }
      });
    });
  });
}
// function submitFormAndRedirect(userId) {
//   var form = document.getElementById('delete-form-' + userId);
//   var targetUrl = form.querySelector('button[data-target]').getAttribute('data-target');

//   $.ajax({
//     type: 'POST',
//     url: form.action,
//     data: $(form).serialize(),
//     success: function (response) {
//       if (response.success) {
//         $('#user-' + userId).remove();
//         $('#deleteModal-' + userId).modal('hide');
//         window.location.href = targetUrl; // Redirect to the target URL
//       } else {
//         alert('Failed to delete user.');
//       }
//     },
//     error: function () {
//       alert('An error occurred.');
//     }
//   });
// }
// export default function (name) {
//   $('#toggle_user_param').on('click', function (e) {
//     $('#user-pannel').toggle();
//   })
//   $('.bi-trash-fill').on('click', function (e) {
//     e.preventDefault();
//     const formId = $(this).closest('form').attr('id');
//     $('#' + formId).submit();
//   });
// }

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
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
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
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_18__.Controller);


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
/* harmony import */ var _controllers_loginformValidator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/loginformValidator.js */ "./assets/controllers/loginformValidator.js");
/* harmony import */ var _controllers_administratorDashboard_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/administratorDashboard.js */ "./assets/controllers/administratorDashboard.js");


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
  (0,_controllers_loginformValidator_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_controllers_administratorDashboard_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  // $('body').prepend('<h1>' +  + '</h1>');
});

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
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  $(document).ready(function () {
    $('.nav-admin').click(function (event) {
      event.preventDefault();
      var targetUrl = $(this).data('target');
      $('#content-area').load(targetUrl);
    });
    $('#new-user-form').submit(function (event) {
      event.preventDefault();
      var formData = $(this).serialize();
      $.ajax({
        type: 'POST',
        url: $(this).attr('action'),
        data: formData,
        success: function success(response) {
          if (response.success) {
            var newRow = "\n                      <tr id=\"user-".concat(response.user.id, "\">\n                          <td>").concat(response.user.email, "</td>\n                          <td>").concat(response.user.roles, "</td>\n                          <td>").concat(response.user.name, "</td>\n                          <td>").concat(response.user.lastname, "</td>\n                          <td>\n                              <i class=\"bi bi-trash-fill float-end\" data-bs-toggle=\"modal\" data-bs-target=\"#deleteModal-").concat(response.user.id, "\"></i>\n                          </td>\n                      </tr>\n                  ");
            $('#user-table tbody').append(newRow);
          } else {
            alert('Failed to add user.');
          }
        },
        error: function error() {
          alert('An error occurred.');
        }
      });
    });
  });
}
// function submitFormAndRedirect(userId) {
//   var form = document.getElementById('delete-form-' + userId);
//   var targetUrl = form.querySelector('button[data-target]').getAttribute('data-target');

//   $.ajax({
//     type: 'POST',
//     url: form.action,
//     data: $(form).serialize(),
//     success: function (response) {
//       if (response.success) {
//         $('#user-' + userId).remove();
//         $('#deleteModal-' + userId).modal('hide');
//         window.location.href = targetUrl; // Redirect to the target URL
//       } else {
//         alert('Failed to delete user.');
//       }
//     },
//     error: function () {
//       alert('An error occurred.');
//     }
//   });
// }
// export default function (name) {
//   $('#toggle_user_param').on('click', function (e) {
//     $('#user-pannel').toggle();
//   })
//   $('.bi-trash-fill').on('click', function (e) {
//     e.preventDefault();
//     const formId = $(this).closest('form').attr('id');
//     $('#' + formId).submit();
//   });
// }

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
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
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
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_18__.Controller);


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js-node_modules_symfony_stimulus-br-d11b97"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTs7Ozs7Ozs7Ozs7OztBQ0h6QyIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9hZG1pbmlzdHJhdG9yRGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9hdmlzRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvbG9naW5mb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC10dXJiby9hc3NldHMvZGlzdC90dXJib19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2FkbWluaXN0cmF0b3JEYXNoYm9hcmQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9hZG1pbmlzdHJhdG9yRGFzaGJvYXJkLmpzXCIsXG5cdFwiLi9hdmlzRm9ybVZhbGlkYXRvci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2F2aXNGb3JtVmFsaWRhdG9yLmpzXCIsXG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiLFxuXHRcIi4vbG9naW5mb3JtVmFsaWRhdG9yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvbG9naW5mb3JtVmFsaWRhdG9yLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiaW1wb3J0IGNvbnRyb2xsZXJfMCBmcm9tICdAc3ltZm9ueS91eC10dXJiby9kaXN0L3R1cmJvX2NvbnRyb2xsZXIuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtdHVyYm8tLXR1cmJvLWNvcmUnOiBjb250cm9sbGVyXzAsXG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoJy5uYXYtYWRtaW4nKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgdGFyZ2V0VXJsID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKTtcbiAgICAgICQoJyNjb250ZW50LWFyZWEnKS5sb2FkKHRhcmdldFVybCk7XG4gICAgfSk7XG4gICAgJCgnI25ldy11c2VyLWZvcm0nKS5zdWJtaXQoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIGZvcm1EYXRhID0gJCh0aGlzKS5zZXJpYWxpemUoKTtcblxuICAgICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICB1cmw6ICQodGhpcykuYXR0cignYWN0aW9uJyksXG4gICAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgdmFyIG5ld1JvdyA9IGBcbiAgICAgICAgICAgICAgICAgICAgICA8dHIgaWQ9XCJ1c2VyLSR7cmVzcG9uc2UudXNlci5pZH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7cmVzcG9uc2UudXNlci5lbWFpbH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtyZXNwb25zZS51c2VyLnJvbGVzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke3Jlc3BvbnNlLnVzZXIubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtyZXNwb25zZS51c2VyLmxhc3RuYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktdHJhc2gtZmlsbCBmbG9hdC1lbmRcIiBkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS1icy10YXJnZXQ9XCIjZGVsZXRlTW9kYWwtJHtyZXNwb25zZS51c2VyLmlkfVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICQoJyN1c2VyLXRhYmxlIHRib2R5JykuYXBwZW5kKG5ld1Jvdyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gYWRkIHVzZXIuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGFsZXJ0KCdBbiBlcnJvciBvY2N1cnJlZC4nKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuLy8gZnVuY3Rpb24gc3VibWl0Rm9ybUFuZFJlZGlyZWN0KHVzZXJJZCkge1xuLy8gICB2YXIgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtZm9ybS0nICsgdXNlcklkKTtcbi8vICAgdmFyIHRhcmdldFVybCA9IGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW2RhdGEtdGFyZ2V0XScpLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKTtcblxuLy8gICAkLmFqYXgoe1xuLy8gICAgIHR5cGU6ICdQT1NUJyxcbi8vICAgICB1cmw6IGZvcm0uYWN0aW9uLFxuLy8gICAgIGRhdGE6ICQoZm9ybSkuc2VyaWFsaXplKCksXG4vLyAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4vLyAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuLy8gICAgICAgICAkKCcjdXNlci0nICsgdXNlcklkKS5yZW1vdmUoKTtcbi8vICAgICAgICAgJCgnI2RlbGV0ZU1vZGFsLScgKyB1c2VySWQpLm1vZGFsKCdoaWRlJyk7XG4vLyAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGFyZ2V0VXJsOyAvLyBSZWRpcmVjdCB0byB0aGUgdGFyZ2V0IFVSTFxuLy8gICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgYWxlcnQoJ0ZhaWxlZCB0byBkZWxldGUgdXNlci4nKTtcbi8vICAgICAgIH1cbi8vICAgICB9LFxuLy8gICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICBhbGVydCgnQW4gZXJyb3Igb2NjdXJyZWQuJyk7XG4vLyAgICAgfVxuLy8gICB9KTtcbi8vIH1cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChuYW1lKSB7XG4vLyAgICQoJyN0b2dnbGVfdXNlcl9wYXJhbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4vLyAgICAgJCgnI3VzZXItcGFubmVsJykudG9nZ2xlKCk7XG4vLyAgIH0pXG4vLyAgICQoJy5iaS10cmFzaC1maWxsJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZm9ybUlkID0gJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuYXR0cignaWQnKTtcbi8vICAgICAkKCcjJyArIGZvcm1JZCkuc3VibWl0KCk7XG4vLyAgIH0pO1xuLy8gfSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAkKCcjdG9nZ2xlUmFuZ2UxJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGFsZXJ0KCdjbGlja2VkJyk7XHJcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnYmktc3Rhci1maWxsJyk7XHJcbiAgICB9KVxyXG4gICAgJCgnI2J0blN1Ym1pdExvZ2luZm9ybScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9sb2dpbicsXHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfTtcclxuICAiLCJpbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBob21lQ29udHJvbGxlclNjcmlwdC5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hvbWVDb250cm9sbGVyU2NyaXB0LmpzJztcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobmFtZSkge1xuICAkKCcjdG9nZ2xlUGFzc3dvcmQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdHlwZSA9ICQoJyNpbnB1dExvZ2luUGFzcycpLmF0dHIoJ3R5cGUnKSA9PT0gJ3Bhc3N3b3JkJyA/ICd0ZXh0JyA6ICdwYXNzd29yZCc7XG4gICAgJCgnI2lucHV0TG9naW5QYXNzJykuYXR0cigndHlwZScsIHR5cGUpO1xuICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnYmktZXllJyk7XG4gIH0pXG4gICQoJyNidG5TdWJtaXRMb2dpbmZvcm0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL2xvZ2luJyxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgfSlcbiAgfSlcbn07XG4iLCJpbXBvcnQgJy4vYm9vdHN0cmFwLmpzJztcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXG4gKi9cbi8vIGxvYWRzIHRoZSBqcXVlcnkgcGFja2FnZSBmcm9tIG5vZGVfbW9kdWxlc1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAqIGFzIFR1cmJvIGZyb20gJ0Bob3R3aXJlZC90dXJibyc7XG5UdXJiby5zdGFydCgpO1xuXG4vLyBpbXBvcnQgdGhlIGZ1bmN0aW9uIGZyb20gZ3JlZXQuanMgKHRoZSAuanMgZXh0ZW5zaW9uIGlzIG9wdGlvbmFsKVxuLy8gLi8gKG9yIC4uLykgbWVhbnMgdG8gbG9vayBmb3IgYSBsb2NhbCBmaWxlXG5pbXBvcnQgbG9naW5mb3JtVmFsaWRhdG9yIGZyb20gJy4vY29udHJvbGxlcnMvbG9naW5mb3JtVmFsaWRhdG9yLmpzJztcbmltcG9ydCBhZG1pbmlzdHJhdG9yRGFzaGJvYXJkIGZyb20gJy4vY29udHJvbGxlcnMvYWRtaW5pc3RyYXRvckRhc2hib2FyZC5qcyc7XG5cblxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgbG9naW5mb3JtVmFsaWRhdG9yKCk7XG4gICAgYWRtaW5pc3RyYXRvckRhc2hib2FyZCgpXG4gICAgLy8gJCgnYm9keScpLnByZXBlbmQoJzxoMT4nICsgICsgJzwvaDE+Jyk7XG59KTsiLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmltcG9ydCAnQGhvdHdpcmVkL3R1cmJvJztcblxuY2xhc3MgdHVyYm9fY29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXIge1xufVxuXG5leHBvcnQgeyB0dXJib19jb250cm9sbGVyIGFzIGRlZmF1bHQgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldFVybCIsImRhdGEiLCJsb2FkIiwic3VibWl0IiwiZm9ybURhdGEiLCJzZXJpYWxpemUiLCJhamF4IiwidHlwZSIsInVybCIsImF0dHIiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJuZXdSb3ciLCJjb25jYXQiLCJ1c2VyIiwiaWQiLCJlbWFpbCIsInJvbGVzIiwibmFtZSIsImxhc3RuYW1lIiwiYXBwZW5kIiwiYWxlcnQiLCJlcnJvciIsIm9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwibWV0aG9kIiwiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiYXJndW1lbnRzIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25uZWN0IiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiZGVmYXVsdCIsIlR1cmJvIiwic3RhcnQiLCJsb2dpbmZvcm1WYWxpZGF0b3IiLCJhZG1pbmlzdHJhdG9yRGFzaGJvYXJkIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwidHVyYm9fY29udHJvbGxlciJdLCJzb3VyY2VSb290IjoiIn0=