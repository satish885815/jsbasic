function init() {
  var name = "Satish";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var makeFunction = init;
makeFunction();
