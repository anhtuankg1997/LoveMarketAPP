import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ActivityIndicator, AsyncStorage} from 'react-native';



export default class AuthLoading extends Component{

    constructor(){
        super();
        this.LoadApp();
    }


    LoadApp = async()=>{
        const userToken = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(userToken ? 'App' : 'Auth')
    };

    render(){
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size={'large'} color={'#0400ff'}/>
            </View>
        );
    }
}
