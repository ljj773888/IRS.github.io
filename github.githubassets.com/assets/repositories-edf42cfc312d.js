"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    ["repositories", "ui_packages_soft-navigate_soft-navigate_ts"], {
        9302: (e, t, r) => {
            let n, o;
            r.d(t, {
                lO: () => f,
                qA: () => u,
                y0: () => s
            });
            let i = [],
                a = 0;

            function s() {
                return n
            }

            function l() {
                try {
                    return Math.min(Math.max(0, history.length) || 0, 9007199254740991)
                } catch (e) {
                    return 0
                }
            }

            function c(e) {
                n = e;
                let t = location.href;
                i[l() - 1 + a] = {
                    url: t,
                    state: n
                }, i.length = l(), window.dispatchEvent(new CustomEvent("statechange", {
                    bubbles: !1,
                    cancelable: !1
                }))
            }

            function d() {
                return new Date().getTime()
            }

            function u(e, t, r) {
                a = 0;
                let n = {
                    _id: d(),
                    ...e
                };
                history.pushState(n, t, r), c(n)
            }

            function f(e, t, r) {
                let o = { ...n,
                    ...e
                };
                history.replaceState(o, t, r), c(o)
            }
            n = function() {
                let e = {
                    _id: new Date().getTime(),
                    ...history.state
                };
                return c(e), e
            }(), window.addEventListener("popstate", function(e) {
                let t = e.state;
                if (!t || !t._id && !t.turbo ? .restorationIdentifier) return;
                let r = t.turbo ? .restorationIdentifier,
                    n = i[l() - 1 + a - 1] ? .state ? .turbo ? .restorationIdentifier;
                n === r ? a-- : a++, c(t)
            }, !0), window.addEventListener("turbo:visit", e => {
                e instanceof CustomEvent && (o = e.detail.action)
            }), window.addEventListener("turbo:load", () => {
                "restore" !== o && (a = 0, f(history.state, "", ""))
            }), window.addEventListener("hashchange", function() {
                if (l() > i.length) {
                    let e = {
                        _id: d()
                    };
                    history.replaceState(e, "", location.href), c(e)
                }
            }, !0), window.addEventListener("pageshow", () => {
                i = [], a = 0
            })
        },
        29764: (e, t, r) => {
            r.d(t, {
                $S: () => o,
                Fk: () => i,
                sz: () => a
            });
            var n = r(71643);

            function o(e, t, r) {
                let o = {
                        hydroEventPayload: e,
                        hydroEventHmac: t,
                        visitorPayload: "",
                        visitorHmac: "",
                        hydroClientContext: r
                    },
                    i = document.querySelector("meta[name=visitor-payload]");
                i instanceof HTMLMetaElement && (o.visitorPayload = i.content);
                let a = document.querySelector("meta[name=visitor-hmac]") || "";
                a instanceof HTMLMetaElement && (o.visitorHmac = a.content), (0, n.b)(o, !0)
            }

            function i(e) {
                let t = e.getAttribute("data-hydro-view") || "",
                    r = e.getAttribute("data-hydro-view-hmac") || "",
                    n = e.getAttribute("data-hydro-client-context") || "";
                o(t, r, n)
            }

            function a(e) {
                let t = e.getAttribute("data-hydro-click-payload") || "",
                    r = e.getAttribute("data-hydro-click-hmac") || "",
                    n = e.getAttribute("data-hydro-client-context") || "";
                o(t, r, n)
            }
        },
        55843: (e, t, r) => {
            var n = r(76006);

            function o(e, t, r, n) {
                var o, i = arguments.length,
                    a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
                return i > 3 && a && Object.defineProperty(t, r, a), a
            }
            let i = class InputDemuxElement extends HTMLElement {
                connectedCallback() {
                    this.control && (this.storedInput = Array(this.control.children.length).fill("")), this.addEventListener("input", this.relayInput.bind(this)), this.addEventListener("keydown", this.relayKeydown.bind(this));
                    let e = this.closest("details");
                    e && e.addEventListener("toggle", () => {
                        e.open && this.source.focus()
                    })
                }
                relayKeydown(e) {
                    if ((this.isControlTab(e.target) || e.target === this.source) && ("ArrowDown" === e.key || "Tab" === e.key)) e.preventDefault(), e.stopPropagation(), this.routeCustomEvent(new CustomEvent("focus-list"));
                    else if ("Escape" === e.key) {
                        let e = this.closest("details");
                        e && e.removeAttribute("open")
                    }
                }
                isControlTab(e) {
                    return !!e && !!this.control && Array.from(this.control.children).includes(e)
                }
                relayInput(e) {
                    if (!e.target) return;
                    let t = e.target,
                        r = t.value;
                    this.routeCustomEvent(new CustomEvent("input-entered", {
                        detail: r
                    }))
                }
                routeCustomEvent(e) {
                    let t = this.sinks[this.selectedIndex];
                    t.dispatchEvent(e)
                }
                get selectedIndex() {
                    if (!this.control) return 0;
                    let e = this.control.querySelector('[aria-selected="true"]');
                    return e ? Array.from(this.control.children).indexOf(e) : 0
                }
                storeInput() {
                    this.storedInput[this.selectedIndex] = this.source.value
                }
                updateInput(e) {
                    this.source.value = this.storedInput[this.selectedIndex];
                    let t = e.detail.relatedTarget.getAttribute("data-filter-placeholder");
                    this.source.placeholder = t, this.source.setAttribute("aria-label", t), this.notifySelected()
                }
                notifySelected() {
                    let e = this.sinks[this.selectedIndex],
                        t = new CustomEvent("tab-selected");
                    e.dispatchEvent(t)
                }
            };
            o([n.fA], i.prototype, "source", void 0), o([n.GO], i.prototype, "sinks", void 0), o([n.fA], i.prototype, "control", void 0), i = o([n.Ih], i)
        },
        4738: (e, t, r) => {
            r.d(t, {
                QZ: () => w,
                ZH: () => T,
                jK: () => S,
                T_: () => A,
                Sw: () => q,
                VF: () => L,
                VH: () => _
            });
            var n = r(56959),
                o = r(59753),
                i = r(98105),
                a = r(67044),
                s = r(76134),
                l = r(36071);

            function c(e, t) {
                let r = e,
                    n = e.ownerDocument;
                (r === n || r === n.defaultView || r === n.documentElement || r === n.body) && (r = n);
                let o = n.defaultView.Document;
                if (r instanceof o) {
                    let e = null != t.top ? t.top : n.defaultView.pageYOffset,
                        r = null != t.left ? t.left : n.defaultView.pageXOffset;
                    n.defaultView.scrollTo(r, e);
                    return
                }
                let i = n.defaultView.HTMLElement;
                if (!(r instanceof i)) throw Error("invariant");
                r.scrollTop = t.top, null != t.left && (r.scrollLeft = t.left)
            }
            var d = r(97629);
            let u = navigator.userAgent.match(/Macintosh/),
                f = u ? "metaKey" : "ctrlKey",
                p = u ? "Meta" : "Control",
                h = !1,
                m = {
                    x: 0,
                    y: 0
                };

            function g(e) {
                e instanceof MouseEvent && ((m.x !== e.clientX || m.y !== e.clientY) && (h = !1), m = {
                    x: e.clientX,
                    y: e.clientY
                })
            }

            function y(e) {
                if (h) return;
                let t = e.currentTarget,
                    {
                        target: r
                    } = e;
                if (!(r instanceof Element) || !(t instanceof HTMLElement) || !t.closest(".js-active-navigation-container")) return;
                let n = r.closest(".js-navigation-item");
                n && R(n, t)
            }(0, l.N7)(".js-navigation-container:not(.js-navigation-container-no-mouse)", {
                subscribe: e => (0, n.qC)((0, n.RB)(e, "mouseover", g), (0, n.RB)(e, "mouseover", y))
            });
            let v = 0;

            function b(e) {
                if (e.target !== document.body && e.target instanceof HTMLElement && !e.target.classList.contains("js-navigation-enable")) return;
                h = !0;
                let t = D(),
                    r = !1;
                if (t) {
                    let n = t.querySelector(".js-navigation-item.navigation-focus") || t;
                    r = (0, o.f)(n, "navigation:keydown", {
                        hotkey: (0, a.EL)(e),
                        originalEvent: e,
                        originalTarget: e.target
                    })
                }
                r || e.preventDefault()
            }

            function j(e) {
                let t = e.modifierKey || e.altKey || e.ctrlKey || e.metaKey,
                    r = (0, o.f)(e.currentTarget, "navigation:open", {
                        modifierKey: t,
                        shiftKey: e.shiftKey
                    });
                r || e.preventDefault()
            }

            function w(e) {
                let t = D();
                e !== t && (null !== t && S(t), e ? .classList.add("js-active-navigation-container"))
            }

            function S(e) {
                e.classList.remove("js-active-navigation-container")
            }(0, l.N7)(".js-active-navigation-container", {
                add() {
                    1 == ++v && document.addEventListener("keydown", b)
                },
                remove() {
                    0 == --v && document.removeEventListener("keydown", b)
                }
            }), (0, o.on)("navigation:keydown", ".js-active-navigation-container", function(e) {
                let t = e.currentTarget,
                    r = e.detail.originalTarget.matches("input, textarea"),
                    n = e.target;
                if ((0, s.Zf)(e.detail.originalEvent)) {
                    if (n.classList.contains("js-navigation-item")) {
                        if (r) {
                            if (u) switch ((0, a.EL)(e.detail.originalEvent)) {
                                case "Control+n":
                                    C(n, t);
                                    break;
                                case "Control+p":
                                    k(n, t)
                            }
                            switch ((0, a.EL)(e.detail.originalEvent)) {
                                case "ArrowUp":
                                    k(n, t);
                                    break;
                                case "ArrowDown":
                                    C(n, t);
                                    break;
                                case "Enter":
                                case `${p}+Enter`:
                                    x(n, e.detail.originalEvent[f])
                            }
                        } else {
                            if (u) switch ((0, a.EL)(e.detail.originalEvent)) {
                                case "Control+n":
                                    C(n, t);
                                    break;
                                case "Control+p":
                                    k(n, t);
                                    break;
                                case "Alt+v":
                                    (function(e, t) {
                                        let r, n;
                                        let o = I(t),
                                            a = o.indexOf(e),
                                            s = (0, i.VZ)(e);
                                        if (null != s) {
                                            for (;
                                                (r = o[a - 1]) && (n = (0, i._C)(r, s)) && n.top >= 0;) a--;
                                            if (r) {
                                                let e = R(r, t);
                                                if (e) return;
                                                O(s, r)
                                            }
                                        }
                                    })(n, t);
                                    break;
                                case "Control+v":
                                    (function(e, t) {
                                        let r, n;
                                        let o = I(t),
                                            a = o.indexOf(e),
                                            s = (0, i.VZ)(e);
                                        if (null != s) {
                                            for (;
                                                (r = o[a + 1]) && (n = (0, i._C)(r, s)) && n.bottom >= 0;) a++;
                                            if (r) {
                                                let e = R(r, t);
                                                if (e) return;
                                                O(s, r)
                                            }
                                        }
                                    })(n, t)
                            }
                            switch ((0, a.EL)(e.detail.originalEvent)) {
                                case "j":
                                case "J":
                                    C(n, t);
                                    break;
                                case "k":
                                case "Shift+K":
                                    k(n, t);
                                    break;
                                case "o":
                                case "Enter":
                                case `${p}+Enter`:
                                    x(n, e.detail[f])
                            }
                        }
                    } else {
                        let n = I(t)[0];
                        if (n) {
                            if (r) u && "Control+n" === (0, a.EL)(e.detail.originalEvent) && R(n, t), "ArrowDown" === (0, a.EL)(e.detail.originalEvent) && R(n, t);
                            else {
                                if (u) switch ((0, a.EL)(e.detail.originalEvent)) {
                                    case "Control+n":
                                    case "Control+v":
                                        R(n, t)
                                }
                                "j" === (0, a.EL)(e.detail.originalEvent) && R(n, t)
                            }
                        }
                    }
                    if (r) {
                        if (u) switch ((0, a.EL)(e.detail.originalEvent)) {
                            case "Control+n":
                            case "Control+p":
                                e.preventDefault()
                        }
                        switch ((0, a.EL)(e.detail.originalEvent)) {
                            case "ArrowUp":
                            case "ArrowDown":
                            case "Enter":
                                e.preventDefault()
                        }
                    } else {
                        if (u) switch ((0, a.EL)(e.detail.originalEvent)) {
                            case "Control+n":
                            case "Control+p":
                            case "Control+v":
                            case "Alt+v":
                                e.preventDefault()
                        }
                        switch ((0, a.EL)(e.detail.originalEvent)) {
                            case "j":
                            case "k":
                            case "o":
                            case "Enter":
                            case `${f}+Enter`:
                                e.preventDefault()
                        }
                    }
                }
            }), (0, o.on)("click", ".js-active-navigation-container .js-navigation-item", function(e) {
                j(e)
            }), (0, o.on)("navigation:keyopen", ".js-active-navigation-container .js-navigation-item", function(e) {
                let t = e.currentTarget.classList.contains("js-navigation-open") ? e.currentTarget : e.currentTarget.querySelector(".js-navigation-open");
                if (t instanceof HTMLAnchorElement) {
                    if (e.detail.modifierKey) window.open(t.href, "_blank"), window.focus();
                    else {
                        let e = t.dispatchEvent(new MouseEvent("click", {
                            bubbles: !0,
                            cancelable: !0
                        }));
                        e && t.click()
                    }
                    e.preventDefault()
                } else j(e)
            });
            let E = [];

            function L(e) {
                let t = D();
                t && E.push(t), w(e)
            }

            function q(e) {
                S(e), T(e);
                let t = E.pop();
                t && w(t)
            }

            function A(e, t) {
                let r = t || e,
                    n = I(e)[0],
                    o = r.closest(".js-navigation-item") || n;
                if (w(e), o instanceof HTMLElement) {
                    let t = R(o, e);
                    if (t) return;
                    let r = (0, i.VZ)(o);
                    P(r, o)
                }
            }

            function T(e) {
                let t = e.querySelectorAll(".js-navigation-item.navigation-focus");
                for (let e of t) e.classList.remove("navigation-focus")
            }

            function _(e, t) {
                T(e), A(e, t)
            }

            function k(e, t) {
                let r = I(t),
                    n = r.indexOf(e),
                    o = r[n - 1];
                if (o) {
                    let e = R(o, t);
                    if (e) return;
                    let r = (0, i.VZ)(o);
                    "page" === M(t) ? O(r, o) : P(r, o)
                }
            }

            function C(e, t) {
                let r = I(t),
                    n = r.indexOf(e),
                    o = r[n + 1];
                if (o) {
                    let e = R(o, t);
                    if (e) return;
                    let r = (0, i.VZ)(o);
                    "page" === M(t) ? O(r, o) : P(r, o)
                }
            }

            function x(e, t = !1) {
                (0, o.f)(e, "navigation:keyopen", {
                    modifierKey: t
                })
            }

            function R(e, t) {
                return !(0, o.f)(e, "navigation:focus") || (T(t), e.classList.add("navigation-focus"), !1)
            }

            function D() {
                return document.querySelector(".js-active-navigation-container")
            }

            function I(e) {
                let t = [];
                for (let r of e.querySelectorAll(".js-navigation-item")) r instanceof HTMLElement && (0, d.Z)(r) && t.push(r);
                return t
            }

            function M(e) {
                return e.getAttribute("data-navigation-scroll") || "item"
            }

            function O(e, t, r = "smooth") {
                let n = (0, i._C)(t, e);
                n && (n.bottom <= 0 ? t.scrollIntoView({
                    behavior: r,
                    block: "start"
                }) : n.top <= 0 && t.scrollIntoView({
                    behavior: r,
                    block: "end"
                }))
            }

            function P(e, t) {
                let r = (0, i.oE)(t, e),
                    n = (0, i._C)(t, e);
                if (null != r && null != n) {
                    if (n.bottom <= 0 && document.body) {
                        let t = null != e.offsetParent ? e.scrollHeight : document.body.scrollHeight,
                            o = t - (r.bottom + n.height);
                        c(e, {
                            top: o
                        })
                    } else n.top <= 0 && c(e, {
                        top: r.top
                    })
                }
            }
        },
        254: (e, t, r) => {
            r.d(t, {
                ZG: () => s,
                q6: () => c,
                w4: () => l
            });
            var n = r(8439);
            let o = !1,
                i = new n.Z;

            function a(e) {
                let t = e.target;
                if (t instanceof HTMLElement && t.nodeType !== Node.DOCUMENT_NODE)
                    for (let e of i.matches(t)) e.data.call(null, t)
            }

            function s(e, t) {
                o || (o = !0, document.addEventListener("focus", a, !0)), i.add(e, t), document.activeElement instanceof HTMLElement && document.activeElement.matches(e) && t(document.activeElement)
            }

            function l(e, t, r) {
                function n(t) {
                    let o = t.currentTarget;
                    o && (o.removeEventListener(e, r), o.removeEventListener("blur", n))
                }
                s(t, function(t) {
                    t.addEventListener(e, r), t.addEventListener("blur", n)
                })
            }

            function c(e, t) {
                function r(e) {
                    let {
                        currentTarget: n
                    } = e;
                    n && (n.removeEventListener("input", t), n.removeEventListener("blur", r))
                }
                s(e, function(e) {
                    e.addEventListener("input", t), e.addEventListener("blur", r)
                })
            }
        },
        87551: (e, t, r) => {
            function n() {
                return /Windows/.test(navigator.userAgent) ? "windows" : /Macintosh/.test(navigator.userAgent) ? "mac" : null
            }
            r.d(t, {
                X: () => n
            }), (0, r(36071).N7)(".js-remove-unless-platform", function(e) {
                ! function(e) {
                    let t = (e.getAttribute("data-platforms") || "").split(","),
                        r = n();
                    return !!(r && t.includes(r))
                }(e) && e.remove()
            })
        },
        41246: (e, t, r) => {
            r.d(t, {
                b: () => u
            });
            var n = r(76006),
                o = r(87551),
                i = r(44544),
                a = r(29764);

            function s(e, t, r, n) {
                var o, i = arguments.length,
                    a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
                return i > 3 && a && Object.defineProperty(t, r, a), a
            }
            let {
                getItem: l,
                setItem: c
            } = (0, i.Z)("localStorage"), d = "code-button-default-tab", u = class GetRepoElement extends HTMLElement {
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
                        e && (0, a.Fk)(e)
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
                    return e.currentTarget.getAttribute("data-open-app") || (0, o.X)()
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
                    let r = this.querySelector(`button[data-tab="${t}"`);
                    r && r.click()
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
        1883: (e, t, r) => {
            var n = r(13002),
                o = r(88309),
                i = r(59753),
                a = r(29764);
            (0, i.on)("tab-container-changed", ".js-branches-tags-tabs", async function(e) {
                let t, r;
                let i = e.detail.relatedTarget,
                    a = e.currentTarget;
                if (!a) return;
                for (let e of a.querySelectorAll("[data-controls-ref-menu-id]")) {
                    if (!(e instanceof n.Z || e instanceof o.Z)) return;
                    let a = e.getAttribute("data-controls-ref-menu-id"),
                        s = i.id === a;
                    e.hidden = !s, s ? r = e : t || (t = e.input ? e.input.value : "")
                }
                let s = r && r.input;
                s && (r && void 0 !== t && (s.value = t), s.focus())
            }), (0, i.on)("click", ".js-branch-select-menu", e => {
                let t = e.currentTarget;
                t instanceof HTMLDetailsElement && !t.open && (0, a.sz)(t)
            })
        },
        58541: (e, t, r) => {
            (0, r(36071).N7)("#js-spoofed-commit-warning-trigger", {
                add: () => {
                    let e = document.getElementById("spoof-warning");
                    if (!e) return;
                    let t = document.querySelector(".commit-title");
                    t && t.classList.add("pb-1"), e.hidden = !1, e.removeAttribute("aria-hidden")
                }
            })
        },
        97629: (e, t, r) => {
            r.d(t, {
                Z: () => n
            });

            function n(e) {
                return !(e.offsetWidth <= 0 && e.offsetHeight <= 0)
            }
        },
        63746: (e, t, r) => {
            var n, o = r(76006),
                i = r(3447),
                a = r(67044),
                s = r(82873),
                l = r(59753),
                c = r(9302);

            function d(e, t, r, n) {
                var o, i = arguments.length,
                    a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
                return i > 3 && a && Object.defineProperty(t, r, a), a
            }
            let u = class BranchFilterElement extends HTMLElement {
                submit(e) {
                    e.preventDefault()
                }
                resetField(e) {
                    if ("Escape" !== (0, a.EL)(e)) return;
                    let t = this.field.value.trim();
                    this.field.value = "", t && this.search()
                }
                reset() {
                    this.field.focus(), this.field.value = "", (0, l.f)(this.field, "input")
                }
                get activeFilter() {
                    return this.filters.find(e => e.classList.contains("selected")) ? ? null
                }
                async search() {
                    this.originalSelectedItem || (this.originalSelectedItem = this.activeFilter);
                    let e = this.field.value.trim().length > 0,
                        t = function(e) {
                            let t = e.form,
                                r = e.value.trim();
                            if (r) {
                                let e = new URL(t.action, window.location.origin),
                                    n = new URLSearchParams(e.search.slice(1)),
                                    o = t.elements.namedItem("utf8");
                                return o instanceof HTMLInputElement && n.append("utf8", o.value), n.append("query", r), e.search = n.toString(), e.toString()
                            }
                            return t.getAttribute("data-reset-url")
                        }(this.field);
                    for (let t of (this.classList.toggle("is-search-mode", e), this.classList.add("is-loading"), this.filters)) t.classList.remove("selected");
                    e ? this.allFilter.classList.add("selected") : this.originalSelectedItem && (this.originalSelectedItem.classList.add("selected"), this.originalSelectedItem = null), this.abortSearch ? .abort();
                    let {
                        signal: r
                    } = this.abortSearch = new AbortController;
                    try {
                        let e = await (0, s.a_)(document, t, {
                            signal: r
                        });
                        (0, c.lO)(null, "", t), this.result.textContent = "", this.result.appendChild(e)
                    } catch {}
                    r.aborted || this.classList.remove("is-loading")
                }
                constructor(...e) {
                    super(...e), this.abortSearch = null, this.originalSelectedItem = null
                }
            };
            d([o.fA], u.prototype, "field", void 0), d([o.fA], u.prototype, "result", void 0), d([o.fA], u.prototype, "allFilter", void 0), d([o.GO], u.prototype, "filters", void 0), d([(0, i.D)(100)], u.prototype, "search", null), u = d([o.Ih], u);
            var f = r(15345);

            function p(e, t, r, n) {
                var o, i = arguments.length,
                    a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
                return i > 3 && a && Object.defineProperty(t, r, a), a
            }
            let h = class BranchFilterItemElement extends HTMLElement {
                get branch() {
                    return this.getAttribute("branch")
                }
                get branches() {
                    let e = this.closest("branch-filter"),
                        t = e.querySelectorAll("branch-filter-item");
                    return Array.from(t).filter(e => e.branch === this.branch)
                }
                get dialogBodyPath() {
                    return this.getAttribute("dialog-body-path")
                }
                get destroyDialog() {
                    let e = this.closest("branch-filter");
                    return e.querySelector("modal-dialog")
                }
                loading(e) {
                    for (let t of this.branches) e ? t.spinner.removeAttribute("hidden") : t.spinner.setAttribute("hidden", "true"), t.destroyButton && (t.destroyButton.hidden = e)
                }
                set mode(e) {
                    for (let t of this.branches) t.classList.toggle("Details--on", "restore" === e)
                }
                async restore(e) {
                    let t;
                    e.preventDefault(), this.loading(!0);
                    let r = e.target;
                    try {
                        t = await fetch(r.action, {
                            method: r.method,
                            body: new FormData(r),
                            headers: {
                                "X-Requested-With": "XMLHttpRequest"
                            }
                        })
                    } catch {} finally {
                        t && t.ok || location.reload(), this.loading(!1)
                    }
                    this.mode = "destroy", setTimeout(() => this.destroyButton ? .focus(), 1)
                }
                async destroy(e) {
                    let t;
                    e.preventDefault(), this.loading(!0), this.disableAllDeleteButtons(!0);
                    try {
                        t = await fetch(this.dialogBodyPath)
                    } catch {}
                    if (!t || !t.ok) {
                        this.displayServerError(!0, t ? .status === 404), this.disableAllDeleteButtons(!1), this.loading(!1);
                        return
                    }
                    this.displayServerError(!1);
                    let r = await t.text();
                    r ? (this.setUpDialog(r), this.loading(!1), this.destroyDialog.show(), this.disableAllDeleteButtons(!1)) : (this.disableAllDeleteButtons(!1), await this.confirmDeletion())
                }
                async confirmDeletion() {
                    let e;
                    this.loading(!0), this.destroyDialog.close();
                    let t = this.destroyButton.closest("form");
                    try {
                        e = await fetch(t.action, {
                            method: t.method,
                            body: new FormData(t),
                            headers: {
                                "X-Requested-With": "XMLHttpRequest"
                            }
                        })
                    } catch {}
                    if (!e || !e.ok) {
                        this.displayServerError(!0, e ? .status === 404), this.loading(!1);
                        return
                    }(0, f.x)(`Branch ${this.branch} deleted`), this.loading(!1), this.mode = "restore", setTimeout(() => this.restoreButton ? .focus(), 1)
                }
                setUpDialog(e) {
                    let t = this.destroyDialog;
                    t.querySelector(".js-delete-dialog-body").innerHTML = e, t.addEventListener("close", this.closeHandler), t.addEventListener("cancel", this.cancelHandler)
                }
                handleDialogClose() {
                    this.removeDialogEventListeners(), this.confirmDeletion()
                }
                handleDialogCancel() {
                    this.removeDialogEventListeners(), setTimeout(() => this.destroyButton ? .focus(), 1)
                }
                removeDialogEventListeners() {
                    let e = this.destroyDialog;
                    e.removeEventListener("close", this.closeHandler), e.removeEventListener("cancel", this.cancelHandler)
                }
                disableAllDeleteButtons(e) {
                    for (let t of document.querySelectorAll(".js-branch-delete-button")) t.disabled = e, e ? t.classList.add("disabled") : t.classList.remove("disabled")
                }
                displayServerError(e, t = !1) {
                    let r = document.querySelector(".js-branch-delete-error"),
                        n = document.querySelector(".js-branch-delete-warning");
                    e ? t ? (n.querySelector(".js-branch-delete-warning-name").textContent = this.branch, n.hidden = !1) : (r.querySelector(".js-branch-delete-error-name").textContent = this.branch, r.hidden = !1) : (r.hidden = !0, n.hidden = !0)
                }
                constructor(...e) {
                    super(...e), this.closeHandler = () => this.handleDialogClose(), this.cancelHandler = () => this.handleDialogCancel()
                }
            };
            p([o.fA], h.prototype, "destroyButton", void 0), p([o.fA], h.prototype, "restoreButton", void 0), p([o.fA], h.prototype, "spinner", void 0), h = p([o.Ih], h);
            var m = r(36071);
            (0, m.N7)(".js-new-badge-autodismiss", {
                constructor: HTMLFormElement,
                add: e => {
                    let t = e.closest("details");
                    t.addEventListener("toggle", () => {
                        t.hasAttribute("open") && fetch(e.action, {
                            method: e.method,
                            body: new FormData(e),
                            headers: {
                                "X-Requested-With": "XMLHttpRequest"
                            }
                        })
                    })
                }
            }), (0, m.N7)(".js-fetch-upstream-details-content", {
                constructor: HTMLElement,
                initialize(e) {
                    e.hidden = !0
                }
            }), (0, l.on)("click", ".js-fetch-upstream-summary", async function() {
                let e = document.querySelector("details.js-fetch-upstream-details"),
                    t = e.querySelector(".js-fetch-upstream-details-spinner"),
                    r = e.querySelector(".js-fetch-upstream-details-content");
                if (t.hidden && !r.hidden) return;
                t.hidden = !1;
                let n = r.querySelector(".js-fetch-upstream-conflicts-ui"),
                    o = r.querySelector(".js-fetch-upstream-no-conflicts-ui"),
                    i = parseInt(r.getAttribute("data-behind"));
                if (0 === i) {
                    n.hidden = !0, o.hidden = !1, r.hidden = !1, t.hidden = !0;
                    return
                }
                let a = r.getAttribute("data-mergeability-check-url"),
                    s = await fetch(a, {
                        headers: {
                            Accept: "application/json"
                        }
                    });
                if (r.hidden = !1, t.hidden = !0, s.ok) {
                    let e = await s.json();
                    "clean" === e.state ? o.hidden = !1 : n.hidden = !1
                } else n.hidden = !1
            });
            var g = r(56959),
                y = r(65935),
                v = r(58700);
            (0, m.N7)(".repository-import", {
                subscribe: e => (0, g.RB)(e, "socket:message", function(e) {
                    let t = e.detail.data;
                    t.redirect_to && (document.location.href = t.redirect_to, e.stopImmediatePropagation())
                })
            }), (0, l.on)("change", "input.js-repository-import-lfs-opt", function({
                currentTarget: e
            }) {
                let t = parseInt(e.getAttribute("data-percent-used") || ""),
                    r = e.closest(".js-repository-import-lfs-container"),
                    n = e.getAttribute("data-used") || "";
                r.querySelector(".js-repository-import-lfs-warn").classList.toggle("d-none", !(t > 100)), r.querySelector(".js-usage-bar").classList.toggle("exceeded", t >= 100), r.querySelector(".js-usage-bar").setAttribute("aria-label", `${t}%`), r.querySelector(".js-repository-import-lfs-progress").style.width = `${t}%`, r.querySelector("span.js-usage-text").textContent = n
            }), (0, y.AC)(".js-repository-import-author-form", async function(e, t) {
                let r = await t.html(),
                    n = e.closest(".js-repository-import-author");
                n.replaceWith(r.html)
            }), (0, l.on)("click", ".js-repository-import-projects-cancel-button", function() {
                let e = document.querySelector(".js-repository-import-projects-cancel-form");
                (0, v.Bt)(e)
            }), (0, m.N7)(".js-branch-merge-queue-link", {
                subscribe: e => (0, g.RB)(e, "socket:message", async function(t) {
                    let r = t.detail.data.queue_entries_count,
                        n = e.getAttribute("data-singular-message"),
                        o = e.getAttribute("data-plural-message");
                    "1" === r ? e.textContent = `${r} ${n}` : e.textContent = `${r} ${o}`
                })
            });
            var b = r(254);
            let j = !1,
                w = new URLSearchParams(window.location.search),
                S = w.get("profile_readme");

            function E() {
                let e = document.querySelector(".js-repo-name");
                (0, l.f)(e, "input");
                let t = document.querySelector('.js-owner-container [aria-checked="true"]'),
                    r = "false" !== t.getAttribute("data-org-allow-public-repos"),
                    n = document.querySelector(".js-privacy-toggle[value=public]"),
                    o = document.querySelector(".js-privacy-toggle-label-public"),
                    i = document.querySelector(".js-public-description"),
                    a = document.querySelector(".js-public-restricted-by-policy-description");
                q(r, n, o, i, a);
                let s = t.getAttribute("data-business-id"),
                    c = function(e, t) {
                        let r = !1,
                            n = document.querySelectorAll(".js-new-repo-internal-visibility");
                        for (let e of n) {
                            e.hidden = !0;
                            let t = e.querySelector(".js-privacy-toggle[value=internal]");
                            t instanceof HTMLInputElement && t.checked && (r = !0)
                        }
                        if (e) {
                            let n = document.querySelector(`#new-repo-internal-visibility-${e}`);
                            if (n) {
                                n.hidden = !1;
                                let e = n.querySelector(".js-privacy-toggle-label-internal"),
                                    o = n.querySelector(".js-internal-description"),
                                    i = n.querySelector(".js-internal-restricted-by-policy-description"),
                                    a = n.querySelector(".js-privacy-toggle[value=internal]");
                                if (a instanceof HTMLInputElement) return "false" === t.getAttribute("data-org-allow-internal-repos") ? (a.disabled = !0, e && e.classList.add("color-fg-muted"), o && (o.hidden = !0), i && (i.hidden = !1)) : (r && (a.checked = !0, (0, l.f)(a, "change")), a.disabled = !1, e && e.classList.remove("color-fg-muted"), o && (o.hidden = !1), i && (i.hidden = !0)), a
                            }
                        }
                        return null
                    }(s, t),
                    d = "false" !== t.getAttribute("data-org-allow-private-repos"),
                    u = document.querySelector(".js-privacy-toggle[value=private]"),
                    f = document.querySelector(".js-privacy-toggle-label-private"),
                    p = document.querySelector(".js-private-description"),
                    h = document.querySelector(".js-private-restricted-by-policy-description");
                q(d, u, f, p, h), A(),
                    function() {
                        let e = document.querySelectorAll('.js-org-upgrade-link:not([hidden=""]');
                        for (let t of e) t.hidden = !0
                    }();
                let m = "false" !== t.getAttribute("data-org-private-restricted-by-plan"),
                    g = document.querySelector(".js-upgrade-private-description"),
                    y = "false" !== t.getAttribute("data-org-show-upgrade"),
                    v = t.getAttribute("data-org-name"),
                    b = v ? document.querySelector(`a[data-upgrade-link="${v}"]`) : null,
                    w = document.querySelector(".js-ask-owner-message");
                d || !m ? (g && (g.hidden = !0), b && (b.hidden = !0), w && (w.hidden = !0)) : (h && (h.hidden = m), g && (g.hidden = !1), b && (b.hidden = !y), w && (w.hidden = y)),
                    function(e) {
                        let t = document.querySelector(".js-privacy-toggle:checked");
                        L(t ? .value, e)
                    }(t);
                let E = t.getAttribute("data-default-new-repo-branch"),
                    k = document.querySelector(".js-new-repo-owner-default-branch");
                k && (k.textContent = E);
                let C = t.getAttribute("data-owner-settings-link-prefix"),
                    x = document.querySelector(".js-new-repo-owner-settings-link-prefix");
                x && (x.textContent = C);
                let R = t.getAttribute("data-owner-settings-url"),
                    D = document.querySelector(".js-repo-owner-default-branch-settings-link-container"),
                    I = document.querySelector(".js-org-repo-owner-default-branch-settings-info");
                if (R) {
                    let e = document.querySelector(".js-new-repo-owner-settings-link");
                    e && (e.href = R, D && (D.hidden = !1)), I && (I.hidden = !0)
                } else if (D && (D.hidden = !0, I)) {
                    let e = t.hasAttribute("data-viewer-is-org-admin");
                    I.hidden = !e
                }
                let M = "true" === t.getAttribute("data-org-show-trade-controls"),
                    O = "true" === t.getAttribute("data-viewer-is-org-admin"),
                    P = "true" === t.getAttribute("data-user-show-trade-controls"),
                    H = M && !d,
                    N = document.querySelector(".js-trade-controls-description"),
                    B = document.querySelector(".js-individual-trade-controls-description");
                P || H ? (h && (P || O || !H ? h.hidden = !0 : h.hidden = !1), u.disabled = !0, p && (p.hidden = !0), g && (g.hidden = !0), b && (b.hidden = !0), w && (w.hidden = !0)) : (N && (N.hidden = !0), B && (B.hidden = !0)), P ? (N && (N.hidden = !0), B && (B.hidden = !1)) : H && N && (B && (B.hidden = !0), O ? N.hidden = !1 : N.hidden = !0),
                    function(e, t, r, n) {
                        let o = null;
                        if ("private" === e.getAttribute("data-default") && n && !n.disabled ? o = n : "internal" === e.getAttribute("data-default") && r && !r.disabled ? o = r : t && !t.disabled ? o = t : r && !r.disabled && (o = r), n && !n.disabled && "member" === S ? o = n : t && !t.disabled && S && (o = t), !o) return;
                        let i = t && t.disabled && t.checked || n.disabled && n.checked || r && r.disabled && r.checked,
                            a = (!t || !t.checked) && (!r || !r.checked) && !n.checked;
                        (!1 === j || !0 === i || !0 === a) && (o.checked = !0, (0, l.f)(o, "change"))
                    }(t, n, c, u),
                    function(e) {
                        for (let t of document.querySelectorAll(".js-with-permission-fields")) t.hidden = !e;
                        for (let t of document.querySelectorAll(".js-without-permission-fields")) t.hidden = e;
                        let t = document.querySelector(".errored"),
                            r = document.querySelector("dl.warn");
                        t && (t.hidden = !e), r && (r.hidden = !e)
                    }("yes" === t.getAttribute("data-permission")),
                    function(e) {
                        let t = document.querySelector("auto-check.js-repo-name-autocheck"),
                            r = t.getAttribute("src"),
                            n = t.getAttribute("disabled-src"),
                            o = "true" === e.getAttribute("data-is-user-or-org");
                        o ? (n && t.setAttribute("src", n), t.removeAttribute("disabled-src")) : (r && t.setAttribute("disabled-src", r), t.removeAttribute("src"))
                    }(t), T();
                let $ = document.querySelector(".js-quick-install-container");
                if ($) {
                    let e = $.querySelector(".js-quick-install-divider");
                    e.hidden = !0;
                    let t = document.querySelector("input[name=owner]:checked"),
                        r = t.parentElement;
                    if (r) {
                        let t = r.querySelector(".js-quick-install-list-template");
                        if (t instanceof HTMLTemplateElement) {
                            let r = $.querySelector(".js-account-apps");
                            r.textContent = "", r.append(t.content.cloneNode(!0)), t.children.length > 0 && (e.hidden = !1)
                        }
                    }
                }
                _()
            }

            function L(e, t) {
                let r = t.getAttribute("data-org-name"),
                    n = t.getAttribute("data-business-name"),
                    o = "true" === t.getAttribute("data-is-user-or-org"),
                    i = r ? `the ${r} organization` : "your personal account",
                    a = n ? ` (${n})` : "",
                    s = document.querySelector(".js-new-repo-destination-message");
                if (s) {
                    var l;
                    let t = e ? "internal" === e ? "n internal" : ` ${e}` : "";
                    s.textContent = (l = `You are creating a${t} repository`, o ? `${l} in ${i}${a}.` : `${l}.`);
                    return
                }
            }

            function q(e, t, r, n, o) {
                e ? (t && (t.disabled = !1), r && r.classList.remove("color-fg-muted"), n && (n.hidden = !1), o && (o.hidden = !0)) : (t && (t.disabled = !0), r && r.classList.add("color-fg-muted"), n && (n.hidden = !0), o && (o.hidden = !1))
            }

            function A() {
                let e = document.querySelector('.js-owner-container [aria-checked="true"]');
                if (!e) return;
                let t = e.closest(".form-group");
                if (!t) return;
                let r = document.querySelector(".js-owner-reponame .js-repo-name");
                if (!r) return;
                let n = "true" === e.getAttribute("data-is-user-or-org"),
                    o = t.querySelector("#repository-owner") === document.activeElement;
                n || !r.value || o ? t.classList.remove("errored") : t.classList.add("errored")
            }

            function T(e) {
                let t = e ? .target || document.querySelector(".js-privacy-toggle:checked");
                t && (! function(e) {
                    let t = document.querySelector('.js-owner-container [aria-checked="true"]');
                    L(e, t)
                }(t.value), _())
            }

            function _() {
                let e = document.querySelector(".js-repo-form"),
                    t = e.querySelector(".js-repository-owner-choice:checked"),
                    r = e.querySelector(".js-repo-name"),
                    n = e.querySelector(".js-repo-url"),
                    o = !n || !n.classList.contains("is-autocheck-errored"),
                    i = !!document.querySelector(".js-page-repo-persisted") || !!t;
                (o = o && i) && r && (o = r.classList.contains("is-autocheck-successful"));
                let a = e.querySelector("button[type=submit]");
                a.disabled = !o
            }(0, m.N7)(".js-page-new-repo", function() {
                let e = document.querySelector(".js-owner-container");
                e && (k(), E())
            });
            let k = () => {
                let e = document.querySelector(".js-repo-form"),
                    t = e.querySelector(".js-repo-url");
                if (t) {
                    t.focus();
                    return
                }
                let r = e.querySelector(".js-template-repository-select");
                if (r) {
                    r.focus();
                    return
                }
                let n = e.querySelector(".js-owner-select");
                n && n.focus()
            };
            (0, l.on)("focusout", "#repository-owner", function() {
                A()
            }), (0, l.on)("click", ".js-reponame-suggestion", function(e) {
                let t = document.querySelector(".js-repo-name");
                t.value = e.currentTarget.textContent, A(), (0, l.f)(t, "input", !1)
            }), (0, l.on)("click", ".js-use-pages-url", function(e) {
                let t = e.currentTarget,
                    r = document.querySelector(".js-pages-url-input"),
                    n = document.getElementById("page-url");
                r.readOnly = t.checked, r.value = n.textContent, t.checked ? (r.classList.add("color-fg-subtle"), r.classList.add("color-bg-subtle"), r.classList.remove("color-bg-default"), r.classList.remove("color-fg-default")) : (r.classList.remove("color-fg-subtle"), r.classList.remove("color-bg-subtle"), r.classList.add("color-fg-default"), r.classList.add("color-bg-default"))
            }), (0, l.on)("click", ".js-privacy-toggle", function() {
                j = !0
            }), (0, l.on)("change", ".js-privacy-toggle", T), (0, l.on)("details-menu-selected", ".js-owner-container", E, {
                capture: !0
            });
            let C = e => {
                    let t = document.querySelector(".js-org-profile");
                    if (t) {
                        let r = document.querySelector(".js-owner-container input.js-repository-owner-is-org:checked"),
                            n = e ? .target || document.querySelector(".js-repo-name"),
                            o = !(r && ".github" === n.value.toLowerCase());
                        t.hidden = o;
                        let i = document.querySelector("#repo-name-suggestion");
                        i.hidden = !o
                    }
                },
                x = e => {
                    let t = document.querySelector(".js-org-private-profile");
                    if (t) {
                        let r = document.querySelector(".js-owner-container input.js-repository-owner-is-org:checked"),
                            n = e ? .target || document.querySelector(".js-repo-name"),
                            o = !(r && ".github-private" === n.value.toLowerCase());
                        t.hidden = o;
                        let i = document.querySelector("#repo-name-suggestion");
                        i.hidden = !o
                    }
                },
                R = e => {
                    let t = document.querySelector(".js-personal");
                    if (t) {
                        let r = document.querySelector(".js-owner-container input.js-repository-owner-is-viewer"),
                            n = e ? .target || document.querySelector(".js-repo-name"),
                            o = !(r && r.checked && r.defaultValue.toLowerCase() === n.value.toLowerCase());
                        t.hidden = o;
                        let i = document.querySelector("#repo-name-suggestion");
                        i.hidden = !o
                    }
                };
            async function D(e) {
                return (0, s.a_)(document, e)
            }
            async function I(e) {
                let t = e.getAttribute("data-pulse-diffstat-summary-url");
                try {
                    var r;
                    t && (r = await D(t), e.textContent = "", e.appendChild(r))
                } catch (n) {
                    let t = e.querySelector(".js-blankslate-loading"),
                        r = e.querySelector(".js-blankslate-error");
                    t.classList.add("d-none"), r.classList.remove("d-none")
                }
            }(0, b.q6)(".js-owner-reponame .js-repo-name", function(e) {
                R(e), C(e), x(e), A(), _()
            }), (0, l.on)("auto-check-send", ".js-repo-name-auto-check", function(e) {
                let t = e.currentTarget,
                    r = t.form,
                    n = r.querySelector("input[name=owner]:checked").value;
                e.detail.body.append("owner", n)
            }), (0, l.on)("auto-check-complete", ".js-repo-name-auto-check", _), (0, b.q6)(".js-repo-url", function(e) {
                let t = e.target;
                if (!(t instanceof HTMLInputElement)) return;
                let r = t.closest(".form-group");
                if (!(r instanceof HTMLDListElement)) return;
                let n = document.querySelector(".js-insecure-url-warning"),
                    o = document.querySelector(".js-svn-url-error"),
                    i = document.querySelector(".js-git-url-error"),
                    a = t.value.toLowerCase();
                n.hidden = !a.startsWith("http://"), o.hidden = !a.startsWith("svn://"), i.hidden = !a.startsWith("git://"), a.startsWith("svn://") || a.startsWith("git://") ? (t.classList.add("is-autocheck-errored"), r.classList.add("errored")) : (t.classList.remove("is-autocheck-errored"), r.classList.remove("errored")), _()
            }), (0, l.on)("change", ".js-repo-init-setting-menu-option", _), (0, l.on)("change", ".js-repo-readme", _), (0, l.on)("change", ".js-toggle-new-repo-default-branch-info", e => {
                let t = e.currentTarget;
                ! function(e) {
                    let t = e.closest("form"),
                        r = t.querySelector(".js-new-repo-default-branch-info");
                    if (!r) return;
                    let n = t.querySelectorAll(".js-toggle-new-repo-default-branch-info:checked"),
                        o = n.length > 0;
                    r.hidden = !o
                }(t)
            }), R(null), C(null), x(null), r(1883), (0, m.N7)(".js-pulse-contribution-data", e => {
                I(e)
            });
            var M = r(48858);
            async function O(e) {
                let t = e.form,
                    r = t.querySelector("#release_draft");
                r.value = "1", H(e, "saving");
                let n = await fetch(t.action, {
                    method: t.method,
                    body: new FormData(t),
                    headers: {
                        Accept: "application/json",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                });
                if (!n.ok) {
                    H(e, "failed");
                    return
                }
                let o = await n.json();
                return H(e, "saved"), (0, f.N)(e), setTimeout(H, 5e3, e, "default"), (0, l.f)(t, "release:saved", {
                    release: o
                }), o
            }

            function P(e) {
                let t = e.closest(".js-releases-marketplace-publish-container"),
                    r = t.querySelector(".js-releases-marketplace-publish-preview");
                e.checked ? r.classList.remove("d-none") : r.classList.add("d-none")
            }

            function H(e, t) {
                for (let r of e.querySelectorAll(".js-save-draft-button-state")) r.hidden = r.getAttribute("data-state") !== t;
                e.disabled = "saving" === t
            }

            function N(e) {
                let t = document.querySelector(".js-release-target-wrapper");
                if (null != t) {
                    switch (function(e) {
                        let t = document.querySelector(".js-release-tag");
                        t.setAttribute("data-state", e)
                    }(e), e) {
                        case "valid":
                        case "invalid":
                        case "duplicate":
                        case "branch_exists":
                            t.hidden = !0;
                            break;
                        case "loading":
                            break;
                        default:
                            t.hidden = !1
                    }
                    for (let t of document.querySelectorAll(".js-tag-status-message")) t.hidden = t.getAttribute("data-state") !== e, t.getAttribute("data-state") === e ? t.setAttribute("role", "status") : t.removeAttribute("role");
                    G(), V("pending")
                }
            }

            function B() {
                let e = document.querySelector(".js-release-tag");
                return e.getAttribute("data-state")
            }(0, l.on)("change", ".js-releases-marketplace-publish-field", function(e) {
                P(e.currentTarget)
            }), (0, m.N7)(".js-releases-marketplace-publish-field", function(e) {
                P(e)
            }), (0, l.on)("click", ".js-save-draft", function(e) {
                let t = e.currentTarget;
                t.disabled || (O(t), e.preventDefault())
            }), (0, l.on)("click", ".js-prerelease-checkbox", e => {
                let t = e.currentTarget,
                    r = e.currentTarget.closest("form").querySelector("#is_stored_latest"),
                    n = document.querySelector(".js-latest-release-checkbox");
                n && (t.checked ? (n.checked = !1, n.disabled = !0) : "1" === r.value ? (n.checked = !0, n.disabled = !0) : n.disabled = !1)
            }), (0, m.N7)(".js-latest-release-checkbox", function(e) {
                let t = e.closest("form").querySelector("#is_stored_latest"),
                    r = e.checked && !0 === e.disabled;
                t.value = r ? "1" : "0"
            }), (0, l.on)("release:saved", ".js-release-form", function(e) {
                let t = e.detail.release,
                    r = e.currentTarget;
                if (r.setAttribute("action", t.update_url), t.update_authenticity_token) {
                    let e = r.querySelector("input[name=authenticity_token]");
                    e.value = t.update_authenticity_token
                }(0, c.lO)(history.state, document.title, t.edit_url);
                let n = r.querySelector("#release_id");
                if (!n.value) {
                    n.value = t.id;
                    let e = document.createElement("input");
                    e.type = "hidden", e.name = "_method", e.value = "put", r.appendChild(e)
                }
            }), (0, l.on)("click", ".js-publish-release", function() {
                document.querySelector("#release_draft").value = "0"
            });
            let $ = new WeakMap;

            function U(e) {
                let t = e.querySelector('input[name="release[tag_name]"]:checked');
                return t ? .value
            }
            async function F(e) {
                let t = U(e);
                if (!t) {
                    N("empty");
                    return
                }
                if (t === $.get(e)) return;
                N("loading"), $.set(e, t);
                let r = e.getAttribute("data-url"),
                    n = new URL(r, window.location.origin),
                    o = new URLSearchParams(n.search.slice(1));
                o.append("tag_name", t), n.search = o.toString();
                let i = await fetch(n.toString(), {
                    headers: {
                        Accept: "application/json",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                });
                if (!i.ok) {
                    N("invalid");
                    return
                }
                let a = await i.json();
                "duplicate" === a.status && parseInt(e.getAttribute("data-existing-id")) === parseInt(a.release_id) ? N("valid") : (document.querySelector(".js-release-tag .js-edit-release-link").setAttribute("href", a.url), N(a.status)), Y(e)
            }
            async function W(e) {
                let t = e.offsetWidth;
                e.style.width = `${t}px`, V("loading"), e.setAttribute("aria-disabled", "true");
                let r = e.getAttribute("data-repo-url"),
                    n = `${r}/releases/notes`,
                    o = new URL(n, window.location.origin),
                    i = new URLSearchParams(o.search.slice(1));
                i.append("commitish", z()), i.append("tag_name", U(document) || ""), i.append("previous_tag_name", document.querySelector('input[name="release[previous_tag_name]"]:checked') ? .value || ""), o.search = i.toString();
                let a = await fetch(o.toString(), {
                    headers: {
                        Accept: "application/json"
                    }
                });
                if (a.ok) {
                    let e = await a.json();
                    if (e.commitish === z()) {
                        let t = document.getElementById("release_body"),
                            r = "generated" === K() ? "" : t.value.trim();
                        r ? t.value = r.concat("\n\n", e.body) : t.value = e.body;
                        let n = document.getElementById("release_name");
                        n.value || (n.value = e.title), V("succeed"), (0, f.x)("Successfully generated release notes"), Z(r ? "generated-and-edited" : "generated"), G(!0);
                        let o = document.querySelector(".js-release-body-warning");
                        o.textContent = e.warning_message, o.hidden = !e.warning_message
                    }
                } else {
                    V("failed"), e.setAttribute("aria-disabled", "false");
                    let t = await a.json();
                    if (t && t.error) {
                        let e = document.getElementById("form-error-alert");
                        e.textContent = t.error, e.hidden = !1
                    }
                }
            }(0, l.on)("click", ".js-generate-release-notes", function(e) {
                let t = e.currentTarget;
                "true" !== t.getAttribute("aria-disabled") && W(t)
            });
            let X = ["pending", "loading", "succeed", "failed"];

            function V(e) {
                if (X.map(t => {
                        let r = document.getElementById(`generate-icon-${t}`),
                            n = document.getElementById("generate-btn-txt");
                        r && (t === e ? (n && n.setAttribute("hidden", "true"), ("succeed" === e || "failed" === e) && setTimeout(() => {
                            r.setAttribute("hidden", "true"), n && n.removeAttribute("hidden")
                        }, 2e3), r.removeAttribute("hidden")) : r.setAttribute("hidden", "true"))
                    }), "failed" !== e) {
                    let e = document.getElementById("form-error-alert");
                    e.textContent = "", e.hidden = !0
                }
            }

            function Z(e) {
                let t = document.getElementById("generated_notes_state");
                t.value = e
            }

            function K() {
                let e = document.getElementById("generated_notes_state");
                return e.value
            }

            function z() {
                return "valid" === B() ? U(document) || "" : document.querySelector('input[name="release[target_commitish]"]:checked') ? .value || ""
            }

            function Y(e) {
                let t = e.closest("form"),
                    r = t.querySelector(".js-previewable-comment-form");
                if (!r) return;
                let n = r.getAttribute("data-base-preview-url");
                n || (n = String(r.getAttribute("data-preview-url")), r.setAttribute("data-base-preview-url", n));
                let o = e.querySelectorAll('input[name="release[tag_name]"], input[name="release[target_commitish]"]:checked'),
                    i = new URL(n, window.location.origin),
                    a = new URLSearchParams(i.search.slice(1));
                for (let e of o) e.value && a.append(e.name, e.value);
                i.search = a.toString(), r.setAttribute("data-preview-url", i.toString())
            }

            function G(e = !1) {
                let t = document.querySelector(".js-generate-release-notes"),
                    r = document.getElementById("prev-tag-picker"),
                    n = document.querySelector("tool-tip[for='generate-notes-btn']"),
                    o = B(),
                    i = "valid" !== o && "pending" !== o,
                    a = e || i;
                t.setAttribute("aria-disabled", a.toString()), n && (a ? n.textContent = `${i?"Select a valid tag to a":"Clear existing notes to a"}utomatically add the Markdown for all the merged pull requests from this diff and contributors of this release` : n.textContent = "Automatically add the Markdown for all the merged pull requests from this diff and contributors of this release"), r && (r.hidden = a)
            }

            function Q(e) {
                if ("" === e.value) G(), V("pending"), Z("initial");
                else {
                    let e = K();
                    G("initial" !== e), "generated" === e && Z("generated-and-edited")
                }
            }(0, m.N7)(".js-release-tag", function(e) {
                F(e)
            }), (0, m.N7)("details-menu", function(e) {
                (0, M.e)(e)
            }), (0, l.on)("click", ".js-release-expand-btn", async function(e) {
                let t = e.currentTarget.closest(".js-release-expandable"),
                    r = t.getAttribute("data-expand-url"),
                    n = await (0, s.a_)(document, r);
                t ? .replaceWith(n)
            }), (0, l.on)("click", ".js-release-asset-untruncate-btn", async function(e) {
                e.currentTarget.setAttribute("hidden", "true");
                let t = e.currentTarget.parentNode ? .querySelector(".js-truncate-assets-spinner");
                t && t.removeAttribute("hidden");
                let r = e.currentTarget.closest(".js-truncated-assets-fragment"),
                    n = r ? .getAttribute("data-deferred-src");
                n && r ? .setAttribute("src", encodeURI(n))
            }), (0, m.N7)("#release_body", function(e) {
                e.addEventListener("input", function() {
                    Q(e)
                }), Q(e)
            }), (0, l.on)("change", ".js-release-check-tag", function(e) {
                let t = e.currentTarget.closest(".js-release-tag");
                F(t)
            }), (0, m.N7)(".js-release-form .js-previewable-comment-form", function(e) {
                let t = e.closest("form").querySelector(".js-release-tag");
                Y(t)
            }), (0, m.N7)("#release_page_title", function(e) {
                let t = e.textContent ? .trim() || "";
                t.length && (document.title = t)
            }), (0, m.N7)("#release-filter", function(e) {
                e.value.length > 0 && (e.focus(), e.setSelectionRange(e.value.length, e.value.length))
            });
            let J = "<BRANCH>";
            (0, l.on)("auto-check-message-updated", ".js-rename-branch-input", function(e) {
                let t = e.currentTarget;
                ! function(e) {
                    let t = e.closest(".js-rename-branch-form"),
                        r = e.value,
                        n = r !== e.defaultValue && "" !== r,
                        o = t.querySelector(".js-rename-branch-autocheck-message");
                    if (o && n) {
                        let e = !1;
                        for (let n of ((r = o.getAttribute("data-shell-safe-name") || J).includes("<") && (e = !0), t.querySelectorAll(".js-rename-branch-new-name"))) n.textContent = r;
                        for (let n of ((r = o.getAttribute("data-shell-safe-name-with-remote") || `origin/${J}`).includes("<") && (e = !0), t.querySelectorAll(".js-rename-branch-new-name-with-remote"))) n.textContent = r;
                        let n = t.querySelector(".js-rename-branch-special-characters-documentation");
                        n && e && (n.hidden = !1, n.removeAttribute("aria-hidden"))
                    }
                }(t)
            });
            let ee = e => {
                    let t = document.querySelector(et);
                    if (t) {
                        let r = 0 === e.value.length;
                        t.disabled = r
                    }
                },
                et = 'form.js-protected-branch-settings button[type="submit"]';
            (0, m.N7)(et, {
                add() {
                    let e = document.getElementById("rule_field");
                    e && (ee(e), e.addEventListener("input", () => ee(e)))
                }
            }), (0, l.on)("change", ".js-template-repository-choice", function(e) {
                let t = e.target,
                    r = t.checked && "" !== t.value,
                    n = t.form,
                    o = n.querySelector(".js-repository-auto-init-options");
                o.classList.toggle("has-removed-contents", r);
                let i = n.querySelectorAll(".js-template-repository-setting"),
                    a = n.querySelectorAll(".js-template-repository-name-display");
                if (r) {
                    let e = t.closest(".js-template-repository-choice-container"),
                        r = e.querySelector(".js-template-repository-name"),
                        o = t.getAttribute("data-owner"),
                        i = n.querySelector(`.js-repository-owner-choice[value="${o}"]`);
                    if (i instanceof HTMLInputElement) i.checked = !0, (0, l.f)(i, "change");
                    else {
                        let e = n.querySelector(".js-repository-owner-choice.js-repository-owner-is-viewer");
                        e.checked = !0, (0, l.f)(e, "change")
                    }
                    for (let e of a) e.textContent = r.textContent
                } else
                    for (let e of a) e.textContent = "";
                for (let e of i) e.hidden = !r
            });
            var er = r(47142),
                en = r(10160),
                eo = r(69567),
                ei = r(15205);
            let ea = (0, ei.Z)(er.Gs);
            (0, b.w4)("keydown", ".js-tree-finder-field", e => {
                "Escape" === e.key && (e.preventDefault(), history.back())
            }), (0, m.N7)(".js-tree-finder", e => {
                let t = e.querySelector(".js-tree-finder-field"),
                    r = e.querySelector(".js-tree-finder-virtual-filter"),
                    n = e.querySelector(".js-tree-browser"),
                    o = e.querySelector(".js-tree-browser-results"),
                    i = e.querySelector(".js-tree-browser-result-template"),
                    a = new en.Z(t, o);
                r.filter = (e, t) => "" === t || (0, er.CD)(t, e) && ea(t, e) > 0, r.addEventListener("virtual-filter-input-filter", () => {
                    n.updating = "lazy"
                }), r.addEventListener("virtual-filter-input-filtered", () => {
                    n.updating = "eager"
                }), n.addEventListener("virtual-list-sort", e => {
                    e.preventDefault();
                    let r = t.value;
                    n.sort((e, t) => ea(r, t) - ea(r, e))
                }), n.addEventListener("virtual-list-update", () => {
                    a.stop()
                }), n.addEventListener("virtual-list-updated", () => {
                    a.start(), a.navigate()
                }), n.addEventListener("virtual-list-render-item", e => {
                    if (!(e instanceof CustomEvent)) return;
                    let t = new eo.R(i, {
                            item: e.detail.item,
                            id: `entry-${Math.random().toString().substr(2,5)}`,
                            urlEncodedItem: encodeURIComponent(e.detail.item).replaceAll("%2F", "/")
                        }),
                        r = t.querySelector("marked-text");
                    r && (r.positions = er.m7), e.detail.fragment.append(t)
                }), n.querySelector("ul").hidden = !1, t.focus(), a.start()
            });
            var es = r(57260),
                el = r(55908),
                ec = r(75198);
            let ed = null,
                eu = new WeakMap;

            function ef(e) {
                e.classList.remove("is-progress-bar");
                let t = e.closest(".js-upload-manifest-file-container"),
                    r = t.querySelector(".js-upload-progress");
                r.hidden = !0;
                let n = t.querySelector(".js-upload-meter-text .js-upload-meter-filename");
                n.textContent = ""
            }

            function ep(e) {
                ef(e.currentTarget)
            }
            async function eh(e) {
                let t = e.getAttribute("data-redirect-url");
                try {
                    await (0, s.DF)(e.getAttribute("data-poll-url"), void 0, void 0, [200], [202, 404]), window.location.href = t
                } catch (e) {
                    document.querySelector(".js-manifest-ready-check").hidden = !0, document.querySelector(".js-manifest-ready-check-failed").hidden = !1
                }
            }

            function em(e) {
                let t = e.closest("form");
                return t.querySelector("#release_id").value
            }(0, l.on)("file-attachment-accept", ".js-upload-manifest-file", function(e) {
                let {
                    attachments: t
                } = e.detail, r = parseInt(e.currentTarget.getAttribute("data-directory-upload-max-files") || "", 10);
                t.length > r && (e.preventDefault(), e.currentTarget.classList.add("is-too-many"))
            }), (0, l.on)("document:drop", ".js-upload-manifest-tree-view", async function(e) {
                let {
                    transfer: t
                } = e.detail, r = e.currentTarget, n = await es.P.traverse(t, !0), o = r.getAttribute("data-drop-url");
                document.addEventListener(el.Q.SUCCESS, () => {
                    document.querySelector(".js-upload-manifest-file").attach(n)
                }, {
                    once: !0
                }), (0, ec.softNavigate)(o)
            }), (0, l.on)("upload:setup", ".js-upload-manifest-file", async function(e) {
                let {
                    batch: t,
                    form: r,
                    preprocess: n
                } = e.detail, o = e.currentTarget;

                function i() {
                    r.append("upload_manifest_id", eu.get(o))
                }
                if (function(e, t) {
                        let r = e.closest(".js-upload-manifest-file-container"),
                            n = r.querySelector(".js-upload-progress");
                        n.hidden = !1, e.classList.add("is-progress-bar");
                        let o = n.querySelector(".js-upload-meter-text"),
                            i = o.querySelector(".js-upload-meter-range-start");
                        i.textContent = String(t.uploaded() + 1);
                        let a = o.querySelector(".js-upload-meter-range-end");
                        a.textContent = String(t.size)
                    }(o, t), eu.get(o)) {
                    i();
                    return
                }
                if (ed) {
                    n.push(ed.then(i));
                    return
                }
                let a = o.closest(".js-upload-manifest-file-container"),
                    s = a.querySelector(".js-upload-manifest-form");
                ed = fetch(s.action, {
                    method: s.method,
                    body: new FormData(s),
                    headers: {
                        Accept: "application/json"
                    }
                });
                let [l, c] = function() {
                    let e;
                    let t = new Promise(t => {
                        e = t
                    });
                    return [t, e]
                }();
                n.push(l.then(i));
                let d = await ed;
                if (!d.ok) return;
                let u = await d.json(),
                    f = document.querySelector(".js-manifest-commit-form"),
                    p = f.elements.namedItem("manifest_id");
                p.value = u.upload_manifest.id, eu.set(o, u.upload_manifest.id), ed = null, c()
            }), (0, l.on)("upload:start", ".js-upload-manifest-file", function(e) {
                let {
                    attachment: t,
                    batch: r
                } = e.detail, n = e.currentTarget.closest(".js-upload-manifest-file-container"), o = n.querySelector(".js-upload-progress"), i = o.querySelector(".js-upload-meter-text"), a = i.querySelector(".js-upload-meter-range-start");
                a.textContent = r.uploaded() + 1;
                let s = i.querySelector(".js-upload-meter-filename");
                s.textContent = t.fullPath
            }), (0, l.on)("upload:complete", ".js-upload-manifest-file", function(e) {
                let {
                    attachment: t,
                    batch: r
                } = e.detail, n = document.querySelector(".js-manifest-commit-file-template"), o = n.querySelector(".js-manifest-file-entry").cloneNode(!0), i = o.querySelector(".js-filename");
                i.textContent = t.fullPath;
                let a = t.id,
                    s = o.querySelector(".js-remove-manifest-file-form"),
                    l = s.elements.namedItem("file_id");
                l.value = a;
                let c = document.querySelector(".js-manifest-file-list");
                c.hidden = !1, e.currentTarget.classList.add("is-file-list");
                let d = c.querySelector(".js-manifest-file-list-root");
                d.appendChild(o), r.isFinished() && ef(e.currentTarget)
            }), (0, l.on)("upload:progress", ".js-upload-manifest-file", function(e) {
                let {
                    batch: t
                } = e.detail, r = e.currentTarget.closest(".js-upload-manifest-file-container"), n = r.querySelector(".js-upload-meter");
                n.style.width = `${t.percent()}%`
            }), (0, l.on)("upload:error", ".js-upload-manifest-file", ep), (0, l.on)("upload:invalid", ".js-upload-manifest-file", ep), (0, y.AC)(".js-remove-manifest-file-form", async function(e, t) {
                await t.html();
                let r = e.closest(".js-manifest-file-list-root"),
                    n = e.closest(".js-manifest-file-entry");
                if (n.remove(), !r.hasChildNodes()) {
                    let e = r.closest(".js-manifest-file-list");
                    e.hidden = !0;
                    let t = document.querySelector(".js-upload-manifest-file");
                    t.classList.remove("is-file-list")
                }
            }), (0, m.N7)(".js-manifest-ready-check", {
                initialize(e) {
                    eh(e)
                }
            }), (0, l.on)("click", ".js-release-remove-file", function(e) {
                let t = e.currentTarget.closest(".js-release-file");
                t.classList.add("delete"), t.querySelector("input.destroy").value = "true"
            }), (0, l.on)("click", ".js-release-undo-remove-file", function(e) {
                let t = e.currentTarget.closest(".js-release-file");
                t.classList.remove("delete"), t.querySelector("input.destroy").value = ""
            });
            let eg = null;

            function ey(e, t) {
                t.append("release_id", em(e));
                let r = Array.from(document.querySelectorAll(".js-releases-field .js-release-file.delete .id"));
                if (r.length) {
                    let e = r.map(e => e.value);
                    t.append("deletion_candidates", e.join(","))
                }
            }(0, l.on)("release:saved", ".js-release-form", function(e) {
                let t = e.currentTarget;
                eg = null;
                let r = !1;
                for (let e of t.querySelectorAll(".js-releases-field .js-release-file")) e.classList.contains("delete") ? e.remove() : e.classList.contains("js-template") || (r = !0);
                let n = t.querySelector(".js-releases-field");
                n.classList.toggle("not-populated", !r), n.classList.toggle("is-populated", r)
            }), (0, l.on)("upload:setup", ".js-upload-release-file", function(e) {
                let {
                    form: t,
                    preprocess: r
                } = e.detail, n = e.currentTarget;
                if (em(n)) {
                    ey(n, t);
                    return
                }
                if (!eg) {
                    let e = document.querySelector(".js-save-draft");
                    eg = O(e)
                }
                let o = ey.bind(null, n, t);
                r.push(eg.then(o))
            }), (0, l.on)("upload:start", ".js-upload-release-file", function(e) {
                let t = e.detail.policy,
                    r = e.currentTarget.querySelector(".js-upload-meter");
                r.classList.remove("d-none");
                let n = t.asset.replaced_asset;
                if (n)
                    for (let e of document.querySelectorAll(".js-releases-field .js-release-file .id")) Number(e.value) === n && e.closest(".js-release-file").remove()
            }), (0, l.on)("upload:complete", ".js-upload-release-file", function(e) {
                let {
                    attachment: t
                } = e.detail, r = document.querySelector(".js-releases-field"), n = r.querySelector(".js-template").cloneNode(!0);
                n.classList.remove("d-none", "js-template"), n.querySelector("input.id").value = t.id;
                let o = t.name || t.href.split("/").pop();
                for (let e of r.querySelectorAll(".js-release-file")) e.querySelector(".js-release-asset-filename") ? .value === o && "starter" === e.getAttribute("data-state") && e.remove();
                for (let e of n.querySelectorAll(".js-release-asset-filename")) e instanceof HTMLInputElement ? e.value = o : e.textContent = o;
                let i = `(${(t.file.size/1048576).toFixed(2)} MB)`;
                n.querySelector(".js-release-asset-filesize").textContent = i, n.setAttribute("data-state", "uploaded"), r.appendChild(n), r.classList.remove("not-populated"), r.classList.add("is-populated");
                let a = e.currentTarget.querySelector(".js-upload-meter");
                a.classList.add("d-none")
            }), (0, l.on)("upload:progress", ".js-upload-release-file", function(e) {
                let {
                    attachment: t
                } = e.detail, r = e.currentTarget.querySelector(".js-upload-meter");
                r.style.width = `${t.percent}%`
            });
            var ev = r(41246);

            function eb(e, t, r, n) {
                var o, i = arguments.length,
                    a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
                return i > 3 && a && Object.defineProperty(t, r, a), a
            }
            let ej = ((n = class RepoCodespacesCountElement extends HTMLElement {
                connectedCallback() {
                    (0, m.N7)("get-repo", {
                        constructor: ev.b,
                        add: e => {
                            this.handleGetRepoElement(e)
                        }
                    })
                }
                handleGetRepoElement(e) {
                    e.openOrCreateInCodespace && (0 === this.codespacesCount ? e.showOpenOrCreateInCodespace() : e.removeOpenOrCreateInCodespace())
                }
                constructor(...e) {
                    super(...e), this.codespacesCount = 0
                }
            }).attrPrefix = "", n);
            eb([o.Lj], ej.prototype, "codespacesCount", void 0), ej = eb([o.Ih], ej), r(55843), r(82368), r(58541), r(4738)
        },
        15345: (e, t, r) => {
            r.d(t, {
                N: () => o,
                x: () => i
            });
            var n = r(86283);

            function o(e, t) {
                i((e.getAttribute("aria-label") || e.innerText || "").trim(), t)
            }

            function i(e, t) {
                let {
                    assertive: r
                } = t ? ? {};
                ! function(e, t) {
                    let r = n.n4 ? .querySelector(t ? "#js-global-screen-reader-notice-assertive" : "#js-global-screen-reader-notice");
                    r && (r.textContent === e ? r.textContent = `${e}\u00A0` : r.textContent = e)
                }(e, r)
            }
        },
        82873: (e, t, r) => {
            r.d(t, {
                DF: () => d,
                Fr: () => u,
                a_: () => c
            });
            var n = r(18699);
            let o = class ResponseError extends Error {
                constructor(e, t) {
                    super(`${e} for HTTP ${t.status}`), this.response = t
                }
            };
            var i = r(22490),
                a = r(7180);
            let s = "server-x-safe-html",
                l = i.ZO.createPolicy(s, {
                    createHTML: (e, t) => a.O.apply({
                        policy: () => (! function(e, t, r = !1) {
                            let n = t.headers.get("content-type") || "";
                            if (!r && !n.startsWith("text/html")) throw new o(`expected response with text/html, but was ${n}`, t);
                            if (r && !(n.startsWith("text/html") || n.startsWith("application/json"))) throw new o(`expected response with text/html or application/json, but was ${n}`, t);
                            let i = t.headers.get("x-html-safe");
                            if (i) {
                                if (!e.includes(i)) throw new o("response X-HTML-Safe nonce did not match", t)
                            } else throw new o("missing X-HTML-Safe nonce", t)
                        }(function(e) {
                            let t = [...e.querySelectorAll("meta[name=html-safe-nonce]")].map(e => e.content);
                            if (t.length < 1) throw Error("could not find html-safe-nonce on document");
                            return t
                        }(document), t), e),
                        policyName: s,
                        fallback: e,
                        silenceErrorReporting: !0
                    })
                });
            async function c(e, t, r) {
                let o = new Request(t, r);
                o.headers.append("X-Requested-With", "XMLHttpRequest");
                let i = await self.fetch(o);
                if (i.status < 200 || i.status >= 300) throw Error(`HTTP ${i.status}${i.statusText||""}`);
                let a = l.createHTML(await i.text(), i);
                return (0, n.r)(e, a)
            }

            function d(e, t, r = 1e3, n = [200], o = [202]) {
                return async function r(i) {
                    let a = new Request(e, t);
                    a.headers.append("X-Requested-With", "XMLHttpRequest");
                    let s = await self.fetch(a);
                    if (o.includes(s.status)) return await new Promise(e => setTimeout(e, i)), r(1.5 * i);
                    if (n.includes(s.status)) return s;
                    if (s.status < 200 || s.status >= 300) throw Error(`HTTP ${s.status}${s.statusText||""}`);
                    throw Error(`Unexpected ${s.status} response status from poll endpoint`)
                }(r)
            }
            async function u(e, t, r) {
                let {
                    wait: n = 500,
                    acceptedStatusCodes: o = [200],
                    max: i = 3,
                    attempt: a = 0
                } = r || {}, s = async () => new Promise((r, s) => {
                    setTimeout(async () => {
                        try {
                            let n = new Request(e, t);
                            n.headers.append("X-Requested-With", "XMLHttpRequest");
                            let s = await self.fetch(n);
                            if (o.includes(s.status) || a + 1 === i) return r(s);
                            r("retry")
                        } catch (e) {
                            s(e)
                        }
                    }, n * a)
                }), l = await s();
                return "retry" !== l ? l : u(e, t, {
                    wait: n,
                    acceptedStatusCodes: o,
                    max: i,
                    attempt: a + 1
                })
            }
        },
        58700: (e, t, r) => {
            r.d(t, {
                Bt: () => i,
                DN: () => s,
                KL: () => d,
                Se: () => a,
                qC: () => u,
                sw: () => l
            });
            var n = r(5582);

            function o(e, t, r) {
                return e.dispatchEvent(new CustomEvent(t, {
                    bubbles: !0,
                    cancelable: r
                }))
            }

            function i(e, t) {
                t && (function(e, t) {
                    if (!(e instanceof HTMLFormElement)) throw TypeError("The specified element is not of type HTMLFormElement.");
                    if (!(t instanceof HTMLElement)) throw TypeError("The specified element is not of type HTMLElement.");
                    if ("submit" !== t.type) throw TypeError("The specified element is not a submit button.");
                    if (!e || e !== t.form) throw Error("The specified element is not owned by the form element.")
                }(e, t), (0, n.j)(t)), o(e, "submit", !0) && e.submit()
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

            function s(e, t) {
                for (let r in t) {
                    let n = t[r],
                        o = e.elements.namedItem(r);
                    o instanceof HTMLInputElement ? o.value = n : o instanceof HTMLTextAreaElement && (o.value = n)
                }
            }

            function l(e) {
                if (!(e instanceof HTMLElement)) return !1;
                let t = e.nodeName.toLowerCase(),
                    r = (e.getAttribute("type") || "").toLowerCase();
                return "select" === t || "textarea" === t || "input" === t && "submit" !== r && "reset" !== r || e.isContentEditable
            }

            function c(e) {
                return new URLSearchParams(e)
            }

            function d(e, t) {
                let r = new URLSearchParams(e.search),
                    n = c(t);
                for (let [e, t] of n) r.append(e, t);
                return r.toString()
            }

            function u(e) {
                return c(new FormData(e)).toString()
            }
        },
        5582: (e, t, r) => {
            function n(e) {
                let t = e.closest("form");
                if (!(t instanceof HTMLFormElement)) return;
                let r = o(t);
                if (e.name) {
                    let n = e.matches("input[type=submit]") ? "Submit" : "",
                        o = e.value || n;
                    r || ((r = document.createElement("input")).type = "hidden", r.classList.add("js-submit-button-value"), t.prepend(r)), r.name = e.name, r.value = o
                } else r && r.remove()
            }

            function o(e) {
                let t = e.querySelector("input.js-submit-button-value");
                return t instanceof HTMLInputElement ? t : null
            }
            r.d(t, {
                j: () => n,
                u: () => o
            })
        },
        67044: (e, t, r) => {
            r.d(t, {
                DV: () => i,
                D_: () => n.D_,
                EL: () => n.EL,
                N9: () => n.N9,
                Tz: () => n.Tz,
                k0: () => n.k0
            });
            var n = r(11793);
            let o = /(?:^|,)((?:[^,]|,(?=\+| |$))*(?:,(?=,))?)/g;

            function i(e) {
                return Array.from(e.matchAll(o)).map(([, e]) => e)
            }
        },
        76134: (e, t, r) => {
            r.d(t, {
                Ty: () => i,
                YE: () => a,
                Zf: () => l
            });
            var n = r(46426),
                o = r(67044);
            let i = () => {
                    let e = document.querySelector("meta[name=keyboard-shortcuts-preference]");
                    return !e || "all" === e.content
                },
                a = e => /Enter|Arrow|Escape|Meta|Control|Mod|Esc/.test(e) || e.includes("Alt") && e.includes("Shift"),
                s = new Set(["button", "checkbox", "color", "file", "hidden", "image", "radio", "range", "reset", "submit"]),
                l = e => {
                    let t = (0, o.EL)(e),
                        r = function(e) {
                            if (!(e instanceof HTMLElement)) return !1;
                            let t = e.nodeName.toLowerCase(),
                                r = e.getAttribute("type") ? .toLowerCase() ? ? "text",
                                n = "true" === e.ariaReadOnly || "true" === e.getAttribute("aria-readonly") || null !== e.getAttribute("readonly");
                            return ("select" === t || "textarea" === t || "input" === t && !s.has(r) || e.isContentEditable) && !n
                        }(e.target) && (0, n.c)("no_character_key_shortcuts_in_inputs"),
                        l = i() && !r;
                    return a(t) || l
                }
        },
        95253: (e, t, r) => {
            let n;
            r.d(t, {
                YT: () => f,
                qP: () => p,
                yM: () => h
            });
            var o = r(88149),
                i = r(86058),
                a = r(44544),
                s = r(71643);
            let {
                getItem: l
            } = (0, a.Z)("localStorage"), c = "dimension_", d = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "scid"];
            try {
                let e = (0, o.n)("octolytics");
                delete e.baseContext, n = new i.R(e)
            } catch (e) {}

            function u(e) {
                let t = (0, o.n)("octolytics").baseContext || {};
                if (t)
                    for (let [e, r] of (delete t.app_id, delete t.event_url, delete t.host, Object.entries(t))) e.startsWith(c) && (t[e.replace(c, "")] = r, delete t[e]);
                let r = document.querySelector("meta[name=visitor-payload]");
                if (r) {
                    let e = JSON.parse(atob(r.content));
                    Object.assign(t, e)
                }
                let n = new URLSearchParams(window.location.search);
                for (let [e, r] of n) d.includes(e.toLowerCase()) && (t[e] = r);
                return t.staff = (0, s.B)().toString(), Object.assign(t, e)
            }

            function f(e) {
                n ? .sendPageView(u(e))
            }

            function p(e, t = {}) {
                let r = document.head ? .querySelector('meta[name="current-catalog-service"]') ? .content,
                    o = r ? {
                        service: r
                    } : {};
                for (let [e, r] of Object.entries(t)) null != r && (o[e] = `${r}`);
                if (n) {
                    let t = e || "unknown";
                    u(o), n.sendEvent(t, u(o))
                }
            }

            function h(e) {
                return Object.fromEntries(Object.entries(e).map(([e, t]) => [e, JSON.stringify(t)]))
            }
        },
        18699: (e, t, r) => {
            r.d(t, {
                r: () => s
            });
            var n = r(22490),
                o = r(7180);
            let i = "parse-html-no-op",
                a = n.ZO.createPolicy(i, {
                    createHTML: e => o.O.apply({
                        policy: () => e,
                        policyName: i,
                        fallback: e,
                        sanitize: !1,
                        fallbackOnError: !0
                    })
                });

            function s(e, t) {
                let r = e.createElement("template");
                return r.innerHTML = a.createHTML(t), e.importNode(r.content, !0)
            }
        },
        76951: (e, t, r) => {
            r.d(t, {
                $g: () => SoftNavSuccessEvent,
                OV: () => SoftNavStartEvent,
                QW: () => SoftNavErrorEvent,
                Xr: () => SoftNavEndEvent
            });
            var n = r(55908);
            let o = class SoftNavEvent extends Event {
                constructor(e, t) {
                    super(t), this.mechanism = e
                }
            };
            let SoftNavStartEvent = class SoftNavStartEvent extends o {
                constructor(e) {
                    super(e, n.Q.START)
                }
            };
            let SoftNavSuccessEvent = class SoftNavSuccessEvent extends o {
                constructor(e, t) {
                    super(e, n.Q.SUCCESS), this.visitCount = t
                }
            };
            let SoftNavErrorEvent = class SoftNavErrorEvent extends o {
                constructor(e, t) {
                    super(e, n.Q.ERROR), this.error = t
                }
            };
            let SoftNavEndEvent = class SoftNavEndEvent extends o {
                constructor(e) {
                    super(e, n.Q.END)
                }
            }
        },
        75214: (e, t, r) => {
            r.d(t, {
                BT: () => d,
                FP: () => f,
                LD: () => c,
                TL: () => p,
                Yl: () => l,
                r_: () => u,
                u5: () => h
            });
            var n = r(55908),
                o = r(76951),
                i = r(55009),
                a = r(99484);
            let s = 0;

            function l() {
                s = 0, document.dispatchEvent(new Event(n.Q.INITIAL)), (0, a.XL)()
            }

            function c(e) {
                (0, a.sj)() || (document.dispatchEvent(new Event(n.Q.PROGRESS_BAR.START)), document.dispatchEvent(new o.OV(e)), (0, a.U6)(e), (0, a.J$)(), (0, a.Nt)(), (0, i.hY)())
            }

            function d(e = {}) {
                g(e) && (s += 1, document.dispatchEvent(new o.$g((0, a.Gj)(), s)), f(e))
            }

            function u(e = {}) {
                if (!g(e)) return;
                s = 0;
                let t = (0, a.Wl)() || a.jN;
                document.dispatchEvent(new o.QW((0, a.Gj)(), t)), m(), (0, i.t3)(t), (0, a.XL)()
            }

            function f(e = {}) {
                g(e) && (m(), document.dispatchEvent(new o.Xr((0, a.Gj)())), (0, a.pS)())
            }

            function p(e = {}) {
                g(e) && ((0, i.mr)(), document.dispatchEvent(new Event(n.Q.RENDER)))
            }

            function h() {
                document.dispatchEvent(new Event(n.Q.FRAME_UPDATE))
            }

            function m() {
                document.dispatchEvent(new Event(n.Q.PROGRESS_BAR.END))
            }

            function g({
                skipIfGoingToReactApp: e,
                allowedMechanisms: t = []
            } = {}) {
                return (0, a.sj)() && (0 === t.length || t.includes((0, a.Gj)())) && (!e || !(0, a.Nb)())
            }
        },
        55908: (e, t, r) => {
            r.d(t, {
                Q: () => n
            });
            let n = Object.freeze({
                INITIAL: "soft-nav:initial",
                START: "soft-nav:start",
                SUCCESS: "soft-nav:success",
                ERROR: "soft-nav:error",
                FRAME_UPDATE: "soft-nav:frame-update",
                END: "soft-nav:end",
                RENDER: "soft-nav:render",
                PROGRESS_BAR: {
                    START: "soft-nav:progress-bar:start",
                    END: "soft-nav:progress-bar:end"
                }
            })
        },
        55009: (e, t, r) => {
            r.d(t, {
                CF: () => a,
                aq: () => i,
                hY: () => s,
                mr: () => c,
                t3: () => l
            });
            var n = r(71643),
                o = r(99484);
            let i = "stats:soft-nav-duration",
                a = {
                    turbo: "TURBO",
                    react: "REACT",
                    "turbo.frame": "FRAME",
                    ui: "UI",
                    hard: "HARD"
                };

            function s() {
                performance.clearResourceTimings(), performance.mark(i)
            }

            function l(e) {
                (0, n.b)({
                    turboFailureReason: e,
                    turboStartUrl: (0, o.wP)(),
                    turboEndUrl: window.location.href
                })
            }

            function c() {
                let e = function() {
                    if (0 === performance.getEntriesByName(i).length) return null;
                    performance.measure(i, i);
                    let e = performance.getEntriesByName(i),
                        t = e.pop();
                    return t ? t.duration : null
                }();
                if (!e) return;
                let t = a[(0, o.Gj)()],
                    r = Math.round(e);
                t === a.react && document.dispatchEvent(new CustomEvent("staffbar-update", {
                    detail: {
                        duration: r
                    }
                })), (0, n.b)({
                    requestUrl: window.location.href,
                    softNavigationTiming: {
                        mechanism: t,
                        destination: (0, o.Nb)() || "rails",
                        duration: r,
                        initiator: (0, o.CI)() || "rails"
                    }
                })
            }
        },
        75198: (e, t, r) => {
            r.d(t, {
                softNavigate: () => i
            });
            var n = r(75214),
                o = r(67852);

            function i(e, t) {
                (0, n.LD)("turbo"), (0, o.Vn)(e, { ...t
                })
            }
        },
        56959: (e, t, r) => {
            r.d(t, {
                RB: () => n,
                qC: () => o,
                w0: () => Subscription
            });
            let Subscription = class Subscription {
                constructor(e) {
                    this.closed = !1, this.unsubscribe = () => {
                        e(), this.closed = !0
                    }
                }
            };

            function n(e, t, r, n = {
                capture: !1
            }) {
                return e.addEventListener(t, r, n), new Subscription(() => {
                    e.removeEventListener(t, r, n)
                })
            }

            function o(...e) {
                return new Subscription(() => {
                    for (let t of e) t.unsubscribe()
                })
            }
        },
        7180: (e, t, r) => {
            r.d(t, {
                O: () => c,
                d: () => TrustedTypesPolicyError
            });
            var n = r(46426),
                o = r(71643),
                i = r(24601),
                a = r(27856),
                s = r.n(a),
                l = r(95253);
            let TrustedTypesPolicyError = class TrustedTypesPolicyError extends Error {};
            let c = {
                apply: function({
                    policy: e,
                    policyName: t,
                    fallback: r,
                    fallbackOnError: a = !1,
                    sanitize: c,
                    silenceErrorReporting: d = !1
                }) {
                    try {
                        if ((0, n.c)("BYPASS_TRUSTED_TYPES_POLICY_RULES")) return r;
                        (0, o.b)({
                            incrementKey: "TRUSTED_TYPES_POLICY_CALLED",
                            trustedTypesPolicyName: t
                        }, !1, .1);
                        let i = e();
                        return c && new Promise(e => {
                            let r = window.performance.now(),
                                n = s().sanitize(i, {
                                    FORBID_ATTR: []
                                }),
                                o = window.performance.now();
                            if (i.length !== n.length) {
                                let a = Error("Trusted Types policy output sanitized"),
                                    s = a.stack ? .slice(0, 1e3),
                                    c = i.slice(0, 250);
                                (0, l.qP)("trusted_types_policy.sanitize", {
                                    policyName: t,
                                    output: c,
                                    stack: s,
                                    outputLength: i.length,
                                    sanitizedLength: n.length,
                                    executionTime: o - r
                                }), e(i)
                            }
                        }), i
                    } catch (e) {
                        if (e instanceof TrustedTypesPolicyError || (d || (0, i.eK)(e), (0, o.b)({
                                incrementKey: "TRUSTED_TYPES_POLICY_ERROR",
                                trustedTypesPolicyName: t
                            }), !a)) throw e
                    }
                    return r
                }
            }
        },
        22490: (e, t, r) => {
            r.d(t, {
                ZO: () => c
            });
            var n = r(86283),
                o = r(71643);

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
                s = new Map,
                l = globalThis.trustedTypes ? ? {
                    createPolicy: (e, t) => ({
                        name: e,
                        ...a,
                        ...t
                    })
                },
                c = {
                    createPolicy: (e, t) => {
                        if (s.has(e)) return (0, o.b)({
                            incrementKey: "TRUSTED_TYPES_POLICY_INITIALIZED_TWICE"
                        }), s.get(e); {
                            let r = l.createPolicy(e, t);
                            return s.set(e, r), r
                        }
                    }
                },
                d = !1;
            n.n4 ? .addEventListener("securitypolicyviolation", e => {
                "require-trusted-types-for" !== e.violatedDirective || d || (console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`), d = !0)
            })
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, ["vendors-node_modules_dompurify_dist_purify_js", "vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183", "vendors-node_modules_github_selector-observer_dist_index_esm_js", "vendors-node_modules_morphdom_dist_morphdom-esm_js", "vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js", "vendors-node_modules_virtualized-list_es_index_js-node_modules_github_template-parts_lib_index_js", "vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_mini-throt-08ab15", "vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_github_mini-th-55cf52", "ui_packages_failbot_failbot_ts", "app_assets_modules_github_ref-selector_ts"], () => t(63746)), e.O()
    }
]);
//# sourceMappingURL=repositories-5a05f9a4c11a.js.map