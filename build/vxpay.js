var VX =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 152);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2);
var core = __webpack_require__(24);
var hide = __webpack_require__(15);
var redefine = __webpack_require__(16);
var ctx = __webpack_require__(21);
var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
$export.U = 64; // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(4);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
// eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayMessage = function () {

	/**
  * @param {String} type
  */
	function VXPayMessage() {
		var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

		_classCallCheck(this, VXPayMessage);

		this.type = type;
	}

	/**
  * @return {string}
  */


	_createClass(VXPayMessage, [{
		key: 'toString',
		value: function toString() {
			return JSON.stringify(this);
		}

		/**
   * @return {String[]}
   */

	}], [{
		key: 'getValidTypes',
		value: function getValidTypes() {
			return [VXPayMessage.TYPE_INIT_SESSION, VXPayMessage.TYPE_UPDATE_PARAMS, VXPayMessage.TYPE_IS_VISIBLE, VXPayMessage.TYPE_ADDITIONAL_INFO, VXPayMessage.TYPE_CHANGE_ROUTE, VXPayMessage.TYPE_HOOK, VXPayMessage.TYPE_SCROLL_TO, VXPayMessage.TYPE_SUCCESS, VXPayMessage.TYPE_IFRAME_CLOSE, VXPayMessage.TYPE_IFRAME_READY, VXPayMessage.TYPE_VIEW_READY, VXPayMessage.TYPE_TRANSFER_TOKEN, VXPayMessage.TYPE_CONTENT_LOADED,
			// actions
			VXPayMessage.TYPE_ACTION_GET_ACTIVE_ABOS, VXPayMessage.TYPE_ACTION_LOGOUT, VXPayMessage.TYPE_ACTION_GET_AVS_STATUS, VXPayMessage.TYPE_ACTION_GET_BALANCE, VXPayMessage.TYPE_ACTION_IS_LOGGED_IN,
			// action response messages
			VXPayMessage.TYPE_HAS_LOGIN_COOKIE, VXPayMessage.TYPE_BALANCE, VXPayMessage.TYPE_AVS_STATUS, VXPayMessage.TYPE_IS_LOGGED_IN];
		}
	}]);

	return VXPayMessage;
}();

VXPayMessage.TYPE_HOOK = 'modalbox-hook';
VXPayMessage.TYPE_SCROLL_TO = 'modalbox-scrollto';
VXPayMessage.TYPE_SUCCESS = 'modalbox-success';
VXPayMessage.TYPE_IFRAME_CLOSE = 'modalbox-iframe-close';
VXPayMessage.TYPE_IFRAME_READY = 'modalbox-iframe-ready';
VXPayMessage.TYPE_VIEW_READY = 'modalbox-view-ready';
VXPayMessage.TYPE_TRANSFER_TOKEN = 'modalbox-transfer-token';
VXPayMessage.TYPE_CONTENT_LOADED = 'modalbox-content-loaded';
VXPayMessage.TYPE_INIT_SESSION = 'modalbox-init-session';
VXPayMessage.TYPE_UPDATE_PARAMS = 'modalbox-update-params';
VXPayMessage.TYPE_IS_VISIBLE = 'modalbox-is-visible';
VXPayMessage.TYPE_ADDITIONAL_INFO = 'modalbox-additional-info';
VXPayMessage.TYPE_CHANGE_ROUTE = 'modalbox-change-route';

VXPayMessage.TYPE_HAS_LOGIN_COOKIE = 'modalbox-response-hasLoginCookie';
VXPayMessage.TYPE_IS_LOGGED_IN = 'modalbox-response-isLoggedIn';
VXPayMessage.TYPE_AVS_STATUS = 'modalbox-response-getavsstatus';
VXPayMessage.TYPE_BALANCE = 'modalbox-response-getbalance';
VXPayMessage.TYPE_ACTIVE_ABOS = 'modalbox-response-getactiveabos';
VXPayMessage.TYPE_LOGGED_OUT = 'modalbox-response-logout';

VXPayMessage.TYPE_ACTION_GET_ACTIVE_ABOS = 'modalbox-action-getactiveabos';
VXPayMessage.TYPE_ACTION_LOGOUT = 'modalbox-action-logout';
VXPayMessage.TYPE_ACTION_GET_AVS_STATUS = 'modalbox-action-getavsstatus';
VXPayMessage.TYPE_ACTION_IS_LOGGED_IN = 'modalbox-action-isLoggedIn';
VXPayMessage.TYPE_ACTION_GET_BALANCE = 'modalbox-action-getbalance';

VXPayMessage.TRANSFER_TOKEN_PREFIX = 'transfer_token:';

exports.default = VXPayMessage;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var store = __webpack_require__(53)('wks');
var uid = __webpack_require__(35);
var _Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof _Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(3)(function () {
  return Object.defineProperty({}, 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(1);
var IE8_DOM_DEFINE = __webpack_require__(106);
var toPrimitive = __webpack_require__(25);
var dP = Object.defineProperty;

exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.15 ToLength
var toInteger = __webpack_require__(27);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayFlow = function () {
	function VXPayFlow() {
		_classCallCheck(this, VXPayFlow);
	}

	_createClass(VXPayFlow, null, [{
		key: 'getAllowed',

		/**
   * @return {String[]}
   */
		value: function getAllowed() {
			return [VXPayFlow.AVS, VXPayFlow.LIMIT, VXPayFlow.LOGIN, VXPayFlow.MONEY_CHARGE, VXPayFlow.OP_COMPENSATION, VXPayFlow.PASSWORD_RESET, VXPayFlow.PASSWORD_LOST, VXPayFlow.PROMOCODE, VXPayFlow.SCRATCH_CARD, VXPayFlow.TRIAL_VIP_ABO, VXPayFlow.VIP_ABO, VXPayFlow.VXTV_ABO, VXPayFlow.SETTINGS, VXPayFlow.CHANGE_CARD, VXPayFlow.CHANGE_LS, VXPayFlow.ONE_CLICK, VXPayFlow.AUTO_RECHARGE];
		}

		/**
   * @return {string}
   */

	}, {
		key: 'getDefault',
		value: function getDefault() {
			return VXPayFlow.MONEY_CHARGE;
		}
	}]);

	return VXPayFlow;
}();

VXPayFlow.AVS = 'avs';
VXPayFlow.LIMIT = 'limit';
VXPayFlow.LOGIN = 'login';
VXPayFlow.MONEY_CHARGE = 'moneycharge';
VXPayFlow.OP_COMPENSATION = 'opcompensation';
VXPayFlow.AUTO_RECHARGE = 'autorecharge';
VXPayFlow.PASSWORD_RESET = 'pwdreset';
VXPayFlow.PASSWORD_LOST = 'pwdlost';
VXPayFlow.PROMOCODE = 'promocode';
VXPayFlow.SCRATCH_CARD = 'scratchcard';
VXPayFlow.TRIAL_VIP_ABO = 'trialvipabo';
VXPayFlow.VIP_ABO = 'vipabo';
VXPayFlow.VXTV_ABO = 'vxtvabo';
VXPayFlow.SETTINGS = 'vxsettings';
VXPayFlow.CHANGE_CARD = 'changecc';
VXPayFlow.CHANGE_LS = 'changels';
VXPayFlow.ONE_CLICK = 'oneclick';

exports.default = VXPayFlow;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.13 ToObject(argument)
var defined = __webpack_require__(26);
module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayPaymentRoutes = function VXPayPaymentRoutes() {
  _classCallCheck(this, VXPayPaymentRoutes);
};

VXPayPaymentRoutes.LOGIN = '/login';
VXPayPaymentRoutes.SIGN_UP = '/signup';
VXPayPaymentRoutes.PAYMENT = '/payment';
VXPayPaymentRoutes.ABO = '/abo';
VXPayPaymentRoutes.AVS = '/avs';
VXPayPaymentRoutes.PROMOCODE = '/promocode';
VXPayPaymentRoutes.OP_COMPENSATION = '/opcompensation';
VXPayPaymentRoutes.PASSWORD = '/password';
VXPayPaymentRoutes.PASSWORD_RESET = '/passwordreset';
VXPayPaymentRoutes.AUTO_RECHARGE = '/autorecharge';
VXPayPaymentRoutes.ONE_CLICK = '/comfort';
VXPayPaymentRoutes.SETTINGS = '/user/settings';
VXPayPaymentRoutes.VOICE_CALL = '/voicecall';
VXPayPaymentRoutes.LIMIT = '/limit';

exports.default = VXPayPaymentRoutes;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(8);
var createDesc = __webpack_require__(34);
module.exports = __webpack_require__(7) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2);
var hide = __webpack_require__(15);
var has = __webpack_require__(14);
var SRC = __webpack_require__(35)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(24).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var fails = __webpack_require__(3);
var defined = __webpack_require__(26);
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function createHTML(string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(50);
var defined = __webpack_require__(26);
module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pIE = __webpack_require__(51);
var createDesc = __webpack_require__(34);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(25);
var has = __webpack_require__(14);
var IE8_DOM_DEFINE = __webpack_require__(106);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(7) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {/* empty */}
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(14);
var toObject = __webpack_require__(11);
var IE_PROTO = __webpack_require__(74)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// optional / simple context binding
var aFunction = __webpack_require__(13);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () /* ...args */{
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(3);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () {/* empty */}, 1) : method.call(null);
  });
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(4);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(0);
var core = __webpack_require__(24);
var fails = __webpack_require__(3);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () {
    fn(1);
  }), 'Object', exp);
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(21);
var IObject = __webpack_require__(50);
var toObject = __webpack_require__(11);
var toLength = __webpack_require__(9);
var asc = __webpack_require__(91);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (; length > index; index++) {
      if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);
        if (TYPE) {
          if (IS_MAP) result[index] = res; // map
          else if (res) switch (TYPE) {
              case 3:
                return true; // some
              case 5:
                return val; // find
              case 6:
                return index; // findIndex
              case 2:
                result.push(val); // filter
            } else if (IS_EVERY) return false; // every
        }
      }
    }return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (__webpack_require__(7)) {
  var LIBRARY = __webpack_require__(36);
  var global = __webpack_require__(2);
  var fails = __webpack_require__(3);
  var $export = __webpack_require__(0);
  var $typed = __webpack_require__(63);
  var $buffer = __webpack_require__(97);
  var ctx = __webpack_require__(21);
  var anInstance = __webpack_require__(42);
  var propertyDesc = __webpack_require__(34);
  var hide = __webpack_require__(15);
  var redefineAll = __webpack_require__(44);
  var toInteger = __webpack_require__(27);
  var toLength = __webpack_require__(9);
  var toIndex = __webpack_require__(132);
  var toAbsoluteIndex = __webpack_require__(38);
  var toPrimitive = __webpack_require__(25);
  var has = __webpack_require__(14);
  var classof = __webpack_require__(52);
  var isObject = __webpack_require__(4);
  var toObject = __webpack_require__(11);
  var isArrayIter = __webpack_require__(88);
  var create = __webpack_require__(39);
  var getPrototypeOf = __webpack_require__(20);
  var gOPN = __webpack_require__(40).f;
  var getIterFn = __webpack_require__(90);
  var uid = __webpack_require__(35);
  var wks = __webpack_require__(6);
  var createArrayMethod = __webpack_require__(29);
  var createArrayIncludes = __webpack_require__(54);
  var speciesConstructor = __webpack_require__(61);
  var ArrayIterators = __webpack_require__(93);
  var Iterators = __webpack_require__(47);
  var $iterDetect = __webpack_require__(58);
  var setSpecies = __webpack_require__(41);
  var arrayFill = __webpack_require__(92);
  var arrayCopyWithin = __webpack_require__(122);
  var $DP = __webpack_require__(8);
  var $GOPD = __webpack_require__(19);
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function toOffset(it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function validate(it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function allocate(C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    }return new C(length);
  };

  var speciesFromList = function speciesFromList(O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function fromList(C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) {
      result[index] = list[index++];
    }return result;
  };

  var addGetter = function addGetter(it, key, internal) {
    dP(it, key, { get: function get() {
        return this._d[internal];
      } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      }O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of() /* ...items */{
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) {
      result[index] = arguments[index++];
    }return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
    arrayToLocaleString.call(new Uint8Array(1));
  });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) {
      // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) {
      // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) {
      // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) {
      // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) {
      // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      }return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) {
      this[offset + index] = src[index++];
    }
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function isTAIndex(target, key) {
    return isObject(target) && target[TYPED_ARRAY] && (typeof key === 'undefined' ? 'undefined' : _typeof(key)) != 'symbol' && key in target && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set')
    // TODO: add validation descriptor w/o calling accessors
    && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
      target[key] = desc.value;
      return target;
    }return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () {
    arrayToString.call({});
  })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function constructor() {/* noop */},
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function get() {
      return this[TYPED_ARRAY];
    }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function getter(that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function setter(that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function addElement(that, index) {
      dP(that, index, {
        get: function get() {
          return getter(this, index);
        },
        set: function set(value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) {
          addElement(that, index++);
        }
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function get() {
          return NAME;
        }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () {
      Base.of.call(TypedArray, 1);
    }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () {/* empty */};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Map = __webpack_require__(127);
var $export = __webpack_require__(0);
var shared = __webpack_require__(53)('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(130))());

var getOrCreateMetadataMap = function getOrCreateMetadataMap(target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  }return keyMetadata;
};
var ordinaryHasOwnMetadata = function ordinaryHasOwnMetadata(MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function ordinaryGetOwnMetadata(MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function ordinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function ordinaryOwnMetadataKeys(target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) {
    keys.push(key);
  });
  return keys;
};
var toMetaKey = function toMetaKey(it) {
  return it === undefined || (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : String(it);
};
var exp = function exp(O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var META = __webpack_require__(35)('meta');
var isObject = __webpack_require__(4);
var has = __webpack_require__(14);
var setDesc = __webpack_require__(8).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(3)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function setMeta(it) {
  setDesc(it, META, { value: {
      i: 'O' + ++id, // object ID
      w: {} // weak collections IDs
    } });
};
var fastKey = function fastKey(it, create) {
  // return primitive with prefix
  if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
    // return object ID
  }return it[META].i;
};
var getWeak = function getWeak(it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
    // return hash weak collections IDs
  }return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function onFreeze(it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(6)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(15)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = false;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(108);
var enumBugKeys = __webpack_require__(75);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(27);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(1);
var dPs = __webpack_require__(109);
var enumBugKeys = __webpack_require__(75);
var IE_PROTO = __webpack_require__(74)('IE_PROTO');
var Empty = function Empty() {/* empty */};
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(72)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(76).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;
  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }return _createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = _createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(108);
var hiddenKeys = __webpack_require__(75).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2);
var dP = __webpack_require__(8);
var DESCRIPTORS = __webpack_require__(7);
var SPECIES = __webpack_require__(6)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
    throw TypeError(name + ': incorrect invocation!');
  }return it;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ctx = __webpack_require__(21);
var call = __webpack_require__(120);
var isArrayIter = __webpack_require__(88);
var anObject = __webpack_require__(1);
var toLength = __webpack_require__(9);
var getIterFn = __webpack_require__(90);
var BREAK = {};
var RETURN = {};
var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () {
    return iterable;
  } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
_exports.BREAK = BREAK;
_exports.RETURN = RETURN;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var redefine = __webpack_require__(16);
module.exports = function (target, src, safe) {
  for (var key in src) {
    redefine(target, key, src[key], safe);
  }return target;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var def = __webpack_require__(8).f;
var has = __webpack_require__(14);
var TAG = __webpack_require__(6)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var defined = __webpack_require__(26);
var fails = __webpack_require__(3);
var spaces = __webpack_require__(78);
var space = '[' + spaces + ']';
var non = '\u200B\x85';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function exporter(KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(4);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VXPayValidator = __webpack_require__(101);

var _VXPayValidator2 = _interopRequireDefault(_VXPayValidator);

var _VXPayEventListener2 = __webpack_require__(68);

var _VXPayEventListener3 = _interopRequireDefault(_VXPayEventListener2);

var _VXPayDomHelper = __webpack_require__(141);

var _VXPayDomHelper2 = _interopRequireDefault(_VXPayDomHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayIframe = function (_VXPayEventListener) {
	_inherits(VXPayIframe, _VXPayEventListener);

	/**
  * @param {Document} document
  * @param {String} url
  * @param {String|Number} id
  * @param {CSSStyleDeclaration} style
  */
	function VXPayIframe(document, url, id) {
		var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

		_classCallCheck(this, VXPayIframe);

		var _this = _possibleConstructorReturn(this, (VXPayIframe.__proto__ || Object.getPrototypeOf(VXPayIframe)).call(this));

		if (typeof document.createElement !== 'function') {
			throw new TypeError('An iFrame can only be build on a valid Document object!');
		}

		if (!_VXPayValidator2.default.isUrl(url, document.defaultView.URL)) {
			throw new TypeError('Please provide a valid URL! ' + url);
		}

		if (!id || id.length === 0) {
			throw new TypeError('Please provide a valid frame ID!');
		}

		_this._loaded = false;
		_this._frame = document.createElement(_VXPayDomHelper2.default.TAG_IFRAME);
		_this._frame.src = url;
		_this._frame.id = id;
		_this._frame.onload = _this._markLoaded.bind(_this);

		// only apply if valid
		if (null !== style) {
			for (var item in style) {
				_this._frame.style.setProperty(item, style[item]);
			}
		}
		return _this;
	}

	/**
  * @throws Error
  */


	_createClass(VXPayIframe, [{
		key: 'triggerLoad',
		value: function triggerLoad() {
			throw new Error('Method triggerLoad should be implemented in child class!');
		}

		/**
   * @protected
   */

	}, {
		key: '_markLoaded',
		value: function _markLoaded() {
			this._loaded = true;
		}

		/**
   * @return {boolean}
   */

	}, {
		key: 'maximize',


		/**
   * @return {VXPayIframe}
   */
		value: function maximize() {
			this._frame.style.width = VXPayIframe.MAX_WIDTH;
			this._frame.style.height = VXPayIframe.MAX_HEIGHT;
			this._frame.style.left = VXPayIframe.MAX_LEFT;
			this._frame.style.top = VXPayIframe.MAX_TOP;
			this._frame.style.marginLeft = VXPayIframe.MAX_LEFT_MARGIN;
			return this;
		}

		/**
   * @param {String|VXPayMessage} message
   * @param {String} origin
   */

	}, {
		key: 'postMessage',
		value: function postMessage() {
			var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
			var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';

			this._frame.contentWindow.postMessage(message.toString(), origin);
		}

		/**
   * @param {Function} handler
   */

	}, {
		key: 'setMessageHandler',
		value: function setMessageHandler(handler) {
			VXPayIframe.addEvent(VXPayIframe.EVENT_MESSAGE, this._frame.contentWindow, handler);
		}

		/**
   * @param {Function} handler
   */

	}, {
		key: 'removeMessageHandler',
		value: function removeMessageHandler(handler) {
			VXPayIframe.removeEvent(VXPayIframe.EVENT_MESSAGE, this._frame.contentWindow, handler);
		}
	}, {
		key: 'show',
		value: function show() {
			this._frame.style.display = 'block';
		}

		/**
   * @todo
   */

	}, {
		key: 'hide',
		value: function hide() {
			this._frame.style.display = 'none';
		}
	}, {
		key: 'loaded',
		get: function get() {
			return this._loaded;
		}

		/**
   * @return {HTMLIFrameElement|HTMLElement}
   */

	}, {
		key: 'frame',
		get: function get() {
			return this._frame;
		}
	}]);

	return VXPayIframe;
}(_VXPayEventListener3.default);

VXPayIframe.EVENT_MESSAGE = 'message';
VXPayIframe.EVENT_LOAD = 'load';

VXPayIframe.POSITION_ABSOLUTE = 'absolute';
VXPayIframe.POSITION_FIXED = 'fixed';

VXPayIframe.MAX_HEIGHT = '100vh';
VXPayIframe.MAX_WIDTH = '100%';
VXPayIframe.MAX_TOP = '0';
VXPayIframe.MAX_LEFT = '0';
VXPayIframe.MAX_LEFT_MARGIN = '0';

// VXPayIframe.ORIGIN = 'https://it.vxone.y';
VXPayIframe.ORIGIN = 'https://www.visit-x.net';

exports.default = VXPayIframe;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(22);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(22);
var TAG = __webpack_require__(6)('toStringTag');
// ES3 wrong here
var ARG = cof(function () {
  return arguments;
}()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {/* empty */}
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
  // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
  // builtinTag case
  : ARG ? cof(O)
  // ES3 arguments fallback
  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(18);
var toLength = __webpack_require__(9);
var toAbsoluteIndex = __webpack_require__(38);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.2.2 IsArray(argument)
var cof = __webpack_require__(22);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(4);
var cof = __webpack_require__(22);
var MATCH = __webpack_require__(6)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ITERATOR = __webpack_require__(6)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () {
    SAFE_CLOSING = true;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () {
    throw 2;
  });
} catch (e) {/* empty */}

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () {
      return { done: safe = true };
    };
    arr[ITERATOR] = function () {
      return iter;
    };
    exec(arr);
  } catch (e) {/* empty */}
  return safe;
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags

var anObject = __webpack_require__(1);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hide = __webpack_require__(15);
var redefine = __webpack_require__(16);
var fails = __webpack_require__(3);
var defined = __webpack_require__(26);
var wks = __webpack_require__(6);

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () {
      return 7;
    };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
    // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
    ? function (string, arg) {
      return rxfn.call(string, this, arg);
    }
    // 21.2.5.6 RegExp.prototype[@@match](string)
    // 21.2.5.9 RegExp.prototype[@@search](string)
    : function (string) {
      return rxfn.call(string, this);
    });
  }
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(1);
var aFunction = __webpack_require__(13);
var SPECIES = __webpack_require__(6)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(16);
var redefineAll = __webpack_require__(44);
var meta = __webpack_require__(32);
var forOf = __webpack_require__(43);
var anInstance = __webpack_require__(42);
var isObject = __webpack_require__(4);
var fails = __webpack_require__(3);
var $iterDetect = __webpack_require__(58);
var setToStringTag = __webpack_require__(45);
var inheritIfRequired = __webpack_require__(79);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function fixMethod(KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY, KEY == 'delete' ? function (a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'has' ? function has(a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'get' ? function get(a) {
      return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'add' ? function add(a) {
      fn.call(this, a === 0 ? 0 : a);return this;
    } : function set(a, b) {
      fn.call(this, a === 0 ? 0 : a, b);return this;
    });
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () {
      instance.has(1);
    });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) {
      new C(iter);
    }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) {
        $instance[ADDER](index, index);
      }return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2);
var hide = __webpack_require__(15);
var uid = __webpack_require__(35);
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Forced replacement prototype accessors methods

module.exports = __webpack_require__(36) || !__webpack_require__(3)(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () {/* empty */});
  delete __webpack_require__(2)[K];
});

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/

var $export = __webpack_require__(0);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
      var length = arguments.length;
      var A = new Array(length);
      while (length--) {
        A[length] = arguments[length];
      }return new this(A);
    } });
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/

var $export = __webpack_require__(0);
var aFunction = __webpack_require__(13);
var ctx = __webpack_require__(21);
var forOf = __webpack_require__(43);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
      var mapFn = arguments[1];
      var mapping, A, n, cb;
      aFunction(this);
      mapping = mapFn !== undefined;
      if (mapping) aFunction(mapFn);
      if (source == undefined) return new this();
      A = [];
      if (mapping) {
        n = 0;
        cb = ctx(mapFn, arguments[2], 2);
        forOf(source, false, function (nextItem) {
          A.push(cb(nextItem, n++));
        });
      } else {
        forOf(source, false, A.push, A);
      }
      return new this(A);
    } });
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayUrlHelper = function () {
	/**
  * @param {Function} urlImplementation
  */
	function VXPayUrlHelper() {
		var urlImplementation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		_classCallCheck(this, VXPayUrlHelper);

		this._urlImpl = typeof urlImplementation === 'undefined' ? window.URL : urlImplementation;
	}

	/**
  * @param {String} baseUrl
  * @param {Object} params
  * @param {Object} config
  * @return {string}
  */


	_createClass(VXPayUrlHelper, [{
		key: 'generate',
		value: function generate(baseUrl) {
			var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
			var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

			var url = new this._urlImpl(baseUrl);

			// fix url, remove existing hashes
			url.hash = '';

			// add params
			if (params) {
				for (var d in params) {
					if (typeof params[d] === 'undefined') {
						continue;
					}

					url.searchParams.append(d, params[d]);
				}
			}

			// add module config
			if (config) {
				for (var d2 in config) {
					// skip underline in object props
					var name = d2.charAt(1) === '_' ? d2.substr(1) : d2;

					if (typeof config[name] === 'undefined') {
						continue;
					}

					url.searchParams.append('mc[' + d2 + ']', config[d2]);
				}
			}

			return url.toString();
		}

		/**
   * @param {String} location
   * @param {String} name
   * @return {String}
   */

	}, {
		key: 'getQueryParam',
		value: function getQueryParam(location, name) {
			try {
				var url = new this._urlImpl(location);
				return url.searchParams[name];
			} catch (err) {
				return '';
			}
		}

		/**
   * @param {String} url
   * @return {boolean}
   */

	}, {
		key: 'isValid',
		value: function isValid(url) {
			try {
				new this._urlImpl(url);
				return true;
			} catch (_) {
				return false;
			}
		}
	}]);

	return VXPayUrlHelper;
}();

exports.default = VXPayUrlHelper;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayEventListener = function () {
	function VXPayEventListener() {
		_classCallCheck(this, VXPayEventListener);
	}

	_createClass(VXPayEventListener, null, [{
		key: 'addEvent',

		/**
   * @param {String} event
   * @param {HTMLElement|Window} elem
   * @param {Function} func
   */
		value: function addEvent(event, elem, func) {
			if (elem.addEventListener) {
				// W3C DOM
				elem.addEventListener(event, func, false);
			} else if (elem.attachEvent) {
				// IE DOM
				elem.attachEvent('on' + event, func);
			} else {
				// No much to do
				elem[event] = func;
			}
		}

		/**
   * @param {String} event
   * @param {HTMLElement} elem
   * @param {Function} func
   */

	}, {
		key: 'removeEvent',
		value: function removeEvent(event, elem, func) {
			if (elem.removeEventListener) {
				// W3C DOM
				elem.removeEventListener(event, func, false);
			} else if (elem.attachEvent) {
				// IE DOM
				elem.detachEvent('on' + event, func);
			} else {
				// No much to do
				elem[event] = null;
			}
		}
	}]);

	return VXPayEventListener;
}();

exports.default = VXPayEventListener;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayMessage2 = __webpack_require__(5);

