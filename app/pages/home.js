import React, {Component} from "react";
import {View,Text,StyleSheet} from "react-native";


class Home extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={styles.box}>
                <Text style={styles.text} onPress={()=>{this.props.navigation.navigate('movieList')}}>这是首頁</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:26,
        color:"#000"
    }
})

export default Home