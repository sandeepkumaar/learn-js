import test from 'node:test';
import assert from 'node:assert/strict';
import createLinkedList from './index.js';

let toArray = (linkedList) => {
  let arr = [];
  for(let value of linkedList) {
    arr.push(value)
  };
  return arr;

}


test('iterable', () => {
  let linkedList = createLinkedList(['a', 'b', 'c']);
  assert.deepEqual(linkedList.size, 3);
  let arr = toArray(linkedList);
  assert.deepEqual(arr, ['a', 'b', 'c'])
})

test('at', () => {
  let linkedList = createLinkedList(['a', 'b', 'c']);
  assert.equal(linkedList.at(2), 'c')
  assert.equal(linkedList.at(3), undefined)
  assert.equal(linkedList.at(-1), 'c')
});

test('push-pop', async (t) => {
  await t.test('push', () => {
    let linkedList = createLinkedList();
    let v1 = linkedList.push('a')
    assert.equal(v1, 'a');
    linkedList.push('b')
    linkedList.push('c')
    assert.equal(linkedList.size, 3);
    let arr = toArray(linkedList);
    assert.deepEqual(arr, ['a', 'b', 'c']);
  });
  await t.test('pop', () => {
    let linkedList = createLinkedList();
    // 
    let value = linkedList.pop();
    assert.equal(value, null);
    // 
    linkedList.push('a');
    linkedList.push('b');
    let v1 = linkedList.pop();
    assert.equal(v1, 'b');
    assert.equal(linkedList.size, 1);
    // 
    let arr = toArray(linkedList);
    assert.deepEqual(arr, ['a']);
  })
});

test('unshift-shift', {only: true}, async t => {
  await t.test('unshift', () => {
    let linkedList = createLinkedList();
    const v = linkedList.unshift('a');
    assert.equal(v, 'a');
    assert.equal(linkedList.size, 1);
    linkedList.unshift('b');
    let arr = toArray(linkedList);
    assert.deepEqual(arr, ['b', 'a']);
    assert.equal(linkedList.size, 2);
  })
  await t.test('shift', () => {
    let linkedList = createLinkedList();
    linkedList.unshift('a');
    let shifted = linkedList.shift('a');
    assert.equal(shifted, 'a');
    assert.equal(linkedList.size, 1);
  })

})

test('splice', {only: true}, async t => {
  await t.test('delete', () => {
    let linkedList = createLinkedList(['a', 'b', 'c']);
    let res = linkedList.splice(1, 2);
    let arr = toArray(linkedList);
    assert.deepEqual(arr, []);
  })
  /*
  await t.test('insert', () => {
    let linkedList = createLinkedList();
    let res = linkedList.splice(0, 0, 'a');
    assert.equal(linkedList.size, 1);
    //assert.deepEqual(res, []);
    let arr = [];
    for(let v of linkedList) {
      arr.push(v);
    };
    assert.deepEqual(arr, []);
  })
  await t.test('update', () => {
  })
  */
})