var _VXPayMessage3 = _interopRequireDefault(_VXPayMessage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayHookMessage = function (_VXPayMessage) {
	_inherits(VXPayHookMessage, _VXPayMessage);

	/**
  * @param {string} hook
  */
	function VXPayHookMessage() {
		var hook = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : VXPayHookMessage.HOOK_UNKNOWN;

		_classCallCheck(this, VXPayHookMessage);

		var _this = _possibleConstructorReturn(this, (VXPayHookMessage.__proto__ || Object.getPrototypeOf(VXPayHookMessage)).call(this, _VXPayMessage3.default.TYPE_HOOK));

		_this.hook = hook;
		return _this;
	}

	return VXPayHookMessage;
}(_VXPayMessage3.default);

VXPayHookMessage.HOOK_UNKNOWN = 'dummy-unknown';
VXPayHookMessage.HOOK_FLOW_CHANGED = 'flowChanged';
VXPayHookMessage.HOOK_LOGIN = 'login';

exports.default = VXPayHookMessage;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VXPayHooksConfig2 = __webpack_require__(105);

var _VXPayHooksConfig3 = _interopRequireDefault(_VXPayHooksConfig2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayPaymentHooksConfig = function (_VXPayHooksConfig) {
	_inherits(VXPayPaymentHooksConfig, _VXPayHooksConfig);

	function VXPayPaymentHooksConfig() {
		_classCallCheck(this, VXPayPaymentHooksConfig);

		var _this = _possibleConstructorReturn(this, (VXPayPaymentHooksConfig.__proto__ || Object.getPrototypeOf(VXPayPaymentHooksConfig)).call(this));

		_this._onViewReady = [];
		_this._onContentLoaded = [];
		_this._onClose = [];
		_this._onSuccess = [];
		_this._onIframeReady = [];
		_this._onLogin = [];
		_this._onLogout = [];
		_this._onFlowChange = [];
		_this._onIsLoggedIn = [];
		_this._onTransferToken = [];
		_this._onAVSStatus = [];
		_this._onBalance = [];
		_this._onActiveAbos = [];
		return _this;
	}

	/**
  * @param {Function} handler
  * @return {VXPayPaymentHooksConfig}
  */


	_createClass(VXPayPaymentHooksConfig, [{
		key: 'onLogout',
		value: function onLogout(handler) {
			this._onLogout.push(handler);
			return this;
		}

		/**
   * @param {Function} handler
   * @return {boolean}
   */

	}, {
		key: 'hasOnLogout',
		value: function hasOnLogout(handler) {
			return this._onLogout.indexOf(handler) !== -1;
		}

		/**
   * @param {Function} handler
   * @return {VXPayPaymentHooksConfig}
   */

	}, {
		key: 'onActiveAbos',
		value: function onActiveAbos(handler) {
			this._onActiveAbos.push(handler);
			return this;
		}

		/**
   * @param {Function} handler
   * @return {boolean}
   */

	}, {
		key: 'hasOnActiveAbos',
		value: function hasOnActiveAbos(handler) {
			return this._onActiveAbos.indexOf(handler) !== -1;
		}

		/**
   * @param {Function} handler
   * @return {VXPayPaymentHooksConfig}
   */

	}, {
		key: 'onBalance',
		value: function onBalance(handler) {
			this._onBalance.push(handler);
			return this;
		}

		/**
   * @param {Function} handler
   * @return {boolean}
   */

	}, {
		key: 'hasOnBalance',
		value: function hasOnBalance(handler) {
			return this._onBalance.indexOf(handler) !== -1;
		}

		/**
   * @param {Function} handler
   */

	}, {
		key: 'onAVSStatus',
		value: function onAVSStatus(handler) {
			this._onAVSStatus.push(handler);
		}

		/**
   * @param {Function} handler
   * @return {boolean}
   */

	}, {
		key: 'hasOnAVSStatus',
		value: function hasOnAVSStatus(handler) {
			return this._onAVSStatus.indexOf(handler) !== -1;
		}

		/**
   * @param {Function} handler
   * @return {VXPayPaymentHooksConfig}
   */

	}, {
		key: 'onIsLoggedIn',
		value: function onIsLoggedIn(handler) {
			this._onIsLoggedIn.push(handler);
			return this;
		}

		/**
   * @param {Function} handler
   * @return {boolean}
   */

	}, {
		key: 'hasOnIsLoggedIn',
		value: function hasOnIsLoggedIn(handler) {
			return this._onIsLoggedIn.indexOf(handler) !== -1;
		}

		/**
   * @param {Function} handler
   * @return {VXPayPaymentHooksConfig}
   */

	}, {
		key: 'onTransferToken',
		value: function onTransferToken(handler) {
			this._onTransferToken.push(handler);
			return this;
		}

		/**
   * @param {Function} handler
   * @return {VXPayPaymentHooksConfig}
   */

	}, {
		key: 'onFlowChange',
		value: function onFlowChange(handler) {
			this._onFlowChange.push(handler);
			return this;
		}

		/**
   * @param {Function} handler
   * @return {VXPayPaymentHooksConfig}
   */

	}, {
		key: 'onLogin',
		value: function onLogin(handler) {
			this._onLogin.push(handler);
			return this;
		}

		/**
   * @param {Function} handler
   * @return {VXPayPaymentHooksConfig}
   */

	}, {
		key: 'onIframeReady',
		value: function onIframeReady(handler) {
			this._onIframeReady.push(handler);
			return this;
		}

		/**
   * @param {Function} handler
   * @return {VXPayPaymentHooksConfig}
   */

	}, {
		key: 'onClose',
		value: function onClose(handler) {
			this._onClose.push(handler);
			return this;
		}

		/**
   * @param {Function} handler
   * @return {VXPayPaymentHooksConfig}
   */

	}, {
		key: 'onSuccess',
		value: function onSuccess(handler) {
			this._onSuccess.push(handler);
			return this;
		}

		/**
   * @param {Function} handler
   * @return {VXPayPaymentHooksConfig}
   */

	}, {
		key: 'onViewReady',
		value: function onViewReady(handler) {
			this._onViewReady.push(handler);
			return this;
		}

		/**
   * @param {Function} handler
   * @return {VXPayPaymentHooksConfig}
   */

	}, {
		key: 'onContentLoaded',
		value: function onContentLoaded(handler) {
			this._onContentLoaded.push(handler);
			return this;
		}
	}]);

	return VXPayPaymentHooksConfig;
}(_VXPayHooksConfig3.default);

VXPayPaymentHooksConfig.ON_VIEW_READY = 'onViewReady';
VXPayPaymentHooksConfig.ON_IFRAME_READY = 'onIframeReady';
VXPayPaymentHooksConfig.ON_CONTENT_LOADED = 'onContentLoaded';
VXPayPaymentHooksConfig.ON_CLOSE = 'onClose';
VXPayPaymentHooksConfig.ON_SUCCESS = 'onSuccess';
VXPayPaymentHooksConfig.ON_LOGIN = 'onLogin';
VXPayPaymentHooksConfig.ON_LOGOUT = 'onLogout';
VXPayPaymentHooksConfig.ON_FLOW_CHANGE = 'onFlowChange';
VXPayPaymentHooksConfig.ON_IS_LOGGED_IN = 'onIsLoggedIn';
VXPayPaymentHooksConfig.ON_TRANSFER_TOKEN = 'onTransferToken';
VXPayPaymentHooksConfig.ON_AVS_STATUS = 'onAVSStatus';
VXPayPaymentHooksConfig.ON_BALANCE = 'onBalance';
VXPayPaymentHooksConfig.ON_ACTIVE_ABOS = 'onActiveAbos';

exports.default = VXPayPaymentHooksConfig;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(4);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2);
var core = __webpack_require__(24);
var LIBRARY = __webpack_require__(36);
var wksExt = __webpack_require__(107);
var defineProperty = __webpack_require__(8).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var shared = __webpack_require__(53)('keys');
var uid = __webpack_require__(35);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(4);
var anObject = __webpack_require__(1);
var check = function check(O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = __webpack_require__(21)(Function.call, __webpack_require__(19).f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }
    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(4);
var setPrototypeOf = __webpack_require__(77).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  }return that;
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(27);
var defined = __webpack_require__(26);

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (; n > 0; (n >>>= 1) && (str += str)) {
    if (n & 1) res += str;
  }return res;
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = !$expm1
// Old FF bug
|| $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
// Tor Browser bug
|| $expm1(-2e-17) != -2e-17 ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(27);
var defined = __webpack_require__(26);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(36);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(16);
var hide = __webpack_require__(15);
var has = __webpack_require__(14);
var Iterators = __webpack_require__(47);
var $iterCreate = __webpack_require__(85);
var setToStringTag = __webpack_require__(45);
var getPrototypeOf = __webpack_require__(20);
var ITERATOR = __webpack_require__(6)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = !BUGGY && $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(39);
var descriptor = __webpack_require__(34);
var setToStringTag = __webpack_require__(45);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(15)(IteratorPrototype, __webpack_require__(6)('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(57);
var defined = __webpack_require__(26);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MATCH = __webpack_require__(6)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) {/* empty */}
  }return true;
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// check on default Array iterator
var Iterators = __webpack_require__(47);
var ITERATOR = __webpack_require__(6)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $defineProperty = __webpack_require__(8);
var createDesc = __webpack_require__(34);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(52);
var ITERATOR = __webpack_require__(6)('iterator');
var Iterators = __webpack_require__(47);
module.exports = __webpack_require__(24).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(245);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)


var toObject = __webpack_require__(11);
var toAbsoluteIndex = __webpack_require__(38);
var toLength = __webpack_require__(9);
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) {
    O[index++] = value;
  }return O;
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addToUnscopables = __webpack_require__(33);
var step = __webpack_require__(123);
var Iterators = __webpack_require__(47);
var toIObject = __webpack_require__(18);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(84)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0; // next index
  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ctx = __webpack_require__(21);
var invoke = __webpack_require__(113);
var html = __webpack_require__(76);
var cel = __webpack_require__(72);
var global = __webpack_require__(2);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function run() {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function listener(event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) {
      args.push(arguments[i++]);
    }queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(22)(process) == 'process') {
    defer = function defer(id) {
      process.nextTick(ctx(run, id, 1));
    };
    // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function defer(id) {
      Dispatch.now(ctx(run, id, 1));
    };
    // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function defer(id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
    // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function defer(id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
    // Rest old browsers
  } else {
    defer = function defer(id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2);
var macrotask = __webpack_require__(94).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(22)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function flush() {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();else last = undefined;
        throw e;
      }
    }last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function notify() {
      process.nextTick(flush);
    };
    // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function notify() {
      node.data = toggle = !toggle;
    };
    // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function notify() {
      promise.then(flush);
    };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout
  } else {
    notify = function notify() {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    }last = task;
  };
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)

var aFunction = __webpack_require__(13);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2);
var DESCRIPTORS = __webpack_require__(7);
var LIBRARY = __webpack_require__(36);
var $typed = __webpack_require__(63);
var hide = __webpack_require__(15);
var redefineAll = __webpack_require__(44);
var fails = __webpack_require__(3);
var anInstance = __webpack_require__(42);
var toInteger = __webpack_require__(27);
var toLength = __webpack_require__(9);
var toIndex = __webpack_require__(132);
var gOPN = __webpack_require__(40).f;
var dP = __webpack_require__(8).f;
var arrayFill = __webpack_require__(92);
var setToStringTag = __webpack_require__(45);
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) {}
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) {}
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) {}
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) {}
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  }return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function get() {
      return this[internal];
    } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) {
    store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
  }
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayEnvironment = function () {
	function VXPayEnvironment() {
		_classCallCheck(this, VXPayEnvironment);
	}

	_createClass(VXPayEnvironment, null, [{
		key: 'getAvailable',

		/**
   * @return {String[]}
   */
		value: function getAvailable() {
			return [VXPayEnvironment.LANDING_PAGE, VXPayEnvironment.CULT_BABES, VXPayEnvironment.TV_CHAT, VXPayEnvironment.SLP, VXPayEnvironment.VXONE_LP, VXPayEnvironment.VXONE];
		}

		/**
   * @return {string}
   */

	}, {
		key: 'getDefault',
		value: function getDefault() {
			return VXPayEnvironment.VXONE;
		}
	}]);

	return VXPayEnvironment;
}();

VXPayEnvironment.LANDING_PAGE = 'lp';
VXPayEnvironment.CULT_BABES = 'cultbabes';
VXPayEnvironment.TV_CHAT = 'tvchat';
VXPayEnvironment.SLP = 'slp';
VXPayEnvironment.VXONE_LP = 'vxonelp';
VXPayEnvironment.VXONE = 'vxone';

exports.default = VXPayEnvironment;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayLanguage = function () {
	function VXPayLanguage() {
		_classCallCheck(this, VXPayLanguage);
	}

	_createClass(VXPayLanguage, null, [{
		key: 'getDefault',


		/**
   * @return {string}
   */
		value: function getDefault() {
			return VXPayLanguage.DE;
		}

		/**
   * @return {String[]}
   */

	}, {
		key: 'getAvailable',
		value: function getAvailable() {
			return [VXPayLanguage.DE, VXPayLanguage.EN, VXPayLanguage.NL];
		}
	}]);

	return VXPayLanguage;
}();

VXPayLanguage.DE = 'DE';
VXPayLanguage.EN = 'EN';
VXPayLanguage.NL = 'NL';

exports.default = VXPayLanguage;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VXPayLanguage = __webpack_require__(100);

var _VXPayLanguage2 = _interopRequireDefault(_VXPayLanguage);

var _VXPayEnvironment = __webpack_require__(99);

var _VXPayEnvironment2 = _interopRequireDefault(_VXPayEnvironment);

var _VXPayFlow = __webpack_require__(10);

var _VXPayFlow2 = _interopRequireDefault(_VXPayFlow);

var _VXPayModalConfig = __webpack_require__(102);

var _VXPayModalConfig2 = _interopRequireDefault(_VXPayModalConfig);

var _VXPayUrlHelper = __webpack_require__(67);

var _VXPayUrlHelper2 = _interopRequireDefault(_VXPayUrlHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayValidator = function () {
	function VXPayValidator() {
		_classCallCheck(this, VXPayValidator);
	}

	_createClass(VXPayValidator, null, [{
		key: 'isUrl',

		/**
   * @param {String} url
   * @param {URL} urlImplementation
   * @return {boolean}
   */
		value: function isUrl(url) {
			var urlImplementation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

			var helper = new _VXPayUrlHelper2.default(urlImplementation);
			return helper.isValid(url);
		}

		/**
   * @param {String} language
   * @return {boolean}
   */

	}, {
		key: 'isLanguageSupported',
		value: function isLanguageSupported(language) {
			return _VXPayLanguage2.default.getAvailable().indexOf(language) !== -1;
		}

		/**
   * @param {String} env
   * @return {boolean}
   */

	}, {
		key: 'isEnvironmentSupported',
		value: function isEnvironmentSupported(env) {
			return _VXPayEnvironment2.default.getAvailable().indexOf(env) !== -1;
		}

		/**
   * @param {String} flow
   * @return {boolean}
   */

	}, {
		key: 'isFlowAllowed',
		value: function isFlowAllowed(flow) {
			return _VXPayFlow2.default.getAllowed().indexOf(flow) !== -1;
		}

		/**
   * @param {Number} value
   * @return {boolean}
   */

	}, {
		key: 'isModalConfigValueAllowed',
		value: function isModalConfigValueAllowed(value) {
			return isNumber(value) && [_VXPayModalConfig2.default.YES, _VXPayModalConfig2.default.NO].indexOf(value) !== -1;
		}
	}]);

	return VXPayValidator;
}();

exports.default = VXPayValidator;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VXPayValidator = __webpack_require__(101);

var _VXPayValidator2 = _interopRequireDefault(_VXPayValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayModalConfig = function () {
	function VXPayModalConfig() {
		_classCallCheck(this, VXPayModalConfig);

		this._login = VXPayModalConfig.YES;
		this._showHeader = VXPayModalConfig.YES;
		this._showTeaser = VXPayModalConfig.YES;
		this._showFooter = VXPayModalConfig.YES;
		this._support = VXPayModalConfig.YES;
		this._showOAuth = VXPayModalConfig.YES;
		this._showNL = VXPayModalConfig.YES;
		this._neutralHeader = VXPayModalConfig.NO;
		this._teaserBonus = VXPayModalConfig.NO;
		this._showThank = VXPayModalConfig.NO;
		this._showLogo = VXPayModalConfig.NO;
		this._showTeaserBar = VXPayModalConfig.NO;
	}

	/**
  * @param value
  * @private
  */


	_createClass(VXPayModalConfig, [{
		key: 'login',


		/**
   * @return {0|1}
   */
		get: function get() {
			return this._login;
		}

		/**
   * @param {0|1} value
   */
		,
		set: function set(value) {
			VXPayModalConfig._throwOnInvalid(value);
			this._login = value;
		}

		/**
   * @return {0|1}
   */

	}, {
		key: 'showHeader',
		get: function get() {
			return this._showHeader;
		}

		/**
   * @param {0|1} value
   */
		,
		set: function set(value) {
			VXPayModalConfig._throwOnInvalid(value);
			this._showHeader = value;
		}

		/**
   * @return {0|1}
   */

	}, {
		key: 'showTeaser',
		get: function get() {
			return this._showTeaser;
		}

		/**
   * @param {0|1} value
   */
		,
		set: function set(value) {
			VXPayModalConfig._throwOnInvalid(value);
			this._showTeaser = value;
		}

		/**
   * @return {0|1}
   */

	}, {
		key: 'showFooter',
		get: function get() {
			return this._showFooter;
		}

		/**
   * @param {0|1} value
   */
		,
		set: function set(value) {
			VXPayModalConfig._throwOnInvalid(value);
			this._showFooter = value;
		}

		/**
   * @return {0|1}
   */

	}, {
		key: 'neutralHeader',
		get: function get() {
			return this._neutralHeader;
		}

		/**
   * @param {0|1} value
   */
		,
		set: function set(value) {
			VXPayModalConfig._throwOnInvalid(value);
			this._neutralHeader = value;
		}

		/**
   * @return {0|1}
   */

	}, {
		key: 'teaserBonus',
		get: function get() {
			return this._teaserBonus;
		}

		/**
   * @param {0|1} value
   */
		,
		set: function set(value) {
			VXPayModalConfig._throwOnInvalid(value);
			this._teaserBonus = value;
		}

		/**
   * @return {0|1}
   */

	}, {
		key: 'support',
		get: function get() {
			return this._support;
		}

		/**
   * @param {0|1} value
   */
		,
		set: function set(value) {
			VXPayModalConfig._throwOnInvalid(value);
			this._support = value;
		}

		/**
   * @return {0|1}
   */

	}, {
		key: 'showOAuth',
		get: function get() {
			return this._showOAuth;
		}

		/**
   * @param {0|1} value
   */
		,
		set: function set(value) {
			VXPayModalConfig._throwOnInvalid(value);
			this._showOAuth = value;
		}

		/**
   * @return {0|1}
   */

	}, {
		key: 'showNL',
		get: function get() {
			return this._showNL;
		}

		/**
   * @param {0|1} value
   */
		,
		set: function set(value) {
			VXPayModalConfig._throwOnInvalid(value);
			this._showNL = value;
		}

		/**
   * @return {0|1}
   */

	}, {
		key: 'showThank',
		get: function get() {
			return this._showThank;
		}

		/**
   * @param {0|1} value
   */
		,
		set: function set(value) {
			VXPayModalConfig._throwOnInvalid(value);
			this._showThank = value;
		}

		/**
   * @return {0|1}
   */

	}, {
		key: 'showLogo',
		get: function get() {
			return this._showLogo;
		}

		/**
   * @param {0|1} value
   */
		,
		set: function set(value) {
			VXPayModalConfig._throwOnInvalid(value);
			this._showLogo = value;
		}

		/**
   * @return {0|1}
   */

	}, {
		key: 'showTeaserBar',
		get: function get() {
			return this._showTeaserBar;
		}

		/**
   * @param {0|1} value
   */
		,
		set: function set(value) {
			VXPayModalConfig._throwOnInvalid(value);
			this._showTeaserBar = value;
		}
	}], [{
		key: '_throwOnInvalid',
		value: function _throwOnInvalid(value) {
			if (!_VXPayValidator2.default.isModalConfigValueAllowed(value)) {
				throw new TypeError('Value not allowed. Try one of: VXPayModalConfig.YES, VXPayModalConfig.NO');
			}
		}
	}]);

	return VXPayModalConfig;
}();

VXPayModalConfig.YES = 1;
VXPayModalConfig.NO = 0;

exports.default = VXPayModalConfig;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayLogger = function () {
	/**
  * @param {Boolean} enable
  * @param {Window} window
  */
	function VXPayLogger(enable) {
		var window = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		_classCallCheck(this, VXPayLogger);

		this.enabled = enable || false;
		this._container = [];
		this._window = window;
	}

	/**
  * Accepts any number of params
  */


	_createClass(VXPayLogger, [{
		key: 'log',
		value: function log() {
			// check enabled
			if (!this.enabled) {
				return;
			}

			// for browser
			if (typeof this._window !== 'undefined') {
				return this._window.console.log.apply(this, arguments);
			}

			// for tests - just collect
			this._container.push({
				time: new Date(),
				message: JSON.stringify(arguments)
			});
		}

		/**
   * @return {Array<String>}
   */

	}, {
		key: 'container',
		get: function get() {
			return this._container;
		}
	}]);

	return VXPayLogger;
}();

VXPayLogger.LOG_INCOMING = '<-- []';
VXPayLogger.LOG_OUTGOING = '--> []';

exports.default = VXPayLogger;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayCurrency = function () {
	function VXPayCurrency() {
		_classCallCheck(this, VXPayCurrency);
	}

	_createClass(VXPayCurrency, null, [{
		key: 'getDefault',

		/**
   * @return {string}
   */
		value: function getDefault() {
			return VXPayCurrency.EUR;
		}

		/**
   * @return {String[]}
   */

	}, {
		key: 'getAllowed',
		value: function getAllowed() {
			return [VXPayCurrency.EUR, VXPayCurrency.USD, VXPayCurrency.CHF];
		}
	}]);

	return VXPayCurrency;
}();

VXPayCurrency.EUR = 'EUR';
VXPayCurrency.USD = 'USD';
VXPayCurrency.CHF = 'CHF';

exports.default = VXPayCurrency;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayHooksConfig = function () {
	function VXPayHooksConfig() {
		_classCallCheck(this, VXPayHooksConfig);

		this._onAny = [];
		this._onBeforeSend = [];
		this._onLoad = [];
	}

	/**
  * @param {Function} handler
  * @return {VXPayHooksConfig}
  */


	_createClass(VXPayHooksConfig, [{
		key: 'onLoad',
		value: function onLoad(handler) {
			this._onLoad.push(handler);
			return this;
		}

		/**
   * @param {Function} handler
   * @return {VXPayHooksConfig}
   */

	}, {
		key: 'onAny',
		value: function onAny(handler) {
			this._onAny.push(handler);
			return this;
		}

		/**
   * @param {Function} handler
   * @return {VXPayHooksConfig}
   */

	}, {
		key: 'onBeforeSend',
		value: function onBeforeSend(handler) {
			this._onBeforeSend.push(handler);
			return this;
		}

		/**
   * @param {String} hook
   * @param {Array} callbackArguments
   * @return {boolean}
   */

	}, {
		key: 'trigger',
		value: function trigger(hook) {
			var callbackArguments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

			var name = '_' + hook;

			if (!this.hasOwnProperty(name)) {
				throw new Error('Hook ' + hook + ' not available!');
			}

			// early exit
			if (this[name].length === 0) {
				return true;
			}

			// process all callbacks
			this[name].map(function (callback) {
				callback.apply(callback, callbackArguments);
			});

			return true;
		}
	}]);

	return VXPayHooksConfig;
}();

VXPayHooksConfig.ON_LOAD = 'onLoad';
VXPayHooksConfig.ON_ANY = 'onAny';
VXPayHooksConfig.ON_BEFORE_SEND = 'onBeforeSend';

exports.default = VXPayHooksConfig;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = !__webpack_require__(7) && !__webpack_require__(3)(function () {
  return Object.defineProperty(__webpack_require__(72)('div'), 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = __webpack_require__(6);

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(14);
var toIObject = __webpack_require__(18);
var arrayIndexOf = __webpack_require__(54)(false);
var IE_PROTO = __webpack_require__(74)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys
  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }return result;
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(8);
var anObject = __webpack_require__(1);
var getKeys = __webpack_require__(37);

module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }return O;
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(18);
var gOPN = __webpack_require__(40).f;
var toString = {}.toString;

var windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)

var getKeys = __webpack_require__(37);
var gOPS = __webpack_require__(55);
var pIE = __webpack_require__(51);
var toObject = __webpack_require__(11);
var IObject = __webpack_require__(50);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(3)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
  }return T;
} : $assign;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aFunction = __webpack_require__(13);
var isObject = __webpack_require__(4);
var invoke = __webpack_require__(113);
var arraySlice = [].slice;
var factories = {};

var construct = function construct(F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) {
      n[i] = 'a[' + i + ']';
    } // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  }return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function bound() /* args... */{
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
                  var un = that === undefined;
                  switch (args.length) {
                                    case 0:
                                                      return un ? fn() : fn.call(that);
                                    case 1:
                                                      return un ? fn(args[0]) : fn.call(that, args[0]);
                                    case 2:
                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
                                    case 3:
                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
                                    case 4:
                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
                  }return fn.apply(that, args);
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $parseInt = __webpack_require__(2).parseInt;
var $trim = __webpack_require__(46).trim;
var ws = __webpack_require__(78);
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
} : $parseInt;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $parseFloat = __webpack_require__(2).parseFloat;
var $trim = __webpack_require__(46).trim;

