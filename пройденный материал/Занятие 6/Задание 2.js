let value = 0;

// let a = confirm('how about to play');
if (confirm('Let\'s Play a Game')){
    lot();
}

function lot(){
    let num = prompt('Enter a number from 0 to 10.');
    let randNum = randomIntFromInterval(0,10)
    while(num < 0 || num > 10 || isNaN(num)){
        alert('Your value is not valid! Please try again.');
        lot();
    };
    if(num == randNum){
        value +=10;
    };
    
    alert('Your num is  ' + num + '  and my num is ' + randNum)
    if (confirm('Your result is ' + value + ' points. ' + 'Do you want to try again?')){
        lot ();
    };
    
};




function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}













// let value = 0;
// function lot (){
//     let num = prompt('Enter your number (0-10)')
//     while(num<0 || num>10 ){
//         alert('Please, enter correct number 0-10')
//     }
    
//     if(num == randomIntFromInterval(0,10)){
//         value +=10;
//     }else{
//         if (confirm('do u wanna continue?')){
//         lot();
//         }else{
//             break;
//         }
//     }
// }






