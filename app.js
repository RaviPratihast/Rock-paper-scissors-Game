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
           
           

            result_h2.innerHTML= winnerCheck(userInput,computerInput);
            userScore_div.innerHTML=userScore;
            computerScore_div.innerHTML=computerScore;
            scoreWinner();

        }else if(e.innerText==='✋'){

            userInput='Paper';
            computerInput=computerValue();
            

            result_h2.innerHTML= winnerCheck(userInput,computerInput);
            userScore_div.innerHTML=userScore;
            computerScore_div.innerHTML=computerScore;
            scoreWinner();

            

        }else if(e.innerText==='✌️'){
            
            userInput='Scissor';
            computerInput=computerValue();
           
            result_h2.innerHTML= winnerCheck(userInput,computerInput);
            userScore_div.innerHTML=userScore;
            computerScore_div.innerHTML=computerScore;

        }


        
        

    })
});


function computerValue(){

    const arr=['Rock','Paper','Scissor'];

    let randomValue=Math.floor((Math.random()*3));
    return arr[randomValue];
    
}

// checking the winner of the game;

function winnerCheck(userInput,computerInput){
    // winning part
    switch(userInput+computerInput){
        case 'RockScissor':
        case 'ScissorPaper':
        case 'PaperRock':
            
            userScore++;
            return (`winner user : user ${userInput} and computer ${computerInput}`);
        break;

        case 'ScissorRock':
        case 'RockPaper':
        case 'PaperScissor':

            computerScore++;
            return (`winner computer: computer ${computerInput} and user ${userInput}`);
        break;

        case 'RockRock':
        case 'ScissorScissor':
        case 'PaperPaper':
         
            return (`Draw between user and computer : computer ${computerInput} and user ${userInput}`);
        break;
    }
}

function scoreWinner(){
    if(userScore>=10){
        console.log('user wins as he riches the 10 point goal');
    }else if(computerScore>=10){
        console.log('computer wins as it riches the 10 point');
    }
}

