const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee.js");

jest.mock("../lib/Employee.js");

test("create manager object", () => {
  const manager = new Manager("Dave", "13", "dave@testers.com", "2405");

  expect(manager.name).toBe(`Dave`);
  expect(manager.id).toBe(`13`);
  expect(manager.email).toBe(`dave@testers.com`);
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toContain(`@`);
  expect(manager.email).toContain(`.`);
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets Manager name", () => {
  const manager = new Manager("Dave", "13", "dave@testers.com", "2405");

  expect(manager.getName()).toEqual(expect.stringContaining(manager.name));
});

test("gets Manager Id", () => {
  const manager = new Manager("Dave", "13", "dave@testers.com", "2405");

  expect(manager.getId()).toEqual(
    expect.stringContaining(manager.id.toString())
  );
});

test("gets Manager Office Number", () => {
  const manager = new Manager("Dave", "13", "dave@testers.com", "2405");

  expect(manager.getOfficeNumber()).toEqual(
    expect.stringContaining(manager.officeNumber.toString())
  );
});

test("gets Manager Email", () => {
  const manager = new Manager("Dave", "13", "dave@testers.com", "2405");

  expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
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
