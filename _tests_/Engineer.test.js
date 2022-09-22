const Engineer = require("../lib/Engineer.js");
const Employee = require("../lib/Employee.js");

// jest.mock("../lib/Employee.js");
// jest.mock("../lib/Engineer.js");

mockData = {
  name: "Dave",
  id: "13",
  email: "dave@testers.com",
  github: "davyjones",
};

console.log(mockData);

test("create engineer object", () => {
  const engineer = new Engineer(mockData);

  expect(engineer.github).toEqual(expect.any(String));
});

test("gets Engineer name", () => {
  const engineer = new Engineer(mockData);

  expect(engineer.getName()).toEqual(expect.stringContaining(mockData.name));
});

test("gets Engineer Id", () => {
  const engineer = new Engineer(mockData);

  expect(engineer.getId()).toEqual(expect.stringContaining(mockData.id));
});

test("gets github", () => {
  const engineer = new Engineer(mockData);

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(mockData.github)
  );
});

test("gets Engineer Email", () => {
  const engineer = new Engineer(mockData);

  expect(engineer.getEmail()).toEqual(expect.stringContaining(mockData.email));
});

test("gets Engineer Object", () => {
  //   const engineer = new Engineer(name = "Dave", id = "13", email = "dave@testers.com", "2405");

  expect(
    new Engineer(
      (name = "Dave"),
      (id = "13"),
      (email = "dave@testers.com"),
      "2405"
    )
  ).toBeInstanceOf(Employee);
});

test("gets icon", () => {
  const engineer = new Engineer(mockData);

  expect(engineer.getIcon()).toEqual(expect.any(String));
});

test("gets role", () => {
  const engineer = new Engineer(mockData);

  expect(engineer.getRole()).toEqual("Engineer");
});