module.exports = 1 / $parseFloat(__webpack_require__(78) + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cof = __webpack_require__(22);
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(4);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(81);
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function roundTiesToEven(n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// call something on iterator step with safe closing on error
var anObject = __webpack_require__(1);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aFunction = __webpack_require__(13);
var toObject = __webpack_require__(11);
var IObject = __webpack_require__(50);
var toLength = __webpack_require__(9);

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (; isRight ? index >= 0 : length > index; index += i) {
    if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
  }return memo;
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)


var toObject = __webpack_require__(11);
var toAbsoluteIndex = __webpack_require__(38);
var toLength = __webpack_require__(9);

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];else delete O[to];
    to += inc;
    from += inc;
  }return O;
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (done, value) {
  return { value: value, done: !!done };
};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(7) && /./g.flags != 'g') __webpack_require__(8).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(59)
});

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var newPromiseCapability = __webpack_require__(96);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strong = __webpack_require__(128);
var validate = __webpack_require__(48);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(62)(MAP, function (get) {
  return function Map() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(8).f;
var create = __webpack_require__(39);
var redefineAll = __webpack_require__(44);
var ctx = __webpack_require__(21);
var anInstance = __webpack_require__(42);
var forOf = __webpack_require__(43);
var $iterDefine = __webpack_require__(84);
var step = __webpack_require__(123);
var setSpecies = __webpack_require__(41);
var DESCRIPTORS = __webpack_require__(7);
var fastKey = __webpack_require__(32).fastKey;
var validate = __webpack_require__(48);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function getEntry(that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME; // collection type
      that._i = create(null); // index
      that._f = undefined; // first entry
      that._l = undefined; // last entry
      that[SIZE] = 0; // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function _delete(key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        }return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) {
            entry = entry.p;
          }
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function get() {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
      // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key, // <- key
        v: value, // <- value
        p: prev = that._l, // <- previous entry
        n: undefined, // <- next entry
        r: false // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    }return that;
  },
  getEntry: getEntry,
  setStrong: function setStrong(C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind; // kind
      this._l = undefined; // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) {
        entry = entry.p;
      } // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strong = __webpack_require__(128);
var validate = __webpack_require__(48);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(62)(SET, function (get) {
  return function Set() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var each = __webpack_require__(29)(0);
var redefine = __webpack_require__(16);
var meta = __webpack_require__(32);
var assign = __webpack_require__(111);
var weak = __webpack_require__(131);
var isObject = __webpack_require__(4);
var fails = __webpack_require__(3);
var validate = __webpack_require__(48);
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function wrapper(get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(62)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () {
  return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7;
})) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
        // store all the rest on native weakmap
      }return method.call(this, a, b);
    });
  });
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var redefineAll = __webpack_require__(44);
var getWeak = __webpack_require__(32).getWeak;
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var anInstance = __webpack_require__(42);
var forOf = __webpack_require__(43);
var createArrayMethod = __webpack_require__(29);
var $has = __webpack_require__(14);
var validate = __webpack_require__(48);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function UncaughtFrozenStore() {
  this.a = [];
};
var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function get(key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function has(key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function set(key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;else this.a.push([key, value]);
  },
  'delete': function _delete(key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME; // collection type
      that._i = id++; // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function _delete(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(27);
var toLength = __webpack_require__(9);
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(40);
var gOPS = __webpack_require__(55);
var anObject = __webpack_require__(1);
var Reflect = __webpack_require__(2).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray

var isArray = __webpack_require__(56);
var isObject = __webpack_require__(4);
var toLength = __webpack_require__(9);
var ctx = __webpack_require__(21);
var IS_CONCAT_SPREADABLE = __webpack_require__(6)('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(9);
var repeat = __webpack_require__(80);
var defined = __webpack_require__(26);

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getKeys = __webpack_require__(37);
var toIObject = __webpack_require__(18);
var isEnum = __webpack_require__(51).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      if (isEnum.call(O, key = keys[i++])) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }return result;
  };
};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(52);
var from = __webpack_require__(138);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forOf = __webpack_require__(43);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://rwaldron.github.io/proposal-math-extensions/
module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  if (arguments.length === 0
  // eslint-disable-next-line no-self-compare
  || x != x
  // eslint-disable-next-line no-self-compare
  || inLow != inLow
  // eslint-disable-next-line no-self-compare
  || inHigh != inHigh
  // eslint-disable-next-line no-self-compare
  || outLow != outLow
  // eslint-disable-next-line no-self-compare
  || outHigh != outHigh) return NaN;
  if (x === Infinity || x === -Infinity) return x;
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VXPayEnvironment = __webpack_require__(99);

var _VXPayEnvironment2 = _interopRequireDefault(_VXPayEnvironment);

var _VXPayLanguage = __webpack_require__(100);

var _VXPayLanguage2 = _interopRequireDefault(_VXPayLanguage);

var _VXPayValidator = __webpack_require__(101);

var _VXPayValidator2 = _interopRequireDefault(_VXPayValidator);

var _VXPayFlow = __webpack_require__(10);

var _VXPayFlow2 = _interopRequireDefault(_VXPayFlow);

var _VXPayIframe = __webpack_require__(49);

var _VXPayIframe2 = _interopRequireDefault(_VXPayIframe);

var _VXPayModalConfig = __webpack_require__(102);

var _VXPayModalConfig2 = _interopRequireDefault(_VXPayModalConfig);

var _VXPayUrlHelper = __webpack_require__(67);

var _VXPayUrlHelper2 = _interopRequireDefault(_VXPayUrlHelper);

var _VXPayFlowChangedMessage = __webpack_require__(142);

var _VXPayFlowChangedMessage2 = _interopRequireDefault(_VXPayFlowChangedMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayConfig = function () {
	/**
  * @param {Window} window
  * @param {VXPayModalConfig} modalConfig
  */
	function VXPayConfig(window) {
		var modalConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		_classCallCheck(this, VXPayConfig);

		this._env = _VXPayEnvironment2.default.getDefault();
		this._logging = false;
		this._flow = _VXPayFlow2.default.getDefault();
		this._lang = _VXPayLanguage2.default.getDefault();
		this._urls = {
			abg: VXPayConfig.ABG_DEFAULT.replace('{language}', this._lang),
			privacy: VXPayConfig.PRIVACY_DEFAULT.replace('{language}', this._lang),
			ruri: '',
			suri: '',
			purl: ''
		};

		this._pfm = '';
		this._enableTab = false;
		this._host = '';
		this._token = '';
		this._promoCode = '';
		this._wmId = '';
		this._wmSubRef = '';
		this._wmToken = '';
		this._adtv = '';
		this._subRef = '';
		this._apiVersion = 3;

		this._modalConfig = typeof modalConfig === 'undefined' ? new _VXPayModalConfig2.default() : modalConfig;

		this._window = window;
		this._helper = new _VXPayUrlHelper2.default(window.URL);
	}

	/**
  * @return {Window|*}
  */


	_createClass(VXPayConfig, [{
		key: 'getPaymentFrameUrl',


		/**
   * @example https://www.visit-x.net/VXPAY-V3/?pfm=1502&lang=en&environment=vxone&flow=login&sview=&lazy=1&mc[login]=1&mc[showHeader]=1&mc[showTeaser]=1&mc[showFooter]=1&mc[neutralHeader]=1&mc[teaserBonus]=0&mc[support]=1&mc[showOAuth]=1&mc[showNL]=1&mc[showThank]=0&mc[showLogo]=1&mc[showTeaserBar]=1&mc[parentInFrame]=0
   * @return {string}
   */
		value: function getPaymentFrameUrl() {
			return this._helper.generate(_VXPayIframe2.default.ORIGIN + '/VXPAY-V' + this._apiVersion + '/', this.getOptions(), this._modalConfig);
		}

		/**
   * @return {Object}
   */

	}, {
		key: 'getOptions',
		value: function getOptions() {
			return {
				agbUrl: this.abgUrl,
				privacyUrl: this.privacyUrl,
				environment: this._env,
				flow: this._flow,
				lang: this._lang,
				pfm: this._pfm,
				w: this._wmId,
				ws: this._wmSubRef,
				wt: this._wmToken,
				adtv: this._adtv,
				sub: this._subRef,
				enableTab: this._enableTab ? 1 : 0,
				option: '',
				pc: this._promoCode,
				tt: this._token,
				ruri: this._urls.ruri,
				host: this._host
			};
		}

		/**
   * @return {Object}
   */

	}, {
		key: 'getAdditionalOptions',
		value: function getAdditionalOptions() {
			return {
				ref: this._wmId,
				ruri: this._urls.ruri,
				surl: this._urls.suri,
				aurl: this.abgUrl,
				prurl: this.privacyUrl,
				purl: this._urls.purl
			};
		}

		/**
   * @return {String}
   */

	}, {
		key: 'setTokenFromMessage',


		/**
   * @param {VXPayTransferTokenMessage} message
   */
		value: function setTokenFromMessage(message) {
			this._token = message.token;
		}

		/**
   * @return {String}
   */

	}, {
		key: 'merge',


		/**
   * @param {Object} options
   */
		value: function merge() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			var that = this;

			Object.keys(that.getOptions()).forEach(function (key) {
				if (options.hasOwnProperty(key)) {
					that[key] = options[key];
				}
			});
		}

		/**
   * @param {VXPayFlowChangedHookMessage} message
   */

	}, {
		key: 'updateFlow',
		value: function updateFlow(message) {
			this._flow = message.newFlow;
		}
	}, {
		key: 'window',
		get: function get() {
			return this._window;
		}
	}, {
		key: 'abgUrl',
		get: function get() {
			return this._urls.abg;
		}

		/**
   * @param {String} url
   */
		,
		set: function set(url) {
			if (!_VXPayValidator2.default.isUrl(url)) {
				throw new Error('Invalid URL provided: ' + url);
			}

			this._urls.abg = url;
		}

		/**
   * @return {String}
   */

	}, {
		key: 'privacyUrl',
		get: function get() {
			return this._urls.privacy;
		}

		/**
   * @param {String} url
   */
		,
		set: function set(url) {
			if (!_VXPayValidator2.default.isUrl(url)) {
				throw new Error('Invalid URL provided: ' + url);
			}

			this._urls.privacy = url;
		}

		/**
   * @return {String}
   */

	}, {
		key: 'env',
		get: function get() {
			return this._env;
		}

		/**
   * @param {String} value
   */
		,
		set: function set(value) {
			if (!_VXPayValidator2.default.isEnvironmentSupported(value)) {
				throw new TypeError('Environment ' + value + ' is not supported. Please select one of ' + _VXPayEnvironment2.default.getAvailable());
			}

			this._env = value;
		}

		/**
   * @return {Boolean}
   */

	}, {
		key: 'logging',
		get: function get() {
			return this._logging;
		}

		/**
   * @param {Boolean} value
   */
		,
		set: function set(value) {
			this._logging = value;
		}

		/**
   * @return {String}
   */

	}, {
		key: 'language',
		get: function get() {
			return this._lang.toUpperCase();
		}

		/**
   * @param {String} value
   */
		,
		set: function set(value) {
			if (!_VXPayValidator2.default.isLanguageSupported(value)) {
				var msg = 'Unsupported language: ' + value.toString() + '. Allowed: ' + _VXPayLanguage2.default.getAvailable().join(', ');
				throw new TypeError(msg);
			}

			this._lang = value;
		}

		/**
   * @return {String}
   */

	}, {
		key: 'flow',
		get: function get() {
			return this._flow;
		}

		/**
   * @param {String} value
   * @see VXPayFlow
   */
		,
		set: function set(value) {
			if (!_VXPayValidator2.default.isFlowAllowed(value)) {
				var msg = 'Flow not allowed: ' + value.toString() + '. Select one of: ' + _VXPayFlow2.default.getAllowed().join(', ');
				throw new TypeError(msg);
			}

			this._flow = value;
		}

		/**
   * @return {String|int}
   */

	}, {
		key: 'host',
		get: function get() {
			return this._host;
		}

		/**
   * @param {String|int} value
   */
		,
		set: function set(value) {
			this._host = value;
		}

		/**
   * @return {String}
   */

	}, {
		key: 'token',
		get: function get() {
			return this._token;
		}

		/**
   * @param {String} value
   */
		,
		set: function set(value) {
			this._token = value;
		}
	}, {
		key: 'promoCode',
		get: function get() {
			return this._promoCode;
		}

		/**
   * @param {String} value
   */
		,
		set: function set(value) {
			this._promoCode = value;
		}

		/**
   * @return {String|int}
   */

	}, {
		key: 'wmId',
		get: function get() {
			return this._wmId;
		}

		/**
   * @param {String|int} value
   */
		,
		set: function set(value) {
			this._wmId = value;
		}

		/**
   * @return {String|int}
   */

	}, {
		key: 'wmSubRef',
		get: function get() {
			return this._wmSubRef;
		}

		/**
   * @param {String|int} value
   */
		,
		set: function set(value) {
			this._wmSubRef = value;
		}

		/**
   * @return {String}
   */

	}, {
		key: 'wmToken',
		get: function get() {
			return this._wmToken;
		}

		/**
   * @param {String} value
   */
		,
		set: function set(value) {
			this._wmToken = value;
		}

		/**
   * @return {*}
   */

	}, {
		key: 'adtv',
		get: function get() {
			return this._adtv;
		}

		/**
   * @param value
   */
		,
		set: function set(value) {
			this._adtv = value;
		}

		/**
   * @return {*}
   */

	}, {
		key: 'subRef',
		get: function get() {
			return this._subRef;
		}

		/**
   * @param value
   */
		,
		set: function set(value) {
			this._subRef = value;
		}

		/**
   * @return {number}
   */

	}, {
		key: 'apiVersion',
		get: function get() {
			return this._apiVersion;
		}

		/**
   * @param {number} value
   */
		,
		set: function set(value) {
			this._apiVersion = parseInt(value, 10);
		}

		/**
   * @return {VXPayModalConfig}
   */

	}, {
		key: 'modalConfig',
		get: function get() {
			return this._modalConfig;
		}

		/**
   * @param {VXPayModalConfig} value
   */
		,
		set: function set(value) {
			if (!(value instanceof _VXPayModalConfig2.default)) {
				throw new TypeError('Modal config value should be instance of VXPayModalConfig!');
			}

			this._modalConfig = value;
		}

		/**
   * @return {string}
   */

	}, {
		key: 'pfm',
		get: function get() {
			return this._pfm;
		}

		/**
   * @param {string} value
   */
		,
		set: function set(value) {
			this._pfm = value;
		}

		/**
   * @return {boolean}
   */

	}, {
		key: 'enableTab',
		get: function get() {
			return this._enableTab;
		}

		/**
   * @param {boolean} value
   */
		,
		set: function set(value) {
			this._enableTab = value;
		}
	}]);

	return VXPayConfig;
}();

VXPayConfig.ABG_DEFAULT = 'https://www.visit-x.net/CAMS/{language}/Info/Zentrum.html?submod=AGB&track=Account';
VXPayConfig.PRIVACY_DEFAULT = 'https://www.visit-x.net/CAMS/{language}/Info/Zentrum.html?submod=Datenschutz&track=Index';

exports.default = VXPayConfig;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayDomHelper = function () {

	/**
  * @see VXPayDomHelperFactory::getHelper
  * @param {Window} window
  * @param {jQuery} jQuery
  * @param {Fx} Fx
  */
	function VXPayDomHelper(window, jQuery, Fx) {
		_classCallCheck(this, VXPayDomHelper);

		this._window = window;
		this._jQuery = jQuery;
		this._fx = Fx; // Mootools FX
	}

	/**
  * @param {Window} window
  * @return {number}
  */


	_createClass(VXPayDomHelper, [{
		key: '_hasJQuery',


		/**
   * @return {boolean}
   * @private
   */
		value: function _hasJQuery() {
			return typeof this._jQuery !== 'undefined' && typeof this._jQuery.Animation !== 'undefined';
		}

		/**
   * @return {boolean}
   * @private
   */

	}, {
		key: '_hasMooTools',
		value: function _hasMooTools() {
			return typeof this._fx !== 'undefined' && typeof this._fx.Scroll !== 'undefined';
		}

		/**
   * @param {Number} top
   * @return {*}
   */

	}, {
		key: 'scrollTo',
		value: function scrollTo(top) {
			try {
				if (this._hasMooTools()) {
					return new this._fx.Scroll(this._window, { duration: 500 }).start(0, top);
				}

				if (this._hasJQuery()) {
					return this._jQuery('html, body').animate({ scrollTop: top }, 500);
				}

				// default no animation
				return this._window.scrollTo(0, top);
			} catch (e) {}
		}
	}], [{
		key: 'getClientHeight',
		value: function getClientHeight(window) {
			return window.innerHeight || window.document.documentElement.clientHeight || window.document.body.clientHeight;
		}

		/**
   * @param {HTMLElement} element
   * @param {String} attribute
   * @param {String|Number} value
   * @return {boolean}
   */

	}, {
		key: 'isStyleAttributeSuppored',
		value: function isStyleAttributeSuppored(element, attribute, value) {
			var supported = false;

			try {
				element.style[attribute] = value;
				supported = element.style[attribute] === value;
			} catch (e) {}

			return supported;
		}
	}]);

	return VXPayDomHelper;
}();

VXPayDomHelper.TAG_IFRAME = 'iframe';

exports.default = VXPayDomHelper;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayHookMessage2 = __webpack_require__(69);

var _VXPayHookMessage3 = _interopRequireDefault(_VXPayHookMessage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayFlowChangedHookMessage = function (_VXPayHookMessage) {
	_inherits(VXPayFlowChangedHookMessage, _VXPayHookMessage);

	/**
  * @param {string} oldFlow
  * @param {string} newFlow
  */
	function VXPayFlowChangedHookMessage() {
		var oldFlow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
		var newFlow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

		_classCallCheck(this, VXPayFlowChangedHookMessage);

		var _this = _possibleConstructorReturn(this, (VXPayFlowChangedHookMessage.__proto__ || Object.getPrototypeOf(VXPayFlowChangedHookMessage)).call(this, _VXPayHookMessage3.default.HOOK_FLOW_CHANGED));

		_this.oldFlow = oldFlow;
		_this.newFlow = newFlow;
		return _this;
	}

	return VXPayFlowChangedHookMessage;
}(_VXPayHookMessage3.default);

exports.default = VXPayFlowChangedHookMessage;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _VXPayIframe2 = __webpack_require__(49);

var _VXPayIframe3 = _interopRequireDefault(_VXPayIframe2);

var _VXPayHasSessionCookieMessage = __webpack_require__(144);

var _VXPayHasSessionCookieMessage2 = _interopRequireDefault(_VXPayHasSessionCookieMessage);

var _VXPayMessageFactory = __webpack_require__(145);

var _VXPayMessageFactory2 = _interopRequireDefault(_VXPayMessageFactory);

var _VXPayEventListener = __webpack_require__(68);

var _VXPayEventListener2 = _interopRequireDefault(_VXPayEventListener);

var _VXPayHelperHooksConfig = __webpack_require__(374);

var _VXPayHelperHooksConfig2 = _interopRequireDefault(_VXPayHelperHooksConfig);

var _VXPayHooksConfig = __webpack_require__(105);

var _VXPayHooksConfig2 = _interopRequireDefault(_VXPayHooksConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayHelperFrame = function (_VXPayIframe) {
	_inherits(VXPayHelperFrame, _VXPayIframe);

	/**
  * @param {Document} document
  * @param {String} url
  * @param {String} id
  * @param {CSSStyleDeclaration} style
  */
	function VXPayHelperFrame(document, url) {
		var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : VXPayHelperFrame.NAME;
		var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : VXPayHelperFrame.STYLE_DEFAULT;

		_classCallCheck(this, VXPayHelperFrame);

		var _this = _possibleConstructorReturn(this, (VXPayHelperFrame.__proto__ || Object.getPrototypeOf(VXPayHelperFrame)).call(this, document, url, id, style));
		// init the frame


		_this._cookieMsg = null;
		_this._frame.name = 'vxpay-helper';
		_this._hooks = new _VXPayHelperHooksConfig2.default();
		return _this;
	}

	/**
  * @param {Function} resolve
  * @param {Function} reject
  * @param {MessageEvent} event
  * @return {boolean}
  * @private
  */


	_createClass(VXPayHelperFrame, [{
		key: '_cookieMessageHandler',
		value: function _cookieMessageHandler(resolve, reject, event) {
			// origin check
			if (event.origin && _VXPayIframe3.default.ORIGIN.indexOf(event.origin) === -1) {
				reject('Event origin does not match: ' + event.origin);
			}

			try {
				this._cookieMsg = _VXPayMessageFactory2.default.fromJson(event.data);
			} catch (e) {
				this._cookieMsg = new _VXPayHasSessionCookieMessage2.default();
			}

			// trigger hook
			this._hooks.trigger(_VXPayHooksConfig2.default.ON_ANY, [this._cookieMsg]);

			// otherwise - not logged in
			resolve(this._cookieMsg);
		}

		/**
   * @return {Promise<VXPayHasSessionCookieMessage>}
   */

	}, {
		key: 'getLoginCookie',
		value: function getLoginCookie() {
			var _this2 = this;

			return new Promise(function (resolve, reject) {
				if (null !== _this2._cookieMsg) {
					resolve(_this2._cookieMsg);
				}

				_VXPayEventListener2.default.addEvent(_VXPayIframe3.default.EVENT_MESSAGE, _this2._frame.ownerDocument.defaultView, _this2._cookieMessageHandler.bind(_this2, resolve, reject));
			});
		}
	}, {
		key: '_markLoaded',
		value: function _markLoaded() {
			_get(VXPayHelperFrame.prototype.__proto__ || Object.getPrototypeOf(VXPayHelperFrame.prototype), '_markLoaded', this).call(this);
			this._hooks.trigger(_VXPayHelperHooksConfig2.default.ON_LOAD);
		}

		/**
   * Override to add a before send hook
   * @param {String|VXPayMessage} message
   * @param {String} origin
   */

	}, {
		key: 'postMessage',
		value: function postMessage(message) {
			var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';

			this._hooks.trigger(_VXPayHelperHooksConfig2.default.ON_BEFORE_SEND, [message]);
			_get(VXPayHelperFrame.prototype.__proto__ || Object.getPrototypeOf(VXPayHelperFrame.prototype), 'postMessage', this).call(this, message, origin);
		}
	}, {
		key: 'triggerLoad',
		value: function triggerLoad() {
			if (this._loaded) {
				return;
			}

			this._frame.ownerDocument.getElementsByTagName('body').item(0).appendChild(this._frame);
		}

		/**
   * @return {VXPayHelperHooksConfig}
   */

	}, {
		key: 'hooks',
		get: function get() {
			return this._hooks;
		}
	}]);

	return VXPayHelperFrame;
}(_VXPayIframe3.default);

VXPayHelperFrame.STYLE_DEFAULT = { display: 'none' };

VXPayHelperFrame.NAME = 'vx-helper-frame-payment';

exports.default = VXPayHelperFrame;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayMessage2 = __webpack_require__(5);

var _VXPayMessage3 = _interopRequireDefault(_VXPayMessage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayHasSessionCookieMessage = function (_VXPayMessage) {
	_inherits(VXPayHasSessionCookieMessage, _VXPayMessage);

	/**
  * @param {Boolean} hasCookie
  */
	function VXPayHasSessionCookieMessage() {
		var hasCookie = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

		_classCallCheck(this, VXPayHasSessionCookieMessage);

		var _this = _possibleConstructorReturn(this, (VXPayHasSessionCookieMessage.__proto__ || Object.getPrototypeOf(VXPayHasSessionCookieMessage)).call(this, _VXPayMessage3.default.TYPE_HAS_LOGIN_COOKIE));

		_this.hasCookie = hasCookie;
		return _this;
	}

	return VXPayHasSessionCookieMessage;
}(_VXPayMessage3.default);

exports.default = VXPayHasSessionCookieMessage;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VXPayMessage = __webpack_require__(5);

var _VXPayMessage2 = _interopRequireDefault(_VXPayMessage);

var _VXPayHasSessionCookieMessage = __webpack_require__(144);

var _VXPayHasSessionCookieMessage2 = _interopRequireDefault(_VXPayHasSessionCookieMessage);

var _VXPayContentLoadedMessage = __webpack_require__(359);

var _VXPayContentLoadedMessage2 = _interopRequireDefault(_VXPayContentLoadedMessage);

var _VXPayHookMessageFactory = __webpack_require__(360);

var _VXPayHookMessageFactory2 = _interopRequireDefault(_VXPayHookMessageFactory);

var _VXPayIframeReadyMessage = __webpack_require__(362);

var _VXPayIframeReadyMessage2 = _interopRequireDefault(_VXPayIframeReadyMessage);

var _VXPayViewReadyMessage = __webpack_require__(146);

var _VXPayViewReadyMessage2 = _interopRequireDefault(_VXPayViewReadyMessage);

var _VXPayTransferTokenMessage = __webpack_require__(363);

var _VXPayTransferTokenMessage2 = _interopRequireDefault(_VXPayTransferTokenMessage);

var _VXPayIframeCloseMessage = __webpack_require__(364);

var _VXPayIframeCloseMessage2 = _interopRequireDefault(_VXPayIframeCloseMessage);

var _VXPayIsVisibleMessage = __webpack_require__(147);

var _VXPayIsVisibleMessage2 = _interopRequireDefault(_VXPayIsVisibleMessage);

var _VXPaySuccessMessage = __webpack_require__(365);

var _VXPaySuccessMessage2 = _interopRequireDefault(_VXPaySuccessMessage);

var _VXPayIsLoggedInResponseMessage = __webpack_require__(367);

var _VXPayIsLoggedInResponseMessage2 = _interopRequireDefault(_VXPayIsLoggedInResponseMessage);

var _VXPayAVSStatusMessage = __webpack_require__(368);

var _VXPayAVSStatusMessage2 = _interopRequireDefault(_VXPayAVSStatusMessage);

var _VXPayAVSStatus = __webpack_require__(148);

var _VXPayAVSStatus2 = _interopRequireDefault(_VXPayAVSStatus);

var _VXPayBalanceMessage = __webpack_require__(369);

var _VXPayBalanceMessage2 = _interopRequireDefault(_VXPayBalanceMessage);

var _VXPayActiveAbosMessage = __webpack_require__(371);

var _VXPayActiveAbosMessage2 = _interopRequireDefault(_VXPayActiveAbosMessage);

var _VXPayLoggedOutMessage = __webpack_require__(373);

var _VXPayLoggedOutMessage2 = _interopRequireDefault(_VXPayLoggedOutMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayMessageFactory = function () {
	function VXPayMessageFactory() {
		_classCallCheck(this, VXPayMessageFactory);
	}

	_createClass(VXPayMessageFactory, null, [{
		key: 'fromJson',


		/**
   * @param {string} json
   * @return {VXPayMessage}
   * @throws {TypeError|SyntaxError}
   */
		value: function fromJson() {
			var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '{}';

			var message = JSON.parse(json);

			if (!message.hasOwnProperty('type')) {
				throw new TypeError('Invalid message format - no type field');
			}

			switch (message.type) {
				case _VXPayMessage2.default.TYPE_HAS_LOGIN_COOKIE:
					return new _VXPayHasSessionCookieMessage2.default(!!message.data);

				case _VXPayMessage2.default.TYPE_AVS_STATUS:
					return new _VXPayAVSStatusMessage2.default(_VXPayAVSStatus2.default.fromData(message.data));

				case _VXPayMessage2.default.TYPE_BALANCE:
					return _VXPayBalanceMessage2.default.fromData(message.data);

				case _VXPayMessage2.default.TYPE_LOGGED_OUT:
					return new _VXPayLoggedOutMessage2.default();

				case _VXPayMessage2.default.TYPE_ACTIVE_ABOS:
					return _VXPayActiveAbosMessage2.default.fromData(message.data);

				case _VXPayMessage2.default.TYPE_CONTENT_LOADED:
					return new _VXPayContentLoadedMessage2.default();

				case _VXPayMessage2.default.TYPE_IFRAME_READY:
					return new _VXPayIframeReadyMessage2.default();

				case _VXPayMessage2.default.TYPE_HOOK:
					return _VXPayHookMessageFactory2.default.fromData(message.data);

				case _VXPayMessage2.default.TYPE_VIEW_READY:
					return new _VXPayViewReadyMessage2.default();

				case _VXPayMessage2.default.TYPE_IFRAME_CLOSE:
					return new _VXPayIframeCloseMessage2.default(message.data);

				case _VXPayMessage2.default.TYPE_IS_VISIBLE:
					return new _VXPayIsVisibleMessage2.default();

				case _VXPayMessage2.default.TYPE_SUCCESS:
					return new _VXPaySuccessMessage2.default(message.data);

				case _VXPayMessage2.default.TYPE_IS_LOGGED_IN:
					return new _VXPayIsLoggedInResponseMessage2.default(message.data);

				default:
					// transfer token?
					if (message.type.indexOf(_VXPayMessage2.default.TRANSFER_TOKEN_PREFIX) === 0) {
						var token = message.type.substr(_VXPayMessage2.default.TRANSFER_TOKEN_PREFIX.length);
						return new _VXPayTransferTokenMessage2.default(token);
					}

					// return an unknown message, but still a message
					var unknown = new _VXPayMessage2.default(message.type);
					unknown.raw = json;

					return unknown;
			}
		}
	}]);

	return VXPayMessageFactory;
}();

exports.default = VXPayMessageFactory;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayMessage2 = __webpack_require__(5);

var _VXPayMessage3 = _interopRequireDefault(_VXPayMessage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayViewReadyMessage = function (_VXPayMessage) {
	_inherits(VXPayViewReadyMessage, _VXPayMessage);

	function VXPayViewReadyMessage() {
		var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

		_classCallCheck(this, VXPayViewReadyMessage);

		return _possibleConstructorReturn(this, (VXPayViewReadyMessage.__proto__ || Object.getPrototypeOf(VXPayViewReadyMessage)).call(this, _VXPayMessage3.default.TYPE_VIEW_READY));
	}

	return VXPayViewReadyMessage;
}(_VXPayMessage3.default);

exports.default = VXPayViewReadyMessage;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayMessage2 = __webpack_require__(5);

var _VXPayMessage3 = _interopRequireDefault(_VXPayMessage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayIsVisibleMessage = function (_VXPayMessage) {
	_inherits(VXPayIsVisibleMessage, _VXPayMessage);

	/** {@inheritDoc} */
	function VXPayIsVisibleMessage() {
		var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

		_classCallCheck(this, VXPayIsVisibleMessage);

		return _possibleConstructorReturn(this, (VXPayIsVisibleMessage.__proto__ || Object.getPrototypeOf(VXPayIsVisibleMessage)).call(this, _VXPayMessage3.default.TYPE_IS_VISIBLE));
	}

	return VXPayIsVisibleMessage;
}(_VXPayMessage3.default);

exports.default = VXPayIsVisibleMessage;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayAVSStatus = function () {
	function VXPayAVSStatus() {
		_classCallCheck(this, VXPayAVSStatus);

		this._fsk18 = false;
	}

	/**
  * @return {Boolean}
  */


	_createClass(VXPayAVSStatus, [{
		key: "fsk18",
		get: function get() {
			return this._fsk18;
		}

		/**
   * @param {Boolean} value
   */
		,
		set: function set(value) {
			this._fsk18 = value;
		}

		/**
   * @param {Object} data
   * @return {VXPayAVSStatus}
   */

	}], [{
		key: "fromData",
		value: function fromData() {
			var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			var instance = new VXPayAVSStatus();
			instance.fsk18 = data.fsk18 || false;
			return instance;
		}
	}]);

	return VXPayAVSStatus;
}();

exports.default = VXPayAVSStatus;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _VXPayIframe2 = __webpack_require__(49);

var _VXPayIframe3 = _interopRequireDefault(_VXPayIframe2);

var _VXPayInitSessionMessage = __webpack_require__(375);

var _VXPayInitSessionMessage2 = _interopRequireDefault(_VXPayInitSessionMessage);

var _VXPayUpdateParamsMessage = __webpack_require__(376);

var _VXPayUpdateParamsMessage2 = _interopRequireDefault(_VXPayUpdateParamsMessage);

var _VXPayChangeRouteMessage = __webpack_require__(377);

var _VXPayChangeRouteMessage2 = _interopRequireDefault(_VXPayChangeRouteMessage);

var _VXPayUserAgentHelper = __webpack_require__(378);

var _VXPayUserAgentHelper2 = _interopRequireDefault(_VXPayUserAgentHelper);

var _VXPayDomHelper = __webpack_require__(141);

var _VXPayDomHelper2 = _interopRequireDefault(_VXPayDomHelper);

var _VXPayEventListener = __webpack_require__(68);

var _VXPayEventListener2 = _interopRequireDefault(_VXPayEventListener);

var _VXPayPaymentHooksConfig = __webpack_require__(70);

var _VXPayPaymentHooksConfig2 = _interopRequireDefault(_VXPayPaymentHooksConfig);

var _VXPayMessage = __webpack_require__(5);

var _VXPayMessage2 = _interopRequireDefault(_VXPayMessage);

var _VXPayHookRouter = __webpack_require__(150);

var _VXPayHookRouter2 = _interopRequireDefault(_VXPayHookRouter);

var _VXPayIsVisibleMessage = __webpack_require__(147);

var _VXPayIsVisibleMessage2 = _interopRequireDefault(_VXPayIsVisibleMessage);

var _VXPayAdditionalOptionsMessage = __webpack_require__(379);

var _VXPayAdditionalOptionsMessage2 = _interopRequireDefault(_VXPayAdditionalOptionsMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayPaymentFrame = function (_VXPayIframe) {
	_inherits(VXPayPaymentFrame, _VXPayIframe);

	/**
  * Override styles
  */
	function VXPayPaymentFrame(document, url) {
		var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : VXPayPaymentFrame.NAME;
		var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

		_classCallCheck(this, VXPayPaymentFrame);

		// merge default with incoming
		style = _extends({}, VXPayPaymentFrame.getDefaultStyles(document), style);

		// call parent

		// allow transparent iframe for <= IE8
		var _this = _possibleConstructorReturn(this, (VXPayPaymentFrame.__proto__ || Object.getPrototypeOf(VXPayPaymentFrame)).call(this, document, url, id, style));

		_this._frame.allowTransparency = true;
		_this._frame.name = 'vxpay';

		// hooks config
		_this._hooks = new _VXPayPaymentHooksConfig2.default();
		_this._sessionInitialized = false;

		// listen for incoming post messages
		_this.startListening();
		return _this;
	}

	/**
  * Insert in DOM
  */


	_createClass(VXPayPaymentFrame, [{
		key: 'triggerLoad',
		value: function triggerLoad() {
			if (this._loaded) {
				return;
			}

			this._frame.ownerDocument.getElementsByTagName('body').item(0).appendChild(this._frame);
		}

		/**
   * @todo refactor this mess!
   * @param {Document} document
   * @return {Object}
   */

	}, {
		key: 'startListening',


		/**
   * listen for incoming messages
   */
		value: function startListening() {
			var _this2 = this;

			_VXPayEventListener2.default.addEvent(_VXPayIframe3.default.EVENT_MESSAGE, this._frame.ownerDocument.defaultView, function (event) {
				return (0, _VXPayHookRouter2.default)(_this2._hooks, event);
			});
		}

		/**
   * Override to add a hook
   * @protected
   */

	}, {
		key: '_markLoaded',
		value: function _markLoaded() {
			_get(VXPayPaymentFrame.prototype.__proto__ || Object.getPrototypeOf(VXPayPaymentFrame.prototype), '_markLoaded', this).call(this);
			return this._hooks.trigger(_VXPayPaymentHooksConfig2.default.ON_LOAD);
		}

		/**
   * Override to add a before send hook
   * @param {String|VXPayMessage} message
   * @param {String} origin
   * @return {VXPayPaymentFrame}
   */

	}, {
		key: 'postMessage',
		value: function postMessage(message) {
			var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';

			this._hooks.trigger(_VXPayPaymentHooksConfig2.default.ON_BEFORE_SEND, [message]);
			_get(VXPayPaymentFrame.prototype.__proto__ || Object.getPrototypeOf(VXPayPaymentFrame.prototype), 'postMessage', this).call(this, message, origin);
			return this;
		}

		/**
   * @param {String|undefined} token
   * @return {VXPayPaymentFrame}
   */

	}, {
		key: 'initSession',
		value: function initSession() {
			var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			if (this._sessionInitialized) {
				return this;
			}

			token = token || null;

			// init lazy loading session
			this.postMessage(new _VXPayInitSessionMessage2.default(token));
			this._sessionInitialized = true;

			return this;
		}

		/**
   * @param {Object} options
   * @return {VXPayPaymentFrame}
   */

	}, {
		key: 'sendOptions',
		value: function sendOptions() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			this.postMessage(new _VXPayUpdateParamsMessage2.default(options));
			return this;
		}

		/**
   * @param {Object} options
   * @return {VXPayPaymentFrame}
   */

	}, {
		key: 'sendAdditionalOptions',
		value: function sendAdditionalOptions() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			this.postMessage(new _VXPayAdditionalOptionsMessage2.default(options));
			return this;
		}

		/**
   * @param {String} route
   * @return {VXPayPaymentFrame}
   */

	}, {
		key: 'changeRoute',
		value: function changeRoute() {
			var route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

			return this.postMessage(new _VXPayChangeRouteMessage2.default(route));
		}

		/**
   * @param {VXPayViewReadyMessage} message
   */

	}, {
		key: 'setVisible',
		value: function setVisible(message) {
			this.postMessage(new _VXPayIsVisibleMessage2.default());
		}

		/**
   * @return {VXPayPaymentHooksConfig}
   */

	}, {
		key: 'hooks',
		get: function get() {
			return this._hooks;
		}
	}], [{
		key: 'getDefaultStyles',
		value: function getDefaultStyles() {
			var document = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			var uaString = typeof document !== 'undefined' ? document.defaultView.navigator.userAgent : '',
			    userAgent = new _VXPayUserAgentHelper2.default(uaString),
			    bodyElement = typeof document !== 'undefined' ? document.getElementsByTagName('body').item(0) : null,
			    defaultStyles = {
				border: 'none',
				width: '100%',
				height: '100%',
				top: '50%',
				left: '50%',
				marginLeft: '-325px', // margin does not seem to be applied :/
				zIndex: 10001,
				display: 'none',
				transform: 'translate(-50%, -50%)'
			};

			defaultStyles.position = userAgent.isMobile() ? _VXPayIframe3.default.POSITION_ABSOLUTE : _VXPayIframe3.default.POSITION_FIXED;

			if (typeof document !== 'undefined' && _VXPayDomHelper2.default.isStyleAttributeSuppored(bodyElement, 'maxHeight', '100vh')) {
				defaultStyles.maxHeight = '100vh';
			} else {
				if (userAgent.isMobile()) {
					defaultStyles.maxHeight = _VXPayDomHelper2.default.getClientHeight(document.defaultView) + 'px';
				}
			}

			return defaultStyles;
		}
	}]);

	return VXPayPaymentFrame;
}(_VXPayIframe3.default);

VXPayPaymentFrame.NAME = 'vx-payment-frame-payment';

exports.default = VXPayPaymentFrame;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayMessageFactory = __webpack_require__(145);

var _VXPayMessageFactory2 = _interopRequireDefault(_VXPayMessageFactory);

var _VXPayMessage = __webpack_require__(5);

var _VXPayMessage2 = _interopRequireDefault(_VXPayMessage);

var _VXPayPaymentHooksConfig = __webpack_require__(70);

var _VXPayPaymentHooksConfig2 = _interopRequireDefault(_VXPayPaymentHooksConfig);

var _VXPayHookMessage = __webpack_require__(69);

var _VXPayHookMessage2 = _interopRequireDefault(_VXPayHookMessage);

var _VXPayIframe = __webpack_require__(49);

var _VXPayIframe2 = _interopRequireDefault(_VXPayIframe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {VXPayPaymentHooksConfig} hooks
 * @param {MessageEvent|Object} event
 * @return {boolean}
 * @throws {TypeError}
 * @constructor
 */
var VXPayHookRouter = function VXPayHookRouter(hooks, event) {
	// origin check
	if (event.origin && _VXPayIframe2.default.ORIGIN.indexOf(event.origin) === -1) {
		throw new TypeError('Event origin does not match: ' + event.origin);
	}

	// parse message
	var message = _VXPayMessageFactory2.default.fromJson(event.data);

	// route any
	hooks.trigger(_VXPayPaymentHooksConfig2.default.ON_ANY, [message]);

	switch (message.type) {
		case _VXPayMessage2.default.TYPE_TRANSFER_TOKEN:
			return hooks.trigger(_VXPayPaymentHooksConfig2.default.ON_TRANSFER_TOKEN, [message]);

		case _VXPayMessage2.default.TYPE_AVS_STATUS:
			return hooks.trigger(_VXPayPaymentHooksConfig2.default.ON_AVS_STATUS, [message]);

		case _VXPayMessage2.default.TYPE_BALANCE:
			return hooks.trigger(_VXPayPaymentHooksConfig2.default.ON_BALANCE, [message]);

		case _VXPayMessage2.default.TYPE_ACTIVE_ABOS:
			return hooks.trigger(_VXPayPaymentHooksConfig2.default.ON_ACTIVE_ABOS, [message]);

		case _VXPayMessage2.default.TYPE_IFRAME_READY:
			return hooks.trigger(_VXPayPaymentHooksConfig2.default.ON_IFRAME_READY, [message]);

		case _VXPayMessage2.default.TYPE_CONTENT_LOADED:
			return hooks.trigger(_VXPayPaymentHooksConfig2.default.ON_CONTENT_LOADED, [message]);

		case _VXPayMessage2.default.TYPE_VIEW_READY:
			return hooks.trigger(_VXPayPaymentHooksConfig2.default.ON_VIEW_READY, [message]);

		case _VXPayMessage2.default.TYPE_IFRAME_CLOSE:
			return hooks.trigger(_VXPayPaymentHooksConfig2.default.ON_CLOSE, [message]);

		case _VXPayMessage2.default.TYPE_SUCCESS:
			return hooks.trigger(_VXPayPaymentHooksConfig2.default.ON_SUCCESS, [message]);

		case _VXPayMessage2.default.TYPE_IS_LOGGED_IN:
			return hooks.trigger(_VXPayPaymentHooksConfig2.default.ON_IS_LOGGED_IN, [message]);

		case _VXPayMessage2.default.TYPE_LOGGED_OUT:
			return hooks.trigger(_VXPayPaymentHooksConfig2.default.ON_LOGOUT, [message]);

		case _VXPayMessage2.default.TYPE_HOOK:
			switch (message.hook) {
				case _VXPayHookMessage2.default.HOOK_LOGIN:
					return hooks.trigger(_VXPayPaymentHooksConfig2.default.ON_LOGIN, [message]);

				case _VXPayHookMessage2.default.HOOK_FLOW_CHANGED:
					return hooks.trigger(_VXPayPaymentHooksConfig2.default.ON_FLOW_CHANGE, [message]);
			}
	}
};

exports.default = VXPayHookRouter;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VXPayPaymentHooksConfig = __webpack_require__(70);

var _VXPayPaymentHooksConfig2 = _interopRequireDefault(_VXPayPaymentHooksConfig);

var _VXPayEventListener = __webpack_require__(68);

var _VXPayEventListener2 = _interopRequireDefault(_VXPayEventListener);

var _VXPayIframe = __webpack_require__(49);

var _VXPayIframe2 = _interopRequireDefault(_VXPayIframe);

var _VXPayHookRouter = __webpack_require__(150);

var _VXPayHookRouter2 = _interopRequireDefault(_VXPayHookRouter);

var _VXPayViewReadyMessage = __webpack_require__(146);

var _VXPayViewReadyMessage2 = _interopRequireDefault(_VXPayViewReadyMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @link https://www.npmjs.com/package/es6-interface
 */
var VXPayPaymentTab = function () {
	/**
  * @param {Document} document
  * @param {String} name
  * @param {VXPayConfig} config
  */
	function VXPayPaymentTab(document, name, config) {
		_classCallCheck(this, VXPayPaymentTab);

		this._document = document;
		this._hooks = new _VXPayPaymentHooksConfig2.default();
		this._loaded = false;
		this._name = name;
		this._config = config;
		this._route = '/';
	}

	/**
  * Open the window
  */


	_createClass(VXPayPaymentTab, [{
		key: 'triggerLoad',
		value: function triggerLoad() {
			this.getNewTab().then(this.startListening.bind(this)).catch(console.error);
		}

		/**
   * @return {Promise<Window>}
   */

	}, {
		key: 'getNewTab',
		value: function getNewTab() {
			var _this = this;

			var url = this._config.getPaymentFrameUrl() + '#' + this._route;

			return new Promise(function (resolve) {
				if (_this.hasOwnProperty('_window') && !_this._window.closed) {
					resolve(_this._window);
				}

				_this._window = _this._document.defaultView.open(url, _this._name);
				resolve(_this._window);
			});
		}
	}, {
		key: 'startListening',


		/**
   * listen for incoming messages
   * @param {Window} window
   * @return {Window}
   */
		value: function startListening(window) {
			var _this2 = this;

			_VXPayEventListener2.default.addEvent(_VXPayIframe2.default.EVENT_MESSAGE, document.defaultView, function (event) {
				return (0, _VXPayHookRouter2.default)(_this2._hooks, event);
			});

			return window;
		}

		/**
   * @param {Object} options
   * @return {VXPayPaymentTab}
   */

	}, {
		key: 'sendOptions',
		value: function sendOptions() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			console.log('VXPayPaymentTab::sendOptions', options);
			this._config.merge(options);
			return this;
		}

		/**
   * @param {Object} options
   * @return {VXPayPaymentTab}
   */

	}, {
		key: 'sendAdditionalOptions',
		value: function sendAdditionalOptions() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			console.log('VXPayPaymentTab::sendAdditionalOptions', options);
			this._config.merge(options);
			return this;
		}

		/**
   * @param {String|undefined} token
   * @return {VXPayPaymentTab}
   */

	}, {
		key: 'initSession',
		value: function initSession() {
			var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

			console.log('VXPayPaymentTab::initSession');
			return this;
		}

		/**
   * @param {String} route
   * @return {VXPayPaymentTab}
   */

	}, {
		key: 'changeRoute',
		value: function changeRoute() {
			var route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

			console.log('VXPayPaymentTab::changeRoute', route);
			this._route = route;
			return this;
		}

		/**
   * @param {VXPayViewReadyMessage} message
   */

	}, {
		key: 'setVisible',
		value: function setVisible(message) {
			this.triggerLoad();
		}
	}, {
		key: 'show',
		value: function show() {
			console.log('VXPayPaymentTab::show');
			this.triggerLoad();
			return this;
		}
	}, {
		key: 'hide',
		value: function hide() {
			console.log('VXPayPaymentTab::hide');

			if (!this._window.closed) {
				this._window.close();
			}

			return this;
		}
	}, {
		key: 'hooks',
		get: function get() {
			return this._hooks;
		}
	}]);

	return VXPayPaymentTab;
}();

VXPayPaymentTab.NAME = 'vx-payment-tab-payment';

exports.default = VXPayPaymentTab;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(153);
__webpack_require__(356);
module.exports = __webpack_require__(357);


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(154);

__webpack_require__(351);

__webpack_require__(353);

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(71)))

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(155);
__webpack_require__(157);
__webpack_require__(158);
__webpack_require__(159);
__webpack_require__(160);
__webpack_require__(161);
__webpack_require__(162);
__webpack_require__(163);
__webpack_require__(164);
__webpack_require__(165);
__webpack_require__(166);
__webpack_require__(167);
__webpack_require__(168);
__webpack_require__(169);
__webpack_require__(170);
__webpack_require__(171);
__webpack_require__(173);
__webpack_require__(174);
__webpack_require__(175);
__webpack_require__(176);
__webpack_require__(177);
__webpack_require__(178);
__webpack_require__(179);
__webpack_require__(180);
__webpack_require__(181);
__webpack_require__(182);
__webpack_require__(183);
__webpack_require__(184);
__webpack_require__(185);
__webpack_require__(186);
__webpack_require__(187);
__webpack_require__(188);
__webpack_require__(189);
__webpack_require__(190);
__webpack_require__(191);
__webpack_require__(192);
__webpack_require__(193);
__webpack_require__(194);
__webpack_require__(195);
__webpack_require__(196);
__webpack_require__(197);
__webpack_require__(198);
__webpack_require__(199);
__webpack_require__(200);
__webpack_require__(201);
__webpack_require__(202);
__webpack_require__(203);
__webpack_require__(204);
__webpack_require__(205);
__webpack_require__(206);
__webpack_require__(207);
__webpack_require__(208);
__webpack_require__(209);
__webpack_require__(210);
__webpack_require__(211);
__webpack_require__(212);
__webpack_require__(213);
__webpack_require__(214);
__webpack_require__(215);
__webpack_require__(216);
__webpack_require__(217);
__webpack_require__(218);
__webpack_require__(219);
__webpack_require__(220);
__webpack_require__(221);
__webpack_require__(222);
__webpack_require__(223);
__webpack_require__(224);
__webpack_require__(225);
__webpack_require__(226);
__webpack_require__(227);
__webpack_require__(228);
__webpack_require__(229);
__webpack_require__(230);
__webpack_require__(231);
__webpack_require__(232);
__webpack_require__(233);
__webpack_require__(235);
__webpack_require__(236);
__webpack_require__(238);
__webpack_require__(239);
__webpack_require__(240);
__webpack_require__(241);
__webpack_require__(242);
__webpack_require__(243);
__webpack_require__(244);
__webpack_require__(246);
__webpack_require__(247);
__webpack_require__(248);
__webpack_require__(249);
__webpack_require__(250);
__webpack_require__(251);
__webpack_require__(252);
__webpack_require__(253);
__webpack_require__(254);
__webpack_require__(255);
__webpack_require__(256);
__webpack_require__(257);
__webpack_require__(258);
__webpack_require__(93);
__webpack_require__(259);
__webpack_require__(260);
__webpack_require__(124);
__webpack_require__(261);
__webpack_require__(262);
__webpack_require__(263);
__webpack_require__(264);
__webpack_require__(265);
__webpack_require__(127);
__webpack_require__(129);
__webpack_require__(130);
__webpack_require__(266);
__webpack_require__(267);
__webpack_require__(268);
__webpack_require__(269);
__webpack_require__(270);
__webpack_require__(271);
__webpack_require__(272);
__webpack_require__(273);
__webpack_require__(274);
__webpack_require__(275);
__webpack_require__(276);
__webpack_require__(277);
__webpack_require__(278);
__webpack_require__(279);
__webpack_require__(280);
__webpack_require__(281);
__webpack_require__(282);
__webpack_require__(283);
__webpack_require__(284);
__webpack_require__(285);
__webpack_require__(286);
__webpack_require__(287);
__webpack_require__(288);
__webpack_require__(289);
__webpack_require__(290);
__webpack_require__(291);
__webpack_require__(292);
__webpack_require__(293);
__webpack_require__(294);
__webpack_require__(295);
__webpack_require__(296);
__webpack_require__(297);
__webpack_require__(298);
__webpack_require__(299);
__webpack_require__(300);
__webpack_require__(301);
__webpack_require__(302);
__webpack_require__(303);
__webpack_require__(304);
__webpack_require__(305);
__webpack_require__(306);
__webpack_require__(307);
__webpack_require__(308);
__webpack_require__(309);
__webpack_require__(310);
__webpack_require__(311);
__webpack_require__(312);
__webpack_require__(313);
__webpack_require__(314);
__webpack_require__(315);
__webpack_require__(316);
__webpack_require__(317);
__webpack_require__(318);
__webpack_require__(319);
__webpack_require__(320);
__webpack_require__(321);
__webpack_require__(322);
__webpack_require__(323);
__webpack_require__(324);
__webpack_require__(325);
__webpack_require__(326);
__webpack_require__(327);
__webpack_require__(328);
__webpack_require__(329);
__webpack_require__(330);
__webpack_require__(331);
__webpack_require__(332);
__webpack_require__(333);
__webpack_require__(334);
__webpack_require__(335);
__webpack_require__(336);
__webpack_require__(337);
__webpack_require__(338);
__webpack_require__(339);
__webpack_require__(340);
__webpack_require__(341);
__webpack_require__(342);
__webpack_require__(343);
__webpack_require__(344);
__webpack_require__(345);
__webpack_require__(346);
__webpack_require__(347);
__webpack_require__(348);
__webpack_require__(349);
__webpack_require__(350);
module.exports = __webpack_require__(24);

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var global = __webpack_require__(2);
var has = __webpack_require__(14);
var DESCRIPTORS = __webpack_require__(7);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(16);
var META = __webpack_require__(32).KEY;
var $fails = __webpack_require__(3);
var shared = __webpack_require__(53);
var setToStringTag = __webpack_require__(45);
var uid = __webpack_require__(35);
var wks = __webpack_require__(6);
var wksExt = __webpack_require__(107);
var wksDefine = __webpack_require__(73);
var enumKeys = __webpack_require__(156);
var isArray = __webpack_require__(56);
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var toIObject = __webpack_require__(18);
var toPrimitive = __webpack_require__(25);
var createDesc = __webpack_require__(34);
var _create = __webpack_require__(39);
var gOPNExt = __webpack_require__(110);
var $GOPD = __webpack_require__(19);
var $DP = __webpack_require__(8);
var $keys = __webpack_require__(37);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function get() {
      return dP(this, 'a', { value: 7 }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    }return setSymbolDesc(it, key, D);
  }return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) {
    $defineProperty(it, key = keys[i++], P[key]);
  }return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function _Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(40).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(51).f = $propertyIsEnumerable;
  __webpack_require__(55).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(36)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols =
// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
  wks(es6Symbols[j++]);
}for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
  wksDefine(wellKnownSymbols[k++]);
}$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) {
      if (SymbolRegistry[key] === sym) return key;
    }
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) {
      args.push(arguments[i++]);
    }$replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function replacer(key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(15)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(37);
var gOPS = __webpack_require__(55);
var pIE = __webpack_require__(51);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) {
      if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
  }return result;
};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(39) });

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperty: __webpack_require__(8).f });

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperties: __webpack_require__(109) });

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(18);
var $getOwnPropertyDescriptor = __webpack_require__(19).f;

