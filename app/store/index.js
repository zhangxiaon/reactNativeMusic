import {createStore,applyMiddleware,compose,combineReducers} from "redux";
import thunkMidlleware from "redux-thunk";
import reducers from "../reducers/index"
import {
    createReactNavigationReduxMiddleware,
    createNavigationReducer
} from 'react-navigation-redux-helpers'
import AppNavigator from "../router"

const navReducer = createNavigationReducer(AppNavigator)
export const  middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
)
const configureStore = preloadedState => {
    return createStore(
        combineReducers({...reducers,nav:navReducer}),
        preloadedState,
        compose(
            applyMiddleware(thunkMidlleware,middleware)
        )

    )
}
console.log("store start----------------")
console.log(configureStore())
console.log("store end----------------")
export const store = configureStore()
