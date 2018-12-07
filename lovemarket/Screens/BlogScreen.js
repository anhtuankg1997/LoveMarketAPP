import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, StatusBar} from 'react-native'

import {NavBarStyle2} from '../components/NavigationBar/NavBar'

import {ListDataBlogTrend, ListDataBlogMeAndFriend} from "../Data/ListDataBlog";


export default class BlogScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            screen: 1
        }
    }

    renderColor(){
        if(this.state.screen===1){
            return{color:'#000000'}
        }else{
            return{color:'#707070'}
        }
    }
    renderColor1(){
        if(this.state.screen===1){
            return{color:'#707070'}
        }else{
            return{color:'#000000'}
        }
    }

    renderElement(){
        if(this.state.screen===1){
            return(
                <ScrollView style={{flex:1, backgroundColor: '#ffffff'}}>
                    {
                        ListDataBlogMeAndFriend.map((item, index)=>{
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
            );
        }else{
            return(
                <ScrollView style={{flex:1, backgroundColor: '#ffffff'}}>
                    {
                        ListDataBlogTrend.map((item, index)=>{
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
            );
        }
    }


    render() {
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor={'#9004e5'} barStyle={'dark-content'} />
                <View style={styles.header}>
                    <NavBarStyle2 ImageUrl={require('../images/navbar/back.png')} Title={"Blog"}/>
                </View>

                <View style={styles.Main}>
                    <View style={styles.viewMain}>
                        <View style={styles.wrappMain}>
                            <TouchableOpacity onPress={()=>{this.setState({screen: 1})}}>
                            <View style={styles.btnHead}>
                                <Text style={[this.renderColor(), {fontFamily: 'SourceSerifPro-Regular'}]}>Của tôi</Text>
                            </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.wrappMain}>
                            <TouchableOpacity onPress={()=>{this.setState({screen: 2})}}>
                                <View style={styles.btnHead}>
                                    <Text style={[this.renderColor1(),{fontFamily: 'SourceSerifPro-Regular'}]}>Thịnh hành</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {this.renderElement()}


                    <View style={styles.postImage}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('PostBlogArticleScreen')}>
                        <Image source={require('../images/blog/ico/post-image.png')} style={{width: 48, height: 48}}/>
                        </TouchableOpacity>
                    </View>
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
        fontFamily: 'SourceSerifPro-Semibold',
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
        fontFamily: 'SourceSerifPro-Regular'
    },
    expression:{
        color: '#000000',
        fontSize: 10,
        fontFamily: 'SourceSerifPro-Regular'
    },
    time:{
        fontSize: 12,
        color: '#183017',
        fontFamily: 'SourceSerifPro-Regular'
    },

 viewMain:{
     width:100+"%", height: 53, flexDirection: 'row'
 },


    wrappMain:{
        width: 50+"%", height: 100+"%", backgroundColor: '#F4F3F4'
    },
    btnHead:{
        width: 100+"%", height: 100+"%",  justifyContent: 'center', alignItems: 'center'
    },


    postImage:{
        position: 'absolute',
        bottom: 60,
        right: 15,
        width: 48,
        height: 48
    },



});

