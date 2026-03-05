# 安装

Tuack-NG 目前支持 Linux 和 Windows，其他操作系统可能可用，但不保证兼容性。

目前支持 x86_64 架构，Linux 上 Arm64 架构，Windows 上 x86 架构，以及 Nix 包管理器，其他架构可能需要自行编译安装。

## Debian 及衍生版（如 Ubuntu）

在 [Tuack-NG 的 Release 界面](https://github.com/tuack-ng/tuack-ng/releases) 下载 deb 安装包，并使用以下方法安装：

```bash
apt install [下载下来的安装包名字].deb
```

## Arch Linux 及衍生版（AUR）

::: tabs

== yay

```bash
yay -S tuack-ng-bin
```

== paru

```bash
paru -S tuack-ng-bin
```

== 手动安装

> [!warning] 警告
> 仅限 Arch Linux 及衍生版可用，其他发行版不可以使用以下方法。

```bash
git clone https://aur.archlinux.org/tuack-ng-bin.git
cd https://aur.archlinux.org/tuack-ng-bin.git
makepkg -si
```

## Nix / NixOS

> [!note] 附注
>
> 这种方法也许兼容 MacOS，但开发者没有设备测试，仅供参考。

```bash
nix profile add github:tuack-ng/tuack-ng
```

## 其他发行版

暂时没有官方支持的安装方式。

如果你愿意为你的发行版贡献一个安装包/源，欢迎提交贡献。
