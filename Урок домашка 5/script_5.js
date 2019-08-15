let output = '';
function replaceAll(string, char, replacer) {
    for (let i = 0; i < string.length; i++){
        let outputSign = string[i];
        if (outputSign == 'l'){
            output += 'z';
        }else {
            output += outputSign;
        };
    };
    
    do {
        alert ('Please check the values ​​of char and replacer, they should consist only one simbol each')
    } while(char.length > 1 || replacer.length > 1);
    // return string.split(char).join(replacer); 
    return output;

  };

  let str = replaceAll('hello world!', 'l', 'z');
  
  alert(str);