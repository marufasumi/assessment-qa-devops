const shuffle = require("../src/shuffle");


describe("shuffle should...", () => {
  // CODE HERE
  
  test('should shuffle an array of numbers', () => {
    const input = [1, 2, 3, 4, 5];
    const output = shuffle(input);

    // Make sure the output is the same length as the input
    expect(output.length).toEqual(input.length);

     // Make sure the output is the same length as the input
     expect(output.length).toEqual(input.length);

     // Make sure the output contains all of the same elements as the input
     input.forEach((element) => {
       expect(output).toContain(element);
     });


})


test('should return an empty array if given an empty array', () => {
  const input = [];
  const output = shuffle(input);

  expect(output).toEqual([]);
});

test('should return a new array that is shuffled, not modify the original', () => {
  const input = [1, 2, 3, 4, 5];
  const output = shuffle(input);

  expect(output).not.toBe(input);
});


})
