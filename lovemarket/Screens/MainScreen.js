import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../Screens/HomeScreen'
import BlogScreen from '../Screens/BlogScreen'
import NotificationScreen from '../Screens/NotificationScreen'
import UploadScreen from '../Screens/UploadScreen'
import UserScreen from '../Screens/UserScreen'
import AdvertisementScreen from '../Screens/AdvertisementScreen'
import DetailPostBlogScreen from '../Screens/DetailPostBlogScreen'
import SuggestSearch from '../Screens/SuggestSearchList'
import CategoryDetailScreen from '../Screens/CategoryDetailScreen'
import ListLikeProductScreen from '../Screens/ListLikeProductScreen'
import FilterScreen from '../Screens/FilterScreen'
import PaymentScreen from '../Screens/PaymentScreen'
import ProductDetail from '../Screens/ProductDetail'
import MessengerScreen from '../Screens/MessengerScreen'
import MessageDetailScreen from '../Screens/MessageDetailScreen'
import PostBlogArticleScreen from '../Screens/PostBlogArticleScreen'
import MyBlogSettingsScreen from '../Screens/MyBlogSettingsScreen'
import EmotionCategoryScreen from '../Screens/EmotionCategoryScreen'

const AppNavigator = createBottomTabNavigator({
    Home:{
        screen: HomeScreen,
        navigationOptions:{
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({tintColor})=><Icon name="home" size={40} color={tintColor} />,
        }
    },
    Blog:{
        screen: BlogScreen,
        navigationOptions:{
            tabBarLabel: 'Blog',
            tabBarIcon: ({tintColor})=><Icon name="paper-plane" size={30} color={tintColor} />,
        }
    },
    Upload:{
        screen: UploadScreen,
        navigationOptions:{
            tabBarLabel: 'Đăng tin',
            tabBarIcon: ({tintColor})=><Icon name="upload" size={30} color={tintColor} />
        }
    },
    Notice:{
        screen:  NotificationScreen,
        navigationOptions:{
            tabBarLabel: 'Thông báo',
            tabBarIcon: ({tintColor})=><Icon name="bell" size={30} color={tintColor} />
        }

    },
    Profile:{
        screen: UserScreen,
        navigationOptions:{
            tabBarLabel: 'Người dùng',
            tabBarIcon: ({tintColor})=><Icon name="user-circle" size={30} color={tintColor} />
        }
    },
},{
    tabBarOptions:{
        activeTintColor: '#9207E5',
        inactiveTintColor: '#9f9f9f',
        style:{backgroundColor: '#f5f5f5', height: 54, borderTopWidth: 0},
        labelStyle:{fontFamily: 'SourceSerifPro-Regular'}
    },
});

export default class MainScreen extends Component{
    render(){
        return<AppContainer />
    }
}

const MainStack = createStackNavigator({
    Tab: {screen: AppNavigator, navigationOptions:{header:null}},
    ProductDetail: {screen: ProductDetail,navigationOptions:{header:null}},
    Advertisement: {screen: AdvertisementScreen, navigationOptions:{header: null}},
    DetaiPostBlog: {screen: DetailPostBlogScreen, navigationOptions:{header:null}},
    SuggestSearch: {screen: SuggestSearch , navigationOptions:{header:null}},
    CategoryDetailScreen: {screen:CategoryDetailScreen ,navigationOptions:{header:null}},
    LikeList: {screen:ListLikeProductScreen, navigationOptions:{header: null}},
    FilterScreen:{screen: FilterScreen, navigationOptions:{header: null}},
    PaymentScreen:{screen:PaymentScreen, navigationOptions:{header: null}},
    MessageDetailScreen: {screen: MessageDetailScreen, navigationOptions:{header: null}},
    MessengerScreen:{screen: MessengerScreen, navigationOptions:{header: null}},
    PostBlogArticleScreen:{screen: PostBlogArticleScreen,  navigationOptions:{header: null}},
    MyBlogSettingsScreen:{screen: MyBlogSettingsScreen, navigationOptions:{header: null}},
    EmotionCategoryScreen:{screen: EmotionCategoryScreen, navigationOptions:{header: null}}
});



const AppContainer = createAppContainer(MainStack);


