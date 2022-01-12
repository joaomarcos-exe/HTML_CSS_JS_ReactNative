//objeto normal
const pessoa1 = {
    nome: 'Joao Marcos',
    sobrenome: 'Pimenta Martins',
    idade: 19
}
console.log(pessoa1.idade, pessoa1.nome, pessoa1.sobrenome)

//Função construtora
function criarPessoa(nome, sobrenome, idade) {
    return{
        /**nome:nome
         * sobrenome: sobrenome,
         * idade: idade
         * ou pode se fazer tambem
        */
        nome, sobrenome, idade,
        
    }
}

const pessoa2 = criarPessoa('João Marcos', 'Pimenta Martins', 19)
console.log(pessoa2)

//função com objeto e criando metodo
const pessoa3 ={
	nome: 'Luiz',
	sobrenome: 'Miranda',
	idade: 30,

	fala() {
		console.log(`${this.nome} ${this.sobrenome} esta falando oi...`)
	},
	incrementaIdade() {
		++this.idade;
	}
}

pessoa3.fala()
pessoa3.incrementaIdade()
pessoa3.fala

