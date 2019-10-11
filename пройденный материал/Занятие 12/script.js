let toppingTemp = {
        calories:0,
        price:0
    }
function Hamburger (size, stuffing){
    this.size = size;
    this.stuffing = stuffing;
    this.topping = toppingTemp;
};


Hamburger.SIZE_SMALL = {    
        calories : 20,
        price : 50
    }
Hamburger.SIZE_LARGE = {
        calories : 40,
        price : 100
    }
Hamburger.STUFFING_CHEESE = {
        calories: 20,
        price: 10
    }
Hamburger.STUFFING_SALAD={
        calories: 5,
        price : 20
    }
Hamburger.STUFFING_POTATO={
        calories: 10,
        price: 15
    }
Hamburger.TOPPING_SAUSE={
        calories: 5,
        price: 20
    }
Hamburger.TOPPING_SPICE={
        calories: 0,
        price: 15
    }



Hamburger.prototype.calculateCalories = function(){
    let caloriesSum = this.size.calories + this.stuffing.calories + toppingTemp.calories;
    console.log(`Your burger's calories is ${caloriesSum}`);
}


Hamburger.prototype.calculatePrice = function(){
    let priceSum = this.size.price + this.stuffing.price + toppingTemp.price;
    console.log(`Your burger's price is ${priceSum}`)
}


Hamburger.prototype.addTopping = function(topping){
    this.calories = topping.calories;
    this.price = topping.price;
    toppingTemp.calories += topping.calories;
    toppingTemp.price += topping.price;
  
    console.log(`${this.calories} ${this.price}`)
}
// const hamburger = new Hamburger(Hamburger.SIZE_SMALL,Hamburger.STUFFING_CHEESE);
