import React, {Component} from  'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

export default class ProductItem extends Component{
    constructor(props) {
        super(props);
    }


    render(){
        return(
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductDetail')}>
            <View style={styles.container}>
                <View>
                    <Image source={this.props.ImageUrl} style={styles.imageStyle} />
                    <View style={styles.productLabelS}>
                        <Image source={require('../../images/productImage/labelHot.png')} style={styles.productLabel}/>
                    </View>
                    <View style={styles.ctproductName}>
                        <Text style={styles.productName}>{this.props.Name}</Text>
                    </View>
                </View>
                <View style={styles.ctCost}>
                        <Text style={styles.productCost}>{this.props.Cost} VNĐ</Text>
                </View>
            </View>
            </TouchableOpacity>
        );
    }

}


const styles= StyleSheet.create({
    container:{
        height: 105, width: 148, marginLeft: 7, borderWidth: 0.5, borderColor: "#9B07F3",
    },
    imageStyle:{
        width: 100+"%", height:86, resizeMode: 'cover' , backgroundColor: '#11ff30'
    },
    ctproductName:{
        height: 19,
        width: 100+"%",
        backgroundColor: 'rgba(155, 7, 243, 0.6)',position: 'absolute', top: 67, alignItems: 'center', justifyContent: 'center',

    },
    productName:{
        fontSize: 13,
        color: 'white',
        fontFamily: 'SourceSerifPro-Bold'
    },
    ctCost:{
        height: 19,
        backgroundColor: 'white',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    productCost:{
        fontSize: 12,
        fontWeight: 'bold',
        color: '#ff0007',
        fontFamily: 'SourceSerifPro-Bold'
    },
    productLabelS:{
        width: 100+"%",
        height: 39,
        backgroundColor: 'transparent',
        position: 'absolute', alignItems: 'flex-end'
    },
    productLabel:{
        width: 39,
        height: 39,
    }
});