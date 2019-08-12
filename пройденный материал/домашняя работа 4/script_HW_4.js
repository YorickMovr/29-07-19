"use strict"

alert('Hello! Here you can use our calculator');

let operator;
let operand1;
let operand2;

do {
    operator = prompt('Choose operator', 'add');
}while(
        operator !='add' && 
        operator !='sub' && 
        operator !='mult' && 
        operator !='div'
        )

do{
     operand1 = +prompt('Ener first operand:');
}while (isNaN(operand1));

do{
    operand2 = +prompt('Ener second operand:');
}while (isNaN(operand2));


switch(operator){
    case 'add': addition();break;
    case 'sub': subtraction(); break;
    case 'mult': multiplication();break;
    case 'div': division(); break;
};

 function addition(){
     let sum = operand1 + operand2;
     alert('Sum = ' + sum);
 };

 function subtraction(){
     let dif = operand1 - operand2;
     alert('Difference = ' + dif);
 };

 function multiplication(){
     let product = operand1 * operand2;
     alert('Product = ' + product);
 };

 function division(){
     let quotient = operand1 / operand2;
     alert('Quotient = ' + quotient);
 };
 