# 批量修改配置

批量修改配置文件的某一项。

## 命令用法

```txt
批量修改配置文件

Usage: tuack-ng conf <COMMAND>

Commands:
  title   设置标题
  time    设置时间限制
  length  设置比赛长度
  conf    设置任意字段

选项:
  -v, --verbose...  详细模式
```

`time` 只能在比赛日级目录调用，`length` 只能在比赛级目录调用。

`conf` 的值必须符合配置文件的类型规范，否则会拒绝修改。
