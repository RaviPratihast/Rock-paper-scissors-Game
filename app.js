'use strict';

// const { floor } = require("lodash-es");


const box=document.querySelectorAll('.box');
const result=document.querySelector('h1');
// box.forEach(ele=>console.log(ele));

let userInput;
let computeInput;

box.forEach((e,i)=>{
    e.addEventListener('click',function(){
        // console.log('clicked');

        // show the clicked value
        // console.log(e.textContent,i+1);
        userInput=i+1;
        console.log(`User:${userInput}`);
        computeInput=computerValue();
        console.log(`computer:${computeInput}`);

        if(userInput>computeInput){

            result.textContent='User Input Wins';
            console.log('user wins')
        }else if(userInput<computeInput){
            result.textContent='computer wins';
            console.log('comp wins')
        }else if(userInput===computeInput){
            result.textContent='you tied';
            console.log('draw');
        }


    })
})


function computerValue(){
    return Math.floor((Math.random()*3)+1);
}