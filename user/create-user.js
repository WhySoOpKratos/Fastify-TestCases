const CreateUserErrors = {
  NAME_BLANK: "Name cannot be blank ",
  NAME_NOT_STRING: "Name must be a string",
  AGE_NOT_NUMBER: "Age must be a number",
  AGE_INVALID: "Age can not be less the zero",
  PASSWORD_BLANK: "Password cannot be blank ",
  PASSWORD_SHORT: "Password must be of 8 character",
  PASSWORD_1SC: "Password must contain 1 small character",
  PASSWORD_1N: "Password must contain 1 number",
  PASSWORD_1CC: "Password must contain 1 capital letter",
  PASSWORD_1SC: "Password must contain 1 special character",
  AGE_CONFIRMPASSOWRD_EQP: "Password should be equal to confirmPassword",
  EMAIL_BLANK: "Email cannot be blank",
  EMAIL_INVALID: "Enter a valid Email",
  NUMBER_BLANK: "Number cannot be blank",
  NUMBER_NOT_NUMBER: "Number must be a number",
  NUMBER_SHORT: "Number should be of 8 character",
};
class CreateUser {
  constructor(
    name = "",
    age = "",
    password = "",
    confirmPassword = "",
    email = "",
    number = -1
  ) {
    this.name = name;
    this.age = age;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.email = email;
    this.number = number;
  }

  validate() {
    if (this.name === "") {
      throw new Error(CreateUserErrors.NAME_BLANK);
    }
    if (typeof this.name != "string") {
      throw new Error(CreateUserErrors.NAME_NOT_STRING);
    }
    if (typeof this.age != "number") {
      throw new Error(CreateUserErrors.AGE_NOT_NUMBER);
    }
    if (this.age < 0) {
      throw new Error(CreateUserErrors.AGE_INVALID);
    }
    if (this.password === "") {
      throw new Error(CreateUserErrors.PASSWORD_BLANK);
    }
    if (this.password.length != 8) {
      throw new Error(CreateUserErrors.PASSWORD_SHORT); // length = 8
    }
    if (!/[a-z]/.test(this.password)) {
      throw new Error(CreateUserErrors.PASSWORD_1SC); // atlest 1 small letter
    }
    if (!/\d/.test(this.password)) {
      throw new Error(CreateUserErrors.PASSWORD_1N); // atleast a number
    }
    if (!/[A-Z]/.test(this.password)) {
      throw new Error(CreateUserErrors.PASSWORD_1CC); // atleast 1 capital letter
    }
    if (!/[^A-Za-z0-9]/.test(this.password)) {
      throw new Error(CreateUserErrors.PASSWORD_1SC); // atleast a special character
    }
    if (this.confirmPassword != this.password) {
      throw new Error(CreateUserErrors.AGE_CONFIRMPASSOWRD_EQP); // password should be equal to confirmPassword
    }
    if (this.email === "") {
      throw new Error(CreateUserErrors.EMAIL_BLANK); //
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
      throw new Error(CreateUserErrors.EMAIL_INVALID); // email should be in format
    }
    if (this.number < 0) {
      throw new Error(CreateUserErrors.NUMBER_BLANK);
    }
    if (typeof this.number != "number") {
      throw new Error(CreateUserErrors.NUMBER_NOT_NUMBER); // Number should be of 10 character
    }
    if (this.number.length != 10) {
      throw new Error(CreateUserErrors.NUMBER_SHORT); // Number should be of 10 character
    }
  }
}

module.exports = {
  CreateUser,
  CreateUserErrors,
};
