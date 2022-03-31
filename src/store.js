import {createStore,combineReducers,applyMiddleware} from "redux"
import{composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import { productReducer } from "./reducers/productReducers"


const rootReducer=combineReducers({
        products:productReducer
})

const store= createStore(rootReducer ,{},composeWithDevTools(applyMiddleware(thunk)))

export default store;