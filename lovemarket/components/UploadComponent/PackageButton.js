import React, {Component} from 'react'
import {View, Text, TouchableOpacity,StyleSheet, Image} from 'react-native'


export default class PackageButton extends Component{
    render(){
        return(
            <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.imageMainSection}>
                    <Image source={this.props.imageUrl} style={[styles.image, this.props.style]}/>
                </View>
                <View style={styles.text1Section}>
                    <Text style={styles.text1}>{this.props.name}</Text>
                </View>
                <View style={styles.text2Section}>
                    <Text style={styles.text2}>{this.props.day}</Text>
                </View>
                <View style={styles.text3Section}>
                    <Text style={styles.text3}>{this.props.cost}</Text>
                </View>
                <View style={styles.askSection}>
                    <Image source={require('../../images/Upload/ask-question.png')} style={styles.ask}/>
                </View>
            </View>
            </TouchableOpacity>
        )
    }
}


const  styles= StyleSheet.create({
    askSection:{
      position: 'absolute',
      top: 4,
      right: 3
    },
    ask:{
      width: 18,
      height: 18
    },
    image:{
      width: 46,
      height: 44
    },
    container:{
        width: 168,
        height: 105,
        backgroundColor: '#FFFE87'
    },
    imageMainSection:{
        width: 100+"%",
        height: 44,
        marginTop: 5,
        alignItems: 'center'
    },
    text1Section:{
        width: 100+"%",
        height: 16,
        alignItems: 'center',
    },
    text2Section:{
        width: 100+"%",
        height: 12,
        alignItems: 'center',
    },
    text3Section:{
        width: 100+"%",
        height: 16,
        alignItems: 'center',
        marginTop: 10,
    },
    text1:{
        fontSize: 12,
        color: '#0CF800'
    },
    text2:{
        fontSize: 9,
        color: '#7A7777'
    },
    text3:{
        fontSize: 10,
        color: '#FF0007',
        fontWeight: 'bold'
    }
});