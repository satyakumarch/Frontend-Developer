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
    //class constructor to initalize the "name and section" properties
    constructor(name, section) {
        this.name = name;      
        this.section = section; 
    }
    
    stu() {
        console.log(`My name is ${this.name} and my section name is ${this.section}`);
    }
}



//Creating an instance of the Student class
let personal = new Student('Satya', 'k22ac');

// Calling the stu method
personal.stu();

class Student {
    //class constructor to initalize the "name and section" properties
    constructor(name, section) {
        const stuname = name;      
        const stusection = section; 
    
    
    this.Student=function() {
        console.log(`My name is ${this.name} and my section name is ${this.section}`);
    };
}
}
// Creating an instance of the Student class
let personal = new Student('Satya', 'k22ac');

//Calling the stu method
console.log(Student());















// class teacher{
//     constructor(name,address,subTeach,gender){
//         this.name=name;
//         this.address=address;
//         this.subTeach=subTeach;
//         this.gender=gender;
        
//     }
//     teach(){
//         console.log(`the teacher name is : ${this.name} \n the address of the teacher is : ${this.address} \nthe subteac is : ${this.subTeach} \n the gender is :${this.gender}`);
//     }
    
// };
// let stu=new teacher("mukesh","Delhi","English","male");

// stu.teach();

// function Tuesday(actor,movie,director,release) {
//    return{
//     myactor:actor,
//     mymovie:movie,
//     mydirector:director,
//     myrelease:release,
//     Tuesday:function(){
//         return `The actor's name is: ${this.myactor}\nThe movie name is: ${this.mymovie} \n the director of the movie is : ${this.mydirector} \n the time to release is : ${this.myrelease}`;
//     }
//    };
// }

// Creating an instance of the Film class
// let week = new Tuesday("Sushant Singh Rajput", "Chhichhore","manoj sharma"," 2012");
// let week1 = new Tuesday("mahendra singh", "cricket","ram mohan"," 2014");


// console.log(week.Tuesday());
// console.log("*******************************************************");
// console.log(week1.Tuesday());





// class film {
//     constructor(name, movie) {
//         this.name = name;
//         this.movie = movie;
//         return name, movie;
//     }
// }

// // Calling the function
// let result = new  film("amar","Geo");
// console.log(result); 

////////////////////////////array///////////
// const fruits=["mango","Gova","Banana","Apple"];
// console.log(fruits);
// for (const eat of fruits) {
//     console.log(eat);
// }

// const fruits=["mango","Gova","Banana","Apple"];

// for (const event of fruits) {
//     console.log('Foods:'+event);
// }


// const item1=["itly","dosa"];
// const item2=item1.slice();
// item1.push("sambar");
// console.log(item1);
// console.log(item2);

//spread operator
// const item1=["itly","dosa"];
// const item2=[...item1];
// item1.push("sambarr","somasa");
// console.log(item1);
// console.log(item2);


// const student3=["dosa","vada"];
// const student4=[...student3,"pongal"];

// console.log('student3:');
// for (const value of student3) {
//     console.log(value);
    
// }
// console.log("student4");
// for (const value of student4) {
//     console.log(value);
    
// }



//////////REST OPERATOR ///////////////////////
// const items=(item1,item2,item3)=>{
//     return [item1,item2,item3];
// }
// console.log(items(1,2,3,4,5,6));

const items=(...items)=>{
    return items.reduce((sum,current)=>sum+current,0);
}
console.log(items(1,2,3,4,5,6,7,8));


/////ARROW



