"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    ["app_assets_modules_react-code-view_pages_CodeView_tsx"], {
        68588: (e, t, n) => {
            n.d(t, {
                n: () => r
            });

            function r({
                appendQuery: e,
                retainScrollPosition: t,
                returnTarget: n
            }) {
                window.dispatchEvent(new CustomEvent("blackbird_monolith_append_and_focus_input", {
                    detail: {
                        appendQuery: e,
                        retainScrollPosition: t,
                        returnTarget: n
                    }
                }))
            }
        },
        98950: (e, t, n) => {
            n.d(t, {
                z: () => r
            });

            function r(e) {
                if ("clipboard" in navigator) return navigator.clipboard.writeText(e);
                let t = document.body;
                if (!t) return Promise.reject(Error());
                let n = function(e) {
                    let t = document.createElement("pre");
                    return t.style.width = "1px", t.style.height = "1px", t.style.position = "fixed", t.style.top = "5px", t.textContent = e, t
                }(e);
                return t.appendChild(n), ! function(e) {
                    if ("clipboard" in navigator) return navigator.clipboard.writeText(e.textContent || "");
                    let t = getSelection();
                    if (null == t) return Promise.reject(Error());
                    t.removeAllRanges();
                    let n = document.createRange();
                    n.selectNodeContents(e), t.addRange(n), document.execCommand("copy"), t.removeAllRanges(), Promise.resolve()
                }(n), t.removeChild(n), Promise.resolve()
            }
        },
        87098: (e, t, n) => {
            function r(e, t = location.hash) {
                return i(e, o(t))
            }

            function i(e, t) {
                return "" === t ? null : e.getElementById(t) || e.getElementsByName(t)[0]
            }

            function o(e) {
                try {
                    return decodeURIComponent(e.slice(1))
                } catch {
                    return ""
                }
            }
            n.d(t, {
                $z: () => o,
                Kt: () => r,
                Q: () => i
            })
        },
        31174: (e, t, n) => {
            n.d(t, {
                bx: () => s,
                ln: () => l,
                tW: () => c
            });
            var r = n(62073),
                i = n(16685);
            let o = {
                    cursorNavigationHopWordLeft: {
                        hotkey: "Alt+ArrowLeft,Ctrl+ArrowLeft",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["ArrowLeft"],
                        modifierRequired: !0
                    },
                    cursorNavigationHopWordRight: {
                        hotkey: "Alt+ArrowRight,Ctrl+ArrowRight",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["ArrowRight"],
                        modifierRequired: !0
                    },
                    cursorNavigationTopOfPage: {
                        hotkey: "Meta+ArrowUp",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["ArrowUp"],
                        modifierRequired: !0
                    },
                    cursorNavigationBottomOfPage: {
                        hotkey: "Meta+ArrowDown",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["ArrowDown"],
                        modifierRequired: !0
                    },
                    cursorNavigationEnd: {
                        hotkey: "End,Meta+ArrowRight",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["End"]
                    },
                    cursorNavigationHome: {
                        hotkey: "Home,Meta+ArrowLeft",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["Home"]
                    },
                    cursorNavigationPageUp: {
                        hotkey: "PageUp",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["PageUp"]
                    },
                    cursorNavigationPageDown: {
                        hotkey: "PageDown",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["PageDown"]
                    },
                    cursorNavigationArrowDown: {
                        hotkey: "ArrowDown",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["ArrowDown"]
                    },
                    cursorNavigationArrowUp: {
                        hotkey: "ArrowUp",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["ArrowUp"]
                    },
                    cursorNavigationArrowLeft: {
                        hotkey: "ArrowLeft",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["ArrowLeft"]
                    },
                    cursorNavigationArrowRight: {
                        hotkey: "ArrowRight",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["ArrowRight"]
                    },
                    cursorNavigationShiftHopWordLeft: {
                        hotkey: "Alt+Shift+ArrowLeft,Ctrl+Shift+ArrowLeft",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["ArrowLeft"],
                        modifierRequired: !0
                    },
                    cursorNavigationShiftHopWordRight: {
                        hotkey: "Alt+Shift+ArrowRight,Ctrl+Shift+ArrowRight",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["ArrowRight"],
                        modifierRequired: !0
                    },
                    cursorNavigationShiftTopOfPage: {
                        hotkey: "Meta+Shift+ArrowUp",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["ArrowUp"],
                        modifierRequired: !0
                    },
                    cursorNavigationShiftBottomOfPage: {
                        hotkey: "Meta+Shift+ArrowDown",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["ArrowDown"],
                        modifierRequired: !0
                    },
                    cursorNavigationShiftEnd: {
                        hotkey: "Shift+End,Meta+Shift+ArrowRight",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["End"],
                        modifierRequired: !0
                    },
                    cursorNavigationShiftHome: {
                        hotkey: "Shift+Home,Meta+Shift+ArrowLeft",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["Home"],
                        modifierRequired: !0
                    },
                    cursorNavigationShiftPageUp: {
                        hotkey: "Shift+PageUp",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["PageUp"],
                        modifierRequired: !0
                    },
                    cursorNavigationShiftPageDown: {
                        hotkey: "Shift+PageDown",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["PageDown"],
                        modifierRequired: !0
                    },
                    cursorNavigationShiftArrowDown: {
                        hotkey: "Shift+ArrowDown",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["ArrowDown"],
                        modifierRequired: !0
                    },
                    cursorNavigationShiftArrowUp: {
                        hotkey: "Shift+ArrowUp",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["ArrowUp"],
                        modifierRequired: !0
                    },
                    cursorNavigationShiftArrowLeft: {
                        hotkey: "Shift+ArrowLeft",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["ArrowLeft"],
                        modifierRequired: !0
                    },
                    cursorNavigationShiftArrowRight: {
                        hotkey: "Shift+ArrowRight",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["ArrowRight"],
                        modifierRequired: !0
                    },
                    cursorNavigationHighlightLine: {
                        text: "J",
                        hotkey: "Shift+J",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["J"],
                        modifierRequired: !0
                    },
                    cursorNavigationGoLineUp: {
                        hotkey: "Ctrl+p",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["p"],
                        modifierRequired: !0
                    },
                    cursorNavigationOpenHelpDialog: {
                        hotkey: "Alt+F1,Control+Alt+\u02D9,Control+Alt+h",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["F1", "h", "\u02D9"],
                        modifierRequired: !0
                    },
                    cursorNavigationGoLineDown: {
                        hotkey: "Ctrl+n",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["n"],
                        modifierRequired: !0
                    },
                    cursorNavigationEnter: {
                        text: "\u2318 Enter",
                        hotkey: "Meta+Enter",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["Enter"],
                        modifierRequired: !0
                    },
                    cursorNavigationSpace: {
                        hotkey: " ",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: [" "],
                        modifierRequired: !1
                    },
                    cursorNavigationShiftSpace: {
                        hotkey: "Shift+ ",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: [" "],
                        modifierRequired: !0
                    },
                    expandAndFocusLineContextMenu: {
                        text: "Shift Alt C",
                        hotkey: "Alt+C,Alt+\xc7",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["C"],
                        modifierRequired: !0
                    },
                    copyFilePathShortcut: {
                        text: "\u2318 shift .",
                        hotkey: "Meta+Shift+>",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["."],
                        modifierRequired: !0
                    },
                    copyPermalinkShortcut: {
                        text: "\u2318 shift ,",
                        hotkey: "Meta+Shift+<",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: [","],
                        modifierRequired: !0
                    },
                    copyRawContentShortcut: {
                        text: "\u2318 shift c",
                        hotkey: "Meta+Shift+C",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["c"],
                        modifierRequired: !0
                    },
                    downloadRawContentShortcut: {
                        text: "\u2318 shift s",
                        hotkey: "Meta+Shift+S",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["s"],
                        modifierRequired: !0
                    },
                    editFileShortcut: {
                        hotkey: "e,Shift+E",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["e", "E"]
                    },
                    goToLineShortcut: {
                        text: "l",
                        hotkey: "l,Shift+L",
                        ariaKeyShortcuts: "l",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["l", "L"]
                    },
                    alternativeGoToLineShortcut: {
                        hotkey: "Mod+Alt+g",
                        ariaKeyShortcuts: "Mod+Alt+g",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["g", "G"]
                    },
                    findInFileShortcut: {
                        hotkey: "Meta+f, F3",
                        text: "\u2318 f",
                        ariaKeyShortcuts: "Meta+F",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["f", "F3"],
                        modifierRequired: !0
                    },
                    findFilesShortcut: {
                        hotkey: "t,Shift+T",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["t", "T"]
                    },
                    findSelectionShortcut: {
                        hotkey: "Meta+e",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["e"],
                        modifierRequired: !0
                    },
                    findNextShortcut: {
                        hotkey: "Mod+g"
                    },
                    findPrevShortcut: {
                        hotkey: "Mod+Shift+G"
                    },
                    openWithGitHubDevShortcut: {
                        hotkey: "., Meta+Shift+/",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["."]
                    },
                    openWithGitHubDevInNewWindowShortcut: {
                        hotkey: "Shift+.,Shift+>,>",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: [">"]
                    },
                    permalinkShortcut: {
                        hotkey: "y,Shift+Y",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["y", "Y"]
                    },
                    searchShortcut: {
                        hotkey: "/",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["/"]
                    },
                    selectAllShortcut: {
                        hotkey: "Meta+a",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["a"],
                        modifierRequired: !0
                    },
                    selectEditTabShortcut: {
                        hotkey: "Mod+Shift+P"
                    },
                    submitCommitDialogShortcut: {
                        hotkey: "Mod+Enter"
                    },
                    refSelectorShortcut: {
                        hotkey: "w",
                        text: "w",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["w"]
                    },
                    escapeRightClickMenu: {
                        hotkey: "Escape",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["Escape"]
                    },
                    toggleFocusedPaneShortcut: {
                        hotkey: "Meta+F6,Meta+Shift+F6",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["F6"],
                        modifierRequired: !0
                    },
                    toggleSymbolsShortcut: {
                        hotkey: "Meta+i",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["i"],
                        modifierRequired: !0
                    },
                    toggleTreeShortcut: {
                        hotkey: "Meta+b",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["b"],
                        modifierRequired: !0
                    },
                    viewBlameShortcut: {
                        hotkey: "b,Shift+B,Meta+/ Meta+b",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["b"]
                    },
                    viewCodeShortcut: {
                        hotkey: "Meta+/ Meta+c",
                        useWhileBlobFocused: !0,
                        modifierRequired: !0
                    },
                    viewPreviewShortcut: {
                        hotkey: "Meta+/ Meta+p"
                    },
                    viewRawContentShortcut: {
                        text: "\u2318 / \u2318 r",
                        hotkey: "Meta+/ Meta+r",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["r"],
                        modifierRequired: !0
                    },
                    findSymbolShortcut: {
                        hotkey: "r,Shift+R",
                        useWhileBlobFocused: !0,
                        noModifierHotkey: ["r", "R"],
                        modifierRequired: !1
                    }
                },
                a = new Map;

            function s() {
                let e = (0, i.f)(["mac"]),
                    [t] = (0, r.D)(() => !1, !0, []),
                    n = 0;
                if (e ? n = 1 : t || (n = 2), !a.has(n)) {
                    var s, l;
                    let r = o;
                    e || t || (r = Object.keys(s = r).reduce((e, t) => {
                        let n = s[t];
                        return e[t] = {
                            hotkey: n.hotkey ? .replace(/Meta/g, "Control"),
                            text: n.text ? .replace(/⌘/g, "Ctrl").replace(/⇧/g, "Shift"),
                            ariaKeyShortcuts: n.ariaKeyShortcuts ? .replace(/Meta/g, "Control"),
                            useWhileBlobFocused: n.useWhileBlobFocused,
                            modifierRequired: n.modifierRequired,
                            noModifierHotkey: n.noModifierHotkey
                        }, e
                    }, {})), t && (r = Object.keys(l = r).reduce((e, t) => {
                        let n = l[t];
                        return e[t] = {
                            hotkey: void 0,
                            text: n.text ? .replace(/⌘/g, "Ctrl").replace(/⇧/g, "Shift"),
                            ariaKeyShortcuts: n.ariaKeyShortcuts ? .replace(/Meta/g, "Control"),
                            useWhileBlobFocused: n.useWhileBlobFocused,
                            modifierRequired: n.modifierRequired,
                            noModifierHotkey: n.noModifierHotkey
                        }, e
                    }, {})), a.set(n, r)
                }
                return a.get(n)
            }

            function l() {
                let e = s();
                return Object.keys(e).reduce((t, n) => {
                    let r = e[n];
                    if (r.useWhileBlobFocused && r.noModifierHotkey && r.modifierRequired)
                        for (let e of r.noModifierHotkey) t.includes(e) || t.push(e);
                    return t
                }, [])
            }

            function c() {
                let e = s();
                return Object.keys(e).reduce((t, n) => {
                    let r = e[n];
                    if (r.useWhileBlobFocused && r.noModifierHotkey && !r.modifierRequired)
                        for (let e of r.noModifierHotkey) t.includes(e) || t.push(e);
                    return t
                }, [])
            }
        },
        77262: (e, t, n) => {
            n.d(t, {
                G: () => l
            });
            var r = n(46263),
                i = n(11117),
                o = n(81738),
                a = n(67294),
                s = n(89250);

            function l(e, t = 20) {
                let [n, l] = (0, a.useState)(t), c = (0, a.useRef)(t), d = (0, i.O)().codeWrappingOption, u = (0, s.TH)();
                return (0, o.b)(() => {
                    let n = document.getElementById("file-name-id-wide");
                    if (!n) return;
                    let i = new ResizeObserver((0, r.D)(() => {
                        let n = document.getElementsByClassName(e)[0] ? .firstChild ? .getBoundingClientRect().height ? ? t;
                        0 === n || n === c.current || d.enabled || (l(n), c.current = n)
                    }));
                    return i.observe(n), () => i.disconnect()
                }, [u.key, d.enabled, e, t]), n
            }
        },
        86480: (e, t, n) => {
            n.d(t, {
                NC: () => I,
                O$: () => y,
                RP: () => Z,
                Sg: () => p,
                Tw: () => N,
                gk: () => S,
                i$: () => C,
                jn: () => x,
                nJ: () => k,
                nj: () => R
            });
            var r = n(77417),
                i = n(51252),
                o = n(62073),
                a = n(11117),
                s = n(16685),
                l = n(67294),
                c = n(89250),
                d = n(56334),
                u = n(13816),
                h = n(73690),
                m = n(77262),
                f = n(57941);
            let p = 7.2293,
                x = 92,
                y = 92,
                g = new r.fA(1),
                b = new r.fA(0),
                j = new r.fA(1),
                w = new r.fA(0),
                v = new r.fA(!1);

            function N() {
                return (0, i.iu)(g)
            }

            function C() {
                return (0, i.iu)(j)
            }

            function k() {
                return (0, i.iu)(v)
            }

            function S() {
                let e = (0, l.useRef)(null);

                function t() {
                    e.current = {
                        start: {
                            line: g.value,
                            column: b.value + 1
                        },
                        end: {
                            line: j.value,
                            column: w.value + 1
                        }
                    }
                }
                return (0, i.mU)(g, t), (0, i.mU)(b, t), (0, i.mU)(j, t), (0, i.mU)(w, t), e
            }

            function I(e) {
                v.value = e
            }

            function R(e) {
                let t = (0, a.O)().codeWrappingOption.enabled,
                    n = !!(0, h.Q)(),
                    [r] = (0, o.D)(() => !1, !0, []);
                return !t && !n && !e && !r
            }

            function Z(e, t, n, r, i, o, a, h, N, C, k, S) {
                let I = (0, l.useRef)(0),
                    R = (0, l.useRef)(0),
                    Z = (0, l.useRef)(0),
                    T = (0, l.useRef)(0),
                    L = (0, l.useRef)(0),
                    E = (0, l.useRef)(0),
                    B = (0, l.useRef)(null),
                    _ = (0, l.useRef)(0),
                    D = (0, l.useRef)(0),
                    F = (0, l.useRef)(15),
                    O = (0, l.useRef)(0),
                    A = a ? y : x,
                    P = (0, s.f)(["windows"]),
                    M = P ? 6.6 : p,
                    H = (0, m.G)("react-code-lines"),
                    $ = (0, l.useMemo)(() => {
                        let e = [];
                        for (let t = 0; t < i.length; t++) 0 === t ? e.push(i[t].rawText ? .length ? ? 0) : e.push((i[t].rawText ? .length ? ? 0) + e[t - 1] + 1);
                        return e
                    }, [i]);

                function W(e, t) {
                    n(e), E.current = t
                }

                function z(e, t) {
                    r(e), L.current = t
                }
                let U = (0, l.useCallback)(e => {
                        let t = g.value !== j.value,
                            n = {
                                start: {
                                    line: g.value,
                                    column: t ? b.value + 1 : null
                                },
                                end: {
                                    line: j.value,
                                    column: t ? w.value + 1 : null
                                }
                            },
                            r = {
                                anchorPrefix: "L",
                                blobRange: {
                                    start: n.start,
                                    end: n.end
                                }
                            },
                            i = (0, d.Dw)(r);
                        window.location.hash = i, h ? .(e)
                    }, [h]),
                    {
                        hash: G
                    } = (0, c.TH)();

                function V(e) {
                    let t = 0,
                        n = 0,
                        r = 0,
                        i = 0,
                        o = 0,
                        a = 0,
                        s = $.length - 1;
                    for (; a <= s;) {
                        let l = Math.floor((a + s) / 2);
                        if (r = $[l] + 1, i = l > 0 ? $[l - 1] + 1 : 0, o = l < $.length - 1 ? $[l + 1] + 1 : 1 / 0, e >= i && e < r) {
                            t = l, n = e - i;
                            break
                        }
                        if (e < i) s = l - 1;
                        else if (e >= r && e < o) {
                            t = l + 1, n = e - r;
                            break
                        } else e >= o && (a = l + 1)
                    }
                    return {
                        line: t,
                        offset: n
                    }
                }

                function q(e, t, n, r, i) {
                    I.current = e, R.current = n, Z.current = t, T.current = r, L.current = i ? e : t, E.current = i ? n : r, g.value = eo(e), b.value = n, j.value = eo(t), w.value = r
                }

                function K() {
                    return I.current === L.current && R.current === E.current && (I.current !== Z.current || R.current !== T.current) ? "start" : Z.current === L.current && T.current === E.current && (I.current !== Z.current || R.current !== T.current) ? "end" : "same"
                }

                function Y() {
                    if (N && N.current) {
                        let e = N.current,
                            t = I.current - 1,
                            n = Z.current - 1,
                            r = (-1 !== t ? $[t] + 1 : 0) + R.current,
                            i = (-1 !== n ? $[n] + 1 : 0) + T.current;
                        e.selectionStart = r, e.selectionEnd = i, D.current = r, O.current = i
                    }
                }

                function Q() {
                    en();
                    let e = I.current,
                        t = R.current;
                    e + F.current > i.length ? e = i.length - 1 : e += F.current, t = ee(e, t), I.current = e, R.current = t, J(), z(e * H, e), er(70)
                }

                function X() {
                    en();
                    let e = I.current,
                        t = R.current;
                    e < F.current ? e = 0 : e -= F.current, t = ee(e, t), I.current = e, R.current = t, J(), z(e * H, e), er(70)
                }

                function J() {
                    Z.current = I.current, T.current = R.current
                }

                function ee(e, t) {
                    let n = t;
                    if (e > i.length || !i[e]) return n;
                    let r = i[e].rawText;
                    return r && (t > r.length ? (n = r.length, W((0, u.VC)(n, r, C), n)) : n < _.current && _.current < r.length ? (n = _.current, W((0, u.VC)(n, r, C), n)) : n < _.current && _.current >= r.length && (n = r.length, W((0, u.VC)(n, r, C), n))), n
                }

                function et() {
                    let e = i[L.current];
                    if (!e) return;
                    let {
                        rawText: n,
                        stylingDirectivesLine: r
                    } = e;
                    if (!n || !r) return;
                    let o = null;
                    for (let e of r) {
                        if (e.start > E.current || e.end < E.current || !e.cssClass) continue;
                        o = e;
                        let t = (0, u.yk)(n.substring(e.start, e.end), e.cssClass);
                        if (!t) return
                    }
                    o && t ? .({
                        selectedText: n.substring(o.start, o.end),
                        lineNumber: eo(L.current),
                        offset: o.start
                    })
                }

                function en() {
                    B.current || (o ? B.current = e.current ? .parentElement ? .parentElement : B.current = e.current ? .parentElement)
                }

                function er(e) {
                    B.current && (ei(), function(e) {
                        let t = K(),
                            n = R.current;
                        "end" === t && (n = T.current), B.current && B.current.scrollBy && (n * M + A + 50 >= B.current.scrollLeft + B.current.clientWidth ? B.current.scrollBy(n * M + A - B.current.scrollLeft - B.current.clientWidth + e, 0) : n * M + A <= B.current.scrollLeft && B.current.scrollBy(n * M + A - B.current.scrollLeft - B.current.clientWidth, 0))
                    }(e)), Y()
                }

                function ei() {
                    let e = K(),
                        t = R.current,
                        n = I.current;
                    "end" === e && (t = T.current, n = Z.current);
                    let r = Math.min(eo(n + 5), i.length);
                    if (!(0, u.nB)(r)) {
                        let e = (0, u.Hm)(r);
                        null === e && window.scrollTo(0, n * H), e && e.getBoundingClientRect().y < 0 || e && e.getBoundingClientRect().y > window.innerHeight ? (e.scrollIntoView({
                            block: "center"
                        }), window.scrollBy(-300, 0)) : e && window.scrollBy(0, 100);
                        let i = window.innerWidth;
                        i < t * M + A && window.scrollTo(0, 0)
                    }
                    let o = Math.max(eo(n - 5), 1);
                    if ((0, u.nB)(o)) n <= 7 && window.scrollTo(0, 0);
                    else {
                        let e = (0, u.Hm)(o);
                        null === e && window.scrollTo(0, n * H), e && e.getBoundingClientRect().y < 0 || e && e.getBoundingClientRect().y > window.innerHeight ? (e.scrollIntoView({
                            block: "center"
                        }), window.scrollBy(-300, 0)) : e && window.scrollBy(0, -200)
                    }
                }

                function eo(e) {
                    return i[e] ? i[e].lineNumber : e
                }
                return (0, l.useEffect)(() => {
                    let e = window.innerHeight - 200 > 300 ? window.innerHeight - 200 : 300,
                        t = Math.round(e / H);
                    F.current = Math.min(Math.max(t, 1), 100)
                }, [H]), (0, l.useEffect)(() => {
                    k && "" !== k && (k.includes("PageUp") ? X() : k.includes("PageDown") && Q())
                }, [k]), (0, l.useEffect)(() => {
                    if (!S || S.start < 0 && S.end < 0 || D.current === S.start && O.current === S.end) return;
                    let e = V(S.start),
                        t = V(S.end);
                    (D.current !== S.start || O.current === S.end) && (S.keyboard || S.displayStart) ? (W((0, u.VC)(e.offset, i[e.line] ? .rawText ? ? "", C), e.offset), _.current = e.offset, z(e.line * H, e.line), q(e.line, t.line, e.offset, t.offset, !0)) : (W((0, u.VC)(t.offset, i[t.line] ? .rawText ? ? "", C), t.offset), _.current = t.offset, z(t.line * H, t.line), q(e.line, t.line, e.offset, t.offset, !1)), O.current = S.end, D.current = S.start, S.end !== S.start || S.keyboard || (v.value = !1, et()), L.current <= 5 && S.keyboard && ei()
                }, [i, C, S]), (0, l.useEffect)(() => {
                    let e = (0, d.n6)(G);
                    if (!e.blobRange ? .start ? .line || e.blobRange.start.line > i.length) return;
                    let t = e.blobRange.start.line - 1;
                    I.current = t, g.value = t, b.value = 0, j.value = t, w.value = 0, R.current = 0, Z.current = t, T.current = 0, _.current = 0, W(R.current, R.current), z(I.current * H, I.current), er(70)
                }, [G, i, n, r]), {
                    onEnter: function() {
                        v.value = !0, (0, f.gZ)(), et()
                    },
                    updateUrlForLineNumber: U,
                    onPageDown: Q,
                    onPageUp: X,
                    currentStartLine: I,
                    currentStartChar: R,
                    currentEndLine: Z,
                    currentEndChar: T,
                    determineAndSetTextAreaCursorPosition: Y,
                    getCorrectLineNumberWithCollapsedSections: eo
                }
            }
        },
        57941: (e, t, n) => {
            n.d(t, {
                Sl: () => o,
                eS: () => s,
                gZ: () => a
            });
            var r = n(67294);
            let i = "react_blob_view_focus_symbol_pane";

            function o(e) {
                let t = (0, r.useRef)(e);
                (0, r.useEffect)(() => {
                    t.current = e
                }, [e]), (0, r.useEffect)(() => {
                    let t = t => {
                        e(t.detail ? .focusSymbolSearch || !1)
                    };
                    return window.addEventListener(i, t), () => {
                        window.removeEventListener(i, t)
                    }
                }, [e])
            }

            function a() {
                window.dispatchEvent(new CustomEvent(i))
            }

            function s() {
                window.dispatchEvent(new CustomEvent(i, {
                    detail: {
                        focusSymbolSearch: !0
                    }
                }))
            }
        },
        90606: (e, t, n) => {
            n.d(t, {
                $w: () => l,
                XT: () => s,
                _X: () => a,
                kl: () => c,
                kq: () => function e(t) {
                    let n = t ? .textContent ? ? "";
                    if ("" !== n) return n;
                    if (t) {
                        let r = t.childNodes;
                        for (let t = 0; t < r.length; t++) {
                            let i = r[t];
                            if (i) {
                                let t = i.getAttribute("data-code-text");
                                null === t && (t = e(i)), n += t
                            }
                        }
                    }
                    return n
                }
            });
            var r = n(15345),
                i = n(67294),
                o = n(13816);
            let a = "highlighted-line-menu-positioner",
                s = 25;

            function l({
                lineData: e,
                onLineStickOrUnstick: t,
                onMenuClose: n,
                onCollapseToggle: a,
                setOpen: s
            }) {
                function l(e, t = !1) {
                    s(e), n && !e && n(e, t)
                }
                let c = (0, i.useCallback)(() => {
                        if (!e) return;
                        let {
                            lineNumber: n,
                            ownedSection: r
                        } = e;
                        r && (r.collapsed = !1), a ? .(), (0, o.yw)(n), t ? .(e, !0)
                    }, [e, a, t]),
                    d = (0, i.useCallback)(() => {
                        if (!e) return;
                        let {
                            lineNumber: t,
                            ownedSection: n
                        } = e;
                        n && (n.collapsed = !0), a ? .(), (0, o.rH)(t)
                    }, [e, a]);
                return {
                    setShouldBeOpen: l,
                    expandOrCollapseSection: function() {
                        if (!e) return;
                        let {
                            ownedSection: t
                        } = e;
                        t && (t.collapsed ? (c(), (0, o.dM)("Code section expanded")) : (d(), (0, o.dM)("Code section collapsed"))), l(!1, !0)
                    },
                    openUpRefSelector: function() {
                        let e = document.getElementsByClassName("ref-selector-class");
                        e && 1 === e.length ? (e[0] ? .click(), (0, r.x)("ref selector opened")) : e && 2 === e.length && (e[1] ? .click(), (0, r.x)("ref selector opened")), l(!1)
                    }
                }
            }

            function c(e, t = {
                x: 0,
                y: 0
            }) {
                let n = document.getElementById(a);
                if (!e || !n) return {
                    display: "none"
                };
                let {
                    top: r,
                    left: i,
                    height: o
                } = e.getBoundingClientRect(), {
                    top: l,
                    left: c
                } = n.getBoundingClientRect();
                return {
                    top: `${r-l-(s-o)/2+t.y}px`,
                    left: `${Math.max(i-c+t.x,0)-13}px`
                }
            }
        },
        5262: (e, t, n) => {
            n.d(t, {
                a: () => d
            });
            var r = n(32769),
                i = n(78212),
                o = n(2048),
                a = n(53664),
                s = n(89445),
                l = n(67294),
                c = n(90874);

            function d() {
                let {
                    sendAnalyticsEvent: e
                } = (0, a.z)(), t = function() {
                    let e = function() {
                            let e = (0, r.H)(),
                                t = (0, c.x)();
                            return (0, l.useMemo)(() => ({
                                react_app: "code-view",
                                repository_id: e.id,
                                repository_nwo: `${e.ownerLogin}/${e.name}`,
                                repository_public: e.public,
                                repository_is_fork: e.isFork,
                                actor_id: t ? .id,
                                actor_login: t ? .login
                            }), [e, t])
                        }(),
                        t = (0, r.H)(),
                        n = (0, i.Mf)(i.V6, {
                            owner: t.ownerLogin,
                            repo: t.name
                        });
                    return (0, l.useCallback)((t, r, i) => {
                        let o = {
                            target: t,
                            interaction: r,
                            context: i,
                            ...e,
                            url: window.location.href,
                            user_agent: window.navigator.userAgent,
                            browser_width: window.innerWidth,
                            browser_languages: window.navigator.languages.join(",")
                        };
                        (0, s.v)(n, {
                            method: "POST",
                            body: o
                        })
                    }, [e, n])
                }(), n = (0, o.y)("code_nav_ui_events");
                return {
                    sendRepoClickEvent: (0, l.useCallback)((r, i = {}) => {
                        e("repository.click", r, i), n && t(r, "click", i)
                    }, [e, t, n]),
                    sendRepoKeyDownEvent: (0, l.useCallback)((r, i = {}) => {
                        e("repository.keydown", r, i), n && t(r, "keydown", i)
                    }, [e, t, n]),
                    sendStats: (0, l.useCallback)((r, i = {}) => {
                        e(r, "", i), n && t(r, "stats", i)
                    }, [e, t, n]),
                    sendMarketplaceActionEvent: (0, l.useCallback)((t, n = {}) => {
                        e("marketplace.action.click", t, n)
                    }, [e])
                }
            }
        },
        8903: (e, t, n) => {
            n.d(t, {
                v: () => a,
                z: () => o
            });
            var r = n(67294);
            let i = "react_blob_view_scroll_line_into_view";

            function o(e) {
                let t = (0, r.useRef)(e);
                (0, r.useEffect)(() => {
                    t.current = e
                }, [e]), (0, r.useEffect)(() => {
                    let e = e => t.current(e.detail);
                    return window.addEventListener(i, e), () => {
                        window.removeEventListener(i, e)
                    }
                }, [])
            }

            function a(e) {
                window.dispatchEvent(new CustomEvent(i, {
                    detail: e
                }))
            }
        },
        20286: (e, t, n) => {
            n.d(t, {
                TZ: () => i,
                ik: () => c,
                nx: () => d
            });
            var r = n(67294);
            let i = "repos-sticky-header",
                o = "code_view_update_sticky_header_height_event",
                a = null,
                s = null,
                l = null;

            function c(e) {
                e && s !== e && (s = e, null === a ? a = new ResizeObserver(e => {
                    for (let t of e) t.contentRect.height !== l && (l = t.contentRect.height, window.dispatchEvent(new CustomEvent(o, {
                        detail: t.contentRect.height
                    })))
                }) : a.disconnect(), a.observe(e))
            }

            function d() {
                let [e, t] = (0, r.useState)(void 0);
                return ((0, r.useEffect)(() => {
                    function e(e) {
                        t(e.detail)
                    }
                    return window.addEventListener(o, e), s && c(s), () => {
                        window.removeEventListener(o, e)
                    }
                }, []), void 0 !== e) ? e : 102
            }
        },
        63372: (e, t, n) => {
            n.d(t, {
                V: () => o,
                X: () => i
            });
            var r = n(67294);

            function i(e) {
                let [t, n] = (0, r.useState)(!1), i = (0, r.useCallback)(e => {
                    let r = e[e.length - 1],
                        i = r.intersectionRatio < 1;
                    i !== t && n(i)
                }, [t, n]);
                return (0, r.useEffect)(() => {
                    let t = e.current,
                        n = new IntersectionObserver(i, {
                            threshold: [1],
                            rootMargin: "-1px 0px 0px 0px"
                        });
                    return e.current && n.observe(e.current), () => {
                        t && n.unobserve(t)
                    }
                }, [e, i]), t
            }

            function o() {
                let e = r.useMemo(() => ({
                    top: "0px",
                    zIndex: 1,
                    background: "var(--bgColor-default, var(--color-canvas-default))",
                    position: "sticky"
                }), [!0]);
                return e
            }
        },
        35499: (e, t, n) => {
            n.d(t, {
                B: () => l
            });
            var r = n(32769),
                i = n(78212),
                o = n(62073),
                a = n(67294),
                s = n(80624);

            function l() {
                let e = (0, r.H)(),
                    {
                        path: t,
                        action: n,
                        refInfo: l
                    } = (0, s.Br)(),
                    [c] = (0, o.D)(() => !1, !0, []),
                    d = a.useCallback(t => (0, i.Qi)({
                        repo: e,
                        commitish: l.name,
                        action: "directory" === t.contentType ? "tree" : "blob",
                        path: t.path
                    }), [e.ownerLogin, e.name, l.name]);

                function u(e) {
                    return e ? `?${e}` : ""
                }

                function h(e) {
                    return c ? "" : void 0 === e ? window.location.hash : e ? `#${e}` : ""
                }
                return {
                    getItemUrl: d,
                    getUrl(r = {}) {
                        let o = (0, i.Qi)({
                            repo: e,
                            commitish: r.commitish || l.name,
                            action: r.action || n,
                            path: r.path || t
                        }) + function({
                            params: e,
                            hash: t
                        }) {
                            return u(e) + h(t)
                        }(r);
                        return r.absolute ? new URL(o, window.location.origin).href : o
                    },
                    createPermalink(r = {}) {
                        let o = (0, i.Qi)({
                            repo: e,
                            commitish: l.currentOid,
                            action: r.action || n,
                            path: r.path || t
                        }) + function({
                            params: e,
                            hash: t
                        }) {
                            return u(e) + h(t)
                        }(r);
                        return r.absolute ? new URL(o, window.location.origin).href : o
                    },
                    isCurrentPagePermalink: () => !c && l.name === l.currentOid && window.location.pathname.includes(l.currentOid)
                }
            }
        },
        13816: (e, t, n) => {
            n.d(t, {
                BS: () => Z,
                Bx: () => T,
                DD: () => g,
                H1: () => f,
                Hm: () => R,
                KG: () => d,
                PO: () => p,
                TX: () => x,
                VC: () => k,
                Yo: () => w,
                bP: () => S,
                d5: () => h,
                dM: () => L,
                jP: () => C,
                nB: () => I,
                rH: () => j,
                yk: () => N,
                yw: () => b
            });
            var r = n(77417),
                i = n(51252),
                o = n(86283),
                a = n(56334),
                s = n(13570),
                l = n(86480);
            let c = "collapse-show-rows-styles",
                d = "read-only-cursor-text-area";

            function u(e, t) {
                return document.querySelector(`#${e}LC${t}`)
            }

            function h(e, t) {
                return document.querySelector(`main #${(0,s.o)(e,t)}`)
            }
            let m = new r.n7;

            function f(e) {
                return (0, i.iu)(m.has(e))
            }

            function p(e) {
                return (0, i.mU)(m, e)
            }

            function x(e, t, n, r) {
                if (!r) return "";
                let i = "";
                for (let t = 0; t < e.length; t++) i += `${y(e[t].startLine)} `;
                if (n && r.has(t)) {
                    let e = r.get(t);
                    if (e)
                        for (let t = 0; t < e.length; t++) i += `${y(e[t].startLine)} `
                }
                return i
            }

            function y(e) {
                return `child-of-line-${e}`
            }

            function g(e, t, n, r) {
                if (!n) return;
                let i = n.get(t);
                if (i)
                    for (let n of i) {
                        let i = e.get(n.endLine);
                        if (i)
                            for (let e of i) t > e.lineNumber && r(e, !1)
                    }
            }

            function b(e) {
                v(e, !1), m.delete(e)
            }

            function j(e) {
                v(e, !0), m.add(e)
            }

            function w() {
                let e = document.getElementById(c);
                e && (e.textContent = ""), m.clear()
            }

            function v(e, t) {
                let n = `.${y(e)} { display: none; } `;
                if (document.getElementById(c)) {
                    let e = document.getElementById(c);
                    if (t) e.textContent += n;
                    else {
                        let t = e ? .textContent || "";
                        t = t.replace(n, ""), e.textContent = t
                    }
                } else {
                    let e = document.createElement("style");
                    e.id = c, e.textContent = n, document.head.appendChild(e)
                }
            }

            function N(e, t) {
                if (e.length < 3) return !1;
                let n = t.split(" "),
                    r = n.includes("pl-ent") ? /\n|\s|[();&.=,]/ : /\n|\s|[();&.=",]/;
                return !(e.match(r) || n.includes("pl-c") || n.includes("pl-k"))
            }

            function C(e, t) {
                let n = null,
                    r = null,
                    i = null,
                    o = t;
                if (e.parentElement ? .classList.contains("react-file-line")) n = e.parentElement.getAttribute("data-line-number"), r = e.parentElement, i = e;
                else if (e.parentElement ? .parentElement ? .classList.contains("react-file-line")) n = e.parentElement.parentElement.getAttribute("data-line-number"), r = e.parentElement.parentElement, i = e.parentNode;
                else {
                    if (!e.parentElement ? .firstElementChild ? .classList.contains("react-file-line") || !(n = e.parentElement.firstElementChild.getAttribute("data-line-number")) || !parseInt(n, 10)) return;
                    return {
                        line: parseInt(n, 10) - 1,
                        column: null
                    }
                }
                if (n && parseInt(n, 10)) {
                    for (let e of r.childNodes) {
                        if (e === i) break;
                        o += e.textContent ? .length || 0
                    }
                    return {
                        line: parseInt(n, 10),
                        column: 0 !== o ? o + 1 : null
                    }
                }
            }

            function k(e, t, n) {
                let r = document.createElement("div");
                r.style.position = "absolute", r.style.visibility = "hidden", r.style.fontFamily = "ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace", r.style.fontSize = "12px", r.style.lineHeight = "20px", r.style.whiteSpace = "pre", r.style.tabSize = n.toString(), r.textContent = t.slice(0, e), document.body.appendChild(r);
                let i = r.clientWidth;
                return (document.body.removeChild(r), 0 === i && 0 !== e) ? e * l.Sg : i
            }

            function S(e, t, n, r, i) {
                if (e ? .start.line === n && e ? .start.column !== null) {
                    let o = (0, a.M9)({
                        start: e.start,
                        end: {
                            line: e.start.line,
                            column: e.end.line === n ? e.end.column : null
                        }
                    }, () => t);
                    if (o && o.startContainer.parentElement) {
                        let r = o ? .getBoundingClientRect().x - t.getBoundingClientRect().x;
                        return {
                            offset: r + 10,
                            width: e.end.line === n ? o.getBoundingClientRect().width : void 0
                        }
                    }
                    if (i) {
                        let t = k(e.start.column - 1, i, r),
                            o = e.end.line === n ? e.end.column : null;
                        return {
                            offset: t + 20,
                            width: e.end.line === n ? k(o ? o - 1 : i.length - 1, i, r) - t : void 0
                        }
                    }
                } else if (e ? .end.line === n && e ? .end.column !== null) {
                    let n = (0, a.M9)({
                        start: {
                            line: e.end.line,
                            column: 0
                        },
                        end: e.end
                    }, () => t);
                    return n ? {
                        width: n.getBoundingClientRect().width + 10
                    } : {
                        width: k(e.end.column - 1, i, r) + 10
                    }
                }
            }

            function I(e) {
                let t = u("", e);
                return function(e) {
                    if (!e) return !1;
                    let t = e.getBoundingClientRect();
                    return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                }(t)
            }

            function R(e) {
                return u("", e)
            }

            function Z(e, t, n) {
                return Math.floor((e - t) / n) + 1
            }

            function T(e, t) {
                let n = 0,
                    r = t.length - 1;
                for (; n <= r;) {
                    let i = Math.floor((n + r) / 2),
                        o = t[i];
                    if (!o) break;
                    if (o.lineNumber === e) return i;
                    o.lineNumber < e ? n = i + 1 : r = i - 1
                }
                return -1
            }

            function L(e, t = 0) {
                if (void 0 === o.n4) return;
                let n = o.n4.getElementById("screenReaderAnnouncementDiv");
                if (n || function() {
                        if (void 0 === o.n4) return;
                        let e = o.n4.createElement("div");
                        e.classList.add("sr-only"), e.id = "screenReaderAnnouncementDiv", e.setAttribute("role", "alert"), e.setAttribute("aria-live", "assertive"), o.n4.body.appendChild(e)
                    }(), !(n = o.n4.getElementById("screenReaderAnnouncementDiv"))) return;
                let r = n.textContent === e ? `${e}\u00A0` : e;
                setTimeout(() => {
                    n && (n.textContent = r)
                }, t)
            }
        },
        21913: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = {
                "&:hover:not([disabled])": {
                    textDecoration: "none"
                },
                "&:focus:not([disabled])": {
                    textDecoration: "none"
                },
                "&:active:not([disabled])": {
                    textDecoration: "none"
                }
            }
        },
        43811: (e, t, n) => {
            n.d(t, {
                V: () => WebWorker
            });
            let WebWorker = class WebWorker {
                set onmessage(e) {
                    this.worker.onmessage = e
                }
                postMessage(e) {
                    this.worker.postMessage(e)
                }
                terminate() {
                    this.worker.terminate()
                }
                constructor(e, t) {
                    try {
                        this.worker = new Worker(e)
                    } catch (e) {
                        console.warn("Web workers are not available. Please enable web workers to benefit from the improved performance."), this.worker = new MainThreadWorker(t)
                    }
                }
            };
            let MainThreadWorker = class MainThreadWorker {
                async postMessage(e) {
                    if (this.terminated) return;
                    let t = {
                        data: this.job({
                            data: e
                        })
                    };
                    this.onmessage ? .(t)
                }
                terminate() {
                    this.terminated = !0
                }
                constructor(e) {
                    this.job = e, this.terminated = !1
                }
            }
        },
        69202: (e, t, n) => {
            let r;
            n.d(t, {
                G: () => j
            });
            var i = n(21461);
            let AliveSession = class AliveSession extends i.a2 {
                getUrlFromRefreshUrl() {
                    return o(this.refreshUrl)
                }
                constructor(e, t, n, r) {
                    super(e, () => this.getUrlFromRefreshUrl(), n, r), this.refreshUrl = t
                }
            };
            async function o(e) {
                let t = await a(e);
                return t && t.url && t.token ? s(t.url, t.token) : null
            }
            async function a(e) {
                let t = await fetch(e, {
                    headers: {
                        Accept: "application/json"
                    }
                });
                if (t.ok) return t.json();
                if (404 === t.status) return null;
                throw Error("fetch error")
            }
            async function s(e, t) {
                let n = await fetch(e, {
                    method: "POST",
                    mode: "same-origin",
                    headers: {
                        "Scoped-CSRF-Token": t
                    }
                });
                if (n.ok) return n.text();
                throw Error("fetch error")
            }
            var l = n(46263),
                c = n(4412),
                d = n(44544),
                u = n(22490),
                h = n(71643),
                m = n(7180);
            let f = "alive";
            let InvalidSourceRelError = class InvalidSourceRelError extends m.d {};
            let p = u.ZO.createPolicy(f, {
                createScriptURL: e => m.O.apply({
                    policy: () => {
                        if (!(0, h.B)()) return e;
                        if (!e.startsWith("/")) throw new InvalidSourceRelError("Alive worker src URL must start with a slash");
                        return e
                    },
                    policyName: f,
                    fallback: e,
                    fallbackOnError: !0
                })
            });

            function x(e, {
                channel: t,
                type: n,
                data: r
            }) {
                for (let i of e) i.dispatchEvent(new CustomEvent(`socket:${n}`, {
                    bubbles: !1,
                    cancelable: !1,
                    detail: {
                        name: t,
                        data: r
                    }
                }))
            }
            let y = class AliveSessionProxy {
                subscribe(e) {
                    let t = this.subscriptions.add(...e);
                    t.length && this.worker.port.postMessage({
                        subscribe: t
                    });
                    let n = new Set(t.map(e => e.name)),
                        r = e.reduce((e, t) => {
                            let r = t.topic.name;
                            return (0, i.A)(r) && !n.has(r) && e.add(r), e
                        }, new Set);
                    r.size && this.worker.port.postMessage({
                        requestPresence: Array.from(r)
                    })
                }
                unsubscribeAll(...e) {
                    let t = this.subscriptions.drain(...e);
                    t.length && this.worker.port.postMessage({
                        unsubscribe: t
                    });
                    let n = this.presenceMetadata.removeSubscribers(e);
                    this.sendPresenceMetadataUpdate(n)
                }
                updatePresenceMetadata(e) {
                    let t = new Set;
                    for (let n of e) this.presenceMetadata.setMetadata(n), t.add(n.channelName);
                    this.sendPresenceMetadataUpdate(t)
                }
                sendPresenceMetadataUpdate(e) {
                    if (!e.size) return;
                    let t = [];
                    for (let n of e) t.push({
                        channelName: n,
                        metadata: this.presenceMetadata.getChannelMetadata(n)
                    });
                    this.worker.port.postMessage({
                        updatePresenceMetadata: t
                    })
                }
                online() {
                    this.worker.port.postMessage({
                        online: !0
                    })
                }
                offline() {
                    this.worker.port.postMessage({
                        online: !1
                    })
                }
                hangup() {
                    this.worker.port.postMessage({
                        hangup: !0
                    })
                }
                receive(e) {
                    let {
                        channel: t
                    } = e;
                    if ("presence" === e.type) {
                        let n = this.notifyPresenceDebouncedByChannel.get(t);
                        n || (n = (0, l.D)((e, n) => {
                            this.notify(e, n), this.notifyPresenceDebouncedByChannel.delete(t)
                        }, 100), this.notifyPresenceDebouncedByChannel.set(t, n)), n(this.subscriptions.subscribers(t), e);
                        return
                    }
                    this.notify(this.subscriptions.subscribers(t), e)
                }
                constructor(e, t, n, r, o) {
                    this.subscriptions = new i.SubscriptionSet, this.presenceMetadata = new i.ah, this.notifyPresenceDebouncedByChannel = new Map, this.notify = o, this.worker = new SharedWorker(e, `github-socket-worker-v2-${r}`), this.worker.port.onmessage = ({
                        data: e
                    }) => this.receive(e), this.worker.port.postMessage({
                        connect: {
                            url: t,
                            refreshUrl: n
                        }
                    })
                }
            };
            async function g() {
                let e = function() {
                    let e = document.head.querySelector("link[rel=shared-web-socket-src]") ? .getAttribute("href") ? ? "";
                    try {
                        return p.createScriptURL(e)
                    } catch (e) {
                        if (e instanceof InvalidSourceRelError) return null;
                        throw e
                    }
                }();
                if (!e) return;
                let t = document.head.querySelector("link[rel=shared-web-socket]") ? .href ? ? null;
                if (!t) return;
                let n = document.head.querySelector("link[rel=shared-web-socket]") ? .getAttribute("data-refresh-url") ? ? null;
                if (!n) return;
                let r = document.head.querySelector("link[rel=shared-web-socket]") ? .getAttribute("data-session-id") ? ? null;
                if (!r) return;
                let i = (() => {
                    if ("SharedWorker" in window && "true" !== (0, d.Z)("localStorage").getItem("bypassSharedWorker")) try {
                        return new y(e, t, n, r, x)
                    } catch (e) {}
                    return new AliveSession(t, n, !1, x)
                })();
                return window.addEventListener("online", () => i.online()), window.addEventListener("offline", () => i.offline()), window.addEventListener("pagehide", () => {
                    "hangup" in i && i.hangup()
                }), i
            }
            async function b() {
                return await c.x, g()
            }

            function j() {
                return r || (r = b())
            }
        },
        83991: (e, t, n) => {
            n.d(t, {
                s: () => i
            });
            var r = n(21461);

            function i(e, t, n) {
                if (!e) throw Error("Not connected to alive");
                if (!t) throw Error("No channel name");
                let i = r.Topic.parse(t);
                if (!i) throw Error("Invalid channel name");
                let o = {
                    subscriber: {
                        dispatchEvent: e => {
                            if (e instanceof CustomEvent) {
                                let t = e.detail;
                                n(t.data)
                            }
                        }
                    },
                    topic: i
                };
                return e.subscribe([o]), {
                    unsubscribe: () => e.unsubscribeAll(o.subscriber)
                }
            }
        },
        99550: (e, t, n) => {
            n.d(t, {
                l: () => o,
                p: () => i
            });
            let r = !0;

            function i(e) {
                r = e
            }

            function o() {
                return r
            }
        },
        64325: (e, t, n) => {
            function r(e) {
                return i(e)[0]
            }

            function i(e) {
                let t = [];
                for (let n of function() {
                        try {
                            return document.cookie.split(";")
                        } catch {
                            return []
                        }
                    }()) {
                    let [r, i] = n.trim().split("=");
                    e === r && void 0 !== i && t.push({
                        key: r,
                        value: i
                    })
                }
                return t
            }

            function o(e, t, n = null, r = !1, i = "lax") {
                let o = document.domain;
                if (null == o) throw Error("Unable to get document domain");
                o.endsWith(".github.com") && (o = "github.com");
                let a = "https:" === location.protocol ? "; secure" : "",
                    s = n ? `; expires=${n}` : "";
                !1 === r && (o = `.${o}`);
                try {
                    document.cookie = `${e}=${t}; path=/; domain=${o}${s}${a}; samesite=${i}`
                } catch {}
            }

            function a(e, t = !1) {
                let n = document.domain;
                if (null == n) throw Error("Unable to get document domain");
                n.endsWith(".github.com") && (n = "github.com");
                let r = new Date().getTime(),
                    i = new Date(r - 1).toUTCString(),
                    o = "https:" === location.protocol ? "; secure" : "",
                    a = `; expires=${i}`;
                !1 === t && (n = `.${n}`);
                try {
                    document.cookie = `${e}=''; path=/; domain=${n}${a}${o}`
                } catch {}
            }
            n.d(t, {
                $1: () => i,
                d8: () => o,
                ej: () => r,
                kT: () => a
            })
        },
        1640: (e, t, n) => {
            n.d(t, {
                Aq: () => s,
                L4: () => r,
                YZ: () => o,
                cw: () => i,
                d0: () => a
            });
            let OpenCopilotChatEvent = class OpenCopilotChatEvent extends Event {
                constructor(e) {
                    super("open-copilot-chat", {
                        bubbles: !1,
                        cancelable: !0
                    }), this.payload = e
                }
            };
            let AddCopilotChatReferenceEvent = class AddCopilotChatReferenceEvent extends Event {
                constructor(e, t = !1) {
                    super("add-copilot-chat-reference", {
                        bubbles: !1,
                        cancelable: !0
                    }), this.reference = e, this.openPanel = t
                }
            };

            function r(e) {
                window.dispatchEvent(new OpenCopilotChatEvent(e))
            }

            function i(e, t = !1) {
                window.dispatchEvent(new AddCopilotChatReferenceEvent(e, t))
            }

            function o(e) {
                return window.addEventListener("open-copilot-chat", e), () => {
                    window.removeEventListener("open-copilot-chat", e)
                }
            }

            function a(e) {
                return window.addEventListener("add-copilot-chat-reference", e), () => {
                    window.removeEventListener("add-copilot-chat-reference", e)
                }
            }

            function s(e) {
                return window.addEventListener("search-copilot-chat", e), () => {
                    window.removeEventListener("search-copilot-chat", e)
                }
            }
        },
        790: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            let r = {
                explain: "explain",
                conversation: "conversation",
                suggest: "suggest",
                askDocs: "ask-docs",
                discussFileDiff: "discuss-file-diff",
                explainFileDiff: "explain-file-diff"
            }
        },
        77706: (e, t, n) => {
            function r(e) {
                return `line-${e}`
            }

            function i(e, t, n) {
                return `${e}${"left"===t?"L":"R"}${n}`
            }

            function o(e) {
                return "DELETION" === e ? "left" : "right"
            }

            function a(e, t = !1, n = !1) {
                if (n) return "var(--bgColor-attention-muted, var(--color-attention-subtle))";
                switch (e) {
                    case "ADDITION":
                        return t ? "var(--diffBlob-addition-bgColor-num, var(--color-diff-blob-addition-num-bg))" : "var(--diffBlob-addition-bgColor-line, var(--color-diff-blob-addition-line-bg))";
                    case "DELETION":
                        return t ? "var(--diffBlob-deletion-bgColor-num, var(--color-diff-blob-deletion-num-bg))" : "var(--diffBlob-deletion-bgColor-line, var(--color-diff-blob-deletion-line-bg))";
                    case "HUNK":
                    case "EMPTY":
                        return t ? "var(--diffBlob-hunk-bgColor-num, var(--color-diff-blob-hunk-num-bg))" : "var(--bgColor-accent-muted, var(--color-accent-subtle))";
                    default:
                        return
                }
            }

            function s(e) {
                let t = 0;
                if (e)
                    for (let n of e) t = Math.max(t, n ? .left ? ? 0, n ? .right ? ? 0);
                let n = 8 * t.toString().length + 20;
                return Math.max(n, 40).toString()
            }
            n.d(t, {
                Gi: () => s,
                Jn: () => o,
                _N: () => i,
                dF: () => a,
                x1: () => r
            })
        },
        9458: (e, t, n) => {
            n.d(t, {
                Yj: () => c,
                G7: () => u,
                Sv: () => m,
                Gt: () => y,
                Cp: () => p,
                fx: () => x,
                iZ: () => g,
                wj: () => b,
                pE: () => j,
                _2: () => v
            });
            var r = n(85893),
                i = n(86010),
                o = n(93062),
                a = n(77706);
            let s = e => {
                let {
                    dragging: t,
                    isHighlighted: n,
                    isLeftColumn: s,
                    colSpan: l,
                    line: c,
                    lineAnchor: d
                } = e, u = c.html, h = "";
                return ["ADDITION", "DELETION"].includes(c.type) && ["+", "-"].includes(u[0]) && (h = u[0], u = u.slice(1)), (0, r.jsx)("td", {
                    className: (0, i.W)("diff-text-cell", {
                        "border-left color-border-accent-emphasis": t && n,
                        "border-right": s && "HUNK" !== c.type
                    }),
                    colSpan: l,
                    id: d ? (0, a.x1)(d) : void 0,
                    style: {
                        backgroundColor: (0, a.dF)(c.type, !1, n)
                    },
                    children: (0, r.jsxs)("code", {
                        "data-code-marker": h,
                        className: (0, i.W)("diff-text syntax-highlighted-line", {
                            addition: "ADDITION" === c.type,
                            deletion: "DELETION" === c.type
                        }),
                        children: [e.lineChild, (0, r.jsx)(o.sF, {
                            className: (0, i.W)("diff-text-inner", {
                                "color-fg-muted": "HUNK" === c.type
                            }),
                            html: u,
                            style: {
                                marginLeft: "CONTEXT" === c.type ? "-7px" : void 0
                            }
                        })]
                    })
                })
            };
            try {
                s.displayName || (s.displayName = "DiffText")
            } catch {}
            let l = ({
                ariaLabel: e,
                children: t,
                hasExpanderButton: n,
                lineType: o,
                colSpan: s,
                interactiveProps: l,
                isHighlighted: c,
                ...d
            }) => {
                let u = (0, r.jsx)("code", {
                    className: "pr-2",
                    children: t
                });
                return l && (u = (0, r.jsx)("button", {
                    className: "diff-line-number-button",
                    ...l,
                    "aria-label": e,
                    children: u
                })), (0, r.jsx)("td", {
                    "aria-label": l ? void 0 : e,
                    "data-line-number": !0,
                    className: (0, i.W)("diff-line-number", {
                        "has-expander": n,
                        clickable: !!l
                    }),
                    colSpan: s || 1,
                    style: {
                        backgroundColor: (0, a.dF)(o, !0, c)
                    },
                    ...d,
                    children: u
                })
            };
            try {
                l.displayName || (l.displayName = "LineNumber")
            } catch {}
            let c = ({
                dragging: e,
                isHighlighted: t,
                isLeftColumn: n,
                isSplit: i,
                lineAnchor: o,
                line: a,
                lineChild: c,
                onLineNumberClick: d
            }) => {
                let u = "CONTEXT" === a.type || "INJECTED_CONTEXT" === a.type,
                    h = "ADDITION" !== a.type,
                    m = "DELETION" !== a.type,
                    f = i && u ? n ? a.left : a.right : a.left;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(h || !i) && (0, r.jsx)(l, {
                        ariaLabel: `Line ${h?a.left?.toString():a.right?.toString()}`,
                        lineType: a.type,
                        interactiveProps: d ? {
                            onClick: d
                        } : null,
                        isHighlighted: t,
                        children: h && f
                    }), (m && !u || !i) && (0, r.jsx)(l, {
                        ariaLabel: `Line ${m?a.right?.toString():a.left?.toString()}`,
                        lineType: a.type,
                        interactiveProps: d ? {
                            onClick: d
                        } : null,
                        isHighlighted: t,
                        children: m && a.right
                    }), (0, r.jsx)(s, {
                        dragging: e,
                        isHighlighted: t,
                        isLeftColumn: n,
                        line: a,
                        lineAnchor: o,
                        lineChild: c
                    })]
                })
            };
            try {
                c.displayName || (c.displayName = "DiffLinePart")
            } catch {}
            var d = n(42483);

            function u() {
                return (0, r.jsx)(d.Z, {
                    "aria-hidden": "true",
                    as: "svg",
                    version: "1.1",
                    viewBox: "0 0 340 84",
                    xmlns: "http://www.w3.org/2000/svg",
                    sx: {
                        bottom: "0 !important",
                        clip: "rect(1px, 1px, 1px, 1px)",
                        clipPath: "inset(50%)",
                        height: "84px",
                        position: "absolute",
                        width: "320px"
                    },
                    children: (0, r.jsxs)("defs", {
                        children: [(0, r.jsxs)("clipPath", {
                            id: "diff-placeholder",
                            children: [(0, r.jsx)("rect", {
                                height: "11.9298746",
                                rx: "2",
                                width: "67.0175439",
                                x: "0",
                                y: "0"
                            }), (0, r.jsx)("rect", {
                                height: "11.9298746",
                                rx: "2",
                                width: "100.701754",
                                x: "18.9473684",
                                y: "47.7194983"
                            }), (0, r.jsx)("rect", {
                                height: "11.9298746",
                                rx: "2",
                                width: "37.8947368",
                                x: "0",
                                y: "71.930126"
                            }), (0, r.jsx)("rect", {
                                height: "11.9298746",
                                rx: "2",
                                width: "53.3333333",
                                x: "127.017544",
                                y: "48.0703769"
                            }), (0, r.jsx)("rect", {
                                height: "11.9298746",
                                rx: "2",
                                width: "72.9824561",
                                x: "187.719298",
                                y: "48.0703769"
                            }), (0, r.jsx)("rect", {
                                height: "11.9298746",
                                rx: "2",
                                width: "140.350877",
                                x: "76.8421053",
                                y: "0"
                            }), (0, r.jsx)("rect", {
                                height: "11.9298746",
                                rx: "2",
                                width: "140.350877",
                                x: "17.8947368",
                                y: "23.8597491"
                            }), (0, r.jsx)("rect", {
                                height: "11.9298746",
                                rx: "2",
                                width: "173.684211",
                                x: "166.315789",
                                y: "23.8597491"
                            })]
                        }), (0, r.jsxs)("linearGradient", {
                            id: "animated-diff-gradient",
                            spreadMethod: "reflect",
                            x1: "0",
                            x2: "0",
                            y1: "0",
                            y2: "1",
                            children: [(0, r.jsx)("stop", {
                                offset: "0",
                                stopColor: "#eee"
                            }), (0, r.jsx)("stop", {
                                offset: "0.2",
                                stopColor: "#eee"
                            }), (0, r.jsx)("stop", {
                                offset: "0.5",
                                stopColor: "#ddd"
                            }), (0, r.jsx)("stop", {
                                offset: "0.8",
                                stopColor: "#eee"
                            }), (0, r.jsx)("stop", {
                                offset: "1",
                                stopColor: "#eee"
                            }), (0, r.jsx)("animateTransform", {
                                attributeName: "y1",
                                dur: "1s",
                                repeatCount: "3",
                                values: "0%; 100%; 0"
                            }), (0, r.jsx)("animateTransform", {
                                attributeName: "y2",
                                dur: "1s",
                                repeatCount: "3",
                                values: "100%; 200%; 0"
                            })]
                        })]
                    })
                })
            }
            try {
                u.displayName || (u.displayName = "DiffPlaceholder")
            } catch {}
            let h = {
                addition: "diffstat.additionBg",
                deletion: "danger.emphasis",
                neutral: "neutral.bg"
            };

            function m({
                squares: e
            }) {
                return (0, r.jsx)(d.Z, {
                    sx: {
                        display: "flex"
                    },
                    children: e.map((e, t) => (0, r.jsx)(d.Z, {
                        "data-testid": `${e} diffstat`,
                        sx: {
                            backgroundColor: h[e],
                            width: "8px",
                            height: "8px",
                            marginLeft: "1px",
                            outlineOffset: "-1px",
                            borderStyle: "solid",
                            borderColor: "border.subtle",
                            borderWidth: "1px"
                        }
                    }, t))
                })
            }
            try {
                m.displayName || (m.displayName = "DiffSquares")
            } catch {}
            var f = n(85529);

            function p({
                currentLine: e,
                hunkButton: t,
                isLeftColumn: n,
                isSplit: i
            }) {
                return i && !n ? null : (0, r.jsxs)(r.Fragment, {
                    children: [t ? (0, r.jsx)(l, {
                        colSpan: i ? 1 : 2,
                        hasExpanderButton: !0,
                        lineType: e.type,
                        children: t
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(l, {
                            lineType: e.type,
                            children: (0, r.jsx)(f.KebabHorizontalIcon, {})
                        }), !i && (0, r.jsx)(l, {
                            lineType: e.type,
                            children: (0, r.jsx)(f.KebabHorizontalIcon, {})
                        })]
                    }), (0, r.jsx)(s, {
                        isHighlighted: !1,
                        isLeftColumn: !0,
                        colSpan: i ? 3 : void 0,
                        line: e
                    })]
                })
            }
            try {
                p.displayName || (p.displayName = "HunkHeaderDiffLine")
            } catch {}

            function x() {
                return (0, r.jsx)("div", {
                    className: "hunk-kebab-icon pr-2 pb-1",
                    children: (0, r.jsx)(f.KebabHorizontalIcon, {})
                })
            }
            try {
                x.displayName || (x.displayName = "HunkKebabIcon")
            } catch {}

            function y({
                isLeftColumn: e
            }) {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(l, {
                        lineType: "EMPTY"
                    }), (0, r.jsx)("td", {
                        className: (0, i.W)("empty-diff-line", {
                            "border-right": e
                        }),
                        colSpan: 1
                    })]
                })
            }
            try {
                y.displayName || (y.displayName = "EmptyDiffLine")
            } catch {}

            function g(e) {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("thead", {
                        hidden: !0,
                        children: (0, r.jsxs)("tr", {
                            children: [(0, r.jsx)("th", {
                                scope: "col",
                                children: "Original file line number"
                            }), (0, r.jsx)("th", {
                                scope: "col",
                                children: "Original file line"
                            }), (0, r.jsx)("th", {
                                scope: "col",
                                children: "Diff line number"
                            }), (0, r.jsx)("th", {
                                scope: "col",
                                children: "Diff line change"
                            })]
                        })
                    }), (0, r.jsxs)("colgroup", {
                        children: [(0, r.jsx)("col", {
                            width: e.lineWidth
                        }), (0, r.jsx)("col", {}), (0, r.jsx)("col", {
                            width: e.lineWidth
                        }), (0, r.jsx)("col", {})]
                    }), (0, r.jsx)("tbody", {
                        children: e.children
                    })]
                })
            }
            try {
                g.displayName || (g.displayName = "SplitDiffTable")
            } catch {}

            function b(e) {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("thead", {
                        hidden: !0,
                        children: (0, r.jsxs)("tr", {
                            children: [(0, r.jsx)("th", {
                                scope: "col",
                                children: "Original file line number"
                            }), (0, r.jsx)("th", {
                                scope: "col",
                                children: "Diff line number"
                            }), (0, r.jsx)("th", {
                                scope: "col",
                                children: "Diff line change"
                            })]
                        })
                    }), (0, r.jsxs)("colgroup", {
                        children: [(0, r.jsx)("col", {
                            width: e.lineWidth
                        }), (0, r.jsx)("col", {
                            width: e.lineWidth
                        }), (0, r.jsx)("col", {
                            width: "100%"
                        })]
                    }), (0, r.jsx)("tbody", {
                        children: e.children
                    })]
                })
            }
            try {
                b.displayName || (b.displayName = "UnifiedDiffTable")
            } catch {}

            function j(e, t) {
                let n, r, i;
                let o = e.slice(1).search(/\S/) || 0;
                return e.includes("	") && (n = e.split(RegExp("	")).length - 1), {
                    getPaddingLeft: function() {
                        return r || (r = n ? `${t*n*7}px` : o < 1 ? "0px" : `${7*o}px`)
                    },
                    getTextIndent: function() {
                        return i || (i = n ? `-${t*n*7+t}px` : o < 1 ? "0px" : `-${7*o+.5}px`)
                    }
                }
            }

            function w(e) {
                return "LEFT" === e ? "-" : "RIGHT" === e ? "+" : ""
            }

            function v({
                startDiffSide: e,
                endDiffSide: t,
                originalStartLine: n,
                originalEndLine: r
            }) {
                return e && t && "number" == typeof n && "number" == typeof r ? 0 === n && 1 === r && e === t ? "-1 to +1" : e === t && n === r ? `${w(e)}${n}` : `${w(e)}${n} to ${w(t)}${r}` : ""
            }
        },
        17920: (e, t, n) => {
            n.d(t, {
                eE: () => o
            });
            var r = n(86283);
            let i = {
                Android: "Android",
                iOS: "iOS",
                macOS: "macOS",
                Windows: "Windows",
                Linux: "Linux",
                Unknown: "Unknown"
            };

            function o() {
                return function() {
                    let e = i.Unknown,
                        t = !1;
                    if (r.iG) {
                        let n = r.iG.navigator,
                            o = n.userAgent,
                            a = n ? .userAgentData ? .platform || n.platform; - 1 !== ["Macintosh", "MacIntel", "MacPPC", "Mac68K", "macOS"].indexOf(a) ? e = i.macOS : -1 !== ["iPhone", "iPad", "iPod"].indexOf(a) ? e = i.iOS : -1 !== ["Win32", "Win64", "Windows", "WinCE"].indexOf(a) ? e = i.Windows : /Android/.test(o) ? e = i.Android : /Linux/.test(a) && (e = i.Linux), t = n ? .userAgentData ? .mobile ? ? (e === i.Android || e === i.iOS)
                    }
                    return {
                        os: e,
                        isAndroid: e === i.Android,
                        isIOS: e === i.iOS,
                        isMacOS: e === i.macOS,
                        isWindows: e === i.Windows,
                        isLinux: e === i.Linux,
                        isDesktop: e === i.macOS || e === i.Windows || e === i.Linux,
                        isMobile: t
                    }
                }().isMacOS
            }
        },
        77417: (e, t, n) => {
            function r(e, t, n) {
                if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
                return t.get(e)
            }

            function i(e, t) {
                var n = r(e, t, "get");
                return n.get ? n.get.call(e) : n.value
            }

            function o(e, t, n) {
                ! function(e, t) {
                    if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t), t.set(e, n)
            }

            function a(e, t, n) {
                var i = r(e, t, "set");
                return ! function(e, t, n) {
                    if (t.set) t.set.call(e, n);
                    else {
                        if (!t.writable) throw TypeError("attempted to set read only private field");
                        t.value = n
                    }
                }(e, i, n), n
            }
            n.d(t, {
                fA: () => ObservableValue,
                n7: () => ObservableSet,
                vP: () => ObservableMap
            });
            var s = new WeakMap;
            let l = class ObservableBase {
                subscribe(e) {
                    return i(this, s).add(e), () => {
                        i(this, s).delete(e)
                    }
                }
                notify(e) {
                    for (let t of i(this, s)) t(e)
                }
                constructor() {
                    o(this, s, {
                        writable: !0,
                        value: void 0
                    }), a(this, s, new Set)
                }
            };
            var c = new WeakMap;
            let ObservableValue = class ObservableValue extends l {
                get value() {
                    return i(this, c)
                }
                set value(e) {
                    i(this, c) !== e && (a(this, c, e), this.notify(e))
                }
                constructor(e) {
                    super(), o(this, c, {
                        writable: !0,
                        value: void 0
                    }), a(this, c, e)
                }
            };
            var d = new WeakMap,
                u = new WeakMap;
            let ObservableSet = class ObservableSet extends l {
                get value() {
                    return i(this, d)
                }
                has(e) {
                    if (!i(this, u).has(e)) {
                        let t = new ObservableValue(i(this, d).has(e));
                        i(this, u).set(e, t)
                    }
                    return i(this, u).get(e)
                }
                add(e) {
                    i(this, d).has(e) || (i(this, d).add(e), i(this, u).has(e) && (i(this, u).get(e).value = !0), this.notify(i(this, d)))
                }
                delete(e) {
                    i(this, d).has(e) && (i(this, d).delete(e), i(this, u).has(e) && (i(this, u).get(e).value = !1), this.notify(i(this, d)))
                }
                clear() {
                    if (0 !== i(this, d).size) {
                        for (let e of (i(this, d).clear(), i(this, u).values())) e.value = !1;
                        this.notify(i(this, d))
                    }
                }
                constructor(...e) {
                    super(), o(this, d, {
                        writable: !0,
                        value: void 0
                    }), o(this, u, {
                        writable: !0,
                        value: void 0
                    }), a(this, u, new Map), a(this, d, new Set(...e))
                }
            };
            var h = new WeakMap,
                m = new WeakMap,
                f = new WeakMap;
            let ObservableMap = class ObservableMap extends l {
                get value() {
                    return i(this, h)
                }
                has(e) {
                    if (!i(this, m).has(e)) {
                        let t = new ObservableValue(i(this, h).has(e));
                        i(this, m).set(e, t)
                    }
                    return i(this, m).get(e)
                }
                get(e) {
                    if (!i(this, f).has(e)) {
                        let t = new ObservableValue(i(this, h).get(e));
                        i(this, f).set(e, t)
                    }
                    return i(this, f).get(e)
                }
                set(e, t) {
                    i(this, h).get(e) !== t && (i(this, h).set(e, t), i(this, m).has(e) && (i(this, m).get(e).value = !0), i(this, f).has(e) && (i(this, f).get(e).value = t), this.notify(i(this, h)))
                }
                delete(e) {
                    i(this, h).has(e) && (i(this, h).delete(e), i(this, m).has(e) && (i(this, m).get(e).value = !1), i(this, f).has(e) && (i(this, f).get(e).value = void 0), this.notify(i(this, h)))
                }
                clear() {
                    if (0 !== i(this, h).size) {
                        for (let e of (i(this, h).clear(), i(this, m).values())) e.value = !1;
                        for (let e of i(this, f).values()) e.value = void 0;
                        this.notify(i(this, h))
                    }
                }
                constructor(...e) {
                    super(), o(this, h, {
                        writable: !0,
                        value: void 0
                    }), o(this, m, {
                        writable: !0,
                        value: void 0
                    }), o(this, f, {
                        writable: !0,
                        value: void 0
                    }), a(this, m, new Map), a(this, f, new Map), a(this, h, new Map(...e))
                }
            }
        },
        2048: (e, t, n) => {
            n.d(t, {
                g: () => i,
                y: () => o
            });
            var r = n(17891);
            let i = () => r.M() ? .enabled_features ? ? {},
                o = e => !!i()[e]
        },
        51252: (e, t, n) => {
            n.d(t, {
                D_: () => c,
                Kq: () => a,
                iu: () => l,
                mU: () => s,
                yL: () => o
            });
            var r = n(67294),
                i = n(77417);

            function o(e) {
                let t = (0, r.useRef)(new i.fA(e));
                return t.current
            }

            function a(...e) {
                let t = (0, r.useRef)(new i.vP(...e));
                return t.current
            }

            function s(e, t) {
                let n = (0, r.useRef)(t);
                n.current = t, (0, r.useEffect)(() => e.subscribe(e => n.current(e)), [e])
            }

            function l(e) {
                let [t, n] = (0, r.useState)(e.value);
                return s(e, e => n(e)), t
            }

            function c(e, t) {
                let n = o(t(e.value));
                return s(e, e => {
                    n.value = t(e)
                }), n
            }
        },
        14714: (e, t, n) => {
            n.d(t, {
                IQ: () => r,
                Ju: () => i,
                iF: () => o
            });
            let r = e => {
                    if (e) {
                        if (e.startsWith("refs/tags/")) return "tag";
                        if (e.startsWith("refs/heads/")) return "branch"
                    }
                },
                i = (e, t) => "branch" === t ? `refs/heads/${e}` : "tag" === t ? `refs/tags/${e}` : e,
                o = e => {
                    if (!e) return;
                    let t = r(e);
                    if (!t) return e;
                    let [, , ...n] = e.split("/");
                    return n.join("/")
                }
        },
        75809: (e, t, n) => {
            n.d(t, {
                f: () => r
            });
            let r = e => ({
                "data-testid": e
            })
        },
        20684: (e, t, n) => {
            n.d(t, {
                o: () => h
            });
            var r, i = n(67294),
                o = n(37169),
                a = n(69202),
                s = n(83991),
                l = n(85893);
            let c = (0, i.createContext)(null),
                d = null;
            async function u(e, t) {
                let {
                    SubscriptionSet: r,
                    Topic: i
                } = await Promise.resolve().then(n.bind(n, 21461)), o = i.parse(e);
                if (!o) throw Error('Invalid channel name. Did you forget to sign it with `signChannel("channel-name")`?');
                return d || (d = new r), d.add({
                    topic: o,
                    subscriber: t
                }), {
                    unsubscribe: () => {
                        d ? .delete({
                            topic: o,
                            subscriber: t
                        })
                    }
                }
            }
            try {
                c.displayName || (c.displayName = "AliveTestContext")
            } catch {}
            try {
                (r = function({
                    children: e,
                    initialMessages: t
                }) {
                    return (0, i.useEffect)(() => {
                        if (t)
                            for (let [e, n] of t) setTimeout(() => {
                                (function(e, t) {
                                    if (null === d) throw Error('Test helper `dispatchAliveTestMessage` called outside `AliveTestProvider`. Please wrap your component under test in `AliveTestProvider` from "@github-ui/use-alive/test-utils".');
                                    let n = Array.from(d.subscribers(e));
                                    for (let e of n) e(t)
                                })(e, n)
                            }, 0);
                        return () => {
                            d = null
                        }
                    }), (0, l.jsx)(c.Provider, {
                        value: u,
                        children: e
                    })
                }).displayName || (r.displayName = "AliveTestProvider")
            } catch {}

            function h(e, t) {
                let n = (0, o.Z)(),
                    r = (0, i.useContext)(c);
                (0, i.useEffect)(() => {
                    let i = () => {},
                        o = !1;
                    return async function() {
                        if ("function" == typeof r) {
                            let n = await r(e, t);
                            n && (i = n.unsubscribe);
                            return
                        }
                        try {
                            let r = await (0, a.G)();
                            if (o) return;
                            let l = (0, s.s)(r, e, t);
                            l ? .unsubscribe && (n() ? i = l.unsubscribe : l.unsubscribe())
                        } catch (e) {
                            console.error(e)
                        }
                    }(), () => {
                        o = !0, i()
                    }
                }, [e, t, n, r])
            }
        },
        53664: (e, t, n) => {
            n.d(t, {
                w: () => s,
                z: () => a
            });
            var r = n(67294),
                i = n(95253),
                o = n(87487);

            function a() {
                let e = (0, r.useContext)(o.f);
                if (!e) throw Error("useAnalytics must be used within an AnalyticsContext");
                let {
                    appName: t,
                    category: n,
                    metadata: a
                } = e;
                return {
                    sendAnalyticsEvent: (0, r.useCallback)((e, r, o = {}) => {
                        let s = {
                            react: !0,
                            app_name: t,
                            category: n,
                            ...a
                        };
                        (0, i.qP)(e, { ...s,
                            ...o,
                            target: r
                        })
                    }, [t, n, a])
                }
            }

            function s() {
                let {
                    sendAnalyticsEvent: e
                } = a();
                return {
                    sendClickAnalyticsEvent: (0, r.useCallback)((t = {}) => {
                        e("analytics.click", void 0, t)
                    }, [e])
                }
            }
        },
        6582: (e, t, n) => {
            n.d(t, {
                o: () => a
            });
            var r = n(78212),
                i = n(89445),
                o = n(67294);

            function a(e, t, n, a) {
                let [s, l] = (0, o.useState)({
                    loading: !0
                }), c = t && e && n && a ? (0, r.Qi)({
                    repo: {
                        name: t,
                        ownerLogin: e
                    },
                    commitish: n,
                    action: "file-contributors",
                    path: a
                }) : null;
                return (0, o.useEffect)(() => {
                    if (!c) return;
                    let e = !1,
                        t = async () => {
                            l({
                                loading: !0
                            });
                            let t = await (0, i.v)(c);
                            if (!e) try {
                                t.ok ? l({
                                    contributors: await t.json()
                                }) : l({
                                    error: !0
                                })
                            } catch (e) {
                                l({
                                    error: !0
                                })
                            }
                        };
                    return t(),
                        function() {
                            e = !0
                        }
                }, [c]), s
            }
        },
        88455: (e, t, n) => {
            n.d(t, {
                F: () => i
            });
            var r = n(73968);

            function i(e, t) {
                let {
                    csrf_tokens: n
                } = (0, r.T)();
                return n ? .[e] ? .[t]
            }
        },
        59807: (e, t, n) => {
            n.d(t, {
                V: () => i
            });
            var r = n(67294);

            function i(e) {
                (0, r.useEffect)(() => {
                    if (!e) return;
                    let t = document.querySelector(".footer");
                    if (t) return t.hidden = !0, () => {
                        t.hidden = !1
                    }
                }, [e])
            }
        },
        16685: (e, t, n) => {
            n.d(t, {
                f: () => i
            });
            var r = n(62073);

            function i(e) {
                let t = e.join(","),
                    [n] = (0, r.D)(() => {
                        let e = /Windows/.test(navigator.userAgent) ? "windows" : /Macintosh/.test(navigator.userAgent) ? "mac" : null;
                        return !!e && t.includes(e)
                    }, !1, [t]);
                return n
            }
        },
        64077: (e, t, n) => {
            n.d(t, {
                F: () => u,
                f: () => h
            });
            var r = n(15205),
                i = n(78212),
                o = n(55908),
                a = n(89445),
                s = n(67294);
            async function l(e) {
                let t = await (0, a.v)(e);
                return t.ok ? await t.json() : void 0
            }
            let c = new Map,
                d = (0, r.Z)(l, {
                    cache: c
                });

            function u() {
                c.clear()
            }

            function h(e, t, n, r) {
                let [a, l] = (0, s.useState)(), [c, h] = (0, s.useState)(!1), [m, f] = (0, s.useState)(!0), p = t && e && n && r ? (0, i.Qi)({
                    repo: {
                        name: t,
                        ownerLogin: e
                    },
                    commitish: n,
                    action: "latest-commit",
                    path: r
                }) : null;
                return (0, s.useEffect)(() => (document.addEventListener(o.Q.START, u), () => {
                    document.removeEventListener(o.Q.START, u)
                })), (0, s.useEffect)(() => {
                    let e = !1,
                        t = async () => {
                            if (!p) return;
                            h(!1), f(!0), l(void 0);
                            let t = await d(p);
                            if (!e) {
                                try {
                                    t ? l(t) : h(!0)
                                } catch (e) {
                                    h(!0)
                                }
                                f(!1)
                            }
                        };
                    return t(),
                        function() {
                            e = !0
                        }
                }, [p, n]), [a, m, c]
            }
        },
        56498: (e, t, n) => {
            n.d(t, {
                A: () => a,
                F: () => l
            });
            var r = n(67294),
                i = n(78720);
            let o = e => e;

            function a(e) {
                let t = r.useRef({}),
                    n = r.useRef({}),
                    a = (e, n) => {
                        t.current[e](n)
                    },
                    s = r.useRef(a);
                s.current = a;
                let l = r.useRef(new ResizeObserver(e => {
                    for (let t of e) {
                        let e = t.target,
                            n = "data-key",
                            r = e.getAttribute(n);
                        if (null === r) throw Error(`Value not found, for '${n}' attribute`);
                        s.current(r, e)
                    }
                }));
                r.useEffect(() => {
                    let e = l.current;
                    return () => {
                        e.disconnect()
                    }
                }, []);
                let {
                    size: c,
                    keyExtractor: d = o
                } = e, u = r.useMemo(() => {
                    let e = e => t => {
                            n.current[e] && l.current.unobserve(n.current[e]), t && (s.current(e, t), l.current.observe(t)), n.current[e] = t
                        },
                        t = {};
                    for (let n = 0; n < c; n++) {
                        let r = d(n);
                        t[r] = e(r)
                    }
                    return t
                }, [c, d]), h = (0, i.o)(e), m = h.virtualItems.map(e => (t.current[e.key] = e.measureRef, { ...e,
                    measureRef: u[e.key]
                }));
                return { ...h,
                    virtualItems: m
                }
            }
            var s = n(81738);

            function l({
                scrollToFn: e,
                horizontal: t,
                parentRef: n,
                useVirtualImpl: o = i.o,
                ...a
            }) {
                let l = (0, r.useRef)(window),
                    c = (0, r.useCallback)(() => {
                        let e = n.current ? .getBoundingClientRect(),
                            r = e ? .top ? ? 0,
                            i = e ? .left ? ? 0;
                        return t ? -1 * i : -1 * r
                    }, [t, n]),
                    d = (0, r.useCallback)(e => {
                        let r = (n.current ? .getBoundingClientRect().top ? ? 0) + window.scrollY,
                            i = e + r;
                        l.current ? .scroll({
                            top: t ? 0 : i,
                            left: t ? i : 0
                        })
                    }, [t, n]);
                return o({ ...a,
                    horizontal: t,
                    parentRef: n,
                    scrollToFn: e || d,
                    onScrollElement: l,
                    scrollOffsetFn: c,
                    useObserver: () => (function(e) {
                        let [t, n] = (0, r.useState)({
                            height: 0,
                            width: 0
                        }), i = e.current;
                        return (0, s.b)(() => {
                            if (!i) return;
                            let e = () => {
                                let e = {
                                    height: i.innerHeight,
                                    width: i.innerWidth
                                };
                                n(t => t.height !== e.height || t.width !== e.width ? e : t)
                            };
                            return e(), i.addEventListener("resize", e), () => {
                                i.removeEventListener("resize", e)
                            }
                        }, [i]), t
                    })(l)
                })
            }
        },
        22554: (e, t, n) => {
            n.d(t, {
                I: () => o
            });
            var r = n(85893),
                i = n(53467);

            function o({
                children: e
            }) {
                let t = (0, i.n)();
                return t ? (0, r.jsx)(r.Fragment, {
                    children: e
                }) : null
            }
            try {
                o.displayName || (o.displayName = "AllShortcutsEnabled")
            } catch {}
        },
        85844: (e, t, n) => {
            n.d(t, {
                y: () => v
            });
            var r, i = n(85893),
                o = n(32769),
                a = n(49713),
                s = n(75809),
                l = n(53664),
                c = n(89445),
                d = n(85529),
                u = n(89042),
                h = n(42483),
                m = n(2708),
                f = n(88216),
                p = n(62719),
                x = n(75308),
                y = n(97011),
                g = n(73290),
                b = n(67294),
                j = n(90874);
            let w = {
                    ORG_ADMIN: `For an organization, developers writing less boilerplate code means more productivity, while learning
  new technologies means delivering better customers solutions. Try it in Codespaces or your file editor.`,
                    ORG_MEMBER: `We noticed that you're personally paying for GitHub Copilot. Instead, ask your organization admin
  to purchase the business version of GitHub Copilot.`,
                    STANDARD: `Spend less time creating boilerplate and repetitive code patterns, and more time building great software.
  Try it in Codespaces or your favorite file editor.`
                },
                v = ({
                    view: e,
                    copilotInfo: t,
                    className: n
                }) => {
                    let {
                        documentationUrl: r,
                        notices: v,
                        userAccess: N
                    } = t ? ? {}, {
                        business: C,
                        orgHasCFBAccess: k,
                        userHasCFIAccess: S,
                        userHasOrgs: I,
                        userIsOrgAdmin: R,
                        userIsOrgMember: Z,
                        featureRequestInfo: T
                    } = N ? ? {}, {
                        codeViewPopover: L
                    } = v ? ? {}, {
                        sendClickAnalyticsEvent: E
                    } = (0, l.w)(), B = (0, j.x)(), {
                        isOrgOwned: _,
                        ownerLogin: D
                    } = (0, o.H)(), {
                        inProgress: F,
                        requested: O,
                        toggleFeatureRequest: A
                    } = (0, a.mG)(T), [P, M] = (0, b.useState)(!1), [H, $] = (0, b.useState)(!1), W = (0, b.useCallback)(() => M(!0), [M]), z = (0, b.useCallback)(() => M(!1), [M]), U = (0, b.useCallback)(() => N && _ && Z && !R && (!k || S) ? "Your organization can pay for GitHub Copilot" : "Code 55% faster with GitHub Copilot", [k, _, N, S, R, Z]), G = () => T ? .showFeatureRequest ? O ? (0, i.jsx)(a.VH, {
                        inProgress: F,
                        toggleFeatureRequest: A
                    }) : (0, i.jsx)(a.Bb, {
                        inProgress: F,
                        toggleFeatureRequest: A,
                        featureName: T ? .featureName
                    }) : null, V = () => B && D === B.login ? "owner" : R ? "admin" : Z ? "member" : "personal", q = () => {
                        B && E({
                            category: "copilot_popover_code_view",
                            action: `click_to_open_popover_${e}`,
                            label: `ref_cta:open_copilot_popover;owner:${D};relationship:${V()}`
                        })
                    }, K = (t, n) => {
                        E({
                            category: "copilot_popover_code_view",
                            action: t,
                            label: `ref_cta:${n};ref_loc:code_view_${e}`
                        })
                    }, Y = () => {
                        let t = `${_?"org_":""}code_view_${e}${R?"_org_admin":""}`;
                        E({
                            category: "copilot_popover_code_view",
                            action: "click_to_dismiss_copilot_popover_forever",
                            label: `ref_cta:dont_show_again;ref_loc:${t}`
                        })
                    }, Q = () => {
                        let e = N ? .userHasOrgs ? ? !1;
                        E({
                            category: "copilot_popover_code_view",
                            action: `click_to_go_to_copilot_for_${e?"business":"individuals"}_info`,
                            label: "ref_cta:learn_more;ref_loc:code_view"
                        })
                    };
                    return H || !t ? null : (0, i.jsx)(h.Z, {
                        className: n,
                        children: (0, i.jsx)(m.w, {
                            onOpen: W,
                            onClose: z,
                            open: P,
                            overlayProps: {
                                role: "dialog",
                                sx: {
                                    overflow: "inherit"
                                }
                            },
                            focusZoneSettings: {
                                disabled: !0
                            },
                            renderAnchor: e => (0, i.jsx)(f.r, { ...e,
                                ...(0, s.f)("copilot-popover-button"),
                                leadingVisual: d.CopilotIcon,
                                onClick: () => {
                                    M(!P), q()
                                },
                                size: "small",
                                sx: {
                                    color: "fg.default",
                                    display: ["none", "none", "none", "none", "block"]
                                },
                                variant: "invisible",
                                children: U()
                            }),
                            children: (0, i.jsxs)(p.Z, { ...(0, s.f)("copilot-popover-content"),
                                caret: "top",
                                sx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    fontSize: 1,
                                    justifyContent: "space-between",
                                    padding: 4,
                                    width: "350px"
                                },
                                children: [(0, i.jsx)(x.Z, {
                                    as: "h2",
                                    sx: {
                                        fontSize: 1,
                                        fontWeight: "bold",
                                        pb: 3
                                    },
                                    children: "Code 55% faster with GitHub Copilot"
                                }), (0, i.jsxs)(h.Z, {
                                    sx: {
                                        fontSize: 1,
                                        fontWeight: "normal",
                                        pb: 3
                                    },
                                    children: [(0, i.jsx)(y.Z, { ...(0, s.f)("copilot-popover-body-text"),
                                        children: (() => {
                                            if (N && _) {
                                                if (R) return w.ORG_ADMIN;
                                                if (Z && S) return w.ORG_MEMBER
                                            }
                                            return w.STANDARD
                                        })()
                                    }), (0, i.jsx)(g.Z, { ...(0, s.f)("copilot-popover-content-learn-more"),
                                        "aria-label": "Click this link to learn more about copilot. This action opens in a new tab.",
                                        target: "_blank",
                                        href: r,
                                        onClick: () => Q(),
                                        sx: {
                                            marginLeft: "8px"
                                        },
                                        children: "Learn more"
                                    })]
                                }), (0, i.jsxs)(h.Z, {
                                    sx: {
                                        alignItems: "center",
                                        display: "flex",
                                        flexDirection: "row"
                                    },
                                    children: [(() => {
                                        let e = !!C || S;
                                        return e || _ && (!_ || Z) ? Z && !k && R ? (0, i.jsx)(u.Q, {
                                            type: "button",
                                            href: `/github-copilot/business_signup/organization/payment?org=${D}`,
                                            onClick: () => K("click_to_buy_copilot_for_business", "get_github_copilot"),
                                            children: "Get GitHub Copilot"
                                        }) : T ? (0, i.jsx)(G, {}) : null : I ? (0, i.jsx)(u.Q, {
                                            type: "button",
                                            href: "/settings/copilot",
                                            onClick: () => K("click_to_go_to_copilot_settings", "get_github_copilot"),
                                            children: "Get GitHub Copilot"
                                        }) : (0, i.jsx)(u.Q, {
                                            type: "button",
                                            href: "/github-copilot/signup",
                                            onClick: () => K("click_to_go_to_copilot_trial_signup", "start_a_free_trial"),
                                            children: "Start a free trial"
                                        })
                                    })(), (0, i.jsx)(f.r, { ...(0, s.f)("copilot-popover-dismiss-button"),
                                        variant: "invisible",
                                        onClick: () => {
                                            L && ((0, c.Q)(L.dismissPath, {
                                                method: Z ? "DELETE" : "POST"
                                            }), Y(), $(!0))
                                        },
                                        sx: {
                                            cursor: "pointer",
                                            fontSize: 1,
                                            fontWeight: "bold",
                                            textDecorationLine: "none",
                                            marginLeft: "8px"
                                        },
                                        children: "Don't show again"
                                    })]
                                })]
                            })
                        })
                    })
                };
            try {
                v.displayName || (v.displayName = "CopilotPopover")
            } catch {}
            try {
                (r = FeatureRequest).displayName || (r.displayName = "FeatureRequest")
            } catch {}
        },
        90342: (e, t, n) => {
            n.d(t, {
                P: () => i
            });
            var r = n(85893);

            function i({
                buttonFocusId: e,
                buttonHotkey: t,
                onButtonClick: n,
                buttonTestLabel: i,
                onlyAddHotkeyScopeButton: o
            }) {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("button", {
                        hidden: !0,
                        "data-testid": i || "",
                        "data-hotkey": t,
                        onClick: n,
                        "data-hotkey-scope": e
                    }), !o && (0, r.jsx)("button", {
                        hidden: !0,
                        "data-hotkey": t,
                        onClick: n
                    })]
                })
            }
            try {
                i.displayName || (i.displayName = "DuplicateOnKeydownButton")
            } catch {}
        },
        4220: (e, t, n) => {
            n.d(t, {
                s: () => o
            });
            var r = n(85893),
                i = n(42483);
            let o = ({
                children: e,
                sx: t,
                ...n
            }) => (0, r.jsx)(i.Z, {
                sx: {
                    backgroundColor: "canvas.default",
                    border: "1px solid",
                    borderColor: "border.default",
                    borderRadius: "6px",
                    contain: "paint",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    minHeight: 0,
                    maxHeight: "100vh",
                    overflowY: "auto",
                    right: 0,
                    ...t
                },
                ...n,
                children: e
            });
            try {
                o.displayName || (o.displayName = "Panel")
            } catch {}
        },
        92562: (e, t, n) => {
            n.d(t, {
                m: () => a
            });
            var r = n(85893),
                i = n(42483),
                o = n(74121);
            let a = () => (0, r.jsx)(i.Z, {
                sx: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    py: 3
                },
                "data-testid": "suspense-spinner",
                children: (0, r.jsx)(o.Z, {
                    "aria-label": "Loading"
                })
            });
            try {
                a.displayName || (a.displayName = "LoadingFallback")
            } catch {}
        },
        40856: (e, t, n) => {
            n.d(t, {
                P: () => h
            });
            var r = n(85893),
                i = n(86283),
                o = n(88455),
                a = n(85529),
                s = n(42483),
                l = n(98833),
                c = n(97011),
                d = n(88216),
                u = n(73290);

            function h({
                binary: e,
                helpUrl: t,
                webCommitInfo: n
            }) {
                let {
                    shouldFork: h,
                    lockedOnMigration: m,
                    shouldUpdate: f
                } = n, p = i.ssrSafeLocation.pathname;
                p.endsWith("/") && (p = p.slice(0, -1));
                let x = p + i.ssrSafeLocation.search,
                    y = (0, o.F)(x, "post"),
                    g = m ? {
                        message: "This repository is currently being migrated.",
                        description: "Sorry, you\u2019re not able to edit this repository while the migration is in progress.",
                        icon: a.LockIcon
                    } : h ? {
                        message: "You need to fork this repository to propose changes.",
                        description: "Sorry, you\u2019re not able to edit this repository directly\u2014you need to fork it and propose your changes from there instead.",
                        icon: a.GitBranchIcon
                    } : f ? {
                        message: "Sorry, it looks like your fork is outdated!",
                        description: "You\u2019ll have to bring it up to date before you can propose changes.",
                        icon: a.AlertIcon
                    } : e ? {
                        message: "Binary file content is not editable.",
                        description: "But you can still rename or move it.",
                        icon: a.PencilIcon
                    } : null;
                return g ? (0, r.jsxs)(s.Z, {
                    sx: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        m: 4
                    },
                    children: [(0, r.jsx)(l.Z, {
                        icon: g.icon,
                        size: "medium",
                        sx: {
                            color: "fg.muted",
                            mb: 2
                        }
                    }), (0, r.jsx)(c.Z, {
                        as: "h3",
                        sx: {
                            mb: 1
                        },
                        children: g.message
                    }), (0, r.jsx)(c.Z, {
                        sx: {
                            mb: 2
                        },
                        children: g.description
                    }), (h || f) && (0, r.jsxs)("form", {
                        "data-turbo": "false",
                        method: "post",
                        action: x,
                        "data-testid": "edit-issues-form",
                        children: [(0, r.jsx)("input", {
                            hidden: !0,
                            name: "authenticity_token",
                            value: y,
                            readOnly: !0
                        }), (0, r.jsx)(d.r, {
                            type: "submit",
                            variant: "primary",
                            children: h ? "Fork this repository" : "Update your fork"
                        })]
                    }), h && (0, r.jsx)(u.Z, {
                        href: `${t}/articles/fork-a-repo`,
                        children: "Learn more about forks"
                    })]
                }) : null
            }
            try {
                h.displayName || (h.displayName = "EditIssues")
            } catch {}
        },
        57338: (e, t, n) => {
            n.d(t, {
                r: () => o
            });
            var r = n(85893),
                i = n(51461);

            function o({
                forkName: e,
                forkOwner: t
            }) {
                return (0, r.jsxs)(i.Z, {
                    sx: {
                        mb: 3
                    },
                    "aria-live": "polite",
                    children: ["You\u2019re making changes in a project you don\u2019t have write access to. Submitting a change will write it to a new branch in your fork ", (0, r.jsx)("b", {
                        children: `${t}/${e}`
                    }), ", so you can send a pull request."]
                })
            }
            try {
                o.displayName || (o.displayName = "EditingForkBanner")
            } catch {}
        },
        81543: (e, t, n) => {
            n.d(t, {
                Ew: () => j,
                V1: () => N,
                d2: () => C,
                fN: () => v,
                fq: () => S,
                h7: () => y,
                hI: () => g,
                ud: () => k,
                v0: () => I,
                yB: () => w
            });
            var r = n(85893),
                i = n(86283),
                o = n(62073),
                a = n(85529),
                s = n(51461),
                l = n(98833),
                c = n(42483),
                d = n(73290),
                u = n(88216),
                h = n(65379);
            let m = /[\u202A-\u202E]|[\u2066-\u2069]/,
                f = /[\u202A-\u202E]|[\u2066-\u2069]/g,
                p = /([\u202A-\u202E]|[\u2066-\u2069])/g,
                x = new Map(Object.entries({
                    "\u202A": "U+202A",
                    "\u202B": "U+202B",
                    "\u202C": "U+202C",
                    "\u202D": "U+202D",
                    "\u202E": "U+202E",
                    "\u2066": "U+2066",
                    "\u2067": "U+2067",
                    "\u2068": "U+2068",
                    "\u2069": "U+2069"
                }));

            function y() {
                let [e] = (0, o.D)(() => i.iG, i.iG, []);
                if (!e) return null;
                let t = new URL(e.location.href, e.location.origin),
                    n = "1" === t.searchParams.get("h");
                return n ? t.searchParams.delete("h") : t.searchParams.set("h", "1"), (0, r.jsxs)(s.Z, {
                    full: !0,
                    variant: "warning",
                    sx: {
                        alignItems: "center",
                        display: "flex"
                    },
                    children: [(0, r.jsx)(l.Z, {
                        icon: a.AlertIcon
                    }), (0, r.jsxs)(c.Z, {
                        as: "span",
                        children: ["This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.", " ", (0, r.jsx)(d.Z, {
                            href: "https://github.co/hiddenchars",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "Learn more about bidirectional Unicode characters"
                        })]
                    }), (0, r.jsx)(u.r, {
                        as: "a",
                        onClick: () => {
                            window.location.href = t.href
                        },
                        size: "small",
                        sx: {
                            float: "right",
                            ml: "24px",
                            backgroundClip: "padding-box"
                        },
                        children: n ? "Hide revealed characters" : "Show hidden characters"
                    })]
                })
            }

            function g() {
                return (0, r.jsx)(h.Z, {
                    direction: "e",
                    text: "This line has hidden Unicode characters",
                    children: (0, r.jsx)(l.Z, {
                        icon: a.AlertIcon,
                        sx: {
                            mr: "12px"
                        }
                    })
                })
            }

            function b({
                char: e
            }) {
                return (0, r.jsx)(c.Z, {
                    as: "span",
                    className: "bidi-replacement padded",
                    children: e
                })
            }

            function j(e) {
                return `<span class="bidi-replacement" data-code-text="${e}"></span>`
            }

            function w(e) {
                return e.split(p)
            }

            function v(e) {
                if (!k(e)) return null;
                let t = w(e),
                    n = t.map(e => {
                        let t = x.get(e);
                        return t ? `<span class="bidi-replacement">${t}</span>` : e
                    });
                return n.join("")
            }

            function N(e) {
                return k(e) ? e.replaceAll(f, e => x.get(e) ? ? "") : e
            }

            function C(e) {
                if (!k(e)) return null;
                let t = w(e);
                return t.map((e, t) => {
                    let n = x.get(e);
                    return n ? (0, r.jsx)(b, {
                        char: n
                    }, t) : e
                })
            }

            function k(e) {
                return m.test(e)
            }

            function S() {
                if (!i.iG) return !1;
                let e = new URL(i.iG.location.href, i.iG.location.origin);
                return "1" === e.searchParams.get("h")
            }

            function I(e) {
                return x.get(e)
            }
            try {
                y.displayName || (y.displayName = "BidiAlert")
            } catch {}
            try {
                g.displayName || (g.displayName = "BidiTooltip")
            } catch {}
            try {
                b.displayName || (b.displayName = "BidiCharacter")
            } catch {}
        },
        50299: (e, t, n) => {
            n.d(t, {
                Xj: () => g,
                a: () => y,
                ew: () => x,
                hL: () => r,
                iC: () => f
            });
            var r, i = n(85893),
                o = n(78212),
                a = n(89445),
                s = n(85529),
                l = n(51461),
                c = n(98833),
                d = n(42483),
                u = n(88216),
                h = n(74390),
                m = n(67294);

            function f({
                errors: e,
                state: t
            }) {
                let [n, r] = (0, m.useState)(!1);
                return 0 === t ? (0, i.jsx)(l.Z, {
                    variant: "warning",
                    sx: {
                        mt: 3
                    },
                    children: "Failed to validate this CODEOWNERS file"
                }) : 1 === t ? (0, i.jsx)(l.Z, {
                    variant: "default",
                    sx: {
                        mt: 3
                    },
                    children: "Validating CODEOWNERS rules..."
                }) : 0 === e.length ? (0, i.jsx)(l.Z, {
                    variant: "success",
                    sx: {
                        mt: 3
                    },
                    children: "This CODEOWNERS file is valid."
                }) : (0, i.jsxs)(l.Z, {
                    variant: "warning",
                    sx: {
                        display: "flex",
                        flexDirection: "row",
                        mt: 3
                    },
                    children: [(0, i.jsx)(c.Z, {
                        icon: s.BugIcon
                    }), (0, i.jsxs)(d.Z, {
                        onClick: () => r(!n),
                        sx: {
                            cursor: "pointer",
                            display: "flex",
                            p: 0
                        },
                        children: ["This CODEOWNERS file contains errors", (0, i.jsx)(u.r, {
                            as: "a",
                            sx: {
                                alignSelf: "center",
                                borderRadius: "1px",
                                height: "12px",
                                lineHeight: "6px",
                                ml: 1,
                                px: "5px",
                                py: 0
                            },
                            children: "..."
                        })]
                    }), (0, i.jsxs)(h.Z, {
                        isOpen: n,
                        onDismiss: () => r(!1),
                        sx: {
                            display: "flex",
                            flexDirection: "column",
                            width: "640px"
                        },
                        children: [(0, i.jsx)(h.Z.Header, {
                            children: "CODEOWNERS errors"
                        }), (0, i.jsx)(d.Z, {
                            sx: {
                                overflowX: "hidden",
                                overflowY: "auto",
                                p: 3
                            },
                            children: e.map((e, t) => (0, i.jsx)(p, {
                                error: e
                            }, t))
                        })]
                    })]
                })
            }

            function p({
                error: e
            }) {
                return (0, i.jsxs)(d.Z, {
                    sx: {
                        padding: "16px",
                        listStyleType: "none",
                        borderTop: "1px solid var(--borderColor-muted, var(--color-border-muted))"
                    },
                    children: [`${e.kind} on line ${e.line}${e.suggestion?`: ${e.suggestion}`:""}`, (0, i.jsx)(d.Z, {
                        as: "pre",
                        sx: {
                            mt: 3
                        },
                        children: (0, i.jsxs)("code", {
                            children: [e.linePrefix, (0, i.jsx)(d.Z, {
                                as: "b",
                                sx: {
                                    cursor: "help",
                                    fontStyle: "italic",
                                    color: "var(--fgColor-danger, var(--color-danger-fg))",
                                    position: "relative",
                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        top: "101%",
                                        left: 0,
                                        width: "100%",
                                        height: "0.25em",
                                        background: "linear-gradient(135deg, transparent, transparent 45%, var(--fgColor-danger, var(--color-danger-fg)), transparent 55%, transparent 100%),linear-gradient(45deg, transparent, transparent 45%, var(--fgColor-danger, var(--color-danger-fg)), transparent 55%, transparent 100%)",
                                        backgroundRepeat: "repeat-x,repeat-x",
                                        backgroundSize: "0.5em 0.5em"
                                    }
                                },
                                children: e.lineError
                            }), e.lineSuffix]
                        })
                    })]
                })
            }

            function x(e) {
                var t, n, r;
                let i = e.source.trim(),
                    o = e.column - 1,
                    a = (t = o, n = e.end_column, r = i, n || (r.substring(t).indexOf(" ") > 0 ? r.indexOf(" ", t) : r.length));
                if (o > 30) {
                    let e = o - 30;
                    i = "\u2026" + i.slice(e), o -= e - 1, a -= e - 1
                }
                return { ...e,
                    linePrefix: i.substring(0, o),
                    lineError: i.substring(o, a),
                    lineSuffix: i.substring(a)
                }
            }

            function y() {
                return (0, i.jsx)(c.Z, {
                    icon: s.DotFillIcon,
                    sx: {
                        color: "var(--fgColor-danger, var(--color-danger-fg))"
                    },
                    "aria-label": "This line contains CODEOWNERS errors"
                })
            }

            function g(e, t, n) {
                return (0, a.v)((0, o.Cv)({
                    owner: e.ownerLogin,
                    repo: e.name,
                    commitish: t.name,
                    filePath: n
                }), {
                    method: "GET"
                })
            }! function(e) {
                e[e.ERROR = 0] = "ERROR", e[e.LOADING = 1] = "LOADING", e[e.VALIDATED = 2] = "VALIDATED"
            }(r || (r = {}));
            try {
                f.displayName || (f.displayName = "CodeownerFileBanner")
            } catch {}
            try {
                p.displayName || (p.displayName = "CodeownersErrorDetails")
            } catch {}
            try {
                y.displayName || (y.displayName = "CodeownersErrorLineIndicator")
            } catch {}
        },
        98917: (e, t, n) => {
            n.d(t, {
                E: () => k
            });
            var r = n(85893),
                i = n(11117),
                o = n(81738),
                a = n(85529),
                s = n(42483),
                l = n(86010),
                c = n(67294),
                d = n(17391),
                u = n(86283),
                h = n(84312),
                m = n(77262);

            function f() {
                return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
            }

            function p() {
                return !1
            }

            function x() {
                return () => {}
            }
            var y = n(20286),
                g = n(13816),
                b = n(60193),
                j = n(13570),
                w = n(90984),
                v = n(90176),
                N = n(92110);
            let C = () => {},
                k = c.memo(S);

            function S({
                codeLineData: e,
                codeLineClassName: t,
                id: n,
                onClick: a,
                setIsCollapsed: s,
                onLineStickOrUnstick: f,
                virtualOffset: p,
                codeLineToSectionMap: x,
                virtualKey: k,
                forceVisible: S,
                measureRef: Z,
                copilotAccessAllowed: T
            }) {
                let {
                    lineNumber: L,
                    stylingDirectivesLine: E,
                    rawText: B
                } = e, _ = (0, g.H1)(L), {
                    tabSize: D
                } = (0, d.G)(), F = (0, w.C)(L), O = (0, c.useRef)(null), A = F && O.current ? (0, g.bP)(F, O.current, L, D, B ? ? "") : void 0, P = x ? .get(L) ? .length ? ? 0, M = (0, y.nx)(), H = function(e, t, n, r, i) {
                    let o = (0, c.useRef)(null),
                        a = (0, h.$L)(),
                        s = !(void 0 !== u.n4),
                        l = (0, h.Ub)(),
                        d = (0, c.useMemo)(() => {
                            let {
                                isEndLine: o,
                                isStartLine: a,
                                lineNumber: c
                            } = e, d = 0, u = 1, h = o && !s ? new IntersectionObserver(e => {
                                for (let {
                                        target: t,
                                        isIntersecting: n,
                                        intersectionRatio: i
                                    } of e)
                                    if (t) {
                                        let {
                                            currentY: e,
                                            currentRatio: o
                                        } = function(e, t, n, r, i, o, a, s) {
                                            let l = n.getBoundingClientRect().y,
                                                c = i ? o(i) : void 0,
                                                d = window.innerHeight - n.getBoundingClientRect().bottom > 0,
                                                u = n.getBoundingClientRect().bottom > 0,
                                                h = n.getBoundingClientRect().top < 150,
                                                m = d && u,
                                                f = window.innerHeight - n.getBoundingClientRect().bottom > 150 && window.innerHeight > 300;
                                            for (let n of c || []) n && m && (l < e && m ? r > t && a || s(n, !0) : l > e && a && (r < t || f && h && s(n, !1)));
                                            return {
                                                currentY: l,
                                                currentRatio: r
                                            }
                                        }(d, u, t, i, c, l, n, r);
                                        d = e, u = o
                                    }
                            }, {
                                root: null,
                                rootMargin: `-${n}px 0px 0px 0px`,
                                threshold: 0
                            }) : void 0, m = a && !s ? new IntersectionObserver(t => {
                                for (let {
                                        target: n,
                                        isIntersecting: i,
                                        intersectionRatio: o
                                    } of t)
                                    if (n) {
                                        let {
                                            currentY: t,
                                            currentRatio: a
                                        } = function(e, t, n, r, i, o, a) {
                                            let s = r.getBoundingClientRect().y,
                                                l = window.innerHeight - r.getBoundingClientRect().bottom > 0,
                                                c = r.getBoundingClientRect().bottom > 0,
                                                d = r.getBoundingClientRect().top < 150 && r.getBoundingClientRect().top > -300,
                                                u = 0 === r.getBoundingClientRect().bottom && 0 === r.getBoundingClientRect().top && 0 === r.getBoundingClientRect().height && 0 === r.getBoundingClientRect().width && 0 === r.getBoundingClientRect().x && 0 === r.getBoundingClientRect().y;
                                            return !e.ownedSection || e.ownedSection ? .collapsed || (s <= t && (l && c || d) && !u ? i > n && o || d && a(e, !1) : s > t && o && (i < n || a(e, !0))), {
                                                currentY: s,
                                                currentRatio: i
                                            }
                                        }(e, d, u, n, o, i, r);
                                        d = t, u = a
                                    }
                            }, {
                                root: null,
                                rootMargin: `-${n+(i?20*i:0)}px 0px 0px 0px`,
                                threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
                            }) : void 0, f = t ? a ? m : o ? h : void 0 : void 0;
                            return f && (f.hasBeenDisconnected = !1, f.hasBeenObserved = !1), f
                        }, [e, t, n, l, r, i, s]),
                        m = (0, c.useCallback)(e => {
                            o.current = e
                        }, []);
                    return (0, c.useEffect)(() => {
                        let {
                            isStartLine: t,
                            lineNumber: n,
                            ownedSection: r
                        } = e;
                        return t && o && r && d && !d.hasBeenObserved && !d.hasBeenDisconnected && a(r.endLine, {
                            lineNumber: n
                        }), d && o.current && !d.hasBeenObserved && (d.observe(o.current), d.hasBeenObserved = !0), () => {
                            d && (d.disconnect(), d.hasBeenDisconnected = !0)
                        }
                    }, [d, e]), m
                }(e, !0, M, f ? ? C, P), $ = (0, i.O)().codeWrappingOption, W = (0, v.si)(L), z = (0, v.KC)(L), U = (0, m.G)("react-code-lines"), G = F ? .start.line === L, V = (0, c.useRef)(null), q = (0, c.useRef)(null);
                return (0, o.b)(() => {
                    G && q.current ? .setAnchor(V.current)
                }, [G]), (0, r.jsx)("div", {
                    ref: e => {
                        Z ? .(e), H(e)
                    },
                    "data-key": k,
                    className: (0, l.W)(t, "react-code-text react-code-line-contents", p && "virtual", $.enabled && Z && "react-code-text-cell"),
                    style: {
                        transform: p ? `translateY(${p}px)` : void 0,
                        minHeight: $.enabled ? U : "auto"
                    },
                    onClick: a,
                    children: (0, r.jsxs)("div", {
                        ref: V,
                        children: [F && (0, r.jsx)(I, {
                            lineNumber: L,
                            highlightPosition: A
                        }), _ && !F && (0, r.jsx)(I, {
                            subtle: !0,
                            lineNumber: L,
                            highlightPosition: A
                        }), W && W.length > 0 && (0, r.jsx)(j.R, {
                            symbols: W,
                            focusedSymbol: z,
                            sx: {
                                paddingLeft: "10px",
                                width: "auto"
                            },
                            lineNumber: L
                        }), (0, r.jsx)(N.$c, {
                            id: n,
                            lineNumber: L,
                            stylingDirectivesLine: E,
                            current: !!F,
                            rawText: B,
                            forceVisible: S,
                            ref: O
                        }), (0, r.jsx)(R, {
                            codeLineData: e,
                            setIsCollapsed: s,
                            onLineStickOrUnstick: f
                        }), G && T && (0, r.jsx)(b.lv, {
                            ref: q,
                            rowBeginNumber: F.start.line,
                            rowEndNumber: F.end.line
                        })]
                    })
                })
            }

            function I({
                lineNumber: e,
                highlightPosition: t,
                subtle: n
            }) {
                let i = (0, c.useSyncExternalStore)(x, f, p),
                    o = t ? .offset !== void 0,
                    a = t ? .width !== void 0,
                    l = t ? .offset ? ? -72,
                    d = t ? .width ? ? 0;
                return (0, r.jsx)(s.Z, {
                    sx: {
                        position: "absolute",
                        backgroundColor: n ? "neutral.subtle" : "var(--bgColor-attention-muted, var(--color-attention-subtle))",
                        height: "100%",
                        opacity: ".6",
                        boxShadow: n ? "inset 2px 0 0 var(--fgColor-muted,  var(--color-fg-subtle))" : "inset 2px 0 0 var(--fgColor-attention, var(--color-attention-fg))",
                        top: i ? "-3px" : 0,
                        left: `${l}px`,
                        width: a ? `${o&&a?d:d+82}px` : "calc(100% + 72px)",
                        pointerEvents: "none"
                    }
                }, `highlighted-line-${e}`)
            }

            function R({
                codeLineData: e,
                setIsCollapsed: t,
                onLineStickOrUnstick: n
            }) {
                let {
                    lineNumber: i,
                    ownedSection: o
                } = e, s = (0, g.H1)(i);
                return s ? (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("button", {
                        "aria-label": "Expand row",
                        className: "Button Button--iconOnly Button--invisible Button--small px-2 py-0 ml-1 border-0 expand-row-ellipsis",
                        onMouseDown: r => {
                            (0, g.yw)(i), t ? .(!1), o && (o.collapsed = !1, n ? .(e, !0)), r.preventDefault()
                        },
                        children: (0, r.jsx)(a.EllipsisIcon, {})
                    })
                }) : null
            }
            try {
                k.displayName || (k.displayName = "CodeLine")
            } catch {}
            try {
                S.displayName || (S.displayName = "CodeLineUnmemoized")
            } catch {}
            try {
                I.displayName || (I.displayName = "HighlighterElement")
            } catch {}
            try {
                R.displayName || (R.displayName = "ExpandRowEllipsis")
            } catch {}
        },
        90984: (e, t, n) => {
            n.d(t, {
                C: () => c,
                k: () => l
            });
            var r = n(85893),
                i = n(77417),
                o = n(51252),
                a = n(67294);
            let s = a.createContext(new i.fA(void 0));

            function l({
                highlightedLines: e,
                children: t
            }) {
                let n = (0, o.yL)(e);
                return (0, a.useEffect)(() => {
                    n.value = e
                }, [n, e]), (0, r.jsx)(s.Provider, {
                    value: n,
                    children: t
                })
            }

            function c(e) {
                let t = a.useContext(s),
                    n = (0, o.D_)(t, t => t && e >= t.start.line && e <= t.end.line ? t : void 0);
                return (0, o.iu)(n)
            }
            try {
                s.displayName || (s.displayName = "HighlightedLineContext")
            } catch {}
            try {
                l.displayName || (l.displayName = "HighlightedLinesProvider")
            } catch {}
        },
        16275: (e, t, n) => {
            n.d(t, {
                _: () => b
            });
            var r = n(85893),
                i = n(11117),
                o = n(81738),
                a = n(85529),
                s = n(42483),
                l = n(98833),
                c = n(86010),
                d = n(67294),
                u = n(56334),
                h = n(86480),
                m = n(5262),
                f = n(13816),
                p = n(81543),
                x = n(50299),
                y = n(90984);
            let g = (0, d.lazy)(() => Promise.resolve().then(n.bind(n, 85503))),
                b = d.memo(j);

            function j({
                codeLineData: e,
                onClick: t,
                ownedCodeSections: n,
                onCollapseToggle: a,
                preventClick: s,
                onLineStickOrUnstick: l,
                virtualOffset: b
            }) {
                let {
                    lineNumber: j,
                    ownedSection: N,
                    codeLineClassName: C,
                    isStartLine: k,
                    codeownersLineError: S,
                    bidi: I
                } = e, {
                    sendRepoClickEvent: R
                } = (0, m.a)(), Z = (0, h.gk)(), T = (0, d.useCallback)(e => {
                    let n, r;
                    if (e.defaultPrevented) return;
                    let i = parseInt(e.currentTarget.getAttribute("data-line-number"), 10),
                        o = (0, u.n6)(`L${i}`),
                        a = Z.current;
                    if (a) n = a.start, r = a.end;
                    else {
                        let e = window.getSelection() ? .rangeCount ? window.getSelection() ? .getRangeAt(0) : null;
                        e && (n = (0, f.jP)(e.startContainer, e.startOffset), r = (0, f.jP)(e.endContainer, e.endOffset))
                    }
                    let s = !1;
                    n && r && n.line <= i && r.line >= i && (s = !0, o = {
                        anchorPrefix: "",
                        blobRange: {
                            start: n,
                            end: r
                        }
                    });
                    let {
                        blobRange: l
                    } = o, c = (0, u.G5)(window.location.hash);
                    c && e.shiftKey && !s ? (R("BLOB.MULTILINE"), o.blobRange = {
                        start: c.start,
                        end: l.end
                    }) : R("BLOB.LINE");
                    let d = (0, u.Dw)(o);
                    history.replaceState(history.state, "", d), t ? .(e)
                }, [t, Z, R]), L = (0, y.C)(j), E = L ? .start.line === j, B = L && L.start.line < j && L.end.line >= j, _ = B || E && L ? .start.column === null, D = (0, d.useRef)(null), F = (0, d.useRef)(null);
                (0, o.b)(() => {
                    E && F.current ? .setAnchor(D.current)
                }, [E]);
                let {
                    codeFoldingOption: O
                } = (0, i.O)(), A = O.enabled;
                return (0, d.useEffect)(() => {
                    !O.enabled && ((0, f.Yo)(), a ? .(!1), N && (N.collapsed = !1))
                }, [O.enabled, N, a]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        ref: D,
                        "data-line-number": j,
                        className: (0, c.W)(C, "react-line-number react-code-text", b && "virtual", s && "prevent-click", _ && "highlighted-line"),
                        style: b ? {
                            paddingRight: "16px",
                            transform: `translateY(${b}px)`
                        } : {
                            paddingRight: "16px"
                        },
                        onMouseDown: s ? void 0 : T,
                        children: [j, S && (0, r.jsx)(w, {
                            children: (0, r.jsx)(x.a, {})
                        }), I && (0, r.jsx)(w, {
                            children: (0, r.jsx)(p.hI, {})
                        }), A && k && N && n && (0, r.jsx)(w, {
                            displayRight: !0,
                            children: (0, r.jsx)(v, {
                                codeLineData: e,
                                onCollapseToggle: a,
                                onLineStickOrUnstick: l
                            })
                        })]
                    }), E && (0, r.jsx)(g, {
                        codeLineClassName: C,
                        ref: F,
                        rowBeginId: `LG${L.start.line}`,
                        rowBeginNumber: L.start.line,
                        rowEndNumber: L.end.line,
                        rowEndId: `LG${L.end.line}`
                    })]
                })
            }

            function w({
                children: e,
                sx: t,
                displayRight: n
            }) {
                return (0, r.jsx)(s.Z, {
                    as: "span",
                    sx: { ...n ? void 0 : {
                            left: "-4px"
                        },
                        margin: `1px ${n?"8px":"1px"}`,
                        position: "absolute",
                        zIndex: "1",
                        ...t
                    },
                    children: e
                })
            }

            function v({
                codeLineData: e,
                onCollapseToggle: t,
                onLineStickOrUnstick: n
            }) {
                let i = (0, f.H1)(e.lineNumber),
                    o = (0, d.useCallback)(r => {
                        let {
                            lineNumber: i,
                            ownedSection: o
                        } = e;
                        o && (o.collapsed = !1), t ? .(!1), (0, f.yw)(i), n ? .(e, !0), r.preventDefault()
                    }, [e, t, n]),
                    c = (0, d.useCallback)(n => {
                        let {
                            lineNumber: r,
                            ownedSection: i
                        } = e;
                        i && (i.collapsed = !0), t ? .(!0), (0, f.rH)(r), n.preventDefault()
                    }, [e, t]);
                return i ? (0, r.jsx)(s.Z, {
                    "aria-label": "Expand code section",
                    onMouseDown: o,
                    role: "button",
                    sx: {
                        position: "absolute"
                    },
                    children: (0, r.jsx)(l.Z, {
                        icon: a.ChevronRightIcon
                    })
                }) : (0, r.jsx)(s.Z, {
                    "aria-label": "Collapse code section",
                    onMouseDown: c,
                    role: "button",
                    sx: {
                        position: "absolute"
                    },
                    children: (0, r.jsx)(l.Z, {
                        icon: a.ChevronDownIcon
                    })
                })
            }
            try {
                g.displayName || (g.displayName = "HighlightedLineMenu")
            } catch {}
            try {
                b.displayName || (b.displayName = "LineNumber")
            } catch {}
            try {
                j.displayName || (j.displayName = "LineNumberUnmemoized")
            } catch {}
            try {
                w.displayName || (w.displayName = "CodeAlert")
            } catch {}
            try {
                v.displayName || (v.displayName = "CodeFoldingChevron")
            } catch {}
        },
        90176: (e, t, n) => {
            n.d(t, {
                KC: () => d,
                Sh: () => l,
                si: () => c
            });
            var r = n(85893),
                i = n(77417),
                o = n(51252),
                a = n(67294);
            let s = (0, a.createContext)({
                resultsByLineNumber: new i.vP,
                focusedResult: new i.fA(void 0)
            });

            function l({
                searchResults: e,
                focusedSearchResult: t,
                children: n
            }) {
                let i = (0, o.Kq)(),
                    l = (0, o.yL)(void 0 !== t ? e[t] : void 0);
                (0, a.useEffect)(() => {
                    let t = new Map;
                    for (let n of e) {
                        let e = n.lineNumber;
                        t.has(e) ? t.get(e).push(n) : t.set(e, [n])
                    }
                    for (let [e, n] of (i.clear(), t)) i.set(e, n)
                }, [i, e]), (0, a.useEffect)(() => {
                    l.value = void 0 !== t ? e[t] : void 0
                }, [e, l, t]);
                let c = (0, a.useMemo)(() => ({
                    resultsByLineNumber: i,
                    focusedResult: l
                }), [i, l]);
                return (0, r.jsx)(s.Provider, {
                    value: c,
                    children: n
                })
            }

            function c(e) {
                let {
                    resultsByLineNumber: t
                } = (0, a.useContext)(s);
                return (0, o.iu)(t.get(e))
            }

            function d(e) {
                let {
                    focusedResult: t
                } = (0, a.useContext)(s), n = (0, o.D_)(t, t => t ? .lineNumber === e ? t : void 0);
                return (0, o.iu)(n)
            }
            try {
                l.displayName || (l.displayName = "SearchResultsProvider")
            } catch {}
        },
        92110: (e, t, n) => {
            n.d(t, {
                $c: () => d,
                RC: () => h
            });
            var r = n(85893),
                i = n(2048),
                o = n(93062),
                a = n(67294),
                s = n(17391),
                l = n(86480),
                c = n(81543);
            let d = a.memo(a.forwardRef(u));

            function u({
                id: e,
                stylingDirectivesLine: t,
                rawText: n,
                lineNumber: s,
                current: c,
                forceVisible: d
            }, u) {
                let m = function() {
                        let e = (0, l.nj)(),
                            t = (0, a.useSyncExternalStore)(() => () => {}, () => navigator.userAgent.toLowerCase().indexOf("firefox") > -1, () => !1),
                            n = (0, i.y)("react_blob_chunk_separated_characters");
                        return e ? t && n ? "separated-characters-chunked" : t ? "separated-characters" : "data-attribute" : "plain"
                    }(),
                    f = h(void 0, t, n, d ? "plain" : m);
                return (0, r.jsx)(o.sF, {
                    id: e,
                    className: "react-file-line html-div",
                    "data-testid": "code-cell",
                    "data-line-number": s,
                    html: f,
                    ref: u,
                    style: {
                        position: "relative"
                    },
                    "aria-current": c ? "location" : void 0
                })
            }

            function h(e, t, n, r = "plain") {
                let {
                    tabSize: i
                } = (0, s.G)(), o = (0, c.fq)();
                return (0, a.useMemo)(() => e ? ? function(e, t, n, r, i) {
                    e || (e = "\n");
                    let o = function(e, t, n, r) {
                            let i = {
                                    value: 0
                                },
                                o = {
                                    nodes: [],
                                    start: 0,
                                    end: e.length,
                                    cssClass: ""
                                },
                                a = t ? .filter(e => e.end > e.start);
                            if (!a || 0 === a.length) return o.nodes.push(m("", e, 0, e.length, i, r, n)), o;
                            let s = [o];
                            for (let t = 0; t < a.length; t++) {
                                let l = a[t],
                                    c = a[t + 1],
                                    d = s[s.length - 1] ? ? o,
                                    u = d.nodes[d.nodes.length - 1];
                                if (0 === d.nodes.length && l.start > d.start) {
                                    let t = m("", e, d.start, l.start, i, r, n);
                                    d.nodes.push(t)
                                } else if (u && l.start > u.end) {
                                    let t = m("", e, u.end, l.start, i, r, n);
                                    d.nodes.push(t)
                                }
                                let h = c && c.start < l.end;
                                if (h) {
                                    let e = { ...l,
                                        nodes: []
                                    };
                                    d.nodes.push(e), s.push(e)
                                } else {
                                    let t = m(l.cssClass, e, l.start, l.end, i, r, n);
                                    d.nodes.push(t)
                                }
                                if (c && c.start >= d.end) {
                                    let t = l.end;
                                    if (d.end > t) {
                                        let o = m("", e, t, d.end, i, r, n);
                                        d.nodes.push(o), t = d.end
                                    }
                                    for (; s.length > 1 && c.start >= d.end;)
                                        if (s.pop(), d = s[s.length - 1] ? ? o, s.length > 1 && c.start >= d.end && d.end > t) {
                                            let o = m("", e, t, d.end, i, r, n);
                                            t = d.end, d.nodes.push(o)
                                        }
                                }
                            }
                            for (; s.length > 0;) {
                                let t = s.pop(),
                                    o = t.nodes[t.nodes.length - 1];
                                if (o && o.end < t.end) {
                                    let a = m("", e, o.end, t.end, i, r, n);
                                    t.nodes.push(a)
                                }
                            }
                            return o
                        }(e, t, n, r),
                        a = [];
                    return function e(t, n, r, i) {
                        for (let o of (t.cssClass && i.push(`<span class="${f(t.cssClass)}">`), t.nodes)) "nodes" in o ? e(o, n, r, i) : i.push(function e(t, n, r) {
                            switch (n) {
                                case "data-attribute":
                                    {
                                        let i = f(t.text);
                                        if (r && (0, c.ud)(i)) {
                                            let r = (0, c.yB)(i),
                                                o = r.map(r => {
                                                    let i = (0, c.v0)(r);
                                                    return i ? (0, c.Ew)(i) : e({ ...t,
                                                        text: r,
                                                        cssClass: ""
                                                    }, n, !1)
                                                });
                                            return t.cssClass ? `<span class="${f(t.cssClass)}">${o.join("")}</span>` : o.join("")
                                        }
                                        return t.cssClass ? `<span class="${f(t.cssClass)}" data-code-text="${i}"></span>` : `<span data-code-text="${i}"></span>`
                                    }
                                case "separated-characters-chunked":
                                case "separated-characters":
                                    {
                                        if (t.text && !t.text.trim()) return e({ ...t
                                        }, "data-attribute", r);
                                        let i = [...t.text];
                                        "separated-characters-chunked" !== n || r || (i = t.text.match(/.{1,2}/g) ? ? i);
                                        let o = [...i].map(e => {
                                            let t = r ? (0, c.v0)(e) : void 0;
                                            return t ? (0, c.Ew)(t) : `<span data-code-text="${f(e)}"></span>`
                                        }).join("");
                                        return t.cssClass ? `<span class="${f(t.cssClass)}">${o}</span>` : o
                                    }
                                default:
                                    {
                                        let e = f(t.text),
                                            n = r ? (0, c.fN)(e) ? ? e : e;
                                        return t.cssClass ? `<span class="${f(t.cssClass)}">${n}</span>` : n
                                    }
                            }
                        }(o, n, r));
                        t.cssClass && i.push("</span>")
                    }(o, n, i, a), a.join("")
                }(n, t, r, i, o), [n, e, t, r, i, o])
            }

            function m(e, t, n, r, i, o, a) {
                let s = t.substring(n, r),
                    l = "plain" !== a ? function(e, t, n) {
                        let r = [];
                        for (let i of e)
                            if ("	" === i) {
                                let e = t - n.value % t;
                                r.push(Array(e).fill(" ").join("")), n.value += e
                            } else r.push(i), n.value += Array.from(i).length;
                        return r.join("")
                    }(s, o, i) : s;
                return {
                    cssClass: e,
                    start: n,
                    end: r,
                    text: l
                }
            }

            function f(e) {
                return e.replace(/[&<>"']/g, p)
            }

            function p(e) {
                switch (e) {
                    case "&":
                        return "&amp;";
                    case "<":
                        return "&lt;";
                    case ">":
                        return "&gt;";
                    case '"':
                        return "&quot;";
                    case "'":
                        return "&#039;";
                    default:
                        return e
                }
            }
            try {
                d.displayName || (d.displayName = "SyntaxHighlightedLine")
            } catch {}
            try {
                u.displayName || (u.displayName = "SyntaxHighlightedLineWithRef")
            } catch {}
        },
        87054: (e, t, n) => {
            n.d(t, {
                V: () => o,
                d: () => a
            });
            var r = n(85893),
                i = n(42483);
            let o = "find-result-marks-container";

            function a() {
                return (0, r.jsx)(i.Z, {
                    sx: {
                        position: "fixed",
                        top: 0,
                        right: 0,
                        height: "100%",
                        width: "15px",
                        transition: "transform 0.3s",
                        "&:hover": {
                            transform: "scaleX(1.5)"
                        },
                        zIndex: 1
                    },
                    id: o
                })
            }
            try {
                a.displayName || (a.displayName = "ScrollMarksContainer")
            } catch {}
        },
        60193: (e, t, n) => {
            n.d(t, {
                Id: () => x,
                lv: () => y
            });
            var r = n(85893),
                i = n(56302),
                o = n(32769),
                a = n(14714),
                s = n(81738),
                l = n(42483),
                c = n(67294),
                d = n(73935),
                u = n(17391),
                h = n(80624),
                m = n(90606);
            let f = "copilot-button-positioner",
                p = "copilot-button-container";

            function x({
                children: e
            }) {
                return (0, r.jsxs)(l.Z, {
                    id: f,
                    sx: {
                        position: "relative"
                    },
                    children: [e, (0, r.jsx)("div", {
                        id: p
                    })]
                })
            }
            let y = c.memo(c.forwardRef(g));

            function g({
                rowBeginNumber: e,
                rowEndNumber: t
            }, n) {
                let [l, x] = (0, c.useState)(null);
                (0, c.useImperativeHandle)(n, () => ({
                    setAnchor: x
                }));
                let [y, g] = (0, c.useState)({
                    top: 0,
                    left: 0
                });
                (0, s.b)(() => {
                    let e = () => requestAnimationFrame(() => g(function(e, t = {
                        x: 0,
                        y: 0
                    }) {
                        let n = document.getElementById(f);
                        if (!e || !n) return {
                            display: "none"
                        };
                        let {
                            top: r,
                            height: i
                        } = e.getBoundingClientRect(), {
                            top: o
                        } = n.getBoundingClientRect(), a = (m.XT - i) / 2;
                        return {
                            top: `${r-o-a+t.y+1}px`,
                            right: "37px"
                        }
                    }(l)));
                    return e(), window.addEventListener("resize", e), () => {
                        window.removeEventListener("resize", e)
                    }
                }, [l]);
                let {
                    copilotAccessAllowed: b,
                    refInfo: j,
                    path: w
                } = (0, h.Br)(), v = (0, o.H)(), {
                    language: N,
                    languageID: C
                } = (0, u.G)(), k = (0, c.useMemo)(() => ({
                    type: "snippet",
                    languageID: C,
                    languageName: N,
                    path: w,
                    range: {
                        start: e,
                        end: t
                    },
                    ref: (0, a.Ju)(j.name, j.refType),
                    commitOID: j.currentOid,
                    repoID: v.id,
                    repoName: v.name,
                    repoOwner: v.ownerLogin,
                    url: window.location.href
                }), [C, N, w, e, t, j, v]), S = (0, r.jsx)("div", {
                    style: {
                        alignSelf: "center",
                        position: "absolute",
                        lineHeight: "16px",
                        height: "24px",
                        width: "24px",
                        ...y
                    },
                    children: (0, r.jsx)(i.Z, {
                        copilotAccessAllowed: b,
                        messageReference: k
                    })
                }), I = document.getElementById(p);
                return I ? (0, d.createPortal)(S, I) : null
            }
            try {
                x.displayName || (x.displayName = "CopilotButtonContainer")
            } catch {}
            try {
                y.displayName || (y.displayName = "CopilotButton")
            } catch {}
            try {
                g.displayName || (g.displayName = "CopilotButtonWithRef")
            } catch {}
        },
        85503: (e, t, n) => {
            n.r(t), n.d(t, {
                HighlightedLineMenuContainer: () => v,
                default: () => C,
                firstOptionId: () => w
            });
            var r = n(85893),
                i = n(81738),
                o = n(85529),
                a = n(45677),
                s = n(50919),
                l = n(52516),
                c = n(67294),
                d = n(73935),
                u = n(79655),
                h = n(98950),
                m = n(51188),
                f = n(80624),
                p = n(31174),
                x = n(90606),
                y = n(35499),
                g = n(13816),
                b = n(22554);
            let j = "highlighted-line-menu-container",
                w = "highlighted-line-menu-first-option";

            function v({
                children: e
            }) {
                return (0, r.jsxs)("div", {
                    id: x._X,
                    className: "position-relative",
                    children: [e, (0, r.jsx)("div", {
                        id: j
                    })]
                })
            }
            let N = c.memo(c.forwardRef(k)),
                C = N;

            function k({
                codeLineClassName: e,
                offset: t,
                lineData: n,
                onLineStickOrUnstick: v,
                onMenuClose: N,
                onCollapseToggle: C,
                openOnLoad: k = !1,
                cursorRef: S,
                rowBeginId: I,
                rowBeginNumber: R,
                rowEndId: Z,
                rowEndNumber: T
            }, L) {
                let [E, B] = (0, c.useState)(null);
                (0, c.useImperativeHandle)(L, () => ({
                    setAnchor: B
                }));
                let _ = c.useRef(null),
                    {
                        githubDevUrl: D
                    } = (0, f.Ou)(),
                    [F, O] = (0, c.useState)(k ? "hidden" : "visible"),
                    [A, P] = (0, c.useState)({
                        top: 0,
                        left: 0
                    });
                (0, i.b)(() => {
                    let e = () => {
                        O("hidden"), requestAnimationFrame(() => {
                            P((0, x.kl)(E, t)), O("visible")
                        })
                    };
                    return e(), window.addEventListener("resize", e), () => {
                        window.removeEventListener("resize", e)
                    }
                }, [E, t]), (0, i.b)(() => {
                    k && (S && B(S.current), setTimeout(() => {
                        z(!0)
                    }, 50))
                }, []);
                let {
                    newDiscussionPath: M,
                    newIssuePath: H
                } = (0, m.nO)(), {
                    refSelectorShortcut: $
                } = (0, p.bx)(), [W, z] = c.useState(!1), {
                    createPermalink: U,
                    getUrl: G
                } = (0, y.B)(), {
                    setShouldBeOpen: V,
                    expandOrCollapseSection: q,
                    openUpRefSelector: K
                } = (0, x.$w)({
                    lineData: n,
                    onLineStickOrUnstick: v,
                    onMenuClose: N,
                    onCollapseToggle: C,
                    setOpen: z
                }), [Y] = (0, u.lr)(), Q = "1" === Y.get("plain"), X = U({
                    absolute: !0,
                    params: Q ? "plain=1" : void 0
                }), J = encodeURIComponent(X), ee = `L${R}${I!==Z?`-L${T}`:""}`, et = (0, r.jsxs)(a.P, {
                    open: W,
                    onOpenChange: V,
                    children: [(0, r.jsx)(a.P.Anchor, {
                        children: (0, r.jsx)(s.h, {
                            className: e,
                            size: "small",
                            icon: o.KebabHorizontalIcon,
                            "aria-label": `Code line ${R} options`,
                            "data-testid": "highlighted-line-menu-button",
                            sx: {
                                alignSelf: "center",
                                position: "absolute",
                                lineHeight: "16px",
                                height: "24px",
                                width: "24px",
                                visibility: F,
                                ...A
                            }
                        })
                    }), (0, r.jsx)(a.P.Overlay, {
                        width: "small",
                        children: (0, r.jsxs)(l.S, {
                            children: [R === T && (0, r.jsx)(l.S.Item, {
                                onClick: () => {
                                    (0, g.dM)(`Copied line ${R}.`);
                                    let e = (0, x.kq)(document.getElementById(`LC${R}`));
                                    e && (0, h.z)(e), V(!1)
                                },
                                onSelect: () => {
                                    (0, g.dM)(`Copied line ${R}.`);
                                    let e = (0, x.kq)(document.getElementById(`LC${R}`));
                                    e && (0, h.z)(e), V(!1)
                                },
                                ref: _,
                                className: w,
                                children: "Copy line"
                            }), R !== T && (0, r.jsx)(l.S.Item, {
                                onClick: () => {
                                    (0, g.dM)(`Copied lines ${R}-${T}.`);
                                    let e = "";
                                    for (let t = R; t <= T; t++) e += `${(0,x.kq)(document.getElementById(`LC${t}`))}${t!==T?"\n":""}`;
                                    e && (0, h.z)(e), V(!1)
                                },
                                onSelect: () => {
                                    (0, g.dM)(`Copied lines ${R}-${T}.`);
                                    let e = "";
                                    for (let t = R; t <= T; t++) e += `${(0,x.kq)(document.getElementById(`LC${t}`))}${t!==T?"\n":""}`;
                                    e && (0, h.z)(e), V(!1)
                                },
                                className: w,
                                children: "Copy lines"
                            }), X && (0, r.jsx)(l.S.Item, {
                                onClick: () => {
                                    (0, g.dM)("Copied permalink."), (0, h.z)(X), V(!1)
                                },
                                onSelect: () => {
                                    (0, g.dM)("Copied permalink."), (0, h.z)(X), V(!1)
                                },
                                children: "Copy permalink"
                            }), (0, r.jsx)(l.S.LinkItem, {
                                href: G({
                                    action: "blame",
                                    hash: ee
                                }),
                                children: "View git blame"
                            }), H && X && (0, r.jsx)(l.S.LinkItem, {
                                href: `${H}?permalink=${J}`,
                                children: "Reference in new issue"
                            }), M && X && (0, r.jsx)(l.S.LinkItem, {
                                href: `${M}?permalink=${J}`,
                                children: "Reference in new discussion"
                            }), D && (0, r.jsx)(l.S.LinkItem, {
                                href: D + window.location.pathname.substring(1),
                                children: "View file in GitHub.dev"
                            }), R === T && n && (0, r.jsxs)(l.S.Item, {
                                onClick: q,
                                onSelect: q,
                                children: [n.ownedSection && n.ownedSection.collapsed ? "Expand" : "Collapse", " current section"]
                            }), (0, r.jsxs)(l.S.Item, {
                                onClick: K,
                                onSelect: K,
                                children: ["View file in different branch/tag", (0, r.jsx)(l.S.TrailingVisual, {
                                    children: (0, r.jsx)(b.I, {
                                        children: $.text
                                    })
                                })]
                            })]
                        })
                    })]
                }), en = document.getElementById(j);
                return en ? (0, d.createPortal)(et, en) : null
            }
            try {
                v.displayName || (v.displayName = "HighlightedLineMenuContainer")
            } catch {}
            try {
                N.displayName || (N.displayName = "HighlightedLineMenu")
            } catch {}
            try {
                k.displayName || (k.displayName = "HighlightedLineMenuWithRef")
            } catch {}
        },
        13570: (e, t, n) => {
            n.d(t, {
                R: () => a,
                o: () => s
            });
            var r = n(85893),
                i = n(11117),
                o = n(97011);

            function a({
                symbols: e,
                focusedSymbol: t,
                lineNumber: n,
                sx: a,
                isNotUsingWhitespace: l
            }) {
                let c = 0,
                    d = `overlay-${n}-${a?"blob":"panel"}`,
                    u = e.length > 0 ? e[0].bodyText : "",
                    h = (0, i.O)().codeWrappingOption,
                    m = e.length > 0 && !l ? e[0].leadingWhitespace ? ? 0 : 0;
                return (0, r.jsxs)(o.Z, {
                    sx: {
                        mb: "-20px",
                        color: "transparent",
                        position: "absolute",
                        overflowWrap: h.enabled ? "anywhere" : "unset",
                        maxWidth: h.enabled ? "100%" : "unset",
                        maxHeight: "6rem",
                        overflow: "hidden",
                        width: "100%",
                        display: "inline-block",
                        userSelect: "none",
                        ...a
                    },
                    children: [e.map(e => {
                        let n = (0, r.jsxs)("span", {
                            children: [(0, r.jsx)(o.Z, {
                                sx: {
                                    userSelect: "none",
                                    visibility: "hidden"
                                },
                                children: u.substring(c, e.ident.start.column + m)
                            }), (0, r.jsx)(o.Z, {
                                sx: {
                                    bg: e === t ? "#ff9632" : "attention.muted",
                                    zIndex: e === t ? 10 : void 0,
                                    color: e === t ? "black" : void 0,
                                    position: e === t ? "relative" : void 0,
                                    userSelect: "none",
                                    pointerEvents: "none"
                                },
                                children: (0, r.jsx)(o.Z, {
                                    sx: {
                                        visibility: e !== t ? "hidden" : void 0
                                    },
                                    id: s(e.lineNumber, e.ident.start.column + m),
                                    children: u.substring(e.ident.start.column + m, e.ident.end.column + m)
                                })
                            })]
                        }, `symbol-${e.ident.start.line}-${e.ident.start.column+m}`);
                        return c = e.ident.end.column + m, n
                    }), (0, r.jsx)(o.Z, {
                        sx: {
                            visibility: "hidden",
                            userSelect: "none"
                        },
                        children: u.substring(c)
                    })]
                }, d)
            }

            function s(e, t) {
                return `match-${e}-${t}`
            }
            try {
                a.displayName || (a.displayName = "HighlightedOverlay")
            } catch {}
        },
        36218: (e, t, n) => {
            n.r(t), n.d(t, {
                FileResultRow: () => P,
                default: () => O
            });
            var r = n(85893),
                i = n(32769),
                o = n(95628),
                a = n(78212),
                s = n(60348),
                l = n(69942),
                c = n(68203),
                d = n(48542),
                u = n(13275),
                h = n(85529),
                m = n(17840),
                f = n(42483),
                p = n(51461),
                x = n(52516),
                y = n(73290),
                g = n(2708),
                b = n(74121),
                j = n(98833),
                w = n(97011),
                v = n(47142),
                N = n(67294),
                C = n(43811),
                k = n(66523),
                S = n(80624),
                I = n(5262),
                R = n(35499),
                Z = n(15205);
            let T = (0, Z.Z)(v.Gs);

            function L({
                data: e
            }) {
                let {
                    query: t,
                    baseList: n,
                    startTime: r
                } = e, i = t.replaceAll("\\", ""), o = n.filter(e => "" === i || (0, v.CD)(i, e) && T(i, e) > 0).sort((e, t) => T(i, t) - T(i, e));
                return {
                    query: t,
                    list: o,
                    baseCount: n.length,
                    startTime: r
                }
            }
            var E = n(17206),
                B = n(89445);
            async function _(e) {
                let t = await (0, B.v)(e);
                return t.ok ? await t.json() : void 0
            }
            let D = new Map,
                F = (0, Z.Z)(_, {
                    cache: D
                });

            function O({
                onRenderRow: e,
                onItemSelected: t,
                searchBoxRef: n,
                isOverview: s,
                onFindFilesShortcut: h,
                sx: b = {},
                ...j
            }) {
                let {
                    query: w,
                    setQuery: v
                } = (0, k.aM)(), Z = (0, i.H)(), T = N.useRef(null), B = n ? ? T, [_, D] = N.useState(w.length > 0), [O, P] = N.useState(!!w), {
                    list: M,
                    directories: H,
                    loading: W,
                    error: z
                } = function(e) {
                    let t = (0, i.H)(),
                        {
                            refInfo: n
                        } = (0, S.Br)(),
                        [r, o] = (0, N.useState)({
                            list: [],
                            directories: [],
                            loading: !0
                        }),
                        s = (0, a.a_)({
                            repo: t,
                            commitOid: n.currentOid,
                            includeDirectories: !0
                        });
                    return (0, N.useEffect)(() => {
                        let t = !1,
                            n = async () => {
                                o({
                                    list: [],
                                    directories: [],
                                    loading: !0
                                });
                                let e = await F(s);
                                if (t) return;
                                let n = e ? .paths || [],
                                    r = e ? .directories || [],
                                    i = n.concat(r).sort();
                                o({
                                    list: i,
                                    directories: r,
                                    error: !e
                                })
                            };
                        return e && n(),
                            function() {
                                t = !0
                            }
                    }, [s, e]), r
                }(_), {
                    path: U
                } = (0, S.Br)(), {
                    findFileWorkerPath: G
                } = (0, S.Ou)(), {
                    getUrl: V
                } = (0, R.B)(), {
                    queryText: q,
                    queryLine: K
                } = function(e) {
                    e = e.replaceAll(" ", "");
                    let t = e.indexOf(":");
                    return t >= 0 ? {
                        queryText: e.substring(0, t),
                        queryLine: parseInt(e.substring(t + 1), 10)
                    } : {
                        queryText: e,
                        queryLine: void 0
                    }
                }(w), {
                    matches: Y,
                    clearMatches: Q
                } = function(e, t, n, r) {
                    let [i, o] = N.useState(), a = N.useRef(""), s = N.useRef(), {
                        sendStats: l
                    } = (0, I.a)(), c = N.useRef(!1), d = N.useCallback(() => {
                        let e = new C.V(n, L);
                        e.onmessage = ({
                            data: e
                        }) => {
                            c.current = !1, o(e.list), a.current = e.query, e.startTime && l("repository.find-file", {
                                "find-file-base-count": e.baseCount,
                                "find-file-results-count": e.list.length,
                                "find-file-duration-ms": performance.now() - e.startTime
                            })
                        }, s.current = e
                    }, [l, n]);
                    return N.useEffect(() => {
                        if (r) return d(),
                            function() {
                                s.current ? .terminate()
                            }
                    }, [d, r]), N.useEffect(() => {
                        if (e.length && t) {
                            c.current && (s.current ? .terminate(), d());
                            let n = a.current && t.startsWith(a.current);
                            c.current = !0, s.current ? .postMessage({
                                baseList: n && i || e,
                                query: t,
                                startTime: performance.now()
                            })
                        }
                    }, [e, t, d]), {
                        matches: i,
                        clearMatches: () => o(void 0)
                    }
                }(M, q, G, _), {
                    sendRepoClickEvent: X
                } = (0, I.a)(), J = (0, c.s)(), [ee, et] = N.useState(0), [en, er] = N.useState((0, E.$)()), ei = N.useRef(null), eo = N.useRef(null), ea = "file-results-list", {
                    sendRepoKeyDownEvent: es
                } = (0, I.a)(), {
                    screenSize: el
                } = (0, l.eI)(), ec = j.useOverlay || el >= l._G.large, ed = N.useCallback(() => {
                    X("FILE_TREE.SEARCH_RESULT_CLICK"), t ? .(), P(!1)
                }, [X, t]), {
                    containerRef: eu
                } = (0, m.v)({
                    bindKeys: d.Qw.ArrowVertical | d.Qw.HomeAndEnd,
                    focusInStrategy: "previous"
                }, [W, z]);
                N.useEffect(() => {
                    w || P(!1)
                }, [w]), N.useEffect(() => {
                    document.activeElement !== B.current && ec && P(!1)
                }, [U, B, ec]);
                let eh = Y ? .slice(0, 40) || [],
                    em = Y && Y.length > eh.length,
                    ef = (0, r.jsx)(f.Z, {
                        sx: {
                            maxHeight: ec ? "60vh" : "100% !important",
                            overflowY: "auto",
                            scrollbarGutter: "stable",
                            maxWidth: "100vw",
                            "@media (max-width: 768px)": {
                                ml: 3,
                                mr: 2
                            }
                        },
                        children: z ? (0, r.jsx)(p.Z, {
                            variant: "danger",
                            sx: {
                                m: 3
                            },
                            children: "Failed to search"
                        }) : (0, r.jsxs)(x.S, {
                            ref: eu,
                            sx: {
                                overflow: "auto",
                                p: ec ? 2 : 3,
                                pl: ec ? 2 : s ? 0 : 3,
                                width: "100%",
                                pr: ec ? 3 : 0,
                                pt: ec ? 3 : "2px !important"
                            },
                            role: "listbox",
                            children: [!W && eh.map((t, n) => {
                                let i = H.includes(t);
                                return (0, r.jsx)($, {
                                    active: t === U,
                                    index: n,
                                    focused: en && ee === n,
                                    match: t,
                                    onRender: e,
                                    query: q,
                                    onClick: ed,
                                    isDirectory: i,
                                    to: V({
                                        path: t,
                                        action: i ? "tree" : "blob",
                                        hash: K ? `L${K}` : ""
                                    }),
                                    useOverlay: ec,
                                    listRef: eu
                                }, t)
                            }), (0, r.jsxs)(f.Z, {
                                sx: {
                                    m: 3,
                                    textAlign: "center"
                                },
                                children: [(0, r.jsx)(A, {
                                    loading: W || !Y,
                                    visibleResultCount: eh.length,
                                    truncated: !!em
                                }), em && (0, r.jsxs)(r.Fragment, {
                                    children: ["\xa0", (0, r.jsx)(y.Z, {
                                        id: "see-all-results-link",
                                        className: "focus-visible",
                                        ref: ei,
                                        href: (0, a.mY)({
                                            owner: Z.ownerLogin,
                                            repo: Z.name,
                                            searchTerm: `path:${q}`
                                        }),
                                        sx: en && ee === eh.length ? {
                                            outline: "2px solid var(--focus-outlineColor, var(--color-accent-fg))",
                                            outlineOffset: "-2px",
                                            boxShadow: "none"
                                        } : {},
                                        children: "See all results"
                                    })]
                                })]
                            })]
                        })
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(f.Z, {
                        ref: eo,
                        sx: {
                            mx: 2,
                            ml: s ? 0 : 3,
                            ...b
                        },
                        children: (0, r.jsx)(E.f, {
                            ariaActiveDescendant: (!ec && w || ec && O) && en && ee > -1 ? em && ee === eh.length ? "see-all-results-link" : `file-result-${ee}` : void 0,
                            ariaExpanded: ec ? O : void 0,
                            ariaHasPopup: ec,
                            ariaControls: ec ? ea : void 0,
                            ref: B,
                            query: w,
                            onKeyDown: e => {
                                let {
                                    key: t,
                                    shiftKey: n,
                                    metaKey: r,
                                    altKey: i,
                                    ctrlKey: s
                                } = e;
                                if (!n && !r && !i) {
                                    if ("Escape" === t) w ? (es("FILE_TREE.CANCEL_SEARCH"), v(""), Q()) : document.activeElement && document.activeElement.blur();
                                    else if (!w) return;
                                    else if ("Enter" === t) em && ee === eh.length ? J((0, a.mY)({
                                        owner: Z.ownerLogin,
                                        repo: Z.name,
                                        searchTerm: `path:${q}`
                                    })) : eh[ee] && (J(V({
                                        path: eh[ee],
                                        action: "blob",
                                        hash: K ? `L${K}` : ""
                                    })), P(!1));
                                    else if ("ArrowDown" === t || s && "n" === t) {
                                        if (em && ee >= eh.length - 1) {
                                            if (et(eh.length), ei.current && eu.current) {
                                                let e = (0, o.M)(eu.current);
                                                (0, u.z)(ei.current, e, {
                                                    behavior: "instant"
                                                })
                                            }
                                        } else et(Math.min(ee + 1, eh.length - 1));
                                        e.preventDefault();
                                        return
                                    } else if ("ArrowUp" === t || s && "p" === t) {
                                        et(Math.max(ee - 1, 0)), e.preventDefault();
                                        return
                                    }
                                }
                            },
                            onPreload: () => D(!0),
                            onSearch: e => {
                                v(e), e ? P(!0) : (Q(), P(!1)), et(0)
                            },
                            onBlur: e => {
                                eu.current ? .contains(e.relatedTarget) || (P(!1), er(!1))
                            },
                            onFocus: () => {
                                w && P(!0), er(!0)
                            },
                            onFindFilesShortcut: h,
                            sx: {
                                minWidth: "160px"
                            }
                        })
                    }), ec && (0, r.jsx)(g.w, {
                        anchorRef: eo,
                        open: ec && O,
                        renderAnchor: null,
                        onClose: () => {
                            P(!1)
                        },
                        focusZoneSettings: {
                            disabled: !0
                        },
                        focusTrapSettings: {
                            disabled: !0
                        },
                        width: "xlarge",
                        align: "end",
                        overlayProps: {
                            id: ea,
                            role: "dialog"
                        },
                        children: ef
                    }), !ec && w && ef]
                })
            }

            function A({
                visibleResultCount: e,
                truncated: t,
                loading: n
            }) {
                return (0, r.jsx)("span", {
                    role: "status",
                    className: n || t || 0 === e ? void 0 : "sr-only",
                    "aria-label": n ? "Loading" : void 0,
                    children: n ? (0, r.jsx)(b.Z, {
                        size: "large"
                    }) : 0 === e ? "No matches found" : t ? `First ${e} files shown.` : `Showing ${e} files.`
                }, "results-count-status")
            }
            let P = ({
                    active: e,
                    focused: t,
                    index: n,
                    match: i,
                    query: a,
                    to: l,
                    isDirectory: c,
                    onClick: d,
                    onRender: h,
                    useOverlay: m,
                    listRef: p
                }) => {
                    let y = (0, v.m7)(a, i);
                    h ? .();
                    let g = N.useRef(null),
                        b = c ? M : H;
                    N.useEffect(() => {
                        if (t && g.current && p ? .current) {
                            let e = (0, o.M)(p.current);
                            (0, u.z)(g.current, e, {
                                behavior: "instant"
                            })
                        }
                    }, [t, p]);
                    let j = {};
                    return t && (j = {
                        outline: "none",
                        border: "2 solid",
                        boxShadow: "0 0 0 2px #0969da"
                    }), (0, r.jsx)(x.S.Item, {
                        id: `file-result-${n}`,
                        ref: g,
                        as: s.r,
                        onClick: d,
                        to: l,
                        active: e,
                        sx: {
                            fontWeight: "normal",
                            ":hover": {
                                textDecoration: "none"
                            },
                            mx: "2px",
                            width: "calc(100% - 4px)",
                            ...j
                        },
                        role: "option",
                        "data-focus-visible-added": t || void 0,
                        tabIndex: m ? -1 : 0,
                        children: (0, r.jsxs)(f.Z, {
                            sx: {
                                display: "flex"
                            },
                            children: [(0, r.jsx)(f.Z, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    overflow: "hidden",
                                    flexGrow: 1
                                },
                                children: (0, r.jsx)(W, {
                                    text: i,
                                    positionsList: y,
                                    sx: {
                                        color: "fg.muted"
                                    },
                                    LeadingIcon: b
                                })
                            }), t && (0, r.jsx)(f.Z, {
                                sx: {
                                    pl: 1,
                                    whiteSpace: "nowrap",
                                    color: "fg.muted"
                                },
                                children: `Go to ${c?"folder":"file"}`
                            })]
                        })
                    }, i)
                },
                M = () => (0, r.jsx)(j.Z, {
                    "aria-label": "Directory",
                    icon: h.FileDirectoryFillIcon,
                    sx: {
                        color: "var(--color-icon-directory)",
                        mr: 2
                    },
                    size: "small"
                }),
                H = () => (0, r.jsx)(j.Z, {
                    "aria-label": "File",
                    icon: h.FileIcon,
                    sx: {
                        color: "fg.muted",
                        mr: 2
                    },
                    size: "small"
                }),
                $ = N.memo(P);

            function W({
                text: e,
                positionsList: t,
                sx: n,
                LeadingIcon: i
            }) {
                let o = [],
                    a = 0;
                for (let n of t) {
                    if (Number(n) !== n || n < a || n > e.length) continue;
                    let t = e.slice(a, n);
                    t && o.push(z(t)), a = n + 1, o.push((0, r.jsx)(w.Z, {
                        as: "mark",
                        sx: {
                            fontWeight: "bold",
                            background: "none",
                            color: "fg.default"
                        },
                        children: e[n]
                    }, n))
                }
                return o.push(z(e.slice(a))), (0, r.jsx)(f.Z, {
                    sx: n,
                    children: (0, r.jsxs)(r.Fragment, {
                        children: [i && (0, r.jsx)(i, {}), o]
                    })
                })
            }

            function z(e) {
                return e.replaceAll("/", "/\u200B")
            }
            try {
                O.displayName || (O.displayName = "FileResultsList")
            } catch {}
            try {
                A.displayName || (A.displayName = "FileResultsStatus")
            } catch {}
            try {
                P.displayName || (P.displayName = "FileResultRow")
            } catch {}
            try {
                M.displayName || (M.displayName = "DirectoryIcon")
            } catch {}
            try {
                H.displayName || (H.displayName = "FileResultIcon")
            } catch {}
            try {
                $.displayName || ($.displayName = "MemoizedFileResultRow")
            } catch {}
            try {
                W.displayName || (W.displayName = "HighlightMatch")
            } catch {}
        },
        17206: (e, t, n) => {
            n.d(t, {
                $: () => y,
                f: () => p
            });
            var r = n(85893),
                i = n(46263),
                o = n(86283),
                a = n(85529),
                s = n(51526),
                l = n(42483),
                c = n(67294),
                d = n(22554),
                u = n(31174),
                h = n(5262),
                m = n(13816),
                f = n(90342);
            let p = c.forwardRef(({
                ariaActiveDescendant: e,
                ariaControls: t,
                ariaExpanded: n,
                ariaHasPopup: o,
                onBlur: u,
                onFocus: m,
                onKeyDown: f,
                onPreload: p,
                onSearch: g,
                query: b,
                onFindFilesShortcut: j,
                sx: w = {}
            }, v) => {
                let {
                    sendRepoClickEvent: N
                } = (0, h.a)(), [C, k] = c.useState(b), S = c.useRef((0, i.D)(e => g(e), 250));
                c.useEffect(() => {
                    k(b)
                }, [b]);
                let I = b ? (0, r.jsx)(s.Z.Action, {
                    onClick: () => {
                        N("FILE_TREE.CANCEL_SEARCH"), g("")
                    },
                    icon: a.XCircleFillIcon,
                    "aria-label": "Clear",
                    sx: {
                        color: "fg.subtle"
                    }
                }) : void 0;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(d.I, {
                        children: (0, r.jsx)(x, {
                            inputRef: v,
                            onFindFilesShortcut: j
                        })
                    }), (0, r.jsx)(s.Z, {
                        autoFocus: y(),
                        ref: v,
                        value: C,
                        onKeyDown: f,
                        onChange: e => {
                            k(e.target.value), p(), S.current(e.target.value)
                        },
                        sx: {
                            display: "flex",
                            ...w
                        },
                        "aria-label": "Go to file",
                        "aria-activedescendant": e,
                        role: o ? "combobox" : void 0,
                        "aria-controls": t,
                        "aria-expanded": n,
                        "aria-haspopup": o ? "dialog" : void 0,
                        autoCorrect: "off",
                        spellCheck: "false",
                        placeholder: "Go to file",
                        leadingVisual: a.SearchIcon,
                        trailingAction: I,
                        trailingVisual: I ? void 0 : () => (0, r.jsx)(d.I, {
                            children: (0, r.jsx)(l.Z, {
                                sx: {
                                    mr: "-6px"
                                },
                                children: (0, r.jsx)("kbd", {
                                    children: "t"
                                })
                            })
                        }),
                        onFocus: e => {
                            p(), e.target.select(), m ? .(e)
                        },
                        onBlur: u,
                        onClick: () => N("FILE_TREE.SEARCH_BOX")
                    })]
                })
            });

            function x({
                inputRef: e,
                onFindFilesShortcut: t
            }) {
                let {
                    sendRepoKeyDownEvent: n
                } = (0, h.a)(), {
                    findFilesShortcut: i
                } = (0, u.bx)();
                return (0, r.jsx)(f.P, {
                    buttonFocusId: m.KG,
                    buttonHotkey: i.hotkey,
                    onButtonClick: () => {
                        t ? .(), e.current ? .focus(), n("GO_TO_FILE")
                    }
                })
            }

            function y() {
                let e = new URLSearchParams(o.ssrSafeLocation.search);
                return "1" === e.get("search")
            }
            p.displayName = "FilesSearchBox";
            try {
                x.displayName || (x.displayName = "FindFilesShortcut")
            } catch {}
        },
        64071: (e, t, n) => {
            n.d(t, {
                Is: () => d,
                KG: () => s,
                Lr: () => l,
                QV: () => c
            });
            var r = n(85893),
                i = n(67294),
                o = n(89250);
            let a = (0, i.createContext)({
                banners: [],
                addBanner: () => void 0,
                addQueuedBanner: () => void 0
            });

            function s() {
                return (0, i.useContext)(a).banners
            }

            function l() {
                return (0, i.useContext)(a).addBanner
            }

            function c() {
                return (0, i.useContext)(a).addQueuedBanner
            }

            function d({
                children: e
            }) {
                let t = (0, o.TH)(),
                    [n, s] = (0, i.useState)([]),
                    [l, c] = (0, i.useState)([]),
                    d = (0, i.useCallback)(e => s(t => [...t, e]), []),
                    u = (0, i.useCallback)(e => c(t => [...t, e]), []),
                    h = (0, i.useMemo)(() => ({
                        banners: n,
                        addBanner: d,
                        addQueuedBanner: u
                    }), [d, u, n]);
                return (0, i.useEffect)(() => {
                    s(l), c([])
                }, [t.key]), (0, r.jsx)(a.Provider, {
                    value: h,
                    children: e
                })
            }
            try {
                a.displayName || (a.displayName = "CodeViewBannersContext")
            } catch {}
            try {
                d.displayName || (d.displayName = "CodeViewBannersProvider")
            } catch {}
        },
        74176: (e, t, n) => {
            n.d(t, {
                Y: () => l,
                o: () => c
            });
            var r = n(85893),
                i = n(46263),
                o = n(69942),
                a = n(67294);
            let s = (0, a.createContext)(o._G.small);

            function l({
                children: e,
                initialValue: t,
                contentRef: n
            }) {
                let [l, c] = (0, a.useState)(t || o._G.large);
                return (0, a.useEffect)(() => {
                    if (!n) return;
                    c((0, o.ZV)(n.offsetWidth));
                    let e = new ResizeObserver((0, i.D)(() => {
                        c((0, o.ZV)(n.offsetWidth))
                    }));
                    return e.observe(n), () => e.disconnect()
                }, [c, n]), (0, r.jsx)(s.Provider, {
                    value: l,
                    children: e
                })
            }

            function c() {
                return (0, a.useContext)(s)
            }
            try {
                s.displayName || (s.displayName = "ContentSizeContext")
            } catch {}
            try {
                l.displayName || (l.displayName = "ContentSizeProvider")
            } catch {}
        },
        51188: (e, t, n) => {
            n.d(t, {
                Ez: () => u,
                Uc: () => c,
                nO: () => d
            });
            var r = n(85893),
                i = n(78212),
                o = n(89445),
                a = n(67294);
            let s = {
                    showLicenseMeta: !1,
                    license: null,
                    codeownerInfo: {
                        codeownerPath: null,
                        ownedByCurrentUser: null,
                        ownersForFile: null,
                        ruleForPathLine: null
                    },
                    newDiscussionPath: null,
                    newIssuePath: null
                },
                l = a.createContext(s);

            function c({
                children: e,
                ...t
            }) {
                return (0, r.jsx)(l.Provider, {
                    value: t,
                    children: e
                })
            }

            function d() {
                return a.useContext(l)
            }

            function u(e, t, n, r) {
                let [l, c] = (0, a.useState)(s), d = t && !r ? (0, i.zh)({
                    repo: e,
                    commitish: t.name,
                    path: n
                }) : null;
                return (0, a.useEffect)(() => {
                    if (!d) return;
                    let e = !1,
                        t = async () => {
                            c(s);
                            let t = await (0, o.v)(d);
                            if (!e) try {
                                if (t.ok) {
                                    let e = await t.json();
                                    e && "boolean" == typeof e.showLicenseMeta && "object" == typeof e.codeownerInfo && c(e)
                                } else c(s)
                            } catch (e) {
                                c(s)
                            }
                        };
                    return t(),
                        function() {
                            e = !0
                        }
                }, [d]), l
            }
            try {
                l.displayName || (l.displayName = "DeferredMetadataContext")
            } catch {}
            try {
                c.displayName || (c.displayName = "DeferredMetadataProvider")
            } catch {}
        },
        66523: (e, t, n) => {
            n.d(t, {
                aM: () => a,
                ve: () => s
            });
            var r = n(85893),
                i = n(67294);
            let o = (0, i.createContext)({
                query: "",
                setQuery: () => void 0
            });

            function a() {
                return (0, i.useContext)(o)
            }

            function s({
                children: e
            }) {
                let [t, n] = (0, i.useState)(""), a = (0, i.useMemo)(() => ({
                    query: t,
                    setQuery: n
                }), [n, t]);
                return (0, r.jsx)(o.Provider, {
                    value: a,
                    children: e
                })
            }
            try {
                o.displayName || (o.displayName = "FileQueryContext")
            } catch {}
            try {
                s.displayName || (s.displayName = "FileQueryProvider")
            } catch {}
        },
        53467: (e, t, n) => {
            n.d(t, {
                K: () => a,
                n: () => s
            });
            var r = n(85893),
                i = n(67294);
            let o = i.createContext(!0);

            function a({
                allShortcutsEnabled: e,
                children: t
            }) {
                return (0, r.jsxs)(o.Provider, {
                    value: e,
                    children: [" ", t, " "]
                })
            }

            function s() {
                return i.useContext(o)
            }
            try {
                o.displayName || (o.displayName = "AllShortcutsEnabledContext")
            } catch {}
            try {
                a.displayName || (a.displayName = "AllShortcutsEnabledProvider")
            } catch {}
        },
        73690: (e, t, n) => {
            n.d(t, {
                M: () => a,
                Q: () => s
            });
            var r = n(85893),
                i = n(67294);
            let o = i.createContext(void 0);

            function a({
                blame: e,
                children: t
            }) {
                return (0, r.jsxs)(o.Provider, {
                    value: e,
                    children: [" ", t, " "]
                })
            }

            function s() {
                return i.useContext(o)
            }
            try {
                o.displayName || (o.displayName = "CurrentBlameContext")
            } catch {}
            try {
                a.displayName || (a.displayName = "CurrentBlameProvider")
            } catch {}
        },
        17391: (e, t, n) => {
            n.d(t, {
                G: () => s,
                d: () => a
            });
            var r = n(85893),
                i = n(67294);
            let o = i.createContext({});

            function a({
                blob: e,
                children: t
            }) {
                return (0, r.jsxs)(o.Provider, {
                    value: e,
                    children: [" ", t, " "]
                })
            }

            function s() {
                return i.useContext(o)
            }
            try {
                o.displayName || (o.displayName = "CurrentBlobContext")
            } catch {}
            try {
                a.displayName || (a.displayName = "CurrentBlobProvider")
            } catch {}
        },
        84312: (e, t, n) => {
            n.d(t, {
                $L: () => u,
                S6: () => l,
                Ub: () => d,
                k: () => c
            });
            var r = n(85893),
                i = n(67294),
                o = n(73690),
                a = n(17391);
            let s = i.createContext(null);

            function l({
                children: e
            }) {
                let t = (0, a.G)(),
                    n = (0, o.Q)(),
                    l = i.useMemo(() => n ? null : new Map, [t, n]);
                return (0, r.jsxs)(s.Provider, {
                    value: l,
                    children: [" ", e, " "]
                })
            }

            function c() {
                return i.useContext(s)
            }

            function d() {
                let e = i.useContext(s);
                return (0, i.useCallback)(t => e ? .get(t), [e])
            }

            function u() {
                let e = i.useContext(s);
                return (0, i.useCallback)((t, n) => {
                    e && (e.has(t) ? e.get(t) ? .push(n) : e.set(t, [n]))
                }, [e])
            }
            try {
                s.displayName || (s.displayName = "CurrentLineRefMapContext")
            } catch {}
            try {
                l.displayName || (l.displayName = "CurrentLineRefMapProvider")
            } catch {}
        },
        80624: (e, t, n) => {
            n.d(t, {
                Br: () => l,
                Ou: () => c,
                Tv: () => s
            });
            var r = n(85893),
                i = n(17891),
                o = n(67294);
            let a = o.createContext({});

            function s({
                children: e,
                ...t
            }) {
                return (0, r.jsx)(a.Provider, {
                    value: t,
                    children: e
                })
            }

            function l() {
                return o.useContext(a)
            }

            function c() {
                return (0, i.M)()
            }
            try {
                a.displayName || (a.displayName = "FilesPageInfoContext")
            } catch {}
            try {
                s.displayName || (s.displayName = "FilesPageInfoProvider")
            } catch {}
        },
        31360: (e, t, n) => {
            n.d(t, {
                T: () => s,
                c: () => a
            });
            var r = n(85893),
                i = n(67294);
            let o = i.createContext({});

            function a({
                refreshTree: e,
                children: t
            }) {
                return (0, r.jsxs)(o.Provider, {
                    value: e,
                    children: [" ", t, " "]
                })
            }

            function s() {
                return i.useContext(o)
            }
            try {
                o.displayName || (o.displayName = "RefreshTreeContext")
            } catch {}
            try {
                a.displayName || (a.displayName = "RefreshTreeProvider")
            } catch {}
        },
        80895: (e, t, n) => {
            n.d(t, {
                Z: () => o5
            });
            var r, i, o, a, s, l, c, d, u, h, m, f = n(85893);

            function p(e) {
                return "blob" in e
            }

            function x(e) {
                return "deleteInfo" in e && "webCommitInfo" in e
            }

            function y(e) {
                return "editInfo" in e && "webCommitInfo" in e
            }

            function g(e) {
                return "overview" in e
            }

            function b(e) {
                return "tree" in e
            }! function(e) {
                e.FALSE_POSITIVE = "false_positive", e.USED_IN_TESTS = "used_in_tests", e.WILL_FIX_LATER = "will_fix_later"
            }(r || (r = {})),
            function(e) {
                e.README = "readme", e.CODE_OF_CONDUCT = "code_of_conduct", e.LICENSE = "license", e.SECURITY = "security"
            }(i || (i = {}));
            var j = n(32769),
                w = n(78212),
                v = n(67294),
                N = n(88479),
                C = n(73968),
                k = n(69942),
                S = n(86283),
                I = n(11117),
                R = n(99550),
                Z = n(59807),
                T = n(81738),
                L = n(68203),
                E = n(42483),
                B = n(81248),
                _ = n(75308),
                D = n(64325),
                F = n(90874),
                O = n(46263),
                A = n(85529),
                P = n(50919),
                M = n(51526),
                H = n(98833),
                $ = n(97011),
                W = n(41982),
                z = n(87738),
                U = n(22554),
                G = n(57941),
                V = n(5262),
                q = n(81455),
                K = n(79902);

            function Y({
                symbolKind: e,
                showFullSymbol: t
            }) {
                return e ? (0, f.jsxs)(E.Z, {
                    sx: {
                        display: "flex",
                        flexDirection: "row",
                        position: "relative",
                        ...t ? {} : {
                            mr: 2
                        }
                    },
                    children: [(0, f.jsx)(E.Z, {
                        sx: {
                            backgroundColor: e.plColor,
                            opacity: .1,
                            position: "absolute",
                            borderRadius: 5,
                            alignItems: "stretch",
                            display: "flex",
                            width: "100%",
                            height: "100%"
                        }
                    }), (0, f.jsx)(E.Z, {
                        sx: {
                            color: e.plColor,
                            borderRadius: 5,
                            fontWeight: 600,
                            ...t ? {
                                fontSize: "small",
                                px: 2,
                                py: "1px",
                                mt: "2px"
                            } : {
                                fontSize: "smaller",
                                px: 1,
                                py: "1px"
                            }
                        },
                        children: t ? e.fullName : e.shortName
                    })]
                }) : null
            }
            try {
                Y.displayName || (Y.displayName = "SymbolIndicator")
            } catch {}
            let Q = v.memo(function({
                treeSymbols: e,
                onTreeSymbolSelect: t
            }) {
                let n = !e.some(e => e.isParent || e.children.length > 0);
                return (0, f.jsx)(E.Z, {
                    id: "filter-results",
                    sx: {
                        mb: -2,
                        overflowY: "auto",
                        maxHeight: "calc(100vh - 237px)",
                        pl: 3,
                        pb: 2,
                        pt: 1
                    },
                    children: (0, f.jsx)(q.L, {
                        "aria-label": "Code Navigation",
                        flat: n,
                        children: e.map((e, n) => (0, f.jsx)(J, {
                            id: `${n}${e.symbol.name}`,
                            symbol: e,
                            depth: e.isParent ? 1 : 2,
                            onSelect: t
                        }, `${n}${e.symbol.name}`))
                    })
                })
            });

            function X({
                symbol: e
            }) {
                return (0, f.jsxs)(E.Z, {
                    sx: {
                        display: "flex"
                    },
                    children: [(0, f.jsx)(Y, {
                        symbolKind: e.symbol.kind
                    }), "  ", (0, f.jsx)(K.Z, {
                        title: e.symbol.name,
                        sx: {
                            maxWidth: 180,
                            display: "block"
                        },
                        children: (0, f.jsx)($.Z, {
                            children: e.symbol.name
                        })
                    })]
                })
            }

            function J({
                symbol: e,
                depth: t,
                onSelect: n,
                id: r
            }) {
                let [i, o] = (0, v.useState)(t <= 7);
                return (0, f.jsxs)(q.L.Item, {
                    onSelect: () => n(e.symbol),
                    expanded: i,
                    onExpandedChange: () => o(!i),
                    id: r,
                    children: [(0, f.jsx)(X, {
                        symbol: e
                    }), e.isParent && e.children.length > 0 && (0, f.jsx)(q.L.SubTree, {
                        children: e.children.map((e, r) => (0, f.jsx)(J, {
                            symbol: e,
                            depth: e.isParent ? t + 1 : t,
                            onSelect: n,
                            id: `${r}${e.symbol.name}`
                        }, `${r}${e.symbol.name}`))
                    })]
                })
            }
            try {
                Q.displayName || (Q.displayName = "CodeNavSymbolTree")
            } catch {}
            try {
                X.displayName || (X.displayName = "CodeNavTreeContent")
            } catch {}
            try {
                J.displayName || (J.displayName = "CodeNavTreeItem")
            } catch {}
            var ee = n(15345),
                et = n(48542),
                en = n(17840),
                er = n(52516),
                ei = n(79515),
                eo = n(73290);
            let ea = v.memo(function({
                symbol: e,
                filterText: t,
                onSelect: n,
                focused: r,
                index: i
            }) {
                return (0, f.jsx)(er.S.Item, {
                    role: "option",
                    id: `jump-to-item-${i}`,
                    "aria-selected": r,
                    sx: {
                        minWidth: 0,
                        ...r ? {
                            backgroundColor: "var(--bgColor-muted, var(--color-canvas-subtle)) !important"
                        } : {}
                    },
                    onSelect: () => n(e),
                    children: (0, f.jsx)(eo.Z, {
                        href: e.href(),
                        sx: {
                            ":hover": {
                                textDecoration: "none"
                            }
                        },
                        children: (0, f.jsxs)(E.Z, {
                            style: {
                                display: "flex"
                            },
                            children: [(0, f.jsx)(Y, {
                                symbolKind: e.kind
                            }), "  ", (0, f.jsx)(E.Z, {
                                style: {
                                    display: "flex",
                                    minWidth: 0,
                                    alignItems: "flex-end"
                                },
                                children: (0, f.jsx)(ei.h, {
                                    search: t,
                                    text: e.name,
                                    overflowWidth: 175,
                                    hideOverflow: !0
                                }, e.fullyQualifiedName)
                            })]
                        })
                    })
                })
            });
            try {
                ea.displayName || (ea.displayName = "JumpToItem")
            } catch {}

            function es(e) {
                return (0, f.jsx)(el, { ...e
                })
            }

            function el({
                codeSymbols: e,
                filterText: t,
                onSelect: n,
                focusedIndex: r
            }) {
                let i = (0, v.useRef)(e.length),
                    o = (0, v.useRef)(""),
                    {
                        containerRef: a
                    } = (0, en.v)({
                        bindKeys: et.Qw.ArrowVertical | et.Qw.HomeAndEnd
                    });
                return (0, v.useEffect)(() => {
                    e.length === i.current && (o.current += "\u200B");
                    let t = 1 === e.length ? "symbol" : "symbols";
                    (0, ee.x)(`${e.length} ${t} found${o.current}`), i.current = e.length
                }, [e]), (0, f.jsx)(er.S, {
                    ref: a,
                    role: "listbox",
                    id: "filter-results",
                    "aria-orientation": "vertical",
                    sx: {
                        maxHeight: "68vh",
                        overflowY: "auto"
                    },
                    children: e.map((e, i) => {
                        let {
                            name: o,
                            lineNumber: a
                        } = e;
                        return (0, f.jsx)(ea, {
                            symbol: e,
                            filterText: t,
                            onSelect: n,
                            focused: i === r,
                            index: i
                        }, `${o}_${a}`)
                    })
                })
            }
            try {
                es.displayName || (es.displayName = "JumpToItemList")
            } catch {}
            try {
                el.displayName || (el.displayName = "FullJumpToItemList")
            } catch {}

            function ec({
                filterText: e,
                isFindInFile: t
            }) {
                let [n, r] = (0, v.useState)(t ? "No matches found" : "No symbols found"), i = (0, j.H)(), o = (0, v.useRef)(!0);
                return (0, v.useEffect)(() => {
                    if (o.current) {
                        o.current = !1;
                        return
                    }
                    r(`${n}\u200B`)
                }, [e]), (0, f.jsxs)(E.Z, {
                    sx: {
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                        pb: 2
                    },
                    children: ["" === e && (0, f.jsxs)(f.Fragment, {
                        children: [(0, f.jsx)(E.Z, {
                            sx: {
                                bg: "canvas.subtle",
                                borderRadius: 6,
                                p: "16px"
                            },
                            children: (0, f.jsxs)(E.Z, {
                                sx: {
                                    textAlign: "center"
                                },
                                children: [(0, f.jsx)(_.Z, {
                                    as: "h3",
                                    sx: {
                                        fontSize: 0,
                                        marginBottom: "4px"
                                    },
                                    children: "Symbol outline not available for this file"
                                }), (0, f.jsx)(E.Z, {
                                    sx: {
                                        justifyContent: "center",
                                        alignItems: "center",
                                        display: "flex",
                                        fontSize: "12px",
                                        color: "fg.muted"
                                    },
                                    children: "To inspect a symbol, try clicking on the symbol directly in the code view."
                                })]
                            })
                        }), (0, f.jsxs)(E.Z, {
                            sx: {
                                mt: "8px",
                                fontSize: 0,
                                textAlign: "center",
                                color: "fg.muted"
                            },
                            children: [" ", "Code navigation supports a limited number of languages.", " ", (0, f.jsx)(eo.Z, {
                                href: "https://docs.github.com/repositories/working-with-files/using-files/navigating-code-on-github",
                                children: "See which languages are supported."
                            })]
                        })]
                    }), e && (0, f.jsxs)(f.Fragment, {
                        children: [(0, f.jsx)(H.Z, {
                            icon: A.SearchIcon,
                            size: 24
                        }), (0, f.jsx)($.Z, {
                            as: "h3",
                            sx: {
                                textAlign: "center",
                                fontWeight: 600,
                                fontSize: 3,
                                py: 2
                            },
                            role: "alert",
                            "aria-relevant": "all",
                            children: n
                        })]
                    }), e && (0, f.jsxs)($.Z, {
                        id: "filter-zero-state",
                        sx: {
                            textAlign: "center",
                            px: 3,
                            mt: 2,
                            fontSize: 0,
                            color: "fg.subtle"
                        },
                        children: ["No lines in this file contain that string.", (0, f.jsx)("br", {}), "Search in", " ", (0, f.jsxs)(eo.Z, {
                            href: (0, w.mY)({
                                owner: i.ownerLogin,
                                repo: i.name,
                                searchTerm: e
                            }),
                            inline: !0,
                            children: [i.ownerLogin, "/", i.name]
                        }), " ", "or", " ", (0, f.jsx)(eo.Z, {
                            href: (0, w.GX)({
                                searchTerm: e
                            }),
                            inline: !0,
                            children: "all of GitHub"
                        })]
                    })]
                })
            }
            try {
                ec.displayName || (ec.displayName = "SymbolZeroState")
            } catch {}
            let ed = "symbols-pane-header";

            function eu({
                codeSymbols: e,
                onSymbolSelect: t,
                treeSymbols: n,
                autoFocusSearch: r,
                onClose: i
            }) {
                let [o, a] = (0, v.useState)(""), [s, l] = (0, v.useState)(e);
                return (0, v.useEffect)(() => {
                    if ("" === o) {
                        l(e);
                        return
                    }
                    let t = function(e, t) {
                        let n = e.replace(/\s/g, "");
                        return (0, W.W)(t, e => {
                            let t = (0, z.EW)(e.name, n);
                            return t > 0 ? {
                                score: t,
                                text: e.name
                            } : null
                        }, z.qu)
                    }(o, e);
                    l(t)
                }, [o, e]), (0, f.jsx)(eh, {
                    treeSymbols: n,
                    codeSymbols: s,
                    filterText: o,
                    setFilterText: a,
                    onSymbolSelect: t,
                    autoFocusSearch: r,
                    onClose: i
                })
            }

            function eh({
                codeSymbols: e,
                setFilterText: t,
                filterText: n,
                onSymbolSelect: r,
                treeSymbols: i,
                autoFocusSearch: o,
                onClose: a
            }) {
                let s = e ? .length > 0,
                    l = i.length > 0,
                    [c, d] = (0, v.useState)(-1),
                    {
                        sendRepoKeyDownEvent: u
                    } = (0, V.a)(),
                    h = (0, v.useRef)(null),
                    m = !l || "" !== n;
                (0, v.useEffect)(() => {
                    o && h.current ? .focus()
                }, [o]), (0, G.Sl)(() => {
                    h.current ? .focus()
                });
                let p = (0, v.useMemo)(() => (0, O.D)(() => {
                    u("BLOB_SYMBOLS_MENU.FILTER_SYMBOLS")
                }, 400), [u]);
                return (0, f.jsxs)(E.Z, {
                    sx: {
                        py: 2,
                        px: 3
                    },
                    "aria-labelledby": ed,
                    children: [(0, f.jsxs)(E.Z, {
                        sx: {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        },
                        children: [(0, f.jsx)(E.Z, {
                            as: "h2",
                            sx: {
                                fontSize: 1,
                                order: 1,
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                fontWeight: 600
                            },
                            id: ed,
                            tabIndex: -1,
                            children: "Symbols"
                        }), (0, f.jsx)(P.h, {
                            "aria-label": "Close symbols",
                            "data-hotkey": "Escape",
                            icon: A.XIcon,
                            sx: {
                                order: 3,
                                color: "fg.default",
                                mr: -2
                            },
                            onClick: a,
                            variant: "invisible"
                        })]
                    }), (s || l) && (0, f.jsx)(E.Z, {
                        sx: {
                            fontSize: 0,
                            color: "fg.muted",
                            pt: 2
                        },
                        children: "Find definitions and references for functions and other symbols in this file by clicking a symbol below or in the code."
                    }), (s || "" !== n) && (0, f.jsx)(M.Z, {
                        block: !0,
                        leadingVisual: () => (0, f.jsx)(H.Z, {
                            "aria-hidden": "true",
                            icon: A.FilterIcon
                        }),
                        ref: h,
                        trailingAction: n ? (0, f.jsx)(M.Z.Action, {
                            onClick: () => {
                                t(""), d(-1)
                            },
                            icon: A.XCircleFillIcon,
                            "aria-label": "Clear input",
                            "data-testid": "clear-search",
                            sx: {
                                color: "fg.subtle"
                            }
                        }) : (0, f.jsx)(f.Fragment, {}),
                        trailingVisual: n ? void 0 : () => (0, f.jsx)(U.I, {
                            children: (0, f.jsx)(E.Z, {
                                sx: {
                                    mr: "6px"
                                },
                                children: (0, f.jsx)("kbd", {
                                    children: "r"
                                })
                            })
                        }),
                        sx: {
                            mt: 2,
                            borderRadius: 2
                        },
                        placeholder: "Filter symbols",
                        value: n,
                        name: "Filter symbols",
                        "aria-label": "Filter symbols",
                        "aria-controls": !s && m ? "filter-zero-state" : "filter-results",
                        "aria-expanded": "true",
                        "aria-autocomplete": "list",
                        "aria-activedescendant": -1 === c ? void 0 : `jump-to-item-${c}`,
                        onKeyDown: t => {
                            if ("ArrowDown" === t.key || ("N" === t.key || "n" === t.key) && t.ctrlKey) {
                                let t = Math.min(c + 1, e.length - 1);
                                d(t)
                            } else "ArrowUp" === t.key || ("P" === t.key || "p" === t.key) && t.ctrlKey ? d(Math.max(c - 1, 0)) : "Enter" === t.key && e[c] ? r(e[c]) : "Escape" === t.key && a()
                        },
                        role: "combobox",
                        onChange: e => {
                            let n = e.target;
                            t(n.value), p(), d(-1)
                        }
                    }), !m && (0, f.jsx)(E.Z, {
                        sx: {
                            ml: -3,
                            mb: -2
                        },
                        children: (0, f.jsx)(Q, {
                            treeSymbols: i,
                            onTreeSymbolSelect: r
                        })
                    }), s && m && (0, f.jsx)(es, {
                        codeSymbols: e,
                        filterText: n,
                        onSelect: r,
                        focusedIndex: c
                    }), !s && m && (0, f.jsx)($.Z, {
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mt: 2
                        },
                        children: (0, f.jsx)(ec, {
                            filterText: n
                        })
                    })]
                })
            }
            try {
                eu.displayName || (eu.displayName = "CodeNavSymbolNavigation")
            } catch {}
            try {
                eh.displayName || (eh.displayName = "JumpToActionList")
            } catch {}
            var em = n(87054),
                ef = n(95253),
                ep = n(90342),
                ex = n(44544);
            let ey = (0, ex.Z)("localStorage"),
                eg = (0, v.createContext)({
                    openPanel: void 0,
                    setOpenPanel: () => void 0
                });

            function eb({
                children: e,
                payload: t,
                openPanelRef: n
            }) {
                let r = "blame" in t,
                    i = b(t),
                    o = (0, F.x)(),
                    a = (0, v.useRef)(),
                    [s, l] = (0, v.useState)(() => {
                        let e = ey.getItem("codeNavOpen");
                        if (!o && "" !== e && null !== e || o && t.symbolsExpanded) return "codeNav"
                    }),
                    c = (r || i) && "codeNav" === s ? void 0 : s;
                v.useEffect(() => {
                    n.current = c
                }, [c, n]);
                let d = (0, v.useCallback)((e, t) => {
                    l(n => (n && a.current && a.current.focus(), a.current = t, r || i && "codeNav" === e ? void 0 : e))
                }, [r, i]);
                ! function(e) {
                    let {
                        screenSize: t
                    } = (0, k.eI)(), n = (0, v.useRef)(t);
                    (0, v.useEffect)(() => {
                        let r = n.current >= k._G.large,
                            i = n.current === t;
                        t < k._G.large && (r || i) && e(void 0), n.current = t
                    }, [t, e])
                }(d);
                let u = (0, v.useMemo)(() => ({
                    openPanel: c,
                    setOpenPanel: d
                }), [c, d]);
                return (0, f.jsx)(eg.Provider, {
                    value: u,
                    children: e
                })
            }

            function ej() {
                return (0, v.useContext)(eg)
            }
            try {
                eg.displayName || (eg.displayName = "OpenPanelContext")
            } catch {}
            try {
                eb.displayName || (eb.displayName = "OpenPanelProvider")
            } catch {}
            var ew = n(73690),
                ev = n(17391),
                eN = n(84312),
                eC = n(80624),
                ek = n(31174),
                eS = n(92059),
                eI = n(79655),
                eR = n(56334),
                eZ = n(13816),
                eT = n(8903);
            let DebouncedWorkerManager = class DebouncedWorkerManager {
                post(e) {
                    if (this.debounceOverrideCondition && this.debounceOverrideCondition(e)) return this.delayId && clearTimeout(this.delayId), this.postNow(e);
                    this.idle() ? (this.delayId && clearTimeout(this.delayId), this.delayId = setTimeout(() => {
                        this.postNow(e)
                    }, this.delayMs)) : this.nextRequest = e
                }
                postNow(e) {
                    this.currentRequest = e, this.worker.postMessage(e)
                }
                idle() {
                    return !this.currentRequest
                }
                terminate() {
                    this.worker.terminate()
                }
                constructor(e, t = 200, n) {
                    this.worker = e, this.delayMs = t, this.debounceOverrideCondition = n, this.currentRequest = void 0, this.nextRequest = void 0, this.worker.onmessage = ({
                        data: e
                    }) => {
                        this.onResponse(e), this.nextRequest ? (this.postNow(this.nextRequest), this.nextRequest = void 0) : this.currentRequest = void 0
                    }
                }
            };
            var eL = n(43811);

            function eE({
                data: e
            }) {
                let {
                    query: t,
                    lines: n,
                    currentCodeReferences: r
                } = e;
                return {
                    ranges: r ? (0, eS.e7)(r, n, (0, eS.Ny)(t)) : (0, eS.v)(n, (0, eS.Ny)(t)),
                    query: t
                }
            }
            var eB = n(20286),
                e_ = n(63372),
                eD = n(89445);

            function eF() {
                return async function(e, t) {
                    let n = new FormData;
                    n.set("tree_view_expanded_preference", null === e ? "" : e ? "true" : "false"), n.set("symbols_view_expanded_preference", null === t ? "" : t ? "true" : "false"), (0, eD.Q)("/repos/preferences", {
                        method: "PUT",
                        body: n,
                        headers: {
                            Accept: "application/json"
                        }
                    })
                }
            }
            var eO = n(86480);
            let eA = (0, v.createContext)({
                findInFileOpen: !1,
                setFindInFileOpen: () => void 0
            });

            function eP({
                children: e,
                searchTerm: t,
                setSearchTerm: n,
                isBlame: r
            }) {
                let i = (0, eO.nj)(r),
                    o = (0, v.useRef)(""),
                    [a, s] = (0, v.useState)(!1),
                    l = (0, v.useCallback)(e => {
                        e && "" === t && "" !== o.current ? n(o.current) : e || "" === t || (o.current = t, n("")), s(e)
                    }, [t, n]),
                    c = (0, v.useMemo)(() => ({
                        findInFileOpen: !i && a,
                        setFindInFileOpen: l
                    }), [a, l, i]);
                return (0, f.jsx)(eA.Provider, {
                    value: c,
                    children: e
                })
            }

            function eM() {
                return (0, v.useContext)(eA)
            }
            try {
                eA.displayName || (eA.displayName = "FindInFileOpenContext")
            } catch {}
            try {
                eP.displayName || (eP.displayName = "FindInFileOpenProvider")
            } catch {}

            function eH() {
                let e = (0, ev.G)(),
                    t = (0, ew.Q)();
                return !e.renderedFileInfo || e.shortPath || t ? e.renderImageOrRaw ? e.image ? "Image" : "TooLargeError" : e.csv && !t ? "CSV" : e.richText && !t ? "Markdown" : (e.issueTemplate ? .structured && e.issueTemplate.valid || e.discussionTemplate && e.discussionTemplate.valid) && !t && !e.isPlain ? "IssueTemplate" : "Code" : "FileRenderer"
            }

            function e$(e) {
                throw Error(`Unexpected object: ${e}`)
            }! function(e) {
                e.FileRenderer = "FileRenderer", e.Image = "Image", e.TooLargeError = "TooLargeError", e.CSV = "CSV", e.Markdown = "Markdown", e.IssueTemplate = "IssueTemplate", e.Code = "Code"
            }(o || (o = {}));
            var eW = n(78806),
                ez = n(93062),
                eU = n(89250),
                eG = n(87098),
                eV = n(98950),
                eq = n(74121);
            async function eK(e) {
                let t = await fetch(e, {
                    method: "get"
                });
                if (!t.ok) throw Error(`Failed to fetch ${e}: ${t.status} ${t.statusText}`);
                let n = (await t.text()).replace(/\r?\n$/, "");
                return new Blob([n], {
                    type: "text/plain"
                })
            }

            function eY(e) {
                let t, n;
                switch (e) {
                    case 2:
                        t = "Copied!", n = (0, f.jsx)(H.Z, {
                            icon: A.CheckIcon
                        });
                        break;
                    case 1:
                        t = "Copying", n = (0, f.jsx)(eq.Z, {
                            size: "small"
                        });
                        break;
                    case 3:
                        t = "Something went wrong. Try again.", n = (0, f.jsx)(H.Z, {
                            icon: A.AlertIcon
                        });
                        break;
                    default:
                        t = "Copy", n = (0, f.jsx)(H.Z, {
                            icon: A.CopyIcon
                        })
                }
                return {
                    ariaLabel: t,
                    content: n
                }
            }

            function eQ() {
                let {
                    sendRepoClickEvent: e
                } = (0, V.a)(), {
                    rawBlobUrl: t
                } = (0, ev.G)(), n = (0, v.useRef)(!1);
                return (0, v.useEffect)(() => {
                    n.current = navigator.userAgent.toLowerCase().indexOf("firefox") > -1
                }, []), (0, v.useCallback)(async () => {
                    e("BLOB_RAW_DROPDOWN.COPY");
                    try {
                        let e = eK(t);
                        if (function() {
                                let e = "clipboard" in navigator,
                                    t = "undefined" != typeof ClipboardItem;
                                return e && t
                            }() && navigator && navigator.clipboard && "write" in navigator.clipboard && !n.current) await navigator.clipboard.write([new ClipboardItem({
                            "text/plain": e
                        })]);
                        else {
                            let t = await e;
                            if (!t) return a.Error;
                            await (0, eV.z)(await t.text())
                        }
                    } catch (e) {
                        return a.Error
                    }
                    return a.Success
                }, [n, e, t])
            }

            function eX({
                containerRef: e,
                shouldNotOverrideCopy: t
            }) {
                let {
                    selectAllShortcut: n
                } = (0, ek.bx)(), r = (0, v.useRef)(!1), i = eQ(), o = (0, v.useCallback)(() => {
                    r.current = !1, document.removeEventListener("selectionchange", o)
                }, []);
                (0, v.useEffect)(() => () => document.removeEventListener("selectionchange", o), [o]);
                let a = (0, v.useCallback)(t => {
                        e && e.current && (function(e) {
                            let t = document.createRange();
                            t.selectNode(e);
                            let n = window.getSelection();
                            n ? .removeAllRanges(), n ? .addRange(t)
                        }(e.current), t.preventDefault(), r.current = !0, setTimeout(() => document.addEventListener("selectionchange", o), 0))
                    }, [e, o]),
                    s = (0, v.useCallback)(e => {
                        r.current && (e.preventDefault(), i())
                    }, [i]);
                return (0, v.useEffect)(() => {
                    if (!t) return window.addEventListener("copy", s), () => window.removeEventListener("copy", s)
                }, [s, t]), (0, f.jsx)("button", {
                    hidden: !0,
                    "data-hotkey": n.hotkey,
                    onClick: a
                })
            }! function(e) {
                e[e.Idle = 0] = "Idle", e[e.Fetching = 1] = "Fetching", e[e.Success = 2] = "Success", e[e.Error = 3] = "Error"
            }(a || (a = {}));
            try {
                eX.displayName || (eX.displayName = "SelectAllShortcutButton")
            } catch {}

            function eJ({
                onAnchorClick: e,
                richText: t,
                stickyHeaderHeight: n,
                sx: r
            }) {
                let {
                    hash: i
                } = (0, eU.TH)(), o = (0, j.H)(), a = (0, L.s)(), s = (0, v.useRef)(null);
                return (0, v.useEffect)(() => {
                    let e = () => {
                        e0(window.location.hash, n)
                    };
                    return window.addEventListener("load", e), window.addEventListener("hashchange", e), () => {
                        window.removeEventListener("load", e), window.removeEventListener("hashchange", e)
                    }
                }, []), (0, T.b)(() => {
                    s.current && e0(window.location.hash, n)
                }, [i]), (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsx)(ez.wB, {
                        ref: s,
                        className: "js-snippet-clipboard-copy-unpositioned",
                        html: t,
                        sx: r,
                        "data-hpc": !0,
                        onClick: t => {
                            let r = t.metaKey || t.ctrlKey,
                                i = t.target.closest("a");
                            if (i && i.href) {
                                if (!r) {
                                    let e = i.href,
                                        r = new URL(e, window.location.origin);
                                    (0, eW.Z)(window.location.href, e) ? (e0(r.hash, n), window.location.hash === r.hash && t.preventDefault()) : e.startsWith(`${window.location.origin}/${o.ownerLogin}/${o.name}/`) && (a(r.pathname + r.search + r.hash), t.preventDefault())
                                }
                                e ? .(t)
                            }
                        }
                    }), (0, f.jsx)(eX, {
                        containerRef: s
                    })]
                })
            }

            function e0(e, t = 125) {
                if (!e) return;
                let n = (0, eG.$z)(e).toLowerCase(),
                    r = n.startsWith("user-content-") ? n : `user-content-${n}`,
                    i = (0, eG.Q)(document, r);
                i && document && document.defaultView && window.requestAnimationFrame(() => {
                    let e = i.getBoundingClientRect().top - document.body.getBoundingClientRect().top - t;
                    window.scrollTo({
                        top: e
                    });
                    let n = i.closest("h1,h2,h3,h4,h5,h6,li,span");
                    n && (n.focus(), n.setAttribute("data-react-autofocus", "true"))
                })
            }
            try {
                eJ.displayName || (eJ.displayName = "MarkdownContent")
            } catch {}
            var e1 = n(92562),
                e2 = n(62073);
            let e3 = (0, v.createContext)([]);
            try {
                e3.displayName || (e3.displayName = "SplitCodeownersErrorsContext")
            } catch {}
            var e4 = n(24601),
                e8 = n(81543),
                e6 = n(60193),
                e5 = n(85503),
                e9 = n(57294),
                e7 = n(60348),
                te = n(56498),
                tt = n(47001),
                tn = n(65379),
                tr = n(8386);
            let ti = [.007, .014, .03, .049, .084, .14, .23, .38, .62, Number.MAX_VALUE],
                to = {
                    "scale.orange.0": "#ffdfb6",
                    "scale.orange.1": "#ffc680",
                    "scale.orange.2": "#f0883e",
                    "scale.orange.3": "#f0883e",
                    "scale.orange.4": "#db6d28",
                    "scale.orange.5": "#bd561d",
                    "scale.orange.6": "#9b4215",
                    "scale.orange.7": "#762d0a",
                    "scale.orange.8": "#5a1e02",
                    "scale.orange.9": "#3d1300"
                };
            var ta = n(98917),
                ts = n(16275);
            let tl = v.forwardRef(td);

            function tc({
                copilotAccessAllowed: e,
                linesData: t,
                tabSize: n,
                onLineNumberClick: r
            }) {
                let i = (0, v.useRef)(null),
                    o = (0, ew.Q)(),
                    a = th(o, t);
                return (0, f.jsx)("div", {
                    className: "d-flex flex-column",
                    style: {
                        tabSize: n
                    },
                    ref: i,
                    "data-hpc": !0,
                    children: a.map((t, n) => (0, f.jsx)(tu, { ...t,
                        index: n,
                        copilotAccessAllowed: e,
                        onLineNumberClick: r
                    }, `blame-for-segment-${t.range?.start??t.linesData[0].lineNumber}`))
                })
            }

            function td({
                copilotAccessAllowed: e,
                linesData: t,
                tabSize: n,
                materializeAllLines: r,
                onLineNumberClick: i
            }, o) {
                let a = (0, v.useRef)(null),
                    s = (0, ew.Q)(),
                    {
                        screenSize: l
                    } = (0, k.eI)();
                (0, v.useImperativeHandle)(o, () => ({
                    scrollToTop: () => {
                        (0, eZ.nB)(0) || d.scrollToIndex(0, {
                            align: "start"
                        })
                    },
                    scrollToLine: e => {
                        (0, eZ.nB)(e) || d.scrollToIndex(e, {
                            align: "center"
                        })
                    }
                }));
                let c = (0, v.useCallback)(e => {
                        let n = t[e],
                            r = s ? .ranges[n.lineNumber];
                        return r && r.end === r.start ? window.innerWidth > k._G.medium ? 31 : 41 : 20
                    }, [t, s]),
                    d = (0, te.F)({
                        parentRef: a,
                        size: t.length,
                        overscan: r ? Number.MAX_SAFE_INTEGER : 100,
                        estimateSize: c
                    }),
                    u = d.virtualItems.map(e => ({ ...t[e.index],
                        virtualOffset: e.start
                    })),
                    h = th(s, u);
                return (0, f.jsx)(E.Z, {
                    sx: {
                        display: "flex",
                        flexDirection: "column",
                        isolation: "isolate",
                        position: "relative",
                        tabSize: n,
                        height: [`${d.totalSize+41*h.length}px`, `${d.totalSize+41*h.length}px`, `${d.totalSize}px`]
                    },
                    ref: a,
                    "data-hpc": !0,
                    children: h.map((t, n) => {
                        let r = t.linesData[0].virtualOffset ? ? 0;
                        return l < k._G.large && (r += (n ? ? 0) * 41), (0, f.jsx)(tu, {
                            range: t.range,
                            commit: t.commit,
                            linesData: t.linesData,
                            index: n,
                            copilotAccessAllowed: e,
                            onLineNumberClick: i,
                            virtualOffset: r
                        }, `blame-for-segment-${t.range?.start??t.linesData[0].lineNumber}`)
                    })
                })
            }

            function tu({
                range: e,
                commit: t,
                linesData: n,
                virtualOffset: r,
                copilotAccessAllowed: i,
                onLineNumberClick: o
            }) {
                return (0, f.jsx)("div", {
                    className: "react-blame-segment-wrapper",
                    style: void 0 !== r ? {
                        transform: `translateY(${r}px)`,
                        position: "absolute",
                        top: 0
                    } : void 0,
                    children: (0, f.jsxs)(f.Fragment, {
                        children: [e && t ? (0, f.jsx)(tm, {
                            range: e,
                            commit: t
                        }) : (0, f.jsx)("div", {
                            className: "height-full"
                        }), (0, f.jsxs)("div", {
                            className: "d-flex flex-row",
                            children: [(0, f.jsx)("div", {
                                className: `react-line-numbers ${n.length>1?"":"react-blame-no-line-data"}`,
                                children: n.map(e => (0, f.jsx)(ts._, {
                                    codeLineData: e,
                                    onClick: o
                                }, `line-number-${e.lineNumber}`))
                            }), (0, f.jsx)("div", {
                                className: `react-code-lines ${n.length>1?"":"react-blame-no-line-data"}`,
                                children: n.map(e => (0, f.jsx)(ta.E, {
                                    id: `LC${e.lineNumber}`,
                                    codeLineData: e,
                                    copilotAccessAllowed: i
                                }, `code-line=${e.lineNumber}`))
                            })]
                        })]
                    })
                })
            }

            function th(e, t) {
                if (!e) return [{
                    linesData: t
                }];
                let n = [],
                    r = null,
                    i = !0;
                for (let o of t) {
                    r || (r = {
                        linesData: []
                    });
                    let t = i ? Object.values(e ? .ranges ? ? {}).find(e => e.start <= o.lineNumber && e.end >= o.lineNumber) : e ? .ranges[o.lineNumber];
                    t && (r.range = t, r.commit = e.commits[t.commitOid]), r.linesData.push(o), r.range ? .end === o.lineNumber && (n.push(r), r = null), i = !1
                }
                return r && (n.push(r), r = null), n
            }
            let tm = v.memo(tf);

            function tf({
                range: e,
                commit: t
            }) {
                let n = (0, j.H)(),
                    r = new Date(t.committedDate),
                    i = new Date(n.createdAt),
                    o = (0, f.jsx)("div", {
                        className: "timestamp-ago",
                        children: (0, f.jsx)(tt.Z, {
                            date: r,
                            tense: "past",
                            sx: {
                                color: "fg.muted",
                                whiteSpace: "nowrap",
                                fontSize: "smaller"
                            }
                        })
                    });
                return (0, f.jsxs)("div", {
                    className: "react-blame-for-range d-flex",
                    children: [(0, f.jsx)("div", {
                        "aria-hidden": !0,
                        className: "age-indicator",
                        children: (0, f.jsx)(tx, {
                            commitDate: r,
                            repoCreationDate: i
                        })
                    }), (0, f.jsx)("div", {
                        className: "pt-1 timestamp-wrapper-desktop",
                        children: o
                    }), (0, f.jsx)("div", {
                        className: "author-avatar-wrapper",
                        children: t.authorAvatarUrl && (0, f.jsx)(e9.O, {
                            src: t.authorAvatarUrl,
                            size: 18
                        })
                    }), (0, f.jsx)(E.Z, {
                        sx: {
                            verticalAlign: "top",
                            pt: [2, 2, "6px"],
                            pb: [2, 2, 0],
                            minWidth: [0, 0, 170],
                            flexGrow: [1, 1, 1]
                        },
                        children: (0, f.jsx)("div", {
                            className: "d-flex",
                            children: (0, f.jsx)(ez.WZ, {
                                html: t.shortMessageHtmlLink,
                                sx: {
                                    whiteSpace: "nowrap",
                                    ml: 2,
                                    overflowX: "hidden",
                                    textOverflow: "ellipsis",
                                    maxWidth: "100%",
                                    fontSize: [1, 1, 0]
                                },
                                "data-hovercard-url": (0, w.QY)({
                                    owner: n.ownerLogin,
                                    repo: n.name,
                                    commitish: t.oid
                                })
                            })
                        })
                    }), (0, f.jsxs)(E.Z, {
                        sx: {
                            display: "flex",
                            alignContent: "flex-start",
                            justifySelf: "flex-end",
                            verticalAlign: "top",
                            pl: 2,
                            pt: ["2px", "2px", "1px"],
                            pb: [1, 1, 0],
                            width: [150, 150, 34],
                            pr: [2, 2, 0]
                        },
                        children: [(0, f.jsx)("div", {
                            className: "pt-1 pr-3 timestamp-wrapper-mobile",
                            children: o
                        }), (0, f.jsx)(tp, {
                            range: e,
                            commit: t
                        })]
                    })]
                })
            }

            function tp({
                range: e,
                commit: t
            }) {
                let n = (0, j.H)();
                if (!e.reblamePath) return null;
                let r = (0, w.t4)({
                        owner: n.ownerLogin,
                        repo: n.name,
                        commitish: t.firstParentOid,
                        filePath: e.reblamePath
                    }),
                    i = new Intl.DateTimeFormat(void 0, {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                    }),
                    o = t.oid.slice(0, 7),
                    a = i.format(new Date(t.committedDate)),
                    s = `Blame prior to change ${o}, made on ${a}`,
                    l = `reblame-${o}`;
                return (0, f.jsx)(tn.Z, {
                    "aria-label": s,
                    id: l,
                    children: (0, f.jsx)(e7.r, {
                        "aria-labelledby": l,
                        to: r,
                        className: "Button Button--iconOnly Button--invisible Button--small",
                        children: (0, f.jsx)(A.VersionsIcon, {})
                    })
                })
            }

            function tx({
                commitDate: e,
                repoCreationDate: t
            }) {
                let n = function(e, t) {
                    let {
                        resolvedColorScheme: n
                    } = (0, tr.Fg)(), r = n ? .startsWith("dark"), i = r ? to["scale.orange.9"] : to["scale.orange.0"];
                    if (e < t) return i;
                    let o = Date.now(),
                        a = Math.min(o - t.getTime(), 63072e6),
                        s = o - e.getTime(),
                        l = s / a,
                        c = 0;
                    for (let e of ti) {
                        if (l < e) return r ? to[`scale.orange.${c}`] : to[`scale.orange.${9-c}`];
                        ++c
                    }
                    return i
                }(e, t);
                return (0, f.jsx)("div", {
                    className: "blame-age-indicator",
                    style: {
                        backgroundColor: n
                    }
                })
            }
            try {
                tl.displayName || (tl.displayName = "BlameLines")
            } catch {}
            try {
                tc.displayName || (tc.displayName = "BlameLinesSSR")
            } catch {}
            try {
                td.displayName || (td.displayName = "BlameLinesWithRef")
            } catch {}
            try {
                tu.displayName || (tu.displayName = "BlameSegment")
            } catch {}
            try {
                (s = BlameSegmentContent).displayName || (s.displayName = "BlameSegmentContent")
            } catch {}
            try {
                tm.displayName || (tm.displayName = "BlameForRange")
            } catch {}
            try {
                tf.displayName || (tf.displayName = "BlameForRangeUnmemoized")
            } catch {}
            try {
                tp.displayName || (tp.displayName = "ReblameButton")
            } catch {}
            try {
                tx.displayName || (tx.displayName = "BlameAgeIndicator")
            } catch {}
            var ty = n(78720),
                tg = n(77262);

            function tb(e) {
                window.scroll({
                    top: e,
                    left: 0
                })
            }

            function tj(e, t) {
                return Array(t - e).fill(null).map((t, n) => n + e)
            }
            var tw = n(68588);

            function tv({
                linesData: e,
                onCodeNavTokenSelected: t,
                onLineNumberClick: n,
                isBlame: r,
                isCursorVisible: i,
                isVirtualized: o,
                textAreaRef: a,
                shouldRenderOverlay: s,
                tabSize: l,
                optionalTestLeftOffsetFunction: c,
                textSelection: d,
                onCollapseToggle: u,
                onLineStickOrUnstick: h,
                optionalTestTopOffsetFunction: m,
                additionalTextAreaInstructions: p
            }) {
                let x;
                let [y, g] = (0, v.useState)(0), [b, N] = (0, v.useState)(0), [C, k] = (0, v.useState)(!1), S = (0, v.useRef)(""), I = (0, v.useRef)(null), R = (0, j.H)(), {
                    refInfo: Z,
                    path: T
                } = (0, eC.Br)(), {
                    cursorNavigationHighlightLine: L,
                    expandAndFocusLineContextMenu: B,
                    cursorNavigationEnter: _,
                    searchShortcut: D,
                    cursorNavigationPageDown: F,
                    cursorNavigationPageUp: O
                } = (0, ek.bx)(), A = (0, eU.TH)();
                (0, v.useEffect)(() => {
                    g(0), N(0)
                }, [A.key]), (0, v.useEffect)(() => {
                    function e(e) {
                        S.current = e.key
                    }
                    return window.oncontextmenu = function(e) {
                        if ("ContextMenu" === S.current && -1 === e.button && document.activeElement ? .className.indexOf(e5.firstOptionId) !== -1) return S.current = "", e ? .preventDefault(), e ? .stopPropagation(), !1
                    }, window.addEventListener("keydown", e), () => {
                        window.removeEventListener("keydown", e), window.oncontextmenu = null
                    }
                }, []);
                let P = r ? eO.O$ : eO.jn,
                    M = (0, v.useRef)(null),
                    {
                        onEnter: H,
                        updateUrlForLineNumber: W,
                        onPageUp: z,
                        onPageDown: U,
                        currentStartLine: G,
                        currentStartChar: V,
                        currentEndLine: q,
                        currentEndChar: K,
                        determineAndSetTextAreaCursorPosition: Y,
                        getCorrectLineNumberWithCollapsedSections: Q
                    } = (0, eO.RP)(M, t, c ? ? g, m ? ? N, e, o, r, n, a, l, p, d),
                    X = (0, v.useRef)(!1);
                (0, v.useEffect)(() => {
                    X.current = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
                }, []);
                let J = (0, tg.G)("react-code-lines"),
                    ee = i ? {
                        height: `${J}px`,
                        width: "1.5px",
                        backgroundColor: "fg.default",
                        position: "absolute",
                        visibility: X.current ? "hidden" : "visible"
                    } : {};
                return x = G.current === q.current && V.current === K.current ? `#L${G.current+1}C${V.current}` : `#${(0,eR.g1)({start:{line:G.current+1,column:V.current},end:{line:q.current+1,column:K.current}})}`, (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsx)(E.Z, {
                        "aria-hidden": !0,
                        style: {
                            top: b,
                            left: P + y
                        },
                        sx: ee,
                        ref: M,
                        "data-testid": "navigation-cursor",
                        className: "code-navigation-cursor",
                        children: " "
                    }), s && (0, f.jsx)("div", {
                        style: {
                            top: b + J,
                            left: P + y
                        },
                        className: "position-absolute border rounded-2 color-bg-subtle px-3 py-2",
                        children: (0, f.jsxs)($.Z, {
                            sx: {
                                pointerEvents: "auto"
                            },
                            children: ["Code view is read-only.", " ", Z.canEdit && (0, f.jsx)(e7.r, {
                                to: (0, w.ti)({
                                    owner: R.ownerLogin,
                                    repo: R.name,
                                    filePath: T,
                                    commitish: Z.name,
                                    hash: x
                                }),
                                children: "Switch to the editor."
                            })]
                        })
                    }), C && (0, f.jsx)(e5.default, {
                        ref: I,
                        rowBeginId: `LG${Q(G.current)}`,
                        rowBeginNumber: Q(G.current),
                        rowEndNumber: Q(q.current),
                        rowEndId: `LG${Q(q.current)}`,
                        openOnLoad: !0,
                        cursorRef: M,
                        onCollapseToggle: u,
                        onLineStickOrUnstick: h,
                        lineData: function() {
                            if (G.current !== q.current) return null;
                            let t = e[G.current];
                            if (!t) return null;
                            if (t.isStartLine) return t;
                            if ("" === t.codeLineClassName) return null;
                            let n = t.codeLineClassName ? .split("child-of-line-");
                            if (!n || t.codeLineClassName ? .indexOf("child-of-line-") === -1) return null;
                            let r = parseInt(n[n.length - 1] ? .trim() ? ? "undefined");
                            return r && !Number.isNaN(r) ? e[r - 1] && e[r - 1] ? .lineNumber === r ? e[r - 1] : e[(0, eZ.Bx)(r, e)] : null
                        }(),
                        onMenuClose: function(e, t) {
                            k(e), setTimeout(() => {
                                t && Y(), a ? .current ? .focus()
                            }, 300)
                        }
                    }), (0, f.jsx)("button", {
                        hidden: !0,
                        "data-testid": "NavigationCursorEnter",
                        "data-hotkey": _.hotkey,
                        onClick: H,
                        "data-hotkey-scope": eZ.KG
                    }), (0, f.jsx)("button", {
                        hidden: !0,
                        "data-testid": "NavigationCursorSetHighlightedLine",
                        "data-hotkey": L.hotkey,
                        onClick: W,
                        "data-hotkey-scope": eZ.KG
                    }), (0, f.jsx)("button", {
                        hidden: !0,
                        "data-testid": "NavigationCursorSetHighlightAndExpandMenu",
                        "data-hotkey": B.hotkey,
                        onClick: e => (e.preventDefault(), e.stopPropagation(), k(!0), setTimeout(() => {
                            I.current ? .setAnchor(M.current)
                        }, 0), !1),
                        "data-hotkey-scope": eZ.KG
                    }), (0, f.jsx)("button", {
                        hidden: !0,
                        "data-testid": "NavigationCursorPageDown",
                        "data-hotkey": F.hotkey,
                        onClick: U,
                        "data-hotkey-scope": eZ.KG
                    }), (0, f.jsx)("button", {
                        hidden: !0,
                        "data-testid": "NavigationCursorPageUp",
                        "data-hotkey": O.hotkey,
                        onClick: z,
                        "data-hotkey-scope": eZ.KG
                    }), (0, f.jsx)(ep.P, {
                        buttonFocusId: eZ.KG,
                        buttonHotkey: D.hotkey,
                        onButtonClick: () => {
                            (0, tw.n)({
                                retainScrollPosition: !0,
                                returnTarget: a ? .current ? ? void 0
                            })
                        },
                        onlyAddHotkeyScopeButton: !0
                    })]
                })
            }
            try {
                tv.displayName || (tv.displayName = "NavigationCursor")
            } catch {}
            let tN = v.memo(v.forwardRef(tC));

            function tC({
                linesData: e,
                onLineNumberClick: t,
                codeSections: n,
                codeLineToSectionMap: r,
                onLineStickOrUnstick: i,
                tabSize: o,
                contentWidth: a,
                onCollapseToggle: s,
                onCodeNavTokenSelected: l,
                textAreaRef: c,
                isTextAreaFocused: d,
                textOverlayShouldBeVisible: u,
                materializeAllLines: h,
                textSelection: m,
                additionalTextAreaInstructions: p,
                copilotAccessAllowed: x
            }, y) {
                let g = (0, v.useRef)(null),
                    b = (0, v.useRef)(null),
                    j = (0, v.useRef)(null),
                    w = (0, eO.nj)(),
                    N = (0, v.useRef)(!1),
                    C = (0, v.useRef)(!1);
                (0, v.useEffect)(() => {
                    if (c && c.current) {
                        c.current.onscroll = () => {
                            b && b.current && c.current && c.current.scrollLeft !== b.current.scrollLeft && (b.current.scrollLeft = c.current.scrollLeft)
                        };
                        let e = c.current;
                        return () => {
                            e && (e.onscroll = null)
                        }
                    }
                }, [c, g, w]);
                let k = (0, I.O)().codeWrappingOption.enabled,
                    S = function({
                        parentRef: e,
                        lineCount: t,
                        materializeAllLines: n
                    }) {
                        let r = (0, tg.G)("react-code-lines"),
                            i = (0, v.useMemo)(() => () => r, [r]),
                            o = (0, I.O)().codeWrappingOption.enabled,
                            a = (0, v.useMemo)(() => function(e) {
                                if (t < 150) return tj(0, t);
                                let n = (0, ty.M)(e);
                                if (0 === n.length) return n;
                                let r = n[0],
                                    i = n[n.length - 1],
                                    o = Math.min(75, t - i),
                                    a = tj(0, Math.min(75, r)),
                                    s = tj(t + 1 - o, t);
                                return a.concat(n, s)
                            }, [t]);
                        return (0, te.F)({
                            parentRef: e,
                            size: t,
                            overscan: n ? Number.MAX_SAFE_INTEGER : 100,
                            scrollToFn: tb,
                            estimateSize: i,
                            rangeExtractor: a,
                            measureSize: o ? void 0 : i,
                            useVirtualImpl: te.A
                        })
                    }({
                        parentRef: g,
                        lineCount: e.length,
                        materializeAllLines: !!h
                    });
                (0, v.useImperativeHandle)(y, () => ({
                    scrollToTop: () => {
                        (0, eZ.nB)(0) || S.scrollToIndex(0, {
                            align: "start"
                        })
                    },
                    scrollToLine: (e, t) => {
                        S.scrollToIndex(e, {
                            align: "start"
                        });
                        let n = g.current;
                        n && n.scroll({
                            left: function(e, t, n) {
                                if (!n) return 0;
                                let r = (0, eZ.d5)(t, n);
                                if (!r) return 0;
                                let i = e.getBoundingClientRect(),
                                    o = r.getBoundingClientRect(),
                                    a = i.left + i.width - e.scrollLeft - (o.left + o.width) > 0;
                                return a ? 0 : r.offsetLeft
                            }(n, e, t)
                        })
                    }
                }));
                let R = w ? {
                    overflowX: "auto",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": {
                        display: "none"
                    }
                } : {
                    overflowX: "auto"
                };
                return (0, f.jsxs)(E.Z, {
                    ref: g,
                    sx: {
                        position: "relative",
                        pointerEvents: w ? "none" : "auto"
                    },
                    onScroll: e => (function(e, t) {
                        let n = e.target;
                        t ? .current ? .scrollTo(n.scrollLeft, n.scrollTop)
                    })(e, c),
                    children: [(0, f.jsx)(E.Z, {
                        ref: b,
                        sx: R,
                        tabIndex: 0,
                        onScroll: e => {
                            w && j.current && j.current.scrollLeft !== e.currentTarget.scrollLeft && (N.current ? N.current = !1 : (c ? .current && (c.current.scrollLeft = e.currentTarget.scrollLeft), C.current = !0, j.current.scrollLeft = e.currentTarget.scrollLeft))
                        },
                        children: (0, f.jsxs)(E.Z, {
                            className: "react-code-file-contents",
                            role: "presentation",
                            "aria-hidden": !0,
                            "data-tab-size": o,
                            "data-paste-markdown-skip": !0,
                            sx: {
                                tabSize: o,
                                isolation: "isolate",
                                position: "relative",
                                width: a,
                                maxWidth: k ? "100%" : "unset"
                            },
                            style: {
                                height: S.totalSize
                            },
                            "data-hpc": !0,
                            children: [(0, f.jsx)("div", {
                                className: "react-line-numbers",
                                style: {
                                    pointerEvents: "auto",
                                    height: S.totalSize
                                },
                                children: S.virtualItems.map(r => {
                                    let o = e[r.index];
                                    return (0, f.jsx)(ts._, {
                                        codeLineData: o,
                                        onClick: t,
                                        ownedCodeSections: n,
                                        onLineStickOrUnstick: i,
                                        onCollapseToggle: s,
                                        virtualOffset: r.start
                                    }, `line-number-${o.lineNumber}`)
                                })
                            }), (0, f.jsx)("div", {
                                className: "react-code-lines",
                                style: {
                                    height: S.totalSize
                                },
                                children: S.virtualItems.map(t => {
                                    let n = e[t.index];
                                    return (0, f.jsx)(ta.E, {
                                        codeLineData: n,
                                        codeLineClassName: n.codeLineClassName,
                                        id: `LC${n.lineNumber}`,
                                        onLineStickOrUnstick: i,
                                        setIsCollapsed: s,
                                        codeLineToSectionMap: r,
                                        virtualOffset: t.start,
                                        virtualKey: t.key,
                                        measureRef: t.measureRef,
                                        copilotAccessAllowed: x
                                    }, `line-number-${n.lineNumber}-content:${n.rawText}`)
                                })
                            }), (0, f.jsx)(eX, {
                                shouldNotOverrideCopy: w,
                                containerRef: w ? c : g
                            }), w && (0, f.jsx)(tv, {
                                linesData: e,
                                isBlame: !1,
                                onCodeNavTokenSelected: l,
                                onLineNumberClick: t,
                                isCursorVisible: !!d,
                                isVirtualized: !0,
                                textAreaRef: c,
                                onCollapseToggle: s,
                                onLineStickOrUnstick: i,
                                tabSize: o,
                                textSelection: m,
                                shouldRenderOverlay: !!u,
                                additionalTextAreaInstructions: p ? ? ""
                            })]
                        })
                    }), w && a && b.current && b.current.clientWidth < a && (0, f.jsx)(E.Z, {
                        sx: {
                            width: "100%",
                            pointerEvents: "auto",
                            overflowX: "auto",
                            overflowY: "visible",
                            height: "17px",
                            position: "sticky",
                            bottom: 0
                        },
                        onScroll: e => {
                            b.current && b.current.scrollLeft !== e.currentTarget.scrollLeft && (C.current ? C.current = !1 : (c ? .current && (c.current.scrollLeft = e.currentTarget.scrollLeft), N.current = !0, b.current.scrollLeft = e.currentTarget.scrollLeft))
                        },
                        ref: j,
                        onClick: e => e.preventDefault(),
                        onMouseDown: e => e.preventDefault(),
                        onMouseUp: e => e.preventDefault(),
                        children: (0, f.jsx)(E.Z, {
                            sx: {
                                width: a,
                                height: "1px"
                            }
                        })
                    })]
                })
            }
            try {
                tN.displayName || (tN.displayName = "CodeLines")
            } catch {}
            try {
                tC.displayName || (tC.displayName = "CodeLinesUnmemoized")
            } catch {}
            let tk = v.memo(tS);

            function tS({
                linesData: e,
                onLineNumberClick: t,
                codeSections: n,
                codeLineToSectionMap: r,
                onLineStickOrUnstick: i,
                tabSize: o,
                contentWidth: a,
                copilotAccessAllowed: s,
                onCollapseToggle: l
            }) {
                let c = (0, I.O)().codeWrappingOption.enabled,
                    {
                        rawBlobUrl: d
                    } = (0, ev.G)();
                return (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsxs)(E.Z, {
                        className: "react-code-file-contents",
                        role: "presentation",
                        "aria-hidden": !0,
                        "data-tab-size": o,
                        "data-paste-markdown-skip": !0,
                        sx: {
                            tabSize: o,
                            isolation: "isolate",
                            position: "relative",
                            width: a,
                            overflow: "auto",
                            maxWidth: c ? "100%" : "unset"
                        },
                        "data-hpc": !0,
                        children: [(0, f.jsx)("div", {
                            className: "react-line-numbers",
                            style: {
                                pointerEvents: "auto"
                            },
                            children: e.map(e => (0, f.jsx)(ts._, {
                                codeLineData: e,
                                onClick: t,
                                ownedCodeSections: n,
                                onLineStickOrUnstick: i,
                                onCollapseToggle: l
                            }, `line-number-${e.lineNumber}`))
                        }), (0, f.jsx)("div", {
                            className: "react-code-lines",
                            children: e.map(e => (0, f.jsx)(ta.E, {
                                codeLineData: e,
                                codeLineClassName: e.codeLineClassName,
                                id: `LC${e.lineNumber}`,
                                onLineStickOrUnstick: i,
                                setIsCollapsed: l,
                                codeLineToSectionMap: r,
                                copilotAccessAllowed: s,
                                measureRef: void 0
                            }, `line-number-${e.lineNumber}-content:${e.rawText}`))
                        })]
                    }), 1e3 === e.length && (0, f.jsx)(E.Z, {
                        sx: {
                            justifyContent: "center",
                            display: "flex"
                        },
                        children: (0, f.jsx)(eo.Z, {
                            href: d,
                            children: "View remainder of file in raw view"
                        })
                    })]
                })
            }
            try {
                tk.displayName || (tk.displayName = "CodeLinesSSR")
            } catch {}
            try {
                tS.displayName || (tS.displayName = "CodeLinesSSRUnmemoized")
            } catch {}
            var tI = n(90984),
                tR = n(90176),
                tZ = n(59148),
                tT = n(73935);

            function tL({
                onDismiss: e
            }) {
                let {
                    expandAndFocusLineContextMenu: t,
                    cursorNavigationEnter: n,
                    cursorNavigationHighlightLine: r
                } = (0, ek.bx)();
                return (0, tT.createPortal)((0, f.jsx)(tZ.V, {
                    width: "large",
                    "aria-label": "Code Blob Focused Hotkeys",
                    onClose: e,
                    title: "Code Blob Focused Hotkeys",
                    children: (0, f.jsx)("div", {
                        children: (0, f.jsxs)("div", {
                            children: [(0, f.jsxs)("div", {
                                className: "p-1",
                                children: ["Select the line the cursor is on ", (0, f.jsx)("kbd", {
                                    children: r.text
                                })]
                            }), (0, f.jsxs)("div", {
                                className: "p-1",
                                children: ["Select the symbol under the cursor ", (0, f.jsx)("kbd", {
                                    children: n.text
                                })]
                            }), (0, f.jsxs)("div", {
                                className: "p-1",
                                children: ["Move focus to the highlighted line menu ", (0, f.jsx)("kbd", {
                                    children: t.text
                                })]
                            })]
                        })
                    })
                }), document.body)
            }
            try {
                tL.displayName || (tL.displayName = "TextAreaHelpDialog")
            } catch {}

            function tE({
                textAreaRef: e,
                setTextOverlayShouldBeVisible: t,
                setTextSelection: n,
                setAdditionalTextAreaInstructions: r,
                cursorClickStartRef: i,
                parentRef: o,
                tabSize: a,
                plainTextLinesAsString: s,
                numLines: l,
                setIsTextAreaFocused: c
            }) {
                let d = (0, eO.nj)(),
                    u = (0, I.O)().codeWrappingOption,
                    h = (0, ek.tW)(),
                    m = (0, ek.ln)(),
                    p = (0, tg.G)("react-code-lines"),
                    x = p * (l + 1),
                    [y, g] = (0, v.useState)(!1),
                    {
                        cursorNavigationOpenHelpDialog: b
                    } = (0, ek.bx)();
                return (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsx)("textarea", {
                        id: eZ.KG,
                        ref: e,
                        onMouseUp: r => (function(e, t, n, r, i, o, a, s) {
                            if (o && !e.defaultPrevented && i) {
                                if (2 === e.button) e.preventDefault(), e.stopPropagation();
                                else if (0 === e.button) {
                                    n(!1);
                                    let o = (0, k.ZV)(window.innerWidth),
                                        l = o < k._G.medium,
                                        c = a.current ? .getBoundingClientRect().top ? window.scrollY + a.current ? .getBoundingClientRect().top : l ? 423 : 354;
                                    if (a.current && e.pageY > c + a.current ? .clientHeight) {
                                        i.current = {
                                            startX: -2,
                                            startY: -2
                                        };
                                        return
                                    }
                                    let d = (0, eZ.BS)(e.pageY, c, s),
                                        u = a.current ? .getBoundingClientRect().left || 0,
                                        h = e.clientX - u - eO.jn,
                                        m = !1;
                                    (d < i.current.startY || d === i.current.startY && h < i.current.startX) && (m = !0), setTimeout(() => {
                                        t && t.current && r({
                                            start: t.current.selectionStart,
                                            end: t.current.selectionEnd,
                                            keyboard: !1,
                                            displayStart: m
                                        })
                                    }, 0)
                                }
                            }
                        })(r, e, t, n, i, d, o, p),
                        onMouseDown: e => (function(e, t, n, r, i) {
                            if (n && !e.defaultPrevented && r) {
                                if (2 === e.button) {
                                    e.preventDefault(), e.stopPropagation();
                                    return
                                }
                                if (0 === e.button) {
                                    if (e.ctrlKey) {
                                        e.preventDefault(), e.stopPropagation();
                                        return
                                    }
                                    let n = (0, k.ZV)(window.innerWidth),
                                        o = n < k._G.medium,
                                        a = t.current ? .getBoundingClientRect().top ? window.scrollY + t.current ? .getBoundingClientRect().top : o ? 423 : 354;
                                    if (t.current && e.pageY > a + t.current ? .clientHeight) {
                                        r.current = {
                                            startX: -2,
                                            startY: -2
                                        };
                                        return
                                    }
                                    let s = (0, eZ.BS)(e.pageY, a, i),
                                        l = t.current ? .getBoundingClientRect().left || 0,
                                        c = e.clientX - l - eO.jn;
                                    r.current = {
                                        startX: c,
                                        startY: s
                                    }
                                }
                            }
                        })(e, o, d, i, p),
                        "aria-label": "file content",
                        "aria-readonly": !0,
                        inputMode: "none",
                        tabIndex: 0,
                        "aria-multiline": !0,
                        "aria-haspopup": !1,
                        "data-gramm": "false",
                        "data-gramm_editor": "false",
                        "data-enable-grammarly": "false",
                        style: {
                            resize: "none",
                            marginTop: -2,
                            paddingLeft: eO.jn,
                            display: "hidden",
                            width: "100%",
                            backgroundColor: "unset",
                            color: "transparent",
                            position: "absolute",
                            border: "none",
                            tabSize: a,
                            outline: "none",
                            overflowX: "auto",
                            height: x,
                            fontSize: "12px",
                            lineHeight: "20px",
                            overflowY: "hidden",
                            overflowWrap: u.enabled ? "anywhere" : "normal",
                            whiteSpace: u.enabled ? "pre-wrap" : "pre"
                        },
                        value: s,
                        onKeyDown: function(i) {
                            h.includes(i.key) || m.includes(i.key) && (i.getModifierState("Control") || i.getModifierState("Alt") || i.getModifierState("Shift") || i.getModifierState("Meta")) ? (" " === i.key && (i.preventDefault(), i.shiftKey ? r(`PageUp${Date.now()}`) : r(`PageDown${Date.now()}`)), i.altKey && i.ctrlKey && "\u02D9" === i.key && g(!0), t(!1), setTimeout(() => {
                                e.current && n({
                                    start: e.current.selectionStart,
                                    end: e.current.selectionEnd,
                                    keyboard: !0,
                                    displayStart: !1
                                })
                            }, 5)) : !i.ctrlKey && !i.metaKey && !i.altKey && !i.shiftKey && (function(e, t) {
                                let n = e.exec(t);
                                return n && n[0] === t
                            }(/[a-zA-Z0-9-_ ]{1,1}/, i.key) || "Backspace" === i.key || "Enter" === i.key) && ((0, ee.x)("Code view is read only."), t(!0), i.preventDefault())
                        },
                        spellCheck: !1,
                        autoCorrect: "off",
                        autoCapitalize: "off",
                        autoComplete: "off",
                        "data-ms-editor": "false",
                        onDrop: e => {
                            let t = e.dataTransfer.getData("Text");
                            try {
                                let e = new URL(t);
                                window.open(e, "_blank") ? .focus()
                            } catch (e) {}
                            return !1
                        },
                        onPaste: e => (e.preventDefault(), !1),
                        onChange: () => {},
                        className: "react-blob-print-hide",
                        onFocus: () => {
                            c(!0)
                        }
                    }), y && (0, f.jsx)(tL, {
                        onDismiss: () => {
                            g(!1)
                        }
                    }), (0, f.jsx)(ep.P, {
                        buttonFocusId: eZ.KG,
                        buttonHotkey: b.hotkey,
                        onButtonClick: () => {
                            g(!0)
                        },
                        onlyAddHotkeyScopeButton: !0
                    })]
                })
            }
            try {
                tE.displayName || (tE.displayName = "TextArea")
            } catch {}
            let tB = (0, ex.Z)("localStorage");

            function t_({
                blobLinesHandle: e,
                onCodeNavTokenSelected: t,
                codeSections: n,
                codeLineToSectionMap: r,
                validCodeNav: i,
                onLineStickOrUnstick: o,
                searchResults: a,
                focusedSearchResult: s
            }) {
                let {
                    rawLines: l,
                    stylingDirectives: c,
                    tabSize: d
                } = (0, ev.G)(), u = !!(0, ew.Q)(), [h, m] = (0, v.useState)(!1), p = (0, eO.nj)(), [x, y] = (0, v.useState)(void 0), [g, b] = (0, v.useState)({
                    start: -1,
                    end: -1,
                    keyboard: !0,
                    displayStart: !1
                }), [j, w] = (0, v.useState)(""), [N, C] = (0, v.useState)(!1), k = (0, v.useRef)(null), [S, I] = (0, v.useState)(!1), R = (0, v.useRef)({
                    startX: 0,
                    startY: 0
                }), {
                    hash: Z
                } = (0, eU.TH)(), {
                    refInfo: T,
                    path: L,
                    copilotAccessAllowed: B
                } = (0, eC.Br)(), _ = (0, v.useRef)(null), [D, F] = (0, v.useState)(void 0), [A] = (0, e2.D)(() => !1, !0, []), P = function() {
                    let [e, t] = (0, v.useState)({});
                    return (0, v.useCallback)(() => t({}), [])
                }(), M = (0, eN.k)(), H = (0, v.useCallback)(() => {
                    y(eR.n6(window.location.hash) ? .blobRange)
                }, []), {
                    findInFileOpen: $,
                    setFindInFileOpen: W
                } = eM(), z = (0, v.useContext)(e3), {
                    lines: U,
                    plainTextLinesAsString: G
                } = function(e, t, n, r, i) {
                    let o = function(e, t, n, r, i) {
                            let [o] = (0, e2.D)(() => e.length, Math.min(e.length, 1e3), [e]);
                            return (0, v.useMemo)(() => {
                                let a = Array(o).fill(null).map((e, t) => t + 1);
                                return a.map(o => {
                                    let a;
                                    let s = t ? .[o - 1],
                                        l = !1,
                                        c = !1;
                                    for (let e of n ? .get(o) ? ? []) e.startLine === o && (l = !0, a = e), e.endLine === o && (c = !0);
                                    let d = e[o - 1] ? .replace(/[\n\r]/g, "") ? ? "",
                                        u = i && i.get(o) || [],
                                        h = (0, eZ.TX)(u, o, c, n);
                                    return {
                                        stylingDirectivesLine: s,
                                        lineNumber: o,
                                        codeLineClassName: h,
                                        isStartLine: l,
                                        isEndLine: c,
                                        ownedSection: a,
                                        rawText: d,
                                        bidi: (0, e8.ud)(d),
                                        codeownersLineError: r ? .find(e => e.line === o)
                                    }
                                })
                            }, [o, t, e, i, n, r])
                        }(e, t, n, r, i),
                        a = (0, e8.fq)(),
                        s = (0, v.useRef)("");
                    (0, eZ.PO)(e => s.current = function(e) {
                        let t = [...e];
                        return t.sort(), t.join(",")
                    }(e));
                    let l = (0, v.useMemo)(() => (function(e, t) {
                            let n = new Set;
                            for (let r = 0; r < e.length; r++) {
                                if (n.has(r)) continue;
                                let e = t ? .get(r) ? ? [];
                                for (let t = 0; t < e.length; t++)
                                    if (e[t].collapsed) {
                                        for (let r = e[t].startLine + 1; r <= e[t].endLine; r++) n.add(r);
                                        e[t].startLine === r && (r = e[t].endLine);
                                        break
                                    }
                            }
                            return e.filter(e => !n.has(e.lineNumber))
                        })(o, n), [o, n, s.current]),
                        c = l.map(e => a && e.rawText ? (0, e8.V1)(e.rawText) : e.rawText).join("\n");
                    return {
                        lines: l,
                        plainTextLinesAsString: c
                    }
                }(l ? ? [], c ? ? null, n ? ? null, z, r), V = (0, v.useRef)(U);
                V.current = U, (0, v.useEffect)(() => {
                        (0, eZ.Yo)()
                    }, [T.currentOid, L]), (0, v.useEffect)(() => {
                        window.onbeforeprint = () => m(!0), window.onafterprint = () => m(!1)
                    }, []), (0, v.useEffect)(() => {
                        "true" !== tB.getItem("heardHelpAnnouncement") && ((0, eZ.dM)("While the code is focused, press Alt+F1 for a menu of operations.", 2e3), tB.setItem("heardHelpAnnouncement", "true"))
                    }, []),
                    function(e, t) {
                        let n = !!(0, ew.Q)(),
                            r = (0, eO.nj)();
                        (0, v.useEffect)(() => {
                            let i;
                            if (n || !t || r) return;
                            let o = (0, O.D)(t => {
                                clearTimeout(i), i = setTimeout(() => {
                                    (function(e, t) {
                                        let n = function(e, t, n) {
                                            let r, i;
                                            if (document.caretPositionFromPoint) {
                                                let e = document.caretPositionFromPoint(t, n);
                                                e && (r = e.offsetNode, i = e.offset)
                                            } else if (document.caretRangeFromPoint) {
                                                let e = document.caretRangeFromPoint(t, n);
                                                e && (r = e.startContainer, i = e.startOffset)
                                            }
                                            if (!r || "number" != typeof i || r.nodeType !== Node.TEXT_NODE || !r.textContent) return null;
                                            let o = function(e, t, n) {
                                                let r;
                                                let i = null;
                                                for (; r = t.exec(e);) {
                                                    if (t.lastIndex === i) {
                                                        (0, e4.eK)(Error("regexp did not advance in findNearestMatch()"));
                                                        break
                                                    }
                                                    i = t.lastIndex;
                                                    let e = r.index + r[0].length;
                                                    if (r.index <= n && n <= e) return [r[0], r.index, e]
                                                }
                                                return null
                                            }(r.textContent, e, i);
                                            if (!o) return null;
                                            let a = document.createRange();
                                            return a.setStart(r, o[1]), a.setEnd(r, o[2]), a
                                        }(/\w+[!?]?/g, e.clientX, e.clientY);
                                        if (!n) return;
                                        let r = n.commonAncestorContainer.parentElement;
                                        if (r)
                                            for (let e of r.classList) {
                                                if (["pl-token", "pl-c", "pl-s", "pl-k"].includes(e)) return null;
                                                let r = n.toString();
                                                if (!r || r.match(/\n|\s|[();&.=",]/)) return null;
                                                let {
                                                    lineNumber: i,
                                                    offset: o,
                                                    node: a
                                                } = function(e) {
                                                    let t = e.startContainer,
                                                        n = e.startOffset;
                                                    for (;;) {
                                                        let e = t.previousSibling;
                                                        for (; e;) n += (e.textContent || "").length, e = e.previousSibling;
                                                        let r = t.parentElement;
                                                        if (!r) return {
                                                            lineNumber: 0,
                                                            offset: 0,
                                                            node: null
                                                        };
                                                        if (r.classList.contains("react-file-line")) {
                                                            let e = parseInt(r.getAttribute("data-line-number") || "1", 10);
                                                            return {
                                                                lineNumber: e,
                                                                offset: n,
                                                                node: t
                                                            }
                                                        }
                                                        t = r
                                                    }
                                                }(n);
                                                if (0 === i && 0 === o || !a) return null;
                                                return t({
                                                    lineNumber: i,
                                                    offset: o,
                                                    node: a
                                                })
                                            }
                                    })(t, e)
                                }, 15)
                            }, 5);
                            return window.addEventListener("mousemove", o), () => {
                                window.removeEventListener("mousemove", o)
                            }
                        }, [e, n, t, r])
                    }((0, v.useCallback)(e => {
                        if (e && e ? .node && !u) {
                            if (!e.node.textContent || e.node.textContent.length < 3) return;
                            let n = e.node;
                            !n || !n.hasAttribute || n.hasAttribute("clickadded") || (n.classList.add("pl-token"), n.setAttribute("clickadded", "true"), n.addEventListener("click", function(n) {
                                let r = n.target.textContent ? n.target.textContent : "";
                                t && e && (t({
                                    selectedText: r,
                                    lineNumber: e.lineNumber,
                                    offset: e.offset
                                }), $ && W(!1))
                            }))
                        }
                    }, [$, u, W, t]), i);
                let q = ({
                    line: t,
                    column: n
                }) => {
                    if (t < 10) e.current ? .scrollToTop();
                    else if (e.current) {
                        let i = (0, eZ.Bx)(t, U);
                        if (-1 === i) {
                            let e = r ? .get(t);
                            for (let t of e ? ? []) t && t.collapsed && (t.collapsed = !1, (0, eZ.yw)(t ? .startLine));
                            P()
                        }
                        setTimeout(() => {
                            let r = (0, eZ.Bx)(t, V.current);
                            e.current ? .scrollToLine(r, n)
                        }, 0), M && !(0, eZ.nB)(t) && (o(null, !0), (0, eZ.DD)(M, t, r, o))
                    }
                };
                return (0, v.useEffect)(() => {
                    let e = (0, eR.n6)(Z);
                    if (!e.blobRange ? .start ? .line) {
                        y(void 0);
                        return
                    }
                    y(e.blobRange)
                }, [L, Z, U.length]), (0, v.useEffect)(() => {
                    let e = (0, eR.n6)(Z);
                    e.blobRange ? .start ? .line && setTimeout(() => q({
                        line: e.blobRange.start.line
                    }), 0)
                }, [L, u]), (0, v.useEffect)(() => {
                    let e = _.current;
                    if (!e || !p) {
                        F(void 0);
                        return
                    }
                    F(e.scrollWidth > e.clientWidth ? e.scrollWidth + 70 : void 0);
                    let t = new ResizeObserver(e => {
                        for (let {
                                target: t
                            } of e) F(t.scrollWidth > t.clientWidth ? t.scrollWidth + 70 : void 0)
                    });
                    return t.observe(e), () => {
                        t.disconnect()
                    }
                }, [p, L]), (0, eT.z)(q), (0, f.jsx)(tR.Sh, {
                    searchResults: a,
                    focusedSearchResult: s,
                    children: (0, f.jsxs)(tI.k, {
                        highlightedLines: x,
                        children: [U.some(e => e.bidi) && (0, f.jsx)(e8.h7, {}), (0, f.jsx)(E.Z, {
                            sx: {
                                display: "flex",
                                flex: 1,
                                py: u ? 0 : 2,
                                flexDirection: "column",
                                justifyContent: "space-between",
                                minWidth: 0,
                                position: "relative"
                            },
                            children: (0, f.jsx)(e5.HighlightedLineMenuContainer, {
                                children: (0, f.jsx)(e6.Id, {
                                    children: (0, f.jsxs)(E.Z, {
                                        sx: {
                                            flex: 1,
                                            position: "relative",
                                            minWidth: 0,
                                            overflowX: u ? "auto" : void 0,
                                            overflowY: u ? "hidden" : void 0
                                        },
                                        ref: k,
                                        onBlur: e => {
                                            e.currentTarget.contains(e.relatedTarget) || C(!1)
                                        },
                                        children: [p && (0, f.jsx)(tE, {
                                            textAreaRef: _,
                                            setTextOverlayShouldBeVisible: I,
                                            setTextSelection: b,
                                            setAdditionalTextAreaInstructions: w,
                                            cursorClickStartRef: R,
                                            parentRef: k,
                                            tabSize: d,
                                            plainTextLinesAsString: G,
                                            numLines: U.length,
                                            setIsTextAreaFocused: C
                                        }), u ? A ? (0, f.jsx)(tc, {
                                            linesData: U,
                                            tabSize: d,
                                            copilotAccessAllowed: B,
                                            onLineNumberClick: H
                                        }) : (0, f.jsx)(tl, {
                                            ref: e,
                                            linesData: U,
                                            tabSize: d,
                                            copilotAccessAllowed: B,
                                            onLineNumberClick: H
                                        }) : A ? (0, f.jsx)(tk, {
                                            linesData: U,
                                            onLineNumberClick: H,
                                            codeSections: n,
                                            codeLineToSectionMap: r,
                                            onLineStickOrUnstick: o,
                                            tabSize: d,
                                            contentWidth: D,
                                            copilotAccessAllowed: B,
                                            onCollapseToggle: P
                                        }) : (0, f.jsx)(tN, {
                                            ref: e,
                                            linesData: U,
                                            onLineNumberClick: H,
                                            codeSections: n,
                                            codeLineToSectionMap: r,
                                            onLineStickOrUnstick: o,
                                            tabSize: d,
                                            contentWidth: D,
                                            onCollapseToggle: P,
                                            textAreaRef: _,
                                            isTextAreaFocused: N,
                                            onCodeNavTokenSelected: t,
                                            textOverlayShouldBeVisible: S,
                                            materializeAllLines: h,
                                            textSelection: g,
                                            additionalTextAreaInstructions: j,
                                            copilotAccessAllowed: B
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                })
            }
            try {
                t_.displayName || (t_.displayName = "CodeBlob")
            } catch {}

            function tD({
                displayName: e,
                displayUrl: t
            }) {
                return (0, f.jsx)(E.Z, {
                    sx: {
                        display: "flex",
                        justifyContent: "center",
                        width: "100%"
                    },
                    children: (0, f.jsx)(E.Z, {
                        as: "img",
                        alt: e,
                        src: t,
                        "data-hpc": !0,
                        sx: {
                            maxWidth: "100%"
                        }
                    })
                })
            }
            try {
                tD.displayName || (tD.displayName = "ImageBlob")
            } catch {}
            var tF = n(45677),
                tO = n(17791),
                tA = n(8760),
                tP = n(75578),
                tM = n(99782);

            function tH({
                issueTemplate: e,
                type: t
            }) {
                return (0, f.jsxs)(E.Z, {
                    sx: {
                        borderBottomLeftRadius: "6px",
                        borderBottomRightRadius: "6px",
                        p: 5
                    },
                    children: [(0, f.jsxs)(E.Z, {
                        as: "table",
                        sx: {
                            mb: 3
                        },
                        children: [(0, f.jsx)("thead", {
                            children: (0, f.jsxs)("tr", {
                                children: ["issue" === t ? (0, f.jsxs)(f.Fragment, {
                                    children: [(0, f.jsx)(t$, {
                                        header: !0,
                                        children: "Name"
                                    }), (0, f.jsx)(t$, {
                                        header: !0,
                                        children: "About"
                                    })]
                                }) : (0, f.jsx)(t$, {
                                    header: !0,
                                    children: "Title"
                                }), e.type && (0, f.jsx)(t$, {
                                    header: !0,
                                    children: "Type"
                                }), (0, f.jsx)(t$, {
                                    header: !0,
                                    children: "Labels"
                                }), e.projects && (0, f.jsx)(t$, {
                                    header: !0,
                                    children: "Projects"
                                }), "issue" === t && (0, f.jsx)(t$, {
                                    header: !0,
                                    children: "Assignees"
                                })]
                            })
                        }), (0, f.jsx)("tbody", {
                            children: (0, f.jsxs)("tr", {
                                children: ["issue" === t ? (0, f.jsxs)(f.Fragment, {
                                    children: [(0, f.jsx)(t$, {
                                        children: e.name
                                    }), (0, f.jsx)(t$, {
                                        children: e.about
                                    })]
                                }) : (0, f.jsx)(t$, {
                                    children: e.title
                                }), e.type && (0, f.jsx)(t$, {
                                    children: e.type
                                }), (0, f.jsx)(t$, {
                                    children: e.labels
                                }), e.projects && (0, f.jsx)(t$, {
                                    children: e.projects
                                }), "issue" === t && (0, f.jsx)(t$, {
                                    children: e.assignees
                                })]
                            })
                        })]
                    }), e.inputs.map((e, t) => (0, f.jsx)(tW, {
                        input: e
                    }, t))]
                })
            }

            function t$({
                children: e,
                header: t
            }) {
                return (0, f.jsx)(E.Z, {
                    as: t ? "th" : "td",
                    sx: {
                        p: "6px 13px",
                        border: "1px solid var(--borderColor-default, var(--color-border-default))"
                    },
                    children: e
                })
            }

            function tW({
                input: e
            }) {
                switch (e.type) {
                    case "markdown":
                        return (0, f.jsx)(tz, {
                            input: e
                        });
                    case "dropdown":
                        return (0, f.jsx)(tU, {
                            input: e
                        });
                    case "input":
                        return (0, f.jsx)(tG, {
                            input: e
                        });
                    case "textarea":
                        return (0, f.jsx)(tV, {
                            input: e
                        });
                    case "checkboxes":
                        return (0, f.jsx)(tq, {
                            input: e
                        });
                    default:
                        return null
                }
            }

            function tz({
                input: e
            }) {
                return e.value ? (0, f.jsx)(ez.wB, {
                    html: e.value
                }) : null
            }

            function tU({
                input: e
            }) {
                let t = e.options ? .slice();
                e.required || t ? .unshift("None");
                let n = e.multiple ? "Selections: " : "Selection: ";
                return e.value && (n += e.value), (0, f.jsx)(tK, {
                    input: e,
                    sx: {
                        alignItems: "start"
                    },
                    children: (0, f.jsxs)(tF.P, {
                        children: [(0, f.jsx)(tF.P.Button, {
                            children: n
                        }), (0, f.jsx)(tF.P.Overlay, {
                            width: "medium",
                            children: (0, f.jsx)(er.S, {
                                selectionVariant: e.multiple ? "multiple" : "single",
                                children: t ? .map((t, n) => f.jsx(er.S.Item, {
                                    selected: t === e.value,
                                    disabled: !0,
                                    children: t
                                }, n))
                            })
                        })]
                    })
                })
            }

            function tG({
                input: e
            }) {
                return (0, f.jsx)(tK, {
                    input: e,
                    children: (0, f.jsx)(M.Z, {
                        placeholder: e.placeholder,
                        value: e.value ? ? ""
                    })
                })
            }

            function tV({
                input: e
            }) {
                return (0, f.jsx)(tK, {
                    input: e,
                    children: (0, f.jsx)(tO.ZP, {
                        placeholder: e.placeholder,
                        value: e.value ? ? "",
                        sx: e.render ? {
                            fontFamily: "mono"
                        } : {}
                    })
                })
            }

            function tq({
                input: e
            }) {
                return e.checkboxes ? (0, f.jsxs)(tA.Z, {
                    disabled: !0,
                    sx: {
                        color: "var(--fgColor-default, var(--color-fg-default)) !important",
                        my: "15px"
                    },
                    children: [(0, f.jsx)(tA.Z.Label, {
                        sx: {
                            color: "var(--fgColor-default, var(--color-fg-default))",
                            fontSize: ["18px", "18x", "20px"],
                            fontWeight: 600
                        },
                        children: e.label
                    }), e.description && (0, f.jsx)(tA.Z.Caption, {
                        sx: {
                            color: "var(--fgColor-muted, var(--color-fg-subtle))",
                            fontSize: "12px"
                        },
                        children: (0, f.jsx)(ez.wB, {
                            html: e.description
                        })
                    }), e.checkboxes.map((e, t) => (0, f.jsxs)(tP.Z, {
                        disabled: !0,
                        required: e.required,
                        children: [(0, f.jsx)(tM.Z, {}), (0, f.jsx)(tP.Z.Label, {
                            children: e.label
                        })]
                    }, t))]
                }) : null
            }

            function tK({
                children: e,
                input: t,
                sx: n
            }) {
                return (0, f.jsxs)(tP.Z, {
                    disabled: !0,
                    required: t.required,
                    sx: {
                        my: "15px",
                        ...n
                    },
                    children: [(0, f.jsx)(tP.Z.Label, {
                        sx: {
                            color: "var(--fgColor-default, var(--color-fg-default))",
                            fontSize: ["18px", "18x", "20px"],
                            "> span > span:last-of-type": {
                                color: "var(--fgColor-danger, var(--color-danger-fg))"
                            }
                        },
                        children: t.label
                    }), t.description && (0, f.jsx)(tP.Z.Caption, {
                        children: (0, f.jsx)(ez.wB, {
                            html: t.description
                        })
                    }), e]
                })
            }! function(e) {
                e.Issue = "issue", e.Discussion = "discussion"
            }(l || (l = {}));
            try {
                tH.displayName || (tH.displayName = "YamlTemplateContent")
            } catch {}
            try {
                t$.displayName || (t$.displayName = "MarkdownTableCell")
            } catch {}
            try {
                tW.displayName || (tW.displayName = "TemplateInput")
            } catch {}
            try {
                tz.displayName || (tz.displayName = "MarkdownInput")
            } catch {}
            try {
                tU.displayName || (tU.displayName = "DropdownInput")
            } catch {}
            try {
                tG.displayName || (tG.displayName = "InputInput")
            } catch {}
            try {
                tV.displayName || (tV.displayName = "TextareaInput")
            } catch {}
            try {
                tq.displayName || (tq.displayName = "CheckboxesInput")
            } catch {}
            try {
                tK.displayName || (tK.displayName = "InputWrapper")
            } catch {}
            let tY = (0, v.lazy)(() => n.e("app_assets_modules_react-code-view_components_blob_BlobContent_CSV_CSVBlob_tsx").then(n.bind(n, 31021))),
                tQ = (0, v.lazy)(() => n.e("app_assets_modules_react-code-view_components_blob_BlobContent_Renderable_FileRendererBlob_tsx").then(n.bind(n, 49186)));

            function tX({
                setOpenPanel: e,
                codeNavInfo: t,
                validCodeNav: n,
                onCodeNavTokenSelected: r,
                onLineStickOrUnstick: i,
                searchResults: a,
                setSearchTerm: s,
                blobLinesHandle: l,
                focusedSearchResult: c
            }) {
                let d = !!(0, ew.Q)(),
                    {
                        rawLines: u
                    } = (0, ev.G)(),
                    {
                        sendRepoKeyDownEvent: h
                    } = (0, V.a)(),
                    {
                        findInFileShortcut: m
                    } = (0, ek.bx)(),
                    p = eH(),
                    {
                        setFindInFileOpen: x
                    } = eM(),
                    y = p === o.Code,
                    g = y && null != u && n ? m.hotkey : "",
                    b = (0, eO.nj)();
                (0, v.useEffect)(() => {
                    y || e(void 0)
                }, [y, e]);
                let j = y || p === o.CSV || p === o.Markdown ? {} : {
                        overflow: "auto"
                    },
                    w = p === o.Markdown ? {
                        justifyContent: "center"
                    } : {};
                return (0, f.jsxs)(E.Z, {
                    as: "section",
                    "aria-labelledby": "file-name-id-wide file-name-id-mobile",
                    sx: {
                        backgroundColor: "var(--bgColor-default, var(--color-canvas-default))",
                        border: "0px",
                        borderWidth: 0,
                        borderRadius: "0px 0px 6px 6px",
                        p: 0,
                        minWidth: 0,
                        mt: d ? "92px" : "46px",
                        ...w,
                        ...j
                    },
                    children: [(0, f.jsx)(tJ, {
                        blobLinesHandle: l,
                        onCodeNavTokenSelected: r,
                        codeSections: d ? void 0 : t ? .codeSections,
                        codeLineToSectionMap: t ? t.lineToSectionMap : void 0,
                        validCodeNav: n,
                        onLineStickOrUnstick: i,
                        searchResults: a,
                        focusedSearchResult: c
                    }), y && !b && (0, f.jsx)(ep.P, {
                        buttonFocusId: eZ.KG,
                        buttonHotkey: g,
                        onButtonClick: function() {
                            x(!0), h("BLOB_FIND_IN_FILE_MENU.OPEN");
                            let e = window.getSelection() ? .toString();
                            e && s(e)
                        },
                        buttonTestLabel: "hotkey-button"
                    })]
                })
            }
            let tJ = v.memo(function({
                onCodeNavTokenSelected: e,
                codeSections: t,
                codeLineToSectionMap: n,
                validCodeNav: r,
                onLineStickOrUnstick: i,
                searchResults: a,
                blobLinesHandle: s,
                focusedSearchResult: c
            }) {
                let d = (0, ev.G)(),
                    u = eH();
                switch (u) {
                    case o.TooLargeError:
                        return (0, f.jsxs)(E.Z, {
                            sx: {
                                textAlign: "center"
                            },
                            "data-hpc": !0,
                            children: [(0, f.jsx)(eo.Z, {
                                href: d.rawBlobUrl,
                                children: "View raw"
                            }), d.large && (0, f.jsx)("p", {
                                children: "(Sorry about that, but we can\u2019t show files that are this big right now.)"
                            })]
                        });
                    case o.Code:
                        return (0, f.jsx)(t_, {
                            blobLinesHandle: s,
                            onCodeNavTokenSelected: e,
                            codeSections: t,
                            codeLineToSectionMap: n,
                            validCodeNav: r,
                            onLineStickOrUnstick: i,
                            searchResults: a,
                            focusedSearchResult: c
                        });
                    case o.Markdown:
                        return (0, f.jsx)(eJ, {
                            richText: d.richText,
                            sx: {
                                borderBottomLeftRadius: "6px",
                                borderBottomRightRadius: "6px",
                                p: 5,
                                minWidth: 0
                            }
                        });
                    case o.CSV:
                        return (0, f.jsx)(v.Suspense, {
                            fallback: (0, f.jsx)(e1.m, {}),
                            children: (0, f.jsx)(tY, {
                                csv: d.csv
                            })
                        });
                    case o.FileRenderer:
                        return (0, f.jsx)(v.Suspense, {
                            fallback: (0, f.jsx)(e1.m, {}),
                            children: (0, f.jsx)(tQ, {
                                identityUuid: d.renderedFileInfo.identityUUID,
                                size: d.renderedFileInfo.size,
                                type: d.renderedFileInfo.renderFileType,
                                url: d.displayUrl
                            })
                        });
                    case o.Image:
                        return (0, f.jsx)(tD, {
                            displayName: d.displayName,
                            displayUrl: d.displayUrl
                        });
                    case o.IssueTemplate:
                        return (0, f.jsx)(tH, {
                            issueTemplate: d.issueTemplate ? d.issueTemplate : d.discussionTemplate,
                            type: d.issueTemplate ? l.Issue : l.Discussion,
                            "data-hpc": !0
                        });
                    default:
                        e$(u)
                }
            });
            try {
                tY.displayName || (tY.displayName = "CSVBlob")
            } catch {}
            try {
                tQ.displayName || (tQ.displayName = "FileRendererBlob")
            } catch {}
            try {
                tX.displayName || (tX.displayName = "BlobContent")
            } catch {}
            try {
                tJ.displayName || (tJ.displayName = "Blob")
            } catch {}
            var t0 = n(85844),
                t1 = n(56302),
                t2 = n(87634),
                t3 = n(33831),
                t4 = n(89042),
                t8 = n(4855),
                t6 = n(35880),
                t5 = n(35499),
                t9 = n(21913);

            function t7({
                disabled: e,
                ...t
            }) {
                return (0, f.jsx)(P.h, {
                    size: "small",
                    ...t,
                    ...e ? {
                        className: "btn",
                        "aria-disabled": !0,
                        onClick: e => e.preventDefault()
                    } : {}
                })
            }
            try {
                t7.displayName || (t7.displayName = "AccessibleIconButton")
            } catch {}
            var ne = n(63309);
            let nt = (0, v.lazy)(() => n.e("app_assets_modules_react-code-view_components_blob_BlobContent_CodeNav_ScrollMarks_tsx").then(n.bind(n, 65710)));

            function nn({
                stickied: e,
                searchTerm: t,
                searchResults: n,
                setSearchTerm: r,
                focusedSearchResult: i,
                setFocusedSearchResult: o,
                onClose: a
            }) {
                let s = (0, eO.nj)(),
                    l = (0, v.useRef)(null),
                    {
                        findInFileShortcut: c,
                        findSelectionShortcut: d,
                        findNextShortcut: u,
                        findPrevShortcut: h
                    } = (0, ek.bx)(),
                    [m, p] = (0, v.useState)(!0),
                    x = () => {
                        r(""), o(0)
                    },
                    {
                        sendRepoKeyDownEvent: y
                    } = (0, V.a)(),
                    g = e => {
                        if (void 0 === i) {
                            o(0);
                            return
                        }
                        1 === e ? o(i === n.length - 1 ? 0 : i + 1) : o(0 === i ? n.length - 1 : i - 1)
                    };
                (0, v.useEffect)(() => {
                    l.current ? .focus(), l.current ? .select()
                }, []);
                let b = () => {
                    let e = window.getSelection() ? .toString();
                    e ? .length && (r(e), o(0), y("BLOB_FIND_IN_FILE_MENU.FIND_IN_FILE_FROM_SELECTION")), l.current ? .focus(), l.current ? .select()
                };
                return ((0, v.useEffect)(() => {
                    n.length > 0 && void 0 !== i && (0, eT.v)({
                        line: n[i].lineNumber,
                        column: n[i].ident.start.column
                    })
                }, [n, i]), s) ? null : (0, f.jsxs)(E.Z, {
                    className: `find-in-file-popover ${e?"find-in-file-popover-stickied":"find-in-file-popover-not-stickied"}`,
                    children: [(0, f.jsxs)(E.Z, {
                        sx: {
                            fontSize: 0,
                            py: 2,
                            pl: 3,
                            pr: 2,
                            borderBottom: "1px solid var(--borderColor-default, var(--color-border-default))",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        children: [(0, f.jsxs)(E.Z, {
                            sx: {
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "baseline"
                            },
                            children: [(0, f.jsx)($.Z, {
                                as: "h5",
                                sx: {
                                    color: "fg.default",
                                    pr: 2,
                                    fontWeight: "bold"
                                },
                                children: "Find"
                            }), (0, f.jsxs)($.Z, {
                                className: "find-text-help-tooltip",
                                sx: {
                                    color: "fg.subtle",
                                    visibility: m ? "visible" : "hidden"
                                },
                                children: ["Press ", (0, f.jsx)(ne.Z, {
                                    children: c.text
                                }), " again to open the browser's find menu"]
                            })]
                        }), (0, f.jsx)(E.Z, {
                            sx: {
                                flex: 1
                            }
                        }), (0, f.jsx)(P.h, {
                            variant: "invisible",
                            size: "small",
                            onClick: a,
                            icon: A.XIcon,
                            sx: {
                                color: "fg.subtle"
                            },
                            "aria-label": "Close find in file"
                        })]
                    }), (0, f.jsxs)(E.Z, {
                        sx: {
                            px: 2,
                            py: "6px"
                        },
                        children: [(0, f.jsx)(M.Z, {
                            ref: l,
                            sx: {
                                pl: 1,
                                border: "none",
                                boxShadow: "none"
                            },
                            validationStatus: n.length > 1e3 ? "error" : void 0,
                            type: "text",
                            leadingVisual: () => (0, f.jsx)(H.Z, {
                                icon: A.SearchIcon,
                                "aria-hidden": "true"
                            }),
                            "aria-labelledby": "find-in-file-label",
                            "aria-expanded": "true",
                            autoComplete: "off",
                            name: "Find in file input",
                            placeholder: "Search this file",
                            value: t,
                            block: !0,
                            onChange: e => {
                                e.target.value ? (p(!1), r(e.target.value), void 0 === i && o(0)) : (p(!0), x())
                            },
                            trailingAction: (0, f.jsxs)(E.Z, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center"
                                },
                                children: [(0, f.jsxs)($.Z, {
                                    className: "text-small",
                                    sx: {
                                        textAlign: "center",
                                        color: "fg.subtle",
                                        m: 2
                                    },
                                    children: [0 === n.length || void 0 === i ? 0 : i + 1, "/", n.length]
                                }), (0, f.jsx)(P.h, {
                                    size: "small",
                                    variant: "invisible",
                                    onClick: () => {
                                        g(-1)
                                    },
                                    icon: A.ChevronUpIcon,
                                    "aria-label": "Up",
                                    "data-testid": "up-search",
                                    sx: {
                                        color: "fg.subtle"
                                    }
                                }), (0, f.jsx)(P.h, {
                                    size: "small",
                                    variant: "invisible",
                                    onClick: () => {
                                        g(1)
                                    },
                                    icon: A.ChevronDownIcon,
                                    "aria-label": "Down",
                                    "data-testid": "down-search",
                                    sx: {
                                        color: "fg.subtle"
                                    }
                                })]
                            }),
                            onKeyDown: e => {
                                "Enter" === e.code || "NumpadEnter" === e.code ? e.shiftKey ? g(-1) : g(1) : (e.metaKey || e.ctrlKey) && ("g" === e.key || "G" === e.key) ? (e.preventDefault(), e.shiftKey ? g(-1) : g(1)) : (e.metaKey || e.ctrlKey) && ("f" === e.key || "F" === e.key) ? m ? (y("BLOB_FIND_IN_FILE_MENU.FALLBACK_TO_BROWSER_SEARCH"), a()) : (p(!0), e.preventDefault(), l.current ? .focus(), l.current ? .select()) : "Escape" === e.key && a()
                            }
                        }), (0, f.jsx)(ep.P, {
                            buttonFocusId: eZ.KG,
                            buttonHotkey: c.hotkey,
                            onButtonClick: b,
                            buttonTestLabel: "hotkey-button"
                        }), (0, f.jsx)("button", {
                            hidden: !0,
                            "data-hotkey": d.hotkey,
                            onClick: b,
                            "data-testid": "selection-hotkey"
                        }), (0, f.jsx)("button", {
                            hidden: !0,
                            "data-hotkey": u.hotkey,
                            onClick: () => g(1),
                            "data-testid": "find-next-button"
                        }), (0, f.jsx)("button", {
                            hidden: !0,
                            "data-hotkey": h.hotkey,
                            onClick: () => g(-1),
                            "data-testid": "find-prev-button"
                        }), (0, f.jsx)(v.Suspense, {
                            fallback: null,
                            children: (0, f.jsx)(nt, {
                                definitionsOrReferences: n
                            })
                        })]
                    })]
                })
            }
            try {
                nt.displayName || (nt.displayName = "ScrollMarks")
            } catch {}
            try {
                nn.displayName || (nn.displayName = "FindInFilePopover")
            } catch {}
            var nr = n(6582),
                ni = n(90836),
                no = n(54901);

            function na({
                width: e,
                ...t
            }) {
                return (0, f.jsx)("div", {
                    style: {
                        width: e
                    },
                    className: "Skeleton Skeleton--text",
                    ...t,
                    children: "\xa0"
                })
            }
            try {
                na.displayName || (na.displayName = "SkeletonText")
            } catch {}

            function ns({
                showTitle: e = !0
            }) {
                let {
                    sendRepoClickEvent: t
                } = (0, V.a)(), [n, r] = (0, v.useState)(!1), i = (0, j.H)(), {
                    refInfo: o,
                    path: a
                } = (0, eC.Br)(), {
                    contributors: s,
                    loading: l,
                    error: c
                } = (0, nr.o)(i.ownerLogin, i.name, o.name, a);
                if (c) return (0, f.jsx)(nd, {});
                if (l) return (0, f.jsx)(na, {
                    width: 100,
                    "data-testid": "contributors-skeleton"
                });
                if (!s || !s ? .users.length) return null;
                let {
                    users: d,
                    totalCount: u
                } = s, h = nc(u, " contributor", "contributors");
                return (0, f.jsxs)(E.Z, {
                    sx: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center"
                    },
                    children: [(0, f.jsx)(E.Z, {
                        sx: {
                            display: "flex",
                            flexDirection: "row"
                        },
                        children: (0, f.jsx)(ni.Z, {
                            children: d.slice(0, 10).map((e, t) => (0, f.jsx)(e9.O, {
                                className: t > 5 ? "AvatarShowLarge" : "AvatarShowMedium",
                                src: e.primaryAvatarUrl,
                                alt: e.login,
                                "data-testid": "contributor-avatar",
                                "data-hovercard-url": (0, w.zP)({
                                    owner: e.login
                                })
                            }, e.login))
                        })
                    }), (0, f.jsxs)(eo.Z, {
                        as: "button",
                        "aria-label": `Show ${h}"`,
                        onClick: () => {
                            r(!0), t("CONTRIBUTORS.LIST.OPEN")
                        },
                        "data-testid": "contributors-count-button",
                        sx: {
                            ml: 2,
                            color: "fg.default"
                        },
                        children: [(0, f.jsx)(H.Z, {
                            icon: A.PeopleIcon
                        }), e && (0, f.jsx)($.Z, {
                            className: "react-contributors-title",
                            sx: {
                                mx: 1,
                                fontSize: 0
                            },
                            children: "Contributors"
                        }), (0, f.jsx)(no.Z, {
                            sx: {
                                mx: 1,
                                px: 2,
                                py: 1
                            },
                            children: u
                        })]
                    }), n && (0, f.jsx)(tZ.V, {
                        title: h,
                        onClose: () => r(!1),
                        width: "medium",
                        height: s.totalCount >= 12 ? "small" : "auto",
                        renderBody: () => (0, f.jsx)(er.S, {
                            sx: {
                                overflowY: "auto",
                                py: 2
                            },
                            "data-testid": "contributor-dialog-list",
                            children: d.map(e => (0, f.jsx)(nl, {
                                user: e
                            }, e.login))
                        })
                    })]
                })
            }

            function nl({
                user: e
            }) {
                let {
                    sendRepoClickEvent: t
                } = (0, V.a)(), {
                    path: n,
                    refInfo: r
                } = (0, eC.Br)(), i = (0, j.H)();
                return (0, f.jsxs)(er.S.Item, {
                    sx: {
                        display: "flex",
                        flexDirection: "row",
                        fontSize: 1,
                        py: 2,
                        color: "fg.default",
                        "&:hover": {
                            backgroundColor: "canvas.subtle"
                        }
                    },
                    "data-testid": "contributor-dialog-row",
                    onClick: () => t("CONTRIBUTORS.LIST.USER"),
                    children: [(0, f.jsxs)(eo.Z, {
                        as: e7.r,
                        sx: {
                            flex: 1
                        },
                        muted: !0,
                        to: e.profileLink,
                        onClick: () => t("CONTRIBUTORS.LIST.USER"),
                        children: [(0, f.jsx)(e9.O, {
                            src: e.primaryAvatarUrl,
                            alt: e.login,
                            sx: {
                                mr: 2
                            },
                            "aria-hidden": "true"
                        }), (0, f.jsx)(K.Z, {
                            inline: !0,
                            title: e.login,
                            children: e.login
                        })]
                    }), (0, f.jsx)(er.S.TrailingVisual, {
                        children: (0, f.jsx)(eo.Z, {
                            as: e7.r,
                            muted: !0,
                            to: (0, w.SV)({
                                repo: i,
                                branch: r.name,
                                path: n,
                                author: e.login
                            }),
                            onClick: () => t("CONTRIBUTORS.LIST.COMMITS"),
                            "aria-label": `${nc(e.commitsCount,"commit","commits")} by ${e.login}`,
                            "data-testid": "commit-link",
                            children: nc(e.commitsCount, "commit", "commits")
                        })
                    })]
                })
            }

            function nc(e, t, n) {
                return `${e} ${1===e?t:n}`
            }

            function nd() {
                return (0, f.jsxs)($.Z, {
                    sx: {
                        color: "danger.fg"
                    },
                    children: [(0, f.jsx)(H.Z, {
                        icon: A.AlertFillIcon
                    }), "\xa0Cannot retrieve contributors info at this time."]
                })
            }
            try {
                ns.displayName || (ns.displayName = "ContributorAvatars")
            } catch {}
            try {
                nl.displayName || (nl.displayName = "ContributorRow")
            } catch {}
            try {
                nd.displayName || (nd.displayName = "ContributorsError")
            } catch {}
            var nu = n(88216),
                nh = n(39004);

            function nm({
                fileNameId: e = "file-name-id",
                id: t,
                fontSize: n,
                showCopyPathButton: r
            }) {
                let i = (0, j.H)(),
                    {
                        refInfo: o,
                        path: a,
                        action: s
                    } = (0, eC.Br)();
                return (0, f.jsx)(f.Fragment, {
                    children: (0, f.jsx)(nh.a, {
                        path: a,
                        repo: i,
                        commitish: o.name,
                        isFolder: "tree" === s,
                        fileNameId: e,
                        id: t,
                        fontSize: n,
                        showCopyPathButton: r && "" !== a && "/" !== a
                    })
                })
            }
            try {
                nm.displayName || (nm.displayName = "ReposHeaderBreadcrumb")
            } catch {}
            var nf = n(80490);

            function np({
                size: e,
                buttonClassName: t,
                allowResizing: n,
                idEnding: r
            }) {
                let i = (0, j.H)(),
                    {
                        refInfo: o,
                        path: a,
                        action: s
                    } = (0, eC.Br)(),
                    l = function() {
                        let {
                            addToast: e
                        } = (0, t2.V6)();
                        return (0, v.useCallback)(t => e({
                            type: "error",
                            message: t
                        }), [e])
                    }(),
                    {
                        sendRepoClickEvent: c
                    } = (0, V.a)(),
                    {
                        refSelectorShortcut: d
                    } = (0, ek.bx)(),
                    u = o.name;
                return u === o.currentOid && (u = o.name.slice(0, 7)), (0, f.jsx)(nf.cq, {
                    currentCommitish: u,
                    defaultBranch: i.defaultBranch,
                    owner: i.ownerLogin,
                    repo: i.name,
                    canCreate: i.currentUserCanPush,
                    cacheKey: o.listCacheKey,
                    selectedRefType: "tree" === o.refType ? "branch" : o.refType,
                    getHref: e => `${(0,w.Qi)({repo:i,commitish:e,action:s,path:a})}${window.location.search}`,
                    hotKey: d.hotkey,
                    onBeforeCreate: e => c("REF_SELECTOR_MENU.CREATE_BRANCH", {
                        ref_name: e
                    }),
                    onCreateError: l,
                    onOpenChange: e => e && c("REF_SELECTOR_MENU"),
                    size: e,
                    buttonClassName: t,
                    allowResizing: n,
                    idEnding: r || "repos-header-ref-selector",
                    useFocusZone: !0
                })
            }
            try {
                np.displayName || (np.displayName = "ReposHeaderRefSelector")
            } catch {}

            function nx({
                isStickied: e,
                showTree: t,
                treeToggleElement: n
            }) {
                let r = () => (0, f.jsx)(nm, {
                        id: "sticky-breadcrumb",
                        fileNameId: "sticky-file-name-id",
                        fontSize: 1
                    }),
                    i = ({
                        sx: e
                    }) => (0, f.jsx)(nu.r, {
                        leadingVisual: A.ArrowUpIcon,
                        variant: "invisible",
                        size: "small",
                        sx: {
                            color: "fg.default",
                            ...e
                        },
                        onClick: e => {
                            e.preventDefault(), window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                        },
                        children: "Top"
                    });
                return (0, f.jsx)(E.Z, {
                    sx: {
                        display: e ? "flex" : "none",
                        minWidth: 0,
                        py: 2,
                        ...e ? {
                            backgroundColor: "canvas.subtle",
                            borderLeft: "1px solid var(--borderColor-default, var(--color-border-default))",
                            borderRight: "1px solid var(--borderColor-default, var(--color-border-default))"
                        } : {}
                    },
                    children: t ? (0, f.jsxs)(E.Z, {
                        sx: {
                            mr: 2,
                            ml: 3,
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%"
                        },
                        children: [(0, f.jsx)(r, {}), (0, f.jsx)(i, {
                            sx: {
                                ml: 2
                            }
                        })]
                    }) : (0, f.jsxs)(E.Z, {
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            overflow: "hidden",
                            mx: 2,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "100%"
                        },
                        children: [(0, f.jsxs)(E.Z, {
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [e && n, (0, f.jsx)(E.Z, {
                                sx: {
                                    ml: 1,
                                    mr: 2
                                },
                                children: (0, f.jsx)(np, {
                                    buttonClassName: "ref-selector-class"
                                })
                            }), (0, f.jsx)(E.Z, {
                                sx: {
                                    textOverflow: "ellipsis",
                                    overflow: "hidden",
                                    display: "flex"
                                },
                                children: (0, f.jsx)(r, {})
                            })]
                        }), (0, f.jsx)(i, {
                            sx: {
                                ml: 2
                            }
                        })]
                    })
                })
            }
            try {
                nx.displayName || (nx.displayName = "FileNameStickyHeader")
            } catch {}
            try {
                (c = StickyReposHeaderBreadcrumb).displayName || (c.displayName = "StickyReposHeaderBreadcrumb")
            } catch {}
            try {
                (d = GoToTopButton).displayName || (d.displayName = "GoToTopButton")
            } catch {}
            let ny = v.memo(ng);

            function ng() {
                let e = function() {
                    let {
                        resolvedColorScheme: e
                    } = (0, tr.Fg)(), t = e ? .startsWith("dark");
                    return t ? Array(10).fill(null).map((e, t) => to[`scale.orange.${9-t}`]) : Array(10).fill(null).map((e, t) => to[`scale.orange.${t}`])
                }();
                return (0, f.jsxs)(E.Z, {
                    "aria-hidden": !0,
                    sx: {
                        display: "flex",
                        color: "fg.muted",
                        alignItems: "center",
                        gap: "2px",
                        fontSize: 0
                    },
                    children: [(0, f.jsx)($.Z, {
                        sx: {
                            mr: 2
                        },
                        children: "Older"
                    }), e.map((e, t) => (0, f.jsx)(E.Z, {
                        sx: {
                            height: "0.5rem",
                            width: "0.5rem",
                            backgroundColor: e
                        }
                    }, `blame-recency-color-${t}`)), (0, f.jsx)($.Z, {
                        sx: {
                            ml: 2
                        },
                        children: "Newer"
                    })]
                })
            }
            try {
                ng.displayName || (ng.displayName = "BlameAgeLegend")
            } catch {}
            var nb = n(72278);

            function nj() {
                let {
                    headerInfo: {
                        isCSV: e,
                        isRichtext: t,
                        shortPath: n
                    },
                    renderedFileInfo: r,
                    image: i,
                    issueTemplate: o,
                    discussionTemplate: a,
                    viewable: s
                } = (0, ev.G)(), l = (0, ew.Q)(), [c] = (0, eI.lr)(), d = "1" === c.get("plain") || !!c.get("short_path") ? .length, u = r && !s || i, h = t || o || a || e || r, m = r ? `short_path=${n}` : "plain=1", {
                    getUrl: p
                } = (0, t5.B)(), x = !h || d || l ? l ? 2 : 1 : 0, [y, g] = (0, v.useState)(x);
                (0, T.b)(() => {
                    g(x)
                }, [x]);
                let b = (0, L.s)(),
                    {
                        viewCodeShortcut: j,
                        viewPreviewShortcut: w,
                        viewBlameShortcut: N
                    } = (0, ek.bx)(),
                    C = e => {
                        if (h || (e += 1), g(e), y !== e) switch (e) {
                            case 0:
                                b(p({
                                    action: "blob",
                                    params: "",
                                    hash: ""
                                }));
                                break;
                            case 1:
                                {
                                    let e = location.hash ? .substring(1) ? ? void 0;b(p({
                                        action: "blob",
                                        params: h ? m : "",
                                        hash: e
                                    }));
                                    break
                                }
                            case 2:
                                {
                                    let e = location.hash ? .substring(1) ? ? void 0;b(p({
                                        action: "blame",
                                        params: "",
                                        hash: e
                                    }))
                                }
                        }
                    };
                if (u) return null;
                let k = [(0, f.jsx)(nb.s.Button, {
                        selected: 1 === y,
                        "data-hotkey": j.hotkey,
                        children: "Code"
                    }, "raw"), (0, f.jsx)(nb.s.Button, {
                        selected: 2 === y,
                        "data-hotkey": N.hotkey,
                        children: "Blame"
                    }, "blame")],
                    S = (0, f.jsx)(nb.s.Button, {
                        selected: 0 === y,
                        "data-hotkey": w.hotkey,
                        children: "Preview"
                    }, "preview'"),
                    I = (0, f.jsxs)(f.Fragment, {
                        children: [(0, f.jsx)(ep.P, {
                            buttonFocusId: eZ.KG,
                            buttonHotkey: j.hotkey,
                            onlyAddHotkeyScopeButton: !0,
                            onButtonClick: () => C(h ? 1 : 0)
                        }), (0, f.jsx)(ep.P, {
                            buttonFocusId: eZ.KG,
                            buttonHotkey: N.hotkey,
                            onlyAddHotkeyScopeButton: !0,
                            onButtonClick: () => C(h ? 2 : 1)
                        }), h && (0, f.jsx)(ep.P, {
                            buttonFocusId: eZ.KG,
                            buttonHotkey: w.hotkey,
                            onlyAddHotkeyScopeButton: !0,
                            onButtonClick: () => C(0)
                        })]
                    }),
                    R = h ? u ? [S] : [S, ...k] : [...k];
                return (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsx)(nb.s, {
                        "aria-label": "File view",
                        size: "small",
                        onChange: C,
                        sx: {
                            fontSize: 1
                        },
                        children: R
                    }), I]
                })
            }
            try {
                nj.displayName || (nj.displayName = "BlobTabButtons")
            } catch {}
            var nw = n(51188);

            function nv({
                className: e
            }) {
                let {
                    codeownerInfo: t
                } = (0, nw.nO)(), n = (0, ev.G)(), {
                    path: r,
                    refInfo: i
                } = (0, eC.Br)(), o = (0, j.H)(), a = (0, ew.Q)(), {
                    headerInfo: {
                        blobSize: s,
                        gitLfsPath: l,
                        lineInfo: {
                            truncatedLoc: c,
                            truncatedSloc: d
                        },
                        mode: u
                    },
                    viewable: h,
                    rawLines: m
                } = n, p = "symbolic link" === u ? function({
                    rawLines: e,
                    blame: t,
                    repo: n,
                    refInfo: r,
                    path: i
                }) {
                    if (!e || !e[0]) return null;
                    let o = e[0];
                    (o.startsWith("../") || o.startsWith("./")) && (o = `${i}/../${o}`);
                    let a = {
                        owner: n.ownerLogin,
                        repo: n.name,
                        commitish: r.name,
                        filePath: o
                    };
                    return t ? (0, w.t4)(a) : (0, w.C9)(a)
                }({
                    rawLines: m,
                    blame: a,
                    repo: o,
                    refInfo: i,
                    path: r
                }) : void 0;
                return (0, f.jsxs)(E.Z, {
                    className: e,
                    sx: {
                        alignItems: "center"
                    },
                    children: [t && (0, f.jsx)(nN, {
                        codeownerInfo: t
                    }), (0, f.jsxs)(E.Z, {
                        sx: {
                            fontSize: 0,
                            flex: "auto",
                            pr: 3,
                            color: "fg.muted",
                            minWidth: 0
                        },
                        className: "text-mono",
                        children: ["file" !== u && !p && (0, f.jsxs)(f.Fragment, {
                            children: [(0, f.jsx)(K.Z, {
                                title: u,
                                inline: !0,
                                sx: {
                                    ml: 1,
                                    mr: 2,
                                    textTransform: "capitalize"
                                },
                                children: (0, f.jsx)($.Z, {
                                    children: u
                                })
                            }), h && (0, f.jsx)($.Z, {
                                sx: {
                                    color: "fg.muted",
                                    mr: 1
                                },
                                children: "\xb7"
                            })]
                        }), h ? (0, f.jsxs)(f.Fragment, {
                            children: [p && (0, f.jsxs)(f.Fragment, {
                                children: [(0, f.jsx)(eo.Z, {
                                    as: e7.r,
                                    muted: !0,
                                    to: p,
                                    sx: {
                                        ml: 1,
                                        mr: 2
                                    },
                                    children: "Symbolic Link"
                                }), (0, f.jsx)($.Z, {
                                    sx: {
                                        color: "fg.muted",
                                        mr: 1
                                    },
                                    children: "\xb7"
                                })]
                            }), (0, f.jsx)(K.Z, {
                                title: s,
                                inline: !0,
                                sx: {
                                    maxWidth: "100%"
                                },
                                "data-testid": "blob-size",
                                children: (0, f.jsx)($.Z, {
                                    children: `${c} lines (${d} loc) \xb7 ${s}`
                                })
                            })]
                        }) : (0, f.jsx)($.Z, {
                            children: s
                        }), l && (0, f.jsxs)(f.Fragment, {
                            children: [(0, f.jsx)($.Z, {
                                className: "file-info-divider"
                            }), (0, f.jsx)(eo.Z, {
                                muted: !0,
                                href: l,
                                "aria-label": "Learn more about Git LFS",
                                sx: {
                                    ml: 2
                                },
                                children: (0, f.jsx)(H.Z, {
                                    icon: A.QuestionIcon
                                })
                            }), (0, f.jsx)($.Z, {
                                children: " Stored with Git LFS"
                            })]
                        })]
                    })]
                })
            }

            function nN({
                codeownerInfo: {
                    codeownerPath: e,
                    ownedByCurrentUser: t,
                    ownersForFile: n,
                    ruleForPathLine: r
                }
            }) {
                let i;
                if (!(t || n)) return null;
                let o = (i = "Owned by ", t && (i += "you", n && (i += " along with ")), i += n, r && (i += ` (from CODEOWNERS line ${r})`), i),
                    a = t ? {
                        color: "var(--fgColor-accent, var(--color-accent-fg))"
                    } : {};
                return (0, f.jsx)(tn.Z, {
                    id: "codeowners-tooltip",
                    "aria-label": o,
                    children: e ? (0, f.jsx)(eo.Z, {
                        "aria-labelledby": "codeowners-tooltip",
                        href: e,
                        muted: !t,
                        sx: { ...a
                        },
                        children: (0, f.jsx)(H.Z, {
                            icon: A.ShieldLockIcon,
                            sx: {
                                mr: 2,
                                mt: 1
                            }
                        })
                    }) : (0, f.jsx)(H.Z, {
                        icon: A.ShieldLockIcon,
                        sx: {
                            mr: 2,
                            mt: 1,
                            ...a
                        }
                    })
                })
            }
            try {
                nv.displayName || (nv.displayName = "CodeSizeDetails")
            } catch {}
            try {
                nN.displayName || (nN.displayName = "CodeOwnersBadge")
            } catch {}
            var nC = n(16685);

            function nk({
                editEnabled: e,
                githubDevUrl: t,
                ghDesktopPath: n,
                onBranch: r
            }) {
                let {
                    sendRepoClickEvent: i
                } = (0, V.a)(), o = (0, nC.f)(["windows", "mac"]), {
                    openWithGitHubDevShortcut: a
                } = (0, ek.bx)();
                return (0, f.jsxs)(er.S.Group, {
                    title: "Open with...",
                    children: [t ? (0, f.jsxs)(er.S.LinkItem, {
                        onClick: () => i("BLOB_EDIT_DROPDOWN.DEV_LINK", {
                            edit_enabled: e
                        }),
                        className: "js-blob-dropdown-click js-github-dev-shortcut",
                        href: t,
                        "data-hotkey": a.hotkey,
                        children: ["github.dev", (0, f.jsx)(er.S.TrailingVisual, {
                            "aria-hidden": "true",
                            children: (0, f.jsx)(U.I, {
                                children: (0, f.jsx)("kbd", {
                                    children: "."
                                })
                            })
                        })]
                    }) : null, r && o && n ? (0, f.jsx)(er.S.LinkItem, {
                        onClick: () => i("BLOB_EDIT_DROPDOWN.DESKTOP"),
                        href: n,
                        children: "GitHub Desktop"
                    }) : null]
                })
            }

            function nS(e, t, n) {
                let r = (0, nC.f)(["windows", "mac"]);
                return !!(e || t && !r && n)
            }
            try {
                nk.displayName || (nk.displayName = "OpenWithActionItems")
            } catch {}

            function nI({
                editAllowed: e,
                hasOpenWithItem: t
            }) {
                let n = (0, ev.G)(),
                    {
                        refInfo: {
                            canEdit: r
                        }
                    } = (0, eC.Br)(),
                    {
                        githubDevUrl: i
                    } = (0, eC.Ou)(),
                    {
                        sendRepoClickEvent: o
                    } = (0, V.a)(),
                    {
                        getUrl: a
                    } = (0, t5.B)(),
                    {
                        headerInfo: {
                            ghDesktopPath: s,
                            onBranch: l
                        }
                    } = n;
                return (0, f.jsxs)(f.Fragment, {
                    children: [e && (0, f.jsx)(er.S.Group, {
                        title: "Edit file",
                        children: (0, f.jsxs)(er.S.Item, {
                            as: e7.r,
                            onClick: () => o("BLOB_EDIT_DROPDOWN.IN_PLACE"),
                            to: a({
                                action: "edit"
                            }),
                            "aria-keyshortcuts": "e",
                            children: [(0, f.jsx)(E.Z, {
                                sx: {
                                    display: "flex"
                                },
                                children: "Edit in place"
                            }), (0, f.jsx)(er.S.TrailingVisual, {
                                "aria-hidden": "true",
                                children: (0, f.jsx)(U.I, {
                                    children: (0, f.jsx)("kbd", {
                                        children: "e"
                                    })
                                })
                            })]
                        })
                    }), e && t && (0, f.jsx)(er.S.Divider, {}), t && (0, f.jsx)(nk, {
                        editEnabled: r,
                        githubDevUrl: i,
                        ghDesktopPath: s,
                        onBranch: l
                    })]
                })
            }
            try {
                nI.displayName || (nI.displayName = "EditMenuActionItems")
            } catch {}
            var nR = n(2048);

            function nZ({
                shortcut: e
            }) {
                return (0, f.jsx)(f.Fragment, {
                    children: e.text ? .split(" ").map(e => f.jsxs(f.Fragment, {
                        children: [f.jsx("kbd", {
                            children: e
                        }, e), " "]
                    }))
                })
            }
            try {
                nZ.displayName || (nZ.displayName = "KeyboardVisual")
            } catch {}
            var nT = n(74390);

            function nL() {
                let e = (0, ev.G)();
                return e.workflowRedirectUrl
            }

            function nE({
                onBlamePage: e,
                onDismiss: t,
                maxLineNumber: n
            }) {
                let r = (0, L.s)(),
                    i = (0, eO.nj)(),
                    o = (0, eO.Tw)(),
                    a = (0, eO.i$)(),
                    s = (0, v.useRef)(i ? o : 1),
                    l = (0, v.useRef)(!0),
                    [c, d] = (0, v.useState)(!0),
                    u = (0, v.useRef)(o !== a && i ? a : null),
                    {
                        refInfo: h,
                        path: m
                    } = (0, eC.Br)(),
                    p = (0, j.H)(),
                    x = (0, v.useRef)(null),
                    y = (0, v.useRef)(s.current ? `#L${s.current}${u.current?`-L${u.current}`:""}` : ""),
                    g = e ? (0, w.t4)({
                        repo: p.name,
                        owner: p.ownerLogin,
                        filePath: m,
                        commitish: h.name
                    }) : (0, w.C9)({
                        repo: p.name,
                        owner: p.ownerLogin,
                        filePath: m,
                        commitish: h.name
                    });
                (0, v.useEffect)(() => {
                    x && x.current && (x.current.value = i ? `${o}${a!==o?`-${a}`:""}` : "1", x.current.focus())
                }, []);
                let b = e => {
                    let n = (0, eR.n6)(e);
                    if (!n.blobRange ? .start ? .line || !l.current) {
                        d(l.current), setTimeout(() => {
                            x.current ? .focus()
                        }, 25);
                        return
                    }(0, eT.v)({
                        line: n.blobRange.start.line
                    }), t()
                };
                return (0, tT.createPortal)((0, f.jsx)(nT.Z, {
                    isOpen: !0,
                    onDismiss: t,
                    children: (0, f.jsxs)(E.Z, {
                        children: [(0, f.jsx)(nT.Z.Header, {
                            children: "Jump to line"
                        }), (0, f.jsxs)(E.Z, {
                            sx: {
                                display: "flex",
                                pl: 3,
                                pr: 3,
                                pt: 3,
                                pb: c ? 3 : 0
                            },
                            children: [(0, f.jsx)(E.Z, {
                                sx: {
                                    display: "flex",
                                    flexGrow: 1,
                                    mr: 2
                                },
                                children: (0, f.jsx)(M.Z, {
                                    ref: x,
                                    "aria-invalid": !c,
                                    "aria-describedby": c ? "" : "goToLineErrorValidation",
                                    sx: {
                                        flexGrow: 1,
                                        pr: 2
                                    },
                                    placeholder: "Jump to line...",
                                    onChange: e => {
                                        let t = e.target.value;
                                        x && x.current && (x.current.value = t),
                                            function(e) {
                                                let t = !0;
                                                if ("" === e.trim() && (s.current = 1), e.startsWith("-") && n) {
                                                    let r = parseInt(e, 10);
                                                    if (!Number.isNaN(r) && r < 0) {
                                                        let e = n + r + 1;
                                                        e <= 0 && (e = 1, t = !1), s.current = e
                                                    }
                                                } else if (e.includes("-")) {
                                                    let [r, i] = e.split("-"), o = parseInt(r, 10), a = parseInt(i, 10);
                                                    !Number.isNaN(o) && o > 0 && (s.current = n ? Math.min(o, n) : o, t = void 0 !== n && o <= n), !Number.isNaN(a) && a > 0 && (u.current = n ? Math.min(a, n) : a, t = t && void 0 !== n && a <= n)
                                                } else {
                                                    let r = parseInt(e, 10);
                                                    !Number.isNaN(r) && r > 0 ? (s.current = n ? Math.min(r, n) : r, t = void 0 !== n && r <= n) : t = "" === e
                                                }
                                                l.current = t, t && !c && d(!0), y.current = `#L${s.current}${u.current?`-L${u.current}`:""}`
                                            }(t)
                                    },
                                    onFocus: () => {
                                        x && x.current && x.current.select()
                                    },
                                    onKeyDown: e => {
                                        if ("Enter" === e.key) {
                                            if ("Enter" === e.key && !l.current) {
                                                d(l.current), setTimeout(() => {
                                                    x.current ? .focus()
                                                }, 25);
                                                return
                                            }
                                            r(g + y.current), b(y.current)
                                        }
                                    }
                                })
                            }), (0, f.jsx)(t4.Q, {
                                href: c ? g + y.current : void 0,
                                onClick: () => b(y.current),
                                sx: t9.A,
                                children: "Go"
                            })]
                        }), !c && (0, f.jsx)(E.Z, {
                            role: "alert",
                            id: "goToLineErrorValidation",
                            sx: {
                                display: "flex",
                                p: 2,
                                justifyContent: "center",
                                color: "red"
                            },
                            children: "Invalid line number"
                        })]
                    })
                }), document.body)
            }
            try {
                nE.displayName || (nE.displayName = "GoToLineDialog")
            } catch {}

            function nB() {
                let e = (0, j.H)(),
                    {
                        path: t,
                        refInfo: n
                    } = (0, eC.Br)();
                return n.canEdit ? (0, f.jsx)(er.S.LinkItem, {
                    as: e7.r,
                    to: (0, w.Qi)({
                        repo: e,
                        path: t,
                        commitish: n.name,
                        action: "tree/delete"
                    }),
                    children: (0, f.jsx)($.Z, {
                        sx: {
                            color: "danger.fg"
                        },
                        children: "Delete directory"
                    })
                }) : null
            }
            try {
                (u = function() {
                    let {
                        refInfo: e
                    } = (0, eC.Br)();
                    return e.canEdit ? (0, f.jsxs)(tF.P, {
                        children: [(0, f.jsx)(tF.P.Anchor, {
                            children: (0, f.jsx)(P.h, {
                                icon: A.KebabHorizontalIcon,
                                "aria-label": "More folder actions",
                                title: "More folder actions"
                            })
                        }), (0, f.jsx)(tF.P.Overlay, {
                            children: (0, f.jsx)(er.S, {
                                children: (0, f.jsx)(nB, {})
                            })
                        })]
                    }) : null
                }).displayName || (u.displayName = "TreeOverflowMenu")
            } catch {}
            try {
                nB.displayName || (nB.displayName = "DeleteDirectoryItem")
            } catch {}
            var n_ = n(36218);

            function nD({
                useIcon: e
            }) {
                let {
                    refInfo: t,
                    path: n
                } = (0, eC.Br)(), r = (0, j.H)(), {
                    sendRepoClickEvent: i
                } = (0, V.a)();
                return t.canEdit ? (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsx)(t6.N, {
                        as: "h2",
                        text: "Add file"
                    }), (0, f.jsxs)(tF.P, {
                        children: [e ? (0, f.jsx)(tF.P.Anchor, {
                            children: (0, f.jsx)(P.h, {
                                icon: A.PlusIcon,
                                "aria-label": "Add file"
                            })
                        }) : (0, f.jsx)(tF.P.Button, {
                            children: "Add file"
                        }), (0, f.jsx)(tF.P.Overlay, {
                            sx: {
                                maxHeight: "55vh",
                                overflowY: "auto"
                            },
                            children: (0, f.jsxs)(er.S, {
                                children: [(0, f.jsxs)(er.S.LinkItem, {
                                    as: e7.r,
                                    onClick: () => i("NEW_FILE_BUTTON"),
                                    to: (0, w.Qi)({
                                        repo: r,
                                        path: n,
                                        commitish: t.name,
                                        action: "new"
                                    }),
                                    children: [(0, f.jsx)(er.S.LeadingVisual, {
                                        children: (0, f.jsx)(A.PlusIcon, {})
                                    }), "Create new file"]
                                }), (0, f.jsxs)(er.S.LinkItem, {
                                    onClick: () => i("UPLOAD_FILES_BUTTON"),
                                    href: (0, w.Qi)({
                                        repo: r,
                                        path: n,
                                        commitish: t.name,
                                        action: "upload"
                                    }),
                                    children: [(0, f.jsx)(er.S.LeadingVisual, {
                                        children: (0, f.jsx)(A.UploadIcon, {})
                                    }), "Upload files"]
                                })]
                            })
                        })]
                    })]
                }) : null
            }
            try {
                nD.displayName || (nD.displayName = "AddFileDropdownButton")
            } catch {}
            let nF = (0, v.lazy)(() => Promise.all([n.e("vendors-node_modules_github_text-expander-element_dist_index_js"), n.e("app_assets_modules_react-code-view_components_blob-edit_WebCommitDialog_tsx")]).then(n.bind(n, 20925)));

            function nO({
                webCommitInfo: e,
                isBlob: t
            }) {
                let [n, r] = (0, v.useState)("closed"), i = (0, v.useRef)(null), o = (0, j.H)(), {
                    refInfo: a,
                    path: s
                } = (0, eC.Br)(), {
                    helpUrl: l
                } = (0, eC.Ou)(), c = (0, w.Qi)({
                    repo: o,
                    commitish: a.name,
                    action: t ? "blob" : "tree",
                    path: s
                });
                return e.shouldFork || e.shouldUpdate || e.lockedOnMigration ? null : (0, f.jsxs)(E.Z, {
                    sx: {
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        flexWrap: "wrap-reverse",
                        justifyContent: "flex-end"
                    },
                    children: [(0, f.jsx)(nu.r, {
                        as: e7.r,
                        to: c,
                        children: "Cancel changes"
                    }), (0, f.jsx)(nu.r, {
                        variant: "primary",
                        ref: i,
                        onClick: () => {
                            (0, v.startTransition)(() => {
                                r("pending")
                            })
                        },
                        children: "Commit changes..."
                    }), ("pending" === n || "saving" === n) && (0, f.jsx)(v.Suspense, {
                        fallback: null,
                        children: (0, f.jsx)(nF, {
                            isNewFile: !1,
                            isDelete: !0,
                            helpUrl: l,
                            ownerName: o.ownerLogin,
                            dialogState: n,
                            setDialogState: r,
                            refName: a.name,
                            placeholderMessage: `Delete ${s}${t?"":" directory"}`,
                            webCommitInfo: e,
                            returnFocusRef: i
                        })
                    })]
                })
            }
            try {
                nF.displayName || (nF.displayName = "WebCommitDialog")
            } catch {}
            try {
                nO.displayName || (nO.displayName = "DeleteHeaderButtons")
            } catch {}
            var nA = n(20684),
                nP = n(51461),
                nM = n(59050);

            function nH({
                channel: e,
                repo: t
            }) {
                let [n, r] = (0, v.useState)([]), i = (0, v.useCallback)(async () => {
                    let e = await (0, eD.v)(`/${t.ownerLogin}/${t.name}/recently-touched-branches`);
                    e.ok && r(await e.json())
                }, [t.name, t.ownerLogin]), o = (0, v.useRef)(null), a = (0, v.useCallback)(() => {
                    null !== o.current && window.clearTimeout(o.current), o.current = window.setTimeout(() => {
                        i()
                    }, 500)
                }, [i]);
                return (0, nA.o)(e, a), (0, v.useEffect)(() => {
                    i()
                }, [i]), (0, f.jsx)(f.Fragment, {
                    children: n ? .map((e, r) => f.jsxs(nP.Z, {
                        variant: "warning",
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mb: r === n.length - 1 ? 3 : 2
                        },
                        children: [f.jsxs(E.Z, {
                            sx: {
                                mr: 1,
                                overflowWrap: "anywhere",
                                "a:not(:hover)": {
                                    color: "inherit"
                                }
                            },
                            children: [f.jsx(H.Z, {
                                icon: A.GitBranchIcon,
                                sx: {
                                    mr: 1
                                }
                            }), f.jsxs(e7.r, {
                                to: w.v5({
                                    owner: e.repoOwner,
                                    repo: e.repoName,
                                    branch: e.branchName
                                }),
                                reloadDocument: !0,
                                style: {
                                    fontWeight: "bold"
                                },
                                children: [t.ownerLogin !== e.repoOwner ? `${e.repoOwner}:` : "", e.branchName]
                            }), ` had recent pushes ${nM.C(new Date(e.date))}`]
                        }), f.jsx(t4.Q, {
                            href: e.comparePath,
                            variant: "primary",
                            children: "Compare & pull request"
                        })]
                    }, e.branchName + r))
                })
            }
            try {
                nH.displayName || (nH.displayName = "RecentlyTouchedBranches")
            } catch {}
            let n$ = (0, ex.Z)("localStorage");

            function nW() {
                let {
                    codeFoldingOption: e,
                    codeWrappingOption: t,
                    codeCenterOption: n,
                    openSymbolsOption: r
                } = (0, I.O)();
                return (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsx)(nz, {
                        option: e
                    }), (0, f.jsx)(nz, {
                        option: t
                    }), (0, f.jsx)(nz, {
                        option: n
                    }), (0, f.jsx)(nz, {
                        option: r
                    })]
                })
            }

            function nz({
                option: e
            }) {
                let t = (0, v.useCallback)(() => {
                    e.setEnabled(!e.enabled), n$.setItem(e.name, String(!e.enabled))
                }, [e]);
                return (0, f.jsxs)(er.S.Item, {
                    onSelect: t,
                    children: [(0, f.jsx)(er.S.LeadingVisual, {
                        children: e.enabled && (0, f.jsx)(A.CheckIcon, {})
                    }), e.label]
                }, e.name)
            }
            try {
                nW.displayName || (nW.displayName = "SettingsMenuItems")
            } catch {}
            try {
                nz.displayName || (nz.displayName = "OptionsElement")
            } catch {}

            function nU({
                payload: e,
                showTree: t,
                treeToggleElement: n,
                validCodeNav: r,
                onFindFilesShortcut: i
            }) {
                let o = eQ(),
                    a = g(e),
                    {
                        codeCenterOption: s
                    } = (0, I.O)(),
                    {
                        githubDevUrl: l
                    } = (0, eC.Ou)(),
                    {
                        openWithGitHubDevShortcut: c,
                        openWithGitHubDevInNewWindowShortcut: d
                    } = (0, ek.bx)(),
                    u = !t && (0, f.jsx)(n_.default, {
                        onFindFilesShortcut: i,
                        useOverlay: !0,
                        sx: {
                            mr: 1,
                            ml: 1
                        }
                    });
                return a ? (0, f.jsx)(nV, {
                    showTree: t,
                    payload: e
                }) : (0, f.jsxs)(E.Z, {
                    className: "container",
                    sx: {
                        width: "100%"
                    },
                    children: [(0, f.jsx)(nG, {
                        showTree: t,
                        treeToggleElement: n,
                        payload: e,
                        validCodeNav: r
                    }), (0, f.jsx)(E.Z, {
                        sx: {
                            p: 3,
                            pb: 0,
                            px: 3
                        },
                        id: "StickyHeader",
                        className: "react-code-view-header--wide",
                        children: (0, f.jsx)(E.Z, {
                            sx: {
                                display: "flex",
                                gap: 2,
                                flexDirection: "column",
                                width: "100%"
                            },
                            children: (0, f.jsxs)(E.Z, {
                                sx: {
                                    display: "flex",
                                    alignItems: "start",
                                    justifyContent: "space-between",
                                    gap: 2
                                },
                                children: [t ? (0, f.jsx)(E.Z, {
                                    sx: {
                                        alignSelf: "center",
                                        display: "flex",
                                        pr: 2,
                                        minWidth: 0
                                    },
                                    children: (0, f.jsx)(nm, {
                                        id: "repos-header-breadcrumb-wide",
                                        fileNameId: "file-name-id-wide",
                                        showCopyPathButton: !0
                                    })
                                }) : (0, f.jsxs)(E.Z, {
                                    sx: {
                                        display: "flex",
                                        alignItems: "start",
                                        minWidth: 0
                                    },
                                    children: [(0, f.jsx)(E.Z, {
                                        sx: {
                                            display: "block",
                                            "@media screen and (min-width: 1360px)": {
                                                display: s.enabled ? "none" : "block"
                                            },
                                            mr: 2
                                        },
                                        children: n
                                    }), (0, f.jsx)(E.Z, {
                                        sx: {
                                            mr: 2
                                        },
                                        children: (0, f.jsx)(np, {
                                            buttonClassName: "ref-selector-class",
                                            idEnding: "repos-header-ref-selector-wide"
                                        })
                                    }), (0, f.jsx)(E.Z, {
                                        sx: {
                                            alignSelf: "center",
                                            display: "flex",
                                            px: 2,
                                            minWidth: 0
                                        },
                                        children: (0, f.jsx)(nm, {
                                            id: "repos-header-breadcrumb-wide",
                                            fileNameId: "file-name-id-wide",
                                            showCopyPathButton: !0
                                        })
                                    })]
                                }), (0, f.jsx)(E.Z, {
                                    sx: {
                                        minHeight: "32px",
                                        display: "flex",
                                        alignItems: "start"
                                    },
                                    children: (0, f.jsxs)("div", {
                                        className: "d-flex gap-2",
                                        children: [p(e) && (0, f.jsxs)(ev.d, {
                                            blob: e.blob,
                                            children: [(0, f.jsx)(nY, {}), u, (0, f.jsx)(n2, {
                                                onCopy: o,
                                                validCodeNav: r
                                            })]
                                        }), b(e) && (0, f.jsxs)(f.Fragment, {
                                            children: [(0, f.jsx)(t6.N, {
                                                as: "h2",
                                                text: "Directory actions"
                                            }), u, (0, f.jsx)(nD, {}), (0, f.jsx)(nq, {}), (0, f.jsx)(eo.Z, {
                                                className: "js-github-dev-shortcut d-none",
                                                "data-hotkey": c.hotkey,
                                                href: l
                                            }), (0, f.jsx)(eo.Z, {
                                                className: "js-github-dev-new-tab-shortcut d-none",
                                                "data-hotkey": d.hotkey,
                                                href: l,
                                                target: "_blank"
                                            })]
                                        }), x(e) && (0, f.jsx)(nO, {
                                            webCommitInfo: e.webCommitInfo,
                                            isBlob: e.deleteInfo.isBlob
                                        })]
                                    })
                                })]
                            })
                        })
                    })]
                })
            }

            function nG({
                showTree: e,
                treeToggleElement: t,
                payload: n,
                validCodeNav: r
            }) {
                let i = eQ(),
                    [o] = (0, e2.D)(() => !1, !0, []);
                return (0, f.jsx)(E.Z, {
                    sx: {
                        p: 3,
                        pb: 0
                    },
                    className: "react-code-view-header--narrow",
                    children: (0, f.jsxs)(E.Z, {
                        sx: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            gap: 3,
                            width: "100%"
                        },
                        children: [(0, f.jsxs)(E.Z, {
                            sx: {
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "start",
                                justifyContent: "space-between"
                            },
                            children: [e && !o ? (0, f.jsx)(E.Z, {
                                sx: {
                                    alignSelf: "center",
                                    display: "flex",
                                    minWidth: 0
                                },
                                children: (0, f.jsx)(nm, {
                                    id: "repos-header-breadcrumb-mobile",
                                    fileNameId: "file-name-id-mobile",
                                    showCopyPathButton: !0
                                })
                            }) : t, (0, f.jsxs)(E.Z, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "start",
                                    justifyContent: "space-between",
                                    justifySelf: "flex-end"
                                },
                                children: [(!e || o) && (0, f.jsx)(E.Z, {
                                    sx: {
                                        mx: 2
                                    },
                                    children: (0, f.jsx)(np, {
                                        buttonClassName: "ref-selector-class",
                                        idEnding: "repos-header-ref-selector-narrow"
                                    })
                                }), p(n) ? (0, f.jsx)(ev.d, {
                                    blob: n.blob,
                                    children: (0, f.jsx)(n2, {
                                        onCopy: i,
                                        validCodeNav: r,
                                        narrow: !0
                                    })
                                }) : null, b(n) ? (0, f.jsxs)(f.Fragment, {
                                    children: [(0, f.jsx)(t6.N, {
                                        as: "h2",
                                        text: "Directory actions"
                                    }), (0, f.jsx)(nq, {
                                        narrow: !0
                                    })]
                                }) : x(n) ? (0, f.jsx)(nO, {
                                    webCommitInfo: n.webCommitInfo,
                                    isBlob: n.deleteInfo.isBlob
                                }) : null]
                            })]
                        }), (!e || o) && (0, f.jsx)(E.Z, {
                            sx: {
                                justifySelf: "end",
                                maxWidth: "100%"
                            },
                            children: (0, f.jsx)(nm, {
                                id: "repos-header-breadcrumb-mobile",
                                fileNameId: "file-name-id-mobile",
                                showCopyPathButton: !0
                            })
                        })]
                    })
                })
            }

            function nV({
                showTree: e,
                payload: t
            }) {
                let n = (0, j.H)(),
                    {
                        banners: r
                    } = t.overview;
                return null !== r.recentlyTouchedDataChannel ? (0, f.jsx)(E.Z, {
                    sx: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        pl: e ? 3 : 0
                    },
                    children: (0, f.jsx)(nH, {
                        channel: r.recentlyTouchedDataChannel,
                        repo: n
                    })
                }) : null
            }

            function nq({
                narrow: e
            }) {
                let {
                    refInfo: t,
                    path: n
                } = (0, eC.Br)(), r = (0, j.H)(), {
                    sendRepoClickEvent: i
                } = (0, V.a)(), {
                    addToast: o
                } = (0, t2.V6)(), {
                    createPermalink: a
                } = (0, t5.B)(), {
                    copyFilePathShortcut: s,
                    copyPermalinkShortcut: l
                } = (0, ek.bx)(), {
                    codeCenterOption: c
                } = (0, I.O)(), d = (0, v.useRef)(null), [u, h, m] = (0, t8.a)("raw-copy-message-tooltip", d, {
                    direction: "nw"
                });
                return (0, f.jsxs)(f.Fragment, {
                    children: [s.hotkey && (0, f.jsx)(ep.P, {
                        buttonFocusId: eZ.KG,
                        buttonHotkey: s.hotkey,
                        onButtonClick: () => {
                            (0, eV.z)(n), o({
                                type: "success",
                                message: "Path copied!"
                            })
                        }
                    }), l.hotkey && (0, f.jsx)(ep.P, {
                        buttonFocusId: eZ.KG,
                        buttonHotkey: l.hotkey,
                        onButtonClick: () => {
                            (0, eV.z)(a({
                                absolute: !0
                            })), o({
                                type: "success",
                                message: "Permalink copied!"
                            })
                        }
                    }), (0, f.jsx)(t6.N, {
                        as: "h2",
                        text: "More options"
                    }), m, (0, f.jsxs)(tF.P, {
                        onOpenChange: e => e && i("MORE_OPTIONS_DROPDOWN"),
                        anchorRef: d,
                        children: [(0, f.jsx)(tF.P.Anchor, {
                            children: (0, f.jsx)(P.h, {
                                icon: A.KebabHorizontalIcon,
                                "aria-label": "More options",
                                size: "medium",
                                sx: {
                                    color: "fg.muted"
                                },
                                title: "More options",
                                "data-testid": "tree-overflow-menu-anchor",
                                onBlur: h
                            })
                        }), (0, f.jsx)(tF.P.Overlay, {
                            width: "small",
                            children: (0, f.jsxs)(er.S, {
                                children: [e && t.canEdit && (0, f.jsxs)(f.Fragment, {
                                    children: [(0, f.jsxs)(er.S.LinkItem, {
                                        as: e7.r,
                                        onClick: () => i("NEW_FILE_BUTTON"),
                                        to: (0, w.Qi)({
                                            repo: r,
                                            path: n,
                                            commitish: t.name,
                                            action: "new"
                                        }),
                                        children: [(0, f.jsx)(er.S.LeadingVisual, {
                                            children: (0, f.jsx)(A.PlusIcon, {})
                                        }), "Create new file"]
                                    }), (0, f.jsxs)(er.S.LinkItem, {
                                        onClick: () => i("UPLOAD_FILES_BUTTON"),
                                        href: (0, w.Qi)({
                                            repo: r,
                                            path: n,
                                            commitish: t.name,
                                            action: "upload"
                                        }),
                                        children: [(0, f.jsx)(er.S.LeadingVisual, {
                                            children: (0, f.jsx)(A.UploadIcon, {})
                                        }), "Upload files"]
                                    }), (0, f.jsx)(er.S.Divider, {})]
                                }), (0, f.jsx)(nK, {
                                    path: n,
                                    updateTooltipMessage: u
                                }), t.canEdit && (0, f.jsx)(er.S.Divider, {}), (0, f.jsx)(nB, {}), (0, f.jsx)(er.S.Divider, {}), (0, f.jsx)(er.S.Group, {
                                    title: "View options",
                                    children: (0, f.jsx)(nz, {
                                        option: c
                                    })
                                })]
                            })
                        })]
                    })]
                })
            }

            function nK({
                path: e,
                updateTooltipMessage: t
            }) {
                let {
                    copyFilePathShortcut: n
                } = (0, ek.bx)(), {
                    copyPermalinkShortcut: r
                } = (0, ek.bx)(), {
                    sendRepoClickEvent: i
                } = (0, V.a)(), {
                    createPermalink: o
                } = (0, t5.B)();
                return (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsxs)(er.S.Item, {
                        onSelect: () => {
                            i("MORE_OPTIONS_DROPDOWN.COPY_PATH"), (0, eV.z)(e), t("Path copied!")
                        },
                        children: ["Copy path", n.hotkey && (0, f.jsx)(er.S.TrailingVisual, {
                            "aria-hidden": "true",
                            children: (0, f.jsx)(nZ, {
                                shortcut: n
                            })
                        })]
                    }), (0, f.jsxs)(er.S.Item, {
                        onSelect: () => {
                            i("MORE_OPTIONS_DROPDOWN.COPY_PERMALINK"), (0, eV.z)(o({
                                absolute: !0
                            })), t("Permalink copied!")
                        },
                        children: ["Copy permalink", r.hotkey && (0, f.jsx)(er.S.TrailingVisual, {
                            "aria-hidden": "true",
                            children: (0, f.jsx)(nZ, {
                                shortcut: r
                            })
                        })]
                    })]
                })
            }

            function nY() {
                let e = nL();
                return e ? (0, f.jsx)(nu.r, {
                    as: e7.r,
                    to: e,
                    children: "View Runs"
                }) : null
            }
            try {
                nU.displayName || (nU.displayName = "CodeViewHeader")
            } catch {}
            try {
                nG.displayName || (nG.displayName = "MobileCodeHeader")
            } catch {}
            try {
                nV.displayName || (nV.displayName = "OverviewHeader")
            } catch {}
            try {
                nq.displayName || (nq.displayName = "TreeOverflowMenu")
            } catch {}
            try {
                nK.displayName || (nK.displayName = "CopyPathsActionItems")
            } catch {}
            try {
                nY.displayName || (nY.displayName = "ViewRunsButton")
            } catch {}

            function nQ({
                fileReference: e
            }) {
                return (0, f.jsx)(f.Fragment, {
                    children: (0, f.jsx)(er.S.Item, {
                        onClick: () => (0, t1.o)(e, !0),
                        children: "Ask about this file"
                    })
                })
            }
            try {
                nQ.displayName || (nQ.displayName = "CopilotMenuItems")
            } catch {}

            function nX({
                viewable: e,
                onCopy: t,
                name: n,
                updateTooltipMessage: r,
                all: i
            }) {
                let {
                    sendRepoClickEvent: o
                } = (0, V.a)(), {
                    rawBlobUrl: a
                } = (0, ev.G)(), {
                    downloadRawContentShortcut: s
                } = (0, ek.bx)(), l = (0, v.useCallback)(async () => await nJ(a, n), [n, a]);
                return (0, f.jsxs)(er.S.Group, {
                    title: "Raw file content",
                    children: [i && (0, f.jsx)(n0, {
                        viewable: e,
                        onCopy: t,
                        updateTooltipMessage: r
                    }), i && (0, f.jsx)(n1, {
                        onClick: () => o("BLOB_RAW_DROPDOWN.VIEW"),
                        rawHref: a
                    }), (0, f.jsxs)(er.S.LinkItem, {
                        onClick: l,
                        children: ["Download", s.text && (0, f.jsx)(er.S.TrailingVisual, {
                            "aria-hidden": "true",
                            children: (0, f.jsx)(nZ, {
                                shortcut: s
                            })
                        })]
                    })]
                })
            }
            async function nJ(e, t) {
                let n = await fetch(e, {
                        method: "get"
                    }),
                    r = await n.blob(),
                    i = document.createElement("a");
                i.setAttribute("download", t);
                let o = URL.createObjectURL(r);
                i.href = o, i.setAttribute("target", "_blank"), i.click(), URL.revokeObjectURL(o)
            }

            function n0({
                viewable: e,
                onCopy: t,
                updateTooltipMessage: n
            }) {
                let {
                    copyRawContentShortcut: r
                } = (0, ek.bx)();
                return e ? (0, f.jsxs)(er.S.Item, {
                    onClick: async () => {
                        let e = await t(),
                            {
                                ariaLabel: r
                            } = eY(e);
                        n(r)
                    },
                    children: ["Copy", r.text && (0, f.jsx)(er.S.TrailingVisual, {
                        "aria-hidden": "true",
                        children: (0, f.jsx)(nZ, {
                            shortcut: r
                        })
                    })]
                }) : null
            }

            function n1({
                onClick: e,
                rawHref: t
            }) {
                let {
                    viewRawContentShortcut: n
                } = (0, ek.bx)();
                return (0, f.jsxs)(er.S.LinkItem, {
                    onClick: e,
                    href: t,
                    children: ["View", n.text && (0, f.jsx)(er.S.TrailingVisual, {
                        "aria-hidden": "true",
                        children: (0, f.jsx)(nZ, {
                            shortcut: n
                        })
                    })]
                })
            }
            try {
                nX.displayName || (nX.displayName = "RawMenuActionItems")
            } catch {}
            try {
                n0.displayName || (n0.displayName = "CopyActionItem")
            } catch {}
            try {
                n1.displayName || (n1.displayName = "RawActionItem")
            } catch {}

            function n2({
                onCopy: e,
                validCodeNav: t,
                narrow: n
            }) {
                let r = (0, ev.G)(),
                    {
                        action: i,
                        path: a,
                        refInfo: {
                            canEdit: s,
                            currentOid: l,
                            name: c,
                            refType: d
                        }
                    } = (0, eC.Br)(),
                    {
                        githubDevUrl: u
                    } = (0, eC.Ou)(),
                    {
                        sendRepoClickEvent: h
                    } = (0, V.a)(),
                    [m, p] = (0, v.useState)(!1),
                    x = nL(),
                    {
                        search: y
                    } = (0, eU.TH)(),
                    g = new URLSearchParams(y),
                    {
                        setFindInFileOpen: b
                    } = eM(),
                    w = (0, eO.nj)(),
                    N = !(r.richText && "1" !== g.get("plain") || r.renderImageOrRaw || r.renderedFileInfo && !g.get("short_path") || r.issueTemplate ? .structured && r.issueTemplate.valid),
                    {
                        headerInfo: {
                            deleteInfo: {
                                deleteTooltip: C
                            },
                            onBranch: k,
                            siteNavLoginPath: S,
                            lineInfo: {
                                truncatedLoc: I
                            }
                        },
                        loggedIn: R,
                        viewable: Z
                    } = r,
                    {
                        getUrl: T
                    } = (0, t5.B)(),
                    L = eH(),
                    E = (0, v.useRef)("");
                (0, v.useEffect)(() => {
                    E.current = T({
                        action: "blame"
                    })
                }, [T]);
                let {
                    goToLineShortcut: B,
                    findInFileShortcut: _,
                    alternativeGoToLineShortcut: D
                } = (0, ek.bx)(), F = (0, v.useRef)(null), [O, M, H] = (0, t8.a)("raw-copy-message-tooltip", F, {
                    direction: "nw"
                }), $ = (0, nR.y)("copilot_conversational_ux"), W = (0, j.H)(), z = T(), [G] = (0, e2.D)(() => window.location.origin + z, z), q = (0, v.useMemo)(() => ({
                    type: "file",
                    url: G,
                    path: a,
                    repoID: W.id,
                    repoOwner: W.ownerLogin,
                    repoName: W.name,
                    ref: n8(c, d ? ? "branch"),
                    commitOID: l
                }), [G, a, W.id, W.ownerLogin, W.name, c, d, l]);
                return (0, f.jsxs)(f.Fragment, {
                    children: [N && (0, f.jsxs)(f.Fragment, {
                        children: [(0, f.jsx)(ep.P, {
                            buttonFocusId: eZ.KG,
                            buttonHotkey: B.hotkey,
                            onButtonClick: () => p(!0)
                        }), (0, f.jsx)(ep.P, {
                            buttonFocusId: eZ.KG,
                            buttonHotkey: D.hotkey,
                            onButtonClick: () => p(!0)
                        })]
                    }), (0, f.jsx)(n3, {
                        blameUrl: E.current,
                        viewable: Z,
                        hidden: !0
                    }), H, (0, f.jsxs)(tF.P, {
                        onOpenChange: e => e && h("MORE_OPTIONS_DROPDOWN", {
                            edit_enabled: s,
                            github_dev_enabled: !!u
                        }),
                        anchorRef: F,
                        children: [(0, f.jsx)(tF.P.Anchor, {
                            children: (0, f.jsx)(P.h, {
                                icon: A.KebabHorizontalIcon,
                                "aria-label": "More file actions",
                                className: "js-blob-dropdown-click",
                                size: "medium",
                                sx: {
                                    color: "fg.muted"
                                },
                                title: "More file actions",
                                variant: "default",
                                "data-testid": "more-file-actions-button",
                                onBlur: M
                            })
                        }), (0, f.jsx)(tF.P.Overlay, {
                            width: "small",
                            sx: {
                                maxHeight: "55vh",
                                overflowY: "auto"
                            },
                            children: (0, f.jsxs)(er.S, {
                                children: [n && null !== x && (0, f.jsxs)(f.Fragment, {
                                    children: [(0, f.jsx)(er.S.LinkItem, {
                                        href: x,
                                        children: "View Runs"
                                    }), (0, f.jsx)(er.S.Divider, {})]
                                }), (0, f.jsxs)(f.Fragment, {
                                    children: [(0, f.jsx)(nX, {
                                        viewable: Z,
                                        onCopy: e,
                                        name: r.displayName,
                                        updateTooltipMessage: O
                                    }), (0, f.jsx)(er.S.Divider, {})]
                                }), (0, f.jsxs)(er.S.Group, {
                                    children: [N && (0, f.jsxs)(er.S.Item, {
                                        onSelect: () => {
                                            h("MORE_OPTIONS_DROPDOWN.GO_TO_LINE"), p(!0)
                                        },
                                        "aria-keyshortcuts": B.hotkey,
                                        children: ["Jump to line", (0, f.jsx)(er.S.TrailingVisual, {
                                            "aria-hidden": "true",
                                            children: (0, f.jsx)(U.I, {
                                                children: (0, f.jsx)("kbd", {
                                                    children: B.text
                                                })
                                            })
                                        })]
                                    }), L === o.Code && null !== r.rawLines && t && !w && (0, f.jsxs)(er.S.Item, {
                                        onSelect: () => {
                                            h("BLOB_FIND_IN_FILE_MENU.OPEN"), b(!0)
                                        },
                                        "aria-keyshortcuts": _.ariaKeyShortcuts,
                                        children: ["Find in file", (0, f.jsx)(er.S.TrailingVisual, {
                                            "aria-hidden": "true",
                                            children: (0, f.jsx)(nZ, {
                                                shortcut: _
                                            })
                                        })]
                                    })]
                                }), (N || L === o.Code && null !== r.rawLines && t) && (0, f.jsx)(er.S.Divider, {}), (0, f.jsx)(nK, {
                                    path: a,
                                    updateTooltipMessage: O
                                }), (0, f.jsx)(er.S.Divider, {}), $ && (0, f.jsxs)(f.Fragment, {
                                    children: [(0, f.jsx)(er.S.Group, {
                                        title: "Copilot",
                                        children: (0, f.jsx)(nQ, {
                                            fileReference: q
                                        })
                                    }), (0, f.jsx)(er.S.Divider, {})]
                                }), (0, f.jsx)(er.S.Group, {
                                    title: "View options",
                                    children: (0, f.jsx)(nW, {})
                                }), (s && k || !Z && k) && (0, f.jsxs)(f.Fragment, {
                                    children: [(0, f.jsx)(er.S.Divider, {}), (0, f.jsx)(n4, {
                                        deleteTooltip: C,
                                        loggedIn: R,
                                        siteNavLoginPath: S
                                    })]
                                })]
                            })
                        })]
                    }), m && (0, f.jsx)(nE, {
                        onBlamePage: "blame" === i,
                        onDismiss: () => {
                            p(!1), setTimeout(() => {
                                let e = document.getElementById(eZ.KG);
                                e ? .focus()
                            }, 0)
                        },
                        maxLineNumber: parseInt(I, 10) ? ? void 0
                    })]
                })
            }

            function n3({
                blameUrl: e,
                viewable: t,
                hidden: n
            }) {
                let {
                    hash: r
                } = (0, eU.TH)(), i = (0, eI.gs)(e + r), {
                    viewBlameShortcut: o
                } = (0, ek.bx)();
                return t ? (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsx)(nu.r, {
                        "data-hotkey": o.hotkey,
                        sx: {
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            ...n ? {
                                display: "none"
                            } : void 0
                        },
                        onClick: i,
                        children: "Blame"
                    }), (0, f.jsx)(ep.P, {
                        buttonFocusId: eZ.KG,
                        buttonHotkey: o.hotkey,
                        onButtonClick: i,
                        onlyAddHotkeyScopeButton: !0
                    })]
                }) : null
            }

            function n4({
                deleteTooltip: e,
                loggedIn: t,
                siteNavLoginPath: n
            }) {
                let {
                    getUrl: r
                } = (0, t5.B)();
                return (0, f.jsx)(er.S.LinkItem, {
                    as: e7.r,
                    sx: {
                        padding: 2,
                        color: "danger.fg",
                        ":hover": {
                            color: "danger.fg"
                        }
                    },
                    "aria-label": e,
                    to: t ? r({
                        action: "delete"
                    }) : n,
                    children: "Delete file"
                })
            }
            let n8 = (e, t) => "branch" === t ? `refs/heads/${e}` : "tag" === t ? `refs/tags/${e}` : e;
            try {
                n2.displayName || (n2.displayName = "NavigationMenu")
            } catch {}
            try {
                n3.displayName || (n3.displayName = "BlameButton")
            } catch {}
            try {
                n4.displayName || (n4.displayName = "DeleteActionItem")
            } catch {}

            function n6({
                toc: e,
                openPanel: t,
                setOpenPanel: n,
                isDirectoryReadme: r
            }) {
                let i = v.useRef(null);
                return e && e.length >= 2 ? (0, f.jsx)(P.h, {
                    ref: i,
                    sx: {
                        color: "var(--fgColor-muted, var(--color-fg-muted))",
                        mr: r ? 0 : 2
                    },
                    icon: A.ListUnorderedIcon,
                    variant: "invisible",
                    "aria-label": "Outline",
                    "aria-pressed": "toc" === t,
                    onClick: () => {
                        n && n("toc" === t ? void 0 : "toc", i.current)
                    },
                    size: "small"
                }) : null
            }
            try {
                n6.displayName || (n6.displayName = "TableOfContents")
            } catch {}

            function n5({
                currentStickyLines: e
            }) {
                let t = Array.from(e.values());
                return (0, f.jsxs)(E.Z, {
                    sx: {
                        overflow: "hidden",
                        display: "flex"
                    },
                    children: [(0, f.jsx)(E.Z, {
                        className: "react-line-numbers",
                        sx: {
                            marginLeft: "2px"
                        },
                        children: t.map(e => (0, f.jsx)(ts._, {
                            codeLineData: e
                        }, `sticky-header-line-number-${e.lineNumber}`))
                    }), (0, f.jsx)("div", {
                        className: "react-code-lines",
                        children: t.map(e => (0, f.jsx)(ta.E, {
                            codeLineData: e,
                            codeLineToSectionMap: void 0,
                            copilotAccessAllowed: !1,
                            onClick: () => (0, eT.v)({
                                line: e.lineNumber
                            })
                        }, `sticky-header-line-${e.lineNumber}`))
                    })]
                })
            }
            try {
                n5.displayName || (n5.displayName = "StickyLinesHeader")
            } catch {}

            function n9({
                openPanel: e,
                setOpenPanel: t,
                showTree: n,
                validCodeNav: r,
                treeToggleElement: i,
                searchTerm: a,
                setSearchTerm: s,
                currentStickyLines: l,
                focusedSearchResult: c,
                setFocusedSearchResult: d,
                searchResults: u,
                searchingText: h,
                stickyHeaderRef: m,
                copilotInfo: p
            }) {
                let x = (0, ev.G)(),
                    y = (0, e_.X)(m),
                    {
                        copilotAccessAllowed: g,
                        refInfo: b,
                        path: w
                    } = (0, eC.Br)(),
                    N = eH(),
                    {
                        sendRepoClickEvent: C
                    } = (0, V.a)(),
                    k = (0, eB.nx)(),
                    {
                        copyFilePathShortcut: S
                    } = (0, ek.bx)(),
                    {
                        copyPermalinkShortcut: I
                    } = (0, ek.bx)(),
                    R = (0, j.H)(),
                    {
                        githubDevUrl: Z
                    } = (0, eC.Ou)(),
                    {
                        headerInfo: {
                            toc: T,
                            onBranch: L,
                            ghDesktopPath: B
                        },
                        viewable: _
                    } = x,
                    D = nS(Z, L, B),
                    F = !!x.headerInfo.gitLfsPath,
                    O = (0, ew.Q)(),
                    M = eQ(),
                    {
                        createPermalink: H
                    } = (0, t5.B)(),
                    {
                        addToast: $
                    } = (0, t2.V6)(),
                    {
                        findInFileOpen: W,
                        setFindInFileOpen: z
                    } = eM(),
                    U = (0, v.useRef)(null),
                    [G, q, K] = (0, t8.a)("raw-actions-message-tooltip", U, {
                        direction: "nw"
                    }),
                    Y = eF(),
                    {
                        getUrl: Q
                    } = (0, t5.B)(),
                    X = Q(),
                    [J] = (0, e2.D)(() => window.location.origin + X, X),
                    ee = (0, v.useMemo)(() => ({
                        type: "file",
                        url: J,
                        path: w,
                        repoID: R.id,
                        repoOwner: R.ownerLogin,
                        repoName: R.name,
                        ref: n8(b.name, b.refType ? ? "branch"),
                        commitOID: b.currentOid
                    }), [J, w, R.id, R.ownerLogin, R.name, b.name, b.refType, b.currentOid]);
                return (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsxs)(E.Z, {
                        ref: eB.ik,
                        sx: {
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            position: "absolute"
                        },
                        children: [(0, f.jsx)(E.Z, {
                            className: "react-blob-sticky-header",
                            children: (0, f.jsx)(nx, {
                                isStickied: y,
                                showTree: n,
                                treeToggleElement: i
                            })
                        }), (0, f.jsxs)(E.Z, {
                            sx: {
                                pl: 2,
                                py: 2,
                                display: "flex",
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "space-between",
                                backgroundColor: "canvas.subtle",
                                border: "1px solid var(--borderColor-default, var(--color-border-default))",
                                borderRadius: y ? "0px" : "6px 6px 0px 0px"
                            },
                            children: [(0, f.jsx)(t6.N, {
                                as: "h2",
                                text: "File metadata and controls"
                            }), (0, f.jsxs)(E.Z, {
                                sx: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                    minWidth: 0
                                },
                                children: [(0, f.jsx)(nj, {}), (0, f.jsx)(nv, {
                                    className: "react-code-size-details-in-header"
                                }), (0, f.jsx)(t0.y, {
                                    copilotInfo: p,
                                    className: "react-code-size-details-in-header",
                                    view: O ? "blame" : "preview"
                                })]
                            }), (0, f.jsxs)(E.Z, {
                                sx: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                    mr: 2
                                },
                                children: [S.hotkey && (0, f.jsx)(rn, {
                                    hotkey: S.hotkey,
                                    onActivate: () => {
                                        (0, eV.z)(w), $({
                                            type: "success",
                                            message: "Path copied!"
                                        })
                                    }
                                }), I.hotkey && (0, f.jsx)(rn, {
                                    hotkey: I.hotkey,
                                    onActivate: () => {
                                        (0, eV.z)(H({
                                            absolute: !0
                                        })), $({
                                            type: "success",
                                            message: "Permalink copied!"
                                        })
                                    }
                                }), (0, f.jsx)(t1.Z, {
                                    copilotAccessAllowed: g,
                                    messageReference: ee,
                                    hideDropdown: !0
                                }), (0, f.jsxs)(E.Z, {
                                    className: "react-blob-header-edit-and-raw-actions",
                                    sx: {
                                        gap: 2
                                    },
                                    children: [(0, f.jsx)(re, {
                                        onCopy: M,
                                        fileName: x.displayName,
                                        isLfs: F
                                    }), (0, f.jsx)(n7, {})]
                                }), N === o.Code && !O && r && (0, f.jsx)(rt, {
                                    isCodeNavOpen: "codeNav" === e,
                                    setCodeNavOpen: e => {
                                        e && C("BLOB_SYMBOLS_MENU.OPEN"), localStorage.setItem("codeNavOpen", e ? "codeNav" : ""), Y(null, e), t(e ? "codeNav" : void 0)
                                    },
                                    size: "small",
                                    searchingText: h.selectedText
                                }), !O && (0, f.jsx)(n6, {
                                    toc: T,
                                    openPanel: e,
                                    setOpenPanel: t
                                }), (0, f.jsxs)(E.Z, {
                                    className: "react-blob-header-edit-and-raw-actions-combined",
                                    children: [K, (0, f.jsxs)(tF.P, {
                                        anchorRef: U,
                                        children: [(0, f.jsx)(tF.P.Anchor, {
                                            children: (0, f.jsx)(P.h, {
                                                icon: A.KebabHorizontalIcon,
                                                "aria-label": "Edit and raw actions",
                                                className: "js-blob-dropdown-click",
                                                size: "small",
                                                sx: {
                                                    color: "fg.muted"
                                                },
                                                title: "More file actions",
                                                variant: "invisible",
                                                "data-testid": "more-file-actions-button",
                                                onBlur: q
                                            })
                                        }), (0, f.jsx)(tF.P.Overlay, {
                                            className: "react-blob-header-edit-and-raw-actions-combined",
                                            width: "small",
                                            sx: {
                                                maxHeight: "55vh",
                                                overflowY: "auto"
                                            },
                                            children: (0, f.jsxs)(er.S, {
                                                children: [(b.canEdit && _ || D) && (0, f.jsxs)("div", {
                                                    className: "react-navigation-menu-edit-and-raw-actions",
                                                    children: [(0, f.jsx)(nI, {
                                                        editAllowed: b.canEdit && _,
                                                        hasOpenWithItem: D
                                                    }), (0, f.jsx)(er.S.Divider, {})]
                                                }), (0, f.jsx)(f.Fragment, {
                                                    children: (0, f.jsx)(nX, {
                                                        viewable: _,
                                                        onCopy: M,
                                                        name: x.displayName,
                                                        updateTooltipMessage: G,
                                                        all: !0
                                                    })
                                                })]
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        }), O && (0, f.jsxs)(E.Z, {
                            sx: {
                                px: "12px",
                                py: 2,
                                height: "44px",
                                display: "flex",
                                flexShrink: 0,
                                alignItems: "center",
                                border: "1px solid",
                                borderColor: "border.default",
                                borderTop: 0,
                                justifyContent: "space-between",
                                backgroundColor: "canvas.default"
                            },
                            children: [(0, f.jsx)(ny, {}), (0, f.jsx)(ns, {})]
                        })]
                    }), W && (0, f.jsx)(nn, {
                        stickied: y,
                        searchTerm: a,
                        focusedSearchResult: c,
                        setFocusedSearchResult: d,
                        setSearchTerm: s,
                        searchResults: u,
                        onClose: () => {
                            z(!1), "codeNav" === e && s(h.selectedText)
                        }
                    }), (0, f.jsx)(E.Z, {
                        children: !O && l.size > 0 && (0, f.jsx)(E.Z, {
                            sx: {
                                zIndex: 1,
                                background: "var(--bgColor-default, var(--color-canvas-default))",
                                top: k,
                                position: "absolute",
                                width: "100%",
                                border: "1px solid var(--borderColor-default, var(--color-border-default))",
                                borderBottom: "none",
                                borderTop: "none",
                                boxShadow: "0 1px 0 var(--borderColor-default, var(--color-border-default))",
                                tableLayout: "fixed"
                            },
                            children: (0, f.jsx)(n5, {
                                currentStickyLines: l
                            })
                        })
                    })]
                })
            }

            function n7() {
                let e = (0, ev.G)(),
                    {
                        getUrl: t
                    } = (0, t5.B)(),
                    {
                        refInfo: {
                            canEdit: n
                        }
                    } = (0, eC.Br)(),
                    {
                        sendRepoClickEvent: r
                    } = (0, V.a)(),
                    {
                        githubDevUrl: i
                    } = (0, eC.Ou)(),
                    o = (0, L.s)(),
                    {
                        editFileShortcut: a,
                        openWithGitHubDevShortcut: s,
                        openWithGitHubDevInNewWindowShortcut: l
                    } = (0, ek.bx)(),
                    {
                        headerInfo: {
                            editInfo: {
                                editTooltip: c
                            },
                            ghDesktopPath: d,
                            onBranch: u
                        }
                    } = e,
                    h = nS(i, u, d);
                return n || h ? (0, f.jsxs)(f.Fragment, {
                    children: [i && (0, f.jsxs)(f.Fragment, {
                        children: [(0, f.jsx)(eo.Z, {
                            className: "js-github-dev-shortcut d-none",
                            "data-hotkey": s.hotkey,
                            href: i
                        }), (0, f.jsx)(ep.P, {
                            buttonFocusId: eZ.KG,
                            buttonHotkey: s.hotkey,
                            onlyAddHotkeyScopeButton: !0,
                            onButtonClick: () => {
                                o(i + window.location.pathname.substring(1))
                            }
                        }), (0, f.jsx)(eo.Z, {
                            className: "js-github-dev-new-tab-shortcut d-none",
                            "data-hotkey": l.hotkey,
                            href: i,
                            target: "_blank"
                        }), (0, f.jsx)(ep.P, {
                            buttonFocusId: eZ.KG,
                            buttonHotkey: l.hotkey,
                            onlyAddHotkeyScopeButton: !0,
                            onButtonClick: () => {
                                window.open(i, "_blank")
                            }
                        })]
                    }), (0, f.jsxs)(t3.Z, {
                        children: [(0, f.jsx)(tn.Z, {
                            direction: "nw",
                            text: c,
                            children: n ? (0, f.jsx)(P.h, {
                                as: e7.r,
                                "aria-label": "Edit file",
                                "data-hotkey": a.hotkey,
                                icon: A.PencilIcon,
                                to: t({
                                    action: "edit"
                                }),
                                size: "small",
                                sx: { ...t9.A,
                                    borderTopRightRadius: 0,
                                    borderBottomRightRadius: 0,
                                    borderRightWidth: 0
                                },
                                "data-testid": "edit-button"
                            }) : (0, f.jsx)(t7, {
                                icon: A.PencilIcon,
                                sx: {
                                    borderTopRightRadius: 0,
                                    borderBottomRightRadius: 0,
                                    borderRightWidth: 0
                                },
                                "aria-label": "Edit file",
                                disabled: !0
                            })
                        }), (0, f.jsxs)(tF.P, {
                            onOpenChange: e => e && r("BLOB_EDIT_DROPDOWN"),
                            children: [(0, f.jsx)(tF.P.Anchor, {
                                children: (0, f.jsx)(P.h, {
                                    icon: A.TriangleDownIcon,
                                    size: "small",
                                    "aria-label": "More edit options",
                                    "data-testid": "more-edit-button"
                                })
                            }), (0, f.jsx)(tF.P.Overlay, {
                                align: "end",
                                children: (0, f.jsx)(er.S, {
                                    children: (0, f.jsx)(nI, {
                                        editAllowed: n,
                                        hasOpenWithItem: h
                                    })
                                })
                            })]
                        })]
                    }), n && (0, f.jsx)(ep.P, {
                        buttonFocusId: eZ.KG,
                        buttonHotkey: "e,Shift+E",
                        onlyAddHotkeyScopeButton: !0,
                        onButtonClick: () => {
                            o(t({
                                action: "edit"
                            }))
                        }
                    })]
                }) : null
            }

            function re({
                onCopy: e,
                fileName: t,
                isLfs: n
            }) {
                let {
                    viewRawContentShortcut: r,
                    copyRawContentShortcut: i,
                    downloadRawContentShortcut: o
                } = (0, ek.bx)(), {
                    renderImageOrRaw: a,
                    renderedFileInfo: s,
                    viewable: l,
                    image: c,
                    rawBlobUrl: d
                } = (0, ev.G)(), u = (0, L.s)(), {
                    addToast: h
                } = (0, t2.V6)(), m = (0, v.useRef)(null), [p, x, y] = (0, t8.a)("raw-copy-message-tooltip", m), g = new URL(d, S.ssrSafeLocation.origin);
                g.searchParams.set("download", "");
                let b = {
                    "aria-label": "Download raw content",
                    icon: A.DownloadIcon,
                    size: "small",
                    onClick: async () => {
                        n || await nJ(d, t)
                    },
                    "data-testid": "download-raw-button",
                    "data-hotkey": o.hotkey,
                    sx: {
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0
                    }
                };
                return !n && (s && !l || c) ? (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsx)(tn.Z, {
                        "aria-label": "Download raw file",
                        children: (0, f.jsx)(P.h, {
                            "aria-label": "Download raw content",
                            icon: A.DownloadIcon,
                            size: "small",
                            onClick: async () => {
                                await nJ(d, t)
                            },
                            "data-testid": "download-raw-button",
                            "data-hotkey": o.hotkey
                        })
                    }), (0, f.jsx)(ep.P, {
                        buttonTestLabel: "download-raw-button-shortcut",
                        buttonFocusId: eZ.KG,
                        buttonHotkey: o.hotkey,
                        onlyAddHotkeyScopeButton: !0,
                        onButtonClick: async () => {
                            await nJ(d, t)
                        }
                    })]
                }) : (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsxs)(t3.Z, {
                        children: [(0, f.jsx)(t4.Q, {
                            href: d,
                            download: a ? "true" : void 0,
                            size: "small",
                            sx: {
                                linkButtonSx: t9.A,
                                px: 2
                            },
                            "data-testid": "raw-button",
                            "data-hotkey": r.hotkey,
                            children: "Raw"
                        }), !n && (0, f.jsxs)(f.Fragment, {
                            children: [(0, f.jsx)(P.h, {
                                ref: m,
                                "aria-label": "Copy raw content",
                                icon: A.CopyIcon,
                                size: "small",
                                onFocus: () => p("Copy raw file"),
                                onMouseEnter: () => p("Copy raw file"),
                                onMouseLeave: x,
                                onClick: async () => {
                                    let t = await e(),
                                        {
                                            ariaLabel: n
                                        } = eY(t);
                                    p(n)
                                },
                                "data-testid": "copy-raw-button",
                                "data-hotkey": i.hotkey,
                                onBlur: x
                            }), y]
                        }), (0, f.jsx)(tn.Z, {
                            "aria-label": "Download raw file",
                            children: n ? (0, f.jsx)(P.h, {
                                as: "a",
                                "data-turbo": "false",
                                href: g.toString(),
                                ...b
                            }) : (0, f.jsx)(P.h, { ...b
                            })
                        })]
                    }), (0, f.jsx)(ep.P, {
                        buttonFocusId: eZ.KG,
                        buttonHotkey: r.hotkey,
                        buttonTestLabel: "raw-button-shortcut",
                        onlyAddHotkeyScopeButton: !0,
                        onButtonClick: () => u(d)
                    }), !n && (0, f.jsxs)(f.Fragment, {
                        children: [(0, f.jsx)(ep.P, {
                            buttonTestLabel: "copy-raw-button-shortcut",
                            buttonFocusId: eZ.KG,
                            buttonHotkey: i.hotkey,
                            onlyAddHotkeyScopeButton: !0,
                            onButtonClick: async () => {
                                let t = await e(),
                                    {
                                        ariaLabel: n,
                                        content: r
                                    } = eY(t);
                                h({
                                    message: n,
                                    icon: r
                                })
                            }
                        }), (0, f.jsx)(ep.P, {
                            buttonTestLabel: "download-raw-button-shortcut",
                            buttonFocusId: eZ.KG,
                            buttonHotkey: o.hotkey,
                            onlyAddHotkeyScopeButton: !0,
                            onButtonClick: async () => {
                                await nJ(d, t)
                            }
                        })]
                    })]
                })
            }

            function rt({
                isCodeNavOpen: e,
                setCodeNavOpen: t,
                size: n,
                searchingText: r
            }) {
                let {
                    toggleSymbolsShortcut: i
                } = (0, ek.bx)(), o = !(0, I.O)().openSymbolsOption.enabled && !e;
                return (0, f.jsx)(tn.Z, {
                    direction: "nw",
                    text: e ? "Close symbols panel" : "Open symbols panel",
                    children: (0, f.jsx)(P.h, {
                        "aria-label": "Symbols",
                        "aria-pressed": e,
                        "aria-expanded": e,
                        "aria-controls": "symbols-pane",
                        icon: A.CodeSquareIcon,
                        className: o && r ? "react-button-with-indicator" : "",
                        "data-hotkey": i.hotkey,
                        onClick: () => {
                            (0, eO.NC)(!0), t(!e)
                        },
                        variant: "invisible",
                        sx: {
                            color: "fg.muted",
                            position: "relative"
                        },
                        "data-testid": "symbols-button",
                        id: "symbols-button",
                        size: n
                    })
                })
            }

            function rn({
                hotkey: e,
                onActivate: t
            }) {
                return (0, f.jsx)(ep.P, {
                    buttonFocusId: eZ.KG,
                    buttonHotkey: e,
                    onButtonClick: t
                })
            }
            try {
                n9.displayName || (n9.displayName = "BlobViewHeader")
            } catch {}
            try {
                n7.displayName || (n7.displayName = "EditMenu")
            } catch {}
            try {
                re.displayName || (re.displayName = "RawGroup")
            } catch {}
            try {
                rt.displayName || (rt.displayName = "SymbolsButton")
            } catch {}
            try {
                rn.displayName || (rn.displayName = "KeyboardShortcut")
            } catch {}
            var rr = n(15706),
                ri = n(64077),
                ro = n(4751);

            function ra({
                status: e,
                oid: t
            }) {
                let n = (0, j.H)(),
                    [r, i] = (0, ro.fQ)(t, n);
                return e ? (0, f.jsx)(ro.vC, {
                    statusRollup: e,
                    combinedStatus: r,
                    onWillOpenPopup: i,
                    size: "small"
                }) : null
            }
            try {
                ra.displayName || (ra.displayName = "ReposChecksStatusBadge")
            } catch {}

            function rs({
                commitCount: e
            }) {
                return (0, f.jsx)(E.Z, {
                    sx: {
                        display: "flex",
                        flexDirection: "column",
                        border: "1px solid",
                        borderColor: "border.default",
                        borderRadius: 6,
                        mb: 3
                    },
                    children: (0, f.jsx)(rl, {
                        commitCount: e
                    })
                })
            }

            function rl({
                commitCount: e
            }) {
                let t = (0, j.H)(),
                    {
                        refInfo: n,
                        path: r
                    } = (0, eC.Br)(),
                    [i, o, a] = (0, ri.f)(t.ownerLogin, t.name, n.name, r),
                    [s, l] = (0, v.useState)(!1);
                return (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsxs)(E.Z, {
                        sx: {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 2,
                            minWidth: "273px",
                            pr: 2,
                            pl: 3,
                            py: 2
                        },
                        children: [(0, f.jsx)(t6.N, {
                            as: "h2",
                            text: "Latest commit"
                        }), a ? (0, f.jsx)(rc, {}) : o ? (0, f.jsx)(na, {
                            width: 120,
                            "data-testid": "loading"
                        }) : i ? (0, f.jsx)(rd, {
                            commit: i,
                            detailsOpen: s,
                            setDetailsOpen: l
                        }) : null, (0, f.jsx)(ru, {
                            commit: i,
                            commitCount: e,
                            detailsOpen: s,
                            setDetailsOpen: l
                        })]
                    }), s && i && (0, f.jsx)(E.Z, {
                        sx: {
                            display: i.bodyMessageHtml ? "flex" : ["flex", "none", "none"]
                        },
                        children: (0, f.jsx)(rf, {
                            commit: i
                        })
                    })]
                })
            }

            function rc() {
                return (0, f.jsxs)($.Z, {
                    sx: {
                        color: "attention.fg"
                    },
                    "data-testid": "latest-commit-error-message",
                    children: [(0, f.jsx)(H.Z, {
                        icon: A.AlertFillIcon
                    }), "\xa0Cannot retrieve latest commit at this time."]
                })
            }

            function rd({
                commit: e,
                detailsOpen: t,
                setDetailsOpen: n
            }) {
                let r = (0, j.H)(),
                    i = `data-hovercard-url=${(0,w.QY)({owner:r.ownerLogin,repo:r.name,commitish:e.oid})} `,
                    o = function(e, t) {
                        let n = "";
                        if (e) {
                            let r = e.split("<a ");
                            for (let e of r)
                                if ("" !== e) {
                                    if (e.includes("data-hovercard-url")) {
                                        n = n.concat("<a ", e);
                                        continue
                                    }
                                    n = n.concat(...["<a ", t, e])
                                }
                        }
                        return n
                    }(e.shortMessageHtmlLink, i);
                return (0, f.jsxs)(E.Z, {
                    sx: {
                        display: "flex",
                        minWidth: 0,
                        fontSize: 1,
                        alignItems: "center",
                        width: "max-content",
                        gap: 2,
                        flexBasis: 0,
                        flexGrow: 1
                    },
                    "data-testid": "latest-commit",
                    children: [e.authors && e.authors.length > 0 ? (0, f.jsx)(rr.C, {
                        authors: e.authors,
                        repo: r,
                        includeVerbs: !1,
                        committer: e.committer,
                        committerAttribution: e.committerAttribution
                    }) : (0, f.jsx)(rr.D, {
                        author: e.author,
                        repo: r
                    }), (0, f.jsxs)(E.Z, {
                        className: "react-last-commit-message",
                        sx: {
                            alignItems: "center",
                            minWidth: 0,
                            gap: 2
                        },
                        children: [(0, f.jsx)(E.Z, {
                            className: "Truncate",
                            sx: {
                                fontSize: 1,
                                alignItems: "center"
                            },
                            children: e.shortMessageHtmlLink && (0, f.jsx)(ez.WZ, {
                                className: "Truncate-text",
                                "data-testid": "latest-commit-html",
                                unverifiedHTML: o
                            })
                        }), e.bodyMessageHtml && (0, f.jsx)(rm, {
                            detailsOpen: t,
                            setDetailsOpen: n
                        }), (0, f.jsx)(ra, {
                            oid: e.oid,
                            status: e.status
                        })]
                    }), (0, f.jsx)($.Z, {
                        className: "react-last-commit-summary-timestamp",
                        sx: {
                            color: "fg.muted",
                            fontSize: 0
                        },
                        children: (0, f.jsx)(tt.Z, {
                            datetime: e.date,
                            tense: "past"
                        })
                    })]
                })
            }

            function ru({
                commit: e,
                commitCount: t,
                detailsOpen: n,
                setDetailsOpen: r
            }) {
                let i = e ? .oid.slice(0, 7);
                return (0, f.jsxs)(E.Z, {
                    sx: {
                        display: "flex",
                        gap: 2
                    },
                    children: [(0, f.jsx)(E.Z, {
                        sx: {
                            display: "flex",
                            alignItems: "center"
                        },
                        "data-testid": "latest-commit-details",
                        children: e && (0, f.jsxs)(f.Fragment, {
                            children: [(0, f.jsxs)($.Z, {
                                className: "react-last-commit-oid-timestamp",
                                sx: {
                                    color: "fg.muted",
                                    fontSize: 0
                                },
                                children: [(0, f.jsx)(eo.Z, {
                                    as: e7.r,
                                    to: e.url,
                                    className: "Link--secondary",
                                    "aria-label": `Commit ${i}`,
                                    children: i
                                }), "\xa0\xb7\xa0", (0, f.jsx)(tt.Z, {
                                    datetime: e.date,
                                    tense: "past"
                                })]
                            }), (0, f.jsx)($.Z, {
                                className: "react-last-commit-timestamp",
                                sx: {
                                    color: "fg.muted",
                                    fontSize: 0
                                },
                                children: (0, f.jsx)(tt.Z, {
                                    datetime: e.date,
                                    tense: "past"
                                })
                            })]
                        })
                    }), (0, f.jsx)(t6.N, {
                        as: "h2",
                        text: "History"
                    }), (0, f.jsx)(rh, {
                        className: "react-last-commit-history-group",
                        size: "small",
                        leadingVisual: A.HistoryIcon,
                        children: (0, f.jsx)($.Z, {
                            sx: {
                                color: "fg.default"
                            },
                            children: t ? `${t} Commits` : "History"
                        })
                    }), (0, f.jsx)(E.Z, {
                        sx: {
                            display: ["inherit", "none", "none"]
                        },
                        children: (e ? .shortMessageHtmlLink || e ? .bodyMessageHtml) && (0, f.jsx)(rm, {
                            detailsOpen: n,
                            setDetailsOpen: r,
                            useMediumButton: !0
                        })
                    }), (0, f.jsx)(tn.Z, {
                        "aria-label": "Commit history",
                        children: (0, f.jsx)(rh, {
                            className: "react-last-commit-history-icon",
                            leadingVisual: A.HistoryIcon
                        })
                    })]
                })
            }

            function rh({
                children: e,
                className: t,
                leadingVisual: n,
                size: r
            }) {
                let {
                    sendRepoClickEvent: i
                } = (0, V.a)(), {
                    refInfo: o,
                    path: a
                } = (0, eC.Br)(), s = (0, j.H)();
                return (0, f.jsx)(t4.Q, {
                    className: t,
                    sx: {
                        alignItems: "center",
                        color: "fg.default",
                        ...t9.A
                    },
                    onClick: () => i("HISTORY_BUTTON"),
                    href: (0, w.w2)({
                        owner: s.ownerLogin,
                        repo: s.name,
                        ref: o.name,
                        path: a
                    }),
                    variant: "invisible",
                    size: r,
                    leadingVisual: n,
                    children: e
                })
            }

            function rm({
                detailsOpen: e,
                setDetailsOpen: t,
                useMediumButton: n
            }) {
                return (0, f.jsx)(P.h, {
                    "aria-label": "Open commit details",
                    icon: A.EllipsisIcon,
                    sx: {
                        color: "fg.muted",
                        minWidth: "28px"
                    },
                    onClick: () => t(!e),
                    variant: "invisible",
                    "aria-pressed": e,
                    "aria-expanded": e,
                    "data-testid": "latest-commit-details-toggle",
                    size: n ? "medium" : "small"
                })
            }

            function rf({
                commit: e
            }) {
                let t = e ? .oid.slice(0, 7);
                return (0, f.jsxs)(E.Z, {
                    sx: {
                        backgroundColor: "canvas.subtle",
                        borderTop: "1px solid",
                        borderColor: "border.default",
                        borderRadius: "0px 0px 6px 6px",
                        px: 3,
                        py: 2,
                        flexGrow: 1
                    },
                    children: [(0, f.jsxs)(E.Z, {
                        sx: {
                            display: ["flex", "none", "none"],
                            flexDirection: "column"
                        },
                        children: [(0, f.jsxs)(E.Z, {
                            sx: {
                                display: "flex",
                                flexDirection: "row",
                                minWidth: 0,
                                gap: 2,
                                alignItems: "center"
                            },
                            children: [e.shortMessageHtmlLink && (0, f.jsx)(ez.WZ, {
                                className: "Truncate-text",
                                "data-testid": "latest-commit-html",
                                html: e.shortMessageHtmlLink,
                                sx: {
                                    "> a": {
                                        color: "var(--fgColor-default, var(--color-fg-default)) !important"
                                    }
                                }
                            }), (0, f.jsx)(ra, {
                                oid: e.oid,
                                status: e.status
                            })]
                        }), (0, f.jsx)(eo.Z, {
                            as: e7.r,
                            to: e.url,
                            className: "Link--secondary",
                            "aria-label": `Commit ${t}`,
                            children: t
                        }), e.bodyMessageHtml && (0, f.jsx)("br", {})]
                    }), e.bodyMessageHtml && (0, f.jsx)(E.Z, {
                        sx: {
                            mt: [2, 0, 0],
                            color: "fg.muted"
                        },
                        children: (0, f.jsx)(ez.WZ, {
                            className: "Truncate-text",
                            "data-testid": "latest-commit-html",
                            html: e.bodyMessageHtml,
                            sx: {
                                whiteSpace: "pre-wrap"
                            }
                        })
                    })]
                })
            }
            try {
                rs.displayName || (rs.displayName = "LatestCommitSingleLine")
            } catch {}
            try {
                rl.displayName || (rl.displayName = "LatestCommitContent")
            } catch {}
            try {
                rc.displayName || (rc.displayName = "CommitErrorMessage")
            } catch {}
            try {
                rd.displayName || (rd.displayName = "CommitSummary")
            } catch {}
            try {
                ru.displayName || (ru.displayName = "HistoryLink")
            } catch {}
            try {
                rh.displayName || (rh.displayName = "HistoryLinkButton")
            } catch {}
            try {
                rm.displayName || (rm.displayName = "CommitDetailsButton")
            } catch {}
            try {
                rf.displayName || (rf.displayName = "CommitDetails")
            } catch {}
            var rp = n(14714);
            let rx = {
                definitions: void 0,
                localReferences: void 0,
                crossReferences: void 0,
                error: !1
            };
            var ry = n(92110),
                rg = n(13570);

            function rb({
                reference: e,
                isHighlighted: t,
                href: n,
                onClick: r,
                role: i,
                ariaLevel: o,
                symbol: a,
                index: s,
                focusElement: l
            }) {
                let [c, d] = (0, v.useState)(null);
                (0, v.useEffect)(() => {
                    if (l) {
                        let e = document.getElementById(`find-in-file-item-${s}`);
                        e && e.focus()
                    }
                }, [l, s]);
                let u = (0, ry.RC)(e.highlightedText, e.stylingDirectives, e.bodyText);
                return (0, f.jsx)(eo.Z, {
                    as: e7.r,
                    className: "blob-code blob-code-inner",
                    to: n,
                    role: i,
                    sx: {
                        display: "block",
                        p: 0,
                        fontWeight: 400,
                        fontSize: "12px",
                        ":hover:not([disabled])": {
                            bg: "canvas.default"
                        },
                        ":hover": {
                            textDecoration: "none"
                        },
                        '[data-component="text"]': {
                            gridArea: "auto"
                        },
                        gridTemplateAreas: "text",
                        whiteSpace: "break-spaces"
                    },
                    onClick: e => {
                        e.ctrlKey || e.metaKey || r ? .()
                    },
                    onSelect: r,
                    id: `find-in-file-item-${s}`,
                    "aria-current": t ? "location" : void 0,
                    "aria-level": o,
                    onKeyDown: e => {
                        "ArrowDown" === e.key ? (rj("nextElementSibling"), e.preventDefault()) : "ArrowUp" === e.key && (rj("previousElementSibling"), e.preventDefault())
                    },
                    children: (0, f.jsx)(E.Z, {
                        sx: {
                            p: 1,
                            py: "5px",
                            ...t ? {
                                background: "var(--bgColor-attention-muted, var(--color-attention-subtle))",
                                boxShadow: "inset 2px 0 0 var(--bgColor-attention-emphasis, var(--color-attention-fg))"
                            } : {}
                        },
                        children: (0, f.jsxs)("div", {
                            className: "d-flex",
                            children: [(0, f.jsx)(E.Z, {
                                className: "text-small blob-num color-fg-muted",
                                sx: {
                                    width: "auto",
                                    minWidth: "auto"
                                },
                                children: e.lineNumber
                            }), (0, f.jsxs)(E.Z, {
                                sx: {
                                    overflow: "hidden",
                                    whiteSpace: "pre",
                                    position: "relative"
                                },
                                children: [null !== c && (0, f.jsxs)("div", {
                                    id: `offset-${e.href(!1)}`,
                                    style: {
                                        marginLeft: -c
                                    },
                                    children: [a.length > 0 && (0, f.jsx)(rg.R, {
                                        symbols: [e],
                                        lineNumber: e.lineNumber,
                                        sx: {
                                            overflow: "initial"
                                        },
                                        isNotUsingWhitespace: !0
                                    }), (0, f.jsx)(ez.WZ, {
                                        sx: {
                                            position: "relative",
                                            width: "100%",
                                            overflow: "hidden"
                                        },
                                        html: u,
                                        "aria-current": t ? "location" : void 0
                                    })]
                                }), (0, f.jsx)("span", {
                                    ref: e => d(e ? .offsetWidth ? ? null),
                                    style: {
                                        visibility: "hidden",
                                        position: "absolute",
                                        whiteSpace: "pre"
                                    },
                                    children: function(e, t) {
                                        let n = 34 - e.length,
                                            r = t.bodyText.slice(0, t.ident.start.column);
                                        if (n <= 0) return r;
                                        let i = t.bodyText.slice(t.ident.start.column + e.length).trimEnd();
                                        n = Math.max(n / 2, n - i.length);
                                        let o = r.split(" "),
                                            a = [];
                                        for (let e = o.length - 1; e >= 0; e--) {
                                            let t = o[e];
                                            if (a.unshift(t), a.join(" ").length <= n) o.pop();
                                            else break
                                        }
                                        let s = o.join(" "),
                                            l = (r.slice(s.length).match(/^[ \t]*/) || [])[0] ? ? "";
                                        return `${o.join(" ")}${l}`
                                    }(a, e)
                                })]
                            })]
                        })
                    })
                })
            }

            function rj(e) {
                let {
                    activeElement: t
                } = document, n = t ? .[e];
                if (n) {
                    if ("treeitem" !== n.role && "nextElementSibling" === e) {
                        let e = n.querySelector('[role="treeitem"]');
                        e ? .focus()
                    } else n.focus()
                }
            }
            try {
                rb.displayName || (rb.displayName = "CodeNavCell")
            } catch {}

            function rw({
                results: e,
                repo: t,
                filePath: n,
                highlightedIndex: r,
                isDefinition: i,
                onClick: o,
                offset: a,
                initiallyExpanded: s,
                enableExpandCollapse: l,
                symbol: c,
                setFocusOnFile: d
            }) {
                let u = !!(0, ew.Q)(),
                    [h, m] = (0, v.useState)(s),
                    p = (0, j.H)(),
                    {
                        path: x
                    } = (0, eC.Br)(),
                    y = v.useRef(null),
                    [g, b] = (0, v.useState)(!1),
                    w = (0, eO.nJ)(),
                    N = e.slice(0, 10),
                    C = e.length > 10 ? e.slice(10) : [],
                    {
                        sendRepoClickEvent: k
                    } = (0, V.a)(),
                    S = p.ownerLogin === t.ownerLogin && p.name === t.name,
                    I = (0, v.useCallback)(e => {
                        "Enter" === e.key || " " === e.key ? (m(!h), e.preventDefault()) : "ArrowLeft" === e.key ? m(!1) : "ArrowRight" === e.key ? (m(!0), h && y.current ? .focus()) : "ArrowDown" === e.key ? (rj("nextElementSibling"), e.preventDefault()) : "ArrowUp" === e.key && (rj("previousElementSibling"), e.preventDefault())
                    }, [h]);
                (0, v.useEffect)(() => {
                    r && r >= 10 + a && b(!0)
                }, [r, a]), (0, v.useEffect)(() => {
                    d && w && y.current ? .focus()
                }, [d, w]), (0, v.useEffect)(() => {
                    w || document.getElementById(eZ.KG) ? .focus()
                }, [w]);
                let R = `${n}-${i?"definition":"reference"}-group`;
                return (0, f.jsxs)(E.Z, {
                    children: [(0, f.jsxs)(E.Z, {
                        sx: {
                            fontSize: 0,
                            px: 3,
                            py: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            borderTop: "1px solid",
                            borderColor: "border.muted",
                            cursor: l ? "pointer" : "auto"
                        },
                        onClick: l ? () => m(!h) : void 0,
                        onKeyDown: I,
                        ref: y,
                        children: [(0, f.jsxs)(E.Z, {
                            sx: {
                                display: "flex"
                            },
                            children: [i && p.id !== t.id && (0, f.jsxs)(f.Fragment, {
                                children: [(0, f.jsx)(e9.O, {
                                    square: !0,
                                    src: t.ownerAvatar,
                                    sx: {
                                        mr: 2,
                                        backgroundColor: "#FFFFFF"
                                    },
                                    size: 16
                                }), (0, f.jsx)(E.Z, {
                                    sx: {
                                        fontWeight: "600",
                                        mr: 1
                                    },
                                    children: t.name
                                })]
                            }), (0, f.jsxs)(E.Z, {
                                as: "button",
                                "aria-expanded": h,
                                "aria-controls": R,
                                sx: {
                                    fontWeight: "400",
                                    color: "fg.muted",
                                    display: "flex",
                                    flexDirection: "row",
                                    backgroundColor: "canvas.default",
                                    border: "none",
                                    padding: 0
                                },
                                children: [l && (0, f.jsx)(H.Z, {
                                    "aria-hidden": "true",
                                    icon: h ? A.ChevronDownIcon : A.ChevronRightIcon
                                }), (0, f.jsx)(E.Z, {
                                    sx: {
                                        display: "table",
                                        width: "100%",
                                        tableLayout: "fixed"
                                    },
                                    children: (0, f.jsxs)(K.Z, {
                                        "aria-label": `${i?"Definitions":"References"} in ${n!==x?n:"this file"}`,
                                        title: n,
                                        sx: {
                                            direction: "rtl",
                                            maxWidth: "100%",
                                            pl: 2,
                                            display: "table-cell",
                                            textAlign: "left"
                                        },
                                        children: ["\u200E", S && n === x ? "In this file" : n, "\u200E"]
                                    })
                                })]
                            })]
                        }), e && !h && (0, f.jsx)(no.Z, {
                            sx: {
                                ml: 2
                            },
                            children: e.length
                        })]
                    }), h && (0, f.jsxs)(E.Z, {
                        "aria-label": `Results in ${n!==x?n:"this file"}`,
                        id: R,
                        sx: {
                            overflowX: "hidden"
                        },
                        role: "group",
                        className: "code-nav-file-information",
                        children: [N.map((e, t) => (0, f.jsx)(rb, {
                            reference: e,
                            isHighlighted: r === t + a,
                            href: e.href(u),
                            onClick: () => {
                                o && o(t + a), k("BLOB_SYMBOLS_MENU.SYMBOL_DEFINITION_CLICK")
                            },
                            symbol: c,
                            index: t + a
                        }, `codeNavigation${t+a}`)), g && C.map((e, t) => (0, f.jsx)(rb, {
                            reference: e,
                            isHighlighted: r === t + a + 10,
                            href: e.href(u),
                            onClick: () => {
                                o && o(t + a + 10), k("BLOB_SYMBOLS_MENU.SYMBOL_DEFINITION_CLICK")
                            },
                            symbol: c,
                            index: t + a + 10,
                            focusElement: 0 === t
                        }, `codeNavigation${t+a+10}`)), C.length > 0 && (0, f.jsx)(E.Z, {
                            sx: {
                                px: 3,
                                pt: 1,
                                pb: 2,
                                fontSize: 0,
                                color: "fg.muted",
                                borderColor: "border.muted"
                            },
                            children: (0, f.jsx)(nu.r, {
                                leadingVisual: g ? A.FoldIcon : A.UnfoldIcon,
                                onClick: () => b(!g),
                                sx: {
                                    color: "fg.default"
                                },
                                variant: "invisible",
                                size: "small",
                                "aria-selected": !1,
                                children: g ? "Show less" : "Show more"
                            })
                        })]
                    })]
                }, n)
            }
            try {
                rw.displayName || (rw.displayName = "CodeNavFileInformation")
            } catch {}

            function rv({
                definitions: e,
                references: t,
                highlightedIndex: n,
                initiallyExpanded: r,
                enableExpandCollapse: i,
                onClick: o,
                symbol: a,
                setFocusOnFile: s
            }) {
                let l = (0, v.useMemo)(() => {
                        let n = {};
                        if (e)
                            for (let t of e) {
                                let e = t.pathKey();
                                n[e] || (n[e] = []), n[e].push(t)
                            } else if (t)
                                for (let e of t) {
                                    let t = e.pathKey();
                                    n[t] || (n[t] = []), n[t].push(e)
                                }
                        return n
                    }, [e, t]),
                    c = 0;
                return (0, f.jsx)(E.Z, {
                    children: Object.keys(l).map((t, d) => {
                        let u = l[t],
                            h = (0, f.jsx)(rw, {
                                repo: u[0].repo,
                                filePath: u[0].path,
                                results: u,
                                highlightedIndex: n,
                                isDefinition: void 0 !== e && e.length > 0,
                                onClick: o,
                                offset: c,
                                initiallyExpanded: r,
                                enableExpandCollapse: i,
                                symbol: a,
                                setFocusOnFile: 0 === d && s
                            }, t);
                        return c += u.length, h
                    })
                })
            }
            try {
                rv.displayName || (rv.displayName = "CodeNavInfoPanelData")
            } catch {}
            let rN = (0, v.lazy)(() => n.e("app_assets_modules_react-code-view_components_blob_BlobContent_CodeNav_ScrollMarks_tsx").then(n.bind(n, 65710)));

            function rC({
                codeNavInfo: e,
                selectedText: t,
                lineNumber: n,
                offset: r,
                onClose: i,
                onBackToSymbol: o,
                onSymbolSelect: a,
                isLoading: s,
                setSearchResults: l,
                setFocusedSearchResult: c
            }) {
                let {
                    findNextShortcut: d,
                    findPrevShortcut: u
                } = (0, ek.bx)(), h = !!(0, ew.Q)(), {
                    definitions: m,
                    localReferences: p,
                    crossReferences: x,
                    error: y
                } = function(e, t, n, r) {
                    let [i, o] = (0, v.useState)(rx);
                    return (0, v.useEffect)(() => {
                        (async () => {
                            if (n < 0 || r < 0) return;
                            let {
                                definitions: i,
                                localReferences: a,
                                crossReferences: s,
                                setLoading: l
                            } = e.getDefinitionsAndReferences(t, n, r);
                            o(rx);
                            try {
                                let e = await i;
                                o({
                                    definitions: e,
                                    localReferences: void 0,
                                    crossReferences: void 0,
                                    error: !1
                                }), l(!1);
                                let [t, n] = await Promise.all([a, s]);
                                o({
                                    definitions: e,
                                    localReferences: t,
                                    crossReferences: n,
                                    error: !1
                                })
                            } catch (e) {
                                o({ ...rx,
                                    error: !0
                                })
                            } finally {
                                l(!1)
                            }
                        })()
                    }, [e, t, n, r]), i
                }(e, t, n, r), {
                    copilotAccessAllowed: g
                } = (0, eC.Br)(), [b, N] = (0, v.useState)(-1), [C, k] = (0, v.useState)(!1), S = (0, j.H)(), I = m ? .definitions || [], R = (0, v.useMemo)(() => p ? .references || [], [p]), Z = x ? .references || [], T = I.length, B = R.length + Z.length, _ = (0, L.s)(), D = I.length > 0 ? I[0] : void 0, F = Z.map(e => e.path).filter((e, t, n) => n.indexOf(e) === t), O = C ? B : R.length, M = (0, v.useRef)(null), {
                    language: $,
                    languageID: W
                } = (0, ev.G)(), z = {
                    type: "symbol",
                    kind: "codeNavSymbol",
                    name: t,
                    languageID: W,
                    languageName: $,
                    codeNavDefinitions: I.map(e => ({
                        ident: e.ident,
                        extent: e.extent,
                        kind: e.kind.fullName,
                        fullyQualifiedName: e.fullyQualifiedName,
                        ref: rI(e.refInfo),
                        commitOID: e.refInfo.currentOid,
                        repoID: e.repo.id,
                        repoName: e.repo.name,
                        repoOwner: e.repo.ownerLogin,
                        path: e.path
                    })),
                    codeNavReferences: [...R.map(e => ({
                        ident: e.ident,
                        path: e.path,
                        ref: rI(e.refInfo),
                        commitOID: e.refInfo.currentOid,
                        repoID: e.repo.id,
                        repoName: e.repo.name,
                        repoOwner: e.repo.ownerLogin
                    })), ...Z.map(e => ({
                        ident: e.ident,
                        path: e.path,
                        ref: rI(e.refInfo),
                        commitOID: e.refInfo.currentOid,
                        repoID: e.repo.id,
                        repoName: e.repo.name,
                        repoOwner: e.repo.ownerLogin
                    }))]
                };
                (0, v.useEffect)(() => {
                    D && D.repo.name === e.repo.name && D.path === e.path ? l([D, ...R]) : l(R), c(void 0)
                }, [e.path, e.repo.name, D, R, t, l, c]), (0, G.Sl)(e => {
                    e || M.current ? .focus()
                }), (0, v.useEffect)(() => {
                    N(-1)
                }, [t]), (0, v.useEffect)(() => {
                    k(F.length > 0 && F.length <= 5)
                }, [F.length]);
                let U = ({
                    index: e,
                    direction: t,
                    navigate: n
                }) => {
                    if (void 0 !== e) {
                        let t = e >= T ? R[e - T] : I[e];
                        N(e), n && _(t.href(h)), (0, eT.v)({
                            line: t.lineNumber,
                            column: t.ident.start.column
                        })
                    }
                    if (void 0 !== t) {
                        let e = Math.max(T, b + t),
                            r = R[e - T];
                        e < R.length + I.length && r && (N(e), n && _(r.href(h)), (0, eT.v)({
                            line: r.lineNumber,
                            column: r.ident.start.column
                        }))
                    }
                };
                return (0, f.jsxs)(E.Z, {
                    children: [(0, f.jsxs)(E.Z, {
                        as: "h2",
                        sx: {
                            fontSize: "12px",
                            py: 2,
                            px: 3,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        },
                        role: "group",
                        "aria-roledescription": "Symbol Navigation Details",
                        children: [(0, f.jsx)(nu.r, {
                            onClick: o,
                            onSelect: o,
                            id: "back-to-all-symbols",
                            "aria-label": "Back to All Symbols",
                            ref: M,
                            variant: "invisible",
                            sx: {
                                order: 1,
                                pr: 3,
                                pl: 0,
                                px: 0,
                                ":hover:not([disabled])": {
                                    bg: "canvas.default"
                                }
                            },
                            children: (0, f.jsxs)(E.Z, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center"
                                },
                                children: [(0, f.jsx)(H.Z, {
                                    icon: A.ArrowLeftIcon,
                                    sx: {
                                        pr: 1,
                                        fontWeight: 600,
                                        color: "fg.muted"
                                    },
                                    size: 20
                                }), (0, f.jsx)(E.Z, {
                                    sx: {
                                        fontSize: 0,
                                        color: "fg.subtle",
                                        fontWeight: 400
                                    },
                                    children: "All Symbols"
                                })]
                            })
                        }), (0, f.jsx)(P.h, {
                            "aria-label": "Close symbols",
                            "data-hotkey": "Escape",
                            icon: A.XIcon,
                            sx: {
                                order: 3,
                                mr: -2,
                                color: "fg.default"
                            },
                            onClick: i,
                            variant: "invisible"
                        })]
                    }), (0, f.jsx)(E.Z, {
                        sx: {
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "space-between",
                            pb: 3
                        },
                        children: (0, f.jsx)(rS, {
                            currentSymbol: D,
                            selectedText: t,
                            codeNavInfo: e,
                            onSymbolSelect: a,
                            children: 1 === I.length ? (0, f.jsx)(t1.Z, {
                                copilotAccessAllowed: g,
                                messageReference: z
                            }) : void 0
                        })
                    }), s && (0, f.jsx)(E.Z, {
                        sx: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            p: 3,
                            justifyContent: "center"
                        },
                        children: (0, f.jsx)(eq.Z, {
                            size: "small"
                        })
                    }), !y && !s && I && I.length > 0 ? (0, f.jsxs)(f.Fragment, {
                        children: [(0, f.jsx)(rk, {
                            headerText: I.length > 1 ? "Definitions" : "Definition",
                            searchType: m ? .backend === "precise" ? "Precise" : "Search"
                        }), (0, f.jsx)(E.Z, {
                            children: I && (0, f.jsx)(rv, {
                                definitions: I,
                                onClick: e => {
                                    U({
                                        index: e
                                    })
                                },
                                highlightedIndex: b,
                                initiallyExpanded: !0,
                                enableExpandCollapse: I.length > 1,
                                symbol: t,
                                setFocusOnFile: !0
                            }, "definitions")
                        })]
                    }) : null, !s && (R.length > 0 || Z.length > 0) && (0, f.jsx)(rk, {
                        headerText: `${O} ${O>1?"References":"Reference"}`,
                        searchType: "Search",
                        sx: {
                            justifyContent: "space-between"
                        },
                        children: (0, f.jsxs)(E.Z, {
                            sx: {
                                display: "float",
                                float: "right",
                                mr: "-6px"
                            },
                            children: [(0, f.jsx)(P.h, {
                                "aria-label": "Previous reference",
                                "data-hotkey": u.hotkey,
                                onClick: () => U({
                                    direction: -1,
                                    navigate: !0
                                }),
                                sx: {
                                    mr: 2,
                                    cursor: "pointer",
                                    color: "fg.muted"
                                },
                                disabled: b <= I.length,
                                icon: A.ChevronUpIcon,
                                variant: "invisible",
                                size: "small"
                            }), (0, f.jsx)(P.h, {
                                "aria-label": "Next reference",
                                "data-hotkey": d.hotkey,
                                onClick: () => U({
                                    direction: 1,
                                    navigate: !0
                                }),
                                sx: {
                                    cursor: "pointer",
                                    color: "fg.muted"
                                },
                                disabled: b >= R.length + I.length - 1,
                                icon: A.ChevronDownIcon,
                                variant: "invisible",
                                size: "small"
                            }), (0, f.jsx)("button", {
                                hidden: !0,
                                "data-hotkey": d.hotkey,
                                onClick: () => U({
                                    direction: 1,
                                    navigate: !0
                                }),
                                "data-testid": "find-next-button"
                            }), (0, f.jsx)("button", {
                                hidden: !0,
                                "data-hotkey": u.hotkey,
                                onClick: () => U({
                                    direction: -1,
                                    navigate: !0
                                }),
                                "data-testid": "find-prev-button"
                            })]
                        })
                    }), y && (0, f.jsx)(E.Z, {
                        sx: {
                            p: 3,
                            fontWeight: "400",
                            color: "fg.muted"
                        },
                        children: "No references found"
                    }), !s && R.length > 0 && (0, f.jsx)(rv, {
                        initiallyExpanded: !0,
                        enableExpandCollapse: !0,
                        references: R,
                        highlightedIndex: b - T,
                        onClick: e => {
                            U({
                                index: T + e
                            })
                        },
                        symbol: t,
                        setFocusOnFile: !(I && I.length > 0)
                    }, "referencesInfoBox"), !s && C && (0, f.jsx)(rv, {
                        initiallyExpanded: !1,
                        enableExpandCollapse: !0,
                        references: Z,
                        symbol: t
                    }, "crossReferencesInfoBox"), 0 === R.length && 0 === I.length && !y && !s && (0, f.jsx)(E.Z, {
                        sx: {
                            p: 3,
                            fontWeight: "400",
                            color: "fg.muted"
                        },
                        children: "No definitions or references found"
                    }), (0, f.jsxs)(E.Z, {
                        sx: {
                            px: 2,
                            py: 2,
                            fontSize: 0,
                            color: "fg.muted",
                            borderTop: "1px solid",
                            borderColor: "border.muted"
                        },
                        children: [F.length > 5 && (0, f.jsx)(nu.r, {
                            leadingVisual: C ? A.FoldIcon : A.UnfoldIcon,
                            sx: {
                                color: "fg.default",
                                mb: 2
                            },
                            variant: "invisible",
                            size: "small",
                            onClick: () => k(!C),
                            children: C ? "Show less" : "Show more"
                        }), (0, f.jsx)(nu.r, {
                            as: eo.Z,
                            leadingVisual: A.SearchIcon,
                            sx: {
                                color: "fg.default"
                            },
                            variant: "invisible",
                            size: "small",
                            href: (0, w.mY)({
                                owner: S.ownerLogin,
                                repo: S.name,
                                searchTerm: t
                            }),
                            children: "Search for this symbol"
                        })]
                    }), (0, f.jsx)(v.Suspense, {
                        fallback: null,
                        children: (0, f.jsx)(rN, {
                            definitionsOrReferences: [...I, ...R]
                        })
                    })]
                })
            }

            function rk({
                headerText: e,
                searchType: t,
                sx: n,
                children: r
            }) {
                return (0, f.jsxs)(E.Z, {
                    sx: {
                        fontSize: "14px",
                        px: 3,
                        py: 2,
                        fontWeight: "600",
                        backgroundColor: "canvas.subtle",
                        borderTop: "1px solid",
                        borderColor: "border.muted",
                        height: "36px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        ...n
                    },
                    children: [(0, f.jsxs)(_.Z, {
                        as: "h3",
                        sx: {
                            fontSize: "12px",
                            fontWeight: "semibold",
                            color: "fg.muted"
                        },
                        children: [e, (0, f.jsx)($.Z, {
                            sx: {
                                ml: 2,
                                fontWeight: "light"
                            },
                            children: t
                        })]
                    }), r]
                })
            }

            function rS({
                currentSymbol: e,
                selectedText: t,
                codeNavInfo: n,
                onSymbolSelect: r,
                children: i
            }) {
                let o = e ? .fullyQualifiedName ? ? t,
                    a = o.split(/(\W+)/),
                    s = a.map(e => {
                        let t = /^\W+$/.test(e),
                            r = t ? [] : n.getLocalDefinitions(e, !0),
                            i = 1 === r.length ? r[0] : void 0,
                            o = i ? .kind.plColor;
                        return {
                            text: e,
                            symbol: i,
                            symbolColor: o,
                            isSeparator: t
                        }
                    });
                return (0, f.jsxs)(E.Z, {
                    as: "h3",
                    sx: {
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                        alignContent: "start",
                        fontWeight: 400,
                        fontSize: 1,
                        fontFamily: "mono",
                        flexWrap: "wrap",
                        minWidth: 0,
                        verticalAlign: "center",
                        gap: 2,
                        px: 3
                    },
                    "aria-label": `${e?.kind.fullName||""} ${o}`.trimStart(),
                    children: [e && (0, f.jsxs)(E.Z, {
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexGrow: 1,
                            width: "100%"
                        },
                        children: [(0, f.jsx)(Y, {
                            symbolKind: e.kind,
                            showFullSymbol: !0
                        }), i]
                    }), (0, f.jsxs)(K.Z, {
                        title: o,
                        sx: {
                            maxWidth: 290,
                            mt: "3px",
                            direction: "rtl",
                            alignSelf: "start"
                        },
                        inline: !0,
                        children: ["\u200E", s.map((e, t) => {
                            let n = e.symbol ? {
                                all: "unset",
                                cursor: "pointer",
                                "&:hover": {
                                    backgroundColor: "attention.muted"
                                }
                            } : {};
                            return (0, f.jsx)(E.Z, {
                                as: "span",
                                role: "button",
                                tabIndex: e.isSeparator ? -1 : 0,
                                sx: { ...n,
                                    color: e.symbolColor,
                                    direction: "ltr"
                                },
                                onClick: () => e.symbol ? r(e.symbol) : void 0,
                                onKeyDown: t => {
                                    e.symbol && ["Enter", "Space"].includes(t.code) && r(e.symbol)
                                },
                                children: e.text
                            }, `${e.text}-${t}`)
                        }), "\u200E"]
                    })]
                })
            }

            function rI(e) {
                return e.name === e.currentOid ? e.currentOid : "tree" === e.refType ? `refs/heads/${e.name}` : (0, rp.Ju)(e.name, e.refType ? ? "branch")
            }
            try {
                rN.displayName || (rN.displayName = "ScrollMarks")
            } catch {}
            try {
                rC.displayName || (rC.displayName = "CodeNavSymbolDetails")
            } catch {}
            try {
                rk.displayName || (rk.displayName = "CodeNavSymbolSectionHeader")
            } catch {}
            try {
                rS.displayName || (rS.displayName = "CodeNavSymbolDefinitionHeader")
            } catch {}

            function rR({
                selectedText: e,
                showCodeNavWithSymbol: t,
                lineNumber: n,
                offset: r,
                onClose: i,
                onClear: o,
                codeNavInfo: a,
                isLoading: s,
                setSearchResults: l,
                setFocusedSearchResult: c,
                autoFocusSearch: d
            }) {
                function u(e) {
                    t(e), m(!1)
                }
                let [h, m] = (0, v.useState)(!e);
                return (0, G.Sl)(e => {
                    e && (o(), m(!0), l([]))
                }), (0, v.useEffect)(() => {
                    e ? m(!1) : h || m(!0)
                }, [e, a]), (0, f.jsx)(E.Z, {
                    id: "symbols-pane",
                    children: h ? a ? (0, f.jsx)(eu, {
                        treeSymbols: a.symbolTree,
                        onSymbolSelect: u,
                        codeSymbols: a.symbols,
                        onClose: i,
                        autoFocusSearch: d
                    }) : (0, f.jsx)(E.Z, {
                        children: "Click on a symbol to see code navigation data"
                    }) : (0, f.jsx)(rC, {
                        codeNavInfo: a,
                        selectedText: e,
                        lineNumber: n,
                        offset: r,
                        onBackToSymbol: () => {
                            o(), m(!0), l([])
                        },
                        onClose: () => {
                            i(), o(), l([])
                        },
                        onSymbolSelect: u,
                        isLoading: s,
                        setSearchResults: l,
                        setFocusedSearchResult: c
                    })
                })
            }
            try {
                rR.displayName || (rR.displayName = "CodeNavInfoPanel")
            } catch {}
            var rZ = n(14783);

            function rT({
                onClose: e,
                toc: t
            }) {
                let [n, r] = (0, v.useState)(""), [i, o] = (0, v.useState)(""), a = (0, v.useRef)(null);
                return ((0, v.useEffect)(() => {
                    a.current ? .focus()
                }, []), (0, v.useEffect)(() => {
                    let e = () => {
                        window.location.hash && o(window.location.hash)
                    };
                    return e(), window.addEventListener("hashchange", e), () => {
                        window.removeEventListener("hashchange", e)
                    }
                }, []), t) ? (0, f.jsxs)(E.Z, {
                    sx: {
                        px: 2,
                        pt: 2,
                        maxWidth: "100vw"
                    },
                    as: "section",
                    "aria-labelledby": "outline-id",
                    children: [e ? (0, f.jsxs)(E.Z, {
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        children: [(0, f.jsx)(E.Z, {
                            as: "h3",
                            id: "outline-id",
                            ref: a,
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 1,
                                fontWeight: 600,
                                px: 2
                            },
                            tabIndex: -1,
                            children: "Outline"
                        }), (0, f.jsx)(P.h, {
                            "aria-label": "Close outline",
                            icon: A.XIcon,
                            onClick: e,
                            variant: "invisible",
                            sx: {
                                color: "fg.muted"
                            }
                        })]
                    }) : null, t.length >= 8 ? (0, f.jsx)(E.Z, {
                        sx: {
                            pt: 3,
                            px: 2
                        },
                        children: (0, f.jsx)(M.Z, {
                            leadingVisual: A.FilterIcon,
                            placeholder: "Filter headings",
                            "aria-label": "Filter headings",
                            sx: {
                                width: "100%"
                            },
                            onChange: e => {
                                r(e.target.value)
                            }
                        })
                    }) : null, (0, f.jsx)(rZ.$, {
                        sx: {
                            overflowY: "auto",
                            "> li": {
                                borderRadius: 2,
                                width: "100%"
                            }
                        },
                        children: t.map(({
                            level: e,
                            htmlText: t,
                            anchor: r
                        }, o) => {
                            let a;
                            if (!t || n && !t.toLowerCase().includes(n.toLowerCase())) return null;
                            a = 1 === e ? {
                                fontWeight: "bold"
                            } : {
                                paddingLeft: `${(e-1)*16}px`
                            };
                            let s = `#${r}`;
                            return (0, f.jsx)(rZ.$.Item, {
                                "aria-current": i === s ? "page" : void 0,
                                href: s,
                                onClick: e => {
                                    1 === e.button || e.metaKey || e.ctrlKey || (i !== s && (location.href = s), e0(s), e.preventDefault())
                                },
                                children: (0, f.jsx)(ez.wB, {
                                    sx: { ...a
                                    },
                                    html: t
                                })
                            }, `outline-${r}-${o}`)
                        })
                    })]
                }) : null
            }
            try {
                rT.displayName || (rT.displayName = "TableOfContentsPanel")
            } catch {}
            var rL = n(4220);
            let rE = v.memo(rB);

            function rB(e) {
                let { ...t
                } = e, [n, r] = v.useState(!1), {
                    screenSize: i
                } = (0, k.eI)();
                return v.useEffect(() => {
                    r(i < k._G.large)
                }, [i]), (0, f.jsxs)(f.Fragment, {
                    children: [!n && (0, f.jsx)(r_, {
                        className: "inner-panel-content-not-narrow",
                        ...e
                    }), n && (0, f.jsx)(tZ.V, {
                        onClose: () => t.setOpenPanel(void 0),
                        renderHeader: () => null,
                        renderBody: () => r_({ ...t
                        })
                    })]
                })
            }

            function r_({
                stickySx: e,
                stickyHeaderRef: t,
                openPanel: n,
                isCodeNavLoading: r,
                codeNavInfo: i,
                setOpenPanel: o,
                showCodeNavWithSymbol: a,
                searchingText: s,
                setSearchingText: l,
                setSearchTerm: c,
                setSearchResults: d,
                setFocusedSearchResult: u,
                autoFocusSearch: h,
                className: m
            }) {
                let {
                    headerInfo: {
                        toc: p
                    }
                } = (0, ev.G)(), x = (0, e_.X)(t), y = eF();
                return (0, f.jsx)(rL.s, {
                    sx: { ...e,
                        ...x ? {
                            borderRadius: "0px 0px 6px 6px",
                            borderTop: 0
                        } : {}
                    },
                    className: `panel-content-narrow-styles ${m||""}`,
                    children: "toc" === n ? (0, f.jsx)(rT, {
                        toc: p,
                        onClose: () => {
                            o(void 0)
                        }
                    }) : "codeNav" === n && (0, f.jsx)(rR, {
                        codeNavInfo: i,
                        showCodeNavWithSymbol: a,
                        selectedText: s.selectedText,
                        lineNumber: s.lineNumber - 1,
                        offset: s.offset,
                        onClose: () => {
                            o(void 0), localStorage.setItem("codeNavOpen", ""), y(null, !1), document.getElementById("symbols-button") ? .focus()
                        },
                        isLoading: r,
                        onClear: () => l({
                            selectedText: "",
                            lineNumber: 0,
                            offset: -1
                        }),
                        setSearchTerm: c,
                        setSearchResults: d,
                        setFocusedSearchResult: u,
                        autoFocusSearch: h
                    })
                })
            }
            try {
                rE.displayName || (rE.displayName = "PanelContent")
            } catch {}
            try {
                rB.displayName || (rB.displayName = "PanelContentUnmemoized")
            } catch {}
            try {
                r_.displayName || (r_.displayName = "InnerPanelContent")
            } catch {}

            function rD({
                blame: e,
                blob: t,
                searchTerm: n,
                setSearchTerm: r,
                setValidCodeNav: i,
                showTree: o,
                treeToggleElement: a,
                validCodeNav: s,
                copilotInfo: l
            }) {
                let {
                    path: c
                } = (0, eC.Br)(), d = (0, v.useRef)(null), u = (0, e_.V)(), [h, m] = (0, v.useState)(!1), {
                    openPanel: p,
                    setOpenPanel: x
                } = ej(), y = (0, v.useRef)(null), g = (0, I.O)().openSymbolsOption.enabled;
                (0, G.Sl)(e => {
                    e && m(!0)
                });
                let {
                    sendRepoClickEvent: b
                } = (0, V.a)(), w = (0, v.useRef)(!0);

                function N() {
                    window.scrollY < 300 && Z(null, !0)
                }(0, v.useEffect)(() => {
                    w.current ? (w.current = !1, A.selectedText && !p && g && T()) : (Z(null, !0), r(""), m(!1), P({
                        selectedText: "",
                        lineNumber: -1,
                        offset: 0
                    }))
                }, [c]), (0, v.useEffect)(() => (window.addEventListener("scroll", N), () => {
                    window.removeEventListener("scroll", N)
                }), []);
                let C = !!(0, ew.Q)(),
                    k = eF(),
                    {
                        currentStickyLines: R,
                        setStickyLines: Z
                    } = function() {
                        let [e, t] = (0, v.useState)(new Map), n = (0, v.useCallback)((n, r) => {
                            let i = !1;
                            if (null === n && 0 === e.size) return;
                            if (null === n && r) {
                                e.clear(), t(new Map(e));
                                return
                            }
                            if (!n) return;
                            let o = n.lineNumber;
                            if (r && e.has(o) ? (e.delete(o), i = !0) : r || e.has(o) || (e.set(o, n), i = !0), e.has(o))
                                for (let [t] of e) {
                                    let n = e.get(t);
                                    (!n.ownedSection || n.ownedSection.endLine < o || o < n.lineNumber) && (e.delete(t), i = !0)
                                }
                            i && t(new Map(e))
                        }, []);
                        return {
                            currentStickyLines: e,
                            setStickyLines: n
                        }
                    }(),
                    T = (0, v.useCallback)(() => {
                        !C && g && (x("codeNav"), b("BLOB_SYMBOLS_MENU.OPEN_WITH_SYMBOL"), localStorage.setItem("codeNavOpen", "codeNav"), k(null, !0))
                    }, [C, g, x, b, k]),
                    {
                        isCodeNavLoading: B,
                        codeNavInfo: _,
                        showCodeNavWithSymbol: D,
                        showCodeNavForToken: O,
                        searchingText: A,
                        setSearchingText: P
                    } = function(e, t, n, r, i) {
                        let o = (0, L.s)(),
                            a = (0, j.H)(),
                            s = (0, F.x)(),
                            {
                                refInfo: l,
                                path: c
                            } = (0, eC.Br)(),
                            [d, u] = (0, v.useState)(!1),
                            [h] = (0, eI.lr)(),
                            m = "1" === h.get("plain"),
                            f = (0, v.useMemo)(() => {
                                n(!0);
                                try {
                                    return new eS.bm(a, l, c, !!s, e.rawLines || [], e.symbols ? .symbols ? ? [], e.stylingDirectives, e.language, m, u)
                                } catch (e) {
                                    n(!1)
                                }
                            }, [a, l, c, e, n, m, s]),
                            [p, x] = (0, v.useState)(() => {
                                let t = (0, eR.n6)(r);
                                if (!t.blobRange ? .start ? .line) return {
                                    selectedText: "",
                                    lineNumber: -1,
                                    offset: 0
                                };
                                let n = !i && t.blobRange.start.line === t.blobRange.end.line && null !== t.blobRange.start.column && null !== t.blobRange.end.column && t.blobRange.end.column - t.blobRange.start.column > 2 && e.stylingDirectives && e.stylingDirectives[t.blobRange.start.line - 1] ? .length && f ? .blobLines[t.blobRange.start.line - 1];
                                if (n) {
                                    let n = f.blobLines[t.blobRange.start.line - 1] ? .substring(t.blobRange.start.column - 1, t.blobRange.end.column - 1),
                                        r = e.stylingDirectives[t.blobRange.start.line - 1] ? .find(e => e.start === t.blobRange.start.column - 1 && e.end === t.blobRange.end.column - 1);
                                    return n && r && (0, eZ.yk)(n, r.cssClass) ? {
                                        selectedText: n,
                                        lineNumber: t.blobRange.start.line,
                                        offset: t.blobRange.start.column
                                    } : {
                                        selectedText: "",
                                        lineNumber: -1,
                                        offset: 0
                                    }
                                }
                                if (!r || !f || i) return {
                                    selectedText: "",
                                    lineNumber: -1,
                                    offset: 0
                                }; {
                                    let e = f.getSymbolOnLine(Number(r.substring(2)));
                                    return e ? {
                                        selectedText: e.name,
                                        lineNumber: e.lineNumber,
                                        offset: e.ident.start.column
                                    } : {
                                        selectedText: "",
                                        lineNumber: -1,
                                        offset: 0
                                    }
                                }
                            }),
                            y = (0, v.useCallback)(e => {
                                x({
                                    selectedText: e.name,
                                    lineNumber: e.lineNumber,
                                    offset: e.ident.start.column
                                }), t(), o(e.href()), (0, eT.v)({
                                    line: e.lineNumber
                                })
                            }, [t, o]),
                            g = (0, v.useCallback)(e => {
                                x(e), t()
                            }, [t]);
                        return {
                            isCodeNavLoading: d,
                            codeNavInfo: f,
                            showCodeNavWithSymbol: y,
                            showCodeNavForToken: g,
                            setSearchingText: x,
                            searchingText: p
                        }
                    }(t, T, i, S.ssrSafeLocation.hash, C),
                    {
                        searchStatus: M,
                        searchResults: H,
                        setSearchResults: $,
                        focusedSearchResult: W,
                        setFocusedSearchResult: z
                    } = function(e, t) {
                        let {
                            findInFileWorkerPath: n
                        } = (0, eC.Ou)(), [r, i] = (0, v.useState)([]), [o, a] = (0, v.useState)(void 0), [s, l] = (0, v.useState)("done"), c = v.useRef(), {
                            refInfo: d,
                            path: u
                        } = (0, eC.Br)();
                        !c.current && t && (c.current = new DebouncedWorkerManager(new eL.V(n, eE), 200, e => 1 !== e.query.length));
                        let h = (0, v.useRef)(t);
                        h.current = t;
                        let m = (0, v.useRef)("");
                        (0, v.useEffect)(() => function() {
                            c.current ? .terminate()
                        }, []);
                        let f = (0, v.useRef)();
                        return c.current && e !== f.current && (c.current.onResponse = t => {
                            t.query === h.current && (a(0), i(e ? .createReferences(t.ranges) || []), l("done"), m.current = h.current)
                        }, f.current = e), (0, v.useEffect)(() => {
                            if (!e || !c.current || !m.current || "" === m.current) {
                                i([]), a(0), l("done");
                                return
                            }
                            i([]), a(0), l("pending"), c.current.post({
                                query: m.current,
                                lines: e.blobLines,
                                currentCodeReferences: void 0
                            })
                        }, [d.name, u]), (0, v.useEffect)(() => {
                            if (e && c.current) {
                                if ("" === t) i([]), a(0), l("done"), m.current = "";
                                else {
                                    if (m.current === t || !(t.length > 0 && t.length <= 1e3)) return;
                                    l("pending");
                                    let n = m.current.length > 0 && t.startsWith(m.current);
                                    c.current.post({
                                        query: t,
                                        lines: e.blobLines,
                                        currentCodeReferences: n ? r : void 0
                                    })
                                }
                            }
                        }, [t]), {
                            focusedSearchResult: o,
                            setFocusedSearchResult: a,
                            searchResults: r,
                            setSearchResults: i,
                            searchStatus: s
                        }
                    }(_, n),
                    {
                        headerInfo: {
                            toc: U
                        }
                    } = t,
                    q = (0, v.useMemo)(() => ({
                        value: !1
                    }), [_]);
                q.value = !p || q.value;
                let K = void 0 !== p && _ && s && !(0 === _.symbols.length && "codeNav" === p && !q.value) && !(!U && "toc" === p),
                    Y = K ? p : void 0;
                return (0, v.useEffect)(() => {
                    p && !K && x(void 0)
                }, [p, x, K]), (0, v.useEffect)(() => {
                    try {
                        (0, ef.qP)("blob-size", {
                            lines: t.stylingDirectives ? .length,
                            truncatedSloc: t.headerInfo ? .lineInfo.truncatedSloc,
                            truncatedLoc: t.headerInfo ? .lineInfo.truncatedLoc,
                            length: t.rawLines ? .reduce((e, t) => e + t.length, 0) ? ? 0,
                            humanLength: t.headerInfo ? .blobSize
                        })
                    } catch (e) {}
                }, [t]), (0, f.jsx)(ev.d, {
                    blob: t,
                    children: (0, f.jsx)(ew.M, {
                        blame: e,
                        children: (0, f.jsxs)(eN.S6, {
                            children: [_ && (0, f.jsx)(rF, {
                                codeNavInfo: _
                            }), (0, f.jsx)(rs, {}), (0, f.jsxs)(E.Z, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "row"
                                },
                                children: [(0, f.jsxs)(E.Z, {
                                    className: "container",
                                    sx: {
                                        width: "100%",
                                        height: "fit-content",
                                        minWidth: 0,
                                        mr: Y && _ ? 3 : 0
                                    },
                                    children: [(0, f.jsxs)(E.Z, {
                                        sx: {
                                            pl: 1,
                                            pb: 3
                                        },
                                        className: "react-code-size-details-banner",
                                        children: [(0, f.jsx)(nv, {
                                            className: "react-code-size-details-banner"
                                        }), (0, f.jsx)(t0.y, {
                                            copilotInfo: l,
                                            className: "react-code-size-details-banner",
                                            view: e ? "blame" : "preview"
                                        })]
                                    }), (0, f.jsx)(E.Z, {
                                        className: "react-blob-view-header-sticky",
                                        sx: u,
                                        id: eB.TZ,
                                        ref: d,
                                        children: (0, f.jsx)(n9, {
                                            currentStickyLines: R,
                                            focusedSearchResult: W,
                                            openPanel: Y,
                                            searchingText: A,
                                            searchResults: H,
                                            searchTerm: n,
                                            setFocusedSearchResult: z,
                                            setOpenPanel: x,
                                            setSearchTerm: r,
                                            showTree: o,
                                            stickyHeaderRef: d,
                                            treeToggleElement: a,
                                            validCodeNav: s,
                                            copilotInfo: l
                                        })
                                    }), (0, f.jsx)(E.Z, {
                                        sx: {
                                            border: "1px solid",
                                            borderTop: "none",
                                            borderColor: "border.default",
                                            borderRadius: "0px 0px 6px 6px",
                                            minWidth: "273px"
                                        },
                                        children: (0, f.jsx)(tX, {
                                            blobLinesHandle: y,
                                            setOpenPanel: x,
                                            validCodeNav: s,
                                            codeNavInfo: _,
                                            onCodeNavTokenSelected: O,
                                            onLineStickOrUnstick: Z,
                                            searchResults: H,
                                            setSearchTerm: r,
                                            focusedSearchResult: W
                                        })
                                    })]
                                }), Y && _ ? (0, f.jsxs)(f.Fragment, {
                                    children: [(0, f.jsx)(E.Z, {
                                        sx: {
                                            pb: "33px"
                                        }
                                    }), (0, f.jsx)(rE, {
                                        stickySx: u,
                                        stickyHeaderRef: d,
                                        openPanel: Y,
                                        isCodeNavLoading: B,
                                        codeNavInfo: _,
                                        setOpenPanel: x,
                                        showCodeNavWithSymbol: D,
                                        searchingText: A,
                                        setSearchingText: P,
                                        searchTerm: n,
                                        searchResults: H,
                                        searchStatus: M,
                                        setSearchResults: $,
                                        setSearchTerm: r,
                                        setFocusedSearchResult: z,
                                        autoFocusSearch: h
                                    })]
                                }) : null]
                            })]
                        })
                    })
                })
            }

            function rF({
                codeNavInfo: e
            }) {
                let {
                    sendRepoKeyDownEvent: t
                } = (0, V.a)(), {
                    findSymbolShortcut: n
                } = (0, ek.bx)(), {
                    setOpenPanel: r
                } = ej();
                return 0 === e.symbols.length ? null : (0, f.jsx)(ep.P, {
                    buttonFocusId: eZ.KG,
                    buttonHotkey: n.hotkey,
                    onButtonClick: () => {
                        r("codeNav"), (0, G.eS)(), t("FIND_SYMBOL")
                    }
                })
            }
            try {
                rD.displayName || (rD.displayName = "BlobViewContent")
            } catch {}
            try {
                rF.displayName || (rF.displayName = "FindSymbolShortcut")
            } catch {}
            var rO = n(64071);
            let rA = v.createContext({});

            function rP() {
                return v.useContext(rA)
            }

            function rM({
                payload: e,
                children: t
            }) {
                return (0, f.jsx)(rA.Provider, {
                    value: e,
                    children: t
                })
            }
            try {
                rA.displayName || (rA.displayName = "TreeContext")
            } catch {}
            try {
                rM.displayName || (rM.displayName = "CurrentTreeProvider")
            } catch {}

            function rH() {
                let e = (0, C.T)(),
                    t = "blame" in e ? e.blame : void 0;
                return (0, f.jsxs)(ew.M, {
                    blame: t,
                    children: [(0, f.jsx)(r$, {}), (0, f.jsx)(rz, {})]
                })
            }

            function r$() {
                let e = (0, j.H)(),
                    t = (0, eC.Br)().refInfo.name,
                    n = (0, ew.Q)(),
                    [r, i] = v.useState(!0);
                if (!n) return null;
                let o = n ? .ignoreRevs,
                    a = n ? .errorType;
                return a ? (0, f.jsx)(f.Fragment, {
                    children: r && (0, f.jsxs)(nP.Z, {
                        variant: "warning",
                        sx: {
                            mt: 3
                        },
                        children: [(0, f.jsx)(H.Z, {
                            icon: A.InfoIcon
                        }), (0, f.jsx)(rW, {
                            blameErrorType: a,
                            renderIgnoreRefsLink: () => (0, f.jsx)(e7.r, {
                                to: (0, w.C9)({
                                    repo: e.name,
                                    owner: e.ownerLogin,
                                    commitish: t,
                                    filePath: o.path
                                }),
                                children: o.path
                            })
                        }), (0, f.jsx)(E.Z, {
                            sx: {
                                float: "right",
                                cursor: "pointer"
                            },
                            onClick: () => i(!1),
                            children: (0, f.jsx)(H.Z, {
                                icon: A.XIcon
                            })
                        })]
                    })
                }) : null
            }

            function rW({
                blameErrorType: e,
                renderIgnoreRefsLink: t
            }) {
                switch (e) {
                    case "invalid_ignore_revs":
                        return (0, f.jsxs)($.Z, {
                            children: ["Your ", t(), " file is invalid."]
                        });
                    case "ignore_revs_too_big":
                        return (0, f.jsxs)($.Z, {
                            children: ["Your ", t(), " file is too large."]
                        });
                    case "symlink_disallowed":
                        return (0, f.jsx)($.Z, {
                            children: "Symlinks are not supported."
                        });
                    case "blame_timeout":
                        return (0, f.jsx)($.Z, {
                            children: "Your blame took too long to compute."
                        });
                    default:
                        e$(e)
                }
            }

            function rz() {
                let e = (0, j.H)(),
                    t = (0, eC.Br)().refInfo.name,
                    n = ew.Q() ? .ignoreRevs,
                    [r, i] = v.useState(!0);
                if (!n ? .present) return null;
                let o = (0, f.jsx)(e7.r, {
                    to: (0, w.C9)({
                        repo: e.name,
                        owner: e.ownerLogin,
                        commitish: t,
                        filePath: n.path
                    }),
                    children: n.path
                });
                return (0, f.jsx)(f.Fragment, {
                    children: r && (0, f.jsxs)(nP.Z, {
                        sx: {
                            mt: 3
                        },
                        children: [(0, f.jsx)(H.Z, {
                            icon: A.InfoIcon
                        }), n.timedOut ? (0, f.jsxs)($.Z, {
                            children: ["Failed to ignore revisions in ", o, "."]
                        }) : (0, f.jsxs)($.Z, {
                            children: ["Ignoring revisions in ", o, "."]
                        }), (0, f.jsx)(E.Z, {
                            sx: {
                                float: "right",
                                cursor: "pointer"
                            },
                            onClick: () => i(!1),
                            children: (0, f.jsx)(H.Z, {
                                icon: A.XIcon
                            })
                        })]
                    })
                })
            }
            try {
                rH.displayName || (rH.displayName = "BlameBanners")
            } catch {}
            try {
                r$.displayName || (r$.displayName = "BlameErrorBanner")
            } catch {}
            try {
                rW.displayName || (rW.displayName = "BlameErrorText")
            } catch {}
            try {
                rz.displayName || (rz.displayName = "IgnoreRevsBanner")
            } catch {}

            function rU({
                showPublishActionBanner: e,
                showPublishStackBanner: t,
                releasePath: n,
                dismissActionNoticePath: r,
                dismissStackNoticePath: i,
                sx: o
            }) {
                let [a, s] = (0, v.useState)(!1);
                return e || t ? (0, f.jsxs)(nP.Z, {
                    sx: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        mt: 3,
                        ...o
                    },
                    hidden: a,
                    children: [e ? (0, f.jsx)(E.Z, {
                        sx: {
                            flexGrow: 1
                        },
                        children: "You can publish this Action to the GitHub Marketplace"
                    }) : (0, f.jsxs)(E.Z, {
                        sx: {
                            flexGrow: 1
                        },
                        children: [(0, f.jsxs)(E.Z, {
                            as: "h5",
                            children: [(0, f.jsx)(H.Z, {
                                icon: A.StackIcon
                            }), "Publish this stack as a release"]
                        }), (0, f.jsx)(E.Z, {
                            sx: {
                                fontSize: 0
                            },
                            children: "Make your stack discoverable in releases and the GitHub Marketplace. People will use it to create new repositories."
                        })]
                    }), (0, f.jsx)(t4.Q, {
                        href: n,
                        sx: {
                            fontSize: 0,
                            mr: 2,
                            ...t9.A
                        },
                        children: "Draft a release"
                    }), (0, f.jsx)(P.h, {
                        icon: A.XIcon,
                        "aria-label": "Dismiss",
                        onClick: e ? () => {
                            (0, eD.Q)(r, {
                                method: "POST"
                            }), s(!0)
                        } : () => {
                            (0, eD.Q)(i, {
                                method: "POST"
                            }), s(!0)
                        },
                        sx: {
                            backgroundColor: "transparent",
                            border: 0,
                            pr: 0
                        },
                        title: "Dismiss"
                    })]
                }) : null
            }
            try {
                rU.displayName || (rU.displayName = "PublishBanners")
            } catch {}
            var rG = n(50299);

            function rV({
                errors: e
            }) {
                if (!e || 0 === e.length) return null;
                let t = [];
                return 1 === e.length ? t.push("Learn more about this error.") : e.map((e, n) => {
                    t.push(`Learn more about error ${n+1}.`)
                }), (0, f.jsxs)(nP.Z, {
                    variant: "danger",
                    sx: {
                        mt: 3
                    },
                    children: [(0, f.jsxs)("p", {
                        children: [(0, f.jsx)(H.Z, {
                            icon: A.AlertIcon
                        }), (0, f.jsxs)("strong", {
                            children: ["There ", 1 === e.length ? "is a problem" : "are some problems", " with this template"]
                        })]
                    }), e.map((e, n) => (0, f.jsxs)("p", {
                        children: [(0, f.jsx)(ez.WZ, {
                            html: e.message
                        }), ". ", (0, f.jsx)(eo.Z, {
                            href: e.link,
                            target: "_blank",
                            children: t[n]
                        })]
                    }, `error-${n}`))]
                })
            }
            try {
                rV.displayName || (rV.displayName = "DiscussionTemplateBanner")
            } catch {}

            function rq() {
                let e;
                let t = (0, ev.G)(),
                    n = t.issueTemplate;
                if (!t.loggedIn || !n && !t.isValidLegacyIssueTemplate && !t.showIssueFormWarning) return null;
                let r = null,
                    i = [];
                return n ? !1 === n.valid ? (e = "danger", n.errors && (1 === n.errors.length ? i.push("Learn more about this error.") : n.errors.map((e, t) => {
                    i.push(`Learn more about error ${t+1}.`)
                })), r = (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsxs)("p", {
                        children: [(0, f.jsx)(H.Z, {
                            icon: A.AlertIcon
                        }), (0, f.jsxs)("strong", {
                            children: ["There ", n.errors ? .length === 1 ? "is a problem" : "are some problems", " with this template"]
                        })]
                    }), n.errors ? .map((e, t) => f.jsxs("p", {
                        children: [f.jsx(ez.WZ, {
                            html: e.message
                        }), ". ", f.jsx(eo.Z, {
                            href: e.link,
                            target: "_blank",
                            children: i[t]
                        })]
                    }, `error-${t}`))]
                })) : r = n.structured ? (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsx)(ne.Z, {
                        sx: {
                            mr: 2
                        },
                        variant: "success",
                        children: "Beta"
                    }), "This file is used as an Issue Form template.", " ", (0, f.jsx)("a", {
                        href: "https://github.com/orgs/community/discussions/categories/projects-and-issues",
                        children: "Give Feedback."
                    })]
                }) : "This file is used as a markdown issue template." : t.showIssueFormWarning && (r = "Issue form templates are not supported on private repositories.", e = "warning"), (0, f.jsxs)(f.Fragment, {
                    children: [(n || t.showIssueFormWarning) && (0, f.jsx)(nP.Z, {
                        variant: e,
                        sx: {
                            mt: 3
                        },
                        children: r
                    }), t.isValidLegacyIssueTemplate && (0, f.jsx)(rK, {
                        helpUrl: t.issueTemplateHelpUrl
                    })]
                })
            }

            function rK({
                helpUrl: e
            }) {
                return (0, f.jsxs)(nP.Z, {
                    variant: "warning",
                    sx: {
                        mt: 3
                    },
                    children: ["You are using an old version of issue templates. Please update to the new issue template workflow.", " ", (0, f.jsx)(eo.Z, {
                        href: e,
                        target: "_blank",
                        children: "Learn more about issue templates."
                    })]
                })
            }
            try {
                rq.displayName || (rq.displayName = "IssueTemplateBanner")
            } catch {}
            try {
                rK.displayName || (rK.displayName = "LegacyIssueTemplateBanner")
            } catch {}

            function rY() {
                let e = (0, j.H)(),
                    {
                        refInfo: t,
                        path: n
                    } = (0, eC.Br)(),
                    {
                        csvError: r,
                        isCodeownersFile: i,
                        publishBannersInfo: {
                            showPublishActionBanner: o,
                            showPublishStackBanner: a,
                            releasePath: s,
                            dismissActionNoticePath: l,
                            dismissStackNoticePath: c
                        },
                        discussionTemplate: d
                    } = (0, ev.G)(),
                    [u, h] = (0, v.useState)([]),
                    [m, p] = (0, v.useState)(rG.hL.LOADING),
                    x = (0, v.useRef)(0);
                return (0, v.useEffect)(() => {
                    x.current++;
                    let r = async () => {
                        try {
                            let r = x.current,
                                i = await (0, rG.Xj)(e, t, n);
                            if (r < x.current) return;
                            if (i.ok) {
                                let e = await i.json();
                                h(e.map(e => (0, rG.ew)(e))), p(rG.hL.VALIDATED)
                            } else p(rG.hL.ERROR)
                        } catch (e) {
                            p(rG.hL.ERROR)
                        }
                    };
                    i && r()
                }, [i, e, t, n]), (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsx)(rU, {
                        showPublishActionBanner: o,
                        showPublishStackBanner: a,
                        releasePath: s,
                        dismissActionNoticePath: l,
                        dismissStackNoticePath: c
                    }), (0, f.jsx)(rq, {}), d ? .errors && d.errors.length > 0 && (0, f.jsx)(rV, { ...d
                    }), (0, f.jsx)(rQ, {}), i && (0, f.jsx)(e3.Provider, {
                        value: u,
                        children: (0, f.jsx)(rG.iC, {
                            errors: u,
                            state: m
                        })
                    }), r && (0, f.jsx)(rX, {
                        csvError: r
                    })]
                })
            }

            function rQ() {
                let {
                    truncated: e,
                    large: t,
                    image: n,
                    renderedFileInfo: r,
                    rawBlobUrl: i
                } = (0, ev.G)();
                return !e || t || n || r ? null : (0, f.jsxs)(nP.Z, {
                    sx: {
                        mt: 3
                    },
                    children: ["This file has been truncated, but you can ", (0, f.jsx)(eo.Z, {
                        href: i,
                        children: "view the full file"
                    }), "."]
                })
            }

            function rX({
                csvError: e
            }) {
                return (0, f.jsx)(nP.Z, {
                    sx: {
                        mt: 3
                    },
                    variant: "warning",
                    children: (0, f.jsx)(ez.wB, {
                        html: e
                    })
                })
            }
            try {
                rY.displayName || (rY.displayName = "BlobLowerBanners")
            } catch {}
            try {
                rQ.displayName || (rQ.displayName = "TruncatedBanner")
            } catch {}
            try {
                rX.displayName || (rX.displayName = "CSVErrorBanner")
            } catch {}

            function rJ() {
                let e = (0, j.H)(),
                    {
                        refInfo: t,
                        path: n
                    } = (0, eC.Br)(),
                    [r] = (0, ri.f)(e.ownerLogin, e.name, t.name, n);
                return r ? .isSpoofed ? (0, f.jsxs)(nP.Z, {
                    variant: "warning",
                    sx: {
                        mt: 3
                    },
                    children: [(0, f.jsx)(H.Z, {
                        icon: A.AlertIcon
                    }), (0, f.jsx)($.Z, {
                        children: "This commit does not belong to any branch on this repository, and may belong to a fork outside of the repository."
                    })]
                }) : null
            }
            try {
                rJ.displayName || (rJ.displayName = "SpoofedCommitWarning")
            } catch {}

            function r0() {
                let {
                    topBannersInfo: {
                        repoName: e,
                        repoOwner: t
                    }
                } = (0, ev.G)(), {
                    license: n
                } = (0, nw.nO)(), r = {
                    permissions: {
                        icon: A.CheckIcon,
                        color: "success.fg"
                    },
                    limitations: {
                        icon: A.XIcon,
                        color: "danger.fg"
                    },
                    conditions: {
                        icon: A.InfoIcon,
                        color: "accent.fg"
                    }
                };
                return n ? (0, f.jsxs)(E.Z, {
                    sx: {
                        borderColor: "border.default",
                        borderStyle: "solid",
                        borderWidth: 1,
                        borderRadius: "6px",
                        mt: 3
                    },
                    children: [(0, f.jsxs)(E.Z, {
                        sx: {
                            display: "grid",
                            px: 3,
                            py: 1,
                            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                            gap: 2
                        },
                        className: "blob-license-banner-outer",
                        children: [(0, f.jsxs)(E.Z, {
                            sx: {
                                display: "flex",
                                flex: "1",
                                flexDirection: "column",
                                pr: 3
                            },
                            children: [(0, f.jsxs)(E.Z, {
                                sx: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [(0, f.jsx)(H.Z, {
                                    icon: A.LawIcon,
                                    size: 32
                                }), (0, f.jsxs)(E.Z, {
                                    sx: {
                                        display: "flex",
                                        flexDirection: "column",
                                        ml: 2
                                    },
                                    children: [(0, f.jsxs)(E.Z, {
                                        sx: {
                                            fontSize: 0,
                                            color: "fg.muted"
                                        },
                                        children: [`${t}/${e} is licensed under`, " ", n.name.toLowerCase().startsWith("the ") ? "" : " the"]
                                    }), (0, f.jsx)(E.Z, {
                                        as: "h3",
                                        children: n.name
                                    })]
                                })]
                            }), (0, f.jsx)(ez.wB, {
                                html: n.description,
                                sx: {
                                    fontSize: 0,
                                    color: "fg.muted",
                                    mt: 2,
                                    flexWrap: "wrap"
                                }
                            })]
                        }), (0, f.jsx)(E.Z, {
                            sx: {
                                display: "flex",
                                flex: "1"
                            },
                            children: Object.keys(n.rules).map((e, t) => (0, f.jsxs)(E.Z, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    flex: "1",
                                    pb: 3
                                },
                                children: [(0, f.jsx)(E.Z, {
                                    sx: {
                                        display: "flex",
                                        mb: 2
                                    },
                                    as: "h5",
                                    children: e.charAt(0).toUpperCase() + e.substring(1)
                                }), n.rules[e].map(t => (0, f.jsxs)(E.Z, {
                                    sx: {
                                        fontSize: 0
                                    },
                                    children: [(0, f.jsx)(H.Z, {
                                        icon: r[e].icon,
                                        size: 13,
                                        sx: {
                                            color: r[e].color,
                                            mr: 1
                                        }
                                    }), t.label]
                                }, t.tag))]
                            }, t))
                        })]
                    }), (0, f.jsxs)(E.Z, {
                        sx: {
                            borderTop: "1px solid",
                            borderColor: "border.default",
                            fontSize: 0,
                            px: 3,
                            py: 2
                        },
                        children: ["This is not legal advice.\xa0", (0, f.jsx)(eo.Z, {
                            href: n.helpUrl,
                            children: "Learn more about repository licenses"
                        })]
                    })]
                }) : null
            }
            try {
                r0.displayName || (r0.displayName = "BlobLicenseBanner")
            } catch {}

            function r1({
                citationHelpUrl: e
            }) {
                return (0, f.jsxs)(nP.Z, {
                    variant: "warning",
                    sx: {
                        mt: 3
                    },
                    children: ["Your ", (0, f.jsx)("strong", {
                        children: "CITATION.cff"
                    }), " file cannot be parsed. Make sure the formatting is correct.", " ", (0, f.jsx)(eo.Z, {
                        href: e,
                        children: "Learn more about CITATION files."
                    })]
                })
            }
            try {
                r1.displayName || (r1.displayName = "InvalidCitationWarning")
            } catch {}

            function r2({
                globalPreferredFundingPath: e
            }) {
                return (0, f.jsxs)(nP.Z, {
                    sx: {
                        mt: 3
                    },
                    children: ["This file is overriding the organization-wide ", (0, f.jsx)("code", {
                        children: "FUNDING.yml"
                    }), " file. Removing ", (0, f.jsx)("code", {
                        children: "FUNDING.yml"
                    }), " in this repository will use the organization default.", (0, f.jsx)(eo.Z, {
                        href: e ? ? void 0,
                        children: " View organization funding file."
                    })]
                })
            }
            try {
                r2.displayName || (r2.displayName = "OverridingGlobalFundingFileWarning")
            } catch {}

            function r3() {
                let {
                    topBannersInfo: {
                        overridingGlobalFundingFile: e,
                        globalPreferredFundingPath: t,
                        showInvalidCitationWarning: n,
                        citationHelpUrl: r
                    }
                } = (0, ev.G)(), {
                    showLicenseMeta: i
                } = (0, nw.nO)();
                return (0, f.jsxs)(E.Z, {
                    children: [i && (0, f.jsx)(r0, {}), n && (0, f.jsx)(r1, {
                        citationHelpUrl: r
                    }), (0, f.jsx)(rJ, {}), e && (0, f.jsx)(r2, {
                        globalPreferredFundingPath: t
                    })]
                })
            }
            try {
                r3.displayName || (r3.displayName = "BlobMidBanners")
            } catch {}
            var r4 = n(62719);

            function r8() {
                let {
                    defaultBranch: e
                } = (0, j.H)(), {
                    refInfo: {
                        name: t
                    }
                } = (0, eC.Br)(), {
                    dependabotInfo: {
                        showConfigurationBanner: n
                    }
                } = (0, ev.G)();
                return n ? e === t ? (0, f.jsx)(r6, {}) : (0, f.jsx)(r5, {}) : null
            }

            function r6() {
                let {
                    dependabotInfo: {
                        configFilePath: e,
                        networkDependabotPath: t,
                        dismissConfigurationNoticePath: n,
                        configurationNoticeDismissed: r
                    }
                } = (0, ev.G)(), i = (0, v.useCallback)(() => (0, eD.Q)(n, {
                    method: "POST"
                }), [n]);
                return r ? null : (0, f.jsx)(E.Z, {
                    sx: {
                        position: "absolute",
                        zIndex: 2,
                        left: "50%",
                        transform: "translate(-50%, 0)"
                    },
                    children: (0, f.jsxs)(r4.Z, {
                        caret: "top",
                        sx: {
                            backgroundColor: "canvas.overlay",
                            width: 300,
                            p: 3
                        },
                        children: [(0, f.jsx)($.Z, {
                            as: "h5",
                            sx: {
                                mb: 1
                            },
                            children: "Dependabot"
                        }), (0, f.jsx)($.Z, {
                            as: "p",
                            sx: {
                                mb: 3
                            },
                            children: "Dependabot creates pull requests to keep your dependencies secure and up-to-date."
                        }), (0, f.jsxs)($.Z, {
                            as: "p",
                            sx: {
                                mb: 3
                            },
                            children: ["You can opt out at any time by removing the ", (0, f.jsx)("code", {
                                children: e
                            }), " config file."]
                        }), (0, f.jsxs)(E.Z, {
                            sx: {
                                display: "flex"
                            },
                            children: [(0, f.jsx)(nu.r, {
                                as: "a",
                                href: t,
                                children: "View update status"
                            }), (0, f.jsx)(nu.r, {
                                variant: "invisible",
                                sx: {
                                    color: "fg.muted",
                                    ml: 2
                                },
                                onClick: i,
                                children: "Dismiss"
                            })]
                        })]
                    })
                })
            }

            function r5() {
                let {
                    defaultBranch: e,
                    name: t,
                    ownerLogin: n
                } = (0, j.H)(), {
                    path: r
                } = (0, eC.Br)(), i = (0, w.C9)({
                    owner: n,
                    repo: t,
                    commitish: e,
                    filePath: r
                });
                return (0, f.jsxs)(nP.Z, {
                    variant: "warning",
                    children: [(0, f.jsxs)($.Z, {
                        as: "h5",
                        children: [(0, f.jsx)(H.Z, {
                            icon: A.AlertIcon
                        }), "Cannot configure Dependabot"]
                    }), (0, f.jsxs)($.Z, {
                        as: "p",
                        children: ["To configure Dependabot, you must use", " ", (0, f.jsx)(eo.Z, {
                            href: i,
                            children: "this repository's default branch"
                        })]
                    })]
                })
            }
            try {
                r8.displayName || (r8.displayName = "DependabotConfigurationBanner")
            } catch {}
            try {
                r6.displayName || (r6.displayName = "DefaultBranchDependabotConfigurationBanner")
            } catch {}
            try {
                r5.displayName || (r5.displayName = "DirectionsForNonDefaultBranch")
            } catch {}
            var r9 = n(98641);

            function r7({
                children: e,
                mediaUrl: t,
                mediaPreviewSrc: n,
                iconSvg: r,
                taskTitle: i,
                taskPath: o,
                org: a
            }) {
                return (0, f.jsxs)(E.Z, {
                    as: "section",
                    sx: {
                        position: "relative",
                        display: "flex",
                        borderColor: "border.muted",
                        borderStyle: "solid",
                        borderWidth: 1,
                        borderRadius: "6px",
                        backgroundColor: "canvas.subtle",
                        p: 3,
                        mt: 3
                    },
                    children: [(0, f.jsxs)(E.Z, {
                        sx: {
                            display: "flex"
                        },
                        children: [(0, f.jsx)(ie, {
                            iconSvg: r
                        }), (0, f.jsxs)(E.Z, {
                            sx: {
                                display: "flex",
                                flexDirection: "column",
                                ml: 3
                            },
                            children: [(0, f.jsxs)(r9.Z, {
                                children: [(0, f.jsx)(r9.Z.Item, {
                                    href: (0, w.lr)({
                                        owner: a
                                    }),
                                    children: "Tasks"
                                }), (0, f.jsx)(r9.Z.Item, {
                                    href: o,
                                    sx: {
                                        color: "fg.default"
                                    },
                                    children: i
                                })]
                            }), e]
                        })]
                    }), (0, f.jsx)(ir, {
                        mediaPreviewSrc: n,
                        mediaUrl: t
                    })]
                })
            }

            function ie({
                iconSvg: e
            }) {
                return (0, f.jsxs)(E.Z, {
                    sx: {
                        position: "relative",
                        maxHeight: 48
                    },
                    children: [(0, f.jsx)(ez.wB, {
                        html: e,
                        sx: {
                            width: 48,
                            height: 48,
                            background: "radial-gradient(circle, rgba(141, 123, 255, 1) 0%, rgba(123, 133, 255, 1) 48%, rgba(141, 123, 255, 1) 85%, rgba(141, 123, 255, 1) 98%)",
                            borderRadius: 2,
                            p: 1,
                            "& path": {
                                fill: "#fff"
                            }
                        }
                    }), (0, f.jsx)(it, {
                        size: 6,
                        color: "#6c84e9",
                        bottom: -7,
                        left: -7
                    }), (0, f.jsx)(it, {
                        size: 4,
                        color: "#9e7bff",
                        top: -4,
                        right: 4
                    }), (0, f.jsx)(it, {
                        size: 6,
                        color: "#6c84e9",
                        top: -7,
                        right: -8
                    })]
                })
            }

            function it({
                size: e,
                color: t,
                left: n,
                right: r,
                top: i,
                bottom: o
            }) {
                return (0, f.jsx)(E.Z, {
                    sx: {
                        position: "absolute",
                        width: e,
                        height: e,
                        borderRadius: "50%",
                        left: `${n}px`,
                        right: `${r}px`,
                        top: `${i}px`,
                        bottom: `${o}px`,
                        backgroundColor: t
                    }
                })
            }

            function ir({
                mediaUrl: e,
                mediaPreviewSrc: t
            }) {
                return !((S.iG ? .innerWidth ? ? 0) < k._G.xlarge) && e && t ? (0, f.jsx)(E.Z, {
                    sx: {
                        display: "flex",
                        alignItems: "center",
                        background: "center / contain no-repeat url(/images/modules/dashboard/onboarding/glow-1.png)",
                        minWidth: 500
                    },
                    className: "org-onboarding-tip-media",
                    children: (0, f.jsx)(eo.Z, {
                        href: e,
                        sx: {
                            display: "flex",
                            justifyContent: "center"
                        },
                        children: (0, f.jsx)("img", {
                            src: t,
                            alt: "Guidance",
                            loading: "lazy",
                            style: {
                                width: "50%",
                                height: "50%"
                            }
                        })
                    })
                }) : null
            }

            function ii({
                repo: e,
                owner: t
            }) {
                return (0, f.jsxs)(E.Z, {
                    children: [(0, f.jsx)($.Z, {
                        as: "h3",
                        sx: {
                            mb: 1
                        },
                        children: "Auto-assign new issue with GitHub Actions"
                    }), (0, f.jsxs)(E.Z, {
                        sx: {
                            color: "fg.muted"
                        },
                        children: [(0, f.jsxs)("p", {
                            children: ["The ", (0, f.jsx)($.Z, {
                                sx: {
                                    fontWeight: 600,
                                    fontFamily: "monospace"
                                },
                                children: "auto-assign.yml"
                            }), " file below lives inside your", " ", (0, f.jsx)($.Z, {
                                sx: {
                                    fontWeight: 600,
                                    fontFamily: "monospace"
                                },
                                children: "demo-repository"
                            }), " and defines when and how it\u2019s automatically triggered. This", " ", (0, f.jsx)("a", {
                                href: "https://github.com/marketplace/actions/auto-assign-issues-prs",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "\u201CAuto Assign\u201D workflow"
                            }), " ", "happens to add reviewers and assignees to issues and pull requests when they\u2019re opened in this repository."]
                        }), (0, f.jsxs)("p", {
                            children: ["You can see the results of this workflow in any", " ", (0, f.jsx)("a", {
                                href: (0, w.FL)({
                                    owner: t,
                                    repo: e,
                                    action: "issues"
                                }),
                                children: "issue"
                            }), " or", " ", (0, f.jsx)("a", {
                                href: (0, w.FL)({
                                    owner: t,
                                    repo: e,
                                    action: "pulls"
                                }),
                                children: "pull request"
                            }), " that you create in this repository, as it\u2019ll assign them to the specified members. And you can see a log of any workflows you run in", " ", (0, f.jsx)("a", {
                                href: (0, w.FL)({
                                    owner: t,
                                    repo: e,
                                    action: "actions"
                                }),
                                children: "your repository\u2019s \u201CActions\u201D tab."
                            })]
                        }), (0, f.jsxs)(E.Z, {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                mt: 3
                            },
                            children: [(0, f.jsx)(t4.Q, {
                                variant: "primary",
                                href: (0, w.FL)({
                                    owner: t,
                                    repo: e,
                                    action: "issues/new"
                                }),
                                sx: t9.A,
                                children: "Create new issue to see results"
                            }), (0, f.jsxs)(eo.Z, {
                                sx: {
                                    ml: 4
                                },
                                href: "https://docs.github.com/en/actions",
                                target: "_blank",
                                children: [(0, f.jsx)(H.Z, {
                                    icon: A.FileIcon,
                                    sx: {
                                        mr: 1
                                    }
                                }), "Learn how automation works on GitHub"]
                            })]
                        })]
                    })]
                })
            }
            try {
                r7.displayName || (r7.displayName = "OrgOnboardingTip")
            } catch {}
            try {
                ie.displayName || (ie.displayName = "SuggestIcon")
            } catch {}
            try {
                it.displayName || (it.displayName = "Bubble")
            } catch {}
            try {
                ir.displayName || (ir.displayName = "Media")
            } catch {}
            try {
                ii.displayName || (ii.displayName = "ActionsOnboardingPrompt")
            } catch {}

            function io({
                feature: e,
                featureName: t,
                repoIsFork: n,
                repoOwnedByCurrentUser: r,
                requestFullPath: i,
                showFreeOrgGatedFeatureMessage: o,
                showPlanSupportBanner: a,
                upgradeDataAttributes: s,
                upgradePath: l
            }) {
                let c = {};
                if (s)
                    for (let e in s) c[`data-${e}`] = s[e];
                return a ? (0, f.jsx)(nP.Z, {
                    variant: "warning",
                    sx: {
                        mt: 3
                    },
                    children: r ? n ? `This repository is a fork, and inherits the features of the parent repository. Contact the owner of the root repository to enable ${t||"this feature"}` : (0, f.jsxs)(E.Z, {
                        sx: {
                            display: "flex",
                            alignItems: "center"
                        },
                        children: [(0, f.jsx)($.Z, {
                            sx: {
                                flexGrow: 1
                            },
                            children: `Upgrade to GitHub Pro or make this repository public to enable ${t||"this feature"}.`
                        }), (0, f.jsx)(ia, {
                            dataAttributes: c,
                            individual: !0,
                            requestFullPath: i,
                            feature: e,
                            upgradePath: l
                        })]
                    }) : o ? (0, f.jsxs)(E.Z, {
                        sx: {
                            display: "flex",
                            alignItems: "center"
                        },
                        children: [(0, f.jsx)($.Z, {
                            sx: {
                                flexGrow: 1
                            },
                            children: `Upgrade to GitHub Team or make this repository public to enable ${t||"this feature"}.`
                        }), (0, f.jsx)(ia, {
                            dataAttributes: c,
                            individual: !1,
                            requestFullPath: i,
                            feature: e,
                            upgradePath: l
                        })]
                    }) : `Contact the owner of the repository to enable ${t||"this feature"}.`
                }) : null
            }

            function ia({
                dataAttributes: e,
                individual: t,
                requestFullPath: n,
                feature: r,
                upgradePath: i
            }) {
                return (0, f.jsx)(nu.r, { ...e,
                    "data-ga-click": `Change ${t?"individual":"organization"}, click to upgrade, ref_page:${n};ref_cta:Upgrade now;ref_loc:${r};location:${r};text:Upgrade now`,
                    onClick: () => {
                        location.href = i
                    },
                    children: "Upgrade now"
                })
            }
            try {
                io.displayName || (io.displayName = "PlanSupportBanner")
            } catch {}
            try {
                ia.displayName || (ia.displayName = "UpgradeButton")
            } catch {}

            function is() {
                let {
                    planSupportInfo: e,
                    topBannersInfo: t
                } = (0, ev.G)(), {
                    actionsOnboardingTip: n
                } = t, r = (0, j.H)();
                return (0, f.jsxs)(E.Z, {
                    sx: {
                        display: "flex",
                        flexDirection: "column"
                    },
                    children: [(0, f.jsx)(io, { ...e,
                        feature: "codeowners",
                        featureName: "CODEOWNERS"
                    }), (0, f.jsx)(r8, {}), n && (0, f.jsx)(r7, {
                        iconSvg: n.iconSvg,
                        mediaPreviewSrc: n.mediaPreviewSrc,
                        mediaUrl: n.mediaUrl,
                        taskTitle: n.taskTitle,
                        taskPath: n.taskPath,
                        org: n.orgName,
                        children: (0, f.jsx)(ii, {
                            owner: r.ownerLogin,
                            repo: r.name
                        })
                    })]
                })
            }
            try {
                is.displayName || (is.displayName = "BlobTopBanners")
            } catch {}

            function il({
                interactionLimitBanner: e
            }) {
                let t;
                let n = (0, j.H)();
                return t = e.usersHaveAccess ? "Users that have recently created their account will be unable to interact with the repository." : e.contributorsHaveAccess ? (0, f.jsxs)(f.Fragment, {
                    children: ["Users that have not previously ", (0, f.jsx)(eo.Z, {
                        href: (0, w.BK)(n),
                        children: "committed"
                    }), " to the", " ", n.defaultBranch, " branch of this repository will be unable to interact with the repository."]
                }) : (0, f.jsxs)(f.Fragment, {
                    children: ["Users that are not ", (0, f.jsx)(eo.Z, {
                        href: (0, w.IU)(n),
                        children: "collaborators"
                    }), " will not be able to interact with the repository."]
                }), (0, f.jsxs)(nP.Z, {
                    children: [(0, f.jsxs)(E.Z, {
                        children: [(0, f.jsx)(H.Z, {
                            icon: A.ClockIcon,
                            sx: {
                                mr: 1
                            }
                        }), (0, f.jsx)($.Z, {
                            children: e.limitTitle
                        }), (0, f.jsx)(ne.Z, {
                            variant: "success",
                            sx: {
                                ml: 2
                            },
                            children: `${e.currentExpiry} remaining`
                        })]
                    }), (0, f.jsx)(E.Z, {
                        sx: {
                            mt: 2,
                            fontSize: 0
                        },
                        children: (0, f.jsx)($.Z, {
                            children: t
                        })
                    }), (0, f.jsxs)(E.Z, {
                        sx: {
                            display: "flex",
                            my: 2,
                            flexWrap: "wrap",
                            fontSize: 0
                        },
                        children: [(0, f.jsx)(ic, {
                            userRole: "New users",
                            access: !1
                        }), (0, f.jsx)(ic, {
                            userRole: "Users",
                            access: e.usersHaveAccess
                        }), (0, f.jsx)(ic, {
                            userRole: "Contributors",
                            access: e.contributorsHaveAccess
                        }), (0, f.jsx)(ic, {
                            userRole: "Collaborators",
                            access: !0
                        }), e.inOrganization && (0, f.jsx)(ic, {
                            userRole: "Organization members",
                            access: !0
                        })]
                    }), e.adminText && e.adminLink && e.disablePath && (0, f.jsxs)(E.Z, {
                        sx: {
                            mt: 2,
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                            fontSize: 0
                        },
                        children: [(0, f.jsx)(nu.r, {
                            onClick: async () => {
                                let t = new FormData;
                                t.append("interaction_setting", "NO_LIMIT"), t.append("_method", "put"), await (0, eD.Q)(e.disablePath, {
                                    body: t,
                                    method: "POST",
                                    redirect: "manual"
                                }), window.location.reload()
                            },
                            children: "Disable"
                        }), (0, f.jsxs)(E.Z, {
                            sx: {
                                whiteSpace: "pre"
                            },
                            children: ["\xa0or view\xa0", (0, f.jsx)(eo.Z, {
                                href: e.adminLink,
                                children: e.adminText
                            })]
                        })]
                    })]
                })
            }

            function ic({
                userRole: e,
                access: t
            }) {
                return (0, f.jsxs)(E.Z, {
                    sx: {
                        mr: 3,
                        whiteSpace: "pre"
                    },
                    children: [(0, f.jsx)(H.Z, {
                        icon: t ? A.CheckIcon : A.XIcon,
                        sx: {
                            path: {
                                color: t ? "success.fg" : "danger.fg"
                            }
                        }
                    }), e]
                })
            }
            try {
                il.displayName || (il.displayName = "InterractionLimitsBanner")
            } catch {}
            try {
                ic.displayName || (ic.displayName = "RoleInteractionIndicator")
            } catch {}

            function id({
                inviterName: e
            }) {
                let {
                    ownerLogin: t,
                    name: n
                } = (0, j.H)();
                return (0, f.jsx)(nP.Z, {
                    children: (0, f.jsxs)(E.Z, {
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            gap: 2
                        },
                        children: [(0, f.jsxs)(E.Z, {
                            sx: {
                                flexGrow: 1,
                                alignItems: "center"
                            },
                            children: [(0, f.jsxs)(eo.Z, {
                                href: (0, w.lr)({
                                    owner: e
                                }),
                                "data-hovercard-url": (0, w.zP)({
                                    owner: e
                                }),
                                sx: {
                                    color: "fg.default",
                                    fontWeight: "bold"
                                },
                                children: ["@", e]
                            }), "\xa0has invited you to collaborate on this repository"]
                        }), (0, f.jsx)(f.Fragment, {
                            children: (0, f.jsx)(t4.Q, {
                                href: (0, w.wy)({
                                    owner: t,
                                    repo: n
                                }),
                                sx: t9.A,
                                children: "View invitation"
                            })
                        })]
                    })
                })
            }
            try {
                id.displayName || (id.displayName = "PendingInvitationBanner")
            } catch {}

            function iu({
                helpUrl: e,
                rulesetsUpsell: t
            }) {
                let {
                    refInfo: n
                } = (0, eC.Br)(), r = (0, j.H)(), i = `${e}${t?"/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets":"/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches"}`, o = (0, F.x)(), a = () => {
                    if (!o) return;
                    let e = (0, w.xv)({
                            login: o.login
                        }),
                        t = new FormData;
                    t.append("_method", "delete"), t.append("repository_id", r.id.toString()), t.append("notice_name", "sculk_protect_this_branch"), (0, eD.Q)(e, {
                        method: "POST",
                        body: t
                    }), l(!0)
                }, [s, l] = v.useState(!1), [c] = (0, e2.D)(() => !1, !0, []), d = ih("click_to_learn_more_about_branch_protection_rules", "ref_cta:learn_more_about_protected_branches", r, c), u = ih("click_to_learn_more_about_rulesets", "ref_cta:learn_more_about_rulesets", r, c), h = ih("click_to_add_a_rule", "ref_cta:protect_this_branch", r, c), m = ih("click_to_dismiss", "ref_cta:dismiss", r, c), p = t ? (0, w.uP)({
                    owner: r.ownerLogin,
                    repo: r.name
                }) : (0, w.CY)({
                    owner: r.ownerLogin,
                    repo: r.name,
                    branchName: n.name
                });
                return (0, f.jsx)(E.Z, {
                    sx: {
                        borderColor: "border.default",
                        borderStyle: "solid",
                        borderWidth: 1,
                        borderRadius: "6px"
                    },
                    hidden: s,
                    children: (0, f.jsxs)(E.Z, {
                        sx: {
                            display: "flex",
                            alignItems: ["start", "center", "start", "center"],
                            px: 3,
                            py: 3
                        },
                        children: [(0, f.jsx)(H.Z, {
                            icon: A.GitBranchIcon,
                            size: "medium",
                            sx: {
                                mr: 2,
                                mt: 1
                            }
                        }), (0, f.jsxs)(E.Z, {
                            sx: {
                                display: "flex",
                                flexDirection: ["column", "row", "column", "row"],
                                width: "100%"
                            },
                            children: [(0, f.jsxs)(E.Z, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    mb: 2,
                                    flexGrow: 1,
                                    flexBasis: 0
                                },
                                children: [(0, f.jsxs)($.Z, {
                                    sx: {
                                        ml: 2,
                                        fontWeight: 600,
                                        fontSize: 2,
                                        mb: 1
                                    },
                                    children: ["Your ", n.name, " branch isn't protected"]
                                }), (0, f.jsxs)($.Z, {
                                    sx: {
                                        ml: 2,
                                        color: "fg.muted"
                                    },
                                    children: ["Protect this branch from force pushing or deletion, or require status checks before merging.\xa0", (0, f.jsx)(eo.Z, {
                                        href: i,
                                        "data-analytics-event": t ? u : d,
                                        children: "View documentation."
                                    })]
                                })]
                            }), (0, f.jsxs)(E.Z, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 2,
                                    pl: 2
                                },
                                children: [(0, f.jsx)(t4.Q, {
                                    href: p,
                                    sx: t9.A,
                                    "data-analytics-event": h,
                                    children: "Protect this branch"
                                }), (0, f.jsx)(nu.r, {
                                    onClick: a,
                                    "data-analytics-event": m,
                                    sx: {
                                        display: ["inherit", "none", "inherit", "none"]
                                    },
                                    children: "Dismiss"
                                }), (0, f.jsx)(P.h, {
                                    "aria-label": "Dismiss banner",
                                    icon: A.XIcon,
                                    variant: "invisible",
                                    onClick: a,
                                    "data-analytics-event": m,
                                    sx: {
                                        display: ["none", "inherit", "none", "inherit"],
                                        color: "fg.muted"
                                    }
                                })]
                            })]
                        })]
                    })
                })
            }

            function ih(e, t, n, r) {
                return JSON.stringify({
                    category: "Suggestions",
                    action: e,
                    label: `ref_page:${r?`https://github.com${(0,w.IY)(n)}`:window.location};${t};ref_loc:repo files listing;`
                })
            }
            try {
                iu.displayName || (iu.displayName = "ProtectBranchBanner")
            } catch {}

            function im({
                actionSlug: e,
                actionId: t
            }) {
                let {
                    sendMarketplaceActionEvent: n
                } = (0, V.a)();
                return (0, f.jsx)(nP.Z, {
                    children: (0, f.jsxs)(E.Z, {
                        sx: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 2
                        },
                        children: [(0, f.jsxs)(E.Z, {
                            sx: {
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1
                            },
                            children: [(0, f.jsxs)(E.Z, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center"
                                },
                                children: [(0, f.jsx)(H.Z, {
                                    icon: A.PlayIcon,
                                    size: "small"
                                }), (0, f.jsx)($.Z, {
                                    sx: {
                                        fontWeight: 600
                                    },
                                    children: "Use this GitHub action with your project"
                                })]
                            }), (0, f.jsx)($.Z, {
                                sx: {
                                    fontSize: 0
                                },
                                children: "Add this Action to an existing workflow or create a new one"
                            })]
                        }), (0, f.jsx)(t4.Q, {
                            href: (0, w.J9)({
                                slug: e
                            }),
                            sx: t9.A,
                            onClick: () => n("MARKETPLACE.ACTION.CLICK", {
                                repository_action_id: t,
                                source_url: `${window.location}`,
                                location: "files#overview"
                            }),
                            children: "View on Marketplace"
                        })]
                    })
                })
            }
            try {
                im.displayName || (im.displayName = "UseActionBanner")
            } catch {}

            function ip({
                payload: e
            }) {
                return g(e) ? (0, f.jsx)(ix, {
                    overview: e.overview
                }) : b(e) ? (0, f.jsx)(iy, {
                    tree: e.tree
                }) : p(e) ? (0, f.jsx)(ig, {
                    blob: e.blob
                }) : null
            }

            function ix({
                overview: e
            }) {
                let {
                    showUseActionBanner: t,
                    showProtectBranchBanner: n,
                    actionId: r,
                    actionSlug: i,
                    publishBannersInfo: {
                        dismissActionNoticePath: o,
                        dismissStackNoticePath: a,
                        releasePath: s,
                        showPublishActionBanner: l,
                        showPublishStackBanner: c
                    },
                    interactionLimitBanner: d,
                    showInvitationBanner: u,
                    inviterName: h
                } = e.banners, {
                    helpUrl: m
                } = e;
                return (0, f.jsxs)(E.Z, {
                    sx: {
                        mb: d || u && h || l || c || t && i && r || n ? 3 : 0,
                        display: "flex",
                        flexDirection: "column",
                        rowGap: 3
                    },
                    children: [d && (0, f.jsx)(il, {
                        interactionLimitBanner: d
                    }), u && h && (0, f.jsx)(id, {
                        inviterName: h
                    }), (0, f.jsx)(rU, {
                        showPublishActionBanner: l,
                        showPublishStackBanner: c,
                        releasePath: s,
                        dismissActionNoticePath: o,
                        dismissStackNoticePath: a,
                        sx: {
                            mt: 0
                        }
                    }), t && i && r && (0, f.jsx)(im, {
                        actionSlug: i,
                        actionId: r
                    }), n && (0, f.jsx)(iu, {
                        helpUrl: m,
                        rulesetsUpsell: e.rulesetsUpsell
                    })]
                })
            }

            function iy({
                tree: e
            }) {
                return (0, f.jsxs)(rM, {
                    payload: e,
                    children: [(0, f.jsx)(rJ, {}), (0, f.jsx)(ib, {}), (0, f.jsx)(ij, {})]
                })
            }

            function ig({
                blob: e
            }) {
                return (0, f.jsxs)(ev.d, {
                    blob: e,
                    children: [(0, f.jsx)(is, {}), (0, f.jsx)(r3, {}), (0, f.jsx)(rY, {}), (0, f.jsx)(rH, {}), (0, f.jsx)(ij, {})]
                })
            }

            function ib() {
                let {
                    items: e,
                    totalCount: t
                } = rP(), n = t - e.length;
                return n > 0 ? (0, f.jsxs)(nP.Z, {
                    variant: "warning",
                    "data-testid": "repo-truncation-warning",
                    sx: {
                        mt: 3
                    },
                    children: ["Sorry, we had to truncate this directory to ", e.length.toLocaleString(), " files. ", n.toLocaleString(), " ", 1 === n ? "entry was" : "entries were", " omitted from the list. Latest commit info may be omitted."]
                }) : null
            }

            function ij() {
                let e = (0, rO.KG)(),
                    t = "";
                for (let n of e) t += n.message;
                return (0, eZ.dM)(t), (0, f.jsx)(f.Fragment, {
                    children: e.map((e, t) => (0, f.jsx)(nP.Z, {
                        variant: e.variant,
                        sx: {
                            mt: 3
                        },
                        children: e.message
                    }, t))
                })
            }
            try {
                ip.displayName || (ip.displayName = "CodeViewBanners")
            } catch {}
            try {
                ix.displayName || (ix.displayName = "OverviewBanners")
            } catch {}
            try {
                iy.displayName || (iy.displayName = "TreeBanners")
            } catch {}
            try {
                ig.displayName || (ig.displayName = "BlobBanners")
            } catch {}
            try {
                ib.displayName || (ib.displayName = "TruncatedTreeBanner")
            } catch {}
            try {
                ij.displayName || (ij.displayName = "CodeViewContextBanners")
            } catch {}
            var iw = n(48170);

            function iv(e) {
                let t = (0, j.H)(),
                    {
                        refInfo: n
                    } = (0, eC.Br)();
                return (0, f.jsx)(E.Z, {
                    sx: {
                        minHeight: "100vh",
                        margin: 16
                    },
                    children: (0, f.jsxs)(E.Z, {
                        sx: {
                            border: "1px solid var(--borderColor-default, var(--color-border-default))",
                            borderRadius: "6px",
                            padding: 50,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column"
                        },
                        children: [(0, f.jsx)(H.Z, {
                            icon: A.AlertIcon,
                            sx: {
                                color: "fg.muted",
                                mb: 2
                            },
                            size: 20
                        }), (0, f.jsx)(iN, { ...e
                        }), (0, f.jsx)(t4.Q, {
                            type: "button",
                            sx: {
                                mt: 4,
                                ...t9.A
                            },
                            variant: "primary",
                            "aria-label": n.currentOid ? "go to Overview" : "go to default branch",
                            href: n.currentOid ? (0, w.IY)(t) : (0, w.sA)(t),
                            children: n.currentOid ? "Return to the repository overview" : "Go to default branch"
                        })]
                    })
                })
            }

            function iN({
                httpStatus: e,
                type: t
            }) {
                return (0, f.jsxs)(E.Z, {
                    sx: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 1,
                        textAlign: "center"
                    },
                    children: [(0, f.jsx)(E.Z, {
                        sx: {
                            fontSize: 4,
                            color: "fg.default",
                            fontWeight: "bold"
                        },
                        children: 404 === e ? "404 - page not found" : "Error loading page"
                    }), 404 === e ? (0, f.jsx)(iC, {}) : (0, f.jsx)(ik, {
                        httpStatus: e,
                        type: t
                    })]
                })
            }

            function iC() {
                let e = (0, j.H)(),
                    {
                        path: t,
                        refInfo: n
                    } = (0, eC.Br)();
                return n.currentOid ? (0, f.jsxs)(E.Z, {
                    sx: {
                        color: "fg.muted",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center"
                    },
                    "data-testid": "eror-404-description",
                    children: ["The\xa0", (0, f.jsx)(iw.Z, {
                        as: "p",
                        sx: {
                            mb: 0
                        },
                        children: n.name
                    }), "\xa0branch of\xa0", (0, f.jsx)($.Z, {
                        as: "p",
                        sx: {
                            fontWeight: "bold",
                            mb: 0
                        },
                        children: e.name
                    }), "\xa0does not contain the path\xa0", (0, f.jsxs)($.Z, {
                        as: "p",
                        sx: {
                            fontWeight: "bold",
                            mb: 0
                        },
                        children: [t, "."]
                    })]
                }) : (0, f.jsxs)(E.Z, {
                    sx: {
                        color: "fg.muted",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center"
                    },
                    "data-testid": "error-404-description",
                    children: ["Cannot find a valid ref in\xa0", (0, f.jsx)(iw.Z, {
                        as: "p",
                        sx: {
                            mb: 0
                        },
                        children: n.name
                    })]
                })
            }

            function ik({
                httpStatus: e,
                type: t
            }) {
                let n = e ? ` ${e} error` : "error";
                return "fetchError" === t ? (0, f.jsx)(E.Z, {
                    sx: {
                        fontSize: 1,
                        color: "fg.muted"
                    },
                    "data-testid": "fetch-error-description",
                    children: "It looks like your internet connection is down. Please check it."
                }) : (0, f.jsxs)(E.Z, {
                    sx: {
                        fontSize: 1,
                        color: "fg.muted"
                    },
                    "data-testid": "default-error-description",
                    children: ["An unexpected ", n, " occured. Try", (0, f.jsx)(eo.Z, {
                        onClick: () => window.location.reload(),
                        children: "\xa0reloading the page."
                    }, "reload-page")]
                })
            }
            try {
                iv.displayName || (iv.displayName = "CodeViewError")
            } catch {}
            try {
                iN.displayName || (iN.displayName = "ErrorText")
            } catch {}
            try {
                iC.displayName || (iC.displayName = "DescriptionText404")
            } catch {}
            try {
                ik.displayName || (ik.displayName = "DefaultDescriptionText")
            } catch {}
            var iS = n(9458),
                iI = n(57338),
                iR = n(40856),
                iZ = n(68912);

            function iT({
                diff: e,
                index: t
            }) {
                let [n, r] = (0, v.useState)(!1), [i, o] = (0, v.useState)(!1), [a, s] = (0, v.useState)(!1), l = [];
                for (let t = 0; t < 5; t++) e.deletions > t ? l.push("deletion") : l.push("neutral");
                return e.diffHTML ? (0, f.jsx)("div", {
                    id: "readme",
                    className: "readme prose-diff html-blob blob",
                    children: (0, f.jsx)(ez.wB, {
                        html: e.diffHTML,
                        className: "markdown-body container-lg"
                    })
                }) : (0, f.jsxs)(E.Z, {
                    sx: {
                        border: "1px solid",
                        borderColor: "border.default",
                        borderRadius: "6px",
                        mt: 3
                    },
                    id: `diff-entry-${t}`,
                    children: [(0, f.jsxs)(E.Z, {
                        sx: {
                            backgroundColor: "canvas.subtle",
                            borderBottom: "1px solid",
                            borderColor: "border.default",
                            display: "flex",
                            py: 1,
                            px: 2,
                            alignItems: "center",
                            gap: 2
                        },
                        children: [(0, f.jsx)(P.h, {
                            "aria-label": "Search",
                            icon: n ? A.ChevronRightIcon : A.ChevronDownIcon,
                            size: "small",
                            variant: "invisible",
                            onClick: () => r(!n)
                        }), (0, f.jsx)($.Z, {
                            sx: {
                                color: "fg.muted"
                            },
                            children: e.deletions
                        }), (0, f.jsx)(iS.Sv, {
                            squares: l
                        }), (0, f.jsx)(eo.Z, {
                            sx: {
                                color: "fg.default",
                                cursor: "pointer"
                            },
                            underline: !1,
                            href: `#diff-entry-${t}`,
                            children: e.path
                        }), (0, f.jsx)(iZ.m, {
                            textToCopy: e.path,
                            ariaLabel: "Copy path to clipboard"
                        })]
                    }), n ? null : (0, f.jsx)(E.Z, {
                        sx: {
                            px: i ? 0 : 3,
                            py: i ? 0 : 4,
                            position: "relative"
                        },
                        tabIndex: -1,
                        children: i ? (0, f.jsx)("include-fragment", {
                            "data-testid": "delete-diff-fragment",
                            src: e.loadDiffPath,
                            onLoad: () => s(!0),
                            children: !a && (0, f.jsx)(E.Z, {
                                sx: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "137px"
                                },
                                children: (0, f.jsx)(eq.Z, {})
                            })
                        }) : (0, f.jsxs)(f.Fragment, {
                            children: [(0, f.jsx)(iL, {}), (0, f.jsxs)(E.Z, {
                                sx: {
                                    position: "absolute",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    top: 0,
                                    left: 0,
                                    height: "100%",
                                    width: "100%"
                                },
                                children: [(0, f.jsx)(eo.Z, {
                                    onClick: () => o(!0),
                                    sx: {
                                        cursor: "pointer"
                                    },
                                    children: "Load diff"
                                }), "This file was deleted."]
                            })]
                        })
                    })]
                })
            }

            function iL() {
                return (0, f.jsx)(E.Z, {
                    as: "svg",
                    "aria-hidden": "true",
                    className: "width-full",
                    viewBox: "0 0 340 84",
                    xmlns: "http://www.w3.org/2000/svg",
                    sx: {
                        height: "84",
                        maxWidth: "340px"
                    },
                    children: (0, f.jsx)(E.Z, {
                        as: "path",
                        className: "js-diff-placeholder",
                        clipPath: "url(#diff-placeholder)",
                        d: "M0 0h340v84H0z",
                        fillRule: "evenodd",
                        sx: {
                            fill: "canvas.subtle"
                        }
                    })
                })
            }
            try {
                iT.displayName || (iT.displayName = "DiffEntry")
            } catch {}
            try {
                iL.displayName || (iL.displayName = "DiffPlaceholderSvg")
            } catch {}

            function iE({
                deleteInfo: e,
                webCommitInfo: t
            }) {
                let {
                    path: n
                } = (0, eC.Br)(), {
                    helpUrl: r
                } = (0, eC.Ou)(), i = (0, j.H)();
                return t.shouldFork || t.shouldUpdate || t.lockedOnMigration ? (0, f.jsx)(iR.P, {
                    binary: !1,
                    helpUrl: r,
                    webCommitInfo: t
                }) : (0, f.jsxs)(E.Z, {
                    sx: {
                        maxWidth: "1280px",
                        mx: "auto"
                    },
                    children: [(0, f.jsx)(_.Z, {
                        as: "h1",
                        className: "sr-only",
                        children: `Deleting ${e.isBlob?"":"directory "}${i.name}/${n}. Commit changes to save.`
                    }), (0, f.jsx)(iS.G7, {}), t.forkedRepo && (0, f.jsx)(iI.r, {
                        forkName: t.forkedRepo.name,
                        forkOwner: t.forkedRepo.owner
                    }), e.truncated && (0, f.jsx)(nP.Z, {
                        variant: "warning",
                        className: "mb-2",
                        children: "The diff you're trying to view is too large. We only load the first 1000 changed files."
                    }), e.diffs.map((e, t) => (0, f.jsx)(iT, {
                        diff: e,
                        index: t
                    }, t))]
                })
            }
            try {
                iE.displayName || (iE.displayName = "DeleteViewContent")
            } catch {}
            var iB = n(17338);
            let i_ = v.forwardRef(({
                expanded: e,
                onToggleExpanded: t,
                className: n,
                ariaControls: r
            }, i) => {
                let {
                    toggleTreeShortcut: o
                } = (0, ek.bx)(), [a] = (0, e2.D)(() => !1, !0, []);
                return (0, f.jsxs)(f.Fragment, {
                    children: [(!e || a) && (0, f.jsx)(nu.r, {
                        "aria-label": "Expand side panel",
                        leadingVisual: A.ArrowLeftIcon,
                        "data-hotkey": o.hotkey,
                        "data-testid": "expand-file-tree-button-mobile",
                        ref: i,
                        onClick: t,
                        variant: "invisible",
                        sx: {
                            color: "fg.muted",
                            px: 2,
                            display: "none",
                            "@media screen and (max-width: 768px)": {
                                display: "block"
                            }
                        },
                        children: "Files"
                    }), (0, f.jsx)(iB.V, {
                        dataHotkey: o.hotkey,
                        className: n,
                        expanded: e,
                        alignment: "left",
                        ariaLabel: "Side panel",
                        testid: "file-tree-button",
                        ariaControls: r,
                        ref: i,
                        onToggleExpanded: t,
                        sx: {
                            height: "32px",
                            position: "relative",
                            "@media screen and (max-width: 768px)": {
                                display: !e || a ? "none" : "flex"
                            }
                        }
                    }), (0, f.jsx)(ep.P, {
                        buttonFocusId: eZ.KG,
                        buttonHotkey: o.hotkey,
                        onButtonClick: t,
                        onlyAddHotkeyScopeButton: !0
                    })]
                })
            });
            i_.displayName = "ExpandFileTreeButton";
            var iD = n(17206),
                iF = n(13275),
                iO = n(8677),
                iA = n(12464);

            function iP({
                sx: e,
                onClick: t
            }) {
                let {
                    searchShortcut: n
                } = (0, ek.bx)();
                return (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsx)(P.h, {
                        "aria-label": "Search this repository",
                        icon: A.SearchIcon,
                        "data-hotkey": n.hotkey,
                        sx: {
                            color: "fg.subtle",
                            fontSize: 14,
                            fontWeight: "normal",
                            flexShrink: 0,
                            ...e
                        },
                        size: "medium",
                        onClick: e => {
                            t ? .(), (0, tw.n)({
                                retainScrollPosition: !0,
                                returnTarget: e.target.closest("button")
                            })
                        }
                    }), (0, f.jsx)(ep.P, {
                        buttonFocusId: eZ.KG,
                        buttonHotkey: n.hotkey,
                        onButtonClick: () => {
                            let e = document.getElementById(eZ.KG);
                            t ? .(), (0, tw.n)({
                                retainScrollPosition: !0,
                                returnTarget: e ? ? void 0
                            })
                        },
                        onlyAddHotkeyScopeButton: !0
                    })]
                })
            }
            try {
                iP.displayName || (iP.displayName = "SearchButton")
            } catch {}
            var iM = n(66523);
            let iH = (0, v.createContext)({
                knownFolders: new Map,
                dispatchKnownFolders: () => {}
            });
            try {
                iH.displayName || (iH.displayName = "FileTreeContext")
            } catch {}
            var i$ = n(52793),
                iW = n(41155),
                iz = n(31360),
                iU = n(70697);

            function iG(e, t, n) {
                e.data.name = e.data.name.slice(e.data.name.lastIndexOf("/") + 1, e.data.name.length);
                let r = t.name.slice(0, t.name.lastIndexOf("/")),
                    i = r.indexOf("/") > -1,
                    o = {
                        path: t.path.slice(0, t.path.lastIndexOf("/")),
                        contentType: t.contentType,
                        name: r,
                        hasSimplifiedPath: i
                    },
                    a = {
                        items: [e],
                        data: o
                    };
                return (n.set(o.path, a), i) ? iG(a, { ...o
                }, n) : a
            }

            function iV(e, t, n) {
                if (!e) return {
                    newRootItems: n,
                    rootItemsUpdated: !1
                };
                let r = iq("", t, n, e[""].items);
                for (let n of Object.keys(e).sort())
                    if (n) {
                        let r = t.get(n);
                        r && (iq(n, t, r.items, e[n].items), r.data.totalCount = e[n].totalCount)
                    }
                return {
                    newRootItems: n,
                    rootItemsUpdated: r
                }
            }

            function iq(e, t, n, r) {
                let i = !1;
                for (let o of r) {
                    let r = e ? `${e}/${o.name}` : o.name;
                    if (!t.get(r)) {
                        let e = {
                            items: [],
                            data: { ...o
                            }
                        };
                        if (t.set(r, e), o.hasSimplifiedPath) {
                            let r = iG(e, o, t),
                                a = n.findIndex(e => e.data.path === r.data.path); - 1 !== a ? r.items.length > n[a].items.length && (n[a] = r, i = !0) : n.push(r)
                        } else n.push(e)
                    }
                }
                return i
            }

            function iK({
                isActive: e,
                file: t,
                onItemSelected: n,
                getItemUrl: r,
                selectedItemRef: i,
                navigate: o,
                onRenderRow: a
            }) {
                let {
                    sendRepoClickEvent: s
                } = (0, V.a)(), l = v.useRef(null), c = (0, iW.a)({
                    focusRowRef: l,
                    mouseRowRef: l
                }), d = "submodule" === t.data.contentType, u = v.useCallback(i => {
                    d ? (i.preventDefault(), t.data.submoduleUrl && (window.location.href = t.data.submoduleUrl)) : i.metaKey || i.ctrlKey || 1 === i.button ? (window.open(r(t.data), "_blank"), i.preventDefault()) : e ? i.preventDefault() : (n ? .(), s("FILES_TREE.ITEM", {
                        item_path: t.data.path
                    }), o(r(t.data)), i.stopPropagation())
                }, [t.data, r, e, d, o, n, s]);
                return a ? .(), (0, f.jsxs)(q.L.Item, {
                    ref: l,
                    onSelect: u,
                    current: e,
                    id: `${t.data.path}-item`,
                    containIntrinsicSize: e ? void 0 : "auto 2rem",
                    children: [(0, f.jsx)(q.L.LeadingVisual, {
                        children: d ? (0, f.jsx)(A.FileSubmoduleIcon, {}) : (0, f.jsx)(A.FileIcon, {})
                    }), (0, f.jsxs)(f.Fragment, {
                        children: [(0, f.jsx)("span", {
                            ref: i,
                            style: {
                                color: d ? "var(--fgColor-accent, var(--color-accent-fg))" : void 0
                            },
                            children: t.data.name
                        }), c && (0, f.jsx)(i$.u, {
                            "data-testid": `${t.data.name}-item-tooltip`,
                            id: `${t.data.name}-item-tooltip`,
                            contentRef: l,
                            "aria-label": t.data.name,
                            open: !0,
                            direction: "ne"
                        })]
                    })]
                })
            }
            let iY = v.memo(iK);

            function iQ({
                directory: e,
                isActive: t,
                isAncestorOfActive: n,
                leadingPath: r = "",
                onItemSelected: i,
                dispatchKnownFolders: o,
                getItemUrl: a,
                selectedItemRef: s,
                navigate: l,
                onRenderRow: c
            }) {
                let [d, u] = (0, v.useState)(n), {
                    sendRepoClickEvent: h
                } = (0, V.a)(), m = v.useRef(null), p = v.useRef(null), x = (0, iW.a)({
                    focusRowRef: p,
                    mouseRowRef: m
                }), y = v.useCallback(n => {
                    n.metaKey || n.ctrlKey || 1 === n.button ? (window.open(a(e.data), "_blank"), n.preventDefault()) : t ? n.preventDefault() : (i ? .(), h("FILES_TREE.ITEM", {
                        item_path: e.data.path
                    }), l(a(e.data)), n.stopPropagation())
                }, [e.data, a, t, l, i, h]), [g, b, j, w, N, C, k] = function(e, t, n) {
                    let [r, i] = v.useState(e.items), [o, a] = v.useState(e.data.totalCount || 0), [s, l] = v.useState(!1), [c, d] = v.useState(!1), {
                        safeSetTimeout: u
                    } = (0, iU.Z)();
                    v.useEffect(() => {
                        i(e.items)
                    }, [e.items]), v.useEffect(() => {
                        void 0 !== e.data.totalCount && a(e.data.totalCount)
                    }, [e.data.totalCount]);
                    let h = v.useCallback(() => {
                            d(!1)
                        }, []),
                        m = v.useCallback((e, t) => {
                            let n = e || [...r];
                            i(n.slice(0, 100)), u(() => {
                                i(n), void 0 !== t && a(t)
                            }, 1)
                        }, [r, u]),
                        f = v.useCallback(async () => {
                            let r = n(e.data),
                                o = new Map;
                            d(!1), l(!0);
                            let s = Date.now(),
                                c = await (0, eD.v)(`${r}?noancestors=1`);
                            try {
                                if (c.ok) {
                                    let n = await c.json(),
                                        r = n.payload.tree.items.map(e => {
                                            let t = {
                                                items: [],
                                                data: { ...e
                                                },
                                                autoExpand: "directory" === e.contentType && 1 === n.payload.tree.items.length
                                            };
                                            if (o.set(e.path, t), e.hasSimplifiedPath) {
                                                let n = iG(t, e, o);
                                                return n
                                            }
                                            return t
                                        });
                                    t({
                                        type: "add",
                                        folders: o,
                                        processingTime: Date.now() - s
                                    }), e.items = r, e.data.totalCount = n.payload.tree.totalCount, r.length > 100 ? m(r, n.payload.tree.totalCount) : (i(r), a(n.payload.tree.totalCount))
                                } else d(!0)
                            } catch {
                                d(!0)
                            }
                            l(!1)
                        }, [n, e, t, m]);
                    return [f, m, r, s, c, h, o]
                }(e, o, a), S = k - j.length, I = r ? `${r}/` : "", R = v.useCallback(r => {
                    let i = r && !d;
                    !i || w || N || (e.items.length > 100 ? b() : 0 !== e.items.length || t || n || g()), r !== d && u(r)
                }, [d, w, N, e.items.length, t, n, b, g]);
                v.useEffect(() => {
                    n && !d && R ? .(!0)
                }, [n]), v.useEffect(() => {
                    0 === e.items.length && d ? R ? .(!1) : !d && e.autoExpand && R ? .(!0)
                }, [e.items.length]);
                let Z = v.useCallback(e => {
                    s && t && s(e), m.current = e
                }, [s, t]);
                return 1 === e.items.length && "directory" === e.items[0].data.contentType ? (0, f.jsx)(i0, {
                    directoryItems: e.items,
                    leadingPath: I + e.data.name,
                    inheritsActive: t,
                    dispatchKnownFolders: o,
                    onItemSelected: i,
                    selectedItemRef: s
                }) : (c ? .(), (0, f.jsxs)(q.L.Item, {
                    ref: p,
                    expanded: d,
                    onExpandedChange: R,
                    current: t,
                    onSelect: y,
                    id: `${e.data.path}-item`,
                    containIntrinsicSize: t ? void 0 : "auto 2rem",
                    children: [(0, f.jsx)(q.L.LeadingVisual, {
                        children: (0, f.jsx)(q.L.DirectoryIcon, {})
                    }), (0, f.jsxs)(f.Fragment, {
                        children: [(0, f.jsxs)("span", {
                            ref: Z,
                            children: [I, e.data.name]
                        }), x && (0, f.jsx)(i$.u, {
                            "data-testid": `${e.data.name}-directory-item-tooltip`,
                            id: `${e.data.name}-directory-item-tooltip`,
                            contentRef: p,
                            "aria-label": `${I}${e.data.name}`,
                            open: !0,
                            direction: "ne"
                        })]
                    }), (0, f.jsx)(q.L.SubTree, {
                        state: w ? "loading" : N ? "error" : "done",
                        children: N ? (0, f.jsx)(q.L.ErrorDialog, {
                            onRetry: g,
                            onDismiss: C,
                            children: "There was an error loading the folder contents."
                        }) : (0, f.jsxs)(f.Fragment, {
                            children: [(0, f.jsx)(i0, {
                                directoryItems: j,
                                dispatchKnownFolders: o,
                                onItemSelected: i,
                                selectedItemRef: s
                            }), S > 0 && (0, f.jsx)(i2, {
                                message: `${S} entries not shown`
                            })]
                        })
                    })]
                }))
            }
            let iX = v.memo(iQ);

            function iJ({
                directoryItems: e,
                leadingPath: t,
                inheritsActive: n,
                onItemSelected: r,
                dispatchKnownFolders: i,
                selectedItemRef: o,
                onRenderRow: a
            }) {
                let {
                    path: s
                } = (0, eC.Br)(), {
                    getItemUrl: l
                } = (0, t5.B)(), c = (0, L.s)(), d = v.useRef(c);
                return (0, f.jsx)(f.Fragment, {
                    children: e.map(e => {
                        let c = s === e.data.path,
                            u = c || s.startsWith(`${e.data.path}/`);
                        return "directory" === e.data.contentType ? (0, f.jsx)(iX, {
                            isActive: n || c,
                            isAncestorOfActive: u,
                            onItemSelected: r,
                            leadingPath: t,
                            directory: e,
                            dispatchKnownFolders: i,
                            getItemUrl: l,
                            selectedItemRef: u ? o : void 0,
                            navigate: d.current,
                            onRenderRow: a
                        }, e.data.name) : (0, f.jsx)(iY, {
                            onItemSelected: r,
                            file: e,
                            isActive: c,
                            getItemUrl: l,
                            selectedItemRef: c ? o : void 0,
                            navigate: d.current,
                            onRenderRow: a
                        }, e.data.name)
                    })
                })
            }
            let i0 = v.memo(iJ);

            function i1(e) {
                let {
                    data: t,
                    rootItems: n,
                    setRootItems: r,
                    fetchError: i,
                    processingTime: o,
                    loading: a,
                    onRenderRow: s
                } = e, {
                    knownFolders: l,
                    dispatchKnownFolders: c
                } = (0, v.useContext)(iH), d = (0, iz.T)();
                v.useEffect(() => {
                    if (a) return;
                    let e = new Map,
                        i = [];
                    d.current || (e = new Map(l), i = n.slice());
                    let {
                        newRootItems: s,
                        rootItemsUpdated: u
                    } = iV(t, e, i);
                    (s.length > n.length || u || d.current) && r(s), (e.size > l.size || d.current) && c({
                        type: "set",
                        folders: e,
                        processingTime: o
                    }), d.current = !1
                }, [t, a]);
                let u = v.useCallback(e => {
                    1 === e.button && e.preventDefault()
                }, []);
                return (0, f.jsx)(E.Z, {
                    onMouseDown: u,
                    sx: {
                        px: 3,
                        pb: 2
                    },
                    "data-testid": "repos-file-tree-container",
                    children: a ? (0, f.jsx)(E.Z, {
                        sx: {
                            display: "flex",
                            justifyContent: "center",
                            p: 2
                        },
                        children: (0, f.jsx)(eq.Z, {
                            "aria-label": "Loading file tree"
                        })
                    }) : (0, f.jsx)("nav", {
                        "aria-label": "File Tree Navigation",
                        children: (0, f.jsxs)(q.L, {
                            "aria-label": "Files",
                            children: [i && (0, f.jsx)(i2, {
                                message: "Some files could not be loaded."
                            }), (0, f.jsx)(i0, {
                                directoryItems: n,
                                onItemSelected: e.onItemSelected,
                                dispatchKnownFolders: c,
                                selectedItemRef: e.selectedItemRef,
                                onRenderRow: s
                            })]
                        })
                    })
                })
            }

            function i2({
                message: e
            }) {
                return (0, f.jsxs)(q.L.Item, {
                    id: "error-tree-row",
                    children: [(0, f.jsx)(q.L.LeadingVisual, {
                        children: (0, f.jsx)(H.Z, {
                            icon: A.AlertFillIcon,
                            sx: {
                                color: "attention.fg"
                            }
                        })
                    }), (0, f.jsx)(E.Z, {
                        sx: {
                            color: "fg.muted"
                        },
                        children: e || "Couldn't load."
                    })]
                })
            }
            try {
                iK.displayName || (iK.displayName = "WrappedFileTreeRow")
            } catch {}
            try {
                iY.displayName || (iY.displayName = "FileTreeRow")
            } catch {}
            try {
                iQ.displayName || (iQ.displayName = "WrappedDirectoryTreeRow")
            } catch {}
            try {
                iX.displayName || (iX.displayName = "DirectoryTreeRow")
            } catch {}
            try {
                iJ.displayName || (iJ.displayName = "WrappedDirectoryContents")
            } catch {}
            try {
                i0.displayName || (i0.displayName = "DirectoryContents")
            } catch {}
            try {
                i1.displayName || (i1.displayName = "ReposFileTreeView")
            } catch {}
            try {
                i2.displayName || (i2.displayName = "ErrorTreeRow")
            } catch {}
            let i3 = k._G.xxxlarge;

            function i4({
                collapseTree: e,
                showTree: t,
                fileTree: n,
                treeToggleElement: r,
                treeToggleRef: i,
                onItemSelected: o,
                processingTime: a,
                searchBoxRef: s,
                repo: l,
                path: c,
                refInfo: d,
                isFilePath: u,
                foldersToFetch: h,
                isOverview: m,
                id: p,
                onFindFilesShortcut: x
            }) {
                let {
                    openPanel: y
                } = ej(), [g, b] = v.useState(h.length > 0), [j, N] = v.useState(!1), C = v.useRef([]), S = v.useRef(null), R = v.useRef(!1), Z = v.useRef(!1), T = v.useRef(null), {
                    getItemUrl: L
                } = (0, t5.B)(), {
                    query: D
                } = (0, iM.aM)(), {
                    codeCenterOption: F
                } = (0, I.O)(), O = v.useRef(y), [M] = (0, e2.D)(() => !1, !0, []), $ = [], W = new Map, z = v.useRef(g);
                if (!z.current && n) {
                    let e = iV(n, W, []);
                    $ = e.newRootItems
                }
                z.current = !0;
                let [U, G] = v.useReducer(i8, W), [V, q] = v.useState($);
                v.useEffect(() => {
                    t && (!D || window.innerWidth >= k._G.large) || (T.current = null)
                }, [t, D]), v.useEffect(() => {
                    y && O.current !== y && window.innerWidth < i3 && e({
                        setCookie: !1
                    }), O.current = y
                }, [e, y]);
                let K = v.useCallback(async e => {
                    let t = L({
                        contentType: "directory",
                        path: e,
                        name: e
                    });
                    try {
                        let r = await (0, eD.v)(`${t}?noancestors=1`);
                        if (r.ok) {
                            let t = await r.json(),
                                i = {
                                    items: t.payload.tree.items,
                                    totalCount: t.payload.tree.totalCount
                                };
                            n[e] = i
                        } else N(!0)
                    } catch {
                        N(!0)
                    }
                    C.current.push(e), C.current.length === h.length && b(!1)
                }, [n, h.length, L]);
                v.useEffect(() => {
                    if (h && !R.current)
                        for (let e of h) K(e);
                    R.current = !0
                }, [K, h, U.size]);
                let Y = v.useCallback(e => {
                        t && (!D || window.innerWidth >= k._G.large) && S.current && e && (0, iF.z)(e, S.current, {
                            endMargin: window.innerHeight / 2,
                            startMargin: window.innerHeight / 2,
                            behavior: "auto"
                        })
                    }, [D, t]),
                    Q = v.useCallback(e => {
                        e && Z.current ? Z.current = !1 : T.current !== e && Y(e), T.current = e
                    }, [Y]),
                    X = v.useCallback(e => {
                        S.current = e;
                        let t = window.innerWidth;
                        t >= i3 && Y(T.current)
                    }, [Y]),
                    J = v.useCallback(e => {
                        e && Y(T.current)
                    }, [Y]),
                    {
                        screenSize: ee
                    } = (0, k.eI)(),
                    et = !M && ((m || y) && ee < i3 || ee < k._G.xlarge) && ee >= k._G.large,
                    en = v.useCallback(() => {
                        et || o(), Z.current = !0
                    }, [o, et]),
                    er = t ? {} : {
                        display: "none"
                    },
                    ei = u ? c.substring(0, c.lastIndexOf("/")) : c,
                    eo = (0, v.useMemo)(() => ({
                        knownFolders: U,
                        dispatchKnownFolders: G
                    }), [U]),
                    ea = v.useMemo(() => M ? null : (0, iA.oD)(), [M]),
                    es = v.useCallback(() => {
                        window.innerWidth > k._G.large && window.innerWidth < k._G.xxxxlarge && e({
                            setCookie: !1
                        })
                    }, [e]),
                    el = (0, f.jsxs)(E.Z, {
                        id: p,
                        sx: {
                            maxHeight: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            "@media screen and (max-width: 768px)": M ? {
                                display: "none"
                            } : void 0,
                            "@media screen and (min-width: 768px)": {
                                maxHeight: "100vh",
                                height: "100vh"
                            }
                        },
                        children: [(0, f.jsxs)(E.Z, {
                            sx: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                px: 3,
                                pb: 2,
                                pt: 3
                            },
                            children: [(0, f.jsxs)(E.Z, {
                                sx: {
                                    display: "flex",
                                    width: "100%",
                                    mb: 3,
                                    alignItems: "center"
                                },
                                children: [t && r, (0, f.jsx)(_.Z, {
                                    as: "h2",
                                    sx: {
                                        fontSize: 2,
                                        ml: 2
                                    },
                                    children: "Files"
                                })]
                            }), (0, f.jsxs)(E.Z, {
                                sx: {
                                    mx: 4,
                                    display: "flex",
                                    width: "100%"
                                },
                                children: [(0, f.jsx)(E.Z, {
                                    sx: {
                                        flexGrow: 1
                                    },
                                    children: (0, f.jsx)(np, {
                                        buttonClassName: "react-repos-tree-pane-ref-selector width-full ref-selector-class",
                                        allowResizing: !0
                                    })
                                }), (0, f.jsxs)(E.Z, {
                                    sx: {
                                        ml: 2,
                                        whiteSpace: "nowrap",
                                        "&:hover button:not(:hover)": {
                                            borderLeftColor: "var(--button-default-borderColor-hover, var(--color-btn-hover-border))"
                                        }
                                    },
                                    children: [d.canEdit && (0, f.jsx)(tn.Z, {
                                        "aria-label": "Add file",
                                        direction: "s",
                                        children: (0, f.jsx)(P.h, {
                                            "aria-label": "Add file",
                                            as: e7.r,
                                            sx: {
                                                color: "fg.subtle",
                                                borderTopRightRadius: 0,
                                                borderBottomRightRadius: 0,
                                                borderRight: 0
                                            },
                                            icon: A.PlusIcon,
                                            to: (0, w.Qi)({
                                                repo: l,
                                                path: ei,
                                                commitish: d.name,
                                                action: "new"
                                            }),
                                            onClick: en
                                        })
                                    }), (0, f.jsx)(iP, {
                                        sx: d.canEdit ? {
                                            borderTopLeftRadius: 0,
                                            borderBottomLeftRadius: 0
                                        } : void 0,
                                        onClick: es
                                    })]
                                })]
                            })]
                        }), d.currentOid && (0, f.jsx)(n_.default, {
                            onItemSelected: o,
                            searchBoxRef: s,
                            isOverview: m,
                            onFindFilesShortcut: x,
                            sx: {
                                ml: 3,
                                mr: 3,
                                mb: "12px",
                                "@media screen and (max-width: 768px)": M ? {
                                    display: "none"
                                } : void 0
                            }
                        }), (0, f.jsx)(i6, {
                            scrollingRef: S
                        }), (0, f.jsxs)(E.Z, {
                            ref: X,
                            sx: {
                                flexGrow: 1,
                                maxHeight: "100% !important",
                                overflowY: "auto",
                                "@media screen and (max-width: 768px)": M ? {
                                    display: "none"
                                } : void 0,
                                scrollbarGutter: "stable"
                            },
                            children: [M ? d.currentOid && (0, f.jsx)("div", {
                                className: D ? "react-tree-show-tree-items-on-large-screen" : "react-tree-show-tree-items",
                                children: (0, f.jsx)(i1, {
                                    data: n,
                                    rootItems: V,
                                    selectedItemRef: Q,
                                    setRootItems: q,
                                    onItemSelected: en,
                                    processingTime: a,
                                    loading: g,
                                    fetchError: j
                                })
                            }) : ea && (0, f.jsx)(iA.t0, {
                                node: ea
                            }), !d.currentOid && !l.isEmpty && (0, f.jsxs)(E.Z, {
                                sx: {
                                    mt: 2,
                                    mx: 4,
                                    mb: "12px",
                                    fontSize: 1,
                                    alignItems: "center",
                                    color: "danger.fg"
                                },
                                children: [(0, f.jsx)(H.Z, {
                                    icon: A.AlertFillIcon
                                }), "\xa0Ref is invalid"]
                            })]
                        })]
                    }),
                    ec = m || et || y ? {
                        "@media print, screen and (max-width: 1349px) and (min-width: 768px)": {
                            display: "none"
                        }
                    } : {
                        "@media print, screen and (max-width: 1011px) and (min-width: 768px)": {
                            display: "none"
                        }
                    };
                return (0, f.jsxs)(iH.Provider, {
                    value: eo,
                    children: [ea && (0, f.jsx)(iA.Nq, {
                        node: ea,
                        children: d.currentOid && (0, f.jsx)("div", {
                            className: D ? "react-tree-show-tree-items-on-large-screen" : "react-tree-show-tree-items",
                            children: (0, f.jsx)(i1, {
                                data: n,
                                rootItems: V,
                                selectedItemRef: Q,
                                setRootItems: q,
                                onItemSelected: en,
                                processingTime: a,
                                loading: g,
                                fetchError: j
                            })
                        })
                    }), !t && F.enabled && !m && (0, f.jsx)(E.Z, {
                        sx: {
                            position: "absolute",
                            p: m ? void 0 : 3,
                            pl: m ? 3 : void 0,
                            mt: m ? 3 : void 0,
                            display: "none",
                            ...m ? {
                                "@media screen and (min-width: 1476px)": {
                                    display: "block"
                                }
                            } : {
                                "@media screen and (min-width: 1360px)": {
                                    display: "block"
                                }
                            }
                        },
                        children: r
                    }), (!m || ee < k._G.large) && (0, f.jsx)(B.jw.Pane, {
                        position: "start",
                        sticky: !0,
                        sx: {
                            minWidth: 0,
                            ...er,
                            flexDirection: ["column", "column", "inherit"],
                            "@media screen and (min-width: 769px)": {
                                height: "100vh",
                                maxHeight: "100vh !important"
                            },
                            ...ec
                        },
                        padding: "none",
                        width: "large",
                        resizable: !0,
                        widthStorageKey: "codeView.tree-pane-width",
                        divider: {
                            regular: "line",
                            narrow: "none"
                        },
                        children: t && !et && (0, f.jsx)(E.Z, {
                            className: M ? y ? "react-tree-pane-contents-3-panel" : "react-tree-pane-contents" : void 0,
                            children: (0, f.jsx)(f.Fragment, {
                                children: el
                            })
                        })
                    }), t && !m && et && O.current === y && (0, f.jsx)(iO.Z, {
                        className: M ? m || y ? "react-tree-pane-overlay-3-panel" : "react-tree-pane-overlay" : void 0,
                        ref: J,
                        returnFocusRef: i,
                        onClickOutside: es,
                        onEscape: es,
                        top: 0,
                        position: "fixed",
                        sx: { ...er,
                            width: "440px",
                            height: "100vh",
                            maxHeight: "100vh",
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0
                        },
                        children: (0, f.jsx)(f.Fragment, {
                            children: el
                        })
                    })]
                })
            }

            function i8(e, t) {
                switch (t.type) {
                    case "set":
                        {
                            let n = e ? .size > 0;
                            return (0, ef.qP)("file-tree", {
                                "fetch-count": n ? t.folders.size - e.size : t.folders.size,
                                "file-count": t.folders.size,
                                "nav-type": n ? "soft" : "hard",
                                "processing-time": t.processingTime
                            }),
                            t.folders
                        }
                    case "add":
                        {
                            let n = new Map([...e, ...t.folders]);
                            return (0, ef.qP)("file-tree", {
                                "fetch-count": t.folders.size,
                                "file-count": n.size,
                                "nav-type": "fetch",
                                "processing-time": t.processingTime
                            }),
                            n
                        }
                    default:
                        throw Error(`Unknown action type: ${t.type}`)
                }
            }

            function i6({
                scrollingRef: e
            }) {
                let [t, n] = v.useState(e.current && e.current.scrollTop > 0);
                return v.useEffect(() => {
                    if (e.current) {
                        let t = e.current,
                            r = () => {
                                t && t.scrollTop > 0 ? n(!0) : n(!1)
                            };
                        return t.addEventListener("scroll", r), () => {
                            t.removeEventListener("scroll", r)
                        }
                    }
                }, [e]), t ? (0, f.jsx)(E.Z, {
                    sx: {
                        borderBottom: "1px solid",
                        borderColor: "border.default",
                        boxShadow: "0 3px 8px rgba(0, 0, 0, 0.3)"
                    }
                }) : null
            }
            try {
                i4.displayName || (i4.displayName = "ReposFileTreePane")
            } catch {}
            try {
                i6.displayName || (i6.displayName = "TreeBorder")
            } catch {}
            var i5 = n(72982),
                i9 = n(31147),
                i7 = n(17580);
            let oe = (0, ex.Z)("localStorage");

            function ot(e) {
                let t = "code-button-default-tab",
                    [n, r] = (0, v.useState)("local"),
                    [i, o] = (0, v.useState)(""),
                    [a, s] = (0, v.useState)(!1),
                    [l, c] = (0, v.useState)({}),
                    [d, u] = (0, v.useState)(""),
                    {
                        isLoggedIn: h,
                        refName: m,
                        repoId: p,
                        payload: x
                    } = e,
                    {
                        codespacesEnabled: y,
                        hasAccessToCodespaces: g,
                        repoPolicyInfo: b,
                        contactPath: j,
                        currentUserIsEnterpriseManaged: w,
                        enterpriseManagedBusinessName: N,
                        isEnterprise: C,
                        newCodespacePath: k
                    } = x.codeButton,
                    {
                        defaultProtocol: S
                    } = x.codeButton.local.protocolInfo,
                    [I, R] = (0, v.useState)(S),
                    Z = (0, v.useCallback)(async e => {
                        if (r("cloud"), oe.setItem(t, "cloud"), e ? .preventDefault(), !h) {
                            c({
                                header: "Sign In Required",
                                message: (0, f.jsxs)($.Z, {
                                    children: ["Please ", (0, f.jsx)(eo.Z, {
                                        href: k,
                                        children: "sign in"
                                    }), " to use Codespaces."]
                                })
                            });
                            return
                        }
                        if (i || a || !b) return;
                        let n = (0, f.jsxs)($.Z, {
                            children: ["An unexpected error occurred. Please ", (0, f.jsx)(eo.Z, {
                                href: j,
                                children: "contact support"
                            }), " for more information."]
                        });
                        if (g) {
                            s(!0);
                            let e = await (0, eD.Q)(`/codespaces?codespace%5Bref%5D=${m}&current_branch=${m}&event_target=REPO_PAGE&repo=${p}`);
                            if (e.ok) {
                                let t = await e.text();
                                o(t)
                            } else c({
                                header: "Codespace Access Limited",
                                message: n
                            });
                            s(!1)
                        } else {
                            let e, t;
                            b.allowed ? b.changesWouldBeSafe ? (e = "Codespace Access Limited", t = n) : (e = "Repository Access Limited", t = (0, f.jsx)($.Z, {
                                children: "You do not have access to push to this repository and its owner has disabled forking."
                            })) : (e = "Codespace Access Limited", t = !b.canBill && w ? (0, f.jsxs)($.Z, {
                                children: [(0, f.jsx)(eo.Z, {
                                    href: "https://docs.github.com/en/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users",
                                    children: "Enterprise-managed users"
                                }), ` must have their Codespaces usage paid for by ${N||"their enterprise"}.`]
                            }) : b.hasIpAllowLists ? (0, f.jsxs)($.Z, {
                                children: ["Your organization or enterprise enforces", " ", (0, f.jsx)(eo.Z, {
                                    href: "https://docs.github.com/en/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization",
                                    children: "IP allow lists"
                                }), "Which are unsupported by Codespaces at this time."]
                            }) : b.disabledByBusiness ? (0, f.jsx)($.Z, {
                                children: "Your enterprise has disabled Codespaces at this time. Please contact your enterprise administrator for more information."
                            }) : n), c({
                                header: e,
                                message: t
                            })
                        }
                    }, [i, a, j, w, N, g, h, k, m, p, b]),
                    T = (0, v.useCallback)(e => {
                        r("local"), oe.setItem(t, "local"), e ? .preventDefault()
                    }, []);
                (0, v.useEffect)(() => {
                    let e = oe.getItem(t);
                    "cloud" === e && y && Z()
                }, []);
                let L = (0, v.useCallback)(e => {
                        e || u("")
                    }, []),
                    E = {
                        height: "40px",
                        width: "50%",
                        borderBottomRightRadius: 0,
                        borderBottomLeftRadius: 0,
                        borderTop: 0,
                        color: "fg.muted",
                        ":hover": {
                            backgroundColor: "unset",
                            borderColor: "border.default"
                        },
                        "&.selected": {
                            backgroundColor: "canvas.overlay"
                        },
                        ":not(&.selected)": {
                            border: 0
                        }
                    };
                return (0, f.jsxs)(tF.P, {
                    onOpenChange: L,
                    children: [(0, f.jsx)(tF.P.Button, {
                        variant: e.primary ? "primary" : void 0,
                        sx: {
                            svg: e.primary ? {
                                color: "fg.primary"
                            } : void 0
                        },
                        leadingVisual: on,
                        children: "Code"
                    }), (0, f.jsx)(tF.P.Overlay, {
                        width: "auto",
                        align: "end",
                        children: "githubDesktop" === d ? (0, f.jsx)(oo, {
                            platform: "Github Desktop",
                            href: "https://desktop.github.com/"
                        }) : "visualStudio" === d ? (0, f.jsx)(oo, {
                            platform: "Visual Studio"
                        }) : "xcode" === d ? (0, f.jsx)(oo, {
                            platform: "Xcode",
                            href: "https://developer.apple.com/xcode/"
                        }) : (0, f.jsxs)(er.S, {
                            sx: {
                                width: "400px",
                                py: 0
                            },
                            children: [!C && y && (0, f.jsxs)(i9.Z, {
                                children: [(0, f.jsx)(i9.Z.Link, {
                                    as: nu.r,
                                    selected: "local" === n,
                                    onClick: T,
                                    sx: { ...E,
                                        borderLeft: 0
                                    },
                                    children: "Local"
                                }), (0, f.jsx)(i9.Z.Link, {
                                    as: nu.r,
                                    selected: "cloud" === n,
                                    onClick: Z,
                                    sx: { ...E,
                                        borderRight: 0
                                    },
                                    children: "Codespaces"
                                })]
                            }), "local" === n && (0, f.jsx)(or, {
                                payload: x,
                                setOpeningPlatform: u,
                                activeLocalTab: I,
                                setActiveLocalTab: R
                            }), "cloud" === n && (0, f.jsx)(oi, {
                                errorState: l,
                                loading: a,
                                content: i
                            })]
                        })
                    })]
                })
            }

            function on() {
                return (0, f.jsx)(E.Z, {
                    sx: {
                        "@media screen and (max-width: 544px)": {
                            display: "none"
                        },
                        height: "16px",
                        mb: 2
                    },
                    children: (0, f.jsx)(A.CodeIcon, {})
                })
            }

            function or({
                payload: e,
                setOpeningPlatform: t,
                activeLocalTab: n,
                setActiveLocalTab: r
            }) {
                let {
                    helpUrl: i
                } = e, {
                    httpAvailable: o,
                    sshAvailable: a,
                    svnBridgeAvailable: s,
                    httpUrl: l,
                    showCloneWarning: c,
                    sshUrl: d,
                    sshCertificatesRequired: u,
                    sshCertificatesAvailable: h,
                    ghCliUrl: m,
                    newSshKeyUrl: p,
                    setProtocolPath: x
                } = e.codeButton.local.protocolInfo, {
                    cloneUrl: y,
                    visualStudioCloneUrl: g,
                    showVisualStudioCloneButton: b,
                    showXcodeCloneButton: j,
                    xcodeCloneUrl: w,
                    zipballUrl: N
                } = e.codeButton.local.platformInfo, C = (0, nC.f)(["windows", "mac"]), k = (0, nC.f)(["mac"]), S = (0, L.s)(), I = {
                    borderTop: "1px solid",
                    borderColor: "var(--borderColor-muted, var(--color-border-muted))",
                    mx: 0,
                    p: 3,
                    width: "100%",
                    borderRadius: 0
                }, R = {
                    mt: 2,
                    color: "fg.muted"
                }, Z = (0, v.useCallback)(e => {
                    if (n !== e) {
                        r(e);
                        let t = new FormData;
                        t.set("protocol_selector", e), (0, eD.Q)(x, {
                            method: "post",
                            body: t
                        })
                    }
                }, [n, r, x]);
                return (0, f.jsxs)(E.Z, {
                    children: [(0, f.jsxs)(E.Z, {
                        sx: {
                            m: 3
                        },
                        children: [(0, f.jsxs)(E.Z, {
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [(0, f.jsx)(H.Z, {
                                icon: A.TerminalIcon,
                                sx: {
                                    mr: 2
                                }
                            }), (0, f.jsx)($.Z, {
                                sx: {
                                    flexGrow: 1,
                                    fontWeight: "bold"
                                },
                                children: "Clone"
                            }), (0, f.jsx)(tn.Z, {
                                "aria-label": "Which remote URL should I use?",
                                direction: "w",
                                children: (0, f.jsx)(eo.Z, {
                                    muted: !0,
                                    href: `${i}/articles/which-remote-url-should-i-use`,
                                    children: (0, f.jsx)(H.Z, {
                                        icon: A.QuestionIcon,
                                        sx: {
                                            mr: 1
                                        }
                                    })
                                })
                            })]
                        }), (0, f.jsxs)(i7.J, {
                            sx: {
                                border: "none",
                                my: 2,
                                px: 0
                            },
                            "aria-label": "Remote URL selector",
                            children: [o && (0, f.jsx)(i7.J.Item, {
                                "aria-current": "http" === n ? "page" : void 0,
                                sx: {
                                    fontWeight: "bold"
                                },
                                onClick: e => {
                                    Z("http"), e.preventDefault()
                                },
                                children: "HTTPS"
                            }), a && (0, f.jsx)(i7.J.Item, {
                                "aria-current": "ssh" === n ? "page" : void 0,
                                sx: {
                                    fontWeight: "bold"
                                },
                                onClick: e => {
                                    Z("ssh"), e.preventDefault()
                                },
                                children: "SSH"
                            }), (0, f.jsx)(i7.J.Item, {
                                "aria-current": "gh_cli" === n ? "page" : void 0,
                                sx: {
                                    fontWeight: "bold"
                                },
                                onClick: e => {
                                    Z("gh_cli"), e.preventDefault()
                                },
                                children: "GitHub CLI"
                            })]
                        }), (0, f.jsx)(E.Z, {
                            sx: {
                                display: "flex",
                                flexDirection: "column"
                            },
                            children: "http" === n ? (0, f.jsxs)(f.Fragment, {
                                children: [(0, f.jsx)(oa, {
                                    url: l
                                }), (0, f.jsx)($.Z, {
                                    sx: R,
                                    children: s ? "Use Git or checkout with SVN using the web URL." : "Clone using the web URL."
                                })]
                            }) : "ssh" === n ? (0, f.jsxs)(f.Fragment, {
                                children: [c && (0, f.jsxs)(nP.Z, {
                                    sx: {
                                        mb: 2
                                    },
                                    variant: "warning",
                                    children: ["You don't have any public SSH keys in your GitHub account. ", "You can ", (0, f.jsx)(eo.Z, {
                                        href: p,
                                        children: "add a new public key"
                                    }), ", or try cloning this repository via HTTPS."]
                                }), (0, f.jsx)(oa, {
                                    url: d
                                }), (0, f.jsx)($.Z, {
                                    sx: R,
                                    children: u ? "Use a password-protected SSH certificate." : h ? "Use a password-protected SSH key or certificate." : "Use a password-protected SSH key."
                                })]
                            }) : (0, f.jsxs)(f.Fragment, {
                                children: [(0, f.jsx)(oa, {
                                    url: m
                                }), (0, f.jsxs)($.Z, {
                                    sx: R,
                                    children: ["Work fast with our official CLI.", " ", (0, f.jsx)(eo.Z, {
                                        href: "https://cli.github.com",
                                        target: "_blank",
                                        "aria-label": "Learn more about the GitHub CLI",
                                        children: "Learn more"
                                    })]
                                })]
                            })
                        })]
                    }), (0, f.jsxs)(er.S, {
                        sx: {
                            py: 0
                        },
                        children: [C && (0, f.jsxs)(er.S.Item, {
                            onClick: () => {
                                t("githubDesktop"), S(y)
                            },
                            sx: I,
                            children: [(0, f.jsx)(er.S.LeadingVisual, {
                                children: (0, f.jsx)(A.DesktopDownloadIcon, {})
                            }), "Open with GitHub Desktop"]
                        }), C && b && (0, f.jsx)(er.S.Item, {
                            onClick: () => {
                                t("visualStudio"), S(g)
                            },
                            sx: I,
                            children: "Open with Visual Studio"
                        }), k && j && (0, f.jsx)(er.S.Item, {
                            onClick: () => {
                                t("xcode"), S(w)
                            },
                            sx: I,
                            children: "Open with Xcode"
                        }), (0, f.jsxs)(er.S.Item, {
                            onClick: () => {
                                S(N)
                            },
                            sx: I,
                            children: [(0, f.jsx)(er.S.LeadingVisual, {
                                children: (0, f.jsx)(A.FileZipIcon, {})
                            }), "Download ZIP"]
                        })]
                    })]
                })
            }

            function oi({
                errorState: e,
                loading: t,
                content: n
            }) {
                return (0, f.jsx)(E.Z, {
                    sx: {
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: t ? (0, f.jsx)(eq.Z, {
                        sx: {
                            margin: 2
                        }
                    }) : e.header && e.message ? (0, f.jsxs)(E.Z, {
                        sx: {
                            p: 4,
                            m: "40px"
                        },
                        children: [(0, f.jsx)(_.Z, {
                            as: "h4",
                            sx: {
                                fontSize: "16px",
                                textAlign: "center"
                            },
                            children: e.header
                        }), (0, f.jsx)(E.Z, {
                            sx: {
                                textAlign: "center"
                            },
                            children: e.message
                        })]
                    }) : (0, f.jsx)(ez.wB, {
                        sx: {
                            width: "100%"
                        },
                        html: n
                    })
                })
            }

            function oo({
                platform: e,
                href: t
            }) {
                return (0, f.jsxs)(E.Z, {
                    sx: {
                        width: "400px",
                        p: 3
                    },
                    children: [(0, f.jsx)(_.Z, {
                        as: "h4",
                        sx: {
                            fontSize: "16px",
                            textAlign: "center",
                            mb: 3
                        },
                        children: `Launching ${e}`
                    }), t && (0, f.jsxs)($.Z, {
                        sx: {
                            mb: 3
                        },
                        children: ["If nothing happens, ", (0, f.jsx)(eo.Z, {
                            href: t,
                            children: `download ${e}`
                        }), " and try again."]
                    })]
                })
            }

            function oa({
                url: e
            }) {
                return (0, f.jsxs)(E.Z, {
                    sx: {
                        display: "flex",
                        height: "32px"
                    },
                    children: [(0, f.jsx)("input", {
                        type: "text",
                        className: "form-control input-monospace input-sm color-bg-subtle",
                        "data-autoselect": !0,
                        value: e,
                        "aria-label": e,
                        readOnly: !0,
                        style: {
                            flexGrow: 1
                        }
                    }), (0, f.jsx)(iZ.m, {
                        sx: {
                            ml: 1,
                            mr: 0,
                            width: "32px"
                        },
                        textToCopy: e,
                        ariaLabel: "Copy url to clipboard",
                        tooltipProps: {
                            direction: "nw"
                        }
                    })]
                })
            }! function(e) {
                e.Local = "local", e.Codespaces = "cloud"
            }(h || (h = {}));
            try {
                ot.displayName || (ot.displayName = "CodeButton")
            } catch {}
            try {
                on.displayName || (on.displayName = "CodeButtonIcon")
            } catch {}
            try {
                or.displayName || (or.displayName = "LocalTab")
            } catch {}
            try {
                oi.displayName || (oi.displayName = "CodespacesTab")
            } catch {}
            try {
                oo.displayName || (oo.displayName = "LaunchingPlatformContents")
            } catch {}
            try {
                oa.displayName || (oa.displayName = "CloneUrl")
            } catch {}
            var os = n(84915);

            function ol({
                children: e
            }) {
                return (0, f.jsx)(E.Z, {
                    className: "popover-container-width",
                    sx: {
                        borderRadius: 6,
                        minWidth: 250
                    },
                    children: e
                })
            }

            function oc({
                icon: e,
                header: t,
                content: n
            }) {
                return (0, f.jsxs)(E.Z, {
                    sx: {
                        display: "flex",
                        p: 3
                    },
                    children: [(0, f.jsx)(E.Z, {
                        sx: {
                            mr: 2
                        },
                        children: e
                    }), (0, f.jsxs)(E.Z, {
                        children: [(0, f.jsx)(_.Z, {
                            as: "h2",
                            sx: {
                                fontSize: 1,
                                mb: 1
                            },
                            children: t
                        }), (0, f.jsx)($.Z, {
                            sx: {
                                color: "fg.muted",
                                fontSize: 0
                            },
                            children: n
                        })]
                    })]
                })
            }

            function od({
                icon: e,
                bg: t
            }) {
                return (0, f.jsx)(os.Z, {
                    sx: {
                        bg: t,
                        color: "fg.onEmphasis"
                    },
                    size: 30,
                    icon: () => (0, f.jsx)(e, {
                        size: 16
                    })
                })
            }

            function ou({
                children: e
            }) {
                return (0, f.jsx)(E.Z, {
                    sx: {
                        display: "flex",
                        flexWrap: "wrap",
                        p: 3,
                        justifyContent: "space-between",
                        borderTop: "solid 1px",
                        borderColor: "border.muted",
                        gap: 3
                    },
                    children: e
                })
            }
            try {
                ol.displayName || (ol.displayName = "PopoverContainer")
            } catch {}
            try {
                oc.displayName || (oc.displayName = "PopoverContent")
            } catch {}
            try {
                od.displayName || (od.displayName = "PopoverIcon")
            } catch {}
            try {
                ou.displayName || (ou.displayName = "PopoverActions")
            } catch {}

            function oh(e) {
                return `${e} ${1===e?"commit":"commits"}`
            }

            function om({
                comparison: e,
                repo: t,
                linkify: n = !1
            }) {
                let {
                    sendRepoClickEvent: r
                } = (0, V.a)(), {
                    ahead: i,
                    behind: o,
                    baseBranch: a,
                    baseBranchRange: s,
                    currentRef: l
                } = e, c = (0, w.j6)({
                    repo: t,
                    base: s,
                    head: l
                }), d = (0, w.j6)({
                    repo: t,
                    base: l,
                    head: s
                }), u = () => r("AHEAD_BEHIND_LINK", {
                    category: "Branch Infobar",
                    action: "Ahead Compare",
                    label: `ref_loc:bar;is_fork:${t.isFork}`
                }), h = () => r("AHEAD_BEHIND_LINK", {
                    category: "Branch Infobar",
                    action: "Behind Compare",
                    label: `ref_loc:bar;is_fork:${t.isFork}`
                });
                return 0 === i && 0 === o ? (0, f.jsxs)("span", {
                    children: ["This branch is up to date with ", (0, f.jsx)(iw.Z, {
                        as: "span",
                        children: a
                    }), "."]
                }) : i > 0 && o > 0 ? (0, f.jsxs)("span", {
                    children: ["This branch is", " ", (0, f.jsxs)( of , {
                        linkify: n,
                        href: c,
                        onClick: u,
                        children: [oh(i), " ahead of"]
                    }), ",", " ", (0, f.jsxs)( of , {
                        linkify: n,
                        href: d,
                        onClick: h,
                        children: [oh(o), " behind"]
                    }), " ", (0, f.jsx)(iw.Z, {
                        as: "span",
                        children: a
                    }), "."]
                }) : i > 0 ? (0, f.jsxs)("span", {
                    children: ["This branch is", " ", (0, f.jsxs)( of , {
                        linkify: n,
                        href: c,
                        onClick: u,
                        children: [oh(i), " ahead of"]
                    }), " ", (0, f.jsx)(iw.Z, {
                        as: "span",
                        children: a
                    }), "."]
                }) : (0, f.jsxs)("span", {
                    children: ["This branch is", " ", (0, f.jsxs)( of , {
                        linkify: n,
                        href: d,
                        onClick: h,
                        children: [oh(o), " behind"]
                    }), " ", (0, f.jsx)(iw.Z, {
                        as: "span",
                        children: a
                    }), "."]
                })
            }

            function of ({
                sx: e,
                href: t,
                linkify: n,
                children: r,
                ...i
            }) {
                return n ? (0, f.jsx)(eo.Z, {
                    sx: e,
                    href: t,
                    ...i,
                    children: r
                }) : (0, f.jsx)($.Z, {
                    children: r
                })
            }
            try {
                om.displayName || (om.displayName = "RefComparisonText")
            } catch {}
            try { of .displayName || ( of .displayName = "LinkOrText")
            } catch {}

            function op({
                comparison: e
            }) {
                let t = (0, j.H)(),
                    n = e.ahead > 0,
                    r = (0, w.j6)({
                        repo: t,
                        base: e.baseBranchRange,
                        head: e.currentRef
                    }),
                    i = (0, w.wu)({
                        repo: t,
                        refName: e.currentRef
                    });
                return (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsx)(oc, {
                        icon: (0, f.jsx)(od, {
                            bg: "neutral.emphasis",
                            icon: A.GitPullRequestIcon
                        }),
                        header: n ? (0, f.jsx)(om, {
                            repo: t,
                            comparison: { ...e,
                                behind: 0
                            }
                        }) : (0, f.jsxs)($.Z, {
                            children: ["This branch is not ahead of the upstream ", (0, f.jsx)(iw.Z, {
                                as: "span",
                                children: e.baseBranch
                            }), "."]
                        }),
                        content: (0, f.jsx)($.Z, {
                            as: "p",
                            children: n ? "Open a pull request to contribute your changes upstream." : "No new commits yet. Enjoy your day!"
                        })
                    }), n && (0, f.jsxs)(ou, {
                        children: [!t.isFork && (0, f.jsx)(nu.r, {
                            as: eo.Z,
                            sx: {
                                flex: 1,
                                ...t9.A
                            },
                            href: r,
                            "data-testid": "compare-button",
                            children: "Compare"
                        }), (0, f.jsx)(nu.r, {
                            as: eo.Z,
                            sx: {
                                flex: 1,
                                ...t9.A
                            },
                            href: i,
                            variant: "primary",
                            "data-testid": "open-pr-button",
                            children: "Open pull request"
                        })]
                    })]
                })
            }
            try {
                op.displayName || (op.displayName = "ContributePopoverContent")
            } catch {}

            function ox({
                comparison: e
            }) {
                let {
                    sendRepoClickEvent: t
                } = (0, V.a)();
                return (0, f.jsxs)(tF.P, {
                    onOpenChange: e => e && t("CONTRIBUTE_BUTTON", {
                        category: "Branch Infobar",
                        action: "Open Contribute dropdown",
                        label: "ref_loc:contribute_dropdown"
                    }),
                    children: [(0, f.jsx)(tF.P.Anchor, {
                        children: (0, f.jsx)(nu.r, {
                            leadingVisual: A.GitPullRequestIcon,
                            trailingVisual: A.TriangleDownIcon,
                            children: "Contribute"
                        })
                    }), (0, f.jsx)(tF.P.Overlay, {
                        align: "end",
                        sx: {
                            marginTop: 2
                        },
                        children: (0, f.jsx)(ol, {
                            children: (0, f.jsx)(op, {
                                comparison: e
                            })
                        })
                    })]
                })
            }
            try {
                ox.displayName || (ox.displayName = "ContributeButton")
            } catch {}

            function oy(e, t, n) {
                let [r, i] = (0, v.useState)(!1);
                return {
                    disabled: r,
                    label: r ? t : e,
                    action: async () => {
                        i(!0), await n(), i(!1)
                    }
                }
            }
            let og = {
                category: "Branch Infobar",
                label: "ref_loc:fetch_upstream_dropdown"
            };

            function ob({
                comparison: e,
                discard: t,
                update: n
            }) {
                let r = (0, j.H)(),
                    {
                        helpUrl: i
                    } = (0, eC.Ou)(),
                    {
                        sendRepoClickEvent: o
                    } = (0, V.a)(),
                    a = `${i}/github/collaborating-with-issues-and-pull-requests/syncing-a-fork`,
                    s = (0, w.j6)({
                        repo: r,
                        base: e.baseBranchRange,
                        head: e.currentRef
                    }),
                    l = oj(e),
                    c = e.behind > 0,
                    d = oy(`Discard ${oh(e.ahead)}`, "Discarding changes...", t),
                    u = oy("Update branch", "Updating...", n),
                    h = {
                        compare: "behind" === l,
                        discard: "behind-and-ahead" === l && e.isTrackingBranch,
                        update: ["behind", "behind-and-ahead"].includes(l)
                    },
                    m = Object.values(h).some(Boolean);
                return (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsx)(oc, {
                        icon: (0, f.jsx)(od, {
                            icon: c ? A.GitMergeIcon : A.CheckIcon,
                            bg: c ? "neutral.emphasis" : "success.emphasis"
                        }),
                        header: (0, f.jsx)(ow, {
                            comparison: e
                        }),
                        content: (0, f.jsx)(ov, {
                            comparison: e,
                            helpUrl: a
                        })
                    }), m && (0, f.jsxs)(ou, {
                        children: [h.compare && (0, f.jsx)(nu.r, {
                            as: eo.Z,
                            sx: {
                                flex: 1,
                                ...t9.A
                            },
                            href: s,
                            onClick: () => o("SYNC_FORK.COMPARE", { ...og,
                                action: "Compare"
                            }),
                            "data-testid": "compare-button",
                            children: "Compare"
                        }), h.discard && (0, f.jsx)(nu.r, {
                            onClick: d.action,
                            sx: {
                                flex: 1
                            },
                            "data-testid": "discard-button",
                            variant: "danger",
                            disabled: d.disabled,
                            children: d.label
                        }), h.update && (0, f.jsx)(nu.r, {
                            onClick: u.action,
                            disabled: u.disabled,
                            sx: {
                                flex: 1
                            },
                            variant: "primary",
                            "data-testid": "update-branch-button",
                            children: u.label
                        })]
                    })]
                })
            }

            function oj({
                behind: e,
                ahead: t
            }) {
                return 0 === e && 0 === t ? "sync" : e > 0 && t > 0 ? "behind-and-ahead" : e > 0 ? "behind" : "ahead"
            }

            function ow({
                comparison: e
            }) {
                let t = oj(e);
                switch (t) {
                    case "behind":
                    case "behind-and-ahead":
                        return (0, f.jsx)($.Z, {
                            children: "This branch is out-of-date"
                        });
                    default:
                        return (0, f.jsxs)($.Z, {
                            children: ["This branch is not behind the upstream ", (0, f.jsx)(iw.Z, {
                                as: "span",
                                children: e.baseBranch
                            }), "."]
                        })
                }
            }

            function ov({
                comparison: e,
                helpUrl: t
            }) {
                let n = oj(e);
                switch (n) {
                    case "sync":
                    case "ahead":
                        return (0, f.jsx)($.Z, {
                            as: "p",
                            children: "No new commits to fetch. Enjoy your day!"
                        });
                    case "behind":
                        return (0, f.jsxs)(f.Fragment, {
                            children: [(0, f.jsxs)($.Z, {
                                as: "p",
                                children: ["Update branch to keep this branch up-to-date by syncing ", oh(e.behind), " from the upstream repository."]
                            }), (0, f.jsx)($.Z, {
                                as: "p",
                                children: (0, f.jsx)(eo.Z, {
                                    href: t,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: "Learn more about syncing a fork"
                                })
                            })]
                        });
                    case "behind-and-ahead":
                        return e.isTrackingBranch ? (0, f.jsxs)(f.Fragment, {
                            children: [(0, f.jsx)($.Z, {
                                as: "p",
                                children: "Update branch to merge the latest changes from the upstream repository into this branch."
                            }), (0, f.jsxs)($.Z, {
                                as: "p",
                                children: ["Discard ", oh(e.ahead), " to make this branch match the upstream repository.", " ", oh(e.ahead), " will be removed from this branch."]
                            }), (0, f.jsx)($.Z, {
                                as: "p",
                                children: (0, f.jsx)(eo.Z, {
                                    href: t,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: "Learn more about syncing a fork"
                                })
                            })]
                        }) : (0, f.jsx)($.Z, {
                            as: "p",
                            children: "Update branch to merge the latest changes from the upstream repository into this branch."
                        })
                }
            }
            try {
                ob.displayName || (ob.displayName = "FetchUpstreamPopoverContent")
            } catch {}
            try {
                ow.displayName || (ow.displayName = "HeaderText")
            } catch {}
            try {
                ov.displayName || (ov.displayName = "ContentText")
            } catch {}

            function oN({
                comparison: e,
                discard: t
            }) {
                let n = (0, j.H)(),
                    {
                        sendRepoClickEvent: r
                    } = (0, V.a)(),
                    i = (0, w.wu)({
                        repo: n,
                        refName: e.currentRef
                    }),
                    o = oh(e.ahead),
                    a = oy(`Discard ${o}`, "Discarding changes...", t);
                return (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsx)(oc, {
                        icon: (0, f.jsx)(od, {
                            icon: A.AlertIcon,
                            bg: "neutral.emphasis"
                        }),
                        header: "This branch has conflicts that must be resolved",
                        content: (0, f.jsxs)(f.Fragment, {
                            children: [(0, f.jsxs)($.Z, {
                                as: "p",
                                children: ["Discard ", o, " to make this branch match the upstream repository. ", o, " will be removed from this branch."]
                            }), (0, f.jsx)($.Z, {
                                as: "p",
                                children: "You can resolve merge conflicts using the command line and a text editor."
                            })]
                        })
                    }), (0, f.jsxs)(ou, {
                        children: [(0, f.jsx)(nu.r, {
                            sx: {
                                flex: 1
                            },
                            onClick: a.action,
                            disabled: a.disabled,
                            "data-testid": "discard-button",
                            variant: "danger",
                            children: a.label
                        }), (0, f.jsx)(nu.r, {
                            as: eo.Z,
                            sx: {
                                flex: 1,
                                ...t9.A
                            },
                            href: i,
                            variant: "primary",
                            "data-testid": "open-pr-button",
                            onClick: () => r("SYNC_FORK.OPEN_PR", { ...og,
                                action: "Open pull request"
                            }),
                            children: "Open pull request"
                        })]
                    })]
                })
            }
            try {
                oN.displayName || (oN.displayName = "FetchUpstreamWithConflictsPopoverContent")
            } catch {}

            function oC({
                comparison: e
            }) {
                let [t, n, r] = function({
                    head: e,
                    base: t
                }) {
                    let [n, r] = (0, v.useState)(), [i, o] = (0, v.useState)(!0), [a, s] = (0, v.useState)(), l = (0, j.H)(), c = (0, w.$_)({
                        repo: l,
                        head: e,
                        base: t
                    });
                    return (0, v.useEffect)(() => {
                        let e = async () => {
                            o(!0), r(void 0);
                            let e = await (0, eD.v)(c);
                            try {
                                e.ok ? r((await e.json()).state) : s(e.statusText)
                            } catch (e) {
                                s(e ? .message || e ? .toString())
                            }
                            o(!1)
                        };
                        e()
                    }, [c]), [n, i, a]
                }({
                    base: e.currentRef,
                    head: e.baseBranchRange
                }), {
                    sendRepoClickEvent: i
                } = (0, V.a)(), {
                    discardChanges: o,
                    updateBranch: a
                } = function() {
                    let e = (0, j.H)(),
                        {
                            refInfo: {
                                name: t
                            }
                        } = (0, eC.Br)(),
                        n = (0, w.db)({
                            repo: e,
                            refName: t,
                            discard: !0
                        }),
                        r = (0, w.db)({
                            repo: e,
                            refName: t,
                            discard: !1
                        }),
                        i = (0, v.useCallback)(() => (0, eD.Q)(r, {
                            method: "POST"
                        }), [r]),
                        o = (0, v.useCallback)(() => (0, eD.Q)(n, {
                            method: "POST"
                        }), [n]);
                    return {
                        updateBranch: i,
                        discardChanges: o
                    }
                }(), s = async () => {
                    i("SYNC_FORK.DISCARD", { ...og,
                        action: "Discard Conflicts"
                    });
                    let e = await o();
                    e.ok && e.url && (window.location.href = e.url)
                }, l = async () => {
                    i("SYNC_FORK.UPDATE", { ...og,
                        action: "Fetch and merge"
                    });
                    let e = await a();
                    e.ok && e.url && (window.location.href = e.url)
                };
                return 0 === e.behind ? (0, f.jsx)(ob, {
                    update: l,
                    discard: s,
                    comparison: e
                }) : n || r ? (0, f.jsx)(E.Z, {
                    sx: {
                        p: 4,
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: (0, f.jsx)(eq.Z, {})
                }) : "clean" === t ? (0, f.jsx)(ob, {
                    update: l,
                    discard: s,
                    comparison: e
                }) : (0, f.jsx)(oN, {
                    discard: s,
                    comparison: e
                })
            }
            try {
                oC.displayName || (oC.displayName = "FetchPopoverContainer")
            } catch {}

            function ok({
                comparison: e
            }) {
                let {
                    sendRepoClickEvent: t
                } = (0, V.a)();
                return (0, f.jsxs)(tF.P, {
                    onOpenChange: n => n && t("SYNC_FORK_BUTTON", {
                        category: "Branch Infobar",
                        action: "Open Fetch upstream dropdown",
                        label: "ref_loc:fetch_upstream_dropdown",
                        ahead: e.ahead,
                        behind: e.behind
                    }),
                    children: [(0, f.jsx)(tF.P.Anchor, {
                        children: (0, f.jsx)(nu.r, {
                            leadingVisual: A.SyncIcon,
                            trailingAction: A.TriangleDownIcon,
                            children: "Sync fork"
                        })
                    }), (0, f.jsx)(tF.P.Overlay, {
                        align: "end",
                        sx: {
                            marginTop: 2
                        },
                        children: (0, f.jsx)(ol, {
                            children: (0, f.jsx)(oC, {
                                comparison: e
                            })
                        })
                    })]
                })
            }
            try {
                ok.displayName || (ok.displayName = "FetchUpstreamButton")
            } catch {}

            function oS({
                repo: e,
                pullRequestNumber: t
            }) {
                return (0, f.jsxs)(eo.Z, {
                    href: (0, w.xR)({
                        repo: e,
                        number: t
                    }),
                    sx: {
                        display: "flex",
                        gap: 1,
                        alignItems: "center",
                        color: "fg.muted",
                        "&:hover": {
                            color: "accent.fg"
                        }
                    },
                    children: [(0, f.jsx)(A.GitPullRequestIcon, {
                        size: 16
                    }), "#", t]
                })
            }
            try {
                oS.displayName || (oS.displayName = "PullRequestLink")
            } catch {}

            function oI({
                sx: e
            }) {
                let t;
                let [n, r] = function() {
                    let [e, t] = (0, v.useState)(), [n, r] = (0, v.useState)(), {
                        refInfo: i,
                        path: o
                    } = (0, eC.Br)(), a = (0, j.H)(), s = (0, w.Qi)({
                        repo: a,
                        action: "branch-infobar",
                        commitish: i.name,
                        path: o
                    });
                    return (0, v.useEffect)(() => {
                        let e = async () => {
                            t(void 0);
                            let e = await (0, eD.v)(s);
                            try {
                                e.ok ? t(await e.json()) : r(422 === e.status ? "timeout" : e.statusText)
                            } catch (e) {
                                r(e ? .message || e ? .toString())
                            }
                        };
                        e()
                    }, [s]), [e, n]
                }(), i = (0, j.H)();
                return t = "timeout" === r ? (0, f.jsx)(f.Fragment, {
                    children: "Sorry, getting ahead/behind information for this branch is taking too long."
                }) : n ? n.refComparison ? (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsx)(om, {
                        linkify: !0,
                        repo: i,
                        comparison: n.refComparison
                    }), (0, f.jsx)(E.Z, {
                        sx: {
                            display: "flex",
                            gap: 2
                        },
                        children: n.pullRequestNumber ? (0, f.jsx)(oS, {
                            repo: i,
                            pullRequestNumber: n.pullRequestNumber
                        }) : (0, f.jsxs)(f.Fragment, {
                            children: [i.currentUserCanPush && (0, f.jsx)(ox, {
                                comparison: n.refComparison
                            }), i.isFork && i.currentUserCanPush && (0, f.jsx)(ok, {
                                comparison: n.refComparison
                            })]
                        })
                    })]
                }) : (0, f.jsx)(f.Fragment, {
                    children: "Cannot retrieve ahead/behind information for this branch."
                }) : (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsx)(na, {
                        width: "40%"
                    }), (0, f.jsx)(na, {
                        width: "30%"
                    })]
                }), (0, f.jsx)(oR, {
                    sx: {
                        flexDirection: ["column", "row"],
                        alignItems: ["start", "center"],
                        justifyContent: "space-between",
                        border: "solid 1px",
                        borderColor: "border.default",
                        borderRadius: "6px",
                        pl: 3,
                        pr: 2,
                        py: 2,
                        mb: 3,
                        ...e
                    },
                    children: t
                })
            }

            function oR({
                children: e,
                sx: t
            }) {
                return (0, f.jsx)(E.Z, {
                    "data-testid": "branch-info-bar",
                    "aria-live": "polite",
                    sx: {
                        display: "flex",
                        gap: 2,
                        bg: "canvas.subtle",
                        fontSize: 1,
                        ...t
                    },
                    children: e
                })
            }
            try {
                oI.displayName || (oI.displayName = "BranchInfoBar")
            } catch {}
            try {
                oR.displayName || (oR.displayName = "BranchInfoBarContainer")
            } catch {}
            var oZ = n(34493);
            let oT = {
                directory: "Directory",
                submodule: "Submodule",
                symlink_directory: "Symlink to directory",
                symlink_file: "Symlink to file"
            };

            function oL({
                item: e
            }) {
                switch (e.contentType) {
                    case "directory":
                        return (0, f.jsx)(A.FileDirectoryFillIcon, {
                            className: "icon-directory"
                        });
                    case "submodule":
                    case "symlink_directory":
                    case "symlink_file":
                        return (0, f.jsx)(A.FileSubmoduleIcon, {
                            className: "icon-directory"
                        });
                    default:
                        return (0, f.jsx)(A.FileIcon, {
                            className: "color-fg-muted"
                        })
                }
            }

            function oE({
                initialFocus: e,
                item: t,
                getItemUrl: n,
                onNavigate: r
            }) {
                let i = n(t),
                    o = t.hasSimplifiedPath ? "This path skips through empty directories" : t.name;
                return "submodule" === t.contentType && (i = t.submoduleUrl ? ? i, r = e => {
                    e.preventDefault(), t.submoduleUrl && (window.location.href = t.submoduleUrl)
                }), (0, f.jsx)("div", {
                    className: "overflow-hidden",
                    children: (0, f.jsx)("h3", {
                        children: (0, f.jsx)("div", {
                            className: "react-directory-truncate",
                            children: (0, f.jsx)(e7.r, {
                                title: o,
                                "aria-label": `${t.name}, ${function({contentType:e}){return` ($ {
                                    oT[e] || "File"
                                })
                                `}(t)}`,
                                className: "symlink_directory" !== t.contentType && "symlink_file" !== t.contentType ? "Link--primary" : void 0,
                                "data-react-autofocus": !!e || null,
                                onClick: r,
                                to: i,
                                children: (0, f.jsx)(oB, {
                                    item: t
                                })
                            })
                        })
                    })
                })
            }

            function oB({
                item: e
            }) {
                return e.hasSimplifiedPath ? (0, f.jsx)(f.Fragment, {
                    children: e.name.split("/").map((e, t, n) => {
                        let r = t === n.length - 1;
                        return (0, f.jsx)("span", {
                            className: r ? "" : "react-directory-default-color",
                            "data-testid": "path-name-segment",
                            children: `${e}${r?"":"/"}`
                        }, t)
                    })
                }) : e.submoduleDisplayName ? (0, f.jsx)("span", {
                    style: {
                        color: "var(--fgColor-accent, var(--color-accent-fg))"
                    },
                    children: e.submoduleDisplayName
                }) : (0, f.jsx)(f.Fragment, {
                    children: e.name
                })
            }

            function o_({
                commit: e
            }) {
                return e ? e.shortMessageHtmlLink ? (0, f.jsx)("div", {
                    children: (0, f.jsx)(ez.sF, {
                        className: "react-directory-commit-message",
                        html: e.shortMessageHtmlLink
                    })
                }) : (0, f.jsx)(eo.Z, {
                    className: "Link--secondary",
                    href: e.url,
                    children: "No commit message"
                }) : (0, f.jsx)(na, {})
            }

            function oD({
                commit: e
            }) {
                return e ? .date ? (0, f.jsx)("div", {
                    className: "react-directory-commit-age",
                    children: (0, f.jsx)(tt.Z, {
                        datetime: e.date,
                        tense: "past"
                    })
                }) : (0, f.jsx)(na, {})
            }
            try {
                oL.displayName || (oL.displayName = "IconCell")
            } catch {}
            try {
                oE.displayName || (oE.displayName = "NameCell")
            } catch {}
            try {
                oB.displayName || (oB.displayName = "ItemPathName")
            } catch {}
            try {
                o_.displayName || (o_.displayName = "CommitMessageCell")
            } catch {}
            try {
                oD.displayName || (oD.displayName = "CommitAgeCell")
            } catch {}

            function oF({
                children: e,
                sx: t,
                ...n
            }) {
                return (0, f.jsx)(E.Z, {
                    as: "table",
                    sx: {
                        width: "100%",
                        borderCollapse: "separate",
                        borderSpacing: 0,
                        border: "1px solid",
                        borderColor: "border.default",
                        borderRadius: "6px",
                        tableLayout: "fixed",
                        overflow: "hidden",
                        ...t
                    },
                    ...n,
                    children: e
                })
            }
            let oO = ({
                    children: e,
                    sx: t
                }) => (0, f.jsx)(E.Z, {
                    as: "thead",
                    sx: {
                        height: "40px",
                        ...t
                    },
                    children: (0, f.jsx)(E.Z, {
                        as: "tr",
                        sx: {
                            p: 3,
                            color: "fg.muted",
                            fontSize: 0,
                            textAlign: "left",
                            height: "40px",
                            th: {
                                pl: 3,
                                backgroundColor: "canvas.subtle"
                            }
                        },
                        children: e
                    })
                }),
                oA = ({
                    children: e,
                    onClick: t,
                    index: n,
                    id: r
                }) => (0, f.jsx)(E.Z, {
                    as: "tr",
                    sx: {
                        fontSize: 1,
                        height: "40px",
                        td: {
                            pl: 3,
                            textAlign: "left",
                            borderTopStyle: "solid",
                            borderTopWidth: 1,
                            borderTopColor: "border.default"
                        },
                        "&:hover": {
                            bg: "canvas.subtle"
                        }
                    },
                    onClick: t,
                    "data-index": n,
                    id: r,
                    children: e
                }),
                oP = ({
                    children: e
                }) => (0, f.jsx)(E.Z, {
                    as: "tfoot",
                    sx: {
                        backgroundColor: "canvas.subtle",
                        borderTopColor: "border.default",
                        p: 3
                    },
                    children: e
                });
            try {
                oF.displayName || (oF.displayName = "Table")
            } catch {}
            try {
                oO.displayName || (oO.displayName = "HeaderRow")
            } catch {}
            try {
                oA.displayName || (oA.displayName = "Row")
            } catch {}
            try {
                oP.displayName || (oP.displayName = "TableFooter")
            } catch {}

            function oM({
                initialFocus: e,
                item: t,
                commit: n,
                onNavigate: r,
                getItemUrl: i,
                navigate: o,
                index: a,
                className: s
            }) {
                let l = v.useCallback(e => {
                    window.innerWidth < k._G.small && !e.defaultPrevented && ("submodule" === t.contentType ? t.submoduleUrl && o(t.submoduleUrl) : o(i(t)))
                }, [t, i, o]);
                return (0, f.jsx)(() => (0, f.jsxs)("tr", {
                    className: `react-directory-row ${s}`,
                    onClick: l,
                    id: `folder-row-${a}`,
                    children: [(0, f.jsx)("td", {
                        className: "react-directory-row-name-cell-small-screen",
                        colSpan: 2,
                        children: (0, f.jsxs)("div", {
                            className: "react-directory-filename-column",
                            children: [(0, f.jsx)(oL, {
                                item: t
                            }), (0, f.jsx)(oE, {
                                initialFocus: e,
                                item: t,
                                getItemUrl: i,
                                onNavigate: r
                            })]
                        })
                    }), (0, f.jsx)("td", {
                        className: "react-directory-row-name-cell-large-screen",
                        colSpan: 1,
                        children: (0, f.jsxs)("div", {
                            className: "react-directory-filename-column",
                            children: [(0, f.jsx)(oL, {
                                item: t
                            }), (0, f.jsx)(oE, {
                                initialFocus: e,
                                item: t,
                                getItemUrl: i,
                                onNavigate: r
                            })]
                        })
                    }), (0, f.jsx)("td", {
                        className: "react-directory-row-commit-cell",
                        children: (0, f.jsx)(o_, {
                            commit: n
                        })
                    }), (0, f.jsx)("td", {
                        children: (0, f.jsx)(oD, {
                            commit: n
                        })
                    })]
                }), {})
            }
            let oH = v.memo(oM);

            function o$({
                initialFocus: e,
                linkTo: t,
                linkRef: n,
                navigate: r
            }) {
                let {
                    setFocusHint: i
                } = (0, oZ.x)(), {
                    path: o
                } = (0, eC.Br)(), a = v.useCallback(() => {
                    let e = window.innerWidth < k._G.medium;
                    e && r(t)
                }, [t, r]);
                return (0, f.jsx)(oA, {
                    onClick: a,
                    id: "folder-row-0",
                    children: (0, f.jsxs)(E.Z, {
                        as: "td",
                        colSpan: 3,
                        sx: {
                            fontSize: 1,
                            fontWeight: 400,
                            px: 3
                        },
                        children: [(0, f.jsx)(t6.N, {
                            as: "h3",
                            text: "parent directory"
                        }), (0, f.jsx)(eo.Z, {
                            "aria-label": "Parent directory",
                            "data-react-autofocus": !!e || null,
                            "data-testid": "up-tree",
                            as: e7.r,
                            muted: !0,
                            onClick: () => {
                                i(o)
                            },
                            ref: n,
                            rel: "nofollow",
                            sx: {
                                fontWeight: "bold",
                                textDecoration: "none",
                                cursor: "pointer",
                                "&:hover": {
                                    textDecoration: "none"
                                },
                                "&:focus:focus-visible div": {
                                    outline: "2px solid var(--focus-outlineColor, var(--color-accent-fg))",
                                    outlineOffset: "-2px"
                                }
                            },
                            to: t,
                            children: (0, f.jsxs)(E.Z, {
                                className: "width-full",
                                sx: {
                                    width: 16,
                                    textAlign: "center",
                                    letterSpacing: "2px",
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [(0, f.jsx)(H.Z, {
                                    icon: A.FileDirectoryFillIcon,
                                    size: "small",
                                    sx: {
                                        color: "var(--color-icon-directory)",
                                        mr: "10px"
                                    }
                                }), ".."]
                            })
                        })]
                    })
                })
            }
            try {
                oM.displayName || (oM.displayName = "WrappedDirectoryRow")
            } catch {}
            try {
                (m = RowContent).displayName || (m.displayName = "RowContent")
            } catch {}
            try {
                oH.displayName || (oH.displayName = "DirectoryRow")
            } catch {}
            try {
                o$.displayName || (o$.displayName = "GoDirectoryUpRow")
            } catch {}

            function oW({
                overview: e
            }) {
                let t = (0, j.H)(),
                    {
                        refInfo: n,
                        path: r
                    } = (0, eC.Br)(),
                    {
                        items: i,
                        templateDirectorySuggestionUrl: o,
                        totalCount: a
                    } = rP(),
                    {
                        items: s
                    } = function(e, t) {
                        let n = e.length > t,
                            [r, i] = (0, v.useState)(n);
                        ! function(e, t) {
                            let n = (0, v.useCallback)(e, t);
                            (0, v.useEffect)(() => {
                                let e = null,
                                    t = null;
                                return t = requestAnimationFrame(() => {
                                    e = setTimeout(() => {
                                        n(), e = null
                                    }, 0), t = null
                                }), () => {
                                    e && clearTimeout(e), t && cancelAnimationFrame(t)
                                }
                            }, [n])
                        }(() => {
                            r && i(!1)
                        }, [r]);
                        let o = r ? e.slice(0, t) : e;
                        return {
                            truncated: r,
                            items: o
                        }
                    }(i, 100),
                    [l, c] = v.useState(!!e),
                    d = a - i.length,
                    {
                        commitInfo: u
                    } = function() {
                        let {
                            refInfo: e,
                            path: t
                        } = (0, eC.Br)(), n = (0, j.H)(), [r, i] = (0, v.useState)({
                            loading: !0
                        }), o = (0, rO.Lr)(), a = (0, w.Qi)({
                            repo: n,
                            action: "tree-commit-info",
                            commitish: e.name,
                            path: t
                        });
                        return (0, v.useEffect)(() => {
                            let e = !1,
                                t = async () => {
                                    i({
                                        loading: !0
                                    });
                                    let t = await (0, eD.v)(a);
                                    if (!e) try {
                                        t.ok ? i({
                                            commitInfo: await t.json()
                                        }) : (o({
                                            variant: "warning",
                                            message: "Failed to load latest commit information."
                                        }), i({
                                            error: !0
                                        }))
                                    } catch (e) {
                                        i({
                                            error: !0
                                        })
                                    }
                                };
                            return t(),
                                function() {
                                    e = !0
                                }
                        }, [o, a]), r
                    }(),
                    h = r.length > 1,
                    m = (0, w.C2)(r),
                    p = (0, w.Qi)({
                        repo: t,
                        action: "tree",
                        commitish: n.name,
                        path: m
                    }),
                    x = v.useRef(null),
                    {
                        getItemUrl: y
                    } = (0, t5.B)(),
                    g = (0, L.s)(),
                    {
                        focusHint: b
                    } = (0, oZ.x)(),
                    [N, C] = v.useState(-1),
                    S = v.useCallback(e => {
                        0 === e.screenX && 0 === e.screenY && x.current ? .focus()
                    }, []),
                    I = v.useCallback(() => {
                        c(!1)
                    }, []),
                    R = v.useCallback(e => {
                        let t;
                        C(e);
                        let n = document.getElementById(`folder-row-${e}`);
                        (t = window.innerWidth <= k._G.medium ? n ? .querySelector(".react-directory-row-name-cell-small-screen") : n ? .querySelector(".react-directory-row-name-cell-large-screen")) || (t = n), t ? .getElementsByTagName("a")[0] ? .focus()
                    }, []);
                return (0, f.jsxs)(E.Z, {
                    "data-hpc": !0,
                    children: [(0, f.jsx)(ep.P, {
                        buttonTestLabel: "focus-next-element-button",
                        buttonFocusId: eZ.KG,
                        buttonHotkey: "j",
                        onButtonClick: () => {
                            let e = Math.min(N + 1, h ? s.length : s.length - 1);
                            R(e)
                        }
                    }), (0, f.jsx)(ep.P, {
                        buttonTestLabel: "focus-previous-element-button",
                        buttonFocusId: eZ.KG,
                        buttonHotkey: "k",
                        onButtonClick: () => {
                            R(Math.max(N - 1, 0))
                        }
                    }), (0, f.jsx)(t6.N, {
                        as: "h2",
                        text: "Folders and files",
                        id: "folders-and-files"
                    }), (0, f.jsxs)(oF, {
                        "aria-labelledby": "folders-and-files",
                        sx: {
                            overflow: "unset"
                        },
                        children: [(0, f.jsxs)(oO, {
                            sx: e ? {
                                height: "0px",
                                lineHeight: "0px",
                                tr: {
                                    height: "0px",
                                    fontSize: "0px"
                                }
                            } : void 0,
                            children: [(0, f.jsx)(E.Z, {
                                as: "th",
                                sx: {
                                    width: "100%",
                                    borderTopLeftRadius: "6px",
                                    "@media screen and (min-width: 544px)": {
                                        display: "none"
                                    }
                                },
                                colSpan: 2,
                                children: (0, f.jsx)($.Z, {
                                    sx: {
                                        fontWeight: 600
                                    },
                                    children: "Name"
                                })
                            }), (0, f.jsx)(E.Z, {
                                as: "th",
                                sx: {
                                    width: "40%",
                                    borderTopLeftRadius: "6px",
                                    "@media screen and (max-width: 543px)": {
                                        display: "none"
                                    }
                                },
                                colSpan: 1,
                                children: (0, f.jsx)($.Z, {
                                    sx: {
                                        fontWeight: 600
                                    },
                                    children: "Name"
                                })
                            }), (0, f.jsx)(E.Z, {
                                as: "th",
                                sx: {
                                    "@media screen and (max-width: 543px)": {
                                        display: "none"
                                    }
                                },
                                children: (0, f.jsx)(K.Z, {
                                    inline: !0,
                                    title: "Last commit message",
                                    sx: {
                                        maxWidth: "100%"
                                    },
                                    children: (0, f.jsx)($.Z, {
                                        sx: {
                                            fontWeight: 600
                                        },
                                        children: "Last commit message"
                                    })
                                })
                            }), (0, f.jsx)(E.Z, {
                                as: "th",
                                sx: {
                                    textAlign: "right",
                                    pr: 3,
                                    width: "136px",
                                    borderTopRightRadius: "6px"
                                },
                                colSpan: 1,
                                children: (0, f.jsx)(K.Z, {
                                    inline: !0,
                                    title: "Last commit date",
                                    sx: {
                                        maxWidth: "100%"
                                    },
                                    children: (0, f.jsx)($.Z, {
                                        sx: {
                                            fontWeight: 600
                                        },
                                        children: "Last commit date"
                                    })
                                })
                            })]
                        }), (0, f.jsxs)("tbody", {
                            children: [!!e && (0, f.jsxs)(f.Fragment, {
                                children: [(0, f.jsx)(E.Z, {
                                    as: "tr",
                                    sx: {
                                        color: "fg.muted",
                                        fontSize: 0,
                                        height: "40px"
                                    },
                                    children: (0, f.jsx)(E.Z, {
                                        as: "td",
                                        colSpan: 3,
                                        sx: {
                                            backgroundColor: "canvas.subtle",
                                            p: 1,
                                            borderTopLeftRadius: 2,
                                            borderTopRightRadius: 2
                                        },
                                        children: (0, f.jsx)(rl, {
                                            commitCount: e ? .commitCount
                                        })
                                    })
                                }), d > 0 ? (0, f.jsx)("tr", {
                                    children: (0, f.jsx)("td", {
                                        colSpan: 3,
                                        children: (0, f.jsxs)(nP.Z, {
                                            variant: "warning",
                                            sx: {
                                                borderRadius: 0
                                            },
                                            children: [(0, f.jsx)(H.Z, {
                                                icon: A.AlertIcon
                                            }), "Sorry, we had to truncate this directory to 1,000 files. ", d, " entries were omitted from the list."]
                                        })
                                    })
                                }) : null]
                            }), h && (0, f.jsx)(o$, {
                                initialFocus: !b || !s.some(e => e.path === b),
                                linkTo: p,
                                linkRef: x,
                                navigate: g
                            }), s.map((e, t) => (0, f.jsx)(oH, {
                                initialFocus: e.path === b,
                                item: e,
                                commit: (u || {})[e.name],
                                onNavigate: S,
                                getItemUrl: y,
                                navigate: g,
                                className: l && t >= 10 ? "truncate-for-mobile" : void 0,
                                index: h ? t + 1 : t
                            }, e.name)), (0, f.jsx)(E.Z, {
                                as: "tr",
                                className: l && s.length > 10 ? "show-for-mobile" : "d-none",
                                sx: {
                                    textAlign: "center",
                                    verticalAlign: "center",
                                    height: "40px",
                                    borderTop: "1px solid",
                                    borderColor: "border.default"
                                },
                                "data-testid": "view-all-files-row",
                                children: (0, f.jsx)(E.Z, {
                                    as: "td",
                                    colSpan: 3,
                                    onClick: I,
                                    sx: {
                                        borderTop: "1px solid var(--borderColor-default, var(--color-border-default))",
                                        cursor: "pointer"
                                    },
                                    children: (0, f.jsx)("div", {
                                        children: (0, f.jsx)(eo.Z, {
                                            as: "button",
                                            onClick: I,
                                            children: "View all files"
                                        })
                                    })
                                })
                            })]
                        }), o && (0, f.jsx)(oP, {
                            children: (0, f.jsx)(oA, {
                                children: (0, f.jsxs)("td", {
                                    colSpan: 3,
                                    children: ["Customize the issue creation experience with a ", (0, f.jsx)("code", {
                                        children: "config.yml"
                                    }), " file.", " ", (0, f.jsx)(eo.Z, {
                                        href: o,
                                        children: "Learn more about configuring a template chooser."
                                    })]
                                })
                            })
                        })]
                    })]
                })
            }
            try {
                oW.displayName || (oW.displayName = "DirectoryContent")
            } catch {}

            function oz({
                editPath: e,
                editTooltip: t,
                customSx: n
            }) {
                let {
                    editFileShortcut: r
                } = (0, ek.bx)(), i = (0, L.s)();
                return e ? (0, f.jsx)(P.h, {
                    icon: A.PencilIcon,
                    sx: { ...n
                    },
                    "aria-label": t,
                    onClick: () => {
                        i(e)
                    },
                    "data-hotkey": r.hotkey,
                    size: "small",
                    title: t,
                    variant: "invisible"
                }) : null
            }
            try {
                oz.displayName || (oz.displayName = "EditButton")
            } catch {}

            function oU({
                openPanel: e,
                readme: t,
                setOpenPanel: n,
                stickyHeaderHeight: r
            }) {
                let {
                    displayName: i,
                    errorMessage: o,
                    richText: a,
                    headerInfo: s,
                    timedOut: l
                } = t, {
                    toc: c
                } = s || {}, d = (0, j.H)(), {
                    refInfo: u,
                    path: h
                } = (0, eC.Br)(), m = h && "/" !== h ? `${h}/${i}` : i;
                return (0, f.jsxs)(E.Z, {
                    sx: {
                        minWidth: 0,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        gap: 3
                    },
                    children: [(0, f.jsxs)(E.Z, {
                        id: "readme",
                        sx: {
                            borderColor: "border.default",
                            borderWidth: 1,
                            borderStyle: "solid",
                            borderRadius: 2,
                            width: "toc" === e ? "65%" : "100%"
                        },
                        children: [(0, f.jsxs)(E.Z, {
                            sx: {
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 2,
                                pr: 2,
                                pl: 3,
                                py: 2,
                                borderBottom: "1px solid",
                                borderColor: "border.default"
                            },
                            children: [(0, f.jsx)(_.Z, {
                                as: "h2",
                                sx: {
                                    fontSize: 1,
                                    flexGrow: 1
                                },
                                children: (0, f.jsx)(eo.Z, {
                                    sx: {
                                        color: "fg.default",
                                        "&:hover": {
                                            color: "accent.fg"
                                        }
                                    },
                                    href: "#readme",
                                    children: i
                                })
                            }), u.canEdit && (0, f.jsx)(oz, {
                                editPath: (0, w.Qi)({
                                    repo: d,
                                    commitish: u.name,
                                    action: "edit",
                                    path: m
                                }),
                                editTooltip: "Edit README"
                            }), (0, f.jsx)(n6, {
                                toc: c,
                                openPanel: e,
                                setOpenPanel: n,
                                isDirectoryReadme: !0
                            })]
                        }), (0, f.jsx)(oG, {
                            richText: a,
                            errorMessage: o,
                            path: m,
                            stickyHeaderHeight: r,
                            timedOut: l
                        })]
                    }), "toc" === e && (0, f.jsx)(rL.s, {
                        sx: {
                            height: "fit-content",
                            width: "35%"
                        },
                        children: (0, f.jsx)(rT, {
                            onClose: () => {
                                n(void 0)
                            },
                            toc: c
                        })
                    })]
                })
            }

            function oG({
                errorMessage: e,
                onAnchorClick: t,
                path: n,
                richText: r,
                stickyHeaderHeight: i,
                timedOut: o
            }) {
                let a = (0, j.H)(),
                    {
                        refInfo: s
                    } = (0, eC.Br)();
                return e ? (0, f.jsxs)(E.Z, {
                    sx: {
                        py: 6,
                        px: 3,
                        textAlign: "center"
                    },
                    children: [o && (0, f.jsx)(H.Z, {
                        icon: A.HourglassIcon,
                        size: 32
                    }), (0, f.jsx)(E.Z, {
                        "data-testid": "directory-richtext-error-message",
                        children: e
                    }), o && (0, f.jsxs)(E.Z, {
                        children: ["But you can view the", " ", (0, f.jsx)(eo.Z, {
                            href: (0, w.Qi)({
                                repo: a,
                                commitish: s.name,
                                action: "raw",
                                path: n
                            }),
                            "data-testid": "directory-richtext-timeout-raw-link",
                            children: "raw file"
                        }), "."]
                    })]
                }) : r ? (0, f.jsx)(eJ, {
                    onAnchorClick: t,
                    richText: r,
                    stickyHeaderHeight: i,
                    sx: {
                        p: 5,
                        overflow: "auto"
                    }
                }) : null
            }
            try {
                oU.displayName || (oU.displayName = "DirectoryReadmePreview")
            } catch {}
            try {
                oG.displayName || (oG.displayName = "DirectoryRichtextContent")
            } catch {}

            function oV({
                uploadUrl: e
            }) {
                return (0, f.jsx)("div", {
                    className: "repo-file-upload-tree-target js-document-dropzone js-upload-manifest-tree-view",
                    "data-testid": "dragzone",
                    "data-drop-url": e,
                    children: (0, f.jsx)("div", {
                        className: "repo-file-upload-outline",
                        children: (0, f.jsxs)("div", {
                            className: "repo-file-upload-slate",
                            children: [(0, f.jsx)(E.Z, {
                                sx: {
                                    color: "fg.muted"
                                },
                                children: (0, f.jsx)(A.FileIcon, {
                                    size: 32
                                })
                            }), (0, f.jsx)("h2", {
                                "aria-hidden": "true",
                                children: "Drop to upload your files"
                            })]
                        })
                    })
                })
            }
            try {
                oV.displayName || (oV.displayName = "Dropzone")
            } catch {}

            function oq({
                showTree: e,
                treeToggleElement: t
            }) {
                let n = (0, v.useRef)(null),
                    r = (0, e_.X)(n),
                    i = (0, e_.V)();
                return (0, f.jsx)(E.Z, {
                    className: "react-blob-view-header-sticky",
                    sx: { ...i,
                        zIndex: r ? 1 : 0
                    },
                    ref: n,
                    children: (0, f.jsx)(E.Z, {
                        sx: {
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "canvas.subtle",
                            borderBottom: r ? "1px solid var(--borderColor-default, var(--color-border-default))" : "none",
                            overflow: "hidden"
                        },
                        children: (0, f.jsx)(nx, {
                            isStickied: r,
                            showTree: e,
                            treeToggleElement: t
                        })
                    })
                })
            }
            try {
                oq.displayName || (oq.displayName = "FolderViewHeader")
            } catch {}

            function oK({
                initialFiles: e,
                shouldRecommendReadme: t,
                isPersonalRepo: n,
                processingTime: r
            }) {
                let o, a;
                let [s, l] = (0, v.useState)(e), c = s.find(e => e.preferredFileType === i.README), d = s.find(e => e.preferredFileType === i.CODE_OF_CONDUCT), u = s.filter(e => e.preferredFileType === i.LICENSE), h = s.find(e => e.preferredFileType === i.SECURITY), m = "readme-ov-file";
                c || t || (d ? m = "coc-ov-file" : u[0] ? m = `${u[0].tabName}-1-ov-file` : h && (m = "security-ov-file"));
                let [p, x] = (0, v.useState)(m), y = (0, v.useRef)(null), g = (0, j.H)(), {
                    refInfo: b
                } = (0, eC.Br)();
                (0, v.useEffect)(() => {
                    e.length && (0, ef.qP)("overview-repo-files", {
                        "file-count": e.length,
                        "timed-out": e.some(e => e.timedOut),
                        "processing-time": r
                    })
                }, [e, r]), (0, v.useEffect)(() => {
                    let t = async () => {
                        let e = await (0, eD.v)(`/${g.ownerLogin}/${g.name}/overview-files`, {
                                method: "GET"
                            }),
                            t = await e.json();
                        l(t.files), t.files && (0, ef.qP)("overview-repo-files", {
                            "file-count": t.files.length,
                            "timed-out": t.files.some(e => e.timedOut),
                            "processing-time": t.processingTime
                        })
                    };
                    e.some(e => !e.loaded) && t()
                }, [g.name, g.ownerLogin, e]);
                let N = (0, v.useCallback)(() => {
                        let e = [];
                        if ((c || t) && e.push("readme-ov-file"), d && e.push("coc-ov-file"), u.length)
                            for (let [t, n] of u.entries()) e.push(`${n.tabName}-${t+1}-ov-file`);
                        return h && e.push("security-ov-file"), e
                    }, [d, u, c, h, t]),
                    C = (0, v.useCallback)(() => {
                        let e = window.location.hash.replace("#", ""),
                            t = N();
                        if (e && t.includes(e)) {
                            if ("undefined" == typeof navigation) return;
                            let t = `${window.location.protocol}//${window.location.host}${window.location.pathname}?tab=${e}#readme`;
                            history.replaceState(navigation.currentEntry.getState(), "", t), x(e)
                        } else {
                            let e = new URLSearchParams(window.location.search),
                                n = e.get("tab");
                            n && t.includes(n) && x(n)
                        }
                        window.requestAnimationFrame(() => {
                            y.current && "#readme" === window.location.hash && y.current.scrollIntoView()
                        })
                    }, [N]);
                (0, v.useEffect)(() => (C(), window.addEventListener("hashchange", C), () => {
                    window.removeEventListener("hashchange", C)
                }), [C]);
                let k = (0, v.useCallback)((e, t) => {
                    if (e.preventDefault(), p === t || (x(t), "undefined" == typeof navigation)) return;
                    let n = `${window.location.protocol}//${window.location.host}${window.location.pathname}?tab=${t}`;
                    history.replaceState(navigation.currentEntry.getState(), "", n)
                }, [p]);
                if (!c && !d && !u.length && !h && !t) return null;
                let S = u.find((e, t) => `${e.tabName}-${t+1}-ov-file` === p);
                return "readme-ov-file" === p ? c ? a = c : t && (o = (0, f.jsx)(oY, {
                    title: "Add a README",
                    description: n ? "Add a README with an overview of your project." : "Help people interested in this repository understand your project by adding a README.",
                    icon: A.BookIcon,
                    buttonText: "Add a README",
                    href: `${(0,w.Qi)({repo:g,path:void 0,commitish:b.name,action:"new"})}?filename=README.md`
                })) : "coc-ov-file" === p && d ? a = d : S ? a = S : h && (a = h), a && a.path && (o = a.loaded ? (0, f.jsx)(oG, {
                    errorMessage: a.errorMessage,
                    onAnchorClick: () => {
                        if ("undefined" == typeof navigation) return;
                        let e = `${window.location.protocol}//${window.location.host}${window.location.pathname}?tab=${p}${window.location.hash}`;
                        history.replaceState(navigation.currentEntry.getState(), "", e)
                    },
                    path: a.path,
                    richText: a.richText,
                    stickyHeaderHeight: 50,
                    timedOut: a.timedOut
                }) : (0, f.jsx)(E.Z, {
                    sx: {
                        display: "flex",
                        flexGrow: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        py: 4
                    },
                    children: (0, f.jsx)(eq.Z, {})
                })), (0, f.jsx)(E.Z, {
                    sx: {
                        display: "flex",
                        flexGrow: 1,
                        gap: 3
                    },
                    children: (0, f.jsxs)(E.Z, {
                        sx: {
                            border: "1px solid",
                            borderColor: "border.default",
                            borderRadius: "6px",
                            display: "flex",
                            flexDirection: "column",
                            flexGrow: 1,
                            "@media screen and (max-width: 543px)": {
                                mx: "-16px",
                                maxWidth: "calc(100% + 32px)"
                            },
                            "@media screen and (min-width: 544px)": {
                                maxWidth: "100%"
                            }
                        },
                        ref: y,
                        children: [(0, f.jsxs)(E.Z, {
                            sx: {
                                display: "flex",
                                borderBottom: "1px solid",
                                borderBottomColor: "border.default",
                                alignItems: "center",
                                pr: 2,
                                position: "sticky",
                                top: 0,
                                backgroundColor: "canvas.default",
                                zIndex: 1,
                                borderTopLeftRadius: "6px",
                                borderTopRightRadius: "6px"
                            },
                            children: [(0, f.jsxs)(i7.J, {
                                "aria-label": "Repository files",
                                sx: {
                                    flexGrow: 1,
                                    borderBottom: "none",
                                    maxWidth: "100%",
                                    px: 2
                                },
                                children: [(c || t) && (0, f.jsx)(i7.J.Item, {
                                    icon: A.BookIcon,
                                    "aria-current": "readme-ov-file" === p ? "page" : void 0,
                                    onSelect: e => k(e, "readme-ov-file"),
                                    children: c ? .tabName || "README"
                                }), d && (0, f.jsx)(i7.J.Item, {
                                    icon: A.CodeOfConductIcon,
                                    "aria-current": "coc-ov-file" === p ? "page" : void 0,
                                    onSelect: e => k(e, "coc-ov-file"),
                                    children: d ? .tabName || "Code of conduct"
                                }), u.length ? u.map((e, t) => {
                                    let n = `${e.tabName}-${t+1}-ov-file`;
                                    return (0, f.jsx)(i7.J.Item, {
                                        icon: A.LawIcon,
                                        "aria-current": p === n ? "page" : void 0,
                                        onSelect: e => k(e, n),
                                        children: "license" !== e.tabName.toLowerCase() ? `${e.tabName} license` : "License"
                                    }, e.path)
                                }) : null, h && (0, f.jsx)(i7.J.Item, {
                                    icon: A.LawIcon,
                                    "aria-current": "security-ov-file" === p ? "page" : void 0,
                                    onSelect: e => k(e, "security-ov-file"),
                                    children: h ? .tabName || "Security policy"
                                })]
                            }), b.canEdit && a && (0, f.jsx)(oz, {
                                editPath: (0, w.ti)({
                                    owner: g.ownerLogin,
                                    repo: a.repoName,
                                    commitish: a.refName,
                                    filePath: a.path
                                }),
                                editTooltip: "Edit file",
                                customSx: {
                                    mr: 2,
                                    height: "28px"
                                }
                            }), a ? .headerInfo ? .toc && a ? .headerInfo ? .toc ? .length >= 2 && (0, f.jsxs)(tF.P, {
                                children: [(0, f.jsx)(tF.P.Button, {
                                    icon: A.ListUnorderedIcon,
                                    variant: "invisible",
                                    "aria-label": "Outline",
                                    sx: {
                                        color: "fg.subtle",
                                        px: 2
                                    },
                                    children: "Outline"
                                }), (0, f.jsx)(tF.P.Overlay, {
                                    align: "end",
                                    sx: {
                                        minWidth: "256px"
                                    },
                                    children: (0, f.jsx)(rT, {
                                        toc: a.headerInfo.toc
                                    })
                                })]
                            })]
                        }), o]
                    })
                })
            }

            function oY({
                title: e,
                description: t,
                icon: n,
                buttonText: r,
                href: i
            }) {
                return (0, f.jsxs)(E.Z, {
                    sx: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        py: 5,
                        px: 3
                    },
                    children: [(0, f.jsx)(H.Z, {
                        icon: n,
                        size: 32,
                        sx: {
                            color: "fg.subtle",
                            mb: 3
                        }
                    }), (0, f.jsxs)(E.Z, {
                        sx: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 1,
                            mb: 5
                        },
                        children: [(0, f.jsx)(_.Z, {
                            as: "h2",
                            sx: {
                                fontSize: 4
                            },
                            children: e
                        }), (0, f.jsx)($.Z, {
                            sx: {
                                fontSize: 0,
                                color: "fg.subtle",
                                textAlign: "center"
                            },
                            children: t
                        })]
                    }), (0, f.jsx)(nu.r, {
                        as: e7.r,
                        to: i,
                        variant: "primary",
                        reloadDocument: !0,
                        children: r
                    })]
                })
            }
            try {
                oK.displayName || (oK.displayName = "OverviewFiles")
            } catch {}
            try {
                oY.displayName || (oY.displayName = "MissingContent")
            } catch {}
            var oQ = n(96604);

            function oX({
                rename: e
            }) {
                let [t, n] = (0, v.useState)(!1), r = (0, v.useRef)(null), i = (0, F.x)(), o = (0, j.H)();
                return (0, f.jsx)(oQ.Z, {
                    open: !t,
                    caret: "top-left",
                    sx: {
                        width: "480px",
                        mt: "6px",
                        ml: 1
                    },
                    children: (0, f.jsxs)(oQ.Z.Content, {
                        sx: {
                            width: "480px",
                            color: "fg.default",
                            fontSize: 1
                        },
                        children: [(0, f.jsx)(_.Z, {
                            as: "h4",
                            sx: {
                                fontSize: 2,
                                pb: 2
                            },
                            children: "The default branch has been renamed!"
                        }), (0, f.jsxs)($.Z, {
                            as: "p",
                            children: [(0, f.jsx)(iw.Z, {
                                children: e.oldName
                            }), " is now named", " ", (0, f.jsx)(iw.Z, {
                                sx: {
                                    backgroundColor: "accent.emphasis",
                                    color: "fg.onEmphasis"
                                },
                                children: e.newName
                            })]
                        }), (0, f.jsxs)($.Z, {
                            as: "p",
                            sx: {
                                mb: 0
                            },
                            children: ["If you have a local clone, you can update it by running the following commands.", e.shellEscapingDocsURL ? (0, f.jsx)(eo.Z, {
                                href: e.shellEscapingDocsURL,
                                children: "Learn about dealing with special characters on the command line."
                            }) : null]
                        }), (0, f.jsx)(iZ.m, {
                            textToCopy: r.current ? .textContent ? ? "",
                            tooltipProps: {
                                sx: {
                                    position: "absolute",
                                    right: 3,
                                    top: "140px"
                                }
                            }
                        }), (0, f.jsx)(E.Z, {
                            as: "pre",
                            sx: {
                                py: "20px"
                            },
                            ref: r,
                            children: `git branch -m ${e.shellOldName} ${e.shellNewName}
git fetch origin
git branch -u ${e.shellNewName} ${e.shellNewName}
git remote set-head origin -a`
                        }), (0, f.jsx)(nu.r, {
                            onClick: () => {
                                if (!i) return;
                                let e = (0, w.xv)({
                                        login: i.login
                                    }),
                                    t = new FormData;
                                t.append("_method", "delete"), t.append("repository_id", o.id.toString()), t.append("notice_name", "repo_default_branch_rename"), (0, eD.Q)(e, {
                                    method: "POST",
                                    body: t
                                }), n(!0)
                            },
                            children: "OK, got it"
                        })]
                    })
                })
            }
            try {
                oX.displayName || (oX.displayName = "BranchRenamePopover")
            } catch {}

            function oJ({
                branchName: e,
                nameWithOwner: t
            }) {
                let [n, r] = (0, v.useState)(!1), i = (0, F.x)(), o = (0, j.H)();
                return (0, f.jsx)(oQ.Z, {
                    open: !n,
                    caret: "top-left",
                    sx: {
                        width: "530px",
                        mt: "6px",
                        ml: 1
                    },
                    children: (0, f.jsxs)(oQ.Z.Content, {
                        sx: {
                            width: "530px",
                            color: "fg.default",
                            fontSize: 1
                        },
                        children: [(0, f.jsx)(_.Z, {
                            as: "h4",
                            sx: {
                                fontSize: 2,
                                pb: 2
                            },
                            children: "The default branch on the parent repository has been renamed!"
                        }), (0, f.jsxs)($.Z, {
                            as: "p",
                            children: [(0, f.jsx)(iw.Z, {
                                children: t
                            }), " renamed its default branch", " ", (0, f.jsx)(iw.Z, {
                                sx: {
                                    backgroundColor: "accent.emphasis",
                                    color: "fg.onEmphasis"
                                },
                                children: e
                            })]
                        }), (0, f.jsxs)($.Z, {
                            as: "p",
                            children: ["You can rename this fork's default branch to match in", " ", (0, f.jsx)(eo.Z, {
                                href: (0, w.FL)({
                                    owner: o.ownerLogin,
                                    repo: o.name,
                                    action: "settings"
                                }),
                                children: "branch settings"
                            })]
                        }), (0, f.jsx)(nu.r, {
                            onClick: () => {
                                if (!i) return;
                                let e = (0, w.xv)({
                                        login: i.login
                                    }),
                                    t = new FormData;
                                t.append("_method", "delete"), t.append("repository_id", o.id.toString()), t.append("notice_name", "repo_parent_default_branch_rename"), (0, eD.Q)(e, {
                                    method: "POST",
                                    body: t
                                }), r(!0)
                            },
                            children: "OK, got it"
                        })]
                    })
                })
            }
            try {
                oJ.displayName || (oJ.displayName = "ParentBranchRenamePopover")
            } catch {}
            let o0 = (0, v.lazy)(() => Promise.resolve().then(n.bind(n, 36218)));

            function o1({
                tree: e,
                overview: t,
                showTree: n,
                treeToggleElement: r,
                onFindFilesShortcut: o
            }) {
                let a = (0, j.H)(),
                    s = (0, F.x)(),
                    {
                        refInfo: l,
                        path: c
                    } = (0, eC.Br)(),
                    d = (0, w.Qi)({
                        repo: a,
                        commitish: l.name,
                        path: c,
                        action: "upload"
                    }),
                    {
                        openPanel: u,
                        setOpenPanel: h
                    } = ej(),
                    [m, p] = (0, v.useState)(t ? .hideRepoFiles),
                    [x, y] = (0, v.useState)(""),
                    [g, b] = (0, v.useState)(""),
                    N = (0, L.s)(),
                    C = (0, v.useCallback)(() => {
                        p(!1)
                    }, []);
                (0, v.useEffect)(() => {
                    let e = async () => {
                            let e = await (0, eD.Q)(t.branchCountPath, {
                                method: "get"
                            });
                            if (e.ok) {
                                let t = await e.text();
                                y(t)
                            }
                        },
                        n = async () => {
                            let e = await (0, eD.Q)(t.tagCountPath, {
                                method: "get"
                            });
                            if (e.ok) {
                                let t = await e.text();
                                b(t)
                            }
                        };
                    t && (e(), n())
                }, [t]);
                let k = t ? t.overviewFiles.find(e => e.preferredFileType === i.README) : e.readme,
                    S = (0, v.useCallback)(() => {
                        N(`${window.location.pathname}?search=1`)
                    }, [N]);
                return (0, f.jsxs)(rM, {
                    payload: e,
                    children: [t ? (0, f.jsxs)(E.Z, {
                        sx: {
                            display: "flex",
                            justifyContent: "space-between",
                            flexGrow: 1,
                            pb: 3,
                            pt: 2
                        },
                        children: [(0, f.jsxs)(E.Z, {
                            sx: {
                                display: "flex",
                                flexDirection: "row",
                                gap: 2,
                                "@media screen and (max-width: 320px)": {
                                    flexGrow: 1
                                }
                            },
                            children: [(0, f.jsxs)(E.Z, {
                                sx: {
                                    position: "relative",
                                    "@media screen and (max-width: 380px)": {
                                        ".ref-selector-button-text-container": {
                                            maxWidth: "80px"
                                        }
                                    },
                                    "@media screen and (max-width: 320px)": {
                                        flexGrow: 1,
                                        ".overview-ref-selector": {
                                            width: "100%",
                                            "> span": {
                                                display: "flex",
                                                justifyContent: "flex-start",
                                                '> span[data-component="text"]': {
                                                    flexGrow: 1
                                                }
                                            }
                                        }
                                    }
                                },
                                children: [(0, f.jsx)(np, {
                                    buttonClassName: "overview-ref-selector"
                                }), t.popovers.rename ? (0, f.jsx)(oX, {
                                    rename: t.popovers.rename
                                }) : t.popovers.renamedParentRepo ? (0, f.jsx)(oJ, {
                                    branchName: t.popovers.renamedParentRepo.branchName,
                                    nameWithOwner: t.popovers.renamedParentRepo.nameWithOwner
                                }) : null]
                            }), (0, f.jsxs)(E.Z, {
                                sx: {
                                    display: "flex",
                                    "@media screen and (max-width: 1080px)": {
                                        display: "none"
                                    }
                                },
                                children: [(0, f.jsx)(nu.r, {
                                    as: "a",
                                    leadingVisual: A.GitBranchIcon,
                                    variant: "invisible",
                                    href: (0, w.v2)({
                                        repo: a
                                    }),
                                    sx: {
                                        color: "fg.muted",
                                        px: 1,
                                        'span[data-component="leadingVisual"]': {
                                            mr: "4px !important"
                                        }
                                    },
                                    children: x ? (0, f.jsx)(ez.wB, {
                                        unverifiedHTML: x
                                    }) : "Branches"
                                }), (0, f.jsx)(nu.r, {
                                    as: "a",
                                    leadingVisual: A.TagIcon,
                                    variant: "invisible",
                                    href: (0, w.Aq)({
                                        repo: a
                                    }),
                                    sx: {
                                        color: "fg.muted",
                                        px: 1,
                                        'span[data-component="leadingVisual"]': {
                                            mr: "4px !important"
                                        }
                                    },
                                    children: g ? (0, f.jsx)(ez.wB, {
                                        unverifiedHTML: g
                                    }) : "Tags"
                                })]
                            }), (0, f.jsxs)(E.Z, {
                                sx: {
                                    display: "flex",
                                    "@media screen and (min-width: 1080px)": {
                                        display: "none"
                                    },
                                    "@media screen and (max-width: 544px)": {
                                        display: "none"
                                    }
                                },
                                children: [(0, f.jsx)(nu.r, {
                                    as: "a",
                                    "aria-label": "Go to Branches page",
                                    icon: A.GitBranchIcon,
                                    variant: "invisible",
                                    href: (0, w.v2)({
                                        repo: a
                                    }),
                                    sx: {
                                        color: "fg.muted"
                                    }
                                }), (0, f.jsx)(nu.r, {
                                    as: "a",
                                    "aria-label": "Go to Tags page",
                                    icon: A.TagIcon,
                                    variant: "invisible",
                                    href: (0, w.Aq)({
                                        repo: a
                                    }),
                                    sx: {
                                        color: "fg.muted"
                                    }
                                })]
                            })]
                        }), (0, f.jsxs)(E.Z, {
                            sx: {
                                display: "flex",
                                pl: 2,
                                gap: 2
                            },
                            children: [(0, f.jsxs)(E.Z, {
                                sx: {
                                    display: "flex",
                                    gap: 2,
                                    "@media screen and (max-width: 544px)": {
                                        display: "none"
                                    }
                                },
                                children: [(0, f.jsx)(E.Z, {
                                    sx: {
                                        display: "flex",
                                        "@media screen and (max-width: 1012px)": {
                                            display: "none"
                                        }
                                    },
                                    children: (0, f.jsx)(v.Suspense, {
                                        fallback: null,
                                        children: (0, f.jsx)(o0, {
                                            onFindFilesShortcut: o,
                                            sx: {
                                                m: 0
                                            }
                                        })
                                    })
                                }), (0, f.jsx)(E.Z, {
                                    sx: {
                                        display: "flex",
                                        "@media screen and (min-width: 1012px)": {
                                            display: "none"
                                        }
                                    },
                                    children: (0, f.jsx)(nu.r, {
                                        onClick: S,
                                        children: "Go to file"
                                    })
                                }), (0, f.jsx)("div", {
                                    className: "react-directory-add-file-icon",
                                    children: (0, f.jsx)(nD, {
                                        useIcon: !0
                                    })
                                }), (0, f.jsx)("div", {
                                    className: "react-directory-remove-file-icon",
                                    children: (0, f.jsx)(nD, {
                                        useIcon: !1
                                    })
                                })]
                            }), (0, f.jsx)(ot, {
                                repoId: a.id,
                                refName: l.name,
                                payload: t,
                                isLoggedIn: !!s,
                                primary: !t.templateButton
                            }), (0, f.jsx)(E.Z, {
                                sx: {
                                    display: "flex",
                                    "@media screen and (min-width: 544px)": {
                                        display: "none"
                                    }
                                },
                                children: (0, f.jsxs)(tF.P, {
                                    children: [(0, f.jsx)(tF.P.Anchor, {
                                        children: (0, f.jsx)(P.h, {
                                            icon: A.KebabHorizontalIcon,
                                            "aria-label": "Open more actions menu"
                                        })
                                    }), (0, f.jsx)(tF.P.Overlay, {
                                        children: (0, f.jsxs)(er.S, {
                                            children: [(0, f.jsxs)(er.S.LinkItem, {
                                                href: (0, w.v2)({
                                                    repo: a
                                                }),
                                                children: [(0, f.jsx)(er.S.LeadingVisual, {
                                                    children: (0, f.jsx)(H.Z, {
                                                        icon: A.GitBranchIcon
                                                    })
                                                }), "Branches"]
                                            }), (0, f.jsxs)(er.S.LinkItem, {
                                                href: (0, w.Aq)({
                                                    repo: a
                                                }),
                                                children: [(0, f.jsx)(er.S.LeadingVisual, {
                                                    children: (0, f.jsx)(H.Z, {
                                                        icon: A.TagIcon
                                                    })
                                                }), "Tags"]
                                            }), (0, f.jsx)(er.S.Divider, {}), (0, f.jsxs)(er.S.Item, {
                                                onClick: S,
                                                children: [(0, f.jsx)(er.S.LeadingVisual, {
                                                    children: (0, f.jsx)(H.Z, {
                                                        icon: A.SearchIcon
                                                    })
                                                }), "Go to file"]
                                            }), (0, f.jsxs)(er.S.LinkItem, {
                                                as: e7.r,
                                                to: (0, w.Qi)({
                                                    repo: a,
                                                    path: c,
                                                    commitish: l.name,
                                                    action: "new"
                                                }),
                                                children: [(0, f.jsx)(er.S.LeadingVisual, {
                                                    children: (0, f.jsx)(H.Z, {
                                                        icon: A.PlusIcon
                                                    })
                                                }), "Create new file"]
                                            }), (0, f.jsxs)(er.S.LinkItem, {
                                                href: (0, w.Qi)({
                                                    repo: a,
                                                    path: c,
                                                    commitish: l.name,
                                                    action: "upload"
                                                }),
                                                children: [(0, f.jsx)(er.S.LeadingVisual, {
                                                    children: (0, f.jsx)(H.Z, {
                                                        icon: A.UploadIcon
                                                    })
                                                }), "Upload file"]
                                            })]
                                        })
                                    })]
                                })
                            })]
                        })]
                    }) : (0, f.jsx)(rs, {}), e.showBranchInfobar && (0, f.jsx)(i5.S, {
                        fallback: (0, f.jsx)(o2, {}),
                        children: (0, f.jsx)(oI, {})
                    }), !t && (0, f.jsx)(oq, {
                        showTree: n,
                        treeToggleElement: r
                    }), (0, f.jsxs)(E.Z, {
                        sx: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 3
                        },
                        children: [m ? (0, f.jsx)(eo.Z, {
                            onClick: C,
                            children: "View stack template source"
                        }) : (0, f.jsx)(E.Z, {
                            children: (0, f.jsx)(oW, {
                                overview: t
                            })
                        }), t && (0, f.jsx)(oK, {
                            initialFiles: t.overviewFiles,
                            shouldRecommendReadme: t.banners.shouldRecommendReadme,
                            isPersonalRepo: t.banners.isPersonalRepo,
                            processingTime: t.overviewFilesProcessingTime
                        }), k && !t && (0, f.jsx)(oU, {
                            openPanel: u,
                            setOpenPanel: h,
                            readme: k,
                            stickyHeaderHeight: 50
                        }), t && !k && t.banners.shouldRecommendReadme && (0, f.jsxs)(nP.Z, {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            },
                            className: "file-tree-view-readme-flash-narrow",
                            children: [(0, f.jsx)($.Z, {
                                children: t.banners.isPersonalRepo ? "Add a README with an overview of your project." : "Help people interested in this repository understand your project by adding a README."
                            }), (0, f.jsx)(nu.r, {
                                as: e7.r,
                                to: `${(0,w.Qi)({repo:a,path:void 0,commitish:l.name,action:"new"})}?filename=README.md`,
                                reloadDocument: !0,
                                children: "Add a README"
                            })]
                        }), a.currentUserCanPush && (0, f.jsx)(oV, {
                            uploadUrl: d
                        })]
                    })]
                })
            }

            function o2() {
                return (0, f.jsx)(nP.Z, {
                    variant: "warning",
                    sx: {
                        my: 3
                    },
                    children: (0, f.jsx)($.Z, {
                        children: "Cannot retrieve comparison with upstream repository."
                    })
                })
            }
            try {
                o0.displayName || (o0.displayName = "FileResultsList")
            } catch {}
            try {
                o1.displayName || (o1.displayName = "FileTreeViewContent")
            } catch {}
            try {
                o2.displayName || (o2.displayName = "BranchInfoBarErrorBanner")
            } catch {}
            var o3 = n(74176),
                o4 = n(53467);

            function o8(e) {
                return b(e) ? { ...e.fileTree,
                    [e.path]: {
                        items: e.tree.items,
                        totalCount: e.tree.totalCount
                    }
                } : e.fileTree
            }
            let o6 = (0, v.lazy)(() => Promise.all([n.e("vendors-node_modules_github_selector-observer_dist_index_esm_js"), n.e("vendors-node_modules_primer_react_lib-esm_SelectPanel_SelectPanel_js"), n.e("vendors-node_modules_lit-html_lit-html_js"), n.e("vendors-node_modules_codemirror_lib_codemirror_js"), n.e("vendors-node_modules_tanstack_query-core_build_modern_queryClient_js-node_modules_tanstack_qu-0e879d"), n.e("vendors-node_modules_buffer_index_js"), n.e("vendors-node_modules_js-yaml_index_js-node_modules_leven_index_js"), n.e("vendors-node_modules_cronstrue_dist_cronstrue_js"), n.e("vendors-node_modules_codemirror_autocomplete_dist_index_js-node_modules_codemirror_search_dis-aafe81"), n.e("vendors-node_modules_jsonc-parser_lib_esm_main_js"), n.e("vendors-node_modules_github_text-expander-element_dist_index_js"), n.e("vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_codemirror_lin-3c37cc"), n.e("app_assets_modules_github_editor_codemirror-linter-util_ts-app_assets_modules_github_editor_y-89a4a6"), n.e("app_assets_modules_github_editor_yaml-editors_workflow_workflow-rules_ts"), n.e("app_assets_modules_react-code-view_components_blob-edit_WebCommitDialog_tsx"), n.e("app_assets_modules_github_editor_yaml-editors_dependabot_dependabot-rules_ts"), n.e("app_assets_modules_react-code-view_components_blob-edit_BlobEditor_tsx")]).then(n.bind(n, 45667)));

            function o5({
                initialPayload: e
            }) {
                let t;
                let n = function(e) {
                        let t = (0, C.T)(),
                            n = e || t,
                            r = (0, v.useRef)(n),
                            i = (0, v.useContext)(N.h);
                        if (n) r.current = n;
                        else {
                            var o;
                            let e = (0, w.Vr)(location.pathname, r.current.refInfo.name, r.current.path);
                            n = {
                                path: e,
                                repo: (o = r.current).repo,
                                refInfo: o.refInfo,
                                currentUser: o.currentUser,
                                fileTree: o8(o),
                                fileTreeProcessingTime: o.fileTreeProcessingTime,
                                foldersToFetch: o.foldersToFetch,
                                allShortcutsEnabled: o.allShortcutsEnabled,
                                treeExpanded: o.treeExpanded,
                                symbolsExpanded: o.symbolsExpanded,
                                reducedMotionEnabled: o.reducedMotionEnabled,
                                error: i || void 0
                            }
                        }
                        return n
                    }(e),
                    r = (0, j.H)(),
                    {
                        path: i
                    } = n,
                    o = function(e) {
                        let t = (0, v.useRef)([]);
                        for (let n of t.current)
                            if (e === n || function e(t, n) {
                                    if (t === n) return !0;
                                    if ("object" != typeof t || typeof t != typeof n || !t || !n) return !1;
                                    if (Array.isArray(t)) {
                                        if (!Array.isArray(n) || t.length !== n.length) return !1;
                                        for (let r = 0; r < t.length; r++)
                                            if (!e(t[r], n[r])) return !1;
                                        return !0
                                    }
                                    let r = Object.keys(t),
                                        i = Object.keys(n);
                                    if (r.length !== i.length) return !1;
                                    for (let i of r)
                                        if (!e(t[i], n[i])) return !1;
                                    return !0
                                }(n, e)) return n;
                        return t.current.unshift(e), t.current.length > 5 && t.current.pop(), e
                    }(n.refInfo),
                    a = y(n),
                    s = p(n),
                    l = p(n) && "blame" in n,
                    c = x(n),
                    d = "overview" in n,
                    [u, h] = (0, v.useState)(null),
                    m = (0, nw.Ez)(r, o, i, n.error ? .httpStatus === 404),
                    O = v.useRef(!1),
                    A = v.useRef(null),
                    P = v.useRef(!1),
                    M = v.useRef(!1),
                    H = v.useRef(null),
                    $ = v.useRef(null),
                    W = "repos-file-tree",
                    z = v.useRef(),
                    U = (0, L.s)(),
                    [G, q] = (0, v.useState)(""),
                    {
                        toggleFocusedPaneShortcut: K
                    } = (0, ek.bx)();
                (0, R.p)(!1), (0, v.useEffect)(() => () => (0, R.p)(!0), []), (0, Z.V)(!d);
                let Y = v.useMemo(() => o8(n), [n.path, n.refInfo.currentOid]),
                    {
                        isTreeExpanded: Q,
                        collapseTree: X,
                        expandTree: J,
                        treeToggleElement: ee,
                        treeToggleRef: et,
                        searchBoxRef: en
                    } = function(e, t, n, r) {
                        let {
                            sendRepoClickEvent: i
                        } = (0, V.a)(), o = eF(), a = (0, F.x)(), s = (0, D.ej)("fileTreeExpanded"), l = !(void 0 !== S.n4), c = (!a && s && "false" !== s.value || a && r) && !e;
                        void 0 === c && (c = !1), e && c && !l && document.querySelector(".react-repos-overview-margin") ? .classList.add("tree-open");
                        let d = (0, v.useRef)(null),
                            u = (0, v.useRef)(null),
                            {
                                screenSize: h
                            } = (0, k.eI)(),
                            [m, p] = (0, v.useState)(c),
                            x = (0, v.useRef)(c),
                            y = (0, v.useRef)(!1),
                            g = (0, v.useRef)(!1),
                            b = (0, v.useCallback)(() => !((e || n.current) && window.innerWidth >= i3 || !n.current && window.innerWidth >= k._G.xlarge), [e, n]);
                        (0, T.b)(() => {
                            let t = b();
                            t || (y.current = !1);
                            let n = (0, iD.$)() && h < k._G.large && !g.current || (!t || y.current) && (a && m || !a && s ? .value !== "false") && !e;
                            p(n)
                        }, [y, s ? .value, h, n, e, b, a]), (0, T.b)(() => {
                            let t = !(e || n.current) && window.innerWidth < k._G.xlarge,
                                r = !(e || n.current) && window.innerWidth >= k._G.xlarge;
                            t && x.current && !(0, iD.$)() && m && p(!1), r && x.current && !m && p(!0)
                        }, [e, n, h]), (0, T.b)(() => {
                            let t = (e || n.current) && window.innerWidth < i3,
                                r = (e || n.current) && window.innerWidth >= i3;
                            t && x.current && !(0, iD.$)() && m && p(!1), r && x.current && !m && p(!0)
                        }, [e, n]);
                        let j = (0, v.useCallback)(t => {
                                if (p(!0), b() && (y.current = !0), t ? .setCookie) {
                                    o(!0, null), x.current = !0;
                                    let e = new Date(new Date().getTime() + 2592e6).toUTCString();
                                    (0, D.d8)("fileTreeExpanded", "true", e)
                                }
                                t ? .focus === "toggleButton" ? requestAnimationFrame(() => d.current ? .focus()) : t ? .focus === "search" && requestAnimationFrame(() => u.current ? .focus()), e && document.querySelector(".react-repos-overview-margin") ? .classList.add("tree-open")
                            }, [2592e6, e, b, o]),
                            w = (0, v.useCallback)(t => {
                                if (p(!1), y.current = !1, g.current = !0, t ? .setCookie) {
                                    o(!1, null), x.current = !1;
                                    let e = new Date(new Date().getTime() + 2592e6).toUTCString();
                                    (0, D.d8)("fileTreeExpanded", "false", e)
                                }
                                t ? .focus === "toggleButton" && requestAnimationFrame(() => d.current ? .focus()), e && document.querySelector(".react-repos-overview-margin") ? .classList.remove("tree-open")
                            }, [2592e6, e, o]),
                            N = (0, v.useCallback)(t => (e || t) && window.innerWidth >= i3 || !n.current && !e && window.innerWidth >= k._G.xlarge, [e, n]),
                            C = (0, v.useMemo)(() => (0, f.jsx)(_.Z, {
                                as: "h2",
                                sx: {
                                    fontSize: 1
                                },
                                children: (0, f.jsx)(i_, {
                                    expanded: m,
                                    ariaControls: t,
                                    onToggleExpanded: t => {
                                        i(m ? "FILES_TREE.HIDE" : "FILES_TREE.SHOW"), m ? w({
                                            focus: e && 0 !== t.detail ? void 0 : "toggleButton",
                                            setCookie: N(n.current)
                                        }) : j({
                                            focus: "toggleButton",
                                            setCookie: N(n.current)
                                        })
                                    },
                                    className: void 0 !== s || m || l ? void 0 : "react-tree-toggle-button-with-indicator",
                                    ref: d
                                })
                            }), [m, t, s, i, w, e, N, n, j, l]);
                        return {
                            isTreeExpanded: m,
                            expandTree: j,
                            collapseTree: w,
                            treeToggleElement: C,
                            treeToggleRef: d,
                            searchBoxRef: u
                        }
                    }(d, W, z, n.treeExpanded),
                    er = (0, v.useCallback)(() => {
                        window.innerWidth < k._G.large && X({
                            focus: null
                        })
                    }, [X]),
                    [ei, eo] = (0, v.useState)(!0);
                (0, v.useEffect)(() => {
                    if (!window.location.hash && window.scrollY > 0) {
                        let e = document.querySelector("#StickyHeader");
                        e && (e.style.position = "relative", e.scrollIntoView(), e.style.position = "sticky")
                    }
                }, [n.path]);
                let {
                    codeCenterOption: ea
                } = (0, I.O)(), es = v.useCallback(() => {
                    window.innerWidth < k._G.large && (d ? U(`${window.location.pathname}?search=1`) : J({
                        focus: "search"
                    }))
                }, [J, d, U]), el = d ? {
                    "@media screen and (min-width: 1440px)": {
                        "> div": {
                            mr: 4
                        }
                    }
                } : {};
                return t = a ? n.editInfo.isNewFile ? "new" : "edit" : l ? "blame" : s ? "blob" : "tree", (0, f.jsx)(nw.Uc, { ...m,
                    children: (0, f.jsx)(eC.Tv, {
                        refInfo: o,
                        path: i,
                        action: t,
                        copilotAccessAllowed: n.copilotAccessAllowed ? ? !1,
                        children: (0, f.jsx)(o4.K, {
                            allShortcutsEnabled: n.allShortcutsEnabled,
                            children: (0, f.jsxs)(iz.c, {
                                refreshTree: O,
                                children: [(0, f.jsx)(o9, {}), (0, f.jsxs)(E.Z, {
                                    children: [(0, f.jsx)(iM.ve, {
                                        children: (0, f.jsx)(eb, {
                                            payload: n,
                                            openPanelRef: z,
                                            children: (0, f.jsxs)(B.jw, {
                                                children: [(0, f.jsx)(E.Z, {
                                                    ref: A,
                                                    tabIndex: 0,
                                                    sx: {
                                                        width: ["100%", "100%", "auto"]
                                                    },
                                                    children: !d && (0, f.jsx)(i4, {
                                                        id: W,
                                                        repo: r,
                                                        path: i,
                                                        isFilePath: s || a,
                                                        refInfo: o,
                                                        collapseTree: X,
                                                        showTree: Q,
                                                        fileTree: Y,
                                                        onItemSelected: er,
                                                        processingTime: n.fileTreeProcessingTime,
                                                        treeToggleElement: ee,
                                                        treeToggleRef: et,
                                                        searchBoxRef: en,
                                                        foldersToFetch: n.foldersToFetch,
                                                        isOverview: d,
                                                        onFindFilesShortcut: es
                                                    })
                                                }), (0, f.jsx)(B.jw.Content, {
                                                    as: "div",
                                                    padding: "none",
                                                    width: ea.enabled || d ? "xlarge" : "full",
                                                    hidden: {
                                                        narrow: Q
                                                    },
                                                    sx: {
                                                        marginRight: d ? 0 : "auto",
                                                        "@media print": {
                                                            display: "flex !important"
                                                        },
                                                        ...el
                                                    },
                                                    children: (0, f.jsx)(E.Z, {
                                                        sx: {
                                                            marginLeft: "auto",
                                                            marginRight: d ? 0 : "auto",
                                                            flexDirection: "column",
                                                            pb: d ? 3 : 6,
                                                            maxWidth: d && !Q ? 1012 : "100%",
                                                            mt: d ? 3 : 0
                                                        },
                                                        ref: h,
                                                        "data-selector": "repos-split-pane-content",
                                                        tabIndex: 0,
                                                        children: (0, f.jsx)(o3.Y, {
                                                            contentRef: u,
                                                            children: (0, f.jsx)(eP, {
                                                                searchTerm: G,
                                                                setSearchTerm: q,
                                                                isBlame: l,
                                                                children: (0, f.jsxs)(rO.Is, {
                                                                    children: [(0, f.jsx)(E.Z, {
                                                                        sx: {
                                                                            display: a ? "none" : "inherit"
                                                                        },
                                                                        children: (0, f.jsx)(nU, {
                                                                            payload: n,
                                                                            showTree: Q,
                                                                            treeToggleElement: ee,
                                                                            validCodeNav: ei,
                                                                            onFindFilesShortcut: es
                                                                        })
                                                                    }), n.error ? (0, f.jsx)(iv, { ...n.error
                                                                    }) : (0, f.jsxs)(f.Fragment, {
                                                                        children: [(0, f.jsx)(E.Z, {
                                                                            className: d ? "" : "react-code-view-bottom-padding",
                                                                            sx: {
                                                                                mx: d ? 0 : 3,
                                                                                "@media screen and (min-width: 1440px)": {
                                                                                    ml: d && !Q ? 0 : 3
                                                                                }
                                                                            },
                                                                            children: (0, f.jsx)(ip, {
                                                                                payload: n
                                                                            })
                                                                        }), (0, f.jsx)(E.Z, {
                                                                            sx: {
                                                                                mx: d ? 0 : 3,
                                                                                "@media screen and (min-width: 1440px)": {
                                                                                    ml: d && !Q ? 0 : 3
                                                                                }
                                                                            },
                                                                            children: b(n) ? (0, f.jsx)(o1, {
                                                                                overview: g(n) ? n.overview : void 0,
                                                                                tree: n.tree,
                                                                                showTree: Q,
                                                                                treeToggleElement: d ? null : ee,
                                                                                onFindFilesShortcut: es
                                                                            }) : y(n) ? (0, f.jsx)(v.Suspense, {
                                                                                fallback: (0, f.jsx)(e1.m, {}),
                                                                                children: (0, f.jsx)(o6, {
                                                                                    collapseTree: X,
                                                                                    editInfo: n.editInfo,
                                                                                    repo: n.repo,
                                                                                    showTree: Q,
                                                                                    treeToggleElement: ee,
                                                                                    webCommitInfo: n.webCommitInfo,
                                                                                    copilotInfo: n.copilotInfo
                                                                                })
                                                                            }) : s ? (0, f.jsx)(rD, {
                                                                                blame: n.blame,
                                                                                blob: n.blob,
                                                                                searchTerm: G,
                                                                                setSearchTerm: q,
                                                                                setValidCodeNav: eo,
                                                                                showTree: Q,
                                                                                treeToggleElement: ee,
                                                                                validCodeNav: ei,
                                                                                copilotInfo: n.copilotInfo
                                                                            }) : c ? (0, f.jsx)(iE, {
                                                                                deleteInfo: n.deleteInfo,
                                                                                webCommitInfo: n.webCommitInfo
                                                                            }) : null
                                                                        })]
                                                                    })]
                                                                })
                                                            })
                                                        })
                                                    })
                                                })]
                                            })
                                        })
                                    }), (0, f.jsx)(em.d, {}), (0, f.jsx)(ep.P, {
                                        buttonFocusId: eZ.KG,
                                        buttonHotkey: K.hotkey,
                                        onButtonClick: () => (function() {
                                            let e = document.getElementById(ed),
                                                t = document.getElementById(eZ.KG);
                                            if (document.activeElement ? .id === eZ.KG && (M.current = !0), u ? .contains(document.activeElement) && !M.current ? P.current = !0 : A.current ? .contains(document.activeElement) && (P.current = !1), P.current || M.current) {
                                                if (M.current) {
                                                    let t = H.current || e || u;
                                                    P.current = !0, M.current = !1, t ? .focus()
                                                } else {
                                                    let e = $.current || A.current;
                                                    H.current = u ? .contains(document.activeElement) ? document.activeElement : null, P.current = !1, M.current = !1, e ? .focus()
                                                }
                                            } else $.current = A.current ? .contains(document.activeElement) ? document.activeElement : null, P.current = !1, (t || u) ? .focus()
                                        })()
                                    })]
                                })]
                            })
                        })
                    })
                })
            }

            function o9() {
                let e = (0, t5.B)(),
                    {
                        permalinkShortcut: t
                    } = (0, ek.bx)();
                return e.isCurrentPagePermalink() ? (0, f.jsx)(ep.P, {
                    buttonFocusId: eZ.KG,
                    buttonHotkey: t.hotkey,
                    buttonTestLabel: "header-permalink-button",
                    onlyAddHotkeyScopeButton: !0,
                    onButtonClick: () => {}
                }) : (0, f.jsx)(ep.P, {
                    buttonFocusId: eZ.KG,
                    buttonHotkey: t.hotkey,
                    buttonTestLabel: "header-permalink-button",
                    onButtonClick: () => {
                        let t = e.createPermalink();
                        0 > window.location.href.indexOf(t) && window.history.pushState(null, document.title, t)
                    }
                })
            }
            try {
                o6.displayName || (o6.displayName = "BlobEditor")
            } catch {}
            try {
                o5.displayName || (o5.displayName = "CodeView")
            } catch {}
            try {
                o9.displayName || (o9.displayName = "PermalinkShortcut")
            } catch {}
        },
        59050: (e, t, n) => {
            n.d(t, {
                C: () => m,
                E: () => f
            });
            var r = n(85893),
                i = n(79902),
                o = n(97011),
                a = n(73290);
            let s = 36e5,
                l = 24 * s,
                c = [{
                    unit: "month",
                    ms: 30 * l
                }, {
                    unit: "day",
                    ms: l
                }, {
                    unit: "hour",
                    ms: s
                }, {
                    unit: "minute",
                    ms: 6e4
                }, {
                    unit: "second",
                    ms: 1e3
                }],
                d = new Intl.DateTimeFormat(void 0, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: void 0,
                    timeZoneName: "short"
                }),
                u = new Intl.DateTimeFormat(void 0, {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                }),
                h = new Intl.DateTimeFormat(void 0, {
                    month: "short",
                    day: "numeric"
                });

            function m(e, t = !0) {
                let n = "",
                    r = new Date,
                    i = r.getTime() - e.getTime(),
                    o = c.find(e => e.ms < i);
                if (o && "month" !== o.unit) {
                    let e = Math.floor(i / o.ms);
                    n = "day" === o.unit && 1 === e ? "yesterday" : `${e} ${o.unit}${e>1?"s":""} ago`
                } else {
                    let i = e.getFullYear() === r.getFullYear() ? h : u;
                    n = `${t?"on ":""}${i.format(e)}`
                }
                return n
            }

            function f({
                timestamp: e,
                usePreposition: t = !0,
                linkUrl: n,
                sx: s
            }) {
                let l = m(e, t),
                    c = d.format(e);
                return n ? (0, r.jsx)(a.Z, {
                    sx: {
                        color: "fg.muted",
                        ...s
                    },
                    href: n,
                    target: "_blank",
                    children: (0, r.jsx)(i.Z, {
                        inline: !0,
                        title: c,
                        children: (0, r.jsx)(o.Z, {
                            title: c,
                            sx: {
                                "&:hover, &:focus": {
                                    color: "accent.fg",
                                    textDecoration: "underline"
                                }
                            },
                            children: l
                        })
                    })
                }) : (0, r.jsx)(i.Z, {
                    inline: !0,
                    title: c,
                    children: (0, r.jsx)(o.Z, {
                        title: c,
                        sx: s,
                        children: l
                    })
                })
            }
            try {
                f.displayName || (f.displayName = "Ago")
            } catch {}
        },
        39004: (e, t, n) => {
            n.d(t, {
                Z: () => b,
                a: () => x
            });
            var r = n(85893),
                i = n(78212),
                o = n(60348),
                a = n(85529),
                s = n(42483),
                l = n(73290),
                c = n(97011),
                d = n(75308),
                u = n(50919),
                h = n(67294),
                m = n(98950),
                f = n(4855),
                p = n(35880);

            function x({
                id: e = "breadcrumb",
                fileNameId: t,
                path: n,
                repo: i,
                commitish: o,
                isFolder: a,
                fontSize: l,
                showCopyPathButton: c
            }) {
                let {
                    fileName: d,
                    segments: u
                } = (0, h.useMemo)(() => (function(e) {
                    let t = e.split("/"),
                        n = t.pop();
                    return {
                        fileName: n,
                        segments: t.map((e, n) => ({
                            directoryName: e,
                            directoryPath: t.slice(0, n + 1).join("/")
                        }))
                    }
                })(n), [n]), m = !n;
                return (0, r.jsxs)(s.Z, {
                    sx: {
                        display: "flex",
                        flexDirection: "row",
                        fontSize: l ? ? 2,
                        minWidth: 0,
                        flexShrink: 1,
                        flexWrap: "wrap",
                        maxWidth: "100%",
                        alignItems: "center"
                    },
                    children: [(0, r.jsxs)(s.Z, {
                        as: "nav",
                        "data-testid": "breadcrumbs",
                        "aria-labelledby": `${e}-heading`,
                        id: e,
                        sx: {
                            maxWidth: "100%"
                        },
                        children: [(0, r.jsx)(p.N, {
                            id: `${e}-heading`,
                            as: "h2",
                            text: "Breadcrumbs"
                        }), (0, r.jsxs)(s.Z, {
                            as: "ol",
                            sx: {
                                maxWidth: "100%",
                                listStyle: "none",
                                display: "inline-block"
                            },
                            children: [(0, r.jsx)(s.Z, {
                                as: "li",
                                sx: {
                                    display: "inline-block",
                                    maxWidth: "100%"
                                },
                                children: (0, r.jsx)(y, {
                                    repo: i,
                                    commitish: o
                                })
                            }), u.map(({
                                directoryName: e,
                                directoryPath: t
                            }) => (0, r.jsxs)(s.Z, {
                                as: "li",
                                sx: {
                                    display: "inline-block",
                                    maxWidth: "100%"
                                },
                                children: [(0, r.jsx)(b, {
                                    fontSize: l
                                }), e ? (0, r.jsx)(g, {
                                    path: t,
                                    directoryName: e,
                                    repo: i,
                                    commitish: o
                                }) : null]
                            }, t))]
                        })]
                    }), d && (0, r.jsxs)(s.Z, {
                        "data-testid": "breadcrumbs-filename",
                        sx: {
                            display: "inline-block",
                            maxWidth: "100%"
                        },
                        children: [(0, r.jsx)(b, {
                            fontSize: l
                        }), (0, r.jsx)(j, {
                            value: d,
                            id: t,
                            fontSize: l
                        }), !m && a && (0, r.jsx)(b, {})]
                    }, d), c && (0, r.jsx)(w, {
                        path: n
                    })]
                })
            }

            function y({
                repo: e,
                commitish: t
            }) {
                return (0, r.jsx)(l.Z, {
                    as: o.r,
                    sx: {
                        fontWeight: "bold"
                    },
                    to: (0, i.Qi)({
                        repo: e,
                        commitish: t,
                        action: "tree"
                    }),
                    "data-testid": "breadcrumbs-repo-link",
                    reloadDocument: !0,
                    children: e.name
                })
            }

            function g({
                directoryName: e,
                path: t,
                repo: n,
                commitish: a
            }) {
                return (0, r.jsx)(l.Z, {
                    as: o.r,
                    to: (0, i.Qi)({
                        repo: n,
                        commitish: a,
                        path: t,
                        action: "tree"
                    }),
                    sx: {
                        fontWeight: 400
                    },
                    children: e
                })
            }

            function b({
                fontSize: e
            }) {
                return (0, r.jsx)(c.Z, {
                    sx: {
                        px: 1,
                        fontWeight: 400,
                        color: "fg.muted",
                        fontSize: e ? ? 2
                    },
                    "aria-hidden": "true",
                    children: "/"
                })
            }

            function j({
                value: e,
                id: t,
                fontSize: n
            }) {
                return (0, r.jsx)(d.Z, {
                    as: "h1",
                    tabIndex: -1,
                    sx: {
                        fontWeight: 600,
                        display: "inline-block",
                        maxWidth: "100%",
                        fontSize: n ? ? 2
                    },
                    id: t,
                    children: e
                })
            }

            function w({
                path: e
            }) {
                let t = (0, h.useRef)(null),
                    [n, i, o] = (0, f.a)("copy-path-tooltip", t, {
                        direction: "nw"
                    }),
                    s = "Copy path",
                    [l, c] = (0, h.useState)(!1),
                    d = (0, h.useCallback)(() => {
                        l || ((0, m.z)(e), c(!0), n("Copied path!"), setTimeout(() => {
                            c(!1), i()
                        }, 3e3))
                    }, [l, e, n, i]),
                    p = (0, h.useCallback)(() => {
                        l || n(s)
                    }, [l, s, n]),
                    x = (0, h.useCallback)(() => {
                        l || i()
                    }, [l, i]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(u.h, {
                        icon: l ? a.CheckIcon : a.CopyIcon,
                        ref: t,
                        variant: "invisible",
                        size: "small",
                        "aria-label": s,
                        onClick: d,
                        onFocus: () => p(),
                        onMouseEnter: () => p(),
                        onMouseLeave: () => x(),
                        onBlur: () => x(),
                        sx: {
                            ml: 2
                        },
                        "data-testid": "breadcrumb-copy-path-button"
                    }), o]
                })
            }
            try {
                x.displayName || (x.displayName = "Breadcrumb")
            } catch {}
            try {
                y.displayName || (y.displayName = "RepoLink")
            } catch {}
            try {
                g.displayName || (g.displayName = "DirectoryLink")
            } catch {}
            try {
                b.displayName || (b.displayName = "Separator")
            } catch {}
            try {
                j.displayName || (j.displayName = "FileName")
            } catch {}
            try {
                w.displayName || (w.displayName = "CopyPathButton")
            } catch {}
        },
        17338: (e, t, n) => {
            n.d(t, {
                V: () => s
            });
            var r = n(85893),
                i = n(85529),
                o = n(50919),
                a = n(67294);
            let s = a.forwardRef(({
                expanded: e,
                testid: t,
                ariaLabel: n,
                ariaControls: a,
                onToggleExpanded: s,
                sx: l,
                alignment: c,
                dataHotkey: d,
                className: u
            }, h) => (0, r.jsx)(o.h, {
                ref: h,
                "data-testid": e ? `collapse-${t}` : `expand-${t}`,
                "aria-label": n,
                "aria-expanded": e,
                "aria-controls": a,
                icon: e ? "left" === c ? i.SidebarExpandIcon : i.SidebarCollapseIcon : "left" === c ? i.SidebarCollapseIcon : i.SidebarExpandIcon,
                sx: {
                    color: "fg.muted",
                    ...l
                },
                "data-hotkey": d,
                onClick: e => {
                    s(e)
                },
                variant: "invisible",
                className: u
            }));
            s.displayName = "ExpandButton"
        },
        90874: (e, t, n) => {
            n.d(t, {
                M: () => a,
                x: () => s
            });
            var r = n(85893),
                i = n(67294);
            let o = i.createContext(void 0);

            function a({
                user: e,
                children: t
            }) {
                return (0, r.jsxs)(o.Provider, {
                    value: e,
                    children: [" ", t, " "]
                })
            }

            function s() {
                return i.useContext(o)
            }
            try {
                o.displayName || (o.displayName = "CurrentUserContext")
            } catch {}
            try {
                a.displayName || (a.displayName = "CurrentUserProvider")
            } catch {}
        },
        35880: (e, t, n) => {
            n.d(t, {
                N: () => o
            });
            var r = n(85893),
                i = n(75308);

            function o({
                as: e,
                text: t,
                ...n
            }) {
                return (0, r.jsx)(i.Z, {
                    as: e,
                    className: "sr-only",
                    "data-testid": "screen-reader-heading",
                    ...n,
                    children: t
                })
            }
            try {
                o.displayName || (o.displayName = "ScreenReaderHeading")
            } catch {}
        },
        34493: (e, t, n) => {
            n.d(t, {
                o: () => s,
                x: () => l
            });
            var r = n(85893),
                i = n(86283),
                o = n(67294);
            let a = o.createContext({
                focusHint: null,
                setFocusHint: () => void 0
            });

            function s({
                children: e
            }) {
                let t = {
                        key: i.ssrSafeLocation.pathname + i.ssrSafeLocation.search
                    },
                    n = (0, o.useRef)(t.key),
                    s = (0, o.useRef)(t.key),
                    l = (0, o.useRef)({
                        hint: null,
                        location: null
                    }),
                    c = (0, o.useCallback)((e, n) => {
                        l.current = {
                            hint: e,
                            context: n,
                            location: t.key
                        }
                    }, [t.key]);
                s.current !== t.key && (n.current = s.current, s.current = t.key);
                let d = l.current.location === n.current,
                    u = d ? l.current.hint : null,
                    h = d ? l.current.context : null,
                    m = (0, o.useMemo)(() => ({
                        focusHint: u,
                        context: h,
                        setFocusHint: c
                    }), [u, h, c]);
                return (0, r.jsx)(a.Provider, {
                    value: m,
                    children: e
                })
            }

            function l() {
                return (0, o.useContext)(a)
            }
            try {
                a.displayName || (a.displayName = "FocusHintContext")
            } catch {}
            try {
                s.displayName || (s.displayName = "FocusHintContextProvider")
            } catch {}
        },
        4855: (e, t, n) => {
            n.d(t, {
                a: () => a
            });
            var r = n(85893),
                i = n(52793),
                o = n(67294);

            function a(e, t, n) {
                let [i, a] = (0, o.useState)(""), l = (0, o.useCallback)(() => {
                    a("")
                }, []), c = (0, o.useCallback)(e => {
                    a(e), t.current !== document.activeElement && setTimeout(l, 3e3)
                }, [l, t]);
                return [c, l, (0, r.jsx)(s, {
                    message: i,
                    id: e,
                    contentRef: t,
                    clearMessage: l,
                    portalTooltipProps: n
                }, e)]
            }

            function s({
                message: e,
                id: t,
                contentRef: n,
                clearMessage: o,
                portalTooltipProps: a
            }) {
                return e ? (0, r.jsx)(i.u, {
                    id: t,
                    contentRef: n,
                    "aria-label": e,
                    open: !!e,
                    onMouseLeave: o,
                    "aria-live": "assertive",
                    ...a
                }) : null
            }
            try {
                s.displayName || (s.displayName = "AlertTooltip")
            } catch {}
        },
        49132: (e, t, n) => {
            n.d(t, {
                J: () => c,
                x: () => u
            });
            var r = n(85893),
                i = n(39773),
                o = n(85529),
                a = n(33831),
                s = n(50919),
                l = n(67294);
            let c = {
                    height: "28px",
                    width: "28px",
                    "span[role=tooltip]": {
                        height: "16px"
                    }
                },
                d = {
                    pr: 3
                };

            function u({
                children: e,
                containerSx: t = d,
                referenceType: n,
                ...u
            }) {
                let h = (0, l.useRef)(null),
                    m = `Ask Copilot about this ${n}`,
                    [f, p] = (0, i.g)({
                        "aria-label": m,
                        contentRef: h,
                        direction: "sw",
                        anchorSide: "outside-bottom"
                    });
                return (0, r.jsxs)(a.Z, {
                    sx: t,
                    children: [(0, r.jsx)(s.h, {
                        ref: h,
                        icon: o.CopilotIcon,
                        size: "small",
                        sx: { ...c,
                            color: e ? "fg.muted" : "fg.default"
                        },
                        "aria-label": m,
                        "data-testid": "copilot-ask-menu",
                        ...f,
                        ...u
                    }), e, p]
                })
            }
            try {
                u.displayName || (u.displayName = "BaseCopilotChatButton")
            } catch {}
        },
        56302: (e, t, n) => {
            n.d(t, {
                Z: () => f,
                o: () => p
            });
            var r = n(85893),
                i = n(3384),
                o = n(2048),
                a = n(87634),
                s = n(85529),
                l = n(45677),
                c = n(52516),
                d = n(67294),
                u = n(1640),
                h = n(790),
                m = n(49132);

            function f({
                copilotAccessAllowed: e,
                messageReference: t,
                hideDropdown: n
            }) {
                let [f, x] = (0, d.useState)(!1), y = (0, o.y)("copilot_smell_icebreaker_ux"), {
                    addToast: g
                } = (0, a.V6)(), b = (0, d.useCallback)(() => {
                    (0, u.L4)({
                        content: "Explain",
                        intent: h.A.explain,
                        references: [t]
                    }), x(!1)
                }, [t]), j = (0, d.useCallback)(() => {
                    (0, u.L4)({
                        content: "Suggest improvements to this code.",
                        intent: h.A.suggest,
                        references: [t]
                    }), x(!1)
                }, [t]), w = (0, d.useCallback)(() => {
                    (0, u.L4)({
                        intent: h.A.conversation,
                        references: [t]
                    }), x(!1)
                }, [t]), v = (0, d.useCallback)(() => {
                    p(t, !1, g), x(!1)
                }, [g, t]);
                return e ? (0, r.jsx)(m.x, {
                    referenceType: t.type,
                    onClick: n ? () => p(t, !0, void 0, !0) : w,
                    containerSx: n ? {
                        pr: 0
                    } : {},
                    children: n ? void 0 : (0, r.jsxs)(l.P, {
                        open: f,
                        onOpenChange: x,
                        children: [(0, r.jsx)(l.P.Anchor, {
                            children: (0, r.jsx)(i.E, {
                                icon: s.TriangleDownIcon,
                                label: "Copilot menu",
                                hideTooltip: f,
                                onSelect: () => x(!0),
                                size: "small",
                                sx: { ...m.J,
                                    ">span": {
                                        mb: 0
                                    },
                                    color: "fg.muted"
                                },
                                tooltipDirection: "sw",
                                "data-testid": "more-copilot-button"
                            })
                        }), (0, r.jsx)(l.P.Overlay, {
                            align: "end",
                            children: (0, r.jsxs)(c.S, {
                                children: [(0, r.jsx)(c.S.Item, {
                                    onSelect: b,
                                    children: "Explain"
                                }), y ? (0, r.jsx)(c.S.Item, {
                                    onSelect: j,
                                    children: "Suggest improvements"
                                }) : null, (0, r.jsx)(c.S.Divider, {}), (0, r.jsx)(c.S.Item, {
                                    onSelect: v,
                                    children: "Attach to current thread"
                                })]
                            })
                        })]
                    })
                }) : null
            }
            let p = (e, t, n, r) => {
                t ? (r && (0, u.cw)(e, !0), (0, u.L4)({
                    intent: h.A.conversation,
                    references: [e]
                })) : n && ((0, u.cw)(e), n({
                    message: "Reference added to thread",
                    type: "success"
                }))
            };
            try {
                f.displayName || (f.displayName = "CopilotChatButton")
            } catch {}
        },
        49713: (e, t, n) => {
            n.d(t, {
                VH: () => j,
                g6: () => g,
                Bb: () => b,
                mG: () => y
            });
            var r = n(85893),
                i = n(88216),
                o = n(73290),
                a = n(98833),
                s = n(85529),
                l = n(75809),
                c = n(53664),
                d = n(67294),
                u = n(87634),
                h = n(89445);
            let m = async (e, t, n) => {
                    try {
                        let r = await (0, h.Q)(e, {
                            method: t,
                            body: n
                        });
                        return r.ok
                    } catch (e) {
                        return !1
                    }
                },
                f = (e, t) => m(e, "DELETE", x(t)),
                p = (e, t) => m(e, "POST", x(t)),
                x = e => {
                    let t = new FormData;
                    return t.append("feature", e), t
                };

            function y(e) {
                let {
                    alreadyRequested: t = !1,
                    featureName: n = "",
                    requestPath: r = ""
                } = e ? ? {}, [i, o] = (0, d.useState)(!1), [a, s] = (0, d.useState)(t), {
                    addToast: l
                } = (0, u.V6)(), c = async () => {
                    o(!0);
                    let e = a ? f : p,
                        t = await e(r, n);
                    t ? s(!a) : l({
                        type: "error",
                        message: "Something went wrong. Please try again later."
                    }), o(!1)
                };
                return {
                    inProgress: i,
                    requested: a,
                    toggleFeatureRequest: c
                }
            }

            function g({
                featureRequestInfo: e,
                learnMorePath: t,
                requestMessage: n,
                requestedMessage: i
            }) {
                let {
                    inProgress: o,
                    requested: a,
                    toggleFeatureRequest: s
                } = y(e);
                return e.showFeatureRequest ? a ? (0, r.jsx)(j, {
                    inProgress: o,
                    toggleFeatureRequest: s,
                    requestedMessage: i
                }) : (0, r.jsx)(b, {
                    inProgress: o,
                    toggleFeatureRequest: s,
                    featureName: e.featureName,
                    learnMorePath: t,
                    requestMessage: n
                }) : null
            }
            let b = ({
                    inProgress: e,
                    toggleFeatureRequest: t,
                    featureName: n,
                    learnMorePath: i,
                    requestMessage: o
                }) => {
                    let {
                        sendClickAnalyticsEvent: a
                    } = (0, c.w)();
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(w, {
                            onClick: () => {
                                t(), a({
                                    category: "member_feature_request",
                                    action: `action.${n}`,
                                    label: `ref_cta:ask_admin_for_access;ref_loc:${n};`
                                })
                            },
                            inProgress: e
                        }), o && (0, r.jsx)(N, {
                            message: o
                        }), i && (0, r.jsx)(v, {
                            onClick: () => {
                                a({
                                    category: "suggestion",
                                    action: "click_to_read_docs",
                                    label: `ref_cta:learn_more;ref_loc:${n};`
                                })
                            },
                            path: i
                        })]
                    })
                },
                j = ({
                    inProgress: e,
                    toggleFeatureRequest: t,
                    requestedMessage: n
                }) => (0, r.jsxs)(r.Fragment, {
                    children: [n && (0, r.jsx)(C, {
                        message: n
                    }), (0, r.jsx)(k, {
                        onClick: t,
                        inProgress: e
                    })]
                }),
                w = ({
                    onClick: e,
                    inProgress: t
                }) => (0, r.jsx)(i.r, {
                    onClick: e,
                    disabled: t,
                    ...(0, l.f)("feature-request-request-button"),
                    children: t ? "Requesting..." : "Ask admin for access"
                }),
                v = ({
                    onClick: e,
                    path: t
                }) => (0, r.jsx)(o.Z, {
                    href: t,
                    onClick: e,
                    ...(0, l.f)("feature-request-learn-more-link"),
                    children: "Learn more"
                }),
                N = ({
                    message: e
                }) => (0, r.jsx)("span", {
                    children: e
                }),
                C = ({
                    message: e
                }) => (0, r.jsxs)("span", {
                    className: "d-inline-block color-fg-subtle mr-1",
                    children: [(0, r.jsx)(a.Z, {
                        icon: s.CheckIcon
                    }), e]
                }),
                k = ({
                    onClick: e,
                    inProgress: t
                }) => (0, r.jsx)(o.Z, {
                    className: "color-fg-danger text-semibold",
                    as: "button",
                    onClick: e,
                    disabled: t,
                    ...(0, l.f)("feature-request-cancel-link"),
                    children: t ? "Cancelling..." : "Remove request"
                });
            try {
                g.displayName || (g.displayName = "FeatureRequest")
            } catch {}
            try {
                b.displayName || (b.displayName = "RequestFeature")
            } catch {}
            try {
                j.displayName || (j.displayName = "CancelFeatureRequest")
            } catch {}
            try {
                w.displayName || (w.displayName = "RequestCTA")
            } catch {}
            try {
                v.displayName || (v.displayName = "LearnMore")
            } catch {}
            try {
                N.displayName || (N.displayName = "RequestMessage")
            } catch {}
            try {
                C.displayName || (C.displayName = "RequestedMessage")
            } catch {}
            try {
                k.displayName || (k.displayName = "RemoveRequestCTA")
            } catch {}
        },
        57294: (e, t, n) => {
            n.d(t, {
                O: () => s
            });
            var r = n(85893),
                i = n(67294),
                o = n(26012),
                a = n(86283);
            let s = (0, i.forwardRef)(function({
                src: e,
                size: t = 20,
                ...n
            }, s) {
                let l = (0, i.useMemo)(() => {
                    let n = new URL(e, a.ssrSafeLocation.origin);
                    return n.searchParams.has("size") || n.searchParams.has("s") || n.searchParams.set("size", String(2 * Number(t))), n.toString()
                }, [e, t]);
                return (0, r.jsx)(o.Z, {
                    ref: s,
                    src: l,
                    size: t,
                    "data-testid": "github-avatar",
                    ...n
                })
            });
            try {
                s.displayName || (s.displayName = "GitHubAvatar")
            } catch {}
        },
        3384: (e, t, n) => {
            n.d(t, {
                E: () => u
            });
            var r, i = n(85893),
                o = n(17920),
                a = n(65379),
                s = n(50919),
                l = n(67294);
            let c = e => ` ${e.split(" ").map(e=>`<${e.replaceAll("Mod",(0,o.eE)()?"Cmd":"Ctrl").replaceAll("Command","Cmd").replaceAll("Control","Ctrl").toLowerCase()}>`).join(" / ")}`,
                d = e => e.replaceAll("{CMD_CTRL}", (0, o.eE)() ? "Command" : "Control"),
                u = (0, l.forwardRef)(({
                    label: e,
                    hideTooltip: t,
                    icon: n,
                    shortcut: r,
                    sx: o,
                    tooltipDirection: u,
                    ...h
                }, m) => {
                    let f = (0, l.useCallback)(() => {
                        let o = {
                            display: "flex"
                        };
                        return u ? .includes("w") && (o = { ...o,
                            pl: 2,
                            ml: -2
                        }), u ? .includes("e") && (o = { ...o,
                            pr: 2,
                            mr: -2
                        }), u ? .includes("s") && (o = { ...o,
                            pb: 2,
                            mb: -2
                        }), (u ? .includes("n") || !u) && (o = { ...o,
                            pt: 2,
                            mt: -2
                        }), t ? (0, i.jsx)(n, {}) : (0, i.jsx)(a.Z, {
                            "aria-label": `${e}${r?c(r):""}`,
                            className: "icon-button-with-tooltip__tooltip",
                            direction: u,
                            sx: o,
                            children: (0, i.jsx)(n, {})
                        })
                    }, [t, e, r, u, n]);
                    return (0, i.jsx)(s.h, {
                        ref: m,
                        icon: f,
                        "aria-keyshortcuts": r ? d(r) : void 0,
                        sx: { ...o,
                            "&:focus-visible, &:hover": {
                                "& .icon-button-with-tooltip__tooltip": {
                                    "&::after, &::before": {
                                        display: "inline-block",
                                        textDecoration: "none",
                                        animationName: "tooltip-appear",
                                        animationDuration: "0.1s",
                                        animationFillMode: "forwards",
                                        animationTimingFunction: "ease-in"
                                    }
                                }
                            },
                            "&:hover .icon-button-with-tooltip__tooltip": {
                                "&::after, &::before": {
                                    animationDelay: "0.4s"
                                }
                            }
                        },
                        ...h,
                        "aria-label": e
                    })
                });
            u.displayName = "IconButtonWithTooltip";
            try {
                (r = TooltippedIcon).displayName || (r.displayName = "TooltippedIcon")
            } catch {}
        },
        93062: (e, t, n) => {
            n.d(t, {
                WZ: () => h,
                sF: () => f,
                wB: () => u
            });
            var r, i = n(85893),
                o = n(42483),
                a = n(97011),
                s = n(27856),
                l = n.n(s),
                c = n(67294);

            function d(e) {
                if ("html" in e && void 0 !== e.html) {
                    let {
                        html: t,
                        ...n
                    } = e;
                    return {
                        safeHTML: t,
                        props: n
                    }
                }
                let {
                    unverifiedHTML: t,
                    ...n
                } = e;
                return {
                    safeHTML: l().sanitize(t),
                    props: n
                }
            }
            let u = m(o.Z);
            u.displayName = "SafeHTMLBox";
            let h = m(a.Z);

            function m(e) {
                let t = (0, c.forwardRef)((t, n) => {
                    let {
                        safeHTML: r,
                        props: o
                    } = d(t);
                    return (0, i.jsx)(e, {
                        ref: n,
                        ...o,
                        dangerouslySetInnerHTML: r ? {
                            __html: r
                        } : void 0
                    })
                });
                return t
            }
            h.displayName = "SafeHTMLText";
            let f = (0, c.forwardRef)((e, t) => {
                let {
                    safeHTML: n,
                    props: r
                } = d(e);
                return (0, i.jsx)("div", {
                    ref: t,
                    ...r,
                    dangerouslySetInnerHTML: n ? {
                        __html: n
                    } : void 0
                })
            });
            f.displayName = "SafeHTMLDiv";
            try {
                (r = SafeHTMLComponent).displayName || (r.displayName = "SafeHTMLComponent")
            } catch {}
        },
        69942: (e, t, n) => {
            n.d(t, {
                ZV: () => u,
                _G: () => r,
                eI: () => c,
                xp: () => d
            });
            var r, i = n(85893),
                o = n(46263),
                a = n(67294);
            ! function(e) {
                e[e.small = 1] = "small", e[e.medium = 544] = "medium", e[e.large = 768] = "large", e[e.xlarge = 1012] = "xlarge", e[e.xxlarge = 1280] = "xxlarge", e[e.xxxlarge = 1350] = "xxxlarge", e[e.xxxxlarge = 1440] = "xxxxlarge"
            }(r || (r = {}));
            let s = [1440, 1350, 1280, 1012, 768, 544, 1],
                l = a.createContext({
                    screenSize: 1
                });

            function c() {
                return a.useContext(l)
            }

            function d({
                children: e,
                initialValue: t
            }) {
                let n = (0, a.useSyncExternalStore)(() => () => {}, () => t ? ? u(window.innerWidth), () => t ? ? 1),
                    r = (0, a.useRef)(n),
                    [s, c] = (0, a.useState)(n),
                    d = (0, a.useCallback)(() => {
                        let e = u(window.innerWidth);
                        r.current !== e && (r.current = e, c(e))
                    }, []);
                (0, a.useEffect)(() => {
                    let e = new ResizeObserver((0, o.D)(d));
                    return e.observe(document.documentElement), () => e.disconnect()
                }, [d]);
                let h = (0, a.useMemo)(() => ({
                    screenSize: s
                }), [s]);
                return (0, i.jsx)(l.Provider, {
                    value: h,
                    children: e
                })
            }

            function u(e) {
                for (let t of s)
                    if (e >= t) return t;
                return 1
            }
            try {
                l.displayName || (l.displayName = "ScreenContext")
            } catch {}
            try {
                d.displayName || (d.displayName = "ScreenSizeProvider")
            } catch {}
        },
        11117: (e, t, n) => {
            n.d(t, {
                K: () => m,
                O: () => p
            });
            var r = n(85893),
                i = n(44544),
                o = n(67294);
            let a = (0, i.Z)("localStorage"),
                s = "codeView.codeFolding",
                l = "codeView.codeWrapping",
                c = "codeView.centerView",
                d = "codeView.openSymbolsOnClick",
                u = new Map([
                    [s, "Show code folding buttons"],
                    [l, "Wrap lines"],
                    [c, "Center content"],
                    [d, "Open symbols on click"]
                ]),
                h = (0, o.createContext)({
                    codeFoldingOption: {},
                    codeWrappingOption: {},
                    codeCenterOption: {},
                    openSymbolsOption: {}
                }),
                m = ({
                    children: e
                }) => {
                    let t = f(s, !0),
                        n = f(l, !1),
                        i = f(c, !1),
                        a = f(d, !0),
                        u = (0, o.useMemo)(() => ({
                            codeFoldingOption: t,
                            codeWrappingOption: n,
                            codeCenterOption: i,
                            openSymbolsOption: a
                        }), [t, n, i, a]);
                    return (0, r.jsx)(h.Provider, {
                        value: u,
                        children: e
                    })
                };

            function f(e, t) {
                let n = a.getItem(e),
                    [r, i] = (0, o.useState)(() => n ? "true" === n : t),
                    s = u.get(e) || "";
                return {
                    name: e,
                    enabled: r,
                    setEnabled: i,
                    label: s
                }
            }

            function p() {
                return (0, o.useContext)(h)
            }
            try {
                h.displayName || (h.displayName = "CodeViewOptionsContext")
            } catch {}
            try {
                m.displayName || (m.displayName = "CodeViewOptionsProvider")
            } catch {}
        }
    }
]);
//# sourceMappingURL=app_assets_modules_react-code-view_pages_CodeView_tsx-72682afd0000.js.map