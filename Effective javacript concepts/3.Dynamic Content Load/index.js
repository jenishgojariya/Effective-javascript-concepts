var i = 0;
function createParagraph() {
  const para = document.createElement("p");
  para.textContent = `You clicked the button!${++i}`;
  document.body.appendChild(para);
}

const button = document.querySelector("button");

button.addEventListener("click", createParagraph);
