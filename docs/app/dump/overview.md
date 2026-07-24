# 导出

> 将题目导出到评测系统格式。

## 命令用法

```txt
导出题目到评测系统

Usage: tuack-ng dump [OPTIONS] <TARGET>

Arguments:
  <TARGET>
      导出目标
      Possible values:
      - lemon:   导出为 Lemon 格式
      - arbiter: 导出为 Arbiter 格式

Options:
  -v, --verbose...  详细模式
```

本命令**不能在题目目录下执行**，需在比赛日或比赛根目录执行：

| 执行位置   | 行为           |
| ---------- | -------------- |
| 比赛根目录 | 导出所有比赛日 |
| 比赛日目录 | 仅导出该比赛日 |

## 输出目录

导出产物输出在工程 `dump/<TARGET>/` 目录下：

```txt
myoi/
└── dump/
    ├── lemon/
    └── arbiter/
```

具体格式和目录结构见 [导出目标](./targets)。
