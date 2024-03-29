"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
    ["optimizely", "optimizely-utils", "uuid"], {
        31063: (t, e, o) => {
            o.d(e, {
                t: () => i
            });

            function i(t) {
                let e = {};
                for (let {
                        name: o,
                        value: i
                    } of t.attributes)
                    if (o.startsWith("data-optimizely-meta-")) {
                        let t = o.replace("data-optimizely-meta-", "");
                        i && i.trim().length && (e[t.toLowerCase().replace(/-(.)/g, function(t, e) {
                            return e.toUpperCase()
                        })] = i)
                    }
                return e
            }
        },
        68379: (t, e, o) => {
            let i;
            var n = o(24601),
                a = o(89359),
                r = o(48266),
                l = o(49237);
            let c = {
                handleError(t) {
                    u(t)
                }
            };
            async function u(t) {
                if (!l.Gb || t.message.startsWith("Optimizely::InvalidExperimentError:")) return;
                let e = document.head ? .querySelector('meta[name="browser-optimizely-client-errors-url"]') ? .content;
                if (!e) return;
                let o = {
                    message: t.message,
                    stack: t.stack,
                    stacktrace: (0, n.cI)(t),
                    sanitizedUrl: (0, a.S)() || window.location.href,
                    user: (0, n.aJ)() || void 0
                };
                try {
                    await fetch(e, {
                        method: "post",
                        body: JSON.stringify(o)
                    })
                } catch {}
            }
            var s = o(64325),
                m = o(82918),
                d = o(36071),
                p = o(59753),
                f = o(31063);
            !async function() {
                i = function() {
                    (function() {
                        let t = function(t) {
                            try {
                                return window.localStorage ? .getItem(t)
                            } catch (t) {
                                return null
                            }
                        }("optimizely.logLevel");
                        t ? (0, r.Ub)(t) : (0, r.EK)(null)
                    })();
                    let t = document.head.querySelector("meta[name=optimizely-datafile]") ? .content;
                    return (0, r.Fs)({
                        datafile: t,
                        errorHandler: c
                    })
                }(), await i.onReady()
            }(), (0, p.on)("click", "[data-optimizely-event]", function(t) {
                if (!i) return;
                let e = t.currentTarget,
                    o = e.getAttribute("data-optimizely-event") || "",
                    [n, a] = o.trim().split(/\s*,\s*/),
                    r = (0, f.t)(e);
                n && a ? i.track(n, a, r) : n && i.track(n, (0, m.b)(), r)
            }), (0, d.N7)("[data-optimizely-experiment]", t => {
                if (!i) return;
                let e = t.getAttribute("data-optimizely-experiment");
                if (!e || t.hidden) return;
                let o = (0, f.t)(t),
                    n = i.activate(e, (0, m.b)(), o);
                if (!n) return;
                let a = t.querySelectorAll("[data-optimizely-variation]");
                for (let t of a) {
                    let e = t.getAttribute("data-optimizely-variation");
                    t.hidden = e !== n
                }
            });
            let h = document.querySelector('meta[name="enabled-homepage-translation-languages"]') ? .getAttribute("content") ? .split(",") || [],
                _ = (0, s.$1)("_locale_experiment").length > 0 && "ko" === (0, s.$1)("_locale_experiment")[0].value && h.includes("ko");
            async function g() {
                let t = "ko_homepage_translation",
                    e = (0, m.b)(),
                    o = s.$1("_locale")[0] ? .value ? .slice(0, 2);
                i.setForcedVariation(t, e, o), i.activate(t, e);
                let n = document.querySelectorAll("[data-optimizely-variation]");
                for (let t of n) t.hidden = o !== t.getAttribute("data-optimizely-variation");
                for (let t of document.querySelectorAll('form[action^="/join"]')) t.addEventListener("submit", () => {
                    i.track("submit.homepage_signup", e)
                });
                for (let t of document.querySelectorAll('a[href^="/join"]')) t.addEventListener("click", () => {
                    i.track("click.homepage_signup", e)
                })
            }
            async function y() {
                document.getElementById("signup-form") ? .addEventListener("submit", () => {
                    let t = m.b();
                    i.activate("ko_homepage_translation", t), i.track("submit.create_account", t)
                })
            }
            async function b() {
                if (!i) return;
                let t = (0, m.b)();
                i.activate("test_experiment", t), i.track("test_event", t)
            }
            _ && "/" === window.location.pathname && g(), _ && "/join" === window.location.pathname && y(), "/settings/profile" === window.location.pathname && b()
        },
        328: (t, e, o) => {
            function i() {
                return crypto.randomUUID()
            }
            o.r(e), o.d(e, {
                v4: () => i
            })
        },
        64325: (t, e, o) => {
            function i(t) {
                return n(t)[0]
            }

            function n(t) {
                let e = [];
                for (let o of function() {
                        try {
                            return document.cookie.split(";")
                        } catch {
                            return []
                        }
                    }()) {
                    let [i, n] = o.trim().split("=");
                    t === i && void 0 !== n && e.push({
                        key: i,
                        value: n
                    })
                }
                return e
            }

            function a(t, e, o = null, i = !1, n = "lax") {
                let a = document.domain;
                if (null == a) throw Error("Unable to get document domain");
                a.endsWith(".github.com") && (a = "github.com");
                let r = "https:" === location.protocol ? "; secure" : "",
                    l = o ? `; expires=${o}` : "";
                !1 === i && (a = `.${a}`);
                try {
                    document.cookie = `${t}=${e}; path=/; domain=${a}${l}${r}; samesite=${n}`
                } catch {}
            }

            function r(t, e = !1) {
                let o = document.domain;
                if (null == o) throw Error("Unable to get document domain");
                o.endsWith(".github.com") && (o = "github.com");
                let i = new Date().getTime(),
                    n = new Date(i - 1).toUTCString(),
                    a = "https:" === location.protocol ? "; secure" : "",
                    r = `; expires=${n}`;
                !1 === e && (o = `.${o}`);
                try {
                    document.cookie = `${t}=''; path=/; domain=${o}${r}${a}`
                } catch {}
            }
            o.d(e, {
                $1: () => n,
                d8: () => a,
                ej: () => i,
                kT: () => r
            })
        }
    },
    t => {
        var e = e => t(t.s = e);
        t.O(0, ["vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183", "vendors-node_modules_github_selector-observer_dist_index_esm_js", "vendors-node_modules_optimizely_optimizely-sdk_dist_optimizely_browser_es_min_js-node_modules-089adc", "ui_packages_failbot_failbot_ts"], () => e(68379)), t.O()
    }
]);
//# sourceMappingURL=optimizely-5484564e75fd.js.map