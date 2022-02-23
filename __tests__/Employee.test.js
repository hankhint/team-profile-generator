const Employee = require('../lib/Employee');

//creates a new employee object to test name, id number, and email
test('creates an Employee object', () => {
    const employee = new Employee('Tom', '200', 'Tom@mail.com')

    expect(employee.name).toEqual(expect.any(Number));
    expect(employee.id).toEqual);
    expect(employee.email).toBe('Tom@mail.com')
})
// name

// id

// email

Te

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'