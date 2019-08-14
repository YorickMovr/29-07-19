function replace(string, char, replacer) {
    return string.split(char).join(replacer);
  };

  let str = replace('hello world!', 'l', 'z');
  alert(str);