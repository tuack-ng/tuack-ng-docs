<!-- markdownlint-disable MD033 -->

# 题面格式

本项目**完全兼容** CommonMark 规范，并且实现了 CNOI 的 Markdown 超集，详见 <https://cnoi.mrpython.top/> 的 SupportGrammer。

本项目使用了 MiniJinja 作为模板的解析器，并且上下文中包括了指向当前渲染题目等信息的配置文件数据结构，这意味着，您可以在您的题面中任意访问当前题目的相关信息，甚至可以根据题目信息动态生成题面。

## 上下文

目前，Tuack-NG 的 MiniJinja 包括了以下上下文：

- `problem` : 当前渲染的题目
- `day` : 当前渲染的比赛日
- `contest` : 当前渲染的比赛

## 函数

目前，Tuack-NG 的 MiniJinja 包括了四个函数上下文：

- `sample` 上下文：
  - `text(sample_id: u32)` : 将 `sample_id` 指向的样例的文本加入题面。适合简短的样例。
  - `file(sample_id: u32)` : 在题面中加入文本，提示选手查看下发文件中的`sample_id` 指向的样例。适合大样例。

- `tools` 上下文
  - `hn(num: f64, style?: str)` : 将 `num` 转换到适合人类阅读的形式（科学表示法或逗号分隔形式）  
    注意输出的是 Latex 格式并且不带 `$$` ，因此需要以 `$$` 包括。  
    `style` 可选，如果指定了，有以下两种选项：
    - `x` : 科学记数法
    - `,` : 逗号分隔形式  
  如果没有指定，则自动选择最紧凑的格式。
  - `comma(num: i64)` : 将 `num` 转换逗号分隔形式。
  - `cases(cases_vec: Vec<i32>)` : 将数字范围转换为紧凑的表示形式，自带 `$$`。
    比如 `cases([1,2,3,5,7,8,9])` 会转换为 `$1 \sim 3, 5, 7 \sim 9$`。

- `statement` 上下文（别名 `s`，效果一致）
  - `input_file()` : 输出一段文本，要求选手从指定位置读入。
  - `output_file()` : 输出一段文本，要求选手输出到指定位置。

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

> [!note] 提示
>
> <span v-pre>`{{}}`</span> 是 MiniJinja 的表达式语法，由于我们把 `problem` 直接扔进了上下文（实际上是把 json 扔进去了），我们可以直接用表达式调用 `problem`。（当然，这个表达式支持基本的算术运算）
>
> 调用 `problem` 有两种等效的格式：
>
> ```md
> {{ problem.a.b }}
> ```
>
> ```md
> {{ problem["a"]["b"] }}
> ```
>
> 需要注意的是，当属性名带有空格时（比如说示例 1），只能使用第二种语法。
>
> <span v-pre>`{{ problem.data | length }}`</span> 是过滤器语法，在这里意为获取数组的长度。
>
> 关于 MiniJinja 的更多语法，详见 <https://docs.rs/minijinja/latest/minijinja/syntax/index.html>
>
> `problem` 的数据结构如下：
>
> ```rust
> #[derive(Debug, Clone, Serialize, Deserialize)]
> #[serde(rename_all = "kebab-case")]
> pub struct ProblemConfig {
>     pub version: u32,
>     pub folder: String,
>     #[serde(rename = "type")]
>     pub problem_type: String,
>     pub name: String,
>     pub title: String,
>     #[serde(rename = "time limit")]
>     pub time_limit: f64,
>     #[serde(rename = "memory limit")]
>     pub memory_limit: String,
>     #[serde(rename = "partial score")]
>     pub partial_score: bool,
>     #[serde(skip)]
>     pub path: PathBuf,
>     pub samples: Vec<SampleItem>,
>     // pub args: HashMap<String, serde_json::Value>,
>     pub data: Vec<DataItem>,
>     // pub pretest: Vec<PreItem>,
>     #[serde(default, skip_serializing_if = "HashMap::is_empty")]
>     pub tests: HashMap<String, TestCase>,
> }
> #[derive(Debug, Clone, Serialize, Deserialize)]
> pub struct TestCase {
>     pub expected: ExpectedScore, // 期望得分条件
>     pub path: String,            // 文件或文件夹路径
> }
> 
> #[derive(Debug, Clone, Serialize, Deserialize)]
> #[serde(untagged)]
> pub enum ExpectedScore {
>     Single(String),        // 单个条件，如 ">= 60"
>     Multiple(Vec<String>), // 多个条件，如 [">= 60", "< 90"]
> }
> #[derive(Debug, Clone, Serialize, Deserialize)]
> pub struct SampleItem {
>     pub id: u32,
>     #[serde(default)]
>     pub input: Option<String>,
>     #[serde(default)]
>     pub output: Option<String>,
> }
> #[derive(Debug, Clone, Serialize, Deserialize)]
> pub struct DataItem {
>     pub id: u32,
>     pub score: u32,
>     #[serde(default)]
>     pub input: Option<String>,
>     #[serde(default)]
>     pub output: Option<String>,
> }
> ```
