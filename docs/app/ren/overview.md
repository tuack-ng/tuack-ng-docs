# 渲染题面

> 使用 `tuack-ng ren` 将题面渲染为指定格式的 PDF 或 Markdown。

## 命令用法

```txt
渲染题面

Usage: tuack-ng ren [OPTIONS] <TARGET>

Arguments:
  <TARGET>  渲染目标模板

Options:
  -v, --verbose...  详细模式
  -s              不自动打开生成的 PDF
```

本命令可在工程内任意层级执行，会在获取必要比赛（日）配置的同时，仅渲染当前目录下的内容。

## 输出路径

渲染产物输出在工程 `statements/<TARGET>/` 目录下，例如：

```txt
myoi/
└── statements/
    └── noi/
        └── day1.pdf
```

在比赛根目录执行时，将渲染所有比赛日；在比赛日目录执行时，仅渲染该比赛日；以此类推。

## 渲染流程

使用 `tuack-ng ren` 以渲染题面。

1. 读取每道题的 `statement.md`
2. 展开 MiniJinja 模板，MiniJinja 可用语法详见 [MiniJinja 模板](./format/template)
3. 对题面进行解析、修补与转换
4. 编译为最终格式（PDF 或 Markdown）

如果想要了解 Tuack-NG 支持的渲染目标，详见 [渲染目标](./targets)；

如果需要知道如何编写题面，详见 [题面格式](./statement)。
