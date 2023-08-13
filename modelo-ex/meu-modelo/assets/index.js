const peso = document.querySelector("#peso")
const altura = document.querySelector("#altura")
const submit = document.querySelector("#calcular")


let pesoValue, alturaValue, result, validate = true, active = true;


// FUNÃO DO CALCULO E IMPLEMENTAÇÃO DO IMC
function showIMC(resultValue){

    // SE O ELEMENTO JA EXISTIR
    if(document.querySelector("span")){
        const spanBtn = document.querySelector("span")
        spanBtn.classList.contains("active") ? spanBtn.classList.remove("active"): null
        if(resultValue <= 18.5){
            spanBtn.textContent = `IMC: ${result} --> Abaixo do peso`
        }else if(resultValue <= 24.9){
            spanBtn.textContent = `IMC: ${result} --> Peso Normal`
        }else if(resultValue <= 29.9){
            spanBtn.textContent = `IMC: ${result} --> Sobrepeso`
        }else if(resultValue <= 34.9){
            spanBtn.textContent = `IMC: ${result} --> Obesidade grau 1`
        }else if(resultValue <= 39.9){
            spanBtn.textContent = `IMC: ${result} --> Obesidade grau 2`
        }else{
            spanBtn.textContent = `IMC: ${result} --> Obesidade grau 3`
        }      
    }

    // SE O ELEMENTO NÃO EXISTIR
    else{
        const form = document.querySelector("form")
        const span = document.createElement("span")
        if(resultValue <= 18.5){
            span.textContent = `IMC: ${result} --> Abaixo do peso`
        }else if(resultValue <= 24.9){
            span.textContent = `IMC: ${result} --> Peso Normal`
        }else if(resultValue <= 29.9){
            span.textContent = `IMC: ${result} --> Sobrepeso`
        }else if(resultValue <= 34.9){
            span.textContent = `IMC: ${result} --> Obesidade grau 1`
        }else if(resultValue <= 39.9){
            span.textContent = `IMC: ${result} --> Obesidade grau 2`
        }else{
            span.textContent = `IMC: ${result} --> Obesidade grau 3`
        }   
        form.appendChild(span)
    }

}


//FUNÇÃO QUE FARÁ O TRATAMENTO DOS VALORES
function Treatment(){
    
    // Verifica o peso, caso  NÃO Exceda o limite -> validate = true
    if(Number(peso.value <= 600)){
        pesoValue = Number(peso.value)
        validate = true
    }else{
        validate = false
    }

    // SE APROVADO  ->
    if(validate){
        let pureValue = altura.value
        let altValue = pureValue.includes(".") ? pureValue: pureValue.replace(pureValue[0], pureValue[0] + ".")
        alturaValue = Number(altValue)
    
        // resultado do IMC
        result = Number((pesoValue / (alturaValue * alturaValue )).toFixed(2))
        showIMC(result)
    }else{
        alert("Peso Maximo excedido!")
    }
}


// FUNÇÃO INICIALIZADORA
function show(){
    if(peso.value && altura.value){Treatment()}else{
        if(document.querySelector("span")){
            const spanBtn = document.querySelector("span")
            spanBtn.classList.add("active")
            spanBtn.textContent = "Campos Invalidos"
        }else{
            const form = document.querySelector("form")
            const span = document.createElement("span")
            spanBtn.classList.add("active")
            span.style = "background-color: red;"
            span.textContent = "Campos Invalidos"
        }
    }
}