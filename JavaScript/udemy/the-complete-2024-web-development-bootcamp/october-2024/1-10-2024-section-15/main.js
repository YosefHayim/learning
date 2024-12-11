let fizzBuzzArray = []
let n = 1

const fizzBuzz = () => {
  while (n <= 100) {
    if (n % 5 === 0 && n % 3 === 0) {
      fizzBuzzArray.push('FizzBuzz')
    } else if (n % 5 === 0) {
      fizzBuzzArray.push('Buzz')
    } else if (n % 3 === 0) {
      fizzBuzzArray.push('Fizz')
    } else {
      fizzBuzzArray.push(n)
    }

    n += 1
  }
  return fizzBuzzArray
}

console.log(fizzBuzz()); 