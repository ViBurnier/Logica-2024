
let conta = {
    saldoConta: 0,
    tipo: "corrente", // "corrente" ou "poupança"
}


//entrada
function depositar(){
    let exibirSaldo = document.querySelector("p.saldo")

    let valorDepositado = Number(prompt("VALOR"))

    let saldoAtualizado = retornoSaldoAtualizado(valorDepositado)

    return exibirSaldo.innerHTML = saldoAtualizado
}

//calculo
function retornoSaldoAtualizado(valor){
    
    return conta.saldoConta = conta.saldoConta + valor
}
 


/*
function depositar(){
    let exibirSaldo = document.querySelector("p.saldo")

    exibirSaldo.innerHTML = "SALDO ATUALIZADO"
    
}*/