import React from "react";

import "./App.css";

import { Header } from "./components/sample/organisms/Header";
import { ArticleList } from "./components/article//organisms/ArticleList";

function App() {
  return (
    <>
      <Header />
      <ArticleList />
    </>
  );
}

export default App;
