alert("Welcome to Talking tim")
var data =[];
var cache;
var Cmd;
var points =0;
var Tim ={
Name:"Tim",
Level:"1",
Age:"0"
}
var Responces =[
"Hello to you sir!",
"good morning to you to!"
"Good afternoon to you!",
"Bye",
"Please don't curse!"
];
function log(msg){
  confirm("Tim: \n"+msg);
  data[0] = msg;
  
}

function ProcCmd(){
var command = document.getElementById("command").value;
Cmd = command.split(" ");
cache = Cmd.toLowerCase();

if(cache[0]=="hello"){
log(Responces[0]);
}
else if(cache[0]=="good"&&cache[1]=="morning"){
  log(Responces[1]);
}
else if(cache[0]=="good"&&cache[1]=="afternoon"){
  log(Responces[2])
}
else if(cache[0]=="bye"){
  log(Responces[3]);
}


}
//points sytem basic

function ShowPoints(){
  document.getElementById("Points")
 if(points===25){
   Tim.Age =1;
   points +=5;
   alert("Congratulations, Level 2 reached")
   Tim.level =2;
   
 } 
}





