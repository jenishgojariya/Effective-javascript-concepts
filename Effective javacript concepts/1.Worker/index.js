const worker = new Worker("worker.js");
const sum = document.getElementById("sum");
const bg = document.body;
const BgChange = document.getElementById("bgchange");

BgChange.addEventListener("click", function () {
  if (bg.style.backgroundColor == "red") {
    bg.style.backgroundColor = "purple";
  } else {
    bg.style.backgroundColor = "red";
  }
});

sum.addEventListener("click", function () {
  worker.postMessage(10000000000);
  worker.onmessage = function ({ data }) {
    alert(`the final sum is ${data}`);
  };
});
