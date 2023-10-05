const URL = "https://jsonplaceholder.typicode.com/users";

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello World");
    resolve(50);
  }, 2000);
});

// Fetch only work in browser
async function main() {
  try {
    const [number, response] = await Promise.all([myPromise, fetch(URL)]);
    console.log(number);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
main();
