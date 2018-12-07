import React, {Component} from 'react'
import {View, StyleSheet, ScrollView, StatusBar, Modal, PanResponder, Text, TouchableOpacity} from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {FromUserMessage,ToUserMessage,ImageFromUserMessage} from '../components/MessageComponent/Message'
import BottomInputMessage from '../components/MessageComponent/BottomInputMessage'
import {NavBarStyle5} from '../components/NavigationBar/NavBar'

export default class MessageDetailScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            isVisiblePicker: false,
            chosenDate : 'Chọn thời gian',
            marker:{
                latitude: 10.8702523,
                longitude: 106.8010145,
            }
        }
    }

    //Modal Show choose map and date time picker
    componentWillMount(){
        this.painResponder = PanResponder.create({
            onStartShouldSetPanResponder:(event, gestureState)=>true,
            onPanResponderGrant:this._onPanResponderGrant.bind(this),
        });
    }

    _onPanResponderGrant(event, gestureState){
        this.setState({visible:false});
    }

    handlePicker = (datetime)=>{
        this.setState({
            isVisiblePicker: false,
            chosenDate: moment(datetime).format('DD-MM-YYYY hh:mm')
        })

    };

    hidePicker = ()=>{
        this.setState({
            isVisiblePicker: false
        })
    };

    showPicker =()=>{
        this.setState({isVisiblePicker: true})
    };

    onRegionChange(data){

    };

    onPress(data){
        let la = data.nativeEvent.coordinate.latitude;
        let long = data.nativeEvent.coordinate.longitude;
        let mark = {
            latitude: la,
            longitude: long,
        };
        this.setState({marker: mark });
    }


    render(){
        return(
            <View style={{flex: 1}}>
                <StatusBar backgroundColor={'#9207E5'} barStyle={'light-content'}/>

                <DateTimePicker
                    isVisible={this.state.isVisiblePicker}
                    onConfirm={this.handlePicker}
                    onCancel={this.hidePicker}
                    mode={'datetime'}
                    is24Hour={true}
                />

                <Modal  visible={this.state.visible}
                        transparent={true}
                        onRequestClose={()=>this.setState({visible:false})}  animationType={"fade"}>
                    <View style={{flex:1, backgroundColor: '#ba00ff'}}>
                        <View style={styles.headModal}>
                            <Text style={styles.textHead}>Hẹn thời gian và địa điểm</Text>
                        </View>

                        <View style={styles.pickerDateTimeS}>
                            <TouchableOpacity style={styles.buttonChoseDateTime} onPress={this.showPicker}>
                                <Text style={styles.textDate}>{this.state.chosenDate}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.MapS}>
                            <MapView
                                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                                style={{width: 100+"%", height: 100+"%"}}
                                region={{   latitude: 10.8702523,
                                            longitude: 106.8010145,
                                            latitudeDelta: 0.015,
                                            longitudeDelta: 0.0121,}}
                                onRegionChange={this.onRegionChange}
                                onPress={this.onPress.bind(this)}
                            >
                                <MapView.Marker
                                    coordinate={this.state.marker}
                                    title={"Địa điểm hẹn gặp"}
                                />
                            </MapView>
                        </View>
                        <View style={styles.buttonSection}>
                            <View style={styles.btnS}>
                                <TouchableOpacity>
                                    <View style={styles.btn}>
                                        <Text style={styles.textbtn}>Đồng ý</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.btnS}>
                                    <TouchableOpacity onPress={()=>this.setState({visible:false})}>
                                        <View style={styles.btn}>
                                            <Text style={styles.textbtn}>Thoát</Text>
                                        </View>
                                    </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>



                <View style={{width:100+"%", height: 54}}>
                    <NavBarStyle5 ImageUrl={require('../images/navbar/back.png')}
                                  OnPress={()=>this.props.navigation.goBack()}
                                  Username={"Phương Uyên"}
                                  TimeOnline={"Online 52 phút trước"}/>
                </View>
                <ScrollView style={styles.main}>
                    <FromUserMessage avatarUrl={require('../images/users/hg4.jpg')} time={"09:28 11-09-2018"} message={"Chào bạn....."}/>
                    <ToUserMessage time={"09:38 11-09-2018"} message={"Chào bạn !!!!"}/>
                    <FromUserMessage avatarUrl={require('../images/users/hg4.jpg')} time={"09:38 11-09-2018"} message={"Chúng ta có thể gặp nhau ở đâu để giao dịch"}/>
                    <ImageFromUserMessage imageUrl={require('../images/message/messageiamge.jpeg')} />
                    <ToUserMessage time={"09:39 11-09-2018"} message={"Bạn ở đâu?"}/>
                    <View style={{width: 100+"%", height: 60}}>
                    </View>
                </ScrollView>


                <View style={styles.bottomSection}>
                    <BottomInputMessage OnPress={()=>this.setState({visible: true})}/>
                    <KeyboardSpacer/>
                </View>
            </View>
        );
    }
}


const styles= StyleSheet.create({
    main:{
        width: 100+"%", height:486
    },
    bottomSection:{
        width: 100+"%", height: 54, position:'absolute', bottom: 0
    },
    textHead:{
        fontSize: 22,
        color: '#ffffff',
        fontFamily: 'SourceSerifPro-Semibold'
    },
    pickerDateTimeS:{
        width: 100+"%",
        height: 30,
        marginTop: 10,
        alignItems: 'center'
    },
    MapS:{
        width: 100+"%",
        height: 420,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#ffffff'
    },
    headModal:{
        width: 100+"%",
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    buttonSection:{
        width: 100+"%",
        height: 40,
        flexDirection: 'row'
    },
    btnS:{
        width: 50+"%",
        height: 100+"%",
        marginTop: 7
    },
    btn:{
        width: 100+"%",
        height: 100+"%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c971ff',
        borderWidth: 1,
        borderColor: '#ffffff'
    },
    buttonChoseDateTime:{
        width: 95+"%",
        height: 100+"%",
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ffffff',
        backgroundColor: '#c971ff',
    },
    textDate:{
        fontSize: 16,
        color: '#ffffff',
        fontFamily: 'SourceSerifPro-Regular'
    },
    textbtn:{
        color: '#ffffff',
        fontFamily: 'SourceSerifPro-Semibold',
        fontSize: 18,

    }
});