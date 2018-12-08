import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {ListDataLike} from '../Data/ListLikedData'
import {withNavigation} from 'react-navigation'

class Container extends Component{
    render(){
        return(
            <View style={styles.container1}>
                {this.props.children}
            </View>
        );
    }
}



class Card extends Component{
    render(){
        return(
            <View style={[styles.cardContainer]}>
                <View style={styles.card}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}



class ListProductNormal extends Component{
    render(){
        return(
            <View>
                <Container>
                    <View style={{flexDirection: 'row', flex:1, flexWrap: 'wrap'}}>
                        {
                            ListDataLike.map((item, i)=>{
                                return(
                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductDetail',{
                                        nameP : item.name,
                                        imageUrlP: item.image,
                                        costP: item.price,
                                        userAvatarP: item.linkImageUser,
                                        usernameP: item.UserName,
                                        timepostP: item.timepost,
                                        describeP: item.describe
                                    })}>
                                    <Card key={i}>
                                        <Image source={item.image} style={styles.image}/>

                                        <View style={styles.sectionTitle}>
                                            <Text style={styles.title}>{item.name}</Text>
                                        </View>

                                        <View style={styles.priceContainer}>
                                            <View style={styles.moneyIcon}>
                                                <Image source={require('../images/productImage/ico/ic_price.png')} style={styles.priceIcoSize}/>
                                            </View>
                                            <Text style={styles.price}>{item.price}</Text>
                                        </View>

                                        <View style={styles.bottomLine}>
                                            <View style={styles.sectionUser}>
                                                <View style={styles.sectionAvatar}>
                                                    <Image source={item.linkImageUser} style={styles.avatarSize}/>
                                                </View>
                                                <Text style={styles.username}>{item.UserName}</Text>
                                            </View>

                                            <View style={styles.sectionHeart}>
                                                <View  style={styles.sectionIconHeart}>
                                                    <Image source={require('../images/productImage/ico/likeHeart.png')} style={styles.heartSize}/>
                                                </View>
                                                <Text style={styles.theart}>{item.NumOfLike}</Text>
                                            </View>

                                        </View>
                                    </Card>
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </View>
                </Container>
            </View>
        );
    }
}

export default withNavigation(ListProductNormal);

const styles = StyleSheet.create({
    container1:{
        flex: 1,
        flexDirection: 'row',
    },
    cardContainer:{
        height: 260,
        width: 170,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginTop: 10,
        marginLeft: 6.7,
    },
    card:{
        height: 260,
        width: 170,
        borderColor: '#ccc'
    },
    image:{
        width: 170,
        height: 170
    },
    sectionTitle:{
       width: 100+"%",
       height: 29,
        marginTop: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 16,
        fontFamily: 'SourceSerifPro-Semibold',
        color: '#181818',
        padding: 10
    },
    priceContainer:{
        width: 100+"%",
        height: 21,
        marginTop: 2,
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row'
    },
    moneyIcon:{
      width: 11,
      height: 18,
        marginRight: 17
    },
    price:{
        fontSize: 16,
        fontFamily: 'SourceSerifPro-Semibold',
        color: '#FF0007'
    },
    bottomLine:{
        marginTop: 2,
        width: 100+"%",
        height: 30,
        flexDirection: 'row'
    },
    sectionUser:{
        marginLeft: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    sectionAvatar:{
        width: 30,
        height: 30,
        marginRight: 5
    },
    username:{
        fontSize: 12,
        color: '#183017',
        fontFamily: 'SourceSerifPro-Regular'
    },
    sectionHeart:{
        width: 43,
        height: 18,
        right: 8,
        position: 'absolute',
        marginTop: 7,
        flexDirection: 'row'
    },
    sectionIconHeart:{
        width: 20,
        height: 18,
        marginRight: 5,
        flexDirection: 'row',
    },
    theart:{
        fontSize: 12,
        color: '#FD8689',
        fontFamily: 'SourceSerifPro-Regular'
    },
    priceIcoSize:{
        width: 10,
        height: 18
    },
    avatarSize:{
        width: 30,
        height: 30,
        borderRadius: 15
    },
    heartSize:{
        width: 20,
        height: 18
    }
});