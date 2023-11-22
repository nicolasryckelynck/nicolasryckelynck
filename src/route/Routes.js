import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Login from "../windows/login/login";
import Window from "../windows/main/window";

function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/autrecomposant" component={Window} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
