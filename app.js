parcelRequire = function(e, r, t, n) {
        var i, o = "function" == typeof parcelRequire && parcelRequire,
            u = "function" == typeof require && require;

        function f(t, n) {
            if (!r[t]) {
                if (!e[t]) {
                    var i = "function" == typeof parcelRequire && parcelRequire;
                    if (!n && i) return i(t, !0);
                    if (o) return o(t, !0);
                    if (u && "string" == typeof t) return u(t);
                    var c = new Error("Cannot find module '" + t + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                p.resolve = function(r) {
                    return e[t][1][r] || r
                }, p.cache = {};
                var l = r[t] = new f.Module(t);
                e[t][0].call(l.exports, p, l, l.exports, this)
            }
            return r[t].exports;

            function p(e) {
                return f(p.resolve(e))
            }
        }
        f.isParcelRequire = !0, f.Module = function(e) {
            this.id = e, this.bundle = f, this.exports = {}
        }, f.modules = e, f.cache = r, f.parent = o, f.register = function(r, t) {
            e[r] = [function(e, r) {
                r.exports = t
            }, {}]
        };
        for (var c = 0; c < t.length; c++) try {
            f(t[c])
        } catch (e) {
            i || (i = e)
        }
        if (t.length) {
            var l = f(t[t.length - 1]);
            "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
                return l
            }) : n && (this[n] = l)
        }
        if (parcelRequire = f, i) throw i;
        return f
    }({
        "YOwE": [function(require, module, exports) {
            "use strict";
            var r = Object.getOwnPropertySymbols,
                t = Object.prototype.hasOwnProperty,
                e = Object.prototype.propertyIsEnumerable;

            function n(r) {
                if (null == r) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(r)
            }

            function o() {
                try {
                    if (!Object.assign) return !1;
                    var r = new String("abc");
                    if (r[5] = "de", "5" === Object.getOwnPropertyNames(r)[0]) return !1;
                    for (var t = {}, e = 0; e < 10; e++) t["_" + String.fromCharCode(e)] = e;
                    if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(r) {
                            return t[r]
                        }).join("")) return !1;
                    var n = {};
                    return "abcdefghijklmnopqrst".split("").forEach(function(r) {
                        n[r] = r
                    }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                } catch (o) {
                    return !1
                }
            }
            module.exports = o() ? Object.assign : function(o, c) {
                for (var a, i, s = n(o), f = 1; f < arguments.length; f++) {
                    for (var u in a = Object(arguments[f])) t.call(a, u) && (s[u] = a[u]);
                    if (r) {
                        i = r(a);
                        for (var b = 0; b < i.length; b++) e.call(a, i[b]) && (s[i[b]] = a[i[b]])
                    }
                }
                return s
            };
        }, {}],
        "pyFg": [function(require, module, exports) {
            "use strict";
            var e = require("object-assign"),
                t = "function" == typeof Symbol && Symbol.for,
                r = t ? Symbol.for("react.element") : 60103,
                n = t ? Symbol.for("react.portal") : 60106,
                o = t ? Symbol.for("react.fragment") : 60107,
                u = t ? Symbol.for("react.strict_mode") : 60108,
                l = t ? Symbol.for("react.profiler") : 60114,
                f = t ? Symbol.for("react.provider") : 60109,
                c = t ? Symbol.for("react.context") : 60110,
                i = t ? Symbol.for("react.forward_ref") : 60112,
                a = t ? Symbol.for("react.suspense") : 60113,
                s = t ? Symbol.for("react.suspense_list") : 60120,
                p = t ? Symbol.for("react.memo") : 60115,
                y = t ? Symbol.for("react.lazy") : 60116;
            t && Symbol.for("react.fundamental"), t && Symbol.for("react.responder"), t && Symbol.for("react.scope");
            var d = "function" == typeof Symbol && Symbol.iterator;

            function m(e) {
                for (var t = e.message, r = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) r += "&args[]=" + encodeURIComponent(arguments[n]);
                return e.message = "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", e
            }
            var v = {
                    isMounted: function() {
                        return !1
                    },
                    enqueueForceUpdate: function() {},
                    enqueueReplaceState: function() {},
                    enqueueSetState: function() {}
                },
                h = {};

            function b(e, t, r) {
                this.props = e, this.context = t, this.refs = h, this.updater = r || v
            }

            function S() {}

            function _(e, t, r) {
                this.props = e, this.context = t, this.refs = h, this.updater = r || v
            }
            b.prototype.isReactComponent = {}, b.prototype.setState = function(e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e) throw m(Error(85));
                this.updater.enqueueSetState(this, e, t, "setState")
            }, b.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, S.prototype = b.prototype;
            var g = _.prototype = new S;
            g.constructor = _, e(g, b.prototype), g.isPureReactComponent = !0;
            var k = {
                    current: null
                },
                $ = {
                    suspense: null
                },
                w = {
                    current: null
                },
                C = Object.prototype.hasOwnProperty,
                E = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function R(e, t, n) {
                var o, u = {},
                    l = null,
                    f = null;
                if (null != t)
                    for (o in void 0 !== t.ref && (f = t.ref), void 0 !== t.key && (l = "" + t.key), t) C.call(t, o) && !E.hasOwnProperty(o) && (u[o] = t[o]);
                var c = arguments.length - 2;
                if (1 === c) u.children = n;
                else if (1 < c) {
                    for (var i = Array(c), a = 0; a < c; a++) i[a] = arguments[a + 2];
                    u.children = i
                }
                if (e && e.defaultProps)
                    for (o in c = e.defaultProps) void 0 === u[o] && (u[o] = c[o]);
                return {
                    $$typeof: r,
                    type: e,
                    key: l,
                    ref: f,
                    props: u,
                    _owner: w.current
                }
            }

            function x(e, t) {
                return {
                    $$typeof: r,
                    type: e.type,
                    key: t,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner
                }
            }

            function P(e) {
                return "object" == typeof e && null !== e && e.$$typeof === r
            }

            function j(e) {
                var t = {
                    "=": "=0",
                    ":": "=2"
                };
                return "$" + ("" + e).replace(/[=:]/g, function(e) {
                    return t[e]
                })
            }
            var O = /\/+/g,
                A = [];

            function I(e, t, r, n) {
                if (A.length) {
                    var o = A.pop();
                    return o.result = e, o.keyPrefix = t, o.func = r, o.context = n, o.count = 0, o
                }
                return {
                    result: e,
                    keyPrefix: t,
                    func: r,
                    context: n,
                    count: 0
                }
            }

            function U(e) {
                e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > A.length && A.push(e)
            }

            function q(e, t, o, u) {
                var l = typeof e;
                "undefined" !== l && "boolean" !== l || (e = null);
                var f = !1;
                if (null === e) f = !0;
                else switch (l) {
                    case "string":
                    case "number":
                        f = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                            case r:
                            case n:
                                f = !0
                        }
                }
                if (f) return o(u, e, "" === t ? "." + F(e, 0) : t), 1;
                if (f = 0, t = "" === t ? "." : t + ":", Array.isArray(e))
                    for (var c = 0; c < e.length; c++) {
                        var i = t + F(l = e[c], c);
                        f += q(l, i, o, u)
                    } else if (null === e || "object" != typeof e ? i = null : i = "function" == typeof(i = d && e[d] || e["@@iterator"]) ? i : null, "function" == typeof i)
                        for (e = i.call(e), c = 0; !(l = e.next()).done;) f += q(l = l.value, i = t + F(l, c++), o, u);
                    else if ("object" === l) throw o = "" + e, m(Error(31), "[object Object]" === o ? "object with keys {" + Object.keys(e).join(", ") + "}" : o, "");
                return f
            }

            function L(e, t, r) {
                return null == e ? 0 : q(e, "", t, r)
            }

            function F(e, t) {
                return "object" == typeof e && null !== e && null != e.key ? j(e.key) : t.toString(36)
            }

            function M(e, t) {
                e.func.call(e.context, t, e.count++)
            }

            function D(e, t, r) {
                var n = e.result,
                    o = e.keyPrefix;
                e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? V(e, n, r, function(e) {
                    return e
                }) : null != e && (P(e) && (e = x(e, o + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(O, "$&/") + "/") + r)), n.push(e))
            }

            function V(e, t, r, n, o) {
                var u = "";
                null != r && (u = ("" + r).replace(O, "$&/") + "/"), L(e, D, t = I(t, u, n, o)), U(t)
            }

            function B() {
                var e = k.current;
                if (null === e) throw m(Error(321));
                return e
            }
            var N = {
                    Children: {
                        map: function(e, t, r) {
                            if (null == e) return e;
                            var n = [];
                            return V(e, n, null, t, r), n
                        },
                        forEach: function(e, t, r) {
                            if (null == e) return e;
                            L(e, M, t = I(null, null, t, r)), U(t)
                        },
                        count: function(e) {
                            return L(e, function() {
                                return null
                            }, null)
                        },
                        toArray: function(e) {
                            var t = [];
                            return V(e, t, null, function(e) {
                                return e
                            }), t
                        },
                        only: function(e) {
                            if (!P(e)) throw m(Error(143));
                            return e
                        }
                    },
                    createRef: function() {
                        return {
                            current: null
                        }
                    },
                    Component: b,
                    PureComponent: _,
                    createContext: function(e, t) {
                        return void 0 === t && (t = null), (e = {
                            $$typeof: c,
                            _calculateChangedBits: t,
                            _currentValue: e,
                            _currentValue2: e,
                            _threadCount: 0,
                            Provider: null,
                            Consumer: null
                        }).Provider = {
                            $$typeof: f,
                            _context: e
                        }, e.Consumer = e
                    },
                    forwardRef: function(e) {
                        return {
                            $$typeof: i,
                            render: e
                        }
                    },
                    lazy: function(e) {
                        return {
                            $$typeof: y,
                            _ctor: e,
                            _status: -1,
                            _result: null
                        }
                    },
                    memo: function(e, t) {
                        return {
                            $$typeof: p,
                            type: e,
                            compare: void 0 === t ? null : t
                        }
                    },
                    useCallback: function(e, t) {
                        return B().useCallback(e, t)
                    },
                    useContext: function(e, t) {
                        return B().useContext(e, t)
                    },
                    useEffect: function(e, t) {
                        return B().useEffect(e, t)
                    },
                    useImperativeHandle: function(e, t, r) {
                        return B().useImperativeHandle(e, t, r)
                    },
                    useDebugValue: function() {},
                    useLayoutEffect: function(e, t) {
                        return B().useLayoutEffect(e, t)
                    },
                    useMemo: function(e, t) {
                        return B().useMemo(e, t)
                    },
                    useReducer: function(e, t, r) {
                        return B().useReducer(e, t, r)
                    },
                    useRef: function(e) {
                        return B().useRef(e)
                    },
                    useState: function(e) {
                        return B().useState(e)
                    },
                    Fragment: o,
                    Profiler: l,
                    StrictMode: u,
                    Suspense: a,
                    unstable_SuspenseList: s,
                    createElement: R,
                    cloneElement: function(t, n, o) {
                        if (null == t) throw m(Error(267), t);
                        var u = e({}, t.props),
                            l = t.key,
                            f = t.ref,
                            c = t._owner;
                        if (null != n) {
                            if (void 0 !== n.ref && (f = n.ref, c = w.current), void 0 !== n.key && (l = "" + n.key), t.type && t.type.defaultProps) var i = t.type.defaultProps;
                            for (a in n) C.call(n, a) && !E.hasOwnProperty(a) && (u[a] = void 0 === n[a] && void 0 !== i ? i[a] : n[a])
                        }
                        var a = arguments.length - 2;
                        if (1 === a) u.children = o;
                        else if (1 < a) {
                            i = Array(a);
                            for (var s = 0; s < a; s++) i[s] = arguments[s + 2];
                            u.children = i
                        }
                        return {
                            $$typeof: r,
                            type: t.type,
                            key: l,
                            ref: f,
                            props: u,
                            _owner: c
                        }
                    },
                    createFactory: function(e) {
                        var t = R.bind(null, e);
                        return t.type = e, t
                    },
                    isValidElement: P,
                    version: "16.10.1",
                    unstable_withSuspenseConfig: function(e, t) {
                        var r = $.suspense;
                        $.suspense = void 0 === t ? null : t;
                        try {
                            e()
                        } finally {
                            $.suspense = r
                        }
                    },
                    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                        ReactCurrentDispatcher: k,
                        ReactCurrentBatchConfig: $,
                        ReactCurrentOwner: w,
                        IsSomeRendererActing: {
                            current: !1
                        },
                        assign: e
                    }
                },
                T = {
                    default: N
                },
                z = T && N || T;
            module.exports = z.default || z;
        }, {
            "object-assign": "YOwE"
        }],
        "HdMw": [function(require, module, exports) {
            "use strict";
            module.exports = require("./cjs/react.production.min.js");
        }, {
            "./cjs/react.production.min.js": "pyFg"
        }],
        "x9cO": [function(require, module, exports) {
            "use strict";
            var e, t, n, r, o;
            if (Object.defineProperty(exports, "__esModule", {
                    value: !0
                }), "undefined" == typeof window || "function" != typeof MessageChannel) {
                var a = null,
                    l = null,
                    i = function() {
                        if (null !== a) try {
                            var e = exports.unstable_now();
                            a(!0, e), a = null
                        } catch (t) {
                            throw setTimeout(i, 0), t
                        }
                    },
                    u = Date.now();
                exports.unstable_now = function() {
                    return Date.now() - u
                }, e = function(t) {
                    null !== a ? setTimeout(e, 0, t) : (a = t, setTimeout(i, 0))
                }, t = function(e, t) {
                    l = setTimeout(e, t)
                }, n = function() {
                    clearTimeout(l)
                }, r = function() {
                    return !1
                }, o = exports.unstable_forceFrameRate = function() {}
            } else {
                var s = window.performance,
                    c = window.Date,
                    f = window.setTimeout,
                    p = window.clearTimeout,
                    b = window.requestAnimationFrame,
                    d = window.cancelAnimationFrame;
                if ("undefined" != typeof console && ("function" != typeof b && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof d && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")), "object" == typeof s && "function" == typeof s.now) exports.unstable_now = function() {
                    return s.now()
                };
                else {
                    var x = c.now();
                    exports.unstable_now = function() {
                        return c.now() - x
                    }
                }
                var v = !1,
                    w = null,
                    m = -1,
                    y = 5,
                    _ = 0;
                r = function() {
                    return exports.unstable_now() >= _
                }, o = function() {}, exports.unstable_forceFrameRate = function(e) {
                    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : y = 0 < e ? Math.floor(1e3 / e) : 33.33
                };
                var h = new MessageChannel,
                    k = h.port2;
                h.port1.onmessage = function() {
                    if (null !== w) {
                        var e = exports.unstable_now();
                        _ = e + y;
                        try {
                            w(!0, e) ? k.postMessage(null) : (v = !1, w = null)
                        } catch (t) {
                            throw k.postMessage(null), t
                        }
                    } else v = !1
                }, e = function(e) {
                    w = e, v || (v = !0, k.postMessage(null))
                }, t = function(e, t) {
                    m = f(function() {
                        e(exports.unstable_now())
                    }, t)
                }, n = function() {
                    p(m), m = -1
                }
            }

            function T(e, t) {
                var n = e.length;
                e.push(t);
                e: for (;;) {
                    var r = Math.floor((n - 1) / 2),
                        o = e[r];
                    if (!(void 0 !== o && 0 < P(o, t))) break e;
                    e[r] = t, e[n] = o, n = r
                }
            }

            function g(e) {
                return void 0 === (e = e[0]) ? null : e
            }

            function M(e) {
                var t = e[0];
                if (void 0 !== t) {
                    var n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, o = e.length; r < o;) {
                            var a = 2 * (r + 1) - 1,
                                l = e[a],
                                i = a + 1,
                                u = e[i];
                            if (void 0 !== l && 0 > P(l, n)) void 0 !== u && 0 > P(u, l) ? (e[r] = u, e[i] = n, r = i) : (e[r] = l, e[a] = n, r = a);
                            else {
                                if (!(void 0 !== u && 0 > P(u, n))) break e;
                                e[r] = u, e[i] = n, r = i
                            }
                        }
                    }
                    return t
                }
                return null
            }

            function P(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }
            var F = [],
                I = [],
                C = 1,
                A = null,
                L = 3,
                j = !1,
                q = !1,
                D = !1;

            function R(e) {
                for (var t = g(I); null !== t;) {
                    if (null === t.callback) M(I);
                    else {
                        if (!(t.startTime <= e)) break;
                        M(I), t.sortIndex = t.expirationTime, T(F, t)
                    }
                    t = g(I)
                }
            }

            function E(n) {
                if (D = !1, R(n), !q)
                    if (null !== g(F)) q = !0, e(N);
                    else {
                        var r = g(I);
                        null !== r && t(E, r.startTime - n)
                    }
            }

            function N(e, o) {
                q = !1, D && (D = !1, n()), j = !0;
                var a = L;
                try {
                    for (R(o), A = g(F); null !== A && (!(A.expirationTime > o) || e && !r());) {
                        var l = A.callback;
                        if (null !== l) {
                            A.callback = null, L = A.priorityLevel;
                            var i = l(A.expirationTime <= o);
                            o = exports.unstable_now(), "function" == typeof i ? A.callback = i : A === g(F) && M(F), R(o)
                        } else M(F);
                        A = g(F)
                    }
                    if (null !== A) var u = !0;
                    else {
                        var s = g(I);
                        null !== s && t(E, s.startTime - o), u = !1
                    }
                    return u
                } finally {
                    A = null, L = a, j = !1
                }
            }

            function B(e) {
                switch (e) {
                    case 1:
                        return -1;
                    case 2:
                        return 250;
                    case 5:
                        return 1073741823;
                    case 4:
                        return 1e4;
                    default:
                        return 5e3
                }
            }
            var O = o;
            exports.unstable_ImmediatePriority = 1, exports.unstable_UserBlockingPriority = 2, exports.unstable_NormalPriority = 3, exports.unstable_IdlePriority = 5, exports.unstable_LowPriority = 4, exports.unstable_runWithPriority = function(e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3
                }
                var n = L;
                L = e;
                try {
                    return t()
                } finally {
                    L = n
                }
            }, exports.unstable_next = function(e) {
                switch (L) {
                    case 1:
                    case 2:
                    case 3:
                        var t = 3;
                        break;
                    default:
                        t = L
                }
                var n = L;
                L = t;
                try {
                    return e()
                } finally {
                    L = n
                }
            }, exports.unstable_scheduleCallback = function(r, o, a) {
                var l = exports.unstable_now();
                if ("object" == typeof a && null !== a) {
                    var i = a.delay;
                    i = "number" == typeof i && 0 < i ? l + i : l, a = "number" == typeof a.timeout ? a.timeout : B(r)
                } else a = B(r), i = l;
                return r = {
                    id: C++,
                    callback: o,
                    priorityLevel: r,
                    startTime: i,
                    expirationTime: a = i + a,
                    sortIndex: -1
                }, i > l ? (r.sortIndex = i, T(I, r), null === g(F) && r === g(I) && (D ? n() : D = !0, t(E, i - l))) : (r.sortIndex = a, T(F, r), q || j || (q = !0, e(N))), r
            }, exports.unstable_cancelCallback = function(e) {
                e.callback = null
            }, exports.unstable_wrapCallback = function(e) {
                var t = L;
                return function() {
                    var n = L;
                    L = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        L = n
                    }
                }
            }, exports.unstable_getCurrentPriorityLevel = function() {
                return L
            }, exports.unstable_shouldYield = function() {
                var e = exports.unstable_now();
                R(e);
                var t = g(F);
                return t !== A && null !== A && null !== t && null !== t.callback && t.startTime <= e && t.expirationTime < A.expirationTime || r()
            }, exports.unstable_requestPaint = O, exports.unstable_continueExecution = function() {
                q || j || (q = !0, e(N))
            }, exports.unstable_pauseExecution = function() {}, exports.unstable_getFirstCallbackNode = function() {
                return g(F)
            }, exports.unstable_Profiling = null;
        }, {}],
        "IGIl": [function(require, module, exports) {
            "use strict";
            module.exports = require("./cjs/scheduler.production.min.js");
        }, {
            "./cjs/scheduler.production.min.js": "x9cO"
        }],
        "jF7N": [function(require, module, exports) {
            "use strict";
            var e = require("react"),
                t = require("object-assign"),
                n = require("scheduler");

            function r(e) {
                for (var t = e.message, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, r = 1; r < arguments.length; r++) n += "&args[]=" + encodeURIComponent(arguments[r]);
                return e.message = "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", e
            }
            if (!e) throw r(Error(227));
            var l = null,
                a = {};

            function i() {
                if (l)
                    for (var e in a) {
                        var t = a[e],
                            n = l.indexOf(e);
                        if (!(-1 < n)) throw r(Error(96), e);
                        if (!u[n]) {
                            if (!t.extractEvents) throw r(Error(97), e);
                            for (var i in u[n] = t, n = t.eventTypes) {
                                var s = void 0,
                                    f = n[i],
                                    d = t,
                                    p = i;
                                if (c.hasOwnProperty(p)) throw r(Error(99), p);
                                c[p] = f;
                                var m = f.phasedRegistrationNames;
                                if (m) {
                                    for (s in m) m.hasOwnProperty(s) && o(m[s], d, p);
                                    s = !0
                                } else f.registrationName ? (o(f.registrationName, d, p), s = !0) : s = !1;
                                if (!s) throw r(Error(98), i, e)
                            }
                        }
                    }
            }

            function o(e, t, n) {
                if (s[e]) throw r(Error(100), e);
                s[e] = t, f[e] = t.eventTypes[n].dependencies
            }
            var u = [],
                c = {},
                s = {},
                f = {};

            function d(e, t, n, r, l, a, i, o, u) {
                var c = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(n, c)
                } catch (s) {
                    this.onError(s)
                }
            }
            var p = !1,
                m = null,
                h = !1,
                v = null,
                g = {
                    onError: function(e) {
                        p = !0, m = e
                    }
                };

            function y(e, t, n, r, l, a, i, o, u) {
                p = !1, m = null, d.apply(g, arguments)
            }

            function b(e, t, n, l, a, i, o, u, c) {
                if (y.apply(this, arguments), p) {
                    if (!p) throw r(Error(198));
                    var s = m;
                    p = !1, m = null, h || (h = !0, v = s)
                }
            }
            var k = null,
                w = null,
                E = null;

            function x(e, t, n) {
                var r = e.type || "unknown-event";
                e.currentTarget = E(n), b(r, t, void 0, e), e.currentTarget = null
            }

            function T(e, t) {
                if (null == t) throw r(Error(30));
                return null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
            }

            function S(e, t, n) {
                Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
            }
            var C = null;

            function _(e) {
                if (e) {
                    var t = e._dispatchListeners,
                        n = e._dispatchInstances;
                    if (Array.isArray(t))
                        for (var r = 0; r < t.length && !e.isPropagationStopped(); r++) x(e, t[r], n[r]);
                    else t && x(e, t, n);
                    e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e)
                }
            }

            function P(e) {
                if (null !== e && (C = T(C, e)), e = C, C = null, e) {
                    if (S(e, _), C) throw r(Error(95));
                    if (h) throw e = v, h = !1, v = null, e
                }
            }
            var N = {
                injectEventPluginOrder: function(e) {
                    if (l) throw r(Error(101));
                    l = Array.prototype.slice.call(e), i()
                },
                injectEventPluginsByName: function(e) {
                    var t, n = !1;
                    for (t in e)
                        if (e.hasOwnProperty(t)) {
                            var l = e[t];
                            if (!a.hasOwnProperty(t) || a[t] !== l) {
                                if (a[t]) throw r(Error(102), t);
                                a[t] = l, n = !0
                            }
                        }
                    n && i()
                }
            };

            function z(e, t) {
                var n = e.stateNode;
                if (!n) return null;
                var l = k(n);
                if (!l) return null;
                n = l[t];
                e: switch (t) {
                    case "onClick":
                    case "onClickCapture":
                    case "onDoubleClick":
                    case "onDoubleClickCapture":
                    case "onMouseDown":
                    case "onMouseDownCapture":
                    case "onMouseMove":
                    case "onMouseMoveCapture":
                    case "onMouseUp":
                    case "onMouseUpCapture":
                        (l = !l.disabled) || (l = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !l;
                        break e;
                    default:
                        e = !1
                }
                if (e) return null;
                if (n && "function" != typeof n) throw r(Error(231), t, typeof n);
                return n
            }
            var M = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
            M.hasOwnProperty("ReactCurrentDispatcher") || (M.ReactCurrentDispatcher = {
                current: null
            }), M.hasOwnProperty("ReactCurrentBatchConfig") || (M.ReactCurrentBatchConfig = {
                suspense: null
            });
            var U = /^(.*)[\\\/]/,
                F = "function" == typeof Symbol && Symbol.for,
                I = F ? Symbol.for("react.element") : 60103,
                R = F ? Symbol.for("react.portal") : 60106,
                O = F ? Symbol.for("react.fragment") : 60107,
                D = F ? Symbol.for("react.strict_mode") : 60108,
                L = F ? Symbol.for("react.profiler") : 60114,
                A = F ? Symbol.for("react.provider") : 60109,
                W = F ? Symbol.for("react.context") : 60110,
                V = F ? Symbol.for("react.concurrent_mode") : 60111,
                B = F ? Symbol.for("react.forward_ref") : 60112,
                j = F ? Symbol.for("react.suspense") : 60113,
                H = F ? Symbol.for("react.suspense_list") : 60120,
                Q = F ? Symbol.for("react.memo") : 60115,
                K = F ? Symbol.for("react.lazy") : 60116;
            F && Symbol.for("react.fundamental"), F && Symbol.for("react.responder"), F && Symbol.for("react.scope");
            var $ = "function" == typeof Symbol && Symbol.iterator;

            function q(e) {
                return null === e || "object" != typeof e ? null : "function" == typeof(e = $ && e[$] || e["@@iterator"]) ? e : null
            }

            function Y(e) {
                if (-1 === e._status) {
                    e._status = 0;
                    var t = e._ctor;
                    t = t(), e._result = t, t.then(function(t) {
                        0 === e._status && (t = t.default, e._status = 1, e._result = t)
                    }, function(t) {
                        0 === e._status && (e._status = 2, e._result = t)
                    })
                }
            }

            function X(e) {
                if (null == e) return null;
                if ("function" == typeof e) return e.displayName || e.name || null;
                if ("string" == typeof e) return e;
                switch (e) {
                    case O:
                        return "Fragment";
                    case R:
                        return "Portal";
                    case L:
                        return "Profiler";
                    case D:
                        return "StrictMode";
                    case j:
                        return "Suspense";
                    case H:
                        return "SuspenseList"
                }
                if ("object" == typeof e) switch (e.$$typeof) {
                    case W:
                        return "Context.Consumer";
                    case A:
                        return "Context.Provider";
                    case B:
                        var t = e.render;
                        return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
                    case Q:
                        return X(e.type);
                    case K:
                        if (e = 1 === e._status ? e._result : null) return X(e)
                }
                return null
            }

            function G(e) {
                var t = "";
                do {
                    e: switch (e.tag) {
                        case 3:
                        case 4:
                        case 6:
                        case 7:
                        case 10:
                        case 9:
                            var n = "";
                            break e;
                        default:
                            var r = e._debugOwner,
                                l = e._debugSource,
                                a = X(e.type);
                            n = null, r && (n = X(r.type)), r = a, a = "", l ? a = " (at " + l.fileName.replace(U, "") + ":" + l.lineNumber + ")" : n && (a = " (created by " + n + ")"), n = "\n    in " + (r || "Unknown") + a
                    }
                    t += n,
                    e = e.return
                } while (e);
                return t
            }
            var Z = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
                J = null,
                ee = null,
                te = null;

            function ne(e) {
                if (e = w(e)) {
                    if ("function" != typeof J) throw r(Error(280));
                    var t = k(e.stateNode);
                    J(e.stateNode, e.type, t)
                }
            }

            function re(e) {
                ee ? te ? te.push(e) : te = [e] : ee = e
            }

            function le() {
                if (ee) {
                    var e = ee,
                        t = te;
                    if (te = ee = null, ne(e), t)
                        for (e = 0; e < t.length; e++) ne(t[e])
                }
            }

            function ae(e, t) {
                return e(t)
            }

            function ie(e, t, n, r) {
                return e(t, n, r)
            }

            function oe() {}
            var ue = ae,
                ce = !1,
                se = !1;

            function fe() {
                null === ee && null === te || (oe(), le())
            }
            new Map, new Map, new Map;
            var de = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                pe = Object.prototype.hasOwnProperty,
                me = {},
                he = {};

            function ve(e) {
                return !!pe.call(he, e) || !pe.call(me, e) && (de.test(e) ? he[e] = !0 : (me[e] = !0, !1))
            }

            function ge(e, t, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                    case "function":
                    case "symbol":
                        return !0;
                    case "boolean":
                        return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                    default:
                        return !1
                }
            }

            function ye(e, t, n, r) {
                if (null == t || ge(e, t, n, r)) return !0;
                if (r) return !1;
                if (null !== n) switch (n.type) {
                    case 3:
                        return !t;
                    case 4:
                        return !1 === t;
                    case 5:
                        return isNaN(t);
                    case 6:
                        return isNaN(t) || 1 > t
                }
                return !1
            }

            function be(e, t, n, r, l, a) {
                this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a
            }
            var ke = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
                ke[e] = new be(e, 0, !1, e, null, !1)
            }), [
                ["acceptCharset", "accept-charset"],
                ["className", "class"],
                ["htmlFor", "for"],
                ["httpEquiv", "http-equiv"]
            ].forEach(function(e) {
                var t = e[0];
                ke[t] = new be(t, 1, !1, e[1], null, !1)
            }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
                ke[e] = new be(e, 2, !1, e.toLowerCase(), null, !1)
            }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
                ke[e] = new be(e, 2, !1, e, null, !1)
            }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
                ke[e] = new be(e, 3, !1, e.toLowerCase(), null, !1)
            }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
                ke[e] = new be(e, 3, !0, e, null, !1)
            }), ["capture", "download"].forEach(function(e) {
                ke[e] = new be(e, 4, !1, e, null, !1)
            }), ["cols", "rows", "size", "span"].forEach(function(e) {
                ke[e] = new be(e, 6, !1, e, null, !1)
            }), ["rowSpan", "start"].forEach(function(e) {
                ke[e] = new be(e, 5, !1, e.toLowerCase(), null, !1)
            });
            var we = /[\-:]([a-z])/g;

            function Ee(e) {
                return e[1].toUpperCase()
            }

            function xe(e) {
                switch (typeof e) {
                    case "boolean":
                    case "number":
                    case "object":
                    case "string":
                    case "undefined":
                        return e;
                    default:
                        return ""
                }
            }

            function Te(e, t, n, r) {
                var l = ke.hasOwnProperty(t) ? ke[t] : null;
                (null !== l ? 0 === l.type : !r && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (ye(t, n, l, r) && (n = null), r || null === l ? ve(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = null === n ? 3 !== l.type && "" : n : (t = l.attributeName, r = l.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (l = l.type) || 4 === l && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
            }

            function Se(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
            }

            function Ce(e) {
                var t = Se(e) ? "checked" : "value",
                    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                    r = "" + e[t];
                if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                    var l = n.get,
                        a = n.set;
                    return Object.defineProperty(e, t, {
                        configurable: !0,
                        get: function() {
                            return l.call(this)
                        },
                        set: function(e) {
                            r = "" + e, a.call(this, e)
                        }
                    }), Object.defineProperty(e, t, {
                        enumerable: n.enumerable
                    }), {
                        getValue: function() {
                            return r
                        },
                        setValue: function(e) {
                            r = "" + e
                        },
                        stopTracking: function() {
                            e._valueTracker = null, delete e[t]
                        }
                    }
                }
            }

            function _e(e) {
                e._valueTracker || (e._valueTracker = Ce(e))
            }

            function Pe(e) {
                if (!e) return !1;
                var t = e._valueTracker;
                if (!t) return !0;
                var n = t.getValue(),
                    r = "";
                return e && (r = Se(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
            }

            function Ne(e, n) {
                var r = n.checked;
                return t({}, n, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != r ? r : e._wrapperState.initialChecked
                })
            }

            function ze(e, t) {
                var n = null == t.defaultValue ? "" : t.defaultValue,
                    r = null != t.checked ? t.checked : t.defaultChecked;
                n = xe(null != t.value ? t.value : n), e._wrapperState = {
                    initialChecked: r,
                    initialValue: n,
                    controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                }
            }

            function Me(e, t) {
                null != (t = t.checked) && Te(e, "checked", t, !1)
            }

            function Ue(e, t) {
                Me(e, t);
                var n = xe(t.value),
                    r = t.type;
                if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                t.hasOwnProperty("value") ? Ie(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ie(e, t.type, xe(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
            }

            function Fe(e, t, n) {
                if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                    var r = t.type;
                    if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                }
                "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !e.defaultChecked, e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
            }

            function Ie(e, t, n) {
                "number" === t && e.ownerDocument.activeElement === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
            }

            function Re(t) {
                var n = "";
                return e.Children.forEach(t, function(e) {
                    null != e && (n += e)
                }), n
            }

            function Oe(e, n) {
                return e = t({
                    children: void 0
                }, n), (n = Re(n.children)) && (e.children = n), e
            }

            function De(e, t, n, r) {
                if (e = e.options, t) {
                    t = {};
                    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
                    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
                } else {
                    for (n = "" + xe(n), t = null, l = 0; l < e.length; l++) {
                        if (e[l].value === n) return e[l].selected = !0, void(r && (e[l].defaultSelected = !0));
                        null !== t || e[l].disabled || (t = e[l])
                    }
                    null !== t && (t.selected = !0)
                }
            }

            function Le(e, n) {
                if (null != n.dangerouslySetInnerHTML) throw r(Error(91));
                return t({}, n, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + e._wrapperState.initialValue
                })
            }

            function Ae(e, t) {
                var n = t.value;
                if (null == n) {
                    if (n = t.defaultValue, null != (t = t.children)) {
                        if (null != n) throw r(Error(92));
                        if (Array.isArray(t)) {
                            if (!(1 >= t.length)) throw r(Error(93));
                            t = t[0]
                        }
                        n = t
                    }
                    null == n && (n = "")
                }
                e._wrapperState = {
                    initialValue: xe(n)
                }
            }

            function We(e, t) {
                var n = xe(t.value),
                    r = xe(t.defaultValue);
                null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
            }

            function Ve(e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
                var t = e.replace(we, Ee);
                ke[t] = new be(t, 1, !1, e, null, !1)
            }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
                var t = e.replace(we, Ee);
                ke[t] = new be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1)
            }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
                var t = e.replace(we, Ee);
                ke[t] = new be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1)
            }), ["tabIndex", "crossOrigin"].forEach(function(e) {
                ke[e] = new be(e, 1, !1, e.toLowerCase(), null, !1)
            }), ke.xlinkHref = new be("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach(function(e) {
                ke[e] = new be(e, 1, !1, e.toLowerCase(), null, !0)
            });
            var Be = {
                html: "http://www.w3.org/1999/xhtml",
                mathml: "http://www.w3.org/1998/Math/MathML",
                svg: "http://www.w3.org/2000/svg"
            };

            function je(e) {
                switch (e) {
                    case "svg":
                        return "http://www.w3.org/2000/svg";
                    case "math":
                        return "http://www.w3.org/1998/Math/MathML";
                    default:
                        return "http://www.w3.org/1999/xhtml"
                }
            }

            function He(e, t) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? je(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
            }
            var Qe, Ke = function(e) {
                return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
                    MSApp.execUnsafeLocalFunction(function() {
                        return e(t, n)
                    })
                } : e
            }(function(e, t) {
                if (e.namespaceURI !== Be.svg || "innerHTML" in e) e.innerHTML = t;
                else {
                    for ((Qe = Qe || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Qe.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                    for (; t.firstChild;) e.appendChild(t.firstChild)
                }
            });

            function $e(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                }
                e.textContent = t
            }

            function qe(e, t) {
                var n = {};
                return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
            }
            var Ye = {
                    animationend: qe("Animation", "AnimationEnd"),
                    animationiteration: qe("Animation", "AnimationIteration"),
                    animationstart: qe("Animation", "AnimationStart"),
                    transitionend: qe("Transition", "TransitionEnd")
                },
                Xe = {},
                Ge = {};

            function Ze(e) {
                if (Xe[e]) return Xe[e];
                if (!Ye[e]) return e;
                var t, n = Ye[e];
                for (t in n)
                    if (n.hasOwnProperty(t) && t in Ge) return Xe[e] = n[t];
                return e
            }
            Z && (Ge = document.createElement("div").style, "AnimationEvent" in window || (delete Ye.animationend.animation, delete Ye.animationiteration.animation, delete Ye.animationstart.animation), "TransitionEvent" in window || delete Ye.transitionend.transition);
            var Je = Ze("animationend"),
                et = Ze("animationiteration"),
                tt = Ze("animationstart"),
                nt = Ze("transitionend"),
                rt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                lt = !1,
                at = [],
                it = null,
                ot = null,
                ut = null,
                ct = new Map,
                st = new Map,
                ft = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
                dt = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");

            function pt(e) {
                var t = On(e);
                ft.forEach(function(n) {
                    Dn(n, e, t)
                }), dt.forEach(function(n) {
                    Dn(n, e, t)
                })
            }

            function mt(e, t, n, r) {
                return {
                    blockedOn: e,
                    topLevelType: t,
                    eventSystemFlags: 32 | n,
                    nativeEvent: r
                }
            }

            function ht(e, t) {
                switch (e) {
                    case "focus":
                    case "blur":
                        it = null;
                        break;
                    case "dragenter":
                    case "dragleave":
                        ot = null;
                        break;
                    case "mouseover":
                    case "mouseout":
                        ut = null;
                        break;
                    case "pointerover":
                    case "pointerout":
                        ct.delete(t.pointerId);
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                        st.delete(t.pointerId)
                }
            }

            function vt(e, t, n, r, l) {
                return null === e || e.nativeEvent !== l ? mt(t, n, r, l) : (e.eventSystemFlags |= r, e)
            }

            function gt(e, t, n, r) {
                switch (t) {
                    case "focus":
                        return it = vt(it, e, t, n, r), !0;
                    case "dragenter":
                        return ot = vt(ot, e, t, n, r), !0;
                    case "mouseover":
                        return ut = vt(ut, e, t, n, r), !0;
                    case "pointerover":
                        var l = r.pointerId;
                        return ct.set(l, vt(ct.get(l) || null, e, t, n, r)), !0;
                    case "gotpointercapture":
                        return l = r.pointerId, st.set(l, vt(st.get(l) || null, e, t, n, r)), !0
                }
                return !1
            }

            function yt(e) {
                if (null !== e.blockedOn) return !1;
                var t = Fn(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
                return null === t || (e.blockedOn = t, !1)
            }

            function bt(e, t, n) {
                yt(e) && n.delete(t)
            }

            function kt() {
                for (lt = !1; 0 < at.length;) {
                    var e = at[0];
                    if (null !== e.blockedOn) break;
                    var t = Fn(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
                    null !== t ? e.blockedOn = t : at.shift()
                }
                null !== it && yt(it) && (it = null), null !== ot && yt(ot) && (ot = null), null !== ut && yt(ut) && (ut = null), ct.forEach(bt), st.forEach(bt)
            }

            function wt(e, t) {
                e.blockedOn === t && (e.blockedOn = null, lt || (lt = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, kt)))
            }

            function Et(e) {
                function t(t) {
                    return wt(t, e)
                }
                if (0 < at.length) {
                    wt(at[0], e);
                    for (var n = 1; n < at.length; n++) {
                        var r = at[n];
                        r.blockedOn === e && (r.blockedOn = null)
                    }
                }
                null !== it && wt(it, e), null !== ot && wt(ot, e), null !== ut && wt(ut, e), ct.forEach(t), st.forEach(t)
            }
            var xt = 0,
                Tt = 2,
                St = 1024;

            function Ct(e) {
                var t = e,
                    n = e;
                if (e.alternate)
                    for (; t.return;) t = t.return;
                else {
                    e = t;
                    do {
                        ((t = e).effectTag & (Tt | St)) !== xt && (n = t.return), e = t.return
                    } while (e)
                }
                return 3 === t.tag ? n : null
            }

            function _t(e) {
                if (Ct(e) !== e) throw r(Error(188))
            }

            function Pt(e) {
                var t = e.alternate;
                if (!t) {
                    if (null === (t = Ct(e))) throw r(Error(188));
                    return t !== e ? null : e
                }
                for (var n = e, l = t;;) {
                    var a = n.return;
                    if (null === a) break;
                    var i = a.alternate;
                    if (null === i) {
                        if (null !== (l = a.return)) {
                            n = l;
                            continue
                        }
                        break
                    }
                    if (a.child === i.child) {
                        for (i = a.child; i;) {
                            if (i === n) return _t(a), e;
                            if (i === l) return _t(a), t;
                            i = i.sibling
                        }
                        throw r(Error(188))
                    }
                    if (n.return !== l.return) n = a, l = i;
                    else {
                        for (var o = !1, u = a.child; u;) {
                            if (u === n) {
                                o = !0, n = a, l = i;
                                break
                            }
                            if (u === l) {
                                o = !0, l = a, n = i;
                                break
                            }
                            u = u.sibling
                        }
                        if (!o) {
                            for (u = i.child; u;) {
                                if (u === n) {
                                    o = !0, n = i, l = a;
                                    break
                                }
                                if (u === l) {
                                    o = !0, l = i, n = a;
                                    break
                                }
                                u = u.sibling
                            }
                            if (!o) throw r(Error(189))
                        }
                    }
                    if (n.alternate !== l) throw r(Error(190))
                }
                if (3 !== n.tag) throw r(Error(188));
                return n.stateNode.current === n ? e : t
            }

            function Nt(e) {
                if (!(e = Pt(e))) return null;
                for (var t = e;;) {
                    if (5 === t.tag || 6 === t.tag) return t;
                    if (t.child) t.child.return = t, t = t.child;
                    else {
                        if (t === e) break;
                        for (; !t.sibling;) {
                            if (!t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                }
                return null
            }

            function zt(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
            }

            function Mt(e) {
                do {
                    e = e.return
                } while (e && 5 !== e.tag);
                return e || null
            }

            function Ut(e, t, n) {
                (t = z(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = T(n._dispatchListeners, t), n._dispatchInstances = T(n._dispatchInstances, e))
            }

            function Ft(e) {
                if (e && e.dispatchConfig.phasedRegistrationNames) {
                    for (var t = e._targetInst, n = []; t;) n.push(t), t = Mt(t);
                    for (t = n.length; 0 < t--;) Ut(n[t], "captured", e);
                    for (t = 0; t < n.length; t++) Ut(n[t], "bubbled", e)
                }
            }

            function It(e, t, n) {
                e && n && n.dispatchConfig.registrationName && (t = z(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = T(n._dispatchListeners, t), n._dispatchInstances = T(n._dispatchInstances, e))
            }

            function Rt(e) {
                e && e.dispatchConfig.registrationName && It(e._targetInst, null, e)
            }

            function Ot(e) {
                S(e, Ft)
            }

            function Dt() {
                return !0
            }

            function Lt() {
                return !1
            }

            function At(e, t, n, r) {
                for (var l in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n, e = this.constructor.Interface) e.hasOwnProperty(l) && ((t = e[l]) ? this[l] = t(n) : "target" === l ? this.target = r : this[l] = n[l]);
                return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? Dt : Lt, this.isPropagationStopped = Lt, this
            }

            function Wt(e, t, n, r) {
                if (this.eventPool.length) {
                    var l = this.eventPool.pop();
                    return this.call(l, e, t, n, r), l
                }
                return new this(e, t, n, r)
            }

            function Vt(e) {
                if (!(e instanceof this)) throw r(Error(279));
                e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e)
            }

            function Bt(e) {
                e.eventPool = [], e.getPooled = Wt, e.release = Vt
            }
            t(At.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var e = this.nativeEvent;
                    e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = Dt)
                },
                stopPropagation: function() {
                    var e = this.nativeEvent;
                    e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = Dt)
                },
                persist: function() {
                    this.isPersistent = Dt
                },
                isPersistent: Lt,
                destructor: function() {
                    var e, t = this.constructor.Interface;
                    for (e in t) this[e] = null;
                    this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = Lt, this._dispatchInstances = this._dispatchListeners = null
                }
            }), At.Interface = {
                type: null,
                target: null,
                currentTarget: function() {
                    return null
                },
                eventPhase: null,
                bubbles: null,
                cancelable: null,
                timeStamp: function(e) {
                    return e.timeStamp || Date.now()
                },
                defaultPrevented: null,
                isTrusted: null
            }, At.extend = function(e) {
                function n() {}

                function r() {
                    return l.apply(this, arguments)
                }
                var l = this;
                n.prototype = l.prototype;
                var a = new n;
                return t(a, r.prototype), r.prototype = a, r.prototype.constructor = r, r.Interface = t({}, l.Interface, e), r.extend = l.extend, Bt(r), r
            }, Bt(At);
            var jt = At.extend({
                    animationName: null,
                    elapsedTime: null,
                    pseudoElement: null
                }),
                Ht = At.extend({
                    clipboardData: function(e) {
                        return "clipboardData" in e ? e.clipboardData : window.clipboardData
                    }
                }),
                Qt = At.extend({
                    view: null,
                    detail: null
                }),
                Kt = Qt.extend({
                    relatedTarget: null
                });

            function $t(e) {
                var t = e.keyCode;
                return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
            }
            var qt = {
                    Esc: "Escape",
                    Spacebar: " ",
                    Left: "ArrowLeft",
                    Up: "ArrowUp",
                    Right: "ArrowRight",
                    Down: "ArrowDown",
                    Del: "Delete",
                    Win: "OS",
                    Menu: "ContextMenu",
                    Apps: "ContextMenu",
                    Scroll: "ScrollLock",
                    MozPrintableKey: "Unidentified"
                },
                Yt = {
                    8: "Backspace",
                    9: "Tab",
                    12: "Clear",
                    13: "Enter",
                    16: "Shift",
                    17: "Control",
                    18: "Alt",
                    19: "Pause",
                    20: "CapsLock",
                    27: "Escape",
                    32: " ",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "ArrowLeft",
                    38: "ArrowUp",
                    39: "ArrowRight",
                    40: "ArrowDown",
                    45: "Insert",
                    46: "Delete",
                    112: "F1",
                    113: "F2",
                    114: "F3",
                    115: "F4",
                    116: "F5",
                    117: "F6",
                    118: "F7",
                    119: "F8",
                    120: "F9",
                    121: "F10",
                    122: "F11",
                    123: "F12",
                    144: "NumLock",
                    145: "ScrollLock",
                    224: "Meta"
                },
                Xt = {
                    Alt: "altKey",
                    Control: "ctrlKey",
                    Meta: "metaKey",
                    Shift: "shiftKey"
                };

            function Gt(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = Xt[e]) && !!t[e]
            }

            function Zt() {
                return Gt
            }
            for (var Jt = Qt.extend({
                    key: function(e) {
                        if (e.key) {
                            var t = qt[e.key] || e.key;
                            if ("Unidentified" !== t) return t
                        }
                        return "keypress" === e.type ? 13 === (e = $t(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Yt[e.keyCode] || "Unidentified" : ""
                    },
                    location: null,
                    ctrlKey: null,
                    shiftKey: null,
                    altKey: null,
                    metaKey: null,
                    repeat: null,
                    locale: null,
                    getModifierState: Zt,
                    charCode: function(e) {
                        return "keypress" === e.type ? $t(e) : 0
                    },
                    keyCode: function(e) {
                        return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                    },
                    which: function(e) {
                        return "keypress" === e.type ? $t(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                    }
                }), en = 0, tn = 0, nn = !1, rn = !1, ln = Qt.extend({
                    screenX: null,
                    screenY: null,
                    clientX: null,
                    clientY: null,
                    pageX: null,
                    pageY: null,
                    ctrlKey: null,
                    shiftKey: null,
                    altKey: null,
                    metaKey: null,
                    getModifierState: Zt,
                    button: null,
                    buttons: null,
                    relatedTarget: function(e) {
                        return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
                    },
                    movementX: function(e) {
                        if ("movementX" in e) return e.movementX;
                        var t = en;
                        return en = e.screenX, nn ? "mousemove" === e.type ? e.screenX - t : 0 : (nn = !0, 0)
                    },
                    movementY: function(e) {
                        if ("movementY" in e) return e.movementY;
                        var t = tn;
                        return tn = e.screenY, rn ? "mousemove" === e.type ? e.screenY - t : 0 : (rn = !0, 0)
                    }
                }), an = ln.extend({
                    pointerId: null,
                    width: null,
                    height: null,
                    pressure: null,
                    tangentialPressure: null,
                    tiltX: null,
                    tiltY: null,
                    twist: null,
                    pointerType: null,
                    isPrimary: null
                }), on = ln.extend({
                    dataTransfer: null
                }), un = Qt.extend({
                    touches: null,
                    targetTouches: null,
                    changedTouches: null,
                    altKey: null,
                    metaKey: null,
                    ctrlKey: null,
                    shiftKey: null,
                    getModifierState: Zt
                }), cn = At.extend({
                    propertyName: null,
                    elapsedTime: null,
                    pseudoElement: null
                }), sn = ln.extend({
                    deltaX: function(e) {
                        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                    },
                    deltaY: function(e) {
                        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                    },
                    deltaZ: null,
                    deltaMode: null
                }), fn = [
                    ["blur", "blur", 0],
                    ["cancel", "cancel", 0],
                    ["click", "click", 0],
                    ["close", "close", 0],
                    ["contextmenu", "contextMenu", 0],
                    ["copy", "copy", 0],
                    ["cut", "cut", 0],
                    ["auxclick", "auxClick", 0],
                    ["dblclick", "doubleClick", 0],
                    ["dragend", "dragEnd", 0],
                    ["dragstart", "dragStart", 0],
                    ["drop", "drop", 0],
                    ["focus", "focus", 0],
                    ["input", "input", 0],
                    ["invalid", "invalid", 0],
                    ["keydown", "keyDown", 0],
                    ["keypress", "keyPress", 0],
                    ["keyup", "keyUp", 0],
                    ["mousedown", "mouseDown", 0],
                    ["mouseup", "mouseUp", 0],
                    ["paste", "paste", 0],
                    ["pause", "pause", 0],
                    ["play", "play", 0],
                    ["pointercancel", "pointerCancel", 0],
                    ["pointerdown", "pointerDown", 0],
                    ["pointerup", "pointerUp", 0],
                    ["ratechange", "rateChange", 0],
                    ["reset", "reset", 0],
                    ["seeked", "seeked", 0],
                    ["submit", "submit", 0],
                    ["touchcancel", "touchCancel", 0],
                    ["touchend", "touchEnd", 0],
                    ["touchstart", "touchStart", 0],
                    ["volumechange", "volumeChange", 0],
                    ["drag", "drag", 1],
                    ["dragenter", "dragEnter", 1],
                    ["dragexit", "dragExit", 1],
                    ["dragleave", "dragLeave", 1],
                    ["dragover", "dragOver", 1],
                    ["mousemove", "mouseMove", 1],
                    ["mouseout", "mouseOut", 1],
                    ["mouseover", "mouseOver", 1],
                    ["pointermove", "pointerMove", 1],
                    ["pointerout", "pointerOut", 1],
                    ["pointerover", "pointerOver", 1],
                    ["scroll", "scroll", 1],
                    ["toggle", "toggle", 1],
                    ["touchmove", "touchMove", 1],
                    ["wheel", "wheel", 1],
                    ["abort", "abort", 2],
                    [Je, "animationEnd", 2],
                    [et, "animationIteration", 2],
                    [tt, "animationStart", 2],
                    ["canplay", "canPlay", 2],
                    ["canplaythrough", "canPlayThrough", 2],
                    ["durationchange", "durationChange", 2],
                    ["emptied", "emptied", 2],
                    ["encrypted", "encrypted", 2],
                    ["ended", "ended", 2],
                    ["error", "error", 2],
                    ["gotpointercapture", "gotPointerCapture", 2],
                    ["load", "load", 2],
                    ["loadeddata", "loadedData", 2],
                    ["loadedmetadata", "loadedMetadata", 2],
                    ["loadstart", "loadStart", 2],
                    ["lostpointercapture", "lostPointerCapture", 2],
                    ["playing", "playing", 2],
                    ["progress", "progress", 2],
                    ["seeking", "seeking", 2],
                    ["stalled", "stalled", 2],
                    ["suspend", "suspend", 2],
                    ["timeupdate", "timeUpdate", 2],
                    [nt, "transitionEnd", 2],
                    ["waiting", "waiting", 2]
                ], dn = {}, pn = {}, mn = 0; mn < fn.length; mn++) {
                var hn = fn[mn],
                    vn = hn[0],
                    gn = hn[1],
                    yn = hn[2],
                    bn = "on" + (gn[0].toUpperCase() + gn.slice(1)),
                    kn = {
                        phasedRegistrationNames: {
                            bubbled: bn,
                            captured: bn + "Capture"
                        },
                        dependencies: [vn],
                        eventPriority: yn
                    };
                dn[gn] = kn, pn[vn] = kn
            }
            var wn = {
                    eventTypes: dn,
                    getEventPriority: function(e) {
                        return void 0 !== (e = pn[e]) ? e.eventPriority : 2
                    },
                    extractEvents: function(e, t, n, r, l) {
                        if (!(t = pn[e])) return null;
                        switch (e) {
                            case "keypress":
                                if (0 === $t(r)) return null;
                            case "keydown":
                            case "keyup":
                                e = Jt;
                                break;
                            case "blur":
                            case "focus":
                                e = Kt;
                                break;
                            case "click":
                                if (2 === r.button) return null;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                e = ln;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                e = on;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                e = un;
                                break;
                            case Je:
                            case et:
                            case tt:
                                e = jt;
                                break;
                            case nt:
                                e = cn;
                                break;
                            case "scroll":
                                e = Qt;
                                break;
                            case "wheel":
                                e = sn;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                e = Ht;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                e = an;
                                break;
                            default:
                                e = At
                        }
                        return Ot(n = e.getPooled(t, n, r, l)), n
                    }
                },
                En = wn.getEventPriority,
                xn = 10,
                Tn = [];

            function Sn(e) {
                var t = e.targetInst,
                    n = t;
                do {
                    if (!n) {
                        e.ancestors.push(n);
                        break
                    }
                    var r = n;
                    if (3 === r.tag) r = r.stateNode.containerInfo;
                    else {
                        for (; r.return;) r = r.return;
                        r = 3 !== r.tag ? null : r.stateNode.containerInfo
                    }
                    if (!r) break;
                    var l = n.tag;
                    5 !== l && 6 !== l || e.ancestors.push(n), n = hr(r)
                } while (n);
                for (n = 0; n < e.ancestors.length; n++) {
                    t = e.ancestors[n];
                    var a = zt(e.nativeEvent);
                    r = e.topLevelType, l = e.eventSystemFlags;
                    for (var i = e.nativeEvent, o = null, c = 0; c < u.length; c++) {
                        var s = u[c];
                        s && (s = s.extractEvents(r, l, t, i, a)) && (o = T(o, s))
                    }
                    P(o)
                }
            }
            var Cn = !0;

            function _n(e, t) {
                Pn(t, e, !1)
            }

            function Pn(e, t, n) {
                switch (En(t)) {
                    case 0:
                        var r = Nn.bind(null, t, 1);
                        break;
                    case 1:
                        r = zn.bind(null, t, 1);
                        break;
                    default:
                        r = Un.bind(null, t, 1)
                }
                n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1)
            }

            function Nn(e, t, n) {
                ce || oe();
                var r = Un,
                    l = ce;
                ce = !0;
                try {
                    ie(r, e, t, n)
                } finally {
                    (ce = l) || fe()
                }
            }

            function zn(e, t, n) {
                Un(e, t, n)
            }

            function Mn(e, t, n, r) {
                if (Tn.length) {
                    var l = Tn.pop();
                    l.topLevelType = e, l.eventSystemFlags = t, l.nativeEvent = n, l.targetInst = r, e = l
                } else e = {
                    topLevelType: e,
                    eventSystemFlags: t,
                    nativeEvent: n,
                    targetInst: r,
                    ancestors: []
                };
                try {
                    if (t = Sn, n = e, se) t(n, void 0);
                    else {
                        se = !0;
                        try {
                            ue(t, n, void 0)
                        } finally {
                            se = !1, fe()
                        }
                    }
                } finally {
                    e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, Tn.length < xn && Tn.push(e)
                }
            }

            function Un(e, t, n) {
                if (Cn)
                    if (0 < at.length && -1 < ft.indexOf(e)) e = mt(null, e, t, n), at.push(e);
                    else {
                        var r = Fn(e, t, n);
                        null === r ? ht(e, n) : -1 < ft.indexOf(e) ? (e = mt(r, e, t, n), at.push(e)) : gt(r, e, t, n) || (ht(e, n), Mn(e, t, n, null))
                    }
            }

            function Fn(e, t, n) {
                var r = zt(n),
                    l = hr(r);
                if (null !== l)
                    if (null === (r = Ct(l))) l = null;
                    else {
                        var a = r.tag;
                        if (13 === a) {
                            if (null !== (r = 13 !== r.tag || (null === (l = r.memoizedState) && (null !== (r = r.alternate) && (l = r.memoizedState)), null === l) ? null : l.dehydrated)) return r;
                            l = null
                        } else if (3 === a) {
                            if (r.stateNode.hydrate) return 3 === r.tag ? r.stateNode.containerInfo : null;
                            l = null
                        } else r !== l && (l = null)
                    }
                return Mn(e, t, n, l), null
            }

            function In(e) {
                if (!Z) return !1;
                var t = (e = "on" + e) in document;
                return t || ((t = document.createElement("div")).setAttribute(e, "return;"), t = "function" == typeof t[e]), t
            }
            var Rn = new("function" == typeof WeakMap ? WeakMap : Map);

            function On(e) {
                var t = Rn.get(e);
                return void 0 === t && (t = new Set, Rn.set(e, t)), t
            }

            function Dn(e, t, n) {
                if (!n.has(e)) {
                    switch (e) {
                        case "scroll":
                            Pn(t, "scroll", !0);
                            break;
                        case "focus":
                        case "blur":
                            Pn(t, "focus", !0), Pn(t, "blur", !0), n.add("blur"), n.add("focus");
                            break;
                        case "cancel":
                        case "close":
                            In(e) && Pn(t, e, !0);
                            break;
                        case "invalid":
                        case "submit":
                        case "reset":
                            break;
                        default:
                            -1 === rt.indexOf(e) && _n(e, t)
                    }
                    n.add(e)
                }
            }
            var Ln = {
                    animationIterationCount: !0,
                    borderImageOutset: !0,
                    borderImageSlice: !0,
                    borderImageWidth: !0,
                    boxFlex: !0,
                    boxFlexGroup: !0,
                    boxOrdinalGroup: !0,
                    columnCount: !0,
                    columns: !0,
                    flex: !0,
                    flexGrow: !0,
                    flexPositive: !0,
                    flexShrink: !0,
                    flexNegative: !0,
                    flexOrder: !0,
                    gridArea: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowSpan: !0,
                    gridRowStart: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnSpan: !0,
                    gridColumnStart: !0,
                    fontWeight: !0,
                    lineClamp: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    tabSize: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                    fillOpacity: !0,
                    floodOpacity: !0,
                    stopOpacity: !0,
                    strokeDasharray: !0,
                    strokeDashoffset: !0,
                    strokeMiterlimit: !0,
                    strokeOpacity: !0,
                    strokeWidth: !0
                },
                An = ["Webkit", "ms", "Moz", "O"];

            function Wn(e, t, n) {
                return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || Ln.hasOwnProperty(e) && Ln[e] ? ("" + t).trim() : t + "px"
            }

            function Vn(e, t) {
                for (var n in e = e.style, t)
                    if (t.hasOwnProperty(n)) {
                        var r = 0 === n.indexOf("--"),
                            l = Wn(n, t[n], r);
                        "float" === n && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
                    }
            }
            Object.keys(Ln).forEach(function(e) {
                An.forEach(function(t) {
                    t = t + e.charAt(0).toUpperCase() + e.substring(1), Ln[t] = Ln[e]
                })
            });
            var Bn = t({
                menuitem: !0
            }, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });

            function jn(e, t) {
                if (t) {
                    if (Bn[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw r(Error(137), e, "");
                    if (null != t.dangerouslySetInnerHTML) {
                        if (null != t.children) throw r(Error(60));
                        if (!("object" == typeof t.dangerouslySetInnerHTML && "__html" in t.dangerouslySetInnerHTML)) throw r(Error(61))
                    }
                    if (null != t.style && "object" != typeof t.style) throw r(Error(62), "")
                }
            }

            function Hn(e, t) {
                if (-1 === e.indexOf("-")) return "string" == typeof t.is;
                switch (e) {
                    case "annotation-xml":
                    case "color-profile":
                    case "font-face":
                    case "font-face-src":
                    case "font-face-uri":
                    case "font-face-format":
                    case "font-face-name":
                    case "missing-glyph":
                        return !1;
                    default:
                        return !0
                }
            }

            function Qn(e, t) {
                var n = On(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
                t = f[t];
                for (var r = 0; r < t.length; r++) Dn(t[r], e, n)
            }

            function Kn() {}

            function $n(e) {
                if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
                try {
                    return e.activeElement || e.body
                } catch (t) {
                    return e.body
                }
            }

            function qn(e) {
                for (; e && e.firstChild;) e = e.firstChild;
                return e
            }

            function Yn(e, t) {
                var n, r = qn(e);
                for (e = 0; r;) {
                    if (3 === r.nodeType) {
                        if (n = e + r.textContent.length, e <= t && n >= t) return {
                            node: r,
                            offset: t - e
                        };
                        e = n
                    }
                    e: {
                        for (; r;) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e
                            }
                            r = r.parentNode
                        }
                        r = void 0
                    }
                    r = qn(r)
                }
            }

            function Xn(e, t) {
                return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? Xn(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
            }

            function Gn() {
                for (var e = window, t = $n(); t instanceof e.HTMLIFrameElement;) {
                    try {
                        var n = "string" == typeof t.contentWindow.location.href
                    } catch (r) {
                        n = !1
                    }
                    if (!n) break;
                    t = $n((e = t.contentWindow).document)
                }
                return t
            }

            function Zn(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
            }
            var Jn = "$",
                er = "/$",
                tr = "$?",
                nr = "$!",
                rr = null,
                lr = null;

            function ar(e, t) {
                switch (e) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        return !!t.autoFocus
                }
                return !1
            }

            function ir(e, t) {
                return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
            }
            var or = "function" == typeof setTimeout ? setTimeout : void 0,
                ur = "function" == typeof clearTimeout ? clearTimeout : void 0;

            function cr(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t) break
                }
                return e
            }

            function sr(e) {
                e = e.previousSibling;
                for (var t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if (n === Jn || n === nr || n === tr) {
                            if (0 === t) return e;
                            t--
                        } else n === er && t++
                    }
                    e = e.previousSibling
                }
                return null
            }
            var fr = Math.random().toString(36).slice(2),
                dr = "__reactInternalInstance$" + fr,
                pr = "__reactEventHandlers$" + fr,
                mr = "__reactContainere$" + fr;

            function hr(e) {
                var t = e[dr];
                if (t) return t;
                for (var n = e.parentNode; n;) {
                    if (t = n[mr] || n[dr]) {
                        if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                            for (e = sr(e); null !== e;) {
                                if (n = e[dr]) return n;
                                e = sr(e)
                            }
                        return t
                    }
                    n = (e = n).parentNode
                }
                return null
            }

            function vr(e) {
                return !(e = e[dr] || e[mr]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
            }

            function gr(e) {
                if (5 === e.tag || 6 === e.tag) return e.stateNode;
                throw r(Error(33))
            }

            function yr(e) {
                return e[pr] || null
            }
            var br = null,
                kr = null,
                wr = null;

            function Er() {
                if (wr) return wr;
                var e, t, n = kr,
                    r = n.length,
                    l = "value" in br ? br.value : br.textContent,
                    a = l.length;
                for (e = 0; e < r && n[e] === l[e]; e++);
                var i = r - e;
                for (t = 1; t <= i && n[r - t] === l[a - t]; t++);
                return wr = l.slice(e, 1 < t ? 1 - t : void 0)
            }
            var xr = At.extend({
                    data: null
                }),
                Tr = At.extend({
                    data: null
                }),
                Sr = [9, 13, 27, 32],
                Cr = Z && "CompositionEvent" in window,
                _r = null;
            Z && "documentMode" in document && (_r = document.documentMode);
            var Pr = Z && "TextEvent" in window && !_r,
                Nr = Z && (!Cr || _r && 8 < _r && 11 >= _r),
                zr = String.fromCharCode(32),
                Mr = {
                    beforeInput: {
                        phasedRegistrationNames: {
                            bubbled: "onBeforeInput",
                            captured: "onBeforeInputCapture"
                        },
                        dependencies: ["compositionend", "keypress", "textInput", "paste"]
                    },
                    compositionEnd: {
                        phasedRegistrationNames: {
                            bubbled: "onCompositionEnd",
                            captured: "onCompositionEndCapture"
                        },
                        dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
                    },
                    compositionStart: {
                        phasedRegistrationNames: {
                            bubbled: "onCompositionStart",
                            captured: "onCompositionStartCapture"
                        },
                        dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
                    },
                    compositionUpdate: {
                        phasedRegistrationNames: {
                            bubbled: "onCompositionUpdate",
                            captured: "onCompositionUpdateCapture"
                        },
                        dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
                    }
                },
                Ur = !1;

            function Fr(e, t) {
                switch (e) {
                    case "keyup":
                        return -1 !== Sr.indexOf(t.keyCode);
                    case "keydown":
                        return 229 !== t.keyCode;
                    case "keypress":
                    case "mousedown":
                    case "blur":
                        return !0;
                    default:
                        return !1
                }
            }

            function Ir(e) {
                return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
            }
            var Rr = !1;

            function Or(e, t) {
                switch (e) {
                    case "compositionend":
                        return Ir(t);
                    case "keypress":
                        return 32 !== t.which ? null : (Ur = !0, zr);
                    case "textInput":
                        return (e = t.data) === zr && Ur ? null : e;
                    default:
                        return null
                }
            }

            function Dr(e, t) {
                if (Rr) return "compositionend" === e || !Cr && Fr(e, t) ? (e = Er(), wr = kr = br = null, Rr = !1, e) : null;
                switch (e) {
                    case "paste":
                        return null;
                    case "keypress":
                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which)
                        }
                        return null;
                    case "compositionend":
                        return Nr && "ko" !== t.locale ? null : t.data;
                    default:
                        return null
                }
            }
            var Lr = {
                    eventTypes: Mr,
                    extractEvents: function(e, t, n, r, l) {
                        var a;
                        if (Cr) e: {
                            switch (e) {
                                case "compositionstart":
                                    var i = Mr.compositionStart;
                                    break e;
                                case "compositionend":
                                    i = Mr.compositionEnd;
                                    break e;
                                case "compositionupdate":
                                    i = Mr.compositionUpdate;
                                    break e
                            }
                            i = void 0
                        } else Rr ? Fr(e, r) && (i = Mr.compositionEnd) : "keydown" === e && 229 === r.keyCode && (i = Mr.compositionStart);
                        return i ? (Nr && "ko" !== r.locale && (Rr || i !== Mr.compositionStart ? i === Mr.compositionEnd && Rr && (a = Er()) : (kr = "value" in (br = l) ? br.value : br.textContent, Rr = !0)), t = xr.getPooled(i, n, r, l), a ? t.data = a : null !== (a = Ir(r)) && (t.data = a), Ot(t), a = t) : a = null, (e = Pr ? Or(e, r) : Dr(e, r)) ? ((n = Tr.getPooled(Mr.beforeInput, n, r, l)).data = e, Ot(n)) : n = null, null === a ? n : null === n ? a : [a, n]
                    }
                },
                Ar = {
                    color: !0,
                    date: !0,
                    datetime: !0,
                    "datetime-local": !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    password: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0
                };

            function Wr(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!Ar[e.type] : "textarea" === t
            }
            var Vr = {
                change: {
                    phasedRegistrationNames: {
                        bubbled: "onChange",
                        captured: "onChangeCapture"
                    },
                    dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
                }
            };

            function Br(e, t, n) {
                return (e = At.getPooled(Vr.change, e, t, n)).type = "change", re(n), Ot(e), e
            }
            var jr = null,
                Hr = null;

            function Qr(e) {
                P(e)
            }

            function Kr(e) {
                if (Pe(gr(e))) return e
            }

            function $r(e, t) {
                if ("change" === e) return t
            }
            var qr = !1;

            function Yr() {
                jr && (jr.detachEvent("onpropertychange", Xr), Hr = jr = null)
            }

            function Xr(e) {
                if ("value" === e.propertyName && Kr(Hr))
                    if (e = Br(Hr, e, zt(e)), ce) P(e);
                    else {
                        ce = !0;
                        try {
                            ae(Qr, e)
                        } finally {
                            ce = !1, fe()
                        }
                    }
            }

            function Gr(e, t, n) {
                "focus" === e ? (Yr(), Hr = n, (jr = t).attachEvent("onpropertychange", Xr)) : "blur" === e && Yr()
            }

            function Zr(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Kr(Hr)
            }

            function Jr(e, t) {
                if ("click" === e) return Kr(t)
            }

            function el(e, t) {
                if ("input" === e || "change" === e) return Kr(t)
            }
            Z && (qr = In("input") && (!document.documentMode || 9 < document.documentMode));
            var tl = {
                    eventTypes: Vr,
                    _isInputEventSupported: qr,
                    extractEvents: function(e, t, n, r, l) {
                        var a = (t = n ? gr(n) : window).nodeName && t.nodeName.toLowerCase();
                        if ("select" === a || "input" === a && "file" === t.type) var i = $r;
                        else if (Wr(t))
                            if (qr) i = el;
                            else {
                                i = Zr;
                                var o = Gr
                            } else(a = t.nodeName) && "input" === a.toLowerCase() && ("checkbox" === t.type || "radio" === t.type) && (i = Jr);
                        if (i && (i = i(e, n))) return Br(i, r, l);
                        o && o(e, t, n), "blur" === e && (e = t._wrapperState) && e.controlled && "number" === t.type && Ie(t, "number", t.value)
                    }
                },
                nl = {
                    mouseEnter: {
                        registrationName: "onMouseEnter",
                        dependencies: ["mouseout", "mouseover"]
                    },
                    mouseLeave: {
                        registrationName: "onMouseLeave",
                        dependencies: ["mouseout", "mouseover"]
                    },
                    pointerEnter: {
                        registrationName: "onPointerEnter",
                        dependencies: ["pointerout", "pointerover"]
                    },
                    pointerLeave: {
                        registrationName: "onPointerLeave",
                        dependencies: ["pointerout", "pointerover"]
                    }
                },
                rl = {
                    eventTypes: nl,
                    extractEvents: function(e, t, n, r, l) {
                        var a = "mouseover" === e || "pointerover" === e,
                            i = "mouseout" === e || "pointerout" === e;
                        if (a && 0 == (32 & t) && (r.relatedTarget || r.fromElement) || !i && !a) return null;
                        if (t = l.window === l ? l : (t = l.ownerDocument) ? t.defaultView || t.parentWindow : window, i ? (i = n, null !== (n = (n = r.relatedTarget || r.toElement) ? hr(n) : null) && (n !== (a = Ct(n)) || 5 !== n.tag && 6 !== n.tag) && (n = null)) : i = null, i === n) return null;
                        if ("mouseout" === e || "mouseover" === e) var o = ln,
                            u = nl.mouseLeave,
                            c = nl.mouseEnter,
                            s = "mouse";
                        else "pointerout" !== e && "pointerover" !== e || (o = an, u = nl.pointerLeave, c = nl.pointerEnter, s = "pointer");
                        if (e = null == i ? t : gr(i), t = null == n ? t : gr(n), (u = o.getPooled(u, i, r, l)).type = s + "leave", u.target = e, u.relatedTarget = t, (r = o.getPooled(c, n, r, l)).type = s + "enter", r.target = t, r.relatedTarget = e, s = n, (l = i) && s) e: {
                            for (c = s, e = 0, i = o = l; i; i = Mt(i)) e++;
                            for (i = 0, n = c; n; n = Mt(n)) i++;
                            for (; 0 < e - i;) o = Mt(o), e--;
                            for (; 0 < i - e;) c = Mt(c), i--;
                            for (; e--;) {
                                if (o === c || o === c.alternate) break e;
                                o = Mt(o), c = Mt(c)
                            }
                            o = null
                        } else o = null;
                        for (c = o, o = []; l && l !== c && (null === (e = l.alternate) || e !== c);) o.push(l), l = Mt(l);
                        for (l = []; s && s !== c && (null === (e = s.alternate) || e !== c);) l.push(s), s = Mt(s);
                        for (s = 0; s < o.length; s++) It(o[s], "bubbled", u);
                        for (s = l.length; 0 < s--;) It(l[s], "captured", r);
                        return [u, r]
                    }
                };

            function ll(e, t) {
                return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
            }
            var al = "function" == typeof Object.is ? Object.is : ll,
                il = Object.prototype.hasOwnProperty;

            function ol(e, t) {
                if (al(e, t)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                var n = Object.keys(e),
                    r = Object.keys(t);
                if (n.length !== r.length) return !1;
                for (r = 0; r < n.length; r++)
                    if (!il.call(t, n[r]) || !al(e[n[r]], t[n[r]])) return !1;
                return !0
            }
            var ul = Z && "documentMode" in document && 11 >= document.documentMode,
                cl = {
                    select: {
                        phasedRegistrationNames: {
                            bubbled: "onSelect",
                            captured: "onSelectCapture"
                        },
                        dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
                    }
                },
                sl = null,
                fl = null,
                dl = null,
                pl = !1;

            function ml(e, t) {
                var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
                return pl || null == sl || sl !== $n(n) ? null : ("selectionStart" in (n = sl) && Zn(n) ? n = {
                    start: n.selectionStart,
                    end: n.selectionEnd
                } : n = {
                    anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: n.anchorOffset,
                    focusNode: n.focusNode,
                    focusOffset: n.focusOffset
                }, dl && ol(dl, n) ? null : (dl = n, (e = At.getPooled(cl.select, fl, e, t)).type = "select", e.target = sl, Ot(e), e))
            }
            var hl = {
                eventTypes: cl,
                extractEvents: function(e, t, n, r, l) {
                    var a;
                    if (!(a = !(t = l.window === l ? l.document : 9 === l.nodeType ? l : l.ownerDocument))) {
                        e: {
                            t = On(t), a = f.onSelect;
                            for (var i = 0; i < a.length; i++)
                                if (!t.has(a[i])) {
                                    t = !1;
                                    break e
                                }
                            t = !0
                        }
                        a = !t
                    }
                    if (a) return null;
                    switch (t = n ? gr(n) : window, e) {
                        case "focus":
                            (Wr(t) || "true" === t.contentEditable) && (sl = t, fl = n, dl = null);
                            break;
                        case "blur":
                            dl = fl = sl = null;
                            break;
                        case "mousedown":
                            pl = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            return pl = !1, ml(r, l);
                        case "selectionchange":
                            if (ul) break;
                        case "keydown":
                        case "keyup":
                            return ml(r, l)
                    }
                    return null
                }
            };
            N.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), k = yr, w = vr, E = gr, N.injectEventPluginsByName({
                SimpleEventPlugin: wn,
                EnterLeaveEventPlugin: rl,
                ChangeEventPlugin: tl,
                SelectEventPlugin: hl,
                BeforeInputEventPlugin: Lr
            }), new Set;
            var vl = [],
                gl = -1;

            function yl(e) {
                0 > gl || (e.current = vl[gl], vl[gl] = null, gl--)
            }

            function bl(e, t) {
                vl[++gl] = e.current, e.current = t
            }
            var kl = {},
                wl = {
                    current: kl
                },
                El = {
                    current: !1
                },
                xl = kl;

            function Tl(e, t) {
                var n = e.type.contextTypes;
                if (!n) return kl;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                var l, a = {};
                for (l in n) a[l] = t[l];
                return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a
            }

            function Sl(e) {
                return null != (e = e.childContextTypes)
            }

            function Cl(e) {
                yl(El, e), yl(wl, e)
            }

            function _l(e) {
                yl(El, e), yl(wl, e)
            }

            function Pl(e, t, n) {
                if (wl.current !== kl) throw r(Error(168));
                bl(wl, t, e), bl(El, n, e)
            }

            function Nl(e, n, l) {
                var a = e.stateNode;
                if (e = n.childContextTypes, "function" != typeof a.getChildContext) return l;
                for (var i in a = a.getChildContext())
                    if (!(i in e)) throw r(Error(108), X(n) || "Unknown", i);
                return t({}, l, {}, a)
            }

            function zl(e) {
                var t = e.stateNode;
                return t = t && t.__reactInternalMemoizedMergedChildContext || kl, xl = wl.current, bl(wl, t, e), bl(El, El.current, e), !0
            }

            function Ml(e, t, n) {
                var l = e.stateNode;
                if (!l) throw r(Error(169));
                n ? (t = Nl(e, t, xl), l.__reactInternalMemoizedMergedChildContext = t, yl(El, e), yl(wl, e), bl(wl, t, e)) : yl(El, e), bl(El, n, e)
            }
            var Ul = n.unstable_runWithPriority,
                Fl = n.unstable_scheduleCallback,
                Il = n.unstable_cancelCallback,
                Rl = n.unstable_shouldYield,
                Ol = n.unstable_requestPaint,
                Dl = n.unstable_now,
                Ll = n.unstable_getCurrentPriorityLevel,
                Al = n.unstable_ImmediatePriority,
                Wl = n.unstable_UserBlockingPriority,
                Vl = n.unstable_NormalPriority,
                Bl = n.unstable_LowPriority,
                jl = n.unstable_IdlePriority,
                Hl = {},
                Ql = void 0 !== Ol ? Ol : function() {},
                Kl = null,
                $l = null,
                ql = !1,
                Yl = Dl(),
                Xl = 1e4 > Yl ? Dl : function() {
                    return Dl() - Yl
                };

            function Gl() {
                switch (Ll()) {
                    case Al:
                        return 99;
                    case Wl:
                        return 98;
                    case Vl:
                        return 97;
                    case Bl:
                        return 96;
                    case jl:
                        return 95;
                    default:
                        throw r(Error(332))
                }
            }

            function Zl(e) {
                switch (e) {
                    case 99:
                        return Al;
                    case 98:
                        return Wl;
                    case 97:
                        return Vl;
                    case 96:
                        return Bl;
                    case 95:
                        return jl;
                    default:
                        throw r(Error(332))
                }
            }

            function Jl(e, t) {
                return e = Zl(e), Ul(e, t)
            }

            function ea(e, t, n) {
                return e = Zl(e), Fl(e, t, n)
            }

            function ta(e) {
                return null === Kl ? (Kl = [e], $l = Fl(Al, ra)) : Kl.push(e), Hl
            }

            function na() {
                if (null !== $l) {
                    var e = $l;
                    $l = null, Il(e)
                }
                ra()
            }

            function ra() {
                if (!ql && null !== Kl) {
                    ql = !0;
                    var e = 0;
                    try {
                        var t = Kl;
                        Jl(99, function() {
                            for (; e < t.length; e++) {
                                var n = t[e];
                                do {
                                    n = n(!0)
                                } while (null !== n)
                            }
                        }), Kl = null
                    } catch (n) {
                        throw null !== Kl && (Kl = Kl.slice(e + 1)), Fl(Al, na), n
                    } finally {
                        ql = !1
                    }
                }
            }

            function la(e, n) {
                if (e && e.defaultProps)
                    for (var r in n = t({}, n), e = e.defaultProps) void 0 === n[r] && (n[r] = e[r]);
                return n
            }
            var aa = {
                    current: null
                },
                ia = null,
                oa = null,
                ua = null;

            function ca() {
                ua = oa = ia = null
            }

            function sa(e, t) {
                var n = e.type._context;
                bl(aa, n._currentValue, e), n._currentValue = t
            }

            function fa(e) {
                var t = aa.current;
                yl(aa, e), e.type._context._currentValue = t
            }

            function da(e, t) {
                for (; null !== e;) {
                    var n = e.alternate;
                    if (e.childExpirationTime < t) e.childExpirationTime = t, null !== n && n.childExpirationTime < t && (n.childExpirationTime = t);
                    else {
                        if (!(null !== n && n.childExpirationTime < t)) break;
                        n.childExpirationTime = t
                    }
                    e = e.return
                }
            }

            function pa(e, t) {
                ia = e, ua = oa = null, null !== (e = e.dependencies) && null !== e.firstContext && (e.expirationTime >= t && (Wi = !0), e.firstContext = null)
            }

            function ma(e, t) {
                if (ua !== e && !1 !== t && 0 !== t)
                    if ("number" == typeof t && 1073741823 !== t || (ua = e, t = 1073741823), t = {
                            context: e,
                            observedBits: t,
                            next: null
                        }, null === oa) {
                        if (null === ia) throw r(Error(308));
                        oa = t, ia.dependencies = {
                            expirationTime: 0,
                            firstContext: t,
                            responders: null
                        }
                    } else oa = oa.next = t;
                return e._currentValue
            }
            var ha = !1;

            function va(e) {
                return {
                    baseState: e,
                    firstUpdate: null,
                    lastUpdate: null,
                    firstCapturedUpdate: null,
                    lastCapturedUpdate: null,
                    firstEffect: null,
                    lastEffect: null,
                    firstCapturedEffect: null,
                    lastCapturedEffect: null
                }
            }

            function ga(e) {
                return {
                    baseState: e.baseState,
                    firstUpdate: e.firstUpdate,
                    lastUpdate: e.lastUpdate,
                    firstCapturedUpdate: null,
                    lastCapturedUpdate: null,
                    firstEffect: null,
                    lastEffect: null,
                    firstCapturedEffect: null,
                    lastCapturedEffect: null
                }
            }

            function ya(e, t) {
                return {
                    expirationTime: e,
                    suspenseConfig: t,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null,
                    nextEffect: null
                }
            }

            function ba(e, t) {
                null === e.lastUpdate ? e.firstUpdate = e.lastUpdate = t : (e.lastUpdate.next = t, e.lastUpdate = t)
            }

            function ka(e, t) {
                var n = e.alternate;
                if (null === n) {
                    var r = e.updateQueue,
                        l = null;
                    null === r && (r = e.updateQueue = va(e.memoizedState))
                } else r = e.updateQueue, l = n.updateQueue, null === r ? null === l ? (r = e.updateQueue = va(e.memoizedState), l = n.updateQueue = va(n.memoizedState)) : r = e.updateQueue = ga(l) : null === l && (l = n.updateQueue = ga(r));
                null === l || r === l ? ba(r, t) : null === r.lastUpdate || null === l.lastUpdate ? (ba(r, t), ba(l, t)) : (ba(r, t), l.lastUpdate = t)
            }

            function wa(e, t) {
                var n = e.updateQueue;
                null === (n = null === n ? e.updateQueue = va(e.memoizedState) : Ea(e, n)).lastCapturedUpdate ? n.firstCapturedUpdate = n.lastCapturedUpdate = t : (n.lastCapturedUpdate.next = t, n.lastCapturedUpdate = t)
            }

            function Ea(e, t) {
                var n = e.alternate;
                return null !== n && t === n.updateQueue && (t = e.updateQueue = ga(t)), t
            }

            function xa(e, n, r, l, a, i) {
                switch (r.tag) {
                    case 1:
                        return "function" == typeof(e = r.payload) ? e.call(i, l, a) : e;
                    case 3:
                        e.effectTag = -4097 & e.effectTag | 64;
                    case 0:
                        if (null == (a = "function" == typeof(e = r.payload) ? e.call(i, l, a) : e)) break;
                        return t({}, l, a);
                    case 2:
                        ha = !0
                }
                return l
            }

            function Ta(e, t, n, r, l) {
                ha = !1;
                for (var a = (t = Ea(e, t)).baseState, i = null, o = 0, u = t.firstUpdate, c = a; null !== u;) {
                    var s = u.expirationTime;
                    s < l ? (null === i && (i = u, a = c), o < s && (o = s)) : (Nu(s, u.suspenseConfig), c = xa(e, t, u, c, n, r), null !== u.callback && (e.effectTag |= 32, u.nextEffect = null, null === t.lastEffect ? t.firstEffect = t.lastEffect = u : (t.lastEffect.nextEffect = u, t.lastEffect = u))), u = u.next
                }
                for (s = null, u = t.firstCapturedUpdate; null !== u;) {
                    var f = u.expirationTime;
                    f < l ? (null === s && (s = u, null === i && (a = c)), o < f && (o = f)) : (c = xa(e, t, u, c, n, r), null !== u.callback && (e.effectTag |= 32, u.nextEffect = null, null === t.lastCapturedEffect ? t.firstCapturedEffect = t.lastCapturedEffect = u : (t.lastCapturedEffect.nextEffect = u, t.lastCapturedEffect = u))), u = u.next
                }
                null === i && (t.lastUpdate = null), null === s ? t.lastCapturedUpdate = null : e.effectTag |= 32, null === i && null === s && (a = c), t.baseState = a, t.firstUpdate = i, t.firstCapturedUpdate = s, zu(o), e.expirationTime = o, e.memoizedState = c
            }

            function Sa(e, t, n) {
                null !== t.firstCapturedUpdate && (null !== t.lastUpdate && (t.lastUpdate.next = t.firstCapturedUpdate, t.lastUpdate = t.lastCapturedUpdate), t.firstCapturedUpdate = t.lastCapturedUpdate = null), Ca(t.firstEffect, n), t.firstEffect = t.lastEffect = null, Ca(t.firstCapturedEffect, n), t.firstCapturedEffect = t.lastCapturedEffect = null
            }

            function Ca(e, t) {
                for (; null !== e;) {
                    var n = e.callback;
                    if (null !== n) {
                        e.callback = null;
                        var l = t;
                        if ("function" != typeof n) throw r(Error(191), n);
                        n.call(l)
                    }
                    e = e.nextEffect
                }
            }
            var _a = M.ReactCurrentBatchConfig,
                Pa = (new e.Component).refs;

            function Na(e, n, r, l) {
                r = null == (r = r(l, n = e.memoizedState)) ? n : t({}, n, r), e.memoizedState = r, null !== (l = e.updateQueue) && 0 === e.expirationTime && (l.baseState = r)
            }
            var za = {
                isMounted: function(e) {
                    return !!(e = e._reactInternalFiber) && Ct(e) === e
                },
                enqueueSetState: function(e, t, n) {
                    e = e._reactInternalFiber;
                    var r = su(),
                        l = _a.suspense;
                    (l = ya(r = fu(r, e, l), l)).payload = t, null != n && (l.callback = n), ka(e, l), mu(e, r)
                },
                enqueueReplaceState: function(e, t, n) {
                    e = e._reactInternalFiber;
                    var r = su(),
                        l = _a.suspense;
                    (l = ya(r = fu(r, e, l), l)).tag = 1, l.payload = t, null != n && (l.callback = n), ka(e, l), mu(e, r)
                },
                enqueueForceUpdate: function(e, t) {
                    e = e._reactInternalFiber;
                    var n = su(),
                        r = _a.suspense;
                    (r = ya(n = fu(n, e, r), r)).tag = 2, null != t && (r.callback = t), ka(e, r), mu(e, n)
                }
            };

            function Ma(e, t, n, r, l, a, i) {
                return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, i) : !t.prototype || !t.prototype.isPureReactComponent || (!ol(n, r) || !ol(l, a))
            }

            function Ua(e, t, n) {
                var r = !1,
                    l = kl,
                    a = t.contextType;
                return "object" == typeof a && null !== a ? a = ma(a) : (l = Sl(t) ? xl : wl.current, a = (r = null != (r = t.contextTypes)) ? Tl(e, l) : kl), t = new t(n, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = za, e.stateNode = t, t._reactInternalFiber = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t
            }

            function Fa(e, t, n, r) {
                e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && za.enqueueReplaceState(t, t.state, null)
            }

            function Ia(e, t, n, r) {
                var l = e.stateNode;
                l.props = n, l.state = e.memoizedState, l.refs = Pa;
                var a = t.contextType;
                "object" == typeof a && null !== a ? l.context = ma(a) : (a = Sl(t) ? xl : wl.current, l.context = Tl(e, a)), null !== (a = e.updateQueue) && (Ta(e, a, n, l, r), l.state = e.memoizedState), "function" == typeof(a = t.getDerivedStateFromProps) && (Na(e, t, a, n), l.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof l.getSnapshotBeforeUpdate || "function" != typeof l.UNSAFE_componentWillMount && "function" != typeof l.componentWillMount || (t = l.state, "function" == typeof l.componentWillMount && l.componentWillMount(), "function" == typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount(), t !== l.state && za.enqueueReplaceState(l, l.state, null), null !== (a = e.updateQueue) && (Ta(e, a, n, l, r), l.state = e.memoizedState)), "function" == typeof l.componentDidMount && (e.effectTag |= 4)
            }
            var Ra = Array.isArray;

            function Oa(e, t, n) {
                if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
                    if (n._owner) {
                        if (n = n._owner) {
                            if (1 !== n.tag) throw r(Error(309));
                            var l = n.stateNode
                        }
                        if (!l) throw r(Error(147), e);
                        var a = "" + e;
                        return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === a ? t.ref : ((t = function(e) {
                            var t = l.refs;
                            t === Pa && (t = l.refs = {}), null === e ? delete t[a] : t[a] = e
                        })._stringRef = a, t)
                    }
                    if ("string" != typeof e) throw r(Error(284));
                    if (!n._owner) throw r(Error(290), e)
                }
                return e
            }

            function Da(e, t) {
                if ("textarea" !== e.type) throw r(Error(31), "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, "")
            }

            function La(e) {
                function t(t, n) {
                    if (e) {
                        var r = t.lastEffect;
                        null !== r ? (r.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.effectTag = 8
                    }
                }

                function n(n, r) {
                    if (!e) return null;
                    for (; null !== r;) t(n, r), r = r.sibling;
                    return null
                }

                function l(e, t) {
                    for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                    return e
                }

                function a(e, t, n) {
                    return (e = Zu(e, t, n)).index = 0, e.sibling = null, e
                }

                function i(t, n, r) {
                    return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.effectTag = Tt, n) : r : (t.effectTag = Tt, n) : n
                }

                function o(t) {
                    return e && null === t.alternate && (t.effectTag = Tt), t
                }

                function u(e, t, n, r) {
                    return null === t || 6 !== t.tag ? ((t = tc(n, e.mode, r)).return = e, t) : ((t = a(t, n, r)).return = e, t)
                }

                function c(e, t, n, r) {
                    return null !== t && t.elementType === n.type ? ((r = a(t, n.props, r)).ref = Oa(e, t, n), r.return = e, r) : ((r = Ju(n.type, n.key, n.props, null, e.mode, r)).ref = Oa(e, t, n), r.return = e, r)
                }

                function s(e, t, n, r) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = nc(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [], r)).return = e, t)
                }

                function f(e, t, n, r, l) {
                    return null === t || 7 !== t.tag ? ((t = ec(n, e.mode, r, l)).return = e, t) : ((t = a(t, n, r)).return = e, t)
                }

                function d(e, t, n) {
                    if ("string" == typeof t || "number" == typeof t) return (t = tc("" + t, e.mode, n)).return = e, t;
                    if ("object" == typeof t && null !== t) {
                        switch (t.$$typeof) {
                            case I:
                                return (n = Ju(t.type, t.key, t.props, null, e.mode, n)).ref = Oa(e, null, t), n.return = e, n;
                            case R:
                                return (t = nc(t, e.mode, n)).return = e, t
                        }
                        if (Ra(t) || q(t)) return (t = ec(t, e.mode, n, null)).return = e, t;
                        Da(e, t)
                    }
                    return null
                }

                function p(e, t, n, r) {
                    var l = null !== t ? t.key : null;
                    if ("string" == typeof n || "number" == typeof n) return null !== l ? null : u(e, t, "" + n, r);
                    if ("object" == typeof n && null !== n) {
                        switch (n.$$typeof) {
                            case I:
                                return n.key === l ? n.type === O ? f(e, t, n.props.children, r, l) : c(e, t, n, r) : null;
                            case R:
                                return n.key === l ? s(e, t, n, r) : null
                        }
                        if (Ra(n) || q(n)) return null !== l ? null : f(e, t, n, r, null);
                        Da(e, n)
                    }
                    return null
                }

                function m(e, t, n, r, l) {
                    if ("string" == typeof r || "number" == typeof r) return u(t, e = e.get(n) || null, "" + r, l);
                    if ("object" == typeof r && null !== r) {
                        switch (r.$$typeof) {
                            case I:
                                return e = e.get(null === r.key ? n : r.key) || null, r.type === O ? f(t, e, r.props.children, l, r.key) : c(t, e, r, l);
                            case R:
                                return s(t, e = e.get(null === r.key ? n : r.key) || null, r, l)
                        }
                        if (Ra(r) || q(r)) return f(t, e = e.get(n) || null, r, l, null);
                        Da(t, r)
                    }
                    return null
                }

                function h(r, a, o, u) {
                    for (var c = null, s = null, f = a, h = a = 0, v = null; null !== f && h < o.length; h++) {
                        f.index > h ? (v = f, f = null) : v = f.sibling;
                        var g = p(r, f, o[h], u);
                        if (null === g) {
                            null === f && (f = v);
                            break
                        }
                        e && f && null === g.alternate && t(r, f), a = i(g, a, h), null === s ? c = g : s.sibling = g, s = g, f = v
                    }
                    if (h === o.length) return n(r, f), c;
                    if (null === f) {
                        for (; h < o.length; h++) null !== (f = d(r, o[h], u)) && (a = i(f, a, h), null === s ? c = f : s.sibling = f, s = f);
                        return c
                    }
                    for (f = l(r, f); h < o.length; h++) null !== (v = m(f, r, h, o[h], u)) && (e && null !== v.alternate && f.delete(null === v.key ? h : v.key), a = i(v, a, h), null === s ? c = v : s.sibling = v, s = v);
                    return e && f.forEach(function(e) {
                        return t(r, e)
                    }), c
                }

                function v(a, o, u, c) {
                    var s = q(u);
                    if ("function" != typeof s) throw r(Error(150));
                    if (null == (u = s.call(u))) throw r(Error(151));
                    for (var f = s = null, h = o, v = o = 0, g = null, y = u.next(); null !== h && !y.done; v++, y = u.next()) {
                        h.index > v ? (g = h, h = null) : g = h.sibling;
                        var b = p(a, h, y.value, c);
                        if (null === b) {
                            null === h && (h = g);
                            break
                        }
                        e && h && null === b.alternate && t(a, h), o = i(b, o, v), null === f ? s = b : f.sibling = b, f = b, h = g
                    }
                    if (y.done) return n(a, h), s;
                    if (null === h) {
                        for (; !y.done; v++, y = u.next()) null !== (y = d(a, y.value, c)) && (o = i(y, o, v), null === f ? s = y : f.sibling = y, f = y);
                        return s
                    }
                    for (h = l(a, h); !y.done; v++, y = u.next()) null !== (y = m(h, a, v, y.value, c)) && (e && null !== y.alternate && h.delete(null === y.key ? v : y.key), o = i(y, o, v), null === f ? s = y : f.sibling = y, f = y);
                    return e && h.forEach(function(e) {
                        return t(a, e)
                    }), s
                }
                return function(e, l, i, u) {
                    var c = "object" == typeof i && null !== i && i.type === O && null === i.key;
                    c && (i = i.props.children);
                    var s = "object" == typeof i && null !== i;
                    if (s) switch (i.$$typeof) {
                        case I:
                            e: {
                                for (s = i.key, c = l; null !== c;) {
                                    if (c.key === s) {
                                        if (7 === c.tag ? i.type === O : c.elementType === i.type) {
                                            n(e, c.sibling), (l = a(c, i.type === O ? i.props.children : i.props, u)).ref = Oa(e, c, i), l.return = e, e = l;
                                            break e
                                        }
                                        n(e, c);
                                        break
                                    }
                                    t(e, c), c = c.sibling
                                }
                                i.type === O ? ((l = ec(i.props.children, e.mode, u, i.key)).return = e, e = l) : ((u = Ju(i.type, i.key, i.props, null, e.mode, u)).ref = Oa(e, l, i), u.return = e, e = u)
                            }
                            return o(e);
                        case R:
                            e: {
                                for (c = i.key; null !== l;) {
                                    if (l.key === c) {
                                        if (4 === l.tag && l.stateNode.containerInfo === i.containerInfo && l.stateNode.implementation === i.implementation) {
                                            n(e, l.sibling), (l = a(l, i.children || [], u)).return = e, e = l;
                                            break e
                                        }
                                        n(e, l);
                                        break
                                    }
                                    t(e, l), l = l.sibling
                                }(l = nc(i, e.mode, u)).return = e, e = l
                            }
                            return o(e)
                    }
                    if ("string" == typeof i || "number" == typeof i) return i = "" + i, null !== l && 6 === l.tag ? (n(e, l.sibling), (l = a(l, i, u)).return = e, e = l) : (n(e, l), (l = tc(i, e.mode, u)).return = e, e = l), o(e);
                    if (Ra(i)) return h(e, l, i, u);
                    if (q(i)) return v(e, l, i, u);
                    if (s && Da(e, i), void 0 === i && !c) switch (e.tag) {
                        case 1:
                        case 0:
                            throw e = e.type, r(Error(152), e.displayName || e.name || "Component")
                    }
                    return n(e, l)
                }
            }
            var Aa = La(!0),
                Wa = La(!1),
                Va = {},
                Ba = {
                    current: Va
                },
                ja = {
                    current: Va
                },
                Ha = {
                    current: Va
                };

            function Qa(e) {
                if (e === Va) throw r(Error(174));
                return e
            }

            function Ka(e, t) {
                bl(Ha, t, e), bl(ja, e, e), bl(Ba, Va, e);
                var n = t.nodeType;
                switch (n) {
                    case 9:
                    case 11:
                        t = (t = t.documentElement) ? t.namespaceURI : He(null, "");
                        break;
                    default:
                        t = He(t = (n = 8 === n ? t.parentNode : t).namespaceURI || null, n = n.tagName)
                }
                yl(Ba, e), bl(Ba, t, e)
            }

            function $a(e) {
                yl(Ba, e), yl(ja, e), yl(Ha, e)
            }

            function qa(e) {
                Qa(Ha.current);
                var t = Qa(Ba.current),
                    n = He(t, e.type);
                t !== n && (bl(ja, e, e), bl(Ba, n, e))
            }

            function Ya(e) {
                ja.current === e && (yl(Ba, e), yl(ja, e))
            }
            var Xa = {
                current: 0
            };

            function Ga(e) {
                for (var t = e; null !== t;) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || n.data === tr || n.data === nr)) return t
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if ((64 & t.effectTag) !== xt) return t
                    } else if (null !== t.child) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break;
                    for (; null === t.sibling;) {
                        if (null === t.return || t.return === e) return null;
                        t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                }
                return null
            }

            function Za(e, t) {
                return {
                    responder: e,
                    props: t
                }
            }
            var Ja = M.ReactCurrentDispatcher,
                ei = 0,
                ti = null,
                ni = null,
                ri = null,
                li = null,
                ai = null,
                ii = null,
                oi = 0,
                ui = null,
                ci = 0,
                si = !1,
                fi = null,
                di = 0;

            function pi() {
                throw r(Error(321))
            }

            function mi(e, t) {
                if (null === t) return !1;
                for (var n = 0; n < t.length && n < e.length; n++)
                    if (!al(e[n], t[n])) return !1;
                return !0
            }

            function hi(e, t, n, l, a, i) {
                if (ei = i, ti = t, ri = null !== e ? e.memoizedState : null, Ja.current = null === ri ? Pi : Ni, t = n(l, a), si) {
                    do {
                        si = !1, di += 1, ri = null !== e ? e.memoizedState : null, ii = li, ui = ai = ni = null, Ja.current = Ni, t = n(l, a)
                    } while (si);
                    fi = null, di = 0
                }
                if (Ja.current = _i, (e = ti).memoizedState = li, e.expirationTime = oi, e.updateQueue = ui, e.effectTag |= ci, e = null !== ni && null !== ni.next, ei = 0, ii = ai = li = ri = ni = ti = null, oi = 0, ui = null, ci = 0, e) throw r(Error(300));
                return t
            }

            function vi() {
                Ja.current = _i, ei = 0, ii = ai = li = ri = ni = ti = null, oi = 0, ui = null, ci = 0, si = !1, fi = null, di = 0
            }

            function gi() {
                var e = {
                    memoizedState: null,
                    baseState: null,
                    queue: null,
                    baseUpdate: null,
                    next: null
                };
                return null === ai ? li = ai = e : ai = ai.next = e, ai
            }

            function yi() {
                if (null !== ii) ii = (ai = ii).next, ri = null !== (ni = ri) ? ni.next : null;
                else {
                    if (null === ri) throw r(Error(310));
                    var e = {
                        memoizedState: (ni = ri).memoizedState,
                        baseState: ni.baseState,
                        queue: ni.queue,
                        baseUpdate: ni.baseUpdate,
                        next: null
                    };
                    ai = null === ai ? li = e : ai.next = e, ri = ni.next
                }
                return ai
            }

            function bi(e, t) {
                return "function" == typeof t ? t(e) : t
            }

            function ki(e) {
                var t = yi(),
                    n = t.queue;
                if (null === n) throw r(Error(311));
                if (n.lastRenderedReducer = e, 0 < di) {
                    var l = n.dispatch;
                    if (null !== fi) {
                        var a = fi.get(n);
                        if (void 0 !== a) {
                            fi.delete(n);
                            var i = t.memoizedState;
                            do {
                                i = e(i, a.action), a = a.next
                            } while (null !== a);
                            return al(i, t.memoizedState) || (Wi = !0), t.memoizedState = i, t.baseUpdate === n.last && (t.baseState = i), n.lastRenderedState = i, [i, l]
                        }
                    }
                    return [t.memoizedState, l]
                }
                l = n.last;
                var o = t.baseUpdate;
                if (i = t.baseState, null !== o ? (null !== l && (l.next = null), l = o.next) : l = null !== l ? l.next : null, null !== l) {
                    var u = a = null,
                        c = l,
                        s = !1;
                    do {
                        var f = c.expirationTime;
                        f < ei ? (s || (s = !0, u = o, a = i), f > oi && zu(oi = f)) : (Nu(f, c.suspenseConfig), i = c.eagerReducer === e ? c.eagerState : e(i, c.action)), o = c, c = c.next
                    } while (null !== c && c !== l);
                    s || (u = o, a = i), al(i, t.memoizedState) || (Wi = !0), t.memoizedState = i, t.baseUpdate = u, t.baseState = a, n.lastRenderedState = i
                }
                return [t.memoizedState, n.dispatch]
            }

            function wi(e, t, n, r) {
                return e = {
                    tag: e,
                    create: t,
                    destroy: n,
                    deps: r,
                    next: null
                }, null === ui ? (ui = {
                    lastEffect: null
                }).lastEffect = e.next = e : null === (t = ui.lastEffect) ? ui.lastEffect = e.next = e : (n = t.next, t.next = e, e.next = n, ui.lastEffect = e), e
            }

            function Ei(e, t, n, r) {
                var l = gi();
                ci |= e, l.memoizedState = wi(t, n, void 0, void 0 === r ? null : r)
            }

            function xi(e, t, n, r) {
                var l = yi();
                r = void 0 === r ? null : r;
                var a = void 0;
                if (null !== ni) {
                    var i = ni.memoizedState;
                    if (a = i.destroy, null !== r && mi(r, i.deps)) return void wi(0, n, a, r)
                }
                ci |= e, l.memoizedState = wi(t, n, a, r)
            }

            function Ti(e, t) {
                return "function" == typeof t ? (e = e(), t(e), function() {
                    t(null)
                }) : null != t ? (e = e(), t.current = e, function() {
                    t.current = null
                }) : void 0
            }

            function Si() {}

            function Ci(e, t, n) {
                if (!(25 > di)) throw r(Error(301));
                var l = e.alternate;
                if (e === ti || null !== l && l === ti)
                    if (si = !0, e = {
                            expirationTime: ei,
                            suspenseConfig: null,
                            action: n,
                            eagerReducer: null,
                            eagerState: null,
                            next: null
                        }, null === fi && (fi = new Map), void 0 === (n = fi.get(t))) fi.set(t, e);
                    else {
                        for (t = n; null !== t.next;) t = t.next;
                        t.next = e
                    } else {
                    var a = su(),
                        i = _a.suspense;
                    i = {
                        expirationTime: a = fu(a, e, i),
                        suspenseConfig: i,
                        action: n,
                        eagerReducer: null,
                        eagerState: null,
                        next: null
                    };
                    var o = t.last;
                    if (null === o) i.next = i;
                    else {
                        var u = o.next;
                        null !== u && (i.next = u), o.next = i
                    }
                    if (t.last = i, 0 === e.expirationTime && (null === l || 0 === l.expirationTime) && null !== (l = t.lastRenderedReducer)) try {
                        var c = t.lastRenderedState,
                            s = l(c, n);
                        if (i.eagerReducer = l, i.eagerState = s, al(s, c)) return
                    } catch (f) {}
                    mu(e, a)
                }
            }
            var _i = {
                    readContext: ma,
                    useCallback: pi,
                    useContext: pi,
                    useEffect: pi,
                    useImperativeHandle: pi,
                    useLayoutEffect: pi,
                    useMemo: pi,
                    useReducer: pi,
                    useRef: pi,
                    useState: pi,
                    useDebugValue: pi,
                    useResponder: pi
                },
                Pi = {
                    readContext: ma,
                    useCallback: function(e, t) {
                        return gi().memoizedState = [e, void 0 === t ? null : t], e
                    },
                    useContext: ma,
                    useEffect: function(e, t) {
                        return Ei(516, 192, e, t)
                    },
                    useImperativeHandle: function(e, t, n) {
                        return n = null != n ? n.concat([e]) : null, Ei(4, 36, Ti.bind(null, t, e), n)
                    },
                    useLayoutEffect: function(e, t) {
                        return Ei(4, 36, e, t)
                    },
                    useMemo: function(e, t) {
                        var n = gi();
                        return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                    },
                    useReducer: function(e, t, n) {
                        var r = gi();
                        return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = (e = r.queue = {
                            last: null,
                            dispatch: null,
                            lastRenderedReducer: e,
                            lastRenderedState: t
                        }).dispatch = Ci.bind(null, ti, e), [r.memoizedState, e]
                    },
                    useRef: function(e) {
                        return e = {
                            current: e
                        }, gi().memoizedState = e
                    },
                    useState: function(e) {
                        var t = gi();
                        return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
                            last: null,
                            dispatch: null,
                            lastRenderedReducer: bi,
                            lastRenderedState: e
                        }).dispatch = Ci.bind(null, ti, e), [t.memoizedState, e]
                    },
                    useDebugValue: Si,
                    useResponder: Za
                },
                Ni = {
                    readContext: ma,
                    useCallback: function(e, t) {
                        var n = yi();
                        t = void 0 === t ? null : t;
                        var r = n.memoizedState;
                        return null !== r && null !== t && mi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
                    },
                    useContext: ma,
                    useEffect: function(e, t) {
                        return xi(516, 192, e, t)
                    },
                    useImperativeHandle: function(e, t, n) {
                        return n = null != n ? n.concat([e]) : null, xi(4, 36, Ti.bind(null, t, e), n)
                    },
                    useLayoutEffect: function(e, t) {
                        return xi(4, 36, e, t)
                    },
                    useMemo: function(e, t) {
                        var n = yi();
                        t = void 0 === t ? null : t;
                        var r = n.memoizedState;
                        return null !== r && null !== t && mi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
                    },
                    useReducer: ki,
                    useRef: function() {
                        return yi().memoizedState
                    },
                    useState: function(e) {
                        return ki(bi, e)
                    },
                    useDebugValue: Si,
                    useResponder: Za
                },
                zi = null,
                Mi = null,
                Ui = !1;

            function Fi(e, t) {
                var n = Yu(5, null, null, 0);
                n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
            }

            function Ii(e, t) {
                switch (e.tag) {
                    case 5:
                        var n = e.type;
                        return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
                    case 6:
                        return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
                    case 13:
                    default:
                        return !1
                }
            }

            function Ri(e) {
                if (Ui) {
                    var t = Mi;
                    if (t) {
                        var n = t;
                        if (!Ii(e, t)) {
                            if (!(t = cr(n.nextSibling)) || !Ii(e, t)) return e.effectTag = e.effectTag & ~St | Tt, Ui = !1, void(zi = e);
                            Fi(zi, n)
                        }
                        zi = e, Mi = cr(t.firstChild)
                    } else e.effectTag = e.effectTag & ~St | Tt, Ui = !1, zi = e
                }
            }

            function Oi(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                zi = e
            }

            function Di(e) {
                if (e !== zi) return !1;
                if (!Ui) return Oi(e), Ui = !0, !1;
                var t = e.type;
                if (5 !== e.tag || "head" !== t && "body" !== t && !ir(t, e.memoizedProps))
                    for (t = Mi; t;) Fi(e, t), t = cr(t.nextSibling);
                if (Oi(e), 13 === e.tag)
                    if (null === (e = null !== (e = e.memoizedState) ? e.dehydrated : null)) e = Mi;
                    else e: {
                        for (e = e.nextSibling, t = 0; e;) {
                            if (8 === e.nodeType) {
                                var n = e.data;
                                if (n === er) {
                                    if (0 === t) {
                                        e = cr(e.nextSibling);
                                        break e
                                    }
                                    t--
                                } else n !== Jn && n !== nr && n !== tr || t++
                            }
                            e = e.nextSibling
                        }
                        e = null
                    } else e = zi ? cr(e.stateNode.nextSibling) : null;
                return Mi = e, !0
            }

            function Li() {
                Mi = zi = null, Ui = !1
            }
            var Ai = M.ReactCurrentOwner,
                Wi = !1;

            function Vi(e, t, n, r) {
                t.child = null === e ? Wa(t, null, n, r) : Aa(t, e.child, n, r)
            }

            function Bi(e, t, n, r, l) {
                n = n.render;
                var a = t.ref;
                return pa(t, l), r = hi(e, t, n, r, a, l), null === e || Wi ? (t.effectTag |= 1, Vi(e, t, r, l), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= l && (e.expirationTime = 0), lo(e, t, l))
            }

            function ji(e, t, n, r, l, a) {
                if (null === e) {
                    var i = n.type;
                    return "function" != typeof i || Xu(i) || void 0 !== i.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Ju(n.type, null, r, null, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = i, Hi(e, t, i, r, l, a))
                }
                return i = e.child, l < a && (l = i.memoizedProps, (n = null !== (n = n.compare) ? n : ol)(l, r) && e.ref === t.ref) ? lo(e, t, a) : (t.effectTag |= 1, (e = Zu(i, r, a)).ref = t.ref, e.return = t, t.child = e)
            }

            function Hi(e, t, n, r, l, a) {
                return null !== e && ol(e.memoizedProps, r) && e.ref === t.ref && (Wi = !1, l < a) ? lo(e, t, a) : Ki(e, t, n, r, a)
            }

            function Qi(e, t) {
                var n = t.ref;
                (null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |= 128)
            }

            function Ki(e, t, n, r, l) {
                var a = Sl(n) ? xl : wl.current;
                return a = Tl(t, a), pa(t, l), n = hi(e, t, n, r, a, l), null === e || Wi ? (t.effectTag |= 1, Vi(e, t, n, l), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= l && (e.expirationTime = 0), lo(e, t, l))
            }

            function $i(e, t, n, r, l) {
                if (Sl(n)) {
                    var a = !0;
                    zl(t)
                } else a = !1;
                if (pa(t, l), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= Tt), Ua(t, n, r, l), Ia(t, n, r, l), r = !0;
                else if (null === e) {
                    var i = t.stateNode,
                        o = t.memoizedProps;
                    i.props = o;
                    var u = i.context,
                        c = n.contextType;
                    "object" == typeof c && null !== c ? c = ma(c) : c = Tl(t, c = Sl(n) ? xl : wl.current);
                    var s = n.getDerivedStateFromProps,
                        f = "function" == typeof s || "function" == typeof i.getSnapshotBeforeUpdate;
                    f || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (o !== r || u !== c) && Fa(t, i, r, c), ha = !1;
                    var d = t.memoizedState;
                    u = i.state = d;
                    var p = t.updateQueue;
                    null !== p && (Ta(t, p, r, i, l), u = t.memoizedState), o !== r || d !== u || El.current || ha ? ("function" == typeof s && (Na(t, n, s, r), u = t.memoizedState), (o = ha || Ma(t, n, o, r, d, u, c)) ? (f || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || ("function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" == typeof i.componentDidMount && (t.effectTag |= 4)) : ("function" == typeof i.componentDidMount && (t.effectTag |= 4), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = c, r = o) : ("function" == typeof i.componentDidMount && (t.effectTag |= 4), r = !1)
                } else i = t.stateNode, o = t.memoizedProps, i.props = t.type === t.elementType ? o : la(t.type, o), u = i.context, "object" == typeof(c = n.contextType) && null !== c ? c = ma(c) : c = Tl(t, c = Sl(n) ? xl : wl.current), (f = "function" == typeof(s = n.getDerivedStateFromProps) || "function" == typeof i.getSnapshotBeforeUpdate) || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (o !== r || u !== c) && Fa(t, i, r, c), ha = !1, u = t.memoizedState, d = i.state = u, null !== (p = t.updateQueue) && (Ta(t, p, r, i, l), d = t.memoizedState), o !== r || u !== d || El.current || ha ? ("function" == typeof s && (Na(t, n, s, r), d = t.memoizedState), (s = ha || Ma(t, n, o, r, u, d, c)) ? (f || "function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate || ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(r, d, c), "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, d, c)), "function" == typeof i.componentDidUpdate && (t.effectTag |= 4), "function" == typeof i.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" != typeof i.componentDidUpdate || o === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 4), "function" != typeof i.getSnapshotBeforeUpdate || o === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 256), t.memoizedProps = r, t.memoizedState = d), i.props = r, i.state = d, i.context = c, r = s) : ("function" != typeof i.componentDidUpdate || o === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 4), "function" != typeof i.getSnapshotBeforeUpdate || o === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 256), r = !1);
                return qi(e, t, n, r, a, l)
            }

            function qi(e, t, n, r, l, a) {
                Qi(e, t);
                var i = (64 & t.effectTag) !== xt;
                if (!r && !i) return l && Ml(t, n, !1), lo(e, t, a);
                r = t.stateNode, Ai.current = t;
                var o = i && "function" != typeof n.getDerivedStateFromError ? null : r.render();
                return t.effectTag |= 1, null !== e && i ? (t.child = Aa(t, e.child, null, a), t.child = Aa(t, null, o, a)) : Vi(e, t, o, a), t.memoizedState = r.state, l && Ml(t, n, !0), t.child
            }

            function Yi(e) {
                var t = e.stateNode;
                t.pendingContext ? Pl(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Pl(e, t.context, !1), Ka(e, t.containerInfo)
            }
            var Xi, Gi, Zi, Ji, eo = {
                dehydrated: null,
                retryTime: 1
            };

            function to(e, t, n) {
                var r, l = t.mode,
                    a = t.pendingProps,
                    i = Xa.current,
                    o = !1;
                if ((r = (64 & t.effectTag) !== xt) || (r = 0 != (2 & i) && (null === e || null !== e.memoizedState)), r ? (o = !0, t.effectTag &= -65) : null !== e && null === e.memoizedState || void 0 === a.fallback || !0 === a.unstable_avoidThisFallback || (i |= 1), bl(Xa, 1 & i, t), null === e) {
                    if (o) {
                        if (o = a.fallback, (a = ec(null, l, 0, null)).return = t, 0 == (2 & t.mode))
                            for (e = null !== t.memoizedState ? t.child.child : t.child, a.child = e; null !== e;) e.return = a, e = e.sibling;
                        return (n = ec(o, l, n, null)).return = t, a.sibling = n, t.memoizedState = eo, t.child = a, n
                    }
                    return l = a.children, t.memoizedState = null, t.child = Wa(t, null, l, n)
                }
                if (null !== e.memoizedState) {
                    if (l = (e = e.child).sibling, o) {
                        if (a = a.fallback, (n = Zu(e, e.pendingProps, 0)).return = t, 0 == (2 & t.mode) && (o = null !== t.memoizedState ? t.child.child : t.child) !== e.child)
                            for (n.child = o; null !== o;) o.return = n, o = o.sibling;
                        return (l = Zu(l, a, l.expirationTime)).return = t, n.sibling = l, n.childExpirationTime = 0, t.memoizedState = eo, t.child = n, l
                    }
                    return n = Aa(t, e.child, a.children, n), t.memoizedState = null, t.child = n
                }
                if (e = e.child, o) {
                    if (o = a.fallback, (a = ec(null, l, 0, null)).return = t, a.child = e, null !== e && (e.return = a), 0 == (2 & t.mode))
                        for (e = null !== t.memoizedState ? t.child.child : t.child, a.child = e; null !== e;) e.return = a, e = e.sibling;
                    return (n = ec(o, l, n, null)).return = t, a.sibling = n, n.effectTag |= Tt, a.childExpirationTime = 0, t.memoizedState = eo, t.child = a, n
                }
                return t.memoizedState = null, t.child = Aa(t, e, a.children, n)
            }

            function no(e, t, n, r, l) {
                var a = e.memoizedState;
                null === a ? e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    last: r,
                    tail: n,
                    tailExpiration: 0,
                    tailMode: l
                } : (a.isBackwards = t, a.rendering = null, a.last = r, a.tail = n, a.tailExpiration = 0, a.tailMode = l)
            }

            function ro(e, t, n) {
                var r = t.pendingProps,
                    l = r.revealOrder,
                    a = r.tail;
                if (Vi(e, t, r.children, n), 0 != (2 & (r = Xa.current))) r = 1 & r | 2, t.effectTag |= 64;
                else {
                    if (null !== e && (64 & e.effectTag) !== xt) e: for (e = t.child; null !== e;) {
                        if (13 === e.tag) {
                            if (null !== e.memoizedState) {
                                e.expirationTime < n && (e.expirationTime = n);
                                var i = e.alternate;
                                null !== i && i.expirationTime < n && (i.expirationTime = n), da(e.return, n)
                            }
                        } else if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                        if (e === t) break e;
                        for (; null === e.sibling;) {
                            if (null === e.return || e.return === t) break e;
                            e = e.return
                        }
                        e.sibling.return = e.return, e = e.sibling
                    }
                    r &= 1
                }
                if (bl(Xa, r, t), 0 == (2 & t.mode)) t.memoizedState = null;
                else switch (l) {
                    case "forwards":
                        for (n = t.child, l = null; null !== n;) null !== (r = n.alternate) && null === Ga(r) && (l = n), n = n.sibling;
                        null === (n = l) ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), no(t, !1, l, n, a);
                        break;
                    case "backwards":
                        for (n = null, l = t.child, t.child = null; null !== l;) {
                            if (null !== (r = l.alternate) && null === Ga(r)) {
                                t.child = l;
                                break
                            }
                            r = l.sibling, l.sibling = n, n = l, l = r
                        }
                        no(t, !0, n, null, a);
                        break;
                    case "together":
                        no(t, !1, null, null, void 0);
                        break;
                    default:
                        t.memoizedState = null
                }
                return t.child
            }

            function lo(e, t, n) {
                null !== e && (t.dependencies = e.dependencies);
                var l = t.expirationTime;
                if (0 !== l && zu(l), t.childExpirationTime < n) return null;
                if (null !== e && t.child !== e.child) throw r(Error(153));
                if (null !== t.child) {
                    for (n = Zu(e = t.child, e.pendingProps, e.expirationTime), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Zu(e, e.pendingProps, e.expirationTime)).return = t;
                    n.sibling = null
                }
                return t.child
            }

            function ao(e) {
                e.effectTag |= 4
            }

            function io(e, t) {
                switch (e.tailMode) {
                    case "hidden":
                        t = e.tail;
                        for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                        null === n ? e.tail = null : n.sibling = null;
                        break;
                    case "collapsed":
                        n = e.tail;
                        for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                        null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                }
            }

            function oo(e) {
                switch (e.tag) {
                    case 1:
                        Sl(e.type) && Cl(e);
                        var t = e.effectTag;
                        return 4096 & t ? (e.effectTag = -4097 & t | 64, e) : null;
                    case 3:
                        if ($a(e), _l(e), (64 & (t = e.effectTag)) !== xt) throw r(Error(285));
                        return e.effectTag = -4097 & t | 64, e;
                    case 5:
                        return Ya(e), null;
                    case 13:
                        return yl(Xa, e), 4096 & (t = e.effectTag) ? (e.effectTag = -4097 & t | 64, e) : null;
                    case 19:
                        return yl(Xa, e), null;
                    case 4:
                        return $a(e), null;
                    case 10:
                        return fa(e), null;
                    default:
                        return null
                }
            }

            function uo(e, t) {
                return {
                    value: e,
                    source: t,
                    stack: G(t)
                }
            }
            Xi = function(e, t) {
                for (var n = t.child; null !== n;) {
                    if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                    else if (4 !== n.tag && null !== n.child) {
                        n.child.return = n, n = n.child;
                        continue
                    }
                    if (n === t) break;
                    for (; null === n.sibling;) {
                        if (null === n.return || n.return === t) return;
                        n = n.return
                    }
                    n.sibling.return = n.return, n = n.sibling
                }
            }, Gi = function() {}, Zi = function(e, n, r, l, a) {
                var i = e.memoizedProps;
                if (i !== l) {
                    var o, u, c = n.stateNode;
                    switch (Qa(Ba.current), e = null, r) {
                        case "input":
                            i = Ne(c, i), l = Ne(c, l), e = [];
                            break;
                        case "option":
                            i = Oe(c, i), l = Oe(c, l), e = [];
                            break;
                        case "select":
                            i = t({}, i, {
                                value: void 0
                            }), l = t({}, l, {
                                value: void 0
                            }), e = [];
                            break;
                        case "textarea":
                            i = Le(c, i), l = Le(c, l), e = [];
                            break;
                        default:
                            "function" != typeof i.onClick && "function" == typeof l.onClick && (c.onclick = Kn)
                    }
                    for (o in jn(r, l), r = null, i)
                        if (!l.hasOwnProperty(o) && i.hasOwnProperty(o) && null != i[o])
                            if ("style" === o)
                                for (u in c = i[o]) c.hasOwnProperty(u) && (r || (r = {}), r[u] = "");
                            else "dangerouslySetInnerHTML" !== o && "children" !== o && "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && "autoFocus" !== o && (s.hasOwnProperty(o) ? e || (e = []) : (e = e || []).push(o, null));
                    for (o in l) {
                        var f = l[o];
                        if (c = null != i ? i[o] : void 0, l.hasOwnProperty(o) && f !== c && (null != f || null != c))
                            if ("style" === o)
                                if (c) {
                                    for (u in c) !c.hasOwnProperty(u) || f && f.hasOwnProperty(u) || (r || (r = {}), r[u] = "");
                                    for (u in f) f.hasOwnProperty(u) && c[u] !== f[u] && (r || (r = {}), r[u] = f[u])
                                } else r || (e || (e = []), e.push(o, r)), r = f;
                        else "dangerouslySetInnerHTML" === o ? (f = f ? f.__html : void 0, c = c ? c.__html : void 0, null != f && c !== f && (e = e || []).push(o, "" + f)) : "children" === o ? c === f || "string" != typeof f && "number" != typeof f || (e = e || []).push(o, "" + f) : "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && (s.hasOwnProperty(o) ? (null != f && Qn(a, o), e || c === f || (e = [])) : (e = e || []).push(o, f))
                    }
                    r && (e = e || []).push("style", r), a = e, (n.updateQueue = a) && ao(n)
                }
            }, Ji = function(e, t, n, r) {
                n !== r && ao(t)
            };
            var co = "function" == typeof WeakSet ? WeakSet : Set;

            function so(e, t) {
                var n = t.source,
                    r = t.stack;
                null === r && null !== n && (r = G(n)), null !== n && X(n.type), t = t.value, null !== e && 1 === e.tag && X(e.type);
                try {
                    console.error(t)
                } catch (l) {
                    setTimeout(function() {
                        throw l
                    })
                }
            }

            function fo(e, t) {
                try {
                    t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount()
                } catch (n) {
                    Bu(e, n)
                }
            }

            function po(e) {
                var t = e.ref;
                if (null !== t)
                    if ("function" == typeof t) try {
                        t(null)
                    } catch (n) {
                        Bu(e, n)
                    } else t.current = null
            }

            function mo(e, t) {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ho(2, 0, t);
                        break;
                    case 1:
                        if (256 & t.effectTag && null !== e) {
                            var n = e.memoizedProps,
                                l = e.memoizedState;
                            t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : la(t.type, n), l), e.__reactInternalSnapshotBeforeUpdate = t
                        }
                        break;
                    case 3:
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        throw r(Error(163))
                }
            }

            function ho(e, t, n) {
                if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
                    var r = n = n.next;
                    do {
                        if (0 != (r.tag & e)) {
                            var l = r.destroy;
                            r.destroy = void 0, void 0 !== l && l()
                        }
                        0 != (r.tag & t) && (l = r.create, r.destroy = l()), r = r.next
                    } while (r !== n)
                }
            }

            function vo(e, t, n) {
                switch ("function" == typeof Ku && Ku(t), t.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                            var r = e.next;
                            Jl(97 < n ? 97 : n, function() {
                                var e = r;
                                do {
                                    var n = e.destroy;
                                    if (void 0 !== n) {
                                        var l = t;
                                        try {
                                            n()
                                        } catch (a) {
                                            Bu(l, a)
                                        }
                                    }
                                    e = e.next
                                } while (e !== r)
                            })
                        }
                        break;
                    case 1:
                        po(t), "function" == typeof(n = t.stateNode).componentWillUnmount && fo(t, n);
                        break;
                    case 5:
                        po(t);
                        break;
                    case 4:
                        ko(e, t, n)
                }
            }

            function go(e) {
                var t = e.alternate;
                e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.alternate = null, e.firstEffect = null, e.lastEffect = null, e.pendingProps = null, e.memoizedProps = null, null !== t && go(t)
            }

            function yo(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag
            }

            function bo(e) {
                e: {
                    for (var t = e.return; null !== t;) {
                        if (yo(t)) {
                            var n = t;
                            break e
                        }
                        t = t.return
                    }
                    throw r(Error(160))
                }
                switch (t = n.stateNode, n.tag) {
                    case 5:
                        var l = !1;
                        break;
                    case 3:
                    case 4:
                        t = t.containerInfo, l = !0;
                        break;
                    default:
                        throw r(Error(161))
                }
                16 & n.effectTag && ($e(t, ""), n.effectTag &= -17);e: t: for (n = e;;) {
                    for (; null === n.sibling;) {
                        if (null === n.return || yo(n.return)) {
                            n = null;
                            break e
                        }
                        n = n.return
                    }
                    for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
                        if (n.effectTag & Tt) continue t;
                        if (null === n.child || 4 === n.tag) continue t;
                        n.child.return = n, n = n.child
                    }
                    if (!(n.effectTag & Tt)) {
                        n = n.stateNode;
                        break e
                    }
                }
                for (var a = e;;) {
                    var i = 5 === a.tag || 6 === a.tag;
                    if (i) {
                        var o = i ? a.stateNode : a.stateNode.instance;
                        if (n)
                            if (l) {
                                var u = o;
                                o = n, 8 === (i = t).nodeType ? i.parentNode.insertBefore(u, o) : i.insertBefore(u, o)
                            } else t.insertBefore(o, n);
                        else l ? (8 === (u = t).nodeType ? (i = u.parentNode).insertBefore(o, u) : (i = u).appendChild(o), null != (u = u._reactRootContainer) || null !== i.onclick || (i.onclick = Kn)) : t.appendChild(o)
                    } else if (4 !== a.tag && null !== a.child) {
                        a.child.return = a, a = a.child;
                        continue
                    }
                    if (a === e) break;
                    for (; null === a.sibling;) {
                        if (null === a.return || a.return === e) return;
                        a = a.return
                    }
                    a.sibling.return = a.return, a = a.sibling
                }
            }

            function ko(e, t, n) {
                for (var l, a, i = t, o = !1;;) {
                    if (!o) {
                        o = i.return;
                        e: for (;;) {
                            if (null === o) throw r(Error(160));
                            switch (l = o.stateNode, o.tag) {
                                case 5:
                                    a = !1;
                                    break e;
                                case 3:
                                case 4:
                                    l = l.containerInfo, a = !0;
                                    break e
                            }
                            o = o.return
                        }
                        o = !0
                    }
                    if (5 === i.tag || 6 === i.tag) {
                        e: for (var u = e, c = i, s = n, f = c;;)
                            if (vo(u, f, s), null !== f.child && 4 !== f.tag) f.child.return = f, f = f.child;
                            else {
                                if (f === c) break;
                                for (; null === f.sibling;) {
                                    if (null === f.return || f.return === c) break e;
                                    f = f.return
                                }
                                f.sibling.return = f.return, f = f.sibling
                            }a ? (u = l, c = i.stateNode, 8 === u.nodeType ? u.parentNode.removeChild(c) : u.removeChild(c)) : l.removeChild(i.stateNode)
                    } else if (4 === i.tag) {
                        if (null !== i.child) {
                            l = i.stateNode.containerInfo, a = !0, i.child.return = i, i = i.child;
                            continue
                        }
                    } else if (vo(e, i, n), null !== i.child) {
                        i.child.return = i, i = i.child;
                        continue
                    }
                    if (i === t) break;
                    for (; null === i.sibling;) {
                        if (null === i.return || i.return === t) return;
                        4 === (i = i.return).tag && (o = !1)
                    }
                    i.sibling.return = i.return, i = i.sibling
                }
            }

            function wo(e, t) {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        ho(4, 8, t);
                        break;
                    case 1:
                        break;
                    case 5:
                        var n = t.stateNode;
                        if (null != n) {
                            var l = t.memoizedProps,
                                a = null !== e ? e.memoizedProps : l;
                            e = t.type;
                            var i = t.updateQueue;
                            if (t.updateQueue = null, null !== i) {
                                for (n[pr] = l, "input" === e && "radio" === l.type && null != l.name && Me(n, l), Hn(e, a), t = Hn(e, l), a = 0; a < i.length; a += 2) {
                                    var o = i[a],
                                        u = i[a + 1];
                                    "style" === o ? Vn(n, u) : "dangerouslySetInnerHTML" === o ? Ke(n, u) : "children" === o ? $e(n, u) : Te(n, o, u, t)
                                }
                                switch (e) {
                                    case "input":
                                        Ue(n, l);
                                        break;
                                    case "textarea":
                                        We(n, l);
                                        break;
                                    case "select":
                                        t = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!l.multiple, null != (e = l.value) ? De(n, !!l.multiple, e, !1) : t !== !!l.multiple && (null != l.defaultValue ? De(n, !!l.multiple, l.defaultValue, !0) : De(n, !!l.multiple, l.multiple ? [] : "", !1))
                                }
                            }
                        }
                        break;
                    case 6:
                        if (null === t.stateNode) throw r(Error(162));
                        t.stateNode.nodeValue = t.memoizedProps;
                        break;
                    case 3:
                        (t = t.stateNode).hydrate && (t.hydrate = !1, Et(t.containerInfo));
                        break;
                    case 12:
                        break;
                    case 13:
                        if (n = t, null === t.memoizedState ? l = !1 : (l = !0, n = t.child, Go = Xl()), null !== n) e: for (e = n;;) {
                            if (5 === e.tag) i = e.stateNode, l ? "function" == typeof(i = i.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none" : (i = e.stateNode, a = null != (a = e.memoizedProps.style) && a.hasOwnProperty("display") ? a.display : null, i.style.display = Wn("display", a));
                            else if (6 === e.tag) e.stateNode.nodeValue = l ? "" : e.memoizedProps;
                            else {
                                if (13 === e.tag && null !== e.memoizedState && null === e.memoizedState.dehydrated) {
                                    (i = e.child.sibling).return = e, e = i;
                                    continue
                                }
                                if (null !== e.child) {
                                    e.child.return = e, e = e.child;
                                    continue
                                }
                            }
                            if (e === n) break e;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === n) break e;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                        Eo(t);
                        break;
                    case 19:
                        Eo(t);
                        break;
                    case 17:
                    case 20:
                    case 21:
                        break;
                    default:
                        throw r(Error(163))
                }
            }

            function Eo(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    e.updateQueue = null;
                    var n = e.stateNode;
                    null === n && (n = e.stateNode = new co), t.forEach(function(t) {
                        var r = Hu.bind(null, e, t);
                        n.has(t) || (n.add(t), t.then(r, r))
                    })
                }
            }
            var xo = "function" == typeof WeakMap ? WeakMap : Map;

            function To(e, t, n) {
                (n = ya(n, null)).tag = 3, n.payload = {
                    element: null
                };
                var r = t.value;
                return n.callback = function() {
                    eu || (eu = !0, tu = r), so(e, t)
                }, n
            }

            function So(e, t, n) {
                (n = ya(n, null)).tag = 3;
                var r = e.type.getDerivedStateFromError;
                if ("function" == typeof r) {
                    var l = t.value;
                    n.payload = function() {
                        return so(e, t), r(l)
                    }
                }
                var a = e.stateNode;
                return null !== a && "function" == typeof a.componentDidCatch && (n.callback = function() {
                    "function" != typeof r && (null === nu ? nu = new Set([this]) : nu.add(this), so(e, t));
                    var n = t.stack;
                    this.componentDidCatch(t.value, {
                        componentStack: null !== n ? n : ""
                    })
                }), n
            }
            var Co = Math.ceil,
                _o = M.ReactCurrentDispatcher,
                Po = M.ReactCurrentOwner,
                No = 0,
                zo = 8,
                Mo = 16,
                Uo = 32,
                Fo = 0,
                Io = 1,
                Ro = 2,
                Oo = 3,
                Do = 4,
                Lo = 5,
                Ao = 6,
                Wo = No,
                Vo = null,
                Bo = null,
                jo = 0,
                Ho = Fo,
                Qo = null,
                Ko = 1073741823,
                $o = 1073741823,
                qo = null,
                Yo = 0,
                Xo = !1,
                Go = 0,
                Zo = 500,
                Jo = null,
                eu = !1,
                tu = null,
                nu = null,
                ru = !1,
                lu = null,
                au = 90,
                iu = null,
                ou = 0,
                uu = null,
                cu = 0;

            function su() {
                return (Wo & (Mo | Uo)) !== No ? 1073741821 - (Xl() / 10 | 0) : 0 !== cu ? cu : cu = 1073741821 - (Xl() / 10 | 0)
            }

            function fu(e, t, n) {
                if (0 == (2 & (t = t.mode))) return 1073741823;
                var l = Gl();
                if (0 == (4 & t)) return 99 === l ? 1073741823 : 1073741822;
                if ((Wo & Mo) !== No) return jo;
                if (null !== n) e = 1073741821 - 25 * (1 + ((1073741821 - e + (0 | n.timeoutMs || 5e3) / 10) / 25 | 0));
                else switch (l) {
                    case 99:
                        e = 1073741823;
                        break;
                    case 98:
                        e = 1073741821 - 10 * (1 + ((1073741821 - e + 15) / 10 | 0));
                        break;
                    case 97:
                    case 96:
                        e = 1073741821 - 25 * (1 + ((1073741821 - e + 500) / 25 | 0));
                        break;
                    case 95:
                        e = 2;
                        break;
                    default:
                        throw r(Error(326))
                }
                return null !== Vo && e === jo && --e, e
            }
            var du, pu = 0;

            function mu(e, t) {
                if (50 < ou) throw ou = 0, uu = null, r(Error(185));
                if (null !== (e = hu(e, t))) {
                    var n = Gl();
                    1073741823 === t ? (Wo & zo) !== No && (Wo & (Mo | Uo)) === No ? bu(e) : (gu(e), Wo === No && na()) : gu(e), (4 & Wo) === No || 98 !== n && 99 !== n || (null === iu ? iu = new Map([
                        [e, t]
                    ]) : (void 0 === (n = iu.get(e)) || n > t) && iu.set(e, t))
                }
            }

            function hu(e, t) {
                e.expirationTime < t && (e.expirationTime = t);
                var n = e.alternate;
                null !== n && n.expirationTime < t && (n.expirationTime = t);
                var r = e.return,
                    l = null;
                if (null === r && 3 === e.tag) l = e.stateNode;
                else
                    for (; null !== r;) {
                        if (n = r.alternate, r.childExpirationTime < t && (r.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t), null === r.return && 3 === r.tag) {
                            l = r.stateNode;
                            break
                        }
                        r = r.return
                    }
                return null !== l && (Vo === l && (zu(t), Ho === Do && ac(l, jo)), ic(l, t)), l
            }

            function vu(e) {
                var t = e.lastExpiredTime;
                return 0 !== t ? t : lc(e, t = e.firstPendingTime) ? (t = e.lastPingedTime) > (e = e.nextKnownPendingLevel) ? t : e : t
            }

            function gu(e) {
                if (0 !== e.lastExpiredTime) e.callbackExpirationTime = 1073741823, e.callbackPriority = 99, e.callbackNode = ta(bu.bind(null, e));
                else {
                    var t = vu(e),
                        n = e.callbackNode;
                    if (0 === t) null !== n && (e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90);
                    else {
                        var r = su();
                        if (1073741823 === t ? r = 99 : 1 === t || 2 === t ? r = 95 : r = 0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r)) ? 99 : 250 >= r ? 98 : 5250 >= r ? 97 : 95, null !== n) {
                            var l = e.callbackPriority;
                            if (e.callbackExpirationTime === t && l >= r) return;
                            n !== Hl && Il(n)
                        }
                        e.callbackExpirationTime = t, e.callbackPriority = r, t = 1073741823 === t ? ta(bu.bind(null, e)) : ea(r, yu.bind(null, e), {
                            timeout: 10 * (1073741821 - t) - Xl()
                        }), e.callbackNode = t
                    }
                }
            }

            function yu(e, t) {
                if (cu = 0, t) return oc(e, t = su()), gu(e), null;
                var n = vu(e);
                if (0 !== n) {
                    if (t = e.callbackNode, (Wo & (Mo | Uo)) !== No) throw r(Error(327));
                    if (Au(), e === Vo && n === jo || Cu(e, n), null !== Bo) {
                        var l = Wo;
                        Wo |= Mo;
                        for (var a = Pu(e);;) try {
                            Uu();
                            break
                        } catch (u) {
                            _u(e, u)
                        }
                        if (ca(), Wo = l, _o.current = a, Ho === Io) throw t = Qo, Cu(e, n), ac(e, n), gu(e), t;
                        if (null === Bo) switch (a = e.finishedWork = e.current.alternate, e.finishedExpirationTime = n, wu(e, n), l = Ho, Vo = null, l) {
                            case Fo:
                            case Io:
                                throw r(Error(345));
                            case Ro:
                                if (2 !== n) {
                                    oc(e, 2);
                                    break
                                }
                                Ou(e);
                                break;
                            case Oo:
                                if (ac(e, n), n === (l = e.lastSuspendedTime) && (e.nextKnownPendingLevel = Ru(a)), 1073741823 === Ko && 10 < (a = Go + Zo - Xl())) {
                                    if (Xo) {
                                        var i = e.lastPingedTime;
                                        if (0 === i || i >= n) {
                                            e.lastPingedTime = n, Cu(e, n);
                                            break
                                        }
                                    }
                                    if (0 !== (i = vu(e)) && i !== n) break;
                                    if (0 !== l && l !== n) {
                                        e.lastPingedTime = l;
                                        break
                                    }
                                    e.timeoutHandle = or(Ou.bind(null, e), a);
                                    break
                                }
                                Ou(e);
                                break;
                            case Do:
                                if (ac(e, n), n === (l = e.lastSuspendedTime) && (e.nextKnownPendingLevel = Ru(a)), Xo && (0 === (a = e.lastPingedTime) || a >= n)) {
                                    e.lastPingedTime = n, Cu(e, n);
                                    break
                                }
                                if (0 !== (a = vu(e)) && a !== n) break;
                                if (0 !== l && l !== n) {
                                    e.lastPingedTime = l;
                                    break
                                }
                                if (1073741823 !== $o ? l = 10 * (1073741821 - $o) - Xl() : 1073741823 === Ko ? l = 0 : (l = 10 * (1073741821 - Ko) - 5e3, 0 > (l = (a = Xl()) - l) && (l = 0), (n = 10 * (1073741821 - n) - a) < (l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * Co(l / 1960)) - l) && (l = n)), 10 < l) {
                                    e.timeoutHandle = or(Ou.bind(null, e), l);
                                    break
                                }
                                Ou(e);
                                break;
                            case Lo:
                                if (1073741823 !== Ko && null !== qo) {
                                    i = Ko;
                                    var o = qo;
                                    if (0 >= (l = 0 | o.busyMinDurationMs) ? l = 0 : (a = 0 | o.busyDelayMs, l = (i = Xl() - (10 * (1073741821 - i) - (0 | o.timeoutMs || 5e3))) <= a ? 0 : a + l - i), 10 < l) {
                                        ac(e, n), e.timeoutHandle = or(Ou.bind(null, e), l);
                                        break
                                    }
                                }
                                Ou(e);
                                break;
                            case Ao:
                                ac(e, n);
                                break;
                            default:
                                throw r(Error(329))
                        }
                        if (gu(e), e.callbackNode === t) return yu.bind(null, e)
                    }
                }
                return null
            }

            function bu(e) {
                var t = e.lastExpiredTime;
                if (t = 0 !== t ? t : 1073741823, e.finishedExpirationTime === t) Ou(e);
                else {
                    if ((Wo & (Mo | Uo)) !== No) throw r(Error(327));
                    if (Au(), e === Vo && t === jo || Cu(e, t), null !== Bo) {
                        var n = Wo;
                        Wo |= Mo;
                        for (var l = Pu(e);;) try {
                            Mu();
                            break
                        } catch (a) {
                            _u(e, a)
                        }
                        if (ca(), Wo = n, _o.current = l, Ho === Io) throw n = Qo, Cu(e, t), ac(e, t), gu(e), n;
                        if (null !== Bo) throw r(Error(261));
                        e.finishedWork = e.current.alternate, e.finishedExpirationTime = t, wu(e, t), Ho === Ao ? ac(e, t) : (Vo = null, Ou(e)), gu(e)
                    }
                }
                return null
            }

            function ku() {
                (Wo & (1 | Mo | Uo)) === No && (Eu(), Au())
            }

            function wu(e, t) {
                var n = e.firstBatch;
                null !== n && n._defer && n._expirationTime >= t && (ea(97, function() {
                    return n._onComplete(), null
                }), Ho = Ao)
            }

            function Eu() {
                if (null !== iu) {
                    var e = iu;
                    iu = null, e.forEach(function(e, t) {
                        oc(t, e), gu(t)
                    }), na()
                }
            }

            function xu(e, t) {
                var n = Wo;
                Wo |= 1;
                try {
                    return e(t)
                } finally {
                    (Wo = n) === No && na()
                }
            }

            function Tu(e, t, n, r) {
                var l = Wo;
                Wo |= 4;
                try {
                    return Jl(98, e.bind(null, t, n, r))
                } finally {
                    (Wo = l) === No && na()
                }
            }

            function Su(e, t) {
                var n = Wo;
                Wo &= -2, Wo |= zo;
                try {
                    return e(t)
                } finally {
                    (Wo = n) === No && na()
                }
            }

            function Cu(e, t) {
                e.finishedWork = null, e.finishedExpirationTime = 0;
                var n = e.timeoutHandle;
                if (-1 !== n && (e.timeoutHandle = -1, ur(n)), null !== Bo)
                    for (n = Bo.return; null !== n;) {
                        var r = n;
                        switch (r.tag) {
                            case 1:
                                var l = r.type.childContextTypes;
                                null != l && Cl(r);
                                break;
                            case 3:
                                $a(r), _l(r);
                                break;
                            case 5:
                                Ya(r);
                                break;
                            case 4:
                                $a(r);
                                break;
                            case 13:
                            case 19:
                                yl(Xa, r);
                                break;
                            case 10:
                                fa(r)
                        }
                        n = n.return
                    }
                Vo = e, Bo = Zu(e.current, null, t), jo = t, Ho = Fo, Qo = null, $o = Ko = 1073741823, qo = null, Yo = 0, Xo = !1
            }

            function _u(e, t) {
                for (;;) {
                    try {
                        if (ca(), vi(), null === Bo || null === Bo.return) return Ho = Io, Qo = t, null;
                        e: {
                            var n = e,
                                r = Bo.return,
                                l = Bo,
                                a = t;
                            if (t = jo, l.effectTag |= 2048, l.firstEffect = l.lastEffect = null, null !== a && "object" == typeof a && "function" == typeof a.then) {
                                var i = a,
                                    o = 0 != (1 & Xa.current),
                                    u = r;
                                do {
                                    var c;
                                    if (c = 13 === u.tag) {
                                        var s = u.memoizedState;
                                        if (null !== s) c = null !== s.dehydrated;
                                        else {
                                            var f = u.memoizedProps;
                                            c = void 0 !== f.fallback && (!0 !== f.unstable_avoidThisFallback || !o)
                                        }
                                    }
                                    if (c) {
                                        var d = u.updateQueue;
                                        if (null === d) {
                                            var p = new Set;
                                            p.add(i), u.updateQueue = p
                                        } else d.add(i);
                                        if (0 == (2 & u.mode)) {
                                            if (u.effectTag |= 64, l.effectTag &= -2981, 1 === l.tag)
                                                if (null === l.alternate) l.tag = 17;
                                                else {
                                                    var m = ya(1073741823, null);
                                                    m.tag = 2, ka(l, m)
                                                }
                                            l.expirationTime = 1073741823;
                                            break e
                                        }
                                        a = void 0, l = t;
                                        var h = n.pingCache;
                                        if (null === h ? (h = n.pingCache = new xo, a = new Set, h.set(i, a)) : void 0 === (a = h.get(i)) && (a = new Set, h.set(i, a)), !a.has(l)) {
                                            a.add(l);
                                            var v = ju.bind(null, n, i, l);
                                            i.then(v, v)
                                        }
                                        u.effectTag |= 4096, u.expirationTime = t;
                                        break e
                                    }
                                    u = u.return
                                } while (null !== u);
                                a = Error((X(l.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + G(l))
                            }
                            Ho !== Lo && (Ho = Ro), a = uo(a, l), u = r;
                            do {
                                switch (u.tag) {
                                    case 3:
                                        i = a, u.effectTag |= 4096, u.expirationTime = t, wa(u, To(u, i, t));
                                        break e;
                                    case 1:
                                        i = a;
                                        var g = u.type,
                                            y = u.stateNode;
                                        if ((64 & u.effectTag) === xt && ("function" == typeof g.getDerivedStateFromError || null !== y && "function" == typeof y.componentDidCatch && (null === nu || !nu.has(y)))) {
                                            u.effectTag |= 4096, u.expirationTime = t, wa(u, So(u, i, t));
                                            break e
                                        }
                                }
                                u = u.return
                            } while (null !== u)
                        }
                        Bo = Iu(Bo)
                    } catch (b) {
                        t = b;
                        continue
                    }
                    break
                }
            }

            function Pu() {
                var e = _o.current;
                return _o.current = _i, null === e ? _i : e
            }

            function Nu(e, t) {
                e < Ko && 2 < e && (Ko = e), null !== t && e < $o && 2 < e && ($o = e, qo = t)
            }

            function zu(e) {
                e > Yo && (Yo = e)
            }

            function Mu() {
                for (; null !== Bo;) Bo = Fu(Bo)
            }

            function Uu() {
                for (; null !== Bo && !Rl();) Bo = Fu(Bo)
            }

            function Fu(e) {
                var t = du(e.alternate, e, jo);
                return e.memoizedProps = e.pendingProps, null === t && (t = Iu(e)), Po.current = null, t
            }

            function Iu(e) {
                Bo = e;
                do {
                    var n = Bo.alternate;
                    if (e = Bo.return, (2048 & Bo.effectTag) === xt) {
                        e: {
                            var l = n,
                                a = jo,
                                i = (n = Bo).pendingProps;
                            switch (n.tag) {
                                case 2:
                                case 16:
                                    break;
                                case 15:
                                case 0:
                                    break;
                                case 1:
                                    Sl(n.type) && Cl(n);
                                    break;
                                case 3:
                                    $a(n), _l(n), (a = n.stateNode).pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (null === l || null === l.child) && Di(n) && ao(n), Gi(n);
                                    break;
                                case 5:
                                    Ya(n), a = Qa(Ha.current);
                                    var o = n.type;
                                    if (null !== l && null != n.stateNode) Zi(l, n, o, i, a), l.ref !== n.ref && (n.effectTag |= 128);
                                    else if (i) {
                                        var u = Qa(Ba.current);
                                        if (Di(n)) {
                                            o = void 0, l = (i = n).stateNode;
                                            var c = i.type,
                                                f = i.memoizedProps;
                                            switch (l[dr] = i, l[pr] = f, c) {
                                                case "iframe":
                                                case "object":
                                                case "embed":
                                                    _n("load", l);
                                                    break;
                                                case "video":
                                                case "audio":
                                                    for (var d = 0; d < rt.length; d++) _n(rt[d], l);
                                                    break;
                                                case "source":
                                                    _n("error", l);
                                                    break;
                                                case "img":
                                                case "image":
                                                case "link":
                                                    _n("error", l), _n("load", l);
                                                    break;
                                                case "form":
                                                    _n("reset", l), _n("submit", l);
                                                    break;
                                                case "details":
                                                    _n("toggle", l);
                                                    break;
                                                case "input":
                                                    ze(l, f), _n("invalid", l), Qn(a, "onChange");
                                                    break;
                                                case "select":
                                                    l._wrapperState = {
                                                        wasMultiple: !!f.multiple
                                                    }, _n("invalid", l), Qn(a, "onChange");
                                                    break;
                                                case "textarea":
                                                    Ae(l, f), _n("invalid", l), Qn(a, "onChange")
                                            }
                                            for (o in jn(c, f), d = null, f) f.hasOwnProperty(o) && (u = f[o], "children" === o ? "string" == typeof u ? l.textContent !== u && (d = ["children", u]) : "number" == typeof u && l.textContent !== "" + u && (d = ["children", "" + u]) : s.hasOwnProperty(o) && null != u && Qn(a, o));
                                            switch (c) {
                                                case "input":
                                                    _e(l), Fe(l, f, !0);
                                                    break;
                                                case "textarea":
                                                    _e(l), Ve(l, f);
                                                    break;
                                                case "select":
                                                case "option":
                                                    break;
                                                default:
                                                    "function" == typeof f.onClick && (l.onclick = Kn)
                                            }
                                            a = d, i.updateQueue = a, null !== a && ao(n)
                                        } else {
                                            f = o, l = i, c = n, d = 9 === a.nodeType ? a : a.ownerDocument, u === Be.html && (u = je(f)), u === Be.html ? "script" === f ? ((f = d.createElement("div")).innerHTML = "<script><\/script>", d = f.removeChild(f.firstChild)) : "string" == typeof l.is ? d = d.createElement(f, {
                                                is: l.is
                                            }) : (d = d.createElement(f), "select" === f && (f = d, l.multiple ? f.multiple = !0 : l.size && (f.size = l.size))) : d = d.createElementNS(u, f), (f = d)[dr] = c, f[pr] = l, Xi(l = f, n, !1, !1), n.stateNode = l, u = a;
                                            var p = Hn(o, i);
                                            switch (o) {
                                                case "iframe":
                                                case "object":
                                                case "embed":
                                                    _n("load", l), a = i;
                                                    break;
                                                case "video":
                                                case "audio":
                                                    for (a = 0; a < rt.length; a++) _n(rt[a], l);
                                                    a = i;
                                                    break;
                                                case "source":
                                                    _n("error", l), a = i;
                                                    break;
                                                case "img":
                                                case "image":
                                                case "link":
                                                    _n("error", l), _n("load", l), a = i;
                                                    break;
                                                case "form":
                                                    _n("reset", l), _n("submit", l), a = i;
                                                    break;
                                                case "details":
                                                    _n("toggle", l), a = i;
                                                    break;
                                                case "input":
                                                    ze(l, i), a = Ne(l, i), _n("invalid", l), Qn(u, "onChange");
                                                    break;
                                                case "option":
                                                    a = Oe(l, i);
                                                    break;
                                                case "select":
                                                    l._wrapperState = {
                                                        wasMultiple: !!i.multiple
                                                    }, a = t({}, i, {
                                                        value: void 0
                                                    }), _n("invalid", l), Qn(u, "onChange");
                                                    break;
                                                case "textarea":
                                                    Ae(l, i), a = Le(l, i), _n("invalid", l), Qn(u, "onChange");
                                                    break;
                                                default:
                                                    a = i
                                            }
                                            jn(o, a), c = void 0, f = o, d = l;
                                            var m = a;
                                            for (c in m)
                                                if (m.hasOwnProperty(c)) {
                                                    var h = m[c];
                                                    "style" === c ? Vn(d, h) : "dangerouslySetInnerHTML" === c ? null != (h = h ? h.__html : void 0) && Ke(d, h) : "children" === c ? "string" == typeof h ? ("textarea" !== f || "" !== h) && $e(d, h) : "number" == typeof h && $e(d, "" + h) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (s.hasOwnProperty(c) ? null != h && Qn(u, c) : null != h && Te(d, c, h, p))
                                                }
                                            switch (o) {
                                                case "input":
                                                    _e(l), Fe(l, i, !1);
                                                    break;
                                                case "textarea":
                                                    _e(l), Ve(l, i);
                                                    break;
                                                case "option":
                                                    null != i.value && l.setAttribute("value", "" + xe(i.value));
                                                    break;
                                                case "select":
                                                    a = l, l = i, a.multiple = !!l.multiple, null != (c = l.value) ? De(a, !!l.multiple, c, !1) : null != l.defaultValue && De(a, !!l.multiple, l.defaultValue, !0);
                                                    break;
                                                default:
                                                    "function" == typeof a.onClick && (l.onclick = Kn)
                                            }
                                            ar(o, i) && ao(n)
                                        }
                                        null !== n.ref && (n.effectTag |= 128)
                                    } else if (null === n.stateNode) throw r(Error(166));
                                    break;
                                case 6:
                                    if (l && null != n.stateNode) Ji(l, n, l.memoizedProps, i);
                                    else {
                                        if ("string" != typeof i && null === n.stateNode) throw r(Error(166));
                                        o = Qa(Ha.current), Qa(Ba.current), Di(n) ? (a = n.stateNode, i = n.memoizedProps, a[dr] = n, a.nodeValue !== i && ao(n)) : (a = n, (i = (9 === o.nodeType ? o : o.ownerDocument).createTextNode(i))[dr] = n, a.stateNode = i)
                                    }
                                    break;
                                case 11:
                                    break;
                                case 13:
                                    if (yl(Xa, n), i = n.memoizedState, (64 & n.effectTag) !== xt) {
                                        n.expirationTime = a;
                                        break e
                                    }
                                    a = null !== i, i = !1, null === l ? Di(n) : (i = null !== (o = l.memoizedState), a || null === o || null !== (o = l.child.sibling) && (null !== (c = n.firstEffect) ? (n.firstEffect = o, o.nextEffect = c) : (n.firstEffect = n.lastEffect = o, o.nextEffect = null), o.effectTag = 8)), a && !i && 0 != (2 & n.mode) && (null === l && !0 !== n.memoizedProps.unstable_avoidThisFallback || 0 != (1 & Xa.current) ? Ho === Fo && (Ho = Oo) : (Ho !== Fo && Ho !== Oo || (Ho = Do), 0 !== Yo && null !== Vo && (ac(Vo, jo), ic(Vo, Yo)))), (a || i) && (n.effectTag |= 4);
                                    break;
                                case 7:
                                case 8:
                                case 12:
                                    break;
                                case 4:
                                    $a(n), Gi(n);
                                    break;
                                case 10:
                                    fa(n);
                                    break;
                                case 9:
                                case 14:
                                    break;
                                case 17:
                                    Sl(n.type) && Cl(n);
                                    break;
                                case 19:
                                    if (yl(Xa, n), null === (i = n.memoizedState)) break;
                                    if (o = (64 & n.effectTag) !== xt, null === (c = i.rendering)) {
                                        if (o) io(i, !1);
                                        else if (Ho !== Fo || null !== l && (64 & l.effectTag) !== xt)
                                            for (l = n.child; null !== l;) {
                                                if (null !== (c = Ga(l))) {
                                                    for (n.effectTag |= 64, io(i, !1), null !== (i = c.updateQueue) && (n.updateQueue = i, n.effectTag |= 4), n.firstEffect = n.lastEffect = null, i = n.child; null !== i;) l = a, (o = i).effectTag &= Tt, o.nextEffect = null, o.firstEffect = null, o.lastEffect = null, null === (c = o.alternate) ? (o.childExpirationTime = 0, o.expirationTime = l, o.child = null, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null) : (o.childExpirationTime = c.childExpirationTime, o.expirationTime = c.expirationTime, o.child = c.child, o.memoizedProps = c.memoizedProps, o.memoizedState = c.memoizedState, o.updateQueue = c.updateQueue, l = c.dependencies, o.dependencies = null === l ? null : {
                                                        expirationTime: l.expirationTime,
                                                        firstContext: l.firstContext,
                                                        responders: l.responders
                                                    }), i = i.sibling;
                                                    bl(Xa, 1 & Xa.current | 2, n), n = n.child;
                                                    break e
                                                }
                                                l = l.sibling
                                            }
                                    } else {
                                        if (!o)
                                            if (null !== (l = Ga(c))) {
                                                if (n.effectTag |= 64, o = !0, io(i, !0), null === i.tail && "hidden" === i.tailMode) {
                                                    null !== (a = l.updateQueue) && (n.updateQueue = a, n.effectTag |= 4), null !== (n = n.lastEffect = i.lastEffect) && (n.nextEffect = null);
                                                    break
                                                }
                                            } else Xl() > i.tailExpiration && 1 < a && (n.effectTag |= 64, o = !0, io(i, !1), n.expirationTime = n.childExpirationTime = a - 1);
                                        i.isBackwards ? (c.sibling = n.child, n.child = c) : (null !== (a = i.last) ? a.sibling = c : n.child = c, i.last = c)
                                    }
                                    if (null !== i.tail) {
                                        0 === i.tailExpiration && (i.tailExpiration = Xl() + 500), a = i.tail, i.rendering = a, i.tail = a.sibling, i.lastEffect = n.lastEffect, a.sibling = null, i = Xa.current, bl(Xa, i = o ? 1 & i | 2 : 1 & i, n), n = a;
                                        break e
                                    }
                                    break;
                                case 20:
                                case 21:
                                    break;
                                default:
                                    throw r(Error(156), n.tag)
                            }
                            n = null
                        }
                        if (a = Bo, 1 === jo || 1 !== a.childExpirationTime) {
                            for (i = 0, o = a.child; null !== o;)(l = o.expirationTime) > i && (i = l), (c = o.childExpirationTime) > i && (i = c), o = o.sibling;
                            a.childExpirationTime = i
                        }
                        if (null !== n) return n;null !== e && (2048 & e.effectTag) === xt && (null === e.firstEffect && (e.firstEffect = Bo.firstEffect), null !== Bo.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = Bo.firstEffect), e.lastEffect = Bo.lastEffect), 1 < Bo.effectTag && (null !== e.lastEffect ? e.lastEffect.nextEffect = Bo : e.firstEffect = Bo, e.lastEffect = Bo))
                    } else {
                        if (null !== (n = oo(Bo, jo))) return n.effectTag &= 2047, n;
                        null !== e && (e.firstEffect = e.lastEffect = null, e.effectTag |= 2048)
                    }
                    if (null !== (n = Bo.sibling)) return n;
                    Bo = e
                } while (null !== Bo);
                return Ho === Fo && (Ho = Lo), null
            }

            function Ru(e) {
                var t = e.expirationTime;
                return t > (e = e.childExpirationTime) ? t : e
            }

            function Ou(e) {
                var t = Gl();
                return Jl(99, Du.bind(null, e, t)), null
            }

            function Du(e, t) {
                if (Au(), (Wo & (Mo | Uo)) !== No) throw r(Error(327));
                var n = e.finishedWork,
                    l = e.finishedExpirationTime;
                if (null === n) return null;
                if (e.finishedWork = null, e.finishedExpirationTime = 0, n === e.current) throw r(Error(177));
                e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90, e.nextKnownPendingLevel = 0;
                var a = Ru(n);
                if (e.firstPendingTime = a, l <= e.lastSuspendedTime ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : l <= e.firstSuspendedTime && (e.firstSuspendedTime = l - 1), l <= e.lastPingedTime && (e.lastPingedTime = 0), l <= e.lastExpiredTime && (e.lastExpiredTime = 0), e === Vo && (Bo = Vo = null, jo = 0), 1 < n.effectTag ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, a = n.firstEffect) : a = n : a = n.firstEffect, null !== a) {
                    var i = Wo;
                    Wo |= Uo, Po.current = null, rr = Cn;
                    var o = Gn();
                    if (Zn(o)) {
                        if ("selectionStart" in o) var u = {
                            start: o.selectionStart,
                            end: o.selectionEnd
                        };
                        else e: {
                            var c = (u = (u = o.ownerDocument) && u.defaultView || window).getSelection && u.getSelection();
                            if (c && 0 !== c.rangeCount) {
                                u = c.anchorNode;
                                var s = c.anchorOffset,
                                    f = c.focusNode;
                                c = c.focusOffset;
                                try {
                                    u.nodeType, f.nodeType
                                } catch (O) {
                                    u = null;
                                    break e
                                }
                                var d = 0,
                                    p = -1,
                                    m = -1,
                                    h = 0,
                                    v = 0,
                                    g = o,
                                    y = null;
                                t: for (;;) {
                                    for (var b; g !== u || 0 !== s && 3 !== g.nodeType || (p = d + s), g !== f || 0 !== c && 3 !== g.nodeType || (m = d + c), 3 === g.nodeType && (d += g.nodeValue.length), null !== (b = g.firstChild);) y = g, g = b;
                                    for (;;) {
                                        if (g === o) break t;
                                        if (y === u && ++h === s && (p = d), y === f && ++v === c && (m = d), null !== (b = g.nextSibling)) break;
                                        y = (g = y).parentNode
                                    }
                                    g = b
                                }
                                u = -1 === p || -1 === m ? null : {
                                    start: p,
                                    end: m
                                }
                            } else u = null
                        }
                        u = u || {
                            start: 0,
                            end: 0
                        }
                    } else u = null;
                    lr = {
                        focusedElem: o,
                        selectionRange: u
                    }, Cn = !1, Jo = a;
                    do {
                        try {
                            Lu()
                        } catch (O) {
                            if (null === Jo) throw r(Error(330));
                            Bu(Jo, O), Jo = Jo.nextEffect
                        }
                    } while (null !== Jo);
                    Jo = a;
                    do {
                        try {
                            for (o = e, u = t; null !== Jo;) {
                                var k = Jo.effectTag;
                                if (16 & k && $e(Jo.stateNode, ""), 128 & k) {
                                    var w = Jo.alternate;
                                    if (null !== w) {
                                        var E = w.ref;
                                        null !== E && ("function" == typeof E ? E(null) : E.current = null)
                                    }
                                }
                                switch (k & (12 | Tt | St)) {
                                    case Tt:
                                        bo(Jo), Jo.effectTag &= ~Tt;
                                        break;
                                    case 6:
                                        bo(Jo), Jo.effectTag &= ~Tt, wo(Jo.alternate, Jo);
                                        break;
                                    case St:
                                        Jo.effectTag &= ~St;
                                        break;
                                    case 1028:
                                        Jo.effectTag &= ~St, wo(Jo.alternate, Jo);
                                        break;
                                    case 4:
                                        wo(Jo.alternate, Jo);
                                        break;
                                    case 8:
                                        ko(o, s = Jo, u), go(s)
                                }
                                Jo = Jo.nextEffect
                            }
                        } catch (O) {
                            if (null === Jo) throw r(Error(330));
                            Bu(Jo, O), Jo = Jo.nextEffect
                        }
                    } while (null !== Jo);
                    if (E = lr, w = Gn(), k = E.focusedElem, u = E.selectionRange, w !== k && k && k.ownerDocument && Xn(k.ownerDocument.documentElement, k)) {
                        null !== u && Zn(k) && (w = u.start, void 0 === (E = u.end) && (E = w), "selectionStart" in k ? (k.selectionStart = w, k.selectionEnd = Math.min(E, k.value.length)) : (E = (w = k.ownerDocument || document) && w.defaultView || window).getSelection && (E = E.getSelection(), s = k.textContent.length, o = Math.min(u.start, s), u = void 0 === u.end ? o : Math.min(u.end, s), !E.extend && o > u && (s = u, u = o, o = s), s = Yn(k, o), f = Yn(k, u), s && f && (1 !== E.rangeCount || E.anchorNode !== s.node || E.anchorOffset !== s.offset || E.focusNode !== f.node || E.focusOffset !== f.offset) && ((w = w.createRange()).setStart(s.node, s.offset), E.removeAllRanges(), o > u ? (E.addRange(w), E.extend(f.node, f.offset)) : (w.setEnd(f.node, f.offset), E.addRange(w))))), w = [];
                        for (E = k; E = E.parentNode;) 1 === E.nodeType && w.push({
                            element: E,
                            left: E.scrollLeft,
                            top: E.scrollTop
                        });
                        for ("function" == typeof k.focus && k.focus(), k = 0; k < w.length; k++)(E = w[k]).element.scrollLeft = E.left, E.element.scrollTop = E.top
                    }
                    lr = null, Cn = !!rr, rr = null, e.current = n, Jo = a;
                    do {
                        try {
                            for (k = l; null !== Jo;) {
                                var x = Jo.effectTag;
                                if (36 & x) {
                                    var T = Jo.alternate;
                                    switch (E = k, (w = Jo).tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ho(16, 32, w);
                                            break;
                                        case 1:
                                            var S = w.stateNode;
                                            if (4 & w.effectTag)
                                                if (null === T) S.componentDidMount();
                                                else {
                                                    var C = w.elementType === w.type ? T.memoizedProps : la(w.type, T.memoizedProps);
                                                    S.componentDidUpdate(C, T.memoizedState, S.__reactInternalSnapshotBeforeUpdate)
                                                }
                                            var _ = w.updateQueue;
                                            null !== _ && Sa(w, _, S, E);
                                            break;
                                        case 3:
                                            var P = w.updateQueue;
                                            if (null !== P) {
                                                if (o = null, null !== w.child) switch (w.child.tag) {
                                                    case 5:
                                                        o = w.child.stateNode;
                                                        break;
                                                    case 1:
                                                        o = w.child.stateNode
                                                }
                                                Sa(w, P, o, E)
                                            }
                                            break;
                                        case 5:
                                            var N = w.stateNode;
                                            null === T && 4 & w.effectTag && (E = N, ar(w.type, w.memoizedProps) && E.focus());
                                            break;
                                        case 6:
                                        case 4:
                                        case 12:
                                            break;
                                        case 13:
                                            if (null === w.memoizedState) {
                                                var z = w.alternate;
                                                if (null !== z) {
                                                    var M = z.memoizedState;
                                                    if (null !== M) {
                                                        var U = M.dehydrated;
                                                        null !== U && Et(U)
                                                    }
                                                }
                                            }
                                            break;
                                        case 19:
                                        case 17:
                                        case 20:
                                        case 21:
                                            break;
                                        default:
                                            throw r(Error(163))
                                    }
                                }
                                if (128 & x) {
                                    var F = (w = Jo).ref;
                                    if (null !== F) {
                                        var I = w.stateNode;
                                        switch (w.tag) {
                                            case 5:
                                                var R = I;
                                                break;
                                            default:
                                                R = I
                                        }
                                        "function" == typeof F ? F(R) : F.current = R
                                    }
                                }
                                Jo = Jo.nextEffect
                            }
                        } catch (O) {
                            if (null === Jo) throw r(Error(330));
                            Bu(Jo, O), Jo = Jo.nextEffect
                        }
                    } while (null !== Jo);
                    Jo = null, Ql(), Wo = i
                } else e.current = n;
                if (ru) ru = !1, lu = e, au = t;
                else
                    for (Jo = a; null !== Jo;) t = Jo.nextEffect, Jo.nextEffect = null, Jo = t;
                if (0 === (t = e.firstPendingTime) && (nu = null), 1073741823 === t ? e === uu ? ou++ : (ou = 0, uu = e) : ou = 0, "function" == typeof Qu && Qu(n.stateNode, l), gu(e), eu) throw eu = !1, e = tu, tu = null, e;
                return (Wo & zo) !== No ? null : (na(), null)
            }

            function Lu() {
                for (; null !== Jo;) {
                    var e = Jo.effectTag;
                    (256 & e) !== xt && mo(Jo.alternate, Jo), (512 & e) === xt || ru || (ru = !0, ea(97, function() {
                        return Au(), null
                    })), Jo = Jo.nextEffect
                }
            }

            function Au() {
                if (90 !== au) {
                    var e = 97 < au ? 97 : au;
                    return au = 90, Jl(e, Wu)
                }
            }

            function Wu() {
                if (null === lu) return !1;
                var e = lu;
                if (lu = null, (Wo & (Mo | Uo)) !== No) throw r(Error(331));
                var t = Wo;
                for (Wo |= Uo, e = e.current.firstEffect; null !== e;) {
                    try {
                        var n = e;
                        if ((512 & n.effectTag) !== xt) switch (n.tag) {
                            case 0:
                            case 11:
                            case 15:
                                ho(128, 0, n), ho(0, 64, n)
                        }
                    } catch (l) {
                        if (null === e) throw r(Error(330));
                        Bu(e, l)
                    }
                    n = e.nextEffect, e.nextEffect = null, e = n
                }
                return Wo = t, na(), !0
            }

            function Vu(e, t, n) {
                ka(e, t = To(e, t = uo(n, t), 1073741823)), null !== (e = hu(e, 1073741823)) && gu(e)
            }

            function Bu(e, t) {
                if (3 === e.tag) Vu(e, e, t);
                else
                    for (var n = e.return; null !== n;) {
                        if (3 === n.tag) {
                            Vu(n, e, t);
                            break
                        }
                        if (1 === n.tag) {
                            var r = n.stateNode;
                            if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === nu || !nu.has(r))) {
                                ka(n, e = So(n, e = uo(t, e), 1073741823)), null !== (n = hu(n, 1073741823)) && gu(n);
                                break
                            }
                        }
                        n = n.return
                    }
            }

            function ju(e, t, n) {
                var r = e.pingCache;
                null !== r && r.delete(t), Vo === e && jo === n ? Ho === Do || Ho === Oo && 1073741823 === Ko && Xl() - Go < Zo ? Cu(e, jo) : Xo = !0 : lc(e, n) && (0 !== (t = e.lastPingedTime) && t < n || (e.lastPingedTime = n, e.finishedExpirationTime === n && (e.finishedExpirationTime = 0, e.finishedWork = null), gu(e)))
            }

            function Hu(e, t) {
                var n = e.stateNode;
                null !== n && n.delete(t), 1 === (t = 1) && (t = fu(t = su(), e, null)), null !== (e = hu(e, t)) && gu(e)
            }
            du = function(e, t, n) {
                var l = t.expirationTime;
                if (null !== e) {
                    var a = t.pendingProps;
                    if (e.memoizedProps !== a || El.current) Wi = !0;
                    else {
                        if (l < n) {
                            switch (Wi = !1, t.tag) {
                                case 3:
                                    Yi(t), Li();
                                    break;
                                case 5:
                                    if (qa(t), 4 & t.mode && 1 !== n && a.hidden) return t.expirationTime = t.childExpirationTime = 1, null;
                                    break;
                                case 1:
                                    Sl(t.type) && zl(t);
                                    break;
                                case 4:
                                    Ka(t, t.stateNode.containerInfo);
                                    break;
                                case 10:
                                    sa(t, t.memoizedProps.value);
                                    break;
                                case 13:
                                    if (null !== t.memoizedState) return 0 !== (l = t.child.childExpirationTime) && l >= n ? to(e, t, n) : (bl(Xa, 1 & Xa.current, t), null !== (t = lo(e, t, n)) ? t.sibling : null);
                                    bl(Xa, 1 & Xa.current, t);
                                    break;
                                case 19:
                                    if (l = t.childExpirationTime >= n, (64 & e.effectTag) !== xt) {
                                        if (l) return ro(e, t, n);
                                        t.effectTag |= 64
                                    }
                                    if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null), bl(Xa, Xa.current, t), !l) return null
                            }
                            return lo(e, t, n)
                        }
                        Wi = !1
                    }
                } else Wi = !1;
                switch (t.expirationTime = 0, t.tag) {
                    case 2:
                        if (l = t.type, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= Tt), e = t.pendingProps, a = Tl(t, wl.current), pa(t, n), a = hi(null, t, l, e, a, n), t.effectTag |= 1, "object" == typeof a && null !== a && "function" == typeof a.render && void 0 === a.$$typeof) {
                            if (t.tag = 1, vi(), Sl(l)) {
                                var i = !0;
                                zl(t)
                            } else i = !1;
                            t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null;
                            var o = l.getDerivedStateFromProps;
                            "function" == typeof o && Na(t, l, o, e), a.updater = za, t.stateNode = a, a._reactInternalFiber = t, Ia(t, l, e, n), t = qi(null, t, l, !0, i, n)
                        } else t.tag = 0, Vi(null, t, a, n), t = t.child;
                        return t;
                    case 16:
                        if (a = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= Tt), e = t.pendingProps, Y(a), 1 !== a._status) throw a._result;
                        switch (a = a._result, t.type = a, i = t.tag = Gu(a), e = la(a, e), i) {
                            case 0:
                                t = Ki(null, t, a, e, n);
                                break;
                            case 1:
                                t = $i(null, t, a, e, n);
                                break;
                            case 11:
                                t = Bi(null, t, a, e, n);
                                break;
                            case 14:
                                t = ji(null, t, a, la(a.type, e), l, n);
                                break;
                            default:
                                throw r(Error(306), a, "")
                        }
                        return t;
                    case 0:
                        return l = t.type, a = t.pendingProps, Ki(e, t, l, a = t.elementType === l ? a : la(l, a), n);
                    case 1:
                        return l = t.type, a = t.pendingProps, $i(e, t, l, a = t.elementType === l ? a : la(l, a), n);
                    case 3:
                        if (Yi(t), null === (l = t.updateQueue)) throw r(Error(282));
                        if (a = null !== (a = t.memoizedState) ? a.element : null, Ta(t, l, t.pendingProps, null, n), (l = t.memoizedState.element) === a) Li(), t = lo(e, t, n);
                        else {
                            if ((a = t.stateNode.hydrate) && (Mi = cr(t.stateNode.containerInfo.firstChild), zi = t, a = Ui = !0), a)
                                for (n = Wa(t, null, l, n), t.child = n; n;) n.effectTag = n.effectTag & ~Tt | St, n = n.sibling;
                            else Vi(e, t, l, n), Li();
                            t = t.child
                        }
                        return t;
                    case 5:
                        return qa(t), null === e && Ri(t), l = t.type, a = t.pendingProps, i = null !== e ? e.memoizedProps : null, o = a.children, ir(l, a) ? o = null : null !== i && ir(l, i) && (t.effectTag |= 16), Qi(e, t), 4 & t.mode && 1 !== n && a.hidden ? (t.expirationTime = t.childExpirationTime = 1, t = null) : (Vi(e, t, o, n), t = t.child), t;
                    case 6:
                        return null === e && Ri(t), null;
                    case 13:
                        return to(e, t, n);
                    case 4:
                        return Ka(t, t.stateNode.containerInfo), l = t.pendingProps, null === e ? t.child = Aa(t, null, l, n) : Vi(e, t, l, n), t.child;
                    case 11:
                        return l = t.type, a = t.pendingProps, Bi(e, t, l, a = t.elementType === l ? a : la(l, a), n);
                    case 7:
                        return Vi(e, t, t.pendingProps, n), t.child;
                    case 8:
                    case 12:
                        return Vi(e, t, t.pendingProps.children, n), t.child;
                    case 10:
                        e: {
                            if (l = t.type._context, a = t.pendingProps, o = t.memoizedProps, sa(t, i = a.value), null !== o) {
                                var u = o.value;
                                if (0 === (i = al(u, i) ? 0 : 0 | ("function" == typeof l._calculateChangedBits ? l._calculateChangedBits(u, i) : 1073741823))) {
                                    if (o.children === a.children && !El.current) {
                                        t = lo(e, t, n);
                                        break e
                                    }
                                } else
                                    for (null !== (u = t.child) && (u.return = t); null !== u;) {
                                        var c = u.dependencies;
                                        if (null !== c) {
                                            o = u.child;
                                            for (var s = c.firstContext; null !== s;) {
                                                if (s.context === l && 0 != (s.observedBits & i)) {
                                                    1 === u.tag && ((s = ya(n, null)).tag = 2, ka(u, s)), u.expirationTime < n && (u.expirationTime = n), null !== (s = u.alternate) && s.expirationTime < n && (s.expirationTime = n), da(u.return, n), c.expirationTime < n && (c.expirationTime = n);
                                                    break
                                                }
                                                s = s.next
                                            }
                                        } else o = 10 === u.tag && u.type === t.type ? null : u.child;
                                        if (null !== o) o.return = u;
                                        else
                                            for (o = u; null !== o;) {
                                                if (o === t) {
                                                    o = null;
                                                    break
                                                }
                                                if (null !== (u = o.sibling)) {
                                                    u.return = o.return, o = u;
                                                    break
                                                }
                                                o = o.return
                                            }
                                        u = o
                                    }
                            }
                            Vi(e, t, a.children, n), t = t.child
                        }
                        return t;
                    case 9:
                        return a = t.type, l = (i = t.pendingProps).children, pa(t, n), l = l(a = ma(a, i.unstable_observedBits)), t.effectTag |= 1, Vi(e, t, l, n), t.child;
                    case 14:
                        return i = la(a = t.type, t.pendingProps), ji(e, t, a, i = la(a.type, i), l, n);
                    case 15:
                        return Hi(e, t, t.type, t.pendingProps, l, n);
                    case 17:
                        return l = t.type, a = t.pendingProps, a = t.elementType === l ? a : la(l, a), null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= Tt), t.tag = 1, Sl(l) ? (e = !0, zl(t)) : e = !1, pa(t, n), Ua(t, l, a, n), Ia(t, l, a, n), qi(null, t, l, !0, e, n);
                    case 19:
                        return ro(e, t, n)
                }
                throw r(Error(156), t.tag)
            };
            var Qu = null,
                Ku = null;

            function $u(e) {
                if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
                var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (t.isDisabled || !t.supportsFiber) return !0;
                try {
                    var n = t.inject(e);
                    Qu = function(e) {
                        try {
                            t.onCommitFiberRoot(n, e, void 0, 64 == (64 & e.current.effectTag))
                        } catch (r) {}
                    }, Ku = function(e) {
                        try {
                            t.onCommitFiberUnmount(n, e)
                        } catch (r) {}
                    }
                } catch (r) {}
                return !0
            }

            function qu(e, t, n, r) {
                this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.effectTag = xt, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
            }

            function Yu(e, t, n, r) {
                return new qu(e, t, n, r)
            }

            function Xu(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }

            function Gu(e) {
                if ("function" == typeof e) return Xu(e) ? 1 : 0;
                if (null != e) {
                    if ((e = e.$$typeof) === B) return 11;
                    if (e === Q) return 14
                }
                return 2
            }

            function Zu(e, t) {
                var n = e.alternate;
                return null === n ? ((n = Yu(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.effectTag = xt, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = e.childExpirationTime, n.expirationTime = e.expirationTime, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                    expirationTime: t.expirationTime,
                    firstContext: t.firstContext,
                    responders: t.responders
                }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
            }

            function Ju(e, t, n, l, a, i) {
                var o = 2;
                if (l = e, "function" == typeof e) Xu(e) && (o = 1);
                else if ("string" == typeof e) o = 5;
                else e: switch (e) {
                    case O:
                        return ec(n.children, a, i, t);
                    case V:
                        o = 8, a |= 7;
                        break;
                    case D:
                        o = 8, a |= 1;
                        break;
                    case L:
                        return (e = Yu(12, n, t, 8 | a)).elementType = L, e.type = L, e.expirationTime = i, e;
                    case j:
                        return (e = Yu(13, n, t, a)).type = j, e.elementType = j, e.expirationTime = i, e;
                    case H:
                        return (e = Yu(19, n, t, a)).elementType = H, e.expirationTime = i, e;
                    default:
                        if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                            case A:
                                o = 10;
                                break e;
                            case W:
                                o = 9;
                                break e;
                            case B:
                                o = 11;
                                break e;
                            case Q:
                                o = 14;
                                break e;
                            case K:
                                o = 16, l = null;
                                break e
                        }
                        throw r(Error(130), null == e ? e : typeof e, "")
                }
                return (t = Yu(o, n, t, a)).elementType = e, t.type = l, t.expirationTime = i, t
            }

            function ec(e, t, n, r) {
                return (e = Yu(7, e, r, t)).expirationTime = n, e
            }

            function tc(e, t, n) {
                return (e = Yu(6, e, null, t)).expirationTime = n, e
            }

            function nc(e, t, n) {
                return (t = Yu(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n, t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                }, t
            }

            function rc(e, t, n) {
                this.tag = t, this.current = null, this.containerInfo = e, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = this.firstBatch = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0
            }

            function lc(e, t) {
                var n = e.firstSuspendedTime;
                return e = e.lastSuspendedTime, 0 !== n && n >= t && e <= t
            }

            function ac(e, t) {
                var n = e.firstSuspendedTime,
                    r = e.lastSuspendedTime;
                n < t && (e.firstSuspendedTime = t), (r > t || 0 === n) && (e.lastSuspendedTime = t), t <= e.lastPingedTime && (e.lastPingedTime = 0), t <= e.lastExpiredTime && (e.lastExpiredTime = 0)
            }

            function ic(e, t) {
                t > e.firstPendingTime && (e.firstPendingTime = t);
                var n = e.firstSuspendedTime;
                0 !== n && (t >= n ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1), t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t))
            }

            function oc(e, t) {
                var n = e.lastExpiredTime;
                (0 === n || n > t) && (e.lastExpiredTime = t)
            }

            function uc(e, t, n, l, a, i) {
                var o = t.current;
                e: if (n) {
                    t: {
                        if (Ct(n = n._reactInternalFiber) !== n || 1 !== n.tag) throw r(Error(170));
                        var u = n;
                        do {
                            switch (u.tag) {
                                case 3:
                                    u = u.stateNode.context;
                                    break t;
                                case 1:
                                    if (Sl(u.type)) {
                                        u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break t
                                    }
                            }
                            u = u.return
                        } while (null !== u);
                        throw r(Error(171))
                    }
                    if (1 === n.tag) {
                        var c = n.type;
                        if (Sl(c)) {
                            n = Nl(n, c, u);
                            break e
                        }
                    }
                    n = u
                } else n = kl;
                return null === t.context ? t.context = n : t.pendingContext = n, t = i, (a = ya(l, a)).payload = {
                    element: e
                }, null !== (t = void 0 === t ? null : t) && (a.callback = t), ka(o, a), mu(o, l), l
            }

            function cc(e, t, n, r) {
                var l = t.current,
                    a = su(),
                    i = _a.suspense;
                return uc(e, t, n, l = fu(a, l, i), i, r)
            }

            function sc(e) {
                if (!(e = e.current).child) return null;
                switch (e.child.tag) {
                    case 5:
                    default:
                        return e.child.stateNode
                }
            }

            function fc(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    $$typeof: R,
                    key: null == r ? null : "" + r,
                    children: e,
                    containerInfo: t,
                    implementation: n
                }
            }

            function dc(e) {
                var t = 1073741821 - 25 * (1 + ((1073741821 - su() + 500) / 25 | 0));
                t <= pu && --t, this._expirationTime = pu = t, this._root = e, this._callbacks = this._next = null, this._hasChildren = this._didComplete = !1, this._children = null, this._defer = !0
            }

            function pc() {
                this._callbacks = null, this._didCommit = !1, this._onCommit = this._onCommit.bind(this)
            }

            function mc(e, t, n) {
                var r = new rc(e, t, n = null != n && !0 === n.hydrate),
                    l = Yu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
                return r.current = l, l.stateNode = r, e[mr] = r.current, n && 0 !== t && pt(9 === e.nodeType ? e : e.ownerDocument), r
            }

            function hc(e, t, n) {
                this._internalRoot = mc(e, t, n)
            }

            function vc(e, t) {
                this._internalRoot = mc(e, 2, t)
            }

            function gc(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
            }

            function yc(e, t) {
                if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
                    for (var n; n = e.lastChild;) e.removeChild(n);
                return new hc(e, 0, t ? {
                    hydrate: !0
                } : void 0)
            }

            function bc(e, t, n, r, l) {
                var a = n._reactRootContainer;
                if (a) {
                    var i = a._internalRoot;
                    if ("function" == typeof l) {
                        var o = l;
                        l = function() {
                            var e = sc(i);
                            o.call(e)
                        }
                    }
                    cc(t, i, e, l)
                } else {
                    if (a = n._reactRootContainer = yc(n, r), i = a._internalRoot, "function" == typeof l) {
                        var u = l;
                        l = function() {
                            var e = sc(i);
                            u.call(e)
                        }
                    }
                    Su(function() {
                        cc(t, i, e, l)
                    })
                }
                return sc(i)
            }

            function kc(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!gc(t)) throw r(Error(200));
                return fc(e, t, null, n)
            }
            J = function(e, t, n) {
                switch (t) {
                    case "input":
                        if (Ue(e, n), t = n.name, "radio" === n.type && null != t) {
                            for (n = e; n.parentNode;) n = n.parentNode;
                            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                var l = n[t];
                                if (l !== e && l.form === e.form) {
                                    var a = yr(l);
                                    if (!a) throw r(Error(90));
                                    Pe(l), Ue(l, a)
                                }
                            }
                        }
                        break;
                    case "textarea":
                        We(e, n);
                        break;
                    case "select":
                        null != (t = n.value) && De(e, !!n.multiple, t, !1)
                }
            }, dc.prototype.render = function(e) {
                if (!this._defer) throw r(Error(250));
                this._hasChildren = !0, this._children = e;
                var t = this._root._internalRoot,
                    n = this._expirationTime,
                    l = new pc;
                return uc(e, t, null, n, null, l._onCommit), l
            }, dc.prototype.then = function(e) {
                if (this._didComplete) e();
                else {
                    var t = this._callbacks;
                    null === t && (t = this._callbacks = []), t.push(e)
                }
            }, dc.prototype.commit = function() {
                var e = this._root._internalRoot,
                    t = e.firstBatch;
                if (!this._defer || null === t) throw r(Error(251));
                if (this._hasChildren) {
                    var n = this._expirationTime;
                    if (t !== this) {
                        this._hasChildren && (n = this._expirationTime = t._expirationTime, this.render(this._children));
                        for (var l = null, a = t; a !== this;) l = a, a = a._next;
                        if (null === l) throw r(Error(251));
                        l._next = a._next, this._next = t, e.firstBatch = this
                    }
                    if (this._defer = !1, t = n, (Wo & (Mo | Uo)) !== No) throw r(Error(253));
                    oc(e, t), gu(e), na(), t = this._next, this._next = null, null !== (t = e.firstBatch = t) && t._hasChildren && t.render(t._children)
                } else this._next = null, this._defer = !1
            }, dc.prototype._onComplete = function() {
                if (!this._didComplete) {
                    this._didComplete = !0;
                    var e = this._callbacks;
                    if (null !== e)
                        for (var t = 0; t < e.length; t++)(0, e[t])()
                }
            }, pc.prototype.then = function(e) {
                if (this._didCommit) e();
                else {
                    var t = this._callbacks;
                    null === t && (t = this._callbacks = []), t.push(e)
                }
            }, pc.prototype._onCommit = function() {
                if (!this._didCommit) {
                    this._didCommit = !0;
                    var e = this._callbacks;
                    if (null !== e)
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            if ("function" != typeof n) throw r(Error(191), n);
                            n()
                        }
                }
            }, vc.prototype.render = hc.prototype.render = function(e, t) {
                var n = this._internalRoot,
                    r = new pc;
                return null !== (t = void 0 === t ? null : t) && r.then(t), cc(e, n, null, r._onCommit), r
            }, vc.prototype.unmount = hc.prototype.unmount = function(e) {
                var t = this._internalRoot,
                    n = new pc;
                return null !== (e = void 0 === e ? null : e) && n.then(e), cc(null, t, null, n._onCommit), n
            }, vc.prototype.createBatch = function() {
                var e = new dc(this),
                    t = e._expirationTime,
                    n = this._internalRoot,
                    r = n.firstBatch;
                if (null === r) n.firstBatch = e, e._next = null;
                else {
                    for (n = null; null !== r && r._expirationTime >= t;) n = r, r = r._next;
                    e._next = r, null !== n && (n._next = e)
                }
                return e
            }, ae = xu, ie = Tu, oe = ku, ue = function(e, t) {
                var n = Wo;
                Wo |= 2;
                try {
                    return e(t)
                } finally {
                    (Wo = n) === No && na()
                }
            };
            var wc = {
                createPortal: kc,
                findDOMNode: function(e) {
                    if (null == e) e = null;
                    else if (1 !== e.nodeType) {
                        var t = e._reactInternalFiber;
                        if (void 0 === t) {
                            if ("function" == typeof e.render) throw r(Error(188));
                            throw r(Error(268), Object.keys(e))
                        }
                        e = null === (e = Nt(t)) ? null : e.stateNode
                    }
                    return e
                },
                hydrate: function(e, t, n) {
                    if (!gc(t)) throw r(Error(200));
                    return bc(null, e, t, !0, n)
                },
                render: function(e, t, n) {
                    if (!gc(t)) throw r(Error(200));
                    return bc(null, e, t, !1, n)
                },
                unstable_renderSubtreeIntoContainer: function(e, t, n, l) {
                    if (!gc(n)) throw r(Error(200));
                    if (null == e || void 0 === e._reactInternalFiber) throw r(Error(38));
                    return bc(e, t, n, !1, l)
                },
                unmountComponentAtNode: function(e) {
                    if (!gc(e)) throw r(Error(40));
                    return !!e._reactRootContainer && (Su(function() {
                        bc(null, null, e, !1, function() {
                            e._reactRootContainer = null
                        })
                    }), !0)
                },
                unstable_createPortal: function() {
                    return kc.apply(void 0, arguments)
                },
                unstable_batchedUpdates: xu,
                unstable_interactiveUpdates: function(e, t, n, r) {
                    return ku(), Tu(e, t, n, r)
                },
                unstable_discreteUpdates: Tu,
                unstable_flushDiscreteUpdates: ku,
                flushSync: function(e, t) {
                    if ((Wo & (Mo | Uo)) !== No) throw r(Error(187));
                    var n = Wo;
                    Wo |= 1;
                    try {
                        return Jl(99, e.bind(null, t))
                    } finally {
                        Wo = n, na()
                    }
                },
                unstable_createRoot: Ec,
                unstable_createSyncRoot: xc,
                unstable_flushControlled: function(e) {
                    var t = Wo;
                    Wo |= 1;
                    try {
                        Jl(99, e)
                    } finally {
                        (Wo = t) === No && na()
                    }
                },
                __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                    Events: [vr, gr, yr, N.injectEventPluginsByName, c, Ot, function(e) {
                        S(e, Rt)
                    }, re, le, Un, P, Au, {
                        current: !1
                    }]
                }
            };

            function Ec(e, t) {
                if (!gc(e)) throw r(Error(299), "unstable_createRoot");
                return new vc(e, t)
            }

            function xc(e, t) {
                if (!gc(e)) throw r(Error(299), "unstable_createRoot");
                return new hc(e, 1, t)
            }! function(e) {
                var n = e.findFiberByHostInstance;
                $u(t({}, e, {
                    overrideHookState: null,
                    overrideProps: null,
                    setSuspenseHandler: null,
                    scheduleUpdate: null,
                    currentDispatcherRef: M.ReactCurrentDispatcher,
                    findHostInstanceByFiber: function(e) {
                        return null === (e = Nt(e)) ? null : e.stateNode
                    },
                    findFiberByHostInstance: function(e) {
                        return n ? n(e) : null
                    },
                    findHostInstancesForRefresh: null,
                    scheduleRefresh: null,
                    scheduleRoot: null,
                    setRefreshHandler: null,
                    getCurrentFiber: null
                }))
            }({
                findFiberByHostInstance: hr,
                bundleType: 0,
                version: "16.10.1",
                rendererPackageName: "react-dom"
            });
            var Tc = {
                    default: wc
                },
                Sc = Tc && wc || Tc;
            module.exports = Sc.default || Sc;
        }, {
            "react": "HdMw",
            "object-assign": "YOwE",
            "scheduler": "IGIl"
        }],
        "X9zx": [function(require, module, exports) {
            "use strict";

            function _() {
                if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
                    0;
                    try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_)
                    } catch (O) {
                        console.error(O)
                    }
                }
            }
            _(), module.exports = require("./cjs/react-dom.production.min.js");
        }, {
            "./cjs/react-dom.production.min.js": "jF7N"
        }],
        "hiQs": [function(require, module, exports) {
            "use strict";
            var t = this && this.__extends || function() {
                    var t = function(e, n) {
                        return (t = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            })(e, n)
                    };
                    return function(e, n) {
                        function r() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                e = this && this.__importStar || function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e.default = t, e
                };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var n = e(require("react")),
                r = [{
                    name: "Full-screen",
                    setting: "fullscreen"
                }, {
                    name: "Color-blind",
                    setting: "colorBlind"
                }, {
                    name: "Dark",
                    setting: "darkMode"
                }],
                o = function() {
                    function t() {}
                    return t.load = function() {
                        try {
                            var t = localStorage.getItem("settings");
                            return JSON.parse(t) || {}
                        } catch (e) {
                            return console.error(e), {}
                        }
                    }, t.save = function(t) {
                        try {
                            localStorage.setItem("settings", JSON.stringify(t))
                        } catch (e) {
                            console.error(e)
                        }
                    }, t
                }();
            exports.Settings = o;
            var s = function(e) {
                function r() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return t(r, e), r.prototype.handleClick = function(t) {
                    t.preventDefault(), this.props.onClick(t)
                }, r.prototype.render = function() {
                    var t = this;
                    return n.createElement("button", {
                        onClick: function(e) {
                            return t.handleClick(e)
                        },
                        className: "gear"
                    }, n.createElement("svg", {
                        width: "30",
                        height: "30",
                        viewBox: "0 0 35 35",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, n.createElement("path", {
                        d: "M22.3344 4.86447L24.31 8.23766C21.9171 9.80387 21.1402 12.9586 22.5981 15.4479C23.038 16.1989 23.6332 16.8067 24.3204 17.2543L22.2714 20.7527C20.6682 19.9354 18.6888 19.9151 17.0088 20.8712C15.3443 21.8185 14.3731 23.4973 14.2734 25.2596H10.3693C10.3241 24.4368 10.087 23.612 9.64099 22.8504C8.16283 20.3266 4.93593 19.4239 2.34593 20.7661L0.342913 17.3461C2.85907 15.8175 3.70246 12.5796 2.21287 10.0362C1.74415 9.23595 1.09909 8.59835 0.354399 8.14386L2.34677 4.74208C3.95677 5.5788 5.95446 5.60726 7.64791 4.64346C9.31398 3.69524 10.2854 2.0141 10.3836 0.25H14.267C14.2917 1.11932 14.5297 1.99505 15.0012 2.80013C16.4866 5.33635 19.738 6.23549 22.3344 4.86447ZM15.0038 17.3703C17.6265 15.8776 18.5279 12.5685 17.0114 9.97937C15.4963 7.39236 12.1437 6.50866 9.52304 8.00013C6.90036 9.4928 5.99896 12.8019 7.5154 15.391C9.03058 17.978 12.3832 18.8617 15.0038 17.3703Z",
                        transform: "translate(12.7548) rotate(30)",
                        fill: "#EEE",
                        stroke: "#BBB",
                        strokeWidth: "0.5"
                    })))
                }, r
            }(n.Component);
            exports.SettingsButton = s;
            var a = function(e) {
                function o() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return t(o, e), o.prototype.render = function() {
                    var t = this;
                    return n.createElement("div", {
                        className: "settings"
                    }, n.createElement("div", {
                        onClick: function(e) {
                            return t.props.toggleView(e)
                        },
                        className: "close-settings"
                    }, n.createElement("svg", {
                        width: "32",
                        height: "32",
                        viewBox: "0 0 32 32",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, n.createElement("path", {
                        d: "M0 0L30 30M30 0L0 30",
                        transform: "translate(1 1)",
                        stroke: "black",
                        strokeWidth: "2"
                    }))), n.createElement("div", {
                        className: "settings-content"
                    }, n.createElement("h2", null, "SETTINGS"), n.createElement("div", {
                        className: "toggles"
                    }, r.map(function(e) {
                        return n.createElement("div", {
                            className: "toggle-set",
                            key: e.setting
                        }, n.createElement("div", {
                            className: "settings-label"
                        }, e.name, " ", n.createElement("span", {
                            className: "toggle-state"
                        }, t.props.values[e.setting] ? "ON" : "OFF")), n.createElement("div", {
                            onClick: function(n) {
                                return t.props.toggle(n, e.setting)
                            },
                            className: t.props.values[e.setting] ? "toggle active" : "toggle inactive"
                        }, n.createElement("div", {
                            className: "switch"
                        })))
                    }))))
                }, o
            }(n.Component);
            exports.SettingsPanel = a;
        }, {
            "react": "HdMw"
        }],
        "JtQA": [function(require, module, exports) {

            var t, e, n = module.exports = {};

            function r() {
                throw new Error("setTimeout has not been defined")
            }

            function o() {
                throw new Error("clearTimeout has not been defined")
            }

            function i(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === r || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                try {
                    return t(e, 0)
                } catch (n) {
                    try {
                        return t.call(null, e, 0)
                    } catch (n) {
                        return t.call(this, e, 0)
                    }
                }
            }

            function u(t) {
                if (e === clearTimeout) return clearTimeout(t);
                if ((e === o || !e) && clearTimeout) return e = clearTimeout, clearTimeout(t);
                try {
                    return e(t)
                } catch (n) {
                    try {
                        return e.call(null, t)
                    } catch (n) {
                        return e.call(this, t)
                    }
                }
            }! function() {
                try {
                    t = "function" == typeof setTimeout ? setTimeout : r
                } catch (n) {
                    t = r
                }
                try {
                    e = "function" == typeof clearTimeout ? clearTimeout : o
                } catch (n) {
                    e = o
                }
            }();
            var c, s = [],
                l = !1,
                a = -1;

            function f() {
                l && c && (l = !1, c.length ? s = c.concat(s) : a = -1, s.length && h())
            }

            function h() {
                if (!l) {
                    var t = i(f);
                    l = !0;
                    for (var e = s.length; e;) {
                        for (c = s, s = []; ++a < e;) c && c[a].run();
                        a = -1, e = s.length
                    }
                    c = null, l = !1, u(t)
                }
            }

            function m(t, e) {
                this.fun = t, this.array = e
            }

            function p() {}
            n.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                s.push(new m(t, e)), 1 !== s.length || l || i(h)
            }, m.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, n.title = "browser", n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = p, n.addListener = p, n.once = p, n.off = p, n.removeListener = p, n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, n.listeners = function(t) {
                return []
            }, n.binding = function(t) {
                throw new Error("process.binding is not supported")
            }, n.cwd = function() {
                return "/"
            }, n.chdir = function(t) {
                throw new Error("process.chdir is not supported")
            }, n.umask = function() {
                return 0
            };
        }, {}],
        "HlZQ": [function(require, module, exports) {
            var global = arguments[3];
            var process = require("process");
            var define;
            var e, t = arguments[3],
                n = require("process");
            ! function(e, t) {
                "use strict";
                "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return t(e)
                } : t(e)
            }("undefined" != typeof window ? window : this, function(t, n) {
                "use strict";
                var r = [],
                    i = t.document,
                    o = Object.getPrototypeOf,
                    a = r.slice,
                    s = r.concat,
                    u = r.push,
                    l = r.indexOf,
                    c = {},
                    f = c.toString,
                    p = c.hasOwnProperty,
                    d = p.toString,
                    h = d.call(Object),
                    g = {},
                    v = function(e) {
                        return "function" == typeof e && "number" != typeof e.nodeType
                    },
                    y = function(e) {
                        return null != e && e === e.window
                    },
                    m = {
                        type: !0,
                        src: !0,
                        nonce: !0,
                        noModule: !0
                    };

                function x(e, t, n) {
                    var r, o, a = (n = n || i).createElement("script");
                    if (a.text = e, t)
                        for (r in m)(o = t[r] || t.getAttribute && t.getAttribute(r)) && a.setAttribute(r, o);
                    n.head.appendChild(a).parentNode.removeChild(a)
                }

                function b(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[f.call(e)] || "object" : typeof e
                }
                var w = function(e, t) {
                        return new w.fn.init(e, t)
                    },
                    T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

                function C(e) {
                    var t = !!e && "length" in e && e.length,
                        n = b(e);
                    return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
                }
                w.fn = w.prototype = {
                    jquery: "3.4.1",
                    constructor: w,
                    length: 0,
                    toArray: function() {
                        return a.call(this)
                    },
                    get: function(e) {
                        return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
                    },
                    pushStack: function(e) {
                        var t = w.merge(this.constructor(), e);
                        return t.prevObject = this, t
                    },
                    each: function(e) {
                        return w.each(this, e)
                    },
                    map: function(e) {
                        return this.pushStack(w.map(this, function(t, n) {
                            return e.call(t, n, t)
                        }))
                    },
                    slice: function() {
                        return this.pushStack(a.apply(this, arguments))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    eq: function(e) {
                        var t = this.length,
                            n = +e + (e < 0 ? t : 0);
                        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                    },
                    end: function() {
                        return this.prevObject || this.constructor()
                    },
                    push: u,
                    sort: r.sort,
                    splice: r.splice
                }, w.extend = w.fn.extend = function() {
                    var e, t, n, r, i, o, a = arguments[0] || {},
                        s = 1,
                        u = arguments.length,
                        l = !1;
                    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                        if (null != (e = arguments[s]))
                            for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || w.isPlainObject(n) ? n : {}, i = !1, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
                    return a
                }, w.extend({
                    expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(e) {
                        throw new Error(e)
                    },
                    noop: function() {},
                    isPlainObject: function(e) {
                        var t, n;
                        return !(!e || "[object Object]" !== f.call(e)) && (!(t = o(e)) || "function" == typeof(n = p.call(t, "constructor") && t.constructor) && d.call(n) === h)
                    },
                    isEmptyObject: function(e) {
                        var t;
                        for (t in e) return !1;
                        return !0
                    },
                    globalEval: function(e, t) {
                        x(e, {
                            nonce: t && t.nonce
                        })
                    },
                    each: function(e, t) {
                        var n, r = 0;
                        if (C(e))
                            for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                        else
                            for (r in e)
                                if (!1 === t.call(e[r], r, e[r])) break; return e
                    },
                    trim: function(e) {
                        return null == e ? "" : (e + "").replace(T, "")
                    },
                    makeArray: function(e, t) {
                        var n = t || [];
                        return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
                    },
                    inArray: function(e, t, n) {
                        return null == t ? -1 : l.call(t, e, n)
                    },
                    merge: function(e, t) {
                        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                        return e.length = i, e
                    },
                    grep: function(e, t, n) {
                        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                        return r
                    },
                    map: function(e, t, n) {
                        var r, i, o = 0,
                            a = [];
                        if (C(e))
                            for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                        else
                            for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                        return s.apply([], a)
                    },
                    guid: 1,
                    support: g
                }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = r[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                    c["[object " + t + "]"] = t.toLowerCase()
                });
                var E = function(e) {
                    var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, v, y, m, x, b = "sizzle" + 1 * new Date,
                        w = e.document,
                        T = 0,
                        C = 0,
                        E = ue(),
                        k = ue(),
                        S = ue(),
                        N = ue(),
                        A = function(e, t) {
                            return e === t && (f = !0), 0
                        },
                        D = {}.hasOwnProperty,
                        j = [],
                        q = j.pop,
                        L = j.push,
                        H = j.push,
                        O = j.slice,
                        P = function(e, t) {
                            for (var n = 0, r = e.length; n < r; n++)
                                if (e[n] === t) return n;
                            return -1
                        },
                        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        M = "[\\x20\\t\\r\\n\\f]",
                        I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
                        $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
                        F = new RegExp(M + "+", "g"),
                        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
                        _ = new RegExp("^" + M + "*," + M + "*"),
                        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
                        U = new RegExp(M + "|>"),
                        X = new RegExp($),
                        V = new RegExp("^" + I + "$"),
                        G = {
                            ID: new RegExp("^#(" + I + ")"),
                            CLASS: new RegExp("^\\.(" + I + ")"),
                            TAG: new RegExp("^(" + I + "|[*])"),
                            ATTR: new RegExp("^" + W),
                            PSEUDO: new RegExp("^" + $),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + R + ")$", "i"),
                            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
                        },
                        Y = /HTML$/i,
                        Q = /^(?:input|select|textarea|button)$/i,
                        J = /^h\d$/i,
                        K = /^[^{]+\{\s*\[native \w/,
                        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        ee = /[+~]/,
                        te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
                        ne = function(e, t, n) {
                            var r = "0x" + t - 65536;
                            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                        },
                        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                        ie = function(e, t) {
                            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                        },
                        oe = function() {
                            p()
                        },
                        ae = be(function(e) {
                            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                        }, {
                            dir: "parentNode",
                            next: "legend"
                        });
                    try {
                        H.apply(j = O.call(w.childNodes), w.childNodes), j[w.childNodes.length].nodeType
                    } catch (ke) {
                        H = {
                            apply: j.length ? function(e, t) {
                                L.apply(e, O.call(t))
                            } : function(e, t) {
                                for (var n = e.length, r = 0; e[n++] = t[r++];);
                                e.length = n - 1
                            }
                        }
                    }

                    function se(e, t, r, i) {
                        var o, s, l, c, f, h, y, m = t && t.ownerDocument,
                            T = t ? t.nodeType : 9;
                        if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
                        if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                            if (11 !== T && (f = Z.exec(e)))
                                if (o = f[1]) {
                                    if (9 === T) {
                                        if (!(l = t.getElementById(o))) return r;
                                        if (l.id === o) return r.push(l), r
                                    } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                                } else {
                                    if (f[2]) return H.apply(r, t.getElementsByTagName(e)), r;
                                    if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return H.apply(r, t.getElementsByClassName(o)), r
                                }
                            if (n.qsa && !N[e + " "] && (!v || !v.test(e)) && (1 !== T || "object" !== t.nodeName.toLowerCase())) {
                                if (y = e, m = t, 1 === T && U.test(e)) {
                                    for ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = b), s = (h = a(e)).length; s--;) h[s] = "#" + c + " " + xe(h[s]);
                                    y = h.join(","), m = ee.test(e) && ye(t.parentNode) || t
                                }
                                try {
                                    return H.apply(r, m.querySelectorAll(y)), r
                                } catch (C) {
                                    N(e, !0)
                                } finally {
                                    c === b && t.removeAttribute("id")
                                }
                            }
                        }
                        return u(e.replace(B, "$1"), t, r, i)
                    }

                    function ue() {
                        var e = [];
                        return function t(n, i) {
                            return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                        }
                    }

                    function le(e) {
                        return e[b] = !0, e
                    }

                    function ce(e) {
                        var t = d.createElement("fieldset");
                        try {
                            return !!e(t)
                        } catch (ke) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t), t = null
                        }
                    }

                    function fe(e, t) {
                        for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
                    }

                    function pe(e, t) {
                        var n = t && e,
                            r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                        if (r) return r;
                        if (n)
                            for (; n = n.nextSibling;)
                                if (n === t) return -1;
                        return e ? 1 : -1
                    }

                    function de(e) {
                        return function(t) {
                            return "input" === t.nodeName.toLowerCase() && t.type === e
                        }
                    }

                    function he(e) {
                        return function(t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e
                        }
                    }

                    function ge(e) {
                        return function(t) {
                            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                        }
                    }

                    function ve(e) {
                        return le(function(t) {
                            return t = +t, le(function(n, r) {
                                for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                            })
                        })
                    }

                    function ye(e) {
                        return e && void 0 !== e.getElementsByTagName && e
                    }
                    for (t in n = se.support = {}, o = se.isXML = function(e) {
                            var t = e.namespaceURI,
                                n = (e.ownerDocument || e).documentElement;
                            return !Y.test(t || n && n.nodeName || "HTML")
                        }, p = se.setDocument = function(e) {
                            var t, i, a = e ? e.ownerDocument || e : w;
                            return a !== d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.attributes = ce(function(e) {
                                return e.className = "i", !e.getAttribute("className")
                            }), n.getElementsByTagName = ce(function(e) {
                                return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
                            }), n.getElementsByClassName = K.test(d.getElementsByClassName), n.getById = ce(function(e) {
                                return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
                            }), n.getById ? (r.filter.ID = function(e) {
                                var t = e.replace(te, ne);
                                return function(e) {
                                    return e.getAttribute("id") === t
                                }
                            }, r.find.ID = function(e, t) {
                                if (void 0 !== t.getElementById && g) {
                                    var n = t.getElementById(e);
                                    return n ? [n] : []
                                }
                            }) : (r.filter.ID = function(e) {
                                var t = e.replace(te, ne);
                                return function(e) {
                                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                    return n && n.value === t
                                }
                            }, r.find.ID = function(e, t) {
                                if (void 0 !== t.getElementById && g) {
                                    var n, r, i, o = t.getElementById(e);
                                    if (o) {
                                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                        for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                                    }
                                    return []
                                }
                            }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                            } : function(e, t) {
                                var n, r = [],
                                    i = 0,
                                    o = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                                    return r
                                }
                                return o
                            }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                                if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                            }, y = [], v = [], (n.qsa = K.test(d.querySelectorAll)) && (ce(function(e) {
                                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]")
                            }), ce(function(e) {
                                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                var t = d.createElement("input");
                                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                            })), (n.matchesSelector = K.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function(e) {
                                n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), y.push("!=", $)
                            }), v = v.length && new RegExp(v.join("|")), y = y.length && new RegExp(y.join("|")), t = K.test(h.compareDocumentPosition), x = t || K.test(h.contains) ? function(e, t) {
                                var n = 9 === e.nodeType ? e.documentElement : e,
                                    r = t && t.parentNode;
                                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                            } : function(e, t) {
                                if (t)
                                    for (; t = t.parentNode;)
                                        if (t === e) return !0;
                                return !1
                            }, A = t ? function(e, t) {
                                if (e === t) return f = !0, 0;
                                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & r ? -1 : 1)
                            } : function(e, t) {
                                if (e === t) return f = !0, 0;
                                var n, r = 0,
                                    i = e.parentNode,
                                    o = t.parentNode,
                                    a = [e],
                                    s = [t];
                                if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
                                if (i === o) return pe(e, t);
                                for (n = e; n = n.parentNode;) a.unshift(n);
                                for (n = t; n = n.parentNode;) s.unshift(n);
                                for (; a[r] === s[r];) r++;
                                return r ? pe(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
                            }, d) : d
                        }, se.matches = function(e, t) {
                            return se(e, null, null, t)
                        }, se.matchesSelector = function(e, t) {
                            if ((e.ownerDocument || e) !== d && p(e), n.matchesSelector && g && !N[t + " "] && (!y || !y.test(t)) && (!v || !v.test(t))) try {
                                var r = m.call(e, t);
                                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                            } catch (ke) {
                                N(t, !0)
                            }
                            return se(t, d, null, [e]).length > 0
                        }, se.contains = function(e, t) {
                            return (e.ownerDocument || e) !== d && p(e), x(e, t)
                        }, se.attr = function(e, t) {
                            (e.ownerDocument || e) !== d && p(e);
                            var i = r.attrHandle[t.toLowerCase()],
                                o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                        }, se.escape = function(e) {
                            return (e + "").replace(re, ie)
                        }, se.error = function(e) {
                            throw new Error("Syntax error, unrecognized expression: " + e)
                        }, se.uniqueSort = function(e) {
                            var t, r = [],
                                i = 0,
                                o = 0;
                            if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), f) {
                                for (; t = e[o++];) t === e[o] && (i = r.push(o));
                                for (; i--;) e.splice(r[i], 1)
                            }
                            return c = null, e
                        }, i = se.getText = function(e) {
                            var t, n = "",
                                r = 0,
                                o = e.nodeType;
                            if (o) {
                                if (1 === o || 9 === o || 11 === o) {
                                    if ("string" == typeof e.textContent) return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                                } else if (3 === o || 4 === o) return e.nodeValue
                            } else
                                for (; t = e[r++];) n += i(t);
                            return n
                        }, (r = se.selectors = {
                            cacheLength: 50,
                            createPseudo: le,
                            match: G,
                            attrHandle: {},
                            find: {},
                            relative: {
                                ">": {
                                    dir: "parentNode",
                                    first: !0
                                },
                                " ": {
                                    dir: "parentNode"
                                },
                                "+": {
                                    dir: "previousSibling",
                                    first: !0
                                },
                                "~": {
                                    dir: "previousSibling"
                                }
                            },
                            preFilter: {
                                ATTR: function(e) {
                                    return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                                },
                                CHILD: function(e) {
                                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                                },
                                PSEUDO: function(e) {
                                    var t, n = !e[6] && e[2];
                                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                                }
                            },
                            filter: {
                                TAG: function(e) {
                                    var t = e.replace(te, ne).toLowerCase();
                                    return "*" === e ? function() {
                                        return !0
                                    } : function(e) {
                                        return e.nodeName && e.nodeName.toLowerCase() === t
                                    }
                                },
                                CLASS: function(e) {
                                    var t = E[e + " "];
                                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) {
                                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                    })
                                },
                                ATTR: function(e, t, n) {
                                    return function(r) {
                                        var i = se.attr(r, e);
                                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                    }
                                },
                                CHILD: function(e, t, n, r, i) {
                                    var o = "nth" !== e.slice(0, 3),
                                        a = "last" !== e.slice(-4),
                                        s = "of-type" === t;
                                    return 1 === r && 0 === i ? function(e) {
                                        return !!e.parentNode
                                    } : function(t, n, u) {
                                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                            v = t.parentNode,
                                            y = s && t.nodeName.toLowerCase(),
                                            m = !u && !s,
                                            x = !1;
                                        if (v) {
                                            if (o) {
                                                for (; g;) {
                                                    for (p = t; p = p[g];)
                                                        if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                                    h = g = "only" === e && !h && "nextSibling"
                                                }
                                                return !0
                                            }
                                            if (h = [a ? v.firstChild : v.lastChild], a && m) {
                                                for (x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                                                    if (1 === p.nodeType && ++x && p === t) {
                                                        c[e] = [T, d, x];
                                                        break
                                                    }
                                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                                for (;
                                                    (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++x || (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t)););
                                            return (x -= i) === r || x % r == 0 && x / r >= 0
                                        }
                                    }
                                },
                                PSEUDO: function(e, t) {
                                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, n) {
                                        for (var r, o = i(e, t), a = o.length; a--;) e[r = P(e, o[a])] = !(n[r] = o[a])
                                    }) : function(e) {
                                        return i(e, 0, n)
                                    }) : i
                                }
                            },
                            pseudos: {
                                not: le(function(e) {
                                    var t = [],
                                        n = [],
                                        r = s(e.replace(B, "$1"));
                                    return r[b] ? le(function(e, t, n, i) {
                                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                                    }) : function(e, i, o) {
                                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                                    }
                                }),
                                has: le(function(e) {
                                    return function(t) {
                                        return se(e, t).length > 0
                                    }
                                }),
                                contains: le(function(e) {
                                    return e = e.replace(te, ne),
                                        function(t) {
                                            return (t.textContent || i(t)).indexOf(e) > -1
                                        }
                                }),
                                lang: le(function(e) {
                                    return V.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                        function(t) {
                                            var n;
                                            do {
                                                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                            } while ((t = t.parentNode) && 1 === t.nodeType);
                                            return !1
                                        }
                                }),
                                target: function(t) {
                                    var n = e.location && e.location.hash;
                                    return n && n.slice(1) === t.id
                                },
                                root: function(e) {
                                    return e === h
                                },
                                focus: function(e) {
                                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                },
                                enabled: ge(!1),
                                disabled: ge(!0),
                                checked: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                                },
                                selected: function(e) {
                                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                                },
                                empty: function(e) {
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        if (e.nodeType < 6) return !1;
                                    return !0
                                },
                                parent: function(e) {
                                    return !r.pseudos.empty(e)
                                },
                                header: function(e) {
                                    return J.test(e.nodeName)
                                },
                                input: function(e) {
                                    return Q.test(e.nodeName)
                                },
                                button: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && "button" === e.type || "button" === t
                                },
                                text: function(e) {
                                    var t;
                                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                },
                                first: ve(function() {
                                    return [0]
                                }),
                                last: ve(function(e, t) {
                                    return [t - 1]
                                }),
                                eq: ve(function(e, t, n) {
                                    return [n < 0 ? n + t : n]
                                }),
                                even: ve(function(e, t) {
                                    for (var n = 0; n < t; n += 2) e.push(n);
                                    return e
                                }),
                                odd: ve(function(e, t) {
                                    for (var n = 1; n < t; n += 2) e.push(n);
                                    return e
                                }),
                                lt: ve(function(e, t, n) {
                                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                                    return e
                                }),
                                gt: ve(function(e, t, n) {
                                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                    return e
                                })
                            }
                        }).pseudos.nth = r.pseudos.eq, {
                            radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                        }) r.pseudos[t] = de(t);
                    for (t in {
                            submit: !0,
                            reset: !0
                        }) r.pseudos[t] = he(t);

                    function me() {}

                    function xe(e) {
                        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                        return r
                    }

                    function be(e, t, n) {
                        var r = t.dir,
                            i = t.next,
                            o = i || r,
                            a = n && "parentNode" === o,
                            s = C++;
                        return t.first ? function(t, n, i) {
                            for (; t = t[r];)
                                if (1 === t.nodeType || a) return e(t, n, i);
                            return !1
                        } : function(t, n, u) {
                            var l, c, f, p = [T, s];
                            if (u) {
                                for (; t = t[r];)
                                    if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                            } else
                                for (; t = t[r];)
                                    if (1 === t.nodeType || a)
                                        if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                        else {
                                            if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                                            if (c[o] = p, p[2] = e(t, n, u)) return !0
                                        } return !1
                        }
                    }

                    function we(e) {
                        return e.length > 1 ? function(t, n, r) {
                            for (var i = e.length; i--;)
                                if (!e[i](t, n, r)) return !1;
                            return !0
                        } : e[0]
                    }

                    function Te(e, t, n, r, i) {
                        for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                        return a
                    }

                    function Ce(e, t, n, r, i, o) {
                        return r && !r[b] && (r = Ce(r)), i && !i[b] && (i = Ce(i, o)), le(function(o, a, s, u) {
                            var l, c, f, p = [],
                                d = [],
                                h = a.length,
                                g = o || function(e, t, n) {
                                    for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                                    return n
                                }(t || "*", s.nodeType ? [s] : s, []),
                                v = !e || !o && t ? g : Te(g, p, e, s, u),
                                y = n ? i || (o ? e : h || r) ? [] : a : v;
                            if (n && n(v, y, s, u), r)
                                for (l = Te(y, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
                            if (o) {
                                if (i || e) {
                                    if (i) {
                                        for (l = [], c = y.length; c--;)(f = y[c]) && l.push(v[c] = f);
                                        i(null, y = [], l, u)
                                    }
                                    for (c = y.length; c--;)(f = y[c]) && (l = i ? P(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                                }
                            } else y = Te(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y)
                        })
                    }

                    function Ee(e) {
                        for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = be(function(e) {
                                return e === t
                            }, s, !0), f = be(function(e) {
                                return P(t, e) > -1
                            }, s, !0), p = [function(e, n, r) {
                                var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                                return t = null, i
                            }]; u < o; u++)
                            if (n = r.relative[e[u].type]) p = [be(we(p), n)];
                            else {
                                if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                                    for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                                    return Ce(u > 1 && we(p), u > 1 && xe(e.slice(0, u - 1).concat({
                                        value: " " === e[u - 2].type ? "*" : ""
                                    })).replace(B, "$1"), n, u < i && Ee(e.slice(u, i)), i < o && Ee(e = e.slice(i)), i < o && xe(e))
                                }
                                p.push(n)
                            }
                        return we(p)
                    }
                    return me.prototype = r.filters = r.pseudos, r.setFilters = new me, a = se.tokenize = function(e, t) {
                        var n, i, o, a, s, u, l, c = k[e + " "];
                        if (c) return t ? 0 : c.slice(0);
                        for (s = e, u = [], l = r.preFilter; s;) {
                            for (a in n && !(i = _.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = z.exec(s)) && (n = i.shift(), o.push({
                                    value: n,
                                    type: i[0].replace(B, " ")
                                }), s = s.slice(n.length)), r.filter) !(i = G[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                                value: n,
                                type: a,
                                matches: i
                            }), s = s.slice(n.length));
                            if (!n) break
                        }
                        return t ? s.length : s ? se.error(e) : k(e, u).slice(0)
                    }, s = se.compile = function(e, t) {
                        var n, i = [],
                            o = [],
                            s = S[e + " "];
                        if (!s) {
                            for (t || (t = a(e)), n = t.length; n--;)(s = Ee(t[n]))[b] ? i.push(s) : o.push(s);
                            (s = S(e, function(e, t) {
                                var n = t.length > 0,
                                    i = e.length > 0,
                                    o = function(o, a, s, u, c) {
                                        var f, h, v, y = 0,
                                            m = "0",
                                            x = o && [],
                                            b = [],
                                            w = l,
                                            C = o || i && r.find.TAG("*", c),
                                            E = T += null == w ? 1 : Math.random() || .1,
                                            k = C.length;
                                        for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                                            if (i && f) {
                                                for (h = 0, a || f.ownerDocument === d || (p(f), s = !g); v = e[h++];)
                                                    if (v(f, a || d, s)) {
                                                        u.push(f);
                                                        break
                                                    }
                                                c && (T = E)
                                            }
                                            n && ((f = !v && f) && y--, o && x.push(f))
                                        }
                                        if (y += m, n && m !== y) {
                                            for (h = 0; v = t[h++];) v(x, b, a, s);
                                            if (o) {
                                                if (y > 0)
                                                    for (; m--;) x[m] || b[m] || (b[m] = q.call(u));
                                                b = Te(b)
                                            }
                                            H.apply(u, b), c && !o && b.length > 0 && y + t.length > 1 && se.uniqueSort(u)
                                        }
                                        return c && (T = E, l = w), x
                                    };
                                return n ? le(o) : o
                            }(o, i))).selector = e
                        }
                        return s
                    }, u = se.select = function(e, t, n, i) {
                        var o, u, l, c, f, p = "function" == typeof e && e,
                            d = !i && a(e = p.selector || e);
                        if (n = n || [], 1 === d.length) {
                            if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                                if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                                p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                            }
                            for (o = G.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !r.relative[c = l.type]);)
                                if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && ye(t.parentNode) || t))) {
                                    if (u.splice(o, 1), !(e = i.length && xe(u))) return H.apply(n, i), n;
                                    break
                                }
                        }
                        return (p || s(e, d))(i, t, !g, n, !t || ee.test(e) && ye(t.parentNode) || t), n
                    }, n.sortStable = b.split("").sort(A).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ce(function(e) {
                        return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
                    }), ce(function(e) {
                        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                    }) || fe("type|href|height|width", function(e, t, n) {
                        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                    }), n.attributes && ce(function(e) {
                        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                    }) || fe("value", function(e, t, n) {
                        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                    }), ce(function(e) {
                        return null == e.getAttribute("disabled")
                    }) || fe(R, function(e, t, n) {
                        var r;
                        if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                    }), se
                }(t);
                w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
                var k = function(e, t, n) {
                        for (var r = [], i = void 0 !== n;
                            (e = e[t]) && 9 !== e.nodeType;)
                            if (1 === e.nodeType) {
                                if (i && w(e).is(n)) break;
                                r.push(e)
                            }
                        return r
                    },
                    S = function(e, t) {
                        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                        return n
                    },
                    N = w.expr.match.needsContext;

                function A(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                }
                var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

                function j(e, t, n) {
                    return v(t) ? w.grep(e, function(e, r) {
                        return !!t.call(e, r, e) !== n
                    }) : t.nodeType ? w.grep(e, function(e) {
                        return e === t !== n
                    }) : "string" != typeof t ? w.grep(e, function(e) {
                        return l.call(t, e) > -1 !== n
                    }) : w.filter(t, e, n)
                }
                w.filter = function(e, t, n) {
                    var r = t[0];
                    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
                        return 1 === e.nodeType
                    }))
                }, w.fn.extend({
                    find: function(e) {
                        var t, n, r = this.length,
                            i = this;
                        if ("string" != typeof e) return this.pushStack(w(e).filter(function() {
                            for (t = 0; t < r; t++)
                                if (w.contains(i[t], this)) return !0
                        }));
                        for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
                        return r > 1 ? w.uniqueSort(n) : n
                    },
                    filter: function(e) {
                        return this.pushStack(j(this, e || [], !1))
                    },
                    not: function(e) {
                        return this.pushStack(j(this, e || [], !0))
                    },
                    is: function(e) {
                        return !!j(this, "string" == typeof e && N.test(e) ? w(e) : e || [], !1).length
                    }
                });
                var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                (w.fn.init = function(e, t, n) {
                    var r, o;
                    if (!e) return this;
                    if (n = n || q, "string" == typeof e) {
                        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                        if (r[1]) {
                            if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), D.test(r[1]) && w.isPlainObject(t))
                                for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                            return this
                        }
                        return (o = i.getElementById(r[2])) && (this[0] = o, this.length = 1), this
                    }
                    return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
                }).prototype = w.fn, q = w(i);
                var H = /^(?:parents|prev(?:Until|All))/,
                    O = {
                        children: !0,
                        contents: !0,
                        next: !0,
                        prev: !0
                    };

                function P(e, t) {
                    for (;
                        (e = e[t]) && 1 !== e.nodeType;);
                    return e
                }
                w.fn.extend({
                    has: function(e) {
                        var t = w(e, this),
                            n = t.length;
                        return this.filter(function() {
                            for (var e = 0; e < n; e++)
                                if (w.contains(this, t[e])) return !0
                        })
                    },
                    closest: function(e, t) {
                        var n, r = 0,
                            i = this.length,
                            o = [],
                            a = "string" != typeof e && w(e);
                        if (!N.test(e))
                            for (; r < i; r++)
                                for (n = this[r]; n && n !== t; n = n.parentNode)
                                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                                        o.push(n);
                                        break
                                    }
                        return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
                    },
                    index: function(e) {
                        return e ? "string" == typeof e ? l.call(w(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    },
                    add: function(e, t) {
                        return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
                    },
                    addBack: function(e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                    }
                }), w.each({
                    parent: function(e) {
                        var t = e.parentNode;
                        return t && 11 !== t.nodeType ? t : null
                    },
                    parents: function(e) {
                        return k(e, "parentNode")
                    },
                    parentsUntil: function(e, t, n) {
                        return k(e, "parentNode", n)
                    },
                    next: function(e) {
                        return P(e, "nextSibling")
                    },
                    prev: function(e) {
                        return P(e, "previousSibling")
                    },
                    nextAll: function(e) {
                        return k(e, "nextSibling")
                    },
                    prevAll: function(e) {
                        return k(e, "previousSibling")
                    },
                    nextUntil: function(e, t, n) {
                        return k(e, "nextSibling", n)
                    },
                    prevUntil: function(e, t, n) {
                        return k(e, "previousSibling", n)
                    },
                    siblings: function(e) {
                        return S((e.parentNode || {}).firstChild, e)
                    },
                    children: function(e) {
                        return S(e.firstChild)
                    },
                    contents: function(e) {
                        return void 0 !== e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
                    }
                }, function(e, t) {
                    w.fn[e] = function(n, r) {
                        var i = w.map(this, t, n);
                        return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
                    }
                });
                var R = /[^\x20\t\r\n\f]+/g;

                function M(e) {
                    return e
                }

                function I(e) {
                    throw e
                }

                function W(e, t, n, r) {
                    var i;
                    try {
                        e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                    } catch (e) {
                        n.apply(void 0, [e])
                    }
                }
                w.Callbacks = function(e) {
                    e = "string" == typeof e ? function(e) {
                        var t = {};
                        return w.each(e.match(R) || [], function(e, n) {
                            t[n] = !0
                        }), t
                    }(e) : w.extend({}, e);
                    var t, n, r, i, o = [],
                        a = [],
                        s = -1,
                        u = function() {
                            for (i = i || e.once, r = t = !0; a.length; s = -1)
                                for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                            e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
                        },
                        l = {
                            add: function() {
                                return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                                    w.each(n, function(n, r) {
                                        v(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== b(r) && t(r)
                                    })
                                }(arguments), n && !t && u()), this
                            },
                            remove: function() {
                                return w.each(arguments, function(e, t) {
                                    for (var n;
                                        (n = w.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                                }), this
                            },
                            has: function(e) {
                                return e ? w.inArray(e, o) > -1 : o.length > 0
                            },
                            empty: function() {
                                return o && (o = []), this
                            },
                            disable: function() {
                                return i = a = [], o = n = "", this
                            },
                            disabled: function() {
                                return !o
                            },
                            lock: function() {
                                return i = a = [], n || t || (o = n = ""), this
                            },
                            locked: function() {
                                return !!i
                            },
                            fireWith: function(e, n) {
                                return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                            },
                            fire: function() {
                                return l.fireWith(this, arguments), this
                            },
                            fired: function() {
                                return !!r
                            }
                        };
                    return l
                }, w.extend({
                    Deferred: function(e) {
                        var n = [
                                ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                                ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                                ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                            ],
                            r = "pending",
                            i = {
                                state: function() {
                                    return r
                                },
                                always: function() {
                                    return o.done(arguments).fail(arguments), this
                                },
                                catch: function(e) {
                                    return i.then(null, e)
                                },
                                pipe: function() {
                                    var e = arguments;
                                    return w.Deferred(function(t) {
                                        w.each(n, function(n, r) {
                                            var i = v(e[r[4]]) && e[r[4]];
                                            o[r[1]](function() {
                                                var e = i && i.apply(this, arguments);
                                                e && v(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                            })
                                        }), e = null
                                    }).promise()
                                },
                                then: function(e, r, i) {
                                    var o = 0;

                                    function a(e, n, r, i) {
                                        return function() {
                                            var s = this,
                                                u = arguments,
                                                l = function() {
                                                    var t, l;
                                                    if (!(e < o)) {
                                                        if ((t = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                        l = t && ("object" == typeof t || "function" == typeof t) && t.then, v(l) ? i ? l.call(t, a(o, n, M, i), a(o, n, I, i)) : (o++, l.call(t, a(o, n, M, i), a(o, n, I, i), a(o, n, M, n.notifyWith))) : (r !== M && (s = void 0, u = [t]), (i || n.resolveWith)(s, u))
                                                    }
                                                },
                                                c = i ? l : function() {
                                                    try {
                                                        l()
                                                    } catch (t) {
                                                        w.Deferred.exceptionHook && w.Deferred.exceptionHook(t, c.stackTrace), e + 1 >= o && (r !== I && (s = void 0, u = [t]), n.rejectWith(s, u))
                                                    }
                                                };
                                            e ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), t.setTimeout(c))
                                        }
                                    }
                                    return w.Deferred(function(t) {
                                        n[0][3].add(a(0, t, v(i) ? i : M, t.notifyWith)), n[1][3].add(a(0, t, v(e) ? e : M)), n[2][3].add(a(0, t, v(r) ? r : I))
                                    }).promise()
                                },
                                promise: function(e) {
                                    return null != e ? w.extend(e, i) : i
                                }
                            },
                            o = {};
                        return w.each(n, function(e, t) {
                            var a = t[2],
                                s = t[5];
                            i[t[1]] = a.add, s && a.add(function() {
                                r = s
                            }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
                                return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                            }, o[t[0] + "With"] = a.fireWith
                        }), i.promise(o), e && e.call(o, o), o
                    },
                    when: function(e) {
                        var t = arguments.length,
                            n = t,
                            r = Array(n),
                            i = a.call(arguments),
                            o = w.Deferred(),
                            s = function(e) {
                                return function(n) {
                                    r[e] = this, i[e] = arguments.length > 1 ? a.call(arguments) : n, --t || o.resolveWith(r, i)
                                }
                            };
                        if (t <= 1 && (W(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || v(i[n] && i[n].then))) return o.then();
                        for (; n--;) W(i[n], s(n), o.reject);
                        return o.promise()
                    }
                });
                var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                w.Deferred.exceptionHook = function(e, n) {
                    t.console && t.console.warn && e && $.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
                }, w.readyException = function(e) {
                    t.setTimeout(function() {
                        throw e
                    })
                };
                var F = w.Deferred();

                function B() {
                    i.removeEventListener("DOMContentLoaded", B), t.removeEventListener("load", B), w.ready()
                }
                w.fn.ready = function(e) {
                    return F.then(e).catch(function(e) {
                        w.readyException(e)
                    }), this
                }, w.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(e) {
                        (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(i, [w]))
                    }
                }), w.ready.then = F.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? t.setTimeout(w.ready) : (i.addEventListener("DOMContentLoaded", B), t.addEventListener("load", B));
                var _ = function(e, t, n, r, i, o, a) {
                        var s = 0,
                            u = e.length,
                            l = null == n;
                        if ("object" === b(n))
                            for (s in i = !0, n) _(e, t, s, n[s], !0, o, a);
                        else if (void 0 !== r && (i = !0, v(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                                return l.call(w(e), n)
                            })), t))
                            for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
                    },
                    z = /^-ms-/,
                    U = /-([a-z])/g;

                function X(e, t) {
                    return t.toUpperCase()
                }

                function V(e) {
                    return e.replace(z, "ms-").replace(U, X)
                }
                var G = function(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                };

                function Y() {
                    this.expando = w.expando + Y.uid++
                }
                Y.uid = 1, Y.prototype = {
                    cache: function(e) {
                        var t = e[this.expando];
                        return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0
                        }))), t
                    },
                    set: function(e, t, n) {
                        var r, i = this.cache(e);
                        if ("string" == typeof t) i[V(t)] = n;
                        else
                            for (r in t) i[V(r)] = t[r];
                        return i
                    },
                    get: function(e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
                    },
                    access: function(e, t, n) {
                        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                    },
                    remove: function(e, t) {
                        var n, r = e[this.expando];
                        if (void 0 !== r) {
                            if (void 0 !== t) {
                                n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;
                                for (; n--;) delete r[t[n]]
                            }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                        }
                    },
                    hasData: function(e) {
                        var t = e[this.expando];
                        return void 0 !== t && !w.isEmptyObject(t)
                    }
                };
                var Q = new Y,
                    J = new Y,
                    K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                    Z = /[A-Z]/g;

                function ee(e, t, n) {
                    var r;
                    if (void 0 === n && 1 === e.nodeType)
                        if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                            try {
                                n = function(e) {
                                    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : K.test(e) ? JSON.parse(e) : e)
                                }(n)
                            } catch (i) {}
                            J.set(e, t, n)
                        } else n = void 0;
                    return n
                }
                w.extend({
                    hasData: function(e) {
                        return J.hasData(e) || Q.hasData(e)
                    },
                    data: function(e, t, n) {
                        return J.access(e, t, n)
                    },
                    removeData: function(e, t) {
                        J.remove(e, t)
                    },
                    _data: function(e, t, n) {
                        return Q.access(e, t, n)
                    },
                    _removeData: function(e, t) {
                        Q.remove(e, t)
                    }
                }), w.fn.extend({
                    data: function(e, t) {
                        var n, r, i, o = this[0],
                            a = o && o.attributes;
                        if (void 0 === e) {
                            if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                                for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
                                Q.set(o, "hasDataAttrs", !0)
                            }
                            return i
                        }
                        return "object" == typeof e ? this.each(function() {
                            J.set(this, e)
                        }) : _(this, function(t) {
                            var n;
                            if (o && void 0 === t) return void 0 !== (n = J.get(o, e)) ? n : void 0 !== (n = ee(o, e)) ? n : void 0;
                            this.each(function() {
                                J.set(this, e, t)
                            })
                        }, null, t, arguments.length > 1, null, !0)
                    },
                    removeData: function(e) {
                        return this.each(function() {
                            J.remove(this, e)
                        })
                    }
                }), w.extend({
                    queue: function(e, t, n) {
                        var r;
                        if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, w.makeArray(n)) : r.push(n)), r || []
                    },
                    dequeue: function(e, t) {
                        t = t || "fx";
                        var n = w.queue(e, t),
                            r = n.length,
                            i = n.shift(),
                            o = w._queueHooks(e, t);
                        "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                            w.dequeue(e, t)
                        }, o)), !r && o && o.empty.fire()
                    },
                    _queueHooks: function(e, t) {
                        var n = t + "queueHooks";
                        return Q.get(e, n) || Q.access(e, n, {
                            empty: w.Callbacks("once memory").add(function() {
                                Q.remove(e, [t + "queue", n])
                            })
                        })
                    }
                }), w.fn.extend({
                    queue: function(e, t) {
                        var n = 2;
                        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                            var n = w.queue(this, e, t);
                            w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
                        })
                    },
                    dequeue: function(e) {
                        return this.each(function() {
                            w.dequeue(this, e)
                        })
                    },
                    clearQueue: function(e) {
                        return this.queue(e || "fx", [])
                    },
                    promise: function(e, t) {
                        var n, r = 1,
                            i = w.Deferred(),
                            o = this,
                            a = this.length,
                            s = function() {
                                --r || i.resolveWith(o, [o])
                            };
                        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                        return s(), i.promise(t)
                    }
                });
                var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                    ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
                    re = ["Top", "Right", "Bottom", "Left"],
                    ie = i.documentElement,
                    oe = function(e) {
                        return w.contains(e.ownerDocument, e)
                    },
                    ae = {
                        composed: !0
                    };
                ie.getRootNode && (oe = function(e) {
                    return w.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
                });
                var se = function(e, t) {
                        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === w.css(e, "display")
                    },
                    ue = function(e, t, n, r) {
                        var i, o, a = {};
                        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                        for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
                        return i
                    };

                function le(e, t, n, r) {
                    var i, o, a = 20,
                        s = r ? function() {
                            return r.cur()
                        } : function() {
                            return w.css(e, t, "")
                        },
                        u = s(),
                        l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
                        c = e.nodeType && (w.cssNumber[t] || "px" !== l && +u) && ne.exec(w.css(e, t));
                    if (c && c[3] !== l) {
                        for (u /= 2, l = l || c[3], c = +u || 1; a--;) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
                        c *= 2, w.style(e, t, c + l), n = n || []
                    }
                    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
                }
                var ce = {};

                function fe(e) {
                    var t, n = e.ownerDocument,
                        r = e.nodeName,
                        i = ce[r];
                    return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ce[r] = i, i)
                }

                function pe(e, t) {
                    for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = Q.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && se(r) && (i[o] = fe(r))) : "none" !== n && (i[o] = "none", Q.set(r, "display", n)));
                    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
                    return e
                }
                w.fn.extend({
                    show: function() {
                        return pe(this, !0)
                    },
                    hide: function() {
                        return pe(this)
                    },
                    toggle: function(e) {
                        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                            se(this) ? w(this).show() : w(this).hide()
                        })
                    }
                });
                var de = /^(?:checkbox|radio)$/i,
                    he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                    ge = /^$|^module$|\/(?:java|ecma)script/i,
                    ve = {
                        option: [1, "<select multiple='multiple'>", "</select>"],
                        thead: [1, "<table>", "</table>"],
                        col: [2, "<table><colgroup>", "</colgroup></table>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                        _default: [0, "", ""]
                    };

                function ye(e, t) {
                    var n;
                    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? w.merge([e], n) : n
                }

                function me(e, t) {
                    for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
                }
                ve.optgroup = ve.option, ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead, ve.th = ve.td;
                var xe, be, we = /<|&#?\w+;/;

                function Te(e, t, n, r, i) {
                    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                        if ((o = e[d]) || 0 === o)
                            if ("object" === b(o)) w.merge(p, o.nodeType ? [o] : o);
                            else if (we.test(o)) {
                        for (a = a || f.appendChild(t.createElement("div")), s = (he.exec(o) || ["", ""])[1].toLowerCase(), u = ve[s] || ve._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
                        w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
                    } else p.push(t.createTextNode(o));
                    for (f.textContent = "", d = 0; o = p[d++];)
                        if (r && w.inArray(o, r) > -1) i && i.push(o);
                        else if (l = oe(o), a = ye(f.appendChild(o), "script"), l && me(a), n)
                        for (c = 0; o = a[c++];) ge.test(o.type || "") && n.push(o);
                    return f
                }
                xe = i.createDocumentFragment().appendChild(i.createElement("div")), (be = i.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), g.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue;
                var Ce = /^key/,
                    Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                    ke = /^([^.]*)(?:\.(.+)|)/;

                function Se() {
                    return !0
                }

                function Ne() {
                    return !1
                }

                function Ae(e, t) {
                    return e === function() {
                        try {
                            return i.activeElement
                        } catch (e) {}
                    }() == ("focus" === t)
                }

                function De(e, t, n, r, i, o) {
                    var a, s;
                    if ("object" == typeof t) {
                        for (s in "string" != typeof n && (r = r || n, n = void 0), t) De(e, s, n, r, t[s], o);
                        return e
                    }
                    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ne;
                    else if (!i) return e;
                    return 1 === o && (a = i, (i = function(e) {
                        return w().off(e), a.apply(this, arguments)
                    }).guid = a.guid || (a.guid = w.guid++)), e.each(function() {
                        w.event.add(this, t, i, r, n)
                    })
                }

                function je(e, t, n) {
                    n ? (Q.set(e, t, !1), w.event.add(e, t, {
                        namespace: !1,
                        handler: function(e) {
                            var r, i, o = Q.get(this, t);
                            if (1 & e.isTrigger && this[t]) {
                                if (o.length)(w.event.special[t] || {}).delegateType && e.stopPropagation();
                                else if (o = a.call(arguments), Q.set(this, t, o), r = n(this, t), this[t](), o !== (i = Q.get(this, t)) || r ? Q.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value
                            } else o.length && (Q.set(this, t, {
                                value: w.event.trigger(w.extend(o[0], w.Event.prototype), o.slice(1), this)
                            }), e.stopImmediatePropagation())
                        }
                    })) : void 0 === Q.get(e, t) && w.event.add(e, t, Se)
                }
                w.event = {
                    global: {},
                    add: function(e, t, n, r, i) {
                        var o, a, s, u, l, c, f, p, d, h, g, v = Q.get(e);
                        if (v)
                            for (n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(ie, i), n.guid || (n.guid = w.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(t) {
                                    return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                                }), l = (t = (t || "").match(R) || [""]).length; l--;) d = g = (s = ke.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
                                type: d,
                                origType: g,
                                data: r,
                                handler: n,
                                guid: n.guid,
                                selector: i,
                                needsContext: i && w.expr.match.needsContext.test(i),
                                namespace: h.join(".")
                            }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
                    },
                    remove: function(e, t, n, r, i) {
                        var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e);
                        if (v && (u = v.events)) {
                            for (l = (t = (t || "").match(R) || [""]).length; l--;)
                                if (d = g = (s = ke.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                                    for (f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || w.removeEvent(e, d, v.handle), delete u[d])
                                } else
                                    for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                            w.isEmptyObject(u) && Q.remove(e, "handle events")
                        }
                    },
                    dispatch: function(e) {
                        var t, n, r, i, o, a, s = w.event.fix(e),
                            u = new Array(arguments.length),
                            l = (Q.get(this, "events") || {})[s.type] || [],
                            c = w.event.special[s.type] || {};
                        for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
                        if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                            for (a = w.event.handlers.call(this, s, l), t = 0;
                                (i = a[t++]) && !s.isPropagationStopped();)
                                for (s.currentTarget = i.elem, n = 0;
                                    (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((w.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                            return c.postDispatch && c.postDispatch.call(this, s), s.result
                        }
                    },
                    handlers: function(e, t) {
                        var n, r, i, o, a, s = [],
                            u = t.delegateCount,
                            l = e.target;
                        if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                            for (; l !== this; l = l.parentNode || this)
                                if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                    for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                                    o.length && s.push({
                                        elem: l,
                                        handlers: o
                                    })
                                }
                        return l = this, u < t.length && s.push({
                            elem: l,
                            handlers: t.slice(u)
                        }), s
                    },
                    addProp: function(e, t) {
                        Object.defineProperty(w.Event.prototype, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: v(t) ? function() {
                                if (this.originalEvent) return t(this.originalEvent)
                            } : function() {
                                if (this.originalEvent) return this.originalEvent[e]
                            },
                            set: function(t) {
                                Object.defineProperty(this, e, {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: t
                                })
                            }
                        })
                    },
                    fix: function(e) {
                        return e[w.expando] ? e : new w.Event(e)
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        click: {
                            setup: function(e) {
                                var t = this || e;
                                return de.test(t.type) && t.click && A(t, "input") && je(t, "click", Se), !1
                            },
                            trigger: function(e) {
                                var t = this || e;
                                return de.test(t.type) && t.click && A(t, "input") && je(t, "click"), !0
                            },
                            _default: function(e) {
                                var t = e.target;
                                return de.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a")
                            }
                        },
                        beforeunload: {
                            postDispatch: function(e) {
                                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                            }
                        }
                    }
                }, w.removeEvent = function(e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n)
                }, w.Event = function(e, t) {
                    if (!(this instanceof w.Event)) return new w.Event(e, t);
                    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : Ne, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
                }, w.Event.prototype = {
                    constructor: w.Event,
                    isDefaultPrevented: Ne,
                    isPropagationStopped: Ne,
                    isImmediatePropagationStopped: Ne,
                    isSimulated: !1,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = Se, e && !this.isSimulated && e.preventDefault()
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = Se, e && !this.isSimulated && e.stopPropagation()
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = Se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                    }
                }, w.each({
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    code: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: function(e) {
                        var t = e.button;
                        return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ee.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                    }
                }, w.event.addProp), w.each({
                    focus: "focusin",
                    blur: "focusout"
                }, function(e, t) {
                    w.event.special[e] = {
                        setup: function() {
                            return je(this, e, Ae), !1
                        },
                        trigger: function() {
                            return je(this, e), !0
                        },
                        delegateType: t
                    }
                }), w.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, function(e, t) {
                    w.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function(e) {
                            var n, r = e.relatedTarget,
                                i = e.handleObj;
                            return r && (r === this || w.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                        }
                    }
                }), w.fn.extend({
                    on: function(e, t, n, r) {
                        return De(this, e, t, n, r)
                    },
                    one: function(e, t, n, r) {
                        return De(this, e, t, n, r, 1)
                    },
                    off: function(e, t, n) {
                        var r, i;
                        if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                        if ("object" == typeof e) {
                            for (i in e) this.off(i, t, e[i]);
                            return this
                        }
                        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ne), this.each(function() {
                            w.event.remove(this, e, n, t)
                        })
                    }
                });
                var qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                    Le = /<script|<style|<link/i,
                    He = /checked\s*(?:[^=]|=\s*.checked.)/i,
                    Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

                function Pe(e, t) {
                    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
                }

                function Re(e) {
                    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
                }

                function Me(e) {
                    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
                }

                function Ie(e, t) {
                    var n, r, i, o, a, s, u, l;
                    if (1 === t.nodeType) {
                        if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events))
                            for (i in delete a.handle, a.events = {}, l)
                                for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
                        J.hasData(e) && (s = J.access(e), u = w.extend({}, s), J.set(t, u))
                    }
                }

                function We(e, t, n, r) {
                    t = s.apply([], t);
                    var i, o, a, u, l, c, f = 0,
                        p = e.length,
                        d = p - 1,
                        h = t[0],
                        y = v(h);
                    if (y || p > 1 && "string" == typeof h && !g.checkClone && He.test(h)) return e.each(function(i) {
                        var o = e.eq(i);
                        y && (t[0] = h.call(this, i, o.html())), We(o, t, n, r)
                    });
                    if (p && (o = (i = Te(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                        for (u = (a = w.map(ye(i, "script"), Re)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(a, ye(l, "script"))), n.call(e[f], l, f);
                        if (u)
                            for (c = a[a.length - 1].ownerDocument, w.map(a, Me), f = 0; f < u; f++) l = a[f], ge.test(l.type || "") && !Q.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && !l.noModule && w._evalUrl(l.src, {
                                nonce: l.nonce || l.getAttribute("nonce")
                            }) : x(l.textContent.replace(Oe, ""), l, c))
                    }
                    return e
                }

                function $e(e, t, n) {
                    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && oe(r) && me(ye(r, "script")), r.parentNode.removeChild(r));
                    return e
                }
                w.extend({
                    htmlPrefilter: function(e) {
                        return e.replace(qe, "<$1></$2>")
                    },
                    clone: function(e, t, n) {
                        var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                            f = oe(e);
                        if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                            for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++) s = o[r], u = a[r], l = void 0, "input" === (l = u.nodeName.toLowerCase()) && de.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
                        if (t)
                            if (n)
                                for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++) Ie(o[r], a[r]);
                            else Ie(e, c);
                        return (a = ye(c, "script")).length > 0 && me(a, !f && ye(e, "script")), c
                    },
                    cleanData: function(e) {
                        for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                            if (G(n)) {
                                if (t = n[Q.expando]) {
                                    if (t.events)
                                        for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                                    n[Q.expando] = void 0
                                }
                                n[J.expando] && (n[J.expando] = void 0)
                            }
                    }
                }), w.fn.extend({
                    detach: function(e) {
                        return $e(this, e, !0)
                    },
                    remove: function(e) {
                        return $e(this, e)
                    },
                    text: function(e) {
                        return _(this, function(e) {
                            return void 0 === e ? w.text(this) : this.empty().each(function() {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                            })
                        }, null, e, arguments.length)
                    },
                    append: function() {
                        return We(this, arguments, function(e) {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e)
                        })
                    },
                    prepend: function() {
                        return We(this, arguments, function(e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = Pe(this, e);
                                t.insertBefore(e, t.firstChild)
                            }
                        })
                    },
                    before: function() {
                        return We(this, arguments, function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this)
                        })
                    },
                    after: function() {
                        return We(this, arguments, function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                        })
                    },
                    empty: function() {
                        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
                        return this
                    },
                    clone: function(e, t) {
                        return e = null != e && e, t = null == t ? e : t, this.map(function() {
                            return w.clone(this, e, t)
                        })
                    },
                    html: function(e) {
                        return _(this, function(e) {
                            var t = this[0] || {},
                                n = 0,
                                r = this.length;
                            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                            if ("string" == typeof e && !Le.test(e) && !ve[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = w.htmlPrefilter(e);
                                try {
                                    for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                                    t = 0
                                } catch (i) {}
                            }
                            t && this.empty().append(e)
                        }, null, e, arguments.length)
                    },
                    replaceWith: function() {
                        var e = [];
                        return We(this, arguments, function(t) {
                            var n = this.parentNode;
                            w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
                        }, e)
                    }
                }), w.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, function(e, t) {
                    w.fn[e] = function(e) {
                        for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), u.apply(r, n.get());
                        return this.pushStack(r)
                    }
                });
                var Fe = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
                    Be = function(e) {
                        var n = e.ownerDocument.defaultView;
                        return n && n.opener || (n = t), n.getComputedStyle(e)
                    },
                    _e = new RegExp(re.join("|"), "i");

                function ze(e, t, n) {
                    var r, i, o, a, s = e.style;
                    return (n = n || Be(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = w.style(e, t)), !g.pixelBoxStyles() && Fe.test(a) && _e.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
                }

                function Ue(e, t) {
                    return {
                        get: function() {
                            if (!e()) return (this.get = t).apply(this, arguments);
                            delete this.get
                        }
                    }
                }! function() {
                    function e() {
                        if (c) {
                            l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(l).appendChild(c);
                            var e = t.getComputedStyle(c);
                            r = "1%" !== e.top, u = 12 === n(e.marginLeft), c.style.right = "60%", s = 36 === n(e.right), o = 36 === n(e.width), c.style.position = "absolute", a = 12 === n(c.offsetWidth / 3), ie.removeChild(l), c = null
                        }
                    }

                    function n(e) {
                        return Math.round(parseFloat(e))
                    }
                    var r, o, a, s, u, l = i.createElement("div"),
                        c = i.createElement("div");
                    c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(g, {
                        boxSizingReliable: function() {
                            return e(), o
                        },
                        pixelBoxStyles: function() {
                            return e(), s
                        },
                        pixelPosition: function() {
                            return e(), r
                        },
                        reliableMarginLeft: function() {
                            return e(), u
                        },
                        scrollboxSize: function() {
                            return e(), a
                        }
                    }))
                }();
                var Xe = ["Webkit", "Moz", "ms"],
                    Ve = i.createElement("div").style,
                    Ge = {};

                function Ye(e) {
                    var t = w.cssProps[e] || Ge[e];
                    return t || (e in Ve ? e : Ge[e] = function(e) {
                        for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;)
                            if ((e = Xe[n] + t) in Ve) return e
                    }(e) || e)
                }
                var Qe = /^(none|table(?!-c[ea]).+)/,
                    Je = /^--/,
                    Ke = {
                        position: "absolute",
                        visibility: "hidden",
                        display: "block"
                    },
                    Ze = {
                        letterSpacing: "0",
                        fontWeight: "400"
                    };

                function et(e, t, n) {
                    var r = ne.exec(t);
                    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
                }

                function tt(e, t, n, r, i, o) {
                    var a = "width" === t ? 1 : 0,
                        s = 0,
                        u = 0;
                    if (n === (r ? "border" : "content")) return 0;
                    for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + re[a] + "Width", !0, i))) : (u += w.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += w.css(e, "border" + re[a] + "Width", !0, i) : s += w.css(e, "border" + re[a] + "Width", !0, i));
                    return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
                }

                function nt(e, t, n) {
                    var r = Be(e),
                        i = (!g.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, r),
                        o = i,
                        a = ze(e, t, r),
                        s = "offset" + t[0].toUpperCase() + t.slice(1);
                    if (Fe.test(a)) {
                        if (!n) return a;
                        a = "auto"
                    }
                    return (!g.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === w.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === w.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + tt(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
                }

                function rt(e, t, n, r, i) {
                    return new rt.prototype.init(e, t, n, r, i)
                }
                w.extend({
                    cssHooks: {
                        opacity: {
                            get: function(e, t) {
                                if (t) {
                                    var n = ze(e, "opacity");
                                    return "" === n ? "1" : n
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        columnCount: !0,
                        fillOpacity: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        gridArea: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnStart: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowStart: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0
                    },
                    cssProps: {},
                    style: function(e, t, n, r) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var i, o, a, s = V(t),
                                u = Je.test(t),
                                l = e.style;
                            if (u || (t = Ye(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                            "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
                        }
                    },
                    css: function(e, t, n, r) {
                        var i, o, a, s = V(t);
                        return Je.test(t) || (t = Ye(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = ze(e, t, r)), "normal" === i && t in Ze && (i = Ze[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
                    }
                }), w.each(["height", "width"], function(e, t) {
                    w.cssHooks[t] = {
                        get: function(e, n, r) {
                            if (n) return !Qe.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? nt(e, t, r) : ue(e, Ke, function() {
                                return nt(e, t, r)
                            })
                        },
                        set: function(e, n, r) {
                            var i, o = Be(e),
                                a = !g.scrollboxSize() && "absolute" === o.position,
                                s = (a || r) && "border-box" === w.css(e, "boxSizing", !1, o),
                                u = r ? tt(e, t, r, s, o) : 0;
                            return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - tt(e, t, "border", !1, o) - .5)), u && (i = ne.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), et(0, n, u)
                        }
                    }
                }), w.cssHooks.marginLeft = Ue(g.reliableMarginLeft, function(e, t) {
                    if (t) return (parseFloat(ze(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
                        marginLeft: 0
                    }, function() {
                        return e.getBoundingClientRect().left
                    })) + "px"
                }), w.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, function(e, t) {
                    w.cssHooks[e + t] = {
                        expand: function(n) {
                            for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + re[r] + t] = o[r] || o[r - 2] || o[0];
                            return i
                        }
                    }, "margin" !== e && (w.cssHooks[e + t].set = et)
                }), w.fn.extend({
                    css: function(e, t) {
                        return _(this, function(e, t, n) {
                            var r, i, o = {},
                                a = 0;
                            if (Array.isArray(t)) {
                                for (r = Be(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                                return o
                            }
                            return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
                        }, e, t, arguments.length > 1)
                    }
                }), w.Tween = rt, rt.prototype = {
                    constructor: rt,
                    init: function(e, t, n, r, i, o) {
                        this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
                    },
                    cur: function() {
                        var e = rt.propHooks[this.prop];
                        return e && e.get ? e.get(this) : rt.propHooks._default.get(this)
                    },
                    run: function(e) {
                        var t, n = rt.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rt.propHooks._default.set(this), this
                    }
                }, rt.prototype.init.prototype = rt.prototype, rt.propHooks = {
                    _default: {
                        get: function(e) {
                            var t;
                            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                        },
                        set: function(e) {
                            w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
                        }
                    }
                }, rt.propHooks.scrollTop = rt.propHooks.scrollLeft = {
                    set: function(e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                    }
                }, w.easing = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    _default: "swing"
                }, w.fx = rt.prototype.init, w.fx.step = {};
                var it, ot, at = /^(?:toggle|show|hide)$/,
                    st = /queueHooks$/;

                function ut() {
                    ot && (!1 === i.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ut) : t.setTimeout(ut, w.fx.interval), w.fx.tick())
                }

                function lt() {
                    return t.setTimeout(function() {
                        it = void 0
                    }), it = Date.now()
                }

                function ct(e, t) {
                    var n, r = 0,
                        i = {
                            height: e
                        };
                    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = re[r])] = i["padding" + n] = e;
                    return t && (i.opacity = i.width = e), i
                }

                function ft(e, t, n) {
                    for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                        if (r = i[o].call(n, t, e)) return r
                }

                function pt(e, t, n) {
                    var r, i, o = 0,
                        a = pt.prefilters.length,
                        s = w.Deferred().always(function() {
                            delete u.elem
                        }),
                        u = function() {
                            if (i) return !1;
                            for (var t = it || lt(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                            return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
                        },
                        l = s.promise({
                            elem: e,
                            props: w.extend({}, t),
                            opts: w.extend(!0, {
                                specialEasing: {},
                                easing: w.easing._default
                            }, n),
                            originalProperties: t,
                            originalOptions: n,
                            startTime: it || lt(),
                            duration: n.duration,
                            tweens: [],
                            createTween: function(t, n) {
                                var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                                return l.tweens.push(r), r
                            },
                            stop: function(t) {
                                var n = 0,
                                    r = t ? l.tweens.length : 0;
                                if (i) return this;
                                for (i = !0; n < r; n++) l.tweens[n].run(1);
                                return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                            }
                        }),
                        c = l.props;
                    for (! function(e, t) {
                            var n, r, i, o, a;
                            for (n in e)
                                if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a)
                                    for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                                else t[r] = i
                        }(c, l.opts.specialEasing); o < a; o++)
                        if (r = pt.prefilters[o].call(l, e, c, l.opts)) return v(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
                    return w.map(c, ft, l), v(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
                        elem: e,
                        anim: l,
                        queue: l.opts.queue
                    })), l
                }
                w.Animation = w.extend(pt, {
                        tweeners: {
                            "*": [function(e, t) {
                                var n = this.createTween(e, t);
                                return le(n.elem, e, ne.exec(t), n), n
                            }]
                        },
                        tweener: function(e, t) {
                            v(e) ? (t = e, e = ["*"]) : e = e.match(R);
                            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
                        },
                        prefilters: [function(e, t, n) {
                            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                                p = this,
                                d = {},
                                h = e.style,
                                g = e.nodeType && se(e),
                                v = Q.get(e, "fxshow");
                            for (r in n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                                    a.unqueued || s()
                                }), a.unqueued++, p.always(function() {
                                    p.always(function() {
                                        a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
                                    })
                                })), t)
                                if (i = t[r], at.test(i)) {
                                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                                        if ("show" !== i || !v || void 0 === v[r]) continue;
                                        g = !0
                                    }
                                    d[r] = v && v[r] || w.style(e, r)
                                }
                            if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d))
                                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (pe([e], !0), l = e.style.display || l, c = w.css(e, "display"), pe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function() {
                                        h.display = l
                                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                                    })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
                                    display: l
                                }), o && (v.hidden = !g), g && pe([e], !0), p.done(function() {
                                    for (r in g || pe([e]), Q.remove(e, "fxshow"), d) w.style(e, r, d[r])
                                })), u = ft(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
                        }],
                        prefilter: function(e, t) {
                            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
                        }
                    }), w.speed = function(e, t, n) {
                        var r = e && "object" == typeof e ? w.extend({}, e) : {
                            complete: n || !n && t || v(e) && e,
                            duration: e,
                            easing: n && t || t && !v(t) && t
                        };
                        return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                            v(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
                        }, r
                    }, w.fn.extend({
                        fadeTo: function(e, t, n, r) {
                            return this.filter(se).css("opacity", 0).show().end().animate({
                                opacity: t
                            }, e, n, r)
                        },
                        animate: function(e, t, n, r) {
                            var i = w.isEmptyObject(e),
                                o = w.speed(t, n, r),
                                a = function() {
                                    var t = pt(this, w.extend({}, e), o);
                                    (i || Q.get(this, "finish")) && t.stop(!0)
                                };
                            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                        },
                        stop: function(e, t, n) {
                            var r = function(e) {
                                var t = e.stop;
                                delete e.stop, t(n)
                            };
                            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                                var t = !0,
                                    i = null != e && e + "queueHooks",
                                    o = w.timers,
                                    a = Q.get(this);
                                if (i) a[i] && a[i].stop && r(a[i]);
                                else
                                    for (i in a) a[i] && a[i].stop && st.test(i) && r(a[i]);
                                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                                !t && n || w.dequeue(this, e)
                            })
                        },
                        finish: function(e) {
                            return !1 !== e && (e = e || "fx"), this.each(function() {
                                var t, n = Q.get(this),
                                    r = n[e + "queue"],
                                    i = n[e + "queueHooks"],
                                    o = w.timers,
                                    a = r ? r.length : 0;
                                for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                                delete n.finish
                            })
                        }
                    }), w.each(["toggle", "show", "hide"], function(e, t) {
                        var n = w.fn[t];
                        w.fn[t] = function(e, r, i) {
                            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ct(t, !0), e, r, i)
                        }
                    }), w.each({
                        slideDown: ct("show"),
                        slideUp: ct("hide"),
                        slideToggle: ct("toggle"),
                        fadeIn: {
                            opacity: "show"
                        },
                        fadeOut: {
                            opacity: "hide"
                        },
                        fadeToggle: {
                            opacity: "toggle"
                        }
                    }, function(e, t) {
                        w.fn[e] = function(e, n, r) {
                            return this.animate(t, e, n, r)
                        }
                    }), w.timers = [], w.fx.tick = function() {
                        var e, t = 0,
                            n = w.timers;
                        for (it = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                        n.length || w.fx.stop(), it = void 0
                    }, w.fx.timer = function(e) {
                        w.timers.push(e), w.fx.start()
                    }, w.fx.interval = 13, w.fx.start = function() {
                        ot || (ot = !0, ut())
                    }, w.fx.stop = function() {
                        ot = null
                    }, w.fx.speeds = {
                        slow: 600,
                        fast: 200,
                        _default: 400
                    }, w.fn.delay = function(e, n) {
                        return e = w.fx && w.fx.speeds[e] || e, n = n || "fx", this.queue(n, function(n, r) {
                            var i = t.setTimeout(n, e);
                            r.stop = function() {
                                t.clearTimeout(i)
                            }
                        })
                    },
                    function() {
                        var e = i.createElement("input"),
                            t = i.createElement("select").appendChild(i.createElement("option"));
                        e.type = "checkbox", g.checkOn = "" !== e.value, g.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", g.radioValue = "t" === e.value
                    }();
                var dt, ht = w.expr.attrHandle;
                w.fn.extend({
                    attr: function(e, t) {
                        return _(this, w.attr, e, t, arguments.length > 1)
                    },
                    removeAttr: function(e) {
                        return this.each(function() {
                            w.removeAttr(this, e)
                        })
                    }
                }), w.extend({
                    attr: function(e, t, n) {
                        var r, i, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
                    },
                    attrHooks: {
                        type: {
                            set: function(e, t) {
                                if (!g.radioValue && "radio" === t && A(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t), n && (e.value = n), t
                                }
                            }
                        }
                    },
                    removeAttr: function(e, t) {
                        var n, r = 0,
                            i = t && t.match(R);
                        if (i && 1 === e.nodeType)
                            for (; n = i[r++];) e.removeAttribute(n)
                    }
                }), dt = {
                    set: function(e, t, n) {
                        return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
                    }
                }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
                    var n = ht[t] || w.find.attr;
                    ht[t] = function(e, t, r) {
                        var i, o, a = t.toLowerCase();
                        return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i
                    }
                });
                var gt = /^(?:input|select|textarea|button)$/i,
                    vt = /^(?:a|area)$/i;

                function yt(e) {
                    return (e.match(R) || []).join(" ")
                }

                function mt(e) {
                    return e.getAttribute && e.getAttribute("class") || ""
                }

                function xt(e) {
                    return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
                }
                w.fn.extend({
                    prop: function(e, t) {
                        return _(this, w.prop, e, t, arguments.length > 1)
                    },
                    removeProp: function(e) {
                        return this.each(function() {
                            delete this[w.propFix[e] || e]
                        })
                    }
                }), w.extend({
                    prop: function(e, t, n) {
                        var r, i, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(e) {
                                var t = w.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : gt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                }), g.optSelected || (w.propHooks.selected = {
                    get: function(e) {
                        var t = e.parentNode;
                        return t && t.parentNode && t.parentNode.selectedIndex, null
                    },
                    set: function(e) {
                        var t = e.parentNode;
                        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                    }
                }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                    w.propFix[this.toLowerCase()] = this
                }), w.fn.extend({
                    addClass: function(e) {
                        var t, n, r, i, o, a, s, u = 0;
                        if (v(e)) return this.each(function(t) {
                            w(this).addClass(e.call(this, t, mt(this)))
                        });
                        if ((t = xt(e)).length)
                            for (; n = this[u++];)
                                if (i = mt(n), r = 1 === n.nodeType && " " + yt(i) + " ") {
                                    for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                    i !== (s = yt(r)) && n.setAttribute("class", s)
                                }
                        return this
                    },
                    removeClass: function(e) {
                        var t, n, r, i, o, a, s, u = 0;
                        if (v(e)) return this.each(function(t) {
                            w(this).removeClass(e.call(this, t, mt(this)))
                        });
                        if (!arguments.length) return this.attr("class", "");
                        if ((t = xt(e)).length)
                            for (; n = this[u++];)
                                if (i = mt(n), r = 1 === n.nodeType && " " + yt(i) + " ") {
                                    for (a = 0; o = t[a++];)
                                        for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                                    i !== (s = yt(r)) && n.setAttribute("class", s)
                                }
                        return this
                    },
                    toggleClass: function(e, t) {
                        var n = typeof e,
                            r = "string" === n || Array.isArray(e);
                        return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each(function(n) {
                            w(this).toggleClass(e.call(this, n, mt(this), t), t)
                        }) : this.each(function() {
                            var t, i, o, a;
                            if (r)
                                for (i = 0, o = w(this), a = xt(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                            else void 0 !== e && "boolean" !== n || ((t = mt(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""))
                        })
                    },
                    hasClass: function(e) {
                        var t, n, r = 0;
                        for (t = " " + e + " "; n = this[r++];)
                            if (1 === n.nodeType && (" " + yt(mt(n)) + " ").indexOf(t) > -1) return !0;
                        return !1
                    }
                });
                var bt = /\r/g;
                w.fn.extend({
                    val: function(e) {
                        var t, n, r, i = this[0];
                        return arguments.length ? (r = v(e), this.each(function(n) {
                            var i;
                            1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function(e) {
                                return null == e ? "" : e + ""
                            })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                        })) : i ? (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(bt, "") : null == n ? "" : n : void 0
                    }
                }), w.extend({
                    valHooks: {
                        option: {
                            get: function(e) {
                                var t = w.find.attr(e, "value");
                                return null != t ? t : yt(w.text(e))
                            }
                        },
                        select: {
                            get: function(e) {
                                var t, n, r, i = e.options,
                                    o = e.selectedIndex,
                                    a = "select-one" === e.type,
                                    s = a ? null : [],
                                    u = a ? o + 1 : i.length;
                                for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                                    if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                        if (t = w(n).val(), a) return t;
                                        s.push(t)
                                    }
                                return s
                            },
                            set: function(e, t) {
                                for (var n, r, i = e.options, o = w.makeArray(t), a = i.length; a--;)((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1), o
                            }
                        }
                    }
                }), w.each(["radio", "checkbox"], function() {
                    w.valHooks[this] = {
                        set: function(e, t) {
                            if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
                        }
                    }, g.checkOn || (w.valHooks[this].get = function(e) {
                        return null === e.getAttribute("value") ? "on" : e.value
                    })
                }), g.focusin = "onfocusin" in t;
                var wt = /^(?:focusinfocus|focusoutblur)$/,
                    Tt = function(e) {
                        e.stopPropagation()
                    };
                w.extend(w.event, {
                    trigger: function(e, n, r, o) {
                        var a, s, u, l, c, f, d, h, g = [r || i],
                            m = p.call(e, "type") ? e.type : e,
                            x = p.call(e, "namespace") ? e.namespace.split(".") : [];
                        if (s = h = u = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (x = m.split("."), m = x.shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[w.expando] ? e : new w.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = x.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : w.makeArray(n, [e]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                            if (!o && !d.noBubble && !y(r)) {
                                for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) g.push(s), u = s;
                                u === (r.ownerDocument || i) && g.push(u.defaultView || u.parentWindow || t)
                            }
                            for (a = 0;
                                (s = g[a++]) && !e.isPropagationStopped();) h = s, e.type = a > 1 ? l : d.bindType || m, (f = (Q.get(s, "events") || {})[e.type] && Q.get(s, "handle")) && f.apply(s, n), (f = c && s[c]) && f.apply && G(s) && (e.result = f.apply(s, n), !1 === e.result && e.preventDefault());
                            return e.type = m, o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(g.pop(), n) || !G(r) || c && v(r[m]) && !y(r) && ((u = r[c]) && (r[c] = null), w.event.triggered = m, e.isPropagationStopped() && h.addEventListener(m, Tt), r[m](), e.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (r[c] = u)), e.result
                        }
                    },
                    simulate: function(e, t, n) {
                        var r = w.extend(new w.Event, n, {
                            type: e,
                            isSimulated: !0
                        });
                        w.event.trigger(r, null, t)
                    }
                }), w.fn.extend({
                    trigger: function(e, t) {
                        return this.each(function() {
                            w.event.trigger(e, t, this)
                        })
                    },
                    triggerHandler: function(e, t) {
                        var n = this[0];
                        if (n) return w.event.trigger(e, t, n, !0)
                    }
                }), g.focusin || w.each({
                    focus: "focusin",
                    blur: "focusout"
                }, function(e, t) {
                    var n = function(e) {
                        w.event.simulate(t, e.target, w.event.fix(e))
                    };
                    w.event.special[t] = {
                        setup: function() {
                            var r = this.ownerDocument || this,
                                i = Q.access(r, t);
                            i || r.addEventListener(e, n, !0), Q.access(r, t, (i || 0) + 1)
                        },
                        teardown: function() {
                            var r = this.ownerDocument || this,
                                i = Q.access(r, t) - 1;
                            i ? Q.access(r, t, i) : (r.removeEventListener(e, n, !0), Q.remove(r, t))
                        }
                    }
                });
                var Ct = t.location,
                    Et = Date.now(),
                    kt = /\?/;
                w.parseXML = function(e) {
                    var n;
                    if (!e || "string" != typeof e) return null;
                    try {
                        n = (new t.DOMParser).parseFromString(e, "text/xml")
                    } catch (r) {
                        n = void 0
                    }
                    return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + e), n
                };
                var St = /\[\]$/,
                    Nt = /\r?\n/g,
                    At = /^(?:submit|button|image|reset|file)$/i,
                    Dt = /^(?:input|select|textarea|keygen)/i;

                function jt(e, t, n, r) {
                    var i;
                    if (Array.isArray(t)) w.each(t, function(t, i) {
                        n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                    });
                    else if (n || "object" !== b(t)) r(e, t);
                    else
                        for (i in t) jt(e + "[" + i + "]", t[i], n, r)
                }
                w.param = function(e, t) {
                    var n, r = [],
                        i = function(e, t) {
                            var n = v(t) ? t() : t;
                            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                        };
                    if (null == e) return "";
                    if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() {
                        i(this.name, this.value)
                    });
                    else
                        for (n in e) jt(n, e[n], t, i);
                    return r.join("&")
                }, w.fn.extend({
                    serialize: function() {
                        return w.param(this.serializeArray())
                    },
                    serializeArray: function() {
                        return this.map(function() {
                            var e = w.prop(this, "elements");
                            return e ? w.makeArray(e) : this
                        }).filter(function() {
                            var e = this.type;
                            return this.name && !w(this).is(":disabled") && Dt.test(this.nodeName) && !At.test(e) && (this.checked || !de.test(e))
                        }).map(function(e, t) {
                            var n = w(this).val();
                            return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
                                return {
                                    name: t.name,
                                    value: e.replace(Nt, "\r\n")
                                }
                            }) : {
                                name: t.name,
                                value: n.replace(Nt, "\r\n")
                            }
                        }).get()
                    }
                });
                var qt = /%20/g,
                    Lt = /#.*$/,
                    Ht = /([?&])_=[^&]*/,
                    Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                    Pt = /^(?:GET|HEAD)$/,
                    Rt = /^\/\//,
                    Mt = {},
                    It = {},
                    Wt = "*/".concat("*"),
                    $t = i.createElement("a");

                function Ft(e) {
                    return function(t, n) {
                        "string" != typeof t && (n = t, t = "*");
                        var r, i = 0,
                            o = t.toLowerCase().match(R) || [];
                        if (v(n))
                            for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                    }
                }

                function Bt(e, t, n, r) {
                    var i = {},
                        o = e === It;

                    function a(s) {
                        var u;
                        return i[s] = !0, w.each(e[s] || [], function(e, s) {
                            var l = s(t, n, r);
                            return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
                        }), u
                    }
                    return a(t.dataTypes[0]) || !i["*"] && a("*")
                }

                function _t(e, t) {
                    var n, r, i = w.ajaxSettings.flatOptions || {};
                    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                    return r && w.extend(!0, e, r), e
                }
                $t.href = Ct.href, w.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: Ct.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": Wt,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": JSON.parse,
                            "text xml": w.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(e, t) {
                        return t ? _t(_t(e, w.ajaxSettings), t) : _t(w.ajaxSettings, e)
                    },
                    ajaxPrefilter: Ft(Mt),
                    ajaxTransport: Ft(It),
                    ajax: function(e, n) {
                        "object" == typeof e && (n = e, e = void 0), n = n || {};
                        var r, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n),
                            g = h.context || h,
                            v = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                            y = w.Deferred(),
                            m = w.Callbacks("once memory"),
                            x = h.statusCode || {},
                            b = {},
                            T = {},
                            C = "canceled",
                            E = {
                                readyState: 0,
                                getResponseHeader: function(e) {
                                    var t;
                                    if (c) {
                                        if (!s)
                                            for (s = {}; t = Ot.exec(a);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                        t = s[e.toLowerCase() + " "]
                                    }
                                    return null == t ? null : t.join(", ")
                                },
                                getAllResponseHeaders: function() {
                                    return c ? a : null
                                },
                                setRequestHeader: function(e, t) {
                                    return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
                                },
                                overrideMimeType: function(e) {
                                    return null == c && (h.mimeType = e), this
                                },
                                statusCode: function(e) {
                                    var t;
                                    if (e)
                                        if (c) E.always(e[E.status]);
                                        else
                                            for (t in e) x[t] = [x[t], e[t]];
                                    return this
                                },
                                abort: function(e) {
                                    var t = e || C;
                                    return r && r.abort(t), k(0, t), this
                                }
                            };
                        if (y.promise(E), h.url = ((e || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(R) || [""], null == h.crossDomain) {
                            l = i.createElement("a");
                            try {
                                l.href = h.url, l.href = l.href, h.crossDomain = $t.protocol + "//" + $t.host != l.protocol + "//" + l.host
                            } catch (S) {
                                h.crossDomain = !0
                            }
                        }
                        if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), Bt(Mt, h, n, E), c) return E;
                        for (p in (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Pt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : h.accepts["*"]), h.headers) E.setRequestHeader(p, h.headers[p]);
                        if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
                        if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), r = Bt(It, h, n, E)) {
                            if (E.readyState = 1, f && v.trigger("ajaxSend", [E, h]), c) return E;
                            h.async && h.timeout > 0 && (u = t.setTimeout(function() {
                                E.abort("timeout")
                            }, h.timeout));
                            try {
                                c = !1, r.send(b, k)
                            } catch (S) {
                                if (c) throw S;
                                k(-1, S)
                            }
                        } else k(-1, "No Transport");

                        function k(e, n, i, s) {
                            var l, p, d, b, T, C = n;
                            c || (c = !0, u && t.clearTimeout(u), r = void 0, a = s || "", E.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, i && (b = function(e, t, n) {
                                for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                                    "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (r)
                                    for (i in s)
                                        if (s[i] && s[i].test(r)) {
                                            u.unshift(i);
                                            break
                                        }
                                if (u[0] in n) o = u[0];
                                else {
                                    for (i in n) {
                                        if (!u[0] || e.converters[i + " " + u[0]]) {
                                            o = i;
                                            break
                                        }
                                        a || (a = i)
                                    }
                                    o = o || a
                                }
                                if (o) return o !== u[0] && u.unshift(o), n[o]
                            }(h, E, i)), b = function(e, t, n, r) {
                                var i, o, a, s, u, l = {},
                                    c = e.dataTypes.slice();
                                if (c[1])
                                    for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                                for (o = c.shift(); o;)
                                    if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                                        if ("*" === o) o = u;
                                        else if ("*" !== u && u !== o) {
                                    if (!(a = l[u + " " + o] || l["* " + o]))
                                        for (i in l)
                                            if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                                break
                                            }
                                    if (!0 !== a)
                                        if (a && e.throws) t = a(t);
                                        else try {
                                            t = a(t)
                                        } catch (S) {
                                            return {
                                                state: "parsererror",
                                                error: a ? S : "No conversion from " + u + " to " + o
                                            }
                                        }
                                }
                                return {
                                    state: "success",
                                    data: t
                                }
                            }(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === e || "HEAD" === h.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !e && C || (C = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (n || C) + "", l ? y.resolveWith(g, [p, C, E]) : y.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (v.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
                        }
                        return E
                    },
                    getJSON: function(e, t, n) {
                        return w.get(e, t, n, "json")
                    },
                    getScript: function(e, t) {
                        return w.get(e, void 0, t, "script")
                    }
                }), w.each(["get", "post"], function(e, t) {
                    w[t] = function(e, n, r, i) {
                        return v(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
                            url: e,
                            type: t,
                            dataType: i,
                            data: n,
                            success: r
                        }, w.isPlainObject(e) && e))
                    }
                }), w._evalUrl = function(e, t) {
                    return w.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(e) {
                            w.globalEval(e, t)
                        }
                    })
                }, w.fn.extend({
                    wrapAll: function(e) {
                        var t;
                        return this[0] && (v(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                            for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                            return e
                        }).append(this)), this
                    },
                    wrapInner: function(e) {
                        return v(e) ? this.each(function(t) {
                            w(this).wrapInner(e.call(this, t))
                        }) : this.each(function() {
                            var t = w(this),
                                n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e)
                        })
                    },
                    wrap: function(e) {
                        var t = v(e);
                        return this.each(function(n) {
                            w(this).wrapAll(t ? e.call(this, n) : e)
                        })
                    },
                    unwrap: function(e) {
                        return this.parent(e).not("body").each(function() {
                            w(this).replaceWith(this.childNodes)
                        }), this
                    }
                }), w.expr.pseudos.hidden = function(e) {
                    return !w.expr.pseudos.visible(e)
                }, w.expr.pseudos.visible = function(e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                }, w.ajaxSettings.xhr = function() {
                    try {
                        return new t.XMLHttpRequest
                    } catch (e) {}
                };
                var zt = {
                        0: 200,
                        1223: 204
                    },
                    Ut = w.ajaxSettings.xhr();
                g.cors = !!Ut && "withCredentials" in Ut, g.ajax = Ut = !!Ut, w.ajaxTransport(function(e) {
                    var n, r;
                    if (g.cors || Ut && !e.crossDomain) return {
                        send: function(i, o) {
                            var a, s = e.xhr();
                            if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                for (a in e.xhrFields) s[a] = e.xhrFields[a];
                            for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                            n = function(e) {
                                return function() {
                                    n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(zt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                        binary: s.response
                                    } : {
                                        text: s.responseText
                                    }, s.getAllResponseHeaders()))
                                }
                            }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                                4 === s.readyState && t.setTimeout(function() {
                                    n && r()
                                })
                            }, n = n("abort");
                            try {
                                s.send(e.hasContent && e.data || null)
                            } catch (u) {
                                if (n) throw u
                            }
                        },
                        abort: function() {
                            n && n()
                        }
                    }
                }), w.ajaxPrefilter(function(e) {
                    e.crossDomain && (e.contents.script = !1)
                }), w.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(e) {
                            return w.globalEval(e), e
                        }
                    }
                }), w.ajaxPrefilter("script", function(e) {
                    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
                }), w.ajaxTransport("script", function(e) {
                    var t, n;
                    if (e.crossDomain || e.scriptAttrs) return {
                        send: function(r, o) {
                            t = w("<script>").attr(e.scriptAttrs || {}).prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function(e) {
                                t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                            }), i.head.appendChild(t[0])
                        },
                        abort: function() {
                            n && n()
                        }
                    }
                });
                var Xt, Vt = [],
                    Gt = /(=)\?(?=&|$)|\?\?/;
                w.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var e = Vt.pop() || w.expando + "_" + Et++;
                        return this[e] = !0, e
                    }
                }), w.ajaxPrefilter("json jsonp", function(e, n, r) {
                    var i, o, a, s = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
                    if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Gt, "$1" + i) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                        return a || w.error(i + " was not called"), a[0]
                    }, e.dataTypes[0] = "json", o = t[i], t[i] = function() {
                        a = arguments
                    }, r.always(function() {
                        void 0 === o ? w(t).removeProp(i) : t[i] = o, e[i] && (e.jsonpCallback = n.jsonpCallback, Vt.push(i)), a && v(o) && o(a[0]), a = o = void 0
                    }), "script"
                }), g.createHTMLDocument = ((Xt = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xt.childNodes.length), w.parseHTML = function(e, t, n) {
                    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((r = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(r)) : t = i), a = !n && [], (o = D.exec(e)) ? [t.createElement(o[1])] : (o = Te([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes)));
                    var r, o, a
                }, w.fn.load = function(e, t, n) {
                    var r, i, o, a = this,
                        s = e.indexOf(" ");
                    return s > -1 && (r = yt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({
                        url: e,
                        type: i || "GET",
                        dataType: "html",
                        data: t
                    }).done(function(e) {
                        o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
                    }).always(n && function(e, t) {
                        a.each(function() {
                            n.apply(this, o || [e.responseText, t, e])
                        })
                    }), this
                }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                    w.fn[t] = function(e) {
                        return this.on(t, e)
                    }
                }), w.expr.pseudos.animated = function(e) {
                    return w.grep(w.timers, function(t) {
                        return e === t.elem
                    }).length
                }, w.offset = {
                    setOffset: function(e, t, n) {
                        var r, i, o, a, s, u, l = w.css(e, "position"),
                            c = w(e),
                            f = {};
                        "static" === l && (e.style.position = "relative"), s = c.offset(), o = w.css(e, "top"), u = w.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), v(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
                    }
                }, w.fn.extend({
                    offset: function(e) {
                        if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                            w.offset.setOffset(this, e, t)
                        });
                        var t, n, r = this[0];
                        return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                            top: t.top + n.pageYOffset,
                            left: t.left + n.pageXOffset
                        }) : {
                            top: 0,
                            left: 0
                        } : void 0
                    },
                    position: function() {
                        if (this[0]) {
                            var e, t, n, r = this[0],
                                i = {
                                    top: 0,
                                    left: 0
                                };
                            if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                            else {
                                for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
                                e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
                            }
                            return {
                                top: t.top - i.top - w.css(r, "marginTop", !0),
                                left: t.left - i.left - w.css(r, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map(function() {
                            for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
                            return e || ie
                        })
                    }
                }), w.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, function(e, t) {
                    var n = "pageYOffset" === t;
                    w.fn[e] = function(r) {
                        return _(this, function(e, r, i) {
                            var o;
                            if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                            o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                        }, e, r, arguments.length)
                    }
                }), w.each(["top", "left"], function(e, t) {
                    w.cssHooks[t] = Ue(g.pixelPosition, function(e, n) {
                        if (n) return n = ze(e, t), Fe.test(n) ? w(e).position()[t] + "px" : n
                    })
                }), w.each({
                    Height: "height",
                    Width: "width"
                }, function(e, t) {
                    w.each({
                        padding: "inner" + e,
                        content: t,
                        "": "outer" + e
                    }, function(n, r) {
                        w.fn[r] = function(i, o) {
                            var a = arguments.length && (n || "boolean" != typeof i),
                                s = n || (!0 === i || !0 === o ? "margin" : "border");
                            return _(this, function(t, n, i) {
                                var o;
                                return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                            }, t, a ? i : void 0, a)
                        }
                    })
                }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
                    w.fn[t] = function(e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                    }
                }), w.fn.extend({
                    hover: function(e, t) {
                        return this.mouseenter(e).mouseleave(t || e)
                    }
                }), w.fn.extend({
                    bind: function(e, t, n) {
                        return this.on(e, null, t, n)
                    },
                    unbind: function(e, t) {
                        return this.off(e, null, t)
                    },
                    delegate: function(e, t, n, r) {
                        return this.on(t, e, n, r)
                    },
                    undelegate: function(e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                    }
                }), w.proxy = function(e, t) {
                    var n, r, i;
                    if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = a.call(arguments, 2), (i = function() {
                        return e.apply(t || this, r.concat(a.call(arguments)))
                    }).guid = e.guid = e.guid || w.guid++, i
                }, w.holdReady = function(e) {
                    e ? w.readyWait++ : w.ready(!0)
                }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = A, w.isFunction = v, w.isWindow = y, w.camelCase = V, w.type = b, w.now = Date.now, w.isNumeric = function(e) {
                    var t = w.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                }, "function" == typeof e && e.amd && e("jquery", [], function() {
                    return w
                });
                var Yt = t.jQuery,
                    Qt = t.$;
                return w.noConflict = function(e) {
                    return t.$ === w && (t.$ = Qt), e && t.jQuery === w && (t.jQuery = Yt), w
                }, n || (t.jQuery = t.$ = w), w
            });
        }, {
            "process": "JtQA"
        }],
        "NrZe": [function(require, module, exports) {
            "use strict";
            var e = this && this.__extends || function() {
                    var e = function(t, n) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                            })(t, n)
                    };
                    return function(t, n) {
                        function a() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (a.prototype = n.prototype, new a)
                    }
                }(),
                t = this && this.__assign || function() {
                    return (t = Object.assign || function(e) {
                        for (var t, n = 1, a = arguments.length; n < a; n++)
                            for (var s in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                        return e
                    }).apply(this, arguments)
                },
                n = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var a = n(require("react")),
                s = require("~/ui/settings"),
                i = require("jquery");
            window.$ = window.jQuery = i;
            var r = function(n) {
                function i(e) {
                    var t = n.call(this, e) || this;
                    return t.state = {
                        game: null,
                        mounted: !0,
                        settings: s.Settings.load(),
                        mode: "game",
                        codemaster: !1
                    }, t
                }
                return e(i, n), i.prototype.extraClasses = function() {
                    var e = "";
                    return this.state.settings.colorBlind && (e += " color-blind"), this.state.settings.darkMode && (e += " dark-mode"), this.state.settings.fullscreen && (e += " full-screen"), e
                }, i.prototype.handleKeyDown = function(e) {
                    27 == e.keyCode && this.setState({
                        mode: "game"
                    })
                }, i.prototype.componentWillMount = function() {
                    window.addEventListener("keydown", this.handleKeyDown.bind(this)), this.refresh()
                }, i.prototype.componentWillUnmount = function() {
                    window.removeEventListener("keydown", this.handleKeyDown.bind(this)), this.setState({
                        mounted: !1
                    })
                }, i.prototype.refresh = function() {
                    var e = this;
                    if (this.state.mounted) {
                        var t = {
                            game_id: this.props.gameID
                        };
                    }
                }, i.prototype.toggleRole = function(e, t) {
                    e.preventDefault(), this.setState({
                        codemaster: "codemaster" == t
                    })
                }, i.prototype.guess = function(e, t, n) {
                    var a = this;
                    e.preventDefault(), this.state.game.revealed[t] || this.state.game.winning_team || $.post("/guess", JSON.stringify({
                        game_id: this.state.game.id,
                        index: t
                    }), function(e) {
                        a.setState({
                            game: e
                        })
                    })
                }, i.prototype.currentTeam = function() {
                    return this.state.game.round % 2 == 0 ? this.state.game.starting_team : "red" == this.state.game.starting_team ? "blue" : "red"
                }, i.prototype.remaining = function(e) {
                    for (var t = 0, n = 0; n < this.state.game.revealed.length; n++) this.state.game.revealed[n] || this.state.game.layout[n] == e && t++;
                    return t
                }, i.prototype.endTurn = function() {
                    var e = this;
                    $.post("/end-turn", JSON.stringify({
                        game_id: this.state.game.id
                    }), function(t) {
                        e.setState({
                            game: t
                        })
                    })
                }, i.prototype.nextGame = function(e) {
                    var t = this;
                    e.preventDefault(), (this.state.game.winning_team || confirm("Do you really want to start a new game?")) && $.post("/next-game", JSON.stringify({
                        game_id: this.state.game.id,
                        word_set: this.state.game.word_set,
                        create_new: !0
                    }), function(e) {
                        t.setState({
                            game: e,
                            codemaster: !1
                        })
                    })
                }, i.prototype.toggleSettingsView = function(e) {
                    null != e && e.preventDefault(), "settings" == this.state.mode ? this.setState({
                        mode: "game"
                    }) : this.setState({
                        mode: "settings"
                    })
                }, i.prototype.toggleSetting = function(e, n) {
                    null != e && e.preventDefault();
                    var a = t({}, this.state.settings);
                    a[n] = !a[n], this.setState({
                        settings: a
                    }), s.Settings.save(a)
                }, i.prototype.render = function() {
                    var e, t, n, i = this;
                    if (!this.state.game) return a.createElement("p", {
                        className: "loading"
                    }, "Loading…");
                    if ("settings" == this.state.mode) return a.createElement(s.SettingsPanel, {
                        toggleView: function(e) {
                            return i.toggleSettingsView(e)
                        },
                        toggle: function(e, t) {
                            return i.toggleSetting(e, t)
                        },
                        values: this.state.settings
                    });
                    this.state.settings.darkMode ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode"), this.state.game.winning_team ? (t = this.state.game.winning_team + " win", e = this.state.game.winning_team + " wins!") : (t = this.currentTeam(), e = this.currentTeam() + "'s turn"), this.state.game.winning_team || this.state.codemaster || (n = a.createElement("div", {
                        id: "end-turn-cont"
                    }, a.createElement("button", {
                        onClick: function(e) {
                            return i.endTurn(e)
                        },
                        id: "end-turn-btn"
                    }, "End ", this.currentTeam(), "'s turn")));
                    var r = "blue";
                    "blue" == this.state.game.starting_team && (r = "red");
                    var o = null;
                    return this.state.settings.fullscreen || (o = a.createElement("div", {
                        id: "share"
                    }, "Send this link to friends:", a.createElement("a", {
                        className: "url",
                        href: window.location.href
                    }, window.location.href))), a.createElement("div", {
                        id: "game-view",
                        className: (this.state.codemaster ? "codemaster" : "player") + this.extraClasses()
                    }, o, a.createElement("div", {
                        id: "status-line",
                        className: t
                    }, a.createElement("div", {
                        id: "remaining"
                    }, a.createElement("span", {
                        className: this.state.game.starting_team + "-remaining"
                    }, this.remaining(this.state.game.starting_team)), " – ", a.createElement("span", {
                        className: r + "-remaining"
                    }, this.remaining(r))), a.createElement("div", {
                        id: "status",
                        className: "status-text"
                    }, e), n), a.createElement("div", {
                        className: "board"
                    }, this.state.game.words.map(function(e, t) {
                        return a.createElement("div", {
                            key: t,
                            className: "cell " + i.state.game.layout[t] + " " + (i.state.game.revealed[t] ? "revealed" : "hidden-word"),
                            onClick: function(n) {
                                return i.guess(n, t, e)
                            }
                        }, a.createElement("span", {
                            className: "word"
                        }, e))
                    })), a.createElement("form", {
                        id: "mode-toggle",
                        className: this.state.codemaster ? "codemaster-selected" : "player-selected"
                    }, a.createElement(s.SettingsButton, {
                        onClick: function(e) {
                            i.toggleSettingsView(e)
                        }
                    }), a.createElement("button", {
                        onClick: function(e) {
                            return i.toggleRole(e, "player")
                        },
                        className: "player"
                    }, "Player"), a.createElement("button", {
                        onClick: function(e) {
                            return i.toggleRole(e, "codemaster")
                        },
                        className: "codemaster"
                    }, "Spymaster"), a.createElement("button", {
                        onClick: function(e) {
                            return i.nextGame(e)
                        },
                        id: "next-game-btn"
                    }, "Next game")), a.createElement("div", {
                        id: "coffee"
                    }, a.createElement("a", {
                        href: "https://www.buymeacoffee.com/jbowens"
                    }, "Buy the developer a coffee.")))
                }, i
            }(a.Component);
            exports.Game = r;
        }, {
            "react": "HdMw",
            "~/ui/settings": "hiQs",
            "jquery": "HlZQ"
        }],
        "ISGT": [function(require, module, exports) {
            module.exports = {
                English: "AFRICA, AGENT, AIR, ALIEN, ALPS, AMAZON, AMBULANCE, AMERICA, ANGEL, ANTARCTICA, APPLE, ARM, ATLANTIS, AUSTRALIA, AZTEC, BACK, BALL, BAND, BANK, BAR, BARK, BAT, BATTERY, BEACH, BEAR, BEAT, BED, BEIJING, BELL, BELT, BERLIN, BERMUDA, BERRY, BILL, BLOCK, BOARD, BOLT, BOMB, BOND, BOOM, BOOT, BOTTLE, BOW, BOX, BRIDGE, BRUSH, BUCK, BUFFALO, BUG, BUGLE, BUTTON, CALF, CANADA, CAP, CAPITAL, CAR, CARD, CARROT, CASINO, CAST, CAT, CELL, CENTAUR, CENTER, CHAIR, CHANGE, CHARGE, CHECK, CHEST, CHICK, CHINA, CHOCOLATE, CHURCH, CIRCLE, CLIFF, CLOAK, CLUB, CODE, COLD, COMIC, COMPOUND, CONCERT, CONDUCTOR, CONTRACT, COOK, COPPER, COTTON, COURT, COVER, CRANE, CRASH, CRICKET, CROSS, CROWN, CYCLE, CZECH, DANCE, DATE, DAY, DEATH, DECK, DEGREE, DIAMOND, DICE, DINOSAUR, DISEASE, DOCTOR, DOG, DRAFT, DRAGON, DRESS, DRILL, DROP, DUCK, DWARF, EAGLE, EGYPT, EMBASSY, ENGINE, ENGLAND, EUROPE, EYE, FACE, FAIR, FALL, FAN, FENCE, FIELD, FIGHTER, FIGURE, FILE, FILM, FIRE, FISH, FLUTE, FLY, FOOT, FORCE, FOREST, FORK, FRANCE, GAME, GAS, GENIUS, GERMANY, GHOST, GIANT, GLASS, GLOVE, GOLD, GRACE, GRASS, GREECE, GREEN, GROUND, HAM, HAND, HAWK, HEAD, HEART, HELICOPTER, HIMALAYAS, HOLE, HOLLYWOOD, HONEY, HOOD, HOOK, HORN, HORSE, HORSESHOE, HOSPITAL, HOTEL, ICE, ICE CREAM, INDIA, IRON, IVORY, JACK, JAM, JET, JUPITER, KANGAROO, KETCHUP, KEY, KID, KING, KIWI, KNIFE, KNIGHT, LAB, LAP, LASER, LAWYER, LEAD, LEMON, LEPRECHAUN, LIFE, LIGHT, LIMOUSINE, LINE, LINK, LION, LITTER, LOCH NESS, LOCK, LOG, LONDON, LUCK, MAIL, MAMMOTH, MAPLE, MARBLE, MARCH, MASS, MATCH, MERCURY, MEXICO, MICROSCOPE, MILLIONAIRE, MINE, MINT, MISSILE, MODEL, MOLE, MOON, MOSCOW, MOUNT, MOUSE, MOUTH, MUG, NAIL, NEEDLE, NET, NEW YORK, NIGHT, NINJA, NOTE, NOVEL, NURSE, NUT, OCTOPUS, OIL, OLIVE, OLYMPUS, OPERA, ORANGE, ORGAN, PALM, PAN, PANTS, PAPER, PARACHUTE, PARK, PART, PASS, PASTE, PENGUIN, PHOENIX, PIANO, PIE, PILOT, PIN, PIPE, PIRATE, PISTOL, PIT, PITCH, PLANE, PLASTIC, PLATE, PLATYPUS, PLAY, PLOT, POINT, POISON, POLE, POLICE, POOL, PORT, POST, POUND, PRESS, PRINCESS, PUMPKIN, PUPIL, PYRAMID, QUEEN, RABBIT, RACKET, RAY, REVOLUTION, RING, ROBIN, ROBOT, ROCK, ROME, ROOT, ROSE, ROULETTE, ROUND, ROW, RULER, SATELLITE, SATURN, SCALE, SCHOOL, SCIENTIST, SCORPION, SCREEN, SCUBA DIVER, SEAL, SERVER, SHADOW, SHAKESPEARE, SHARK, SHIP, SHOE, SHOP, SHOT, SINK, SKYSCRAPER, SLIP, SLUG, SMUGGLER, SNOW, SNOWMAN, SOCK, SOLDIER, SOUL, SOUND, SPACE, SPELL, SPIDER, SPIKE, SPINE, SPOT, SPRING, SPY, SQUARE, STADIUM, STAFF, STAR, STATE, STICK, STOCK, STRAW, STREAM, STRIKE, STRING, SUB, SUIT, SUPERHERO, SWING, SWITCH, TABLE, TABLET, TAG, TAIL, TAP, TEACHER, TELESCOPE, TEMPLE, THEATER, THIEF, THUMB, TICK, TIE, TIME, TOKYO, TOOTH, TORCH, TOWER, TRACK, TRAIN, TRIANGLE, TRIP, TRUNK, TUBE, TURKEY, UNDERTAKER, UNICORN, VACUUM, VAN, VET, WAKE, WALL, WAR, WASHER, WASHINGTON, WATCH, WATER, WAVE, WEB, WELL, WHALE, WHIP, WIND, WITCH, WORM, YARD",
                Czech: "AFRIKA, AMERIČAN, AMERIKA, ANDĚL, ANGLIE, ASIE, ATLET, AUSTRÁLIE, AUTO, AUTOBUS, BAČKORA, BANÁN, BANKÉŘ, BASA, BÁSNÍK, BERLÍN, BETON, BIOLOG, BOTA, BRAMBORA, BRÁNA, BRATISLAVA, BRAZÍLIE, BRNO, BROUK, BRÝLE, BŘICH, BUBLINA, BUŇKA, CESTA, CESTOVATEL, CIRKUS, CIZINEC, CUKR, ČARODĚJ, ČECH, ČEPICE, ČERT, ČÍNA, ČOČKA, ČOKOLÁDA, DĚLNÍK, DĚLO, DÉMON, DÉŠŤ, DIAMANT, DINOSAURUS, DÍTĚ, DOKTOR, DRAK, DRÁT, DŘEVO, DUB, DUCH, DŮM, DVEŘE, DÝKA, DŽUNGLE, FIGURKA, FILM, FILOZOF, FLÉTNA, FOTBALISTA, FRANCIE, FYZIK, GUMA, HÁK, HEREC, HLAS, HLAVA, HLÍNA, HLINÍK, HODINKY, HOKEJISTA, HOLANĎAN, HORA, HOSPODA, HOUBA, HRA, HRAD, HRNEC, HŘBITOV, HŘEBEN, HŘEBÍK, HUDBA, HŮL, HVĚZDA, CHLÉB, CHOBOTNICE, ITÁLIE, JABLKO, JÁDRO, JARO, JAZYK, JEDNOROŽEC, JEHLA, JEŘÁB, JESKYNĚ, JEŠTĚRKA, JEZDEC, JEZERO, JEŽEK, KABÁT, KAKTUS, KALHOTY, KAMARÁD, KÁMEN, KAMION, KANADA, KAPR, KARBANÍK, KARTA, KARTÁČ, KENTAUR, KEŘ, KINO, KLADIVO, KLAUN, KLÁVESNICE, KLAVÍR, KLEŠTĚ, KLÍČ, KLIKA, KLOBOUK, KLOKAN, KMEN, KNEDLÍK, KNIHA, KNIHOVNA, KNÍR, KOČKA, KOLEJ, KOLENO, KOLO, KOLOBĚŽKA, KOMETA, KOMÍN, KONEV, KONÍK, KORUNA, KOŘEN, KOŘENÍ, KOSMONAUT, KOSTKA, KOŠ, KOŠILE, KOULE, KOUZLO, KRÁL, KRÁPNÍK, KRÁVA, KROKODÝL, KŘÍŽ, KUŘE, KVĚTINA, KYTARA, KYVADLO, LÁHEV, LAMPA, LASER, LÁSKA, LÁTKA, LED, LES, LETADLO, LÉTO, LEV, LIMONÁDA, LIST, LIŠKA, LÍZÁTKO, LOCHNESKA, LOKOMOTIVA, LONDÝN, LOPATA, LOS, LOUKA, LUPIČ, LŽÍCE, MAĎAR, MARS, MASO, MATEMATIK, MATKA, MEČ, MEDVĚD, MELOUN, MĚSÍC, MĚSTO, MÍR, MLÉKO, MOŘE, MOSKVA, MOTORKA, MOTÝLEK, MOUKA, MRAKODRAP, MRAVENEC, MRÁZ, MRKEV, MUCHOMŮRKA, MYŠ, NÁDRAŽÍ, NĚMECKO, NEMOC, NEMOCNICE, NEPŘÍTEL, NETOPÝR, NINJA, NOC, NOHA, NOS, NŮŽ, OBCHOD, OBR, OHEŇ, OKNO, OKO, OMÁČKA, OREL, ORGÁN, OSTROV, OTEC, OVCE, PANÁK, PÁNEV, PANNA, PAPÍR, PAPOUŠEK, PARK, PARNÍK, PAŘÍŽ, PAS, PAVOUK, PEC, PEKING, PES, PILA, PISTOLE, PIVO, PLAČKA, PLANETA, PLAST, PLASTELÍNA, PLÁŠŤ, PLOT, PLYN, POČÍTAČ, PODNIKATEL, PODVODNÍK, PODZIM, POEZIE, POHÁDKA, PÓL, POLE, POLÉVKA, POLICISTA, POMERANČ, PONOŽKA, POPEL, POUŠŤ, PRÁCE, PRAČKA, PRAHA, PRACH, PRASE, PREZIDENT, PRINCEZNA, PRODAVAČ, PROGRAMÁTOR, PROVAZ, PRSTEN, PTAKOPYSK, RÁDIO, RADOST, RAJČE, RAKETA, ROBOT, ROH, ROLE, ROPA, RUČNÍK, RUKA, RUS, RŮŽE, ŘECKO, ŘEKA, ŘETĚZ, ŘIDIČ, SALÁM, SALÁT, SAVEC, SEDLÁK, SEDMIKRÁSKA, SEKERA, SESTRA, SILNICE, SKLO, SKŘÍTEK, SLON, SLUNCE, SMRK, SMRT, SMŮLA, SNĚŽENKA, SNÍH, SRDCE, STROM, STŘELEC, STŘÍBRO, SUKNĚ, SŮL, SUPERHRDINA, SVĚTLO, SVÍČKA, SÝR, ŠIPKA, ŠKOLA, ŠPAGETA, ŠPANĚL, ŠROUBEK, ŠROUBOVÁK, ŠTĚSTÍ, ŠTIKA, ŠTÍR, ŠVESTKA, TALÍŘ, TAŠKA, TELEFON, TELEVIZE, TLAČÍTKO, TOPOL, TRÁVA, TROUBA, TRPASLÍK, TRUBKA, TŘEŠEŇ, TUČŇÁK, TULIPÁN, TUŽKA, TYGR, UČITEL, ÚDOLÍ, UHLÍ, UCHO, UMĚLEC, UPÍR, ÚŘAD, VÁHA, VÁLKA, VĚDEC, VEJCE, VELRYBA, VENUŠE, VESMÍR, VESNICE, VĚTRNÍK, VĚZEŇ, VĚŽ, VÍČKO, VÍDEŇ, VIDLIČKA, VÍLA, VÍNO, VÍRA, VÍTR, VLAK, VLNA, VODA, VODNÍK, VOJEVŮDCE, VRCHOL, VŮZ, VZDUCH, YETTI, ZADEK, ZÁKON, ZÁKUSEK, ZÁMEK, ZEBRA, ZEĎ, ZELÍ, ZEMĚ, ZIMA, ZLATO, ZOMBIE, ZPĚVÁK, ZRCADLO, ZUB, ZVONEK, ŽEBRÁK, ŽEBRO, ŽEHLIČKA, ŽELEZO, ŽELVA, ŽRALOK",
                German: "ABFLUSS, ABGABE, ABKRATZEN, ABLEHNUNG, ABSATZ, ABSTRAKT, ABSTURZ, ABZUG, ADLER, AFRIKA, AGENT, ÄGYPTEN, ÄHRE, AKNE, AKT, AKTIONÄR, ALBTRAUM, ALIEN, ALIMENTE, ALKOHOL, ALLE, ALLIGATOR, ALPEN, ALPHATIER, ALPTRAUM, ALT, AMERIKA, AMERIKANER, ANGEL, ANGELN, ANKER, ANTARKTIS, ANWALT, ANWENDUNG, APATHIE, APFEL, APFELSAFT, APOTHEKE, APPLAUS, ARBEIT, ARBEITSLOS, ARCHÄOLOGE, ARISTOKRAT, ARM, ARMADA, ARMBANDUHR, ART, ARZT, ASCHE, ASTRONAUT, ATLANTIS, ATLAS, ATMEN, AUFGABE, AUFLAUF, AUFTAUEN, AUFZUG, AUGE, AUGENBRAUE, AUSBLENDEN, AUSDRUCK, AUSGEFALLEN, AUSSENSEITE, AUSTRALIEN, AUSWAHL, AUSWEIS, AUTO, AUTOBAHN, AVOCADO, BABY-SITTER, BACH, BAGUETTE, BAHN, BALKON, BALL, BALLON, BANANE, BAND, BANDE, BÄNDER, BANK, BAR, BÄR, BARREN, BART, BASEBALL, BASKETBALL, BATTERIE, BAU, BAUER, BAUM, BAYERN, BECKEN, BEDAUERN, BEDIENEN, BEETHOVEN, BEGRIFF, BEIN, BEITRAG, BENZIN, BERG, BERGSTEIGER, BERLINER, BESEN, BESSERWISSER, BETRIEB, BETRUG, BETT, BETTWANZE, BEUTEL, BEVÖLKERUNG, BIENENSTICH, BIER, BILD, BINDUNG, BIRNE, BISS, BLASE, BLATT, BLAU, BLAUPAUSE, BLAUWAL, BLEICHMITTEL, BLEISTIFT, BLINKER, BLINZELN, BLUME, BLÜTE, BLÜTEZEIT, BOBFAHREN, BOCK, BODEN, BOGEN, BOHNENSTANGE, BOMBE, BONSAI, BOOT, BÖRSE, BOTSCHAFT, BOX, BOXER, BRAND, BRATEN, BRAUCHTUM, BRAUSE, BRAUT, BRÄUTIGAM, BRAUTKLEID, BREMSE, BREMSLICHT, BRIEF, BRILLE, BROKKOLI, BRÖTCHEN, BROTZEIT, BRUCH, BRÜCKE, BRUDER, BRÜNETT, BRUNFT, BRUST, BRUT, BUCH, BUCHEN, BÜFFEL, BUG, BULLE, BUND, BUNTSTIFT, BURG, BÜRO, BUS, BUSCH, BUTTERBROT, CAFÉ, CAFETERIA, CAMPINGPLATZ, CD, CHAMPION, CHARME, CHEERLEADER, CHEF, CHEFIN, CHEFKOCH, CHEMIE, CHINA, CHIP, CHOR, CLIP, CLOWN, COACH, COLLEGE, COMPUTER, COWBOY, CREME, DACH, DAME, DANEBEN, DANKBARKEIT, DART, DAUMEN, DECKE, DELLE, DEMO, DEMONTIEREN, DEPONIE, DEUTSCHLAND, DICHTERIN, DICHTUNG, DIEB, DIELE, DIETRICH, DINOSAURIER, DIREKTOR, DISKURS, DOKTOR, DOMINOSTEINE, DONNER, DOSE, DOSEN, DRACHE, DRACHEN, DREIECK, DROSSEL, DRÜCKEN, DRUCKER, DUNST, DUSCHE, DUTZEND, DUZENT, EBENHOLZ, ECKE, EDELSTEIN, EHRE, EIDECHSE, EIMER, EINBRUCH, EINHORN, EINLADUNG, EINS, EINZELN, EIS, EISBAHN, EISEN, EISTEE, EIZELLE, ELEFANT, ELEKTRIZITÄT, ELEMENT, ELF, ELFENBEIN, ELLE, ELLENBOGEN, ENDLOS, ENERGIE, ENGEL, ENGLAND, ENTE, ENTWICKLUNG, ERBEN, ERDE, ERGONOMISCH, ERIKA, ERSCHROCKEN, ERSTATTUNG, ERWEITERUNG, ESELSOHR, ESSEN, ETAPPE, EUREKA, EUROPA, FACKEL, FAHNENMAST, FAHRRAD, FALL, FALLSCHIRM, FALTE, FÄSSER, FASTENBRECHEN, FATAL, FAULENZER, FEDER, FEE, FEHLER, FEIGE, FELGE, FERNSEHEN, FERTIG, FESSEL, FEST, FEUDALISMUS, FEUER, FIGUR, FILM, FINGER, FINGERHUT, FISCH, FIX, FLACH, FLÄCHE, FLANELL, FLASCHE, FLATTERN, FLECK, FLECKEN, FLEDERMAUS, FLIEGE, FLOCK, FLOSS, FLÖTE, FLÜGEL, FLUGZEUG, FLUGZEUGE, FLUR, FLUSS, FOLIE, FORM, FORSCHER, FOTO, FRACHT, FRANKREICH, FRANSEN, FRAU, FREUDE, FREUNDLICHKEIT, FREUNDSCHAFT, FRIEDEN, FROSCH, FRÜHLING, FUCHS, FUGE, FUNKEN, FUSS, FUSSBALL, FUSSBALLSCHUHE, FUTTER, GABEL, GALOPP, GANG, GANZ, GARTEN, GAS, GASTHAUS, GEBÄCK, GEBEN, GEBIET, GEBIRGSÜBERGANG, GEBROCHEN, GEBURTSTAG, GEDANKE, GEDICHT, GEFAHR, GEGENTEIL, GEHALT, GEHEIM, GEIGE, GEIST, GELÄNDER, GELD, GELEE, GEMEIN, GENAU, GENIE, GENOSSE, GERICHT, GESCHIRR, GESCHOSS, GESELLSCHAFT, GESICHT, GESINNUNG, GEWALT, GEWEBE, GEWEHR, GIESSKANNE, GIFT, GIPFEL, GITARRE, GLANZ, GLAS, GLOCKE, GLOCKENSPIEL, GLÜCK, GLÜCKLICH, GLÜHBIRNE, GOLD, GOLF, GOTT, GRABEN, GRAD, GRAFIK, GRANATE, GRAPHIT, GRAS, GRAU, GREIFEN, GRIECHENLAND, GRIFF, GRIPPE, GROSS, GRÜBCHEN, GRUBE, GRÜN, GRUND, GRUPPE, GUMMI, GÜRTEL, GUT, HAARE, HAFERMILCH, HAFTEN, HAHN, HAI, HALB, HAMBURGER, HAMMER, HAND, HANDELN, HANDSCHRIFT, HANDSCHUH, HANDY, HÄNGEN, HARZ, HASE, HAUPT, HAUS, HAUSAUFGABEN, HAUSBOOT, HECK, HECKE, HEFT, HEIDE, HEIM, HEISS, HEMD, HERAUSGEBER, HERBERGE, HERD, HERING, HERZ, HEXE, HIMALAJA, HIMMEL, HINWEIS, HIRTE, HOCH, HOCHZEIT, HOCKEY, HOLLYWOOD, HONIG, HORN, HORST, HOSE, HOSEN, HOTEL, HUBSCHRAUBER, HÜGEL, HUHN, HUND, HUNDEHÜTTE, HUNGRIG, HUPE, HUPEN, HÜPFSPIEL, HÜRDE, HUSTEN, HUT, HÜTTE, ILLEGAL, IMPLODIEREN, INDIANER, INDIEN, INGWER, INKA, INQUISITION, INTERNET, IRIS, IRONIE, JÄGER, JAGUAR, JAHR, JAHRHUNDERT, JAPAN, JEANS, JET, JOGGEN, JOURNAL, JUGENDLICHE, JUNGE, JURA, KABINE, KÄFER, KAHL, KAISER, KALK, KALT, KAMIN, KAMM, KANADA, KANAL, KÄNGURU, KANONE, KANTE, KANZLER, KAPELLE, KAPITALISMUS, KAPITÄN, KAROTTE, KARTE, KARTOFFEL, KARTOGRAPHIE, KARTON, KASINO, KATAPULT, KATER, KATZE, KATZENAUGE, KAUEN, KAUFEN, KAUGUMMI, KEGEL, KERZE, KESSEL, KETCHUP, KETTE, KIEFER, KIEL, KILLER, KILOGRAMM, KINDERBETT, KIPPE, KIRCHE, KISSEN, KITA, KIWI, KLAPPE, KLAVIER, KLEID, KLEIDERSTANGE, KLEMPNER, KLIPPE, KLUFT, KNALLHART, KNEIFEN, KNETE, KNIE, KNÖCHEL, KNOPF, KNUSPRIG, KOALA, KOCH, KOCHEN, KOHLE, KOKS, KOMFORT, KOMMENTAR, KOMPASS, KÖNIG, KÖNIGIN, KONTINUUM, KONVERSATION, KONZERT, KOPFHÖRER, KORB, KORN, KÖRPER, KORRIGIEREN, KRAFT, KRÄHE, KRANK, KRANKENHAUS, KRANKHEIT, KRAUT, KREBS, KREIDE, KREIS, KREISVERKEHR, KREUZ, KREUZFAHRT, KRIEG, KRIPPE, KRITISIEREN, KRONE, KRÜMEL, KRUSTE, KÜCHE, KUCHEN, KUH, KULI, KULTUR, KUNDE, KUNST, KURZ, KUSCHELN, LACHEN, LACHS, LACK, LADEGERÄT, LADUNG, LAGER, LAKEN, LAKRITZE, LANGSAM, LÄRCHE, LASER, LAST, LASTER, LASTWAGEN, LATEIN, LÄTZCHEN, LÄUFER, LAUTSPRECHER, LEBEN, LEBENSSTIL, LEBERFLECK, LEBKUCHEN, LECKEN, LEHRER, LEIDENSCHAFT, LEIM, LEISE, LEITER, LEUCHTE, LEVEL, LICHT, LICHTSCHWERT, LIEBE, LIED, LIEDTEXT, LIEDTEXTE, LIMOUSINE, LINIE, LINSE, LIPPE, LOCH, LOCH NESS, LÖFFEL, LOGE, LOLLI, LONDON, LOS, LÖSCHEN, LÖSUNG, LÖWE, LÖWENZAHN, LOYALITÄT, LUFT, LUFTSCHIFF, LUMPEN, LUNCHBOX, LUST, LUXEMBURG, MACHINE, MACHO, MÄDCHEN, MÄHER, MAL, MALER, MAMA, MAMMUT, MANDEL, MANGEL, MANN, MANSCHETTE, MARIA, MARIENKÄFER, MARIONETTE, MARK, MARKE, MARKIERUNG, MARS, MÄRTYRER, MASCHINE, MASKOTTCHEN, MASSSTAB, MAST, MATRATZE, MATRIARCHAT, MATTE, MAUER, MAUS, MEER, MELONE, MESSE, MESSER, MEXIKO, MIKROSKOP, MILLIONÄR, MINE, MINI, MINUS, MISTGABEL, MITTAGESSEN, MITTEL, MITTSOMMER, MODERN, MOMENT, MOND, MONITOR, MONSTER, MONTAG, MOOS, MORAL, MORGENROT, MORGENSTERN, MOSKAU, MOTOR, MOTORHAUBE, MOTORRAD, MOTTE, MÜDE, MÜHLE, MÜLL, MUMMENSCHANZ, MUND, MURMEL, MUSCHEL, MUSIK, MUTIG, MUTTER, NACHBAR, NACHT, NACHTRAG, NADEL, NAGEL, NAGELHAUT, NAIV, NARBE, NASE, NATION, NATUR, NEBEL, NEHMEN, NEST, NETZ, NEUTRON, NEW YORK, NICHTE, NICHTSNUTZ, NIESEN, NIETE, NINJA, NONNE, NOTE, NOTLÜGE, NULL, NUSS, NUTZEN, OFEN, OFFEN, ÖFFNER, OHR, OKTOPUS, ÖL, OLYMP, OLYMPIA, OLYMPIONIKE, OPA, OPER, OPPOSITION, OPTIK, ORANGE, ORGAN, ORGANISIEREN, ORT, OSTEN, OSTERN, OTTER, OZEAN, PALAST, PAPA, PAPIER, PARK, PARODIE, PARTY, PASS, PASSWORT, PAUKEN, PEITSCHE, PEKING, PENDEL, PENIS, PENNY, PENSION, PERSÖNLICH, PERÜCKE, PFEFFER, PFEIFE, PFEIFEN, PFERD, PFLANZE, PFLASTER, PFLEGE, PFLOCK, PFLÜGEN, PHILOSOPH, PHÖNIX, PICKEL, PICKNICK, PILOT, PILZ, PING, PINGUIN, PIRAT, PISTOLE, PLAKATWAND, PLANEN, PLATTE, PO, POL, POLIZEI, POMP, POMPÖS, PONG, POOL, PORTFOLIO, POSITIV, POSTFACH, PRAKTIKANT, PRELLUNG, PRIESTER, PRINZESSIN, PRIVAT, PROKURIST, PROTESTANT, PROTHESE, PROTOKOLL, PSYCHOLOGIN, PULLOVER, PUNK, PUNKT, PUPPE, PYJAMAS, PYRAMIDE, QUADRATISCH, QUARANTÄNE, QUARTETT, QUELLE, RAD, RADIO, RASEN, RASENMÄHER, RÄTSEL, RAUM, RAUPE, RAUTE, REBELL, RECHNER, RECHT, RECYCELN, REDNER, REGAL, REGEN, REGENBOGEN, REGENWASSER, REIF, REIHE, REIM, REIS, REISE, REITEN, RELATION, RENNEN, RICHTIG, RIEGEL, RIEMEN, RIESE, RING, RIPPE, RITTER, ROBOTER, ROCK, ROLLE, ROLLSTUHL, ROLLTREPPE, ROM, RÖMER, ROSE, ROSINE, ROST, ROT, ROULETTE, RÜCKEN, RÜCKGRAT, RUCKSACK, RUDER, RUND, RUNDE, RUTE, SAISON, SAITE, SALON, SALZ, SAMMLUNG, SANDBURG, SANDKASTEN, SANDWICH, SÄNGER, SATELLIT, SATURN, SATZ, SAUM, SCHACH, SCHADEN, SCHAF, SCHAFE, SCHALE, SCHALTER, SCHÄRPE, SCHATZ, SCHAUFEL, SCHEIBE, SCHEIN, SCHELLE, SCHEUERN, SCHIFF, SCHIFFBRUCH, SCHILD, SCHIMMEL, SCHIMPANSE, SCHIRM, SCHLAF, SCHLAFEN, SCHLAMM, SCHLANGE, SCHLAUCH, SCHLEIER, SCHLEIFE, SCHLENDRIAN, SCHLIPS, SCHLOSS, SCHLUCK, SCHLUMMERN, SCHLÜSSEL, SCHMUTZIG, SCHNABELTIER, SCHNEE, SCHNEEBESEN, SCHNEEMANN, SCHNELL, SCHNUR, SCHNÜRSENKEL, SCHOKOLADE, SCHÖNHEIT, SCHONZEIT, SCHOTTEN, SCHRAUBE, SCHREIBTISCH, SCHRUMPFEN, SCHUH, SCHULE, SCHUPPEN, SCHURKE, SCHWAMM, SCHWARM, SCHWEIF, SCHWEINSOHR, SCHWEISSER, SCHWIEGERMUTTER, SCHWIMMEN, SCHWINDEL, SCHWINGEN, SEGEL, SEITE, SEKRETÄR, SEKT, SET, SHAKESPEARE, SHAMPOO, SHERIFF, SICHEL, SICHER, SICHERHEIT, SICHTWEISE, SIEB, SIEGEL, SIESTA, SIGNAL, SILHOUETTE, SINN, SKELETT, SKI, SOFA, SOFTDRINK, SOLDAT, SOLDATIN, SONNE, SONNENBRAND, SOUVENIR, SOZIALISMUS, SPEED, SPIEGEL, SPIEL, SPIELPLATZ, SPINNE, SPION, SPIONIEREN, SPITZE, SPORTLER, SPRINGER, SPROSSE, SPRUDELN, SPRUNG, SPUCKE, SPULE, SPÜLUNG, STAAT, STAB, STACHEL, STADION, STAMM, STAND, STAR, STARK, STÄRKE, STAUB, STECKEN, STEHEND, STEIN, STEMPEL, STEPPE, STERN, STERNWARTE, STEUER, STIFT, STIMME, STIRN, STIRNRUNZELN, STOCK, STOFF, STOLLEN, STRAND, STRASSE, STRAUSS, STREAM, STREICHHOLZ, STREIFEN, STROHHALM, STROM, STRUDEL, STUDENT, STUHL, STUMM, STUMPF, STURM, SÜDEN, SUMME, SUMPF, SUPERHELD, SUPPE, SUSHI, SÜSSIGKEITEN, TAFEL, TAG, TAGESZEIT, TAIGA, TAKT, TANTE, TANZ, TASCHE, TASCHENLAMPE, TASSE, TASTE, TAU, TAUBE, TAUCHER, TAXI, TEEKANNE, TEELÖFFEL, TEENAGER, TEIL, TELEFON, TELESKOP, TELLER, TEMPO, TENNIS, THEATER, TIEF, TIER, TIGER, TISCH, TOAST, TOD, TOILETTE, TOKIO, TON, TÖNUNG, TOR, TORNADO, TORTE, TRAINIEREN, TRAKTOR, TRAUBE, TRAUER, TRAUM, TRÄUMEN, TRAURIG, TREIBEN, TREIBSAND, TREPPE, TRICHTER, TRINKEN, TROCKNER, TROLL, TROMPETE, TROPFEN, TRUMPF, TUBA, TÜR, TURM, TURNIER, TÜTENSUPPE, TUTOR, ÜBERSCHRIFT, UHR, UHRWERK, UMARMUNG, UMHANG, UMLAUFBAHN, UMSCHLAG, UMZUG, UNSCHÄRFE, UNTERSCHRIFT, UNTERSETZER, VATER, VEGAN, VEILCHEN, VENTILATOR, VENUS, VERBAND, VERBINDUNG, VEREIN, VERENGUNG, VERGELTUNG, VERHANDELN, VERLETZT, VERRÜCKT, VERSPRECHEN, VERWIRRUNG, VERZÖGERUNG, VIERTEL, VISION, VOGEL, VOGELNEST, VORHANG, VORRICHTUNG, VORSATZ, WACHS, WAL, WALD, WAND, WANDEL, WANNE, WANZE, WÄSCHEREI, WASHINGTON, WASSER, WASSERMELONE, WATT, WEDELN, WEIDE, WEISE, WEISS, WEIZEN, WELLE, WELPE, WELT, WERBEN, WERKZEUG, WERT, WESTE, WILLE, WIND, WINDMÜHLE, WINKEL, WINNETOU, WINTER, WIRTSCHAFT, WISCHMOPP, WITZ, WOLF, WOLKENKRATZER, WOLLE, WÖRTERBUCH, WUNSCH, WURF, WÜRFEL, WURM, WURZEL, ZAHN, ZAHNARZT, ZAHNBÜRSTE, ZAHNRAD, ZAR, ZAUN, ZEHE, ZEHENSPITZEN, ZEHN, ZEICHNEN, ZEIT, ZEITUNG, ZELLE, ZEN, ZENTAUR, ZIEL, ZIRKUS, ZITRONE, ZOLL, ZOLLSTOCK, ZONE, ZOO, ZUCKER, ZUERST, ZUFÄLLIG, ZUG, ZWEIG, ZWERG, ZYLINDER",
                French: "ACCIDENT, ACHAT, ACNÉ, ACTION, ADOLESCENT, AFRIQUE, AIGUILLE, ALLUMER, ALPES, ALPHABET, ALTITUDE, AMÉRIQUE, AMI, AMOUR, AMPOULE, ANNIVERSAIRE, APPÉTIT, ARAIGNÉE, ARBRE, ARC, ARC-EN-CIEL, ARGENT, ARME, ARMÉE, ASCENSEUR, ASIE, ASSIS, ASTRONAUTE, ATCHOUM, ATHLÈTE, ATLANTIDE, AUBE, AUSTRALIE, AVEC, AVENTURE, AVION, AVOCAT, BAC, BAGUETTE, BAIN, BAISER, BALAI, BALLE, BALLON, BAMBOU, BANANE, BANNIR, BARBE, BARRIÈRE, BAS, BASKET, BATEAU, BÂTON, BATTERIE, BÉBÉ, BEETHOVEN, BÊTE, BIBERON, BIÈRE, BLANC, BLÉ, BLEU, BOB, BOISSON, BOÎTE, BOMBE, BONBON, BONNET, BORD, BORDEAUX, BOTTE, BOUE, BOUGIE, BOULE, BOUTEILLE, BOUTON, BRANCHE, BRAS, BRAVO, BRETAGNE, BRISE, BROSSE, BRUIT, BRUME, BRUN, BÛCHE, BULLE, BUREAU, BUT, CABANE, CABINE, CACHER, CADEAU, CAFARD, CAFÉ, CAISSE, CALCULER, CALME, CAMÉRA, CAMION, CAMPING, CANADA, CANARD, CANETTE, CANINE, CAP, CAPITALISME, CAR, CAROTTE, CARRÉ, CARTE, CARTON, CASQUE, CASSER, CASSETTE, CAUCHEMAR, CAUSE, CEINTURE, CELLULE, CERCLE, CHAÎNE, CHAIR, CHAISE, CHAMP, CHAMPION, CHANT, CHAPEAU, CHARBON, CHARGE, CHASSE, CHAT, CHÂTEAU, CHAUD, CHAUSSURE, CHAUVE, CHEF, CHEMISE, CHÊNE, CHER, CHEVAL, CHEVALIER, CHEVEU, CHIEN, CHIFFRE, CHINE, CHOCOLAT, CHÔMAGE, CIEL, CIL, CINÉMA, CIRE, CIRQUE, CITRON, CLÉ, CLOU, CLOWN, COACH, COCCINELLE, CODE, CŒUR, COL, COLLE, COLLINE, COLONNE, CÔNE, CONFORT, CONTINU, CONTRE, CONVERSATION, COPAIN, COQ, COQUILLAGE, CORBEAU, CORDE, CORPS, CÔTE, COUDE, COULOIR, COUP, COUR, COURANT, COURRIER, COURS, COURSE, COURT, COUTEAU, COUVERT, COUVERTURE, COWBOY, CRAC, CRAYON, CRÈME, CRITIQUE, CROCHET, CROIX, CROÛTE, CUILLÈRE, CUIR, CUISINE, CULOTTE, CYCLE, DARD, DÉ, DEBOUT, DÉFAUT, DEHORS, DÉMOCRATIE, DENT, DENTISTE, DESSIN, DEVOIR, DIAMANT, DICTIONNAIRE, DIEU, DINOSAURE, DISCOURS, DISQUE, DIX, DOCTEUR, DOIGT, DOMINO, DORMIR, DROIT, EAU, ÉCHEC, ÉCHELLE, ÉCLAIR, ÉCOLE, ÉCRAN, ÉCRASER, ÉCRIT, ÉGLISE, ÉGOUT, ÉLECTRICITÉ, ÉLÉPHANT, ÉLÈVE, ELFE, EMPREINTE, ENCEINTE, ÉPICE, ÉPINE, ERREUR, ESPACE, ESPION, ESSENCE, ÉTAT, ÉTÉ, ÉTOILE, ÉTRANGER, ÉVENTAIL, ÉVOLUTION, EXPLOSION, EXTENSION, FACE, FAN, FARCE, FATIGUE, FAUTEUIL, FEMME, FENÊTRE, FER, FÊTE, FEU, FEUILLE, FIDÈLE, FIL, FILLE, FLAMME, FLÈCHE, FLEUR, FLEUVE, FOND, FOOTBALL, FORÊT, FORGER, FOUDRE, FOUET, FOUR, FOURMI, FROID, FROMAGE, FRONT, FRUIT, FUIR, FUTUR, GARÇON, GÂTEAU, GAUCHE, GAZ, GAZON, GEL, GENOU, GLACE, GOMME, GORGE, GOUTTE, GRAND, GRÈCE, GRENOUILLE, GRIPPE, GRIS, GROS, GROUPE, GUITARE, HASARD, HAUT, HÉLICOPTÈRE, HERBE, HEUREUX, HISTOIRE, HIVER, HÔTEL, HUGO, HUILE, HUMIDE, HUMOUR, INDICE, INTERNET, INVITER, ITALIE, JACQUES, JAMBE, JAMBON, JARDIN, JAUNE, JEAN, JEANNE, JET, JEU, JOGGING, JOUR, JOURNAL, JUPITER, KILO, KIWI, LAINE, LAIT, LANGUE, LAPIN, LATIN, LAVER, LECTEUR, LÉGER, LENT, LETTRE, LIEN, LIGNE, LINGE, LION, LIT, LIVRE, LOI, LONG, LOUIS, LOUP, LUMIÈRE, LUNDI, LUNE, LUNETTE, MACHINE, MACHO, MAIN, MAISON, MAÎTRESSE, MAL, MALADIE, MAMAN, MAMMOUTH, MANGER, MARAIS, MARC, MARCHE, MARIAGE, MARIE, MARIÉE, MARQUE, MARSEILLE, MASSE, MER, MESSE, MÈTRE, MÉTRO, MIAOU, MICRO, MIEUX, MILLE, MINE, MIROIR, MODERNE, MOITIÉ, MONDE, MONSTRE, MONTAGNE, MONTRE, MORT, MOTEUR, MOTO, MOU, MOUCHE, MOULIN, MOUSTACHE, MOUTON, MUR, MUSCLE, MUSIQUE, MYSTÈRE, NAGE, NATURE, NEIGE, NEUTRE, NEW YORK, NEZ, NID, NINJA, NIVEAU, NOËL, NŒUD, NOIR, NOUS, NUAGE, NUIT, NUMÉRO, ŒIL, ŒUF, OISEAU, OLYMPIQUE, OMBRE, ONGLE, OR, ORAL, ORANGE, ORDINATEUR, ORDRE, ORDURE, OREILLE, ORGANE, ORGUEIL, OURS, OUTIL, OUVERT, OVALE, PAIN, PALAIS, PANNEAU, PANTALON, PANTIN, PAPA, PAPIER, PAPILLON, PARADIS, PARC, PARIS, PAROLE, PARTIE, PASSE, PÂTE, PATIN, PATTE, PAUL, PAYER, PÊCHE, PEINTURE, PENDULE, PENSER, PERSONNE, PETIT, PEUR, PHILOSOPHE, PHOTO, PHRASE, PIANO, PIÈCE, PIED, PIERRE, PILE, PILOTE, PINCE, PIOCHE, PION, PIRATE, PIRE, PISCINE, PLACE, PLAFOND, PLAGE, PLAIE, PLAN, PLANCHE, PLANÈTE, PLANTE, PLASTIQUE, PLAT, PLOMB, PLONGER, PLUIE, POCHE, POÈTE, POIDS, POING, POINT, POIVRE, POLICE, POLITIQUE, POLLEN, POLO, POMME, POMPE, PONT, POPULATION, PORT, PORTE, PORTEFEUILLE, POSITIF, POSTE, POUBELLE, POULE, POUPÉE, POUSSER, POUSSIÈRE, POUVOIR, PRÉHISTOIRE, PREMIER, PRÉSENT, PRESSE, PRIER, PRINCESSE, PRISE, PRIVÉ, PROFESSEUR, PSYCHOLOGIE, PUBLIC, PULL, PUNK, PUZZLE, PYJAMA, QUATRE, QUINZE, RACE, RADIO, RAISIN, RAP, RAYÉ, RAYON, RÉFLÉCHIR, REINE, REPAS, REPTILE, REQUIN, RÊVE, RICHE, RIDEAU, RIEN, RIRE, ROBINET, ROCHE, ROI, ROND, ROSE, ROUE, ROUGE, ROUILLE, ROUX, RUSSIE, SABLE, SABRE, SAC, SAIN, SAISON, SALE, SALLE, SALUT, SAMU, SANDWICH, SANG, SAPIN, SATELLITE, SAUMON, SAUT, SAVOIR, SCHTROUMPF, SCIENCE, SCOUT, SEC, SEINE, SEL, SEPT, SERPENT, SERRER, SEXE, SHAMPOOING, SIÈCLE, SIÈGE, SIESTE, SILHOUETTE, SIRÈNE, SKI, SOLEIL, SOMMEIL, SON, SONNER, SORCIÈRE, SOURD, SOURIS, SPORT, STAR, STATION, STYLO, SUR, SURFACE, SUSHI, SWING, TABLEAU, TACHE, TAILLE, TANTE, TAPIS, TARD, TAXI, TÉLÉPHONE, TÉLÉVISION, TEMPLE, TEMPS, TENNIS, TÊTE, THÉ, TIGRE, TINTIN, TISSU, TITRE, TOAST, TOILETTE, TOKYO, TOMBE, TON, TOP, TOUCHE, TOUJOURS, TOUR, TOURNOI, TOUT, TRACE, TRAIN, TRAÎNER, TRANSPORT, TRAVAIL, TRÉSOR, TRIANGLE, TRISTE, TRÔNE, TROUPEAU, TSAR, TUBE, TUER, TUPPERWARE, TUYAU, TWITTER, TYPE, UNIVERSITÉ, VACHE, VAGUE, VAISSELLE, VALEUR, VER, VERDICT, VERRE, VERS, VERT, VESTE, VIANDE, VIDE, VIE, VIEUX, VILLE, VIN, VINGT, VIOLON, VIPÈRE, VISION, VITE, VIVE, VŒU, VOILE, VOISIN, VOITURE, VOL, VOLUME, VOTE, VOULOIR, VOYAGE, ZEN, ZÉRO, ZODIAQUE, ZONE, ZOO",
                Spanish: "ABOGADO, ACEITE, ÁFRICA, AGENTE, AGUA, ÁGUILA, AGUJA, AGUJERO, AIRE, ALEMANIA, ALGODÓN, ALIANZA, ALPES, AMBULANCIA, AMÉRICA, ÁNGEL, ANILLO, ANTÁRTIDA, ANTORCHA, ARAÑA, ARCHIVO, ARCO, ARGENTINA, ARTÍCULO, AS, ATLÁNTIDA, AZTECA, BAILE, BALA, BALLENA, BANCO, BANDA, BAÑO, BARCO, BARRA, BATERÍA, BERLÍN, BERMUDAS, BICHO, BLANCO, BLOQUE, BOCA, BOLA, BOLSA, BOMBA, BOSQUE, BOTA, BOTELLA, BOTÓN, BRAZO, BRUJA, CABALLERO, CABALLO, CABEZA, CABINA, CABO, CACTUS, CADENA, CAJA, CAMA, CÁMARA, CAMBIO, CAMPANA, CAMPO, CANAL, CANGURO, CANTO, CAÑA, CAPA, CAPITAL, CAQUI, CARA, CARAVANA, CARGA, CARRERA, CARRO, CARTA, CASCO, CASINO, CAZA, CEMENTERIO, CENTAURO, CENTRO, CERVANTES, CHECO, CHOCOLATE, CHOQUE, CHULETA, CIENTÍFICO, CINTA, CINTURÓN, CÍRCULO, CLASE, COCHE, COCINERO, COCO, CÓDIGO, COLA, CÓLERA, COLUMNA, COMETA, COMPÁS, CONCIERTO, CONEJO, CONTRABANDISTA, COPA, CORAZÓN, CORNETA, CORONA, CORREDOR, CORRIENTE, CORTE, CRESTA, CROMO, CRUZ, CUADRO, CUARTO, CUBIERTA, CUBO, CUCHILLO, CUELLO, CUERDA, CUERNO, CURA, DAMA, DELTA, DESTINO, DÍA, DIAMANTE, DIANA, DIARIO, DIENTE, DINOSAURIO, DISCO, DON, DRAGÓN, DUENDE, EGIPTO, EMBAJADA, EMPERADOR, ENANO, ENFERMEDAD, ENFERMERA, ENLACE, ESCORPIÓN, ESPACIO, ESPÍA, ESTACIÓN, ESTADIO, ESTADO, ESTRELLA, ESTUDIO, ETIQUETA, EUROPA, EXTRATERRESTRE, FALDA, FANTASMA, FARO, FICHA, FIESTA, FIGURA, FLAUTA, FLECHA, FOSO, FRANCIA, FRENTE, FUEGO, FUENTE, FUERZA, FURGONETA, GANCHO, GATO, GENIO, GIGANTE, GOLFO, GOLONDRINA, GOLPE, GOMA, GÓNDOLA, GOTA, GRADO, GRANADA, GRANO, GRECIA, GRIFO, GUANTE, GUARDIA, GUERRA, GUSANO, HELADO, HELICÓPTERO, HIELO, HIERBA, HOJA, HOLLYWOOD, HORCA, HOSPITAL, HOTEL, IGLESIA, IMÁN, INDIA, ÍNDICE, INGLATERRA, ITALIA, JARRA, JUDÍA, JUICIO, KIWI, LADRÓN, LAGO NESS, LÁSER, LÁTIGO, LENGUA, LEÓN, LIBRA, LIMA, LIMUSINA, LÍNEA, LISTA, LLAMA, LLAVE, LOMO, LONDRES, LUNA, LUZ, MAESTRO, MAGIA, MALTA, MANCHA, MANDO, MANGA, MANGO, MANO, MANZANA, MAÑANA, MARCA, MARCHA, MARFIL, MASA, MÁSCARA, MAZO, MÉDICO, MERCURIO, MESA, METRO, MÉXICO, MICRO, MICROSCOPI, MIELO, MILLONARIO, MINA, MISIL, MODELO, MÓDULO, MONITOR, MONO, MORTERO, MOSCÚ, MOTOR, MUELLE, MUERTE, MUÑECA, MURO, NARANJA, NAVE, NIEVE, NILO, NINJA, NOCHE, NOTA, NUDO, NUEVA YORK, OBRA, OJO, OLA, OLIMPO, ÓPERA, ORDEN, ÓRGANO, ORNITORRINCO, ORO, OSO, PALA, PALMA, PANTALLA, PAPEL, PARACAÍDAS, PASE, PASO, PASTA, PASTEL, PAVO, PEKÍN, PELÍCULA, PELOTÓN, PENDIENTE, PERRO, PEZ, PICO, PIE, PIEZA, PILA, PILOTO, PINCHO, PINGÜINO, PINTA, PIÑA, PIRÁMIDE, PIRATA, PISTA, PISTOLA, PLACA, PLANO, PLANTA, PLÁTANO, PLAYA, PLOMO, PLUMA, POLICÍA, POLO, PORTADA, PORTERO, POTRO, PRENSA, PRIMA, PRINCESA, PUENTE, PUERTO, PULPO, PULSO, PUNTA, PUNTO, RADIO, RASCACIELOS, RATÓN, RAYO, RED, REGLA, REINA, RESERVA, REVOLUCIÓN, REY, ROBOT, ROJO, ROMA, RONDA, ROSA, RULETA, SABLE, SÁHARA, SALSA, SATÉLITE, SATURNO, SEÑAL, SERIE, SERPIENTE, SIERRA, SILLA, SIRENA, SOBRE, SOLDADO, SUBMARINISTA, SUERTE, SUPERHÉROE, TABLA, TABLETA, TACO, TACTO, TALÓN, TANQUE, TAPA, TARDE, TEATRO, TECLADO, TELESCOPIO, TESTIGO, TIEMPO, TIENDA, TIERRA, TOKIO, TOPO, TORRE, TRAMA, TRONCO, TUBERÍA, TUBO, UNICORNIO, VACÍO, VADO, VAMPIRO, VELA, VENENO, VENUS, VESTIDO, VIDA, VIDRIO, VIENTO, YEMA, ZANAHORIA, ZAPATO",
                Catalan: "ADVOCAT, ÀFRICA, AGENT, ÀGUILA, AGULLA, AIGUA, AIRE, ALEMANYA, AMBAIXADA, AMBULÀNCIA, AMÈRICA, AMPOLLA, ANELL, ÀNGEL, ANGLATERRA, ANTÀRTIDA, APÈNDIX, ARANYA, ARC, ÀREA, ARGENTINA, AS, AS, ASTECA, ATLÀNTIDA, AVIÓ, BALA, BALENA, BANC, BANDA, BARALLA, BARRA, BATERIA, BERLÍN, BERMUDES, BESSÓ, BISBE, BLAU, BLEDA, BLOC, BOCA, BOLA, BOLET, BOMBA, BORDA, BOSC, BOTA, BOTIFARRA, BOTÓ, BRUIXA, BUFÓ, CABINA, CACTUS, CADENA, CADIRA, CAGANER, CAIXA, CALÇOT, CÀLCUL, CAMP, CAMPANA, CANAL, CANGUR, CANVI, CANYA, CAP, CAPA, CAPGRÒS, CAPITAL, CAQUI, CARA, CARAVANA, CARGOL, CÀRREGA, CARRERA, CARRO, CARTA, CAS, CASA, CASINO, CASTANYA, CASTELL, CAU, CAVALL, CAVALLER, CENTAURE, CENTRE, CEP, CERCLE, CIENTÍFIC, CINTA, CINTURÓ, CLASSE, CLAU, CLOT, COBERTA, COCA, COCO, CODI, COLL, COLÒNIA, COLUMNA, COMA, COMPÀS, COMPOST, CONCERT, CONILL, CONTRABANDISTA, COP, COPA, COR, CORDA, CORNETA, CORONA, CORREDOR, CORRENT, CORREU, COTÓ, COTXE, CRESTA, CREU, CROMO, CUA, CUC, CUINER, CULLERA, DAMA, DELTA, DENT, DEU, DIA, DIAMANT, DIANA, DINOSAURE, DISC, DO, DRAC, EBRE, EGIPTE, EMPERADOR, ENLLAÇ, ENTERRAMORTS, ENTRADA, ENXANETA, ESCORPÍ, ESGLÉSIA, ESPAI, ESPIA, ESTACIÓ, ESTADI, ESTANY, ESTRELLA, ETIQUETA, EUROPA, EXTRATERRESTRE, FALANGE, FALÇ, FANTASMA, FARINERA, FESTA, FIGA, FIGURA, FITXA, FLAMENC, FLAUTA, FLETXA, FOC, FOLRA, FONT, FORAT, FORÇA, FRANC, FRANÇA, FREDOLIC, FREQÜÈNCIA, FUET, FURGONETA, GALETA, GAMARÚS, GAMMA, GANIVET, GANXO, GAT, GAUDÍ, GEGANT, GEL, GELAT, GENI, GOLF, GOS, GOTA, GRA, GRALLA, GRATACEL, GRAU, GRÈCIA, GRIPAU, GUANT, GUERRA, HELICÒPTER, HERBA, HOLLYWOOD, HOSPITAL, HOTEL, ÍNDIA, INFERMERA, ITÀLIA, KIWI, LÀSER, LIMUSINA, LÍNIA, LLAÇ, LLADRE, LLENGUA, LLENYA, LLEÓ, LLIT, LLIURE, LLOM, LLUM, LLUNA, LONDRES, MÀ, MADUR, MÀGIA, MALALTIA, MALTA, MAMA, MARCA, MARFIL, MARXA, MÀSCARA, MASIA, MASSA, MEL, MELIC, MERCURI, MESTRE, META, METGE, MÈXIC, MICROSCOPI, MILIONARI, MÍSSIL, MOC, MODEL, MODERNISME, MÒDUL, MOLA, MOLL, MOLLA, MONA, MONITOR, MONTSERRAT, MORT, MORTER, MOSCOU, MOTOR, MUR, NAN, NAU, NAVALLA, NEU, NIL, NINA, NINJA, NIT, NOTA, NOU, NOVA YORK, NUCLI, NUS, OBRA, OLI, OLIMP, ONA, ÒPERA, OR, ORENETA, ORGUE, ORNITORINC, ÓS, PAL, PALA, PALMA, PANTALLA, PAPER, PARACAIGUDES, PARTIDA, PASSIÓ, PASTA, PASTANAGA, PASTILLA, PATGE, PATUFET, PEIX, PEKÍN, PEL·LÍCULA, PENAL, PENYA-SEGAT, PERIQUITO, PESA, PEU, PILA, PILAR, PILOT, PINGÜÍ, PINTA, PINYA, PIRÀMIDE, PIRATA, PIRINEUS, PISTA, PISTOLA, PLANTA, PLANXA, PLATA, PLATJA, PLOM, POLICIA, POLS, POLZE, POMA, PONT, POP, PORT, PORTADA, PORTER, POU, PREMSA, PRINCESA, PUNT, PUNTA, RADI, RAIG, RATOLÍ, RATPENAT, REI, REINA, REVOLUCIÓ, ROBOT, ROMA, RONDA, ROSA, ROSSINYOL, ROVELL, RULETA, SABATA, SÀHARA, SALSA, SAMFAINA, SANT JORDI, SATÈL·LIT, SATURN, SENYAL, SERP, SERRA, SET, SIRENA, SOBRE, SOLDAT, SORT, SUBMARINISTA, SUÏS, SUPERHEROI, TACTE, TALL, TALP, TAPA, TARONJA, TAULA, TAULER, TEATRE, TELESCOPI, TEMPS, TERRA, TERRASSA, TIÓ, TÒQUIO, TORN, TERRA, TORTUGA, TRIBUNA, TROMPA, TRONC, TRUITA, TUB, ULL, UNICORN, VAIXELL, VALL, VAMPIR, VENT, VENUS, VERÍ, VERMUT, VESTIT, VIDA, VIDRE, XARXA, XOC, XOCOLATA",
                Hungarian: "CSOKOLÁDÉ, CASINO, FÚJ, CIPŐ, FOG, SAJT, HAJÓ, BANK, FORRÁS, KÖZPONT, SÍR, KÉZ, PISZTOLY, ÜVEG, ORVOS, ÓRIÁS, SHAKESPEARE, TELEFON, VÍZ, ÉDES, BENZIN, RENDŐR, CHAPLIN, ÁRNYÉK, NYOM, ÜGYVÉD, ERDŐ, BANDA, VONAL, CSAP, VIRÁG, EGYENES, JOGÁSZ, KÖR, ZÖLD, KENYÉR, TEMPLOM, SÖTÉT, KÉS, NYÚL, FURULYA, ÉLET, SZÁM, GÁZ, CSOMÓ, KATONA, FÖLD, CSATORNA, FIGURA, HOMOK, HAJ, BÁB, FORMA, SÍN, KECSAP, PIRAMIS, VAD, OROSZLÁN, ÓRA, SKORPIÓ, TEJ, VOLT, ÉG, BŐR, RAKÉTA, CÉRNA, AMERIKA, NŐ, ÜGYNÖK, EINSTEIN, BANÁN, ZEUSZ, CIRKUSZ, SONKA, EGYSZARVÚ, JÁR, KŐ, ZSENI, KENTAUR, TELESZKÓP, SÁRKÁNY, KESZTYŰ, OLAJ, FELHŐ, FAGYLALT, SZAKÍT, GAZDA, LEVES, LÉZER, BOLT, BOMBA, RULETT, RUHA, LÓ, LYUK, SZÉN, SZEMÉT, FÁKLYA, FAL, JÉZUS, JÁTÉK, BETEGSÉG, BIKA, PILÓTA, PETŐFI, TV, TISZTA, TOJÁS, TÓKIÓ, ZEBRA, ZÁR, PITE, POHÁR, PATKÓ, PEKING, MAR, MÁSOL, MOTOR, MOZI, REPÜL, RÉPA, LÁDA, LŐ, ÁGY, AJTÓ, NEW YORK, NINJA, MEDVE, MÁTYÁS, HALÁL, HÁLÓ, FÜGG, FŰ, KIRÁLYNŐ, KÚT, CSIRKE, CSIZMA, KÁRPÁTOK, KÁRTYA, GOMB, GÖRÖG, SZÍNHÁZ, SZÍN, KEMÉNY, KENGURU, MEXIKÓ, MALAC, PALACK, PÁLYA, ANGLIA, ÁR, TÖRPE, T-REX, NÉGYZET, NEHÉZ, MIKROSZKÓP, MAJOM, TAVASZ, SZEM, MESE, MÉREG, VÁR, ŰR, CSILLAG, CSIGA, KUTYA, KOCKA, PUSKA, PÓK, MŰANYAG, MAMUT, BEETHOVEN, BÉKA, JEGY, JÉG, TÁVOLSÁG, KALÓZ, UJJ, UDVAR, ASZTAL, ATLANTISZ, GERINC, GYÉMÁNT, GYŰRŰ, HÓEMBER, SIVATAG, FEJ, ANGYAL, APRÓ, NŐVÉR, NYIT, TŰ, TÉRKÉP, LONDON, LOVAG, SZÁJ, STADION, GYÖNGY, GYÖKÉR, MŰHOLD, NADRÁG, KAKTUSZ, KACSACSŐRŰ, NAP, KÖVET, HÉT, HÍD, EGÉSZSÉG, EGÉR, JETI, ARC, CAESAR, CÁPA, BERLIN, BABA, HULLÁM, HOTEL, FŰSZER, FÜL, SZATURNUSZ, SZARV, SOR, SAS, AGY, ÁG, ÁRU, KULCS, HÓ, KRÉTA, KORBÁCS, TETŰ, MILLIOMOS, PONT, VITORLA, DOB, DÉL, HÚR, KARD, KÖRTE, ALPOK, SZAKÁCS, RADÍR, KEREK, MAGYAR, TANÁR, ÚR, TORTA, RÓZSA, HATALOM, MOSZKVA, LEVÉL, AMAZON, LÁB, HÁBORÚ, KRITIKUS, KOR, TERMÉSZET, MÉZ, POLIP, VITAMIN, DUNA, DARU, IDEGEN, KAR, KÓRHÁZ, ARANY, SZAKASZ, RÁK, KÉPERNYŐ, MACSKA, TÉGLA, ÚT, TÉR, PARK, ISKOLA, TOLL, AFRIKA, TÁNC, MÉR, HIMALÁJA, ÉJSZAKA, KERESZT, HERCEGNŐ, ELEM, CSŐ, BARÁT, LOCHNESZ, PINGVIN, BÍRÓ, BÁR, VILLA, GITAR, PAMUT, AGYAG, NAPÓLEON, SZÉL, FOG, FOK, ÖL, TÁBLA, VAS, SZELLEM, KOPORSÓ, BOSZORKÁNY, MELEG, SZIKRA, LABDA, LÉP, FEKETE, TÜSKE, SZUPERHŐS, HAJT, ALFÖLD, DIÓ, OSZT, KORMÁNY, FA, LAP, BÁLNA, KÖNNYŰ, SZÍV, KELL, AUTÓ, CSEMPÉSZ, HOLLYWOOD, AUSZTRÁLIA, KIRÁLY, ROBOT, MANÓ, ALMA, TUDÓS, ÖV, FUT, TAXI, VEZET, TEHERAUTÓ, KONCERT, BÚVÁR, MENTŐK, SZERENCSE, LÁNG, LÁMPA, FORDÍT, ORDÍT, TÜDŐ, SZÜRKE, HAL, HALAK, DENEVÉR, OSZLOP, KÖLYÖK, EURÓPA, LÁZ, BOT, SZOKNYA, KÉM, AZTÉK, CSAVAR, HOLD, ATOM, KÓD, RIGÓ, MŰ, ÁLOM, TÖK, TŰZ, FEDÉL, PAPÍR, INDIAN, TOLVAJ, ADÓ, TÁNYÉR, MER, HATÁR, KERET, ERŐ, HELIKOPTER, EJTŐERNYŐ, CSEPP, BÁNYA, PÉNZ, BIRKA, GUMI, VILÁGOS, PART, LÉLEK, ANYA, NARANCS, SZÉK, TORONY, RÓMA, HARANG, MEZŐ, LEVEGŐ",
                Polish: "BUDOWA, JATKA, RURA, BERMUDY, KRZESŁO, GÓRA, LONDYN, HIMALAJE, PALETA, GRA, KASA, SZKŁO, OBSADA, MODEL, LINIA, KIWI, SIANO, DNO, KRAKÓW, ŁÓDŹ, DONICE, ORGANY, JABŁKO, MUSZLA, JEDNOROŻEC, PAZUR, MATERIAŁ, DOKTOR, GOLF, NOWY JORK, BERLIN, LOCH NESS, ZWOJE, FUNT, GOŁĄB, RAK, ŚMIERĆ, PIERŚCIEŃ, KARAWAN, DZIĘCIOŁ, SŁUP, PŁYTA, USTA, CIAŁO, NUREK, POKRYWKA, DWÓR, STRUMIEŃ, MIEDŹ, SZPIEG, MERKURY, GUMA, PRAWNIK, OPERA, GNAT, POJAZD, PRZEWODNIK, FLET, PLASTIK, PUNKT, TOALETA, LAKIER, RÓŻA, KOŚCIÓŁ, ŚLIMAK, SZKOŁA, KANGUR, CEBULA, PIES, DYWAN, DANIA, NAPAD, ZMIANA, SIŁA, NAUKOWIEC, STAN, MEKSYK, MIKROSKOP, NOS, SZTUKA, ZĄB, HOLENDER, KLATKA, GAZ, FENIKS, WASZYNGTON, RUDA, KLUCZ, POLICJA, SUPERBOHATER, OLEJ, FILM, BOMBA, MASA, TUBA, DIAMENT, LEW, KOŁO, SZPILKA, DZIURA, ŻURAW, NOC, DZWON, SATELITA, MAKS, TUSZ, LODY, PŁOT, REKIN, WSTĘP, CZAPA, ZNAK, STOŁEK, DUSZA, KONAR, PEKIN, LINA, ANIOŁ, SPADOCHRON, MUR, PLAŻA, SATURN, TEATR, OLIMP, DZIEŃ, KAMIEŃ, REWOLUCJA, HAK, SMOK, CZARODZIEJ, BECZKA, MAMUT, ANTARKTYKA, SZCZĘŚCIE, RADOM, LÓD, KRASNAL, ATLANTYDA, ZMYWACZ, OBCY, FALA, TUSZA, CHOCHLIK, IGŁA, RYBA, GUZIK, TANIEC, PODKOWA, ŻUK, STÓŁ, ZEBRA, BUT, HOTEL, POŁĄCZENIE, DUCH, ZIELEŃ, NIEDŹWIEDŹ, STATEK, PAPIER, OKO, OGIEŃ, KOSTIUM, HUMOR, UCHO, BAR, TRÓJKĄT, KOŚĆ, PÓŁNOC, KOLEC, CZASZKA, PIRAT, NIEBO, MAJ, ŻELAZO, TWARZ, OLIWA, ŁOŻYSKO, RÓG, ŚWIERSZCZ, PINGWIN, WIEŻA, ŻUBR, GRZYB, SERCE, PILOT, GRZMOT, HOLLYWOOD, HELIKOPTER, KRĘGI, AMAZONKA, KECZUP, GŁOWA, SZPITAL, WYBUCH, WIRUS, ŻABKA, PRAWO, BIEDRONKA, KOT, POCZTA, KRET, LASKA, SAMOLOT, STRZAŁ, MILIONER, MISTRZ, CIEŃ, FIGURA, DZIOBAK, SZKOCJA, TABLICA, TOKIO, JOWISZ, KSIĘŻYC, POLE, KORZENIE, PASTA, GENIUSZ, MAJTKI, ŻEBRO, ŻAGIEL, RZUT, KLAMKA, RZĄD, NIEMCY, MIÓD, RZYM, GRABARZ, WĄŻ, JAJA, RYCERZ, WAGA, KROPKA, KORONA, BAWEŁNA, NAUCZYCIEL, POCIECHA, SZNUR, MOST, GRACJA, NORA, DÓŁ, SOKÓŁ, POLSKA, KRÓLIK, KONTRAKT, PROMIEŃ, PODKŁAD, SUKIENKA, KRÓL, PLASTIK, KSIĘŻNICZKA, WIATR, ANGLIA, GROSZEK, POCHODNIA, SPADEK, STRONA, GRECJA, RULETKA, KRYZYS, PAJĄK, ŻYCIE, TELESKOP, WIELORYB, ORZECH, BELKA, PAS, ŁUK, PIELĘGNIARKA, KUCHARZ, DINOZAUR, PIRAMIDA, NIEWOLNIK, PUDŁO, ŚNIEG, STOPA, ROBAK, GŁADKI, GWIAZDA, TALIA, SZEKSPIR, NAPOLEON, PORT, FRANCUZ, OGON, ŁAWA, BICZ, SPLOT, STADION, WOJNA, LIS, KACZOR, ZŁOTO, SILNIK, RĘKAWICA, BABKA, BASEN, TOREBKA, WACHLARZ, MOSKWA, WARCHLAK, PUPIL, KRÓLOWA, NOGA, SKORPION, KRÓWKA, WYDECH, RĘKA, OGIER, OGR, AWARIA, JAGODA, PALUSZKI, CZUJKA, POCIĄG, FOKA, BĄK, KASYNO, EGIPT, NEKTAR, AMBULANS, RZĘSA, LIMUZYNA, SAMOCHÓD, GOTYK, CENTRUM, TCHÓRZ, OPERA, KONTAKT, CZAS, POWIETRZE, GNIAZDKO, PĄCZEK, PLACEK, TRĄBA, TRUCIZNA, SOCZEWKA, BUTELKA, AUSTRALIA, NIĆ, KALOSZ, SKORUPA, AMBASADA, WIOSNA, KLAWISZ, JĘZYK, CHINY, KARTA, PLIK, SIEKACZ, ZŁODZIEJ, EUROPA, LAS, SIEĆ, KAPTUR, KOZIOŁ, KOMÓRKA, BAŁWAN, AMERYKA, SUCHAR, TRUTEŃ, BAL, PERŁA, ZESPÓŁ, ROBOT, TRAWA, ZIEMIA, NÓŻ, CENTAUR, PAN, BLOK, FARTUCH, CHOROBA, OPOKA, KRZYŻ, AZTEK, CHRYSTUS, WIEŻOWIEC, PUSTKA, DRZEWO, STOPIEŃ, SZCZYT, RAKIETA, KONCERT, WKŁAD, ŚWINIA, TALERZ, AFRYKA, KCIUK, CZEKOLADA, SPARTA, EKRAN, RAMA, LOT, PRACA, WIEDŹMA, OŚMIORNICA, ORZEŁ, WIDELEC, ZAMEK, BANAN, GIGANT, BANK, KOD, FRANCJA, LASER, SZAFA, KOKAINA, MYSZ, MUCHA, MĄKA, NINJA, CZAR, ŻOŁNIERZ, KWADRAT, WODA, KRAWAT, SZMUGIEL, KOŃ, MARCHEW, PISTOLET",
                Greek: "ΠΕΤΑΛΟΥΔΑ, ΠΑΠΟΥΤΣΙ, ΑΕΤΟΣ, ΚΑΣΤΡΟ, ΜΑΖΑ, ΦΙΛΜ, ΥΠΕΡΗΡΩΑΣ, ΤΡΑΠΕΖΑ, ΚΛΩΣΤΗ, ΜΑΧΑΙΡΙ, ΓΛΟΜΠΟΣ, ΚΑΛΩΔΙΟ, ΜΙΖΑ, ΚΛΕΙΔΙ, ΘΕΑΤΡΟ, ΝΟΤΑ, ΤΗΛΕΣΚΟΠΙΟ, ΓΡΑΣΙΔΙ, ΕΛΙΑ, ΟΥΡΑΝΟΞΥΣΤΗΣ, ΠΙΝΑΚΑΣ, ΤΑΥΤΟΤΗΤΑ, ΓΡΑΜΜΗ, ΠΕΝΑ, ΞΥΛΟ, ΕΙΚΟΝΑ, ΣΥΝΔΕΣΜΟΣ, ΚΑΒΟΥΡΑΣ, ΔΙΑΒΑΤΗΡΙΟ, ΜΟΣΧΑ, ΠΕΤΑΛΟ, ΜΟΝΑΔΑ, ΚΥΜΑ, ΣΑΓΟΝΙ, ΥΠΟΘΕΣΗ, ΡΙΖΑ, ΜΗΧΑΝΗ, ΤΕΤΡΑΓΩΝΟ, ΑΛΕΞΙΠΤΩΤΟ, ΚΑΡΕΚΛΑ, ΝΟΣΟΚΟΜΕΙΟ, ΓΡΑΒΑΤΑ, ΠΥΡΑΜΙΔΑ, ΒΑΣΗ, ΤΖΑΚΙ, ΜΑΤΙ, ΙΝΔΙΑ, ΜΕΤΑΦΟΡΑ, ΤΟΞΟ, ΔΗΛΗΤΗΡΙΟ, ΑΚΤΙΝΑ, ΕΞΩΓΗΙΝΟΣ, ΠΛΑΝΗ, ΦΟΙΝΙΚΑΣ, ΝΕΚΡΟΘΑΦΤΗΣ, ΙΜΑΛΑΙΑ, ΜΟΝΤΕΛΟ, ΕΚΑΤΟΜΜΥΡΙΟΥΧΟΣ, ΠΕΤΡΑ, ΕΡΓΟ, ΝΙΝΤΖΑ, ΠΝΕΥΜΑ, ΚΟΤΑ, ΡΟΥΛΕΤΑ, ΓΡΑΜΜΑ, ΚΑΡΔΙΑ, ΓΕΦΥΡΑ, ΣΦΗΚΑ, ΠΑΠΙΑ, ΑΕΡΑΣ, ΠΕΤΡΕΛΑΙΟ, ΚΟΡΑΚΙ, ΦΥΛΛΟ, ΣΕΙΡΗΝΑ, ΠΑΣΤΑ, ΜΕΣΟΓΕΙΟΣ, ΑΝΕΚΔΟΤΟ, ΚΩΔΙΚΟΣ, ΝΟΣΟΚΟΜΑ, ΠΙΛΟΤΟΣ, ΔΙΧΤΥ, ΔΙΑΣΤΑΥΡΩΣΗ, ΔΑΣΚΑΛΟΣ, ΠΕΚΙΝΟ, ΣΥΜΦΩΝΙΑ, ΛΕΠΤΟ, ΓΑΝΤΙ, ΡΟΜΠΑ, ΣΤΟΙΧΕΙΟ, ΚΕΡΒΕΡΟΣ, ΜΗΛΟ, ΤΙΤΛΟΣ, ΚΑΡΦΙΤΣΑ, ΓΡΑΦΕΙΟ, ΒΗΜΑ, ΚΡΟΝΟΣ, ΡΟΔΑ, ΠΡΟΣΩΠΟ, ΡΕΥΜΑ, ΛΙΟΝΤΑΡΙ, ΒΕΛΟΝΑ, ΣΠΙΡΤΟ, ΔΙΑΜΑΝΤΙ, ΑΣΘΕΝΟΦΟΡΟ, ΧΟΛΥΓΟΥΝΤ, ΟΥΡΑ, ΛΕΙΤΟΥΡΓΙΑ, ΚΑΤΗΓΟΡΙΑ, ΤΡΑΠΕΖΙΤΗΣ, ΣΗΜΕΙΟ, ΤΖΙΝ, ΔΡΑΚΟΣ, ΝΕΑ ΥΟΡΚΗ, ΜΥΤΗ, ΠΕΙΡΑΤΗΣ, ΣΤΟΜΑ, ΦΤΕΡΟ, ΜΟΡΙΟ, ΑΡΑΧΝΗ, ΠΑΡΑΜΑΝΑ, ΙΑΠΩΝΙΑ, ΑΓΚΥΡΑ, ΔΙΣΚΟΣ, ΓΟΠΑ, ΠΡΕΣΒΕΙΑ, ΠΑΡΑΛΙΑ, ΠΟΛΕΜΟΣ, ΠΟΛΟΣ, ΧΟΡΟΣ, ΒΡΑΧΙΟΛΙ, ΖΥΓΟΣ, ΑΔΕΙΑ, ΣΟΚΟΛΑΤΑ, ΦΕΤΑ, ΚΡΗΤΗ, ΑΚΡΩΤΗΡΙΟ, ΧΙΟΝΙ, ΧΕΡΙ, ΔΙΚΗΓΟΡΟΣ, ΠΥΡΓΟΣ, ΔΑΚΡΥ, ΜΑΓΙΣΣΑ, ΑΣΦΑΛΕΙΑ, ΣΤΑΔΙΟ, ΚΟΥΜΠΙ, ΙΣΤΟΡΙΑ, ΓΙΓΑΝΤΑΣ, ΚΛΙΜΑ, ΚΕΤΣΑΠ, ΑΜΕΡΙΚΗ, ΦΑΙΝΟΜΕΝΟ, ΠΥΡΑΥΛΟΣ, ΚΕΡΙ, ΜΟΝΟΚΕΡΩΣ, ΔΟΝΤΙ, ΓΕΡΜΑΝΙΑ, ΤΟΥΑΛΕΤΑ, ΣΚΕΠΑΣΜΑ, ΦΩΤΙΑ, ΚΑΤΣΙΚΑ, ΔΕΙΝΟΣΑΥΡΟΣ, ΤΡΟΙΑ, ΣΠΕΙΡΑ, ΒΑΜΒΑΚΙ, ΓΑΤΑ, ΤΑΙΝΙΑ, ΤΙΜΗ, ΚΡΕΒΑΤΙ, ΧΡΥΣΟ, ΣΚΟΡΠΙΟΣ, ΚΥΨΕΛΗ, ΧΡΟΝΟΣ, ΜΟΥΤΡΟ, ΧΡΥΣΑΦΙ, ΓΕΡΑΝΟΣ, ΤΟΝΟΣ, ΠΛΟΙΟ, ΑΤΟΜΟ, ΑΓΩΓΟΣ, ΦΛΟΓΕΡΑ, ΛΑΘΡΕΜΠΟΡΟΣ, ΜΟΙΡΑ, ΕΠΙΣΤΗΜΟΝΑΣ, ΣΤΡΑΤΙΩΤΗΣ, ΟΥΣΙΑ, ΠΛΑΤΥΠΟΔΑΣ, ΠΑΠΑΓΑΛΟΣ, ΦΕΣΙ, ΜΕΛΙ, ΓΗΠΕΔΟ, ΣΦΑΙΡΑ, ΚΑΖΙΝΟ, ΠΑΓΟΣ, ΠΑΓΟΒΟΥΝΟ, ΠΛΑΣΜΑ, ΚΑΤΑΡΡΑΚΤΗΣ, ΘΑΝΑΤΟΣ, ΣΚΥΛΟΣ, ΣΠΟΝΤΑ, ΣΚΝΙΠΑ, ΨΑΡΙ, ΒΑΘΜΟΣ, ΛΟΝΔΙΝΟ, ΕΤΑΙΡΕΙΑ, ΒΑΣΙΛΙΑΣ, ΤΕΛΟΣ, ΣΩΛΗΝΑΡΙΟ, ΣΕΙΣΜΟΣ, ΓΡΥΛΟΣ, ΠΡΟΣΚΡΟΥΣΗ, ΟΛΥΜΠΟΣ, ΕΥΡΩΠΗ, ΓΥΑΛΙ, ΝΕΡΟ, ΛΟΧ ΝΕΣ, ΠΑΣΣΑΛΟΣ, ΑΛΥΣΙΔΑ, ΞΕΝΟΔΟΧΕΙΟ, ΤΟΥΦΕΚΙ, ΠΗΡΟΥΝΙ, ΚΕΡΑΤΟ, ΛΟΓΟΣ, ΒΟΥΛΑ, ΣΥΝΤΑΞΗ, ΥΠΗΡΕΣΙΑ, ΦΑΣΗ, ΔΑΧΤΥΛΙΔΙ, ΠΙΓΚΟΥΙΝΟΣ, ΤΡΟΜΠΕΤΑ, ΚΕΝΤΡΟ, ΒΕΡΟΛΙΝΟ, ΣΚΕΛΕΤΟΣ, ΔΥΝΑΜΗ, ΕΚΘΕΣΗ, ΜΙΚΡΟΣΚΟΠΙΟ, ΜΠΟΥΚΑΛΙ, ΚΑΡΤΑ, ΚΥΚΛΟΣ, ΣΧΕΔΙΟ, ΚΟΚΟΡΑΣ, ΦΙΓΟΥΡΑ, ΔΙΑΣΤΗΜΑ, ΦΑΚΕΛΟΣ, ΠΡΑΚΤΟΡΑΣ, ΔΕΙΚΤΗΣ, ΛΑΓΟΣ, ΦΩΚΙΑ, ΛΕΙΖΕΡ, ΠΛΥΝΤΗΡΙΟ, ΙΟΣ, ΚΑΝΟΝΙ, ΣΠΟΥΡΓΙΤΙ, ΑΝΤΙΧΕΙΡΑΣ, ΦΟΥΡΝΟΣ, ΑΤΛΑΝΤΙΔΑ, ΧΑΡΤΙ, ΚΕΝΤΑΥΡΟΣ, ΚΟΡΗ, ΓΟΥΝΑ, ΜΑΓΕΙΡΑΣ, ΚΟΥΔΟΥΝΙ, ΛΟΥΚΕΤΟ, ΠΡΩΙΝΟ, ΠΡΙΓΚΙΠΙΣΣΑ, ΑΦΡΙΚΗ, ΚΕΦΑΛΙ, ΚΡΕΜΑ, ΚΑΡΦΙ, ΚΑΛΑΜΙ, ΠΕΖΟΣ, ΣΤΕΜΜΑ, ΜΕΤΩΠΟ, ΑΣΘΕΝΕΙΑ, ΡΟΜΠΟΤ, ΕΒΕΝΟΣ, ΤΡΟΧΟΣ, ΗΜΕΡΑ, ΤΡΥΠΑ, ΦΟΡΜΑ, ΒΑΣΙΛΙΣΣΑ, ΠΟΤΗΡΙ, ΚΑΛΟΓΕΡΟΣ, ΟΡΟΣ, ΚΑΓΚΟΥΡΩ, ΕΛΙΚΟΠΤΕΡΟ, ΛΟΓΑΡΙΑΣΜΟΣ, ΦΟΡΤΗΓΟ, ΦΡΥΔΙ, ΑΛΕΠΟΥ, ΔΙΕΥΘΥΝΣΗ, ΛΑΣΤΙΧΟ, ΧΤΑΠΟΔΙ, ΤΥΠΟΣ, ΣΚΗΝΗ, ΡΑΔΙΟ, ΤΟΚΥΟ, ΠΑΡΑΣΤΑΣΗ, ΠΛΑΚΑ, ΠΡΑΣΙΝΟ, ΑΛΟΓΟ, ΙΔΙΟΦΥΐΑ, ΣΚΟΠΟΣ, ΑΓΓΛΙΑ, ΠΑΛΑΜΗ, ΤΟΙΧΟΣ, ΑΣΤΥΝΟΜΙΑ, ΚΑΤΑΣΚΟΠΟΣ, ΠΡΟΣΒΟΛΗ, ΕΔΑΦΟΣ, ΜΑΡΤΥΡΑΣ, ΝΤΑΜΑ, ΛΙΜΟΥΖΙΝΑ, ΦΑΝΤΑΣΜΑ, ΦΡΑΓΜΑ, ΙΠΠΟΤΗΣ, ΚΥΠΡΟΣ, ΠΟΝΤΙΚΙ, ΔΟΡΥΦΟΡΟΣ, ΑΛΠΕΙΣ, ΠΕΡΙΘΩΡΙΟ, ΖΩΗ, ΠΛΑΤΕΙΑ, ΔΑΣΟΣ, ΜΑΣΤΙΓΙΟ, ΟΘΟΝΗ, ΚΟΥΚΛΑ, ΠΟΔΙ, ΔΙΑΚΟΠΤΗΣ, ΑΓΓΕΛΟΣ, ΞΩΤΙΚΟ, ΚΟΜΜΑ, ΟΥΡΑΝΟΣ, ΧΙΟΝΑΝΘΡΩΠΟΣ, ΠΑΛΙΡΡΟΙΑ, ΓΑΛΛΙΑ, ΧΑΡΗ, ΚΑΠΕΛΟ, ΣΥΝΤΑΓΜΑ, ΠΑΞΙΜΑΔΙ, ΚΥΒΟΣ, ΚΕΦΑΛΑΙΟ, ΟΡΓΑΝΟ, ΕΥΘΕΙΑ, ΠΑΡΙΣΙ, ΤΡΑΠΕΖΙ, ΦΕΓΓΑΡΙ, ΖΩΝΗ, ΠΙΤΑ, ΤΑΠΑ, ΠΥΡΣΟΣ, ΚΑΛΑΘΙ, ΣΥΝΑΥΛΙΑ, ΚΑΡΟΤΟ, ΓΙΑΤΡΟΣ, ΒΟΜΒΑ, ΚΟΥΖΙΝΑ, ΚΑΡΧΑΡΙΑΣ, ΤΑΞΗ, ΠΡΟΛΗΨΗ, ΠΙΑΤΟ, ΧΕΙΛΟΣ, ΑΝΤΙΣΤΑΣΗ, ΑΣΤΕΡΙ, ΤΑΜΠΕΛΑ, ΚΛΕΦΤΗΣ, ΑΥΤΟΚΙΝΗΤΟ, ΣΑΙΞΠΗΡ, ΣΤΕΚΑ, ΑΝΤΑΡΚΤΙΚΗ, ΡΩΜΗ, ΚΟΛΛΑ, ΦΟΡΕΜΑ, ΤΑΜΠΛΟ, ΓΥΡΟΣ, ΝΑΝΟΣ, ΜΠΑΝΙΟ, ΜΟΛΥΒΙ, ΠΑΓΩΤΟ, ΣΗΜΑΔΙ, ΑΙΓΥΠΤΟΣ, ΠΕΡΙΒΑΛΛΟΝ, ΚΑΜΠΑΝΑ, ΔΥΤΗΣ, ΑΝΕΜΟΣ, ΒΡΑΖΙΛΙΑ, ΒΟΔΙ, ΚΑΡΠΟΣ, ΟΠΕΡΑ, ΠΑΤΟΥΣΑ, ΝΥΧΤΑ, ΤΥΧΗ, ΣΥΛΛΗΨΗ, ΤΣΙΧΛΑ, ΕΚΚΛΗΣΙΑ, ΣΚΟΥΛΗΚΙ, ΔΙΑΒΗΤΗΣ, ΦΑΛΑΙΝΑ, ΑΡΧΗ, ΑΥΣΤΡΑΛΙΑ, ΓΛΩΣΣΑ",
                Portuguese: "ÁFRICA, AGENTE, AR, ALIENÍGENA, ALPES, AMAZÔNIA, AMBULÂNCIA, AMÉRICA, ANJO, ANTÁRTICA, MAÇÃ, BRAÇO, ATLANTIDA, AUSTRÁLIA, AZTEC, VOLTA, BOLA, BANDA, BANCO, BAR, CASCA, MORCEGO, BATERIA, PRAIA, URSO, BATIDA, CAMA, PEQUIM, SINO, CORREIA, BERLIM, BERMUDA, BAGA, CONTA, BLOCO, PLACA, PARAFUSO, BOMBA, LIGA, LANÇA, LANÇA, BOTA, GARRAFA, ARCO, CAIXA, PONTE, ESCOVA, RELVA, BUFALO, INSETO, BOTÃO, BEZERRO, CANADÁ, BONÉ, CAPITAL, CARRO, CARTÃO, CENOURA, CASINO, ELENCO, GATO, PILHA, CENTAURO, CENTRO, CADEIRA, MUDANÇA, CARGA, CHEQUE, PEITO, PINTAINHO, CHINA, CHOCOLATE, IGREJA, CÍRCULO, PENHASCO, CAPA, CLUBE, CLUBE, CÓDIGO, FRIO, CÓMICO, COMPOSTO, CONCERTO, CONDUTOR, CONTRATO, COZINHA, COBRE, ALGODÃO, TRIBUNAL, TAMPA, GUINDASTE, GUINDASTE, BASEBOL, CRUZ, COROA, CICLO, CHECA, DANÇA, DATA, DIA, MORTE, BARALHO, GRAU, DIAMANTE, DADOS, DINOSSAURO, DOENÇA, MÉDICO, CÃO, PROJETO, DRAGÃO, VESTIDO, BROCA, GOTA, PATO, ANO, ÁGUIA, EGITO, EMBAIXADA, MOTOR, INGLATERRA, EUROPA, OLHO, CARA, JUSTIÇA, VENTILADOR, CERCA, CAMPO, LUTADOR, FIGURA, ARQUIVO, FILME, FOGO, PEIXE, FLAUTA, MOSCA, PÉ, FORÇA, FLORESTA, FORQUILHA, FRANÇA, JOGO, GÁS, GÊNIO, ALEMANHA, FANTASMA, GIGANTE, VIDRO, LUVA, OURO, GRAÇA, GRAMA, GRÉCIA, VERDE, TERRA, PRESUNTO, MÃO, FALCÃO, CABEÇA, CORAÇÃO, HELICÓPTERO, HIMALAIA, FURO, HOLLYWOOD, MEL, CAPA, GANCHO, CHIFRE, CAVALO, FERRADURA, HOSPITAL, HOTEL, GELO, GELADO, ÍNDIA, FERRO, MARFIM, JACK, ATOLAMENTO, JATO, JUPITER, KANGAROO, KETCHUP, CHAVE, MIÚDO, REI, KIWI, FACA, CAVALEIRO, LABORATÓRIO , LASER, ADVOGADO, CHUMBO, LIMÃO, GNOMO, VIDA, LUZ, LIMOUSINE, LINHA, LINK, LEÃO, LITRO, LOCH NESS, CADEADO, TRONCO, LONDRES, SORTE, CORREIO, MAMOTOR, BORDO, MÁRMORE, MARÇO, MASSA, JOGO, MERCÚRIO, MÉXICO, MICROSCÓPIO, MILIONÁRIO, MINA, HORTELÃ, MÍSTIL, MODELO, MOLE, LUA, MOSCOU, MONTAGEM, MOUSE, BOCA, CANECA, PREGO, AGULHA, REDE, NOVA IORQUE, NOITE, NINJA, NOTA, NOVEL, ENFERMEIRA, PORCA , POLVO, PETRÓLEO, AZEITONA, OLÍMPUS, OPERA, LARANJA, ÓRGÃO, PALMA, PAN, CALÇAS, PAPEL, PARA-QUATRO, PARQUE, PARTE, PASS, MASSA, PINGUIM, PHOENIX, PIANO, TORTA, PILOTO, PIN, TUBO, PIRATA, PISTOLA , POÇO, PASSO, PLANO, PLÁSTICO, PLACA, PLATYPUS, JOGAR, LOTE, PONTO, POISON, POLE, POLICE, POOL, PORT, POST, PO UND, IMPRENSA, PRINCESA, ABÓBORA, FILHO, PIRÂMIDE, RAINHA, COELHO, RAQUETE, RAIO, REVOLUÇÃO, ANEL, ROBIN, ROBÔ, ROCHA, ROMA, RAIZ, ROSA, ROLETA, RODADA, LINHA, REGRA, SATURNA, ESCALA, ESCALA, ESCOLA, CIENTISTA, ESCORPIÃO, TELA, MERGULHADOR, SELO, SERVIDOR, SOMBRA, SHAKESPEARE, TUBARÃO, NAVIO, SAPATO, LOJA, LOJA, LOJA, TIRO, PIA, SKYSCRAPER, SLIP, SLUG, SLUGER, SMUGGLER, NEVE, BONECO DE NEVE, SOLDADO, SOUL , ESPAÇO, Feitiço, Aranha, Ponto, Espinha, Ponto, Primavera, Espião, Praça, Estádio, Funcionários, Estrela, Estado, Bastão, Estoque, Palha, Fluxo, Strike, Strike, String, Sub, fato, super-herói, balanço, interruptor, mesa , MESA, TAG, CAUDA, TORNEIRA, PROFESSOR, TELESCÓPIO, TEMPLO, TEATRO, LADRÃO, POLEGAR, BILHETE, LAÇO, TEMPO, TÓQUIO, DENTE, TOCHA, TORRE, PISTA, TREM, TRIÂNGULO, VIAGEM, DIÁRIO, TUBO, TURQUIA, COMPRADOR , UNICÓRNIO, VÁCUO, CARRINHA, VETERINÁRIO, ACORDAR, PAREDE, GUERRA, RUA, WASHINGTON, RELÓGIO, ÁGUA, ONDA, WEB, BEM, BALEIA, CHICOTE, VENTO, BRUXA, MINHOCA, JARDIM",
                Hebrew: "אביב, אביר, אבן, אגודל, אגוז, אוהד, אוויר, אולימפוס, אוסטרליה, אור, אחות, אטלנטיס, איברים, איל, אינטרנט, אירופה, אמבולנס, אמזון, אמריקה, אנגליה, אנטארקטיקה, אפריקה, אצטדיון, אקדח, אריה, ארנב, אש, באפלו, באר, בדיקה, בור, בחורה, בייג'ינג, בישול, בית המשפט, בית הספר, בית חולים, בנק, בן גוריון, בקבוק, בר, ברדס, ברווז, ברז, ברזל, בריכה, ברכיים, ברלין, ברמודה, ברק, גאון, גדר, גורד שחקים, גוש, גז, גזר, גיבור על, גל, גלידה, גלימה, גמד, גנב, גרב, גרמניה, גשר, דבש, דגים, דואר, דוב, דינוזאור, דלעת, דקל, דרקון, דשא, האופרה, האלפים, האצטקית, הבנה, הדבק, ההימלאיה, הוגן, הודו, הוליווד, הון, החיים, החצוצרה, הכנסייה, המלטה, הערה, הפלטיפוס, הר, התאמה, התרסקות, ואן, ואקום, וו, וושינגטון, וטרינר, ורד, זהב, זית, זכוכית, זמן, זנב, זרוע, זרם, חגורה, חד קרן, חדק, חוזה, חוט, חוף, חור, חותם, חזה, חזיר, חזרה, חייזר, חייל, חיסור, חליל, חליפה, חלל, חלק, חן, חנות, חצר, חרוז, חרק, חשבון, חתול, טבעת, טון, טוקיו, טורקיה, טיוטה, טיול, טייס, טיל, טלסקופ, טעינה, יד, יהלום, יוון, יום, יומן, יופיטר, ילד, יער, ירוק, ירח, כדור, כובע, כוח, כוכב, כותנה, כיור, כיכר, כיסא, כיסוי, כלב, כספית, כפפה, כפתור, כרטיס, כריש, כתום, כתר, לב, להוביל, להחליק, להקה, לווין, לוויתן, לוח, לוחם, לוך נס, לונדון, לחץ, לייזר, לילה, לימוזינה, לימון, לנצח, לעבור, לעוף, לפיד, מאזניים, מבריח, מברשת, מגדל, מגף, מדינה, מדענית, מהפכה, מודל, מוות, מוסקבה, מועדון, מוקש, מורה, מזל, מזלג, מחבת, מחזור, מחט, מחלה, מטוס, מיטה, מייפל, מיליונר, מים, מיקרוסקופ, מכה, מכונית, מכונת כביסה, מכנסיים, מכשפה, מלאי, מלאך, מלון, מלחמה, מלך, מלכה, ממותה, מנוע, מנוף, מנטה, מנצח, מסה, מסוק, מסך, מסלול, מעבדה, מעגל, מפתח, מצנח, מצרים, מקדש, מקל, מקסיקו, מרגלים, מרכז, מרץ, משולש, משחק, משטרה, מתג, מתחם, נדנדה, נורה, נחושת, ניו יורק, נייר, נינג'ה, נמל, נסיך, נסיכה, נעילה, נעל, נפילה, נץ, נקודה, נשמה, נשמע, נשר, סוכן, סוללה, סוס, סיבוב, סילון, סין, סיפון, סכין, ספינה, ספל, סרט, סתיו, עגל, עוך דין, עוף חול, עטלף, עין, עכביש, עכבר, עלילה, עמוד, עמוד השדרה, ענב, ענק, עקרב, פאי, פארק, פה, פינגווין, פיצוץ, פיראט, פירמידה, פלסטיק, פנים, פסנתר, פעמון, פצצה, פרסה, פתק, צ ' כית, צוות, צוללן, צוק, צינור, ציפור, ציפורניים, צל, צלב, צלחת, צרפת, צרצר, קו, קובייה, קובץ, קוד, קומיקס, קונצרט, קופסא, קוץ, קור, קורבן, קזינו, קטשופ, קיווי, קילו, קיר, קישור, קליפה, קנגורו, קנדה, קנטאור, קסם, קרח, קרן, קרקע, קש, קשר, קשת, ראש, רגל, רובוט, רוח, רולטה, רומא, רומן, רופא, ריבה, ריקוד, רכבת, רעל, רעש, רשת, שבלול, שבתאי, שגרירות, שדה, שדון, שוט, שולחן, שומה, שוקולד, שורה, שורש, שייקספיר, שינוי, שלג, שליט, שמלה, שמן, שן, שנהב, שעון, שרת, תא, תאריך, תג, תואר, תולעת, תיאטרון, תלמיד, תמנון, תפוח, תרגיל",
                Slovak: "CHROBÁK, POLE, PRSTEŇ, KYVADLO, AUSTRÁLIA, ZIMA, ROBOTNÍK, KENTAUR, ĽAD, LYŽICA, UCHO, PEC, FUTBALISTA, LÁVA, STOPKY, DELO, LIETADLO, ZADOK, FILM, KÔŠ, ZEMIAK, CESTOVATEĽ, OTEC, VÍLA, KLINEC, BERLÍN, PRACH, OSTROV, VÄZEŇ, HOKEJISTA, ČÍNA, OVCA, KNIHA, HEREC, OKNO, ČEREŠŇA, FĽAŠA, ZOMBIA, HUBA, NETOPIER, SVETLO, PREDAVAČ, KORUNA, JAŠTERICA, SKRUTKA, DRAK, YETTI, VESMÍR, KAPOR, MATKA, CESTA, HRAD, UPÍR, VOJNA, HÁK, CIRKUS, RIEKA, LÍŠKA, PES, ŽEHLIČKA, AMERIKA, ŠÍPKA, BUNKA, ZÁKUSOK, KOMÉTA, KOZA, SOĽ, VÍRUS, VÁHA, PEKING, PREZIDENT, MLIEKO, AUTO, BRATISLAVA, GUMA, SMRŤ, HLINA, ORGÁN, DÉMON, MRAVEC, ŽOBRÁK, TELEFÓN, DINOSAURUS, GRÉCKO, PANNA, VOZ, KVAPEĽ, GITARA, OROL, BRAT, KAKTUS, JADRO, ZRKADLO, NEMOCNICA, STENA, OMÁČKA, KORENIE, UHLIE, PAS, DÁŽĎ, PODNIKATEĽ, TRÚBA, BETÓN, SNEH, ČELO, PÓL, ZEBRA, VEŽA, KRÍŽ, ROLA, REŤAZ, LASER, MRAKODRAP, CESTA, ZÁKON, LOS, IHLA, MAĎAR, ŠŤASTIE, CHOROBA, TOPOĽ, NEMECKO, ZEM, SUKŇA, KURA, HORA, STOLIČKA, BANKÁR, HODINKY, VEĽRYBA, FYZIK, KOREŇ, KLOBÚK, LOPATA, LOCHNESKA, BANÁN, ÚRAD, ÚDOLIE, BÁSNIK, PÍLA, MRÁZ, PAPRIKA, KRČMA, PRÁČKA, POLIEVKA, KAMARÁT, DVERE, PLACKA, RAKETA, DRÔT, ČECH, NÔŽ, SNEŽIENKA, LOPTA, KLADIVO, SYR, NEPRIATEĽ, MYŠ, SLNKO, LÁTKA, NOC, MUCHOTRÁVKA, REBRO, KRÁĽ, ČERT, FLAUTA, KINO, VZDUCH, OHEŇ, PRÁCA, TLAČIDLO, KLIEŠTE, KOŠEĽA, MARS, OKULIARE, MOSKVA, TRÁVA, LOKOMOTÍVA, PLÁŠŤ, HRNIEC, PARK, OKO, PALICA, OBCHOD, HLAVA, PANVA, SLOVÁK, MOTÝLIK, FRANCÚZSKO, DOM, MÚKA, PAPAGÁJ, DIAMANT, HREBEŇ, FIGÚRKA, AMERIČAN, ŽELEZO, ČARODEJNÍK, LIMONÁDA, POPOL, KLOKAN, KAMEŇ, KĽÚČ, AFRIKA, VODIČ, SALÁMA, SKLO, DŽUNGLA, BIOLÓG, RADOSŤ, ZÁMOK, ZUB, TALIANSKO, DOKTOR, PAPUČA, PRASA, VLAK, CHOBOTNICA, KOCKA, PARNÍK, SPRÁVA, MOTORKA, DUCH, KOMÍN, KOHÚTIK, ROZPRÁVKA, KAMIÓN, JABĹČKO, SMREK, STRANA, MATEMATIK, TULIPÁN, SESTRA, KLAUN, KOSA, HUDBA, KOBYLKA, ANGLICKO, MORE, TANIER, PARADAJKA, SMOLA, VOJVODCA, MEDVEĎ, RUČIČKA, BRUCHO, DREVO, KROKODÍL, HOLANĎAN, ŽERIAV, VETERNÍK, VTÁKOPYSK, CHLIEB, ŠPANIEL, LUPIČ, PLAST, TRPASLÍK, PALEC, VODA, HRA, LAMPA, CICAVEC, NOHAVICE, SLON, CERUZKA, VRCHOL, KRAVA, BRAZÍLIA, HLINÍK, ÁZIA, KMEŇ, PODVODNÍK, PÚŠŤ, JEŽKO, JASKYŇA, VIEDEŇ, PLYN, JESEŇ, BUBLINA, ŠALÁT, ŠKRIATOK, NOHA, PANÁK, KANADA, KVET, PAVÚK, POČÍTAČ, MESIAC, PARÍŽ, SEDLIAK, KAPUSTA, VENUŠA, LEV, ČOKOLÁDA, SEDMOKRÁSKA, KOZMONAUT, PROGRAMÁTOR, VIEČKO, ANJEL, LONDÝN, KNEDĽA, ZLATO, LETO, MAČKA, TIGER, KER, MÄSO, FILOZOF, JAZVEC, VIERA, LIST, NOS, RYS, KLÁVESNICA, KABÁT, ZVONČEK, POLICAJT, HVIEZDA, ŠŤUKA, TELEVÍZIA, SEKERA, UTERÁK, HLAS, DIEŤA, PRINCEZNÁ, SLIVKA, PLANÉTA, MEČ, UMELEC, BRADA, JAR, OBOR, KOŠICE, STRIEBRO, ŠOŠOVIČKA, ŠKORPIÓN, PONOŽKA, DUB, SUPERHRDINA, BASA, KARTA, JAZDEC, ORECH, POMARANČ, RUŽA, KORYTNAČKA, PIVO, SVIEČKA, DEDINA, ŠPAGETA, SKRUTKOVAČ, STROM, LÚKA, POÉZIA, KEFA, PLOT, VLNA, LÁSKA, POVRAZ, MRKVA, ATLÉT, OBÁLKA, SRDCE, TUČNIAK, JEDNOROŽEC, DÝKA, CUKOR, UČITEĽ, KLAVÍR, STANICA, PIŠTOĽ, ŠKOLA, ROH, SPEVÁK, MIER, PAPIER, KÚZLO, VIDLIČKA, AUTOBUS, VIETOR, ROPA, LES, STRELEC, KNIŽNICA, PLASTELÍNA, MELÓN, ČAPICA, CINTORÍN, VODNÍK, VEDEC, ŽRALOK, JAZYK, RÁDIO, KOLENO, VAJCE, MESTO, KOLOBEŽKA, GUĽA, BRÁNA, RUS",
                Dutch: "POST, ROULETTE, DRAAK, OORLOG, HONING, BOM, CASINO, WOLKENKRABBER, SATURNUS, ASTRONAUT, ZWEEP, ANTARCTICA, SNEEUWPOP, CONCERT, CHOCOLADE, VLIEGTUIG, MILJONAIR, DINOSAURUS, KAMELEON, TROMPET, PINGUÏN, SPIN, RAKET, AMBASSADE, PISTOOL, ZIEKTE, SPION, PRINSES, GENIE, DIEF, OPERA, RIDDER, STADION, LIMOUSINE, SPOOK, BUS, LOLLY, LASER, DOOD, ZIEKENHUIS, AMBULANCE, INKTVIS, HELIKOPTER, KANGOEROE, MICROSCOOP, PRETPARK, SUPERHELD, TELESCOOP, PARACHUTE, VAMPIER, ROTONDE, SATELLIET, ENGEL, ROBOT, EENHOORN, HEKS, KOLONIST, DUIKER, GIF, BRUG, VUUR, COBRA, WALVIS, MAAN, VIS, DOKTER, KERK, PLEISTER, ZUSTER, WIND, LEEUW, OOG, LUCHT, KONIJN, BANK, GRAS, JURK, DWERG, BOS, AUTO, HANDSCHOEN, APPEL, OLIE, KOK, BEER, POES, LEVEN, GELUK, REUS, SPIEGEL, STRAND, HOTEL, WATER, PAPIER, WORM, ADVOCAAT, WETENSCHAPPER, DANS, WORTEL, KETCHUP, NACHT, KATOEN, VOET, MUIS, MES, THEATER, AGENT, SCHIP, PILOOT, DUIM, LERAAR, FLES, DAG, KONING, GLAS, KABEL, TAND, HOND, PAARD, SCHOEN, STOEL, KROON, IJS, GOUD, VORK, TIJD, FLUIT, VLAM, SNEEUW, IVOOR, SOLDAAT, PIRAMIDE, KUBUS, STER, RING, HOORN, HART, BLOK, BUIS, NAALD, LIJN, KRIJT, BORD, BOX, SCHERM, STUK, SPOT, KNOP, MOND, ETIKET, HAND, BED, MUUR, TOREN, KAART, BAD, DIAMANT, KRUIS, NET, PUNT, NOOT, PLAAT, HOL, WIJZER, KRACHT, SLEUTEL, MACHINE, OVERGANG, STROOM, HOOFD, PAAL, CENTRUM, ONGELUK, SCHAT, SLOT, CODE, CIRKEL, LINK, PIJP, AMSTERDAM, NEDERLAND, LIMBURG, BRUSSEL, EGYPTE, LONDEN, CARNAVAL, ROTTERDAM, BELGIË, HUNEBED, HOLLYWOOD, GRIEKENLAND, ROME, ARDENNEN, NINJA, POOL, SHOARMA, DUITSLAND, PROVINCIE, AMERIKA, ATLANTIS, ENGELAND, LOEMPIA, AFRIKA, TABLET, FRANKRIJK, KLOMP, POLDER, EURO, VOETBAL, ZEELAND, BERLIJN, PIZZA, DOLFIJN, HAWAÏ, MOTOR, LAARS, CARAVAN, FRIET, ALPEN, SEIZOEN, KAMER, BLIK, VORST, IJZER, ZEGEL, LICHT, MARS, GROEN, JAM, EUROPA, LEIDING, WISSEL, AARDE, STRAAL, DEKSEL, CITROEN, ROOS, TAFEL, STAART, METER, DIJK, BATTERIJ, ARENA, BEELD, KOSTUUM, SLANG, SPOOR, GAREN, AANDEEL, VET, BLOND, SLIP, GEMEENTE, SLAG, PROEF, CLUB, SCHADUW, BENDE, STRIP, TWEELING, BAND, CHIP, TOCHT, DUIKBOOT, MIJN, VINK, VLIEG, KOUD, KNIKKER, SPEL, HAAK, KNUPPEL, KETTING, SCHEIDING, STAPEL, BAR, BUBBEL, POND, ROND, VELD, HEMEL, BOK, VEER, ZINK, FIETS, SCHRIFT, MAT, SLEE, PATROON, GROND, RUG, STAM, MUNT, GRAAD, KEGEL, UITZENDING, EIKEL, MOL, GESLACHT, TEMPEL, POMPOEN, IJSBEER, SMOKKELAAR, HAM, VLUCHT, KRUIK, VAL, SPREUK, BOEK, RAAD, BAL, PIL, ELF, BUREAU, ARM, SCHAAL, FLITS, CEL, VULKAAN, CONTRACT, CHINEES, BAAN, DIERENARTS, HAVEN, GOLF, NICHT, STEEK, MASKER, RIET, GELUID, PRIJS, SCHROEF, HAVIK, PERS, FORMULE, AS, KUIP, VIOOL, REGEL, DICHT, MASSA, WEB, ZAK, PALM, KRAAN, PASTA, TAART, GERECHT, SPIJKER, MODEL, WEEGSCHAAL, REVOLUTIE, PARIJS, GAS, SINGLE, PIANO, BESTAND, BRON, PODIUM, AANVAL, ASIEL, NETWERK, WEDSTRIJD, FILM, SCHIJF, AMAZONE, RUIMTE, BEURS, STAF, SHUTTLE, PIRAAT, KOP, STEM, GAT, KUSSEN, KAMP, TON, SPA, PAD, FIGUUR, GEZICHT, DOOS, NAGEL, PINDA, MONSTER, WAS, RECEPT, TOETS, TAP, SCHOOL, TROMMEL, KEVER, KATER, TANK, KOPER, SCHOT, HAGEL, RIEM, PUPIL, ORANJE, DOEL, FOXTROT, RACKET, DRAAI, RACE, MAAT, HORDE, SAMBA, DIPLOMA, SALSA, RECORD, VLOER, TEAM, RITME, BASKET, DISCO, ATLETIEK, BALLET, TRAINER, CHOREOGRAAF, AMBER, ZOUT, LAVENDEL, HEET, ZWART, WORST, BLANK, KOFFIE, JASMIJN, TONG, MARINE, SPEK, GRIJS, BELEG, ZILVER, CHILI, ZALM, SCHUIM"
            };
        }, {}],
        "M6dW": [function(require, module, exports) {
            "use strict";
            var e = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var a in e) Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                    return t.default = e, t
                },
                t = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var a = e(require("react")),
                n = t(require("~/words.json")),
                r = function(e) {
                    var t = e.words,
                        r = e.onWordChange,
                        l = e.language,
                        u = e.selectedLanguage,
                        i = e.onSelectedLanguageChange,
                        s = a.useState(!1),
                        o = s[0],
                        c = s[1];
                    a.useEffect(function() {
                        l !== u && c(!1)
                    }, [l, u]);
                    var d = o ? "▾" : "▸",
                        m = t === n.default[l] ? l : "Custom",
                        f = null;
                    return t.trim().split(",").map(function(e) {
                        return e.trim()
                    }).filter(function(e) {
                        return e.length > 0
                    }).length < 25 && (f = a.createElement("div", {
                        className: "warning"
                    }, "must have 25+ words")), a.createElement("div", null, a.createElement("label", {
                        className: "language-group"
                    }, a.createElement("input", {
                        type: "radio",
                        value: l,
                        checked: l === u,
                        onChange: i
                    }), a.createElement("div", {
                        className: "btn-configured-word-set",
                        onClick: function() {
                            c(!o)
                        }
                    }, a.createElement("div", {
                        className: "symbol"
                    }, d), a.createElement("div", {
                        className: "label"
                    }, "Words: ", m)), f), o && a.createElement("div", null, a.createElement("textarea", {
                        value: t,
                        onChange: r
                    })))
                };
            exports.default = r;
        }, {
            "react": "HdMw",
            "~/words.json": "ISGT"
        }],
        "szru": [function(require, module, exports) {
            "use strict";
            var e = this && this.__assign || function() {
                    return (e = Object.assign || function(e) {
                        for (var t, n = 1, a = arguments.length; n < a; n++)
                            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }).apply(this, arguments)
                },
                t = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                },
                n = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var a = t(require("react")),
                r = n(require("~/ui/words_picker")),
                i = n(require("~/words.json")),
                o = require("jquery");
            window.$ = window.jQuery = o, exports.Lobby = function(t) {
                var n = t.defaultGameID,
                    o = a.useState(n),
                    u = o[0],
                    l = o[1],
                    s = a.useState("English"),
                    c = s[0],
                    d = s[1],
                    m = a.useState(i.default),
                    f = m[0],
                    g = m[1];
                return a.createElement("div", {
                    id: "lobby"
                }, a.createElement("p", {
                    id: "banner"
                }, "Also, check out the cooperative version at  ", a.createElement("a", {
                    href: "https://www.codenamesgreen.com",
                    target: "_blank"
                }, "Codenames Green"), "."), a.createElement("div", {
                    id: "available-games"
                }, a.createElement("form", {
                    id: "new-game"
                }, a.createElement("p", {
                    className: "intro"
                }, "Play Codenames online across multiple devices on a shared board. To create a new game or join an existing game, enter a game identifier and click 'GO'."), a.createElement("input", {
                    type: "text",
                    id: "game-name",
                    autoFocus: !0,
                    onChange: function(e) {
                        l(e.target.value)
                    },
                    value: u
                }), a.createElement("button", {
                    disabled: !u.length,
                    onClick: function(e) {
                        e.preventDefault(), u && $.post("/next-game", JSON.stringify({
                            game_id: u,
                            word_set: f[c].split(", "),
                            create_new: !1
                        }), function(e) {
                            var t = document.location.pathname = "/" + u;
                            window.location = t
                        })
                    }
                }, "Go"), a.createElement("div", {
                    id: "new-game-options"
                }, Object.keys(i.default).map(function(t) {
                    return a.createElement(r.default, {
                        key: t,
                        words: f[t],
                        onWordChange: function(n) {
                            var a;
                            g(e(e({}, f), ((a = {})[t] = n.target.value, a)))
                        },
                        language: t,
                        selectedLanguage: c,
                        onSelectedLanguageChange: function() {
                            d(t)
                        }
                    })
                })))))
            };
        }, {
            "react": "HdMw",
            "~/ui/words_picker": "M6dW",
            "~/words.json": "ISGT",
            "jquery": "HlZQ"
        }],
        "owv9": [function(require, module, exports) {
            "use strict";
            var e = this && this.__extends || function() {
                    var e = function(t, n) {
                        return (e = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                            })(t, n)
                    };
                    return function(t, n) {
                        function r() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                t = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var n = t(require("react")),
                r = t(require("react-dom")),
                o = require("~/ui/game"),
                a = require("~/ui/lobby"),
                i = function(t) {
                    function r(e) {
                        var n = t.call(this, e) || this;
                        return n.state = {
                            gameID: null
                        }, document.location.hash && (n.state.gameID = document.location.hash.slice(1)), window.selectedGameID && (n.state.gameID = window.selectedGameID), n
                    }
                    return e(r, t), r.prototype.render = function() {
                        var e;
                        return e = this.state.gameID ? n.createElement(o.Game, {
                            gameID: this.state.gameID
                        }) : n.createElement(a.Lobby, {
                            defaultGameID: window.autogeneratedGameID
                        }), n.createElement("div", {
                            id: "application"
                        }, n.createElement("div", {
                            id: "topbar"
                        }, n.createElement("a", {
                            href: "http://" + window.location.host
                        }, n.createElement("h1", null, "Codenames"))), e)
                    }, r
                }(n.Component);
            exports.App = i, document.addEventListener("DOMContentLoaded", function(e) {
                r.render(n.createElement(i, null), document.getElementById("app"))
            });
        }, {
            "react": "HdMw",
            "react-dom": "X9zx",
            "~/ui/game": "NrZe",
            "~/ui/lobby": "szru"
        }]
    }, {}, ["owv9"], null)
    //# sourceMappingURL=/app.js.map
