import React from "react";

import * as S from "./styles";

type Props = {
  article: {
    title: string;
    date: string;
    content: string;
    image: string;
  };
};

export const ArticleCard: React.FC<Props> = ({ article }) => {
  return (
    <S.Card>
      <S.ImageWrapper>
        <S.Image src={article.image} />
      </S.ImageWrapper>
      <S.Title>{article.title}</S.Title>
      <S.Date>{article.date}</S.Date>
      <S.Content>{article.content.substr(0, 100)}...</S.Content>
    </S.Card>
  );
};
