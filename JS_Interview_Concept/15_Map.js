const myMap = new Map();
/* --------------- */
/* START : set     */
/* --------------- */
myMap.set("a", "apple");
myMap.set("b", "ball");
myMap.set("c", "cat");
myMap.set("d", "dog");
console.log("myMap :>> ", myMap);
console.log(typeof myMap);
/* --------------- */
/* END   : set     */
/* --------------- */

/* --------------- */
/* START : get     */
/* --------------- */
const d = myMap.get("d");
console.log("d :>> ", d);
/* --------------- */
/* END   : get     */
/* --------------- */

/* --------------- */
/* START : has     */
/* --------------- */
const a = myMap.has("a");
console.log("a :>> ", a);
/* --------------- */
/* END   : has     */
/* --------------- */

/* --------------- */
/* START : delete  */
/* --------------- */
myMap.delete("c");
console.log(myMap);
/* --------------- */
/* END   : delete  */
/* --------------- */

/* --------------- */
/* START : size    */
/* --------------- */
console.log(myMap.size);
/* --------------- */
/* END   : size    */
/* --------------- */

/* ----------------------------- */
/* START : Real-World Example    */
/* ----------------------------- */
const cache = new Map();

async function fetchUser(id) {
  if (cache.has(id)) {
    return cache.get(id); // Return cached data
  }

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();
  cache.set(id, data); // Store response in cache

  return data;
}

const result = fetchUser(1);
console.log("result :>> ", result);
/* ----------------------------- */
/* END   : Real-World Example    */
/* ----------------------------- */
