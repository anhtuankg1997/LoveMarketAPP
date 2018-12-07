import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, StatusBar, TouchableOpacity, Image, Modal, PanResponder} from 'react-native'

import {NavBarStyle4} from '../components/NavigationBar/NavBar'
import KeyBoardSpacer from 'react-native-keyboard-spacer'

export default class PostBlogArticleScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    componentWillMount(){
        this.painResponder = PanResponder.create({
            onStartShouldSetPanResponder:(event, gestureState)=>true,
            onPanResponderGrant:this._onPanResponderGrant.bind(this),
        });
    }

    _onPanResponderGrant(event, gestureState){
        this.setState({visible:false});
    }


   showGif= function(){
        this.setState({visible: true});
       this.timeoutHandle = setTimeout(()=>{
           this.setState({visible:false});
       }, 6000);
   };

    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor={'#9207E5'} barStyle={'light-content'}/>
                <Modal
                    visible={this.state.visible}
                    transparent={true}
                    onRequestClose={()=>this.setState({visible: false})} animationType={"fade"}
                >
                    <View style={styles.containerModal}>
                        <View style={styles.modalStyle}>
                            <Image source={require('../images/blog/ezgifBreakLove.gif')} style={{width: 100+"%", height: 100+"%"}}/>
                        </View>
                    </View>
                </Modal>
                <View style={styles.header}>
                    <NavBarStyle4 ImageUrl={require('../images/navbar/back.png')}
                                  OnPress={()=>this.props.navigation.goBack()}
                                  Title={"Đăng bài"} buttonName={'Đăng'} onPress={()=>this.showGif()}/>
                </View>

                <View style={styles.mainSection}>
                    <View style={styles.avatarSection}>
                        <Image source={require('../images/users/serum.jpg')}
                               style={styles.avatar} />
                    </View>
                    <View style={styles.textInputSection}>
                        <TextInput placeholder={"Bạn muốn chia sẻ điều gì?"}
                                   placeholderTextColor={'#8F5FAB'}
                                   style={styles.textColor} multiline={true}/>
                    </View>

                </View>
                <View style={styles.bottomEdit}>
                    <View style={{flex:1,alignItems: 'center', flexDirection: 'row'}}>
                        <View style={styles.imageIconS}>
                            <TouchableOpacity>
                                <Image source={require('../images/blog/ico/image.png')} style={styles.imageIcon}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.fontIconS}>
                            <TouchableOpacity>
                                <Image source={require('../images/blog/ico/font-size.png')}  style={styles.imageIcon}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.sizeIcon}>
                            <TouchableOpacity>
                                <Image source={require('../images/blog/ico/size.png')}  style={styles.imageIcon}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.boldIcon}>
                            <TouchableOpacity>
                                <Image source={require('../images/blog/ico/bold.png')}  style={styles.imageIcon}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.boldIcon}>
                            <TouchableOpacity>
                                <Image source={require('../images/blog/ico/italic.png')}  style={styles.imageIcon}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.boldIcon}>
                            <TouchableOpacity>
                                <Image source={require('../images/blog/ico/underline-text-option.png')} style={styles.imageIcon}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.quesIcon}>
                            <TouchableOpacity>
                                <Image source={require('../images/blog/ico/question.png')} style={styles.imageIcon}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <KeyBoardSpacer/>
            </View>
        )
    }
}


const styles= StyleSheet.create({
   container:{
     flex:1
   },
    header:{
       width: 100+"%",
        height: 54,
    },
    mainSection:{
        width: 100+"%", height: 40, flexDirection: 'row'
    },
    main:{
       width: 100+"%",
        height: 586,
        backgroundColor: 'yellow',
    },
    bottomEdit:{
       width: 100+"%",
        height: 32,
        backgroundColor: '#9B07F3',
        position: 'absolute',
        bottom: 0,
    },
    avatarSection:{
       width: 32,
        height: 32,
        borderRadius: 16,
        marginTop: 23,
        marginLeft: 15
    },
    textInputSection:{
        width: 280,
        height: 230,
        marginTop: 23,
        marginLeft: 5,
    },
    avatar:{
       width: 32,
        height: 32,
        borderRadius: 16
    },
    imageIconS:{
       width: 24,
        height: 18,
        marginLeft: 7
    },
    imageIcon:{
       width: 100+"%",
        height: 100+"%"
    },
    textColor:{
        width: 100+"%", height: 100+"%", textAlignVertical: 'top', fontSize: 12, color: '#8F5FAB', fontFamily: 'SourceSerifPro-Regular'
    },
    fontIconS:{
       width: 24,
        height: 24,
        marginLeft: 27
    },
    sizeIcon:{
        width: 22,
        height: 27,
        marginLeft: 14
    },
    boldIcon:{
       width: 18,
        height: 18,
        marginLeft: 14
    },
    quesIcon:{
       width: 24,
        height: 24,
        position: 'absolute',
        right: 5,
        top: 4
    },
    //Modal Style
    containerModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },
    modalStyle:{
        width: 350,
        height: 250,
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }



});