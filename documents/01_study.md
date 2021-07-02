# React + TypeScript 演習

## 演習 1. ヘッダーのタイトルを変更する

「Sample」の文字を「React 演習」に変えてみよう

```tsx:./src/components/sample/molecules/HeaderTitle/index.tsx
// テキストを変更する
<Title>React 演習</Title>
```

## 演習 2. ヘッダーのデザインを変更する

スタイルを変更してみよう

```tsx:./src/components/sample/atoms/Title/styles.tsx
// cssを変更する
color: #1eb7bdeb;
```

## 演習 3. コンポーネントを作成する

ファイルを作成し、コンポーネントを記述してみよう

```tsx:./src/components/sample/organisms/Footer/index.tsx
import React from 'react'

// コンポーネントを定義する
export const Footer: React.FC = () => {
  // コンポーネントが表示するHTMLを記述する
  return <div>Copyright © 2021 xxxx All Rights Reserved.</div>
}
```

作成したコンポーネントを反映してみよう

```tsx:./src/App.tsx
// 作成したコンポーネントをインポートする
import { Footer } from "./components/sample//organisms/Footer";

// ArticleListコンポーネントの下に配置する
<Footer />
```

## 演習 4. コンポーネントにデザインを当てる

ファイルを作成し、スタイルを記述してみよう

```tsx:./src/components/sample/organisms/Footer/styles.tsx
import styled from "@emotion/styled";

export const Footer = styled.div`
  padding: 10px;
  background-color: #000;
  color: #fff;
`;
```

ファイルを作成し、スタイルを反映してみよう

```tsx: ./src/components/sample/organisms/Footer/index.tsx
// 作成したスタイルをインポートする
import * as S from './styles'

// divをスタイルに置き換える
return <S.Footer>Copyright © 2021 xxxx All Rights Reserved.</S.Footer>
```
