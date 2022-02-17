import React from 'react'
import {Text, FlatList} from 'react-native'
import Estilo from '../estilo'

import produtos from './produtos'
export default props => {
    return(
        <>
            <Text style={Estilo.txtG}>Lista de Produtos V2:</Text>
            <FlatList
                data={produtos}//Para ler os produtos
                keyExtractor={i => i.id}// Para criar as chaves
                renderItem={({item: p}) => {
                    return <Text>{p.id} {p.nome}</Text>
                }}//Para renderizar cada um dos items, se eu não quiser criar a função aqui eu poderia crai-lá antes do return e depois referenci-lá dentro da chaves
            />
        </>
    )
}
