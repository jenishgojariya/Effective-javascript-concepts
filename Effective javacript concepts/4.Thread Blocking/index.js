const inc = document.querySelector("#inc");
const run = document.querySelector("#run");
const val = document.querySelector("#val");
val.innerHTML = 0;
function increment() {
  val.innerHTML = parseInt(val.innerHTML) + 1;
}

inc.addEventListener("click", increment);
run.addEventListener("click", () => {
  setInterval(() => {
    let i = 0;
    console.log(i);
    i++;
  });
});
