import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {View} from "react-native";
import {Text} from "react-native";
import {Image} from "react-native";
import {ScrollView} from "react-native";
import {ListProductHot} from "../Data/ListProductHot";
import {TouchableOpacity} from "react-native";
import ProductItem from './ProductItem'
import {withNavigation} from 'react-navigation'


class ProductHorizontal extends Component{
    render(){
        return(
            <View style={styles.container1}>
                <View style={{marginTop: 6,marginLeft: 5, flex:1, flexDirection: 'row'}}>
                    <Text style={styles.textHot}> Mới, Hot</Text>
                    <View style={styles.seeall1}>
                        <Text style={styles.textAll}>Xem tất cả</Text>
                        <Image source={require('../images/seeall.png')} style={styles.arrow} />
                    </View>
                </View>
                <View style={styles.productList}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {
                            ListProductHot.map((item,index)=>{
                                return(
                                    <View key={index}>
                                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductDetail',{
                                            nameP : item.name,
                                            imageUrlP: item.imageurl,
                                            costP: item.cost,
                                            userAvatarP: item.avatar,
                                            usernameP: item.username,
                                            timepostP: item.timepost,
                                            describeP: item.describe
                                        })}>
                                           <ProductItem imageUrl={item.imageurl} name={item.name} cost={item.cost} />
                                        </TouchableOpacity>
                                    </View>
                                );
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default withNavigation(ProductHorizontal)


const styles =StyleSheet.create({
    container1:{
        flex:1, position: 'absolute', backgroundColor: 'white'
    },
    textHot:{
        fontSize: 18, fontFamily: 'SourceSerifPro-Semibold'
    },
    textAll:{
        fontFamily: 'SourceSerifPro-Regular', fontSize: 12, color: '#8F5FAB'
    },
    productList:{
        height: 130, marginTop: 5, backgroundColor: "#ffffff"
    },
    seeall1:{
        width: 72,
        height: 16,
        marginRight: 20,
        marginTop: 4,
        right: 0,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'SourceSerifPro-Regular'
    },
    arrow:{
        width: 8,
        height: 13,
        marginLeft: 10
    },

});