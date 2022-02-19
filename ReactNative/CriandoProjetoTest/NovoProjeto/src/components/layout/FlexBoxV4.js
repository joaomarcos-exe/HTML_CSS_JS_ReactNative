import React from 'react'
import {View, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'


export default props => {
    return(
        <View style={style.FlexV4}>
            <View style={style.V0}/>
            <View style={style.V1}/>
            <View style={style.V2}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4:{
        width:100,
        flex:1,
        backgroundColor:"#000",
    },
    V0:{
        backgroundColor:'purple',
        height:300
    },
    V1:{
        backgroundColor: 'violet',
        flexGrow:10
    },
    V2:{
        backgroundColor: 'blue',
        flexGrow:200
    }
})
