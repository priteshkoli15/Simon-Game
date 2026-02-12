let btns = ["yellow" , "red" , "purple", "green"];

let gameseq= [];
let userseq = [];
let hs = [];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game Started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}


function levelUp(){
    userseq=[];
    level++;
    // h2.innerText = `Level ${level}`;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)
    // console.log(randBtn);
    // console.log(randColor);
    // console.log(randIdx);
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);
}

function checkAns(idx){
    console.log("Current Level : " , level);

    if(userseq[idx]===gameseq[idx]){
        if(userseq.length=== gameseq.length){
          setTimeout(levelUp, 1000); 
          hs.push(level);
        }
    } else{
        h2.innerHTML= `Game Over! Your score was <b>${level}</b> <br> Press any key to restart. Highest score is ${funchs()}`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameseq=[];
    userseq=[];
    level = 0;
}

function funchs(arrh){
    let hsc = hs[hs.length-1];
    return hsc;
};

