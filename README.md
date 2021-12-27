# MONEA

複数台のセンサーを連携させて、部屋全体をモニタリングできるシステム

### デプロイ先

[MONEA](https://monea-2021.web.app/)

### Repo

- [MONEA](https://github.com/datt16/MONEA) // クライアントアプリ
- [MONEA-API](https://github.com/datt16/MONEA-API) // バックエンド[Private]
- [MONEA-DEVTOOL](https://github.com/datt16/MONEA-DEVTOOL) // 開発ツール

### 既存の課題

新型コロナウイルスが流行り始め、換気が促されるようになった。
適切な換気の指標として、二酸化炭素濃度があるが既存の二酸化炭素濃度計では以下のような問題がある。

- センサーの周りの値でしか判断していないため
  → 部屋全体が十分に換気されているかどうかは分からない
- 過去のデータが残らない
- どこが換気されているのか分かりにくい

### このシステムで改善される課題

- センサーを複数台連携 → 部屋**全体を満遍なくセンシング**できる
- DB に計測データを保管 → **二酸化炭素濃度の推移が分かる**ため、いつ換気不足だったのか特定が可能になる
- UI の色やアイコン、テキストで換気不足かどうかを表示
  → 既存の二酸化炭素濃度計よりも**換気状況が明確**になる。

## 機能詳細

「換気状況表示」「計測結果表示」の 2 機能を作成中

### 換気状況表示機能

複数台のセンサーの値から、適切な換気が行われているかどうかを判定する。  
適切な換気が行われているかどうかをアイコンやテキストを用いて表示する。

### 計測結果表示機能

記録された測定結果や換気状況を表やヒートマップで表示する。
過去に適切な換気が行われていたかどうかや、二酸化炭素濃度が高かった時間帯の把握ができる。
