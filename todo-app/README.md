
# React Todoアプリ（担当者選択付き）

## プロジェクトの説明
React（TypeScript）で作成した、担当者を選択できるシンプルなTodoアプリです。担当者リストはJSONファイルから取得し、バックエンドは不要です。学習用のサンプルとして最適です。

## 目次
- [インストール方法](#インストール方法)
- [実行方法](#実行方法)
- [使用方法](#使用方法)
- [APIエンドポイント一覧](#apiエンドポイント一覧)
- [ファイル構成](#ファイル構成)
- [クレジット](#クレジット)
- [バッジ](#バッジ)
- [注意点・備考](#注意点備考)

## インストール方法
1. Node.js（v18以上推奨）をインストールしてください。
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
1. 「やること」を入力し、担当者を選択して「追加」ボタンを押すとTodoが追加されます。
2. チェックボックスで完了状態を切り替えられます。

## APIエンドポイント一覧
- `/members.json` : 担当者リスト（publicディレクトリ内の静的JSONファイル）

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
