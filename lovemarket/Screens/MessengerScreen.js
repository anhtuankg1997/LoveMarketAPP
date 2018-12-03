import React, {Component} from 'react'
import {View, Text, StatusBar, StyleSheet, ScrollView} from 'react-native'
import {NavBarStyle3} from '../components/NavigationBar/NavBar'
import MessageList from '../components/MessageComponent/MessageList'

export default class MessengerScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.head}>
                    <NavBarStyle3 LeftIcon={require('../images/navbar/back.png')}
                                  Title={"Tin nhắn"}
                                  RightIcon ={require('../images/navbar/removeICO.png')}
                                  styleTextInput={{width: 280}} styleIconRight={{width: 14, height: 14, marginTop: 20}}/>
                </View>
                <ScrollView style={styles.main}>
                    <View style={styles.sectionMessage}>
                        <MessageList avatarUrl={require('../images/users/hg1.jpg')}
                                     username={"Uyen Huynh"}
                                     message={"Cho mình đặt hàng"}
                                     numMess={require('../images/message/m1.png')} time={"9:30"} date={"20/11/2018"}
                                     imageLeft={require('../images/productImage/donghodeotay2.jpg')}
                                     styleDetail={{color:'#FF0007'}}
                        />
                    </View>
                    <View style={styles.sectionMessage}>
                        <MessageList avatarUrl={require('../images/users/hg4.jpg')}
                                     username={"Mỹ Vân"}
                                     message={"Bạn tới chỗ hẹn chưa?"}
                                     numMess={require('../images/message/m2.png')} time={"10:12"} date={"20/11/2018"}
                                     imageLeft={require('../images/productImage/donghodeotay1.jpg')}
                                     imageRight={require('../images/productImage/donghodeotay2.jpg')}
                                     styleDetail={{color:'#FF0007'}}
                        />
                    </View>
                    <View style={styles.sectionMessage}>
                        <MessageList avatarUrl={require('../images/users/hg7.jpg')}
                                     username={"Phương Uyên"}
                                     message={"Có giảm giá không bạn?"}
                                     numMess={require('../images/message/m1.png')} time={"15:30"} date={"20/11/2018"}
                                     styleDetail={{color:'#FF0007'}}
                        />
                    </View>
                    <View style={styles.sectionMessage}>
                        <MessageList avatarUrl={require('../images/users/hb2.jpg')}
                                     username={"Nhật Minh"}
                                     message={"Cảm ơn"}
                                     time={"6:50"} date={"20/11/2018"}
                        />
                    </View>
                    <View style={styles.sectionMessage}>
                        <MessageList avatarUrl={require('../images/users/hb1.jpg')}
                                     username={"Hoài Thanh"}
                                     message={"Hẹn gặp bạn lần sau"}
                                     time={"7:30"} date={"20/11/2018"}
                                     imageLeft={require('../images/productImage/donghodeotay2.jpg')}
                        />
                    </View>

                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#E9E8E9'
    },
    head:{
        width: 100+"%",
        height: 54
    },
    main:{
        width: 100+"%",
        height: 586,
    },
    sectionMessage:{
        height: 100,
        width: 100+"%",
        marginTop: 5,
        alignItems: 'center'
    }
});