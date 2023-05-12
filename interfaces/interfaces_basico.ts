interface Humano {
    nome: string
    idade?: number
    [prop: string]: any
    saudar(sobrenome: string): void
}

function saudarComOla (pessoa: Humano) {
    console.log('Olá ' + pessoa.nome) 
}

function mudarNome (pessoa: Humano) {
    pessoa.nome = 'Joana'
}

const pessoa = { 
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome + '!')
    }
}

//saudarComOla(pessoa)
//mudarNome(pessoa)
//saudarComOla(pessoa)
pessoa.saudar('Oliveira')

// Interfaces com Funções

interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number {
    return (base ** exp)
}

let resultado = potencia(3, 10)
console.log(resultado)