let gameSeq=[];
let userSeq=[];

let btns=["red" , "yellow" , "green" , "purple"];

let started=false;
let level=0;
let score=0;

let h2=document.querySelector("h2");
let h3=document.querySelector("h3");

document.addEventListener("keypress" , function(){
    if (started == false){
        console.log("game is started");
        started=true;

        levelUp();
    }

})

function levelUp(){
    userSeq=[];

    level+=1;
    h2.innerText=`Level ${level}`;
    let randInd = Math.floor(Math.random() * 3);
    let randColor = btns[randInd];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
    
}


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click" , btnPress);
}

function btnPress(){
    console.log(this);
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

function checkAns(idx){
    if (gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length == userSeq.length ){
            setTimeout(levelUp , 1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your Score Is <b>${level}</b> <br> Press Any Key To Start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        } , 150)
        reset();
    }
    
}


function reset(){
    started=false;
    gameSeq=[];
    useSeq=[];
    level=0;
}