let num = [0,1,2,3,4,5]

//console.log(num.length);// conta quantos elementos existem 
//num.sort()// coloca o vetor em ordem numerica 

for(pos = 0; pos < num.length; pos++){

    console.log(`a posição ${pos} tem valor ${num}`)
}// revisar esse código


for(let pos in num){
    console.log(`a posição ${pos} tem valor ${num}`)
}


num.indexOf(3)// ele vê se tem esse valor no vetor



