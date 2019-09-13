function ClickableElement(elem){
    elem.classList.add(ClickableElement.BASE_CLASS);

    elem.addEventListener('click', this.onElemClick);



};


ClickableElement.BASE_CLASS = 'clickable-element'
ClickableElement.CLICKED_CLASS = 'clickable-element-clicked'


ClickableElement.prototype.onElemClick = function(){
    this.classList.toggle(ClickableElement.CLICKED_CLASS)
};


const myElem = new ClickableElement(
    document.getElementById('my div')
);