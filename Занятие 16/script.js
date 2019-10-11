// const prom =  fetch('https://jsonplaceholder.typicode.com/photos?_limit=50');


//--------------------------------------------------
let requestURL = 'https://jsonplaceholder.typicode.com/photos?_limit=50';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send()

request.onload = function(){
    let arr = request.response;
    // console.log(arr.length)
    addAllEl(arr);
} 




function addAllEl(arr){
for(let i =0; i< arr.length; i++){

    let elem = document.createElement('a');
    let img = document.createElement('img');

    img.setAttribute('src', arr[i].thumbnailUrl)
    img.classList.add('img')
    elem.setAttribute('href', arr[i].url)
    elem.appendChild(img)
    document.getElementById('gallery').appendChild(elem)
    }   
}
