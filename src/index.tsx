import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app';
import {store} from './store/index';
const rootElement:HTMLElement=document.getElementById("root")!
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
  <Provider store={ store } >
    <App />
  </Provider>
</React.StrictMode>
);
