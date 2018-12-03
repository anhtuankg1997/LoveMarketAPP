import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, KeyboardAvoidingView, StatusBar} from 'react-native'

import {NavBarStyle4} from '../components/NavigationBar/NavBar'

export default class PostBlogArticleScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor={'#9207E5'} barStyle={'light-content'}/>
                <View style={styles.header}>
                    <NavBarStyle4 ImageUrl={require('../images/navbar/back.png')}
                                  OnPress={()=>this.props.navigation.goBack()} Title={"Đăng bài"} />
                </View>
                <KeyboardAvoidingView enabled behavior={"padding"} keyboardVerticalOffset={'keyboardVerticalOffset'} style={styles.main} >
                        <View style={styles.inputSection}>
                            <TextInput style={styles.textStyle}/>
                        </View>

                        <View style={styles.bottomSection}>

                        </View>
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
    Main:{
        flexDirection: 'row',
        width: 100+"%",
        height: 94+"%",
    },
    Edit:{
        width: 100+"%",
        height: 6+"%",
        backgroundColor:'blue'
    },
    editTextSection:{
       width: 100+"%",
        height:20+"%",
        backgroundColor: 'green'
    },
    avatarSection:{
       width: 32,
        height: 32,
        marginTop: 23,
        marginLeft: 14,
        backgroundColor: 'red'
    },
    inputSection:{
       width: 100+"%",
        height: 272,
        backgroundColor: 'red',
        marginLeft: 5,
        marginTop: 23
    },
    textInStyle:{
       width: 100+"%",
        height: 50,
        backgroundColor: 'white',
        textAlignVertical: 'top'
   },
    bottomSection:{
       backgroundColor: 'blue',
        width: 100+"%",
        height: 32,
        position: 'absolute',
        bottom: 0
   }
});