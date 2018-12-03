import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'

//Not icon
class ButtonSISUStyle1 extends Component{
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <TouchableOpacity onPress={this.props.OnPress}>
            <View style={[styles.container, this.props.style]}>
                <Text style={[styles.textStyle, this.props.styleN]}>{this.props.Name}</Text>
            </View>
            </TouchableOpacity>
        );
    }
}

//Include Icon
class ButtonSISUStyle2 extends Component{
    render() {
        return (
            <TouchableOpacity>
                <View style={[styles.container2, this.props.style1]}>
                    <View style={this.props.styleIconS}>
                        <Image source={this.props.ImageUrl} style={this.props.styleIcon} />
                    </View>
                    <View style={this.props.styleTextS}>
                        <Text style={[styles.textStyle1, this.props.styleN]}>{this.props.Name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

module.exports = {
  ButtonSISUStyle1,
    ButtonSISUStyle2
};

const  styles= StyleSheet.create({
    container:{
        width: 120,
        height: 36,
        backgroundColor: '#0CF800',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container2:{
        width: 120,
        height: 36,
        backgroundColor: '#0CF800',
        flexDirection: 'row'
    },
    textStyle:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    textStyle1:{
        color: 'white',
        fontSize: 13,
        marginTop: 10
    }
});