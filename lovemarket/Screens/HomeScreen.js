import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, StatusBar, Image, Modal, PanResponder, ImageBackground, TouchableOpacity} from 'react-native';
import {NavBarStyle1} from '../components/NavigationBar/NavBar'
import Advertisement from '../components/NotificationComponents/Advertisement'
import Category from '../components/CategoryComponent/Category'
import ProductHorizontal from '../components/ProductHorizontal'

class ItemEmo extends Component{
    constructor(props) {
        super(props);
    }


    render(){
        return(
            <TouchableOpacity onPress={this.props.onPress}>
            <View style={styles.itemStyle}>
                <Image source={this.props.imageUrl} style={styles.emoIcon}/>
                <Text style={styles.emoText}>{this.props.name}</Text>
            </View>
            </TouchableOpacity>
        )
    }
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            visible:true
        }
    }

    componentWillMount(){
        this.painResponder = PanResponder.create({
            onStartShouldSetPanResponder:(event, gestureState)=>true,
            onPanResponderGrant:this._onPanResponderGrant.bind(this),
        });
    }

    _onPanResponderGrant(event, gestureState){
        if(event.nativeEvent.locationX === event.nativeEvent.pageX){
            this.setState({visible: false})
        }
    }

    MoveScreen = function(){

    };

    render(){
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#9004e5'} barStyle={'dark-content'} />

                <Modal visible={this.state.visible}
                       transparent={true}
                       onRequestClose={()=>this.setState({visible:false})}  animationType={"fade"}
                       {...this.painResponder.panHandlers}
                >
                    <View style={styles.emoForm}>

                            <ImageBackground source={require('../images/emotion/bg.png')} style={styles.emoFormS}>
                                <View style={styles.emoHead}>
                                    <Text style={styles.emoTextHead}>Bạn đang cảm thấy như thế nào?</Text>
                                </View>

                                <View style={styles.emoMain}>
                                    <View style={styles.emoEmoIcon}>
                                        <ItemEmo imageUrl={require('../images/emotion/bucminh.gif')} name={"Tức giận"} onPress={()=>{this.setState({visible:false});this.props.navigation.navigate('EmotionCategoryScreen');}}/>
                                        <ItemEmo imageUrl={require('../images/emotion/buon.gif')} name={"Buồn"} onPress={()=>{this.setState({visible:false});this.props.navigation.navigate('EmotionCategoryScreen');}}/>
                                        <ItemEmo imageUrl={require('../images/emotion/dangyeu.gif')} name={"Đang yêu"} onPress={()=>{this.setState({visible:false});this.props.navigation.navigate('EmotionCategoryScreen');}}/>
                                        <ItemEmo imageUrl={require('../images/emotion/hanhphuc.gif')} name={"Hạnh phúc"} onPress={()=>{this.setState({visible:false});this.props.navigation.navigate('EmotionCategoryScreen');}}/>
                                        <ItemEmo imageUrl={require('../images/emotion/ngacnhien.gif')} name={"Ngạc nhiên"} onPress={()=>{this.setState({visible:false});this.props.navigation.navigate('EmotionCategoryScreen');}}/>
                                        <ItemEmo imageUrl={require('../images/emotion/vuive.gif')} name={"Vui vẻ"} onPress={()=>{this.setState({visible:false});this.props.navigation.navigate('EmotionCategoryScreen');}}/>
                                    </View>
                                </View>


                            </ImageBackground>

                    </View>
                </Modal>


                <View style={{height: 54}}>
                   <NavBarStyle1 leftItem={require('../images/navbar/search.png')}
                                 Title={"Tìm kiếm"}
                                 OnPress={()=>this.props.navigation.navigate('SuggestSearch')}
                                 RightItem1Event={()=>this.props.navigation.navigate('LikeList')}
                                 RightItem2Event={()=>this.props.navigation.navigate('MessengerScreen')}
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
                                    <Text style={styles.textHot}> Mới, hot</Text>
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
        fontSize: 18, fontFamily: 'SourceSerifPro-Black'
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
    textAll:{
        fontFamily: 'SourceSerifPro-Regular'
    },

    //Item STyle
    itemStyle:{
        height: 60, alignItems: 'center'
    },
    emoIcon:{
        width: 40, height: 40
    },
    emoText:{
        fontSize: 12, color: '#ffffff', marginTop:7, fontFamily:'SourceSerifPro-Regular'
    },
    emoForm:{
        flex:1, justifyContent:'center', alignItems:'center', backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    emoFormS:{
        width: 100+"%", height: 210, alignItems: 'center'
    },
    emoHead:{
        width: 100+"%", alignItems: 'center', marginTop: 46
    },
    emoTextHead:{
        fontSize:16, fontFamily:'SourceSerifPro-Regular', color: '#ffffff'
    },
    emoMain:{
        width: 95+"%", marginTop: 25
    },
    emoEmoIcon:{
        width: 100+"%", flexDirection:'row', justifyContent: 'space-between'
    }


});
