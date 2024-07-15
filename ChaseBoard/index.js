const chaseBoard = document.getElementById("chase-board");
const size = 5;

chaseBoard.style.gridTemplateColumns = `repeat(${size}, 50px)`;

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    const box = document.createElement("div");
    box.classList.add("box");
    if ((i + j) % 2 === 0) {
      box.classList.add("white");
    } else {
      box.classList.add("black");
    }
    chaseBoard.appendChild(box);
  }
}
