"use client";

export default function PhoneShell({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-4">
      <div className="relative">
        <div className="phone-screen relative bg-black rounded-[42px] p-[10px] shadow-2xl">
          <div className="absolute right-[-3px] top-28 w-[3px] h-14 bg-gray-600 rounded-r-sm" />
          <div className="absolute left-[-3px] top-24 w-[3px] h-10 bg-gray-600 rounded-l-sm" />
          <div className="absolute left-[-3px] top-36 w-[3px] h-10 bg-gray-600 rounded-l-sm" />

          <div
            className="relative bg-[var(--wechat-bg)] rounded-[34px] overflow-hidden w-[375px] h-[750px] md:w-[390px] md:h-[780px]"
            style={{
              maxWidth: "calc(100vw - 64px)",
              maxHeight: "calc(100svh - 64px)",
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-50 flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-800" />
              <div className="w-4 h-1.5 rounded-full bg-gray-800" />
            </div>

            <div className="absolute inset-0 pt-7 flex flex-col">{children}</div>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <div className="w-24 h-1 bg-white/20 rounded-full" />
        </div>

        <div className="hidden lg:block absolute bottom-6 left-0 right-0 text-center">
          <p className="text-white/30 text-xs">仅供娱乐</p>
        </div>
      </div>
    </div>
  );
}
