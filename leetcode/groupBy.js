function getId(item) {
  return item.id;
}
Array.prototype.groupBy = function (fn) {
  let arr = this;
  let ans = {};
  for (let i = 0; i < arr.length; i++) {
    let key = fn(arr[i]);
    if (ans[key]) {
      ans[key].push(arr[i]);
    } else {
      ans[key] = [];
      ans[key].push(arr[i]);
    }
  }
  return ans;
};

let array = [{ id: "1" }, { id: "1" }, { id: "2" }];
array.groupBy(getId);
