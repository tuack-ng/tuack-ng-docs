---
title: 数据生成器规范
description: Tuack-NG 使用 C++ 程序作为数据生成器，驱动测试数据的自动生成。
---

## 生成器位置

使用 `tuack-ng dmk` 以调用生成器生成数据。

推荐按照以下方式在题目目录中组织生成器：

```txt
myoi/day1/aplusb/
├── conf.json
├── gen/
│   ├── gen.cpp        # 数据生成器
│   └── gen_sample.cpp # 样例数据生成器
└── ...
```

## 配置文件

在题目的 `conf.json` 中，通过 `generator` 字段配置生成器：

```json
{
  "generator": {
    "data": {
      "gen": "gen/gen.cpp",
      "deps": ["gen/testlib.h"]
    },
    "sample": {
      "gen": "gen/gen_sample.cpp",
      "deps": []
    }
  }
}
```

- `generator.data`：正式测试数据的生成器配置
- `generator.sample`：样例数据的生成器配置（可选）

如果 `generator.sample` 未配置，`dmk sample` 会回退使用 `generator.data`

| 字段       | 类型       | 说明                                               |
| ---------- | ---------- | -------------------------------------------------- |
| `gen`      | `string`   | 生成器源文件路径（相对题目目录）                   |
| `deps`     | `string[]` | 依赖文件列表，当这些文件发生变化时会重新编译生成器 |
| `validate` | `boolean?` | 生成输入后是否用 Validator 校验，默认 `false`，详见 [校验配置](../validate/config) |

## 输入校验

如果配置了 Validator（见 [校验配置](../validate/config)），可以在生成输入后自动校验其合法性。

通过 `generator.data.validate`（或 `generator.sample.validate`）开启：

```json
{
  "generator": {
    "data": {
      "gen": "gen/gen.cpp",
      "deps": [],
      "validate": true
    }
  }
}
```

校验失败时，该数据点的输入会标记为 `FAIL`。

也可以在命令行临时覆盖：`tuack-ng dmk data gen --validate` 强制开启，`--validate=false` 强制关闭。

## 编写规范

### 使用 Testlib

强烈建议使用 [Testlib](https://github.com/MikeMirzayanov/testlib) 编写生成器，以获得跨平台一致的随机数和健壮的命令行参数解析。

```cpp
#include "testlib.h"

int main(int argc, char* argv[]) {
  registerGen(argc, argv, 1);         // 注册生成器

  rnd.setSeed(opt<uint64_t>("seed")); // 设置随机数种子
  int n = opt<int>("n");              // 读取命名参数
  int m = rnd.next(1, 1000);          // 生成随机数

  // ...
  return 0;
}
```

### 参数传递

生成器参数可以通过 `conf.json` 中数据点的 `args` 字段配置，见 [配置](./config)

Tuack-NG 会将 `args` 中的键值对作为 `--key=value` 命令行参数传递给生成器。同时，**Tuack-NG 会传入 `--seed=<一个 64 位无符号整数>`，你必须使用它作为生成器的随机数种子**。

### 编译参数

生成器使用 `-O2 -std=c++17` 编译参数进行编译，目前你无法自行修改。

## 示例

```cpp
// gen/gen.cpp
#include "testlib.h"
#include <iostream>

int main(int argc, char* argv[]) {
  registerGen(argc, argv, 1);

  int n = opt<int>("n");
  int q = opt<int>("q");

  std::cout << n << " " << q << "\n";
  for (int i = 0; i < n; i++) {
    std::cout << rnd.next(1, 1000000000) << " \n"[i == n - 1];
  }
  // ...
  return 0;
}
```
