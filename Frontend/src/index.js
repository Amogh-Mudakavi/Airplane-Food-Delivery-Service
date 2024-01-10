import React from "react";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store } from "./redux/Store";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <App />
        </React.Suspense>
        <Toaster />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
