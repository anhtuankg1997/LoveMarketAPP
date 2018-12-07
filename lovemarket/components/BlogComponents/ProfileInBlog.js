import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'


export default class ProfileInBlog extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.avatarSection}>
                    <Image source={this.props.AvatarUrl} style={styles.avatar} />
                </View>
                <View style={styles.infoSection}>
                    <View style={styles.header}>
                        <View style={styles.groupText}>
                            <Text style={styles.num}>10</Text>
                            <Text style={styles.textS}>Bài viết</Text>
                        </View>
                        <View style={styles.groupText}>
                            <Text style={styles.num}>500</Text>
                            <Text style={styles.textS}>Người theo dõi</Text>
                        </View>
                        <View style={styles.groupText}>
                            <Text style={styles.num}>5k</Text>
                            <Text style={styles.textS}>Đang theo dõi</Text>
                        </View>
                    </View>
                    <View style={styles.buttonSection}>
                        <TouchableOpacity>
                        <View style={styles.button}>
                            <Text style={{fontFamily: 'SourceSerifPro-Regular'}}>Chỉnh sửa thông tin</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
    },
    avatarSection:{
        width: 106,
        height: 100+"%",
    },
    infoSection:{
        width: 254,
        height: 100+"%",
        alignItems: 'center'
    },
    header:{
        width: 231,
        height: 49,
        marginTop: 6,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonSection:{
        width: 240,
        height: 30,
        marginTop: 5,
        borderColor: 'black',
        borderWidth: 1
    },
    groupText:{
        alignItems: 'center',
        marginTop: 6
    },
    num:{
        fontSize: 20,
        color: '#7E7E7E',
        fontFamily: 'SourceSerifPro-Semibold'
    },
    textS:{
        fontSize: 12,
        color: '#7E7E7E',
        fontFamily: 'SourceSerifPro-Regular'
    },
    avatar:{
        width: 90, height: 90, borderRadius: 45 , marginLeft: 16
    },
    button:{
        width:100+"%", height:  100+"%",justifyContent: 'center', alignItems: 'center'
    }

});