"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    ["app_assets_modules_github_updatable-content_ts"], {
        64611: (e, t, n) => {
            let r, o, i;
            n.d(t, {
                M: () => s,
                T: () => c
            });
            var a = n(14840),
                l = n(58700);

            function s(e, t = !1, n = !1) {
                var s;
                return !n && c(e) || function(e, t) {
                    let n = r instanceof Element ? r : e && e.ownerDocument && e.ownerDocument.activeElement ? e.ownerDocument.activeElement : null;
                    if (null === n || t && n === e) return !1;
                    let o = n === e && (0, l.sw)(n);
                    if (o) return !0;
                    let s = e.contains(n) && ! function(e) {
                        if (e instanceof a.Z) return !0;
                        let t = e instanceof HTMLAnchorElement || e instanceof HTMLButtonElement,
                            n = e.parentElement ? .classList.contains("task-list-item");
                        if (t && n) return !0;
                        if (!(i instanceof Element)) return !1;
                        let r = e.closest(u);
                        if (!r) return !1;
                        let o = i.closest(u);
                        return r === o
                    }(n);
                    if (s) return !0;
                    let c = i instanceof Element && e.contains(i) && !!i.closest("details[open] > summary");
                    return c
                }(e, t) || (s = e).matches(":active:enabled") || s.contains(o) || !!(e.closest(".is-dirty") || e.querySelector(".is-dirty"))
            }

            function c(e) {
                for (let t of e.querySelectorAll("input, textarea"))
                    if ((t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) && function(e) {
                            if (e instanceof HTMLInputElement && ("checkbox" === e.type || "radio" === e.type)) {
                                if (e.checked !== e.defaultChecked) return !0
                            } else if (e.value !== e.defaultValue) return !0;
                            return !1
                        }(t)) return !0;
                return !1
            }
            document.addEventListener("mousedown", function(e) {
                o = e.target
            }, !0), document.addEventListener("mouseup", function(e) {
                o = null, i = e.target
            }, !0), document.addEventListener("contextmenu", function(e) {
                o = null, i = e.target
            }, !0), document.addEventListener("dragend", function() {
                o = null
            }, !0);
            let u = "a[href], button"
        },
        9302: (e, t, n) => {
            let r, o;
            n.d(t, {
                lO: () => f,
                qA: () => d,
                y0: () => l
            });
            let i = [],
                a = 0;

            function l() {
                return r
            }

            function s() {
                try {
                    return Math.min(Math.max(0, history.length) || 0, 9007199254740991)
                } catch (e) {
                    return 0
                }
            }

            function c(e) {
                r = e;
                let t = location.href;
                i[s() - 1 + a] = {
                    url: t,
                    state: r
                }, i.length = s(), window.dispatchEvent(new CustomEvent("statechange", {
                    bubbles: !1,
                    cancelable: !1
                }))
            }

            function u() {
                return new Date().getTime()
            }

            function d(e, t, n) {
                a = 0;
                let r = {
                    _id: u(),
                    ...e
                };
                history.pushState(r, t, n), c(r)
            }

            function f(e, t, n) {
                let o = { ...r,
                    ...e
                };
                history.replaceState(o, t, n), c(o)
            }
            r = function() {
                let e = {
                    _id: new Date().getTime(),
                    ...history.state
                };
                return c(e), e
            }(), window.addEventListener("popstate", function(e) {
                let t = e.state;
                if (!t || !t._id && !t.turbo ? .restorationIdentifier) return;
                let n = t.turbo ? .restorationIdentifier,
                    r = i[s() - 1 + a - 1] ? .state ? .turbo ? .restorationIdentifier;
                r === n ? a-- : a++, c(t)
            }, !0), window.addEventListener("turbo:visit", e => {
                e instanceof CustomEvent && (o = e.detail.action)
            }), window.addEventListener("turbo:load", () => {
                "restore" !== o && (a = 0, f(history.state, "", ""))
            }), window.addEventListener("hashchange", function() {
                if (s() > i.length) {
                    let e = {
                        _id: u()
                    };
                    history.replaceState(e, "", location.href), c(e)
                }
            }, !0), window.addEventListener("pageshow", () => {
                i = [], a = 0
            })
        },
        22971: (e, t, n) => {
            n.d(t, {
                H5: () => d,
                Of: () => m,
                x0: () => p,
                z8: () => f
            });
            var r = n(64611),
                o = n(36071),
                i = n(5875),
                a = n(18699),
                l = n(96776),
                s = n(9302);
            let c = new WeakMap,
                u = {};

            function d() {
                for (let e of Object.keys(u)) delete u[e];
                let e = history.state || {};
                e.staleRecords = u, (0, s.lO)(e, "", location.href), window.location.reload()
            }

            function f() {
                if (Object.keys(u).length > 0) {
                    let e = history.state || {};
                    e.staleRecords = u, (0, s.lO)(e, "", location.href)
                }
            }
            async function p(e) {
                if (c.get(e)) return;
                let t = e.hasAttribute("data-retain-focus"),
                    n = e.getAttribute("data-url");
                if (!n) throw Error("could not get url");
                let o = new AbortController;
                c.set(e, o);
                try {
                    let i = await fetch(n, {
                        signal: o.signal,
                        headers: {
                            Accept: "text/html",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    });
                    if (!i.ok) return;
                    let a = await i.text();
                    if ((0, r.M)(e, t)) {
                        console.warn("Failed to update content with interactions", e);
                        return
                    }
                    return u[n] = a, h(e, a, t)
                } catch {} finally {
                    c.delete(e)
                }
            }
            async function m(e, t, n = !1) {
                let r = c.get(e);
                r ? .abort();
                let o = e.closest(".js-updatable-content[data-url], .js-updatable-content [data-url]");
                return !n && o && o === e && (u[o.getAttribute("data-url") || ""] = t), h(e, t)
            }

            function h(e, t, n = !1) {
                return (0, l._8)(document, () => {
                    let r = (0, a.r)(document, t.trim()),
                        o = n && e.ownerDocument && e === e.ownerDocument.activeElement ? r.querySelector("*") : null,
                        l = Array.from(e.querySelectorAll("details[open][id]")).map(e => e.id);
                    for (let t of ("DETAILS" === e.tagName && e.id && e.hasAttribute("open") && l.push(e.id), e.querySelectorAll(".js-updatable-content-preserve-scroll-position"))) {
                        let e = t.getAttribute("data-updatable-content-scroll-position-id") || "";
                        y.set(e, t.scrollTop)
                    }
                    for (let e of l) {
                        let t = r.querySelector(`#${e}`);
                        t && t.setAttribute("open", "")
                    }(0, i.nn)(e, r), o instanceof HTMLElement && o.focus()
                })
            }
            let y = new Map;
            (0, o.N7)(".js-updatable-content-preserve-scroll-position", {
                constructor: HTMLElement,
                add(e) {
                    let t = e.getAttribute("data-updatable-content-scroll-position-id");
                    if (!t) return;
                    let n = y.get(t);
                    null != n && (e.scrollTop = n)
                }
            })
        },
        58700: (e, t, n) => {
            n.d(t, {
                Bt: () => i,
                DN: () => l,
                KL: () => u,
                Se: () => a,
                qC: () => d,
                sw: () => s
            });
            var r = n(5582);

            function o(e, t, n) {
                return e.dispatchEvent(new CustomEvent(t, {
                    bubbles: !0,
                    cancelable: n
                }))
            }

            function i(e, t) {
                t && (function(e, t) {
                    if (!(e instanceof HTMLFormElement)) throw TypeError("The specified element is not of type HTMLFormElement.");
                    if (!(t instanceof HTMLElement)) throw TypeError("The specified element is not of type HTMLElement.");
                    if ("submit" !== t.type) throw TypeError("The specified element is not a submit button.");
                    if (!e || e !== t.form) throw Error("The specified element is not owned by the form element.")
                }(e, t), (0, r.j)(t)), o(e, "submit", !0) && e.submit()
            }

            function a(e, t) {
                if ("boolean" == typeof t) {
                    if (e instanceof HTMLInputElement) e.checked = t;
                    else throw TypeError("only checkboxes can be set to boolean value")
                } else {
                    if ("checkbox" === e.type) throw TypeError("checkbox can't be set to string value");
                    e.value = t
                }
                o(e, "change", !1)
            }

            function l(e, t) {
                for (let n in t) {
                    let r = t[n],
                        o = e.elements.namedItem(n);
                    o instanceof HTMLInputElement ? o.value = r : o instanceof HTMLTextAreaElement && (o.value = r)
                }
            }

            function s(e) {
                if (!(e instanceof HTMLElement)) return !1;
                let t = e.nodeName.toLowerCase(),
                    n = (e.getAttribute("type") || "").toLowerCase();
                return "select" === t || "textarea" === t || "input" === t && "submit" !== n && "reset" !== n || e.isContentEditable
            }

            function c(e) {
                return new URLSearchParams(e)
            }

            function u(e, t) {
                let n = new URLSearchParams(e.search),
                    r = c(t);
                for (let [e, t] of r) n.append(e, t);
                return n.toString()
            }

            function d(e) {
                return c(new FormData(e)).toString()
            }
        },
        5582: (e, t, n) => {
            function r(e) {
                let t = e.closest("form");
                if (!(t instanceof HTMLFormElement)) return;
                let n = o(t);
                if (e.name) {
                    let r = e.matches("input[type=submit]") ? "Submit" : "",
                        o = e.value || r;
                    n || ((n = document.createElement("input")).type = "hidden", n.classList.add("js-submit-button-value"), t.prepend(n)), n.name = e.name, n.value = o
                } else n && n.remove()
            }

            function o(e) {
                let t = e.querySelector("input.js-submit-button-value");
                return t instanceof HTMLInputElement ? t : null
            }
            n.d(t, {
                j: () => r,
                u: () => o
            })
        },
        95253: (e, t, n) => {
            let r;
            n.d(t, {
                YT: () => f,
                qP: () => p,
                yM: () => m
            });
            var o = n(88149),
                i = n(86058),
                a = n(44544),
                l = n(71643);
            let {
                getItem: s
            } = (0, a.Z)("localStorage"), c = "dimension_", u = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "scid"];
            try {
                let e = (0, o.n)("octolytics");
                delete e.baseContext, r = new i.R(e)
            } catch (e) {}

            function d(e) {
                let t = (0, o.n)("octolytics").baseContext || {};
                if (t)
                    for (let [e, n] of (delete t.app_id, delete t.event_url, delete t.host, Object.entries(t))) e.startsWith(c) && (t[e.replace(c, "")] = n, delete t[e]);
                let n = document.querySelector("meta[name=visitor-payload]");
                if (n) {
                    let e = JSON.parse(atob(n.content));
                    Object.assign(t, e)
                }
                let r = new URLSearchParams(window.location.search);
                for (let [e, n] of r) u.includes(e.toLowerCase()) && (t[e] = n);
                return t.staff = (0, l.B)().toString(), Object.assign(t, e)
            }

            function f(e) {
                r ? .sendPageView(d(e))
            }

            function p(e, t = {}) {
                let n = document.head ? .querySelector('meta[name="current-catalog-service"]') ? .content,
                    o = n ? {
                        service: n
                    } : {};
                for (let [e, n] of Object.entries(t)) null != n && (o[e] = `${n}`);
                if (r) {
                    let t = e || "unknown";
                    d(o), r.sendEvent(t, d(o))
                }
            }

            function m(e) {
                return Object.fromEntries(Object.entries(e).map(([e, t]) => [e, JSON.stringify(t)]))
            }
        },
        5875: (e, t, n) => {
            n.d(t, {
                j1: () => i,
                jI: () => l,
                nn: () => a
            });
            var r = n(39492);

            function o(e) {
                return {
                    getNodeKey: () => null,
                    onBeforeElUpdated: (t, n) => {
                        if ("TURBO-FRAME" === n.tagName || n.matches(".js-task-list-field, .contains-task-list") || "false" === n.getAttribute("data-morpheus-enabled")) return t.replaceWith(n), !1;
                        if (t.hasAttribute("data-catalyst") && n.setAttribute("data-catalyst", t.getAttribute("data-catalyst") || ""), t.hasAttribute("data-morpheus-ignore")) {
                            let e = (t.getAttribute("data-morpheus-ignore") || "").trim().split(/\s+/);
                            for (let r of e) t.hasAttribute(r) ? n.setAttribute(r, t.getAttribute(r) || "") : n.removeAttribute(r)
                        }
                        return e ? .keepInputValues && (n instanceof HTMLInputElement && n.type === t.type || n instanceof HTMLTextAreaElement) && (n instanceof HTMLInputElement && ("checkbox" === n.type || "radio" === n.type) ? n.checked = t.checked : n.value = t.value), !0
                    },
                    onBeforeElChildrenUpdated: (e, t) => {
                        for (let n of [...e.childNodes, ...t.childNodes]) n.nodeType === Node.COMMENT_NODE && n.remove();
                        return !0
                    },
                    onElUpdated: e => {
                        e.connectedCallback && queueMicrotask(() => {
                            e.disconnectedCallback ? .(), e.connectedCallback ? .()
                        })
                    }
                }
            }

            function i(e) {
                let t = e.closest("[data-morpheus-enabled]");
                return null != t && "false" !== t.getAttribute("data-morpheus-enabled")
            }

            function a(e, t, n) {
                if ("string" == typeof t) {
                    let e = document.createElement("template");
                    e.innerHTML = t, t = e.content
                }
                if (!i(e)) {
                    e.replaceWith(t);
                    return
                }
                if (t instanceof DocumentFragment) {
                    let i = Array.from(t.children);
                    i.length ? ((0, r.Z)(e, i[0], o(n)), e.after(...i.slice(1))) : e.replaceWith(t)
                } else(0, r.Z)(e, t, o(n))
            }

            function l(e, t, n) {
                if (!i(e)) {
                    e.innerHTML = t;
                    return
                }
                let a = "",
                    l = "";
                e.firstChild ? .nodeType === Node.TEXT_NODE && (a = e.firstChild.nodeValue ? .match(/^\s+/) ? .[0] || ""), e.lastChild ? .nodeType === Node.TEXT_NODE && (l = e.lastChild.nodeValue ? .match(/\s+$/) ? .[0] || "");
                let s = e.cloneNode(!1);
                s.innerHTML = `${a}${t.trim()}${l}`, (0, r.Z)(e, s, o(n))
            }
        },
        18699: (e, t, n) => {
            n.d(t, {
                r: () => l
            });
            var r = n(22490),
                o = n(7180);
            let i = "parse-html-no-op",
                a = r.ZO.createPolicy(i, {
                    createHTML: e => o.O.apply({
                        policy: () => e,
                        policyName: i,
                        fallback: e,
                        sanitize: !1,
                        fallbackOnError: !0
                    })
                });

            function l(e, t) {
                let n = e.createElement("template");
                return n.innerHTML = a.createHTML(t), e.importNode(n.content, !0)
            }
        },
        7180: (e, t, n) => {
            n.d(t, {
                O: () => c,
                d: () => TrustedTypesPolicyError
            });
            var r = n(46426),
                o = n(71643),
                i = n(24601),
                a = n(27856),
                l = n.n(a),
                s = n(95253);
            let TrustedTypesPolicyError = class TrustedTypesPolicyError extends Error {};
            let c = {
                apply: function({
                    policy: e,
                    policyName: t,
                    fallback: n,
                    fallbackOnError: a = !1,
                    sanitize: c,
                    silenceErrorReporting: u = !1
                }) {
                    try {
                        if ((0, r.c)("BYPASS_TRUSTED_TYPES_POLICY_RULES")) return n;
                        (0, o.b)({
                            incrementKey: "TRUSTED_TYPES_POLICY_CALLED",
                            trustedTypesPolicyName: t
                        }, !1, .1);
                        let i = e();
                        return c && new Promise(e => {
                            let n = window.performance.now(),
                                r = l().sanitize(i, {
                                    FORBID_ATTR: []
                                }),
                                o = window.performance.now();
                            if (i.length !== r.length) {
                                let a = Error("Trusted Types policy output sanitized"),
                                    l = a.stack ? .slice(0, 1e3),
                                    c = i.slice(0, 250);
                                (0, s.qP)("trusted_types_policy.sanitize", {
                                    policyName: t,
                                    output: c,
                                    stack: l,
                                    outputLength: i.length,
                                    sanitizedLength: r.length,
                                    executionTime: o - n
                                }), e(i)
                            }
                        }), i
                    } catch (e) {
                        if (e instanceof TrustedTypesPolicyError || (u || (0, i.eK)(e), (0, o.b)({
                                incrementKey: "TRUSTED_TYPES_POLICY_ERROR",
                                trustedTypesPolicyName: t
                            }), !a)) throw e
                    }
                    return n
                }
            }
        },
        22490: (e, t, n) => {
            n.d(t, {
                ZO: () => c
            });
            var r = n(86283),
                o = n(71643);

            function i(e) {
                return () => {
                    throw TypeError(`The policy does not implement the function ${e}`)
                }
            }
            let a = {
                    createHTML: i("createHTML"),
                    createScript: i("createScript"),
                    createScriptURL: i("createScriptURL")
                },
                l = new Map,
                s = globalThis.trustedTypes ? ? {
                    createPolicy: (e, t) => ({
                        name: e,
                        ...a,
                        ...t
                    })
                },
                c = {
                    createPolicy: (e, t) => {
                        if (l.has(e)) return (0, o.b)({
                            incrementKey: "TRUSTED_TYPES_POLICY_INITIALIZED_TWICE"
                        }), l.get(e); {
                            let n = s.createPolicy(e, t);
                            return l.set(e, n), n
                        }
                    }
                },
                u = !1;
            r.n4 ? .addEventListener("securitypolicyviolation", e => {
                "require-trusted-types-for" !== e.violatedDirective || u || (console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`), u = !0)
            })
        }
    }
]);
//# sourceMappingURL=app_assets_modules_github_updatable-content_ts-4cdf9eedc3be.js.map