let num = prompt('Чтобы узнать количество четных/нечетных цифр, пожалуйста введите число');

while(isNaN(num)){
    alert('Вы ввели не число. Попробуйте еще раз.')
};

let odd = 0, even = 0;

for (i=0; i < num.length; i++){
    if ((num.charAt(i) - '0') % 2 == 0) even++;
    else odd++;
}

alert ("нечетных: "  + odd + " четных: " + even);

