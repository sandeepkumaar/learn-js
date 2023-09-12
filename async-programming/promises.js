/**
 * Promise constructor returns a promise object that either in one of the below states
 * pending 
 * fullfilled - then()
 * rejected - catch()
 * fullfilled or rejected - finally()
 *
 * Concurrent methods like all, race, any can take any Iterables like array, iterators etc
 *
 * Note: when multiple promise calls are made, each callbacks are executed completely. 
 * based on the promise method, they return only a single value but all calls woould run. 
 * Eg: update db, fetch data. So care should be take when we update db but promise failed in some other call.
 * In these cases Promise.allSettled() can be used.
*/

let promise = new Promise((resolve, reject) => {
  if(true) {
    return resolve('success')
  };
  return reject('fail');
});

let delay = function(value, ms, isReject=false) {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      console.log(value);
      if(isReject) return reject(value);
      return resolve(value)
    }, ms);
  })
};

/**
 * Promise.race(Iterable);
 * Returns first fullfilled or rejected
*/
let okLog = (x) => { console.log('ok: ', x); return x;} ;
let errLog = (x) => { console.log('err: ', x); return x};
let firstFullfilled = Promise.race([delay(1, 2000), delay(2, 1000)].values())
  .then(okLog) // ok: 2
let firstRejected = Promise.race([delay(1, 2000), delay(2, 3000), delay('fail', 1000, true)].values())
  .then(okLog)
  .catch(errLog) // err: fail

/**
 * Promise.any();
 * Returns only first fullfilled. 
 * If all rejected, throws AggregateError in catch
*/
let anyFirstFullfilled =  Promise.any([delay(1, 2000), delay(2, 1000)]).then(okLog)
let allRejected =  Promise.any([delay(1, 2000, true), delay(2, 1000, true)]).catch(errLog);
// AggregateError 

/**
 * Promise.all()
 * returns all fullfilled. 
 * if any one rejected. all rejected with rejection error
*/
let anyRejected =  Promise.all([delay(1, 2000, true), delay(2, 1000)]).then(okLog).catch(errLog);

/**
 * Promise.allSettled()
 * Returns array of Result Object both fullfiled and rejected
 * Result is a special object with fields { status: fullfilled|rejected, value: value|undefined, reason: error|undefined }
*/
let alwaysFullfilled = Promise.allSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error("an error")),
]).then((values) => console.log(values));

// [
//   { status: 'fulfilled', value: 33 },
//   { status: 'fulfilled', value: 66 },
//   { status: 'fulfilled', value: 99 },
//   { status: 'rejected', reason: Error: an error }
// ]

