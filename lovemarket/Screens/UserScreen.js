import React, {Component} from 'react'
import {View, Text, StatusBar, AsyncStorage, Button, Image, TouchableOpacity, StyleSheet} from 'react-native'

import {NavBarStyle1} from '../components/NavigationBar/NavBar'

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
                                  RightItem1Event={()=>this.props.navigation.navigate('LikeList')}
                                  RightItem2Event={()=>this.props.navigation.navigate('MessengerScreen')}
                                  />
                </View>
                <View style={{height: 181, marginTop:54}}>
                        <View style={styles.container1}>
                            <Image  source={require('../images/users/serum.jpg')} style={styles.avatar}/>
                            <View style={styles.ctNameSetting}>
                                <View style={styles.line1}>
                                    <View style={styles.sizeName}>
                                        <Text style={styles.username}>Uyên Huỳnh</Text>
                                    </View>
                                    <TouchableOpacity onPress={()=>this.SignOut()}>
                                        <Image source={require('../images/LogOut.png')} style={styles.setting} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.line2}>
                                    <View style={styles.follower}>
                                        <Text style={styles.textDetail}>500</Text>
                                        <Text style={styles.textLabel}>Người theo dõi</Text>
                                    </View>
                                    <View style={styles.following}>
                                        <Text style={styles.textDetail}>5k</Text>
                                        <Text style={styles.textLabel}>Đang theo dõi</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.contact}>
                            <TouchableOpacity>
                                <Image source={require('../images/profile/facebook.png')} style={styles.iconcontact}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <Image source={require('../images/profile/google.png')} style={[styles.iconcontact, {marginLeft: 6}]}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <Image source={require('../images/profile/phone.png')} style={[styles.iconcontact, {marginLeft: 6}]}/>
                            </TouchableOpacity>
                        </View>

                </View>
                <View style={{flex: 1, marginTop:0, backgroundColor:'#ffffff'}}>
                    <ControllerBuySellInfo/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container1:{
        height: 135,
        width: 100+"%",
        flexDirection: 'row'
    },
    avatar:{
        width: 120,
        height: 120,
        marginTop: 15,
        marginLeft: 15,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 60
    },
    ctNameSetting:{
        marginLeft: 6,
        marginTop: 32,
        width: 100+"%",
        height: 28
    },
    sizeName:{
        width: 179
    },
    setting:{
        width: 25,
        height: 25,
        marginRight: 15
    },
    line1:{
        flexDirection: 'row',
        width: 219,
        justifyContent: 'center',
        alignItems: 'center'
    },
    username:{
        fontSize: 21, fontFamily: 'SourceSerifPro-Regular'
    },
    line2:{
        width: 191,
        height: 46,
        flexDirection: 'row',
        marginLeft: 12,
        marginTop: 23
    },
    textLabel:{
        fontSize: 13, fontFamily: 'SourceSerifPro-Regular'
    },
    textDetail:{
        fontSize: 19, fontFamily: 'SourceSerifPro-Regular'
    },
    follower:{
        alignItems: 'center'
    },
    following:{
        marginLeft: 17,
        alignItems: 'center'
    },
    contact:{
        width: 102,
        height: 30,
        marginLeft: 24,
        marginTop: 6,
        flexDirection: 'row'
    },
    iconcontact:{
        height: 30, width: 30,
    }
});