var now = new Date()
var hora = now.getHours()
console.log(`A hora é  ${hora}`)

if(hora < 12){
   console.log("Bom dia!")
}else if(hora > 12){
    console.log("Boa tarde!!")
}else{
    console.log("Boa noite!!")
}