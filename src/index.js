import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import {Provider} from 'react-redux';
import Store from './redux/store'
Modal.setAppElement("#root");

ReactDOM.render(
  <Provider store={Store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
