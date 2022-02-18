import React, {useState} from 'react'
import {View,Text, TextInput} from 'react-native'


export default props => {
    const [nome, setNome] = useState('Pedro')
    return(
        <View>
            <TextInput 
                placeholder='Digite seu nome'

                value={nome}

                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}
