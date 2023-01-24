import React from "react";
import ReactDOM from "react-dom/client";
import { PublicClientApplication, EventType } from "@azure/msal-browser";
import reportWebVitals from './reportWebVitals';
import { msalConfig } from "./authConfig.js";
import App from "./App";

export const msalInstance = new PublicClientApplication(msalConfig)

const accounts = msalInstance.getAllAccounts()
if (accounts.length > 0) {
  msalInstance.setActiveAccount(accounts[0])
}

msalInstance.addEventCallback(event => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
    const account = event.payload.account
    msalInstance.setActiveAccount(account)
  }
})

const AppProvider = () => (
    <App instance={msalInstance}/>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppProvider />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

