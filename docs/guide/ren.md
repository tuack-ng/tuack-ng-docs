---
title: 渲染工程
icon: lightbulb
---

渲染工程文件夹下内容到指定目标，目前只有 NOI 目标。

## 命令用法

```txt
渲染题面

Usage: tuack-ng ren [OPTIONS] <TARGET>

Arguments:
  <TARGET>  渲染目标模板

Options:
  -d, --day <DAY>  要渲染的天的名称（可选，如果不指定则渲染所有天）
      --keep-tmp   保留临时目录用于调试

选项:
  -v, --verbose...  详细模式
  -h, --help        打印帮助信息（使用 '-h' 查看摘要）
  -V, --version     打印版本信息
```

## 示例

关于生成工程文件夹，请查看 [上一节](./gen.md)

```bash
$ tree myoi               
myoi
├── conf.json
├── day1
│   ├── a
│   │   ├── conf.json
│   │   └── statement.md
│   ├── b
│   │   ├── conf.json
│   │   └── statement.md
│   └── conf.json
└── precaution.md

4 directories, 7 files

$ cd myoi
$ tuack-ng ren noi
$ cd ..
$ tree myoi
myoi
├── conf.json
├── day1
│   ├── a
│   │   ├── conf.json
│   │   └── statement.md
│   ├── b
│   │   ├── conf.json
│   │   └── statement.md
│   └── conf.json
├── precaution.md
└── statements
    └── 场次名称
        └── 场次名称.pdf

6 directories, 8 files
```
