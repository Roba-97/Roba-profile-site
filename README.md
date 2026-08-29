# Roba-97プロフィールサイト

Next.js + microCMSで実装するプロフィールサイト、Claude Codeを利用した初めての成果物。

## デプロイについて

vercelを利用。

[https://roba-profile-site.vercel.app/](https://roba-profile-site.vercel.app/)から確認できる。

## 実装履歴

### version1

- デザイン方向性検討：Claude Codeの公式skillである`/design`
- 実装手順
  - これまでの試行錯誤によってできたmockなどを参照させつつ、言語情報によるサイトイメージのすり合わせを行い、ブラウザで確認できるアーティファクトとしてデザインを確認
  - Claude Codeの`plan mode`を利用して実装手順の整理を行い、コードの提案＆説明をさせながら、実装は自分の手で行う
- 所感
  - Next.jsそのものもだし、microCMSの利用やRSSによるフィードの取得など触れたことのない技術が多かったため、勉強しつつ進められた
  - 参考にしたいサイトやデザイン、アニメーションなどの具体的な参照物を提示する手法でサイトのアップグレードを図りたい

### version2

- デザイン方向性検討：[https://github.com/MengTo/Skills](https://github.com/MengTo/Skills)で提供される[build-awwwards-quality-sitesスキル](https://github.com/MengTo/Skills/blob/main/agent-skills/web-design/build-awwwards-quality-sites/SKILL.md)を利用
  - 今回も具体的な参照物は提示せず、既存のサイトデザインと言語情報によってClaudeに提案してもらったデザインを実装
- 実装手順
  - SKILLを呼び出して既存のサイトデザインへの参照と作り上げたいデザインを言語情報で伝える
  - まずは実装してみる、を優先し、都度目視確認をしながらデザインを整えていった
  - `gsap`, `lenis`, `three`を導入して動きのあるデザインに更新されていることを確認した
- 所感
  - 使用するライブラリが増えたものの、実装されたアニメーションは少ないまま
  - 各セクションについて、適切な動きを追加することでより洗練されたサイトデザインを整えたい
  - 「卒業なく学び続ける、その先に選択肢が増えていく」というコンセプトを表現するデザインを深く検討したい
