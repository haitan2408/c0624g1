// var diemToan; // => undefined
// console.log(diemToan)
// var diemToan = 7;
// let diemAnh = 8;
//
// let b = confirm("bạn có chắc xóa hay không")
// let c = prompt("Nhập c");

// Let không thể khai báo lại, var có thể khai báo lại
// Let: block scope, var: function scope
// var có cơ chế hoisting: có thể sử dụng trước khi khai báo. Còn let thì không


// function test() {
//     var diemVan = 7;
// }
// test()
// console.log(diemVan)
// if(diemToan > 7) {
//     var diemVan = 6;
// }
// console.log(diemVan)

// let a = 5;
// let b = "5";
// console.log(a===b);
// "5" + "7" + "8" => "578"
// "5" + 7 + 8 => "578"
// 7 + 8 + "5" => "155"
// let b = "5" + 8 - 1;
// console.log(typeof b, b)
//
// let a = 6;
// console.log(a++); //7
// console.log(a)

let a = 7;
let b = 8;
let c = 9;
let result = a++ + ++a - --b + c--;
// result: 7 + 9 - 7 + 9
// a: 9
// b: 7
// c: 8
console.log(result)

a +=7;
// a = a + 7
// a = 7 + 7
// a = 14

console.log(false || false && true)





