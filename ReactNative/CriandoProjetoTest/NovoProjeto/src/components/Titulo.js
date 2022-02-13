import React from "react";
import {View, Text} from 'react-native'
import Estilo from './estilo'

export default props =>{
    return (
        <React.Fragment>
            <Text style={Estilo.txtG}>
                {props.principal}
            </Text>
            <Text style={Estilo.textP}>
                {props.secundario}
            </Text>
        </React.Fragment>
    )
}