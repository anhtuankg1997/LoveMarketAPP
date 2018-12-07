import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'


export default class MessageList extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <TouchableOpacity onPress={this.props.OnPress}>
            <View style={styles.container}>
                <View style={styles.avatarSection}>
                    <Image source={this.props.avatarUrl} style={styles.avatar}/>
                </View>
                <View style={styles.MessageSection}>
                    <Text style={styles.username}>{this.props.username}</Text>
                    <Text style={[styles.detail, this.props.styleDetail]}>{this.props.message}</Text>
                    <View style={styles.numMessage}>
                        <Image source={this.props.numMess} style={styles.numMess}/>
                    </View>
                </View>
                <View style={styles.infoSection}>
                    <Text style={styles.time}>{this.props.time}</Text>
                    <Text style={[styles.time, {top: 22}]}>{this.props.date}</Text>
                    <Image source={this.props.imageLeft} style={[styles.image, {right: 10}]} />
                    <Image source={this.props.imageRight} style={styles.image} />
                </View>
            </View>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        width: 350,
        height: 100,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ffffff'
    },
    avatarSection:{
        width: 90,
        height: 100,
    },
    MessageSection:{
        width: 165,
        height: 100,
    },
    infoSection:{
        width: 95,
        height: 100,
    },
    avatar:{
        width: 80,
        height: 80,
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 40
    },
    username:{
        marginLeft: 10,
        marginTop: 20,
        fontSize: 16,
        color: '#183017',
        fontFamily: 'SourceSerifPro-Regular'
    },
    detail:{
        marginTop: 19,
        fontSize: 14,
        color: '#183017',
        marginLeft: 10,
        fontFamily: 'SourceSerifPro-Regular'
    },
    numMessage:{
        width: 20, height: 20,
        position: 'absolute',
        top: 21,
        right: 11
    },
    numMess:{
        width: 20,
        height: 20,
        backgroundColor: '#ffffff'
    },
    time:{
        position: 'absolute',
        right: 10,
        top: 6,
        fontSize: 12,
        color: '#9a9a9a',
        fontFamily: 'SourceSerifPro-Regular'
    },
    image:{
        width: 40,
        height: 40,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        bottom: 16
    }
});