function createCalculator(value = 0){
    return {
        add: (a)=> value +=a,
        sub: (a)=> value -=a,
        div: (a)=> value /=a,
        mult: (a)=> value*=a,
        reset: ()=> value =0,
        set: (a)=> value = a,
        value: ()=> value
    }
}



const calculator = createCalculator(10); 
calculator.add(45) // возвращает 55 
calculator.sub(45) // возвращает 10 
calculator.div(5) // возвращает 2 
calculator.mult(5) // возвращает 10 
calculator.set(100) // устанавливает базовое значение в 100 
calculator.mult(5) // возвращает 500
