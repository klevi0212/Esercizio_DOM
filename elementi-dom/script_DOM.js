// Cerca tutti gli elementi con classe "paragrafo".
// Cerca l' elemento con id "elemento-3"
// Cerca tutti gli elementi h2 della pagina

//   const paragrafo = document.querySelectorAll(".paragrafo");
//   console.log(paragrafo);
//   paragrafo.forEach((nodoParagrafo) => {
//     console.log(nodoParagrafo.innerText);
//   });
const paragrafo = document.getElementsByClassName("paragrafo");
console.log(paragrafo);
for (let i = 0; i < paragrafo.length; i++) {
  console.log(paragrafo[i].innerText);
}

const thirdElement = document.querySelector("#elemento-3").innerHTML;
console.log(thirdElement);
//   const thirdElement = document.getElementById("elemento-3").innerHTML;
//   console.log(thirdElement);

const h2Element = document.querySelectorAll("h2");
console.log(h2Element);
h2Element.forEach((nodoH2) => {
  console.log(nodoH2.innerText);
});
