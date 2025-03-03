// WeakMap and WeakSet are special data structures in JavaScript that work similarly to Map and Set, but with key differences in memory management and behavior.

/* ------------------ */
/* START : weak Map   */
/* ------------------ */
let weakMap = new WeakMap();

let obj1 = { name: "Alice" };
let obj2 = { name: "Bob" };

weakMap.set(obj1, "Developer");
weakMap.set(obj2, "Designer");

console.log(weakMap.get(obj1)); // Output: Developer

obj1 = null; // obj1 is now eligible for garbage collection

console.log(weakMap.get(obj1)); // Output: undefined
// weakMap does not allow iteration
/* ------------------ */
/* END   : weak Map   */
/* ------------------ */

/* ----------------- */
/* START : weak set  */
/* ----------------- */
let weakSet = new WeakSet();

let user1 = { name: "Alice" };
let user2 = { name: "Bob" };

weakSet.add(user1);
weakSet.add(user2);

console.log(weakSet.has(user1)); // Output: true

user1 = null; // user1 is now eligible for garbage collection
console.log(weakSet.has(user1));
// weakSet does not allow iteration
/* ----------------- */
/* END   : weak set  */
/* ----------------- */
