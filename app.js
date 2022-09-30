'use strict';




const box_divs=document.querySelectorAll('.box');
const result_h2=document.querySelector('h2');

// score variables
const userScore_div=document.querySelector('.user-score');
const computerScore_div=document.querySelector('.computer-score');


let userInput;
let computerInput;
let userScore=0;
let computerScore=0;

box_divs.forEach((e)=>{
    e.addEventListener('click',function(){

        if(e.innerText==='👊'){

            userInput='Rock';
            computerInput=computerValue();
           
        //    comparing both value -> who wins.

            let winner=winnerCheck(userInput,computerInput);

            console.log(winner)
            result_h2.innerHTML= winner.text;
            userScore_div.innerHTML=winner.userScore;
            computerScore_div.innerHTML=winner.computerScore;
          
           

        }else if(e.innerText==='✋'){

            userInput='Paper';
            computerInput=computerValue();
            

            let winner= winnerCheck(userInput,computerInput);
            result_h2.innerHTML= winner.text;
            userScore_div.innerHTML=winner.userScore;
            computerScore_div.innerHTML=winner.computerScore;
          

            

        }else if(e.innerText==='✌️'){
            
            userInput='Scissor';
            computerInput=computerValue();
           
            let winner=winnerCheck(userInput,computerInput);
            result_h2.innerHTML= winner.text;
            userScore_div.innerHTML=winner.userScore;
            computerScore_div.innerHTML=winner.computerScore;
            
           

        }


        
        

    })
});


// random value generated my computer.

function computerValue(){

    const arr=['Rock','Paper','Scissor'];

    let randomValue=Math.floor((Math.random()*3));
    return arr[randomValue];
    
}

// checking the winner of the game;

function winnerCheck(userInput,computerInput){

    console.log( userScore);
    // winning part
    switch(userInput+computerInput){
        case 'RockScissor':
        case 'ScissorPaper':
        case 'PaperRock':
            

        // userScore++.t
            // console.log(userScore);          
            //   return (`User Wins : user : ${userInput} and computer: ${computerInput}`);

            return { text: `User Wins : user : ${userInput} and computer: ${computerInput}` , userScore: ++userScore , computerScore:computerScore};
  

        case 'ScissorRock':
        case 'RockPaper':
        case 'PaperScissor':

        // computerScore++;
            // return (`winner computer: computer ${computerInput} and user ${userInput}`);

            return { text: `computer Wins :computer ${computerInput} and user ${userInput} `, computerScore: ++computerScore, userScore:userScore};


        case 'RockRock':
        case 'ScissorScissor':
        case 'PaperPaper':
         
            // return (`Draw between user and computer : computer ${computerInput} and user ${userInput}`);
          return  { text: `Draw between user and computer : computer ${computerInput} and user ${userInput}`, computerScore:computerScore, userScore:userScore};

    }
}


