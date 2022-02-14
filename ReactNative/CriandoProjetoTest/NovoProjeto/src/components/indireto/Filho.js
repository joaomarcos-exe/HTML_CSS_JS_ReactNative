import React from 'react'
import {Button} from 'react-native'


export default props => {
    function gerarNumero(min, max){
        return (Math.random() * (max - min) + min).toFixed()
    }
    return(
        <Button
            title='Executar'
            onPress={() =>{ 
                const n = gerarNumero(props.min , props.max)
                props.funcao(n)  
            }}
            
        />
    )
}
