---
title: 生成数据
description: 调用生成器生成输入数据，并调用标程生成输出数据。
---

## 命令用法

```txt
生成数据

Usage: tuack-ng dmk [OPTIONS] <TARGET> <ACTION> [OBJECT]

Arguments:
  <TARGET>
      目标类型
      Possible values:
      - data:   正式测试数据
      - sample: 样例数据

  <ACTION>
      命令
      Possible values:
      - gen:   生成（未生成的）数据
      - regen: 重新生成数据（使用相同种子）
      - reset: 重置种子并重新生成数据

  [OBJECT]
      测试点选择
      [default: all]

Options:
  -v, --verbose...  详细模式
```

本命令**只能在题目目录下执行**。

### OBJECT 选择器

支持逗号和范围语法，例如 `1-2,3,5` 表示测试点 1、2、3、5。

同时，`all` 表示全部测试点。

如果没有指定这个参数，则默认为 `all`。

---

## 目标与动作

使用 `tuack-ng dmk` 以生成数据。

### `data` / `sample`

| TARGET   | 说明                            |
| -------- | ------------------------------- |
| `data`   | 正式测试数据，对应 `data/` 目录 |
| `sample` | 样例数据，对应 `sample/` 目录   |

### `gen` / `regen` / `reset`

| ACTION  | 说明                                     |
| ------- | ---------------------------------------- |
| `gen`   | 仅生成尚未生成的数据点（已有数据的跳过） |
| `regen` | 使用相同的种子重新生成所有数据点         |
| `reset` | 重置种子并重新生成所有数据点             |

三种动作对种子和数据的影响详见 [随机种子](./seed)。

## 工作流程

1. 将数据生成器（C++）编译成可执行文件 & 将标程编译成可执行文件
2. 运行生成器产生 `.in` 文件
3. 运行标程读取 `.in` 并产生 `.ans` 文件

标程的选取规则为：在 `tests` 配置中寻找第一个 `expected == 100` 的测试用例，详见 [expected 表达式](../test/config#expected-表达式)。

进度条指示各阶段的执行状态，状态标签包括 `GEN`（绿色）、`REGEN`（绿色加粗）、`RESET`（青色加粗）、`SKIP`、`EMPTY`（品红色加粗）、`FAIL`（红色加粗）。

`dmk` 与 `args` 等配置字段详见 [生成配置](./config)。
