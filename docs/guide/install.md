---
title: 安装
icon: lightbulb
---

要安装 Tuack-NG，可以采用以下方法。

Tuack-NG 目前只支持 Linux，其他操作系统可能可用，但不保证兼容性。

目前只支持 x86_64，其他架构可能需要自行编译安装。

## Debian 及衍生版（如 Ubuntu）

在 [Tuack-NG 的 Release 界面](https://github.com/tuack-ng/tuack-ng/releases) 下载 deb 安装包，并使用以下方法安装：

```bash
apt install [下载下来的安装包名字].deb
```

## Arch Linux 及衍生版

::: tabs

@tab yay

```bash
yay -S tuack-ng-bin
```

@tab paru

```bash
paru -S tuack-ng-bin
```

@tab 手动安装

> [!warning]
> 仅限 Arch Linux 及衍生版可用，其他发行版不可以使用以下方法。

```bash
git clone https://aur.archlinux.org/tuack-ng-bin.git
cd https://aur.archlinux.org/tuack-ng-bin.git
makepkg -si
```

:::
