import React, {useState} from 'react'
import {Text, View, StyleSheet} from 'react-native'

import ContardorDisplay from './ContardorDisplay'
import Estilo from '../estilo'
import ContadorBotoes from './ContadorBotoes'

export default props => {
    const [num, setNum] = useState(0)
    const inc = () => setNum(num +1)
    const dec = () => setNum(num -1)
    return(
        <>
            <Text style={Estilo.txtG}>ContadorV2</Text>
            <ContardorDisplay num={num}/>
            <ContadorBotoes inc={inc} dec={dec}/>
        </>
    )
}

