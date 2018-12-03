import React, {Component} from 'react'
import {View, Text, TouchableOpacity,StyleSheet, Image} from 'react-native'


export default class PopArticleButton extends Component{
    render(){
        return(
            <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.imageMainSection}>
                    <Image source={require('../../images/Upload/back_top.png')} style={styles.imageMain}/>
                    <Text style={[styles.addText, this.props.Style]}>{this.props.Combo}</Text>
                </View>
                <View style={styles.sectionText}>
                    <Text style={styles.text1}>{this.props.label}</Text>
                    <Text style={styles.text2}>{this.props.day}</Text>
                    <Text style={styles.text3}>{this.props.cost}</Text>
                </View>
                <View style={styles.askSection}>
                    <Image source={require('../../images/Upload/ask-question.png')} style={styles.askImage}/>
                </View>
            </View>
            </TouchableOpacity>
        );
    }

}


const styles= StyleSheet.create({
   container:{
       width: 148,
       height: 105,
       backgroundColor: '#F1F1F1',
   },
    imageMainSection:{
       marginTop: 10,
        height: 40,
        width: 100+"%",
        flexDirection: 'row',
        justifyContent: 'center'
    },
    imageMain:{
       width: 40,
        height: 40,
    },
    sectionText:{
       width: 100+"%",
        height: 52,
        alignItems: 'center'
    },
    text1:{
       fontSize: 12,
        color: '#707070',
    },
    text2:{
       fontSize: 9,
        color: '#7A7777',
    },
    text3:{
       marginTop: 10,
        fontSize: 10,
        color: '#FF0007'
    },
    askSection:{
       position: 'absolute',
        width: 18,
        height: 18,
        right:3,
        top:4
    },
    askImage:{
       width: 18,
        height: 18
    },
    addText:{
       fontSize: 10,
        color: '#81B47E',
        marginLeft:3,
        marginTop: 27
    }
});