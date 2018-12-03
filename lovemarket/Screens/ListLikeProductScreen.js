import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, Image, Dimensions} from 'react-native'
import {NavBarStyle2} from '../components/NavigationBar/NavBar'
import ListProductNormal from '../components/ListProductNormal'


export default class ListLikeProductScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <NavBarStyle2 ImageUrl={require('../images/navbar/back.png')}
                                  Title={"Danh sách yêu thích"} OnPress={()=>this.props.navigation.goBack()}/>
                </View>
                <ScrollView style={styles.sectionList}>
                    <ListProductNormal/>
                </ScrollView>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    sectionList:{
        width: 100+"%",
        height: 100+"%",
        marginTop: 54,
        backgroundColor: '#E9E8E9'
    },

});