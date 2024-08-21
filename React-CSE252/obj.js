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
// class Student {
//     //class constructor to initalize the "name and section" properties
//     constructor(name, section) {
//         this.name = name;      
//         this.section = section; 
//     }
    
//     stu() {
//         console.log(`My name is ${this.name} and my section name is ${this.section}`);
//     }
// }

// // Creating an instance of the Student class
// let personal = new Student('Satya', 'k22ac');

// // Calling the stu method
// personal.stu();


class teacher{
    constructor(name,address,subTeach,gender){
        this.name=name;
        this.address=address;
        this.subTeach=subTeach;
        this.gender=gender;
        
    }
    teach(){
        console.log(`the teacher name is : ${this.name} \n the address of the teacher is : ${this.address} \nthe subteac is : ${this.subTeach} \n the gender is :${this.gender}`);
    }
    
};
let stu=new teacher("mukesh","Delhi","English","male");

stu.teach();