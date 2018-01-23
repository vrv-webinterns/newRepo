  var d, h, m, s;
function clock(){
    d = new Date;
    
    h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60);
    m = 6 * d.getMinutes();
    s = 6 * d.getSeconds();
    
    
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    
    if(h >= 12){
        setText('suffix', 'PM');
    }else{
        setText('suffix', 'AM');
    }
	if(h != 12){
        h %= 12;
    }

    
    setText('sec', s);
    setText('min', m);
    setText('hr', h);
    
    
    setTimeout(clock, 1000);
    
};
  

function setText(id,val){
    if(val < 10){
        val = '0' + val;
    }
    document.getElementById(id).innerHTML = val;
};

