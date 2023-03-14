/*var ola = window.prompt('Olá tudo bem?')
var qual = window.prompt("Qual seu nome?")
window.alert(`Seja bem vindo ${qual}`)*/
function carregar(){
var msg = window.document.getElementById('msg')
var imgm = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if(hora >= 0 && hora < 12){
   imgm.src = 'manha.jpg'
   document.body.style.background = '#e2cd9f'
}else if ( hora >= 12 && hora < 18){
   imgm.src = 'tarde.jpg'
   document.body.style.background = '#b9846f'
}else{
    imgm.src = 'noite.jpg'
    document.body.style.background = '#515154'}
}