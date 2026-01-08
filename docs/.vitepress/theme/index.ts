// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import { useData, useRoute } from 'vitepress'
import { toRefs, watch } from 'vue'
import './color.scss'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // 添加 Tabs 支持
    enhanceAppWithTabs(ctx.app)
    // 调用默认主题的增强
    DefaultTheme.enhanceApp?.(ctx)
  },
  setup() {
    // 获取数据和路由
    const { frontmatter } = toRefs(useData())
    const route = useRoute()

    // 配置 Giscus 评论系统
    giscusTalk(
      {
        repo: 'tuack-ng/tuack-ng-docs',
        repoId: 'R_kgDOQqSNeg',
        category: 'Announcements',
        categoryId: 'DIC_kwDOQqSNes4C0Rv7',
        mapping: 'pathname',
        inputPosition: 'top',
        lang: 'zh-CN',
        lightTheme: 'light',
        darkTheme: 'transparent_dark',
      },
      {
        frontmatter,
        route,
      },
      true // 是否启用评论
    )
  },
} satisfies Theme