import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import { persistStore } from "redux-persist";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(createLogger(), thunkMiddleware)));

  const persistor = persistStore(store);

  return { store, persistor };
}
