# MyPortfolio

インターン・就職活動向けのゲームエンジニア用ポートフォリオです。  
`index.html` をブラウザで開くと表示できます。

## 更新ポイント

- 氏名、所属、GitHub、メールは `script.js` の `profile` を編集
- YouTube の共有リンクは `script.js` の各 `projects[].youtube` に追加
- 静止画サムネイルは `script.js` の各 `projects[].thumbnailImage` に画像パスを追加
- `https://youtu.be/...` と `https://www.youtube.com/watch?v=...` のどちらでも埋め込み表示に対応

## サムネイル画像の例

- 例: `thumbnailImage: "assets/thumbnails/pudding-game.jpg"`
- 画像を設定した作品はカードに静止画サムネイルが表示され、詳細モーダルでも大きく表示されます

## ファイル構成

- `index.html`: ページ本体
- `styles.css`: デザイン
- `script.js`: 表示データと描画ロジック
