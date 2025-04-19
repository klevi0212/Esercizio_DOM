const button = document.querySelector(".btn");
function titleName(username) {
  const titleName = document.querySelector(".title-name");
  titleName.innerText = username;
  sessionStorage.setItem("title-name", username);
}
button.addEventListener("click", () => {
  const input = document.querySelector(".firstname");
  const valore = input.value;
  titleName(valore);
});
const savedUsername = sessionStorage.getItem("title-name");
console.log(savedUsername);

if (savedUsername) {
  titleName(savedUsername);
}
