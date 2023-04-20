import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./helpers/reduxToolkit";
import i18n from './i18n';
import { I18nextProvider } from "react-i18next";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Suspense fallback="loading...">
        {/* <I18nextProvider i18n={i18n}> */}
          <App />
        {/* </I18nextProvider> */}
      </Suspense>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
