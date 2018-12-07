import React, {Component} from 'react'
import {View, Text, StatusBar,StyleSheet, ScrollView, Image, TouchableOpacity, Modal, PanResponder, TextInput} from 'react-native'
import {NavBarStyle2} from '../components/NavigationBar/NavBar'

import PopArticleButton from '../components/UploadComponent/PopArticleButton'
import LabelCreateButton from '../components/UploadComponent/LabelCreateButton'
import PackageButton from '../components/UploadComponent/PackageButton'
import ModalDropdown from "react-native-modal-dropdown";

const POSITION= [
    'Vinaphone', 'Viettel','Mobifone', 'Vietnamobile'
];

export default class PaymentScreen extends Component{
    constructor(props) {
        super(props);
        this.state={
            visible: false,
            Position_options: null,
            Position_defaultValue: 'Chọn loại thẻ cào',
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


    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor={'#9207E5'} barStyle={'light-content'}/>
                <Modal visible={this.state.visible}
                       transparent={true}
                       onRequestClose={()=>this.setState({visible:false})}  animationType={"fade"}>
                    <View style={styles.containerModal}>
                        <View style={styles.modal}>
                            <Text style={styles.headerPopupText}>Thanh toán</Text>

                            <View style={{marginTop:15, marginLeft: 11}}>
                                <Text style={styles.popupText}>Chọn nhà mạng</Text>
                            </View>

                            <View style={{marginLeft: 10, marginTop: 7}}>
                                <View style={styles.borderChose}>
                                <View style={{marginLeft: 10}}>
                                <ModalDropdown style={styles.mdPosition1}
                                               dropdownStyle={styles.mdPosition_dropdown}
                                               options={this.state.Position_options}
                                               defaultIndex={-1}
                                               defaultValue={this.state.Position_defaultValue}
                                               onDropdownWillShow={this._Position_willShow.bind(this)}
                                               onDropdownWillHide={this._Position_willHide.bind(this)}
                                               onSelect={(idx, value) => this._Position_onSelect(idx, value)}
                                />
                                </View>
                                </View>
                            </View>
                            <View style={{marginTop:5, marginLeft: 11}}>
                                <Text style={styles.popupText}>Số seri</Text>
                            </View>
                            <View style={{marginTop: 7,marginLeft: 11}}>
                                <TextInputC />
                            </View>
                            <View style={{marginTop:5, marginLeft: 11}}>
                                <Text style={styles.popupText}>Mã card</Text>
                            </View>
                            <View style={{marginTop: 7,marginLeft: 11}}>
                                <TextInputC />
                            </View>

                            <View style={styles.buttonPopupSection}>
                                <ButtonC name={"Thanh toán"} styleText={{fontSize: 18}} styleContainer={{width: 180, height: 54, backgroundColor: '#81B47E', borderColor:'#707070', borderWidth: 1}} />
                                <ButtonC OnPress={()=>this.setState({visible:false})} name={"Hủy"} styleText={{fontSize: 18, color:'#070707'}} styleContainer={{width: 180, height: 54, backgroundColor: '#ffffff', borderColor:'#707070', borderWidth: 1}} />
                            </View>

                        </View>
                    </View>
                </Modal>


                <View style={styles.header}>
                    <NavBarStyle2 ImageUrl={require('../images/navbar/back.png')}
                                  OnPress={()=>this.props.navigation.goBack()}
                                  Title={"Mua bán nhanh hơn"} />
                </View>
                <ScrollView style={styles.main}>
                    <View style={styles.infoProduct}>
                        <View style={styles.imageSection}>
                            <Image source={require('../images/Upload/upload1.jpg')} style={styles.imageProduct} />
                        </View>
                        <View style={styles.textInfoSection}>
                            <Text style={styles.name}>Áo sơ mi trắng </Text>
                            <Text style={styles.cost}>250.000 đ</Text>
                            <Text style={styles.time}>Vừa xong</Text>
                        </View>
                    </View>
                    <View>
                        <View style={[styles.line1, styles.shadow]}/>
                    </View>

                    <View style={styles.popInfoSection}>
                        <View style={styles.sectionPopText}>
                            <Text style={styles.textPop}>Đẩy tin</Text>
                        </View>
                        <View style={styles.sectionPopButton}>
                            <View style={styles.Popitem1}>
                                <PopArticleButton label={"Đẩy tin ngay"} day={"1 ngày"} cost={"10.000 đ"}/>
                            </View>
                            <View style={styles.Popitem2}>
                                <PopArticleButton label={"Đẩy tin liên tục"} day={"10 ngày"} cost={"80.000 đ"} Combo={"x10"} Style={{color:'#0CF800'}}/>
                            </View>
                        </View>
                        <View style={{marginTop: 10}}>
                            <View style={styles.line}/>
                        </View>
                    </View>
                    <View style={styles.createLabelSection}>
                        <View style={styles.sectionLabelText}>
                            <Text style={styles.textLabel}>Tạo nhãn tin</Text>
                        </View>
                        <View style={styles.labelSection}>
                            <View style={{marginLeft: 13}}>
                                <LabelCreateButton imageUrl={require('../images/hotS.png')} name={"Nhãn hot"} day={"1 ngày"} cost={"10.000 VNĐ"}/>
                            </View>
                            <View style={{marginLeft: 10}}>
                                <LabelCreateButton imageUrl={require('../images/Upload/new.png')} name={"Nhãn mới"} day={"1 ngày"} cost={"10.000 VNĐ"}/>
                            </View>
                            <View style={{marginLeft: 10}}>
                                <LabelCreateButton imageUrl={require('../images/Upload/discount.png')} name={"Nhãn giảm giá"} day={"1 ngày"} cost={"10.000 VNĐ"}/>
                            </View>
                        </View>
                        <View style={{marginTop: 10}}>
                            <View style={styles.line}/>
                        </View>
                    </View>
                    <View style={styles.packageSection}>
                        <View style={styles.textPackageS}>
                            <Text style={styles.textPackage}>Gói tin</Text>
                        </View>
                        <View style={styles.sectionButtonPackage}>
                            <View style={{marginLeft: 7}}>
                                <PackageButton name={"Gói tiết kiệm"} day={"1 ngày"} cost={"15.000 VNĐ"} imageUrl={require('../images/Upload/firstPackage.png')}/>
                            </View>
                            <View style={{marginLeft: 10}}>
                                <PackageButton name={"Gói cao cấp"} day={"2 ngày"} cost={"25.000 VNĐ"} imageUrl={require('../images/Upload/secondPackage.png')} style={{width: 55}}/>
                            </View>
                        </View>

                    </View>
                    <View style={styles.buttonSection}>
                        <ButtonC  name={"Thanh toán ngay".toUpperCase()}  OnPress={()=>this.setState({visible:true})}/>
                        <ButtonC OnPress={()=> this.props.navigation.goBack()} name={"Trở lại".toUpperCase()} styleContainer={{backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: 'rgba(112, 112, 112, 0.25)'}} styleText={{color:'"rgba(122, 119, 119, 0.68)"'}}/>
                    </View>
                </ScrollView>



            </View>
        );
    }

