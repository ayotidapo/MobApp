// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "../reducers";
// import thunk from "redux-thunk";
// import { logger } from "redux-logger";
// import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

// export default function configureStore(initialState) {
//     const middlewares = [thunk];
//     if (process.env.NODE_ENV === "development") {
//       middlewares.push(reduxImmutableStateInvariant());
//       middlewares.push(logger);
//     }

//     return createStore(
//       rootReducer,
//       initialState,
//       applyMiddleware(...middlewares)
//     );
//   }

import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

export default function configureStore() {
  const middlewares = [thunk];
  if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
  }
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  return store;
}
