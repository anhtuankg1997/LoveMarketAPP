import React, {Component} from 'react'
import {View, Text, Button, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList} from 'react-native'
import {NavBarStyle2} from '../components/NavigationBar/NavBar'
import {ListDataBlog } from '../Data/ListDataBlog'



export default class BlogScreen extends Component{
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <NavBarStyle2 ImageUrl={require('../images/navbar/back.png')} Title={"Blog"}/>
                </View>
                <View style={styles.Main}>
                    <ScrollView style={{flex:1}}>
                        {
                            ListDataBlog.map((item, index)=>{
                                return(
                                    <View key={index} style={styles.wrapped}>
                                        <View style={styles.line1}>
                                            <View style={styles.avatarSection}>
                                                <Image source={item.avatar} style={styles.avatar}/>
                                            </View>
                                            <View style={styles.usernameSection}>
                                                <Text style={styles.username}>{item.username}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.imageSection}>
                                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('DetaiPostBlog',{
                                                UserNameB: item.username,
                                                ExpressionB: item.expression,
                                                ImageUrlB: item.imageUrl,
                                                SeeB: item.countSee,
                                                TimeB: item.timePost,
                                                LikeB: item.like,
                                                AvatarB: item.avatar
                                            })}>
                                                <Image source={item.imageUrl} style={styles.imageB}/>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.line2}>
                                            <View style={styles.social}>
                                                <View style={styles.itemheartS}>
                                                    <TouchableOpacity >
                                                        <Image source={require('../images/blog/ico/like.png')} style={{width: 24, height: 22}}/>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={styles.itemcmtS} >
                                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('DetaiPostBlog',
                                                        {
                                                            UserNameB: item.username,
                                                            ExpressionB: item.expression,
                                                            ImageUrlB: item.imageUrl,
                                                            SeeB: item.countSee,
                                                            TimeB: item.timePost,
                                                            LikeB: item.like,
                                                            AvatarB: item.avatar
                                                        })}>
                                                        <Image source={require('../images/blog/ico/cmt.png')} style={{width: 24, height: 21}}/>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={styles.itemshareS}>
                                                    <TouchableOpacity>
                                                        <Image source={require('../images/blog/ico/share.png')} style={{width: 23, height: 23}}/>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View style={styles.viewSection}>
                                                <Text style={styles.textTime}>{item.countSee}</Text>
                                            </View>
                                            <View style={styles.expressSection}>
                                                <Text style={styles.expression}>{item.expression}</Text>
                                            </View>
                                            <View style={styles.timeSection}>
                                                <Text style={styles.time}>{item.timePost}</Text>
                                            </View>
                                        </View>
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





const styles = StyleSheet.create({
   container:{
       flex: 1,
   },
   header:{
     width: 100+"%",
     height: 54,
   },
    Main:{
       width: 100+"%",
        height: 510,
    },
    /*Blog Tab Screen */
    wrapped:{
        width: 100+"%",
        marginBottom: 20
    },
    line1:{
        width: 100+"%",
        height: 32,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageSection:{
        width: 100+"%",
        height: 360,
        marginTop: 6
    },
    line2:{
        width: 100+"%",
        padding: 10
    },
    social:{
        width: 100+"%",
        height: 23,
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewSection:{
        width: 100+"%",
        height: 16,
        marginTop: 5
    },
    expressSection:{
        width: 75+"%",
        marginTop: 6,
        paddingBottom: 5
    },
    timeSection:{
        width: 100+"%",
        height: 16,
        marginTop: 6
    },
    avatarSection:{
        width: 32,
        height: 32,
        borderRadius: 16,
        marginLeft: 10,
        marginRight: 12
    },
    usernameSection:{
        width: 300,
        height: 21,
    },
    itemheartS:{
        width: 24,
        height: 22,
    },
    itemcmtS:{
        width: 24,
        height: 21,
        marginLeft: 12
    },
    itemshareS:{
        width: 23,
        height: 23,
        position: 'absolute',
        right: 0
    },
    avatar:{
        width: 32,
        height: 32,
        borderRadius: 16
    },
    username:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000'
    },
    imageB:{
        width: 360,
        height: 360,
        resizeMode: 'cover'
    },
    textTime:{
        fontSize: 12,
        color: '#707070',
        fontWeight: '500'
    },
    expression:{
        color: '#000000',
        fontSize: 10
    },
    time:{
        fontSize: 12,
        color: '#183017',
    }
});