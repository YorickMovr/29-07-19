function Student(name, marks){
    this.name = name;

    this.marks = marks;

    this.eat = function(){ console.log( this.name + '  is eaing')}

    this.averegeMark = function(){
        console.log(this.marks)
        
    }
        
};

const st1 =new Student('Student 1', [10,9,8,0,10]);

const students = [ 
    new Student('Student 1', [10,9,8,0,10]), // имя, оценки
    new Student('Student 12', [10,0,8,0,3,4])
   ];


function avgMarks(name ,marks){
    let total = 0;
        for (let i =0; i< marks.length; i++){
            total += marks[i];
            };

        let avg = total / marks.length;
        console.log(name + '`s ' + '  avarage mark is ' + avg)
};



