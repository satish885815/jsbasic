const shapeArray = [
  [0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
];

const shapeContainer = document.getElementById("shape-container");
const selectedBoxes = [];
let deselecting = false;
let totalBoxes = 0;

// Create shape based on the shapeArray
shape = shapeArray.flat(Infinity);
// shapeArray.forEach((row, rowIndex) => {
//   row.forEach((value, colIndex) => {
//     const box = document.createElement("div");
//     box.classList.add("box");
//     if (value === 1) {
//       box.addEventListener("click", () => selectBox(box));
//       totalBoxes++;
//     } else {
//       box.style.visibility = "hidden";
//     }
//     shapeContainer.appendChild(box);
//   });
// });

shape.forEach((ele) => {
  const box = document.createElement("div");
  box.classList.add("box");
  if (ele === 1) {
    box.addEventListener("click", () => selectBox(box));
    totalBoxes++;
  } else {
    box.style.visibility = "hidden";
  }
  shapeContainer.appendChild(box);
});

function selectBox(box) {
  if (deselecting) return;

  if (!box.classList.contains("selected")) {
    box.classList.add("selected");
    selectedBoxes.push(box);

    if (selectedBoxes.length === totalBoxes) {
      startDeselecting();
    }
  }
}

function startDeselecting() {
  deselecting = true;
  shapeContainer.classList.add("disabled");

  let index = 0;
  const interval = setInterval(() => {
    if (index < selectedBoxes.length) {
      selectedBoxes[index].classList.remove("selected");
      index++;
    } else {
      clearInterval(interval);
      deselecting = false;
      shapeContainer.classList.remove("disabled");
      selectedBoxes.length = 0; // Clear the selectedBoxes array
    }
  }, 500);
}
