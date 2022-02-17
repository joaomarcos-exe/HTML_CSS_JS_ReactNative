import React from 'react'
import {Text} from 'react-native'
import If from './If'


export default props => {
    const usuario = props.usuario || {}
    return(
        <>
            {/* <If test={usuario && Object.keys(usuario).length !== 0}> */}
            <If test={usuario && usuario.nome && usuario.email}>
                <Text>  
                    Usuario Logado:
                </Text>
                <Text>
                {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
    )
}
