/**
 * Using Generators
 * Generators are a special kind of iterators with yield concept
*/

/**
 * Generators as procedure
*/
function* gen() {
  console.log('procedure 1');
  yield 1;
  console.log('procedure 2');
  yield 2;
  console.log('procedure 3');
  yield 3;
  console.log('procedure 4'); // called for end of iteration
};

let g = gen();
g.next(); // { value: 1, done: false }
g.next(); // { value: 2, done: false }
g.next(); // { value: 3, done: false }
g.next(); // { value: undefined, done: true }


let g1 = gen();
g.next(); // { value: 1, done: false }
g.return('hi'); //{ value: 'hi', done: true}
g.next(); // { value: undefined, done: true }
g.next(); // { value: undefined, done: true }

let g2 = gen();
g2.next(); // 1
for(const item of g2) {
  console.log(item) // 2, 3
}


/**
 * Generators as normal iterators
*/
function* rangeGenerator(start=0, end=Infinity, step=1) {
  let iterationCount = 0;
  for(let i = start; i < end; i = i + step) {
    iterationCount++;
    yield i;
  }
  return iterationCount;

};

for(let item of rangeGenerator(1, 10, 3)) {
  console.log('rangeGenerator', item);
};
let generator = rangeGenerator(1, 10, 3)
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
