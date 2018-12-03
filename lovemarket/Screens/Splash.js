import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ActivityIndicator, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'


export default class Splash extends Component{



    componentDidMount(){
        this.timeoutHandle = setTimeout(()=>{
            this.props.navigation.navigate('Login');
        }, 5000);
    }

    render(){
        return(
            <LinearGradient colors={['#9B07F3', '#480272']}>
            <View style={{height: 100+"%", width: 100+"%"}}>
                <StatusBar backgroundColor={'#9207E5'} barStyle={"light-content"}/>
                <View style={styles.coLogo}>
                        <Image source={require('../images/Logo.png')} style={styles.logo}/>
                </View>
                    <ActivityIndicator size={'large'} color={'white'} style={{marginTop: 90}}/>
                <View style={styles.loadingT}>
                    <Text style={styles.loadingText}>Loading...</Text>
                </View>


                <View style={styles.info}>
                    <View style={styles.Tleft}>
                        <Text style={styles.textShow}>Version 0.1</Text>
                    </View>
                    <View style={styles.Tright}>
                        <Text style={styles.textShow}>Nhóm DTTV</Text>
                    </View>
                </View>
            </View>
            </LinearGradient>
        );
    }
}


const styles= StyleSheet.create({
    coLogo:{
        width: 100+"%",
        height: 122,
        marginTop: 96,
        marginLeft: 119
    },
    logo:{
        width: 122,
        height: 122
    },
    loading:{
        marginTop: 90,
        marginLeft: 130
    },
    loadingT:{
        marginTop: 11,
        marginLeft: 130,
    },
    loadingText:{
        fontSize: 23,
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    info:{
        width: 100+"%",
        height: 24,
        bottom : 0,
        flexDirection: 'row',
        position:'absolute'
    },
    textShow:{
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    Tleft:{
        left: 9,
        position: 'absolute'
    },
    Tright:{
        right: 9,
        position: 'absolute'
    }
});