import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import {NavBarStyle2} from '../components/NavigationBar/NavBar'
import {ButtonSISUStyle1} from '../components/SignInSignUp/ButtonCustomSISU'

export default class AdvertisementScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <NavBarStyle2 ImageUrl={require('../images/navbar/back.png')} Title={"Khuyến mãi"} OnPress={()=>this.props.navigation.goBack()} />
                </View>
                <ScrollView style={{backgroundColor: '#F4F3F4'}}>
                    <View style={styles.textHeaderSection}>
                        <Text style={styles.HeaderText}>SĂN VOUCHER - QUẨY HẾT MÌNH!</Text>
                    </View>

                    <View style={styles.imageSection}>
                        <Image source={require('../images/advertisements/khuyen-mai.jpg')} style={styles.imageAd}/>
                    </View>

                    <View style={styles.detailSection}>
                        <Text style={styles.details}>Đại tiệt mua sắm đăng chào đón các bạn!
                            Hãy nhanh chân tham gia cung vói chúng tôi, tham gia
                            các trò chơi và nhận quà liền tay. Hàng nghìn voucher
                            đang chờ đón bạn. Hãy tham gia ngay nào! {"\n"}
                            Thời gian áp dụng: {"\n"}
                            10-10-2018 đến 21-11-2018 {"\n"}
                            Đối tượng áp dụng : {"\n"}
                            Tất cả các khách hàng {"\n"}
                            Quy định khi tham gia quay số mỗi khách hành
                            có cơ hội nhận được các mã giảm giá, voucher
                            để tạo tin đặc biết{"\n"}
                            Lưu ý : mỗi mã chỉ được sử dụng 1 lần, khách hàng
                            chỉ được sử dung tối đa 3 mã trong thời gian
                            chương trình diễn ra.
                            NHANH TAY THAM GIA NGAY NÀO!
                        </Text>
                    </View>

                    <View style={styles.buttonSection}>
                        <ButtonSISUStyle1 style={{width: 192, height: 39, backgroundColor: '#0CF800', borderRadius: 10}} Name={"Vòng quay may mắn"}/>
                    </View>

                    <View style={styles.timeSection}>
                        <Image source={require('../images/advertisements/clock.png')} style={styles.iconTime}/>
                        <Text style={styles.timeText}>10:10  23-10-2018</Text>
                    </View>

                </ScrollView>

            </View>
        );
    }
}


const styles= StyleSheet.create({
        container: {
            flex: 1
        },
        header: {
            width: 100 + "%",
            height: 54
        },
        HeaderText: {
            fontSize: 12,
            fontWeight: 'bold',
            color: '#183017',

        },
        textHeaderSection: {
            width: 100 + "%",
            height: 16,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 8
        },
        imageSection: {
            width: 100 + "%",
            height: 186,
            marginTop: 6,
            alignItems: 'center'
        },
        imageAd: {
            width: 340,
            height: 186,
        },
        detailSection: {
            width: 100 + "%",
            marginTop: 18,
            alignItems: 'center'
        },
        details: {
            width: 310,
            fontSize: 11,
            color: '#183017',
            lineHeight: 20
        },
        buttonSection: {
            width: 100 + "%",
            height: 40,
            marginTop: 20,
            alignItems: 'center'
        },
        timeSection: {
            marginTop: 20,
            width: 100+"%",
            height: 35,
            flexDirection: 'row'
        },
        iconTime:{
            width: 14, height: 14, marginLeft: 23, marginRight: 10
        },
        timeText:{
                fontSize: 10,
            color: '#183017'
        }
    }
);