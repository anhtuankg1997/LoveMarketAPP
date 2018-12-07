import React,{Component} from 'react';
import {  View, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer, FlatList } from "react-navigation";
import ItemBuySell from './ItemBuySell'

var listItemBuySell = [
    {
        key: '1',
        name: 'Tin yêu thích',
        image: require('../../images/profile/ico/tindathich.png')
    },
    {
        key: '2',
        name: 'Tin đã xem gần đây',
        image: require('../../images/profile/ico/tinvuaxem.png')
    },
    {
        key: '3',
        name: 'Tin đang chờ',
        image: require('../../images/profile/ico/tindangcho.png')
    },
    {
        key: '4',
        name: 'Tin đang đăn',
        image: require('../../images/profile/ico/tindangdang.png')
    },
    {
        key: '5',
        name: 'Tin đã hủy',
        image: require('../../images/profile/ico/tindaxoa.png')
    },

];

class ListItem extends Component{


    render() {
        return(
                <FlatList
                    data={listItemBuySell}
                    renderItem={({item, index}) => {
                        return(
                            <TouchableOpacity>
                            <ItemBuySell item={item} index={index}/>
                            </TouchableOpacity>
                        );
                    }}
                    style={{height: 100}}
                />
        );

    }
}


export default class ControllerBuySellInfo extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <AppEx/>
            </View>
        );
    }
}

const AppNavigator = createMaterialTopTabNavigator({
    TinBan: {screen: ListItem, navigationOptions:{tabBarLabel:'tin bán'} },
    TinMua: {screen: ListItem, navigationOptions:{tabBarLabel:'tin mua'}}
},{
    tabBarOptions: {
        style: {
            backgroundColor: '#dddddd',
        },
        labelStyle:{
            color: '#181818', fontFamily: 'SourceSerifPro-Regular'
        },
    }
});



const AppEx = createAppContainer(AppNavigator);





