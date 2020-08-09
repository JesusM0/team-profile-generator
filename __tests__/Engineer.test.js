const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('name', 'id12', 'company@email.com', 'companygit');

    expect(engineer.name).toBe('name');
    expect(engineer.id).toBe('id12');
    expect(engineer.email).toBe('company@email.com');
    expect(engineer.github).toBe('companygit');
    expect(engineer.role).toBe('Engineer');
});