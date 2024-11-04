const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
  const workerObj = new Worker("complex.js");
  workerObj.postMessage("Start Worker");
  workerObj.onmessage = function (e) {
    document.querySelector("#output1").innerHTML = e.data;
  };
});

const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", () => {
  document.querySelector("#output2").innerHTML += "Hello";
});
