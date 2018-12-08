import React, {Component} from 'react'
import {View, Text, StyleSheet, StatusBar, ScrollView, Image, TouchableOpacity} from 'react-native'

import {NavBarStyle1} from '../components/NavigationBar/NavBar'
import ModalDropdown from 'react-native-modal-dropdown';
import {ListProductNormal} from '../components/ListProductNormal'

import {POSITION, CATEGORY, TIME} from '../Data/ListDropDownFilter'
import {ListProductHot} from "../Data/ListProductHot";
import ProductItem from "../components/ProductComponents/ProductItem";
import {ListDataLike} from "../Data/ListLikedData";

export default class FilterScreen extends Component{

    constructor(props) {
        super(props);

        this.state = {
            Position_options: null,
            Position_defaultValue: 'Toàn quốc',
            Category_options: null,
            Category_defaultValue: 'Danh mục',
            Time_options: null,
            Time_defaultValue: 'Thời gian',
        };
    }

    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor={'#9207E5'} barStyle={'light-content'}/>
                <View style={styles.header}>
                    <NavBarStyle1 leftItem={require('../images/navbar/back.png')}
                                  LeftItemEvent={()=>this.props.navigation.goBack()}
                                  Title={"Lọc"}
                                  RightItem1={require('../images/navbar/like.png')}
                                  RightItem2={require('../images/navbar/message.png')}/>
                </View>

                <ScrollView style={styles.main}>
                    <View style={styles.head}>
                        <View style={styles.wrapp}>
                            <View style={styles.sectionInput}>
                                <View style={styles.drpS}>
                                    <Image source={require('../images/productImage/ico/dropdown.png')} style={styles.drp}/>
                                </View>
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
                            <View style={styles.sectionInput}>
                                <View style={styles.drpS}>
                                    <Image source={require('../images/productImage/ico/dropdown.png')} style={styles.drp}/>
                                </View>
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
                            <View style={styles.sectionInput}>
                                <View style={styles.drpS}>
                                    <Image source={require('../images/productImage/ico/dropdown.png')} style={styles.drp}/>
                                </View>
                                <ModalDropdown style={styles.mdPosition}
                                               dropdownStyle={styles.mdPosition_dropdown}
                                               options={this.state.Time_options}
                                               defaultIndex={-1}
                                               defaultValue={this.state.Time_defaultValue}
                                               onDropdownWillShow={this._Time_willShow.bind(this)}
                                               onDropdownWillHide={this._Time_willHide.bind(this)}
                                               onSelect={(idx, value) => this._Time_onSelect(idx, value)}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.listhotSection}>
                        <View style={[styles.productList, {backgroundColor : '#EEEEEE'} ]}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                {
                                    ListProductHot.map((item,index)=>{
                                        return(
                                            <View key={index}>
                                                <ProductItem ImageUrl={item.imageurl} Name={item.name} Cost={item.cost} />
                                            </View>
                                        );
                                    })
                                }
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.allPSection}>
                        <Container>
                            <View style={{flexDirection: 'row', flex:1, flexWrap: 'wrap'}}>
                                {
                                    ListDataLike.map((item, i)=>{
                                        return(
                                            <TouchableOpacity>
                                                <Card key={i}>
                                                    <Image source={item.image} style={styles.image}/>

                                                    <View style={styles.sectionTitle}>
                                                        <Text style={styles.title}>{item.name}</Text>
                                                    </View>

                                                    <View style={styles.priceContainer}>
                                                        <View style={styles.moneyIcon}>
                                                            <Image source={require('../images/productImage/ico/ic_price.png')} style={styles.priceIcoSize}/>
                                                        </View>
                                                        <Text style={styles.price}>{item.price}</Text>
                                                    </View>

                                                    <View style={styles.bottomLine}>
                                                        <View style={styles.sectionUser}>
                                                            <View style={styles.sectionAvatar}>
                                                                <Image source={item.linkImageUser} style={styles.avatarSize}/>
                                                            </View>
                                                            <Text style={styles.username}>{item.UserName}</Text>
                                                        </View>

                                                        <View style={styles.sectionHeart}>
                                                            <View  style={styles.sectionIconHeart}>
                                                                <Image source={require('../images/productImage/ico/likeHeart.png')} style={styles.heartSize}/>
                                                            </View>
                                                            <Text style={styles.theart}>{item.NumOfLike}</Text>
                                                        </View>

                                                    </View>
                                                </Card>
                                            </TouchableOpacity>
                                        );
                                    })
                                }
                            </View>
                        </Container>
                    </View>
                </ScrollView>


            </View>
        )
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
            Position_defaultValue: 'Hà Nội',
        });
    }

    _Position_onSelect(idx, value) {
        console.debug(`idx=${idx}, value='${value}'`);
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
    //Drop Time
    _Time_willShow() {
        setTimeout(() => this.setState({
            Time_options: TIME,
            Time_defaultValue: 'Đã tải',
        }), 2000);
    }


    _Time_willHide() {
        this.setState({
            Time_options: null,
            Time_defaultValue: '1 giờ trước',
        });
    }

    _Time_onSelect(idx, value) {
        console.debug(`idx=${idx}, value='${value}'`);
    }

}

