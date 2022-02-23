const Employee = require('../lib/Employee');

//creates a new employee object to test name is a string, id number is a number, and email is a string
test('creates an Employee object', () => {
    const employee = new Employee('Tom', 200, 'Tom@mail.com')

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

//tests getName() method
test('gets employee name', () => {
    const employee = new Employee('Hank', 2000, 'hankhint@gmail.com' )
    expect(employee.getName()).toEqual(expect.any(String));
})

// tests getId() method
test('gets employee Id', () => {
    const employee = new Employee('Hank', 2000, 'hankhint@gmail.com' )
    expect(employee.getId()).toEqual(expect.any(Number));
})

// tests getEmail() method
test('gets employee email', () => {
    const employee = new Employee('Hank', 2000, 'hankhint@gmail.com' )
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})

// getRole() // Returns 'Employee'
test('gets Employee role', () => {
    const employee = new Employee('Hank', 2000, 'hankhint@gmail.com' )
    expect(employee.getRole()).toBe('Employee');
})