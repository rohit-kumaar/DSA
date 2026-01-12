const company = {
  name: "TechCorp",
  departments: {
    engineering: {
      manager: "Ankit",
      employees: [
        { id: 1, name: "Ravi" },
        { id: 2, name: "Neha" },
      ],
    },
    hr: {
      manager: "Pooja",
      employees: [{ id: 3, name: "Aman" }],
    },
  },
};

function deepRecursiveObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      deepRecursiveObj(obj[key]);
    } else {
      console.log(`${key} : ${obj[key]}`);
    }
  }
}

deepRecursiveObj(company);
