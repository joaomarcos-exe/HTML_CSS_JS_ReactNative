import React from 'react'
import {View, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'


export default props => {
    return(
        <View style={style.FlexV2}>
            <Quadrado/>
            <Quadrado color="#900"/>
            <Quadrado color="#090"/>
            <Quadrado color="#009"/>
            <Quadrado color="violet"/>
            <Quadrado color="grey"/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2:{
        height:350,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        backgroundColor:"#000",
    }
})
