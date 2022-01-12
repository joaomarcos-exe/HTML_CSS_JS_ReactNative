// function normal
function mensagem() {
    console.log('Ola')
}
 
mensagem();

function criarMensagem(nome) {
    console.log(`Ola ${nome}`)
}

criarMensagem('Joao');

function soma(num1, num2) {
    const resultado = num1 + num2
    return resultado
}

console.log(soma(10, 16));

//Arrow function

const test = () =>{
    console.log('Hello word')
}
test();

