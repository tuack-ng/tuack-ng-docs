import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Tuack-NG 文档",
  description: "Tuack-NG 的文档",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
