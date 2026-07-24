# 题面语法

> Tuack-NG 支持的 Markdown 语法参考。

## 基本 Markdown

```md
# h1
## h2
### h3
#### h4
##### h5
###### h6

paragraph 1

paragraph 2

paragraph
break

_emphasis_ _emphasis_ **strong** **strong** ~~delete~~
```

## 代码块

````md
```python
print("python code block")
```

这是 `inline code`
````

## 引用

```md
> quote
>
> > quote in quote
```

## 列表

```md
- item A
- item B
- item C

1. item 1
2. item 2
3. item 3
```

## 链接与图片

```md
[NOI website](https://noi.cn/)

简单链接：<https://luogu.com.cn>

Inline ![img](image.jpg) image
```

## 图片扩展

### 居中图片

```md
:::figure{caption=居中图片。在这里添加一些图片描述。}
![1.jpg](image.jpg)
:::
```

### 无标题图片块

```md
:::figure
caption 参数是可选的。

文本也可以放进去。
:::
```

### 尺寸控制

```md
小![small](image.jpg){height=4em} ![small](image.jpg){width=4em}图片
```

支持的单位：`pt`、`mm`、`cm`、`in`、`em` 和按页面比例的 `%`。

## 表格

### 对齐方式

```md
| 左对齐 | 居中对齐 | 右对齐 | 默认居中 |
| :----- | :------: | -----: | ------- |
| 内容   |   内容   |   内容 | 内容    |
```

### 单元格合并

使用 `^` 表示与上一行相同的内容，`<` 表示与左一列相同的内容：

```md

| 如下 |        进行        |       单元格       | 合并 |
| :--: | :----------------: | :----------------: | :--: |
|  1   |      $\le 10$      |      $\le 10$      |  无  |
|  2   |         ^          |         ^          |  无  |
|  3   |         ^          |         ^          |  无  |
|  4   | $\le 3\times 10^5$ |         ^          |  无  |
|  5   |         ^          |         ^          |  无  |
|  6   |         ^          | $\le 3\times 10^5$ |  无  |
|  7   |         ^          |         ^          |  无  |
|  8   |         ^          |         ^          |  无  |
|  9   |         ^          |     跨列合并 1     |  <   |
|  10  |       大格子       |         <          |  无  |
|  11  |         ^          |         <          |  无  |
```

- `^`：继承上一行同列的值（行合并）
- `<`：继承左侧单元格的值（列合并）

## LaTeX 公式

```md
inline latex $a^2 + b^2 = c^2$

$$
\sum_{i=1}^n i = \frac{n(n+1)}{2}
$$
```
