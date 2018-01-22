 function clock()
		 {
		    var date=new Date();
			h=date.getHours();
			m=date.getMinutes();
			s=date.getSeconds();
		    time(h,m,s);
			
		 }
 function time(h,m,s,am)
		 {
		    //s++;
			if(s<10)
			{
				s='0'+s;
			}
			if(m<10)
			{
				m='0'+m;
			}
			
			if(h>12)
			    {
					
                    h=h%12;
					am='pm';
				}
			 else
		        {  
			        if(h==12)
					{
						am='pm';
					}
					else
					am='am';
				}
			if(h<10)
			     {
		          h='0'+h;
			     }
		    /*if(s==60)
			{
			   m=m+1;
			   s=0;
			   if(m==60)
			   {
			      h=h+1;
			       m=0;
			 
		 	      
			   }
            }*/
			display(h,m,s,am);
		}
        function display(h,m,s,am)
			{
			document.getElementById("h").innerHTML=h;
			document.getElementById("m").innerHTML=m;
			document.getElementById("s").innerHTML=s;
			document.getElementById('am').innerHTML=am;
             }
setInterval(clock,1000)