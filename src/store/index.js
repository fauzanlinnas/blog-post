import { legacy_createStore as createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./rootReducer";

// @saga middleware
export const sagaMiddleware = createSagaMiddleware();

// @create store
// apply ehancer to support react-native-debbuger
// for more info please visit : https://github.com/jhen0409/react-native-debugger

const rootReducer = (state, action) => {
  return reducers(state, action);
};

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export default store;
