// You can't re-declare block scoped variable i.e., variables declared with LET and CONST
// VAR is a global scope variable
// LET and CONST variable follow lexical scoping i.e., if the variable is not present in the same scope then it can be taken from parent scope if it is there else it will throw error

let a = 10;
const c = 30;
var b = 10;
if (true) {
  var b = 20;
  console.log(a, b, c);
}
console.log(a, b, c);
