function addName(time, name) {
  return new Promise((resolve, reject) => {
    if (name) {
      setTimeout(() => {
        console.log(name);
        resolve();
      }, time);
    } else {
      reject("No such name");
    }
  });
}

addName(2000, "Rohit")
  .then(() => addName(2000, "Bibhu"))
  .then(() => addName(2000, "Lalit"))
  .then(() => addName(2000, "Ricky"))
  .then(() => addName(2000, "Kriti"))
  .catch((err) => console.log(err));
