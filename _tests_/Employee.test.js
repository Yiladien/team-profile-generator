const Employee = require("../lib/Employee");

test("create employee object", () => {
  const employee = new Employee(`Dave`, "13", `dave@tester.com`);

  expect(employee.name).toBe(`Dave`);
  expect(employee.id).toBe(`13`);
  expect(employee.email).toBe(`dave@tester.com`);
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toContain(`@`);
  expect(employee.email).toContain(`.`);
});

test("gets Employee name", () => {
  const employee = new Employee(`Dave`, "13", `dave@tester.com`);

  expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test("gets Employee Id", () => {
  const employee = new Employee(`Dave`, "13", `dave@tester.com`);

  expect(employee.getId()).toEqual(
    expect.stringContaining(employee.id.toString())
  );
});

test("gets Employee Email", () => {
  const employee = new Employee(`Dave`, "13", `dave@tester.com`);

  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test("gets Employee role", () => {
  const employee = new Employee(`Dave`, "13", `dave@tester.com`);

  expect(employee.getRole()).toBe(`Employee`);
});
