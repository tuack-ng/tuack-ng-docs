---
title: SPJ 编写参考
description: Special Judge（SPJ）用于评测答案不唯一的题目，Tuack-NG 采用 Testlib 格式的 SPJ。
---

## 要求

SPJ 必须使用 [Testlib Checker](https://oi-wiki.org/tools/testlib/checker/) 编写，因为 Tuack-NG 依赖 Testlib 导出的 XML 结果文件。

关于如何使用 Testlib，请参见上述链接。

## 位置

SPJ 源文件应放在题目目录的 `chk/` 文件夹下：

```txt
myoi/day1/aplusb/
├── chk/
│   ├── chk.cpp        # SPJ 源文件
│   └── testlib.h      # Testlib 头文件
└── ...
```

## 部分分

Tuack-NG 支持两种部分分表示方式，返回值应为 0 到 100 之间的数字，映射到当前测试点分值后四舍五入到整数：

```cpp
quitf(_pc(score), "获得 %d 分", score);
quitp(score, "获得 %.2f 分", score);
```

### `_pc(score)`

`_pc(score)` 直接指定一个 0–100 的整数得分：

```cpp
if (score >= 50)
  quitf(_pc(100), "全部正确");
else
  quitf(_pc(score * 2), "部分正确");
```

### `quitp(score)`

`quitp(score)` 接受浮点数作为得分比例（0–100）：

```cpp
double score = 100.0 * correct / total;
quitp(score, "正确率 %.2f%%", score);
```

## 编译

Tuack-NG 使用以下命令编译 SPJ，你无法自行修改：

```bash
g++ -O2 -std=c++23 -o <output> <source>
```

## 示例

```cpp
// chk/chk.cpp
#include "testlib.h"

int main(int argc, char* argv[]) {
  registerTestlibCmd(argc, argv);

  int n = inf.readInt();
  int juryAns = ans.readInt();
  int partAns = ouf.readInt();

  if (juryAns != partAns)
    quitf(_wa, "期望 %d，实际 %d", juryAns, partAns);

  double score = 100.0;
  quitp(score, "答案正确");
}
```
