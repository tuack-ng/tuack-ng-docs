---
title: 获取调试信息
description: 获取 Tuack-NG 的调试信息。
---

在使用 Tuack-NG 的过程中，您可以通过 [向开发者提交 Issue](https://github.com/tuack-ng/tuack-ng/issues/new/choose) 等方式反馈问题。在这时，您可能会被要求提交应用运行时的调试信息。本文教授您如何获取这些信息。

## 获取日志

在运行任何命令时，在 `tuack-ng` 后面加上 `-v`(`--verbose`) 参数，即可启用详细日志记录，比如：

```bash
tuack-ng -v ren noi
```

在此模式下，您会看到许多平常运行时不可见的日志，请在复现您的 Bug 的同时，将这部分日志一并附上。

## 获取诊断信息

> [!caution]
>
> 诊断信息可能包含敏感数据，在分享时请注意检查。

在任意位置执行：

```bash
tuack-ng develop diagnostic
```

即可获取 Tuack-NG 的诊断信息。将其粘贴到 Issue 模板中的【诊断信息】中。
