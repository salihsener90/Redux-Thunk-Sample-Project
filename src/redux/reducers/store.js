import { createStore, combineReducers, applyMiddleware} from "redux";
import productReducer from "./productReducer";
import basketReducer from "./basketReducer";
import thunk from "redux-thunk";



const rootReducer = combineReducers({ productReducer, basketReducer });

export default createStore(rootReducer, applyMiddleware(thunk));

