let x;
document.getElementById("inc").onclick=function(){
    x=Number(document.getElementById("counter").textContent);
    x+=1;
    document.getElementById("counter").textContent=x;

}
document.getElementById("dec").onclick=function(){
    x=Number(document.getElementById("counter").textContent);
    x-=1;
    document.getElementById("counter").textContent=x;

}
document.getElementById("cle").onclick=function(){
    x=Number(document.getElementById("counter").textContent);
    x=0;
    document.getElementById("counter").textContent=x;

}
