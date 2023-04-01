'use strict'

function call()

{ 
    if(movie.selectedIndex)                    /////movie.value!="-Select Movie-"
    {   if(theater.selectedIndex)             ////theater.value!="-Select Theater-"
        {   if(showDate.value) 
            {   if(pic2.alt=="right")
                {   if(parseInt(ticketsNo.value))    ///ticketsNo.value

                    {   let no=parseInt(ticketsNo.value)
                        let d=new Date(showDate.value)
                        let dayNo=d.getDay() 

                        let dis1=0
                        let dis2=0
                            if(dayNo!=0 && dayNo!=6)
                            dis1=5
                            if(no>=10)
                            dis2=10;
                        
                        let dis=dis1+dis2;
                        let price=(100*no)-(100*no)*dis/100
                            
                        result.innerHTML=price;


                    }else    result.innerHTML="Please Enter no of tickets in digits";

                }else    result.innerHTML="Please Enter correct email id";

            }else    result.innerHTML="Please Select Date"; 

        } else result.innerHTML="Please Select Theater";       
    }
    else result.innerHTML="Please Select Movie";

}
  


function picAdd()  
{  let i=movie.selectedIndex;
    pic1.src=i+".png"

}



function emailCheck()

{  let email=inputEmail.value; 
    pic2.width="13"
    pic2.src="cross.png"
    
    if( (email.indexOf("@")==email.lastIndexOf("@")) && email.lastIndexOf("@")!=-1  )
    {   let n=email.indexOf("@")                
        if( (email.indexOf(".",n)==email.lastIndexOf(".")) && email.lastIndexOf(".")!=-1 && email.charAt(n+1)!=".") 
        {   pic2.src="right.png";  
            pic2.alt="right"
        }  

    }
        
    if(email.startsWith("@") || email.endsWith("@")) 
    { 
        pic2.src="cross.png"
    } 

    if(email.startsWith(".") || email.endsWith("."))
    {  
        pic2.src="cross.png" 
    }
    
}