let max;
let min;
let RandomNumber;
document.getElementById("button").onclick=function(){
    max = Number(document.getElementById("max").value);
    min = Number(document.getElementById("min").value);
    RandomNumber=Math.floor(Math.random()*(max-min +1)+min);
    document.getElementById("h1").innerText=RandomNumber
}