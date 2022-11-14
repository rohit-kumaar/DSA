// Method - I Array
// const removeDuplicateValue = (arrays) =>
//   arrays.filter((element, index, array) => array.indexOf(element) === index);

// Method - II Array
// const removeDuplicateValue = (params) => [...new Set(params)];
// console.log(removeDuplicateValue(numbers));

// Method - III Array of object
const companies = [
  { name: "Company One" },
  { name: "Company Two" },
  { name: "Company Two" },
];

const removeDuplicateValue = (params) => new Set(params);
console.log(removeDuplicateValue(companies.map(JSON.stringify)));
