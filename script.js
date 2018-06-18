var turn = "O";

  
//set Buttons 
function remove() {

    for(var i=1;i<=9;i++){
        document.getElementById(i).disabled = false;
        document.getElementById(i).value = '';
    }
    
    document.getElementById("popup").style.visibility = "hidden";
    document.getElementById("overlay").style.visibility = "hidden";
}

function btndeactivate() {
    for(var i=1;i<=9;i++){
        document.getElementById(i).disabled = true;
    }
   
}

function popup(gewinner) {
      
      btndeactivate();
    
      
      popuptext = document.getElementById("text");
      popuptext.innerHTML = gewinner + " wins the match";
    
      //macht Popup 
      var pop = document.getElementById("popup");
      var overlay = document.getElementById("overlay");
      pop.style.visibility = "visible";
      overlay.style.visibility ="visible"
}



function checking() {
    
    var b1 = document.getElementById("1").value;
    var b2 = document.getElementById("2").value;
    var b3 = document.getElementById("3").value;
    var b4 = document.getElementById("4").value;
    var b5 = document.getElementById("5").value;
    var b6 = document.getElementById("6").value;
    var b7 = document.getElementById("7").value;
    var b8 = document.getElementById("8").value;
    var b9 = document.getElementById("9").value;
 
   //All condition with respect to b1:
    if (((b1=="X") || (b1=="O")) && ((b1 == b2) && (b2 == b3))) {
        popup(b1);
    }
    
    else if (((b1=="X") || (b1=="O")) && ((b1 == b4) && (b4 == b7))){
        popup(b1);
    }
    
    else if (((b1=="X") || (b1=="O")) && ((b1 == b5) && (b5== b9))){
      popup(b1);
    }

    //All condition with respect to b9:
    else if (((b9=="X") || (b9=="O")) && ((b9 == b8) && (b8 == b7))){
        popup(b9);
    }
    
    else if (((b9=="X") || (b9=="O")) && ((b9 == b6) && (b6 == b3))){
      popup(b9);
    }
    
    //All condition with respect to b4:
    else if (((b4=="X") || (b4=="O")) && ((b4 == b5) && (b5 == b6))){
      popup(b4);
    }
    
    //All condition with respect to b2:
    else if (((b2=="X") || (b2=="O")) && ((b2 == b5) && (b5 == b8))){
      popup(b2);
    }
    
    //All condition with respect to b7:
    else if (((b7=="X") || (b7=="O")) && ((b7 == b5) && (b5 == b3))){
      popup(b7);
    }
    var temp,draw=false;
    for(var i=1;i<=9;i++){
        temp=document.getElementById(i).value;
        if(temp!="X" && temp!="O"){
            draw=true;
        }
    }
    if(draw==false){
        console.log("draw");
        draw='nobody';
            popup(draw);}
    
    }

  //now
  
function setzen(x, turn) {
     if (x==1) {
     var button = document.getElementById("1");
     button.value = turn;
     button.disabled=true;
     }
     else if (x==2) {
     var button = document.getElementById("2");
     button.value = turn;
     button.disabled=true;
     }
     else if (x==3) {
     var button = document.getElementById("3");
     button.value = turn;
     button.disabled=true;
     }
     else if (x==4) {
     var button = document.getElementById("4");
     button.value = turn;
     button.disabled=true;
     }
     else if (x==5) {
     var button = document.getElementById("5");
     button.value = turn;
     button.disabled=true;
     }
     else if (x==6) {
     var button = document.getElementById("6");
     button.value = turn;
     button.disabled=true;
     }
     else if (x==7) {
     var button = document.getElementById("7");
     button.value = turn;
     button.disabled=true;
     }
     else if (x==8) {
     var button = document.getElementById("8");
     button.value = turn;
     button.disabled=true;
     }
     else if (x==9) {
     var button = document.getElementById("9");
     button.value = turn;
     button.disabled=true;
     }
     checking();
     }
  
//whose turn?
function clicked(button) {
    if (turn=="X") {
    turn="O";
    setzen(button, turn);
    }
    else if (turn=="O") {
    turn="X";
    setzen(button, turn); 
    }
    }