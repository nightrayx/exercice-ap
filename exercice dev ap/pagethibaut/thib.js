const catImg = document.querySelector("img#catImg");
const btn = document.querySelector("button#btn");

let cat = { linkCatImg: "" };

const callCatApi = (event) => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((data) => {
      cat = { linkCatImg: data[0].url };
      setAttributeCatImg();
    })
    .catch(console.log);
};

const setAttributeCatImg = (event) => {
  catImg.setAttribute("src", cat.linkCatImg)
}

btn.addEventListener("click", callCatApi);

document.addEventListener("DOMContentLoaded", function() {
  callCatApi();
})