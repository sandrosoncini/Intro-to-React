import React from "react";

import QuestionShowPage from "./QuestionShowPage";
import { QuestionIndexPage } from "./QuestionIndexPage";

const count = [1, 2, 3, 4, 5];

const App = () => {
  return (
    <>
      <QuestionShowPage />
      <QuestionIndexPage />
    </>
  );
};

export default App;