---
title: 测试配置
description: 通过题目的 `conf.json` 配置测试用例和测试行为。
---

## 测试用例

在题目的 `conf.json` 中，通过 `tests` 字段配置待测试的测试用例：

```json
{
  "tests": {
    "std": {
      "expected": "== 100",
      "path": "tests/std.cpp"
    },
    "b-force": {
      "expected": [">= 60", "<= 80"],
      "path": "tests/b.cpp"
    }
  }
}
```

### 字段说明

| 字段       | 类型                   | 说明                                     |
| ---------- | ---------------------- | ---------------------------------------- |
| `键名`     | `string`               | 测试用例名称，任意字符串，不影响实际测试 |
| `expected` | `string` 或 `string[]` | 期望得分表达式，见下方说明               |
| `path`     | `string`               | 程序文件路径，相对题目文件夹             |

如果测试用例较多，可使用 `tuack-ng gen code` 自动检测并写入配置。

## `expected` 表达式

`expected` 是一个**布尔表达式**的右侧部分，左侧为实际得分。支持的语法包括但不限于：

| 表达式   | 含义                |
| -------- | ------------------- |
| `== 100` | 实际得分等于 100    |
| `>= 60`  | 实际得分大于等于 60 |
| `<= 30`  | 实际得分小于等于 30 |

可以传入字符串数组表示多个条件需同时满足：

```json
"expected": [">= 10", "<= 60"]
```

`expected == 100` 的测试用例会被 `tuack-ng dmk` 用作标程（std）来生成答案文件，详见 [造数据](../dmk/overview#工作流程)。

## SPJ

### `checker` 字段

配置 Special Judge，替代默认的全文比较。

```json
{
  "checker": {
    "data": {
      "source": "chk/chk.cpp",
      "deps": ["chk/testlib.h"]
    },
    "sample": {
      "source": "chk/chk.cpp",
      "deps": []
    }
  }
}
```

| 字段             | 类型      | 说明                                           |
| ---------------- | --------- | ---------------------------------------------- |
| `checker.data`   | `object`  | 正式数据的 SPJ 配置                            |
| `checker.sample` | `object?` | 样例数据的 SPJ 配置，为 `null` 时回退到 `data` |

每个配置项包含：

| 字段     | 类型       | 说明                                                       |
| -------- | ---------- | ---------------------------------------------------------- |
| `source` | `string`   | SPJ 源文件路径（相对题目目录）                             |
| `deps`   | `string[]` | 依赖文件列表，显式声明需要参与编译的文件（如 `testlib.h`） |

未配置 `checker` 时使用默认的全文比较（过滤行末空格及文末回车）。SPJ 编写规范详见 [SPJ 编写参考](./spj)。

## 交互题

交互题的配置、测试与数据生成详见 [交互题](../special/interactive/overview)。

## 文件 IO

文件 IO 通过 `file-io` 配置。

`file-io` 可在比赛和比赛日配置，详见 [工程配置文件](../project/config)，未指定时默认值为 `true`。
