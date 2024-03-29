import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from 'twin.macro';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import TempFormatContextProvider from "./context/tempFormat.context";

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyles />
      <TempFormatContextProvider>
        <App />
      </TempFormatContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
