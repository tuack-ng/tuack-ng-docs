---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Tuack-NG"
  text: "新一代出题工具"
  tagline: 重构后的 tuack 项目，旨在提供更加高效和轻量的出题体验。
  image:
    dark: "/icon-white.svg"
    light: "/icon-black.svg"
    alt: Tuack-NG Logo
  actions:
    - theme: brand
      text: 快速开始
      link: ./app/quickstart
      icon: rocket
    - theme: alt
      text: 参考文档
      link: ./app/install
      icon: lightbulb

features:
  - title: 🚀 速度快
    details: 使用 Rust 编写，较 Tuack 有极大性能提升，速度极快
  - title: 🪶 轻量级
    details: 主程序大小仅 10 MB，只依赖 Typst 进行渲染，无须部署庞大的 LaTeX 环境
  - title: 📚 文档齐全
    details: 提供完整的指南和文档，帮助您快速上手使用
---

<!-- markdownlint-disable MD041 -->

欢迎来到 Tuack-NG 的文档。

## Tuack-NG 是什么？

Tuack-NG（`Tuack New Generation`）是一套辅助 OI/ICPC 出题的工具包，旨在帮助出题人以更加便携的方式协作出题。

它涵盖了以下方面：

- 生成题面 PDF / Markdown
- 编写测试用例进行测试
- 使用 Std 和数据生成器生成数据
- 导出工程到 OJ 或评测机

同时，它也是 [Tuack](https://gitee.com/mulab/oi_tools/) 的精神继承者。

欢迎为这个项目提交贡献。

## 快速上手

如果您之前没有接触过 Tuack-NG，推荐从 [快速开始](./app/quickstart) 开始，以图形界面为主线走完「建工程 → 写题面 → 出 PDF」的完整流程，并同步了解对应的命令行与配置节点。

如果您有基于 Tuack 的比赛工程，您可以参阅 [从 Tuack 迁移](./app/special/migrate-tuack/overview) 进行迁移。

如果您想要 LLM 为您通过 Tuack-NG 辅助题目命制等工作，您可以向 LLM 提供 [llms.txt](./llms.txt) 与 [llms-full.txt](./llms-full.txt)。
