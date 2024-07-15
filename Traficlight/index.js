// function clearLight() {
//   document.getElementById("stopLight").style.backgroundColor = "black";
//   document.getElementById("slowLight").style.backgroundColor = "black";
//   document.getElementById("fastLight").style.backgroundColor = "black";
// }

// function stopLight() {
//   clearLight();
//   document.getElementById("stopLight").style.backgroundColor = "Red";
// }

// function slowLight() {
//   clearLight();
//   document.getElementById("slowLight").style.backgroundColor = "Yellow";
// }

// function fastLight() {
//   clearLight();
//   document.getElementById("fastLight").style.backgroundColor = "Red";
// }

function clearLight() {
  document.getElementById("stopLight").style.backgroundColor = "black";
  document.getElementById("slowLight").style.backgroundColor = "black";
  document.getElementById("fastLight").style.backgroundColor = "black";
}

function setLight(lightId, color) {
  clearLight();
  document.getElementById(lightId).style.backgroundColor = color;
}

function startTrafficLight() {
  function greenLight() {
    setLight("fastLight", "green");
    setTimeout(yellowLight, 5000);
  }

  function yellowLight() {
    setLight("slowLight", "yellow");
    setTimeout(redLight, 2000);
  }

  function redLight() {
    setLight("stopLight", "red");
    setTimeout(greenLight, 1000);
  }

  greenLight();
}

window.onload = startTrafficLight;
