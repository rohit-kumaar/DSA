const URL = "https://jsonplaceholder.typicode.com/users";

// const user = async () => {
//   const response = await fetch(URL);
//   const data = await response.json();
//   return data;
// };

// const userData = user();
// userData.then((data) => {
//   data.map((element) => console.table(element));
//   //   data.map((element) => console.table(`${element.id} ${element.name}`));
// });

(async () => {
  const res = await fetch(URL),
    data = await res.json();
  return data;
})()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
