"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    ["codespaces"], {
        59300: (e, t, o) => {
            o(27904);
            var r = o(76006),
                n = o(69567),
                s = o(54177),
                a = o(59753),
                i = o(18699);

            function l(e) {
                let t = e.querySelectorAll(".js-toggle-hidden");
                for (let e of t) e.hidden = !e.hidden;
                let o = e.querySelectorAll(".js-toggle-disabled");
                for (let e of o) e.getAttribute("aria-disabled") ? e.removeAttribute("aria-disabled") : e.setAttribute("aria-disabled", "true")
            }
            async function c() {
                let e = document.querySelector(".js-codespaces-details-container");
                e && (e.open = !1);
                let t = document.querySelector("new-codespace");
                if (t && !t.getAttribute("data-no-submit-on-create")) try {
                    let e = await fetch("/codespaces/new");
                    if (e && e.ok) {
                        let o = (0, i.r)(document, await e.text());
                        t.replaceWith(o)
                    }
                } catch (e) {}
            }
            async function d(e, t) {
                let o = document.querySelector(`#${e}`),
                    r = await (0, s.W)({
                        content: o.content.cloneNode(!0),
                        dialogClass: "project-dialog"
                    });
                return t && t.setAttribute("aria-expanded", "true"), r.addEventListener("dialog:remove", function() {
                    t && l(t)
                }, {
                    once: !0
                }), r
            }
            async function u(e) {
                let t = await fetch(e.action, {
                    method: e.method,
                    body: new FormData(e),
                    headers: {
                        Accept: "application/json",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                });
                if (t.ok) {
                    let o = await t.json();
                    if (o.codespace_url) window.location.href = o.codespace_url, l(e), c(), f();
                    else {
                        let t = e.closest("get-repo") || e.closest("new-codespace");
                        t ? (e.setAttribute("data-src", o.loading_url), e.dispatchEvent(new CustomEvent("pollvscode"))) : e.closest("create-button") && (e.setAttribute("data-src", o.loading_url), e.dispatchEvent(new CustomEvent("prpollvscode"))), l(e)
                    }
                } else if (422 === t.status) {
                    let o = await t.json();
                    if ("concurrency_limit_error" === o.error_type) await d("concurrency-error", e);
                    else {
                        let t = document.querySelector("template.js-flash-template"),
                            r = o.error;
                        t.after(new n.R(t, {
                            className: "flash-error",
                            message: r
                        })), l(e)
                    }
                }
            }
            async function f() {
                let e = document.querySelector(".js-codespaces-completable"),
                    t = e && e.getAttribute("data-src");
                if (!t) return;
                let o = await fetch(t, {
                    method: "GET",
                    headers: {
                        Accept: "text/fragment+html",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                });
                if (o.ok) {
                    let t = (0, i.r)(document, await o.text());
                    e.replaceWith(t)
                } else throw Error(`Unexpected response: ${o.statusText}`)
            }(0, a.on)("submit", ".js-toggle-hidden-codespace-form", function(e) {
                let t = e.currentTarget;
                l(t)
            }), (0, a.on)("submit", ".js-create-codespaces-form-command", function(e) {
                let t = e.currentTarget;
                t.classList.contains("js-open-in-vscode-form") || (c(), l(t))
            }), (0, a.on)("submit", "form.js-open-in-vscode-form", async function(e) {
                e.preventDefault();
                let t = e.currentTarget;
                await u(t)
            });
            let p = class ConcurrencyLimitElement extends HTMLElement {
                async connectedCallback() {
                    d("concurrency-error")
                }
            };
            p = function(e, t, o, r) {
                var n, s = arguments.length,
                    a = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, r);
                else
                    for (var i = e.length - 1; i >= 0; i--)(n = e[i]) && (a = (s < 3 ? n(a) : s > 3 ? n(t, o, a) : n(t, o)) || a);
                return s > 3 && a && Object.defineProperty(t, o, a), a
            }([r.Ih], p);
            var m = o(58700),
                h = o(14992);

            function y(e, t, o, r) {
                var n, s = arguments.length,
                    a = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, r);
                else
                    for (var i = e.length - 1; i >= 0; i--)(n = e[i]) && (a = (s < 3 ? n(a) : s > 3 ? n(t, o, a) : n(t, o)) || a);
                return s > 3 && a && Object.defineProperty(t, o, a), a
            }
            let b = class NewCodespaceElement extends HTMLElement {
                async connectedCallback() {
                    let e = new URL(document.location.href, window.location.origin),
                        t = new URLSearchParams(e.search);
                    t.has("response_error") && (t.delete("response_error"), window.history.replaceState({}, "", `?${t.toString()}`))
                }
                toggleLoadingVscode() {
                    let e = this.loadingVscode.hidden,
                        t = this.children;
                    for (let o = 0; o < t.length; o++) t[o].hidden = e;
                    this.loadingVscode.hidden = !e
                }
                machineTypeSelected(e) {
                    let t = e.currentTarget,
                        o = t.getAttribute("data-sku-name");
                    this.skuNameInput && o && (this.skuNameInput.value = o), this.advancedOptionsForm && (0, m.Bt)(this.advancedOptionsForm)
                }
                pollForVscode(e) {
                    this.toggleLoadingVscode();
                    let t = e.currentTarget.getAttribute("data-src");
                    t && this.vscodePoller.setAttribute("src", t)
                }
                vscsTargetUrlUpdated(e) {
                    let t = e.currentTarget;
                    this.vscsTargetUrl.value = t.value
                }
                async declarativeSecretsHashUpdated(e) {
                    let t = e.currentTarget,
                        o = t.getAttribute("data-name");
                    if (!o) return;
                    let r = t.value,
                        n = (0, h.Jx)(t.getAttribute("data-public-key"));
                    "checkbox" !== t.getAttribute("type") || t.checked || (r = ""), r ? this.secrets_hash.set(o, (0, h.cv)(await (0, h.HI)(n, r))) : this.secrets_hash.delete(o), this.declarativeSecretsHash.value = JSON.stringify(Object.fromEntries(this.secrets_hash))
                }
                constructor(...e) {
                    super(...e), this.secrets_hash = new Map
                }
            };

            function g(e, t, o, r) {
                var n, s = arguments.length,
                    a = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, r);
                else
                    for (var i = e.length - 1; i >= 0; i--)(n = e[i]) && (a = (s < 3 ? n(a) : s > 3 ? n(t, o, a) : n(t, o)) || a);
                return s > 3 && a && Object.defineProperty(t, o, a), a
            }
            y([r.fA], b.prototype, "declarativeSecretsHash", void 0), y([r.fA], b.prototype, "vscsTargetUrl", void 0), y([r.fA], b.prototype, "loadingVscode", void 0), y([r.fA], b.prototype, "vscodePoller", void 0), y([r.fA], b.prototype, "advancedOptionsForm", void 0), y([r.fA], b.prototype, "skuNameInput", void 0), b = y([r.Ih], b);
            let v = class ExportBranchElement extends HTMLElement {
                connectedCallback() {
                    this.abortPoll = new AbortController, this.loadingIndicator.hidden || this.startPoll()
                }
                disconnectedCallback() {
                    this.abortPoll ? .abort()
                }
                applyPublishParams() {
                    let e = this.form.getAttribute("data-codespace-id"),
                        t = document.querySelector(`[data-codespace-id='${e}'][data-class="publish-codespace-form"]`);
                    if (t) {
                        let e = Object.fromEntries(new FormData(t).entries());
                        if (this.form) {
                            let t = `?name=${e.name}&visibility=${e.visibility}`,
                                o = (this.form.getAttribute("action") || "").split("?")[0] + t;
                            this.form.setAttribute("action", o)
                        }
                    }
                }
                async exportBranch(e) {
                    e.preventDefault(), this.form.hidden = !0, this.loadingIndicator.hidden = !1;
                    let t = await fetch(this.form.action, {
                        method: this.form.method,
                        body: new FormData(this.form),
                        headers: {
                            Accept: "text/fragment+html",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    });
                    t.ok ? this.startPoll() : (this.form.hidden = !1, this.loadingIndicator.hidden = !0)
                }
                async startPoll() {
                    let e = this.getAttribute("data-exported-codespace-url") || "",
                        t = await this.poll(e);
                    if (t) {
                        if (t.ok) this.loadingIndicator.hidden = !0, this.viewBranchLink.hidden = !1;
                        else {
                            let e = this.getAttribute("data-export-error-redirect-url") || "";
                            window.location.href = encodeURI(e)
                        }
                    }
                }
                async poll(e, t = 1e3) {
                    if (this.abortPoll ? .signal.aborted) return;
                    let o = await fetch(e, {
                        signal: this.abortPoll ? .signal
                    });
                    return 202 === o.status || 404 === o.status ? (await new Promise(e => setTimeout(e, t)), this.poll(e, 1.5 * t)) : o
                }
                constructor(...e) {
                    super(...e), this.abortPoll = null
                }
            };

            function w(e, t, o, r) {
                var n, s = arguments.length,
                    a = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, r);
                else
                    for (var i = e.length - 1; i >= 0; i--)(n = e[i]) && (a = (s < 3 ? n(a) : s > 3 ? n(t, o, a) : n(t, o)) || a);
                return s > 3 && a && Object.defineProperty(t, o, a), a
            }
            g([r.fA], v.prototype, "form", void 0), g([r.fA], v.prototype, "loadingIndicator", void 0), g([r.fA], v.prototype, "viewBranchLink", void 0), v = g([r.Ih], v), o(55843), o(82368);
            let _ = class CodespaceZeroConfigElement extends HTMLElement {
                connectedCallback() {
                    this.toggleLocationConfigs("production")
                }
                updateVscsTargets() {
                    for (let e of (this.vscsTargetUrl.disabled = "local" !== this.vscsTarget.value, this.toggleLocationConfigs(this.vscsTarget.value), this.vscsTargets)) e.value = this.vscsTarget.value
                }
                updateVscsTargetUrls() {
                    for (let e of this.vscsTargetUrls) e.value = this.vscsTargetUrl.value
                }
                updateLocations(e) {
                    let t = e.currentTarget;
                    this.setLocationValues(t.value)
                }
                setLocationValues(e) {
                    for (let t of this.locations) t.value = e
                }
                toggleLocationConfigs(e) {
                    for (let t of this.locationConfigs)
                        if (t.getAttribute("data-vscs-target") === e) {
                            t.hidden = !1;
                            let e = t.querySelector("option");
                            e && (e.selected = !0, this.setLocationValues(e.value))
                        } else t.hidden = !0
                }
            };
            w([r.fA], _.prototype, "regionConfig", void 0), w([r.fA], _.prototype, "vscsTarget", void 0), w([r.fA], _.prototype, "vscsTargetUrl", void 0), w([r.GO], _.prototype, "locationConfigs", void 0), w([r.GO], _.prototype, "vscsTargets", void 0), w([r.GO], _.prototype, "vscsTargetUrls", void 0), w([r.GO], _.prototype, "locations", void 0), _ = w([r.Ih], _)
        },
        14992: (e, t, o) => {
            o.d(t, {
                HI: () => s,
                Jx: () => a,
                cv: () => i
            });
            var r = o(69567),
                n = o(59753);
            async function s(e, t) {
                let r = new TextEncoder,
                    n = r.encode(t),
                    {
                        seal: s
                    } = await Promise.all([o.e("vendors-node_modules_blakejs_index_js-node_modules_tweetnacl_nacl-fast_js"), o.e("_empty-file_js-app_assets_modules_github_tweetsodium_ts")]).then(o.bind(o, 20179));
                return s(n, e)
            }

            function a(e) {
                let t = atob(e).split("").map(e => e.charCodeAt(0));
                return Uint8Array.from(t)
            }

            function i(e) {
                let t = "";
                for (let o of e) t += String.fromCharCode(o);
                return btoa(t)
            }

            function l(e) {
                return async function(t) {
                    let o = t.currentTarget;
                    if (t.defaultPrevented || !o.checkValidity()) return;
                    let n = a(o.getAttribute("data-public-key"));
                    for (let a of (t.preventDefault(), o.elements))
                        if (a.id.endsWith("secret")) {
                            if (a.disabled = !0, a.required && !a.value) {
                                let e = `${a.name} is invalid!`,
                                    t = document.querySelector("template.js-flash-template");
                                t.after(new r.R(t, {
                                    className: "flash-error",
                                    message: e
                                }));
                                return
                            }
                            let t = `${a.name}_encrypted_value`;
                            if (!a.value) {
                                o.elements.namedItem(t).disabled = e;
                                continue
                            }
                            o.elements.namedItem(t).value = i(await s(n, a.value))
                        }
                    o.submit()
                }
            }(0, n.on)("submit", "form.js-encrypt-submit", async function(e) {
                let t = e.currentTarget;
                if (e.defaultPrevented || !t.checkValidity()) return;
                let o = t.elements.namedItem("secret_value");
                if (o.disabled = !0, !o.value) return;
                e.preventDefault();
                let r = a(t.getAttribute("data-public-key"));
                t.elements.namedItem("encrypted_value").value = i(await s(r, o.value)), t.submit()
            }), (0, n.on)("submit", "form.js-encrypt-bulk-submit", l(!0)), (0, n.on)("submit", "form.js-encrypt-bulk-submit-enable-empty", l(!1))
        },
        27904: (e, t, o) => {
            o.d(t, {
                a: () => i
            });
            var r = o(36071),
                n = o(59753),
                s = o(65935),
                a = o(58700);

            function i(e, t) {
                let o;
                let r = t.querySelector("*"),
                    n = e.ownerDocument.activeElement;
                n instanceof HTMLElement && (o = r ? .querySelector(function(e) {
                    let t = e.tagName.toLowerCase(),
                        o = e.hasAttribute("class") ? `.${e.className.split(" ").join(".")}` : "",
                        r = e.hasAttribute("id") ? `#${e.id}` : "",
                        n = e.hasAttribute("name") ? `[name="${e.getAttribute("name")}"]` : "";
                    return `${t}${r}${o}${n}`
                }(n))), e.replaceWith(t), o instanceof HTMLElement && o.focus()
            }

            function l() {
                let e = new URL(document.location.href, window.location.origin),
                    t = new URLSearchParams(e.search);
                t.set("response_error", "true"), window.location.replace(`${window.location.pathname}?${t.toString()}`)
            }(0, n.on)("remote-input-error", "#js-codespaces-repository-select", () => {
                let e = document.querySelector("#js-codespaces-unable-load-repositories-warning");
                e.hidden = !1
            }), (0, s.AC)(".js-new-codespace-form", async function(e, t) {
                let o = e.closest("[data-replace-remote-form-target]"),
                    r = o.querySelector(".js-new-codespace-submit-button");
                r instanceof HTMLInputElement && (r.disabled = !0), e.classList.remove("is-error"), e.classList.add("is-loading");
                try {
                    r && r.setAttribute("disabled", "true");
                    let e = await t.html();
                    if (200 !== e.status && l(), i(o, e.html), "true" === o.getAttribute("data-allow-update-url")) {
                        let e = new FormData(document.querySelector("form.js-new-codespace-form"));
                        ! function(e) {
                            let t = new URL(document.location.href, window.location.origin),
                                o = new URLSearchParams(t.search),
                                r = ["vscs_target"];
                            for (let [t, n] of e.entries()) {
                                if (r.includes(t) || !n) {
                                    o.delete(t);
                                    continue
                                }
                                o.set(t, n)
                            }
                            window.history.replaceState({}, "", `?${o.toString()}`)
                        }(e)
                    }
                } catch (e) {
                    throw l(), e
                }
            });
            let c = null;

            function d(e) {
                if (c = e, null !== e) {
                    let e = document.querySelector(".js-codespace-loading-steps");
                    e.setAttribute("data-current-state", c)
                }
            }(0, r.N7)(".js-codespace-loading-steps", {
                constructor: HTMLElement,
                add: e => {
                    let t = e.getAttribute("data-current-state");
                    t && d(t)
                }
            }), (0, r.N7)(".js-codespace-advance-state", {
                constructor: HTMLElement,
                add: e => {
                    let t = e.getAttribute("data-state");
                    t && d(t)
                }
            });
            let u = null;

            function f(e) {
                let t = document.querySelector(".js-workbench-form-container form");
                t && e ? (function(e, t) {
                    let o = e.querySelector(".js-cascade-token");
                    o && o.setAttribute("value", t)
                }(t, e), function(e, t) {
                    let o = e.querySelector(".js-partner-info");
                    if (o) {
                        let e = o.getAttribute("value");
                        e && (e = e.replace("%CASCADE_TOKEN_PLACEHOLDER%", t), o.setAttribute("value", e))
                    }
                }(t, e), (0, a.Bt)(t)) : d("failed")
            }(0, r.N7)(".js-auto-submit-form", {
                constructor: HTMLFormElement,
                initialize: a.Bt
            }), (0, r.N7)(".js-workbench-form-container", {
                constructor: HTMLElement,
                add: e => {
                    let t = e.querySelector(".js-cascade-token");
                    (function(e, t) {
                        if ("" !== t.value) {
                            let t = e.querySelector("form");
                            (0, a.Bt)(t)
                        } else {
                            let e = document.querySelector(".js-fetch-cascade-token");
                            (0, s.AC)(".js-fetch-cascade-token", async function(e, t) {
                                try {
                                    let e = await t.json(),
                                        o = e.json;
                                    u = o.token
                                } catch (e) {}
                            }), (0, a.Bt)(e),
                            function(e, t, o) {
                                let r = document.querySelector(e);
                                if (r) {
                                    let e = Date.now(),
                                        o = setInterval(() => {
                                            let r = Date.now() - e;
                                            if (u || r >= 1e4) {
                                                clearInterval(o), t(u || void 0);
                                                return
                                            }
                                        }, 50)
                                }
                            }(".js-workbench-form-container", f, 0)
                        }
                    })(e, t)
                }
            })
        },
        55843: (e, t, o) => {
            var r = o(76006);

            function n(e, t, o, r) {
                var n, s = arguments.length,
                    a = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, r);
                else
                    for (var i = e.length - 1; i >= 0; i--)(n = e[i]) && (a = (s < 3 ? n(a) : s > 3 ? n(t, o, a) : n(t, o)) || a);
                return s > 3 && a && Object.defineProperty(t, o, a), a
            }
            let s = class InputDemuxElement extends HTMLElement {
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
                        o = t.value;
                    this.routeCustomEvent(new CustomEvent("input-entered", {
                        detail: o
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
            n([r.fA], s.prototype, "source", void 0), n([r.GO], s.prototype, "sinks", void 0), n([r.fA], s.prototype, "control", void 0), s = n([r.Ih], s)
        },
        54177: (e, t, o) => {
            o.d(t, {
                W: () => n
            });
            var r = o(59753);
            async function n(e) {
                let t = document.querySelector("#site-details-dialog"),
                    o = t.content.cloneNode(!0),
                    n = o.querySelector("details"),
                    s = n.querySelector("details-dialog"),
                    a = n.querySelector(".js-details-dialog-spinner");
                e.detailsClass && n.classList.add(...e.detailsClass.split(" ")), e.dialogClass && s.classList.add(...e.dialogClass.split(" ")), e.label ? s.setAttribute("aria-label", e.label) : e.labelledBy && s.setAttribute("aria-labelledby", e.labelledBy), document.body.append(o);
                try {
                    let t = await e.content;
                    a.remove(), s.prepend(t)
                } catch (o) {
                    a.remove();
                    let t = document.createElement("span");
                    t.textContent = e.errorMessage || "Couldn't load the content", t.classList.add("my-6"), t.classList.add("mx-4"), s.prepend(t)
                }
                return n.addEventListener("toggle", () => {
                    n.hasAttribute("open") || ((0, r.f)(s, "dialog:remove"), n.remove())
                }), s
            }
        },
        58700: (e, t, o) => {
            o.d(t, {
                Bt: () => s,
                DN: () => i,
                KL: () => d,
                Se: () => a,
                qC: () => u,
                sw: () => l
            });
            var r = o(5582);

            function n(e, t, o) {
                return e.dispatchEvent(new CustomEvent(t, {
                    bubbles: !0,
                    cancelable: o
                }))
            }

            function s(e, t) {
                t && (function(e, t) {
                    if (!(e instanceof HTMLFormElement)) throw TypeError("The specified element is not of type HTMLFormElement.");
                    if (!(t instanceof HTMLElement)) throw TypeError("The specified element is not of type HTMLElement.");
                    if ("submit" !== t.type) throw TypeError("The specified element is not a submit button.");
                    if (!e || e !== t.form) throw Error("The specified element is not owned by the form element.")
                }(e, t), (0, r.j)(t)), n(e, "submit", !0) && e.submit()
            }

            function a(e, t) {
                if ("boolean" == typeof t) {
                    if (e instanceof HTMLInputElement) e.checked = t;
                    else throw TypeError("only checkboxes can be set to boolean value")
                } else {
                    if ("checkbox" === e.type) throw TypeError("checkbox can't be set to string value");
                    e.value = t
                }
                n(e, "change", !1)
            }

            function i(e, t) {
                for (let o in t) {
                    let r = t[o],
                        n = e.elements.namedItem(o);
                    n instanceof HTMLInputElement ? n.value = r : n instanceof HTMLTextAreaElement && (n.value = r)
                }
            }

            function l(e) {
                if (!(e instanceof HTMLElement)) return !1;
                let t = e.nodeName.toLowerCase(),
                    o = (e.getAttribute("type") || "").toLowerCase();
                return "select" === t || "textarea" === t || "input" === t && "submit" !== o && "reset" !== o || e.isContentEditable
            }

            function c(e) {
                return new URLSearchParams(e)
            }

            function d(e, t) {
                let o = new URLSearchParams(e.search),
                    r = c(t);
                for (let [e, t] of r) o.append(e, t);
                return o.toString()
            }

            function u(e) {
                return c(new FormData(e)).toString()
            }
        },
        5582: (e, t, o) => {
            function r(e) {
                let t = e.closest("form");
                if (!(t instanceof HTMLFormElement)) return;
                let o = n(t);
                if (e.name) {
                    let r = e.matches("input[type=submit]") ? "Submit" : "",
                        n = e.value || r;
                    o || ((o = document.createElement("input")).type = "hidden", o.classList.add("js-submit-button-value"), t.prepend(o)), o.name = e.name, o.value = n
                } else o && o.remove()
            }

            function n(e) {
                let t = e.querySelector("input.js-submit-button-value");
                return t instanceof HTMLInputElement ? t : null
            }
            o.d(t, {
                j: () => r,
                u: () => n
            })
        },
        95253: (e, t, o) => {
            let r;
            o.d(t, {
                YT: () => f,
                qP: () => p,
                yM: () => m
            });
            var n = o(88149),
                s = o(86058),
                a = o(44544),
                i = o(71643);
            let {
                getItem: l
            } = (0, a.Z)("localStorage"), c = "dimension_", d = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "scid"];
            try {
                let e = (0, n.n)("octolytics");
                delete e.baseContext, r = new s.R(e)
            } catch (e) {}

            function u(e) {
                let t = (0, n.n)("octolytics").baseContext || {};
                if (t)
                    for (let [e, o] of (delete t.app_id, delete t.event_url, delete t.host, Object.entries(t))) e.startsWith(c) && (t[e.replace(c, "")] = o, delete t[e]);
                let o = document.querySelector("meta[name=visitor-payload]");
                if (o) {
                    let e = JSON.parse(atob(o.content));
                    Object.assign(t, e)
                }
                let r = new URLSearchParams(window.location.search);
                for (let [e, o] of r) d.includes(e.toLowerCase()) && (t[e] = o);
                return t.staff = (0, i.B)().toString(), Object.assign(t, e)
            }

            function f(e) {
                r ? .sendPageView(u(e))
            }

            function p(e, t = {}) {
                let o = document.head ? .querySelector('meta[name="current-catalog-service"]') ? .content,
                    n = o ? {
                        service: o
                    } : {};
                for (let [e, o] of Object.entries(t)) null != o && (n[e] = `${o}`);
                if (r) {
                    let t = e || "unknown";
                    u(n), r.sendEvent(t, u(n))
                }
            }

            function m(e) {
                return Object.fromEntries(Object.entries(e).map(([e, t]) => [e, JSON.stringify(t)]))
            }
        },
        18699: (e, t, o) => {
            o.d(t, {
                r: () => i
            });
            var r = o(22490),
                n = o(7180);
            let s = "parse-html-no-op",
                a = r.ZO.createPolicy(s, {
                    createHTML: e => n.O.apply({
                        policy: () => e,
                        policyName: s,
                        fallback: e,
                        sanitize: !1,
                        fallbackOnError: !0
                    })
                });

            function i(e, t) {
                let o = e.createElement("template");
                return o.innerHTML = a.createHTML(t), e.importNode(o.content, !0)
            }
        },
        7180: (e, t, o) => {
            o.d(t, {
                O: () => c,
                d: () => TrustedTypesPolicyError
            });
            var r = o(46426),
                n = o(71643),
                s = o(24601),
                a = o(27856),
                i = o.n(a),
                l = o(95253);
            let TrustedTypesPolicyError = class TrustedTypesPolicyError extends Error {};
            let c = {
                apply: function({
                    policy: e,
                    policyName: t,
                    fallback: o,
                    fallbackOnError: a = !1,
                    sanitize: c,
                    silenceErrorReporting: d = !1
                }) {
                    try {
                        if ((0, r.c)("BYPASS_TRUSTED_TYPES_POLICY_RULES")) return o;
                        (0, n.b)({
                            incrementKey: "TRUSTED_TYPES_POLICY_CALLED",
                            trustedTypesPolicyName: t
                        }, !1, .1);
                        let s = e();
                        return c && new Promise(e => {
                            let o = window.performance.now(),
                                r = i().sanitize(s, {
                                    FORBID_ATTR: []
                                }),
                                n = window.performance.now();
                            if (s.length !== r.length) {
                                let a = Error("Trusted Types policy output sanitized"),
                                    i = a.stack ? .slice(0, 1e3),
                                    c = s.slice(0, 250);
                                (0, l.qP)("trusted_types_policy.sanitize", {
                                    policyName: t,
                                    output: c,
                                    stack: i,
                                    outputLength: s.length,
                                    sanitizedLength: r.length,
                                    executionTime: n - o
                                }), e(s)
                            }
                        }), s
                    } catch (e) {
                        if (e instanceof TrustedTypesPolicyError || (d || (0, s.eK)(e), (0, n.b)({
                                incrementKey: "TRUSTED_TYPES_POLICY_ERROR",
                                trustedTypesPolicyName: t
                            }), !a)) throw e
                    }
                    return o
                }
            }
        },
        22490: (e, t, o) => {
            o.d(t, {
                ZO: () => c
            });
            var r = o(86283),
                n = o(71643);

            function s(e) {
                return () => {
                    throw TypeError(`The policy does not implement the function ${e}`)
                }
            }
            let a = {
                    createHTML: s("createHTML"),
                    createScript: s("createScript"),
                    createScriptURL: s("createScriptURL")
                },
                i = new Map,
                l = globalThis.trustedTypes ? ? {
                    createPolicy: (e, t) => ({
                        name: e,
                        ...a,
                        ...t
                    })
                },
                c = {
                    createPolicy: (e, t) => {
                        if (i.has(e)) return (0, n.b)({
                            incrementKey: "TRUSTED_TYPES_POLICY_INITIALIZED_TWICE"
                        }), i.get(e); {
                            let o = l.createPolicy(e, t);
                            return i.set(e, o), o
                        }
                    }
                },
                d = !1;
            r.n4 ? .addEventListener("securitypolicyviolation", e => {
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
        e.O(0, ["vendors-node_modules_dompurify_dist_purify_js", "vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183", "vendors-node_modules_github_selector-observer_dist_index_esm_js", "vendors-node_modules_morphdom_dist_morphdom-esm_js", "vendors-node_modules_virtualized-list_es_index_js-node_modules_github_template-parts_lib_index_js", "vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-c537341", "ui_packages_failbot_failbot_ts", "app_assets_modules_github_ref-selector_ts"], () => t(59300)), e.O()
    }
]);
//# sourceMappingURL=codespaces-778c2e5a1c3e.js.map