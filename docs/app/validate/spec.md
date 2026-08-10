---
title: 校验规范
description: Validator 的编写规范。
---

## 要求

Validator 从标准输入读取输入数据，校验通过时返回 0，否则返回非 0 并以标准错误输出原因。

最常见的是使用 [Testlib Validator](https://oi-wiki.org/tools/testlib/validator/) 编写：

```cpp
#include "testlib.h"

int main(int argc, char* argv[]) {
  registerValidation(argc, argv);

  int n = inf.readInt(1, 100000, "n");
  inf.readEoln();
  inf.readEof();
  return 0;
}
```

## 示例

```cpp
// val/val.cpp
#include "testlib.h"

int main(int argc, char* argv[]) {
  registerValidation(argc, argv);

  int n = inf.readInt(1, 100000, "n");
  inf.readEoln();
  for (int i = 0; i < n; i++) {
    inf.readInt(1, 1000000000, "a_i");
    if (i + 1 < n) inf.readSpace();
    else inf.readEoln();
  }
  inf.readEof();
  return 0;
}
```
