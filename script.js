function calcular(){
    let qtdeArroz = Number(document.getElementById("qtdeArroz").value) //recupera para uma variável do js a quantidade digitada pelo usuário
    let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value) //recupera para uma variável do js a quantidade digitada pelo usuário
    let qtdeMacarrao = Number(document.getElementById("qtdeFeijao").value) //recupera para uma variável do js a quantidade digitada pelo usuário
    let qtdeOLeo = Number(document.getElementById("qtdeFeijao").value) //recupera para uma variável do js a quantidade digitada pelo usuário
    let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOLeo * 2) + (qtdeMacarrao * 4)  //calcula a pontuação total
    document.getElementById("result").innerText = "Pontuação: " + pontos //mostra a pontuação total do usuário
}