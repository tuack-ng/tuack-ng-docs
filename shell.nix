# shell.nix
{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs_22
    pkgs.corepack
    pkgs.dart-sass  # 添加 dart-sass
  ];

  shellHook = ''
    corepack enable
    corepack prepare yarn@stable --activate

    # 设置环境变量，让 sass-embedded 能找到系统安装的 Dart Sass
    export SASS_EMBEDDED_BIN="${pkgs.dart-sass}/bin/sass"

    echo "Node.js version: $(node --version)"
    echo "Yarn version: $(yarn --version)"
  '';
}