__webpack_require__(28)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(11);
var $getPrototypeOf = __webpack_require__(20);

__webpack_require__(28)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(11);
var $keys = __webpack_require__(37);

__webpack_require__(28)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(28)('getOwnPropertyNames', function () {
  return __webpack_require__(110).f;
});

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(4);
var meta = __webpack_require__(32).onFreeze;

__webpack_require__(28)('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(4);
var meta = __webpack_require__(32).onFreeze;

__webpack_require__(28)('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(4);
var meta = __webpack_require__(32).onFreeze;

__webpack_require__(28)('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(4);

__webpack_require__(28)('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(4);

__webpack_require__(28)('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(4);

__webpack_require__(28)('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(0);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(111) });

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(0);
$export($export.S, 'Object', { is: __webpack_require__(172) });

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(0);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(77).set });

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()

var classof = __webpack_require__(52);
var test = {};
test[__webpack_require__(6)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(16)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(0);

$export($export.P, 'Function', { bind: __webpack_require__(112) });

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(8).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(7) && dP(FProto, NAME, {
  configurable: true,
  get: function get() {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(4);
var getPrototypeOf = __webpack_require__(20);
var HAS_INSTANCE = __webpack_require__(6)('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(8).f(FunctionProto, HAS_INSTANCE, { value: function value(O) {
    if (typeof this != 'function' || !isObject(O)) return false;
    if (!isObject(this.prototype)) return O instanceof this;
    // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
    while (O = getPrototypeOf(O)) {
      if (this.prototype === O) return true;
    }return false;
  } });

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var $parseInt = __webpack_require__(114);
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var $parseFloat = __webpack_require__(115);
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2);
var has = __webpack_require__(14);
var cof = __webpack_require__(22);
var inheritIfRequired = __webpack_require__(79);
var toPrimitive = __webpack_require__(25);
var fails = __webpack_require__(3);
var gOPN = __webpack_require__(40).f;
var gOPD = __webpack_require__(19).f;
var dP = __webpack_require__(8).f;
var $trim = __webpack_require__(46).trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(39)(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function toNumber(argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66:case 98:
          radix = 2;maxCode = 49;break; // fast equal /^0b[01]+$/i
        case 79:case 111:
          radix = 8;maxCode = 55;break; // fast equal /^0o[0-7]+$/i
        default:
          return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      }return parseInt(digits, radix);
    }
  }return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
    // check on 1..constructor(foo) case
    && (BROKEN_COF ? fails(function () {
      proto.valueOf.call(that);
    }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(7) ? gOPN(Base) : (
  // ES3:
  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
  // ES6 (in case, if modules with ES6 Number statics required before):
  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(16)(global, NUMBER, $Number);
}

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var toInteger = __webpack_require__(27);
var aNumberValue = __webpack_require__(116);
var repeat = __webpack_require__(80);
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function multiply(n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function divide(n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = c % n * 1e7;
  }
};
var numToString = function numToString() {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  }return s;
};
var pow = function pow(x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function log(x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  }return n;
};

$export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !__webpack_require__(3)(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    }return m;
  }
});

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var $fails = __webpack_require__(3);
var aNumberValue = __webpack_require__(116);
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(0);

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(0);
var _isFinite = __webpack_require__(2).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', { isInteger: __webpack_require__(117) });

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(0);
var isInteger = __webpack_require__(117);
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(0);

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(0);

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var $parseFloat = __webpack_require__(115);
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var $parseInt = __webpack_require__(114);
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(0);
var log1p = __webpack_require__(118);
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
// V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
&& Math.floor($acosh(Number.MAX_VALUE)) == 710
// Tor Browser bug: Math.acosh(Infinity) -> NaN
&& $acosh(Infinity) == Infinity), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(0);
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(0);
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(0);
var sign = __webpack_require__(81);

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(0);
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(0);
var $expm1 = __webpack_require__(82);

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', { fround: __webpack_require__(119) });

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(0);
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) {
    // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(0);
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(3)(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', { log1p: __webpack_require__(118) });

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', { sign: __webpack_require__(81) });

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(0);
var expm1 = __webpack_require__(82);
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(3)(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(0);
var expm1 = __webpack_require__(82);
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var toAbsoluteIndex = __webpack_require__(38);
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) {
    // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
    }return res.join('');
  }
});

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var toIObject = __webpack_require__(18);
var toLength = __webpack_require__(9);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    }return res.join('');
  }
});

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()

