class Dispositivo{
	contrutor(nome){
		this.nome = nome;
		this.ligado = false;
	}

	ligar(){
		if(this.ligado){
			console.log('Ligado')
			return
		}
		this.ligado = true;
	}

	desligar(){
		if(!this.ligado){
			console.log('Desligado')
			return;
		}
	}
}
const s2 = new Dispositivo()

class Smartphone extends Dispositivo{//Pega os metodos do Dispostivo
	construtor(nome, cor){
		super(nome);//chamar o contrutor da classe pai
        this.cor = "blue"
	}
}

const s1 = new Smartphone('Iphone', "blue")
console.log(Smartphone)