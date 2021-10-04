# CSS

* [Inline_css](#Inline_css)
* [Seletores_css](#Seletores_css)
* [Classes_e_IDs](#Classes_e_IDs)
* [Tags_div_e_span](#Tags_div_e_span)
* [Bordas](#Bordas)
* [Fontes_e_cores](#Fontes_e_cores)
* [Tamanhos-de-fontes](#Tamanhos-de-fontes)
* [Estilos-de-texto](#Estilos-de-texto)
* [cor-e-imagem-de-fundo](#cor-e-imagem-de-fundo)
* [css-externo](#css-externo)
* [modelo-de-caixa](#modelo-de-caixa)
* [Elementos Flutuantes](#Elementos Flutuantes)
* [ElementosInlineBlockEInlineblock](#ElementosInlineBlockEInlineblock)
* [PosicionamentosEstaticos-Relativos-Absolute-Fixo](#PosicionamentosEstaticos-Relativos-Absolute-Fixo)
* [SobrepondoElementos](#SobrepondoElementos)
* [FormatandoLinks](#FormatandoLinks)



## Inline_css

Existem 3 tipos de maneis de colocar css no codigo que são inline onde colocamos o estilo direto no elemento, Internal style sheet que e colocado dentro de uma no head do html e External Style Sheet que é em um arquivo .css separado. Nesta Parte vamos ver o Inline.

```html
<h1 style="color: blue;">
    Algum texto
</h1>
```

## Seletores_css

Tags_div_e_spanIremos ver como colocar o css direto no head do html. Podemos usar uma tag como seletor por exemplo ser uma tag como no exemplo.

```html
<head>
    <style type="text/css">
        p {
            color: red;
        }
    </style>
</head>
```

## Classes_e_IDs

Um ID e um identificador e não se pode repetir o mesmo ID em outro elemento e uma classe pode ser utilizada varias vezes.

```html
<p class="azul">text/css
    lorem
</p>
<p class="azul" id="azul">
    lorem
</p>
```

```css
.azul {
    color: blue;
}
```

Id

```css
#azul {
    color: blue;
}
```

ID normalmente são usados para estruturar o codigo

## Tags_div_e_span

As divs poderemos usar ela para dividir e formatar varias coisas em css de uma vez so.

```html
<div id="conteudo">
    <div class="produto">
        produto 1
    </div>
    <div class="produto">
        produto 2
    </div>
    <div class="produto">
        produto 3
    </div>
</div>
```

```css
#conteudo {
    background: red;
}
.produto {
    color: blue;
    margin: 10px;
}
```

E o span funciona como uma div pos o span e o que se chama de elemento estilo inline ou seja ele agrupa seus elementos linha a linha ou seja ficaria um na frente do outro, por isso ele e mais recomendado quando quiser fazer formatação especifica em texto.

## Bordas

Ao utilizarmos a borada no css podemos passar 3 valores que seriam um de espessura, o tipo e a sua cor e a borda pode ser usada basicamente em todo elemento html

```css
#conteudo {
    border: 1px solid red;
}
/*Outro jeito de fazer*/

#conteudo {
    border-color: red green blue yellow;/*A cor de cada lado e se pode fazer tipo isso com os outros*/
    border-width: 15px 10px;/*Deste jeito a parte de cima da porta tera 15px de espessura e os do lado terão 10px*/
    border-style: solid;
}
/*Este outro jeito e usado para ter maior controle*/
```

 Na parte de tipo podemos escolher diversos tipos.

Olha neste site para ver tipos de borda: https://www.w3schools.com/css/css_border.asp

## Fontes_e_cores

No css se quiser uma cor mais especifica devemos pegar e utilizar o codigo exadecimal dessa cor, tambem podemos modificar bastante a fonte pelo css,

```css
.conteudo {
    color: #000000;
    font-size: 10px;
    font-family: Arial, sans-serif/*Fontes que nomes com mais de uma palavra e necessario a utilização das aspas dupla e pode se escolher mais de uma fonte pq se o usuario não tiver uma fonte no pc ele pode utilizar a outra, é recomendado utilizar 2 ou 3 fonts em nosso site*/
}
```

Olhe algumas fontes nesse site: https://www.w3schools.com/css/css_font.asp

## Tamanhos-de-fontes

Na hora de modificar o tamanho da fonte podemos utilizar varias medidas diferentes que são, px(pixel), porcentagem, em(tamanho relativo ao conteiner pai). Se formor utilizar porcentagem e colocarmos 100% não ira mudar nada pq ira ser 100% do tamanho padrão de fonte do brawser mas se colocarmos 200% ela ira mudar.

```css
div {
    font-size: 80px;
}
.texto {
    font-size: 1em;/*Ele ira ter 80px pq no html esta dentro da div*/
}

.texto2 {
    font-size: 2em; /*Ira ter 160 pois e o dobro da font-size da div e ele esta dentro da div*/
}
```

Podemos colocar numeros decimais tambem na utilização do em.

## Estilos-de-texto

```css
.negrito {
    font-weight: 900;/*Para deixar o texto em negrito posso escolher quanto de negrito de 100 a 900 ou apenas colocar bold*/
}
.italico {
    font-style: italic;/* Tambem posso escrever o estilo da fonte como no caso do italico que é um estilo de fonte mais deitado para a direita*/
}
.formatacao {
    text-decoratio: underline;/*No text decoratio podemos utilizar para colocar underline, overline e line-through que é uma linha risca a palavra como se estivesse com erro*/
}
.texto {
    /*O que fizemos acima tambem podemos fazer tudo de uma vez em uma unica linha*/
    font: bold 49px "Lucida Console", "Courier New", monospace;
}
```

Olhe aqui para ver mais sobre a syntax https://www.w3schools.com/cssref/pr_font_font.asp

## cor-e-imagem-de-fundo

Como na fonte se utilizarmos apenas o comando background eu posso fazer varias coisas tambem.

```css
.fundo {
    /*background-color: blue;*/
}
body {
    background-image: url('um endereço web ou local');/*Por padrão se a imagem não tiver um tamanho suficiente ela ficara sendo repetida ate ocupar todo o background porem podemos controlar essa repetição*/
    background-repeat: no-repeat;/*Fazendo isso ela não ira repetir porem temos mais opçoes como repeat, repeat-x(repetir so o eixo x), repeat-y(Repetir so no eixo y)*/
    background-attachment: fixed;/*Se definirmos essa imagem como fixed a imagem que esta no background ira ficar fixa e não importa o quando rolamos para baixo ela não ira sair mas tambem temos a opção scroll que ela vai se movendo*/
    background-position: center left;/*Usada para escolher a locatização da imagem no backgroun e podemos utilizar 2 valores para o primeiro ser da horizontal e o segundo da vertival botton = down*/
}
/*Aplicando tudo usando so background*/
.fundo {
    background: blue url('imagem.png') no-repeat fixed center top ;
}
```

## css-externo

Para salvarmos nossos codigos css tambem podemos salvar estes codigos em um arquivo por fora com a extensão .css e para adicionarmos ele no html e so fazermos.

```html
<head>
    <link rel="stylesheet" type="text/css" href="arquivo.css"
</head>
```

## modelo-de-caixa

As tags html normalmente se comportam como caixas.

padding: espaçamento interno

margin: espacamento externo entre outros elementos

```css
.conteudo {
    /*Colocando em todos os lados separadamente */
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    
    /*So com um comando*/
    padding: 20px 20px 20px 20px;
    
    /*Como o margim e o mesmo jeito*/
    margin: 20px 20px 20px 20px;
}
```

Quando aplicamos a margim em 2 elementos a margim maior sera a que ira ficar, isso se chama margim collapse.

## Elementos Flutuantes

Nesta parte vamos aprender sobre elementos flutuantes que são importatnes para criar layout é iremos usar a propriedade float no css que se pode usar nela 3 opçoes como left, right e none. 

```css
.conteudo {
    float: right;
}
```



Se colocar mos right ela ira ficar na parte superior a direita e se colocarmos left ela ira ficar em cima de outro elemento que estiver a esquerda é isso acontece pq ele fica em outro fluxo e acaba sobrepondo os outros elementos pq para os elementos de fluxo normal esse elemento com float e como se não existisse.

Se colocarmos em varios elementos de uma vez eles não ficaram um em baixo do outro e sim um do lado do outro.

Se colocar-mo um texto ele ficara em volta dos elementos flutuates e para colocar em baixo de fluxo e necessarios usar o atributo clear.

```css
.conteudo-zero {
    clear: right;
}
```

Se os elementos flutuantes estiverem dentro de uma div com o backgrounde definido o comportamento dela sera de mostrar a cor do background e sera necesario limpar o fluxo flutuante tambem e podemos colocar ela em uma div vazia.

```css
.clear {
    clear: both;
}
```

## ElementosInlineBlockEInlineblock

Elementos block são elementos que sua largura tem 100% da tela e ficam um em baixo do outro.

Elementos inline ele fica um elemento a frente do outro e sua largura e de acordo com o conteudo.

Elemento Inline-block são aqueles que sua largura e de acordo com o tamanho do seu conteudo porem ficam um em baixo do outro se não tiver mais espaço naquela linha.

Podemos mudar o comportamento do elemento no css utilizando o comando display.

```css
.elemento {
    display: inline;
    display: block;
    display: inline-block;
}
```

## PosicionamentosEstaticos-Relativos-Absolute-Fixo

Existem 4 tipos de posicionamentos static, relative, absolute e fixed.

Utilizando a propriedade auto no margin podemos deixar que o proprio codigo escolhe o espacamento deixando o centralizado corretamente.

* static

Este posicionamento e o posicionamento padrão já que é aplicado nos elementos.

* relative

Quando usamos o relative e necessario usar propriedades de movimentos para que possamos mover o bloco, as propriedades são top, botton, left e right.

```css
.relative {
    position: relative;
    top: 20px;
    left: 80px;
}
```

Quando fazemos um codigo igual a do exemplo o bloco e reposicionado de acordo com o sua posição atual é como no exemplo ele ira descer 20px e 80 px para a direita, porem como vimos no exemplo ele da uma distancia de 80 px da esquerda indo para a direita, tambem podemos usar numero negativos.

* absolute

Com esta propriedade o bloco ja sai automaticamente do fluxo padrão e fica soprepondo os outros, os outros elementos se comportar como se a com o absolute não existice. E na hora de utilizar as posiçoes ela e feito de acordo com o conteiner e isso significa que 0px não é a posição original e se não estiver em um cotainer com sua position diferente de static sua posição tera relação com o body da pagina.

```css
.absolute {
    position: absolute;
    top: 20px;
    left: 80px;
}
```

* Fixed

Como o absolute ele tambem sai do fluxo padrão e o posicionamento dele e baseado na janela do navegdaro e se rolarmos a barra de rolagem para baixo ele não some da tela.

```css
.absolute {
    position: absolute;
    top: 20px;
    left: 80px;
}
```

Ele é muito usado para deixar chats ou layouts.

## SobrepondoElementos

Quando utilizamos positions os elementos podem acabar se sobre pondo porem podemos escolher que aparece primeiro e para utilizamos a propriedade z-index.

```css
.conteudo1 {
    position: absolute;
    z-index: 1;
}

.conteudo2 {
    position: absolute;
    z-index: 0;
}
```

Quanto maior o numero mais a frente ele aparece e como vimos no exemplo o conteudo1 ira aparecer primeiro e se o numero do z-index for igual ele segue a ordem do codigo. o z-index tambem e chamado de contexto de empilhamento.

## FormatandoLinks

A formatação dos links e diferentes das outras tags pq eles tem estados como a cor de links visitador e links não visitados.

```css
	/* nao visitados*/
a:link {
    color: red;
}
/*tambem
a:link, a:visited {
    color: red;
}
*/
/*Não visitados*/
a:visited{
    color: green;
}

/*Links hover, passa o curso sobre o link*/
a:hover{
    color: blueviolet;
}

/*Links ativos, quando clicao*/
a:active{
    color: grey;
}
```



