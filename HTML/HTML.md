# HTML

* [Estrutura_de_uma_pagina_web](#Estrutura_de_uma_pagina_web)
* [Cabesalho](#Cabesalho)
* [Paragrafos](#Paragrafos)
* [Formataçoes_em_texto](#Formataçoes_em_texto)
* [Listas_ordenadas_e_não_ordenadas](#Listas_ordenadas_e_não_ordenadas)
* [Imagens](#Imagens)
* [Links](#Links)
* [Tabelas](#Tabelas)
* [Formularios](#Formularios)

## Estrutura_de_uma_pagina_web

Utilizando o html pode fazer formataçoes em nossa pagina web como por exemplo podemos escolher que parte de um texto queremos deixar em negrito.

```html
<b>Um texto</b>
```

Como iniciamos uma estrutura.

```html
<!DOCTYPE html> <!--Iniciamos com esta tag para especificarmos que tipo de documento é, apenas isso o navegador ja sabe que e o HTML5-->

<html><!--E dentro dessa tag que nosso codigo html ira ficar-->
    <head><!--Aqui fica informaçoes importantes que nem sempre aparece para o usuario-->
        <title>Meu site</title><!--E o texto que aparece na aba la em cima-->
        <meta charset="utf-8"><!--Esta são as cadeias de caracteres selecionadas e se não tiver alguns navegadores não conseguirão entender os acentos-->
    </head>
    
    <body><!--Nesta parte a maioria das coisas aparece para o usuario-->
        
    </body>
</html>
```

Existem mutias tags que não precisam de um fechamento como pro exemplo a tag meta não precisa de fechamento e tudo que é configurado nela e colocado no atributo.

## Cabesalho

No HTML existem as tags de cabesalho que são usadas para a formatação de texto que são: h1, h2, h3, h4, h5 e h6.

Para usarmosTabelas a quebra de linha temos o <br>

```html
<h1>Sobre a empressa <br></h1>
<h2>
    titulo 2
</h2>
<h3>
    titulo 3
</h3>
<h4>
    titulo 4
</h4>
<h5>
    titulo 5
</h5>
<h6>
    titulo 6
</h6>
```

## Paragrafos

Serve para agrupar varias linhas em uma so formando um texto.

```html
<p>
    Um texto
</p>
```

Se quisermos utilizar uma linha para separar conteudos em nosso site temos a tag "<hr>"

que faz isso para nos

## Formataçoes_em_texto

Existem varias tags para que possamos formatar um texto hj em dia como colocar em negrito porem no caso do negrito não e muito recomendado hj em dia usar o "<b>" para colocar algo em negrito e sim utilizar o "<strong>".

```html
Esse é um texto <strong>Negrito</strong>
Esse é uTabelasm texto <em>itálico</em><!--Antigamente se usava a tag <i> para deixar em italico porem hj em dia e mais recomendado usar a tag em-->
Esse é um texto <strike>errado</strike> <!--Esta tag ira deixar um risco em cima da palavra-->

```

## Listas_ordenadas_e_não_ordenadas

```html
Formularios<ul type="circle"><!--Lista não ordenada e no tipo podemos escolher os tipos de marcadores e tem circle, disc ou square-->
    <li>Notebook</li><!--Itens da lista-->
    <li>Roteador</li>
</ul>

<ol type="A"><!--E uma lista ordenada e a marcação dela são numeros-- pore tem outros como A de A a Z, 1 que e o default, a de a ate z, I ira mostrar numeros romanos e i mostrara numeros romanos em minusculo-->
    <li>Comida favorita?</li>
    
    
</ol>
```

## Imagens

Usando a tag <img> podemos adicionar uma imagem ao nosso codigo html.

```html
<img src="imagem/ferrari.jpg" width-"400"><!--Tambem pode usar um link da web para adicionarmos a imagem, utiliando width podemos mexer na largura e com hight podemos mexer na altura-->
```

## Links

Para que possamos adicionar links no html usamos a tag <a> e podemos criara links internos que e navegar entre arquivos do site ou um link externo para mandar para outro site.

```html
<a href="https://www.google.com">um link</a>
```

## Tabelas

```
<table border="2">
    <tr><!--Esta tag e a linha da tabela-->
        <th><!--Esta tag e o dado da linha-->
            Codígo
        </th><!--Table Header-->
        <th>
            Produto
        </th>
        <th>
            preço
        </th>
    </tr>
    <tr>
    	<td>001</td><!--Table Date-->
        <td>Notebook</td>
        <td>R$ 2.500,99</td>
    </tr>
</table>
```

Nas tabelas tambem podemos escolher a largura dela usando a tag <width> que tambem pode usar para escolher a largura das imagens e no valor podemos usar a medida em pixel em porcentagem, tambem podemos colocar imagens ou links dentro de uma tabela. Nas tabemas tambem podemos juntar duas celulas da tabela utilizando colspan que é quantas colunas ira ocupar e assim como este atributo tambem temos o rowspan que é quantas linhas ira ocupar

```html
<table border="2" width="300">
    <tr><!--Esta tag e a linha da tabela-->
        <th><!--Esta tag e o dado da linha-->
            Codígo
        </th><!--Table Header-->
        <th>
            Produto
        </th>
        <th>
            preço
        </th>
    </tr>
    <tr>
    	<td>001</td><!--Table Date-->
        <td><img src="imagem.jpg"></td>
        <td><a href="um link">click aqui</a></td>
    </tr>
    <tr>
    	<td rowspan="2">Desconto</td>
        <td colspan="2">cupom1 -R$ 10</td>
    </tr>
    <tr>
    	<td colspan="2"> cupom2 -R$ 12</td>
    </tr>
    <tr>
    	<td>Total:</td>
        <td colspan="2">R$ 3.478,00</td>
    </tr>
</table>
```

## Formularios

Para fazer um formulario no html temos uma tag para isso a<form>

```html
<form>
    Login:<br>
    <input type="text" name="login">
    Senha:<br>
    <input type="password" name="senha">
    <input type="submit" value="logar"><!--O tipo submit e usado para um botão que envia informaçoes-->
    <input type="radio" name="sexo" value="M">Masculino<br><!--Este tipo e aquelas bolinhas podemos escolher-->
    <input type="radio" name="sexo" value="F">Masculino<br>
    
    Interesses<br>
    <input type="checkbox" name="interesse"> Futebol<!--Com esse tipo o usuario poderia escolher mais de uma opção-->
    <input type="checkbox" name="interesse"> Basquete
    <input type="checkbox" name="interesse"> Volei
    
    Estado<br>
    <select name="estado"><!--Nesta podemos escolher uma opção dentro de uma lista com varias alternaticas, ela e recomendado quando a lista e muito grande-->
        <option value="sp">SP</option>
        <option value="rj">RJ</option>
        <option value="es">ES</option>
    </select>
    
    Observação: <br>
    <textarea></textarea><!--E criado uma caixa de texto que o usuario pode controlar o tamanho-->
    <input type="submit" value=>
    
</form>
```



