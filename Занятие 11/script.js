function Student(name, marks){

    this.name = name;
    this.marks = marks;
    

    // this.averegeMarkForSt = function(){

    // let total = 0;
    //     for (let i =0; i< this.marks.length; i++){
    //         total += this.marks[i];
    //         };

    //     let avg = total / this.marks.length;
    //     console.log(`${name}` + '`s ' + 'avarage mark is ' + avg)
    //     }
};     

Student.prototype.averegeMarkForSt = function(){
    return this.marks.reduce((prev, mark) => 
    prev + mark,0)/this.marks.length;
}




const st1 =new Student('Student 1', [10,9,8,0,10]);

const students = [ 
    new Student('Student 1', [10,9,8,0,10]), // имя, оценки
    new Student('Student 12', [10,0,8,0,3,4])
   ];
