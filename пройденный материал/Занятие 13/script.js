'use strict';


class Gallery  {
    constructor(slides){
        this.slides = slides;
        this.currentSlide = 0;
        this.doSlider();
    };
    
    get images (){
        let arr = [];
        return arr = this.slides.children;
    }
    
}

Gallery.prototype.doSlider = function(){
   window.number = 0;
    let imageCount = this.images.length;
    
    function image(num){
        if(num == 1){
            if(num < imageCount - 1){
                number++;
                document.getElementById('images').src = this.images[number];
                document.getElementById('num_img').innerHTML = number + 1 + '/' + imageCount;
            }
        }else{
            if(number>0){
                number--;
                document.getElementById('images').src = this.images[number];
                document.getElementById('num_img').innerHTML = number + 1 + '/' + imageCount;
            }
        }
    }
    function showBtn(){
        if(number!=0) document.getElementById('left').style.display = 'block';
        if(number != imageCount-1)    document.getElementById('right').style.display = 'block';
    }
    function noShowBtn(){
        document.getElementById('left').style.display = 'none';
        document.getElementById('right').style.display = 'none';
    }
    document.write('<img id = "images" src= "'+ this.images[0] + '"> ')

}





// Gallery.prototype.showNext = function(){
//     this.slides[currentSlide].className = 'slide';
//     currentSlide = (currentSlide + 1) % this.slides.children.length;
//     this.slides[currentSlide].className = 'slide showing';
// }

const myGallery = new Gallery(
                        document.getElementById('container')
                        )

/* Опциональное задание - реализовать такие методы */

// myGallery.show(2);
// myGallery.next();
// myGallery.prev();

