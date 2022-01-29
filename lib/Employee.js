// module.exports = function(name, 
//function Employee
    class Employee {
        constructor(name, id, email) {
          this.types = ['name', 'id', 'email'];
          // right side is input into constructor
          // left side is assigning the passed in value to the object properties
          this.name = name;
          this.id = id;
          this.email = email;
        }
    }
          
module.exports = Employee;
// employee {
//     name: "hank";
//     id: "001";
//     email "hank@hank.hank";

// }
// //constructor function creates an object and retuns in
// const hank = new Employee("hank", "001", "hank@hank.hank");




