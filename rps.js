let userScore=0;
let compScore=0;
let choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');
const userScorepara=document.querySelector('#user-score');
const compscorepara=document.querySelector('#comp-score');


const genCompChoice=()=>{
    const options=['rock','paper','scissors'];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

}
const playGame=(userChoice)=>{
    console.log('choice was clicked=',userChoice);
    const computerChoice=genCompChoice();
    console.log('comp choice:',computerChoice);
 
   if(userChoice===computerChoice){
    msg.innerText='Its a draw!Play again';
    msg.style.backgroundColor='#081b31';
  
   }else{
        if((userChoice==='rock' && computerChoice==='scissors') ||
           (userChoice==='paper' && computerChoice==='rock') ||
           (userChoice==='scissors' && computerChoice==='paper')){
            userScore++;
            userScorepara.innerText=userScore;
            msg.innerText=`You win! ${userChoice} beats ${computerChoice}`;
            msg.style.backgroundColor='green';
            

        }else{
        compScore++;
        compscorepara.innerText=compScore;
        msg.innerText=`You lose!${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor='red',computerChoice,'beats',userChoice;
        
    }
}}
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute('id');
        playGame(userChoice);


    });
});
