//Chat gpt generate
function _fizzBuzz(max) {
    if (max <= 0 || typeof max !== 'number' || !Number.isInteger(max)) {
      return "Invalid input. Please provide a positive integer.";
    }
  
    let result = "";
  
    for (let i = 1; i <= max; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result += "FizzBuzz";
      } else if (i % 3 === 0) {
        result += "Fizz";
      } else if (i % 5 === 0) {
        result += "Buzz";
      } else {
        result += i;
      }
    }
  
    return result;
  }
  
  // Example usage:
  const max = 10;
  const fizzBuzzPattern = _fizzBuzz(max);
  console.log(fizzBuzzPattern); 