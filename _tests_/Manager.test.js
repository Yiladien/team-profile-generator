const Manager = require("../lib/Manager.js");
const Employee = require("../lib/Employee.js");

// jest.mock("../lib/Employee.js");
// jest.mock("../lib/Manager.js");

mockData = {
  name: "Dave",
  id: "13",
  email: "dave@testers.com",
  officeNumber: "2504",
};

console.log(mockData);

test("create manager object", () => {
  const manager = new Manager(mockData);

  expect(Number(manager.officeNumber)).toEqual(expect.any(Number));
});

test("gets Manager name", () => {
  const manager = new Manager(mockData);

  expect(manager.getName()).toEqual(mockData.name);
});

test("gets Manager Id", () => {
  const manager = new Manager(mockData);

  expect(manager.getId()).toEqual(expect.stringContaining(mockData.id));
});

test("gets Manager Office Number", () => {
  const manager = new Manager(mockData);

  expect(manager.getOfficeNumber()).toEqual(
    expect.stringContaining(mockData.officeNumber)
  );
});

test("gets Manager Email", () => {
  const manager = new Manager(mockData);

  expect(manager.getEmail()).toEqual(expect.stringContaining(mockData.email));
});

test("gets Manager Object", () => {
  //   const manager = new Manager(name = "Dave", id = "13", email = "dave@testers.com", "2405");

  expect(
    new Manager(
      (name = "Dave"),
      (id = "13"),
      (email = "dave@testers.com"),
      "2405"
    )
  ).toBeInstanceOf(Employee);
});

test("gets icon", () => {
  const manager = new Manager(mockData);

  expect(manager.getIcon()).toEqual(expect.any(String));
});

test("gets role", () => {
  const engineer = new Manager(mockData);

  expect(engineer.getRole()).toEqual("Manager");
});
