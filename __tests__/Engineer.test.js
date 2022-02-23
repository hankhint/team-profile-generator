//link to file with methods that are being tested
const Engineer = require("../lib/Engineer");

// extend employee to Engineer
test("creates engineer", () => {
  const engineer = new Engineer("Lobby", 20, "Lobby@cry.com", "hastwo");

  expect(engineer.name).toBe("Lobby");
  expect(engineer.id).toBe(20);
  expect(engineer.email).toBe("Lobby@cry.com");
  expect(engineer.github).toBe("hastwo");
});

// github // GitHub username
test("gets Engineer github username", () => {
  const engineer = new Engineer("Lobby", 20, "Lobby@cry.com", "hastwo");

  expect(engineer.getGithub()).toBe("hastwo");
});

// getRole() // Overridden to return 'Engineer'
test("gets Engineer Role", () => {
  const engineer = new Engineer("Lobby", 20, "Lobby@cry.com", "hastwo");

  expect(engineer.getRole()).toBe("Engineer");
});
