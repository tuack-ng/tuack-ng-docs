# 生成工程

> 生成 Tuack-NG 的三层工程结构，以及自动检测样例、数据与测试用例。

## 命令用法

```txt
生成工程文件夹

Usage: tuack-ng gen [OPTIONS] <COMMAND>

Commands:
  contest  生成竞赛文件夹
  day      生成竞赛日文件夹
  problem  生成题目文件夹
  data     自动检测数据
  samples  自动检测样例
  code     自动检测题解
  all      自动检测所有（data + samples + code）
  lfs      生成 .gitattributes（Git LFS）
  complete 生成补全脚本

Options:
  -v, --verbose...  详细模式
```

Tuack-NG 在执行 `gen` 时会自动修改配置文件中的相应字段（如 `subdir`），保持工程结构的一致性。

## `gen contest`

使用 `tuack-ng gen contest` 以生成竞赛文件夹。

在当前目录下生成一个比赛文件夹，包含 `conf.json` 和 `precaution.md`。

## `gen day`

使用 `tuack-ng gen day` 以生成比赛日文件夹。

在比赛目录下生成比赛日文件夹，自动将目录名加入父级 `conf.json` 的 `subdir`。支持同时生成多个比赛日。

## `gen problem`

使用 `tuack-ng gen problem` 以生成题目文件夹。

在比赛日目录下生成题目文件夹，包含 `conf.json` 和 `statement.md`。支持同时生成多道题。生成的 `conf.json` 包含默认的数据点结构、样例配置和字段占位符，需根据题目实际内容修改。

## `gen data` / `samples` / `code` / `all`

使用 `tuack-ng gen data`、`tuack-ng gen samples`、`tuack-ng gen code` 或 `tuack-ng gen all` 以自动检测文件。

自动检测工程中的已有文件并写入配置文件。

| 子命令    | 检测内容                                   |
| --------- | ------------------------------------------ |
| `data`    | `data/` 目录下的 `.in` / `.ans` 配对文件   |
| `samples` | `sample/` 目录下的 `.in` / `.ans` 配对文件 |
| `code`    | 递归查找源码文件，排除常见非题解目录       |
| `all`     | 依次执行 data、samples、code               |

自动检测使用符合人类直觉的自然排序（`natord`）对文件排序后写入配置。

> [!note] 注意
> `gen code` 会递归查询并排除不应查找的文件夹（如 `data/`、`sample/`、`gen/`、`chk/` 等），只检测常见的题解代码文件。

## `gen lfs`

使用 `tuack-ng gen lfs` 以生成 Git LFS 配置。

为工程下的数据目录生成 `.gitattributes`，配置 Git LFS 跟踪规则。

## `gen complete`

使用 `tuack-ng gen complete` 以生成 Shell 补全脚本。

生成 Shell 补全脚本，一般无需手动执行，包管理器会在安装时自动处理。
