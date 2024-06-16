import test from 'node:test';
import assert from 'node:assert/strict';
import createLinkedList from './single-linkedlist.js';

let toArray = (linkedList) => {
  let arr = [];
  for(let node of linkedList) {
    arr.push(node.value)
  };
  return arr;

}

let compare = (a='', b='') => a.localeCompare(b)


test('iterable', () => {
  let linkedList = createLinkedList(['a', 'b', 'c'], compare);
  assert.deepEqual(linkedList.size, 3);
  let arr = toArray(linkedList);
  assert.deepEqual(arr, ['a', 'b', 'c'])
})
test('search', () => {
  let linkedList = createLinkedList(['a', 'b', 'c'], compare);
  let node = linkedList.search('b');
  assert.equal(node.value, 'b');
})


test('at', () => {
  let linkedList = createLinkedList(['a', 'b', 'c']);
  assert.equal(linkedList.at(2).value, 'c')
  assert.equal(linkedList.at(3)?.value, undefined)
  assert.equal(linkedList.at(-1)?.value, 'c')
});

test('unshift-shift', async t => {
  await t.test('unshift', () => {
    // no head
    let linkedList = createLinkedList();
    const node = linkedList.unshift('a');
    assert.equal(node.value, 'a');
    assert.equal(linkedList.size, 1);
    // unshift
    linkedList.unshift('b');
    let arr = toArray(linkedList);
    assert.deepEqual(arr, ['b', 'a']);
    assert.equal(linkedList.size, 2);
  })
  //await t.test('shift', () => {
  //  let linkedList = createLinkedList();
  //  linkedList.unshift('a');
  //  let shifted = linkedList.shift('a');
  //  assert.equal(shifted, 'a');
  //  assert.equal(linkedList.size, 1);
  //})

})

test('insert', async (t) => {
  await t.test('no head', () => {
    let linkedList = createLinkedList();
    linkedList.insert('c');
    assert.equal(linkedList.size, 1)
    assert.equal(linkedList.at(0)?.value, 'c')
  })
  await t.test('preprend', () => {
    let linkedList = createLinkedList(['a']);
    linkedList.insert('c', 0);
    assert.equal(linkedList.size, 2)
    assert.deepEqual(toArray(linkedList), ['c', 'a'])
  })
  await t.test('append', () => {
    let linkedList = createLinkedList();
    linkedList.insert('a');
    assert.equal(linkedList.size, 1);
    assert.equal(linkedList.at(0)?.value, 'a');
    linkedList.insert('b', 100);
    assert.equal(linkedList.size, 2);
    assert.equal(linkedList.at(1)?.value, 'b');
    linkedList.insert('c', 1);
    assert.deepEqual(toArray(linkedList), ['a', 'c', 'b']);

  })
  //await t.test('insertAt', () => {
  //})
});


/*
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



test('splice', {only: true}, async t => {
  await t.test('delete', () => {
    let linkedList = createLinkedList(['a', 'b', 'c']);
    let res = linkedList.splice(1, 2);
    let arr = toArray(linkedList);
    assert.deepEqual(arr, []);
  })
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
})
*/


