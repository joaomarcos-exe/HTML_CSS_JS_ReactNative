import React from "react"
import {View, StyleSheet} from 'react-native'//Invocamos o styleShet para usarmos estilos

import Contado from './components/Contador'
//import Botao from './components/Botao'
//import MinMax from "./components/MinMax"
// import X, { Comp1 , Comp2 } from './components/Multi'
// import BlaBla from './components/Primeiro'
// import Aleatorio from './components/Aleatorio'
//import Titulo from './components/Titulo'


// function App(){
//     //return <Text>Valor textual</Text>
//     return <Text>Valor textual</Text>
// }

//export default App

//<View>Alguma coisa</View>



export default () => (
    //Aqui eu ligo o estilo criado la em baixo ao meu View
    //O primeiro MinMax estamos passando valores string e o segundo valores numericos
    <View style={style.App}>
        <Contado inicial={0}/>
        {/* <MinMax max='30' min='20'/>
        <Botao/>
        <MinMax max={100} min={50}/> */}
        {/* <X/>    
        <Titulo principal="Cadastro de produto"
            secundario="Tela de cadastro do produto"
        />
        <Comp1/>
        <Comp2/>
        <BlaBla></BlaBla>
        <Aleatorio min={30} max= {100}/> */}
        

    </View>
)

const style = StyleSheet.create({//Aqui criamos os estilo como por exemplo irei criar um estilo para o App
    App:{
        flex: 1,//Esse flex e a versão resumida e o 1 significa que o container pode crescer e ocupar a tela toda e na vdd esse é do flexGrow
        justifyContent: "center",
        alignItems: 'center',
        padding: 20
        
    }
})