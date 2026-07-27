---
title: 导出目标
description: Tuack-NG 支持的导出目标以及各自的局限性。
---

<!-- markdownlint-disable MD024 -->

## Lemon

使用 `tuack-ng dump lemon` 以导出为 Lemon 格式。

Lemon 是一个常用的 OI 桌面评测软件。导出为 Lemon 可识别的格式。

### 输出结构

```txt
dump/lemon/
└── data/
    ├── aplusb/
    │   ├── aplusb1.in
    │   ├── aplusb1.ans
    │   ├── aplusb2.in
    │   ├── aplusb2.ans
    │   └── ...
    └── ...
```

### 限制

- 数据点：`sum` 会将每个测试点独立列出，`min` 会将测试点捆绑，不支持 `max` 策略
- 交互题：不支持交互题
- SPJ：你可能需要使用 Lemon 专属 testlib。
- 编译选项：默认设为 `"default"`，需手动调整为实际值
- 编译器映射：`cpp → g++`、`c → gcc`、`pas → fpc`、`py → python`、`java → javac`，其他不支持

## Arbiter

使用 `tuack-ng dump arbiter` 以导出为 Arbiter 格式。

Arbiter 是 NOI 系列赛事使用的评测系统。

### 输出结构

```txt
dump/arbiter/
└── main/
    ├── setup.cfg
    ├── team.info
    ├── day<N>.info
    ├── task<N>_<M>.info
    ├── data/          # 评测数据
    ├── evaldata/      # 评测数据副本
    ├── final/         # 最终结果
    ├── players/       # 测试用例程序
    ├── result/        # 测评结果
    ├── filter/        # SPJ 过滤器
    ├── tmp/           # 临时文件
    └── down/          # 样例下发文件
```

### 限制

- 数据点：不支持 `min`，`max` 策略
- SPJ：Arbiter 使用特殊的 SPJ 风格，不支持 Testlib

## 样例 (arbiter_down)

Arbiter 导出时会将样例文件单独复制到 `down/` 目录供测试用例下发：

```txt
dump/arbiter/
└── down/
    └── <比赛日名>/
        ├── <题目名>/
        │   ├── <题目名>1.in
        │   ├── <题目名>1.ans
        │   └── ...
        └── ...
```

样例按 `samples` 配置中的顺序编号，同时会复制 `down/` 目录下未在 samples 中配置的额外文件。
