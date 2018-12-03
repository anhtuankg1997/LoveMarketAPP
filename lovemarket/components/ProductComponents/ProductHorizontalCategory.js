import React, {Component} from 'react'
import {View,Text, StyleSheet, Image, ScrollView} from 'react-native'

const ListChild =[
    {
        key: 1,
        imageUrl: require('../../images/category/ngay8-3.png')
    },
    {
        key: 2,
        imageUrl: require('../../images/category/dovanphong.png')
    },
    {
        key: 3,
        imageUrl: require('../../images/category/thoitrang.png')
    },
    {
        key: 4,
        imageUrl: require('../../images/category/baihat.png')
    },
    {
        key: 5,
        imageUrl: require('../../images/category/vieclam.png')
    },
    {
        key: 6,
        imageUrl: require('../../images/category/mevabe.png')
    },
    {
        key: 7,
        imageUrl: require('../../images/category/donoithat.png')
    },
    {
        key: 8,
        imageUrl: require('../../images/category/handmade.png')
    },
    {
        key: 9,
        imageUrl: require('../../images/category/quacauhon.png')
    }
];


export default class ProductHorizontalCategory extends Component{

    dynamicMargin= function(i){
        if(i===1) return{marginLeft: 10};
        else return{marginLeft: 0}
    };

    render(){
        return(
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  style={styles.container}>
                {
                    ListChild.map((item, index)=>{
                        return(
                            <View key={index}>
                                <Image source={item.imageUrl}
                                       style={[styles.styleIconCate, this.dynamicMargin(item.key)]}/>
                            </View>
                        );
                    })
                }
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        width: 100+"%",
        height: 40,
    },
    styleIconCate:{
        width: 40,
        height: 40,
        marginRight: 20
    }
});