import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, KeyboardAvoidingView, StatusBar} from 'react-native'

import {NavBarStyle4} from '../components/NavigationBar/NavBar'

export default class Test extends Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor={'#9207E5'} barStyle={'light-content'}/>
                <View style={styles.header}>
                    <NavBarStyle4 ImageUrl={require('../images/navbar/back.png')}
                                  OnPress={()=>this.props.navigation.goBack()} Title={"Đăng bài"} />
                </View>

                <KeyboardAvoidingView enabled behavior={'padding'} style={styles.main}>
                    <TextInput style={{width: 300, height: 50, backgroundColor: 'white', marginTop: 20, marginLeft: 20}}/>
                    <TextInput style={{width: 300, height: 50, backgroundColor: 'white', marginTop: 20, marginLeft: 20}}/>
                    <TextInput style={{width: 300, height: 50, backgroundColor: 'white', marginTop: 20, marginLeft: 20}}/>
                    <TextInput style={{width: 300, height: 50, backgroundColor: 'white', marginTop: 20, marginLeft: 20}}/>
                    <TextInput style={{width: 300, height: 50, backgroundColor: 'white', marginTop: 20, marginLeft: 20}}/>
                </KeyboardAvoidingView>

            </View>
        )
    }
}


const styles= StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        width: 100+"%",
        height: 54,
    },
    main:{
        width: 100+"%",
        height: 586,
        backgroundColor: 'yellow',
    },

});