__webpack_require__(46)('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $at = __webpack_require__(83)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(84)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var $at = __webpack_require__(83)(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])


var $export = __webpack_require__(0);
var toLength = __webpack_require__(9);
var context = __webpack_require__(86);
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(87)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
  }
});

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)


var $export = __webpack_require__(0);
var context = __webpack_require__(86);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(87)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(80)
});

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])


var $export = __webpack_require__(0);
var toLength = __webpack_require__(9);
var context = __webpack_require__(86);
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(87)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
  }
});

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)

__webpack_require__(17)('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.3 String.prototype.big()

__webpack_require__(17)('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.4 String.prototype.blink()

__webpack_require__(17)('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.5 String.prototype.bold()

__webpack_require__(17)('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()

__webpack_require__(17)('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)

__webpack_require__(17)('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)

__webpack_require__(17)('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.9 String.prototype.italics()

__webpack_require__(17)('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)

__webpack_require__(17)('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()

__webpack_require__(17)('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.12 String.prototype.strike()

__webpack_require__(17)('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()

__webpack_require__(17)('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.14 String.prototype.sup()

__webpack_require__(17)('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(0);

$export($export.S, 'Date', { now: function now() {
    return new Date().getTime();
  } });

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var toObject = __webpack_require__(11);
var toPrimitive = __webpack_require__(25);

$export($export.P + $export.F * __webpack_require__(3)(function () {
  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function toISOString() {
      return 1;
    } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(0);
var toISOString = __webpack_require__(234);

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()

var fails = __webpack_require__(3);
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function lz(num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
}) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(16)(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var TO_PRIMITIVE = __webpack_require__(6)('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(15)(proto, TO_PRIMITIVE, __webpack_require__(237));

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(1);
var toPrimitive = __webpack_require__(25);
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(0);

$export($export.S, 'Array', { isArray: __webpack_require__(56) });

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ctx = __webpack_require__(21);
var $export = __webpack_require__(0);
var toObject = __webpack_require__(11);
var call = __webpack_require__(120);
var isArrayIter = __webpack_require__(88);
var toLength = __webpack_require__(9);
var createProperty = __webpack_require__(89);
var getIterFn = __webpack_require__(90);

$export($export.S + $export.F * !__webpack_require__(58)(function (iter) {
  Array.from(iter);
}), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var createProperty = __webpack_require__(89);

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(3)(function () {
  function F() {/* empty */}
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of() /* ...args */{
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) {
      createProperty(result, index, arguments[index++]);
    }result.length = aLen;
    return result;
  }
});

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)

var $export = __webpack_require__(0);
var toIObject = __webpack_require__(18);
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(50) != Object || !__webpack_require__(23)(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var html = __webpack_require__(76);
var cof = __webpack_require__(22);
var toAbsoluteIndex = __webpack_require__(38);
var toLength = __webpack_require__(9);
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(3)(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) {
      cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
    }return cloned;
  }
});

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var aFunction = __webpack_require__(13);
var toObject = __webpack_require__(11);
var fails = __webpack_require__(3);
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(23)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
  }
});

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var $forEach = __webpack_require__(29)(0);
var STRICT = __webpack_require__(23)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(4);
var isArray = __webpack_require__(56);
var SPECIES = __webpack_require__(6)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }return C === undefined ? Array : C;
};

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var $map = __webpack_require__(29)(1);

$export($export.P + $export.F * !__webpack_require__(23)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var $filter = __webpack_require__(29)(2);

$export($export.P + $export.F * !__webpack_require__(23)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var $some = __webpack_require__(29)(3);

$export($export.P + $export.F * !__webpack_require__(23)([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var $every = __webpack_require__(29)(4);

$export($export.P + $export.F * !__webpack_require__(23)([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var $reduce = __webpack_require__(121);

$export($export.P + $export.F * !__webpack_require__(23)([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var $reduce = __webpack_require__(121);

$export($export.P + $export.F * !__webpack_require__(23)([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var $indexOf = __webpack_require__(54)(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(23)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
    // convert -0 to +0
    ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
  }
});

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var toIObject = __webpack_require__(18);
var toInteger = __webpack_require__(27);
var toLength = __webpack_require__(9);
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(23)($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (; index >= 0; index--) {
      if (index in O) if (O[index] === searchElement) return index || 0;
    }return -1;
  }
});

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(0);

$export($export.P, 'Array', { copyWithin: __webpack_require__(122) });

__webpack_require__(33)('copyWithin');

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(0);

$export($export.P, 'Array', { fill: __webpack_require__(92) });

__webpack_require__(33)('fill');

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

var $export = __webpack_require__(0);
var $find = __webpack_require__(29)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(33)(KEY);

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

var $export = __webpack_require__(0);
var $find = __webpack_require__(29)(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(33)(KEY);

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(41)('Array');

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2);
var inheritIfRequired = __webpack_require__(79);
var dP = __webpack_require__(8).f;
var gOPN = __webpack_require__(40).f;
var isRegExp = __webpack_require__(57);
var $flags = __webpack_require__(59);
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(7) && (!CORRECT_NEW || __webpack_require__(3)(function () {
  re2[__webpack_require__(6)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
  };
  var proxy = function proxy(key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function get() {
        return Base[key];
      },
      set: function set(it) {
        Base[key] = it;
      }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) {
    proxy(keys[i++]);
  }proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(16)(global, 'RegExp', $RegExp);
}

__webpack_require__(41)('RegExp');

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(124);
var anObject = __webpack_require__(1);
var $flags = __webpack_require__(59);
var DESCRIPTORS = __webpack_require__(7);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function define(fn) {
  __webpack_require__(16)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(3)(function () {
  return $toString.call({ source: 'a', flags: 'b' }) != '/a/b';
})) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
  // FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// @@match logic
__webpack_require__(60)('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';

    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// @@replace logic
__webpack_require__(60)('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';

    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// @@search logic
__webpack_require__(60)('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';

    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// @@split logic
__webpack_require__(60)('split', 2, function (defined, SPLIT, $split) {
  'use strict';

  var isRegExp = __webpack_require__(57);
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function $split(separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) {
              if (arguments[i] === undefined) match[i] = undefined;
            }
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
    // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function $split(separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(36);
var global = __webpack_require__(2);
var ctx = __webpack_require__(21);
var classof = __webpack_require__(52);
var $export = __webpack_require__(0);
var isObject = __webpack_require__(4);
var aFunction = __webpack_require__(13);
var anInstance = __webpack_require__(42);
var forOf = __webpack_require__(43);
var speciesConstructor = __webpack_require__(61);
var task = __webpack_require__(94).set;
var microtask = __webpack_require__(95)();
var newPromiseCapabilityModule = __webpack_require__(96);
var perform = __webpack_require__(125);
var promiseResolve = __webpack_require__(126);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function empty() {/* empty */};
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(6)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) {/* empty */}
}();

// helpers
var isThenable = function isThenable(it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function notify(promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function run(reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) {
      run(chain[i++]);
    } // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function onUnhandled(promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    }promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function isUnhandled(promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function onHandleUnhandled(promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function $reject(value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function $resolve(value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = []; // <- awaiting reactions
    this._a = undefined; // <- checked in isUnhandled reactions
    this._s = 0; // <- state
    this._d = false; // <- done
    this._v = undefined; // <- value
    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false; // <- notify
  };
  Internal.prototype = __webpack_require__(44)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function _catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function OwnPromiseCapability() {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(45)($Promise, PROMISE);
__webpack_require__(41)(PROMISE);
Wrapper = __webpack_require__(24)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(58)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var weak = __webpack_require__(131);
var validate = __webpack_require__(48);
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(62)(WEAK_SET, function (get) {
  return function WeakSet() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var $typed = __webpack_require__(63);
var buffer = __webpack_require__(97);
var anObject = __webpack_require__(1);
var toAbsoluteIndex = __webpack_require__(38);
var toLength = __webpack_require__(9);
var isObject = __webpack_require__(4);
var ArrayBuffer = __webpack_require__(2).ArrayBuffer;
var speciesConstructor = __webpack_require__(61);
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(3)(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var final = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < final) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    }return result;
  }
});

__webpack_require__(41)(ARRAY_BUFFER);

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
$export($export.G + $export.W + $export.F * !__webpack_require__(63).ABV, {
  DataView: __webpack_require__(97).DataView
});

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(30)('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(30)('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(30)('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(30)('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(30)('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(30)('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(30)('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(30)('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(30)('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(0);
var aFunction = __webpack_require__(13);
var anObject = __webpack_require__(1);
var rApply = (__webpack_require__(2).Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(3)(function () {
  rApply(function () {/* empty */});
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(0);
var create = __webpack_require__(39);
var aFunction = __webpack_require__(13);
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var fails = __webpack_require__(3);
var bind = __webpack_require__(112);
var rConstruct = (__webpack_require__(2).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() {/* empty */}
  return !(rConstruct(function () {/* empty */}, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () {/* empty */});
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0:
          return new Target();
        case 1:
          return new Target(args[0]);
        case 2:
          return new Target(args[0], args[1]);
        case 3:
          return new Target(args[0], args[1], args[2]);
        case 4:
          return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(8);
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var toPrimitive = __webpack_require__(25);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(3)(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(0);
var gOPD = __webpack_require__(19).f;
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)

var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var Enumerate = function Enumerate(iterated) {
  this._t = anObject(iterated); // target
  this._i = 0; // next index
  var keys = this._k = []; // keys
  var key;
  for (key in iterated) {
    keys.push(key);
  }
};
__webpack_require__(85)(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(19);
var getPrototypeOf = __webpack_require__(20);
var has = __webpack_require__(14);
var $export = __webpack_require__(0);
var isObject = __webpack_require__(4);
var anObject = __webpack_require__(1);

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(19);
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(0);
var getProto = __webpack_require__(20);
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(0);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(0);

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(133) });

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(8);
var gOPD = __webpack_require__(19);
var getPrototypeOf = __webpack_require__(20);
var has = __webpack_require__(14);
var $export = __webpack_require__(0);
var createDesc = __webpack_require__(34);
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
    existingDescriptor.value = V;
    dP.f(receiver, propertyKey, existingDescriptor);
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(0);
var setProto = __webpack_require__(77);

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes

var $export = __webpack_require__(0);
var $includes = __webpack_require__(54)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(33)('includes');

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap

var $export = __webpack_require__(0);
var flattenIntoArray = __webpack_require__(134);
var toObject = __webpack_require__(11);
var toLength = __webpack_require__(9);
var aFunction = __webpack_require__(13);
var arraySpeciesCreate = __webpack_require__(91);

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(33)('flatMap');

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten

var $export = __webpack_require__(0);
var flattenIntoArray = __webpack_require__(134);
var toObject = __webpack_require__(11);
var toLength = __webpack_require__(9);
var toInteger = __webpack_require__(27);
var arraySpeciesCreate = __webpack_require__(91);

$export($export.P, 'Array', {
  flatten: function flatten() /* depthArg = 1 */{
    var depthArg = arguments[0];
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

__webpack_require__(33)('flatten');

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/mathiasbynens/String.prototype.at

var $export = __webpack_require__(0);
var $at = __webpack_require__(83)(true);

$export($export.P, 'String', {
  at: function at(pos) {
    return $at(this, pos);
  }
});

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end

var $export = __webpack_require__(0);
var $pad = __webpack_require__(135);
var userAgent = __webpack_require__(98);

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end

var $export = __webpack_require__(0);
var $pad = __webpack_require__(135);
var userAgent = __webpack_require__(98);

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim

__webpack_require__(46)('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim

__webpack_require__(46)('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/String.prototype.matchAll/

var $export = __webpack_require__(0);
var defined = __webpack_require__(26);
var toLength = __webpack_require__(9);
var isRegExp = __webpack_require__(57);
var getFlags = __webpack_require__(59);
var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function $RegExpStringIterator(regexp, string) {
  this._r = regexp;
  this._s = string;
};

__webpack_require__(85)($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp) {
    defined(this);
    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this);
    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(73)('asyncIterator');

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(73)('observable');

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(0);
var ownKeys = __webpack_require__(133);
var toIObject = __webpack_require__(18);
var gOPD = __webpack_require__(19);
var createProperty = __webpack_require__(89);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(0);
var $values = __webpack_require__(136)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(0);
var $entries = __webpack_require__(136)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var toObject = __webpack_require__(11);
var aFunction = __webpack_require__(13);
var $defineProperty = __webpack_require__(8);

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
__webpack_require__(7) && $export($export.P + __webpack_require__(64), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var toObject = __webpack_require__(11);
var aFunction = __webpack_require__(13);
var $defineProperty = __webpack_require__(8);

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
__webpack_require__(7) && $export($export.P + __webpack_require__(64), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var toObject = __webpack_require__(11);
var toPrimitive = __webpack_require__(25);
var getPrototypeOf = __webpack_require__(20);
var getOwnPropertyDescriptor = __webpack_require__(19).f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
__webpack_require__(7) && $export($export.P + __webpack_require__(64), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var toObject = __webpack_require__(11);
var toPrimitive = __webpack_require__(25);
var getPrototypeOf = __webpack_require__(20);
var getOwnPropertyDescriptor = __webpack_require__(19).f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
__webpack_require__(7) && $export($export.P + __webpack_require__(64), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(0);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(137)('Map') });

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(0);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(137)('Set') });

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(65)('Map');

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(65)('Set');

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(65)('WeakMap');

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
__webpack_require__(65)('WeakSet');

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(66)('Map');

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(66)('Set');

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(66)('WeakMap');

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
__webpack_require__(66)('WeakSet');

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/tc39/proposal-global
var $export = __webpack_require__(0);

$export($export.G, { global: __webpack_require__(2) });

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/tc39/proposal-global
var $export = __webpack_require__(0);

$export($export.S, 'System', { global: __webpack_require__(2) });

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/ljharb/proposal-is-error
var $export = __webpack_require__(0);
var cof = __webpack_require__(22);

$export($export.S, 'Error', {
  isError: function isError(it) {
    return cof(it) === 'Error';
  }
});

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);
var RAD_PER_DEG = 180 / Math.PI;

$export($export.S, 'Math', {
  degrees: function degrees(radians) {
    return radians * RAD_PER_DEG;
  }
});

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);
var scale = __webpack_require__(139);
var fround = __webpack_require__(119);

$export($export.S, 'Math', {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return fround(scale(x, inLow, inHigh, outLow, outHigh));
  }
});

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  imulh: function imulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);
var DEG_PER_RAD = Math.PI / 180;

$export($export.S, 'Math', {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', { scale: __webpack_require__(139) });

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  umulh: function umulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://jfbastien.github.io/papers/Math.signbit.html
var $export = __webpack_require__(0);

$export($export.S, 'Math', { signbit: function signbit(x) {
    // eslint-disable-next-line no-self-compare
    return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
  } });

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally


var $export = __webpack_require__(0);
var core = __webpack_require__(24);
var global = __webpack_require__(2);
var speciesConstructor = __webpack_require__(61);
var promiseResolve = __webpack_require__(126);

$export($export.P + $export.R, 'Promise', { 'finally': function _finally(onFinally) {
    var C = speciesConstructor(this, core.Promise || global.Promise);
    var isFunction = typeof onFinally == 'function';
    return this.then(isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () {
        return x;
      });
    } : onFinally, isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () {
        throw e;
      });
    } : onFinally);
  } });

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try

var $export = __webpack_require__(0);
var newPromiseCapability = __webpack_require__(96);
var perform = __webpack_require__(125);

$export($export.S, 'Promise', { 'try': function _try(callbackfn) {
    var promiseCapability = newPromiseCapability.f(this);
    var result = perform(callbackfn);
    (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
    return promiseCapability.promise;
  } });

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var metadata = __webpack_require__(31);
var anObject = __webpack_require__(1);
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
    ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
  } });

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var metadata = __webpack_require__(31);
var anObject = __webpack_require__(1);
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
    var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
    if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
    if (metadataMap.size) return true;
    var targetMetadata = store.get(target);
    targetMetadata['delete'](targetKey);
    return !!targetMetadata.size || store['delete'](target);
  } });

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var metadata = __webpack_require__(31);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(20);
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function ordinaryGetMetadata(MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
    return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
  } });

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Set = __webpack_require__(129);
var from = __webpack_require__(138);
var metadata = __webpack_require__(31);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(20);
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function ordinaryMetadataKeys(O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
    return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
  } });

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var metadata = __webpack_require__(31);
var anObject = __webpack_require__(1);
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
    return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
  } });

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var metadata = __webpack_require__(31);
var anObject = __webpack_require__(1);
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
    return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
  } });

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var metadata = __webpack_require__(31);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(20);
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function ordinaryHasMetadata(MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
    return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
  } });

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var metadata = __webpack_require__(31);
var anObject = __webpack_require__(1);
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
    return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
  } });

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $metadata = __webpack_require__(31);
var anObject = __webpack_require__(1);
var aFunction = __webpack_require__(13);
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
    return function decorator(target, targetKey) {
      ordinaryDefineOwnMetadata(metadataKey, metadataValue, (targetKey !== undefined ? anObject : aFunction)(target), toMetaKey(targetKey));
    };
  } });

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export = __webpack_require__(0);
var microtask = __webpack_require__(95)();
var process = __webpack_require__(2).process;
var isNode = __webpack_require__(22)(process) == 'process';

$export($export.G, {
  asap: function asap(fn) {
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/zenparsing/es-observable

var $export = __webpack_require__(0);
var global = __webpack_require__(2);
var core = __webpack_require__(24);
var microtask = __webpack_require__(95)();
var OBSERVABLE = __webpack_require__(6)('observable');
var aFunction = __webpack_require__(13);
var anObject = __webpack_require__(1);
var anInstance = __webpack_require__(42);
var redefineAll = __webpack_require__(44);
var hide = __webpack_require__(15);
var forOf = __webpack_require__(43);
var RETURN = forOf.RETURN;

var getMethod = function getMethod(fn) {
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function cleanupSubscription(subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function subscriptionClosed(subscription) {
  return subscription._o === undefined;
};

var closeSubscription = function closeSubscription(subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function Subscription(observer, subscriber) {
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer);
    var subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === 'function') cleanup = function cleanup() {
        subscription.unsubscribe();
      };else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  }if (subscriptionClosed(this)) cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe() {
    closeSubscription(this);
  }
});

var SubscriptionObserver = function SubscriptionObserver(subscription) {
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m) return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription)) throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if (!m) throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    }cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      }cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber) {
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn) {
    var that = this;
    return new (core.Promise || global.Promise)(function (resolve, reject) {
      aFunction(fn);
      var subscription = that.subscribe({
        next: function next(value) {
          try {
            return fn(value);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if (method) {
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          try {
            if (forOf(x, false, function (it) {
              observer.next(it);
              if (done) return RETURN;
            }) === RETURN) return;
          } catch (e) {
            if (done) throw e;
            observer.error(e);
            return;
          }observer.complete();
        }
      });
      return function () {
        done = true;
      };
    });
  },
  of: function of() {
    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) {
      items[i] = arguments[i++];
    }return new (typeof this === 'function' ? this : $Observable)(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          for (var j = 0; j < items.length; ++j) {
            observer.next(items[j]);
            if (done) return;
          }observer.complete();
        }
      });
      return function () {
        done = true;
      };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function () {
  return this;
});

$export($export.G, { Observable: $Observable });

__webpack_require__(41)('Observable');

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(2);
var $export = __webpack_require__(0);
var userAgent = __webpack_require__(98);
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function wrap(set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(0);
var $task = __webpack_require__(94);
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $iterators = __webpack_require__(93);
var getKeys = __webpack_require__(37);
var redefine = __webpack_require__(16);
var global = __webpack_require__(2);
var hide = __webpack_require__(15);
var Iterators = __webpack_require__(47);
var wks = __webpack_require__(6);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) {
      if (!proto[key]) redefine(proto, key, $iterators[key], true);
    }
  }
}

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = ( false ? "undefined" : _typeof(module)) === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (_typeof(global.process) === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
}(
// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
(typeof global === "undefined" ? "undefined" : _typeof(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : undefined);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(71), __webpack_require__(352)(module)))

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(354);
module.exports = __webpack_require__(24).RegExp.escape;

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/benjamingr/RexExp.escape
var $export = __webpack_require__(0);
var $re = __webpack_require__(355)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', { escape: function escape(it) {
    return $re(it);
  } });

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (regExp, replace) {
  var replacer = replace === Object(replace) ? function (part) {
    return replace[part];
  } : replace;
  return function (it) {
    return String(it).replace(regExp, replacer);
  };
};

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

