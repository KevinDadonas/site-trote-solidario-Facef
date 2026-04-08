function calcular(){
    //pontuação dos itens avulços
    let qtdeArroz = Number(document.getElementById("qtdeArroz").value) //recupera para uma variável do js a quantidade digitada pelo usuário
    let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value) //recupera para uma variável do js a quantidade digitada pelo usuário
    let qtdeMacarrao = Number(document.getElementById("qtdeFeijao").value) //recupera para uma variável do js a quantidade digitada pelo usuário
    let qtdeOLeo = Number(document.getElementById("qtdeFeijao").value) //recupera para uma variável do js a quantidade digitada pelo usuário
    let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOLeo * 2) + (qtdeMacarrao * 4)  //calcula a pontuação total

    //pontuação dos kits de alimentação
    let cor = document.getElementById("cor").value //recupera cor esolhida pelo usuário
    //estrutura de seleção
    let metaKit //

    if (cor == "verde"){
        metaKit = 61
    }
    else if (cor == "vermelho"){
        metaKit = 32
    }
    else if (cor == "laranja"){
        metaKit = 21
    }

    document.getElementById("result").innerText = "Pontuação: " + pontos //mostra a pontuação total do usuário
}