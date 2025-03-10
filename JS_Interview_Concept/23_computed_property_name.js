// A Computed Property Name allows you to dynamically create object keys (property names) using expressions or variables inside square brackets [].

const keyName = "dynamicKey";

const obj = {
  [keyName]: "This is a dynamic property!",
};

console.log(obj.dynamicKey); // Output: This is a dynamic property!
