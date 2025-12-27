---
title: 安装
icon: lightbulb
---

Tuack-NG 目前只支持 Linux，其他操作系统可能可用，但不保证兼容性。

目前只支持 x86_64 架构，其他架构可能需要自行编译安装。

> [!info]
> Windows 的目录结构显然不遵守 FHS，Tuack-NG 很有可能无法工作，未来将会进行适配。目前的变通方法是使用 WSL。
>
> MacOS 部分兼容 FHS，但部分目标文件夹可能只读（在 MacOS 11 后），并且架构可能不兼容。您可以尝试自行编译，并将所需文件夹放到 `~/.local/share/tuack-ng/` 下，具体见 [其他发行版](#其他发行版)。

## Debian 及衍生版（如 Ubuntu）

在 [Tuack-NG 的 Release 界面](https://github.com/tuack-ng/tuack-ng/releases) 下载 deb 安装包，并使用以下方法安装：

```bash
apt install [下载下来的安装包名字].deb
```

## Arch Linux 及衍生版（AUR）

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

## 其他发行版

暂时没有官方支持的安装方式，但是你可以看看 [DeepSeek 根据 AUR 上官方提供的 PKGBUILD 总结的安装教程](https://chat.deepseek.com/share/0iw00hfmavs8ci06br) 。

如果你愿意为你的发行版贡献一个安装包/源，欢迎提交贡献。
