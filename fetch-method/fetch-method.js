async function fetchData() {
  try {
    const response = await fetch("https://ringsdb.com/api/public/card/01073");
    const responseJson = await response.json();
    console.log(responseJson);
    // const card = responseJson.data[0];

    const { name, imagesrc } = responseJson;

    const h1 = document.querySelector("h1");
    const image = document.querySelector("img");
    h1.innerText = name;
    image.setAttribute("src", "https://ringsdb.com" + imagesrc);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
