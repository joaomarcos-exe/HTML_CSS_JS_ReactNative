import React, {useState} from 'react'
import Filho from '../indireto/Filho'
import {Text} from 'react-native'

export default props => {
    const [num, setNum] = useState(0)
    function mostrarVal(valor){
        setNum(valor)
    }
    return(
        <>
            <Text>{num}</Text>
            <Filho min={10} max={20} funcao={mostrarVal}/>
        </>
    )
}
