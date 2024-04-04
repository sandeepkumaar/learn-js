/**
 * Generator function returns an Object called Generator Object.
 * Generator object is iterable  through Iterators
 * Generator object is run only once.  
 * 
 * Generators are used when we want to run "procedures" over a period of events
 * Procedures are statements/functions that run one after the other.
 *
 *
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

