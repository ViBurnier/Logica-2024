

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

let cliques = 0

function exibirDados(){
    
            entradaDados = {
            nome: document.querySelector("p.nomeFooter"),
            saldo: document.querySelector("p.saldoFooter"),
            senha: document.querySelector("p.senhaFooter"),
            tipoConta: document.querySelector("p.tipoConta"),
            }

            if(cliques == 0 ){
                     entradaDados.nome.innerHTML = `Nome: ${conta1.nome}.`,
                     entradaDados.saldo.innerHTML = `Saldo: ${conta1.saldoConta}`,
                     entradaDados.senha.innerHTML = `Senha: ${conta1.senha}`,
                     entradaDados.tipoConta.innerHTML = `Tipo da conta: ${conta1.tipo}.`,

                cliques = 1
            }

            else{
                     entradaDados.nome.innerHTML = "",
                     entradaDados.saldo.innerHTML = "",
                     entradaDados.senha.innerHTML = "",
                     entradaDados.tipoConta.innerHTML = "",

                cliques = 0
            }
}

let botao = document.querySelector("input.btnBody");
botao.addEventListener("click", exibirDados);
            
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