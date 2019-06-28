import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import theme from "./styles/themes/default";
import configureStore from "./store/index";
import App from "./App";
import "./styles/style.css";

const initialState = {};
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();
const store = configureStore(initialState, history);

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>

);

ReactDOM.render(<Root />, document.getElementById("root"));
