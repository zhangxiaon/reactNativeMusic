import React from "react";
import {createBottomTabNavigator,createStackNavigator} from "react-navigation"
import Home from "./pages/home"
import MovieList from "./pages/movieList"
import MovieDetail from "./pages/movieDetail"

//底部的tabBar导航
const TabbarNavigator = createBottomTabNavigator({
    Home: { screen: Home },
    MovieList: { screen: MovieList }
}, {
    initialRouteName: 'MovieList'
});
//整个应用的路由栈
const AppNavigator = createStackNavigator({
    TabBar: {
        screen: TabbarNavigator,
        navigationOptions: {
            header: null
        }
    },
    MovieDetail: {
        path: 'news/:id',
        screen: MovieDetail
    }
});

export default AppNavigator