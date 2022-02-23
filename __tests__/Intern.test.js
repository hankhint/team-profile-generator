//link to file with methods that are being tested
const Intern = require('../lib/Intern');


//link to file with methods that are being tested
// extend employee to Intern
test('creates intern', () => {
  const intern = new Intern("Mobby", 3000, "Mobby@cry.com", "havad");

  expect(intern.name).toBe("Mobby");
  expect(intern.id).toBe(3000);
  expect(intern.email).toBe("Mobby@cry.com");
  expect(intern.school).toBe("havad");
});

// getSchool() returns "havad"
test('gets intern school', () => {
  const intern = new Intern('Mobby', 3000, 'Mobby@cry.com', 'havad');

  expect(intern.getSchool()).toBe('havad');
});

// getRole() // Overridden to return 'Intern'
test('gets Intern Role', () => {
  const intern = new Intern('Mobby', 3000, 'Mobby@cry.com', 'havad');

  expect(intern.getRole()).toBe('Intern');
});
