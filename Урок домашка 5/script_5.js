function replace(string, char, replacer) {
    while(char.length > 1 || replacer.length > 1){
        alert ('Please check the values ​​of char and replacer, they should consist only one simbol each')
    };
    return string.split(char).join(replacer); 
  };

  let str = replace('hello world!', 'll', 'z');
  alert(str);