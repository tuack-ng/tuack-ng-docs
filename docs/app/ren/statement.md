---
title: 题面格式
description: 关于 Tuack-NG 的题面格式参考。
---

<!-- markdownlint-disable MD033 -->

## Markdown 语法

支持的语法范围详见 [题面语法](./format/syntax)，包括标题、段落、代码块、引用、列表、链接与图片、表格（含单元格合并）、LaTeX 公式等。

## MiniJinja 模板

题面文件（`statement.md`）使用 MiniJinja 作为模板引擎，支持在题面中动态访问题目配置数据和调用函数。详见 [MiniJinja 模板](./format/template)。

## Lua 表格

Lua 表格用于解决 MiniJinja 在生成高复杂度表格时语法复杂，难以调试的问题。详见 [Lua 表格](./format/lua)。