    //Drop Position
    _Position_willShow() {
        setTimeout(() => this.setState({
            Position_options: POSITION,
            Position_defaultValue: 'Đã tải',
        }), 2000);
    }


    _Position_willHide() {
        this.setState({
            Position_options: null,
            Position_defaultValue: 'Viettel',
        });
    }

    _Position_onSelect(idx, value) {
        console.debug(`idx=${idx}, value='${value}'`);
    }

}



class ButtonC extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <TouchableOpacity onPress={this.props.OnPress}>
            <View style={[{width: 100+"%", height: 30, backgroundColor: '#9B07F3', justifyContent: 'center', alignItems:'center' }, this.props.styleContainer]}>
                <Text style={[{fontSize: 16, color:'#ffffff', fontFamily: 'SourceSerifPro-Regular'},this.props.styleText]}>{this.props.name}</Text>
            </View>
            </TouchableOpacity>
        )
    }
}


class TextInputC  extends Component{
    render(){
        return(
            <View style={styles.borderChose}>
                <TextInput style={{width: 338, height: 40, fontSize: 15,marginLeft: 10, fontFamily: 'SourceSerifPro-Regular'}} />
            </View>
        )
    }
}


const styles= StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        height: 54,
        width: 100+"%",
    },
    infoProduct:{
        width: 100+"%",
        height: 120,
        flexDirection: 'row'
    },
    main:{
      width: 100+"%",
      height: 586,
        backgroundColor: '#ffffff'
    },
    imageSection:{
        width: 127,
        height: 100+"%",
    },
    textInfoSection:{
        width: 233,
        height: 100+"%",
        marginLeft: 13,
    },
    popInfoSection:{
        width: 100+"%",
        height: 145,
    },
    createLabelSection:{
        width: 100+"%",
        height: 191,
    },
    packageSection:{
        width: 100+"%",
        height: 148,
    },
    buttonSection:{
        width: 100+"%",
        height: 90,
    },
    imageProduct:{
        width: 120,
        height: 100,
        marginTop: 10,
        marginLeft: 7
    },
    name:{
        fontSize: 18,
        color: '#7A7777',
        marginTop: 3,
        fontFamily: 'SourceSerifPro-Regular'
    },
    cost:{
        fontSize: 12,
        color: '#9B07F3',
        fontFamily: 'SourceSerifPro-Semibold',
        marginTop: 6
    },
    time:{
        fontSize: 11,
        color: 'rgba(10, 0, 0, 0.38)',
        marginTop: 43,
        fontFamily: 'SourceSerifPro-Regular'
    },
    sectionPopText:{
        width: 100+"%",
        height: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textPop:{
        fontSize: 18,
        color: '#7A7777',
        fontFamily: 'SourceSerifPro-Regular'
    },
    sectionPopButton:{
        width: 360,
        height: 105,
        marginTop: 5,
        flexDirection: 'row'
    },
    Popitem1:{
        marginLeft: 24
    },
    Popitem2:{
        marginLeft: 16
    },
    line:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    line1:{
        borderColor: '#c7c7c7',
        borderBottomColor: '#c7c7c7',
        borderBottomWidth: 1,
    },
    sectionLabelText:{
        width: 100+"%",
        height: 24,
        alignItems: 'center'
    },
    textLabel:{
        fontSize: 18,
        color: '#7A7777',
        fontFamily: 'SourceSerifPro-Regular'
    },
    labelSection:{
        width: 100+"%",
        height: 148,
        marginTop: 8,
        flexDirection: 'row'
    },
    textPackageS:{
        width: 100+"%",
        height: 24,
        alignItems: 'center'
    },
    textPackage:{
        color: '#7A7777',
        fontSize: 18,
        fontFamily: 'SourceSerifPro-Regular'
    },
    sectionButtonPackage:{
        width: 100+"%",
        height: 105,
        marginTop: 8,
        flexDirection: 'row'
    },
    pay:{
        backgroundColor: '#9B07F3',
        color: '#ffffff',
        fontSize: 16,
        fontFamily: 'SourceSerifPro-Regular'
    },
    shadow: {
        shadowColor: 'gray',
        elevation: 5,
        shadowOpacity: 0.75,
        shadowRadius: 1,
        shadowOffset: { height: 0, width: 0 },
        backgroundColor : "#c3c3c3"
    },

    //MODAL STYLE
    containerModal:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modal:{
        width: 360,
        height: 320,
        backgroundColor: '#ffffff',
    },
    mdPosition1: {
        width: 100+"%",
    },
    mdPosition_dropdown:{
        width: 318,
        height: 200
    },
    borderChose:{
        width: 338, height: 30, borderRadius: 20, backgroundColor:'white',justifyContent: 'center',borderColor: '#070707', borderWidth: 1
    },
    headerPopupText:{
        fontSize: 16,
        color: '#933BD0',
        marginTop: 7,
        marginLeft: 10,
        fontFamily: 'SourceSerifPro-Semibold'
    },
    popupText:{
        fontSize: 15,
        color:'#933ACF',
        fontFamily: 'SourceSerifPro-Regular'
    },
    buttonPopupSection:{
        width: 100+"%",
        height: 54,
        backgroundColor:'red',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row'
    }
});
