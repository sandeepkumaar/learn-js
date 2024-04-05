/**
 * .pipe
 * pipe works like composing. It runs the data over each stream and return the last stream its piped to 
 * which can be further piped to.
 * Only caveat is error handling. errors thrown in any of the stream is not propogated to the last stream where 
 * error handler is available. `s.on('error')` should be attached on every stream to handle errors
 *
 * Pipeline Callback version
 * pipeline provides a callback which gets called when error occurs in any of the stream, or when pipeline completes
 * on completions, pipeline returns the last stream which can be piped
 *
 * Pipeline promise version
 * Unlike pipe, pipelinCb - promise version does not return the last stream
 * It handles the error with reject and resolves with void - confirming that pipeline is successful
 *
*/

import {Readable, Writable, Transform, pipeline} from 'node:stream';
import {pipeline as pipelinePromise} from 'node:stream/promises';

let count = 0;
let rs = Readable.from(['a', 'b', 'c']);
let ts = new Transform({
  objectMode: true,
  transform: function(data, enc, next) {
    let t = data + count++;
    return next(null, t);
  }
});

let es = new Transform({
  objectMode: true,
  transform: function(data, enc, next) {
    return next(Error('something wrong'));
  }
});
/*
es.on('error', function(e) {
  // stream gets closed at this point.
  console.log('es', e)
})
*/

let ws = new Writable({
  objectMode: true,
  write: function(data, enc, next) {
    console.log(data);
    return next();
  }
});

/*
try {
  let s = rs.pipe(ts).pipe(es).pipe(ws)
} catch(e) {
  console.log('Not caught here !!!', e);
};
*/

/*
let stream = pipeline(rs, ts, es, (e) => {
  if(e) console.error('pipelineCb', e);
  else console.log('pipeline success');
});

pipeline(stream, ws, (e) => {
  if(e) console.error('pipelineCb write', e);
  else console.log('pipeline write success');
})
*/

// promise resolve/reject does not have stream returned
//let streamPromise = pipelinePromise(rs, ts, es)
//  .then(v => console.log('promise success', v))
//  .catch(e => console.error('promise error', e));


/**
 * Combining cb and promise version
 * Use cb version for pipe readable and transform stream
 * Use promise version for final write. so we get the control back through promise
 * Note: you cannt pipe transform streams alone and pipe the readstream at last like u do in normal programming
 * when u call pipe/pipeline - datas are tranferred
*/

let tfs = pipeline(rs, ts, (e) => {
  //if(e) console.log('pipeline cb', e);
  // no need to throw - infact dont throw. if thrown - its not caught anywhere.
});

pipelinePromise(tfs, ws)
  .then(v => console.log('promise success', v))
  .catch(e => console.error('promise error', e));











