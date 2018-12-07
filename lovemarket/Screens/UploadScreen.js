import React, {Component} from 'react'
import {View, Text, StatusBar, StyleSheet, ScrollView, ImageBackground, Image, Modal} from 'react-native'
import {NavBarStyle1} from '../components/NavigationBar/NavBar'
import ModalDropdown from 'react-native-modal-dropdown';

import {CATEGORY} from '../Data/ListDropDownFilter'

import TextInputUploadCustom from '../components/UploadComponent/TextInputUploadCustom'
import ButtonCustomUpload from '../components/UploadComponent/ButtonCustomUpload'

export default class UploadScreen extends Component{

    constructor(props) {
        super(props);

        this.state = {
            Category_options: null,
            Category_defaultValue: 'Chọn danh mục',
        };
    }

    render() {
        return(
        <View style={styles.container}>
            <StatusBar backgroundColor={'#9207E5'} barStyle={'light-content'}/>
            <View style={styles.header}>
                <NavBarStyle1 leftItem={require('../images/navbar/back.png')}
                              Title={"Đăng tin sản phẩm"}
                              RightItem1={require('../images/navbar/like.png')}
                              RightItem2={require('../images/navbar/message.png')}
                              RightItem1Event={()=>this.props.navigation.navigate('LikeList')}
                              RightItem2Event={()=>this.props.navigation.navigate('MessengerScreen')}/>
            </View>
            <ScrollView style={styles.main}>
                <ImageBackground style={{flex:1}} source={require('../images/Upload/bgDT.png')}>
                    <View>
                        <View style={styles.textHeaderS}>
                            <Text style={styles.textHeadUpload}>Đăng tin sản phẩm</Text>
                            <Text style={styles.textBottomUpload}>Bạn có thể đăng tin mua hoặc bán một sản phẩm ngay bây giờ !</Text>
                        </View>
                        <View style={styles.formSection}>
                            <View style={styles.formUpload}>
                                <View style={styles.formTextSection}>
                                    <View style={styles.textInputSection}>
                                        <TextInputUploadCustom Title={"Tên sản phẩm"} placeholder={"Nhập tên sản phẩm"}/>
                                    </View>
                                    <View style={styles.textInputSection1}>
                                        <TextInputUploadCustom Title={"Giá (VNĐ)"} placeholder={"Nhập giá"}/>
                                    </View>
                                    <View style={styles.textInputSection1}>
                                        <TextInputUploadCustom Title={"Tên thẻ"} placeholder={"Nhập tên thẻ"}/>
                                    </View>
                                    <View style={styles.textInputSection1}>
                                        <TextInputUploadCustom Title={"Mô tả sản phẩm"} placeholder={"Nhập mô tả sản phẩm"}/>
                                    </View>
                                    <View style={styles.textInputSection2}>
                                        <Text style={styles.title}>Danh mục</Text>
                                        <View style={styles.modalDropDown}>
                                        <ModalDropdown style={styles.mdPosition}
                                                       dropdownStyle={styles.mdPosition_dropdown}
                                                       options={this.state.Category_options}
                                                       defaultIndex={-1}
                                                       defaultValue={this.state.Category_defaultValue}
                                                       onDropdownWillShow={this._Category_willShow.bind(this)}
                                                       onDropdownWillHide={this._Category_willHide.bind(this)}
                                                       onSelect={(idx, value) => this._Category_onSelect(idx, value)}
                                        />
                                        </View>
                                        <View style={styles.line}/>
                                    </View>
                                    <View style={styles.buttonSection}>
                                        <ButtonCustomUpload OnPress={()=>this.props.navigation.navigate('PaymentScreen')}/>
                                    </View>
                                </View>
                                <View style={styles.imageUploadSection}>
                                    <View style={styles.imageUploadS}>
                                        <Image source={require('../images/Upload/upload1.jpg')} style={styles.image}/>
                                        <Image source={require('../images/Upload/upload2.jpg')} style={styles.image}/>
                                        <Image source={require('../images/Upload/upload3.jpg')} style={styles.image}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.marginForForm} />
                    </View>
                </ImageBackground>
            </ScrollView>


        </View>
        );
    }

    //Drop Category
    _Category_willShow() {
        setTimeout(() => this.setState({
            Category_options: CATEGORY,
            Category_defaultValue: 'Đã tải',
        }), 2000);
    }


    _Category_willHide() {
        this.setState({
            Category_options: null,
            Category_defaultValue: 'Valentine',
        });
    }

    _Category_onSelect(idx, value) {
        console.debug(`idx=${idx}, value='${value}'`);
    }

}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        width: 100+"%",
        height: 54
    },
    main:{
        width: 100+"%",
        height: 700,
    },
    textHeaderS:{
        width: 100+"%",
        height: 60,
        marginTop: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formSection:{
        width: 100+"%",
        height: 500,
        marginTop: 29,
        alignItems: 'center'
    },
    formUpload:{
        width: 300,
        height: 100+"%",
    },
    marginForForm:{
        width: 100+"%",
        height: 20,
        backgroundColor:'#ffffff'
    },
    imageUploadSection:{
        width: 100+"%",
        height: 80,
        alignItems: 'center'
    },
    imageUploadS:{
        width: 250,
        height: 100+"%",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    formTextSection:{
        width: 100+"%",
        height: 462,
        backgroundColor: '#EBEBEB',
        position: 'absolute',
        marginTop: 38
    },
    image:{
        width: 80,
        height: 80,
        backgroundColor: 'white'
    },
    textInputSection:{
        width: 100+"%",
        height: 50,
        marginTop: 53,
        alignItems: 'center'
    },
    textInputSection1:{
        width: 100+"%",
        height: 50,
        marginTop: 10,
        alignItems: 'center'
    },
    textInputSection2:{
        width: 250,
        height: 50,
        marginLeft: 25,
        marginTop: 10
    },
    mdPosition:{
        width: 150,
        fontSize: 14,
        marginTop: 10,
        fontFamily: 'SourceSerifPro-Regular'
    },
    modalDropDown:{
      marginTop: 5
    },
    mdPosition_dropdown:{
        width: 250,
        height: 300,
    },
    buttonSection:{
        width: 100+"%",
        height: 42,
        marginTop: 34,
        alignItems: 'center'
    },
    line:{
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
    },
    title:{
        color: '#000000',
        fontFamily: 'SourceSerifPro-Semibold'
    },
    textHeadUpload:{
        fontSize: 20,
        color: '#ffffff',
        fontFamily: 'SourceSerifPro-Regular'
    },
    textBottomUpload:{
        fontSize: 12,
        color: '#ffffff',
        width: 244,
        textAlign: 'center',
        fontFamily: 'SourceSerifPro-Regular'
    }
});