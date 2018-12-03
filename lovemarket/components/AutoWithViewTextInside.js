import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'


export default class AutoWithViewTextInside extends Component{
    render(){
        return(
            <View style={[styles.container, this.props.customView]}>
                <Text style ={[styles.TextCS, this.props.customText]}>{this.props.Name}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
   container:{
       backgroundColor: 'black',
       alignSelf: 'flex-start',
       paddingHorizontal: 27,
       paddingVertical: 10,
       borderRadius: 25
   } ,
    TextCS:{
        color: 'white',
    }
});