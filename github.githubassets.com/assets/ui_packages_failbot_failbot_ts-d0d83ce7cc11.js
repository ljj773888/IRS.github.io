"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    ["ui_packages_failbot_failbot_ts"], {
        89359: (e, t, n) => {
            function r(e) {
                let t = document.querySelectorAll(e);
                if (t.length > 0) return t[t.length - 1]
            }

            function o() {
                return `${window.location.protocol}//${window.location.host}${function(){let e=r("meta[name=analytics-location]");return e?e.content:window.location.pathname}()+function(){let e=r("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let n=r("meta[name=analytics-location-params]");for(let e of(n&&(t+=(t?"&":"?")+n.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let n=e.content.split(":",2);t=t.replace(RegExp(` ( ^ | [ ? & ]) $ {
                    n[0]
                }($ |= )
                `,"g"),`
                $1$ {
                    n[1]
                }
                $2 `)}return t}()}`
            }
            n.d(t, {
                S: () => o
            })
        },
        26855: (e, t, n) => {
            let r;

            function o() {
                if (!r) throw Error("Client env was requested before it was loaded. This likely means you are attempting to use client env at the module level in SSR, which is not supported. Please move your client env usage into a function.");
                return r
            }

            function a() {
                return r ? .locale ? ? "en-US"
            }
            n.d(t, {
                    Kd: () => a,
                    dU: () => o
                }),
                function() {
                    if ("undefined" != typeof document) {
                        let e = document.getElementById("client-env");
                        if (e) try {
                            r = JSON.parse(e.textContent || "")
                        } catch (e) {
                            console.error("Error parsing client-env", e)
                        }
                    }
                }()
        },
        4412: (e, t, n) => {
            n.d(t, {
                C: () => a,
                x: () => o
            });
            var r = n(86283);
            let o = r.n4 ? .readyState === "interactive" || r.n4 ? .readyState === "complete" ? Promise.resolve() : new Promise(e => {
                    r.n4 ? .addEventListener("DOMContentLoaded", () => {
                        e()
                    })
                }),
                a = r.n4 ? .readyState === "complete" ? Promise.resolve() : new Promise(e => {
                    r.iG ? .addEventListener("load", e)
                })
        },
        24601: (e, t, n) => {
            n.d(t, {
                aJ: () => E,
                cI: () => v,
                eK: () => y
            });
            var r = n(82918),
                o = n(49237),
                a = n(28382),
                i = n(89359),
                u = n(53729),
                c = n(86283),
                l = n(46426),
                s = n(99484);
            let f = !1,
                d = 0,
                m = Date.now(),
                h = new Set(["Failed to fetch", "NetworkError when attempting to fetch resource."]);

            function p(e) {
                return !!("AbortError" === e.name || "TypeError" === e.name && h.has(e.message) || e.name.startsWith("ApiError") && h.has(e.message))
            }

            function y(e, t = {}) {
                if ((0, l.c)("FAILBOT_HANDLE_NON_ERRORS")) {
                    if (!(e instanceof Error || "object" == typeof e && null !== e && "name" in e && "string" == typeof e.name && "message" in e && "string" == typeof e.message)) {
                        if (function(e) {
                                if (!e || "boolean" == typeof e || "number" == typeof e) return !0;
                                if ("string" == typeof e) {
                                    if (k.some(t => e.includes(t))) return !0
                                } else if ("object" == typeof e && "string" == typeof e.message && "number" == typeof e.code) return !0;
                                return !1
                            }(e)) return;
                        let n = Error(),
                            r = function(e) {
                                try {
                                    return JSON.stringify(e)
                                } catch {
                                    return "Unserializable"
                                }
                            }(e),
                            o = {
                                type: "UnknownError",
                                value: `Unable to report error, due to a thrown non-Error type: ${typeof e}, with value ${r}`,
                                stacktrace: v(n)
                            };
                        g(S(o, t));
                        return
                    }
                    p(e) || g(S(w(e), t))
                } else p(e) || g(S(w(e), t))
            }
            async function g(e) {
                if (!(!L && !f && d < 10 && (0, o.Gb)())) return;
                let t = document.head ? .querySelector('meta[name="browser-errors-url"]') ? .content;
                if (t) {
                    if (e.error.stacktrace.some(e => b.test(e.filename) || b.test(e.function))) {
                        f = !0;
                        return
                    }
                    d++;
                    try {
                        await fetch(t, {
                            method: "post",
                            body: JSON.stringify(e)
                        })
                    } catch {}
                }
            }

            function w(e) {
                return {
                    type: e.name,
                    value: e.message,
                    stacktrace: v(e)
                }
            }

            function S(e, t = {}) {
                return Object.assign({
                    error: e,
                    sanitizedUrl: (0, i.S)() || window.location.href,
                    readyState: document.readyState,
                    referrer: (0, s.wP)(),
                    timeSinceLoad: Math.round(Date.now() - m),
                    user: E() || void 0,
                    bundler: u.A7,
                    ui: !!document.querySelector('meta[name="ui"]')
                }, t)
            }

            function v(e) {
                return (0, a.Q)(e.stack || "").map(e => ({
                    filename: e.file || "",
                    function: String(e.methodName),
                    lineno: (e.lineNumber || 0).toString(),
                    colno: (e.column || 0).toString()
                }))
            }
            let b = /(chrome|moz|safari)-extension:\/\//;

            function E() {
                let e = document.head ? .querySelector('meta[name="user-login"]') ? .content;
                if (e) return e;
                let t = (0, r.b)();
                return `anonymous-${t}`
            }
            let L = !1;
            if (c.iG ? .addEventListener("pageshow", () => L = !1), c.iG ? .addEventListener("pagehide", () => L = !0), "function" == typeof BroadcastChannel) {
                let e = new BroadcastChannel("shared-worker-error");
                e.addEventListener("message", e => {
                    y(e.data.error)
                })
            }
            let k = ["Object Not Found Matching Id", "Not implemented on this platform", "provider because it's not your default extension"]
        },
        46426: (e, t, n) => {
            n.d(t, {
                $: () => l,
                c: () => c
            });
            var r = n(15205),
                o = n(26855),
                a = n(86283);

            function i() {
                let e = (0, o.dU)().featureFlags,
                    t = e.map(e => e.toUpperCase());
                return new Set(t)
            }
            let u = a.W6 ? i : (0, r.Z)(i);

            function c(e) {
                return u().has(e.toUpperCase())
            }
            let l = {
                isFeatureEnabled: c
            }
        },
        53729: (e, t, n) => {
            n.d(t, {
                A7: () => c,
                ko: () => u,
                q1: () => i
            });
            var r = n(15205),
                o = n(86283);
            let a = (0, r.Z)(function() {
                    return o.n4 ? .head ? .querySelector('meta[name="runtime-environment"]') ? .content || ""
                }),
                i = (0, r.Z)(function() {
                    return o.n4 ? .head ? .querySelector('meta[name="is-private-instance"]') ? .content === "true"
                }),
                u = (0, r.Z)(function() {
                    return "enterprise" === a()
                }),
                c = "webpack"
        },
        44544: (e, t, n) => {
            n.d(t, {
                Z: () => i,
                _: () => u
            });
            var r = n(86283),
                o = n(71643);
            let a = class NoOpStorage {
                getItem() {
                    return null
                }
                setItem() {}
                removeItem() {}
                clear() {}
                key() {
                    return null
                }
                get length() {
                    return 0
                }
            };

            function i(e, t = {
                throwQuotaErrorsOnSet: !1
            }, n = r.iG, i = e => e, u = e => e) {
                let c;
                try {
                    if (!n) throw Error();
                    c = n[e] || new a
                } catch {
                    c = new a
                }
                let {
                    throwQuotaErrorsOnSet: l
                } = t;

                function s(e) {
                    t.sendCacheStats && (0, o.b)({
                        incrementKey: e
                    })
                }

                function f(e) {
                    try {
                        if (c.removeItem(e), t.ttl) {
                            let t = `${e}:expiry`;
                            c.removeItem(t)
                        }
                    } catch (e) {}
                }
                return {
                    getItem: function(e, t = new Date().getTime()) {
                        try {
                            let n = c.getItem(e);
                            if (!n) return null;
                            let r = `${e}:expiry`,
                                o = Number(c.getItem(r));
                            if (o && t > o) return f(e), f(r), s("SAFE_STORAGE_VALUE_EXPIRED"), null;
                            return s("SAFE_STORAGE_VALUE_WITHIN_TTL"), i(n)
                        } catch (e) {
                            return null
                        }
                    },
                    setItem: function(e, n, r = new Date().getTime()) {
                        try {
                            if (c.setItem(e, u(n)), t.ttl) {
                                let n = `${e}:expiry`,
                                    o = r + t.ttl;
                                c.setItem(n, o.toString())
                            }
                        } catch (e) {
                            if (l && e instanceof Error && e.message.toLowerCase().includes("quota")) throw e
                        }
                    },
                    removeItem: f,
                    clear: c.clear,
                    key: c.key,
                    get length() {
                        return c.length
                    }
                }
            }

            function u(e) {
                return i(e, {
                    throwQuotaErrorsOnSet: !1
                }, window, JSON.parse, JSON.stringify)
            }
        },
        39629: (e, t, n) => {
            n.d(t, {
                LS: () => a,
                cl: () => i,
                rV: () => o
            });
            var r = n(44544);
            let {
                getItem: o,
                setItem: a,
                removeItem: i
            } = (0, r.Z)("sessionStorage")
        },
        99484: (e, t, n) => {
            n.d(t, {
                Ak: () => g,
                CI: () => b,
                Gj: () => h,
                J$: () => v,
                Nb: () => E,
                Nt: () => w,
                OE: () => p,
                U6: () => f,
                Wl: () => y,
                XL: () => s,
                jN: () => o,
                pS: () => d,
                sj: () => m,
                wP: () => S
            });
            var r = n(39629);
            let o = "reload",
                a = "soft-nav:fail",
                i = "soft-nav:fail-referrer",
                u = "soft-nav:referrer",
                c = "soft-nav:marker",
                l = "soft-nav:react-app-name";

            function s() {
                (0, r.LS)(c, "0"), (0, r.cl)(u), (0, r.cl)(a), (0, r.cl)(i), (0, r.cl)(l)
            }

            function f(e) {
                (0, r.LS)(c, e)
            }

            function d() {
                (0, r.LS)(c, "0")
            }

            function m() {
                let e = (0, r.rV)(c);
                return e && "0" !== e
            }

            function h() {
                return (0, r.rV)(c)
            }

            function p() {
                return !!y()
            }

            function y() {
                return (0, r.rV)(a)
            }

            function g(e) {
                (0, r.LS)(a, e || o), (0, r.LS)(i, window.location.href)
            }

            function w() {
                (0, r.LS)(u, window.location.href)
            }

            function S() {
                return (0, r.rV)(u) || document.referrer
            }

            function v() {
                let e = E();
                e ? (0, r.LS)(l, e) : (0, r.cl)(l)
            }

            function b() {
                return (0, r.rV)(l)
            }

            function E() {
                return document.querySelector('meta[name="ui"]') ? "ui" : document.querySelector("react-app") ? .getAttribute("app-name")
            }
        },
        86283: (e, t, n) => {
            n.d(t, {
                Qg: () => r.Qg,
                W6: () => r.W6,
                cF: () => r.cF,
                iG: () => o.iG,
                n4: () => o.n4,
                ssrSafeLocation: () => o.jX,
                zu: () => o.zu
            });
            var r = n(35647),
                o = n(73614)
        },
        73614: (e, t, n) => {
            n.d(t, {
                iG: () => o,
                jX: () => i,
                n4: () => r,
                zu: () => a
            });
            let r = "undefined" == typeof document ? void 0 : document,
                o = "undefined" == typeof window ? void 0 : window,
                a = "undefined" == typeof history ? void 0 : history,
                i = "undefined" == typeof location ? {
                    pathname: "",
                    origin: "",
                    search: "",
                    hash: ""
                } : location
        },
        35647: (e, t, n) => {
            n.d(t, {
                Qg: () => a,
                W6: () => o,
                cF: () => i
            });
            var r = n(73614);
            let o = void 0 === r.n4,
                a = !o;

            function i() {
                return !!o || !!r.n4.querySelector('react-app[data-ssr="true"]')
            }
        },
        71643: (e, t, n) => {
            n.d(t, {
                B: () => d,
                b: () => c
            });
            var r = n(86283),
                o = n(4412),
                a = n(53729),
                i = n(46426);
            let u = [];

            function c(e, t = !1, n = 1) {
                if (!0 !== (0, i.c)("BROWSER_STATS_DISABLED")) {
                    if (n < 0 || n > 1) throw RangeError("Sampling probability must be between 0 and 1");
                    void 0 === e.timestamp && (e.timestamp = new Date().getTime()), e.loggedIn = !!r.n4 ? .head ? .querySelector('meta[name="user-login"]') ? .content, e.staff = d(), e.bundler = a.A7, Math.random() < n && u.push(e), t ? f() : s()
                }
            }
            let l = null;
            async function s() {
                await o.C, null == l && (l = window.requestIdleCallback(f))
            }

            function f() {
                if (l = null, !u.length) return;
                let e = r.n4 ? .head ? .querySelector('meta[name="browser-stats-url"]') ? .content;
                if (!e) return;
                let t = function(e) {
                    let t = [],
                        n = e.map(e => JSON.stringify(e));
                    for (; n.length > 0;) t.push(function(e) {
                        let t = e.shift(),
                            n = [t],
                            r = t.length;
                        for (; e.length > 0 && r <= 65536;) {
                            let t = e[0].length;
                            if (r + t <= 65536) {
                                let o = e.shift();
                                n.push(o), r += t
                            } else break
                        }
                        return n
                    }(n));
                    return t
                }(u);
                for (let n of t) ! function(e, t) {
                    try {
                        navigator.sendBeacon && navigator.sendBeacon(e, t)
                    } catch {}
                }(e, `{"stats": [${n.join(",")}] }`);
                u = []
            }

            function d() {
                return !!r.n4 ? .head ? .querySelector('meta[name="user-staff"]') ? .content
            }
            r.n4 ? .addEventListener("pagehide", f), r.n4 ? .addEventListener("visibilitychange", f)
        }
    }
]);
//# sourceMappingURL=ui_packages_failbot_failbot_ts-28d5876d8629.js.map