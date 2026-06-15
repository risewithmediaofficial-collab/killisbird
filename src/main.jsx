import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { AppContextProvider } from "./context/AppContext";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Redux store — global UI state (activeProduct, mobileMenu, etc.) */}
    <Provider store={store}>
      {/* App Context — site config (name, theme, socials) */}
      <AppContextProvider>
        <Suspense fallback={null}>
          <App />
        </Suspense>
      </AppContextProvider>
    </Provider>
  </React.StrictMode>,
);
