# 文档检查

> 对题面进行质量检查和格式化。

## 命令用法

```txt
文档检查工具

Usage: tuack-ng doc <SUBCOMMAND>

Subcommands:
  format    格式化题面文档
  check     检查题面文档问题
  validate  查看配置文件加载信息

Options:
  -v, --verbose...  详细模式
```

本命令可在工程内任意层级执行，作用于当前目录下的所有题目。

### `--explain`

`check` 和 `format` 子命令支持 `--explain <RULE>` 参数，用于查看指定规则的详细说明：

```bash
tuack-ng doc check --explain latex
```

## 子命令

| 子命令                 | 功能                                         |
| ---------------------- | -------------------------------------------- |
| [check-format](./check-format) | 检查题面文档问题，部分规则可自动修复 |
| [validate](./validate) | 显示配置文件加载时的所有警告、错误和提示信息 |
| [format](./check-format) | `check-format` 部分规则可自动修正文档 |
