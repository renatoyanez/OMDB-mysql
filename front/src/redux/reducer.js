import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducers from "./reducers/userReducers";
import filmReducers from './reducers/filmReducers';
import favoritesReducers from './reducers/favoritesReducers'

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["films", 'user'],
};

const reducer = combineReducers({
  user: userReducers,
  films: filmReducers,
  favorites: favoritesReducers
});

export default persistReducer(persistConfig, reducer);
