
/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["421"], {
5487: (function () {
/* eslint-disable eslint-comments/no-unlimited-disable */ /* eslint-disable */ /*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */ /* prettier-ignore */ 
window.tram = function(a) {
    function b(a, b) {
        var c = new M.Bare;
        return c.init(a, b);
    }
    function c(a) {
        return a.replace(/[A-Z]/g, function(a) {
            return "-" + a.toLowerCase();
        });
    }
    function d(a) {
        var b = parseInt(a.slice(1), 16), c = b >> 16 & 255, d = b >> 8 & 255, e = 255 & b;
        return [
            c,
            d,
            e
        ];
    }
    function e(a, b, c) {
        return "#" + (1 << 24 | a << 16 | b << 8 | c).toString(16).slice(1);
    }
    function f() {}
    function g(a, b) {
        j("Type warning: Expected: [" + a + "] Got: [" + typeof b + "] " + b);
    }
    function h(a, b, c) {
        j("Units do not match [" + a + "]: " + b + ", " + c);
    }
    function i(a, b, c) {
        if (void 0 !== b && (c = b), void 0 === a) return c;
        var d = c;
        return $.test(a) || !_.test(a) ? d = parseInt(a, 10) : _.test(a) && (d = 1e3 * parseFloat(a)), 0 > d && (d = 0), d === d ? d : c;
    }
    function j(a) {
        U.debug && window && window.console.warn(a);
    }
    function k(a) {
        for(var b = -1, c = a ? a.length : 0, d = []; ++b < c;){
            var e = a[b];
            e && d.push(e);
        }
        return d;
    }
    var l = function(a, b, c) {
        function d(a) {
            return "object" == typeof a;
        }
        function e(a) {
            return "function" == typeof a;
        }
        function f() {}
        function g(h, i) {
            function j() {
                var a = new k;
                return e(a.init) && a.init.apply(a, arguments), a;
            }
            function k() {}
            i === c && (i = h, h = Object), j.Bare = k;
            var l, m = f[a] = h[a], n = k[a] = j[a] = new f;
            return n.constructor = j, j.mixin = function(b) {
                return k[a] = j[a] = g(j, b)[a], j;
            }, j.open = function(a) {
                if (l = {}, e(a) ? l = a.call(j, n, m, j, h) : d(a) && (l = a), d(l)) for(var c in l)b.call(l, c) && (n[c] = l[c]);
                return e(n.init) || (n.init = h), j;
            }, j.open(i);
        }
        return g;
    }("prototype", {}.hasOwnProperty), m = {
        ease: [
            "ease",
            function(a, b, c, d) {
                var e = (a /= d) * a, f = e * a;
                return b + c * (-2.75 * f * e + 11 * e * e + -15.5 * f + 8 * e + .25 * a);
            }
        ],
        "ease-in": [
            "ease-in",
            function(a, b, c, d) {
                var e = (a /= d) * a, f = e * a;
                return b + c * (-1 * f * e + 3 * e * e + -3 * f + 2 * e);
            }
        ],
        "ease-out": [
            "ease-out",
            function(a, b, c, d) {
                var e = (a /= d) * a, f = e * a;
                return b + c * (.3 * f * e + -1.6 * e * e + 2.2 * f + -1.8 * e + 1.9 * a);
            }
        ],
        "ease-in-out": [
            "ease-in-out",
            function(a, b, c, d) {
                var e = (a /= d) * a, f = e * a;
                return b + c * (2 * f * e + -5 * e * e + 2 * f + 2 * e);
            }
        ],
        linear: [
            "linear",
            function(a, b, c, d) {
                return c * a / d + b;
            }
        ],
        "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function(a, b, c, d) {
                return c * (a /= d) * a + b;
            }
        ],
        "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function(a, b, c, d) {
                return -c * (a /= d) * (a - 2) + b;
            }
        ],
        "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function(a, b, c, d) {
                return (a /= d / 2) < 1 ? c / 2 * a * a + b : -c / 2 * (--a * (a - 2) - 1) + b;
            }
        ],
        "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function(a, b, c, d) {
                return c * (a /= d) * a * a + b;
            }
        ],
        "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function(a, b, c, d) {
                return c * ((a = a / d - 1) * a * a + 1) + b;
            }
        ],
        "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function(a, b, c, d) {
                return (a /= d / 2) < 1 ? c / 2 * a * a * a + b : c / 2 * ((a -= 2) * a * a + 2) + b;
            }
        ],
        "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function(a, b, c, d) {
                return c * (a /= d) * a * a * a + b;
            }
        ],
        "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function(a, b, c, d) {
                return -c * ((a = a / d - 1) * a * a * a - 1) + b;
            }
        ],
        "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function(a, b, c, d) {
                return (a /= d / 2) < 1 ? c / 2 * a * a * a * a + b : -c / 2 * ((a -= 2) * a * a * a - 2) + b;
            }
        ],
        "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function(a, b, c, d) {
                return c * (a /= d) * a * a * a * a + b;
            }
        ],
        "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function(a, b, c, d) {
                return c * ((a = a / d - 1) * a * a * a * a + 1) + b;
            }
        ],
        "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function(a, b, c, d) {
                return (a /= d / 2) < 1 ? c / 2 * a * a * a * a * a + b : c / 2 * ((a -= 2) * a * a * a * a + 2) + b;
            }
        ],
        "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function(a, b, c, d) {
                return -c * Math.cos(a / d * (Math.PI / 2)) + c + b;
            }
        ],
        "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function(a, b, c, d) {
                return c * Math.sin(a / d * (Math.PI / 2)) + b;
            }
        ],
        "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function(a, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * a / d) - 1) + b;
            }
        ],
        "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function(a, b, c, d) {
                return 0 === a ? b : c * Math.pow(2, 10 * (a / d - 1)) + b;
            }
        ],
        "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function(a, b, c, d) {
                return a === d ? b + c : c * (-Math.pow(2, -10 * a / d) + 1) + b;
            }
        ],
        "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function(a, b, c, d) {
                return 0 === a ? b : a === d ? b + c : (a /= d / 2) < 1 ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : c / 2 * (-Math.pow(2, -10 * --a) + 2) + b;
            }
        ],
        "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function(a, b, c, d) {
                return -c * (Math.sqrt(1 - (a /= d) * a) - 1) + b;
            }
        ],
        "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function(a, b, c, d) {
                return c * Math.sqrt(1 - (a = a / d - 1) * a) + b;
            }
        ],
        "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function(a, b, c, d) {
                return (a /= d / 2) < 1 ? -c / 2 * (Math.sqrt(1 - a * a) - 1) + b : c / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + b;
            }
        ],
        "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function(a, b, c, d, e) {
                return void 0 === e && (e = 1.70158), c * (a /= d) * a * ((e + 1) * a - e) + b;
            }
        ],
        "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function(a, b, c, d, e) {
                return void 0 === e && (e = 1.70158), c * ((a = a / d - 1) * a * ((e + 1) * a + e) + 1) + b;
            }
        ],
        "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function(a, b, c, d, e) {
                return void 0 === e && (e = 1.70158), (a /= d / 2) < 1 ? c / 2 * a * a * (((e *= 1.525) + 1) * a - e) + b : c / 2 * ((a -= 2) * a * (((e *= 1.525) + 1) * a + e) + 2) + b;
            }
        ]
    }, n = {
        "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
        "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
        "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
    }, o = document, p = window, q = "bkwld-tram", r = /[\-\.0-9]/g, s = /[A-Z]/, t = "number", u = /^(rgb|#)/, v = /(em|cm|mm|in|pt|pc|px)$/, w = /(em|cm|mm|in|pt|pc|px|%)$/, x = /(deg|rad|turn)$/, y = "unitless", z = /(all|none) 0s ease 0s/, A = /^(width|height)$/, B = " ", C = o.createElement("a"), D = [
        "Webkit",
        "Moz",
        "O",
        "ms"
    ], E = [
        "-webkit-",
        "-moz-",
        "-o-",
        "-ms-"
    ], F = function(a) {
        if (a in C.style) return {
            dom: a,
            css: a
        };
        var b, c, d = "", e = a.split("-");
        for(b = 0; b < e.length; b++)d += e[b].charAt(0).toUpperCase() + e[b].slice(1);
        for(b = 0; b < D.length; b++)if (c = D[b] + d, c in C.style) return {
            dom: c,
            css: E[b] + a
        };
    }, G = b.support = {
        bind: Function.prototype.bind,
        transform: F("transform"),
        transition: F("transition"),
        backface: F("backface-visibility"),
        timing: F("transition-timing-function")
    };
    if (G.transition) {
        var H = G.timing.dom;
        if (C.style[H] = m["ease-in-back"][0], !C.style[H]) for(var I in n)m[I][0] = n[I];
    }
    var J = b.frame = function() {
        var a = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
        return a && G.bind ? a.bind(p) : function(a) {
            p.setTimeout(a, 16);
        };
    }(), K = b.now = function() {
        var a = p.performance, b = a && (a.now || a.webkitNow || a.msNow || a.mozNow);
        return b && G.bind ? b.bind(a) : Date.now || function() {
            return +new Date;
        };
    }(), L = l(function(b) {
        function d(a, b) {
            var c = k(("" + a).split(B)), d = c[0];
            b = b || {};
            var e = Y[d];
            if (!e) return j("Unsupported property: " + d);
            if (!b.weak || !this.props[d]) {
                var f = e[0], g = this.props[d];
                return g || (g = this.props[d] = new f.Bare), g.init(this.$el, c, e, b), g;
            }
        }
        function e(a, b, c) {
            if (a) {
                var e = typeof a;
                if (b || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == e && b) return this.timer = new S({
                    duration: a,
                    context: this,
                    complete: h
                }), void (this.active = !0);
                if ("string" == e && b) {
                    switch(a){
                        case "hide":
                            o.call(this);
                            break;
                        case "stop":
                            l.call(this);
                            break;
                        case "redraw":
                            p.call(this);
                            break;
                        default:
                            d.call(this, a, c && c[1]);
                    }
                    return h.call(this);
                }
                if ("function" == e) return void a.call(this, this);
                if ("object" == e) {
                    var f = 0;
                    u.call(this, a, function(a, b) {
                        a.span > f && (f = a.span), a.stop(), a.animate(b);
                    }, function(a) {
                        "wait" in a && (f = i(a.wait, 0));
                    }), t.call(this), f > 0 && (this.timer = new S({
                        duration: f,
                        context: this
                    }), this.active = !0, b && (this.timer.complete = h));
                    var g = this, j = !1, k = {};
                    J(function() {
                        u.call(g, a, function(a) {
                            a.active && (j = !0, k[a.name] = a.nextStyle);
                        }), j && g.$el.css(k);
                    });
                }
            }
        }
        function f(a) {
            a = i(a, 0), this.active ? this.queue.push({
                options: a
            }) : (this.timer = new S({
                duration: a,
                context: this,
                complete: h
            }), this.active = !0);
        }
        function g(a) {
            return this.active ? (this.queue.push({
                options: a,
                args: arguments
            }), void (this.timer.complete = h)) : j("No active transition timer. Use start() or wait() before then().");
        }
        function h() {
            if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                var a = this.queue.shift();
                e.call(this, a.options, !0, a.args);
            }
        }
        function l(a) {
            this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
            var b;
            "string" == typeof a ? (b = {}, b[a] = 1) : b = "object" == typeof a && null != a ? a : this.props, u.call(this, b, v), t.call(this);
        }
        function m(a) {
            l.call(this, a), u.call(this, a, w, x);
        }
        function n(a) {
            "string" != typeof a && (a = "block"), this.el.style.display = a;
        }
        function o() {
            l.call(this), this.el.style.display = "none";
        }
        function p() {
            this.el.offsetHeight;
        }
        function r() {
            l.call(this), a.removeData(this.el, q), this.$el = this.el = null;
        }
        function t() {
            var a, b, c = [];
            this.upstream && c.push(this.upstream);
            for(a in this.props)b = this.props[a], b.active && c.push(b.string);
            c = c.join(","), this.style !== c && (this.style = c, this.el.style[G.transition.dom] = c);
        }
        function u(a, b, e) {
            var f, g, h, i, j = b !== v, k = {};
            for(f in a)h = a[f], f in Z ? (k.transform || (k.transform = {}), k.transform[f] = h) : (s.test(f) && (f = c(f)), f in Y ? k[f] = h : (i || (i = {}), i[f] = h));
            for(f in k){
                if (h = k[f], g = this.props[f], !g) {
                    if (!j) continue;
                    g = d.call(this, f);
                }
                b.call(this, g, h);
            }
            e && i && e.call(this, i);
        }
        function v(a) {
            a.stop();
        }
        function w(a, b) {
            a.set(b);
        }
        function x(a) {
            this.$el.css(a);
        }
        function y(a, c) {
            b[a] = function() {
                return this.children ? A.call(this, c, arguments) : (this.el && c.apply(this, arguments), this);
            };
        }
        function A(a, b) {
            var c, d = this.children.length;
            for(c = 0; d > c; c++)a.apply(this.children[c], b);
            return this;
        }
        b.init = function(b) {
            if (this.$el = a(b), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, U.keepInherited && !U.fallback) {
                var c = W(this.el, "transition");
                c && !z.test(c) && (this.upstream = c);
            }
            G.backface && U.hideBackface && V(this.el, G.backface.css, "hidden");
        }, y("add", d), y("start", e), y("wait", f), y("then", g), y("next", h), y("stop", l), y("set", m), y("show", n), y("hide", o), y("redraw", p), y("destroy", r);
    }), M = l(L, function(b) {
        function c(b, c) {
            var d = a.data(b, q) || a.data(b, q, new L.Bare);
            return d.el || d.init(b), c ? d.start(c) : d;
        }
        b.init = function(b, d) {
            var e = a(b);
            if (!e.length) return this;
            if (1 === e.length) return c(e[0], d);
            var f = [];
            return e.each(function(a, b) {
                f.push(c(b, d));
            }), this.children = f, this;
        };
    }), N = l(function(a) {
        function b() {
            var a = this.get();
            this.update("auto");
            var b = this.get();
            return this.update(a), b;
        }
        function c(a, b, c) {
            return void 0 !== b && (c = b), a in m ? a : c;
        }
        function d(a) {
            var b = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a);
            return (b ? e(b[1], b[2], b[3]) : a).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
        }
        var f = {
            duration: 500,
            ease: "ease",
            delay: 0
        };
        a.init = function(a, b, d, e) {
            this.$el = a, this.el = a[0];
            var g = b[0];
            d[2] && (g = d[2]), X[g] && (g = X[g]), this.name = g, this.type = d[1], this.duration = i(b[1], this.duration, f.duration), this.ease = c(b[2], this.ease, f.ease), this.delay = i(b[3], this.delay, f.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = A.test(this.name), this.unit = e.unit || this.unit || U.defaultUnit, this.angle = e.angle || this.angle || U.defaultAngle, U.fallback || e.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + B + this.duration + "ms" + ("ease" != this.ease ? B + m[this.ease][0] : "") + (this.delay ? B + this.delay + "ms" : ""));
        }, a.set = function(a) {
            a = this.convert(a, this.type), this.update(a), this.redraw();
        }, a.transition = function(a) {
            this.active = !0, a = this.convert(a, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == a && (a = b.call(this))), this.nextStyle = a;
        }, a.fallback = function(a) {
            var c = this.el.style[this.name] || this.convert(this.get(), this.type);
            a = this.convert(a, this.type), this.auto && ("auto" == c && (c = this.convert(this.get(), this.type)), "auto" == a && (a = b.call(this))), this.tween = new R({
                from: c,
                to: a,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this
            });
        }, a.get = function() {
            return W(this.el, this.name);
        }, a.update = function(a) {
            V(this.el, this.name, a);
        }, a.stop = function() {
            (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, V(this.el, this.name, this.get()));
            var a = this.tween;
            a && a.context && a.destroy();
        }, a.convert = function(a, b) {
            if ("auto" == a && this.auto) return a;
            var c, e = "number" == typeof a, f = "string" == typeof a;
            switch(b){
                case t:
                    if (e) return a;
                    if (f && "" === a.replace(r, "")) return +a;
                    c = "number(unitless)";
                    break;
                case u:
                    if (f) {
                        if ("" === a && this.original) return this.original;
                        if (b.test(a)) return "#" == a.charAt(0) && 7 == a.length ? a : d(a);
                    }
                    c = "hex or rgb string";
                    break;
                case v:
                    if (e) return a + this.unit;
                    if (f && b.test(a)) return a;
                    c = "number(px) or string(unit)";
                    break;
                case w:
                    if (e) return a + this.unit;
                    if (f && b.test(a)) return a;
                    c = "number(px) or string(unit or %)";
                    break;
                case x:
                    if (e) return a + this.angle;
                    if (f && b.test(a)) return a;
                    c = "number(deg) or string(angle)";
                    break;
                case y:
                    if (e) return a;
                    if (f && w.test(a)) return a;
                    c = "number(unitless) or string(unit or %)";
            }
            return g(c, a), a;
        }, a.redraw = function() {
            this.el.offsetHeight;
        };
    }), O = l(N, function(a, b) {
        a.init = function() {
            b.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), u));
        };
    }), P = l(N, function(a, b) {
        a.init = function() {
            b.init.apply(this, arguments), this.animate = this.fallback;
        }, a.get = function() {
            return this.$el[this.name]();
        }, a.update = function(a) {
            this.$el[this.name](a);
        };
    }), Q = l(N, function(a, b) {
        function c(a, b) {
            var c, d, e, f, g;
            for(c in a)f = Z[c], e = f[0], d = f[1] || c, g = this.convert(a[c], e), b.call(this, d, g, e);
        }
        a.init = function() {
            b.init.apply(this, arguments), this.current || (this.current = {}, Z.perspective && U.perspective && (this.current.perspective = U.perspective, V(this.el, this.name, this.style(this.current)), this.redraw()));
        }, a.set = function(a) {
            c.call(this, a, function(a, b) {
                this.current[a] = b;
            }), V(this.el, this.name, this.style(this.current)), this.redraw();
        }, a.transition = function(a) {
            var b = this.values(a);
            this.tween = new T({
                current: this.current,
                values: b,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease
            });
            var c, d = {};
            for(c in this.current)d[c] = c in b ? b[c] : this.current[c];
            this.active = !0, this.nextStyle = this.style(d);
        }, a.fallback = function(a) {
            var b = this.values(a);
            this.tween = new T({
                current: this.current,
                values: b,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this
            });
        }, a.update = function() {
            V(this.el, this.name, this.style(this.current));
        }, a.style = function(a) {
            var b, c = "";
            for(b in a)c += b + "(" + a[b] + ") ";
            return c;
        }, a.values = function(a) {
            var b, d = {};
            return c.call(this, a, function(a, c, e) {
                d[a] = c, void 0 === this.current[a] && (b = 0, ~a.indexOf("scale") && (b = 1), this.current[a] = this.convert(b, e));
            }), d;
        };
    }), R = l(function(b) {
        function c(a) {
            1 === n.push(a) && J(g);
        }
        function g() {
            var a, b, c, d = n.length;
            if (d) for(J(g), b = K(), a = d; a--;)c = n[a], c && c.render(b);
        }
        function i(b) {
            var c, d = a.inArray(b, n);
            d >= 0 && (c = n.slice(d + 1), n.length = d, c.length && (n = n.concat(c)));
        }
        function j(a) {
            return Math.round(a * o) / o;
        }
        function k(a, b, c) {
            return e(a[0] + c * (b[0] - a[0]), a[1] + c * (b[1] - a[1]), a[2] + c * (b[2] - a[2]));
        }
        var l = {
            ease: m.ease[1],
            from: 0,
            to: 1
        };
        b.init = function(a) {
            this.duration = a.duration || 0, this.delay = a.delay || 0;
            var b = a.ease || l.ease;
            m[b] && (b = m[b][1]), "function" != typeof b && (b = l.ease), this.ease = b, this.update = a.update || f, this.complete = a.complete || f, this.context = a.context || this, this.name = a.name;
            var c = a.from, d = a.to;
            void 0 === c && (c = l.from), void 0 === d && (d = l.to), this.unit = a.unit || "", "number" == typeof c && "number" == typeof d ? (this.begin = c, this.change = d - c) : this.format(d, c), this.value = this.begin + this.unit, this.start = K(), a.autoplay !== !1 && this.play();
        }, b.play = function() {
            this.active || (this.start || (this.start = K()), this.active = !0, c(this));
        }, b.stop = function() {
            this.active && (this.active = !1, i(this));
        }, b.render = function(a) {
            var b, c = a - this.start;
            if (this.delay) {
                if (c <= this.delay) return;
                c -= this.delay;
            }
            if (c < this.duration) {
                var d = this.ease(c, 0, 1, this.duration);
                return b = this.startRGB ? k(this.startRGB, this.endRGB, d) : j(this.begin + d * this.change), this.value = b + this.unit, void this.update.call(this.context, this.value);
            }
            b = this.endHex || this.begin + this.change, this.value = b + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
        }, b.format = function(a, b) {
            if (b += "", a += "", "#" == a.charAt(0)) return this.startRGB = d(b), this.endRGB = d(a), this.endHex = a, this.begin = 0, void (this.change = 1);
            if (!this.unit) {
                var c = b.replace(r, ""), e = a.replace(r, "");
                c !== e && h("tween", b, a), this.unit = c;
            }
            b = parseFloat(b), a = parseFloat(a), this.begin = this.value = b, this.change = a - b;
        }, b.destroy = function() {
            this.stop(), this.context = null, this.ease = this.update = this.complete = f;
        };
        var n = [], o = 1e3;
    }), S = l(R, function(a) {
        a.init = function(a) {
            this.duration = a.duration || 0, this.complete = a.complete || f, this.context = a.context, this.play();
        }, a.render = function(a) {
            var b = a - this.start;
            b < this.duration || (this.complete.call(this.context), this.destroy());
        };
    }), T = l(R, function(a, b) {
        a.init = function(a) {
            this.context = a.context, this.update = a.update, this.tweens = [], this.current = a.current;
            var b, c;
            for(b in a.values)c = a.values[b], this.current[b] !== c && this.tweens.push(new R({
                name: b,
                from: this.current[b],
                to: c,
                duration: a.duration,
                delay: a.delay,
                ease: a.ease,
                autoplay: !1
            }));
            this.play();
        }, a.render = function(a) {
            var b, c, d = this.tweens.length, e = !1;
            for(b = d; b--;)c = this.tweens[b], c.context && (c.render(a), this.current[c.name] = c.value, e = !0);
            return e ? void (this.update && this.update.call(this.context)) : this.destroy();
        }, a.destroy = function() {
            if (b.destroy.call(this), this.tweens) {
                var a, c = this.tweens.length;
                for(a = c; a--;)this.tweens[a].destroy();
                this.tweens = null, this.current = null;
            }
        };
    }), U = b.config = {
        debug: !1,
        defaultUnit: "px",
        defaultAngle: "deg",
        keepInherited: !1,
        hideBackface: !1,
        perspective: "",
        fallback: !G.transition,
        agentTests: []
    };
    b.fallback = function(a) {
        if (!G.transition) return U.fallback = !0;
        U.agentTests.push("(" + a + ")");
        var b = new RegExp(U.agentTests.join("|"), "i");
        U.fallback = b.test(navigator.userAgent);
    }, b.fallback("6.0.[2-5] Safari"), b.tween = function(a) {
        return new R(a);
    }, b.delay = function(a, b, c) {
        return new S({
            complete: b,
            duration: a,
            context: c
        });
    }, a.fn.tram = function(a) {
        return b.call(null, this, a);
    };
    var V = a.style, W = a.css, X = {
        transform: G.transform && G.transform.css
    }, Y = {
        color: [
            O,
            u
        ],
        background: [
            O,
            u,
            "background-color"
        ],
        "outline-color": [
            O,
            u
        ],
        "border-color": [
            O,
            u
        ],
        "border-top-color": [
            O,
            u
        ],
        "border-right-color": [
            O,
            u
        ],
        "border-bottom-color": [
            O,
            u
        ],
        "border-left-color": [
            O,
            u
        ],
        "border-width": [
            N,
            v
        ],
        "border-top-width": [
            N,
            v
        ],
        "border-right-width": [
            N,
            v
        ],
        "border-bottom-width": [
            N,
            v
        ],
        "border-left-width": [
            N,
            v
        ],
        "border-spacing": [
            N,
            v
        ],
        "letter-spacing": [
            N,
            v
        ],
        margin: [
            N,
            v
        ],
        "margin-top": [
            N,
            v
        ],
        "margin-right": [
            N,
            v
        ],
        "margin-bottom": [
            N,
            v
        ],
        "margin-left": [
            N,
            v
        ],
        padding: [
            N,
            v
        ],
        "padding-top": [
            N,
            v
        ],
        "padding-right": [
            N,
            v
        ],
        "padding-bottom": [
            N,
            v
        ],
        "padding-left": [
            N,
            v
        ],
        "outline-width": [
            N,
            v
        ],
        opacity: [
            N,
            t
        ],
        top: [
            N,
            w
        ],
        right: [
            N,
            w
        ],
        bottom: [
            N,
            w
        ],
        left: [
            N,
            w
        ],
        "font-size": [
            N,
            w
        ],
        "text-indent": [
            N,
            w
        ],
        "word-spacing": [
            N,
            w
        ],
        width: [
            N,
            w
        ],
        "min-width": [
            N,
            w
        ],
        "max-width": [
            N,
            w
        ],
        height: [
            N,
            w
        ],
        "min-height": [
            N,
            w
        ],
        "max-height": [
            N,
            w
        ],
        "line-height": [
            N,
            y
        ],
        "scroll-top": [
            P,
            t,
            "scrollTop"
        ],
        "scroll-left": [
            P,
            t,
            "scrollLeft"
        ]
    }, Z = {};
    G.transform && (Y.transform = [
        Q
    ], Z = {
        x: [
            w,
            "translateX"
        ],
        y: [
            w,
            "translateY"
        ],
        rotate: [
            x
        ],
        rotateX: [
            x
        ],
        rotateY: [
            x
        ],
        scale: [
            t
        ],
        scaleX: [
            t
        ],
        scaleY: [
            t
        ],
        skew: [
            x
        ],
        skewX: [
            x
        ],
        skewY: [
            x
        ]
    }), G.transform && G.backface && (Z.z = [
        w,
        "translateZ"
    ], Z.rotateZ = [
        x
    ], Z.scaleZ = [
        t
    ], Z.perspective = [
        v
    ]);
    var $ = /ms/, _ = /s|\./;
    return a.tram = b;
}(window.jQuery);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3NoYXJlZC9yZW5kZXIvcGx1Z2lucy9CYXNlU2l0ZU1vZHVsZXMvdHJhbS1taW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgZXNsaW50LWNvbW1lbnRzL25vLXVubGltaXRlZC1kaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyohXG4gKiB0cmFtLmpzIHYwLjguMi1nbG9iYWxcbiAqIENyb3NzLWJyb3dzZXIgQ1NTMyB0cmFuc2l0aW9ucyBpbiBKYXZhU2NyaXB0XG4gKiBodHRwczovL2dpdGh1Yi5jb20vYmt3bGQvdHJhbVxuICogTUlUIExpY2Vuc2VcbiAqL1xuLyogcHJldHRpZXItaWdub3JlICovXG53aW5kb3cudHJhbT1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEsYil7dmFyIGM9bmV3IE0uQmFyZTtyZXR1cm4gYy5pbml0KGEsYil9ZnVuY3Rpb24gYyhhKXtyZXR1cm4gYS5yZXBsYWNlKC9bQS1aXS9nLGZ1bmN0aW9uKGEpe3JldHVyblwiLVwiK2EudG9Mb3dlckNhc2UoKX0pO31mdW5jdGlvbiBkKGEpe3ZhciBiPXBhcnNlSW50KGEuc2xpY2UoMSksMTYpLGM9Yj4+MTYmMjU1LGQ9Yj4+OCYyNTUsZT0yNTUmYjtyZXR1cm5bYyxkLGVdfWZ1bmN0aW9uIGUoYSxiLGMpe3JldHVyblwiI1wiKygxPDwyNHxhPDwxNnxiPDw4fGMpLnRvU3RyaW5nKDE2KS5zbGljZSgxKX1mdW5jdGlvbiBmKCl7fWZ1bmN0aW9uIGcoYSxiKXtqKFwiVHlwZSB3YXJuaW5nOiBFeHBlY3RlZDogW1wiK2ErXCJdIEdvdDogW1wiK3R5cGVvZiBiK1wiXSBcIitiKX1mdW5jdGlvbiBoKGEsYixjKXtqKFwiVW5pdHMgZG8gbm90IG1hdGNoIFtcIithK1wiXTogXCIrYitcIiwgXCIrYyl9ZnVuY3Rpb24gaShhLGIsYyl7aWYodm9pZCAwIT09YiYmKGM9Yiksdm9pZCAwPT09YSlyZXR1cm4gYzt2YXIgZD1jO3JldHVybiAkLnRlc3QoYSl8fCFfLnRlc3QoYSk/ZD1wYXJzZUludChhLDEwKTpfLnRlc3QoYSkmJihkPTFlMypwYXJzZUZsb2F0KGEpKSwwPmQmJihkPTApLGQ9PT1kP2Q6Y31mdW5jdGlvbiBqKGEpe1UuZGVidWcmJndpbmRvdyYmd2luZG93LmNvbnNvbGUud2FybihhKX1mdW5jdGlvbiBrKGEpe2Zvcih2YXIgYj0tMSxjPWE/YS5sZW5ndGg6MCxkPVtdOysrYjxjOyl7dmFyIGU9YVtiXTtlJiZkLnB1c2goZSl9cmV0dXJuIGR9dmFyIGw9ZnVuY3Rpb24oYSxiLGMpe2Z1bmN0aW9uIGQoYSl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGF9ZnVuY3Rpb24gZShhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBhfWZ1bmN0aW9uIGYoKXt9ZnVuY3Rpb24gZyhoLGkpe2Z1bmN0aW9uIGooKXt2YXIgYT1uZXcgaztyZXR1cm4gZShhLmluaXQpJiZhLmluaXQuYXBwbHkoYSxhcmd1bWVudHMpLGF9ZnVuY3Rpb24gaygpe31pPT09YyYmKGk9aCxoPU9iamVjdCksai5CYXJlPWs7dmFyIGwsbT1mW2FdPWhbYV0sbj1rW2FdPWpbYV09bmV3IGY7cmV0dXJuIG4uY29uc3RydWN0b3I9aixqLm1peGluPWZ1bmN0aW9uKGIpe3JldHVybiBrW2FdPWpbYV09ZyhqLGIpW2FdLGp9LGoub3Blbj1mdW5jdGlvbihhKXtpZihsPXt9LGUoYSk/bD1hLmNhbGwoaixuLG0saixoKTpkKGEpJiYobD1hKSxkKGwpKWZvcih2YXIgYyBpbiBsKWIuY2FsbChsLGMpJiYobltjXT1sW2NdKTtyZXR1cm4gZShuLmluaXQpfHwobi5pbml0PWgpLGp9LGoub3BlbihpKX1yZXR1cm4gZ30oXCJwcm90b3R5cGVcIix7fS5oYXNPd25Qcm9wZXJ0eSksbT17ZWFzZTpbXCJlYXNlXCIsZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9KGEvPWQpKmEsZj1lKmE7cmV0dXJuIGIrYyooLTIuNzUqZiplKzExKmUqZSstMTUuNSpmKzgqZSsuMjUqYSl9XSxcImVhc2UtaW5cIjpbXCJlYXNlLWluXCIsZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9KGEvPWQpKmEsZj1lKmE7cmV0dXJuIGIrYyooLTEqZiplKzMqZSplKy0zKmYrMiplKX1dLFwiZWFzZS1vdXRcIjpbXCJlYXNlLW91dFwiLGZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPShhLz1kKSphLGY9ZSphO3JldHVybiBiK2MqKC4zKmYqZSstMS42KmUqZSsyLjIqZistMS44KmUrMS45KmEpfV0sXCJlYXNlLWluLW91dFwiOltcImVhc2UtaW4tb3V0XCIsZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9KGEvPWQpKmEsZj1lKmE7cmV0dXJuIGIrYyooMipmKmUrLTUqZSplKzIqZisyKmUpfV0sbGluZWFyOltcImxpbmVhclwiLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBjKmEvZCtifV0sXCJlYXNlLWluLXF1YWRcIjpbXCJjdWJpYy1iZXppZXIoMC41NTAsIDAuMDg1LCAwLjY4MCwgMC41MzApXCIsZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIGMqKGEvPWQpKmErYn1dLFwiZWFzZS1vdXQtcXVhZFwiOltcImN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MClcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4tYyooYS89ZCkqKGEtMikrYn1dLFwiZWFzZS1pbi1vdXQtcXVhZFwiOltcImN1YmljLWJlemllcigwLjQ1NSwgMC4wMzAsIDAuNTE1LCAwLjk1NSlcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4oYS89ZC8yKTwxP2MvMiphKmErYjotYy8yKigtLWEqKGEtMiktMSkrYn1dLFwiZWFzZS1pbi1jdWJpY1wiOltcImN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MClcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gYyooYS89ZCkqYSphK2J9XSxcImVhc2Utb3V0LWN1YmljXCI6W1wiY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEpXCIsZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIGMqKChhPWEvZC0xKSphKmErMSkrYn1dLFwiZWFzZS1pbi1vdXQtY3ViaWNcIjpbXCJjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSlcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4oYS89ZC8yKTwxP2MvMiphKmEqYStiOmMvMiooKGEtPTIpKmEqYSsyKStifV0sXCJlYXNlLWluLXF1YXJ0XCI6W1wiY3ViaWMtYmV6aWVyKDAuODk1LCAwLjAzMCwgMC42ODUsIDAuMjIwKVwiLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBjKihhLz1kKSphKmEqYStifV0sXCJlYXNlLW91dC1xdWFydFwiOltcImN1YmljLWJlemllcigwLjE2NSwgMC44NDAsIDAuNDQwLCAxKVwiLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybi1jKigoYT1hL2QtMSkqYSphKmEtMSkrYn1dLFwiZWFzZS1pbi1vdXQtcXVhcnRcIjpbXCJjdWJpYy1iZXppZXIoMC43NzAsIDAsIDAuMTc1LCAxKVwiLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybihhLz1kLzIpPDE/Yy8yKmEqYSphKmErYjotYy8yKigoYS09MikqYSphKmEtMikrYn1dLFwiZWFzZS1pbi1xdWludFwiOltcImN1YmljLWJlemllcigwLjc1NSwgMC4wNTAsIDAuODU1LCAwLjA2MClcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gYyooYS89ZCkqYSphKmEqYStifV0sXCJlYXNlLW91dC1xdWludFwiOltcImN1YmljLWJlemllcigwLjIzMCwgMSwgMC4zMjAsIDEpXCIsZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIGMqKChhPWEvZC0xKSphKmEqYSphKzEpK2J9XSxcImVhc2UtaW4tb3V0LXF1aW50XCI6W1wiY3ViaWMtYmV6aWVyKDAuODYwLCAwLCAwLjA3MCwgMSlcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4oYS89ZC8yKTwxP2MvMiphKmEqYSphKmErYjpjLzIqKChhLT0yKSphKmEqYSphKzIpK2J9XSxcImVhc2UtaW4tc2luZVwiOltcImN1YmljLWJlemllcigwLjQ3MCwgMCwgMC43NDUsIDAuNzE1KVwiLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybi1jKk1hdGguY29zKGEvZCooTWF0aC5QSS8yKSkrYytifV0sXCJlYXNlLW91dC1zaW5lXCI6W1wiY3ViaWMtYmV6aWVyKDAuMzkwLCAwLjU3NSwgMC41NjUsIDEpXCIsZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIGMqTWF0aC5zaW4oYS9kKihNYXRoLlBJLzIpKStifV0sXCJlYXNlLWluLW91dC1zaW5lXCI6W1wiY3ViaWMtYmV6aWVyKDAuNDQ1LCAwLjA1MCwgMC41NTAsIDAuOTUwKVwiLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybi1jLzIqKE1hdGguY29zKE1hdGguUEkqYS9kKS0xKStifV0sXCJlYXNlLWluLWV4cG9cIjpbXCJjdWJpYy1iZXppZXIoMC45NTAsIDAuMDUwLCAwLjc5NSwgMC4wMzUpXCIsZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIDA9PT1hP2I6YypNYXRoLnBvdygyLDEwKihhL2QtMSkpK2J9XSxcImVhc2Utb3V0LWV4cG9cIjpbXCJjdWJpYy1iZXppZXIoMC4xOTAsIDEsIDAuMjIwLCAxKVwiLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBhPT09ZD9iK2M6YyooLU1hdGgucG93KDIsLTEwKmEvZCkrMSkrYn1dLFwiZWFzZS1pbi1vdXQtZXhwb1wiOltcImN1YmljLWJlemllcigxLCAwLCAwLCAxKVwiLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiAwPT09YT9iOmE9PT1kP2IrYzooYS89ZC8yKTwxP2MvMipNYXRoLnBvdygyLDEwKihhLTEpKStiOmMvMiooLU1hdGgucG93KDIsLTEwKi0tYSkrMikrYn1dLFwiZWFzZS1pbi1jaXJjXCI6W1wiY3ViaWMtYmV6aWVyKDAuNjAwLCAwLjA0MCwgMC45ODAsIDAuMzM1KVwiLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybi1jKihNYXRoLnNxcnQoMS0oYS89ZCkqYSktMSkrYn1dLFwiZWFzZS1vdXQtY2lyY1wiOltcImN1YmljLWJlemllcigwLjA3NSwgMC44MjAsIDAuMTY1LCAxKVwiLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBjKk1hdGguc3FydCgxLShhPWEvZC0xKSphKStifV0sXCJlYXNlLWluLW91dC1jaXJjXCI6W1wiY3ViaWMtYmV6aWVyKDAuNzg1LCAwLjEzNSwgMC4xNTAsIDAuODYwKVwiLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybihhLz1kLzIpPDE/LWMvMiooTWF0aC5zcXJ0KDEtYSphKS0xKStiOmMvMiooTWF0aC5zcXJ0KDEtKGEtPTIpKmEpKzEpK2J9XSxcImVhc2UtaW4tYmFja1wiOltcImN1YmljLWJlemllcigwLjYwMCwgLTAuMjgwLCAwLjczNSwgMC4wNDUpXCIsZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9MS43MDE1OCksYyooYS89ZCkqYSooKGUrMSkqYS1lKStifV0sXCJlYXNlLW91dC1iYWNrXCI6W1wiY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEuMjc1KVwiLGZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPTEuNzAxNTgpLGMqKChhPWEvZC0xKSphKigoZSsxKSphK2UpKzEpK2J9XSxcImVhc2UtaW4tb3V0LWJhY2tcIjpbXCJjdWJpYy1iZXppZXIoMC42ODAsIC0wLjU1MCwgMC4yNjUsIDEuNTUwKVwiLGZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPTEuNzAxNTgpLChhLz1kLzIpPDE/Yy8yKmEqYSooKChlKj0xLjUyNSkrMSkqYS1lKStiOmMvMiooKGEtPTIpKmEqKCgoZSo9MS41MjUpKzEpKmErZSkrMikrYn1dfSxuPXtcImVhc2UtaW4tYmFja1wiOlwiY3ViaWMtYmV6aWVyKDAuNjAwLCAwLCAwLjczNSwgMC4wNDUpXCIsXCJlYXNlLW91dC1iYWNrXCI6XCJjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMSlcIixcImVhc2UtaW4tb3V0LWJhY2tcIjpcImN1YmljLWJlemllcigwLjY4MCwgMCwgMC4yNjUsIDEpXCJ9LG89ZG9jdW1lbnQscD13aW5kb3cscT1cImJrd2xkLXRyYW1cIixyPS9bXFwtXFwuMC05XS9nLHM9L1tBLVpdLyx0PVwibnVtYmVyXCIsdT0vXihyZ2J8IykvLHY9LyhlbXxjbXxtbXxpbnxwdHxwY3xweCkkLyx3PS8oZW18Y218bW18aW58cHR8cGN8cHh8JSkkLyx4PS8oZGVnfHJhZHx0dXJuKSQvLHk9XCJ1bml0bGVzc1wiLHo9LyhhbGx8bm9uZSkgMHMgZWFzZSAwcy8sQT0vXih3aWR0aHxoZWlnaHQpJC8sQj1cIiBcIixDPW8uY3JlYXRlRWxlbWVudChcImFcIiksRD1bXCJXZWJraXRcIixcIk1velwiLFwiT1wiLFwibXNcIl0sRT1bXCItd2Via2l0LVwiLFwiLW1vei1cIixcIi1vLVwiLFwiLW1zLVwiXSxGPWZ1bmN0aW9uKGEpe2lmKGEgaW4gQy5zdHlsZSlyZXR1cm57ZG9tOmEsY3NzOmF9O3ZhciBiLGMsZD1cIlwiLGU9YS5zcGxpdChcIi1cIik7Zm9yKGI9MDtiPGUubGVuZ3RoO2IrKylkKz1lW2JdLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2VbYl0uc2xpY2UoMSk7Zm9yKGI9MDtiPEQubGVuZ3RoO2IrKylpZihjPURbYl0rZCxjIGluIEMuc3R5bGUpcmV0dXJue2RvbTpjLGNzczpFW2JdK2F9fSxHPWIuc3VwcG9ydD17YmluZDpGdW5jdGlvbi5wcm90b3R5cGUuYmluZCx0cmFuc2Zvcm06RihcInRyYW5zZm9ybVwiKSx0cmFuc2l0aW9uOkYoXCJ0cmFuc2l0aW9uXCIpLGJhY2tmYWNlOkYoXCJiYWNrZmFjZS12aXNpYmlsaXR5XCIpLHRpbWluZzpGKFwidHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cIil9O2lmKEcudHJhbnNpdGlvbil7dmFyIEg9Ry50aW1pbmcuZG9tO2lmKEMuc3R5bGVbSF09bVtcImVhc2UtaW4tYmFja1wiXVswXSwhQy5zdHlsZVtIXSlmb3IodmFyIEkgaW4gbiltW0ldWzBdPW5bSV19dmFyIEo9Yi5mcmFtZT1mdW5jdGlvbigpe3ZhciBhPXAucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxwLndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8cC5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHAub1JlcXVlc3RBbmltYXRpb25GcmFtZXx8cC5tc1JlcXVlc3RBbmltYXRpb25GcmFtZTtyZXR1cm4gYSYmRy5iaW5kP2EuYmluZChwKTpmdW5jdGlvbihhKXtwLnNldFRpbWVvdXQoYSwxNil9fSgpLEs9Yi5ub3c9ZnVuY3Rpb24oKXt2YXIgYT1wLnBlcmZvcm1hbmNlLGI9YSYmKGEubm93fHxhLndlYmtpdE5vd3x8YS5tc05vd3x8YS5tb3pOb3cpO3JldHVybiBiJiZHLmJpbmQ/Yi5iaW5kKGEpOkRhdGUubm93fHxmdW5jdGlvbigpe3JldHVybituZXcgRGF0ZX19KCksTD1sKGZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGQoYSxiKXt2YXIgYz1rKChcIlwiK2EpLnNwbGl0KEIpKSxkPWNbMF07Yj1ifHx7fTt2YXIgZT1ZW2RdO2lmKCFlKXJldHVybiBqKFwiVW5zdXBwb3J0ZWQgcHJvcGVydHk6IFwiK2QpO2lmKCFiLndlYWt8fCF0aGlzLnByb3BzW2RdKXt2YXIgZj1lWzBdLGc9dGhpcy5wcm9wc1tkXTtyZXR1cm4gZ3x8KGc9dGhpcy5wcm9wc1tkXT1uZXcgZi5CYXJlKSxnLmluaXQodGhpcy4kZWwsYyxlLGIpLGd9fWZ1bmN0aW9uIGUoYSxiLGMpe2lmKGEpe3ZhciBlPXR5cGVvZiBhO2lmKGJ8fCh0aGlzLnRpbWVyJiZ0aGlzLnRpbWVyLmRlc3Ryb3koKSx0aGlzLnF1ZXVlPVtdLHRoaXMuYWN0aXZlPSExKSxcIm51bWJlclwiPT1lJiZiKXJldHVybiB0aGlzLnRpbWVyPW5ldyBTKHtkdXJhdGlvbjphLGNvbnRleHQ6dGhpcyxjb21wbGV0ZTpofSksdm9pZCh0aGlzLmFjdGl2ZT0hMCk7aWYoXCJzdHJpbmdcIj09ZSYmYil7c3dpdGNoKGEpe2Nhc2VcImhpZGVcIjpvLmNhbGwodGhpcyk7YnJlYWs7Y2FzZVwic3RvcFwiOmwuY2FsbCh0aGlzKTticmVhaztjYXNlXCJyZWRyYXdcIjpwLmNhbGwodGhpcyk7YnJlYWs7ZGVmYXVsdDpkLmNhbGwodGhpcyxhLGMmJmNbMV0pfXJldHVybiBoLmNhbGwodGhpcyl9aWYoXCJmdW5jdGlvblwiPT1lKXJldHVybiB2b2lkIGEuY2FsbCh0aGlzLHRoaXMpO2lmKFwib2JqZWN0XCI9PWUpe3ZhciBmPTA7dS5jYWxsKHRoaXMsYSxmdW5jdGlvbihhLGIpe2Euc3Bhbj5mJiYoZj1hLnNwYW4pLGEuc3RvcCgpLGEuYW5pbWF0ZShiKX0sZnVuY3Rpb24oYSl7XCJ3YWl0XCJpbiBhJiYoZj1pKGEud2FpdCwwKSl9KSx0LmNhbGwodGhpcyksZj4wJiYodGhpcy50aW1lcj1uZXcgUyh7ZHVyYXRpb246Zixjb250ZXh0OnRoaXN9KSx0aGlzLmFjdGl2ZT0hMCxiJiYodGhpcy50aW1lci5jb21wbGV0ZT1oKSk7dmFyIGc9dGhpcyxqPSExLGs9e307SihmdW5jdGlvbigpe3UuY2FsbChnLGEsZnVuY3Rpb24oYSl7YS5hY3RpdmUmJihqPSEwLGtbYS5uYW1lXT1hLm5leHRTdHlsZSl9KSxqJiZnLiRlbC5jc3Moayl9KX19fWZ1bmN0aW9uIGYoYSl7YT1pKGEsMCksdGhpcy5hY3RpdmU/dGhpcy5xdWV1ZS5wdXNoKHtvcHRpb25zOmF9KToodGhpcy50aW1lcj1uZXcgUyh7ZHVyYXRpb246YSxjb250ZXh0OnRoaXMsY29tcGxldGU6aH0pLHRoaXMuYWN0aXZlPSEwKX1mdW5jdGlvbiBnKGEpe3JldHVybiB0aGlzLmFjdGl2ZT8odGhpcy5xdWV1ZS5wdXNoKHtvcHRpb25zOmEsYXJnczphcmd1bWVudHN9KSx2b2lkKHRoaXMudGltZXIuY29tcGxldGU9aCkpOmooXCJObyBhY3RpdmUgdHJhbnNpdGlvbiB0aW1lci4gVXNlIHN0YXJ0KCkgb3Igd2FpdCgpIGJlZm9yZSB0aGVuKCkuXCIpfWZ1bmN0aW9uIGgoKXtpZih0aGlzLnRpbWVyJiZ0aGlzLnRpbWVyLmRlc3Ryb3koKSx0aGlzLmFjdGl2ZT0hMSx0aGlzLnF1ZXVlLmxlbmd0aCl7dmFyIGE9dGhpcy5xdWV1ZS5zaGlmdCgpO2UuY2FsbCh0aGlzLGEub3B0aW9ucywhMCxhLmFyZ3MpfX1mdW5jdGlvbiBsKGEpe3RoaXMudGltZXImJnRoaXMudGltZXIuZGVzdHJveSgpLHRoaXMucXVldWU9W10sdGhpcy5hY3RpdmU9ITE7dmFyIGI7XCJzdHJpbmdcIj09dHlwZW9mIGE/KGI9e30sYlthXT0xKTpiPVwib2JqZWN0XCI9PXR5cGVvZiBhJiZudWxsIT1hP2E6dGhpcy5wcm9wcyx1LmNhbGwodGhpcyxiLHYpLHQuY2FsbCh0aGlzKX1mdW5jdGlvbiBtKGEpe2wuY2FsbCh0aGlzLGEpLHUuY2FsbCh0aGlzLGEsdyx4KX1mdW5jdGlvbiBuKGEpe1wic3RyaW5nXCIhPXR5cGVvZiBhJiYoYT1cImJsb2NrXCIpLHRoaXMuZWwuc3R5bGUuZGlzcGxheT1hfWZ1bmN0aW9uIG8oKXtsLmNhbGwodGhpcyksdGhpcy5lbC5zdHlsZS5kaXNwbGF5PVwibm9uZVwifWZ1bmN0aW9uIHAoKXt0aGlzLmVsLm9mZnNldEhlaWdodH1mdW5jdGlvbiByKCl7bC5jYWxsKHRoaXMpLGEucmVtb3ZlRGF0YSh0aGlzLmVsLHEpLHRoaXMuJGVsPXRoaXMuZWw9bnVsbH1mdW5jdGlvbiB0KCl7dmFyIGEsYixjPVtdO3RoaXMudXBzdHJlYW0mJmMucHVzaCh0aGlzLnVwc3RyZWFtKTtmb3IoYSBpbiB0aGlzLnByb3BzKWI9dGhpcy5wcm9wc1thXSxiLmFjdGl2ZSYmYy5wdXNoKGIuc3RyaW5nKTtjPWMuam9pbihcIixcIiksdGhpcy5zdHlsZSE9PWMmJih0aGlzLnN0eWxlPWMsdGhpcy5lbC5zdHlsZVtHLnRyYW5zaXRpb24uZG9tXT1jKX1mdW5jdGlvbiB1KGEsYixlKXt2YXIgZixnLGgsaSxqPWIhPT12LGs9e307Zm9yKGYgaW4gYSloPWFbZl0sZiBpbiBaPyhrLnRyYW5zZm9ybXx8KGsudHJhbnNmb3JtPXt9KSxrLnRyYW5zZm9ybVtmXT1oKToocy50ZXN0KGYpJiYoZj1jKGYpKSxmIGluIFk/a1tmXT1oOihpfHwoaT17fSksaVtmXT1oKSk7Zm9yKGYgaW4gayl7aWYoaD1rW2ZdLGc9dGhpcy5wcm9wc1tmXSwhZyl7aWYoIWopY29udGludWU7Zz1kLmNhbGwodGhpcyxmKX1iLmNhbGwodGhpcyxnLGgpfWUmJmkmJmUuY2FsbCh0aGlzLGkpfWZ1bmN0aW9uIHYoYSl7YS5zdG9wKCl9ZnVuY3Rpb24gdyhhLGIpe2Euc2V0KGIpfWZ1bmN0aW9uIHgoYSl7dGhpcy4kZWwuY3NzKGEpfWZ1bmN0aW9uIHkoYSxjKXtiW2FdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2hpbGRyZW4/QS5jYWxsKHRoaXMsYyxhcmd1bWVudHMpOih0aGlzLmVsJiZjLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzKX19ZnVuY3Rpb24gQShhLGIpe3ZhciBjLGQ9dGhpcy5jaGlsZHJlbi5sZW5ndGg7Zm9yKGM9MDtkPmM7YysrKWEuYXBwbHkodGhpcy5jaGlsZHJlbltjXSxiKTtyZXR1cm4gdGhpc31iLmluaXQ9ZnVuY3Rpb24oYil7aWYodGhpcy4kZWw9YShiKSx0aGlzLmVsPXRoaXMuJGVsWzBdLHRoaXMucHJvcHM9e30sdGhpcy5xdWV1ZT1bXSx0aGlzLnN0eWxlPVwiXCIsdGhpcy5hY3RpdmU9ITEsVS5rZWVwSW5oZXJpdGVkJiYhVS5mYWxsYmFjayl7dmFyIGM9Vyh0aGlzLmVsLFwidHJhbnNpdGlvblwiKTtjJiYhei50ZXN0KGMpJiYodGhpcy51cHN0cmVhbT1jKX1HLmJhY2tmYWNlJiZVLmhpZGVCYWNrZmFjZSYmVih0aGlzLmVsLEcuYmFja2ZhY2UuY3NzLFwiaGlkZGVuXCIpfSx5KFwiYWRkXCIsZCkseShcInN0YXJ0XCIsZSkseShcIndhaXRcIixmKSx5KFwidGhlblwiLGcpLHkoXCJuZXh0XCIsaCkseShcInN0b3BcIixsKSx5KFwic2V0XCIsbSkseShcInNob3dcIixuKSx5KFwiaGlkZVwiLG8pLHkoXCJyZWRyYXdcIixwKSx5KFwiZGVzdHJveVwiLHIpfSksTT1sKEwsZnVuY3Rpb24oYil7ZnVuY3Rpb24gYyhiLGMpe3ZhciBkPWEuZGF0YShiLHEpfHxhLmRhdGEoYixxLG5ldyBMLkJhcmUpO3JldHVybiBkLmVsfHxkLmluaXQoYiksYz9kLnN0YXJ0KGMpOmR9Yi5pbml0PWZ1bmN0aW9uKGIsZCl7dmFyIGU9YShiKTtpZighZS5sZW5ndGgpcmV0dXJuIHRoaXM7aWYoMT09PWUubGVuZ3RoKXJldHVybiBjKGVbMF0sZCk7dmFyIGY9W107cmV0dXJuIGUuZWFjaChmdW5jdGlvbihhLGIpe2YucHVzaChjKGIsZCkpfSksdGhpcy5jaGlsZHJlbj1mLHRoaXN9fSksTj1sKGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoKXt2YXIgYT10aGlzLmdldCgpO3RoaXMudXBkYXRlKFwiYXV0b1wiKTt2YXIgYj10aGlzLmdldCgpO3JldHVybiB0aGlzLnVwZGF0ZShhKSxifWZ1bmN0aW9uIGMoYSxiLGMpe3JldHVybiB2b2lkIDAhPT1iJiYoYz1iKSxhIGluIG0/YTpjfWZ1bmN0aW9uIGQoYSl7dmFyIGI9L3JnYmE/XFwoKFxcZCspLFxccyooXFxkKyksXFxzKihcXGQrKS8uZXhlYyhhKTtyZXR1cm4gKGI/ZShiWzFdLGJbMl0sYlszXSk6YSkucmVwbGFjZSgvIyhcXHcpKFxcdykoXFx3KSQvLFwiIyQxJDEkMiQyJDMkM1wiKTt9dmFyIGY9e2R1cmF0aW9uOjUwMCxlYXNlOlwiZWFzZVwiLGRlbGF5OjB9O2EuaW5pdD1mdW5jdGlvbihhLGIsZCxlKXt0aGlzLiRlbD1hLHRoaXMuZWw9YVswXTt2YXIgZz1iWzBdO2RbMl0mJihnPWRbMl0pLFhbZ10mJihnPVhbZ10pLHRoaXMubmFtZT1nLHRoaXMudHlwZT1kWzFdLHRoaXMuZHVyYXRpb249aShiWzFdLHRoaXMuZHVyYXRpb24sZi5kdXJhdGlvbiksdGhpcy5lYXNlPWMoYlsyXSx0aGlzLmVhc2UsZi5lYXNlKSx0aGlzLmRlbGF5PWkoYlszXSx0aGlzLmRlbGF5LGYuZGVsYXkpLHRoaXMuc3Bhbj10aGlzLmR1cmF0aW9uK3RoaXMuZGVsYXksdGhpcy5hY3RpdmU9ITEsdGhpcy5uZXh0U3R5bGU9bnVsbCx0aGlzLmF1dG89QS50ZXN0KHRoaXMubmFtZSksdGhpcy51bml0PWUudW5pdHx8dGhpcy51bml0fHxVLmRlZmF1bHRVbml0LHRoaXMuYW5nbGU9ZS5hbmdsZXx8dGhpcy5hbmdsZXx8VS5kZWZhdWx0QW5nbGUsVS5mYWxsYmFja3x8ZS5mYWxsYmFjaz90aGlzLmFuaW1hdGU9dGhpcy5mYWxsYmFjazoodGhpcy5hbmltYXRlPXRoaXMudHJhbnNpdGlvbix0aGlzLnN0cmluZz10aGlzLm5hbWUrQit0aGlzLmR1cmF0aW9uK1wibXNcIisoXCJlYXNlXCIhPXRoaXMuZWFzZT9CK21bdGhpcy5lYXNlXVswXTpcIlwiKSsodGhpcy5kZWxheT9CK3RoaXMuZGVsYXkrXCJtc1wiOlwiXCIpKX0sYS5zZXQ9ZnVuY3Rpb24oYSl7YT10aGlzLmNvbnZlcnQoYSx0aGlzLnR5cGUpLHRoaXMudXBkYXRlKGEpLHRoaXMucmVkcmF3KCl9LGEudHJhbnNpdGlvbj1mdW5jdGlvbihhKXt0aGlzLmFjdGl2ZT0hMCxhPXRoaXMuY29udmVydChhLHRoaXMudHlwZSksdGhpcy5hdXRvJiYoXCJhdXRvXCI9PXRoaXMuZWwuc3R5bGVbdGhpcy5uYW1lXSYmKHRoaXMudXBkYXRlKHRoaXMuZ2V0KCkpLHRoaXMucmVkcmF3KCkpLFwiYXV0b1wiPT1hJiYoYT1iLmNhbGwodGhpcykpKSx0aGlzLm5leHRTdHlsZT1hfSxhLmZhbGxiYWNrPWZ1bmN0aW9uKGEpe3ZhciBjPXRoaXMuZWwuc3R5bGVbdGhpcy5uYW1lXXx8dGhpcy5jb252ZXJ0KHRoaXMuZ2V0KCksdGhpcy50eXBlKTthPXRoaXMuY29udmVydChhLHRoaXMudHlwZSksdGhpcy5hdXRvJiYoXCJhdXRvXCI9PWMmJihjPXRoaXMuY29udmVydCh0aGlzLmdldCgpLHRoaXMudHlwZSkpLFwiYXV0b1wiPT1hJiYoYT1iLmNhbGwodGhpcykpKSx0aGlzLnR3ZWVuPW5ldyBSKHtmcm9tOmMsdG86YSxkdXJhdGlvbjp0aGlzLmR1cmF0aW9uLGRlbGF5OnRoaXMuZGVsYXksZWFzZTp0aGlzLmVhc2UsdXBkYXRlOnRoaXMudXBkYXRlLGNvbnRleHQ6dGhpc30pfSxhLmdldD1mdW5jdGlvbigpe3JldHVybiBXKHRoaXMuZWwsdGhpcy5uYW1lKX0sYS51cGRhdGU9ZnVuY3Rpb24oYSl7Vih0aGlzLmVsLHRoaXMubmFtZSxhKX0sYS5zdG9wPWZ1bmN0aW9uKCl7KHRoaXMuYWN0aXZlfHx0aGlzLm5leHRTdHlsZSkmJih0aGlzLmFjdGl2ZT0hMSx0aGlzLm5leHRTdHlsZT1udWxsLFYodGhpcy5lbCx0aGlzLm5hbWUsdGhpcy5nZXQoKSkpO3ZhciBhPXRoaXMudHdlZW47YSYmYS5jb250ZXh0JiZhLmRlc3Ryb3koKX0sYS5jb252ZXJ0PWZ1bmN0aW9uKGEsYil7aWYoXCJhdXRvXCI9PWEmJnRoaXMuYXV0bylyZXR1cm4gYTt2YXIgYyxlPVwibnVtYmVyXCI9PXR5cGVvZiBhLGY9XCJzdHJpbmdcIj09dHlwZW9mIGE7c3dpdGNoKGIpe2Nhc2UgdDppZihlKXJldHVybiBhO2lmKGYmJlwiXCI9PT1hLnJlcGxhY2UocixcIlwiKSlyZXR1cm4rYTtjPVwibnVtYmVyKHVuaXRsZXNzKVwiO2JyZWFrO2Nhc2UgdTppZihmKXtpZihcIlwiPT09YSYmdGhpcy5vcmlnaW5hbClyZXR1cm4gdGhpcy5vcmlnaW5hbDtpZihiLnRlc3QoYSkpcmV0dXJuXCIjXCI9PWEuY2hhckF0KDApJiY3PT1hLmxlbmd0aD9hOmQoYSl9Yz1cImhleCBvciByZ2Igc3RyaW5nXCI7YnJlYWs7Y2FzZSB2OmlmKGUpcmV0dXJuIGErdGhpcy51bml0O2lmKGYmJmIudGVzdChhKSlyZXR1cm4gYTtjPVwibnVtYmVyKHB4KSBvciBzdHJpbmcodW5pdClcIjticmVhaztjYXNlIHc6aWYoZSlyZXR1cm4gYSt0aGlzLnVuaXQ7aWYoZiYmYi50ZXN0KGEpKXJldHVybiBhO2M9XCJudW1iZXIocHgpIG9yIHN0cmluZyh1bml0IG9yICUpXCI7YnJlYWs7Y2FzZSB4OmlmKGUpcmV0dXJuIGErdGhpcy5hbmdsZTtpZihmJiZiLnRlc3QoYSkpcmV0dXJuIGE7Yz1cIm51bWJlcihkZWcpIG9yIHN0cmluZyhhbmdsZSlcIjticmVhaztjYXNlIHk6aWYoZSlyZXR1cm4gYTtpZihmJiZ3LnRlc3QoYSkpcmV0dXJuIGE7Yz1cIm51bWJlcih1bml0bGVzcykgb3Igc3RyaW5nKHVuaXQgb3IgJSlcIn1yZXR1cm4gZyhjLGEpLGF9LGEucmVkcmF3PWZ1bmN0aW9uKCl7dGhpcy5lbC5vZmZzZXRIZWlnaHR9fSksTz1sKE4sZnVuY3Rpb24oYSxiKXthLmluaXQ9ZnVuY3Rpb24oKXtiLmluaXQuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMub3JpZ2luYWx8fCh0aGlzLm9yaWdpbmFsPXRoaXMuY29udmVydCh0aGlzLmdldCgpLHUpKX19KSxQPWwoTixmdW5jdGlvbihhLGIpe2EuaW5pdD1mdW5jdGlvbigpe2IuaW5pdC5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5hbmltYXRlPXRoaXMuZmFsbGJhY2t9LGEuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGVsW3RoaXMubmFtZV0oKX0sYS51cGRhdGU9ZnVuY3Rpb24oYSl7dGhpcy4kZWxbdGhpcy5uYW1lXShhKX19KSxRPWwoTixmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYSxiKXt2YXIgYyxkLGUsZixnO2ZvcihjIGluIGEpZj1aW2NdLGU9ZlswXSxkPWZbMV18fGMsZz10aGlzLmNvbnZlcnQoYVtjXSxlKSxiLmNhbGwodGhpcyxkLGcsZSl9YS5pbml0PWZ1bmN0aW9uKCl7Yi5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLmN1cnJlbnR8fCh0aGlzLmN1cnJlbnQ9e30sWi5wZXJzcGVjdGl2ZSYmVS5wZXJzcGVjdGl2ZSYmKHRoaXMuY3VycmVudC5wZXJzcGVjdGl2ZT1VLnBlcnNwZWN0aXZlLFYodGhpcy5lbCx0aGlzLm5hbWUsdGhpcy5zdHlsZSh0aGlzLmN1cnJlbnQpKSx0aGlzLnJlZHJhdygpKSl9LGEuc2V0PWZ1bmN0aW9uKGEpe2MuY2FsbCh0aGlzLGEsZnVuY3Rpb24oYSxiKXt0aGlzLmN1cnJlbnRbYV09Yn0pLFYodGhpcy5lbCx0aGlzLm5hbWUsdGhpcy5zdHlsZSh0aGlzLmN1cnJlbnQpKSx0aGlzLnJlZHJhdygpfSxhLnRyYW5zaXRpb249ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy52YWx1ZXMoYSk7dGhpcy50d2Vlbj1uZXcgVCh7Y3VycmVudDp0aGlzLmN1cnJlbnQsdmFsdWVzOmIsZHVyYXRpb246dGhpcy5kdXJhdGlvbixkZWxheTp0aGlzLmRlbGF5LGVhc2U6dGhpcy5lYXNlfSk7dmFyIGMsZD17fTtmb3IoYyBpbiB0aGlzLmN1cnJlbnQpZFtjXT1jIGluIGI/YltjXTp0aGlzLmN1cnJlbnRbY107dGhpcy5hY3RpdmU9ITAsdGhpcy5uZXh0U3R5bGU9dGhpcy5zdHlsZShkKX0sYS5mYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLnZhbHVlcyhhKTt0aGlzLnR3ZWVuPW5ldyBUKHtjdXJyZW50OnRoaXMuY3VycmVudCx2YWx1ZXM6YixkdXJhdGlvbjp0aGlzLmR1cmF0aW9uLGRlbGF5OnRoaXMuZGVsYXksZWFzZTp0aGlzLmVhc2UsdXBkYXRlOnRoaXMudXBkYXRlLGNvbnRleHQ6dGhpc30pfSxhLnVwZGF0ZT1mdW5jdGlvbigpe1YodGhpcy5lbCx0aGlzLm5hbWUsdGhpcy5zdHlsZSh0aGlzLmN1cnJlbnQpKX0sYS5zdHlsZT1mdW5jdGlvbihhKXt2YXIgYixjPVwiXCI7Zm9yKGIgaW4gYSljKz1iK1wiKFwiK2FbYl0rXCIpIFwiO3JldHVybiBjfSxhLnZhbHVlcz1mdW5jdGlvbihhKXt2YXIgYixkPXt9O3JldHVybiBjLmNhbGwodGhpcyxhLGZ1bmN0aW9uKGEsYyxlKXtkW2FdPWMsdm9pZCAwPT09dGhpcy5jdXJyZW50W2FdJiYoYj0wLH5hLmluZGV4T2YoXCJzY2FsZVwiKSYmKGI9MSksdGhpcy5jdXJyZW50W2FdPXRoaXMuY29udmVydChiLGUpKX0pLGR9fSksUj1sKGZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGMoYSl7MT09PW4ucHVzaChhKSYmSihnKX1mdW5jdGlvbiBnKCl7dmFyIGEsYixjLGQ9bi5sZW5ndGg7aWYoZClmb3IoSihnKSxiPUsoKSxhPWQ7YS0tOyljPW5bYV0sYyYmYy5yZW5kZXIoYil9ZnVuY3Rpb24gaShiKXt2YXIgYyxkPWEuaW5BcnJheShiLG4pO2Q+PTAmJihjPW4uc2xpY2UoZCsxKSxuLmxlbmd0aD1kLGMubGVuZ3RoJiYobj1uLmNvbmNhdChjKSkpfWZ1bmN0aW9uIGooYSl7cmV0dXJuIE1hdGgucm91bmQoYSpvKS9vfWZ1bmN0aW9uIGsoYSxiLGMpe3JldHVybiBlKGFbMF0rYyooYlswXS1hWzBdKSxhWzFdK2MqKGJbMV0tYVsxXSksYVsyXStjKihiWzJdLWFbMl0pKX12YXIgbD17ZWFzZTptLmVhc2VbMV0sZnJvbTowLHRvOjF9O2IuaW5pdD1mdW5jdGlvbihhKXt0aGlzLmR1cmF0aW9uPWEuZHVyYXRpb258fDAsdGhpcy5kZWxheT1hLmRlbGF5fHwwO3ZhciBiPWEuZWFzZXx8bC5lYXNlO21bYl0mJihiPW1bYl1bMV0pLFwiZnVuY3Rpb25cIiE9dHlwZW9mIGImJihiPWwuZWFzZSksdGhpcy5lYXNlPWIsdGhpcy51cGRhdGU9YS51cGRhdGV8fGYsdGhpcy5jb21wbGV0ZT1hLmNvbXBsZXRlfHxmLHRoaXMuY29udGV4dD1hLmNvbnRleHR8fHRoaXMsdGhpcy5uYW1lPWEubmFtZTt2YXIgYz1hLmZyb20sZD1hLnRvO3ZvaWQgMD09PWMmJihjPWwuZnJvbSksdm9pZCAwPT09ZCYmKGQ9bC50byksdGhpcy51bml0PWEudW5pdHx8XCJcIixcIm51bWJlclwiPT10eXBlb2YgYyYmXCJudW1iZXJcIj09dHlwZW9mIGQ/KHRoaXMuYmVnaW49Yyx0aGlzLmNoYW5nZT1kLWMpOnRoaXMuZm9ybWF0KGQsYyksdGhpcy52YWx1ZT10aGlzLmJlZ2luK3RoaXMudW5pdCx0aGlzLnN0YXJ0PUsoKSxhLmF1dG9wbGF5IT09ITEmJnRoaXMucGxheSgpfSxiLnBsYXk9ZnVuY3Rpb24oKXt0aGlzLmFjdGl2ZXx8KHRoaXMuc3RhcnR8fCh0aGlzLnN0YXJ0PUsoKSksdGhpcy5hY3RpdmU9ITAsYyh0aGlzKSl9LGIuc3RvcD1mdW5jdGlvbigpe3RoaXMuYWN0aXZlJiYodGhpcy5hY3RpdmU9ITEsaSh0aGlzKSl9LGIucmVuZGVyPWZ1bmN0aW9uKGEpe3ZhciBiLGM9YS10aGlzLnN0YXJ0O2lmKHRoaXMuZGVsYXkpe2lmKGM8PXRoaXMuZGVsYXkpcmV0dXJuO2MtPXRoaXMuZGVsYXl9aWYoYzx0aGlzLmR1cmF0aW9uKXt2YXIgZD10aGlzLmVhc2UoYywwLDEsdGhpcy5kdXJhdGlvbik7cmV0dXJuIGI9dGhpcy5zdGFydFJHQj9rKHRoaXMuc3RhcnRSR0IsdGhpcy5lbmRSR0IsZCk6aih0aGlzLmJlZ2luK2QqdGhpcy5jaGFuZ2UpLHRoaXMudmFsdWU9Yit0aGlzLnVuaXQsdm9pZCB0aGlzLnVwZGF0ZS5jYWxsKHRoaXMuY29udGV4dCx0aGlzLnZhbHVlKX1iPXRoaXMuZW5kSGV4fHx0aGlzLmJlZ2luK3RoaXMuY2hhbmdlLHRoaXMudmFsdWU9Yit0aGlzLnVuaXQsdGhpcy51cGRhdGUuY2FsbCh0aGlzLmNvbnRleHQsdGhpcy52YWx1ZSksdGhpcy5jb21wbGV0ZS5jYWxsKHRoaXMuY29udGV4dCksdGhpcy5kZXN0cm95KCl9LGIuZm9ybWF0PWZ1bmN0aW9uKGEsYil7aWYoYis9XCJcIixhKz1cIlwiLFwiI1wiPT1hLmNoYXJBdCgwKSlyZXR1cm4gdGhpcy5zdGFydFJHQj1kKGIpLHRoaXMuZW5kUkdCPWQoYSksdGhpcy5lbmRIZXg9YSx0aGlzLmJlZ2luPTAsdm9pZCh0aGlzLmNoYW5nZT0xKTtpZighdGhpcy51bml0KXt2YXIgYz1iLnJlcGxhY2UocixcIlwiKSxlPWEucmVwbGFjZShyLFwiXCIpO2MhPT1lJiZoKFwidHdlZW5cIixiLGEpLHRoaXMudW5pdD1jfWI9cGFyc2VGbG9hdChiKSxhPXBhcnNlRmxvYXQoYSksdGhpcy5iZWdpbj10aGlzLnZhbHVlPWIsdGhpcy5jaGFuZ2U9YS1ifSxiLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0aGlzLnN0b3AoKSx0aGlzLmNvbnRleHQ9bnVsbCx0aGlzLmVhc2U9dGhpcy51cGRhdGU9dGhpcy5jb21wbGV0ZT1mfTt2YXIgbj1bXSxvPTFlM30pLFM9bChSLGZ1bmN0aW9uKGEpe2EuaW5pdD1mdW5jdGlvbihhKXt0aGlzLmR1cmF0aW9uPWEuZHVyYXRpb258fDAsdGhpcy5jb21wbGV0ZT1hLmNvbXBsZXRlfHxmLHRoaXMuY29udGV4dD1hLmNvbnRleHQsdGhpcy5wbGF5KCl9LGEucmVuZGVyPWZ1bmN0aW9uKGEpe3ZhciBiPWEtdGhpcy5zdGFydDtiPHRoaXMuZHVyYXRpb258fCh0aGlzLmNvbXBsZXRlLmNhbGwodGhpcy5jb250ZXh0KSx0aGlzLmRlc3Ryb3koKSl9fSksVD1sKFIsZnVuY3Rpb24oYSxiKXthLmluaXQ9ZnVuY3Rpb24oYSl7dGhpcy5jb250ZXh0PWEuY29udGV4dCx0aGlzLnVwZGF0ZT1hLnVwZGF0ZSx0aGlzLnR3ZWVucz1bXSx0aGlzLmN1cnJlbnQ9YS5jdXJyZW50O3ZhciBiLGM7Zm9yKGIgaW4gYS52YWx1ZXMpYz1hLnZhbHVlc1tiXSx0aGlzLmN1cnJlbnRbYl0hPT1jJiZ0aGlzLnR3ZWVucy5wdXNoKG5ldyBSKHtuYW1lOmIsZnJvbTp0aGlzLmN1cnJlbnRbYl0sdG86YyxkdXJhdGlvbjphLmR1cmF0aW9uLGRlbGF5OmEuZGVsYXksZWFzZTphLmVhc2UsYXV0b3BsYXk6ITF9KSk7dGhpcy5wbGF5KCl9LGEucmVuZGVyPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZD10aGlzLnR3ZWVucy5sZW5ndGgsZT0hMTtmb3IoYj1kO2ItLTspYz10aGlzLnR3ZWVuc1tiXSxjLmNvbnRleHQmJihjLnJlbmRlcihhKSx0aGlzLmN1cnJlbnRbYy5uYW1lXT1jLnZhbHVlLGU9ITApO3JldHVybiBlP3ZvaWQodGhpcy51cGRhdGUmJnRoaXMudXBkYXRlLmNhbGwodGhpcy5jb250ZXh0KSk6dGhpcy5kZXN0cm95KCl9LGEuZGVzdHJveT1mdW5jdGlvbigpe2lmKGIuZGVzdHJveS5jYWxsKHRoaXMpLHRoaXMudHdlZW5zKXt2YXIgYSxjPXRoaXMudHdlZW5zLmxlbmd0aDtmb3IoYT1jO2EtLTspdGhpcy50d2VlbnNbYV0uZGVzdHJveSgpO3RoaXMudHdlZW5zPW51bGwsdGhpcy5jdXJyZW50PW51bGx9fX0pLFU9Yi5jb25maWc9e2RlYnVnOiExLGRlZmF1bHRVbml0OlwicHhcIixkZWZhdWx0QW5nbGU6XCJkZWdcIixrZWVwSW5oZXJpdGVkOiExLGhpZGVCYWNrZmFjZTohMSxwZXJzcGVjdGl2ZTpcIlwiLGZhbGxiYWNrOiFHLnRyYW5zaXRpb24sYWdlbnRUZXN0czpbXX07Yi5mYWxsYmFjaz1mdW5jdGlvbihhKXtpZighRy50cmFuc2l0aW9uKXJldHVybiBVLmZhbGxiYWNrPSEwO1UuYWdlbnRUZXN0cy5wdXNoKFwiKFwiK2ErXCIpXCIpO3ZhciBiPW5ldyBSZWdFeHAoVS5hZ2VudFRlc3RzLmpvaW4oXCJ8XCIpLFwiaVwiKTtVLmZhbGxiYWNrPWIudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KX0sYi5mYWxsYmFjayhcIjYuMC5bMi01XSBTYWZhcmlcIiksYi50d2Vlbj1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IFIoYSl9LGIuZGVsYXk9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuZXcgUyh7Y29tcGxldGU6YixkdXJhdGlvbjphLGNvbnRleHQ6Y30pfSxhLmZuLnRyYW09ZnVuY3Rpb24oYSl7cmV0dXJuIGIuY2FsbChudWxsLHRoaXMsYSl9O3ZhciBWPWEuc3R5bGUsVz1hLmNzcyxYPXt0cmFuc2Zvcm06Ry50cmFuc2Zvcm0mJkcudHJhbnNmb3JtLmNzc30sWT17Y29sb3I6W08sdV0sYmFja2dyb3VuZDpbTyx1LFwiYmFja2dyb3VuZC1jb2xvclwiXSxcIm91dGxpbmUtY29sb3JcIjpbTyx1XSxcImJvcmRlci1jb2xvclwiOltPLHVdLFwiYm9yZGVyLXRvcC1jb2xvclwiOltPLHVdLFwiYm9yZGVyLXJpZ2h0LWNvbG9yXCI6W08sdV0sXCJib3JkZXItYm90dG9tLWNvbG9yXCI6W08sdV0sXCJib3JkZXItbGVmdC1jb2xvclwiOltPLHVdLFwiYm9yZGVyLXdpZHRoXCI6W04sdl0sXCJib3JkZXItdG9wLXdpZHRoXCI6W04sdl0sXCJib3JkZXItcmlnaHQtd2lkdGhcIjpbTix2XSxcImJvcmRlci1ib3R0b20td2lkdGhcIjpbTix2XSxcImJvcmRlci1sZWZ0LXdpZHRoXCI6W04sdl0sXCJib3JkZXItc3BhY2luZ1wiOltOLHZdLFwibGV0dGVyLXNwYWNpbmdcIjpbTix2XSxtYXJnaW46W04sdl0sXCJtYXJnaW4tdG9wXCI6W04sdl0sXCJtYXJnaW4tcmlnaHRcIjpbTix2XSxcIm1hcmdpbi1ib3R0b21cIjpbTix2XSxcIm1hcmdpbi1sZWZ0XCI6W04sdl0scGFkZGluZzpbTix2XSxcInBhZGRpbmctdG9wXCI6W04sdl0sXCJwYWRkaW5nLXJpZ2h0XCI6W04sdl0sXCJwYWRkaW5nLWJvdHRvbVwiOltOLHZdLFwicGFkZGluZy1sZWZ0XCI6W04sdl0sXCJvdXRsaW5lLXdpZHRoXCI6W04sdl0sb3BhY2l0eTpbTix0XSx0b3A6W04sd10scmlnaHQ6W04sd10sYm90dG9tOltOLHddLGxlZnQ6W04sd10sXCJmb250LXNpemVcIjpbTix3XSxcInRleHQtaW5kZW50XCI6W04sd10sXCJ3b3JkLXNwYWNpbmdcIjpbTix3XSx3aWR0aDpbTix3XSxcIm1pbi13aWR0aFwiOltOLHddLFwibWF4LXdpZHRoXCI6W04sd10saGVpZ2h0OltOLHddLFwibWluLWhlaWdodFwiOltOLHddLFwibWF4LWhlaWdodFwiOltOLHddLFwibGluZS1oZWlnaHRcIjpbTix5XSxcInNjcm9sbC10b3BcIjpbUCx0LFwic2Nyb2xsVG9wXCJdLFwic2Nyb2xsLWxlZnRcIjpbUCx0LFwic2Nyb2xsTGVmdFwiXX0sWj17fTtHLnRyYW5zZm9ybSYmKFkudHJhbnNmb3JtPVtRXSxaPXt4Olt3LFwidHJhbnNsYXRlWFwiXSx5Olt3LFwidHJhbnNsYXRlWVwiXSxyb3RhdGU6W3hdLHJvdGF0ZVg6W3hdLHJvdGF0ZVk6W3hdLHNjYWxlOlt0XSxzY2FsZVg6W3RdLHNjYWxlWTpbdF0sc2tldzpbeF0sc2tld1g6W3hdLHNrZXdZOlt4XX0pLEcudHJhbnNmb3JtJiZHLmJhY2tmYWNlJiYoWi56PVt3LFwidHJhbnNsYXRlWlwiXSxaLnJvdGF0ZVo9W3hdLFouc2NhbGVaPVt0XSxaLnBlcnNwZWN0aXZlPVt2XSk7dmFyICQ9L21zLyxfPS9zfFxcLi87cmV0dXJuIGEudHJhbT1ifSh3aW5kb3cualF1ZXJ5KTtcbiJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJ0cmFtIiwiYSIsImIiLCJjIiwiTSIsIkJhcmUiLCJpbml0IiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiZCIsInBhcnNlSW50Iiwic2xpY2UiLCJlIiwidG9TdHJpbmciLCJmIiwiZyIsImoiLCJoIiwiaSIsIiQiLCJ0ZXN0IiwiXyIsInBhcnNlRmxvYXQiLCJVIiwiZGVidWciLCJjb25zb2xlIiwid2FybiIsImsiLCJsZW5ndGgiLCJwdXNoIiwibCIsImFwcGx5IiwiYXJndW1lbnRzIiwiT2JqZWN0IiwibSIsIm4iLCJjb25zdHJ1Y3RvciIsIm1peGluIiwib3BlbiIsImNhbGwiLCJoYXNPd25Qcm9wZXJ0eSIsImVhc2UiLCJsaW5lYXIiLCJNYXRoIiwiY29zIiwiUEkiLCJzaW4iLCJwb3ciLCJzcXJ0IiwibyIsImRvY3VtZW50IiwicCIsInEiLCJyIiwicyIsInQiLCJ1IiwidiIsInciLCJ4IiwieSIsInoiLCJBIiwiQiIsIkMiLCJjcmVhdGVFbGVtZW50IiwiRCIsIkUiLCJGIiwic3R5bGUiLCJkb20iLCJjc3MiLCJzcGxpdCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwiRyIsInN1cHBvcnQiLCJiaW5kIiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIiwiYmFja2ZhY2UiLCJ0aW1pbmciLCJIIiwiSSIsIkoiLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsInNldFRpbWVvdXQiLCJLIiwibm93IiwicGVyZm9ybWFuY2UiLCJ3ZWJraXROb3ciLCJtc05vdyIsIm1vek5vdyIsIkRhdGUiLCJMIiwiWSIsIndlYWsiLCJwcm9wcyIsIiRlbCIsInRpbWVyIiwiZGVzdHJveSIsInF1ZXVlIiwiYWN0aXZlIiwiUyIsImR1cmF0aW9uIiwiY29udGV4dCIsImNvbXBsZXRlIiwic3BhbiIsInN0b3AiLCJhbmltYXRlIiwid2FpdCIsIm5hbWUiLCJuZXh0U3R5bGUiLCJvcHRpb25zIiwiYXJncyIsInNoaWZ0IiwiZWwiLCJkaXNwbGF5Iiwib2Zmc2V0SGVpZ2h0IiwicmVtb3ZlRGF0YSIsInVwc3RyZWFtIiwic3RyaW5nIiwiam9pbiIsIloiLCJzZXQiLCJjaGlsZHJlbiIsImtlZXBJbmhlcml0ZWQiLCJmYWxsYmFjayIsIlciLCJoaWRlQmFja2ZhY2UiLCJWIiwiZGF0YSIsInN0YXJ0IiwiZWFjaCIsIk4iLCJnZXQiLCJ1cGRhdGUiLCJleGVjIiwiZGVsYXkiLCJYIiwidHlwZSIsImF1dG8iLCJ1bml0IiwiZGVmYXVsdFVuaXQiLCJhbmdsZSIsImRlZmF1bHRBbmdsZSIsImNvbnZlcnQiLCJyZWRyYXciLCJ0d2VlbiIsIlIiLCJmcm9tIiwidG8iLCJvcmlnaW5hbCIsIk8iLCJQIiwiUSIsImN1cnJlbnQiLCJwZXJzcGVjdGl2ZSIsInZhbHVlcyIsIlQiLCJpbmRleE9mIiwicmVuZGVyIiwiaW5BcnJheSIsImNvbmNhdCIsInJvdW5kIiwiYmVnaW4iLCJjaGFuZ2UiLCJmb3JtYXQiLCJ2YWx1ZSIsImF1dG9wbGF5IiwicGxheSIsInN0YXJ0UkdCIiwiZW5kUkdCIiwiZW5kSGV4IiwidHdlZW5zIiwiY29uZmlnIiwiYWdlbnRUZXN0cyIsIlJlZ0V4cCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImZuIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwibWFyZ2luIiwicGFkZGluZyIsIm9wYWNpdHkiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsInJvdGF0ZSIsInJvdGF0ZVgiLCJyb3RhdGVZIiwic2NhbGUiLCJzY2FsZVgiLCJzY2FsZVkiLCJza2V3Iiwic2tld1giLCJza2V3WSIsInJvdGF0ZVoiLCJzY2FsZVoiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiJBQUFBLHVEQUF1RCxHQUN2RCxrQkFBa0IsR0FDbEI7Ozs7O0NBS0MsR0FDRCxtQkFBbUI7QUFDbkJBLE9BQU9DLElBQUksR0FBQyxTQUFTQyxDQUFDO0lBQUUsU0FBU0MsRUFBRUQsQ0FBQyxFQUFDQyxDQUFDO1FBQUUsSUFBSUMsSUFBRSxJQUFJQyxFQUFFQyxJQUFJO1FBQUMsT0FBT0YsRUFBRUcsSUFBSSxDQUFDTCxHQUFFQztJQUFFO0lBQUMsU0FBU0MsRUFBRUYsQ0FBQztRQUFFLE9BQU9BLEVBQUVNLE9BQU8sQ0FBQyxVQUFTLFNBQVNOLENBQUM7WUFBRSxPQUFNLE1BQUlBLEVBQUVPLFdBQVc7UUFBRTtJQUFHO0lBQUMsU0FBU0MsRUFBRVIsQ0FBQztRQUFFLElBQUlDLElBQUVRLFNBQVNULEVBQUVVLEtBQUssQ0FBQyxJQUFHLEtBQUlSLElBQUVELEtBQUcsS0FBRyxLQUFJTyxJQUFFUCxLQUFHLElBQUUsS0FBSVUsSUFBRSxNQUFJVjtRQUFFLE9BQU07WUFBQ0M7WUFBRU07WUFBRUc7U0FBRTtJQUFBO0lBQUMsU0FBU0EsRUFBRVgsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUM7UUFBRSxPQUFNLE1BQUksQUFBQyxDQUFBLEtBQUcsS0FBR0YsS0FBRyxLQUFHQyxLQUFHLElBQUVDLENBQUFBLEVBQUdVLFFBQVEsQ0FBQyxJQUFJRixLQUFLLENBQUM7SUFBRTtJQUFDLFNBQVNHLEtBQUk7SUFBQyxTQUFTQyxFQUFFZCxDQUFDLEVBQUNDLENBQUM7UUFBRWMsRUFBRSw4QkFBNEJmLElBQUUsYUFBVyxPQUFPQyxJQUFFLE9BQUtBO0lBQUU7SUFBQyxTQUFTZSxFQUFFaEIsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUM7UUFBRWEsRUFBRSx5QkFBdUJmLElBQUUsUUFBTUMsSUFBRSxPQUFLQztJQUFFO0lBQUMsU0FBU2UsRUFBRWpCLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDO1FBQUUsSUFBRyxLQUFLLE1BQUlELEtBQUlDLENBQUFBLElBQUVELENBQUFBLEdBQUcsS0FBSyxNQUFJRCxHQUFFLE9BQU9FO1FBQUUsSUFBSU0sSUFBRU47UUFBRSxPQUFPZ0IsRUFBRUMsSUFBSSxDQUFDbkIsTUFBSSxDQUFDb0IsRUFBRUQsSUFBSSxDQUFDbkIsS0FBR1EsSUFBRUMsU0FBU1QsR0FBRSxNQUFJb0IsRUFBRUQsSUFBSSxDQUFDbkIsTUFBS1EsQ0FBQUEsSUFBRSxNQUFJYSxXQUFXckIsRUFBQyxHQUFHLElBQUVRLEtBQUlBLENBQUFBLElBQUUsQ0FBQSxHQUFHQSxNQUFJQSxJQUFFQSxJQUFFTjtJQUFDO0lBQUMsU0FBU2EsRUFBRWYsQ0FBQztRQUFFc0IsRUFBRUMsS0FBSyxJQUFFekIsVUFBUUEsT0FBTzBCLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDekI7SUFBRTtJQUFDLFNBQVMwQixFQUFFMUIsQ0FBQztRQUFFLElBQUksSUFBSUMsSUFBRSxDQUFDLEdBQUVDLElBQUVGLElBQUVBLEVBQUUyQixNQUFNLEdBQUMsR0FBRW5CLElBQUUsRUFBRSxFQUFDLEVBQUVQLElBQUVDLEdBQUc7WUFBQyxJQUFJUyxJQUFFWCxDQUFDLENBQUNDLEVBQUU7WUFBQ1UsS0FBR0gsRUFBRW9CLElBQUksQ0FBQ2pCO1FBQUU7UUFBQyxPQUFPSDtJQUFDO0lBQUMsSUFBSXFCLElBQUUsU0FBUzdCLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDO1FBQUUsU0FBU00sRUFBRVIsQ0FBQztZQUFFLE9BQU0sWUFBVSxPQUFPQTtRQUFDO1FBQUMsU0FBU1csRUFBRVgsQ0FBQztZQUFFLE9BQU0sY0FBWSxPQUFPQTtRQUFDO1FBQUMsU0FBU2EsS0FBSTtRQUFDLFNBQVNDLEVBQUVFLENBQUMsRUFBQ0MsQ0FBQztZQUFFLFNBQVNGO2dCQUFJLElBQUlmLElBQUUsSUFBSTBCO2dCQUFFLE9BQU9mLEVBQUVYLEVBQUVLLElBQUksS0FBR0wsRUFBRUssSUFBSSxDQUFDeUIsS0FBSyxDQUFDOUIsR0FBRStCLFlBQVcvQjtZQUFDO1lBQUMsU0FBUzBCLEtBQUk7WUFBQ1QsTUFBSWYsS0FBSWUsQ0FBQUEsSUFBRUQsR0FBRUEsSUFBRWdCLE1BQUssR0FBR2pCLEVBQUVYLElBQUksR0FBQ3NCO1lBQUUsSUFBSUcsR0FBRUksSUFBRXBCLENBQUMsQ0FBQ2IsRUFBRSxHQUFDZ0IsQ0FBQyxDQUFDaEIsRUFBRSxFQUFDa0MsSUFBRVIsQ0FBQyxDQUFDMUIsRUFBRSxHQUFDZSxDQUFDLENBQUNmLEVBQUUsR0FBQyxJQUFJYTtZQUFFLE9BQU9xQixFQUFFQyxXQUFXLEdBQUNwQixHQUFFQSxFQUFFcUIsS0FBSyxHQUFDLFNBQVNuQyxDQUFDO2dCQUFFLE9BQU95QixDQUFDLENBQUMxQixFQUFFLEdBQUNlLENBQUMsQ0FBQ2YsRUFBRSxHQUFDYyxFQUFFQyxHQUFFZCxFQUFFLENBQUNELEVBQUUsRUFBQ2U7WUFBQyxHQUFFQSxFQUFFc0IsSUFBSSxHQUFDLFNBQVNyQyxDQUFDO2dCQUFFLElBQUc2QixJQUFFLENBQUMsR0FBRWxCLEVBQUVYLEtBQUc2QixJQUFFN0IsRUFBRXNDLElBQUksQ0FBQ3ZCLEdBQUVtQixHQUFFRCxHQUFFbEIsR0FBRUMsS0FBR1IsRUFBRVIsTUFBSzZCLENBQUFBLElBQUU3QixDQUFBQSxHQUFHUSxFQUFFcUIsSUFBRyxJQUFJLElBQUkzQixLQUFLMkIsRUFBRTVCLEVBQUVxQyxJQUFJLENBQUNULEdBQUUzQixNQUFLZ0MsQ0FBQUEsQ0FBQyxDQUFDaEMsRUFBRSxHQUFDMkIsQ0FBQyxDQUFDM0IsRUFBRSxBQUFEO2dCQUFHLE9BQU9TLEVBQUV1QixFQUFFN0IsSUFBSSxLQUFJNkIsQ0FBQUEsRUFBRTdCLElBQUksR0FBQ1csQ0FBQUEsR0FBR0Q7WUFBQyxHQUFFQSxFQUFFc0IsSUFBSSxDQUFDcEI7UUFBRTtRQUFDLE9BQU9IO0lBQUMsRUFBRSxhQUFZLENBQUMsRUFBRXlCLGNBQWMsR0FBRU4sSUFBRTtRQUFDTyxNQUFLO1lBQUM7WUFBTyxTQUFTeEMsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQ00sQ0FBQztnQkFBRSxJQUFJRyxJQUFFLEFBQUNYLENBQUFBLEtBQUdRLENBQUFBLElBQUdSLEdBQUVhLElBQUVGLElBQUVYO2dCQUFFLE9BQU9DLElBQUVDLElBQUcsQ0FBQSxDQUFDLE9BQUtXLElBQUVGLElBQUUsS0FBR0EsSUFBRUEsSUFBRSxDQUFDLE9BQUtFLElBQUUsSUFBRUYsSUFBRSxNQUFJWCxDQUFBQTtZQUFFO1NBQUU7UUFBQyxXQUFVO1lBQUM7WUFBVSxTQUFTQSxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTSxDQUFDO2dCQUFFLElBQUlHLElBQUUsQUFBQ1gsQ0FBQUEsS0FBR1EsQ0FBQUEsSUFBR1IsR0FBRWEsSUFBRUYsSUFBRVg7Z0JBQUUsT0FBT0MsSUFBRUMsSUFBRyxDQUFBLENBQUMsSUFBRVcsSUFBRUYsSUFBRSxJQUFFQSxJQUFFQSxJQUFFLENBQUMsSUFBRUUsSUFBRSxJQUFFRixDQUFBQTtZQUFFO1NBQUU7UUFBQyxZQUFXO1lBQUM7WUFBVyxTQUFTWCxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTSxDQUFDO2dCQUFFLElBQUlHLElBQUUsQUFBQ1gsQ0FBQUEsS0FBR1EsQ0FBQUEsSUFBR1IsR0FBRWEsSUFBRUYsSUFBRVg7Z0JBQUUsT0FBT0MsSUFBRUMsSUFBRyxDQUFBLEtBQUdXLElBQUVGLElBQUUsQ0FBQyxNQUFJQSxJQUFFQSxJQUFFLE1BQUlFLElBQUUsQ0FBQyxNQUFJRixJQUFFLE1BQUlYLENBQUFBO1lBQUU7U0FBRTtRQUFDLGVBQWM7WUFBQztZQUFjLFNBQVNBLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUNNLENBQUM7Z0JBQUUsSUFBSUcsSUFBRSxBQUFDWCxDQUFBQSxLQUFHUSxDQUFBQSxJQUFHUixHQUFFYSxJQUFFRixJQUFFWDtnQkFBRSxPQUFPQyxJQUFFQyxJQUFHLENBQUEsSUFBRVcsSUFBRUYsSUFBRSxDQUFDLElBQUVBLElBQUVBLElBQUUsSUFBRUUsSUFBRSxJQUFFRixDQUFBQTtZQUFFO1NBQUU7UUFBQzhCLFFBQU87WUFBQztZQUFTLFNBQVN6QyxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTSxDQUFDO2dCQUFFLE9BQU9OLElBQUVGLElBQUVRLElBQUVQO1lBQUM7U0FBRTtRQUFDLGdCQUFlO1lBQUM7WUFBMkMsU0FBU0QsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQ00sQ0FBQztnQkFBRSxPQUFPTixJQUFHRixDQUFBQSxLQUFHUSxDQUFBQSxJQUFHUixJQUFFQztZQUFDO1NBQUU7UUFBQyxpQkFBZ0I7WUFBQztZQUEyQyxTQUFTRCxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTSxDQUFDO2dCQUFFLE9BQU0sQ0FBQ04sSUFBR0YsQ0FBQUEsS0FBR1EsQ0FBQUEsSUFBSVIsQ0FBQUEsSUFBRSxDQUFBLElBQUdDO1lBQUM7U0FBRTtRQUFDLG9CQUFtQjtZQUFDO1lBQTJDLFNBQVNELENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUNNLENBQUM7Z0JBQUUsT0FBTSxBQUFDUixDQUFBQSxLQUFHUSxJQUFFLENBQUEsSUFBRyxJQUFFTixJQUFFLElBQUVGLElBQUVBLElBQUVDLElBQUUsQ0FBQ0MsSUFBRSxJQUFHLENBQUEsRUFBRUYsSUFBR0EsQ0FBQUEsSUFBRSxDQUFBLElBQUcsQ0FBQSxJQUFHQztZQUFDO1NBQUU7UUFBQyxpQkFBZ0I7WUFBQztZQUEyQyxTQUFTRCxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTSxDQUFDO2dCQUFFLE9BQU9OLElBQUdGLENBQUFBLEtBQUdRLENBQUFBLElBQUdSLElBQUVBLElBQUVDO1lBQUM7U0FBRTtRQUFDLGtCQUFpQjtZQUFDO1lBQXVDLFNBQVNELENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUNNLENBQUM7Z0JBQUUsT0FBT04sSUFBRyxDQUFBLEFBQUNGLENBQUFBLElBQUVBLElBQUVRLElBQUUsQ0FBQSxJQUFHUixJQUFFQSxJQUFFLENBQUEsSUFBR0M7WUFBQztTQUFFO1FBQUMscUJBQW9CO1lBQUM7WUFBdUMsU0FBU0QsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQ00sQ0FBQztnQkFBRSxPQUFNLEFBQUNSLENBQUFBLEtBQUdRLElBQUUsQ0FBQSxJQUFHLElBQUVOLElBQUUsSUFBRUYsSUFBRUEsSUFBRUEsSUFBRUMsSUFBRUMsSUFBRSxJQUFHLENBQUEsQUFBQ0YsQ0FBQUEsS0FBRyxDQUFBLElBQUdBLElBQUVBLElBQUUsQ0FBQSxJQUFHQztZQUFDO1NBQUU7UUFBQyxpQkFBZ0I7WUFBQztZQUEyQyxTQUFTRCxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTSxDQUFDO2dCQUFFLE9BQU9OLElBQUdGLENBQUFBLEtBQUdRLENBQUFBLElBQUdSLElBQUVBLElBQUVBLElBQUVDO1lBQUM7U0FBRTtRQUFDLGtCQUFpQjtZQUFDO1lBQXVDLFNBQVNELENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUNNLENBQUM7Z0JBQUUsT0FBTSxDQUFDTixJQUFHLENBQUEsQUFBQ0YsQ0FBQUEsSUFBRUEsSUFBRVEsSUFBRSxDQUFBLElBQUdSLElBQUVBLElBQUVBLElBQUUsQ0FBQSxJQUFHQztZQUFDO1NBQUU7UUFBQyxxQkFBb0I7WUFBQztZQUFtQyxTQUFTRCxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTSxDQUFDO2dCQUFFLE9BQU0sQUFBQ1IsQ0FBQUEsS0FBR1EsSUFBRSxDQUFBLElBQUcsSUFBRU4sSUFBRSxJQUFFRixJQUFFQSxJQUFFQSxJQUFFQSxJQUFFQyxJQUFFLENBQUNDLElBQUUsSUFBRyxDQUFBLEFBQUNGLENBQUFBLEtBQUcsQ0FBQSxJQUFHQSxJQUFFQSxJQUFFQSxJQUFFLENBQUEsSUFBR0M7WUFBQztTQUFFO1FBQUMsaUJBQWdCO1lBQUM7WUFBMkMsU0FBU0QsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQ00sQ0FBQztnQkFBRSxPQUFPTixJQUFHRixDQUFBQSxLQUFHUSxDQUFBQSxJQUFHUixJQUFFQSxJQUFFQSxJQUFFQSxJQUFFQztZQUFDO1NBQUU7UUFBQyxrQkFBaUI7WUFBQztZQUFtQyxTQUFTRCxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTSxDQUFDO2dCQUFFLE9BQU9OLElBQUcsQ0FBQSxBQUFDRixDQUFBQSxJQUFFQSxJQUFFUSxJQUFFLENBQUEsSUFBR1IsSUFBRUEsSUFBRUEsSUFBRUEsSUFBRSxDQUFBLElBQUdDO1lBQUM7U0FBRTtRQUFDLHFCQUFvQjtZQUFDO1lBQW1DLFNBQVNELENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUNNLENBQUM7Z0JBQUUsT0FBTSxBQUFDUixDQUFBQSxLQUFHUSxJQUFFLENBQUEsSUFBRyxJQUFFTixJQUFFLElBQUVGLElBQUVBLElBQUVBLElBQUVBLElBQUVBLElBQUVDLElBQUVDLElBQUUsSUFBRyxDQUFBLEFBQUNGLENBQUFBLEtBQUcsQ0FBQSxJQUFHQSxJQUFFQSxJQUFFQSxJQUFFQSxJQUFFLENBQUEsSUFBR0M7WUFBQztTQUFFO1FBQUMsZ0JBQWU7WUFBQztZQUF1QyxTQUFTRCxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTSxDQUFDO2dCQUFFLE9BQU0sQ0FBQ04sSUFBRXdDLEtBQUtDLEdBQUcsQ0FBQzNDLElBQUVRLElBQUdrQyxDQUFBQSxLQUFLRSxFQUFFLEdBQUMsQ0FBQSxLQUFJMUMsSUFBRUQ7WUFBQztTQUFFO1FBQUMsaUJBQWdCO1lBQUM7WUFBdUMsU0FBU0QsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQ00sQ0FBQztnQkFBRSxPQUFPTixJQUFFd0MsS0FBS0csR0FBRyxDQUFDN0MsSUFBRVEsSUFBR2tDLENBQUFBLEtBQUtFLEVBQUUsR0FBQyxDQUFBLEtBQUkzQztZQUFDO1NBQUU7UUFBQyxvQkFBbUI7WUFBQztZQUEyQyxTQUFTRCxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTSxDQUFDO2dCQUFFLE9BQU0sQ0FBQ04sSUFBRSxJQUFHd0MsQ0FBQUEsS0FBS0MsR0FBRyxDQUFDRCxLQUFLRSxFQUFFLEdBQUM1QyxJQUFFUSxLQUFHLENBQUEsSUFBR1A7WUFBQztTQUFFO1FBQUMsZ0JBQWU7WUFBQztZQUEyQyxTQUFTRCxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTSxDQUFDO2dCQUFFLE9BQU8sTUFBSVIsSUFBRUMsSUFBRUMsSUFBRXdDLEtBQUtJLEdBQUcsQ0FBQyxHQUFFLEtBQUk5QyxDQUFBQSxJQUFFUSxJQUFFLENBQUEsS0FBSVA7WUFBQztTQUFFO1FBQUMsaUJBQWdCO1lBQUM7WUFBbUMsU0FBU0QsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQ00sQ0FBQztnQkFBRSxPQUFPUixNQUFJUSxJQUFFUCxJQUFFQyxJQUFFQSxJQUFHLENBQUEsQ0FBQ3dDLEtBQUtJLEdBQUcsQ0FBQyxHQUFFLENBQUMsS0FBRzlDLElBQUVRLEtBQUcsQ0FBQSxJQUFHUDtZQUFDO1NBQUU7UUFBQyxvQkFBbUI7WUFBQztZQUEyQixTQUFTRCxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTSxDQUFDO2dCQUFFLE9BQU8sTUFBSVIsSUFBRUMsSUFBRUQsTUFBSVEsSUFBRVAsSUFBRUMsSUFBRSxBQUFDRixDQUFBQSxLQUFHUSxJQUFFLENBQUEsSUFBRyxJQUFFTixJQUFFLElBQUV3QyxLQUFLSSxHQUFHLENBQUMsR0FBRSxLQUFJOUMsQ0FBQUEsSUFBRSxDQUFBLEtBQUlDLElBQUVDLElBQUUsSUFBRyxDQUFBLENBQUN3QyxLQUFLSSxHQUFHLENBQUMsR0FBRSxDQUFDLEtBQUcsRUFBRTlDLEtBQUcsQ0FBQSxJQUFHQztZQUFDO1NBQUU7UUFBQyxnQkFBZTtZQUFDO1lBQTJDLFNBQVNELENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUNNLENBQUM7Z0JBQUUsT0FBTSxDQUFDTixJQUFHd0MsQ0FBQUEsS0FBS0ssSUFBSSxDQUFDLElBQUUsQUFBQy9DLENBQUFBLEtBQUdRLENBQUFBLElBQUdSLEtBQUcsQ0FBQSxJQUFHQztZQUFDO1NBQUU7UUFBQyxpQkFBZ0I7WUFBQztZQUF1QyxTQUFTRCxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTSxDQUFDO2dCQUFFLE9BQU9OLElBQUV3QyxLQUFLSyxJQUFJLENBQUMsSUFBRSxBQUFDL0MsQ0FBQUEsSUFBRUEsSUFBRVEsSUFBRSxDQUFBLElBQUdSLEtBQUdDO1lBQUM7U0FBRTtRQUFDLG9CQUFtQjtZQUFDO1lBQTJDLFNBQVNELENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUNNLENBQUM7Z0JBQUUsT0FBTSxBQUFDUixDQUFBQSxLQUFHUSxJQUFFLENBQUEsSUFBRyxJQUFFLENBQUNOLElBQUUsSUFBR3dDLENBQUFBLEtBQUtLLElBQUksQ0FBQyxJQUFFL0MsSUFBRUEsS0FBRyxDQUFBLElBQUdDLElBQUVDLElBQUUsSUFBR3dDLENBQUFBLEtBQUtLLElBQUksQ0FBQyxJQUFFLEFBQUMvQyxDQUFBQSxLQUFHLENBQUEsSUFBR0EsS0FBRyxDQUFBLElBQUdDO1lBQUM7U0FBRTtRQUFDLGdCQUFlO1lBQUM7WUFBNEMsU0FBU0QsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQ00sQ0FBQyxFQUFDRyxDQUFDO2dCQUFFLE9BQU8sS0FBSyxNQUFJQSxLQUFJQSxDQUFBQSxJQUFFLE9BQU0sR0FBR1QsSUFBR0YsQ0FBQUEsS0FBR1EsQ0FBQUEsSUFBR1IsSUFBRyxDQUFBLEFBQUNXLENBQUFBLElBQUUsQ0FBQSxJQUFHWCxJQUFFVyxDQUFBQSxJQUFHVjtZQUFDO1NBQUU7UUFBQyxpQkFBZ0I7WUFBQztZQUEyQyxTQUFTRCxDQUFDLEVBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFDTSxDQUFDLEVBQUNHLENBQUM7Z0JBQUUsT0FBTyxLQUFLLE1BQUlBLEtBQUlBLENBQUFBLElBQUUsT0FBTSxHQUFHVCxJQUFHLENBQUEsQUFBQ0YsQ0FBQUEsSUFBRUEsSUFBRVEsSUFBRSxDQUFBLElBQUdSLElBQUcsQ0FBQSxBQUFDVyxDQUFBQSxJQUFFLENBQUEsSUFBR1gsSUFBRVcsQ0FBQUEsSUFBRyxDQUFBLElBQUdWO1lBQUM7U0FBRTtRQUFDLG9CQUFtQjtZQUFDO1lBQTRDLFNBQVNELENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUNNLENBQUMsRUFBQ0csQ0FBQztnQkFBRSxPQUFPLEtBQUssTUFBSUEsS0FBSUEsQ0FBQUEsSUFBRSxPQUFNLEdBQUcsQUFBQ1gsQ0FBQUEsS0FBR1EsSUFBRSxDQUFBLElBQUcsSUFBRU4sSUFBRSxJQUFFRixJQUFFQSxJQUFHLENBQUEsQUFBQyxDQUFBLEFBQUNXLENBQUFBLEtBQUcsS0FBSSxJQUFHLENBQUEsSUFBR1gsSUFBRVcsQ0FBQUEsSUFBR1YsSUFBRUMsSUFBRSxJQUFHLENBQUEsQUFBQ0YsQ0FBQUEsS0FBRyxDQUFBLElBQUdBLElBQUcsQ0FBQSxBQUFDLENBQUEsQUFBQ1csQ0FBQUEsS0FBRyxLQUFJLElBQUcsQ0FBQSxJQUFHWCxJQUFFVyxDQUFBQSxJQUFHLENBQUEsSUFBR1Y7WUFBQztTQUFFO0lBQUEsR0FBRWlDLElBQUU7UUFBQyxnQkFBZTtRQUF1QyxpQkFBZ0I7UUFBdUMsb0JBQW1CO0lBQWtDLEdBQUVjLElBQUVDLFVBQVNDLElBQUVwRCxRQUFPcUQsSUFBRSxjQUFhQyxJQUFFLGNBQWFDLElBQUUsU0FBUUMsSUFBRSxVQUFTQyxJQUFFLFlBQVdDLElBQUUsMkJBQTBCQyxJQUFFLDZCQUE0QkMsSUFBRSxtQkFBa0JDLElBQUUsWUFBV0MsSUFBRSx5QkFBd0JDLElBQUUsb0JBQW1CQyxJQUFFLEtBQUlDLElBQUVmLEVBQUVnQixhQUFhLENBQUMsTUFBS0MsSUFBRTtRQUFDO1FBQVM7UUFBTTtRQUFJO0tBQUssRUFBQ0MsSUFBRTtRQUFDO1FBQVc7UUFBUTtRQUFNO0tBQU8sRUFBQ0MsSUFBRSxTQUFTbkUsQ0FBQztRQUFFLElBQUdBLEtBQUsrRCxFQUFFSyxLQUFLLEVBQUMsT0FBTTtZQUFDQyxLQUFJckU7WUFBRXNFLEtBQUl0RTtRQUFDO1FBQUUsSUFBSUMsR0FBRUMsR0FBRU0sSUFBRSxJQUFHRyxJQUFFWCxFQUFFdUUsS0FBSyxDQUFDO1FBQUssSUFBSXRFLElBQUUsR0FBRUEsSUFBRVUsRUFBRWdCLE1BQU0sRUFBQzFCLElBQUlPLEtBQUdHLENBQUMsQ0FBQ1YsRUFBRSxDQUFDdUUsTUFBTSxDQUFDLEdBQUdDLFdBQVcsS0FBRzlELENBQUMsQ0FBQ1YsRUFBRSxDQUFDUyxLQUFLLENBQUM7UUFBRyxJQUFJVCxJQUFFLEdBQUVBLElBQUVnRSxFQUFFdEMsTUFBTSxFQUFDMUIsSUFBSSxJQUFHQyxJQUFFK0QsQ0FBQyxDQUFDaEUsRUFBRSxHQUFDTyxHQUFFTixLQUFLNkQsRUFBRUssS0FBSyxFQUFDLE9BQU07WUFBQ0MsS0FBSW5FO1lBQUVvRSxLQUFJSixDQUFDLENBQUNqRSxFQUFFLEdBQUNEO1FBQUM7SUFBQyxHQUFFMEUsSUFBRXpFLEVBQUUwRSxPQUFPLEdBQUM7UUFBQ0MsTUFBS0MsU0FBU0MsU0FBUyxDQUFDRixJQUFJO1FBQUNHLFdBQVVaLEVBQUU7UUFBYWEsWUFBV2IsRUFBRTtRQUFjYyxVQUFTZCxFQUFFO1FBQXVCZSxRQUFPZixFQUFFO0lBQTZCO0lBQUUsSUFBR08sRUFBRU0sVUFBVSxFQUFDO1FBQUMsSUFBSUcsSUFBRVQsRUFBRVEsTUFBTSxDQUFDYixHQUFHO1FBQUMsSUFBR04sRUFBRUssS0FBSyxDQUFDZSxFQUFFLEdBQUNsRCxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBQyxDQUFDOEIsRUFBRUssS0FBSyxDQUFDZSxFQUFFLEVBQUMsSUFBSSxJQUFJQyxLQUFLbEQsRUFBRUQsQ0FBQyxDQUFDbUQsRUFBRSxDQUFDLEVBQUUsR0FBQ2xELENBQUMsQ0FBQ2tELEVBQUU7SUFBQTtJQUFDLElBQUlDLElBQUVwRixFQUFFcUYsS0FBSyxHQUFDO1FBQVcsSUFBSXRGLElBQUVrRCxFQUFFcUMscUJBQXFCLElBQUVyQyxFQUFFc0MsMkJBQTJCLElBQUV0QyxFQUFFdUMsd0JBQXdCLElBQUV2QyxFQUFFd0Msc0JBQXNCLElBQUV4QyxFQUFFeUMsdUJBQXVCO1FBQUMsT0FBTzNGLEtBQUcwRSxFQUFFRSxJQUFJLEdBQUM1RSxFQUFFNEUsSUFBSSxDQUFDMUIsS0FBRyxTQUFTbEQsQ0FBQztZQUFFa0QsRUFBRTBDLFVBQVUsQ0FBQzVGLEdBQUU7UUFBRztJQUFDLEtBQUk2RixJQUFFNUYsRUFBRTZGLEdBQUcsR0FBQztRQUFXLElBQUk5RixJQUFFa0QsRUFBRTZDLFdBQVcsRUFBQzlGLElBQUVELEtBQUlBLENBQUFBLEVBQUU4RixHQUFHLElBQUU5RixFQUFFZ0csU0FBUyxJQUFFaEcsRUFBRWlHLEtBQUssSUFBRWpHLEVBQUVrRyxNQUFNLEFBQUQ7UUFBRyxPQUFPakcsS0FBR3lFLEVBQUVFLElBQUksR0FBQzNFLEVBQUUyRSxJQUFJLENBQUM1RSxLQUFHbUcsS0FBS0wsR0FBRyxJQUFFO1lBQVcsT0FBTSxDQUFDLElBQUlLO1FBQUk7SUFBQyxLQUFJQyxJQUFFdkUsRUFBRSxTQUFTNUIsQ0FBQztRQUFFLFNBQVNPLEVBQUVSLENBQUMsRUFBQ0MsQ0FBQztZQUFFLElBQUlDLElBQUV3QixFQUFFLEFBQUMsQ0FBQSxLQUFHMUIsQ0FBQUEsRUFBR3VFLEtBQUssQ0FBQ1QsS0FBSXRELElBQUVOLENBQUMsQ0FBQyxFQUFFO1lBQUNELElBQUVBLEtBQUcsQ0FBQztZQUFFLElBQUlVLElBQUUwRixDQUFDLENBQUM3RixFQUFFO1lBQUMsSUFBRyxDQUFDRyxHQUFFLE9BQU9JLEVBQUUsMkJBQXlCUDtZQUFHLElBQUcsQ0FBQ1AsRUFBRXFHLElBQUksSUFBRSxDQUFDLElBQUksQ0FBQ0MsS0FBSyxDQUFDL0YsRUFBRSxFQUFDO2dCQUFDLElBQUlLLElBQUVGLENBQUMsQ0FBQyxFQUFFLEVBQUNHLElBQUUsSUFBSSxDQUFDeUYsS0FBSyxDQUFDL0YsRUFBRTtnQkFBQyxPQUFPTSxLQUFJQSxDQUFBQSxJQUFFLElBQUksQ0FBQ3lGLEtBQUssQ0FBQy9GLEVBQUUsR0FBQyxJQUFJSyxFQUFFVCxJQUFJLEFBQUQsR0FBR1UsRUFBRVQsSUFBSSxDQUFDLElBQUksQ0FBQ21HLEdBQUcsRUFBQ3RHLEdBQUVTLEdBQUVWLElBQUdhO1lBQUM7UUFBQztRQUFDLFNBQVNILEVBQUVYLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDO1lBQUUsSUFBR0YsR0FBRTtnQkFBQyxJQUFJVyxJQUFFLE9BQU9YO2dCQUFFLElBQUdDLEtBQUksQ0FBQSxJQUFJLENBQUN3RyxLQUFLLElBQUUsSUFBSSxDQUFDQSxLQUFLLENBQUNDLE9BQU8sSUFBRyxJQUFJLENBQUNDLEtBQUssR0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDQyxNQUFNLEdBQUMsQ0FBQyxDQUFBLEdBQUcsWUFBVWpHLEtBQUdWLEdBQUUsT0FBTyxJQUFJLENBQUN3RyxLQUFLLEdBQUMsSUFBSUksRUFBRTtvQkFBQ0MsVUFBUzlHO29CQUFFK0csU0FBUSxJQUFJO29CQUFDQyxVQUFTaEc7Z0JBQUMsSUFBRyxLQUFLLENBQUEsSUFBSSxDQUFDNEYsTUFBTSxHQUFDLENBQUMsQ0FBQTtnQkFBRyxJQUFHLFlBQVVqRyxLQUFHVixHQUFFO29CQUFDLE9BQU9EO3dCQUFHLEtBQUk7NEJBQU9nRCxFQUFFVixJQUFJLENBQUMsSUFBSTs0QkFBRTt3QkFBTSxLQUFJOzRCQUFPVCxFQUFFUyxJQUFJLENBQUMsSUFBSTs0QkFBRTt3QkFBTSxLQUFJOzRCQUFTWSxFQUFFWixJQUFJLENBQUMsSUFBSTs0QkFBRTt3QkFBTTs0QkFBUTlCLEVBQUU4QixJQUFJLENBQUMsSUFBSSxFQUFDdEMsR0FBRUUsS0FBR0EsQ0FBQyxDQUFDLEVBQUU7b0JBQUM7b0JBQUMsT0FBT2MsRUFBRXNCLElBQUksQ0FBQyxJQUFJO2dCQUFDO2dCQUFDLElBQUcsY0FBWTNCLEdBQUUsT0FBTyxLQUFLWCxFQUFFc0MsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJO2dCQUFFLElBQUcsWUFBVTNCLEdBQUU7b0JBQUMsSUFBSUUsSUFBRTtvQkFBRTBDLEVBQUVqQixJQUFJLENBQUMsSUFBSSxFQUFDdEMsR0FBRSxTQUFTQSxDQUFDLEVBQUNDLENBQUM7d0JBQUVELEVBQUVpSCxJQUFJLEdBQUNwRyxLQUFJQSxDQUFBQSxJQUFFYixFQUFFaUgsSUFBSSxBQUFELEdBQUdqSCxFQUFFa0gsSUFBSSxJQUFHbEgsRUFBRW1ILE9BQU8sQ0FBQ2xIO29CQUFFLEdBQUUsU0FBU0QsQ0FBQzt3QkFBRSxVQUFTQSxLQUFJYSxDQUFBQSxJQUFFSSxFQUFFakIsRUFBRW9ILElBQUksRUFBQyxFQUFDO29CQUFFLElBQUc5RCxFQUFFaEIsSUFBSSxDQUFDLElBQUksR0FBRXpCLElBQUUsS0FBSSxDQUFBLElBQUksQ0FBQzRGLEtBQUssR0FBQyxJQUFJSSxFQUFFO3dCQUFDQyxVQUFTakc7d0JBQUVrRyxTQUFRLElBQUk7b0JBQUEsSUFBRyxJQUFJLENBQUNILE1BQU0sR0FBQyxDQUFDLEdBQUUzRyxLQUFJLENBQUEsSUFBSSxDQUFDd0csS0FBSyxDQUFDTyxRQUFRLEdBQUNoRyxDQUFBQSxDQUFDO29CQUFHLElBQUlGLElBQUUsSUFBSSxFQUFDQyxJQUFFLENBQUMsR0FBRVcsSUFBRSxDQUFDO29CQUFFMkQsRUFBRTt3QkFBVzlCLEVBQUVqQixJQUFJLENBQUN4QixHQUFFZCxHQUFFLFNBQVNBLENBQUM7NEJBQUVBLEVBQUU0RyxNQUFNLElBQUc3RixDQUFBQSxJQUFFLENBQUMsR0FBRVcsQ0FBQyxDQUFDMUIsRUFBRXFILElBQUksQ0FBQyxHQUFDckgsRUFBRXNILFNBQVMsQUFBRDt3QkFBRSxJQUFHdkcsS0FBR0QsRUFBRTBGLEdBQUcsQ0FBQ2xDLEdBQUcsQ0FBQzVDO29CQUFFO2dCQUFFO1lBQUM7UUFBQztRQUFDLFNBQVNiLEVBQUViLENBQUM7WUFBRUEsSUFBRWlCLEVBQUVqQixHQUFFLElBQUcsSUFBSSxDQUFDNEcsTUFBTSxHQUFDLElBQUksQ0FBQ0QsS0FBSyxDQUFDL0UsSUFBSSxDQUFDO2dCQUFDMkYsU0FBUXZIO1lBQUMsS0FBSSxDQUFBLElBQUksQ0FBQ3lHLEtBQUssR0FBQyxJQUFJSSxFQUFFO2dCQUFDQyxVQUFTOUc7Z0JBQUUrRyxTQUFRLElBQUk7Z0JBQUNDLFVBQVNoRztZQUFDLElBQUcsSUFBSSxDQUFDNEYsTUFBTSxHQUFDLENBQUMsQ0FBQTtRQUFFO1FBQUMsU0FBUzlGLEVBQUVkLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQzRHLE1BQU0sR0FBRSxDQUFBLElBQUksQ0FBQ0QsS0FBSyxDQUFDL0UsSUFBSSxDQUFDO2dCQUFDMkYsU0FBUXZIO2dCQUFFd0gsTUFBS3pGO1lBQVMsSUFBRyxLQUFLLENBQUEsSUFBSSxDQUFDMEUsS0FBSyxDQUFDTyxRQUFRLEdBQUNoRyxDQUFBQSxDQUFDLElBQUdELEVBQUU7UUFBbUU7UUFBQyxTQUFTQztZQUFJLElBQUcsSUFBSSxDQUFDeUYsS0FBSyxJQUFFLElBQUksQ0FBQ0EsS0FBSyxDQUFDQyxPQUFPLElBQUcsSUFBSSxDQUFDRSxNQUFNLEdBQUMsQ0FBQyxHQUFFLElBQUksQ0FBQ0QsS0FBSyxDQUFDaEYsTUFBTSxFQUFDO2dCQUFDLElBQUkzQixJQUFFLElBQUksQ0FBQzJHLEtBQUssQ0FBQ2MsS0FBSztnQkFBRzlHLEVBQUUyQixJQUFJLENBQUMsSUFBSSxFQUFDdEMsRUFBRXVILE9BQU8sRUFBQyxDQUFDLEdBQUV2SCxFQUFFd0gsSUFBSTtZQUFDO1FBQUM7UUFBQyxTQUFTM0YsRUFBRTdCLENBQUM7WUFBRSxJQUFJLENBQUN5RyxLQUFLLElBQUUsSUFBSSxDQUFDQSxLQUFLLENBQUNDLE9BQU8sSUFBRyxJQUFJLENBQUNDLEtBQUssR0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDQyxNQUFNLEdBQUMsQ0FBQztZQUFFLElBQUkzRztZQUFFLFlBQVUsT0FBT0QsSUFBR0MsQ0FBQUEsSUFBRSxDQUFDLEdBQUVBLENBQUMsQ0FBQ0QsRUFBRSxHQUFDLENBQUEsSUFBR0MsSUFBRSxZQUFVLE9BQU9ELEtBQUcsUUFBTUEsSUFBRUEsSUFBRSxJQUFJLENBQUN1RyxLQUFLLEVBQUNoRCxFQUFFakIsSUFBSSxDQUFDLElBQUksRUFBQ3JDLEdBQUV1RCxJQUFHRixFQUFFaEIsSUFBSSxDQUFDLElBQUk7UUFBQztRQUFDLFNBQVNMLEVBQUVqQyxDQUFDO1lBQUU2QixFQUFFUyxJQUFJLENBQUMsSUFBSSxFQUFDdEMsSUFBR3VELEVBQUVqQixJQUFJLENBQUMsSUFBSSxFQUFDdEMsR0FBRXlELEdBQUVDO1FBQUU7UUFBQyxTQUFTeEIsRUFBRWxDLENBQUM7WUFBRSxZQUFVLE9BQU9BLEtBQUlBLENBQUFBLElBQUUsT0FBTSxHQUFHLElBQUksQ0FBQzBILEVBQUUsQ0FBQ3RELEtBQUssQ0FBQ3VELE9BQU8sR0FBQzNIO1FBQUM7UUFBQyxTQUFTZ0Q7WUFBSW5CLEVBQUVTLElBQUksQ0FBQyxJQUFJLEdBQUUsSUFBSSxDQUFDb0YsRUFBRSxDQUFDdEQsS0FBSyxDQUFDdUQsT0FBTyxHQUFDO1FBQU07UUFBQyxTQUFTekU7WUFBSSxJQUFJLENBQUN3RSxFQUFFLENBQUNFLFlBQVk7UUFBQTtRQUFDLFNBQVN4RTtZQUFJdkIsRUFBRVMsSUFBSSxDQUFDLElBQUksR0FBRXRDLEVBQUU2SCxVQUFVLENBQUMsSUFBSSxDQUFDSCxFQUFFLEVBQUN2RSxJQUFHLElBQUksQ0FBQ3FELEdBQUcsR0FBQyxJQUFJLENBQUNrQixFQUFFLEdBQUM7UUFBSTtRQUFDLFNBQVNwRTtZQUFJLElBQUl0RCxHQUFFQyxHQUFFQyxJQUFFLEVBQUU7WUFBQyxJQUFJLENBQUM0SCxRQUFRLElBQUU1SCxFQUFFMEIsSUFBSSxDQUFDLElBQUksQ0FBQ2tHLFFBQVE7WUFBRSxJQUFJOUgsS0FBSyxJQUFJLENBQUN1RyxLQUFLLENBQUN0RyxJQUFFLElBQUksQ0FBQ3NHLEtBQUssQ0FBQ3ZHLEVBQUUsRUFBQ0MsRUFBRTJHLE1BQU0sSUFBRTFHLEVBQUUwQixJQUFJLENBQUMzQixFQUFFOEgsTUFBTTtZQUFFN0gsSUFBRUEsRUFBRThILElBQUksQ0FBQyxNQUFLLElBQUksQ0FBQzVELEtBQUssS0FBR2xFLEtBQUksQ0FBQSxJQUFJLENBQUNrRSxLQUFLLEdBQUNsRSxHQUFFLElBQUksQ0FBQ3dILEVBQUUsQ0FBQ3RELEtBQUssQ0FBQ00sRUFBRU0sVUFBVSxDQUFDWCxHQUFHLENBQUMsR0FBQ25FLENBQUFBO1FBQUU7UUFBQyxTQUFTcUQsRUFBRXZELENBQUMsRUFBQ0MsQ0FBQyxFQUFDVSxDQUFDO1lBQUUsSUFBSUUsR0FBRUMsR0FBRUUsR0FBRUMsR0FBRUYsSUFBRWQsTUFBSXVELEdBQUU5QixJQUFFLENBQUM7WUFBRSxJQUFJYixLQUFLYixFQUFFZ0IsSUFBRWhCLENBQUMsQ0FBQ2EsRUFBRSxFQUFDQSxLQUFLb0gsSUFBR3ZHLENBQUFBLEVBQUVxRCxTQUFTLElBQUdyRCxDQUFBQSxFQUFFcUQsU0FBUyxHQUFDLENBQUMsQ0FBQSxHQUFHckQsRUFBRXFELFNBQVMsQ0FBQ2xFLEVBQUUsR0FBQ0csQ0FBQUEsSUFBSXFDLENBQUFBLEVBQUVsQyxJQUFJLENBQUNOLE1BQUtBLENBQUFBLElBQUVYLEVBQUVXLEVBQUMsR0FBR0EsS0FBS3dGLElBQUUzRSxDQUFDLENBQUNiLEVBQUUsR0FBQ0csSUFBR0MsQ0FBQUEsS0FBSUEsQ0FBQUEsSUFBRSxDQUFDLENBQUEsR0FBR0EsQ0FBQyxDQUFDSixFQUFFLEdBQUNHLENBQUFBLENBQUM7WUFBRyxJQUFJSCxLQUFLYSxFQUFFO2dCQUFDLElBQUdWLElBQUVVLENBQUMsQ0FBQ2IsRUFBRSxFQUFDQyxJQUFFLElBQUksQ0FBQ3lGLEtBQUssQ0FBQzFGLEVBQUUsRUFBQyxDQUFDQyxHQUFFO29CQUFDLElBQUcsQ0FBQ0MsR0FBRTtvQkFBU0QsSUFBRU4sRUFBRThCLElBQUksQ0FBQyxJQUFJLEVBQUN6QjtnQkFBRTtnQkFBQ1osRUFBRXFDLElBQUksQ0FBQyxJQUFJLEVBQUN4QixHQUFFRTtZQUFFO1lBQUNMLEtBQUdNLEtBQUdOLEVBQUUyQixJQUFJLENBQUMsSUFBSSxFQUFDckI7UUFBRTtRQUFDLFNBQVN1QyxFQUFFeEQsQ0FBQztZQUFFQSxFQUFFa0gsSUFBSTtRQUFFO1FBQUMsU0FBU3pELEVBQUV6RCxDQUFDLEVBQUNDLENBQUM7WUFBRUQsRUFBRWtJLEdBQUcsQ0FBQ2pJO1FBQUU7UUFBQyxTQUFTeUQsRUFBRTFELENBQUM7WUFBRSxJQUFJLENBQUN3RyxHQUFHLENBQUNsQyxHQUFHLENBQUN0RTtRQUFFO1FBQUMsU0FBUzJELEVBQUUzRCxDQUFDLEVBQUNFLENBQUM7WUFBRUQsQ0FBQyxDQUFDRCxFQUFFLEdBQUM7Z0JBQVcsT0FBTyxJQUFJLENBQUNtSSxRQUFRLEdBQUN0RSxFQUFFdkIsSUFBSSxDQUFDLElBQUksRUFBQ3BDLEdBQUU2QixhQUFZLENBQUEsSUFBSSxDQUFDMkYsRUFBRSxJQUFFeEgsRUFBRTRCLEtBQUssQ0FBQyxJQUFJLEVBQUNDLFlBQVcsSUFBSSxBQUFEO1lBQUU7UUFBQztRQUFDLFNBQVM4QixFQUFFN0QsQ0FBQyxFQUFDQyxDQUFDO1lBQUUsSUFBSUMsR0FBRU0sSUFBRSxJQUFJLENBQUMySCxRQUFRLENBQUN4RyxNQUFNO1lBQUMsSUFBSXpCLElBQUUsR0FBRU0sSUFBRU4sR0FBRUEsSUFBSUYsRUFBRThCLEtBQUssQ0FBQyxJQUFJLENBQUNxRyxRQUFRLENBQUNqSSxFQUFFLEVBQUNEO1lBQUcsT0FBTyxJQUFJO1FBQUE7UUFBQ0EsRUFBRUksSUFBSSxHQUFDLFNBQVNKLENBQUM7WUFBRSxJQUFHLElBQUksQ0FBQ3VHLEdBQUcsR0FBQ3hHLEVBQUVDLElBQUcsSUFBSSxDQUFDeUgsRUFBRSxHQUFDLElBQUksQ0FBQ2xCLEdBQUcsQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDRCxLQUFLLEdBQUMsQ0FBQyxHQUFFLElBQUksQ0FBQ0ksS0FBSyxHQUFDLEVBQUUsRUFBQyxJQUFJLENBQUN2QyxLQUFLLEdBQUMsSUFBRyxJQUFJLENBQUN3QyxNQUFNLEdBQUMsQ0FBQyxHQUFFdEYsRUFBRThHLGFBQWEsSUFBRSxDQUFDOUcsRUFBRStHLFFBQVEsRUFBQztnQkFBQyxJQUFJbkksSUFBRW9JLEVBQUUsSUFBSSxDQUFDWixFQUFFLEVBQUM7Z0JBQWN4SCxLQUFHLENBQUMwRCxFQUFFekMsSUFBSSxDQUFDakIsTUFBSyxDQUFBLElBQUksQ0FBQzRILFFBQVEsR0FBQzVILENBQUFBO1lBQUU7WUFBQ3dFLEVBQUVPLFFBQVEsSUFBRTNELEVBQUVpSCxZQUFZLElBQUVDLEVBQUUsSUFBSSxDQUFDZCxFQUFFLEVBQUNoRCxFQUFFTyxRQUFRLENBQUNYLEdBQUcsRUFBQztRQUFTLEdBQUVYLEVBQUUsT0FBTW5ELElBQUdtRCxFQUFFLFNBQVFoRCxJQUFHZ0QsRUFBRSxRQUFPOUMsSUFBRzhDLEVBQUUsUUFBTzdDLElBQUc2QyxFQUFFLFFBQU8zQyxJQUFHMkMsRUFBRSxRQUFPOUIsSUFBRzhCLEVBQUUsT0FBTTFCLElBQUcwQixFQUFFLFFBQU96QixJQUFHeUIsRUFBRSxRQUFPWCxJQUFHVyxFQUFFLFVBQVNULElBQUdTLEVBQUUsV0FBVVA7SUFBRSxJQUFHakQsSUFBRTBCLEVBQUV1RSxHQUFFLFNBQVNuRyxDQUFDO1FBQUUsU0FBU0MsRUFBRUQsQ0FBQyxFQUFDQyxDQUFDO1lBQUUsSUFBSU0sSUFBRVIsRUFBRXlJLElBQUksQ0FBQ3hJLEdBQUVrRCxNQUFJbkQsRUFBRXlJLElBQUksQ0FBQ3hJLEdBQUVrRCxHQUFFLElBQUlpRCxFQUFFaEcsSUFBSTtZQUFFLE9BQU9JLEVBQUVrSCxFQUFFLElBQUVsSCxFQUFFSCxJQUFJLENBQUNKLElBQUdDLElBQUVNLEVBQUVrSSxLQUFLLENBQUN4SSxLQUFHTTtRQUFDO1FBQUNQLEVBQUVJLElBQUksR0FBQyxTQUFTSixDQUFDLEVBQUNPLENBQUM7WUFBRSxJQUFJRyxJQUFFWCxFQUFFQztZQUFHLElBQUcsQ0FBQ1UsRUFBRWdCLE1BQU0sRUFBQyxPQUFPLElBQUk7WUFBQyxJQUFHLE1BQUloQixFQUFFZ0IsTUFBTSxFQUFDLE9BQU96QixFQUFFUyxDQUFDLENBQUMsRUFBRSxFQUFDSDtZQUFHLElBQUlLLElBQUUsRUFBRTtZQUFDLE9BQU9GLEVBQUVnSSxJQUFJLENBQUMsU0FBUzNJLENBQUMsRUFBQ0MsQ0FBQztnQkFBRVksRUFBRWUsSUFBSSxDQUFDMUIsRUFBRUQsR0FBRU87WUFBRyxJQUFHLElBQUksQ0FBQzJILFFBQVEsR0FBQ3RILEdBQUUsSUFBSTtRQUFBO0lBQUMsSUFBRytILElBQUUvRyxFQUFFLFNBQVM3QixDQUFDO1FBQUUsU0FBU0M7WUFBSSxJQUFJRCxJQUFFLElBQUksQ0FBQzZJLEdBQUc7WUFBRyxJQUFJLENBQUNDLE1BQU0sQ0FBQztZQUFRLElBQUk3SSxJQUFFLElBQUksQ0FBQzRJLEdBQUc7WUFBRyxPQUFPLElBQUksQ0FBQ0MsTUFBTSxDQUFDOUksSUFBR0M7UUFBQztRQUFDLFNBQVNDLEVBQUVGLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDO1lBQUUsT0FBTyxLQUFLLE1BQUlELEtBQUlDLENBQUFBLElBQUVELENBQUFBLEdBQUdELEtBQUtpQyxJQUFFakMsSUFBRUU7UUFBQztRQUFDLFNBQVNNLEVBQUVSLENBQUM7WUFBRSxJQUFJQyxJQUFFLGlDQUFpQzhJLElBQUksQ0FBQy9JO1lBQUcsT0FBTyxBQUFDQyxDQUFBQSxJQUFFVSxFQUFFVixDQUFDLENBQUMsRUFBRSxFQUFDQSxDQUFDLENBQUMsRUFBRSxFQUFDQSxDQUFDLENBQUMsRUFBRSxJQUFFRCxDQUFBQSxFQUFHTSxPQUFPLENBQUMsa0JBQWlCO1FBQWlCO1FBQUMsSUFBSU8sSUFBRTtZQUFDaUcsVUFBUztZQUFJdEUsTUFBSztZQUFPd0csT0FBTTtRQUFDO1FBQUVoSixFQUFFSyxJQUFJLEdBQUMsU0FBU0wsQ0FBQyxFQUFDQyxDQUFDLEVBQUNPLENBQUMsRUFBQ0csQ0FBQztZQUFFLElBQUksQ0FBQzZGLEdBQUcsR0FBQ3hHLEdBQUUsSUFBSSxDQUFDMEgsRUFBRSxHQUFDMUgsQ0FBQyxDQUFDLEVBQUU7WUFBQyxJQUFJYyxJQUFFYixDQUFDLENBQUMsRUFBRTtZQUFDTyxDQUFDLENBQUMsRUFBRSxJQUFHTSxDQUFBQSxJQUFFTixDQUFDLENBQUMsRUFBRSxBQUFELEdBQUd5SSxDQUFDLENBQUNuSSxFQUFFLElBQUdBLENBQUFBLElBQUVtSSxDQUFDLENBQUNuSSxFQUFFLEFBQUQsR0FBRyxJQUFJLENBQUN1RyxJQUFJLEdBQUN2RyxHQUFFLElBQUksQ0FBQ29JLElBQUksR0FBQzFJLENBQUMsQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDc0csUUFBUSxHQUFDN0YsRUFBRWhCLENBQUMsQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDNkcsUUFBUSxFQUFDakcsRUFBRWlHLFFBQVEsR0FBRSxJQUFJLENBQUN0RSxJQUFJLEdBQUN0QyxFQUFFRCxDQUFDLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQ3VDLElBQUksRUFBQzNCLEVBQUUyQixJQUFJLEdBQUUsSUFBSSxDQUFDd0csS0FBSyxHQUFDL0gsRUFBRWhCLENBQUMsQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDK0ksS0FBSyxFQUFDbkksRUFBRW1JLEtBQUssR0FBRSxJQUFJLENBQUMvQixJQUFJLEdBQUMsSUFBSSxDQUFDSCxRQUFRLEdBQUMsSUFBSSxDQUFDa0MsS0FBSyxFQUFDLElBQUksQ0FBQ3BDLE1BQU0sR0FBQyxDQUFDLEdBQUUsSUFBSSxDQUFDVSxTQUFTLEdBQUMsTUFBSyxJQUFJLENBQUM2QixJQUFJLEdBQUN0RixFQUFFMUMsSUFBSSxDQUFDLElBQUksQ0FBQ2tHLElBQUksR0FBRSxJQUFJLENBQUMrQixJQUFJLEdBQUN6SSxFQUFFeUksSUFBSSxJQUFFLElBQUksQ0FBQ0EsSUFBSSxJQUFFOUgsRUFBRStILFdBQVcsRUFBQyxJQUFJLENBQUNDLEtBQUssR0FBQzNJLEVBQUUySSxLQUFLLElBQUUsSUFBSSxDQUFDQSxLQUFLLElBQUVoSSxFQUFFaUksWUFBWSxFQUFDakksRUFBRStHLFFBQVEsSUFBRTFILEVBQUUwSCxRQUFRLEdBQUMsSUFBSSxDQUFDbEIsT0FBTyxHQUFDLElBQUksQ0FBQ2tCLFFBQVEsR0FBRSxDQUFBLElBQUksQ0FBQ2xCLE9BQU8sR0FBQyxJQUFJLENBQUNuQyxVQUFVLEVBQUMsSUFBSSxDQUFDK0MsTUFBTSxHQUFDLElBQUksQ0FBQ1YsSUFBSSxHQUFDdkQsSUFBRSxJQUFJLENBQUNnRCxRQUFRLEdBQUMsT0FBTSxDQUFBLFVBQVEsSUFBSSxDQUFDdEUsSUFBSSxHQUFDc0IsSUFBRTdCLENBQUMsQ0FBQyxJQUFJLENBQUNPLElBQUksQ0FBQyxDQUFDLEVBQUUsR0FBQyxFQUFDLElBQUksQ0FBQSxJQUFJLENBQUN3RyxLQUFLLEdBQUNsRixJQUFFLElBQUksQ0FBQ2tGLEtBQUssR0FBQyxPQUFLLEVBQUMsQ0FBQztRQUFFLEdBQUVoSixFQUFFa0ksR0FBRyxHQUFDLFNBQVNsSSxDQUFDO1lBQUVBLElBQUUsSUFBSSxDQUFDd0osT0FBTyxDQUFDeEosR0FBRSxJQUFJLENBQUNrSixJQUFJLEdBQUUsSUFBSSxDQUFDSixNQUFNLENBQUM5SSxJQUFHLElBQUksQ0FBQ3lKLE1BQU07UUFBRSxHQUFFekosRUFBRWdGLFVBQVUsR0FBQyxTQUFTaEYsQ0FBQztZQUFFLElBQUksQ0FBQzRHLE1BQU0sR0FBQyxDQUFDLEdBQUU1RyxJQUFFLElBQUksQ0FBQ3dKLE9BQU8sQ0FBQ3hKLEdBQUUsSUFBSSxDQUFDa0osSUFBSSxHQUFFLElBQUksQ0FBQ0MsSUFBSSxJQUFHLENBQUEsVUFBUSxJQUFJLENBQUN6QixFQUFFLENBQUN0RCxLQUFLLENBQUMsSUFBSSxDQUFDaUQsSUFBSSxDQUFDLElBQUcsQ0FBQSxJQUFJLENBQUN5QixNQUFNLENBQUMsSUFBSSxDQUFDRCxHQUFHLEtBQUksSUFBSSxDQUFDWSxNQUFNLEVBQUMsR0FBRyxVQUFRekosS0FBSUEsQ0FBQUEsSUFBRUMsRUFBRXFDLElBQUksQ0FBQyxJQUFJLENBQUEsQ0FBQyxHQUFHLElBQUksQ0FBQ2dGLFNBQVMsR0FBQ3RIO1FBQUMsR0FBRUEsRUFBRXFJLFFBQVEsR0FBQyxTQUFTckksQ0FBQztZQUFFLElBQUlFLElBQUUsSUFBSSxDQUFDd0gsRUFBRSxDQUFDdEQsS0FBSyxDQUFDLElBQUksQ0FBQ2lELElBQUksQ0FBQyxJQUFFLElBQUksQ0FBQ21DLE9BQU8sQ0FBQyxJQUFJLENBQUNYLEdBQUcsSUFBRyxJQUFJLENBQUNLLElBQUk7WUFBRWxKLElBQUUsSUFBSSxDQUFDd0osT0FBTyxDQUFDeEosR0FBRSxJQUFJLENBQUNrSixJQUFJLEdBQUUsSUFBSSxDQUFDQyxJQUFJLElBQUcsQ0FBQSxVQUFRakosS0FBSUEsQ0FBQUEsSUFBRSxJQUFJLENBQUNzSixPQUFPLENBQUMsSUFBSSxDQUFDWCxHQUFHLElBQUcsSUFBSSxDQUFDSyxJQUFJLENBQUEsR0FBRyxVQUFRbEosS0FBSUEsQ0FBQUEsSUFBRUMsRUFBRXFDLElBQUksQ0FBQyxJQUFJLENBQUEsQ0FBQyxHQUFHLElBQUksQ0FBQ29ILEtBQUssR0FBQyxJQUFJQyxFQUFFO2dCQUFDQyxNQUFLMUo7Z0JBQUUySixJQUFHN0o7Z0JBQUU4RyxVQUFTLElBQUksQ0FBQ0EsUUFBUTtnQkFBQ2tDLE9BQU0sSUFBSSxDQUFDQSxLQUFLO2dCQUFDeEcsTUFBSyxJQUFJLENBQUNBLElBQUk7Z0JBQUNzRyxRQUFPLElBQUksQ0FBQ0EsTUFBTTtnQkFBQy9CLFNBQVEsSUFBSTtZQUFBO1FBQUUsR0FBRS9HLEVBQUU2SSxHQUFHLEdBQUM7WUFBVyxPQUFPUCxFQUFFLElBQUksQ0FBQ1osRUFBRSxFQUFDLElBQUksQ0FBQ0wsSUFBSTtRQUFDLEdBQUVySCxFQUFFOEksTUFBTSxHQUFDLFNBQVM5SSxDQUFDO1lBQUV3SSxFQUFFLElBQUksQ0FBQ2QsRUFBRSxFQUFDLElBQUksQ0FBQ0wsSUFBSSxFQUFDckg7UUFBRSxHQUFFQSxFQUFFa0gsSUFBSSxHQUFDO1lBQVksQ0FBQSxJQUFJLENBQUNOLE1BQU0sSUFBRSxJQUFJLENBQUNVLFNBQVMsQUFBRCxLQUFLLENBQUEsSUFBSSxDQUFDVixNQUFNLEdBQUMsQ0FBQyxHQUFFLElBQUksQ0FBQ1UsU0FBUyxHQUFDLE1BQUtrQixFQUFFLElBQUksQ0FBQ2QsRUFBRSxFQUFDLElBQUksQ0FBQ0wsSUFBSSxFQUFDLElBQUksQ0FBQ3dCLEdBQUcsR0FBRTtZQUFHLElBQUk3SSxJQUFFLElBQUksQ0FBQzBKLEtBQUs7WUFBQzFKLEtBQUdBLEVBQUUrRyxPQUFPLElBQUUvRyxFQUFFMEcsT0FBTztRQUFFLEdBQUUxRyxFQUFFd0osT0FBTyxHQUFDLFNBQVN4SixDQUFDLEVBQUNDLENBQUM7WUFBRSxJQUFHLFVBQVFELEtBQUcsSUFBSSxDQUFDbUosSUFBSSxFQUFDLE9BQU9uSjtZQUFFLElBQUlFLEdBQUVTLElBQUUsWUFBVSxPQUFPWCxHQUFFYSxJQUFFLFlBQVUsT0FBT2I7WUFBRSxPQUFPQztnQkFBRyxLQUFLcUQ7b0JBQUUsSUFBRzNDLEdBQUUsT0FBT1g7b0JBQUUsSUFBR2EsS0FBRyxPQUFLYixFQUFFTSxPQUFPLENBQUM4QyxHQUFFLEtBQUksT0FBTSxDQUFDcEQ7b0JBQUVFLElBQUU7b0JBQW1CO2dCQUFNLEtBQUtxRDtvQkFBRSxJQUFHMUMsR0FBRTt3QkFBQyxJQUFHLE9BQUtiLEtBQUcsSUFBSSxDQUFDOEosUUFBUSxFQUFDLE9BQU8sSUFBSSxDQUFDQSxRQUFRO3dCQUFDLElBQUc3SixFQUFFa0IsSUFBSSxDQUFDbkIsSUFBRyxPQUFNLE9BQUtBLEVBQUV3RSxNQUFNLENBQUMsTUFBSSxLQUFHeEUsRUFBRTJCLE1BQU0sR0FBQzNCLElBQUVRLEVBQUVSO29CQUFFO29CQUFDRSxJQUFFO29CQUFvQjtnQkFBTSxLQUFLc0Q7b0JBQUUsSUFBRzdDLEdBQUUsT0FBT1gsSUFBRSxJQUFJLENBQUNvSixJQUFJO29CQUFDLElBQUd2SSxLQUFHWixFQUFFa0IsSUFBSSxDQUFDbkIsSUFBRyxPQUFPQTtvQkFBRUUsSUFBRTtvQkFBNkI7Z0JBQU0sS0FBS3VEO29CQUFFLElBQUc5QyxHQUFFLE9BQU9YLElBQUUsSUFBSSxDQUFDb0osSUFBSTtvQkFBQyxJQUFHdkksS0FBR1osRUFBRWtCLElBQUksQ0FBQ25CLElBQUcsT0FBT0E7b0JBQUVFLElBQUU7b0JBQWtDO2dCQUFNLEtBQUt3RDtvQkFBRSxJQUFHL0MsR0FBRSxPQUFPWCxJQUFFLElBQUksQ0FBQ3NKLEtBQUs7b0JBQUMsSUFBR3pJLEtBQUdaLEVBQUVrQixJQUFJLENBQUNuQixJQUFHLE9BQU9BO29CQUFFRSxJQUFFO29CQUErQjtnQkFBTSxLQUFLeUQ7b0JBQUUsSUFBR2hELEdBQUUsT0FBT1g7b0JBQUUsSUFBR2EsS0FBRzRDLEVBQUV0QyxJQUFJLENBQUNuQixJQUFHLE9BQU9BO29CQUFFRSxJQUFFO1lBQXVDO1lBQUMsT0FBT1ksRUFBRVosR0FBRUYsSUFBR0E7UUFBQyxHQUFFQSxFQUFFeUosTUFBTSxHQUFDO1lBQVcsSUFBSSxDQUFDL0IsRUFBRSxDQUFDRSxZQUFZO1FBQUE7SUFBQyxJQUFHbUMsSUFBRWxJLEVBQUUrRyxHQUFFLFNBQVM1SSxDQUFDLEVBQUNDLENBQUM7UUFBRUQsRUFBRUssSUFBSSxHQUFDO1lBQVdKLEVBQUVJLElBQUksQ0FBQ3lCLEtBQUssQ0FBQyxJQUFJLEVBQUNDLFlBQVcsSUFBSSxDQUFDK0gsUUFBUSxJQUFHLENBQUEsSUFBSSxDQUFDQSxRQUFRLEdBQUMsSUFBSSxDQUFDTixPQUFPLENBQUMsSUFBSSxDQUFDWCxHQUFHLElBQUd0RixFQUFDO1FBQUU7SUFBQyxJQUFHeUcsSUFBRW5JLEVBQUUrRyxHQUFFLFNBQVM1SSxDQUFDLEVBQUNDLENBQUM7UUFBRUQsRUFBRUssSUFBSSxHQUFDO1lBQVdKLEVBQUVJLElBQUksQ0FBQ3lCLEtBQUssQ0FBQyxJQUFJLEVBQUNDLFlBQVcsSUFBSSxDQUFDb0YsT0FBTyxHQUFDLElBQUksQ0FBQ2tCLFFBQVE7UUFBQSxHQUFFckksRUFBRTZJLEdBQUcsR0FBQztZQUFXLE9BQU8sSUFBSSxDQUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQ2EsSUFBSSxDQUFDO1FBQUUsR0FBRXJILEVBQUU4SSxNQUFNLEdBQUMsU0FBUzlJLENBQUM7WUFBRSxJQUFJLENBQUN3RyxHQUFHLENBQUMsSUFBSSxDQUFDYSxJQUFJLENBQUMsQ0FBQ3JIO1FBQUU7SUFBQyxJQUFHaUssSUFBRXBJLEVBQUUrRyxHQUFFLFNBQVM1SSxDQUFDLEVBQUNDLENBQUM7UUFBRSxTQUFTQyxFQUFFRixDQUFDLEVBQUNDLENBQUM7WUFBRSxJQUFJQyxHQUFFTSxHQUFFRyxHQUFFRSxHQUFFQztZQUFFLElBQUlaLEtBQUtGLEVBQUVhLElBQUVvSCxDQUFDLENBQUMvSCxFQUFFLEVBQUNTLElBQUVFLENBQUMsQ0FBQyxFQUFFLEVBQUNMLElBQUVLLENBQUMsQ0FBQyxFQUFFLElBQUVYLEdBQUVZLElBQUUsSUFBSSxDQUFDMEksT0FBTyxDQUFDeEosQ0FBQyxDQUFDRSxFQUFFLEVBQUNTLElBQUdWLEVBQUVxQyxJQUFJLENBQUMsSUFBSSxFQUFDOUIsR0FBRU0sR0FBRUg7UUFBRTtRQUFDWCxFQUFFSyxJQUFJLEdBQUM7WUFBV0osRUFBRUksSUFBSSxDQUFDeUIsS0FBSyxDQUFDLElBQUksRUFBQ0MsWUFBVyxJQUFJLENBQUNtSSxPQUFPLElBQUcsQ0FBQSxJQUFJLENBQUNBLE9BQU8sR0FBQyxDQUFDLEdBQUVqQyxFQUFFa0MsV0FBVyxJQUFFN0ksRUFBRTZJLFdBQVcsSUFBRyxDQUFBLElBQUksQ0FBQ0QsT0FBTyxDQUFDQyxXQUFXLEdBQUM3SSxFQUFFNkksV0FBVyxFQUFDM0IsRUFBRSxJQUFJLENBQUNkLEVBQUUsRUFBQyxJQUFJLENBQUNMLElBQUksRUFBQyxJQUFJLENBQUNqRCxLQUFLLENBQUMsSUFBSSxDQUFDOEYsT0FBTyxJQUFHLElBQUksQ0FBQ1QsTUFBTSxFQUFDLENBQUM7UUFBRSxHQUFFekosRUFBRWtJLEdBQUcsR0FBQyxTQUFTbEksQ0FBQztZQUFFRSxFQUFFb0MsSUFBSSxDQUFDLElBQUksRUFBQ3RDLEdBQUUsU0FBU0EsQ0FBQyxFQUFDQyxDQUFDO2dCQUFFLElBQUksQ0FBQ2lLLE9BQU8sQ0FBQ2xLLEVBQUUsR0FBQ0M7WUFBQyxJQUFHdUksRUFBRSxJQUFJLENBQUNkLEVBQUUsRUFBQyxJQUFJLENBQUNMLElBQUksRUFBQyxJQUFJLENBQUNqRCxLQUFLLENBQUMsSUFBSSxDQUFDOEYsT0FBTyxJQUFHLElBQUksQ0FBQ1QsTUFBTTtRQUFFLEdBQUV6SixFQUFFZ0YsVUFBVSxHQUFDLFNBQVNoRixDQUFDO1lBQUUsSUFBSUMsSUFBRSxJQUFJLENBQUNtSyxNQUFNLENBQUNwSztZQUFHLElBQUksQ0FBQzBKLEtBQUssR0FBQyxJQUFJVyxFQUFFO2dCQUFDSCxTQUFRLElBQUksQ0FBQ0EsT0FBTztnQkFBQ0UsUUFBT25LO2dCQUFFNkcsVUFBUyxJQUFJLENBQUNBLFFBQVE7Z0JBQUNrQyxPQUFNLElBQUksQ0FBQ0EsS0FBSztnQkFBQ3hHLE1BQUssSUFBSSxDQUFDQSxJQUFJO1lBQUE7WUFBRyxJQUFJdEMsR0FBRU0sSUFBRSxDQUFDO1lBQUUsSUFBSU4sS0FBSyxJQUFJLENBQUNnSyxPQUFPLENBQUMxSixDQUFDLENBQUNOLEVBQUUsR0FBQ0EsS0FBS0QsSUFBRUEsQ0FBQyxDQUFDQyxFQUFFLEdBQUMsSUFBSSxDQUFDZ0ssT0FBTyxDQUFDaEssRUFBRTtZQUFDLElBQUksQ0FBQzBHLE1BQU0sR0FBQyxDQUFDLEdBQUUsSUFBSSxDQUFDVSxTQUFTLEdBQUMsSUFBSSxDQUFDbEQsS0FBSyxDQUFDNUQ7UUFBRSxHQUFFUixFQUFFcUksUUFBUSxHQUFDLFNBQVNySSxDQUFDO1lBQUUsSUFBSUMsSUFBRSxJQUFJLENBQUNtSyxNQUFNLENBQUNwSztZQUFHLElBQUksQ0FBQzBKLEtBQUssR0FBQyxJQUFJVyxFQUFFO2dCQUFDSCxTQUFRLElBQUksQ0FBQ0EsT0FBTztnQkFBQ0UsUUFBT25LO2dCQUFFNkcsVUFBUyxJQUFJLENBQUNBLFFBQVE7Z0JBQUNrQyxPQUFNLElBQUksQ0FBQ0EsS0FBSztnQkFBQ3hHLE1BQUssSUFBSSxDQUFDQSxJQUFJO2dCQUFDc0csUUFBTyxJQUFJLENBQUNBLE1BQU07Z0JBQUMvQixTQUFRLElBQUk7WUFBQTtRQUFFLEdBQUUvRyxFQUFFOEksTUFBTSxHQUFDO1lBQVdOLEVBQUUsSUFBSSxDQUFDZCxFQUFFLEVBQUMsSUFBSSxDQUFDTCxJQUFJLEVBQUMsSUFBSSxDQUFDakQsS0FBSyxDQUFDLElBQUksQ0FBQzhGLE9BQU87UUFBRSxHQUFFbEssRUFBRW9FLEtBQUssR0FBQyxTQUFTcEUsQ0FBQztZQUFFLElBQUlDLEdBQUVDLElBQUU7WUFBRyxJQUFJRCxLQUFLRCxFQUFFRSxLQUFHRCxJQUFFLE1BQUlELENBQUMsQ0FBQ0MsRUFBRSxHQUFDO1lBQUssT0FBT0M7UUFBQyxHQUFFRixFQUFFb0ssTUFBTSxHQUFDLFNBQVNwSyxDQUFDO1lBQUUsSUFBSUMsR0FBRU8sSUFBRSxDQUFDO1lBQUUsT0FBT04sRUFBRW9DLElBQUksQ0FBQyxJQUFJLEVBQUN0QyxHQUFFLFNBQVNBLENBQUMsRUFBQ0UsQ0FBQyxFQUFDUyxDQUFDO2dCQUFFSCxDQUFDLENBQUNSLEVBQUUsR0FBQ0UsR0FBRSxLQUFLLE1BQUksSUFBSSxDQUFDZ0ssT0FBTyxDQUFDbEssRUFBRSxJQUFHQyxDQUFBQSxJQUFFLEdBQUUsQ0FBQ0QsRUFBRXNLLE9BQU8sQ0FBQyxZQUFXckssQ0FBQUEsSUFBRSxDQUFBLEdBQUcsSUFBSSxDQUFDaUssT0FBTyxDQUFDbEssRUFBRSxHQUFDLElBQUksQ0FBQ3dKLE9BQU8sQ0FBQ3ZKLEdBQUVVLEVBQUM7WUFBRSxJQUFHSDtRQUFDO0lBQUMsSUFBR21KLElBQUU5SCxFQUFFLFNBQVM1QixDQUFDO1FBQUUsU0FBU0MsRUFBRUYsQ0FBQztZQUFFLE1BQUlrQyxFQUFFTixJQUFJLENBQUM1QixNQUFJcUYsRUFBRXZFO1FBQUU7UUFBQyxTQUFTQTtZQUFJLElBQUlkLEdBQUVDLEdBQUVDLEdBQUVNLElBQUUwQixFQUFFUCxNQUFNO1lBQUMsSUFBR25CLEdBQUUsSUFBSTZFLEVBQUV2RSxJQUFHYixJQUFFNEYsS0FBSTdGLElBQUVRLEdBQUVSLEtBQUtFLElBQUVnQyxDQUFDLENBQUNsQyxFQUFFLEVBQUNFLEtBQUdBLEVBQUVxSyxNQUFNLENBQUN0SztRQUFFO1FBQUMsU0FBU2dCLEVBQUVoQixDQUFDO1lBQUUsSUFBSUMsR0FBRU0sSUFBRVIsRUFBRXdLLE9BQU8sQ0FBQ3ZLLEdBQUVpQztZQUFHMUIsS0FBRyxLQUFJTixDQUFBQSxJQUFFZ0MsRUFBRXhCLEtBQUssQ0FBQ0YsSUFBRSxJQUFHMEIsRUFBRVAsTUFBTSxHQUFDbkIsR0FBRU4sRUFBRXlCLE1BQU0sSUFBR08sQ0FBQUEsSUFBRUEsRUFBRXVJLE1BQU0sQ0FBQ3ZLLEVBQUMsQ0FBQztRQUFFO1FBQUMsU0FBU2EsRUFBRWYsQ0FBQztZQUFFLE9BQU8wQyxLQUFLZ0ksS0FBSyxDQUFDMUssSUFBRWdELEtBQUdBO1FBQUM7UUFBQyxTQUFTdEIsRUFBRTFCLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDO1lBQUUsT0FBT1MsRUFBRVgsQ0FBQyxDQUFDLEVBQUUsR0FBQ0UsSUFBR0QsQ0FBQUEsQ0FBQyxDQUFDLEVBQUUsR0FBQ0QsQ0FBQyxDQUFDLEVBQUUsQUFBRCxHQUFHQSxDQUFDLENBQUMsRUFBRSxHQUFDRSxJQUFHRCxDQUFBQSxDQUFDLENBQUMsRUFBRSxHQUFDRCxDQUFDLENBQUMsRUFBRSxBQUFELEdBQUdBLENBQUMsQ0FBQyxFQUFFLEdBQUNFLElBQUdELENBQUFBLENBQUMsQ0FBQyxFQUFFLEdBQUNELENBQUMsQ0FBQyxFQUFFLEFBQUQ7UUFBRztRQUFDLElBQUk2QixJQUFFO1lBQUNXLE1BQUtQLEVBQUVPLElBQUksQ0FBQyxFQUFFO1lBQUNvSCxNQUFLO1lBQUVDLElBQUc7UUFBQztRQUFFNUosRUFBRUksSUFBSSxHQUFDLFNBQVNMLENBQUM7WUFBRSxJQUFJLENBQUM4RyxRQUFRLEdBQUM5RyxFQUFFOEcsUUFBUSxJQUFFLEdBQUUsSUFBSSxDQUFDa0MsS0FBSyxHQUFDaEosRUFBRWdKLEtBQUssSUFBRTtZQUFFLElBQUkvSSxJQUFFRCxFQUFFd0MsSUFBSSxJQUFFWCxFQUFFVyxJQUFJO1lBQUNQLENBQUMsQ0FBQ2hDLEVBQUUsSUFBR0EsQ0FBQUEsSUFBRWdDLENBQUMsQ0FBQ2hDLEVBQUUsQ0FBQyxFQUFFLEFBQUQsR0FBRyxjQUFZLE9BQU9BLEtBQUlBLENBQUFBLElBQUU0QixFQUFFVyxJQUFJLEFBQUQsR0FBRyxJQUFJLENBQUNBLElBQUksR0FBQ3ZDLEdBQUUsSUFBSSxDQUFDNkksTUFBTSxHQUFDOUksRUFBRThJLE1BQU0sSUFBRWpJLEdBQUUsSUFBSSxDQUFDbUcsUUFBUSxHQUFDaEgsRUFBRWdILFFBQVEsSUFBRW5HLEdBQUUsSUFBSSxDQUFDa0csT0FBTyxHQUFDL0csRUFBRStHLE9BQU8sSUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDTSxJQUFJLEdBQUNySCxFQUFFcUgsSUFBSTtZQUFDLElBQUluSCxJQUFFRixFQUFFNEosSUFBSSxFQUFDcEosSUFBRVIsRUFBRTZKLEVBQUU7WUFBQyxLQUFLLE1BQUkzSixLQUFJQSxDQUFBQSxJQUFFMkIsRUFBRStILElBQUksQUFBRCxHQUFHLEtBQUssTUFBSXBKLEtBQUlBLENBQUFBLElBQUVxQixFQUFFZ0ksRUFBRSxBQUFELEdBQUcsSUFBSSxDQUFDVCxJQUFJLEdBQUNwSixFQUFFb0osSUFBSSxJQUFFLElBQUcsWUFBVSxPQUFPbEosS0FBRyxZQUFVLE9BQU9NLElBQUcsQ0FBQSxJQUFJLENBQUNtSyxLQUFLLEdBQUN6SyxHQUFFLElBQUksQ0FBQzBLLE1BQU0sR0FBQ3BLLElBQUVOLENBQUFBLElBQUcsSUFBSSxDQUFDMkssTUFBTSxDQUFDckssR0FBRU4sSUFBRyxJQUFJLENBQUM0SyxLQUFLLEdBQUMsSUFBSSxDQUFDSCxLQUFLLEdBQUMsSUFBSSxDQUFDdkIsSUFBSSxFQUFDLElBQUksQ0FBQ1YsS0FBSyxHQUFDN0MsS0FBSTdGLEVBQUUrSyxRQUFRLEtBQUcsQ0FBQyxLQUFHLElBQUksQ0FBQ0MsSUFBSTtRQUFFLEdBQUUvSyxFQUFFK0ssSUFBSSxHQUFDO1lBQVcsSUFBSSxDQUFDcEUsTUFBTSxJQUFHLENBQUEsSUFBSSxDQUFDOEIsS0FBSyxJQUFHLENBQUEsSUFBSSxDQUFDQSxLQUFLLEdBQUM3QyxHQUFFLEdBQUcsSUFBSSxDQUFDZSxNQUFNLEdBQUMsQ0FBQyxHQUFFMUcsRUFBRSxJQUFJLENBQUE7UUFBRSxHQUFFRCxFQUFFaUgsSUFBSSxHQUFDO1lBQVcsSUFBSSxDQUFDTixNQUFNLElBQUcsQ0FBQSxJQUFJLENBQUNBLE1BQU0sR0FBQyxDQUFDLEdBQUUzRixFQUFFLElBQUksQ0FBQTtRQUFFLEdBQUVoQixFQUFFc0ssTUFBTSxHQUFDLFNBQVN2SyxDQUFDO1lBQUUsSUFBSUMsR0FBRUMsSUFBRUYsSUFBRSxJQUFJLENBQUMwSSxLQUFLO1lBQUMsSUFBRyxJQUFJLENBQUNNLEtBQUssRUFBQztnQkFBQyxJQUFHOUksS0FBRyxJQUFJLENBQUM4SSxLQUFLLEVBQUM7Z0JBQU85SSxLQUFHLElBQUksQ0FBQzhJLEtBQUs7WUFBQTtZQUFDLElBQUc5SSxJQUFFLElBQUksQ0FBQzRHLFFBQVEsRUFBQztnQkFBQyxJQUFJdEcsSUFBRSxJQUFJLENBQUNnQyxJQUFJLENBQUN0QyxHQUFFLEdBQUUsR0FBRSxJQUFJLENBQUM0RyxRQUFRO2dCQUFFLE9BQU83RyxJQUFFLElBQUksQ0FBQ2dMLFFBQVEsR0FBQ3ZKLEVBQUUsSUFBSSxDQUFDdUosUUFBUSxFQUFDLElBQUksQ0FBQ0MsTUFBTSxFQUFDMUssS0FBR08sRUFBRSxJQUFJLENBQUM0SixLQUFLLEdBQUNuSyxJQUFFLElBQUksQ0FBQ29LLE1BQU0sR0FBRSxJQUFJLENBQUNFLEtBQUssR0FBQzdLLElBQUUsSUFBSSxDQUFDbUosSUFBSSxFQUFDLEtBQUssSUFBSSxDQUFDTixNQUFNLENBQUN4RyxJQUFJLENBQUMsSUFBSSxDQUFDeUUsT0FBTyxFQUFDLElBQUksQ0FBQytELEtBQUs7WUFBQztZQUFDN0ssSUFBRSxJQUFJLENBQUNrTCxNQUFNLElBQUUsSUFBSSxDQUFDUixLQUFLLEdBQUMsSUFBSSxDQUFDQyxNQUFNLEVBQUMsSUFBSSxDQUFDRSxLQUFLLEdBQUM3SyxJQUFFLElBQUksQ0FBQ21KLElBQUksRUFBQyxJQUFJLENBQUNOLE1BQU0sQ0FBQ3hHLElBQUksQ0FBQyxJQUFJLENBQUN5RSxPQUFPLEVBQUMsSUFBSSxDQUFDK0QsS0FBSyxHQUFFLElBQUksQ0FBQzlELFFBQVEsQ0FBQzFFLElBQUksQ0FBQyxJQUFJLENBQUN5RSxPQUFPLEdBQUUsSUFBSSxDQUFDTCxPQUFPO1FBQUUsR0FBRXpHLEVBQUU0SyxNQUFNLEdBQUMsU0FBUzdLLENBQUMsRUFBQ0MsQ0FBQztZQUFFLElBQUdBLEtBQUcsSUFBR0QsS0FBRyxJQUFHLE9BQUtBLEVBQUV3RSxNQUFNLENBQUMsSUFBRyxPQUFPLElBQUksQ0FBQ3lHLFFBQVEsR0FBQ3pLLEVBQUVQLElBQUcsSUFBSSxDQUFDaUwsTUFBTSxHQUFDMUssRUFBRVIsSUFBRyxJQUFJLENBQUNtTCxNQUFNLEdBQUNuTCxHQUFFLElBQUksQ0FBQzJLLEtBQUssR0FBQyxHQUFFLEtBQUssQ0FBQSxJQUFJLENBQUNDLE1BQU0sR0FBQyxDQUFBO1lBQUcsSUFBRyxDQUFDLElBQUksQ0FBQ3hCLElBQUksRUFBQztnQkFBQyxJQUFJbEosSUFBRUQsRUFBRUssT0FBTyxDQUFDOEMsR0FBRSxLQUFJekMsSUFBRVgsRUFBRU0sT0FBTyxDQUFDOEMsR0FBRTtnQkFBSWxELE1BQUlTLEtBQUdLLEVBQUUsU0FBUWYsR0FBRUQsSUFBRyxJQUFJLENBQUNvSixJQUFJLEdBQUNsSjtZQUFDO1lBQUNELElBQUVvQixXQUFXcEIsSUFBR0QsSUFBRXFCLFdBQVdyQixJQUFHLElBQUksQ0FBQzJLLEtBQUssR0FBQyxJQUFJLENBQUNHLEtBQUssR0FBQzdLLEdBQUUsSUFBSSxDQUFDMkssTUFBTSxHQUFDNUssSUFBRUM7UUFBQyxHQUFFQSxFQUFFeUcsT0FBTyxHQUFDO1lBQVcsSUFBSSxDQUFDUSxJQUFJLElBQUcsSUFBSSxDQUFDSCxPQUFPLEdBQUMsTUFBSyxJQUFJLENBQUN2RSxJQUFJLEdBQUMsSUFBSSxDQUFDc0csTUFBTSxHQUFDLElBQUksQ0FBQzlCLFFBQVEsR0FBQ25HO1FBQUM7UUFBRSxJQUFJcUIsSUFBRSxFQUFFLEVBQUNjLElBQUU7SUFBRyxJQUFHNkQsSUFBRWhGLEVBQUU4SCxHQUFFLFNBQVMzSixDQUFDO1FBQUVBLEVBQUVLLElBQUksR0FBQyxTQUFTTCxDQUFDO1lBQUUsSUFBSSxDQUFDOEcsUUFBUSxHQUFDOUcsRUFBRThHLFFBQVEsSUFBRSxHQUFFLElBQUksQ0FBQ0UsUUFBUSxHQUFDaEgsRUFBRWdILFFBQVEsSUFBRW5HLEdBQUUsSUFBSSxDQUFDa0csT0FBTyxHQUFDL0csRUFBRStHLE9BQU8sRUFBQyxJQUFJLENBQUNpRSxJQUFJO1FBQUUsR0FBRWhMLEVBQUV1SyxNQUFNLEdBQUMsU0FBU3ZLLENBQUM7WUFBRSxJQUFJQyxJQUFFRCxJQUFFLElBQUksQ0FBQzBJLEtBQUs7WUFBQ3pJLElBQUUsSUFBSSxDQUFDNkcsUUFBUSxJQUFHLENBQUEsSUFBSSxDQUFDRSxRQUFRLENBQUMxRSxJQUFJLENBQUMsSUFBSSxDQUFDeUUsT0FBTyxHQUFFLElBQUksQ0FBQ0wsT0FBTyxFQUFDO1FBQUU7SUFBQyxJQUFHMkQsSUFBRXhJLEVBQUU4SCxHQUFFLFNBQVMzSixDQUFDLEVBQUNDLENBQUM7UUFBRUQsRUFBRUssSUFBSSxHQUFDLFNBQVNMLENBQUM7WUFBRSxJQUFJLENBQUMrRyxPQUFPLEdBQUMvRyxFQUFFK0csT0FBTyxFQUFDLElBQUksQ0FBQytCLE1BQU0sR0FBQzlJLEVBQUU4SSxNQUFNLEVBQUMsSUFBSSxDQUFDc0MsTUFBTSxHQUFDLEVBQUUsRUFBQyxJQUFJLENBQUNsQixPQUFPLEdBQUNsSyxFQUFFa0ssT0FBTztZQUFDLElBQUlqSyxHQUFFQztZQUFFLElBQUlELEtBQUtELEVBQUVvSyxNQUFNLENBQUNsSyxJQUFFRixFQUFFb0ssTUFBTSxDQUFDbkssRUFBRSxFQUFDLElBQUksQ0FBQ2lLLE9BQU8sQ0FBQ2pLLEVBQUUsS0FBR0MsS0FBRyxJQUFJLENBQUNrTCxNQUFNLENBQUN4SixJQUFJLENBQUMsSUFBSStILEVBQUU7Z0JBQUN0QyxNQUFLcEg7Z0JBQUUySixNQUFLLElBQUksQ0FBQ00sT0FBTyxDQUFDakssRUFBRTtnQkFBQzRKLElBQUczSjtnQkFBRTRHLFVBQVM5RyxFQUFFOEcsUUFBUTtnQkFBQ2tDLE9BQU1oSixFQUFFZ0osS0FBSztnQkFBQ3hHLE1BQUt4QyxFQUFFd0MsSUFBSTtnQkFBQ3VJLFVBQVMsQ0FBQztZQUFDO1lBQUksSUFBSSxDQUFDQyxJQUFJO1FBQUUsR0FBRWhMLEVBQUV1SyxNQUFNLEdBQUMsU0FBU3ZLLENBQUM7WUFBRSxJQUFJQyxHQUFFQyxHQUFFTSxJQUFFLElBQUksQ0FBQzRLLE1BQU0sQ0FBQ3pKLE1BQU0sRUFBQ2hCLElBQUUsQ0FBQztZQUFFLElBQUlWLElBQUVPLEdBQUVQLEtBQUtDLElBQUUsSUFBSSxDQUFDa0wsTUFBTSxDQUFDbkwsRUFBRSxFQUFDQyxFQUFFNkcsT0FBTyxJQUFHN0csQ0FBQUEsRUFBRXFLLE1BQU0sQ0FBQ3ZLLElBQUcsSUFBSSxDQUFDa0ssT0FBTyxDQUFDaEssRUFBRW1ILElBQUksQ0FBQyxHQUFDbkgsRUFBRTRLLEtBQUssRUFBQ25LLElBQUUsQ0FBQyxDQUFBO1lBQUcsT0FBT0EsSUFBRSxLQUFLLENBQUEsSUFBSSxDQUFDbUksTUFBTSxJQUFFLElBQUksQ0FBQ0EsTUFBTSxDQUFDeEcsSUFBSSxDQUFDLElBQUksQ0FBQ3lFLE9BQU8sQ0FBQSxJQUFHLElBQUksQ0FBQ0wsT0FBTztRQUFFLEdBQUUxRyxFQUFFMEcsT0FBTyxHQUFDO1lBQVcsSUFBR3pHLEVBQUV5RyxPQUFPLENBQUNwRSxJQUFJLENBQUMsSUFBSSxHQUFFLElBQUksQ0FBQzhJLE1BQU0sRUFBQztnQkFBQyxJQUFJcEwsR0FBRUUsSUFBRSxJQUFJLENBQUNrTCxNQUFNLENBQUN6SixNQUFNO2dCQUFDLElBQUkzQixJQUFFRSxHQUFFRixLQUFLLElBQUksQ0FBQ29MLE1BQU0sQ0FBQ3BMLEVBQUUsQ0FBQzBHLE9BQU87Z0JBQUcsSUFBSSxDQUFDMEUsTUFBTSxHQUFDLE1BQUssSUFBSSxDQUFDbEIsT0FBTyxHQUFDO1lBQUk7UUFBQztJQUFDLElBQUc1SSxJQUFFckIsRUFBRW9MLE1BQU0sR0FBQztRQUFDOUosT0FBTSxDQUFDO1FBQUU4SCxhQUFZO1FBQUtFLGNBQWE7UUFBTW5CLGVBQWMsQ0FBQztRQUFFRyxjQUFhLENBQUM7UUFBRTRCLGFBQVk7UUFBRzlCLFVBQVMsQ0FBQzNELEVBQUVNLFVBQVU7UUFBQ3NHLFlBQVcsRUFBRTtJQUFBO0lBQUVyTCxFQUFFb0ksUUFBUSxHQUFDLFNBQVNySSxDQUFDO1FBQUUsSUFBRyxDQUFDMEUsRUFBRU0sVUFBVSxFQUFDLE9BQU8xRCxFQUFFK0csUUFBUSxHQUFDLENBQUM7UUFBRS9HLEVBQUVnSyxVQUFVLENBQUMxSixJQUFJLENBQUMsTUFBSTVCLElBQUU7UUFBSyxJQUFJQyxJQUFFLElBQUlzTCxPQUFPakssRUFBRWdLLFVBQVUsQ0FBQ3RELElBQUksQ0FBQyxNQUFLO1FBQUsxRyxFQUFFK0csUUFBUSxHQUFDcEksRUFBRWtCLElBQUksQ0FBQ3FLLFVBQVVDLFNBQVM7SUFBQyxHQUFFeEwsRUFBRW9JLFFBQVEsQ0FBQyxxQkFBb0JwSSxFQUFFeUosS0FBSyxHQUFDLFNBQVMxSixDQUFDO1FBQUUsT0FBTyxJQUFJMkosRUFBRTNKO0lBQUUsR0FBRUMsRUFBRStJLEtBQUssR0FBQyxTQUFTaEosQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUM7UUFBRSxPQUFPLElBQUkyRyxFQUFFO1lBQUNHLFVBQVMvRztZQUFFNkcsVUFBUzlHO1lBQUUrRyxTQUFRN0c7UUFBQztJQUFFLEdBQUVGLEVBQUUwTCxFQUFFLENBQUMzTCxJQUFJLEdBQUMsU0FBU0MsQ0FBQztRQUFFLE9BQU9DLEVBQUVxQyxJQUFJLENBQUMsTUFBSyxJQUFJLEVBQUN0QztJQUFFO0lBQUUsSUFBSXdJLElBQUV4SSxFQUFFb0UsS0FBSyxFQUFDa0UsSUFBRXRJLEVBQUVzRSxHQUFHLEVBQUMyRSxJQUFFO1FBQUNsRSxXQUFVTCxFQUFFSyxTQUFTLElBQUVMLEVBQUVLLFNBQVMsQ0FBQ1QsR0FBRztJQUFBLEdBQUUrQixJQUFFO1FBQUNzRixPQUFNO1lBQUM1QjtZQUFFeEc7U0FBRTtRQUFDcUksWUFBVztZQUFDN0I7WUFBRXhHO1lBQUU7U0FBbUI7UUFBQyxpQkFBZ0I7WUFBQ3dHO1lBQUV4RztTQUFFO1FBQUMsZ0JBQWU7WUFBQ3dHO1lBQUV4RztTQUFFO1FBQUMsb0JBQW1CO1lBQUN3RztZQUFFeEc7U0FBRTtRQUFDLHNCQUFxQjtZQUFDd0c7WUFBRXhHO1NBQUU7UUFBQyx1QkFBc0I7WUFBQ3dHO1lBQUV4RztTQUFFO1FBQUMscUJBQW9CO1lBQUN3RztZQUFFeEc7U0FBRTtRQUFDLGdCQUFlO1lBQUNxRjtZQUFFcEY7U0FBRTtRQUFDLG9CQUFtQjtZQUFDb0Y7WUFBRXBGO1NBQUU7UUFBQyxzQkFBcUI7WUFBQ29GO1lBQUVwRjtTQUFFO1FBQUMsdUJBQXNCO1lBQUNvRjtZQUFFcEY7U0FBRTtRQUFDLHFCQUFvQjtZQUFDb0Y7WUFBRXBGO1NBQUU7UUFBQyxrQkFBaUI7WUFBQ29GO1lBQUVwRjtTQUFFO1FBQUMsa0JBQWlCO1lBQUNvRjtZQUFFcEY7U0FBRTtRQUFDcUksUUFBTztZQUFDakQ7WUFBRXBGO1NBQUU7UUFBQyxjQUFhO1lBQUNvRjtZQUFFcEY7U0FBRTtRQUFDLGdCQUFlO1lBQUNvRjtZQUFFcEY7U0FBRTtRQUFDLGlCQUFnQjtZQUFDb0Y7WUFBRXBGO1NBQUU7UUFBQyxlQUFjO1lBQUNvRjtZQUFFcEY7U0FBRTtRQUFDc0ksU0FBUTtZQUFDbEQ7WUFBRXBGO1NBQUU7UUFBQyxlQUFjO1lBQUNvRjtZQUFFcEY7U0FBRTtRQUFDLGlCQUFnQjtZQUFDb0Y7WUFBRXBGO1NBQUU7UUFBQyxrQkFBaUI7WUFBQ29GO1lBQUVwRjtTQUFFO1FBQUMsZ0JBQWU7WUFBQ29GO1lBQUVwRjtTQUFFO1FBQUMsaUJBQWdCO1lBQUNvRjtZQUFFcEY7U0FBRTtRQUFDdUksU0FBUTtZQUFDbkQ7WUFBRXRGO1NBQUU7UUFBQzBJLEtBQUk7WUFBQ3BEO1lBQUVuRjtTQUFFO1FBQUN3SSxPQUFNO1lBQUNyRDtZQUFFbkY7U0FBRTtRQUFDeUksUUFBTztZQUFDdEQ7WUFBRW5GO1NBQUU7UUFBQzBJLE1BQUs7WUFBQ3ZEO1lBQUVuRjtTQUFFO1FBQUMsYUFBWTtZQUFDbUY7WUFBRW5GO1NBQUU7UUFBQyxlQUFjO1lBQUNtRjtZQUFFbkY7U0FBRTtRQUFDLGdCQUFlO1lBQUNtRjtZQUFFbkY7U0FBRTtRQUFDMkksT0FBTTtZQUFDeEQ7WUFBRW5GO1NBQUU7UUFBQyxhQUFZO1lBQUNtRjtZQUFFbkY7U0FBRTtRQUFDLGFBQVk7WUFBQ21GO1lBQUVuRjtTQUFFO1FBQUM0SSxRQUFPO1lBQUN6RDtZQUFFbkY7U0FBRTtRQUFDLGNBQWE7WUFBQ21GO1lBQUVuRjtTQUFFO1FBQUMsY0FBYTtZQUFDbUY7WUFBRW5GO1NBQUU7UUFBQyxlQUFjO1lBQUNtRjtZQUFFakY7U0FBRTtRQUFDLGNBQWE7WUFBQ3FHO1lBQUUxRztZQUFFO1NBQVk7UUFBQyxlQUFjO1lBQUMwRztZQUFFMUc7WUFBRTtTQUFhO0lBQUEsR0FBRTJFLElBQUUsQ0FBQztJQUFFdkQsRUFBRUssU0FBUyxJQUFHc0IsQ0FBQUEsRUFBRXRCLFNBQVMsR0FBQztRQUFDa0Y7S0FBRSxFQUFDaEMsSUFBRTtRQUFDdkUsR0FBRTtZQUFDRDtZQUFFO1NBQWE7UUFBQ0UsR0FBRTtZQUFDRjtZQUFFO1NBQWE7UUFBQzZJLFFBQU87WUFBQzVJO1NBQUU7UUFBQzZJLFNBQVE7WUFBQzdJO1NBQUU7UUFBQzhJLFNBQVE7WUFBQzlJO1NBQUU7UUFBQytJLE9BQU07WUFBQ25KO1NBQUU7UUFBQ29KLFFBQU87WUFBQ3BKO1NBQUU7UUFBQ3FKLFFBQU87WUFBQ3JKO1NBQUU7UUFBQ3NKLE1BQUs7WUFBQ2xKO1NBQUU7UUFBQ21KLE9BQU07WUFBQ25KO1NBQUU7UUFBQ29KLE9BQU07WUFBQ3BKO1NBQUU7SUFBQSxDQUFBLEdBQUdnQixFQUFFSyxTQUFTLElBQUVMLEVBQUVPLFFBQVEsSUFBR2dELENBQUFBLEVBQUVyRSxDQUFDLEdBQUM7UUFBQ0g7UUFBRTtLQUFhLEVBQUN3RSxFQUFFOEUsT0FBTyxHQUFDO1FBQUNySjtLQUFFLEVBQUN1RSxFQUFFK0UsTUFBTSxHQUFDO1FBQUMxSjtLQUFFLEVBQUMyRSxFQUFFa0MsV0FBVyxHQUFDO1FBQUMzRztLQUFFLEFBQUQ7SUFBRyxJQUFJdEMsSUFBRSxNQUFLRSxJQUFFO0lBQU8sT0FBT3BCLEVBQUVELElBQUksR0FBQ0U7QUFBQyxFQUFFSCxPQUFPbU4sTUFBTSJ9

}),
5756: (function (module, __unused_webpack_exports, __webpack_require__) {
// Include tram for frame-throttling
/* globals window */ 
var $ = window.$;
var tram = __webpack_require__(5487) && $.tram;
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */ /**
 * Webflow custom build of Underscore.js 1.6.0
 * https://github.com/jashkenas/underscore/tree/1.6.0
 *
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 */ module.exports = function() {
    var _ = {};
    // Current version.
    _.VERSION = '1.6.0-Webflow';
    // Establish the object that gets returned to break out of a loop iteration.
    var breaker = {};
    // Save bytes in the minified (but not gzipped) version:
    /* eslint-disable one-var */ var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
    /* eslint-enable one-var */ // Create quick reference variables for speed access to core prototypes.
    /* eslint-disable one-var, unused-imports/no-unused-vars */ var push = ArrayProto.push, slice = ArrayProto.slice, concat = ArrayProto.concat, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty;
    /* eslint-enable one-var, unused-imports/no-unused-vars */ // All **ECMAScript 5** native function implementations that we hope to use
    // are declared here.
    /* eslint-disable one-var, unused-imports/no-unused-vars */ var nativeForEach = ArrayProto.forEach, nativeMap = ArrayProto.map, nativeReduce = ArrayProto.reduce, nativeReduceRight = ArrayProto.reduceRight, nativeFilter = ArrayProto.filter, nativeEvery = ArrayProto.every, nativeSome = ArrayProto.some, nativeIndexOf = ArrayProto.indexOf, nativeLastIndexOf = ArrayProto.lastIndexOf, nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeBind = FuncProto.bind;
    /* eslint-enable one-var, unused-imports/no-unused-vars */ // Collection Functions
    // --------------------
    // The cornerstone, an `each` implementation, aka `forEach`.
    // Handles objects with the built-in `forEach`, arrays, and raw objects.
    // Delegates to **ECMAScript 5**'s native `forEach` if available.
    var each = _.each = _.forEach = function(obj, iterator, context) {
        /* jshint shadow:true */ if (obj == null) return obj;
        if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
        // eslint-disable-next-line no-implicit-coercion
        } else if (obj.length === +obj.length) {
            for(var i = 0, length = obj.length; i < length; i++){
                if (iterator.call(context, obj[i], i, obj) === breaker) return;
            }
        } else {
            var keys = _.keys(obj);
            // eslint-disable-next-line no-redeclare
            for(var i = 0, length = keys.length; i < length; i++){
                if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
            }
        }
        return obj;
    };
    // Return the results of applying the iterator to each element.
    // Delegates to **ECMAScript 5**'s native `map` if available.
    _.map = _.collect = function(obj, iterator, context) {
        var results = [];
        if (obj == null) return results;
        if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
        each(obj, function(value, index, list) {
            results.push(iterator.call(context, value, index, list));
        });
        return results;
    };
    // Return the first value which passes a truth test. Aliased as `detect`.
    _.find = _.detect = function(obj, predicate, context) {
        var result;
        any(obj, function(value, index, list) {
            if (predicate.call(context, value, index, list)) {
                result = value;
                return true;
            }
        });
        return result;
    };
    // Return all the elements that pass a truth test.
    // Delegates to **ECMAScript 5**'s native `filter` if available.
    // Aliased as `select`.
    _.filter = _.select = function(obj, predicate, context) {
        var results = [];
        if (obj == null) return results;
        if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
        each(obj, function(value, index, list) {
            if (predicate.call(context, value, index, list)) results.push(value);
        });
        return results;
    };
    // Determine if at least one element in the object matches a truth test.
    // Delegates to **ECMAScript 5**'s native `some` if available.
    // Aliased as `any`.
    var any = _.some = _.any = function(obj, predicate, context) {
        predicate || (predicate = _.identity);
        var result = false;
        if (obj == null) return result;
        if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
        each(obj, function(value, index, list) {
            if (result || (result = predicate.call(context, value, index, list))) return breaker;
        });
        return !!result; // eslint-disable-line no-implicit-coercion
    };
    // Determine if the array or object contains a given value (using `===`).
    // Aliased as `include`.
    _.contains = _.include = function(obj, target) {
        if (obj == null) return false;
        if (nativeIndexOf && obj.indexOf === nativeIndexOf) // eslint-disable-next-line eqeqeq
        return obj.indexOf(target) != -1;
        return any(obj, function(value) {
            return value === target;
        });
    };
    // Function (ahem) Functions
    // --------------------
    // Delays a function for the given number of milliseconds, and then calls
    // it with the arguments supplied.
    _.delay = function(func, wait) {
        var args = slice.call(arguments, 2);
        return setTimeout(function() {
            return func.apply(null, args);
        }, wait);
    };
    // Defers a function, scheduling it to run after the current call stack has
    // cleared.
    _.defer = function(func) {
        return _.delay.apply(_, [
            func,
            1
        ].concat(slice.call(arguments, 1)));
    };
    // Returns a function, that, when invoked, will only be triggered once every
    // browser animation frame - using tram's requestAnimationFrame polyfill.
    _.throttle = function(func) {
        // eslint-disable-next-line one-var
        var wait, args, context;
        return function() {
            if (wait) return;
            wait = true;
            args = arguments;
            context = this;
            tram.frame(function() {
                wait = false;
                func.apply(context, args);
            });
        };
    };
    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.
    _.debounce = function(func, wait, immediate) {
        // eslint-disable-next-line one-var
        var timeout, args, context, timestamp, result;
        var later = function() {
            var last = _.now() - timestamp;
            if (last < wait) {
                timeout = setTimeout(later, wait - last);
            } else {
                timeout = null;
                if (!immediate) {
                    result = func.apply(context, args);
                    context = args = null;
                }
            }
        };
        return function() {
            context = this;
            args = arguments;
            timestamp = _.now();
            var callNow = immediate && !timeout;
            if (!timeout) {
                timeout = setTimeout(later, wait);
            }
            if (callNow) {
                result = func.apply(context, args);
                context = args = null;
            }
            return result;
        };
    };
    // Object Functions
    // ----------------
    // Fill in a given object with default properties.
    _.defaults = function(obj) {
        if (!_.isObject(obj)) return obj;
        for(var i = 1, length = arguments.length; i < length; i++){
            var source = arguments[i];
            for(var prop in source){
                // eslint-disable-next-line no-void
                if (obj[prop] === void 0) obj[prop] = source[prop];
            }
        }
        return obj;
    };
    // Retrieve the names of an object's properties.
    // Delegates to **ECMAScript 5**'s native `Object.keys`
    _.keys = function(obj) {
        if (!_.isObject(obj)) return [];
        if (nativeKeys) return nativeKeys(obj);
        var keys = [];
        for(var key in obj)if (_.has(obj, key)) keys.push(key);
        return keys;
    };
    // Shortcut function for checking if an object has a given property directly
    // on itself (in other words, not on a prototype).
    _.has = function(obj, key) {
        return hasOwnProperty.call(obj, key);
    };
    // Is a given variable an object?
    _.isObject = function(obj) {
        return obj === Object(obj);
    };
    // Utility Functions
    // -----------------
    // A (possibly faster) way to get the current timestamp as an integer.
    _.now = Date.now || function() {
        return new Date().getTime();
    };
    // By default, Underscore uses ERB-style template delimiters, change the
    // following template settings to use alternative delimiters.
    _.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    // When customizing `templateSettings`, if you don't want to define an
    // interpolation, evaluation or escaping regex, we need one that is
    // guaranteed not to match.
    var noMatch = /(.)^/;
    // Certain characters need to be escaped so that they can be put into a
    // string literal.
    var escapes = {
        "'": "'",
        '\\': '\\',
        '\r': 'r',
        '\n': 'n',
        '\u2028': 'u2028',
        '\u2029': 'u2029'
    };
    var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
    var escapeChar = function(match) {
        return '\\' + escapes[match];
    };
    // In order to prevent third-party code injection through
    // `_.templateSettings.variable`, we test it against the following regular
    // expression. It is intentionally a bit more liberal than just matching valid
    // identifiers, but still prevents possible loopholes through defaults or
    // destructuring assignment.
    var bareIdentifier = /^\s*(\w|\$)+\s*$/;
    // JavaScript micro-templating, similar to John Resig's implementation.
    // Underscore templating handles arbitrary delimiters, preserves whitespace,
    // and correctly escapes quotes within interpolated code.
    // NB: `oldSettings` only exists for backwards compatibility.
    _.template = function(text, settings, oldSettings) {
        if (!settings && oldSettings) settings = oldSettings;
        settings = _.defaults({}, settings, _.templateSettings);
        // Combine delimiters into one regular expression via alternation.
        var matcher = RegExp([
            (settings.escape || noMatch).source,
            (settings.interpolate || noMatch).source,
            (settings.evaluate || noMatch).source
        ].join('|') + '|$', 'g');
        // Compile the template source, escaping string literals appropriately.
        var index = 0;
        var source = "__p+='";
        text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
            source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
            index = offset + match.length;
            if (escape) {
                source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
            } else if (interpolate) {
                source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
            } else if (evaluate) {
                source += "';\n" + evaluate + "\n__p+='";
            }
            // Adobe VMs need the match returned to produce the correct offset.
            return match;
        });
        source += "';\n";
        var argument = settings.variable;
        if (argument) {
            // Insure against third-party code injection. (CVE-2021-23358)
            if (!bareIdentifier.test(argument)) throw new Error('variable is not a bare identifier: ' + argument);
        } else {
            // If a variable is not specified, place data values in local scope.
            source = 'with(obj||{}){\n' + source + '}\n';
            argument = 'obj';
        }
        source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + 'return __p;\n';
        var render;
        try {
            // eslint-disable-next-line no-new-func
            render = new Function(settings.variable || 'obj', '_', source);
        } catch (e) {
            e.source = source;
            throw e;
        }
        var template = function(data) {
            return render.call(this, data, _);
        };
        // Provide the compiled source as a convenience for precompilation.
        template.source = 'function(' + argument + '){\n' + source + '}';
        return template;
    };
    // Export underscore
    return _;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3NoYXJlZC9yZW5kZXIvcGx1Z2lucy9CYXNlU2l0ZU1vZHVsZXMvdW5kZXJzY29yZS1jdXN0b20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW5jbHVkZSB0cmFtIGZvciBmcmFtZS10aHJvdHRsaW5nXG4vKiBnbG9iYWxzIHdpbmRvdyAqL1xuXG52YXIgJCA9IHdpbmRvdy4kO1xudmFyIHRyYW0gPSByZXF1aXJlKCcuL3RyYW0tbWluJykgJiYgJC50cmFtO1xuXG4vKiFcbiAqIFdlYmZsb3cuXyAoYWthKSBVbmRlcnNjb3JlLmpzIDEuNi4wIChjdXN0b20gYnVpbGQpXG4gKlxuICogaHR0cDovL3VuZGVyc2NvcmVqcy5vcmdcbiAqIChjKSAyMDA5LTIwMTMgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIFVuZGVyc2NvcmUgbWF5IGJlIGZyZWVseSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuLyoqXG4gKiBXZWJmbG93IGN1c3RvbSBidWlsZCBvZiBVbmRlcnNjb3JlLmpzIDEuNi4wXG4gKiBodHRwczovL2dpdGh1Yi5jb20vamFzaGtlbmFzL3VuZGVyc2NvcmUvdHJlZS8xLjYuMFxuICpcbiAqIF8uZWFjaFxuICogXy5tYXBcbiAqIF8uZmluZFxuICogXy5maWx0ZXJcbiAqIF8uYW55XG4gKiBfLmNvbnRhaW5zXG4gKiBfLmRlbGF5XG4gKiBfLmRlZmVyXG4gKiBfLnRocm90dGxlICh3ZWJmbG93KVxuICogXy5kZWJvdW5jZVxuICogXy5rZXlzXG4gKiBfLmhhc1xuICogXy5ub3dcbiAqIF8udGVtcGxhdGUgKHdlYmZsb3c6IHVwZ3JhZGVkIHRvIDEuMTMuNilcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgXyA9IHt9O1xuXG4gIC8vIEN1cnJlbnQgdmVyc2lvbi5cbiAgXy5WRVJTSU9OID0gJzEuNi4wLVdlYmZsb3cnO1xuXG4gIC8vIEVzdGFibGlzaCB0aGUgb2JqZWN0IHRoYXQgZ2V0cyByZXR1cm5lZCB0byBicmVhayBvdXQgb2YgYSBsb29wIGl0ZXJhdGlvbi5cbiAgdmFyIGJyZWFrZXIgPSB7fTtcblxuICAvLyBTYXZlIGJ5dGVzIGluIHRoZSBtaW5pZmllZCAoYnV0IG5vdCBnemlwcGVkKSB2ZXJzaW9uOlxuICAvKiBlc2xpbnQtZGlzYWJsZSBvbmUtdmFyICovXG4gIHZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlLFxuICAgIE9ialByb3RvID0gT2JqZWN0LnByb3RvdHlwZSxcbiAgICBGdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIC8qIGVzbGludC1lbmFibGUgb25lLXZhciAqL1xuXG4gIC8vIENyZWF0ZSBxdWljayByZWZlcmVuY2UgdmFyaWFibGVzIGZvciBzcGVlZCBhY2Nlc3MgdG8gY29yZSBwcm90b3R5cGVzLlxuICAvKiBlc2xpbnQtZGlzYWJsZSBvbmUtdmFyLCB1bnVzZWQtaW1wb3J0cy9uby11bnVzZWQtdmFycyAqL1xuICB2YXIgcHVzaCA9IEFycmF5UHJvdG8ucHVzaCxcbiAgICBzbGljZSA9IEFycmF5UHJvdG8uc2xpY2UsXG4gICAgY29uY2F0ID0gQXJyYXlQcm90by5jb25jYXQsXG4gICAgdG9TdHJpbmcgPSBPYmpQcm90by50b1N0cmluZyxcbiAgICBoYXNPd25Qcm9wZXJ0eSA9IE9ialByb3RvLmhhc093blByb3BlcnR5O1xuICAvKiBlc2xpbnQtZW5hYmxlIG9uZS12YXIsIHVudXNlZC1pbXBvcnRzL25vLXVudXNlZC12YXJzICovXG5cbiAgLy8gQWxsICoqRUNNQVNjcmlwdCA1KiogbmF0aXZlIGZ1bmN0aW9uIGltcGxlbWVudGF0aW9ucyB0aGF0IHdlIGhvcGUgdG8gdXNlXG4gIC8vIGFyZSBkZWNsYXJlZCBoZXJlLlxuICAvKiBlc2xpbnQtZGlzYWJsZSBvbmUtdmFyLCB1bnVzZWQtaW1wb3J0cy9uby11bnVzZWQtdmFycyAqL1xuICB2YXIgbmF0aXZlRm9yRWFjaCA9IEFycmF5UHJvdG8uZm9yRWFjaCxcbiAgICBuYXRpdmVNYXAgPSBBcnJheVByb3RvLm1hcCxcbiAgICBuYXRpdmVSZWR1Y2UgPSBBcnJheVByb3RvLnJlZHVjZSxcbiAgICBuYXRpdmVSZWR1Y2VSaWdodCA9IEFycmF5UHJvdG8ucmVkdWNlUmlnaHQsXG4gICAgbmF0aXZlRmlsdGVyID0gQXJyYXlQcm90by5maWx0ZXIsXG4gICAgbmF0aXZlRXZlcnkgPSBBcnJheVByb3RvLmV2ZXJ5LFxuICAgIG5hdGl2ZVNvbWUgPSBBcnJheVByb3RvLnNvbWUsXG4gICAgbmF0aXZlSW5kZXhPZiA9IEFycmF5UHJvdG8uaW5kZXhPZixcbiAgICBuYXRpdmVMYXN0SW5kZXhPZiA9IEFycmF5UHJvdG8ubGFzdEluZGV4T2YsXG4gICAgbmF0aXZlSXNBcnJheSA9IEFycmF5LmlzQXJyYXksXG4gICAgbmF0aXZlS2V5cyA9IE9iamVjdC5rZXlzLFxuICAgIG5hdGl2ZUJpbmQgPSBGdW5jUHJvdG8uYmluZDtcbiAgLyogZXNsaW50LWVuYWJsZSBvbmUtdmFyLCB1bnVzZWQtaW1wb3J0cy9uby11bnVzZWQtdmFycyAqL1xuXG4gIC8vIENvbGxlY3Rpb24gRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gVGhlIGNvcm5lcnN0b25lLCBhbiBgZWFjaGAgaW1wbGVtZW50YXRpb24sIGFrYSBgZm9yRWFjaGAuXG4gIC8vIEhhbmRsZXMgb2JqZWN0cyB3aXRoIHRoZSBidWlsdC1pbiBgZm9yRWFjaGAsIGFycmF5cywgYW5kIHJhdyBvYmplY3RzLlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgZm9yRWFjaGAgaWYgYXZhaWxhYmxlLlxuICB2YXIgZWFjaCA9XG4gICAgKF8uZWFjaCA9XG4gICAgXy5mb3JFYWNoID1cbiAgICAgIGZ1bmN0aW9uIChvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgICAgIC8qIGpzaGludCBzaGFkb3c6dHJ1ZSAqL1xuICAgICAgICBpZiAob2JqID09IG51bGwpIHJldHVybiBvYmo7XG4gICAgICAgIGlmIChuYXRpdmVGb3JFYWNoICYmIG9iai5mb3JFYWNoID09PSBuYXRpdmVGb3JFYWNoKSB7XG4gICAgICAgICAgb2JqLmZvckVhY2goaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1pbXBsaWNpdC1jb2VyY2lvblxuICAgICAgICB9IGVsc2UgaWYgKG9iai5sZW5ndGggPT09ICtvYmoubGVuZ3RoKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqW2ldLCBpLCBvYmopID09PSBicmVha2VyKSByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpba2V5c1tpXV0sIGtleXNbaV0sIG9iaikgPT09IGJyZWFrZXIpXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgIH0pO1xuXG4gIC8vIFJldHVybiB0aGUgcmVzdWx0cyBvZiBhcHBseWluZyB0aGUgaXRlcmF0b3IgdG8gZWFjaCBlbGVtZW50LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgbWFwYCBpZiBhdmFpbGFibGUuXG4gIF8ubWFwID0gXy5jb2xsZWN0ID0gZnVuY3Rpb24gKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHJlc3VsdHM7XG4gICAgaWYgKG5hdGl2ZU1hcCAmJiBvYmoubWFwID09PSBuYXRpdmVNYXApIHJldHVybiBvYmoubWFwKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgcmVzdWx0cy5wdXNoKGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gUmV0dXJuIHRoZSBmaXJzdCB2YWx1ZSB3aGljaCBwYXNzZXMgYSB0cnV0aCB0ZXN0LiBBbGlhc2VkIGFzIGBkZXRlY3RgLlxuICBfLmZpbmQgPSBfLmRldGVjdCA9IGZ1bmN0aW9uIChvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHQ7XG4gICAgYW55KG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKHByZWRpY2F0ZS5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpIHtcbiAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBwYXNzIGEgdHJ1dGggdGVzdC5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYGZpbHRlcmAgaWYgYXZhaWxhYmxlLlxuICAvLyBBbGlhc2VkIGFzIGBzZWxlY3RgLlxuICBfLmZpbHRlciA9IF8uc2VsZWN0ID0gZnVuY3Rpb24gKG9iaiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHRzO1xuICAgIGlmIChuYXRpdmVGaWx0ZXIgJiYgb2JqLmZpbHRlciA9PT0gbmF0aXZlRmlsdGVyKVxuICAgICAgcmV0dXJuIG9iai5maWx0ZXIocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaWYgKHByZWRpY2F0ZS5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpIHJlc3VsdHMucHVzaCh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIGlmIGF0IGxlYXN0IG9uZSBlbGVtZW50IGluIHRoZSBvYmplY3QgbWF0Y2hlcyBhIHRydXRoIHRlc3QuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBzb21lYCBpZiBhdmFpbGFibGUuXG4gIC8vIEFsaWFzZWQgYXMgYGFueWAuXG4gIHZhciBhbnkgPVxuICAgIChfLnNvbWUgPVxuICAgIF8uYW55ID1cbiAgICAgIGZ1bmN0aW9uIChvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgICAgICBwcmVkaWNhdGUgfHwgKHByZWRpY2F0ZSA9IF8uaWRlbnRpdHkpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgaWYgKG5hdGl2ZVNvbWUgJiYgb2JqLnNvbWUgPT09IG5hdGl2ZVNvbWUpXG4gICAgICAgICAgcmV0dXJuIG9iai5zb21lKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgICAgIGVhY2gob2JqLCBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICAgICAgaWYgKHJlc3VsdCB8fCAocmVzdWx0ID0gcHJlZGljYXRlLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSkpXG4gICAgICAgICAgICByZXR1cm4gYnJlYWtlcjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAhIXJlc3VsdDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1pbXBsaWNpdC1jb2VyY2lvblxuICAgICAgfSk7XG5cbiAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBhcnJheSBvciBvYmplY3QgY29udGFpbnMgYSBnaXZlbiB2YWx1ZSAodXNpbmcgYD09PWApLlxuICAvLyBBbGlhc2VkIGFzIGBpbmNsdWRlYC5cbiAgXy5jb250YWlucyA9IF8uaW5jbHVkZSA9IGZ1bmN0aW9uIChvYmosIHRhcmdldCkge1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChuYXRpdmVJbmRleE9mICYmIG9iai5pbmRleE9mID09PSBuYXRpdmVJbmRleE9mKVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuICAgICAgcmV0dXJuIG9iai5pbmRleE9mKHRhcmdldCkgIT0gLTE7XG4gICAgcmV0dXJuIGFueShvYmosIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSB0YXJnZXQ7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gRnVuY3Rpb24gKGFoZW0pIEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIERlbGF5cyBhIGZ1bmN0aW9uIGZvciB0aGUgZ2l2ZW4gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgYW5kIHRoZW4gY2FsbHNcbiAgLy8gaXQgd2l0aCB0aGUgYXJndW1lbnRzIHN1cHBsaWVkLlxuICBfLmRlbGF5ID0gZnVuY3Rpb24gKGZ1bmMsIHdhaXQpIHtcbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZnVuYy5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9LCB3YWl0KTtcbiAgfTtcblxuICAvLyBEZWZlcnMgYSBmdW5jdGlvbiwgc2NoZWR1bGluZyBpdCB0byBydW4gYWZ0ZXIgdGhlIGN1cnJlbnQgY2FsbCBzdGFjayBoYXNcbiAgLy8gY2xlYXJlZC5cbiAgXy5kZWZlciA9IGZ1bmN0aW9uIChmdW5jKSB7XG4gICAgcmV0dXJuIF8uZGVsYXkuYXBwbHkoXywgW2Z1bmMsIDFdLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpKTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIHdoZW4gaW52b2tlZCwgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBvbmNlIGV2ZXJ5XG4gIC8vIGJyb3dzZXIgYW5pbWF0aW9uIGZyYW1lIC0gdXNpbmcgdHJhbSdzIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbC5cbiAgXy50aHJvdHRsZSA9IGZ1bmN0aW9uIChmdW5jKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG9uZS12YXJcbiAgICB2YXIgd2FpdCwgYXJncywgY29udGV4dDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHdhaXQpIHJldHVybjtcbiAgICAgIHdhaXQgPSB0cnVlO1xuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIGNvbnRleHQgPSB0aGlzO1xuICAgICAgdHJhbS5mcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhaXQgPSBmYWxzZTtcbiAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuICAvLyBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4gIC8vIE4gbWlsbGlzZWNvbmRzLiBJZiBgaW1tZWRpYXRlYCBpcyBwYXNzZWQsIHRyaWdnZXIgdGhlIGZ1bmN0aW9uIG9uIHRoZVxuICAvLyBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuICBfLmRlYm91bmNlID0gZnVuY3Rpb24gKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBvbmUtdmFyXG4gICAgdmFyIHRpbWVvdXQsIGFyZ3MsIGNvbnRleHQsIHRpbWVzdGFtcCwgcmVzdWx0O1xuXG4gICAgdmFyIGxhdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGxhc3QgPSBfLm5vdygpIC0gdGltZXN0YW1wO1xuICAgICAgaWYgKGxhc3QgPCB3YWl0KSB7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IC0gbGFzdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgaWYgKCFpbW1lZGlhdGUpIHtcbiAgICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY29udGV4dCA9IHRoaXM7XG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgdGltZXN0YW1wID0gXy5ub3coKTtcbiAgICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgaWYgKCF0aW1lb3V0KSB7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgIH1cbiAgICAgIGlmIChjYWxsTm93KSB7XG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIE9iamVjdCBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEZpbGwgaW4gYSBnaXZlbiBvYmplY3Qgd2l0aCBkZWZhdWx0IHByb3BlcnRpZXMuXG4gIF8uZGVmYXVsdHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgaWYgKCFfLmlzT2JqZWN0KG9iaikpIHJldHVybiBvYmo7XG4gICAgZm9yICh2YXIgaSA9IDEsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIHByb3AgaW4gc291cmNlKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby12b2lkXG4gICAgICAgIGlmIChvYmpbcHJvcF0gPT09IHZvaWQgMCkgb2JqW3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIC8vIFJldHJpZXZlIHRoZSBuYW1lcyBvZiBhbiBvYmplY3QncyBwcm9wZXJ0aWVzLlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgT2JqZWN0LmtleXNgXG4gIF8ua2V5cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICBpZiAoIV8uaXNPYmplY3Qob2JqKSkgcmV0dXJuIFtdO1xuICAgIGlmIChuYXRpdmVLZXlzKSByZXR1cm4gbmF0aXZlS2V5cyhvYmopO1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikgaWYgKF8uaGFzKG9iaiwga2V5KSkga2V5cy5wdXNoKGtleSk7XG4gICAgcmV0dXJuIGtleXM7XG4gIH07XG5cbiAgLy8gU2hvcnRjdXQgZnVuY3Rpb24gZm9yIGNoZWNraW5nIGlmIGFuIG9iamVjdCBoYXMgYSBnaXZlbiBwcm9wZXJ0eSBkaXJlY3RseVxuICAvLyBvbiBpdHNlbGYgKGluIG90aGVyIHdvcmRzLCBub3Qgb24gYSBwcm90b3R5cGUpLlxuICBfLmhhcyA9IGZ1bmN0aW9uIChvYmosIGtleSkge1xuICAgIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhcmlhYmxlIGFuIG9iamVjdD9cbiAgXy5pc09iamVjdCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBPYmplY3Qob2JqKTtcbiAgfTtcblxuICAvLyBVdGlsaXR5IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEEgKHBvc3NpYmx5IGZhc3Rlcikgd2F5IHRvIGdldCB0aGUgY3VycmVudCB0aW1lc3RhbXAgYXMgYW4gaW50ZWdlci5cbiAgXy5ub3cgPVxuICAgIERhdGUubm93IHx8XG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH07XG5cbiAgLy8gQnkgZGVmYXVsdCwgVW5kZXJzY29yZSB1c2VzIEVSQi1zdHlsZSB0ZW1wbGF0ZSBkZWxpbWl0ZXJzLCBjaGFuZ2UgdGhlXG4gIC8vIGZvbGxvd2luZyB0ZW1wbGF0ZSBzZXR0aW5ncyB0byB1c2UgYWx0ZXJuYXRpdmUgZGVsaW1pdGVycy5cbiAgXy50ZW1wbGF0ZVNldHRpbmdzID0ge1xuICAgIGV2YWx1YXRlOiAvPCUoW1xcc1xcU10rPyklPi9nLFxuICAgIGludGVycG9sYXRlOiAvPCU9KFtcXHNcXFNdKz8pJT4vZyxcbiAgICBlc2NhcGU6IC88JS0oW1xcc1xcU10rPyklPi9nLFxuICB9O1xuXG4gIC8vIFdoZW4gY3VzdG9taXppbmcgYHRlbXBsYXRlU2V0dGluZ3NgLCBpZiB5b3UgZG9uJ3Qgd2FudCB0byBkZWZpbmUgYW5cbiAgLy8gaW50ZXJwb2xhdGlvbiwgZXZhbHVhdGlvbiBvciBlc2NhcGluZyByZWdleCwgd2UgbmVlZCBvbmUgdGhhdCBpc1xuICAvLyBndWFyYW50ZWVkIG5vdCB0byBtYXRjaC5cbiAgdmFyIG5vTWF0Y2ggPSAvKC4pXi87XG5cbiAgLy8gQ2VydGFpbiBjaGFyYWN0ZXJzIG5lZWQgdG8gYmUgZXNjYXBlZCBzbyB0aGF0IHRoZXkgY2FuIGJlIHB1dCBpbnRvIGFcbiAgLy8gc3RyaW5nIGxpdGVyYWwuXG4gIHZhciBlc2NhcGVzID0ge1xuICAgIFwiJ1wiOiBcIidcIixcbiAgICAnXFxcXCc6ICdcXFxcJyxcbiAgICAnXFxyJzogJ3InLFxuICAgICdcXG4nOiAnbicsXG4gICAgJ1xcdTIwMjgnOiAndTIwMjgnLFxuICAgICdcXHUyMDI5JzogJ3UyMDI5JyxcbiAgfTtcblxuICB2YXIgZXNjYXBlUmVnRXhwID0gL1xcXFx8J3xcXHJ8XFxufFxcdTIwMjh8XFx1MjAyOS9nO1xuXG4gIHZhciBlc2NhcGVDaGFyID0gZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuICdcXFxcJyArIGVzY2FwZXNbbWF0Y2hdO1xuICB9O1xuXG4gIC8vIEluIG9yZGVyIHRvIHByZXZlbnQgdGhpcmQtcGFydHkgY29kZSBpbmplY3Rpb24gdGhyb3VnaFxuICAvLyBgXy50ZW1wbGF0ZVNldHRpbmdzLnZhcmlhYmxlYCwgd2UgdGVzdCBpdCBhZ2FpbnN0IHRoZSBmb2xsb3dpbmcgcmVndWxhclxuICAvLyBleHByZXNzaW9uLiBJdCBpcyBpbnRlbnRpb25hbGx5IGEgYml0IG1vcmUgbGliZXJhbCB0aGFuIGp1c3QgbWF0Y2hpbmcgdmFsaWRcbiAgLy8gaWRlbnRpZmllcnMsIGJ1dCBzdGlsbCBwcmV2ZW50cyBwb3NzaWJsZSBsb29waG9sZXMgdGhyb3VnaCBkZWZhdWx0cyBvclxuICAvLyBkZXN0cnVjdHVyaW5nIGFzc2lnbm1lbnQuXG4gIHZhciBiYXJlSWRlbnRpZmllciA9IC9eXFxzKihcXHd8XFwkKStcXHMqJC87XG5cbiAgLy8gSmF2YVNjcmlwdCBtaWNyby10ZW1wbGF0aW5nLCBzaW1pbGFyIHRvIEpvaG4gUmVzaWcncyBpbXBsZW1lbnRhdGlvbi5cbiAgLy8gVW5kZXJzY29yZSB0ZW1wbGF0aW5nIGhhbmRsZXMgYXJiaXRyYXJ5IGRlbGltaXRlcnMsIHByZXNlcnZlcyB3aGl0ZXNwYWNlLFxuICAvLyBhbmQgY29ycmVjdGx5IGVzY2FwZXMgcXVvdGVzIHdpdGhpbiBpbnRlcnBvbGF0ZWQgY29kZS5cbiAgLy8gTkI6IGBvbGRTZXR0aW5nc2Agb25seSBleGlzdHMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICBfLnRlbXBsYXRlID0gZnVuY3Rpb24gKHRleHQsIHNldHRpbmdzLCBvbGRTZXR0aW5ncykge1xuICAgIGlmICghc2V0dGluZ3MgJiYgb2xkU2V0dGluZ3MpIHNldHRpbmdzID0gb2xkU2V0dGluZ3M7XG4gICAgc2V0dGluZ3MgPSBfLmRlZmF1bHRzKHt9LCBzZXR0aW5ncywgXy50ZW1wbGF0ZVNldHRpbmdzKTtcblxuICAgIC8vIENvbWJpbmUgZGVsaW1pdGVycyBpbnRvIG9uZSByZWd1bGFyIGV4cHJlc3Npb24gdmlhIGFsdGVybmF0aW9uLlxuICAgIHZhciBtYXRjaGVyID0gUmVnRXhwKFxuICAgICAgW1xuICAgICAgICAoc2V0dGluZ3MuZXNjYXBlIHx8IG5vTWF0Y2gpLnNvdXJjZSxcbiAgICAgICAgKHNldHRpbmdzLmludGVycG9sYXRlIHx8IG5vTWF0Y2gpLnNvdXJjZSxcbiAgICAgICAgKHNldHRpbmdzLmV2YWx1YXRlIHx8IG5vTWF0Y2gpLnNvdXJjZSxcbiAgICAgIF0uam9pbignfCcpICsgJ3wkJyxcbiAgICAgICdnJ1xuICAgICk7XG5cbiAgICAvLyBDb21waWxlIHRoZSB0ZW1wbGF0ZSBzb3VyY2UsIGVzY2FwaW5nIHN0cmluZyBsaXRlcmFscyBhcHByb3ByaWF0ZWx5LlxuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHNvdXJjZSA9IFwiX19wKz0nXCI7XG4gICAgdGV4dC5yZXBsYWNlKFxuICAgICAgbWF0Y2hlcixcbiAgICAgIGZ1bmN0aW9uIChtYXRjaCwgZXNjYXBlLCBpbnRlcnBvbGF0ZSwgZXZhbHVhdGUsIG9mZnNldCkge1xuICAgICAgICBzb3VyY2UgKz0gdGV4dC5zbGljZShpbmRleCwgb2Zmc2V0KS5yZXBsYWNlKGVzY2FwZVJlZ0V4cCwgZXNjYXBlQ2hhcik7XG4gICAgICAgIGluZGV4ID0gb2Zmc2V0ICsgbWF0Y2gubGVuZ3RoO1xuXG4gICAgICAgIGlmIChlc2NhcGUpIHtcbiAgICAgICAgICBzb3VyY2UgKz0gXCInK1xcbigoX190PShcIiArIGVzY2FwZSArIFwiKSk9PW51bGw/Jyc6Xy5lc2NhcGUoX190KSkrXFxuJ1wiO1xuICAgICAgICB9IGVsc2UgaWYgKGludGVycG9sYXRlKSB7XG4gICAgICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBpbnRlcnBvbGF0ZSArIFwiKSk9PW51bGw/Jyc6X190KStcXG4nXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZhbHVhdGUpIHtcbiAgICAgICAgICBzb3VyY2UgKz0gXCInO1xcblwiICsgZXZhbHVhdGUgKyBcIlxcbl9fcCs9J1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRvYmUgVk1zIG5lZWQgdGhlIG1hdGNoIHJldHVybmVkIHRvIHByb2R1Y2UgdGhlIGNvcnJlY3Qgb2Zmc2V0LlxuICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICB9XG4gICAgKTtcbiAgICBzb3VyY2UgKz0gXCInO1xcblwiO1xuXG4gICAgdmFyIGFyZ3VtZW50ID0gc2V0dGluZ3MudmFyaWFibGU7XG4gICAgaWYgKGFyZ3VtZW50KSB7XG4gICAgICAvLyBJbnN1cmUgYWdhaW5zdCB0aGlyZC1wYXJ0eSBjb2RlIGluamVjdGlvbi4gKENWRS0yMDIxLTIzMzU4KVxuICAgICAgaWYgKCFiYXJlSWRlbnRpZmllci50ZXN0KGFyZ3VtZW50KSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd2YXJpYWJsZSBpcyBub3QgYSBiYXJlIGlkZW50aWZpZXI6ICcgKyBhcmd1bWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIGEgdmFyaWFibGUgaXMgbm90IHNwZWNpZmllZCwgcGxhY2UgZGF0YSB2YWx1ZXMgaW4gbG9jYWwgc2NvcGUuXG4gICAgICBzb3VyY2UgPSAnd2l0aChvYmp8fHt9KXtcXG4nICsgc291cmNlICsgJ31cXG4nO1xuICAgICAgYXJndW1lbnQgPSAnb2JqJztcbiAgICB9XG5cbiAgICBzb3VyY2UgPVxuICAgICAgXCJ2YXIgX190LF9fcD0nJyxfX2o9QXJyYXkucHJvdG90eXBlLmpvaW4sXCIgK1xuICAgICAgXCJwcmludD1mdW5jdGlvbigpe19fcCs9X19qLmNhbGwoYXJndW1lbnRzLCcnKTt9O1xcblwiICtcbiAgICAgIHNvdXJjZSArXG4gICAgICAncmV0dXJuIF9fcDtcXG4nO1xuXG4gICAgdmFyIHJlbmRlcjtcbiAgICB0cnkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICByZW5kZXIgPSBuZXcgRnVuY3Rpb24oc2V0dGluZ3MudmFyaWFibGUgfHwgJ29iaicsICdfJywgc291cmNlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuXG4gICAgdmFyIHRlbXBsYXRlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHJldHVybiByZW5kZXIuY2FsbCh0aGlzLCBkYXRhLCBfKTtcbiAgICB9O1xuXG4gICAgLy8gUHJvdmlkZSB0aGUgY29tcGlsZWQgc291cmNlIGFzIGEgY29udmVuaWVuY2UgZm9yIHByZWNvbXBpbGF0aW9uLlxuICAgIHRlbXBsYXRlLnNvdXJjZSA9ICdmdW5jdGlvbignICsgYXJndW1lbnQgKyAnKXtcXG4nICsgc291cmNlICsgJ30nO1xuXG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9O1xuXG4gIC8vIEV4cG9ydCB1bmRlcnNjb3JlXG4gIHJldHVybiBfO1xufSkoKTtcbiJdLCJuYW1lcyI6WyIkIiwid2luZG93IiwidHJhbSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiXyIsIlZFUlNJT04iLCJicmVha2VyIiwiQXJyYXlQcm90byIsIkFycmF5IiwicHJvdG90eXBlIiwiT2JqUHJvdG8iLCJPYmplY3QiLCJGdW5jUHJvdG8iLCJGdW5jdGlvbiIsInB1c2giLCJzbGljZSIsImNvbmNhdCIsInRvU3RyaW5nIiwiaGFzT3duUHJvcGVydHkiLCJuYXRpdmVGb3JFYWNoIiwiZm9yRWFjaCIsIm5hdGl2ZU1hcCIsIm1hcCIsIm5hdGl2ZVJlZHVjZSIsInJlZHVjZSIsIm5hdGl2ZVJlZHVjZVJpZ2h0IiwicmVkdWNlUmlnaHQiLCJuYXRpdmVGaWx0ZXIiLCJmaWx0ZXIiLCJuYXRpdmVFdmVyeSIsImV2ZXJ5IiwibmF0aXZlU29tZSIsInNvbWUiLCJuYXRpdmVJbmRleE9mIiwiaW5kZXhPZiIsIm5hdGl2ZUxhc3RJbmRleE9mIiwibGFzdEluZGV4T2YiLCJuYXRpdmVJc0FycmF5IiwiaXNBcnJheSIsIm5hdGl2ZUtleXMiLCJrZXlzIiwibmF0aXZlQmluZCIsImJpbmQiLCJlYWNoIiwib2JqIiwiaXRlcmF0b3IiLCJjb250ZXh0IiwibGVuZ3RoIiwiaSIsImNhbGwiLCJjb2xsZWN0IiwicmVzdWx0cyIsInZhbHVlIiwiaW5kZXgiLCJsaXN0IiwiZmluZCIsImRldGVjdCIsInByZWRpY2F0ZSIsInJlc3VsdCIsImFueSIsInNlbGVjdCIsImlkZW50aXR5IiwiY29udGFpbnMiLCJpbmNsdWRlIiwidGFyZ2V0IiwiZGVsYXkiLCJmdW5jIiwid2FpdCIsImFyZ3MiLCJhcmd1bWVudHMiLCJzZXRUaW1lb3V0IiwiYXBwbHkiLCJkZWZlciIsInRocm90dGxlIiwiZnJhbWUiLCJkZWJvdW5jZSIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJ0aW1lc3RhbXAiLCJsYXRlciIsImxhc3QiLCJub3ciLCJjYWxsTm93IiwiZGVmYXVsdHMiLCJpc09iamVjdCIsInNvdXJjZSIsInByb3AiLCJrZXkiLCJoYXMiLCJEYXRlIiwiZ2V0VGltZSIsInRlbXBsYXRlU2V0dGluZ3MiLCJldmFsdWF0ZSIsImludGVycG9sYXRlIiwiZXNjYXBlIiwibm9NYXRjaCIsImVzY2FwZXMiLCJlc2NhcGVSZWdFeHAiLCJlc2NhcGVDaGFyIiwibWF0Y2giLCJiYXJlSWRlbnRpZmllciIsInRlbXBsYXRlIiwidGV4dCIsInNldHRpbmdzIiwib2xkU2V0dGluZ3MiLCJtYXRjaGVyIiwiUmVnRXhwIiwiam9pbiIsInJlcGxhY2UiLCJvZmZzZXQiLCJhcmd1bWVudCIsInZhcmlhYmxlIiwidGVzdCIsIkVycm9yIiwicmVuZGVyIiwiZSIsImRhdGEiXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQztBQUNwQyxrQkFBa0I7QUFFbEIsSUFBSUEsSUFBSUMsT0FBT0QsQ0FBQztBQUNoQixJQUFJRSxPQUFPQyxRQUFRLGlCQUFpQkgsRUFBRUUsSUFBSTtBQUUxQzs7Ozs7OztDQU9DLEdBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtCQyxHQUNERSxPQUFPQyxPQUFPLEdBQUcsQUFBQztJQUNoQixJQUFJQyxJQUFJLENBQUM7SUFFVCxtQkFBbUI7SUFDbkJBLEVBQUVDLE9BQU8sR0FBRztJQUVaLDRFQUE0RTtJQUM1RSxJQUFJQyxVQUFVLENBQUM7SUFFZix3REFBd0Q7SUFDeEQsMEJBQTBCLEdBQzFCLElBQUlDLGFBQWFDLE1BQU1DLFNBQVMsRUFDOUJDLFdBQVdDLE9BQU9GLFNBQVMsRUFDM0JHLFlBQVlDLFNBQVNKLFNBQVM7SUFDaEMseUJBQXlCLEdBRXpCLHdFQUF3RTtJQUN4RSx5REFBeUQsR0FDekQsSUFBSUssT0FBT1AsV0FBV08sSUFBSSxFQUN4QkMsUUFBUVIsV0FBV1EsS0FBSyxFQUN4QkMsU0FBU1QsV0FBV1MsTUFBTSxFQUMxQkMsV0FBV1AsU0FBU08sUUFBUSxFQUM1QkMsaUJBQWlCUixTQUFTUSxjQUFjO0lBQzFDLHdEQUF3RCxHQUV4RCwyRUFBMkU7SUFDM0UscUJBQXFCO0lBQ3JCLHlE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

}),
9461: (function (module, __unused_webpack_exports, __webpack_require__) {
/* globals document, window, navigator */ /**
 * Webflow: Brand pages on the subdomain
 */ 
var Webflow = __webpack_require__(3949);
Webflow.define('brand', module.exports = function($) {
    var api = {};
    var doc = document;
    var $html = $('html');
    var $body = $('body');
    var namespace = '.w-webflow-badge';
    var location = window.location;
    var isPhantom = /PhantomJS/i.test(navigator.userAgent);
    var fullScreenEvents = 'fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange';
    var brandElement;
    // -----------------------------------
    // Module methods
    api.ready = function() {
        var shouldBrand = $html.attr('data-wf-status');
        var publishedDomain = $html.attr('data-wf-domain') || '';
        if (/\.webflow\.io$/i.test(publishedDomain) && location.hostname !== publishedDomain) {
            shouldBrand = true;
        }
        if (shouldBrand && !isPhantom) {
            brandElement = brandElement || createBadge();
            ensureBrand();
            setTimeout(ensureBrand, 500);
            $(doc).off(fullScreenEvents, onFullScreenChange).on(fullScreenEvents, onFullScreenChange);
        }
    };
    function onFullScreenChange() {
        var fullScreen = doc.fullScreen || doc.mozFullScreen || doc.webkitIsFullScreen || doc.msFullscreenElement || Boolean(doc.webkitFullscreenElement);
        $(brandElement).attr('style', fullScreen ? 'display: none !important;' : '');
    }
    function createBadge() {
        var $brand = $('<a class="w-webflow-badge"></a>').attr('href', 'https://webflow.com?utm_campaign=brandjs');
        var $logoArt = $('<img>').attr('src', 'https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg').attr('alt', '').css({
            marginRight: '4px',
            width: '26px'
        });
        var $logoText = $('<img>').attr('src', 'https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg').attr('alt', 'Made in Webflow');
        $brand.append($logoArt, $logoText);
        return $brand[0];
    }
    function ensureBrand() {
        var found = $body.children(namespace);
        var match = found.length && found.get(0) === brandElement;
        var inEditor = Webflow.env('editor');
        if (match) {
            // Remove brand when Editor is active
            if (inEditor) {
                found.remove();
            }
            // Exit early, brand is in place
            return;
        }
        // Remove any invalid brand elements
        if (found.length) {
            found.remove();
        }
        // Append the brand (unless Editor is active)
        if (!inEditor) {
            $body.append(brandElement);
        }
    }
    // Export module
    return api;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3NoYXJlZC9yZW5kZXIvcGx1Z2lucy9CYXNlU2l0ZU1vZHVsZXMvd2ViZmxvdy1icmFuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWxzIGRvY3VtZW50LCB3aW5kb3csIG5hdmlnYXRvciAqL1xuXG4vKipcbiAqIFdlYmZsb3c6IEJyYW5kIHBhZ2VzIG9uIHRoZSBzdWJkb21haW5cbiAqL1xuXG52YXIgV2ViZmxvdyA9IHJlcXVpcmUoJy4vd2ViZmxvdy1saWInKTtcblxuV2ViZmxvdy5kZWZpbmUoXG4gICdicmFuZCcsXG4gIChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkKSB7XG4gICAgdmFyIGFwaSA9IHt9O1xuICAgIHZhciBkb2MgPSBkb2N1bWVudDtcbiAgICB2YXIgJGh0bWwgPSAkKCdodG1sJyk7XG4gICAgdmFyICRib2R5ID0gJCgnYm9keScpO1xuICAgIHZhciBuYW1lc3BhY2UgPSAnLnctd2ViZmxvdy1iYWRnZSc7XG4gICAgdmFyIGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uO1xuICAgIHZhciBpc1BoYW50b20gPSAvUGhhbnRvbUpTL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB2YXIgZnVsbFNjcmVlbkV2ZW50cyA9XG4gICAgICAnZnVsbHNjcmVlbmNoYW5nZSB3ZWJraXRmdWxsc2NyZWVuY2hhbmdlIG1vemZ1bGxzY3JlZW5jaGFuZ2UgbXNmdWxsc2NyZWVuY2hhbmdlJztcbiAgICB2YXIgYnJhbmRFbGVtZW50O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBNb2R1bGUgbWV0aG9kc1xuXG4gICAgYXBpLnJlYWR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNob3VsZEJyYW5kID0gJGh0bWwuYXR0cignZGF0YS13Zi1zdGF0dXMnKTtcbiAgICAgIHZhciBwdWJsaXNoZWREb21haW4gPSAkaHRtbC5hdHRyKCdkYXRhLXdmLWRvbWFpbicpIHx8ICcnO1xuICAgICAgaWYgKFxuICAgICAgICAvXFwud2ViZmxvd1xcLmlvJC9pLnRlc3QocHVibGlzaGVkRG9tYWluKSAmJlxuICAgICAgICBsb2NhdGlvbi5ob3N0bmFtZSAhPT0gcHVibGlzaGVkRG9tYWluXG4gICAgICApIHtcbiAgICAgICAgc2hvdWxkQnJhbmQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHNob3VsZEJyYW5kICYmICFpc1BoYW50b20pIHtcbiAgICAgICAgYnJhbmRFbGVtZW50ID0gYnJhbmRFbGVtZW50IHx8IGNyZWF0ZUJhZGdlKCk7XG4gICAgICAgIGVuc3VyZUJyYW5kKCk7XG4gICAgICAgIHNldFRpbWVvdXQoZW5zdXJlQnJhbmQsIDUwMCk7XG5cbiAgICAgICAgJChkb2MpXG4gICAgICAgICAgLm9mZihmdWxsU2NyZWVuRXZlbnRzLCBvbkZ1bGxTY3JlZW5DaGFuZ2UpXG4gICAgICAgICAgLm9uKGZ1bGxTY3JlZW5FdmVudHMsIG9uRnVsbFNjcmVlbkNoYW5nZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG9uRnVsbFNjcmVlbkNoYW5nZSgpIHtcbiAgICAgIHZhciBmdWxsU2NyZWVuID1cbiAgICAgICAgZG9jLmZ1bGxTY3JlZW4gfHxcbiAgICAgICAgZG9jLm1vekZ1bGxTY3JlZW4gfHxcbiAgICAgICAgZG9jLndlYmtpdElzRnVsbFNjcmVlbiB8fFxuICAgICAgICBkb2MubXNGdWxsc2NyZWVuRWxlbWVudCB8fFxuICAgICAgICBCb29sZWFuKGRvYy53ZWJraXRGdWxsc2NyZWVuRWxlbWVudCk7XG4gICAgICAkKGJyYW5kRWxlbWVudCkuYXR0cihcbiAgICAgICAgJ3N0eWxlJyxcbiAgICAgICAgZnVsbFNjcmVlbiA/ICdkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7JyA6ICcnXG4gICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJhZGdlKCkge1xuICAgICAgdmFyICRicmFuZCA9ICQoJzxhIGNsYXNzPVwidy13ZWJmbG93LWJhZGdlXCI+PC9hPicpLmF0dHIoXG4gICAgICAgICdocmVmJyxcbiAgICAgICAgJ2h0dHBzOi8vd2ViZmxvdy5jb20/dXRtX2NhbXBhaWduPWJyYW5kanMnXG4gICAgICApO1xuXG4gICAgICB2YXIgJGxvZ29BcnQgPSAkKCc8aW1nPicpXG4gICAgICAgIC5hdHRyKFxuICAgICAgICAgICdzcmMnLFxuICAgICAgICAgICdodHRwczovL2QzZTU0djEwM2o4cWJiLmNsb3VkZnJvbnQubmV0L2ltZy93ZWJmbG93LWJhZGdlLWljb24tZDIuODllMTJjMzIyZS5zdmcnXG4gICAgICAgIClcbiAgICAgICAgLmF0dHIoJ2FsdCcsICcnKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICBtYXJnaW5SaWdodDogJzRweCcsXG4gICAgICAgICAgd2lkdGg6ICcyNnB4JyxcbiAgICAgICAgfSk7XG5cbiAgICAgIHZhciAkbG9nb1RleHQgPSAkKCc8aW1nPicpXG4gICAgICAgIC5hdHRyKFxuICAgICAgICAgICdzcmMnLFxuICAgICAgICAgICdodHRwczovL2QzZTU0djEwM2o4cWJiLmNsb3VkZnJvbnQubmV0L2ltZy93ZWJmbG93LWJhZGdlLXRleHQtZDIuYzgyY2VjM2I3OC5zdmcnXG4gICAgICAgIClcbiAgICAgICAgLmF0dHIoJ2FsdCcsICdNYWRlIGluIFdlYmZsb3cnKTtcblxuICAgICAgJGJyYW5kLmFwcGVuZCgkbG9nb0FydCwgJGxvZ29UZXh0KTtcbiAgICAgIHJldHVybiAkYnJhbmRbMF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5zdXJlQnJhbmQoKSB7XG4gICAgICB2YXIgZm91bmQgPSAkYm9keS5jaGlsZHJlbihuYW1lc3BhY2UpO1xuICAgICAgdmFyIG1hdGNoID0gZm91bmQubGVuZ3RoICYmIGZvdW5kLmdldCgwKSA9PT0gYnJhbmRFbGVtZW50O1xuICAgICAgdmFyIGluRWRpdG9yID0gV2ViZmxvdy5lbnYoJ2VkaXRvcicpO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIC8vIFJlbW92ZSBicmFuZCB3aGVuIEVkaXRvciBpcyBhY3RpdmVcbiAgICAgICAgaWYgKGluRWRpdG9yKSB7XG4gICAgICAgICAgZm91bmQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRXhpdCBlYXJseSwgYnJhbmQgaXMgaW4gcGxhY2VcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gUmVtb3ZlIGFueSBpbnZhbGlkIGJyYW5kIGVsZW1lbnRzXG4gICAgICBpZiAoZm91bmQubGVuZ3RoKSB7XG4gICAgICAgIGZvdW5kLnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgLy8gQXBwZW5kIHRoZSBicmFuZCAodW5sZXNzIEVkaXRvciBpcyBhY3RpdmUpXG4gICAgICBpZiAoIWluRWRpdG9yKSB7XG4gICAgICAgICRib2R5LmFwcGVuZChicmFuZEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEV4cG9ydCBtb2R1bGVcbiAgICByZXR1cm4gYXBpO1xuICB9KVxuKTtcbiJdLCJuYW1lcyI6WyJXZWJmbG93IiwicmVxdWlyZSIsImRlZmluZSIsIm1vZHVsZSIsImV4cG9ydHMiLCIkIiwiYXBpIiwiZG9jIiwiZG9jdW1lbnQiLCIkaHRtbCIsIiRib2R5IiwibmFtZXNwYWNlIiwibG9jYXRpb24iLCJ3aW5kb3ciLCJpc1BoYW50b20iLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZnVsbFNjcmVlbkV2ZW50cyIsImJyYW5kRWxlbWVudCIsInJlYWR5Iiwic2hvdWxkQnJhbmQiLCJhdHRyIiwicHVibGlzaGVkRG9tYWluIiwiaG9zdG5hbWUiLCJjcmVhdGVCYWRnZSIsImVuc3VyZUJyYW5kIiwic2V0VGltZW91dCIsIm9mZiIsIm9uRnVsbFNjcmVlbkNoYW5nZSIsIm9uIiwiZnVsbFNjcmVlbiIsIm1vekZ1bGxTY3JlZW4iLCJ3ZWJraXRJc0Z1bGxTY3JlZW4iLCJtc0Z1bGxzY3JlZW5FbGVtZW50IiwiQm9vbGVhbiIsIndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50IiwiJGJyYW5kIiwiJGxvZ29BcnQiLCJjc3MiLCJtYXJnaW5SaWdodCIsIndpZHRoIiwiJGxvZ29UZXh0IiwiYXBwZW5kIiwiZm91bmQiLCJjaGlsZHJlbiIsIm1hdGNoIiwibGVuZ3RoIiwiZ2V0IiwiaW5FZGl0b3IiLCJlbnYiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiJBQUFBLHVDQUF1QyxHQUV2Qzs7Q0FFQztBQUVELElBQUlBLFVBQVVDLFFBQVE7QUFFdEJELFFBQVFFLE1BQU0sQ0FDWixTQUNDQyxPQUFPQyxPQUFPLEdBQUcsU0FBVUMsQ0FBQztJQUMzQixJQUFJQyxNQUFNLENBQUM7SUFDWCxJQUFJQyxNQUFNQztJQUNWLElBQUlDLFFBQVFKLEVBQUU7SUFDZCxJQUFJSyxRQUFRTCxFQUFFO0lBQ2QsSUFBSU0sWUFBWTtJQUNoQixJQUFJQyxXQUFXQyxPQUFPRCxRQUFRO0lBQzlCLElBQUlFLFlBQVksYUFBYUMsSUFBSSxDQUFDQyxVQUFVQyxTQUFTO0lBQ3JELElBQUlDLG1CQUNGO0lBQ0YsSUFBSUM7SUFFSixzQ0FBc0M7SUFDdEMsaUJBQWlCO0lBRWpCYixJQUFJYyxLQUFLLEdBQUc7UUFDVixJQUFJQyxjQUFjWixNQUFNYSxJQUFJLENBQUM7UUFDN0IsSUFBSUMsa0JBQWtCZCxNQUFNYSxJQUFJLENBQUMscUJBQXFCO1FBQ3RELElBQ0Usa0JBQWtCUCxJQUFJLENBQUNRLG9CQUN2QlgsU0FBU1ksUUFBUSxLQUFLRCxpQkFDdEI7WUFDQUYsY0FBYztRQUNoQjtRQUNBLElBQUlBLGVBQWUsQ0FBQ1AsV0FBVztZQUM3QkssZUFBZUEsZ0JBQWdCTTtZQUMvQkM7WUFDQUMsV0FBV0QsYUFBYTtZQUV4QnJCLEVBQUVFLEtBQ0NxQixHQUFHLENBQUNWLGtCQUFrQlcsb0JBQ3RCQyxFQUFFLENBQUNaLGtCQUFrQlc7UUFDMUI7SUFDRjtJQUVBLFNBQVNBO1FBQ1AsSUFBSUUsYUFDRnhCLElBQUl3QixVQUFVLElBQ2R4QixJQUFJeUIsYUFBYSxJQUNqQnpCLElBQUkwQixrQkFBa0IsSUFDdEIxQixJQUFJMkIsbUJBQW1CLElBQ3ZCQyxRQUFRNUIsSUFBSTZCLHVCQUF1QjtRQUNyQy9CLEVBQUVjLGNBQWNHLElBQUksQ0FDbEIsU0FDQVMsYUFBYSw4QkFBOEI7SUFFL0M7SUFFQSxTQUFTTjtRQUNQLElBQUlZLFNBQVNoQyxFQUFFLG1DQUFtQ2lCLElBQUksQ0FDcEQsUUFDQTtRQUdGLElBQUlnQixXQUFXakMsRUFBRSxTQUNkaUIsSUFBSSxDQUNILE9BQ0Esa0ZBRURBLElBQUksQ0FBQyxPQUFPLElBQ1ppQixHQUFHLENBQUM7WUFDSEMsYUFBYTtZQUNiQyxPQUFPO1FBQ1Q7UUFFRixJQUFJQyxZQUFZckMsRUFBRSxTQUNmaUIsSUFBSSxDQUNILE9BQ0Esa0ZBRURBLElBQUksQ0FBQyxPQUFPO1FBRWZlLE9BQU9NLE1BQU0sQ0FBQ0wsVUFBVUk7UUFDeEIsT0FBT0wsTUFBTSxDQUFDLEVBQUU7SUFDbEI7SUFFQSxTQUFTWDtRQUNQLElBQUlrQixRQUFRbEMsTUFBTW1DLFFBQVEsQ0FBQ2xDO1FBQzNCLElBQUltQyxRQUFRRixNQUFNRyxNQUFNLElBQUlILE1BQU1JLEdBQUcsQ0FBQyxPQUFPN0I7UUFDN0MsSUFBSThCLFdBQVdqRCxRQUFRa0QsR0FBRyxDQUFDO1FBQzNCLElBQUlKLE9BQU87WUFDVCxxQ0FBcUM7WUFDckMsSUFBSUcsVUFBVTtnQkFDWkwsTUFBTU8sTUFBTTtZQUNkO1lBQ0EsZ0NBQWdDO1lBQ2hDO1FBQ0Y7UUFDQSxvQ0FBb0M7UUFDcEMsSUFBSVAsTUFBTUcsTUFBTSxFQUFFO1lBQ2hCSCxNQUFNTyxNQUFNO1FBQ2Q7UUFDQSw2Q0FBNkM7UUFDN0MsSUFBSSxDQUFDRixVQUFVO1lBQ2J2QyxNQUFNaUMsTUFBTSxDQUFDeEI7UUFDZjtJQUNGO0lBRUEsZ0JBQWdCO0lBQ2hCLE9BQU9iO0FBQ1QifQ==

}),
322: (function (module, __unused_webpack_exports, __webpack_require__) {
/* globals document, window, localStorage, WEBFLOW_API_HOST, WEBFLOW_DEFAULT_HOST */ /**
 * Webflow: Editor loader
 */ 
var Webflow = __webpack_require__(3949);
Webflow.define('edit', module.exports = function($, _, options) {
    options = options || {};
    // Exit early in test env or when inside an iframe
    if (Webflow.env('test') || Webflow.env('frame')) {
        // Allow test fixtures to continue
        if (!options.fixture && !inTestRunner()) {
            return {
                exit: 1
            };
        }
    }
    var api = {};
    var $win = $(window);
    var $html = $(document.documentElement);
    var location = document.location;
    var hashchange = 'hashchange';
    var loaded;
    var loadEditor = options.load || load;
    var hasLocalStorage = false;
    try {
        // Check localStorage for editor data
        hasLocalStorage = localStorage && localStorage.getItem && localStorage.getItem('WebflowEditor');
    } catch (e) {
    // SecurityError: browser storage has been disabled
    }
    if (/[?&](update)(?:[=&?]|$)/.test(location.search) || /\?update$/.test(location.href)) {
        // Check url query for `update` parameter or any url ending in `?update`
        redirectToDesigner();
    } else if (hasLocalStorage) {
        loadEditor();
    } else if (location.search) {
        // Check url query for `edit` parameter or any url ending in `?edit`
        if (/[?&](edit)(?:[=&?]|$)/.test(location.search) || /\?edit$/.test(location.href)) {
            loadEditor();
        }
    } else {
        // Check hash fragment to support `#hash?edit`
        $win.on(hashchange, checkHash).triggerHandler(hashchange);
    }
    function checkHash() {
        if (loaded) {
            return;
        }
        // Load editor when hash contains `?edit`
        if (/\?edit/.test(location.hash)) {
            loadEditor();
        }
    }
    function redirectToDesigner() {
        var html = document.documentElement;
        var siteId = html.getAttribute('data-wf-site');
        var pageId = html.getAttribute('data-wf-page');
        var itemSlug = html.getAttribute('data-wf-item-slug');
        var collectionId = html.getAttribute('data-wf-collection');
        var domain = html.getAttribute('data-wf-domain');
        if (!siteId || !pageId) {
            return;
        }
        // Open the designer without forcing a mode or role simulation so the
        // user's role and saved preview role preference are respected
        // (see public/js/designer-flux/utils/handleSimulateRoleQueryParam.ts).
        var query = 'pageId=' + pageId;
        // Track that this redirect originated from the legacy editor ?update param
        query += '&utm_source=legacy_editor';
        // Build query string with CMS item context if available
        if (itemSlug && collectionId && domain) {
            query += '&domain=' + encodeURIComponent(domain);
            query += '&itemSlug=' + encodeURIComponent(itemSlug);
            query += '&collectionId=' + collectionId;
        }
        window.location.href = "https://webflow.com" + '/external/designer/' + siteId + '?' + query;
    }
    function load() {
        loaded = true;
        // Predefine global immediately to benefit Webflow.env
        window.WebflowEditor = true;
        $win.off(hashchange, checkHash);
        checkThirdPartyCookieSupport(function(thirdPartyCookiesSupported) {
            $.ajax({
                url: cleanSlashes("https://editor-api.webflow.com" + '/api/editor/view'),
                data: {
                    siteId: $html.attr('data-wf-site')
                },
                xhrFields: {
                    withCredentials: true
                },
                dataType: 'json',
                crossDomain: true,
                success: success(thirdPartyCookiesSupported)
            });
        });
    }
    function success(thirdPartyCookiesSupported) {
        return function(data) {
            if (!data) {
                console.error('Could not load editor data');
                return;
            }
            data.thirdPartyCookiesSupported = thirdPartyCookiesSupported;
            getScript(prefix(data.scriptPath), function() {
                window.WebflowEditor(data);
            });
        };
    }
    function getScript(url, done) {
        $.ajax({
            type: 'GET',
            url,
            dataType: 'script',
            cache: true
        }).then(done, error);
    }
    function error(jqXHR, textStatus, errorThrown) {
        console.error('Could not load editor script: ' + textStatus);
        throw errorThrown;
    }
    function prefix(url) {
        return url.indexOf('//') >= 0 ? url : cleanSlashes("https://editor-api.webflow.com" + url);
    }
    function cleanSlashes(url) {
        return url.replace(/([^:])\/\//g, '$1/');
    }
    function checkThirdPartyCookieSupport(callback) {
        var iframe = window.document.createElement('iframe');
        iframe.src = "https://webflow.com" + '/site/third-party-cookie-check.html';
        iframe.style.display = 'none';
        iframe.sandbox = 'allow-scripts allow-same-origin';
        var handleMessage = function(event) {
            if (event.data === 'WF_third_party_cookies_unsupported') {
                cleanUpCookieCheckerIframe(iframe, handleMessage);
                callback(false);
            } else if (event.data === 'WF_third_party_cookies_supported') {
                cleanUpCookieCheckerIframe(iframe, handleMessage);
                callback(true);
            }
        };
        iframe.onerror = function() {
            cleanUpCookieCheckerIframe(iframe, handleMessage);
            callback(false);
        };
        window.addEventListener('message', handleMessage, false);
        window.document.body.appendChild(iframe);
    }
    function cleanUpCookieCheckerIframe(iframe, listener) {
        window.removeEventListener('message', listener, false);
        iframe.remove();
    }
    // Export module
    return api;
});
function inTestRunner() {
    try {
        return Boolean(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
    } catch (e) {
        return false;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3NoYXJlZC9yZW5kZXIvcGx1Z2lucy9CYXNlU2l0ZU1vZHVsZXMvd2ViZmxvdy1lZGl0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbHMgZG9jdW1lbnQsIHdpbmRvdywgbG9jYWxTdG9yYWdlLCBXRUJGTE9XX0FQSV9IT1NULCBXRUJGTE9XX0RFRkFVTFRfSE9TVCAqL1xuXG4vKipcbiAqIFdlYmZsb3c6IEVkaXRvciBsb2FkZXJcbiAqL1xudmFyIFdlYmZsb3cgPSByZXF1aXJlKCcuL3dlYmZsb3ctbGliJyk7XG5cbldlYmZsb3cuZGVmaW5lKFxuICAnZWRpdCcsXG4gIChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkLCBfLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAvLyBFeGl0IGVhcmx5IGluIHRlc3QgZW52IG9yIHdoZW4gaW5zaWRlIGFuIGlmcmFtZVxuICAgIGlmIChXZWJmbG93LmVudigndGVzdCcpIHx8IFdlYmZsb3cuZW52KCdmcmFtZScpKSB7XG4gICAgICAvLyBBbGxvdyB0ZXN0IGZpeHR1cmVzIHRvIGNvbnRpbnVlXG4gICAgICBpZiAoIW9wdGlvbnMuZml4dHVyZSAmJiAhaW5UZXN0UnVubmVyKCkpIHtcbiAgICAgICAgcmV0dXJuIHtleGl0OiAxfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYXBpID0ge307XG4gICAgdmFyICR3aW4gPSAkKHdpbmRvdyk7XG4gICAgdmFyICRodG1sID0gJChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuICAgIHZhciBsb2NhdGlvbiA9IGRvY3VtZW50LmxvY2F0aW9uO1xuICAgIHZhciBoYXNoY2hhbmdlID0gJ2hhc2hjaGFuZ2UnO1xuICAgIHZhciBsb2FkZWQ7XG4gICAgdmFyIGxvYWRFZGl0b3IgPSBvcHRpb25zLmxvYWQgfHwgbG9hZDtcbiAgICB2YXIgaGFzTG9jYWxTdG9yYWdlID0gZmFsc2U7XG5cbiAgICB0cnkge1xuICAgICAgLy8gQ2hlY2sgbG9jYWxTdG9yYWdlIGZvciBlZGl0b3IgZGF0YVxuICAgICAgaGFzTG9jYWxTdG9yYWdlID1cbiAgICAgICAgbG9jYWxTdG9yYWdlICYmXG4gICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtICYmXG4gICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdXZWJmbG93RWRpdG9yJyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gU2VjdXJpdHlFcnJvcjogYnJvd3NlciBzdG9yYWdlIGhhcyBiZWVuIGRpc2FibGVkXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgL1s/Jl0odXBkYXRlKSg/Ols9Jj9dfCQpLy50ZXN0KGxvY2F0aW9uLnNlYXJjaCkgfHxcbiAgICAgIC9cXD91cGRhdGUkLy50ZXN0KGxvY2F0aW9uLmhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBDaGVjayB1cmwgcXVlcnkgZm9yIGB1cGRhdGVgIHBhcmFtZXRlciBvciBhbnkgdXJsIGVuZGluZyBpbiBgP3VwZGF0ZWBcbiAgICAgIHJlZGlyZWN0VG9EZXNpZ25lcigpO1xuICAgIH0gZWxzZSBpZiAoaGFzTG9jYWxTdG9yYWdlKSB7XG4gICAgICBsb2FkRWRpdG9yKCk7XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbi5zZWFyY2gpIHtcbiAgICAgIC8vIENoZWNrIHVybCBxdWVyeSBmb3IgYGVkaXRgIHBhcmFtZXRlciBvciBhbnkgdXJsIGVuZGluZyBpbiBgP2VkaXRgXG4gICAgICBpZiAoXG4gICAgICAgIC9bPyZdKGVkaXQpKD86Wz0mP118JCkvLnRlc3QobG9jYXRpb24uc2VhcmNoKSB8fFxuICAgICAgICAvXFw/ZWRpdCQvLnRlc3QobG9jYXRpb24uaHJlZilcbiAgICAgICkge1xuICAgICAgICBsb2FkRWRpdG9yKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENoZWNrIGhhc2ggZnJhZ21lbnQgdG8gc3VwcG9ydCBgI2hhc2g/ZWRpdGBcbiAgICAgICR3aW4ub24oaGFzaGNoYW5nZSwgY2hlY2tIYXNoKS50cmlnZ2VySGFuZGxlcihoYXNoY2hhbmdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0hhc2goKSB7XG4gICAgICBpZiAobG9hZGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIExvYWQgZWRpdG9yIHdoZW4gaGFzaCBjb250YWlucyBgP2VkaXRgXG4gICAgICBpZiAoL1xcP2VkaXQvLnRlc3QobG9jYXRpb24uaGFzaCkpIHtcbiAgICAgICAgbG9hZEVkaXRvcigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZGlyZWN0VG9EZXNpZ25lcigpIHtcbiAgICAgIHZhciBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgdmFyIHNpdGVJZCA9IGh0bWwuZ2V0QXR0cmlidXRlKCdkYXRhLXdmLXNpdGUnKTtcbiAgICAgIHZhciBwYWdlSWQgPSBodG1sLmdldEF0dHJpYnV0ZSgnZGF0YS13Zi1wYWdlJyk7XG4gICAgICB2YXIgaXRlbVNsdWcgPSBodG1sLmdldEF0dHJpYnV0ZSgnZGF0YS13Zi1pdGVtLXNsdWcnKTtcbiAgICAgIHZhciBjb2xsZWN0aW9uSWQgPSBodG1sLmdldEF0dHJpYnV0ZSgnZGF0YS13Zi1jb2xsZWN0aW9uJyk7XG4gICAgICB2YXIgZG9tYWluID0gaHRtbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2YtZG9tYWluJyk7XG5cbiAgICAgIGlmICghc2l0ZUlkIHx8ICFwYWdlSWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBPcGVuIHRoZSBkZXNpZ25lciB3aXRob3V0IGZvcmNpbmcgYSBtb2RlIG9yIHJvbGUgc2ltdWxhdGlvbiBzbyB0aGVcbiAgICAgIC8vIHVzZXIncyByb2xlIGFuZCBzYXZlZCBwcmV2aWV3IHJvbGUgcHJlZmVyZW5jZSBhcmUgcmVzcGVjdGVkXG4gICAgICAvLyAoc2VlIHB1YmxpYy9qcy9kZXNpZ25lci1mbHV4L3V0aWxzL2hhbmRsZVNpbXVsYXRlUm9sZVF1ZXJ5UGFyYW0udHMpLlxuICAgICAgdmFyIHF1ZXJ5ID0gJ3BhZ2VJZD0nICsgcGFnZUlkO1xuICAgICAgLy8gVHJhY2sgdGhhdCB0aGlzIHJlZGlyZWN0IG9yaWdpbmF0ZWQgZnJvbSB0aGUgbGVnYWN5IGVkaXRvciA/dXBkYXRlIHBhcmFtXG4gICAgICBxdWVyeSArPSAnJnV0bV9zb3VyY2U9bGVnYWN5X2VkaXRvcic7XG4gICAgICAvLyBCdWlsZCBxdWVyeSBzdHJpbmcgd2l0aCBDTVMgaXRlbSBjb250ZXh0IGlmIGF2YWlsYWJsZVxuICAgICAgaWYgKGl0ZW1TbHVnICYmIGNvbGxlY3Rpb25JZCAmJiBkb21haW4pIHtcbiAgICAgICAgcXVlcnkgKz0gJyZkb21haW49JyArIGVuY29kZVVSSUNvbXBvbmVudChkb21haW4pO1xuICAgICAgICBxdWVyeSArPSAnJml0ZW1TbHVnPScgKyBlbmNvZGVVUklDb21wb25lbnQoaXRlbVNsdWcpO1xuICAgICAgICBxdWVyeSArPSAnJmNvbGxlY3Rpb25JZD0nICsgY29sbGVjdGlvbklkO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9XG4gICAgICAgIFdFQkZMT1dfREVGQVVMVF9IT1NUICsgJy9leHRlcm5hbC9kZXNpZ25lci8nICsgc2l0ZUlkICsgJz8nICsgcXVlcnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICAvLyBQcmVkZWZpbmUgZ2xvYmFsIGltbWVkaWF0ZWx5IHRvIGJlbmVmaXQgV2ViZmxvdy5lbnZcbiAgICAgIHdpbmRvdy5XZWJmbG93RWRpdG9yID0gdHJ1ZTtcbiAgICAgICR3aW4ub2ZmKGhhc2hjaGFuZ2UsIGNoZWNrSGFzaCk7XG4gICAgICBjaGVja1RoaXJkUGFydHlDb29raWVTdXBwb3J0KGZ1bmN0aW9uICh0aGlyZFBhcnR5Q29va2llc1N1cHBvcnRlZCkge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgIHVybDogY2xlYW5TbGFzaGVzKFdFQkZMT1dfQVBJX0hPU1QgKyAnL2FwaS9lZGl0b3IvdmlldycpLFxuICAgICAgICAgIGRhdGE6IHtzaXRlSWQ6ICRodG1sLmF0dHIoJ2RhdGEtd2Ytc2l0ZScpfSxcbiAgICAgICAgICB4aHJGaWVsZHM6IHt3aXRoQ3JlZGVudGlhbHM6IHRydWV9LFxuICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgY3Jvc3NEb21haW46IHRydWUsXG4gICAgICAgICAgc3VjY2Vzczogc3VjY2Vzcyh0aGlyZFBhcnR5Q29va2llc1N1cHBvcnRlZCksXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3VjY2Vzcyh0aGlyZFBhcnR5Q29va2llc1N1cHBvcnRlZCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvdWxkIG5vdCBsb2FkIGVkaXRvciBkYXRhJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEudGhpcmRQYXJ0eUNvb2tpZXNTdXBwb3J0ZWQgPSB0aGlyZFBhcnR5Q29va2llc1N1cHBvcnRlZDtcbiAgICAgICAgZ2V0U2NyaXB0KHByZWZpeChkYXRhLnNjcmlwdFBhdGgpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgd2luZG93LldlYmZsb3dFZGl0b3IoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTY3JpcHQodXJsLCBkb25lKSB7XG4gICAgICAkLmFqYXgoe3R5cGU6ICdHRVQnLCB1cmwsIGRhdGFUeXBlOiAnc2NyaXB0JywgY2FjaGU6IHRydWV9KS50aGVuKFxuICAgICAgICBkb25lLFxuICAgICAgICBlcnJvclxuICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlcnJvcihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvdWxkIG5vdCBsb2FkIGVkaXRvciBzY3JpcHQ6ICcgKyB0ZXh0U3RhdHVzKTtcbiAgICAgIHRocm93IGVycm9yVGhyb3duO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZWZpeCh1cmwpIHtcbiAgICAgIHJldHVybiB1cmwuaW5kZXhPZignLy8nKSA+PSAwXG4gICAgICAgID8gdXJsXG4gICAgICAgIDogY2xlYW5TbGFzaGVzKFdFQkZMT1dfQVBJX0hPU1QgKyB1cmwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFuU2xhc2hlcyh1cmwpIHtcbiAgICAgIHJldHVybiB1cmwucmVwbGFjZSgvKFteOl0pXFwvXFwvL2csICckMS8nKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1RoaXJkUGFydHlDb29raWVTdXBwb3J0KGNhbGxiYWNrKSB7XG4gICAgICB2YXIgaWZyYW1lID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgaWZyYW1lLnNyYyA9IFdFQkZMT1dfREVGQVVMVF9IT1NUICsgJy9zaXRlL3RoaXJkLXBhcnR5LWNvb2tpZS1jaGVjay5odG1sJztcbiAgICAgIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgaWZyYW1lLnNhbmRib3ggPSAnYWxsb3ctc2NyaXB0cyBhbGxvdy1zYW1lLW9yaWdpbic7XG5cbiAgICAgIHZhciBoYW5kbGVNZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5kYXRhID09PSAnV0ZfdGhpcmRfcGFydHlfY29va2llc191bnN1cHBvcnRlZCcpIHtcbiAgICAgICAgICBjbGVhblVwQ29va2llQ2hlY2tlcklmcmFtZShpZnJhbWUsIGhhbmRsZU1lc3NhZ2UpO1xuICAgICAgICAgIGNhbGxiYWNrKGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5kYXRhID09PSAnV0ZfdGhpcmRfcGFydHlfY29va2llc19zdXBwb3J0ZWQnKSB7XG4gICAgICAgICAgY2xlYW5VcENvb2tpZUNoZWNrZXJJZnJhbWUoaWZyYW1lLCBoYW5kbGVNZXNzYWdlKTtcbiAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWZyYW1lLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFuVXBDb29raWVDaGVja2VySWZyYW1lKGlmcmFtZSwgaGFuZGxlTWVzc2FnZSk7XG4gICAgICAgIGNhbGxiYWNrKGZhbHNlKTtcbiAgICAgIH07XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhblVwQ29va2llQ2hlY2tlcklmcmFtZShpZnJhbWUsIGxpc3RlbmVyKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgICBpZnJhbWUucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgLy8gRXhwb3J0IG1vZHVsZVxuICAgIHJldHVybiBhcGk7XG4gIH0pXG4pO1xuXG5mdW5jdGlvbiBpblRlc3RSdW5uZXIoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEJvb2xlYW4od2luZG93LnRvcC5fX0N5cHJlc3NfXyB8fCB3aW5kb3cuUExBWVdSSUdIVF9URVNUKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIldlYmZsb3ciLCJyZXF1aXJlIiwiZGVmaW5lIiwibW9kdWxlIiwiZXhwb3J0cyIsIiQiLCJfIiwib3B0aW9ucyIsImVudiIsImZpeHR1cmUiLCJpblRlc3RSdW5uZXIiLCJleGl0IiwiYXBpIiwiJHdpbiIsIndpbmRvdyIsIiRodG1sIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJsb2NhdGlvbiIsImhhc2hjaGFuZ2UiLCJsb2FkZWQiLCJsb2FkRWRpdG9yIiwibG9hZCIsImhhc0xvY2FsU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlIiwidGVzdCIsInNlYXJjaCIsImhyZWYiLCJyZWRpcmVjdFRvRGVzaWduZXIiLCJvbiIsImNoZWNrSGFzaCIsInRyaWdnZXJIYW5kbGVyIiwiaGFzaCIsImh0bWwiLCJzaXRlSWQiLCJnZXRBdHRyaWJ1dGUiLCJwYWdlSWQiLCJpdGVtU2x1ZyIsImNvbGxlY3Rpb25JZCIsImRvbWFpbiIsInF1ZXJ5IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiV0VCRkxPV19ERUZBVUxUX0hPU1QiLCJXZWJmbG93RWRpdG9yIiwib2ZmIiwiY2hlY2tUaGlyZFBhcnR5Q29va2llU3VwcG9ydCIsInRoaXJkUGFydHlDb29raWVzU3VwcG9ydGVkIiwiYWpheCIsInVybCIsImNsZWFuU2xhc2hlcyIsIldFQkZMT1dfQVBJX0hPU1QiLCJkYXRhIiwiYXR0ciIsInhockZpZWxkcyIsIndpdGhDcmVkZW50aWFscyIsImRhdGFUeXBlIiwiY3Jvc3NEb21haW4iLCJzdWNjZXNzIiwiY29uc29sZSIsImVycm9yIiwiZ2V0U2NyaXB0IiwicHJlZml4Iiwic2NyaXB0UGF0aCIsImRvbmUiLCJ0eXBlIiwiY2FjaGUiLCJ0aGVuIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJpbmRleE9mIiwicmVwbGFjZSIsImNhbGxiYWNrIiwiaWZyYW1lIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsInN0eWxlIiwiZGlzcGxheSIsInNhbmRib3giLCJoYW5kbGVNZXNzYWdlIiwiZXZlbnQiLCJjbGVhblVwQ29va2llQ2hlY2tlcklmcmFtZSIsIm9uZXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiYm9keSIsImFwcGVuZENoaWxkIiwibGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiQm9vbGVhbiIsInRvcCIsIl9fQ3lwcmVzc19fIiwiUExBWVdSSUdIVF9URVNUIl0sIm1hcHBpbmdzIjoiQUFBQSxrRkFBa0YsR0FFbEY7O0NBRUM7QUFDRCxJQUFJQSxVQUFVQyxRQUFRO0FBRXRCRCxRQUFRRSxNQUFNLENBQ1osUUFDQ0MsT0FBT0MsT0FBTyxHQUFHLFNBQVVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxPQUFPO0lBQ3ZDQSxVQUFVQSxXQUFXLENBQUM7SUFFdEIsa0RBQWtEO0lBQ2xELElBQUlQLFFBQVFRLEdBQUcsQ0FBQyxXQUFXUixRQUFRUSxHQUFHLENBQUMsVUFBVTtRQUMvQyxrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDRCxRQUFRRSxPQUFPLElBQUksQ0FBQ0MsZ0JBQWdCO1lBQ3ZDLE9BQU87Z0JBQUNDLE1BQU07WUFBQztRQUNqQjtJQUNGO0lBRUEsSUFBSUMsTUFBTSxDQUFDO0lBQ1gsSUFBSUMsT0FBT1IsRUFBRVM7SUFDYixJQUFJQyxRQUFRVixFQUFFVyxTQUFTQyxlQUFlO0lBQ3RDLElBQUlDLFdBQVdGLFNBQVNFLFFBQVE7SUFDaEMsSUFBSUMsYUFBYTtJQUNqQixJQUFJQztJQUNKLElBQUlDLGFBQWFkLFFBQVFlLElBQUksSUFBSUE7SUFDakMsSUFBSUMsa0JBQWtCO0lBRXRCLElBQUk7UUFDRixxQ0FBcUM7UUFDckNBLGtCQUNFQyxnQkFDQUEsYUFBYUMsT0FBTyxJQUNwQkQsYUFBYUMsT0FBTyxDQUFDO0lBQ3pCLEVBQUUsT0FBT0MsR0FBRztJQUNWLG1EQUFtRDtJQUNyRDtJQUVBLElBQ0UsMEJBQTBCQyxJQUFJLENBQUNULFNBQVNVLE1BQU0sS0FDOUMsWUFBWUQsSUFBSSxDQUFDVCxTQUFTVyxJQUFJLEdBQzlCO1FBQ0Esd0VBQXdFO1FBQ3hFQztJQUNGLE9BQU8sSUFBSVAsaUJBQWlCO1FBQzFCRjtJQUNGLE9BQU8sSUFBSUgsU0FBU1UsTUFBTSxFQUFFO1FBQzFCLG9FQUFvRTtRQUNwRSxJQUNFLHdCQUF3QkQsSUFB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

}),
2338: (function (module, __unused_webpack_exports, __webpack_require__) {
/* globals window, document */ /**
 * Webflow: focus-visible
 */ 
var Webflow = __webpack_require__(3949);
/*
 * This polyfill comes from https://github.com/WICG/focus-visible
 */ Webflow.define('focus-visible', module.exports = function() {
    /**
     * Applies the :focus-visible polyfill at the given scope.
     * A scope in this case is either the top-level Document or a Shadow Root.
     *
     * @param {(Document|ShadowRoot)} scope
     * @see https://github.com/WICG/focus-visible
     */ function applyFocusVisiblePolyfill(scope) {
        var hadKeyboardEvent = true;
        var hadFocusVisibleRecently = false;
        var hadFocusVisibleRecentlyTimeout = null;
        var inputTypesAllowlist = {
            text: true,
            search: true,
            url: true,
            tel: true,
            email: true,
            password: true,
            number: true,
            date: true,
            month: true,
            week: true,
            time: true,
            datetime: true,
            'datetime-local': true
        };
        /**
       * Helper function for legacy browsers and iframes which sometimes focus
       * elements like document, body, and non-interactive SVG.
       * @param {Element} el
       */ function isValidFocusTarget(el) {
            if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
                return true;
            }
            return false;
        }
        /**
       * Computes whether the given element should automatically trigger the
       * `focus-visible` class being added, i.e. whether it should always match
       * `:focus-visible` when focused.
       * @param {Element} el
       * @return {boolean}
       */ function focusTriggersKeyboardModality(el) {
            var type = el.type;
            var tagName = el.tagName;
            if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
                return true;
            }
            if (tagName === 'TEXTAREA' && !el.readOnly) {
                return true;
            }
            if (el.isContentEditable) {
                return true;
            }
            return false;
        }
        function addFocusVisibleAttribute(el) {
            if (el.getAttribute('data-wf-focus-visible')) {
                return;
            }
            el.setAttribute('data-wf-focus-visible', 'true');
        }
        function removeFocusVisibleAttribute(el) {
            if (!el.getAttribute('data-wf-focus-visible')) {
                return;
            }
            el.removeAttribute('data-wf-focus-visible');
        }
        /**
       * If the most recent user interaction was via the keyboard;
       * and the key press did not include a meta, alt/option, or control key;
       * then the modality is keyboard. Otherwise, the modality is not keyboard.
       * Apply `focus-visible` to any current active element and keep track
       * of our keyboard modality state with `hadKeyboardEvent`.
       * @param {KeyboardEvent} e
       */ function onKeyDown(e) {
            if (e.metaKey || e.altKey || e.ctrlKey) {
                return;
            }
            if (isValidFocusTarget(scope.activeElement)) {
                addFocusVisibleAttribute(scope.activeElement);
            }
            hadKeyboardEvent = true;
        }
        /**
       * If at any point a user clicks with a pointing device, ensure that we change
       * the modality away from keyboard.
       * This avoids the situation where a user presses a key on an already focused
       * element, and then clicks on a different element, focusing it with a
       * pointing device, while we still think we're in keyboard modality.
       * @param {Event} e
       */ function onPointerDown() {
            hadKeyboardEvent = false;
        }
        /**
       * On `focus`, add the `focus-visible` class to the target if:
       * - the target received focus as a result of keyboard navigation, or
       * - the event target is an element that will likely require interaction
       *   via the keyboard (e.g. a text box)
       * @param {Event} e
       */ function onFocus(e) {
            // Prevent IE from focusing the document or HTML element.
            if (!isValidFocusTarget(e.target)) {
                return;
            }
            if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
                addFocusVisibleAttribute(e.target);
            }
        }
        /**
       * On `blur`, remove the `focus-visible` class from the target.
       * @param {Event} e
       */ function onBlur(e) {
            if (!isValidFocusTarget(e.target)) {
                return;
            }
            if (e.target.hasAttribute('data-wf-focus-visible')) {
                // To detect a tab/window switch, we look for a blur event followed
                // rapidly by a visibility change.
                // If we don't see a visibility change within 100ms, it's probably a
                // regular focus change.
                hadFocusVisibleRecently = true;
                window.clearTimeout(hadFocusVisibleRecentlyTimeout);
                hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
                    hadFocusVisibleRecently = false;
                }, 100);
                removeFocusVisibleAttribute(e.target);
            }
        }
        /**
       * If the user changes tabs, keep track of whether or not the previously
       * focused element had .focus-visible.
       * @param {Event} e
       */ function onVisibilityChange() {
            if (document.visibilityState === 'hidden') {
                // If the tab becomes active again, the browser will handle calling focus
                // on the element (Safari actually calls it twice).
                // If this tab change caused a blur on an element with focus-visible,
                // re-apply the class when the user switches back to the tab.
                if (hadFocusVisibleRecently) {
                    hadKeyboardEvent = true;
                }
                addInitialPointerMoveListeners();
            }
        }
        /**
       * Add a group of listeners to detect usage of any pointing devices.
       * These listeners will be added when the polyfill first loads, and anytime
       * the window is blurred, so that they are active when the window regains
       * focus.
       */ function addInitialPointerMoveListeners() {
            document.addEventListener('mousemove', onInitialPointerMove);
            document.addEventListener('mousedown', onInitialPointerMove);
            document.addEventListener('mouseup', onInitialPointerMove);
            document.addEventListener('pointermove', onInitialPointerMove);
            document.addEventListener('pointerdown', onInitialPointerMove);
            document.addEventListener('pointerup', onInitialPointerMove);
            document.addEventListener('touchmove', onInitialPointerMove);
            document.addEventListener('touchstart', onInitialPointerMove);
            document.addEventListener('touchend', onInitialPointerMove);
        }
        function removeInitialPointerMoveListeners() {
            document.removeEventListener('mousemove', onInitialPointerMove);
            document.removeEventListener('mousedown', onInitialPointerMove);
            document.removeEventListener('mouseup', onInitialPointerMove);
            document.removeEventListener('pointermove', onInitialPointerMove);
            document.removeEventListener('pointerdown', onInitialPointerMove);
            document.removeEventListener('pointerup', onInitialPointerMove);
            document.removeEventListener('touchmove', onInitialPointerMove);
            document.removeEventListener('touchstart', onInitialPointerMove);
            document.removeEventListener('touchend', onInitialPointerMove);
        }
        /**
       * When the polfyill first loads, assume the user is in keyboard modality.
       * If any event is received from a pointing device (e.g. mouse, pointer,
       * touch), turn off keyboard modality.
       * This accounts for situations where focus enters the page from the URL bar.
       * @param {Event} e
       */ function onInitialPointerMove(e) {
            // Work around a Safari quirk that fires a mousemove on <html> whenever the
            // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
            if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
                return;
            }
            hadKeyboardEvent = false;
            removeInitialPointerMoveListeners();
        }
        // For some kinds of state, we are interested in changes at the global scope
        // only. For example, global pointer input, global key presses and global
        // visibility change should affect the state at every scope:
        document.addEventListener('keydown', onKeyDown, true);
        document.addEventListener('mousedown', onPointerDown, true);
        document.addEventListener('pointerdown', onPointerDown, true);
        document.addEventListener('touchstart', onPointerDown, true);
        document.addEventListener('visibilitychange', onVisibilityChange, true);
        addInitialPointerMoveListeners();
        // For focus and blur, we specifically care about state changes in the local
        // scope. This is because focus / blur events that originate from within a
        // shadow root are not re-dispatched from the host element if it was already
        // the active element in its own scope:
        scope.addEventListener('focus', onFocus, true);
        scope.addEventListener('blur', onBlur, true);
    }
    function ready() {
        if (typeof document !== 'undefined') {
            try {
                // check for native support; this will throw if the selector is not considered valid
                document.querySelector(':focus-visible');
            } catch (e) {
                // :focus-visible pseudo-selector is not supported natively
                applyFocusVisiblePolyfill(document);
            }
        }
    }
    // Export module
    return {
        ready
    };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3NoYXJlZC9yZW5kZXIvcGx1Z2lucy9CYXNlU2l0ZU1vZHVsZXMvd2ViZmxvdy1mb2N1cy12aXNpYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbHMgd2luZG93LCBkb2N1bWVudCAqL1xuXG4vKipcbiAqIFdlYmZsb3c6IGZvY3VzLXZpc2libGVcbiAqL1xuXG52YXIgV2ViZmxvdyA9IHJlcXVpcmUoJy4vd2ViZmxvdy1saWInKTtcblxuLypcbiAqIFRoaXMgcG9seWZpbGwgY29tZXMgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vV0lDRy9mb2N1cy12aXNpYmxlXG4gKi9cbldlYmZsb3cuZGVmaW5lKFxuICAnZm9jdXMtdmlzaWJsZScsXG4gIChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHRoZSA6Zm9jdXMtdmlzaWJsZSBwb2x5ZmlsbCBhdCB0aGUgZ2l2ZW4gc2NvcGUuXG4gICAgICogQSBzY29wZSBpbiB0aGlzIGNhc2UgaXMgZWl0aGVyIHRoZSB0b3AtbGV2ZWwgRG9jdW1lbnQgb3IgYSBTaGFkb3cgUm9vdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7KERvY3VtZW50fFNoYWRvd1Jvb3QpfSBzY29wZVxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvZm9jdXMtdmlzaWJsZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFwcGx5Rm9jdXNWaXNpYmxlUG9seWZpbGwoc2NvcGUpIHtcbiAgICAgIHZhciBoYWRLZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbiAgICAgIHZhciBoYWRGb2N1c1Zpc2libGVSZWNlbnRseSA9IGZhbHNlO1xuICAgICAgdmFyIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5VGltZW91dCA9IG51bGw7XG5cbiAgICAgIHZhciBpbnB1dFR5cGVzQWxsb3dsaXN0ID0ge1xuICAgICAgICB0ZXh0OiB0cnVlLFxuICAgICAgICBzZWFyY2g6IHRydWUsXG4gICAgICAgIHVybDogdHJ1ZSxcbiAgICAgICAgdGVsOiB0cnVlLFxuICAgICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgICAgcGFzc3dvcmQ6IHRydWUsXG4gICAgICAgIG51bWJlcjogdHJ1ZSxcbiAgICAgICAgZGF0ZTogdHJ1ZSxcbiAgICAgICAgbW9udGg6IHRydWUsXG4gICAgICAgIHdlZWs6IHRydWUsXG4gICAgICAgIHRpbWU6IHRydWUsXG4gICAgICAgIGRhdGV0aW1lOiB0cnVlLFxuICAgICAgICAnZGF0ZXRpbWUtbG9jYWwnOiB0cnVlLFxuICAgICAgfTtcblxuICAgICAgLyoqXG4gICAgICAgKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGxlZ2FjeSBicm93c2VycyBhbmQgaWZyYW1lcyB3aGljaCBzb21ldGltZXMgZm9jdXNcbiAgICAgICAqIGVsZW1lbnRzIGxpa2UgZG9jdW1lbnQsIGJvZHksIGFuZCBub24taW50ZXJhY3RpdmUgU1ZHLlxuICAgICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBpc1ZhbGlkRm9jdXNUYXJnZXQoZWwpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGVsICYmXG4gICAgICAgICAgZWwgIT09IGRvY3VtZW50ICYmXG4gICAgICAgICAgZWwubm9kZU5hbWUgIT09ICdIVE1MJyAmJlxuICAgICAgICAgIGVsLm5vZGVOYW1lICE9PSAnQk9EWScgJiZcbiAgICAgICAgICAnY2xhc3NMaXN0JyBpbiBlbCAmJlxuICAgICAgICAgICdjb250YWlucycgaW4gZWwuY2xhc3NMaXN0XG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDb21wdXRlcyB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IHNob3VsZCBhdXRvbWF0aWNhbGx5IHRyaWdnZXIgdGhlXG4gICAgICAgKiBgZm9jdXMtdmlzaWJsZWAgY2xhc3MgYmVpbmcgYWRkZWQsIGkuZS4gd2hldGhlciBpdCBzaG91bGQgYWx3YXlzIG1hdGNoXG4gICAgICAgKiBgOmZvY3VzLXZpc2libGVgIHdoZW4gZm9jdXNlZC5cbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGZvY3VzVHJpZ2dlcnNLZXlib2FyZE1vZGFsaXR5KGVsKSB7XG4gICAgICAgIHZhciB0eXBlID0gZWwudHlwZTtcbiAgICAgICAgdmFyIHRhZ05hbWUgPSBlbC50YWdOYW1lO1xuXG4gICAgICAgIGlmICh0YWdOYW1lID09PSAnSU5QVVQnICYmIGlucHV0VHlwZXNBbGxvd2xpc3RbdHlwZV0gJiYgIWVsLnJlYWRPbmx5KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFnTmFtZSA9PT0gJ1RFWFRBUkVBJyAmJiAhZWwucmVhZE9ubHkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbC5pc0NvbnRlbnRFZGl0YWJsZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBhZGRGb2N1c1Zpc2libGVBdHRyaWJ1dGUoZWwpIHtcbiAgICAgICAgaWYgKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS13Zi1mb2N1cy12aXNpYmxlJykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXdmLWZvY3VzLXZpc2libGUnLCAndHJ1ZScpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiByZW1vdmVGb2N1c1Zpc2libGVBdHRyaWJ1dGUoZWwpIHtcbiAgICAgICAgaWYgKCFlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2YtZm9jdXMtdmlzaWJsZScpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS13Zi1mb2N1cy12aXNpYmxlJyk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgdGhlIG1vc3QgcmVjZW50IHVzZXIgaW50ZXJhY3Rpb24gd2FzIHZpYSB0aGUga2V5Ym9hcmQ7XG4gICAgICAgKiBhbmQgdGhlIGtleSBwcmVzcyBkaWQgbm90IGluY2x1ZGUgYSBtZXRhLCBhbHQvb3B0aW9uLCBvciBjb250cm9sIGtleTtcbiAgICAgICAqIHRoZW4gdGhlIG1vZGFsaXR5IGlzIGtleWJvYXJkLiBPdGhlcndpc2UsIHRoZSBtb2RhbGl0eSBpcyBub3Qga2V5Ym9hcmQuXG4gICAgICAgKiBBcHBseSBgZm9jdXMtdmlzaWJsZWAgdG8gYW55IGN1cnJlbnQgYWN0aXZlIGVsZW1lbnQgYW5kIGtlZXAgdHJhY2tcbiAgICAgICAqIG9mIG91ciBrZXlib2FyZCBtb2RhbGl0eSBzdGF0ZSB3aXRoIGBoYWRLZXlib2FyZEV2ZW50YC5cbiAgICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBvbktleURvd24oZSkge1xuICAgICAgICBpZiAoZS5tZXRhS2V5IHx8IGUuYWx0S2V5IHx8IGUuY3RybEtleSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1ZhbGlkRm9jdXNUYXJnZXQoc2NvcGUuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICBhZGRGb2N1c1Zpc2libGVBdHRyaWJ1dGUoc2NvcGUuYWN0aXZlRWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBoYWRLZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBJZiBhdCBhbnkgcG9pbnQgYSB1c2VyIGNsaWNrcyB3aXRoIGEgcG9pbnRpbmcgZGV2aWNlLCBlbnN1cmUgdGhhdCB3ZSBjaGFuZ2VcbiAgICAgICAqIHRoZSBtb2RhbGl0eSBhd2F5IGZyb20ga2V5Ym9hcmQuXG4gICAgICAgKiBUaGlzIGF2b2lkcyB0aGUgc2l0dWF0aW9uIHdoZXJlIGEgdXNlciBwcmVzc2VzIGEga2V5IG9uIGFuIGFscmVhZHkgZm9jdXNlZFxuICAgICAgICogZWxlbWVudCwgYW5kIHRoZW4gY2xpY2tzIG9uIGEgZGlmZmVyZW50IGVsZW1lbnQsIGZvY3VzaW5nIGl0IHdpdGggYVxuICAgICAgICogcG9pbnRpbmcgZGV2aWNlLCB3aGlsZSB3ZSBzdGlsbCB0aGluayB3ZSdyZSBpbiBrZXlib2FyZCBtb2RhbGl0eS5cbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gb25Qb2ludGVyRG93bigpIHtcbiAgICAgICAgaGFkS2V5Ym9hcmRFdmVudCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIE9uIGBmb2N1c2AsIGFkZCB0aGUgYGZvY3VzLXZpc2libGVgIGNsYXNzIHRvIHRoZSB0YXJnZXQgaWY6XG4gICAgICAgKiAtIHRoZSB0YXJnZXQgcmVjZWl2ZWQgZm9jdXMgYXMgYSByZXN1bHQgb2Yga2V5Ym9hcmQgbmF2aWdhdGlvbiwgb3JcbiAgICAgICAqIC0gdGhlIGV2ZW50IHRhcmdldCBpcyBhbiBlbGVtZW50IHRoYXQgd2lsbCBsaWtlbHkgcmVxdWlyZSBpbnRlcmFjdGlvblxuICAgICAgICogICB2aWEgdGhlIGtleWJvYXJkIChlLmcuIGEgdGV4dCBib3gpXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIG9uRm9jdXMoZSkge1xuICAgICAgICAvLyBQcmV2ZW50IElFIGZyb20gZm9jdXNpbmcgdGhlIGRvY3VtZW50IG9yIEhUTUwgZWxlbWVudC5cbiAgICAgICAgaWYgKCFpc1ZhbGlkRm9jdXNUYXJnZXQoZS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhZEtleWJvYXJkRXZlbnQgfHwgZm9jdXNUcmlnZ2Vyc0tleWJvYXJkTW9kYWxpdHkoZS50YXJnZXQpKSB7XG4gICAgICAgICAgYWRkRm9jdXNWaXNpYmxlQXR0cmlidXRlKGUudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIE9uIGBibHVyYCwgcmVtb3ZlIHRoZSBgZm9jdXMtdmlzaWJsZWAgY2xhc3MgZnJvbSB0aGUgdGFyZ2V0LlxuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBvbkJsdXIoZSkge1xuICAgICAgICBpZiAoIWlzVmFsaWRGb2N1c1RhcmdldChlLnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS50YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLXdmLWZvY3VzLXZpc2libGUnKSkge1xuICAgICAgICAgIC8vIFRvIGRldGVjdCBhIHRhYi93aW5kb3cgc3dpdGNoLCB3ZSBsb29rIGZvciBhIGJsdXIgZXZlbnQgZm9sbG93ZWRcbiAgICAgICAgICAvLyByYXBpZGx5IGJ5IGEgdmlzaWJpbGl0eSBjaGFuZ2UuXG4gICAgICAgICAgLy8gSWYgd2UgZG9uJ3Qgc2VlIGEgdmlzaWJpbGl0eSBjaGFuZ2Ugd2l0aGluIDEwMG1zLCBpdCdzIHByb2JhYmx5IGFcbiAgICAgICAgICAvLyByZWd1bGFyIGZvY3VzIGNoYW5nZS5cbiAgICAgICAgICBoYWRGb2N1c1Zpc2libGVSZWNlbnRseSA9IHRydWU7XG4gICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChoYWRGb2N1c1Zpc2libGVSZWNlbnRseVRpbWVvdXQpO1xuICAgICAgICAgIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5ID0gZmFsc2U7XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICByZW1vdmVGb2N1c1Zpc2libGVBdHRyaWJ1dGUoZS50YXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgdGhlIHVzZXIgY2hhbmdlcyB0YWJzLCBrZWVwIHRyYWNrIG9mIHdoZXRoZXIgb3Igbm90IHRoZSBwcmV2aW91c2x5XG4gICAgICAgKiBmb2N1c2VkIGVsZW1lbnQgaGFkIC5mb2N1cy12aXNpYmxlLlxuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBvblZpc2liaWxpdHlDaGFuZ2UoKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09ICdoaWRkZW4nKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIHRhYiBiZWNvbWVzIGFjdGl2ZSBhZ2FpbiwgdGhlIGJyb3dzZXIgd2lsbCBoYW5kbGUgY2FsbGluZyBmb2N1c1xuICAgICAgICAgIC8vIG9uIHRoZSBlbGVtZW50IChTYWZhcmkgYWN0dWFsbHkgY2FsbHMgaXQgdHdpY2UpLlxuICAgICAgICAgIC8vIElmIHRoaXMgdGFiIGNoYW5nZSBjYXVzZWQgYSBibHVyIG9uIGFuIGVsZW1lbnQgd2l0aCBmb2N1cy12aXNpYmxlLFxuICAgICAgICAgIC8vIHJlLWFwcGx5IHRoZSBjbGFzcyB3aGVuIHRoZSB1c2VyIHN3aXRjaGVzIGJhY2sgdG8gdGhlIHRhYi5cbiAgICAgICAgICBpZiAoaGFkRm9jdXNWaXNpYmxlUmVjZW50bHkpIHtcbiAgICAgICAgICAgIGhhZEtleWJvYXJkRXZlbnQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhZGRJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEFkZCBhIGdyb3VwIG9mIGxpc3RlbmVycyB0byBkZXRlY3QgdXNhZ2Ugb2YgYW55IHBvaW50aW5nIGRldmljZXMuXG4gICAgICAgKiBUaGVzZSBsaXN0ZW5lcnMgd2lsbCBiZSBhZGRlZCB3aGVuIHRoZSBwb2x5ZmlsbCBmaXJzdCBsb2FkcywgYW5kIGFueXRpbWVcbiAgICAgICAqIHRoZSB3aW5kb3cgaXMgYmx1cnJlZCwgc28gdGhhdCB0aGV5IGFyZSBhY3RpdmUgd2hlbiB0aGUgd2luZG93IHJlZ2FpbnNcbiAgICAgICAqIGZvY3VzLlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBhZGRJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVtb3ZlSW5pdGlhbFBvaW50ZXJNb3ZlTGlzdGVuZXJzKCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogV2hlbiB0aGUgcG9sZnlpbGwgZmlyc3QgbG9hZHMsIGFzc3VtZSB0aGUgdXNlciBpcyBpbiBrZXlib2FyZCBtb2RhbGl0eS5cbiAgICAgICAqIElmIGFueSBldmVudCBpcyByZWNlaXZlZCBmcm9tIGEgcG9pbnRpbmcgZGV2aWNlIChlLmcuIG1vdXNlLCBwb2ludGVyLFxuICAgICAgICogdG91Y2gpLCB0dXJuIG9mZiBrZXlib2FyZCBtb2RhbGl0eS5cbiAgICAgICAqIFRoaXMgYWNjb3VudHMgZm9yIHNpdHVhdGlvbnMgd2hlcmUgZm9jdXMgZW50ZXJzIHRoZSBwYWdlIGZyb20gdGhlIFVSTCBiYXIuXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKGUpIHtcbiAgICAgICAgLy8gV29yayBhcm91bmQgYSBTYWZhcmkgcXVpcmsgdGhhdCBmaXJlcyBhIG1vdXNlbW92ZSBvbiA8aHRtbD4gd2hlbmV2ZXIgdGhlXG4gICAgICAgIC8vIHdpbmRvdyBibHVycywgZXZlbiBpZiB5b3UncmUgdGFiYmluZyBvdXQgb2YgdGhlIHBhZ2UuIMKvXFxfKOODhClfL8KvXG4gICAgICAgIGlmIChlLnRhcmdldC5ub2RlTmFtZSAmJiBlLnRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaHRtbCcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBoYWRLZXlib2FyZEV2ZW50ID0gZmFsc2U7XG4gICAgICAgIHJlbW92ZUluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycygpO1xuICAgICAgfVxuXG4gICAgICAvLyBGb3Igc29tZSBraW5kcyBvZiBzdGF0ZSwgd2UgYXJlIGludGVyZXN0ZWQgaW4gY2hhbmdlcyBhdCB0aGUgZ2xvYmFsIHNjb3BlXG4gICAgICAvLyBvbmx5LiBGb3IgZXhhbXBsZSwgZ2xvYmFsIHBvaW50ZXIgaW5wdXQsIGdsb2JhbCBrZXkgcHJlc3NlcyBhbmQgZ2xvYmFsXG4gICAgICAvLyB2aXNpYmlsaXR5IGNoYW5nZSBzaG91bGQgYWZmZWN0IHRoZSBzdGF0ZSBhdCBldmVyeSBzY29wZTpcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleURvd24sIHRydWUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Qb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uUG9pbnRlckRvd24sIHRydWUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uUG9pbnRlckRvd24sIHRydWUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uVmlzaWJpbGl0eUNoYW5nZSwgdHJ1ZSk7XG5cbiAgICAgIGFkZEluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycygpO1xuXG4gICAgICAvLyBGb3IgZm9jdXMgYW5kIGJsdXIsIHdlIHNwZWNpZmljYWxseSBjYXJlIGFib3V0IHN0YXRlIGNoYW5nZXMgaW4gdGhlIGxvY2FsXG4gICAgICAvLyBzY29wZS4gVGhpcyBpcyBiZWNhdXNlIGZvY3VzIC8gYmx1ciBldmVudHMgdGhhdCBvcmlnaW5hdGUgZnJvbSB3aXRoaW4gYVxuICAgICAgLy8gc2hhZG93IHJvb3QgYXJlIG5vdCByZS1kaXNwYXRjaGVkIGZyb20gdGhlIGhvc3QgZWxlbWVudCBpZiBpdCB3YXMgYWxyZWFkeVxuICAgICAgLy8gdGhlIGFjdGl2ZSBlbGVtZW50IGluIGl0cyBvd24gc2NvcGU6XG4gICAgICBzY29wZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIG9uRm9jdXMsIHRydWUpO1xuICAgICAgc2NvcGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQmx1ciwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVhZHkoKSB7XG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIGNoZWNrIGZvciBuYXRpdmUgc3VwcG9ydDsgdGhpcyB3aWxsIHRocm93IGlmIHRoZSBzZWxlY3RvciBpcyBub3QgY29uc2lkZXJlZCB2YWxpZFxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpmb2N1cy12aXNpYmxlJyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyA6Zm9jdXMtdmlzaWJsZSBwc2V1ZG8tc2VsZWN0b3IgaXMgbm90IHN1cHBvcnRlZCBuYXRpdmVseVxuICAgICAgICAgIGFwcGx5Rm9jdXNWaXNpYmxlUG9seWZpbGwoZG9jdW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRXhwb3J0IG1vZHVsZVxuICAgIHJldHVybiB7cmVhZHl9O1xuICB9KVxuKTtcbiJdLCJuYW1lcyI6WyJXZWJmbG93IiwicmVxdWlyZSIsImRlZmluZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcHBseUZvY3VzVmlzaWJsZVBvbHlmaWxsIiwic2NvcGUiLCJoYWRLZXlib2FyZEV2ZW50IiwiaGFkRm9jdXNWaXNpYmxlUmVjZW50bHkiLCJoYWRGb2N1c1Zpc2libGVSZWNlbnRseVRpbWVvdXQiLCJpbnB1dFR5cGVzQWxsb3dsaXN0IiwidGV4dCIsInNlYXJjaCIsInVybCIsInRlbCIsImVtYWlsIiwicGFzc3dvcmQiLCJudW1iZXIiLCJkYXRlIiwibW9udGgiLCJ3ZWVrIiwidGltZSIsImRhdGV0aW1lIiwiaXNWYWxpZEZvY3VzVGFyZ2V0IiwiZWwiLCJkb2N1bWVudCIsIm5vZGVOYW1lIiwiY2xhc3NMaXN0IiwiZm9jdXNUcmlnZ2Vyc0tleWJvYXJkTW9kYWxpdHkiLCJ0eXBlIiwidGFnTmFtZSIsInJlYWRPbmx5IiwiaXNDb250ZW50RWRpdGFibGUiLCJhZGRGb2N1c1Zpc2libGVBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVGb2N1c1Zpc2libGVBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJvbktleURvd24iLCJlIiwibWV0YUtleSIsImFsdEtleSIsImN0cmxLZXkiLCJhY3RpdmVFbGVtZW50Iiwib25Qb2ludGVyRG93biIsIm9uRm9jdXMiLCJ0YXJnZXQiLCJvbkJsdXIiLCJoYXNBdHRyaWJ1dGUiLCJ3aW5kb3ciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwib25WaXNpYmlsaXR5Q2hhbmdlIiwidmlzaWJpbGl0eVN0YXRlIiwiYWRkSW5pdGlhbFBvaW50ZXJNb3ZlTGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uSW5pdGlhbFBvaW50ZXJNb3ZlIiwicmVtb3ZlSW5pdGlhbFBvaW50ZXJNb3ZlTGlzdGVuZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvTG93ZXJDYXNlIiwicmVhZHkiLCJxdWVyeVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEIsR0FFNUI7O0NBRUM7QUFFRCxJQUFJQSxVQUFVQyxRQUFRO0FBRXRCOztDQUVDLEdBQ0RELFFBQVFFLE1BQU0sQ0FDWixpQkFDQ0MsT0FBT0MsT0FBTyxHQUFHO0lBQ2hCOzs7Ozs7S0FNQyxHQUNELFNBQVNDLDBCQUEwQkMsS0FBSztRQUN0QyxJQUFJQyxtQkFBbUI7UUFDdkIsSUFBSUMsMEJBQTBCO1FBQzlCLElBQUlDLGlDQUFpQztRQUVyQyxJQUFJQyxzQkFBc0I7WUFDeEJDLE1BQU07WUFDTkMsUUFBUTtZQUNSQyxLQUFLO1lBQ0xDLEtBQUs7WUFDTEMsT0FBTztZQUNQQyxVQUFVO1lBQ1ZDLFFBQVE7WUFDUkMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxVQUFVO1lBQ1Ysa0JBQWtCO1FBQ3BCO1FBRUE7Ozs7T0FJQyxHQUNELFNBQVNDLG1CQUFtQkMsRUFBRTtZQUM1QixJQUNFQSxNQUNBQSxPQUFPQyxZQUNQRCxHQUFHRSxRQUFRLEtBQUssVUFDaEJGLEdBQUdFLFFBQVEsS0FBSyxVQUNoQixlQUFlRixNQUNmLGNBQWNBLEdBQUdHLFNBQVMsRUFDMUI7Z0JBQ0EsT0FBTztZQUNUO1lBQ0EsT0FBTztRQUNUO1FBRUE7Ozs7OztPQU1DLEdBQ0QsU0FBU0MsOEJBQThCSixFQUFFO1lBQ3ZDLElBQUlLLE9BQU9MLEdBQUdLLElBQUk7WUFDbEIsSUFBSUMsVUFBVU4sR0FBR00sT0FBTztZQUV4QixJQUFJQSxZQUFZLFdBQVdwQixtQkFBbUIsQ0FBQ21CLEtBQUssSUFBSSxDQUFDTCxHQUFHTyxRQUFRLEVBQUU7Z0JBQ3BFLE9BQU87WUFDVDtZQUVBLElBQUlELFlBQVksY0FBYyxDQUFDTixHQUFHTyxRQUFRLEVBQUU7Z0JBQzFDLE9BQU87WUFDVDtZQUVBLElBQUlQLEdBQUdRLGlCQUFpQixFQUFFO2dCQUN4QixPQUFPO1lBQ1Q7WUFFQSxPQUFPO1FBQ1Q7UUFFQSxTQUFTQyx5QkFBeUJULEVBQUU7WUFDbEMsSUFBSUEsR0FBR1UsWUFBWSxDQUFDLDBCQUEwQjtnQkFDNUM7WUFDRjtZQUNBVixHQUFHVyxZQUFZLENBQUMseUJBQXlCO1FBQzNDO1FBRUEsU0FBU0MsNEJBQTRCWixFQUFFO1lBQ3JDLElBQUksQ0FBQ0EsR0FBR1UsWUFBWSxDQUFDLDBCQUEwQjtnQkFDN0M7WUFDRjtZQUNBVixHQUFHYSxlQUFlLENBQUM7UUFDckI7UUFFQTs7Ozs7OztPQU9DLEdBQ0QsU0FBU0MsVUFBVUMsQ0FBQztZQUNsQixJQUFJQSxFQUFFQyxPQUFPLElBQUlELEVBQUVFLE1BQU0sSUFBSUYsRUFBRUcsT0FBTyxFQUFFO2dCQUN0QztZQUNGO1lBRUEsSUFBSW5CLG1CQUFtQmpCLE1BQU1xQyxhQUFhLEdBQUc7Z0JBQzNDVix5QkFBeUIzQixNQUFNcUMsYUFBYTtZQUM5QztZQUVBcEMsbUJBQW1CO1FBQ3JCO1FBRUE7Ozs7Ozs7T0FPQyxHQUNELFNBQVNxQztZQUNQckMsbUJBQW1CO1FBQ3JCO1FBRUE7Ozs7OztPQU1DLEdBQ0QsU0FBU3NDLFFBQVFOLENBQUM7WUFDaEIseURBQXlEO1lBQ3pELElBQUksQ0FBQ2hCLG1CQUFtQmdCLEVBQUVPLE1BQU0sR0FBRztnQkFDakM7WUFDRjtZQUVBLElBQUl2QyxvQkFBb0JxQiw4QkFBOEJXLEVBQUVPLE1BQU0sR0FBRztnQkFDL0RiLHlCQUF5Qk0sRUFBRU8sTUFBTTtZQUNuQztRQUNGO1FBRUE7OztPQUdDLEdBQ0QsU0FBU0MsT0FBT1IsQ0FBQztZQUNmLElBQUksQ0FBQ2hCLG1CQUFtQmdCLEVBQUVPLE1BQU0sR0FBRztnQkFDakM7WUFDRjtZQUVBLElBQUlQLEVBQUVPLE1BQU0sQ0FBQ0UsWUFBWSxDQUFDLDBCQUEwQjtnQkFDbEQsbUVBQW1FO2dCQUNuRSxrQ0FBa0M7Z0JBQ2xDLG9FQUFvRTtnQkFDcEUsd0JBQXdCO2dCQUN4QnhDLDBCQUEwQjtnQkFDMUJ5QyxPQUFPQyxZQUFZLENBQUN6QztnQkFDcEJBLGlDQUFpQ3dDLE9BQU9FLFVBQVUsQ0FBQztvQkFDakQzQywwQkFBMEI7Z0JBQzVCLEdBQUc7Z0JBQ0g0Qiw0QkFBNEJHLEVBQUVPLE1BQU07WUFDdEM7UUFDRjtRQUVBOzs7O09BSUMsR0FDRCxTQUFTTTtZQUNQLElBQUkzQixTQUFTNEIsZUFBZSxLQUFLLFVBQVU7Z0JBQ3pDLHlFQUF5RTtnQkFDekUsbURBQW1EO2dCQUNuRCxxRUFBcUU7Z0JBQ3JFLDZEQUE2RDtnQkFDN0QsSUFBSTdDLHlCQUF5QjtvQkFDM0JELG1CQUFtQjtnQkFDckI7Z0JBQ0ErQztZQUNGO1FBQ0Y7UUFFQTs7Ozs7T0FLQyxHQUNELFNBQVNBO1lBQ1A3QixTQUFTOEIsZ0JBQWdCLENBQUMsYUFBYUM7WUFDdkMvQixTQUFTOEIsZ0JBQWdCLENBQUMsYUFBYUM7WUFDdkMvQixTQUFTOEIsZ0JBQWdCLENBQUMsV0FBV0M7WUFDckMvQixTQUFTOEIsZ0JBQWdCLENBQUMsZUFBZUM7WUFDekMvQixTQUFTOEIsZ0JBQWdCLENBQUMsZUFBZUM7WUFDekMvQixTQUFTOEIsZ0JBQWdCLENBQUMsYUFBYUM7WUFDdkMvQixTQUFTOEIsZ0JBQWdCLENBQUMsYUFBYUM7WUFDdkMvQixTQUFTOEIsZ0JBQWdCLENBQUMsY0FBY0M7WUFDeEMvQixTQUFTOEIsZ0JBQWdCLENBQUMsWUFBWUM7UUFDeEM7UUFFQSxTQUFTQztZQUNQaEMsU0FBU2lDLG1CQUFtQixDQUFDLGFBQWFGO1lBQzFDL0IsU0FBU2lDLG1CQUFtQixDQUFDLGFBQWFGO1lBQzFDL0IsU0FBU2lDLG1CQUFtQixDQUFDLFdBQVdGO1lBQ3hDL0IsU0FBU2lDLG1CQUFtQixDQUFDLGVBQWVGO1lBQzVDL0IsU0FBU2lDLG1CQUFtQixDQUFDLGVBQWVGO1lBQzVDL0IsU0FBU2lDLG1CQUFtQixDQUFDLGFBQWFGO1lBQzFDL0IsU0FBU2lDLG1CQUFtQixDQUFDLGFBQWFGO1lBQzFDL0IsU0FBU2lDLG1CQUFtQixDQUFDLGNBQWNGO1lBQzNDL0IsU0FBU2lDLG1CQUFtQixDQUFDLFlBQVlGO1FBQzNDO1FBRUE7Ozs7OztPQU1DLEdBQ0QsU0FBU0EscUJBQXFCakIsQ0FBQztZQUM3QiwyRUFBMkU7WUFDM0Usa0VBQWtFO1lBQ2xFLElBQUlBLEVBQUVPLE1BQU0sQ0FBQ3BCLFFBQVEsSUFBSWEsRUFBRU8sTUFBTSxDQUFDcEIsUUFBUSxDQUFDaUMsV0FBVyxPQUFPLFFBQVE7Z0JBQ25FO1lBQ0Y7WUFFQXBELG1CQUFtQjtZQUNuQmtEO1FBQ0Y7UUFFQSw0RUFBNEU7UUFDNUUseUVBQXlFO1FBQ3pFLDREQUE0RDtRQUM1RGhDLFNBQVM4QixnQkFBZ0IsQ0FBQyxXQUFXakIsV0FBVztRQUNoRGIsU0FBUzhCLGdCQUFnQixDQUFDLGFBQWFYLGVBQWU7UUFDdERuQixTQUFTOEIsZ0JBQWdCLENBQUMsZUFBZVgsZUFBZTtRQUN4RG5CLFNBQVM4QixnQkFBZ0IsQ0FBQyxjQUFjWCxlQUFlO1FBQ3ZEbkIsU0FBUzhCLGdCQUFnQixDQUFDLG9CQUFvQkgsb0JBQW9CO1FBRWxFRTtRQUVBLDRFQUE0RTtRQUM1RSwwRUFBMEU7UUFDMUUsNEVBQTRFO1FBQzVFLHVDQUF1QztRQUN2Q2hELE1BQU1pRCxnQkFBZ0IsQ0FBQyxTQUFTVixTQUFTO1FBQ3pDdkMsTUFBTWlELGdCQUFnQixDQUFDLFFBQVFSLFFBQVE7SUFDekM7SUFFQSxTQUFTYTtRQUNQLElBQUksT0FBT25DLGFBQWEsYUFBYTtZQUNuQyxJQUFJO2dCQUNGLG9GQUFvRjtnQkFDcEZBLFNBQVNvQyxhQUFhLENBQUM7WUFDekIsRUFBRSxPQUFPdEIsR0FBRztnQkFDViwyREFBMkQ7Z0JBQzNEbEMsMEJBQTBCb0I7WUFDNUI7UUFDRjtJQUNGO0lBRUEsZ0JBQWdCO0lBQ2hCLE9BQU87UUFBQ21DO0lBQUs7QUFDZiJ9

}),
8334: (function (module, __unused_webpack_exports, __webpack_require__) {
/* globals document, MouseEvent */ /**
 * Webflow: focus
 */ 
var Webflow = __webpack_require__(3949);
/*
 * Safari has a weird bug where it doesn't support :focus for links with hrefs,
 * buttons, and input[type=button|submit], so we listen for mousedown events
 * instead and force the element to emit a focus event in those cases.

 * See these webkit bugs for reference:
 * https://bugs.webkit.org/show_bug.cgi?id=22261
 * https://bugs.webkit.org/show_bug.cgi?id=229895
 */ Webflow.define('focus', module.exports = function() {
    var capturedEvents = [];
    var capturing = false;
    function captureEvent(e) {
        if (capturing) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            capturedEvents.unshift(e);
        }
    }
    /*
     * The only mousedown events we care about here are ones emanating from
     * (A) anchor links with href attribute,
     * (B) non-disabled buttons,
     * (C) non-disabled textarea,
     * (D) non-disabled inputs of type "button", "reset", "checkbox", "radio", "submit"
     * (E) non-interactive elements (button, a, input, textarea, select) that have a tabindex with a numeric value
     * (F) audio elements
     * (G) video elements with controls attribute
     */ function isPolyfilledFocusEvent(e) {
        var el = e.target;
        var tag = el.tagName;
        return /^a$/i.test(tag) && el.href != null || // (A)
        /^(button|textarea)$/i.test(tag) && el.disabled !== true || // (B) (C)
        /^input$/i.test(tag) && /^(button|reset|submit|radio|checkbox)$/i.test(el.type) && !el.disabled || // (D)
        !/^(button|input|textarea|select|a)$/i.test(tag) && !Number.isNaN(Number.parseFloat(el.tabIndex)) || // (E)
        /^audio$/i.test(tag) || // (F)
        /^video$/i.test(tag) && el.controls === true // (G)
        ;
    }
    function handler(e) {
        if (isPolyfilledFocusEvent(e)) {
            // start capturing possible out-of-order mouse events
            capturing = true;
            /*
         * enqueue the focus event _after_ the current batch of events, which
         * includes any blur events. The correct order of events is:
         *
         * [this element] MOUSEDOWN               <-- this event
         * [previously active element] BLUR
         * [previously active element] FOCUSOUT
         * [this element] FOCUS                   <-- forced event
         * [this element] FOCUSIN                 <-- forced event
         * [this element] MOUSEUP                 <-- possibly captured event (it may have fired _before_ the FOCUS event)
         * [this element] CLICK                   <-- possibly captured event (it may have fired _before_ the FOCUS event)
         */ setTimeout(()=>{
                // stop capturing possible out-of-order mouse events
                capturing = false;
                // trigger focus event
                e.target.focus();
                // re-dispatch captured mouse events in order
                while(capturedEvents.length > 0){
                    var event = capturedEvents.pop();
                    event.target.dispatchEvent(new MouseEvent(event.type, event));
                }
            }, 0);
        }
    }
    function ready() {
        if (typeof document !== 'undefined' && document.body.hasAttribute('data-wf-focus-within') && Webflow.env.safari) {
            document.addEventListener('mousedown', handler, true);
            document.addEventListener('mouseup', captureEvent, true);
            document.addEventListener('click', captureEvent, true);
        }
    }
    // Export module
    return {
        ready
    };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3NoYXJlZC9yZW5kZXIvcGx1Z2lucy9CYXNlU2l0ZU1vZHVsZXMvd2ViZmxvdy1mb2N1cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWxzIGRvY3VtZW50LCBNb3VzZUV2ZW50ICovXG5cbi8qKlxuICogV2ViZmxvdzogZm9jdXNcbiAqL1xuXG52YXIgV2ViZmxvdyA9IHJlcXVpcmUoJy4vd2ViZmxvdy1saWInKTtcblxuLypcbiAqIFNhZmFyaSBoYXMgYSB3ZWlyZCBidWcgd2hlcmUgaXQgZG9lc24ndCBzdXBwb3J0IDpmb2N1cyBmb3IgbGlua3Mgd2l0aCBocmVmcyxcbiAqIGJ1dHRvbnMsIGFuZCBpbnB1dFt0eXBlPWJ1dHRvbnxzdWJtaXRdLCBzbyB3ZSBsaXN0ZW4gZm9yIG1vdXNlZG93biBldmVudHNcbiAqIGluc3RlYWQgYW5kIGZvcmNlIHRoZSBlbGVtZW50IHRvIGVtaXQgYSBmb2N1cyBldmVudCBpbiB0aG9zZSBjYXNlcy5cblxuICogU2VlIHRoZXNlIHdlYmtpdCBidWdzIGZvciByZWZlcmVuY2U6XG4gKiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjIyNjFcbiAqIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMjk4OTVcbiAqL1xuV2ViZmxvdy5kZWZpbmUoXG4gICdmb2N1cycsXG4gIChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2FwdHVyZWRFdmVudHMgPSBbXTtcbiAgICB2YXIgY2FwdHVyaW5nID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBjYXB0dXJlRXZlbnQoZSkge1xuICAgICAgaWYgKGNhcHR1cmluZykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNhcHR1cmVkRXZlbnRzLnVuc2hpZnQoZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBUaGUgb25seSBtb3VzZWRvd24gZXZlbnRzIHdlIGNhcmUgYWJvdXQgaGVyZSBhcmUgb25lcyBlbWFuYXRpbmcgZnJvbVxuICAgICAqIChBKSBhbmNob3IgbGlua3Mgd2l0aCBocmVmIGF0dHJpYnV0ZSxcbiAgICAgKiAoQikgbm9uLWRpc2FibGVkIGJ1dHRvbnMsXG4gICAgICogKEMpIG5vbi1kaXNhYmxlZCB0ZXh0YXJlYSxcbiAgICAgKiAoRCkgbm9uLWRpc2FibGVkIGlucHV0cyBvZiB0eXBlIFwiYnV0dG9uXCIsIFwicmVzZXRcIiwgXCJjaGVja2JveFwiLCBcInJhZGlvXCIsIFwic3VibWl0XCJcbiAgICAgKiAoRSkgbm9uLWludGVyYWN0aXZlIGVsZW1lbnRzIChidXR0b24sIGEsIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0KSB0aGF0IGhhdmUgYSB0YWJpbmRleCB3aXRoIGEgbnVtZXJpYyB2YWx1ZVxuICAgICAqIChGKSBhdWRpbyBlbGVtZW50c1xuICAgICAqIChHKSB2aWRlbyBlbGVtZW50cyB3aXRoIGNvbnRyb2xzIGF0dHJpYnV0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzUG9seWZpbGxlZEZvY3VzRXZlbnQoZSkge1xuICAgICAgdmFyIGVsID0gZS50YXJnZXQ7XG4gICAgICB2YXIgdGFnID0gZWwudGFnTmFtZTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICgvXmEkL2kudGVzdCh0YWcpICYmIGVsLmhyZWYgIT0gbnVsbCkgfHwgLy8gKEEpXG4gICAgICAgICgvXihidXR0b258dGV4dGFyZWEpJC9pLnRlc3QodGFnKSAmJiBlbC5kaXNhYmxlZCAhPT0gdHJ1ZSkgfHwgLy8gKEIpIChDKVxuICAgICAgICAoL15pbnB1dCQvaS50ZXN0KHRhZykgJiZcbiAgICAgICAgICAvXihidXR0b258cmVzZXR8c3VibWl0fHJhZGlvfGNoZWNrYm94KSQvaS50ZXN0KGVsLnR5cGUpICYmXG4gICAgICAgICAgIWVsLmRpc2FibGVkKSB8fCAvLyAoRClcbiAgICAgICAgKCEvXihidXR0b258aW5wdXR8dGV4dGFyZWF8c2VsZWN0fGEpJC9pLnRlc3QodGFnKSAmJlxuICAgICAgICAgICFOdW1iZXIuaXNOYU4oTnVtYmVyLnBhcnNlRmxvYXQoZWwudGFiSW5kZXgpKSkgfHwgLy8gKEUpXG4gICAgICAgIC9eYXVkaW8kL2kudGVzdCh0YWcpIHx8IC8vIChGKVxuICAgICAgICAoL152aWRlbyQvaS50ZXN0KHRhZykgJiYgZWwuY29udHJvbHMgPT09IHRydWUpIC8vIChHKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVyKGUpIHtcbiAgICAgIGlmIChpc1BvbHlmaWxsZWRGb2N1c0V2ZW50KGUpKSB7XG4gICAgICAgIC8vIHN0YXJ0IGNhcHR1cmluZyBwb3NzaWJsZSBvdXQtb2Ytb3JkZXIgbW91c2UgZXZlbnRzXG4gICAgICAgIGNhcHR1cmluZyA9IHRydWU7XG5cbiAgICAgICAgLypcbiAgICAgICAgICogZW5xdWV1ZSB0aGUgZm9jdXMgZXZlbnQgX2FmdGVyXyB0aGUgY3VycmVudCBiYXRjaCBvZiBldmVudHMsIHdoaWNoXG4gICAgICAgICAqIGluY2x1ZGVzIGFueSBibHVyIGV2ZW50cy4gVGhlIGNvcnJlY3Qgb3JkZXIgb2YgZXZlbnRzIGlzOlxuICAgICAgICAgKlxuICAgICAgICAgKiBbdGhpcyBlbGVtZW50XSBNT1VTRURPV04gICAgICAgICAgICAgICA8LS0gdGhpcyBldmVudFxuICAgICAgICAgKiBbcHJldmlvdXNseSBhY3RpdmUgZWxlbWVudF0gQkxVUlxuICAgICAgICAgKiBbcHJldmlvdXNseSBhY3RpdmUgZWxlbWVudF0gRk9DVVNPVVRcbiAgICAgICAgICogW3RoaXMgZWxlbWVudF0gRk9DVVMgICAgICAgICAgICAgICAgICAgPC0tIGZvcmNlZCBldmVudFxuICAgICAgICAgKiBbdGhpcyBlbGVtZW50XSBGT0NVU0lOICAgICAgICAgICAgICAgICA8LS0gZm9yY2VkIGV2ZW50XG4gICAgICAgICAqIFt0aGlzIGVsZW1lbnRdIE1PVVNFVVAgICAgICAgICAgICAgICAgIDwtLSBwb3NzaWJseSBjYXB0dXJlZCBldmVudCAoaXQgbWF5IGhhdmUgZmlyZWQgX2JlZm9yZV8gdGhlIEZPQ1VTIGV2ZW50KVxuICAgICAgICAgKiBbdGhpcyBlbGVtZW50XSBDTElDSyAgICAgICAgICAgICAgICAgICA8LS0gcG9zc2libHkgY2FwdHVyZWQgZXZlbnQgKGl0IG1heSBoYXZlIGZpcmVkIF9iZWZvcmVfIHRoZSBGT0NVUyBldmVudClcbiAgICAgICAgICovXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIC8vIHN0b3AgY2FwdHVyaW5nIHBvc3NpYmxlIG91dC1vZi1vcmRlciBtb3VzZSBldmVudHNcbiAgICAgICAgICBjYXB0dXJpbmcgPSBmYWxzZTtcblxuICAgICAgICAgIC8vIHRyaWdnZXIgZm9jdXMgZXZlbnRcbiAgICAgICAgICBlLnRhcmdldC5mb2N1cygpO1xuXG4gICAgICAgICAgLy8gcmUtZGlzcGF0Y2ggY2FwdHVyZWQgbW91c2UgZXZlbnRzIGluIG9yZGVyXG4gICAgICAgICAgd2hpbGUgKGNhcHR1cmVkRXZlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBldmVudCA9IGNhcHR1cmVkRXZlbnRzLnBvcCgpO1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoZXZlbnQudHlwZSwgZXZlbnQpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlYWR5KCkge1xuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIGRvY3VtZW50LmJvZHkuaGFzQXR0cmlidXRlKCdkYXRhLXdmLWZvY3VzLXdpdGhpbicpICYmXG4gICAgICAgIFdlYmZsb3cuZW52LnNhZmFyaVxuICAgICAgKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZXIsIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgY2FwdHVyZUV2ZW50LCB0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYXB0dXJlRXZlbnQsIHRydWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEV4cG9ydCBtb2R1bGVcbiAgICByZXR1cm4ge3JlYWR5fTtcbiAgfSlcbik7XG4iXSwibmFtZXMiOlsiV2ViZmxvdyIsInJlcXVpcmUiLCJkZWZpbmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2FwdHVyZWRFdmVudHMiLCJjYXB0dXJpbmciLCJjYXB0dXJlRXZlbnQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJ1bnNoaWZ0IiwiaXNQb2x5ZmlsbGVkRm9jdXNFdmVudCIsImVsIiwidGFyZ2V0IiwidGFnIiwidGFnTmFtZSIsInRlc3QiLCJocmVmIiwiZGlzYWJsZWQiLCJ0eXBlIiwiTnVtYmVyIiwiaXNOYU4iLCJwYXJzZUZsb2F0IiwidGFiSW5kZXgiLCJjb250cm9scyIsImhhbmRsZXIiLCJzZXRUaW1lb3V0IiwiZm9jdXMiLCJsZW5ndGgiLCJldmVudCIsInBvcCIsImRpc3BhdGNoRXZlbnQiLCJNb3VzZUV2ZW50IiwicmVhZHkiLCJkb2N1bWVudCIsImJvZHkiLCJoYXNBdHRyaWJ1dGUiLCJlbnYiLCJzYWZhcmkiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBZ0MsR0FFaEM7O0NBRUM7QUFFRCxJQUFJQSxVQUFVQyxRQUFRO0FBRXRCOzs7Ozs7OztDQVFDLEdBQ0RELFFBQVFFLE1BQU0sQ0FDWixTQUNDQyxPQUFPQyxPQUFPLEdBQUc7SUFDaEIsSUFBSUMsaUJBQWlCLEVBQUU7SUFDdkIsSUFBSUMsWUFBWTtJQUVoQixTQUFTQyxhQUFhQyxDQUFDO1FBQ3JCLElBQUlGLFdBQVc7WUFDYkUsRUFBRUMsY0FBYztZQUNoQkQsRUFBRUUsZUFBZTtZQUNqQkYsRUFBRUcsd0JBQXdCO1lBQzFCTixlQUFlTyxPQUFPLENBQUNKO1FBQ3pCO0lBQ0Y7SUFFQTs7Ozs7Ozs7O0tBU0MsR0FDRCxTQUFTSyx1QkFBdUJMLENBQUM7UUFDL0IsSUFBSU0sS0FBS04sRUFBRU8sTUFBTTtRQUNqQixJQUFJQyxNQUFNRixHQUFHRyxPQUFPO1FBQ3BCLE9BQ0UsQUFBQyxPQUFPQyxJQUFJLENBQUNGLFFBQVFGLEdBQUdLLElBQUksSUFBSSxRQUFTLE1BQU07UUFDOUMsdUJBQXVCRCxJQUFJLENBQUNGLFFBQVFGLEdBQUdNLFFBQVEsS0FBSyxRQUFTLFVBQVU7UUFDdkUsV0FBV0YsSUFBSSxDQUFDRixRQUNmLDBDQUEwQ0UsSUFBSSxDQUFDSixHQUFHTyxJQUFJLEtBQ3RELENBQUNQLEdBQUdNLFFBQVEsSUFBSyxNQUFNO1FBQ3hCLENBQUMsc0NBQXNDRixJQUFJLENBQUNGLFFBQzNDLENBQUNNLE9BQU9DLEtBQUssQ0FBQ0QsT0FBT0UsVUFBVSxDQUFDVixHQUFHVyxRQUFRLE1BQU8sTUFBTTtRQUMxRCxXQUFXUCxJQUFJLENBQUNGLFFBQVEsTUFBTTtRQUM3QixXQUFXRSxJQUFJLENBQUNGLFFBQVFGLEdBQUdZLFFBQVEsS0FBSyxLQUFNLE1BQU07O0lBRXpEO0lBRUEsU0FBU0MsUUFBUW5CLENBQUM7UUFDaEIsSUFBSUssdUJBQXVCTCxJQUFJO1lBQzdCLHFEQUFxRDtZQUNyREYsWUFBWTtZQUVaOzs7Ozs7Ozs7OztTQVdDLEdBQ0RzQixXQUFXO2dCQUNULG9EQUFvRDtnQkFDcER0QixZQUFZO2dCQUVaLHNCQUFzQjtnQkFDdEJFLEVBQUVPLE1BQU0sQ0FBQ2MsS0FBSztnQkFFZCw2Q0FBNkM7Z0JBQzdDLE1BQU94QixlQUFleUIsTUFBTSxHQUFHLEVBQUc7b0JBQ2hDLElBQUlDLFFBQVExQixlQUFlMkIsR0FBRztvQkFDOUJELE1BQU1oQixNQUFNLENBQUNrQixhQUFhLENBQUMsSUFBSUMsV0FBV0gsTUFBTVYsSUFBSSxFQUFFVTtnQkFDeEQ7WUFDRixHQUFHO1FBQ0w7SUFDRjtJQUVBLFNBQVNJO1FBQ1AsSUFDRSxPQUFPQyxhQUFhLGVBQ3BCQSxTQUFTQyxJQUFJLENBQUNDLFlBQVksQ0FBQywyQkFDM0J0QyxRQUFRdUMsR0FBRyxDQUFDQyxNQUFNLEVBQ2xCO1lBQ0FKLFNBQVNLLGdCQUFnQixDQUFDLGFBQWFkLFNBQVM7WUFDaERTLFNBQVNLLGdCQUFnQixDQUFDLFdBQVdsQyxjQUFjO1lBQ25ENkIsU0FBU0ssZ0JBQWdCLENBQUMsU0FBU2xDLGNBQWM7UUFDbkQ7SUFDRjtJQUVBLGdCQUFnQjtJQUNoQixPQUFPO1FBQUM0QjtJQUFLO0FBQ2YifQ==

}),
7199: (function (module) {
/* globals window */ /**
 * Webflow: IX Event triggers for other modules
 */ 
var $ = window.jQuery;
var api = {};
var eventQueue = [];
var namespace = '.w-ix';
var eventTriggers = {
    reset: function(i, el) {
        el.__wf_intro = null;
    },
    intro: function(i, el) {
        if (el.__wf_intro) {
            return;
        }
        el.__wf_intro = true;
        $(el).triggerHandler(api.types.INTRO);
    },
    outro: function(i, el) {
        if (!el.__wf_intro) {
            return;
        }
        el.__wf_intro = null;
        $(el).triggerHandler(api.types.OUTRO);
    }
};
api.triggers = {};
api.types = {
    INTRO: 'w-ix-intro' + namespace,
    OUTRO: 'w-ix-outro' + namespace
};
// Trigger any events in queue + restore trigger methods
api.init = function() {
    var count = eventQueue.length;
    for(var i = 0; i < count; i++){
        var memo = eventQueue[i];
        memo[0](0, memo[1]);
    }
    eventQueue = [];
    $.extend(api.triggers, eventTriggers);
};
// Replace all triggers with async wrapper to queue events until init
api.async = function() {
    for(var key in eventTriggers){
        var func = eventTriggers[key];
        if (!eventTriggers.hasOwnProperty(key)) {
            continue;
        }
        // Replace trigger method with async wrapper
        api.triggers[key] = function(i, el) {
            eventQueue.push([
                func,
                el
            ]);
        };
    }
};
// Default triggers to async queue
api.async();
module.exports = api;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3NoYXJlZC9yZW5kZXIvcGx1Z2lucy9CYXNlU2l0ZU1vZHVsZXMvd2ViZmxvdy1peC1ldmVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFscyB3aW5kb3cgKi9cblxuLyoqXG4gKiBXZWJmbG93OiBJWCBFdmVudCB0cmlnZ2VycyBmb3Igb3RoZXIgbW9kdWxlc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyICQgPSB3aW5kb3cualF1ZXJ5O1xudmFyIGFwaSA9IHt9O1xudmFyIGV2ZW50UXVldWUgPSBbXTtcbnZhciBuYW1lc3BhY2UgPSAnLnctaXgnO1xuXG52YXIgZXZlbnRUcmlnZ2VycyA9IHtcbiAgcmVzZXQ6IGZ1bmN0aW9uIChpLCBlbCkge1xuICAgIGVsLl9fd2ZfaW50cm8gPSBudWxsO1xuICB9LFxuICBpbnRybzogZnVuY3Rpb24gKGksIGVsKSB7XG4gICAgaWYgKGVsLl9fd2ZfaW50cm8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWwuX193Zl9pbnRybyA9IHRydWU7XG4gICAgJChlbCkudHJpZ2dlckhhbmRsZXIoYXBpLnR5cGVzLklOVFJPKTtcbiAgfSxcbiAgb3V0cm86IGZ1bmN0aW9uIChpLCBlbCkge1xuICAgIGlmICghZWwuX193Zl9pbnRybykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbC5fX3dmX2ludHJvID0gbnVsbDtcbiAgICAkKGVsKS50cmlnZ2VySGFuZGxlcihhcGkudHlwZXMuT1VUUk8pO1xuICB9LFxufTtcblxuYXBpLnRyaWdnZXJzID0ge307XG5cbmFwaS50eXBlcyA9IHtcbiAgSU5UUk86ICd3LWl4LWludHJvJyArIG5hbWVzcGFjZSxcbiAgT1VUUk86ICd3LWl4LW91dHJvJyArIG5hbWVzcGFjZSxcbn07XG5cbi8vIFRyaWdnZXIgYW55IGV2ZW50cyBpbiBxdWV1ZSArIHJlc3RvcmUgdHJpZ2dlciBtZXRob2RzXG5hcGkuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNvdW50ID0gZXZlbnRRdWV1ZS5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgIHZhciBtZW1vID0gZXZlbnRRdWV1ZVtpXTtcbiAgICBtZW1vWzBdKDAsIG1lbW9bMV0pO1xuICB9XG4gIGV2ZW50UXVldWUgPSBbXTtcbiAgJC5leHRlbmQoYXBpLnRyaWdnZXJzLCBldmVudFRyaWdnZXJzKTtcbn07XG5cbi8vIFJlcGxhY2UgYWxsIHRyaWdnZXJzIHdpdGggYXN5bmMgd3JhcHBlciB0byBxdWV1ZSBldmVudHMgdW50aWwgaW5pdFxuYXBpLmFzeW5jID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBrZXkgaW4gZXZlbnRUcmlnZ2Vycykge1xuICAgIHZhciBmdW5jID0gZXZlbnRUcmlnZ2Vyc1trZXldO1xuICAgIGlmICghZXZlbnRUcmlnZ2Vycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBSZXBsYWNlIHRyaWdnZXIgbWV0aG9kIHdpdGggYXN5bmMgd3JhcHBlclxuICAgIGFwaS50cmlnZ2Vyc1trZXldID0gZnVuY3Rpb24gKGksIGVsKSB7XG4gICAgICBldmVudFF1ZXVlLnB1c2goW2Z1bmMsIGVsXSk7XG4gICAgfTtcbiAgfVxufTtcblxuLy8gRGVmYXVsdCB0cmlnZ2VycyB0byBhc3luYyBxdWV1ZVxuYXBpLmFzeW5jKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXBpO1xuIl0sIm5hbWVzIjpbIiQiLCJ3aW5kb3ciLCJqUXVlcnkiLCJhcGkiLCJldmVudFF1ZXVlIiwibmFtZXNwYWNlIiwiZXZlbnRUcmlnZ2VycyIsInJlc2V0IiwiaSIsImVsIiwiX193Zl9pbnRybyIsImludHJvIiwidHJpZ2dlckhhbmRsZXIiLCJ0eXBlcyIsIklOVFJPIiwib3V0cm8iLCJPVVRSTyIsInRyaWdnZXJzIiwiaW5pdCIsImNvdW50IiwibGVuZ3RoIiwibWVtbyIsImV4dGVuZCIsImFzeW5jIiwia2V5IiwiZnVuYyIsImhhc093blByb3BlcnR5IiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQixHQUVsQjs7Q0FFQyxHQUVEO0FBRUEsSUFBSUEsSUFBSUMsT0FBT0MsTUFBTTtBQUNyQixJQUFJQyxNQUFNLENBQUM7QUFDWCxJQUFJQyxhQUFhLEVBQUU7QUFDbkIsSUFBSUMsWUFBWTtBQUVoQixJQUFJQyxnQkFBZ0I7SUFDbEJDLE9BQU8sU0FBVUMsQ0FBQyxFQUFFQyxFQUFFO1FBQ3BCQSxHQUFHQyxVQUFVLEdBQUc7SUFDbEI7SUFDQUMsT0FBTyxTQUFVSCxDQUFDLEVBQUVDLEVBQUU7UUFDcEIsSUFBSUEsR0FBR0MsVUFBVSxFQUFFO1lBQ2pCO1FBQ0Y7UUFDQUQsR0FBR0MsVUFBVSxHQUFHO1FBQ2hCVixFQUFFUyxJQUFJRyxjQUFjLENBQUNULElBQUlVLEtBQUssQ0FBQ0MsS0FBSztJQUN0QztJQUNBQyxPQUFPLFNBQVVQLENBQUMsRUFBRUMsRUFBRTtRQUNwQixJQUFJLENBQUNBLEdBQUdDLFVBQVUsRUFBRTtZQUNsQjtRQUNGO1FBQ0FELEdBQUdDLFVBQVUsR0FBRztRQUNoQlYsRUFBRVMsSUFBSUcsY0FBYyxDQUFDVCxJQUFJVSxLQUFLLENBQUNHLEtBQUs7SUFDdEM7QUFDRjtBQUVBYixJQUFJYyxRQUFRLEdBQUcsQ0FBQztBQUVoQmQsSUFBSVUsS0FBSyxHQUFHO0lBQ1ZDLE9BQU8sZUFBZVQ7SUFDdEJXLE9BQU8sZUFBZVg7QUFDeEI7QUFFQSx3REFBd0Q7QUFDeERGLElBQUllLElBQUksR0FBRztJQUNULElBQUlDLFFBQVFmLFdBQVdnQixNQUFNO0lBQzdCLElBQUssSUFBSVosSUFBSSxHQUFHQSxJQUFJVyxPQUFPWCxJQUFLO1FBQzlCLElBQUlhLE9BQU9qQixVQUFVLENBQUNJLEVBQUU7UUFDeEJhLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBR0EsSUFBSSxDQUFDLEVBQUU7SUFDcEI7SUFDQWpCLGFBQWEsRUFBRTtJQUNmSixFQUFFc0IsTUFBTSxDQUFDbkIsSUFBSWMsUUFBUSxFQUFFWDtBQUN6QjtBQUVBLHFFQUFxRTtBQUNyRUgsSUFBSW9CLEtBQUssR0FBRztJQUNWLElBQUssSUFBSUMsT0FBT2xCLGNBQWU7UUFDN0IsSUFBSW1CLE9BQU9uQixhQUFhLENBQUNrQixJQUFJO1FBQzdCLElBQUksQ0FBQ2xCLGNBQWNvQixjQUFjLENBQUNGLE1BQU07WUFDdEM7UUFDRjtRQUVBLDRDQUE0QztRQUM1Q3JCLElBQUljLFFBQVEsQ0FBQ08sSUFBSSxHQUFHLFNBQVVoQixDQUFDLEVBQUVDLEVBQUU7WUFDakNMLFdBQVd1QixJQUFJLENBQUM7Z0JBQUNGO2dCQUFNaEI7YUFBRztRQUM1QjtJQUNGO0FBQ0Y7QUFFQSxrQ0FBa0M7QUFDbENOLElBQUlvQixLQUFLO0FBRVRLLE9BQU9DLE9BQU8sR0FBRzFCIn0=

}),
5134: (function (module, __unused_webpack_exports, __webpack_require__) {
/* globals window, document */ 
var IXEvents = __webpack_require__(7199);
function dispatchCustomEvent(element, eventName, detail) {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, true, true, detail || null);
    element.dispatchEvent(event);
}
/**
 * Webflow: IX Event triggers for other modules
 */ var $ = window.jQuery;
var api = {};
var namespace = '.w-ix';
var eventTriggers = {
    reset: function(i, el) {
        IXEvents.triggers.reset(i, el);
    },
    intro: function(i, el) {
        IXEvents.triggers.intro(i, el);
        dispatchCustomEvent(el, 'COMPONENT_ACTIVE');
    },
    outro: function(i, el) {
        IXEvents.triggers.outro(i, el);
        dispatchCustomEvent(el, 'COMPONENT_INACTIVE');
    }
};
api.triggers = {};
api.types = {
    INTRO: 'w-ix-intro' + namespace,
    OUTRO: 'w-ix-outro' + namespace
};
$.extend(api.triggers, eventTriggers);
api.dispatchCustomEvent = dispatchCustomEvent;
module.exports = api;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3NoYXJlZC9yZW5kZXIvcGx1Z2lucy9CYXNlU2l0ZU1vZHVsZXMvd2ViZmxvdy1peDItZXZlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbHMgd2luZG93LCBkb2N1bWVudCAqL1xuXG4ndXNlIHN0cmljdCc7XG52YXIgSVhFdmVudHMgPSByZXF1aXJlKCcuL3dlYmZsb3ctaXgtZXZlbnRzJyk7XG5cbmZ1bmN0aW9uIGRpc3BhdGNoQ3VzdG9tRXZlbnQoZWxlbWVudCwgZXZlbnROYW1lLCBkZXRhaWwpIHtcbiAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gIGV2ZW50LmluaXRDdXN0b21FdmVudChldmVudE5hbWUsIHRydWUsIHRydWUsIGRldGFpbCB8fCBudWxsKTtcbiAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn1cblxuLyoqXG4gKiBXZWJmbG93OiBJWCBFdmVudCB0cmlnZ2VycyBmb3Igb3RoZXIgbW9kdWxlc1xuICovXG5cbnZhciAkID0gd2luZG93LmpRdWVyeTtcbnZhciBhcGkgPSB7fTtcbnZhciBuYW1lc3BhY2UgPSAnLnctaXgnO1xuXG52YXIgZXZlbnRUcmlnZ2VycyA9IHtcbiAgcmVzZXQ6IGZ1bmN0aW9uIChpLCBlbCkge1xuICAgIElYRXZlbnRzLnRyaWdnZXJzLnJlc2V0KGksIGVsKTtcbiAgfSxcbiAgaW50cm86IGZ1bmN0aW9uIChpLCBlbCkge1xuICAgIElYRXZlbnRzLnRyaWdnZXJzLmludHJvKGksIGVsKTtcbiAgICBkaXNwYXRjaEN1c3RvbUV2ZW50KGVsLCAnQ09NUE9ORU5UX0FDVElWRScpO1xuICB9LFxuICBvdXRybzogZnVuY3Rpb24gKGksIGVsKSB7XG4gICAgSVhFdmVudHMudHJpZ2dlcnMub3V0cm8oaSwgZWwpO1xuICAgIGRpc3BhdGNoQ3VzdG9tRXZlbnQoZWwsICdDT01QT05FTlRfSU5BQ1RJVkUnKTtcbiAgfSxcbn07XG5cbmFwaS50cmlnZ2VycyA9IHt9O1xuXG5hcGkudHlwZXMgPSB7XG4gIElOVFJPOiAndy1peC1pbnRybycgKyBuYW1lc3BhY2UsXG4gIE9VVFJPOiAndy1peC1vdXRybycgKyBuYW1lc3BhY2UsXG59O1xuXG4kLmV4dGVuZChhcGkudHJpZ2dlcnMsIGV2ZW50VHJpZ2dlcnMpO1xuXG5hcGkuZGlzcGF0Y2hDdXN0b21FdmVudCA9IGRpc3BhdGNoQ3VzdG9tRXZlbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gYXBpO1xuIl0sIm5hbWVzIjpbIklYRXZlbnRzIiwicmVxdWlyZSIsImRpc3BhdGNoQ3VzdG9tRXZlbnQiLCJlbGVtZW50IiwiZXZlbnROYW1lIiwiZGV0YWlsIiwiZXZlbnQiLCJkb2N1bWVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIiQiLCJ3aW5kb3ciLCJqUXVlcnkiLCJhcGkiLCJuYW1lc3BhY2UiLCJldmVudFRyaWdnZXJzIiwicmVzZXQiLCJpIiwiZWwiLCJ0cmlnZ2VycyIsImludHJvIiwib3V0cm8iLCJ0eXBlcyIsIklOVFJPIiwiT1VUUk8iLCJleHRlbmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEIsR0FFNUI7QUFDQSxJQUFJQSxXQUFXQyxRQUFRO0FBRXZCLFNBQVNDLG9CQUFvQkMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLE1BQU07SUFDckQsSUFBSUMsUUFBUUMsU0FBU0MsV0FBVyxDQUFDO0lBQ2pDRixNQUFNRyxlQUFlLENBQUNMLFdBQVcsTUFBTSxNQUFNQyxVQUFVO0lBQ3ZERixRQUFRTyxhQUFhLENBQUNKO0FBQ3hCO0FBRUE7O0NBRUMsR0FFRCxJQUFJSyxJQUFJQyxPQUFPQyxNQUFNO0FBQ3JCLElBQUlDLE1BQU0sQ0FBQztBQUNYLElBQUlDLFlBQVk7QUFFaEIsSUFBSUMsZ0JBQWdCO0lBQ2xCQyxPQUFPLFNBQVVDLENBQUMsRUFBRUMsRUFBRTtRQUNwQm5CLFNBQVNvQixRQUFRLENBQUNILEtBQUssQ0FBQ0MsR0FBR0M7SUFDN0I7SUFDQUUsT0FBTyxTQUFVSCxDQUFDLEVBQUVDLEVBQUU7UUFDcEJuQixTQUFTb0IsUUFBUSxDQUFDQyxLQUFLLENBQUNILEdBQUdDO1FBQzNCakIsb0JBQW9CaUIsSUFBSTtJQUMxQjtJQUNBRyxPQUFPLFNBQVVKLENBQUMsRUFBRUMsRUFBRTtRQUNwQm5CLFNBQVNvQixRQUFRLENBQUNFLEtBQUssQ0FBQ0osR0FBR0M7UUFDM0JqQixvQkFBb0JpQixJQUFJO0lBQzFCO0FBQ0Y7QUFFQUwsSUFBSU0sUUFBUSxHQUFHLENBQUM7QUFFaEJOLElBQUlTLEtBQUssR0FBRztJQUNWQyxPQUFPLGVBQWVUO0lBQ3RCVSxPQUFPLGVBQWVWO0FBQ3hCO0FBRUFKLEVBQUVlLE1BQU0sQ0FBQ1osSUFBSU0sUUFBUSxFQUFFSjtBQUV2QkYsSUFBSVosbUJBQW1CLEdBQUdBO0FBRTFCeUIsT0FBT0MsT0FBTyxHQUFHZCJ9

}),
3949: (function (module, __unused_webpack_exports, __webpack_require__) {
/* globals window, document, navigator, WEBFLOW_ENV_TEST */ /**
 * Webflow: Core site library
 */ 
var Webflow = {};
var modules = {};
var primary = [];
var secondary = window.Webflow || [];
var $ = window.jQuery;
var $win = $(window);
var $doc = $(document);
var isFunction = $.isFunction;
var _ = Webflow._ = __webpack_require__(5756);
var tram = Webflow.tram = __webpack_require__(5487) && $.tram;
var domready = false;
var destroyed = false;
tram.config.hideBackface = false;
tram.config.keepInherited = true;
/**
 * Webflow.define - Define a named module
 * @param  {string} name
 * @param  {function} factory
 * @param  {object} [options]
 * @return {object}
 */ Webflow.define = function(name, factory, options) {
    if (modules[name]) {
        unbindModule(modules[name]);
    }
    var instance = modules[name] = factory($, _, options) || {};
    bindModule(instance);
    return instance;
};
/**
 * Webflow.require - Require a named module
 * @param  {string} name
 * @return {object}
 */ Webflow.require = function(name) {
    return modules[name];
};
function bindModule(module1) {
    // If running in Webflow app, subscribe to design/preview events
    if (Webflow.env()) {
        isFunction(module1.design) && $win.on('__wf_design', module1.design);
        isFunction(module1.preview) && $win.on('__wf_preview', module1.preview);
    }
    // Subscribe to front-end destroy event
    isFunction(module1.destroy) && $win.on('__wf_destroy', module1.destroy);
    // Look for ready method on module
    if (module1.ready && isFunction(module1.ready)) {
        addReady(module1);
    }
}
function addReady(module1) {
    // If domready has already happened, run ready method
    if (domready) {
        module1.ready();
        return;
    }
    // Otherwise add ready method to the primary queue (only once)
    if (_.contains(primary, module1.ready)) {
        return;
    }
    primary.push(module1.ready);
}
function unbindModule(module1) {
    // Unsubscribe module from window events
    isFunction(module1.design) && $win.off('__wf_design', module1.design);
    isFunction(module1.preview) && $win.off('__wf_preview', module1.preview);
    isFunction(module1.destroy) && $win.off('__wf_destroy', module1.destroy);
    // Remove ready method from primary queue
    if (module1.ready && isFunction(module1.ready)) {
        removeReady(module1);
    }
}
function removeReady(module1) {
    primary = _.filter(primary, function(readyFn) {
        return readyFn !== module1.ready;
    });
}
/**
 * Webflow.push - Add a ready handler into secondary queue
 * @param {function} ready  Callback to invoke on domready
 */ Webflow.push = function(ready) {
    // If domready has already happened, invoke handler
    if (domready) {
        isFunction(ready) && ready();
        return;
    }
    // Otherwise push into secondary queue
    secondary.push(ready);
};
/**
 * Webflow.env - Get the state of the Webflow app
 * @param {string} mode [optional]
 * @return {boolean}
 */ Webflow.env = function(mode) {
    var designFlag = window.__wf_design;
    var inApp = typeof designFlag !== 'undefined';
    if (!mode) {
        return inApp;
    }
    if (mode === 'design') {
        return inApp && designFlag;
    }
    if (mode === 'preview') {
        return inApp && !designFlag;
    }
    if (mode === 'slug') {
        return inApp && window.__wf_slug;
    }
    if (mode === 'editor') {
        return window.WebflowEditor;
    }
    if (mode === 'test') {
        return  false || window.__wf_test;
    }
    if (mode === 'frame') {
        return window !== window.top;
    }
};
// Feature detects + browser sniffs  ಠ_ಠ
var userAgent = navigator.userAgent.toLowerCase();
var touch = Webflow.env.touch = 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch;
var chrome = Webflow.env.chrome = /chrome/.test(userAgent) && /Google/.test(navigator.vendor) && parseInt(userAgent.match(/chrome\/(\d+)\./)[1], 10);
var ios = Webflow.env.ios = /(ipod|iphone|ipad)/.test(userAgent);
Webflow.env.safari = /safari/.test(userAgent) && !chrome && !ios;
// Maintain current touch target to prevent late clicks on touch devices
var touchTarget;
// Listen for both events to support touch/mouse hybrid devices
touch && $doc.on('touchstart mousedown', function(evt) {
    touchTarget = evt.target;
});
/**
 * Webflow.validClick - validate click target against current touch target
 * @param  {HTMLElement} clickTarget  Element being clicked
 * @return {Boolean}  True if click target is valid (always true on non-touch)
 */ Webflow.validClick = touch ? function(clickTarget) {
    return clickTarget === touchTarget || $.contains(clickTarget, touchTarget);
} : function() {
    return true;
};
/**
 * Webflow.resize, Webflow.scroll - throttled event proxies
 */ var resizeEvents = 'resize.webflow orientationchange.webflow load.webflow';
var scrollEvents = 'scroll.webflow ' + resizeEvents;
Webflow.resize = eventProxy($win, resizeEvents);
Webflow.scroll = eventProxy($win, scrollEvents);
Webflow.redraw = eventProxy();
// Create a proxy instance for throttled events
function eventProxy(target, types) {
    // Set up throttled method (using custom frame-based _.throttle)
    var handlers = [];
    var proxy = {};
    proxy.up = _.throttle(function(evt) {
        _.each(handlers, function(h) {
            h(evt);
        });
    });
    // Bind events to target
    if (target && types) {
        target.on(types, proxy.up);
    }
    /**
   * Add an event handler
   * @param  {function} handler
   */ proxy.on = function(handler) {
        if (typeof handler !== 'function') {
            return;
        }
        if (_.contains(handlers, handler)) {
            return;
        }
        handlers.push(handler);
    };
    /**
   * Remove an event handler
   * @param  {function} handler
   */ proxy.off = function(handler) {
        // If no arguments supplied, clear all handlers
        if (!arguments.length) {
            handlers = [];
            return;
        }
        // Otherwise, remove handler from the list
        handlers = _.filter(handlers, function(h) {
            return h !== handler;
        });
    };
    return proxy;
}
// Webflow.location - Wrap window.location in api
Webflow.location = function(url) {
    window.location = url;
};
if (Webflow.env()) {
    // Ignore redirects inside a Webflow design/edit environment
    Webflow.location = function() {};
}
// Webflow.ready - Call primary and secondary handlers
Webflow.ready = function() {
    domready = true;
    // Restore modules after destroy
    if (destroyed) {
        restoreModules();
    // Otherwise run primary ready methods
    } else {
        _.each(primary, callReady);
    }
    // Run secondary ready methods
    _.each(secondary, callReady);
    // Trigger resize
    Webflow.resize.up();
};
function callReady(readyFn) {
    isFunction(readyFn) && readyFn();
}
function restoreModules() {
    destroyed = false;
    _.each(modules, bindModule);
}
/**
 * Webflow.load - Add a window load handler that will run even if load event has already happened
 * @param  {function} handler
 */ var deferLoad;
Webflow.load = function(handler) {
    deferLoad.then(handler);
};
function bindLoad() {
    // Reject any previous deferred (to support destroy)
    if (deferLoad) {
        deferLoad.reject();
        $win.off('load', deferLoad.resolve);
    }
    // Create deferred and bind window load event
    deferLoad = new $.Deferred();
    $win.on('load', deferLoad.resolve);
}
// Webflow.destroy - Trigger a destroy event for all modules
Webflow.destroy = function(options) {
    options = options || {};
    destroyed = true;
    $win.triggerHandler('__wf_destroy');
    // Allow domready reset for tests
    if (options.domready != null) {
        domready = options.domready;
    }
    // Unbind modules
    _.each(modules, unbindModule);
    // Clear any proxy event handlers
    Webflow.resize.off();
    Webflow.scroll.off();
    Webflow.redraw.off();
    // Clear any queued ready methods
    primary = [];
    secondary = [];
    // If load event has not yet fired, replace the deferred
    if (deferLoad.state() === 'pending') {
        bindLoad();
    }
};
// Listen for domready
$(Webflow.ready);
// Listen for window.onload and resolve deferred
bindLoad();
// Export commonjs module
module.exports = window.Webflow = Webflow;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3NoYXJlZC9yZW5kZXIvcGx1Z2lucy9CYXNlU2l0ZU1vZHVsZXMvd2ViZmxvdy1saWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFscyB3aW5kb3csIGRvY3VtZW50LCBuYXZpZ2F0b3IsIFdFQkZMT1dfRU5WX1RFU1QgKi9cblxuLyoqXG4gKiBXZWJmbG93OiBDb3JlIHNpdGUgbGlicmFyeVxuICovXG52YXIgV2ViZmxvdyA9IHt9O1xudmFyIG1vZHVsZXMgPSB7fTtcbnZhciBwcmltYXJ5ID0gW107XG52YXIgc2Vjb25kYXJ5ID0gd2luZG93LldlYmZsb3cgfHwgW107XG52YXIgJCA9IHdpbmRvdy5qUXVlcnk7XG52YXIgJHdpbiA9ICQod2luZG93KTtcbnZhciAkZG9jID0gJChkb2N1bWVudCk7XG52YXIgaXNGdW5jdGlvbiA9ICQuaXNGdW5jdGlvbjtcbnZhciBfID0gKFdlYmZsb3cuXyA9IHJlcXVpcmUoJy4vdW5kZXJzY29yZS1jdXN0b20nKSk7XG52YXIgdHJhbSA9IChXZWJmbG93LnRyYW0gPSByZXF1aXJlKCcuL3RyYW0tbWluJykgJiYgJC50cmFtKTtcbnZhciBkb21yZWFkeSA9IGZhbHNlO1xudmFyIGRlc3Ryb3llZCA9IGZhbHNlO1xuXG50cmFtLmNvbmZpZy5oaWRlQmFja2ZhY2UgPSBmYWxzZTtcbnRyYW0uY29uZmlnLmtlZXBJbmhlcml0ZWQgPSB0cnVlO1xuXG4vKipcbiAqIFdlYmZsb3cuZGVmaW5lIC0gRGVmaW5lIGEgbmFtZWQgbW9kdWxlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBmYWN0b3J5XG4gKiBAcGFyYW0gIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5XZWJmbG93LmRlZmluZSA9IGZ1bmN0aW9uIChuYW1lLCBmYWN0b3J5LCBvcHRpb25zKSB7XG4gIGlmIChtb2R1bGVzW25hbWVdKSB7XG4gICAgdW5iaW5kTW9kdWxlKG1vZHVsZXNbbmFtZV0pO1xuICB9XG4gIHZhciBpbnN0YW5jZSA9IChtb2R1bGVzW25hbWVdID0gZmFjdG9yeSgkLCBfLCBvcHRpb25zKSB8fCB7fSk7XG4gIGJpbmRNb2R1bGUoaW5zdGFuY2UpO1xuICByZXR1cm4gaW5zdGFuY2U7XG59O1xuXG4vKipcbiAqIFdlYmZsb3cucmVxdWlyZSAtIFJlcXVpcmUgYSBuYW1lZCBtb2R1bGVcbiAqIEBwYXJhbSAge3N0cmluZ30gbmFtZVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5XZWJmbG93LnJlcXVpcmUgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gbW9kdWxlc1tuYW1lXTtcbn07XG5cbmZ1bmN0aW9uIGJpbmRNb2R1bGUobW9kdWxlKSB7XG4gIC8vIElmIHJ1bm5pbmcgaW4gV2ViZmxvdyBhcHAsIHN1YnNjcmliZSB0byBkZXNpZ24vcHJldmlldyBldmVudHNcbiAgaWYgKFdlYmZsb3cuZW52KCkpIHtcbiAgICBpc0Z1bmN0aW9uKG1vZHVsZS5kZXNpZ24pICYmICR3aW4ub24oJ19fd2ZfZGVzaWduJywgbW9kdWxlLmRlc2lnbik7XG4gICAgaXNGdW5jdGlvbihtb2R1bGUucHJldmlldykgJiYgJHdpbi5vbignX193Zl9wcmV2aWV3JywgbW9kdWxlLnByZXZpZXcpO1xuICB9XG4gIC8vIFN1YnNjcmliZSB0byBmcm9udC1lbmQgZGVzdHJveSBldmVudFxuICBpc0Z1bmN0aW9uKG1vZHVsZS5kZXN0cm95KSAmJiAkd2luLm9uKCdfX3dmX2Rlc3Ryb3knLCBtb2R1bGUuZGVzdHJveSk7XG4gIC8vIExvb2sgZm9yIHJlYWR5IG1ldGhvZCBvbiBtb2R1bGVcbiAgaWYgKG1vZHVsZS5yZWFkeSAmJiBpc0Z1bmN0aW9uKG1vZHVsZS5yZWFkeSkpIHtcbiAgICBhZGRSZWFkeShtb2R1bGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFJlYWR5KG1vZHVsZSkge1xuICAvLyBJZiBkb21yZWFkeSBoYXMgYWxyZWFkeSBoYXBwZW5lZCwgcnVuIHJlYWR5IG1ldGhvZFxuICBpZiAoZG9tcmVhZHkpIHtcbiAgICBtb2R1bGUucmVhZHkoKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gT3RoZXJ3aXNlIGFkZCByZWFkeSBtZXRob2QgdG8gdGhlIHByaW1hcnkgcXVldWUgKG9ubHkgb25jZSlcbiAgaWYgKF8uY29udGFpbnMocHJpbWFyeSwgbW9kdWxlLnJlYWR5KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBwcmltYXJ5LnB1c2gobW9kdWxlLnJlYWR5KTtcbn1cblxuZnVuY3Rpb24gdW5iaW5kTW9kdWxlKG1vZHVsZSkge1xuICAvLyBVbnN1YnNjcmliZSBtb2R1bGUgZnJvbSB3aW5kb3cgZXZlbnRzXG4gIGlzRnVuY3Rpb24obW9kdWxlLmRlc2lnbikgJiYgJHdpbi5vZmYoJ19fd2ZfZGVzaWduJywgbW9kdWxlLmRlc2lnbik7XG4gIGlzRnVuY3Rpb24obW9kdWxlLnByZXZpZXcpICYmICR3aW4ub2ZmKCdfX3dmX3ByZXZpZXcnLCBtb2R1bGUucHJldmlldyk7XG4gIGlzRnVuY3Rpb24obW9kdWxlLmRlc3Ryb3kpICYmICR3aW4ub2ZmKCdfX3dmX2Rlc3Ryb3knLCBtb2R1bGUuZGVzdHJveSk7XG4gIC8vIFJlbW92ZSByZWFkeSBtZXRob2QgZnJvbSBwcmltYXJ5IHF1ZXVlXG4gIGlmIChtb2R1bGUucmVhZHkgJiYgaXNGdW5jdGlvbihtb2R1bGUucmVhZHkpKSB7XG4gICAgcmVtb3ZlUmVhZHkobW9kdWxlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVSZWFkeShtb2R1bGUpIHtcbiAgcHJpbWFyeSA9IF8uZmlsdGVyKHByaW1hcnksIGZ1bmN0aW9uIChyZWFkeUZuKSB7XG4gICAgcmV0dXJuIHJlYWR5Rm4gIT09IG1vZHVsZS5yZWFkeTtcbiAgfSk7XG59XG5cbi8qKlxuICogV2ViZmxvdy5wdXNoIC0gQWRkIGEgcmVhZHkgaGFuZGxlciBpbnRvIHNlY29uZGFyeSBxdWV1ZVxuICogQHBhcmFtIHtmdW5jdGlvbn0gcmVhZHkgIENhbGxiYWNrIHRvIGludm9rZSBvbiBkb21yZWFkeVxuICovXG5XZWJmbG93LnB1c2ggPSBmdW5jdGlvbiAocmVhZHkpIHtcbiAgLy8gSWYgZG9tcmVhZHkgaGFzIGFscmVhZHkgaGFwcGVuZWQsIGludm9rZSBoYW5kbGVyXG4gIGlmIChkb21yZWFkeSkge1xuICAgIGlzRnVuY3Rpb24ocmVhZHkpICYmIHJlYWR5KCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIE90aGVyd2lzZSBwdXNoIGludG8gc2Vjb25kYXJ5IHF1ZXVlXG4gIHNlY29uZGFyeS5wdXNoKHJlYWR5KTtcbn07XG5cbi8qKlxuICogV2ViZmxvdy5lbnYgLSBHZXQgdGhlIHN0YXRlIG9mIHRoZSBXZWJmbG93IGFwcFxuICogQHBhcmFtIHtzdHJpbmd9IG1vZGUgW29wdGlvbmFsXVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuV2ViZmxvdy5lbnYgPSBmdW5jdGlvbiAobW9kZSkge1xuICB2YXIgZGVzaWduRmxhZyA9IHdpbmRvdy5fX3dmX2Rlc2lnbjtcbiAgdmFyIGluQXBwID0gdHlwZW9mIGRlc2lnbkZsYWcgIT09ICd1bmRlZmluZWQnO1xuICBpZiAoIW1vZGUpIHtcbiAgICByZXR1cm4gaW5BcHA7XG4gIH1cbiAgaWYgKG1vZGUgPT09ICdkZXNpZ24nKSB7XG4gICAgcmV0dXJuIGluQXBwICYmIGRlc2lnbkZsYWc7XG4gIH1cbiAgaWYgKG1vZGUgPT09ICdwcmV2aWV3Jykge1xuICAgIHJldHVybiBpbkFwcCAmJiAhZGVzaWduRmxhZztcbiAgfVxuICBpZiAobW9kZSA9PT0gJ3NsdWcnKSB7XG4gICAgcmV0dXJuIGluQXBwICYmIHdpbmRvdy5fX3dmX3NsdWc7XG4gIH1cbiAgaWYgKG1vZGUgPT09ICdlZGl0b3InKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5XZWJmbG93RWRpdG9yO1xuICB9XG4gIGlmIChtb2RlID09PSAndGVzdCcpIHtcbiAgICByZXR1cm4gV0VCRkxPV19FTlZfVEVTVCB8fCB3aW5kb3cuX193Zl90ZXN0O1xuICB9XG4gIGlmIChtb2RlID09PSAnZnJhbWUnKSB7XG4gICAgcmV0dXJuIHdpbmRvdyAhPT0gd2luZG93LnRvcDtcbiAgfVxufTtcblxuLy8gRmVhdHVyZSBkZXRlY3RzICsgYnJvd3NlciBzbmlmZnMgIOCyoF/gsqBcblxudmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbnZhciB0b3VjaCA9IChXZWJmbG93LmVudi50b3VjaCA9XG4gICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fFxuICAod2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuRG9jdW1lbnRUb3VjaCkpO1xudmFyIGNocm9tZSA9IChXZWJmbG93LmVudi5jaHJvbWUgPVxuICAvY2hyb21lLy50ZXN0KHVzZXJBZ2VudCkgJiZcbiAgL0dvb2dsZS8udGVzdChuYXZpZ2F0b3IudmVuZG9yKSAmJlxuICBwYXJzZUludCh1c2VyQWdlbnQubWF0Y2goL2Nocm9tZVxcLyhcXGQrKVxcLi8pWzFdLCAxMCkpO1xudmFyIGlvcyA9IChXZWJmbG93LmVudi5pb3MgPSAvKGlwb2R8aXBob25lfGlwYWQpLy50ZXN0KHVzZXJBZ2VudCkpO1xuV2ViZmxvdy5lbnYuc2FmYXJpID0gL3NhZmFyaS8udGVzdCh1c2VyQWdlbnQpICYmICFjaHJvbWUgJiYgIWlvcztcblxuLy8gTWFpbnRhaW4gY3VycmVudCB0b3VjaCB0YXJnZXQgdG8gcHJldmVudCBsYXRlIGNsaWNrcyBvbiB0b3VjaCBkZXZpY2VzXG52YXIgdG91Y2hUYXJnZXQ7XG4vLyBMaXN0ZW4gZm9yIGJvdGggZXZlbnRzIHRvIHN1cHBvcnQgdG91Y2gvbW91c2UgaHlicmlkIGRldmljZXNcbnRvdWNoICYmXG4gICRkb2Mub24oJ3RvdWNoc3RhcnQgbW91c2Vkb3duJywgZnVuY3Rpb24gKGV2dCkge1xuICAgIHRvdWNoVGFyZ2V0ID0gZXZ0LnRhcmdldDtcbiAgfSk7XG5cbi8qKlxuICogV2ViZmxvdy52YWxpZENsaWNrIC0gdmFsaWRhdGUgY2xpY2sgdGFyZ2V0IGFnYWluc3QgY3VycmVudCB0b3VjaCB0YXJnZXRcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBjbGlja1RhcmdldCAgRWxlbWVudCBiZWluZyBjbGlja2VkXG4gKiBAcmV0dXJuIHtCb29sZWFufSAgVHJ1ZSBpZiBjbGljayB0YXJnZXQgaXMgdmFsaWQgKGFsd2F5cyB0cnVlIG9uIG5vbi10b3VjaClcbiAqL1xuV2ViZmxvdy52YWxpZENsaWNrID0gdG91Y2hcbiAgPyBmdW5jdGlvbiAoY2xpY2tUYXJnZXQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGNsaWNrVGFyZ2V0ID09PSB0b3VjaFRhcmdldCB8fCAkLmNvbnRhaW5zKGNsaWNrVGFyZ2V0LCB0b3VjaFRhcmdldClcbiAgICAgICk7XG4gICAgfVxuICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbi8qKlxuICogV2ViZmxvdy5yZXNpemUsIFdlYmZsb3cuc2Nyb2xsIC0gdGhyb3R0bGVkIGV2ZW50IHByb3hpZXNcbiAqL1xuXG52YXIgcmVzaXplRXZlbnRzID0gJ3Jlc2l6ZS53ZWJmbG93IG9yaWVudGF0aW9uY2hhbmdlLndlYmZsb3cgbG9hZC53ZWJmbG93JztcbnZhciBzY3JvbGxFdmVudHMgPSAnc2Nyb2xsLndlYmZsb3cgJyArIHJlc2l6ZUV2ZW50cztcbldlYmZsb3cucmVzaXplID0gZXZlbnRQcm94eSgkd2luLCByZXNpemVFdmVudHMpO1xuV2ViZmxvdy5zY3JvbGwgPSBldmVudFByb3h5KCR3aW4sIHNjcm9sbEV2ZW50cyk7XG5XZWJmbG93LnJlZHJhdyA9IGV2ZW50UHJveHkoKTtcblxuLy8gQ3JlYXRlIGEgcHJveHkgaW5zdGFuY2UgZm9yIHRocm90dGxlZCBldmVudHNcbmZ1bmN0aW9uIGV2ZW50UHJveHkodGFyZ2V0LCB0eXBlcykge1xuICAvLyBTZXQgdXAgdGhyb3R0bGVkIG1ldGhvZCAodXNpbmcgY3VzdG9tIGZyYW1lLWJhc2VkIF8udGhyb3R0bGUpXG5cbiAgdmFyIGhhbmRsZXJzID0gW107XG4gIHZhciBwcm94eSA9IHt9O1xuICBwcm94eS51cCA9IF8udGhyb3R0bGUoZnVuY3Rpb24gKGV2dCkge1xuICAgIF8uZWFjaChoYW5kbGVycywgZnVuY3Rpb24gKGgpIHtcbiAgICAgIGgoZXZ0KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gQmluZCBldmVudHMgdG8gdGFyZ2V0XG4gIGlmICh0YXJnZXQgJiYgdHlwZXMpIHtcbiAgICB0YXJnZXQub24odHlwZXMsIHByb3h5LnVwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYW4gZXZlbnQgaGFuZGxlclxuICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgcHJveHkub24gPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoXy5jb250YWlucyhoYW5kbGVycywgaGFuZGxlcikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIGFuIGV2ZW50IGhhbmRsZXJcbiAgICogQHBhcmFtICB7ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHByb3h5Lm9mZiA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgLy8gSWYgbm8gYXJndW1lbnRzIHN1cHBsaWVkLCBjbGVhciBhbGwgaGFuZGxlcnNcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIGhhbmRsZXJzID0gW107XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSwgcmVtb3ZlIGhhbmRsZXIgZnJvbSB0aGUgbGlzdFxuICAgIGhhbmRsZXJzID0gXy5maWx0ZXIoaGFuZGxlcnMsIGZ1bmN0aW9uIChoKSB7XG4gICAgICByZXR1cm4gaCAhPT0gaGFuZGxlcjtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gcHJveHk7XG59XG5cbi8vIFdlYmZsb3cubG9jYXRpb24gLSBXcmFwIHdpbmRvdy5sb2NhdGlvbiBpbiBhcGlcbldlYmZsb3cubG9jYXRpb24gPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcbn07XG5cbmlmIChXZWJmbG93LmVudigpKSB7XG4gIC8vIElnbm9yZSByZWRpcmVjdHMgaW5zaWRlIGEgV2ViZmxvdyBkZXNpZ24vZWRpdCBlbnZpcm9ubWVudFxuICBXZWJmbG93LmxvY2F0aW9uID0gZnVuY3Rpb24gKCkge307XG59XG5cbi8vIFdlYmZsb3cucmVhZHkgLSBDYWxsIHByaW1hcnkgYW5kIHNlY29uZGFyeSBoYW5kbGVyc1xuV2ViZmxvdy5yZWFkeSA9IGZ1bmN0aW9uICgpIHtcbiAgZG9tcmVhZHkgPSB0cnVlO1xuXG4gIC8vIFJlc3RvcmUgbW9kdWxlcyBhZnRlciBkZXN0cm95XG4gIGlmIChkZXN0cm95ZWQpIHtcbiAgICByZXN0b3JlTW9kdWxlcygpO1xuXG4gICAgLy8gT3RoZXJ3aXNlIHJ1biBwcmltYXJ5IHJlYWR5IG1ldGhvZHNcbiAgfSBlbHNlIHtcbiAgICBfLmVhY2gocHJpbWFyeSwgY2FsbFJlYWR5KTtcbiAgfVxuXG4gIC8vIFJ1biBzZWNvbmRhcnkgcmVhZHkgbWV0aG9kc1xuICBfLmVhY2goc2Vjb25kYXJ5LCBjYWxsUmVhZHkpO1xuXG4gIC8vIFRyaWdnZXIgcmVzaXplXG4gIFdlYmZsb3cucmVzaXplLnVwKCk7XG59O1xuXG5mdW5jdGlvbiBjYWxsUmVhZHkocmVhZHlGbikge1xuICBpc0Z1bmN0aW9uKHJlYWR5Rm4pICYmIHJlYWR5Rm4oKTtcbn1cblxuZnVuY3Rpb24gcmVzdG9yZU1vZHVsZXMoKSB7XG4gIGRlc3Ryb3llZCA9IGZhbHNlO1xuICBfLmVhY2gobW9kdWxlcywgYmluZE1vZHVsZSk7XG59XG5cbi8qKlxuICogV2ViZmxvdy5sb2FkIC0gQWRkIGEgd2luZG93IGxvYWQgaGFuZGxlciB0aGF0IHdpbGwgcnVuIGV2ZW4gaWYgbG9hZCBldmVudCBoYXMgYWxyZWFkeSBoYXBwZW5lZFxuICogQHBhcmFtICB7ZnVuY3Rpb259IGhhbmRsZXJcbiAqL1xudmFyIGRlZmVyTG9hZDtcbldlYmZsb3cubG9hZCA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gIGRlZmVyTG9hZC50aGVuKGhhbmRsZXIpO1xufTtcblxuZnVuY3Rpb24gYmluZExvYWQoKSB7XG4gIC8vIFJlamVjdCBhbnkgcHJldmlvdXMgZGVmZXJyZWQgKHRvIHN1cHBvcnQgZGVzdHJveSlcbiAgaWYgKGRlZmVyTG9hZCkge1xuICAgIGRlZmVyTG9hZC5yZWplY3QoKTtcbiAgICAkd2luLm9mZignbG9hZCcsIGRlZmVyTG9hZC5yZXNvbHZlKTtcbiAgfVxuICAvLyBDcmVhdGUgZGVmZXJyZWQgYW5kIGJpbmQgd2luZG93IGxvYWQgZXZlbnRcbiAgZGVmZXJMb2FkID0gbmV3ICQuRGVmZXJyZWQoKTtcbiAgJHdpbi5vbignbG9hZCcsIGRlZmVyTG9hZC5yZXNvbHZlKTtcbn1cblxuLy8gV2ViZmxvdy5kZXN0cm95IC0gVHJpZ2dlciBhIGRlc3Ryb3kgZXZlbnQgZm9yIGFsbCBtb2R1bGVzXG5XZWJmbG93LmRlc3Ryb3kgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgZGVzdHJveWVkID0gdHJ1ZTtcbiAgJHdpbi50cmlnZ2VySGFuZGxlcignX193Zl9kZXN0cm95Jyk7XG5cbiAgLy8gQWxsb3cgZG9tcmVhZHkgcmVzZXQgZm9yIHRlc3RzXG4gIGlmIChvcHRpb25zLmRvbXJlYWR5ICE9IG51bGwpIHtcbiAgICBkb21yZWFkeSA9IG9wdGlvbnMuZG9tcmVhZHk7XG4gIH1cblxuICAvLyBVbmJpbmQgbW9kdWxlc1xuICBfLmVhY2gobW9kdWxlcywgdW5iaW5kTW9kdWxlKTtcblxuICAvLyBDbGVhciBhbnkgcHJveHkgZXZlbnQgaGFuZGxlcnNcbiAgV2ViZmxvdy5yZXNpemUub2ZmKCk7XG4gIFdlYmZsb3cuc2Nyb2xsLm9mZigpO1xuICBXZWJmbG93LnJlZHJhdy5vZmYoKTtcblxuICAvLyBDbGVhciBhbnkgcXVldWVkIHJlYWR5IG1ldGhvZHNcbiAgcHJpbWFyeSA9IFtdO1xuICBzZWNvbmRhcnkgPSBbXTtcblxuICAvLyBJZiBsb2FkIGV2ZW50IGhhcyBub3QgeWV0IGZpcmVkLCByZXBsYWNlIHRoZSBkZWZlcnJlZFxuICBpZiAoZGVmZXJMb2FkLnN0YXRlKCkgPT09ICdwZW5kaW5nJykge1xuICAgIGJpbmRMb2FkKCk7XG4gIH1cbn07XG5cbi8vIExpc3RlbiBmb3IgZG9tcmVhZHlcbiQoV2ViZmxvdy5yZWFkeSk7XG5cbi8vIExpc3RlbiBmb3Igd2luZG93Lm9ubG9hZCBhbmQgcmVzb2x2ZSBkZWZlcnJlZFxuYmluZExvYWQoKTtcblxuLy8gRXhwb3J0IGNvbW1vbmpzIG1vZHVsZVxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuV2ViZmxvdyA9IFdlYmZsb3c7XG4iXSwibmFtZXMiOlsiV2ViZmxvdyIsIm1vZHVsZXMiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5Iiwid2luZG93IiwiJCIsImpRdWVyeSIsIiR3aW4iLCIkZG9jIiwiZG9jdW1lbnQiLCJpc0Z1bmN0aW9uIiwiXyIsInJlcXVpcmUiLCJ0cmFtIiwiZG9tcmVhZHkiLCJkZXN0cm95ZWQiLCJjb25maWciLCJoaWRlQmFja2ZhY2UiLCJrZWVwSW5oZXJpdGVkIiwiZGVmaW5lIiwibmFtZSIsImZhY3RvcnkiLCJvcHRpb25zIiwidW5iaW5kTW9kdWxlIiwiaW5zdGFuY2UiLCJiaW5kTW9kdWxlIiwibW9kdWxlIiwiZW52IiwiZGVzaWduIiwib24iLCJwcmV2aWV3IiwiZGVzdHJveSIsInJlYWR5IiwiYWRkUmVhZHkiLCJjb250YWlucyIsInB1c2giLCJvZmYiLCJyZW1vdmVSZWFkeSIsImZpbHRlciIsInJlYWR5Rm4iLCJtb2RlIiwiZGVzaWduRmxhZyIsIl9fd2ZfZGVzaWduIiwiaW5BcHAiLCJfX3dmX3NsdWciLCJXZWJmbG93RWRpdG9yIiwiV0VCRkxPV19FTlZfVEVTVCIsIl9fd2ZfdGVzdCIsInRvcCIsInVzZXJBZ2VudCIsIm5hdmlnYXRvciIsInRvTG93ZXJDYXNlIiwidG91Y2giLCJEb2N1bWVudFRvdWNoIiwiY2hyb21lIiwidGVzdCIsInZlbmRvciIsInBhcnNlSW50IiwibWF0Y2giLCJpb3MiLCJzYWZhcmkiLCJ0b3VjaFRhcmdldCIsImV2dCIsInRhcmdldCIsInZhbGlkQ2xpY2siLCJjbGlja1RhcmdldCIsInJlc2l6ZUV2ZW50cyIsInNjcm9sbEV2ZW50cyIsInJlc2l6ZSIsImV2ZW50UHJveHkiLCJzY3JvbGwiLCJyZWRyYXciLCJ0eXBlcyIsImhhbmRsZXJzIiwicHJveHkiLCJ1cCIsInRocm90dGxlIiwiZWFjaCIsImgiLCJoYW5kbGVyIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwibG9jYXRpb24iLCJ1cmwiLCJyZXN0b3JlTW9kdWxlcyIsImNhbGxSZWFkeSIsImRlZmVyTG9hZCIsImxvYWQiLCJ0aGVuIiwiYmluZExvYWQiLCJyZWplY3QiLCJyZXNvbHZlIiwiRGVmZXJyZWQiLCJ0cmlnZ2VySGFuZGxlciIsInN0YXRlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlELEdBRXpEOztDQUVDO0FBQ0QsSUFBSUEsVUFBVSxDQUFDO0FBQ2YsSUFBSUMsVUFBVSxDQUFDO0FBQ2YsSUFBSUMsVUFBVSxFQUFFO0FBQ2hCLElBQUlDLFlBQVlDLE9BQU9KLE9BQU8sSUFBSSxFQUFFO0FBQ3BDLElBQUlLLElBQUlELE9BQU9FLE1BQU07QUFDckIsSUFBSUMsT0FBT0YsRUFBRUQ7QUFDYixJQUFJSSxPQUFPSCxFQUFFSTtBQUNiLElBQUlDLGFBQWFMLEVBQUVLLFVBQVU7QUFDN0IsSUFBSUMsSUFBS1gsUUFBUVcsQ0FBQyxHQUFHQyxRQUFRO0FBQzdCLElBQUlDLE9BQVFiLFFBQVFhLElBQUksR0FBR0QsUUFBUSxpQkFBaUJQLEVBQUVRLElBQUk7QUFDMUQsSUFB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

}),
7624: (function (module, __unused_webpack_exports, __webpack_require__) {
/* globals window, document */ /**
 * Webflow: Auto-select links to current page or section
 */ 
var Webflow = __webpack_require__(3949);
Webflow.define('links', module.exports = function($, _) {
    var api = {};
    var $win = $(window);
    var designer;
    var inApp = Webflow.env();
    var location = window.location;
    var tempLink = document.createElement('a');
    var linkCurrent = 'w--current';
    var indexPage = /index\.(html|php)$/;
    var dirList = /\/$/;
    var anchors;
    var slug;
    // -----------------------------------
    // Module methods
    api.ready = api.design = api.preview = init;
    // -----------------------------------
    // Private methods
    function init() {
        designer = inApp && Webflow.env('design');
        slug = Webflow.env('slug') || location.pathname || '';
        // Reset scroll listener, init anchors
        Webflow.scroll.off(scroll);
        anchors = [];
        // Test all links for a selectable href
        var links = document.links;
        for(var i = 0; i < links.length; ++i){
            select(links[i]);
        }
        // Listen for scroll if any anchors exist
        if (anchors.length) {
            Webflow.scroll.on(scroll);
            scroll();
        }
    }
    function select(link) {
        // Ignore localized links
        if (link.getAttribute('hreflang')) {
            return;
        }
        var href = designer && link.getAttribute('href-disabled') || link.getAttribute('href');
        tempLink.href = href;
        // Ignore any hrefs with a colon to safely avoid all uri schemes
        if (href.indexOf(':') >= 0) {
            return;
        }
        var $link = $(link);
        // Check for all links with hash (eg (this-host)(/this-path)#section) to this page
        if (tempLink.hash.length > 1 && tempLink.host + tempLink.pathname === location.host + location.pathname) {
            // Ignore any hrefs with Google Translate type hash
            // Example: jQuery can't parse $('#googtrans(en|es)')
            // https://forum.webflow.com/t/dropdown-menus-not-working-on-site/87140
            if (!/^#[a-zA-Z0-9\-\_]+$/.test(tempLink.hash)) {
                return;
            }
            var $section = $(tempLink.hash);
            $section.length && anchors.push({
                link: $link,
                sec: $section,
                active: false
            });
            return;
        }
        // Ignore empty # links
        if (href === '#' || href === '') {
            return;
        }
        // Determine whether the link should be selected
        var match = !inApp && tempLink.href === location.href || href === slug || indexPage.test(href) && dirList.test(slug);
        setClass($link, linkCurrent, match);
    }
    function scroll() {
        var viewTop = $win.scrollTop();
        var viewHeight = $win.height();
        // Check each anchor for a section in view
        _.each(anchors, function(anchor) {
            // Ignore localized links
            if (anchor.link.attr('hreflang')) {
                return;
            }
            var $link = anchor.link;
            var $section = anchor.sec;
            var top = $section.offset().top;
            var height = $section.outerHeight();
            var offset = viewHeight * 0.5;
            var active = $section.is(':visible') && top + height - offset >= viewTop && top + offset <= viewTop + viewHeight;
            if (anchor.active === active) {
                return;
            }
            anchor.active = active;
            setClass($link, linkCurrent, active);
        });
    }
    function setClass($elem, className, add) {
        var exists = $elem.hasClass(className);
        if (add && exists) {
            return;
        }
        if (!add && !exists) {
            return;
        }
        add ? $elem.addClass(className) : $elem.removeClass(className);
    }
    // Export module
    return api;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3NoYXJlZC9yZW5kZXIvcGx1Z2lucy9CYXNlU2l0ZU1vZHVsZXMvd2ViZmxvdy1saW5rcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWxzIHdpbmRvdywgZG9jdW1lbnQgKi9cblxuLyoqXG4gKiBXZWJmbG93OiBBdXRvLXNlbGVjdCBsaW5rcyB0byBjdXJyZW50IHBhZ2Ugb3Igc2VjdGlvblxuICovXG5cbnZhciBXZWJmbG93ID0gcmVxdWlyZSgnLi93ZWJmbG93LWxpYicpO1xuXG5XZWJmbG93LmRlZmluZShcbiAgJ2xpbmtzJyxcbiAgKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCQsIF8pIHtcbiAgICB2YXIgYXBpID0ge307XG4gICAgdmFyICR3aW4gPSAkKHdpbmRvdyk7XG4gICAgdmFyIGRlc2lnbmVyO1xuICAgIHZhciBpbkFwcCA9IFdlYmZsb3cuZW52KCk7XG4gICAgdmFyIGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uO1xuICAgIHZhciB0ZW1wTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB2YXIgbGlua0N1cnJlbnQgPSAndy0tY3VycmVudCc7XG4gICAgdmFyIGluZGV4UGFnZSA9IC9pbmRleFxcLihodG1sfHBocCkkLztcbiAgICB2YXIgZGlyTGlzdCA9IC9cXC8kLztcbiAgICB2YXIgYW5jaG9ycztcbiAgICB2YXIgc2x1ZztcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gTW9kdWxlIG1ldGhvZHNcblxuICAgIGFwaS5yZWFkeSA9IGFwaS5kZXNpZ24gPSBhcGkucHJldmlldyA9IGluaXQ7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFByaXZhdGUgbWV0aG9kc1xuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIGRlc2lnbmVyID0gaW5BcHAgJiYgV2ViZmxvdy5lbnYoJ2Rlc2lnbicpO1xuICAgICAgc2x1ZyA9IFdlYmZsb3cuZW52KCdzbHVnJykgfHwgbG9jYXRpb24ucGF0aG5hbWUgfHwgJyc7XG5cbiAgICAgIC8vIFJlc2V0IHNjcm9sbCBsaXN0ZW5lciwgaW5pdCBhbmNob3JzXG4gICAgICBXZWJmbG93LnNjcm9sbC5vZmYoc2Nyb2xsKTtcbiAgICAgIGFuY2hvcnMgPSBbXTtcblxuICAgICAgLy8gVGVzdCBhbGwgbGlua3MgZm9yIGEgc2VsZWN0YWJsZSBocmVmXG4gICAgICB2YXIgbGlua3MgPSBkb2N1bWVudC5saW5rcztcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgc2VsZWN0KGxpbmtzW2ldKTtcbiAgICAgIH1cblxuICAgICAgLy8gTGlzdGVuIGZvciBzY3JvbGwgaWYgYW55IGFuY2hvcnMgZXhpc3RcbiAgICAgIGlmIChhbmNob3JzLmxlbmd0aCkge1xuICAgICAgICBXZWJmbG93LnNjcm9sbC5vbihzY3JvbGwpO1xuICAgICAgICBzY3JvbGwoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZWxlY3QobGluaykge1xuICAgICAgLy8gSWdub3JlIGxvY2FsaXplZCBsaW5rc1xuICAgICAgaWYgKGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmbGFuZycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGhyZWYgPVxuICAgICAgICAoZGVzaWduZXIgJiYgbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYtZGlzYWJsZWQnKSkgfHxcbiAgICAgICAgbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIHRlbXBMaW5rLmhyZWYgPSBocmVmO1xuXG4gICAgICAvLyBJZ25vcmUgYW55IGhyZWZzIHdpdGggYSBjb2xvbiB0byBzYWZlbHkgYXZvaWQgYWxsIHVyaSBzY2hlbWVzXG4gICAgICBpZiAoaHJlZi5pbmRleE9mKCc6JykgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciAkbGluayA9ICQobGluayk7XG5cbiAgICAgIC8vIENoZWNrIGZvciBhbGwgbGlua3Mgd2l0aCBoYXNoIChlZyAodGhpcy1ob3N0KSgvdGhpcy1wYXRoKSNzZWN0aW9uKSB0byB0aGlzIHBhZ2VcbiAgICAgIGlmIChcbiAgICAgICAgdGVtcExpbmsuaGFzaC5sZW5ndGggPiAxICYmXG4gICAgICAgIHRlbXBMaW5rLmhvc3QgKyB0ZW1wTGluay5wYXRobmFtZSA9PT0gbG9jYXRpb24uaG9zdCArIGxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICApIHtcbiAgICAgICAgLy8gSWdub3JlIGFueSBocmVmcyB3aXRoIEdvb2dsZSBUcmFuc2xhdGUgdHlwZSBoYXNoXG4gICAgICAgIC8vIEV4YW1wbGU6IGpRdWVyeSBjYW4ndCBwYXJzZSAkKCcjZ29vZ3RyYW5zKGVufGVzKScpXG4gICAgICAgIC8vIGh0dHBzOi8vZm9ydW0ud2ViZmxvdy5jb20vdC9kcm9wZG93bi1tZW51cy1ub3Qtd29ya2luZy1vbi1zaXRlLzg3MTQwXG4gICAgICAgIGlmICghL14jW2EtekEtWjAtOVxcLVxcX10rJC8udGVzdCh0ZW1wTGluay5oYXNoKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciAkc2VjdGlvbiA9ICQodGVtcExpbmsuaGFzaCk7XG4gICAgICAgICRzZWN0aW9uLmxlbmd0aCAmJlxuICAgICAgICAgIGFuY2hvcnMucHVzaCh7XG4gICAgICAgICAgICBsaW5rOiAkbGluayxcbiAgICAgICAgICAgIHNlYzogJHNlY3Rpb24sXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIElnbm9yZSBlbXB0eSAjIGxpbmtzXG4gICAgICBpZiAoaHJlZiA9PT0gJyMnIHx8IGhyZWYgPT09ICcnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGxpbmsgc2hvdWxkIGJlIHNlbGVjdGVkXG4gICAgICB2YXIgbWF0Y2ggPVxuICAgICAgICAoIWluQXBwICYmIHRlbXBMaW5rLmhyZWYgPT09IGxvY2F0aW9uLmhyZWYpIHx8XG4gICAgICAgIGhyZWYgPT09IHNsdWcgfHxcbiAgICAgICAgKGluZGV4UGFnZS50ZXN0KGhyZWYpICYmIGRpckxpc3QudGVzdChzbHVnKSk7XG4gICAgICBzZXRDbGFzcygkbGluaywgbGlua0N1cnJlbnQsIG1hdGNoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGwoKSB7XG4gICAgICB2YXIgdmlld1RvcCA9ICR3aW4uc2Nyb2xsVG9wKCk7XG4gICAgICB2YXIgdmlld0hlaWdodCA9ICR3aW4uaGVpZ2h0KCk7XG5cbiAgICAgIC8vIENoZWNrIGVhY2ggYW5jaG9yIGZvciBhIHNlY3Rpb24gaW4gdmlld1xuICAgICAgXy5lYWNoKGFuY2hvcnMsIGZ1bmN0aW9uIChhbmNob3IpIHtcbiAgICAgICAgLy8gSWdub3JlIGxvY2FsaXplZCBsaW5rc1xuICAgICAgICBpZiAoYW5jaG9yLmxpbmsuYXR0cignaHJlZmxhbmcnKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciAkbGluayA9IGFuY2hvci5saW5rO1xuICAgICAgICB2YXIgJHNlY3Rpb24gPSBhbmNob3Iuc2VjO1xuICAgICAgICB2YXIgdG9wID0gJHNlY3Rpb24ub2Zmc2V0KCkudG9wO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gJHNlY3Rpb24ub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgdmFyIG9mZnNldCA9IHZpZXdIZWlnaHQgKiAwLjU7XG4gICAgICAgIHZhciBhY3RpdmUgPVxuICAgICAgICAgICRzZWN0aW9uLmlzKCc6dmlzaWJsZScpICYmXG4gICAgICAgICAgdG9wICsgaGVpZ2h0IC0gb2Zmc2V0ID49IHZpZXdUb3AgJiZcbiAgICAgICAgICB0b3AgKyBvZmZzZXQgPD0gdmlld1RvcCArIHZpZXdIZWlnaHQ7XG4gICAgICAgIGlmIChhbmNob3IuYWN0aXZlID09PSBhY3RpdmUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYW5jaG9yLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgICAgc2V0Q2xhc3MoJGxpbmssIGxpbmtDdXJyZW50LCBhY3RpdmUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0Q2xhc3MoJGVsZW0sIGNsYXNzTmFtZSwgYWRkKSB7XG4gICAgICB2YXIgZXhpc3RzID0gJGVsZW0uaGFzQ2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgIGlmIChhZGQgJiYgZXhpc3RzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghYWRkICYmICFleGlzdHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYWRkID8gJGVsZW0uYWRkQ2xhc3MoY2xhc3NOYW1lKSA6ICRlbGVtLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgLy8gRXhwb3J0IG1vZHVsZVxuICAgIHJldHVybiBhcGk7XG4gIH0pXG4pO1xuIl0sIm5hbWVzIjpbIldlYmZsb3ciLCJyZXF1aXJlIiwiZGVmaW5lIiwibW9kdWxlIiwiZXhwb3J0cyIsIiQiLCJfIiwiYXBpIiwiJHdpbiIsIndpbmRvdyIsImRlc2lnbmVyIiwiaW5BcHAiLCJlbnYiLCJsb2NhdGlvbiIsInRlbXBMaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwibGlua0N1cnJlbnQiLCJpbmRleFBhZ2UiLCJkaXJMaXN0IiwiYW5jaG9ycyIsInNsdWciLCJyZWFkeSIsImRlc2lnbiIsInByZXZpZXciLCJpbml0IiwicGF0aG5hbWUiLCJzY3JvbGwiLCJvZmYiLCJsaW5rcyIsImkiLCJsZW5ndGgiLCJzZWxlY3QiLCJvbiIsImxpbmsiLCJnZXRBdHRyaWJ1dGUiLCJocmVmIiwiaW5kZXhPZiIsIiRsaW5rIiwiaGFzaCIsImhvc3QiLCJ0ZXN0IiwiJHNlY3Rpb24iLCJwdXNoIiwic2VjIiwiYWN0aXZlIiwibWF0Y2giLCJzZXRDbGFzcyIsInZpZXdUb3AiLCJzY3JvbGxUb3AiLCJ2aWV3SGVpZ2h0IiwiaGVpZ2h0IiwiZWFjaCIsImFuY2hvciIsImF0dHIiLCJ0b3AiLCJvZmZzZXQiLCJvdXRlckhlaWdodCIsImlzIiwiJGVsZW0iLCJjbGFzc05hbWUiLCJhZGQiLCJleGlzdHMiLCJoYXNDbGFzcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiXSwibWFwcGluZ3MiOiJBQUFBLDRCQUE0QixHQUU1Qjs7Q0FFQztBQUVELElBQUlBLFVBQVVDLFFBQVE7QUFFdEJELFFBQVFFLE1BQU0sQ0FDWixTQUNDQyxPQUFPQyxPQUFPLEdBQUcsU0FBVUMsQ0FBQyxFQUFFQyxDQUFDO0lBQzlCLElBQUlDLE1BQU0sQ0FBQztJQUNYLElBQUlDLE9BQU9ILEVBQUVJO0lBQ2IsSUFBSUM7SUFDSixJQUFJQyxRQUFRWCxRQUFRWSxHQUFHO0lBQ3ZCLElBQUlDLFdBQVdKLE9BQU9JLFFBQVE7SUFDOUIsSUFBSUMsV0FBV0MsU0FBU0MsYUFBYSxDQUFDO0lBQ3RDLElBQUlDLGNBQWM7SUFDbEIsSUFBSUMsWUFBWTtJQUNoQixJQUFJQyxVQUFVO0lBQ2QsSUFBSUM7SUFDSixJQUFJQztJQUVKLHNDQUFzQztJQUN0QyxpQkFBaUI7SUFFakJkLElBQUllLEtBQUssR0FBR2YsSUFBSWdCLE1BQU0sR0FBR2hCLElBQUlpQixPQUFPLEdBQUdDO0lBRXZDLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFFbEIsU0FBU0E7UUFDUGYsV0FBV0MsU0FBU1gsUUFBUVksR0FBRyxDQUFDO1FBQ2hDUyxPQUFPckIsUUFBUVksR0FBRyxDQUFDLFdBQVdDLFNBQVNhLFFBQVEsSUFBSTtRQUVuRCxzQ0FBc0M7UUFDdEMxQixRQUFRMkIsTUFBTSxDQUFDQyxHQUFHLENBQUNEO1FBQ25CUCxVQUFVLEVBQUU7UUFFWix1Q0FBdUM7UUFDdkMsSUFB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

}),
286: (function (module, __unused_webpack_exports, __webpack_require__) {
/* globals window, document */ /**
 * Webflow: Smooth scroll
 */ 
var Webflow = __webpack_require__(3949);
Webflow.define('scroll', module.exports = function($) {
    /**
     * A collection of namespaced events found in this module.
     * Namespaced events encapsulate our code, and make it safer and easier
     * for designers to apply custom code overrides.
     * @see https://api.jquery.com/on/#event-names
     * @typedef {Object.<string>} NamespacedEventsCollection
     */ var NS_EVENTS = {
        WF_CLICK_EMPTY: 'click.wf-empty-link',
        WF_CLICK_SCROLL: 'click.wf-scroll'
    };
    var loc = window.location;
    var history = inIframe() ? null : window.history;
    var $win = $(window);
    var $doc = $(document);
    var $body = $(document.body);
    var animate = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) {
        window.setTimeout(fn, 15);
    };
    var rootTag = Webflow.env('editor') ? '.w-editor-body' : 'body';
    var headerSelector = 'header, ' + rootTag + ' > .header, ' + rootTag + ' > .w-nav:not([data-no-scroll])';
    var emptyHrefSelector = 'a[href="#"]';
    /**
     * Select only links whose href:
     * - contains a #
     * - is not one of our namespaced TabLink elements
     * - is not _only_ a #
     */ var localHrefSelector = 'a[href*="#"]:not(.w-tab-link):not(' + emptyHrefSelector + ')';
    var scrollTargetOutlineCSS = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}';
    var focusStylesEl = document.createElement('style');
    focusStylesEl.appendChild(document.createTextNode(scrollTargetOutlineCSS));
    function inIframe() {
        try {
            return Boolean(window.frameElement);
        } catch (e) {
            return true;
        }
    }
    var validHash = /^#[a-zA-Z0-9][\w:.-]*$/;
    /**
     * Determine if link navigates to current page
     * @param {HTMLAnchorElement} link
     */ function linksToCurrentPage(link) {
        return validHash.test(link.hash) && link.host + link.pathname === loc.host + loc.pathname;
    }
    /**
     * Check if the designer has indicated that this page should
     * have no scroll animation, or if the end user has set
     * prefers-reduced-motion in their OS
     */ const reducedMotionMediaQuery = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)');
    function reducedMotionEnabled() {
        return document.body.getAttribute('data-wf-scroll-motion') === 'none' || reducedMotionMediaQuery.matches;
    }
    function setFocusable($el, action) {
        var initialTabindex;
        switch(action){
            case 'add':
                initialTabindex = $el.attr('tabindex');
                if (initialTabindex) {
                    $el.attr('data-wf-tabindex-swap', initialTabindex);
                } else {
                    $el.attr('tabindex', '-1');
                }
                break;
            case 'remove':
                initialTabindex = $el.attr('data-wf-tabindex-swap');
                if (initialTabindex) {
                    $el.attr('tabindex', initialTabindex);
                    $el.removeAttr('data-wf-tabindex-swap');
                } else {
                    $el.removeAttr('tabindex');
                }
                break;
        }
        $el.toggleClass('wf-force-outline-none', action === 'add');
    }
    /**
     * Determine if we should execute custom scroll
     */ function validateScroll(evt) {
        var target = evt.currentTarget;
        if (// Bail if in Designer
        Webflow.env('design') || // Ignore links being used by jQuery mobile
        window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(target.className)) {
            return;
        }
        var hash = linksToCurrentPage(target) ? target.hash : '';
        if (hash === '') return;
        var $el = $(hash);
        if (!$el.length) {
            return;
        }
        if (evt) {
            evt.preventDefault();
            evt.stopPropagation();
        }
        updateHistory(hash, evt);
        window.setTimeout(function() {
            scroll($el, function setFocus() {
                setFocusable($el, 'add');
                $el.get(0).focus({
                    preventScroll: true
                });
                setFocusable($el, 'remove');
            });
        }, evt ? 0 : 300);
    }
    function updateHistory(hash) {
        // Push new history state
        if (loc.hash !== hash && history && history.pushState && // Navigation breaks Chrome when the protocol is `file:`.
        !(Webflow.env.chrome && loc.protocol === 'file:')) {
            var oldHash = history.state && history.state.hash;
            if (oldHash !== hash) {
                history.pushState({
                    hash
                }, '', hash);
            }
        }
    }
    function scroll($targetEl, cb) {
        var start = $win.scrollTop();
        var end = calculateScrollEndPosition($targetEl);
        if (start === end) return;
        var duration = calculateScrollDuration($targetEl, start, end);
        var clock = Date.now();
        var step = function() {
            var elapsed = Date.now() - clock;
            window.scroll(0, getY(start, end, elapsed, duration));
            if (elapsed <= duration) {
                animate(step);
            } else if (typeof cb === 'function') {
                cb();
            }
        };
        animate(step);
    }
    function calculateScrollEndPosition($targetEl) {
        // If a fixed header exists, offset for the height
        var $header = $(headerSelector);
        var offsetY = $header.css('position') === 'fixed' ? $header.outerHeight() : 0;
        var end = $targetEl.offset().top - offsetY;
        // If specified, scroll so that the element ends up in the middle of the viewport
        if ($targetEl.data('scroll') === 'mid') {
            var available = $win.height() - offsetY;
            var elHeight = $targetEl.outerHeight();
            if (elHeight < available) {
                end -= Math.round((available - elHeight) / 2);
            }
        }
        return end;
    }
    function calculateScrollDuration($targetEl, start, end) {
        if (reducedMotionEnabled()) return 0;
        var mult = 1;
        // Check for custom time multiplier on the body and the scroll target
        $body.add($targetEl).each(function(_, el) {
            var time = parseFloat(el.getAttribute('data-scroll-time'));
            if (!isNaN(time) && time >= 0) {
                mult = time;
            }
        });
        return (472.143 * Math.log(Math.abs(start - end) + 125) - 2000) * mult;
    }
    function getY(start, end, elapsed, duration) {
        if (elapsed > duration) {
            return end;
        }
        return start + (end - start) * ease(elapsed / duration);
    }
    function ease(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
    function ready() {
        var { WF_CLICK_EMPTY, WF_CLICK_SCROLL } = NS_EVENTS;
        $doc.on(WF_CLICK_SCROLL, localHrefSelector, validateScroll);
        /**
       * Prevent empty hash links from triggering scroll.
       * Legacy feature to preserve: use the default "#" link
       * to trigger an interaction, and do not want the page
       * to scroll to the top.
       */ $doc.on(WF_CLICK_EMPTY, emptyHrefSelector, function(e) {
            e.preventDefault();
        });
        document.head.insertBefore(focusStylesEl, document.head.firstChild);
    }
    // Export module
    return {
        ready
    };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3NoYXJlZC9yZW5kZXIvcGx1Z2lucy9CYXNlU2l0ZU1vZHVsZXMvd2ViZmxvdy1zY3JvbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFscyB3aW5kb3csIGRvY3VtZW50ICovXG5cbi8qKlxuICogV2ViZmxvdzogU21vb3RoIHNjcm9sbFxuICovXG5cbnZhciBXZWJmbG93ID0gcmVxdWlyZSgnLi93ZWJmbG93LWxpYicpO1xuXG5XZWJmbG93LmRlZmluZShcbiAgJ3Njcm9sbCcsXG4gIChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkKSB7XG4gICAgLyoqXG4gICAgICogQSBjb2xsZWN0aW9uIG9mIG5hbWVzcGFjZWQgZXZlbnRzIGZvdW5kIGluIHRoaXMgbW9kdWxlLlxuICAgICAqIE5hbWVzcGFjZWQgZXZlbnRzIGVuY2Fwc3VsYXRlIG91ciBjb2RlLCBhbmQgbWFrZSBpdCBzYWZlciBhbmQgZWFzaWVyXG4gICAgICogZm9yIGRlc2lnbmVycyB0byBhcHBseSBjdXN0b20gY29kZSBvdmVycmlkZXMuXG4gICAgICogQHNlZSBodHRwczovL2FwaS5qcXVlcnkuY29tL29uLyNldmVudC1uYW1lc1xuICAgICAqIEB0eXBlZGVmIHtPYmplY3QuPHN0cmluZz59IE5hbWVzcGFjZWRFdmVudHNDb2xsZWN0aW9uXG4gICAgICovXG4gICAgdmFyIE5TX0VWRU5UUyA9IHtcbiAgICAgIFdGX0NMSUNLX0VNUFRZOiAnY2xpY2sud2YtZW1wdHktbGluaycsXG4gICAgICBXRl9DTElDS19TQ1JPTEw6ICdjbGljay53Zi1zY3JvbGwnLFxuICAgIH07XG5cbiAgICB2YXIgbG9jID0gd2luZG93LmxvY2F0aW9uO1xuICAgIHZhciBoaXN0b3J5ID0gaW5JZnJhbWUoKSA/IG51bGwgOiB3aW5kb3cuaGlzdG9yeTtcbiAgICB2YXIgJHdpbiA9ICQod2luZG93KTtcbiAgICB2YXIgJGRvYyA9ICQoZG9jdW1lbnQpO1xuICAgIHZhciAkYm9keSA9ICQoZG9jdW1lbnQuYm9keSk7XG5cbiAgICB2YXIgYW5pbWF0ZSA9XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZm4sIDE1KTtcbiAgICAgIH07XG4gICAgdmFyIHJvb3RUYWcgPSBXZWJmbG93LmVudignZWRpdG9yJykgPyAnLnctZWRpdG9yLWJvZHknIDogJ2JvZHknO1xuICAgIHZhciBoZWFkZXJTZWxlY3RvciA9XG4gICAgICAnaGVhZGVyLCAnICtcbiAgICAgIHJvb3RUYWcgK1xuICAgICAgJyA+IC5oZWFkZXIsICcgK1xuICAgICAgcm9vdFRhZyArXG4gICAgICAnID4gLnctbmF2Om5vdChbZGF0YS1uby1zY3JvbGxdKSc7XG5cbiAgICB2YXIgZW1wdHlIcmVmU2VsZWN0b3IgPSAnYVtocmVmPVwiI1wiXSc7XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3Qgb25seSBsaW5rcyB3aG9zZSBocmVmOlxuICAgICAqIC0gY29udGFpbnMgYSAjXG4gICAgICogLSBpcyBub3Qgb25lIG9mIG91ciBuYW1lc3BhY2VkIFRhYkxpbmsgZWxlbWVudHNcbiAgICAgKiAtIGlzIG5vdCBfb25seV8gYSAjXG4gICAgICovXG4gICAgdmFyIGxvY2FsSHJlZlNlbGVjdG9yID1cbiAgICAgICdhW2hyZWYqPVwiI1wiXTpub3QoLnctdGFiLWxpbmspOm5vdCgnICsgZW1wdHlIcmVmU2VsZWN0b3IgKyAnKSc7XG5cbiAgICB2YXIgc2Nyb2xsVGFyZ2V0T3V0bGluZUNTUyA9XG4gICAgICAnLndmLWZvcmNlLW91dGxpbmUtbm9uZVt0YWJpbmRleD1cIi0xXCJdOmZvY3Vze291dGxpbmU6bm9uZTt9JztcblxuICAgIHZhciBmb2N1c1N0eWxlc0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBmb2N1c1N0eWxlc0VsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHNjcm9sbFRhcmdldE91dGxpbmVDU1MpKTtcblxuICAgIGZ1bmN0aW9uIGluSWZyYW1lKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4od2luZG93LmZyYW1lRWxlbWVudCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB2YWxpZEhhc2ggPSAvXiNbYS16QS1aMC05XVtcXHc6Li1dKiQvO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIGlmIGxpbmsgbmF2aWdhdGVzIHRvIGN1cnJlbnQgcGFnZVxuICAgICAqIEBwYXJhbSB7SFRNTEFuY2hvckVsZW1lbnR9IGxpbmtcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsaW5rc1RvQ3VycmVudFBhZ2UobGluaykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdmFsaWRIYXNoLnRlc3QobGluay5oYXNoKSAmJlxuICAgICAgICBsaW5rLmhvc3QgKyBsaW5rLnBhdGhuYW1lID09PSBsb2MuaG9zdCArIGxvYy5wYXRobmFtZVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgZGVzaWduZXIgaGFzIGluZGljYXRlZCB0aGF0IHRoaXMgcGFnZSBzaG91bGRcbiAgICAgKiBoYXZlIG5vIHNjcm9sbCBhbmltYXRpb24sIG9yIGlmIHRoZSBlbmQgdXNlciBoYXMgc2V0XG4gICAgICogcHJlZmVycy1yZWR1Y2VkLW1vdGlvbiBpbiB0aGVpciBPU1xuICAgICAqL1xuICAgIGNvbnN0IHJlZHVjZWRNb3Rpb25NZWRpYVF1ZXJ5ID1cbiAgICAgIHR5cGVvZiB3aW5kb3cubWF0Y2hNZWRpYSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpJyk7XG4gICAgZnVuY3Rpb24gcmVkdWNlZE1vdGlvbkVuYWJsZWQoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBkb2N1bWVudC5ib2R5LmdldEF0dHJpYnV0ZSgnZGF0YS13Zi1zY3JvbGwtbW90aW9uJykgPT09ICdub25lJyB8fFxuICAgICAgICByZWR1Y2VkTW90aW9uTWVkaWFRdWVyeS5tYXRjaGVzXG4gICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEZvY3VzYWJsZSgkZWwsIGFjdGlvbikge1xuICAgICAgdmFyIGluaXRpYWxUYWJpbmRleDtcblxuICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgY2FzZSAnYWRkJzpcbiAgICAgICAgICBpbml0aWFsVGFiaW5kZXggPSAkZWwuYXR0cigndGFiaW5kZXgnKTtcblxuICAgICAgICAgIGlmIChpbml0aWFsVGFiaW5kZXgpIHtcbiAgICAgICAgICAgICRlbC5hdHRyKCdkYXRhLXdmLXRhYmluZGV4LXN3YXAnLCBpbml0aWFsVGFiaW5kZXgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkZWwuYXR0cigndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmVtb3ZlJzpcbiAgICAgICAgICBpbml0aWFsVGFiaW5kZXggPSAkZWwuYXR0cignZGF0YS13Zi10YWJpbmRleC1zd2FwJyk7XG4gICAgICAgICAgaWYgKGluaXRpYWxUYWJpbmRleCkge1xuICAgICAgICAgICAgJGVsLmF0dHIoJ3RhYmluZGV4JywgaW5pdGlhbFRhYmluZGV4KTtcbiAgICAgICAgICAgICRlbC5yZW1vdmVBdHRyKCdkYXRhLXdmLXRhYmluZGV4LXN3YXAnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGVsLnJlbW92ZUF0dHIoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAkZWwudG9nZ2xlQ2xhc3MoJ3dmLWZvcmNlLW91dGxpbmUtbm9uZScsIGFjdGlvbiA9PT0gJ2FkZCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZSBpZiB3ZSBzaG91bGQgZXhlY3V0ZSBjdXN0b20gc2Nyb2xsXG4gICAgICovXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVTY3JvbGwoZXZ0KSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gZXZ0LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBpZiAoXG4gICAgICAgIC8vIEJhaWwgaWYgaW4gRGVzaWduZXJcbiAgICAgICAgV2ViZmxvdy5lbnYoJ2Rlc2lnbicpIHx8XG4gICAgICAgIC8vIElnbm9yZSBsaW5rcyBiZWluZyB1c2VkIGJ5IGpRdWVyeSBtb2JpbGVcbiAgICAgICAgKHdpbmRvdy4kLm1vYmlsZSAmJiAvKD86XnxcXHMpdWktbGluayg/OiR8XFxzKS8udGVzdCh0YXJnZXQuY2xhc3NOYW1lKSlcbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBoYXNoID0gbGlua3NUb0N1cnJlbnRQYWdlKHRhcmdldCkgPyB0YXJnZXQuaGFzaCA6ICcnO1xuICAgICAgaWYgKGhhc2ggPT09ICcnKSByZXR1cm47XG5cbiAgICAgIHZhciAkZWwgPSAkKGhhc2gpO1xuICAgICAgaWYgKCEkZWwubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2dCkge1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGVIaXN0b3J5KGhhc2gsIGV2dCk7XG5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2Nyb2xsKCRlbCwgZnVuY3Rpb24gc2V0Rm9jdXMoKSB7XG4gICAgICAgICAgICBzZXRGb2N1c2FibGUoJGVsLCAnYWRkJyk7XG4gICAgICAgICAgICAkZWwuZ2V0KDApLmZvY3VzKHtwcmV2ZW50U2Nyb2xsOiB0cnVlfSk7XG4gICAgICAgICAgICBzZXRGb2N1c2FibGUoJGVsLCAncmVtb3ZlJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGV2dCA/IDAgOiAzMDBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlSGlzdG9yeShoYXNoKSB7XG4gICAgICAvLyBQdXNoIG5ldyBoaXN0b3J5IHN0YXRlXG4gICAgICBpZiAoXG4gICAgICAgIGxvYy5oYXNoICE9PSBoYXNoICYmXG4gICAgICAgIGhpc3RvcnkgJiZcbiAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUgJiZcbiAgICAgICAgLy8gTmF2aWdhdGlvbiBicmVha3MgQ2hyb21lIHdoZW4gdGhlIHByb3RvY29sIGlzIGBmaWxlOmAuXG4gICAgICAgICEoV2ViZmxvdy5lbnYuY2hyb21lICYmIGxvYy5wcm90b2NvbCA9PT0gJ2ZpbGU6JylcbiAgICAgICkge1xuICAgICAgICB2YXIgb2xkSGFzaCA9IGhpc3Rvcnkuc3RhdGUgJiYgaGlzdG9yeS5zdGF0ZS5oYXNoO1xuICAgICAgICBpZiAob2xkSGFzaCAhPT0gaGFzaCkge1xuICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHtoYXNofSwgJycsIGhhc2gpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsKCR0YXJnZXRFbCwgY2IpIHtcbiAgICAgIHZhciBzdGFydCA9ICR3aW4uc2Nyb2xsVG9wKCk7XG4gICAgICB2YXIgZW5kID0gY2FsY3VsYXRlU2Nyb2xsRW5kUG9zaXRpb24oJHRhcmdldEVsKTtcblxuICAgICAgaWYgKHN0YXJ0ID09PSBlbmQpIHJldHVybjtcblxuICAgICAgdmFyIGR1cmF0aW9uID0gY2FsY3VsYXRlU2Nyb2xsRHVyYXRpb24oJHRhcmdldEVsLCBzdGFydCwgZW5kKTtcblxuICAgICAgdmFyIGNsb2NrID0gRGF0ZS5ub3coKTtcbiAgICAgIHZhciBzdGVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWxhcHNlZCA9IERhdGUubm93KCkgLSBjbG9jaztcbiAgICAgICAgd2luZG93LnNjcm9sbCgwLCBnZXRZKHN0YXJ0LCBlbmQsIGVsYXBzZWQsIGR1cmF0aW9uKSk7XG5cbiAgICAgICAgaWYgKGVsYXBzZWQgPD0gZHVyYXRpb24pIHtcbiAgICAgICAgICBhbmltYXRlKHN0ZXApO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNiKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGFuaW1hdGUoc3RlcCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlU2Nyb2xsRW5kUG9zaXRpb24oJHRhcmdldEVsKSB7XG4gICAgICAvLyBJZiBhIGZpeGVkIGhlYWRlciBleGlzdHMsIG9mZnNldCBmb3IgdGhlIGhlaWdodFxuICAgICAgdmFyICRoZWFkZXIgPSAkKGhlYWRlclNlbGVjdG9yKTtcbiAgICAgIHZhciBvZmZzZXRZID1cbiAgICAgICAgJGhlYWRlci5jc3MoJ3Bvc2l0aW9uJykgPT09ICdmaXhlZCcgPyAkaGVhZGVyLm91dGVySGVpZ2h0KCkgOiAwO1xuICAgICAgdmFyIGVuZCA9ICR0YXJnZXRFbC5vZmZzZXQoKS50b3AgLSBvZmZzZXRZO1xuXG4gICAgICAvLyBJZiBzcGVjaWZpZWQsIHNjcm9sbCBzbyB0aGF0IHRoZSBlbGVtZW50IGVuZHMgdXAgaW4gdGhlIG1pZGRsZSBvZiB0aGUgdmlld3BvcnRcbiAgICAgIGlmICgkdGFyZ2V0RWwuZGF0YSgnc2Nyb2xsJykgPT09ICdtaWQnKSB7XG4gICAgICAgIHZhciBhdmFpbGFibGUgPSAkd2luLmhlaWdodCgpIC0gb2Zmc2V0WTtcbiAgICAgICAgdmFyIGVsSGVpZ2h0ID0gJHRhcmdldEVsLm91dGVySGVpZ2h0KCk7XG4gICAgICAgIGlmIChlbEhlaWdodCA8IGF2YWlsYWJsZSkge1xuICAgICAgICAgIGVuZCAtPSBNYXRoLnJvdW5kKChhdmFpbGFibGUgLSBlbEhlaWdodCkgLyAyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVuZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVTY3JvbGxEdXJhdGlvbigkdGFyZ2V0RWwsIHN0YXJ0LCBlbmQpIHtcbiAgICAgIGlmIChyZWR1Y2VkTW90aW9uRW5hYmxlZCgpKSByZXR1cm4gMDtcblxuICAgICAgdmFyIG11bHQgPSAxO1xuICAgICAgLy8gQ2hlY2sgZm9yIGN1c3RvbSB0aW1lIG11bHRpcGxpZXIgb24gdGhlIGJvZHkgYW5kIHRoZSBzY3JvbGwgdGFyZ2V0XG4gICAgICAkYm9keS5hZGQoJHRhcmdldEVsKS5lYWNoKGZ1bmN0aW9uIChfLCBlbCkge1xuICAgICAgICB2YXIgdGltZSA9IHBhcnNlRmxvYXQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXNjcm9sbC10aW1lJykpO1xuICAgICAgICBpZiAoIWlzTmFOKHRpbWUpICYmIHRpbWUgPj0gMCkge1xuICAgICAgICAgIG11bHQgPSB0aW1lO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuICg0NzIuMTQzICogTWF0aC5sb2coTWF0aC5hYnMoc3RhcnQgLSBlbmQpICsgMTI1KSAtIDIwMDApICogbXVsdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRZKHN0YXJ0LCBlbmQsIGVsYXBzZWQsIGR1cmF0aW9uKSB7XG4gICAgICBpZiAoZWxhcHNlZCA+IGR1cmF0aW9uKSB7XG4gICAgICAgIHJldHVybiBlbmQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGFydCArIChlbmQgLSBzdGFydCkgKiBlYXNlKGVsYXBzZWQgLyBkdXJhdGlvbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZWFzZSh0KSB7XG4gICAgICByZXR1cm4gdCA8IDAuNSA/IDQgKiB0ICogdCAqIHQgOiAodCAtIDEpICogKDIgKiB0IC0gMikgKiAoMiAqIHQgLSAyKSArIDE7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlYWR5KCkge1xuICAgICAgdmFyIHtXRl9DTElDS19FTVBUWSwgV0ZfQ0xJQ0tfU0NST0xMfSA9IE5TX0VWRU5UUztcblxuICAgICAgJGRvYy5vbihXRl9DTElDS19TQ1JPTEwsIGxvY2FsSHJlZlNlbGVjdG9yLCB2YWxpZGF0ZVNjcm9sbCk7XG5cbiAgICAgIC8qKlxuICAgICAgICogUHJldmVudCBlbXB0eSBoYXNoIGxpbmtzIGZyb20gdHJpZ2dlcmluZyBzY3JvbGwuXG4gICAgICAgKiBMZWdhY3kgZmVhdHVyZSB0byBwcmVzZXJ2ZTogdXNlIHRoZSBkZWZhdWx0IFwiI1wiIGxpbmtcbiAgICAgICAqIHRvIHRyaWdnZXIgYW4gaW50ZXJhY3Rpb24sIGFuZCBkbyBub3Qgd2FudCB0aGUgcGFnZVxuICAgICAgICogdG8gc2Nyb2xsIHRvIHRoZSB0b3AuXG4gICAgICAgKi9cbiAgICAgICRkb2Mub24oV0ZfQ0xJQ0tfRU1QVFksIGVtcHR5SHJlZlNlbGVjdG9yLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUoZm9jdXNTdHlsZXNFbCwgZG9jdW1lbnQuaGVhZC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICAvLyBFeHBvcnQgbW9kdWxlXG4gICAgcmV0dXJuIHtyZWFkeX07XG4gIH0pXG4pO1xuIl0sIm5hbWVzIjpbIldlYmZsb3ciLCJyZXF1aXJlIiwiZGVmaW5lIiwibW9kdWxlIiwiZXhwb3J0cyIsIiQiLCJOU19FVkVOVFMiLCJXRl9DTElDS19FTVBUWSIsIldGX0NMSUNLX1NDUk9MTCIsImxvYyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGlzdG9yeSIsImluSWZyYW1lIiwiJHdpbiIsIiRkb2MiLCJkb2N1bWVudCIsIiRib2R5IiwiYm9keSIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmbiIsInNldFRpbWVvdXQiLCJyb290VGFnIiwiZW52IiwiaGVhZGVyU2VsZWN0b3IiLCJlbXB0eUhyZWZTZWxlY3RvciIsImxvY2FsSHJlZlNlbGVjdG9yIiwic2Nyb2xsVGFyZ2V0T3V0bGluZUNTUyIsImZvY3VzU3R5bGVzRWwiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsIkJvb2xlYW4iLCJmcmFtZUVsZW1lbnQiLCJlIiwidmFsaWRIYXNoIiwibGlua3NUb0N1cnJlbnRQYWdlIiwibGluayIsInRlc3QiLCJoYXNoIiwiaG9zdCIsInBhdGhuYW1lIiwicmVkdWNlZE1vdGlvbk1lZGlhUXVlcnkiLCJtYXRjaE1lZGlhIiwicmVkdWNlZE1vdGlvbkVuYWJsZWQiLCJnZXRBdHRyaWJ1dGUiLCJtYXRjaGVzIiwic2V0Rm9jdXNhYmxlIiwiJGVsIiwiYWN0aW9uIiwiaW5pdGlhbFRhYmluZGV4IiwiYXR0ciIsInJlbW92ZUF0dHIiLCJ0b2dnbGVDbGFzcyIsInZhbGlkYXRlU2Nyb2xsIiwiZXZ0IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIm1vYmlsZSIsImNsYXNzTmFtZSIsImxlbmd0aCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidXBkYXRlSGlzdG9yeSIsInNjcm9sbCIsInNldEZvY3VzIiwiZ2V0IiwiZm9jdXMiLCJwcmV2ZW50U2Nyb2xsIiwicHVzaFN0YXRlIiwiY2hyb21lIiwicHJvdG9jb2wiLCJvbGRIYXNoIiwic3RhdGUiLCIkdGFyZ2V0RWwiLCJjYiIsInN0YXJ0Iiwic2Nyb2xsVG9wIiwiZW5kIiwiY2FsY3VsYXRlU2Nyb2xsRW5kUG9zaXRpb24iLCJkdXJhdGlvbiIsImNhbGN1bGF0ZVNjcm9sbER1cmF0aW9uIiwiY2xvY2siLCJEYXRlIiwibm93Iiwic3RlcCIsImVsYXBzZWQiLCJnZXRZIiwiJGhlYWRlciIsIm9mZnNldFkiLCJjc3MiLCJvdXRlckhlaWdodCIsIm9mZnNldCIsInRvcCIsImRhdGEiLCJhdmFpbGFibGUiLCJoZWlnaHQiLCJlbEhlaWdodCIsIk1hdGgiLCJyb3VuZCIsIm11bHQiLCJhZGQiLCJlYWNoIiwiXyIsImVsIiwidGltZSIsInBhcnNlRmxvYXQiLCJpc05hTiIsImxvZyIsImFicyIsImVhc2UiLCJ0IiwicmVhZHkiLCJvbiIsImhlYWQiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIl0sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEIsR0FFNUI7O0NBRUM7QUFFRCxJQUFJQSxVQUFVQyxRQUFRO0FBRXRCRCxRQUFRRSxNQUFNLENBQ1osVUFDQ0MsT0FBT0MsT0FBTyxHQUFHLFNBQVVDLENBQUM7SUFDM0I7Ozs7OztLQU1DLEdBQ0QsSUFBSUMsWUFBWTtRQUNkQyxnQkFBZ0I7UUFDaEJDLGlCQUFpQjtJQUNuQjtJQUVBLElBQUlDLE1BQU1DLE9BQU9DLFFBQVE7SUFDekIsSUFBSUMsVUFBVUMsYUFBYSxPQUFPSCxPQUFPRSxPQUFPO0lBQ2hELElBQUlFLE9BQU9ULEVBQUVLO0lBQ2IsSUFBSUssT0FBT1YsRUFBRVc7SUFDYixJQUFJQyxRQUFRWixFQUFFVyxTQUFTRSxJQUFJO0lBRTNCLElBQUlDLFVBQ0ZULE9BQU9VLHFCQUFxQixJQUM1QlYsT0FBT1csd0JBQXdCLElBQy9CWCxPQUFPWSwyQkFBMkIsSUFDbEMsU0FBVUMsRUFBRTtRQUNWYixPQUFPYyxVQUFVLENBQUNELElBQUk7SUFDeEI7SUFDRixJQUFJRSxVQUFVekIsUUFBUTBCLEdBQUcsQ0FBQyxZQUFZLG1CQUFtQjtJQUN6RCxJQUFJQyxpQkFDRixhQUNBRixVQUNBLGlCQUNBQSxVQUNBO0lBRUYsSUFBSUcsb0JBQW9CO0lBRXhCOzs7OztLQUtDLEdBQ0QsSUFBSUMsb0JBQ0YsdUNBQXVDRCxvQkFBb0I7SUFFN0QsSUFBSUUseUJBQ0Y7SUFFRixJQUFJQyxn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

}),
3695: (function (module, __unused_webpack_exports, __webpack_require__) {
/* globals document, window */ /**
 * Webflow: Touch events
 * Supports legacy 'tap' event
 * Adds a 'swipe' event to desktop and mobile
 */ 
var Webflow = __webpack_require__(3949);
Webflow.define('touch', module.exports = function($) {
    var api = {};
    var getSelection = window.getSelection;
    // Delegate all legacy 'tap' events to 'click'
    $.event.special.tap = {
        bindType: 'click',
        delegateType: 'click'
    };
    api.init = function(el) {
        el = typeof el === 'string' ? $(el).get(0) : el;
        return el ? new Touch(el) : null;
    };
    function Touch(el) {
        var active = false;
        var useTouch = false;
        var thresholdX = Math.min(Math.round(window.innerWidth * 0.04), 40);
        var startX;
        var lastX;
        el.addEventListener('touchstart', start, false);
        el.addEventListener('touchmove', move, false);
        el.addEventListener('touchend', end, false);
        el.addEventListener('touchcancel', cancel, false);
        el.addEventListener('mousedown', start, false);
        el.addEventListener('mousemove', move, false);
        el.addEventListener('mouseup', end, false);
        el.addEventListener('mouseout', cancel, false);
        function start(evt) {
            // We don’t handle multi-touch events yet.
            var touches = evt.touches;
            if (touches && touches.length > 1) {
                return;
            }
            active = true;
            if (touches) {
                useTouch = true;
                startX = touches[0].clientX;
            } else {
                startX = evt.clientX;
            }
            lastX = startX;
        }
        function move(evt) {
            if (!active) {
                return;
            }
            if (useTouch && evt.type === 'mousemove') {
                evt.preventDefault();
                evt.stopPropagation();
                return;
            }
            var touches = evt.touches;
            var x = touches ? touches[0].clientX : evt.clientX;
            var velocityX = x - lastX;
            lastX = x;
            // Allow swipes while pointer is down, but prevent them during text selection
            if (Math.abs(velocityX) > thresholdX && getSelection && String(getSelection()) === '') {
                triggerEvent('swipe', evt, {
                    direction: velocityX > 0 ? 'right' : 'left'
                });
                cancel();
            }
        }
        function end(evt) {
            if (!active) {
                return;
            }
            active = false;
            if (useTouch && evt.type === 'mouseup') {
                evt.preventDefault();
                evt.stopPropagation();
                useTouch = false;
                return;
            }
        }
        function cancel() {
            active = false;
        }
        function destroy() {
            el.removeEventListener('touchstart', start, false);
            el.removeEventListener('touchmove', move, false);
            el.removeEventListener('touchend', end, false);
            el.removeEventListener('touchcancel', cancel, false);
            el.removeEventListener('mousedown', start, false);
            el.removeEventListener('mousemove', move, false);
            el.removeEventListener('mouseup', end, false);
            el.removeEventListener('mouseout', cancel, false);
            el = null;
        }
        // Public instance methods
        this.destroy = destroy;
    }
    // Wrap native event to supoprt preventdefault + stopPropagation
    function triggerEvent(type, evt, data) {
        var newEvent = $.Event(type, {
            originalEvent: evt
        });
        $(evt.target).trigger(newEvent, data);
    }
    // Listen for touch events on all nodes by default.
    api.instance = api.init(document);
    // Export module
    return api;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3NoYXJlZC9yZW5kZXIvcGx1Z2lucy9CYXNlU2l0ZU1vZHVsZXMvd2ViZmxvdy10b3VjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWxzIGRvY3VtZW50LCB3aW5kb3cgKi9cblxuLyoqXG4gKiBXZWJmbG93OiBUb3VjaCBldmVudHNcbiAqIFN1cHBvcnRzIGxlZ2FjeSAndGFwJyBldmVudFxuICogQWRkcyBhICdzd2lwZScgZXZlbnQgdG8gZGVza3RvcCBhbmQgbW9iaWxlXG4gKi9cblxudmFyIFdlYmZsb3cgPSByZXF1aXJlKCcuL3dlYmZsb3ctbGliJyk7XG5cbldlYmZsb3cuZGVmaW5lKFxuICAndG91Y2gnLFxuICAobW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJCkge1xuICAgIHZhciBhcGkgPSB7fTtcbiAgICB2YXIgZ2V0U2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbjtcblxuICAgIC8vIERlbGVnYXRlIGFsbCBsZWdhY3kgJ3RhcCcgZXZlbnRzIHRvICdjbGljaydcbiAgICAkLmV2ZW50LnNwZWNpYWwudGFwID0ge2JpbmRUeXBlOiAnY2xpY2snLCBkZWxlZ2F0ZVR5cGU6ICdjbGljayd9O1xuXG4gICAgYXBpLmluaXQgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGVsID0gdHlwZW9mIGVsID09PSAnc3RyaW5nJyA/ICQoZWwpLmdldCgwKSA6IGVsO1xuICAgICAgcmV0dXJuIGVsID8gbmV3IFRvdWNoKGVsKSA6IG51bGw7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIFRvdWNoKGVsKSB7XG4gICAgICB2YXIgYWN0aXZlID0gZmFsc2U7XG4gICAgICB2YXIgdXNlVG91Y2ggPSBmYWxzZTtcbiAgICAgIHZhciB0aHJlc2hvbGRYID0gTWF0aC5taW4oTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJXaWR0aCAqIDAuMDQpLCA0MCk7XG4gICAgICB2YXIgc3RhcnRYO1xuICAgICAgdmFyIGxhc3RYO1xuXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc3RhcnQsIGZhbHNlKTtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG1vdmUsIGZhbHNlKTtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZW5kLCBmYWxzZSk7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIGNhbmNlbCwgZmFsc2UpO1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc3RhcnQsIGZhbHNlKTtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdmUsIGZhbHNlKTtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlbmQsIGZhbHNlKTtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgY2FuY2VsLCBmYWxzZSk7XG5cbiAgICAgIGZ1bmN0aW9uIHN0YXJ0KGV2dCkge1xuICAgICAgICAvLyBXZSBkb27igJl0IGhhbmRsZSBtdWx0aS10b3VjaCBldmVudHMgeWV0LlxuICAgICAgICB2YXIgdG91Y2hlcyA9IGV2dC50b3VjaGVzO1xuICAgICAgICBpZiAodG91Y2hlcyAmJiB0b3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0b3VjaGVzKSB7XG4gICAgICAgICAgdXNlVG91Y2ggPSB0cnVlO1xuICAgICAgICAgIHN0YXJ0WCA9IHRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGFydFggPSBldnQuY2xpZW50WDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3RYID0gc3RhcnRYO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBtb3ZlKGV2dCkge1xuICAgICAgICBpZiAoIWFjdGl2ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1c2VUb3VjaCAmJiBldnQudHlwZSA9PT0gJ21vdXNlbW92ZScpIHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRvdWNoZXMgPSBldnQudG91Y2hlcztcbiAgICAgICAgdmFyIHggPSB0b3VjaGVzID8gdG91Y2hlc1swXS5jbGllbnRYIDogZXZ0LmNsaWVudFg7XG4gICAgICAgIHZhciB2ZWxvY2l0eVggPSB4IC0gbGFzdFg7XG5cbiAgICAgICAgbGFzdFggPSB4O1xuXG4gICAgICAgIC8vIEFsbG93IHN3aXBlcyB3aGlsZSBwb2ludGVyIGlzIGRvd24sIGJ1dCBwcmV2ZW50IHRoZW0gZHVyaW5nIHRleHQgc2VsZWN0aW9uXG4gICAgICAgIGlmIChcbiAgICAgICAgICBNYXRoLmFicyh2ZWxvY2l0eVgpID4gdGhyZXNob2xkWCAmJlxuICAgICAgICAgIGdldFNlbGVjdGlvbiAmJlxuICAgICAgICAgIFN0cmluZyhnZXRTZWxlY3Rpb24oKSkgPT09ICcnXG4gICAgICAgICkge1xuICAgICAgICAgIHRyaWdnZXJFdmVudCgnc3dpcGUnLCBldnQsIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogdmVsb2NpdHlYID4gMCA/ICdyaWdodCcgOiAnbGVmdCcsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZW5kKGV2dCkge1xuICAgICAgICBpZiAoIWFjdGl2ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICBpZiAodXNlVG91Y2ggJiYgZXZ0LnR5cGUgPT09ICdtb3VzZXVwJykge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB1c2VUb3VjaCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc3RhcnQsIGZhbHNlKTtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgbW92ZSwgZmFsc2UpO1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGVuZCwgZmFsc2UpO1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIGNhbmNlbCwgZmFsc2UpO1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzdGFydCwgZmFsc2UpO1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlLCBmYWxzZSk7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlbmQsIGZhbHNlKTtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBjYW5jZWwsIGZhbHNlKTtcbiAgICAgICAgZWwgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBQdWJsaWMgaW5zdGFuY2UgbWV0aG9kc1xuICAgICAgdGhpcy5kZXN0cm95ID0gZGVzdHJveTtcbiAgICB9XG5cbiAgICAvLyBXcmFwIG5hdGl2ZSBldmVudCB0byBzdXBvcHJ0IHByZXZlbnRkZWZhdWx0ICsgc3RvcFByb3BhZ2F0aW9uXG4gICAgZnVuY3Rpb24gdHJpZ2dlckV2ZW50KHR5cGUsIGV2dCwgZGF0YSkge1xuICAgICAgdmFyIG5ld0V2ZW50ID0gJC5FdmVudCh0eXBlLCB7b3JpZ2luYWxFdmVudDogZXZ0fSk7XG4gICAgICAkKGV2dC50YXJnZXQpLnRyaWdnZXIobmV3RXZlbnQsIGRhdGEpO1xuICAgIH1cblxuICAgIC8vIExpc3RlbiBmb3IgdG91Y2ggZXZlbnRzIG9uIGFsbCBub2RlcyBieSBkZWZhdWx0LlxuICAgIGFwaS5pbnN0YW5jZSA9IGFwaS5pbml0KGRvY3VtZW50KTtcblxuICAgIC8vIEV4cG9ydCBtb2R1bGVcbiAgICByZXR1cm4gYXBpO1xuICB9KVxuKTtcbiJdLCJuYW1lcyI6WyJXZWJmbG93IiwicmVxdWlyZSIsImRlZmluZSIsIm1vZHVsZSIsImV4cG9ydHMiLCIkIiwiYXBpIiwiZ2V0U2VsZWN0aW9uIiwid2luZG93IiwiZXZlbnQiLCJzcGVjaWFsIiwidGFwIiwiYmluZFR5cGUiLCJkZWxlZ2F0ZVR5cGUiLCJpbml0IiwiZWwiLCJnZXQiLCJUb3VjaCIsImFjdGl2ZSIsInVzZVRvdWNoIiwidGhyZXNob2xkWCIsIk1hdGgiLCJtaW4iLCJyb3VuZCIsImlubmVyV2lkdGgiLCJzdGFydFgiLCJsYXN0WCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydCIsIm1vdmUiLCJlbmQiLCJjYW5jZWwiLCJldnQiLCJ0b3VjaGVzIiwibGVuZ3RoIiwiY2xpZW50WCIsInR5cGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIngiLCJ2ZWxvY2l0eVgiLCJhYnMiLCJTdHJpbmciLCJ0cmlnZ2VyRXZlbnQiLCJkaXJlY3Rpb24iLCJkZXN0cm95IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRhdGEiLCJuZXdFdmVudCIsIkV2ZW50Iiwib3JpZ2luYWxFdmVudCIsInRhcmdldCIsInRyaWdnZXIiLCJpbnN0YW5jZSIsImRvY3VtZW50Il0sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEIsR0FFNUI7Ozs7Q0FJQztBQUVELElBQUlBLFVBQVVDLFFBQVE7QUFFdEJELFFBQVFFLE1BQU0sQ0FDWixTQUNDQyxPQUFPQyxPQUFPLEdBQUcsU0FBVUMsQ0FBQztJQUMzQixJQUFJQyxNQUFNLENBQUM7SUFDWCxJQUFJQyxlQUFlQyxPQUFPRCxZQUFZO0lBRXRDLDhDQUE4QztJQUM5Q0YsRUFBRUksS0FBSyxDQUFDQyxPQUFPLENBQUNDLEdBQUcsR0FBRztRQUFDQyxVQUFVO1FBQVNDLGNBQWM7SUFBTztJQUUvRFAsSUFBSVEsSUFBSSxHQUFHLFNBQVVDLEVBQUU7UUFDckJBLEtBQUssT0FBT0EsT0FBTyxXQUFXVixFQUFFVSxJQUFJQyxHQUFHLENBQUMsS0FBS0Q7UUFDN0MsT0FBT0EsS0FBSyxJQUFJRSxNQUFNRixNQUFNO0lBQzlCO0lBRUEsU0FBU0UsTUFBTUYsRUFBRTtRQUNmLElBQUlHLFNBQVM7UUFDYixJQUFJQyxXQUFXO1FBQ2YsSUFBSUMsYUFBYUMsS0FBS0MsR0FBRyxDQUFDRCxLQUFLRSxLQUFLLENBQUNmLE9BQU9nQixVQUFVLEdBQUcsT0FBTztRQUNoRSxJQUFJQztRQUNKLElBQUlDO1FBRUpYLEdBQUdZLGdCQUFnQixDQUFDLGNBQWNDLE9BQU87UUFDekNiLEdBQUdZLGdCQUFnQixDQUFDLGFBQWFFLE1BQU07UUFDdkNkLEdBQUdZLGdCQUFnQixDQUFDLFlBQVlHLEtBQUs7UUFDckNmLEdBQUdZLGdCQUFnQixDQUFDLGVBQWVJLFFBQVE7UUFDM0NoQixHQUFHWSxnQkFBZ0IsQ0FBQyxhQUFhQyxPQUFPO1FBQ3hDYixHQUFHWSxnQkFBZ0IsQ0FBQyxhQUFhRSxNQUFNO1FBQ3ZDZCxHQUFHWSxnQkFBZ0IsQ0FBQyxXQUFXRyxLQUFLO1FBQ3BDZixHQUFHWSxnQkFBZ0IsQ0FBQyxZQUFZSSxRQUFRO1FBRXhDLFNBQVNILE1BQU1JLEdBQUc7WUFDaEIsMENBQTBDO1lBQzFDLElBQUlDLFVBQVVELElBQUlDLE9BQU87WUFDekIsSUFBSUEsV0FBV0EsUUFBUUMsTUFBTSxHQUFHLEdBQUc7Z0JBQ2pDO1lBQ0Y7WUFFQWhCLFNBQVM7WUFFVCxJQUFJZSxTQUFTO2dCQUNYZCxXQUFXO2dCQUNYTSxTQUFTUSxPQUFPLENBQUMsRUFBRSxDQUFDRSxPQUFPO1lBQzdCLE9BQU87Z0JBQ0xWLFNBQVNPLElBQUlHLE9BQU87WUFDdEI7WUFFQVQsUUFBUUQ7UUFDVjtRQUVBLFNBQVNJLEtBQUtHLEdBQUc7WUFDZixJQUFJLENBQUNkLFFBQVE7Z0JBQ1g7WUFDRjtZQUVBLElBQUlDLFlBQVlhLElBQUlJLElBQUksS0FBSyxhQUFhO2dCQUN4Q0osSUFBSUssY0FBYztnQkFDbEJMLElBQUlNLGVBQWU7Z0JBQ25CO1lBQ0Y7WUFFQSxJQUFJTCxVQUFVRCxJQUFJQyxPQUFPO1lBQ3pCLElBQUlNLElBQUlOLFVBQVVBLE9BQU8sQ0FBQyxFQUFFLENBQUNFLE9BQU8sR0FBR0gsSUFBSUcsT0FBTztZQUNsRCxJQUFJSyxZQUFZRCxJQUFJYjtZQUVwQkEsUUFBUWE7WUFFUiw2RUFBNkU7WUFDN0UsSUFDRWxCLEtBQUtvQixHQUFHLENBQUNELGFBQWFwQixjQUN0QmIsZ0JBQ0FtQyxPQUFPbkMsb0JBQW9CLElBQzNCO2dCQUNBb0MsYUFBYSxTQUFTWCxLQUFLO29CQUN6QlksV0FBV0osWUFBWSxJQUFJLFVBQVU7Z0JBQ3ZDO2dCQUNBVDtZQUNGO1FBQ0Y7UUFFQSxTQUFTRCxJQUFJRSxHQUFHO1lBQ2QsSUFBSSxDQUFDZCxRQUFRO2dCQUNYO1lBQ0Y7WUFDQUEsU0FBUztZQUVULElBQUlDLFlBQVlhLElBQUlJLElBQUksS0FBSyxXQUFXO2dCQUN0Q0osSUFBSUssY0FBYztnQkFDbEJMLElBQUlNLGVBQWU7Z0JBQ25CbkIsV0FBVztnQkFDWDtZQUNGO1FBQ0Y7UUFFQSxTQUFTWTtZQUNQYixTQUFTO1FBQ1g7UUFFQSxTQUFTMkI7WUFDUDlCLEdBQUcrQixtQkFBbUIsQ0FBQyxjQUFjbEIsT0FBTztZQUM1Q2IsR0FBRytCLG1CQUFtQixDQUFDLGFBQWFqQixNQUFNO1lBQzFDZCxHQUFHK0IsbUJBQW1CLENBQUMsWUFBWWhCLEtBQUs7WUFDeENmLEdBQUcrQixtQkFBbUIsQ0FBQyxlQUFlZixRQUFRO1lBQzlDaEIsR0FBRytCLG1CQUFtQixDQUFDLGFBQWFsQixPQUFPO1lBQzNDYixHQUFHK0IsbUJBQW1CLENBQUMsYUFBYWpCLE1BQU07WUFDMUNkLEdBQUcrQixtQkFBbUIsQ0FBQyxXQUFXaEIsS0FBSztZQUN2Q2YsR0FBRytCLG1CQUFtQixDQUFDLFlBQVlmLFFBQVE7WUFDM0NoQixLQUFLO1FBQ1A7UUFFQSwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDOEIsT0FBTyxHQUFHQTtJQUNqQjtJQUVBLGdFQUFnRTtJQUNoRSxTQUFTRixhQUFhUCxJQUFJLEVBQUVKLEdBQUcsRUFBRWUsSUFBSTtRQUNuQyxJQUFJQyxXQUFXM0MsRUFBRTRDLEtBQUssQ0FBQ2IsTUFBTTtZQUFDYyxlQUFlbEI7UUFBRztRQUNoRDNCLEVBQUUyQixJQUFJbUIsTUFBTSxFQUFFQyxPQUFPLENBQUNKLFVBQVVEO0lBQ2xDO0lBRUEsbURBQW1EO0lBQ25EekMsSUFBSStDLFFBQVEsR0FBRy9DLElBQUlRLElBQUksQ0FBQ3dDO0lBRXhCLGdCQUFnQjtJQUNoQixPQUFPaEQ7QUFDVCJ9

}),
9858: (function (module, __unused_webpack_exports, __webpack_require__) {
/* globals window, document */ /**
 * Webflow: Dropdown component
 */ 
var Webflow = __webpack_require__(3949);
var IXEvents = __webpack_require__(5134);
const KEY_CODES = {
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    ESCAPE: 27,
    SPACE: 32,
    ENTER: 13,
    HOME: 36,
    END: 35
};
const IX3_COMPONENT_EVENT = 'IX3_COMPONENT_STATE_CHANGE';
function dispatchIx3ComponentEvent(element, state) {
    IXEvents.dispatchCustomEvent(element, IX3_COMPONENT_EVENT, {
        component: 'dropdown',
        state
    });
}
const FORCE_CLOSE = true;
/**
 * This pattern matches links that begin with a `#` AND have some alphanumeric
 * characters after it, including also hyphens and underscores
 *
 * Matches:
 * #foo
 * #999
 * #foo-bar_baz
 *
 * Does not match:
 * #
 */ const INTERNAL_PAGE_LINK_HASHES_PATTERN = /^#[a-zA-Z0-9\-_]+$/;
Webflow.define('dropdown', module.exports = function($, _) {
    var debounce = _.debounce;
    var api = {};
    var inApp = Webflow.env();
    var inPreview = false;
    var inDesigner;
    var touch = Webflow.env.touch;
    var namespace = '.w-dropdown';
    var openStateClassName = 'w--open';
    var ix = IXEvents.triggers;
    var defaultZIndex = 900; // @dropdown-depth
    var focusOutEvent = 'focusout' + namespace;
    var keydownEvent = 'keydown' + namespace;
    var mouseEnterEvent = 'mouseenter' + namespace;
    var mouseMoveEvent = 'mousemove' + namespace;
    var mouseLeaveEvent = 'mouseleave' + namespace;
    var mouseUpEvent = (touch ? 'click' : 'mouseup') + namespace;
    var closeEvent = 'w-close' + namespace;
    var settingEvent = 'setting' + namespace;
    var $doc = $(document);
    var $dropdowns;
    // -----------------------------------
    // Module methods
    api.ready = init;
    api.design = function() {
        // Close all when returning from preview
        if (inPreview) {
            closeAll();
        }
        inPreview = false;
        init();
    };
    api.preview = function() {
        inPreview = true;
        init();
    };
    // -----------------------------------
    // Private methods
    function init() {
        inDesigner = inApp && Webflow.env('design');
        // Find all instances on the page
        $dropdowns = $doc.find(namespace);
        $dropdowns.each(build);
    }
    function build(i, el) {
        var $el = $(el);
        // Store state in data
        var data = $.data(el, namespace);
        if (!data) {
            data = $.data(el, namespace, {
                open: false,
                el: $el,
                config: {},
                selectedIdx: -1
            });
        }
        data.toggle = data.el.children('.w-dropdown-toggle');
        data.list = data.el.children('.w-dropdown-list');
        data.links = data.list.find('a:not(.w-dropdown .w-dropdown a)');
        data.complete = complete(data);
        data.mouseLeave = makeMouseLeaveHandler(data);
        data.mouseUpOutside = outside(data);
        data.mouseMoveOutside = moveOutside(data);
        // Set config from data attributes
        configure(data);
        // Store the IDs of the toggle button & list
        var toggleId = data.toggle.attr('id');
        var listId = data.list.attr('id');
        // If user did not provide toggle ID, set it
        if (!toggleId) {
            toggleId = 'w-dropdown-toggle-' + i;
        }
        // If user did not provide list ID, set it
        if (!listId) {
            listId = 'w-dropdown-list-' + i;
        }
        // Add attributes to toggle element
        data.toggle.attr('id', toggleId);
        data.toggle.attr('aria-controls', listId);
        data.toggle.attr('aria-haspopup', 'menu');
        data.toggle.attr('aria-expanded', 'false');
        // Hide toggle icon from ATs
        data.toggle.find('.w-icon-dropdown-toggle').attr('aria-hidden', 'true');
        // If toggle element is not a button
        if (data.toggle.prop('tagName') !== 'BUTTON') {
            // Give it an appropriate role
            data.toggle.attr('role', 'button');
            // And give it a tabindex if user has not provided one
            if (!data.toggle.attr('tabindex')) {
                data.toggle.attr('tabindex', '0');
            }
        }
        // Add attributes to list element
        data.list.attr('id', listId);
        data.list.attr('aria-labelledby', toggleId);
        data.links.each(function(idx, link) {
            /**
         * In macOS Safari, links don't take focus on click unless they have
         * a tabindex. Without this, the dropdown will break.
         * @see https://gist.github.com/cvrebert/68659d0333a578d75372
         */ if (!link.hasAttribute('tabindex')) link.setAttribute('tabindex', '0');
            // We want to close the drop down if the href links somewhere internally
            // to the page
            if (INTERNAL_PAGE_LINK_HASHES_PATTERN.test(link.hash)) {
                link.addEventListener('click', close.bind(null, data));
            }
        });
        // Remove old events
        data.el.off(namespace);
        data.toggle.off(namespace);
        if (data.nav) {
            data.nav.off(namespace);
        }
        var initialToggler = makeToggler(data, FORCE_CLOSE);
        if (inDesigner) {
            data.el.on(settingEvent, makeSettingEventHandler(data));
        }
        if (!inDesigner) {
            // Close in preview mode and clean the data.hovering state
            if (inApp) {
                data.hovering = false;
                close(data);
            }
            if (data.config.hover) {
                data.toggle.on(mouseEnterEvent, makeMouseEnterHandler(data));
            }
            data.el.on(closeEvent, initialToggler);
            data.el.on(keydownEvent, makeDropdownKeydownHandler(data));
            data.el.on(focusOutEvent, makeDropdownFocusOutHandler(data));
            data.toggle.on(mouseUpEvent, initialToggler);
            data.toggle.on(keydownEvent, makeToggleKeydownHandler(data));
            data.nav = data.el.closest('.w-nav');
            data.nav.on(closeEvent, initialToggler);
        }
    }
    /**
     * Mutate the data object with a new config property
     */ function configure(data) {
        // Determine if z-index should be managed
        var zIndex = Number(data.el.css('z-index'));
        data.manageZ = zIndex === defaultZIndex || zIndex === defaultZIndex + 1;
        data.config = {
            hover: data.el.attr('data-hover') === 'true' && !touch,
            delay: data.el.attr('data-delay')
        };
    }
    function makeSettingEventHandler(data) {
        return function(evt, options) {
            options = options || {};
            configure(data);
            options.open === true && open(data);
            options.open === false && close(data, {
                immediate: true
            });
        };
    }
    function makeToggler(data, forceClose) {
        return debounce(function(evt) {
            if (data.open || evt && evt.type === 'w-close') {
                return close(data, {
                    forceClose
                });
            }
            open(data);
        });
    }
    function open(data) {
        if (data.open) {
            return;
        }
        closeOthers(data);
        data.open = true;
        data.list.addClass(openStateClassName);
        data.toggle.addClass(openStateClassName);
        data.toggle.attr('aria-expanded', 'true'); // ARIA
        ix.intro(0, data.el[0]);
        dispatchIx3ComponentEvent(data.el[0], 'open');
        Webflow.redraw.up();
        // Increase z-index to keep above other managed dropdowns
        data.manageZ && data.el.css('z-index', defaultZIndex + 1);
        // Listen for click outside events
        var isEditor = Webflow.env('editor');
        if (!inDesigner) {
            $doc.on(mouseUpEvent, data.mouseUpOutside);
        }
        if (data.hovering && !isEditor) {
            data.el.on(mouseLeaveEvent, data.mouseLeave);
        }
        if (data.hovering && isEditor) {
            $doc.on(mouseMoveEvent, data.mouseMoveOutside);
        }
        // Clear previous delay
        window.clearTimeout(data.delayId);
    }
    function close(data, { immediate, forceClose } = {}) {
        if (!data.open) {
            return;
        }
        // Do not close hover-based menus if currently hovering
        if (data.config.hover && data.hovering && !forceClose) {
            return;
        }
        data.toggle.attr('aria-expanded', 'false');
        data.open = false;
        var config = data.config;
        ix.outro(0, data.el[0]);
        dispatchIx3ComponentEvent(data.el[0], 'close');
        // Stop listening for click outside events
        $doc.off(mouseUpEvent, data.mouseUpOutside);
        $doc.off(mouseMoveEvent, data.mouseMoveOutside);
        data.el.off(mouseLeaveEvent, data.mouseLeave);
        // Clear previous delay
        window.clearTimeout(data.delayId);
        // Skip delay during immediate
        if (!config.delay || immediate) {
            return data.complete();
        }
        // Optionally wait for delay before close
        data.delayId = window.setTimeout(data.complete, config.delay);
    }
    function closeAll() {
        $doc.find(namespace).each(function(i, el) {
            $(el).triggerHandler(closeEvent);
        });
    }
    function closeOthers(data) {
        var self = data.el[0];
        $dropdowns.each(function(i, other) {
            var $other = $(other);
            if ($other.is(self) || $other.has(self).length) {
                return;
            }
            $other.triggerHandler(closeEvent);
        });
    }
    function outside(data) {
        // Unbind previous click handler if it exists
        if (data.mouseUpOutside) {
            $doc.off(mouseUpEvent, data.mouseUpOutside);
        }
        // Close menu when clicked outside
        return debounce(function(evt) {
            if (!data.open) {
                return;
            }
            var $target = $(evt.target);
            if ($target.closest('.w-dropdown-toggle').length) {
                return;
            }
            var isEventOutsideDropdowns = $.inArray(data.el[0], $target.parents(namespace)) === -1;
            var isEditor = Webflow.env('editor');
            if (isEventOutsideDropdowns) {
                if (isEditor) {
                    var isEventOnDetachedSvg = $target.parents().length === 1 && $target.parents('svg').length === 1;
                    var isEventOnHoverControls = $target.parents('.w-editor-bem-EditorHoverControls').length;
                    if (isEventOnDetachedSvg || isEventOnHoverControls) {
                        return;
                    }
                }
                close(data);
            }
        });
    }
    function complete(data) {
        return function() {
            data.list.removeClass(openStateClassName);
            data.toggle.removeClass(openStateClassName);
            // Reset z-index for managed dropdowns
            data.manageZ && data.el.css('z-index', '');
        };
    }
    function makeMouseEnterHandler(data) {
        return function() {
            data.hovering = true;
            open(data);
        };
    }
    function makeMouseLeaveHandler(data) {
        return function() {
            data.hovering = false;
            // We do not want the list to close upon mouseleave
            // if one of the links has focus
            if (!data.links.is(':focus')) {
                close(data);
            }
        };
    }
    function moveOutside(data) {
        return debounce(function(evt) {
            if (!data.open) {
                return;
            }
            var $target = $(evt.target);
            var isEventOutsideDropdowns = $.inArray(data.el[0], $target.parents(namespace)) === -1;
            if (isEventOutsideDropdowns) {
                var isEventOnHoverControls = $target.parents('.w-editor-bem-EditorHoverControls').length;
                var isEventOnHoverToolbar = $target.parents('.w-editor-bem-RTToolbar').length;
                var $editorOverlay = $('.w-editor-bem-EditorOverlay');
                var isDropdownInEdition = $editorOverlay.find('.w-editor-edit-outline').length || $editorOverlay.find('.w-editor-bem-RTToolbar').length;
                if (isEventOnHoverControls || isEventOnHoverToolbar || isDropdownInEdition) {
                    return;
                }
                data.hovering = false;
                close(data);
            }
        });
    }
    function makeDropdownKeydownHandler(data) {
        return function(evt) {
            // Don't respond to keyboard in designer or if the list is not open
            if (inDesigner || !data.open) {
                return;
            }
            // Realign selectedIdx with the menu item that is currently in focus.
            // We need this because we do not track the `Tab` key activity!
            data.selectedIdx = data.links.index(document.activeElement);
            // Evaluate item-selection logic
            switch(evt.keyCode){
                case KEY_CODES.HOME:
                    {
                        if (!data.open) return;
                        data.selectedIdx = 0;
                        focusSelectedLink(data);
                        return evt.preventDefault();
                    }
                case KEY_CODES.END:
                    {
                        if (!data.open) return;
                        data.selectedIdx = data.links.length - 1;
                        focusSelectedLink(data);
                        return evt.preventDefault();
                    }
                case KEY_CODES.ESCAPE:
                    {
                        close(data);
                        data.toggle.focus();
                        return evt.stopPropagation();
                    }
                case KEY_CODES.ARROW_RIGHT:
                case KEY_CODES.ARROW_DOWN:
                    {
                        data.selectedIdx = Math.min(data.links.length - 1, data.selectedIdx + 1);
                        focusSelectedLink(data);
                        return evt.preventDefault();
                    }
                case KEY_CODES.ARROW_LEFT:
                case KEY_CODES.ARROW_UP:
                    {
                        data.selectedIdx = Math.max(-1, data.selectedIdx - 1);
                        focusSelectedLink(data);
                        return evt.preventDefault();
                    }
            }
        };
    }
    function focusSelectedLink(data) {
        if (data.links[data.selectedIdx]) {
            data.links[data.selectedIdx].focus();
        }
    }
    function makeToggleKeydownHandler(data) {
        // We want to close immediately
        // if interacting via keyboard
        var toggler = makeToggler(data, FORCE_CLOSE);
        return function(evt) {
            if (inDesigner) return;
            // If the menu is not open, we don't want
            // the up or Down arrows to do anything
            if (!data.open) {
                switch(evt.keyCode){
                    case KEY_CODES.ARROW_UP:
                    case KEY_CODES.ARROW_DOWN:
                        {
                            return evt.stopPropagation();
                        }
                }
            }
            switch(evt.keyCode){
                case KEY_CODES.SPACE:
                case KEY_CODES.ENTER:
                    {
                        toggler();
                        evt.stopPropagation();
                        return evt.preventDefault();
                    }
            }
        };
    }
    function makeDropdownFocusOutHandler(data) {
        return debounce(function(evt) {
            var { relatedTarget, target } = evt;
            var menuEl = data.el[0];
            /**
         * Close menu
         * With focusout events, the `relatedTarget` is the element that will next receive focus.
         * @see: https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent/relatedTarget
         */ var menuContainsFocus = menuEl.contains(relatedTarget) || menuEl.contains(target);
            if (!menuContainsFocus) {
                close(data);
            }
            return evt.stopPropagation();
        });
    }
    // Export module
    return api;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3NoYXJlZC9yZW5kZXIvcGx1Z2lucy9Ecm9wZG93bi93ZWJmbG93LWRyb3Bkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbHMgd2luZG93LCBkb2N1bWVudCAqL1xuXG4vKipcbiAqIFdlYmZsb3c6IERyb3Bkb3duIGNvbXBvbmVudFxuICovXG5cbnZhciBXZWJmbG93ID0gcmVxdWlyZSgnLi4vQmFzZVNpdGVNb2R1bGVzL3dlYmZsb3ctbGliJyk7XG52YXIgSVhFdmVudHMgPSByZXF1aXJlKCcuLi9CYXNlU2l0ZU1vZHVsZXMvd2ViZmxvdy1peDItZXZlbnRzJyk7XG5cbmNvbnN0IEtFWV9DT0RFUyA9IHtcbiAgQVJST1dfTEVGVDogMzcsXG4gIEFSUk9XX1VQOiAzOCxcbiAgQVJST1dfUklHSFQ6IDM5LFxuICBBUlJPV19ET1dOOiA0MCxcbiAgRVNDQVBFOiAyNyxcbiAgU1BBQ0U6IDMyLFxuICBFTlRFUjogMTMsXG4gIEhPTUU6IDM2LFxuICBFTkQ6IDM1LFxufTtcblxuY29uc3QgSVgzX0NPTVBPTkVOVF9FVkVOVCA9ICdJWDNfQ09NUE9ORU5UX1NUQVRFX0NIQU5HRSc7XG5cbmZ1bmN0aW9uIGRpc3BhdGNoSXgzQ29tcG9uZW50RXZlbnQoZWxlbWVudCwgc3RhdGUpIHtcbiAgSVhFdmVudHMuZGlzcGF0Y2hDdXN0b21FdmVudChlbGVtZW50LCBJWDNfQ09NUE9ORU5UX0VWRU5ULCB7XG4gICAgY29tcG9uZW50OiAnZHJvcGRvd24nLFxuICAgIHN0YXRlLFxuICB9KTtcbn1cblxuY29uc3QgRk9SQ0VfQ0xPU0UgPSB0cnVlO1xuXG4vKipcbiAqIFRoaXMgcGF0dGVybiBtYXRjaGVzIGxpbmtzIHRoYXQgYmVnaW4gd2l0aCBhIGAjYCBBTkQgaGF2ZSBzb21lIGFscGhhbnVtZXJpY1xuICogY2hhcmFjdGVycyBhZnRlciBpdCwgaW5jbHVkaW5nIGFsc28gaHlwaGVucyBhbmQgdW5kZXJzY29yZXNcbiAqXG4gKiBNYXRjaGVzOlxuICogI2Zvb1xuICogIzk5OVxuICogI2Zvby1iYXJfYmF6XG4gKlxuICogRG9lcyBub3QgbWF0Y2g6XG4gKiAjXG4gKi9cbmNvbnN0IElOVEVSTkFMX1BBR0VfTElOS19IQVNIRVNfUEFUVEVSTiA9IC9eI1thLXpBLVowLTlcXC1fXSskLztcblxuV2ViZmxvdy5kZWZpbmUoXG4gICdkcm9wZG93bicsXG4gIChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkLCBfKSB7XG4gICAgdmFyIGRlYm91bmNlID0gXy5kZWJvdW5jZTtcblxuICAgIHZhciBhcGkgPSB7fTtcbiAgICB2YXIgaW5BcHAgPSBXZWJmbG93LmVudigpO1xuICAgIHZhciBpblByZXZpZXcgPSBmYWxzZTtcbiAgICB2YXIgaW5EZXNpZ25lcjtcbiAgICB2YXIgdG91Y2ggPSBXZWJmbG93LmVudi50b3VjaDtcbiAgICB2YXIgbmFtZXNwYWNlID0gJy53LWRyb3Bkb3duJztcbiAgICB2YXIgb3BlblN0YXRlQ2xhc3NOYW1lID0gJ3ctLW9wZW4nO1xuICAgIHZhciBpeCA9IElYRXZlbnRzLnRyaWdnZXJzO1xuICAgIHZhciBkZWZhdWx0WkluZGV4ID0gOTAwOyAvLyBAZHJvcGRvd24tZGVwdGhcblxuICAgIHZhciBmb2N1c091dEV2ZW50ID0gJ2ZvY3Vzb3V0JyArIG5hbWVzcGFjZTtcbiAgICB2YXIga2V5ZG93bkV2ZW50ID0gJ2tleWRvd24nICsgbmFtZXNwYWNlO1xuICAgIHZhciBtb3VzZUVudGVyRXZlbnQgPSAnbW91c2VlbnRlcicgKyBuYW1lc3BhY2U7XG4gICAgdmFyIG1vdXNlTW92ZUV2ZW50ID0gJ21vdXNlbW92ZScgKyBuYW1lc3BhY2U7XG4gICAgdmFyIG1vdXNlTGVhdmVFdmVudCA9ICdtb3VzZWxlYXZlJyArIG5hbWVzcGFjZTtcbiAgICB2YXIgbW91c2VVcEV2ZW50ID0gKHRvdWNoID8gJ2NsaWNrJyA6ICdtb3VzZXVwJykgKyBuYW1lc3BhY2U7XG5cbiAgICB2YXIgY2xvc2VFdmVudCA9ICd3LWNsb3NlJyArIG5hbWVzcGFjZTtcbiAgICB2YXIgc2V0dGluZ0V2ZW50ID0gJ3NldHRpbmcnICsgbmFtZXNwYWNlO1xuXG4gICAgdmFyICRkb2MgPSAkKGRvY3VtZW50KTtcbiAgICB2YXIgJGRyb3Bkb3ducztcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIE1vZHVsZSBtZXRob2RzXG5cbiAgICBhcGkucmVhZHkgPSBpbml0O1xuXG4gICAgYXBpLmRlc2lnbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIENsb3NlIGFsbCB3aGVuIHJldHVybmluZyBmcm9tIHByZXZpZXdcbiAgICAgIGlmIChpblByZXZpZXcpIHtcbiAgICAgICAgY2xvc2VBbGwoKTtcbiAgICAgIH1cbiAgICAgIGluUHJldmlldyA9IGZhbHNlO1xuICAgICAgaW5pdCgpO1xuICAgIH07XG5cbiAgICBhcGkucHJldmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGluUHJldmlldyA9IHRydWU7XG4gICAgICBpbml0KCk7XG4gICAgfTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gUHJpdmF0ZSBtZXRob2RzXG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgaW5EZXNpZ25lciA9IGluQXBwICYmIFdlYmZsb3cuZW52KCdkZXNpZ24nKTtcblxuICAgICAgLy8gRmluZCBhbGwgaW5zdGFuY2VzIG9uIHRoZSBwYWdlXG4gICAgICAkZHJvcGRvd25zID0gJGRvYy5maW5kKG5hbWVzcGFjZSk7XG4gICAgICAkZHJvcGRvd25zLmVhY2goYnVpbGQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1aWxkKGksIGVsKSB7XG4gICAgICB2YXIgJGVsID0gJChlbCk7XG5cbiAgICAgIC8vIFN0b3JlIHN0YXRlIGluIGRhdGFcbiAgICAgIHZhciBkYXRhID0gJC5kYXRhKGVsLCBuYW1lc3BhY2UpO1xuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSAkLmRhdGEoZWwsIG5hbWVzcGFjZSwge1xuICAgICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICAgIGVsOiAkZWwsXG4gICAgICAgICAgY29uZmlnOiB7fSxcbiAgICAgICAgICBzZWxlY3RlZElkeDogLTEsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZGF0YS50b2dnbGUgPSBkYXRhLmVsLmNoaWxkcmVuKCcudy1kcm9wZG93bi10b2dnbGUnKTtcbiAgICAgIGRhdGEubGlzdCA9IGRhdGEuZWwuY2hpbGRyZW4oJy53LWRyb3Bkb3duLWxpc3QnKTtcbiAgICAgIGRhdGEubGlua3MgPSBkYXRhLmxpc3QuZmluZCgnYTpub3QoLnctZHJvcGRvd24gLnctZHJvcGRvd24gYSknKTtcbiAgICAgIGRhdGEuY29tcGxldGUgPSBjb21wbGV0ZShkYXRhKTtcbiAgICAgIGRhdGEubW91c2VMZWF2ZSA9IG1ha2VNb3VzZUxlYXZlSGFuZGxlcihkYXRhKTtcbiAgICAgIGRhdGEubW91c2VVcE91dHNpZGUgPSBvdXRzaWRlKGRhdGEpO1xuICAgICAgZGF0YS5tb3VzZU1vdmVPdXRzaWRlID0gbW92ZU91dHNpZGUoZGF0YSk7XG5cbiAgICAgIC8vIFNldCBjb25maWcgZnJvbSBkYXRhIGF0dHJpYnV0ZXNcbiAgICAgIGNvbmZpZ3VyZShkYXRhKTtcblxuICAgICAgLy8gU3RvcmUgdGhlIElEcyBvZiB0aGUgdG9nZ2xlIGJ1dHRvbiAmIGxpc3RcbiAgICAgIHZhciB0b2dnbGVJZCA9IGRhdGEudG9nZ2xlLmF0dHIoJ2lkJyk7XG4gICAgICB2YXIgbGlzdElkID0gZGF0YS5saXN0LmF0dHIoJ2lkJyk7XG5cbiAgICAgIC8vIElmIHVzZXIgZGlkIG5vdCBwcm92aWRlIHRvZ2dsZSBJRCwgc2V0IGl0XG4gICAgICBpZiAoIXRvZ2dsZUlkKSB7XG4gICAgICAgIHRvZ2dsZUlkID0gJ3ctZHJvcGRvd24tdG9nZ2xlLScgKyBpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB1c2VyIGRpZCBub3QgcHJvdmlkZSBsaXN0IElELCBzZXQgaXRcbiAgICAgIGlmICghbGlzdElkKSB7XG4gICAgICAgIGxpc3RJZCA9ICd3LWRyb3Bkb3duLWxpc3QtJyArIGk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBhdHRyaWJ1dGVzIHRvIHRvZ2dsZSBlbGVtZW50XG4gICAgICBkYXRhLnRvZ2dsZS5hdHRyKCdpZCcsIHRvZ2dsZUlkKTtcbiAgICAgIGRhdGEudG9nZ2xlLmF0dHIoJ2FyaWEtY29udHJvbHMnLCBsaXN0SWQpO1xuICAgICAgZGF0YS50b2dnbGUuYXR0cignYXJpYS1oYXNwb3B1cCcsICdtZW51Jyk7XG4gICAgICBkYXRhLnRvZ2dsZS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgIC8vIEhpZGUgdG9nZ2xlIGljb24gZnJvbSBBVHNcbiAgICAgIGRhdGEudG9nZ2xlLmZpbmQoJy53LWljb24tZHJvcGRvd24tdG9nZ2xlJykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICAvLyBJZiB0b2dnbGUgZWxlbWVudCBpcyBub3QgYSBidXR0b25cbiAgICAgIGlmIChkYXRhLnRvZ2dsZS5wcm9wKCd0YWdOYW1lJykgIT09ICdCVVRUT04nKSB7XG4gICAgICAgIC8vIEdpdmUgaXQgYW4gYXBwcm9wcmlhdGUgcm9sZVxuICAgICAgICBkYXRhLnRvZ2dsZS5hdHRyKCdyb2xlJywgJ2J1dHRvbicpO1xuXG4gICAgICAgIC8vIEFuZCBnaXZlIGl0IGEgdGFiaW5kZXggaWYgdXNlciBoYXMgbm90IHByb3ZpZGVkIG9uZVxuICAgICAgICBpZiAoIWRhdGEudG9nZ2xlLmF0dHIoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICBkYXRhLnRvZ2dsZS5hdHRyKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQWRkIGF0dHJpYnV0ZXMgdG8gbGlzdCBlbGVtZW50XG4gICAgICBkYXRhLmxpc3QuYXR0cignaWQnLCBsaXN0SWQpO1xuICAgICAgZGF0YS5saXN0LmF0dHIoJ2FyaWEtbGFiZWxsZWRieScsIHRvZ2dsZUlkKTtcblxuICAgICAgZGF0YS5saW5rcy5lYWNoKGZ1bmN0aW9uIChpZHgsIGxpbmspIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluIG1hY09TIFNhZmFyaSwgbGlua3MgZG9uJ3QgdGFrZSBmb2N1cyBvbiBjbGljayB1bmxlc3MgdGhleSBoYXZlXG4gICAgICAgICAqIGEgdGFiaW5kZXguIFdpdGhvdXQgdGhpcywgdGhlIGRyb3Bkb3duIHdpbGwgYnJlYWsuXG4gICAgICAgICAqIEBzZWUgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vY3ZyZWJlcnQvNjg2NTlkMDMzM2E1NzhkNzUzNzJcbiAgICAgICAgICovXG4gICAgICAgIGlmICghbGluay5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIGxpbmsuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG5cbiAgICAgICAgLy8gV2Ugd2FudCB0byBjbG9zZSB0aGUgZHJvcCBkb3duIGlmIHRoZSBocmVmIGxpbmtzIHNvbWV3aGVyZSBpbnRlcm5hbGx5XG4gICAgICAgIC8vIHRvIHRoZSBwYWdlXG4gICAgICAgIGlmIChJTlRFUk5BTF9QQUdFX0xJTktfSEFTSEVTX1BBVFRFUk4udGVzdChsaW5rLmhhc2gpKSB7XG4gICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlLmJpbmQobnVsbCwgZGF0YSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gUmVtb3ZlIG9sZCBldmVudHNcbiAgICAgIGRhdGEuZWwub2ZmKG5hbWVzcGFjZSk7XG4gICAgICBkYXRhLnRvZ2dsZS5vZmYobmFtZXNwYWNlKTtcblxuICAgICAgaWYgKGRhdGEubmF2KSB7XG4gICAgICAgIGRhdGEubmF2Lm9mZihuYW1lc3BhY2UpO1xuICAgICAgfVxuICAgICAgdmFyIGluaXRpYWxUb2dnbGVyID0gbWFrZVRvZ2dsZXIoZGF0YSwgRk9SQ0VfQ0xPU0UpO1xuXG4gICAgICBpZiAoaW5EZXNpZ25lcikge1xuICAgICAgICBkYXRhLmVsLm9uKHNldHRpbmdFdmVudCwgbWFrZVNldHRpbmdFdmVudEhhbmRsZXIoZGF0YSkpO1xuICAgICAgfVxuICAgICAgaWYgKCFpbkRlc2lnbmVyKSB7XG4gICAgICAgIC8vIENsb3NlIGluIHByZXZpZXcgbW9kZSBhbmQgY2xlYW4gdGhlIGRhdGEuaG92ZXJpbmcgc3RhdGVcbiAgICAgICAgaWYgKGluQXBwKSB7XG4gICAgICAgICAgZGF0YS5ob3ZlcmluZyA9IGZhbHNlO1xuICAgICAgICAgIGNsb3NlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmNvbmZpZy5ob3Zlcikge1xuICAgICAgICAgIGRhdGEudG9nZ2xlLm9uKG1vdXNlRW50ZXJFdmVudCwgbWFrZU1vdXNlRW50ZXJIYW5kbGVyKGRhdGEpKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLmVsLm9uKGNsb3NlRXZlbnQsIGluaXRpYWxUb2dnbGVyKTtcbiAgICAgICAgZGF0YS5lbC5vbihrZXlkb3duRXZlbnQsIG1ha2VEcm9wZG93bktleWRvd25IYW5kbGVyKGRhdGEpKTtcbiAgICAgICAgZGF0YS5lbC5vbihmb2N1c091dEV2ZW50LCBtYWtlRHJvcGRvd25Gb2N1c091dEhhbmRsZXIoZGF0YSkpO1xuXG4gICAgICAgIGRhdGEudG9nZ2xlLm9uKG1vdXNlVXBFdmVudCwgaW5pdGlhbFRvZ2dsZXIpO1xuICAgICAgICBkYXRhLnRvZ2dsZS5vbihrZXlkb3duRXZlbnQsIG1ha2VUb2dnbGVLZXlkb3duSGFuZGxlcihkYXRhKSk7XG5cbiAgICAgICAgZGF0YS5uYXYgPSBkYXRhLmVsLmNsb3Nlc3QoJy53LW5hdicpO1xuICAgICAgICBkYXRhLm5hdi5vbihjbG9zZUV2ZW50LCBpbml0aWFsVG9nZ2xlcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTXV0YXRlIHRoZSBkYXRhIG9iamVjdCB3aXRoIGEgbmV3IGNvbmZpZyBwcm9wZXJ0eVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNvbmZpZ3VyZShkYXRhKSB7XG4gICAgICAvLyBEZXRlcm1pbmUgaWYgei1pbmRleCBzaG91bGQgYmUgbWFuYWdlZFxuICAgICAgdmFyIHpJbmRleCA9IE51bWJlcihkYXRhLmVsLmNzcygnei1pbmRleCcpKTtcbiAgICAgIGRhdGEubWFuYWdlWiA9IHpJbmRleCA9PT0gZGVmYXVsdFpJbmRleCB8fCB6SW5kZXggPT09IGRlZmF1bHRaSW5kZXggKyAxO1xuICAgICAgZGF0YS5jb25maWcgPSB7XG4gICAgICAgIGhvdmVyOiBkYXRhLmVsLmF0dHIoJ2RhdGEtaG92ZXInKSA9PT0gJ3RydWUnICYmICF0b3VjaCxcbiAgICAgICAgZGVsYXk6IGRhdGEuZWwuYXR0cignZGF0YS1kZWxheScpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlU2V0dGluZ0V2ZW50SGFuZGxlcihkYXRhKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGV2dCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgY29uZmlndXJlKGRhdGEpO1xuICAgICAgICBvcHRpb25zLm9wZW4gPT09IHRydWUgJiYgb3BlbihkYXRhKTtcbiAgICAgICAgb3B0aW9ucy5vcGVuID09PSBmYWxzZSAmJiBjbG9zZShkYXRhLCB7aW1tZWRpYXRlOiB0cnVlfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VUb2dnbGVyKGRhdGEsIGZvcmNlQ2xvc2UpIHtcbiAgICAgIHJldHVybiBkZWJvdW5jZShmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIGlmIChkYXRhLm9wZW4gfHwgKGV2dCAmJiBldnQudHlwZSA9PT0gJ3ctY2xvc2UnKSkge1xuICAgICAgICAgIHJldHVybiBjbG9zZShkYXRhLCB7Zm9yY2VDbG9zZX0pO1xuICAgICAgICB9XG4gICAgICAgIG9wZW4oZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvcGVuKGRhdGEpIHtcbiAgICAgIGlmIChkYXRhLm9wZW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjbG9zZU90aGVycyhkYXRhKTtcbiAgICAgIGRhdGEub3BlbiA9IHRydWU7XG4gICAgICBkYXRhLmxpc3QuYWRkQ2xhc3Mob3BlblN0YXRlQ2xhc3NOYW1lKTtcbiAgICAgIGRhdGEudG9nZ2xlLmFkZENsYXNzKG9wZW5TdGF0ZUNsYXNzTmFtZSk7XG4gICAgICBkYXRhLnRvZ2dsZS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTsgLy8gQVJJQVxuICAgICAgaXguaW50cm8oMCwgZGF0YS5lbFswXSk7XG4gICAgICBkaXNwYXRjaEl4M0NvbXBvbmVudEV2ZW50KGRhdGEuZWxbMF0sICdvcGVuJyk7XG4gICAgICBXZWJmbG93LnJlZHJhdy51cCgpO1xuXG4gICAgICAvLyBJbmNyZWFzZSB6LWluZGV4IHRvIGtlZXAgYWJvdmUgb3RoZXIgbWFuYWdlZCBkcm9wZG93bnNcbiAgICAgIGRhdGEubWFuYWdlWiAmJiBkYXRhLmVsLmNzcygnei1pbmRleCcsIGRlZmF1bHRaSW5kZXggKyAxKTtcblxuICAgICAgLy8gTGlzdGVuIGZvciBjbGljayBvdXRzaWRlIGV2ZW50c1xuICAgICAgdmFyIGlzRWRpdG9yID0gV2ViZmxvdy5lbnYoJ2VkaXRvcicpO1xuICAgICAgaWYgKCFpbkRlc2lnbmVyKSB7XG4gICAgICAgICRkb2Mub24obW91c2VVcEV2ZW50LCBkYXRhLm1vdXNlVXBPdXRzaWRlKTtcbiAgICAgIH1cbiAgICAgIGlmIChkYXRhLmhvdmVyaW5nICYmICFpc0VkaXRvcikge1xuICAgICAgICBkYXRhLmVsLm9uKG1vdXNlTGVhdmVFdmVudCwgZGF0YS5tb3VzZUxlYXZlKTtcbiAgICAgIH1cbiAgICAgIGlmIChkYXRhLmhvdmVyaW5nICYmIGlzRWRpdG9yKSB7XG4gICAgICAgICRkb2Mub24obW91c2VNb3ZlRXZlbnQsIGRhdGEubW91c2VNb3ZlT3V0c2lkZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIENsZWFyIHByZXZpb3VzIGRlbGF5XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGRhdGEuZGVsYXlJZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2UoZGF0YSwge2ltbWVkaWF0ZSwgZm9yY2VDbG9zZX0gPSB7fSkge1xuICAgICAgaWYgKCFkYXRhLm9wZW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBEbyBub3QgY2xvc2UgaG92ZXItYmFzZWQgbWVudXMgaWYgY3VycmVudGx5IGhvdmVyaW5nXG4gICAgICBpZiAoZGF0YS5jb25maWcuaG92ZXIgJiYgZGF0YS5ob3ZlcmluZyAmJiAhZm9yY2VDbG9zZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGRhdGEudG9nZ2xlLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcblxuICAgICAgZGF0YS5vcGVuID0gZmFsc2U7XG4gICAgICB2YXIgY29uZmlnID0gZGF0YS5jb25maWc7XG4gICAgICBpeC5vdXRybygwLCBkYXRhLmVsWzBdKTtcbiAgICAgIGRpc3BhdGNoSXgzQ29tcG9uZW50RXZlbnQoZGF0YS5lbFswXSwgJ2Nsb3NlJyk7XG5cbiAgICAgIC8vIFN0b3AgbGlzdGVuaW5nIGZvciBjbGljayBvdXRzaWRlIGV2ZW50c1xuICAgICAgJGRvYy5vZmYobW91c2VVcEV2ZW50LCBkYXRhLm1vdXNlVXBPdXRzaWRlKTtcbiAgICAgICRkb2Mub2ZmKG1vdXNlTW92ZUV2ZW50LCBkYXRhLm1vdXNlTW92ZU91dHNpZGUpO1xuICAgICAgZGF0YS5lbC5vZmYobW91c2VMZWF2ZUV2ZW50LCBkYXRhLm1vdXNlTGVhdmUpO1xuXG4gICAgICAvLyBDbGVhciBwcmV2aW91cyBkZWxheVxuICAgICAgd2luZG93LmNsZWFyVGltZW91dChkYXRhLmRlbGF5SWQpO1xuXG4gICAgICAvLyBTa2lwIGRlbGF5IGR1cmluZyBpbW1lZGlhdGVcbiAgICAgIGlmICghY29uZmlnLmRlbGF5IHx8IGltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm4gZGF0YS5jb21wbGV0ZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBPcHRpb25hbGx5IHdhaXQgZm9yIGRlbGF5IGJlZm9yZSBjbG9zZVxuICAgICAgZGF0YS5kZWxheUlkID0gd2luZG93LnNldFRpbWVvdXQoZGF0YS5jb21wbGV0ZSwgY29uZmlnLmRlbGF5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZUFsbCgpIHtcbiAgICAgICRkb2MuZmluZChuYW1lc3BhY2UpLmVhY2goZnVuY3Rpb24gKGksIGVsKSB7XG4gICAgICAgICQoZWwpLnRyaWdnZXJIYW5kbGVyKGNsb3NlRXZlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VPdGhlcnMoZGF0YSkge1xuICAgICAgdmFyIHNlbGYgPSBkYXRhLmVsWzBdO1xuICAgICAgJGRyb3Bkb3ducy5lYWNoKGZ1bmN0aW9uIChpLCBvdGhlcikge1xuICAgICAgICB2YXIgJG90aGVyID0gJChvdGhlcik7XG4gICAgICAgIGlmICgkb3RoZXIuaXMoc2VsZikgfHwgJG90aGVyLmhhcyhzZWxmKS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgJG90aGVyLnRyaWdnZXJIYW5kbGVyKGNsb3NlRXZlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb3V0c2lkZShkYXRhKSB7XG4gICAgICAvLyBVbmJpbmQgcHJldmlvdXMgY2xpY2sgaGFuZGxlciBpZiBpdCBleGlzdHNcbiAgICAgIGlmIChkYXRhLm1vdXNlVXBPdXRzaWRlKSB7XG4gICAgICAgICRkb2Mub2ZmKG1vdXNlVXBFdmVudCwgZGF0YS5tb3VzZVVwT3V0c2lkZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIENsb3NlIG1lbnUgd2hlbiBjbGlja2VkIG91dHNpZGVcbiAgICAgIHJldHVybiBkZWJvdW5jZShmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIGlmICghZGF0YS5vcGVuKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciAkdGFyZ2V0ID0gJChldnQudGFyZ2V0KTtcbiAgICAgICAgaWYgKCR0YXJnZXQuY2xvc2VzdCgnLnctZHJvcGRvd24tdG9nZ2xlJykubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc0V2ZW50T3V0c2lkZURyb3Bkb3ducyA9XG4gICAgICAgICAgJC5pbkFycmF5KGRhdGEuZWxbMF0sICR0YXJnZXQucGFyZW50cyhuYW1lc3BhY2UpKSA9PT0gLTE7XG4gICAgICAgIHZhciBpc0VkaXRvciA9IFdlYmZsb3cuZW52KCdlZGl0b3InKTtcbiAgICAgICAgaWYgKGlzRXZlbnRPdXRzaWRlRHJvcGRvd25zKSB7XG4gICAgICAgICAgaWYgKGlzRWRpdG9yKSB7XG4gICAgICAgICAgICB2YXIgaXNFdmVudE9uRGV0YWNoZWRTdmcgPVxuICAgICAgICAgICAgICAkdGFyZ2V0LnBhcmVudHMoKS5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgICAgICAgJHRhcmdldC5wYXJlbnRzKCdzdmcnKS5sZW5ndGggPT09IDE7XG4gICAgICAgICAgICB2YXIgaXNFdmVudE9uSG92ZXJDb250cm9scyA9ICR0YXJnZXQucGFyZW50cyhcbiAgICAgICAgICAgICAgJy53LWVkaXRvci1iZW0tRWRpdG9ySG92ZXJDb250cm9scydcbiAgICAgICAgICAgICkubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGlzRXZlbnRPbkRldGFjaGVkU3ZnIHx8IGlzRXZlbnRPbkhvdmVyQ29udHJvbHMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjbG9zZShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tcGxldGUoZGF0YSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGF0YS5saXN0LnJlbW92ZUNsYXNzKG9wZW5TdGF0ZUNsYXNzTmFtZSk7XG4gICAgICAgIGRhdGEudG9nZ2xlLnJlbW92ZUNsYXNzKG9wZW5TdGF0ZUNsYXNzTmFtZSk7XG5cbiAgICAgICAgLy8gUmVzZXQgei1pbmRleCBmb3IgbWFuYWdlZCBkcm9wZG93bnNcbiAgICAgICAgZGF0YS5tYW5hZ2VaICYmIGRhdGEuZWwuY3NzKCd6LWluZGV4JywgJycpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlTW91c2VFbnRlckhhbmRsZXIoZGF0YSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGF0YS5ob3ZlcmluZyA9IHRydWU7XG4gICAgICAgIG9wZW4oZGF0YSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VNb3VzZUxlYXZlSGFuZGxlcihkYXRhKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBkYXRhLmhvdmVyaW5nID0gZmFsc2U7XG5cbiAgICAgICAgLy8gV2UgZG8gbm90IHdhbnQgdGhlIGxpc3QgdG8gY2xvc2UgdXBvbiBtb3VzZWxlYXZlXG4gICAgICAgIC8vIGlmIG9uZSBvZiB0aGUgbGlua3MgaGFzIGZvY3VzXG4gICAgICAgIGlmICghZGF0YS5saW5rcy5pcygnOmZvY3VzJykpIHtcbiAgICAgICAgICBjbG9zZShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3ZlT3V0c2lkZShkYXRhKSB7XG4gICAgICByZXR1cm4gZGVib3VuY2UoZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBpZiAoIWRhdGEub3Blbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgJHRhcmdldCA9ICQoZXZ0LnRhcmdldCk7XG4gICAgICAgIHZhciBpc0V2ZW50T3V0c2lkZURyb3Bkb3ducyA9XG4gICAgICAgICAgJC5pbkFycmF5KGRhdGEuZWxbMF0sICR0YXJnZXQucGFyZW50cyhuYW1lc3BhY2UpKSA9PT0gLTE7XG4gICAgICAgIGlmIChpc0V2ZW50T3V0c2lkZURyb3Bkb3ducykge1xuICAgICAgICAgIHZhciBpc0V2ZW50T25Ib3ZlckNvbnRyb2xzID0gJHRhcmdldC5wYXJlbnRzKFxuICAgICAgICAgICAgJy53LWVkaXRvci1iZW0tRWRpdG9ySG92ZXJDb250cm9scydcbiAgICAgICAgICApLmxlbmd0aDtcbiAgICAgICAgICB2YXIgaXNFdmVudE9uSG92ZXJUb29sYmFyID0gJHRhcmdldC5wYXJlbnRzKFxuICAgICAgICAgICAgJy53LWVkaXRvci1iZW0tUlRUb29sYmFyJ1xuICAgICAgICAgICkubGVuZ3RoO1xuICAgICAgICAgIHZhciAkZWRpdG9yT3ZlcmxheSA9ICQoJy53LWVkaXRvci1iZW0tRWRpdG9yT3ZlcmxheScpO1xuICAgICAgICAgIHZhciBpc0Ryb3Bkb3duSW5FZGl0aW9uID1cbiAgICAgICAgICAgICRlZGl0b3JPdmVybGF5LmZpbmQoJy53LWVkaXRvci1lZGl0LW91dGxpbmUnKS5sZW5ndGggfHxcbiAgICAgICAgICAgICRlZGl0b3JPdmVybGF5LmZpbmQoJy53LWVkaXRvci1iZW0tUlRUb29sYmFyJykubGVuZ3RoO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGlzRXZlbnRPbkhvdmVyQ29udHJvbHMgfHxcbiAgICAgICAgICAgIGlzRXZlbnRPbkhvdmVyVG9vbGJhciB8fFxuICAgICAgICAgICAgaXNEcm9wZG93bkluRWRpdGlvblxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRhLmhvdmVyaW5nID0gZmFsc2U7XG4gICAgICAgICAgY2xvc2UoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VEcm9wZG93bktleWRvd25IYW5kbGVyKGRhdGEpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIC8vIERvbid0IHJlc3BvbmQgdG8ga2V5Ym9hcmQgaW4gZGVzaWduZXIgb3IgaWYgdGhlIGxpc3QgaXMgbm90IG9wZW5cbiAgICAgICAgaWYgKGluRGVzaWduZXIgfHwgIWRhdGEub3Blbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlYWxpZ24gc2VsZWN0ZWRJZHggd2l0aCB0aGUgbWVudSBpdGVtIHRoYXQgaXMgY3VycmVudGx5IGluIGZvY3VzLlxuICAgICAgICAvLyBXZSBuZWVkIHRoaXMgYmVjYXVzZSB3ZSBkbyBub3QgdHJhY2sgdGhlIGBUYWJgIGtleSBhY3Rpdml0eSFcbiAgICAgICAgZGF0YS5zZWxlY3RlZElkeCA9IGRhdGEubGlua3MuaW5kZXgoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgLy8gRXZhbHVhdGUgaXRlbS1zZWxlY3Rpb24gbG9naWNcbiAgICAgICAgc3dpdGNoIChldnQua2V5Q29kZSkge1xuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkhPTUU6IHtcbiAgICAgICAgICAgIGlmICghZGF0YS5vcGVuKSByZXR1cm47XG5cbiAgICAgICAgICAgIGRhdGEuc2VsZWN0ZWRJZHggPSAwO1xuICAgICAgICAgICAgZm9jdXNTZWxlY3RlZExpbmsoZGF0YSk7XG5cbiAgICAgICAgICAgIHJldHVybiBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlIEtFWV9DT0RFUy5FTkQ6IHtcbiAgICAgICAgICAgIGlmICghZGF0YS5vcGVuKSByZXR1cm47XG5cbiAgICAgICAgICAgIGRhdGEuc2VsZWN0ZWRJZHggPSBkYXRhLmxpbmtzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBmb2N1c1NlbGVjdGVkTGluayhkYXRhKTtcblxuICAgICAgICAgICAgcmV0dXJuIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkVTQ0FQRToge1xuICAgICAgICAgICAgY2xvc2UoZGF0YSk7XG4gICAgICAgICAgICBkYXRhLnRvZ2dsZS5mb2N1cygpO1xuXG4gICAgICAgICAgICByZXR1cm4gZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkFSUk9XX1JJR0hUOlxuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkFSUk9XX0RPV046IHtcbiAgICAgICAgICAgIGRhdGEuc2VsZWN0ZWRJZHggPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgZGF0YS5saW5rcy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICBkYXRhLnNlbGVjdGVkSWR4ICsgMVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZm9jdXNTZWxlY3RlZExpbmsoZGF0YSk7XG5cbiAgICAgICAgICAgIHJldHVybiBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlIEtFWV9DT0RFUy5BUlJPV19MRUZUOlxuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkFSUk9XX1VQOiB7XG4gICAgICAgICAgICBkYXRhLnNlbGVjdGVkSWR4ID0gTWF0aC5tYXgoLTEsIGRhdGEuc2VsZWN0ZWRJZHggLSAxKTtcbiAgICAgICAgICAgIGZvY3VzU2VsZWN0ZWRMaW5rKGRhdGEpO1xuXG4gICAgICAgICAgICByZXR1cm4gZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvY3VzU2VsZWN0ZWRMaW5rKGRhdGEpIHtcbiAgICAgIGlmIChkYXRhLmxpbmtzW2RhdGEuc2VsZWN0ZWRJZHhdKSB7XG4gICAgICAgIGRhdGEubGlua3NbZGF0YS5zZWxlY3RlZElkeF0uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlVG9nZ2xlS2V5ZG93bkhhbmRsZXIoZGF0YSkge1xuICAgICAgLy8gV2Ugd2FudCB0byBjbG9zZSBpbW1lZGlhdGVseVxuICAgICAgLy8gaWYgaW50ZXJhY3RpbmcgdmlhIGtleWJvYXJkXG4gICAgICB2YXIgdG9nZ2xlciA9IG1ha2VUb2dnbGVyKGRhdGEsIEZPUkNFX0NMT1NFKTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgaWYgKGluRGVzaWduZXIpIHJldHVybjtcblxuICAgICAgICAvLyBJZiB0aGUgbWVudSBpcyBub3Qgb3Blbiwgd2UgZG9uJ3Qgd2FudFxuICAgICAgICAvLyB0aGUgdXAgb3IgRG93biBhcnJvd3MgdG8gZG8gYW55dGhpbmdcbiAgICAgICAgaWYgKCFkYXRhLm9wZW4pIHtcbiAgICAgICAgICBzd2l0Y2ggKGV2dC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtFWV9DT0RFUy5BUlJPV19VUDpcbiAgICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkFSUk9XX0RPV046IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGV2dC5rZXlDb2RlKSB7XG4gICAgICAgICAgY2FzZSBLRVlfQ09ERVMuU1BBQ0U6XG4gICAgICAgICAgY2FzZSBLRVlfQ09ERVMuRU5URVI6IHtcbiAgICAgICAgICAgIHRvZ2dsZXIoKTtcbiAgICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHJldHVybiBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZURyb3Bkb3duRm9jdXNPdXRIYW5kbGVyKGRhdGEpIHtcbiAgICAgIHJldHVybiBkZWJvdW5jZShmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciB7cmVsYXRlZFRhcmdldCwgdGFyZ2V0fSA9IGV2dDtcbiAgICAgICAgdmFyIG1lbnVFbCA9IGRhdGEuZWxbMF07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDbG9zZSBtZW51XG4gICAgICAgICAqIFdpdGggZm9jdXNvdXQgZXZlbnRzLCB0aGUgYHJlbGF0ZWRUYXJnZXRgIGlzIHRoZSBlbGVtZW50IHRoYXQgd2lsbCBuZXh0IHJlY2VpdmUgZm9jdXMuXG4gICAgICAgICAqIEBzZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Gb2N1c0V2ZW50L3JlbGF0ZWRUYXJnZXRcbiAgICAgICAgICovXG4gICAgICAgIHZhciBtZW51Q29udGFpbnNGb2N1cyA9XG4gICAgICAgICAgbWVudUVsLmNvbnRhaW5zKHJlbGF0ZWRUYXJnZXQpIHx8IG1lbnVFbC5jb250YWlucyh0YXJnZXQpO1xuICAgICAgICBpZiAoIW1lbnVDb250YWluc0ZvY3VzKSB7XG4gICAgICAgICAgY2xvc2UoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEV4cG9ydCBtb2R1bGVcbiAgICByZXR1cm4gYXBpO1xuICB9KVxuKTtcbiJdLCJuYW1lcyI6WyJXZWJmbG93IiwicmVxdWlyZSIsIklYRXZlbnRzIiwiS0VZX0NPREVTIiwiQVJST1dfTEVGVCIsIkFSUk9XX1VQIiwiQVJST1dfUklHSFQiLCJBUlJPV19ET1dOIiwiRVNDQVBFIiwiU1BBQ0UiLCJFTlRFUiIsIkhPTUUiLCJFTkQiLCJJWDNfQ09NUE9ORU5UX0VWRU5UIiwiZGlzcGF0Y2hJeDNDb21wb25lbnRFdmVudCIsImVsZW1lbnQiLCJzdGF0ZSIsImRpc3BhdGNoQ3VzdG9tRXZlbnQiLCJjb21wb25lbnQiLCJGT1JDRV9DTE9TRSIsIklOVEVSTkFMX1BBR0VfTElOS19IQVNIRVNfUEFUVEVSTiIsImRlZmluZSIsIm1vZHVsZSIsImV4cG9ydHMiLCIkIiwiXyIsImRlYm91bmNlIiwiYXBpIiwiaW5BcHAiLCJlbnYiLCJpblByZXZpZXciLCJpbkRlc2lnbmVyIiwidG91Y2giLCJuYW1lc3BhY2UiLCJvcGVuU3RhdGVDbGFzc05hbWUiLCJpeCIsInRyaWdnZXJzIiwiZGVmYXVsdFpJbmRleCIsImZvY3VzT3V0RXZlbnQiLCJrZXlkb3duRXZlbnQiLCJtb3VzZUVudGVyRXZlbnQiLCJtb3VzZU1vdmVFdmVudCIsIm1vdXNlTGVhdmVFdmVudCIsIm1vdXNlVXBFdmVudCIsImNsb3NlRXZlbnQiLCJzZXR0aW5nRXZlbnQiLCIkZG9jIiwiZG9jdW1lbnQiLCIkZHJvcGRvd25zIiwicmVhZHkiLCJpbml0IiwiZGVzaWduIiwiY2xvc2VBbGwiLCJwcmV2aWV3IiwiZmluZCIsImVhY2giLCJidWlsZCIsImkiLCJlbCIsIiRlbCIsImRhdGEiLCJvcGVuIiwiY29uZmlnIiwic2VsZWN0ZWRJZHgiLCJ0b2dnbGUiLCJjaGlsZHJlbiIsImxpc3QiLCJsaW5rcyIsImNvbXBsZXRlIiwibW91c2VMZWF2ZSIsIm1ha2VNb3VzZUxlYXZlSGFuZGxlciIsIm1vdXNlVXBPdXRzaWRlIiwib3V0c2lkZSIsIm1vdXNlTW92ZU91dHNpZGUiLCJtb3ZlT3V0c2lkZSIsImNvbmZpZ3VyZSIsInRvZ2dsZUlkIiwiYXR0ciIsImxpc3RJZCIsInByb3AiLCJpZHgiLCJsaW5rIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwidGVzdCIsImhhc2giLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2UiLCJiaW5kIiwib2ZmIiwibmF2IiwiaW5pdGlhbFRvZ2dsZXIiLCJtYWtlVG9nZ2xlciIsIm9uIiwibWFrZVNldHRpbmdFdmVudEhhbmRsZXIiLCJob3ZlcmluZyIsImhvdmVyIiwibWFrZU1vdXNlRW50ZXJIYW5kbGVyIiwibWFrZURyb3Bkb3duS2V5ZG93bkhhbmRsZXIiLCJtYWtlRHJvcGRvd25Gb2N1c091dEhhbmRsZXIiLCJtYWtlVG9nZ2xlS2V5ZG93bkhhbmRsZXIiLCJjbG9zZXN0IiwiekluZGV4IiwiTnVtYmVyIiwiY3NzIiwibWFuYWdlWiIsImRlbGF5IiwiZXZ0Iiwib3B0aW9ucyIsImltbWVkaWF0ZSIsImZvcmNlQ2xvc2UiLCJ0eXBlIiwiY2xvc2VPdGhlcnMiLCJhZGRDbGFzcyIsImludHJvIiwicmVkcmF3IiwidXAiLCJpc0VkaXRvciIsIndpbmRvdyIsImNsZWFyVGltZW91dCIsImRlbGF5SWQiLCJvdXRybyIsInNldFRpbWVvdXQiLCJ0cmlnZ2VySGFuZGxlciIsInNlbGYiLCJvdGhlciIsIiRvdGhlciIsImlzIiwiaGFzIiwibGVuZ3RoIiwiJHRhcmdldCIsInRhcmdldCIsImlzRXZlbnRPdXRzaWRlRHJvcGRvd25zIiwiaW5BcnJheSIsInBhcmVudHMiLCJpc0V2ZW50T25EZXRhY2hlZFN2ZyIsImlzRXZlbnRPbkhvdmVyQ29udHJvbHMiLCJyZW1vdmVDbGFzcyIsImlzRXZlbnRPbkhvdmVyVG9vbGJhciIsIiRlZGl0b3JPdmVybGF5IiwiaXNEcm9wZG93bkluRWRpdGlvbiIsImluZGV4IiwiYWN0aXZlRWxlbWVudCIsImtleUNvZGUiLCJmb2N1c1NlbGVjdGVkTGluayIsInByZXZlbnREZWZhdWx0IiwiZm9jdXMiLCJzdG9wUHJvcGFnYXRpb24iLCJNYXRoIiwibWluIiwibWF4IiwidG9nZ2xlciIsInJlbGF0ZWRUYXJnZXQiLCJtZW51RWwiLCJtZW51Q29udGFpbnNGb2N1cyIsImNvbnRhaW5zIl0sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEIsR0FFNUI7O0NBRUM7QUFFRCxJQUFJQSxVQUFVQyxRQUFRO0FBQ3RCLElBQUlDLFdBQVdELFFBQVE7QUFFdkIsTUFBTUUsWUFBWTtJQUNoQkMsWUFBWTtJQUNaQyxVQUFVO0lBQ1ZDLGFBQWE7SUFDYkMsWUFBWTtJQUNaQyxRQUFRO0lBQ1JDLE9BQU87SUFDUEMsT0FBTztJQUNQQyxNQUFNO0lBQ05DLEtBQUs7QUFDUDtBQUVB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

}),
1655: (function (module, __unused_webpack_exports, __webpack_require__) {
/* globals window, document */ /**
 * Webflow: Navbar component
 */ 
var Webflow = __webpack_require__(3949);
var IXEvents = __webpack_require__(5134);
const KEY_CODES = {
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    ESCAPE: 27,
    SPACE: 32,
    ENTER: 13,
    HOME: 36,
    END: 35
};
const IX3_COMPONENT_EVENT = 'IX3_COMPONENT_STATE_CHANGE';
function dispatchIx3ComponentEvent(element, state) {
    IXEvents.dispatchCustomEvent(element, IX3_COMPONENT_EVENT, {
        component: 'navbar',
        state
    });
}
Webflow.define('navbar', module.exports = function($, _) {
    var api = {};
    var tram = $.tram;
    var $win = $(window);
    var $doc = $(document);
    var debounce = _.debounce;
    var $body;
    var $navbars;
    var designer;
    var inEditor;
    var inApp = Webflow.env();
    var overlay = '<div class="w-nav-overlay" data-wf-ignore />';
    var namespace = '.w-nav';
    var navbarOpenedButton = 'w--open';
    var navbarOpenedDropdown = 'w--nav-dropdown-open';
    var navbarOpenedDropdownToggle = 'w--nav-dropdown-toggle-open';
    var navbarOpenedDropdownList = 'w--nav-dropdown-list-open';
    var navbarOpenedLink = 'w--nav-link-open';
    var ix = IXEvents.triggers;
    var menuSibling = $();
    // -----------------------------------
    // Module methods
    api.ready = api.design = api.preview = init;
    api.destroy = function() {
        menuSibling = $();
        removeListeners();
        if ($navbars && $navbars.length) {
            $navbars.each(teardown);
        }
    };
    // -----------------------------------
    // Private methods
    function init() {
        designer = inApp && Webflow.env('design');
        inEditor = Webflow.env('editor');
        $body = $(document.body);
        // Find all instances on the page
        $navbars = $doc.find(namespace);
        if (!$navbars.length) {
            return;
        }
        $navbars.each(build);
        // Wire events
        removeListeners();
        addListeners();
    }
    function removeListeners() {
        Webflow.resize.off(resizeAll);
    }
    function addListeners() {
        Webflow.resize.on(resizeAll);
    }
    function resizeAll() {
        $navbars.each(resize);
    }
    function build(i, el) {
        var $el = $(el);
        // Store state in data
        var data = $.data(el, namespace);
        if (!data) {
            data = $.data(el, namespace, {
                open: false,
                el: $el,
                config: {},
                selectedIdx: -1
            });
        }
        data.menu = $el.find('.w-nav-menu');
        data.links = data.menu.find('.w-nav-link');
        data.dropdowns = data.menu.find('.w-dropdown');
        data.dropdownToggle = data.menu.find('.w-dropdown-toggle');
        data.dropdownList = data.menu.find('.w-dropdown-list');
        data.button = $el.find('.w-nav-button');
        data.container = $el.find('.w-container');
        data.overlayContainerId = 'w-nav-overlay-' + i;
        data.outside = outside(data);
        //   If the brand links exists and is set to link to the homepage, the
        // default setting, then add an aria-label
        var navBrandLink = $el.find('.w-nav-brand');
        if (navBrandLink && navBrandLink.attr('href') === '/' && navBrandLink.attr('aria-label') == null) {
            navBrandLink.attr('aria-label', 'home');
        }
        //   VoiceOver bug, when items that disallow user selection are focused
        // VoiceOver gets confused and scrolls to the end of the page. ¯\_(ツ)_/¯
        data.button.attr('style', '-webkit-user-select: text;');
        // Add attributes to toggle element
        if (data.button.attr('aria-label') == null) {
            data.button.attr('aria-label', 'menu');
        }
        data.button.attr('role', 'button');
        data.button.attr('tabindex', '0');
        data.button.attr('aria-controls', data.overlayContainerId);
        data.button.attr('aria-haspopup', 'menu');
        data.button.attr('aria-expanded', 'false');
        // Remove old events
        data.el.off(namespace);
        data.button.off(namespace);
        data.menu.off(namespace);
        // Set config from data attributes
        configure(data);
        // Add events based on mode
        if (designer) {
            removeOverlay(data);
            data.el.on('setting' + namespace, handler(data));
        } else {
            addOverlay(data);
            data.button.on('click' + namespace, toggle(data));
            data.menu.on('click' + namespace, 'a', navigate(data));
            data.button.on('keydown' + namespace, makeToggleButtonKeyboardHandler(data));
            data.el.on('keydown' + namespace, makeLinksKeyboardHandler(data));
        }
        // Trigger initial resize
        resize(i, el);
    }
    function teardown(i, el) {
        var data = $.data(el, namespace);
        if (data) {
            removeOverlay(data);
            $.removeData(el, namespace);
        }
    }
    function removeOverlay(data) {
        if (!data.overlay) {
            return;
        }
        close(data, true);
        data.overlay.remove();
        data.overlay = null;
    }
    function addOverlay(data) {
        if (data.overlay) {
            return;
        }
        data.overlay = $(overlay).appendTo(data.el);
        data.overlay.attr('id', data.overlayContainerId);
        data.parent = data.menu.parent();
        close(data, true);
    }
    function configure(data) {
        var config = {};
        var old = data.config || {};
        // Set config options from data attributes
        var animation = config.animation = data.el.attr('data-animation') || 'default';
        config.animOver = /^over/.test(animation);
        config.animDirect = /left$/.test(animation) ? -1 : 1;
        // Re-open menu if the animation type changed
        if (old.animation !== animation) {
            data.open && _.defer(reopen, data);
        }
        config.easing = data.el.attr('data-easing') || 'ease';
        config.easing2 = data.el.attr('data-easing2') || 'ease';
        var duration = data.el.attr('data-duration');
        config.duration = duration != null ? Number(duration) : 400;
        config.docHeight = data.el.attr('data-doc-height');
        // Store config in data
        data.config = config;
    }
    function handler(data) {
        return function(evt, options) {
            options = options || {};
            var winWidth = $win.width();
            configure(data);
            options.open === true && open(data, true);
            options.open === false && close(data, true);
            // Reopen if media query changed after setting
            data.open && _.defer(function() {
                if (winWidth !== $win.width()) {
                    reopen(data);
                }
            });
        };
    }
    function makeToggleButtonKeyboardHandler(data) {
        return function(evt) {
            switch(evt.keyCode){
                case KEY_CODES.SPACE:
                case KEY_CODES.ENTER:
                    {
                        // Toggle returns a function
                        toggle(data)();
                        evt.preventDefault();
                        return evt.stopPropagation();
                    }
                case KEY_CODES.ESCAPE:
                    {
                        close(data);
                        evt.preventDefault();
                        return evt.stopPropagation();
                    }
                case KEY_CODES.ARROW_RIGHT:
                case KEY_CODES.ARROW_DOWN:
                case KEY_CODES.HOME:
                case KEY_CODES.END:
                    {
                        if (!data.open) {
                            evt.preventDefault();
                            return evt.stopPropagation();
                        }
                        if (evt.keyCode === KEY_CODES.END) {
                            data.selectedIdx = data.links.length - 1;
                        } else {
                            data.selectedIdx = 0;
                        }
                        focusSelectedLink(data);
                        evt.preventDefault();
                        return evt.stopPropagation();
                    }
            }
        };
    }
    function makeLinksKeyboardHandler(data) {
        return function(evt) {
            if (!data.open) {
                return;
            }
            // Realign selectedIdx with the menu item that is currently in focus.
            // We need this because we do not track the `Tab` key activity!
            data.selectedIdx = data.links.index(document.activeElement);
            switch(evt.keyCode){
                case KEY_CODES.HOME:
                case KEY_CODES.END:
                    {
                        if (evt.keyCode === KEY_CODES.END) {
                            data.selectedIdx = data.links.length - 1;
                        } else {
                            data.selectedIdx = 0;
                        }
                        focusSelectedLink(data);
                        evt.preventDefault();
                        return evt.stopPropagation();
                    }
                case KEY_CODES.ESCAPE:
                    {
                        close(data);
                        // Focus toggle button
                        data.button.focus();
                        evt.preventDefault();
                        return evt.stopPropagation();
                    }
                case KEY_CODES.ARROW_LEFT:
                case KEY_CODES.ARROW_UP:
                    {
                        data.selectedIdx = Math.max(-1, data.selectedIdx - 1);
                        focusSelectedLink(data);
                        evt.preventDefault();
                        return evt.stopPropagation();
                    }
                case KEY_CODES.ARROW_RIGHT:
                case KEY_CODES.ARROW_DOWN:
                    {
                        data.selectedIdx = Math.min(data.links.length - 1, data.selectedIdx + 1);
                        focusSelectedLink(data);
                        evt.preventDefault();
                        return evt.stopPropagation();
                    }
            }
        };
    }
    function focusSelectedLink(data) {
        if (data.links[data.selectedIdx]) {
            var selectedElement = data.links[data.selectedIdx];
            selectedElement.focus();
            navigate(selectedElement);
        }
    }
    function reopen(data) {
        if (!data.open) {
            return;
        }
        close(data, true);
        open(data, true);
    }
    function toggle(data) {
        // Debounce toggle to wait for accurate open state
        return debounce(function() {
            data.open ? close(data) : open(data);
        });
    }
    function navigate(data) {
        return function(evt) {
            var link = $(this);
            var href = link.attr('href');
            // Avoid late clicks on touch devices
            if (!Webflow.validClick(evt.currentTarget)) {
                evt.preventDefault();
                return;
            }
            // Close when navigating to an in-page anchor
            if (href && href.indexOf('#') === 0 && data.open) {
                close(data);
            }
        };
    }
    function outside(data) {
        // Unbind previous click handler if it exists
        if (data.outside) {
            $doc.off('click' + namespace, data.outside);
        }
        return function(evt) {
            var $target = $(evt.target);
            // Ignore clicks on Editor overlay UI
            if (inEditor && $target.closest('.w-editor-bem-EditorOverlay').length) {
                return;
            }
            // Close menu when clicked outside, debounced to wait for state
            outsideDebounced(data, $target);
        };
    }
    var outsideDebounced = debounce(function(data, $target) {
        if (!data.open) {
            return;
        }
        var menu = $target.closest('.w-nav-menu');
        if (!data.menu.is(menu)) {
            close(data);
        }
    });
    function resize(i, el) {
        var data = $.data(el, namespace);
        // Check for collapsed state based on button display
        var collapsed = data.collapsed = data.button.css('display') !== 'none';
        // Close menu if button is no longer visible (and not in designer)
        if (data.open && !collapsed && !designer) {
            close(data, true);
        }
        // Set max-width of links + dropdowns to match container
        if (data.container.length) {
            var updateEachMax = updateMax(data);
            data.links.each(updateEachMax);
            data.dropdowns.each(updateEachMax);
        }
        // If currently open, update height to match body
        if (data.open) {
            setOverlayHeight(data);
        }
    }
    var maxWidth = 'max-width';
    function updateMax(data) {
        // Set max-width of each element to match container
        var containMax = data.container.css(maxWidth);
        if (containMax === 'none') {
            containMax = '';
        }
        return function(i, link) {
            link = $(link);
            link.css(maxWidth, '');
            // Don't set the max-width if an upstream value exists
            if (link.css(maxWidth) === 'none') {
                link.css(maxWidth, containMax);
            }
        };
    }
    function addMenuOpen(i, el) {
        el.setAttribute('data-nav-menu-open', '');
    }
    function removeMenuOpen(i, el) {
        el.removeAttribute('data-nav-menu-open');
    }
    function open(data, immediate) {
        if (data.open) {
            return;
        }
        data.open = true;
        data.menu.each(addMenuOpen);
        data.links.addClass(navbarOpenedLink);
        data.dropdowns.addClass(navbarOpenedDropdown);
        data.dropdownToggle.addClass(navbarOpenedDropdownToggle);
        data.dropdownList.addClass(navbarOpenedDropdownList);
        data.button.addClass(navbarOpenedButton);
        var config = data.config;
        var animation = config.animation;
        if (animation === 'none' || !tram.support.transform || config.duration <= 0) {
            immediate = true;
        }
        var bodyHeight = setOverlayHeight(data);
        var menuHeight = data.menu.outerHeight(true);
        var menuWidth = data.menu.outerWidth(true);
        var navHeight = data.el.height();
        var navbarEl = data.el[0];
        resize(0, navbarEl);
        ix.intro(0, navbarEl);
        dispatchIx3ComponentEvent(navbarEl, 'open');
        Webflow.redraw.up();
        // Listen for click outside events
        if (!designer) {
            $doc.on('click' + namespace, data.outside);
        }
        // No transition for immediate
        if (immediate) {
            complete();
            return;
        }
        var transConfig = 'transform ' + config.duration + 'ms ' + config.easing;
        // Add menu to overlay
        if (data.overlay) {
            menuSibling = data.menu.prev();
            data.overlay.show().append(data.menu);
        }
        // Over left/right
        if (config.animOver) {
            tram(data.menu).add(transConfig).set({
                x: config.animDirect * menuWidth,
                height: bodyHeight
            }).start({
                x: 0
            }).then(complete);
            data.overlay && data.overlay.width(menuWidth);
            return;
        }
        // Drop Down
        var offsetY = navHeight + menuHeight;
        tram(data.menu).add(transConfig).set({
            y: -offsetY
        }).start({
            y: 0
        }).then(complete);
        function complete() {
            data.button.attr('aria-expanded', 'true');
        }
    }
    function setOverlayHeight(data) {
        var config = data.config;
        var bodyHeight = config.docHeight ? $doc.height() : $body.height();
        if (config.animOver) {
            data.menu.height(bodyHeight);
        } else if (data.el.css('position') !== 'fixed') {
            bodyHeight -= data.el.outerHeight(true);
        }
        data.overlay && data.overlay.height(bodyHeight);
        return bodyHeight;
    }
    function close(data, immediate) {
        if (!data.open) {
            return;
        }
        data.open = false;
        data.button.removeClass(navbarOpenedButton);
        var config = data.config;
        if (config.animation === 'none' || !tram.support.transform || config.duration <= 0) {
            immediate = true;
        }
        ix.outro(0, data.el[0]);
        dispatchIx3ComponentEvent(data.el[0], 'close');
        // Stop listening for click outside events
        $doc.off('click' + namespace, data.outside);
        if (immediate) {
            tram(data.menu).stop();
            complete();
            return;
        }
        var transConfig = 'transform ' + config.duration + 'ms ' + config.easing2;
        var menuHeight = data.menu.outerHeight(true);
        var menuWidth = data.menu.outerWidth(true);
        var navHeight = data.el.height();
        // Over left/right
        if (config.animOver) {
            tram(data.menu).add(transConfig).start({
                x: menuWidth * config.animDirect
            }).then(complete);
            return;
        }
        // Drop Down
        var offsetY = navHeight + menuHeight;
        tram(data.menu).add(transConfig).start({
            y: -offsetY
        }).then(complete);
        function complete() {
            data.menu.height('');
            tram(data.menu).set({
                x: 0,
                y: 0
            });
            data.menu.each(removeMenuOpen);
            data.links.removeClass(navbarOpenedLink);
            data.dropdowns.removeClass(navbarOpenedDropdown);
            data.dropdownToggle.removeClass(navbarOpenedDropdownToggle);
            data.dropdownList.removeClass(navbarOpenedDropdownList);
            if (data.overlay && data.overlay.children().length) {
                // Move menu back to parent at the original location
                menuSibling.length ? data.menu.insertAfter(menuSibling) : data.menu.prependTo(data.parent);
                data.overlay.attr('style', '').hide();
            }
            // Trigger event so other components can hook in (dropdown)
            data.el.triggerHandler('w-close');
            data.button.attr('aria-expanded', 'false');
        }
    }
    // Export module
    return api;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3NoYXJlZC9yZW5kZXIvcGx1Z2lucy9OYXZiYXIvd2ViZmxvdy1uYXZiYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFscyB3aW5kb3csIGRvY3VtZW50ICovXG5cbi8qKlxuICogV2ViZmxvdzogTmF2YmFyIGNvbXBvbmVudFxuICovXG5cbnZhciBXZWJmbG93ID0gcmVxdWlyZSgnLi4vQmFzZVNpdGVNb2R1bGVzL3dlYmZsb3ctbGliJyk7XG52YXIgSVhFdmVudHMgPSByZXF1aXJlKCcuLi9CYXNlU2l0ZU1vZHVsZXMvd2ViZmxvdy1peDItZXZlbnRzJyk7XG5cbmNvbnN0IEtFWV9DT0RFUyA9IHtcbiAgQVJST1dfTEVGVDogMzcsXG4gIEFSUk9XX1VQOiAzOCxcbiAgQVJST1dfUklHSFQ6IDM5LFxuICBBUlJPV19ET1dOOiA0MCxcbiAgRVNDQVBFOiAyNyxcbiAgU1BBQ0U6IDMyLFxuICBFTlRFUjogMTMsXG4gIEhPTUU6IDM2LFxuICBFTkQ6IDM1LFxufTtcblxuY29uc3QgSVgzX0NPTVBPTkVOVF9FVkVOVCA9ICdJWDNfQ09NUE9ORU5UX1NUQVRFX0NIQU5HRSc7XG5cbmZ1bmN0aW9uIGRpc3BhdGNoSXgzQ29tcG9uZW50RXZlbnQoZWxlbWVudCwgc3RhdGUpIHtcbiAgSVhFdmVudHMuZGlzcGF0Y2hDdXN0b21FdmVudChlbGVtZW50LCBJWDNfQ09NUE9ORU5UX0VWRU5ULCB7XG4gICAgY29tcG9uZW50OiAnbmF2YmFyJyxcbiAgICBzdGF0ZSxcbiAgfSk7XG59XG5cbldlYmZsb3cuZGVmaW5lKFxuICAnbmF2YmFyJyxcbiAgKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCQsIF8pIHtcbiAgICB2YXIgYXBpID0ge307XG4gICAgdmFyIHRyYW0gPSAkLnRyYW07XG4gICAgdmFyICR3aW4gPSAkKHdpbmRvdyk7XG4gICAgdmFyICRkb2MgPSAkKGRvY3VtZW50KTtcbiAgICB2YXIgZGVib3VuY2UgPSBfLmRlYm91bmNlO1xuICAgIHZhciAkYm9keTtcbiAgICB2YXIgJG5hdmJhcnM7XG4gICAgdmFyIGRlc2lnbmVyO1xuICAgIHZhciBpbkVkaXRvcjtcbiAgICB2YXIgaW5BcHAgPSBXZWJmbG93LmVudigpO1xuICAgIHZhciBvdmVybGF5ID0gJzxkaXYgY2xhc3M9XCJ3LW5hdi1vdmVybGF5XCIgZGF0YS13Zi1pZ25vcmUgLz4nO1xuICAgIHZhciBuYW1lc3BhY2UgPSAnLnctbmF2JztcbiAgICB2YXIgbmF2YmFyT3BlbmVkQnV0dG9uID0gJ3ctLW9wZW4nO1xuICAgIHZhciBuYXZiYXJPcGVuZWREcm9wZG93biA9ICd3LS1uYXYtZHJvcGRvd24tb3Blbic7XG4gICAgdmFyIG5hdmJhck9wZW5lZERyb3Bkb3duVG9nZ2xlID0gJ3ctLW5hdi1kcm9wZG93bi10b2dnbGUtb3Blbic7XG4gICAgdmFyIG5hdmJhck9wZW5lZERyb3Bkb3duTGlzdCA9ICd3LS1uYXYtZHJvcGRvd24tbGlzdC1vcGVuJztcbiAgICB2YXIgbmF2YmFyT3BlbmVkTGluayA9ICd3LS1uYXYtbGluay1vcGVuJztcbiAgICB2YXIgaXggPSBJWEV2ZW50cy50cmlnZ2VycztcbiAgICB2YXIgbWVudVNpYmxpbmcgPSAkKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIE1vZHVsZSBtZXRob2RzXG5cbiAgICBhcGkucmVhZHkgPSBhcGkuZGVzaWduID0gYXBpLnByZXZpZXcgPSBpbml0O1xuXG4gICAgYXBpLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBtZW51U2libGluZyA9ICQoKTtcbiAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgaWYgKCRuYXZiYXJzICYmICRuYXZiYXJzLmxlbmd0aCkge1xuICAgICAgICAkbmF2YmFycy5lYWNoKHRlYXJkb3duKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBQcml2YXRlIG1ldGhvZHNcblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICBkZXNpZ25lciA9IGluQXBwICYmIFdlYmZsb3cuZW52KCdkZXNpZ24nKTtcbiAgICAgIGluRWRpdG9yID0gV2ViZmxvdy5lbnYoJ2VkaXRvcicpO1xuICAgICAgJGJvZHkgPSAkKGRvY3VtZW50LmJvZHkpO1xuXG4gICAgICAvLyBGaW5kIGFsbCBpbnN0YW5jZXMgb24gdGhlIHBhZ2VcbiAgICAgICRuYXZiYXJzID0gJGRvYy5maW5kKG5hbWVzcGFjZSk7XG4gICAgICBpZiAoISRuYXZiYXJzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAkbmF2YmFycy5lYWNoKGJ1aWxkKTtcblxuICAgICAgLy8gV2lyZSBldmVudHNcbiAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgICAgV2ViZmxvdy5yZXNpemUub2ZmKHJlc2l6ZUFsbCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgICAgV2ViZmxvdy5yZXNpemUub24ocmVzaXplQWxsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNpemVBbGwoKSB7XG4gICAgICAkbmF2YmFycy5lYWNoKHJlc2l6ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnVpbGQoaSwgZWwpIHtcbiAgICAgIHZhciAkZWwgPSAkKGVsKTtcblxuICAgICAgLy8gU3RvcmUgc3RhdGUgaW4gZGF0YVxuICAgICAgdmFyIGRhdGEgPSAkLmRhdGEoZWwsIG5hbWVzcGFjZSk7XG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9ICQuZGF0YShlbCwgbmFtZXNwYWNlLCB7XG4gICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgZWw6ICRlbCxcbiAgICAgICAgICBjb25maWc6IHt9LFxuICAgICAgICAgIHNlbGVjdGVkSWR4OiAtMSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBkYXRhLm1lbnUgPSAkZWwuZmluZCgnLnctbmF2LW1lbnUnKTtcbiAgICAgIGRhdGEubGlua3MgPSBkYXRhLm1lbnUuZmluZCgnLnctbmF2LWxpbmsnKTtcbiAgICAgIGRhdGEuZHJvcGRvd25zID0gZGF0YS5tZW51LmZpbmQoJy53LWRyb3Bkb3duJyk7XG4gICAgICBkYXRhLmRyb3Bkb3duVG9nZ2xlID0gZGF0YS5tZW51LmZpbmQoJy53LWRyb3Bkb3duLXRvZ2dsZScpO1xuICAgICAgZGF0YS5kcm9wZG93bkxpc3QgPSBkYXRhLm1lbnUuZmluZCgnLnctZHJvcGRvd24tbGlzdCcpO1xuICAgICAgZGF0YS5idXR0b24gPSAkZWwuZmluZCgnLnctbmF2LWJ1dHRvbicpO1xuICAgICAgZGF0YS5jb250YWluZXIgPSAkZWwuZmluZCgnLnctY29udGFpbmVyJyk7XG4gICAgICBkYXRhLm92ZXJsYXlDb250YWluZXJJZCA9ICd3LW5hdi1vdmVybGF5LScgKyBpO1xuICAgICAgZGF0YS5vdXRzaWRlID0gb3V0c2lkZShkYXRhKTtcblxuICAgICAgLy8gICBJZiB0aGUgYnJhbmQgbGlua3MgZXhpc3RzIGFuZCBpcyBzZXQgdG8gbGluayB0byB0aGUgaG9tZXBhZ2UsIHRoZVxuICAgICAgLy8gZGVmYXVsdCBzZXR0aW5nLCB0aGVuIGFkZCBhbiBhcmlhLWxhYmVsXG4gICAgICB2YXIgbmF2QnJhbmRMaW5rID0gJGVsLmZpbmQoJy53LW5hdi1icmFuZCcpO1xuICAgICAgaWYgKFxuICAgICAgICBuYXZCcmFuZExpbmsgJiZcbiAgICAgICAgbmF2QnJhbmRMaW5rLmF0dHIoJ2hyZWYnKSA9PT0gJy8nICYmXG4gICAgICAgIG5hdkJyYW5kTGluay5hdHRyKCdhcmlhLWxhYmVsJykgPT0gbnVsbFxuICAgICAgKSB7XG4gICAgICAgIG5hdkJyYW5kTGluay5hdHRyKCdhcmlhLWxhYmVsJywgJ2hvbWUnKTtcbiAgICAgIH1cblxuICAgICAgLy8gICBWb2ljZU92ZXIgYnVnLCB3aGVuIGl0ZW1zIHRoYXQgZGlzYWxsb3cgdXNlciBzZWxlY3Rpb24gYXJlIGZvY3VzZWRcbiAgICAgIC8vIFZvaWNlT3ZlciBnZXRzIGNvbmZ1c2VkIGFuZCBzY3JvbGxzIHRvIHRoZSBlbmQgb2YgdGhlIHBhZ2UuIMKvXFxfKOODhClfL8KvXG4gICAgICBkYXRhLmJ1dHRvbi5hdHRyKCdzdHlsZScsICctd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0OycpO1xuXG4gICAgICAvLyBBZGQgYXR0cmlidXRlcyB0byB0b2dnbGUgZWxlbWVudFxuICAgICAgaWYgKGRhdGEuYnV0dG9uLmF0dHIoJ2FyaWEtbGFiZWwnKSA9PSBudWxsKSB7XG4gICAgICAgIGRhdGEuYnV0dG9uLmF0dHIoJ2FyaWEtbGFiZWwnLCAnbWVudScpO1xuICAgICAgfVxuXG4gICAgICBkYXRhLmJ1dHRvbi5hdHRyKCdyb2xlJywgJ2J1dHRvbicpO1xuICAgICAgZGF0YS5idXR0b24uYXR0cigndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgZGF0YS5idXR0b24uYXR0cignYXJpYS1jb250cm9scycsIGRhdGEub3ZlcmxheUNvbnRhaW5lcklkKTtcbiAgICAgIGRhdGEuYnV0dG9uLmF0dHIoJ2FyaWEtaGFzcG9wdXAnLCAnbWVudScpO1xuICAgICAgZGF0YS5idXR0b24uYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuXG4gICAgICAvLyBSZW1vdmUgb2xkIGV2ZW50c1xuICAgICAgZGF0YS5lbC5vZmYobmFtZXNwYWNlKTtcbiAgICAgIGRhdGEuYnV0dG9uLm9mZihuYW1lc3BhY2UpO1xuICAgICAgZGF0YS5tZW51Lm9mZihuYW1lc3BhY2UpO1xuXG4gICAgICAvLyBTZXQgY29uZmlnIGZyb20gZGF0YSBhdHRyaWJ1dGVzXG4gICAgICBjb25maWd1cmUoZGF0YSk7XG5cbiAgICAgIC8vIEFkZCBldmVudHMgYmFzZWQgb24gbW9kZVxuICAgICAgaWYgKGRlc2lnbmVyKSB7XG4gICAgICAgIHJlbW92ZU92ZXJsYXkoZGF0YSk7XG4gICAgICAgIGRhdGEuZWwub24oJ3NldHRpbmcnICsgbmFtZXNwYWNlLCBoYW5kbGVyKGRhdGEpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZE92ZXJsYXkoZGF0YSk7XG5cbiAgICAgICAgZGF0YS5idXR0b24ub24oJ2NsaWNrJyArIG5hbWVzcGFjZSwgdG9nZ2xlKGRhdGEpKTtcbiAgICAgICAgZGF0YS5tZW51Lm9uKCdjbGljaycgKyBuYW1lc3BhY2UsICdhJywgbmF2aWdhdGUoZGF0YSkpO1xuXG4gICAgICAgIGRhdGEuYnV0dG9uLm9uKFxuICAgICAgICAgICdrZXlkb3duJyArIG5hbWVzcGFjZSxcbiAgICAgICAgICBtYWtlVG9nZ2xlQnV0dG9uS2V5Ym9hcmRIYW5kbGVyKGRhdGEpXG4gICAgICAgICk7XG4gICAgICAgIGRhdGEuZWwub24oJ2tleWRvd24nICsgbmFtZXNwYWNlLCBtYWtlTGlua3NLZXlib2FyZEhhbmRsZXIoZGF0YSkpO1xuICAgICAgfVxuXG4gICAgICAvLyBUcmlnZ2VyIGluaXRpYWwgcmVzaXplXG4gICAgICByZXNpemUoaSwgZWwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRlYXJkb3duKGksIGVsKSB7XG4gICAgICB2YXIgZGF0YSA9ICQuZGF0YShlbCwgbmFtZXNwYWNlKTtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIHJlbW92ZU92ZXJsYXkoZGF0YSk7XG4gICAgICAgICQucmVtb3ZlRGF0YShlbCwgbmFtZXNwYWNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVPdmVybGF5KGRhdGEpIHtcbiAgICAgIGlmICghZGF0YS5vdmVybGF5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNsb3NlKGRhdGEsIHRydWUpO1xuICAgICAgZGF0YS5vdmVybGF5LnJlbW92ZSgpO1xuICAgICAgZGF0YS5vdmVybGF5ID0gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRPdmVybGF5KGRhdGEpIHtcbiAgICAgIGlmIChkYXRhLm92ZXJsYXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZGF0YS5vdmVybGF5ID0gJChvdmVybGF5KS5hcHBlbmRUbyhkYXRhLmVsKTtcbiAgICAgIGRhdGEub3ZlcmxheS5hdHRyKCdpZCcsIGRhdGEub3ZlcmxheUNvbnRhaW5lcklkKTtcbiAgICAgIGRhdGEucGFyZW50ID0gZGF0YS5tZW51LnBhcmVudCgpO1xuICAgICAgY2xvc2UoZGF0YSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29uZmlndXJlKGRhdGEpIHtcbiAgICAgIHZhciBjb25maWcgPSB7fTtcbiAgICAgIHZhciBvbGQgPSBkYXRhLmNvbmZpZyB8fCB7fTtcblxuICAgICAgLy8gU2V0IGNvbmZpZyBvcHRpb25zIGZyb20gZGF0YSBhdHRyaWJ1dGVzXG4gICAgICB2YXIgYW5pbWF0aW9uID0gKGNvbmZpZy5hbmltYXRpb24gPVxuICAgICAgICBkYXRhLmVsLmF0dHIoJ2RhdGEtYW5pbWF0aW9uJykgfHwgJ2RlZmF1bHQnKTtcbiAgICAgIGNvbmZpZy5hbmltT3ZlciA9IC9eb3Zlci8udGVzdChhbmltYXRpb24pO1xuICAgICAgY29uZmlnLmFuaW1EaXJlY3QgPSAvbGVmdCQvLnRlc3QoYW5pbWF0aW9uKSA/IC0xIDogMTtcblxuICAgICAgLy8gUmUtb3BlbiBtZW51IGlmIHRoZSBhbmltYXRpb24gdHlwZSBjaGFuZ2VkXG4gICAgICBpZiAob2xkLmFuaW1hdGlvbiAhPT0gYW5pbWF0aW9uKSB7XG4gICAgICAgIGRhdGEub3BlbiAmJiBfLmRlZmVyKHJlb3BlbiwgZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIGNvbmZpZy5lYXNpbmcgPSBkYXRhLmVsLmF0dHIoJ2RhdGEtZWFzaW5nJykgfHwgJ2Vhc2UnO1xuICAgICAgY29uZmlnLmVhc2luZzIgPSBkYXRhLmVsLmF0dHIoJ2RhdGEtZWFzaW5nMicpIHx8ICdlYXNlJztcblxuICAgICAgdmFyIGR1cmF0aW9uID0gZGF0YS5lbC5hdHRyKCdkYXRhLWR1cmF0aW9uJyk7XG4gICAgICBjb25maWcuZHVyYXRpb24gPSBkdXJhdGlvbiAhPSBudWxsID8gTnVtYmVyKGR1cmF0aW9uKSA6IDQwMDtcblxuICAgICAgY29uZmlnLmRvY0hlaWdodCA9IGRhdGEuZWwuYXR0cignZGF0YS1kb2MtaGVpZ2h0Jyk7XG5cbiAgICAgIC8vIFN0b3JlIGNvbmZpZyBpbiBkYXRhXG4gICAgICBkYXRhLmNvbmZpZyA9IGNvbmZpZztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVyKGRhdGEpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZ0LCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB2YXIgd2luV2lkdGggPSAkd2luLndpZHRoKCk7XG4gICAgICAgIGNvbmZpZ3VyZShkYXRhKTtcbiAgICAgICAgb3B0aW9ucy5vcGVuID09PSB0cnVlICYmIG9wZW4oZGF0YSwgdHJ1ZSk7XG4gICAgICAgIG9wdGlvbnMub3BlbiA9PT0gZmFsc2UgJiYgY2xvc2UoZGF0YSwgdHJ1ZSk7XG4gICAgICAgIC8vIFJlb3BlbiBpZiBtZWRpYSBxdWVyeSBjaGFuZ2VkIGFmdGVyIHNldHRpbmdcbiAgICAgICAgZGF0YS5vcGVuICYmXG4gICAgICAgICAgXy5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAod2luV2lkdGggIT09ICR3aW4ud2lkdGgoKSkge1xuICAgICAgICAgICAgICByZW9wZW4oZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VUb2dnbGVCdXR0b25LZXlib2FyZEhhbmRsZXIoZGF0YSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgc3dpdGNoIChldnQua2V5Q29kZSkge1xuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLlNQQUNFOlxuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkVOVEVSOiB7XG4gICAgICAgICAgICAvLyBUb2dnbGUgcmV0dXJucyBhIGZ1bmN0aW9uXG4gICAgICAgICAgICB0b2dnbGUoZGF0YSkoKTtcblxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkVTQ0FQRToge1xuICAgICAgICAgICAgY2xvc2UoZGF0YSk7XG5cbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlIEtFWV9DT0RFUy5BUlJPV19SSUdIVDpcbiAgICAgICAgICBjYXNlIEtFWV9DT0RFUy5BUlJPV19ET1dOOlxuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkhPTUU6XG4gICAgICAgICAgY2FzZSBLRVlfQ09ERVMuRU5EOiB7XG4gICAgICAgICAgICBpZiAoIWRhdGEub3Blbikge1xuICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSBLRVlfQ09ERVMuRU5EKSB7XG4gICAgICAgICAgICAgIGRhdGEuc2VsZWN0ZWRJZHggPSBkYXRhLmxpbmtzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkYXRhLnNlbGVjdGVkSWR4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvY3VzU2VsZWN0ZWRMaW5rKGRhdGEpO1xuXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybiBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VMaW5rc0tleWJvYXJkSGFuZGxlcihkYXRhKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBpZiAoIWRhdGEub3Blbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlYWxpZ24gc2VsZWN0ZWRJZHggd2l0aCB0aGUgbWVudSBpdGVtIHRoYXQgaXMgY3VycmVudGx5IGluIGZvY3VzLlxuICAgICAgICAvLyBXZSBuZWVkIHRoaXMgYmVjYXVzZSB3ZSBkbyBub3QgdHJhY2sgdGhlIGBUYWJgIGtleSBhY3Rpdml0eSFcbiAgICAgICAgZGF0YS5zZWxlY3RlZElkeCA9IGRhdGEubGlua3MuaW5kZXgoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgc3dpdGNoIChldnQua2V5Q29kZSkge1xuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkhPTUU6XG4gICAgICAgICAgY2FzZSBLRVlfQ09ERVMuRU5EOiB7XG4gICAgICAgICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IEtFWV9DT0RFUy5FTkQpIHtcbiAgICAgICAgICAgICAgZGF0YS5zZWxlY3RlZElkeCA9IGRhdGEubGlua3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRhdGEuc2VsZWN0ZWRJZHggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9jdXNTZWxlY3RlZExpbmsoZGF0YSk7XG5cbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlIEtFWV9DT0RFUy5FU0NBUEU6IHtcbiAgICAgICAgICAgIGNsb3NlKGRhdGEpO1xuXG4gICAgICAgICAgICAvLyBGb2N1cyB0b2dnbGUgYnV0dG9uXG4gICAgICAgICAgICBkYXRhLmJ1dHRvbi5mb2N1cygpO1xuXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybiBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSBLRVlfQ09ERVMuQVJST1dfTEVGVDpcbiAgICAgICAgICBjYXNlIEtFWV9DT0RFUy5BUlJPV19VUDoge1xuICAgICAgICAgICAgZGF0YS5zZWxlY3RlZElkeCA9IE1hdGgubWF4KC0xLCBkYXRhLnNlbGVjdGVkSWR4IC0gMSk7XG4gICAgICAgICAgICBmb2N1c1NlbGVjdGVkTGluayhkYXRhKTtcblxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkFSUk9XX1JJR0hUOlxuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkFSUk9XX0RPV046IHtcbiAgICAgICAgICAgIGRhdGEuc2VsZWN0ZWRJZHggPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgZGF0YS5saW5rcy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICBkYXRhLnNlbGVjdGVkSWR4ICsgMVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZm9jdXNTZWxlY3RlZExpbmsoZGF0YSk7XG5cbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9jdXNTZWxlY3RlZExpbmsoZGF0YSkge1xuICAgICAgaWYgKGRhdGEubGlua3NbZGF0YS5zZWxlY3RlZElkeF0pIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkRWxlbWVudCA9IGRhdGEubGlua3NbZGF0YS5zZWxlY3RlZElkeF07XG5cbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIG5hdmlnYXRlKHNlbGVjdGVkRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVvcGVuKGRhdGEpIHtcbiAgICAgIGlmICghZGF0YS5vcGVuKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNsb3NlKGRhdGEsIHRydWUpO1xuICAgICAgb3BlbihkYXRhLCB0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGUoZGF0YSkge1xuICAgICAgLy8gRGVib3VuY2UgdG9nZ2xlIHRvIHdhaXQgZm9yIGFjY3VyYXRlIG9wZW4gc3RhdGVcbiAgICAgIHJldHVybiBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRhdGEub3BlbiA/IGNsb3NlKGRhdGEpIDogb3BlbihkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5hdmlnYXRlKGRhdGEpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBsaW5rID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGhyZWYgPSBsaW5rLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICAvLyBBdm9pZCBsYXRlIGNsaWNrcyBvbiB0b3VjaCBkZXZpY2VzXG4gICAgICAgIGlmICghV2ViZmxvdy52YWxpZENsaWNrKGV2dC5jdXJyZW50VGFyZ2V0KSkge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENsb3NlIHdoZW4gbmF2aWdhdGluZyB0byBhbiBpbi1wYWdlIGFuY2hvclxuICAgICAgICBpZiAoaHJlZiAmJiBocmVmLmluZGV4T2YoJyMnKSA9PT0gMCAmJiBkYXRhLm9wZW4pIHtcbiAgICAgICAgICBjbG9zZShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvdXRzaWRlKGRhdGEpIHtcbiAgICAgIC8vIFVuYmluZCBwcmV2aW91cyBjbGljayBoYW5kbGVyIGlmIGl0IGV4aXN0c1xuICAgICAgaWYgKGRhdGEub3V0c2lkZSkge1xuICAgICAgICAkZG9jLm9mZignY2xpY2snICsgbmFtZXNwYWNlLCBkYXRhLm91dHNpZGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgJHRhcmdldCA9ICQoZXZ0LnRhcmdldCk7XG4gICAgICAgIC8vIElnbm9yZSBjbGlja3Mgb24gRWRpdG9yIG92ZXJsYXkgVUlcbiAgICAgICAgaWYgKGluRWRpdG9yICYmICR0YXJnZXQuY2xvc2VzdCgnLnctZWRpdG9yLWJlbS1FZGl0b3JPdmVybGF5JykubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIENsb3NlIG1lbnUgd2hlbiBjbGlja2VkIG91dHNpZGUsIGRlYm91bmNlZCB0byB3YWl0IGZvciBzdGF0ZVxuICAgICAgICBvdXRzaWRlRGVib3VuY2VkKGRhdGEsICR0YXJnZXQpO1xuICAgICAgfTtcbiAgICB9XG4gICAgdmFyIG91dHNpZGVEZWJvdW5jZWQgPSBkZWJvdW5jZShmdW5jdGlvbiAoZGF0YSwgJHRhcmdldCkge1xuICAgICAgaWYgKCFkYXRhLm9wZW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG1lbnUgPSAkdGFyZ2V0LmNsb3Nlc3QoJy53LW5hdi1tZW51Jyk7XG4gICAgICBpZiAoIWRhdGEubWVudS5pcyhtZW51KSkge1xuICAgICAgICBjbG9zZShkYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHJlc2l6ZShpLCBlbCkge1xuICAgICAgdmFyIGRhdGEgPSAkLmRhdGEoZWwsIG5hbWVzcGFjZSk7XG4gICAgICAvLyBDaGVjayBmb3IgY29sbGFwc2VkIHN0YXRlIGJhc2VkIG9uIGJ1dHRvbiBkaXNwbGF5XG4gICAgICB2YXIgY29sbGFwc2VkID0gKGRhdGEuY29sbGFwc2VkID0gZGF0YS5idXR0b24uY3NzKCdkaXNwbGF5JykgIT09ICdub25lJyk7XG4gICAgICAvLyBDbG9zZSBtZW51IGlmIGJ1dHRvbiBpcyBubyBsb25nZXIgdmlzaWJsZSAoYW5kIG5vdCBpbiBkZXNpZ25lcilcbiAgICAgIGlmIChkYXRhLm9wZW4gJiYgIWNvbGxhcHNlZCAmJiAhZGVzaWduZXIpIHtcbiAgICAgICAgY2xvc2UoZGF0YSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICAvLyBTZXQgbWF4LXdpZHRoIG9mIGxpbmtzICsgZHJvcGRvd25zIHRvIG1hdGNoIGNvbnRhaW5lclxuICAgICAgaWYgKGRhdGEuY29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgICB2YXIgdXBkYXRlRWFjaE1heCA9IHVwZGF0ZU1heChkYXRhKTtcbiAgICAgICAgZGF0YS5saW5rcy5lYWNoKHVwZGF0ZUVhY2hNYXgpO1xuICAgICAgICBkYXRhLmRyb3Bkb3ducy5lYWNoKHVwZGF0ZUVhY2hNYXgpO1xuICAgICAgfVxuICAgICAgLy8gSWYgY3VycmVudGx5IG9wZW4sIHVwZGF0ZSBoZWlnaHQgdG8gbWF0Y2ggYm9keVxuICAgICAgaWYgKGRhdGEub3Blbikge1xuICAgICAgICBzZXRPdmVybGF5SGVpZ2h0KGRhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBtYXhXaWR0aCA9ICdtYXgtd2lkdGgnO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZU1heChkYXRhKSB7XG4gICAgICAvLyBTZXQgbWF4LXdpZHRoIG9mIGVhY2ggZWxlbWVudCB0byBtYXRjaCBjb250YWluZXJcbiAgICAgIHZhciBjb250YWluTWF4ID0gZGF0YS5jb250YWluZXIuY3NzKG1heFdpZHRoKTtcbiAgICAgIGlmIChjb250YWluTWF4ID09PSAnbm9uZScpIHtcbiAgICAgICAgY29udGFpbk1heCA9ICcnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChpLCBsaW5rKSB7XG4gICAgICAgIGxpbmsgPSAkKGxpbmspO1xuICAgICAgICBsaW5rLmNzcyhtYXhXaWR0aCwgJycpO1xuICAgICAgICAvLyBEb24ndCBzZXQgdGhlIG1heC13aWR0aCBpZiBhbiB1cHN0cmVhbSB2YWx1ZSBleGlzdHNcbiAgICAgICAgaWYgKGxpbmsuY3NzKG1heFdpZHRoKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgbGluay5jc3MobWF4V2lkdGgsIGNvbnRhaW5NYXgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZE1lbnVPcGVuKGksIGVsKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmF2LW1lbnUtb3BlbicsICcnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVNZW51T3BlbihpLCBlbCkge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLW5hdi1tZW51LW9wZW4nKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvcGVuKGRhdGEsIGltbWVkaWF0ZSkge1xuICAgICAgaWYgKGRhdGEub3Blbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkYXRhLm9wZW4gPSB0cnVlO1xuICAgICAgZGF0YS5tZW51LmVhY2goYWRkTWVudU9wZW4pO1xuICAgICAgZGF0YS5saW5rcy5hZGRDbGFzcyhuYXZiYXJPcGVuZWRMaW5rKTtcbiAgICAgIGRhdGEuZHJvcGRvd25zLmFkZENsYXNzKG5hdmJhck9wZW5lZERyb3Bkb3duKTtcbiAgICAgIGRhdGEuZHJvcGRvd25Ub2dnbGUuYWRkQ2xhc3MobmF2YmFyT3BlbmVkRHJvcGRvd25Ub2dnbGUpO1xuICAgICAgZGF0YS5kcm9wZG93bkxpc3QuYWRkQ2xhc3MobmF2YmFyT3BlbmVkRHJvcGRvd25MaXN0KTtcbiAgICAgIGRhdGEuYnV0dG9uLmFkZENsYXNzKG5hdmJhck9wZW5lZEJ1dHRvbik7XG4gICAgICB2YXIgY29uZmlnID0gZGF0YS5jb25maWc7XG4gICAgICB2YXIgYW5pbWF0aW9uID0gY29uZmlnLmFuaW1hdGlvbjtcbiAgICAgIGlmIChcbiAgICAgICAgYW5pbWF0aW9uID09PSAnbm9uZScgfHxcbiAgICAgICAgIXRyYW0uc3VwcG9ydC50cmFuc2Zvcm0gfHxcbiAgICAgICAgY29uZmlnLmR1cmF0aW9uIDw9IDBcbiAgICAgICkge1xuICAgICAgICBpbW1lZGlhdGUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdmFyIGJvZHlIZWlnaHQgPSBzZXRPdmVybGF5SGVpZ2h0KGRhdGEpO1xuICAgICAgdmFyIG1lbnVIZWlnaHQgPSBkYXRhLm1lbnUub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICB2YXIgbWVudVdpZHRoID0gZGF0YS5tZW51Lm91dGVyV2lkdGgodHJ1ZSk7XG4gICAgICB2YXIgbmF2SGVpZ2h0ID0gZGF0YS5lbC5oZWlnaHQoKTtcbiAgICAgIHZhciBuYXZiYXJFbCA9IGRhdGEuZWxbMF07XG4gICAgICByZXNpemUoMCwgbmF2YmFyRWwpO1xuICAgICAgaXguaW50cm8oMCwgbmF2YmFyRWwpO1xuICAgICAgZGlzcGF0Y2hJeDNDb21wb25lbnRFdmVudChuYXZiYXJFbCwgJ29wZW4nKTtcbiAgICAgIFdlYmZsb3cucmVkcmF3LnVwKCk7XG5cbiAgICAgIC8vIExpc3RlbiBmb3IgY2xpY2sgb3V0c2lkZSBldmVudHNcbiAgICAgIGlmICghZGVzaWduZXIpIHtcbiAgICAgICAgJGRvYy5vbignY2xpY2snICsgbmFtZXNwYWNlLCBkYXRhLm91dHNpZGUpO1xuICAgICAgfVxuXG4gICAgICAvLyBObyB0cmFuc2l0aW9uIGZvciBpbW1lZGlhdGVcbiAgICAgIGlmIChpbW1lZGlhdGUpIHtcbiAgICAgICAgY29tcGxldGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHJhbnNDb25maWcgPSAndHJhbnNmb3JtICcgKyBjb25maWcuZHVyYXRpb24gKyAnbXMgJyArIGNvbmZpZy5lYXNpbmc7XG5cbiAgICAgIC8vIEFkZCBtZW51IHRvIG92ZXJsYXlcbiAgICAgIGlmIChkYXRhLm92ZXJsYXkpIHtcbiAgICAgICAgbWVudVNpYmxpbmcgPSBkYXRhLm1lbnUucHJldigpO1xuICAgICAgICBkYXRhLm92ZXJsYXkuc2hvdygpLmFwcGVuZChkYXRhLm1lbnUpO1xuICAgICAgfVxuXG4gICAgICAvLyBPdmVyIGxlZnQvcmlnaHRcbiAgICAgIGlmIChjb25maWcuYW5pbU92ZXIpIHtcbiAgICAgICAgdHJhbShkYXRhLm1lbnUpXG4gICAgICAgICAgLmFkZCh0cmFuc0NvbmZpZylcbiAgICAgICAgICAuc2V0KHt4OiBjb25maWcuYW5pbURpcmVjdCAqIG1lbnVXaWR0aCwgaGVpZ2h0OiBib2R5SGVpZ2h0fSlcbiAgICAgICAgICAuc3RhcnQoe3g6IDB9KVxuICAgICAgICAgIC50aGVuKGNvbXBsZXRlKTtcbiAgICAgICAgZGF0YS5vdmVybGF5ICYmIGRhdGEub3ZlcmxheS53aWR0aChtZW51V2lkdGgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIERyb3AgRG93blxuICAgICAgdmFyIG9mZnNldFkgPSBuYXZIZWlnaHQgKyBtZW51SGVpZ2h0O1xuICAgICAgdHJhbShkYXRhLm1lbnUpXG4gICAgICAgIC5hZGQodHJhbnNDb25maWcpXG4gICAgICAgIC5zZXQoe3k6IC1vZmZzZXRZfSlcbiAgICAgICAgLnN0YXJ0KHt5OiAwfSlcbiAgICAgICAgLnRoZW4oY29tcGxldGUpO1xuXG4gICAgICBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgZGF0YS5idXR0b24uYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0T3ZlcmxheUhlaWdodChkYXRhKSB7XG4gICAgICB2YXIgY29uZmlnID0gZGF0YS5jb25maWc7XG4gICAgICB2YXIgYm9keUhlaWdodCA9IGNvbmZpZy5kb2NIZWlnaHQgPyAkZG9jLmhlaWdodCgpIDogJGJvZHkuaGVpZ2h0KCk7XG4gICAgICBpZiAoY29uZmlnLmFuaW1PdmVyKSB7XG4gICAgICAgIGRhdGEubWVudS5oZWlnaHQoYm9keUhlaWdodCk7XG4gICAgICB9IGVsc2UgaWYgKGRhdGEuZWwuY3NzKCdwb3NpdGlvbicpICE9PSAnZml4ZWQnKSB7XG4gICAgICAgIGJvZHlIZWlnaHQgLT0gZGF0YS5lbC5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgIH1cbiAgICAgIGRhdGEub3ZlcmxheSAmJiBkYXRhLm92ZXJsYXkuaGVpZ2h0KGJvZHlIZWlnaHQpO1xuICAgICAgcmV0dXJuIGJvZHlIZWlnaHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2UoZGF0YSwgaW1tZWRpYXRlKSB7XG4gICAgICBpZiAoIWRhdGEub3Blbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkYXRhLm9wZW4gPSBmYWxzZTtcbiAgICAgIGRhdGEuYnV0dG9uLnJlbW92ZUNsYXNzKG5hdmJhck9wZW5lZEJ1dHRvbik7XG4gICAgICB2YXIgY29uZmlnID0gZGF0YS5jb25maWc7XG4gICAgICBpZiAoXG4gICAgICAgIGNvbmZpZy5hbmltYXRpb24gPT09ICdub25lJyB8fFxuICAgICAgICAhdHJhbS5zdXBwb3J0LnRyYW5zZm9ybSB8fFxuICAgICAgICBjb25maWcuZHVyYXRpb24gPD0gMFxuICAgICAgKSB7XG4gICAgICAgIGltbWVkaWF0ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBpeC5vdXRybygwLCBkYXRhLmVsWzBdKTtcbiAgICAgIGRpc3BhdGNoSXgzQ29tcG9uZW50RXZlbnQoZGF0YS5lbFswXSwgJ2Nsb3NlJyk7XG5cbiAgICAgIC8vIFN0b3AgbGlzdGVuaW5nIGZvciBjbGljayBvdXRzaWRlIGV2ZW50c1xuICAgICAgJGRvYy5vZmYoJ2NsaWNrJyArIG5hbWVzcGFjZSwgZGF0YS5vdXRzaWRlKTtcblxuICAgICAgaWYgKGltbWVkaWF0ZSkge1xuICAgICAgICB0cmFtKGRhdGEubWVudSkuc3RvcCgpO1xuICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0cmFuc0NvbmZpZyA9ICd0cmFuc2Zvcm0gJyArIGNvbmZpZy5kdXJhdGlvbiArICdtcyAnICsgY29uZmlnLmVhc2luZzI7XG4gICAgICB2YXIgbWVudUhlaWdodCA9IGRhdGEubWVudS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgIHZhciBtZW51V2lkdGggPSBkYXRhLm1lbnUub3V0ZXJXaWR0aCh0cnVlKTtcbiAgICAgIHZhciBuYXZIZWlnaHQgPSBkYXRhLmVsLmhlaWdodCgpO1xuXG4gICAgICAvLyBPdmVyIGxlZnQvcmlnaHRcbiAgICAgIGlmIChjb25maWcuYW5pbU92ZXIpIHtcbiAgICAgICAgdHJhbShkYXRhLm1lbnUpXG4gICAgICAgICAgLmFkZCh0cmFuc0NvbmZpZylcbiAgICAgICAgICAuc3RhcnQoe3g6IG1lbnVXaWR0aCAqIGNvbmZpZy5hbmltRGlyZWN0fSlcbiAgICAgICAgICAudGhlbihjb21wbGV0ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gRHJvcCBEb3duXG4gICAgICB2YXIgb2Zmc2V0WSA9IG5hdkhlaWdodCArIG1lbnVIZWlnaHQ7XG4gICAgICB0cmFtKGRhdGEubWVudSkuYWRkKHRyYW5zQ29uZmlnKS5zdGFydCh7eTogLW9mZnNldFl9KS50aGVuKGNvbXBsZXRlKTtcblxuICAgICAgZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIGRhdGEubWVudS5oZWlnaHQoJycpO1xuICAgICAgICB0cmFtKGRhdGEubWVudSkuc2V0KHt4OiAwLCB5OiAwfSk7XG4gICAgICAgIGRhdGEubWVudS5lYWNoKHJlbW92ZU1lbnVPcGVuKTtcbiAgICAgICAgZGF0YS5saW5rcy5yZW1vdmVDbGFzcyhuYXZiYXJPcGVuZWRMaW5rKTtcbiAgICAgICAgZGF0YS5kcm9wZG93bnMucmVtb3ZlQ2xhc3MobmF2YmFyT3BlbmVkRHJvcGRvd24pO1xuICAgICAgICBkYXRhLmRyb3Bkb3duVG9nZ2xlLnJlbW92ZUNsYXNzKG5hdmJhck9wZW5lZERyb3Bkb3duVG9nZ2xlKTtcbiAgICAgICAgZGF0YS5kcm9wZG93bkxpc3QucmVtb3ZlQ2xhc3MobmF2YmFyT3BlbmVkRHJvcGRvd25MaXN0KTtcbiAgICAgICAgaWYgKGRhdGEub3ZlcmxheSAmJiBkYXRhLm92ZXJsYXkuY2hpbGRyZW4oKS5sZW5ndGgpIHtcbiAgICAgICAgICAvLyBNb3ZlIG1lbnUgYmFjayB0byBwYXJlbnQgYXQgdGhlIG9yaWdpbmFsIGxvY2F0aW9uXG4gICAgICAgICAgbWVudVNpYmxpbmcubGVuZ3RoXG4gICAgICAgICAgICA/IGRhdGEubWVudS5pbnNlcnRBZnRlcihtZW51U2libGluZylcbiAgICAgICAgICAgIDogZGF0YS5tZW51LnByZXBlbmRUbyhkYXRhLnBhcmVudCk7XG4gICAgICAgICAgZGF0YS5vdmVybGF5LmF0dHIoJ3N0eWxlJywgJycpLmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRyaWdnZXIgZXZlbnQgc28gb3RoZXIgY29tcG9uZW50cyBjYW4gaG9vayBpbiAoZHJvcGRvd24pXG4gICAgICAgIGRhdGEuZWwudHJpZ2dlckhhbmRsZXIoJ3ctY2xvc2UnKTtcbiAgICAgICAgZGF0YS5idXR0b24uYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEV4cG9ydCBtb2R1bGVcbiAgICByZXR1cm4gYXBpO1xuICB9KVxuKTtcbiJdLCJuYW1lcyI6WyJXZWJmbG93IiwicmVxdWlyZSIsIklYRXZlbnRzIiwiS0VZX0NPREVTIiwiQVJST1dfTEVGVCIsIkFSUk9XX1VQIiwiQVJST1dfUklHSFQiLCJBUlJPV19ET1dOIiwiRVNDQVBFIiwiU1BBQ0UiLCJFTlRFUiIsIkhPTUUiLCJFTkQiLCJJWDNfQ09NUE9ORU5UX0VWRU5UIiwiZGlzcGF0Y2hJeDNDb21wb25lbnRFdmVudCIsImVsZW1lbnQiLCJzdGF0ZSIsImRpc3BhdGNoQ3VzdG9tRXZlbnQiLCJjb21wb25lbnQiLCJkZWZpbmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiJCIsIl8iLCJhcGkiLCJ0cmFtIiwiJHdpbiIsIndpbmRvdyIsIiRkb2MiLCJkb2N1bWVudCIsImRlYm91bmNlIiwiJGJvZHkiLCIkbmF2YmFycyIsImRlc2lnbmVyIiwiaW5FZGl0b3IiLCJpbkFwcCIsImVudiIsIm92ZXJsYXkiLCJuYW1lc3BhY2UiLCJuYXZiYXJPcGVuZWRCdXR0b24iLCJuYXZiYXJPcGVuZWREcm9wZG93biIsIm5hdmJhck9wZW5lZERyb3Bkb3duVG9nZ2xlIiwibmF2YmFyT3BlbmVkRHJvcGRvd25MaXN0IiwibmF2YmFyT3BlbmVkTGluayIsIml4IiwidHJpZ2dlcnMiLCJtZW51U2libGluZyIsInJlYWR5IiwiZGVzaWduIiwicHJldmlldyIsImluaXQiLCJkZXN0cm95IiwicmVtb3ZlTGlzdGVuZXJzIiwibGVuZ3RoIiwiZWFjaCIsInRlYXJkb3duIiwiYm9keSIsImZpbmQiLCJidWlsZCIsImFkZExpc3RlbmVycyIsInJlc2l6ZSIsIm9mZiIsInJlc2l6ZUFsbCIsIm9uIiwiaSIsImVsIiwiJGVsIiwiZGF0YSIsIm9wZW4iLCJjb25maWciLCJzZWxlY3RlZElkeCIsIm1lbnUiLCJsaW5rcyIsImRyb3Bkb3ducyIsImRyb3Bkb3duVG9nZ2xlIiwiZHJvcGRvd25MaXN0IiwiYnV0dG9uIiwiY29udGFpbmVyIiwib3ZlcmxheUNvbnRhaW5lcklkIiwib3V0c2lkZSIsIm5hdkJyYW5kTGluayIsImF0dHIiLCJjb25maWd1cmUiLCJyZW1vdmVPdmVybGF5IiwiaGFuZGxlciIsImFkZE92ZXJsYXkiLCJ0b2dnbGUiLCJuYXZpZ2F0ZSIsIm1ha2VUb2dnbGVCdXR0b25LZXlib2FyZEhhbmRsZXIiLCJtYWtlTGlua3NLZXlib2FyZEhhbmRsZXIiLCJyZW1vdmVEYXRhIiwiY2xvc2UiLCJyZW1vdmUiLCJhcHBlbmRUbyIsInBhcmVudCIsIm9sZCIsImFuaW1hdGlvbiIsImFuaW1PdmVyIiwidGVzdCIsImFuaW1EaXJlY3QiLCJkZWZlciIsInJlb3BlbiIsImVhc2luZyIsImVhc2luZzIiLCJkdXJhdGlvbiIsIk51bWJlciIsImRvY0hlaWdodCIsImV2dCIsIm9wdGlvbnMiLCJ3aW5XaWR0aCIsIndpZHRoIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZm9jdXNTZWxlY3RlZExpbmsiLCJpbmRleCIsImFjdGl2ZUVsZW1lbnQiLCJmb2N1cyIsIk1hdGgiLCJtYXgiLCJtaW4iLCJzZWxlY3RlZEVsZW1lbnQiLCJsaW5rIiwiaHJlZiIsInZhbGlkQ2xpY2siLCJjdXJyZW50VGFyZ2V0IiwiaW5kZXhPZiIsIiR0YXJnZXQiLCJ0YXJnZXQiLCJjbG9zZXN0Iiwib3V0c2lkZURlYm91bmNlZCIsImlzIiwiY29sbGFwc2VkIiwiY3NzIiwidXBkYXRlRWFjaE1heCIsInVwZGF0ZU1heCIsInNldE92ZXJsYXlIZWlnaHQiLCJtYXhXaWR0aCIsImNvbnRhaW5NYXgiLCJhZGRNZW51T3BlbiIsInNldEF0dHJpYnV0ZSIsInJlbW92ZU1lbnVPcGVuIiwicmVtb3ZlQXR0cmlidXRlIiwiaW1tZWRpYXRlIiwiYWRkQ2xhc3MiLCJzdXBwb3J0IiwidHJhbnNmb3JtIiwiYm9keUhlaWdodCIsIm1lbnVIZWlnaHQiLCJvdXRlckhlaWdodCIsIm1lbnVXaWR0aCIsIm91dGVyV2lkdGgiLCJuYXZIZWlnaHQiLCJoZWlnaHQiLCJuYXZiYXJFbCIsImludHJvIiwicmVkcmF3IiwidXAiLCJjb21wbGV0ZSIsInRyYW5zQ29uZmlnIiwicHJldiIsInNob3ciLCJhcHBlbmQiLCJhZGQiLCJzZXQiLCJ4Iiwic3RhcnQiLCJ0aGVuIiwib2Zmc2V0WSIsInkiLCJyZW1vdmVDbGFzcyIsIm91dHJvIiwic3RvcCIsImNoaWxkcmVuIiwi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

}),
9078: (function (module, __unused_webpack_exports, __webpack_require__) {
/* global document window */ /**
 * Webflow: Tabs component
 */ 
var Webflow = __webpack_require__(3949);
var IXEvents = __webpack_require__(5134);
Webflow.define('tabs', module.exports = function($) {
    var api = {};
    var tram = $.tram;
    var $doc = $(document);
    var $tabs;
    var design;
    var env = Webflow.env;
    var safari = env.safari;
    var inApp = env();
    var tabAttr = 'data-w-tab';
    var paneAttr = 'data-w-pane';
    var namespace = '.w-tabs';
    var linkCurrent = 'w--current';
    var tabActive = 'w--tab-active';
    var ix = IXEvents.triggers;
    var inRedraw = false;
    // -----------------------------------
    // Module methods
    api.ready = api.design = api.preview = init;
    api.redraw = function() {
        inRedraw = true;
        init();
        inRedraw = false;
    };
    api.destroy = function() {
        $tabs = $doc.find(namespace);
        if (!$tabs.length) {
            return;
        }
        $tabs.each(resetIX);
        removeListeners();
    };
    // -----------------------------------
    // Private methods
    function init() {
        design = inApp && Webflow.env('design');
        // Find all instances on the page
        $tabs = $doc.find(namespace);
        if (!$tabs.length) {
            return;
        }
        $tabs.each(build);
        if (Webflow.env('preview') && !inRedraw) {
            $tabs.each(resetIX);
        }
        removeListeners();
        addListeners();
    }
    function removeListeners() {
        Webflow.redraw.off(api.redraw);
    }
    function addListeners() {
        Webflow.redraw.on(api.redraw);
    }
    function resetIX(i, el) {
        var data = $.data(el, namespace);
        if (!data) {
            return;
        }
        data.links && data.links.each(ix.reset);
        data.panes && data.panes.each(ix.reset);
    }
    function build(i, el) {
        var widgetHash = namespace.substr(1) + '-' + i;
        var $el = $(el);
        // Store state in data
        var data = $.data(el, namespace);
        if (!data) {
            data = $.data(el, namespace, {
                el: $el,
                config: {}
            });
        }
        data.current = null;
        data.tabIdentifier = widgetHash + '-' + tabAttr;
        data.paneIdentifier = widgetHash + '-' + paneAttr;
        data.menu = $el.children('.w-tab-menu');
        data.links = data.menu.children('.w-tab-link');
        data.content = $el.children('.w-tab-content');
        data.panes = data.content.children('.w-tab-pane');
        // Remove old events
        data.el.off(namespace);
        data.links.off(namespace);
        // This role is necessary in the ARIA spec
        data.menu.attr('role', 'tablist');
        // Set all tabs unfocusable
        data.links.attr('tabindex', '-1');
        // Set config from data attributes
        configure(data);
        // Wire up events when not in design mode
        if (!design) {
            data.links.on('click' + namespace, linkSelect(data));
            data.links.on('keydown' + namespace, handleLinkKeydown(data));
            // Trigger first intro event from current tab
            var $link = data.links.filter('.' + linkCurrent);
            var tab = $link.attr(tabAttr);
            tab && changeTab(data, {
                tab,
                immediate: true
            });
        }
    }
    function configure(data) {
        var config = {};
        // Set config options from data attributes
        config.easing = data.el.attr('data-easing') || 'ease';
        var intro = parseInt(data.el.attr('data-duration-in'), 10);
        // eslint-disable-next-line no-self-compare
        intro = config.intro = intro === intro ? intro : 0;
        var outro = parseInt(data.el.attr('data-duration-out'), 10);
        // eslint-disable-next-line no-self-compare
        outro = config.outro = outro === outro ? outro : 0;
        config.immediate = !intro && !outro;
        // Store config in data
        data.config = config;
    }
    function getActiveTabIdx(data) {
        var tab = data.current;
        return Array.prototype.findIndex.call(data.links, (t)=>{
            return t.getAttribute(tabAttr) === tab;
        }, null);
    }
    function linkSelect(data) {
        return function(evt) {
            evt.preventDefault();
            var tab = evt.currentTarget.getAttribute(tabAttr);
            tab && changeTab(data, {
                tab
            });
        };
    }
    function handleLinkKeydown(data) {
        return function(evt) {
            var currentIdx = getActiveTabIdx(data);
            var keyName = evt.key;
            var keyMap = {
                ArrowLeft: currentIdx - 1,
                ArrowUp: currentIdx - 1,
                ArrowRight: currentIdx + 1,
                ArrowDown: currentIdx + 1,
                End: data.links.length - 1,
                Home: 0
            };
            // Bail out of function if this key is not
            // involved in tab management
            if (!(keyName in keyMap)) return;
            evt.preventDefault();
            var nextIdx = keyMap[keyName];
            // go back to end of tabs if we wrap past the start
            if (nextIdx === -1) {
                nextIdx = data.links.length - 1;
            }
            // go back to start if we wrap past the last tab
            if (nextIdx === data.links.length) {
                nextIdx = 0;
            }
            var tabEl = data.links[nextIdx];
            var tab = tabEl.getAttribute(tabAttr);
            tab && changeTab(data, {
                tab
            });
        };
    }
    function changeTab(data, options) {
        options = options || {};
        var config = data.config;
        var easing = config.easing;
        var tab = options.tab;
        // Don't select the same tab twice
        if (tab === data.current) {
            return;
        }
        data.current = tab;
        /**
       * The currently active tab.
       * Will be referenced to manage focus after
       * TabLink attributes are changed
       * @type {HTMLAnchorElement}
       */ var currentTab;
        // Select the current link
        data.links.each(function(i, el) {
            var $el = $(el);
            // Add important attributes at build time.
            if (options.immediate || config.immediate) {
                // Store corresponding pane for reference.
                var pane = data.panes[i];
                // IDs are necessary for ARIA relationships,
                // so if the user did not create one, we create one
                // using our generated identifier
                if (!el.id) {
                    el.id = data.tabIdentifier + '-' + i;
                }
                if (!pane.id) {
                    pane.id = data.paneIdentifier + '-' + i;
                }
                el.href = '#' + pane.id;
                // Tab elements must take this role
                el.setAttribute('role', 'tab');
                // Tab elements must reference the unique ID of the panel
                // that they control
                el.setAttribute('aria-controls', pane.id);
                // Tab elements must report that they are not selected
                // by default
                el.setAttribute('aria-selected', 'false');
                // Panes must take on the `Tabpanel` role
                pane.setAttribute('role', 'tabpanel');
                // Elements with tabpanel role must be labelled by
                // their controlling tab
                pane.setAttribute('aria-labelledby', el.id);
            }
            if (el.getAttribute(tabAttr) === tab) {
                // This is the current tab. Store it.
                currentTab = el;
                $el.addClass(linkCurrent).removeAttr('tabindex').attr({
                    'aria-selected': 'true'
                }).each(ix.intro);
            } else if ($el.hasClass(linkCurrent)) {
                $el.removeClass(linkCurrent).attr({
                    tabindex: '-1',
                    'aria-selected': 'false'
                }).each(ix.outro);
            }
        });
        // Find the new tab panes and keep track of previous
        var targets = [];
        var previous = [];
        data.panes.each(function(i, el) {
            var $el = $(el);
            if (el.getAttribute(tabAttr) === tab) {
                targets.push(el);
            } else if ($el.hasClass(tabActive)) {
                previous.push(el);
            }
        });
        var $targets = $(targets);
        var $previous = $(previous);
        // Switch tabs immediately and bypass transitions
        if (options.immediate || config.immediate) {
            $targets.addClass(tabActive).each(ix.intro);
            $previous.removeClass(tabActive);
            // Redraw to benefit components in the hidden tab pane
            // But only if not currently in the middle of a redraw
            if (!inRedraw) {
                Webflow.redraw.up();
            }
            return;
        } else {
            // Backwards compatible hack to prevent focus from scrolling
            var x = window.scrollX;
            var y = window.scrollY;
            currentTab.focus();
            window.scrollTo(x, y);
        }
        // Fade out the currently active tab before intro
        if ($previous.length && config.outro) {
            $previous.each(ix.outro);
            tram($previous).add('opacity ' + config.outro + 'ms ' + easing, {
                fallback: safari
            }).start({
                opacity: 0
            }).then(()=>fadeIn(config, $previous, $targets));
        } else {
            // Skip the outro and play intro
            fadeIn(config, $previous, $targets);
        }
    }
    // Fade in the new target
    function fadeIn(config, $previous, $targets) {
        // Clear previous active class + styles touched by tram
        // We cannot remove the whole inline style because it could be dynamically bound
        $previous.removeClass(tabActive).css({
            opacity: '',
            transition: '',
            transform: '',
            width: '',
            height: ''
        });
        // Add active class to new target
        $targets.addClass(tabActive).each(ix.intro);
        Webflow.redraw.up();
        // Set opacity immediately if intro is zero
        if (!config.intro) {
            return tram($targets).set({
                opacity: 1
            });
        }
        // Otherwise fade in opacity
        tram($targets).set({
            opacity: 0
        }).redraw().add('opacity ' + config.intro + 'ms ' + config.easing, {
            fallback: safari
        }).start({
            opacity: 1
        });
    }
    // Export module
    return api;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3NoYXJlZC9yZW5kZXIvcGx1Z2lucy9UYWJzL3dlYmZsb3ctdGFicy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgZG9jdW1lbnQgd2luZG93ICovXG5cbi8qKlxuICogV2ViZmxvdzogVGFicyBjb21wb25lbnRcbiAqL1xuXG52YXIgV2ViZmxvdyA9IHJlcXVpcmUoJy4uL0Jhc2VTaXRlTW9kdWxlcy93ZWJmbG93LWxpYicpO1xudmFyIElYRXZlbnRzID0gcmVxdWlyZSgnLi4vQmFzZVNpdGVNb2R1bGVzL3dlYmZsb3ctaXgyLWV2ZW50cycpO1xuXG5XZWJmbG93LmRlZmluZShcbiAgJ3RhYnMnLFxuICAobW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJCkge1xuICAgIHZhciBhcGkgPSB7fTtcbiAgICB2YXIgdHJhbSA9ICQudHJhbTtcbiAgICB2YXIgJGRvYyA9ICQoZG9jdW1lbnQpO1xuICAgIHZhciAkdGFicztcbiAgICB2YXIgZGVzaWduO1xuICAgIHZhciBlbnYgPSBXZWJmbG93LmVudjtcbiAgICB2YXIgc2FmYXJpID0gZW52LnNhZmFyaTtcbiAgICB2YXIgaW5BcHAgPSBlbnYoKTtcbiAgICB2YXIgdGFiQXR0ciA9ICdkYXRhLXctdGFiJztcbiAgICB2YXIgcGFuZUF0dHIgPSAnZGF0YS13LXBhbmUnO1xuICAgIHZhciBuYW1lc3BhY2UgPSAnLnctdGFicyc7XG4gICAgdmFyIGxpbmtDdXJyZW50ID0gJ3ctLWN1cnJlbnQnO1xuICAgIHZhciB0YWJBY3RpdmUgPSAndy0tdGFiLWFjdGl2ZSc7XG4gICAgdmFyIGl4ID0gSVhFdmVudHMudHJpZ2dlcnM7XG5cbiAgICB2YXIgaW5SZWRyYXcgPSBmYWxzZTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gTW9kdWxlIG1ldGhvZHNcblxuICAgIGFwaS5yZWFkeSA9IGFwaS5kZXNpZ24gPSBhcGkucHJldmlldyA9IGluaXQ7XG5cbiAgICBhcGkucmVkcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaW5SZWRyYXcgPSB0cnVlO1xuICAgICAgaW5pdCgpO1xuICAgICAgaW5SZWRyYXcgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgYXBpLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkdGFicyA9ICRkb2MuZmluZChuYW1lc3BhY2UpO1xuICAgICAgaWYgKCEkdGFicy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgJHRhYnMuZWFjaChyZXNldElYKTtcbiAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgIH07XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFByaXZhdGUgbWV0aG9kc1xuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIGRlc2lnbiA9IGluQXBwICYmIFdlYmZsb3cuZW52KCdkZXNpZ24nKTtcblxuICAgICAgLy8gRmluZCBhbGwgaW5zdGFuY2VzIG9uIHRoZSBwYWdlXG4gICAgICAkdGFicyA9ICRkb2MuZmluZChuYW1lc3BhY2UpO1xuICAgICAgaWYgKCEkdGFicy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgJHRhYnMuZWFjaChidWlsZCk7XG4gICAgICBpZiAoV2ViZmxvdy5lbnYoJ3ByZXZpZXcnKSAmJiAhaW5SZWRyYXcpIHtcbiAgICAgICAgJHRhYnMuZWFjaChyZXNldElYKTtcbiAgICAgIH1cblxuICAgICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICBhZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgICBXZWJmbG93LnJlZHJhdy5vZmYoYXBpLnJlZHJhdyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgICAgV2ViZmxvdy5yZWRyYXcub24oYXBpLnJlZHJhdyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRJWChpLCBlbCkge1xuICAgICAgdmFyIGRhdGEgPSAkLmRhdGEoZWwsIG5hbWVzcGFjZSk7XG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZGF0YS5saW5rcyAmJiBkYXRhLmxpbmtzLmVhY2goaXgucmVzZXQpO1xuICAgICAgZGF0YS5wYW5lcyAmJiBkYXRhLnBhbmVzLmVhY2goaXgucmVzZXQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1aWxkKGksIGVsKSB7XG4gICAgICB2YXIgd2lkZ2V0SGFzaCA9IG5hbWVzcGFjZS5zdWJzdHIoMSkgKyAnLScgKyBpO1xuICAgICAgdmFyICRlbCA9ICQoZWwpO1xuXG4gICAgICAvLyBTdG9yZSBzdGF0ZSBpbiBkYXRhXG4gICAgICB2YXIgZGF0YSA9ICQuZGF0YShlbCwgbmFtZXNwYWNlKTtcbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gJC5kYXRhKGVsLCBuYW1lc3BhY2UsIHtlbDogJGVsLCBjb25maWc6IHt9fSk7XG4gICAgICB9XG4gICAgICBkYXRhLmN1cnJlbnQgPSBudWxsO1xuICAgICAgZGF0YS50YWJJZGVudGlmaWVyID0gd2lkZ2V0SGFzaCArICctJyArIHRhYkF0dHI7XG4gICAgICBkYXRhLnBhbmVJZGVudGlmaWVyID0gd2lkZ2V0SGFzaCArICctJyArIHBhbmVBdHRyO1xuXG4gICAgICBkYXRhLm1lbnUgPSAkZWwuY2hpbGRyZW4oJy53LXRhYi1tZW51Jyk7XG4gICAgICBkYXRhLmxpbmtzID0gZGF0YS5tZW51LmNoaWxkcmVuKCcudy10YWItbGluaycpO1xuICAgICAgZGF0YS5jb250ZW50ID0gJGVsLmNoaWxkcmVuKCcudy10YWItY29udGVudCcpO1xuICAgICAgZGF0YS5wYW5lcyA9IGRhdGEuY29udGVudC5jaGlsZHJlbignLnctdGFiLXBhbmUnKTtcblxuICAgICAgLy8gUmVtb3ZlIG9sZCBldmVudHNcbiAgICAgIGRhdGEuZWwub2ZmKG5hbWVzcGFjZSk7XG4gICAgICBkYXRhLmxpbmtzLm9mZihuYW1lc3BhY2UpO1xuXG4gICAgICAvLyBUaGlzIHJvbGUgaXMgbmVjZXNzYXJ5IGluIHRoZSBBUklBIHNwZWNcbiAgICAgIGRhdGEubWVudS5hdHRyKCdyb2xlJywgJ3RhYmxpc3QnKTtcblxuICAgICAgLy8gU2V0IGFsbCB0YWJzIHVuZm9jdXNhYmxlXG4gICAgICBkYXRhLmxpbmtzLmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XG5cbiAgICAgIC8vIFNldCBjb25maWcgZnJvbSBkYXRhIGF0dHJpYnV0ZXNcbiAgICAgIGNvbmZpZ3VyZShkYXRhKTtcblxuICAgICAgLy8gV2lyZSB1cCBldmVudHMgd2hlbiBub3QgaW4gZGVzaWduIG1vZGVcbiAgICAgIGlmICghZGVzaWduKSB7XG4gICAgICAgIGRhdGEubGlua3Mub24oJ2NsaWNrJyArIG5hbWVzcGFjZSwgbGlua1NlbGVjdChkYXRhKSk7XG4gICAgICAgIGRhdGEubGlua3Mub24oJ2tleWRvd24nICsgbmFtZXNwYWNlLCBoYW5kbGVMaW5rS2V5ZG93bihkYXRhKSk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciBmaXJzdCBpbnRybyBldmVudCBmcm9tIGN1cnJlbnQgdGFiXG4gICAgICAgIHZhciAkbGluayA9IGRhdGEubGlua3MuZmlsdGVyKCcuJyArIGxpbmtDdXJyZW50KTtcbiAgICAgICAgdmFyIHRhYiA9ICRsaW5rLmF0dHIodGFiQXR0cik7XG4gICAgICAgIHRhYiAmJiBjaGFuZ2VUYWIoZGF0YSwge3RhYiwgaW1tZWRpYXRlOiB0cnVlfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29uZmlndXJlKGRhdGEpIHtcbiAgICAgIHZhciBjb25maWcgPSB7fTtcblxuICAgICAgLy8gU2V0IGNvbmZpZyBvcHRpb25zIGZyb20gZGF0YSBhdHRyaWJ1dGVzXG4gICAgICBjb25maWcuZWFzaW5nID0gZGF0YS5lbC5hdHRyKCdkYXRhLWVhc2luZycpIHx8ICdlYXNlJztcblxuICAgICAgdmFyIGludHJvID0gcGFyc2VJbnQoZGF0YS5lbC5hdHRyKCdkYXRhLWR1cmF0aW9uLWluJyksIDEwKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGludHJvID0gY29uZmlnLmludHJvID0gaW50cm8gPT09IGludHJvID8gaW50cm8gOiAwO1xuXG4gICAgICB2YXIgb3V0cm8gPSBwYXJzZUludChkYXRhLmVsLmF0dHIoJ2RhdGEtZHVyYXRpb24tb3V0JyksIDEwKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIG91dHJvID0gY29uZmlnLm91dHJvID0gb3V0cm8gPT09IG91dHJvID8gb3V0cm8gOiAwO1xuXG4gICAgICBjb25maWcuaW1tZWRpYXRlID0gIWludHJvICYmICFvdXRybztcblxuICAgICAgLy8gU3RvcmUgY29uZmlnIGluIGRhdGFcbiAgICAgIGRhdGEuY29uZmlnID0gY29uZmlnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEFjdGl2ZVRhYklkeChkYXRhKSB7XG4gICAgICB2YXIgdGFiID0gZGF0YS5jdXJyZW50O1xuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXguY2FsbChcbiAgICAgICAgZGF0YS5saW5rcyxcbiAgICAgICAgKHQpID0+IHtcbiAgICAgICAgICByZXR1cm4gdC5nZXRBdHRyaWJ1dGUodGFiQXR0cikgPT09IHRhYjtcbiAgICAgICAgfSxcbiAgICAgICAgbnVsbFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaW5rU2VsZWN0KGRhdGEpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgdGFiID0gZXZ0LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKHRhYkF0dHIpO1xuICAgICAgICB0YWIgJiYgY2hhbmdlVGFiKGRhdGEsIHt0YWJ9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTGlua0tleWRvd24oZGF0YSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRJZHggPSBnZXRBY3RpdmVUYWJJZHgoZGF0YSk7XG4gICAgICAgIHZhciBrZXlOYW1lID0gZXZ0LmtleTtcbiAgICAgICAgdmFyIGtleU1hcCA9IHtcbiAgICAgICAgICBBcnJvd0xlZnQ6IGN1cnJlbnRJZHggLSAxLFxuICAgICAgICAgIEFycm93VXA6IGN1cnJlbnRJZHggLSAxLFxuICAgICAgICAgIEFycm93UmlnaHQ6IGN1cnJlbnRJZHggKyAxLFxuICAgICAgICAgIEFycm93RG93bjogY3VycmVudElkeCArIDEsXG4gICAgICAgICAgRW5kOiBkYXRhLmxpbmtzLmxlbmd0aCAtIDEsXG4gICAgICAgICAgSG9tZTogMCxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBCYWlsIG91dCBvZiBmdW5jdGlvbiBpZiB0aGlzIGtleSBpcyBub3RcbiAgICAgICAgLy8gaW52b2x2ZWQgaW4gdGFiIG1hbmFnZW1lbnRcbiAgICAgICAgaWYgKCEoa2V5TmFtZSBpbiBrZXlNYXApKSByZXR1cm47XG5cbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdmFyIG5leHRJZHggPSBrZXlNYXBba2V5TmFtZV07XG5cbiAgICAgICAgLy8gZ28gYmFjayB0byBlbmQgb2YgdGFicyBpZiB3ZSB3cmFwIHBhc3QgdGhlIHN0YXJ0XG4gICAgICAgIGlmIChuZXh0SWR4ID09PSAtMSkge1xuICAgICAgICAgIG5leHRJZHggPSBkYXRhLmxpbmtzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZ28gYmFjayB0byBzdGFydCBpZiB3ZSB3cmFwIHBhc3QgdGhlIGxhc3QgdGFiXG4gICAgICAgIGlmIChuZXh0SWR4ID09PSBkYXRhLmxpbmtzLmxlbmd0aCkge1xuICAgICAgICAgIG5leHRJZHggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0YWJFbCA9IGRhdGEubGlua3NbbmV4dElkeF07XG4gICAgICAgIHZhciB0YWIgPSB0YWJFbC5nZXRBdHRyaWJ1dGUodGFiQXR0cik7XG4gICAgICAgIHRhYiAmJiBjaGFuZ2VUYWIoZGF0YSwge3RhYn0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VUYWIoZGF0YSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgIHZhciBjb25maWcgPSBkYXRhLmNvbmZpZztcbiAgICAgIHZhciBlYXNpbmcgPSBjb25maWcuZWFzaW5nO1xuICAgICAgdmFyIHRhYiA9IG9wdGlvbnMudGFiO1xuXG4gICAgICAvLyBEb24ndCBzZWxlY3QgdGhlIHNhbWUgdGFiIHR3aWNlXG4gICAgICBpZiAodGFiID09PSBkYXRhLmN1cnJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZGF0YS5jdXJyZW50ID0gdGFiO1xuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIHRhYi5cbiAgICAgICAqIFdpbGwgYmUgcmVmZXJlbmNlZCB0byBtYW5hZ2UgZm9jdXMgYWZ0ZXJcbiAgICAgICAqIFRhYkxpbmsgYXR0cmlidXRlcyBhcmUgY2hhbmdlZFxuICAgICAgICogQHR5cGUge0hUTUxBbmNob3JFbGVtZW50fVxuICAgICAgICovXG4gICAgICB2YXIgY3VycmVudFRhYjtcblxuICAgICAgLy8gU2VsZWN0IHRoZSBjdXJyZW50IGxpbmtcbiAgICAgIGRhdGEubGlua3MuZWFjaChmdW5jdGlvbiAoaSwgZWwpIHtcbiAgICAgICAgdmFyICRlbCA9ICQoZWwpO1xuXG4gICAgICAgIC8vIEFkZCBpbXBvcnRhbnQgYXR0cmlidXRlcyBhdCBidWlsZCB0aW1lLlxuICAgICAgICBpZiAob3B0aW9ucy5pbW1lZGlhdGUgfHwgY29uZmlnLmltbWVkaWF0ZSkge1xuICAgICAgICAgIC8vIFN0b3JlIGNvcnJlc3BvbmRpbmcgcGFuZSBmb3IgcmVmZXJlbmNlLlxuICAgICAgICAgIHZhciBwYW5lID0gZGF0YS5wYW5lc1tpXTtcbiAgICAgICAgICAvLyBJRHMgYXJlIG5lY2Vzc2FyeSBmb3IgQVJJQSByZWxhdGlvbnNoaXBzLFxuICAgICAgICAgIC8vIHNvIGlmIHRoZSB1c2VyIGRpZCBub3QgY3JlYXRlIG9uZSwgd2UgY3JlYXRlIG9uZVxuICAgICAgICAgIC8vIHVzaW5nIG91ciBnZW5lcmF0ZWQgaWRlbnRpZmllclxuICAgICAgICAgIGlmICghZWwuaWQpIHtcbiAgICAgICAgICAgIGVsLmlkID0gZGF0YS50YWJJZGVudGlmaWVyICsgJy0nICsgaTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFwYW5lLmlkKSB7XG4gICAgICAgICAgICBwYW5lLmlkID0gZGF0YS5wYW5lSWRlbnRpZmllciArICctJyArIGk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsLmhyZWYgPSAnIycgKyBwYW5lLmlkO1xuXG4gICAgICAgICAgLy8gVGFiIGVsZW1lbnRzIG11c3QgdGFrZSB0aGlzIHJvbGVcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAndGFiJyk7XG4gICAgICAgICAgLy8gVGFiIGVsZW1lbnRzIG11c3QgcmVmZXJlbmNlIHRoZSB1bmlxdWUgSUQgb2YgdGhlIHBhbmVsXG4gICAgICAgICAgLy8gdGhhdCB0aGV5IGNvbnRyb2xcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnLCBwYW5lLmlkKTtcbiAgICAgICAgICAvLyBUYWIgZWxlbWVudHMgbXVzdCByZXBvcnQgdGhhdCB0aGV5IGFyZSBub3Qgc2VsZWN0ZWRcbiAgICAgICAgICAvLyBieSBkZWZhdWx0XG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgLy8gUGFuZXMgbXVzdCB0YWtlIG9uIHRoZSBgVGFicGFuZWxgIHJvbGVcbiAgICAgICAgICBwYW5lLnNldEF0dHJpYnV0ZSgncm9sZScsICd0YWJwYW5lbCcpO1xuICAgICAgICAgIC8vIEVsZW1lbnRzIHdpdGggdGFicGFuZWwgcm9sZSBtdXN0IGJlIGxhYmVsbGVkIGJ5XG4gICAgICAgICAgLy8gdGhlaXIgY29udHJvbGxpbmcgdGFiXG4gICAgICAgICAgcGFuZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIGVsLmlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWwuZ2V0QXR0cmlidXRlKHRhYkF0dHIpID09PSB0YWIpIHtcbiAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBjdXJyZW50IHRhYi4gU3RvcmUgaXQuXG4gICAgICAgICAgY3VycmVudFRhYiA9IGVsO1xuICAgICAgICAgICRlbFxuICAgICAgICAgICAgLmFkZENsYXNzKGxpbmtDdXJyZW50KVxuICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ3RhYmluZGV4JylcbiAgICAgICAgICAgIC5hdHRyKHsnYXJpYS1zZWxlY3RlZCc6ICd0cnVlJ30pXG4gICAgICAgICAgICAuZWFjaChpeC5pbnRybyk7XG4gICAgICAgIH0gZWxzZSBpZiAoJGVsLmhhc0NsYXNzKGxpbmtDdXJyZW50KSkge1xuICAgICAgICAgICRlbFxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGxpbmtDdXJyZW50KVxuICAgICAgICAgICAgLmF0dHIoe3RhYmluZGV4OiAnLTEnLCAnYXJpYS1zZWxlY3RlZCc6ICdmYWxzZSd9KVxuICAgICAgICAgICAgLmVhY2goaXgub3V0cm8pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gRmluZCB0aGUgbmV3IHRhYiBwYW5lcyBhbmQga2VlcCB0cmFjayBvZiBwcmV2aW91c1xuICAgICAgdmFyIHRhcmdldHMgPSBbXTtcbiAgICAgIHZhciBwcmV2aW91cyA9IFtdO1xuICAgICAgZGF0YS5wYW5lcy5lYWNoKGZ1bmN0aW9uIChpLCBlbCkge1xuICAgICAgICB2YXIgJGVsID0gJChlbCk7XG4gICAgICAgIGlmIChlbC5nZXRBdHRyaWJ1dGUodGFiQXR0cikgPT09IHRhYikge1xuICAgICAgICAgIHRhcmdldHMucHVzaChlbCk7XG4gICAgICAgIH0gZWxzZSBpZiAoJGVsLmhhc0NsYXNzKHRhYkFjdGl2ZSkpIHtcbiAgICAgICAgICBwcmV2aW91cy5wdXNoKGVsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHZhciAkdGFyZ2V0cyA9ICQodGFyZ2V0cyk7XG4gICAgICB2YXIgJHByZXZpb3VzID0gJChwcmV2aW91cyk7XG5cbiAgICAgIC8vIFN3aXRjaCB0YWJzIGltbWVkaWF0ZWx5IGFuZCBieXBhc3MgdHJhbnNpdGlvbnNcbiAgICAgIGlmIChvcHRpb25zLmltbWVkaWF0ZSB8fCBjb25maWcuaW1tZWRpYXRlKSB7XG4gICAgICAgICR0YXJnZXRzLmFkZENsYXNzKHRhYkFjdGl2ZSkuZWFjaChpeC5pbnRybyk7XG4gICAgICAgICRwcmV2aW91cy5yZW1vdmVDbGFzcyh0YWJBY3RpdmUpO1xuICAgICAgICAvLyBSZWRyYXcgdG8gYmVuZWZpdCBjb21wb25lbnRzIGluIHRoZSBoaWRkZW4gdGFiIHBhbmVcbiAgICAgICAgLy8gQnV0IG9ubHkgaWYgbm90IGN1cnJlbnRseSBpbiB0aGUgbWlkZGxlIG9mIGEgcmVkcmF3XG4gICAgICAgIGlmICghaW5SZWRyYXcpIHtcbiAgICAgICAgICBXZWJmbG93LnJlZHJhdy51cCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIEZvY3VzIGlmIHRoaXMgaXMgbm90IHRoZSBvbi1wYWdlLWxvYWQgY2FsbCB0byBgY2hhbmdlVGFiYFxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXRpYmxlIGhhY2sgdG8gcHJldmVudCBmb2N1cyBmcm9tIHNjcm9sbGluZ1xuICAgICAgICB2YXIgeCA9IHdpbmRvdy5zY3JvbGxYO1xuICAgICAgICB2YXIgeSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgICBjdXJyZW50VGFiLmZvY3VzKCk7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh4LCB5KTtcbiAgICAgIH1cblxuICAgICAgLy8gRmFkZSBvdXQgdGhlIGN1cnJlbnRseSBhY3RpdmUgdGFiIGJlZm9yZSBpbnRyb1xuICAgICAgaWYgKCRwcmV2aW91cy5sZW5ndGggJiYgY29uZmlnLm91dHJvKSB7XG4gICAgICAgICRwcmV2aW91cy5lYWNoKGl4Lm91dHJvKTtcbiAgICAgICAgdHJhbSgkcHJldmlvdXMpXG4gICAgICAgICAgLmFkZCgnb3BhY2l0eSAnICsgY29uZmlnLm91dHJvICsgJ21zICcgKyBlYXNpbmcsIHtmYWxsYmFjazogc2FmYXJpfSlcbiAgICAgICAgICAuc3RhcnQoe29wYWNpdHk6IDB9KVxuICAgICAgICAgIC50aGVuKCgpID0+IGZhZGVJbihjb25maWcsICRwcmV2aW91cywgJHRhcmdldHMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNraXAgdGhlIG91dHJvIGFuZCBwbGF5IGludHJvXG4gICAgICAgIGZhZGVJbihjb25maWcsICRwcmV2aW91cywgJHRhcmdldHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZhZGUgaW4gdGhlIG5ldyB0YXJnZXRcbiAgICBmdW5jdGlvbiBmYWRlSW4oY29uZmlnLCAkcHJldmlvdXMsICR0YXJnZXRzKSB7XG4gICAgICAvLyBDbGVhciBwcmV2aW91cyBhY3RpdmUgY2xhc3MgKyBzdHlsZXMgdG91Y2hlZCBieSB0cmFtXG4gICAgICAvLyBXZSBjYW5ub3QgcmVtb3ZlIHRoZSB3aG9sZSBpbmxpbmUgc3R5bGUgYmVjYXVzZSBpdCBjb3VsZCBiZSBkeW5hbWljYWxseSBib3VuZFxuICAgICAgJHByZXZpb3VzLnJlbW92ZUNsYXNzKHRhYkFjdGl2ZSkuY3NzKHtcbiAgICAgICAgb3BhY2l0eTogJycsXG4gICAgICAgIHRyYW5zaXRpb246ICcnLFxuICAgICAgICB0cmFuc2Zvcm06ICcnLFxuICAgICAgICB3aWR0aDogJycsXG4gICAgICAgIGhlaWdodDogJycsXG4gICAgICB9KTtcblxuICAgICAgLy8gQWRkIGFjdGl2ZSBjbGFzcyB0byBuZXcgdGFyZ2V0XG4gICAgICAkdGFyZ2V0cy5hZGRDbGFzcyh0YWJBY3RpdmUpLmVhY2goaXguaW50cm8pO1xuICAgICAgV2ViZmxvdy5yZWRyYXcudXAoKTtcblxuICAgICAgLy8gU2V0IG9wYWNpdHkgaW1tZWRpYXRlbHkgaWYgaW50cm8gaXMgemVyb1xuICAgICAgaWYgKCFjb25maWcuaW50cm8pIHtcbiAgICAgICAgcmV0dXJuIHRyYW0oJHRhcmdldHMpLnNldCh7b3BhY2l0eTogMX0pO1xuICAgICAgfVxuXG4gICAgICAvLyBPdGhlcndpc2UgZmFkZSBpbiBvcGFjaXR5XG4gICAgICB0cmFtKCR0YXJnZXRzKVxuICAgICAgICAuc2V0KHtvcGFjaXR5OiAwfSlcbiAgICAgICAgLnJlZHJhdygpXG4gICAgICAgIC5hZGQoJ29wYWNpdHkgJyArIGNvbmZpZy5pbnRybyArICdtcyAnICsgY29uZmlnLmVhc2luZywge1xuICAgICAgICAgIGZhbGxiYWNrOiBzYWZhcmksXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGFydCh7b3BhY2l0eTogMX0pO1xuICAgIH1cblxuICAgIC8vIEV4cG9ydCBtb2R1bGVcbiAgICByZXR1cm4gYXBpO1xuICB9KVxuKTtcbiJdLCJuYW1lcyI6WyJXZWJmbG93IiwicmVxdWlyZSIsIklYRXZlbnRzIiwiZGVmaW5lIiwibW9kdWxlIiwiZXhwb3J0cyIsIiQiLCJhcGkiLCJ0cmFtIiwiJGRvYyIsImRvY3VtZW50IiwiJHRhYnMiLCJkZXNpZ24iLCJlbnYiLCJzYWZhcmkiLCJpbkFwcCIsInRhYkF0dHIiLCJwYW5lQXR0ciIsIm5hbWVzcGFjZSIsImxpbmtDdXJyZW50IiwidGFiQWN0aXZlIiwiaXgiLCJ0cmlnZ2VycyIsImluUmVkcmF3IiwicmVhZHkiLCJwcmV2aWV3IiwiaW5pdCIsInJlZHJhdyIsImRlc3Ryb3kiLCJmaW5kIiwibGVuZ3RoIiwiZWFjaCIsInJlc2V0SVgiLCJyZW1vdmVMaXN0ZW5lcnMiLCJidWlsZCIsImFkZExpc3RlbmVycyIsIm9mZiIsIm9uIiwiaSIsImVsIiwiZGF0YSIsImxpbmtzIiwicmVzZXQiLCJwYW5lcyIsIndpZGdldEhhc2giLCJzdWJzdHIiLCIkZWwiLCJjb25maWciLCJjdXJyZW50IiwidGFiSWRlbnRpZmllciIsInBhbmVJZGVudGlmaWVyIiwibWVudSIsImNoaWxkcmVuIiwiY29udGVudCIsImF0dHIiLCJjb25maWd1cmUiLCJsaW5rU2VsZWN0IiwiaGFuZGxlTGlua0tleWRvd24iLCIkbGluayIsImZpbHRlciIsInRhYiIsImNoYW5nZVRhYiIsImltbWVkaWF0ZSIsImVhc2luZyIsImludHJvIiwicGFyc2VJbnQiLCJvdXRybyIsImdldEFjdGl2ZVRhYklkeCIsIkFycmF5IiwicHJvdG90eXBlIiwiZmluZEluZGV4IiwiY2FsbCIsInQiLCJnZXRBdHRyaWJ1dGUiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRUYXJnZXQiLCJjdXJyZW50SWR4Iiwia2V5TmFtZSIsImtleSIsImtleU1hcCIsIkFycm93TGVmdCIsIkFycm93VXAiLCJBcnJvd1JpZ2h0IiwiQXJyb3dEb3duIiwiRW5kIiwiSG9tZSIsIm5leHRJZHgiLCJ0YWJFbCIsIm9wdGlvbnMiLCJjdXJyZW50VGFiIiwicGFuZSIsImlkIiwiaHJlZiIsInNldEF0dHJpYnV0ZSIsImFkZENsYXNzIiwicmVtb3ZlQXR0ciIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0YWJpbmRleCIsInRhcmdldHMiLCJwcmV2aW91cyIsInB1c2giLCIkdGFyZ2V0cyIsIiRwcmV2aW91cyIsInVwIiwieCIsIndpbmRvdyIsInNjcm9sbFgiLCJ5Iiwic2Nyb2xsWSIsImZvY3VzIiwic2Nyb2xsVG8iLCJhZGQiLCJmYWxsYmFjayIsInN0YXJ0Iiwib3BhY2l0eSIsInRoZW4iLCJmYWRlSW4iLCJjc3MiLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtIiwid2lkdGgiLCJoZWlnaHQiLCJzZXQiXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQixHQUUxQjs7Q0FFQztBQUVELElBQUlBLFVBQVVDLFFBQVE7QUFDdEIsSUFBSUMsV0FBV0QsUUFBUTtBQUV2QkQsUUFBUUcsTUFBTSxDQUNaLFFBQ0NDLE9BQU9DLE9BQU8sR0FBRyxTQUFVQyxDQUFDO0lBQzNCLElBQUlDLE1BQU0sQ0FBQztJQUNYLElBQUlDLE9BQU9GLEVBQUVFLElBQUk7SUFDakIsSUFBSUMsT0FBT0gsRUFBRUk7SUFDYixJQUFJQztJQUNKLElBQUlDO0lBQ0osSUFBSUMsTUFBTWIsUUFBUWEsR0FBRztJQUNyQixJQUFJQyxTQUFTRCxJQUFJQyxNQUFNO0lBQ3ZCLElBQUlDLFFBQVFGO0lBQ1osSUFBSUcsVUFBVTtJQUNkLElBQUlDLFdBQVc7SUFDZixJQUFJQyxZQUFZO0lBQ2hCLElBQUlDLGNBQWM7SUFDbEIsSUFBSUMsWUFBWTtJQUNoQixJQUFJQyxLQUFLbkIsU0FBU29CLFFBQVE7SUFFMUIsSUFBSUMsV0FBVztJQUVmLHNDQUFzQztJQUN0QyxpQkFBaUI7SUFFakJoQixJQUFJaUIsS0FBSyxHQUFHakIsSUFBSUssTUFBTSxHQUFHTCxJQUFJa0IsT0FBTyxHQUFHQztJQUV2Q25CLElBQUlvQixNQUFNLEdBQUc7UUFDWEosV0FBVztRQUNYRztRQUNBSCxXQUFXO0lBQ2I7SUFFQWhCLElBQUlxQixPQUFPLEdBQUc7UUFDWmpCLFFBQVFGLEtBQUtvQixJQUFJLENBQUNYO1FBQ2xCLElBQUksQ0FBQ1AsTUFBTW1CLE1BQU0sRUFBRTtZQUNqQjtRQUNGO1FBQ0FuQixNQUFNb0IsSUFBSSxDQUFDQztRQUNYQztJQUNGO0lBRUEsc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUVsQixTQUFTUDtRQUNQZCxTQUFTRyxTQUFTZixRQUFRYSxHQUFHLENBQUM7UUFFOUIsaUNBQWlDO1FBQ2pDRixRQUFRRixLQUFLb0IsSUFB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

}),

}]);