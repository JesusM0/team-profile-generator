const Manager = require(`../lib/Manager`);

test('creates an Manager object', () => {
    const manager = new Manager('name', 'id12', 'company@email.com', 'E1918');

    expect(manager.name).toBe('name');
    expect(manager.id).toBe('id12');
    expect(manager.email).toBe('company@email.com');
    expect(manager.officeNumber).toBe('E1918');
    expect(manager.role).toBe('Manager');
});