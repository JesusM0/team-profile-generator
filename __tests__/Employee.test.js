const Employee = require(`../lib/Employee`);

test(`creates an Employee Object`, () => {
    const employee = new Employee(`name`, `id12`, `company@email.com`);

    expect(employee.name).toBe(`name`);
    expect(employee.id).toBe(`id12`);
    expect(employee.email).toBe(`company@email.com`);
    expect(employee.role).toBe(`Employee`);
});
