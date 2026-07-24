# 工程配置文件

> 关于 Tuack-NG 三层工程的配置文件。

## 比赛配置文件

```json
{
  "version": 7,
  "folder": "contest",
  "name": "myoi",
  "subdir": [],
  "title": "试题标题",
  "short title": "试题副标题"
}
```

| 字段名        | 值类型     | 描述                                                          |
| ------------- | ---------- | ------------------------------------------------------------- |
| `version`     | `integer`  | 配置文件版本                                                  |
| `folder`      | `string`   | 工程层级标识，比赛配置文件必须为 `contest`                    |
| `name`        | `string`   | 比赛的英文名称（仅 Tuack-NG 使用，不会体现在渲染/导出产物中） |
| `subdir`      | `string[]` | 比赛子目录（比赛日）名称列表，将会按照列表顺序组织比赛日      |
| `title`       | `string`   | 比赛标题                                                      |
| `short title` | `string`   | 比赛副标题                                                    |
| `use-pretest` | `boolean?` | 是否启用预测试点（目前没有用途）                              |
| `noi-style`   | `boolean?` | 是否启用 NOI 风格，详见 [渲染目标](../ren/targets)            |
| `file-io`     | `boolean?` | 是否启用文件 IO                                               |

其中 `use-pretest`，`noi-style`，`file-io` 会向下继承，并且如果未指定，则会在渲染/测试/导出时，使用模板默认值。

## 比赛日配置文件

```json
{
  "version": 7,
  "folder": "day",
  "name": "day1",
  "subdir": [],
  "title": "场次标题",
  "compile": {
    "cpp": "-O2 -std=c++14 -static"
  },
  "start time": [
    1970,
    1,
    1,
    0,
    0,
    0
  ],
  "end time": [
    1970,
    1,
    1,
    0,
    0,
    0
  ]
}
```

| 字段名        | 值类型             | 描述                                                            |
| ------------- | ------------------ | --------------------------------------------------------------- |
| `version`     | `integer`          | 配置文件版本                                                    |
| `folder`      | `string`           | 工程层级标识，比赛日配置文件必须为 `day`                        |
| `name`        | `string`           | 比赛日的英文名称（仅 Tuack-NG 使用，不会体现在渲染/导出产物中） |
| `subdir`      | `string[]`         | 比赛子目录（题目）名称列表，将会按照列表顺序组织题目            |
| `title`       | `string`           | 场次标题                                                        |
| `compile`     | `{string: string}` | 某种语言的编译选项，键应为这门语言的文件名后缀                  |
| `start time`  | `integer[6]?`      | 比赛的开始时间，格式为 `[年, 月, 日, 时, 分, 秒]`               |
| `end time`    | `integer[6]?`      | 比赛的结束时间，格式为 `[年, 月, 日, 时, 分, 秒]`               |
| `use-pretest` | `boolean?`         | 是否启用预测试点（目前没有用途）                                |
| `noi-style`   | `boolean?`         | 是否启用 NOI 风格，详见 [渲染目标](../ren/targets)              |
| `file-io`     | `boolean?`         | 是否启用文件 IO                                                 |

其中：

- `start time` 和 `end time` 可以不指定，如果不指定，渲染产物中将不显示时间。
- `compile`，目前可以给 `cpp`，`c`，`rs`（Rust），`py`（Python），`java` 设置编译选项，并且理论上可以自行扩充。
- `use-pretest`，`noi-style`，`file-io` 会向下继承，并且如果未指定，则会在渲染/测试/导出时，使用模板默认值。

## 题目配置文件

```json
{
  "version": 7,
  "folder": "problem",
  "type": "program",
  "name": "aplusb",
  "title": "题目名称",
  "time limit": 1.0,
  "memory limit": "512 MiB",
  // ...
}
```

| 字段名         | 值类型     | 描述                                                                            |
| -------------- | ---------- | ------------------------------------------------------------------------------- |
| `version`      | `integer`  | 配置文件版本                                                                    |
| `folder`       | `string`   | 工程层级标识，题目配置文件必须为 `problem`                                      |
| `name`         | `string`   | 题目的英文名称（仅 Tuack-NG 使用，不会体现在渲染/导出产物中）                   |
| `title`        | `string`   | 题目标题                                                                        |
| `type`         | `string`   | 题目类型：`program`（传统型）、`interactive`（交互型）或 `output`（提交答案型） |
| `time limit`   | `number`   | 时间限制，单位为秒                                                              |
| `memory limit` | `string`   | 空间限制，支持 SI 或 IEC 标准，详见 [ByteSize](https://github.com/bytesize-rs/) |
| `samples`      | `object[]` | 样例数据点列表，详见 [数据点配置](./data/configure#样例数据点)                  |
| `data`         | `object[]` | 正式数据点列表，详见 [数据点配置](./data/configure#正式数据点)                  |
| `subtasks`     | `object`   | 子任务评分策略，详见 [数据点配置](./data/configure#子任务)                      |
| `dmk`          | `string`   | 数据生成行为默认值，详见 [生成配置](../dmk/config#dmk)                          |
| `args`         | `object?`  | 数据生成器全局参数，详见 [生成配置](../dmk/config#args)                         |
| `generator`    | `object?`  | 数据生成器配置，详见 [数据生成器规范](../dmk/generator)                         |
| `checker`      | `object?`  | SPJ 配置，详见 [SPJ 编写参考](../test/spj)                                      |
| `tests`        | `object?`  | 测试用例程序配置，详见 [测试配置](../test/config)                               |
| `interactive`  | `object?`  | 交互题配置，详见 [交互题](../special/interactive/overview)                      |

### 相关章节

- [数据与测试用例](./data/overview) — 测试用例、数据与标准程序的基本概念
- [数据点配置](./data/configure) — 数据点、样例、子任务的完整配置参考
- [造数据](../dmk/overview) — 使用生成器和标程自动生成数据
- [数据生成器规范](../dmk/generator) — 生成器编写、参数传递、依赖管理
- [测试题目](../test/overview) — 运行测试并验证预期分数
- [测试配置](../test/config) — 测试用例程序、expected 表达式、SPJ 配置
- [SPJ 编写参考](../test/spj) — Special Judge 编写规范
- [题面格式](../ren/statement) — MiniJinja 模板、sample/tools 函数
- [渲染目标](../ren/targets) — 支持的渲染格式及依赖
