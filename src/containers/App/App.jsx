import React from "react";

import { Provider } from "react-redux";

import Routes from "../../routes/index";

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
