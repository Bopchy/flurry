import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from 'twin.macro';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const AppContext = createContext({
  theme: 'light',
});

ReactDOM.render(
  <React.StrictMode>
    <AppContext.Provider value={{theme: "light"}}>
      <GlobalStyles />
      <App />
    </AppContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
