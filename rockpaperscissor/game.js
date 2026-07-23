let users=0;
let comps=0;
const choices=document.querySelectorAll(".choice");
const userScorep=document.querySelector("#user");
const compScorep=document.querySelector("#comp");
let msg=document.querySelector("#msg");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    });
});
const compc=()=>{
    let options=["rock","paper","scissors"];
    const rind=Math.floor(Math.random()*3);
    return options[rind];
}
const playGame=(userchoice)=>{
    const compchoice=compc();
    console.log(compchoice);
    console.log(userchoice);
    if(userchoice===compchoice){
        //draw
        msg.innerText="Draw";
        msg.style.backgroundColor="#2292A4";
    }
    else{
        let tell=true;
        if(userchoice==="rock"){
            if(compchoice==="scissors"){
                tell=true;
            }
            else tell=false;
        }
        if(userchoice==="paper"){
            if(compchoice==="rock"){
                tell=true;
            }
            else tell=false;
        }
        if(userchoice==="scissors"){
            if(compchoice==="paper"){
                tell=true;
            }
            else tell=false;
        }
        showwinner(tell);
    }
}
const showwinner=(tell)=>{
    if(tell){
        users++;
        userScorep.innerText=users;
        msg.innerText="You Won!!";
        msg.style.backgroundColor="green";
    }
    else{
        comps++;
        compScorep.innerText=comps;
        msg.innerText="You Lost";
        msg.style.backgroundColor="red";
    }
}