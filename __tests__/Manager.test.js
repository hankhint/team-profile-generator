//link to file with methods that are being tested
const Manager = require('../lib/Manager');

//extend employee to create manager
test('creates manager', () => {
    const manager = new Manager('Sobby', 420, 'Sobby@cry.com', 666);

    expect(manager.name).toBe('Sobby');
    expect(manager.id).toBe(420);
    expect(manager.email).toBe('Sobby@cry.com');
    expect(manager.officeNumber).toBe(666);
});


//officeNumber
test('tests Manager office number', () => {
    const manager = new Manager('Sobby', 420, 'Sobby@cry.com', 666);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// getRole() // Overridden to return 'Manager'
test('gets Manager Role', () => {
    const manager = new Manager('Sobby', 420, 'Sobby@cry.com', 666);
  
    expect(manager.getRole()).toBe('Manager');
  });