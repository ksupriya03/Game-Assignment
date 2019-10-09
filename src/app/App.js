import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./App.css";

import pacmanApp from "./reducers";
import Board from "./Board";
import Header from "./Header";
import ControlPacman from "./ControlPacman";

const store = createStore(pacmanApp);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ControlPacman />
        <Board />
      </div>
    </Provider>
  );
};

export default App;
