const button = document.querySelector(".btn");
const element = document.body;
button.addEventListener("click", (darkMode) => {
  element.classList.toggle("theme");
  console.log("Dark mode on", darkMode);
});
