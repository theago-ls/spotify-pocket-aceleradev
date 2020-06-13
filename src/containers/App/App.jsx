import React from "react";

import Routes from "../../routes/index";

import { Provider } from "react-redux";

import "./App.scss";

import { store } from "../../store";

const App = () => (
  <div className="app">
    <Provider store={store}>
      <Routes />
    </Provider>
  </div>
);

export default App;
