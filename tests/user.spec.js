const expect = require("chai").expect;
const { CreateUser, CreateUserErrors } = require("../user/create-user");

describe("Test cases", function () {
  //1
  it("instances should have a validate() function", function () {
    expect(CreateUser).to.not.be.undefined;
    expect(CreateUser).to.be.a("function");
  });
  //2
  it("should show a error if name is Blank ", function () {
    const user = new CreateUser("", 21);
    expect(() => user.validate()).to.Throw(CreateUserErrors.NAME_BLANK);
  });
  //3
  it("should show a error if name is not a String ", function () {
    const user = new CreateUser(42, 21);
    expect(() => user.validate()).to.Throw(CreateUserErrors.NAME_NOT_STRING);
  });
  //4
  it("should show a error if the age is not a Number ", function () {
    const user = new CreateUser("mukesh", "32");
    expect(() => user.validate()).to.Throw(CreateUserErrors.AGE_NOT_NUMBER);
  });
  //5
  it("should throw an error if age less than 0", function () {
    const user = new CreateUser("Chirag", -1);
    expect(() => user.validate()).to.throw(CreateUserErrors.AGE_INVALID);
  });
  //6
  it("should show a error if password is Blank ", function () {
    const user = new CreateUser("Chirag", 22, "");
    expect(() => user.validate()).to.throw(CreateUserErrors.PASSWORD_BLANK);
  });
  //7
  it("should show a error if password is less then 8 Character", function () {
    const user = new CreateUser("Chirag", 22, "1234");
    expect(() => user.validate()).to.throw(CreateUserErrors.PASSWORD_SHORT);
  });
  //8
  it("should show a error if Password does not contain 1 Small character", function () {
    const user = new CreateUser("Chirag", 22, "12345678");
    expect(() => user.validate()).to.throw(CreateUserErrors.PASSWORD_1SC);
  });
  //9
  it("should show a error if Password does not contain 1 Number", function () {
    const user = new CreateUser("Chirag", 22, "asdfghjk");
    expect(() => user.validate()).to.throw(CreateUserErrors.PASSWORD_1N);
  });
  //10
  it("should show a error if Password does not contain 1 Capital letter", function () {
    const user = new CreateUser("Chirag", 22, "1qwertyu");
    expect(() => user.validate()).to.throw(CreateUserErrors.PASSWORD_1CC);
  });
  //11
  it("should show a error if Password does not contain 1 Special character", function () {
    const user = new CreateUser("Chirag", 22, "1Qwertyu");
    expect(() => user.validate()).to.throw(CreateUserErrors.PASSWORD_1SC);
  });
  //12
  it("should show a error if Confirm Password does not match Password", function () {
    const user = new CreateUser("Chirag", 22, "1Qwerty*");
    expect(() => user.validate()).to.throw(
      CreateUserErrors.AGE_CONFIRMPASSOWRD_EQP
    );
  });
  //13
  it("should show a error if email is Blank", function () {
    const user = new CreateUser("Chirag", 22, "1Qwerty*", "1Qwerty*");
    expect(() => user.validate()).to.throw(CreateUserErrors.EMAIL_BLANK);
  });
  //14
  it("should show a error if email is invalid", function () {
    const user = new CreateUser(
      "Chirag",
      22,
      "1Qwerty*",
      "1Qwerty*",
      ".comasds@gvd11"
    );
    expect(() => user.validate()).to.throw(CreateUserErrors.EMAIL_INVALID);
  });
  //15
  it("should show a error if Number is blank", function () {
    const user = new CreateUser(
      "Chirag",
      22,
      "1Qwerty*",
      "1Qwerty*",
      "example@example.com"
    );
    expect(() => user.validate()).to.throw(CreateUserErrors.NUMBER_BLANK);
  });
  //16
  it("should show a error if Number is not a Number", function () {
    const user = new CreateUser(
      "Chirag",
      22,
      "1Qwerty*",
      "1Qwerty*",
      "example@example.com",
      ""
    );
    expect(() => user.validate()).to.throw(CreateUserErrors.NUMBER_NOT_NUMBER);
  });
  //17
  it("should show a error if Number is short", function () {
    const user = new CreateUser(
      "Chirag",
      22,
      "1Qwerty*",
      "1Qwerty*",
      "example@example.com",
      123456
    );
    expect(() => user.validate()).to.throw(CreateUserErrors.NUMBER_SHORT);
  });
});

/*
Ideal input:-
name = "Chirag",
age = "22",
password = "Ab*45678",
confirmPassword = "Ab*45678",
email = "example@example.com",
number = 0123456789

ie.

("Chirag",
 "22",
 "Ab*45678",
 "Ab*45678",
 "example@example.com",
 0123456789)


*/
