
    var randomNumber1 = Math.round(Math.random()*6);
    var randomNumber2 = Math.round(Math.random()*6);
    var resultNum = [randomNumber1, randomNumber2]

console.log(randomNumber1)
document.querySelectorAll("img")[0].setAttribute("src","./images/dice"+resultNum[0]+".png")

console.log(randomNumber2)
document.querySelectorAll("img")[1].setAttribute("src","./images/dice"+resultNum[1]+".png")

if (resultNum[0]>resultNum[1]){
    document.querySelector("h1").innerHTML="	&#128681 Play 1 Wins!" 
} else if (resultNum[0]<resultNum[1]){
    document.querySelector("h1").innerHTML="Play 2 Wins! 	&#128681" 
} else{
    document.querySelector("h1").innerHTML="Draw!"     
}

