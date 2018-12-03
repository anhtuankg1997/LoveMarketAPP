import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'

export default class TextInputUploadCustom extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.Title}</Text>
                <View style={styles.textInputSection}>
                    <TextInput placeholder={this.props.placeholder} placeholderTextColor={"#484848"} style={styles.textInputStyle}/>
                    <View style={styles.line}/>
                </View>
            </View>
        );
    }
}



const styles= StyleSheet.create({
    container:{
        width: 250,
        height: 50,
    },
    title:{
      width: 100+"%",
      fontSize: 14,
      color: '#000000',
        fontWeight: 'bold'
    },
    textInputSection:{
        height: 40,
        width : 100+"%"
    },
    textInputStyle:{
        fontSize: 14,
        backgroundColor: '#EBEBEB',
        padding: 0,
    },
    line:{
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
    }
});