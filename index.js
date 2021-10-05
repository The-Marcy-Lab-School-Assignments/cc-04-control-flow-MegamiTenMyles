//1
function fizzBuzzz(){
  for (let i = 1; i<= 100; i++){
      if (i % 3 === 0 && i % 5 === 0){
          console.log('Fizzbuzz');
      } else if (i % 5 === 0) {
          console.log('Buzz')
      } else if (i % 3 === 0){
          console.log('Fizz')
      } else {
          console.log(i)
      }
  }
}
//fizzBuzzz()
//2
function fizzBuzz(number){
 let NewArray = []
  for (let i = 1; i <= number; i++){
      if (i % 3 === 0 && i % 5 === 0){
          NewArray.push("FizzBuzz")
      } else if (i % 5 === 0){
          NewArray.push("Buzz")
      } else if (i % 3 === 0) {
          NewArray.push("Fizz")
          } else {
              NewArray.push(`${i}`)
          }
      }
      return NewArray
  }
console.log(fizzBuzz(10))

