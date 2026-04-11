# 样例

## 外置样例

如果我们想生成样例，或者多次修改，就必须同时修改题面中的样例，下发文件中的样例，等等。

这是一个非常麻烦的事情，并且~~稍有不慎你的背上就会多一口锅~~。

因此，Tuack-NG 支持外置样例。

现在，我们来修改先前的题面至外置样例。

我们修改前文的题面：

````md
...
## 输出格式

一个整数。

## 样例 1 输入 // [!code --:12]

```txt
114 514
```

## 样例 1 输出

```txt
628
```

// [!code ++:1]
{{ sample.text(1) }}

## 样例 1 解释
...
````

同时，建立 `myoi/day1/aplusb/sample` 文件夹。

在 `myoi/day1/aplusb/sample/1.in` 中写入：

```txt
114 514
```

在 `myoi/day1/aplusb/sample/1.ans` 中写入：

```txt
628
```

修改 `myoi/day1/aplusb/conf.json`：

```json
{
  "version": 3,
  "folder": "problem",
  "type": "program",
  "name": "aplusb",
  "title": "题目名称",
  "time limit": 1.0,
  "memory limit": "512 MiB",
  "partial score": false,
  "args": {},
  "samples": [
    {
      "id": 1,
      "input": "a.in", // [!code --:2]
      "output": "a.ans"
      "input": "1.in", // [!code ++:2]
      "output": "1.ans"
    }
  ],
  "data": [
    {
      "id": 1,
      "score": 5,
      "input": "1.in",
      "output": "1.ans",
      "subtask": 0,
      "args": {},
      "manual": false
    },
    {
      "id": [
        2,
        3
      ],
      "score": 5,
      "subtask": 0,
      "args": {}
    }
  ],
  "subtasks": {
    "0": "sum"
  },
  "tests": {},
  "use-chk": false
}
```

重新运行 `tuack-ng ren noi`，你会发现它和之前的效果一模一样。

## 下发样例

在出题时，很可能需要造大样例。但是显然，你不能将大样例内嵌到题目中。

> [!info] 后果
>
> ~~Typst 编译卡死~~

因此，Tuack-NG 提供了 <span v-pre>`{{ sample.file() }}`</span> 函数，它的详细信息见 [题面格式 - 函数](../guide/statement.html#%E5%87%BD%E6%95%B0)

---

## 🎉 阶段性学习完成

恭喜你，已经掌握了使用 Tuack-NG 生成题面的全过程！🎉

如果你只想把 Tuack-NG 当作题面生成工具，那这篇教程已经结束了。

但是，我们强烈建议学习 Tuack-NG 的其他用途，它们可以大大增强出题体验。
