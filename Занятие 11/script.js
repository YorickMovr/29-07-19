

function Student(name, marks){

    this.name = name;
    this.marks = marks;
};     

Student.prototype.averegeMarkForSt = function(){
    return this.marks.reduce((prev, mark) => 
    prev + mark,0)/this.marks.length;
}






const st1 =new Student('Student 1', [10,9,8,0,10]);

const studentsGroup = [ 
    new Student('Student 1', [10,9,8,0,10]), // имя, оценки
    new Student('Student 12', [10,0,8,0,3,4])
   ];

// function averegeMarkForGroup (students){
// let studentsMarks = []
// for(let i=0; students.length < i; i++){
//     studentsMarks.unshift(this.students.averegeMarkForSt())
//     console.log(studentsMarks);

// }
//     //return studentsMarks;
// }
// function avg(students){
// students.forEach(fuck);

// }

// function ck (students){
// alert(students[0].averegeMarkForSt());
// }

