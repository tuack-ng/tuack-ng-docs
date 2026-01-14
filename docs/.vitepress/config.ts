import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

const guideItems = [
  { text: '安装', link: '/guide/install' },
  { text: '生成工程', link: '/guide/gen' },
  { text: '渲染工程', link: '/guide/ren' },
  { text: '题面格式', link: '/guide/statement' },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Tuack-NG 文档",
  description: "Tuack-NG 的文档",
  appearance: true,
  lastUpdated: true,
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    },
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/assets/icon/favicon-96x96.png' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/assets/icon/favicon.svg' }],
    ['link', { rel: 'shortcut icon', href: '/assets/icon/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/icon/apple-touch-icon.png' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Tuack-NG' }],
    ['link', { rel: 'manifest', href: '/assets/icon/site.webmanifest' }],
  ],
  themeConfig: {
    i18nRouting: false,

    logo: {
      dark: '/icon-white.svg',
      light: '/icon-black.svg',
    },

    nav: [
      {
        text: '使用指南',
        items: guideItems
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '使用指南',
          collapsed: false,
          items: guideItems
        }
      ]
    },
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/tuack-ng/tuack-ng-docs' }],

    footer: {
      copyright: 'Copyright © 2025-2026 Pulsar33550336 | Licensed under CC-BY 4.0'
    },

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    editLink: {
      pattern: 'https://github.com/tuack-ng/tuack-ng-docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    }
  }
})
