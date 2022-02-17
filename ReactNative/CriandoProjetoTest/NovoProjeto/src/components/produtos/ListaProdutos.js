import React from 'react'
import {Text} from 'react-native'

import produtos from './produtos'
import Estilo from '../estilo'

export default props => {
    /*function listaComp{
        return produtos.map(p => {
            return <Text key={p.id}>{p.id} {p.nome}  R${p.preco}</Text>
        })
    }*/
    return(
        <>
            <Text style={Estilo.txtG}>Lista de Produtos:</Text>
            {produtos.map(p =>{
                return <Text key={p.id}>{p.id} {p.nome}  R${p.preco}</Text>//E bom que usemos o key para que seja criado uma chave unica para ajudar o react native a saber quando um objeto foi ou não apagado.
                /**Tambem posso fazer uma função por exeplo:
                 * {listaComp()}
                 */
            })}
        </>
    )
}
