// console.log(document.getElementById("my-form"));
// console.log(document.querySelector("h1"));

// console.log(document.querySelectorAll(".item"));
// const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello world";
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById("my-form").style.background = "#ccc";
  document.querySelector("body").classList.add("bg-dark");
  ul.lastElementChild.innerHTML = "<h1>Changed</h1>";
});
