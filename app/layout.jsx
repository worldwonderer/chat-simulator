const DEFAULT_PUBLIC_URL = "https://chat.vibecoco.ai";

function readMetadataBaseUrl() {
  const configuredUrl = typeof process.env.APP_PUBLIC_URL === "string" ? process.env.APP_PUBLIC_URL.trim() : "";

  try {
    return new URL(configuredUrl || DEFAULT_PUBLIC_URL);
  } catch {
    return new URL(DEFAULT_PUBLIC_URL);
  }
}

export const metadata = {
  metadataBase: readMetadataBaseUrl(),
  title: "聊天模拟器",
  description: "互动式聊天剧情模拟器",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "聊天模拟器",
    description: "互动式聊天剧情模拟器",
    url: "https://chat.vibecoco.ai/",
    siteName: "聊天模拟器",
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preload" href="/static-assets/media/797e433ab948586e-s.p.0.q-h669a_dqa.woff2" as="font" crossOrigin="" type="font/woff2" />
        <link rel="preload" href="/static-assets/media/caa3a2e1cccd8315-s.p.16t1db8_9y2o~.woff2" as="font" crossOrigin="" type="font/woff2" />
        <link rel="stylesheet" href="/static-assets/chunks/0x.pxwmy6tt~x.css" />
        <link rel="stylesheet" href="/static-assets/chunks/0h7l~nyi9rz9m.css" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
