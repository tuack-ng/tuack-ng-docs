---
title: 数据点配置
description: 关于 Tuack-NG 中数据点、样例、子任务及相关功能的配置。
---

要使用 Tuack-NG 的测试、生成数据等功能，必须先配置数据点。支持自动搜索和手动配置两种方式，两者互补。

## 自动搜索

```bash
# 自动搜索样例
tuack-ng gen samples
# 自动搜索正式数据
tuack-ng gen data
# 自动搜索所有（样例 + 正式数据 + 测试代码）
tuack-ng gen all
```

> [!important] 注意
> 上述命令会将对应配置**覆盖**且不可恢复，建议在执行前进行备份。

自动搜索的详细行为见 [生成工程 - gen data / samples / code / all](../../gen/overview#gen-data--samples--code--all)。

## 手动配置

数据点通过题目 `conf.json` 中的以下三个字段配置：

```json
{
  "samples": [ /* ... */ ],
  "data": [ /* ... */ ],
  "subtasks": { /* ... */ }
}
```

## 样例数据点

`samples` 数组中的每个元素定义一个样例：

```json
{
  "id": 1,
  "input": "1.in",
  "output": "1.ans",
  "dmk": "skip",
  "args": {}
}
```

| 字段     | 类型      | 说明                                                         |
| -------- | --------- | ------------------------------------------------------------ |
| `id`     | `integer` | 样例编号，一般从 1 开始                                      |
| `input`  | `string?` | 输入文件名（相对于 `sample/` 目录）。未设置时默认 `{id}.in`  |
| `output` | `string?` | 输出文件名（相对于 `sample/` 目录）。未设置时默认 `{id}.ans` |
| `dmk`    | `string?` | 数据生成行为，详见 [生成配置](../../dmk/config#dmk)          |
| `args`   | `object?` | 生成器参数，详见 [生成配置](../../dmk/config#args)           |

样例在题面中的显示方式见 [题面格式 - sample](../../ren/statement#sample)。

## 正式数据点

`data` 数组中的每个元素定义一个正式数据点或数据点组。

### 单个数据点

```json
{
  "id": 1,
  "score": 5,
  "input": "1.in",
  "output": "1.ans",
  "subtask": 0,
  "args": {},
  "dmk": "on"
}
```

| 字段      | 类型      | 说明                                                       |
| --------- | --------- | ---------------------------------------------------------- |
| `id`      | `integer` | 测试点编号                                                 |
| `score`   | `integer` | 测试点分值                                                 |
| `subtask` | `integer` | 所属子任务编号，默认 `0`                                   |
| `input`   | `string?` | 输入文件名（相对于 `data/` 目录）。未设置时默认 `{id}.in`  |
| `output`  | `string?` | 输出文件名（相对于 `data/` 目录）。未设置时默认 `{id}.ans` |
| `args`    | `object?` | 生成器参数，详见 [生成配置](../../dmk/config#args)         |
| `dmk`     | `string?` | 数据生成行为，详见 [生成配置](../../dmk/config#dmk)        |

### 数据点组

当多个测试点共享相同配置时，可用数组形式合并：

```json
{
  "id": [2, 3, 4, 5],
  "score": 5,
  "subtask": 0,
  "args": {}
}
```

| 字段      | 类型        | 说明                           |
| --------- | ----------- | ------------------------------ |
| `id`      | `integer[]` | 测试点编号列表                 |
| `score`   | `integer`   | **每个**测试点的分值（非总分） |
| `subtask` | `integer`   | 所属子任务编号                 |

> [!note]
> 数据点组不可设置 `input` 和 `output` 字段，文件名默认使用 `{id}.in` / `{id}.ans`。

## 子任务

`subtasks` 字段使用键值对配置评分策略：

```json
{
  "0": "sum",
  "1": "min",
  "2": "max"
}
```

| 值    | 说明                                                                                      |
| ----- | ----------------------------------------------------------------------------------------- |
| `sum` | 子任务总分为各测试点分数之和。最常用的评分方式                                            |
| `min` | 子任务总分为各测试点分数的最小值。适用于**捆绑测试/打包评测**：一个点错则整个子任务不得分 |
| `max` | 子任务总分为各测试点分数的最大值。较少使用                                                |

## 相关章节

- [生成配置](../../dmk/config) — 数据生成行为与参数
- [数据生成器规范](../../dmk/generator) — 生成器编写、依赖管理
- [测试配置](../../test/config) — 测试用例程序、expected 表达式
- [SPJ 编写参考](../../test/spj) — Special Judge 编写规范
- [题面格式 - sample](../../ren/statement#sample) — 样例在题面中的显示方式
- [Lua 表格](../../ren/format/lua) — Lua 表格生成
