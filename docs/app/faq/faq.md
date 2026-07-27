---
title: FAQ
description: Tuack-NG 使用时的常见问题。
---

本章记录了一些用户可能遇到的常见问题与解决方法。欢迎为这个页面做贡献。

## 收到错误“配置文件版本过低，可能是 Tuack 的配置文件。请迁移到 Tuack-NG 配置文件格式再使用。”？

- 您可能错误地修改了配置文件的 `version` 字段到 `2` 以下。Tuack-NG 为了防止误加载 Tuack 的配置文件会提前失败。请您纠正这个错误。
- 您可能尝试使用 Tuack-NG 加载 Tuack 的配置文件。您必须迁移后才能使用。关于自动迁移的进一步指引，参见 [从 Tuack 迁移](../special/migrate-tuack/overview)。
