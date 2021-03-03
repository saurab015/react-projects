import React from "react";
import "./quiz.css";
import App from "./App";
import { AppProvider } from "./context";

const QuizApp = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};
export default QuizApp;
