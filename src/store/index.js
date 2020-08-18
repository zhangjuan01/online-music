import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducer from './reducer'

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
))
export default store