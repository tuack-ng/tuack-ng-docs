---
home: true
icon: home
title: 首页
heroImage: /assets/icon/favicon.svg
heroImageStyle:
  scale: 0.6
# bgImage: 
# bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: Tuack-NG 文档
tagline: 重构后的 tuack 项目，旨在提供更加高效和轻量的出题体验。
actions:
  - text: 使用说明
    icon: lightbulb
    link: ./guide/
    type: primary

  - text: GitHub 仓库
    link: https://github.com/tuack-ng/tuack-ng/

---

欢迎来到 Tuack-NG 的文档。

Tuack-NG 的思想来自于 Tuack 项目。

## 优点

<div class="vp-card-container">
  <VPCard
    title="🚀 速度快"
    desc="使用 Rust 编写，较 Tuack 有极大性能提升，速度极快，平均渲染一套题需要 0.5 秒"
  />
  <VPCard
    title="🪶 轻量级"
    desc="主程序大小仅 4 MB，只依赖 Typst 进行渲染，无须部署庞大的 LaTeX 环境"
  />
</div>

如果您要进一步了解本软件，您可以继续阅读本文档。

## 目录

本文档包含以下部分：

<div class="vp-card-container">
  <VPCard
    title="指南"
    desc="了解 Tuack 的基本使用方法。"
    link="./guide/"
  />
</div>
