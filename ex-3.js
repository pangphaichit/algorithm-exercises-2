function validatePIN(pin) {
  //Start coding here
return pin.length <= 4 && !isNaN(pin)
}

// ใช้ AI ตรง !isNaN เพื่อตรวจสอบว่า pin มีเฉพาะตัวเลข

let result1 = validatePIN("1234");
console.log(result1); // true

let result2 = validatePIN("12345");
console.log(result2); // false

let result3 = validatePIN("a234");
console.log(result3); // false
