//constructer function for Employee
//Other employees inherit this function
class Employee {
  constructor(name, id, email) {
    this.types = ["name", "id", "email"];
    // right side is input into constructor
    // left side is assigning the passed in value to the object properties
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
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
