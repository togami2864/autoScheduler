# autoScheduler(MVP 段階)

## 概要

- 勉強したことの自己評価によって自動で todo を登録(１ヶ月後、５ヶ月後など)
- 毎朝 8:30 に github actions が実行され slack に今日のタスクが表示される。
  ![イメージ](https://user-images.githubusercontent.com/62130798/118392826-880ece80-b676-11eb-9aa2-ba0162865314.png)

  ![slack](https://user-images.githubusercontent.com/62130798/118393338-9d392c80-b679-11eb-8d07-cc3e8d4d11b9.png)

## 動機

## 要件

- 自動で日付計算して登録。
- 永続化のための DB がある。
- DB スキャンを毎日実行して slack 送信し、習慣化につなげる。(毎日 PC をみるため確実/スマホだと気が散る、忘れがちなため)。

## 技術スタック

Front: Next.js
Backend,DB: FireStore(FireBase)

主なライブラリ:
UI: ChakraUI, Styled-Components
状態管理: Recoil

### slackbot

言語:Golang
定期実行: GithubActions

## アーキテクチャ概略図

![アーキテクチャ](https://user-images.githubusercontent.com/62130798/118393220-eccb2880-b678-11eb-9d66-f3e72a7ceac0.png)

1. クライアント(next.js)側から FireStore に対して書き込み.
2. 毎朝 github actions が Golang で書いたコードを実行・読み取り。
3. slack に通知。

## 自己評価

現状２種類の評価がある。

1. チョットデキル(一回で解けた、good 評価)
2. 完全に理解した(できなかった、bad 評価)

![評価](https://user-images.githubusercontent.com/62130798/118393059-edaf8a80-b677-11eb-925c-052b093e8430.png)

例): 4 月 23 日に LeetCode の#121 の問題を解いた。

`できなかった` -> 1 日、１週間、１ヶ月、５ヶ月後に登録。期間を開けて継続的にリマインドすることで定着を施す。
![bad](https://user-images.githubusercontent.com/62130798/118393278-43386700-b679-11eb-9413-6207079f8a6a.png)

`一回で解けた` -> １ヶ月後の日付に登録。

## DB のデータ構造

・FireStore: document 型の NoSQL

日付を ID として設定する。
ID に対して

- item

```
{
    created_at:string,
    description: string,
    key: string,
    status: boolean
}
```

というオブジェクトを格納する List 構造

- updated: string

というデータを格納する。
