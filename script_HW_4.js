"use strict"

alert('Hello! Here you can use our calculator');

let operator;
let operand1;
let operand2;
let result;

do {
    operator = prompt('Choose operator', 'add');
}while(
        operator !='add' && 
        operator !='sub' && 
        operator !='mult' && 
        operator !='div'
        )

operand1 = getOperand(1);
operand2 = getOperand(2);

switch(operator){
    case 'add': addition(operand1,operand2);break;
    case 'sub': subtraction(operand1,operand2); break;
    case 'mult': multiplication(operand1,operand2);break;
    case 'div': division(operand1,operand2); break;
    case 'table': muliplicationTable(operand1); break;
};

function getOperand(operandIndex){
    let operand;
    do{
        operand = +prompt('Ener ' + operandIndex + 'operand:');
   }while (isNaN(operand));

   return operand;
};

 function addition(operand1,operand2){
    return operand1 + operand2;  
 };

 function subtraction(operand1,operand2){
     return operand1 - operand2;
 };

 function multiplication(operand1,operand2){
    return operand1 * operand2;
 };

 function division(operand1,operand2){
    return operand1 / operand2;
 };

 function muliplicationTable(){
    
 };

 alert('Result: ' + result)
 