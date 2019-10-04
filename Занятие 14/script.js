const ACCORDEON_CONTAINER_CLASS = 'my-accordeon-container';
const ACCORDEON_TITLE_CLASS = 'title';
const ACCORDEON_ACTIVE_CLASS = 'active';

class Accordeon{
    constructor(el){
        this.el =el;

        this.bindClasses();
        this.bindEventListeners()

        
    };

    bindClasses(){
        this.el.classList.add(ACCORDEON_CONTAINER_CLASS);
    };

    bindEventListeners(){
        this.el.addEventListener('click', this.onElementClick)
    };

    onElementClick(e){
        console.log('clicked', e.target)
        if(e.target.classList.contains(ACCORDEON_TITLE_CLASS)){
            e.target.parentElement.classList.toggle(ACCORDEON_ACTIVE_CLASS)
        }
    }
}

const acc = new Accordeon(
    document.getElementById('container')
)