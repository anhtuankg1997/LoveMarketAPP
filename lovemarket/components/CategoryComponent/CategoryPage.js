import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import CategoryItem from './CategoryItem'
import {ListData1, ListData2,ListData3,ListData4,ListData5} from "../../Data/ListCategoryName";




/*Trang 1 */
class CategoryPage1 extends Component{

    dynamicMargin = function (i) {
        if(i===1) return{marginLeft: 0 };
        else return {marginLeft: 72 };
    };

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.line1}>
                    {ListData1.map((item,i)=>{
                        return(
                            <View key={i} style={this.dynamicMargin(item.id)}>
                                <CategoryItem ImageUrl={item.UrlCategory} Name={item.name}/>
                            </View>
                        );
                     })
                    }
                </View>
                <View style={styles.line2}>
                    {ListData2.map((item,i)=>{
                        return(
                            <View key={i} style={this.dynamicMargin(item.id)}>
                                <CategoryItem ImageUrl={item.UrlCategory} Name={item.name}/>
                            </View>
                        );
                    })
                    }
                </View>
            </View>
        );

    }
}

/*Trang 2 */
class CategoryPage2 extends Component{

    dynamicMargin = function (i) {
        if(i===1) return{marginLeft: 0 };
        else return {marginLeft: 72 };
    };

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.line1}>
                    {ListData3.map((item,i)=>{
                        return(
                            <View key={i} style={this.dynamicMargin(item.id)}>
                                <CategoryItem ImageUrl={item.UrlCategory} Name={item.name}/>
                            </View>
                        );
                    })
                    }
                </View>
                <View style={styles.line2}>
                    {ListData4.map((item,i)=>{
                        return(
                            <View key={i} style={this.dynamicMargin(item.id)}>
                                <CategoryItem ImageUrl={item.UrlCategory} Name={item.name}/>
                            </View>
                        );
                    })
                    }
                </View>
            </View>
        );

    }
}


/*Trang 3 */
class CategoryPage3 extends Component{

    dynamicMargin = function (i) {
        if(i===1) return{marginLeft: 0 };
        else return {marginLeft: 72 };
    };

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.line1}>
                    {ListData5.map((item,i)=>{
                        return(
                            <View key={i} style={this.dynamicMargin(item.id)}>

                                <CategoryItem ImageUrl={item.UrlCategory} Name={item.name}/>
                            </View>
                        );
                    })
                    }
                </View>
            </View>
        );

    }
}

/* Export Multiple File in One JS FILE */
module.exports={
    CategoryPage1: CategoryPage1,
    CategoryPage2: CategoryPage2,
    CategoryPage3: CategoryPage3
};

const styles= StyleSheet.create({
    container:{
       width: 100+"%",
       height: 100+"%",
       position: 'absolute',
       backgroundColor: '#F1F3F1',
    },
    line2:{
        width: 100+"%",
        flexDirection: 'row',

    },
    line1:{
        height: 80,
        width: 100+"%",
        flexDirection: 'row',
        marginTop: 10
    },
});