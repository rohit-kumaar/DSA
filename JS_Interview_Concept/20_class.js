class Developer {
    constructor(name, skills) {
        this.name = name;
        this.skills = skills;
    }

    /* --------------------------------- */
    /* START : non enumerable property   */
    /* --------------------------------- */
    introduce() {
        console.log(`Hi, I'm ${this.name} and I specialize in ${this.skills.join(", ")}.`);
    }
    /* --------------------------------- */
    /* END   : non enumerable property   */
    /* --------------------------------- */

}

// Creating an instance (object)
const dev1 = new Developer("Rohit", ["JavaScript", "Node.js"]);
dev1.introduce();
// Output: Hi, I'm Rohit and I specialize in JavaScript, Node.js.

/* ----------------------------- */
/* START : enumerable property   */
/* ----------------------------- */
Developer.prototype.enumerableProp = function () {
    console.log(`Hi, I'm ${this.name} and I specialize in ${this.skills.join(", ")}.`);
}

console.log(dev1.enumerableProp());


/* ----------------------------- */
/* END   : enumerable property   */
/* ----------------------------- */

/* ---------------------------------------------------------- */
/* START : extends developer property in to backend developer */
/* ---------------------------------------------------------- */
class BackendDeveloper extends Developer {
    developAPI() {
        console.log(`${this.name} is building an API.`);
    }
}

const dev2 = new BackendDeveloper("Amit", ["Node.js", "MongoDB"]);
dev2.introduce();   // Inherited method
dev2.developAPI();  // Output: Amit is building an API.

/* ---------------------------------------------------------- */
/* END   : extends developer property in to backend developer */
/* ---------------------------------------------------------- */
