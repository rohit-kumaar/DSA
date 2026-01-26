const users = [
  { name: "Rohit", city: "Delhi" },
  { name: "Amit", city: "Mumbai" },
  { name: "Sneha", city: "Pune" },
];
const grouped = {};

for (const user of users) {
  grouped[user.city] = grouped[user.city] || [];
  grouped[user.city] = user;
}

console.log(grouped);
