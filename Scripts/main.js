var data =[];
var cache;
var Cmd;
var Responces =[
"Hello to you sir!",
"good morning to you to!"
"Good afternoon to you!",
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
  
}


}

