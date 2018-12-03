import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createSwitchNavigator, createAppContainer, createStackNavigator, createDrawerNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';

import MainScreen from './Screens/MainScreen'
import AuthLoading from './Screens/AuthLoading'
import Login from "./Screens/Login";
import SignUpScreen from './Screens/SignupScreen'
import Splash from './Screens/Splash'
import AdvertisementScreen from './Screens/AdvertisementScreen'
import BlogScreen from './Screens/BlogScreen'
import HomeScreen from './Screens/HomeScreen'


import ProductDetail from './Screens/ProductDetail'
import SuggestSearchList from './Screens/SuggestSearchList'
import UserScreen from './Screens/UserScreen'
import UploadScreen from "./Screens/UploadScreen";
import DetailPostBlogScreen from './Screens/DetailPostBlogScreen'
import CategoryDetailScreen from './Screens/CategoryDetailScreen'
import FilterScreen from './Screens/FilterScreen'
import PaymentScreen from './Screens/PaymentScreen'
import StaticProductNormal from './components/StaticProductNormal'
import PostBlogArticleScreen from './Screens/PostBlogArticleScreen'
import Test from './Screens/Test'
import MessengerScreen from './Screens/MessengerScreen'

// export default class App extends Component{
//     render(){
//         return<MessengerScreen/>
//     }
// }


const AuthStackNavigator = createStackNavigator({
    Welcome: {screen: Splash,navigationOptions: {header: null} },
    Login: {screen:Login, navigationOptions: {header: null} },
    SignUp: {screen:SignUpScreen, navigationOptions: {header: null} },

},{
    headerMode: 'screen'
});

const AppDrawerNavigator = createDrawerNavigator({
    Main : MainScreen,
});


const AppEX =  createSwitchNavigator({
    AuthLoading: AuthLoading,
    Auth: AuthStackNavigator,
    App: AppDrawerNavigator,
},{

});


export default createAppContainer(AppEX);

