/*
let user = prompt("usuario")
let password = Number(prompt("senha"))
*/

  //entrada
function loginUser(){
  let user = document.querySelector("input#User").value;
  let password = Number(document.querySelector("input#Senha").value);

  //saida
  document.write(verificacao(user, password))
}

  //processo
function verificacao(usuario, senha) {

  //falta de informacao
  if (usuario == 0 || senha == 0) {
    return msg = "Preencha os campos necessarios";
  }

  //usuario ou senha invalidos (poderia ser um pra cada)
  if (usuario != "Vitor" || senha != 1234) {
    return msg = "Usuario ou senha invalidos";
  }

  //sucesso
  if (usuario == "Vitor" && senha == 1234) {
    
    return window.location.href = "pagBank.html"
  }
}

