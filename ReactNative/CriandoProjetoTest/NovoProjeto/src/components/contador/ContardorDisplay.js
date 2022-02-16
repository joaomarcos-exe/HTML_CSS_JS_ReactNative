import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import estilo from '../estilo'


export default props => {
    


    return(
        <View style={[estilo.txtG, style.Display]}>
            <Text style={style.DisplayText}>{props.num}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    Display:{
        backgroundColor: 'black'
    },
    DisplayText:{
        color:'white'
    }
})
