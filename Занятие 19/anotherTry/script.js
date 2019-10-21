const GALLERY_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=50';
const fullImage = document.getElementById('fullImage');
// const galleryItemTemplate = document.getElementById('galleryItemTemplate').innerHTML;



// container.addEventListener('click', onContainerClick);



fetch(GALLERY_URL)
    .then((resp) => {
        resp.json().then(construct)
                        
    });

function showPics(list){
    for(i in list){
    let elem = document.createElement('a');
    let img = document.createElement('img');
    img.setAttribute('src', list[i].thumbnailUrl);
    img.classList.add('img');
    img.id = list[i].id
    elem.appendChild(img);
    document.getElementById('gallery').appendChild(elem);
    }
    // console.log(list)
};

function construct(list){
    
    function dosmth(list){
        console.log(list[1])
    }
    showPics(list)
}

// function onContainerClick(list){
//     document.body.onclick = function(e){
//         t=event.target||event.srcElement;
//         console.log(t.id)
//     }

// }

    window.onload = function() {
        document.body.onclick = function(event) {
            t=event.target||event.srcElement; 
            switch(true){
                case t.parentElement.parentElement.id=='gallery':
                    // console.log(t.id);
                    id = t.id;
                    showID();
                    break;
                case wdw:wd//show ful;
            }
            
        }
    }
function showID(id){
    console.log(id)
}