const html = document.documentElement;
const body = html.children[1];
const ul = body.children[0];
console.log(ul.parentElement);
console.log(ul.children[1].innerText);
const secondLi = ul.children[1];
console.log(secondLi.nextElementSibling.innerText);
console.log(secondLi.previousElementSibling.innerText);
