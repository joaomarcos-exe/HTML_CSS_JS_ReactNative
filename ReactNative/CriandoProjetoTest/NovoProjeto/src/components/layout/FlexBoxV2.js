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
        flex:1,
        width:'100%',
        alignItems:'stretch',
        backgroundColor:"#000",
        justifyContent:'space-between'
    }
})
