// Intial sample test to make sure that Jest works as expected
test('Test that Jest works as expected', () => {
    expect(5+3).toBe(8);
})

// Test that airport codes are the correct input type
const {validateIataCode} = require('./app'); 

test('Validate the input is a correct 3-letter airport code', () => {
    expect(validateIataCode('LHR')).toBe(true);
});

test('Returns false for invalid input', () => {
    expect(validateIataCode('123')).toBe(false);
    expect(validateIataCode('')).toBe(false);
    expect(validateIataCode('ABCD')).toBe(false);
});
