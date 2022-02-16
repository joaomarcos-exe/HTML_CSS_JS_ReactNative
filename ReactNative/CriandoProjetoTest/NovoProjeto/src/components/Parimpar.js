import React from 'react'
import {Text, View} from 'react-native'


export default ({num = 0}) => {
    return(
        <View>
            <Text>O resultado é:</Text>
            {
                num % 2 === 0 
                ? <Text>Par</Text>
                :<Text>Impar</Text>//Assim que se usa rencderização condicional no js e se não quisermos retornar nada no impar e so colocarmos false
            }
        </View>
    )
}
