import React from "react";
import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";
import Loadable from "@7rulnik/react-loadable";
import Loading from "Components/LoadingPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCaretDown, faCaretUp, faUser, faLock, faUserMinus, faUserEdit, faTimes
} from "@fortawesome/free-solid-svg-icons";

library.add(faCaretDown, faCaretUp, faUser, faLock, faUserMinus, faUserEdit, faTimes);

const LoadableComponent = Loadable({
  loader: () => import("Containers/DashboardContainer"),
  loading: Loading
});

const App = () => (
  <Switch>
    <Route
      path="/"
      component={LoadableComponent}
    />
  </Switch>
);
export default withRouter(App);
