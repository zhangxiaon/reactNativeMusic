import React, {Component} from 'react'
import { NavigationActions } from 'react-navigation'
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
    createNavigationReducer
} from 'react-navigation-redux-helpers'
import { BackHandler } from 'react-native'
import { connect, Provider } from 'react-redux'
import { store } from './store/index'
import router from './router'

const AppNavigation = reduxifyNavigator(router, 'root')

const mapStateToProps = state => {
    console.log(state)
    return {
        state: state.nav
    }
}

const HighOrderAppNavigation = connect(mapStateToProps)(AppNavigation)

export default class App extends Component {
    componentDidMount () {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    }

    componentWillUnmount () {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
    }

    onBackPress = () => {
        store.dispatch(NavigationActions.back())
        return true
    };
    render () {
        return (
            <Provider store={store}>
                <HighOrderAppNavigation />
            </Provider>
        )
    }
}