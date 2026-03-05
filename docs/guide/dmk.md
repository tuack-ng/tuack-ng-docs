# 造数据

使用 Generator 生成输入数据，并调用标程生成输出数据。

## 命令用法

```txt
生成数据

Usage: tuack-ng dmk [OPTIONS] <TARGET> <ACTION> [OBJECT]

Arguments:
  <TARGET>
          目标类型
          Possible values:
          - data:   正式测试数据
          - sample: 样例数据

  <ACTION>
          命令
          Possible values:
          - gen:   生成（未生成的）数据
          - regen: 重新生成数据（使用相同种子）
          - reset: 重置种子并重新生成数据

  [OBJECT]
          测试点
          [default: all]

选项:
  -v, --verbose...
          详细模式
```

测试点可以使用 `-` 和 `,`，如 `1-2,3,5`。

## 生成器

在 `gen/gen.cpp` 下写生成器。强烈建议使用 Testlib 以获得跨平台一致的随机数和健壮的命令行参数解析。

本文档没有完工，请参考 DeepWiki 来获取进一步用法。
