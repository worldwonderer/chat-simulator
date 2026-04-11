"use client";

import * as n from "react/jsx-runtime";
import * as ReactNS from "react";
import { i, r, c } from "./gameData";
import { h } from "./store";
import { u } from "./gameEngine";

const s = Object.assign({ default: ReactNS }, ReactNS);
const y = {
  default: function ImageShim(props) {
    const { src, alt, width, height, className, style, fill, ...rest } = props;
    return n.jsx("img", {
      src,
      alt,
      width,
      height,
      className,
      style: { color: "transparent", ...(style || {}) },
      loading: rest.loading ?? "lazy",
      decoding: rest.decoding ?? "async",
      "data-nimg": fill ? "fill" : "1",
      ...rest,
    });
  },
};


    let f = (...e) =>
        e
          .filter((e, t, n) => !!e && "" !== e.trim() && n.indexOf(e) === t)
          .join(" ")
          .trim(),
      D = (e) => {
        let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
          n ? n.toUpperCase() : t.toLowerCase(),
        );
        return t.charAt(0).toUpperCase() + t.slice(1);
      };
    var T = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };
    let v = (0, s.forwardRef)(
        (
          {
            color: e = "currentColor",
            size: t = 24,
            strokeWidth: n = 2,
            absoluteStrokeWidth: a,
            className: d = "",
            children: i,
            iconNode: r,
            ...c
          },
          l,
        ) =>
          (0, s.createElement)(
            "svg",
            {
              ref: l,
              ...T,
              width: t,
              height: t,
              stroke: e,
              strokeWidth: a ? (24 * Number(n)) / Number(t) : n,
              className: f("lucide", d),
              ...(!i &&
                !((e) => {
                  for (let t in e)
                    if (t.startsWith("aria-") || "role" === t || "title" === t)
                      return !0;
                  return !1;
                })(c) && { "aria-hidden": "true" }),
              ...c,
            },
            [
              ...r.map(([e, t]) => (0, s.createElement)(e, t)),
              ...(Array.isArray(i) ? i : [i]),
            ],
          ),
      ),
      N = (e, t) => {
        let n = (0, s.forwardRef)(({ className: n, ...a }, d) =>
          (0, s.createElement)(v, {
            ref: d,
            iconNode: t,
            className: f(
              `lucide-${D(e)
                .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                .toLowerCase()}`,
              `lucide-${e}`,
              n,
            ),
            ...a,
          }),
        );
        return ((n.displayName = D(e)), n);
      },
      w = N("shield-check", [
        [
          "path",
          {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y",
          },
        ],
        ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
      ]),
      S = N("book-open", [
        ["path", { d: "M12 7v14", key: "1akyts" }],
        [
          "path",
          {
            d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
            key: "ruj8y",
          },
        ],
      ]),
      j = N("triangle-alert", [
        [
          "path",
          {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
            key: "wmoenq",
          },
        ],
        ["path", { d: "M12 9v4", key: "juzpu7" }],
        ["path", { d: "M12 17h.01", key: "p32p05" }],
      ]),
      k = N("play", [
        [
          "path",
          {
            d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
            key: "10ikf1",
          },
        ],
      ]);
    function C() {
      let [e, t] = (0, s.useState)(""),
        [a, d] = (0, s.useState)("welcome"),
        r = h((e) => e.setPlayerName),
        l = h((e) => e.initGirl),
        { startGame: o } = u(),
        m = [
          "傻逼",
          "弱智",
          "白痴",
          "脑残",
          "爹",
          "妈",
          "爷爷",
          "奶奶",
          "霸霸",
          "霸",
          "畜生",
          "狗",
          "死",
          "操",
          "贱",
          "骚",
          "爸爸",
          "婊子",
          "爸",
          "爹爹",
        ],
        _ = () => {
          let t = e.trim(),
            n = m.some((e) => t.includes(e));
          ((!t || n) && (t = "李雷"), r(t));
          let s = Object.keys(i),
            a = localStorage.getItem("LAST_PLAYED_GIRL"),
            d = s.filter((e) => e !== a),
            c = d.length > 0 ? d : s,
            _ = c[Math.floor(Math.random() * c.length)];
          (localStorage.setItem("LAST_PLAYED_GIRL", _), l(_), o());
        };
      return (0, n.jsxs)("div", {
        className:
          "h-full flex flex-col items-center justify-center bg-[var(--wechat-bg)] px-5 py-8 overflow-y-auto",
        children: [
          "welcome" === a &&
            (0, n.jsxs)("div", {
              className:
                "w-full max-w-sm flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500",
              children: [
                (0, n.jsxs)("div", {
                  className: "flex flex-col items-center gap-3",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, n.jsx)(y.default, {
                          src: "/avatar-girl.png",
                          alt: "游戏角色",
                          width: 90,
                          height: 90,
                          className:
                            "rounded-2xl object-cover shadow-xl ring-4 ring-white",
                        }),
                        (0, n.jsx)("span", {
                          className:
                            "absolute -top-2 -right-2 text-white text-[16px] font-bold rounded-full px-1.5 py-0.5",
                          children: "❤️",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "text-center",
                      children: [
                        (0, n.jsx)("h1", {
                          className:
                            "text-2xl font-bold text-foreground tracking-tight",
                          children: "聊天模拟器",
                        }),
                        (0, n.jsx)("p", {
                          className: "text-sm text-muted-foreground mt-1",
                          children: "仅供娱乐",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className:
                    "w-full bg-amber-50 border border-amber-200 rounded-2xl p-4 space-y-2",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, n.jsx)(w, {
                          size: 16,
                          className: "text-amber-600 shrink-0",
                        }),
                        (0, n.jsx)("span", {
                          className: "text-sm font-semibold text-amber-800",
                          children: "游戏说明",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("p", {
                      className: "text-xs text-amber-700 leading-relaxed",
                      children: [
                        "本游戏",
                        (0, n.jsx)("strong", {
                          children: "剧情纯属娱乐，请勿代入剧情",
                        }),
                        "，所有名称和剧情都是虚构，请勿对应现实。 你将扮演纯情男大，通过选择回复消息来体验剧情。 --BY ARKSEC.NET 🩷",
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "w-full grid grid-cols-3 gap-3",
                  children: [
                    { icon: S, label: "多重剧情", sub: "随机邂逅" },
                    { icon: j, label: "话术识别", sub: "熟能生巧" },
                    { icon: w, label: "多种结局", sub: "随心走向" },
                  ].map(({ icon: e, label: t, sub: s }) =>
                    (0, n.jsxs)(
                      "div",
                      {
                        className:
                          "bg-white rounded-2xl p-3 flex flex-col items-center gap-1 shadow-sm border border-border",
                        children: [
                          (0, n.jsx)(e, {
                            size: 20,
                            className: "text-[var(--wechat-green)]",
                          }),
                          (0, n.jsx)("span", {
                            className:
                              "text-[11px] font-semibold text-foreground",
                            children: t,
                          }),
                          (0, n.jsx)("span", {
                            className: "text-[10px] text-muted-foreground",
                            children: s,
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
                (0, n.jsx)("button", {
                  onClick: () => d("name"),
                  className:
                    "w-full bg-[var(--wechat-green)] text-white font-bold py-3.5 rounded-2xl text-base shadow-lg active:scale-95 transition-transform",
                  children: "开始游戏",
                }),
                (0, n.jsx)("button", {
                  onClick: () => d("info"),
                  className:
                    "text-xs text-muted-foreground underline-offset-2 underline",
                  children: "查看PUA手法解析",
                }),
              ],
            }),
          "name" === a &&
            (0, n.jsxs)("div", {
              className:
                "w-full max-w-sm flex flex-col items-center gap-6 animate-in fade-in slide-in-from-right-4 duration-400",
              children: [
                (0, n.jsxs)("div", {
                  className: "text-center",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "w-16 h-16 rounded-full bg-[var(--wechat-green)] flex items-center justify-center mx-auto mb-3 shadow-lg",
                      children: (0, n.jsx)(y.default, {
                        src: "/avatar-boy.jpg",
                        alt: "你的头像",
                        width: 64,
                        height: 64,
                        className: "rounded-full object-cover",
                      }),
                    }),
                    (0, n.jsx)("h2", {
                      className: "text-xl font-bold text-foreground",
                      children: "你叫什么名字？",
                    }),
                    (0, n.jsx)("p", {
                      className: "text-sm text-muted-foreground mt-1",
                      children: "每次开启游戏，你可能会遇到不同的女孩",
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "w-full",
                  children: [
                    (0, n.jsx)("input", {
                      type: "text",
                      value: e,
                      onChange: (e) => t(e.target.value),
                      placeholder: "输入你的名字（默认：李雷）",
                      maxLength: 2,
                      className:
                        "w-full border-2 border-border bg-white rounded-2xl px-4 py-3.5 text-base text-center focus:border-[var(--wechat-green)] focus:outline-none transition-colors placeholder:text-muted-foreground",
                      onKeyDown: (e) => "Enter" === e.key && _(),
                      autoFocus: !0,
                    }),
                    (0, n.jsx)("p", {
                      className:
                        "text-center text-xs text-muted-foreground mt-2",
                      children: "最多两个字",
                    }),
                  ],
                }),
                (0, n.jsxs)("button", {
                  onClick: _,
                  className:
                    "w-full bg-[var(--wechat-green)] text-white font-bold py-3.5 rounded-2xl text-base shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform",
                  children: [(0, n.jsx)(k, { size: 18 }), "进入游戏"],
                }),
                (0, n.jsx)("button", {
                  onClick: () => d("welcome"),
                  className: "text-sm text-muted-foreground",
                  children: "返回",
                }),
              ],
            }),
          "info" === a &&
            (0, n.jsxs)("div", {
              className:
                "w-full max-w-sm flex flex-col gap-4 animate-in fade-in slide-in-from-right-4 duration-400",
              children: [
                (0, n.jsxs)("div", {
                  className: "text-center",
                  children: [
                    (0, n.jsx)("h2", {
                      className: "text-lg font-bold text-foreground",
                      children: "PUA手法解析",
                    }),
                    (0, n.jsx)("p", {
                      className: "text-xs text-muted-foreground",
                      children: "了解这些套路，保护自己",
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "space-y-3",
                  children: c.map((e) =>
                    (0, n.jsxs)(
                      "div",
                      {
                        className:
                          "bg-white rounded-2xl p-4 border border-border shadow-sm",
                        children: [
                          (0, n.jsxs)("div", {
                            className: "flex items-center gap-2 mb-1.5",
                            children: [
                              (0, n.jsx)(j, {
                                size: 13,
                                className: "text-amber-500 shrink-0",
                              }),
                              (0, n.jsx)("span", {
                                className: "text-sm font-bold text-foreground",
                                children: e.desc,
                              }),
                              (0, n.jsxs)("span", {
                                className:
                                  "text-[10px] text-muted-foreground font-mono",
                                children: ["(", e.name, ")"],
                              }),
                            ],
                          }),
                          (0, n.jsx)("p", {
                            className:
                              "text-xs text-muted-foreground leading-relaxed",
                            children: e.detail,
                          }),
                        ],
                      },
                      e.name,
                    ),
                  ),
                }),
                (0, n.jsx)("button", {
                  onClick: () => d("welcome"),
                  className:
                    "w-full bg-[var(--wechat-green)] text-white font-bold py-3 rounded-2xl text-sm shadow active:scale-95 transition-transform",
                  children: "返回首页",
                }),
              ],
            }),
        ],
      });
    }
    function L({ time: e }) {
      let t = e ? (e.match(/\d{2}:\d{2}$/)?.[0] ?? A()) : A();
      return (0, n.jsxs)("div", {
        className:
          "flex items-center justify-between px-5 bg-[var(--wechat-bar)] text-white h-[28px] shrink-0",
        children: [
          (0, n.jsx)("span", {
            className: "text-[13px] font-semibold tracking-wide tabular-nums",
            children: t,
          }),
          (0, n.jsxs)("div", {
            className: "flex items-center gap-[5px]",
            children: [
              (0, n.jsx)("div", {
                className: "flex items-end gap-[2px] h-[11px]",
                children: [4, 6, 8, 10].map((e, t) =>
                  (0, n.jsx)(
                    "div",
                    {
                      style: { height: `${e}px`, width: "3px" },
                      className: `rounded-[1px] ${t < 3 ? "bg-white" : "bg-white/40"}`,
                    },
                    t,
                  ),
                ),
              }),
              (0, n.jsxs)("svg", {
                width: "14",
                height: "11",
                viewBox: "0 0 14 11",
                fill: "none",
                children: [
                  (0, n.jsx)("path", {
                    d: "M7 8.5a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 7 8.5z",
                    fill: "white",
                  }),
                  (0, n.jsx)("path", {
                    d: "M3.5 6.3A4.95 4.95 0 0 1 7 5c1.3 0 2.5.47 3.5 1.3",
                    stroke: "white",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    fill: "none",
                  }),
                  (0, n.jsx)("path", {
                    d: "M1 3.7A8.4 8.4 0 0 1 7 1.5c2.3 0 4.4.9 6 2.2",
                    stroke: "white",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    fill: "none",
                    opacity: "0.5",
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "flex items-center gap-[1px]",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "relative w-[22px] h-[11px] rounded-[2.5px] border border-white/80 p-[1.5px]",
                    children: (0, n.jsx)("div", {
                      className: "w-[75%] h-full bg-white rounded-[1.5px]",
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: "w-[1.5px] h-[5px] bg-white/70 rounded-r-sm",
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    function A() {
      return new Date().toLocaleTimeString("zh-CN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: !1,
      });
    }
    let E = N("chevron-left", [
        ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
      ]),
      M = N("phone", [
        [
          "path",
          {
            d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
            key: "9njp5v",
          },
        ],
      ]),
      z = N("ellipsis", [
        ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
        ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
        ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }],
      ]);
    function B({ name: e, avatar: t = "/avatar-girl.jpg", isTyping: s = !1 }) {
      return (0, n.jsxs)("div", {
        className:
          "wechat-header flex items-center h-[48px] px-2 shrink-0 relative select-none",
        children: [
          (0, n.jsxs)("button", {
            className:
              "flex items-center text-white/90 active:text-white/50 transition-colors z-10 pr-2",
            children: [
              (0, n.jsx)(E, {
                size: 26,
                strokeWidth: 2.2,
                className: "-ml-0.5",
              }),
              (0, n.jsx)("span", {
                className: "text-[15px] font-normal -ml-1",
              }),
            ],
          }),
          (0, n.jsxs)("div", {
            className:
              "absolute inset-0 flex items-center justify-center gap-[7px] pointer-events-none",
            children: [
              (0, n.jsxs)("div", {
                className: "relative shrink-0",
                children: [
                  (0, n.jsx)(y.default, {
                    src: t,
                    alt: e,
                    width: 32,
                    height: 32,
                    className: "rounded-[5px] object-cover",
                  }),
                  (0, n.jsx)("span", {
                    className:
                      "absolute -bottom-0.5 -right-0.5 w-[9px] h-[9px] bg-[#4cd964] rounded-full border-[1.5px] border-[#3f7d50]",
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "flex flex-col items-start",
                children: [
                  (0, n.jsx)("span", {
                    className:
                      "text-white text-[16px] font-semibold leading-tight tracking-wide",
                    children: e,
                  }),
                  (0, n.jsx)("span", {
                    className: `text-[11px] leading-tight transition-all ${s ? "text-[#a8e6bc]" : "text-white/45"}`,
                    children: s ? "正在输入…" : "在线",
                  }),
                ],
              }),
            ],
          }),
          (0, n.jsxs)("div", {
            className:
              "ml-auto flex items-center gap-[18px] text-white/85 z-10 pl-2",
            children: [
              (0, n.jsx)("button", {
                className: "active:text-white/40 transition-colors",
                children: (0, n.jsx)(M, { size: 19, strokeWidth: 1.8 }),
              }),
              (0, n.jsx)("button", {
                className: "active:text-white/40 transition-colors",
                children: (0, n.jsx)(z, { size: 21, strokeWidth: 2 }),
              }),
            ],
          }),
        ],
      });
    }
    let I = (e = new Map(), t = null, n) => ({
        nextPart: e,
        validators: t,
        classGroupId: n,
      }),
      P = [],
      O = (e, t, n) => {
        if (0 == e.length - t) return n.classGroupId;
        let s = e[t],
          a = n.nextPart.get(s);
        if (a) {
          let n = O(e, t + 1, a);
          if (n) return n;
        }
        let d = n.validators;
        if (null === d) return;
        let i = 0 === t ? e.join("-") : e.slice(t).join("-"),
          r = d.length;
        for (let e = 0; e < r; e++) {
          let t = d[e];
          if (t.validator(i)) return t.classGroupId;
        }
      },
      U = (e, t) => {
        let n = I();
        for (let s in e) R(e[s], n, s, t);
        return n;
      },
      R = (e, t, n, s) => {
        let a = e.length;
        for (let d = 0; d < a; d++) $(e[d], t, n, s);
      },
      $ = (e, t, n, s) => {
        "string" == typeof e
          ? G(e, t, n)
          : "function" == typeof e
            ? W(e, t, n, s)
            : F(e, t, n, s);
      },
      G = (e, t, n) => {
        ("" === e ? t : H(t, e)).classGroupId = n;
      },
      W = (e, t, n, s) => {
        V(e)
          ? R(e(s), t, n, s)
          : (null === t.validators && (t.validators = []),
            t.validators.push({ classGroupId: n, validator: e }));
      },
      F = (e, t, n, s) => {
        let a = Object.entries(e),
          d = a.length;
        for (let e = 0; e < d; e++) {
          let [d, i] = a[e];
          R(i, H(t, d), n, s);
        }
      },
      H = (e, t) => {
        let n = e,
          s = t.split("-"),
          a = s.length;
        for (let e = 0; e < a; e++) {
          let t = s[e],
            a = n.nextPart.get(t);
          (a || ((a = I()), n.nextPart.set(t, a)), (n = a));
        }
        return n;
      },
      V = (e) => "isThemeGetter" in e && !0 === e.isThemeGetter,
      q = [],
      K = (e, t, n, s, a) => ({
        modifiers: e,
        hasImportantModifier: t,
        baseClassName: n,
        maybePostfixModifierPosition: s,
        isExternal: a,
      }),
      X = /\s+/,
      Y = (e) => {
        let t;
        if ("string" == typeof e) return e;
        let n = "";
        for (let s = 0; s < e.length; s++)
          e[s] && (t = Y(e[s])) && (n && (n += " "), (n += t));
        return n;
      },
      Q = [],
      J = (e) => {
        let t = (t) => t[e] || Q;
        return ((t.isThemeGetter = !0), t);
      },
      Z = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
      ee = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
      et = /^\d+\/\d+$/,
      en = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
      es =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
      ea = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
      ed = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
      ei =
        /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
      er = (e) => et.test(e),
      ec = (e) => !!e && !Number.isNaN(Number(e)),
      el = (e) => !!e && Number.isInteger(Number(e)),
      eo = (e) => e.endsWith("%") && ec(e.slice(0, -1)),
      em = (e) => en.test(e),
      e_ = () => !0,
      ex = (e) => es.test(e) && !ea.test(e),
      eh = () => !1,
      ey = (e) => ed.test(e),
      ep = (e) => ei.test(e),
      eb = (e) => !eu(e) && !ew(e),
      eg = (e) => eE(e, eI, eh),
      eu = (e) => Z.test(e),
      ef = (e) => eE(e, eP, ex),
      eD = (e) => eE(e, eO, ec),
      eT = (e) => eE(e, ez, eh),
      ev = (e) => eE(e, eB, ep),
      eN = (e) => eE(e, eR, ey),
      ew = (e) => ee.test(e),
      eS = (e) => eM(e, eP),
      ej = (e) => eM(e, eU),
      ek = (e) => eM(e, ez),
      eC = (e) => eM(e, eI),
      eL = (e) => eM(e, eB),
      eA = (e) => eM(e, eR, !0),
      eE = (e, t, n) => {
        let s = Z.exec(e);
        return !!s && (s[1] ? t(s[1]) : n(s[2]));
      },
      eM = (e, t, n = !1) => {
        let s = ee.exec(e);
        return !!s && (s[1] ? t(s[1]) : n);
      },
      ez = (e) => "position" === e || "percentage" === e,
      eB = (e) => "image" === e || "url" === e,
      eI = (e) => "length" === e || "size" === e || "bg-size" === e,
      eP = (e) => "length" === e,
      eO = (e) => "number" === e,
      eU = (e) => "family-name" === e,
      eR = (e) => "shadow" === e,
      e$ = ((e, ...t) => {
        let n,
          s,
          a,
          d,
          i = (e) => {
            let t = s(e);
            if (t) return t;
            let d = ((e, t) => {
              let {
                  parseClassName: n,
                  getClassGroupId: s,
                  getConflictingClassGroupIds: a,
                  sortModifiers: d,
                } = t,
                i = [],
                r = e.trim().split(X),
                c = "";
              for (let e = r.length - 1; e >= 0; e -= 1) {
                let t = r[e],
                  {
                    isExternal: l,
                    modifiers: o,
                    hasImportantModifier: m,
                    baseClassName: _,
                    maybePostfixModifierPosition: x,
                  } = n(t);
                if (l) {
                  c = t + (c.length > 0 ? " " + c : c);
                  continue;
                }
                let h = !!x,
                  y = s(h ? _.substring(0, x) : _);
                if (!y) {
                  if (!h || !(y = s(_))) {
                    c = t + (c.length > 0 ? " " + c : c);
                    continue;
                  }
                  h = !1;
                }
                let p =
                    0 === o.length
                      ? ""
                      : 1 === o.length
                        ? o[0]
                        : d(o).join(":"),
                  b = m ? p + "!" : p,
                  g = b + y;
                if (i.indexOf(g) > -1) continue;
                i.push(g);
                let u = a(y, h);
                for (let e = 0; e < u.length; ++e) {
                  let t = u[e];
                  i.push(b + t);
                }
                c = t + (c.length > 0 ? " " + c : c);
              }
              return c;
            })(e, n);
            return (a(e, d), d);
          };
        return (
          (d = (r) => {
            var c;
            let l;
            return (
              (s = (n = {
                cache: ((e) => {
                  if (e < 1) return { get: () => void 0, set: () => {} };
                  let t = 0,
                    n = Object.create(null),
                    s = Object.create(null),
                    a = (a, d) => {
                      ((n[a] = d),
                        ++t > e &&
                          ((t = 0), (s = n), (n = Object.create(null))));
                    };
                  return {
                    get(e) {
                      let t = n[e];
                      return void 0 !== t
                        ? t
                        : void 0 !== (t = s[e])
                          ? (a(e, t), t)
                          : void 0;
                    },
                    set(e, t) {
                      e in n ? (n[e] = t) : a(e, t);
                    },
                  };
                })((c = t.reduce((e, t) => t(e), e())).cacheSize),
                parseClassName: ((e) => {
                  let { prefix: t, experimentalParseClassName: n } = e,
                    s = (e) => {
                      let t,
                        n = [],
                        s = 0,
                        a = 0,
                        d = 0,
                        i = e.length;
                      for (let r = 0; r < i; r++) {
                        let i = e[r];
                        if (0 === s && 0 === a) {
                          if (":" === i) {
                            (n.push(e.slice(d, r)), (d = r + 1));
                            continue;
                          }
                          if ("/" === i) {
                            t = r;
                            continue;
                          }
                        }
                        "[" === i
                          ? s++
                          : "]" === i
                            ? s--
                            : "(" === i
                              ? a++
                              : ")" === i && a--;
                      }
                      let r = 0 === n.length ? e : e.slice(d),
                        c = r,
                        l = !1;
                      return (
                        r.endsWith("!")
                          ? ((c = r.slice(0, -1)), (l = !0))
                          : r.startsWith("!") && ((c = r.slice(1)), (l = !0)),
                        K(n, l, c, t && t > d ? t - d : void 0)
                      );
                    };
                  if (t) {
                    let e = t + ":",
                      n = s;
                    s = (t) =>
                      t.startsWith(e)
                        ? n(t.slice(e.length))
                        : K(q, !1, t, void 0, !0);
                  }
                  if (n) {
                    let e = s;
                    s = (t) => n({ className: t, parseClassName: e });
                  }
                  return s;
                })(c),
                sortModifiers:
                  ((l = new Map()),
                  c.orderSensitiveModifiers.forEach((e, t) => {
                    l.set(e, 1e6 + t);
                  }),
                  (e) => {
                    let t = [],
                      n = [];
                    for (let s = 0; s < e.length; s++) {
                      let a = e[s],
                        d = "[" === a[0],
                        i = l.has(a);
                      d || i
                        ? (n.length > 0 && (n.sort(), t.push(...n), (n = [])),
                          t.push(a))
                        : n.push(a);
                    }
                    return (n.length > 0 && (n.sort(), t.push(...n)), t);
                  }),
                ...((e) => {
                  let t = ((e) => {
                      let { theme: t, classGroups: n } = e;
                      return U(n, t);
                    })(e),
                    {
                      conflictingClassGroups: n,
                      conflictingClassGroupModifiers: s,
                    } = e;
                  return {
                    getClassGroupId: (e) => {
                      if (e.startsWith("[") && e.endsWith("]")) {
                        var n;
                        let t, s, a;
                        return -1 === (n = e).slice(1, -1).indexOf(":")
                          ? void 0
                          : ((s = (t = n.slice(1, -1)).indexOf(":")),
                            (a = t.slice(0, s)) ? "arbitrary.." + a : void 0);
                      }
                      let s = e.split("-"),
                        a = +("" === s[0] && s.length > 1);
                      return O(s, a, t);
                    },
                    getConflictingClassGroupIds: (e, t) => {
                      if (t) {
                        let t = s[e],
                          a = n[e];
                        if (t) {
                          if (a) {
                            let e = Array(a.length + t.length);
                            for (let t = 0; t < a.length; t++) e[t] = a[t];
                            for (let n = 0; n < t.length; n++)
                              e[a.length + n] = t[n];
                            return e;
                          }
                          return t;
                        }
                        return a || P;
                      }
                      return n[e] || P;
                    },
                  };
                })(c),
              }).cache.get),
              (a = n.cache.set),
              (d = i),
              i(r)
            );
          }),
          (...e) =>
            d(
              ((...e) => {
                let t,
                  n,
                  s = 0,
                  a = "";
                for (; s < e.length; )
                  (t = e[s++]) && (n = Y(t)) && (a && (a += " "), (a += n));
                return a;
              })(...e),
            )
        );
      })(() => {
        let e = J("color"),
          t = J("font"),
          n = J("text"),
          s = J("font-weight"),
          a = J("tracking"),
          d = J("leading"),
          i = J("breakpoint"),
          r = J("container"),
          c = J("spacing"),
          l = J("radius"),
          o = J("shadow"),
          m = J("inset-shadow"),
          _ = J("text-shadow"),
          x = J("drop-shadow"),
          h = J("blur"),
          y = J("perspective"),
          p = J("aspect"),
          b = J("ease"),
          g = J("animate"),
          u = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          f = () => [
            "center",
            "top",
            "bottom",
            "left",
            "right",
            "top-left",
            "left-top",
            "top-right",
            "right-top",
            "bottom-right",
            "right-bottom",
            "bottom-left",
            "left-bottom",
          ],
          D = () => [...f(), ew, eu],
          T = () => ["auto", "hidden", "clip", "visible", "scroll"],
          v = () => ["auto", "contain", "none"],
          N = () => [ew, eu, c],
          w = () => [er, "full", "auto", ...N()],
          S = () => [el, "none", "subgrid", ew, eu],
          j = () => ["auto", { span: ["full", el, ew, eu] }, el, ew, eu],
          k = () => [el, "auto", ew, eu],
          C = () => ["auto", "min", "max", "fr", ew, eu],
          L = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
            "baseline",
            "center-safe",
            "end-safe",
          ],
          A = () => [
            "start",
            "end",
            "center",
            "stretch",
            "center-safe",
            "end-safe",
          ],
          E = () => ["auto", ...N()],
          M = () => [
            er,
            "auto",
            "full",
            "dvw",
            "dvh",
            "lvw",
            "lvh",
            "svw",
            "svh",
            "min",
            "max",
            "fit",
            ...N(),
          ],
          z = () => [e, ew, eu],
          B = () => [...f(), ek, eT, { position: [ew, eu] }],
          I = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
          P = () => ["auto", "cover", "contain", eC, eg, { size: [ew, eu] }],
          O = () => [eo, eS, ef],
          U = () => ["", "none", "full", l, ew, eu],
          R = () => ["", ec, eS, ef],
          $ = () => ["solid", "dashed", "dotted", "double"],
          G = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          W = () => [ec, eo, ek, eT],
          F = () => ["", "none", h, ew, eu],
          H = () => ["none", ec, ew, eu],
          V = () => ["none", ec, ew, eu],
          q = () => [ec, ew, eu],
          K = () => [er, "full", ...N()];
        return {
          cacheSize: 500,
          theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [em],
            breakpoint: [em],
            color: [e_],
            container: [em],
            "drop-shadow": [em],
            ease: ["in", "out", "in-out"],
            font: [eb],
            "font-weight": [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
            ],
            "inset-shadow": [em],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: [
              "dramatic",
              "near",
              "normal",
              "midrange",
              "distant",
              "none",
            ],
            radius: [em],
            shadow: [em],
            spacing: ["px", ec],
            text: [em],
            "text-shadow": [em],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", er, eu, ew, p] }],
            container: ["container"],
            columns: [{ columns: [ec, eu, ew, r] }],
            "break-after": [{ "break-after": u() }],
            "break-before": [{ "break-before": u() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            sr: ["sr-only", "not-sr-only"],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: D() }],
            overflow: [{ overflow: T() }],
            "overflow-x": [{ "overflow-x": T() }],
            "overflow-y": [{ "overflow-y": T() }],
            overscroll: [{ overscroll: v() }],
            "overscroll-x": [{ "overscroll-x": v() }],
            "overscroll-y": [{ "overscroll-y": v() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: w() }],
            "inset-x": [{ "inset-x": w() }],
            "inset-y": [{ "inset-y": w() }],
            start: [{ start: w() }],
            end: [{ end: w() }],
            top: [{ top: w() }],
            right: [{ right: w() }],
            bottom: [{ bottom: w() }],
            left: [{ left: w() }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: [el, "auto", ew, eu] }],
            basis: [{ basis: [er, "full", "auto", r, ...N()] }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
            flex: [{ flex: [ec, er, "auto", "initial", "none", eu] }],
            grow: [{ grow: ["", ec, ew, eu] }],
            shrink: [{ shrink: ["", ec, ew, eu] }],
            order: [{ order: [el, "first", "last", "none", ew, eu] }],
            "grid-cols": [{ "grid-cols": S() }],
            "col-start-end": [{ col: j() }],
            "col-start": [{ "col-start": k() }],
            "col-end": [{ "col-end": k() }],
            "grid-rows": [{ "grid-rows": S() }],
            "row-start-end": [{ row: j() }],
            "row-start": [{ "row-start": k() }],
            "row-end": [{ "row-end": k() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": C() }],
            "auto-rows": [{ "auto-rows": C() }],
            gap: [{ gap: N() }],
            "gap-x": [{ "gap-x": N() }],
            "gap-y": [{ "gap-y": N() }],
            "justify-content": [{ justify: [...L(), "normal"] }],
            "justify-items": [{ "justify-items": [...A(), "normal"] }],
            "justify-self": [{ "justify-self": ["auto", ...A()] }],
            "align-content": [{ content: ["normal", ...L()] }],
            "align-items": [{ items: [...A(), { baseline: ["", "last"] }] }],
            "align-self": [
              { self: ["auto", ...A(), { baseline: ["", "last"] }] },
            ],
            "place-content": [{ "place-content": L() }],
            "place-items": [{ "place-items": [...A(), "baseline"] }],
            "place-self": [{ "place-self": ["auto", ...A()] }],
            p: [{ p: N() }],
            px: [{ px: N() }],
            py: [{ py: N() }],
            ps: [{ ps: N() }],
            pe: [{ pe: N() }],
            pt: [{ pt: N() }],
            pr: [{ pr: N() }],
            pb: [{ pb: N() }],
            pl: [{ pl: N() }],
            m: [{ m: E() }],
            mx: [{ mx: E() }],
            my: [{ my: E() }],
            ms: [{ ms: E() }],
            me: [{ me: E() }],
            mt: [{ mt: E() }],
            mr: [{ mr: E() }],
            mb: [{ mb: E() }],
            ml: [{ ml: E() }],
            "space-x": [{ "space-x": N() }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": N() }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{ size: M() }],
            w: [{ w: [r, "screen", ...M()] }],
            "min-w": [{ "min-w": [r, "screen", "none", ...M()] }],
            "max-w": [
              {
                "max-w": [
                  r,
                  "screen",
                  "none",
                  "prose",
                  { screen: [i] },
                  ...M(),
                ],
              },
            ],
            h: [{ h: ["screen", "lh", ...M()] }],
            "min-h": [{ "min-h": ["screen", "lh", "none", ...M()] }],
            "max-h": [{ "max-h": ["screen", "lh", ...M()] }],
            "font-size": [{ text: ["base", n, eS, ef] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{ font: [s, ew, eD] }],
            "font-stretch": [
              {
                "font-stretch": [
                  "ultra-condensed",
                  "extra-condensed",
                  "condensed",
                  "semi-condensed",
                  "normal",
                  "semi-expanded",
                  "expanded",
                  "extra-expanded",
                  "ultra-expanded",
                  eo,
                  eu,
                ],
              },
            ],
            "font-family": [{ font: [ej, eu, t] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{ tracking: [a, ew, eu] }],
            "line-clamp": [{ "line-clamp": [ec, "none", ew, eD] }],
            leading: [{ leading: [d, ...N()] }],
            "list-image": [{ "list-image": ["none", ew, eu] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "list-style-type": [{ list: ["disc", "decimal", "none", ew, eu] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "placeholder-color": [{ placeholder: z() }],
            "text-color": [{ text: z() }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...$(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: [ec, "from-font", "auto", ew, ef] },
            ],
            "text-decoration-color": [{ decoration: z() }],
            "underline-offset": [{ "underline-offset": [ec, "auto", ew, eu] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: N() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  ew,
                  eu,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", ew, eu] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: B() }],
            "bg-repeat": [{ bg: I() }],
            "bg-size": [{ bg: P() }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    linear: [
                      { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                      el,
                      ew,
                      eu,
                    ],
                    radial: ["", ew, eu],
                    conic: [el, ew, eu],
                  },
                  eL,
                  ev,
                ],
              },
            ],
            "bg-color": [{ bg: z() }],
            "gradient-from-pos": [{ from: O() }],
            "gradient-via-pos": [{ via: O() }],
            "gradient-to-pos": [{ to: O() }],
            "gradient-from": [{ from: z() }],
            "gradient-via": [{ via: z() }],
            "gradient-to": [{ to: z() }],
            rounded: [{ rounded: U() }],
            "rounded-s": [{ "rounded-s": U() }],
            "rounded-e": [{ "rounded-e": U() }],
            "rounded-t": [{ "rounded-t": U() }],
            "rounded-r": [{ "rounded-r": U() }],
            "rounded-b": [{ "rounded-b": U() }],
            "rounded-l": [{ "rounded-l": U() }],
            "rounded-ss": [{ "rounded-ss": U() }],
            "rounded-se": [{ "rounded-se": U() }],
            "rounded-ee": [{ "rounded-ee": U() }],
            "rounded-es": [{ "rounded-es": U() }],
            "rounded-tl": [{ "rounded-tl": U() }],
            "rounded-tr": [{ "rounded-tr": U() }],
            "rounded-br": [{ "rounded-br": U() }],
            "rounded-bl": [{ "rounded-bl": U() }],
            "border-w": [{ border: R() }],
            "border-w-x": [{ "border-x": R() }],
            "border-w-y": [{ "border-y": R() }],
            "border-w-s": [{ "border-s": R() }],
            "border-w-e": [{ "border-e": R() }],
            "border-w-t": [{ "border-t": R() }],
            "border-w-r": [{ "border-r": R() }],
            "border-w-b": [{ "border-b": R() }],
            "border-w-l": [{ "border-l": R() }],
            "divide-x": [{ "divide-x": R() }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": R() }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{ border: [...$(), "hidden", "none"] }],
            "divide-style": [{ divide: [...$(), "hidden", "none"] }],
            "border-color": [{ border: z() }],
            "border-color-x": [{ "border-x": z() }],
            "border-color-y": [{ "border-y": z() }],
            "border-color-s": [{ "border-s": z() }],
            "border-color-e": [{ "border-e": z() }],
            "border-color-t": [{ "border-t": z() }],
            "border-color-r": [{ "border-r": z() }],
            "border-color-b": [{ "border-b": z() }],
            "border-color-l": [{ "border-l": z() }],
            "divide-color": [{ divide: z() }],
            "outline-style": [{ outline: [...$(), "none", "hidden"] }],
            "outline-offset": [{ "outline-offset": [ec, ew, eu] }],
            "outline-w": [{ outline: ["", ec, eS, ef] }],
            "outline-color": [{ outline: z() }],
            shadow: [{ shadow: ["", "none", o, eA, eN] }],
            "shadow-color": [{ shadow: z() }],
            "inset-shadow": [{ "inset-shadow": ["none", m, eA, eN] }],
            "inset-shadow-color": [{ "inset-shadow": z() }],
            "ring-w": [{ ring: R() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: z() }],
            "ring-offset-w": [{ "ring-offset": [ec, ef] }],
            "ring-offset-color": [{ "ring-offset": z() }],
            "inset-ring-w": [{ "inset-ring": R() }],
            "inset-ring-color": [{ "inset-ring": z() }],
            "text-shadow": [{ "text-shadow": ["none", _, eA, eN] }],
            "text-shadow-color": [{ "text-shadow": z() }],
            opacity: [{ opacity: [ec, ew, eu] }],
            "mix-blend": [
              { "mix-blend": [...G(), "plus-darker", "plus-lighter"] },
            ],
            "bg-blend": [{ "bg-blend": G() }],
            "mask-clip": [
              {
                "mask-clip": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view",
                ],
              },
              "mask-no-clip",
            ],
            "mask-composite": [
              { mask: ["add", "subtract", "intersect", "exclude"] },
            ],
            "mask-image-linear-pos": [{ "mask-linear": [ec] }],
            "mask-image-linear-from-pos": [{ "mask-linear-from": W() }],
            "mask-image-linear-to-pos": [{ "mask-linear-to": W() }],
            "mask-image-linear-from-color": [{ "mask-linear-from": z() }],
            "mask-image-linear-to-color": [{ "mask-linear-to": z() }],
            "mask-image-t-from-pos": [{ "mask-t-from": W() }],
            "mask-image-t-to-pos": [{ "mask-t-to": W() }],
            "mask-image-t-from-color": [{ "mask-t-from": z() }],
            "mask-image-t-to-color": [{ "mask-t-to": z() }],
            "mask-image-r-from-pos": [{ "mask-r-from": W() }],
            "mask-image-r-to-pos": [{ "mask-r-to": W() }],
            "mask-image-r-from-color": [{ "mask-r-from": z() }],
            "mask-image-r-to-color": [{ "mask-r-to": z() }],
            "mask-image-b-from-pos": [{ "mask-b-from": W() }],
            "mask-image-b-to-pos": [{ "mask-b-to": W() }],
            "mask-image-b-from-color": [{ "mask-b-from": z() }],
            "mask-image-b-to-color": [{ "mask-b-to": z() }],
            "mask-image-l-from-pos": [{ "mask-l-from": W() }],
            "mask-image-l-to-pos": [{ "mask-l-to": W() }],
            "mask-image-l-from-color": [{ "mask-l-from": z() }],
            "mask-image-l-to-color": [{ "mask-l-to": z() }],
            "mask-image-x-from-pos": [{ "mask-x-from": W() }],
            "mask-image-x-to-pos": [{ "mask-x-to": W() }],
            "mask-image-x-from-color": [{ "mask-x-from": z() }],
            "mask-image-x-to-color": [{ "mask-x-to": z() }],
            "mask-image-y-from-pos": [{ "mask-y-from": W() }],
            "mask-image-y-to-pos": [{ "mask-y-to": W() }],
            "mask-image-y-from-color": [{ "mask-y-from": z() }],
            "mask-image-y-to-color": [{ "mask-y-to": z() }],
            "mask-image-radial": [{ "mask-radial": [ew, eu] }],
            "mask-image-radial-from-pos": [{ "mask-radial-from": W() }],
            "mask-image-radial-to-pos": [{ "mask-radial-to": W() }],
            "mask-image-radial-from-color": [{ "mask-radial-from": z() }],
            "mask-image-radial-to-color": [{ "mask-radial-to": z() }],
            "mask-image-radial-shape": [
              { "mask-radial": ["circle", "ellipse"] },
            ],
            "mask-image-radial-size": [
              {
                "mask-radial": [
                  { closest: ["side", "corner"], farthest: ["side", "corner"] },
                ],
              },
            ],
            "mask-image-radial-pos": [{ "mask-radial-at": f() }],
            "mask-image-conic-pos": [{ "mask-conic": [ec] }],
            "mask-image-conic-from-pos": [{ "mask-conic-from": W() }],
            "mask-image-conic-to-pos": [{ "mask-conic-to": W() }],
            "mask-image-conic-from-color": [{ "mask-conic-from": z() }],
            "mask-image-conic-to-color": [{ "mask-conic-to": z() }],
            "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
            "mask-origin": [
              {
                "mask-origin": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view",
                ],
              },
            ],
            "mask-position": [{ mask: B() }],
            "mask-repeat": [{ mask: I() }],
            "mask-size": [{ mask: P() }],
            "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
            "mask-image": [{ mask: ["none", ew, eu] }],
            filter: [{ filter: ["", "none", ew, eu] }],
            blur: [{ blur: F() }],
            brightness: [{ brightness: [ec, ew, eu] }],
            contrast: [{ contrast: [ec, ew, eu] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", x, eA, eN] }],
            "drop-shadow-color": [{ "drop-shadow": z() }],
            grayscale: [{ grayscale: ["", ec, ew, eu] }],
            "hue-rotate": [{ "hue-rotate": [ec, ew, eu] }],
            invert: [{ invert: ["", ec, ew, eu] }],
            saturate: [{ saturate: [ec, ew, eu] }],
            sepia: [{ sepia: ["", ec, ew, eu] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none", ew, eu] }],
            "backdrop-blur": [{ "backdrop-blur": F() }],
            "backdrop-brightness": [{ "backdrop-brightness": [ec, ew, eu] }],
            "backdrop-contrast": [{ "backdrop-contrast": [ec, ew, eu] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": ["", ec, ew, eu] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [ec, ew, eu] }],
            "backdrop-invert": [{ "backdrop-invert": ["", ec, ew, eu] }],
            "backdrop-opacity": [{ "backdrop-opacity": [ec, ew, eu] }],
            "backdrop-saturate": [{ "backdrop-saturate": [ec, ew, eu] }],
            "backdrop-sepia": [{ "backdrop-sepia": ["", ec, ew, eu] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": N() }],
            "border-spacing-x": [{ "border-spacing-x": N() }],
            "border-spacing-y": [{ "border-spacing-y": N() }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "",
                  "all",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  "none",
                  ew,
                  eu,
                ],
              },
            ],
            "transition-behavior": [{ transition: ["normal", "discrete"] }],
            duration: [{ duration: [ec, "initial", ew, eu] }],
            ease: [{ ease: ["linear", "initial", b, ew, eu] }],
            delay: [{ delay: [ec, ew, eu] }],
            animate: [{ animate: ["none", g, ew, eu] }],
            backface: [{ backface: ["hidden", "visible"] }],
            perspective: [{ perspective: [y, ew, eu] }],
            "perspective-origin": [{ "perspective-origin": D() }],
            rotate: [{ rotate: H() }],
            "rotate-x": [{ "rotate-x": H() }],
            "rotate-y": [{ "rotate-y": H() }],
            "rotate-z": [{ "rotate-z": H() }],
            scale: [{ scale: V() }],
            "scale-x": [{ "scale-x": V() }],
            "scale-y": [{ "scale-y": V() }],
            "scale-z": [{ "scale-z": V() }],
            "scale-3d": ["scale-3d"],
            skew: [{ skew: q() }],
            "skew-x": [{ "skew-x": q() }],
            "skew-y": [{ "skew-y": q() }],
            transform: [{ transform: [ew, eu, "", "none", "gpu", "cpu"] }],
            "transform-origin": [{ origin: D() }],
            "transform-style": [{ transform: ["3d", "flat"] }],
            translate: [{ translate: K() }],
            "translate-x": [{ "translate-x": K() }],
            "translate-y": [{ "translate-y": K() }],
            "translate-z": [{ "translate-z": K() }],
            "translate-none": ["translate-none"],
            accent: [{ accent: z() }],
            appearance: [{ appearance: ["none", "auto"] }],
            "caret-color": [{ caret: z() }],
            "color-scheme": [
              {
                scheme: [
                  "normal",
                  "dark",
                  "light",
                  "light-dark",
                  "only-dark",
                  "only-light",
                ],
              },
            ],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  ew,
                  eu,
                ],
              },
            ],
            "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
            "pointer-events": [{ "pointer-events": ["auto", "none"] }],
            resize: [{ resize: ["none", "", "y", "x"] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": N() }],
            "scroll-mx": [{ "scroll-mx": N() }],
            "scroll-my": [{ "scroll-my": N() }],
            "scroll-ms": [{ "scroll-ms": N() }],
            "scroll-me": [{ "scroll-me": N() }],
            "scroll-mt": [{ "scroll-mt": N() }],
            "scroll-mr": [{ "scroll-mr": N() }],
            "scroll-mb": [{ "scroll-mb": N() }],
            "scroll-ml": [{ "scroll-ml": N() }],
            "scroll-p": [{ "scroll-p": N() }],
            "scroll-px": [{ "scroll-px": N() }],
            "scroll-py": [{ "scroll-py": N() }],
            "scroll-ps": [{ "scroll-ps": N() }],
            "scroll-pe": [{ "scroll-pe": N() }],
            "scroll-pt": [{ "scroll-pt": N() }],
            "scroll-pr": [{ "scroll-pr": N() }],
            "scroll-pb": [{ "scroll-pb": N() }],
            "scroll-pl": [{ "scroll-pl": N() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              {
                "will-change": [
                  "auto",
                  "scroll",
                  "contents",
                  "transform",
                  ew,
                  eu,
                ],
              },
            ],
            fill: [{ fill: ["none", ...z()] }],
            "stroke-w": [{ stroke: [ec, eS, ef, eD] }],
            stroke: [{ stroke: ["none", ...z()] }],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-x",
              "border-w-y",
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-x",
              "border-color-y",
              "border-color-s",
              "border-color-e",
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": [
              "translate",
              "translate-x",
              "translate-y",
              "translate-z",
            ],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
          orderSensitiveModifiers: [
            "*",
            "**",
            "after",
            "backdrop",
            "before",
            "details-content",
            "file",
            "first-letter",
            "first-line",
            "marker",
            "placeholder",
            "selection",
          ],
        };
      });
    function eG(...e) {
      return e$(
        (function () {
          for (var e, t, n = 0, s = "", a = arguments.length; n < a; n++)
            (e = arguments[n]) &&
              (t = (function e(t) {
                var n,
                  s,
                  a = "";
                if ("string" == typeof t || "number" == typeof t) a += t;
                else if ("object" == typeof t)
                  if (Array.isArray(t)) {
                    var d = t.length;
                    for (n = 0; n < d; n++)
                      t[n] && (s = e(t[n])) && (a && (a += " "), (a += s));
                  } else for (s in t) t[s] && (a && (a += " "), (a += s));
                return a;
              })(e)) &&
              (s && (s += " "), (s += t));
          return s;
        })(e),
      );
    }
    function eW({
      message: e,
      playerName: t = "我",
      girlName: s = "林晓柔",
      girlAvatar: a = "/avatar-girl.jpg",
    }) {
      let { sender: d, content: i, type: r, image: c } = e;
      if ("system" === d) {
        let e = i.startsWith("[TIME]"),
          t = e ? i.replace("[TIME]", "").trim() : i;
        return e
          ? (0, n.jsx)("div", {
              className: "flex justify-center px-4 my-[14px]",
              children: (0, n.jsx)("span", {
                className:
                  "text-[11px] text-[#999] bg-black/[0.045] rounded-[3px] px-[10px] py-[2px]",
                children: t,
              }),
            })
          : (0, n.jsx)("div", {
              className: "flex justify-center px-4 my-2.5",
              children: (0, n.jsx)("span", {
                className:
                  "text-[11px] text-[#888] bg-black/[0.055] rounded-sm px-2.5 py-[3px] leading-relaxed text-center max-w-[82%]",
                children: t,
              }),
            });
      }
      if ("read" === r)
        return (0, n.jsx)("div", {
          className: "flex justify-end pr-14 my-0.5",
          children: (0, n.jsx)("span", {
            className: "text-[10px] text-[#aaa]",
            children: i,
          }),
        });
      let l = "me" === d,
        o = i.match(/^\[图片：(.*?)\]$/),
        m = !!c || !!o,
        _ = o ? o[1] : "聊天图片";
      return (0, n.jsxs)("div", {
        className: eG(
          "flex items-start gap-[10px] px-[14px] my-[6px] message-in",
          l ? "flex-row-reverse" : "flex-row",
        ),
        children: [
          (0, n.jsx)("div", {
            className: "shrink-0 mt-0.5",
            children: (0, n.jsx)(y.default, {
              src: l ? "/avatar-boy.jpg" : a,
              alt: l ? t : s,
              width: 40,
              height: 40,
              className: "rounded-[4px] object-cover",
            }),
          }),
          (0, n.jsxs)("div", {
            className: eG(
              "flex flex-col max-w-[70%]",
              l ? "items-end" : "items-start",
            ),
            children: [
              !l &&
                (0, n.jsx)("span", {
                  className: "text-[12px] text-[#888] mb-[3px] ml-[2px]",
                  children: s,
                }),
              m
                ? (0, n.jsx)("div", {
                    className:
                      "relative overflow-hidden rounded-[6px] border border-black/5 mt-0.5 cursor-pointer active:opacity-80 transition-opacity bg-gray-100 flex items-center justify-center min-h-[120px] min-w-[120px] max-w-[200px]",
                    children: c
                      ? (0, n.jsx)(y.default, {
                          src: c,
                          alt: _,
                          width: 200,
                          height: 200,
                          className: "object-cover w-auto h-auto max-h-[250px]",
                          unoptimized: !0,
                        })
                      : (0, n.jsxs)("div", {
                          className:
                            "p-4 text-center text-gray-400 text-xs flex flex-col items-center gap-2",
                          children: [
                            (0, n.jsx)("svg", {
                              className: "w-8 h-8 opacity-50",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: (0, n.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
                              }),
                            }),
                            (0, n.jsx)("span", { children: _ }),
                          ],
                        }),
                  })
                : (0, n.jsx)("div", {
                    className: eG(
                      "relative px-[12px] py-[8px] rounded-[4px] text-[15px] leading-[1.55] break-words whitespace-pre-wrap",
                      l
                        ? "bg-[#95ec69] text-[#111] bubble-right rounded-tr-[2px]"
                        : "bg-white text-[#111] bubble-left rounded-tl-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.08)]",
                    ),
                    children: i,
                  }),
            ],
          }),
        ],
      });
    }
    function eF({
      girlName: e = "林晓柔",
      girlAvatar: t = "/avatar-girl.jpg",
    }) {
      return (0, n.jsxs)("div", {
        className: "flex items-start gap-[10px] px-[14px] my-[6px] message-in",
        children: [
          (0, n.jsx)(y.default, {
            src: t,
            alt: e,
            width: 40,
            height: 40,
            className: "rounded-[4px] object-cover mt-0.5",
          }),
          (0, n.jsxs)("div", {
            className: "flex flex-col items-start",
            children: [
              (0, n.jsx)("span", {
                className: "text-[12px] text-[#888] mb-[3px] ml-[2px]",
                children: e,
              }),
              (0, n.jsx)("div", {
                className:
                  "relative bg-white rounded-[4px] rounded-tl-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.08)] px-[14px] py-[11px] bubble-left",
                children: (0, n.jsxs)("div", {
                  className: "flex items-center gap-[5px]",
                  children: [
                    (0, n.jsx)("span", {
                      className:
                        "typing-dot w-[7px] h-[7px] bg-[#bbb] rounded-full inline-block",
                    }),
                    (0, n.jsx)("span", {
                      className:
                        "typing-dot w-[7px] h-[7px] bg-[#bbb] rounded-full inline-block",
                    }),
                    (0, n.jsx)("span", {
                      className:
                        "typing-dot w-[7px] h-[7px] bg-[#bbb] rounded-full inline-block",
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      });
    }
    let eH = ["bg-[#07c160]", "bg-[#1aad19]", "bg-[#0b8a52]", "bg-[#3fbe8c]"];
    function eV({ choices: e, onSelect: t, disabled: a = !1 }) {
      let { playerName: d } = h(),
        i = d || "你",
        [r, c] = (0, s.useState)(null);
      return (0, n.jsxs)("div", {
        className:
          "shrink-0 bg-[#f0f0f0] border-t border-[#d9d9d9] pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.03)]",
        children: [
          (0, n.jsx)("div", {
            className:
              "flex items-center justify-center py-[7px] border-b border-[#e5e5e5]",
            children: (0, n.jsx)("span", {
              className: "text-[11px] text-[#aaa]",
              children: r ? "判定结果揭晓..." : "选择你的回复方式",
            }),
          }),
          (0, n.jsx)("div", {
            className:
              "flex flex-col divide-y divide-[#e5e5e5] max-h-[45vh] overflow-y-auto overscroll-contain",
            children: e.map((e, s) => {
              let d = r === e.id,
                l = null !== r;
              return (0, n.jsxs)(
                "button",
                {
                  disabled: a || l,
                  onClick: () => {
                    !a &&
                      !r &&
                      (c(e.id),
                      setTimeout(() => {
                        t(e);
                      }, 999));
                  },
                  className: eG(
                    "option-card w-full flex items-center justify-between px-4 py-[12px] transition-all duration-300 text-left",
                    !l && "bg-white active:bg-[#ececec]",
                    l && d && "bg-[#e8f6e8]",
                    l && !d && "bg-[#f9f9f9] opacity-50",
                  ),
                  children: [
                    (0, n.jsxs)("div", {
                      className: "flex items-start gap-3 pr-3",
                      children: [
                        (0, n.jsx)("span", {
                          className: eG(
                            "shrink-0 w-[22px] h-[22px] mt-[1px] rounded-full flex items-center justify-center text-[11px] font-bold text-white transition-colors",
                            eH[s % eH.length],
                            l && !d && "bg-[#ccc]",
                          ),
                          children: e.label,
                        }),
                        (0, n.jsx)("span", {
                          className: "text-[14px] text-[#1a1a1a] leading-snug",
                          children: e.text.replace(/\{name\}/g, i),
                        }),
                      ],
                    }),
                    l &&
                      e.badgeText &&
                      (0, n.jsx)("span", {
                        className: eG(
                          "shrink-0 text-[11px] font-medium px-2 py-0.5 rounded border whitespace-nowrap animate-in fade-in zoom-in duration-300",
                          d
                            ? "text-[#07c160] bg-[#07c160]/10 border-[#07c160]/30"
                            : "text-[#888] bg-[#f0f0f0] border-[#e0e0e0]",
                        ),
                        children: e.badgeText,
                      }),
                  ],
                },
                e.id,
              );
            }),
          }),
        ],
      });
    }
    function eq({ affection: e, anxiety: t, chapter: s }) {
      let a = r[s] ?? "进行中";
      return (0, n.jsxs)("div", {
        className:
          "shrink-0 bg-[#111] px-4 py-[7px] flex items-center gap-3 border-b border-white/10",
        children: [
          (0, n.jsx)("span", {
            className:
              "text-[10px] text-white/45 whitespace-nowrap shrink-0 leading-none",
            children: a,
          }),
          (0, n.jsx)("div", { className: "w-px h-3 bg-white/15 shrink-0" }),
          (0, n.jsxs)("div", {
            className: "flex items-center gap-1.5 flex-1 min-w-0",
            children: [
              (0, n.jsx)("span", {
                className: "text-[10px] text-[#ff7b8a] shrink-0 leading-none",
                children: "好感",
              }),
              (0, n.jsx)("div", {
                className:
                  "flex-1 h-[3px] bg-white/10 rounded-full overflow-hidden",
                children: (0, n.jsx)("div", {
                  className:
                    "h-full rounded-full bg-[#ff7b8a] transition-all duration-700",
                  style: { width: `${Math.max(2, e)}%` },
                }),
              }),
              (0, n.jsx)("span", {
                className:
                  "text-[10px] text-white/35 tabular-nums w-5 text-right leading-none shrink-0",
                children: e,
              }),
            ],
          }),
          (0, n.jsx)("div", { className: "w-px h-3 bg-white/15 shrink-0" }),
          (0, n.jsxs)("div", {
            className: "flex items-center gap-1.5 flex-1 min-w-0",
            children: [
              (0, n.jsx)("span", {
                className: "text-[10px] text-[#ffb347] shrink-0 leading-none",
                children: "焦虑",
              }),
              (0, n.jsx)("div", {
                className:
                  "flex-1 h-[3px] bg-white/10 rounded-full overflow-hidden",
                children: (0, n.jsx)("div", {
                  className: eG(
                    "h-full rounded-full transition-all duration-700",
                    t >= 70 ? "bg-[#ff4444]" : "bg-[#ffb347]",
                  ),
                  style: { width: `${Math.max(2, t)}%` },
                }),
              }),
              (0, n.jsx)("span", {
                className:
                  "text-[10px] text-white/35 tabular-nums w-5 text-right leading-none shrink-0",
                children: t,
              }),
            ],
          }),
        ],
      });
    }
    let eK = N("smile", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
        ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
        ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }],
      ]),
      eX = N("plus", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "M12 5v14", key: "s699le" }],
      ]),
      eY = N("mic", [
        ["path", { d: "M12 19v3", key: "npa21l" }],
        ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
        [
          "rect",
          { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" },
        ],
      ]),
      eQ = N("chevron-down", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
    function eJ() {
      let {
          visibleMessages: e,
          isTyping: t,
          showChoices: a,
          currentChoices: d,
          affection: i,
          anxiety: r,
          chapter: c,
          playerName: l,
          girlName: o,
          girlAvatar: m,
        } = h(),
        { selectChoice: _ } = u(),
        x = (0, s.useRef)(null),
        y = (0, s.useRef)(null),
        [p, b] = (0, s.useState)(!1),
        g = (0, s.useRef)(!0),
        f = (0, s.useCallback)(() => {
          let e = x.current;
          if (!e) return;
          let t = e.scrollHeight - e.scrollTop - e.clientHeight;
          ((g.current = t < 80), b(t > 120));
        }, []);
      ((0, s.useEffect)(() => {
        g.current
          ? (y.current?.scrollIntoView({ behavior: "smooth" }), b(!1))
          : b(!0);
      }, [e, t]),
        (0, s.useEffect)(() => {
          a &&
            setTimeout(() => {
              (y.current?.scrollIntoView({ behavior: "smooth" }), b(!1));
            }, 50);
        }, [a]));
      let D = (0, s.useCallback)(() => {
          (y.current?.scrollIntoView({ behavior: "smooth" }),
            b(!1),
            (g.current = !0));
        }, []),
        T = (0, s.useCallback)((e) => _(e), [_]);
      return (0, n.jsxs)("div", {
        className: "h-full flex flex-col bg-[var(--wechat-bg)] overflow-hidden",
        children: [
          (0, n.jsx)(L, {}),
          (0, n.jsx)(B, { name: o, avatar: m, isTyping: t }),
          (0, n.jsx)(eq, { affection: i, anxiety: r, chapter: c }),
          (0, n.jsxs)("div", {
            ref: x,
            onScroll: f,
            className: "flex-1 overflow-y-auto overscroll-contain",
            children: [
              e.map((e) =>
                (0, n.jsx)(
                  eW,
                  {
                    message: e,
                    playerName: l || "我",
                    girlName: o,
                    girlAvatar: m,
                  },
                  e.id,
                ),
              ),
              t && (0, n.jsx)(eF, { girlName: o, girlAvatar: m }),
              (0, n.jsx)("div", { ref: y, className: "h-4" }),
            ],
          }),
          p &&
            (0, n.jsxs)("button", {
              onClick: D,
              className:
                "absolute bottom-[130px] left-1/2 -translate-x-1/2 flex items-center gap-1 bg-white/95 border border-[#ddd] shadow-md rounded-full px-3 py-1.5 text-[12px] text-[#555] z-10 active:bg-[#f0f0f0] transition-all",
              children: [
                (0, n.jsx)(eQ, { size: 13, strokeWidth: 2.5 }),
                "查看新消息",
              ],
            }),
          a
            ? (0, n.jsx)("div", {
                className: "shrink-0 animate-slide-up",
                children: (0, n.jsx)(eV, { choices: d, onSelect: T }),
              })
            : (0, n.jsxs)("div", {
                className:
                  "shrink-0 bg-[#f5f5f5] border-t border-[#e0e0e0] px-2 py-[7px] flex items-center gap-1.5",
                children: [
                  (0, n.jsx)("button", {
                    className: "p-1.5 rounded-md active:bg-black/10",
                    children: (0, n.jsx)(eY, {
                      size: 24,
                      className: "text-[#555]",
                      strokeWidth: 1.8,
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "flex-1 bg-white rounded-[5px] border border-[#ddd] px-3 h-[36px] flex items-center text-[13px] text-[#c0c0c0] shadow-inner",
                    children: t ? "对方正在输入…" : "选择下方选项回复",
                  }),
                  (0, n.jsx)("button", {
                    className: "p-1.5 rounded-md active:bg-black/10",
                    children: (0, n.jsx)(eK, {
                      size: 22,
                      className: "text-[#555]",
                      strokeWidth: 1.8,
                    }),
                  }),
                  (0, n.jsx)("button", {
                    className: "p-1.5 rounded-md active:bg-black/10",
                    children: (0, n.jsx)(eX, {
                      size: 22,
                      className: "text-[#555]",
                      strokeWidth: 1.8,
                    }),
                  }),
                ],
              }),
        ],
      });
    }
    let eZ = N("heart", [
        [
          "path",
          {
            d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
            key: "mvr1a0",
          },
        ],
      ]),
      e0 = N("star", [
        [
          "path",
          {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s",
          },
        ],
      ]),
      e1 = N("house", [
        [
          "path",
          { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
        ],
        [
          "path",
          {
            d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            key: "r6nss1",
          },
        ],
      ]),
      e2 = {
        good: {
          bg: "from-green-50 to-emerald-50",
          border: "border-green-300",
          icon: w,
          iconColor: "text-green-600",
          badge: "🌟 清醒结局",
          badgeBg: "bg-green-100 text-green-700",
        },
        bad: {
          bg: "from-gray-50 to-slate-50",
          border: "border-gray-300",
          icon: eZ,
          iconColor: "text-gray-500",
          badge: "💔 沉沦结局",
          badgeBg: "bg-gray-200 text-gray-700",
        },
      };
    function e5() {
      let {
        endingData: e,
        affection: t,
        anxiety: s,
        choiceHistory: a,
        resetGame: d,
        girlName: i,
        girlAvatar: r,
      } = h();
      if (!e) return null;
      let l = e2[e.type] ?? e2.bad,
        o = Math.max(0, Math.round(100 - 0.5 * t - 0.3 * s)),
        m = a.filter((e) => (e.anxietyDelta ?? 0) < 0);
      return (0, n.jsxs)("div", {
        className:
          "h-full overflow-y-auto bg-[var(--wechat-bg)] px-4 py-6 flex flex-col gap-5",
        children: [
          (0, n.jsxs)("div", {
            className: "flex flex-col items-center justify-center pt-2 pb-1",
            children: [
              (0, n.jsx)(y.default, {
                src: r,
                alt: i,
                width: 60,
                height: 60,
                className:
                  "rounded-2xl shadow-md border-2 border-white object-cover",
              }),
              (0, n.jsxs)("p", {
                className: "text-xs text-muted-foreground mt-2 tracking-widest",
                children: [
                  "与 ",
                  (0, n.jsx)("span", {
                    className: "font-bold text-foreground",
                    children: i,
                  }),
                  " 的故事结局",
                ],
              }),
            ],
          }),
          (0, n.jsxs)("div", {
            className: eG(
              "rounded-3xl border-2 p-5 bg-gradient-to-b space-y-4 shadow-sm",
              l.bg,
              l.border,
            ),
            children: [
              (0, n.jsxs)("div", {
                className: "flex items-center gap-3",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center",
                    children: (0, n.jsx)(l.icon, {
                      size: 24,
                      className: l.iconColor,
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsx)("span", {
                        className: eG(
                          "text-[11px] font-bold rounded-full px-2.5 py-0.5",
                          l.badgeBg,
                        ),
                        children: l.badge,
                      }),
                      (0, n.jsx)("h2", {
                        className:
                          "text-lg font-bold text-foreground mt-1.5 text-balance leading-tight",
                        children: e.title,
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className:
                  "bg-white/70 rounded-2xl p-4 shadow-inner border border-white/50",
                children: e.desc
                  .split("\n")
                  .map((e, t) =>
                    (0, n.jsx)(
                      "p",
                      {
                        className: eG(
                          "text-sm text-foreground leading-relaxed",
                          "" === e ? "mt-2" : "",
                        ),
                        children: e,
                      },
                      t,
                    ),
                  ),
              }),
            ],
          }),
          (0, n.jsxs)("div", {
            className: "grid grid-cols-3 gap-3",
            children: [
              (0, n.jsx)(e3, {
                label: "最终理智值",
                value: `${o}`,
                unit: "分",
                color: "text-green-600",
              }),
              (0, n.jsx)(e3, {
                label: "沉沦指数",
                value: `${t}`,
                unit: "%",
                color: "text-rose-500",
              }),
              (0, n.jsx)(e3, {
                label: "反制次数",
                value: `${m.length}`,
                unit: "次",
                color: "text-blue-600",
              }),
            ],
          }),
          (0, n.jsxs)("div", {
            className:
              "bg-white rounded-2xl border border-border p-4 flex flex-col items-center gap-2 shadow-sm",
            children: [
              (0, n.jsx)("span", {
                className: "text-sm font-bold text-foreground",
                children: "本次心智博弈评分",
              }),
              (0, n.jsx)("div", {
                className: "flex items-center gap-1 mt-1",
                children: [1, 2, 3, 4, 5].map((e) =>
                  (0, n.jsx)(
                    e0,
                    {
                      size: 24,
                      className: eG(
                        "transition-all",
                        e <= Math.ceil(o / 20)
                          ? "text-amber-400 fill-amber-400 scale-110"
                          : "text-gray-200",
                      ),
                    },
                    e,
                  ),
                ),
              }),
              (0, n.jsx)("p", {
                className:
                  "text-xs text-muted-foreground text-center mt-1 px-2",
                children:
                  o >= 80
                    ? "意志坚定，完美拆解一切套路与陷阱！"
                    : o >= 60
                      ? "略有上头，但在关键时刻守住了底线与框架"
                      : o >= 40
                        ? "深陷推拉，情绪和节奏被对方完全拿捏"
                        : "彻底沦陷，自愿成为了这段关系里的牺牲品",
              }),
            ],
          }),
          (0, n.jsxs)("div", {
            className:
              "bg-white rounded-2xl border border-border p-4 space-y-3 shadow-sm",
            children: [
              (0, n.jsxs)("div", {
                className: "flex items-center gap-1.5 mb-2",
                children: [
                  (0, n.jsx)(S, {
                    size: 15,
                    className: "text-[var(--wechat-green)]",
                  }),
                  (0, n.jsx)("span", {
                    className: "text-sm font-bold text-foreground",
                    children: "本剧本核心心理战术",
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: "space-y-3",
                children: c.map((e) =>
                  (0, n.jsxs)(
                    "div",
                    {
                      className: "border-l-[3px] border-amber-300 pl-3",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "flex items-center gap-1.5",
                          children: [
                            (0, n.jsx)("span", {
                              className: "text-xs font-bold text-foreground",
                              children: e.desc,
                            }),
                            (0, n.jsx)("span", {
                              className:
                                "text-[10px] text-muted-foreground font-mono bg-gray-100 px-1 rounded",
                              children: e.name,
                            }),
                          ],
                        }),
                        (0, n.jsx)("p", {
                          className:
                            "text-[11px] text-muted-foreground mt-1 leading-relaxed",
                          children: e.detail,
                        }),
                      ],
                    },
                    e.name,
                  ),
                ),
              }),
            ],
          }),
          (0, n.jsx)("div", {
            className: "flex flex-col gap-3 pb-6 pt-2",
            children: (0, n.jsxs)("button", {
              onClick: d,
              className:
                "w-full bg-white border border-border text-foreground font-medium py-3 rounded-2xl text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm",
              children: [(0, n.jsx)(e1, { size: 15 }), "返回首页"],
            }),
          }),
        ],
      });
    }
    function e3({ label: e, value: t, unit: s, color: a }) {
      return (0, n.jsxs)("div", {
        className:
          "bg-white rounded-2xl border border-border p-3 flex flex-col items-center gap-1.5 shadow-sm",
        children: [
          (0, n.jsx)("span", {
            className: "text-[11px] text-muted-foreground font-medium",
            children: e,
          }),
          (0, n.jsxs)("div", {
            className: "flex items-baseline gap-0.5",
            children: [
              (0, n.jsx)("span", {
                className: eG(
                  "text-2xl font-black font-mono tracking-tight",
                  a,
                ),
                children: t,
              }),
              (0, n.jsx)("span", {
                className: "text-xs text-muted-foreground font-medium",
                children: s,
              }),
            ],
          }),
        ],
      });
    }

export { C as IntroView, eJ as PlayingView, e5 as EndingView, h as useGameStore };
