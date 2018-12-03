import React,{Component} from 'react'
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { withNavigation } from 'react-navigation';

class BottomNavigation extends Component{
    constructor(props) {
        super(props);

    }


    render(){
        return(
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('CategoryDetailScreen')}>
                    <Image source={this.props.ImageUrl} style={styles.categoryimage}/>
                    </TouchableOpacity>
                    <Text style={styles.categorytext}>{this.props.Name}</Text>
                </View>
        );
    }
}

export default withNavigation(BottomNavigation);


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F1F3F1',
        flex: 1,
        alignItems: 'center',
        position: 'absolute',
        width: 72,
        height: 70
    },
    categoryimage:{
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 0.5,
        borderColor: "#ffffff",
        resizeMode: 'cover'
    },
    categorytext:{
        fontSize: 10,
        fontFamily: 'SourceSerifPro-Regular',
        color: "#000000",
        marginTop: 6,
    }


});