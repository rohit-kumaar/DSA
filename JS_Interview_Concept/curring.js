// function log(time) {
//   return function (type) {
//     return function (msg) {
//       return `At ${time.toLocaleString()}: severity ${type} => ${msg}`;
//     };
//   };
// }

const log = (time) => (type) => (msg) =>
  `At ${time.toLocaleString()}: severity ${type} => ${msg}`;
console.log(log(new Date())("error")("power not sufficient"));

const logNow = log(new Date());
console.log(logNow("Warning")("temperature high"));
