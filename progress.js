
function myfunction(x){
var m=document.getElementById("m").value;
var n=document.getElementById("n").value;
var o=(m*1024/n);
document.getElementById("p1").innerHTML=o;
if(x>100){}else{
document.getElementById("s").style.width=x+"%";
document.getElementById("s").innerHTML=x+"%";
x=x+1;
setTimeout('myfunction('+x+')',o*10);}
}
