<div id="top"></div>

> [!TIP]
> 新規共同開発者は、[#構成](#構成)および[#開発環境構築](#開発環境構築)を確認してください。

## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [環境](#環境)
3. [構成](#構成)
4. [開発環境構築](#開発環境構築)
5. [トラブルシューティング](#トラブルシューティング)

</br>

## プロジェクトについて

掲示板Webアプリ（身内制作で目標は特にありません）

<a href="https://github.com/aizufoobar/onave/wiki">プロジェクト詳細 »</a>

<p align="right">(<a href="#top">トップへ</a>)</p>


## 環境

<p>
  <img src="https://img.shields.io/badge/-Node.js-black.svg?logo=node.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Npm-black.svg?logo=npm&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Typescript-black.svg?logo=typescript&style=for-the-badge">
  <img src="https://img.shields.io/badge/tailwind%20css-black?logo=tailwindcss&style=for-the-badge">
  <img src="https://img.shields.io/badge/-App%20Engine-000000.svg?logo=google-cloud&style=for-the-badge">
</p>

パッケージのバージョンは package.json を参照してください

<p align="right">(<a href="#top">トップへ</a>)</p>


## 構成

以下の２つのディレクトリにアプリの中身を配置します。

- `public` - 画像などの静的ファイル
- `src`
  - `app` - page.tsx、layout.tsx など（詳しくは[こちら](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)）
  - `components` - 複数回使われる共通[コンポーネント](https://ja.react.dev/learn/your-first-component)
  - `lib` - 共通ロジック

ルートには各種設定ファイルが配置されます。 app.yaml はApp Engineの構成ファイルで、 cloudbuild.yaml はCloud Buildの構成ファイルです。本アプリはこの2つの構成ファイルに従い、本番・ステージング環境に展開されます。

<!-- tree -a -I ".git|.next|node_modules|next-env.d.ts" -L 2 --dirsfirst -->
<pre>
.
├──.github
├──.husky
├──.vscode
├── docs
├── <span style="color: yellow;">public</span>
├── <span style="color: yellow;">src</span>
│   ├── app
│   ├── components
│   └── lib
│
├── .eslintrc.js
├── .gcloudignore
├── .gitignore
├── .stylelintignore
├── app.yaml
├── cloudbuild.yaml
├── lint-staged.config.js
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── prettier.config.js
├── stylelint.config.js
├── tailwind.config.js
└── tsconfig.json
</pre>

<p align="right">(<a href="#top">トップへ</a>)</p>


## 開発環境構築

- リポジトリの複製  
`git clone https://github.com/aizufoobar/onave.git`

- Volta のインストール  
`curl https://get.volta.sh | bash`  

- Node, npm の確認（package.json の "volta" に書かれたバージョンと一致するか）  
`node --version`
`npm --version`

- 依存パッケージのインストール  
`npm install`

#### その他

- SSHコミット署名の設定  
-> "[SSHコミット署名の検証](https://docs.github.com/ja/enterprise-cloud@latest/authentication/managing-commit-signature-verification/about-commit-signature-verification)" の手順に従ってください
- ステージングサイトの認証設定  
-> @aizufoobar に利用するGoogleアカウントを連絡してください

<p align="right">(<a href="#top">トップへ</a>)</p>


## トラブルシューティング

[#開発環境構築](#開発環境構築)でエラー等ありましたら、@aizufoobar にご連絡ください。本セクションに記載して、悩まないREADMEになるように改善していきます。

<p align="right">(<a href="#top">トップへ</a>)</p>


***Thank You For Reading.***
