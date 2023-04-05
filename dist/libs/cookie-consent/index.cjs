'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var reactCookie = require('react-cookie');
var ReactDOM = require('react-dom');
var reactI18next = require('react-i18next');
var process$1 = require('process');
var react$1 = require('@headlessui/react');
var i18n = require('i18next');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n["default"] = e;
	return Object.freeze(n);
}

var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
var process__namespace = /*#__PURE__*/_interopNamespace(process$1);
var process__default = /*#__PURE__*/_interopDefaultLegacy(process$1);
var i18n__default = /*#__PURE__*/_interopDefaultLegacy(i18n);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$e =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$h = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$g = fails$h;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$g(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var fails$f = fails$h;

var functionBindNative = !fails$f(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$2 = functionBindNative;

var call$b = Function.prototype.call;

var functionCall = NATIVE_BIND$2 ? call$b.bind(call$b) : function () {
  return call$b.apply(call$b, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$3 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var NATIVE_BIND$1 = functionBindNative;

var FunctionPrototype$2 = Function.prototype;
var call$a = FunctionPrototype$2.call;
var uncurryThisWithBind = NATIVE_BIND$1 && FunctionPrototype$2.bind.bind(call$a, call$a);

var functionUncurryThis = NATIVE_BIND$1 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$a.apply(fn, arguments);
  };
};

var uncurryThis$g = functionUncurryThis;

var toString$7 = uncurryThis$g({}.toString);
var stringSlice$4 = uncurryThis$g(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice$4(toString$7(it), 8, -1);
};

var uncurryThis$f = functionUncurryThis;
var fails$e = fails$h;
var classof$4 = classofRaw$2;

var $Object$4 = Object;
var split = uncurryThis$f(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$e(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$4(it) == 'String' ? split(it, '') : $Object$4(it);
} : $Object$4;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$4 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$3 = isNullOrUndefined$4;

var $TypeError$8 = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$6 = function (it) {
  if (isNullOrUndefined$3(it)) throw $TypeError$8("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$1 = indexedObject;
var requireObjectCoercible$5 = requireObjectCoercible$6;

var toIndexedObject$5 = function (it) {
  return IndexedObject$1(requireObjectCoercible$5(it));
};

var documentAll$2 = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;

var documentAll_1 = {
  all: documentAll$2,
  IS_HTMLDDA: IS_HTMLDDA
};

var $documentAll$1 = documentAll_1;

var documentAll$1 = $documentAll$1.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$h = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var isCallable$g = isCallable$h;
var $documentAll = documentAll_1;

var documentAll = $documentAll.all;

var isObject$7 = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$g(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$g(it);
};

var global$d = global$e;
var isCallable$f = isCallable$h;

var aFunction = function (argument) {
  return isCallable$f(argument) ? argument : undefined;
};

var getBuiltIn$4 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$d[namespace]) : global$d[namespace] && global$d[namespace][method];
};

var uncurryThis$e = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$e({}.isPrototypeOf);

var getBuiltIn$3 = getBuiltIn$4;

var engineUserAgent = getBuiltIn$3('navigator', 'userAgent') || '';

var global$c = global$e;
var userAgent = engineUserAgent;

var process = global$c.process;
var Deno = global$c.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */

var V8_VERSION = engineV8Version;
var fails$d = fails$h;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$d(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/* eslint-disable es/no-symbol -- required for testing */

var NATIVE_SYMBOL$1 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$1
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var getBuiltIn$2 = getBuiltIn$4;
var isCallable$e = isCallable$h;
var isPrototypeOf = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$3 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$2('Symbol');
  return isCallable$e($Symbol) && isPrototypeOf($Symbol.prototype, $Object$3(it));
};

var $String$3 = String;

var tryToString$1 = function (argument) {
  try {
    return $String$3(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$d = isCallable$h;
var tryToString = tryToString$1;

var $TypeError$7 = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$1 = function (argument) {
  if (isCallable$d(argument)) return argument;
  throw $TypeError$7(tryToString(argument) + ' is not a function');
};

var aCallable = aCallable$1;
var isNullOrUndefined$2 = isNullOrUndefined$4;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$3 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$2(func) ? undefined : aCallable(func);
};

var call$9 = functionCall;
var isCallable$c = isCallable$h;
var isObject$6 = isObject$7;

var $TypeError$6 = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$c(fn = input.toString) && !isObject$6(val = call$9(fn, input))) return val;
  if (isCallable$c(fn = input.valueOf) && !isObject$6(val = call$9(fn, input))) return val;
  if (pref !== 'string' && isCallable$c(fn = input.toString) && !isObject$6(val = call$9(fn, input))) return val;
  throw $TypeError$6("Can't convert object to primitive value");
};

var shared$4 = {exports: {}};

var global$b = global$e;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$5 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$5(global$b, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$b[key] = value;
  } return value;
};

var global$a = global$e;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$a[SHARED] || defineGlobalProperty$2(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

(shared$4.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.27.1',
  mode: 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.27.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var requireObjectCoercible$4 = requireObjectCoercible$6;

var $Object$2 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$4 = function (argument) {
  return $Object$2(requireObjectCoercible$4(argument));
};

var uncurryThis$d = functionUncurryThis;
var toObject$3 = toObject$4;

var hasOwnProperty = uncurryThis$d({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$3(it), key);
};

var uncurryThis$c = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$6 = uncurryThis$c(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$6(++id + postfix, 36);
};

var global$9 = global$e;
var shared$3 = shared$4.exports;
var hasOwn$8 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var WellKnownSymbolsStore = shared$3('wks');
var Symbol$1 = global$9.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$c = function (name) {
  if (!hasOwn$8(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn$8(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};

var call$8 = functionCall;
var isObject$5 = isObject$7;
var isSymbol$1 = isSymbol$2;
var getMethod$2 = getMethod$3;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$b = wellKnownSymbol$c;

var $TypeError$5 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$b('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$5(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$8(exoticToPrim, input, pref);
    if (!isObject$5(result) || isSymbol$1(result)) return result;
    throw $TypeError$5("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$2 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var global$8 = global$e;
var isObject$4 = isObject$7;

var document$1 = global$8.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$4(document$1) && isObject$4(document$1.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$9 = descriptors;
var fails$c = fails$h;
var createElement = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$9 && !fails$c(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$8 = descriptors;
var call$7 = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;
var toIndexedObject$4 = toIndexedObject$5;
var toPropertyKey$1 = toPropertyKey$2;
var hasOwn$7 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$8 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$4(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$7(O, P)) return createPropertyDescriptor$2(!call$7(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$7 = descriptors;
var fails$b = fails$h;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$7 && fails$b(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var isObject$3 = isObject$7;

var $String$2 = String;
var $TypeError$4 = TypeError;

// `Assert: Type(argument) is Object`
var anObject$9 = function (argument) {
  if (isObject$3(argument)) return argument;
  throw $TypeError$4($String$2(argument) + ' is not an object');
};

var DESCRIPTORS$6 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$8 = anObject$9;
var toPropertyKey = toPropertyKey$2;

var $TypeError$3 = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$6 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$8(O);
  P = toPropertyKey(P);
  anObject$8(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$8(O);
  P = toPropertyKey(P);
  anObject$8(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$3('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$5 = descriptors;
var definePropertyModule$3 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;

var createNonEnumerableProperty$5 = DESCRIPTORS$5 ? function (object, key, value) {
  return definePropertyModule$3.f(object, key, createPropertyDescriptor$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var makeBuiltIn$2 = {exports: {}};

var DESCRIPTORS$4 = descriptors;
var hasOwn$6 = hasOwnProperty_1;

var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$4 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$6(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$4 || (DESCRIPTORS$4 && getDescriptor(FunctionPrototype$1, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$b = functionUncurryThis;
var isCallable$b = isCallable$h;
var store$1 = sharedStore;

var functionToString = uncurryThis$b(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$b(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$1 = store$1.inspectSource;

var global$7 = global$e;
var isCallable$a = isCallable$h;

var WeakMap$1 = global$7.WeakMap;

var weakMapBasicDetection = isCallable$a(WeakMap$1) && /native code/.test(String(WeakMap$1));

var shared$2 = shared$4.exports;
var uid = uid$2;

var keys = shared$2('keys');

var sharedKey$3 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$6 = global$e;
var isObject$2 = isObject$7;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$5;
var hasOwn$5 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$3 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$1 = global$6.TypeError;
var WeakMap = global$6.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$2(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared$1.state) {
  var store = shared$1.state || (shared$1.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey$2('state');
  hiddenKeys$3[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn$5(it, STATE)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$4(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$5(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$5(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var fails$a = fails$h;
var isCallable$9 = isCallable$h;
var hasOwn$4 = hasOwnProperty_1;
var DESCRIPTORS$3 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource = inspectSource$1;
var InternalStateModule$1 = internalState;

var enforceInternalState = InternalStateModule$1.enforce;
var getInternalState$2 = InternalStateModule$1.get;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$4 = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS$3 && !fails$a(function () {
  return defineProperty$4(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$4(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
    if (DESCRIPTORS$3) defineProperty$4(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$4(options, 'arity') && value.length !== options.arity) {
    defineProperty$4(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$4(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$3) defineProperty$4(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn$4(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$1(function toString() {
  return isCallable$9(this) && getInternalState$2(this).source || inspectSource(this);
}, 'toString');

var isCallable$8 = isCallable$h;
var definePropertyModule$2 = objectDefineProperty;
var makeBuiltIn = makeBuiltIn$2.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$4 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$8(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule$2.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor$1 = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$1 : ceil)(n);
};

var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$4 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;

var max$1 = Math.max;
var min$2 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$1 = function (index, length) {
  var integer = toIntegerOrInfinity$3(index);
  return integer < 0 ? max$1(integer + length, 0) : min$2(integer, length);
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

var min$1 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$3 = function (argument) {
  return argument > 0 ? min$1(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$2 = toLength$3;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$1 = function (obj) {
  return toLength$2(obj.length);
};

var toIndexedObject$3 = toIndexedObject$5;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike = lengthOfArrayLike$1;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$1 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$3($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$1(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$1(false)
};

var uncurryThis$a = functionUncurryThis;
var hasOwn$3 = hasOwnProperty_1;
var toIndexedObject$2 = toIndexedObject$5;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;

var push$1 = uncurryThis$a([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$2(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$3(hiddenKeys$2, key) && hasOwn$3(O, key) && push$1(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$3(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$1(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$3 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;

var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$1);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$1 = getBuiltIn$4;
var uncurryThis$9 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$7 = anObject$9;

var concat$2 = uncurryThis$9([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$1('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$7(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$2 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$1 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$1.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$2(target, key) && !(exceptions && hasOwn$2(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$9 = fails$h;
var isCallable$7 = isCallable$h;

var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$7(detection) ? fails$9(detection)
    : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';

var isForced_1 = isForced$1;

var global$5 = global$e;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$5;
var defineBuiltIn$3 = defineBuiltIn$4;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$5;
  } else if (STATIC) {
    target = global$5[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$5[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$3(sourceProperty, 'sham', true);
    }
    defineBuiltIn$3(target, key, sourceProperty, options);
  }
};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS$2 = descriptors;
var uncurryThis$8 = functionUncurryThis;
var call$6 = functionCall;
var fails$8 = fails$h;
var objectKeys$1 = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$2 = toObject$4;
var IndexedObject = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$3 = Object.defineProperty;
var concat$1 = uncurryThis$8([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$8(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$2 && $assign({ b: 1 }, $assign(defineProperty$3({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$3(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys$1($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject$2(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat$1(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$2 || call$6(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var $$4 = _export;
var assign = objectAssign;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$$4({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});

var objectDefineProperties = {};

var DESCRIPTORS$1 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule = objectDefineProperty;
var anObject$6 = anObject$9;
var toIndexedObject$1 = toIndexedObject$5;
var objectKeys = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$1 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$6(O);
  var props = toIndexedObject$1(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn = getBuiltIn$4;

var html$1 = getBuiltIn('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */

var anObject$5 = anObject$9;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html = html$1;
var documentCreateElement$1 = documentCreateElement$2;
var sharedKey$1 = sharedKey$3;

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey$1('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement$1('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$5(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol$a = wellKnownSymbol$c;
var create$2 = objectCreate;
var defineProperty$2 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$a('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty$2(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create$2(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$2 = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var iterators = {};

var fails$7 = fails$h;

var correctPrototypeGetter = !fails$7(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$1 = hasOwnProperty_1;
var isCallable$6 = isCallable$h;
var toObject$1 = toObject$4;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object$1 = Object;
var ObjectPrototype = $Object$1.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object$1.getPrototypeOf : function (O) {
  var object = toObject$1(O);
  if (hasOwn$1(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$6(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object$1 ? ObjectPrototype : null;
};

var fails$6 = fails$h;
var isCallable$5 = isCallable$h;
var isObject$1 = isObject$7;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$2 = defineBuiltIn$4;
var wellKnownSymbol$9 = wellKnownSymbol$c;

var ITERATOR$2 = wellKnownSymbol$9('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject$1(IteratorPrototype$2) || fails$6(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$2].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$5(IteratorPrototype$2[ITERATOR$2])) {
  defineBuiltIn$2(IteratorPrototype$2, ITERATOR$2, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$1 = objectDefineProperty.f;
var hasOwn = hasOwnProperty_1;
var wellKnownSymbol$8 = wellKnownSymbol$c;

var TO_STRING_TAG$3 = wellKnownSymbol$8('toStringTag');

var setToStringTag$2 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG$3)) {
    defineProperty$1(target, TO_STRING_TAG$3, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$1 = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$3;
var setToStringTag$1 = setToStringTag$2;
var Iterators$2 = iterators;

var returnThis$1 = function () { return this; };

var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$1(IteratorPrototype$1, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag$1(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$2[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var isCallable$4 = isCallable$h;

var $String$1 = String;
var $TypeError$2 = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$4(argument)) return argument;
  throw $TypeError$2("Can't set " + $String$1(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */

var uncurryThis$7 = functionUncurryThis;
var anObject$4 = anObject$9;
var aPossiblePrototype = aPossiblePrototype$1;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis$7(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject$4(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$3 = _export;
var call$5 = functionCall;
var FunctionName = functionName;
var isCallable$3 = isCallable$h;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag = setToStringTag$2;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$5;
var defineBuiltIn$1 = defineBuiltIn$4;
var wellKnownSymbol$7 = wellKnownSymbol$c;
var Iterators$1 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$1 = wellKnownSymbol$7('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$1]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$3(CurrentIteratorPrototype[ITERATOR$1])) {
          defineBuiltIn$1(CurrentIteratorPrototype, ITERATOR$1, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$2(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$5(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn$1(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$3({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$1] !== defaultIterator) {
    defineBuiltIn$1(IterablePrototype, ITERATOR$1, defaultIterator, { name: DEFAULT });
  }
  Iterators$1[NAME] = defaultIterator;

  return methods;
};

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
var createIterResultObject$1 = function (value, done) {
  return { value: value, done: done };
};

var toIndexedObject = toIndexedObject$5;
var addToUnscopables$1 = addToUnscopables$2;
var Iterators = iterators;
var InternalStateModule = internalState;
var defineProperty = objectDefineProperty.f;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$1;
var DESCRIPTORS = descriptors;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState$1 = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$1(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject(undefined, true);
  }
  if (kind == 'keys') return createIterResultObject(index, false);
  if (kind == 'values') return createIterResultObject(target[index], false);
  return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$1('keys');
addToUnscopables$1('values');
addToUnscopables$1('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = documentCreateElement$2;

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;

var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;

var global$4 = global$e;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$5;
var wellKnownSymbol$6 = wellKnownSymbol$c;

var ITERATOR = wellKnownSymbol$6('iterator');
var TO_STRING_TAG$2 = wellKnownSymbol$6('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty$1(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG$2]) {
      createNonEnumerableProperty$1(CollectionPrototype, TO_STRING_TAG$2, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty$1(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global$4[COLLECTION_NAME] && global$4[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

var wellKnownSymbol$5 = wellKnownSymbol$c;

var TO_STRING_TAG$1 = wellKnownSymbol$5('toStringTag');
var test = {};

test[TO_STRING_TAG$1] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$2 = isCallable$h;
var classofRaw$1 = classofRaw$2;
var wellKnownSymbol$4 = wellKnownSymbol$c;

var TO_STRING_TAG = wellKnownSymbol$4('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw$1(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$3 = TO_STRING_TAG_SUPPORT ? classofRaw$1 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw$1(O)
    // ES3 arguments fallback
    : (result = classofRaw$1(O)) == 'Object' && isCallable$2(O.callee) ? 'Arguments' : result;
};

var classof$2 = classof$3;

var $String = String;

var toString$5 = function (argument) {
  if (classof$2(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};

var anObject$3 = anObject$9;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$3(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};

var fails$5 = fails$h;
var global$3 = global$e;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$3.RegExp;

var UNSUPPORTED_Y$1 = fails$5(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y$1 || fails$5(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$1 || fails$5(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

var regexpStickyHelpers = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y$1
};

var fails$4 = fails$h;
var global$2 = global$e;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$2.RegExp;

var regexpUnsupportedDotAll = fails$4(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$3 = fails$h;
var global$1 = global$e;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$1.RegExp;

var regexpUnsupportedNcg = fails$3(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$4 = functionCall;
var uncurryThis$6 = functionUncurryThis;
var toString$4 = toString$5;
var regexpFlags = regexpFlags$1;
var stickyHelpers = regexpStickyHelpers;
var shared = shared$4.exports;
var create = objectCreate;
var getInternalState = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$3 = uncurryThis$6(''.charAt);
var indexOf = uncurryThis$6(''.indexOf);
var replace$1 = uncurryThis$6(''.replace);
var stringSlice$3 = uncurryThis$6(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$4(nativeExec, re1, 'a');
  call$4(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString$4(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$4(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call$4(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$1(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$3(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$3(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call$4(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$3(match.input, charsAdded);
        match[0] = stringSlice$3(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call$4(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$2 = patchedExec;

var $$2 = _export;
var exec = regexpExec$2;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$2({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});

var classofRaw = classofRaw$2;
var uncurryThis$5 = functionUncurryThis;

var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis$5(fn);
};

// TODO: Remove from `core-js@4` since it's moved to entry points

var uncurryThis$4 = functionUncurryThisClause;
var defineBuiltIn = defineBuiltIn$4;
var regexpExec$1 = regexpExec$2;
var fails$2 = fails$h;
var wellKnownSymbol$3 = wellKnownSymbol$c;
var createNonEnumerableProperty = createNonEnumerableProperty$5;

var SPECIES = wellKnownSymbol$3('species');
var RegExpPrototype = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$3(KEY);

  var DELEGATES_TO_SYMBOL = !fails$2(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$2(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis$4(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$4(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec$1 || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};

var uncurryThis$3 = functionUncurryThis;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
var toString$3 = toString$5;
var requireObjectCoercible$3 = requireObjectCoercible$6;

var charAt$2 = uncurryThis$3(''.charAt);
var charCodeAt = uncurryThis$3(''.charCodeAt);
var stringSlice$2 = uncurryThis$3(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$3(requireObjectCoercible$3($this));
    var position = toIntegerOrInfinity$1(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt$2(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice$2(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

var charAt$1 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$2 = function (S, index, unicode) {
  return index + (unicode ? charAt$1(S, index).length : 1);
};

var call$3 = functionCall;
var anObject$2 = anObject$9;
var isCallable$1 = isCallable$h;
var classof$1 = classofRaw$2;
var regexpExec = regexpExec$2;

var $TypeError$1 = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$1(exec)) {
    var result = call$3(exec, R, S);
    if (result !== null) anObject$2(result);
    return result;
  }
  if (classof$1(R) === 'RegExp') return call$3(regexpExec, R, S);
  throw $TypeError$1('RegExp#exec called on incompatible receiver');
};

var call$2 = functionCall;
var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
var anObject$1 = anObject$9;
var isNullOrUndefined$1 = isNullOrUndefined$4;
var toLength$1 = toLength$3;
var toString$2 = toString$5;
var requireObjectCoercible$2 = requireObjectCoercible$6;
var getMethod$1 = getMethod$3;
var advanceStringIndex$1 = advanceStringIndex$2;
var regExpExec$1 = regexpExecAbstract;

// @@match logic
fixRegExpWellKnownSymbolLogic$1('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$2(this);
      var matcher = isNullOrUndefined$1(regexp) ? undefined : getMethod$1(regexp, MATCH);
      return matcher ? call$2(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$2(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject$1(this);
      var S = toString$2(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec$1(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec$1(rx, S)) !== null) {
        var matchStr = toString$2(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$1(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const getCookieDomain = () => {
  var _a;
  const hostname = window.location.hostname;
  return (_a = hostname === null || hostname === void 0 ? void 0 : hostname.match(/^(?:.*?\.)?([a-zA-Z0-9\-_]{3,}\.(?:\w{2,8}|\w{2,4}\.\w{2,4}))$/)) === null || _a === void 0 ? void 0 : _a[1];
};

const useCookieStorage = props => {
  var _a, _b, _c, _d, _e, _f;
  const {
    usedCookiesType
  } = props;
  const [cookies, setCookie] = reactCookie.useCookies(['GCCookieConsent']);
  const [storage, setStorage] = react.useState({
    adStorage: ((_b = (_a = cookies === null || cookies === void 0 ? void 0 : cookies.GCCookieConsent) === null || _a === void 0 ? void 0 : _a.storage) === null || _b === void 0 ? void 0 : _b.adStorage) || 'denied',
    analyticsStorage: ((_d = (_c = cookies === null || cookies === void 0 ? void 0 : cookies.GCCookieConsent) === null || _c === void 0 ? void 0 : _c.storage) === null || _d === void 0 ? void 0 : _d.analyticsStorage) || 'denied',
    personalizationStorage: ((_f = (_e = cookies === null || cookies === void 0 ? void 0 : cookies.GCCookieConsent) === null || _e === void 0 ? void 0 : _e.storage) === null || _f === void 0 ? void 0 : _f.personalizationStorage) || 'denied',
    functionalityStorage: 'granted',
    securityStorage: 'granted'
  });
  const [cookiesList, setCookiesList] = react.useState([]);
  const [allowAllStorage, setAllowAllStorage] = react.useState({});
  const {
    t
  } = reactI18next.useTranslation();
  const getWantedConsent = react.useCallback(() => {
    const tmpCookieList = [];
    const tmpAllowAllStorage = {
      adStorage: 'denied',
      analyticsStorage: 'denied',
      personalizationStorage: 'denied',
      functionalityStorage: 'denied',
      securityStorage: 'denied'
    };
    usedCookiesType === null || usedCookiesType === void 0 ? void 0 : usedCookiesType.map(cookie => {
      switch (cookie) {
        case 'ad':
          {
            tmpCookieList.push({
              label: t('adCookies.label'),
              name: 'adStorage',
              text: t('adCookies.text')
            });
            tmpAllowAllStorage.adStorage = 'granted';
            break;
          }
        case 'analytics':
          {
            tmpCookieList.push({
              label: t('analyticsCookies.label'),
              name: 'analyticsStorage',
              text: t('analyticsCookies.text')
            });
            tmpAllowAllStorage.analyticsStorage = 'granted';
            break;
          }
        case 'personalization':
          {
            tmpCookieList.push({
              label: t('personalizationCookies.label'),
              name: 'personalizationStorage',
              text: t('personalizationCookies.text')
            });
            tmpAllowAllStorage.personalizationStorage = 'granted';
            break;
          }
      }
      return null;
    });
    tmpAllowAllStorage.securityStorage = 'granted';
    tmpAllowAllStorage.functionalityStorage = 'granted';
    setCookiesList(tmpCookieList);
    setAllowAllStorage(tmpAllowAllStorage);
  }, [t, usedCookiesType]);
  const handleSubmit = () => {
    const cookie = {
      accepted: true,
      storage
    };
    setCookieHandler(cookie);
  };
  const isGranted = cookie => {
    return (storage === null || storage === void 0 ? void 0 : storage[cookie]) === 'granted';
  };
  const handleClick = value => {
    const tmpStorage = Object.assign({}, storage);
    tmpStorage[value.name] = value.checked ? 'granted' : 'denied';
    setStorage(tmpStorage);
  };
  const allowAllHandler = () => {
    const cookie = {
      accepted: true,
      storage: allowAllStorage
    };
    setCookieHandler(cookie);
  };
  const allowNecessaryHandler = () => {
    const cookie = {
      accepted: true,
      storage: {
        adStorage: 'denied',
        analyticsStorage: 'denied',
        personalizationStorage: 'denied',
        functionalityStorage: 'granted',
        securityStorage: 'granted'
      }
    };
    setCookieHandler(cookie);
  };
  const setCookieHandler = cookie => {
    setCookie('GCCookieConsent', cookie, {
      path: '/',
      sameSite: 'strict',
      expires: getExpirationDate(),
      domain: getCookieDomain(),
      secure: process__namespace.env['NODE_ENV'] === 'production'
    });
    // It is needed to reload the page to remove previously fired tags
    setTimeout(() => {
      return window.location.reload();
    }, 50);
  };
  const getExpirationDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 30);
    return date;
  };
  react.useEffect(() => {
    getWantedConsent();
  }, [getWantedConsent]);
  return {
    handleSubmit,
    isGranted,
    handleClick,
    cookiesList,
    allowAllHandler,
    allowNecessaryHandler
  };
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const Button = props => {
  const {
      className
    } = props,
    rest = __rest(props, ["className"]);
  return jsxRuntime.jsx("button", Object.assign({}, rest, {
    type: "button",
    className: classNames('gc-cc-inline-flex gc-cc-items-center gc-cc-justify-center gc-cc-rounded-xl gc-cc-border-2 gc-cc-py-4 gc-cc-px-8 gc-cc-text-base gc-cc-font-semibold gc-cc-leading-6 gc-cc-transition gc-cc-duration-300 focus:gc-cc-outline-none focus:gc-cc-ring-2 focus:gc-cc-ring-offset-2', className)
  }));
};

const InfoPanel = props => {
  const {
    setSettingsModal,
    link,
    usedCookiesType
  } = props;
  const {
    allowAllHandler,
    allowNecessaryHandler
  } = useCookieStorage({
    usedCookiesType
  });
  const {
    t
  } = reactI18next.useTranslation();
  const advancedSettingsHandler = () => {
    setSettingsModal(true);
  };
  return jsxRuntime.jsxs("div", Object.assign({
    className: "gc-cc-flex gc-cc-flex-col gc-cc-gap-8 md:gc-cc-flex-row md:gc-cc-gap-16"
  }, {
    children: [jsxRuntime.jsx("div", Object.assign({
      className: "gc-cc-flex gc-cc-flex-col gc-cc-gap-4 md:gc-cc-gap-12"
    }, {
      children: jsxRuntime.jsxs("div", Object.assign({
        className: "gc-cc-space-y-4"
      }, {
        children: [jsxRuntime.jsx("span", Object.assign({
          className: "gc-cc-block gc-cc-text-2xl gc-cc-font-extrabold gc-cc-leading-8 gc-cc-text-info-panel-title"
        }, {
          children: t('infoPanel.title')
        })), jsxRuntime.jsx("div", {
          children: jsxRuntime.jsxs("p", Object.assign({
            className: "gc-cc-text-base gc-cc-font-normal gc-cc-leading-6 gc-cc-text-info-panel-text"
          }, {
            children: [t('infoPanel.text'), ' ', link && jsxRuntime.jsx("a", Object.assign({
              href: link,
              target: "_blank",
              rel: "noreferrer",
              className: "gc-cc-text-base gc-cc-text-info-panel-link gc-cc-underline"
            }, {
              children: t('settingsPanel.link')
            }))]
          }))
        })]
      }))
    })), jsxRuntime.jsxs("div", Object.assign({
      className: "gc-cc-flex gc-cc-flex-shrink-0 gc-cc-flex-col gc-cc-gap-2 md:gc-cc-items-center"
    }, {
      children: [jsxRuntime.jsx(Button, Object.assign({
        className: "gc-cc-w-full gc-cc-border-info-panel-primary-button-border gc-cc-bg-info-panel-primary-button-bg gc-cc-text-info-panel-primary-button-text gc-cc-shadow-info-panel-primary-button gc-cc-ring-offset-info-panel-bg hover:gc-cc-border-info-panel-primary-button-border-hover hover:gc-cc-bg-info-panel-primary-button-bg-hover hover:gc-cc-text-info-panel-primary-button-text-hover hover:gc-cc-shadow-info-panel-primary-button-hover focus:gc-cc-ring-info-panel-primary-button-ring",
        type: "button",
        onClick: allowAllHandler
      }, {
        children: t('infoPanel.acceptAll')
      })), jsxRuntime.jsx(Button, Object.assign({
        className: "gc-cc-w-full gc-cc-border-info-panel-secondary-button-border gc-cc-bg-info-panel-secondary-button-bg gc-cc-text-info-panel-secondary-button-text gc-cc-shadow-info-panel-secondary-button gc-cc-ring-offset-info-panel-bg hover:gc-cc-border-info-panel-secondary-button-border-hover hover:gc-cc-bg-info-panel-secondary-button-bg-hover hover:gc-cc-text-info-panel-secondary-button-text-hover hover:gc-cc-shadow-info-panel-secondary-button-hover focus:gc-cc-ring-info-panel-secondary-button-ring",
        type: "button",
        onClick: allowNecessaryHandler
      }, {
        children: t('infoPanel.onlyNecessary')
      })), jsxRuntime.jsx(Button, Object.assign({
        className: "gc-cc-w-full gc-cc-border-info-panel-secondary-button-border gc-cc-bg-info-panel-secondary-button-bg gc-cc-text-info-panel-secondary-button-text gc-cc-shadow-info-panel-secondary-button gc-cc-ring-offset-info-panel-bg hover:gc-cc-border-info-panel-secondary-button-border-hover hover:gc-cc-bg-info-panel-secondary-button-bg-hover hover:gc-cc-text-info-panel-secondary-button-text-hover hover:gc-cc-shadow-info-panel-secondary-button-hover focus:gc-cc-ring-info-panel-secondary-button-ring",
        type: "button",
        onClick: advancedSettingsHandler
      }, {
        children: t('infoPanel.manageCookies')
      }))]
    }))]
  }));
};

function Modal(props) {
  const {
    onClose,
    show,
    children
  } = props;
  return jsxRuntime.jsx(react$1.Transition.Root, Object.assign({
    show: show,
    as: react.Fragment
  }, {
    children: jsxRuntime.jsxs(react$1.Dialog, Object.assign({
      as: "div",
      className: "gc-cc-relative gc-cc-z-max",
      onClose: onClose
    }, {
      children: [jsxRuntime.jsx(react$1.Transition.Child, Object.assign({
        as: react.Fragment,
        enter: "gc-cc-ease-out gc-cc-duration-300",
        enterFrom: "gc-cc-opacity-0",
        enterTo: "gc-cc-opacity-100",
        leave: "gc-cc-ease-in gc-cc-duration-200",
        leaveFrom: "gc-cc-opacity-100",
        leaveTo: "gc-cc-opacity-0"
      }, {
        children: jsxRuntime.jsx("div", {
          className: "gc-cc-fixed gc-cc-inset-0 gc-cc-bg-gray-500 gc-cc-bg-opacity-75 gc-cc-transition-opacity"
        })
      })), jsxRuntime.jsx("div", Object.assign({
        className: "gc-cc-fixed gc-cc-inset-0 gc-cc-z-max gc-cc-overflow-hidden"
      }, {
        children: jsxRuntime.jsx("div", Object.assign({
          className: "gc-cc-flex gc-cc-h-full gc-cc-items-end gc-cc-pt-16 md:gc-cc-items-center md:gc-cc-p-10"
        }, {
          children: jsxRuntime.jsx(react$1.Transition.Child, Object.assign({
            as: react.Fragment,
            enter: "gc-cc-ease-out gc-cc-duration-300",
            enterFrom: "gc-cc-opacity-0 gc-cc-translate-y-4 sm:gc-cc-translate-y-0 sm:gc-cc-scale-95",
            enterTo: "gc-cc-opacity-100 gc-cc-translate-y-0 sm:gc-cc-scale-100",
            leave: "gc-cc-ease-in gc-cc-duration-200",
            leaveFrom: "gc-cc-opacity-100 gc-cc-translate-y-0 sm:gc-cc-scale-100",
            leaveTo: "gc-cc-opacity-0 gc-cc-translate-y-4 sm:gc-cc-translate-y-0 sm:gc-cc-scale-95"
          }, {
            children: jsxRuntime.jsx(react$1.Dialog.Panel, Object.assign({
              as: react.Fragment
            }, {
              children: children
            }))
          }))
        }))
      }))]
    }))
  }));
}

function Switch(props) {
  const {
    label,
    checked,
    text,
    onChange,
    disabled,
    className
  } = props;
  return jsxRuntime.jsxs(react$1.Switch.Group, Object.assign({
    as: "div",
    className: classNames('gc-cc-flex gc-cc-flex-col gc-cc-gap-4', className)
  }, {
    children: [jsxRuntime.jsxs("div", Object.assign({
      className: "gc-cc-flex gc-cc-gap-4"
    }, {
      children: [jsxRuntime.jsx(react$1.Switch, Object.assign({
        checked: checked,
        onChange: onChange,
        className: classNames(checked ? 'gc-cc-bg-checkbox-selected' : 'gc-cc-bg-checkbox', 'disabled:gc-cc-cursor-not-allowed disabled:gc-cc-bg-checkbox-disabled', 'gc-cc-relative gc-cc-inline-flex gc-cc-h-6 gc-cc-w-11 gc-cc-flex-shrink-0 gc-cc-cursor-pointer gc-cc-rounded-full gc-cc-border-2 gc-cc-border-transparent gc-cc-transition-colors gc-cc-duration-200 gc-cc-ease-in-out focus:gc-cc-outline-none focus:gc-cc-ring-2 focus:gc-cc-ring-checkbox-ring focus:gc-cc-ring-offset-2'),
        disabled: disabled
      }, {
        children: jsxRuntime.jsx("span", {
          "aria-hidden": "true",
          className: classNames(checked ? 'gc-cc-translate-x-5' : 'gc-cc-translate-x-0', 'gc-cc-pointer-events-none gc-cc-inline-block gc-cc-h-5 gc-cc-w-5 gc-cc-transform gc-cc-rounded-full gc-cc-bg-white gc-cc-shadow gc-cc-ring-0 gc-cc-transition gc-cc-duration-200 gc-cc-ease-in-out')
        })
      })), jsxRuntime.jsx(react$1.Switch.Label, Object.assign({
        as: "span",
        className: "gc-cc-text-base gc-cc-font-extrabold gc-cc-leading-6 gc-cc-text-settings-panel-text",
        passive: true
      }, {
        children: label
      }))]
    })), jsxRuntime.jsx(react$1.Switch.Description, Object.assign({
      as: "span",
      className: "gc-cc-text-base gc-cc-font-normal gc-cc-leading-6 gc-cc-text-settings-panel-text"
    }, {
      children: text
    }))]
  }));
}

const SettingsModal = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    link,
    usedCookiesType,
    onClose,
    show
  } = props;
  const {
    t
  } = reactI18next.useTranslation();
  const {
    handleSubmit,
    isGranted,
    handleClick,
    cookiesList
  } = useCookieStorage({
    usedCookiesType
  });
  return jsxRuntime.jsx(Modal, Object.assign({
    show: show,
    onClose: onClose
  }, {
    children: jsxRuntime.jsxs("div", Object.assign({
      ref: ref,
      className: "gc-cc-mx-auto gc-cc-flex gc-cc-max-h-full gc-cc-w-full gc-cc-flex-col gc-cc-rounded-t-2xl gc-cc-bg-settings-panel-bg gc-cc-text-settings-panel-text md:gc-cc-max-w-4xl md:gc-cc-divide-y md:gc-cc-divide-gray-200 md:gc-cc-rounded-2xl"
    }, {
      children: [jsxRuntime.jsxs("div", Object.assign({
        className: "gc-cc-flex-1 gc-cc-divide-y gc-cc-divide-gray-200 gc-cc-overflow-y-auto gc-cc-py-4 gc-cc-px-4 md:gc-cc-px-16 md:gc-cc-pt-16 md:gc-cc-pb-0"
      }, {
        children: [jsxRuntime.jsxs("div", Object.assign({
          className: "gc-cc-space-y-4 gc-cc-pb-8"
        }, {
          children: [jsxRuntime.jsx("span", Object.assign({
            className: "gc-cc-text-2xl gc-cc-font-extrabold gc-cc-leading-8 gc-cc-text-settings-panel-title"
          }, {
            children: t('settingsPanel.title')
          })), jsxRuntime.jsxs("p", Object.assign({
            className: "gc-cc-text-base gc-cc-font-normal gc-cc-leading-6 gc-cc-text-settings-panel-text"
          }, {
            children: [t('settingsPanel.text'), ' ', link && jsxRuntime.jsx("a", Object.assign({
              href: link,
              target: "_blank",
              rel: "noreferrer",
              className: "gc-cc-text-base gc-cc-font-normal gc-cc-leading-6 gc-cc-text-settings-panel-link gc-cc-underline gc-cc-underline-offset-2"
            }, {
              children: t('settingsPanel.link')
            }))]
          }))]
        })), cookiesList.map(cookie => jsxRuntime.jsx(Switch, {
          checked: isGranted(cookie.name),
          label: cookie.label,
          text: cookie.text,
          className: "gc-cc-py-8",
          onChange: () => handleClick({
            name: cookie.name,
            checked: !isGranted(cookie.name)
          })
        }, cookie.name)), jsxRuntime.jsx(Switch, {
          label: t('necessaryCookies.label'),
          text: t('necessaryCookies.text'),
          className: "gc-cc-py-8",
          checked: true,
          disabled: true
        })]
      })), jsxRuntime.jsxs("div", Object.assign({
        className: "gc-cc-flex gc-cc-gap-8 gc-cc-p-4 md:gc-cc-mx-16 md:gc-cc-px-0 md:gc-cc-pt-8 md:gc-cc-pb-16"
      }, {
        children: [jsxRuntime.jsx(Button, Object.assign({
          className: "gc-cc-w-full gc-cc-border-settings-panel-secondary-button-border gc-cc-bg-settings-panel-secondary-button-bg gc-cc-text-settings-panel-secondary-button-text gc-cc-shadow-settings-panel-secondary-button gc-cc-ring-offset-settings-panel-bg hover:gc-cc-border-settings-panel-secondary-button-border-hover hover:gc-cc-bg-settings-panel-secondary-button-bg-hover hover:gc-cc-text-settings-panel-secondary-button-text-hover hover:gc-cc-shadow-settings-panel-secondary-button-hover focus:gc-cc-ring-settings-panel-secondary-button-ring",
          type: "button",
          onClick: onClose
        }, {
          children: t('settingsPanel.back')
        })), jsxRuntime.jsx(Button, Object.assign({
          className: "gc-cc-w-full gc-cc-border-settings-panel-primary-button-border gc-cc-bg-settings-panel-primary-button-bg gc-cc-text-settings-panel-primary-button-text gc-cc-shadow-settings-panel-primary-button gc-cc-ring-offset-settings-panel-bg hover:gc-cc-border-settings-panel-primary-button-border-hover hover:gc-cc-bg-settings-panel-primary-button-bg-hover hover:gc-cc-text-settings-panel-primary-button-text-hover hover:gc-cc-shadow-settings-panel-primary-button-hover focus:gc-cc-ring-settings-panel-primary-button-ring",
          type: "submit",
          onClick: handleSubmit
        }, {
          children: t('settingsPanel.acceptSelected')
        }))]
      }))]
    }))
  }));
});

const ConsentWrapper = props => {
  const {
    usedCookiesType,
    link
  } = props;
  const [settingsModalOpen, setSettingsModalOpen] = react.useState(false);
  function onCloseHandler() {
    setSettingsModalOpen(false);
  }
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsx("div", Object.assign({
      className: classNames('gc-cc-fixed gc-cc-z-max gc-cc-mx-auto gc-cc-max-h-screen gc-cc-max-w-content gc-cc-overflow-y-auto gc-cc-rounded-t-2xl gc-cc-shadow-2xl', 'gc-cc-inset-x-0 gc-cc-bottom-0 gc-cc-bg-info-panel-bg gc-cc-p-4 md:gc-cc-p-16')
    }, {
      children: jsxRuntime.jsx(InfoPanel, {
        setSettingsModal: setSettingsModalOpen,
        usedCookiesType: usedCookiesType,
        link: link
      })
    })), jsxRuntime.jsx(SettingsModal, {
      show: settingsModalOpen,
      onClose: onCloseHandler,
      usedCookiesType: usedCookiesType,
      link: link
    })]
  });
};

var $$1 = _export;
var $includes = arrayIncludes.includes;
var fails$1 = fails$h;
var addToUnscopables = addToUnscopables$2;

// FF99+ bug
var BROKEN_ON_SPARSE = fails$1(function () {
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$$1({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

var isObject = isObject$7;
var classof = classofRaw$2;
var wellKnownSymbol$2 = wellKnownSymbol$c;

var MATCH$1 = wellKnownSymbol$2('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};

var isRegExp = isRegexp;

var $TypeError = TypeError;

var notARegexp = function (it) {
  if (isRegExp(it)) {
    throw $TypeError("The method doesn't accept regular expressions");
  } return it;
};

var wellKnownSymbol$1 = wellKnownSymbol$c;

var MATCH = wellKnownSymbol$1('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};

var $ = _export;
var uncurryThis$2 = functionUncurryThis;
var notARegExp = notARegexp;
var requireObjectCoercible$1 = requireObjectCoercible$6;
var toString$1 = toString$5;
var correctIsRegExpLogic = correctIsRegexpLogic;

var stringIndexOf$1 = uncurryThis$2(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf$1(
      toString$1(requireObjectCoercible$1(this)),
      toString$1(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});

var NATIVE_BIND = functionBindNative;

var FunctionPrototype = Function.prototype;
var apply$1 = FunctionPrototype.apply;
var call$1 = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call$1.bind(apply$1) : function () {
  return call$1.apply(apply$1, arguments);
});

var uncurryThis$1 = functionUncurryThis;
var toObject = toObject$4;

var floor = Math.floor;
var charAt = uncurryThis$1(''.charAt);
var replace = uncurryThis$1(''.replace);
var stringSlice$1 = uncurryThis$1(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice$1(str, 0, position);
      case "'": return stringSlice$1(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice$1(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

var apply = functionApply;
var call = functionCall;
var uncurryThis = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var fails = fails$h;
var anObject = anObject$9;
var isCallable = isCallable$h;
var isNullOrUndefined = isNullOrUndefined$4;
var toIntegerOrInfinity = toIntegerOrInfinity$4;
var toLength = toLength$3;
var toString = toString$5;
var requireObjectCoercible = requireObjectCoercible$6;
var advanceStringIndex = advanceStringIndex$2;
var getMethod = getMethod$3;
var getSubstitution = getSubstitution$1;
var regExpExec = regexpExecAbstract;
var wellKnownSymbol = wellKnownSymbol$c;

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

const ANALYTICS_COOKIES = ['_ga', '_gid', '_ga_*', '_gat_*'];
const AD_COOKIES = ['_gcl_au'];
const ANALYTICS_AND_AD_COOKIES = ['_fbp'];
const PERSONALIZATION_COOKIES = ['i18n'];

function gtag() {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  }
}
function pageView(url) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'gc_cc_page_view',
      data: url
    });
  }
}
function customEvent(event, data) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: event,
      data: data
    });
  }
}
const gtm = {
  pageView,
  gtag,
  customEvent
};

const useCookieConsentSetup = props => {
  const {
    localization
  } = props;
  const {
    i18n
  } = reactI18next.useTranslation();
  const [showConsentModal, setShowConsentModal] = react.useState(false);
  const [cookies,, removeCookie] = reactCookie.useCookies();
  const consentUpdateHandler = ({
    adStorage,
    analyticsStorage,
    personalizationStorage,
    securityStorage,
    functionalityStorage
  }) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    gtm.gtag('consent', 'update', {
      ad_storage: adStorage,
      analytics_storage: analyticsStorage,
      functionality_storage: functionalityStorage,
      personalization_storage: personalizationStorage,
      security_storage: securityStorage
    });
  };
  const removeCookieHandler = react.useCallback(value => {
    return removeCookie(value, {
      path: '/',
      domain: getCookieDomain()
    });
  }, [removeCookie]);
  const removeCookies = react.useCallback(list => {
    list.forEach(value => {
      if (value.includes('*')) {
        const regex = value.replace('*', '');
        Object.keys(cookies).forEach(cookie => {
          if (cookie.includes(regex)) removeCookieHandler(value);
        });
      } else {
        removeCookieHandler(value);
      }
    });
  }, [cookies, removeCookieHandler]);
  const checkDeniedCookies = react.useCallback(e => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    e.preventDefault();
    if (((_b = (_a = cookies === null || cookies === void 0 ? void 0 : cookies.GCCookieConsent) === null || _a === void 0 ? void 0 : _a.storage) === null || _b === void 0 ? void 0 : _b.analyticsStorage) === 'denied' || !cookies.GCCookieConsent) {
      removeCookies(ANALYTICS_COOKIES);
    }
    if (((_d = (_c = cookies === null || cookies === void 0 ? void 0 : cookies.GCCookieConsent) === null || _c === void 0 ? void 0 : _c.storage) === null || _d === void 0 ? void 0 : _d.adStorage) === 'denied' || !cookies.GCCookieConsent) {
      removeCookies(AD_COOKIES);
    }
    if (((_f = (_e = cookies === null || cookies === void 0 ? void 0 : cookies.GCCookieConsent) === null || _e === void 0 ? void 0 : _e.storage) === null || _f === void 0 ? void 0 : _f.adStorage) === 'denied' || ((_h = (_g = cookies === null || cookies === void 0 ? void 0 : cookies.GCCookieConsent) === null || _g === void 0 ? void 0 : _g.storage) === null || _h === void 0 ? void 0 : _h.analyticsStorage) === 'denied' || !cookies.GCCookieConsent) {
      removeCookies(ANALYTICS_AND_AD_COOKIES);
    }
    if (((_k = (_j = cookies === null || cookies === void 0 ? void 0 : cookies.GCCookieConsent) === null || _j === void 0 ? void 0 : _j.storage) === null || _k === void 0 ? void 0 : _k.personalizationStorage) === 'denied' || !cookies.GCCookieConsent) {
      removeCookies(PERSONALIZATION_COOKIES);
    }
  }, [cookies.GCCookieConsent, removeCookies]);
  const setLanguageHandler = react.useCallback(localization => {
    i18n.changeLanguage(localization);
  }, [i18n]);
  react.useEffect(() => {
    if (localization) setLanguageHandler(localization);
  }, [localization, setLanguageHandler]);
  react.useEffect(() => {
    var _a, _b;
    if (((_a = cookies === null || cookies === void 0 ? void 0 : cookies.GCCookieConsent) === null || _a === void 0 ? void 0 : _a.accepted) !== true) setShowConsentModal(true);
    if ((_b = cookies === null || cookies === void 0 ? void 0 : cookies.GCCookieConsent) === null || _b === void 0 ? void 0 : _b.storage) consentUpdateHandler(cookies.GCCookieConsent.storage);
  }, [cookies]);
  react.useEffect(() => {
    window.addEventListener('unload', checkDeniedCookies);
    return () => {
      window.removeEventListener('unload', checkDeniedCookies);
    };
  }, [checkDeniedCookies]);
  return {
    showConsentModal,
    setShowConsentModal
  };
};

const CookieConsent = props => {
  const {
    usedCookiesType,
    link,
    triggerId,
    localization
  } = props;
  const {
    showConsentModal,
    setShowConsentModal
  } = useCookieConsentSetup({
    usedCookiesType,
    link,
    localization
  });
  const showConsentModalHandler = react.useCallback(() => {
    setShowConsentModal(true);
  }, [setShowConsentModal]);
  react.useEffect(() => {
    var _a;
    (_a = document.getElementById(triggerId)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', showConsentModalHandler);
    return () => {
      var _a;
      return (_a = document.getElementById(triggerId)) === null || _a === void 0 ? void 0 : _a.removeEventListener('click', showConsentModalHandler);
    };
  }, [triggerId, showConsentModalHandler]);
  return jsxRuntime.jsx("div", Object.assign({
    id: "gc-cookie-consent",
    className: "gc-cc-font-sans gc-cc-antialiased"
  }, {
    children: showConsentModal && jsxRuntime.jsx(ConsentWrapper, {
      usedCookiesType: usedCookiesType,
      link: link
    })
  }));
};

var infoPanel$2 = {
	title: "🍪 Tyto stránky využívají Cookies",
	text: "Tyto webové stránky používají soubory cookies a další sledovací nástroje s cílem vylepšení uživatelského prostředí, zobrazení přizpůsobeného obsahu a reklam, analýzy návštěvnosti webových stránek a zjištění zdroje návštěvnosti.",
	link: "Další informace o Cookies.",
	acceptAll: "Přijmout vše",
	onlyNecessary: "Pouze technicky nezbytné cookies a technologie",
	manageCookies: "Nastavení cookies",
	copyright: "Cookie consent widget vytvořen firmou ©GeekCoders {{ year }}"
};
var settingsPanel$2 = {
	title: "Nastavení",
	text: "Na této stránce můžete nastavit souhlas pro jednotlivé účely generování a využívání souborů Cookies.",
	link: "Další informace o Cookies.",
	back: "Zpět",
	acceptSelected: "Uložit"
};
var trigger$2 = {
	changeCookiesSetting: "Upravit nastavení cookies"
};
var adCookies$2 = {
	label: "Cookies pro cílení a reklamu",
	text: "Tyto soubory cookie se používají k zobrazování reklamy, která vás pravděpodobně bude zajímat na základě vašich zvyků při procházení. Tyto soubory cookie, jsou požadovány námi/nebo poskytovateli reklam, mohou kombinovat informace shromážděné z našich webových stránek s dalšími informacemi, které nezávisle shromáždily z jiných webových stránek, týkající se činností vašeho internetového prohlížeče v rámci jejich reklamní sítě webových stránek. Pokud se rozhodnete tyto soubory cookies pro cílení nebo reklamu odstranit nebo deaktivovat, budou se vám reklamy stále zobrazovat, ale nemusí pro vás být nadále personalizované a relevantní."
};
var analyticsCookies$2 = {
	label: "Analytické a výkonnostní cookies",
	text: "Tyto soubory cookies se používají ke shromažďování informací pro analýzu provozu na našich webových stránkách a sledování používání našich webových stránek uživateli. Tyto soubory cookies mohou například sledovat věci jako je doba kterou na webu trávíte, nebo stránky, které navštěvujete, což nám pomáhá pochopit, jak pro vás můžeme vylepšit náš web. Informace shromážděné prostřednictvím těchto sledovacích a výkonnostních cookies neidentifikují žádné osoby."
};
var personalizationCookies$2 = {
	label: "Cookies pro personalizaci",
	text: "Tyto soubory cookie se používají k tomu, aby vám na našich webových stránkách poskytovaly personalizovaný uživatelský zážitek a aby si pamatovaly vaše volby, které jste použili při používání našich webových stránek. Můžeme například používat soubory cookie k zapamatování vašeho jazyka nebo k zapamatování vašich přihlašovacích údajů."
};
var necessaryCookies$2 = {
	label: "Bezpodmínečně nutné soubory cookies",
	text: "Tyto soubory cookies jsou nezbytné k tomu, abychom vám mohli poskytovat služby dostupné prostřednictvím našeho webu a abychom vám umožnili používat určité funkce našeho webu. Bez těchto cookies vám nemůžeme na naší webové stránce poskytovat určité služby."
};
var csTranslations = {
	infoPanel: infoPanel$2,
	settingsPanel: settingsPanel$2,
	trigger: trigger$2,
	adCookies: adCookies$2,
	analyticsCookies: analyticsCookies$2,
	personalizationCookies: personalizationCookies$2,
	necessaryCookies: necessaryCookies$2
};

var infoPanel$1 = {
	title: "🍪 Wir verwenden Cookies",
	text: "Wir verwenden Cookies von Erst und Drittanbietern sowie ähnliche Technologien, um Ihnen die bestmögliche Erfahrung bieten zu können unsere Website zu personalisieren, individualisierte Anzeigen bereitzustellen und die Nutzung unserer Plattform zu analysieren.",
	link: "Weitere Informationen, z.B. zu Aufbewahrungsfristen oder Empfängern, finden Sie hier.",
	acceptAll: "Akzeptieren und weiter",
	onlyNecessary: "Nur technisch notwendige Cookies und Technologien",
	manageCookies: "Verwalten",
	copyright: "Cookie-Einverständnis-Widget von ©GeekCoders {{ year }}"
};
var settingsPanel$1 = {
	title: "Einstellungen",
	text: "Wir verwenden Cookies von Erst und Drittanbietern sowie ähnliche Technologien, um Ihnen die bestmögliche Erfahrung bieten zu können unsere Website zu personalisieren, individualisierte Anzeigen bereitzustellen und die Nutzung unserer Plattform zu analysieren.",
	link: "Weitere Informationen, z.B. zu Aufbewahrungsfristen oder Empfängern, finden Sie hier.",
	back: "Zurück",
	acceptSelected: "Akzeptieren"
};
var trigger$1 = {
	changeCookiesSetting: "Cookies Änderung"
};
var adCookies$1 = {
	label: "Cookies für Targeting und Werbung",
	text: "Diese Cookies werden verwendet, um Anzeigen zu schalten, die aufgrund Ihrer Surfgewohnheiten für Sie von Interesse sein könnten. Diese Cookies werden von uns und/oder Werbeanbietern angefordert und können Informationen, die von unserer Website gesammelt wurden, mit anderen Informationen kombinieren, die sie unabhängig von anderen Websites über Ihre Browseraktivitäten innerhalb ihres Werbenetzwerks von Websites gesammelt haben. Wenn Sie sich dafür entscheiden, diese Targeting- oder Werbe-Cookies zu löschen oder zu deaktivieren, werden Sie zwar weiterhin Anzeigen sehen, diese sind jedoch möglicherweise nicht mehr auf Sie zugeschnitten und für Sie relevant."
};
var analyticsCookies$1 = {
	label: "Analytische und leistungsbezogene Cookies",
	text: "Diese Cookies werden verwendet, um Informationen zu sammeln, den Verkehr auf unserer Website zu analysieren und die Nutzung unserer Website durch die Nutzer zu verfolgen. Diese Cookies können z. B. die Zeit, die Sie auf der Website verbringen, oder die von Ihnen besuchten Seiten verfolgen, was uns hilft zu verstehen, wie wir unsere Website für Sie verbessern können. Die durch diese Tracking- und Performance-Cookies gesammelten Informationen lassen keine Rückschlüsse auf einzelne Personen zu."
};
var personalizationCookies$1 = {
	label: "Cookies für die Personalisierung",
	text: "Diese Cookies werden verwendet, um Ihnen ein personalisiertes Nutzererlebnis auf unserer Website zu bieten und um sich an Ihre Entscheidungen zu erinnern, die Sie bei der Nutzung unserer Website getroffen haben. Zum Beispiel können wir Cookies verwenden, um Ihre Sprache oder Ihre Anmeldedaten zu speichern."
};
var necessaryCookies$1 = {
	label: "Streng notwendige Cookies",
	text: "Diese Cookies sind notwendig, damit wir Ihnen die über unsere Website verfügbaren Dienste zur Verfügung stellen können und damit Sie bestimmte Funktionen unserer Website nutzen können. Ohne diese Cookies können wir Ihnen bestimmte Dienste auf unserer Website nicht zur Verfügung stellen."
};
var deTranslations = {
	infoPanel: infoPanel$1,
	settingsPanel: settingsPanel$1,
	trigger: trigger$1,
	adCookies: adCookies$1,
	analyticsCookies: analyticsCookies$1,
	personalizationCookies: personalizationCookies$1,
	necessaryCookies: necessaryCookies$1
};

var infoPanel = {
	title: "🍪 We use cookies",
	text: "This website uses cookies and other analytic tools to improve user experience, serve personalised content and targeted ads and analyse traffic.",
	link: "Learn more about cookies.",
	acceptAll: "Accept all",
	onlyNecessary: "Only technically necessary cookies and technologies",
	manageCookies: "Preferences",
	copyright: "Cookie consent widget made by ©GeekCoders {{ year }}"
};
var settingsPanel = {
	title: "Preferences",
	text: "On this page you can set your consent for using different types of cookies.",
	link: "Learn more about cookies.",
	back: "Back",
	acceptSelected: "Save"
};
var trigger = {
	changeCookiesSetting: "Change your preferences"
};
var adCookies = {
	label: "Cookies for targeted marketing",
	text: "These cookies are used to show you advertising that is likely to interest you based on your browsing habits. These cookies, requested by us/or advertising providers, may combine information collected from our website with other information independently collected from other websites about your internet browser activities within their website advertising network. If you remove or disable these targeting or advertising cookies, you will still receive advertisements, but they may no longer be relevant to you."
};
var analyticsCookies = {
	label: "Analytic cookies",
	text: "These cookies are used to collect information to analyze traffic on our website and to track users' use of our website. These cookies can track, for example, how much time you spend on the site or the pages you visit, which helps us understand how we can improve our site for you. The information collected through these tracking and performance cookies does not identify any individuals."
};
var personalizationCookies = {
	label: "Cookies for personalised experience",
	text: "We use these cookies to provide you with a personalized user experience on our website and to remember the choices you made when using our website. For example, we may use cookies to save your language preference or to remember your login details."
};
var necessaryCookies = {
	label: "Required cookies",
	text: "These cookies are necessary to provide you with the services available through our website and to enable you to use certain features of our website. Without these cookies, we cannot provide you with certain services on our website."
};
var enTranslations = {
	infoPanel: infoPanel,
	settingsPanel: settingsPanel,
	trigger: trigger,
	adCookies: adCookies,
	analyticsCookies: analyticsCookies,
	personalizationCookies: personalizationCookies,
	necessaryCookies: necessaryCookies
};

const allowedLanguages = ['en', 'cs', 'de'];
const defaultLanguage = 'en';
const GCCookieConsentI18n = i18n__default["default"].createInstance();
GCCookieConsentI18n.init({
  resources: {
    cs: {
      translations: csTranslations
    },
    de: {
      translations: deTranslations
    },
    en: {
      translations: enTranslations
    }
  },
  defaultNS: 'translations',
  ns: ['translations'],
  fallbackLng: defaultLanguage,
  supportedLngs: allowedLanguages,
  debug: process__default["default"].env['NODE_ENV'] === 'development',
  react: {
    useSuspense: false
  }
});

const init = (config, selector) => {
  return ReactDOM__default["default"].render(jsxRuntime.jsx(react.StrictMode, {
    children: jsxRuntime.jsx(GCCookieConsent, Object.assign({}, config))
  }), selector);
};
const GCCookieConsent = props => {
  return jsxRuntime.jsx(reactCookie.CookiesProvider, {
    children: jsxRuntime.jsx(reactI18next.I18nextProvider, Object.assign({
      i18n: GCCookieConsentI18n
    }, {
      children: jsxRuntime.jsx(CookieConsent, Object.assign({}, props))
    }))
  });
};

exports.GCCookieConsent = GCCookieConsent;
exports.gtm = gtm;
exports.init = init;
