import React from "react";
import "./hackerNews.css";
import App from "./App";
import { AppProvider } from "./context";

const HackerNews = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};

export default HackerNews;
