import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter,Link,Switch} from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import { Provider } from "react-redux";
import App from './App'

import rootReducer from './reducers/index';

const createStoreWithMiddleWare=applyMiddleware(promise)(createStore)

ReactDOM.render(<Provider store={createStoreWithMiddleWare(rootReducer)}><App /></Provider>,
  document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
