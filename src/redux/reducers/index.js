import { combineReducers } from "redux";
import { cartCounterReducer } from "./cartCounterReducer";

const rootReducers = combineReducers({
  myCart: cartCounterReducer,
});

export default rootReducers;
