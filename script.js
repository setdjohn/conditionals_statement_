var wrapperEle = document.body.querySelector(".wrapper");
var operationEle = document.body.querySelector(".operation");
var lastNoEle = document.body.querySelector(".lastNo");

var prompter1 = Number(prompt("TYPE A NUMBER"));

if(0<=prompter1){
  wrapperEle.innerHTML=prompter1;
}else if(0>=prompter1){
  wrapperEle.innerHTML=prompter1;
}else{
  wrapperEle.innerHTML="TYPE A NUMBER";
}

var operationprompt = prompt("Now provide an operation! (LIKE.. + - / *)");

if("+"==operationprompt){
  operationEle.innerHTML="+";
}else if("-"==operationprompt){
  operationEle.innerHTML="-";
}else if("/"==operationprompt){
  operationEle.innerHTML="/";
}else if("*"==operationprompt){
  operationEle.innerHTML="*";
}else{
  operationEle.innerHTML="Reload"
}

var prompter2 = Number(prompt("Type the SECOND NUMBER"));

if(0<=prompter2){
  lastNoEle.innerHTML=prompter2;
}else if(0>=prompter2){
  lastNoEle.innerHTML=prompter2;
}else{
  lastNoEle.innerHTML="Type number"
}

var addition=(prompter1+prompter2)
var subtraction=(prompter1-prompter2)
var division=(prompter1/prompter2)
var multiplication=(prompter1*prompter2)

if("+"==operationprompt){
  document.body.querySelector(".answer").innerHTML=addition;
}else if("-"==operationprompt){
  document.body.querySelector(".answer").innerHTML=subtraction;
}else if("/"==operationprompt){
  document.body.querySelector(".answer").innerHTML=division;
}else if("*"==operationprompt){
  document.body.querySelector(".answer").innerHTML=multiplication;
}