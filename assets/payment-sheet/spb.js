var Shopify = "object" == typeof Shopify ? Shopify : {};
Shopify.PaymentButton = function(t) {
    function e(e) {
        for (var n, o, i = e[0], a = e[1], u = 0, s = []; u < i.length; u++)
            o = i[u],
            r[o] && s.push(r[o][0]),
            r[o] = 0;
        for (n in a)
            Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
        for (c && c(e); s.length; )
            s.shift()()
    }
    var n = {}
      , r = {
        3: 0
    };
    function o(t) {
        return i.p + "latest/" + {
            0: "9a97cc69580d685828af",
            1: "0a9366922e2559991c2c",
            2: "07dec445984d05158816"
        }[t] + "." + ({}[t] || t) + ".js"
    }
    function i(e) {
        if (n[e])
            return n[e].exports;
        var r = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(r.exports, r, r.exports, i),
        r.l = !0,
        r.exports
    }
    i.e = function(t) {
        var e = []
          , n = r[t];
        if (0 !== n)
            if (n)
                e.push(n[2]);
            else {
                var a = new Promise(function(e, o) {
                    n = r[t] = [e, o]
                }
                );
                e.push(n[2] = a);
                var u, s = document.getElementsByTagName("head")[0], c = document.createElement("script");
                c.charset = "utf-8",
                c.timeout = 120,
                i.nc && c.setAttribute("nonce", i.nc),
                c.src = o(t),
                u = function(e) {
                    c.onerror = c.onload = null,
                    clearTimeout(f);
                    var n = r[t];
                    if (0 !== n) {
                        if (n) {
                            var o = e && ("load" === e.type ? "missing" : e.type)
                              , i = e && e.target && e.target.src
                              , a = new Error("Loading chunk " + t + " failed.\n(" + o + ": " + i + ")");
                            a.type = o,
                            a.request = i,
                            n[1](a)
                        }
                        r[t] = void 0
                    }
                }
                ;
                var f = setTimeout(function() {
                    u({
                        type: "timeout",
                        target: c
                    })
                }, 12e4);
                c.onerror = c.onload = u,
                s.appendChild(c)
            }
        return Promise.all(e)
    }
    ,
    i.m = t,
    i.c = n,
    i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(t, e) {
        if (1 & e && (t = i(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var r in t)
                i.d(n, r, function(e) {
                    return t[e]
                }
                .bind(null, r));
        return n
    }
    ,
    i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return i.d(e, "a", e),
        e
    }
    ,
    i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    i.p = "https://cdn.shopifycloud.com/payment-sheet/assets/",
    i.oe = function(t) {
        throw console.error(t),
        t
    }
    ;
    var a = window.shopifySpbJsonp = window.shopifySpbJsonp || []
      , u = a.push.bind(a);
    a.push = e,
    a = a.slice();
    for (var s = 0; s < a.length; s++)
        e(a[s]);
    var c = u;
    return i(i.s = 189)
}([function(t, e) {
    var n = t.exports = {
        version: "2.5.1"
    };
    "number" == typeof __e && (__e = n)
}
, function(t, e, n) {
    var r = n(3)
      , o = n(0)
      , i = n(8)
      , a = n(11)
      , u = "prototype"
      , s = function(t, e, n) {
        var c, f, l, d = t & s.F, h = t & s.G, p = t & s.S, v = t & s.P, y = t & s.B, m = t & s.W, g = h ? o : o[e] || (o[e] = {}), b = g[u], w = h ? r : p ? r[e] : (r[e] || {})[u];
        for (c in h && (n = e),
        n)
            (f = !d && w && void 0 !== w[c]) && c in g || (l = f ? w[c] : n[c],
            g[c] = h && "function" != typeof w[c] ? n[c] : y && f ? i(l, r) : m && w[c] == l ? function(t) {
                var e = function(e, n, r) {
                    if (this instanceof t) {
                        switch (arguments.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(e);
                        case 2:
                            return new t(e,n)
                        }
                        return new t(e,n,r)
                    }
                    return t.apply(this, arguments)
                };
                return e[u] = t[u],
                e
            }(l) : v && "function" == typeof l ? i(Function.call, l) : l,
            v && ((g.virtual || (g.virtual = {}))[c] = l,
            t & s.R && b && !b[c] && a(b, c, l)))
    };
    s.F = 1,
    s.G = 2,
    s.S = 4,
    s.P = 8,
    s.B = 16,
    s.W = 32,
    s.U = 64,
    s.R = 128,
    t.exports = s
}
, function(t, e, n) {
    var r = n(33)("wks")
      , o = n(32)
      , i = n(3).Symbol
      , a = "function" == typeof i;
    (t.exports = function(t) {
        return r[t] || (r[t] = a && i[t] || (a ? i : o)("Symbol." + t))
    }
    ).store = r
}
, function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}
, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}
, function(t, e, n) {
    var r = n(4);
    t.exports = function(t) {
        if (!r(t))
            throw TypeError(t + " is not an object!");
        return t
    }
}
, function(t, e, n) {
    var r = n(5)
      , o = n(94)
      , i = n(53)
      , a = Object.defineProperty;
    e.f = n(7) ? Object.defineProperty : function(t, e, n) {
        if (r(t),
        e = i(e, !0),
        r(n),
        o)
            try {
                return a(t, e, n)
            } catch (t) {}
        if ("get"in n || "set"in n)
            throw TypeError("Accessors not supported!");
        return "value"in n && (t[e] = n.value),
        t
    }
}
, function(t, e, n) {
    t.exports = !n(10)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(t, e, n) {
    var r = n(16);
    t.exports = function(t, e, n) {
        if (r(t),
        void 0 === e)
            return t;
        switch (n) {
        case 1:
            return function(n) {
                return t.call(e, n)
            }
            ;
        case 2:
            return function(n, r) {
                return t.call(e, n, r)
            }
            ;
        case 3:
            return function(n, r, o) {
                return t.call(e, n, r, o)
            }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}
, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}
, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}
, function(t, e, n) {
    var r = n(6)
      , o = n(25);
    t.exports = n(7) ? function(t, e, n) {
        return r.f(t, e, o(1, n))
    }
    : function(t, e, n) {
        return t[e] = n,
        t
    }
}
, function(t, e, n) {
    var r = n(57)
      , o = n(56);
    t.exports = function(t) {
        return r(o(t))
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(180)(!0);
    n(55)(String, "String", function(t) {
        this._t = String(t),
        this._i = 0
    }, function() {
        var t, e = this._t, n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        } : (t = r(e, n),
        this._i += t.length,
        {
            value: t,
            done: !1
        })
    })
}
, function(t, e, n) {
    var r = n(32)("meta")
      , o = n(4)
      , i = n(9)
      , a = n(6).f
      , u = 0
      , s = Object.isExtensible || function() {
        return !0
    }
      , c = !n(10)(function() {
        return s(Object.preventExtensions({}))
    })
      , f = function(t) {
        a(t, r, {
            value: {
                i: "O" + ++u,
                w: {}
            }
        })
    }
      , l = function(t, e) {
        if (!o(t))
            return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
        if (!i(t, r)) {
            if (!s(t))
                return "F";
            if (!e)
                return "E";
            f(t)
        }
        return t[r].i
    }
      , d = function(t, e) {
        if (!i(t, r)) {
            if (!s(t))
                return !0;
            if (!e)
                return !1;
            f(t)
        }
        return t[r].w
    }
      , h = function(t) {
        return c && p.NEED && s(t) && !i(t, r) && f(t),
        t
    }
      , p = t.exports = {
        KEY: r,
        NEED: !1,
        fastKey: l,
        getWeak: d,
        onFreeze: h
    }
}
, function(t, e, n) {
    var r = n(8)
      , o = n(90)
      , i = n(89)
      , a = n(5)
      , u = n(34)
      , s = n(48)
      , c = {}
      , f = {};
    (e = t.exports = function(t, e, n, l, d) {
        var h, p, v, y, m = d ? function() {
            return t
        }
        : s(t), g = r(n, l, e ? 2 : 1), b = 0;
        if ("function" != typeof m)
            throw TypeError(t + " is not iterable!");
        if (i(m)) {
            for (h = u(t.length); h > b; b++)
                if ((y = e ? g(a(p = t[b])[0], p[1]) : g(t[b])) === c || y === f)
                    return y
        } else
            for (v = m.call(t); !(p = v.next()).done; )
                if ((y = o(v, g, p.value, e)) === c || y === f)
                    return y
    }
    ).BREAK = c,
    e.RETURN = f
}
, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t)
            throw TypeError(t + " is not a function!");
        return t
    }
}
, function(t, e) {
    t.exports = {}
}
, function(t, e, n) {
    n(186);
    for (var r = n(3), o = n(11), i = n(17), a = n(2)("toStringTag"), u = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), s = 0; s < u.length; s++) {
        var c = u[s]
          , f = r[c]
          , l = f && f.prototype;
        l && !l[a] && o(l, a, c),
        i[c] = i.Array
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(176),
        __esModule: !0
    }
}
, function(t, e, n) {
    var r = n(56);
    t.exports = function(t) {
        return Object(r(t))
    }
}
, function(t, e, n) {
    var r = n(93)
      , o = n(49);
    t.exports = Object.keys || function(t) {
        return r(t, o)
    }
}
, function(t, e, n) {
    var r = n(4);
    t.exports = function(t, e) {
        if (!r(t) || t._t !== e)
            throw TypeError("Incompatible receiver, " + e + " required!");
        return t
    }
}
, function(t, e) {
    e.f = {}.propertyIsEnumerable
}
, function(t, e, n) {
    var r = n(6).f
      , o = n(9)
      , i = n(2)("toStringTag");
    t.exports = function(t, e, n) {
        t && !o(t = n ? t : t.prototype, i) && r(t, i, {
            configurable: !0,
            value: e
        })
    }
}
, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}
, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}
, function(t, e, n) {
    var r = n(1)
      , o = n(0)
      , i = n(10);
    t.exports = function(t, e) {
        var n = (o.Object || {})[t] || Object[t]
          , a = {};
        a[t] = e(n),
        r(r.S + r.F * i(function() {
            n(1)
        }), "Object", a)
    }
}
, function(t, e, n) {
    var r = n(11);
    t.exports = function(t, e, n) {
        for (var o in e)
            n && t[o] ? t[o] = e[o] : r(t, o, e[o]);
        return t
    }
}
, function(t, e) {
    t.exports = function(t, e, n, r) {
        if (!(t instanceof e) || void 0 !== r && r in t)
            throw TypeError(n + ": incorrect invocation!");
        return t
    }
}
, function(t, e) {}
, function(t, e, n) {
    var r = n(26)
      , o = n(2)("toStringTag")
      , i = "Arguments" == r(function() {
        return arguments
    }())
      , a = function(t, e) {
        try {
            return t[e]
        } catch (t) {}
    };
    t.exports = function(t) {
        var e, n, u;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = a(e = Object(t), o)) ? n : i ? r(e) : "Object" == (u = r(e)) && "function" == typeof e.callee ? "Arguments" : u
    }
}
, function(t, e) {
    var n = 0
      , r = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
    }
}
, function(t, e, n) {
    var r = n(3)
      , o = "__core-js_shared__"
      , i = r[o] || (r[o] = {});
    t.exports = function(t) {
        return i[t] || (i[t] = {})
    }
}
, function(t, e, n) {
    var r = n(51)
      , o = Math.min;
    t.exports = function(t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0
    }
}
, function(t, e, n) {
    var r = n(5)
      , o = n(183)
      , i = n(49)
      , a = n(50)("IE_PROTO")
      , u = function() {}
      , s = "prototype"
      , c = function() {
        var t, e = n(54)("iframe"), r = i.length, o = "<", a = ">";
        for (e.style.display = "none",
        n(92).appendChild(e),
        e.src = "javascript:",
        (t = e.contentWindow.document).open(),
        t.write(o + "script" + a + "document.F=Object" + o + "/script" + a),
        t.close(),
        c = t.F; r--; )
            delete c[s][i[r]];
        return c()
    };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (u[s] = r(t),
        n = new u,
        u[s] = null,
        n[a] = t) : n = c(),
        void 0 === e ? n : o(n, e)
    }
}
, function(t, e) {
    t.exports = !0
}
, function(t, e, n) {
    "use strict";
    e.__esModule = !0,
    e.default = function(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
}
, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = o(n(64));
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                (0,
                r.default)(t, o.key, o)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n),
            r && t(e, r),
            e
        }
    }()
}
, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = a(n(70))
      , o = a(n(69))
      , i = "function" == typeof o.default && "symbol" == typeof r.default ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof o.default && t.constructor === o.default && t !== o.default.prototype ? "symbol" : typeof t
    }
    ;
    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = "function" == typeof o.default && "symbol" === i(r.default) ? function(t) {
        return void 0 === t ? "undefined" : i(t)
    }
    : function(t) {
        return t && "function" == typeof o.default && t.constructor === o.default && t !== o.default.prototype ? "symbol" : void 0 === t ? "undefined" : i(t)
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(178),
        __esModule: !0
    }
}
, function(t, e, n) {
    var r = n(3)
      , o = n(0)
      , i = n(36)
      , a = n(42)
      , u = n(6).f;
    t.exports = function(t) {
        var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
        "_" == t.charAt(0) || t in e || u(e, t, {
            value: a.f(t)
        })
    }
}
, function(t, e, n) {
    e.f = n(2)
}
, function(t, e, n) {
    var r = n(23)
      , o = n(25)
      , i = n(12)
      , a = n(53)
      , u = n(9)
      , s = n(94)
      , c = Object.getOwnPropertyDescriptor;
    e.f = n(7) ? c : function(t, e) {
        if (t = i(t),
        e = a(e, !0),
        s)
            try {
                return c(t, e)
            } catch (t) {}
        if (u(t, e))
            return o(!r.f.call(t, e), t[e])
    }
}
, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}
, function(t, e, n) {
    var r = n(8)
      , o = n(57)
      , i = n(20)
      , a = n(34)
      , u = n(159);
    t.exports = function(t, e) {
        var n = 1 == t
          , s = 2 == t
          , c = 3 == t
          , f = 4 == t
          , l = 6 == t
          , d = 5 == t || l
          , h = e || u;
        return function(e, u, p) {
            for (var v, y, m = i(e), g = o(m), b = r(u, p, 3), w = a(g.length), _ = 0, x = n ? h(e, w) : s ? h(e, 0) : void 0; w > _; _++)
                if ((d || _ in g) && (y = b(v = g[_], _, m),
                t))
                    if (n)
                        x[_] = y;
                    else if (y)
                        switch (t) {
                        case 3:
                            return !0;
                        case 5:
                            return v;
                        case 6:
                            return _;
                        case 2:
                            x.push(v)
                        }
                    else if (f)
                        return !1;
            return l ? -1 : c || f ? f : x
        }
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(3)
      , o = n(1)
      , i = n(14)
      , a = n(10)
      , u = n(11)
      , s = n(28)
      , c = n(15)
      , f = n(29)
      , l = n(4)
      , d = n(24)
      , h = n(6).f
      , p = n(45)(0)
      , v = n(7);
    t.exports = function(t, e, n, y, m, g) {
        var b = r[t]
          , w = b
          , _ = m ? "set" : "add"
          , x = w && w.prototype
          , k = {};
        return v && "function" == typeof w && (g || x.forEach && !a(function() {
            (new w).entries().next()
        })) ? (w = e(function(e, n) {
            f(e, w, t, "_c"),
            e._c = new b,
            void 0 != n && c(n, m, e[_], e)
        }),
        p("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(t) {
            var e = "add" == t || "set" == t;
            t in x && (!g || "clear" != t) && u(w.prototype, t, function(n, r) {
                if (f(this, w, t),
                !e && g && !l(n))
                    return "get" == t && void 0;
                var o = this._c[t](0 === n ? 0 : n, r);
                return e ? this : o
            })
        }),
        g || h(w.prototype, "size", {
            get: function() {
                return this._c.size
            }
        })) : (w = y.getConstructor(e, t, m, _),
        s(w.prototype, n),
        i.NEED = !0),
        d(w, t),
        k[t] = w,
        o(o.G + o.W + o.F, k),
        g || y.setStrong(w, t, m),
        w
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(16);
    function o(t) {
        var e, n;
        this.promise = new t(function(t, r) {
            if (void 0 !== e || void 0 !== n)
                throw TypeError("Bad Promise constructor");
            e = t,
            n = r
        }
        ),
        this.resolve = r(e),
        this.reject = r(n)
    }
    t.exports.f = function(t) {
        return new o(t)
    }
}
, function(t, e, n) {
    var r = n(31)
      , o = n(2)("iterator")
      , i = n(17);
    t.exports = n(0).getIteratorMethod = function(t) {
        if (void 0 != t)
            return t[o] || t["@@iterator"] || i[r(t)]
    }
}
, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}
, function(t, e, n) {
    var r = n(33)("keys")
      , o = n(32);
    t.exports = function(t) {
        return r[t] || (r[t] = o(t))
    }
}
, function(t, e) {
    var n = Math.ceil
      , r = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
}
, function(t, e, n) {
    t.exports = n(11)
}
, function(t, e, n) {
    var r = n(4);
    t.exports = function(t, e) {
        if (!r(t))
            return t;
        var n, o;
        if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t)))
            return o;
        if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t)))
            return o;
        if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t)))
            return o;
        throw TypeError("Can't convert object to primitive value")
    }
}
, function(t, e, n) {
    var r = n(4)
      , o = n(3).document
      , i = r(o) && r(o.createElement);
    t.exports = function(t) {
        return i ? o.createElement(t) : {}
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(36)
      , o = n(1)
      , i = n(52)
      , a = n(11)
      , u = n(9)
      , s = n(17)
      , c = n(184)
      , f = n(24)
      , l = n(91)
      , d = n(2)("iterator")
      , h = !([].keys && "next"in [].keys())
      , p = "@@iterator"
      , v = "keys"
      , y = "values"
      , m = function() {
        return this
    };
    t.exports = function(t, e, n, g, b, w, _) {
        c(n, e, g);
        var x, k, S, P = function(t) {
            if (!h && t in T)
                return T[t];
            switch (t) {
            case v:
            case y:
                return function() {
                    return new n(this,t)
                }
            }
            return function() {
                return new n(this,t)
            }
        }, A = e + " Iterator", E = b == y, O = !1, T = t.prototype, j = T[d] || T[p] || b && T[b], M = j || P(b), C = b ? E ? P("entries") : M : void 0, I = "Array" == e && T.entries || j;
        if (I && (S = l(I.call(new t))) !== Object.prototype && S.next && (f(S, A, !0),
        r || u(S, d) || a(S, d, m)),
        E && j && j.name !== y && (O = !0,
        M = function() {
            return j.call(this)
        }
        ),
        r && !_ || !h && !O && T[d] || a(T, d, M),
        s[e] = M,
        s[A] = m,
        b)
            if (x = {
                values: E ? M : P(y),
                keys: w ? M : P(v),
                entries: C
            },
            _)
                for (k in x)
                    k in T || i(T, k, x[k]);
            else
                o(o.P + o.F * (h || O), e, x);
        return x
    }
}
, function(t, e) {
    t.exports = function(t) {
        if (void 0 == t)
            throw TypeError("Can't call method on  " + t);
        return t
    }
}
, function(t, e, n) {
    var r = n(26);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(145),
        __esModule: !0
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(148),
        __esModule: !0
    }
}
, function(t, e, n) {
    t.exports = n(150)
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.logger = e.Logger = e.Literal = e.Level = void 0;
    var r = c(n(37))
      , o = c(n(38))
      , i = c(n(67))
      , a = n(109)
      , u = c(n(153))
      , s = c(n(152));
    function c(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var f = e.Level = void 0;
    !function(t) {
        t[t.error = 1] = "error",
        t[t.warn = 2] = "warn",
        t[t.log = 3] = "log",
        t[t.info = 4] = "info",
        t[t.debug = 5] = "debug"
    }(f || (e.Level = f = {}));
    e.Literal = (0,
    i.default)(f).map(function(t) {
        return f[t]
    }).filter(function(t) {
        return "string" == typeof t
    });
    var l = "[SPB]"
      , d = e.Logger = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.error;
            (0,
            r.default)(this, t),
            this.level = e,
            this.notifier = new s.default
        }
        return (0,
        o.default)(t, [{
            key: "debug",
            value: function() {
                if (this.levelGuard(f.debug)) {
                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                    var r, o;
                    if (console.debug)
                        (r = console).debug.apply(r, [l].concat(e));
                    else
                        (o = console).log.apply(o, [l].concat(e))
                }
            }
        }, {
            key: "log",
            value: function() {
                for (var t, e = arguments.length, n = Array(e), r = 0; r < e; r++)
                    n[r] = arguments[r];
                return this.levelGuard(f.log) && (t = console).log.apply(t, [l].concat(n))
            }
        }, {
            key: "warn",
            value: function() {
                for (var t, e = arguments.length, n = Array(e), r = 0; r < e; r++)
                    n[r] = arguments[r];
                return this.levelGuard(f.warn) && (t = console).warn.apply(t, [l].concat(n))
            }
        }, {
            key: "error",
            value: function() {
                for (var t, e = arguments.length, n = Array(e), r = 0; r < e; r++)
                    n[r] = arguments[r];
                var o = n[0];
                return (0,
                u.default)(o) && this.notifier.notify(o),
                this.levelGuard(f.error) && (t = console).error.apply(t, [l].concat(n))
            }
        }, {
            key: "info",
            value: function() {
                for (var t, e = arguments.length, n = Array(e), r = 0; r < e; r++)
                    n[r] = arguments[r];
                return this.levelGuard(f.info) && (t = console).info.apply(t, [l].concat(n))
            }
        }, {
            key: "isDebugMode",
            value: function() {
                return this.levelGuard(f.debug)
            }
        }, {
            key: "levelGuard",
            value: function(t) {
                return t <= this.loggingLevel
            }
        }, {
            key: "loggingLevel",
            get: function() {
                var t = (0,
                a.searchParams)().get("loggingLevel");
                if (!t)
                    return this.level;
                if (!h(t))
                    throw new Error("Unknown logging level: " + t);
                return f[t]
            }
        }]),
        t
    }();
    function h(t) {
        return "string" == typeof t && t in f
    }
    var p = e.logger = new d;
    e.default = p
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(n(65));
    e.count = a,
    e.increment = u,
    e.decrement = s,
    e.histogram = c;
    var o = i(n(68));
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function a(t, e) {
        return f({
            name: t,
            type: "count",
            value: e
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [])
    }
    function u(t) {
        return f({
            name: t,
            type: "increment"
        }, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [])
    }
    function s(t) {
        return f({
            name: t,
            type: "decrement"
        }, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [])
    }
    function c(t, e) {
        return f({
            name: t,
            type: "histogram",
            value: e
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [])
    }
    function f(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
          , n = o.default.metricApiHost;
        if (!n)
            return null;
        t.name = "spb." + t.name,
        t.tags = l(e);
        var i = (0,
        r.default)(t);
        document.createElement("img").src = "https://" + n + "/v1/event.gif?q=" + btoa(i)
    }
    function l(t) {
        if (Array.isArray(t))
            return t;
        var e = [];
        for (var n in t)
            t.hasOwnProperty(n) && e.push(n + ":" + t[n]);
        return e
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(143),
        __esModule: !0
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(164),
        __esModule: !0
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(167),
        __esModule: !0
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(160),
        __esModule: !0
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(162),
        __esModule: !0
    }
}
, function(t, e, n) {
    (function(e) {
        if (void 0 === e)
            throw new Error("config/env.js is only usable in node environments.");
        t.exports = n(165)
    }
    ).call(this, n(166))
}
, function(t, e, n) {
    t.exports = {
        default: n(132),
        __esModule: !0
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(133),
        __esModule: !0
    }
}
, function(t, e, n) {
    var r = n(93)
      , o = n(49).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return r(t, o)
    }
}
, function(t, e, n) {
    var r = n(12)
      , o = n(71).f
      , i = {}.toString
      , a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : []
      , u = function(t) {
        try {
            return o(t)
        } catch (t) {
            return a.slice()
        }
    };
    t.exports.f = function(t) {
        return a && "[object Window]" == i.call(t) ? u(t) : o(r(t))
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(3)
      , o = n(9)
      , i = n(7)
      , a = n(1)
      , u = n(52)
      , s = n(14).KEY
      , c = n(10)
      , f = n(33)
      , l = n(24)
      , d = n(32)
      , h = n(2)
      , p = n(42)
      , v = n(41)
      , y = n(139)
      , m = n(78)
      , g = n(5)
      , b = n(12)
      , w = n(53)
      , _ = n(25)
      , x = n(35)
      , k = n(72)
      , S = n(43)
      , P = n(6)
      , A = n(21)
      , E = S.f
      , O = P.f
      , T = k.f
      , j = r.Symbol
      , M = r.JSON
      , C = M && M.stringify
      , I = "prototype"
      , R = h("_hidden")
      , L = h("toPrimitive")
      , N = {}.propertyIsEnumerable
      , F = f("symbol-registry")
      , D = f("symbols")
      , B = f("op-symbols")
      , U = Object[I]
      , z = "function" == typeof j
      , G = r.QObject
      , q = !G || !G[I] || !G[I].findChild
      , $ = i && c(function() {
        return 7 != x(O({}, "a", {
            get: function() {
                return O(this, "a", {
                    value: 7
                }).a
            }
        })).a
    }) ? function(t, e, n) {
        var r = E(U, e);
        r && delete U[e],
        O(t, e, n),
        r && t !== U && O(U, e, r)
    }
    : O
      , V = function(t) {
        var e = D[t] = x(j[I]);
        return e._k = t,
        e
    }
      , W = z && "symbol" == typeof j.iterator ? function(t) {
        return "symbol" == typeof t
    }
    : function(t) {
        return t instanceof j
    }
      , H = function(t, e, n) {
        return t === U && H(B, e, n),
        g(t),
        e = w(e, !0),
        g(n),
        o(D, e) ? (n.enumerable ? (o(t, R) && t[R][e] && (t[R][e] = !1),
        n = x(n, {
            enumerable: _(0, !1)
        })) : (o(t, R) || O(t, R, _(1, {})),
        t[R][e] = !0),
        $(t, e, n)) : O(t, e, n)
    }
      , K = function(t, e) {
        g(t);
        for (var n, r = y(e = b(e)), o = 0, i = r.length; i > o; )
            H(t, n = r[o++], e[n]);
        return t
    }
      , Y = function(t, e) {
        return void 0 === e ? x(t) : K(x(t), e)
    }
      , J = function(t) {
        var e = N.call(this, t = w(t, !0));
        return !(this === U && o(D, t) && !o(B, t)) && (!(e || !o(this, t) || !o(D, t) || o(this, R) && this[R][t]) || e)
    }
      , X = function(t, e) {
        if (t = b(t),
        e = w(e, !0),
        t !== U || !o(D, e) || o(B, e)) {
            var n = E(t, e);
            return !n || !o(D, e) || o(t, R) && t[R][e] || (n.enumerable = !0),
            n
        }
    }
      , Z = function(t) {
        for (var e, n = T(b(t)), r = [], i = 0; n.length > i; )
            o(D, e = n[i++]) || e == R || e == s || r.push(e);
        return r
    }
      , Q = function(t) {
        for (var e, n = t === U, r = T(n ? B : b(t)), i = [], a = 0; r.length > a; )
            !o(D, e = r[a++]) || n && !o(U, e) || i.push(D[e]);
        return i
    };
    z || (u((j = function() {
        if (this instanceof j)
            throw TypeError("Symbol is not a constructor!");
        var t = d(arguments.length > 0 ? arguments[0] : void 0)
          , e = function(n) {
            this === U && e.call(B, n),
            o(this, R) && o(this[R], t) && (this[R][t] = !1),
            $(this, t, _(1, n))
        };
        return i && q && $(U, t, {
            configurable: !0,
            set: e
        }),
        V(t)
    }
    )[I], "toString", function() {
        return this._k
    }),
    S.f = X,
    P.f = H,
    n(71).f = k.f = Z,
    n(23).f = J,
    n(44).f = Q,
    i && !n(36) && u(U, "propertyIsEnumerable", J, !0),
    p.f = function(t) {
        return V(h(t))
    }
    ),
    a(a.G + a.W + a.F * !z, {
        Symbol: j
    });
    for (var tt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), et = 0; tt.length > et; )
        h(tt[et++]);
    for (var nt = A(h.store), rt = 0; nt.length > rt; )
        v(nt[rt++]);
    a(a.S + a.F * !z, "Symbol", {
        for: function(t) {
            return o(F, t += "") ? F[t] : F[t] = j(t)
        },
        keyFor: function(t) {
            if (!W(t))
                throw TypeError(t + " is not a symbol!");
            for (var e in F)
                if (F[e] === t)
                    return e
        },
        useSetter: function() {
            q = !0
        },
        useSimple: function() {
            q = !1
        }
    }),
    a(a.S + a.F * !z, "Object", {
        create: Y,
        defineProperty: H,
        defineProperties: K,
        getOwnPropertyDescriptor: X,
        getOwnPropertyNames: Z,
        getOwnPropertySymbols: Q
    }),
    M && a(a.S + a.F * (!z || c(function() {
        var t = j();
        return "[null]" != C([t]) || "{}" != C({
            a: t
        }) || "{}" != C(Object(t))
    })), "JSON", {
        stringify: function(t) {
            if (void 0 !== t && !W(t)) {
                for (var e, n, r = [t], o = 1; arguments.length > o; )
                    r.push(arguments[o++]);
                return "function" == typeof (e = r[1]) && (n = e),
                !n && m(e) || (e = function(t, e) {
                    if (n && (e = n.call(this, t, e)),
                    !W(e))
                        return e
                }
                ),
                r[1] = e,
                C.apply(M, r)
            }
        }
    }),
    j[I][L] || n(11)(j[I], L, j[I].valueOf),
    l(j, "Symbol"),
    l(Math, "Math", !0),
    l(r.JSON, "JSON", !0)
}
, function(t, e, n) {
    "use strict";
    var r = n(21)
      , o = n(44)
      , i = n(23)
      , a = n(20)
      , u = n(57)
      , s = Object.assign;
    t.exports = !s || n(10)(function() {
        var t = {}
          , e = {}
          , n = Symbol()
          , r = "abcdefghijklmnopqrst";
        return t[n] = 7,
        r.split("").forEach(function(t) {
            e[t] = t
        }),
        7 != s({}, t)[n] || Object.keys(s({}, e)).join("") != r
    }) ? function(t, e) {
        for (var n = a(t), s = arguments.length, c = 1, f = o.f, l = i.f; s > c; )
            for (var d, h = u(arguments[c++]), p = f ? r(h).concat(f(h)) : r(h), v = p.length, y = 0; v > y; )
                l.call(h, d = p[y++]) && (n[d] = h[d]);
        return n
    }
    : s
}
, function(t, e, n) {
    "use strict";
    var r = n(1)
      , o = n(16)
      , i = n(8)
      , a = n(15);
    t.exports = function(t) {
        r(r.S, t, {
            from: function(t) {
                var e, n, r, u, s = arguments[1];
                return o(this),
                (e = void 0 !== s) && o(s),
                void 0 == t ? new this : (n = [],
                e ? (r = 0,
                u = i(s, arguments[2], 2),
                a(t, !1, function(t) {
                    n.push(u(t, r++))
                })) : a(t, !1, n.push, n),
                new this(n))
            }
        })
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(1);
    t.exports = function(t) {
        r(r.S, t, {
            of: function() {
                for (var t = arguments.length, e = Array(t); t--; )
                    e[t] = arguments[t];
                return new this(e)
            }
        })
    }
}
, function(t, e, n) {
    var r = n(31)
      , o = n(156);
    t.exports = function(t) {
        return function() {
            if (r(this) != t)
                throw TypeError(t + "#toJSON isn't generic");
            return o(this)
        }
    }
}
, function(t, e, n) {
    var r = n(26);
    t.exports = Array.isArray || function(t) {
        return "Array" == r(t)
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(6).f
      , o = n(35)
      , i = n(28)
      , a = n(8)
      , u = n(29)
      , s = n(15)
      , c = n(55)
      , f = n(95)
      , l = n(84)
      , d = n(7)
      , h = n(14).fastKey
      , p = n(22)
      , v = d ? "_s" : "size"
      , y = function(t, e) {
        var n, r = h(e);
        if ("F" !== r)
            return t._i[r];
        for (n = t._f; n; n = n.n)
            if (n.k == e)
                return n
    };
    t.exports = {
        getConstructor: function(t, e, n, c) {
            var f = t(function(t, r) {
                u(t, f, e, "_i"),
                t._t = e,
                t._i = o(null),
                t._f = void 0,
                t._l = void 0,
                t[v] = 0,
                void 0 != r && s(r, n, t[c], t)
            });
            return i(f.prototype, {
                clear: function() {
                    for (var t = p(this, e), n = t._i, r = t._f; r; r = r.n)
                        r.r = !0,
                        r.p && (r.p = r.p.n = void 0),
                        delete n[r.i];
                    t._f = t._l = void 0,
                    t[v] = 0
                },
                delete: function(t) {
                    var n = p(this, e)
                      , r = y(n, t);
                    if (r) {
                        var o = r.n
                          , i = r.p;
                        delete n._i[r.i],
                        r.r = !0,
                        i && (i.n = o),
                        o && (o.p = i),
                        n._f == r && (n._f = o),
                        n._l == r && (n._l = i),
                        n[v]--
                    }
                    return !!r
                },
                forEach: function(t) {
                    p(this, e);
                    for (var n, r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f; )
                        for (r(n.v, n.k, this); n && n.r; )
                            n = n.p
                },
                has: function(t) {
                    return !!y(p(this, e), t)
                }
            }),
            d && r(f.prototype, "size", {
                get: function() {
                    return p(this, e)[v]
                }
            }),
            f
        },
        def: function(t, e, n) {
            var r, o, i = y(t, e);
            return i ? i.v = n : (t._l = i = {
                i: o = h(e, !0),
                k: e,
                v: n,
                p: r = t._l,
                n: void 0,
                r: !1
            },
            t._f || (t._f = i),
            r && (r.n = i),
            t[v]++,
            "F" !== o && (t._i[o] = i)),
            t
        },
        getEntry: y,
        setStrong: function(t, e, n) {
            c(t, e, function(t, n) {
                this._t = p(t, e),
                this._k = n,
                this._l = void 0
            }, function() {
                for (var t = this, e = t._k, n = t._l; n && n.r; )
                    n = n.p;
                return t._t && (t._l = n = n ? n.n : t._t._f) ? f(0, "keys" == e ? n.k : "values" == e ? n.v : [n.k, n.v]) : (t._t = void 0,
                f(1))
            }, n ? "entries" : "values", !n, !0),
            l(e)
        }
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(79)
      , o = n(22)
      , i = "Map";
    t.exports = n(46)(i, function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        get: function(t) {
            var e = r.getEntry(o(this, i), t);
            return e && e.v
        },
        set: function(t, e) {
            return r.def(o(this, i), 0 === t ? 0 : t, e)
        }
    }, r, !0)
}
, function(t, e, n) {
    var r = n(21)
      , o = n(12)
      , i = n(23).f;
    t.exports = function(t) {
        return function(e) {
            for (var n, a = o(e), u = r(a), s = u.length, c = 0, f = []; s > c; )
                i.call(a, n = u[c++]) && f.push(t ? [n, a[n]] : a[n]);
            return f
        }
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(170),
        __esModule: !0
    }
}
, function(t, e, n) {
    var r = n(2)("iterator")
      , o = !1;
    try {
        var i = [7][r]();
        i.return = function() {
            o = !0
        }
        ,
        Array.from(i, function() {
            throw 2
        })
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !o)
            return !1;
        var n = !1;
        try {
            var i = [7]
              , a = i[r]();
            a.next = function() {
                return {
                    done: n = !0
                }
            }
            ,
            i[r] = function() {
                return a
            }
            ,
            t(i)
        } catch (t) {}
        return n
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(3)
      , o = n(0)
      , i = n(6)
      , a = n(7)
      , u = n(2)("species");
    t.exports = function(t) {
        var e = "function" == typeof o[t] ? o[t] : r[t];
        a && e && !e[u] && i.f(e, u, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}
, function(t, e, n) {
    var r = n(5)
      , o = n(4)
      , i = n(47);
    t.exports = function(t, e) {
        if (r(t),
        o(e) && e.constructor === t)
            return e;
        var n = i.f(t);
        return (0,
        n.resolve)(e),
        n.promise
    }
}
, function(t, e) {
    t.exports = function(t) {
        try {
            return {
                e: !1,
                v: t()
            }
        } catch (t) {
            return {
                e: !0,
                v: t
            }
        }
    }
}
, function(t, e, n) {
    var r, o, i, a = n(8), u = n(174), s = n(92), c = n(54), f = n(3), l = f.process, d = f.setImmediate, h = f.clearImmediate, p = f.MessageChannel, v = f.Dispatch, y = 0, m = {}, g = "onreadystatechange", b = function() {
        var t = +this;
        if (m.hasOwnProperty(t)) {
            var e = m[t];
            delete m[t],
            e()
        }
    }, w = function(t) {
        b.call(t.data)
    };
    d && h || (d = function(t) {
        for (var e = [], n = 1; arguments.length > n; )
            e.push(arguments[n++]);
        return m[++y] = function() {
            u("function" == typeof t ? t : Function(t), e)
        }
        ,
        r(y),
        y
    }
    ,
    h = function(t) {
        delete m[t]
    }
    ,
    "process" == n(26)(l) ? r = function(t) {
        l.nextTick(a(b, t, 1))
    }
    : v && v.now ? r = function(t) {
        v.now(a(b, t, 1))
    }
    : p ? (i = (o = new p).port2,
    o.port1.onmessage = w,
    r = a(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function(t) {
        f.postMessage(t + "", "*")
    }
    ,
    f.addEventListener("message", w, !1)) : r = g in c("script") ? function(t) {
        s.appendChild(c("script"))[g] = function() {
            s.removeChild(this),
            b.call(t)
        }
    }
    : function(t) {
        setTimeout(a(b, t, 1), 0)
    }
    ),
    t.exports = {
        set: d,
        clear: h
    }
}
, function(t, e, n) {
    var r = n(5)
      , o = n(16)
      , i = n(2)("species");
    t.exports = function(t, e) {
        var n, a = r(t).constructor;
        return void 0 === a || void 0 == (n = r(a)[i]) ? e : o(n)
    }
}
, function(t, e, n) {
    var r = n(17)
      , o = n(2)("iterator")
      , i = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (r.Array === t || i[o] === t)
    }
}
, function(t, e, n) {
    var r = n(5);
    t.exports = function(t, e, n, o) {
        try {
            return o ? e(r(n)[0], n[1]) : e(n)
        } catch (e) {
            var i = t.return;
            throw void 0 !== i && r(i.call(t)),
            e
        }
    }
}
, function(t, e, n) {
    var r = n(9)
      , o = n(20)
      , i = n(50)("IE_PROTO")
      , a = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = o(t),
        r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
    }
}
, function(t, e, n) {
    var r = n(3).document;
    t.exports = r && r.documentElement
}
, function(t, e, n) {
    var r = n(9)
      , o = n(12)
      , i = n(182)(!1)
      , a = n(50)("IE_PROTO");
    t.exports = function(t, e) {
        var n, u = o(t), s = 0, c = [];
        for (n in u)
            n != a && r(u, n) && c.push(n);
        for (; e.length > s; )
            r(u, n = e[s++]) && (~i(c, n) || c.push(n));
        return c
    }
}
, function(t, e, n) {
    t.exports = !n(7) && !n(10)(function() {
        return 7 != Object.defineProperty(n(54)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
}
, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = i(n(188))
      , o = i(n(40));
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = function() {
        function t(t, e) {
            var n = []
              , r = !0
              , i = !1
              , a = void 0;
            try {
                for (var u, s = (0,
                o.default)(t); !(r = (u = s.next()).done) && (n.push(u.value),
                !e || n.length !== e); r = !0)
                    ;
            } catch (t) {
                i = !0,
                a = t
            } finally {
                try {
                    !r && s.return && s.return()
                } finally {
                    if (i)
                        throw a
                }
            }
            return n
        }
        return function(e, n) {
            if (Array.isArray(e))
                return e;
            if ((0,
            r.default)(Object(e)))
                return t(e, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
}
, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = a(n(129))
      , o = a(n(125))
      , i = a(n(39));
    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = function(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : (0,
            i.default)(e)));
        t.prototype = (0,
        o.default)(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (r.default ? (0,
        r.default)(t, e) : t.__proto__ = e)
    }
}
, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = o(n(39));
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = function(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" !== (void 0 === e ? "undefined" : (0,
        r.default)(e)) && "function" != typeof e ? t : e
    }
}
, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = o(n(19));
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = function(t) {
        return function() {
            var e = t.apply(this, arguments);
            return new r.default(function(t, n) {
                function o(i, a) {
                    try {
                        var u = e[i](a)
                          , s = u.value
                    } catch (t) {
                        return void n(t)
                    }
                    if (!u.done)
                        return r.default.resolve(s).then(function(t) {
                            o("next", t)
                        }, function(t) {
                            o("throw", t)
                        });
                    t(s)
                }
                return o("next")
            }
            )
        }
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.CheckoutManager = e.PayPalV4 = e.IFrameClient = e.PostMessageClient = e.GooglePay = e.eventEmitter = e.EventEmitter = e.Checkout = e.AmazonPay = e.ShopifyApplePaySession = e.ApplePay = e.paypal = e.checkout = e.CheckoutApiWrapper = e.CheckoutApiClient = e.ApiClient = void 0;
    var r = T(n(146))
      , o = T(n(67))
      , i = T(n(66))
      , a = T(n(141))
      , u = T(n(108))
      , s = T(n(105))
      , c = T(n(64))
      , f = T(n(39))
      , l = T(n(63))
      , d = T(n(58))
      , h = T(n(98))
      , p = T(n(97))
      , v = T(n(122))
      , y = T(n(70))
      , m = T(n(69))
      , g = T(n(59))
      , b = T(n(60))
      , w = T(n(119))
      , _ = T(n(40))
      , x = T(n(96))
      , k = T(n(19))
      , S = T(n(107))
      , P = T(n(37))
      , A = T(n(38))
      , E = T(n(65))
      , O = T(n(106));
    function T(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var j = b.default.mark(et)
      , M = (0,
    O.default)({})
      , C = (0,
    O.default)({})
      , I = {
        setItem: function(t, e) {},
        getItem: function(t) {},
        removeItem: function(t) {}
    }
      , R = function() {
        try {
            return window.localStorage
        } catch (t) {
            return I
        }
    };
    function L(t, e, n) {
        var r = {
            expiresAt: Date.now() + 1e3 * n,
            value: e
        };
        R().setItem(t, B(r))
    }
    function N(t) {
        var e = R().getItem(t);
        if (e) {
            var n = D(e);
            if (!(n.expiresAt < Date.now()))
                return n.value;
            F(t)
        }
    }
    function F(t) {
        R().removeItem(t)
    }
    function D(t) {
        return JSON.parse(t)
    }
    function B(t) {
        return (0,
        E.default)(t)
    }
    var U = function() {
        function t() {
            (0,
            P.default)(this, t),
            this.subscribers = {}
        }
        return (0,
        A.default)(t, [{
            key: "subscribe",
            value: function(t, e) {
                var n = this.subscribers[t] || (this.subscribers[t] = new S.default);
                return n.add(e),
                {
                    unsubscribe: function() {
                        n.delete(e)
                    }
                }
            }
        }, {
            key: "broadcast",
            value: function(t, e) {
                e.timestamp = Date.now();
                var n = this.subscribers[t];
                n && n.forEach(function(t) {
                    return t(e)
                })
            }
        }]),
        t
    }()
      , z = new U;
    function G(t) {
        W() && window.performance.mark(t + "-start")
    }
    function q(t) {
        return W() ? (window.performance.mark(t + "-end"),
        window.performance.measure(t, t + "-start", t + "-end"),
        window.performance.getEntriesByName(t)[0].duration) : 0
    }
    function $(t, e, n) {
        z.broadcast("acceleration-check-benchmark", {
            name: t,
            duration: e,
            tags: n
        })
    }
    function V(t, e, n) {
        return function(r, o, i) {
            if (W()) {
                var a = i.value;
                i.value = function() {
                    var r = this[e]
                      , o = t + ":" + r;
                    G(o);
                    for (var i = arguments.length, u = Array(i), s = 0; s < i; s++)
                        u[s] = arguments[s];
                    var c = a.apply(this, u)
                      , f = {};
                    return f[n] = r,
                    c instanceof k.default ? c.then(function(e) {
                        return $(t, q(o), f),
                        e
                    }) : ($(t, q(o), f),
                    c)
                }
            }
        }
    }
    function W() {
        return window.performance && window.performance.mark && window.performance.measure
    }
    Element.prototype;
    function H() {
        for (var t = [], e = K(), n = e.length - 1; n >= 0; n--)
            t.push(Y(e[n]));
        return t.join("")
    }
    function K() {
        var t = window.crypto || window.msCrypto;
        if (t && t.getRandomValues) {
            var e = new Uint8Array(16);
            return t.getRandomValues(e),
            e
        }
        for (var n = new Array(16), r = 0, o = 0; o < 16; o++)
            0 == (3 & o) && (r = 4294967296 * Math.random()),
            n[o] = r >>> ((3 & o) << 3) & 255;
        return n
    }
    function Y(t) {
        return (t + 256).toString(16).substr(1)
    }
    function J() {
        function t() {
            var t = Math.floor(65536 * (Math.random() + 1));
            return Math.floor(t).toString(16).substring(1)
        }
        return "" + t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
    }
    var X = "An error occurred while processing your checkout. Please try again.";
    function Z(t, e) {
        switch (!0) {
        case /failed_session/.test(t):
            return "There was a problem with the payment service. Please select a different payment method or try again later.";
        case /first_name_blank$/.test(t):
            return "Enter a first name for your shipping address";
        case /last_name_blank$/.test(t):
            return "Enter a last name for your shipping address";
        case /address1_blank$/.test(t):
            return "Enter your shipping address";
        case /address2_blank$/.test(t):
            return "Enter the apartment, suite, etc. for your shipping address";
        case /city_blank$/.test(t):
            return "Enter the city of your shipping address";
        case /country(_code)?_blank$/.test(t):
            return "Select a country for your shipping address";
        case /country(_code)?_not_supported$/.test(t):
            return "Enter a valid country for your shipping address";
        case /province(_code)?_blank$/.test(t):
            return "Enter a state / province for your shipping address";
        case /province(_code)?_invalid_state_in_country$/.test(t):
            return "Enter a valid state for your shipping address country";
        case /province(_code)?_invalid_province_in_country$/.test(t):
            return "Enter a valid province for your shipping address country";
        case /province(_code)?_invalid_region_in_country$/.test(t):
            return "Enter a valid region for your shipping address country";
        case /company_blank$/.test(t):
            return "Enter a company name for your shipping address";
        case /phone_blank$/.test(t):
            return "Enter a valid phone number for your shipping address";
        case /zip(_code)?_blank$/.test(t):
            return "Enter a ZIP code / postal code for your shipping address";
        case /zip(_code)?_invalid_for_country$/.test(t):
        case /zip(_code)?_invalid_for_country_and_province$/.test(t):
            return "Enter a valid ZIP code / postal code for your shipping address";
        case /email_invalid$/.test(t):
            return "Enter a valid email address";
        case /generic_error$/.test(t):
            return "An error occurred while processing your payment. Please try again.";
        case /credit_card_processing$/.test(t):
            return "Your card can't be processed due to technical difficulties. Please try again in a few minutes.";
        case /not_enough_in_stock$/.test(t):
            return "Some items became unavailable. Refresh your cart and try again.";
        case /already_completed/.test(t):
            return "Your items have already been purchased.";
        case /empty_cart/.test(t):
            return "Your cart is currently empty. Please add items to your cart and try again.";
        case /full_name_required$/.test(t):
            return "Enter both your first and last name";
        case /total_price_too_big$/.test(t):
            return "Your order total exceeds the limit. Please edit your cart and try again.";
        case /total_price_zero$/.test(t):
            return "To check out with Apple Pay, your order total must be greater than 0. Please choose a new payment method and try again.";
        case /no_shipping_option$/.test(t):
            return "Sorry, we currently don't ship to this country. Please choose a new shipping address and try again.";
        case /payment_in_progress$/.test(t):
            return "Your order is being processed and can't be cancelled at this time. You will receive an email confirmation once the transaction is successful.";
        case /payment_timeout$/.test(t):
            return "A network error occurred. Your order is being processed. You will receive an email confirmation once the transaction is successful.";
        case /expired_card/.test(t):
            return "Your credit card is expired. Please update your card.";
        case /card_declined/.test(t):
            return "Your credit card was declined. In order to resolve this issue, you will need to contact your bank.";
        case /(invalid|blank)$/.test(t):
            if (e && e.field)
                return "Enter a valid " + e.field
        }
        return X
    }
    var Q, tt = function() {
        function t(e, n, r) {
            (0,
            P.default)(this, t),
            this.association = e,
            this.attribute = n,
            this.attributeError = r
        }
        return (0,
        A.default)(t, [{
            key: "errorCode",
            value: function() {
                return this.association + "_" + this.attribute + "_" + this.attributeError.code
            }
        }]),
        t
    }();
    function et(t) {
        var e, n, r, o, i, a, u, s, c, f, l, d, h, p, v, y, m, g, k, S, P, A, E, O;
        return b.default.wrap(function(b) {
            for (; ; )
                switch (b.prev = b.next) {
                case 0:
                    e = !0,
                    n = !1,
                    r = void 0,
                    b.prev = 3,
                    o = (0,
                    _.default)((0,
                    w.default)(t));
                case 5:
                    if (e = (i = o.next()).done) {
                        b.next = 72;
                        break
                    }
                    if (a = i.value,
                    u = (0,
                    x.default)(a, 2),
                    s = u[0],
                    c = u[1]) {
                        b.next = 12;
                        break
                    }
                    return b.abrupt("continue", 69);
                case 12:
                    f = !0,
                    l = !1,
                    d = void 0,
                    b.prev = 15,
                    h = (0,
                    _.default)((0,
                    w.default)(c));
                case 17:
                    if (f = (p = h.next()).done) {
                        b.next = 55;
                        break
                    }
                    if (v = p.value,
                    y = (0,
                    x.default)(v, 2),
                    m = y[0],
                    g = y[1]) {
                        b.next = 24;
                        break
                    }
                    return b.abrupt("continue", 52);
                case 24:
                    k = !0,
                    S = !1,
                    P = void 0,
                    b.prev = 27,
                    A = (0,
                    _.default)(g);
                case 29:
                    if (k = (E = A.next()).done) {
                        b.next = 38;
                        break
                    }
                    if ((O = E.value) && O.code) {
                        b.next = 33;
                        break
                    }
                    return b.abrupt("continue", 35);
                case 33:
                    return b.next = 35,
                    new tt(s,m,O);
                case 35:
                    k = !0,
                    b.next = 29;
                    break;
                case 38:
                    b.next = 44;
                    break;
                case 40:
                    b.prev = 40,
                    b.t0 = b.catch(27),
                    S = !0,
                    P = b.t0;
                case 44:
                    b.prev = 44,
                    b.prev = 45,
                    !k && A.return && A.return();
                case 47:
                    if (b.prev = 47,
                    !S) {
                        b.next = 50;
                        break
                    }
                    throw P;
                case 50:
                    return b.finish(47);
                case 51:
                    return b.finish(44);
                case 52:
                    f = !0,
                    b.next = 17;
                    break;
                case 55:
                    b.next = 61;
                    break;
                case 57:
                    b.prev = 57,
                    b.t1 = b.catch(15),
                    l = !0,
                    d = b.t1;
                case 61:
                    b.prev = 61,
                    b.prev = 62,
                    !f && h.return && h.return();
                case 64:
                    if (b.prev = 64,
                    !l) {
                        b.next = 67;
                        break
                    }
                    throw d;
                case 67:
                    return b.finish(64);
                case 68:
                    return b.finish(61);
                case 69:
                    e = !0,
                    b.next = 5;
                    break;
                case 72:
                    b.next = 78;
                    break;
                case 74:
                    b.prev = 74,
                    b.t2 = b.catch(3),
                    n = !0,
                    r = b.t2;
                case 78:
                    b.prev = 78,
                    b.prev = 79,
                    !e && o.return && o.return();
                case 81:
                    if (b.prev = 81,
                    !n) {
                        b.next = 84;
                        break
                    }
                    throw r;
                case 84:
                    return b.finish(81);
                case 85:
                    return b.finish(78);
                case 86:
                case "end":
                    return b.stop()
                }
        }, j, this, [[3, 74, 78, 86], [15, 57, 61, 69], [27, 40, 44, 52], [45, , 47, 51], [62, , 64, 68], [79, , 81, 85]])
    }
    function nt(t) {
        var e = []
          , n = !0
          , r = !1
          , o = void 0;
        try {
            for (var i, a = (0,
            _.default)(et(t)); !(n = (i = a.next()).done); n = !0) {
                var u = i.value
                  , s = Z(u.errorCode(), {
                    field: u.attribute
                });
                e.push(s)
            }
        } catch (t) {
            r = !0,
            o = t
        } finally {
            try {
                !n && a.return && a.return()
            } finally {
                if (r)
                    throw o
            }
        }
        return e
    }
    function rt(t) {
        var e = (t = Array.isArray(t) ? t : [t]).map(function(t) {
            return ot(t)
        });
        return 1 === e.length && e[0] && e[0].startsWith("Enter ") && (e = ["Please e" + e[0].substr(1) + " and try again"]),
        e
    }
    function ot(t) {
        switch (t) {
        case "Some products became unavailable and your cart has been updated. We're sorry for the inconvenience.":
            return Z("not_enough_in_stock");
        case "Checkout is already completed.":
            return Z("already_completed");
        default:
            return t
        }
    }
    !function(t) {
        t[t.Cancelled = 0] = "Cancelled",
        t[t.Failure = 1] = "Failure",
        t[t.Success = 2] = "Success"
    }(Q || (Q = {}));
    var it = /^[a-z0-9]{2,4}\s?$/i;
    function at(t) {
        var e = {
            first_name: "",
            last_name: "",
            address1: "",
            address2: null,
            city: t.locality || "",
            province_code: t.administrativeArea || "",
            country_code: "",
            country: null,
            zip: t.postalCode || "",
            phone: ""
        };
        t.countryCode ? e.country_code = t.countryCode.toLowerCase() : t.country && (e.country = t.country.toLowerCase(),
        "usa" === e.country && (e.country = "united states")),
        t.givenName && (e.first_name = t.givenName),
        t.familyName && (e.last_name = t.familyName),
        t.phoneNumber && (e.phone = t.phoneNumber);
        var n = t.addressLines;
        return n && n.length && (e.address1 = n[0],
        n[1] && (e.address2 = n[1])),
        ut(e)
    }
    function ut(t) {
        var e = t.country_code
          , n = t.country
          , r = t.zip
          , o = r;
        return it.test(r) && ("ca" !== e && "canada" !== n || (o = r.trim() + " 0Z0"),
        "gb" === e && (o = r.trim() + " 0ZZ")),
        (0,
        g.default)({}, t, {
            zip: o
        })
    }
    !function(t) {
        if (!t.fetch) {
            var e = {
                searchParams: "URLSearchParams"in t,
                iterable: "Symbol"in t && "iterator"in m.default,
                blob: "FileReader"in t && "Blob"in t && function() {
                    try {
                        return new Blob,
                        !0
                    } catch (t) {
                        return !1
                    }
                }(),
                formData: "FormData"in t,
                arrayBuffer: "ArrayBuffer"in t
            };
            if (e.arrayBuffer)
                var n = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                  , r = function(t) {
                    return t && DataView.prototype.isPrototypeOf(t)
                }
                  , o = ArrayBuffer.isView || function(t) {
                    return t && n.indexOf(Object.prototype.toString.call(t)) > -1
                }
                ;
            f.prototype.append = function(t, e) {
                t = u(t),
                e = s(e);
                var n = this.map[t];
                this.map[t] = n ? n + "," + e : e
            }
            ,
            f.prototype.delete = function(t) {
                delete this.map[u(t)]
            }
            ,
            f.prototype.get = function(t) {
                return t = u(t),
                this.has(t) ? this.map[t] : null
            }
            ,
            f.prototype.has = function(t) {
                return this.map.hasOwnProperty(u(t))
            }
            ,
            f.prototype.set = function(t, e) {
                this.map[u(t)] = s(e)
            }
            ,
            f.prototype.forEach = function(t, e) {
                for (var n in this.map)
                    this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
            }
            ,
            f.prototype.keys = function() {
                var t = [];
                return this.forEach(function(e, n) {
                    t.push(n)
                }),
                c(t)
            }
            ,
            f.prototype.values = function() {
                var t = [];
                return this.forEach(function(e) {
                    t.push(e)
                }),
                c(t)
            }
            ,
            f.prototype.entries = function() {
                var t = [];
                return this.forEach(function(e, n) {
                    t.push([n, e])
                }),
                c(t)
            }
            ,
            e.iterable && (f.prototype[y.default] = f.prototype.entries);
            var i = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            x.prototype.clone = function() {
                return new x(this,{
                    body: this._bodyInit
                })
            }
            ,
            w.call(x.prototype),
            w.call(A.prototype),
            A.prototype.clone = function() {
                return new A(this._bodyInit,{
                    status: this.status,
                    statusText: this.statusText,
                    headers: new f(this.headers),
                    url: this.url
                })
            }
            ,
            A.error = function() {
                var t = new A(null,{
                    status: 0,
                    statusText: ""
                });
                return t.type = "error",
                t
            }
            ;
            var a = [301, 302, 303, 307, 308];
            A.redirect = function(t, e) {
                if (-1 === a.indexOf(e))
                    throw new RangeError("Invalid status code");
                return new A(null,{
                    status: e,
                    headers: {
                        location: t
                    }
                })
            }
            ,
            t.Headers = f,
            t.Request = x,
            t.Response = A,
            t.fetch = function(t, n) {
                return new k.default(function(r, o) {
                    var i = new x(t,n)
                      , a = new XMLHttpRequest;
                    a.onload = function() {
                        var t = {
                            status: a.status,
                            statusText: a.statusText,
                            headers: P(a.getAllResponseHeaders() || "")
                        };
                        t.url = "responseURL"in a ? a.responseURL : t.headers.get("X-Request-URL");
                        var e = "response"in a ? a.response : a.responseText;
                        r(new A(e,t))
                    }
                    ,
                    a.onerror = function() {
                        o(new TypeError("Network request failed"))
                    }
                    ,
                    a.ontimeout = function() {
                        o(new TypeError("Network request failed"))
                    }
                    ,
                    a.open(i.method, i.url, !0),
                    "include" === i.credentials && (a.withCredentials = !0),
                    "responseType"in a && e.blob && (a.responseType = "blob"),
                    i.headers.forEach(function(t, e) {
                        a.setRequestHeader(e, t)
                    }),
                    a.send(void 0 === i._bodyInit ? null : i._bodyInit)
                }
                )
            }
            ,
            t.fetch.polyfill = !0
        }
        function u(t) {
            if ("string" != typeof t && (t = String(t)),
            /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
                throw new TypeError("Invalid character in header field name");
            return t.toLowerCase()
        }
        function s(t) {
            return "string" != typeof t && (t = String(t)),
            t
        }
        function c(t) {
            var n = {
                next: function() {
                    var e = t.shift();
                    return {
                        done: void 0 === e,
                        value: e
                    }
                }
            };
            return e.iterable && (n[y.default] = function() {
                return n
            }
            ),
            n
        }
        function f(t) {
            this.map = {},
            t instanceof f ? t.forEach(function(t, e) {
                this.append(e, t)
            }, this) : Array.isArray(t) ? t.forEach(function(t) {
                this.append(t[0], t[1])
            }, this) : t && (0,
            v.default)(t).forEach(function(e) {
                this.append(e, t[e])
            }, this)
        }
        function l(t) {
            if (t.bodyUsed)
                return k.default.reject(new TypeError("Already read"));
            t.bodyUsed = !0
        }
        function d(t) {
            return new k.default(function(e, n) {
                t.onload = function() {
                    e(t.result)
                }
                ,
                t.onerror = function() {
                    n(t.error)
                }
            }
            )
        }
        function h(t) {
            var e = new FileReader
              , n = d(e);
            return e.readAsArrayBuffer(t),
            n
        }
        function p(t) {
            var e = new FileReader
              , n = d(e);
            return e.readAsText(t),
            n
        }
        function g(t) {
            for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++)
                n[r] = String.fromCharCode(e[r]);
            return n.join("")
        }
        function b(t) {
            if (t.slice)
                return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)),
            e.buffer
        }
        function w() {
            return this.bodyUsed = !1,
            this._initBody = function(t) {
                if (this._bodyInit = t,
                t)
                    if ("string" == typeof t)
                        this._bodyText = t;
                    else if (e.blob && Blob.prototype.isPrototypeOf(t))
                        this._bodyBlob = t;
                    else if (e.formData && FormData.prototype.isPrototypeOf(t))
                        this._bodyFormData = t;
                    else if (e.searchParams && URLSearchParams.prototype.isPrototypeOf(t))
                        this._bodyText = t.toString();
                    else if (e.arrayBuffer && e.blob && r(t))
                        this._bodyArrayBuffer = b(t.buffer),
                        this._bodyInit = new Blob([this._bodyArrayBuffer]);
                    else {
                        if (!e.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !o(t))
                            throw new Error("unsupported BodyInit type");
                        this._bodyArrayBuffer = b(t)
                    }
                else
                    this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }
            ,
            e.blob && (this.blob = function() {
                var t = l(this);
                if (t)
                    return t;
                if (this._bodyBlob)
                    return k.default.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                    return k.default.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData)
                    throw new Error("could not read FormData body as blob");
                return k.default.resolve(new Blob([this._bodyText]))
            }
            ,
            this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? l(this) || k.default.resolve(this._bodyArrayBuffer) : this.blob().then(h)
            }
            ),
            this.text = function() {
                var t = l(this);
                if (t)
                    return t;
                if (this._bodyBlob)
                    return p(this._bodyBlob);
                if (this._bodyArrayBuffer)
                    return k.default.resolve(g(this._bodyArrayBuffer));
                if (this._bodyFormData)
                    throw new Error("could not read FormData body as text");
                return k.default.resolve(this._bodyText)
            }
            ,
            e.formData && (this.formData = function() {
                return this.text().then(S)
            }
            ),
            this.json = function() {
                return this.text().then(JSON.parse)
            }
            ,
            this
        }
        function _(t) {
            var e = t.toUpperCase();
            return i.indexOf(e) > -1 ? e : t
        }
        function x(t, e) {
            var n = (e = e || {}).body;
            if (t instanceof x) {
                if (t.bodyUsed)
                    throw new TypeError("Already read");
                this.url = t.url,
                this.credentials = t.credentials,
                e.headers || (this.headers = new f(t.headers)),
                this.method = t.method,
                this.mode = t.mode,
                n || null == t._bodyInit || (n = t._bodyInit,
                t.bodyUsed = !0)
            } else
                this.url = String(t);
            if (this.credentials = e.credentials || this.credentials || "omit",
            !e.headers && this.headers || (this.headers = new f(e.headers)),
            this.method = _(e.method || this.method || "GET"),
            this.mode = e.mode || this.mode || null,
            this.referrer = null,
            ("GET" === this.method || "HEAD" === this.method) && n)
                throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n)
        }
        function S(t) {
            var e = new FormData;
            return t.trim().split("&").forEach(function(t) {
                if (t) {
                    var n = t.split("=")
                      , r = n.shift().replace(/\+/g, " ")
                      , o = n.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(r), decodeURIComponent(o))
                }
            }),
            e
        }
        function P(t) {
            var e = new f;
            return t.split(/\r?\n/).forEach(function(t) {
                var n = t.split(":")
                  , r = n.shift().trim();
                if (r) {
                    var o = n.join(":").trim();
                    e.append(r, o)
                }
            }),
            e
        }
        function A(t, e) {
            e || (e = {}),
            this.type = "default",
            this.status = "status"in e ? e.status : 200,
            this.ok = this.status >= 200 && this.status < 300,
            this.statusText = "statusText"in e ? e.statusText : "OK",
            this.headers = new f(e.headers),
            this.url = e.url || "",
            this._initBody(t)
        }
    }("undefined" != typeof self ? self : void 0);
    var st = function(t) {
        function e(t) {
            (0,
            P.default)(this, e);
            var n = (0,
            h.default)(this, (e.__proto__ || (0,
            d.default)(e)).call(this, "Response error"));
            return n.response = t,
            n
        }
        return (0,
        p.default)(e, t),
        e
    }(Error)
      , ct = function(t, e, n, r) {
        return new (n || (n = k.default))(function(o, i) {
            function a(t) {
                try {
                    s(r.next(t))
                } catch (t) {
                    i(t)
                }
            }
            function u(t) {
                try {
                    s(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }
            function s(t) {
                t.done ? o(t.value) : new n(function(e) {
                    e(t.value)
                }
                ).then(a, u)
            }
            s((r = r.apply(t, e || [])).next())
        }
        )
    }
      , ft = {
        poll: !0,
        timeout: 2e4
    }
      , lt = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (0,
            P.default)(this, t),
            e && (this.host = e),
            this.headers = (0,
            g.default)({
                "Content-Type": "application/json",
                Accept: "application/json"
            }, n)
        }
        return (0,
        A.default)(t, [{
            key: "get",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return this.request("GET", t, null, e)
            }
        }, {
            key: "post",
            value: function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return this.request("POST", t, e, n)
            }
        }, {
            key: "patch",
            value: function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return this.request("PATCH", t, e, n)
            }
        }, {
            key: "put",
            value: function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return this.request("PUT", t, e, n)
            }
        }, {
            key: "stopPolling",
            value: function() {
                this.pollExpiryTimeout && window.clearTimeout(this.pollExpiryTimeout),
                this.pollScheduleTimeout && window.clearTimeout(this.pollScheduleTimeout)
            }
        }, {
            key: "request",
            value: function(t, e, n, r) {
                return ct(this, void 0, void 0, b.default.mark(function o() {
                    var i, a, u;
                    return b.default.wrap(function(o) {
                        for (; ; )
                            switch (o.prev = o.next) {
                            case 0:
                                return i = {
                                    body: (0,
                                    E.default)(n)
                                },
                                "GET" === t && delete i.body,
                                "/" === e[0] && this.host && (e = "https://" + this.host + e),
                                o.next = 5,
                                fetch(e, (0,
                                g.default)({
                                    method: t,
                                    headers: this.headers,
                                    credentials: "same-origin"
                                }, i));
                            case 5:
                                return a = o.sent,
                                o.next = 8,
                                this.poll(r, a);
                            case 8:
                                return u = o.sent,
                                o.abrupt("return", dt(u));
                            case 10:
                            case "end":
                                return o.stop()
                            }
                    }, o, this)
                }))
            }
        }, {
            key: "poll",
            value: function(t, e) {
                var n = this
                  , r = void 0 !== t.poll ? t.poll : ft.poll
                  , o = void 0 !== t.timeout ? t.timeout : ft.timeout;
                if (!r || 202 !== e.status)
                    return k.default.resolve(e);
                var i = {
                    method: "GET",
                    headers: this.headers
                };
                return new k.default(function(t, r) {
                    var a = n;
                    a.pollExpiryTimeout = window.setTimeout(function() {
                        n.pollScheduleTimeout && clearTimeout(n.pollScheduleTimeout),
                        r(new Error("API request polling timed out. Exceeded maximum timeout of " + o + "ms"))
                    }, o),
                    function e(n) {
                        if (202 === n.status) {
                            var o = n.headers.get("Location");
                            if (!o)
                                return r("Missing location header");
                            var u = 1e3 * (Number(n.headers.get("Retry-After")) || 1);
                            a.pollScheduleTimeout = window.setTimeout(function() {
                                fetch(o, i).then(e.bind(a)).catch(r)
                            }, u)
                        } else
                            a.pollExpiryTimeout && window.clearTimeout(a.pollExpiryTimeout),
                            t(n)
                    }
                    .call(n, e)
                }
                )
            }
        }]),
        t
    }();
    function dt(t) {
        return ct(this, void 0, void 0, b.default.mark(function e() {
            return b.default.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (!(t.status >= 200 && t.status < 300)) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", t);
                    case 2:
                        throw new st(t);
                    case 3:
                    case "end":
                        return e.stop()
                    }
            }, e, this)
        }))
    }
    var ht = function(t, e, n, r) {
        return new (n || (n = k.default))(function(o, i) {
            function a(t) {
                try {
                    s(r.next(t))
                } catch (t) {
                    i(t)
                }
            }
            function u(t) {
                try {
                    s(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }
            function s(t) {
                t.done ? o(t.value) : new n(function(e) {
                    e(t.value)
                }
                ).then(a, u)
            }
            s((r = r.apply(t, e || [])).next())
        }
        )
    };
    function pt(t) {
        return ht(this, void 0, void 0, b.default.mark(function e() {
            var n, r, o, i, a;
            return b.default.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return n = t.shopId,
                        r = t.validationUrl,
                        o = t.domain,
                        e.next = 3,
                        vt(n, {
                            id: H(),
                            domain: o,
                            validation_url: r
                        });
                    case 3:
                        return i = e.sent,
                        a = i.body,
                        e.abrupt("return", a);
                    case 6:
                    case "end":
                        return e.stop()
                    }
            }, e, this)
        }))
    }
    function vt(t, e) {
        return ht(this, void 0, void 0, b.default.mark(function n() {
            var r, o, i, a;
            return b.default.wrap(function(n) {
                for (; ; )
                    switch (n.prev = n.next) {
                    case 0:
                        return r = new lt,
                        o = "/" + t + "/apple_pay/sessions",
                        n.next = 4,
                        r.post(o, e);
                    case 4:
                        return i = n.sent,
                        n.next = 7,
                        i.json();
                    case 7:
                        return a = n.sent,
                        n.abrupt("return", a);
                    case 9:
                    case "end":
                        return n.stop()
                    }
            }, n, this)
        }))
    }
    function yt(t, e) {
        return {
            type: "final",
            label: e,
            amount: t.attributes.total_price
        }
    }
    function mt(t) {
        var e = [bt(t)];
        return t.attributes.shipping_line && (e = e.concat([{
            type: "final",
            label: "Shipping",
            amount: t.attributes.shipping_line.price
        }])),
        t.attributes.total_tax && (e = e.concat([{
            type: "final",
            label: "Estimated Tax",
            amount: t.attributes.total_tax
        }])),
        t.attributes.applied_discount && (e = e.concat([{
            type: "final",
            label: "Discount",
            amount: String(-t.attributes.applied_discount.amount)
        }])),
        e
    }
    function gt(t) {
        return t.shippingRates.map(function(t) {
            return {
                identifier: t.id,
                label: t.title,
                detail: "",
                amount: t.price
            }
        })
    }
    function bt(t) {
        var e = (t.attributes.line_items || []).reduce(function(t, e) {
            var n = e.price;
            return t + e.quantity * Number(n)
        }, 0);
        return {
            type: "final",
            label: "Subtotal",
            amount: String(e)
        }
    }
    var wt = function(t, e, n, r) {
        return new (n || (n = k.default))(function(o, i) {
            function a(t) {
                try {
                    s(r.next(t))
                } catch (t) {
                    i(t)
                }
            }
            function u(t) {
                try {
                    s(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }
            function s(t) {
                t.done ? o(t.value) : new n(function(e) {
                    e(t.value)
                }
                ).then(a, u)
            }
            s((r = r.apply(t, e || [])).next())
        }
        )
    }
      , _t = Q
      , xt = _t.Failure
      , kt = _t.Cancelled
      , St = _t.Success
      , Pt = function(t) {
        function e() {
            (0,
            P.default)(this, e);
            var t = (0,
            h.default)(this, (e.__proto__ || (0,
            d.default)(e)).apply(this, arguments));
            return t.message = "Expected an order to be present after a successful payment",
            t
        }
        return (0,
        p.default)(e, t),
        e
    }(Error)
      , At = function() {
        function t(e) {
            var n = this;
            (0,
            P.default)(this, t),
            this.resolve = function(t) {}
            ,
            this.fail = function(t) {
                n.resolve({
                    state: xt,
                    errors: rt(t)
                })
            }
            ,
            this.oncancel = function() {
                return n.checkout.stopPolling(),
                n.paymentInProgress ? n.fail(["Your order is being processed and can't be cancelled at this time.You will receive an email confirmation once the transaction is succesful."]) : n.resolve({
                    state: kt,
                    errors: []
                }),
                k.default.resolve()
            }
            ,
            this.onvalidatemerchant = function(t) {
                return wt(n, void 0, void 0, b.default.mark(function e() {
                    var n, r;
                    return b.default.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = t.validationURL,
                                e.prev = 1,
                                e.next = 4,
                                pt({
                                    shopId: this.shopId,
                                    domain: location.hostname,
                                    validationUrl: n
                                });
                            case 4:
                                r = e.sent,
                                this.session.completeMerchantValidation(r),
                                e.next = 12;
                                break;
                            case 8:
                                e.prev = 8,
                                e.t0 = e.catch(1),
                                console.warn(e.t0.message),
                                this.handleErrors(Z("failed_session"));
                            case 12:
                            case "end":
                                return e.stop()
                            }
                    }, e, this, [[1, 8]])
                }))
            }
            ,
            this.onshippingcontactselected = function(t) {
                return wt(n, void 0, void 0, b.default.mark(function e() {
                    var n, r, o;
                    return b.default.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = {
                                    partial_addresses: !0,
                                    shipping_address: at(t.shippingContact)
                                },
                                e.prev = 1,
                                e.next = 4,
                                this.checkout.update(n);
                            case 4:
                                return e.next = 6,
                                this.checkout.refreshShippingRates();
                            case 6:
                                this.session.completeShippingContactSelection(ApplePaySession.STATUS_SUCCESS, gt(this.checkout), yt(this.checkout, this.merchantName), mt(this.checkout)),
                                this.firstShippingContactSelected = !1,
                                e.next = 44;
                                break;
                            case 10:
                                if (e.prev = 10,
                                e.t0 = e.catch(1),
                                console.warn(e.t0.message),
                                e.prev = 13,
                                !Et(e.t0) || !this.firstShippingContactSelected) {
                                    e.next = 19;
                                    break
                                }
                                this.session.completeShippingContactSelection(ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS, [], yt(this.checkout, this.merchantName), mt(this.checkout)),
                                this.firstShippingContactSelected = !1,
                                e.next = 20;
                                break;
                            case 19:
                                throw e.t0;
                            case 20:
                                e.next = 44;
                                break;
                            case 22:
                                if (e.prev = 22,
                                e.t1 = e.catch(13),
                                console.warn(e.t1.message),
                                e.prev = 25,
                                Et(e.t1)) {
                                    e.next = 28;
                                    break
                                }
                                throw e.t1;
                            case 28:
                                return e.next = 30,
                                e.t0.response.json();
                            case 30:
                                r = e.sent,
                                o = r.errors,
                                this.handleErrors(nt(o)),
                                e.next = 44;
                                break;
                            case 35:
                                e.prev = 35,
                                e.t2 = e.catch(25),
                                console.warn(e.t2.message),
                                e.t3 = e.t2.message,
                                e.next = "Total amount must be greater than zero" === e.t3 ? 41 : "Total amount is too big" === e.t3 ? 42 : 43;
                                break;
                            case 41:
                                return e.abrupt("return", this.handleErrors([Z("total_price_zero")]));
                            case 42:
                                return e.abrupt("return", this.handleErrors([Z("total_price_too_big")]));
                            case 43:
                                return e.abrupt("return", this.session.abort());
                            case 44:
                            case "end":
                                return e.stop()
                            }
                    }, e, this, [[1, 10], [13, 22], [25, 35]])
                }))
            }
            ,
            this.onshippingmethodselected = function(t) {
                return wt(n, void 0, void 0, b.default.mark(function e() {
                    var n, r;
                    return b.default.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = t.shippingMethod,
                                r = {
                                    shipping_line: {
                                        handle: n.identifier
                                    }
                                },
                                e.prev = 2,
                                e.next = 5,
                                this.checkout.update(r);
                            case 5:
                                this.session.completeShippingMethodSelection(ApplePaySession.STATUS_SUCCESS, yt(this.checkout, this.merchantName), mt(this.checkout)),
                                e.next = 12;
                                break;
                            case 8:
                                e.prev = 8,
                                e.t0 = e.catch(2),
                                console.warn(e.t0.message),
                                this.session.completeShippingMethodSelection(ApplePaySession.STATUS_FAILURE, null, null);
                            case 12:
                            case "end":
                                return e.stop()
                            }
                    }, e, this, [[2, 8]])
                }))
            }
            ,
            this.onpaymentauthorized = function(t) {
                var e = t.payment;
                return wt(n, void 0, void 0, b.default.mark(function t() {
                    var n, r, o, i, a, u, s, c, f, l, d, h;
                    return b.default.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (n = e.token,
                                r = e.billingContact,
                                o = e.shippingContact,
                                i = n.paymentData,
                                a = {
                                    email: r && r.emailAddress || o && o.emailAddress,
                                    billing_address: r && at(r),
                                    shipping_address: o && at(o)
                                },
                                !this.checkout.attributes.requires_shipping || this.checkout.attributes.shipping_line) {
                                    t.next = 5;
                                    break
                                }
                                return t.abrupt("return", this.handleErrors([Z("no_shipping_option")]));
                            case 5:
                                return u = {
                                    unique_token: H(),
                                    amount: this.checkout.attributes.total_price,
                                    payment_token: {
                                        type: "apple_pay",
                                        payment_data: (0,
                                        E.default)(i)
                                    }
                                },
                                t.prev = 6,
                                t.next = 9,
                                this.checkout.update(a);
                            case 9:
                                return this.paymentInProgress = !0,
                                t.next = 12,
                                this.checkout.createPayment(u);
                            case 12:
                                if (s = t.sent,
                                this.paymentInProgress = !1,
                                s.isSuccess) {
                                    t.next = 17;
                                    break
                                }
                                return this.handleErrors([s.payment_processing_error_message || ""]),
                                t.abrupt("return");
                            case 17:
                                return t.next = 19,
                                this.checkout.reload();
                            case 19:
                                if (c = t.sent,
                                f = c.attributes.order) {
                                    t.next = 23;
                                    break
                                }
                                throw new Pt;
                            case 23:
                                this.session.completePayment(ApplePaySession.STATUS_SUCCESS),
                                location.assign(f.status_url),
                                this.resolve({
                                    state: St
                                }),
                                t.next = 52;
                                break;
                            case 28:
                                if (t.prev = 28,
                                t.t0 = t.catch(6),
                                console.warn(t.t0.message),
                                !Et(t.t0)) {
                                    t.next = 51;
                                    break
                                }
                                return t.prev = 32,
                                t.next = 35,
                                t.t0.response.json();
                            case 35:
                                if (l = t.sent,
                                d = l.errors,
                                !(h = d.checkout || d).billing_address) {
                                    t.next = 40;
                                    break
                                }
                                return t.abrupt("return", this.session.completePayment(ApplePaySession.STATUS_INVALID_BILLING_POSTAL_ADDRESS));
                            case 40:
                                if (!h.shipping_address) {
                                    t.next = 42;
                                    break
                                }
                                return t.abrupt("return", this.session.completePayment(ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS));
                            case 42:
                                return t.abrupt("return", this.session.completePayment(ApplePaySession.STATUS_FAILURE));
                            case 45:
                                t.prev = 45,
                                t.t1 = t.catch(32),
                                console.warn(t.t1.message),
                                this.session.completePayment(ApplePaySession.STATUS_FAILURE);
                            case 49:
                                t.next = 52;
                                break;
                            case 51:
                                this.session.completePayment(ApplePaySession.STATUS_FAILURE);
                            case 52:
                            case "end":
                                return t.stop()
                            }
                    }, t, this, [[6, 28], [32, 45]])
                }))
            }
            ,
            this.onpaymentmethodselected = function(t) {
                return n.session.completePaymentMethodSelection(yt(n.checkout, n.merchantName), mt(n.checkout)),
                k.default.resolve()
            }
            ,
            this.promise = new k.default(function(t) {
                n.resolve = t
            }
            ),
            this.checkout = e.checkout,
            this.firstShippingContactSelected = !0,
            this.merchantName = e.merchantName,
            this.paymentInProgress = !1,
            this.shopId = e.shopId,
            this.session = e.session,
            this.session.oncancel = this.oncancel,
            this.session.onpaymentauthorized = this.onpaymentauthorized,
            this.session.onpaymentmethodselected = this.onpaymentmethodselected,
            this.session.onshippingcontactselected = this.onshippingcontactselected,
            this.session.onshippingmethodselected = this.onshippingmethodselected,
            this.session.onvalidatemerchant = this.onvalidatemerchant
        }
        return (0,
        A.default)(t, [{
            key: "begin",
            value: function() {
                return wt(this, void 0, void 0, b.default.mark(function t() {
                    return b.default.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return this.session.begin(),
                                t.abrupt("return", this.promise);
                            case 2:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                }))
            }
        }, {
            key: "handleErrors",
            value: function(t) {
                this.fail(t),
                this.session.abort()
            }
        }]),
        t
    }();
    function Et(t) {
        return t && t.response && 422 === t.response.status
    }
    var Ot = function(t, e, n, r) {
        var o, i = arguments.length, a = i < 3 ? e : null === r ? r = (0,
        l.default)(e, n) : r;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0,
        f.default)(Reflect)) && "function" == typeof Reflect.decorate)
            a = Reflect.decorate(t, e, n, r);
        else
            for (var u = t.length - 1; u >= 0; u--)
                (o = t[u]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
        return i > 3 && a && (0,
        c.default)(e, n, a),
        a
    }
      , Tt = function(t, e) {
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0,
        f.default)(Reflect)) && "function" == typeof s.default)
            return (0,
            s.default)(t, e)
    }
      , jt = function(t, e, n, r) {
        return new (n || (n = k.default))(function(o, i) {
            function a(t) {
                try {
                    s(r.next(t))
                } catch (t) {
                    i(t)
                }
            }
            function u(t) {
                try {
                    s(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }
            function s(t) {
                t.done ? o(t.value) : new n(function(e) {
                    e(t.value)
                }
                ).then(a, u)
            }
            s((r = r.apply(t, e || [])).next())
        }
        )
    }
      , Mt = function(t, e) {
        var n = {};
        for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
        if (null != t && "function" == typeof u.default) {
            var o = 0;
            for (r = (0,
            u.default)(t); o < r.length; o++)
                e.indexOf(r[o]) < 0 && (n[r[o]] = t[r[o]])
        }
        return n
    }
      , Ct = "shopifyApplePayAcceleration"
      , It = function() {
        function t(e, n) {
            (0,
            P.default)(this, t),
            this.id = "ApplePay",
            this.apiVersion = 1;
            var r = e.shopId
              , o = e.merchantName
              , i = Mt(e, ["shopId", "merchantName"]);
            this.shopId = r.toString(),
            this.merchantId = n,
            this.merchantName = o,
            this.applePayPaymentRequest = i
        }
        return (0,
        A.default)(t, [{
            key: "canMakeAcceleratedPurchase",
            value: function() {
                return jt(this, void 0, void 0, b.default.mark(function t() {
                    var e, n;
                    return b.default.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if ("boolean" != typeof (e = N(Ct))) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return", e);
                            case 3:
                                return t.next = 5,
                                ApplePaySession.canMakePaymentsWithActiveCard(this.merchantId);
                            case 5:
                                return n = t.sent,
                                L(Ct, n, 1800),
                                t.abrupt("return", n);
                            case 8:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                }))
            }
        }, {
            key: "begin",
            value: function(t) {
                return jt(this, void 0, void 0, b.default.mark(function e() {
                    var n, r, o;
                    return b.default.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = new ApplePaySession(this.apiVersion,this.applePayPaymentRequest),
                                e.next = 3,
                                t;
                            case 3:
                                return r = e.sent,
                                o = new At({
                                    session: n,
                                    checkout: r,
                                    shopId: this.shopId,
                                    merchantName: this.merchantName
                                }),
                                e.abrupt("return", o.begin());
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }))
            }
        }]),
        t
    }();
    Ot([V("acceleration.check.benchmark", "id", "instrument"), Tt("design:type", Function), Tt("design:paramtypes", []), Tt("design:returntype", k.default)], It.prototype, "canMakeAcceleratedPurchase", null);
    var Rt = function(t, e, n, r) {
        return new (n || (n = k.default))(function(o, i) {
            function a(t) {
                try {
                    s(r.next(t))
                } catch (t) {
                    i(t)
                }
            }
            function u(t) {
                try {
                    s(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }
            function s(t) {
                t.done ? o(t.value) : new n(function(e) {
                    e(t.value)
                }
                ).then(a, u)
            }
            s((r = r.apply(t, e || [])).next())
        }
        )
    }
      , Lt = function(t, e) {
        var n = {};
        for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
        if (null != t && "function" == typeof u.default) {
            var o = 0;
            for (r = (0,
            u.default)(t); o < r.length; o++)
                e.indexOf(r[o]) < 0 && (n[r[o]] = t[r[o]])
        }
        return n
    }
      , Nt = function() {
        function t() {
            (0,
            P.default)(this, t)
        }
        return (0,
        A.default)(t, null, [{
            key: "load",
            value: function(t) {
                var e = t.merchantId
                  , n = Lt(t, ["merchantId"]);
                return Rt(this, void 0, void 0, b.default.mark(function t() {
                    return b.default.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (!ApplePaySession.canMakePayments()) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return", new It(n,e));
                            case 2:
                                return t.abrupt("return", null);
                            case 3:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                }))
            }
        }, {
            key: "isSupported",
            get: function() {
                return "undefined" != typeof ApplePaySession
            }
        }]),
        t
    }()
      , Ft = function(t, e, n, r) {
        return new (n || (n = k.default))(function(o, i) {
            function a(t) {
                try {
                    s(r.next(t))
                } catch (t) {
                    i(t)
                }
            }
            function u(t) {
                try {
                    s(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }
            function s(t) {
                t.done ? o(t.value) : new n(function(e) {
                    e(t.value)
                }
                ).then(a, u)
            }
            s((r = r.apply(t, e || [])).next())
        }
        )
    }
      , Dt = function() {
        function t(e) {
            var n = e.shopId
              , r = e.domain;
            (0,
            P.default)(this, t),
            this.id = "AmazonPay",
            this.shopId = n,
            this.domain = r
        }
        return (0,
        A.default)(t, [{
            key: "canMakeAcceleratedPurchase",
            value: function() {
                return Ft(this, void 0, void 0, b.default.mark(function t() {
                    return b.default.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", !1);
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                }))
            }
        }, {
            key: "begin",
            value: function(t) {
                return Ft(this, void 0, void 0, b.default.mark(function e() {
                    var n, r, o, i;
                    return b.default.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                t;
                            case 2:
                                return n = e.sent,
                                r = n.attributes.token,
                                o = n.secretKey,
                                i = Bt(this.domain, this.shopId, r, o),
                                z.broadcast("amazonpay:redirect-url", {
                                    url: i
                                }),
                                window.location.assign(i),
                                e.abrupt("return", {
                                    state: Q.Success
                                });
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }))
            }
        }], [{
            key: "load",
            value: function(e) {
                var n = e.shopId
                  , r = e.domain;
                return Ft(this, void 0, void 0, b.default.mark(function e() {
                    return b.default.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", new t({
                                    shopId: n,
                                    domain: r
                                }));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }))
            }
        }]),
        t
    }();
    function Bt(t, e, n, r) {
        return "https://" + t + "/" + e + "/checkouts/" + n + "/amazon_payments/forward?key=" + r
    }
    Dt.isSupported = !0;
    var Ut = function(t, e, n, r) {
        var o, i = arguments.length, a = i < 3 ? e : null === r ? r = (0,
        l.default)(e, n) : r;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0,
        f.default)(Reflect)) && "function" == typeof Reflect.decorate)
            a = Reflect.decorate(t, e, n, r);
        else
            for (var u = t.length - 1; u >= 0; u--)
                (o = t[u]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
        return i > 3 && a && (0,
        c.default)(e, n, a),
        a
    }
      , zt = function(t, e) {
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0,
        f.default)(Reflect)) && "function" == typeof s.default)
            return (0,
            s.default)(t, e)
    }
      , Gt = function(t, e, n, r) {
        return new (n || (n = k.default))(function(o, i) {
            function a(t) {
                try {
                    s(r.next(t))
                } catch (t) {
                    i(t)
                }
            }
            function u(t) {
                try {
                    s(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }
            function s(t) {
                t.done ? o(t.value) : new n(function(e) {
                    e(t.value)
                }
                ).then(a, u)
            }
            s((r = r.apply(t, e || [])).next())
        }
        )
    }
      , qt = function() {
        function t(e) {
            var n = e.shopId
              , r = e.domain;
            (0,
            P.default)(this, t),
            this.id = "Checkout",
            this.cta = "Buy Now",
            this.shopId = n,
            this.domain = r
        }
        return (0,
        A.default)(t, [{
            key: "canMakeAcceleratedPurchase",
            value: function() {
                return Gt(this, void 0, void 0, b.default.mark(function t() {
                    return b.default.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (void 0 !== window.ShopifyPay) {
                                    t.next = 4;
                                    break
                                }
                                return t.abrupt("return", !1);
                            case 4:
                                return t.abrupt("return", window.ShopifyPay.canMakeAcceleratedPurchase);
                            case 5:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                }))
            }
        }, {
            key: "begin",
            value: function(t) {
                return Gt(this, void 0, void 0, b.default.mark(function e() {
                    var n, r, o, i;
                    return b.default.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                t;
                            case 2:
                                return n = e.sent,
                                r = n.attributes.token,
                                o = n.secretKey,
                                i = $t(this.domain, this.shopId, r, o),
                                window.location.assign(i),
                                z.broadcast("checkout:redirect-url", {
                                    url: i
                                }),
                                e.abrupt("return", {
                                    state: Q.Success
                                });
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }))
            }
        }], [{
            key: "load",
            value: function(e) {
                var n = e.shopId
                  , r = e.domain;
                return Gt(this, void 0, void 0, b.default.mark(function e() {
                    return b.default.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", new t({
                                    shopId: n,
                                    domain: r
                                }));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }))
            }
        }]),
        t
    }();
    function $t(t, e, n, r) {
        return "//" + t + "/" + e + "/checkouts/" + n + "?key=" + r
    }
    qt.isSupported = !0,
    Ut([V("acceleration.check.benchmark", "id", "instrument"), zt("design:type", Function), zt("design:paramtypes", []), zt("design:returntype", k.default)], qt.prototype, "canMakeAcceleratedPurchase", null);
    var Vt = function() {
        function t(e) {
            (0,
            P.default)(this, t),
            this.iframe = e
        }
        return (0,
        A.default)(t, [{
            key: "mount",
            value: function(t) {
                var e = this;
                return new k.default(function(n) {
                    e.iframe.onload = n,
                    t.appendChild(e.iframe)
                }
                )
            }
        }]),
        t
    }()
      , Wt = function() {
        function t(e, n) {
            (0,
            P.default)(this, t),
            this.iframe = e,
            this.src = n
        }
        return (0,
        A.default)(t, [{
            key: "configure",
            value: function() {
                return this.iframe.setAttribute("src", this.src),
                this.iframe.setAttribute("allowpaymentrequest", ""),
                this.iframe.setAttribute("title", "Container for Google Pay Button"),
                this.iframe.setAttribute("frameborder", "0"),
                this.iframe.setAttribute("border", "0"),
                this.iframe.setAttribute("width", "100%"),
                this.iframe.style.height = "inherit",
                new Vt(this.iframe)
            }
        }]),
        t
    }();
    function Ht(t, e) {
        var n = document.createElement("iframe");
        return new Wt(n,t).configure().mount(e).then(function(t) {
            if (!t.currentTarget)
                throw new Error("There is no currentTarget in the onload event for the iframe.");
            var e = t.currentTarget;
            if (!(e instanceof HTMLIFrameElement))
                throw new TypeError("The currentTarget in the onload event for the iframe is not an iframe.");
            return e
        })
    }
    var Kt = function(t, e, n, r) {
        return new (n || (n = k.default))(function(o, i) {
            function a(t) {
                try {
                    s(r.next(t))
                } catch (t) {
                    i(t)
                }
            }
            function u(t) {
                try {
                    s(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }
            function s(t) {
                t.done ? o(t.value) : new n(function(e) {
                    e(t.value)
                }
                ).then(a, u)
            }
            s((r = r.apply(t, e || [])).next())
        }
        )
    }
      , Yt = function(t) {
        var e = t.name
          , n = t.address1
          , r = t.address2
          , o = t.locality
          , i = t.administrativeArea
          , u = t.countryCode
          , s = t.postalCode
          , c = t.phoneNumber
          , f = e.split(" ")
          , l = (0,
        a.default)(f);
        return {
            first_name: l[0],
            last_name: l.slice(1).join(" "),
            address1: n,
            address2: r,
            city: o,
            province_code: i,
            country_code: u,
            zip: s,
            phone: c
        }
    }
      , Jt = function(t) {
        switch (t) {
        case "AMEX":
            return "american_express";
        case "MASTERCARD":
            return "master";
        default:
            return t.toLowerCase()
        }
    }
      , Xt = function(t, e) {
        return Kt(void 0, void 0, void 0, b.default.mark(function n() {
            var r, o, i, a, u, s, c, f;
            return b.default.wrap(function(n) {
                for (; ; )
                    switch (n.prev = n.next) {
                    case 0:
                        return r = e.value,
                        o = r.cardInfo,
                        i = r.shippingAddress,
                        a = o.billingAddress,
                        u = o.cardDetails,
                        s = o.cardNetwork,
                        c = Yt(a),
                        f = {
                            checkout: {
                                billing_address: c,
                                shipping_address: Yt(i),
                                email: r.email,
                                phone: c.phone,
                                credit_card: {
                                    last_digits: u,
                                    brand: Jt(s),
                                    first_name: c.first_name,
                                    last_name: c.last_name
                                },
                                gateway_params: {
                                    payment_token: {
                                        type: "google_pay",
                                        payment_data: r.paymentMethodToken.token
                                    }
                                }
                            }
                        },
                        n.next = 7,
                        t.update(f);
                    case 7:
                    case "end":
                        return n.stop()
                    }
            }, n, this)
        }))
    }
      , Zt = function() {
        function t(e, n, r) {
            var o = this;
            (0,
            P.default)(this, t),
            this.id = "GooglePay",
            this.handleMessage = function(t) {
                return Kt(o, void 0, void 0, b.default.mark(function e() {
                    return b.default.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                e.t0 = t.key,
                                e.next = "paymentSuccess" === e.t0 ? 3 : 9;
                                break;
                            case 3:
                                if (this.checkout) {
                                    e.next = 5;
                                    break
                                }
                                throw new TypeError("this.checkout was undefined.");
                            case 5:
                                return e.next = 7,
                                Xt(this.checkout, t);
                            case 7:
                                return window.top.location.assign(this.checkout.attributes.web_url),
                                e.abrupt("break", 10);
                            case 9:
                                throw new TypeError("Message key has no default handler.");
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }))
            }
            ,
            this.postMessageClient = e,
            this.oldIFrameElement = n,
            this.googlePayConfig = r
        }
        return (0,
        A.default)(t, [{
            key: "canMakeAcceleratedPurchase",
            value: function() {
                return Kt(this, void 0, void 0, b.default.mark(function t() {
                    return b.default.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                this.postMessageClient.send("canMakeAcceleratedPurchase", this.googlePayConfig);
                            case 2:
                                return t.abrupt("return", t.sent);
                            case 3:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                }))
            }
        }, {
            key: "render",
            value: function(t, e) {
                return Kt(this, void 0, void 0, b.default.mark(function n() {
                    var r, o, i, a;
                    return b.default.wrap(function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                e.build(this.id);
                            case 2:
                                return this.checkout = n.sent,
                                this.postMessageClient.setReceiver(this.handleMessage),
                                r = this.googlePayConfig.iframeSrc,
                                n.next = 7,
                                Ht(r, t);
                            case 7:
                                return o = n.sent,
                                this.oldIFrameElement.remove(),
                                this.postMessageClient.target = o.contentWindow,
                                i = {
                                    currency: this.googlePayConfig.currency,
                                    price: this.checkout.attributes.total_price
                                },
                                a = {
                                    estimate: i,
                                    googlePayConfig: this.googlePayConfig
                                },
                                n.next = 14,
                                this.postMessageClient.send("render", a);
                            case 14:
                            case "end":
                                return n.stop()
                            }
                    }, n, this)
                }))
            }
        }]),
        t
    }()
      , Qt = function() {
        function t(e) {
            var n = e.target
              , r = e.targetOrigin;
            (0,
            P.default)(this, t),
            this.receiver = function(t) {}
            ,
            window.addEventListener("message", this.receive.bind(this)),
            this.target = n,
            this.targetOrigin = r,
            this.mailbox = new i.default
        }
        return (0,
        A.default)(t, [{
            key: "setReceiver",
            value: function(t) {
                this.receiver = t
            }
        }, {
            key: "send",
            value: function(t, e) {
                var n = this
                  , r = {
                    ref: J(),
                    key: t,
                    value: e
                };
                return this.sendMessage(r),
                new k.default(function(t) {
                    n.mailbox.set(r.ref, t)
                }
                )
            }
        }, {
            key: "respond",
            value: function(t, e) {
                var n = {
                    ref: t,
                    value: e
                };
                this.sendMessage(n)
            }
        }, {
            key: "receive",
            value: function(t) {
                if (this.targetOrigin === t.origin) {
                    var e = JSON.parse(t.data)
                      , n = this.mailbox.get(e.ref);
                    if (n)
                        return this.mailbox.delete(e.ref),
                        void n(e.value);
                    this.receiver(e)
                }
            }
        }, {
            key: "sendMessage",
            value: function(t) {
                var e = (0,
                E.default)(t);
                this.target && this.target.postMessage(e, this.targetOrigin)
            }
        }]),
        t
    }()
      , te = function(t, e, n, r) {
        return new (n || (n = k.default))(function(o, i) {
            function a(t) {
                try {
                    s(r.next(t))
                } catch (t) {
                    i(t)
                }
            }
            function u(t) {
                try {
                    s(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }
            function s(t) {
                t.done ? o(t.value) : new n(function(e) {
                    e(t.value)
                }
                ).then(a, u)
            }
            s((r = r.apply(t, e || [])).next())
        }
        )
    }
      , ee = function() {
        function t() {
            (0,
            P.default)(this, t)
        }
        return (0,
        A.default)(t, null, [{
            key: "load",
            value: function(t) {
                return te(this, void 0, void 0, b.default.mark(function e() {
                    var n, r, o;
                    return b.default.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = t.iframeSrc,
                                e.next = 3,
                                Ht(n, document.body);
                            case 3:
                                return r = e.sent,
                                o = new Qt({
                                    target: r.contentWindow,
                                    targetOrigin: new URL(n).origin
                                }),
                                e.next = 7,
                                o.send("load", t);
                            case 7:
                                return e.abrupt("return", new Zt(o,r,t));
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }))
            }
        }]),
        t
    }();
    ee.isSupported = !0;
    var ne, re = function(t, e, n, r) {
        return new (n || (n = k.default))(function(o, i) {
            function a(t) {
                try {
                    s(r.next(t))
                } catch (t) {
                    i(t)
                }
            }
            function u(t) {
                try {
                    s(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }
            function s(t) {
                t.done ? o(t.value) : new n(function(e) {
                    e(t.value)
                }
                ).then(a, u)
            }
            s((r = r.apply(t, e || [])).next())
        }
        )
    }, oe = function() {
        function t(e, n, r) {
            (0,
            P.default)(this, t),
            this.googlePayClient = e,
            this.isReadyToPayRequest = n,
            this.paymentDataRequest = r
        }
        return (0,
        A.default)(t, [{
            key: "canMakeAcceleratedPurchase",
            value: function() {
                return re(this, void 0, void 0, b.default.mark(function t() {
                    return b.default.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                this.googlePayClient.isReadyToPay(this.isReadyToPayRequest);
                            case 2:
                                if (!t.sent.result) {
                                    t.next = 8;
                                    break
                                }
                                return this.googlePayClient.prefetchPaymentData(this.paymentDataRequest),
                                t.abrupt("return", !0);
                            case 8:
                                return t.abrupt("return", !1);
                            case 9:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                }))
            }
        }, {
            key: "render",
            value: function(t, e, n) {
                return re(this, void 0, void 0, b.default.mark(function r() {
                    var o, i = this;
                    return b.default.wrap(function(r) {
                        for (; ; )
                            switch (r.prev = r.next) {
                            case 0:
                                (o = document.createElement("button")).className = "googlepay",
                                o.addEventListener("click", function(t) {
                                    return re(i, void 0, void 0, b.default.mark(function r() {
                                        return b.default.wrap(function(r) {
                                            for (; ; )
                                                switch (r.prev = r.next) {
                                                case 0:
                                                    return t.preventDefault(),
                                                    o.disabled = !0,
                                                    r.prev = 2,
                                                    r.next = 5,
                                                    this.pay.call(this, e, n);
                                                case 5:
                                                    r.next = 10;
                                                    break;
                                                case 7:
                                                    r.prev = 7,
                                                    r.t0 = r.catch(2),
                                                    o.disabled = !1;
                                                case 10:
                                                case "end":
                                                    return r.stop()
                                                }
                                        }, r, this, [[2, 7]])
                                    }))
                                }),
                                t.appendChild(o);
                            case 4:
                            case "end":
                                return r.stop()
                            }
                    }, r, this)
                }))
            }
        }, {
            key: "pay",
            value: function(t, e) {
                return re(this, void 0, void 0, b.default.mark(function n() {
                    var r;
                    return b.default.wrap(function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return this.paymentDataRequest.transactionInfo = {
                                    totalPriceStatus: "ESTIMATED",
                                    currencyCode: t.currency,
                                    totalPrice: t.price
                                },
                                n.next = 3,
                                this.googlePayClient.loadPaymentData(this.paymentDataRequest);
                            case 3:
                                r = n.sent,
                                e.send("paymentSuccess", r);
                            case 5:
                            case "end":
                                return n.stop()
                            }
                    }, n, this)
                }))
            }
        }]),
        t
    }(), ie = function(t, e, n, r) {
        return new (n || (n = k.default))(function(o, i) {
            function a(t) {
                try {
                    s(r.next(t))
                } catch (t) {
                    i(t)
                }
            }
            function u(t) {
                try {
                    s(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }
            function s(t) {
                t.done ? o(t.value) : new n(function(e) {
                    e(t.value)
                }
                ).then(a, u)
            }
            s((r = r.apply(t, e || [])).next())
        }
        )
    }, ae = function(t, e) {
        var n = {};
        for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
        if (null != t && "function" == typeof u.default) {
            var o = 0;
            for (r = (0,
            u.default)(t); o < r.length; o++)
                e.indexOf(r[o]) < 0 && (n[r[o]] = t[r[o]])
        }
        return n
    }, ue = function(t) {
        if (!window.google)
            throw new Error("Google Pay SDK not loaded.");
        var e = t.currency
          , n = t.capabilities
          , r = n.environment
          , o = (n.merchantInfo,
        n.billingAddressRequired,
        ae(n, ["environment", "merchantInfo", "billingAddressRequired"]))
          , i = new window.google.payments.api.PaymentsClient({
            environment: r
        })
          , a = {
            allowedPaymentMethods: n.allowedPaymentMethods
        }
          , u = {
            totalPriceStatus: "NOT_CURRENTLY_KNOWN",
            currencyCode: e
        }
          , s = (0,
        g.default)({
            transactionInfo: u
        }, o);
        return new oe(i,a,s)
    }, se = function() {
        function t(e) {
            (0,
            P.default)(this, t),
            this.postMessageClient = e
        }
        return (0,
        A.default)(t, [{
            key: "attachDefaultHandler",
            value: function() {
                this.postMessageClient.setReceiver(this.handleMessage.bind(this))
            }
        }, {
            key: "handleMessage",
            value: function(t) {
                return ie(this, void 0, void 0, b.default.mark(function e() {
                    var n;
                    return b.default.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                e.t0 = t.key,
                                e.next = "load" === e.t0 ? 3 : "canMakeAcceleratedPurchase" === e.t0 ? 5 : "render" === e.t0 ? 10 : 13;
                                break;
                            case 3:
                                return this.postMessageClient.respond(t.ref),
                                e.abrupt("break", 14);
                            case 5:
                                return e.next = 7,
                                ue(t.value).canMakeAcceleratedPurchase();
                            case 7:
                                return n = e.sent,
                                this.postMessageClient.respond(t.ref, n),
                                e.abrupt("break", 14);
                            case 10:
                                return ue(t.value.googlePayConfig).render(document.body, t.value.estimate, this.postMessageClient),
                                this.postMessageClient.respond(t.ref),
                                e.abrupt("break", 14);
                            case 13:
                                throw new TypeError("Message key has no default handler.");
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }))
            }
        }]),
        t
    }();
    !function(t) {
        t[t.error = 1] = "error",
        t[t.warn = 2] = "warn",
        t[t.log = 3] = "log",
        t[t.info = 4] = "info",
        t[t.debug = 5] = "debug"
    }(ne || (ne = {}));
    (0,
    o.default)(ne).map(function(t) {
        return ne[t]
    }).filter(function(t) {
        return "string" == typeof t
    });
    var ce = console
      , fe = function() {
        function t() {
            (0,
            P.default)(this, t)
        }
        return (0,
        A.default)(t, null, [{
            key: "inject",
            value: function(t, e) {
                var n = e.constant
                  , r = e.event;
                return n && le(n) ? k.default.resolve(window[n]) : de(this.find(t) || this.insert(t), {
                    constant: n,
                    event: r
                })
            }
        }, {
            key: "insert",
            value: function(t) {
                var e = document.createElement("script");
                return e.src = t,
                document.head.appendChild(e)
            }
        }, {
            key: "find",
            value: function(t) {
                return document.querySelector('script[src="' + t + '"]')
            }
        }]),
        t
    }();
    function le(t) {
        return window[t]
    }
    function de(t, e) {
        var n = e.constant
          , r = e.event;
        return new k.default(function(e, o) {
            function i() {
                n ? e(window[n]) : e()
            }
            r ? he(window, r, i) : (t.addEventListener("load", i),
            t.addEventListener("error", o))
        }
        )
    }
    function he(t, e, n) {
        var r = t[e];
        t[e] = function() {
            for (var e = arguments.length, o = Array(e), i = 0; i < e; i++)
                o[i] = arguments[i];
            r && r.call(t, o),
            n.call(t, o)
        }
    }
    var pe = "shopifyPaypalAcceleration"
      , ve = void 0
      , ye = "https://www.paypal.com/checkoutnow/remembered?callback=shopifyPaypalAccelerationCheck";
    function me() {
        return new k.default(function(t) {
            var e = N(pe);
            "boolean" == typeof e ? (ge("Using Paypal acceleration value from cache"),
            t(e)) : new k.default(function(t) {
                ve = t,
                fe.insert(ye)
            }
            ).then(function(e) {
                t(e)
            })
        }
        )
    }
    function ge(t) {
        ce.info("Paypal#acceleration - " + t)
    }
    window.shopifyPaypalAccelerationCheck = function(t) {
        var e = t.paypal;
        L(pe, e, 1800),
        e && ge("User is remembered"),
        ve(e)
    }
    ;
    var be = function(t, e, n, r) {
        return new (n || (n = k.default))(function(o, i) {
            function a(t) {
                try {
                    s(r.next(t))
                } catch (t) {
                    i(t)
                }
            }
            function u(t) {
                try {
                    s(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }
            function s(t) {
                t.done ? o(t.value) : new n(function(e) {
                    e(t.value)
                }
                ).then(a, u)
            }
            s((r = r.apply(t, e || [])).next())
        }
        )
    }
      , we = function() {
        function t(e, n) {
            (0,
            P.default)(this, t),
            this.id = "PayPalV4",
            this.config = n,
            this.paypal = e
        }
        return (0,
        A.default)(t, [{
            key: "canMakeAcceleratedPurchase",
            value: function() {
                return me()
            }
        }, {
            key: "paymentWrapper",
            value: function(t) {
                var e = this;
                return function() {
                    return be(e, void 0, void 0, b.default.mark(function e() {
                        var n, r, o, i;
                        return b.default.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    t.build(this.id);
                                case 2:
                                    return n = e.sent,
                                    r = new lt,
                                    e.next = 6,
                                    r.post("/" + this.config.shopId + "/checkouts/" + n.token + "/paypal/tokens", {
                                        key: n.secretKey
                                    });
                                case 6:
                                    return o = e.sent,
                                    e.next = 9,
                                    o.json();
                                case 9:
                                    return i = e.sent,
                                    this.redirectUrl = i.redirect_url,
                                    this.paypalToken = i.token,
                                    e.abrupt("return", this.paypalToken || "");
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }))
                }
            }
        }, {
            key: "authorized",
            value: function(t) {
                var e = t.payerID;
                window.top.location.assign(this.redirectUrl + "&PayerID=" + e)
            }
        }, {
            key: "remembered",
            value: function() {}
        }, {
            key: "render",
            value: function(t, e) {
                return be(this, void 0, void 0, b.default.mark(function n() {
                    var r;
                    return b.default.wrap(function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                r = {
                                    label: "paypal",
                                    size: "responsive",
                                    shape: "rect",
                                    tagline: !1,
                                    maxbuttons: 1,
                                    height: 50
                                },
                                this.paypal.Button.render({
                                    env: this.config.environment,
                                    style: r,
                                    commit: !0,
                                    payment: this.paymentWrapper(e),
                                    onAuthorize: this.authorized.bind(this),
                                    onRemembered: this.remembered
                                }, t);
                            case 2:
                            case "end":
                                return n.stop()
                            }
                    }, n, this)
                }))
            }
        }]),
        t
    }()
      , _e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      , xe = function(t) {
        function e() {
            return (0,
            P.default)(this, e),
            (0,
            h.default)(this, (e.__proto__ || (0,
            d.default)(e)).apply(this, arguments))
        }
        return (0,
        p.default)(e, t),
        e
    }(Error);
    function ke(t) {
        for (var e, n = String(t), r = 0, o = 0, i = _e, a = ""; n.charAt(0 | o) || (i = "=",
        o % 1); a += i.charAt(63 & r >> 8 - o % 1 * 8)) {
            if ((e = n.charCodeAt(o += .75)) > 255)
                throw new xe("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
            r = r << 8 | e
        }
        return a
    }
    var Se = "shopify-checkout"
      , Pe = {
        getApiToken: function() {
            return Ae("api-token")
        },
        getAuthorizationToken: function() {
            return Ae("authorization-token")
        }
    };
    function Ae(t) {
        var e = document.querySelector('meta[name="' + Se + "-" + t + '"]');
        return e && e.getAttribute("content") || ""
    }
    var Ee = function(t, e, n, r) {
        return new (n || (n = k.default))(function(o, i) {
            function a(t) {
                try {
                    s(r.next(t))
                } catch (t) {
                    i(t)
                }
            }
            function u(t) {
                try {
                    s(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }
            function s(t) {
                t.done ? o(t.value) : new n(function(e) {
                    e(t.value)
                }
                ).then(a, u)
            }
            s((r = r.apply(t, e || [])).next())
        }
        )
    }
      , Oe = "X-Shopify-Checkout-Authorization-Token"
      , Te = function(t) {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0,
            P.default)(this, e);
            var n = t.accessToken;
            n || (n = Pe.getApiToken());
            var r = {
                Authorization: "Basic " + Me(n),
                "X-Shopify-Checkout-Version": "2018-03-05",
                "X-Shopify-VisitToken": je("_shopify_s"),
                "X-Shopify-UniqueToken": je("_shopify_y")
            }
              , o = (0,
            h.default)(this, (e.__proto__ || (0,
            d.default)(e)).call(this, t.host, r));
            return o.secretKey = "",
            o.storeAuthorizationToken(Pe.getAuthorizationToken()),
            o
        }
        return (0,
        p.default)(e, t),
        (0,
        A.default)(e, [{
            key: "request",
            value: function(t, n, o, i) {
                var a = this
                  , u = function(t) {
                    return (0,
                    r.default)(e.prototype.__proto__ || (0,
                    d.default)(e.prototype), t, a)
                };
                return Ee(this, void 0, void 0, b.default.mark(function e() {
                    var r;
                    return b.default.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                u("request").call(this, t, n, o, i);
                            case 2:
                                return r = e.sent,
                                this.extractAuthorizationToken(r),
                                e.abrupt("return", r);
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }))
            }
        }, {
            key: "storeAuthorizationToken",
            value: function(t) {
                t && (this.secretKey = t,
                this.headers[Oe] = t)
            }
        }, {
            key: "getCheckout",
            value: function(t) {
                return Ee(this, void 0, void 0, b.default.mark(function e() {
                    var n, r, o;
                    return b.default.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                this.get("/wallets/checkouts/" + t + ".json");
                            case 2:
                                return n = e.sent,
                                e.next = 5,
                                n.json();
                            case 5:
                                return r = e.sent,
                                o = r.checkout,
                                e.abrupt("return", o);
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }))
            }
        }, {
            key: "createCheckout",
            value: function(t) {
                return Ee(this, void 0, void 0, b.default.mark(function e() {
                    var n, r, o;
                    return b.default.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t.checkout && null == t.checkout.secret && (t.checkout.secret = !0),
                                e.next = 3,
                                this.post("/wallets/checkouts.json", t);
                            case 3:
                                return n = e.sent,
                                e.next = 6,
                                n.json();
                            case 6:
                                return r = e.sent,
                                o = r.checkout,
                                e.abrupt("return", o);
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }))
            }
        }, {
            key: "updateCheckout",
            value: function(t, e) {
                return Ee(this, void 0, void 0, b.default.mark(function n() {
                    var r, o, i;
                    return b.default.wrap(function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                this.patch("/wallets/checkouts/" + t + ".json", {
                                    checkout: e
                                });
                            case 2:
                                return r = n.sent,
                                n.next = 5,
                                r.json();
                            case 5:
                                return o = n.sent,
                                i = o.checkout,
                                n.abrupt("return", i);
                            case 8:
                            case "end":
                                return n.stop()
                            }
                    }, n, this)
                }))
            }
        }, {
            key: "addReductionCode",
            value: function(t, e) {
                return Ee(this, void 0, void 0, b.default.mark(function n() {
                    var r, o, i;
                    return b.default.wrap(function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                this.patch("/wallets/checkouts/" + t + ".json", {
                                    checkout: {
                                        reduction_code: e
                                    }
                                });
                            case 2:
                                return r = n.sent,
                                n.next = 5,
                                r.json();
                            case 5:
                                return o = n.sent,
                                i = o.checkout,
                                n.abrupt("return", i);
                            case 8:
                            case "end":
                                return n.stop()
                            }
                    }, n, this)
                }))
            }
        }, {
            key: "getShippingRates",
            value: function(t) {
                return Ee(this, void 0, void 0, b.default.mark(function e() {
                    var n, r, o;
                    return b.default.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                this.get("/wallets/checkouts/" + t + "/shipping_rates.json");
                            case 2:
                                return n = e.sent,
                                e.next = 5,
                                n.json();
                            case 5:
                                return r = e.sent,
                                o = r.shipping_rates,
                                e.abrupt("return", o);
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }))
            }
        }, {
            key: "createPayment",
            value: function(t, e, n) {
                return Ee(this, void 0, void 0, b.default.mark(function r() {
                    var o, i;
                    return b.default.wrap(function(r) {
                        for (; ; )
                            switch (r.prev = r.next) {
                            case 0:
                                return r.next = 2,
                                this.post("/wallets/checkouts/" + t + "/payments.json", {
                                    payment: e
                                }, n);
                            case 2:
                                return o = r.sent,
                                r.next = 5,
                                o.json();
                            case 5:
                                return i = r.sent,
                                r.abrupt("return", i.payment);
                            case 7:
                            case "end":
                                return r.stop()
                            }
                    }, r, this)
                }))
            }
        }, {
            key: "createPaymentSession",
            value: function(t, e) {
                return Ee(this, void 0, void 0, b.default.mark(function n() {
                    var r, o;
                    return b.default.wrap(function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                fetch(t, {
                                    headers: {
                                        Accept: "application/json",
                                        "Content-Type": "application/json"
                                    },
                                    body: (0,
                                    E.default)(e),
                                    mode: "cors",
                                    method: "POST"
                                });
                            case 2:
                                return r = n.sent,
                                n.next = 5,
                                r.json();
                            case 5:
                                return o = n.sent,
                                n.abrupt("return", o);
                            case 7:
                            case "end":
                                return n.stop()
                            }
                    }, n, this)
                }))
            }
        }, {
            key: "extractAuthorizationToken",
            value: function(t) {
                var e = t.headers.get(Oe);
                t.ok && this.storeAuthorizationToken(e)
            }
        }]),
        e
    }(lt);
    function je(t) {
        var e = document.cookie.split("; ")
          , n = !0
          , r = !1
          , o = void 0;
        try {
            for (var i, a = (0,
            _.default)(e); !(n = (i = a.next()).done); n = !0) {
                var u = i.value.split("=")
                  , s = (0,
                x.default)(u, 2)
                  , c = s[0]
                  , f = s[1];
                if (c === t)
                    return f
            }
        } catch (t) {
            r = !0,
            o = t
        } finally {
            try {
                !n && a.return && a.return()
            } finally {
                if (r)
                    throw o
            }
        }
    }
    function Me(t) {
        return ke(t + ":")
    }
    var Ce = function(t, e, n, r) {
        return new (n || (n = k.default))(function(o, i) {
            function a(t) {
                try {
                    s(r.next(t))
                } catch (t) {
                    i(t)
                }
            }
            function u(t) {
                try {
                    s(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }
            function s(t) {
                t.done ? o(t.value) : new n(function(e) {
                    e(t.value)
                }
                ).then(a, u)
            }
            s((r = r.apply(t, e || [])).next())
        }
        )
    }
      , Ie = function() {
        function t(e, n) {
            (0,
            P.default)(this, t),
            this.attributes = e,
            this.apiClient = n,
            this.token = e.token,
            this.secretKey = n.secretKey,
            this.shippingRates = []
        }
        return (0,
        A.default)(t, [{
            key: "addReductionCode",
            value: function(t) {
                return this.update({
                    reduction_code: t
                })
            }
        }, {
            key: "removeDiscount",
            value: function() {
                return this.update({
                    discount_code: null
                })
            }
        }, {
            key: "removeGiftCard",
            value: function(t) {
                return this.update({
                    applied_gift_cards: {
                        0: {
                            id: t,
                            _delete: !0
                        }
                    }
                })
            }
        }, {
            key: "refreshShippingRates",
            value: function() {
                return Ce(this, void 0, void 0, b.default.mark(function t() {
                    var e, n;
                    return b.default.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (!this.attributes.requires_shipping) {
                                    t.next = 11;
                                    break
                                }
                                return t.next = 3,
                                this.apiClient.getShippingRates(this.token);
                            case 3:
                                if (e = t.sent,
                                this.shippingRates = e.sort(Re),
                                !this.shippingRates.length || this.attributes.shipping_line) {
                                    t.next = 9;
                                    break
                                }
                                return n = this.shippingRates[0],
                                t.next = 9,
                                this.selectShippingRate(n.id);
                            case 9:
                                t.next = 12;
                                break;
                            case 11:
                                this.shippingRates = [];
                            case 12:
                                return t.abrupt("return", this.shippingRates);
                            case 13:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                }))
            }
        }, {
            key: "selectShippingRate",
            value: function(t) {
                return Ce(this, void 0, void 0, b.default.mark(function e() {
                    return b.default.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", this.update({
                                    shipping_line: {
                                        handle: t
                                    }
                                }));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }))
            }
        }, {
            key: "createPayment",
            value: function(t) {
                return Ce(this, void 0, void 0, b.default.mark(function e() {
                    var n, r;
                    return b.default.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                this.apiClient.createPayment(this.token, t);
                            case 2:
                                return n = e.sent,
                                r = n.transaction,
                                !n.payment_processing_error_message && r && "success" !== r.status && "pending" !== r.status && (n.payment_processing_error_message = r.message || "Payment Transaction " + r.status),
                                n.isSuccess = !n.payment_processing_error_message,
                                e.abrupt("return", n);
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }))
            }
        }, {
            key: "createPaymentSession",
            value: function(t) {
                return Ce(this, void 0, void 0, b.default.mark(function e() {
                    var n;
                    return b.default.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = this.attributes.payment_url,
                                e.abrupt("return", this.apiClient.createPaymentSession(n, t));
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }))
            }
        }, {
            key: "reload",
            value: function() {
                return Ce(this, void 0, void 0, b.default.mark(function t() {
                    return b.default.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                this.apiClient.getCheckout(this.token);
                            case 2:
                                return this.attributes = t.sent,
                                t.abrupt("return", this);
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }, t, this)
                }))
            }
        }, {
            key: "stopPolling",
            value: function() {
                this.apiClient.stopPolling()
            }
        }, {
            key: "update",
            value: function(t) {
                return Ce(this, void 0, void 0, b.default.mark(function e() {
                    return b.default.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                this.apiClient.updateCheckout(this.token, t);
                            case 2:
                                return this.attributes = e.sent,
                                e.abrupt("return", this);
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }))
            }
        }]),
        t
    }();
    function Re(t, e) {
        var n = parseFloat(t.price)
          , r = parseFloat(e.price);
        return n < r ? -1 : n > r ? 1 : 0
    }
    var Le = function(t, e, n, r) {
        return new (n || (n = k.default))(function(o, i) {
            function a(t) {
                try {
                    s(r.next(t))
                } catch (t) {
                    i(t)
                }
            }
            function u(t) {
                try {
                    s(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }
            function s(t) {
                t.done ? o(t.value) : new n(function(e) {
                    e(t.value)
                }
                ).then(a, u)
            }
            s((r = r.apply(t, e || [])).next())
        }
        )
    }
      , Ne = function() {
        function t(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            (0,
            P.default)(this, t),
            this.dataSource = e,
            this.checkout = null,
            this.discountCode = r.discountCode || null,
            this.apiClient = new Te({
                accessToken: n
            })
        }
        return (0,
        A.default)(t, [{
            key: "hasCheckout",
            value: function() {
                return null !== this.checkout
            }
        }, {
            key: "checkoutAttributes",
            value: function() {
                return null === this.checkout ? null : this.checkout.attributes
            }
        }, {
            key: "build",
            value: function(t) {
                return Le(this, void 0, void 0, b.default.mark(function e() {
                    var n, r, o;
                    return b.default.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                this.dataSource.fetch();
                            case 2:
                                if (n = e.sent,
                                r = (0,
                                g.default)({}, n, {
                                    secret: !0,
                                    wallet_name: t
                                }),
                                null !== this.checkout) {
                                    e.next = 10;
                                    break
                                }
                                return e.next = 7,
                                this.createCheckout(r);
                            case 7:
                                this.checkout = e.sent,
                                e.next = 15;
                                break;
                            case 10:
                                if (!this.lineItemsChanged(r.line_items)) {
                                    e.next = 15;
                                    break
                                }
                                return e.next = 13,
                                this.apiClient.updateCheckout(this.checkout.token, r);
                            case 13:
                                o = e.sent,
                                this.checkout = new Ie(o,this.apiClient);
                            case 15:
                                return e.abrupt("return", this.checkout);
                            case 16:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }))
            }
        }, {
            key: "createCheckout",
            value: function(t) {
                return Le(this, void 0, void 0, b.default.mark(function e() {
                    var n;
                    return b.default.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                this.apiClient.createCheckout({
                                    checkout: t
                                });
                            case 2:
                                if (n = e.sent,
                                !this.discountCode) {
                                    e.next = 17;
                                    break
                                }
                                return e.prev = 4,
                                e.next = 7,
                                this.apiClient.addReductionCode(n.token, this.discountCode);
                            case 7:
                                n = e.sent,
                                e.next = 17;
                                break;
                            case 10:
                                return e.prev = 10,
                                e.t0 = e.catch(4),
                                e.next = 14,
                                Fe(e.t0);
                            case 14:
                                if (e.sent) {
                                    e.next = 17;
                                    break
                                }
                                throw e.t0;
                            case 17:
                                return e.abrupt("return", new Ie(n,this.apiClient));
                            case 18:
                            case "end":
                                return e.stop()
                            }
                    }, e, this, [[4, 10]])
                }))
            }
        }, {
            key: "lineItemsChanged",
            value: function(t) {
                if (null === this.checkout)
                    return !1;
                var e = this.checkout.attributes.line_items;
                return t.length !== e.length || t.every(function(t, n) {
                    return t.quantity !== e[n].quantity || t.variant_id !== e[n].variant_id
                })
            }
        }]),
        t
    }();
    function Fe(t) {
        return Le(this, void 0, void 0, b.default.mark(function e() {
            var n;
            return b.default.wrap(function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (n = !1,
                        !(t instanceof st && t.response && 422 === t.response.status)) {
                            e.next = 6;
                            break
                        }
                        return e.next = 4,
                        t.response.json();
                    case 4:
                        e.sent.errors.reduction_code && (n = !0);
                    case 6:
                        return e.abrupt("return", n);
                    case 7:
                    case "end":
                        return e.stop()
                    }
            }, e, this)
        }))
    }
    e.ApiClient = lt,
    e.CheckoutApiClient = Te,
    e.CheckoutApiWrapper = Ie,
    e.checkout = M,
    e.paypal = C,
    e.ApplePay = Nt,
    e.ShopifyApplePaySession = At,
    e.AmazonPay = Dt,
    e.Checkout = qt,
    e.EventEmitter = U,
    e.eventEmitter = z,
    e.GooglePay = ee,
    e.PostMessageClient = Qt,
    e.IFrameClient = se,
    e.PayPalV4 = we,
    e.CheckoutManager = Ne
}
, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = o(n(82));
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = function(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++)
                n[e] = t[e];
            return n
        }
        return (0,
        r.default)(t)
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(n(40))
      , o = i(n(101));
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var a = 200
      , u = void 0
      , s = []
      , c = {
        track: function(t) {
            for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
                n[r - 1] = arguments[r];
            h() ? f(t, n) : l(t, n)
        }
    };
    function f(t, e) {
        var n;
        (n = window.ShopifyAnalytics.lib).track.apply(n, [t].concat((0,
        o.default)(e)))
    }
    function l(t, e) {
        s.push([t, e]),
        u || (u = window.setInterval(d, a))
    }
    function d() {
        if (h()) {
            var t = !0
              , e = !1
              , n = void 0;
            try {
                for (var o, i = (0,
                r.default)(s); !(t = (o = i.next()).done); t = !0) {
                    var a = o.value;
                    f(a[0], a[1])
                }
            } catch (t) {
                e = !0,
                n = t
            } finally {
                try {
                    !t && i.return && i.return()
                } finally {
                    if (e)
                        throw n
                }
            }
            u && (window.clearInterval(u),
            u = null)
        }
    }
    function h() {
        return void 0 !== window.ShopifyAnalytics && window.ShopifyAnalytics.lib
    }
    e.default = c
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(n(19));
    e.startBenchmark = a,
    e.endBenchmark = u,
    e.benchmark = s,
    e.benchmarkMetric = c;
    var o = n(62);
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function a(t) {
        f() && window.performance.mark(t + "-start")
    }
    function u(t) {
        return f() ? (window.performance.mark(t + "-end"),
        window.performance.measure(t, t + "-start", t + "-end"),
        window.performance.getEntriesByName(t)[0].duration) : 0
    }
    function s(t) {
        return function(e, n, o) {
            if (f()) {
                var i = o.value;
                o.value = function() {
                    a(t);
                    for (var e = arguments.length, n = Array(e), o = 0; o < e; o++)
                        n[o] = arguments[o];
                    var s = i.apply(this, n);
                    return s instanceof r.default ? s.then(function(e) {
                        return u(t),
                        e
                    }) : (u(t),
                    s)
                }
            }
        }
    }
    function c(t, e, n) {
        return function(i, s, c) {
            if (f()) {
                var l = c.value;
                c.value = function() {
                    var i = this[e]
                      , s = t + ":" + i;
                    a(s);
                    for (var c = arguments.length, f = Array(c), d = 0; d < c; d++)
                        f[d] = arguments[d];
                    var h = l.apply(this, f)
                      , p = {};
                    return p[n] = i,
                    h instanceof r.default ? h.then(function(e) {
                        return (0,
                        o.histogram)(t, u(s), p),
                        e
                    }) : ((0,
                    o.histogram)(t, u(s), p),
                    h)
                }
            }
        }
    }
    function f() {
        return window.performance && window.performance.mark && window.performance.measure
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.init = void 0;
    var r, o, i = l(n(60)), a = l(n(59)), u = l(n(99)), s = (e.init = (r = (0,
    u.default)(i.default.mark(function t() {
        return i.default.wrap(function(t) {
            for (; ; )
                switch (t.prev = t.next) {
                case 0:
                    return t.t0 = a.default,
                    t.t1 = d,
                    t.next = 4,
                    s();
                case 4:
                    return t.t2 = t.sent,
                    (0,
                    t.t0)(t.t1, t.t2),
                    t.abrupt("return", d);
                case 7:
                case "end":
                    return t.stop()
                }
        }, t, this)
    })),
    function() {
        return r.apply(this, arguments)
    }
    ),
    o = (0,
    u.default)(i.default.mark(function t() {
        var e, n, r, o;
        return i.default.wrap(function(t) {
            for (; ; )
                switch (t.prev = t.next) {
                case 0:
                    return f.logger.info("Fetching configuration..."),
                    e = new c.ApiClient(null,{
                        "x-shopify-api-version": "2018-02-15"
                    }),
                    n = "/payments/config",
                    window.Shopify.currency && "string" == typeof window.Shopify.currency.active && (n = n + "?currency=" + window.Shopify.currency.active),
                    t.next = 6,
                    e.get(n);
                case 6:
                    return r = t.sent,
                    t.next = 9,
                    r.json();
                case 9:
                    return o = t.sent,
                    f.logger.info("Configuration fetched.", o),
                    t.abrupt("return", o);
                case 12:
                case "end":
                    return t.stop()
                }
        }, t, this)
    })),
    function() {
        return o.apply(this, arguments)
    }
    );
    e.reset = h;
    var c = n(100)
      , f = n(61);
    function l(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var d = {
        paymentInstruments: {
            accessToken: "",
            currency: "",
            locale: "",
            supportsDiscounts: !1,
            supportsGiftCards: !1,
            checkoutDisabled: !1,
            checkoutConfig: {
                domain: "",
                shopId: -1
            }
        }
    };
    function h() {
        for (var t in d)
            d.hasOwnProperty(t) && delete d[t]
    }
    e.default = d
}
, function(t, e, n) {
    t.exports = {
        default: n(138),
        __esModule: !0
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(111),
        __esModule: !0
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(116),
        __esModule: !0
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(140),
        __esModule: !0
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(n(66))
      , o = i(n(19));
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.getClosest = u,
    e.generateRandomId = s,
    e.onAnimationEnd = h,
    e.searchParams = p;
    var a = Element.prototype;
    function u(t, e) {
        a.matches = a.matches || a.webkitMatchesSelector || a.msMatchesSelector || a.mozMatchesSelector;
        for (var n = t; n && n !== document.body; )
            if ((n = n.parentElement).matches(e))
                return n;
        return null
    }
    function s() {
        for (var t = [], e = c(), n = e.length - 1; n >= 0; n--)
            t.push(f(e[n]));
        return t.join("")
    }
    function c() {
        var t = window.crypto || window.msCrypto;
        if (t && t.getRandomValues) {
            var e = new Uint8Array(16);
            return t.getRandomValues(e),
            e
        }
        for (var n, r = new Array(16), o = 0; o < 16; o++)
            0 == (3 & o) && (n = 4294967296 * Math.random()),
            r[o] = n >>> ((3 & o) << 3) & 255;
        return r
    }
    function f(t) {
        return (t + 256).toString(16).substr(1)
    }
    var l = ["webkitAnimationEnd", "oanimationend", "oAnimationEnd", "msAnimationEnd", "animationend"]
      , d = 1e3;
    function h(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d;
        return new o.default(function(n) {
            l.map(function(e) {
                return t.addEventListener(e, n, {
                    once: !0
                })
            }),
            setTimeout(n, e)
        }
        )
    }
    function p() {
        var t = new r.default;
        return decodeURIComponent(location.search).replace(/([^?=&]+)(=([^&]*))?/g, function(e, n, r, o) {
            t.set(n, o)
        }),
        t
    }
}
, function(t, e, n) {
    var r = n(4)
      , o = n(14).onFreeze;
    n(27)("freeze", function(t) {
        return function(e) {
            return t && r(e) ? t(o(e)) : e
        }
    })
}
, function(t, e, n) {
    n(110),
    t.exports = n(0).Object.freeze
}
, function(t, e, n) {
    n(75)("Set")
}
, function(t, e, n) {
    n(76)("Set")
}
, function(t, e, n) {
    var r = n(1);
    r(r.P + r.R, "Set", {
        toJSON: n(77)("Set")
    })
}
, function(t, e, n) {
    "use strict";
    var r = n(79)
      , o = n(22)
      , i = "Set";
    t.exports = n(46)(i, function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        add: function(t) {
            return r.def(o(this, i), t = 0 === t ? 0 : t, t)
        }
    }, r)
}
, function(t, e, n) {
    n(30),
    n(13),
    n(18),
    n(115),
    n(114),
    n(113),
    n(112),
    t.exports = n(0).Set
}
, function(t, e, n) {
    var r = n(1)
      , o = n(81)(!0);
    r(r.S, "Object", {
        entries: function(t) {
            return o(t)
        }
    })
}
, function(t, e, n) {
    n(117),
    t.exports = n(0).Object.entries
}
, function(t, e, n) {
    t.exports = {
        default: n(118),
        __esModule: !0
    }
}
, function(t, e, n) {
    n(27)("getOwnPropertyNames", function() {
        return n(72).f
    })
}
, function(t, e, n) {
    n(120);
    var r = n(0).Object;
    t.exports = function(t) {
        return r.getOwnPropertyNames(t)
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(121),
        __esModule: !0
    }
}
, function(t, e, n) {
    var r = n(1);
    r(r.S, "Object", {
        create: n(35)
    })
}
, function(t, e, n) {
    n(123);
    var r = n(0).Object;
    t.exports = function(t, e) {
        return r.create(t, e)
    }
}
, function(t, e, n) {
    t.exports = {
        default: n(124),
        __esModule: !0
    }
}
, function(t, e, n) {
    var r = n(4)
      , o = n(5)
      , i = function(t, e) {
        if (o(t),
        !r(e) && null !== e)
            throw TypeError(e + ": can't set as prototype!")
    };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__"in {} ? function(t, e, r) {
            try {
                (r = n(8)(Function.call, n(43).f(Object.prototype, "__proto__").set, 2))(t, []),
                e = !(t instanceof Array)
            } catch (t) {
                e = !0
            }
            return function(t, n) {
                return i(t, n),
                e ? t.__proto__ = n : r(t, n),
                t
            }
        }({}, !1) : void 0),
        check: i
    }
}
, function(t, e, n) {
    var r = n(1);
    r(r.S, "Object", {
        setPrototypeOf: n(126).set
    })
}
, function(t, e, n) {
    n(127),
    t.exports = n(0).Object.setPrototypeOf
}
, function(t, e, n) {
    t.exports = {
        default: n(128),
        __esModule: !0
    }
}
, function(t, e, n) {
    n(41)("observable")
}
, function(t, e, n) {
    n(41)("asyncIterator")
}
, function(t, e, n) {
    n(73),
    n(30),
    n(131),
    n(130),
    t.exports = n(0).Symbol
}
, function(t, e, n) {
    n(13),
    n(18),
    t.exports = n(42).f("iterator")
}
, function(t, e, n) {
    "use strict";
    var r = n(28)
      , o = n(14).getWeak
      , i = n(5)
      , a = n(4)
      , u = n(29)
      , s = n(15)
      , c = n(45)
      , f = n(9)
      , l = n(22)
      , d = c(5)
      , h = c(6)
      , p = 0
      , v = function(t) {
        return t._l || (t._l = new y)
    }
      , y = function() {
        this.a = []
    }
      , m = function(t, e) {
        return d(t.a, function(t) {
            return t[0] === e
        })
    };
    y.prototype = {
        get: function(t) {
            var e = m(this, t);
            if (e)
                return e[1]
        },
        has: function(t) {
            return !!m(this, t)
        },
        set: function(t, e) {
            var n = m(this, t);
            n ? n[1] = e : this.a.push([t, e])
        },
        delete: function(t) {
            var e = h(this.a, function(e) {
                return e[0] === t
            });
            return ~e && this.a.splice(e, 1),
            !!~e
        }
    },
    t.exports = {
        getConstructor: function(t, e, n, i) {
            var c = t(function(t, r) {
                u(t, c, e, "_i"),
                t._t = e,
                t._i = p++,
                t._l = void 0,
                void 0 != r && s(r, n, t[i], t)
            });
            return r(c.prototype, {
                delete: function(t) {
                    if (!a(t))
                        return !1;
                    var n = o(t);
                    return !0 === n ? v(l(this, e)).delete(t) : n && f(n, this._i) && delete n[this._i]
                },
                has: function(t) {
                    if (!a(t))
                        return !1;
                    var n = o(t);
                    return !0 === n ? v(l(this, e)).has(t) : n && f(n, this._i)
                }
            }),
            c
        },
        def: function(t, e, n) {
            var r = o(i(e), !0);
            return !0 === r ? v(t).set(e, n) : r[t._i] = n,
            t
        },
        ufstore: v
    }
}
, function(t, e, n) {
    "use strict";
    var r, o = n(45)(0), i = n(52), a = n(14), u = n(74), s = n(134), c = n(4), f = n(10), l = n(22), d = "WeakMap", h = a.getWeak, p = Object.isExtensible, v = s.ufstore, y = {}, m = function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, g = {
        get: function(t) {
            if (c(t)) {
                var e = h(t);
                return !0 === e ? v(l(this, d)).get(t) : e ? e[this._i] : void 0
            }
        },
        set: function(t, e) {
            return s.def(l(this, d), t, e)
        }
    }, b = t.exports = n(46)(d, m, g, s, !0, !0);
    f(function() {
        return 7 != (new b).set((Object.freeze || Object)(y), 7).get(y)
    }) && (u((r = s.getConstructor(m, d)).prototype, g),
    a.NEED = !0,
    o(["delete", "has", "get", "set"], function(t) {
        var e = b.prototype
          , n = e[t];
        i(e, t, function(e, o) {
            if (c(e) && !p(e)) {
                this._f || (this._f = new r);
                var i = this._f[t](e, o);
                return "set" == t ? this : i
            }
            return n.call(this, e, o)
        })
    }))
}
, function(t, e, n) {
    var r = n(80)
      , o = n(1)
      , i = n(33)("metadata")
      , a = i.store || (i.store = new (n(135)))
      , u = function(t, e, n) {
        var o = a.get(t);
        if (!o) {
            if (!n)
                return;
            a.set(t, o = new r)
        }
        var i = o.get(e);
        if (!i) {
            if (!n)
                return;
            o.set(e, i = new r)
        }
        return i
    }
      , s = function(t, e, n) {
        var r = u(e, n, !1);
        return void 0 !== r && r.has(t)
    }
      , c = function(t, e, n) {
        var r = u(e, n, !1);
        return void 0 === r ? void 0 : r.get(t)
    }
      , f = function(t, e, n, r) {
        u(n, r, !0).set(t, e)
    }
      , l = function(t, e) {
        var n = u(t, e, !1)
          , r = [];
        return n && n.forEach(function(t, e) {
            r.push(e)
        }),
        r
    }
      , d = function(t) {
        return void 0 === t || "symbol" == typeof t ? t : String(t)
    }
      , h = function(t) {
        o(o.S, "Reflect", t)
    };
    t.exports = {
        store: a,
        map: u,
        has: s,
        get: c,
        set: f,
        keys: l,
        key: d,
        exp: h
    }
}
, function(t, e, n) {
    var r = n(136)
      , o = n(5)
      , i = n(16)
      , a = r.key
      , u = r.set;
    r.exp({
        metadata: function(t, e) {
            return function(n, r) {
                u(t, e, (void 0 !== r ? o : i)(n), a(r))
            }
        }
    })
}
, function(t, e, n) {
    n(137),
    t.exports = n(0).Reflect.metadata
}
, function(t, e, n) {
    var r = n(21)
      , o = n(44)
      , i = n(23);
    t.exports = function(t) {
        var e = r(t)
          , n = o.f;
        if (n)
            for (var a, u = n(t), s = i.f, c = 0; u.length > c; )
                s.call(t, a = u[c++]) && e.push(a);
        return e
    }
}
, function(t, e, n) {
    n(73),
    t.exports = n(0).Object.getOwnPropertySymbols
}
, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = o(n(82));
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = function(t) {
        return Array.isArray(t) ? t : (0,
        r.default)(t)
    }
}
, function(t, e, n) {
    var r = n(12)
      , o = n(43).f;
    n(27)("getOwnPropertyDescriptor", function() {
        return function(t, e) {
            return o(r(t), e)
        }
    })
}
, function(t, e, n) {
    n(142);
    var r = n(0).Object;
    t.exports = function(t, e) {
        return r.getOwnPropertyDescriptor(t, e)
    }
}
, function(t, e, n) {
    var r = n(20)
      , o = n(91);
    n(27)("getPrototypeOf", function() {
        return function(t) {
            return o(r(t))
        }
    })
}
, function(t, e, n) {
    n(144),
    t.exports = n(0).Object.getPrototypeOf
}
, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = i(n(58))
      , o = i(n(63));
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = function t(e, n, i) {
        null === e && (e = Function.prototype);
        var a = (0,
        o.default)(e, n);
        if (void 0 === a) {
            var u = (0,
            r.default)(e);
            return null === u ? void 0 : t(u, n, i)
        }
        if ("value"in a)
            return a.value;
        var s = a.get;
        return void 0 !== s ? s.call(i) : void 0
    }
}
, function(t, e, n) {
    var r = n(1);
    r(r.S + r.F, "Object", {
        assign: n(74)
    })
}
, function(t, e, n) {
    n(147),
    t.exports = n(0).Object.assign
}
, function(t, e) {
    !function(e) {
        "use strict";
        var n, r = Object.prototype, o = r.hasOwnProperty, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", u = i.asyncIterator || "@@asyncIterator", s = i.toStringTag || "@@toStringTag", c = "object" == typeof t, f = e.regeneratorRuntime;
        if (f)
            c && (t.exports = f);
        else {
            (f = e.regeneratorRuntime = c ? t.exports : {}).wrap = w;
            var l = "suspendedStart"
              , d = "suspendedYield"
              , h = "executing"
              , p = "completed"
              , v = {}
              , y = {};
            y[a] = function() {
                return this
            }
            ;
            var m = Object.getPrototypeOf
              , g = m && m(m(C([])));
            g && g !== r && o.call(g, a) && (y = g);
            var b = S.prototype = x.prototype = Object.create(y);
            k.prototype = b.constructor = S,
            S.constructor = k,
            S[s] = k.displayName = "GeneratorFunction",
            f.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === k || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            f.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, S) : (t.__proto__ = S,
                s in t || (t[s] = "GeneratorFunction")),
                t.prototype = Object.create(b),
                t
            }
            ,
            f.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            P(A.prototype),
            A.prototype[u] = function() {
                return this
            }
            ,
            f.AsyncIterator = A,
            f.async = function(t, e, n, r) {
                var o = new A(w(t, e, n, r));
                return f.isGeneratorFunction(e) ? o : o.next().then(function(t) {
                    return t.done ? t.value : o.next()
                })
            }
            ,
            P(b),
            b[s] = "Generator",
            b[a] = function() {
                return this
            }
            ,
            b.toString = function() {
                return "[object Generator]"
            }
            ,
            f.keys = function(t) {
                var e = [];
                for (var n in t)
                    e.push(n);
                return e.reverse(),
                function n() {
                    for (; e.length; ) {
                        var r = e.pop();
                        if (r in t)
                            return n.value = r,
                            n.done = !1,
                            n
                    }
                    return n.done = !0,
                    n
                }
            }
            ,
            f.values = C,
            M.prototype = {
                constructor: M,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = n,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = n,
                    this.tryEntries.forEach(j),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = n)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done)
                        throw t;
                    var e = this;
                    function r(r, o) {
                        return u.type = "throw",
                        u.arg = t,
                        e.next = r,
                        o && (e.method = "next",
                        e.arg = n),
                        !!o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i]
                          , u = a.completion;
                        if ("root" === a.tryLoc)
                            return r("end");
                        if (a.tryLoc <= this.prev) {
                            var s = o.call(a, "catchLoc")
                              , c = o.call(a, "finallyLoc");
                            if (s && c) {
                                if (this.prev < a.catchLoc)
                                    return r(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc)
                                    return r(a.finallyLoc)
                            } else if (s) {
                                if (this.prev < a.catchLoc)
                                    return r(a.catchLoc, !0)
                            } else {
                                if (!c)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc)
                                    return r(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && o.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var i = r;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t,
                    a.arg = e,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    v) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    v
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t)
                            return this.complete(n.completion, n.afterLoc),
                            j(n),
                            v
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                j(n)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: C(t),
                        resultName: e,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = n),
                    v
                }
            }
        }
        function w(t, e, n, r) {
            var o = e && e.prototype instanceof x ? e : x
              , i = Object.create(o.prototype)
              , a = new M(r || []);
            return i._invoke = E(t, n, a),
            i
        }
        function _(t, e, n) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, n)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        function x() {}
        function k() {}
        function S() {}
        function P(t) {
            ["next", "throw", "return"].forEach(function(e) {
                t[e] = function(t) {
                    return this._invoke(e, t)
                }
            })
        }
        function A(t) {
            function e(n, r, i, a) {
                var u = _(t[n], t, r);
                if ("throw" !== u.type) {
                    var s = u.arg
                      , c = s.value;
                    return c && "object" == typeof c && o.call(c, "__await") ? Promise.resolve(c.__await).then(function(t) {
                        e("next", t, i, a)
                    }, function(t) {
                        e("throw", t, i, a)
                    }) : Promise.resolve(c).then(function(t) {
                        s.value = t,
                        i(s)
                    }, a)
                }
                a(u.arg)
            }
            var n;
            function r(t, r) {
                function o() {
                    return new Promise(function(n, o) {
                        e(t, r, n, o)
                    }
                    )
                }
                return n = n ? n.then(o, o) : o()
            }
            this._invoke = r
        }
        function E(t, e, n) {
            var r = l;
            return function(o, i) {
                if (r === h)
                    throw new Error("Generator is already running");
                if (r === p) {
                    if ("throw" === o)
                        throw i;
                    return I()
                }
                for (n.method = o,
                n.arg = i; ; ) {
                    var a = n.delegate;
                    if (a) {
                        var u = O(a, n);
                        if (u) {
                            if (u === v)
                                continue;
                            return u
                        }
                    }
                    if ("next" === n.method)
                        n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                        if (r === l)
                            throw r = p,
                            n.arg;
                        n.dispatchException(n.arg)
                    } else
                        "return" === n.method && n.abrupt("return", n.arg);
                    r = h;
                    var s = _(t, e, n);
                    if ("normal" === s.type) {
                        if (r = n.done ? p : d,
                        s.arg === v)
                            continue;
                        return {
                            value: s.arg,
                            done: n.done
                        }
                    }
                    "throw" === s.type && (r = p,
                    n.method = "throw",
                    n.arg = s.arg)
                }
            }
        }
        function O(t, e) {
            var r = t.iterator[e.method];
            if (r === n) {
                if (e.delegate = null,
                "throw" === e.method) {
                    if (t.iterator.return && (e.method = "return",
                    e.arg = n,
                    O(t, e),
                    "throw" === e.method))
                        return v;
                    e.method = "throw",
                    e.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return v
            }
            var o = _(r, t.iterator, e.arg);
            if ("throw" === o.type)
                return e.method = "throw",
                e.arg = o.arg,
                e.delegate = null,
                v;
            var i = o.arg;
            return i ? i.done ? (e[t.resultName] = i.value,
            e.next = t.nextLoc,
            "return" !== e.method && (e.method = "next",
            e.arg = n),
            e.delegate = null,
            v) : i : (e.method = "throw",
            e.arg = new TypeError("iterator result is not an object"),
            e.delegate = null,
            v)
        }
        function T(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]),
            2 in t && (e.finallyLoc = t[2],
            e.afterLoc = t[3]),
            this.tryEntries.push(e)
        }
        function j(t) {
            var e = t.completion || {};
            e.type = "normal",
            delete e.arg,
            t.completion = e
        }
        function M(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            t.forEach(T, this),
            this.reset(!0)
        }
        function C(t) {
            if (t) {
                var e = t[a];
                if (e)
                    return e.call(t);
                if ("function" == typeof t.next)
                    return t;
                if (!isNaN(t.length)) {
                    var r = -1
                      , i = function e() {
                        for (; ++r < t.length; )
                            if (o.call(t, r))
                                return e.value = t[r],
                                e.done = !1,
                                e;
                        return e.value = n,
                        e.done = !0,
                        e
                    };
                    return i.next = i
                }
            }
            return {
                next: I
            }
        }
        function I() {
            return {
                value: n,
                done: !0
            }
        }
    }(function() {
        return this
    }() || Function("return this")())
}
, function(t, e, n) {
    var r = function() {
        return this
    }() || Function("return this")()
      , o = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0
      , i = o && r.regeneratorRuntime;
    if (r.regeneratorRuntime = void 0,
    t.exports = n(149),
    o)
        r.regeneratorRuntime = i;
    else
        try {
            delete r.regeneratorRuntime
        } catch (t) {
            r.regeneratorRuntime = void 0
        }
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        "loading" !== document.readyState ? t() : document.addEventListener ? document.addEventListener("DOMContentLoaded", t) : document.attachEvent("onreadystatechange", function() {
            "loading" !== document.readyState && t()
        }),
        document.addEventListener && (document.addEventListener("shopify:block:select", t),
        document.addEventListener("shopify:section:select", t))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.ready = r
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Notifier = void 0;
    var r = a(n(37))
      , o = a(n(38));
    e.shouldSendReport = u;
    var i = a(n(68));
    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function u(t) {
        return t.context = "",
        0 !== t.stacktrace.length
    }
    var s = e.Notifier = function() {
        function t() {
            (0,
            r.default)(this, t)
        }
        return (0,
        o.default)(t, [{
            key: "notify",
            value: function(t) {
                var e = this;
                return n.e(0).then(n.t.bind(null, 191, 7)).then(function(n) {
                    var r = n.default;
                    e.notifier = e.notifier || r({
                        apiKey: i.default.bugsnagApiKey || "",
                        autoNotify: !1,
                        releaseStage: "production",
                        notifyReleaseStages: ["production"],
                        appVersion: "81d72d6dac79d691e8d9d60c0e04b904f50cada8\n",
                        beforeSend: u
                    }),
                    e.notifier.notify(t)
                })
            }
        }]),
        t
    }();
    e.default = s
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return t instanceof Error || Boolean(t.errorClass && t.errorMessage) || Boolean(t.name && t.message)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.isNotifiableError = r,
    e.default = r
}
, function(t, e, n) {
    n(75)("Map")
}
, function(t, e, n) {
    n(76)("Map")
}
, function(t, e, n) {
    var r = n(15);
    t.exports = function(t, e) {
        var n = [];
        return r(t, !1, n.push, n, e),
        n
    }
}
, function(t, e, n) {
    var r = n(1);
    r(r.P + r.R, "Map", {
        toJSON: n(77)("Map")
    })
}
, function(t, e, n) {
    var r = n(4)
      , o = n(78)
      , i = n(2)("species");
    t.exports = function(t) {
        var e;
        return o(t) && ("function" != typeof (e = t.constructor) || e !== Array && !o(e.prototype) || (e = void 0),
        r(e) && null === (e = e[i]) && (e = void 0)),
        void 0 === e ? Array : e
    }
}
, function(t, e, n) {
    var r = n(158);
    t.exports = function(t, e) {
        return new (r(t))(e)
    }
}
, function(t, e, n) {
    n(30),
    n(13),
    n(18),
    n(80),
    n(157),
    n(155),
    n(154),
    t.exports = n(0).Map
}
, function(t, e, n) {
    var r = n(1)
      , o = n(81)(!1);
    r(r.S, "Object", {
        values: function(t) {
            return o(t)
        }
    })
}
, function(t, e, n) {
    n(161),
    t.exports = n(0).Object.values
}
, function(t, e, n) {
    var r = n(1);
    r(r.S + r.F * !n(7), "Object", {
        defineProperty: n(6).f
    })
}
, function(t, e, n) {
    n(163);
    var r = n(0).Object;
    t.exports = function(t, e, n) {
        return r.defineProperty(t, e, n)
    }
}
, function(t, e) {
    t.exports = {
        animationTime: 500,
        bugsnagApiKey: "256b27e25ef85a189c1b1ef7c2668f30",
        bugsnagApiUrl: "https://upload.bugsnag.com",
        bugsnagPublicHost: "cdn.shopifycloud.com",
        cdnHost: "https://cdn.shopifycloud.com/payment-sheet/assets/",
        googleCloudAssetsPath: "payment-sheet/assets",
        googleCloudBucketName: "cdn.shopifycloud.com",
        googleCloudProjectId: "shopify-tiers",
        metricApiHost: "godog.shopifycloud.com",
        versionName: "latest",
        analyze: !1
    }
}
, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0,
        eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}
