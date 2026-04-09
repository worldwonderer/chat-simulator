"use client";

import * as n from "react/jsx-runtime";

export default function RecoveredPhoneShell({ children }) {
  return n.jsxs("div", {
    className: "flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-4",
    children: [
      n.jsxs("div", {
        className: "relative",
        children: [
          n.jsxs("div", {
            className: "phone-screen relative bg-black rounded-[42px] p-[10px] shadow-2xl",
            children: [
              n.jsx("div", { className: "absolute right-[-3px] top-28 w-[3px] h-14 bg-gray-600 rounded-r-sm" }),
              n.jsx("div", { className: "absolute left-[-3px] top-24 w-[3px] h-10 bg-gray-600 rounded-l-sm" }),
              n.jsx("div", { className: "absolute left-[-3px] top-36 w-[3px] h-10 bg-gray-600 rounded-l-sm" }),
              n.jsxs("div", {
                className: "relative bg-[var(--wechat-bg)] rounded-[34px] overflow-hidden w-[375px] h-[750px] md:w-[390px] md:h-[780px]",
                children: [
                  n.jsxs("div", {
                    className: "absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-50 flex items-center justify-center gap-2",
                    children: [
                      n.jsx("div", { className: "w-2 h-2 rounded-full bg-gray-800" }),
                      n.jsx("div", { className: "w-4 h-1.5 rounded-full bg-gray-800" }),
                    ],
                  }),
                  n.jsx("div", { className: "absolute inset-0 pt-7 flex flex-col", children }),
                ],
              }),
            ],
          }),
          n.jsx("div", {
            className: "flex justify-center mt-4",
            children: n.jsx("div", { className: "w-24 h-1 bg-white/20 rounded-full" }),
          }),
          n.jsx("div", {
            className: "hidden lg:block absolute bottom-6 left-0 right-0 text-center",
            children: n.jsx("p", { className: "text-white/30 text-xs", children: "仅供娱乐" }),
          }),
        ],
      }),
    ],
  });
}
