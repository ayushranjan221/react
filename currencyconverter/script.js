const BASE_URL="https://latest.currency-api.pages.dev/v1/currencies";

  const dropdown=document.querySelectorAll(".dropdown select");
  const fromcurr=document.querySelector(".from select");
 const tocurr=document.querySelector(".to select");

window.addEventListener("load",()=>{
    updateExchangeRate();
})
const btn=document.querySelector(".btn3");
  for(select of dropdown){
    for(currcode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currcode;
        newOption.value=currcode;
        if(select.name==="from" && currcode==="USD"){
            newOption.selected="selected";
        }
        else if(select.name==="to" && currcode==="INR"){
            newOption.selected="selected";
        }
        
        select.append(newOption);

    }
    select.addEventListener("change",(evt)=>{
        updateflag(evt.target);
    })
  }
  const updateflag=(element)=>{
    let currcode=element.value;
    let countrycode=countryList[currcode];
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newsrc;

  }

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    updateExchangeRate();
})
const updateExchangeRate=async()=>{
    let amount=document.querySelector(".amount input");
    let amountval=amount.value;
    if(amountval=="" || amountval<0){
        amountval=1;
        amount.value="1";
    }
   
    const from = fromcurr.value.toLowerCase();
const to = tocurr.value.toLowerCase();
   const URL = `${BASE_URL}/${from}.json`;

    let response = await fetch(URL);
    let data = await response.json();

    const rate = data[from][to];

    console.log(rate);
   let famount=rate*amountval;
   let msg=document.querySelector(".msg");
   msg.innerText=`${amountval} ${from}=${famount} ${to}`;
}