, function(t, e, n) {
    var r = n(0)
      , o = r.JSON || (r.JSON = {
        stringify: JSON.stringify
    });
    t.exports = function(t) {
        return o.stringify.apply(o, arguments)
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(6)
      , o = n(25);
    t.exports = function(t, e, n) {
        e in t ? r.f(t, e, o(0, n)) : t[e] = n
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(8)
      , o = n(1)
      , i = n(20)
      , a = n(90)
      , u = n(89)
      , s = n(34)
      , c = n(168)
      , f = n(48);
    o(o.S + o.F * !n(83)(function(t) {
        Array.from(t)
    }), "Array", {
        from: function(t) {
            var e, n, o, l, d = i(t), h = "function" == typeof this ? this : Array, p = arguments.length, v = p > 1 ? arguments[1] : void 0, y = void 0 !== v, m = 0, g = f(d);
            if (y && (v = r(v, p > 2 ? arguments[2] : void 0, 2)),
            void 0 == g || h == Array && u(g))
                for (n = new h(e = s(d.length)); e > m; m++)
                    c(n, m, y ? v(d[m], m) : d[m]);
            else
                for (l = g.call(d),
                n = new h; !(o = l.next()).done; m++)
                    c(n, m, y ? a(l, v, [o.value, m], !0) : o.value);
            return n.length = m,
            n
        }
    })
}
, function(t, e, n) {
    n(13),
    n(169),
    t.exports = n(0).Array.from
}
, function(t, e, n) {
    "use strict";
    var r = n(1)
      , o = n(47)
      , i = n(86);
    r(r.S, "Promise", {
        try: function(t) {
            var e = o.f(this)
              , n = i(t);
            return (n.e ? e.reject : e.resolve)(n.v),
            e.promise
        }
    })
}
, function(t, e, n) {
    "use strict";
    var r = n(1)
      , o = n(0)
      , i = n(3)
      , a = n(88)
      , u = n(85);
    r(r.P + r.R, "Promise", {
        finally: function(t) {
            var e = a(this, o.Promise || i.Promise)
              , n = "function" == typeof t;
            return this.then(n ? function(n) {
                return u(e, t()).then(function() {
                    return n
                })
            }
            : t, n ? function(n) {
                return u(e, t()).then(function() {
                    throw n
                })
            }
            : t)
        }
    })
}
, function(t, e, n) {
    var r = n(3)
      , o = n(87).set
      , i = r.MutationObserver || r.WebKitMutationObserver
      , a = r.process
      , u = r.Promise
      , s = "process" == n(26)(a);
    t.exports = function() {
        var t, e, n, c = function() {
            var r, o;
            for (s && (r = a.domain) && r.exit(); t; ) {
                o = t.fn,
                t = t.next;
                try {
                    o()
                } catch (r) {
                    throw t ? n() : e = void 0,
                    r
                }
            }
            e = void 0,
            r && r.enter()
        };
        if (s)
            n = function() {
                a.nextTick(c)
            }
            ;
        else if (i) {
            var f = !0
              , l = document.createTextNode("");
            new i(c).observe(l, {
                characterData: !0
            }),
            n = function() {
                l.data = f = !f
            }
        } else if (u && u.resolve) {
            var d = u.resolve();
            n = function() {
                d.then(c)
            }
        } else
            n = function() {
                o.call(r, c)
            }
            ;
        return function(r) {
            var o = {
                fn: r,
                next: void 0
            };
            e && (e.next = o),
            t || (t = o,
            n()),
            e = o
        }
    }
}
, function(t, e) {
    t.exports = function(t, e, n) {
        var r = void 0 === n;
        switch (e.length) {
        case 0:
            return r ? t() : t.call(n);
        case 1:
            return r ? t(e[0]) : t.call(n, e[0]);
        case 2:
            return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
        case 3:
            return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
        case 4:
            return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
}
, function(t, e, n) {
    "use strict";
    var r, o, i, a, u = n(36), s = n(3), c = n(8), f = n(31), l = n(1), d = n(4), h = n(16), p = n(29), v = n(15), y = n(88), m = n(87).set, g = n(173)(), b = n(47), w = n(86), _ = n(85), x = "Promise", k = s.TypeError, S = s.process, P = s[x], A = "process" == f(S), E = function() {}, O = o = b.f, T = !!function() {
        try {
            var t = P.resolve(1)
              , e = (t.constructor = {})[n(2)("species")] = function(t) {
                t(E, E)
            }
            ;
            return (A || "function" == typeof PromiseRejectionEvent) && t.then(E)instanceof e
        } catch (t) {}
    }(), j = function(t) {
        var e;
        return !(!d(t) || "function" != typeof (e = t.then)) && e
    }, M = function(t, e) {
        if (!t._n) {
            t._n = !0;
            var n = t._c;
            g(function() {
                for (var r = t._v, o = 1 == t._s, i = 0, a = function(e) {
                    var n, i, a = o ? e.ok : e.fail, u = e.resolve, s = e.reject, c = e.domain;
                    try {
                        a ? (o || (2 == t._h && R(t),
                        t._h = 1),
                        !0 === a ? n = r : (c && c.enter(),
                        n = a(r),
                        c && c.exit()),
                        n === e.promise ? s(k("Promise-chain cycle")) : (i = j(n)) ? i.call(n, u, s) : u(n)) : s(r)
                    } catch (t) {
                        s(t)
                    }
                }; n.length > i; )
                    a(n[i++]);
                t._c = [],
                t._n = !1,
                e && !t._h && C(t)
            })
        }
    }, C = function(t) {
        m.call(s, function() {
            var e, n, r, o = t._v, i = I(t);
            if (i && (e = w(function() {
                A ? S.emit("unhandledRejection", o, t) : (n = s.onunhandledrejection) ? n({
                    promise: t,
                    reason: o
                }) : (r = s.console) && r.error && r.error("Unhandled promise rejection", o)
            }),
            t._h = A || I(t) ? 2 : 1),
            t._a = void 0,
            i && e.e)
                throw e.v
        })
    }, I = function(t) {
        if (1 == t._h)
            return !1;
        for (var e, n = t._a || t._c, r = 0; n.length > r; )
            if ((e = n[r++]).fail || !I(e.promise))
                return !1;
        return !0
    }, R = function(t) {
        m.call(s, function() {
            var e;
            A ? S.emit("rejectionHandled", t) : (e = s.onrejectionhandled) && e({
                promise: t,
                reason: t._v
            })
        })
    }, L = function(t) {
        var e = this;
        e._d || (e._d = !0,
        (e = e._w || e)._v = t,
        e._s = 2,
        e._a || (e._a = e._c.slice()),
        M(e, !0))
    }, N = function(t) {
        var e, n = this;
        if (!n._d) {
            n._d = !0,
            n = n._w || n;
            try {
                if (n === t)
                    throw k("Promise can't be resolved itself");
                (e = j(t)) ? g(function() {
                    var r = {
                        _w: n,
                        _d: !1
                    };
                    try {
                        e.call(t, c(N, r, 1), c(L, r, 1))
                    } catch (t) {
                        L.call(r, t)
                    }
                }) : (n._v = t,
                n._s = 1,
                M(n, !1))
            } catch (t) {
                L.call({
                    _w: n,
                    _d: !1
                }, t)
            }
        }
    };
    T || (P = function(t) {
        p(this, P, x, "_h"),
        h(t),
        r.call(this);
        try {
            t(c(N, this, 1), c(L, this, 1))
        } catch (t) {
            L.call(this, t)
        }
    }
    ,
    (r = function(t) {
        this._c = [],
        this._a = void 0,
        this._s = 0,
        this._d = !1,
        this._v = void 0,
        this._h = 0,
        this._n = !1
    }
    ).prototype = n(28)(P.prototype, {
        then: function(t, e) {
            var n = O(y(this, P));
            return n.ok = "function" != typeof t || t,
            n.fail = "function" == typeof e && e,
            n.domain = A ? S.domain : void 0,
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && M(this, !1),
            n.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }),
    i = function() {
        var t = new r;
        this.promise = t,
        this.resolve = c(N, t, 1),
        this.reject = c(L, t, 1)
    }
    ,
    b.f = O = function(t) {
        return t === P || t === a ? new i(t) : o(t)
    }
    ),
    l(l.G + l.W + l.F * !T, {
        Promise: P
    }),
    n(24)(P, x),
    n(84)(x),
    a = n(0)[x],
    l(l.S + l.F * !T, x, {
        reject: function(t) {
            var e = O(this);
            return (0,
            e.reject)(t),
            e.promise
        }
    }),
    l(l.S + l.F * (u || !T), x, {
        resolve: function(t) {
            return _(u && this === a ? P : this, t)
        }
    }),
    l(l.S + l.F * !(T && n(83)(function(t) {
        P.all(t).catch(E)
    })), x, {
        all: function(t) {
            var e = this
              , n = O(e)
              , r = n.resolve
              , o = n.reject
              , i = w(function() {
                var n = []
                  , i = 0
                  , a = 1;
                v(t, !1, function(t) {
                    var u = i++
                      , s = !1;
                    n.push(void 0),
                    a++,
                    e.resolve(t).then(function(t) {
                        s || (s = !0,
                        n[u] = t,
                        --a || r(n))
                    }, o)
                }),
                --a || r(n)
            });
            return i.e && o(i.v),
            n.promise
        },
        race: function(t) {
            var e = this
              , n = O(e)
              , r = n.reject
              , o = w(function() {
                v(t, !1, function(t) {
                    e.resolve(t).then(n.resolve, r)
                })
            });
            return o.e && r(o.v),
            n.promise
        }
    })
}
, function(t, e, n) {
    n(30),
    n(13),
    n(18),
    n(175),
    n(172),
    n(171),
    t.exports = n(0).Promise
}
, function(t, e, n) {
    var r = n(5)
      , o = n(48);
    t.exports = n(0).getIterator = function(t) {
        var e = o(t);
        if ("function" != typeof e)
            throw TypeError(t + " is not iterable!");
        return r(e.call(t))
    }
}
, function(t, e, n) {
    n(18),
    n(13),
    t.exports = n(177)
}
, function(t, e, n) {
    var r = n(31)
      , o = n(2)("iterator")
      , i = n(17);
    t.exports = n(0).isIterable = function(t) {
        var e = Object(t);
        return void 0 !== e[o] || "@@iterator"in e || i.hasOwnProperty(r(e))
    }
}
, function(t, e, n) {
    var r = n(51)
      , o = n(56);
    t.exports = function(t) {
        return function(e, n) {
            var i, a, u = String(o(e)), s = r(n), c = u.length;
            return s < 0 || s >= c ? t ? "" : void 0 : (i = u.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === c || (a = u.charCodeAt(s + 1)) < 56320 || a > 57343 ? t ? u.charAt(s) : i : t ? u.slice(s, s + 2) : a - 56320 + (i - 55296 << 10) + 65536
        }
    }
}
, function(t, e, n) {
    var r = n(51)
      , o = Math.max
      , i = Math.min;
    t.exports = function(t, e) {
        return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e)
    }
}
, function(t, e, n) {
    var r = n(12)
      , o = n(34)
      , i = n(181);
    t.exports = function(t) {
        return function(e, n, a) {
            var u, s = r(e), c = o(s.length), f = i(a, c);
            if (t && n != n) {
                for (; c > f; )
                    if ((u = s[f++]) != u)
                        return !0
            } else
                for (; c > f; f++)
                    if ((t || f in s) && s[f] === n)
                        return t || f || 0;
            return !t && -1
        }
    }
}
, function(t, e, n) {
    var r = n(6)
      , o = n(5)
      , i = n(21);
    t.exports = n(7) ? Object.defineProperties : function(t, e) {
        o(t);
        for (var n, a = i(e), u = a.length, s = 0; u > s; )
            r.f(t, n = a[s++], e[n]);
        return t
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(35)
      , o = n(25)
      , i = n(24)
      , a = {};
    n(11)(a, n(2)("iterator"), function() {
        return this
    }),
    t.exports = function(t, e, n) {
        t.prototype = r(a, {
            next: o(1, n)
        }),
        i(t, e + " Iterator")
    }
}
, function(t, e) {
    t.exports = function() {}
}
, function(t, e, n) {
    "use strict";
    var r = n(185)
      , o = n(95)
      , i = n(17)
      , a = n(12);
    t.exports = n(55)(Array, "Array", function(t, e) {
        this._t = a(t),
        this._i = 0,
        this._k = e
    }, function() {
        var t = this._t
          , e = this._k
          , n = this._i++;
        return !t || n >= t.length ? (this._t = void 0,
        o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
    }, "values"),
    i.Arguments = i.Array,
    r("keys"),
    r("values"),
    r("entries")
}
, function(t, e, n) {
    n(18),
    n(13),
    t.exports = n(179)
}
, function(t, e, n) {
    t.exports = {
        default: n(187),
        __esModule: !0
    }
}
, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.version = void 0;
    var r = d(n(96))
      , o = d(n(19));
    e.init = v;
    var i = d(n(102))
      , a = n(103)
      , u = n(61)
      , s = n(62)
      , c = n(151)
      , f = l(n(104));
    function l(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t,
        e
    }
    function d(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var h = "[data-shopify=payment-button]"
      , p = function() {
        return (0,
        a.startBenchmark)("loading dependencies"),
        o.default.all([Promise.all([n.e(1), n.e(2)]).then(n.t.bind(null, 190, 7)), f.init()]).then(function(t) {
            return (0,
            a.endBenchmark)("loading dependencies"),
            t
        })
    };
    e.version = "81d72d6dac79d691e8d9d60c0e04b904f50cada8\n";
    function v() {
        var t = document.querySelectorAll(h);
        if (0 !== t.length)
            return y(),
            p().then(function(e) {
                var n = (0,
                r.default)(e, 2)
                  , o = n[0].bindButtons
                  , i = n[1];
                o(t, i)
            }).catch(function(t) {
                return u.logger.warn(t)
            })
    }
    function y() {
        u.logger.info("Init called"),
        (0,
        s.increment)("init.called"),
        i.default.track("spb_init_called"),
        (0,
        a.startBenchmark)("init button"),
        (0,
        a.startBenchmark)("buttonDisplay")
    }
    (0,
    c.ready)(v)
}
]);
