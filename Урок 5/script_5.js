// function progresion(value){
//     let progresionResult = 0;
//     for(let i=value; i>0;i--){
//         progresionResult +=i;
//     }

// }


function progresion(value){
    return value == 1? value : value + progresion(value-1)
}

const result = progresion(5);//15
console.log(result);