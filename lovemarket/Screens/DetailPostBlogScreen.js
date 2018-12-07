import React,{Component} from 'react'
import {View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput, FlatList} from 'react-native'
import {NavBarStyle2} from '../components/NavigationBar/NavBar'


const DataListComment = [
    {
        key: 1,
        name: 'Vai',
        comment: 'cuộc sống đâu lường trước điều gì ',
        image: require('../images/users/hb1.jpg')
    },
    {
        key: 2,
        name: 'Tuan',
        comment: 'cuộc sống mà ¯\\_(ツ)_/¯',
        image: require('../images/users/hb2.jpg')
    },
    {
        key: 3,
        name: 'Duy',
        comment: 'cùng đoán xem nào….',
        image: require('../images/users/hb3.jpg')
    }
];

/*Data will be Received from BlogScreen */
/*
    UserNameB
    ExpressionB
    ImageUrlB
    SeeB
    TimeB
    LikeB
    AvatarB
 */


export default class DetailPostBlogScreen extends Component{
    render(){

        //Get Parameter from BlogScreen
        const {navigation} = this.props;

        const UserName = navigation.getParam('UserNameB','NguyenVanA');
        const Expression = navigation.getParam('ExpressionB','NguyenVanA');
        const ImageUrl = navigation.getParam('ImageUrlB',require('../images/blog/blogimage1.jpg'));
        const See = navigation.getParam('SeeB','122');
        const Time = navigation.getParam('TimeB','2 giờ trước');
        const Like = navigation.getParam('LikeB','500');
        const Avatar = navigation.getParam('AvatarB',require('../images/users/hb4.jpg'));

        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <NavBarStyle2 ImageUrl={require('../images/navbar/back.png')} OnPress={()=>this.props.navigation.goBack()} Title={"Chi tiết bài đăng"} />
                </View>
                <ScrollView style={styles.detailSection}>
                    <View style={styles.avatarSection}>
                        <View style={styles.avatarS}>
                            <Image source={Avatar} style={styles.avatar}/>
                        </View>
                        <View style={styles.usernameS}>
                            <Text style={styles.username}>{UserName}</Text>
                        </View>
                    </View>
                    <View style={styles.expressionSection}>
                        <Text style={styles.textEx}>
                            {Expression}
                        </Text>
                    </View>
                    <View style={styles.imageSection}>
                        <Image source={ImageUrl} style={styles.imageEx}/>
                    </View>
                    <View style={styles.lineComment}>
                        <FlatList
                            data={DataListComment}
                            keyExtractor = { (item, index) => index.toString() }
                            renderItem={({item})=>{
                                return(
                                    <View style={styles.wrapped}>
                                        <View style={styles.avatarCommentS}>
                                            <Image source={item.image} style={styles.avatarCMT}/>
                                            <View style={styles.comment}>
                                                <Text style={[styles.textcomment, {fontWeight: 'bold', marginRight: 3} ]}>{item.name}</Text>
                                                <Text style={styles.textcomment}>{item.comment}</Text>
                                            </View>

                                        </View>
                                        <View style={styles.replyS}>
                                            <Text style={styles.reply}>Trả lời</Text>
                                        </View>
                                    </View>
                                );
                             }
                            }  />
                    </View>
                </ScrollView>
                <View style={styles.bottomSection}>
                    <View style={styles.line1}>
                        <Text style={styles.countSee}>{See} lượt xem</Text>
                        <Text style={styles.timeText}>{Time}</Text>
                    </View>
                    <View style={styles.line2}>
                        <Text style={styles.countLike}>{Like} lượt thích</Text>
                    </View>
                    <View style={styles.line3}>
                        <Image source={require('../images/blog/ico/like.png')} style={styles.heart}/>
                        <Image source={require('../images/blog/ico/cmt.png')} style={styles.commentICO}/>
                        <Image source={require('../images/blog/ico/share.png')} style={styles.share}/>
                    </View>
                    <View style={styles.line4}>
                        <Image source={require('../images/users/serum.jpg')} style={styles.avatarMe}/>
                        <TextInput placeholder={"Thêm bình luận..."} placeholderTextColor={"#252525"} style={styles.inputCmt}/>

                        <View style={styles.postS}>
                            <TouchableOpacity>
                            <Text style={styles.postCmt}>Đăng</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
   container:{
       flex:1,
   } ,
    header:{
       width: 100+"%",
        height: 54
    },
    detailSection:{
       width: 100+"%",
        height: 390,
    },
    bottomSection:{
        width: 100+"%",
        height: 122,
        backgroundColor: '#ECECEC'
    },
    avatarSection:{
       width:100+"%",
        height: 36,
        marginTop: 6,
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatarS:{
       width: 36,
        height: 36,
        borderRadius: 18,
        marginLeft: 10
    },
    usernameS:{
       width: 300,
        height: 16,
        marginLeft: 6,
    },
    expressionSection:{
       width: 80+"%",
        marginTop: 6,
        marginLeft: 15
    },
    imageSection:{
       width: 100+"%",
        height: 300,
        marginTop: 6,
        alignItems: 'center'
    },
    textEx:{
       fontSize: 10,
        color: "#070707",
        fontFamily: 'SourceSerifPro-Regular'
    },
    imageEx:{
       width: 300,
        height: 300,
    },
    line1:{
       width: 100+"%",
        height: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    line2:{
       width: 100+"%",
        height: 16,
        marginTop:5,
    },
    line3:{
        width: 100+"%",
        height: 28,
        marginTop:3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    lineComment:{
       width: 100+"%",
        marginTop: 12
    },
    line4:{
        width: 100+"%",
        height: 40,
        marginTop:13,
        flexDirection: 'row',
        alignItems: 'center'
    },
    countSee:{
       marginLeft: 10,
        width: 100,
        fontSize: 12,
        fontFamily: 'SourceSerifPro-Bold',
        color: '#390458'
    },
    timeText:{
        fontSize: 12,
        color: '#183017',
        fontFamily: 'SourceSerifPro-Light'
    },
    countLike:{
        fontSize: 12,
        color: '#820003',
        marginLeft: 10,
        fontFamily: 'SourceSerifPro-Semibold'
    },
    heart:{
       width: 30,
        height: 28,
        marginLeft: 10
    },
    commentICO:{
        width: 30,
        height: 28,
        marginLeft: 18
    },
    share:{
        width: 28,
        height: 28,
        position: 'absolute',
        right: 10
    },
    avatarMe:{
       width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 15
    },
    inputCmt:{
       width: 200,
        height: 40,
        fontSize: 12,
        fontFamily: 'SourceSerifPro-Regular'
    },
    postS:{
        position: 'absolute',
        right: 20,
    },
    postCmt:{
       fontSize: 12,
        color: '#390458',
        fontFamily: 'SourceSerifPro-Semibold'
    },
    wrapped:{
       width: 100+"%",
        height: 102,
        borderColor: '#EFEFEF',
        borderWidth: 1,
        backgroundColor: '#ffffff'
    },
    avatarCommentS:{
        width: 100+"%",
        height: 32,
        marginTop: 21,
        flexDirection: 'row'
    },
    replyS:{
       width: 100+"%",
        height: 16,
        position: 'absolute',
        bottom: 21,
    },
    avatarCMT:{
       width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 15
    },
    comment:{
       width: 60+"%",
        height: 100+"%",
        flexDirection: 'row',
        marginLeft: 20
    },
    textcomment:{
       fontSize: 12,
        color: '#707070',
        fontFamily: 'SourceSerifPro-Regular'
    },
    reply:{
       color: '#056A00',
        marginLeft: 65,
        fontSize: 12,
        fontFamily: 'SourceSerifPro-Regular'
    },
    username:{
       fontSize: 16,
        fontFamily: 'SourceSerifPro-Bold'
    },
    avatar:{
        width: 36, height: 36, borderRadius: 18
    }
});