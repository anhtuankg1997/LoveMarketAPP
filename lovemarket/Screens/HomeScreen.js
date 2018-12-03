import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, StatusBar, Image, TouchableOpacity} from 'react-native';
import {NavBarStyle1} from '../components/NavigationBar/NavBar'
import Advertisement from '../components/NotificationComponents/Advertisement'
import Category from '../components/CategoryComponent/Category'
import ProductHorizontal from '../components/ProductHorizontal'
import {ListProductHot} from "../Data/ListProductHot";
import ProductItem from "../components/ProductComponents/ProductItem";


export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#9004e5'} barStyle={'dark-content'} />
                <View style={{height: 54}}>
                   <NavBarStyle1 leftItem={require('../images/navbar/search.png')}
                                 Title={"Tìm kiếm"}
                                 OnPress={()=>this.props.navigation.navigate('SuggestSearch')}
                                 RightItem1Event={()=>this.props.navigation.navigate('LikeList')}
                                 RightItem2Event={()=>this.props.navigation.navigate('ProductDetail')}
                                 RightItem1={require('../images/navbar/like.png')}
                                 RightItem2={require('../images/navbar/message.png')}/>
                </View>
                <ScrollView style={{height: 532}}>
                        <View>
                            <Advertisement OnPress={()=>this.props.navigation.navigate('Advertisement')} />
                        </View>
                        <View style={{marginTop: 175}}>
                            <Category/>
                        </View>
                        <View style={{marginTop: 180, backgroundColor: '#0009ff', height: 160, width: 100+"%"}}>
                            <View style={styles.container1}>
                                <View style={{marginTop: 6,marginLeft: 5, flex:1, flexDirection: 'row'}}>
                                    <Text style={styles.textHot}> Mới, Hot</Text>
                                    <View style={styles.seeall1}>
                                        <Text style={styles.textAll}>Xem tất cả</Text>
                                        <Image source={require('../images/seeall.png')} style={styles.arrow} />
                                    </View>
                                </View>
                            </View>
                            <ProductHorizontal style={{marginTop: 5}}/>

                        </View>

                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    container1:{
        flex:1, position: 'absolute', backgroundColor: 'white'
    },
    textHot:{
        fontSize: 18, fontFamily: 'SourceSerifPro-Bold'
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
        alignItems: 'center'
    },
    arrow:{
        width: 8,
        height: 13,
        marginLeft: 10
    },




});
