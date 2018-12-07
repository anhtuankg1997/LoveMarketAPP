import React,{Component} from 'react'
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

/* Back , Title, Item 1, Item 2*/
class NavBarStyle1 extends Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.LeftItemEvent}>
                    <Image source={this.props.leftItem} style={styles.leftIcon}/>
                </TouchableOpacity>

                <View style={styles.titleNavbarSection}>
                    <Text style={[styles.titleText, this.props.styleTextHeader]} onPress={this.props.OnPress}>{this.props.Title}</Text>
                </View>

                <TouchableOpacity onPress={this.props.RightItem1Event}>
                    <Image source={this.props.RightItem1} style={styles.like}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.RightItem2Event}>
                <Image source={this.props.RightItem2} style={styles.message}/>
                </TouchableOpacity>
            </View>
        );
    }
}

/* Item left , Title */
class NavBarStyle2 extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.OnPress}>
                    <Image source={this.props.ImageUrl} style={styles.leftIcon}/>
                </TouchableOpacity>

                <View style={styles.titleNavbarSection}>
                    <Text style={styles.titleText} >{this.props.Title}</Text>
                </View>
            </View>
        );
    }
}

//Input
//LeftItem, InputText, RightIcon
class NavBarStyle3 extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.OnPress}>
                    <Image source={this.props.LeftIcon} style={styles.leftIcon}/>
                </TouchableOpacity>

                <TextInput
                    placeholder ={this.props.Title}  placeholderTextColor={"#FFFFFF"}
                    style={[styles.ipText, this.props.styleTextInput]}/>

                <TouchableOpacity>
                    <Image source={this.props.RightIcon} style={[styles.message, this.props.styleIconRight]}/>
                </TouchableOpacity>
            </View>
        );
    }
}

/* Item left , Title, Button */
class NavBarStyle4 extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.OnPress}>
                    <Image source={this.props.ImageUrl} style={styles.leftIcon}/>
                </TouchableOpacity>

                <View style={styles.titleNavbarSection}>
                    <Text style={styles.titleText} >{this.props.Title}</Text>
                </View>


                <View style={styles.sectionButton}>
                    <TouchableOpacity onPress={this.props.onPress}>
                    <View style={styles.buttonStyle}>
                        <Text style={styles.textButton}>{this.props.buttonName}</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

//Style for detailScreen Chat
class NavBarStyle5 extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.OnPress}>
                    <Image source={this.props.ImageUrl} style={styles.leftIcon}/>
                </TouchableOpacity>

                <View style={styles.usernameSection}>
                    <Text style={styles.usernameText}>{this.props.Username}</Text>
                    <Text style={styles.timeText}>{this.props.TimeOnline}</Text>
                </View>


            </View>
        );
    }
}


module.exports={
    NavBarStyle1: NavBarStyle1,
    NavBarStyle2: NavBarStyle2,
    NavBarStyle3: NavBarStyle3,
    NavBarStyle4:NavBarStyle4,
    NavBarStyle5: NavBarStyle5
};

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        width: 100+"%",
        height: 54,
        backgroundColor: '#9B07F3',
        flex: 1,
        flexDirection: 'row',
    },
    titleNavbarSection:{
        marginTop: 12,
        marginLeft: 19,
        width: 207
    },
    titleText:{
        fontSize: 20,
        color:'white',
        fontFamily: 'SourceSerifPro-Regular'
    },
    leftIcon:{
        width: 30, height:30, marginLeft: 12, marginTop: 12
    },
    ipText:{
        height: 43, width: 222,  fontSize: 20, marginLeft: 0,  marginTop:10 , color: '#FFFFFF'
    },
    like:{
        width: 30, height:28, marginLeft: 12, marginTop: 13
    },
    message:{
        width: 30, height:30, marginLeft: 12, marginTop: 12
    },
    sectionButton:{
        position: 'absolute',
        width: 64,
        height: 32,
        top: 12,
        right: 10,
        backgroundColor: '#FD8689',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    usernameSection:{
        width: 80+"%",
        height: 100+"%",
        marginLeft: 30
    },
    usernameText:{
        fontSize: 20,
        color: '#ffffff',
        marginTop: 5,
        fontFamily: 'SourceSerifPro-Regular'
    },
    timeText:{
        fontSize: 10,
        color: '#ffffff',
        marginTop: 4
    },
    buttonStyle:{
        width: 100+"%", height: 100+"%", justifyContent: 'center', alignItems: 'center'
    },
    textButton:{
        color: '#ffffff', fontSize: 12, fontFamily: 'SourceSerifPro-Bold'
    }

});