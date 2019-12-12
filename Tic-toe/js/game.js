// PAge Loadding time disabled the alert msge  and view the first turn Details

$( document ).ready(function() {
    $("#alerts").hide();
     $("#moves").show();
       $('.board').addClass('animated  flipInY');
         $('.btn').addClass('animated lightSpeedIn');
});


                                    //Clicking each button

function placeValues(e)
{
    res=document.getElementById("result");
    if(e.value=="")
    {
        a = document.getElementById("turn");
        if(a.value=="1")   //Specifies first move 
        {
            f=0;
            document.getElementById("moves").innerHTML="Player O Moves";
            $('#moves').addClass('animated slideInUp');
            e.value="X";
            a.value="0";
        }
        else               //Specifies second move 
        {
            f=1;
            document.getElementById("moves").innerHTML="Player X Moves";
            $('#moves').addClass('animated slideInUp');
            e.value="O";
            a.value="1";
        }
    }

//Select each query selector for finding and placing values based on the users click

//for the rows
    x = document.querySelectorAll(".fr");
    var k=CheckWin(x);                       //for 1 st row
    if(k!=null)
    {
        res.value=""+k+" win";
        setTimeout(function(){ clearAll()}, 500);
    }


    y = document.querySelectorAll(".sr");
    var y=CheckWin(y);                       //for 2 nd  row
    if(y!=null)
    {
        res.value=""+y+" win";
        setTimeout(function(){ clearAll()}, 500);
    }


    z = document.querySelectorAll(".tr");
    var z=CheckWin(z);                       //for 3 rd  row
    if(z!=null)
    {
        res.value=""+z+" win";
        setTimeout(function(){ clearAll()}, 500);
    }

//for the coloums
    a = document.querySelectorAll(".fc");
    var a=CheckWin(a);                           //for 1 st coloum
    if(a!=null)
    {
        res.value=""+a+" win";
        setTimeout(function(){ clearAll()}, 500);
    }


    b = document.querySelectorAll(".sc");
    var b=CheckWin(b);                             //for 2 nd coloum
    if(b!=null)
    {
        res.value=""+b+" win";
        setTimeout(function(){ clearAll()}, 500);
    }


    c = document.querySelectorAll(".tc");
    var c=CheckWin(c);                         //for 3 rd coloum         
    if(c!=null)
    {
        res.value=""+c+" win";
        setTimeout(function(){ clearAll()}, 500);
    }

    m = document.querySelectorAll(".ld");
    var m=CheckWin(m);                           //for the left Diagonal
    if(m!=null)
    { 
        res.value=""+m+" win";
        setTimeout(function(){ clearAll()}, 500);
    }

    n = document.querySelectorAll(".rd");
    var n=CheckWin(n);                            //for the right Diagonal
    if(n!=null)
    {

        res.value=""+n+" win";
        setTimeout(function(){ clearAll()}, 500);
    }
    console.log(res.value);
if (res.value === "") {
    checkDraw(); 
}
       // check when its draw
}

function checkDraw() {   // check when its draw after 9 clicks   

    res=document.getElementById("result");
    if(res.value==="")
    {
         x = document.querySelectorAll(".btn-light");
    g=0;
    for (i = 0; i < x.length; i++) {
        if((x[i].value=="X") || (x[i].value=="O") )
        {
            g=g+1;
            
        }


    }
    if(g>=9)
    {
          res.value="Draw";
        $("#alerts").show();
          $("#moves").hide();
     
    }
    }

   
}


function clearAll() {               // clear the buttons when the game is over 


    x = document.querySelectorAll(".btn-light");

    for (i = 0; i < x.length; i++) {
        x[i].value="";
            x[i].style.background="url('images/but.jpg')";
    }
    setTimeout(function() {
        $('#alerts').fadeOut('fast');
    }, 700); 
    setTimeout(function() {
        $('#moves').fadeIn('fast');
    }, 800); 
  $('.board').addClass('animated  flipInY');
   document.getElementById("result").value="";
} 





function CheckWin(x) {                // check which user is win and returns the value to the previous function


    f=1,k=1;
    for (i = 0; i < x.length; i++) {
        if(x[i].value == "X")
        {
            f=f+1;
        }
        else if(x[i].value == "O")
        {
            k=k+1;
        }
    }
    if(f==4)
    {
        $("#alerts").show();
         $("#moves").hide();
        for (i = 0; i < x.length; i++) {
           
       
            x[i].style.background="url('images/bg1.png')";
          

            
        }
        r = document.getElementById("x");
        r.value++;
      
        return "X";

    }
    if(k==4)
    {
        $("#alerts").show();
         $("#moves").hide();
        for (i = 0; i < x.length; i++) {
                x[i].style.background="url('images/bg1.png')";

        }
        r = document.getElementById("o");
        r.value++;
        
        return "O";
    }

}


function FinalResult() {     // it shows final results
       
 $('#alerts').show();
 res=document.getElementById("result");
 var h= document.getElementById("o");
 var i=document.getElementById("x");
 if(h.value>i.value)
   res.value="O is the Winner";
else if(h==i)
  res.value="Draw the Entire game";
 else
      res.value="X is the Winner";
  h.value=0;
  i.value=0;
   $("#moves").hide();
  setTimeout(function(){ clearAll()}, 1500);

}