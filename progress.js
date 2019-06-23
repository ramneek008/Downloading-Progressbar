
function myfunction(x){

    var m=document.getElementById("m").value;            //getting downloading size in mb 
    var n=document.getElementById("n").value;            //getting downloading speed at that time in kbps
    var o=(m*1024/n);                                    //calculating downloading time in seconds
    
    document.getElementById("p1").innerHTML=o;
    
    if(x>100)
    {
                                                        //it is empty because no task is done when it reaches 100% and the task comes to an end
    }
    else
    {
    document.getElementById("s").style.width=x+"%";       //progressing width of progress bar
    document.getElementById("s").innerHTML=x+"%";         //progressing numerical % of width written on the progress bar 
    x=x+1;
    
    setTimeout('myfunction('+x+')',o*10);}                //time function causing the delay
    }
    
    //1mb = 1024kb
    //We can change the downloading speed at run time by changing the value at the input field while downloading. But this speed will be changing by human interference.
    //We can direcly get the speed from the speed tracking websites directly to these input fields so that the value changes accordingly and perfectly which will give us the absolute result.