# 渲染工程

渲染工程文件夹下内容到指定目标，目前有 NOI、CCPC 和 Markdown 目标。

## 命令用法

```txt
渲染题面

Usage: tuack-ng ren [OPTIONS] <TARGET>

Arguments:
  <TARGET>  渲染目标模板

Options:
      --keep-tmp  保留临时目录用于调试

选项:
  -v, --verbose...  详细模式
```

## 示例

关于生成工程文件夹，请查看 [上一节](./gen.md)

```bash
# 这是我们上一节生成的工程
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
# 渲染 NOI 格式
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
    └── noi # 渲染结果
        └── 场次名称.pdf

6 directories, 8 files
```

该命令可以在任何工程下的目录被调用，只会渲染当前目录下内容，会自动获取比赛信息，而非 Tuack 的占位符。
