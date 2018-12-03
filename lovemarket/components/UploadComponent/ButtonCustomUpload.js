import React, {Component} from 'react'
import {View, Text, StyleSheet,  Image, TouchableOpacity} from 'react-native'



export default class ButtonCustomUpload extends Component{
    constructor(props) {
        super(props);
    }


    render(){
        return(
            <TouchableOpacity onPress={this.props.OnPress}>
            <View style={styles.container}>
                <View style={styles.iconTextSection}>
                    <Image source={require('../../images/Upload/breaklove.png')} style={styles.image}/>
                    <Text style={styles.textS}>Đăng tin</Text>
                </View>
            </View>
            </TouchableOpacity>
        );
    }
}


const styles= StyleSheet.create({
   container:{
       width: 170,
       height: 42,
       backgroundColor: '#0CF800',
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center'
   },
    iconTextSection:{
       width: 85,
        height: 20,
        flexDirection: 'row'
    },
    image:{
       width: 20,
        height: 20,
    },
    textS:{
       fontSize: 15,
        color:'#ffffff',
        fontWeight: 'bold',
        marginLeft: 5
    }
});