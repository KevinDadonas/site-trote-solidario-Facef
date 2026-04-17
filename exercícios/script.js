function churras(){
    let qtedePessoas = Number(document.getElementById('qtdePessoas').value)
    let kgs = (qtedePessoas * 400) / 1000 //transforma gramas em kilos
    document.getElementById('resultadoChurras').innerText = "Total de carne " + kgs + " Kg"
}