import React,{Component} from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

export default class  ItemBuySell extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Image source={this.props.item.image} style={styles.imageS}/>
                <Text style={styles.textS}>{this.props.item.name}</Text>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container:{
        marginTop: 2,
        flexDirection: 'row',
        width: 100+"%",
        height: 60,
        backgroundColor: '#F7F7F7',
    },
    imageS:{
        width: 50,
        height: 50,
        marginTop: 5,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 25,
        resizeMode: 'cover'
    },
    textS:{
        marginTop: 18,
        marginLeft: 12,
        fontSize: 17,
        fontFamily: 'SourceSerifPro-Regular'
    }
});