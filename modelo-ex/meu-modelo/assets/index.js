const peso = document.querySelector("#peso")
const altura = document.querySelector("#altura")
const submit = document.querySelector("input[type='submit']")


let pesoValue, alturaValue, result, validate = true;

function showIMC(resultValue){
    const form = document.querySelector("form")
    const span = document.createElement("span")
    span.textContent = resultValue
    form.appendChild(span)

}

function Treatment(){
    
    let pesoValue = Number(peso.value <= 600) ? Number(peso.value): validate = false

    if(validate){
        let pureValue = altura.value
        console.log(pureValue)
        let altValue = pureValue.includes(".") ? pureValue: pureValue.replace(pureValue[0], pureValue[0] + ".")
        console.log(altValue)
        alturaValue = Number(altValue)
    
        // resultado do IMC
        result = Number((pesoValue / (alturaValue * alturaValue )).toFixed(2))
        showIMC(result)
    }else{
        alert("Peso Maximo excedido!")
    }
}

function show(){
    peso.value && altura.value ? Treatment(): alert("Campos não informados!")
}