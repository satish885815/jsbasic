function clearLight() {
  document.getElementById("stopLight").style.backgroundColor = "black";
  document.getElementById("slowLight").style.backgroundColor = "black";
  document.getElementById("fastLight").style.backgroundColor = "black";
}

function stopLight() {
  clearLight();
  document.getElementById("stopLight").style.backgroundColor = "Red";
}

function slowLight() {
  clearLight();
  document.getElementById("slowLight").style.backgroundColor = "Yellow";
}

function fastLight() {
  clearLight();
  document.getElementById("fastLight").style.backgroundColor = "Red";
}
