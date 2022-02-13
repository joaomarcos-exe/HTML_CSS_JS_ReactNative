import React from "react";
import {Text} from 'react-native'
import Estilo from "./estilo";

export default (props) => {
    console.warn(props)
    return(
        <Text style ={Estilo.txtG}>
            O numero {props.max} e maior que o numero {props.min}
        </Text>
    )
}