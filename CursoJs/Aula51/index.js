const pessoa = {
    nome: 'Joao Marcos',
    sobrenome: 'Pimenta Martins',
    idade: 19,
    endereco: {
        rua: 'Av. Vitoria',
        numero: 320
    }
}

//Atribuição por desestruturação
// const {nome = '', sobrenome} = pessoa
// console.log(nome, sobrenome)

//Tambem posso mudar o nome da variavel
// const {nome: test = '', sobrenome} = pessoa

// console.log(test, sobrenome)

// const {endereco: {rua = 12345, numero: test2}} = pessoa
// console.log(rua, test2)


//tambem podemos usar o rest para pegar o resto das informaçoes
const {nome, ...resto} = pessoa
console.log(resto)