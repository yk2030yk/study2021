import { useState, useEffect } from "react";

import { fetchArticles } from "../../../service";

export const useArticles = () => {
  const [articles, setArticles] = useState<any[]>([]);

  const getArticles = async () => {
    const articles = await fetchArticles();
    setArticles(articles);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return articles;
};
