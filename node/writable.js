import {Writable, Readable} from 'node:stream'
/**
 * implement `write` method which defines what/how to do write operation
 * this construct is used to write to something like stdout, file, db etc as stream
*/
const writable = new Writable({
  //objectMode: false, // chunk
  objectMode: true, //data
  write: function(chunk, encoding/*utf8*/, next) {
    console.log('write', encoding, chunk)
    next();
  }
});

writable.write('Hello'); // invokes the write functions
writable.write('world')
writable.end(); // closes the write stream

//writable.write('can i write?'); // throws error

/**
 * write method is invoked by
 * - directly calling write on the instance like above
 * - using pipe or pipeline from the readable/transform stream
*/

let rs = Readable.from(['a', 'b', 'c'])
let ws = new Writable({
  objectMode: true,
  write: function(data, encoding, next) {
    console.log('writing to db', data);

    next();
  }
})

rs.pipe(ws); // returns writable stream

