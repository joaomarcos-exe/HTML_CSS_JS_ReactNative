import React, {Component} from "react";
import {Text, TextInput, Button, View} from 'react-native'
import Estilo from '../estilo'
import MegaNumero from "./Numero";

export default class Mega extends Component {
     state = {
         qtdNumeros: this.props.qtdNumeros,
         numeros:[]
    }


    alteraQtd = (qtd) => {
        this.setState({qtdNumeros: +qtd})
    }
    gearrNumeroNaoContido = nums =>{
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gearrNumeroNaoContido(nums) : novo
    }
    gerarNum = () =>{
        const numeros = Array(this.state.qtdNumeros).fill().reduce(n => [...n, this.gearrNumeroNaoContido(n)], []).sort((a, b) => a - b)
        this.setState({numeros})
    }
    // gerarNum = () =>{
    //     const { qtdNumeros} = this.state
    //     const numeros = []

    //     for(let i = 0; i < qtdNumeros; i++){
    //         numeros.push(this.gearrNumeroNaoContido(numeros))
    //     }
    //     this.setState({numeros})
    // }

    exibirNumeros = () =>{
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num}/>
        })
    }
    
    render() {
        return(
            <>
                <Text style={Estilo.txtG}>
                    Gerador Mega Sena 
                </Text>             
                <TextInput 
                    keyboardType="numeric"
                    style={{borderBottomWidth: 1}}
                    placeholder="Digite a quantidade de numero"
                    value={`${this.state.qtdNumeros}`}
                    onChangeText={this.alteraQtd}
                />
                <Button 
                    title="Gerar"
                    onPress={this.gerarNum}
                />
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent:'center'
                }}>
                    {this.exibirNumeros()}
                </View>
            </>         
        )
    }   
}