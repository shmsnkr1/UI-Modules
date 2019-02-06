# AEDYN UI Component

## 概要
* AEDYN Ver. 0.9 / 1.0 の画面開発で作成した React の共通コンポーネント群です
  * 画面開発時の部品として利用します

## 開発方法
* master から feature ブランチを切って開発します
* src 以下の分類分けされたフォルダに作成します
  * 命名規則は特にありません (分かりやすい名前を付けましょう)
  * 該当する分類がない場合、フォルダを作成します
* コンポーネントのデザイン、仕様、動作確認は Storybook を使って行います
  * コンポーネントを作成、修正した場合、対応する Storybook も作成、修正します
  * `npm run storybook` で起動し http://localhost:9001 でアクセスできます

### バージョン管理
* リリースバージョンにはタグを付けて管理します
* バージョニングは、メジャー、マイナー、パッチとします (例：v1.0.0)
  * メジャー
    * 構成の変更など互換性のないリリース時にアップさせます
  * マイナー
    * 機能追加など互換性のあるリリース時にアップさせます
  * パッチ
    * バグ修正、軽微な修正のリリース時にアップさせます

## 利用方法
* package.json に依存性を追加して利用します
  * 以下のように利用するバージョンを指定して記述します
  ```json
  "dependencies": {
    "AEDYN_UI": "git+ssh://git@github.com:weathernews/AEDYN-UI.git#v1.0.0"
  }
  ```
* ソースコードでは、以下のようにインポートして利用します 
  * インポート後のタグの書き方は Storybook で確認できます
```js
import { DialogBox } from 'AEDYN-UI/component/dialog'
```