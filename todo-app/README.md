# React Todo アプリ（担当者選択付き）

## プロジェクトの説明

React（TypeScript）で作成した、担当者を選択できるシンプルな Todo アプリです。担当者リストは JSON ファイルから取得し、バックエンドは不要です。学習用のサンプルとして最適です。

## 目次

- [React Todo アプリ（担当者選択付き）](#react-todoアプリ担当者選択付き)
  - [プロジェクトの説明](#プロジェクトの説明)
  - [目次](#目次)
  - [インストール方法](#インストール方法)
  - [実行方法](#実行方法)
  - [使用方法](#使用方法)
  - [API エンドポイント一覧](#apiエンドポイント一覧)
  - [ファイル構成](#ファイル構成)
  - [クレジット](#クレジット)
  - [バッジ](#バッジ)
  - [注意点・備考](#注意点備考)
  - [Learn More](#learn-more)

## インストール方法

1. Node.js（v18 以上推奨）をインストールしてください。
2. 本リポジトリをクローン、またはダウンロードします。
3. プロジェクトディレクトリで以下を実行：

```bash
npm install
```

## 実行方法

プロジェクトディレクトリで以下を実行：

```bash
npm start
```

ブラウザで http://localhost:3000 を開いてください。

## 使用方法

1. 「やること」を入力し、担当者を選択して「追加」ボタンを押すと Todo が追加されます。
2. チェックボックスで完了状態を切り替えられます。

## API エンドポイント一覧

- `/members.json` : 担当者リスト（public ディレクトリ内の静的 JSON ファイル）

## ファイル構成

```
todo-app/
├─ public/
│  └─ members.json         # 担当者リスト（静的ファイル）
├─ src/
│  ├─ App.tsx             # メインコンポーネント
│  ├─ index.tsx           # エントリーポイント
│  ├─ types.ts            # 型定義
│  ├─ App.css             # スタイル
│  └─ ...
├─ package.json
└─ README.md
```

## クレジット

- 作成者: GitHub Copilot
- テンプレート: Create React App (TypeScript)

## バッジ

![React](https://img.shields.io/badge/React-18.x-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue?logo=typescript)

## 注意点・備考

- 担当者リストは `public/members.json` を編集することで変更できます。
- バックエンドは不要です。
- 本アプリは学習・サンプル用途です。

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
