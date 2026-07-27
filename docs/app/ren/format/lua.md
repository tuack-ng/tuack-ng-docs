---
title: Lua 表格
description: Tuack-NG 支持使用 Lua 脚本在题面中生成 Markdown 表格，适用于动态数据范围表等场景。
---

<!-- markdownlint-disable MD033 -->

## 概述

Lua 脚本放置在题目目录的 `tables/` 文件夹下，通过题面模板中的 <span v-pre>`{{ s.table("filename.lua") }}`</span>（或 <span v-pre>`{{ statement.table("filename.lua") }}`</span>）调用，返回一个 Markdown 表格。

## 调用示例

```txt
myoi/day1/aplusb/
├── conf.json
├── tables/
│   └── data_range.lua
└── statement.md
```

在 `statement.md` 中调用：

```md
{{ s.table("tables/data_range.lua") }}
```

## 使用方法

关于 Lua 语言本身，请自行搜寻教程。

在 Lua 脚本中，你可以通过全局 `tng` 表访问题目配置信息和工具函数。

## 函数与上下文

### `tng.config`

| 字段                      | 类型               | 说明       |
| ------------------------- | ------------------ | ---------- |
| `tng.config.contest`      | `ContestConfig`    | 比赛配置   |
| `tng.config.day`          | `ContestDayConfig` | 比赛日配置 |
| `tng.config.problem`      | `ProblemConfig`    | 题目配置   |
| `tng.config.sample_cases` | `table`            | 样例列表   |
| `tng.config.data_cases`   | `table`            | 数据点列表 |

`contest`、`day` 与 `problem` 的内容应当与配置文件 JSON 中的一致。

`sample_cases` 和 `data_cases` 提供了一个 `:map(func)` 方法，作为函数式编程接口。它接受一个函数作为参数，对列表中的每个元素依次调用该函数，将返回值依次收集为一个新表，与 Rust 中的 `.iter().map(|x| ...).collect()` 类似。

### `tng.tools`

| 函数                    | 说明                                                    |
| ----------------------- | ------------------------------------------------------- |
| `int_lg(num)`           | 整数位数（如 `int_lg(1000)` → `4`）                     |
| `comma(num)`            | 逗号分隔数字                                            |
| `hn(num, style?)`       | 人类可读格式（style: `"x"` 科学计数法，`","` 逗号分隔） |
| `cases(value)`          | 转数字范围为紧凑表示（接受数字、数字表）                |
| `italic(text)`          | `*text*`                                                |
| `bold(text)`            | `**text**`                                              |
| `strikethrough(text)`   | `~~text~~`                                              |
| `inline_code(text)`     | `` `text` ``                                            |
| `link(text, url)`       | `[text](url)`                                           |
| `autolink(url)`         | `<url>`                                                 |
| `inline_latex(formula)` | `$formula$`                                             |

### `tng.table`

这是 Lua 风格表格的**核心方法**，详见下文。

## 表格语法

`tng.table{...}`（Lua 语法糖，等价于 `tng.table({...})`）根据传入的表定义创建一个 Markdown 表格。

它返回一个不透明类型，你的 Lua 脚本必须以它的返回值作为返回值。

```lua
tng.table{
  headers = {"列 1", "列 2", "列 3"},
  align = {"center", "default", "right"},
  data = {
    {"a", "b", "c"},
    {"d", "e", "f"},
  },
  merge_rules = {
    { col = 1, merge_row = true }
  }
}
```

| 字段          | 类型         | 说明                                                                          |
| ------------- | ------------ | ----------------------------------------------------------------------------- |
| `headers`     | `string[]`   | 表头                                                                          |
| `align`       | `string[]`   | 对齐方式：`"default"`、`"center"`、`"left"`、`"right"`，长度需与 headers 一致 |
| `data`        | `string[][]` | 表格数据，每行长度需与 headers 一致                                           |
| `merge_rules` | `table[]?`   | 合并规则，可选，详见下文                                                      |

### 合并

表格中合并可以通过 `^`（向上）与 `<`（向左）。

对于同一列内的合并，Tuack-NG 提供了自动合并的方法。

#### merge_rules

`merge_rules` 用于减少表格中的重复内容，提升可读性。当在某一列启用该选项时，Tuack-NG 会将该列中的相邻相同块自动合并。

每条规则包含：

| 字段        | 类型                   | 说明                                            |
| ----------- | ---------------------- | ----------------------------------------------- |
| `col`       | `number` 或 `number[]` | 要应用合并的列号（1-indexed），可指定单列或多列 |
| `merge_row` | `boolean`              | 是否启用行合并                                  |

#### 手动合并

对于复杂的合并逻辑以及跨列合并，Tuack-NG 允许你自行使用 `^` 与 `<` 指定合并方式。

::: details 为什么不增加自动跨列合并？

考虑以下表格：

| a   | b   |
| --- | --- |
| a   | a   |
| a   | a   |
| a   | b   |

我们无法推测得出，您想要的效果是

| a   | b   |
| --- | --- |
| a   | a   |
| ^   | ^   |
| ^   | b   |

还是

| a   | b   |
| --- | --- |
| a   | <   |
| ^   | <   |
| a   | b   |

因此，我们将决定权交给您，您可以自行编写 Lua 代码实现自定义合并逻辑。

:::

### 示例

从数据点配置动态生成表格：

```lua
-- tables/data.lua
local il = tng.tools.inline_latex
local hn = tng.tools.hn

local special_map = {
    a = "所有边权相等",
    b = "图为一条链",
    c = "图为菊花图",
}

return tng.table {
    headers = { "测试点编号", il("n \\le"), il("k\\le"), "特殊性质" },
    align = { "center", "center", "center", "center" },

    data = tng.config.data_cases:map(function(case)
        local args = case.args
        return {
            tng.tools.cases(case.id),
            il(hn(args.n)),
            il(hn(args.k)),
            special_map[args.special] or "无"
        }
    end),

    merge_rules = {
        { col = { 2, 3, 4 }, merge_row = true }
    }
}
```
