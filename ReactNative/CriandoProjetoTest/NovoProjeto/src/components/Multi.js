import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

export default function Comp(){

    return <Text>Comp Oficial</Text>

}

export function Comp1(){

    return <Text style = {Estilo.textP}>Comp #1</Text>

}

export function Comp2(){

    return <Text style = {Estilo.textP}>Comp #2</Text>

}

//export {Comp1, Comp2}
//export default Comp