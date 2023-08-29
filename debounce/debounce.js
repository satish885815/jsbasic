let count = 0;
const getData = () => {
  console.log("fetching data...", ++count);
};
//d is delay time and fn is function which fetching data after d deley.
const debounce = (fn, d) => {
  let timer;
  return function () {
    clearInterval(timer);
    timer = setTimeout(() => {
      fn();
    }, d);
  };
};

const getBetter = debounce(getData, 300);
