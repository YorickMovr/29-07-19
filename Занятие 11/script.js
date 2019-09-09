function Animal(name){
    this.name = name;

         this.eat = function(){ console.log(`${this.name} is eaing`)
};
};

function Cat(name){
    this.name = name;
}

Cat.prototype = new Animal;

const dino = new Animal('dinozaur');
const raptor = new Animal('Raptor');

const kitty = new Cat('Kitty');
