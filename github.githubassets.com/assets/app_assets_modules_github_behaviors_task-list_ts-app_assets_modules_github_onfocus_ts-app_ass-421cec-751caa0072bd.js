"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    ["app_assets_modules_github_behaviors_task-list_ts-app_assets_modules_github_onfocus_ts-app_ass-421cec"], {
        48804: (e, t, n) => {
            n.d(t, {
                L$: () => u,
                SE: () => A,
                nj: () => d
            });
            var s, r = n(56959),
                l = n(59753),
                o = n(40987),
                i = n(36071),
                a = n(65935),
                c = n(58700);

            function u(e) {
                if (e.querySelector(".js-task-list-field")) {
                    let t = e.querySelectorAll("task-lists");
                    for (let e of t)
                        if (e instanceof o.Z) {
                            e.disabled = !1;
                            let t = e.querySelectorAll("button");
                            for (let e of t) e.disabled = !1
                        }
                }
            }

            function d(e) {
                for (let t of e.querySelectorAll("task-lists"))
                    if (t instanceof o.Z) {
                        t.disabled = !0;
                        let e = t.querySelectorAll("button");
                        for (let t of e) t.disabled = !0
                    }
            }

            function f(e, t, n) {
                let s = e.querySelector(".js-comment-update");
                d(e), L(e);
                let r = s.elements.namedItem("task_list_track");
                r instanceof Element && r.remove();
                let l = s.elements.namedItem("task_list_operation");
                l instanceof Element && l.remove();
                let o = document.createElement("input");
                o.setAttribute("type", "hidden"), o.setAttribute("name", "task_list_track"), o.setAttribute("value", t), s.appendChild(o);
                let i = document.createElement("input");
                if (i.setAttribute("type", "hidden"), i.setAttribute("name", "task_list_operation"), i.setAttribute("value", JSON.stringify(n)), s.appendChild(i), !s.elements.namedItem("task_list_key")) {
                    let e = s.querySelector(".js-task-list-field"),
                        t = e.getAttribute("name"),
                        n = t.split("[")[0],
                        r = document.createElement("input");
                    r.setAttribute("type", "hidden"), r.setAttribute("name", "task_list_key"), r.setAttribute("value", n), s.appendChild(r)
                }
                e.classList.remove("is-comment-stale"), (0, c.Bt)(s)
            }(0, i.N7)(".js-task-list-container .js-task-list-field", function(e) {
                let t = e.closest(".js-task-list-container");
                u(t), L(t)
            }), (0, i.N7)(".js-convert-tasklist-to-block-enabled .contains-task-list", function(e) {
                let t = T(e);
                if (!t) return;
                let n = Array.from(t.children).some(e => e.classList.contains("task-list-item-convert-container"));
                if (n) return;
                let s = e.ownerDocument.querySelector(".js-convert-to-block-template"),
                    r = s ? .content.cloneNode(!0);
                r && t.appendChild(r)
            }), (0, l.on)("task-lists-move", "task-lists", function(e) {
                let {
                    src: t,
                    dst: n
                } = e.detail, s = e.currentTarget.closest(".js-task-list-container");
                f(s, "reordered", {
                    operation: "move",
                    src: t,
                    dst: n
                })
            }), (0, l.on)("task-lists-check", "task-lists", function(e) {
                let {
                    position: t,
                    checked: n
                } = e.detail, s = e.currentTarget.closest(".js-task-list-container");
                f(s, `checked:${n?1:0}`, {
                    operation: "check",
                    position: t,
                    checked: n
                })
            }), (0, l.on)("click", ".js-convert-to-block-button", function(e) {
                let t = T(e.target);
                if (!t) return;
                let n = t.closest("task-lists");
                if (!n) throw Error("parent not found");
                let s = A(t),
                    r = e.currentTarget.closest(".js-task-list-container");
                f(r, "converted", {
                    operation: "convert_to_block",
                    position: s
                })
            }), (0, a.AC)(".js-task-list-container .js-comment-update", async function(e, t) {
                let n;
                let s = e.closest(".js-task-list-container"),
                    r = e.elements.namedItem("task_list_track");
                r instanceof Element && r.remove();
                let l = e.elements.namedItem("task_list_operation");
                l instanceof Element && l.remove();
                try {
                    n = await t.json()
                } catch (t) {
                    let e;
                    try {
                        e = JSON.parse(t.response.text)
                    } catch (e) {}
                    if (e && e.stale) {
                        let e = s.querySelector(".js-task-list-field");
                        e.classList.add("session-resumable-canceled"), e.classList.remove("js-session-resumable")
                    } else 422 === t.response.status || window.location.reload()
                }
                n && (l && n.json.source && (s.querySelector(".js-task-list-field").value = n.json.source), u(s), requestAnimationFrame(() => L(s)))
            });
            let m = !1,
                p = !1,
                h = null;

            function b(e) {
                let t = "insertLineBreak" === e.inputType;
                m = !!t
            }

            function g(e) {
                if (!m) {
                    let t = "insertLineBreak" === e.inputType;
                    if (!t) return
                }
                let t = e.target;
                (function(e) {
                    let t = function(e, t) {
                        let n = t[0];
                        if (!n || !e) return;
                        let s = e.substring(0, n).split("\n"),
                            r = s[s.length - 2],
                            l = r ? .match(x);
                        if (!l) return;
                        let o = l[0],
                            i = l[1],
                            a = l[2],
                            c = parseInt(l[3], 10),
                            u = !!l[4],
                            d = !isNaN(c),
                            f = d ? `${c+1}.` : a,
                            m = `${f} ${u?"[ ] ":""}`,
                            p = e.indexOf("\n", n);
                        p < 0 && (p = e.length);
                        let h = e.substring(n, p);
                        h.startsWith(m) && (m = "");
                        let b = r.replace(o, "").trim().length > 0 || h.trim().length > 0;
                        if (b) {
                            let t = `${i}${m}`,
                                s = e.substring(n),
                                r = t.length,
                                l = [null, null],
                                o = e.substring(0, n) + t + s;
                            if (d && !e.substring(n).match(/^\s*$/g)) {
                                var g, y;
                                g = e.substring(n), y = c + 1, t += s = g.split("\n").map(e => {
                                    if (e.replace(/^\s+/, "").startsWith(`${y}.`)) {
                                        let t = e.replace(`${y}`, `${y+1}`);
                                        return y += 1, t
                                    }
                                    return e
                                }).join("\n"), l = [n, n + t.length], o = e.substring(0, n) + t
                            }
                            return {
                                text: o,
                                autocompletePrefix: t,
                                selection: [n + r, n + r],
                                commandId: "insertText",
                                writeSelection: l
                            }
                        } {
                            let t = n - `
${o}`.length;
                            return {
                                autocompletePrefix: "",
                                text: e.substring(0, t) + e.substring(n),
                                selection: [t, t],
                                commandId: "delete",
                                writeSelection: [null, null]
                            }
                        }
                    }(e.value, [e.selectionStart, e.selectionEnd]);
                    void 0 !== t && y(e, t)
                })(t), m = !1
            }

            function y(e, t) {
                if (null === h || !0 === h) {
                    e.contentEditable = "true";
                    try {
                        let n;
                        m = !1, "insertText" === t.commandId ? (n = t.autocompletePrefix, null !== t.writeSelection[0] && null !== t.writeSelection[1] && (e.selectionStart = t.writeSelection[0], e.selectionEnd = t.writeSelection[1])) : e.selectionStart = t.selection[0], h = document.execCommand(t.commandId, !1, n)
                    } catch (e) {
                        h = !1
                    }
                    e.contentEditable = "false"
                }
                if (!h) {
                    try {
                        document.execCommand("ms-beginUndoUnit")
                    } catch (e) {}
                    e.value = t.text;
                    try {
                        document.execCommand("ms-endUndoUnit")
                    } catch (e) {}
                    e.dispatchEvent(new CustomEvent("input", {
                        bubbles: !0,
                        cancelable: !0
                    }))
                }
                null != t.selection[0] && null != t.selection[1] && (e.selectionStart = t.selection[0], e.selectionEnd = t.selection[1])
            }

            function w(e) {
                if (!p && "Enter" === e.key && e.shiftKey && !e.metaKey) {
                    let t = e.target,
                        n = function(e, t) {
                            let n = t[0];
                            if (!n || !e) return;
                            let s = e.substring(0, n).split("\n"),
                                r = s[s.length - 1],
                                l = r ? .match(S);
                            if (!l) return;
                            let o = l[1] || "",
                                i = `
${o}`;
                            return {
                                text: e.substring(0, n) + i + e.substring(n),
                                autocompletePrefix: i,
                                selection: [n + i.length, n + i.length],
                                commandId: "insertText",
                                writeSelection: [null, null]
                            }
                        }(t.value, [t.selectionStart, t.selectionEnd]);
                    void 0 !== n && (y(t, n), e.preventDefault(), (0, l.f)(t, "change"))
                }
            }

            function k() {
                p = !0
            }

            function v() {
                p = !1
            }

            function E(e) {
                if (p) return;
                if ("Escape" === e.key) {
                    ! function(e) {
                        let t = e.target;
                        "backward" === t.selectionDirection ? t.selectionEnd = t.selectionStart : t.selectionStart = t.selectionEnd
                    }(e);
                    return
                }
                if ("Tab" !== e.key) return;
                let t = e.target,
                    n = function(e, t, n) {
                        let s = t[0] || 0,
                            r = t[1] || s;
                        if (null === t[0] || s === r) return;
                        let l = e.substring(0, s).lastIndexOf("\n") + 1,
                            o = e.indexOf("\n", r - 1),
                            i = o > 0 ? o : e.length - 1,
                            a = e.substring(l, i).split("\n"),
                            c = !1,
                            u = 0,
                            d = 0,
                            f = [];
                        for (let e of a) {
                            let t = e.match(/^\s*/);
                            if (t) {
                                let s = t[0],
                                    r = e.substring(s.length);
                                if (n) {
                                    let e = s.length;
                                    s = s.slice(0, -2), u = c ? u : s.length - e, c = !0, d += s.length - e
                                } else s += "  ", u = 2, d += 2;
                                f.push(s + r)
                            }
                        }
                        let m = f.join("\n"),
                            p = e.substring(0, l) + m + e.substring(i),
                            h = [Math.max(l, s + u), r + d];
                        return {
                            text: p,
                            selection: h,
                            autocompletePrefix: m,
                            commandId: "insertText",
                            writeSelection: [l, i]
                        }
                    }(t.value, [t.selectionStart, t.selectionEnd], e.shiftKey);
                void 0 !== n && (e.preventDefault(), y(t, n))
            }(0, i.N7)(".js-task-list-field", {
                subscribe: e => (0, r.qC)((0, r.RB)(e, "keydown", E), (0, r.RB)(e, "keydown", w), (0, r.RB)(e, "beforeinput", b), (0, r.RB)(e, "input", g), (0, r.RB)(e, "compositionstart", k), (0, r.RB)(e, "compositionend", v))
            }),
            function(e) {
                e.insertText = "insertText", e.delete = "delete"
            }(s || (s = {}));
            let S = /^(\s*)?/,
                x = /^(\s*)([*-]|(\d+)\.)\s(\[[\sx]\]\s)?/;

            function A(e) {
                let t = e.closest("task-lists");
                if (!t) throw Error("parent not found");
                let n = Array.from(t.querySelectorAll("ol, ul")).filter(e => !e.closest("tracking-block"));
                return n.indexOf(e)
            }

            function L(e) {
                if (0 === document.querySelectorAll("tracked-issues-progress").length) return;
                let t = e.closest(".js-timeline-item");
                if (t) return;
                let n = e.querySelectorAll(".js-comment-body [type=checkbox]"),
                    s = n.length,
                    r = Array.from(n).filter(e => e.checked).length,
                    l = document.querySelectorAll("tracked-issues-progress[data-type=checklist]");
                for (let e of l) e.setAttribute("data-completed", String(r)), e.setAttribute("data-total", String(s))
            }

            function T(e) {
                let t = e.closest(".contains-task-list"),
                    n = t;
                for (;
                    (n = n.parentElement.closest(".contains-task-list")) !== t && null !== n;) t = n;
                return t
            }
        },
        254: (e, t, n) => {
            n.d(t, {
                ZG: () => i,
                q6: () => c,
                w4: () => a
            });
            var s = n(8439);
            let r = !1,
                l = new s.Z;

            function o(e) {
                let t = e.target;
                if (t instanceof HTMLElement && t.nodeType !== Node.DOCUMENT_NODE)
                    for (let e of l.matches(t)) e.data.call(null, t)
            }

            function i(e, t) {
                r || (r = !0, document.addEventListener("focus", o, !0)), l.add(e, t), document.activeElement instanceof HTMLElement && document.activeElement.matches(e) && t(document.activeElement)
            }

            function a(e, t, n) {
                function s(t) {
                    let r = t.currentTarget;
                    r && (r.removeEventListener(e, n), r.removeEventListener("blur", s))
                }
                i(t, function(t) {
                    t.addEventListener(e, n), t.addEventListener("blur", s)
                })
            }

            function c(e, t) {
                function n(e) {
                    let {
                        currentTarget: s
                    } = e;
                    s && (s.removeEventListener("input", t), s.removeEventListener("blur", n))
                }
                i(e, function(e) {
                    e.addEventListener("input", t), e.addEventListener("blur", n)
                })
            }
        },
        40458: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var s = n(54177),
                r = n(82873);

            function l(e) {
                let t = document.querySelector(".sso-modal");
                t && (t.classList.remove("success", "error"), e ? t.classList.add("success") : t.classList.add("error"))
            }
            async function o() {
                let e = document.querySelector("link[rel=sso-modal]"),
                    t = await (0, s.W)({
                        content: (0, r.a_)(document, e.href),
                        dialogClass: "sso-modal"
                    }),
                    n = null,
                    o = window.external;
                if (o.ssoComplete = function(e) {
                        e.error ? l(n = !1) : (l(n = !0), function(e) {
                            let t = document.querySelector("meta[name=sso-expires-around]");
                            t && t.setAttribute("content", e)
                        }(e.expiresAround), window.focus()), o.ssoComplete = null
                    }, await new Promise(e => {
                        t.addEventListener("dialog:remove", e, {
                            once: !0
                        })
                    }), !n) throw Error("sso prompt canceled")
            }
            async function i() {
                let e = document.querySelector("link[rel=sso-session]"),
                    t = document.querySelector("meta[name=sso-expires-around]");
                if (!(e instanceof HTMLLinkElement) || ! function(e) {
                        if (!(e instanceof HTMLMetaElement)) return !0;
                        let t = parseInt(e.content),
                            n = new Date().getTime() / 1e3;
                        return n > t
                    }(t)) return !0;
                let n = e.href,
                    s = await fetch(n, {
                        headers: {
                            Accept: "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    }),
                    r = await s.json();
                return r
            }(0, n(36071).N7)(".js-sso-modal-complete", function(e) {
                if (window.opener && window.opener.external.ssoComplete) {
                    let t = e.getAttribute("data-error"),
                        n = e.getAttribute("data-expires-around");
                    window.opener.external.ssoComplete({
                        error: t,
                        expiresAround: n
                    }), window.close()
                } else {
                    let t = e.getAttribute("data-fallback-url");
                    t && (window.location.href = t)
                }
            });
            let a = null;

            function c() {
                a = null
            }
            async function u() {
                let e = await i();
                e || (a || (a = o().then(c).catch(c)), await a)
            }
        },
        54177: (e, t, n) => {
            n.d(t, {
                W: () => r
            });
            var s = n(59753);
            async function r(e) {
                let t = document.querySelector("#site-details-dialog"),
                    n = t.content.cloneNode(!0),
                    r = n.querySelector("details"),
                    l = r.querySelector("details-dialog"),
                    o = r.querySelector(".js-details-dialog-spinner");
                e.detailsClass && r.classList.add(...e.detailsClass.split(" ")), e.dialogClass && l.classList.add(...e.dialogClass.split(" ")), e.label ? l.setAttribute("aria-label", e.label) : e.labelledBy && l.setAttribute("aria-labelledby", e.labelledBy), document.body.append(n);
                try {
                    let t = await e.content;
                    o.remove(), l.prepend(t)
                } catch (n) {
                    o.remove();
                    let t = document.createElement("span");
                    t.textContent = e.errorMessage || "Couldn't load the content", t.classList.add("my-6"), t.classList.add("mx-4"), l.prepend(t)
                }
                return r.addEventListener("toggle", () => {
                    r.hasAttribute("open") || ((0, s.f)(l, "dialog:remove"), r.remove())
                }), l
            }
        },
        82873: (e, t, n) => {
            n.d(t, {
                DF: () => u,
                Fr: () => d,
                a_: () => c
            });
            var s = n(18699);
            let r = class ResponseError extends Error {
                constructor(e, t) {
                    super(`${e} for HTTP ${t.status}`), this.response = t
                }
            };
            var l = n(22490),
                o = n(7180);
            let i = "server-x-safe-html",
                a = l.ZO.createPolicy(i, {
                    createHTML: (e, t) => o.O.apply({
                        policy: () => (! function(e, t, n = !1) {
                            let s = t.headers.get("content-type") || "";
                            if (!n && !s.startsWith("text/html")) throw new r(`expected response with text/html, but was ${s}`, t);
                            if (n && !(s.startsWith("text/html") || s.startsWith("application/json"))) throw new r(`expected response with text/html or application/json, but was ${s}`, t);
                            let l = t.headers.get("x-html-safe");
                            if (l) {
                                if (!e.includes(l)) throw new r("response X-HTML-Safe nonce did not match", t)
                            } else throw new r("missing X-HTML-Safe nonce", t)
                        }(function(e) {
                            let t = [...e.querySelectorAll("meta[name=html-safe-nonce]")].map(e => e.content);
                            if (t.length < 1) throw Error("could not find html-safe-nonce on document");
                            return t
                        }(document), t), e),
                        policyName: i,
                        fallback: e,
                        silenceErrorReporting: !0
                    })
                });
            async function c(e, t, n) {
                let r = new Request(t, n);
                r.headers.append("X-Requested-With", "XMLHttpRequest");
                let l = await self.fetch(r);
                if (l.status < 200 || l.status >= 300) throw Error(`HTTP ${l.status}${l.statusText||""}`);
                let o = a.createHTML(await l.text(), l);
                return (0, s.r)(e, o)
            }

            function u(e, t, n = 1e3, s = [200], r = [202]) {
                return async function n(l) {
                    let o = new Request(e, t);
                    o.headers.append("X-Requested-With", "XMLHttpRequest");
                    let i = await self.fetch(o);
                    if (r.includes(i.status)) return await new Promise(e => setTimeout(e, l)), n(1.5 * l);
                    if (s.includes(i.status)) return i;
                    if (i.status < 200 || i.status >= 300) throw Error(`HTTP ${i.status}${i.statusText||""}`);
                    throw Error(`Unexpected ${i.status} response status from poll endpoint`)
                }(n)
            }
            async function d(e, t, n) {
                let {
                    wait: s = 500,
                    acceptedStatusCodes: r = [200],
                    max: l = 3,
                    attempt: o = 0
                } = n || {}, i = async () => new Promise((n, i) => {
                    setTimeout(async () => {
                        try {
                            let s = new Request(e, t);
                            s.headers.append("X-Requested-With", "XMLHttpRequest");
                            let i = await self.fetch(s);
                            if (r.includes(i.status) || o + 1 === l) return n(i);
                            n("retry")
                        } catch (e) {
                            i(e)
                        }
                    }, s * o)
                }), a = await i();
                return "retry" !== a ? a : d(e, t, {
                    wait: s,
                    acceptedStatusCodes: r,
                    max: l,
                    attempt: o + 1
                })
            }
        },
        67044: (e, t, n) => {
            n.d(t, {
                DV: () => l,
                D_: () => s.D_,
                EL: () => s.EL,
                N9: () => s.N9,
                Tz: () => s.Tz,
                k0: () => s.k0
            });
            var s = n(11793);
            let r = /(?:^|,)((?:[^,]|,(?=\+| |$))*(?:,(?=,))?)/g;

            function l(e) {
                return Array.from(e.matchAll(r)).map(([, e]) => e)
            }
        },
        76134: (e, t, n) => {
            n.d(t, {
                Ty: () => l,
                YE: () => o,
                Zf: () => a
            });
            var s = n(46426),
                r = n(67044);
            let l = () => {
                    let e = document.querySelector("meta[name=keyboard-shortcuts-preference]");
                    return !e || "all" === e.content
                },
                o = e => /Enter|Arrow|Escape|Meta|Control|Mod|Esc/.test(e) || e.includes("Alt") && e.includes("Shift"),
                i = new Set(["button", "checkbox", "color", "file", "hidden", "image", "radio", "range", "reset", "submit"]),
                a = e => {
                    let t = (0, r.EL)(e),
                        n = function(e) {
                            if (!(e instanceof HTMLElement)) return !1;
                            let t = e.nodeName.toLowerCase(),
                                n = e.getAttribute("type") ? .toLowerCase() ? ? "text",
                                s = "true" === e.ariaReadOnly || "true" === e.getAttribute("aria-readonly") || null !== e.getAttribute("readonly");
                            return ("select" === t || "textarea" === t || "input" === t && !i.has(n) || e.isContentEditable) && !s
                        }(e.target) && (0, s.c)("no_character_key_shortcuts_in_inputs"),
                        a = l() && !n;
                    return o(t) || a
                }
        },
        55908: (e, t, n) => {
            n.d(t, {
                Q: () => s
            });
            let s = Object.freeze({
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
        56959: (e, t, n) => {
            n.d(t, {
                RB: () => s,
                qC: () => r,
                w0: () => Subscription
            });
            let Subscription = class Subscription {
                constructor(e) {
                    this.closed = !1, this.unsubscribe = () => {
                        e(), this.closed = !0
                    }
                }
            };

            function s(e, t, n, s = {
                capture: !1
            }) {
                return e.addEventListener(t, n, s), new Subscription(() => {
                    e.removeEventListener(t, n, s)
                })
            }

            function r(...e) {
                return new Subscription(() => {
                    for (let t of e) t.unsubscribe()
                })
            }
        }
    }
]);
//# sourceMappingURL=app_assets_modules_github_behaviors_task-list_ts-app_assets_modules_github_onfocus_ts-app_ass-421cec-88e7ee018944.js.map