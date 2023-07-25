import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { ProductReducer } from '../reducer/product'
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
    products: ProductReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store