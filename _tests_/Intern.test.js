const Intern = require("../lib/Intern.js");
const Employee = require("../lib/Employee.js");

// jest.mock("../lib/Employee.js");
// jest.mock("../lib/Intern.js");

mockData = {
  name: "Dave",
  id: "13",
  email: "dave@testers.com",
  school: "Whoville University",
};

console.log(mockData);

test("create intern object", () => {
  const intern = new Intern(mockData);

  expect(intern.school).toEqual(expect.any(String));
});

test("gets Intern name", () => {
  const intern = new Intern(mockData);

  expect(intern.getName()).toEqual(expect.stringContaining(mockData.name));
});

test("gets Intern Id", () => {
  const intern = new Intern(mockData);

  expect(intern.getId()).toEqual(expect.stringContaining(mockData.id));
});

test("gets school", () => {
  const intern = new Intern(mockData);

  expect(intern.getSchool()).toEqual(expect.stringContaining(mockData.school));
});

test("gets Intern Email", () => {
  const intern = new Intern(mockData);

  expect(intern.getEmail()).toEqual(expect.stringContaining(mockData.email));
});

test("gets Intern Object", () => {
  //   const intern = new Intern(name = "Dave", id = "13", email = "dave@testers.com", "2405");

  expect(
    new Intern(
      (name = "Dave"),
      (id = "13"),
      (email = "dave@testers.com"),
      "2405"
    )
  ).toBeInstanceOf(Employee);
});

test("gets icon", () => {
  const intern = new Intern(mockData);

  expect(intern.getIcon()).toEqual(expect.any(String));
});

test("gets role", () => {
  const intern = new Intern(mockData);

  expect(intern.getRole()).toEqual("Intern");
});
