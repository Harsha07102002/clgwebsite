
function mass(sw)
{
    var da,na,ta,nta;
    
    if (sw == 0) {
      da = "CSE"
      na = 40
      ta = 32
      nta = 08
    }else if(sw==1){
        da = "IT"
        na = 30
        ta = 25
        nta = 05
    }else if(sw==2){
        da = "CIVIL"
        na = 25
        ta = 20
        nta = 05
    }else if(sw==3){
      da = "MECH"
      na = 28
      ta = 25
      nta = 03    
    }else if(sw==4){
      da = "ECE"
      na = 15
      ta = 12
      nta = 03
    }else if(sw==5){
      da = "EEE"
      na = 24
      ta = 18
      nta = 06
    }
    document.getElementById('d').innerHTML = da;
    document.getElementById('n').innerHTML = na;
    document.getElementById('t').innerHTML = ta;
    document.getElementById('nt').innerHTML = nta;
}

function jass(sw)
{
    var s1,s2,s3,s4,ss1,ss2,ss3,ss4;
    if (sw == 0) {
      s1 = "Section 1"
      s2 = "Section 2"
      s3 = "Section 3"
      s4 = "Section 4"
      ss1 = 68
      ss2 = 72
      ss3 = 70
      ss4 = 69
    }else if(sw==1){
      s1 = "Section 1"
      s2 = "Section 2"
      s3 = " "
      s4 = " "
      ss1 = 68
      ss2 = 72
      ss3 = " "
      ss4 = " "
    }else if(sw==2){
      s1 = "Section 1"
      s2 = "Section 2"
      s3 = "Section 3"
      s4 = " "
      ss1 = 69
      ss2 = 71
      ss3 = 70
      ss4 = " "
    }else if(sw==3){
      s1 = "Section 1"
      s2 = "Section 2"
      s3 = "Section 3"
      s4 = "Section 4"
      ss1 = 72
      ss2 = 69
      ss3 = 68
      ss4 = 70  
    }else if(sw==4){
      s1 = "Section 1"
      s2 = "Section 2"
      s3 = "Section 3"
      s4 = " "
      ss1 = 69
      ss2 = 72
      ss3 = 70
      ss4 = " "
    }else if(sw==5){
      s1 = "Section 1"
      s2 = "Section 2"
      s3 = "Section 3"
      s4 = " "
      ss1 = 70
      ss2 = 72
      ss3 = 68
      ss4 = " "
    }
    document.getElementById('s1').innerHTML = s1;
    document.getElementById('s2').innerHTML = s2;
    document.getElementById('s3').innerHTML = s3;
    document.getElementById('s4').innerHTML = s4;
    document.getElementById('ss1').innerHTML = ss1;
    document.getElementById('ss2').innerHTML = ss2;
    document.getElementById('ss3').innerHTML = ss3;
    document.getElementById('ss4').innerHTML = ss4;
}