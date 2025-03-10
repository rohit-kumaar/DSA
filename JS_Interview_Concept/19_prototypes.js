// Parent object
const technology = {
    fEnd: "HTML, CSS, JS",
    bEnd: "Node.js, Express",
    showTech: function () {
        console.log(`Frontend: ${this.fEnd}, Backend: ${this.bEnd}`);
    }
};

// Child object
const developer = {
    name: "Rohit Kumar",
    introduce: function () {
        console.log(`Hi, I am ${this.name} and I work with:`);
        this.showTech(); // Calling inherited method
    }
};

// Setting prototype using __proto__
developer.__proto__ = technology;

// Using inherited and custom methods
developer.introduce();
// Output: Hi, I am Rohit Kumar and I work with:
// Frontend: HTML, CSS, JS, Backend: Node.js, Express
