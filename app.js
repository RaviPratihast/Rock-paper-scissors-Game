'use strict';

const box=document.querySelectorAll('.box');
const result=document.querySelector('h1');


let userInput;
let computerInput;

box.forEach((e,i)=>{
    e.addEventListener('click',function(){

        if(e.innerText==='👊'){

            userInput='Rock';
            computerInput=computerValue();
            // console.log(`user: ${userInput} and comp: ${computerInput}`);
           

            result.innerHTML= winnerCheck(userInput,computerInput);

        }else if(e.innerText==='✋'){

            userInput='Paper';
            computerInput=computerValue();
            // console.log(`user: ${userInput} and comp: ${computerInput}`);
            // winnerCheck(userInput,computerInput);

            result.innerHTML= winnerCheck(userInput,computerInput);

            

        }else if(e.innerText==='✌️'){
            
            userInput='Scissor';
            computerInput=computerValue();
            // console.log(`user: ${userInput} and comp: ${computerInput}`);
            // winnerCheck(userInput,computerInput);
            result.innerHTML= winnerCheck(userInput,computerInput);

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
            return (`winner user : user ${userInput} and computer ${computerInput}`);
        break;

        case 'ScissorRock':
        case 'RockPaper':
        case 'PaperScissor':
            return (`winner computer: computer ${computerInput} and user ${userInput}`);
        break;

        case 'RockRock':
        case 'ScissorScissor':
        case 'PaperPaper':
            return (`Draw between user and computer : computer ${computerInput} and user ${userInput}`);
        break;
    }
}



// computerValue();
