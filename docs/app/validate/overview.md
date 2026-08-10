---
title: 校验
description: 使用 Validator 校验题目的输入数据是否合法。
---

## 命令用法

```txt
校验输入数据

Usage: tuack-ng validate [OPTIONS] [TARGET] [OBJECT]

Arguments:
  [TARGET]
      目标类型
      Possible values:
      - data:   正式测试数据
      - sample: 样例数据
      [default: data]

  [OBJECT]
      校验对象，使用 `,` 和 `-` 分割 (如 1,2-3,4-10)
      [default: all]

Options:
  -v, --verbose...  详细模式
```

本命令可从**题目**、**场次**、**竞赛**三个层级调用，自动递归处理该层级下的所有题目。

### OBJECT 选择器

支持逗号和范围语法，例如 `1-2,3,5` 表示测试点 1、2、3、5。

`all` 表示全部测试点，未指定时默认为 `all`。

## 目标

| TARGET   | 说明                            |
| -------- | ------------------------------- |
| `data`   | 正式测试数据，对应 `data/` 目录 |
| `sample` | 样例数据，对应 `sample/` 目录   |

## 结果

每个测试点的输入会交给 Validator 校验：

- `OK`：输入合法
- `FAIL`：输入不合法，并显示 Validator 输出的原因

Validator 的编写与配置详见 [配置](./config)。

## 相关页面

- [配置](./config) — `validator` 字段配置
- [校验规范](./spec) — Validator 的编写规范
- [数据生成 - 输入校验](../dmk/overview#输入校验) — 生成输入后自动校验，使用 `generator.validate` 配置，并可通过 `--validate` 参数临时覆盖
