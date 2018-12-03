import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, AsyncStorage} from 'react-native'


export default class  Profile extends Component {


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container1}>
                    <Image  source={require('../../images/users/serum.jpg')} style={styles.avatar}/>
                    <View style={styles.ctNameSetting}>
                        <View style={styles.line1}>
                            <View style={styles.sizeName}>
                            <Text style={styles.username}>Nguyen Van A</Text>
                            </View>
                            <TouchableOpacity>
                            <Image source={require('../../images/profile/settings.png')} style={styles.setting} />
                            </TouchableOpacity>
                    </View>
                        <View style={styles.line2}>
                            <View style={styles.follower}>
                                <Text style={styles.textDetail}>50</Text>
                                <Text style={styles.textLabel}>Người theo dõi</Text>
                            </View>
                            <View style={styles.following}>
                                <Text style={styles.textDetail}>50</Text>
                                <Text style={styles.textLabel}>Đang theo dõi</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.contact}>
                    <Image source={require('../../images/profile/facebook.png')} style={styles.iconcontact}/>
                    <Image source={require('../../images/profile/google.png')} style={[styles.iconcontact, {marginLeft: 6}]}/>
                    <Image source={require('../../images/profile/phone.png')} style={[styles.iconcontact, {marginLeft: 6}]}/>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        height: 181,
        width: 100+"%",
        backgroundColor: '#ffffff'
    },
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
        fontSize: 21
    },
    line2:{
        width: 191,
        height: 46,
        flexDirection: 'row',
        marginLeft: 12,
        marginTop: 23
    },
    textLabel:{
        fontSize: 13,
    },
    textDetail:{
        fontSize: 19
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