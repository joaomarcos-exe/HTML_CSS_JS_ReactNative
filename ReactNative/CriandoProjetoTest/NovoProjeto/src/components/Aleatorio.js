import React from "react";
import {Text} from 'react-native';
import estilo from "./estilo";

export default (props) => {//Ao inves de colocar props no paramentro da arrow eu posso colocar {min, max} para que ali mesmo ela ja seja desestrututrado
    //console.warn(props)
    const aleNumber = (Math.random() * (props.max - props.min) + props.min).toFixed()
    return <Text style ={estilo.txtG}>Um numero aleatorio entre {props.min} e {props.max}: {aleNumber}</Text>
}