
function makeClone(obj) {
    let clone = {}; 
    for (let prop in obj) { 
        if ("object"===typeof obj[prop]) 
        clone[prop] = makeClone(obj[prop]); 
        else
        clone[prop] = obj[prop]; 
    }
   return clone;
  }



const obj = {
    name: 'Alex', 
    age: 33, 
    adress: { 
        country: 'UA', 
        city: 'Dnipro'}
    };




let objCopy = makeClone(obj);

for (let key in objCopy) {
    alert( "Ключ: " + key + " значение: " + objCopy[key] );
}


