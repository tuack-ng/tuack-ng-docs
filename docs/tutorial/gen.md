# 生成工程

在这一节中，你将会学会使用 Tuack-NG 新建 **比赛 - 比赛日 - 题目** 的三层工程结构。

## 工程结构

首先，让我们来了解 Tuack-NG 的工程结构。

### 比赛

这是整个工程的**根目录**，代表着整个比赛（比如 NOIP 2025），其下包括三个组成部分：

- `conf.json`：工程的配置文件。
- `precaution.md`：如果使用了渲染 PDF 功能，此文件的内容将可能被作为注意信息显示。
- 文件夹：**比赛日**的文件夹，包含各个比赛日。

### 比赛日

这是工程的**第二层级**，代表着整个比赛日（比如省选的 Day1, Day2）。当然，如果只有一天，只建立一个比赛日也可以。其下包括两个组成部分：

- `conf.json`：比赛日的配置文件。
- 文件夹：**题目**的文件夹，包含各个题目。

### 题目

这是工程的**第三层级**，代表着比赛题（比如 NOIP 2025 的糖果店(candy)）。当然，如果只有一天，只建立一个文件夹也可以。其下包括多个组成部分：

- `conf.json`：题目的配置文件。
- `statement.md`：这道题的题面。
- `data`：这道题的数据。
- `sample`：这道题的样例。
- `tests`：这个文件夹不是必须的，但我们建议将所有测试用例放到这里。
- `gen`：这道题的数据生成器。

## 实践

现在，我们来生成一个工程。

请你在某个地方打开终端，保证 `tuack-ng` 可用。

### 生成比赛

现在，我们来生成比赛。

我们假设你的比赛名字是 `myoi`，使用 Bash Shell。CMD / PowerShell 请自行转换命令。

```bash
$ tuack-ng gen contest myoi
$ cd myoi
myoi/ $ ls
conf.json  precaution.md
```

现在，你的 `conf.json` 应该长这样：

```json
{
  "version": 3,
  "folder": "contest",
  "name": "myoi",
  "subdir": [],
  "title": "试题标题",
  "short title": "试题副标题"
}
```

请你修改 `title` 和 `short title` 到你想要的名字，例如 “CCF 全国青少年信息学奥林匹克联赛”与“CCF NOIP 2025”。

你的 `precaution.md` 已经有了 CCF 官方赛事的标准注意事项：

```md
**注意事项（请仔细阅读）**

1. 文件名（程序名和输入输出文件名）必须使用英文小写。
2. `main` 函数的返回值类型必须是 `int`，程序正常结束时的返回值必须是 0。
3. 提交的程序代码文件的放置位置请参考各省的具体要求。
4. 因违反以上三点而出现的错误或问题，申诉时一律不予受理。
5. 若无特殊说明，结果的比较方式为全文比较（过滤行末空格及文末回车）。
6. 选手提交的程序源文件必须不大于 100KB。
7. 程序可使用的栈空间内存限制与题目的内存限制一致。
8. 全国统一评测时采用的机器配置为：Intel(R) Core(TM) i7-8700K CPU @3.70GHz，内存 32GB。上述时限以此配置为准。
9. 只提供 Linux 格式附加样例文件。
10. 评测在当前最新公布的 NOI Linux 下进行，各语言的编译器版本以此为准。
```

你可以自行修改。

### 生成比赛日

现在，我们来生成比赛日。

在这个教程中，我们将只生成比赛日 `day1`，但是如果你想要生成多个比赛日，只需重复以下内容。

```bash
myoi/ $ tuack-ng gen day day1
myoi/ $ cd day1
myoi/day1/ $ ls
conf.json
```

现在，你的 `day1/conf.json` 应该长这样：

```json
{
  "version": 3,
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

同时，你的 `conf.json` 也被自动修改了：

```json
{
  "version": 3,
  "folder": "contest",
  "name": "myoi",
  "subdir": [
    "day1" // 注意这里被自动添加了
  ],
  "title": "CCF 全国青少年信息学奥林匹克联赛",
  "short title": "CCF NOIP 2025"
}
```

请你修改 `title`，`compile`，`start time`，`end time` 到你想要的值。

下面是这些值的详细解释：

- `title`：场次标题。如果你不需要它（比如比赛只有一天），请将它留空，即 `"title": ""`。
- `compile`：编译选项。目前可以给 `cpp`，`c`，`rs`（Rust），`py`（Python），`java` 设置编译选项，且理论上你可以自行补充。
- `start time` 和 `end time`：开始时间和结束时间。都是六元组 `[年, 月, 日, 时, 分, 秒]`。

### 生成题目

现在，我们来生成题目。

一场比赛一般会有不止一道题，但我们在这里为了简便，只生成一道题 `aplusb`。和比赛日类似，如果想生成多道题目，只需重复以下步骤。

```bash
myoi/day1/ $ tuack-ng gen problem aplusb
myoi/day1/ $ cd aplusb
myoi/day1/aplusb/ $ ls
conf.json statement.md
```

现在，你的 `day1/aplusb/conf.json` 应该长这样：

```json
{
  "version": 3,
  "folder": "problem",
  "type": "program",
  "name": "aplusb",
  "title": "题目名称",
  "time limit": 1.0,
  "memory limit": "512 MiB",
  "partial score": false,
  "args": {},
  "samples": [
    {
      "id": 1,
      "input": "a.in",
      "output": "a.ans"
    }
  ],
  "data": [
    {
      "id": 1,
      "score": 5,
      "input": "1.in",
      "output": "1.ans",
      "subtask": 0,
      "args": {},
      "manual": false
    },
    {
      "id": [
        2,
        3
      ],
      "score": 5,
      "subtask": 0,
      "args": {}
    }
  ],
  "subtasks": {
    "0": "sum"
  },
  "tests": {},
  "use-chk": false
}
```

请你修改 `title` 到你想要的值，比如 `A + B Problem`。

对于题目配置文件中剩下的字段，我们将在后面的讲解中逐渐涉及他们。

---

现在，让我们看看项目的整体结构：

```ansi
[01;34mmyoi[0m
├── conf.json
├── [01;34mday1[0m
│   ├── [01;34maplusb[0m
│   │   ├── conf.json
│   │   └── statement.md
│   └── conf.json
└── precaution.md

3 directories, 5 files
```

现在，让我们进入下一节，了解如何生成你的第一个 PDF。
