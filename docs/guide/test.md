# 测试题目

使用配置文件里的选手文件进行测试，支持使用文件输入输出或者标准输入输出，使用 SPJ（必须是 Testlib 格式）

> [!caution] 警告
> **强烈建议不要**将 Tuack-NG 作为评测机，Tuack-NG 的测试功能仅用于在出题期间测试标程和各种解法是否达到预期分数，因此没有反作弊与安全限制机制，因此贸然使用可能轻则直接放过作弊者，~~重则被 `rm -rf /`~~。

## 命令用法

该命令支持在工程内任何层级下执行，只会对当前目录下的题目进行测试。

```txt
使用题解代码测试

Usage: tuack-ng test

选项:
  -v, --verbose...  详细模式
```

## 配置文件

要配置选手程序，需要在题目层级的配置文件下新增或修改 `tests` 字段，示例如下：

```json
"tests": {
    "tests/b.cpp": { // 选手名称，可以是任何名称，不影响实际效果
        "expected": [">= 10", "<= 60"], // 期望分数，可以是字符串数组或单个字符串，描述预期得分。应当是表达式的右侧
        "path": "tests/b.cpp" // 相对于题目文件夹
    },
    "std": {
        "expected": "== 100",
        "path": "tests/std.cpp"
    }
},
"use-chk": false // 是否使用 SPJ，如果使用，必须放到 data/chk/chk.cpp 下。
```

如果有大量文件，不方便手动录入，可以使用 `gen code`。

## 测评

测评结果包括：AC, CE, RE, TLE, MLE, PC, WA, UKE。

Tuack-NG（应该）支持跨平台的时间、空间检测，会在 TLE/MLE 时终止程序并记录结果。

<!-- > [!caution] 注意
> Tuack-NG 使用**轮询**检测这两个值，这可能会对程序运行效率造成微小的差异。 （May Fixed）-->

Tuack-NG 会将每道题的测评结果以 CSV 格式写入题目文件夹下的 `result.csv`。

## SPJ

如果要使用 Special Judge(SPJ)，请打开 `use-chk`，并将SPJ放到 `data/chk/chk.cpp` 下。

SPJ 必须使用 [Testlib Checker](https://oi-wiki.org/tools/testlib/checker/) 编写，因为 Tuack-NG 使用了 Testlib 的导出 XML 结果文件功能。

SPJ 可以照常编写，Tuack-NG 兼容 `quitf+_pc(score)` 和 `quitp(score)` 两种部分分表示方式，应当返回一个 0 到 100 之间的数字，将会映射到当前测试点分值后四舍五入到整数。

如果返回 `_fail`，Tuack-NG 会发出警告。
