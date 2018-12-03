import React,{Component} from 'react'
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import SwiperFlatList from 'react-native-swiper-flatlist';


export default class Advertisement extends Component{
    constructor(props) {
        super(props);

    }


    render(){
        return (
            <View style={styles.container} >
                <SwiperFlatList
                    autoplay
                    autoplayLoop
                    showPagination
                    paginationStyleItem={{width: 5, height: 5}}
                >
                    <View style={styles.child} >
                        <TouchableOpacity onPress={this.props.OnPress}>
                        <Image source={require('../../images/advertisements/adverstisement.jpg')} style={styles.image} />
                        </TouchableOpacity>
                    </View>
                    <View  style={styles.child} >
                        <TouchableOpacity onPress={this.props.OnPress}>
                        <Image source={require('../../images/advertisements/adverstisement1.jpg')} style={styles.image} onPress={this.props.OnPress}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.child} >
                        <TouchableOpacity onPress={this.props.OnPress}>
                        <Image source={require('../../images/advertisements/adverstisement2.jpg')} style={styles.image} onPress={this.props.OnPress}/>
                        </TouchableOpacity>
                    </View>
                </SwiperFlatList>
            </View>
        );
    }
}


export const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        position: 'absolute'
    },
    child: {
        flex:1,
        height: 175,
        width: width,
        justifyContent: 'center'
    },
    image:{
        width: 100+"%",
        height: 100+"%",
        resizeMode: 'cover'
    }
});