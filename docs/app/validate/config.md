---
title: 校验配置
description: Validator 的编写与配置。
---

## 位置

Validator 源文件应放在题目目录的 `val/` 文件夹下：

```txt
myoi/day1/aplusb/
├── val/
│   ├── val.cpp        # Validator 源文件
│   └── testlib.h      # Testlib 头文件
└── ...
```

## 配置文件

在题目的 `conf.json` 中，通过 `validator` 字段配置 Validator：

```json
{
  "validator": {
    "data": {
      "source": "val/val.cpp",
      "deps": ["val/testlib.h"]
    },
    "sample": {
      "source": "val/val_sample.cpp",
      "deps": []
    }
  }
}
```

| 字段     | 类型       | 说明                                 |
| -------- | ---------- | ------------------------------------ |
| `source` | `string`   | Validator 源文件路径（相对题目目录） |
| `deps`   | `string[]` | 依赖文件列表                         |

- `validator.data`：正式测试数据的 Validator
- `validator.sample`：样例数据的 Validator（可选），未配置时 `validate sample` 回退使用 `validator.data`

Validator 的编写规范详见 [校验规范](./spec)。
