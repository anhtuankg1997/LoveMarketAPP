import React, {Component} from 'react'
import {View, Text, StyleSheet, StatusBar, Image, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {} from '../components/SignInSignUp/InputTextCustom'
import InputTextCustom from "../components/SignInSignUp/InputTextCustom";
import  {ButtonSISUStyle1} from "../components/SignInSignUp/ButtonCustomSISU"



export default class SignupScreen extends Component{
    render(){
        return(
            <LinearGradient colors={['#9B07F3', '#480272']}>
            <View style={styles.container}>
                <StatusBar backgroundColor={'#9207E5'} barStyle={"light-content"}/>

                <View style={styles.SAvatar}>
                    <Image source={require('../images/signin_signup/noAvatar.png')} style={styles.logo}/>
                </View>


                <View style={styles.sectionForm}>
                    <View>
                        <View>
                            <InputTextCustom
                                ImageUrl={require('../images/signin_signup/user.png')}
                                Name={"Tên đăng nhập (*)"}
                                isPassword={false}/>
                        </View>
                        <View style={styles.itemstyle}>
                            <InputTextCustom
                                ImageUrl={require('../images/signin_signup/phone.png')}
                                Name={"Số điện thoại (*)"}
                                isPassword={false} />
                        </View>
                        <View style={styles.itemstyle}>
                            <InputTextCustom
                                ImageUrl={require('../images/signin_signup/pass.png')}
                                Name={"Mật khẩu (*)"}
                                isPassword={true} />
                        </View>
                        <View style={styles.itemstyle}>
                            <InputTextCustom
                                ImageUrl={require('../images/signin_signup/confirmpass.png')}
                                Name={"Xác nhận mật khẩu (*)"}
                                isPassword={true} />
                        </View>
                        <View style={styles.itemstyle}>
                            <InputTextCustom
                                ImageUrl={require('../images/signin_signup/mail.png')}
                                Name={"Email (*)"}
                                isPassword={false} />
                        </View>
                        <View style={styles.itemstyle}>
                            <InputTextCustom
                                ImageUrl={require('../images/signin_signup/fb.png')}
                                Name={"Facebook (*)"}
                                isPassword={false}
                                styleIcon={{width: 9, height: 18}} sectionIc={{marginLeft: 19}} sectionText={{marginLeft: 9}}/>
                        </View>
                    </View>

                    <View style={styles.btnSection}>
                        <ButtonSISUStyle1 Name={"Đăng ký"} />
                    </View>
                </View>


                <View style={styles.SmoveLG}>
                    <Text style={styles.textM}>Bạn đã có tài khoản?  </Text>
                    <TouchableOpacity>
                    <Text style={[styles.textM,{textDecorationLine: 'underline'}]} onPress={()=>this.props.navigation.navigate('Login')}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </LinearGradient>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        width: 100+"%",
        height: 100+ "%",
    },
    SAvatar:{
        height: 130,
        width: 130,
        marginTop: 40,
        marginLeft: 115
    },
    sectionForm:{
        height: 330,
        width: 265,
        marginTop: 18,
        marginLeft: 48,
    },
    SmoveLG:{
        height: 22,
        width: 206,
        marginTop: 24,
        marginLeft: 77,
        flexDirection: 'row'
    },
    logo:{
        width: 130,
        height: 130
    },
    itemstyle:{
        marginTop:6
    },
    btnSection:{
        marginTop: 12,
        alignItems: "center"
    },
    textM:{
        fontSize: 14,
        color: 'white',
        fontFamily: 'SourceSerifPro-Regular'
    }
});