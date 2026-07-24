# MiniJinja 模板
<!-- markdownlint-disable MD028 MD033 -->

> Tuack-NG 支持的模板语法一览。

题面文件（`statement.md`）使用 MiniJinja 作为模板引擎，可以在题面中动态访问题目、比赛日和比赛的配置数据。

> [!note] 提示
> 下文中的 <span v-pre>`{{ }}`</span> 是 MiniJinja 的表达式语法。更多语法详见 [MiniJinja 文档](https://docs.rs/minijinja/latest/minijinja/syntax/index.html)。
>
> `problem` 的数据结构可在 <https://github.com/tuack-ng/tuack-ng/blob/master/src/config/problem.rs> 查看，同时我们提供了 [JSON Schema](https://gist.github.com/Pulsar33550336/ece6e5f24a760be04b3fb5c7b9b6fe16)（由 DeepSeek 编写，可能不准确）。

## 上下文

| 变量           | 说明                 |
| -------------- | -------------------- |
| `problem`      | 当前渲染的题目配置   |
| `day`          | 当前渲染的比赛日配置 |
| `contest`      | 当前渲染的比赛配置   |
| `data_cases`   | 数据点列表           |
| `sample_cases` | 样例列表             |

调用 `problem` 有两种等效的格式：

```md
{{ problem.a.b }}
{{ problem["a"]["b"] }}
```

当属性名带有空格时（如 `"time limit"`），只能使用方括号语法：

```md
{{ problem["time limit"] }}
```

## 函数

### sample

用于在题面中嵌入样例。

| 函数                          | 说明                                                                 |
| ----------------------------- | -------------------------------------------------------------------- |
| `sample.text(sample_id: u32)` | 将指定 ID 的样例以标题 + 代码块的形式嵌入题面。适合简短的样例。      |
| `sample.file(sample_id: u32)` | 在题面中加入文本，提示测试用例查看下发文件中对应的样例。适合大样例。 |

`简短` 的意思是短而小，不是让你放一个虽然很小但是三页纸长的样例进去。

`sample.text()` 会在题面中生成以下内容：

````md
## 样例 N 输入

```txt
(文件内容)
```

## 样例 N 输出

```txt
(文件内容)
```
````

`sample.file()` 会生成一段提示文本，格式为：

```md
见测试用例目录下的 _{problem.name}/{problem.name}{sample_id}.in_ 与 _{problem.name}/{problem.name}{sample_id}.ans_。
```

### tools

提供数字格式化工具。

| 函数                              | 说明                                                                                                                                     |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `tools.hn(num: f64, style?: str)` | 将数字转换到适合人类阅读的形式，输出 LaTeX 格式但不带 `$$`。`style` 可选：`"x"` 科学计数法、`","` 逗号分隔。未指定时自动选择最紧凑的格式 |
| `tools.comma(num: i64)`           | 将整数转换为逗号分隔形式                                                                                                                 |
| `tools.cases(cases_vec)`          | 将数字范围转换为紧凑的表示形式，自带 `$$`。如 `cases([1,2,3,5,7,8,9])` 会转换为 `$1 \sim 3, 5, 7 \sim 9$`。接受单个数字或数字列表        |

示例：

```md
时间限制：$${{ tools.hn(problem["time limit"]) }}$$ 秒
对于数据点 {{ tools.cases(data_cases[1].case) }}：……
```

### statement

别名 `s`，提供输入输出格式辅助。

| 函数                      | 说明                                          |
| ------------------------- | --------------------------------------------- |
| `statement.input_file()`  | 输出一段文本，要求测试用例从指定位置读入      |
| `statement.output_file()` | 输出一段文本，要求测试用例输出到指定位置      |
| `statement.table(path)`   | 调用 Lua 脚本渲染表格，详见 [Lua 表格](./lua) |

`input_file()` 与 `output_file()` 的输出取决于题目是否配置了文件 IO：

- 文件 IO 时：`从文件 _{name}.in_ 中读入数据。` / `输出到文件 _{name}.out_ 中。`
- 标准 IO 时：`从标准输入读入数据。` / `输出到标准输出。`

## 过滤器

MiniJinja 支持过滤器语法，例如：

```md
{{ problem.data | length }}
```

在此示例中，我们使用了 `problem.data`，因为我们需要获取确凿（去捆绑）的数据点数量。如果你需要获取原始配置中的数据点（包括分组等），请使用 `problem.orig_data` 或者 `data_cases`，后者是前者的简写版本。

## 示例

### 输出时间限制

```md
{{ problem["time limit"] }}
```

### 输出测试点数目

```md
{{ problem.data | length }}
```

### 输出样例 1

```md
{{ sample.text(1) }}
```
