import React from "react"
import {View} from 'react-native'

import X, { Comp1 , Comp2 } from './components/Multi'
import BlaBla from './components/Primeiro'

// function App(){
//     //return <Text>Valor textual</Text>
//     return <Text>Valor textual</Text>
// }

//export default App

//<View>Alguma coisa</View>


//export default () => <View><BlaBla></BlaBla></View>

export default () => (
    <View>
        <Comp1/>
        <Comp2/>
        <X/>

    </View>
    )