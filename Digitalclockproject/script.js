function date()
{
    var d=new Date();
     h=d.getHours();
     m=d.getMinutes();
     s=d.getSeconds();
     if(h>=12)
      {
          display('PM','form');
      }
      else{
        display('AM','form');
      }
      if(h!=12)
      {
          h=h%12;
          if(h==0)
          {
              h=12;
          }
      }
     display(h,'h');
     display(m,'m');
     display(s,'s');
     
}
/*function time(h,m,s)
{
    s++;
    if(s==60)
    {
        m=m+1;
        s=0;
        if(m==60)
        {
           h=h+1;
            m=0;
            if(h>12)
                h=h-12;
        }
    }
    display(h,m,s);
}*/
function display(val,id)
{
    if(val<10)
    {
        val="0"+val;
    }
    
    document.getElementById(id).innerHTML=val;
 
}
setInterval(date,1000);