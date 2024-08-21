// const car = {
//     name: 'hyundai',
//     model: 'vema',
//     asg() {
//         console.log("My car model is:", this.name);
//     }
// };

// // Calling the function
// car.asg();


// const student={
//     name:'ram kumar chaudhary',
//     section:'k22ac',
//     rollNo:12,
//     DOB:12-20-2000,
//     place:'jalandar',
//     gender:'male',
//     asg(){
//         console.log("The name of the student is:",student.name);
//         console.log("The name of the student is:",student.rollNo);
//         console.log("The name of the student is:",this.DOB);
//         console.log("The name of the student is:",this.place);
//         console.log("The name of the student is:",this.gender);


//     }
    
// };
// student.asg();


//////////////////class////////////////
class Student {
    constructor(name, section) {
        this.name = name;      // Assign the parameter value to the name property
        this.section = section; // Assign the parameter value to the section property
    }
    
    stu() {
        console.log(`My name is ${this.name} and my section name is ${this.section}`);
    }
}

// Creating an instance of the Student class
let personal = new Student('Satya', 'k22ac');

// Calling the stu method
personal.stu();
