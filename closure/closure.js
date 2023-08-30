function x() {
  var y = 7;
  return function () {
    console.log(y);
  };
}
const z = x();
z();
