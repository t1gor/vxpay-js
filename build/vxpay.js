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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
			return [VXPayEnvironment.DEVELOPMENT, VXPayEnvironment.STAGING, VXPayEnvironment.PRODUCTION];
		}
	}]);

	return VXPayEnvironment;
}();

VXPayEnvironment.DEVELOPMENT = 'development';
VXPayEnvironment.STAGING = 'staging';
VXPayEnvironment.PRODUCTION = 'production';

exports.default = VXPayEnvironment;

/***/ }),
/* 1 */
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

VXPayLanguage.DE = 'de';
VXPayLanguage.EN = 'en';
VXPayLanguage.NL = 'nl';

exports.default = VXPayLanguage;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VXPayEnvironment = __webpack_require__(0);

var _VXPayEnvironment2 = _interopRequireDefault(_VXPayEnvironment);

var _VXPayLanguage = __webpack_require__(1);

var _VXPayLanguage2 = _interopRequireDefault(_VXPayLanguage);

var _VXPayValidator = __webpack_require__(6);

var _VXPayValidator2 = _interopRequireDefault(_VXPayValidator);

var _VXPayFlow = __webpack_require__(3);

var _VXPayFlow2 = _interopRequireDefault(_VXPayFlow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayConfig = function () {

	/**
  * Set default config structure
  */
	function VXPayConfig() {
		_classCallCheck(this, VXPayConfig);

		this._env = _VXPayEnvironment2.default.DEVELOPMENT;
		this._logging = false;
		this._flow = _VXPayFlow2.default.LOGIN;
		this._lang = _VXPayLanguage2.default.getDefault();
		this._urls = {
			abg: VXPayConfig.ABG_DEFAULT.replace('{language}', this._lang),
			privacy: VXPayConfig.PRIVACY_DEFAULT.replace('{language}', this._lang)
		};
	}

	/**
  * @return {String}
  */


	_createClass(VXPayConfig, [{
		key: "abgUrl",
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
		key: "privacyUrl",
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
		key: "env",
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
		key: "logging",
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
		key: "language",
		get: function get() {
			return this._lang;
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
		key: "flow",
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
				var msg = 'Flow not allowed: ' + value.toString() + '. Select one of: ' + _VXPayFlow2.default.getAvailable().join(', ');
				throw new TypeError(msg);
			}

			this._flow = value;
		}
	}]);

	return VXPayConfig;
}();

VXPayConfig.ABG_DEFAULT = 'https://www.visit-x.net/CAMS/{language}/Info/Zentrum.html?submod=AGB&track=Account';
VXPayConfig.PRIVACY_DEFAULT = 'https://www.visit-x.net/CAMS/DE/Info/Zentrum.html?submod=Datenschutz&track=Index';

exports.default = VXPayConfig;

/***/ }),
/* 3 */
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
			return [VXPayFlow.AVS, VXPayFlow.LIMIT, VXPayFlow.LOGIN, VXPayFlow.MONEY_CHARGE, VXPayFlow.OP_COMPENSATION, VXPayFlow.PASSWORD_RESET, VXPayFlow.PROMOCODE, VXPayFlow.SCRATCH_CARD, VXPayFlow.TRIAL_VIP_ABO, VXPayFlow.VIP_ABO, VXPayFlow.VXTV_ABO];
		}
	}]);

	return VXPayFlow;
}();

VXPayFlow.AVS = 'avs';
VXPayFlow.LIMIT = 'limit';
VXPayFlow.LOGIN = 'login';
VXPayFlow.MONEY_CHARGE = 'moneycharge';
VXPayFlow.OP_COMPENSATION = 'opcompensation';
VXPayFlow.PASSWORD_RESET = 'pwdreset';
VXPayFlow.PROMOCODE = 'promocode';
VXPayFlow.SCRATCH_CARD = 'scratchcard';
VXPayFlow.TRIAL_VIP_ABO = 'trialvipabo';
VXPayFlow.VIP_ABO = 'vipabo';
VXPayFlow.VXTV_ABO = 'vxtvabo';

