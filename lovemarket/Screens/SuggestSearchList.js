import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native'
import {NavBarStyle3} from '../components/NavigationBar/NavBar'
import AutoWithViewTextInside from '../components/AutoWithViewTextInside'

class ItemRecent extends Component{
    render(){
        return(
            <View style={[{flexDirection: 'row', marginTop: 7}, this.props.styleITEM]}>
                <Image source={this.props.UrlImageR} style={{width: 20, height: 20, marginRight: 7}}/>
                <Text>{this.props.NameItemR}</Text>
            </View>
        );
    }
}


export default class SuggestSearchList extends Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor={"#9207E5"} barStyle={'light-content'}/>
                <View style={styles.header}>
                    <NavBarStyle3 LeftIcon={require('../images/navbar/search.png')}
                                  Title={"Tìm kiếm"}
                                  RightIcon ={require('../images/navbar/removeICO.png')}
                                  styleTextInput={{width: 280}} styleIconRight={{width: 14, height: 14, marginTop: 20}}/>
                </View>
                <View style={styles.container1}>
                    <View style={styles.hotSection}>
                        <Text style={styles.textStyle}>Tìm kiếm nổi bật</Text>
                        <View>
                            <View style={styles.line1}>
                                <AutoWithViewTextInside Name={"Quà tặng giáng sinh"} customView={{backgroundColor: '#948181'}} customText={{fontSize: 15}}/>
                                <AutoWithViewTextInside Name={"Áo thun nam"} customView={{backgroundColor: '#0CF800'}} customText={{fontSize: 15}}/>
                            </View>
                            <View style={styles.line2}>
                                <AutoWithViewTextInside Name={"Nhẫn đôi"} customView={{backgroundColor: '#FFFE87'}} customText={{fontSize: 15}}/>
                                <AutoWithViewTextInside Name={"Laptop"} customView={{backgroundColor: '#8F5FAB'}} customText={{fontSize: 15}}/>
                                <AutoWithViewTextInside Name={"Nón kết"} customView={{backgroundColor: '#FD8689'}} customText={{fontSize: 15}}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.recentSection}>
                        <Text style={styles.textStyle}>Tìm kiếm gần đây</Text>
                        <View style={styles.listRecentS}>
                            <ItemRecent UrlImageR={require('../images/iconDif/clockICO.png')} NameItemR={"Thịt bò"} styleITEM={{marginTop: 3}} />
                            <ItemRecent UrlImageR={require('../images/iconDif/clockICO.png')} NameItemR={"Tiền"} />
                            <ItemRecent UrlImageR={require('../images/iconDif/clockICO.png')} NameItemR={"Biệt thự tỉ đô"} />
                            <ItemRecent UrlImageR={require('../images/iconDif/clockICO.png')} NameItemR={"Áo choàng nam"} />
                            <ItemRecent UrlImageR={require('../images/iconDif/clockICO.png')} NameItemR={"Chuột gaming"} />
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header:{
      width: 100+'%',
      height: 54
    },
    container1:{
        marginHorizontal: 9,
        marginVertical: 10,
        flex: 1
    },
    hotSection:{
        width: 100+"%",
        height: 136,
    },
    recentSection:{
        width: 100+"%",
        height: 162,
        marginTop: 25,
    },
    line1:{
        flexDirection: 'row',
        marginTop: 12,
        justifyContent: 'space-between'
    },
    line2:{
        flexDirection: 'row',
        marginTop: 19,
        justifyContent: 'space-between'
    },
    textStyle:{
        fontSize: 18,
        color: '#183017'
    }
});