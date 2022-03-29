import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import AppTitle from "./Components/AppTitle/AppTitle";
import GlobalStyles from "./Globalstyles";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="Loading...">
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppTitle children={"ALEX"}/>} />
          <Route path="/home" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
