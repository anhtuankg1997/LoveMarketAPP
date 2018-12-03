import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import {ListProductHot} from '../../Data/ListProductHot'

export default class ProductHorizontalStyle2 extends Component{

    dynamicMargin = function(i){
        if(i===1) return{marginLeft: 10};
        else return{marginLeft:0};
    };

    render(){
        return(
            <View style={styles.container}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        ListProductHot.map((item, index)=>{
                            return(
                                <View key={index}  style={[styles.itemSection, this.dynamicMargin(item.id)]}>
                                    <View style={styles.imageProductS}>
                                        <Image source={item.imageurl} style={styles.imageP}/>
                                        <View style={styles.productNameS}>
                                            <Text style={styles.labelI}>{item.name}</Text>
                                        </View>
                                        <View style={styles.labelHotSection}>
                                            <Image source={require('../../images/hotS.png')} style={styles.imageQ}/>
                                        </View>
                                    </View>
                                    <View style={styles.infoSection}>
                                        <View style={styles.costSectionI}>
                                            <Text style={styles.costI}>{item.cost} đ</Text>
                                        </View>
                                        <View style={styles.avatarSectionI}>
                                            <Image source={item.avatar} style={styles.avatarI}/>
                                            <Text style={styles.usernameI}>{item.username}</Text>
                                        </View>
                                    </View>
                                </View>
                            );
                        })
                    }
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        width: 100+"%",
        height: 136,
    },
    itemSection:{
       width: 100,
       height: 136,
        marginRight: 7
   },
    imageProductS:{
       width: 100,
        height: 100,
    },
    imageP:{
       width: 100+"%",
        height: 100+"%",
    },
    productNameS:{
       height: 13,
        width: 100+"%",
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(215, 7, 19, 0.5)',
        alignItems:'center',
        justifyContent: 'center'
    },
    labelHotSection:{
       width: 40,
        height: 40,
        position: 'absolute',
        right: 0,
        top: 0,
    },
    infoSection:{
       width: 100+"%",
        height: 36,
        backgroundColor: '#ffffff'
    },
    costSectionI:{
       width: 100+"%",
        height: 16,
        alignItems: 'center'
    },
    avatarSectionI:{
        width: 100+"%",
        height: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatarI:{
       width: 15,
        height: 15,
        borderRadius: 7.5,
        marginLeft: 5
    },
    usernameI:{
       fontSize: 12,
        marginLeft: 12,
        color:'#000000'
    },
    costI:{
       color: '#FF0007',
        fontSize: 12
    },
    labelI:{
       color:'#FFFFFF',
        fontSize: 12
    },
    imageQ:{
       width: 40,
        height:40
    }

});