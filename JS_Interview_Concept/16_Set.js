const mySet = new Set();

/* --------------- */
/* START : add     */
/* --------------- */
mySet.add("apple");
mySet.add("ball");
mySet.add("apple");
console.log(mySet);
/* --------------- */
/* END   : add     */
/* --------------- */

/* --------------- */
/* START : has     */
/* --------------- */
console.log(mySet.has("apple"));

/* --------------- */
/* END   : has     */
/* --------------- */

/* --------------- */
/* START : delete  */
/* --------------- */
console.log(mySet.delete("apple"));
console.log(mySet);
/* --------------- */
/* END   : delete  */
/* --------------- */

/* --------------- */
/* START : size    */
/* --------------- */
console.log(mySet.size);

/* --------------- */
/* END   : size    */
/* --------------- */

/* --------------- */
/* START : clear   */
/* --------------- */
mySet.clear();
console.log(mySet);
/* --------------- */
/* END   : clear   */
/* --------------- */
