# CSS Intermediario e Avançado

* [mais-sobre-seletores](#mais-sobre-seletores)
* [heranca-especifica](#heranca-especifica)
* [CriandoBarrasDeNavegaçãoVertical](#CriandoBarrasDeNavegaçãoVertical)



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
