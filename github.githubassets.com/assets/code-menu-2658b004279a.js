"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    ["code-menu"], {
        4722: (e, t, o) => {
            o(41246)
        },
        29764: (e, t, o) => {
            o.d(t, {
                $S: () => r,
                Fk: () => a,
                sz: () => i
            });
            var n = o(71643);

            function r(e, t, o) {
                let r = {
                        hydroEventPayload: e,
                        hydroEventHmac: t,
                        visitorPayload: "",
                        visitorHmac: "",
                        hydroClientContext: o
                    },
                    a = document.querySelector("meta[name=visitor-payload]");
                a instanceof HTMLMetaElement && (r.visitorPayload = a.content);
                let i = document.querySelector("meta[name=visitor-hmac]") || "";
                i instanceof HTMLMetaElement && (r.visitorHmac = i.content), (0, n.b)(r, !0)
            }

            function a(e) {
                let t = e.getAttribute("data-hydro-view") || "",
                    o = e.getAttribute("data-hydro-view-hmac") || "",
                    n = e.getAttribute("data-hydro-client-context") || "";
                r(t, o, n)
            }

            function i(e) {
                let t = e.getAttribute("data-hydro-click-payload") || "",
                    o = e.getAttribute("data-hydro-click-hmac") || "",
                    n = e.getAttribute("data-hydro-client-context") || "";
                r(t, o, n)
            }
        },
        87551: (e, t, o) => {
            function n() {
                return /Windows/.test(navigator.userAgent) ? "windows" : /Macintosh/.test(navigator.userAgent) ? "mac" : null
            }
            o.d(t, {
                X: () => n
            }), (0, o(36071).N7)(".js-remove-unless-platform", function(e) {
                ! function(e) {
                    let t = (e.getAttribute("data-platforms") || "").split(","),
                        o = n();
                    return !!(o && t.includes(o))
                }(e) && e.remove()
            })
        },
        41246: (e, t, o) => {
            o.d(t, {
                b: () => u
            });
            var n = o(76006),
                r = o(87551),
                a = o(44544),
                i = o(29764);

            function s(e, t, o, n) {
                var r, a = arguments.length,
                    i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
                return a > 3 && i && Object.defineProperty(t, o, i), i
            }
            let {
                getItem: l,
                setItem: c
            } = (0, a.Z)("localStorage"), d = "code-button-default-tab", u = class GetRepoElement extends HTMLElement {
                showDownloadMessage(e) {
                    let t = this.findPlatform(e);
                    t && this.showPlatform(t)
                }
                showCodespaces(e) {
                    let t = this.findPlatform(e);
                    t && (this.showPlatform(t), this.loadAndUpdateContent())
                }
                showCodespaceSelector(e) {
                    let t = this.findPlatform(e);
                    t && (this.showPlatform(t), this.codespaceSelector && (this.codespaceSelector.hidden = !1))
                }
                showOpenOrCreateInCodespace() {
                    this.openOrCreateInCodespace && (this.openOrCreateInCodespace.hidden = !1)
                }
                removeOpenOrCreateInCodespace() {
                    this.openOrCreateInCodespace && this.openOrCreateInCodespace.remove()
                }
                refreshList() {
                    this.shouldRefreshList && (this.shouldRefreshList = !1, this.loadAndUpdateContent())
                }
                trackDelete() {
                    this.shouldRefreshList = !0
                }
                hideSpinner() {
                    this.codespaceLoadingMenu && (this.codespaceLoadingMenu.hidden = !0), this.codespaceList && (this.codespaceList.hidden = !1)
                }
                showSpinner() {
                    this.codespaceLoadingMenu && (this.codespaceLoadingMenu.hidden = !1), this.codespaceList && (this.codespaceList.hidden = !0)
                }
                onDetailsToggle(e) {
                    for (let e of (this.modal.hidden = !1, this.platforms)) e.hidden = !0;
                    let t = e.target;
                    if (t && t.open) {
                        !this.hasForcedCodespaceTabDefault && this.forceCodespaceTabDefault ? (this.hasForcedCodespaceTabDefault = !0, this.selectDefaultTab(!0)) : this.selectDefaultTab(!1);
                        let e = this.copilotTip;
                        e && (0, i.Fk)(e)
                    }
                }
                onDetailsKeydown(e) {
                    if ("Escape" === e.key) {
                        this.modal.hidden = !0;
                        let t = e.target;
                        t ? .closest("details") ? .removeAttribute("open")
                    }
                }
                showPlatform(e) {
                    for (let t of (this.modal.hidden = !0, this.platforms)) t.hidden = t.getAttribute("data-platform") !== e
                }
                findPlatform(e) {
                    return e.currentTarget.getAttribute("data-open-app") || (0, r.X)()
                }
                refreshOnError() {
                    window.location.reload()
                }
                pollForVscode(e) {
                    this.showPlatform("vscode");
                    let t = e.currentTarget.getAttribute("data-src");
                    t && this.vscodePoller.setAttribute("src", t)
                }
                backToCodespacesFromVscodePolling() {
                    this.loadAndUpdateContent(), this.showPlatform("codespaces")
                }
                localTabSelected() {
                    c(d, "local")
                }
                cloudTabSelected() {
                    c(d, "cloud"), this.codespaceList ? .id === "lazyLoadedCodespacesList" && this.loadAndUpdateContent()
                }
                selectDefaultTab(e) {
                    let t = e ? "cloud" : l(d);
                    if (!t) return;
                    let o = this.querySelector(`button[data-tab="${t}"`);
                    o && o.click()
                }
                loadAndUpdateContent() {
                    this.codespaceList ? .setAttribute("src", this.codespaceList.getAttribute("data-src"))
                }
                constructor(...e) {
                    super(...e), this.forceCodespaceTabDefault = !1, this.shouldRefreshList = !1, this.hasForcedCodespaceTabDefault = !1
                }
            };
            s([n.Lj], u.prototype, "forceCodespaceTabDefault", void 0), s([n.fA], u.prototype, "modal", void 0), s([n.fA], u.prototype, "codespaceForm", void 0), s([n.fA], u.prototype, "codespaceLoadingMenu", void 0), s([n.fA], u.prototype, "codespaceList", void 0), s([n.fA], u.prototype, "codespaceSelector", void 0), s([n.fA], u.prototype, "openOrCreateInCodespace", void 0), s([n.fA], u.prototype, "vscodePoller", void 0), s([n.GO], u.prototype, "platforms", void 0), s([n.fA], u.prototype, "copilotTip", void 0), u = s([n.Ih], u)
        },
        26855: (e, t, o) => {
            let n;

            function r() {
                if (!n) throw Error("Client env was requested before it was loaded. This likely means you are attempting to use client env at the module level in SSR, which is not supported. Please move your client env usage into a function.");
                return n
            }

            function a() {
                return n ? .locale ? ? "en-US"
            }
            o.d(t, {
                    Kd: () => a,
                    dU: () => r
                }),
                function() {
                    if ("undefined" != typeof document) {
                        let e = document.getElementById("client-env");
                        if (e) try {
                            n = JSON.parse(e.textContent || "")
                        } catch (e) {
                            console.error("Error parsing client-env", e)
                        }
                    }
                }()
        },
        4412: (e, t, o) => {
            o.d(t, {
                C: () => a,
                x: () => r
            });
            var n = o(86283);
            let r = n.n4 ? .readyState === "interactive" || n.n4 ? .readyState === "complete" ? Promise.resolve() : new Promise(e => {
                    n.n4 ? .addEventListener("DOMContentLoaded", () => {
                        e()
                    })
                }),
                a = n.n4 ? .readyState === "complete" ? Promise.resolve() : new Promise(e => {
                    n.iG ? .addEventListener("load", e)
                })
        },
        46426: (e, t, o) => {
            o.d(t, {
                $: () => c,
                c: () => l
            });
            var n = o(15205),
                r = o(26855),
                a = o(86283);

            function i() {
                let e = (0, r.dU)().featureFlags,
                    t = e.map(e => e.toUpperCase());
                return new Set(t)
            }
            let s = a.W6 ? i : (0, n.Z)(i);

            function l(e) {
                return s().has(e.toUpperCase())
            }
            let c = {
                isFeatureEnabled: l
            }
        },
        53729: (e, t, o) => {
            o.d(t, {
                A7: () => l,
                ko: () => s,
                q1: () => i
            });
            var n = o(15205),
                r = o(86283);
            let a = (0, n.Z)(function() {
                    return r.n4 ? .head ? .querySelector('meta[name="runtime-environment"]') ? .content || ""
                }),
                i = (0, n.Z)(function() {
                    return r.n4 ? .head ? .querySelector('meta[name="is-private-instance"]') ? .content === "true"
                }),
                s = (0, n.Z)(function() {
                    return "enterprise" === a()
                }),
                l = "webpack"
        },
        44544: (e, t, o) => {
            o.d(t, {
                Z: () => i,
                _: () => s
            });
            var n = o(86283),
                r = o(71643);
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
            }, o = n.iG, i = e => e, s = e => e) {
                let l;
                try {
                    if (!o) throw Error();
                    l = o[e] || new a
                } catch {
                    l = new a
                }
                let {
                    throwQuotaErrorsOnSet: c
                } = t;

                function d(e) {
                    t.sendCacheStats && (0, r.b)({
                        incrementKey: e
                    })
                }

                function u(e) {
                    try {
                        if (l.removeItem(e), t.ttl) {
                            let t = `${e}:expiry`;
                            l.removeItem(t)
                        }
                    } catch (e) {}
                }
                return {
                    getItem: function(e, t = new Date().getTime()) {
                        try {
                            let o = l.getItem(e);
                            if (!o) return null;
                            let n = `${e}:expiry`,
                                r = Number(l.getItem(n));
                            if (r && t > r) return u(e), u(n), d("SAFE_STORAGE_VALUE_EXPIRED"), null;
                            return d("SAFE_STORAGE_VALUE_WITHIN_TTL"), i(o)
                        } catch (e) {
                            return null
                        }
                    },
                    setItem: function(e, o, n = new Date().getTime()) {
                        try {
                            if (l.setItem(e, s(o)), t.ttl) {
                                let o = `${e}:expiry`,
                                    r = n + t.ttl;
                                l.setItem(o, r.toString())
                            }
                        } catch (e) {
                            if (c && e instanceof Error && e.message.toLowerCase().includes("quota")) throw e
                        }
                    },
                    removeItem: u,
                    clear: l.clear,
                    key: l.key,
                    get length() {
                        return l.length
                    }
                }
            }

            function s(e) {
                return i(e, {
                    throwQuotaErrorsOnSet: !1
                }, window, JSON.parse, JSON.stringify)
            }
        },
        86283: (e, t, o) => {
            o.d(t, {
                Qg: () => n.Qg,
                W6: () => n.W6,
                cF: () => n.cF,
                iG: () => r.iG,
                n4: () => r.n4,
                ssrSafeLocation: () => r.jX,
                zu: () => r.zu
            });
            var n = o(35647),
                r = o(73614)
        },
        73614: (e, t, o) => {
            o.d(t, {
                iG: () => r,
                jX: () => i,
                n4: () => n,
                zu: () => a
            });
            let n = "undefined" == typeof document ? void 0 : document,
                r = "undefined" == typeof window ? void 0 : window,
                a = "undefined" == typeof history ? void 0 : history,
                i = "undefined" == typeof location ? {
                    pathname: "",
                    origin: "",
                    search: "",
                    hash: ""
                } : location
        },
        35647: (e, t, o) => {
            o.d(t, {
                Qg: () => a,
                W6: () => r,
                cF: () => i
            });
            var n = o(73614);
            let r = void 0 === n.n4,
                a = !r;

            function i() {
                return !!r || !!n.n4.querySelector('react-app[data-ssr="true"]')
            }
        },
        71643: (e, t, o) => {
            o.d(t, {
                B: () => f,
                b: () => l
            });
            var n = o(86283),
                r = o(4412),
                a = o(53729),
                i = o(46426);
            let s = [];

            function l(e, t = !1, o = 1) {
                if (!0 !== (0, i.c)("BROWSER_STATS_DISABLED")) {
                    if (o < 0 || o > 1) throw RangeError("Sampling probability must be between 0 and 1");
                    void 0 === e.timestamp && (e.timestamp = new Date().getTime()), e.loggedIn = !!n.n4 ? .head ? .querySelector('meta[name="user-login"]') ? .content, e.staff = f(), e.bundler = a.A7, Math.random() < o && s.push(e), t ? u() : d()
                }
            }
            let c = null;
            async function d() {
                await r.C, null == c && (c = window.requestIdleCallback(u))
            }

            function u() {
                if (c = null, !s.length) return;
                let e = n.n4 ? .head ? .querySelector('meta[name="browser-stats-url"]') ? .content;
                if (!e) return;
                let t = function(e) {
                    let t = [],
                        o = e.map(e => JSON.stringify(e));
                    for (; o.length > 0;) t.push(function(e) {
                        let t = e.shift(),
                            o = [t],
                            n = t.length;
                        for (; e.length > 0 && n <= 65536;) {
                            let t = e[0].length;
                            if (n + t <= 65536) {
                                let r = e.shift();
                                o.push(r), n += t
                            } else break
                        }
                        return o
                    }(o));
                    return t
                }(s);
                for (let o of t) ! function(e, t) {
                    try {
                        navigator.sendBeacon && navigator.sendBeacon(e, t)
                    } catch {}
                }(e, `{"stats": [${o.join(",")}] }`);
                s = []
            }

            function f() {
                return !!n.n4 ? .head ? .querySelector('meta[name="user-staff"]') ? .content
            }
            n.n4 ? .addEventListener("pagehide", u), n.n4 ? .addEventListener("visibilitychange", u)
        },
        76006: (e, t, o) => {
            let n;
            o.d(t, {
                Lj: () => m,
                Ih: () => S,
                P4: () => u,
                nW: () => T,
                fA: () => v,
                GO: () => A
            });
            let r = new WeakSet,
                a = new WeakMap;

            function i(e = document) {
                if (a.has(e)) return a.get(e);
                let t = !1,
                    o = new MutationObserver(e => {
                        for (let t of e)
                            if ("attributes" === t.type && t.target instanceof Element) d(t.target);
                            else if ("childList" === t.type && t.addedNodes.length)
                            for (let e of t.addedNodes) e instanceof Element && s(e)
                    });
                o.observe(e, {
                    childList: !0,
                    subtree: !0,
                    attributeFilter: ["data-action"]
                });
                let n = {
                    get closed() {
                        return t
                    },
                    unsubscribe() {
                        t = !0, a.delete(e), o.disconnect()
                    }
                };
                return a.set(e, n), n
            }

            function s(e) {
                for (let t of e.querySelectorAll("[data-action]")) d(t);
                e instanceof Element && e.hasAttribute("data-action") && d(e)
            }

            function l(e) {
                let t = e.currentTarget;
                for (let o of c(t))
                    if (e.type === o.type) {
                        let n = t.closest(o.tag);
                        r.has(n) && "function" == typeof n[o.method] && n[o.method](e);
                        let a = t.getRootNode();
                        if (a instanceof ShadowRoot && r.has(a.host) && a.host.matches(o.tag)) {
                            let t = a.host;
                            "function" == typeof t[o.method] && t[o.method](e)
                        }
                    }
            }

            function* c(e) {
                for (let t of (e.getAttribute("data-action") || "").trim().split(/\s+/)) {
                    let e = t.lastIndexOf(":"),
                        o = Math.max(0, t.lastIndexOf("#")) || t.length;
                    yield {
                        type: t.slice(0, e),
                        tag: t.slice(e + 1, o),
                        method: t.slice(o + 1) || "handleEvent"
                    }
                }
            }

            function d(e) {
                for (let t of c(e)) e.addEventListener(t.type, l)
            }

            function u(e, t) {
                let o = e.tagName.toLowerCase();
                if (e.shadowRoot) {
                    for (let n of e.shadowRoot.querySelectorAll(`[data-target~="${o}.${t}"]`))
                        if (!n.closest(o)) return n
                }
                for (let n of e.querySelectorAll(`[data-target~="${o}.${t}"]`))
                    if (n.closest(o) === e) return n
            }
            let f = e => String("symbol" == typeof e ? e.description : e).replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/--/g, "-").replace(/^-|-$/, "").toLowerCase(),
                h = (e, t = "property") => {
                    let o = f(e);
                    if (!o.includes("-")) throw new DOMException(`${t}: ${String(e)} is not a valid ${t} name`, "SyntaxError");
                    return o
                },
                p = "attr";

            function m(e, t) {
                w(e, p).add(t)
            }
            let g = new WeakSet;

            function b(e, t) {
                if (g.has(e)) return;
                g.add(e);
                let o = Object.getPrototypeOf(e),
                    n = o ? .constructor ? .attrPrefix ? ? "data-";
                for (let r of (t || (t = w(o, p)), t)) {
                    let t = e[r],
                        o = h(`${n}${r}`),
                        a = {
                            configurable: !0,
                            get() {
                                return this.getAttribute(o) || ""
                            },
                            set(e) {
                                this.setAttribute(o, e || "")
                            }
                        };
                    "number" == typeof t ? a = {
                        configurable: !0,
                        get() {
                            return Number(this.getAttribute(o) || 0)
                        },
                        set(e) {
                            this.setAttribute(o, e)
                        }
                    } : "boolean" == typeof t && (a = {
                        configurable: !0,
                        get() {
                            return this.hasAttribute(o)
                        },
                        set(e) {
                            this.toggleAttribute(o, e)
                        }
                    }), Object.defineProperty(e, r, a), r in e && !e.hasAttribute(o) && a.set.call(e, t)
                }
            }
            let y = Symbol.for("catalyst");
            let CatalystDelegate = class CatalystDelegate {
                constructor(e) {
                    let t = this,
                        o = e.prototype.connectedCallback;
                    e.prototype.connectedCallback = function() {
                        t.connectedCallback(this, o)
                    };
                    let n = e.prototype.disconnectedCallback;
                    e.prototype.disconnectedCallback = function() {
                        t.disconnectedCallback(this, n)
                    };
                    let r = e.prototype.attributeChangedCallback;
                    e.prototype.attributeChangedCallback = function(e, o, n) {
                        t.attributeChangedCallback(this, e, o, n, r)
                    };
                    let a = e.observedAttributes || [];
                    Object.defineProperty(e, "observedAttributes", {
                            configurable: !0,
                            get() {
                                return t.observedAttributes(this, a)
                            },
                            set(e) {
                                a = e
                            }
                        }),
                        function(e) {
                            let t = e.observedAttributes || [],
                                o = e.attrPrefix ? ? "data-",
                                n = e => h(`${o}${e}`);
                            Object.defineProperty(e, "observedAttributes", {
                                configurable: !0,
                                get: () => [...w(e.prototype, p)].map(n).concat(t),
                                set(e) {
                                    t = e
                                }
                            })
                        }(e),
                        function(e) {
                            let t = f(e.name).replace(/-element$/, "");
                            try {
                                window.customElements.define(t, e), window[e.name] = customElements.get(t)
                            } catch (e) {
                                if (!(e instanceof DOMException && "NotSupportedError" === e.name)) throw e
                            }
                        }(e)
                }
                observedAttributes(e, t) {
                    return t
                }
                connectedCallback(e, t) {
                    var o, n;
                    e.toggleAttribute("data-catalyst", !0), customElements.upgrade(e), ! function(e) {
                        for (let t of e.querySelectorAll("template[data-shadowroot]")) t.parentElement === e && e.attachShadow({
                            mode: "closed" === t.getAttribute("data-shadowroot") ? "closed" : "open"
                        }).append(t.content.cloneNode(!0))
                    }(e), b(e), r.add(e), e.shadowRoot && (s(n = e.shadowRoot), i(n)), s(e), i(e.ownerDocument), t ? .call(e), e.shadowRoot && (s(o = e.shadowRoot), i(o))
                }
                disconnectedCallback(e, t) {
                    t ? .call(e)
                }
                attributeChangedCallback(e, t, o, n, r) {
                    b(e), "data-catalyst" !== t && r && r.call(e, t, o, n)
                }
            };

            function w(e, t) {
                if (!Object.prototype.hasOwnProperty.call(e, y)) {
                    let t = e[y],
                        o = e[y] = new Map;
                    if (t)
                        for (let [e, n] of t) o.set(e, new Set(n))
                }
                let o = e[y];
                return o.has(t) || o.set(t, new Set), o.get(t)
            }

            function v(e, t) {
                w(e, "target").add(t), Object.defineProperty(e, t, {
                    configurable: !0,
                    get() {
                        return u(this, t)
                    }
                })
            }

            function A(e, t) {
                w(e, "targets").add(t), Object.defineProperty(e, t, {
                    configurable: !0,
                    get() {
                        return function(e, t) {
                            let o = e.tagName.toLowerCase(),
                                n = [];
                            if (e.shadowRoot)
                                for (let r of e.shadowRoot.querySelectorAll(`[data-targets~="${o}.${t}"]`)) r.closest(o) || n.push(r);
                            for (let r of e.querySelectorAll(`[data-targets~="${o}.${t}"]`)) r.closest(o) === e && n.push(r);
                            return n
                        }(this, t)
                    }
                })
            }

            function S(e) {
                new CatalystDelegate(e)
            }
            let C = new Map,
                E = new Promise(e => {
                    "loading" !== document.readyState ? e() : document.addEventListener("readystatechange", () => e(), {
                        once: !0
                    })
                }),
                L = new Promise(e => {
                    let t = new AbortController;
                    t.signal.addEventListener("abort", () => e());
                    let o = {
                            once: !0,
                            passive: !0,
                            signal: t.signal
                        },
                        n = () => t.abort();
                    document.addEventListener("mousedown", n, o), document.addEventListener("touchstart", n, o), document.addEventListener("keydown", n, o), document.addEventListener("pointerdown", n, o)
                }),
                O = {
                    ready: () => E,
                    firstInteraction: () => L,
                    visible: e => new Promise(t => {
                        let o = new IntersectionObserver(e => {
                            for (let n of e)
                                if (n.isIntersecting) {
                                    t(), o.disconnect();
                                    return
                                }
                        }, {
                            rootMargin: "0px 0px 256px 0px",
                            threshold: .01
                        });
                        for (let t of document.querySelectorAll(e)) o.observe(t)
                    })
                },
                k = new WeakMap;

            function P(e) {
                cancelAnimationFrame(k.get(e) || 0), k.set(e, requestAnimationFrame(() => {
                    for (let t of C.keys()) {
                        let o = e.matches(t) ? e : e.querySelector(t);
                        if (customElements.get(t) || o) {
                            let n = o ? .getAttribute("data-load-on") || "ready",
                                r = n in O ? O[n] : O.ready;
                            for (let e of C.get(t) || []) r(t).then(e);
                            C.delete(t), k.delete(e)
                        }
                    }
                }))
            }

            function T(e, t) {
                C.has(e) || C.set(e, new Set), C.get(e).add(t), P(document.body), n || (n = new MutationObserver(e => {
                    if (C.size)
                        for (let t of e)
                            for (let e of t.addedNodes) e instanceof Element && P(e)
                })).observe(document, {
                    subtree: !0,
                    childList: !0
                })
            }
        },
        15205: (e, t, o) => {
            function n(...e) {
                return JSON.stringify(e, (e, t) => "object" == typeof t ? t : String(t))
            }

            function r(e, t = {}) {
                let {
                    hash: o = n,
                    cache: r = new Map
                } = t;
                return function(...t) {
                    let n = o.apply(this, t);
                    if (r.has(n)) return r.get(n);
                    let a = e.apply(this, t);
                    return a instanceof Promise && (a = a.catch(e => {
                        throw r.delete(n), e
                    })), r.set(n, a), a
                }
            }
            o.d(t, {
                Z: () => r
            })
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, ["vendors-node_modules_github_selector-observer_dist_index_esm_js"], () => t(4722)), e.O()
    }
]);
//# sourceMappingURL=code-menu-8dbe3394f0c6.js.map