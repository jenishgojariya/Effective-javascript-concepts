// Array destructuring with rest operator
const [x1, x2, ...rest1] = [10, 20, 30, 40, 50, 60, 70];

// Default values in array destructuring
const [y1 = 100, y2, y3] = [10, 20];
const [z1, z2, z3 = 100] = [10, 20];

// Nested object destructuring from an array
const [m1, m2, ...{ rest2, post2 }] = [
  10,
  20,
  { rest2: [100, 200], post2: [1000, 2000], get2: [1, 2], met2: [1.0, 2.0] },
];

// Object destructuring with rest operator
const array = [
  10,
  20,
  {
    pop1: "value1",
    push2: "value2",
    remaining1: "extra1",
    remaining2: "extra2",
  },
];
const [n1, n2, { pop1, push2, ...remainingProps1 }] = array;

// Array destructuring with nested array spread operator
const [p1, p2, ...[p3, p4]] = [10, 20, 30, 40, 50];

// Basic object destructuring
const obj1 = { a1: 10, b1: 20 };
const { a1, b1 } = obj1;

// Object destructuring with default values
const obj2 = { c1: 10, d1: 20 };
const { c1 = 100, d1 = 200 } = obj2;

// Object destructuring with alias and default values
const obj3 = { e1: 10, f1: 20 };
const { e1: e2 = 100, f1: f2 = 200 } = obj3;

// Object destructuring with rest operator
const obj4 = { g1: 10, h1: 20, i1: 30, j1: 40 };
const { g1, h1, ...rest3 } = obj4;

// Assigning destructured values to existing variables
let k1,
  k2,
  obj5 = { k1: 10, k2: 20 };
({ k1, k2 } = obj5);

// Logging all the destructured values
console.log(x1, x2, rest1);
console.log(y1, y2, y3);
console.log(z1, z2, z3);
console.log(m1, m2, rest2, post2);
console.log(n1, n2, pop1, push2, remainingProps1);
console.log(p1, p2, p3, p4);
console.log(a1, b1);
console.log(c1, d1);
console.log(e2, f2);
console.log(g1, h1, rest3);
console.log(k1, k2);
