function createCalculator(value = 0){
    function add(a){
        return value +=a;
    };
};

const calculator = createCalculator(10);

alert (add(5))
