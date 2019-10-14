const requestURL = 'http://jsonplaceholder.typicode.com/users/';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send()

request.onload = function(){
    let arr = request.response;
    createNamesList(arr);
    showInformation(arr, 0);
    showContactsInformation(arr)

} 


function createNamesList(arr){
    // console.log(arr[0])
    arr.forEach(item => {
        let elem = document.createElement('a');
        let n = document.createTextNode(name);
        name = item.name;
        elem.appendChild(n);
        elem.id= item.id - 1;

        document.getElementById('names').appendChild(elem)
    });
}

function showContactsInformation(arr){
    document.querySelector('#names').addEventListener('click', function(e){ 
        let id = e.target.id; 
        removeContent();
        showInformation(arr, id)
    });
}

 

function showInformation(arr, id){
    for( key in arr[id]){
        const value = arr[id][key];

        if(typeof value==='object'){
            printSomeInfo(key+': ')
            for(key in value){
                const value1 = value[key];

                if(typeof value1 ==='object'){
                    printSomeInfo('  '+key+': ')
                    for(key in value1){
                        printSomeInfo('   '+key+': '+ value1[key])
                    }
                }else{printSomeInfo('  '+key+': '+ value1)}
                
            }
        }else{printSomeInfo(key+ ': '+value)}

        
    }  
}

function printSomeInfo(text){
    let li = document.createElement('li');
    let info = document.getElementById('info');
    let t = document.createTextNode(text);
    li.appendChild(t)
    info.appendChild(li)
}

function removeContent(){
    let info = document.getElementById('info');
    while (info.firstChild) {
        info.removeChild(info.firstChild);
    }
}

