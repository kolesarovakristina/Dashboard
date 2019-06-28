import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "../redux/reducers/index";

export default function configureStore(initialState, history) {
  // Build the middleware for intercepting and dispatching navigation actions
  const routerMid = routerMiddleware(history);
  const middlewares = [thunk, routerMid];
  const enhancers = [applyMiddleware(...middlewares)];
  const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
  });
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers)
  );
  return store;
}
