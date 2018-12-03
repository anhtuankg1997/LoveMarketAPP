import React, {Component} from 'react'
import  {View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavBarStyle1, NavBarStyle2} from '../components/NavigationBar/NavBar'
import Advertisement from '../components/NotificationComponents/Advertisement'

import NotificationItem from '../components/NotificationComponents/NotificationItem'

export default class NotificationScreen extends Component{
    render() {
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor={"#9207E5"} barStyle={"light-content"}/>

                <View style={styles.navbar}>
                    <NavBarStyle1 leftItem={require('../images/navbar/back.png')}
                                  Title={"Thông báo"}
                                  RightItem1={require('../images/navbar/like.png')}
                                  RightItem2={require('../images/navbar/message.png')}
                                  RightItem1Event={()=>this.props.navigation.navigate('LikeList')}
                                    />
                </View>

                <ScrollView>

                <View style={styles.adverCon}>
                    <View style={styles.titleSection}>
                        <Text style={styles.textStyle}>Khuyến mãi</Text>
                    </View>
                    <View >
                        <Advertisement OnPress={()=>this.props.navigation.navigate('Advertisement')} />
                    </View>
                </View>

                <View style={styles.adverAct}>
                    <View style={styles.titleSection}>
                        <Text style={styles.textStyle}>Hoạt động</Text>
                    </View>
                    <View style={styles.flatlistN}>
                        <View>
                            <NotificationItem
                                ImageUrl={require('../images/users/hb1.jpg')}
                                Title={"Cu Ben vừa đăng tin Bán đồng hồ quả lắc người yêu cũ tặng 8/3"}
                                Time={"1 giờ trước"} ItemStyle={{backgroundColor: '#E9E8E9'}}/>
                        </View>
                        <View style={styles.item}>
                            <NotificationItem
                                ImageUrl={require('../images/productImage/house1.jpg')}
                                Title={" Tin đăng Bán nhà người yêu cũ của bạn vừa được duyệt thành công"}
                                Time={"2 giờ trước"} ItemStyle={{backgroundColor: '#E9E8E9'}}/>
                        </View>
                        <View style={styles.item}>
                            <NotificationItem
                                ImageUrl={require('../images/productImage/iphoneX.jpg')}
                                Title={" Xin chúc mừng, tin đăng Bán điện thoại iPhone X của bạn vừa được duyệt thành tin hot"}
                                Time={"4 giờ trước"}/>
                        </View>
                        <View style={styles.item}>
                            <NotificationItem
                                ImageUrl={require('../images/productImage/gaubong1.jpg')}
                                Title={" Tin đăng bán gấu bông của người yêu cũ của bạn vừa được duyệt thành công"}
                                Time={"23 giờ trước"}/>
                        </View>
                    </View>
                </View>

                </ScrollView>
            </View>
        );
    }
}


const styles= StyleSheet.create({
    container:{
        flex:1
    },
    navbar:{
        height: 54
    },
    adverCon:{
        width: 100+"%",
        height: 196,
    },
    titleSection:{
      width: 100+"%",
      height: 24,

    },
    textStyle:{
        color: '#183017',
        fontSize: 18,
        marginLeft: 10,
        height: 100+"%",
        width: 100+"%"
    },
    adverAct:{
        marginTop: 9
    },
    flatlistN:{
        marginTop: 4,
        backgroundColor: '#F5F5F5'
    },
    item:{
        marginTop: 5
    }
});