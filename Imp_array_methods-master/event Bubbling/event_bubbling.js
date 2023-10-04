const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("input").value;
  console.log(input);
});
