import React from "react";

import { useArticles } from "../../hooks/useArticles";
import { ArticleCard } from "../../molecules/ArticleCard";
import * as S from "./styles";

type Props = {};

export const ArticleList: React.FC<Props> = () => {
  const articles = useArticles();

  return (
    <S.List>
      {articles.map((article) => (
        <ArticleCard article={article} />
      ))}
    </S.List>
  );
};
