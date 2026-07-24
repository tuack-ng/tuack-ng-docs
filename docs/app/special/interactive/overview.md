# 交互题

> Tuack-NG 交互题的配置、测试与数据生成。

## 目录结构

交互题需要将交互库（grader）和头文件放在题目目录下，以下为建议的目录：

```txt
myoi/day1/interactive_problem/
├── interactive/
│   ├── grader.cpp          # 交互库
│   ├── header.h            # 测试用例需要包含的头文件
│   ├── sample_grader.cpp   # 样例数据专用交互库（可选）
│   └── dmk_grader.cpp      # 数据生成专用交互库（可选）
└── ...
```

## 配置

在 `conf.json` 中将 `type` 设为 `"interactive"`，并配置 `interactive` 字段：

```json
{
  "type": "interactive",
  "interactive": {
    "grader": "interactive/grader.cpp",
    "header": "interactive/header.h",
    "sample_grader": "interactive/sample_grader.cpp",
    "dmk_grader": "interactive/dmk_grader.cpp"
  }
}
```

| 字段            | 类型      | 说明                                        |
| --------------- | --------- | ------------------------------------------- |
| `grader`        | `string`  | 交互库路径，用于正式数据测试                |
| `header`        | `string`  | 测试用例需要包含的头文件路径                |
| `sample_grader` | `string?` | 样例数据专用交互库，未设置时回退到 `grader` |
| `dmk_grader`    | `string?` | 数据生成专用交互库，未设置时回退到 `grader` |

## 测试

### 支持的语言

仅 **C++** 编译器支持交互题。在比赛日配置中设置编译选项：

```json
{
  "compile": {
    "cpp": "-O2 -std=c++14"
  }
}
```

### 运行

`tuack-ng test` 会自动检测题目类型，若为交互题则启用交互模式：

- 使用 `tuack-ng test` 测试正式数据时，使用 `grader` 编译
- 使用 `tuack-ng test sample` 测试样例数据时，优先使用 `sample_grader`，未设置时回退到 `grader`

### SPJ

交互题的 SPJ 写法与传统题一致，详见 [SPJ 编写参考](../test/spj)。

## 数据生成

`tuack-ng dmk` 生成数据时，交互库方面优先使用 `dmk_grader`，未设置时回退到 `grader`

由于交互题的标程也需要链接交互库，`dmk_grader` 可以配置为与正式评测不同的版本（如去除反作弊逻辑，方便生成答案）。

### DMK 行为

交互题可能不需要传统意义上的输入/输出文件（数据由交互库直接生成/对错由交互库直接判断），可通过全局 `dmk` 配置控制：

```json
{
  "dmk": "input"
}
```

详见 [生成配置](../dmk/config#dmk)。

## 编写规范

### `grader.cpp`

交互库负责与测试用例程序交互：

- 提供测试用例需要调用的函数/接口
- 处理输入数据（从 stdin 或文件读取）
- 调用测试用例实现的函数
- 检测测试用例输出（可能判定正确性）

### `header.h`

头文件声明测试用例需要实现的函数以及测试用例可以调用的交互库函数：

```cpp
// header.h
// 测试用例需要实现的函数
void solve();

// 交互库提供的函数
int query(int x, int y);
```

### 样例交互库与正式交互库

`sample_grader` 和 `dmk_grader` 提供同一接口但行为不同的实现：

- **正式 grader**：完整的评测逻辑
- **样例 grader**：简化版本，可能缺少反作弊逻辑等，用于下发文件
- **DMK grader**：用于数据生成（比如偏传统型题目的交互题）
