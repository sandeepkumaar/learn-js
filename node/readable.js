import { Readable } from 'node:stream';
import {createReadStream} from 'node:fs';
import readline from 'node:readline';

function createRs() {
  let data = ['a', 'b', 'c'];
  return new Readable({
    //objectMode: true, // will outpuct chunk as js value  otherwise as buffer
    read: function() {
      for(let i of data) {
        this.push(i); // pushes data to stream
      };
      this.push(null); // closes readstream
    }
  })
};


let rs = createRs();
/**
 * Ways to read data from readable stream
 * - .on('data') // testing
 *   .on('readable')
 *   .pipe(writable) // preferred
*/

// flowing mode - occurs wheen readable is piped or 'data' event is supplied with callback
rs.on('data', function(chunk) {
  // based on objectMode chunk can be buffer, string, js values
  // To convert buffer to strings. use toString() // default encoding 'utf8'
  console.log('on-data', chunk.toString());
})

// paused mode
rs.on('readable', function(read) {
  // readable event says, data is ready to be read. but waits till someone calls this.read()
  // returns null when no more elements
  // read(size) emits 'data' event. here we are manually reading the data
  // size is the no.of chunks to read together
  let data;
  while ((data = this.read(1)) !== null) {
    console.log(data.toString());
  }
})

/**
 * Readable from Iterable
*/

let readableFromIterator = Readable.from(['a', 'b', 'c'], {objectMode: true}); // mode default true
readableFromIterator.on('data', function(chunk) {
  console.log('iterable', chunk.toString());
});


/**
 * Readable from file
 * Default chunk is based on the bytes - highWaterMark = 64KiB  
*/
const fileReadStream = createReadStream('./file.txt', {
  highWaterMark:  16
});
fileReadStream.on('data', function(chunk) {
  let text = chunk.toString();
  console.log('-------------file----------------', text); // entire file is the chunk
  console.log('split newline', text.split('\n'));
})

// Read line by line - only available in fileStream
const fileLineReadStream = createReadStream('file.txt')
let lineAsyncIterator = readline.createInterface({input: fileLineReadStream});

//for await(const line of lineAsyncIterator) console.log('line', line);

lineAsyncIterator.on('line', function(chunk) {
  console.log('line', chunk); // string  not buffer
})

/**
 * pipe
*/
