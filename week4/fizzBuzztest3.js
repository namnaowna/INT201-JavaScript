function fizzBuzz(max) {
    for (let i = 1; i <max; i++) {
      if (i % 3 === 0 && i % 5 === 0){
        console.log ('FizzBuzz')
      }else if (i % 3 === 0) {
        console.log('Fizz')
      }else if(i % 5 === 0) {
        console.log('Buzz')
      } 
    }
    return max
  }
    let max = 10
    console.log(fizzBuzz(max))