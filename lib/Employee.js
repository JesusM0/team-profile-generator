// Build Employee Constructors. Along With Prototypes
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = `Employee`;
    }
    //Name Retriever
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Employee;