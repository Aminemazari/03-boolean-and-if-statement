var  userChoice="";
var  loseEl=document.getElementById("lose");
var  winEl=document.getElementById("win");
var  tieEl=document.getElementById("tie"); 
 let win =0 ; 
 let tie=0  ;
 let lose =0 ;

function allTheShit (userChoice,tie,win,lose){
  var computerchoice ="";
  var randomint = Math.random() ; 
if (randomint<=1/3){
  computerchoice ="rock"
} 
else if (randomint>1/3 && randomint<=2/3){
  computerchoice ="papper"
}
else if (randomint>2/3){
  computerchoice ="scissors"
}
console.log(computerchoice);
if  (computerchoice =="scissors"){
  switch (userChoice){
    case "scissors" : return "tie" 
    break;; 
    case "papper": return "lose" 
    break; ; 
    case "rock":return "win" 
    break;; 

  }
}
 else if (computerchoice =="rock"){
  switch (userChoice){
    case "scissors" : return"lose"
    break; ; 
    case "papper": return "win" 
    break;; 
    case "rock":return "tie";  
    break;; 

  }
}
else if  (computerchoice =="papper"){
  switch (userChoice){
    case "scissors" : return "win"; 
     break;; 
    case "papper": return "tie" 
     break;; 
    case "rock":return "lose"
     break;; 

  }
} 
}
function rock(){
  userChoice="rock"; 
  switch (allTheShit(userChoice)){
    case "win" : win++
    break ; 
    case "lose":lose++
      break  ;
      case "tie":tie++
       break ;   
  }
  loseEl.innerText ="lose : "+lose ;
  winEl.innerText="win :" + win;
  tieEl.innerText="tie : "+tie;   

  
}
function papper(){
  userChoice="papper";
  switch (allTheShit(userChoice)){
    case "win" : win++
    break ; 
    case "lose":lose++
      break  ;
      case "tie":tie++
       break ;   
  }
  loseEl.innerText ="lose : "+lose ;
  winEl.innerText="win : " + win;
  tieEl.innerText="tie : "+tie;  
}
function scissors(){
  userChoice="scissors";
  switch (allTheShit(userChoice)){
    case "win" : win++
    break ; 
    case "lose":lose++
      break  ;
      case "tie":tie++
       break ;   
  }
  loseEl.innerText ="lose : "+lose ;
  winEl.innerText="win : " + win;
  tieEl.innerText="tie : "+tie;  
}
else if  (computerchoice =="papper"){
  switch (userChoice){
    case "scissors" :win++ ; 
     break;; 
    case "papper": tie++ ;
     break;; 
    case "rock": lose++ ;
     break;; 

  }
} 
}
function rock(){
  userChoice="rock"; 
  allTheShit (userChoice,tie,win,lose);
  loseEl.innerText ="lose : "+lose ;
  winEl.innerText="win :" + win;
  tieEl.innerText="tie : "+tie;    
}
function papper(){
  userChoice="papper";
  allTheShit (userChoice,tie,win,lose);
  loseEl.innerText ="lose : "+lose ;
  winEl.innerText="win :" + win;
  tieEl.innerText="tie : "+tie;  
}
function scissors(){
  userChoice="scissors";
  allTheShit (userChoice,tie,win,lose);
  loseEl.innerText ="lose : "+lose ;
  winEl.innerText="win :" + win;
  tieEl.innerText="tie : "+tie;    
}