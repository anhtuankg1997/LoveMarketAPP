import React, {Component} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'


export default class NotificationItem extends Component{
    render(){
        return(
            <View style={[styles.container, this.props.ItemStyle]}>
                <View style={styles.line1}>
                    <View style={styles.imageSection}>
                        <Image source={this.props.ImageUrl} style={styles.avatar}/>
                    </View>
                    <View style={styles.textSection}>
                        <Text style={styles.textTitle}>{this.props.Title}</Text>
                    </View>
                </View>
                <View style={styles.line2}>
                    <Text style={styles.textTime}>{this.props.Time}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width: 100 + "%",
        height: 100,
        backgroundColor: 'white'
    },
    line1:{
        width: 323,
        height: 62,
        marginTop: 19,
        marginLeft: 26,
        flexDirection: 'row'
    },
    line2:{
        width: 200,
        height: 15,
        marginLeft: 91
    },
    imageSection:{
        width: 62, height: 62,
    },
    avatar:{
        width: 62, height: 62, borderRadius: 31
    },
    textSection:{
        width: 257,
        marginLeft: 4
    },
    textTitle:{
        fontSize: 11,
        color: '#183017'
    },
    textTime:{
        fontSize: 11,
        color: 'rgba(24, 48, 23, 0.3)'
    }

});