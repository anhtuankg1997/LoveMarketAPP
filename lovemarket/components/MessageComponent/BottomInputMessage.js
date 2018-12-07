import React, {Component}  from 'react'
import {View, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native'


export default class BottomInputMessage extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity>
                <Image source={require('../../images/message/camera.png')} style={styles.camera}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../images/message/image.png')} style={styles.image}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.OnPress}>
                    <Image source={require('../../images/message/maker.png')} style={styles.maker}/>
                </TouchableOpacity>
                <View style={styles.TextInS}>
                    <TextInput style={styles.TextIn}
                               placeholder={'Nhập tin nhắn'}/>
                </View>
                <TouchableOpacity>
                    <Image source={require('../../images/message/sent-mail.png')} style={styles.sent}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container:{
       width: 100+"%",
       height: 54,
       backgroundColor: '#9A06F2',
       flexDirection: 'row'
   },
    camera:{
       width:26,
        height: 22,
        marginTop: 16,
        marginLeft: 18
    },
    image:{
       width:28,
        height: 22,
        marginTop: 16,
        marginLeft: 19
    },
    sent:{
        width: 24,
        height: 24,
        marginTop: 15,
        marginLeft: 15
    },
    maker:{
       width: 14,
        height: 22,
        marginTop: 16,
        marginLeft: 19
    },
    TextInS:{
        width: 160, height: 34, backgroundColor: '#ffffff',marginLeft: 22, borderRadius: 20, marginTop:10
    },
    TextIn:{
        left: 0, right: 0, height: 100+"%", width: 100+"%", fontSize:10, fontFamily: 'SourceSerifPro-Regular'
    }
});