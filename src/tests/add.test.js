const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('Is name valid', () => {
    const result = generateGreeting('Alsaad');
    expect(result).toBe('Hello Alsaad!');
});

test('no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');
});