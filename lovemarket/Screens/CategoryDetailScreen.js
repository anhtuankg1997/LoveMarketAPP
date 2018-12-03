import React, {Component} from 'react'
import {View, Text, StyleSheet, StatusBar, ScrollView} from 'react-native'

import {NavBarStyle1} from '../components/NavigationBar/NavBar'
import ListProductNormal from '../components/ListProductNormal'
import ProductHorizontalCategory from '../components/ProductComponents/ProductHorizontalCategory'
import ProductHorizontalStyle2 from '../components/ProductComponents/ProductHorizontalStyle2'

export default class CategoryDetailScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor={'#9207E5'} barStyle={'light-content'}/>
                <View style={styles.header}>
                    <NavBarStyle1 LeftItemEvent={()=>this.props.navigation.goBack()}
                                  leftItem={require('../images/navbar/back.png')}
                                  Title={"Danh mục chi tiết"}
                                  RightItem1={require('../images/navbar/like.png')}
                                  RightItem2={require('../images/navbar/filter.png')}
                                  RightItem1Event={()=>this.props.navigation.navigate('LikeList')}
                                  RightItem2Event={()=>this.props.navigation.navigate('FilterScreen')}
                    />
                </View>
                <ScrollView style={styles.mainSection}>
                    <Text style={styles.TextNameMain}>Danh mục con</Text>
                    <View style={styles.childCateSection}>
                        <ProductHorizontalCategory />
                    </View>
                    <View style={styles.line} />
                    <Text style={styles.TextNameMain}>Tin hot, mới</Text>
                    <View style={styles.hotSection}>
                        <ProductHorizontalStyle2/>
                    </View>
                    <View style={styles.line} />
                    <Text style={styles.TextNameMain}>Tất cả sản phẩm</Text>
                        <ListProductNormal/>
                    <View style={styles.allPSection}>

                    </View>
                </ScrollView>
            </View>
        );
    }
}




const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#F3F3F3'
    },
    header:{
        width: 100+"%",
        height: 54
    },
    mainSection:{
        width: 100+"%",
        height: 586,
    },
    line:{
        borderBottomColor: '#CFCFCF',
        borderBottomWidth: 1,
        marginTop: 6,
        width: 340,
        marginLeft: 10
    },
    TextNameMain:{
        marginTop: 5,
        marginLeft: 10,
        fontSize: 12,
        color: '#183017',
    },
    childCateSection:{
        width: 100+"%",
        height: 40,
        marginTop: 6,
    },
    hotSection:{
        height: 136,
        width: 100+"%",
        marginTop: 6
    },
    allPSection: {
        width: 100+"%",
        marginTop: 6,
    }
});