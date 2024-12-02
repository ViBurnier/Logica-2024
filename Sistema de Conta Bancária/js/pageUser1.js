

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

//INICIO EXIBIR DADOS
function exibirDados(){
     
}

//FINAL EXIBIR DADOS


//processo
function retornoSaldoAtualizado(valor, chave){
    switch(chave){
        case 1:
            return conta1.saldoConta = conta1.saldoConta + valor
        break;

        case 2:
            if(valor > conta1.saldoConta){
                alert("Saldo insuficiente")
                return conta1.saldoConta = conta1.saldoConta
            }
            else{
            return conta1.saldoConta = conta1.saldoConta - valor
            }
        break;

    }


}