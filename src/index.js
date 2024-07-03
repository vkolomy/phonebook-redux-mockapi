import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from './app/store'
import { Provider } from 'react-redux'

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )



//cra version
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>

  // </React.StrictMode>
);
