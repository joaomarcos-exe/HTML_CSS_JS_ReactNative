import React from 'react'
import {StyleSheet, View} from 'react-native'


export default props => {
    const lado = 35
    return(
        <View style={{
            // height: 20,
            // width:20,
            height: lado,
            width: lado,
            backgroundColor: props.color || "pink"
        }}/>
    )
}
