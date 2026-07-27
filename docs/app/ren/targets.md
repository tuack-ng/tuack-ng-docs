---
title: 渲染目标
description: Tuack-NG 目前支持五种渲染目标。
---

## 目标列表

| 目标       | 说明              | 输出格式               |
| ---------- | ----------------- | ---------------------- |
| `noi`      | NOI 风格 PDF      | Typst → PDF            |
| `ccpc`     | CCPC 风格 PDF     | Typst → PDF            |
| `loj`      | LOJ 风格 Markdown | Markdown（含额外修补） |
| `uoj`      | UOJ 风格 Markdown | Markdown（含额外修补） |
| `markdown` | 普通 Markdown     | Markdown               |

LOJ 和 UOJ 目标在标准 Markdown 基础上做了额外语法修补，以兼容对应平台的题面格式。

## 依赖

- `noi`、`ccpc` 目标需要系统安装 `typst` 命令行工具，并添加到 `PATH` 环境变量
- `loj`、`uoj`、`markdown` 目标无需外部依赖

## 额外信息

- `loj` 修补了表格，以确保自动合并可以在 LOJ 中正确工作。
- `uoj` 将所有标题等级顺延一级，并将表格转换为 HTML 表格。
