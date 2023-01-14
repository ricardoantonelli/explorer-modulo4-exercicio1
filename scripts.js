
// Exercício 01 - Módulo 04 - Explorer

alert('Bem vindo à sua calculadora! Vamos começar??')

// Solicitando a digitação dos números ao usuário
let num1 = Number(prompt('Digite o primeiro número:'))
let num2 = Number(prompt('Digite o segundo número:'))

// Soma
let sum = (num1 + num2)
alert(`A soma dos números é: ${sum}.`)
console.log(sum)

// Subtração
let subtraction = (num1 - num2)
alert(`A subtração dos números é: ${subtraction}.`)

// Multiplicação
let multiplication = (num1 * num2)
alert(`A multiplicação dos números é: ${multiplication}.`)

// Divisão
let division = (num1 / num2)
alert(`A divisão dos números é: ${division}.`)

// Resto da Divisão
let restOfDivision = (num1 % num2)
alert(`O resto da divisão dos números é: ${restOfDivision}.`)

// Verifica se o resultado da soma dos números é par
if(sum % 2 === 0) {
    alert("O resultado da soma dos números é par.")
} else  {
    alert("O resultado da soma dos números é ímpar.")
}

// Verifica se os dois números inseridos são iguais
if(num1 === num2) {
    alert("Os números inseridos são iguais.")
} else {
    alert("Os números inseridos são diferentes.")
}
