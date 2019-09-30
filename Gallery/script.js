'use strict';


class Gallery  {
    constructor(slides){
        this.slides = slides;
        this.doSlider();
    };
    
    get images (){
        return this.slides.children;
    }
    
}

Gallery.prototype.doSlider = function(){
    let slides = this.images;
    let arrOfSlides=[];
    for(let i=0; i< slides.length;i++){
        arrOfSlides[i]=slides[i].firstElementChild.src;
        slides[i].firstElementChild.remove();
    }

    let step = 0;
    let offset = 0;

    function draw(){
        let img = document.createElement('img');
        img.src = arrOfSlides[step];
        img.classList.add('slide');
        document.querySelector('#slides').appendChild(img);
        step++;
    }
    draw();draw()
}



const myGallery = new Gallery(
    document.getElementById('container')
    )