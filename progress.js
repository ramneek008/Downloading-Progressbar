
function myfunction(x){
    var m=document.getElementById("m").value;            //getting downloading size in mb 
    var n=document.getElementById("n").value;            //getting downloading speed at that time
    var o=(m*1024/n);                                    //calculating downloading time
    document.getElementById("p1").innerHTML=o;
    if(x>100)
    {
    }
    else
    {
    document.getElementById("s").style.width=x+"%";       //progressing width
    document.getElementById("s").innerHTML=x+"%";         //progressing %
    x=x+1;
    setTimeout('myfunction('+x+')',o*10);}                //time function
    }
    