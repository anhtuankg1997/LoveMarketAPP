import React, {Component} from 'react'
import {View, Text, Button, AsyncStorage, Image, StyleSheet, StatusBar, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import InputTextCustom from '../components/SignInSignUp/InputTextCustom'
import {ButtonSISUStyle1,ButtonSISUStyle2} from '../components/SignInSignUp/ButtonCustomSISU'

export default class Login extends Component{

    signIn = async()=>{
        await AsyncStorage.setItem('userToken','tuan');
        this.props.navigation.navigate('AuthLoading');
    };

    render(){
        return(
            <LinearGradient  colors={['#9B07F3', '#480272']}>
            <View style={styles.container}>
                <StatusBar backgroundColor={'#9207E5'} barStyle={'light-content'}/>

                <View style={styles.logoContainer}>
                <Image source={require('../images/Logo.png')} style={styles.logo} />
                </View>

                <View style={styles.loginForm}>
                    <View>
                        <InputTextCustom
                            ImageUrl={require('../images/signin_signup/user.png')}
                            Name={"Tên đăng nhập"}
                            isPassword={false}/>
                    </View>
                    <View style={{marginTop: 5}}>
                        <InputTextCustom
                            ImageUrl={require('../images/signin_signup/pass.png')}
                            isPassword={true}
                            Name={"Mật khẩu"}/>
                    </View>
                    <View style={{marginTop: 12}}>
                        <ButtonSISUStyle1 Name={"Đăng nhập"} OnPress={()=>this.signIn()}/>
                    </View>
                    <View style={styles.moveSignup}>
                        <Text style={styles.normalText}>Bạn chưa có tài khoản?  </Text>
                        <TouchableOpacity>
                        <Text style={styles.underLineText} onPress={()=>this.props.navigation.navigate('SignUp')}>Tạo tài khoản</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.diffLogin}>
                    <View style={styles.line1}>
                        <View>
                            <Image source={require('../images/signin_signup/line.png')} style={{width: 60, marginTop: 11}}/>
                        </View>
                        <View style={{marginLeft: 12.5, marginRight: 13.5}}>
                            <Text style={styles.normalText1}>Hoặc đăng nhập với</Text>
                        </View>
                        <View>
                            <Image source={require('../images/signin_signup/line.png')} style={{width: 60, marginTop: 11}}/>
                        </View>
                    </View>

                    <View style={styles.line2}>
                        <ButtonSISUStyle2 styleIcon={{width: 9, height: 18, marginRight: 6}}
                                          styleIconS={{marginLeft:22, marginTop:8}}
                                          Name={"Facebook"}
                                          ImageUrl={require('../images/signin_signup/fb.png')}
                                          style1={{backgroundColor: '#375194'}}/>
                        <ButtonSISUStyle2 styleIcon={{width: 16, height: 17, marginRight: 7}}
                                          styleIconS={{marginLeft:28, marginTop:9}}
                                          Name={"Google"}
                                          ImageUrl={require('../images/signin_signup/gg.png')}
                                          style1={{marginLeft:12, backgroundColor: '#DD4B39'}}/>
                    </View>
                </View>

            </View>
            </LinearGradient>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        width: 100 + "%", height: 100+ "%", flexDirection: 'column',
    },
    logoContainer:{
        marginTop: 70,
        marginLeft: 119
    },
    logo:{
        width: 122,
        height: 122,
    },
    loginForm:{
        marginTop: 44,
        alignItems: 'center'
    },
    moveSignup:{
        marginTop: 18,
        flexDirection: 'row'
    },
    normalText:{
        fontSize: 14,
        color:'white'
    },
    normalText1:{
        fontSize: 13,
        color:'white'
    },
    underLineText:{
        fontSize: 14,
        color:'white',
        textDecorationLine: 'underline',
        textDecorationColor: 'white'
    },
    diffLogin:{
        marginTop: 72,
        width: 264,
        height: 66,
        marginLeft: 48,
    },
    line1:{
        flexDirection:'row'
    },
    line2:{
        width: 252,
        height: 36,
        marginTop: 12,
        marginLeft: 6,
        alignItems: 'center',
        flexDirection: 'row'
    }
});