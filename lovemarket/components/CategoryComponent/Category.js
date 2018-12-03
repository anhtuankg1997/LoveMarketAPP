import React,{Component} from 'react'
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions} from 'react-native'
import SwiperFlatList from 'react-native-swiper-flatlist';
import {CategoryPage1,CategoryPage2,CategoryPage3} from './CategoryPage'

export default class Category extends Component{
    render(){
        return(
            <View style={styles.container}>
                <SwiperFlatList
                    showPagination
                    autoplayLoop
                    paginationStyleItem={{width: 10, height: 2}}
                    paginationActiveColor={'#c200ff'}
                >
                    <View style={styles.child}>
                        <CategoryPage1/>
                    </View>
                    <View style={styles.child}>
                        <CategoryPage2/>
                    </View>
                    <View style={styles.child}>
                        <CategoryPage3/>
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
        backgroundColor: '#F1F3F1',
        position: 'absolute'
    },
    child: {
        flex:1,
        height: 180,
        width: width,
        justifyContent: 'center'
    },
    text: {
        fontSize: 10,
        textAlign: 'center'
    }
});