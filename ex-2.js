function countPositivesSumNegatives(input) {
  //Start coding here
  if (input == null || input.length === 0) {
    return [];
  }
  let count = 0
  let SumNegatives = 0
  for ( let i = 0; i < input.length; i++ ) {
    if ( input[i] > 0 ) {
      count++
    } else if (input[i] < 0 ) {
        SumNegatives = SumNegatives + input[i]
      } 
    } return [count, SumNegatives]
  } 

  // ใช้ AI ตรง if ถ้า input เป็น null หรือ empthy กับ ตรง count++ ตอนแรกใช้ผิดเป็น count = i++ 

let result1 = countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
console.log(result1); // [10, -65]

let result2 = countPositivesSumNegatives("");
console.log(result2); // []
