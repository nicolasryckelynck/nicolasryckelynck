import React, {useState} from "react";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import userReducer from "./redux/userReducer";

import "./App.css";
// import Login from "./windows/login/login";
import Window from "./windows/main/window";

function App() {
  const rootReducer = combineReducers({
    user: userReducer,
  });

  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <div className="App">
        <Window />
      </div>
    </Provider>
  );
}

export default App;
