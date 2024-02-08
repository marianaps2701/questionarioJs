const perguntas = [
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas:[
            "var myVar = 10;",
            "variable myVar = 10;",
            "let myVar = 10;"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função de `console.log()` em JavaScript?",
        respostas:[
            "Imprimir um resultado na tela",
            "Executar uma operação matemática",
            "Definir uma função"
        ],
        correta: 0
    },
    {
        pergunta: "Qual símbolo é usado para comentários de uma linha em JavaScript?",
        respostas:[
            "//",
            "/*",
            "*/"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
        respostas:[
            "for (let i = 0; i < 5; i++) { }",
            "loop (let i = 0; i < 5; i++) { }",
            "for (i = 0; i < 5; i++) { }"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o método usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas:[
            "array.push(elemento)",
            "array.add(elemento)",
            "array.insert(elemento)"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função de `document.getElementById()` em JavaScript?",
        respostas:[
            "Selecionar um elemento HTML pelo ID",
            "Alterar o estilo de todos os elementos HTML",
            "Criar um novo elemento HTML"
        ],
        correta: 0
    },
    {
        pergunta: "O que o método `addEventListener()` faz em JavaScript?",
        respostas:[
            "Adiciona um evento a um elemento HTML",
            "Remove um evento de um elemento HTML",
            "Altera o conteúdo de um elemento HTML"
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para converter uma string em um número inteiro em JavaScript?",
        respostas:[
            "parseInt()",
            "parseFloat()",
            "toInteger()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador usado para comparação estrita em JavaScript?",
        respostas:[
            "==",
            "===",
            "="
        ],
        correta: 1
    },
    {
        pergunta: "O que o operador `&&` representa em JavaScript?",
        respostas:[
            "OU lógico",
            "E lógico",
            "Negação lógica"
        ],
        correta: 1
    }
];

const quiz = document.querySelector('#quiz')

const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


for(const item of perguntas){
    //isso clona o conteudo html dentro do template p criar uma nova instancia do item de quiz
    const quizItem = template.content.cloneNode(true)
    //atualiza o texto do cabeçalho com a pergunta atual
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas){
        //clona o elemento dt do template p criar uma nova instancia de resposta
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        //substitui o conteudo do <span> como a resposta itirenada
        dt.querySelector('span').textContent = resposta
        //
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        //
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        dt.querySelector('input').onchange = (event) => {

            const estaCorreta = event.target.value == item.correta
            corretas.delete(item)
            
            if (estaCorreta){
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        
        //adiciona a nova resposta ao item de quiz
        quizItem.querySelector('dl').appendChild(dt)  
    }

    //remove o primiero item dt do template
    quizItem.querySelector('dl dt').remove();

    //adiciona a pergunta
    quiz.appendChild(quizItem)
};
