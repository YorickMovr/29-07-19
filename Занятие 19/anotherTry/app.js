const requestURL = 'http://jsonplaceholder.typicode.com/photos';
const FULL_IMAGE_BACKGROUND_CLASS = 'full-image-backgroud';
const FULL_IMAGE_VISIBLE_CLASS = 'full-image-visible';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send()


request.onload = function () {
    let arr = request.response;
    usingArr = makeMoreArrs(arr)
    sessionStorage.setItem('position', 0);

    showPics(usingArr)
    showFull(usingArr)
    hideFull(usingArr)
    goToPage()
}

function makeMoreArrs(arr){
    sessionStorage.setItem('position', 0);

    let position = sessionStorage.getItem('position');
    // let k = 1;
    // for(i=0;i<arr.length;i++){
        function splitToChunks(array, parts ) {
            let result = [];
            for (let i = parts; i > 0; i--) {
                result.push(array.splice(0, Math.ceil(array.length / i)));
            }
            return result;
        }
    return(splitToChunks(arr,50)[position])
}

function goToPage(){
    
    document.getElementById('btn').addEventListener('click',()=>{
    position = document.getElementById('position').value
    sessionStorage.setItem('position', position)
    console.log(position)
    // location.reload()
    })
}

function showPics(arr){
    for(i in arr){
    let elem = document.createElement('a');
    let img = document.createElement('img');
    img.setAttribute('src', arr[i].thumbnailUrl);
    img.classList.add('img');
    img.id = arr[i].id
    elem.appendChild(img);
    document.getElementById('gallery').appendChild(elem);
    }
};

function showFull(arr){
    document.querySelectorAll('img').forEach(element => {
        element.addEventListener('click', ()=>{
            document.getElementById('fullImage').setAttribute('src', null)
            document.getElementById('fullImage').setAttribute('src', arr[--element.id].url)
            container.classList.add(FULL_IMAGE_VISIBLE_CLASS);
            // if(container.classList.contains(FULL_IMAGE_VISIBLE_CLASS))
            console.log(element.id)
            
    })
    })
}
function hideFull(arr){
    // document.getElementsById('back').addEventListener('click',()=>{
    //     // document.getElementById('fullImage').setAttribute('src', null);
    //     if(container.classList.contains(FULL_IMAGE_VISIBLE_CLASS||FULL_IMAGE_BACKGROUND_CLASS))
    //     container.classList.remove(FULL_IMAGE_VISIBLE_CLASS, FULL_IMAGE_BACKGROUND_CLASS);
    // } )
    document.getElementById('back').addEventListener('click', ()=>{
        if(container.classList.contains(FULL_IMAGE_VISIBLE_CLASS)){
            container.classList.remove(FULL_IMAGE_VISIBLE_CLASS)
        }
    })
}
        
