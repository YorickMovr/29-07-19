alert('1');
alert('Here you can use our calculator');
alert('You need to choose an action and write your decision');
let operation = prompt('add for +, sub for -, mult for*, div for /');

while (operation !== 'add' && operation !== 'sub' && operation !== 'mult' && operation !== 'div') {
     operation = prompt('add for +, sub for -, mult for*, div for /');
};


let numbOfOperands = prompt('How many operands do you want to use 1-5 ?');
while (numbOfOperands !=='1'&& numbOfOperands !=='2'&& numbOfOperands !=='3'&& numbOfOperands !=='4'&& numbOfOperands !=='5'){
    numbOfOperands = prompt('How many operands do you want to use 1-5 ?');
};


num1 ='', num2='' , num3='' , num4='' , num5='' ;


function numbOfOperands1(){
    num1 = prompt('Enter first number');
    while (isNaN(num1)){
    num1 = prompt('Enter first number')};
};
function numbOfOperands2(){
    num1 = prompt('Enter first number');
    while (isNaN(num1)){
    num1 = prompt('Enter first number')};

    num2 = prompt('Enter second number');
    while (isNaN(num2)){
    num2 = prompt('Enter second number')};
};

function numbOfOperands3(){
    num1 = prompt('Enter first number');
    while (isNaN(num1)){
    num1 = prompt('Enter first number')};

    num2 = prompt('Enter second number');
    while (isNaN(num2)){
    num2 = prompt('Enter second number')};

    num3 = prompt('Enter third number');
    while (isNaN(num3)){
    num3 = prompt('Enter third number')};
};

function numbOfOperands4(){
    num1 = prompt('Enter first number');
    while (isNaN(num1)){
    num1 = prompt('Enter first number')};

    num2 = prompt('Enter second number');
    while (isNaN(num2)){
    num2 = prompt('Enter second number')};

    num3 = prompt('Enter third number');
    while (isNaN(num3)){
    num3 = prompt('Enter third number')};

    num4 = prompt('Enter fours number');
    while (isNaN(num4)){
    num4 = prompt('Enter fourth number')};
};

function numbOfOperands5(){
    num1 = prompt('Enter first number');
    while (isNaN(num1)){
    num1 = prompt('Enter first number')};

    num2 = prompt('Enter second number');
    while (isNaN(num2)){
    num2 = prompt('Enter second number')};

    num3 = prompt('Enter third number');
    while (isNaN(num3)){
    num3 = prompt('Enter third number')};

    num4 = prompt('Enter fours number');
    while (isNaN(num4)){
    num4 = prompt('Enter fourth number')};

    num5 = prompt('Enter fifth number');
    while (isNaN(num5)) {
    num5 = prompt('Enter fifth number')};
};


switch(numbOfOperands){
    case '1':
    numbOfOperands1();
    break;

    case '2':
    numbOfOperands2();
    break;

    case '3':
    numbOfOperands3();
    break;

    case '4':
    numbOfOperands4();
    break;
    
    case '5':
    numbOfOperands5();
    break;
}

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);
num4 = Number(num4);
num5 = Number(num5);

let sum, difference, prod, quot;

switch (operation){
    case 'add':
        sum = num1 + num2 +num3 +num4 +num5;
        alert('sum = ' + sum );
        break;
    case 'sub':
        difference= num1- num2- num3- num4- num5;
        alert('difference = ' + difference);
        break;
    case 'mult':
            if(num2='')num2=1;
            if(num3='')num3=1;
            if(num4='')num4=1;
            if(num5='')num5=1;
        prod = num1 *num2 *num3 *num4 *num5;
        alert ('product = '+prod);
        break;
    case 'div':
            if(num2='')num2=1;
            if(num3='')num3=1;
            if(num4='')num4=1;
            if(num5='')num5=1;
        quot = num1/num2/num3/num4/num5;
        alert('quotient = '+ quot);
        break;
}

