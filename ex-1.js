// code ที่เขียนเอง
// function fizzBuzz(n) {
//   //Start coding here
//   let arrayFizzBuzz = []
//   let string = 0
//   for ( let i = 1; i <= n; i++) {
//       if ( i < n ) {
//       string = String([i])
//       arrayFizzBuzz.push(string)}
//      if ( i%3 === 0 ) {
//       arrayFizzBuzz.push("Fizz")
//     }if ( i%5 === 0 ) {
//       arrayFizzBuzz.push("Buzz")
//     } 
//   } return arrayFizzBuzz
// }
// ใช้ AI แก้ logic ใหม่ ควรใช้ if ตรวจสอบเงื่อนไขทั้ง 2 เงื่อนไขก่อน คือ หาร 5 และ หาร 3 ลงตัว 
// แล้วค่อย else if ถ้าหาร 3 ลงตัว เพิ่ม Fizz เข้าไปใน array ถ้าหาร 5 ลงตัว เพิ่ม Buzz เข้าไปใน array 
// แล้วใช้ else ในกรณีที่ หาร 3 กับ 5 ไม่ลงตัว ให้เพิ่มตัวเลขที่แปลงเป็น string เข้าไปใน array

function fizzBuzz(n) {
  let arrayFizzBuzz = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arrayFizzBuzz.push("FizzBuzz");
    }
    else if (i % 3 === 0) {
      arrayFizzBuzz.push("Fizz");
    }
    else if (i % 5 === 0) {
      arrayFizzBuzz.push("Buzz");
    }

    else {
      arrayFizzBuzz.push(i.toString());
    }
  }

  return arrayFizzBuzz;
}

let result1 = fizzBuzz(3);
console.log(result1); // ["1","2","Fizz"]

let result2 = fizzBuzz(5);
console.log(result2); // ["1","2","Fizz","4","Buzz"]

let result3 = fizzBuzz(15);
console.log(result3); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
