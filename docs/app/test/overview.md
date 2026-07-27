---
title: 测试题目
description: 使用 `tuack-ng test` 测试测试用例程序，验证标程和各种解法是否达到预期分数。
---

<!-- markdownlint-disable MD028 -->

> [!caution] 警告
> **强烈建议不要**将 Tuack-NG 作为评测机使用。Tuack-NG 的测试功能仅用于出题期间验证程序行为，没有反作弊与安全限制机制。

## 命令用法

```txt
使用题解代码测试

Usage: tuack-ng test [TARGET]

Arguments:
  [TARGET]
          目标类型

          Possible values:
          - data:   正式测试数据
          - sample: 样例数据

          [default: data]
```

本命令可在工程内任意层级执行，仅对当前目录层级下存在的题目进行测试。

## 测评结果

| 结果 | 含义                                    |
| ---- | --------------------------------------- |
| AC   | 答案正确（Accepted）                    |
| WA   | 答案错误（Wrong Answer）                |
| TLE  | 超时（Time Limit Exceeded）             |
| MLE  | 超内存（Memory Limit Exceeded）         |
| RE   | 运行时错误（Runtime Error）             |
| CE   | 编译错误（Compile Error）               |
| PC   | 部分正确（Partial Credit，由 SPJ 返回） |
| UKE  | 未知错误（Unknown Error）               |

Tuack-NG 支持跨平台的时间和空间检测，会在 TLE/MLE 时终止程序并记录结果。

## 测评输出

每道题的测评结果会打印到标准输出，同时会以 CSV 格式写入题目文件夹下：

- `result.csv`：正式数据测试结果
- `result-sample.csv`：样例数据测试结果

如需查看详细的每题得分和预期比对，请配置 `tests` 字段中的 `expected` 表达式，详见 [测试配置](./config)。
