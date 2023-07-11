

function Person(name, age){
    this.name = name;
    this.age = age;
    this.printAge=function(){
        console.log(`My age is ${this.age}`)
    }
}

function Employee(name, age, companyId){
    Person.call(this, name, age)
    this.companyId = companyId;
    this.printMessage=function(){
        console.log(`${this.name} is working in ${this.companyId}`);
    }
}

const e1= new Employee("Yogesh", 29, "my company");

e1.printMessage();
e1.printAge();


//console.log(Person.prototype);
//Employee.prototype = Object.create(Person.prototype);
//Employee.prototype.constructor = Employee;
