
let conta = {
    saldoConta: 0,
    tipo: "corrente", // "corrente" ou "poupança"
}

//INICIO DEPOSITO
function depositar(){
//entrada
    let depositarValor = Number(prompt("DEPOSITAR VALOR"))
    let saldoAtualizadoDepositar = retornoSaldoAtualizado(depositarValor, 1)
    let exibirSaldo = document.querySelector("p.saldo")
//saida
    exibirSaldo.innerHTML = `Saldo: ${saldoAtualizadoDepositar}`
    return saldoAtualizadoDepositar
}

//FIM DEPOSITO

//INICIO SACAR
function sacar(){
//entrada
    let sacarValor = Number(prompt("SACAR VALOR")) 
    let saldoAtualizadoSacar = retornoSaldoAtualizado(sacarValor, 2)
    let exibirSaldo = document.querySelector("p.saldo")
//saida
    exibirSaldo.innerHTML = `Saldo: ${saldoAtualizadoSacar}`
    return saldoAtualizadoSacar

}
//FIM SACAR

//processo
function retornoSaldoAtualizado(valor, chave){
    switch(chave){
        case 1:
            return conta.saldoConta = conta.saldoConta + valor
        break;

        case 2:
            if(valor > conta.saldoConta){
                alert("Saldo insuficiente")
                return conta.saldoConta = conta.saldoConta
            }
            else{
            return conta.saldoConta = conta.saldoConta - valor
            }
        break;
    }


}