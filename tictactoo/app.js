let boxes=document.querySelectorAll(".b");
let r=document.querySelector("#reset"); 
let turn=true;
let mcontainer=document.querySelector(".container");
let newgame=document.querySelector("#new");
let msg=document.querySelector("#msg");
const winP=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
];
let cnt=0;
boxes.forEach((b)=>{
    b.addEventListener("click",()=> {console.log("box was clicked");
        if(turn==true){
        b.innerText="X";
        turn=false;
        }
        else {
            b.innerText="O";
            turn=true;
        }
        b.disabled=true;
        check();
        cnt++;
        if (cnt === 9) {
    msg.innerText = "It's a Draw!";
    mcontainer.classList.remove("hide");
}
    });
});
const check=()=>{
            for(let p of winP){
                let one=boxes[p[0]].innerText;
                let two=boxes[p[1]].innerText;
                let three=boxes[p[2]].innerText;
            
            if(one !="" && two!="" && three!=""){
                if(one==two && two==three){
                    show(one);
                }
            }
        }
        }
const show=(winner)=>{
            msg.innerText=`congrats the winner is ${winner}`;
            mcontainer.classList.remove("hide");
            disableB();
        }
const disableB=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableB=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const resetGame=()=>{
    turn=true;
    enableB();
    mcontainer.classList.add("hide");
}
r.addEventListener("click",resetGame);
newgame.addEventListener("click",resetGame); 
