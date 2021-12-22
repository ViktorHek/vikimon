import { createStore } from "redux";
import rootReducer from "./rootReducer";
import initialState from "./initialState";

const store = createStore(rootReducer, initialState);

export default store;