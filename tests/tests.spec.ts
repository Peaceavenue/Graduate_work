import { nonValidUserDate, validUserDate } from "../fixtures/userDate";
import { registrationForm } from "../fixtures/class";
const formRegistration = new registrationForm();

describe("positive_tests", function () {
  test("firstName validation check", function () {
    const actual = formRegistration.firstName(validUserDate.firstName);
    expect(actual).toBe(validUserDate.firstName);
    expect(actual).toBeDefined();
  });

  test("lastName validation check", function () {
    const actual = formRegistration.lastName(validUserDate.lastName);
    expect(actual).toMatch(validUserDate.lastName);
    expect(actual).toBeDefined();
  });

  test("email validation check", function () {
    const actual = formRegistration.email(validUserDate.email);
    expect(actual).toBe(validUserDate.email);
    expect(actual).toBeDefined();
  });

  test("phoneNumber validation check", function () {
    const actual = formRegistration.phoneNumber(validUserDate.phoneNumber);
    expect(actual).toEqual(validUserDate.phoneNumber);
    expect(actual).toBeDefined();
  });

  test("age validation check", function () {
    const actual = formRegistration.age(validUserDate.age);
    expect(actual).toEqual(validUserDate.age);
    expect(actual).toBeDefined();
  });

  test("patronymic validation check", function () {
    const actual = formRegistration.patronymic(validUserDate.patronymic);
    expect(actual).toBe(validUserDate.patronymic);
    expect(actual).toBeDefined();
  });

  test("password validation check", function () {
    const actual = formRegistration.password(validUserDate.password);
    expect(actual).toBe(validUserDate.password);
    expect(actual).toBeDefined();
  });
});

describe("negative_tests", function () {
  test("firstName validation with non-valid values", function () {
    const actual = formRegistration.firstName(nonValidUserDate.firstName);
    expect(actual).toEqual(nonValidUserDate.firstName);
    expect.anything();
  });

  test("lastName validation with non-valid values", function () {
    const actual = formRegistration.lastName(nonValidUserDate.lastName);
    expect(actual).toEqual(nonValidUserDate.lastName);
    expect(actual).not.toBeUndefined();
    expect(actual).not.toBeNull();
  });

  test("patronymic validation with non-valid values", function () {
    const actual = formRegistration.patronymic(nonValidUserDate.patronymic);
    expect(actual).toEqual(nonValidUserDate.patronymic);
    expect.anything();
  });

  test("phoneNumber validation with non-valid values", function () {
    const actual = formRegistration.phoneNumber(nonValidUserDate.phoneNumber);
    expect(actual).toMatch(nonValidUserDate.phoneNumber);
    expect.anything();
  });

  test("age validation with non-valid values", function () {
    const actual = formRegistration.age(nonValidUserDate.age);
    expect(actual).toEqual(nonValidUserDate.age);
    expect(actual).not.toBeNull();
    expect(actual).not.toBeUndefined();
  });

  test("password validation with non-valid values", function () {
    const actual = formRegistration.password(nonValidUserDate.password);
    expect(actual).toMatch(nonValidUserDate.password);
    expect.anything();
  });

  test("validation check password containing only numbers", function () {
    const actual = formRegistration.password(nonValidUserDate.passOnlyNumbers);
    expect(actual).toEqual(nonValidUserDate.passOnlyNumbers);
    expect.anything();
  });

  test("validation check password containing only letters", function () {
    const actual = formRegistration.password(nonValidUserDate.passOnlyLetters);
    expect(actual).toMatch(nonValidUserDate.passOnlyLetters);
    expect(actual).not.toBeUndefined();
    expect(actual).not.toBeNull();
  });
});
