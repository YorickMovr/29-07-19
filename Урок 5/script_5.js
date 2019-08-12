function getOperand(operandIndex){
    let operand = +prompt('operand ' + operandIndex, "2")

    return isNaN(operand) ? getOperand(operandIndex) : operand;
}

getOperand(1);