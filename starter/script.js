'use strict';

// console.log(document.querySelector('.message').
// textContent);

// document.querySelector('.message').textContent = 'correct number ';
// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 19;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let serectNumber = Math.trunc(Math.random() *20) + 1;
let score = 20;
let highscore = 0;



document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess)

if(!guess){
    document.querySelector(".message").textContent = 'no value';
}else if(guess === serectNumber){
    document.querySelector('.message').textContent = 'correct number!';
    document.querySelector('.number').textContent = serectNumber;


    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

if(score > highscore){
    highscore = score;
document.querySelector('.highscore').textContent = highscore;   

    }

}else if(guess > serectNumber){
if(score > 1){
    document.querySelector('.message').textContent = 'Too high!';
    score--;
    document.querySelector('.score').textContent = score;   
}else{
    document.querySelector('.message').textContent = 'you lost the Game!';
    document.querySelector('.score').textContent = 0; 
}
  
}
});




document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    serectNumber = Math.trunc(Math.random() *20) + 1;

document.querySelector('.message').textContent = 'start message....';
document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = '?';
document.querySelector('.guess').textContent = '';

document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem';




})


