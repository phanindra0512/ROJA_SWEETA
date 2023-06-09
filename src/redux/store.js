import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers";
// import createSagaMiddleware from 'redux-saga'

// const sagaMiddleWare = createSagaMiddleware()
// const middleWare = [sagaMiddleWare]

const store = createStore(rootReducers, {});

export default store;
