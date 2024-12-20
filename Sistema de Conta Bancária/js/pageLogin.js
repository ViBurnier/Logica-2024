
  //contas
  let conta1 = {
    nome: "Vitor",
    senha: 1234,
    chave: 111,
    saldoConta: 0,
    tipo: "corrente", // "corrente" ou "poupança",
  }

  let conta2 = {
    nome: "Luis",
    senha: 1212,
    chave: 222,
    saldoConta: 0,
    tipo: "corrente", // "corrente" ou "poupança",
  }

  let btnStart = document.querySelector("input#botaoStart")

  btnStart.addEventListener("click", () => {
    //entrada
    let user = document.querySelector("input#User").value;
    let password = parseInt(document.querySelector("input#Senha").value);
      ticketUser(loginUser(user, password))
      
  })


function loginUser(user, password){
  let retornoInfoConta = contasUser(verificacaoContaUser(user, password)) 
  
  mensagem(user, password, retornoInfoConta)

  return retornoInfoConta.chave
}


  //processos

  //retorna um valor para saber a conta e as informacoes
function verificacaoContaUser(usuario, senha){
    if(usuario == conta1.nome && senha == conta1.senha){
      return 0
    }
    
    if(usuario == conta2.nome && senha == conta2.senha){
      return 1
    }

    else{
      return -1
    }
    
  }

  //retorna informacoes da conta 
function contasUser(valor){
    let arrayUser = [conta1, conta2]
  //aqui retorna a conta baseada no indice
    return arrayUser[valor]
  }
  



  //fazer mensagem da validacao das contas(1 e 2) para usuario
  function mensagem(usuario, senha, contaReturn){
    let msgErro = document.querySelector("p.mensagem")

  if(usuario == 0 || senha == 0 ){
    return msgErro.innerHTML =("Preencha todos os campos necessarios")
  }

  if(contaReturn == undefined ){
    return msgErro.innerHTML =("nome ou senha errados ")
  }

  if(contaReturn != undefined){
    return alert(`Bem vindo ${contaReturn.nome}`)
  }

}


  //segunda verificacao
  

function ticketUser(chave){
  
  switch(chave){

    case 111:
      let paginaUser1 = window.location.href = "paginaUser1.html"
      return paginaUser1
    break;

    case 222:
      let paginaUser2 = window.location.href = "paginaUser2.html"
      return paginaUser2
    break;

    default:
      alert('erro')
  }


}
