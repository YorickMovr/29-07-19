"use strict"
// 1 Спрашиваем оператор
let operator;
let operandsCount;
let operand;
let result = null;

do {
    operator = prompt('Choose operator', 'add');
}while(
        operator !='add' && 
        operator !='sub' && 
        operator !='mult' && 
        operator !='div'
        )

//  2 Сколько операндов
do{
    operandsCount = prompt('operands count', '2');
}while(isNaN(operandsCount)||
        operandsCount <=0||
        operandsCount>=5
        )

for(let i=1;1<=operandsCount;i++){
    do{
          operand = prompt('Operand '+i, '0');

    }while(isNaN(operand));

    if (result ===null){
        result=operand;
        continue;
    }
    switch (operator){
        case 'add': result +=operand; break;
        case'sub': result -=operand;break;
        case 'div': result /=operand;break;
        case 'mult': result *=operand;
        default: console.warn(operator + 'is not valid');
        }
    
    console.log('Operand '+i, operand);
}

console.log('operator', operator, operandsCount);