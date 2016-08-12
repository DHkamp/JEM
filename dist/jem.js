(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jem"] = factory();
	else
		root["jem"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _eventManager = __webpack_require__(1);
	
	var jem = {
	  greet: function greet() {
	    return 'hello';
	  },
	  test: function test() {
	    var e = Event.Create('testName', console.log, console.warn);
	  }
	};
	
	exports.default = jem;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EventManager = function () {
	    function EventManager() {
	        _classCallCheck(this, EventManager);
	
	        this._events = {};
	    }
	    /**
	     * Bounds provided functions to an event and triggers those on call. They'll be removed after the first call.
	     * @param  {string} eventName - Unique identifier for an event.
	     * @param  {Function[]} ...fn - Array of functions to be triggered.
	     */
	
	
	    _createClass(EventManager, [{
	        key: "Once",
	        value: function Once(eventName) {
	            var evts = [];
	            var events = this._events[eventName];
	
	            for (var _len = arguments.length, fn = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                fn[_key - 1] = arguments[_key];
	            }
	
	            fn.forEach(function (f) {
	                evts.push(function (args) {
	                    f(args);
	                    this.Dispatch(eventName, f);
	                });
	            });
	            this._events[eventName] = events ? events.concat(evts) : evts;
	        }
	        /**
	         * Calls all functions bound to the specified event.
	         * @param  {string} eventName - Unique identifier for the event to be called.
	         * @param  {Function[]} ...args - Array of functions to be triggered.
	         */
	
	    }, {
	        key: "Emit",
	        value: function Emit(eventName) {
	            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                args[_key2 - 1] = arguments[_key2];
	            }
	
	            var events = this._events[eventName];
	            if (events) {
	                events.forEach(function (e) {
	                    return e(args);
	                });
	            }
	        }
	        /**
	         * Bounds provided functions to an event and triggers those on call.
	         * @param  {string} eventName - Unique identifier for an event.
	         * @param  {Function[]} ...args - Array of functions to be triggered.
	         */
	
	    }, {
	        key: "On",
	        value: function On(eventName) {
	            var evts = [];
	            var events = this._events[eventName];
	
	            for (var _len3 = arguments.length, fn = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	                fn[_key3 - 1] = arguments[_key3];
	            }
	
	            fn.forEach(function (f) {
	                return evts.push;
	            });
	            this._events[eventName] = events ? events.concat(evts) : evts;
	        }
	        /**
	         * Removes provied listener from the given event.
	         * @param  {string} eventName - Unique identifier for an event.
	         * @param  {Function[]} ...fn - functions to remove.
	         */
	
	    }, {
	        key: "Dispatch",
	        value: function Dispatch(eventName) {
	            var events = this._events[eventName];
	            if (events) {
	                for (var _len4 = arguments.length, fn = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	                    fn[_key4 - 1] = arguments[_key4];
	                }
	
	                if (fn) {
	                    fn.forEach(function (f, i) {
	                        if (events.indexOf(f) > -1) {
	                            events.splice(i, 1);
	                        }
	                    });
	                    this._events[eventName] = events;
	                } else {
	                    delete this._events[eventName];
	                }
	            }
	        }
	        /**
	         * Removes all listeners.
	         */
	
	    }, {
	        key: "Clear",
	        value: function Clear() {
	            this.events = {};
	        }
	    }]);
	
	    return EventManager;
	}();
	
	exports.EventManager = EventManager;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=jem.js.map