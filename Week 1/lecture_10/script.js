// objects: Its a unique entity that contains some properties and methods.
// can be created in following ways:
// 1. Object Literal
// 2. Object Constructor
// 3. Object.create();

// classes: Classes are blurprints of an Object.apply


// Abstraction: It means displaying only essential information and hiding the details.Abstraction


// Encapsulation: The process of wrapping properties and functions within a single unit is called encapsulation.






// let person = {
//     firstName: "Shantanu",
//     lastName: "Shubham",

//     getFullName: function() {
//         return `The name of the person is ${this.firstName} ${this.lastName}`;
//     },

//     phonenumber: {
//         mobile: "12345",
//         landline: "6789"
//     }
// };

// console.log(person.getFullName()); 
// console.log(person.phonenumber.landline); 

// function person(firstName, lastName){
//     this.firstName=firstName;
//     this.lastName=lastName;

// }
// let person1=new person("Shantanu","Shubham");
// let person2=new person("Anurag","Mishra");

// console.log(person1.firstName);
// console.log(`${person2.firstName} ${person2.lastName}`);

// const coder={
//     isStudying:false,
//     printIntroduction:function(){
//         console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
//     },
// };
// const me=Object.create(coder);
// me.name="Shantanu Shubham";
// me.isStudying=true;
// me.printIntroduction();

// class Vehicle{
//     constructor(name,maker,engine){
//         this.name=name;
//         this.maker=maker;
//         this.engine=engine;
//     }

//     getdetails(){
//         return `the name of the vehicle is ${this.name}`;
//     }
// }

// let v1=new Vehicle("Creta","Hyundai","2500cc");
// let v2=new Vehicle("05","Audi","3000cc");

// console.log(v1.name);
// console.log(v2.maker);
// console.log(v1.getdetails());



// function Vehicle(name,maker,engine){
//     this.name=name;
//     this.maker=maker;
//     this.engine=engine;
// };

// Vehicle.prototype.getDetails = function(){
//     return "The name of the vehicle is $(this.name)";
//   }

//   let v1 = new Vehicle("Creta","Hyundai","2500cc");
// let v2 = new Vehicle("Q5","Audi","3000cc");

// console.log(v1.name);
// console.log(v2.maker);
// console.log(v1.getDetails());



// class Person{
//     constructor(name,id){
//         this.name=name;
//         this.id= id;
//     }
//     addAddress(newAddress){
//         this.address=newAddress;
//     }
//     getDetails(){
//         console.log(`Name is : ${this.name}, and address is: ${this.address}`);
//     }
// }
// let person1 = new  Person("Shantanu", 24);
// person1.addAddress("Kolkata");
// person1.getDetails();


// class Person{
//     constructor(firstName, lastName){
//       this.firstName = firstName;
//       this.lastName = lastName;
   
  
// let getDetails_NoAccess = function(){
//     return "The first name is: $(this.firstName) and last name is: $(this.lastName)";
// };
  
  
//     this.getDetails_Acess = function(){
//       return "The first name is: $(this.firstName) and last name is: $(this.lastName)";
//       };
//     } 
//   }
// let person1 = new  Person("Shantanu", 24);

// console.log(person1.firstName);
// console.log(person1.getDetails_NoAccess());
// console.log(person1.getDetails_Access());
  

class Person{
    constructor(firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName;
   
  
    getDetails_Acess = function(){
      return "The first name is: $(this.firstName) and last name is: $(this.lastName)";
      };
    } 
  }
  
  class Student extends Person{
    constructor(firstName, lastName, rollNumber){
      super(firstName,lastName);
      this.rollNumber = rollNumber;
  
    getDetails_Acess = function(){
      return "The first name is: $(this.firstName) and last name is: $(this.lastName) and the roll number is: $(this.rollNumber)";
      };
    }
  }
  let person1 = new  Person("Shantanu", "Shubham");
  
  console.log(perosn1.firstName);
  console.log(person1.getDetails_NoAccess());
  
  let studemt1 = new Student("Anurag","Mishra", 20);
  console.log(student1.getDetails());