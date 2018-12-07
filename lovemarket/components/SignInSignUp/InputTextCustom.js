import React,{Component} from 'react'
import {View, StyleSheet, Image, TextInput} from 'react-native'


export default class InputTextCustom extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={[styles.iconS, this.props.sectionIc]}>
                    <Image source={this.props.ImageUrl} style={[styles.imageS, this.props.styleIcon]}/>
                </View>
                <View style={[styles.inputS,this.props.sectionText]}>
                    <TextInput style={styles.inputC} secureTextEntry={this.props.isPassword} placeholder={this.props.Name} placeholderTextColor={"#ffffff"}/>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        width: 265,
        height: 42,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20,
        borderColor: 'rgba(255, 255, 255, 0)'
    },
    iconS:{
        width: 18,
        height: 18,
        marginLeft: 15
    },
    imageS:{
        width: 18,
        height: 18,
    },
    inputS:{
        width: 200,
        height: 40,
        marginLeft: 12,
        marginTop: 6,
    },
    inputC:{
        width: 200,
        height: 40,
        fontSize: 13,
        color:'#ffffff',
        fontFamily: 'SourceSerifPro-Regular'
    }
});