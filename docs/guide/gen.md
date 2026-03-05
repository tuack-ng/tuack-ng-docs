# 生成工程

要想使用 Tuack-NG 管理工程，首先要生成一个工程。

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
  all      自动检测所有

选项:
  -v, --verbose...  详细模式
```

Tuack-NG 在建造工程时，会自动修改配置文件中的相应字段。

实际上，`gen` 能干的事情，已经远不止生成工程文件夹。

> [!note] 注意
> 如果你在找与 “配置文件批量修改” 相关的子命令，请注意 Tuack-NG 已经将其拆分到 `conf`。

## 示例

```bash
# 建造比赛
$ tuack-ng gen contest myoi
$ cd myoi

# 建造比赛日
$ tuack-ng gen day day1
$ cd day1

# 建造题目
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

暂时没有剩余命令的示例，`{data, sample}` 会在题目下同名文件夹里查找成对的输入输出文件，`code` 会递归查询并排除常见的不应查找的文件夹中的文件，并在使用符合人类直觉的比较方式排序后写入配置文件。
