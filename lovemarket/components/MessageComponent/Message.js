import React, {Component} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

class MessageShort extends Component{
    render(){
        return(
            <View style={[styles.messageShort, this.props.styleMessageShort]}>
                <Text style={styles.messageText}>{this.props.messageText}</Text>
            </View>
        );
    }
}


class FromUserMessage extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.avatarSection}>
                    <Image source={this.props.avatarUrl} style={styles.imageC}/>
                </View>
                <View style={styles.timemessSection}>
                    <View style={styles.timeSection}>
                        <Text style={styles.textTime}>{this.props.time}</Text>
                    </View>
                    <View style={styles.messageSection}>
                        <MessageShort messageText={this.props.message} styleMessageShort={{backgroundColor:'#72CF6D'}}/>
                    </View>
                </View>

            </View>
        );
    }
}

class ImageFromUserMessage extends Component{
    render(){
        return(
            <View style={styles.containerImage}>
                <Image source={this.props.imageUrl} style={styles.imageMessage}/>
            </View>
        );
    }
}

class ToUserMessage extends Component{
    render(){
        return(
            <View style={[styles.container,{justifyContent: 'flex-end', right: 10}]}>
                <View style={styles.timemessSection}>
                    <View style={styles.timeSection}>
                        <Text style={[styles.textTime]}>{this.props.time}</Text>
                    </View>
                    <View style={styles.messageSection}>
                        <MessageShort messageText={this.props.message} styleMessageShort={{backgroundColor:'#FD8689'}}/>
                    </View>
                </View>

            </View>
        );
    }
}



module.exports={
    FromUserMessage : FromUserMessage,
    ToUserMessage : ToUserMessage,
    ImageFromUserMessage: ImageFromUserMessage
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 10,
        flexDirection: 'row',
        marginLeft: 10
    },
    containerImage:{
        width: 100+"%",
        height: 140,
    },
    avatarSection:{
      width: 48,
      height: 48,
      borderRadius: 24,
    },
    messageShort:{
        padding: 10,
        borderRadius: 10,
    },
    messageText:{
        fontSize: 10,
        color: '#ffffff',
        fontFamily: 'SourceSerifPro-Semibold'
    },
    messageSection:{
        marginTop: 5
    },
    timemessSection:{
        marginLeft: 10,
    },
    textTime:{
        fontSize: 10,
        color: 'rgba(0, 0, 0, 0.5)',
        fontFamily: 'SourceSerifPro-Regular'
    },
    imageC:{
        width: 48,
        height: 48,
        borderRadius: 24
    },
    imageMessage:{
        width: 210,
        height: 100+"%",
        borderRadius: 5,
        borderColor: '#ffffff',
        marginLeft: 69,
        marginTop: 5,
        borderWidth: 1
    }

});