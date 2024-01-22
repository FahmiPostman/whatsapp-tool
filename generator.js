!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                n.d(r, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "/",
    n(n.s = 0)
}([function(e, t, n) {
    "use strict";
    n.r(t);
    n(1);
    const r = ()=>{
        const e = document.getElementById("wa-crx-number")
          , t = document.getElementById("wa-crx-message")
          , n = document.getElementById("wa-crx-generated")
          , r = document.getElementById("wa-crx-copy")
          , o = document.getElementById("wa-crx-visit")
          , a = document.getElementById("wa-crx-number-error")
          , i = e=>{
            if (e.length)
                return r.classList.add("wa-crx__button--active"),
                void (o.innerHTML = '<a href="' + e + '" target="_blank">Kunjungi Link</a>');
            r.classList.remove("wa-crx__button--active"),
            o.innerHTML = "Kunjungi Link"
        }
        ;
        e.addEventListener("input", r=>{
            const o = r.target.value
              , u = t.value;
            if ((t=>{
                let n = !1;
                if (t.length) {
                    const e = /^\+?\d{3,}$/;
                    t.match(e) || (n = !0)
                }
                if (n)
                    return e.classList.add("wa-crx__field__input--error"),
                    void a.classList.add("wa-crx__field__error--show");
                e.classList.remove("wa-crx__field__input--error"),
                a.classList.remove("wa-crx__field__error--show")
            }
            )(o),
            0 === o.length)
                return i(""),
                void (n.value = "");
            let c = "https://wa.me/" + o;
            if (u.length) {
                c = `https://wa.me/${o}?text=${encodeURIComponent(u)}`
            }
            i(c),
            n.value = c
        }
        ),
        t.addEventListener("input", t=>{
            const r = e.value
              , a = t.target.value;
            if (0 === r.length)
                return;
            let i = "https://wa.me/" + r;
            if (a.length) {
                i = `https://wa.me/${r}?text=${encodeURIComponent(a)}`
            }
            n.value = i,
            i.length ? o.innerHTML = '<a href="' + i + '" target="_blank">Kunjungi Link</a>' : o.innerHTML = "Kunjungi Link"
        }
        ),
        r.addEventListener("click", ()=>{
            r.classList.contains("wa-crx__button--active") && (n.select(),
            n.setSelectionRange(0, 99999),
            document.execCommand("copy"),
            alert("Link sudah tercopy!"))
        }
        )
    }
    ;
    setTimeout(()=>{
        document.getElementById("wa-crx") && r()
    }
    , 100)
}
, function(e, t, n) {}
]);
!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                n.d(r, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "/",
    n(n.s = 12)
}([function(e, t, n) {
    "use strict";
    var r = n(3)
      , i = Object.prototype.toString;
    function o(e) {
        return "[object Array]" === i.call(e)
    }
    function a(e) {
        return void 0 === e
    }
    function s(e) {
        return null !== e && "object" == typeof e
    }
    function c(e) {
        if ("[object Object]" !== i.call(e))
            return !1;
        var t = Object.getPrototypeOf(e);
        return null === t || t === Object.prototype
    }
    function u(e) {
        return "[object Function]" === i.call(e)
    }
    function l(e, t) {
        if (null != e)
            if ("object" != typeof e && (e = [e]),
            o(e))
                for (var n = 0, r = e.length; n < r; n++)
                    t.call(null, e[n], n, e);
            else
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
    }

    e.exports = {
        isArray: o,
        isArrayBuffer: function(e) {
            return "[object ArrayBuffer]" === i.call(e)
        },
        isBuffer: function(e) {
            return null !== e && !a(e) && null !== e.constructor && !a(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        },
        isFormData: function(e) {
            return "undefined" != typeof FormData && e instanceof FormData
        },
        isArrayBufferView: function(e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        },
        isString: function(e) {
            return "string" == typeof e
        },
        isNumber: function(e) {
            return "number" == typeof e
        },
        isObject: s,
        isPlainObject: c,
        isUndefined: a,
        isDate: function(e) {
            return "[object Date]" === i.call(e)
        },
        isFile: function(e) {
            return "[object File]" === i.call(e)
        },
        isBlob: function(e) {
            return "[object Blob]" === i.call(e)
        },
        isFunction: u,
        isStream: function(e) {
            return s(e) && u(e.pipe)
        },
        isURLSearchParams: function(e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        },
        isStandardBrowserEnv: function() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        },
        forEach: l,
        merge: function e() {
            var t = {};
            function n(n, r) {
                c(t[r]) && c(n) ? t[r] = e(t[r], n) : c(n) ? t[r] = e({}, n) : o(n) ? t[r] = n.slice() : t[r] = n
            }
            for (var r = 0, i = arguments.length; r < i; r++)
                l(arguments[r], n);
            return t
        },
        extend: function(e, t, n) {
            return l(t, (function(t, i) {
                e[i] = n && "function" == typeof t ? r(t, n) : t
            }
            )),
            e
        },
        trim: function(e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        },
        stripBOM: function(e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)),
            e
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(30);
    window.Suggestions = e.exports = r
}
, function(e, t, n) {
    var r, i;
    /*!
* JavaScript Cookie v2.2.1
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/
    !function(o) {
        if (void 0 === (i = "function" == typeof (r = o) ? r.call(t, n, t, e) : r) || (e.exports = i),
        !0,
        e.exports = o(),
        !!0) {
            var a = window.Cookies
              , s = window.Cookies = o();
            s.noConflict = function() {
                return window.Cookies = a,
                s
            }
        }
    }((function() {
        function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                    t[r] = n[r]
            }
            return t
        }
        function t(e) {
            return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
        }
        return function n(r) {
            function i() {}
            function o(t, n, o) {
                if ("undefined" != typeof document) {
                    "number" == typeof (o = e({
                        path: "/"
                    }, i.defaults, o)).expires && (o.expires = new Date(1 * new Date + 864e5 * o.expires)),
                    o.expires = o.expires ? o.expires.toUTCString() : "";
                    try {
                        var a = JSON.stringify(n);
                        /^[\{\[]/.test(a) && (n = a)
                    } catch (e) {}
                    n = r.write ? r.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                    t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                    var s = "";
                    for (var c in o)
                        o[c] && (s += "; " + c,
                        !0 !== o[c] && (s += "=" + o[c].split(";")[0]));
                    return document.cookie = t + "=" + n + s
                }
            }
            function a(e, n) {
                if ("undefined" != typeof document) {
                    for (var i = {}, o = document.cookie ? document.cookie.split("; ") : [], a = 0; a < o.length; a++) {
                        var s = o[a].split("=")
                          , c = s.slice(1).join("=");
                        n || '"' !== c.charAt(0) || (c = c.slice(1, -1));
                        try {
                            var u = t(s[0]);
                            if (c = (r.read || r)(c, u) || t(c),
                            n)
                                try {
                                    c = JSON.parse(c)
                                } catch (e) {}
                            if (i[u] = c,
                            e === u)
                                break
                        } catch (e) {}
                    }
                    return e ? i[e] : i
                }
            }
            return i.set = o,
            i.get = function(e) {
                return a(e, !1)
            }
            ,
            i.getJSON = function(e) {
                return a(e, !0)
            }
            ,
            i.remove = function(t, n) {
                o(t, "", e(n, {
                    expires: -1
                }))
            }
            ,
            i.defaults = {},
            i.withConverter = n,
            i
        }((function() {}
        ))
    }
    ))
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return function() {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
                n[r] = arguments[r];
            return e.apply(t, n)
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0);
    function i(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    e.exports = function(e, t, n) {
        if (!t)
            return e;
        var o;
        if (n)
            o = n(t);
        else if (r.isURLSearchParams(t))
            o = t.toString();
        else {
            var a = [];
            r.forEach(t, (function(e, t) {
                null != e && (r.isArray(e) ? t += "[]" : e = [e],
                r.forEach(e, (function(e) {
                    r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)),
                    a.push(i(t) + "=" + i(e))
                }
                )))
            }
            )),
            o = a.join("&")
        }
        if (o) {
            var s = e.indexOf("#");
            -1 !== s && (e = e.slice(0, s)),
            e += (-1 === e.indexOf("?") ? "?" : "&") + o
        }
        return e
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return !(!e || !e.__CANCEL__)
    }
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        var r = n(0)
          , i = n(19)
          , o = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        function a(e, t) {
            !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }
        var s, c = {
            adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== t && "[object process]" === Object.prototype.toString.call(t)) && (s = n(7)),
            s),
            transformRequest: [function(e, t) {
                return i(t, "Accept"),
                i(t, "Content-Type"),
                r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"),
                e.toString()) : r.isObject(e) ? (a(t, "application/json;charset=utf-8"),
                JSON.stringify(e)) : e
            }
            ],
            transformResponse: [function(e) {
                if ("string" == typeof e)
                    try {
                        e = JSON.parse(e)
                    } catch (e) {}
                return e
            }
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            validateStatus: function(e) {
                return e >= 200 && e < 300
            }
        };
        c.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        },
        r.forEach(["delete", "get", "head"], (function(e) {
            c.headers[e] = {}
        }
        )),
        r.forEach(["post", "put", "patch"], (function(e) {
            c.headers[e] = r.merge(o)
        }
        )),
        e.exports = c
    }
    ).call(this, n(18))
}])
