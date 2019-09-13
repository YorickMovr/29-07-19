function Animal(name, speed){
    this.name = name;
    this.speed = speed;

    ANIMAL.HIGH_SPEED = '100%';

    ANIMAL.LOW_SPEED = '10%';
}


Animal.prototype.run = function(){
    console.log(`${this.name} is running in ${this.speed} speed`);
};



function Cat(name, speed){
    this.name = name;
    this.speed = speed;
}

Cat.prototype = new Animal();
Cat.HIGH_SPEED = 'High'

const raptor = new Animal('Raptor',Animal.HIGH_SPEED);
const dino1 = new Animal('Dinozaur', Animal.LOW_SPEED);
const raptor1 = new Animal('Raptor',Animal.HIGH_SPEED);
const dino1 = new Animal('Dinozaur', Animal.LOW_SPEED);
const dino = new Animal('Dinozaur', Animal.LOW_SPEED);
const raptor1 = new Animal('Raptor',Animal.HIGH_SPEED);


const barsik = new Cat( 'Barsik', CAT.HIGH_SPEED)
