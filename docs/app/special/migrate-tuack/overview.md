---
title: 从 Tuack 迁移
description: 将你的工程从 Tuack 迁移到 Tuack-NG。
---

## 摘要

我们提供了 [Tuack Migrater](https://github.com/tuack-ng/Tuack-Migrater) 来辅助您进行迁移。

但是**迁移过程并非完全自动化**，您需要手动执行一些操作。

## 已知限制

- Tuack-NG 暂不支持多语言题面，迁移时会要求您指定一门语言进行迁移。
- Tuack-NG 暂不支持 Pretest（预测试）。
- Tuack-NG 的外置表格，外置样例，题面格式，数据生成器的语法均与 Tuack 不同，您需要自行重写，或者使用 LLM 等方式辅助重写。

## 步骤

### 安装迁移工具

从 PyPI 安装 Tuack Migrater：（截止本次提交时尚未上传）

```shell
pip install tuack-migrater
```

### 开始自动迁移

将工作目录切换到 Tuack 工程的根目录，执行：

```shell
python3 -m tuack-migrater <你希望迁移后的新工程目录>
```

在迁移过程中，您可能需要回答一些问题，并且本工具会做出提醒您在迁移后对部分内容进行手动适配，详见下文。

迁移后的新工程将会保存在 `<你希望迁移后的新工程目录>` 下。

### 迁移后操作

#### 配置交互题

你可能会想将交互题纳入 Tuack-NG 的工程管理。

迁移脚本带有自动查找交互库的逻辑，如果没有成功检测，请参见 [交互题](../interactive/overview) 手动配置。

#### 迁移 SPJ

Tuack-NG 的 SPJ 必须使用 Testlib 书写，参见 [SPJ 编写参考](../../test/spj.md)。

#### 迁移数据生成器

如果你使用了基于 Testlib 的数据生成器，你可能只需要少许操作便可以将其适配 Tuack-NG。

如果你使用了 Tuack 基于 Python 的数据生成器，你需要将其完整重写到 C++。

参见 [数据生成器规范](../../dmk/generator)。

#### 迁移题面内容

Tuack-NG 使用的 MiniJinja 本质上与 Tuack 的 Jinja 来自同一作者，因此语法类似，但是 Tuack-NG 对可调用的 API 做了较大更变。

迁移脚本已经对于力所能及的进行了迁移，并将不支持内容进行了注释。您仍需要自行复查。

另外，Tuack-NG 使用的 Markdown 格式相比 Tuack 有所拓展。

参见 [题面格式](../../ren/statement)。

#### 迁移外置表格

Tuack-NG 使用 Lua 作为外置表格，且不支持 Tuack 的格式，因此您必须重写。

详见 [Lua 表格](../../ren/format/lua)。
