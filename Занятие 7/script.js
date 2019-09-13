let arr = [3, 4, 5,6,7,8,9,0];

function getMinAndMax(numbers){
    max = Math.max.apply(null, numbers);
    min = Math.min.apply(null, numbers);
    alert(max)
}