exports.default = VXPayFlow;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.VXPayNotifications = exports.VXPayLanguage = exports.VXPayEnvironment = exports.VXPayConfig = exports.VXPay = undefined;

var _VXPay = __webpack_require__(5);

var _VXPay2 = _interopRequireDefault(_VXPay);

var _VXPayConfig = __webpack_require__(2);

var _VXPayConfig2 = _interopRequireDefault(_VXPayConfig);

var _VXPayEnvironment = __webpack_require__(0);

var _VXPayEnvironment2 = _interopRequireDefault(_VXPayEnvironment);

var _VXPayLanguage = __webpack_require__(1);

var _VXPayLanguage2 = _interopRequireDefault(_VXPayLanguage);

var _VXPayNotifications = __webpack_require__(8);

var _VXPayNotifications2 = _interopRequireDefault(_VXPayNotifications);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.VXPay = _VXPay2.default;
exports.VXPayConfig = _VXPayConfig2.default;
exports.VXPayEnvironment = _VXPayEnvironment2.default;
exports.VXPayLanguage = _VXPayLanguage2.default;
exports.VXPayNotifications = _VXPayNotifications2.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VXPayConfig = __webpack_require__(2);

var _VXPayConfig2 = _interopRequireDefault(_VXPayConfig);

var _VXPayLogger = __webpack_require__(7);

var _VXPayLogger2 = _interopRequireDefault(_VXPayLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPay = function () {

	/**
  * @param {VXPayConfig} config
  */
	function VXPay(config) {
		_classCallCheck(this, VXPay);

		this.config = config;
		this.logger = new _VXPayLogger2.default(this.config.logging);
	}

	_createClass(VXPay, [{
		key: 'openLogin',
		value: function openLogin() {
			this.logger.log('open login');
		}

		/**
   * @return {VXPayConfig}
   */

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
	}]);

	return VXPay;
}();

exports.default = VXPay;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VXPayLanguage = __webpack_require__(1);

var _VXPayLanguage2 = _interopRequireDefault(_VXPayLanguage);

var _VXPayEnvironment = __webpack_require__(0);

var _VXPayEnvironment2 = _interopRequireDefault(_VXPayEnvironment);

var _VXPayFlow = __webpack_require__(3);

var _VXPayFlow2 = _interopRequireDefault(_VXPayFlow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VXPayValidator = function () {
	function VXPayValidator() {
		_classCallCheck(this, VXPayValidator);
	}

	_createClass(VXPayValidator, null, [{
		key: "isUrl",

		/**
   * @param {String} url
   * @return {boolean}
   */
		value: function isUrl(url) {
			try {
				new URL(url);
				return true;
			} catch (_) {
				return false;
			}
		}

		/**
   * @param {String} language
   * @return {boolean}
   */

	}, {
		key: "isLanguageSupported",
		value: function isLanguageSupported(language) {
			return _VXPayLanguage2.default.getAvailable().indexOf(language) !== -1;
		}

		/**
   * @param {String} env
   * @return {boolean}
   */

	}, {
		key: "isEnvironmentSupported",
		value: function isEnvironmentSupported(env) {
			return _VXPayEnvironment2.default.getAvailable().indexOf(env) !== -1;
		}

		/**
   * @param {String} flow
   * @return {boolean}
   */

	}, {
		key: "isFlowAllowed",
		value: function isFlowAllowed(flow) {
			return _VXPayFlow2.default.getAllowed().indexOf(flow) !== -1;
		}
	}]);

	return VXPayValidator;
}();

exports.default = VXPayValidator;

/***/ }),
/* 7 */
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
  */
	function VXPayLogger(enable) {
		_classCallCheck(this, VXPayLogger);

		this.enabled = enable || false;
		this._container = [];
	}

	/**
  * @param {String} message
  */


	_createClass(VXPayLogger, [{
		key: 'log',
		value: function log(message) {
			// check enabled
			if (!this.enabled) {
				return;
			}

			// for browser
			if (typeof window !== 'undefined') {
				return window.console.log(message);
			}

			// for tests - just collect
			this._container.push({
				time: new Date(),
				message: message.toString()
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

exports.default = VXPayLogger;

/***/ }),
/* 8 */
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