(function (global) {
  /**
   * Polyfill URLSearchParams
   *
   * Inspired from : https://github.com/WebReflection/url-search-params/blob/master/src/url-search-params.js
   */

  var checkIfIteratorIsSupported = function checkIfIteratorIsSupported() {
    try {
      return !!Symbol.iterator;
    } catch (error) {
      return false;
    }
  };

  var iteratorSupported = checkIfIteratorIsSupported();

  var createIterator = function createIterator(items) {
    var iterator = {
      next: function next() {
        var value = items.shift();
        return { done: value === void 0, value: value };
      }
    };

    if (iteratorSupported) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  };

  var polyfillURLSearchParams = function polyfillURLSearchParams() {

    var URLSearchParams = function URLSearchParams(searchString) {
      Object.defineProperty(this, '_entries', { value: {} });

      if (typeof searchString === 'string') {
        if (searchString !== '') {
          searchString = searchString.replace(/^\?/, '');
          var attributes = searchString.split('&');
          var attribute;
          for (var i = 0; i < attributes.length; i++) {
            attribute = attributes[i].split('=');
            this.append(decodeURIComponent(attribute[0]), attribute.length > 1 ? decodeURIComponent(attribute[1]) : '');
          }
        }
      } else if (searchString instanceof URLSearchParams) {
        var _this = this;
        searchString.forEach(function (value, name) {
          _this.append(value, name);
        });
      }
    };

    var proto = URLSearchParams.prototype;

    proto.append = function (name, value) {
      if (name in this._entries) {
        this._entries[name].push(value.toString());
      } else {
        this._entries[name] = [value.toString()];
      }
    };

    proto.delete = function (name) {
      delete this._entries[name];
    };

    proto.get = function (name) {
      return name in this._entries ? this._entries[name][0] : null;
    };

    proto.getAll = function (name) {
      return name in this._entries ? this._entries[name].slice(0) : [];
    };

    proto.has = function (name) {
      return name in this._entries;
    };

    proto.set = function (name, value) {
      this._entries[name] = [value.toString()];
    };

    proto.forEach = function (callback, thisArg) {
      var entries;
      for (var name in this._entries) {
        if (this._entries.hasOwnProperty(name)) {
          entries = this._entries[name];
          for (var i = 0; i < entries.length; i++) {
            callback.call(thisArg, entries[i], name, this);
          }
        }
      }
    };

    proto.keys = function () {
      var items = [];
      this.forEach(function (value, name) {
        items.push(name);
      });
      return createIterator(items);
    };

    proto.values = function () {
      var items = [];
      this.forEach(function (value) {
        items.push(value);
      });
      return createIterator(items);
    };

    proto.entries = function () {
      var items = [];
      this.forEach(function (value, name) {
        items.push([name, value]);
      });
      return createIterator(items);
    };

    if (iteratorSupported) {
      proto[Symbol.iterator] = proto.entries;
    }

    proto.toString = function () {
      var searchString = '';
      this.forEach(function (value, name) {
        if (searchString.length > 0) searchString += '&';
        searchString += encodeURIComponent(name) + '=' + encodeURIComponent(value);
      });
      return searchString;
    };

    global.URLSearchParams = URLSearchParams;
  };

  if (!('URLSearchParams' in global) || new URLSearchParams('?a=1').toString() !== 'a=1') {
    polyfillURLSearchParams();
  }

  // HTMLAnchorElement
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : undefined);

(function (global) {
  /**
   * Polyfill URL
   *
   * Inspired from : https://github.com/arv/DOM-URL-Polyfill/blob/master/src/url.js
   */

  var checkIfURLIsSupported = function checkIfURLIsSupported() {
    try {
      var u = new URL('b', 'http://a');
      u.pathname = 'c%20d';
      return u.href === 'http://a/c%20d' && u.searchParams;
    } catch (e) {
      return false;
    }
  };

  var polyfillURL = function polyfillURL() {
    var _URL = global.URL;

    var URL = function URL(url, base) {
      if (typeof url !== 'string') url = String(url);

      var doc = document.implementation.createHTMLDocument('');
      window.doc = doc;
      if (base) {
        var baseElement = doc.createElement('base');
        baseElement.href = base;
        doc.head.appendChild(baseElement);
      }

      var anchorElement = doc.createElement('a');
      anchorElement.href = url;
      doc.body.appendChild(anchorElement);
      anchorElement.href = anchorElement.href; // force href to refresh

      if (anchorElement.protocol === ':' || !/:/.test(anchorElement.href)) {
        throw new TypeError('Invalid URL');
      }

      Object.defineProperty(this, '_anchorElement', {
        value: anchorElement
      });
    };

    var proto = URL.prototype;

    var linkURLWithAnchorAttribute = function linkURLWithAnchorAttribute(attributeName) {
      Object.defineProperty(proto, attributeName, {
        get: function get() {
          return this._anchorElement[attributeName];
        },
        set: function set(value) {
          this._anchorElement[attributeName] = value;
        },
        enumerable: true
      });
    };

    ['hash', 'host', 'hostname', 'port', 'protocol', 'search'].forEach(function (attributeName) {
      linkURLWithAnchorAttribute(attributeName);
    });

    Object.defineProperties(proto, {

      'toString': {
        get: function get() {
          var _this = this;
          return function () {
            return _this.href;
          };
        }
      },

      'href': {
        get: function get() {
          return this._anchorElement.href.replace(/\?$/, '');
        },
        set: function set(value) {
          this._anchorElement.href = value;
        },
        enumerable: true
      },

      'pathname': {
        get: function get() {
          return this._anchorElement.pathname.replace(/(^\/?)/, '/');
        },
        set: function set(value) {
          this._anchorElement.pathname = value;
        },
        enumerable: true
      },

      'origin': {
        get: function get() {
          return this._anchorElement.protocol + '//' + this._anchorElement.hostname + (this._anchorElement.port ? ':' + this._anchorElement.port : '');
        },
        enumerable: true
      },

      'password': { // TODO
        get: function get() {
          return '';
        },
        set: function set(value) {},
        enumerable: true
      },

      'username': { // TODO
        get: function get() {
          return '';
        },
        set: function set(value) {},
        enumerable: true
      },

      'searchParams': {
        get: function get() {
          var searchParams = new URLSearchParams(this.search);
          var _this = this;
          ['append', 'delete', 'set'].forEach(function (methodName) {
            var method = searchParams[methodName];
            searchParams[methodName] = function () {
              method.apply(searchParams, arguments);
              _this.search = searchParams.toString();
            };
          });
          return searchParams;
        },
        enumerable: true
      }
    });

    URL.createObjectURL = function (blob) {
      return _URL.createObjectURL.apply(_URL, arguments);
    };

    URL.revokeObjectURL = function (url) {
      return _URL.revokeObjectURL.apply(_URL, arguments);
    };

    global.URL = URL;
  };

  if (!checkIfURLIsSupported()) {
    polyfillURL();
  }

  if (global.location !== void 0 && !('origin' in global.location)) {
    var getOrigin = function getOrigin() {
      return global.location.protocol + '//' + global.location.hostname + (global.location.port ? ':' + global.location.port : '');
    };

    try {
      Object.defineProperty(global.location, 'origin', {
        get: getOrigin,
        enumerable: true
      });
    } catch (e) {
      setInterval(function () {
        global.location.origin = getOrigin();
      }, 100);
    }
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : undefined);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(71)))

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.VXPayCurrency = exports.VXPayFlow = exports.VXPayPaymentHooksConfig = exports.VXPayModalConfig = exports.VXPayNotifications = exports.VXPayLanguage = exports.VXPayEnvironment = exports.VXPayConfig = exports.VXPay = undefined;

var _VXPay = __webpack_require__(358);

var _VXPay2 = _interopRequireDefault(_VXPay);

var _VXPayConfig = __webpack_require__(140);

var _VXPayConfig2 = _interopRequireDefault(_VXPayConfig);

var _VXPayEnvironment = __webpack_require__(99);

var _VXPayEnvironment2 = _interopRequireDefault(_VXPayEnvironment);

var _VXPayLanguage = __webpack_require__(100);

var _VXPayLanguage2 = _interopRequireDefault(_VXPayLanguage);

var _VXPayNotifications = __webpack_require__(417);

var _VXPayNotifications2 = _interopRequireDefault(_VXPayNotifications);

var _VXPayFlow = __webpack_require__(10);

var _VXPayFlow2 = _interopRequireDefault(_VXPayFlow);

var _VXPayModalConfig = __webpack_require__(102);

var _VXPayModalConfig2 = _interopRequireDefault(_VXPayModalConfig);

var _VXPayPaymentHooksConfig = __webpack_require__(70);

var _VXPayPaymentHooksConfig2 = _interopRequireDefault(_VXPayPaymentHooksConfig);

var _VXPayCurrency = __webpack_require__(104);

var _VXPayCurrency2 = _interopRequireDefault(_VXPayCurrency);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.VXPay = _VXPay2.default;
exports.VXPayConfig = _VXPayConfig2.default;
exports.VXPayEnvironment = _VXPayEnvironment2.default;
exports.VXPayLanguage = _VXPayLanguage2.default;
exports.VXPayNotifications = _VXPayNotifications2.default;
exports.VXPayModalConfig = _VXPayModalConfig2.default;
exports.VXPayPaymentHooksConfig = _VXPayPaymentHooksConfig2.default;
exports.VXPayFlow = _VXPayFlow2.default;
exports.VXPayCurrency = _VXPayCurrency2.default;

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VXPayConfig = __webpack_require__(140);

var _VXPayConfig2 = _interopRequireDefault(_VXPayConfig);

var _VXPayLogger = __webpack_require__(103);

var _VXPayLogger2 = _interopRequireDefault(_VXPayLogger);

var _VXPayHelperFrame = __webpack_require__(143);

var _VXPayHelperFrame2 = _interopRequireDefault(_VXPayHelperFrame);

var _VXPayPaymentFrame = __webpack_require__(149);

var _VXPayPaymentFrame2 = _interopRequireDefault(_VXPayPaymentFrame);

var _VXPayPaymentTab = __webpack_require__(151);

var _VXPayPaymentTab2 = _interopRequireDefault(_VXPayPaymentTab);

var _VXPayInitPaymentMiddleware = __webpack_require__(380);

var _VXPayInitPaymentMiddleware2 = _interopRequireDefault(_VXPayInitPaymentMiddleware);

var _VXPayInitHelperMiddleware = __webpack_require__(381);

var _VXPayInitHelperMiddleware2 = _interopRequireDefault(_VXPayInitHelperMiddleware);

var _VXPayListenOrCallLoggedInMiddleware = __webpack_require__(382);

var _VXPayListenOrCallLoggedInMiddleware2 = _interopRequireDefault(_VXPayListenOrCallLoggedInMiddleware);

var _VXPayOnAVSStatusListenMiddleware = __webpack_require__(385);

var _VXPayOnAVSStatusListenMiddleware2 = _interopRequireDefault(_VXPayOnAVSStatusListenMiddleware);

var _VXPayAVSStatusTriggerMiddleware = __webpack_require__(386);

var _VXPayAVSStatusTriggerMiddleware2 = _interopRequireDefault(_VXPayAVSStatusTriggerMiddleware);

var _VXPayListenForBalanceMiddleware = __webpack_require__(388);

var _VXPayListenForBalanceMiddleware2 = _interopRequireDefault(_VXPayListenForBalanceMiddleware);

var _VXPayBalanceTriggerMiddleware = __webpack_require__(389);

var _VXPayBalanceTriggerMiddleware2 = _interopRequireDefault(_VXPayBalanceTriggerMiddleware);

var _VXPayListenForActiveAbosMiddleware = __webpack_require__(391);

var _VXPayListenForActiveAbosMiddleware2 = _interopRequireDefault(_VXPayListenForActiveAbosMiddleware);

var _VXPayActiveAbosTriggerMiddleware = __webpack_require__(392);

var _VXPayActiveAbosTriggerMiddleware2 = _interopRequireDefault(_VXPayActiveAbosTriggerMiddleware);

var _VXPayListenForLogoutMiddleware = __webpack_require__(394);

var _VXPayListenForLogoutMiddleware2 = _interopRequireDefault(_VXPayListenForLogoutMiddleware);

var _VXPayLogoutTriggerMiddleware = __webpack_require__(395);

var _VXPayLogoutTriggerMiddleware2 = _interopRequireDefault(_VXPayLogoutTriggerMiddleware);

var _VXPayState = __webpack_require__(397);

var _VXPayState2 = _interopRequireDefault(_VXPayState);

var _VXPayWhenTokenTransferred = __webpack_require__(398);

var _VXPayWhenTokenTransferred2 = _interopRequireDefault(_VXPayWhenTokenTransferred);

var _VXPayOpenLoginCommand = __webpack_require__(399);

var _VXPayOpenLoginCommand2 = _interopRequireDefault(_VXPayOpenLoginCommand);

var _VXPayOpenSignUpCommand = __webpack_require__(400);

var _VXPayOpenSignUpCommand2 = _interopRequireDefault(_VXPayOpenSignUpCommand);

var _VXPayOpenVoiceCallCommand = __webpack_require__(401);

var _VXPayOpenVoiceCallCommand2 = _interopRequireDefault(_VXPayOpenVoiceCallCommand);

var _VXPayOpenPaymentCommand = __webpack_require__(403);

var _VXPayOpenPaymentCommand2 = _interopRequireDefault(_VXPayOpenPaymentCommand);

var _VXPayOpenSettingsCommand = __webpack_require__(404);

var _VXPayOpenSettingsCommand2 = _interopRequireDefault(_VXPayOpenSettingsCommand);

var _VXPayOpenAboCommand = __webpack_require__(405);

var _VXPayOpenAboCommand2 = _interopRequireDefault(_VXPayOpenAboCommand);

var _VXPayResetPasswordCommand = __webpack_require__(406);

var _VXPayResetPasswordCommand2 = _interopRequireDefault(_VXPayResetPasswordCommand);

var _VXPayLostPasswordCommand = __webpack_require__(407);

var _VXPayLostPasswordCommand2 = _interopRequireDefault(_VXPayLostPasswordCommand);

var _VXPayOpenLimitedPaymentCommand = __webpack_require__(408);

var _VXPayOpenLimitedPaymentCommand2 = _interopRequireDefault(_VXPayOpenLimitedPaymentCommand);

var _VXPayOpenVipAboTrialCommand = __webpack_require__(409);

var _VXPayOpenVipAboTrialCommand2 = _interopRequireDefault(_VXPayOpenVipAboTrialCommand);

var _VXPayOpenPremiumAboCommand = __webpack_require__(410);

var _VXPayOpenPremiumAboCommand2 = _interopRequireDefault(_VXPayOpenPremiumAboCommand);

var _VXPayOpenAVSCommand = __webpack_require__(411);

var _VXPayOpenAVSCommand2 = _interopRequireDefault(_VXPayOpenAVSCommand);

var _VXPayOpenPromoCodeCommand = __webpack_require__(412);

var _VXPayOpenPromoCodeCommand2 = _interopRequireDefault(_VXPayOpenPromoCodeCommand);

var _VXPayOpenOneClickCommand = __webpack_require__(413);

var _VXPayOpenOneClickCommand2 = _interopRequireDefault(_VXPayOpenOneClickCommand);

var _VXPayOpenAutoRechargeCommand = __webpack_require__(414);

var _VXPayOpenAutoRechargeCommand2 = _interopRequireDefault(_VXPayOpenAutoRechargeCommand);

var _VXPayOpenOpenBalanceCommand = __webpack_require__(415);

var _VXPayOpenOpenBalanceCommand2 = _interopRequireDefault(_VXPayOpenOpenBalanceCommand);

var _VXPayTriggerShowForTab = __webpack_require__(416);

var _VXPayTriggerShowForTab2 = _interopRequireDefault(_VXPayTriggerShowForTab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPay = function () {
	/**
  * @param {VXPayConfig} config
  */
	function VXPay(config) {
		_classCallCheck(this, VXPay);

		this.config = config;
		this.logger = new _VXPayLogger2.default(this.config.logging, this.config.window);
		this._state = new _VXPayState2.default();
		this.logger.log('VXPay::constructor - ' + JSON.stringify(this.config.getOptions()));
	}

	/**
  * @return {VXPayState}
  */


	_createClass(VXPay, [{
		key: '_initHelperFrame',


		/**
   * @return {Promise<VXPay>}
   * @private
   */
		value: function _initHelperFrame() {
			var _this = this;

			return new Promise(function (resolve) {
				return (0, _VXPayInitHelperMiddleware2.default)(_this, resolve);
			});
		}

		/**
   * @return {Promise<VXPay>}
   * @private
   */

	}, {
		key: '_initPaymentFrame',
		value: function _initPaymentFrame() {
			var _this2 = this;

			return new Promise(function (resolve) {
				return (0, _VXPayInitPaymentMiddleware2.default)(_this2, resolve);
			});
		}

		/**
   * @return {Promise<VXPay>}
   */

	}, {
		key: 'openLogin',
		value: function openLogin() {
			var _this3 = this;

			return new Promise(function (resolve, reject) {
				return _this3._initPaymentFrame().then(_VXPayWhenTokenTransferred2.default).then(_VXPayOpenLoginCommand2.default).then(_VXPayTriggerShowForTab2.default).then(resolve).catch(reject);
			});
		}

		/**
   * @return {Promise<VXPay>}
   */

	}, {
		key: 'openSignUp',
		value: function openSignUp() {
			var _this4 = this;

			return new Promise(function (resolve, reject) {
				return _this4._initPaymentFrame().then(_VXPayWhenTokenTransferred2.default).then(_VXPayOpenSignUpCommand2.default).then(_VXPayTriggerShowForTab2.default).then(resolve).catch(reject);
			});
		}

		/**
   * @return {Promise<VXPay>}
   */

	}, {
		key: 'openVoiceCall',
		value: function openVoiceCall() {
			var _this5 = this;

			return new Promise(function (resolve, reject) {
				_this5._initPaymentFrame().then(_VXPayWhenTokenTransferred2.default).then(_VXPayOpenVoiceCallCommand2.default.run).then(_VXPayTriggerShowForTab2.default).then(resolve).catch(reject);
			});
		}

		/**
   * @return {Promise<VXPay>}
   */

	}, {
		key: 'openSignUpOrLogin',
		value: function openSignUpOrLogin() {
			var _this6 = this;

			return this._initHelperFrame().then(function (vxpay) {
				return vxpay.helperFrame.getLoginCookie();
			}).then(function (msg) {
				return msg.hasCookie ? _this6.openLogin() : _this6.openSignUp();
			});
		}

		/**
   * @return {Promise<VXPay>}
   */

	}, {
		key: 'openPayment',
		value: function openPayment() {
			var _this7 = this;

			return new Promise(function (resolve, reject) {
				_this7._initPaymentFrame().then(_VXPayWhenTokenTransferred2.default).then(_VXPayOpenPaymentCommand2.default.run).then(_VXPayTriggerShowForTab2.default).then(resolve).catch(reject);
			});
		}

		/**
   * @return {Promise<VXPay>}
   */

	}, {
		key: 'openAbo',
		value: function openAbo() {
			var _this8 = this;

			return new Promise(function (resolve, reject) {
				_this8._initPaymentFrame().then(_VXPayWhenTokenTransferred2.default).then(_VXPayOpenAboCommand2.default).then(_VXPayTriggerShowForTab2.default).then(resolve).catch(reject);
			});
		}

		/**
   * @return {Promise<VXPay>}
   */

	}, {
		key: 'openSettings',
		value: function openSettings() {
			var _this9 = this;

			return new Promise(function (resolve, reject) {
				_this9._initPaymentFrame().then(_VXPayWhenTokenTransferred2.default).then(_VXPayOpenSettingsCommand2.default.run).then(_VXPayTriggerShowForTab2.default).then(resolve).catch(reject);
			});
		}

		/**
   * @note most times opens registration?
   * @note some times view-ready is not fired?
   *
   * @return {Promise<VXPay>}
   */

	}, {
		key: 'resetPassword',
		value: function resetPassword() {
			var _this10 = this;

			return new Promise(function (resolve, reject) {
				_this10._initPaymentFrame().then(_VXPayWhenTokenTransferred2.default).then(_VXPayResetPasswordCommand2.default.run).then(_VXPayTriggerShowForTab2.default).then(resolve).catch(reject);
			});
		}

		/**
   * @return {Promise<VXPay>}
   */

	}, {
		key: 'lostPassword',
		value: function lostPassword() {
			var _this11 = this;

			return new Promise(function (resolve, reject) {
				_this11._initPaymentFrame().then(_VXPayWhenTokenTransferred2.default).then(_VXPayLostPasswordCommand2.default.run).then(_VXPayTriggerShowForTab2.default).then(resolve).catch(reject);
			});
		}

		/**
   * @return {Promise<VXPay>}
   */

	}, {
		key: 'limitPayment',
		value: function limitPayment() {
			var _this12 = this;

			return new Promise(function (resolve, reject) {
				_this12._initPaymentFrame().then(_VXPayWhenTokenTransferred2.default).then(_VXPayOpenLimitedPaymentCommand2.default.run).then(_VXPayTriggerShowForTab2.default).then(resolve).catch(reject);
			});
		}

		/**
   * @return {Promise<VXPay>}
   */

	}, {
		key: 'vipAboTrial',
		value: function vipAboTrial() {
			var _this13 = this;

			return new Promise(function (resolve, reject) {
				_this13._initPaymentFrame().then(_VXPayWhenTokenTransferred2.default).then(_VXPayOpenVipAboTrialCommand2.default).then(_VXPayTriggerShowForTab2.default).then(resolve).catch(reject);
			});
		}

		/**
   * @return {Promise<VXPay>}
   */

	}, {
		key: 'premiumAbo',
		value: function premiumAbo() {
			var _this14 = this;

			return new Promise(function (resolve, reject) {
				_this14._initPaymentFrame().then(_VXPayWhenTokenTransferred2.default).then(_VXPayOpenPremiumAboCommand2.default).then(_VXPayTriggerShowForTab2.default).then(resolve).catch(reject);
			});
		}

		/**
   * @return {Promise<VXPay>}
   */

	}, {
		key: 'openAVS',
		value: function openAVS() {
			var _this15 = this;

			return new Promise(function (resolve, reject) {
				_this15._initPaymentFrame().then(_VXPayWhenTokenTransferred2.default).then(_VXPayOpenAVSCommand2.default).then(_VXPayTriggerShowForTab2.default).then(resolve).catch(reject);
			});
		}

		/**
   * @return {Promise<VXPay>}
   */

	}, {
		key: 'openPromoCode',
		value: function openPromoCode() {
			var _this16 = this;

			return new Promise(function (resolve, reject) {
				_this16._initPaymentFrame().then(_VXPayWhenTokenTransferred2.default).then(_VXPayOpenPromoCodeCommand2.default).then(_VXPayTriggerShowForTab2.default).then(resolve).catch(reject);
			});
		}

		/**
   * @return {Promise<VXPay>}
   */

	}, {
		key: 'openScratchCard',
		value: function openScratchCard() {
			var _this17 = this;

			return new Promise(function (resolve, reject) {
				_this17._initPaymentFrame().then(_VXPayWhenTokenTransferred2.default).then(_VXPayOpenPromoCodeCommand2.default).then(_VXPayTriggerShowForTab2.default).then(resolve).catch(reject);
			});
		}

		/**
   * @return {Promise<VXPay>}
   */

	}, {
		key: 'openOneClick',
		value: function openOneClick() {
			var _this18 = this;

			return new Promise(function (resolve, reject) {
				_this18._initPaymentFrame().then(_VXPayWhenTokenTransferred2.default).then(_VXPayOpenOneClickCommand2.default.run).then(_VXPayTriggerShowForTab2.default).then(resolve).catch(reject);
			});
		}

		/**
   * @return {Promise<VXPay>}
   */

	}, {
		key: 'openAutoReCharge',
		value: function openAutoReCharge() {
			var _this19 = this;

			return new Promise(function (resolve, reject) {
				_this19._initPaymentFrame().then(_VXPayWhenTokenTransferred2.default).then(_VXPayOpenAutoRechargeCommand2.default.run).then(_VXPayTriggerShowForTab2.default).then(resolve).catch(reject);
			});
		}

		/**
   * @return {Promise<VXPay>}
   */

	}, {
		key: 'openBalance',
		value: function openBalance() {
			var _this20 = this;

			return new Promise(function (resolve, reject) {
				_this20._initPaymentFrame().then(_VXPayWhenTokenTransferred2.default).then(_VXPayOpenOpenBalanceCommand2.default).then(_VXPayTriggerShowForTab2.default).then(resolve).catch(reject);
			});
		}

		/**
   * @return {Promise<VXPayIsLoggedInResponseMessage>}
   */

	}, {
		key: 'isLoggedIn',
		value: function isLoggedIn() {
			var _this21 = this;

			return new Promise(function (resolve, reject) {
				_this21._initPaymentFrame().then(function (vxpay) {
					return (0, _VXPayListenOrCallLoggedInMiddleware2.default)(vxpay, resolve, reject);
				}).catch(reject);
			});
		}

		/**
   * @return {Promise<VXPayAVSStatusMessage>}
   */

	}, {
		key: 'getAVSStatus',
		value: function getAVSStatus() {
			var _this22 = this;

			return new Promise(function (resolve, reject) {
				return _this22._initPaymentFrame().then(function (vxpay) {
					return (0, _VXPayOnAVSStatusListenMiddleware2.default)(vxpay, resolve);
				}).then(_VXPayAVSStatusTriggerMiddleware2.default).catch(reject);
			});
		}

		/**
   * @return {Promise<VXPayBalanceMessage>}
   */

	}, {
		key: 'getBalance',
		value: function getBalance() {
			var _this23 = this;

			return new Promise(function (resolve, reject) {
				_this23._initPaymentFrame().then(function (vxpay) {
					return (0, _VXPayListenForBalanceMiddleware2.default)(vxpay, resolve);
				}).then(_VXPayBalanceTriggerMiddleware2.default).catch(reject);
			});
		}

		/**
   * @return {Promise<VXPayActiveAbosMessage>}
   */

	}, {
		key: 'getActiveAbos',
		value: function getActiveAbos() {
			var _this24 = this;

			return new Promise(function (resolve, reject) {
				_this24._initPaymentFrame().then(function (vxpay) {
					return (0, _VXPayListenForActiveAbosMiddleware2.default)(vxpay, resolve, reject);
				}).then(_VXPayActiveAbosTriggerMiddleware2.default).catch(reject);
			});
		}

		/**
   * @return {Promise<VXPayLoggedOutMessage>}
   */

	}, {
		key: 'logout',
		value: function logout() {
			var _this25 = this;

			return new Promise(function (resolve, reject) {
				_this25._initPaymentFrame().then(function (vxpay) {
					return (0, _VXPayListenForLogoutMiddleware2.default)(vxpay, resolve);
				}).then(_VXPayLogoutTriggerMiddleware2.default).catch(reject);
			});
		}

		/**
   * @return {VXPayConfig}
   */

	}, {
		key: 'state',
		get: function get() {
			return this._state;
		}
	}, {
		key: 'config',
		get: function get() {
			return this._config;
		}

		/**
   * @param {VXPayConfig} value
   */
		,
		set: function set(value) {
			if (!(value instanceof _VXPayConfig2.default)) {
				throw new TypeError('Please provide an instance of VXPayConfig!');
			}

			this._config = value;
		}

		/**
   * @return {VXPayLogger}
   */

	}, {
		key: 'logger',
		get: function get() {
			return this._logger;
		}

		/**
   * @param {VXPayLogger} value
   */
		,
		set: function set(value) {
			if (!(value instanceof _VXPayLogger2.default)) {
				throw new TypeError('Please provide an instance of VXPayLogger!');
			}

			this._logger = value;
		}

		/**
   * @return {Number}
   */

	}, {
		key: 'apiVersion',
		get: function get() {
			return this.config.apiVersion;
		}

		/**
   * @param {Number} value
   */
		,
		set: function set(value) {
			this.config.apiVersion = value;
		}

		/**
   * Expose hooks on VXPay object
   * @return {VXPayPaymentHooksConfig}
   */

	}, {
		key: 'hooks',
		get: function get() {
			return this._paymentFrame.hooks;
		}

		/**
   * @return {VXPayPaymentFrame|VXPayPaymentTab}
   */

	}, {
		key: 'paymentFrame',
		get: function get() {
			return this._paymentFrame;
		}

		/**
   * @param {VXPayPaymentFrame|VXPayPaymentTab} value
   */
		,
		set: function set(value) {
			if (!(value instanceof _VXPayPaymentFrame2.default) && !(value instanceof _VXPayPaymentTab2.default)) {
				throw new TypeError('Payment frame should be an instance of VXPayPaymentFrame or VXPayPaymentTab');
			}

			this._paymentFrame = value;
		}

		/**
   * @return {VXPayHelperFrame}
   */

	}, {
		key: 'helperFrame',
		get: function get() {
			return this._helperFrame;
		}

		/**
   * @param {VXPayHelperFrame} value
   */
		,
		set: function set(value) {
			if (!(value instanceof _VXPayHelperFrame2.default)) {
				throw new TypeError('Helper frame should be an instance of VXPayHelperFrame');
			}

			this._helperFrame = value;
		}

		/**
   * @return {Window|undefined}
   */

	}, {
		key: 'window',
		get: function get() {
			return this.config.window;
		}
	}]);

	return VXPay;
}();

exports.default = VXPay;

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayMessage2 = __webpack_require__(5);

var _VXPayMessage3 = _interopRequireDefault(_VXPayMessage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayContentLoadedMessage = function (_VXPayMessage) {
	_inherits(VXPayContentLoadedMessage, _VXPayMessage);

	function VXPayContentLoadedMessage() {
		var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

		_classCallCheck(this, VXPayContentLoadedMessage);

		return _possibleConstructorReturn(this, (VXPayContentLoadedMessage.__proto__ || Object.getPrototypeOf(VXPayContentLoadedMessage)).call(this, _VXPayMessage3.default.TYPE_CONTENT_LOADED));
	}

	return VXPayContentLoadedMessage;
}(_VXPayMessage3.default);

exports.default = VXPayContentLoadedMessage;

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VXPayHookMessage = __webpack_require__(69);

var _VXPayHookMessage2 = _interopRequireDefault(_VXPayHookMessage);

var _VXPayFlowChangedMessage = __webpack_require__(142);

var _VXPayFlowChangedMessage2 = _interopRequireDefault(_VXPayFlowChangedMessage);

var _VXPayLoggedInMessage = __webpack_require__(361);

var _VXPayLoggedInMessage2 = _interopRequireDefault(_VXPayLoggedInMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayHookMessageFactory = function () {
	function VXPayHookMessageFactory() {
		_classCallCheck(this, VXPayHookMessageFactory);
	}

	_createClass(VXPayHookMessageFactory, null, [{
		key: 'fromData',


		/**
   * @param data
   * @return {VXPayHookMessage}
   */
		value: function fromData() {
			var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			if (typeof data === 'undefined' || !data.hasOwnProperty('hook')) {
				throw new TypeError('Invalid message format - no hook field');
			}

			switch (data.hook) {
				case _VXPayHookMessage2.default.HOOK_FLOW_CHANGED:
					return new _VXPayFlowChangedMessage2.default(data.prevFlow, data.flow);

				case _VXPayHookMessage2.default.HOOK_LOGIN:
					return new _VXPayLoggedInMessage2.default();

				default:
					return new _VXPayHookMessage2.default();
			}
		}
	}]);

	return VXPayHookMessageFactory;
}();

exports.default = VXPayHookMessageFactory;

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayHookMessage2 = __webpack_require__(69);

var _VXPayHookMessage3 = _interopRequireDefault(_VXPayHookMessage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayLoggedInMessage = function (_VXPayHookMessage) {
	_inherits(VXPayLoggedInMessage, _VXPayHookMessage);

	function VXPayLoggedInMessage() {
		var hook = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

		_classCallCheck(this, VXPayLoggedInMessage);

		return _possibleConstructorReturn(this, (VXPayLoggedInMessage.__proto__ || Object.getPrototypeOf(VXPayLoggedInMessage)).call(this, _VXPayHookMessage3.default.HOOK_LOGIN));
	}

	return VXPayLoggedInMessage;
}(_VXPayHookMessage3.default);

exports.default = VXPayLoggedInMessage;

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayMessage2 = __webpack_require__(5);

var _VXPayMessage3 = _interopRequireDefault(_VXPayMessage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayIframeReadyMessage = function (_VXPayMessage) {
	_inherits(VXPayIframeReadyMessage, _VXPayMessage);

	function VXPayIframeReadyMessage() {
		var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

		_classCallCheck(this, VXPayIframeReadyMessage);

		return _possibleConstructorReturn(this, (VXPayIframeReadyMessage.__proto__ || Object.getPrototypeOf(VXPayIframeReadyMessage)).call(this, _VXPayMessage3.default.TYPE_IFRAME_READY));
	}

	return VXPayIframeReadyMessage;
}(_VXPayMessage3.default);

exports.default = VXPayIframeReadyMessage;

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayMessage2 = __webpack_require__(5);

var _VXPayMessage3 = _interopRequireDefault(_VXPayMessage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayTransferTokenMessage = function (_VXPayMessage) {
	_inherits(VXPayTransferTokenMessage, _VXPayMessage);

	/**
  * @param {String} token
  */
	function VXPayTransferTokenMessage(token) {
		_classCallCheck(this, VXPayTransferTokenMessage);

		var _this = _possibleConstructorReturn(this, (VXPayTransferTokenMessage.__proto__ || Object.getPrototypeOf(VXPayTransferTokenMessage)).call(this, _VXPayMessage3.default.TYPE_TRANSFER_TOKEN));

		_this.token = token;
		return _this;
	}

	return VXPayTransferTokenMessage;
}(_VXPayMessage3.default);

exports.default = VXPayTransferTokenMessage;

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayMessage2 = __webpack_require__(5);

var _VXPayMessage3 = _interopRequireDefault(_VXPayMessage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayIframeCloseMessage = function (_VXPayMessage) {
	_inherits(VXPayIframeCloseMessage, _VXPayMessage);

	/**
  * @param {Object} data
  */
	function VXPayIframeCloseMessage() {
		var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, VXPayIframeCloseMessage);

		var _this = _possibleConstructorReturn(this, (VXPayIframeCloseMessage.__proto__ || Object.getPrototypeOf(VXPayIframeCloseMessage)).call(this, _VXPayMessage3.default.TYPE_IFRAME_CLOSE));

		_this.data = data;
		return _this;
	}

	return VXPayIframeCloseMessage;
}(_VXPayMessage3.default);

exports.default = VXPayIframeCloseMessage;

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayMessage2 = __webpack_require__(5);

var _VXPayMessage3 = _interopRequireDefault(_VXPayMessage2);

var _VXPayUser = __webpack_require__(366);

var _VXPayUser2 = _interopRequireDefault(_VXPayUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPaySuccessMessage = function (_VXPayMessage) {
	_inherits(VXPaySuccessMessage, _VXPayMessage);

	/**
  * @param {Object} data
  */
	function VXPaySuccessMessage() {
		var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : VXPaySuccessMessage.USER_DATA_STRUCT;

		_classCallCheck(this, VXPaySuccessMessage);

		var _this = _possibleConstructorReturn(this, (VXPaySuccessMessage.__proto__ || Object.getPrototypeOf(VXPaySuccessMessage)).call(this, _VXPayMessage3.default.TYPE_SUCCESS));

		_this.user = new _VXPayUser2.default();

		// populate user model
		_this.user.balance = data.availableMoney || 0;
		_this.user.nickname = data.screenname || '';
		_this.user.fsk18 = data.fsk18 || false;
		_this.user.userId = data.userId || NaN;
		return _this;
	}

	return VXPaySuccessMessage;
}(_VXPayMessage3.default);

/**
 * Sample response data
 * @type {Object}
 */


VXPaySuccessMessage.USER_DATA_STRUCT = {
	"success": true,
	"userFromLogin": false,
	"userFromSignup": false,
	"flow": "login",
	"hostId": null,
	"screenname": "user123",
	"userId": 9876789087,
	"isLoggedIn": true,
	"transferToken": "TT_7a9523c9-5555-4c48-5555-91cc2465f484",
	"availableMoney": 12.34,
	"fsk18": false,
	"uhash": null
};

exports.default = VXPaySuccessMessage;

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayUser = function () {
	function VXPayUser() {
		_classCallCheck(this, VXPayUser);

		this._balance = NaN;
		this._fsk18 = false;
		this._nickname = '';
		this._userId = NaN;
	}

	/**
  * @return {Number|NaN}
  */


	_createClass(VXPayUser, [{
		key: 'balance',
		get: function get() {
			return this._balance;
		}

		/**
   * @param {Number} value
   */
		,
		set: function set(value) {
			this._balance = value;
		}

		/**
   * @return {Boolean}
   */

	}, {
		key: 'fsk18',
		get: function get() {
			return this._fsk18;
		}

		/**
   * @param {Boolean} value
   */
		,
		set: function set(value) {
			this._fsk18 = value;
		}

		/**
   * @return {String}
   */

	}, {
		key: 'nickname',
		get: function get() {
			return this._nickname;
		}

		/**
   * @param {String} value
   */
		,
		set: function set(value) {
			this._nickname = value;
		}

		/**
   * @return {Number|NaN}
   */

	}, {
		key: 'userId',
		get: function get() {
			return this._userId;
		}

		/**
   * @param {Number} value
   */
		,
		set: function set(value) {
			this._userId = value;
		}
	}]);

	return VXPayUser;
}();

exports.default = VXPayUser;

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayMessage2 = __webpack_require__(5);

var _VXPayMessage3 = _interopRequireDefault(_VXPayMessage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayIsLoggedInResponseMessage = function (_VXPayMessage) {
	_inherits(VXPayIsLoggedInResponseMessage, _VXPayMessage);

	/**
  * @param {Boolean} loggedIn
  */
	function VXPayIsLoggedInResponseMessage() {
		var loggedIn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

		_classCallCheck(this, VXPayIsLoggedInResponseMessage);

		var _this = _possibleConstructorReturn(this, (VXPayIsLoggedInResponseMessage.__proto__ || Object.getPrototypeOf(VXPayIsLoggedInResponseMessage)).call(this, _VXPayMessage3.default.TYPE_IS_LOGGED_IN));

		_this.loggedIn = loggedIn;
		return _this;
	}

	return VXPayIsLoggedInResponseMessage;
}(_VXPayMessage3.default);

exports.default = VXPayIsLoggedInResponseMessage;

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayMessage2 = __webpack_require__(5);

var _VXPayMessage3 = _interopRequireDefault(_VXPayMessage2);

var _VXPayAVSStatus = __webpack_require__(148);

var _VXPayAVSStatus2 = _interopRequireDefault(_VXPayAVSStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayAVSStatusMessage = function (_VXPayMessage) {
	_inherits(VXPayAVSStatusMessage, _VXPayMessage);

	/**
  * @param {VXPayAVSStatus} status
  */
	function VXPayAVSStatusMessage() {
		var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _VXPayAVSStatus2.default();

		_classCallCheck(this, VXPayAVSStatusMessage);

		var _this = _possibleConstructorReturn(this, (VXPayAVSStatusMessage.__proto__ || Object.getPrototypeOf(VXPayAVSStatusMessage)).call(this, _VXPayMessage3.default.TYPE_AVS_STATUS));

		_this.status = status;
		return _this;
	}

	return VXPayAVSStatusMessage;
}(_VXPayMessage3.default);

exports.default = VXPayAVSStatusMessage;

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VXPayMessage2 = __webpack_require__(5);

var _VXPayMessage3 = _interopRequireDefault(_VXPayMessage2);

var _VXPayCurrency = __webpack_require__(104);

var _VXPayCurrency2 = _interopRequireDefault(_VXPayCurrency);

var _VXPayBalance = __webpack_require__(370);

var _VXPayBalance2 = _interopRequireDefault(_VXPayBalance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayBalanceMessage = function (_VXPayMessage) {
	_inherits(VXPayBalanceMessage, _VXPayMessage);

	function VXPayBalanceMessage() {
		_classCallCheck(this, VXPayBalanceMessage);

		var _this = _possibleConstructorReturn(this, (VXPayBalanceMessage.__proto__ || Object.getPrototypeOf(VXPayBalanceMessage)).call(this, _VXPayMessage3.default.TYPE_BALANCE));

		_this.balance = new _VXPayBalance2.default();
		return _this;
	}

	/**
  * @param {Object} data
  * @return {VXPayBalanceMessage}
  */


	_createClass(VXPayBalanceMessage, null, [{
		key: 'fromData',
		value: function fromData() {
			var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : VXPayBalanceMessage.SAMPLE_DATA;

			var instance = new VXPayBalanceMessage();
			instance.balance = new _VXPayBalance2.default(data.balance, data.currency);
			return instance;
		}
	}]);

	return VXPayBalanceMessage;
}(_VXPayMessage3.default);

VXPayBalanceMessage.SAMPLE_DATA = {
	balance: 0,
	currency: _VXPayCurrency2.default.EUR
};

exports.default = VXPayBalanceMessage;

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VXPayCurrency = __webpack_require__(104);

var _VXPayCurrency2 = _interopRequireDefault(_VXPayCurrency);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayBalance = function () {
	/**
  * @param {Number} amount
  * @param {String} currency
  */
	function VXPayBalance() {
		var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var currency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _VXPayCurrency2.default.EUR;

		_classCallCheck(this, VXPayBalance);

		this._amount = amount;
		this._currency = currency;
	}

	/**
  * @return {number}
  */


	_createClass(VXPayBalance, [{
		key: 'toString',


		/**
   * @return {string}
   */
		value: function toString() {
			return this._amount.toFixed(2) + ' ' + this._currency;
		}
	}, {
		key: 'amount',
		get: function get() {
			return this._amount;
		}

		/**
   * @return {string}
   */

	}, {
		key: 'currency',
		get: function get() {
			return this._currency;
		}
	}]);

	return VXPayBalance;
}();

exports.default = VXPayBalance;

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VXPayMessage2 = __webpack_require__(5);

var _VXPayMessage3 = _interopRequireDefault(_VXPayMessage2);

var _VXPayAbo = __webpack_require__(372);

var _VXPayAbo2 = _interopRequireDefault(_VXPayAbo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayActiveAbosMessage = function (_VXPayMessage) {
	_inherits(VXPayActiveAbosMessage, _VXPayMessage);

	function VXPayActiveAbosMessage() {
		_classCallCheck(this, VXPayActiveAbosMessage);

		var _this = _possibleConstructorReturn(this, (VXPayActiveAbosMessage.__proto__ || Object.getPrototypeOf(VXPayActiveAbosMessage)).call(this, _VXPayMessage3.default.TYPE_ACTIVE_ABOS));

		_this.abos = [];
		return _this;
	}

	/**
  * @param {VXPayAbo} abo
  */


	_createClass(VXPayActiveAbosMessage, [{
		key: 'add',
		value: function add(abo) {
			this.abos.push(abo);
		}

		/**
   * @param {Object} data
   * @return {VXPayActiveAbosMessage}
   */

	}], [{
		key: 'fromData',
		value: function fromData() {
			var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : VXPayActiveAbosMessage.SAMPLE_DATA;

			var instance = new VXPayActiveAbosMessage();

			// instantiate models
			Object.keys(data).forEach(function (key) {
				var model = new _VXPayAbo2.default();
				model.amount = data[key].amount;
				model.endDate = data[key].endDate;
				model.isActive = data[key].isActive;
				model.isFreeAbo = data[key].isFreeAbo;
				model.isPaidAbo = data[key].isPaidAbo;
				model.isTrialAbo = data[key].isTrialAbo;
				model.name = data[key].name;

				// append
				instance.add(model);
			});

			return instance;
		}
	}]);

	return VXPayActiveAbosMessage;
}(_VXPayMessage3.default);

VXPayActiveAbosMessage.SAMPLE_DATA = {
	name: {
		amount: 0,
		endDate: {},
		isActive: true,
		isFreeAbo: false,
		isPaidAbo: true,
		isTrialAbo: true,
		name: 'Abo'
	}
};

exports.default = VXPayActiveAbosMessage;

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayAbo = function () {
	function VXPayAbo() {
		_classCallCheck(this, VXPayAbo);

		this._amount = 0;
		this._endDate = 0;
		this._isActive = false;
		this._isFreeAbo = false;
		this._isPaidAbo = true;
		this._isTrialAbo = true;
		this._name = '';
	}

	/**
  * @return {Number}
  */


	_createClass(VXPayAbo, [{
		key: 'amount',
		get: function get() {
			return this._amount;
		}

		/**
   * @param {Number} value
   */
		,
		set: function set(value) {
			this._amount = value;
		}

		/**
   * @return {Number}
   */

	}, {
		key: 'endDate',
		get: function get() {
			return this._endDate;
		}

		/**
   * @param {Number} value
   */
		,
		set: function set(value) {
			this._endDate = value;
		}

		/**
   * @return {Boolean}
   */

	}, {
		key: 'isActive',
		get: function get() {
			return this._isActive;
		}

		/**
   * @param {Boolean} value
   */
		,
		set: function set(value) {
			this._isActive = value;
		}

		/**
   * @return {Boolean}
   */

	}, {
		key: 'isFreeAbo',
		get: function get() {
			return this._isFreeAbo;
		}

		/**
   * @param {Boolean} value
   */
		,
		set: function set(value) {
			this._isFreeAbo = value;
			this._isPaidAbo = !value;
		}

		/**
   * @return {Boolean}
   */

	}, {
		key: 'isPaidAbo',
		get: function get() {
			return this._isPaidAbo;
		}

		/**
   * @param {Boolean} value
   */
		,
		set: function set(value) {
			this._isPaidAbo = value;
			this._isFreeAbo = !value;
		}

		/**
   * @return {Boolean}
   */

	}, {
		key: 'isTrialAbo',
		get: function get() {
			return this._isTrialAbo;
		}

		/**
   * @param {Boolean} value
   */
		,
		set: function set(value) {
			this._isTrialAbo = value;
		}

		/**
   * @return {String}
   */

	}, {
		key: 'name',
		get: function get() {
			return this._name;
		}

		/**
   * @param {String} value
   */
		,
		set: function set(value) {
			this._name = value;
		}
	}]);

	return VXPayAbo;
}();

exports.default = VXPayAbo;

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayMessage2 = __webpack_require__(5);

var _VXPayMessage3 = _interopRequireDefault(_VXPayMessage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayLoggedOutMessage = function (_VXPayMessage) {
	_inherits(VXPayLoggedOutMessage, _VXPayMessage);

	function VXPayLoggedOutMessage() {
		_classCallCheck(this, VXPayLoggedOutMessage);

		return _possibleConstructorReturn(this, (VXPayLoggedOutMessage.__proto__ || Object.getPrototypeOf(VXPayLoggedOutMessage)).call(this, _VXPayMessage3.default.TYPE_LOGGED_OUT));
		// this.loggedIn = false; - do we need it?
	}

	return VXPayLoggedOutMessage;
}(_VXPayMessage3.default);

exports.default = VXPayLoggedOutMessage;

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VXPayHooksConfig2 = __webpack_require__(105);

var _VXPayHooksConfig3 = _interopRequireDefault(_VXPayHooksConfig2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayHelperHooksConfig = function (_VXPayHooksConfig) {
  _inherits(VXPayHelperHooksConfig, _VXPayHooksConfig);

  function VXPayHelperHooksConfig() {
    _classCallCheck(this, VXPayHelperHooksConfig);

    return _possibleConstructorReturn(this, (VXPayHelperHooksConfig.__proto__ || Object.getPrototypeOf(VXPayHelperHooksConfig)).apply(this, arguments));
  }

  return VXPayHelperHooksConfig;
}(_VXPayHooksConfig3.default);

exports.default = VXPayHelperHooksConfig;

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayMessage2 = __webpack_require__(5);

var _VXPayMessage3 = _interopRequireDefault(_VXPayMessage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayInitSessionMessage = function (_VXPayMessage) {
	_inherits(VXPayInitSessionMessage, _VXPayMessage);

	/**
  * @param {String} token
  */
	function VXPayInitSessionMessage() {
		var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		_classCallCheck(this, VXPayInitSessionMessage);

		var _this = _possibleConstructorReturn(this, (VXPayInitSessionMessage.__proto__ || Object.getPrototypeOf(VXPayInitSessionMessage)).call(this, _VXPayMessage3.default.TYPE_INIT_SESSION));

		_this.token = token;
		return _this;
	}

	return VXPayInitSessionMessage;
}(_VXPayMessage3.default);

exports.default = VXPayInitSessionMessage;

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayMessage2 = __webpack_require__(5);

var _VXPayMessage3 = _interopRequireDefault(_VXPayMessage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayUpdateParamsMessage = function (_VXPayMessage) {
	_inherits(VXPayUpdateParamsMessage, _VXPayMessage);

	/**
  * @param {Object} options
  */
	function VXPayUpdateParamsMessage() {
		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, VXPayUpdateParamsMessage);

		var _this = _possibleConstructorReturn(this, (VXPayUpdateParamsMessage.__proto__ || Object.getPrototypeOf(VXPayUpdateParamsMessage)).call(this, _VXPayMessage3.default.TYPE_UPDATE_PARAMS));

		_this.options = options;
		return _this;
	}

	return VXPayUpdateParamsMessage;
}(_VXPayMessage3.default);

exports.default = VXPayUpdateParamsMessage;

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayMessage2 = __webpack_require__(5);

var _VXPayMessage3 = _interopRequireDefault(_VXPayMessage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayChangeRouteMessage = function (_VXPayMessage) {
	_inherits(VXPayChangeRouteMessage, _VXPayMessage);

	/**
  * @param {String} route
  */
	function VXPayChangeRouteMessage() {
		var route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

		_classCallCheck(this, VXPayChangeRouteMessage);

		// change route message can be empty
		var _this = _possibleConstructorReturn(this, (VXPayChangeRouteMessage.__proto__ || Object.getPrototypeOf(VXPayChangeRouteMessage)).call(this, _VXPayMessage3.default.TYPE_CHANGE_ROUTE));

		if (route.length > 0) {
			_this.route = route;
		}
		return _this;
	}

	return VXPayChangeRouteMessage;
}(_VXPayMessage3.default);

exports.default = VXPayChangeRouteMessage;

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayUserAgentHelper = function () {
	/**
  * @param {String} uaString
  */
	function VXPayUserAgentHelper() {
		var uaString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

		_classCallCheck(this, VXPayUserAgentHelper);

		this._userAgent = uaString;
	}

	/**
  * @return {boolean}
  */


	_createClass(VXPayUserAgentHelper, [{
		key: 'isMobile',
		value: function isMobile() {
			return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(this._userAgent)
			);
		}

		/**
   * @return {string}
   */

	}, {
		key: 'userAgent',
		get: function get() {
			return this._userAgent;
		}

		/**
   * @param {string} value
   */
		,
		set: function set(value) {
			this._userAgent = value;
		}
	}]);

	return VXPayUserAgentHelper;
}();

exports.default = VXPayUserAgentHelper;

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayMessage2 = __webpack_require__(5);

var _VXPayMessage3 = _interopRequireDefault(_VXPayMessage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayAdditionalOptionsMessage = function (_VXPayMessage) {
	_inherits(VXPayAdditionalOptionsMessage, _VXPayMessage);

	/**
  * @param {Object} options
  */
	function VXPayAdditionalOptionsMessage() {
		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, VXPayAdditionalOptionsMessage);

		var _this = _possibleConstructorReturn(this, (VXPayAdditionalOptionsMessage.__proto__ || Object.getPrototypeOf(VXPayAdditionalOptionsMessage)).call(this, _VXPayMessage3.default.TYPE_ADDITIONAL_INFO));

		_this.options = options;
		return _this;
	}

	return VXPayAdditionalOptionsMessage;
}(_VXPayMessage3.default);

exports.default = VXPayAdditionalOptionsMessage;

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayPaymentFrame = __webpack_require__(149);

var _VXPayPaymentFrame2 = _interopRequireDefault(_VXPayPaymentFrame);

var _VXPayPaymentTab = __webpack_require__(151);

var _VXPayPaymentTab2 = _interopRequireDefault(_VXPayPaymentTab);

var _VXPayLogger = __webpack_require__(103);

var _VXPayLogger2 = _interopRequireDefault(_VXPayLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @todo function seems a bit too long, maybe refactor in future?
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @return {Function}
 * @constructor
 */
var VXPayInitPaymentMiddleware = function VXPayInitPaymentMiddleware(vxpay, resolve) {
	// check already initialized
	if (typeof vxpay.paymentFrame !== 'undefined') {
		return resolve(vxpay);
	}

	// tab or frame?
	vxpay.paymentFrame = vxpay.config.enableTab ? new _VXPayPaymentTab2.default(vxpay.window.document, _VXPayPaymentTab2.default.NAME, vxpay.config) : new _VXPayPaymentFrame2.default(vxpay.window.document, vxpay.config.getPaymentFrameUrl(), _VXPayPaymentFrame2.default.NAME);

	// do we need logging?
	if (vxpay.config.logging) {
		vxpay.paymentFrame.hooks.onAny(function (msg) {
			return vxpay.logger.log(_VXPayLogger2.default.LOG_INCOMING, msg);
		}).onBeforeSend(function (msg) {
			return vxpay.logger.log(_VXPayLogger2.default.LOG_OUTGOING, msg);
		});
	}

	if (!vxpay.paymentFrame.loaded) {
		// set resolve hook
		vxpay.paymentFrame.hooks
		// state updates
		.onIframeReady(vxpay.state.markFrameReady.bind(vxpay.state)).onContentLoaded(vxpay.state.markContentLoaded.bind(vxpay.state)).onTransferToken(vxpay.state.markHasToken.bind(vxpay.state))
		// functional hooks
		.onTransferToken(vxpay.config.setTokenFromMessage.bind(vxpay.config)).onFlowChange(vxpay.config.updateFlow.bind(vxpay.config))
		// show frame and send isVisible
		.onViewReady(vxpay.paymentFrame.setVisible.bind(vxpay.paymentFrame)).onViewReady(vxpay.paymentFrame.show.bind(vxpay.paymentFrame)).onSuccess(vxpay.paymentFrame.hide.bind(vxpay.paymentFrame)).onClose(vxpay.paymentFrame.hide.bind(vxpay.paymentFrame)).onContentLoaded(function (msg) {
			return resolve(vxpay);
		});

		// trigger load if not tab
		if (!vxpay.config.enableTab) {
			vxpay.paymentFrame.triggerLoad();
		} else {
			// resolve promise
			resolve(vxpay);
		}
	}
};

exports.default = VXPayInitPaymentMiddleware;

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayHelperFrame = __webpack_require__(143);

var _VXPayHelperFrame2 = _interopRequireDefault(_VXPayHelperFrame);

var _VXPayLogger = __webpack_require__(103);

var _VXPayLogger2 = _interopRequireDefault(_VXPayLogger);

var _VXPayIframe = __webpack_require__(49);

var _VXPayIframe2 = _interopRequireDefault(_VXPayIframe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @return {Function}
 * @constructor
 */
var VXPayInitHelperMiddleware = function VXPayInitHelperMiddleware(vxpay, resolve) {
	// check already initialized
	if (typeof vxpay.helperFrame !== 'undefined') {
		return resolve(vxpay);
	}

	vxpay.helperFrame = new _VXPayHelperFrame2.default(vxpay.window.document, _VXPayIframe2.default.ORIGIN + '/VXPAY-V' + vxpay._apiVersion + '/helper');

	if (vxpay.config.logging) {
		vxpay.helperFrame.hooks.onAny(function (msg) {
			return vxpay.logger.log(_VXPayLogger2.default.LOG_INCOMING, msg);
		}).onBeforeSend(function (msg) {
			return vxpay.logger.log(_VXPayLogger2.default.LOG_OUTGOING, msg);
		});
	}

	vxpay.helperFrame.triggerLoad();
	return resolve(vxpay);
};

exports.default = VXPayInitHelperMiddleware;

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayIsLoggedInTriggerMiddleware = __webpack_require__(383);

var _VXPayIsLoggedInTriggerMiddleware2 = _interopRequireDefault(_VXPayIsLoggedInTriggerMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @return {VXPay}
 * @constructor
 */
var VXPayListenOrCallLoggedInMiddleware = function VXPayListenOrCallLoggedInMiddleware(vxpay, resolve, reject) {
	// is token already received?
	if (!vxpay.state.hasToken) {
		vxpay.hooks.onTransferToken(function (msg) {
			return (0, _VXPayIsLoggedInTriggerMiddleware2.default)(vxpay, resolve, reject);
		});
	} else {
		(0, _VXPayIsLoggedInTriggerMiddleware2.default)(vxpay, resolve, reject);
	}

	return vxpay;
};

exports.default = VXPayListenOrCallLoggedInMiddleware;

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayIsLoggedInActionMessage = __webpack_require__(384);

var _VXPayIsLoggedInActionMessage2 = _interopRequireDefault(_VXPayIsLoggedInActionMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @constructor
 */
var VXPayIsLoggedInTriggerMiddleware = function VXPayIsLoggedInTriggerMiddleware(vxpay, resolve, reject) {
	try {
		// is hook setup?
		if (!vxpay.hooks.hasOnIsLoggedIn(resolve)) {
			vxpay.hooks.onIsLoggedIn(resolve);
		}

		// trigger post message
		vxpay.paymentFrame.postMessage(new _VXPayIsLoggedInActionMessage2.default());
	} catch (err) {
		reject(err);
	}

	return vxpay;
};

exports.default = VXPayIsLoggedInTriggerMiddleware;

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayMessage2 = __webpack_require__(5);

var _VXPayMessage3 = _interopRequireDefault(_VXPayMessage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayIsLoggedInActionMessage = function (_VXPayMessage) {
	_inherits(VXPayIsLoggedInActionMessage, _VXPayMessage);

	function VXPayIsLoggedInActionMessage() {
		_classCallCheck(this, VXPayIsLoggedInActionMessage);

		return _possibleConstructorReturn(this, (VXPayIsLoggedInActionMessage.__proto__ || Object.getPrototypeOf(VXPayIsLoggedInActionMessage)).call(this, _VXPayMessage3.default.TYPE_ACTION_IS_LOGGED_IN));
	}

	return VXPayIsLoggedInActionMessage;
}(_VXPayMessage3.default);

exports.default = VXPayIsLoggedInActionMessage;

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @return {VXPay}
 * @constructor
 */
var VXPayOnAVSStatusListenMiddleware = function VXPayOnAVSStatusListenMiddleware(vxpay, resolve) {
  if (!vxpay.hooks.hasOnAVSStatus(resolve)) {
    vxpay.hooks.onAVSStatus(resolve);
  }

  return vxpay;
};

exports.default = VXPayOnAVSStatusListenMiddleware;

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayGetAVSStatusMessage = __webpack_require__(387);

var _VXPayGetAVSStatusMessage2 = _interopRequireDefault(_VXPayGetAVSStatusMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
var VXPayAVSStatusTriggerMiddleware = function VXPayAVSStatusTriggerMiddleware(vxpay) {
	var message = new _VXPayGetAVSStatusMessage2.default();

	// is token already received?
	if (!vxpay.state.hasToken) {
		vxpay.hooks.onTransferToken(function (msg) {
			return vxpay.paymentFrame.postMessage(message);
		});
	} else {
		// or trigger post message
		vxpay.paymentFrame.postMessage(message);
	}

	return vxpay;
};

exports.default = VXPayAVSStatusTriggerMiddleware;

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayMessage2 = __webpack_require__(5);

var _VXPayMessage3 = _interopRequireDefault(_VXPayMessage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayGetAVSStatusMessage = function (_VXPayMessage) {
	_inherits(VXPayGetAVSStatusMessage, _VXPayMessage);

	function VXPayGetAVSStatusMessage() {
		_classCallCheck(this, VXPayGetAVSStatusMessage);

		return _possibleConstructorReturn(this, (VXPayGetAVSStatusMessage.__proto__ || Object.getPrototypeOf(VXPayGetAVSStatusMessage)).call(this, _VXPayMessage3.default.TYPE_ACTION_GET_AVS_STATUS));
	}

	return VXPayGetAVSStatusMessage;
}(_VXPayMessage3.default);

exports.default = VXPayGetAVSStatusMessage;

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @return {VXPay}
 * @constructor
 */
var VXPayListenForBalanceMiddleware = function VXPayListenForBalanceMiddleware(vxpay, resolve) {
  if (!vxpay.hooks.hasOnBalance(resolve)) {
    vxpay.hooks.onBalance(resolve);
  }

  return vxpay;
};

exports.default = VXPayListenForBalanceMiddleware;

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayGetBalanceMessage = __webpack_require__(390);

var _VXPayGetBalanceMessage2 = _interopRequireDefault(_VXPayGetBalanceMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
var VXPayBalanceTriggerMiddleware = function VXPayBalanceTriggerMiddleware(vxpay) {
	var message = new _VXPayGetBalanceMessage2.default();

	if (!vxpay.state.hasToken) {
		vxpay.hooks.onTransferToken(function (msg) {
			return vxpay.paymentFrame.postMessage(message);
		});
	} else {
		vxpay.paymentFrame.postMessage(message);
	}

	return vxpay;
};

exports.default = VXPayBalanceTriggerMiddleware;

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayMessage2 = __webpack_require__(5);

var _VXPayMessage3 = _interopRequireDefault(_VXPayMessage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayGetBalanceMessage = function (_VXPayMessage) {
	_inherits(VXPayGetBalanceMessage, _VXPayMessage);

	function VXPayGetBalanceMessage() {
		_classCallCheck(this, VXPayGetBalanceMessage);

		return _possibleConstructorReturn(this, (VXPayGetBalanceMessage.__proto__ || Object.getPrototypeOf(VXPayGetBalanceMessage)).call(this, _VXPayMessage3.default.TYPE_ACTION_GET_BALANCE));
	}

	return VXPayGetBalanceMessage;
}(_VXPayMessage3.default);

exports.default = VXPayGetBalanceMessage;

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @param {Function} reject
 * @return {VXPay}
 * @constructor
 */
var VXPayListenForActiveAbosMiddleware = function VXPayListenForActiveAbosMiddleware(vxpay, resolve, reject) {
	try {
		if (!vxpay.hooks.hasOnActiveAbos(resolve)) {
			vxpay.hooks.onActiveAbos(resolve);
		}
	} catch (err) {
		reject(err);
	}

	return vxpay;
};

exports.default = VXPayListenForActiveAbosMiddleware;

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayGetActiveAbosMessage = __webpack_require__(393);

var _VXPayGetActiveAbosMessage2 = _interopRequireDefault(_VXPayGetActiveAbosMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
var VXPayActiveAbosTriggerMiddleware = function VXPayActiveAbosTriggerMiddleware(vxpay) {
	var message = new _VXPayGetActiveAbosMessage2.default();

	if (!vxpay.state.hasToken) {
		vxpay.hooks.onTransferToken(function (msg) {
			return vxpay.paymentFrame.postMessage(message);
		});
	} else {
		vxpay.paymentFrame.postMessage(message);
	}

	return vxpay;
};

exports.default = VXPayActiveAbosTriggerMiddleware;

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayMessage2 = __webpack_require__(5);

var _VXPayMessage3 = _interopRequireDefault(_VXPayMessage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayGetActiveAbosMessage = function (_VXPayMessage) {
	_inherits(VXPayGetActiveAbosMessage, _VXPayMessage);

	function VXPayGetActiveAbosMessage() {
		_classCallCheck(this, VXPayGetActiveAbosMessage);

		return _possibleConstructorReturn(this, (VXPayGetActiveAbosMessage.__proto__ || Object.getPrototypeOf(VXPayGetActiveAbosMessage)).call(this, _VXPayMessage3.default.TYPE_ACTION_GET_ACTIVE_ABOS));
	}

	return VXPayGetActiveAbosMessage;
}(_VXPayMessage3.default);

exports.default = VXPayGetActiveAbosMessage;

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @param {VXPay} vxpay
 * @param {Function} resolve
 * @return {VXPay}
 * @constructor
 */
var VXPayListenForLogoutMiddleware = function VXPayListenForLogoutMiddleware(vxpay, resolve) {
  if (!vxpay.hooks.hasOnLogout(resolve)) {
    vxpay.hooks.onLogout(resolve);
  }

  return vxpay;
};

exports.default = VXPayListenForLogoutMiddleware;

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayLogoutMessage = __webpack_require__(396);

var _VXPayLogoutMessage2 = _interopRequireDefault(_VXPayLogoutMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
var VXPayLogoutTriggerMiddleware = function VXPayLogoutTriggerMiddleware(vxpay) {
	if (vxpay.config.token === '') {
		vxpay.hooks.onTransferToken(function (msg) {
			return vxpay.paymentFrame.postMessage(new _VXPayLogoutMessage2.default());
		});
	} else {
		vxpay.paymentFrame.postMessage(new _VXPayLogoutMessage2.default());
	}

	return vxpay;
};

exports.default = VXPayLogoutTriggerMiddleware;

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayMessage2 = __webpack_require__(5);

var _VXPayMessage3 = _interopRequireDefault(_VXPayMessage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VXPayLogoutMessage = function (_VXPayMessage) {
	_inherits(VXPayLogoutMessage, _VXPayMessage);

	function VXPayLogoutMessage() {
		_classCallCheck(this, VXPayLogoutMessage);

		return _possibleConstructorReturn(this, (VXPayLogoutMessage.__proto__ || Object.getPrototypeOf(VXPayLogoutMessage)).call(this, _VXPayMessage3.default.TYPE_ACTION_LOGOUT));
	}

	return VXPayLogoutMessage;
}(_VXPayMessage3.default);

exports.default = VXPayLogoutMessage;

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayState = function () {
	function VXPayState() {
		_classCallCheck(this, VXPayState);

		this._isFrameReady = false;
		this._token = undefined;
		this._isContentLoaded = false;
		this._isSessionInitialized = false;
	}

	/**
  * @return {boolean}
  */


	_createClass(VXPayState, [{
		key: 'markFrameReady',


		/**
   * @return {void}
   */
		value: function markFrameReady() {
			this._isFrameReady = true;
		}

		/**
   * @return {void}
   */

	}, {
		key: 'markContentLoaded',
		value: function markContentLoaded() {
			this._isContentLoaded = true;
		}

		/**
   * @param {VXPayTransferTokenMessage} msg
   */

	}, {
		key: 'markHasToken',
		value: function markHasToken(msg) {
			this._token = msg;
		}

		/**
   * @return {undefined|VXPayTransferTokenMessage}
   */

	}, {
		key: 'markSessionInitialized',
		value: function markSessionInitialized() {
			this._isSessionInitialized = true;
		}
	}, {
		key: 'isFrameReady',
		get: function get() {
			return this._isFrameReady;
		}

		/**
   * @param {boolean} value
   */
		,
		set: function set(value) {
			this._isFrameReady = value;
		}

		/**
   * @return {boolean}
   */

	}, {
		key: 'hasToken',
		get: function get() {
			return typeof this._token !== 'undefined';
		}

		/**
   * @return {boolean}
   */

	}, {
		key: 'isContentLoaded',
		get: function get() {
			return this._isContentLoaded;
		}

		/**
   * @param {boolean} value
   */
		,
		set: function set(value) {
			this._isContentLoaded = value;
		}

		/**
   * @return {boolean}
   */

	}, {
		key: 'isSessionInitialized',
		get: function get() {
			return this._isSessionInitialized;
		}

		/**
   * @param {boolean} value
   */
		,
		set: function set(value) {
			this._isSessionInitialized = value;
		}
	}, {
		key: 'transferToken',
		get: function get() {
			return this._token;
		}
	}]);

	return VXPayState;
}();

exports.default = VXPayState;

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * @param {VXPay} vxpay
 * @return {Promise<VXPay>}
 * @constructor
 */
var VXPayWhenTokenTransferred = function VXPayWhenTokenTransferred(vxpay) {
	return new Promise(function (resolve, reject) {
		try {
			// do we have the token already?
			if (vxpay.state.hasToken || vxpay.config.enableTab) {
				resolve(vxpay);
			} else {
				// otherwise - wait for it
				vxpay.hooks.onTransferToken(function (msg) {
					return resolve(vxpay);
				});
			}
		} catch (err) {
			reject(err);
		}
	});
};

exports.default = VXPayWhenTokenTransferred;

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayFlow = __webpack_require__(10);

var _VXPayFlow2 = _interopRequireDefault(_VXPayFlow);

var _VXPayPaymentRoutes = __webpack_require__(12);

var _VXPayPaymentRoutes2 = _interopRequireDefault(_VXPayPaymentRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
var VXPayOpenLoginCommand = function VXPayOpenLoginCommand(vxpay) {
	vxpay.paymentFrame.sendOptions({ 'flow': _VXPayFlow2.default.LOGIN }).sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(_VXPayPaymentRoutes2.default.LOGIN).initSession();

	return vxpay;
};

exports.default = VXPayOpenLoginCommand;

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayFlow = __webpack_require__(10);

var _VXPayFlow2 = _interopRequireDefault(_VXPayFlow);

var _VXPayPaymentRoutes = __webpack_require__(12);

var _VXPayPaymentRoutes2 = _interopRequireDefault(_VXPayPaymentRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
var VXPayOpenSignUpCommand = function VXPayOpenSignUpCommand(vxpay) {
	vxpay.paymentFrame.sendOptions({ 'flow': _VXPayFlow2.default.LOGIN }).sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(_VXPayPaymentRoutes2.default.SIGN_UP).initSession();

	return vxpay;
};

exports.default = VXPayOpenSignUpCommand;

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VXPayPaymentType = __webpack_require__(402);

var _VXPayPaymentType2 = _interopRequireDefault(_VXPayPaymentType);

var _VXPayFlow = __webpack_require__(10);

var _VXPayFlow2 = _interopRequireDefault(_VXPayFlow);

var _VXPayPaymentRoutes = __webpack_require__(12);

var _VXPayPaymentRoutes2 = _interopRequireDefault(_VXPayPaymentRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayOpenVoiceCallCommand = function () {
	function VXPayOpenVoiceCallCommand() {
		_classCallCheck(this, VXPayOpenVoiceCallCommand);
	}

	_createClass(VXPayOpenVoiceCallCommand, null, [{
		key: 'run',

		/**
   * @param {VXPay} vxpay
   * @return {VXPay}
   */
		value: function run(vxpay) {
			vxpay.paymentFrame.sendOptions(VXPayOpenVoiceCallCommand.PARAMS).sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(_VXPayPaymentRoutes2.default.VOICE_CALL).initSession();

			return vxpay;
		}
	}]);

	return VXPayOpenVoiceCallCommand;
}();

VXPayOpenVoiceCallCommand.PARAMS = {
	flow: _VXPayFlow2.default.MONEY_CHARGE,
	paytype: _VXPayPaymentType2.default.VOICE_CALL
};

exports.default = VXPayOpenVoiceCallCommand;

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayPaymentType = function VXPayPaymentType() {
  _classCallCheck(this, VXPayPaymentType);
};

VXPayPaymentType.VOICE_CALL = 'Voice';
VXPayPaymentType.CREDIT_CARD = 'CC';
VXPayPaymentType.LASTSCHRIFT = 'LS';

exports.default = VXPayPaymentType;

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VXPayPaymentRoutes = __webpack_require__(12);

var _VXPayPaymentRoutes2 = _interopRequireDefault(_VXPayPaymentRoutes);

var _VXPayFlow = __webpack_require__(10);

var _VXPayFlow2 = _interopRequireDefault(_VXPayFlow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayOpenPaymentCommand = function () {
	function VXPayOpenPaymentCommand() {
		_classCallCheck(this, VXPayOpenPaymentCommand);
	}

	_createClass(VXPayOpenPaymentCommand, null, [{
		key: 'run',

		/**
   * @param {VXPay} vxpay
   * @return {VXPay}
   */
		value: function run(vxpay) {
			vxpay.paymentFrame.sendOptions(VXPayOpenPaymentCommand.PARAMS).sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(_VXPayPaymentRoutes2.default.PAYMENT).initSession();

			return vxpay;
		}
	}]);

	return VXPayOpenPaymentCommand;
}();

VXPayOpenPaymentCommand.PARAMS = {
	flow: _VXPayFlow2.default.MONEY_CHARGE,
	paytype: '' // unset paytype
};

exports.default = VXPayOpenPaymentCommand;

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VXPayFlow = __webpack_require__(10);

var _VXPayFlow2 = _interopRequireDefault(_VXPayFlow);

var _VXPayPaymentRoutes = __webpack_require__(12);

var _VXPayPaymentRoutes2 = _interopRequireDefault(_VXPayPaymentRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayOpenSettingsCommand = function () {
	function VXPayOpenSettingsCommand() {
		_classCallCheck(this, VXPayOpenSettingsCommand);
	}

	_createClass(VXPayOpenSettingsCommand, null, [{
		key: 'run',

		/**
   * @param {VXPay} vxpay
   * @return {VXPay}
   */
		value: function run(vxpay) {
			vxpay.paymentFrame.sendOptions(VXPayOpenSettingsCommand.PARAMS).sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(_VXPayPaymentRoutes2.default.SETTINGS).initSession();

			return vxpay;
		}
	}]);

	return VXPayOpenSettingsCommand;
}();

VXPayOpenSettingsCommand.PARAMS = {
	flow: _VXPayFlow2.default.SETTINGS,
	paytype: '' // reset paytype
};

exports.default = VXPayOpenSettingsCommand;

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayFlow = __webpack_require__(10);

var _VXPayFlow2 = _interopRequireDefault(_VXPayFlow);

var _VXPayPaymentRoutes = __webpack_require__(12);

var _VXPayPaymentRoutes2 = _interopRequireDefault(_VXPayPaymentRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
var VXPayOpenAboCommand = function VXPayOpenAboCommand(vxpay) {
	vxpay.paymentFrame.sendOptions({ 'flow': _VXPayFlow2.default.VIP_ABO }).sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(_VXPayPaymentRoutes2.default.ABO).initSession();

	return vxpay;
};

exports.default = VXPayOpenAboCommand;

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VXPayUrlHelper = __webpack_require__(67);

var _VXPayUrlHelper2 = _interopRequireDefault(_VXPayUrlHelper);

var _VXPayFlow = __webpack_require__(10);

var _VXPayFlow2 = _interopRequireDefault(_VXPayFlow);

var _VXPayPaymentRoutes = __webpack_require__(12);

var _VXPayPaymentRoutes2 = _interopRequireDefault(_VXPayPaymentRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayResetPasswordCommand = function () {
	function VXPayResetPasswordCommand() {
		_classCallCheck(this, VXPayResetPasswordCommand);
	}

	_createClass(VXPayResetPasswordCommand, null, [{
		key: 'run',

		/**
   * @param {VXPay} vxpay
   * @return {VXPay}
   */
		value: function run(vxpay) {
			vxpay.paymentFrame.initSession().sendOptions(VXPayResetPasswordCommand.getParams(vxpay.config)).sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(_VXPayPaymentRoutes2.default.PASSWORD_RESET);

			return vxpay;
		}

		/**
   * @param config
   * @return {{flow: string, pwdresetUserId: String, pwdresetUserName: String, pwdresetKey: String}}
   */

	}, {
		key: 'getParams',
		value: function getParams(config) {
			var helper = new _VXPayUrlHelper2.default(config.window.URL);

			return {
				flow: _VXPayFlow2.default.PASSWORD_RESET,
				pwdresetUserId: helper.getQueryParam('u', config.window.location.href),
				pwdresetUserName: helper.getQueryParam('tpLoginPwdLost', config.window.location.href),
				pwdresetKey: helper.getQueryParam('key', config.window.location.href)
			};
		}
	}]);

	return VXPayResetPasswordCommand;
}();

exports.default = VXPayResetPasswordCommand;

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VXPayUrlHelper = __webpack_require__(67);

var _VXPayUrlHelper2 = _interopRequireDefault(_VXPayUrlHelper);

var _VXPayFlow = __webpack_require__(10);

var _VXPayFlow2 = _interopRequireDefault(_VXPayFlow);

var _VXPayPaymentRoutes = __webpack_require__(12);

var _VXPayPaymentRoutes2 = _interopRequireDefault(_VXPayPaymentRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayLostPasswordCommand = function () {
	function VXPayLostPasswordCommand() {
		_classCallCheck(this, VXPayLostPasswordCommand);
	}

	_createClass(VXPayLostPasswordCommand, null, [{
		key: 'run',

		/**
   * @param {VXPay} vxpay
   * @return {VXPay}
   */
		value: function run(vxpay) {
			vxpay.paymentFrame.initSession().sendOptions(VXPayLostPasswordCommand.getParams(vxpay.config)).sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(_VXPayPaymentRoutes2.default.PASSWORD);

			return vxpay;
		}

		/**
   * @param config
   * @return {{flow: string, pwdresetUserId: String, pwdresetUserName: String, pwdresetEmail: String}}
   */

	}, {
		key: 'getParams',
		value: function getParams(config) {
			var helper = new _VXPayUrlHelper2.default(config.window.URL);

			return {
				flow: _VXPayFlow2.default.PASSWORD_LOST,
				pwdresetUserId: helper.getQueryParam('u', config.window.location.href),
				pwdresetUserName: helper.getQueryParam('tpLoginPwdLost', config.window.location.href),
				pwdresetEmail: helper.getQueryParam('tpEmailPwdLost', config.window.location.href)
			};
		}
	}]);

	return VXPayLostPasswordCommand;
}();

exports.default = VXPayLostPasswordCommand;

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VXPayFlow = __webpack_require__(10);

var _VXPayFlow2 = _interopRequireDefault(_VXPayFlow);

var _VXPayPaymentRoutes = __webpack_require__(12);

var _VXPayPaymentRoutes2 = _interopRequireDefault(_VXPayPaymentRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayOpenLimitedPaymentCommand = function () {
	function VXPayOpenLimitedPaymentCommand() {
		_classCallCheck(this, VXPayOpenLimitedPaymentCommand);
	}

	_createClass(VXPayOpenLimitedPaymentCommand, null, [{
		key: 'run',

		/**
   * @param {VXPay} vxpay
   * @return {VXPay}
   */
		value: function run(vxpay) {
			vxpay.paymentFrame.sendOptions(VXPayOpenLimitedPaymentCommand.PARAMS).sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(_VXPayPaymentRoutes2.default.LIMIT).initSession();

			return vxpay;
		}
	}]);

	return VXPayOpenLimitedPaymentCommand;
}();

VXPayOpenLimitedPaymentCommand.PARAMS = {
	flow: _VXPayFlow2.default.LIMIT,
	paytype: ''
};

exports.default = VXPayOpenLimitedPaymentCommand;

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayFlow = __webpack_require__(10);

var _VXPayFlow2 = _interopRequireDefault(_VXPayFlow);

var _VXPayPaymentRoutes = __webpack_require__(12);

var _VXPayPaymentRoutes2 = _interopRequireDefault(_VXPayPaymentRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
var VXPayOpenVipAboTrialCommand = function VXPayOpenVipAboTrialCommand(vxpay) {
	vxpay.paymentFrame.initSession().sendOptions({ 'flow': _VXPayFlow2.default.TRIAL_VIP_ABO }).sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(_VXPayPaymentRoutes2.default.ABO);

	return vxpay;
};

exports.default = VXPayOpenVipAboTrialCommand;

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayFlow = __webpack_require__(10);

var _VXPayFlow2 = _interopRequireDefault(_VXPayFlow);

var _VXPayPaymentRoutes = __webpack_require__(12);

var _VXPayPaymentRoutes2 = _interopRequireDefault(_VXPayPaymentRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VXPayOpenPremiumAboCommand = function VXPayOpenPremiumAboCommand(vxpay) {
	vxpay.paymentFrame.initSession().sendOptions({ 'flow': _VXPayFlow2.default.VXTV_ABO }).sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(_VXPayPaymentRoutes2.default.ABO);

	return vxpay;
};

exports.default = VXPayOpenPremiumAboCommand;

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayFlow = __webpack_require__(10);

var _VXPayFlow2 = _interopRequireDefault(_VXPayFlow);

var _VXPayPaymentRoutes = __webpack_require__(12);

var _VXPayPaymentRoutes2 = _interopRequireDefault(_VXPayPaymentRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
var VXPayOpenAVSCommand = function VXPayOpenAVSCommand(vxpay) {
	vxpay.paymentFrame.initSession().sendOptions({ 'flow': _VXPayFlow2.default.AVS }).sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(_VXPayPaymentRoutes2.default.AVS);

	return vxpay;
};

exports.default = VXPayOpenAVSCommand;

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayFlow = __webpack_require__(10);

var _VXPayFlow2 = _interopRequireDefault(_VXPayFlow);

var _VXPayPaymentRoutes = __webpack_require__(12);

var _VXPayPaymentRoutes2 = _interopRequireDefault(_VXPayPaymentRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
var VXPayOpenPromoCodeCommand = function VXPayOpenPromoCodeCommand(vxpay) {
	vxpay.paymentFrame.initSession().sendOptions({ 'flow': _VXPayFlow2.default.PROMOCODE }).sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(_VXPayPaymentRoutes2.default.PROMOCODE);

	return vxpay;
};

exports.default = VXPayOpenPromoCodeCommand;

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VXPayFlow = __webpack_require__(10);

var _VXPayFlow2 = _interopRequireDefault(_VXPayFlow);

var _VXPayPaymentRoutes = __webpack_require__(12);

var _VXPayPaymentRoutes2 = _interopRequireDefault(_VXPayPaymentRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayOpenOneClickCommand = function () {
	function VXPayOpenOneClickCommand() {
		_classCallCheck(this, VXPayOpenOneClickCommand);
	}

	_createClass(VXPayOpenOneClickCommand, null, [{
		key: 'run',

		/**
   * @param {VXPay} vxpay
   * @return {VXPay}
   */
		value: function run(vxpay) {
			vxpay.paymentFrame.initSession().sendOptions(VXPayOpenOneClickCommand.PARAMS).sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(_VXPayPaymentRoutes2.default.ONE_CLICK);

			return vxpay;
		}
	}]);

	return VXPayOpenOneClickCommand;
}();

VXPayOpenOneClickCommand.PARAMS = {
	flow: _VXPayFlow2.default.ONE_CLICK,
	paytype: '',
	oneClickData: {
		data: null
	}
};

exports.default = VXPayOpenOneClickCommand;

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VXPayFlow = __webpack_require__(10);

var _VXPayFlow2 = _interopRequireDefault(_VXPayFlow);

var _VXPayPaymentRoutes = __webpack_require__(12);

var _VXPayPaymentRoutes2 = _interopRequireDefault(_VXPayPaymentRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayOpenAutoRechargeCommand = function () {
	function VXPayOpenAutoRechargeCommand() {
		_classCallCheck(this, VXPayOpenAutoRechargeCommand);
	}

	_createClass(VXPayOpenAutoRechargeCommand, null, [{
		key: 'run',

		/**
   * @param {VXPay} vxpay
   * @return {VXPay}
   */
		value: function run(vxpay) {
			vxpay.paymentFrame.initSession().sendOptions(VXPayOpenAutoRechargeCommand.PARAMS).sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(_VXPayPaymentRoutes2.default.AUTO_RECHARGE);

			return vxpay;
		}
	}]);

	return VXPayOpenAutoRechargeCommand;
}();

VXPayOpenAutoRechargeCommand.PARAMS = {
	flow: _VXPayFlow2.default.AUTO_RECHARGE,
	autoRechargeData: {
		data: null
	}
};

exports.default = VXPayOpenAutoRechargeCommand;

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _VXPayPaymentRoutes = __webpack_require__(12);

var _VXPayPaymentRoutes2 = _interopRequireDefault(_VXPayPaymentRoutes);

var _VXPayFlow = __webpack_require__(10);

var _VXPayFlow2 = _interopRequireDefault(_VXPayFlow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VXPayOpenOpenBalanceCommand = function VXPayOpenOpenBalanceCommand(vxpay) {
	vxpay.paymentFrame.initSession().sendOptions({ 'flow': _VXPayFlow2.default.OP_COMPENSATION }).sendAdditionalOptions(vxpay.config.getAdditionalOptions()).changeRoute(_VXPayPaymentRoutes2.default.OP_COMPENSATION);

	return vxpay;
};

exports.default = VXPayOpenOpenBalanceCommand;

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * @param {VXPay} vxpay
 * @return {VXPay}
 * @constructor
 */
var VXPayTriggerShowForTab = function VXPayTriggerShowForTab(vxpay) {
	// ony for tab config - trigger show manually
	if (vxpay.config.enableTab) {
		vxpay.paymentFrame.show();
	}

	return vxpay;
};

exports.default = VXPayTriggerShowForTab;

/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayNotifications = function VXPayNotifications() {
  _classCallCheck(this, VXPayNotifications);
};

VXPayNotifications.SESSION_ACKNOWLEDGE = 'ackSession';
VXPayNotifications.SESSION_EXPIRED = 'sessionExpired';
VXPayNotifications.MESSAGE = 'message';
VXPayNotifications.MESSAGE_PRICE = 'messagePrice';
VXPayNotifications.CHANNELS = 'channels';
VXPayNotifications.INCOMING_MESSAGE = 'incomingMessage';
VXPayNotifications.ALL_CHANNELS_SEEN = 'allChannelsSeen';
VXPayNotifications.CAN_ONECLICK_RESULT = 'canOneClickResult';
VXPayNotifications.CHARGE_AUTORECHARGE_RESULT = 'chargeAutoRechargeResult';
VXPayNotifications.CHARGE_ONECLICK_RESULT = 'chargeOneClickResult';
VXPayNotifications.FAVORITE_ACTOR_PINNED = 'FavoriteActorPinned';
VXPayNotifications.FAVORITE_ACTOR_UNPINNED = 'FavoriteActorUnpinned';
VXPayNotifications.FAVORITE_PICTURE_PINNED = 'FavoritePicturePinned';
VXPayNotifications.FAVORITE_PICTURE_UNPINNED = 'FavoritePictureUnpinned';
VXPayNotifications.FAVORITE_ALBUM_PINNED = 'FavoriteAlbumPinned';
VXPayNotifications.FAVORITE_ALBUM_UNPINNED = 'FavoriteAlbumUnpinned';
VXPayNotifications.FAVORITE_SEDCARDS_ALBUM_PINNED = 'FavoriteSedcardsAlbumPinned';
VXPayNotifications.FAVORITE_SEDCARDS_ALBUM_UNPINNED = 'FavoriteSedcardsAlbumUnpinned';
VXPayNotifications.FAVORITE_ACTORS = 'FavoriteActors';
VXPayNotifications.GUEST_BALANCE = 'guestBalance';
VXPayNotifications.NAVBAR_NOTIFICATIONS = 'navbarNotifications';
VXPayNotifications.ACTOR_ONLINE = 'actorOnline';
VXPayNotifications.ACTOR_OFFLINE = 'actorOffline';
VXPayNotifications.AVS_REVOKED = 'avsRevoked';
VXPayNotifications.AVS_SET = 'avsSet';
VXPayNotifications.GUEST_LOCKED = 'guestLocked';
VXPayNotifications.CHANNEL_ARCHIVED = 'channelArchived';
VXPayNotifications.SEND_SIGNUP_EMAIL_RESULT = 'sendSignupEmailResult';
VXPayNotifications.VIP_ABO_UPDATE = 'vipAboUpdate';
VXPayNotifications.VXTV_ABO_UPDATE = 'vxtvAboUpdate';
VXPayNotifications.VOICECALL_START = 'voicecallStart';
VXPayNotifications.VOICECALL_STOP = 'voicecallStop';
VXPayNotifications.WELCOME_BONUS_REDEEMED = 'welcomeBonusRedeemed';
VXPayNotifications.FREE_SHOW_START = 'freeShowStart';
VXPayNotifications.FREE_SHOW_STOP = 'freeShowStop';
VXPayNotifications.PONG = 'pong';

exports.default = VXPayNotifications;

/***/ })
/******/ ]);
//# sourceMappingURL=vxpay.js.map