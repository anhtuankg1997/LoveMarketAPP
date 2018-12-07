import React, {Component} from 'react'
import {View, StyleSheet, StatusBar, ScrollView, Image, Text, TouchableOpacity} from 'react-native'
import {NavBarStyle1} from '../components/NavigationBar/NavBar'

/*
    ProductDetail Name Will Be Received from another Screen
    NameProduct:
    ImageUrlProduct:
    CostProduct:
    UserAvatar
    UserName:
    TimePost
    Describe

 */

export default class ProductDetail extends Component{
    render(){

        //Get Parameter
        const { navigation } = this.props;

        const NameProduct = navigation.getParam('nameP', 'Đồng hồ tình yêu');
        const ImageUrlProduct = navigation.getParam('imageUrlP', require('../images/productImage/donghodeotay1.jpg'));
        const CostProduct = navigation.getParam('costP', '100000');
        const UserAvatar = navigation.getParam('userAvatarP', require('../images/users/hb1.jpg'));
        const UserName = navigation.getParam('usernameP', 'ThanhHuy');
        const TimePost= navigation.getParam('timepostP', '2 giờ trước');
        const Describe = navigation.getParam('describeP', 'Câu chuyện của tôi thật ngược đời. Tôi là kẻ có lỗi, là kẻ phản bội, ấy vậy mà khi được tha thứ, tôi vẫn kiên quyết đòi chia tay, thậm chí còn khinh thường người đàn ông đã chấp nhận mình');



        return(
            <View style={styles.container}>
                <StatusBar backgroundColor={'#9207E5'} barStyle={'light-content'}/>
                <View style={styles.header}>
                    <NavBarStyle1 leftItem={require('../images/navbar/back.png')}
                                  LeftItemEvent={()=>this.props.navigation.goBack()}
                                  Title={"Chi tiết sản phẩm"}
                                  RightItem1={require('../images/navbar/like.png')}
                                  RightItem2={require('../images/navbar/message.png')}
                                  RightItem1Event={()=>this.props.navigation.navigate('LikeList')}
                                  RightItem2Event={()=>this.props.navigation.navigate('MessengerScreen')}
                    />
                </View>

                <ScrollView>
                <View style={styles.imageSection}>
                    <Image source={JSON.stringify(ImageUrlProduct)} style={styles.imagePr}/>
                    <View style={styles.heartSection}>
                        <Image source={require('../images/iconDif/emheart.png')} style={styles.imageProduct}/>
                    </View>
                </View>
                <View style={styles.infoSection}>
                    <View style={styles.titleSection}>
                        <Text style={styles.title}>{NameProduct}</Text>
                    </View>
                    <View style={styles.extendInfoS}>

                        <View style={styles.timepricesection}>
                            <View style={styles.priceSection}>
                                <Text style={styles.priceText}>{CostProduct}</Text>
                            </View>
                            <View style={styles.timeSection}>
                                <Text style={styles.timeText}>{TimePost}</Text>
                            </View>
                        </View>

                        <View style={styles.userstarsection}>
                            <View style={styles.usersection}>
                                <View style={styles.avatarSection}>
                                    <Image source={JSON.stringify(UserAvatar)} style={styles.userimage}/>
                                </View>
                                <View style={styles.usernameSection}>
                                    <Text style={styles.userText}>{UserName}</Text>
                                </View>
                            </View>
                            <View style={styles.ctSection}>
                                <View style={styles.starsection}>
                                    <Image source={require('../images/productImage/ico/5star.png')} style={styles.starImage}/>
                                </View>
                                <View style={styles.countstarsection}>
                                    <Text style={styles.starText}>5/5 (1k)</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={styles.expressionSection}>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                        }}
                    />
                    <Text style={styles.textHeader}>Mô tả</Text>
                    <View style={styles.exSection}>
                        <Text style={styles.textEx}>{Describe}</Text>
                    </View>
                    <View style={styles.reportS}>
                        <Image source={require('../images/productImage/ico/warningICO.png')} style={styles.warning}/>
                        <Text style={styles.warningText}>Báo cáo</Text>
                    </View>

                </View>
                    <View style={styles.bottomScroll}>

                    </View>
                </ScrollView>

                <View style={styles.contactSection}>
                    <View style={styles.chatSection}>
                        <TouchableOpacity>
                        <View style={{width: 100+"%", height: 100+"%", justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={styles.textChat}>Chat ngay</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.socialSection}>
                        <TouchableOpacity>
                        <View style={styles.styleSocialS}>
                            <Image source={require('../images/productImage/ico/facebook.png')} style={styles.imageSocial}/>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.styleSocialS}>
                            <Image source={require('../images/productImage/ico/google.png')} style={styles.imageSocial}/>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.styleSocialS}>
                            <Image source={require('../images/productImage/ico/phone.png')} style={styles.imageSocial}/>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }
}


