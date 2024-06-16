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
  let index = linkedList.search('b');
  assert.equal(index, 1);
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
  await t.test('shift', () => {
    let linkedList = createLinkedList();
    linkedList.unshift('a');
    let node = linkedList.shift('a');
    assert.equal(node.value, 'a');
    assert.equal(linkedList.size, 0);
  })

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

  })

  await t.test('insertAt', () => {
    let linkedList = createLinkedList(['a', 'b']);
    linkedList.insert('c', 1);
    assert.deepEqual(toArray(linkedList), ['a', 'c', 'b']);
  })
});

test('delete', async(t) => {
  await t.test('shift', () => {
    let linkedList = createLinkedList([], compare);
    let node = linkedList.delete('c');
    assert.deepEqual(node, null)

    linkedList.insert('a');
    linkedList.insert('b');
    linkedList.insert('c');
    let node1 = linkedList.delete('a');
    assert.deepEqual(node1.value, 'a');
    assert.deepEqual(linkedList.size, 2);
    assert.deepEqual(toArray(linkedList), ['b', 'c']);

  })
  await t.test('pop', () => {
    let linkedList = createLinkedList(['a','b', 'c'], compare);
    let node2 = linkedList.delete('c');
    assert.deepEqual(node2.value, 'c');
    assert.deepEqual(linkedList.size, 2);
    assert.deepEqual(toArray(linkedList), ['a', 'b']);
  })
  await t.test('deleteAny', () => {
    let linkedList = createLinkedList(['a','b', 'c'], compare);
    let node2 = linkedList.delete('b');
    assert.deepEqual(node2.value, 'b');
    assert.deepEqual(linkedList.size, 2);
    assert.deepEqual(toArray(linkedList), ['a', 'c']);
  })
})


test('push-pop', async (t) => {
  await t.test('push', () => {
    let linkedList = createLinkedList();
    let node = linkedList.push('a')
    assert.equal(node.value, 'a');
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
    let node = linkedList.pop();
    assert.equal(node.value, 'b');
    assert.equal(linkedList.size, 1);
    // 
    let arr = toArray(linkedList);
    assert.deepEqual(arr, ['a']);
  })
});

test('reverse', async(t) => {
  await t.test('null head', () => {
    let linkedList = createLinkedList();
    let reverse = linkedList.reverse();
    assert.deepEqual(reverse, null);
  })

  await t.test('one value', () => {
    let linkedList = createLinkedList(['a']);
    let reverse = linkedList.reverse();
    assert.deepEqual(toArray(reverse), ['a']);
  })
  await t.test('many', () => {
    let linkedList = createLinkedList(['a', 'b', 'c']);
    let reverse = linkedList.reverse();
    assert.deepEqual(toArray(reverse), ['c', 'b', 'a']);
    assert.deepEqual(toArray(linkedList), ['c', 'b', 'a']);
  })
})



