const upperSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet="abcdefghijklmnopqrstuvwxyz"
const numberSet="1234567890"
const symbolSet="~!#$%^&*()_+{}[]"

const getRandomeData=(dataSet)=>{
return dataSet[Math.floor(Math.random()* dataSet.length)]
}

const finalinput=document.querySelector(".totalchar")
const Totallength=document.querySelector(".length")
const upPw=document.querySelector(".Uppercase")
const lwPw=document.querySelector(".Lowercase")
const numPw=document.querySelector(".Numbercase")
const Symbol=document.querySelector(".Symbols")



const generatePasword=(password=" ")=>{
if(upPw.checked){
    password+=getRandomeData(upperSet)
}
if(lwPw.checked){
    password+=getRandomeData(lowerSet)
}
if(numPw.checked){
    password+=getRandomeData(numberSet)
}
if(Symbol.checked){
    password+=getRandomeData(symbolSet)
}
if(password.length<=Totallength.value){
    return generatePasword(password)
}
finalinput.innerText= truncateString(password,Totallength.value)
}

const button=document.querySelector("button")
button.addEventListener("click",()=>{
generatePasword();
});

function truncateString(str,num){
    if(str.length>num){
        let subStr=str.substring(0,num);
        return subStr;
    }else{
        return str;
    }
}







