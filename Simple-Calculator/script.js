let clearbtn=document.getElementById("btnclear");
let result=document.getElementById("result");
let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let btn4=document.getElementById("btn4");
let btn5=document.getElementById("btn5");
let btn6=document.getElementById("btn6");
let btn7=document.getElementById("btn7");
let btn8=document.getElementById("btn8");
let btn9=document.getElementById("btn9");
let btn0=document.getElementById("btn0");
let btnbtn=document.getElementById("btn.");
let btnplus=document.getElementById("btnplus");
let btnminus=document.getElementById("btnminus");
let btnproduct=document.getElementById("btnproduct");
let btndivision=document.getElementById("btndivision");
let btnequal=document.getElementById("btnequal");
clearbtn.onclick=function(){
    result.textContent="0";
}
btnplus.onclick=function(){
    if(result.textContent === "Number is Big" || result.textContent === "Error" || result.textContent==="Cannot divide by 0"){
        result.textContent = "+";
    } else {
        result.textContent += "+";
    }
}
btnminus.onclick=function(){
    if(result.textContent === "Number is Big" || result.textContent === "Error" || result.textContent==="Cannot divide by 0"){
        result.textContent = "-";
    } else {
        result.textContent += "-";
    }
}
btnproduct.onclick=function(){
    if(result.textContent === "Number is Big" || result.textContent === "Error" || result.textContent==="Cannot divide by 0"){
        result.textContent = "*";
    } else {
        result.textContent += "*";
    }
}
btndivision.onclick=function(){
    if(result.textContent === "Number is Big" || result.textContent === "Error" || result.textContent==="Cannot divide by 0"){
        result.textContent = "/";
    } else {
        result.textContent += "/";
    }
}
btn1.onclick=function(){
    if(result.textContent === "0" || result.textContent === "Number is Big"  || result.textContent === "Error" || result.textContent==="Cannot divide by 0"){
        result.textContent = "1";
    } else {
        result.textContent += "1";
    }
}
btn2.onclick=function(){
    if(result.textContent === "0"  || result.textContent === "Number is Big"  || result.textContent === "Error" || result.textContent==="Cannot divide by 0"){
        result.textContent = "2";
    } else {
        result.textContent += "2";
    }
}
btn3.onclick=function(){
    if(result.textContent === "0"  || result.textContent === "Number is Big"  || result.textContent === "Error" || result.textContent==="Cannot divide by 0"){
        result.textContent = "3";
    } else {
        result.textContent += "3";
    }
}
btn4.onclick=function(){
    if(result.textContent === "0"  || result.textContent === "Number is Big"  || result.textContent === "Error"  || result.textContent==="Cannot divide by 0"){
        result.textContent = "4";
    } else {
        result.textContent += "4";
    }
}
btn5.onclick=function(){
    if(result.textContent === "0"  || result.textContent === "Number is Big"  || result.textContent === "Error" || result.textContent==="Cannot divide by 0"){
        result.textContent = "5";
    } else {
        result.textContent += "5";
    }
}
btn6.onclick=function(){
    if(result.textContent === "0"  || result.textContent === "Number is Big"  || result.textContent === "Error" || result.textContent==="Cannot divide by 0"){
        result.textContent = "6";
    } else {
        result.textContent += "6";
    }
}
btn7.onclick=function(){
    if(result.textContent === "0"  || result.textContent === "Number is Big"  || result.textContent === "Error" || result.textContent==="Cannot divide by 0"){
        result.textContent = "7";
    } else {
        result.textContent += "7";
    }
}
btn8.onclick=function(){
    if(result.textContent === "0"  || result.textContent === "Number is Big"  || result.textContent === "Error" || result.textContent==="Cannot divide by 0"){
        result.textContent = "8";
    } else {
        result.textContent += "8";
    }
}
btn9.onclick=function(){
    if(result.textContent === "0"  || result.textContent === "Number is Big"  || result.textContent === "Error" || result.textContent==="Cannot divide by 0"){
        result.textContent = "9";
    } else {
        result.textContent += "9";
    }
}
btn0.onclick=function(){
    if(result.textContent === "0"  || result.textContent === "Number is Big"  || result.textContent === "Error" || result.textContent==="Cannot divide by 0"){
        result.textContent = "0";
    } else {
        result.textContent += "0";
    }
}
btnbtn.onclick=function(){
    if(  result.textContent === "Number is Big"  || result.textContent === "Error" || result.textContent==="Cannot divide by 0"){
        result.textContent = ".";
    } else {
        result.textContent += ".";
    }
}
btnequal.onclick=function(){
    if(result.textContent==="771737"){
        result.textContent="I love u ...❤️";
        return;
    }
    if(result.textContent ==="Error" || result.textContent === 'Number is Big'){
        return;
    }
    try{
        let answer = eval(result.textContent);
        console.log(answer);
        if (!Number.isFinite(answer)) {
            result.textContent = "Cannot divide by 0";
        }
        else if(answer.toString().length > 13){
            result.textContent = "Number is Big";
        }else{
            result.textContent = answer;
        }
    }
    catch{
        result.textContent = "Error";
    }
}
