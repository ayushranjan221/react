const URL = "https://catfact.ninja/fact";
const factPara=document.querySelector("#fact");
const btn1=document.querySelector("#btn");


// const getdata = async () => {
//     let response=await fetch(URL);
//     console.log(response);
//     console.log("ayush");
//     let data=await response.json();
//     console.log(data["fact"]);
//     factPara.innerText=data["fact"];
// };

function getdata(){
    fetch(URL)
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            console.log(data);
            factPara.innerText=data["fact"];
        })
};
btn1.addEventListener("click",getdata);