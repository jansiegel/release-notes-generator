(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["RealeaseNotesGenerator"] = factory();
	else
		root["RealeaseNotesGenerator"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(7);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  typeof document.createElement -> undefined
 */
function isStandardBrowserEnv() {
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    typeof document.createElement === 'function'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(19);

var _axios2 = _interopRequireDefault(_axios);

var _debug = __webpack_require__(2);

var _debug2 = _interopRequireDefault(_debug);

var _jsBase = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2016 Yahoo Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under {@link https://spdx.org/licenses/BSD-3-Clause-Clear.html BSD-3-Clause-Clear}.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var log = (0, _debug2.default)('github:request');

/**
 * The error structure returned when a network call fails
 */

var ResponseError = function (_Error) {
   _inherits(ResponseError, _Error);

   /**
    * Construct a new ResponseError
    * @param {string} message - an message to return instead of the the default error message
    * @param {string} path - the requested path
    * @param {Object} response - the object returned by Axios
    */
   function ResponseError(message, path, response) {
      _classCallCheck(this, ResponseError);

      var _this = _possibleConstructorReturn(this, (ResponseError.__proto__ || Object.getPrototypeOf(ResponseError)).call(this, message));

      _this.path = path;
      _this.request = response.config;
      _this.response = (response || {}).response || response;
      _this.status = response.status;
      return _this;
   }

   return ResponseError;
}(Error);

/**
 * Requestable wraps the logic for making http requests to the API
 */


var Requestable = function () {
   /**
    * Either a username and password or an oauth token for Github
    * @typedef {Object} Requestable.auth
    * @prop {string} [username] - the Github username
    * @prop {string} [password] - the user's password
    * @prop {token} [token] - an OAuth token
    */
   /**
    * Initialize the http internals.
    * @param {Requestable.auth} [auth] - the credentials to authenticate to Github. If auth is
    *                                  not provided request will be made unauthenticated
    * @param {string} [apiBase=https://api.github.com] - the base Github API URL
    * @param {string} [AcceptHeader=v3] - the accept header for the requests
    */
   function Requestable(auth, apiBase, AcceptHeader) {
      _classCallCheck(this, Requestable);

      this.__apiBase = apiBase || 'https://api.github.com';
      this.__auth = {
         token: auth.token,
         username: auth.username,
         password: auth.password
      };
      this.__AcceptHeader = AcceptHeader || 'v3';

      if (auth.token) {
         this.__authorizationHeader = 'token ' + auth.token;
      } else if (auth.username && auth.password) {
         this.__authorizationHeader = 'Basic ' + _jsBase.Base64.encode(auth.username + ':' + auth.password);
      }
   }

   /**
    * Compute the URL to use to make a request.
    * @private
    * @param {string} path - either a URL relative to the API base or an absolute URL
    * @return {string} - the URL to use
    */


   _createClass(Requestable, [{
      key: '__getURL',
      value: function __getURL(path) {
         var url = path;

         if (path.indexOf('//') === -1) {
            url = this.__apiBase + path;
         }

         var newCacheBuster = 'timestamp=' + new Date().getTime();
         return url.replace(/(timestamp=\d+)/, newCacheBuster);
      }

      /**
       * Compute the headers required for an API request.
       * @private
       * @param {boolean} raw - if the request should be treated as JSON or as a raw request
       * @param {string} AcceptHeader - the accept header for the request
       * @return {Object} - the headers to use in the request
       */

   }, {
      key: '__getRequestHeaders',
      value: function __getRequestHeaders(raw, AcceptHeader) {
         var headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': 'application/vnd.github.' + (AcceptHeader || this.__AcceptHeader)
         };

         if (raw) {
            headers.Accept += '.raw';
         }
         headers.Accept += '+json';

         if (this.__authorizationHeader) {
            headers.Authorization = this.__authorizationHeader;
         }

         return headers;
      }

      /**
       * Sets the default options for API requests
       * @protected
       * @param {Object} [requestOptions={}] - the current options for the request
       * @return {Object} - the options to pass to the request
       */

   }, {
      key: '_getOptionsWithDefaults',
      value: function _getOptionsWithDefaults() {
         var requestOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

         if (!(requestOptions.visibility || requestOptions.affiliation)) {
            requestOptions.type = requestOptions.type || 'all';
         }
         requestOptions.sort = requestOptions.sort || 'updated';
         requestOptions.per_page = requestOptions.per_page || '100'; // eslint-disable-line

         return requestOptions;
      }

      /**
       * if a `Date` is passed to this function it will be converted to an ISO string
       * @param {*} date - the object to attempt to cooerce into an ISO date string
       * @return {string} - the ISO representation of `date` or whatever was passed in if it was not a date
       */

   }, {
      key: '_dateToISO',
      value: function _dateToISO(date) {
         if (date && date instanceof Date) {
            date = date.toISOString();
         }

         return date;
      }

      /**
       * A function that receives the result of the API request.
       * @callback Requestable.callback
       * @param {Requestable.Error} error - the error returned by the API or `null`
       * @param {(Object|true)} result - the data returned by the API or `true` if the API returns `204 No Content`
       * @param {Object} request - the raw {@linkcode https://github.com/mzabriskie/axios#response-schema Response}
       */
      /**
       * Make a request.
       * @param {string} method - the method for the request (GET, PUT, POST, DELETE)
       * @param {string} path - the path for the request
       * @param {*} [data] - the data to send to the server. For HTTP methods that don't have a body the data
       *                   will be sent as query parameters
       * @param {Requestable.callback} [cb] - the callback for the request
       * @param {boolean} [raw=false] - if the request should be sent as raw. If this is a falsy value then the
       *                              request will be made as JSON
       * @return {Promise} - the Promise for the http request
       */

   }, {
      key: '_request',
      value: function _request(method, path, data, cb, raw) {
         var url = this.__getURL(path);

         var AcceptHeader = (data || {}).AcceptHeader;
         if (AcceptHeader) {
            delete data.AcceptHeader;
         }
         var headers = this.__getRequestHeaders(raw, AcceptHeader);

         var queryParams = {};

         var shouldUseDataAsParams = data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' && methodHasNoBody(method);
         if (shouldUseDataAsParams) {
            queryParams = data;
            data = undefined;
         }

         var config = {
            url: url,
            method: method,
            headers: headers,
            params: queryParams,
            data: data,
            responseType: raw ? 'text' : 'json'
         };

         log(config.method + ' to ' + config.url);
         var requestPromise = (0, _axios2.default)(config).catch(callbackErrorOrThrow(cb, path));

         if (cb) {
            requestPromise.then(function (response) {
               if (response.data && Object.keys(response.data).length > 0) {
                  // When data has results
                  cb(null, response.data, response);
               } else if (config.method !== 'GET' && Object.keys(response.data).length < 1) {
                  // True when successful submit a request and receive a empty object
                  cb(null, response.status < 300, response);
               } else {
                  cb(null, response.data, response);
               }
            });
         }

         return requestPromise;
      }

      /**
       * Make a request to an endpoint the returns 204 when true and 404 when false
       * @param {string} path - the path to request
       * @param {Object} data - any query parameters for the request
       * @param {Requestable.callback} cb - the callback that will receive `true` or `false`
       * @param {method} [method=GET] - HTTP Method to use
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: '_request204or404',
      value: function _request204or404(path, data, cb) {
         var method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'GET';

         return this._request(method, path, data).then(function success(response) {
            if (cb) {
               cb(null, true, response);
            }
            return true;
         }, function failure(response) {
            if (response.response.status === 404) {
               if (cb) {
                  cb(null, false, response);
               }
               return false;
            }

            if (cb) {
               cb(response);
            }
            throw response;
         });
      }

      /**
       * Make a request and fetch all the available data. Github will paginate responses so for queries
       * that might span multiple pages this method is preferred to {@link Requestable#request}
       * @param {string} path - the path to request
       * @param {Object} options - the query parameters to include
       * @param {Requestable.callback} [cb] - the function to receive the data. The returned data will always be an array.
       * @param {Object[]} results - the partial results. This argument is intended for interal use only.
       * @return {Promise} - a promise which will resolve when all pages have been fetched
       * @deprecated This will be folded into {@link Requestable#_request} in the 2.0 release.
       */

   }, {
      key: '_requestAllPages',
      value: function _requestAllPages(path, options, cb, results) {
         var _this2 = this;

         results = results || [];

         return this._request('GET', path, options).then(function (response) {
            var _results;

            var thisGroup = void 0;
            if (response.data instanceof Array) {
               thisGroup = response.data;
            } else if (response.data.items instanceof Array) {
               thisGroup = response.data.items;
            } else {
               var message = 'cannot figure out how to append ' + response.data + ' to the result set';
               throw new ResponseError(message, path, response);
            }
            (_results = results).push.apply(_results, _toConsumableArray(thisGroup));

            var nextUrl = getNextPage(response.headers.link);
            if (nextUrl) {
               log('getting next page: ' + nextUrl);
               return _this2._requestAllPages(nextUrl, options, cb, results);
            }

            if (cb) {
               cb(null, results, response);
            }

            response.data = results;
            return response;
         }).catch(callbackErrorOrThrow(cb, path));
      }
   }]);

   return Requestable;
}();

module.exports = Requestable;

// ////////////////////////// //
//  Private helper functions  //
// ////////////////////////// //
var METHODS_WITH_NO_BODY = ['GET', 'HEAD', 'DELETE'];
function methodHasNoBody(method) {
   return METHODS_WITH_NO_BODY.indexOf(method) !== -1;
}

function getNextPage() {
   var linksHeader = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

   var links = linksHeader.split(/\s*,\s*/); // splits and strips the urls
   return links.reduce(function (nextUrl, link) {
      if (link.search(/rel="next"/) !== -1) {
         return (link.match(/<(.*)>/) || [])[1];
      }

      return nextUrl;
   }, undefined);
}

function callbackErrorOrThrow(cb, path) {
   return function handler(object) {
      var error = void 0;
      if (object.hasOwnProperty('config')) {
         var _object$response = object.response,
             status = _object$response.status,
             statusText = _object$response.statusText,
             _object$config = object.config,
             method = _object$config.method,
             url = _object$config.url;

         var message = status + ' error making request ' + method + ' ' + url + ': "' + statusText + '"';
         error = new ResponseError(message, path, object);
         log(message + ' ' + JSON.stringify(object.data));
      } else {
         error = object;
      }
      if (cb) {
         log('going to error callback');
         cb(error);
      } else {
         log('throwing error');
         throw error;
      }
   };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVlc3RhYmxlLmpzIl0sIm5hbWVzIjpbImxvZyIsIlJlc3BvbnNlRXJyb3IiLCJtZXNzYWdlIiwicGF0aCIsInJlc3BvbnNlIiwicmVxdWVzdCIsImNvbmZpZyIsInN0YXR1cyIsIkVycm9yIiwiUmVxdWVzdGFibGUiLCJhdXRoIiwiYXBpQmFzZSIsIkFjY2VwdEhlYWRlciIsIl9fYXBpQmFzZSIsIl9fYXV0aCIsInRva2VuIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIl9fQWNjZXB0SGVhZGVyIiwiX19hdXRob3JpemF0aW9uSGVhZGVyIiwiZW5jb2RlIiwidXJsIiwiaW5kZXhPZiIsIm5ld0NhY2hlQnVzdGVyIiwiRGF0ZSIsImdldFRpbWUiLCJyZXBsYWNlIiwicmF3IiwiaGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJyZXF1ZXN0T3B0aW9ucyIsInZpc2liaWxpdHkiLCJhZmZpbGlhdGlvbiIsInR5cGUiLCJzb3J0IiwicGVyX3BhZ2UiLCJkYXRlIiwidG9JU09TdHJpbmciLCJtZXRob2QiLCJkYXRhIiwiY2IiLCJfX2dldFVSTCIsIl9fZ2V0UmVxdWVzdEhlYWRlcnMiLCJxdWVyeVBhcmFtcyIsInNob3VsZFVzZURhdGFBc1BhcmFtcyIsIm1ldGhvZEhhc05vQm9keSIsInVuZGVmaW5lZCIsInBhcmFtcyIsInJlc3BvbnNlVHlwZSIsInJlcXVlc3RQcm9taXNlIiwiY2F0Y2giLCJjYWxsYmFja0Vycm9yT3JUaHJvdyIsInRoZW4iLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiX3JlcXVlc3QiLCJzdWNjZXNzIiwiZmFpbHVyZSIsIm9wdGlvbnMiLCJyZXN1bHRzIiwidGhpc0dyb3VwIiwiQXJyYXkiLCJpdGVtcyIsInB1c2giLCJuZXh0VXJsIiwiZ2V0TmV4dFBhZ2UiLCJsaW5rIiwiX3JlcXVlc3RBbGxQYWdlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJNRVRIT0RTX1dJVEhfTk9fQk9EWSIsImxpbmtzSGVhZGVyIiwibGlua3MiLCJzcGxpdCIsInJlZHVjZSIsInNlYXJjaCIsIm1hdGNoIiwiaGFuZGxlciIsIm9iamVjdCIsImVycm9yIiwiaGFzT3duUHJvcGVydHkiLCJzdGF0dXNUZXh0IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBT0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7OytlQVRBOzs7Ozs7O0FBV0EsSUFBTUEsTUFBTSxxQkFBTSxnQkFBTixDQUFaOztBQUVBOzs7O0lBR01DLGE7OztBQUNIOzs7Ozs7QUFNQSwwQkFBWUMsT0FBWixFQUFxQkMsSUFBckIsRUFBMkJDLFFBQTNCLEVBQXFDO0FBQUE7O0FBQUEsZ0lBQzVCRixPQUQ0Qjs7QUFFbEMsWUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsWUFBS0UsT0FBTCxHQUFlRCxTQUFTRSxNQUF4QjtBQUNBLFlBQUtGLFFBQUwsR0FBZ0IsQ0FBQ0EsWUFBWSxFQUFiLEVBQWlCQSxRQUFqQixJQUE2QkEsUUFBN0M7QUFDQSxZQUFLRyxNQUFMLEdBQWNILFNBQVNHLE1BQXZCO0FBTGtDO0FBTXBDOzs7RUFid0JDLEs7O0FBZ0I1Qjs7Ozs7SUFHTUMsVztBQUNIOzs7Ozs7O0FBT0E7Ozs7Ozs7QUFPQSx3QkFBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBMkJDLFlBQTNCLEVBQXlDO0FBQUE7O0FBQ3RDLFdBQUtDLFNBQUwsR0FBaUJGLFdBQVcsd0JBQTVCO0FBQ0EsV0FBS0csTUFBTCxHQUFjO0FBQ1hDLGdCQUFPTCxLQUFLSyxLQUREO0FBRVhDLG1CQUFVTixLQUFLTSxRQUZKO0FBR1hDLG1CQUFVUCxLQUFLTztBQUhKLE9BQWQ7QUFLQSxXQUFLQyxjQUFMLEdBQXNCTixnQkFBZ0IsSUFBdEM7O0FBRUEsVUFBSUYsS0FBS0ssS0FBVCxFQUFnQjtBQUNiLGNBQUtJLHFCQUFMLEdBQTZCLFdBQVdULEtBQUtLLEtBQTdDO0FBQ0YsT0FGRCxNQUVPLElBQUlMLEtBQUtNLFFBQUwsSUFBaUJOLEtBQUtPLFFBQTFCLEVBQW9DO0FBQ3hDLGNBQUtFLHFC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SUQsT0FBT0UsY0FBUCxDQUFzQixRQUF0QixDQUFKLEVBQXFDO0FBQUEsZ0NBQzhCRixNQUQ5QixDQUMzQjVFLFFBRDJCO0FBQUEsYUFDaEJHLE1BRGdCLG9CQUNoQkEsTUFEZ0I7QUFBQSxhQUNSNEUsVUFEUSxvQkFDUkEsVUFEUTtBQUFBLDhCQUM4QkgsTUFEOUIsQ0FDSzFFLE1BREw7QUFBQSxhQUNjaUMsTUFEZCxrQkFDY0EsTUFEZDtBQUFBLGFBQ3NCbEIsR0FEdEIsa0JBQ3NCQSxHQUR0Qjs7QUFFbEMsYUFBSW5CLFVBQWNLLE1BQWQsOEJBQTZDZ0MsTUFBN0MsU0FBdURsQixHQUF2RCxXQUFnRThELFVBQWhFLE1BQUo7QUFDQUYsaUJBQVEsSUFBSWhGLGFBQUosQ0FBa0JDLE9BQWxCLEVBQTJCQyxJQUEzQixFQUFpQzZFLE1BQWpDLENBQVI7QUFDQWhGLGFBQU9FLE9BQVAsU0FBa0JrRixLQUFLQyxTQUFMLENBQWVMLE9BQU94QyxJQUF0QixDQUFsQjtBQUNGLE9BTEQsTUFLTztBQUNKeUMsaUJBQVFELE1BQVI7QUFDRjtBQUNELFVBQUl2QyxFQUFKLEVBQVE7QUFDTHpDLGFBQUkseUJBQUo7QUFDQXlDLFlBQUd3QyxLQUFIO0FBQ0YsT0FIRCxNQUdPO0FBQ0pqRixhQUFJLGdCQUFKO0FBQ0EsZUFBTWlGLEtBQU47QUFDRjtBQUNILElBakJEO0FBa0JGIiwiZmlsZSI6IlJlcXVlc3RhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZVxuICogQGNvcHlyaWdodCAgMjAxNiBZYWhvbyBJbmMuXG4gKiBAbGljZW5zZSAgICBMaWNlbnNlZCB1bmRlciB7QGxpbmsgaHR0cHM6Ly9zcGR4Lm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2UtQ2xlYXIuaHRtbCBCU0QtMy1DbGF1c2UtQ2xlYXJ9LlxuICogICAgICAgICAgICAgR2l0aHViLmpzIGlzIGZyZWVseSBkaXN0cmlidXRhYmxlLlxuICovXG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgZGVidWcgZnJvbSAnZGVidWcnO1xuaW1wb3J0IHtCYXNlNjR9IGZyb20gJ2pzLWJhc2U2NCc7XG5cbmNvbnN0IGxvZyA9IGRlYnVnKCdnaXRodWI6cmVxdWVzdCcpO1xuXG4vKipcbiAqIFRoZSBlcnJvciBzdHJ1Y3R1cmUgcmV0dXJuZWQgd2hlbiBhIG5ldHdvcmsgY2FsbCBmYWlsc1xuICovXG5jbGFzcyBSZXNwb25zZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgLyoqXG4gICAgKiBDb25zdHJ1Y3QgYSBuZXcgUmVzcG9uc2VFcnJvclxuICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgLSBhbiBtZXNzYWdlIHRvIHJldHVybiBpbnN0ZWFkIG9mIHRoZSB0aGUgZGVmYXVsdCBlcnJvciBtZXNzYWdlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIHRoZSByZXF1ZXN0ZWQgcGF0aFxuICAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlIC0gdGhlIG9iamVjdCByZXR1cm5lZCBieSBBeGlvc1xuICAgICovXG4gICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBwYXRoLCByZXNwb25zZSkge1xuICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgdGhpcy5yZXF1ZXN0ID0gcmVzcG9uc2UuY29uZmlnO1xuICAgICAgdGhpcy5yZXNwb25zZSA9IChyZXNwb25zZSB8fCB7fSkucmVzcG9uc2UgfHwgcmVzcG9uc2U7XG4gICAgICB0aGlzLnN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1cztcbiAgIH1cbn1cblxuLyoqXG4gKiBSZXF1ZXN0YWJsZSB3cmFwcyB0aGUgbG9naWMgZm9yIG1ha2luZyBodHRwIHJlcXVlc3RzIHRvIHRoZSBBUElcbiAqL1xuY2xhc3MgUmVxdWVzdGFibGUge1xuICAgLyoqXG4gICAgKiBFaXRoZXIgYSB1c2VybmFtZSBhbmQgcGFzc3dvcmQgb3IgYW4gb2F1dGggdG9rZW4gZm9yIEdpdGh1YlxuICAgICogQHR5cGVkZWYge09iamVjdH0gUmVxdWVzdGFibGUuYXV0aFxuICAgICogQHByb3Age3N0cmluZ30gW3VzZXJuYW1lXSAtIHRoZSBHaXRodWIgdXNlcm5hbWVcbiAgICAqIEBwcm9wIHtzdHJpbmd9IFtwYXNzd29yZF0gLSB0aGUgdXNlcidzIHBhc3N3b3JkXG4gICAgKiBAcHJvcCB7dG9rZW59IFt0b2tlbl0gLSBhbiBPQXV0aCB0b2tlblxuICAgICovXG4gICAvKipcbiAgICAqIEluaXRpYWxpemUgdGhlIGh0dHAgaW50ZXJuYWxzLlxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5hdXRofSBbYXV0aF0gLSB0aGUgY3JlZGVudGlhbHMgdG8gYXV0aGVudGljYXRlIHRvIEdpdGh1Yi4gSWYgYXV0aCBpc1xuICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90IHByb3ZpZGVkIHJlcXVlc3Qgd2lsbCBiZSBtYWRlIHVuYXV0aGVudGljYXRlZFxuICAgICogQHBhcmFtIHtzdHJpbmd9IFthcGlCYXNlPWh0dHBzOi8vYXBpLmdpdGh1Yi5jb21dIC0gdGhlIGJhc2UgR2l0aHViIEFQSSBVUkxcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbQWNjZXB0SGVhZGVyPXYzXSAtIHRoZSBhY2NlcHQgaGVhZGVyIGZvciB0aGUgcmVxdWVzdHNcbiAgICAqL1xuICAgY29uc3RydWN0b3IoYXV0aCwgYXBpQmFzZSwgQWNjZXB0SGVhZGVyKSB7XG4gICAgICB0aGlzLl9fYXBpQmFzZSA9IGFwaUJhc2UgfHwgJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20nO1xuICAgICAgdGhpcy5fX2F1dGggPSB7XG4gICAgICAgICB0b2tlbjogYXV0aC50b2tlbixcbiAgICAgICAgIHVzZXJuYW1lOiBhdXRoLnVzZXJuYW1lLFxuICAgICAgICAgcGFzc3dvcmQ6IGF1dGgucGFzc3dvcmQsXG4gICAgICB9O1xuICAgICAgdGhpcy5fX0FjY2VwdEhlYWRlciA9IEFjY2VwdEhlYWRlciB8fCAndjMnO1xuXG4gICAgICBpZiAoYXV0aC50b2tlbikge1xuICAgICAgICAgdGhpcy5fX2F1dGhvcml6YXRpb25IZWFkZXIgPSAndG9rZW4gJyArIGF1dGgudG9rZW47XG4gICAgICB9IGVsc2UgaWYgKGF1dGgudXNlcm5hbWUgJiYgYXV0aC5wYXNzd29yZCkge1xuICAgICAgICAgdGhpcy5fX2F1dGhvcml6YXRpb25IZWFkZXIgPSAnQmFzaWMgJyArIEJhc2U2NC5lbmNvZGUoYXV0aC51c2VybmFtZSArICc6JyArIGF1dGgucGFzc3dvcmQpO1xuICAgICAgfVxuICAgfVxuXG4gICAvKipcbiAgICAqIENvbXB1dGUgdGhlIFVSTCB0byB1c2UgdG8gbWFrZSBhIHJlcXVlc3QuXG4gICAgKiBAcHJpdmF0ZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBlaXRoZXIgYSBVUkwgcmVsYXRpdmUgdG8gdGhlIEFQSSBiYXNlIG9yIGFuIGFic29sdXRlIFVSTFxuICAgICogQHJldHVybiB7c3RyaW5nfSAtIHRoZSBVUkwgdG8gdXNlXG4gICAgKi9cbiAgIF9fZ2V0VVJMKHBhdGgpIHtcbiAgICAgIGxldCB1cmwgPSBwYXRoO1xuXG4gICAgICBpZiAocGF0aC5pbmRleE9mKCcvLycpID09PSAtMSkge1xuICAgICAgICAgdXJsID0gdGhpcy5fX2FwaUJhc2UgKyBwYXRoO1xuICAgICAgfVxuXG4gICAgICBsZXQgbmV3Q2FjaGVCdXN0ZXIgPSAndGltZXN0YW1wPScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHJldHVybiB1cmwucmVwbGFjZSgvKHRpbWVzdGFtcD1cXGQrKS8sIG5ld0NhY2hlQnVzdGVyKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDb21wdXRlIHRoZSBoZWFkZXJzIHJlcXVpcmVkIGZvciBhbiBBUEkgcmVxdWVzdC5cbiAgICAqIEBwcml2YXRlXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJhdyAtIGlmIHRoZSByZXF1ZXN0IHNob3VsZCBiZSB0cmVhdGVkIGFzIEpTT04gb3IgYXMgYSByYXcgcmVxdWVzdFxuICAgICogQHBhcmFtIHtzdHJpbmd9IEFjY2VwdEhlYWRlciAtIHRoZSBhY2NlcHQgaGVhZGVyIGZvciB0aGUgcmVxdWVzdFxuICAgICogQHJldHVybiB7T2JqZWN0fSAtIHRoZSBoZWFkZXJzIHRvIHVzZSBpbiB0aGUgcmVxdWVzdFxuICAgICovXG4gICBfX2dldFJlcXVlc3RIZWFkZXJzKHJhdywgQWNjZXB0SGVhZGVyKSB7XG4gICAgICBsZXQgaGVhZGVycyA9IHtcbiAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04JyxcbiAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vdm5kLmdpdGh1Yi4nICsgKEFjY2VwdEhlYWRlciB8fCB0aGlzLl9fQWNjZXB0SGVhZGVyKSxcbiAgICAgIH07XG5cbiAgICAgIGlmIChyYXcpIHtcbiAgICAgICAgIGhlYWRlcnMuQWNjZXB0ICs9ICcucmF3JztcbiAgICAgIH1cbiAgICAgIGhlYWRlcnMuQWNjZXB0ICs9ICcranNvbic7XG5cbiAgICAgIGlmICh0aGlzLl9fYXV0aG9yaXphdGlvbkhlYWRlcikge1xuICAgICAgICAgaGVhZGVycy5BdXRob3JpemF0aW9uID0gdGhpcy5fX2F1dGhvcml6YXRpb25IZWFkZXI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgfVxuXG4gICAvKipcbiAgICAqIFNldHMgdGhlIGRlZmF1bHQgb3B0aW9ucyBmb3IgQVBJIHJlcXVlc3RzXG4gICAgKiBAcHJvdGVjdGVkXG4gICAgKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RPcHRpb25zPXt9XSAtIHRoZSBjdXJyZW50IG9wdGlvbnMgZm9yIHRoZSByZXF1ZXN0XG4gICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gdGhlIG9wdGlvbnMgdG8gcGFzcyB0byB0aGUgcmVxdWVzdFxuICAgICovXG4gICBfZ2V0T3B0aW9uc1dpdGhEZWZhdWx0cyhyZXF1ZXN0T3B0aW9ucyA9IHt9KSB7XG4gICAgICBpZiAoIShyZXF1ZXN0T3B0aW9ucy52aXNpYmlsaXR5IHx8IHJlcXVlc3RPcHRpb25zLmFmZmlsaWF0aW9uKSkge1xuICAgICAgICAgcmVxdWVzdE9wdGlvbnMudHlwZSA9IHJlcXVlc3RPcHRpb25zLnR5cGUgfHwgJ2FsbCc7XG4gICAgICB9XG4gICAgICByZXF1ZXN0T3B0aW9ucy5zb3J0ID0gcmVxdWVzdE9wdGlvbnMuc29ydCB8fCAndXBkYXRlZCc7XG4gICAgICByZXF1ZXN0T3B0aW9ucy5wZXJfcGFnZSA9IHJlcXVlc3RPcHRpb25zLnBlcl9wYWdlIHx8ICcxMDAnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICAgIHJldHVybiByZXF1ZXN0T3B0aW9ucztcbiAgIH1cblxuICAgLyoqXG4gICAgKiBpZiBhIGBEYXRlYCBpcyBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbiBpdCB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBJU08gc3RyaW5nXG4gICAgKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgb2JqZWN0IHRvIGF0dGVtcHQgdG8gY29vZXJjZSBpbnRvIGFuIElTTyBkYXRlIHN0cmluZ1xuICAgICogQHJldHVybiB7c3RyaW5nfSAtIHRoZSBJU08gcmVwcmVzZW50YXRpb24gb2YgYGRhdGVgIG9yIHdoYXRldmVyIHdhcyBwYXNzZWQgaW4gaWYgaXQgd2FzIG5vdCBhIGRhdGVcbiAgICAqL1xuICAgX2RhdGVUb0lTTyhkYXRlKSB7XG4gICAgICBpZiAoZGF0ZSAmJiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgICAgICBkYXRlID0gZGF0ZS50b0lTT1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0ZTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBBIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgdGhlIHJlc3VsdCBvZiB0aGUgQVBJIHJlcXVlc3QuXG4gICAgKiBAY2FsbGJhY2sgUmVxdWVzdGFibGUuY2FsbGJhY2tcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuRXJyb3J9IGVycm9yIC0gdGhlIGVycm9yIHJldHVybmVkIGJ5IHRoZSBBUEkgb3IgYG51bGxgXG4gICAgKiBAcGFyYW0geyhPYmplY3R8dHJ1ZSl9IHJlc3VsdCAtIHRoZSBkYXRhIHJldHVybmVkIGJ5IHRoZSBBUEkgb3IgYHRydWVgIGlmIHRoZSBBUEkgcmV0dXJucyBgMjA0IE5vIENvbnRlbnRgXG4gICAgKiBAcGFyYW0ge09iamVjdH0gcmVxdWVzdCAtIHRoZSByYXcge0BsaW5rY29kZSBodHRwczovL2dpdGh1Yi5jb20vbXphYnJpc2tpZS9heGlvcyNyZXNwb25zZS1zY2hlbWEgUmVzcG9uc2V9XG4gICAgKi9cbiAgIC8qKlxuICAgICogTWFrZSBhIHJlcXVlc3QuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIC0gdGhlIG1ldGhvZCBmb3IgdGhlIHJlcXVlc3QgKEdFVCwgUFVULCBQT1NULCBERUxFVEUpXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIHRoZSBwYXRoIGZvciB0aGUgcmVxdWVzdFxuICAgICogQHBhcmFtIHsqfSBbZGF0YV0gLSB0aGUgZGF0YSB0byBzZW5kIHRvIHRoZSBzZXJ2ZXIuIEZvciBIVFRQIG1ldGhvZHMgdGhhdCBkb24ndCBoYXZlIGEgYm9keSB0aGUgZGF0YVxuICAgICogICAgICAgICAgICAgICAgICAgd2lsbCBiZSBzZW50IGFzIHF1ZXJ5IHBhcmFtZXRlcnNcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB0aGUgY2FsbGJhY2sgZm9yIHRoZSByZXF1ZXN0XG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyYXc9ZmFsc2VdIC0gaWYgdGhlIHJlcXVlc3Qgc2hvdWxkIGJlIHNlbnQgYXMgcmF3LiBJZiB0aGlzIGlzIGEgZmFsc3kgdmFsdWUgdGhlbiB0aGVcbiAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdCB3aWxsIGJlIG1hZGUgYXMgSlNPTlxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgUHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBfcmVxdWVzdChtZXRob2QsIHBhdGgsIGRhdGEsIGNiLCByYXcpIHtcbiAgICAgIGNvbnN0IHVybCA9IHRoaXMuX19nZXRVUkwocGF0aCk7XG5cbiAgICAgIGNvbnN0IEFjY2VwdEhlYWRlciA9IChkYXRhIHx8IHt9KS5BY2NlcHRIZWFkZXI7XG4gICAgICBpZiAoQWNjZXB0SGVhZGVyKSB7XG4gICAgICAgICBkZWxldGUgZGF0YS5BY2NlcHRIZWFkZXI7XG4gICAgICB9XG4gICAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5fX2dldFJlcXVlc3RIZWFkZXJzKHJhdywgQWNjZXB0SGVhZGVyKTtcblxuICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0ge307XG5cbiAgICAgIGNvbnN0IHNob3VsZFVzZURhdGFBc1BhcmFtcyA9IGRhdGEgJiYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JykgJiYgbWV0aG9kSGFzTm9Cb2R5KG1ldGhvZCk7XG4gICAgICBpZiAoc2hvdWxkVXNlRGF0YUFzUGFyYW1zKSB7XG4gICAgICAgICBxdWVyeVBhcmFtcyA9IGRhdGE7XG4gICAgICAgICBkYXRhID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbXMsXG4gICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgcmVzcG9uc2VUeXBlOiByYXcgPyAndGV4dCcgOiAnanNvbicsXG4gICAgICB9O1xuXG4gICAgICBsb2coYCR7Y29uZmlnLm1ldGhvZH0gdG8gJHtjb25maWcudXJsfWApO1xuICAgICAgY29uc3QgcmVxdWVzdFByb21pc2UgPSBheGlvcyhjb25maWcpLmNhdGNoKGNhbGxiYWNrRXJyb3JPclRocm93KGNiLCBwYXRoKSk7XG5cbiAgICAgIGlmIChjYikge1xuICAgICAgICAgcmVxdWVzdFByb21pc2UudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhICYmIE9iamVjdC5rZXlzKHJlc3BvbnNlLmRhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgIC8vIFdoZW4gZGF0YSBoYXMgcmVzdWx0c1xuICAgICAgICAgICAgICAgY2IobnVsbCwgcmVzcG9uc2UuZGF0YSwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb25maWcubWV0aG9kICE9PSAnR0VUJyAmJiBPYmplY3Qua2V5cyhyZXNwb25zZS5kYXRhKS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAvLyBUcnVlIHdoZW4gc3VjY2Vzc2Z1bCBzdWJtaXQgYSByZXF1ZXN0IGFuZCByZWNlaXZlIGEgZW1wdHkgb2JqZWN0XG4gICAgICAgICAgICAgICBjYihudWxsLCAocmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgIGNiKG51bGwsIHJlc3BvbnNlLmRhdGEsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVxdWVzdFByb21pc2U7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTWFrZSBhIHJlcXVlc3QgdG8gYW4gZW5kcG9pbnQgdGhlIHJldHVybnMgMjA0IHdoZW4gdHJ1ZSBhbmQgNDA0IHdoZW4gZmFsc2VcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gdGhlIHBhdGggdG8gcmVxdWVzdFxuICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBhbnkgcXVlcnkgcGFyYW1ldGVycyBmb3IgdGhlIHJlcXVlc3RcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCByZWNlaXZlIGB0cnVlYCBvciBgZmFsc2VgXG4gICAgKiBAcGFyYW0ge21ldGhvZH0gW21ldGhvZD1HRVRdIC0gSFRUUCBNZXRob2QgdG8gdXNlXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIF9yZXF1ZXN0MjA0b3I0MDQocGF0aCwgZGF0YSwgY2IsIG1ldGhvZCA9ICdHRVQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdChtZXRob2QsIHBhdGgsIGRhdGEpXG4gICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgICAgIGNiKG51bGwsIHRydWUsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgfSwgZnVuY3Rpb24gZmFpbHVyZShyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgICAgICAgIGNiKG51bGwsIGZhbHNlLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgICAgY2IocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2U7XG4gICAgICAgICB9KTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBNYWtlIGEgcmVxdWVzdCBhbmQgZmV0Y2ggYWxsIHRoZSBhdmFpbGFibGUgZGF0YS4gR2l0aHViIHdpbGwgcGFnaW5hdGUgcmVzcG9uc2VzIHNvIGZvciBxdWVyaWVzXG4gICAgKiB0aGF0IG1pZ2h0IHNwYW4gbXVsdGlwbGUgcGFnZXMgdGhpcyBtZXRob2QgaXMgcHJlZmVycmVkIHRvIHtAbGluayBSZXF1ZXN0YWJsZSNyZXF1ZXN0fVxuICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSB0aGUgcGF0aCB0byByZXF1ZXN0XG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHRoZSBxdWVyeSBwYXJhbWV0ZXJzIHRvIGluY2x1ZGVcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB0aGUgZnVuY3Rpb24gdG8gcmVjZWl2ZSB0aGUgZGF0YS4gVGhlIHJldHVybmVkIGRhdGEgd2lsbCBhbHdheXMgYmUgYW4gYXJyYXkuXG4gICAgKiBAcGFyYW0ge09iamVjdFtdfSByZXN1bHRzIC0gdGhlIHBhcnRpYWwgcmVzdWx0cy4gVGhpcyBhcmd1bWVudCBpcyBpbnRlbmRlZCBmb3IgaW50ZXJhbCB1c2Ugb25seS5cbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gYSBwcm9taXNlIHdoaWNoIHdpbGwgcmVzb2x2ZSB3aGVuIGFsbCBwYWdlcyBoYXZlIGJlZW4gZmV0Y2hlZFxuICAgICogQGRlcHJlY2F0ZWQgVGhpcyB3aWxsIGJlIGZvbGRlZCBpbnRvIHtAbGluayBSZXF1ZXN0YWJsZSNfcmVxdWVzdH0gaW4gdGhlIDIuMCByZWxlYXNlLlxuICAgICovXG4gICBfcmVxdWVzdEFsbFBhZ2VzKHBhdGgsIG9wdGlvbnMsIGNiLCByZXN1bHRzKSB7XG4gICAgICByZXN1bHRzID0gcmVzdWx0cyB8fCBbXTtcblxuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIHBhdGgsIG9wdGlvbnMpXG4gICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGxldCB0aGlzR3JvdXA7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICB0aGlzR3JvdXAgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5kYXRhLml0ZW1zIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgIHRoaXNHcm91cCA9IHJlc3BvbnNlLmRhdGEuaXRlbXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBgY2Fubm90IGZpZ3VyZSBvdXQgaG93IHRvIGFwcGVuZCAke3Jlc3BvbnNlLmRhdGF9IHRvIHRoZSByZXN1bHQgc2V0YDtcbiAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXNwb25zZUVycm9yKG1lc3NhZ2UsIHBhdGgsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCguLi50aGlzR3JvdXApO1xuXG4gICAgICAgICAgICBjb25zdCBuZXh0VXJsID0gZ2V0TmV4dFBhZ2UocmVzcG9uc2UuaGVhZGVycy5saW5rKTtcbiAgICAgICAgICAgIGlmIChuZXh0VXJsKSB7XG4gICAgICAgICAgICAgICBsb2coYGdldHRpbmcgbmV4dCBwYWdlOiAke25leHRVcmx9YCk7XG4gICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdEFsbFBhZ2VzKG5leHRVcmwsIG9wdGlvbnMsIGNiLCByZXN1bHRzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICAgICBjYihudWxsLCByZXN1bHRzLCByZXNwb25zZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEgPSByZXN1bHRzO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgfSkuY2F0Y2goY2FsbGJhY2tFcnJvck9yVGhyb3coY2IsIHBhdGgpKTtcbiAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZXF1ZXN0YWJsZTtcblxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gLy9cbi8vICBQcml2YXRlIGhlbHBlciBmdW5jdGlvbnMgIC8vXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAvL1xuY29uc3QgTUVUSE9EU19XSVRIX05PX0JPRFkgPSBbJ0dFVCcsICdIRUFEJywgJ0RFTEVURSddO1xuZnVuY3Rpb24gbWV0aG9kSGFzTm9Cb2R5KG1ldGhvZCkge1xuICAgcmV0dXJuIE1FVEhPRFNfV0lUSF9OT19CT0RZLmluZGV4T2YobWV0aG9kKSAhPT0gLTE7XG59XG5cbmZ1bmN0aW9uIGdldE5leHRQYWdlKGxpbmtzSGVhZGVyID0gJycpIHtcbiAgIGNvbnN0IGxpbmtzID0gbGlua3NIZWFkZXIuc3BsaXQoL1xccyosXFxzKi8pOyAvLyBzcGxpdHMgYW5kIHN0cmlwcyB0aGUgdXJsc1xuICAgcmV0dXJuIGxpbmtzLnJlZHVjZShmdW5jdGlvbihuZXh0VXJsLCBsaW5rKSB7XG4gICAgICBpZiAobGluay5zZWFyY2goL3JlbD1cIm5leHRcIi8pICE9PSAtMSkge1xuICAgICAgICAgcmV0dXJuIChsaW5rLm1hdGNoKC88KC4qKT4vKSB8fCBbXSlbMV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0VXJsO1xuICAgfSwgdW5kZWZpbmVkKTtcbn1cblxuZnVuY3Rpb24gY2FsbGJhY2tFcnJvck9yVGhyb3coY2IsIHBhdGgpIHtcbiAgIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKG9iamVjdCkge1xuICAgICAgbGV0IGVycm9yO1xuICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eSgnY29uZmlnJykpIHtcbiAgICAgICAgIGNvbnN0IHtyZXNwb25zZToge3N0YXR1cywgc3RhdHVzVGV4dH0sIGNvbmZpZzoge21ldGhvZCwgdXJsfX0gPSBvYmplY3Q7XG4gICAgICAgICBsZXQgbWVzc2FnZSA9IChgJHtzdGF0dXN9IGVycm9yIG1ha2luZyByZXF1ZXN0ICR7bWV0aG9kfSAke3VybH06IFwiJHtzdGF0dXNUZXh0fVwiYCk7XG4gICAgICAgICBlcnJvciA9IG5ldyBSZXNwb25zZUVycm9yKG1lc3NhZ2UsIHBhdGgsIG9iamVjdCk7XG4gICAgICAgICBsb2coYCR7bWVzc2FnZX0gJHtKU09OLnN0cmluZ2lmeShvYmplY3QuZGF0YSl9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgZXJyb3IgPSBvYmplY3Q7XG4gICAgICB9XG4gICAgICBpZiAoY2IpIHtcbiAgICAgICAgIGxvZygnZ29pbmcgdG8gZXJyb3IgY2FsbGJhY2snKTtcbiAgICAgICAgIGNiKGVycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICBsb2coJ3Rocm93aW5nIGVycm9yJyk7XG4gICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgIH07XG59XG4iXX0=
//# sourceMappingURL=Requestable.js.map


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(37);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(22);

var PROTECTION_PREFIX = /^\)\]\}',?\n/;
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(8);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(8);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      data = data.replace(PROTECTION_PREFIX, '');
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DOMOperations = function () {
  function DOMOperations() {
    _classCallCheck(this, DOMOperations);
  }

  _createClass(DOMOperations, [{
    key: 'getFormData',
    value: function getFormData(inputId) {
      return document.getElementById(inputId).value;
    }

    /**
     * TODO: docs
     * @param inputIndex
     */

  }, {
    key: 'flipConfigInputs',
    value: function flipConfigInputs(inputIndex) {
      var lsItems = ['rnom_mainRepoName', 'rnom_complementaryRepoName', 'rnom_ghToken'];
      var formElementIds = ['main-repo-form', 'complementary-repo-form', 'auth-token-form'];
      var formElem = null;
      var startIndex = 0;
      var endIndex = lsItems.length;

      if (inputIndex !== void 0) {
        startIndex = inputIndex;
        endIndex = inputIndex + 1;
      }

      for (var i = startIndex; i < endIndex; i++) {
        formElem = document.getElementById(formElementIds[i]);
        if (localStorage[lsItems[i]]) {
          formElem.querySelector('.config-enabled').style.display = 'none';
          formElem.querySelector('.config-disabled').style.display = 'block';
          formElem.querySelector('.config-disabled .mdl-chip__text').innerText = localStorage[lsItems[i]];
        } else {
          formElem.querySelector('.config-enabled').style.display = 'block';
          formElem.querySelector('.config-disabled').style.display = 'none';
        }
      }
    }

    /**
     * TODO: docs
     * @param milestonesArray
     */

  }, {
    key: 'displayMilestones',
    value: function displayMilestones(milestonesArray) {
      if (!milestonesArray) {
        console.warn('No milestones found.');
        return;
      }

      var pseudoSelectElement = document.querySelector('#milestone-selector');
      var pseudoSelectElementUl = pseudoSelectElement.querySelector('ul');
      var pseudoSelectElementInput = pseudoSelectElement.querySelector('input');

      // Clear the suggestion list
      while (pseudoSelectElementUl.firstChild) {
        pseudoSelectElementUl.removeChild(pseudoSelectElementUl.firstChild);
      }

      for (var i = 0; i < milestonesArray.length; i++) {
        var li = document.createElement('LI');
        li.innerText = milestonesArray[i].title;
        li.setAttribute('data-val', milestonesArray[i].number);
        li.className = 'mdl-menu__item';

        pseudoSelectElementUl.appendChild(li);
      }

      // <input class="mdl-textfield__input" id="milestone" name="milestone" value="..." type="text" readonly tabIndex="-1" data-val="Placeholder"/>
      //    pseudoSelectElement.removeChild(pseudoSelectElementInput);
      //    let newInput = document.createElement('INPUT');
      //    newInput.className = 'mdl-textfield__input';
      //    newInput.setAttribute('type', 'text');
      //    newInput.setAttribute('readonly', 'true');
      //    newInput.setAttribute('tabIndex', '-1');
      //    newInput.setAttribute('data-val', encodeURI(milestonesArray[0].title));
      //    newInput.id = 'milestone';
      //    newInput.value = milestonesArray[0].title;
      //
      //    pseudoSelectElement.insertBefore(newInput, pseudoSelectElement.firstChild);

      if (getmdlSelect) {
        getmdlSelect.init('#milestone-selector');
      }
    }

    /**
     * TODO: docs
     * @param issuesArray
     */

  }, {
    key: 'displayIssues',
    value: function displayIssues(issuesArray) {
      var table = document.querySelector('#issue-table');

      /*
      <tr><td class="mdl-data-table__cell--non-numeric">Select a milestone above.</td></tr>
       */

      // Clear the table
      while (table.firstChild) {
        table.removeChild(table.firstChild);
      }

      for (var i = 0; i < issuesArray.length; i++) {
        var TR = document.createElement('TR');
        var TD = document.createElement('TD');
        TD.className = 'mdl-data-table__cell--non-numeric';
        TD.innerText = issuesArray[i].title;
        TR.appendChild(TD);
        table.appendChild(TR);
      }
    }
  }]);

  return DOMOperations;
}();

exports.default = DOMOperations;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(23);
var buildURL = __webpack_require__(25);
var parseHeaders = __webpack_require__(26);
var isURLSameOrigin = __webpack_require__(27);
var createError = __webpack_require__(9);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(28);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(29);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        if (request.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(24);

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * $Id: base64.js,v 2.15 2014/04/05 12:58:57 dankogai Exp dankogai $
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */

(function(global) {
    'use strict';
    // existing version for noConflict()
    var _Base64 = global.Base64;
    var version = "2.3.2";
    // if node.js, we use Buffer
    var buffer;
    if (typeof module !== 'undefined' && module.exports) {
        try {
            buffer = __webpack_require__(13).Buffer;
        } catch (err) {}
    }
    // constants
    var b64chars
        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var b64tab = function(bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
        return t;
    }(b64chars);
    var fromCharCode = String.fromCharCode;
    // encoder stuff
    var cb_utob = function(c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c
                : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
                                + fromCharCode(0x80 | (cc & 0x3f)))
                : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
                   + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                   + fromCharCode(0x80 | ( cc         & 0x3f)));
        } else {
            var cc = 0x10000
                + (c.charCodeAt(0) - 0xD800) * 0x400
                + (c.charCodeAt(1) - 0xDC00);
            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
                    + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
                    + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                    + fromCharCode(0x80 | ( cc         & 0x3f)));
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    var utob = function(u) {
        return u.replace(re_utob, cb_utob);
    };
    var cb_encode = function(ccc) {
        var padlen = [0, 2, 1][ccc.length % 3],
        ord = ccc.charCodeAt(0) << 16
            | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
            | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
        chars = [
            b64chars.charAt( ord >>> 18),
            b64chars.charAt((ord >>> 12) & 63),
            padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
            padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
        ];
        return chars.join('');
    };
    var btoa = global.btoa ? function(b) {
        return global.btoa(b);
    } : function(b) {
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };
    var _encode = buffer ?
        buffer.from && buffer.from !== Uint8Array.from ? function (u) {
            return (u.constructor === buffer.constructor ? u : buffer.from(u))
                .toString('base64')
        }
        :  function (u) {
            return (u.constructor === buffer.constructor ? u : new  buffer(u))
                .toString('base64')
        }
        : function (u) { return btoa(utob(u)) }
    ;
    var encode = function(u, urisafe) {
        return !urisafe
            ? _encode(String(u))
            : _encode(String(u)).replace(/[+\/]/g, function(m0) {
                return m0 == '+' ? '-' : '_';
            }).replace(/=/g, '');
    };
    var encodeURI = function(u) { return encode(u, true) };
    // decoder stuff
    var re_btou = new RegExp([
        '[\xC0-\xDF][\x80-\xBF]',
        '[\xE0-\xEF][\x80-\xBF]{2}',
        '[\xF0-\xF7][\x80-\xBF]{3}'
    ].join('|'), 'g');
    var cb_btou = function(cccc) {
        switch(cccc.length) {
        case 4:
            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                |    ((0x3f & cccc.charCodeAt(1)) << 12)
                |    ((0x3f & cccc.charCodeAt(2)) <<  6)
                |     (0x3f & cccc.charCodeAt(3)),
            offset = cp - 0x10000;
            return (fromCharCode((offset  >>> 10) + 0xD800)
                    + fromCharCode((offset & 0x3FF) + 0xDC00));
        case 3:
            return fromCharCode(
                ((0x0f & cccc.charCodeAt(0)) << 12)
                    | ((0x3f & cccc.charCodeAt(1)) << 6)
                    |  (0x3f & cccc.charCodeAt(2))
            );
        default:
            return  fromCharCode(
                ((0x1f & cccc.charCodeAt(0)) << 6)
                    |  (0x3f & cccc.charCodeAt(1))
            );
        }
    };
    var btou = function(b) {
        return b.replace(re_btou, cb_btou);
    };
    var cb_decode = function(cccc) {
        var len = cccc.length,
        padlen = len % 4,
        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
            | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
            | (len > 2 ? b64tab[cccc.charAt(2)] <<  6 : 0)
            | (len > 3 ? b64tab[cccc.charAt(3)]       : 0),
        chars = [
            fromCharCode( n >>> 16),
            fromCharCode((n >>>  8) & 0xff),
            fromCharCode( n         & 0xff)
        ];
        chars.length -= [0, 0, 2, 1][padlen];
        return chars.join('');
    };
    var atob = global.atob ? function(a) {
        return global.atob(a);
    } : function(a){
        return a.replace(/[\s\S]{1,4}/g, cb_decode);
    };
    var _decode = buffer ?
        buffer.from && buffer.from !== Uint8Array.from ? function(a) {
            return (a.constructor === buffer.constructor
                    ? a : buffer.from(a, 'base64')).toString();
        }
        : function(a) {
            return (a.constructor === buffer.constructor
                    ? a : new buffer(a, 'base64')).toString();
        }
        : function(a) { return btou(atob(a)) };
    var decode = function(a){
        return _decode(
            String(a).replace(/[-_]/g, function(m0) { return m0 == '-' ? '+' : '/' })
                .replace(/[^A-Za-z0-9\+\/]/g, '')
        );
    };
    var noConflict = function() {
        var Base64 = global.Base64;
        global.Base64 = _Base64;
        return Base64;
    };
    // export Base64
    global.Base64 = {
        VERSION: version,
        atob: atob,
        btoa: btoa,
        fromBase64: decode,
        toBase64: encode,
        utob: utob,
        encode: encode,
        encodeURI: encodeURI,
        btou: btou,
        decode: decode,
        noConflict: noConflict
    };
    // if ES5 is available, make Base64.extendString() available
    if (typeof Object.defineProperty === 'function') {
        var noEnum = function(v){
            return {value:v,enumerable:false,writable:true,configurable:true};
        };
        global.Base64.extendString = function () {
            Object.defineProperty(
                String.prototype, 'fromBase64', noEnum(function () {
                    return decode(this)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64', noEnum(function (urisafe) {
                    return encode(this, urisafe)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64URI', noEnum(function () {
                    return encode(this, true)
                }));
        };
    }
    //
    // export Base64 to the namespace
    //
    if (global['Meteor']) { // Meteor.js
        Base64 = global.Base64;
    }
    // module.exports and AMD are mutually exclusive.
    // module.exports has precedence.
    if (typeof module !== 'undefined' && module.exports) {
        module.exports.Base64 = global.Base64;
    }
    else if (true) {		
        // AMD. Register as an anonymous module.	
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){ return global.Base64 }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    // that's it!
})(   typeof self   !== 'undefined' ? self
    : typeof window !== 'undefined' ? window
    : typeof global !== 'undefined' ? global
    : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(39)
var ieee754 = __webpack_require__(40)
var isArray = __webpack_require__(41)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ghController = __webpack_require__(15);

var _ghController2 = _interopRequireDefault(_ghController);

var _eventManager = __webpack_require__(16);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _dom = __webpack_require__(6);

var _dom2 = _interopRequireDefault(_dom);

var _githubApi = __webpack_require__(17);

var _githubApi2 = _interopRequireDefault(_githubApi);

__webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReleaseNotesOMatic = function () {
  function ReleaseNotesOMatic() {
    _classCallCheck(this, ReleaseNotesOMatic);

    /**
     * Main repo name.
     * @type {String}
     */
    this.mainRepo = localStorage.rnom_mainRepoName || null;

    /**
     * Complementary repo name.
     * @type {String}
     */
    this.complementaryRepo = localStorage.rnom_complementaryRepoName || null;

    /**
     * Github token provided from the UI.
     * @type {String}
     */
    this.ghToken = localStorage.rnom_ghToken || null;

    /**
     * Github connector object.
     * @type {Object}
     */
    this.gh = null;

    /**
     * TODO: docs
     * @type {DOMOperations}
     */
    this.dom = new _dom2.default();

    /**
     * The EventManager instance.
     * @type {Object}
     */
    this.eventManager = new _eventManager2.default(this);

    // config
    this.eventManager.registerEvents();
    this.authGithub();

    /**
     * TODO: docs
     * @type {GithubController}
     */
    this.ghController = new _ghController2.default(this);
  }

  /**
   * Set the Github token.
   * @param {String} token
   */


  _createClass(ReleaseNotesOMatic, [{
    key: 'setGhToken',
    value: function setGhToken(token) {
      localStorage.setItem('rnom_ghToken', token);
      this.ghToken = token;
    }

    /**
     * Set the main repo name.
     * @param {String} name
     */

  }, {
    key: 'setMainRepo',
    value: function setMainRepo(name) {
      localStorage.setItem('rnom_mainRepoName', name);
      this.mainRepo = name;
    }

    /**
     * Set the complementary repo name.
     * @param {String} name
     */

  }, {
    key: 'setComplementaryRepo',
    value: function setComplementaryRepo(name) {
      localStorage.setItem('rnom_complementaryRepoName', name);
      this.complementaryRepo = name;
    }

    /**
     * Authenticate with Github.
     */

  }, {
    key: 'authGithub',
    value: function authGithub() {
      if (!this.ghToken) {
        console.warn('No auth token in local storage.');
      }

      this.gh = new _githubApi2.default({
        token: this.ghToken
      });
    }
  }]);

  return ReleaseNotesOMatic;
}();

exports.default = ReleaseNotesOMatic;

window.rnom = new ReleaseNotesOMatic();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GithubController = function () {
  function GithubController(rnom) {
    _classCallCheck(this, GithubController);

    this.rnom = rnom;
    this.gh = this.rnom.gh;
    this.dom = this.rnom.dom;
    this.issues = null;
  }

  _createClass(GithubController, [{
    key: 'getIssuesController',
    value: function getIssuesController(user, repo, force) {
      if (!this.issues || force) {
        this.issues = this.gh.getIssues(user, repo);
      }

      return this.issues;
    }
  }, {
    key: 'getMilestones',
    value: function getMilestones() {
      // [user, repo] = this.rnom.mainRepo.split('/');
      var user = this.rnom.mainRepo.split('/')[0];
      var repo = this.rnom.mainRepo.split('/')[1];
      var issuesController = this.getIssuesController(user, repo);
      var _this = this;

      if (issuesController) {
        issuesController.listMilestones({}, function (sth, milestonesArray) {
          _this.dom.displayMilestones(milestonesArray);
        });
      }
    }
  }, {
    key: 'getIssuesForMilestone',
    value: function getIssuesForMilestone(milestone) {
      var user = this.rnom.mainRepo.split('/')[0];
      var repo = this.rnom.mainRepo.split('/')[1];
      var issuesController = this.getIssuesController(user, repo);
      var _this = this;

      if (issuesController) {
        issuesController.listIssues({
          milestone: milestone
        }, function (sth, issuesArray) {
          _this.dom.displayIssues(issuesArray);
        });
      }
    }
  }]);

  return GithubController;
}();

exports.default = GithubController;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dom = __webpack_require__(6);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventManager = function () {
  function EventManager(rnom) {
    _classCallCheck(this, EventManager);

    /**
     * ReleaseNotesOMatic instance.
     * @type {Object}
     */
    this.rnom = rnom;

    this.dom = new _dom2.default();
  }

  _createClass(EventManager, [{
    key: 'registerEvents',
    value: function registerEvents() {
      var _this = this;

      document.addEventListener('DOMContentLoaded', function (event) {

        _this.addEvent('click', 'set-main-repo', function () {
          _this.rnom.setMainRepo(_this.dom.getFormData('main-repo-name'));
          _this.dom.flipConfigInputs(0);
        });

        _this.addEvent('click', 'set-complementary-repo', function () {
          _this.rnom.setComplementaryRepo(_this.dom.getFormData('complementary-repo-name'));
          _this.dom.flipConfigInputs(1);
        });

        _this.addEvent('click', 'set-github-auth', function () {
          _this.rnom.setGhToken(_this.dom.getFormData('auth-token'));
          _this.dom.flipConfigInputs(2);
        });

        _this.addEvent('click', 'edit-main-repo', function () {
          _this.rnom.setMainRepo('');
          _this.dom.flipConfigInputs(0);
        });

        _this.addEvent('click', 'edit-complementary-repo', function () {
          _this.rnom.setComplementaryRepo('');
          _this.dom.flipConfigInputs(1);
        });

        _this.addEvent('click', 'edit-auth-token', function () {
          _this.rnom.setGhToken('');
          _this.dom.flipConfigInputs(2);
        });

        _this.addEvent('change', 'milestone', function (e) {
          _this.rnom.ghController.getIssuesForMilestone(e.target.getAttribute('data-val'));
        });

        _this.dom.flipConfigInputs();

        // get Milestones
        _this.rnom.ghController.getMilestones();
      });
    }
  }, {
    key: 'addEvent',
    value: function addEvent(action, elementId, callback) {
      document.getElementById(elementId).addEventListener(action, callback);
    }
  }]);

  return EventManager;
}();

exports.default = EventManager;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright  2013 Michael Aufreiter (Development Seed) and 2016 Yahoo Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license    Licensed under {@link https://spdx.org/licenses/BSD-3-Clause-Clear.html BSD-3-Clause-Clear}.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
/* eslint valid-jsdoc: ["error", {"requireReturnDescription": false}] */

var _Gist = __webpack_require__(18);

var _Gist2 = _interopRequireDefault(_Gist);

var _User = __webpack_require__(42);

var _User2 = _interopRequireDefault(_User);

var _Issue = __webpack_require__(43);

var _Issue2 = _interopRequireDefault(_Issue);

var _Search = __webpack_require__(44);

var _Search2 = _interopRequireDefault(_Search);

var _RateLimit = __webpack_require__(45);

var _RateLimit2 = _interopRequireDefault(_RateLimit);

var _Repository = __webpack_require__(46);

var _Repository2 = _interopRequireDefault(_Repository);

var _Organization = __webpack_require__(49);

var _Organization2 = _interopRequireDefault(_Organization);

var _Team = __webpack_require__(50);

var _Team2 = _interopRequireDefault(_Team);

var _Markdown = __webpack_require__(51);

var _Markdown2 = _interopRequireDefault(_Markdown);

var _Project = __webpack_require__(52);

var _Project2 = _interopRequireDefault(_Project);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * GitHub encapsulates the functionality to create various API wrapper objects.
 */
var GitHub = function () {
  /**
   * Create a new GitHub.
   * @param {Requestable.auth} [auth] - the credentials to authenticate to Github. If auth is
   *                                  not provided requests will be made unauthenticated
   * @param {string} [apiBase=https://api.github.com] - the base Github API URL
   */
  function GitHub(auth) {
    var apiBase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'https://api.github.com';

    _classCallCheck(this, GitHub);

    this.__apiBase = apiBase;
    this.__auth = auth || {};
  }

  /**
   * Create a new Gist wrapper
   * @param {number} [id] - the id for the gist, leave undefined when creating a new gist
   * @return {Gist}
   */


  _createClass(GitHub, [{
    key: 'getGist',
    value: function getGist(id) {
      return new _Gist2.default(id, this.__auth, this.__apiBase);
    }

    /**
     * Create a new User wrapper
     * @param {string} [user] - the name of the user to get information about
     *                        leave undefined for the authenticated user
     * @return {User}
     */

  }, {
    key: 'getUser',
    value: function getUser(user) {
      return new _User2.default(user, this.__auth, this.__apiBase);
    }

    /**
     * Create a new Organization wrapper
     * @param {string} organization - the name of the organization
     * @return {Organization}
     */

  }, {
    key: 'getOrganization',
    value: function getOrganization(organization) {
      return new _Organization2.default(organization, this.__auth, this.__apiBase);
    }

    /**
     * create a new Team wrapper
     * @param {string} teamId - the name of the team
     * @return {team}
     */

  }, {
    key: 'getTeam',
    value: function getTeam(teamId) {
      return new _Team2.default(teamId, this.__auth, this.__apiBase);
    }

    /**
     * Create a new Repository wrapper
     * @param {string} user - the user who owns the respository
     * @param {string} repo - the name of the repository
     * @return {Repository}
     */

  }, {
    key: 'getRepo',
    value: function getRepo(user, repo) {
      return new _Repository2.default(this._getFullName(user, repo), this.__auth, this.__apiBase);
    }

    /**
     * Create a new Issue wrapper
     * @param {string} user - the user who owns the respository
     * @param {string} repo - the name of the repository
     * @return {Issue}
     */

  }, {
    key: 'getIssues',
    value: function getIssues(user, repo) {
      return new _Issue2.default(this._getFullName(user, repo), this.__auth, this.__apiBase);
    }

    /**
     * Create a new Search wrapper
     * @param {string} query - the query to search for
     * @return {Search}
     */

  }, {
    key: 'search',
    value: function search(query) {
      return new _Search2.default(query, this.__auth, this.__apiBase);
    }

    /**
     * Create a new RateLimit wrapper
     * @return {RateLimit}
     */

  }, {
    key: 'getRateLimit',
    value: function getRateLimit() {
      return new _RateLimit2.default(this.__auth, this.__apiBase);
    }

    /**
     * Create a new Markdown wrapper
     * @return {Markdown}
     */

  }, {
    key: 'getMarkdown',
    value: function getMarkdown() {
      return new _Markdown2.default(this.__auth, this.__apiBase);
    }

    /**
     * Create a new Project wrapper
     * @param {string} id - the id of the project
     * @return {Markdown}
     */

  }, {
    key: 'getProject',
    value: function getProject(id) {
      return new _Project2.default(id, this.__auth, this.__apiBase);
    }

    /**
     * Computes the full repository name
     * @param {string} user - the username (or the full name)
     * @param {string} repo - the repository name, must not be passed if `user` is the full name
     * @return {string} the repository's full name
     */

  }, {
    key: '_getFullName',
    value: function _getFullName(user, repo) {
      var fullname = user;

      if (repo) {
        fullname = user + '/' + repo;
      }

      return fullname;
    }
  }]);

  return GitHub;
}();

module.exports = GitHub;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdpdEh1Yi5qcyJdLCJuYW1lcyI6WyJHaXRIdWIiLCJhdXRoIiwiYXBpQmFzZSIsIl9fYXBpQmFzZSIsIl9fYXV0aCIsImlkIiwidXNlciIsIm9yZ2FuaXphdGlvbiIsInRlYW1JZCIsInJlcG8iLCJfZ2V0RnVsbE5hbWUiLCJxdWVyeSIsImZ1bGxuYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7cWpCQUFBOzs7Ozs7QUFNQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7O0lBR01BLE07QUFDSDs7Ozs7O0FBTUEsa0JBQVlDLElBQVosRUFBc0Q7QUFBQSxRQUFwQ0MsT0FBb0MsdUVBQTFCLHdCQUEwQjs7QUFBQTs7QUFDbkQsU0FBS0MsU0FBTCxHQUFpQkQsT0FBakI7QUFDQSxTQUFLRSxNQUFMLEdBQWNILFFBQVEsRUFBdEI7QUFDRjs7QUFFRDs7Ozs7Ozs7OzRCQUtRSSxFLEVBQUk7QUFDVCxhQUFPLG1CQUFTQSxFQUFULEVBQWEsS0FBS0QsTUFBbEIsRUFBMEIsS0FBS0QsU0FBL0IsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7NEJBTVFHLEksRUFBTTtBQUNYLGFBQU8sbUJBQVNBLElBQVQsRUFBZSxLQUFLRixNQUFwQixFQUE0QixLQUFLRCxTQUFqQyxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7O29DQUtnQkksWSxFQUFjO0FBQzNCLGFBQU8sMkJBQWlCQSxZQUFqQixFQUErQixLQUFLSCxNQUFwQyxFQUE0QyxLQUFLRCxTQUFqRCxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7OzRCQUtRSyxNLEVBQVE7QUFDYixhQUFPLG1CQUFTQSxNQUFULEVBQWlCLEtBQUtKLE1BQXRCLEVBQThCLEtBQUtELFNBQW5DLENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7OzRCQU1RRyxJLEVBQU1HLEksRUFBTTtBQUNqQixhQUFPLHlCQUFlLEtBQUtDLFlBQUwsQ0FBa0JKLElBQWxCLEVBQXdCRyxJQUF4QixDQUFmLEVBQThDLEtBQUtMLE1BQW5ELEVBQTJELEtBQUtELFNBQWhFLENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7OzhCQU1VRyxJLEVBQU1HLEksRUFBTTtBQUNuQixhQUFPLG9CQUFVLEtBQUtDLFlBQUwsQ0FBa0JKLElBQWxCLEVBQXdCRyxJQUF4QixDQUFWLEVBQXlDLEtBQUtMLE1BQTlDLEVBQXNELEtBQUtELFNBQTNELENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7MkJBS09RLEssRUFBTztBQUNYLGFBQU8scUJBQVdBLEtBQVgsRUFBa0IsS0FBS1AsTUFBdkIsRUFBK0IsS0FBS0QsU0FBcEMsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7O21DQUllO0FBQ1osYUFBTyx3QkFBYyxLQUFLQyxNQUFuQixFQUEyQixLQUFLRCxTQUFoQyxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7a0NBSWM7QUFDWCxhQUFPLHVCQUFhLEtBQUtDLE1BQWxCLEVBQTBCLEtBQUtELFNBQS9CLENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7K0JBS1dFLEUsRUFBSTtBQUNaLGFBQU8sc0JBQVlBLEVBQVosRUFBZ0IsS0FBS0QsTUFBckIsRUFBNkIsS0FBS0QsU0FBbEMsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7aUNBTWFHLEksRUFBTUcsSSxFQUFNO0FBQ3RCLFVBQUlHLFdBQVdOLElBQWY7O0FBRUEsVUFBSUcsSUFBSixFQUFVO0FBQ1BHLG1CQUFjTixJQUFkLFNBQXNCRyxJQUF0QjtBQUNGOztBQUVELGFBQU9HLFFBQVA7QUFDRjs7Ozs7O0FBR0pDLE9BQU9DLE9BQVAsR0FBaUJkLE1BQWpCIiwiZmlsZSI6IkdpdEh1Yi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVcbiAqIEBjb3B5cmlnaHQgIDIwMTMgTWljaGFlbCBBdWZyZWl0ZXIgKERldmVsb3BtZW50IFNlZWQpIGFuZCAyMDE2IFlhaG9vIEluYy5cbiAqIEBsaWNlbnNlICAgIExpY2Vuc2VkIHVuZGVyIHtAbGluayBodHRwczovL3NwZHgub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZS1DbGVhci5odG1sIEJTRC0zLUNsYXVzZS1DbGVhcn0uXG4gKiAgICAgICAgICAgICBHaXRodWIuanMgaXMgZnJlZWx5IGRpc3RyaWJ1dGFibGUuXG4gKi9cbi8qIGVzbGludCB2YWxpZC1qc2RvYzogW1wiZXJyb3JcIiwge1wicmVxdWlyZVJldHVybkRlc2NyaXB0aW9uXCI6IGZhbHNlfV0gKi9cblxuaW1wb3J0IEdpc3QgZnJvbSAnLi9HaXN0JztcbmltcG9ydCBVc2VyIGZyb20gJy4vVXNlcic7XG5pbXBvcnQgSXNzdWUgZnJvbSAnLi9Jc3N1ZSc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoJztcbmltcG9ydCBSYXRlTGltaXQgZnJvbSAnLi9SYXRlTGltaXQnO1xuaW1wb3J0IFJlcG9zaXRvcnkgZnJvbSAnLi9SZXBvc2l0b3J5JztcbmltcG9ydCBPcmdhbml6YXRpb24gZnJvbSAnLi9Pcmdhbml6YXRpb24nO1xuaW1wb3J0IFRlYW0gZnJvbSAnLi9UZWFtJztcbmltcG9ydCBNYXJrZG93biBmcm9tICcuL01hcmtkb3duJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XG5cbi8qKlxuICogR2l0SHViIGVuY2Fwc3VsYXRlcyB0aGUgZnVuY3Rpb25hbGl0eSB0byBjcmVhdGUgdmFyaW91cyBBUEkgd3JhcHBlciBvYmplY3RzLlxuICovXG5jbGFzcyBHaXRIdWIge1xuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgR2l0SHViLlxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5hdXRofSBbYXV0aF0gLSB0aGUgY3JlZGVudGlhbHMgdG8gYXV0aGVudGljYXRlIHRvIEdpdGh1Yi4gSWYgYXV0aCBpc1xuICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90IHByb3ZpZGVkIHJlcXVlc3RzIHdpbGwgYmUgbWFkZSB1bmF1dGhlbnRpY2F0ZWRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbYXBpQmFzZT1odHRwczovL2FwaS5naXRodWIuY29tXSAtIHRoZSBiYXNlIEdpdGh1YiBBUEkgVVJMXG4gICAgKi9cbiAgIGNvbnN0cnVjdG9yKGF1dGgsIGFwaUJhc2UgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbScpIHtcbiAgICAgIHRoaXMuX19hcGlCYXNlID0gYXBpQmFzZTtcbiAgICAgIHRoaXMuX19hdXRoID0gYXV0aCB8fCB7fTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgR2lzdCB3cmFwcGVyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gW2lkXSAtIHRoZSBpZCBmb3IgdGhlIGdpc3QsIGxlYXZlIHVuZGVmaW5lZCB3aGVuIGNyZWF0aW5nIGEgbmV3IGdpc3RcbiAgICAqIEByZXR1cm4ge0dpc3R9XG4gICAgKi9cbiAgIGdldEdpc3QoaWQpIHtcbiAgICAgIHJldHVybiBuZXcgR2lzdChpZCwgdGhpcy5fX2F1dGgsIHRoaXMuX19hcGlCYXNlKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgVXNlciB3cmFwcGVyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3VzZXJdIC0gdGhlIG5hbWUgb2YgdGhlIHVzZXIgdG8gZ2V0IGluZm9ybWF0aW9uIGFib3V0XG4gICAgKiAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlIHVuZGVmaW5lZCBmb3IgdGhlIGF1dGhlbnRpY2F0ZWQgdXNlclxuICAgICogQHJldHVybiB7VXNlcn1cbiAgICAqL1xuICAgZ2V0VXNlcih1c2VyKSB7XG4gICAgICByZXR1cm4gbmV3IFVzZXIodXNlciwgdGhpcy5fX2F1dGgsIHRoaXMuX19hcGlCYXNlKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgT3JnYW5pemF0aW9uIHdyYXBwZXJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcmdhbml6YXRpb24gLSB0aGUgbmFtZSBvZiB0aGUgb3JnYW5pemF0aW9uXG4gICAgKiBAcmV0dXJuIHtPcmdhbml6YXRpb259XG4gICAgKi9cbiAgIGdldE9yZ2FuaXphdGlvbihvcmdhbml6YXRpb24pIHtcbiAgICAgIHJldHVybiBuZXcgT3JnYW5pemF0aW9uKG9yZ2FuaXphdGlvbiwgdGhpcy5fX2F1dGgsIHRoaXMuX19hcGlCYXNlKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBjcmVhdGUgYSBuZXcgVGVhbSB3cmFwcGVyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGVhbUlkIC0gdGhlIG5hbWUgb2YgdGhlIHRlYW1cbiAgICAqIEByZXR1cm4ge3RlYW19XG4gICAgKi9cbiAgIGdldFRlYW0odGVhbUlkKSB7XG4gICAgICByZXR1cm4gbmV3IFRlYW0odGVhbUlkLCB0aGlzLl9fYXV0aCwgdGhpcy5fX2FwaUJhc2UpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBSZXBvc2l0b3J5IHdyYXBwZXJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VyIC0gdGhlIHVzZXIgd2hvIG93bnMgdGhlIHJlc3Bvc2l0b3J5XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcmVwbyAtIHRoZSBuYW1lIG9mIHRoZSByZXBvc2l0b3J5XG4gICAgKiBAcmV0dXJuIHtSZXBvc2l0b3J5fVxuICAgICovXG4gICBnZXRSZXBvKHVzZXIsIHJlcG8pIHtcbiAgICAgIHJldHVybiBuZXcgUmVwb3NpdG9yeSh0aGlzLl9nZXRGdWxsTmFtZSh1c2VyLCByZXBvKSwgdGhpcy5fX2F1dGgsIHRoaXMuX19hcGlCYXNlKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgSXNzdWUgd3JhcHBlclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXIgLSB0aGUgdXNlciB3aG8gb3ducyB0aGUgcmVzcG9zaXRvcnlcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSByZXBvIC0gdGhlIG5hbWUgb2YgdGhlIHJlcG9zaXRvcnlcbiAgICAqIEByZXR1cm4ge0lzc3VlfVxuICAgICovXG4gICBnZXRJc3N1ZXModXNlciwgcmVwbykge1xuICAgICAgcmV0dXJuIG5ldyBJc3N1ZSh0aGlzLl9nZXRGdWxsTmFtZSh1c2VyLCByZXBvKSwgdGhpcy5fX2F1dGgsIHRoaXMuX19hcGlCYXNlKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgU2VhcmNoIHdyYXBwZXJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSAtIHRoZSBxdWVyeSB0byBzZWFyY2ggZm9yXG4gICAgKiBAcmV0dXJuIHtTZWFyY2h9XG4gICAgKi9cbiAgIHNlYXJjaChxdWVyeSkge1xuICAgICAgcmV0dXJuIG5ldyBTZWFyY2gocXVlcnksIHRoaXMuX19hdXRoLCB0aGlzLl9fYXBpQmFzZSk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IFJhdGVMaW1pdCB3cmFwcGVyXG4gICAgKiBAcmV0dXJuIHtSYXRlTGltaXR9XG4gICAgKi9cbiAgIGdldFJhdGVMaW1pdCgpIHtcbiAgICAgIHJldHVybiBuZXcgUmF0ZUxpbWl0KHRoaXMuX19hdXRoLCB0aGlzLl9fYXBpQmFzZSk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IE1hcmtkb3duIHdyYXBwZXJcbiAgICAqIEByZXR1cm4ge01hcmtkb3dufVxuICAgICovXG4gICBnZXRNYXJrZG93bigpIHtcbiAgICAgIHJldHVybiBuZXcgTWFya2Rvd24odGhpcy5fX2F1dGgsIHRoaXMuX19hcGlCYXNlKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgUHJvamVjdCB3cmFwcGVyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgLSB0aGUgaWQgb2YgdGhlIHByb2plY3RcbiAgICAqIEByZXR1cm4ge01hcmtkb3dufVxuICAgICovXG4gICBnZXRQcm9qZWN0KGlkKSB7XG4gICAgICByZXR1cm4gbmV3IFByb2plY3QoaWQsIHRoaXMuX19hdXRoLCB0aGlzLl9fYXBpQmFzZSk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ29tcHV0ZXMgdGhlIGZ1bGwgcmVwb3NpdG9yeSBuYW1lXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlciAtIHRoZSB1c2VybmFtZSAob3IgdGhlIGZ1bGwgbmFtZSlcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSByZXBvIC0gdGhlIHJlcG9zaXRvcnkgbmFtZSwgbXVzdCBub3QgYmUgcGFzc2VkIGlmIGB1c2VyYCBpcyB0aGUgZnVsbCBuYW1lXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSByZXBvc2l0b3J5J3MgZnVsbCBuYW1lXG4gICAgKi9cbiAgIF9nZXRGdWxsTmFtZSh1c2VyLCByZXBvKSB7XG4gICAgICBsZXQgZnVsbG5hbWUgPSB1c2VyO1xuXG4gICAgICBpZiAocmVwbykge1xuICAgICAgICAgZnVsbG5hbWUgPSBgJHt1c2VyfS8ke3JlcG99YDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZ1bGxuYW1lO1xuICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdpdEh1YjtcbiJdfQ==
//# sourceMappingURL=GitHub.js.map


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Requestable2 = __webpack_require__(1);

var _Requestable3 = _interopRequireDefault(_Requestable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2013 Michael Aufreiter (Development Seed) and 2016 Yahoo Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under {@link https://spdx.org/licenses/BSD-3-Clause-Clear.html BSD-3-Clause-Clear}.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * A Gist can retrieve and modify gists.
 */
var Gist = function (_Requestable) {
  _inherits(Gist, _Requestable);

  /**
   * Create a Gist.
   * @param {string} id - the id of the gist (not required when creating a gist)
   * @param {Requestable.auth} [auth] - information required to authenticate to Github
   * @param {string} [apiBase=https://api.github.com] - the base Github API URL
   */
  function Gist(id, auth, apiBase) {
    _classCallCheck(this, Gist);

    var _this = _possibleConstructorReturn(this, (Gist.__proto__ || Object.getPrototypeOf(Gist)).call(this, auth, apiBase));

    _this.__id = id;
    return _this;
  }

  /**
   * Fetch a gist.
   * @see https://developer.github.com/v3/gists/#get-a-single-gist
   * @param {Requestable.callback} [cb] - will receive the gist
   * @return {Promise} - the Promise for the http request
   */


  _createClass(Gist, [{
    key: 'read',
    value: function read(cb) {
      return this._request('GET', '/gists/' + this.__id, null, cb);
    }

    /**
     * Create a new gist.
     * @see https://developer.github.com/v3/gists/#create-a-gist
     * @param {Object} gist - the data for the new gist
     * @param {Requestable.callback} [cb] - will receive the new gist upon creation
     * @return {Promise} - the Promise for the http request
     */

  }, {
    key: 'create',
    value: function create(gist, cb) {
      var _this2 = this;

      return this._request('POST', '/gists', gist, cb).then(function (response) {
        _this2.__id = response.data.id;
        return response;
      });
    }

    /**
     * Delete a gist.
     * @see https://developer.github.com/v3/gists/#delete-a-gist
     * @param {Requestable.callback} [cb] - will receive true if the request succeeds
     * @return {Promise} - the Promise for the http request
     */

  }, {
    key: 'delete',
    value: function _delete(cb) {
      return this._request('DELETE', '/gists/' + this.__id, null, cb);
    }

    /**
     * Fork a gist.
     * @see https://developer.github.com/v3/gists/#fork-a-gist
     * @param {Requestable.callback} [cb] - the function that will receive the gist
     * @return {Promise} - the Promise for the http request
     */

  }, {
    key: 'fork',
    value: function fork(cb) {
      return this._request('POST', '/gists/' + this.__id + '/forks', null, cb);
    }

    /**
     * Update a gist.
     * @see https://developer.github.com/v3/gists/#edit-a-gist
     * @param {Object} gist - the new data for the gist
     * @param {Requestable.callback} [cb] - the function that receives the API result
     * @return {Promise} - the Promise for the http request
     */

  }, {
    key: 'update',
    value: function update(gist, cb) {
      return this._request('PATCH', '/gists/' + this.__id, gist, cb);
    }

    /**
     * Star a gist.
     * @see https://developer.github.com/v3/gists/#star-a-gist
     * @param {Requestable.callback} [cb] - will receive true if the request is successful
     * @return {Promise} - the Promise for the http request
     */

  }, {
    key: 'star',
    value: function star(cb) {
      return this._request('PUT', '/gists/' + this.__id + '/star', null, cb);
    }

    /**
     * Unstar a gist.
     * @see https://developer.github.com/v3/gists/#unstar-a-gist
     * @param {Requestable.callback} [cb] - will receive true if the request is successful
     * @return {Promise} - the Promise for the http request
     */

  }, {
    key: 'unstar',
    value: function unstar(cb) {
      return this._request('DELETE', '/gists/' + this.__id + '/star', null, cb);
    }

    /**
     * Check if a gist is starred by the user.
     * @see https://developer.github.com/v3/gists/#check-if-a-gist-is-starred
     * @param {Requestable.callback} [cb] - will receive true if the gist is starred and false if the gist is not starred
     * @return {Promise} - the Promise for the http request
     */

  }, {
    key: 'isStarred',
    value: function isStarred(cb) {
      return this._request204or404('/gists/' + this.__id + '/star', null, cb);
    }

    /**
     * List the gist's comments
     * @see https://developer.github.com/v3/gists/comments/#list-comments-on-a-gist
     * @param {Requestable.callback} [cb] - will receive the array of comments
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'listComments',
    value: function listComments(cb) {
      return this._requestAllPages('/gists/' + this.__id + '/comments', null, cb);
    }

    /**
     * Fetch one of the gist's comments
     * @see https://developer.github.com/v3/gists/comments/#get-a-single-comment
     * @param {number} comment - the id of the comment
     * @param {Requestable.callback} [cb] - will receive the comment
     * @return {Promise} - the Promise for the http request
     */

  }, {
    key: 'getComment',
    value: function getComment(comment, cb) {
      return this._request('GET', '/gists/' + this.__id + '/comments/' + comment, null, cb);
    }

    /**
     * Comment on a gist
     * @see https://developer.github.com/v3/gists/comments/#create-a-comment
     * @param {string} comment - the comment to add
     * @param {Requestable.callback} [cb] - the function that receives the API result
     * @return {Promise} - the Promise for the http request
     */

  }, {
    key: 'createComment',
    value: function createComment(comment, cb) {
      return this._request('POST', '/gists/' + this.__id + '/comments', { body: comment }, cb);
    }

    /**
     * Edit a comment on the gist
     * @see https://developer.github.com/v3/gists/comments/#edit-a-comment
     * @param {number} comment - the id of the comment
     * @param {string} body - the new comment
     * @param {Requestable.callback} [cb] - will receive the modified comment
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'editComment',
    value: function editComment(comment, body, cb) {
      return this._request('PATCH', '/gists/' + this.__id + '/comments/' + comment, { body: body }, cb);
    }

    /**
     * Delete a comment on the gist.
     * @see https://developer.github.com/v3/gists/comments/#delete-a-comment
     * @param {number} comment - the id of the comment
     * @param {Requestable.callback} [cb] - will receive true if the request succeeds
     * @return {Promise} - the Promise for the http request
     */

  }, {
    key: 'deleteComment',
    value: function deleteComment(comment, cb) {
      return this._request('DELETE', '/gists/' + this.__id + '/comments/' + comment, null, cb);
    }
  }]);

  return Gist;
}(_Requestable3.default);

module.exports = Gist;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdpc3QuanMiXSwibmFtZXMiOlsiR2lzdCIsImlkIiwiYXV0aCIsImFwaUJhc2UiLCJfX2lkIiwiY2IiLCJfcmVxdWVzdCIsImdpc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiX3JlcXVlc3QyMDRvcjQwNCIsIl9yZXF1ZXN0QWxsUGFnZXMiLCJjb21tZW50IiwiYm9keSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFPQTs7Ozs7Ozs7OzsrZUFQQTs7Ozs7OztBQVNBOzs7SUFHTUEsSTs7O0FBQ0g7Ozs7OztBQU1BLGdCQUFZQyxFQUFaLEVBQWdCQyxJQUFoQixFQUFzQkMsT0FBdEIsRUFBK0I7QUFBQTs7QUFBQSw0R0FDdEJELElBRHNCLEVBQ2hCQyxPQURnQjs7QUFFNUIsVUFBS0MsSUFBTCxHQUFZSCxFQUFaO0FBRjRCO0FBRzlCOztBQUVEOzs7Ozs7Ozs7O3lCQU1LSSxFLEVBQUk7QUFDTixhQUFPLEtBQUtDLFFBQUwsQ0FBYyxLQUFkLGNBQStCLEtBQUtGLElBQXBDLEVBQTRDLElBQTVDLEVBQWtEQyxFQUFsRCxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7MkJBT09FLEksRUFBTUYsRSxFQUFJO0FBQUE7O0FBQ2QsYUFBTyxLQUFLQyxRQUFMLENBQWMsTUFBZCxFQUFzQixRQUF0QixFQUFnQ0MsSUFBaEMsRUFBc0NGLEVBQXRDLEVBQ0hHLElBREcsQ0FDRSxVQUFDQyxRQUFELEVBQWM7QUFDakIsZUFBS0wsSUFBTCxHQUFZSyxTQUFTQyxJQUFULENBQWNULEVBQTFCO0FBQ0EsZUFBT1EsUUFBUDtBQUNGLE9BSkcsQ0FBUDtBQUtGOztBQUVEOzs7Ozs7Ozs7NEJBTU9KLEUsRUFBSTtBQUNSLGFBQU8sS0FBS0MsUUFBTCxDQUFjLFFBQWQsY0FBa0MsS0FBS0YsSUFBdkMsRUFBK0MsSUFBL0MsRUFBcURDLEVBQXJELENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7O3lCQU1LQSxFLEVBQUk7QUFDTixhQUFPLEtBQUtDLFFBQUwsQ0FBYyxNQUFkLGNBQWdDLEtBQUtGLElBQXJDLGFBQW1ELElBQW5ELEVBQXlEQyxFQUF6RCxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7MkJBT09FLEksRUFBTUYsRSxFQUFJO0FBQ2QsYUFBTyxLQUFLQyxRQUFMLENBQWMsT0FBZCxjQUFpQyxLQUFLRixJQUF0QyxFQUE4Q0csSUFBOUMsRUFBb0RGLEVBQXBELENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7O3lCQU1LQSxFLEVBQUk7QUFDTixhQUFPLEtBQUtDLFFBQUwsQ0FBYyxLQUFkLGNBQStCLEtBQUtGLElBQXBDLFlBQWlELElBQWpELEVBQXVEQyxFQUF2RCxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7OzsyQkFNT0EsRSxFQUFJO0FBQ1IsYUFBTyxLQUFLQyxRQUFMLENBQWMsUUFBZCxjQUFrQyxLQUFLRixJQUF2QyxZQUFvRCxJQUFwRCxFQUEwREMsRUFBMUQsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7OEJBTVVBLEUsRUFBSTtBQUNYLGFBQU8sS0FBS00sZ0JBQUwsYUFBZ0MsS0FBS1AsSUFBckMsWUFBa0QsSUFBbEQsRUFBd0RDLEVBQXhELENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7O2lDQU1hQSxFLEVBQUk7QUFDZCxhQUFPLEtBQUtPLGdCQUFMLGFBQWdDLEtBQUtSLElBQXJDLGdCQUFzRCxJQUF0RCxFQUE0REMsRUFBNUQsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7OytCQU9XUSxPLEVBQVNSLEUsRUFBSTtBQUNyQixhQUFPLEtBQUtDLFFBQUwsQ0FBYyxLQUFkLGNBQStCLEtBQUtGLElBQXBDLGtCQUFxRFMsT0FBckQsRUFBZ0UsSUFBaEUsRUFBc0VSLEVBQXRFLENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7OztrQ0FPY1EsTyxFQUFTUixFLEVBQUk7QUFDeEIsYUFBTyxLQUFLQyxRQUFMLENBQWMsTUFBZCxjQUFnQyxLQUFLRixJQUFyQyxnQkFBc0QsRUFBQ1UsTUFBTUQsT0FBUCxFQUF0RCxFQUF1RVIsRUFBdkUsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7OztnQ0FRWVEsTyxFQUFTQyxJLEVBQU1ULEUsRUFBSTtBQUM1QixhQUFPLEtBQUtDLFFBQUwsQ0FBYyxPQUFkLGNBQWlDLEtBQUtGLElBQXRDLGtCQUF1RFMsT0FBdkQsRUFBa0UsRUFBQ0MsTUFBTUEsSUFBUCxFQUFsRSxFQUFnRlQsRUFBaEYsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7O2tDQU9jUSxPLEVBQVNSLEUsRUFBSTtBQUN4QixhQUFPLEtBQUtDLFFBQUwsQ0FBYyxRQUFkLGNBQWtDLEtBQUtGLElBQXZDLGtCQUF3RFMsT0FBeEQsRUFBbUUsSUFBbkUsRUFBeUVSLEVBQXpFLENBQVA7QUFDRjs7Ozs7O0FBR0pVLE9BQU9DLE9BQVAsR0FBaUJoQixJQUFqQiIsImZpbGUiOiJHaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZVxuICogQGNvcHlyaWdodCAgMjAxMyBNaWNoYWVsIEF1ZnJlaXRlciAoRGV2ZWxvcG1lbnQgU2VlZCkgYW5kIDIwMTYgWWFob28gSW5jLlxuICogQGxpY2Vuc2UgICAgTGljZW5zZWQgdW5kZXIge0BsaW5rIGh0dHBzOi8vc3BkeC5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlLUNsZWFyLmh0bWwgQlNELTMtQ2xhdXNlLUNsZWFyfS5cbiAqICAgICAgICAgICAgIEdpdGh1Yi5qcyBpcyBmcmVlbHkgZGlzdHJpYnV0YWJsZS5cbiAqL1xuXG5pbXBvcnQgUmVxdWVzdGFibGUgZnJvbSAnLi9SZXF1ZXN0YWJsZSc7XG5cbi8qKlxuICogQSBHaXN0IGNhbiByZXRyaWV2ZSBhbmQgbW9kaWZ5IGdpc3RzLlxuICovXG5jbGFzcyBHaXN0IGV4dGVuZHMgUmVxdWVzdGFibGUge1xuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBHaXN0LlxuICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gdGhlIGlkIG9mIHRoZSBnaXN0IChub3QgcmVxdWlyZWQgd2hlbiBjcmVhdGluZyBhIGdpc3QpXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmF1dGh9IFthdXRoXSAtIGluZm9ybWF0aW9uIHJlcXVpcmVkIHRvIGF1dGhlbnRpY2F0ZSB0byBHaXRodWJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbYXBpQmFzZT1odHRwczovL2FwaS5naXRodWIuY29tXSAtIHRoZSBiYXNlIEdpdGh1YiBBUEkgVVJMXG4gICAgKi9cbiAgIGNvbnN0cnVjdG9yKGlkLCBhdXRoLCBhcGlCYXNlKSB7XG4gICAgICBzdXBlcihhdXRoLCBhcGlCYXNlKTtcbiAgICAgIHRoaXMuX19pZCA9IGlkO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEZldGNoIGEgZ2lzdC5cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9naXN0cy8jZ2V0LWEtc2luZ2xlLWdpc3RcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGdpc3RcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIFByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgcmVhZChjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvZ2lzdHMvJHt0aGlzLl9faWR9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBnaXN0LlxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2dpc3RzLyNjcmVhdGUtYS1naXN0XG4gICAgKiBAcGFyYW0ge09iamVjdH0gZ2lzdCAtIHRoZSBkYXRhIGZvciB0aGUgbmV3IGdpc3RcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIG5ldyBnaXN0IHVwb24gY3JlYXRpb25cbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIFByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgY3JlYXRlKGdpc3QsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUE9TVCcsICcvZ2lzdHMnLCBnaXN0LCBjYilcbiAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fX2lkID0gcmVzcG9uc2UuZGF0YS5pZDtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgIH0pO1xuICAgfVxuXG4gICAvKipcbiAgICAqIERlbGV0ZSBhIGdpc3QuXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2lzdHMvI2RlbGV0ZS1hLWdpc3RcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdHJ1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgUHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBkZWxldGUoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdERUxFVEUnLCBgL2dpc3RzLyR7dGhpcy5fX2lkfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBGb3JrIGEgZ2lzdC5cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9naXN0cy8jZm9yay1hLWdpc3RcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB0aGUgZnVuY3Rpb24gdGhhdCB3aWxsIHJlY2VpdmUgdGhlIGdpc3RcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIFByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZm9yayhjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL2dpc3RzLyR7dGhpcy5fX2lkfS9mb3Jrc2AsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBVcGRhdGUgYSBnaXN0LlxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2dpc3RzLyNlZGl0LWEtZ2lzdFxuICAgICogQHBhcmFtIHtPYmplY3R9IGdpc3QgLSB0aGUgbmV3IGRhdGEgZm9yIHRoZSBnaXN0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gdGhlIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgdGhlIEFQSSByZXN1bHRcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIFByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgdXBkYXRlKGdpc3QsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUEFUQ0gnLCBgL2dpc3RzLyR7dGhpcy5fX2lkfWAsIGdpc3QsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBTdGFyIGEgZ2lzdC5cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9naXN0cy8jc3Rhci1hLWdpc3RcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdHJ1ZSBpZiB0aGUgcmVxdWVzdCBpcyBzdWNjZXNzZnVsXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBQcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIHN0YXIoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQVVQnLCBgL2dpc3RzLyR7dGhpcy5fX2lkfS9zdGFyYCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIFVuc3RhciBhIGdpc3QuXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2lzdHMvI3Vuc3Rhci1hLWdpc3RcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdHJ1ZSBpZiB0aGUgcmVxdWVzdCBpcyBzdWNjZXNzZnVsXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBQcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIHVuc3RhcihjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0RFTEVURScsIGAvZ2lzdHMvJHt0aGlzLl9faWR9L3N0YXJgLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ2hlY2sgaWYgYSBnaXN0IGlzIHN0YXJyZWQgYnkgdGhlIHVzZXIuXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2lzdHMvI2NoZWNrLWlmLWEtZ2lzdC1pcy1zdGFycmVkXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRydWUgaWYgdGhlIGdpc3QgaXMgc3RhcnJlZCBhbmQgZmFsc2UgaWYgdGhlIGdpc3QgaXMgbm90IHN0YXJyZWRcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIFByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgaXNTdGFycmVkKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdDIwNG9yNDA0KGAvZ2lzdHMvJHt0aGlzLl9faWR9L3N0YXJgLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCB0aGUgZ2lzdCdzIGNvbW1lbnRzXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2lzdHMvY29tbWVudHMvI2xpc3QtY29tbWVudHMtb24tYS1naXN0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBhcnJheSBvZiBjb21tZW50c1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBsaXN0Q29tbWVudHMoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0QWxsUGFnZXMoYC9naXN0cy8ke3RoaXMuX19pZH0vY29tbWVudHNgLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRmV0Y2ggb25lIG9mIHRoZSBnaXN0J3MgY29tbWVudHNcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9naXN0cy9jb21tZW50cy8jZ2V0LWEtc2luZ2xlLWNvbW1lbnRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb21tZW50IC0gdGhlIGlkIG9mIHRoZSBjb21tZW50XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBjb21tZW50XG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBQcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldENvbW1lbnQoY29tbWVudCwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL2dpc3RzLyR7dGhpcy5fX2lkfS9jb21tZW50cy8ke2NvbW1lbnR9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENvbW1lbnQgb24gYSBnaXN0XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2lzdHMvY29tbWVudHMvI2NyZWF0ZS1hLWNvbW1lbnRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb21tZW50IC0gdGhlIGNvbW1lbnQgdG8gYWRkXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gdGhlIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgdGhlIEFQSSByZXN1bHRcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIFByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgY3JlYXRlQ29tbWVudChjb21tZW50LCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL2dpc3RzLyR7dGhpcy5fX2lkfS9jb21tZW50c2AsIHtib2R5OiBjb21tZW50fSwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEVkaXQgYSBjb21tZW50IG9uIHRoZSBnaXN0XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2lzdHMvY29tbWVudHMvI2VkaXQtYS1jb21tZW50XG4gICAgKiBAcGFyYW0ge251bWJlcn0gY29tbWVudCAtIHRoZSBpZCBvZiB0aGUgY29tbWVudFxuICAgICogQHBhcmFtIHtzdHJpbmd9IGJvZHkgLSB0aGUgbmV3IGNvbW1lbnRcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIG1vZGlmaWVkIGNvbW1lbnRcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZWRpdENvbW1lbnQoY29tbWVudCwgYm9keSwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQQVRDSCcsIGAvZ2lzdHMvJHt0aGlzLl9faWR9L2NvbW1lbnRzLyR7Y29tbWVudH1gLCB7Ym9keTogYm9keX0sIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBEZWxldGUgYSBjb21tZW50IG9uIHRoZSBnaXN0LlxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2dpc3RzL2NvbW1lbnRzLyNkZWxldGUtYS1jb21tZW50XG4gICAgKiBAcGFyYW0ge251bWJlcn0gY29tbWVudCAtIHRoZSBpZCBvZiB0aGUgY29tbWVudFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0cnVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBQcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGRlbGV0ZUNvbW1lbnQoY29tbWVudCwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdERUxFVEUnLCBgL2dpc3RzLyR7dGhpcy5fX2lkfS9jb21tZW50cy8ke2NvbW1lbnR9YCwgbnVsbCwgY2IpO1xuICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdpc3Q7XG4iXX0=
//# sourceMappingURL=Gist.js.map


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(7);
var Axios = __webpack_require__(21);
var defaults = __webpack_require__(3);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(11);
axios.CancelToken = __webpack_require__(35);
axios.isCancel = __webpack_require__(10);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(36);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(3);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(30);
var dispatchRequest = __webpack_require__(31);
var isAbsoluteURL = __webpack_require__(33);
var combineURLs = __webpack_require__(34);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(9);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response
    ));
  }
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(32);
var isCancel = __webpack_require__(10);
var defaults = __webpack_require__(3);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(11);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(38);

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 40 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 41 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Requestable2 = __webpack_require__(1);

var _Requestable3 = _interopRequireDefault(_Requestable2);

var _debug = __webpack_require__(2);

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2013 Michael Aufreiter (Development Seed) and 2016 Yahoo Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under {@link https://spdx.org/licenses/BSD-3-Clause-Clear.html BSD-3-Clause-Clear}.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var log = (0, _debug2.default)('github:user');

/**
 * A User allows scoping of API requests to a particular Github user.
 */

var User = function (_Requestable) {
   _inherits(User, _Requestable);

   /**
    * Create a User.
    * @param {string} [username] - the user to use for user-scoped queries
    * @param {Requestable.auth} [auth] - information required to authenticate to Github
    * @param {string} [apiBase=https://api.github.com] - the base Github API URL
    */
   function User(username, auth, apiBase) {
      _classCallCheck(this, User);

      var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, auth, apiBase));

      _this.__user = username;
      return _this;
   }

   /**
    * Get the url for the request. (dependent on if we're requesting for the authenticated user or not)
    * @private
    * @param {string} endpoint - the endpoint being requested
    * @return {string} - the resolved endpoint
    */


   _createClass(User, [{
      key: '__getScopedUrl',
      value: function __getScopedUrl(endpoint) {
         if (this.__user) {
            return endpoint ? '/users/' + this.__user + '/' + endpoint : '/users/' + this.__user;
         } else {
            // eslint-disable-line
            switch (endpoint) {
               case '':
                  return '/user';

               case 'notifications':
               case 'gists':
                  return '/' + endpoint;

               default:
                  return '/user/' + endpoint;
            }
         }
      }

      /**
       * List the user's repositories
       * @see https://developer.github.com/v3/repos/#list-user-repositories
       * @param {Object} [options={}] - any options to refine the search
       * @param {Requestable.callback} [cb] - will receive the list of repositories
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listRepos',
      value: function listRepos(options, cb) {
         if (typeof options === 'function') {
            cb = options;
            options = {};
         }

         options = this._getOptionsWithDefaults(options);

         log('Fetching repositories with options: ' + JSON.stringify(options));
         return this._requestAllPages(this.__getScopedUrl('repos'), options, cb);
      }

      /**
       * List the orgs that the user belongs to
       * @see https://developer.github.com/v3/orgs/#list-user-organizations
       * @param {Requestable.callback} [cb] - will receive the list of organizations
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listOrgs',
      value: function listOrgs(cb) {
         return this._request('GET', this.__getScopedUrl('orgs'), null, cb);
      }

      /**
       * List the user's gists
       * @see https://developer.github.com/v3/gists/#list-a-users-gists
       * @param {Requestable.callback} [cb] - will receive the list of gists
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listGists',
      value: function listGists(cb) {
         return this._request('GET', this.__getScopedUrl('gists'), null, cb);
      }

      /**
       * List the user's notifications
       * @see https://developer.github.com/v3/activity/notifications/#list-your-notifications
       * @param {Object} [options={}] - any options to refine the search
       * @param {Requestable.callback} [cb] - will receive the list of repositories
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listNotifications',
      value: function listNotifications(options, cb) {
         options = options || {};
         if (typeof options === 'function') {
            cb = options;
            options = {};
         }

         options.since = this._dateToISO(options.since);
         options.before = this._dateToISO(options.before);

         return this._request('GET', this.__getScopedUrl('notifications'), options, cb);
      }

      /**
       * Show the user's profile
       * @see https://developer.github.com/v3/users/#get-a-single-user
       * @param {Requestable.callback} [cb] - will receive the user's information
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getProfile',
      value: function getProfile(cb) {
         return this._request('GET', this.__getScopedUrl(''), null, cb);
      }

      /**
       * Gets the list of starred repositories for the user
       * @see https://developer.github.com/v3/activity/starring/#list-repositories-being-starred
       * @param {Requestable.callback} [cb] - will receive the list of starred repositories
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listStarredRepos',
      value: function listStarredRepos(cb) {
         var requestOptions = this._getOptionsWithDefaults();
         return this._requestAllPages(this.__getScopedUrl('starred'), requestOptions, cb);
      }

      /**
       * List email addresses for a user
       * @see https://developer.github.com/v3/users/emails/#list-email-addresses-for-a-user
       * @param {Requestable.callback} [cb] - will receive the list of emails
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getEmails',
      value: function getEmails(cb) {
         return this._request('GET', '/user/emails', null, cb);
      }

      /**
       * Have the authenticated user follow this user
       * @see https://developer.github.com/v3/users/followers/#follow-a-user
       * @param {string} username - the user to follow
       * @param {Requestable.callback} [cb] - will receive true if the request succeeds
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'follow',
      value: function follow(username, cb) {
         return this._request('PUT', '/user/following/' + this.__user, null, cb);
      }

      /**
       * Have the currently authenticated user unfollow this user
       * @see https://developer.github.com/v3/users/followers/#follow-a-user
       * @param {string} username - the user to unfollow
       * @param {Requestable.callback} [cb] - receives true if the request succeeds
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'unfollow',
      value: function unfollow(username, cb) {
         return this._request('DELETE', '/user/following/' + this.__user, null, cb);
      }

      /**
       * Create a new repository for the currently authenticated user
       * @see https://developer.github.com/v3/repos/#create
       * @param {object} options - the repository definition
       * @param {Requestable.callback} [cb] - will receive the API response
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'createRepo',
      value: function createRepo(options, cb) {
         return this._request('POST', '/user/repos', options, cb);
      }
   }]);

   return User;
}(_Requestable3.default);

module.exports = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVzZXIuanMiXSwibmFtZXMiOlsibG9nIiwiVXNlciIsInVzZXJuYW1lIiwiYXV0aCIsImFwaUJhc2UiLCJfX3VzZXIiLCJlbmRwb2ludCIsIm9wdGlvbnMiLCJjYiIsIl9nZXRPcHRpb25zV2l0aERlZmF1bHRzIiwiSlNPTiIsInN0cmluZ2lmeSIsIl9yZXF1ZXN0QWxsUGFnZXMiLCJfX2dldFNjb3BlZFVybCIsIl9yZXF1ZXN0Iiwic2luY2UiLCJfZGF0ZVRvSVNPIiwiYmVmb3JlIiwicmVxdWVzdE9wdGlvbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7O0FBT0E7Ozs7QUFDQTs7Ozs7Ozs7OzsrZUFSQTs7Ozs7OztBQVNBLElBQU1BLE1BQU0scUJBQU0sYUFBTixDQUFaOztBQUVBOzs7O0lBR01DLEk7OztBQUNIOzs7Ozs7QUFNQSxpQkFBWUMsUUFBWixFQUFzQkMsSUFBdEIsRUFBNEJDLE9BQTVCLEVBQXFDO0FBQUE7O0FBQUEsOEdBQzVCRCxJQUQ0QixFQUN0QkMsT0FEc0I7O0FBRWxDLFlBQUtDLE1BQUwsR0FBY0gsUUFBZDtBQUZrQztBQUdwQzs7QUFFRDs7Ozs7Ozs7OztxQ0FNZUksUSxFQUFVO0FBQ3RCLGFBQUksS0FBS0QsTUFBVCxFQUFpQjtBQUNkLG1CQUFPQyx1QkFDTSxLQUFLRCxNQURYLFNBQ3FCQyxRQURyQixlQUVNLEtBQUtELE1BRmxCO0FBS0YsVUFORCxNQU1PO0FBQUU7QUFDTixvQkFBUUMsUUFBUjtBQUNHLG9CQUFLLEVBQUw7QUFDRyx5QkFBTyxPQUFQOztBQUVILG9CQUFLLGVBQUw7QUFDQSxvQkFBSyxPQUFMO0FBQ0csK0JBQVdBLFFBQVg7O0FBRUg7QUFDRyxvQ0FBZ0JBLFFBQWhCO0FBVE47QUFXRjtBQUNIOztBQUVEOzs7Ozs7Ozs7O2dDQU9VQyxPLEVBQVNDLEUsRUFBSTtBQUNwQixhQUFJLE9BQU9ELE9BQVAsS0FBbUIsVUFBdkIsRUFBbUM7QUFDaENDLGlCQUFLRCxPQUFMO0FBQ0FBLHNCQUFVLEVBQVY7QUFDRjs7QUFFREEsbUJBQVUsS0FBS0UsdUJBQUwsQ0FBNkJGLE9BQTdCLENBQVY7O0FBRUFQLHNEQUEyQ1UsS0FBS0MsU0FBTCxDQUFlSixPQUFmLENBQTNDO0FBQ0EsZ0JBQU8sS0FBS0ssZ0JBQUwsQ0FBc0IsS0FBS0MsY0FBTCxDQUFvQixPQUFwQixDQUF0QixFQUFvRE4sT0FBcEQsRUFBNkRDLEVBQTdELENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7OytCQU1TQSxFLEVBQUk7QUFDVixnQkFBTyxLQUFLTSxRQUFMLENBQWMsS0FBZCxFQUFxQixLQUFLRCxjQUFMLENBQW9CLE1BQXBCLENBQXJCLEVBQWtELElBQWxELEVBQXdETCxFQUF4RCxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7OztnQ0FNVUEsRSxFQUFJO0FBQ1gsZ0JBQU8sS0FBS00sUUFBTCxDQUFjLEtBQWQsRUFBcUIsS0FBS0QsY0FBTCxDQUFvQixPQUFwQixDQUFyQixFQUFtRCxJQUFuRCxFQUF5REwsRUFBekQsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7O3dDQU9rQkQsTyxFQUFTQyxFLEVBQUk7QUFDNUJELG1CQUFVQSxXQUFXLEVBQXJCO0FBQ0EsYUFBSSxPQUFPQSxPQUFQLEtBQW1CLFVBQXZCLEVBQW1DO0FBQ2hDQyxpQkFBS0QsT0FBTDtBQUNBQSxzQkFBVSxFQUFWO0FBQ0Y7O0FBRURBLGlCQUFRUSxLQUFSLEdBQWdCLEtBQUtDLFVBQUwsQ0FBZ0JULFFBQVFRLEtBQXhCLENBQWhCO0FBQ0FSLGlCQUFRVSxNQUFSLEdBQWlCLEtBQUtELFVBQUwsQ0FBZ0JULFFBQVFVLE1BQXhCLENBQWpCOztBQUVBLGdCQUFPLEtBQUtILFFBQUwsQ0FBYyxLQUFkLEVBQXFCLEtBQUtELGNBQUwsQ0FBb0IsZUFBcEIsQ0FBckIsRUFBMkROLE9BQTNELEVBQW9FQyxFQUFwRSxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7OztpQ0FNV0EsRSxFQUFJO0FBQ1osZ0JBQU8sS0FBS00sUUFBTCxDQUFjLEtBQWQsRUFBcUIsS0FBS0QsY0FBTCxDQUFvQixFQUFwQixDQUFyQixFQUE4QyxJQUE5QyxFQUFvREwsRUFBcEQsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7dUNBTWlCQSxFLEVBQUk7QUFDbEIsYUFBSVUsaUJBQWlCLEtBQUtULHVCQUFMLEVBQXJCO0FBQ0EsZ0JBQU8sS0FBS0csZ0JBQUwsQ0FBc0IsS0FBS0MsY0FBTCxDQUFvQixTQUFwQixDQUF0QixFQUFzREssY0FBdEQsRUFBc0VWLEVBQXRFLENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7O2dDQU1VQSxFLEVBQUk7QUFDWCxnQkFBTyxLQUFLTSxRQUFMLENBQWMsS0FBZCxFQUFxQixjQUFyQixFQUFxQyxJQUFyQyxFQUEyQ04sRUFBM0MsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7OzZCQU9PTixRLEVBQVVNLEUsRUFBSTtBQUNsQixnQkFBTyxLQUFLTSxRQUFMLENBQWMsS0FBZCx1QkFBd0MsS0FBS1QsTUFBN0MsRUFBdUQsSUFBdkQsRUFBNkRHLEVBQTdELENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7OzsrQkFPU04sUSxFQUFVTSxFLEVBQUk7QUFDcEIsZ0JBQU8sS0FBS00sUUFBTCxDQUFjLFFBQWQsdUJBQTJDLEtBQUtULE1BQWhELEVBQTBELElBQTFELEVBQWdFRyxFQUFoRSxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7aUNBT1dELE8sRUFBU0MsRSxFQUFJO0FBQ3JCLGdCQUFPLEtBQUtNLFFBQUwsQ0FBYyxNQUFkLEVBQXNCLGFBQXRCLEVBQXFDUCxPQUFyQyxFQUE4Q0MsRUFBOUMsQ0FBUDtBQUNGOzs7Ozs7QUFHSlcsT0FBT0MsT0FBUCxHQUFpQm5CLElBQWpCIiwiZmlsZSI6IlVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlXG4gKiBAY29weXJpZ2h0ICAyMDEzIE1pY2hhZWwgQXVmcmVpdGVyIChEZXZlbG9wbWVudCBTZWVkKSBhbmQgMjAxNiBZYWhvbyBJbmMuXG4gKiBAbGljZW5zZSAgICBMaWNlbnNlZCB1bmRlciB7QGxpbmsgaHR0cHM6Ly9zcGR4Lm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2UtQ2xlYXIuaHRtbCBCU0QtMy1DbGF1c2UtQ2xlYXJ9LlxuICogICAgICAgICAgICAgR2l0aHViLmpzIGlzIGZyZWVseSBkaXN0cmlidXRhYmxlLlxuICovXG5cbmltcG9ydCBSZXF1ZXN0YWJsZSBmcm9tICcuL1JlcXVlc3RhYmxlJztcbmltcG9ydCBkZWJ1ZyBmcm9tICdkZWJ1Zyc7XG5jb25zdCBsb2cgPSBkZWJ1ZygnZ2l0aHViOnVzZXInKTtcblxuLyoqXG4gKiBBIFVzZXIgYWxsb3dzIHNjb3Bpbmcgb2YgQVBJIHJlcXVlc3RzIHRvIGEgcGFydGljdWxhciBHaXRodWIgdXNlci5cbiAqL1xuY2xhc3MgVXNlciBleHRlbmRzIFJlcXVlc3RhYmxlIHtcbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgVXNlci5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbdXNlcm5hbWVdIC0gdGhlIHVzZXIgdG8gdXNlIGZvciB1c2VyLXNjb3BlZCBxdWVyaWVzXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmF1dGh9IFthdXRoXSAtIGluZm9ybWF0aW9uIHJlcXVpcmVkIHRvIGF1dGhlbnRpY2F0ZSB0byBHaXRodWJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbYXBpQmFzZT1odHRwczovL2FwaS5naXRodWIuY29tXSAtIHRoZSBiYXNlIEdpdGh1YiBBUEkgVVJMXG4gICAgKi9cbiAgIGNvbnN0cnVjdG9yKHVzZXJuYW1lLCBhdXRoLCBhcGlCYXNlKSB7XG4gICAgICBzdXBlcihhdXRoLCBhcGlCYXNlKTtcbiAgICAgIHRoaXMuX191c2VyID0gdXNlcm5hbWU7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IHRoZSB1cmwgZm9yIHRoZSByZXF1ZXN0LiAoZGVwZW5kZW50IG9uIGlmIHdlJ3JlIHJlcXVlc3RpbmcgZm9yIHRoZSBhdXRoZW50aWNhdGVkIHVzZXIgb3Igbm90KVxuICAgICogQHByaXZhdGVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbmRwb2ludCAtIHRoZSBlbmRwb2ludCBiZWluZyByZXF1ZXN0ZWRcbiAgICAqIEByZXR1cm4ge3N0cmluZ30gLSB0aGUgcmVzb2x2ZWQgZW5kcG9pbnRcbiAgICAqL1xuICAgX19nZXRTY29wZWRVcmwoZW5kcG9pbnQpIHtcbiAgICAgIGlmICh0aGlzLl9fdXNlcikge1xuICAgICAgICAgcmV0dXJuIGVuZHBvaW50ID9cbiAgICAgICAgICAgIGAvdXNlcnMvJHt0aGlzLl9fdXNlcn0vJHtlbmRwb2ludH1gIDpcbiAgICAgICAgICAgIGAvdXNlcnMvJHt0aGlzLl9fdXNlcn1gXG4gICAgICAgICAgICA7XG5cbiAgICAgIH0gZWxzZSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgIHN3aXRjaCAoZW5kcG9pbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJyc6XG4gICAgICAgICAgICAgICByZXR1cm4gJy91c2VyJztcblxuICAgICAgICAgICAgY2FzZSAnbm90aWZpY2F0aW9ucyc6XG4gICAgICAgICAgICBjYXNlICdnaXN0cyc6XG4gICAgICAgICAgICAgICByZXR1cm4gYC8ke2VuZHBvaW50fWA7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICByZXR1cm4gYC91c2VyLyR7ZW5kcG9pbnR9YDtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IHRoZSB1c2VyJ3MgcmVwb3NpdG9yaWVzXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvI2xpc3QtdXNlci1yZXBvc2l0b3JpZXNcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gLSBhbnkgb3B0aW9ucyB0byByZWZpbmUgdGhlIHNlYXJjaFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiByZXBvc2l0b3JpZXNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdFJlcG9zKG9wdGlvbnMsIGNiKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgIGNiID0gb3B0aW9ucztcbiAgICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucyA9IHRoaXMuX2dldE9wdGlvbnNXaXRoRGVmYXVsdHMob3B0aW9ucyk7XG5cbiAgICAgIGxvZyhgRmV0Y2hpbmcgcmVwb3NpdG9yaWVzIHdpdGggb3B0aW9uczogJHtKU09OLnN0cmluZ2lmeShvcHRpb25zKX1gKTtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0QWxsUGFnZXModGhpcy5fX2dldFNjb3BlZFVybCgncmVwb3MnKSwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIExpc3QgdGhlIG9yZ3MgdGhhdCB0aGUgdXNlciBiZWxvbmdzIHRvXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvb3Jncy8jbGlzdC11c2VyLW9yZ2FuaXphdGlvbnNcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2Ygb3JnYW5pemF0aW9uc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBsaXN0T3JncyhjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIHRoaXMuX19nZXRTY29wZWRVcmwoJ29yZ3MnKSwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIExpc3QgdGhlIHVzZXIncyBnaXN0c1xuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2dpc3RzLyNsaXN0LWEtdXNlcnMtZ2lzdHNcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgZ2lzdHNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdEdpc3RzKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgdGhpcy5fX2dldFNjb3BlZFVybCgnZ2lzdHMnKSwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIExpc3QgdGhlIHVzZXIncyBub3RpZmljYXRpb25zXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvYWN0aXZpdHkvbm90aWZpY2F0aW9ucy8jbGlzdC15b3VyLW5vdGlmaWNhdGlvbnNcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gLSBhbnkgb3B0aW9ucyB0byByZWZpbmUgdGhlIHNlYXJjaFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiByZXBvc2l0b3JpZXNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdE5vdGlmaWNhdGlvbnMob3B0aW9ucywgY2IpIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICBjYiA9IG9wdGlvbnM7XG4gICAgICAgICBvcHRpb25zID0ge307XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMuc2luY2UgPSB0aGlzLl9kYXRlVG9JU08ob3B0aW9ucy5zaW5jZSk7XG4gICAgICBvcHRpb25zLmJlZm9yZSA9IHRoaXMuX2RhdGVUb0lTTyhvcHRpb25zLmJlZm9yZSk7XG5cbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCB0aGlzLl9fZ2V0U2NvcGVkVXJsKCdub3RpZmljYXRpb25zJyksIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBTaG93IHRoZSB1c2VyJ3MgcHJvZmlsZVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3VzZXJzLyNnZXQtYS1zaW5nbGUtdXNlclxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgdXNlcidzIGluZm9ybWF0aW9uXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldFByb2ZpbGUoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCB0aGlzLl9fZ2V0U2NvcGVkVXJsKCcnKSwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldHMgdGhlIGxpc3Qgb2Ygc3RhcnJlZCByZXBvc2l0b3JpZXMgZm9yIHRoZSB1c2VyXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvYWN0aXZpdHkvc3RhcnJpbmcvI2xpc3QtcmVwb3NpdG9yaWVzLWJlaW5nLXN0YXJyZWRcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2Ygc3RhcnJlZCByZXBvc2l0b3JpZXNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdFN0YXJyZWRSZXBvcyhjYikge1xuICAgICAgbGV0IHJlcXVlc3RPcHRpb25zID0gdGhpcy5fZ2V0T3B0aW9uc1dpdGhEZWZhdWx0cygpO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RBbGxQYWdlcyh0aGlzLl9fZ2V0U2NvcGVkVXJsKCdzdGFycmVkJyksIHJlcXVlc3RPcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCBlbWFpbCBhZGRyZXNzZXMgZm9yIGEgdXNlclxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3VzZXJzL2VtYWlscy8jbGlzdC1lbWFpbC1hZGRyZXNzZXMtZm9yLWEtdXNlclxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiBlbWFpbHNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0RW1haWxzKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgJy91c2VyL2VtYWlscycsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBIYXZlIHRoZSBhdXRoZW50aWNhdGVkIHVzZXIgZm9sbG93IHRoaXMgdXNlclxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3VzZXJzL2ZvbGxvd2Vycy8jZm9sbG93LWEtdXNlclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJuYW1lIC0gdGhlIHVzZXIgdG8gZm9sbG93XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRydWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZHNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZm9sbG93KHVzZXJuYW1lLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BVVCcsIGAvdXNlci9mb2xsb3dpbmcvJHt0aGlzLl9fdXNlcn1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogSGF2ZSB0aGUgY3VycmVudGx5IGF1dGhlbnRpY2F0ZWQgdXNlciB1bmZvbGxvdyB0aGlzIHVzZXJcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My91c2Vycy9mb2xsb3dlcnMvI2ZvbGxvdy1hLXVzZXJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VybmFtZSAtIHRoZSB1c2VyIHRvIHVuZm9sbG93XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gcmVjZWl2ZXMgdHJ1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICB1bmZvbGxvdyh1c2VybmFtZSwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdERUxFVEUnLCBgL3VzZXIvZm9sbG93aW5nLyR7dGhpcy5fX3VzZXJ9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyByZXBvc2l0b3J5IGZvciB0aGUgY3VycmVudGx5IGF1dGhlbnRpY2F0ZWQgdXNlclxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zLyNjcmVhdGVcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gdGhlIHJlcG9zaXRvcnkgZGVmaW5pdGlvblxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgQVBJIHJlc3BvbnNlXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNyZWF0ZVJlcG8ob3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQT1NUJywgJy91c2VyL3JlcG9zJywgb3B0aW9ucywgY2IpO1xuICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXI7XG4iXX0=
//# sourceMappingURL=User.js.map


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Requestable2 = __webpack_require__(1);

var _Requestable3 = _interopRequireDefault(_Requestable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2013 Michael Aufreiter (Development Seed) and 2016 Yahoo Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under {@link https://spdx.org/licenses/BSD-3-Clause-Clear.html BSD-3-Clause-Clear}.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * Issue wraps the functionality to get issues for repositories
 */
var Issue = function (_Requestable) {
  _inherits(Issue, _Requestable);

  /**
   * Create a new Issue
   * @param {string} repository - the full name of the repository (`:user/:repo`) to get issues for
   * @param {Requestable.auth} [auth] - information required to authenticate to Github
   * @param {string} [apiBase=https://api.github.com] - the base Github API URL
   */
  function Issue(repository, auth, apiBase) {
    _classCallCheck(this, Issue);

    var _this = _possibleConstructorReturn(this, (Issue.__proto__ || Object.getPrototypeOf(Issue)).call(this, auth, apiBase));

    _this.__repository = repository;
    return _this;
  }

  /**
   * Create a new issue
   * @see https://developer.github.com/v3/issues/#create-an-issue
   * @param {Object} issueData - the issue to create
   * @param {Requestable.callback} [cb] - will receive the created issue
   * @return {Promise} - the promise for the http request
   */


  _createClass(Issue, [{
    key: 'createIssue',
    value: function createIssue(issueData, cb) {
      return this._request('POST', '/repos/' + this.__repository + '/issues', issueData, cb);
    }

    /**
     * List the issues for the repository
     * @see https://developer.github.com/v3/issues/#list-issues-for-a-repository
     * @param {Object} options - filtering options
     * @param {Requestable.callback} [cb] - will receive the array of issues
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'listIssues',
    value: function listIssues(options, cb) {
      return this._requestAllPages('/repos/' + this.__repository + '/issues', options, cb);
    }

    /**
     * List the events for an issue
     * @see https://developer.github.com/v3/issues/events/#list-events-for-an-issue
     * @param {number} issue - the issue to get events for
     * @param {Requestable.callback} [cb] - will receive the list of events
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'listIssueEvents',
    value: function listIssueEvents(issue, cb) {
      return this._request('GET', '/repos/' + this.__repository + '/issues/' + issue + '/events', null, cb);
    }

    /**
     * List comments on an issue
     * @see https://developer.github.com/v3/issues/comments/#list-comments-on-an-issue
     * @param {number} issue - the id of the issue to get comments from
     * @param {Requestable.callback} [cb] - will receive the comments
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'listIssueComments',
    value: function listIssueComments(issue, cb) {
      return this._request('GET', '/repos/' + this.__repository + '/issues/' + issue + '/comments', null, cb);
    }

    /**
     * Get a single comment on an issue
     * @see https://developer.github.com/v3/issues/comments/#get-a-single-comment
     * @param {number} id - the comment id to get
     * @param {Requestable.callback} [cb] - will receive the comment
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'getIssueComment',
    value: function getIssueComment(id, cb) {
      return this._request('GET', '/repos/' + this.__repository + '/issues/comments/' + id, null, cb);
    }

    /**
     * Comment on an issue
     * @see https://developer.github.com/v3/issues/comments/#create-a-comment
     * @param {number} issue - the id of the issue to comment on
     * @param {string} comment - the comment to add
     * @param {Requestable.callback} [cb] - will receive the created comment
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'createIssueComment',
    value: function createIssueComment(issue, comment, cb) {
      return this._request('POST', '/repos/' + this.__repository + '/issues/' + issue + '/comments', { body: comment }, cb);
    }

    /**
     * Edit a comment on an issue
     * @see https://developer.github.com/v3/issues/comments/#edit-a-comment
     * @param {number} id - the comment id to edit
     * @param {string} comment - the comment to edit
     * @param {Requestable.callback} [cb] - will receive the edited comment
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'editIssueComment',
    value: function editIssueComment(id, comment, cb) {
      return this._request('PATCH', '/repos/' + this.__repository + '/issues/comments/' + id, { body: comment }, cb);
    }

    /**
     * Delete a comment on an issue
     * @see https://developer.github.com/v3/issues/comments/#delete-a-comment
     * @param {number} id - the comment id to delete
     * @param {Requestable.callback} [cb] - will receive true if the request is successful
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'deleteIssueComment',
    value: function deleteIssueComment(id, cb) {
      return this._request('DELETE', '/repos/' + this.__repository + '/issues/comments/' + id, null, cb);
    }

    /**
     * Edit an issue
     * @see https://developer.github.com/v3/issues/#edit-an-issue
     * @param {number} issue - the issue number to edit
     * @param {Object} issueData - the new issue data
     * @param {Requestable.callback} [cb] - will receive the modified issue
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'editIssue',
    value: function editIssue(issue, issueData, cb) {
      return this._request('PATCH', '/repos/' + this.__repository + '/issues/' + issue, issueData, cb);
    }

    /**
     * Get a particular issue
     * @see https://developer.github.com/v3/issues/#get-a-single-issue
     * @param {number} issue - the issue number to fetch
     * @param {Requestable.callback} [cb] - will receive the issue
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'getIssue',
    value: function getIssue(issue, cb) {
      return this._request('GET', '/repos/' + this.__repository + '/issues/' + issue, null, cb);
    }

    /**
     * List the milestones for the repository
     * @see https://developer.github.com/v3/issues/milestones/#list-milestones-for-a-repository
     * @param {Object} options - filtering options
     * @param {Requestable.callback} [cb] - will receive the array of milestones
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'listMilestones',
    value: function listMilestones(options, cb) {
      return this._request('GET', '/repos/' + this.__repository + '/milestones', options, cb);
    }

    /**
     * Get a milestone
     * @see https://developer.github.com/v3/issues/milestones/#get-a-single-milestone
     * @param {string} milestone - the id of the milestone to fetch
     * @param {Requestable.callback} [cb] - will receive the milestone
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'getMilestone',
    value: function getMilestone(milestone, cb) {
      return this._request('GET', '/repos/' + this.__repository + '/milestones/' + milestone, null, cb);
    }

    /**
     * Create a new milestone
     * @see https://developer.github.com/v3/issues/milestones/#create-a-milestone
     * @param {Object} milestoneData - the milestone definition
     * @param {Requestable.callback} [cb] - will receive the milestone
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'createMilestone',
    value: function createMilestone(milestoneData, cb) {
      return this._request('POST', '/repos/' + this.__repository + '/milestones', milestoneData, cb);
    }

    /**
     * Edit a milestone
     * @see https://developer.github.com/v3/issues/milestones/#update-a-milestone
     * @param {string} milestone - the id of the milestone to edit
     * @param {Object} milestoneData - the updates to make to the milestone
     * @param {Requestable.callback} [cb] - will receive the updated milestone
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'editMilestone',
    value: function editMilestone(milestone, milestoneData, cb) {
      return this._request('PATCH', '/repos/' + this.__repository + '/milestones/' + milestone, milestoneData, cb);
    }

    /**
     * Delete a milestone (this is distinct from closing a milestone)
     * @see https://developer.github.com/v3/issues/milestones/#delete-a-milestone
     * @param {string} milestone - the id of the milestone to delete
     * @param {Requestable.callback} [cb] - will receive the status
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'deleteMilestone',
    value: function deleteMilestone(milestone, cb) {
      return this._request('DELETE', '/repos/' + this.__repository + '/milestones/' + milestone, null, cb);
    }

    /**
     * Create a new label
     * @see https://developer.github.com/v3/issues/labels/#create-a-label
     * @param {Object} labelData - the label definition
     * @param {Requestable.callback} [cb] - will receive the object representing the label
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'createLabel',
    value: function createLabel(labelData, cb) {
      return this._request('POST', '/repos/' + this.__repository + '/labels', labelData, cb);
    }

    /**
     * List the labels for the repository
     * @see https://developer.github.com/v3/issues/labels/#list-all-labels-for-this-repository
     * @param {Object} options - filtering options
     * @param {Requestable.callback} [cb] - will receive the array of labels
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'listLabels',
    value: function listLabels(options, cb) {
      return this._request('GET', '/repos/' + this.__repository + '/labels', options, cb);
    }

    /**
     * Get a label
     * @see https://developer.github.com/v3/issues/labels/#get-a-single-label
     * @param {string} label - the name of the label to fetch
     * @param {Requestable.callback} [cb] - will receive the label
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'getLabel',
    value: function getLabel(label, cb) {
      return this._request('GET', '/repos/' + this.__repository + '/labels/' + label, null, cb);
    }

    /**
     * Edit a label
     * @see https://developer.github.com/v3/issues/labels/#update-a-label
     * @param {string} label - the name of the label to edit
     * @param {Object} labelData - the updates to make to the label
     * @param {Requestable.callback} [cb] - will receive the updated label
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'editLabel',
    value: function editLabel(label, labelData, cb) {
      return this._request('PATCH', '/repos/' + this.__repository + '/labels/' + label, labelData, cb);
    }

    /**
     * Delete a label
     * @see https://developer.github.com/v3/issues/labels/#delete-a-label
     * @param {string} label - the name of the label to delete
     * @param {Requestable.callback} [cb] - will receive the status
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'deleteLabel',
    value: function deleteLabel(label, cb) {
      return this._request('DELETE', '/repos/' + this.__repository + '/labels/' + label, null, cb);
    }
  }]);

  return Issue;
}(_Requestable3.default);

module.exports = Issue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklzc3VlLmpzIl0sIm5hbWVzIjpbIklzc3VlIiwicmVwb3NpdG9yeSIsImF1dGgiLCJhcGlCYXNlIiwiX19yZXBvc2l0b3J5IiwiaXNzdWVEYXRhIiwiY2IiLCJfcmVxdWVzdCIsIm9wdGlvbnMiLCJfcmVxdWVzdEFsbFBhZ2VzIiwiaXNzdWUiLCJpZCIsImNvbW1lbnQiLCJib2R5IiwibWlsZXN0b25lIiwibWlsZXN0b25lRGF0YSIsImxhYmVsRGF0YSIsImxhYmVsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7OztBQU9BOzs7Ozs7Ozs7OytlQVBBOzs7Ozs7O0FBU0E7OztJQUdNQSxLOzs7QUFDSDs7Ozs7O0FBTUEsaUJBQVlDLFVBQVosRUFBd0JDLElBQXhCLEVBQThCQyxPQUE5QixFQUF1QztBQUFBOztBQUFBLDhHQUM5QkQsSUFEOEIsRUFDeEJDLE9BRHdCOztBQUVwQyxVQUFLQyxZQUFMLEdBQW9CSCxVQUFwQjtBQUZvQztBQUd0Qzs7QUFFRDs7Ozs7Ozs7Ozs7Z0NBT1lJLFMsRUFBV0MsRSxFQUFJO0FBQ3hCLGFBQU8sS0FBS0MsUUFBTCxDQUFjLE1BQWQsY0FBZ0MsS0FBS0gsWUFBckMsY0FBNERDLFNBQTVELEVBQXVFQyxFQUF2RSxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7K0JBT1dFLE8sRUFBU0YsRSxFQUFJO0FBQ3JCLGFBQU8sS0FBS0csZ0JBQUwsYUFBZ0MsS0FBS0wsWUFBckMsY0FBNERJLE9BQTVELEVBQXFFRixFQUFyRSxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7b0NBT2dCSSxLLEVBQU9KLEUsRUFBSTtBQUN4QixhQUFPLEtBQUtDLFFBQUwsQ0FBYyxLQUFkLGNBQStCLEtBQUtILFlBQXBDLGdCQUEyRE0sS0FBM0QsY0FBMkUsSUFBM0UsRUFBaUZKLEVBQWpGLENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7OztzQ0FPa0JJLEssRUFBT0osRSxFQUFJO0FBQzFCLGFBQU8sS0FBS0MsUUFBTCxDQUFjLEtBQWQsY0FB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QWMsS0FBZCxjQUErQixLQUFLSCxZQUFwQyxjQUEyREksT0FBM0QsRUFBb0VGLEVBQXBFLENBQVA7QUFDRjs7QUFFRjs7Ozs7Ozs7Ozs2QkFPVVcsSyxFQUFPWCxFLEVBQUk7QUFDakIsYUFBTyxLQUFLQyxRQUFMLENBQWMsS0FBZCxjQUErQixLQUFLSCxZQUFwQyxnQkFBMkRhLEtBQTNELEVBQW9FLElBQXBFLEVBQTBFWCxFQUExRSxDQUFQO0FBQ0Y7O0FBRUY7Ozs7Ozs7Ozs7OzhCQVFXVyxLLEVBQU9ELFMsRUFBV1YsRSxFQUFJO0FBQzdCLGFBQU8sS0FBS0MsUUFBTCxDQUFjLE9BQWQsY0FBaUMsS0FBS0gsWUFBdEMsZ0JBQTZEYSxLQUE3RCxFQUFzRUQsU0FBdEUsRUFBaUZWLEVBQWpGLENBQVA7QUFDRjs7QUFFRjs7Ozs7Ozs7OztnQ0FPYVcsSyxFQUFPWCxFLEVBQUk7QUFDcEIsYUFBTyxLQUFLQyxRQUFMLENBQWMsUUFBZCxjQUFrQyxLQUFLSCxZQUF2QyxnQkFBOERhLEtBQTlELEVBQXVFLElBQXZFLEVBQTZFWCxFQUE3RSxDQUFQO0FBQ0Y7Ozs7OztBQUdKWSxPQUFPQyxPQUFQLEdBQWlCbkIsS0FBakIiLCJmaWxlIjoiSXNzdWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlXG4gKiBAY29weXJpZ2h0ICAyMDEzIE1pY2hhZWwgQXVmcmVpdGVyIChEZXZlbG9wbWVudCBTZWVkKSBhbmQgMjAxNiBZYWhvbyBJbmMuXG4gKiBAbGljZW5zZSAgICBMaWNlbnNlZCB1bmRlciB7QGxpbmsgaHR0cHM6Ly9zcGR4Lm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2UtQ2xlYXIuaHRtbCBCU0QtMy1DbGF1c2UtQ2xlYXJ9LlxuICogICAgICAgICAgICAgR2l0aHViLmpzIGlzIGZyZWVseSBkaXN0cmlidXRhYmxlLlxuICovXG5cbmltcG9ydCBSZXF1ZXN0YWJsZSBmcm9tICcuL1JlcXVlc3RhYmxlJztcblxuLyoqXG4gKiBJc3N1ZSB3cmFwcyB0aGUgZnVuY3Rpb25hbGl0eSB0byBnZXQgaXNzdWVzIGZvciByZXBvc2l0b3JpZXNcbiAqL1xuY2xhc3MgSXNzdWUgZXh0ZW5kcyBSZXF1ZXN0YWJsZSB7XG4gICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBJc3N1ZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IHJlcG9zaXRvcnkgLSB0aGUgZnVsbCBuYW1lIG9mIHRoZSByZXBvc2l0b3J5IChgOnVzZXIvOnJlcG9gKSB0byBnZXQgaXNzdWVzIGZvclxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5hdXRofSBbYXV0aF0gLSBpbmZvcm1hdGlvbiByZXF1aXJlZCB0byBhdXRoZW50aWNhdGUgdG8gR2l0aHViXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2FwaUJhc2U9aHR0cHM6Ly9hcGkuZ2l0aHViLmNvbV0gLSB0aGUgYmFzZSBHaXRodWIgQVBJIFVSTFxuICAgICovXG4gICBjb25zdHJ1Y3RvcihyZXBvc2l0b3J5LCBhdXRoLCBhcGlCYXNlKSB7XG4gICAgICBzdXBlcihhdXRoLCBhcGlCYXNlKTtcbiAgICAgIHRoaXMuX19yZXBvc2l0b3J5ID0gcmVwb3NpdG9yeTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgaXNzdWVcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9pc3N1ZXMvI2NyZWF0ZS1hbi1pc3N1ZVxuICAgICogQHBhcmFtIHtPYmplY3R9IGlzc3VlRGF0YSAtIHRoZSBpc3N1ZSB0byBjcmVhdGVcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGNyZWF0ZWQgaXNzdWVcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgY3JlYXRlSXNzdWUoaXNzdWVEYXRhLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL3JlcG9zLyR7dGhpcy5fX3JlcG9zaXRvcnl9L2lzc3Vlc2AsIGlzc3VlRGF0YSwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIExpc3QgdGhlIGlzc3VlcyBmb3IgdGhlIHJlcG9zaXRvcnlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9pc3N1ZXMvI2xpc3QtaXNzdWVzLWZvci1hLXJlcG9zaXRvcnlcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gZmlsdGVyaW5nIG9wdGlvbnNcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGFycmF5IG9mIGlzc3Vlc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBsaXN0SXNzdWVzKG9wdGlvbnMsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdEFsbFBhZ2VzKGAvcmVwb3MvJHt0aGlzLl9fcmVwb3NpdG9yeX0vaXNzdWVzYCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIExpc3QgdGhlIGV2ZW50cyBmb3IgYW4gaXNzdWVcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9pc3N1ZXMvZXZlbnRzLyNsaXN0LWV2ZW50cy1mb3ItYW4taXNzdWVcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBpc3N1ZSAtIHRoZSBpc3N1ZSB0byBnZXQgZXZlbnRzIGZvclxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiBldmVudHNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdElzc3VlRXZlbnRzKGlzc3VlLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fcmVwb3NpdG9yeX0vaXNzdWVzLyR7aXNzdWV9L2V2ZW50c2AsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IGNvbW1lbnRzIG9uIGFuIGlzc3VlXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvaXNzdWVzL2NvbW1lbnRzLyNsaXN0LWNvbW1lbnRzLW9uLWFuLWlzc3VlXG4gICAgKiBAcGFyYW0ge251bWJlcn0gaXNzdWUgLSB0aGUgaWQgb2YgdGhlIGlzc3VlIHRvIGdldCBjb21tZW50cyBmcm9tXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBjb21tZW50c1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBsaXN0SXNzdWVDb21tZW50cyhpc3N1ZSwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX3JlcG9zaXRvcnl9L2lzc3Vlcy8ke2lzc3VlfS9jb21tZW50c2AsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgYSBzaW5nbGUgY29tbWVudCBvbiBhbiBpc3N1ZVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2lzc3Vlcy9jb21tZW50cy8jZ2V0LWEtc2luZ2xlLWNvbW1lbnRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBpZCAtIHRoZSBjb21tZW50IGlkIHRvIGdldFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgY29tbWVudFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRJc3N1ZUNvbW1lbnQoaWQsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19yZXBvc2l0b3J5fS9pc3N1ZXMvY29tbWVudHMvJHtpZH1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ29tbWVudCBvbiBhbiBpc3N1ZVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2lzc3Vlcy9jb21tZW50cy8jY3JlYXRlLWEtY29tbWVudFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGlzc3VlIC0gdGhlIGlkIG9mIHRoZSBpc3N1ZSB0byBjb21tZW50IG9uXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gY29tbWVudCAtIHRoZSBjb21tZW50IHRvIGFkZFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgY3JlYXRlZCBjb21tZW50XG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNyZWF0ZUlzc3VlQ29tbWVudChpc3N1ZSwgY29tbWVudCwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQT1NUJywgYC9yZXBvcy8ke3RoaXMuX19yZXBvc2l0b3J5fS9pc3N1ZXMvJHtpc3N1ZX0vY29tbWVudHNgLCB7Ym9keTogY29tbWVudH0sIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBFZGl0IGEgY29tbWVudCBvbiBhbiBpc3N1ZVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2lzc3Vlcy9jb21tZW50cy8jZWRpdC1hLWNvbW1lbnRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBpZCAtIHRoZSBjb21tZW50IGlkIHRvIGVkaXRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb21tZW50IC0gdGhlIGNvbW1lbnQgdG8gZWRpdFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgZWRpdGVkIGNvbW1lbnRcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZWRpdElzc3VlQ29tbWVudChpZCwgY29tbWVudCwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQQVRDSCcsIGAvcmVwb3MvJHt0aGlzLl9fcmVwb3NpdG9yeX0vaXNzdWVzL2NvbW1lbnRzLyR7aWR9YCwge2JvZHk6IGNvbW1lbnR9LCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRGVsZXRlIGEgY29tbWVudCBvbiBhbiBpc3N1ZVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2lzc3Vlcy9jb21tZW50cy8jZGVsZXRlLWEtY29tbWVudFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGlkIC0gdGhlIGNvbW1lbnQgaWQgdG8gZGVsZXRlXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRydWUgaWYgdGhlIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBkZWxldGVJc3N1ZUNvbW1lbnQoaWQsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnREVMRVRFJywgYC9yZXBvcy8ke3RoaXMuX19yZXBvc2l0b3J5fS9pc3N1ZXMvY29tbWVudHMvJHtpZH1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRWRpdCBhbiBpc3N1ZVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2lzc3Vlcy8jZWRpdC1hbi1pc3N1ZVxuICAgICogQHBhcmFtIHtudW1iZXJ9IGlzc3VlIC0gdGhlIGlzc3VlIG51bWJlciB0byBlZGl0XG4gICAgKiBAcGFyYW0ge09iamVjdH0gaXNzdWVEYXRhIC0gdGhlIG5ldyBpc3N1ZSBkYXRhXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBtb2RpZmllZCBpc3N1ZVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBlZGl0SXNzdWUoaXNzdWUsIGlzc3VlRGF0YSwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQQVRDSCcsIGAvcmVwb3MvJHt0aGlzLl9fcmVwb3NpdG9yeX0vaXNzdWVzLyR7aXNzdWV9YCwgaXNzdWVEYXRhLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IGEgcGFydGljdWxhciBpc3N1ZVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2lzc3Vlcy8jZ2V0LWEtc2luZ2xlLWlzc3VlXG4gICAgKiBAcGFyYW0ge251bWJlcn0gaXNzdWUgLSB0aGUgaXNzdWUgbnVtYmVyIHRvIGZldGNoXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBpc3N1ZVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRJc3N1ZShpc3N1ZSwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX3JlcG9zaXRvcnl9L2lzc3Vlcy8ke2lzc3VlfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IHRoZSBtaWxlc3RvbmVzIGZvciB0aGUgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2lzc3Vlcy9taWxlc3RvbmVzLyNsaXN0LW1pbGVzdG9uZXMtZm9yLWEtcmVwb3NpdG9yeVxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBmaWx0ZXJpbmcgb3B0aW9uc1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgYXJyYXkgb2YgbWlsZXN0b25lc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBsaXN0TWlsZXN0b25lcyhvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fcmVwb3NpdG9yeX0vbWlsZXN0b25lc2AsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgYSBtaWxlc3RvbmVcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9pc3N1ZXMvbWlsZXN0b25lcy8jZ2V0LWEtc2luZ2xlLW1pbGVzdG9uZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IG1pbGVzdG9uZSAtIHRoZSBpZCBvZiB0aGUgbWlsZXN0b25lIHRvIGZldGNoXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBtaWxlc3RvbmVcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0TWlsZXN0b25lKG1pbGVzdG9uZSwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX3JlcG9zaXRvcnl9L21pbGVzdG9uZXMvJHttaWxlc3RvbmV9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBtaWxlc3RvbmVcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9pc3N1ZXMvbWlsZXN0b25lcy8jY3JlYXRlLWEtbWlsZXN0b25lXG4gICAgKiBAcGFyYW0ge09iamVjdH0gbWlsZXN0b25lRGF0YSAtIHRoZSBtaWxlc3RvbmUgZGVmaW5pdGlvblxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbWlsZXN0b25lXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNyZWF0ZU1pbGVzdG9uZShtaWxlc3RvbmVEYXRhLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL3JlcG9zLyR7dGhpcy5fX3JlcG9zaXRvcnl9L21pbGVzdG9uZXNgLCBtaWxlc3RvbmVEYXRhLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRWRpdCBhIG1pbGVzdG9uZVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2lzc3Vlcy9taWxlc3RvbmVzLyN1cGRhdGUtYS1taWxlc3RvbmVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBtaWxlc3RvbmUgLSB0aGUgaWQgb2YgdGhlIG1pbGVzdG9uZSB0byBlZGl0XG4gICAgKiBAcGFyYW0ge09iamVjdH0gbWlsZXN0b25lRGF0YSAtIHRoZSB1cGRhdGVzIHRvIG1ha2UgdG8gdGhlIG1pbGVzdG9uZVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgdXBkYXRlZCBtaWxlc3RvbmVcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZWRpdE1pbGVzdG9uZShtaWxlc3RvbmUsIG1pbGVzdG9uZURhdGEsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUEFUQ0gnLCBgL3JlcG9zLyR7dGhpcy5fX3JlcG9zaXRvcnl9L21pbGVzdG9uZXMvJHttaWxlc3RvbmV9YCwgbWlsZXN0b25lRGF0YSwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIERlbGV0ZSBhIG1pbGVzdG9uZSAodGhpcyBpcyBkaXN0aW5jdCBmcm9tIGNsb3NpbmcgYSBtaWxlc3RvbmUpXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvaXNzdWVzL21pbGVzdG9uZXMvI2RlbGV0ZS1hLW1pbGVzdG9uZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IG1pbGVzdG9uZSAtIHRoZSBpZCBvZiB0aGUgbWlsZXN0b25lIHRvIGRlbGV0ZVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgc3RhdHVzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGRlbGV0ZU1pbGVzdG9uZShtaWxlc3RvbmUsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnREVMRVRFJywgYC9yZXBvcy8ke3RoaXMuX19yZXBvc2l0b3J5fS9taWxlc3RvbmVzLyR7bWlsZXN0b25lfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgbGFiZWxcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9pc3N1ZXMvbGFiZWxzLyNjcmVhdGUtYS1sYWJlbFxuICAgICogQHBhcmFtIHtPYmplY3R9IGxhYmVsRGF0YSAtIHRoZSBsYWJlbCBkZWZpbml0aW9uXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBsYWJlbFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBjcmVhdGVMYWJlbChsYWJlbERhdGEsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUE9TVCcsIGAvcmVwb3MvJHt0aGlzLl9fcmVwb3NpdG9yeX0vbGFiZWxzYCwgbGFiZWxEYXRhLCBjYik7XG4gICB9XG5cbiAgLyoqXG4gICAqIExpc3QgdGhlIGxhYmVscyBmb3IgdGhlIHJlcG9zaXRvcnlcbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2lzc3Vlcy9sYWJlbHMvI2xpc3QtYWxsLWxhYmVscy1mb3ItdGhpcy1yZXBvc2l0b3J5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gZmlsdGVyaW5nIG9wdGlvbnNcbiAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgYXJyYXkgb2YgbGFiZWxzXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICovXG4gICBsaXN0TGFiZWxzKG9wdGlvbnMsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19yZXBvc2l0b3J5fS9sYWJlbHNgLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGxhYmVsXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9pc3N1ZXMvbGFiZWxzLyNnZXQtYS1zaW5nbGUtbGFiZWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIC0gdGhlIG5hbWUgb2YgdGhlIGxhYmVsIHRvIGZldGNoXG4gICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGxhYmVsXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICovXG4gICBnZXRMYWJlbChsYWJlbCwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX3JlcG9zaXRvcnl9L2xhYmVscy8ke2xhYmVsfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAvKipcbiAgICogRWRpdCBhIGxhYmVsXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9pc3N1ZXMvbGFiZWxzLyN1cGRhdGUtYS1sYWJlbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgLSB0aGUgbmFtZSBvZiB0aGUgbGFiZWwgdG8gZWRpdFxuICAgKiBAcGFyYW0ge09iamVjdH0gbGFiZWxEYXRhIC0gdGhlIHVwZGF0ZXMgdG8gbWFrZSB0byB0aGUgbGFiZWxcbiAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgdXBkYXRlZCBsYWJlbFxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAqL1xuICAgZWRpdExhYmVsKGxhYmVsLCBsYWJlbERhdGEsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUEFUQ0gnLCBgL3JlcG9zLyR7dGhpcy5fX3JlcG9zaXRvcnl9L2xhYmVscy8ke2xhYmVsfWAsIGxhYmVsRGF0YSwgY2IpO1xuICAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYSBsYWJlbFxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvaXNzdWVzL2xhYmVscy8jZGVsZXRlLWEtbGFiZWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIC0gdGhlIG5hbWUgb2YgdGhlIGxhYmVsIHRvIGRlbGV0ZVxuICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBzdGF0dXNcbiAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgKi9cbiAgIGRlbGV0ZUxhYmVsKGxhYmVsLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0RFTEVURScsIGAvcmVwb3MvJHt0aGlzLl9fcmVwb3NpdG9yeX0vbGFiZWxzLyR7bGFiZWx9YCwgbnVsbCwgY2IpO1xuICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IElzc3VlO1xuIl19
//# sourceMappingURL=Issue.js.map


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Requestable2 = __webpack_require__(1);

var _Requestable3 = _interopRequireDefault(_Requestable2);

var _debug = __webpack_require__(2);

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2013 Michael Aufreiter (Development Seed) and 2016 Yahoo Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under {@link https://spdx.org/licenses/BSD-3-Clause-Clear.html BSD-3-Clause-Clear}.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var log = (0, _debug2.default)('github:search');

/**
 * Wrap the Search API
 */

var Search = function (_Requestable) {
  _inherits(Search, _Requestable);

  /**
   * Create a Search
   * @param {Object} defaults - defaults for the search
   * @param {Requestable.auth} [auth] - information required to authenticate to Github
   * @param {string} [apiBase=https://api.github.com] - the base Github API URL
   */
  function Search(defaults, auth, apiBase) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, auth, apiBase));

    _this.__defaults = _this._getOptionsWithDefaults(defaults);
    return _this;
  }

  /**
   * Available search options
   * @see https://developer.github.com/v3/search/#parameters
   * @typedef {Object} Search.Params
   * @param {string} q - the query to make
   * @param {string} sort - the sort field, one of `stars`, `forks`, or `updated`.
   *                      Default is [best match](https://developer.github.com/v3/search/#ranking-search-results)
   * @param {string} order - the ordering, either `asc` or `desc`
   */
  /**
   * Perform a search on the GitHub API
   * @private
   * @param {string} path - the scope of the search
   * @param {Search.Params} [withOptions] - additional parameters for the search
   * @param {Requestable.callback} [cb] - will receive the results of the search
   * @return {Promise} - the promise for the http request
   */


  _createClass(Search, [{
    key: '_search',
    value: function _search(path) {
      var _this2 = this;

      var withOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

      var requestOptions = {};
      Object.keys(this.__defaults).forEach(function (prop) {
        requestOptions[prop] = _this2.__defaults[prop];
      });
      Object.keys(withOptions).forEach(function (prop) {
        requestOptions[prop] = withOptions[prop];
      });

      log('searching ' + path + ' with options:', requestOptions);
      return this._requestAllPages('/search/' + path, requestOptions, cb);
    }

    /**
     * Search for repositories
     * @see https://developer.github.com/v3/search/#search-repositories
     * @param {Search.Params} [options] - additional parameters for the search
     * @param {Requestable.callback} [cb] - will receive the results of the search
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'forRepositories',
    value: function forRepositories(options, cb) {
      return this._search('repositories', options, cb);
    }

    /**
     * Search for code
     * @see https://developer.github.com/v3/search/#search-code
     * @param {Search.Params} [options] - additional parameters for the search
     * @param {Requestable.callback} [cb] - will receive the results of the search
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'forCode',
    value: function forCode(options, cb) {
      return this._search('code', options, cb);
    }

    /**
     * Search for issues
     * @see https://developer.github.com/v3/search/#search-issues
     * @param {Search.Params} [options] - additional parameters for the search
     * @param {Requestable.callback} [cb] - will receive the results of the search
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'forIssues',
    value: function forIssues(options, cb) {
      return this._search('issues', options, cb);
    }

    /**
     * Search for users
     * @see https://developer.github.com/v3/search/#search-users
     * @param {Search.Params} [options] - additional parameters for the search
     * @param {Requestable.callback} [cb] - will receive the results of the search
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'forUsers',
    value: function forUsers(options, cb) {
      return this._search('users', options, cb);
    }
  }]);

  return Search;
}(_Requestable3.default);

module.exports = Search;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlYXJjaC5qcyJdLCJuYW1lcyI6WyJsb2ciLCJTZWFyY2giLCJkZWZhdWx0cyIsImF1dGgiLCJhcGlCYXNlIiwiX19kZWZhdWx0cyIsIl9nZXRPcHRpb25zV2l0aERlZmF1bHRzIiwicGF0aCIsIndpdGhPcHRpb25zIiwiY2IiLCJ1bmRlZmluZWQiLCJyZXF1ZXN0T3B0aW9ucyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwicHJvcCIsIl9yZXF1ZXN0QWxsUGFnZXMiLCJvcHRpb25zIiwiX3NlYXJjaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFPQTs7OztBQUNBOzs7Ozs7Ozs7OytlQVJBOzs7Ozs7O0FBU0EsSUFBTUEsTUFBTSxxQkFBTSxlQUFOLENBQVo7O0FBRUE7Ozs7SUFHTUMsTTs7O0FBQ0g7Ozs7OztBQU1BLGtCQUFZQyxRQUFaLEVBQXNCQyxJQUF0QixFQUE0QkMsT0FBNUIsRUFBcUM7QUFBQTs7QUFBQSxnSEFDNUJELElBRDRCLEVBQ3RCQyxPQURzQjs7QUFFbEMsVUFBS0MsVUFBTCxHQUFrQixNQUFLQyx1QkFBTCxDQUE2QkosUUFBN0IsQ0FBbEI7QUFGa0M7QUFHcEM7O0FBRUQ7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7NEJBUVFLLEksRUFBd0M7QUFBQTs7QUFBQSxVQUFsQ0MsV0FBa0MsdUVBQXBCLEVBQW9CO0FBQUEsVUFBaEJDLEVBQWdCLHVFQUFYQyxTQUFXOztBQUM3QyxVQUFJQyxpQkFBaUIsRUFBckI7QUFDQUMsYUFBT0MsSUFBUCxDQUFZLEtBQUtSLFVBQWpCLEVBQTZCUyxPQUE3QixDQUFxQyxVQUFDQyxJQUFELEVBQVU7QUFDNUNKLHVCQUFlSSxJQUFmLElBQXVCLE9BQUtWLFVBQUwsQ0FBZ0JVLElBQWhCLENBQXZCO0FBQ0YsT0FGRDtBQUdBSCxhQUFPQyxJQUFQLENBQVlMLFdBQVosRUFBeUJNLE9BQXpCLENBQWlDLFVBQUNDLElBQUQsRUFBVTtBQUN4Q0osdUJBQWVJLElBQWYsSUFBdUJQLFlBQVlPLElBQVosQ0FBdkI7QUFDRixPQUZEOztBQUlBZix5QkFBaUJPLElBQWpCLHFCQUF1Q0ksY0FBdkM7QUFDQSxhQUFPLEtBQUtLLGdCQUFMLGNBQWlDVCxJQUFqQyxFQUF5Q0ksY0FBekMsRUFBeURGLEVBQXpELENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7OztvQ0FPZ0JRLE8sRUFBU1IsRSxFQUFJO0FBQzFCLGFBQU8sS0FBS1MsT0FBTCxDQUFhLGNBQWIsRUFBNkJELE9BQTdCLEVBQXNDUixFQUF0QyxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7NEJBT1FRLE8sRUFBU1IsRSxFQUFJO0FBQ2xCLGFBQU8sS0FBS1MsT0FBTCxDQUFhLE1BQWIsRUFBcUJELE9BQXJCLEVBQThCUixFQUE5QixDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7OEJBT1VRLE8sRUFBU1IsRSxFQUFJO0FBQ3BCLGFBQU8sS0FBS1MsT0FBTCxDQUFhLFFBQWIsRUFBdUJELE9BQXZCLEVBQWdDUixFQUFoQyxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7NkJBT1NRLE8sRUFBU1IsRSxFQUFJO0FBQ25CLGFBQU8sS0FBS1MsT0FBTCxDQUFhLE9BQWIsRUFBc0JELE9BQXRCLEVBQStCUixFQUEvQixDQUFQO0FBQ0Y7Ozs7OztBQUdKVSxPQUFPQyxPQUFQLEdBQWlCbkIsTUFBakIiLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZVxuICogQGNvcHlyaWdodCAgMjAxMyBNaWNoYWVsIEF1ZnJlaXRlciAoRGV2ZWxvcG1lbnQgU2VlZCkgYW5kIDIwMTYgWWFob28gSW5jLlxuICogQGxpY2Vuc2UgICAgTGljZW5zZWQgdW5kZXIge0BsaW5rIGh0dHBzOi8vc3BkeC5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlLUNsZWFyLmh0bWwgQlNELTMtQ2xhdXNlLUNsZWFyfS5cbiAqICAgICAgICAgICAgIEdpdGh1Yi5qcyBpcyBmcmVlbHkgZGlzdHJpYnV0YWJsZS5cbiAqL1xuXG5pbXBvcnQgUmVxdWVzdGFibGUgZnJvbSAnLi9SZXF1ZXN0YWJsZSc7XG5pbXBvcnQgZGVidWcgZnJvbSAnZGVidWcnO1xuY29uc3QgbG9nID0gZGVidWcoJ2dpdGh1YjpzZWFyY2gnKTtcblxuLyoqXG4gKiBXcmFwIHRoZSBTZWFyY2ggQVBJXG4gKi9cbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlcXVlc3RhYmxlIHtcbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgU2VhcmNoXG4gICAgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdHMgLSBkZWZhdWx0cyBmb3IgdGhlIHNlYXJjaFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5hdXRofSBbYXV0aF0gLSBpbmZvcm1hdGlvbiByZXF1aXJlZCB0byBhdXRoZW50aWNhdGUgdG8gR2l0aHViXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2FwaUJhc2U9aHR0cHM6Ly9hcGkuZ2l0aHViLmNvbV0gLSB0aGUgYmFzZSBHaXRodWIgQVBJIFVSTFxuICAgICovXG4gICBjb25zdHJ1Y3RvcihkZWZhdWx0cywgYXV0aCwgYXBpQmFzZSkge1xuICAgICAgc3VwZXIoYXV0aCwgYXBpQmFzZSk7XG4gICAgICB0aGlzLl9fZGVmYXVsdHMgPSB0aGlzLl9nZXRPcHRpb25zV2l0aERlZmF1bHRzKGRlZmF1bHRzKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBBdmFpbGFibGUgc2VhcmNoIG9wdGlvbnNcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9zZWFyY2gvI3BhcmFtZXRlcnNcbiAgICAqIEB0eXBlZGVmIHtPYmplY3R9IFNlYXJjaC5QYXJhbXNcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBxIC0gdGhlIHF1ZXJ5IHRvIG1ha2VcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBzb3J0IC0gdGhlIHNvcnQgZmllbGQsIG9uZSBvZiBgc3RhcnNgLCBgZm9ya3NgLCBvciBgdXBkYXRlZGAuXG4gICAgKiAgICAgICAgICAgICAgICAgICAgICBEZWZhdWx0IGlzIFtiZXN0IG1hdGNoXShodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3NlYXJjaC8jcmFua2luZy1zZWFyY2gtcmVzdWx0cylcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcmRlciAtIHRoZSBvcmRlcmluZywgZWl0aGVyIGBhc2NgIG9yIGBkZXNjYFxuICAgICovXG4gICAvKipcbiAgICAqIFBlcmZvcm0gYSBzZWFyY2ggb24gdGhlIEdpdEh1YiBBUElcbiAgICAqIEBwcml2YXRlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIHRoZSBzY29wZSBvZiB0aGUgc2VhcmNoXG4gICAgKiBAcGFyYW0ge1NlYXJjaC5QYXJhbXN9IFt3aXRoT3B0aW9uc10gLSBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZm9yIHRoZSBzZWFyY2hcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIHJlc3VsdHMgb2YgdGhlIHNlYXJjaFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBfc2VhcmNoKHBhdGgsIHdpdGhPcHRpb25zID0ge30sIGNiID0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgcmVxdWVzdE9wdGlvbnMgPSB7fTtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuX19kZWZhdWx0cykuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgICAgcmVxdWVzdE9wdGlvbnNbcHJvcF0gPSB0aGlzLl9fZGVmYXVsdHNbcHJvcF07XG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5rZXlzKHdpdGhPcHRpb25zKS5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICAgICByZXF1ZXN0T3B0aW9uc1twcm9wXSA9IHdpdGhPcHRpb25zW3Byb3BdO1xuICAgICAgfSk7XG5cbiAgICAgIGxvZyhgc2VhcmNoaW5nICR7cGF0aH0gd2l0aCBvcHRpb25zOmAsIHJlcXVlc3RPcHRpb25zKTtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0QWxsUGFnZXMoYC9zZWFyY2gvJHtwYXRofWAsIHJlcXVlc3RPcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogU2VhcmNoIGZvciByZXBvc2l0b3JpZXNcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9zZWFyY2gvI3NlYXJjaC1yZXBvc2l0b3JpZXNcbiAgICAqIEBwYXJhbSB7U2VhcmNoLlBhcmFtc30gW29wdGlvbnNdIC0gYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZvciB0aGUgc2VhcmNoXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSByZXN1bHRzIG9mIHRoZSBzZWFyY2hcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZm9yUmVwb3NpdG9yaWVzKG9wdGlvbnMsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VhcmNoKCdyZXBvc2l0b3JpZXMnLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogU2VhcmNoIGZvciBjb2RlXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvc2VhcmNoLyNzZWFyY2gtY29kZVxuICAgICogQHBhcmFtIHtTZWFyY2guUGFyYW1zfSBbb3B0aW9uc10gLSBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZm9yIHRoZSBzZWFyY2hcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIHJlc3VsdHMgb2YgdGhlIHNlYXJjaFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBmb3JDb2RlKG9wdGlvbnMsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VhcmNoKCdjb2RlJywgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIFNlYXJjaCBmb3IgaXNzdWVzXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvc2VhcmNoLyNzZWFyY2gtaXNzdWVzXG4gICAgKiBAcGFyYW0ge1NlYXJjaC5QYXJhbXN9IFtvcHRpb25zXSAtIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmb3IgdGhlIHNlYXJjaFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgcmVzdWx0cyBvZiB0aGUgc2VhcmNoXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGZvcklzc3VlcyhvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlYXJjaCgnaXNzdWVzJywgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIFNlYXJjaCBmb3IgdXNlcnNcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9zZWFyY2gvI3NlYXJjaC11c2Vyc1xuICAgICogQHBhcmFtIHtTZWFyY2guUGFyYW1zfSBbb3B0aW9uc10gLSBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZm9yIHRoZSBzZWFyY2hcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIHJlc3VsdHMgb2YgdGhlIHNlYXJjaFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBmb3JVc2VycyhvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlYXJjaCgndXNlcnMnLCBvcHRpb25zLCBjYik7XG4gICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2VhcmNoO1xuIl19
//# sourceMappingURL=Search.js.map


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Requestable2 = __webpack_require__(1);

var _Requestable3 = _interopRequireDefault(_Requestable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2013 Michael Aufreiter (Development Seed) and 2016 Yahoo Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under {@link https://spdx.org/licenses/BSD-3-Clause-Clear.html BSD-3-Clause-Clear}.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * RateLimit allows users to query their rate-limit status
 */
var RateLimit = function (_Requestable) {
  _inherits(RateLimit, _Requestable);

  /**
   * construct a RateLimit
   * @param {Requestable.auth} auth - the credentials to authenticate to GitHub
   * @param {string} [apiBase] - the base Github API URL
   * @return {Promise} - the promise for the http request
   */
  function RateLimit(auth, apiBase) {
    _classCallCheck(this, RateLimit);

    return _possibleConstructorReturn(this, (RateLimit.__proto__ || Object.getPrototypeOf(RateLimit)).call(this, auth, apiBase));
  }

  /**
   * Query the current rate limit
   * @see https://developer.github.com/v3/rate_limit/
   * @param {Requestable.callback} [cb] - will receive the rate-limit data
   * @return {Promise} - the promise for the http request
   */


  _createClass(RateLimit, [{
    key: 'getRateLimit',
    value: function getRateLimit(cb) {
      return this._request('GET', '/rate_limit', null, cb);
    }
  }]);

  return RateLimit;
}(_Requestable3.default);

module.exports = RateLimit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJhdGVMaW1pdC5qcyJdLCJuYW1lcyI6WyJSYXRlTGltaXQiLCJhdXRoIiwiYXBpQmFzZSIsImNiIiwiX3JlcXVlc3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7O0FBT0E7Ozs7Ozs7Ozs7K2VBUEE7Ozs7Ozs7QUFTQTs7O0lBR01BLFM7OztBQUNIOzs7Ozs7QUFNQSxxQkFBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBMkI7QUFBQTs7QUFBQSxpSEFDbEJELElBRGtCLEVBQ1pDLE9BRFk7QUFFMUI7O0FBRUQ7Ozs7Ozs7Ozs7aUNBTWFDLEUsRUFBSTtBQUNkLGFBQU8sS0FBS0MsUUFBTCxDQUFjLEtBQWQsRUFBcUIsYUFBckIsRUFBb0MsSUFBcEMsRUFBMENELEVBQTFDLENBQVA7QUFDRjs7Ozs7O0FBR0pFLE9BQU9DLE9BQVAsR0FBaUJOLFNBQWpCIiwiZmlsZSI6IlJhdGVMaW1pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVcbiAqIEBjb3B5cmlnaHQgIDIwMTMgTWljaGFlbCBBdWZyZWl0ZXIgKERldmVsb3BtZW50IFNlZWQpIGFuZCAyMDE2IFlhaG9vIEluYy5cbiAqIEBsaWNlbnNlICAgIExpY2Vuc2VkIHVuZGVyIHtAbGluayBodHRwczovL3NwZHgub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZS1DbGVhci5odG1sIEJTRC0zLUNsYXVzZS1DbGVhcn0uXG4gKiAgICAgICAgICAgICBHaXRodWIuanMgaXMgZnJlZWx5IGRpc3RyaWJ1dGFibGUuXG4gKi9cblxuaW1wb3J0IFJlcXVlc3RhYmxlIGZyb20gJy4vUmVxdWVzdGFibGUnO1xuXG4vKipcbiAqIFJhdGVMaW1pdCBhbGxvd3MgdXNlcnMgdG8gcXVlcnkgdGhlaXIgcmF0ZS1saW1pdCBzdGF0dXNcbiAqL1xuY2xhc3MgUmF0ZUxpbWl0IGV4dGVuZHMgUmVxdWVzdGFibGUge1xuICAgLyoqXG4gICAgKiBjb25zdHJ1Y3QgYSBSYXRlTGltaXRcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuYXV0aH0gYXV0aCAtIHRoZSBjcmVkZW50aWFscyB0byBhdXRoZW50aWNhdGUgdG8gR2l0SHViXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2FwaUJhc2VdIC0gdGhlIGJhc2UgR2l0aHViIEFQSSBVUkxcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgY29uc3RydWN0b3IoYXV0aCwgYXBpQmFzZSkge1xuICAgICAgc3VwZXIoYXV0aCwgYXBpQmFzZSk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogUXVlcnkgdGhlIGN1cnJlbnQgcmF0ZSBsaW1pdFxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JhdGVfbGltaXQvXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSByYXRlLWxpbWl0IGRhdGFcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0UmF0ZUxpbWl0KGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgJy9yYXRlX2xpbWl0JywgbnVsbCwgY2IpO1xuICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJhdGVMaW1pdDtcbiJdfQ==
//# sourceMappingURL=RateLimit.js.map


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Requestable2 = __webpack_require__(1);

var _Requestable3 = _interopRequireDefault(_Requestable2);

var _utf = __webpack_require__(47);

var _utf2 = _interopRequireDefault(_utf);

var _jsBase = __webpack_require__(12);

var _debug = __webpack_require__(2);

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2013 Michael Aufreiter (Development Seed) and 2016 Yahoo Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under {@link https://spdx.org/licenses/BSD-3-Clause-Clear.html BSD-3-Clause-Clear}.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var log = (0, _debug2.default)('github:repository');

/**
 * Respository encapsulates the functionality to create, query, and modify files.
 */

var Repository = function (_Requestable) {
   _inherits(Repository, _Requestable);

   /**
    * Create a Repository.
    * @param {string} fullname - the full name of the repository
    * @param {Requestable.auth} [auth] - information required to authenticate to Github
    * @param {string} [apiBase=https://api.github.com] - the base Github API URL
    */
   function Repository(fullname, auth, apiBase) {
      _classCallCheck(this, Repository);

      var _this = _possibleConstructorReturn(this, (Repository.__proto__ || Object.getPrototypeOf(Repository)).call(this, auth, apiBase));

      _this.__fullname = fullname;
      _this.__currentTree = {
         branch: null,
         sha: null
      };
      return _this;
   }

   /**
    * Get a reference
    * @see https://developer.github.com/v3/git/refs/#get-a-reference
    * @param {string} ref - the reference to get
    * @param {Requestable.callback} [cb] - will receive the reference's refSpec or a list of refSpecs that match `ref`
    * @return {Promise} - the promise for the http request
    */


   _createClass(Repository, [{
      key: 'getRef',
      value: function getRef(ref, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/git/refs/' + ref, null, cb);
      }

      /**
       * Create a reference
       * @see https://developer.github.com/v3/git/refs/#create-a-reference
       * @param {Object} options - the object describing the ref
       * @param {Requestable.callback} [cb] - will receive the ref
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'createRef',
      value: function createRef(options, cb) {
         return this._request('POST', '/repos/' + this.__fullname + '/git/refs', options, cb);
      }

      /**
       * Delete a reference
       * @see https://developer.github.com/v3/git/refs/#delete-a-reference
       * @param {string} ref - the name of the ref to delte
       * @param {Requestable.callback} [cb] - will receive true if the request is successful
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'deleteRef',
      value: function deleteRef(ref, cb) {
         return this._request('DELETE', '/repos/' + this.__fullname + '/git/refs/' + ref, null, cb);
      }

      /**
       * Delete a repository
       * @see https://developer.github.com/v3/repos/#delete-a-repository
       * @param {Requestable.callback} [cb] - will receive true if the request is successful
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'deleteRepo',
      value: function deleteRepo(cb) {
         return this._request('DELETE', '/repos/' + this.__fullname, null, cb);
      }

      /**
       * List the tags on a repository
       * @see https://developer.github.com/v3/repos/#list-tags
       * @param {Requestable.callback} [cb] - will receive the tag data
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listTags',
      value: function listTags(cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/tags', null, cb);
      }

      /**
       * List the open pull requests on the repository
       * @see https://developer.github.com/v3/pulls/#list-pull-requests
       * @param {Object} options - options to filter the search
       * @param {Requestable.callback} [cb] - will receive the list of PRs
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listPullRequests',
      value: function listPullRequests(options, cb) {
         options = options || {};
         return this._request('GET', '/repos/' + this.__fullname + '/pulls', options, cb);
      }

      /**
       * Get information about a specific pull request
       * @see https://developer.github.com/v3/pulls/#get-a-single-pull-request
       * @param {number} number - the PR you wish to fetch
       * @param {Requestable.callback} [cb] - will receive the PR from the API
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getPullRequest',
      value: function getPullRequest(number, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/pulls/' + number, null, cb);
      }

      /**
       * List the files of a specific pull request
       * @see https://developer.github.com/v3/pulls/#list-pull-requests-files
       * @param {number|string} number - the PR you wish to fetch
       * @param {Requestable.callback} [cb] - will receive the list of files from the API
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listPullRequestFiles',
      value: function listPullRequestFiles(number, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/pulls/' + number + '/files', null, cb);
      }

      /**
       * Compare two branches/commits/repositories
       * @see https://developer.github.com/v3/repos/commits/#compare-two-commits
       * @param {string} base - the base commit
       * @param {string} head - the head commit
       * @param {Requestable.callback} cb - will receive the comparison
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'compareBranches',
      value: function compareBranches(base, head, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/compare/' + base + '...' + head, null, cb);
      }

      /**
       * List all the branches for the repository
       * @see https://developer.github.com/v3/repos/#list-branches
       * @param {Requestable.callback} cb - will receive the list of branches
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listBranches',
      value: function listBranches(cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/branches', null, cb);
      }

      /**
       * Get a raw blob from the repository
       * @see https://developer.github.com/v3/git/blobs/#get-a-blob
       * @param {string} sha - the sha of the blob to fetch
       * @param {Requestable.callback} cb - will receive the blob from the API
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getBlob',
      value: function getBlob(sha, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/git/blobs/' + sha, null, cb, 'raw');
      }

      /**
       * Get a single branch
       * @see https://developer.github.com/v3/repos/branches/#get-branch
       * @param {string} branch - the name of the branch to fetch
       * @param {Requestable.callback} cb - will receive the branch from the API
       * @returns {Promise} - the promise for the http request
       */

   }, {
      key: 'getBranch',
      value: function getBranch(branch, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/branches/' + branch, null, cb);
      }

      /**
       * Get a commit from the repository
       * @see https://developer.github.com/v3/repos/commits/#get-a-single-commit
       * @param {string} sha - the sha for the commit to fetch
       * @param {Requestable.callback} cb - will receive the commit data
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getCommit',
      value: function getCommit(sha, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/git/commits/' + sha, null, cb);
      }

      /**
       * List the commits on a repository, optionally filtering by path, author or time range
       * @see https://developer.github.com/v3/repos/commits/#list-commits-on-a-repository
       * @param {Object} [options] - the filtering options for commits
       * @param {string} [options.sha] - the SHA or branch to start from
       * @param {string} [options.path] - the path to search on
       * @param {string} [options.author] - the commit author
       * @param {(Date|string)} [options.since] - only commits after this date will be returned
       * @param {(Date|string)} [options.until] - only commits before this date will be returned
       * @param {Requestable.callback} cb - will receive the list of commits found matching the criteria
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listCommits',
      value: function listCommits(options, cb) {
         options = options || {};

         options.since = this._dateToISO(options.since);
         options.until = this._dateToISO(options.until);

         return this._request('GET', '/repos/' + this.__fullname + '/commits', options, cb);
      }

      /**
       * Gets a single commit information for a repository
       * @see https://developer.github.com/v3/repos/commits/#get-a-single-commit
       * @param {string} ref - the reference for the commit-ish
       * @param {Requestable.callback} cb - will receive the commit information
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getSingleCommit',
      value: function getSingleCommit(ref, cb) {
         ref = ref || '';
         return this._request('GET', '/repos/' + this.__fullname + '/commits/' + ref, null, cb);
      }

      /**
       * Get tha sha for a particular object in the repository. This is a convenience function
       * @see https://developer.github.com/v3/repos/contents/#get-contents
       * @param {string} [branch] - the branch to look in, or the repository's default branch if omitted
       * @param {string} path - the path of the file or directory
       * @param {Requestable.callback} cb - will receive a description of the requested object, including a `SHA` property
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getSha',
      value: function getSha(branch, path, cb) {
         branch = branch ? '?ref=' + branch : '';
         return this._request('GET', '/repos/' + this.__fullname + '/contents/' + path + branch, null, cb);
      }

      /**
       * List the commit statuses for a particular sha, branch, or tag
       * @see https://developer.github.com/v3/repos/statuses/#list-statuses-for-a-specific-ref
       * @param {string} sha - the sha, branch, or tag to get statuses for
       * @param {Requestable.callback} cb - will receive the list of statuses
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listStatuses',
      value: function listStatuses(sha, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/commits/' + sha + '/statuses', null, cb);
      }

      /**
       * Get a description of a git tree
       * @see https://developer.github.com/v3/git/trees/#get-a-tree
       * @param {string} treeSHA - the SHA of the tree to fetch
       * @param {Requestable.callback} cb - will receive the callback data
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getTree',
      value: function getTree(treeSHA, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/git/trees/' + treeSHA, null, cb);
      }

      /**
       * Create a blob
       * @see https://developer.github.com/v3/git/blobs/#create-a-blob
       * @param {(string|Buffer|Blob)} content - the content to add to the repository
       * @param {Requestable.callback} cb - will receive the details of the created blob
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'createBlob',
      value: function createBlob(content, cb) {
         var postBody = this._getContentObject(content);

         log('sending content', postBody);
         return this._request('POST', '/repos/' + this.__fullname + '/git/blobs', postBody, cb);
      }

      /**
       * Get the object that represents the provided content
       * @param {string|Buffer|Blob} content - the content to send to the server
       * @return {Object} the representation of `content` for the GitHub API
       */

   }, {
      key: '_getContentObject',
      value: function _getContentObject(content) {
         if (typeof content === 'string') {
            log('contet is a string');
            return {
               content: _utf2.default.encode(content),
               encoding: 'utf-8'
            };
         } else if (typeof Buffer !== 'undefined' && content instanceof Buffer) {
            log('We appear to be in Node');
            return {
               content: content.toString('base64'),
               encoding: 'base64'
            };
         } else if (typeof Blob !== 'undefined' && content instanceof Blob) {
            log('We appear to be in the browser');
            return {
               content: _jsBase.Base64.encode(content),
               encoding: 'base64'
            };
         } else {
            // eslint-disable-line
            log('Not sure what this content is: ' + (typeof content === 'undefined' ? 'undefined' : _typeof(content)) + ', ' + JSON.stringify(content));
            throw new Error('Unknown content passed to postBlob. Must be string or Buffer (node) or Blob (web)');
         }
      }

      /**
       * Update a tree in Git
       * @see https://developer.github.com/v3/git/trees/#create-a-tree
       * @param {string} baseTreeSHA - the SHA of the tree to update
       * @param {string} path - the path for the new file
       * @param {string} blobSHA - the SHA for the blob to put at `path`
       * @param {Requestable.callback} cb - will receive the new tree that is created
       * @return {Promise} - the promise for the http request
       * @deprecated use {@link Repository#createTree} instead
       */

   }, {
      key: 'updateTree',
      value: function updateTree(baseTreeSHA, path, blobSHA, cb) {
         var newTree = {
            base_tree: baseTreeSHA, // eslint-disable-line
            tree: [{
               path: path,
               sha: blobSHA,
               mode: '100644',
               type: 'blob'
            }]
         };

         return this._request('POST', '/repos/' + this.__fullname + '/git/trees', newTree, cb);
      }

      /**
       * Create a new tree in git
       * @see https://developer.github.com/v3/git/trees/#create-a-tree
       * @param {Object} tree - the tree to create
       * @param {string} baseSHA - the root sha of the tree
       * @param {Requestable.callback} cb - will receive the new tree that is created
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'createTree',
      value: function createTree(tree, baseSHA, cb) {
         return this._request('POST', '/repos/' + this.__fullname + '/git/trees', {
            tree: tree,
            base_tree: baseSHA }, cb);
      }

      /**
       * Add a commit to the repository
       * @see https://developer.github.com/v3/git/commits/#create-a-commit
       * @param {string} parent - the SHA of the parent commit
       * @param {string} tree - the SHA of the tree for this commit
       * @param {string} message - the commit message
       * @param {Requestable.callback} cb - will receive the commit that is created
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'commit',
      value: function commit(parent, tree, message, cb) {
         var _this2 = this;

         var data = {
            message: message,
            tree: tree,
            parents: [parent]
         };

         return this._request('POST', '/repos/' + this.__fullname + '/git/commits', data, cb).then(function (response) {
            _this2.__currentTree.sha = response.data.sha; // Update latest commit
            return response;
         });
      }

      /**
       * Update a ref
       * @see https://developer.github.com/v3/git/refs/#update-a-reference
       * @param {string} ref - the ref to update
       * @param {string} commitSHA - the SHA to point the reference to
       * @param {boolean} force - indicates whether to force or ensure a fast-forward update
       * @param {Requestable.callback} cb - will receive the updated ref back
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'updateHead',
      value: function updateHead(ref, commitSHA, force, cb) {
         return this._request('PATCH', '/repos/' + this.__fullname + '/git/refs/' + ref, {
            sha: commitSHA,
            force: force
         }, cb);
      }

      /**
       * Update commit status
       * @see https://developer.github.com/v3/repos/statuses/
       * @param {string} commitSHA - the SHA of the commit that should be updated
       * @param {object} options - Commit status parameters
       * @param {string} options.state - The state of the status. Can be one of: pending, success, error, or failure.
       * @param {string} [options.target_url] - The target URL to associate with this status.
       * @param {string} [options.description] - A short description of the status.
       * @param {string} [options.context] - A string label to differentiate this status among CI systems.
       * @param {Requestable.callback} cb - will receive the updated commit back
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'updateStatus',
      value: function updateStatus(commitSHA, options, cb) {
         return this._request('POST', '/repos/' + this.__fullname + '/statuses/' + commitSHA, options, cb);
      }

      /**
       * Update repository information
       * @see https://developer.github.com/v3/repos/#edit
       * @param {object} options - New parameters that will be set to the repository
       * @param {string} options.name - Name of the repository
       * @param {string} [options.description] - A short description of the repository
       * @param {string} [options.homepage] - A URL with more information about the repository
       * @param {boolean} [options.private] - Either true to make the repository private, or false to make it public.
       * @param {boolean} [options.has_issues] - Either true to enable issues for this repository, false to disable them.
       * @param {boolean} [options.has_wiki] - Either true to enable the wiki for this repository, false to disable it.
       * @param {boolean} [options.has_downloads] - Either true to enable downloads, false to disable them.
       * @param {string} [options.default_branch] - Updates the default branch for this repository.
       * @param {Requestable.callback} cb - will receive the updated repository back
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'updateRepository',
      value: function updateRepository(options, cb) {
         return this._request('PATCH', '/repos/' + this.__fullname, options, cb);
      }

      /**
        * Get information about the repository
        * @see https://developer.github.com/v3/repos/#get
        * @param {Requestable.callback} cb - will receive the information about the repository
        * @return {Promise} - the promise for the http request
        */

   }, {
      key: 'getDetails',
      value: function getDetails(cb) {
         return this._request('GET', '/repos/' + this.__fullname, null, cb);
      }

      /**
       * List the contributors to the repository
       * @see https://developer.github.com/v3/repos/#list-contributors
       * @param {Requestable.callback} cb - will receive the list of contributors
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getContributors',
      value: function getContributors(cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/contributors', null, cb);
      }

      /**
       * List the contributor stats to the repository
       * @see https://developer.github.com/v3/repos/#list-contributors
       * @param {Requestable.callback} cb - will receive the list of contributors
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getContributorStats',
      value: function getContributorStats(cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/stats/contributors', null, cb);
      }

      /**
       * List the users who are collaborators on the repository. The currently authenticated user must have
       * push access to use this method
       * @see https://developer.github.com/v3/repos/collaborators/#list-collaborators
       * @param {Requestable.callback} cb - will receive the list of collaborators
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getCollaborators',
      value: function getCollaborators(cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/collaborators', null, cb);
      }

      /**
       * Check if a user is a collaborator on the repository
       * @see https://developer.github.com/v3/repos/collaborators/#check-if-a-user-is-a-collaborator
       * @param {string} username - the user to check
       * @param {Requestable.callback} cb - will receive true if the user is a collaborator and false if they are not
       * @return {Promise} - the promise for the http request {Boolean} [description]
       */

   }, {
      key: 'isCollaborator',
      value: function isCollaborator(username, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/collaborators/' + username, null, cb);
      }

      /**
       * Get the contents of a repository
       * @see https://developer.github.com/v3/repos/contents/#get-contents
       * @param {string} ref - the ref to check
       * @param {string} path - the path containing the content to fetch
       * @param {boolean} raw - `true` if the results should be returned raw instead of GitHub's normalized format
       * @param {Requestable.callback} cb - will receive the fetched data
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getContents',
      value: function getContents(ref, path, raw, cb) {
         path = path ? '' + encodeURI(path) : '';
         return this._request('GET', '/repos/' + this.__fullname + '/contents/' + path, {
            ref: ref
         }, cb, raw);
      }

      /**
       * Get the README of a repository
       * @see https://developer.github.com/v3/repos/contents/#get-the-readme
       * @param {string} ref - the ref to check
       * @param {boolean} raw - `true` if the results should be returned raw instead of GitHub's normalized format
       * @param {Requestable.callback} cb - will receive the fetched data
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getReadme',
      value: function getReadme(ref, raw, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/readme', {
            ref: ref
         }, cb, raw);
      }

      /**
       * Fork a repository
       * @see https://developer.github.com/v3/repos/forks/#create-a-fork
       * @param {Requestable.callback} cb - will receive the information about the newly created fork
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'fork',
      value: function fork(cb) {
         return this._request('POST', '/repos/' + this.__fullname + '/forks', null, cb);
      }

      /**
       * List a repository's forks
       * @see https://developer.github.com/v3/repos/forks/#list-forks
       * @param {Requestable.callback} cb - will receive the list of repositories forked from this one
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listForks',
      value: function listForks(cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/forks', null, cb);
      }

      /**
       * Create a new branch from an existing branch.
       * @param {string} [oldBranch=master] - the name of the existing branch
       * @param {string} newBranch - the name of the new branch
       * @param {Requestable.callback} cb - will receive the commit data for the head of the new branch
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'createBranch',
      value: function createBranch(oldBranch, newBranch, cb) {
         var _this3 = this;

         if (typeof newBranch === 'function') {
            cb = newBranch;
            newBranch = oldBranch;
            oldBranch = 'master';
         }

         return this.getRef('heads/' + oldBranch).then(function (response) {
            var sha = response.data.object.sha;
            return _this3.createRef({
               sha: sha,
               ref: 'refs/heads/' + newBranch
            }, cb);
         });
      }

      /**
       * Create a new pull request
       * @see https://developer.github.com/v3/pulls/#create-a-pull-request
       * @param {Object} options - the pull request description
       * @param {Requestable.callback} cb - will receive the new pull request
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'createPullRequest',
      value: function createPullRequest(options, cb) {
         return this._request('POST', '/repos/' + this.__fullname + '/pulls', options, cb);
      }

      /**
       * Update a pull request
       * @see https://developer.github.com/v3/pulls/#update-a-pull-request
       * @param {number|string} number - the number of the pull request to update
       * @param {Object} options - the pull request description
       * @param {Requestable.callback} [cb] - will receive the pull request information
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'updatePullRequest',
      value: function updatePullRequest(number, options, cb) {
         return this._request('PATCH', '/repos/' + this.__fullname + '/pulls/' + number, options, cb);
      }

      /**
       * List the hooks for the repository
       * @see https://developer.github.com/v3/repos/hooks/#list-hooks
       * @param {Requestable.callback} cb - will receive the list of hooks
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listHooks',
      value: function listHooks(cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/hooks', null, cb);
      }

      /**
       * Get a hook for the repository
       * @see https://developer.github.com/v3/repos/hooks/#get-single-hook
       * @param {number} id - the id of the webook
       * @param {Requestable.callback} cb - will receive the details of the webook
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getHook',
      value: function getHook(id, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/hooks/' + id, null, cb);
      }

      /**
       * Add a new hook to the repository
       * @see https://developer.github.com/v3/repos/hooks/#create-a-hook
       * @param {Object} options - the configuration describing the new hook
       * @param {Requestable.callback} cb - will receive the new webhook
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'createHook',
      value: function createHook(options, cb) {
         return this._request('POST', '/repos/' + this.__fullname + '/hooks', options, cb);
      }

      /**
       * Edit an existing webhook
       * @see https://developer.github.com/v3/repos/hooks/#edit-a-hook
       * @param {number} id - the id of the webhook
       * @param {Object} options - the new description of the webhook
       * @param {Requestable.callback} cb - will receive the updated webhook
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'updateHook',
      value: function updateHook(id, options, cb) {
         return this._request('PATCH', '/repos/' + this.__fullname + '/hooks/' + id, options, cb);
      }

      /**
       * Delete a webhook
       * @see https://developer.github.com/v3/repos/hooks/#delete-a-hook
       * @param {number} id - the id of the webhook to be deleted
       * @param {Requestable.callback} cb - will receive true if the call is successful
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'deleteHook',
      value: function deleteHook(id, cb) {
         return this._request('DELETE', this.__fullname + '/hooks/' + id, null, cb);
      }

      /**
       * List the deploy keys for the repository
       * @see https://developer.github.com/v3/repos/keys/#list-deploy-keys
       * @param {Requestable.callback} cb - will receive the list of deploy keys
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listKeys',
      value: function listKeys(cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/keys', null, cb);
      }

      /**
       * Get a deploy key for the repository
       * @see https://developer.github.com/v3/repos/keys/#get-a-deploy-key
       * @param {number} id - the id of the deploy key
       * @param {Requestable.callback} cb - will receive the details of the deploy key
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getKey',
      value: function getKey(id, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/keys/' + id, null, cb);
      }

      /**
       * Add a new deploy key to the repository
       * @see https://developer.github.com/v3/repos/keys/#add-a-new-deploy-key
       * @param {Object} options - the configuration describing the new deploy key
       * @param {Requestable.callback} cb - will receive the new deploy key
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'createKey',
      value: function createKey(options, cb) {
         return this._request('POST', '/repos/' + this.__fullname + '/keys', options, cb);
      }

      /**
       * Delete a deploy key
       * @see https://developer.github.com/v3/repos/keys/#remove-a-deploy-key
       * @param {number} id - the id of the deploy key to be deleted
       * @param {Requestable.callback} cb - will receive true if the call is successful
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'deleteKey',
      value: function deleteKey(id, cb) {
         return this._request('DELETE', '/repos/' + this.__fullname + '/keys/' + id, null, cb);
      }

      /**
       * Delete a file from a branch
       * @see https://developer.github.com/v3/repos/contents/#delete-a-file
       * @param {string} branch - the branch to delete from, or the default branch if not specified
       * @param {string} path - the path of the file to remove
       * @param {Requestable.callback} cb - will receive the commit in which the delete occurred
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'deleteFile',
      value: function deleteFile(branch, path, cb) {
         var _this4 = this;

         return this.getSha(branch, path).then(function (response) {
            var deleteCommit = {
               message: 'Delete the file at \'' + path + '\'',
               sha: response.data.sha,
               branch: branch
            };
            return _this4._request('DELETE', '/repos/' + _this4.__fullname + '/contents/' + path, deleteCommit, cb);
         });
      }

      /**
       * Change all references in a repo from oldPath to new_path
       * @param {string} branch - the branch to carry out the reference change, or the default branch if not specified
       * @param {string} oldPath - original path
       * @param {string} newPath - new reference path
       * @param {Requestable.callback} cb - will receive the commit in which the move occurred
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'move',
      value: function move(branch, oldPath, newPath, cb) {
         var _this5 = this;

         var oldSha = void 0;
         return this.getRef('heads/' + branch).then(function (_ref) {
            var object = _ref.data.object;
            return _this5.getTree(object.sha + '?recursive=true');
         }).then(function (_ref2) {
            var _ref2$data = _ref2.data,
                tree = _ref2$data.tree,
                sha = _ref2$data.sha;

            oldSha = sha;
            var newTree = tree.map(function (ref) {
               if (ref.path === oldPath) {
                  ref.path = newPath;
               }
               if (ref.type === 'tree') {
                  delete ref.sha;
               }
               return ref;
            });
            return _this5.createTree(newTree);
         }).then(function (_ref3) {
            var tree = _ref3.data;
            return _this5.commit(oldSha, tree.sha, 'Renamed \'' + oldPath + '\' to \'' + newPath + '\'');
         }).then(function (_ref4) {
            var commit = _ref4.data;
            return _this5.updateHead('heads/' + branch, commit.sha, true, cb);
         });
      }

      /**
       * Write a file to the repository
       * @see https://developer.github.com/v3/repos/contents/#update-a-file
       * @param {string} branch - the name of the branch
       * @param {string} path - the path for the file
       * @param {string} content - the contents of the file
       * @param {string} message - the commit message
       * @param {Object} [options] - commit options
       * @param {Object} [options.author] - the author of the commit
       * @param {Object} [options.commiter] - the committer
       * @param {boolean} [options.encode] - true if the content should be base64 encoded
       * @param {Requestable.callback} cb - will receive the new commit
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'writeFile',
      value: function writeFile(branch, path, content, message, options, cb) {
         var _this6 = this;

         if (typeof options === 'function') {
            cb = options;
            options = {};
         }
         var filePath = path ? encodeURI(path) : '';
         var shouldEncode = options.encode !== false;
         var commit = {
            branch: branch,
            message: message,
            author: options.author,
            committer: options.committer,
            content: shouldEncode ? _jsBase.Base64.encode(content) : content
         };

         return this.getSha(branch, filePath).then(function (response) {
            commit.sha = response.data.sha;
            return _this6._request('PUT', '/repos/' + _this6.__fullname + '/contents/' + filePath, commit, cb);
         }, function () {
            return _this6._request('PUT', '/repos/' + _this6.__fullname + '/contents/' + filePath, commit, cb);
         });
      }

      /**
       * Check if a repository is starred by you
       * @see https://developer.github.com/v3/activity/starring/#check-if-you-are-starring-a-repository
       * @param {Requestable.callback} cb - will receive true if the repository is starred and false if the repository
       *                                  is not starred
       * @return {Promise} - the promise for the http request {Boolean} [description]
       */

   }, {
      key: 'isStarred',
      value: function isStarred(cb) {
         return this._request204or404('/user/starred/' + this.__fullname, null, cb);
      }

      /**
       * Star a repository
       * @see https://developer.github.com/v3/activity/starring/#star-a-repository
       * @param {Requestable.callback} cb - will receive true if the repository is starred
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'star',
      value: function star(cb) {
         return this._request('PUT', '/user/starred/' + this.__fullname, null, cb);
      }

      /**
       * Unstar a repository
       * @see https://developer.github.com/v3/activity/starring/#unstar-a-repository
       * @param {Requestable.callback} cb - will receive true if the repository is unstarred
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'unstar',
      value: function unstar(cb) {
         return this._request('DELETE', '/user/starred/' + this.__fullname, null, cb);
      }

      /**
       * Create a new release
       * @see https://developer.github.com/v3/repos/releases/#create-a-release
       * @param {Object} options - the description of the release
       * @param {Requestable.callback} cb - will receive the newly created release
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'createRelease',
      value: function createRelease(options, cb) {
         return this._request('POST', '/repos/' + this.__fullname + '/releases', options, cb);
      }

      /**
       * Edit a release
       * @see https://developer.github.com/v3/repos/releases/#edit-a-release
       * @param {string} id - the id of the release
       * @param {Object} options - the description of the release
       * @param {Requestable.callback} cb - will receive the modified release
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'updateRelease',
      value: function updateRelease(id, options, cb) {
         return this._request('PATCH', '/repos/' + this.__fullname + '/releases/' + id, options, cb);
      }

      /**
       * Get information about all releases
       * @see https://developer.github.com/v3/repos/releases/#list-releases-for-a-repository
       * @param {Requestable.callback} cb - will receive the release information
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listReleases',
      value: function listReleases(cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/releases', null, cb);
      }

      /**
       * Get information about a release
       * @see https://developer.github.com/v3/repos/releases/#get-a-single-release
       * @param {string} id - the id of the release
       * @param {Requestable.callback} cb - will receive the release information
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getRelease',
      value: function getRelease(id, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/releases/' + id, null, cb);
      }

      /**
       * Delete a release
       * @see https://developer.github.com/v3/repos/releases/#delete-a-release
       * @param {string} id - the release to be deleted
       * @param {Requestable.callback} cb - will receive true if the operation is successful
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'deleteRelease',
      value: function deleteRelease(id, cb) {
         return this._request('DELETE', '/repos/' + this.__fullname + '/releases/' + id, null, cb);
      }

      /**
       * Merge a pull request
       * @see https://developer.github.com/v3/pulls/#merge-a-pull-request-merge-button
       * @param {number|string} number - the number of the pull request to merge
       * @param {Object} options - the merge options for the pull request
       * @param {Requestable.callback} [cb] - will receive the merge information if the operation is successful
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'mergePullRequest',
      value: function mergePullRequest(number, options, cb) {
         return this._request('PUT', '/repos/' + this.__fullname + '/pulls/' + number + '/merge', options, cb);
      }

      /**
       * Get information about all projects
       * @see https://developer.github.com/v3/projects/#list-repository-projects
       * @param {Requestable.callback} [cb] - will receive the list of projects
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listProjects',
      value: function listProjects(cb) {
         return this._requestAllPages('/repos/' + this.__fullname + '/projects', { AcceptHeader: 'inertia-preview' }, cb);
      }

      /**
       * Create a new project
       * @see https://developer.github.com/v3/projects/#create-a-repository-project
       * @param {Object} options - the description of the project
       * @param {Requestable.callback} cb - will receive the newly created project
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'createProject',
      value: function createProject(options, cb) {
         options = options || {};
         options.AcceptHeader = 'inertia-preview';
         return this._request('POST', '/repos/' + this.__fullname + '/projects', options, cb);
      }
   }]);

   return Repository;
}(_Requestable3.default);

module.exports = Repository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcG9zaXRvcnkuanMiXSwibmFtZXMiOlsibG9nIiwiUmVwb3NpdG9yeSIsImZ1bGxuYW1lIiwiYXV0aCIsImFwaUJhc2UiLCJfX2Z1bGxuYW1lIiwiX19jdXJyZW50VHJlZSIsImJyYW5jaCIsInNoYSIsInJlZiIsImNiIiwiX3JlcXVlc3QiLCJvcHRpb25zIiwibnVtYmVyIiwiYmFzZSIsImhlYWQiLCJzaW5jZSIsIl9kYXRlVG9JU08iLCJ1bnRpbCIsInBhdGgiLCJ0cmVlU0hBIiwiY29udGVudCIsInBvc3RCb2R5IiwiX2dldENvbnRlbnRPYmplY3QiLCJlbmNvZGUiLCJlbmNvZGluZyIsIkJ1ZmZlciIsInRvU3RyaW5nIiwiQmxvYiIsIkpTT04iLCJzdHJpbmdpZnkiLCJFcnJvciIsImJhc2VUcmVlU0hBIiwiYmxvYlNIQSIsIm5ld1RyZWUiLCJiYXNlX3RyZWUiLCJ0cmVlIiwibW9kZSIsInR5cGUiLCJiYXNlU0hBIiwicGFyZW50IiwibWVzc2FnZSIsImRhdGEiLCJwYXJlbnRzIiwidGhlbiIsInJlc3BvbnNlIiwiY29tbWl0U0hBIiwiZm9yY2UiLCJ1c2VybmFtZSIsInJhdyIsImVuY29kZVVSSSIsIm9sZEJyYW5jaCIsIm5ld0JyYW5jaCIsImdldFJlZiIsIm9iamVjdCIsImNyZWF0ZVJlZiIsImlkIiwiZ2V0U2hhIiwiZGVsZXRlQ29tbWl0Iiwib2xkUGF0aCIsIm5ld1BhdGgiLCJvbGRTaGEiLCJnZXRUcmVlIiwibWFwIiwiY3JlYXRlVHJlZSIsImNvbW1pdCIsInVwZGF0ZUhlYWQiLCJmaWxlUGF0aCIsInNob3VsZEVuY29kZSIsImF1dGhvciIsImNvbW1pdHRlciIsIl9yZXF1ZXN0MjA0b3I0MDQiLCJfcmVxdWVzdEFsbFBhZ2VzIiwiQWNjZXB0SGVhZGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBT0E7Ozs7QUFDQTs7OztBQUNBOztBQUdBOzs7Ozs7Ozs7OytlQVpBOzs7Ozs7O0FBYUEsSUFBTUEsTUFB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ZmlsZSI6IlJlcG9zaXRvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlXG4gKiBAY29weXJpZ2h0ICAyMDEzIE1pY2hhZWwgQXVmcmVpdGVyIChEZXZlbG9wbWVudCBTZWVkKSBhbmQgMjAxNiBZYWhvbyBJbmMuXG4gKiBAbGljZW5zZSAgICBMaWNlbnNlZCB1bmRlciB7QGxpbmsgaHR0cHM6Ly9zcGR4Lm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2UtQ2xlYXIuaHRtbCBCU0QtMy1DbGF1c2UtQ2xlYXJ9LlxuICogICAgICAgICAgICAgR2l0aHViLmpzIGlzIGZyZWVseSBkaXN0cmlidXRhYmxlLlxuICovXG5cbmltcG9ydCBSZXF1ZXN0YWJsZSBmcm9tICcuL1JlcXVlc3RhYmxlJztcbmltcG9ydCBVdGY4IGZyb20gJ3V0ZjgnO1xuaW1wb3J0IHtcbiAgIEJhc2U2NCxcbn0gZnJvbSAnanMtYmFzZTY0JztcbmltcG9ydCBkZWJ1ZyBmcm9tICdkZWJ1Zyc7XG5jb25zdCBsb2cgPSBkZWJ1ZygnZ2l0aHViOnJlcG9zaXRvcnknKTtcblxuLyoqXG4gKiBSZXNwb3NpdG9yeSBlbmNhcHN1bGF0ZXMgdGhlIGZ1bmN0aW9uYWxpdHkgdG8gY3JlYXRlLCBxdWVyeSwgYW5kIG1vZGlmeSBmaWxlcy5cbiAqL1xuY2xhc3MgUmVwb3NpdG9yeSBleHRlbmRzIFJlcXVlc3RhYmxlIHtcbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgUmVwb3NpdG9yeS5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBmdWxsbmFtZSAtIHRoZSBmdWxsIG5hbWUgb2YgdGhlIHJlcG9zaXRvcnlcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuYXV0aH0gW2F1dGhdIC0gaW5mb3JtYXRpb24gcmVxdWlyZWQgdG8gYXV0aGVudGljYXRlIHRvIEdpdGh1YlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFthcGlCYXNlPWh0dHBzOi8vYXBpLmdpdGh1Yi5jb21dIC0gdGhlIGJhc2UgR2l0aHViIEFQSSBVUkxcbiAgICAqL1xuICAgY29uc3RydWN0b3IoZnVsbG5hbWUsIGF1dGgsIGFwaUJhc2UpIHtcbiAgICAgIHN1cGVyKGF1dGgsIGFwaUJhc2UpO1xuICAgICAgdGhpcy5fX2Z1bGxuYW1lID0gZnVsbG5hbWU7XG4gICAgICB0aGlzLl9fY3VycmVudFRyZWUgPSB7XG4gICAgICAgICBicmFuY2g6IG51bGwsXG4gICAgICAgICBzaGE6IG51bGwsXG4gICAgICB9O1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCBhIHJlZmVyZW5jZVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2dpdC9yZWZzLyNnZXQtYS1yZWZlcmVuY2VcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWYgLSB0aGUgcmVmZXJlbmNlIHRvIGdldFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgcmVmZXJlbmNlJ3MgcmVmU3BlYyBvciBhIGxpc3Qgb2YgcmVmU3BlY3MgdGhhdCBtYXRjaCBgcmVmYFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRSZWYocmVmLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2dpdC9yZWZzLyR7cmVmfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSByZWZlcmVuY2VcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9naXQvcmVmcy8jY3JlYXRlLWEtcmVmZXJlbmNlXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHRoZSBvYmplY3QgZGVzY3JpYmluZyB0aGUgcmVmXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSByZWZcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgY3JlYXRlUmVmKG9wdGlvbnMsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUE9TVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2dpdC9yZWZzYCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIERlbGV0ZSBhIHJlZmVyZW5jZVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2dpdC9yZWZzLyNkZWxldGUtYS1yZWZlcmVuY2VcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWYgLSB0aGUgbmFtZSBvZiB0aGUgcmVmIHRvIGRlbHRlXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRydWUgaWYgdGhlIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBkZWxldGVSZWYocmVmLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0RFTEVURScsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2dpdC9yZWZzLyR7cmVmfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBEZWxldGUgYSByZXBvc2l0b3J5XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvI2RlbGV0ZS1hLXJlcG9zaXRvcnlcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdHJ1ZSBpZiB0aGUgcmVxdWVzdCBpcyBzdWNjZXNzZnVsXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGRlbGV0ZVJlcG8oY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdERUxFVEUnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IHRoZSB0YWdzIG9uIGEgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zLyNsaXN0LXRhZ3NcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIHRhZyBkYXRhXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3RUYWdzKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vdGFnc2AsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IHRoZSBvcGVuIHB1bGwgcmVxdWVzdHMgb24gdGhlIHJlcG9zaXRvcnlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9wdWxscy8jbGlzdC1wdWxsLXJlcXVlc3RzXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgdG8gZmlsdGVyIHRoZSBzZWFyY2hcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgUFJzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3RQdWxsUmVxdWVzdHMob3B0aW9ucywgY2IpIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L3B1bGxzYCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCBpbmZvcm1hdGlvbiBhYm91dCBhIHNwZWNpZmljIHB1bGwgcmVxdWVzdFxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3B1bGxzLyNnZXQtYS1zaW5nbGUtcHVsbC1yZXF1ZXN0XG4gICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gdGhlIFBSIHlvdSB3aXNoIHRvIGZldGNoXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBQUiBmcm9tIHRoZSBBUElcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0UHVsbFJlcXVlc3QobnVtYmVyLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L3B1bGxzLyR7bnVtYmVyfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IHRoZSBmaWxlcyBvZiBhIHNwZWNpZmljIHB1bGwgcmVxdWVzdFxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3B1bGxzLyNsaXN0LXB1bGwtcmVxdWVzdHMtZmlsZXNcbiAgICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gbnVtYmVyIC0gdGhlIFBSIHlvdSB3aXNoIHRvIGZldGNoXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIGZpbGVzIGZyb20gdGhlIEFQSVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBsaXN0UHVsbFJlcXVlc3RGaWxlcyhudW1iZXIsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vcHVsbHMvJHtudW1iZXJ9L2ZpbGVzYCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENvbXBhcmUgdHdvIGJyYW5jaGVzL2NvbW1pdHMvcmVwb3NpdG9yaWVzXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvY29tbWl0cy8jY29tcGFyZS10d28tY29tbWl0c1xuICAgICogQHBhcmFtIHtzdHJpbmd9IGJhc2UgLSB0aGUgYmFzZSBjb21taXRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBoZWFkIC0gdGhlIGhlYWQgY29tbWl0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgY29tcGFyaXNvblxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBjb21wYXJlQnJhbmNoZXMoYmFzZSwgaGVhZCwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9jb21wYXJlLyR7YmFzZX0uLi4ke2hlYWR9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIExpc3QgYWxsIHRoZSBicmFuY2hlcyBmb3IgdGhlIHJlcG9zaXRvcnlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy8jbGlzdC1icmFuY2hlc1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgYnJhbmNoZXNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdEJyYW5jaGVzKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vYnJhbmNoZXNgLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IGEgcmF3IGJsb2IgZnJvbSB0aGUgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2dpdC9ibG9icy8jZ2V0LWEtYmxvYlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHNoYSAtIHRoZSBzaGEgb2YgdGhlIGJsb2IgdG8gZmV0Y2hcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBibG9iIGZyb20gdGhlIEFQSVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRCbG9iKHNoYSwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9naXQvYmxvYnMvJHtzaGF9YCwgbnVsbCwgY2IsICdyYXcnKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgYSBzaW5nbGUgYnJhbmNoXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvYnJhbmNoZXMvI2dldC1icmFuY2hcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBicmFuY2ggLSB0aGUgbmFtZSBvZiB0aGUgYnJhbmNoIHRvIGZldGNoXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgYnJhbmNoIGZyb20gdGhlIEFQSVxuICAgICogQHJldHVybnMge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0QnJhbmNoKGJyYW5jaCwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9icmFuY2hlcy8ke2JyYW5jaH1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IGEgY29tbWl0IGZyb20gdGhlIHJlcG9zaXRvcnlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9jb21taXRzLyNnZXQtYS1zaW5nbGUtY29tbWl0XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gc2hhIC0gdGhlIHNoYSBmb3IgdGhlIGNvbW1pdCB0byBmZXRjaFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGNvbW1pdCBkYXRhXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldENvbW1pdChzaGEsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vZ2l0L2NvbW1pdHMvJHtzaGF9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIExpc3QgdGhlIGNvbW1pdHMgb24gYSByZXBvc2l0b3J5LCBvcHRpb25hbGx5IGZpbHRlcmluZyBieSBwYXRoLCBhdXRob3Igb3IgdGltZSByYW5nZVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2NvbW1pdHMvI2xpc3QtY29tbWl0cy1vbi1hLXJlcG9zaXRvcnlcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgZmlsdGVyaW5nIG9wdGlvbnMgZm9yIGNvbW1pdHNcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5zaGFdIC0gdGhlIFNIQSBvciBicmFuY2ggdG8gc3RhcnQgZnJvbVxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnBhdGhdIC0gdGhlIHBhdGggdG8gc2VhcmNoIG9uXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuYXV0aG9yXSAtIHRoZSBjb21taXQgYXV0aG9yXG4gICAgKiBAcGFyYW0geyhEYXRlfHN0cmluZyl9IFtvcHRpb25zLnNpbmNlXSAtIG9ubHkgY29tbWl0cyBhZnRlciB0aGlzIGRhdGUgd2lsbCBiZSByZXR1cm5lZFxuICAgICogQHBhcmFtIHsoRGF0ZXxzdHJpbmcpfSBbb3B0aW9ucy51bnRpbF0gLSBvbmx5IGNvbW1pdHMgYmVmb3JlIHRoaXMgZGF0ZSB3aWxsIGJlIHJldHVybmVkXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiBjb21taXRzIGZvdW5kIG1hdGNoaW5nIHRoZSBjcml0ZXJpYVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBsaXN0Q29tbWl0cyhvcHRpb25zLCBjYikge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgIG9wdGlvbnMuc2luY2UgPSB0aGlzLl9kYXRlVG9JU08ob3B0aW9ucy5zaW5jZSk7XG4gICAgICBvcHRpb25zLnVudGlsID0gdGhpcy5fZGF0ZVRvSVNPKG9wdGlvbnMudW50aWwpO1xuXG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vY29tbWl0c2AsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBzaW5nbGUgY29tbWl0IGluZm9ybWF0aW9uIGZvciBhIHJlcG9zaXRvcnlcbiAgICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvY29tbWl0cy8jZ2V0LWEtc2luZ2xlLWNvbW1pdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWYgLSB0aGUgcmVmZXJlbmNlIGZvciB0aGUgY29tbWl0LWlzaFxuICAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBjb21taXQgaW5mb3JtYXRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgICovXG4gICBnZXRTaW5nbGVDb21taXQocmVmLCBjYikge1xuICAgICAgcmVmID0gcmVmIHx8ICcnO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2NvbW1pdHMvJHtyZWZ9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCB0aGEgc2hhIGZvciBhIHBhcnRpY3VsYXIgb2JqZWN0IGluIHRoZSByZXBvc2l0b3J5LiBUaGlzIGlzIGEgY29udmVuaWVuY2UgZnVuY3Rpb25cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9jb250ZW50cy8jZ2V0LWNvbnRlbnRzXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2JyYW5jaF0gLSB0aGUgYnJhbmNoIHRvIGxvb2sgaW4sIG9yIHRoZSByZXBvc2l0b3J5J3MgZGVmYXVsdCBicmFuY2ggaWYgb21pdHRlZFxuICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSB0aGUgcGF0aCBvZiB0aGUgZmlsZSBvciBkaXJlY3RvcnlcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIGEgZGVzY3JpcHRpb24gb2YgdGhlIHJlcXVlc3RlZCBvYmplY3QsIGluY2x1ZGluZyBhIGBTSEFgIHByb3BlcnR5XG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldFNoYShicmFuY2gsIHBhdGgsIGNiKSB7XG4gICAgICBicmFuY2ggPSBicmFuY2ggPyBgP3JlZj0ke2JyYW5jaH1gIDogJyc7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vY29udGVudHMvJHtwYXRofSR7YnJhbmNofWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IHRoZSBjb21taXQgc3RhdHVzZXMgZm9yIGEgcGFydGljdWxhciBzaGEsIGJyYW5jaCwgb3IgdGFnXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3Mvc3RhdHVzZXMvI2xpc3Qtc3RhdHVzZXMtZm9yLWEtc3BlY2lmaWMtcmVmXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gc2hhIC0gdGhlIHNoYSwgYnJhbmNoLCBvciB0YWcgdG8gZ2V0IHN0YXR1c2VzIGZvclxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2Ygc3RhdHVzZXNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdFN0YXR1c2VzKHNoYSwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9jb21taXRzLyR7c2hhfS9zdGF0dXNlc2AsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgYSBkZXNjcmlwdGlvbiBvZiBhIGdpdCB0cmVlXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2l0L3RyZWVzLyNnZXQtYS10cmVlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdHJlZVNIQSAtIHRoZSBTSEEgb2YgdGhlIHRyZWUgdG8gZmV0Y2hcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBjYWxsYmFjayBkYXRhXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldFRyZWUodHJlZVNIQSwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9naXQvdHJlZXMvJHt0cmVlU0hBfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBibG9iXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2l0L2Jsb2JzLyNjcmVhdGUtYS1ibG9iXG4gICAgKiBAcGFyYW0geyhzdHJpbmd8QnVmZmVyfEJsb2IpfSBjb250ZW50IC0gdGhlIGNvbnRlbnQgdG8gYWRkIHRvIHRoZSByZXBvc2l0b3J5XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgZGV0YWlscyBvZiB0aGUgY3JlYXRlZCBibG9iXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNyZWF0ZUJsb2IoY29udGVudCwgY2IpIHtcbiAgICAgIGxldCBwb3N0Qm9keSA9IHRoaXMuX2dldENvbnRlbnRPYmplY3QoY29udGVudCk7XG5cbiAgICAgIGxvZygnc2VuZGluZyBjb250ZW50JywgcG9zdEJvZHkpO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9naXQvYmxvYnNgLCBwb3N0Qm9keSwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCB0aGUgb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgcHJvdmlkZWQgY29udGVudFxuICAgICogQHBhcmFtIHtzdHJpbmd8QnVmZmVyfEJsb2J9IGNvbnRlbnQgLSB0aGUgY29udGVudCB0byBzZW5kIHRvIHRoZSBzZXJ2ZXJcbiAgICAqIEByZXR1cm4ge09iamVjdH0gdGhlIHJlcHJlc2VudGF0aW9uIG9mIGBjb250ZW50YCBmb3IgdGhlIEdpdEh1YiBBUElcbiAgICAqL1xuICAgX2dldENvbnRlbnRPYmplY3QoY29udGVudCkge1xuICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgbG9nKCdjb250ZXQgaXMgYSBzdHJpbmcnKTtcbiAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb250ZW50OiBVdGY4LmVuY29kZShjb250ZW50KSxcbiAgICAgICAgICAgIGVuY29kaW5nOiAndXRmLTgnLFxuICAgICAgICAgfTtcblxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgQnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiBjb250ZW50IGluc3RhbmNlb2YgQnVmZmVyKSB7XG4gICAgICAgICBsb2coJ1dlIGFwcGVhciB0byBiZSBpbiBOb2RlJyk7XG4gICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29udGVudDogY29udGVudC50b1N0cmluZygnYmFzZTY0JyksXG4gICAgICAgICAgICBlbmNvZGluZzogJ2Jhc2U2NCcsXG4gICAgICAgICB9O1xuXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiBjb250ZW50IGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgICAgbG9nKCdXZSBhcHBlYXIgdG8gYmUgaW4gdGhlIGJyb3dzZXInKTtcbiAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb250ZW50OiBCYXNlNjQuZW5jb2RlKGNvbnRlbnQpLFxuICAgICAgICAgICAgZW5jb2Rpbmc6ICdiYXNlNjQnLFxuICAgICAgICAgfTtcblxuICAgICAgfSBlbHNlIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgbG9nKGBOb3Qgc3VyZSB3aGF0IHRoaXMgY29udGVudCBpczogJHt0eXBlb2YgY29udGVudH0sICR7SlNPTi5zdHJpbmdpZnkoY29udGVudCl9YCk7XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gY29udGVudCBwYXNzZWQgdG8gcG9zdEJsb2IuIE11c3QgYmUgc3RyaW5nIG9yIEJ1ZmZlciAobm9kZSkgb3IgQmxvYiAod2ViKScpO1xuICAgICAgfVxuICAgfVxuXG4gICAvKipcbiAgICAqIFVwZGF0ZSBhIHRyZWUgaW4gR2l0XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2l0L3RyZWVzLyNjcmVhdGUtYS10cmVlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZVRyZWVTSEEgLSB0aGUgU0hBIG9mIHRoZSB0cmVlIHRvIHVwZGF0ZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSB0aGUgcGF0aCBmb3IgdGhlIG5ldyBmaWxlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gYmxvYlNIQSAtIHRoZSBTSEEgZm9yIHRoZSBibG9iIHRvIHB1dCBhdCBgcGF0aGBcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBuZXcgdHJlZSB0aGF0IGlzIGNyZWF0ZWRcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgUmVwb3NpdG9yeSNjcmVhdGVUcmVlfSBpbnN0ZWFkXG4gICAgKi9cbiAgIHVwZGF0ZVRyZWUoYmFzZVRyZWVTSEEsIHBhdGgsIGJsb2JTSEEsIGNiKSB7XG4gICAgICBsZXQgbmV3VHJlZSA9IHtcbiAgICAgICAgIGJhc2VfdHJlZTogYmFzZVRyZWVTSEEsIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgIHRyZWU6IFt7XG4gICAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgICAgc2hhOiBibG9iU0hBLFxuICAgICAgICAgICAgbW9kZTogJzEwMDY0NCcsXG4gICAgICAgICAgICB0eXBlOiAnYmxvYicsXG4gICAgICAgICB9XSxcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQT1NUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vZ2l0L3RyZWVzYCwgbmV3VHJlZSwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyB0cmVlIGluIGdpdFxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2dpdC90cmVlcy8jY3JlYXRlLWEtdHJlZVxuICAgICogQHBhcmFtIHtPYmplY3R9IHRyZWUgLSB0aGUgdHJlZSB0byBjcmVhdGVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlU0hBIC0gdGhlIHJvb3Qgc2hhIG9mIHRoZSB0cmVlXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgbmV3IHRyZWUgdGhhdCBpcyBjcmVhdGVkXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNyZWF0ZVRyZWUodHJlZSwgYmFzZVNIQSwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQT1NUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vZ2l0L3RyZWVzYCwge1xuICAgICAgICAgdHJlZSxcbiAgICAgICAgIGJhc2VfdHJlZTogYmFzZVNIQSwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgICAgIH0sIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBBZGQgYSBjb21taXQgdG8gdGhlIHJlcG9zaXRvcnlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9naXQvY29tbWl0cy8jY3JlYXRlLWEtY29tbWl0XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50IC0gdGhlIFNIQSBvZiB0aGUgcGFyZW50IGNvbW1pdFxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRyZWUgLSB0aGUgU0hBIG9mIHRoZSB0cmVlIGZvciB0aGlzIGNvbW1pdFxuICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgLSB0aGUgY29tbWl0IG1lc3NhZ2VcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBjb21taXQgdGhhdCBpcyBjcmVhdGVkXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNvbW1pdChwYXJlbnQsIHRyZWUsIG1lc3NhZ2UsIGNiKSB7XG4gICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICB0cmVlLFxuICAgICAgICAgcGFyZW50czogW3BhcmVudF0sXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUE9TVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2dpdC9jb21taXRzYCwgZGF0YSwgY2IpXG4gICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX19jdXJyZW50VHJlZS5zaGEgPSByZXNwb25zZS5kYXRhLnNoYTsgLy8gVXBkYXRlIGxhdGVzdCBjb21taXRcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgIH0pO1xuICAgfVxuXG4gICAvKipcbiAgICAqIFVwZGF0ZSBhIHJlZlxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2dpdC9yZWZzLyN1cGRhdGUtYS1yZWZlcmVuY2VcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWYgLSB0aGUgcmVmIHRvIHVwZGF0ZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbW1pdFNIQSAtIHRoZSBTSEEgdG8gcG9pbnQgdGhlIHJlZmVyZW5jZSB0b1xuICAgICogQHBhcmFtIHtib29sZWFufSBmb3JjZSAtIGluZGljYXRlcyB3aGV0aGVyIHRvIGZvcmNlIG9yIGVuc3VyZSBhIGZhc3QtZm9yd2FyZCB1cGRhdGVcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSB1cGRhdGVkIHJlZiBiYWNrXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIHVwZGF0ZUhlYWQocmVmLCBjb21taXRTSEEsIGZvcmNlLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BBVENIJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vZ2l0L3JlZnMvJHtyZWZ9YCwge1xuICAgICAgICAgc2hhOiBjb21taXRTSEEsXG4gICAgICAgICBmb3JjZTogZm9yY2UsXG4gICAgICB9LCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogVXBkYXRlIGNvbW1pdCBzdGF0dXNcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9zdGF0dXNlcy9cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb21taXRTSEEgLSB0aGUgU0hBIG9mIHRoZSBjb21taXQgdGhhdCBzaG91bGQgYmUgdXBkYXRlZFxuICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBDb21taXQgc3RhdHVzIHBhcmFtZXRlcnNcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnN0YXRlIC0gVGhlIHN0YXRlIG9mIHRoZSBzdGF0dXMuIENhbiBiZSBvbmUgb2Y6IHBlbmRpbmcsIHN1Y2Nlc3MsIGVycm9yLCBvciBmYWlsdXJlLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnRhcmdldF91cmxdIC0gVGhlIHRhcmdldCBVUkwgdG8gYXNzb2NpYXRlIHdpdGggdGhpcyBzdGF0dXMuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuZGVzY3JpcHRpb25dIC0gQSBzaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgc3RhdHVzLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNvbnRleHRdIC0gQSBzdHJpbmcgbGFiZWwgdG8gZGlmZmVyZW50aWF0ZSB0aGlzIHN0YXR1cyBhbW9uZyBDSSBzeXN0ZW1zLlxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIHVwZGF0ZWQgY29tbWl0IGJhY2tcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgdXBkYXRlU3RhdHVzKGNvbW1pdFNIQSwgb3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQT1NUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vc3RhdHVzZXMvJHtjb21taXRTSEF9YCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIFVwZGF0ZSByZXBvc2l0b3J5IGluZm9ybWF0aW9uXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvI2VkaXRcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gTmV3IHBhcmFtZXRlcnMgdGhhdCB3aWxsIGJlIHNldCB0byB0aGUgcmVwb3NpdG9yeVxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubmFtZSAtIE5hbWUgb2YgdGhlIHJlcG9zaXRvcnlcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5kZXNjcmlwdGlvbl0gLSBBIHNob3J0IGRlc2NyaXB0aW9uIG9mIHRoZSByZXBvc2l0b3J5XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuaG9tZXBhZ2VdIC0gQSBVUkwgd2l0aCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSByZXBvc2l0b3J5XG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnByaXZhdGVdIC0gRWl0aGVyIHRydWUgdG8gbWFrZSB0aGUgcmVwb3NpdG9yeSBwcml2YXRlLCBvciBmYWxzZSB0byBtYWtlIGl0IHB1YmxpYy5cbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuaGFzX2lzc3Vlc10gLSBFaXRoZXIgdHJ1ZSB0byBlbmFibGUgaXNzdWVzIGZvciB0aGlzIHJlcG9zaXRvcnksIGZhbHNlIHRvIGRpc2FibGUgdGhlbS5cbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuaGFzX3dpa2ldIC0gRWl0aGVyIHRydWUgdG8gZW5hYmxlIHRoZSB3aWtpIGZvciB0aGlzIHJlcG9zaXRvcnksIGZhbHNlIHRvIGRpc2FibGUgaXQuXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmhhc19kb3dubG9hZHNdIC0gRWl0aGVyIHRydWUgdG8gZW5hYmxlIGRvd25sb2FkcywgZmFsc2UgdG8gZGlzYWJsZSB0aGVtLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmRlZmF1bHRfYnJhbmNoXSAtIFVwZGF0ZXMgdGhlIGRlZmF1bHQgYnJhbmNoIGZvciB0aGlzIHJlcG9zaXRvcnkuXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgdXBkYXRlZCByZXBvc2l0b3J5IGJhY2tcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgdXBkYXRlUmVwb3NpdG9yeShvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BBVENIJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX1gLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgLyoqXG4gICAgKiBHZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHJlcG9zaXRvcnlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy8jZ2V0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHJlcG9zaXRvcnlcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0RGV0YWlscyhjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIExpc3QgdGhlIGNvbnRyaWJ1dG9ycyB0byB0aGUgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zLyNsaXN0LWNvbnRyaWJ1dG9yc1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgY29udHJpYnV0b3JzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldENvbnRyaWJ1dG9ycyhjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2NvbnRyaWJ1dG9yc2AsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IHRoZSBjb250cmlidXRvciBzdGF0cyB0byB0aGUgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zLyNsaXN0LWNvbnRyaWJ1dG9yc1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgY29udHJpYnV0b3JzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldENvbnRyaWJ1dG9yU3RhdHMoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9zdGF0cy9jb250cmlidXRvcnNgLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCB0aGUgdXNlcnMgd2hvIGFyZSBjb2xsYWJvcmF0b3JzIG9uIHRoZSByZXBvc2l0b3J5LiBUaGUgY3VycmVudGx5IGF1dGhlbnRpY2F0ZWQgdXNlciBtdXN0IGhhdmVcbiAgICAqIHB1c2ggYWNjZXNzIHRvIHVzZSB0aGlzIG1ldGhvZFxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2NvbGxhYm9yYXRvcnMvI2xpc3QtY29sbGFib3JhdG9yc1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgY29sbGFib3JhdG9yc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRDb2xsYWJvcmF0b3JzKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vY29sbGFib3JhdG9yc2AsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDaGVjayBpZiBhIHVzZXIgaXMgYSBjb2xsYWJvcmF0b3Igb24gdGhlIHJlcG9zaXRvcnlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9jb2xsYWJvcmF0b3JzLyNjaGVjay1pZi1hLXVzZXItaXMtYS1jb2xsYWJvcmF0b3JcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VybmFtZSAtIHRoZSB1c2VyIHRvIGNoZWNrXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0cnVlIGlmIHRoZSB1c2VyIGlzIGEgY29sbGFib3JhdG9yIGFuZCBmYWxzZSBpZiB0aGV5IGFyZSBub3RcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3Qge0Jvb2xlYW59IFtkZXNjcmlwdGlvbl1cbiAgICAqL1xuICAgaXNDb2xsYWJvcmF0b3IodXNlcm5hbWUsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vY29sbGFib3JhdG9ycy8ke3VzZXJuYW1lfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgdGhlIGNvbnRlbnRzIG9mIGEgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2NvbnRlbnRzLyNnZXQtY29udGVudHNcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWYgLSB0aGUgcmVmIHRvIGNoZWNrXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIHRoZSBwYXRoIGNvbnRhaW5pbmcgdGhlIGNvbnRlbnQgdG8gZmV0Y2hcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmF3IC0gYHRydWVgIGlmIHRoZSByZXN1bHRzIHNob3VsZCBiZSByZXR1cm5lZCByYXcgaW5zdGVhZCBvZiBHaXRIdWIncyBub3JtYWxpemVkIGZvcm1hdFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGZldGNoZWQgZGF0YVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRDb250ZW50cyhyZWYsIHBhdGgsIHJhdywgY2IpIHtcbiAgICAgIHBhdGggPSBwYXRoID8gYCR7ZW5jb2RlVVJJKHBhdGgpfWAgOiAnJztcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9jb250ZW50cy8ke3BhdGh9YCwge1xuICAgICAgICAgcmVmLFxuICAgICAgfSwgY2IsIHJhdyk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IHRoZSBSRUFETUUgb2YgYSByZXBvc2l0b3J5XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvY29udGVudHMvI2dldC10aGUtcmVhZG1lXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcmVmIC0gdGhlIHJlZiB0byBjaGVja1xuICAgICogQHBhcmFtIHtib29sZWFufSByYXcgLSBgdHJ1ZWAgaWYgdGhlIHJlc3VsdHMgc2hvdWxkIGJlIHJldHVybmVkIHJhdyBpbnN0ZWFkIG9mIEdpdEh1YidzIG5vcm1hbGl6ZWQgZm9ybWF0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgZmV0Y2hlZCBkYXRhXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldFJlYWRtZShyZWYsIHJhdywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9yZWFkbWVgLCB7XG4gICAgICAgICByZWYsXG4gICAgICB9LCBjYiwgcmF3KTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBGb3JrIGEgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2ZvcmtzLyNjcmVhdGUtYS1mb3JrXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIG5ld2x5IGNyZWF0ZWQgZm9ya1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBmb3JrKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUE9TVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2ZvcmtzYCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIExpc3QgYSByZXBvc2l0b3J5J3MgZm9ya3NcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9mb3Jrcy8jbGlzdC1mb3Jrc1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgcmVwb3NpdG9yaWVzIGZvcmtlZCBmcm9tIHRoaXMgb25lXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3RGb3JrcyhjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2ZvcmtzYCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBicmFuY2ggZnJvbSBhbiBleGlzdGluZyBicmFuY2guXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29sZEJyYW5jaD1tYXN0ZXJdIC0gdGhlIG5hbWUgb2YgdGhlIGV4aXN0aW5nIGJyYW5jaFxuICAgICogQHBhcmFtIHtzdHJpbmd9IG5ld0JyYW5jaCAtIHRoZSBuYW1lIG9mIHRoZSBuZXcgYnJhbmNoXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgY29tbWl0IGRhdGEgZm9yIHRoZSBoZWFkIG9mIHRoZSBuZXcgYnJhbmNoXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNyZWF0ZUJyYW5jaChvbGRCcmFuY2gsIG5ld0JyYW5jaCwgY2IpIHtcbiAgICAgIGlmICh0eXBlb2YgbmV3QnJhbmNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICBjYiA9IG5ld0JyYW5jaDtcbiAgICAgICAgIG5ld0JyYW5jaCA9IG9sZEJyYW5jaDtcbiAgICAgICAgIG9sZEJyYW5jaCA9ICdtYXN0ZXInO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5nZXRSZWYoYGhlYWRzLyR7b2xkQnJhbmNofWApXG4gICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGxldCBzaGEgPSByZXNwb25zZS5kYXRhLm9iamVjdC5zaGE7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVSZWYoe1xuICAgICAgICAgICAgICAgc2hhLFxuICAgICAgICAgICAgICAgcmVmOiBgcmVmcy9oZWFkcy8ke25ld0JyYW5jaH1gLFxuICAgICAgICAgICAgfSwgY2IpO1xuICAgICAgICAgfSk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IHB1bGwgcmVxdWVzdFxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3B1bGxzLyNjcmVhdGUtYS1wdWxsLXJlcXVlc3RcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gdGhlIHB1bGwgcmVxdWVzdCBkZXNjcmlwdGlvblxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIG5ldyBwdWxsIHJlcXVlc3RcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgY3JlYXRlUHVsbFJlcXVlc3Qob3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQT1NUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vcHVsbHNgLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogVXBkYXRlIGEgcHVsbCByZXF1ZXN0XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcHVsbHMvI3VwZGF0ZS1hLXB1bGwtcmVxdWVzdFxuICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBudW1iZXIgLSB0aGUgbnVtYmVyIG9mIHRoZSBwdWxsIHJlcXVlc3QgdG8gdXBkYXRlXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHRoZSBwdWxsIHJlcXVlc3QgZGVzY3JpcHRpb25cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIHB1bGwgcmVxdWVzdCBpbmZvcm1hdGlvblxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICB1cGRhdGVQdWxsUmVxdWVzdChudW1iZXIsIG9wdGlvbnMsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUEFUQ0gnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9wdWxscy8ke251bWJlcn1gLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCB0aGUgaG9va3MgZm9yIHRoZSByZXBvc2l0b3J5XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvaG9va3MvI2xpc3QtaG9va3NcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIGhvb2tzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3RIb29rcyhjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2hvb2tzYCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCBhIGhvb2sgZm9yIHRoZSByZXBvc2l0b3J5XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvaG9va3MvI2dldC1zaW5nbGUtaG9va1xuICAgICogQHBhcmFtIHtudW1iZXJ9IGlkIC0gdGhlIGlkIG9mIHRoZSB3ZWJvb2tcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBkZXRhaWxzIG9mIHRoZSB3ZWJvb2tcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0SG9vayhpZCwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9ob29rcy8ke2lkfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBBZGQgYSBuZXcgaG9vayB0byB0aGUgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2hvb2tzLyNjcmVhdGUtYS1ob29rXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHRoZSBjb25maWd1cmF0aW9uIGRlc2NyaWJpbmcgdGhlIG5ldyBob29rXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgbmV3IHdlYmhvb2tcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgY3JlYXRlSG9vayhvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9ob29rc2AsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBFZGl0IGFuIGV4aXN0aW5nIHdlYmhvb2tcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9ob29rcy8jZWRpdC1hLWhvb2tcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBpZCAtIHRoZSBpZCBvZiB0aGUgd2ViaG9va1xuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSB0aGUgbmV3IGRlc2NyaXB0aW9uIG9mIHRoZSB3ZWJob29rXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgdXBkYXRlZCB3ZWJob29rXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIHVwZGF0ZUhvb2soaWQsIG9wdGlvbnMsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUEFUQ0gnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9ob29rcy8ke2lkfWAsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBEZWxldGUgYSB3ZWJob29rXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvaG9va3MvI2RlbGV0ZS1hLWhvb2tcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBpZCAtIHRoZSBpZCBvZiB0aGUgd2ViaG9vayB0byBiZSBkZWxldGVkXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0cnVlIGlmIHRoZSBjYWxsIGlzIHN1Y2Nlc3NmdWxcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZGVsZXRlSG9vayhpZCwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdERUxFVEUnLCBgJHt0aGlzLl9fZnVsbG5hbWV9L2hvb2tzLyR7aWR9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIExpc3QgdGhlIGRlcGxveSBrZXlzIGZvciB0aGUgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2tleXMvI2xpc3QtZGVwbG95LWtleXNcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIGRlcGxveSBrZXlzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3RLZXlzKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0va2V5c2AsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgYSBkZXBsb3kga2V5IGZvciB0aGUgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2tleXMvI2dldC1hLWRlcGxveS1rZXlcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBpZCAtIHRoZSBpZCBvZiB0aGUgZGVwbG95IGtleVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGRldGFpbHMgb2YgdGhlIGRlcGxveSBrZXlcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0S2V5KGlkLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2tleXMvJHtpZH1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQWRkIGEgbmV3IGRlcGxveSBrZXkgdG8gdGhlIHJlcG9zaXRvcnlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9rZXlzLyNhZGQtYS1uZXctZGVwbG95LWtleVxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSB0aGUgY29uZmlndXJhdGlvbiBkZXNjcmliaW5nIHRoZSBuZXcgZGVwbG95IGtleVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIG5ldyBkZXBsb3kga2V5XG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNyZWF0ZUtleShvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9rZXlzYCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIERlbGV0ZSBhIGRlcGxveSBrZXlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9rZXlzLyNyZW1vdmUtYS1kZXBsb3kta2V5XG4gICAgKiBAcGFyYW0ge251bWJlcn0gaWQgLSB0aGUgaWQgb2YgdGhlIGRlcGxveSBrZXkgdG8gYmUgZGVsZXRlZFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdHJ1ZSBpZiB0aGUgY2FsbCBpcyBzdWNjZXNzZnVsXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGRlbGV0ZUtleShpZCwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdERUxFVEUnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9rZXlzLyR7aWR9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIERlbGV0ZSBhIGZpbGUgZnJvbSBhIGJyYW5jaFxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2NvbnRlbnRzLyNkZWxldGUtYS1maWxlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gYnJhbmNoIC0gdGhlIGJyYW5jaCB0byBkZWxldGUgZnJvbSwgb3IgdGhlIGRlZmF1bHQgYnJhbmNoIGlmIG5vdCBzcGVjaWZpZWRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gdGhlIHBhdGggb2YgdGhlIGZpbGUgdG8gcmVtb3ZlXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgY29tbWl0IGluIHdoaWNoIHRoZSBkZWxldGUgb2NjdXJyZWRcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZGVsZXRlRmlsZShicmFuY2gsIHBhdGgsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTaGEoYnJhbmNoLCBwYXRoKVxuICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVDb21taXQgPSB7XG4gICAgICAgICAgICAgICBtZXNzYWdlOiBgRGVsZXRlIHRoZSBmaWxlIGF0ICcke3BhdGh9J2AsXG4gICAgICAgICAgICAgICBzaGE6IHJlc3BvbnNlLmRhdGEuc2hhLFxuICAgICAgICAgICAgICAgYnJhbmNoLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdERUxFVEUnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9jb250ZW50cy8ke3BhdGh9YCwgZGVsZXRlQ29tbWl0LCBjYik7XG4gICAgICAgICB9KTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDaGFuZ2UgYWxsIHJlZmVyZW5jZXMgaW4gYSByZXBvIGZyb20gb2xkUGF0aCB0byBuZXdfcGF0aFxuICAgICogQHBhcmFtIHtzdHJpbmd9IGJyYW5jaCAtIHRoZSBicmFuY2ggdG8gY2Fycnkgb3V0IHRoZSByZWZlcmVuY2UgY2hhbmdlLCBvciB0aGUgZGVmYXVsdCBicmFuY2ggaWYgbm90IHNwZWNpZmllZFxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9sZFBhdGggLSBvcmlnaW5hbCBwYXRoXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3UGF0aCAtIG5ldyByZWZlcmVuY2UgcGF0aFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGNvbW1pdCBpbiB3aGljaCB0aGUgbW92ZSBvY2N1cnJlZFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBtb3ZlKGJyYW5jaCwgb2xkUGF0aCwgbmV3UGF0aCwgY2IpIHtcbiAgICAgIGxldCBvbGRTaGE7XG4gICAgICByZXR1cm4gdGhpcy5nZXRSZWYoYGhlYWRzLyR7YnJhbmNofWApXG4gICAgICAgICAudGhlbigoe2RhdGE6IHtvYmplY3R9fSkgPT4gdGhpcy5nZXRUcmVlKGAke29iamVjdC5zaGF9P3JlY3Vyc2l2ZT10cnVlYCkpXG4gICAgICAgICAudGhlbigoe2RhdGE6IHt0cmVlLCBzaGF9fSkgPT4ge1xuICAgICAgICAgICAgb2xkU2hhID0gc2hhO1xuICAgICAgICAgICAgbGV0IG5ld1RyZWUgPSB0cmVlLm1hcCgocmVmKSA9PiB7XG4gICAgICAgICAgICAgICBpZiAocmVmLnBhdGggPT09IG9sZFBhdGgpIHtcbiAgICAgICAgICAgICAgICAgIHJlZi5wYXRoID0gbmV3UGF0aDtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGlmIChyZWYudHlwZSA9PT0gJ3RyZWUnKSB7XG4gICAgICAgICAgICAgICAgICBkZWxldGUgcmVmLnNoYTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIHJldHVybiByZWY7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVRyZWUobmV3VHJlZSk7XG4gICAgICAgICB9KVxuICAgICAgICAgLnRoZW4oKHtkYXRhOiB0cmVlfSkgPT4gdGhpcy5jb21taXQob2xkU2hhLCB0cmVlLnNoYSwgYFJlbmFtZWQgJyR7b2xkUGF0aH0nIHRvICcke25ld1BhdGh9J2ApKVxuICAgICAgICAgLnRoZW4oKHtkYXRhOiBjb21taXR9KSA9PiB0aGlzLnVwZGF0ZUhlYWQoYGhlYWRzLyR7YnJhbmNofWAsIGNvbW1pdC5zaGEsIHRydWUsIGNiKSk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogV3JpdGUgYSBmaWxlIHRvIHRoZSByZXBvc2l0b3J5XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvY29udGVudHMvI3VwZGF0ZS1hLWZpbGVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBicmFuY2ggLSB0aGUgbmFtZSBvZiB0aGUgYnJhbmNoXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIHRoZSBwYXRoIGZvciB0aGUgZmlsZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgLSB0aGUgY29udGVudHMgb2YgdGhlIGZpbGVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIC0gdGhlIGNvbW1pdCBtZXNzYWdlXG4gICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gY29tbWl0IG9wdGlvbnNcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5hdXRob3JdIC0gdGhlIGF1dGhvciBvZiB0aGUgY29tbWl0XG4gICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuY29tbWl0ZXJdIC0gdGhlIGNvbW1pdHRlclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5lbmNvZGVdIC0gdHJ1ZSBpZiB0aGUgY29udGVudCBzaG91bGQgYmUgYmFzZTY0IGVuY29kZWRcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBuZXcgY29tbWl0XG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIHdyaXRlRmlsZShicmFuY2gsIHBhdGgsIGNvbnRlbnQsIG1lc3NhZ2UsIG9wdGlvbnMsIGNiKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgIGNiID0gb3B0aW9ucztcbiAgICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgIH1cbiAgICAgIGxldCBmaWxlUGF0aCA9IHBhdGggPyBlbmNvZGVVUkkocGF0aCkgOiAnJztcbiAgICAgIGxldCBzaG91bGRFbmNvZGUgPSBvcHRpb25zLmVuY29kZSAhPT0gZmFsc2U7XG4gICAgICBsZXQgY29tbWl0ID0ge1xuICAgICAgICAgYnJhbmNoLFxuICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgIGF1dGhvcjogb3B0aW9ucy5hdXRob3IsXG4gICAgICAgICBjb21taXR0ZXI6IG9wdGlvbnMuY29tbWl0dGVyLFxuICAgICAgICAgY29udGVudDogc2hvdWxkRW5jb2RlID8gQmFzZTY0LmVuY29kZShjb250ZW50KSA6IGNvbnRlbnQsXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gdGhpcy5nZXRTaGEoYnJhbmNoLCBmaWxlUGF0aClcbiAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29tbWl0LnNoYSA9IHJlc3BvbnNlLmRhdGEuc2hhO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BVVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2NvbnRlbnRzLyR7ZmlsZVBhdGh9YCwgY29tbWl0LCBjYik7XG4gICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUFVUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vY29udGVudHMvJHtmaWxlUGF0aH1gLCBjb21taXQsIGNiKTtcbiAgICAgICAgIH0pO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENoZWNrIGlmIGEgcmVwb3NpdG9yeSBpcyBzdGFycmVkIGJ5IHlvdVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2FjdGl2aXR5L3N0YXJyaW5nLyNjaGVjay1pZi15b3UtYXJlLXN0YXJyaW5nLWEtcmVwb3NpdG9yeVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdHJ1ZSBpZiB0aGUgcmVwb3NpdG9yeSBpcyBzdGFycmVkIGFuZCBmYWxzZSBpZiB0aGUgcmVwb3NpdG9yeVxuICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXMgbm90IHN0YXJyZWRcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3Qge0Jvb2xlYW59IFtkZXNjcmlwdGlvbl1cbiAgICAqL1xuICAgaXNTdGFycmVkKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdDIwNG9yNDA0KGAvdXNlci9zdGFycmVkLyR7dGhpcy5fX2Z1bGxuYW1lfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBTdGFyIGEgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2FjdGl2aXR5L3N0YXJyaW5nLyNzdGFyLWEtcmVwb3NpdG9yeVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdHJ1ZSBpZiB0aGUgcmVwb3NpdG9yeSBpcyBzdGFycmVkXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIHN0YXIoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQVVQnLCBgL3VzZXIvc3RhcnJlZC8ke3RoaXMuX19mdWxsbmFtZX1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogVW5zdGFyIGEgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2FjdGl2aXR5L3N0YXJyaW5nLyN1bnN0YXItYS1yZXBvc2l0b3J5XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0cnVlIGlmIHRoZSByZXBvc2l0b3J5IGlzIHVuc3RhcnJlZFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICB1bnN0YXIoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdERUxFVEUnLCBgL3VzZXIvc3RhcnJlZC8ke3RoaXMuX19mdWxsbmFtZX1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IHJlbGVhc2VcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9yZWxlYXNlcy8jY3JlYXRlLWEtcmVsZWFzZVxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIHJlbGVhc2VcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBuZXdseSBjcmVhdGVkIHJlbGVhc2VcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgY3JlYXRlUmVsZWFzZShvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9yZWxlYXNlc2AsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBFZGl0IGEgcmVsZWFzZVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL3JlbGVhc2VzLyNlZGl0LWEtcmVsZWFzZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gdGhlIGlkIG9mIHRoZSByZWxlYXNlXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgcmVsZWFzZVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIG1vZGlmaWVkIHJlbGVhc2VcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgdXBkYXRlUmVsZWFzZShpZCwgb3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQQVRDSCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L3JlbGVhc2VzLyR7aWR9YCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCBpbmZvcm1hdGlvbiBhYm91dCBhbGwgcmVsZWFzZXNcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9yZWxlYXNlcy8jbGlzdC1yZWxlYXNlcy1mb3ItYS1yZXBvc2l0b3J5XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgcmVsZWFzZSBpbmZvcm1hdGlvblxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBsaXN0UmVsZWFzZXMoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9yZWxlYXNlc2AsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgaW5mb3JtYXRpb24gYWJvdXQgYSByZWxlYXNlXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvcmVsZWFzZXMvI2dldC1hLXNpbmdsZS1yZWxlYXNlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgLSB0aGUgaWQgb2YgdGhlIHJlbGVhc2VcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSByZWxlYXNlIGluZm9ybWF0aW9uXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldFJlbGVhc2UoaWQsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vcmVsZWFzZXMvJHtpZH1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRGVsZXRlIGEgcmVsZWFzZVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL3JlbGVhc2VzLyNkZWxldGUtYS1yZWxlYXNlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgLSB0aGUgcmVsZWFzZSB0byBiZSBkZWxldGVkXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0cnVlIGlmIHRoZSBvcGVyYXRpb24gaXMgc3VjY2Vzc2Z1bFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBkZWxldGVSZWxlYXNlKGlkLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0RFTEVURScsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L3JlbGVhc2VzLyR7aWR9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIE1lcmdlIGEgcHVsbCByZXF1ZXN0XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcHVsbHMvI21lcmdlLWEtcHVsbC1yZXF1ZXN0LW1lcmdlLWJ1dHRvblxuICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBudW1iZXIgLSB0aGUgbnVtYmVyIG9mIHRoZSBwdWxsIHJlcXVlc3QgdG8gbWVyZ2VcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gdGhlIG1lcmdlIG9wdGlvbnMgZm9yIHRoZSBwdWxsIHJlcXVlc3RcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIG1lcmdlIGluZm9ybWF0aW9uIGlmIHRoZSBvcGVyYXRpb24gaXMgc3VjY2Vzc2Z1bFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBtZXJnZVB1bGxSZXF1ZXN0KG51bWJlciwgb3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQVVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9wdWxscy8ke251bWJlcn0vbWVyZ2VgLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IGluZm9ybWF0aW9uIGFib3V0IGFsbCBwcm9qZWN0c1xuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3Byb2plY3RzLyNsaXN0LXJlcG9zaXRvcnktcHJvamVjdHNcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgcHJvamVjdHNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdFByb2plY3RzKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdEFsbFBhZ2VzKGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L3Byb2plY3RzYCwge0FjY2VwdEhlYWRlcjogJ2luZXJ0aWEtcHJldmlldyd9LCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IHByb2plY3RcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9wcm9qZWN0cy8jY3JlYXRlLWEtcmVwb3NpdG9yeS1wcm9qZWN0XG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIG5ld2x5IGNyZWF0ZWQgcHJvamVjdFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBjcmVhdGVQcm9qZWN0KG9wdGlvbnMsIGNiKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgIG9wdGlvbnMuQWNjZXB0SGVhZGVyID0gJ2luZXJ0aWEtcHJldmlldyc7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUE9TVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L3Byb2plY3RzYCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVwb3NpdG9yeTtcbiJdfQ==
//# sourceMappingURL=Repository.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13).Buffer))

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/utf8js v2.1.2 by @mathias */
;(function(root) {

	// Detect free variables `exports`
	var freeExports = typeof exports == 'object' && exports;

	// Detect free variable `module`
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var stringFromCharCode = String.fromCharCode;

	// Taken from https://mths.be/punycode
	function ucs2decode(string) {
		var output = [];
		var counter = 0;
		var length = string.length;
		var value;
		var extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	// Taken from https://mths.be/punycode
	function ucs2encode(array) {
		var length = array.length;
		var index = -1;
		var value;
		var output = '';
		while (++index < length) {
			value = array[index];
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
		}
		return output;
	}

	function checkScalarValue(codePoint) {
		if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
			throw Error(
				'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
				' is not a scalar value'
			);
		}
	}
	/*--------------------------------------------------------------------------*/

	function createByte(codePoint, shift) {
		return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
	}

	function encodeCodePoint(codePoint) {
		if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
			return stringFromCharCode(codePoint);
		}
		var symbol = '';
		if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
			symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
		}
		else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
			checkScalarValue(codePoint);
			symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
			symbol += createByte(codePoint, 6);
		}
		else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
			symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
			symbol += createByte(codePoint, 12);
			symbol += createByte(codePoint, 6);
		}
		symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
		return symbol;
	}

	function utf8encode(string) {
		var codePoints = ucs2decode(string);
		var length = codePoints.length;
		var index = -1;
		var codePoint;
		var byteString = '';
		while (++index < length) {
			codePoint = codePoints[index];
			byteString += encodeCodePoint(codePoint);
		}
		return byteString;
	}

	/*--------------------------------------------------------------------------*/

	function readContinuationByte() {
		if (byteIndex >= byteCount) {
			throw Error('Invalid byte index');
		}

		var continuationByte = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		if ((continuationByte & 0xC0) == 0x80) {
			return continuationByte & 0x3F;
		}

		// If we end up here, it’s not a continuation byte
		throw Error('Invalid continuation byte');
	}

	function decodeSymbol() {
		var byte1;
		var byte2;
		var byte3;
		var byte4;
		var codePoint;

		if (byteIndex > byteCount) {
			throw Error('Invalid byte index');
		}

		if (byteIndex == byteCount) {
			return false;
		}

		// Read first byte
		byte1 = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		// 1-byte sequence (no continuation bytes)
		if ((byte1 & 0x80) == 0) {
			return byte1;
		}

		// 2-byte sequence
		if ((byte1 & 0xE0) == 0xC0) {
			byte2 = readContinuationByte();
			codePoint = ((byte1 & 0x1F) << 6) | byte2;
			if (codePoint >= 0x80) {
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 3-byte sequence (may include unpaired surrogates)
		if ((byte1 & 0xF0) == 0xE0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
			if (codePoint >= 0x0800) {
				checkScalarValue(codePoint);
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 4-byte sequence
		if ((byte1 & 0xF8) == 0xF0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			byte4 = readContinuationByte();
			codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
				(byte3 << 0x06) | byte4;
			if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
				return codePoint;
			}
		}

		throw Error('Invalid UTF-8 detected');
	}

	var byteArray;
	var byteCount;
	var byteIndex;
	function utf8decode(byteString) {
		byteArray = ucs2decode(byteString);
		byteCount = byteArray.length;
		byteIndex = 0;
		var codePoints = [];
		var tmp;
		while ((tmp = decodeSymbol()) !== false) {
			codePoints.push(tmp);
		}
		return ucs2encode(codePoints);
	}

	/*--------------------------------------------------------------------------*/

	var utf8 = {
		'version': '2.1.2',
		'encode': utf8encode,
		'decode': utf8decode
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return utf8;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = utf8;
		} else { // in Narwhal or RingoJS v0.7.0-
			var object = {};
			var hasOwnProperty = object.hasOwnProperty;
			for (var key in utf8) {
				hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.utf8 = utf8;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48)(module), __webpack_require__(5)))

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Requestable2 = __webpack_require__(1);

var _Requestable3 = _interopRequireDefault(_Requestable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2013 Michael Aufreiter (Development Seed) and 2016 Yahoo Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under {@link https://spdx.org/licenses/BSD-3-Clause-Clear.html BSD-3-Clause-Clear}.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * Organization encapsulates the functionality to create repositories in organizations
 */
var Organization = function (_Requestable) {
  _inherits(Organization, _Requestable);

  /**
   * Create a new Organization
   * @param {string} organization - the name of the organization
   * @param {Requestable.auth} [auth] - information required to authenticate to Github
   * @param {string} [apiBase=https://api.github.com] - the base Github API URL
   */
  function Organization(organization, auth, apiBase) {
    _classCallCheck(this, Organization);

    var _this = _possibleConstructorReturn(this, (Organization.__proto__ || Object.getPrototypeOf(Organization)).call(this, auth, apiBase));

    _this.__name = organization;
    return _this;
  }

  /**
   * Create a repository in an organization
   * @see https://developer.github.com/v3/repos/#create
   * @param {Object} options - the repository definition
   * @param {Requestable.callback} [cb] - will receive the created repository
   * @return {Promise} - the promise for the http request
   */


  _createClass(Organization, [{
    key: 'createRepo',
    value: function createRepo(options, cb) {
      return this._request('POST', '/orgs/' + this.__name + '/repos', options, cb);
    }

    /**
     * List the repositories in an organization
     * @see https://developer.github.com/v3/repos/#list-organization-repositories
     * @param {Requestable.callback} [cb] - will receive the list of repositories
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'getRepos',
    value: function getRepos(cb) {
      var requestOptions = this._getOptionsWithDefaults({ direction: 'desc' });

      return this._requestAllPages('/orgs/' + this.__name + '/repos', requestOptions, cb);
    }

    /**
     * Query if the user is a member or not
     * @param {string} username - the user in question
     * @param {Requestable.callback} [cb] - will receive true if the user is a member
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'isMember',
    value: function isMember(username, cb) {
      return this._request204or404('/orgs/' + this.__name + '/members/' + username, null, cb);
    }

    /**
     * List the users who are members of the company
     * @see https://developer.github.com/v3/orgs/members/#members-list
     * @param {object} options - filtering options
     * @param {string} [options.filter=all] - can be either `2fa_disabled` or `all`
     * @param {string} [options.role=all] - can be one of: `all`, `admin`, or `member`
     * @param {Requestable.callback} [cb] - will receive the list of users
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'listMembers',
    value: function listMembers(options, cb) {
      return this._request('GET', '/orgs/' + this.__name + '/members', options, cb);
    }

    /**
     * List the Teams in the Organization
     * @see https://developer.github.com/v3/orgs/teams/#list-teams
     * @param {Requestable.callback} [cb] - will receive the list of teams
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'getTeams',
    value: function getTeams(cb) {
      return this._requestAllPages('/orgs/' + this.__name + '/teams', undefined, cb);
    }

    /**
     * Create a team
     * @see https://developer.github.com/v3/orgs/teams/#create-team
     * @param {object} options - Team creation parameters
     * @param {string} options.name - The name of the team
     * @param {string} [options.description] - Team description
     * @param {string} [options.repo_names] - Repos to add the team to
     * @param {string} [options.privacy=secret] - The level of privacy the team should have. Can be either one
     * of: `secret`, or `closed`
     * @param {Requestable.callback} [cb] - will receive the created team
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'createTeam',
    value: function createTeam(options, cb) {
      return this._request('POST', '/orgs/' + this.__name + '/teams', options, cb);
    }

    /**
     * Get information about all projects
     * @see https://developer.github.com/v3/projects/#list-organization-projects
     * @param {Requestable.callback} [cb] - will receive the list of projects
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'listProjects',
    value: function listProjects(cb) {
      return this._requestAllPages('/orgs/' + this.__name + '/projects', { AcceptHeader: 'inertia-preview' }, cb);
    }

    /**
     * Create a new project
     * @see https://developer.github.com/v3/repos/projects/#create-a-project
     * @param {Object} options - the description of the project
     * @param {Requestable.callback} cb - will receive the newly created project
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'createProject',
    value: function createProject(options, cb) {
      options = options || {};
      options.AcceptHeader = 'inertia-preview';
      return this._request('POST', '/orgs/' + this.__name + '/projects', options, cb);
    }
  }]);

  return Organization;
}(_Requestable3.default);

module.exports = Organization;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk9yZ2FuaXphdGlvbi5qcyJdLCJuYW1lcyI6WyJPcmdhbml6YXRpb24iLCJvcmdhbml6YXRpb24iLCJhdXRoIiwiYXBpQmFzZSIsIl9fbmFtZSIsIm9wdGlvbnMiLCJjYiIsIl9yZXF1ZXN0IiwicmVxdWVzdE9wdGlvbnMiLCJfZ2V0T3B0aW9uc1dpdGhEZWZhdWx0cyIsImRpcmVjdGlvbiIsIl9yZXF1ZXN0QWxsUGFnZXMiLCJ1c2VybmFtZSIsIl9yZXF1ZXN0MjA0b3I0MDQiLCJ1bmRlZmluZWQiLCJBY2NlcHRIZWFkZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7O0FBT0E7Ozs7Ozs7Ozs7K2VBUEE7Ozs7Ozs7QUFTQTs7O0lBR01BLFk7OztBQUNIOzs7Ozs7QUFNQSx3QkFBWUMsWUFBWixFQUEwQkMsSUFBMUIsRUFBZ0NDLE9BQWhDLEVBQXlDO0FBQUE7O0FBQUEsNEhBQ2hDRCxJQURnQyxFQUMxQkMsT0FEMEI7O0FBRXRDLFVBQUtDLE1BQUwsR0FBY0gsWUFBZDtBQUZzQztBQUd4Qzs7QUFFRDs7Ozs7Ozs7Ozs7K0JBT1dJLE8sRUFBU0MsRSxFQUFJO0FBQ3JCLGFBQU8sS0FBS0MsUUFBTCxDQUFjLE1BQWQsYUFBK0IsS0FBS0gsTUFBcEMsYUFBb0RDLE9BQXBELEVBQTZEQyxFQUE3RCxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs2QkFNU0EsRSxFQUFJO0FBQ1YsVUFBSUUsaUJBQWlCLEtBQUtDLHVCQUFMLENBQTZCLEVBQUNDLFdBQVcsTUFBWixFQUE3QixDQUFyQjs7QUFFQSxhQUFPLEtBQUtDLGdCQUFMLFlBQStCLEtBQUtQLE1BQXBDLGFBQW9ESSxjQUFwRCxFQUFvRUYsRUFBcEUsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7NkJBTVNNLFEsRUFBVU4sRSxFQUFJO0FBQ3BCLGFBQU8sS0FBS08sZ0JBQUwsWUFBK0IsS0FBS1QsTUFBcEMsaUJBQXNEUSxRQUF0RCxFQUFrRSxJQUFsRSxFQUF3RU4sRUFBeEUsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7Ozs7Z0NBU1lELE8sRUFBU0MsRSxFQUFJO0FBQ3RCLGFBQU8sS0FBS0MsUUFBTCxDQUFjLEtBQWQsYUFBOEIsS0FBS0gsTUFBbkMsZUFBcURDLE9BQXJELEVBQThEQyxFQUE5RCxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs2QkFNU0EsRSxFQUFJO0FBQ1YsYUFBTyxLQUFLSyxnQkFBTCxZQUErQixLQUFLUCxNQUFwQyxhQUFvRFUsU0FBcEQsRUFBK0RSLEVBQS9ELENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7OytCQVlXRCxPLEVBQVNDLEUsRUFBSTtBQUNyQixhQUFPLEtBQUtDLFFBQUwsQ0FBYyxNQUFkLGFBQStCLEtBQUtILE1BQXBDLGFBQW9EQyxPQUFwRCxFQUE2REMsRUFBN0QsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7aUNBTWFBLEUsRUFBSTtBQUNkLGFBQU8sS0FBS0ssZ0JBQUwsWUFBK0IsS0FBS1AsTUFBcEMsZ0JBQXVELEVBQUNXLGNBQWMsaUJBQWYsRUFBdkQsRUFBMEZULEVBQTFGLENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7OztrQ0FPY0QsTyxFQUFTQyxFLEVBQUk7QUFDeEJELGdCQUFVQSxXQUFXLEVBQXJCO0FBQ0FBLGNBQVFVLFlBQVIsR0FBdUIsaUJBQXZCO0FBQ0EsYUFBTyxLQUFLUixRQUFMLENBQWMsTUFBZCxhQUErQixLQUFLSCxNQUFwQyxnQkFBdURDLE9BQXZELEVBQWdFQyxFQUFoRSxDQUFQO0FBQ0Y7Ozs7OztBQUdKVSxPQUFPQyxPQUFQLEdBQWlCakIsWUFBakIiLCJmaWxlIjoiT3JnYW5pemF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZVxuICogQGNvcHlyaWdodCAgMjAxMyBNaWNoYWVsIEF1ZnJlaXRlciAoRGV2ZWxvcG1lbnQgU2VlZCkgYW5kIDIwMTYgWWFob28gSW5jLlxuICogQGxpY2Vuc2UgICAgTGljZW5zZWQgdW5kZXIge0BsaW5rIGh0dHBzOi8vc3BkeC5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlLUNsZWFyLmh0bWwgQlNELTMtQ2xhdXNlLUNsZWFyfS5cbiAqICAgICAgICAgICAgIEdpdGh1Yi5qcyBpcyBmcmVlbHkgZGlzdHJpYnV0YWJsZS5cbiAqL1xuXG5pbXBvcnQgUmVxdWVzdGFibGUgZnJvbSAnLi9SZXF1ZXN0YWJsZSc7XG5cbi8qKlxuICogT3JnYW5pemF0aW9uIGVuY2Fwc3VsYXRlcyB0aGUgZnVuY3Rpb25hbGl0eSB0byBjcmVhdGUgcmVwb3NpdG9yaWVzIGluIG9yZ2FuaXphdGlvbnNcbiAqL1xuY2xhc3MgT3JnYW5pemF0aW9uIGV4dGVuZHMgUmVxdWVzdGFibGUge1xuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgT3JnYW5pemF0aW9uXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3JnYW5pemF0aW9uIC0gdGhlIG5hbWUgb2YgdGhlIG9yZ2FuaXphdGlvblxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5hdXRofSBbYXV0aF0gLSBpbmZvcm1hdGlvbiByZXF1aXJlZCB0byBhdXRoZW50aWNhdGUgdG8gR2l0aHViXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2FwaUJhc2U9aHR0cHM6Ly9hcGkuZ2l0aHViLmNvbV0gLSB0aGUgYmFzZSBHaXRodWIgQVBJIFVSTFxuICAgICovXG4gICBjb25zdHJ1Y3Rvcihvcmdhbml6YXRpb24sIGF1dGgsIGFwaUJhc2UpIHtcbiAgICAgIHN1cGVyKGF1dGgsIGFwaUJhc2UpO1xuICAgICAgdGhpcy5fX25hbWUgPSBvcmdhbml6YXRpb247XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgcmVwb3NpdG9yeSBpbiBhbiBvcmdhbml6YXRpb25cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy8jY3JlYXRlXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHRoZSByZXBvc2l0b3J5IGRlZmluaXRpb25cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGNyZWF0ZWQgcmVwb3NpdG9yeVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBjcmVhdGVSZXBvKG9wdGlvbnMsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUE9TVCcsIGAvb3Jncy8ke3RoaXMuX19uYW1lfS9yZXBvc2AsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IHRoZSByZXBvc2l0b3JpZXMgaW4gYW4gb3JnYW5pemF0aW9uXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvI2xpc3Qtb3JnYW5pemF0aW9uLXJlcG9zaXRvcmllc1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiByZXBvc2l0b3JpZXNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0UmVwb3MoY2IpIHtcbiAgICAgIGxldCByZXF1ZXN0T3B0aW9ucyA9IHRoaXMuX2dldE9wdGlvbnNXaXRoRGVmYXVsdHMoe2RpcmVjdGlvbjogJ2Rlc2MnfSk7XG5cbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0QWxsUGFnZXMoYC9vcmdzLyR7dGhpcy5fX25hbWV9L3JlcG9zYCwgcmVxdWVzdE9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBRdWVyeSBpZiB0aGUgdXNlciBpcyBhIG1lbWJlciBvciBub3RcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VybmFtZSAtIHRoZSB1c2VyIGluIHF1ZXN0aW9uXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRydWUgaWYgdGhlIHVzZXIgaXMgYSBtZW1iZXJcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgaXNNZW1iZXIodXNlcm5hbWUsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdDIwNG9yNDA0KGAvb3Jncy8ke3RoaXMuX19uYW1lfS9tZW1iZXJzLyR7dXNlcm5hbWV9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIExpc3QgdGhlIHVzZXJzIHdobyBhcmUgbWVtYmVycyBvZiB0aGUgY29tcGFueVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL29yZ3MvbWVtYmVycy8jbWVtYmVycy1saXN0XG4gICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIGZpbHRlcmluZyBvcHRpb25zXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuZmlsdGVyPWFsbF0gLSBjYW4gYmUgZWl0aGVyIGAyZmFfZGlzYWJsZWRgIG9yIGBhbGxgXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMucm9sZT1hbGxdIC0gY2FuIGJlIG9uZSBvZjogYGFsbGAsIGBhZG1pbmAsIG9yIGBtZW1iZXJgXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIHVzZXJzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3RNZW1iZXJzKG9wdGlvbnMsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9vcmdzLyR7dGhpcy5fX25hbWV9L21lbWJlcnNgLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCB0aGUgVGVhbXMgaW4gdGhlIE9yZ2FuaXphdGlvblxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL29yZ3MvdGVhbXMvI2xpc3QtdGVhbXNcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgdGVhbXNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0VGVhbXMoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0QWxsUGFnZXMoYC9vcmdzLyR7dGhpcy5fX25hbWV9L3RlYW1zYCwgdW5kZWZpbmVkLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgdGVhbVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL29yZ3MvdGVhbXMvI2NyZWF0ZS10ZWFtXG4gICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRlYW0gY3JlYXRpb24gcGFyYW1ldGVyc1xuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubmFtZSAtIFRoZSBuYW1lIG9mIHRoZSB0ZWFtXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuZGVzY3JpcHRpb25dIC0gVGVhbSBkZXNjcmlwdGlvblxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnJlcG9fbmFtZXNdIC0gUmVwb3MgdG8gYWRkIHRoZSB0ZWFtIHRvXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMucHJpdmFjeT1zZWNyZXRdIC0gVGhlIGxldmVsIG9mIHByaXZhY3kgdGhlIHRlYW0gc2hvdWxkIGhhdmUuIENhbiBiZSBlaXRoZXIgb25lXG4gICAgKiBvZjogYHNlY3JldGAsIG9yIGBjbG9zZWRgXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBjcmVhdGVkIHRlYW1cbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgY3JlYXRlVGVhbShvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL29yZ3MvJHt0aGlzLl9fbmFtZX0vdGVhbXNgLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IGluZm9ybWF0aW9uIGFib3V0IGFsbCBwcm9qZWN0c1xuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3Byb2plY3RzLyNsaXN0LW9yZ2FuaXphdGlvbi1wcm9qZWN0c1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiBwcm9qZWN0c1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBsaXN0UHJvamVjdHMoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0QWxsUGFnZXMoYC9vcmdzLyR7dGhpcy5fX25hbWV9L3Byb2plY3RzYCwge0FjY2VwdEhlYWRlcjogJ2luZXJ0aWEtcHJldmlldyd9LCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IHByb2plY3RcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9wcm9qZWN0cy8jY3JlYXRlLWEtcHJvamVjdFxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIHByb2plY3RcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBuZXdseSBjcmVhdGVkIHByb2plY3RcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgY3JlYXRlUHJvamVjdChvcHRpb25zLCBjYikge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICBvcHRpb25zLkFjY2VwdEhlYWRlciA9ICdpbmVydGlhLXByZXZpZXcnO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL29yZ3MvJHt0aGlzLl9fbmFtZX0vcHJvamVjdHNgLCBvcHRpb25zLCBjYik7XG4gICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT3JnYW5pemF0aW9uO1xuIl19
//# sourceMappingURL=Organization.js.map


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Requestable2 = __webpack_require__(1);

var _Requestable3 = _interopRequireDefault(_Requestable2);

var _debug = __webpack_require__(2);

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2016 Matt Smith (Development Seed)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under {@link https://spdx.org/licenses/BSD-3-Clause-Clear.html BSD-3-Clause-Clear}.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var log = (0, _debug2.default)('github:team');

/**
 * A Team allows scoping of API requests to a particular Github Organization Team.
 */

var Team = function (_Requestable) {
  _inherits(Team, _Requestable);

  /**
   * Create a Team.
   * @param {string} [teamId] - the id for the team
   * @param {Requestable.auth} [auth] - information required to authenticate to Github
   * @param {string} [apiBase=https://api.github.com] - the base Github API URL
   */
  function Team(teamId, auth, apiBase) {
    _classCallCheck(this, Team);

    var _this = _possibleConstructorReturn(this, (Team.__proto__ || Object.getPrototypeOf(Team)).call(this, auth, apiBase));

    _this.__teamId = teamId;
    return _this;
  }

  /**
   * Get Team information
   * @see https://developer.github.com/v3/orgs/teams/#get-team
   * @param {Requestable.callback} [cb] - will receive the team
   * @return {Promise} - the promise for the http request
   */


  _createClass(Team, [{
    key: 'getTeam',
    value: function getTeam(cb) {
      log('Fetching Team ' + this.__teamId);
      return this._request('Get', '/teams/' + this.__teamId, undefined, cb);
    }

    /**
     * List the Team's repositories
     * @see https://developer.github.com/v3/orgs/teams/#list-team-repos
     * @param {Requestable.callback} [cb] - will receive the list of repositories
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'listRepos',
    value: function listRepos(cb) {
      log('Fetching repositories for Team ' + this.__teamId);
      return this._requestAllPages('/teams/' + this.__teamId + '/repos', undefined, cb);
    }

    /**
     * Edit Team information
     * @see https://developer.github.com/v3/orgs/teams/#edit-team
     * @param {object} options - Parameters for team edit
     * @param {string} options.name - The name of the team
     * @param {string} [options.description] - Team description
     * @param {string} [options.repo_names] - Repos to add the team to
     * @param {string} [options.privacy=secret] - The level of privacy the team should have. Can be either one
     * of: `secret`, or `closed`
     * @param {Requestable.callback} [cb] - will receive the updated team
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'editTeam',
    value: function editTeam(options, cb) {
      log('Editing Team ' + this.__teamId);
      return this._request('PATCH', '/teams/' + this.__teamId, options, cb);
    }

    /**
     * List the users who are members of the Team
     * @see https://developer.github.com/v3/orgs/teams/#list-team-members
     * @param {object} options - Parameters for listing team users
     * @param {string} [options.role=all] - can be one of: `all`, `maintainer`, or `member`
     * @param {Requestable.callback} [cb] - will receive the list of users
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'listMembers',
    value: function listMembers(options, cb) {
      log('Getting members of Team ' + this.__teamId);
      return this._requestAllPages('/teams/' + this.__teamId + '/members', options, cb);
    }

    /**
     * Get Team membership status for a user
     * @see https://developer.github.com/v3/orgs/teams/#get-team-membership
     * @param {string} username - can be one of: `all`, `maintainer`, or `member`
     * @param {Requestable.callback} [cb] - will receive the membership status of a user
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'getMembership',
    value: function getMembership(username, cb) {
      log('Getting membership of user ' + username + ' in Team ' + this.__teamId);
      return this._request('GET', '/teams/' + this.__teamId + '/memberships/' + username, undefined, cb);
    }

    /**
     * Add a member to the Team
     * @see https://developer.github.com/v3/orgs/teams/#add-team-membership
     * @param {string} username - can be one of: `all`, `maintainer`, or `member`
     * @param {object} options - Parameters for adding a team member
     * @param {string} [options.role=member] - The role that this user should have in the team. Can be one
     * of: `member`, or `maintainer`
     * @param {Requestable.callback} [cb] - will receive the membership status of added user
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'addMembership',
    value: function addMembership(username, options, cb) {
      log('Adding user ' + username + ' to Team ' + this.__teamId);
      return this._request('PUT', '/teams/' + this.__teamId + '/memberships/' + username, options, cb);
    }

    /**
     * Get repo management status for team
     * @see https://developer.github.com/v3/orgs/teams/#remove-team-membership
     * @param {string} owner - Organization name
     * @param {string} repo - Repo name
     * @param {Requestable.callback} [cb] - will receive the membership status of added user
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'isManagedRepo',
    value: function isManagedRepo(owner, repo, cb) {
      log('Getting repo management by Team ' + this.__teamId + ' for repo ' + owner + '/' + repo);
      return this._request204or404('/teams/' + this.__teamId + '/repos/' + owner + '/' + repo, undefined, cb);
    }

    /**
     * Add or Update repo management status for team
     * @see https://developer.github.com/v3/orgs/teams/#add-or-update-team-repository
     * @param {string} owner - Organization name
     * @param {string} repo - Repo name
     * @param {object} options - Parameters for adding or updating repo management for the team
     * @param {string} [options.permission] - The permission to grant the team on this repository. Can be one
     * of: `pull`, `push`, or `admin`
     * @param {Requestable.callback} [cb] - will receive the membership status of added user
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'manageRepo',
    value: function manageRepo(owner, repo, options, cb) {
      log('Adding or Updating repo management by Team ' + this.__teamId + ' for repo ' + owner + '/' + repo);
      return this._request204or404('/teams/' + this.__teamId + '/repos/' + owner + '/' + repo, options, cb, 'PUT');
    }

    /**
     * Remove repo management status for team
     * @see https://developer.github.com/v3/orgs/teams/#remove-team-repository
     * @param {string} owner - Organization name
     * @param {string} repo - Repo name
     * @param {Requestable.callback} [cb] - will receive the membership status of added user
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'unmanageRepo',
    value: function unmanageRepo(owner, repo, cb) {
      log('Remove repo management by Team ' + this.__teamId + ' for repo ' + owner + '/' + repo);
      return this._request204or404('/teams/' + this.__teamId + '/repos/' + owner + '/' + repo, undefined, cb, 'DELETE');
    }

    /**
     * Delete Team
     * @see https://developer.github.com/v3/orgs/teams/#delete-team
     * @param {Requestable.callback} [cb] - will receive the list of repositories
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'deleteTeam',
    value: function deleteTeam(cb) {
      log('Deleting Team ' + this.__teamId);
      return this._request204or404('/teams/' + this.__teamId, undefined, cb, 'DELETE');
    }
  }]);

  return Team;
}(_Requestable3.default);

module.exports = Team;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRlYW0uanMiXSwibmFtZXMiOlsibG9nIiwiVGVhbSIsInRlYW1JZCIsImF1dGgiLCJhcGlCYXNlIiwiX190ZWFtSWQiLCJjYiIsIl9yZXF1ZXN0IiwidW5kZWZpbmVkIiwiX3JlcXVlc3RBbGxQYWdlcyIsIm9wdGlvbnMiLCJ1c2VybmFtZSIsIm93bmVyIiwicmVwbyIsIl9yZXF1ZXN0MjA0b3I0MDQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7O0FBT0E7Ozs7QUFDQTs7Ozs7Ozs7OzsrZUFSQTs7Ozs7OztBQVNBLElBQU1BLE1BQU0scUJBQU0sYUFBTixDQUFaOztBQUVBOzs7O0lBR01DLEk7OztBQUNIOzs7Ozs7QUFNQSxnQkFBWUMsTUFBWixFQUFvQkMsSUFBcEIsRUFBMEJDLE9BQTFCLEVBQW1DO0FBQUE7O0FBQUEsNEdBQzFCRCxJQUQwQixFQUNwQkMsT0FEb0I7O0FBRWhDLFVBQUtDLFFBQUwsR0FBZ0JILE1BQWhCO0FBRmdDO0FBR2xDOztBQUVEOzs7Ozs7Ozs7OzRCQU1RSSxFLEVBQUk7QUFDVE4sNkJBQXFCLEtBQUtLLFFBQTFCO0FBQ0EsYUFBTyxLQUFLRSxRQUFMLENBQWMsS0FBZCxjQUErQixLQUFLRixRQUFwQyxFQUFnREcsU0FBaEQsRUFBMkRGLEVBQTNELENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7OzhCQU1VQSxFLEVBQUk7QUFDWE4sOENBQXNDLEtBQUtLLFFBQTNDO0FBQ0EsYUFBTyxLQUFLSSxnQkFBTCxhQUFnQyxLQUFLSixRQUFyQyxhQUF1REcsU0FBdkQsRUFBa0VGLEVBQWxFLENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7OzZCQVlTSSxPLEVBQVNKLEUsRUFBSTtBQUNuQk4sNEJBQW9CLEtBQUtLLFFBQXpCO0FBQ0EsYUFBTyxLQUFLRSxRQUFMLENBQWMsT0FBZCxjQUFpQyxLQUFLRixRQUF0QyxFQUFrREssT0FBbEQsRUFBMkRKLEVBQTNELENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7Ozs7Z0NBUVlJLE8sRUFBU0osRSxFQUFJO0FBQ3RCTix1Q0FBK0IsS0FBS0ssUUFBcEM7QUFDQSxhQUFPLEtBQUtJLGdCQUFMLGFBQWdDLEtBQUtKLFFBQXJDLGVBQXlESyxPQUF6RCxFQUFrRUosRUFBbEUsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7O2tDQU9jSyxRLEVBQVVMLEUsRUFBSTtBQUN6Qk4sMENBQWtDVyxRQUFsQyxpQkFBc0QsS0FBS04sUUFBM0Q7QUFDQSxhQUFPLEtBQUtFLFFBQUwsQ0FBYyxLQUFkLGNBQStCLEtBQUtGLFFBQXBDLHFCQUE0RE0sUUFBNUQsRUFBd0VILFNBQXhFLEVBQW1GRixFQUFuRixDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7a0NBVWNLLFEsRUFBVUQsTyxFQUFTSixFLEVBQUk7QUFDbENOLDJCQUFtQlcsUUFBbkIsaUJBQXVDLEtBQUtOLFFBQTVDO0FBQ0EsYUFBTyxLQUFLRSxRQUFMLENBQWMsS0FBZCxjQUErQixLQUFLRixRQUFwQyxxQkFBNERNLFFBQTVELEVBQXdFRCxPQUF4RSxFQUFpRkosRUFBakYsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7OztrQ0FRY00sSyxFQUFPQyxJLEVBQU1QLEUsRUFBSTtBQUM1Qk4sK0NBQXVDLEtBQUtLLFFBQTVDLGtCQUFpRU8sS0FBakUsU0FBMEVDLElBQTFFO0FBQ0EsYUFBTyxLQUFLQyxnQkFBTCxhQUFnQyxLQUFLVCxRQUFyQyxlQUF1RE8sS0FBdkQsU0FBZ0VDLElBQWhFLEVBQXdFTCxTQUF4RSxFQUFtRkYsRUFBbkYsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7Ozs7OzsrQkFXV00sSyxFQUFPQyxJLEVBQU1ILE8sRUFBU0osRSxFQUFJO0FBQ2xDTiwwREFBa0QsS0FBS0ssUUFBdkQsa0JBQTRFTyxLQUE1RSxTQUFxRkMsSUFBckY7QUFDQSxhQUFPLEtBQUtDLGdCQUFMLGFBQWdDLEtBQUtULFFBQXJDLGVBQXVETyxLQUF2RCxTQUFnRUMsSUFBaEUsRUFBd0VILE9BQXhFLEVBQWlGSixFQUFqRixFQUFxRixLQUFyRixDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7O2lDQVFhTSxLLEVBQU9DLEksRUFBTVAsRSxFQUFJO0FBQzNCTiw4Q0FBc0MsS0FBS0ssUUFBM0Msa0JBQWdFTyxLQUFoRSxTQUF5RUMsSUFBekU7QUFDQSxhQUFPLEtBQUtDLGdCQUFMLGFBQWdDLEtBQUtULFFBQXJDLGVBQXVETyxLQUF2RCxTQUFnRUMsSUFBaEUsRUFBd0VMLFNBQXhFLEVBQW1GRixFQUFuRixFQUF1RixRQUF2RixDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7OzsrQkFNV0EsRSxFQUFJO0FBQ1pOLDZCQUFxQixLQUFLSyxRQUExQjtBQUNBLGFBQU8sS0FBS1MsZ0JBQUwsYUFBZ0MsS0FBS1QsUUFBckMsRUFBaURHLFNBQWpELEVBQTRERixFQUE1RCxFQUFnRSxRQUFoRSxDQUFQO0FBQ0Y7Ozs7OztBQUdKUyxPQUFPQyxPQUFQLEdBQWlCZixJQUFqQiIsImZpbGUiOiJUZWFtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZVxuICogQGNvcHlyaWdodCAgMjAxNiBNYXR0IFNtaXRoIChEZXZlbG9wbWVudCBTZWVkKVxuICogQGxpY2Vuc2UgICAgTGljZW5zZWQgdW5kZXIge0BsaW5rIGh0dHBzOi8vc3BkeC5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlLUNsZWFyLmh0bWwgQlNELTMtQ2xhdXNlLUNsZWFyfS5cbiAqICAgICAgICAgICAgIEdpdGh1Yi5qcyBpcyBmcmVlbHkgZGlzdHJpYnV0YWJsZS5cbiAqL1xuXG5pbXBvcnQgUmVxdWVzdGFibGUgZnJvbSAnLi9SZXF1ZXN0YWJsZSc7XG5pbXBvcnQgZGVidWcgZnJvbSAnZGVidWcnO1xuY29uc3QgbG9nID0gZGVidWcoJ2dpdGh1Yjp0ZWFtJyk7XG5cbi8qKlxuICogQSBUZWFtIGFsbG93cyBzY29waW5nIG9mIEFQSSByZXF1ZXN0cyB0byBhIHBhcnRpY3VsYXIgR2l0aHViIE9yZ2FuaXphdGlvbiBUZWFtLlxuICovXG5jbGFzcyBUZWFtIGV4dGVuZHMgUmVxdWVzdGFibGUge1xuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBUZWFtLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFt0ZWFtSWRdIC0gdGhlIGlkIGZvciB0aGUgdGVhbVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5hdXRofSBbYXV0aF0gLSBpbmZvcm1hdGlvbiByZXF1aXJlZCB0byBhdXRoZW50aWNhdGUgdG8gR2l0aHViXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2FwaUJhc2U9aHR0cHM6Ly9hcGkuZ2l0aHViLmNvbV0gLSB0aGUgYmFzZSBHaXRodWIgQVBJIFVSTFxuICAgICovXG4gICBjb25zdHJ1Y3Rvcih0ZWFtSWQsIGF1dGgsIGFwaUJhc2UpIHtcbiAgICAgIHN1cGVyKGF1dGgsIGFwaUJhc2UpO1xuICAgICAgdGhpcy5fX3RlYW1JZCA9IHRlYW1JZDtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgVGVhbSBpbmZvcm1hdGlvblxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL29yZ3MvdGVhbXMvI2dldC10ZWFtXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSB0ZWFtXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldFRlYW0oY2IpIHtcbiAgICAgIGxvZyhgRmV0Y2hpbmcgVGVhbSAke3RoaXMuX190ZWFtSWR9YCk7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR2V0JywgYC90ZWFtcy8ke3RoaXMuX190ZWFtSWR9YCwgdW5kZWZpbmVkLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCB0aGUgVGVhbSdzIHJlcG9zaXRvcmllc1xuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL29yZ3MvdGVhbXMvI2xpc3QtdGVhbS1yZXBvc1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiByZXBvc2l0b3JpZXNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdFJlcG9zKGNiKSB7XG4gICAgICBsb2coYEZldGNoaW5nIHJlcG9zaXRvcmllcyBmb3IgVGVhbSAke3RoaXMuX190ZWFtSWR9YCk7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdEFsbFBhZ2VzKGAvdGVhbXMvJHt0aGlzLl9fdGVhbUlkfS9yZXBvc2AsIHVuZGVmaW5lZCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEVkaXQgVGVhbSBpbmZvcm1hdGlvblxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL29yZ3MvdGVhbXMvI2VkaXQtdGVhbVxuICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBQYXJhbWV0ZXJzIGZvciB0ZWFtIGVkaXRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgdGVhbVxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmRlc2NyaXB0aW9uXSAtIFRlYW0gZGVzY3JpcHRpb25cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5yZXBvX25hbWVzXSAtIFJlcG9zIHRvIGFkZCB0aGUgdGVhbSB0b1xuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnByaXZhY3k9c2VjcmV0XSAtIFRoZSBsZXZlbCBvZiBwcml2YWN5IHRoZSB0ZWFtIHNob3VsZCBoYXZlLiBDYW4gYmUgZWl0aGVyIG9uZVxuICAgICogb2Y6IGBzZWNyZXRgLCBvciBgY2xvc2VkYFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgdXBkYXRlZCB0ZWFtXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGVkaXRUZWFtKG9wdGlvbnMsIGNiKSB7XG4gICAgICBsb2coYEVkaXRpbmcgVGVhbSAke3RoaXMuX190ZWFtSWR9YCk7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUEFUQ0gnLCBgL3RlYW1zLyR7dGhpcy5fX3RlYW1JZH1gLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCB0aGUgdXNlcnMgd2hvIGFyZSBtZW1iZXJzIG9mIHRoZSBUZWFtXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvb3Jncy90ZWFtcy8jbGlzdC10ZWFtLW1lbWJlcnNcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gUGFyYW1ldGVycyBmb3IgbGlzdGluZyB0ZWFtIHVzZXJzXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMucm9sZT1hbGxdIC0gY2FuIGJlIG9uZSBvZjogYGFsbGAsIGBtYWludGFpbmVyYCwgb3IgYG1lbWJlcmBcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgdXNlcnNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdE1lbWJlcnMob3B0aW9ucywgY2IpIHtcbiAgICAgIGxvZyhgR2V0dGluZyBtZW1iZXJzIG9mIFRlYW0gJHt0aGlzLl9fdGVhbUlkfWApO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RBbGxQYWdlcyhgL3RlYW1zLyR7dGhpcy5fX3RlYW1JZH0vbWVtYmVyc2AsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgVGVhbSBtZW1iZXJzaGlwIHN0YXR1cyBmb3IgYSB1c2VyXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvb3Jncy90ZWFtcy8jZ2V0LXRlYW0tbWVtYmVyc2hpcFxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJuYW1lIC0gY2FuIGJlIG9uZSBvZjogYGFsbGAsIGBtYWludGFpbmVyYCwgb3IgYG1lbWJlcmBcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIG1lbWJlcnNoaXAgc3RhdHVzIG9mIGEgdXNlclxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRNZW1iZXJzaGlwKHVzZXJuYW1lLCBjYikge1xuICAgICAgbG9nKGBHZXR0aW5nIG1lbWJlcnNoaXAgb2YgdXNlciAke3VzZXJuYW1lfSBpbiBUZWFtICR7dGhpcy5fX3RlYW1JZH1gKTtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3RlYW1zLyR7dGhpcy5fX3RlYW1JZH0vbWVtYmVyc2hpcHMvJHt1c2VybmFtZX1gLCB1bmRlZmluZWQsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBBZGQgYSBtZW1iZXIgdG8gdGhlIFRlYW1cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9vcmdzL3RlYW1zLyNhZGQtdGVhbS1tZW1iZXJzaGlwXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcm5hbWUgLSBjYW4gYmUgb25lIG9mOiBgYWxsYCwgYG1haW50YWluZXJgLCBvciBgbWVtYmVyYFxuICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBQYXJhbWV0ZXJzIGZvciBhZGRpbmcgYSB0ZWFtIG1lbWJlclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnJvbGU9bWVtYmVyXSAtIFRoZSByb2xlIHRoYXQgdGhpcyB1c2VyIHNob3VsZCBoYXZlIGluIHRoZSB0ZWFtLiBDYW4gYmUgb25lXG4gICAgKiBvZjogYG1lbWJlcmAsIG9yIGBtYWludGFpbmVyYFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbWVtYmVyc2hpcCBzdGF0dXMgb2YgYWRkZWQgdXNlclxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBhZGRNZW1iZXJzaGlwKHVzZXJuYW1lLCBvcHRpb25zLCBjYikge1xuICAgICAgbG9nKGBBZGRpbmcgdXNlciAke3VzZXJuYW1lfSB0byBUZWFtICR7dGhpcy5fX3RlYW1JZH1gKTtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQVVQnLCBgL3RlYW1zLyR7dGhpcy5fX3RlYW1JZH0vbWVtYmVyc2hpcHMvJHt1c2VybmFtZX1gLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IHJlcG8gbWFuYWdlbWVudCBzdGF0dXMgZm9yIHRlYW1cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9vcmdzL3RlYW1zLyNyZW1vdmUtdGVhbS1tZW1iZXJzaGlwXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3duZXIgLSBPcmdhbml6YXRpb24gbmFtZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IHJlcG8gLSBSZXBvIG5hbWVcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIG1lbWJlcnNoaXAgc3RhdHVzIG9mIGFkZGVkIHVzZXJcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgaXNNYW5hZ2VkUmVwbyhvd25lciwgcmVwbywgY2IpIHtcbiAgICAgIGxvZyhgR2V0dGluZyByZXBvIG1hbmFnZW1lbnQgYnkgVGVhbSAke3RoaXMuX190ZWFtSWR9IGZvciByZXBvICR7b3duZXJ9LyR7cmVwb31gKTtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0MjA0b3I0MDQoYC90ZWFtcy8ke3RoaXMuX190ZWFtSWR9L3JlcG9zLyR7b3duZXJ9LyR7cmVwb31gLCB1bmRlZmluZWQsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBBZGQgb3IgVXBkYXRlIHJlcG8gbWFuYWdlbWVudCBzdGF0dXMgZm9yIHRlYW1cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9vcmdzL3RlYW1zLyNhZGQtb3ItdXBkYXRlLXRlYW0tcmVwb3NpdG9yeVxuICAgICogQHBhcmFtIHtzdHJpbmd9IG93bmVyIC0gT3JnYW5pemF0aW9uIG5hbWVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSByZXBvIC0gUmVwbyBuYW1lXG4gICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFBhcmFtZXRlcnMgZm9yIGFkZGluZyBvciB1cGRhdGluZyByZXBvIG1hbmFnZW1lbnQgZm9yIHRoZSB0ZWFtXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMucGVybWlzc2lvbl0gLSBUaGUgcGVybWlzc2lvbiB0byBncmFudCB0aGUgdGVhbSBvbiB0aGlzIHJlcG9zaXRvcnkuIENhbiBiZSBvbmVcbiAgICAqIG9mOiBgcHVsbGAsIGBwdXNoYCwgb3IgYGFkbWluYFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbWVtYmVyc2hpcCBzdGF0dXMgb2YgYWRkZWQgdXNlclxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBtYW5hZ2VSZXBvKG93bmVyLCByZXBvLCBvcHRpb25zLCBjYikge1xuICAgICAgbG9nKGBBZGRpbmcgb3IgVXBkYXRpbmcgcmVwbyBtYW5hZ2VtZW50IGJ5IFRlYW0gJHt0aGlzLl9fdGVhbUlkfSBmb3IgcmVwbyAke293bmVyfS8ke3JlcG99YCk7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdDIwNG9yNDA0KGAvdGVhbXMvJHt0aGlzLl9fdGVhbUlkfS9yZXBvcy8ke293bmVyfS8ke3JlcG99YCwgb3B0aW9ucywgY2IsICdQVVQnKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBSZW1vdmUgcmVwbyBtYW5hZ2VtZW50IHN0YXR1cyBmb3IgdGVhbVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL29yZ3MvdGVhbXMvI3JlbW92ZS10ZWFtLXJlcG9zaXRvcnlcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvd25lciAtIE9yZ2FuaXphdGlvbiBuYW1lXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcmVwbyAtIFJlcG8gbmFtZVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbWVtYmVyc2hpcCBzdGF0dXMgb2YgYWRkZWQgdXNlclxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICB1bm1hbmFnZVJlcG8ob3duZXIsIHJlcG8sIGNiKSB7XG4gICAgICBsb2coYFJlbW92ZSByZXBvIG1hbmFnZW1lbnQgYnkgVGVhbSAke3RoaXMuX190ZWFtSWR9IGZvciByZXBvICR7b3duZXJ9LyR7cmVwb31gKTtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0MjA0b3I0MDQoYC90ZWFtcy8ke3RoaXMuX190ZWFtSWR9L3JlcG9zLyR7b3duZXJ9LyR7cmVwb31gLCB1bmRlZmluZWQsIGNiLCAnREVMRVRFJyk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRGVsZXRlIFRlYW1cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9vcmdzL3RlYW1zLyNkZWxldGUtdGVhbVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiByZXBvc2l0b3JpZXNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZGVsZXRlVGVhbShjYikge1xuICAgICAgbG9nKGBEZWxldGluZyBUZWFtICR7dGhpcy5fX3RlYW1JZH1gKTtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0MjA0b3I0MDQoYC90ZWFtcy8ke3RoaXMuX190ZWFtSWR9YCwgdW5kZWZpbmVkLCBjYiwgJ0RFTEVURScpO1xuICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlYW07XG4iXX0=
//# sourceMappingURL=Team.js.map


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Requestable2 = __webpack_require__(1);

var _Requestable3 = _interopRequireDefault(_Requestable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2013 Michael Aufreiter (Development Seed) and 2016 Yahoo Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under {@link https://spdx.org/licenses/BSD-3-Clause-Clear.html BSD-3-Clause-Clear}.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * Renders html from Markdown text
 */
var Markdown = function (_Requestable) {
  _inherits(Markdown, _Requestable);

  /**
   * construct a Markdown
   * @param {Requestable.auth} auth - the credentials to authenticate to GitHub
   * @param {string} [apiBase] - the base Github API URL
   * @return {Promise} - the promise for the http request
   */
  function Markdown(auth, apiBase) {
    _classCallCheck(this, Markdown);

    return _possibleConstructorReturn(this, (Markdown.__proto__ || Object.getPrototypeOf(Markdown)).call(this, auth, apiBase));
  }

  /**
   * Render html from Markdown text.
   * @see https://developer.github.com/v3/markdown/#render-an-arbitrary-markdown-document
   * @param {Object} options - conversion options
   * @param {string} [options.text] - the markdown text to convert
   * @param {string} [options.mode=markdown] - can be either `markdown` or `gfm`
   * @param {string} [options.context] - repository name if mode is gfm
   * @param {Requestable.callback} [cb] - will receive the converted html
   * @return {Promise} - the promise for the http request
   */


  _createClass(Markdown, [{
    key: 'render',
    value: function render(options, cb) {
      return this._request('POST', '/markdown', options, cb);
    }
  }]);

  return Markdown;
}(_Requestable3.default);

module.exports = Markdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1hcmtkb3duLmpzIl0sIm5hbWVzIjpbIk1hcmtkb3duIiwiYXV0aCIsImFwaUJhc2UiLCJvcHRpb25zIiwiY2IiLCJfcmVxdWVzdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFPQTs7Ozs7Ozs7OzsrZUFQQTs7Ozs7OztBQVNBOzs7SUFHTUEsUTs7O0FBQ0g7Ozs7OztBQU1BLG9CQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQjtBQUFBOztBQUFBLCtHQUNsQkQsSUFEa0IsRUFDWkMsT0FEWTtBQUUxQjs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7MkJBVU9DLE8sRUFBU0MsRSxFQUFJO0FBQ2pCLGFBQU8sS0FBS0MsUUFBTCxDQUFjLE1BQWQsRUFBc0IsV0FBdEIsRUFBbUNGLE9BQW5DLEVBQTRDQyxFQUE1QyxDQUFQO0FBQ0Y7Ozs7OztBQUdKRSxPQUFPQyxPQUFQLEdBQWlCUCxRQUFqQiIsImZpbGUiOiJNYXJrZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVcbiAqIEBjb3B5cmlnaHQgIDIwMTMgTWljaGFlbCBBdWZyZWl0ZXIgKERldmVsb3BtZW50IFNlZWQpIGFuZCAyMDE2IFlhaG9vIEluYy5cbiAqIEBsaWNlbnNlICAgIExpY2Vuc2VkIHVuZGVyIHtAbGluayBodHRwczovL3NwZHgub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZS1DbGVhci5odG1sIEJTRC0zLUNsYXVzZS1DbGVhcn0uXG4gKiAgICAgICAgICAgICBHaXRodWIuanMgaXMgZnJlZWx5IGRpc3RyaWJ1dGFibGUuXG4gKi9cblxuaW1wb3J0IFJlcXVlc3RhYmxlIGZyb20gJy4vUmVxdWVzdGFibGUnO1xuXG4vKipcbiAqIFJlbmRlcnMgaHRtbCBmcm9tIE1hcmtkb3duIHRleHRcbiAqL1xuY2xhc3MgTWFya2Rvd24gZXh0ZW5kcyBSZXF1ZXN0YWJsZSB7XG4gICAvKipcbiAgICAqIGNvbnN0cnVjdCBhIE1hcmtkb3duXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmF1dGh9IGF1dGggLSB0aGUgY3JlZGVudGlhbHMgdG8gYXV0aGVudGljYXRlIHRvIEdpdEh1YlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFthcGlCYXNlXSAtIHRoZSBiYXNlIEdpdGh1YiBBUEkgVVJMXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNvbnN0cnVjdG9yKGF1dGgsIGFwaUJhc2UpIHtcbiAgICAgIHN1cGVyKGF1dGgsIGFwaUJhc2UpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIFJlbmRlciBodG1sIGZyb20gTWFya2Rvd24gdGV4dC5cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9tYXJrZG93bi8jcmVuZGVyLWFuLWFyYml0cmFyeS1tYXJrZG93bi1kb2N1bWVudFxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb252ZXJzaW9uIG9wdGlvbnNcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy50ZXh0XSAtIHRoZSBtYXJrZG93biB0ZXh0IHRvIGNvbnZlcnRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5tb2RlPW1hcmtkb3duXSAtIGNhbiBiZSBlaXRoZXIgYG1hcmtkb3duYCBvciBgZ2ZtYFxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNvbnRleHRdIC0gcmVwb3NpdG9yeSBuYW1lIGlmIG1vZGUgaXMgZ2ZtXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBjb252ZXJ0ZWQgaHRtbFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICByZW5kZXIob3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQT1NUJywgJy9tYXJrZG93bicsIG9wdGlvbnMsIGNiKTtcbiAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXJrZG93bjtcbiJdfQ==
//# sourceMappingURL=Markdown.js.map


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Requestable2 = __webpack_require__(1);

var _Requestable3 = _interopRequireDefault(_Requestable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2013 Michael Aufreiter (Development Seed) and 2016 Yahoo Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under {@link https://spdx.org/licenses/BSD-3-Clause-Clear.html BSD-3-Clause-Clear}.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * Project encapsulates the functionality to create, query, and modify cards and columns.
 */
var Project = function (_Requestable) {
   _inherits(Project, _Requestable);

   /**
    * Create a Project.
    * @param {string} id - the id of the project
    * @param {Requestable.auth} [auth] - information required to authenticate to Github
    * @param {string} [apiBase=https://api.github.com] - the base Github API URL
    */
   function Project(id, auth, apiBase) {
      _classCallCheck(this, Project);

      var _this = _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this, auth, apiBase, 'inertia-preview'));

      _this.__id = id;
      return _this;
   }

   /**
    * Get information about a project
    * @see https://developer.github.com/v3/projects/#get-a-project
    * @param {Requestable.callback} cb - will receive the project information
    * @return {Promise} - the promise for the http request
    */


   _createClass(Project, [{
      key: 'getProject',
      value: function getProject(cb) {
         return this._request('GET', '/projects/' + this.__id, null, cb);
      }

      /**
       * Edit a project
       * @see https://developer.github.com/v3/projects/#update-a-project
       * @param {Object} options - the description of the project
       * @param {Requestable.callback} cb - will receive the modified project
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'updateProject',
      value: function updateProject(options, cb) {
         return this._request('PATCH', '/projects/' + this.__id, options, cb);
      }

      /**
       * Delete a project
       * @see https://developer.github.com/v3/projects/#delete-a-project
       * @param {Requestable.callback} cb - will receive true if the operation is successful
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'deleteProject',
      value: function deleteProject(cb) {
         return this._request('DELETE', '/projects/' + this.__id, null, cb);
      }

      /**
       * Get information about all columns of a project
       * @see https://developer.github.com/v3/projects/columns/#list-project-columns
       * @param {Requestable.callback} [cb] - will receive the list of columns
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listProjectColumns',
      value: function listProjectColumns(cb) {
         return this._requestAllPages('/projects/' + this.__id + '/columns', null, cb);
      }

      /**
       * Get information about a column
       * @see https://developer.github.com/v3/projects/columns/#get-a-project-column
       * @param {string} colId - the id of the column
       * @param {Requestable.callback} cb - will receive the column information
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getProjectColumn',
      value: function getProjectColumn(colId, cb) {
         return this._request('GET', '/projects/columns/' + colId, null, cb);
      }

      /**
       * Create a new column
       * @see https://developer.github.com/v3/projects/columns/#create-a-project-column
       * @param {Object} options - the description of the column
       * @param {Requestable.callback} cb - will receive the newly created column
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'createProjectColumn',
      value: function createProjectColumn(options, cb) {
         return this._request('POST', '/projects/' + this.__id + '/columns', options, cb);
      }

      /**
       * Edit a column
       * @see https://developer.github.com/v3/projects/columns/#update-a-project-column
       * @param {string} colId - the column id
       * @param {Object} options - the description of the column
       * @param {Requestable.callback} cb - will receive the modified column
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'updateProjectColumn',
      value: function updateProjectColumn(colId, options, cb) {
         return this._request('PATCH', '/projects/columns/' + colId, options, cb);
      }

      /**
       * Delete a column
       * @see https://developer.github.com/v3/projects/columns/#delete-a-project-column
       * @param {string} colId - the column to be deleted
       * @param {Requestable.callback} cb - will receive true if the operation is successful
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'deleteProjectColumn',
      value: function deleteProjectColumn(colId, cb) {
         return this._request('DELETE', '/projects/columns/' + colId, null, cb);
      }

      /**
       * Move a column
       * @see https://developer.github.com/v3/projects/columns/#move-a-project-column
       * @param {string} colId - the column to be moved
       * @param {string} position - can be one of first, last, or after:<column-id>,
       * where <column-id> is the id value of a column in the same project.
       * @param {Requestable.callback} cb - will receive true if the operation is successful
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'moveProjectColumn',
      value: function moveProjectColumn(colId, position, cb) {
         return this._request('POST', '/projects/columns/' + colId + '/moves', { position: position }, cb);
      }

      /**
       * Get information about all cards of a project
       * @see https://developer.github.com/v3/projects/cards/#list-project-cards
       * @param {Requestable.callback} [cb] - will receive the list of cards
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listProjectCards',
      value: function listProjectCards(cb) {
         var _this2 = this;

         return this.listProjectColumns().then(function (_ref) {
            var data = _ref.data;

            return Promise.all(data.map(function (column) {
               return _this2._requestAllPages('/projects/columns/' + column.id + '/cards', null);
            }));
         }).then(function (cardsInColumns) {
            var cards = cardsInColumns.reduce(function (prev, _ref2) {
               var data = _ref2.data;

               prev.push.apply(prev, _toConsumableArray(data));
               return prev;
            }, []);
            if (cb) {
               cb(null, cards);
            }
            return cards;
         }).catch(function (err) {
            if (cb) {
               cb(err);
               return;
            }
            throw err;
         });
      }

      /**
      * Get information about all cards of a column
      * @see https://developer.github.com/v3/projects/cards/#list-project-cards
      * @param {string} colId - the id of the column
      * @param {Requestable.callback} [cb] - will receive the list of cards
      * @return {Promise} - the promise for the http request
      */

   }, {
      key: 'listColumnCards',
      value: function listColumnCards(colId, cb) {
         return this._requestAllPages('/projects/columns/' + colId + '/cards', null, cb);
      }

      /**
      * Get information about a card
      * @see https://developer.github.com/v3/projects/cards/#get-a-project-card
      * @param {string} cardId - the id of the card
      * @param {Requestable.callback} cb - will receive the card information
      * @return {Promise} - the promise for the http request
      */

   }, {
      key: 'getProjectCard',
      value: function getProjectCard(cardId, cb) {
         return this._request('GET', '/projects/columns/cards/' + cardId, null, cb);
      }

      /**
      * Create a new card
      * @see https://developer.github.com/v3/projects/cards/#create-a-project-card
      * @param {string} colId - the column id
      * @param {Object} options - the description of the card
      * @param {Requestable.callback} cb - will receive the newly created card
      * @return {Promise} - the promise for the http request
      */

   }, {
      key: 'createProjectCard',
      value: function createProjectCard(colId, options, cb) {
         return this._request('POST', '/projects/columns/' + colId + '/cards', options, cb);
      }

      /**
      * Edit a card
      * @see https://developer.github.com/v3/projects/cards/#update-a-project-card
      * @param {string} cardId - the card id
      * @param {Object} options - the description of the card
      * @param {Requestable.callback} cb - will receive the modified card
      * @return {Promise} - the promise for the http request
      */

   }, {
      key: 'updateProjectCard',
      value: function updateProjectCard(cardId, options, cb) {
         return this._request('PATCH', '/projects/columns/cards/' + cardId, options, cb);
      }

      /**
      * Delete a card
      * @see https://developer.github.com/v3/projects/cards/#delete-a-project-card
      * @param {string} cardId - the card to be deleted
      * @param {Requestable.callback} cb - will receive true if the operation is successful
      * @return {Promise} - the promise for the http request
      */

   }, {
      key: 'deleteProjectCard',
      value: function deleteProjectCard(cardId, cb) {
         return this._request('DELETE', '/projects/columns/cards/' + cardId, null, cb);
      }

      /**
      * Move a card
      * @see https://developer.github.com/v3/projects/cards/#move-a-project-card
      * @param {string} cardId - the card to be moved
      * @param {string} position - can be one of top, bottom, or after:<card-id>,
      * where <card-id> is the id value of a card in the same project.
      * @param {string} colId - the id value of a column in the same project.
      * @param {Requestable.callback} cb - will receive true if the operation is successful
      * @return {Promise} - the promise for the http request
      */

   }, {
      key: 'moveProjectCard',
      value: function moveProjectCard(cardId, position, colId, cb) {
         return this._request('POST', '/projects/columns/cards/' + cardId + '/moves', { position: position, column_id: colId }, // eslint-disable-line camelcase
         cb);
      }
   }]);

   return Project;
}(_Requestable3.default);

module.exports = Project;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2plY3QuanMiXSwibmFtZXMiOlsiUHJvamVjdCIsImlkIiwiYXV0aCIsImFwaUJhc2UiLCJfX2lkIiwiY2IiLCJfcmVxdWVzdCIsIm9wdGlvbnMiLCJfcmVxdWVzdEFsbFBhZ2VzIiwiY29sSWQiLCJwb3NpdGlvbiIsImxpc3RQcm9qZWN0Q29sdW1ucyIsInRoZW4iLCJkYXRhIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImNvbHVtbiIsImNhcmRzSW5Db2x1bW5zIiwiY2FyZHMiLCJyZWR1Y2UiLCJwcmV2IiwicHVzaCIsImNhdGNoIiwiZXJyIiwiY2FyZElkIiwiY29sdW1uX2lkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7OztBQU9BOzs7Ozs7Ozs7Ozs7K2VBUEE7Ozs7Ozs7QUFTQTs7O0lBR01BLE87OztBQUNIOzs7Ozs7QUFNQSxvQkFBWUMsRUFBWixFQUFnQkMsSUFBaEIsRUFBc0JDLE9BQXRCLEVBQStCO0FBQUE7O0FBQUEsb0hBQ3RCRCxJQURzQixFQUNoQkMsT0FEZ0IsRUFDUCxpQkFETzs7QUFFNUIsWUFBS0MsSUFBTCxHQUFZSCxFQUFaO0FBRjRCO0FBRzlCOztBQUVEOzs7Ozs7Ozs7O2lDQU1XSSxFLEVBQUk7QUFDWixnQkFBTyxLQUFLQyxRQUFMLENBQWMsS0FBZCxpQkFBa0MsS0FBS0YsSUFBdkMsRUFBK0MsSUFBL0MsRUFBcURDLEVBQXJELENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7OztvQ0FPY0UsTyxFQUFTRixFLEVBQUk7QUFDeEIsZ0JBQU8sS0FBS0MsUUFBTCxDQUFjLE9BQWQsaUJBQW9DLEtBQUtGLElBQXpDLEVBQWlERyxPQUFqRCxFQUEwREYsRUFBMUQsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7b0NBTWNBLEUsRUFBSTtBQUNmLGdCQUFPLEtBQUtDLFFBQUwsQ0FBYyxRQUFkLGlCQUFxQyxLQUFLRixJQUExQyxFQUFrRCxJQUFsRCxFQUF3REMsRUFBeEQsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7eUNB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QUFDcEMsZ0JBQU8sS0FBS0MsUUFBTCxDQUFjLE9BQWQsK0JBQWtEbUIsTUFBbEQsRUFBNERsQixPQUE1RCxFQUFxRUYsRUFBckUsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7O3dDQU9rQm9CLE0sRUFBUXBCLEUsRUFBSTtBQUMzQixnQkFBTyxLQUFLQyxRQUFMLENBQWMsUUFBZCwrQkFBbURtQixNQUFuRCxFQUE2RCxJQUE3RCxFQUFtRXBCLEVBQW5FLENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7Ozs7OztzQ0FVZ0JvQixNLEVBQVFmLFEsRUFBVUQsSyxFQUFPSixFLEVBQUk7QUFDMUMsZ0JBQU8sS0FBS0MsUUFBTCxDQUNKLE1BREksK0JBRXVCbUIsTUFGdkIsYUFHSixFQUFDZixVQUFVQSxRQUFYLEVBQXFCZ0IsV0FBV2pCLEtBQWhDLEVBSEksRUFHb0M7QUFDeENKLFdBSkksQ0FBUDtBQU1GOzs7Ozs7QUFHSnNCLE9BQU9DLE9BQVAsR0FBaUI1QixPQUFqQiIsImZpbGUiOiJQcm9qZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZVxuICogQGNvcHlyaWdodCAgMjAxMyBNaWNoYWVsIEF1ZnJlaXRlciAoRGV2ZWxvcG1lbnQgU2VlZCkgYW5kIDIwMTYgWWFob28gSW5jLlxuICogQGxpY2Vuc2UgICAgTGljZW5zZWQgdW5kZXIge0BsaW5rIGh0dHBzOi8vc3BkeC5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlLUNsZWFyLmh0bWwgQlNELTMtQ2xhdXNlLUNsZWFyfS5cbiAqICAgICAgICAgICAgIEdpdGh1Yi5qcyBpcyBmcmVlbHkgZGlzdHJpYnV0YWJsZS5cbiAqL1xuXG5pbXBvcnQgUmVxdWVzdGFibGUgZnJvbSAnLi9SZXF1ZXN0YWJsZSc7XG5cbi8qKlxuICogUHJvamVjdCBlbmNhcHN1bGF0ZXMgdGhlIGZ1bmN0aW9uYWxpdHkgdG8gY3JlYXRlLCBxdWVyeSwgYW5kIG1vZGlmeSBjYXJkcyBhbmQgY29sdW1ucy5cbiAqL1xuY2xhc3MgUHJvamVjdCBleHRlbmRzIFJlcXVlc3RhYmxlIHtcbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgUHJvamVjdC5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIHRoZSBpZCBvZiB0aGUgcHJvamVjdFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5hdXRofSBbYXV0aF0gLSBpbmZvcm1hdGlvbiByZXF1aXJlZCB0byBhdXRoZW50aWNhdGUgdG8gR2l0aHViXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2FwaUJhc2U9aHR0cHM6Ly9hcGkuZ2l0aHViLmNvbV0gLSB0aGUgYmFzZSBHaXRodWIgQVBJIFVSTFxuICAgICovXG4gICBjb25zdHJ1Y3RvcihpZCwgYXV0aCwgYXBpQmFzZSkge1xuICAgICAgc3VwZXIoYXV0aCwgYXBpQmFzZSwgJ2luZXJ0aWEtcHJldmlldycpO1xuICAgICAgdGhpcy5fX2lkID0gaWQ7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IGluZm9ybWF0aW9uIGFib3V0IGEgcHJvamVjdFxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3Byb2plY3RzLyNnZXQtYS1wcm9qZWN0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgcHJvamVjdCBpbmZvcm1hdGlvblxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRQcm9qZWN0KGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9wcm9qZWN0cy8ke3RoaXMuX19pZH1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRWRpdCBhIHByb2plY3RcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9wcm9qZWN0cy8jdXBkYXRlLWEtcHJvamVjdFxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIHByb2plY3RcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBtb2RpZmllZCBwcm9qZWN0XG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIHVwZGF0ZVByb2plY3Qob3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQQVRDSCcsIGAvcHJvamVjdHMvJHt0aGlzLl9faWR9YCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIERlbGV0ZSBhIHByb2plY3RcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9wcm9qZWN0cy8jZGVsZXRlLWEtcHJvamVjdFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdHJ1ZSBpZiB0aGUgb3BlcmF0aW9uIGlzIHN1Y2Nlc3NmdWxcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZGVsZXRlUHJvamVjdChjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0RFTEVURScsIGAvcHJvamVjdHMvJHt0aGlzLl9faWR9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCBpbmZvcm1hdGlvbiBhYm91dCBhbGwgY29sdW1ucyBvZiBhIHByb2plY3RcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9wcm9qZWN0cy9jb2x1bW5zLyNsaXN0LXByb2plY3QtY29sdW1uc1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiBjb2x1bW5zXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3RQcm9qZWN0Q29sdW1ucyhjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RBbGxQYWdlcyhgL3Byb2plY3RzLyR7dGhpcy5fX2lkfS9jb2x1bW5zYCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCBpbmZvcm1hdGlvbiBhYm91dCBhIGNvbHVtblxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3Byb2plY3RzL2NvbHVtbnMvI2dldC1hLXByb2plY3QtY29sdW1uXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gY29sSWQgLSB0aGUgaWQgb2YgdGhlIGNvbHVtblxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGNvbHVtbiBpbmZvcm1hdGlvblxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRQcm9qZWN0Q29sdW1uKGNvbElkLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcHJvamVjdHMvY29sdW1ucy8ke2NvbElkfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgY29sdW1uXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcHJvamVjdHMvY29sdW1ucy8jY3JlYXRlLWEtcHJvamVjdC1jb2x1bW5cbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBjb2x1bW5cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBuZXdseSBjcmVhdGVkIGNvbHVtblxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBjcmVhdGVQcm9qZWN0Q29sdW1uKG9wdGlvbnMsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUE9TVCcsIGAvcHJvamVjdHMvJHt0aGlzLl9faWR9L2NvbHVtbnNgLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRWRpdCBhIGNvbHVtblxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3Byb2plY3RzL2NvbHVtbnMvI3VwZGF0ZS1hLXByb2plY3QtY29sdW1uXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gY29sSWQgLSB0aGUgY29sdW1uIGlkXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgY29sdW1uXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgbW9kaWZpZWQgY29sdW1uXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIHVwZGF0ZVByb2plY3RDb2x1bW4oY29sSWQsIG9wdGlvbnMsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUEFUQ0gnLCBgL3Byb2plY3RzL2NvbHVtbnMvJHtjb2xJZH1gLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRGVsZXRlIGEgY29sdW1uXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcHJvamVjdHMvY29sdW1ucy8jZGVsZXRlLWEtcHJvamVjdC1jb2x1bW5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb2xJZCAtIHRoZSBjb2x1bW4gdG8gYmUgZGVsZXRlZFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdHJ1ZSBpZiB0aGUgb3BlcmF0aW9uIGlzIHN1Y2Nlc3NmdWxcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZGVsZXRlUHJvamVjdENvbHVtbihjb2xJZCwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdERUxFVEUnLCBgL3Byb2plY3RzL2NvbHVtbnMvJHtjb2xJZH1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTW92ZSBhIGNvbHVtblxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3Byb2plY3RzL2NvbHVtbnMvI21vdmUtYS1wcm9qZWN0LWNvbHVtblxuICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbElkIC0gdGhlIGNvbHVtbiB0byBiZSBtb3ZlZFxuICAgICogQHBhcmFtIHtzdHJpbmd9IHBvc2l0aW9uIC0gY2FuIGJlIG9uZSBvZiBmaXJzdCwgbGFzdCwgb3IgYWZ0ZXI6PGNvbHVtbi1pZD4sXG4gICAgKiB3aGVyZSA8Y29sdW1uLWlkPiBpcyB0aGUgaWQgdmFsdWUgb2YgYSBjb2x1bW4gaW4gdGhlIHNhbWUgcHJvamVjdC5cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRydWUgaWYgdGhlIG9wZXJhdGlvbiBpcyBzdWNjZXNzZnVsXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIG1vdmVQcm9qZWN0Q29sdW1uKGNvbElkLCBwb3NpdGlvbiwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KFxuICAgICAgICAgJ1BPU1QnLFxuICAgICAgICAgYC9wcm9qZWN0cy9jb2x1bW5zLyR7Y29sSWR9L21vdmVzYCxcbiAgICAgICAgIHtwb3NpdGlvbjogcG9zaXRpb259LFxuICAgICAgICAgY2JcbiAgICAgICk7XG4gICB9XG5cbiAgLyoqXG4gICAqIEdldCBpbmZvcm1hdGlvbiBhYm91dCBhbGwgY2FyZHMgb2YgYSBwcm9qZWN0XG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9wcm9qZWN0cy9jYXJkcy8jbGlzdC1wcm9qZWN0LWNhcmRzXG4gICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgY2FyZHNcbiAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgKi9cbiAgIGxpc3RQcm9qZWN0Q2FyZHMoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLmxpc3RQcm9qZWN0Q29sdW1ucygpXG4gICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGRhdGEubWFwKChjb2x1bW4pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RBbGxQYWdlcyhgL3Byb2plY3RzL2NvbHVtbnMvJHtjb2x1bW4uaWR9L2NhcmRzYCwgbnVsbCk7XG4gICAgICAgICAgIH0pKTtcbiAgICAgICAgfSkudGhlbigoY2FyZHNJbkNvbHVtbnMpID0+IHtcbiAgICAgICAgICAgY29uc3QgY2FyZHMgPSBjYXJkc0luQ29sdW1ucy5yZWR1Y2UoKHByZXYsIHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICBwcmV2LnB1c2goLi4uZGF0YSk7XG4gICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgICBjYihudWxsLCBjYXJkcyk7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgcmV0dXJuIGNhcmRzO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgICBjYihlcnIpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9KTtcbiAgIH1cblxuICAgLyoqXG4gICAqIEdldCBpbmZvcm1hdGlvbiBhYm91dCBhbGwgY2FyZHMgb2YgYSBjb2x1bW5cbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3Byb2plY3RzL2NhcmRzLyNsaXN0LXByb2plY3QtY2FyZHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbElkIC0gdGhlIGlkIG9mIHRoZSBjb2x1bW5cbiAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiBjYXJkc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAqL1xuICAgbGlzdENvbHVtbkNhcmRzKGNvbElkLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RBbGxQYWdlcyhgL3Byb2plY3RzL2NvbHVtbnMvJHtjb2xJZH0vY2FyZHNgLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgKiBHZXQgaW5mb3JtYXRpb24gYWJvdXQgYSBjYXJkXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9wcm9qZWN0cy9jYXJkcy8jZ2V0LWEtcHJvamVjdC1jYXJkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjYXJkSWQgLSB0aGUgaWQgb2YgdGhlIGNhcmRcbiAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGNhcmQgaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgKi9cbiAgIGdldFByb2plY3RDYXJkKGNhcmRJZCwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3Byb2plY3RzL2NvbHVtbnMvY2FyZHMvJHtjYXJkSWR9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGNhcmRcbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3Byb2plY3RzL2NhcmRzLyNjcmVhdGUtYS1wcm9qZWN0LWNhcmRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbElkIC0gdGhlIGNvbHVtbiBpZFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgY2FyZFxuICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgbmV3bHkgY3JlYXRlZCBjYXJkXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICovXG4gICBjcmVhdGVQcm9qZWN0Q2FyZChjb2xJZCwgb3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQT1NUJywgYC9wcm9qZWN0cy9jb2x1bW5zLyR7Y29sSWR9L2NhcmRzYCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICogRWRpdCBhIGNhcmRcbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3Byb2plY3RzL2NhcmRzLyN1cGRhdGUtYS1wcm9qZWN0LWNhcmRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNhcmRJZCAtIHRoZSBjYXJkIGlkXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBjYXJkXG4gICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBtb2RpZmllZCBjYXJkXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICovXG4gICB1cGRhdGVQcm9qZWN0Q2FyZChjYXJkSWQsIG9wdGlvbnMsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUEFUQ0gnLCBgL3Byb2plY3RzL2NvbHVtbnMvY2FyZHMvJHtjYXJkSWR9YCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICogRGVsZXRlIGEgY2FyZFxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcHJvamVjdHMvY2FyZHMvI2RlbGV0ZS1hLXByb2plY3QtY2FyZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2FyZElkIC0gdGhlIGNhcmQgdG8gYmUgZGVsZXRlZFxuICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0cnVlIGlmIHRoZSBvcGVyYXRpb24gaXMgc3VjY2Vzc2Z1bFxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAqL1xuICAgZGVsZXRlUHJvamVjdENhcmQoY2FyZElkLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0RFTEVURScsIGAvcHJvamVjdHMvY29sdW1ucy9jYXJkcy8ke2NhcmRJZH1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgKiBNb3ZlIGEgY2FyZFxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcHJvamVjdHMvY2FyZHMvI21vdmUtYS1wcm9qZWN0LWNhcmRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNhcmRJZCAtIHRoZSBjYXJkIHRvIGJlIG1vdmVkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3NpdGlvbiAtIGNhbiBiZSBvbmUgb2YgdG9wLCBib3R0b20sIG9yIGFmdGVyOjxjYXJkLWlkPixcbiAgICogd2hlcmUgPGNhcmQtaWQ+IGlzIHRoZSBpZCB2YWx1ZSBvZiBhIGNhcmQgaW4gdGhlIHNhbWUgcHJvamVjdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbElkIC0gdGhlIGlkIHZhbHVlIG9mIGEgY29sdW1uIGluIHRoZSBzYW1lIHByb2plY3QuXG4gICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRydWUgaWYgdGhlIG9wZXJhdGlvbiBpcyBzdWNjZXNzZnVsXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICovXG4gICBtb3ZlUHJvamVjdENhcmQoY2FyZElkLCBwb3NpdGlvbiwgY29sSWQsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdChcbiAgICAgICAgICdQT1NUJyxcbiAgICAgICAgIGAvcHJvamVjdHMvY29sdW1ucy9jYXJkcy8ke2NhcmRJZH0vbW92ZXNgLFxuICAgICAgICAge3Bvc2l0aW9uOiBwb3NpdGlvbiwgY29sdW1uX2lkOiBjb2xJZH0sIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gICAgICAgICBjYlxuICAgICAgKTtcbiAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9qZWN0O1xuIl19
//# sourceMappingURL=Project.js.map


/***/ }),
/* 53 */
/***/ (function(module, exports) {

/**
 * material-design-lite - Material Design Components in CSS, JS and HTML
 * @version v1.3.0
 * @license Apache-2.0
 * @copyright 2015 Google, Inc.
 * @link https://github.com/google/material-design-lite
 */
!function(){"use strict";function e(e,t){if(e){if(t.element_.classList.contains(t.CssClasses_.MDL_JS_RIPPLE_EFFECT)){var s=document.createElement("span");s.classList.add(t.CssClasses_.MDL_RIPPLE_CONTAINER),s.classList.add(t.CssClasses_.MDL_JS_RIPPLE_EFFECT);var i=document.createElement("span");i.classList.add(t.CssClasses_.MDL_RIPPLE),s.appendChild(i),e.appendChild(s)}e.addEventListener("click",function(s){if("#"===e.getAttribute("href").charAt(0)){s.preventDefault();var i=e.href.split("#")[1],n=t.element_.querySelector("#"+i);t.resetTabState_(),t.resetPanelState_(),e.classList.add(t.CssClasses_.ACTIVE_CLASS),n.classList.add(t.CssClasses_.ACTIVE_CLASS)}})}}function t(e,t,s,i){function n(){var n=e.href.split("#")[1],a=i.content_.querySelector("#"+n);i.resetTabState_(t),i.resetPanelState_(s),e.classList.add(i.CssClasses_.IS_ACTIVE),a.classList.add(i.CssClasses_.IS_ACTIVE)}if(i.tabBar_.classList.contains(i.CssClasses_.JS_RIPPLE_EFFECT)){var a=document.createElement("span");a.classList.add(i.CssClasses_.RIPPLE_CONTAINER),a.classList.add(i.CssClasses_.JS_RIPPLE_EFFECT);var l=document.createElement("span");l.classList.add(i.CssClasses_.RIPPLE),a.appendChild(l),e.appendChild(a)}i.tabBar_.classList.contains(i.CssClasses_.TAB_MANUAL_SWITCH)||e.addEventListener("click",function(t){"#"===e.getAttribute("href").charAt(0)&&(t.preventDefault(),n())}),e.show=n}var s={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};s=function(){function e(e,t){for(var s=0;s<c.length;s++)if(c[s].className===e)return"undefined"!=typeof t&&(c[s]=t),c[s];return!1}function t(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function s(e,s){var i=t(e);return i.indexOf(s)!==-1}function i(e,t,s){if("CustomEvent"in window&&"function"==typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:s});var i=document.createEvent("Events");return i.initEvent(e,t,s),i}function n(t,s){if("undefined"==typeof t&&"undefined"==typeof s)for(var i=0;i<c.length;i++)n(c[i].className,c[i].cssClass);else{var l=t;if("undefined"==typeof s){var o=e(l);o&&(s=o.cssClass)}for(var r=document.querySelectorAll("."+s),_=0;_<r.length;_++)a(r[_],l)}}function a(n,a){if(!("object"==typeof n&&n instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var l=i("mdl-componentupgrading",!0,!0);if(n.dispatchEvent(l),!l.defaultPrevented){var o=t(n),r=[];if(a)s(n,a)||r.push(e(a));else{var _=n.classList;c.forEach(function(e){_.contains(e.cssClass)&&r.indexOf(e)===-1&&!s(n,e.className)&&r.push(e)})}for(var d,h=0,u=r.length;h<u;h++){if(d=r[h],!d)throw new Error("Unable to find a registered component for the given class.");o.push(d.className),n.setAttribute("data-upgraded",o.join(","));var E=new d.classConstructor(n);E[C]=d,p.push(E);for(var m=0,L=d.callbacks.length;m<L;m++)d.callbacks[m](n);d.widget&&(n[d.className]=E);var I=i("mdl-componentupgraded",!0,!1);n.dispatchEvent(I)}}}function l(e){Array.isArray(e)||(e=e instanceof Element?[e]:Array.prototype.slice.call(e));for(var t,s=0,i=e.length;s<i;s++)t=e[s],t instanceof HTMLElement&&(a(t),t.children.length>0&&l(t.children))}function o(t){var s="undefined"==typeof t.widget&&"undefined"==typeof t.widget,i=!0;s||(i=t.widget||t.widget);var n={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:i,callbacks:[]};if(c.forEach(function(e){if(e.cssClass===n.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===n.className)throw new Error("The provided className has already been registered")}),t.constructor.prototype.hasOwnProperty(C))throw new Error("MDL component classes must not have "+C+" defined as a property.");var a=e(t.classAsString,n);a||c.push(n)}function r(t,s){var i=e(t);i&&i.callbacks.push(s)}function _(){for(var e=0;e<c.length;e++)n(c[e].className)}function d(e){if(e){var t=p.indexOf(e);p.splice(t,1);var s=e.element_.getAttribute("data-upgraded").split(","),n=s.indexOf(e[C].classAsString);s.splice(n,1),e.element_.setAttribute("data-upgraded",s.join(","));var a=i("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(a)}}function h(e){var t=function(e){p.filter(function(t){return t.element_===e}).forEach(d)};if(e instanceof Array||e instanceof NodeList)for(var s=0;s<e.length;s++)t(e[s]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");t(e)}}var c=[],p=[],C="mdlComponentConfigInternal_";return{upgradeDom:n,upgradeElement:a,upgradeElements:l,upgradeAllRegistered:_,registerUpgradedCallback:r,register:o,downgradeElements:h}}(),s.ComponentConfigPublic,s.ComponentConfig,s.Component,s.upgradeDom=s.upgradeDom,s.upgradeElement=s.upgradeElement,s.upgradeElements=s.upgradeElements,s.upgradeAllRegistered=s.upgradeAllRegistered,s.registerUpgradedCallback=s.registerUpgradedCallback,s.register=s.register,s.downgradeElements=s.downgradeElements,window.componentHandler=s,window.componentHandler=s,window.addEventListener("load",function(){"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),s.upgradeAllRegistered()):(s.upgradeElement=function(){},s.register=function(){})}),Date.now||(Date.now=function(){return(new Date).getTime()},Date.now=Date.now);for(var i=["webkit","moz"],n=0;n<i.length&&!window.requestAnimationFrame;++n){var a=i[n];window.requestAnimationFrame=window[a+"RequestAnimationFrame"],window.cancelAnimationFrame=window[a+"CancelAnimationFrame"]||window[a+"CancelRequestAnimationFrame"],window.requestAnimationFrame=window.requestAnimationFrame,window.cancelAnimationFrame=window.cancelAnimationFrame}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var l=0;window.requestAnimationFrame=function(e){var t=Date.now(),s=Math.max(l+16,t);return setTimeout(function(){e(l=s)},s-t)},window.cancelAnimationFrame=clearTimeout,window.requestAnimationFrame=window.requestAnimationFrame,window.cancelAnimationFrame=window.cancelAnimationFrame}var o=function(e){this.element_=e,this.init()};window.MaterialButton=o,o.prototype.Constant_={},o.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},o.prototype.blurHandler_=function(e){e&&this.element_.blur()},o.prototype.disable=function(){this.element_.disabled=!0},o.prototype.disable=o.prototype.disable,o.prototype.enable=function(){this.element_.disabled=!1},o.prototype.enable=o.prototype.enable,o.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),e.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(e)}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}},s.register({constructor:o,classAsString:"MaterialButton",cssClass:"mdl-js-button",widget:!0});var r=function(e){this.element_=e,this.init()};window.MaterialCheckbox=r,r.prototype.Constant_={TINY_TIMEOUT:.001},r.prototype.CssClasses_={INPUT:"mdl-checkbox__input",BOX_OUTLINE:"mdl-checkbox__box-outline",FOCUS_HELPER:"mdl-checkbox__focus-helper",TICK_OUTLINE:"mdl-checkbox__tick-outline",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-checkbox__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked",IS_UPGRADED:"is-upgraded"},r.prototype.onChange_=function(e){this.updateClasses_()},r.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},r.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},r.prototype.onMouseUp_=function(e){this.blur_()},r.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},r.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},r.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},r.prototype.checkToggleState=r.prototype.checkToggleState,r.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},r.prototype.checkDisabled=r.prototype.checkDisabled,r.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},r.prototype.disable=r.prototype.disable,r.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},r.prototype.enable=r.prototype.enable,r.prototype.check=function(){this.inputElement_.checked=!0,this.updateClasses_()},r.prototype.check=r.prototype.check,r.prototype.uncheck=function(){this.inputElement_.checked=!1,this.updateClasses_()},r.prototype.uncheck=r.prototype.uncheck,r.prototype.init=function(){if(this.element_){this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT);var e=document.createElement("span");e.classList.add(this.CssClasses_.BOX_OUTLINE);var t=document.createElement("span");t.classList.add(this.CssClasses_.FOCUS_HELPER);var s=document.createElement("span");if(s.classList.add(this.CssClasses_.TICK_OUTLINE),e.appendChild(s),this.element_.appendChild(t),this.element_.appendChild(e),this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.boundRippleMouseUp=this.onMouseUp_.bind(this),this.rippleContainerElement_.addEventListener("mouseup",this.boundRippleMouseUp);var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(i),this.element_.appendChild(this.rippleContainerElement_)}this.boundInputOnChange=this.onChange_.bind(this),this.boundInputOnFocus=this.onFocus_.bind(this),this.boundInputOnBlur=this.onBlur_.bind(this),this.boundElementMouseUp=this.onMouseUp_.bind(this),this.inputElement_.addEventListener("change",this.boundInputOnChange),this.inputElement_.addEventListener("focus",this.boundInputOnFocus),this.inputElement_.addEventListener("blur",this.boundInputOnBlur),this.element_.addEventListener("mouseup",this.boundElementMouseUp),this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},s.register({constructor:r,classAsString:"MaterialCheckbox",cssClass:"mdl-js-checkbox",widget:!0});var _=function(e){this.element_=e,this.init()};window.MaterialIconToggle=_,_.prototype.Constant_={TINY_TIMEOUT:.001},_.prototype.CssClasses_={INPUT:"mdl-icon-toggle__input",JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-icon-toggle__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked"},_.prototype.onChange_=function(e){this.updateClasses_()},_.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},_.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},_.prototype.onMouseUp_=function(e){this.blur_()},_.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},_.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},_.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},_.prototype.checkToggleState=_.prototype.checkToggleState,_.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},_.prototype.checkDisabled=_.prototype.checkDisabled,_.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},_.prototype.disable=_.prototype.disable,_.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},_.prototype.enable=_.prototype.enable,_.prototype.check=function(){this.inputElement_.checked=!0,this.updateClasses_()},_.prototype.check=_.prototype.check,_.prototype.uncheck=function(){this.inputElement_.checked=!1,this.updateClasses_()},_.prototype.uncheck=_.prototype.uncheck,_.prototype.init=function(){if(this.element_){if(this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.element_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.JS_RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.boundRippleMouseUp=this.onMouseUp_.bind(this),this.rippleContainerElement_.addEventListener("mouseup",this.boundRippleMouseUp);var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(e),this.element_.appendChild(this.rippleContainerElement_)}this.boundInputOnChange=this.onChange_.bind(this),this.boundInputOnFocus=this.onFocus_.bind(this),this.boundInputOnBlur=this.onBlur_.bind(this),this.boundElementOnMouseUp=this.onMouseUp_.bind(this),this.inputElement_.addEventListener("change",this.boundInputOnChange),this.inputElement_.addEventListener("focus",this.boundInputOnFocus),this.inputElement_.addEventListener("blur",this.boundInputOnBlur),this.element_.addEventListener("mouseup",this.boundElementOnMouseUp),this.updateClasses_(),this.element_.classList.add("is-upgraded")}},s.register({constructor:_,classAsString:"MaterialIconToggle",cssClass:"mdl-js-icon-toggle",widget:!0});var d=function(e){this.element_=e,this.init()};window.MaterialMenu=d,d.prototype.Constant_={TRANSITION_DURATION_SECONDS:.3,TRANSITION_DURATION_FRACTION:.8,CLOSE_TIMEOUT:150},d.prototype.Keycodes_={ENTER:13,ESCAPE:27,SPACE:32,UP_ARROW:38,DOWN_ARROW:40},d.prototype.CssClasses_={CONTAINER:"mdl-menu__container",OUTLINE:"mdl-menu__outline",ITEM:"mdl-menu__item",ITEM_RIPPLE_CONTAINER:"mdl-menu__item-ripple-container",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_UPGRADED:"is-upgraded",IS_VISIBLE:"is-visible",IS_ANIMATING:"is-animating",BOTTOM_LEFT:"mdl-menu--bottom-left",BOTTOM_RIGHT:"mdl-menu--bottom-right",TOP_LEFT:"mdl-menu--top-left",TOP_RIGHT:"mdl-menu--top-right",UNALIGNED:"mdl-menu--unaligned"},d.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.classList.add(this.CssClasses_.CONTAINER),this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_),this.container_=e;var t=document.createElement("div");t.classList.add(this.CssClasses_.OUTLINE),this.outline_=t,e.insertBefore(t,this.element_);var s=this.element_.getAttribute("for")||this.element_.getAttribute("data-mdl-for"),i=null;s&&(i=document.getElementById(s),i&&(this.forElement_=i,i.addEventListener("click",this.handleForClick_.bind(this)),i.addEventListener("keydown",this.handleForKeyboardEvent_.bind(this))));var n=this.element_.querySelectorAll("."+this.CssClasses_.ITEM);this.boundItemKeydown_=this.handleItemKeyboardEvent_.bind(this),this.boundItemClick_=this.handleItemClick_.bind(this);for(var a=0;a<n.length;a++)n[a].addEventListener("click",this.boundItemClick_),n[a].tabIndex="-1",n[a].addEventListener("keydown",this.boundItemKeydown_);if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT))for(this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),a=0;a<n.length;a++){var l=n[a],o=document.createElement("span");o.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER);var r=document.createElement("span");r.classList.add(this.CssClasses_.RIPPLE),o.appendChild(r),l.appendChild(o),l.classList.add(this.CssClasses_.RIPPLE_EFFECT)}this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT),this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT),this.element_.classList.contains(this.CssClasses_.TOP_LEFT)&&this.outline_.classList.add(this.CssClasses_.TOP_LEFT),this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)&&this.outline_.classList.add(this.CssClasses_.TOP_RIGHT),this.element_.classList.contains(this.CssClasses_.UNALIGNED)&&this.outline_.classList.add(this.CssClasses_.UNALIGNED),e.classList.add(this.CssClasses_.IS_UPGRADED)}},d.prototype.handleForClick_=function(e){if(this.element_&&this.forElement_){var t=this.forElement_.getBoundingClientRect(),s=this.forElement_.parentElement.getBoundingClientRect();this.element_.classList.contains(this.CssClasses_.UNALIGNED)||(this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?(this.container_.style.right=s.right-t.right+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"):this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.bottom=s.bottom-t.top+"px"):this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(this.container_.style.right=s.right-t.right+"px",this.container_.style.bottom=s.bottom-t.top+"px"):(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"))}this.toggle(e)},d.prototype.handleForKeyboardEvent_=function(e){if(this.element_&&this.container_&&this.forElement_){var t=this.element_.querySelectorAll("."+this.CssClasses_.ITEM+":not([disabled])");t&&t.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)&&(e.keyCode===this.Keycodes_.UP_ARROW?(e.preventDefault(),t[t.length-1].focus()):e.keyCode===this.Keycodes_.DOWN_ARROW&&(e.preventDefault(),t[0].focus()))}},d.prototype.handleItemKeyboardEvent_=function(e){if(this.element_&&this.container_){var t=this.element_.querySelectorAll("."+this.CssClasses_.ITEM+":not([disabled])");if(t&&t.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)){var s=Array.prototype.slice.call(t).indexOf(e.target);if(e.keyCode===this.Keycodes_.UP_ARROW)e.preventDefault(),s>0?t[s-1].focus():t[t.length-1].focus();else if(e.keyCode===this.Keycodes_.DOWN_ARROW)e.preventDefault(),t.length>s+1?t[s+1].focus():t[0].focus();else if(e.keyCode===this.Keycodes_.SPACE||e.keyCode===this.Keycodes_.ENTER){e.preventDefault();var i=new MouseEvent("mousedown");e.target.dispatchEvent(i),i=new MouseEvent("mouseup"),e.target.dispatchEvent(i),e.target.click()}else e.keyCode===this.Keycodes_.ESCAPE&&(e.preventDefault(),this.hide())}}},d.prototype.handleItemClick_=function(e){e.target.hasAttribute("disabled")?e.stopPropagation():(this.closing_=!0,window.setTimeout(function(e){this.hide(),this.closing_=!1}.bind(this),this.Constant_.CLOSE_TIMEOUT))},d.prototype.applyClip_=function(e,t){this.element_.classList.contains(this.CssClasses_.UNALIGNED)?this.element_.style.clip="":this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?this.element_.style.clip="rect(0 "+t+"px 0 "+t+"px)":this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?this.element_.style.clip="rect("+e+"px 0 "+e+"px 0)":this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?this.element_.style.clip="rect("+e+"px "+t+"px "+e+"px "+t+"px)":this.element_.style.clip=""},d.prototype.removeAnimationEndListener_=function(e){e.target.classList.remove(d.prototype.CssClasses_.IS_ANIMATING)},d.prototype.addAnimationEndListener_=function(){this.element_.addEventListener("transitionend",this.removeAnimationEndListener_),this.element_.addEventListener("webkitTransitionEnd",this.removeAnimationEndListener_)},d.prototype.show=function(e){if(this.element_&&this.container_&&this.outline_){var t=this.element_.getBoundingClientRect().height,s=this.element_.getBoundingClientRect().width;this.container_.style.width=s+"px",this.container_.style.height=t+"px",this.outline_.style.width=s+"px",this.outline_.style.height=t+"px";for(var i=this.Constant_.TRANSITION_DURATION_SECONDS*this.Constant_.TRANSITION_DURATION_FRACTION,n=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),a=0;a<n.length;a++){var l=null;l=this.element_.classList.contains(this.CssClasses_.TOP_LEFT)||this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(t-n[a].offsetTop-n[a].offsetHeight)/t*i+"s":n[a].offsetTop/t*i+"s",n[a].style.transitionDelay=l}this.applyClip_(t,s),window.requestAnimationFrame(function(){this.element_.classList.add(this.CssClasses_.IS_ANIMATING),this.element_.style.clip="rect(0 "+s+"px "+t+"px 0)",this.container_.classList.add(this.CssClasses_.IS_VISIBLE)}.bind(this)),this.addAnimationEndListener_();var o=function(t){t===e||this.closing_||t.target.parentNode===this.element_||(document.removeEventListener("click",o),this.hide())}.bind(this);document.addEventListener("click",o)}},d.prototype.show=d.prototype.show,d.prototype.hide=function(){if(this.element_&&this.container_&&this.outline_){for(var e=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),t=0;t<e.length;t++)e[t].style.removeProperty("transition-delay");var s=this.element_.getBoundingClientRect(),i=s.height,n=s.width;this.element_.classList.add(this.CssClasses_.IS_ANIMATING),this.applyClip_(i,n),this.container_.classList.remove(this.CssClasses_.IS_VISIBLE),this.addAnimationEndListener_()}},d.prototype.hide=d.prototype.hide,d.prototype.toggle=function(e){this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)?this.hide():this.show(e)},d.prototype.toggle=d.prototype.toggle,s.register({constructor:d,classAsString:"MaterialMenu",cssClass:"mdl-js-menu",widget:!0});var h=function(e){this.element_=e,this.init()};window.MaterialProgress=h,h.prototype.Constant_={},h.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"},h.prototype.setProgress=function(e){this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)||(this.progressbar_.style.width=e+"%")},h.prototype.setProgress=h.prototype.setProgress,h.prototype.setBuffer=function(e){this.bufferbar_.style.width=e+"%",this.auxbar_.style.width=100-e+"%"},h.prototype.setBuffer=h.prototype.setBuffer,h.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.className="progressbar bar bar1",this.element_.appendChild(e),this.progressbar_=e,e=document.createElement("div"),e.className="bufferbar bar bar2",this.element_.appendChild(e),this.bufferbar_=e,e=document.createElement("div"),e.className="auxbar bar bar3",this.element_.appendChild(e),this.auxbar_=e,this.progressbar_.style.width="0%",this.bufferbar_.style.width="100%",this.auxbar_.style.width="0%",this.element_.classList.add("is-upgraded")}},s.register({constructor:h,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:!0});var c=function(e){this.element_=e,this.init()};window.MaterialRadio=c,c.prototype.Constant_={TINY_TIMEOUT:.001},c.prototype.CssClasses_={IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked",IS_UPGRADED:"is-upgraded",JS_RADIO:"mdl-js-radio",RADIO_BTN:"mdl-radio__button",RADIO_OUTER_CIRCLE:"mdl-radio__outer-circle",RADIO_INNER_CIRCLE:"mdl-radio__inner-circle",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-radio__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple"},c.prototype.onChange_=function(e){for(var t=document.getElementsByClassName(this.CssClasses_.JS_RADIO),s=0;s<t.length;s++){var i=t[s].querySelector("."+this.CssClasses_.RADIO_BTN);i.getAttribute("name")===this.btnElement_.getAttribute("name")&&"undefined"!=typeof t[s].MaterialRadio&&t[s].MaterialRadio.updateClasses_()}},c.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},c.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},c.prototype.onMouseup_=function(e){this.blur_()},c.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},c.prototype.blur_=function(){window.setTimeout(function(){this.btnElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},c.prototype.checkDisabled=function(){this.btnElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},c.prototype.checkDisabled=c.prototype.checkDisabled,c.prototype.checkToggleState=function(){this.btnElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},c.prototype.checkToggleState=c.prototype.checkToggleState,c.prototype.disable=function(){this.btnElement_.disabled=!0,this.updateClasses_()},c.prototype.disable=c.prototype.disable,c.prototype.enable=function(){this.btnElement_.disabled=!1,this.updateClasses_()},c.prototype.enable=c.prototype.enable,c.prototype.check=function(){this.btnElement_.checked=!0,this.onChange_(null)},c.prototype.check=c.prototype.check,c.prototype.uncheck=function(){this.btnElement_.checked=!1,this.onChange_(null)},c.prototype.uncheck=c.prototype.uncheck,c.prototype.init=function(){if(this.element_){this.btnElement_=this.element_.querySelector("."+this.CssClasses_.RADIO_BTN),this.boundChangeHandler_=this.onChange_.bind(this),this.boundFocusHandler_=this.onChange_.bind(this),this.boundBlurHandler_=this.onBlur_.bind(this),this.boundMouseUpHandler_=this.onMouseup_.bind(this);var e=document.createElement("span");e.classList.add(this.CssClasses_.RADIO_OUTER_CIRCLE);var t=document.createElement("span");t.classList.add(this.CssClasses_.RADIO_INNER_CIRCLE),this.element_.appendChild(e),this.element_.appendChild(t);var s;if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),s=document.createElement("span"),s.classList.add(this.CssClasses_.RIPPLE_CONTAINER),s.classList.add(this.CssClasses_.RIPPLE_EFFECT),s.classList.add(this.CssClasses_.RIPPLE_CENTER),s.addEventListener("mouseup",this.boundMouseUpHandler_);var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),s.appendChild(i),this.element_.appendChild(s)}this.btnElement_.addEventListener("change",this.boundChangeHandler_),this.btnElement_.addEventListener("focus",this.boundFocusHandler_),this.btnElement_.addEventListener("blur",this.boundBlurHandler_),this.element_.addEventListener("mouseup",this.boundMouseUpHandler_),this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},s.register({constructor:c,classAsString:"MaterialRadio",cssClass:"mdl-js-radio",widget:!0});var p=function(e){this.element_=e,this.isIE_=window.navigator.msPointerEnabled,this.init()};window.MaterialSlider=p,p.prototype.Constant_={},p.prototype.CssClasses_={IE_CONTAINER:"mdl-slider__ie-container",SLIDER_CONTAINER:"mdl-slider__container",BACKGROUND_FLEX:"mdl-slider__background-flex",BACKGROUND_LOWER:"mdl-slider__background-lower",BACKGROUND_UPPER:"mdl-slider__background-upper",IS_LOWEST_VALUE:"is-lowest-value",IS_UPGRADED:"is-upgraded"},p.prototype.onInput_=function(e){this.updateValueStyles_()},p.prototype.onChange_=function(e){this.updateValueStyles_()},p.prototype.onMouseUp_=function(e){e.target.blur()},p.prototype.onContainerMouseDown_=function(e){if(e.target===this.element_.parentElement){e.preventDefault();var t=new MouseEvent("mousedown",{target:e.target,buttons:e.buttons,clientX:e.clientX,clientY:this.element_.getBoundingClientRect().y});this.element_.dispatchEvent(t)}},p.prototype.updateValueStyles_=function(){var e=(this.element_.value-this.element_.min)/(this.element_.max-this.element_.min);0===e?this.element_.classList.add(this.CssClasses_.IS_LOWEST_VALUE):this.element_.classList.remove(this.CssClasses_.IS_LOWEST_VALUE),this.isIE_||(this.backgroundLower_.style.flex=e,this.backgroundLower_.style.webkitFlex=e,this.backgroundUpper_.style.flex=1-e,this.backgroundUpper_.style.webkitFlex=1-e)},p.prototype.disable=function(){this.element_.disabled=!0},p.prototype.disable=p.prototype.disable,p.prototype.enable=function(){this.element_.disabled=!1},p.prototype.enable=p.prototype.enable,p.prototype.change=function(e){"undefined"!=typeof e&&(this.element_.value=e),this.updateValueStyles_()},p.prototype.change=p.prototype.change,p.prototype.init=function(){if(this.element_){if(this.isIE_){var e=document.createElement("div");e.classList.add(this.CssClasses_.IE_CONTAINER),this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_)}else{var t=document.createElement("div");t.classList.add(this.CssClasses_.SLIDER_CONTAINER),this.element_.parentElement.insertBefore(t,this.element_),this.element_.parentElement.removeChild(this.element_),t.appendChild(this.element_);var s=document.createElement("div");s.classList.add(this.CssClasses_.BACKGROUND_FLEX),t.appendChild(s),this.backgroundLower_=document.createElement("div"),this.backgroundLower_.classList.add(this.CssClasses_.BACKGROUND_LOWER),s.appendChild(this.backgroundLower_),this.backgroundUpper_=document.createElement("div"),this.backgroundUpper_.classList.add(this.CssClasses_.BACKGROUND_UPPER),s.appendChild(this.backgroundUpper_)}this.boundInputHandler=this.onInput_.bind(this),this.boundChangeHandler=this.onChange_.bind(this),this.boundMouseUpHandler=this.onMouseUp_.bind(this),this.boundContainerMouseDownHandler=this.onContainerMouseDown_.bind(this),this.element_.addEventListener("input",this.boundInputHandler),this.element_.addEventListener("change",this.boundChangeHandler),this.element_.addEventListener("mouseup",this.boundMouseUpHandler),this.element_.parentElement.addEventListener("mousedown",this.boundContainerMouseDownHandler),this.updateValueStyles_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},s.register({constructor:p,classAsString:"MaterialSlider",cssClass:"mdl-js-slider",widget:!0});var C=function(e){if(this.element_=e,this.textElement_=this.element_.querySelector("."+this.cssClasses_.MESSAGE),this.actionElement_=this.element_.querySelector("."+this.cssClasses_.ACTION),!this.textElement_)throw new Error("There must be a message element for a snackbar.");if(!this.actionElement_)throw new Error("There must be an action element for a snackbar.");this.active=!1,this.actionHandler_=void 0,this.message_=void 0,this.actionText_=void 0,this.queuedNotifications_=[],this.setActionHidden_(!0)};window.MaterialSnackbar=C,C.prototype.Constant_={ANIMATION_LENGTH:250},C.prototype.cssClasses_={SNACKBAR:"mdl-snackbar",MESSAGE:"mdl-snackbar__text",ACTION:"mdl-snackbar__action",ACTIVE:"mdl-snackbar--active"},C.prototype.displaySnackbar_=function(){this.element_.setAttribute("aria-hidden","true"),
this.actionHandler_&&(this.actionElement_.textContent=this.actionText_,this.actionElement_.addEventListener("click",this.actionHandler_),this.setActionHidden_(!1)),this.textElement_.textContent=this.message_,this.element_.classList.add(this.cssClasses_.ACTIVE),this.element_.setAttribute("aria-hidden","false"),setTimeout(this.cleanup_.bind(this),this.timeout_)},C.prototype.showSnackbar=function(e){if(void 0===e)throw new Error("Please provide a data object with at least a message to display.");if(void 0===e.message)throw new Error("Please provide a message to be displayed.");if(e.actionHandler&&!e.actionText)throw new Error("Please provide action text with the handler.");this.active?this.queuedNotifications_.push(e):(this.active=!0,this.message_=e.message,e.timeout?this.timeout_=e.timeout:this.timeout_=2750,e.actionHandler&&(this.actionHandler_=e.actionHandler),e.actionText&&(this.actionText_=e.actionText),this.displaySnackbar_())},C.prototype.showSnackbar=C.prototype.showSnackbar,C.prototype.checkQueue_=function(){this.queuedNotifications_.length>0&&this.showSnackbar(this.queuedNotifications_.shift())},C.prototype.cleanup_=function(){this.element_.classList.remove(this.cssClasses_.ACTIVE),setTimeout(function(){this.element_.setAttribute("aria-hidden","true"),this.textElement_.textContent="",Boolean(this.actionElement_.getAttribute("aria-hidden"))||(this.setActionHidden_(!0),this.actionElement_.textContent="",this.actionElement_.removeEventListener("click",this.actionHandler_)),this.actionHandler_=void 0,this.message_=void 0,this.actionText_=void 0,this.active=!1,this.checkQueue_()}.bind(this),this.Constant_.ANIMATION_LENGTH)},C.prototype.setActionHidden_=function(e){e?this.actionElement_.setAttribute("aria-hidden","true"):this.actionElement_.removeAttribute("aria-hidden")},s.register({constructor:C,classAsString:"MaterialSnackbar",cssClass:"mdl-js-snackbar",widget:!0});var u=function(e){this.element_=e,this.init()};window.MaterialSpinner=u,u.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},u.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},u.prototype.createLayer=function(e){var t=document.createElement("div");t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var s=document.createElement("div");s.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),s.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var i=document.createElement("div");i.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),n.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var a=[s,i,n],l=0;l<a.length;l++){var o=document.createElement("div");o.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),a[l].appendChild(o)}t.appendChild(s),t.appendChild(i),t.appendChild(n),this.element_.appendChild(t)},u.prototype.createLayer=u.prototype.createLayer,u.prototype.stop=function(){this.element_.classList.remove("is-active")},u.prototype.stop=u.prototype.stop,u.prototype.start=function(){this.element_.classList.add("is-active")},u.prototype.start=u.prototype.start,u.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded")}},s.register({constructor:u,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0});var E=function(e){this.element_=e,this.init()};window.MaterialSwitch=E,E.prototype.Constant_={TINY_TIMEOUT:.001},E.prototype.CssClasses_={INPUT:"mdl-switch__input",TRACK:"mdl-switch__track",THUMB:"mdl-switch__thumb",FOCUS_HELPER:"mdl-switch__focus-helper",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-switch__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked"},E.prototype.onChange_=function(e){this.updateClasses_()},E.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},E.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},E.prototype.onMouseUp_=function(e){this.blur_()},E.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},E.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},E.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},E.prototype.checkDisabled=E.prototype.checkDisabled,E.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},E.prototype.checkToggleState=E.prototype.checkToggleState,E.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},E.prototype.disable=E.prototype.disable,E.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},E.prototype.enable=E.prototype.enable,E.prototype.on=function(){this.inputElement_.checked=!0,this.updateClasses_()},E.prototype.on=E.prototype.on,E.prototype.off=function(){this.inputElement_.checked=!1,this.updateClasses_()},E.prototype.off=E.prototype.off,E.prototype.init=function(){if(this.element_){this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT);var e=document.createElement("div");e.classList.add(this.CssClasses_.TRACK);var t=document.createElement("div");t.classList.add(this.CssClasses_.THUMB);var s=document.createElement("span");if(s.classList.add(this.CssClasses_.FOCUS_HELPER),t.appendChild(s),this.element_.appendChild(e),this.element_.appendChild(t),this.boundMouseUpHandler=this.onMouseUp_.bind(this),this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.rippleContainerElement_.addEventListener("mouseup",this.boundMouseUpHandler);var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(i),this.element_.appendChild(this.rippleContainerElement_)}this.boundChangeHandler=this.onChange_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.inputElement_.addEventListener("change",this.boundChangeHandler),this.inputElement_.addEventListener("focus",this.boundFocusHandler),this.inputElement_.addEventListener("blur",this.boundBlurHandler),this.element_.addEventListener("mouseup",this.boundMouseUpHandler),this.updateClasses_(),this.element_.classList.add("is-upgraded")}},s.register({constructor:E,classAsString:"MaterialSwitch",cssClass:"mdl-js-switch",widget:!0});var m=function(e){this.element_=e,this.init()};window.MaterialTabs=m,m.prototype.Constant_={},m.prototype.CssClasses_={TAB_CLASS:"mdl-tabs__tab",PANEL_CLASS:"mdl-tabs__panel",ACTIVE_CLASS:"is-active",UPGRADED_CLASS:"is-upgraded",MDL_JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",MDL_RIPPLE_CONTAINER:"mdl-tabs__ripple-container",MDL_RIPPLE:"mdl-ripple",MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events"},m.prototype.initTabs_=function(){this.element_.classList.contains(this.CssClasses_.MDL_JS_RIPPLE_EFFECT)&&this.element_.classList.add(this.CssClasses_.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS),this.tabs_=this.element_.querySelectorAll("."+this.CssClasses_.TAB_CLASS),this.panels_=this.element_.querySelectorAll("."+this.CssClasses_.PANEL_CLASS);for(var t=0;t<this.tabs_.length;t++)new e(this.tabs_[t],this);this.element_.classList.add(this.CssClasses_.UPGRADED_CLASS)},m.prototype.resetTabState_=function(){for(var e=0;e<this.tabs_.length;e++)this.tabs_[e].classList.remove(this.CssClasses_.ACTIVE_CLASS)},m.prototype.resetPanelState_=function(){for(var e=0;e<this.panels_.length;e++)this.panels_[e].classList.remove(this.CssClasses_.ACTIVE_CLASS)},m.prototype.init=function(){this.element_&&this.initTabs_()},s.register({constructor:m,classAsString:"MaterialTabs",cssClass:"mdl-js-tabs"});var L=function(e){this.element_=e,this.maxRows=this.Constant_.NO_MAX_ROWS,this.init()};window.MaterialTextfield=L,L.prototype.Constant_={NO_MAX_ROWS:-1,MAX_ROWS_ATTRIBUTE:"maxrows"},L.prototype.CssClasses_={LABEL:"mdl-textfield__label",INPUT:"mdl-textfield__input",IS_DIRTY:"is-dirty",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_INVALID:"is-invalid",IS_UPGRADED:"is-upgraded",HAS_PLACEHOLDER:"has-placeholder"},L.prototype.onKeyDown_=function(e){var t=e.target.value.split("\n").length;13===e.keyCode&&t>=this.maxRows&&e.preventDefault()},L.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},L.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},L.prototype.onReset_=function(e){this.updateClasses_()},L.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty(),this.checkFocus()},L.prototype.checkDisabled=function(){this.input_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},L.prototype.checkDisabled=L.prototype.checkDisabled,L.prototype.checkFocus=function(){Boolean(this.element_.querySelector(":focus"))?this.element_.classList.add(this.CssClasses_.IS_FOCUSED):this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},L.prototype.checkFocus=L.prototype.checkFocus,L.prototype.checkValidity=function(){this.input_.validity&&(this.input_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID))},L.prototype.checkValidity=L.prototype.checkValidity,L.prototype.checkDirty=function(){this.input_.value&&this.input_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY)},L.prototype.checkDirty=L.prototype.checkDirty,L.prototype.disable=function(){this.input_.disabled=!0,this.updateClasses_()},L.prototype.disable=L.prototype.disable,L.prototype.enable=function(){this.input_.disabled=!1,this.updateClasses_()},L.prototype.enable=L.prototype.enable,L.prototype.change=function(e){this.input_.value=e||"",this.updateClasses_()},L.prototype.change=L.prototype.change,L.prototype.init=function(){if(this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.input_)){this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)&&(this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10),isNaN(this.maxRows)&&(this.maxRows=this.Constant_.NO_MAX_ROWS)),this.input_.hasAttribute("placeholder")&&this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER),this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.boundResetHandler=this.onReset_.bind(this),this.input_.addEventListener("input",this.boundUpdateClassesHandler),this.input_.addEventListener("focus",this.boundFocusHandler),this.input_.addEventListener("blur",this.boundBlurHandler),this.input_.addEventListener("reset",this.boundResetHandler),this.maxRows!==this.Constant_.NO_MAX_ROWS&&(this.boundKeyDownHandler=this.onKeyDown_.bind(this),this.input_.addEventListener("keydown",this.boundKeyDownHandler));var e=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED),e&&this.element_.classList.add(this.CssClasses_.IS_INVALID),this.input_.hasAttribute("autofocus")&&(this.element_.focus(),this.checkFocus())}},s.register({constructor:L,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:!0});var I=function(e){this.element_=e,this.init()};window.MaterialTooltip=I,I.prototype.Constant_={},I.prototype.CssClasses_={IS_ACTIVE:"is-active",BOTTOM:"mdl-tooltip--bottom",LEFT:"mdl-tooltip--left",RIGHT:"mdl-tooltip--right",TOP:"mdl-tooltip--top"},I.prototype.handleMouseEnter_=function(e){var t=e.target.getBoundingClientRect(),s=t.left+t.width/2,i=t.top+t.height/2,n=-1*(this.element_.offsetWidth/2),a=-1*(this.element_.offsetHeight/2);this.element_.classList.contains(this.CssClasses_.LEFT)||this.element_.classList.contains(this.CssClasses_.RIGHT)?(s=t.width/2,i+a<0?(this.element_.style.top="0",this.element_.style.marginTop="0"):(this.element_.style.top=i+"px",this.element_.style.marginTop=a+"px")):s+n<0?(this.element_.style.left="0",this.element_.style.marginLeft="0"):(this.element_.style.left=s+"px",this.element_.style.marginLeft=n+"px"),this.element_.classList.contains(this.CssClasses_.TOP)?this.element_.style.top=t.top-this.element_.offsetHeight-10+"px":this.element_.classList.contains(this.CssClasses_.RIGHT)?this.element_.style.left=t.left+t.width+10+"px":this.element_.classList.contains(this.CssClasses_.LEFT)?this.element_.style.left=t.left-this.element_.offsetWidth-10+"px":this.element_.style.top=t.top+t.height+10+"px",this.element_.classList.add(this.CssClasses_.IS_ACTIVE)},I.prototype.hideTooltip_=function(){this.element_.classList.remove(this.CssClasses_.IS_ACTIVE)},I.prototype.init=function(){if(this.element_){var e=this.element_.getAttribute("for")||this.element_.getAttribute("data-mdl-for");e&&(this.forElement_=document.getElementById(e)),this.forElement_&&(this.forElement_.hasAttribute("tabindex")||this.forElement_.setAttribute("tabindex","0"),this.boundMouseEnterHandler=this.handleMouseEnter_.bind(this),this.boundMouseLeaveAndScrollHandler=this.hideTooltip_.bind(this),this.forElement_.addEventListener("mouseenter",this.boundMouseEnterHandler,!1),this.forElement_.addEventListener("touchend",this.boundMouseEnterHandler,!1),this.forElement_.addEventListener("mouseleave",this.boundMouseLeaveAndScrollHandler,!1),window.addEventListener("scroll",this.boundMouseLeaveAndScrollHandler,!0),window.addEventListener("touchstart",this.boundMouseLeaveAndScrollHandler))}},s.register({constructor:I,classAsString:"MaterialTooltip",cssClass:"mdl-tooltip"});var f=function(e){this.element_=e,this.init()};window.MaterialLayout=f,f.prototype.Constant_={MAX_WIDTH:"(max-width: 1024px)",TAB_SCROLL_PIXELS:100,RESIZE_TIMEOUT:100,MENU_ICON:"&#xE5D2;",CHEVRON_LEFT:"chevron_left",CHEVRON_RIGHT:"chevron_right"},f.prototype.Keycodes_={ENTER:13,ESCAPE:27,SPACE:32},f.prototype.Mode_={STANDARD:0,SEAMED:1,WATERFALL:2,SCROLL:3},f.prototype.CssClasses_={CONTAINER:"mdl-layout__container",HEADER:"mdl-layout__header",DRAWER:"mdl-layout__drawer",CONTENT:"mdl-layout__content",DRAWER_BTN:"mdl-layout__drawer-button",ICON:"material-icons",JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-layout__tab-ripple-container",RIPPLE:"mdl-ripple",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",HEADER_SEAMED:"mdl-layout__header--seamed",HEADER_WATERFALL:"mdl-layout__header--waterfall",HEADER_SCROLL:"mdl-layout__header--scroll",FIXED_HEADER:"mdl-layout--fixed-header",OBFUSCATOR:"mdl-layout__obfuscator",TAB_BAR:"mdl-layout__tab-bar",TAB_CONTAINER:"mdl-layout__tab-bar-container",TAB:"mdl-layout__tab",TAB_BAR_BUTTON:"mdl-layout__tab-bar-button",TAB_BAR_LEFT_BUTTON:"mdl-layout__tab-bar-left-button",TAB_BAR_RIGHT_BUTTON:"mdl-layout__tab-bar-right-button",TAB_MANUAL_SWITCH:"mdl-layout__tab-manual-switch",PANEL:"mdl-layout__tab-panel",HAS_DRAWER:"has-drawer",HAS_TABS:"has-tabs",HAS_SCROLLING_HEADER:"has-scrolling-header",CASTING_SHADOW:"is-casting-shadow",IS_COMPACT:"is-compact",IS_SMALL_SCREEN:"is-small-screen",IS_DRAWER_OPEN:"is-visible",IS_ACTIVE:"is-active",IS_UPGRADED:"is-upgraded",IS_ANIMATING:"is-animating",ON_LARGE_SCREEN:"mdl-layout--large-screen-only",ON_SMALL_SCREEN:"mdl-layout--small-screen-only"},f.prototype.contentScrollHandler_=function(){if(!this.header_.classList.contains(this.CssClasses_.IS_ANIMATING)){var e=!this.element_.classList.contains(this.CssClasses_.IS_SMALL_SCREEN)||this.element_.classList.contains(this.CssClasses_.FIXED_HEADER);this.content_.scrollTop>0&&!this.header_.classList.contains(this.CssClasses_.IS_COMPACT)?(this.header_.classList.add(this.CssClasses_.CASTING_SHADOW),this.header_.classList.add(this.CssClasses_.IS_COMPACT),e&&this.header_.classList.add(this.CssClasses_.IS_ANIMATING)):this.content_.scrollTop<=0&&this.header_.classList.contains(this.CssClasses_.IS_COMPACT)&&(this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW),this.header_.classList.remove(this.CssClasses_.IS_COMPACT),e&&this.header_.classList.add(this.CssClasses_.IS_ANIMATING))}},f.prototype.keyboardEventHandler_=function(e){e.keyCode===this.Keycodes_.ESCAPE&&this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)&&this.toggleDrawer()},f.prototype.screenSizeHandler_=function(){this.screenSizeMediaQuery_.matches?this.element_.classList.add(this.CssClasses_.IS_SMALL_SCREEN):(this.element_.classList.remove(this.CssClasses_.IS_SMALL_SCREEN),this.drawer_&&(this.drawer_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN),this.obfuscator_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN)))},f.prototype.drawerToggleHandler_=function(e){if(e&&"keydown"===e.type){if(e.keyCode!==this.Keycodes_.SPACE&&e.keyCode!==this.Keycodes_.ENTER)return;e.preventDefault()}this.toggleDrawer()},f.prototype.headerTransitionEndHandler_=function(){this.header_.classList.remove(this.CssClasses_.IS_ANIMATING)},f.prototype.headerClickHandler_=function(){this.header_.classList.contains(this.CssClasses_.IS_COMPACT)&&(this.header_.classList.remove(this.CssClasses_.IS_COMPACT),this.header_.classList.add(this.CssClasses_.IS_ANIMATING))},f.prototype.resetTabState_=function(e){for(var t=0;t<e.length;t++)e[t].classList.remove(this.CssClasses_.IS_ACTIVE)},f.prototype.resetPanelState_=function(e){for(var t=0;t<e.length;t++)e[t].classList.remove(this.CssClasses_.IS_ACTIVE)},f.prototype.toggleDrawer=function(){var e=this.element_.querySelector("."+this.CssClasses_.DRAWER_BTN);this.drawer_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN),this.obfuscator_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN),this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)?(this.drawer_.setAttribute("aria-hidden","false"),e.setAttribute("aria-expanded","true")):(this.drawer_.setAttribute("aria-hidden","true"),e.setAttribute("aria-expanded","false"))},f.prototype.toggleDrawer=f.prototype.toggleDrawer,f.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.classList.add(this.CssClasses_.CONTAINER);var s=this.element_.querySelector(":focus");this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_),s&&s.focus();for(var i=this.element_.childNodes,n=i.length,a=0;a<n;a++){var l=i[a];l.classList&&l.classList.contains(this.CssClasses_.HEADER)&&(this.header_=l),l.classList&&l.classList.contains(this.CssClasses_.DRAWER)&&(this.drawer_=l),l.classList&&l.classList.contains(this.CssClasses_.CONTENT)&&(this.content_=l)}window.addEventListener("pageshow",function(e){e.persisted&&(this.element_.style.overflowY="hidden",requestAnimationFrame(function(){this.element_.style.overflowY=""}.bind(this)))}.bind(this),!1),this.header_&&(this.tabBar_=this.header_.querySelector("."+this.CssClasses_.TAB_BAR));var o=this.Mode_.STANDARD;if(this.header_&&(this.header_.classList.contains(this.CssClasses_.HEADER_SEAMED)?o=this.Mode_.SEAMED:this.header_.classList.contains(this.CssClasses_.HEADER_WATERFALL)?(o=this.Mode_.WATERFALL,this.header_.addEventListener("transitionend",this.headerTransitionEndHandler_.bind(this)),this.header_.addEventListener("click",this.headerClickHandler_.bind(this))):this.header_.classList.contains(this.CssClasses_.HEADER_SCROLL)&&(o=this.Mode_.SCROLL,e.classList.add(this.CssClasses_.HAS_SCROLLING_HEADER)),o===this.Mode_.STANDARD?(this.header_.classList.add(this.CssClasses_.CASTING_SHADOW),this.tabBar_&&this.tabBar_.classList.add(this.CssClasses_.CASTING_SHADOW)):o===this.Mode_.SEAMED||o===this.Mode_.SCROLL?(this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW),this.tabBar_&&this.tabBar_.classList.remove(this.CssClasses_.CASTING_SHADOW)):o===this.Mode_.WATERFALL&&(this.content_.addEventListener("scroll",this.contentScrollHandler_.bind(this)),this.contentScrollHandler_())),this.drawer_){var r=this.element_.querySelector("."+this.CssClasses_.DRAWER_BTN);if(!r){r=document.createElement("div"),r.setAttribute("aria-expanded","false"),r.setAttribute("role","button"),r.setAttribute("tabindex","0"),r.classList.add(this.CssClasses_.DRAWER_BTN);var _=document.createElement("i");_.classList.add(this.CssClasses_.ICON),_.innerHTML=this.Constant_.MENU_ICON,r.appendChild(_)}this.drawer_.classList.contains(this.CssClasses_.ON_LARGE_SCREEN)?r.classList.add(this.CssClasses_.ON_LARGE_SCREEN):this.drawer_.classList.contains(this.CssClasses_.ON_SMALL_SCREEN)&&r.classList.add(this.CssClasses_.ON_SMALL_SCREEN),r.addEventListener("click",this.drawerToggleHandler_.bind(this)),r.addEventListener("keydown",this.drawerToggleHandler_.bind(this)),this.element_.classList.add(this.CssClasses_.HAS_DRAWER),this.element_.classList.contains(this.CssClasses_.FIXED_HEADER)?this.header_.insertBefore(r,this.header_.firstChild):this.element_.insertBefore(r,this.content_);var d=document.createElement("div");d.classList.add(this.CssClasses_.OBFUSCATOR),this.element_.appendChild(d),d.addEventListener("click",this.drawerToggleHandler_.bind(this)),this.obfuscator_=d,this.drawer_.addEventListener("keydown",this.keyboardEventHandler_.bind(this)),this.drawer_.setAttribute("aria-hidden","true")}if(this.screenSizeMediaQuery_=window.matchMedia(this.Constant_.MAX_WIDTH),this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this)),this.screenSizeHandler_(),this.header_&&this.tabBar_){this.element_.classList.add(this.CssClasses_.HAS_TABS);var h=document.createElement("div");h.classList.add(this.CssClasses_.TAB_CONTAINER),this.header_.insertBefore(h,this.tabBar_),this.header_.removeChild(this.tabBar_);var c=document.createElement("div");c.classList.add(this.CssClasses_.TAB_BAR_BUTTON),c.classList.add(this.CssClasses_.TAB_BAR_LEFT_BUTTON);var p=document.createElement("i");p.classList.add(this.CssClasses_.ICON),p.textContent=this.Constant_.CHEVRON_LEFT,c.appendChild(p),c.addEventListener("click",function(){this.tabBar_.scrollLeft-=this.Constant_.TAB_SCROLL_PIXELS}.bind(this));var C=document.createElement("div");C.classList.add(this.CssClasses_.TAB_BAR_BUTTON),C.classList.add(this.CssClasses_.TAB_BAR_RIGHT_BUTTON);var u=document.createElement("i");u.classList.add(this.CssClasses_.ICON),u.textContent=this.Constant_.CHEVRON_RIGHT,C.appendChild(u),C.addEventListener("click",function(){this.tabBar_.scrollLeft+=this.Constant_.TAB_SCROLL_PIXELS}.bind(this)),h.appendChild(c),h.appendChild(this.tabBar_),h.appendChild(C);var E=function(){this.tabBar_.scrollLeft>0?c.classList.add(this.CssClasses_.IS_ACTIVE):c.classList.remove(this.CssClasses_.IS_ACTIVE),this.tabBar_.scrollLeft<this.tabBar_.scrollWidth-this.tabBar_.offsetWidth?C.classList.add(this.CssClasses_.IS_ACTIVE):C.classList.remove(this.CssClasses_.IS_ACTIVE)}.bind(this);this.tabBar_.addEventListener("scroll",E),E();var m=function(){this.resizeTimeoutId_&&clearTimeout(this.resizeTimeoutId_),this.resizeTimeoutId_=setTimeout(function(){E(),this.resizeTimeoutId_=null}.bind(this),this.Constant_.RESIZE_TIMEOUT)}.bind(this);window.addEventListener("resize",m),this.tabBar_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)&&this.tabBar_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);for(var L=this.tabBar_.querySelectorAll("."+this.CssClasses_.TAB),I=this.content_.querySelectorAll("."+this.CssClasses_.PANEL),f=0;f<L.length;f++)new t(L[f],L,I,this)}this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},window.MaterialLayoutTab=t,s.register({constructor:f,classAsString:"MaterialLayout",cssClass:"mdl-js-layout"});var b=function(e){this.element_=e,this.init()};window.MaterialDataTable=b,b.prototype.Constant_={},b.prototype.CssClasses_={DATA_TABLE:"mdl-data-table",SELECTABLE:"mdl-data-table--selectable",SELECT_ELEMENT:"mdl-data-table__select",IS_SELECTED:"is-selected",IS_UPGRADED:"is-upgraded"},b.prototype.selectRow_=function(e,t,s){return t?function(){e.checked?t.classList.add(this.CssClasses_.IS_SELECTED):t.classList.remove(this.CssClasses_.IS_SELECTED)}.bind(this):s?function(){var t,i;if(e.checked)for(t=0;t<s.length;t++)i=s[t].querySelector("td").querySelector(".mdl-checkbox"),i.MaterialCheckbox.check(),s[t].classList.add(this.CssClasses_.IS_SELECTED);else for(t=0;t<s.length;t++)i=s[t].querySelector("td").querySelector(".mdl-checkbox"),i.MaterialCheckbox.uncheck(),s[t].classList.remove(this.CssClasses_.IS_SELECTED)}.bind(this):void 0},b.prototype.createCheckbox_=function(e,t){var i=document.createElement("label"),n=["mdl-checkbox","mdl-js-checkbox","mdl-js-ripple-effect",this.CssClasses_.SELECT_ELEMENT];i.className=n.join(" ");var a=document.createElement("input");return a.type="checkbox",a.classList.add("mdl-checkbox__input"),e?(a.checked=e.classList.contains(this.CssClasses_.IS_SELECTED),a.addEventListener("change",this.selectRow_(a,e))):t&&a.addEventListener("change",this.selectRow_(a,null,t)),i.appendChild(a),s.upgradeElement(i,"MaterialCheckbox"),i},b.prototype.init=function(){if(this.element_){var e=this.element_.querySelector("th"),t=Array.prototype.slice.call(this.element_.querySelectorAll("tbody tr")),s=Array.prototype.slice.call(this.element_.querySelectorAll("tfoot tr")),i=t.concat(s);if(this.element_.classList.contains(this.CssClasses_.SELECTABLE)){var n=document.createElement("th"),a=this.createCheckbox_(null,i);n.appendChild(a),e.parentElement.insertBefore(n,e);for(var l=0;l<i.length;l++){var o=i[l].querySelector("td");if(o){var r=document.createElement("td");if("TBODY"===i[l].parentNode.nodeName.toUpperCase()){var _=this.createCheckbox_(i[l]);r.appendChild(_)}i[l].insertBefore(r,o)}}this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}}},s.register({constructor:b,classAsString:"MaterialDataTable",cssClass:"mdl-js-data-table"});var S=function(e){this.element_=e,this.init()};window.MaterialRipple=S,S.prototype.Constant_={INITIAL_SCALE:"scale(0.0001, 0.0001)",INITIAL_SIZE:"1px",INITIAL_OPACITY:"0.4",FINAL_OPACITY:"0",FINAL_SCALE:""},S.prototype.CssClasses_={RIPPLE_CENTER:"mdl-ripple--center",RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_ANIMATING:"is-animating",IS_VISIBLE:"is-visible"},S.prototype.downHandler_=function(e){if(!this.rippleElement_.style.width&&!this.rippleElement_.style.height){var t=this.element_.getBoundingClientRect();this.boundHeight=t.height,this.boundWidth=t.width,this.rippleSize_=2*Math.sqrt(t.width*t.width+t.height*t.height)+2,this.rippleElement_.style.width=this.rippleSize_+"px",this.rippleElement_.style.height=this.rippleSize_+"px"}if(this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE),"mousedown"===e.type&&this.ignoringMouseDown_)this.ignoringMouseDown_=!1;else{"touchstart"===e.type&&(this.ignoringMouseDown_=!0);var s=this.getFrameCount();if(s>0)return;this.setFrameCount(1);var i,n,a=e.currentTarget.getBoundingClientRect();if(0===e.clientX&&0===e.clientY)i=Math.round(a.width/2),n=Math.round(a.height/2);else{var l=void 0!==e.clientX?e.clientX:e.touches[0].clientX,o=void 0!==e.clientY?e.clientY:e.touches[0].clientY;i=Math.round(l-a.left),n=Math.round(o-a.top)}this.setRippleXY(i,n),this.setRippleStyles(!0),window.requestAnimationFrame(this.animFrameHandler.bind(this))}},S.prototype.upHandler_=function(e){e&&2!==e.detail&&window.setTimeout(function(){this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE)}.bind(this),0)},S.prototype.init=function(){if(this.element_){var e=this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)||(this.rippleElement_=this.element_.querySelector("."+this.CssClasses_.RIPPLE),this.frameCount_=0,this.rippleSize_=0,this.x_=0,this.y_=0,this.ignoringMouseDown_=!1,this.boundDownHandler=this.downHandler_.bind(this),this.element_.addEventListener("mousedown",this.boundDownHandler),this.element_.addEventListener("touchstart",this.boundDownHandler),this.boundUpHandler=this.upHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundUpHandler),this.element_.addEventListener("mouseleave",this.boundUpHandler),this.element_.addEventListener("touchend",this.boundUpHandler),this.element_.addEventListener("blur",this.boundUpHandler),this.getFrameCount=function(){return this.frameCount_},this.setFrameCount=function(e){this.frameCount_=e},this.getRippleElement=function(){return this.rippleElement_},this.setRippleXY=function(e,t){this.x_=e,this.y_=t},this.setRippleStyles=function(t){if(null!==this.rippleElement_){var s,i,n,a="translate("+this.x_+"px, "+this.y_+"px)";t?(i=this.Constant_.INITIAL_SCALE,n=this.Constant_.INITIAL_SIZE):(i=this.Constant_.FINAL_SCALE,n=this.rippleSize_+"px",e&&(a="translate("+this.boundWidth/2+"px, "+this.boundHeight/2+"px)")),s="translate(-50%, -50%) "+a+i,this.rippleElement_.style.webkitTransform=s,this.rippleElement_.style.msTransform=s,this.rippleElement_.style.transform=s,t?this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING):this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING)}},this.animFrameHandler=function(){this.frameCount_-- >0?window.requestAnimationFrame(this.animFrameHandler.bind(this)):this.setRippleStyles(!1)})}},s.register({constructor:S,classAsString:"MaterialRipple",cssClass:"mdl-js-ripple-effect",widget:!1})}();
//# sourceMappingURL=material.min.js.map


/***/ })
/******/ ]);
});
//# sourceMappingURL=bundle.js.map