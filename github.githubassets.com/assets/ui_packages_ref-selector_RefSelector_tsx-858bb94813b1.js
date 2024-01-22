"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    ["ui_packages_ref-selector_RefSelector_tsx"], {
        70567: (e, t, r) => {
            r.d(t, {
                W: () => SearchIndex,
                r: () => a
            });
            var a, n = r(44544),
                i = r(71643);
            let {
                getItem: s,
                setItem: c,
                removeItem: l
            } = (0, n.Z)("localStorage", {
                throwQuotaErrorsOnSet: !0
            });
            ! function(e) {
                e.Branch = "branch", e.Tag = "tag"
            }(a || (a = {}));
            let SearchIndex = class SearchIndex {
                render() {
                    this.selector.render()
                }
                async fetchData() {
                    try {
                        if (!this.isLoading || this.fetchInProgress) return;
                        if (!this.bootstrapFromLocalStorage()) {
                            this.fetchInProgress = !0, this.fetchFailed = !1;
                            let e = await fetch(`${this.refEndpoint}?type=${this.refType}`, {
                                headers: {
                                    Accept: "application/json"
                                }
                            });
                            await this.processResponse(e)
                        }
                        this.isLoading = !1, this.fetchInProgress = !1, this.render()
                    } catch (e) {
                        this.fetchInProgress = !1, this.fetchFailed = !0
                    }
                }
                async processResponse(e) {
                    if (this.emitStats(e), !e.ok) {
                        this.fetchFailed = !0;
                        return
                    }
                    let t = e.clone(),
                        r = await e.json();
                    this.knownItems = r.refs, this.cacheKey = r.cacheKey, this.flushToLocalStorage(await t.text())
                }
                emitStats(e) {
                    if (!e.ok) {
                        (0, i.b)({
                            incrementKey: "REF_SELECTOR_BOOT_FAILED"
                        }, !0);
                        return
                    }
                    switch (e.status) {
                        case 200:
                            (0, i.b)({
                                incrementKey: "REF_SELECTOR_BOOTED_FROM_UNCACHED_HTTP"
                            });
                            break;
                        case 304:
                            (0, i.b)({
                                incrementKey: "REF_SELECTOR_BOOTED_FROM_HTTP_CACHE"
                            });
                            break;
                        default:
                            (0, i.b)({
                                incrementKey: "REF_SELECTOR_UNEXPECTED_RESPONSE"
                            })
                    }
                }
                search(e) {
                    let t;
                    if (this.searchTerm = e, "" === e) {
                        this.currentSearchResult = this.knownItems;
                        return
                    }
                    let r = [],
                        a = [];
                    for (let n of (this.exactMatchFound = !1, this.knownItems))
                        if (!((t = n.indexOf(e)) < 0)) {
                            if (0 === t) {
                                e === n ? (a.unshift(n), this.exactMatchFound = !0) : a.push(n);
                                continue
                            }
                            r.push(n)
                        }
                    this.currentSearchResult = [...a, ...r]
                }
                bootstrapFromLocalStorage() {
                    let e = s(this.localStorageKey);
                    if (!e) return !1;
                    let t = JSON.parse(e);
                    return t.cacheKey === this.cacheKey && "refs" in t ? (this.knownItems = t.refs, this.isLoading = !1, (0, i.b)({
                        incrementKey: "REF_SELECTOR_BOOTED_FROM_LOCALSTORAGE"
                    }), !0) : (l(this.localStorageKey), !1)
                }
                async flushToLocalStorage(e) {
                    try {
                        c(this.localStorageKey, e)
                    } catch (t) {
                        if (t.message.toLowerCase().includes("quota")) {
                            this.clearSiblingLocalStorage(), (0, i.b)({
                                incrementKey: "REF_SELECTOR_LOCALSTORAGE_OVERFLOWED"
                            });
                            try {
                                c(this.localStorageKey, e)
                            } catch (e) {
                                e.message.toLowerCase().includes("quota") && (0, i.b)({
                                    incrementKey: "REF_SELECTOR_LOCALSTORAGE_GAVE_UP"
                                })
                            }
                        } else throw t
                    }
                }
                clearSiblingLocalStorage() {
                    for (let e of Object.keys(localStorage)) e.startsWith(SearchIndex.LocalStoragePrefix) && l(e)
                }
                clearLocalStorage() {
                    l(this.localStorageKey)
                }
                get localStorageKey() {
                    return `${SearchIndex.LocalStoragePrefix}:${this.nameWithOwner}:${this.refType}`
                }
                constructor(e, t, r, a, n) {
                    this.knownItems = [], this.currentSearchResult = [], this.exactMatchFound = !1, this.searchTerm = "", this.isLoading = !0, this.fetchInProgress = !1, this.fetchFailed = !1, this.refType = e, this.selector = t, this.refEndpoint = r, this.cacheKey = a, this.nameWithOwner = n
                }
            };
            SearchIndex.LocalStoragePrefix = "ref-selector"
        },
        62073: (e, t, r) => {
            r.d(t, {
                D: () => s
            });
            var a = r(67294),
                n = r(78249),
                i = r(98224);

            function s(e, t, r = []) {
                let s = (0, a.useCallback)(e, r),
                    c = function() {
                        let e = (0, a.useContext)(i.kb);
                        return e
                    }(),
                    l = (0, a.useRef)(c === i.i$.ClientRender),
                    [o, h] = (0, a.useState)(() => c === i.i$.ClientRender ? s() : t),
                    d = (0, a.useCallback)(() => {
                        h(s)
                    }, [s]);
                return (0, n.g)(() => {
                    l.current || h(s), l.current = !1
                }, [s, ...r]), [o, d]
            }
        },
        79431: (e, t, r) => {
            r.d(t, {
                H: () => l
            });
            var a, n = r(85893),
                i = r(42483),
                s = r(67294),
                c = r(78720);

            function l({
                items: e,
                itemHeight: t,
                sx: r,
                renderItem: a,
                makeKey: i
            }) {
                let l = (0, s.useRef)(null),
                    d = (0, s.useCallback)(() => t, [t]),
                    u = (0, c.o)({
                        parentRef: l,
                        size: e.length,
                        estimateSize: d
                    });
                return (0, n.jsx)(o, {
                    ref: l,
                    sx: r,
                    virtualizer: u,
                    children: u.virtualItems.map(t => (0, n.jsx)(h, {
                        virtualRow: t,
                        children: a(e[t.index])
                    }, i(e[t.index])))
                })
            }
            let o = s.forwardRef(function({
                children: e,
                sx: t,
                virtualizer: r
            }, a) {
                return (0, n.jsx)(i.Z, {
                    ref: a,
                    sx: t,
                    children: (0, n.jsx)(i.Z, {
                        sx: {
                            height: r.totalSize,
                            width: "100%",
                            position: "relative"
                        },
                        children: e
                    })
                })
            });

            function h({
                children: e,
                virtualRow: t
            }) {
                return (0, n.jsx)(i.Z, {
                    sx: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: `${t.size}px`,
                        transform: `translateY(${t.start}px)`
                    },
                    children: e
                })
            }
            try {
                l.displayName || (l.displayName = "FixedSizeVirtualList")
            } catch {}
            try {
                (a = VirtualListContainerInner).displayName || (a.displayName = "VirtualListContainerInner")
            } catch {}
            try {
                h.displayName || (h.displayName = "ItemContainer")
            } catch {}
        },
        79515: (e, t, r) => {
            r.d(t, {
                h: () => i
            });
            var a = r(85893),
                n = r(42483);

            function i({
                text: e,
                search: t,
                hideOverflow: r = !1,
                overflowWidth: i = 0
            }) {
                let s = function(e, t) {
                        if (!t) return [e];
                        let r = e.toLowerCase().split(t.toLowerCase());
                        if (r.length < 2) return [e];
                        let a = 0,
                            n = [];
                        for (let i of r) n.push(e.substring(a, a + i.length)), a += i.length, n.push(e.substring(a, a + t.length)), a += t.length;
                        return n
                    }(e, t),
                    c = s.map((e, t) => t % 2 == 1 ? (0, a.jsx)("strong", {
                        className: "color-fg-default",
                        children: e
                    }, t) : e),
                    l = i ? `${i}px` : void 0;
                return (0, a.jsx)(n.Z, {
                    sx: {
                        maxWidth: l,
                        overflow: r ? "hidden" : "visible",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        color: t.length ? "fg.muted" : "fg.default"
                    },
                    children: c
                })
            }
            try {
                i.displayName || (i.displayName = "HighlightedText")
            } catch {}
        },
        80490: (e, t, r) => {
            r.d(t, {
                ox: () => J,
                cq: () => Y,
                li: () => X,
                Z7: () => q
            });
            var a = r(85893),
                n = r(31147),
                i = r(88216),
                s = r(51461),
                c = r(78212),
                l = r(85529),
                o = r(52516),
                h = r(42483),
                d = r(75308),
                u = r(50919),
                f = r(51526),
                x = r(74121),
                m = r(98833),
                p = r(97011),
                y = r(67294),
                g = r(86283),
                b = r(62073),
                S = r(74390),
                j = r(73935);

            function C({
                isOpen: e,
                onDismiss: t,
                onConfirm: r
            }) {
                let [n] = (0, b.D)(() => document.body, null, [g.n4 ? .body]);
                return n ? (0, j.createPortal)((0, a.jsxs)(S.Z, {
                    isOpen: e,
                    onDismiss: t,
                    children: [(0, a.jsx)(S.Z.Header, {
                        children: "Create branch"
                    }), (0, a.jsxs)(h.Z, {
                        sx: {
                            p: 3
                        },
                        children: [(0, a.jsx)(p.Z, {
                            children: "A tag already exists with the provided branch name. Many Git commands accept both tag and branch names, so creating this branch may cause unexpected behavior. Are you sure you want to create this branch?"
                        }), (0, a.jsxs)(h.Z, {
                            sx: {
                                display: "flex",
                                justifyContent: "flex-end",
                                mt: 3
                            },
                            children: [(0, a.jsx)(i.r, {
                                onClick: t,
                                children: "Cancel"
                            }), (0, a.jsx)(i.r, {
                                variant: "danger",
                                onClick: r,
                                sx: {
                                    ml: 2
                                },
                                children: "Create"
                            })]
                        })]
                    })]
                }), document.body) : null
            }
            try {
                C.displayName || (C.displayName = "CheckTagNameDialog")
            } catch {}
            var w = r(89445);
            async function R(e, t) {
                let r = new FormData;
                r.set("value", t);
                let a = await (0, w.Q)(e, {
                    method: "POST",
                    body: r,
                    headers: {
                        Accept: "application/json"
                    }
                });
                return !!a.ok && !!await a.text()
            }
            async function T(e, t, r) {
                let a = new FormData;
                a.set("name", t), a.set("branch", r);
                let n = await (0, w.Q)(e, {
                    method: "POST",
                    body: a,
                    headers: {
                        Accept: "application/json"
                    }
                });
                if (n.ok) return {
                    success: !0,
                    name: (await n.json()).name
                };
                try {
                    let {
                        error: e
                    } = await n.json();
                    if (e) return {
                        success: !1,
                        error: e
                    };
                    throw Error("Unknown response from create branch API")
                } catch {
                    return {
                        success: !1,
                        error: "Something went wrong."
                    }
                }
            }
            var k = r(2708),
                N = r(48542);

            function L(e) {
                let {
                    hotKey: t,
                    onOpenChange: r,
                    size: n,
                    currentCommitish: s,
                    refType: c,
                    children: o,
                    preventClosing: d,
                    inputRef: u,
                    overlayOpen: f,
                    onOverlayChange: x,
                    focusTrapEnabled: m = !0,
                    buttonClassName: g,
                    allowResizing: b,
                    useFocusZone: S
                } = e, j = e.idEnding ? `-${e.idEnding}` : `-${Date.now()}`, C = (0, y.useRef)(`branch-picker${j}`), w = (0, y.useCallback)(e => {
                    x(e), r ? .(e)
                }, [r, x]), R = (0, y.useMemo)(() => m ? {
                    initialFocusRef: u
                } : {
                    initialFocusRef: u,
                    disabled: !0
                }, [m, u]);
                return (0, a.jsx)(k.w, {
                    open: f,
                    overlayProps: {
                        role: "dialog",
                        width: "medium"
                    },
                    onOpen: () => w(!0),
                    onClose: () => !d && w(!1),
                    renderAnchor: e => (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(i.r, { ...e,
                            "data-hotkey": t,
                            size: n,
                            sx: {
                                svg: {
                                    color: "fg.muted"
                                },
                                display: "flex",
                                minWidth: b ? 0 : void 0,
                                "> span": {
                                    width: "inherit"
                                }
                            },
                            trailingVisual: l.TriangleDownIcon,
                            "aria-label": `${s} ${c}`,
                            "data-testid": "anchor-button",
                            id: C.current,
                            className: g,
                            children: (0, a.jsxs)(h.Z, {
                                sx: {
                                    display: "flex",
                                    width: "100%"
                                },
                                children: [(0, a.jsx)(h.Z, {
                                    sx: {
                                        mr: 1,
                                        color: "fg.muted"
                                    },
                                    children: "tag" === c ? (0, a.jsx)(l.TagIcon, {
                                        size: "small"
                                    }) : (0, a.jsx)(l.GitBranchIcon, {
                                        size: "small"
                                    })
                                }), (0, a.jsx)(h.Z, {
                                    sx: {
                                        fontSize: 1,
                                        minWidth: 0,
                                        maxWidth: b ? void 0 : 125,
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap"
                                    },
                                    className: "ref-selector-button-text-container",
                                    children: (0, a.jsxs)(p.Z, {
                                        sx: {
                                            minWidth: 0
                                        },
                                        children: ["\xa0", s]
                                    })
                                })]
                            })
                        }), (0, a.jsx)("button", {
                            hidden: !0,
                            "data-hotkey": t,
                            onClick: () => w(!0),
                            "data-hotkey-scope": "read-only-cursor-text-area"
                        })]
                    }),
                    focusTrapSettings: R,
                    focusZoneSettings: S ? {
                        bindKeys: N.Qw.ArrowAll | N.Qw.Tab
                    } : {
                        disabled: !0
                    },
                    children: (0, a.jsx)(h.Z, {
                        "data-testid": "overlay-content",
                        "aria-labelledby": C.current,
                        id: "selectPanel",
                        children: o
                    })
                })
            }
            try {
                L.displayName || (L.displayName = "RefSelectorAnchoredOverlay")
            } catch {}

            function E({
                text: e,
                onClick: t,
                href: r,
                sx: n
            }) {
                let i = (0, a.jsx)(h.Z, {
                        sx: { ...n
                        },
                        children: e
                    }),
                    s = {
                        sx: {
                            minWidth: 0
                        }
                    };
                return r ? (0, a.jsx)(o.S.LinkItem, {
                    role: "link",
                    href: r,
                    onClick: () => t ? .(),
                    ...s,
                    children: i
                }) : (0, a.jsx)(o.S.Item, {
                    role: "button",
                    onSelect: () => t ? .(),
                    ...s,
                    children: i
                })
            }
            try {
                E.displayName || (E.displayName = "RefSelectorFooter")
            } catch {}
            var I = r(79431),
                O = r(63309),
                v = r(79515);
            let F = y.memo(function({
                    isCurrent: e,
                    isDefault: t,
                    href: r,
                    gitRef: n,
                    filterText: i,
                    ariaPosInSet: s,
                    ariaSetSize: c,
                    onSelect: l,
                    onClick: h
                }) {
                    let d = (0, a.jsx)(Z, {
                            gitRef: n,
                            isDefault: t,
                            isCurrent: e,
                            filterText: i
                        }),
                        u = {
                            "aria-checked": e,
                            "aria-posinset": s,
                            "aria-setsize": c,
                            sx: {
                                minWidth: 0
                            },
                            onSelect: () => l ? .(n),
                            onClick: () => h ? .(n)
                        };
                    return r ? (0, a.jsx)(o.S.LinkItem, {
                        href: r,
                        role: "menuitemradio",
                        ...u,
                        children: d
                    }) : (0, a.jsx)(o.S.Item, { ...u,
                        children: d
                    })
                }),
                Z = y.memo(function({
                    isCurrent: e,
                    isDefault: t,
                    gitRef: r,
                    filterText: n,
                    showLeadingVisual: i = !0
                }) {
                    return (0, a.jsxs)(h.Z, {
                        style: {
                            display: "flex",
                            justifyContent: "space-between"
                        },
                        children: [(0, a.jsxs)(h.Z, {
                            style: {
                                display: "flex",
                                minWidth: 0,
                                alignItems: "flex-end"
                            },
                            children: [i && (0, a.jsx)(m.Z, {
                                icon: l.CheckIcon,
                                "aria-hidden": !0,
                                sx: {
                                    pr: 1,
                                    visibility: e ? void 0 : "hidden"
                                }
                            }), (0, a.jsx)(v.h, {
                                hideOverflow: !0,
                                search: n,
                                text: r
                            }, r)]
                        }), t && (0, a.jsx)(O.Z, {
                            children: "default"
                        })]
                    })
                });
            try {
                F.displayName || (F.displayName = "RefItem")
            } catch {}
            try {
                Z.displayName || (Z.displayName = "RefItemContent")
            } catch {}

            function _(e) {
                return e.refs.length > 20 ? (0, a.jsx)(A, { ...e
                }) : (0, a.jsx)(D, { ...e
                })
            }

            function D({
                refs: e,
                defaultBranch: t,
                currentCommitish: r,
                getHref: n,
                filterText: i,
                onSelectItem: s
            }) {
                return (0, a.jsx)(h.Z, {
                    sx: {
                        maxHeight: 330,
                        overflowY: "auto"
                    },
                    children: e.map(c => (0, a.jsx)(F, {
                        href: n ? .(c),
                        isCurrent: r === c,
                        isDefault: t === c,
                        filterText: i,
                        gitRef: c,
                        onSelect: s,
                        onClick: s,
                        ariaPosInSet: e.indexOf(c) + 1,
                        ariaSetSize: e.length
                    }, c))
                })
            }

            function A({
                refs: e,
                defaultBranch: t,
                currentCommitish: r,
                getHref: n,
                filterText: i,
                onSelectItem: s
            }) {
                return (0, a.jsx)(I.H, {
                    items: e,
                    itemHeight: 32,
                    sx: {
                        maxHeight: 330,
                        overflowY: "auto"
                    },
                    makeKey: e => e,
                    renderItem: c => (0, a.jsx)(F, {
                        href: n ? .(c),
                        isCurrent: r === c,
                        isDefault: t === c,
                        filterText: i,
                        gitRef: c,
                        onSelect: s,
                        onClick: s,
                        ariaPosInSet: e.indexOf(c) + 1,
                        ariaSetSize: e.length
                    }, c)
                })
            }
            try {
                _.displayName || (_.displayName = "RefsList")
            } catch {}
            try {
                D.displayName || (D.displayName = "FullRefsList")
            } catch {}
            try {
                A.displayName || (A.displayName = "VirtualRefsList")
            } catch {}
            var B = r(70567);

            function P(e, t, r, a, n) {
                return new B.W("branch" === a ? B.r.Branch : B.r.Tag, n, (0, c.FL)({
                    owner: t,
                    repo: r,
                    action: "refs"
                }), e, `${t}/${r}`)
            }

            function K(e, t) {
                let r = e.fetchFailed ? "failed" : e.isLoading ? "loading" : "loaded",
                    a = e.currentSearchResult,
                    n = e.refType === B.r.Branch && t && e.searchTerm.length > 0 && !e.exactMatchFound;
                return {
                    status: r,
                    refs: a,
                    showCreateAction: n,
                    searchIndex: e
                }
            }

            function W(e) {
                let t = (0, y.useRef)();
                return t.current || (t.current = e()), t
            }

            function $(e) {
                let {
                    cacheKey: t,
                    owner: r,
                    repo: n,
                    canCreate: i,
                    types: s,
                    hotKey: l,
                    onOpenChange: o,
                    size: h,
                    getHref: d,
                    onBeforeCreate: u,
                    onRefTypeChanged: f,
                    currentCommitish: x,
                    onCreateError: m,
                    onSelectItem: p,
                    closeOnSelect: g,
                    selectedRefType: b,
                    customFooterItemProps: S,
                    buttonClassName: j,
                    allowResizing: w,
                    idEnding: k,
                    useFocusZone: N
                } = e, [E, I] = (0, y.useState)(""), O = (0, y.useRef)(null), v = (0, y.useRef)(null), [F, Z] = (0, y.useState)(!1), [_, D] = (0, y.useState)(!0), [A, B] = (0, y.useState)(!1), [$, H] = (0, y.useState)(b ? ? (s ? ? q)[0]), V = function(e, t, r, a, n, i) {
                    let [s, c] = (0, y.useState)({
                        status: "uninitialized",
                        refs: [],
                        showCreateAction: !1,
                        searchIndex: null
                    }), l = (0, y.useRef)({
                        render: () => {
                            c(K(h.current, i))
                        }
                    }), o = (0, y.useRef)({
                        render: () => {
                            c(K(d.current, i))
                        }
                    }), h = W(() => P(e, t, r, "branch", l.current)), d = W(() => P(e, t, r, "tag", o.current));
                    return (0, y.useEffect)(() => {
                        let n = `${t}/${r}`;
                        h.current.nameWithOwner !== n && (h.current = P(e, t, r, "branch", l.current)), d.current.nameWithOwner !== n && (d.current = P(e, t, r, "tag", o.current)), async function() {
                            let e = "branch" === a ? h.current : d.current;
                            e.render(), await e.fetchData(), e.search(""), e.render()
                        }()
                    }, [e, t, r, a, h, d]), (0, y.useEffect)(() => {
                        let e = "branch" === a ? h.current : d.current;
                        e.search(n), e.render()
                    }, [n, a, h, d]), s
                }(t, r, n, $, E, i), M = (0, c.FL)({
                    owner: r,
                    repo: n,
                    action: "branches"
                }), G = (0, c.dQ)({
                    owner: r,
                    repo: n
                }), Q = (0, y.useCallback)(async () => {
                    u ? .(E);
                    let e = await T(M, E, x);
                    e.success ? d && (V.searchIndex ? .clearLocalStorage(), window.location.href = d(e.name)) : m ? .(e.error)
                }, [u, E, M, x, d, m, V.searchIndex]), U = (0, y.useCallback)(async () => {
                    if (await R(G, E)) {
                        B(!0), D(!1);
                        return
                    }
                    B(!1), D(!1), Q()
                }, [G, E, Q, B]), Y = (0, y.useCallback)(e => {
                    H(e), f ? .(e)
                }, [H, f]);

                function X() {
                    Z(!1)
                }
                let J = (0, y.useCallback)((e, t) => {
                    p ? .(e, t), X()
                }, [p]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(L, {
                        refType: $,
                        currentCommitish: x,
                        focusTrapEnabled: _,
                        preventClosing: A,
                        size: h,
                        onOpenChange: o,
                        hotKey: l,
                        inputRef: O,
                        overlayOpen: F,
                        onOverlayChange: Z,
                        buttonClassName: j,
                        allowResizing: w,
                        idEnding: k,
                        useFocusZone: N,
                        children: (0, a.jsx)(z, {
                            filterText: E,
                            onFilterChange: I,
                            refType: $,
                            selectedRefType: $,
                            onRefTypeChange: Y,
                            refsState: V,
                            onCreateError: e.onCreateError,
                            showTagWarningDialog: A,
                            setShowTagWarningDialog: B,
                            onCreateBranch: U,
                            inputRef: O,
                            createButtonRef: v,
                            onSelectItem: J,
                            closeOnSelect: g,
                            closeRefSelector: X,
                            customFooterItemProps: S,
                            ...e
                        })
                    }), A && (0, a.jsx)(C, {
                        isOpen: A,
                        onDismiss: () => {
                            B(!1), v.current ? .focus()
                        },
                        onConfirm: Q
                    })]
                })
            }

            function z({
                canCreate: e,
                currentCommitish: t,
                defaultBranch: r,
                filterText: n,
                getHref: i,
                hideShowAll: s,
                onSelectItem: c,
                closeOnSelect: f,
                closeRefSelector: x,
                onFilterChange: m,
                onRefTypeChange: p,
                owner: y,
                selectedRefType: g,
                refsState: b,
                refType: S,
                repo: j,
                types: C,
                onCreateBranch: w,
                inputRef: R,
                createButtonRef: T,
                customFooterItemProps: k,
                viewAllJustify: N
            }) {
                var L;
                let {
                    refs: I,
                    showCreateAction: O,
                    status: v
                } = b;
                return (0, a.jsxs)(o.S, {
                    showDividers: !0,
                    children: [(0, a.jsxs)(h.Z, {
                        sx: {
                            borderBottom: "1px solid",
                            borderColor: "border.subtle",
                            pb: 2
                        },
                        children: [(0, a.jsxs)(h.Z, {
                            sx: {
                                display: "flex",
                                pb: 2,
                                px: 2,
                                justifyContent: "space-between",
                                alignItems: "center"
                            },
                            children: [(0, a.jsx)(d.Z, {
                                as: "h5",
                                sx: {
                                    pl: 2,
                                    fontSize: "inherit"
                                },
                                children: (L = C ? ? q).includes("branch") && L.includes("tag") ? "Switch branches/tags" : L.includes("branch") ? "Switch branches" : L.includes("tag") ? "Switch tags" : void 0
                            }), (0, a.jsx)(u.h, {
                                "aria-label": "Cancel",
                                variant: "invisible",
                                icon: l.XIcon,
                                sx: {
                                    color: "fg.muted"
                                },
                                onClick: x
                            })]
                        }), (0, a.jsx)(H, {
                            defaultText: n,
                            refType: S,
                            canCreate: e,
                            onFilterChange: m,
                            ref: R
                        })]
                    }), (0, a.jsxs)(h.Z, {
                        sx: {
                            pt: 2,
                            pb: O && 0 === I.length ? 0 : 2
                        },
                        children: [(C ? ? q).length > 1 && (0, a.jsx)(h.Z, {
                            sx: {
                                px: 2,
                                pb: 2
                            },
                            children: (0, a.jsx)(X, {
                                refType: S,
                                onRefTypeChanged: p,
                                sx: {
                                    mx: -2,
                                    borderBottom: "1px solid",
                                    borderColor: "border.muted",
                                    "> nav": {
                                        borderBottom: "none"
                                    }
                                }
                            })
                        }), "loading" === v || "uninitialized" === v ? (0, a.jsx)(M, {
                            refType: S
                        }) : "failed" === v ? (0, a.jsx)(J, {
                            refType: S
                        }) : 0 !== I.length || O ? (0, a.jsx)(_, {
                            filterText: n,
                            refs: I,
                            defaultBranch: "branch" === S ? r : "",
                            currentCommitish: S === g ? t : "",
                            getHref: i,
                            onSelectItem: e => {
                                c ? .(e, S), f && x()
                            }
                        }) : (0, a.jsx)(G, {})]
                    }), O && (0, a.jsxs)(a.Fragment, {
                        children: [I.length > 0 && (0, a.jsx)(o.S.Divider, {
                            sx: {
                                marginTop: 0,
                                backgroundColor: "border.subtle"
                            }
                        }), (0, a.jsx)(U, {
                            currentCommitish: t,
                            newRefName: n,
                            onCreateBranch: w,
                            createButtonRef: T
                        })]
                    }), (!s || k) && (0, a.jsx)(o.S.Divider, {
                        sx: {
                            marginTop: O ? 2 : 0,
                            backgroundColor: "border.subtle"
                        }
                    }), !s && (0, a.jsx)(Q, {
                        justify: N,
                        refType: S,
                        owner: y,
                        repo: j,
                        onClick: x
                    }), k && (0, a.jsx)(E, { ...k,
                        onClick: function() {
                            k ? .onClick ? .(), x()
                        }
                    })]
                })
            }
            let H = (0, y.forwardRef)(V);

            function V({
                refType: e,
                canCreate: t,
                onFilterChange: r,
                defaultText: n
            }, i) {
                return (0, a.jsx)(h.Z, {
                    sx: {
                        px: 2
                    },
                    children: (0, a.jsx)(f.Z, {
                        leadingVisual: l.SearchIcon,
                        value: n,
                        sx: {
                            width: "100%"
                        },
                        placeholder: "tag" === e ? "Find a tag..." : t ? "Find or create a branch..." : "Find a branch...",
                        ref: i,
                        onInput: e => {
                            let t = e.target;
                            t instanceof HTMLInputElement && r(t.value)
                        }
                    })
                })
            }

            function M({
                refType: e
            }) {
                return (0, a.jsx)(h.Z, {
                    sx: {
                        display: "flex",
                        justifyContent: "center",
                        p: 2
                    },
                    children: (0, a.jsx)(x.Z, {
                        size: "medium",
                        "aria-label": `Loading ${"branch"===e?"branches":"tags"}...`
                    })
                })
            }

            function G() {
                return (0, a.jsx)(h.Z, {
                    sx: {
                        p: 3,
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: "Nothing to show"
                })
            }

            function Q({
                refType: e,
                owner: t,
                repo: r,
                onClick: n,
                justify: i = "start"
            }) {
                let s = "branch" === e ? "branches" : "tags";
                return (0, a.jsx)(o.S.LinkItem, {
                    role: "link",
                    href: (0, c.FL)({
                        owner: t,
                        repo: r,
                        action: s
                    }),
                    onClick: n,
                    sx: {
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: (0, a.jsxs)(h.Z, {
                        sx: {
                            display: "flex",
                            justifyContent: i
                        },
                        children: ["View all ", s]
                    })
                })
            }

            function U({
                currentCommitish: e,
                newRefName: t,
                onCreateBranch: r,
                createButtonRef: n
            }) {
                return (0, a.jsxs)(o.S.Item, {
                    role: "button",
                    onSelect: r,
                    ref: n,
                    children: [(0, a.jsx)(m.Z, {
                        icon: l.GitBranchIcon,
                        sx: {
                            mr: 2,
                            color: "fg.muted"
                        }
                    }), (0, a.jsx)(p.Z, {
                        children: "Create branch\xa0"
                    }), (0, a.jsx)(p.Z, {
                        sx: {
                            fontWeight: 600,
                            fontFamily: "monospace"
                        },
                        children: t
                    }), (0, a.jsx)(p.Z, {
                        children: "\xa0from\xa0"
                    }), (0, a.jsx)(p.Z, {
                        sx: {
                            fontWeight: 600,
                            fontFamily: "monospace"
                        },
                        children: e
                    })]
                })
            }
            try {
                $.displayName || ($.displayName = "RefSelectorV1")
            } catch {}
            try {
                z.displayName || (z.displayName = "RefSelectorActionList")
            } catch {}
            try {
                H.displayName || (H.displayName = "RefTextFilter")
            } catch {}
            try {
                V.displayName || (V.displayName = "RefTextFilterWithRef")
            } catch {}
            try {
                M.displayName || (M.displayName = "Loading")
            } catch {}
            try {
                G.displayName || (G.displayName = "RefsZeroState")
            } catch {}
            try {
                Q.displayName || (Q.displayName = "ViewAllRefsAction")
            } catch {}
            try {
                U.displayName || (U.displayName = "CreateRefAction")
            } catch {}
            let q = ["branch", "tag"];

            function Y(e) {
                return (0, a.jsx)($, { ...e
                })
            }

            function X({
                refType: e,
                onRefTypeChanged: t,
                sx: r
            }) {
                return (0, a.jsxs)(n.Z, {
                    sx: {
                        pl: 2,
                        ...r
                    },
                    "aria-label": "Ref type",
                    children: [(0, a.jsx)(n.Z.Link, {
                        as: i.r,
                        id: "branch-button",
                        "aria-controls": "branches",
                        selected: "branch" === e,
                        onClick: () => t("branch"),
                        sx: {
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 0
                        },
                        children: "Branches"
                    }), (0, a.jsx)(n.Z.Link, {
                        as: i.r,
                        id: "tag-button",
                        "aria-controls": "tags",
                        selected: "tag" === e,
                        onClick: () => t("tag"),
                        sx: {
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 0
                        },
                        children: "Tags"
                    })]
                })
            }

            function J({
                refType: e
            }) {
                return (0, a.jsxs)(s.Z, {
                    variant: "danger",
                    children: ["Could not load ", "branch" === e ? "branches" : "tags"]
                })
            }
            try {
                Y.displayName || (Y.displayName = "RefSelector")
            } catch {}
            try {
                X.displayName || (X.displayName = "RefTypeTabs")
            } catch {}
            try {
                J.displayName || (J.displayName = "LoadingFailed")
            } catch {}
        }
    }
]);
//# sourceMappingURL=ui_packages_ref-selector_RefSelector_tsx-676a4a8511f7.js.map