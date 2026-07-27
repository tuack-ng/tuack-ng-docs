import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { withMermaid } from 'vitepress-plugin-mermaid'
import llmstxt from 'vitepress-plugin-llms'

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    lang: 'zh-CN',
    title: "Tuack-NG 文档",
    description: "Tuack-NG 的文档",
    appearance: true,
    lastUpdated: true,
    vite: {
      plugins: [llmstxt()],
    },
    markdown: {
      config(md) {
        md.use(tabsMarkdownPlugin)
        md.core.ruler.before('block', 'inject_frontmatter', (state) => {
          const fm = state.env.frontmatter
          if (!fm) return

          let inject = ''
          if (fm.title) {
            inject += `# ${fm.title}\n\n`
          }
          if (fm.description) {
            inject += `> ${fm.description}\n\n`
          }

          if (inject) {
            state.src = inject + state.src
          }
        })
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
        { text: '参考文档', link: '/app/install' },
      ],
      sidebar: {
        '/': [
          {
            text: '安装',
            link: '/app/install'
          },
          {
            text: '工程结构',
            collapsed: false,
            items: [
              { text: '概述', link: '/app/project/overview' },
              { text: '工程配置文件', link: '/app/project/config' },
              { text: '比赛注意事项', link: '/app/project/precaution' },
              {
                text: '数据',
                collapsed: false,
                items: [
                  { text: '概述', link: '/app/project/data/overview' },
                  { text: '数据点配置', link: '/app/project/data/configure' },
                ]
              },
            ]
          },
          {
            text: '生成',
            collapsed: false,
            items: [
              { text: '概述', link: '/app/gen/overview' },
            ]
          },
          {
            text: '渲染题面',
            collapsed: false,
            items: [
              { text: '概述', link: '/app/ren/overview' },
              { text: '渲染目标', link: '/app/ren/targets' },
              {
                text: '题面格式',
                collapsed: false,
                items: [
                  { text: '题面语法', link: '/app/ren/format/syntax' },
                  { text: 'MiniJinja 模板', link: '/app/ren/format/template' },
                  { text: 'Lua 表格', link: '/app/ren/format/lua' },
                ]
              },
            ]
          },
          {
            text: '测试',
            collapsed: false,
            items: [
              { text: '概述', link: '/app/test/overview' },
              { text: '测试配置', link: '/app/test/config' },
              { text: 'SPJ 编写参考', link: '/app/test/spj' },
            ]
          },
          {
            text: '数据生成',
            collapsed: false,
            items: [
              { text: '概述', link: '/app/dmk/overview' },
              { text: '数据生成配置', link: '/app/dmk/config' },
              { text: '随机种子', link: '/app/dmk/seed' },
              { text: '数据生成器规范', link: '/app/dmk/generator' },
            ]
          },
          {
            text: '导出',
            collapsed: false,
            items: [
              { text: '概述', link: '/app/dump/overview' },
              { text: '导出目标', link: '/app/dump/targets' },
            ]
          },
          {
            text: '文档检查',
            collapsed: false,
            items: [
              { text: '概述', link: '/app/doc/overview' },
              { text: '检查规则', link: '/app/doc/check-format' },
              { text: '配置验证', link: '/app/doc/validate' },
            ]
          },
          {
            text: '专题',
            collapsed: false,
            items: [
              { text: '交互题', link: '/app/special/interactive/overview' },
              { text: '从 Tuack 迁移', link: '/app/special/migrate-tuack/overview' },
            ]
          },
        ],
      },
      /* 右侧大纲配置 */
      outline: {
        level: 'deep',
        label: '本页目录'
      },

      socialLinks: [{ icon: 'github', link: 'https://github.com/tuack-ng/tuack-ng' }],

      footer: {
        copyright: 'Copyright © 2025-2026 <a href="https://github.com/tuack-ng">Tuack-NG Develop Team</a> | Licensed under CC-BY 4.0'
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
)