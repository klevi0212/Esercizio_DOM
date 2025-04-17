function addProduct() {
  const input = document.querySelector("input");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  const ul = document.querySelector("ul");
  const newLi = document.createElement("li");
  newLi.innerText = input.value;
  ul.appendChild(newLi);

  newLi.appendChild(checkbox);
}
