// async function fetchTodoTitles() {
//   // Create an array of IDs from 1 to 5
//   const ids = [1, 2, 3, 4, 5];

//   // Fetch the corresponding TODO items using Promise.all
//   const todoPromises = ids.map((id) =>
//     fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((response) =>
//       response.json()
//     )
//   );

//   try {
//     // Resolve all promises
//     const todos = await Promise.all(todoPromises);

//     // Extract and return the titles
//     const titles = todos.map((todo) => todo.title);
//     return titles;
//   } catch (error) {
//     console.error("Error fetching TODO items:", error);
//   }
// }

// // Example usage
// fetchTodoTitles().then((titles) => console.log(titles));

// const todoPromises = async () => {
//   const ids = [1, 2, 3, 4, 5];
//   const todo = ids.map(async (id) => {
//     const data = await fetch(
//       `https://jsonplaceholder.typicode.com/todos/${id}`
//     );
//     const result = data.json();
//     return result;
//   });
//   const dataList = await Promise.all(todo);
//   dataList.forEach((ele) => {
//     console.log(ele);
//   });
// };

// async function call(params) {
//   todoPromises();
// }

// call();

const arr = [1, 2, 3, 4, 5];

const modifiedArr = arr.map(async (num) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${num}`);
  const data = await res.json();
  return data.title;
});

console.log(modifiedArr);
