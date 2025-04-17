const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
// input.forEach((input) => {
//   const valore = input.value;
//   console.log(valore);
// });
// console.log(input);

const obj = {
  firstName: firstName.value,
  lastName: lastName.value,
  age: age.value,
};
// const obj = { firstName, lastName, age };
console.log(obj);
const form = document.querySelector("form");
form.setAttribute("data-person", JSON.stringify(obj));
