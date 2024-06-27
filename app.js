let randomNumber=Math.floor((Math.random()*10)+1);
console.log(randomNumber);

function Guess(){
    let guessNum=Number(document.getElementById("inputNum").value); 

    if(guessNum==randomNumber){
        console.log("Your won");
    }else if (guessNum>randomNumber ){
        console.log("Your Guess Num is Larger");
    }else if (guessNum<randomNumber ){
        console.log("Your Guess Num is Less");
    }

}


