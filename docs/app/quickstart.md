---
title: 快速开始
description: 使用 Tuack-GUI 完成第一次使用 Tuack-NG 的出题流程，并同步了解对应的命令行与配置节点。
---

Tuack-NG 本体是命令行工具（CLI），[Tuack-GUI](https://github.com/tuack-ng/Tuack-GUI) 是它的图形化页面。为了简化从下载到渲染出 PDF 的过程，本教程将主要介绍 **Tuack-GUI**，每一步末尾都会同步给出等价的**命令行**和**配置文件节点**，方便你在图形界面与 `conf.json` 之间建立对应关系。

如果你只想用命令行，可以先按 [安装](./install) 装好 CLI，再跟随本文每一步的「命令行」小节操作。

## 安装

### 图形界面（推荐）

从 [Tuack-GUI 的 Releases 页面](https://github.com/tuack-ng/Tuack-GUI/releases) 下载对应平台的安装包并安装即可。Tuack-GUI 已内置 Tuack-NG 本体、全部资源以及 Typst，**开箱即用——无需单独安装命令行工具，也无需安装 Typst，可直接渲染 PDF**。如果你是 Arch Linux 用户，也可以从 AUR 下载。

> 提示：如果希望 GUI 调用你自己安装的 Tuack-NG，可在右上角「设置」中切换外部可执行文件路径。

### 命令行

- 安装 Tuack-NG：见 [安装](./install)。
- 渲染 PDF（`noi` / `ccpc` 目标）需自行安装 [Typst](https://typst.app/) 并加入 `PATH`；只渲染 Markdown（`loj` / `uoj` / `markdown`）则无需外部依赖。详见 [渲染目标](./ren/targets)。

## 第 1 步：新建工程（比赛）

在 Tuack-GUI 中点击工具栏「新建工程」，填写「工程名」（如 `noip2026`）与「父目录」，点击「创建」。创建成功后 GUI 会自动打开这个工程。

![新建工程](/images/quickstart/new_project.png)

> - **等价命令**：在父目录下执行 `tuack-ng gen contest noip2026`
> - **配置节点**：生成 `conf.json`，其中 `name` 对应工程名，`title` / `short title` 对应「标题 / 副标题」。完整字段见 [工程配置文件](./project/config)。

新建后，工程根目录包含 `conf.json` 与 `precaution.md`（注意事项，渲染 PDF 时可能作为注意信息显示）。

## 第 2 步：新建场次（比赛日）

在左侧「工程」树中，移动光标至比赛节点上，点击行尾出现的「+」按钮，填写场次名（可一次多个，用空格分隔，如 `day1 day2`）。

![新建场次](/images/quickstart/new_day.png)

> - **等价命令**：进入比赛目录后执行 `tuack-ng gen day day1`
> - **配置节点**：`gen` 会自动把场次目录名写入上层 `conf.json` 的 `subdir`；场次自身的 `conf.json` 含 `name`、`title`、`start time`、`end time`、`compile` 等。完整字段见 [工程配置文件](./project/config)。

## 第 3 步：新建题目

把鼠标移到场次节点上，点击「+」，填写题目名（如 `aplusb`，可一次多个）。

> - **等价命令**：进入场次目录后执行 `tuack-ng gen problem aplusb`
> - **配置节点**：生成题目 `conf.json`（含 `type`、`time limit`、`memory limit`、`samples`、`data`、`subtasks` 等占位字段）与 `statement.md`（题面模板）。

至此工程结构如下（与 [工程结构](./project/overview) 一致）：

```txt
noip2026/
├── conf.json
├── precaution.md
└── day1/
    ├── conf.json
    └── aplusb/
        ├── conf.json
        └── statement.md
```

## 第 4 步：编辑题目配置

在左侧选中题目节点，右侧「配置」标签页提供表单，可直接填写「名称 / 标题 / 类型 / 时间限制 / 内存限制 / 数据生成」；「高级 JSON」标签页可直接编辑完整 `conf.json`；「测试点」标签页编辑 `data` / `subtasks`。

表单与 JSON 是同一个文件 `conf.json` 的两种视图，改动在点击**「保存」**后写回文件。

![编辑配置](/images/quickstart/configure_day.png)

> **配置节点**（即表单字段对应的 `conf.json` 键）：
>
> - `name` / `title`：英文名 / 题目标题
> - `type`：`program`（传统题）/ `interactive`（交互题）/ `output`（提交答案题）
> - `time limit`：时限（秒，浮点数）
> - `memory limit`：内存限制（如 `"512 MiB"`）
> - `dmk`：数据生成行为，`skip` / `input` / `output` / `on`
>
> 完整字段说明见 [工程配置文件](./project/config)；`data` / `samples` / `subtasks` 的细节见 [数据点配置](./project/data/configure)。

## 第 5 步：编写题面

选中题目节点，切到「编辑」标签页，直接在 `statement.md` 编辑器中书写题面（Markdown），按 Ctrl/Cmd+S 保存。「保存后自动渲染」默认开启，保存后右侧「预览」会自动刷新。

以下是一个 A + B Problem 的题面示例：

````md
## 题目描述

输入两个整数 $a, b$，输出它们的和。

## 输入格式

一行两个整数 $a, b$。

## 输出格式

一个整数。

## 样例 1 输入

```txt
114 514
```

## 样例 1 输出

```txt
628
```

## 数据范围

$|a|, |b| \le 10^9$。
````

> - **等价命令**：用任意文本编辑器直接打开 `day1/aplusb/statement.md` 编辑。
> - **配置节点**：题面本身不是 JSON 配置，而是遵循固定标题结构的 Markdown 文件（`## 题目描述` / `## 输入格式` / `## 输出格式` / `## 样例 …` / `## 数据范围`）。支持的语法与模板函数见 [题面格式](./ren/statement)。

![编写题面示例](/images/quickstart/write_example.png)

## 第 6 步：渲染出第一个 PDF

右侧「预览」面板会按默认模板（默认 `noi`）渲染当前题目；也可以点「预览」里的「渲染」按钮手动触发，或在工具栏「运行命令」→「渲染」分组里显式选择模板。

> - **等价命令**：在比赛 / 场次 / 题目目录下均可执行 `tuack-ng ren noi`，产物写入 `statements/noi/`；加 `-s` 可禁止自动打开 PDF。
> - **依赖**：图形界面内置 Typst，直接渲染即可；命令行路线的 `noi` / `ccpc` 需要系统安装 Typst，`markdown` / `loj` / `uoj` 无需外部依赖。

恭喜，你已经用 Tuack-NG 生成了第一份题面。模板选择、输出路径与层级行为详见 [渲染题面](./ren/overview) 与 [渲染目标](./ren/targets)。

## 下一步

- 造数据：[数据生成](./dmk/overview)，自动生成样例与正式数据
- 测题解：[测试](./test/overview)，运行标程并核对预期分数
- 校验输入：[校验](./validate/overview)
- 导出评测机：[导出](./dump/overview)
- 交互题：[交互题](./special/interactive/overview)
- 从旧 Tuack 迁移：[从 Tuack 迁移](./special/migrate-tuack/overview)
