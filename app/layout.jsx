export const metadata = {
  title: "聊天模拟器",
  description: "互动式聊天剧情模拟器",
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
