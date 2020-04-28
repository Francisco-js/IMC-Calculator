
let nome = prompt('Digite seu peso: ')
let peso = prompt("Digite seu peso: ")
let altura = prompt("Digite seu altura: ")
let imc = calculaImc(peso, altura)




function calculaImc(peso, altura){
  let imc = peso/(altura **2)
  return imc
}
function verificaNivel(imc){

  let nivel = 0

  if (imc < 17){
    nivel = 0
  }

  else if(imc < 18.5){
    nivel = 1
  }

  else if(imc < 25){
    nivel = 2
  }

  else if(imc < 30){
    nivel = 3
  }

  else if(imc < 35){
    nivel = 4
  }

  else if(imc < 40){
    nivel = 5
  }

  else{
    nivel = 6
  }

  return nivel

}
let niveis = ["muito abaixo do peso",
                "abaixo do peso",
                "peso normal",
                "acima do peso",
                "com obesidade grau I",
                "com obesidade grau II",
                "com obesidade grau III"]
                
console.log(`Olá, ${nome}, você está`, niveis[verificaNivel(imc)])
