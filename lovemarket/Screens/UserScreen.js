import React, {Component} from 'react'
import {View, Text, ScrollView, StatusBar, AsyncStorage, Button} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavBarStyle1} from '../components/NavigationBar/NavBar'
import Profile from '../components/UserScreenComponents/Profile'
import ControllerBuySellInfo from '../components/UserScreenComponents/ControllerBuySellInfo'



export default class UserScreen extends Component{
    SignOut= async()=>{
        await AsyncStorage.removeItem('userToken');
        this.props.navigation.navigate('AuthLoading');
    };

    render() {
        return(
            <View style={{flex:1}}>
                <StatusBar backgroundColor={'#9004e5'} barStyle={'dark-content'} />
                <View>
                    <NavBarStyle1 leftItem={require('../images/navbar/back.png')}
                                  Title={"Trang cá nhân"}
                                  RightItem1={require('../images/navbar/like.png')}
                                  RightItem2={require('../images/navbar/message.png')}
                                  />
                </View>
                <View style={{height: 181, marginTop:54}}>
                    <Profile/>
                </View>
                <View style={{flex: 1, marginTop:0, backgroundColor:'#ffffff'}}>
                    <ControllerBuySellInfo/>
                </View>
                <View>
                    <Button title={"Sign Out"} onPress={()=>this.SignOut()}/>
                </View>

            </View>
        );
    }
}