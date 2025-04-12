const words = "I'm a little tea pot";

function capitalize(word) {
  return word
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalize(words));
