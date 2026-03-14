// const student = {
//     name: "John",
//     marks: 90,
//     printMarks: function () {
//         console.log("marks are:", this.marks)
//     }
// }

// console.log(student.name)
// student.printMarks()


// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%")
//     }
// }

// const alice = {
//     salary: 40000,
//     calcTax() {
//         console.log("tax rate is 20%")
//     }
// }

// alice.__proto__ = employee


// class ToyotaCar {
//     constructor(brand, mileage) {
//         console.log("constructor called")
//         this.brandName = brand,
//             this.mileage = mileage
//     }
//     start() {
//         console.log("car started")
//     }
//     stop() {
//         console.log("car stopped")
//     }
// setBrand(brand) {
//     this.brandName = brand
// }
// }

// let fortuner = new ToyotaCar("osman cars", 10)
// console.log(fortuner)
// fortuner.setBrand("osman cars")
// let lexus = new ToyotaCar("lexus cars", 40)
// console.log(lexus)
// lexus.setBrand("lexus cars")
// console.log(fortuner)
// console.log(lexus)



// class parent {
//     hello() {
//         console.log("hello from parent")
//     }
// }

// class Child extends parent {

// }
// let obj = new Child()


// Objects & Object Literals

// const user = {
//   name: "Usman",
//   age: 22,
//   greet() {
//     console.log(`Hi, I'm ${this.name}`);
//   },
//   greet2(){
//     console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
//   }
// };

// console.log(user.greet());
// console.log(user.greet2());
// console.log(user);
// console.log(this)



// Constructor Functions

// function user (name, age) {
//     this.name = name,
//     this.age = age,
//     this.permission = "admin",
//     this.greet = function() {
//         console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old. My permission level is ${this.permission}.`);
//     }
// }

// const user1 = new user("usman", 22);
// console.log(user1);
// console.log(user1.greet());


// Classes (Modern OOP in JS)

// class User {
//     constructor(name, age, permission) {
//         this.name = name,
//         this.age = age,
//         this.permission = permission
//     }
//     greet() {
//         console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old. My permission level is ${this.permission}.`);
//     }
// }
// const user1 = new User("Usman", 22, "admin");
// console.log(user1);
// console.log(user1.greet());



// Encapsulation

class bankAccount {
    #balance = 0; // private property

    constructor(balance) {
        this.#balance= balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
 }

 const acc = new bankAccount(1000);
 console.log(acc.getBalance()) // 1000
 acc.deposit(500);
 console.log(acc.getBalance()) // 1500
 acc.withdraw(200);
 console.log(acc.getBalance()) // 1300