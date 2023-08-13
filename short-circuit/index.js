/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar o valor verdadeiro
*/


function Falaoi(){
    return 'Oi'
}

const check = false
console.log(check && Falaoi())