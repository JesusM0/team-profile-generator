const Intern = require(`../lib/Intern`);

test('creates an Intern object', () => {
    const intern = new Intern('name', 'id12', 'company@email.com', 'internSchool');

    expect(intern.name).toBe('name');
    expect(intern.id).toBe('id12');
    expect(intern.email).toBe('company@email.com');
    expect(intern.school).toBe('internSchool');
    expect(intern.role).toBe('Intern');
});