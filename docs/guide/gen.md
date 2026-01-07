---
title: 生成工程
icon: lightbulb
order: 2
---

要想使用 Tuack-NG 管理工程，首先要生成一个工程。

## 命令用法

```txt
生成工程文件夹

Usage: tuack-ng gen [OPTIONS] <TARGET> <NAME>...

Arguments:
  <TARGET>   生成的对象 [possible values: contest, day, problem]
  <NAME>...  对象名称

选项:
  -v, --verbose...  详细模式
  -h, --help        打印帮助信息（使用 '-h' 查看摘要）
  -V, --version     打印版本信息
```

## 示例

```bash
$ tuack-ng gen contest myoi
$ cd myoi
$ tuack-ng gen day day1
$ cd day1
$ tuack-ng gen problem a b
$ cd ../..
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

```
