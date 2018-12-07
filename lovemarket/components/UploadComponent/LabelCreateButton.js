import React, {Component} from 'react'
import {View, Text, TouchableOpacity,StyleSheet, Image} from 'react-native'


export default class LabelCreateButton extends Component{
    render(){
        return(
            <TouchableOpacity>
            <View style={styles.container}>
                <View style={{position: 'absolute', top:4, right: 4 }}>
                    <Image source={require('../../images/Upload/ask-question.png')} style={{width: 18, height: 18}}/>
                </View>
                <View style={styles.imagemainSection}>
                    <Image source={this.props.imageUrl} style={styles.imageLabel}/>
                </View>
                <View style={styles.nameSection}>
                    <Text style={styles.nameText}>{this.props.name}</Text>
                </View>
                <View style={styles.daySection}>
                    <Text style={styles.dayText}>{this.props.day}</Text>
                </View>
                <View style={styles.costSection}>
                    <Text style={styles.costText}>{this.props.cost}</Text>
                </View>
            </View>
            </TouchableOpacity>
        );
    }
}


const styles= StyleSheet.create({
    nameSection:{
        height: 16,
        width: 100+"%",
        alignItems: 'center',
        marginTop: 7
    },
    daySection:{
        height:12,
        width: 100+"%",
        alignItems: 'center'
    },
    costSection:{
      height: 14,
      width: 100+"%",
      marginTop: 39,
        alignItems: 'center'
    },
    container:{
        width: 105,
        height: 148,
        backgroundColor: '#F1F1F1',
    },
    imagemainSection:{
        width: 100+"%",
        height: 40,
        marginTop: 16,
        alignItems: 'center',
    },
    imageLabel:{
        width: 40,
        height: 40
    },
    nameText:{
        fontSize: 12,
        color: '#707070',
        fontFamily: 'SourceSerifPro-Regular'
    },
    dayText:{
        fontSize: 9,
        color: '#7A7777',
        fontFamily: 'SourceSerifPro-Regular'
    },
    costText:{
        fontSize: 10,
        color: '#FF0007',
        fontFamily: 'SourceSerifPro-Regular'
    }
});