const styles= StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        width: 100+"%",
        height: 54
    },
    imageSection:{
        width: 100+"%",
        height: 360,
    },
    contactSection:{
        width: 100+"%",
        height: 54,
        position:'absolute',
        bottom: 0,
        backgroundColor: 'blue',
        flexDirection: 'row'
    },
    infoSection:{
        width: 100+"%",
        height: 150,
        backgroundColor: '#F3F3F3'
    },
    titleSection:{
      width: 100+'%',
      height: 21,
        marginTop: 11,
        marginLeft: 10

    },
    bottomScroll:{
        width: 100+"%",
        height: 54,
        backgroundColor: 'black'
    },
    timepricesection:{
        width: 62+"%",
        height: 100+"%",
        marginLeft: 10,
    },
    userstarsection:{
        width: 38+"%",
        height: 100+"%",
        position: 'absolute',
        right: 31
    },
    priceSection:{
      marginTop: 7,
        height: 21,
        width: 100+"%",
    },
    timeSection:{
      width: 100+"%",
      height: 19,
        position: 'absolute',
        bottom: 0
    },
    usersection:{
        height: 50,
        width: 100+"%",
        flexDirection: 'row'
    },
    ctSection:{
      width: 100+"%",
      height: 21,
        position: 'absolute',
        bottom:0,
        flexDirection: 'row'
    },
    starsection:{
        width: 50+"%",
        height: 100+"%",
    },
    countstarsection:{
        width: 50+"%",
        height: 100+"%",
    },
    title:{
        color: '#183017',
        fontSize: 16,
        fontFamily: 'SourceSerifPro-Semibold'
    },
    extendInfoS:{
      width: 100+"%",
        height: 84,
      marginTop: 1,
        flexDirection: 'row'
    },
    priceText:{
        fontSize: 16,
        color: '#9207E5',
        fontFamily: 'SourceSerifPro-Regular'
    },
    timeText:{
      fontSize: 14,
      color: 'rgba(10, 0, 0, 0.38)',
        fontFamily: 'SourceSerifPro-Regular'
    },
    avatarSection:{
        width: 50,
        height: 50,
        borderRadius: 25
    },
    usernameSection:{
        marginLeft: 12,
        width: 120,
        height: 21,
        marginTop: 17
    },
    starImage:{
      width: 64,
      height: 10,
        marginTop: 5
    },
    starText:{
        fontSize: 16,
        fontFamily: 'SourceSerifPro-Regular'
    },
    expressionSection:{
        width: 100+"%",
        height: 245,
        backgroundColor: '#F3F3F3'
    },
    imagePr:{
        width: 100+"%",
        height: 100+"%"
    },
    imageProduct:{
        width: 36,
        height: 36
    },
    heartSection:{
        width: 36,
        height: 36,
        position: 'absolute',
        bottom: 12,
        right: 12
    },
    userimage:{
        height: 50,
        width: 50,
        borderRadius: 50
    },
    userText:{
        fontSize: 16,
        color: '#183017',
        fontFamily: 'SourceSerifPro-Regular'
    },
    chatSection:{
        width: 50+"%",
        height: 100+"%",
        backgroundColor: '#FFDD00',
    },
    socialSection:{
        width: 50+"%",
        height: 100+"%",
        backgroundColor: 'purple',
        flexDirection:'row'
    },
    textChat:{
        fontSize: 15,
        color: '#ffffff',
        fontFamily: 'SourceSerifPro-Regular'
    },
    styleSocialS:{
        width: 60,
        height: 54,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageSocial:{
        width: 30,
        height: 30
    },
    textHeader:{
        fontSize: 16,
        fontFamily: 'SourceSerifPro-Semibold',
        color: '#183017',
        marginLeft: 10,
        marginTop: 5
    },
    exSection:{
        width: 350,
        marginLeft: 10,
        marginTop: 5,
    },
    textEx:{
        fontSize: 16,
        color: '#183017',
        fontFamily: 'SourceSerifPro-Regular'
    },
    reportS:{
        height: 50,
        width: 100+ "%",
        marginTop: 27,
        justifyContent:'center',
        alignItems: 'center'
    },
    warning:{
        width: 36,
        height: 30
    },
    warningText:{
        fontSize: 16,
        color: '#183017',
        fontFamily: 'SourceSerifPro-Regular'
    }
});
