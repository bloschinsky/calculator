(function calculator(){

var startCheck = true;
var calculated = false;
var operation = 0;
var operandA = 0;
var operandB = 0;

var display = document.querySelector(".display");
display.value = 0;

var controls = document.querySelectorAll(".funk");
var buttons = document.querySelectorAll(".button");


function displayDraw(buttonValue){
 if ((display.value.length < 15) && !(isNaN(display.value))){
 	if (display.value != "0") {
  display.value = display.value + buttonValue;}
 		else {display.value = buttonValue;}
    }
  else display.value = "ERROR";
}

function addButtonHandler(button){
	button.addEventListener("click", function(){buttonPress(button)} );
}

function checker(button){
 if (~button.className.indexOf("digit")) {
  
  if (startCheck) {
  	display.value = 0;
    startCheck = false;
    }
 	
  if (~button.className.indexOf("coma")) {
 		
    if (!( ~display.value.indexOf(".")) ) {
    	if ( +display.value != 0) {
    	displayDraw(button.value);
    	} else displayDraw("0"+button.value);
    }
       
 	} else displayDraw(button.value);
  
  operandB = display.value;
  calculated = false;
 }
 
  if (~button.className.indexOf("reset")){
    display.value=0;
    operandA=0;
    operandB=0;
    startCheck=true;
    operation = 0;
    }
    
  if (~button.className.indexOf("funk")){
  	activeClassClear();
  	button.classList.add('selected');
    
    if ( !calculated && operation){
    	result();
      }
    
    operation = button.value;
    operandA = display.value;    
    startCheck = true;
  }
  
	if (~button.className.indexOf("symbol")){
  display.value = +display.value * -1;
  }

	if (~button.className.indexOf("result")){
  result();
  }
}

function activeClassClear(){
	for (var j = 0; j < controls.length; j++){
  	controls[j].classList.remove('selected');
  	}
}

function buttonPress(button){
  activeClassClear();
  checker(button);
}

function plus(){
	operandA = +operandA + +operandB;
};

function minus(){
	operandA = +operandA - +operandB;
};

function multiply(){
	operandA = +operandA * +operandB;
};

function divide(){
	operandA = +operandA / +operandB;    
};

function calculate(){
	switch(operation){
  case "+": plus();
  					break;
  case "-": minus();
    				break;
  case "*": multiply();
    				break;
  case "/": divide();
    				break;
  }
}



function floatFix(accuracy){
operandA = +operandA.toFixed(accuracy);
}

function result(){
  
  if (operation) {
      calculate();
      floatFix(10);
    } 
    
  display.value = 0;
  displayDraw(operandA);

  startCheck = true;
  calculated = true;
}

for (i=0; i<buttons.length; i++){
	addButtonHandler(buttons[i]);
}

//Addon

(function bgColorFlow(){

var mainBgColor=0;

var backgroundFlow = function(){
    document.body.style.backgroundColor = "hsl("+ mainBgColor +", 100%, 93%)";
    mainBgColor +=3;
    if (i>360) i=0;
}

var timerId = setInterval(backgroundFlow, 800);
}())



}());



