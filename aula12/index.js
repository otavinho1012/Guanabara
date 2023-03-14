var agora = new Date();
var now = agora.getDay()

/*if(now == 5){
    console.log("É sexta")
}else{
    
}*/

switch(now) {
     case 0:
        console.log("É domingo")
        break
    case 1:
        console.log("É segunda")
        break
    case 2:
        console.log("É terça")
        break
    case 3:
        console.log("É quarta")
        break
    case 4:
        console.log("É quinta")
        break
    case 5:
        console.log("É sexta")
        break
    case 6:
        console.log("É sábado")
        break
    default:
        console.log('[ERRO] Dia inválido')
        break
}
/*
  0 = Domingo
  1 = Segunda
  2 = Terça
  3 = Quarta
  4 = Quinta
  5 = Sexta
  6 = Sabado
*/