const startButton=document.getElementById("start");
const firstBox=document.getElementById("box1");
const secondBox=document.getElementById("box2");
const body=document.querySelector("body");
const resetButton=document.getElementById("reset");
const text=document.getElementById("text");

alert("IN THIS GAME YOU ARE REQUIRED TO CLICK THE START BUTTON UNTILL THE NUMBERS IN THE TWO SECTIONS ARE SAME");
const numbers=[1,2,3,4,5,6,7,8,9,10];
startButton.addEventListener("click",()=>{
randomA=Math.floor(Math.random()*numbers.length);
firstBox.innerText=randomA;
randomB=Math.floor(Math.random()*numbers.length);
secondBox.innerText=randomB;

if(randomA==randomB){
colorA();
resetButton.style.display="block";
startButton.style.display="none";
text.style.display="block";
}
});

resetButton.addEventListener("click",()=>{
firstBox.innerText="_";
secondBox.innerText="_";
text.style.display="none";
body.style.background="maroon";
resetButton.style.display="none";
startButton.style.display="block";
});

colorA=()=>{    
body.style.backgroundColor="green";
}




