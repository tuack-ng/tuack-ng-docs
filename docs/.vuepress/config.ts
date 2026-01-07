import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Tuack-NG 文档",
  description: "Tuack-NG 的文档",

  head: [
  ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/assets/icon/favicon-96x96.png' }],
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/assets/icon/favicon.svg' }],
  ['link', { rel: 'shortcut icon', href: '/assets/icon/favicon.ico' }],
  ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/icon/apple-touch-icon.png' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'Tuack-NG' }],
  ['link', { rel: 'manifest', href: '/assets/icon/site.webmanifest' }],
],

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
