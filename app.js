function Guess(){
    let randomNumber=Math.floor((Math.random()*10)+1);
    console.log(randomNumber);

    let guessNum= document.getElementById("inputNum").value;

    if(guessNum==randomNumber){
        console.log("Your won");
    }else(){
        
    }

}


