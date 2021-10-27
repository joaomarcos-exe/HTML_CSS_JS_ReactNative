# CSS Intermediario e Avançado

* [mais-sobre-seletores](#mais-sobre-seletores)
* [heranca-especifica](#heranca-especifica)
* [CriandoBarrasDeNavegaçãoVertical](#CriandoBarrasDeNavegaçãoVertical)
* [Marcando-pagína-atual](#Marcando-pagína-atual)
* [BarraDeNavegacaoVertical](#BarraDeNavegacaoVertical)
* [LayoutLiquido](#LayoutLiquido)
* [ColunaFalsa](#ColunaFalsa)
* [EstilizandoTabelas](#EstilizandoTabelas)
* [EstilizandoFormularios](#EstilizandoFormularios)
* [ArredondamentoComImagens](#ArredondamentoComImagens)



## mais-sobre-seletores

Ex: 

```css
* {
    /*Seletor universal*/
}

h1, h2, h3 {
    /*Seletor de texto*/
}

.verde {
    /*Seletor de classe*/
}

p.verde{
    /*aplica a classe verde apenas em paragrafos*/
}

#cabesalho {
    /*Seletor por id*/
}

li>a {
    /*seletor de filho*/
}

li a {
    /*Seletor de decendentes*/
}

h1+p {
    /*Seletor adjacente*/
}

h1-p {
    /*Seletor de irmão geral*/
}


```

Seletor de filho: ele e usado para selecionar apenas um elemento que e filho de um outro elemento como no exemplo que se aplica o estilo apenas em elementos que são filhos do elemento li e tem que estar diretament dentro do elemento.

Seletor de decendetes: Ele e quase igual ao seletor filho porem ele não precissa estar diretament ligado ao elemento li pois pode ter outro elemento entre eles.

Seletor de irmão adjacente: Como no exemplo o estilo sera aplicado a um elemento p depois do h1 que seja adjacente a ele e não pode ter nenhum outro elemento entre eles.

Seletor de irmão geral: Este e igula ao irmão adjacente porem neste não precisam estar um depois do outro e mais de um são escolhidos e não pode ter nenhum elemento entre eles.

## heranca-especifica

Quando se aplica uma formatação no body os outros elementos recebe de herança essa formatação é bem normal usarmos isto para colocar configuraçoes padroes, porem tem algumas coisa bem mais especificas que não dão para ser herdade como a borda, background, etc...

A espeficidade e importante para que possamos ver quais regras serão aplicadas primeiro. Se tiver 2 seletores iguais no css o ultimo sera o que ira permanecer porem podemos quebrar isso se colocarmos !important.

```css
#pagina p{
    color: blue !important;
}
#pagina p{
    color: blue;
}
```

O primeira sera o que ira prevalecer e não se deve usar ele com muita frequencia mas se deve utilizar com cautela.

E tambem se tiver 2 seletores especifico o mais especifico sera aplicado.

```css
* {
    color: blue;
}
h2 {
    color: red;
}

h2.verde {/*Esse é ainda mais especifico que so o h2*/
    color: grey;
}
h2#verde {/*O id e mais especifico do que a classe*/
    color: brown;
} 
```

## CriandoBarrasDeNavegaçãoVertical

Para fazermos uma lista vertical utilizamos uma lista não ordenada.

Olhar o arquivos navegacaovertical.css

## Marcando-pagína-atual

Para isso podemos fazer usando seletores especifico por exemplo:

```css
#home .link a {
    
}
```

Neste exemplo diz que quero que seja aplicado o estilo na tag A que e filho da classe link que e filho do id home.

```css
#home #mavegacao .index a,
#sobre #mavegacao .sobre a {
	background-position: right bottom;
	background-color: #f99200;
	color: #FFF;
}
```

## LayoutLiquido

Ao criar layout fixos eu tenho um maior controle sobre o que é mostrado ao usuario mas dependendo e melhor usar outro tipo de layout

## ColunaFalsa

Este tipo de coluna não podemos aplicar em layout liquidos e apenas em layouts fixos

## EstilizandoTabelas

Quando colocamos bordas em elemetos de uma tabela como th, tr e td se fica um espacamento entre eles porem para resolver isso apenas precisamos usar o comando:

```css
table {
	width: 600px;
	border-collapse: collapse;
}
```

E as bordas irão se juntar, por padrão se vem com separete.

## EstilizandoFormularios

Neste parte aprendemos uma tag chamada fieldset que serve para agrupar dados semelhantes.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formularios</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Estilizando Formularios</h1>
    <form>
        <fieldset>
            
        </fieldset>
    </form>

</body>
</html>
```

Uma coisa que tambem vi foi o seletor por atributo por exemplo eu tenho varios inputs em meu html e quero escolher apenas os inputs que são do tipo texto eu faço:

```css
input[type="text"]{
    
}
```

porem nem todos os navegadores tem suporte a este tipo de seletor por ser recente e por conta disso e recomendado a utilização de classes.

### Degrade

Para se fazer um degrade no css utilizamos o linear-grade porem não funciona em todos os navegadores e por isso temos que configurar o webkit para usa-lo:

```css
background: linear-gradient(to bottom, #faa600, #f68a00);
```



## ArredondamentoComImagens
