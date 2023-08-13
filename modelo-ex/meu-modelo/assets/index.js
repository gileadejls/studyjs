const peso = document.querySelector("#peso")
const altura = document.querySelector("#altura")
const submit = document.querySelector("input[type='submit']")


let pesoValue, alturaValue;

function show(){
    pesoValue = peso.value
    alturaValue = altura.value

    console.log(pesoValue, alturaValue)
}