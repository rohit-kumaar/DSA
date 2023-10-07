const URL = "https://jsonplaceholder.typicode.com/users";

const myPromise = new Promise((resolve, reject) => {
  let isCancelled = false;

  if (!isCancelled) {
    setTimeout(() => {
      console.log("Hello World");
      resolve("Your Promise is Resolve");
    }, 2000);
  } else {
    reject("Your Promise is Reject");
  }
});

// Fetch only work in browser
async function main() {
  try {
    const [number, response] = await Promise.all([myPromise, fetch(URL)]);
    console.log("Number :", number);
    const data = await response.json();
    console.log("Data :", data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Promise completed.");
  }
}
main();
