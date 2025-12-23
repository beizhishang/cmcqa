import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/cmcqa/",

  lang: "zh-CN",
  title: "文档演示",
  description: "vuepress-theme-hope 的文档演示",

  // 统一从 theme.ts 加载完整主题配置（含 navbar/sidebar 等）
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});