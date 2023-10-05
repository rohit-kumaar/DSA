const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputField = document.querySelector('input[type="text"]').value;
  const getData = localStorage.getItem("name");
  getData === null ? (data = []) : (data = JSON.parse(getData));
  data.push(inputField);
  localStorage.setItem("name", JSON.stringify(data));
  document.querySelector('input[type="text"]').value = "";
});
