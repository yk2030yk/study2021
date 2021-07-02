# 準備

## 1. 必要なツールのインストール

### 1-1. ツール一覧

- VSCode・・・エディタ
- node.js・・・コマンド上で JavaScript を動かすツール
- yarn・・・パッケージ管理ツール

### 1-2. インストール

#### 1-2-1. VSCode のインストール

[VSCode 公式](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)

#### 1-2-2. nodenv を利用してインストールする

[nodenv 公式 MacOS](https://github.com/nodenv/nodenv#homebrew-on-macos)

インストールの確認

```bash
# nodeのバージョンが表示されることを確認
$ node -v

# yarnのバージョンが表示されることを確認
$ yarn -v
```

## 2. ライブラリのインストール

```bash
# ディレクトリを移動する
$ cd リポジトリのルート

# ライブラリのインストールを実行
$ yarn install
```

## 3. アプリケーションを起動する

```bash
# アプリケーションを起動する
$ yarn start
```

以下にアクセスして画面が表示されることを確認

[ローカル環境](http://localhost:3000/)
