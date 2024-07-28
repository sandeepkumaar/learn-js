import test from 'node:test';
import assert from 'node:assert/strict';
import {
  insert,
  search,
  deleteArr,
} from './index.js'


test('insert', async(t) => {
  await t.test('mid', () => {
    let arr = [1, 2, 4];
    arr = insert(arr, 2, 3);
    assert.deepEqual(arr, [1, 2, 3, 4]);

  })
  await t.test('end', () => {
    let arr = [1, 2, 4];
    arr = insert(arr, 3, 5);
    assert.deepEqual(arr, [1, 2, 4, 5]);

  })

})

test('search', async(t) => {
  await t.test('index', () => {
    let index = search([1, 2, 3, 4, 5], 3);
    assert.equal(index, 2);
  })
})

test('delete', async(t) => {
  await t.test('value', () => {
    let arr = deleteArr([1, 2, 3, 4, 5], 3);
    assert.deepEqual(arr, [1, 2, 4, 5]);
  })
})

