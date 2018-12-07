import React, {Component} from 'react'
import {View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity, Image} from 'react-native'
import {NavBarStyle1} from '../components/NavigationBar/NavBar'
import ProfileInBlog from '../components/BlogComponents/ProfileInBlog'
import {ListDataBlogMe, ListDataBlogMeCMT} from "../Data/ListDataBlog";

class ButtonTab extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <View style={styles.buttonContainer}>
                <View style={styles.buttonSection}>
                    <TouchableOpacity onPress={this.props.onPressTab1}>
                        <View style={styles.button}>
                        <Text style={[{ fontSize: 18}, this.props.StyleText1]}>Đã đăng</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonSection}>
                    <TouchableOpacity onPress={this.props.onPressTab2}>
                        <View style={styles.button}>
                            <Text style={[{ fontSize: 18}, this.props.StyleText2]}>Đã bình luận</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


export default class MyBlogSettingsScreen extends Component{
    constructor(props) {
        super(props);
        this.state ={
            screen:1
        }
    }

    renderItem(){
        if(this.state.screen===1){
            return(
                <ScrollView style={{width: 100+"%", height: 454, backgroundColor: '#ffffff'}}>
                    {
                        ListDataBlogMe.map((item, index)=>{
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
                <ScrollView style={{width: 100+"%", height: 454, backgroundColor: '#ffffff'}}>
                    {
                        ListDataBlogMeCMT.map((item, index)=>{
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


    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor={'#9207E5'} barStyle={'light-content'}/>
                <View style={styles.header}>
                    <NavBarStyle1 leftItem={require('../images/navbar/back.png')}
                                  LeftItemEvent={()=>this.props.navigation.goBack()}
                                  Title={"Blog của Uyên Huỳnh (Serum)"}
                                  styleTextHeader={{fontSize: 12, marginTop: 8}}
                                  RightItem1={require('../images/navbar/Union.png')}
                                  RightItem2={require('../images/navbar/menu.png')}
                    />
                </View>
                <View style={styles.profileSection}>
                    <ProfileInBlog AvatarUrl={require('../images/users/serum.jpg')}/>
                </View>
                <View style={styles.buttonTabSection}>
                    <ButtonTab StyleText1={this.renderColor()}
                               StyleText2={this.renderColor1()}
                               onPressTab1={()=>this.setState({screen:1})}
                               onPressTab2={()=>this.setState({screen:2})}/>
                </View>
                {this.renderItem()}
                <View style={styles.FloatingBtn}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('PostBlogArticleScreen')}>
                    <Image source={require('../images/blog/ico/post-image.png')} style={{width: 48, height: 48}}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }









    renderColor(){
        if(this.state.screen===1){
            return{color:'#000000'}
        }
        else{
            return{color:'#707070'}
        }
    }
    renderColor1(){
        if(this.state.screen===1){
            return{color:'#707070'}
        }
        else{
            return{color:'#000000'}
        }
    }

}



const styles = StyleSheet.create({
   container:{
       flex: 1,
       backgroundColor: '#ffffff'
   },
    marginHead:{
        backgroundColor: '#ffffff',
        height: 10,
        width: 100+"%"
    },
    profileSection:{
       width: 100+"%",
        height: 90,
        marginTop: 10
    },
    buttonTabSection:{
       width: 100+"%",
        height: 42,
        marginTop: 8
    },
    header:{
       width: 100+"%",
        height: 54,
    },

    //List Blog STyle
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

    //Button Tab style
    buttonContainer:{
        width: 100+"%", height: 100+"%", backgroundColor:'#ffffff', flexDirection: 'row'
    },
    buttonSection:{
        width: 50+"%", height: 100+"%",
    },
    button:{
        width: 100+"%", height: 100+"%", justifyContent: 'center', alignItems: 'center', backgroundColor:'rgba(233, 232, 233, 0.5)'
    },
    FloatingBtn:{
        position: 'absolute',
        bottom: 60,
        right: 15,
        width: 48,
        height: 48
    }

});