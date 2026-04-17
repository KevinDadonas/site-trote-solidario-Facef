function churras(){
    let qtedePessoas = Number(document.getElementById('qtdePessoas').value)
    let kgs = (qtedePessoas * 400) / 1000 //transforma gramas em kilos
    document.getElementById('resultadoChurras').innerText = "Total de carne " + kgs + " Kg"
}

function febre(){
    //obter a temperatura digitada pelo usuário
    let temperatura = Number(document.getElementById('temperatura').value)
    //verificar o estado febril
    if(temperatura >= 37.5){
        //mostrar o resultado de estado febril ao usuário
        document.getElementById('resultadoFebril').innerText = "Está com febre"
    }
    else{
        document.getElementById('resultadoFebril').innerText = "Temperatura normal"   
    }
}

function credito(){
    let renda = Number(document.getElementById('renda').value)
    let idade = Number(document.getElementById('idade').value)

    if(renda >= 2000 && idade >= 18){ //operador && significa AND (ou E)
        document.getElementById('resultadoCredito').innerText = "Crédito concedido"
    }
    else{
        document.getElementById('resultadoCredito').innerText = "Crédito negado"
    }
    //operador || significa OR (ou OU)
}

function luta(){
    let idade = Number(document.getElementById('idadeLuta').value)
    let peso = Number(document.getElementById('peso').value)

    if(idade < 18){ //operador && significa AND (ou E)
        document.getElementById('resultadoLuta').innerText = "Categoria juvenil"
    }
    else if(peso < 80){ //idade >=18
        document.getElementById('resultadoLuta').innerText = "Categoria adulto - Subcategoria leve"
    }
    else{ //peso >= 80
        document.getElementById('resultadoLuta').innerText = "Categoria adulto - Subcategoria pesado"
    }
}