class Container extends Component{
    render(){
        return(
            <View style={styles.container1}>
                {this.props.children}
            </View>
        );
    }
}



class Card extends Component{
    render(){
        return(
            <View style={[styles.cardContainer]}>
                <View style={styles.card}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#EEEEEE'
    },
    header:{
        width: 100+"%",
        height: 54
    },
    main:{
        width: 100+"%",
        height: 586,
        backgroundColor: '#EEEEEE'
    },
    head:{
        width: 100+"%",
        height: 54,
        backgroundColor: '#ffffff',
        justifyContent: 'center'
    },
    listhotSection:{
        height: 105,
        width: 100+"%",
        marginTop: 11,
        backgroundColor: '#EEEEEE'
    },
    line:{
        borderBottomColor: '#CFCFCF',
        borderBottomWidth: 1,
        marginTop: 10,
        width: 340,
        marginLeft: 10,
        backgroundColor: '#EEEEEE'
    },
    allPSection:{
        width: 100+"%",
        marginTop: 10,
    },
    wrapp:{
        width: 100+"%",
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sectionInput:{
        width: 33+"%",
        height: 30,
        flexDirection: 'row',
    },
    mdPosition: {
        width: 100+"%",
    },
    mdPosition1:{
        width: 100+"%",
        marginLeft: 5
    },
    mdPosition_dropdown:{
        width: 200,
        height: 300
    },
    drpS:{
        width: 20,
        height: 10,
        position: 'absolute',
        right: 5,
        top: 5
    },
    drp:{
        width: 20,
        height: 10,
    },
    productList:{
        height: 130, backgroundColor: "#ffffff"
    },
    container1:{
        flex: 1,
        flexDirection: 'row',
    },
    cardContainer:{
        height: 260,
        width: 170,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginTop: 10,
        marginLeft: 6.7,
    },
    card:{
        height: 260,
        width: 170,
        borderColor: '#ccc'
    },
    image:{
        width: 170,
        height: 170
    },
    sectionTitle:{
        width: 100+"%",
        height: 29,
        marginTop: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 16,
        fontFamily: 'SourceSerifPro-Semibold',
        color: '#181818',
        padding: 10
    },
    priceContainer:{
        width: 100+"%",
        height: 21,
        marginTop: 2,
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row'
    },
    moneyIcon:{
        width: 11,
        height: 18,
        marginRight: 17
    },
    price:{
        fontSize: 16,
        fontFamily: 'SourceSerifPro-Semibold',
        color: '#FF0007'
    },
    bottomLine:{
        marginTop: 2,
        width: 100+"%",
        height: 30,
        flexDirection: 'row'
    },
    sectionUser:{
        marginLeft: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    sectionAvatar:{
        width: 30,
        height: 30,
        marginRight: 5
    },
    username:{
        fontSize: 12,
        color: '#183017',
        fontFamily: 'SourceSerifPro-Regular'
    },
    sectionHeart:{
        width: 43,
        height: 18,
        right: 8,
        position: 'absolute',
        marginTop: 7,
        flexDirection: 'row'
    },
    sectionIconHeart:{
        width: 20,
        height: 18,
        marginRight: 5,
        flexDirection: 'row',
    },
    theart:{
        fontSize: 12,
        color: '#FD8689',
        fontFamily: 'SourceSerifPro-Regular'
    },
    priceIcoSize:{
        width: 10,
        height: 18
    },
    avatarSize:{
        width: 30,
        height: 30,
        borderRadius: 15
    },
    heartSize:{
        width: 20,
        height: 18
    }
});
