import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { StyledEngineProvider } from "@mui/joy";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="1070274457636-j269r83606paicmua2qc87ifkehce303.apps.googleusercontent.com">
    <BrowserRouter>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </Provider>
    </BrowserRouter>
  </GoogleOAuthProvider>
);
