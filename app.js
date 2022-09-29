'use strict';

// const { floor } = require("lodash-es");


const box=document.querySelectorAll('.box');
const result=document.querySelector('h1');
// box.forEach(ele=>console.log(ele));

let userInput;
let computerInput;

box.forEach((e,i)=>{
    e.addEventListener('click',function(){

        if(e.innerText==='👊'){

            userInput='👊';
            computerInput=computerValue();

        }else if(e.innerText==='✋'){

            userInput='✋';
            computerInput=computerValue();

            

        }else if(e.innerText==='✌️'){
            
            userInput='✌️';
            computerInput=computerValue();

        }


        console.log(`user: ${userInput} and comp: ${computerInput}`);
        

    })
});


function computerValue(){

    const arr=['👊','✋','✌️'];

    

    let randomValue=Math.floor((Math.random()*3));
    return arr[randomValue];
    
}


computerValue();
