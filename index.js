let nickname = "FELIPÃO"
let xp = 11.000

if (xp <= 1.000){
    console.log("O Heroi de Nome " + nickname + " Está No nível FERRO")
}
else if ((xp > 1.000) && (xp < 2.001)){
    console.log("O Heroi de Nome " + nickname + " Está No nível BRONZE")
}
else if((xp > 2.000) && (xp < 5.001)){
    console.log("O Heroi de Nome " + nickname + " Está No nível PRATA")
}
else if((xp > 5.000) && (xp < 7.001)){
    console.log("O Heroi de Nome " + nickname + " Está No nível OURO")
}
else if((xp > 7.000) && (xp < 8.001 )){
    console.log ("O Heroi de Nome " + nickname + " Está No nível PLATINA")
}
else if((xp > 8.000) && (xp < 9.001 )){
    console.log ("O Heroi de Nome " + nickname + " Está No nível ASCENDENTE")
}
else if((xp > 9.000) && (xp < 10.001 )){
    console.log ("O Heroi de Nome " + nickname + " IMORTAL")
}
else {
    console.log("O Heroi de Nome " + nickname + " Está No nível RADIANTE")
}

