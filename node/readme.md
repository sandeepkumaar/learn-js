## Node 

- fs
- Streams
- Tests

## Streams
Streams are datastructure or constructs that allows node to pass data over different programs or streams
Its similar to iterables, where we can control the data flow `next()` but streams are standard way of communicating 
to different programs (irrespective of runtime) through buffers/strings

Advantages: 
- Memory efficient for bulk processing. we are not going to keep all data in-memory. processing is done as and when
data is available and sent over to next process
- Faster when compared to other iterator constructs
- standard way of communicating to other programs - stdin; stdout

Types of streams: 
- Readable
- Writable 
- Transform
- Duplex (2-way communication)


### Readable Stream
Constructor
```
let rs = new Readable({
  //objectMode: true, // will outpuct chunk as js value  otherwise as buffer
  read: function() {
    for(let i of data) {
      this.push(i); // pushes data to stream
    };
    this.push(null); // closes readstream
  }
})
```
From iterable
```
let rs = Readable.from(['a', 'b', 'c']); // objectMode: true // default
```
From file
```
const fileReadStream = createReadStream('./file.txt', {
  highWaterMark:  16 // chunkSize
});
```

2 ways to read data
- .on('data')
- pipe | pipeline

### Writable
Preferrable last stream, which is used to write to some file, stdout, db etc as stream of data.
Constructor
```
const writable = new Writable({
  //objectMode: false, // chunk
  objectMode: true, //data
  write: function(chunk, encoding/*utf8*/, next) {
    console.log('write', encoding, chunk)
    next();
  }
});
```

Tranform stream is similar to write stream. except instead of calling `next()` we call `next(null, value)` to pass over the
value in the next stream
```
let ts = new Transform({
  objectMode: true,
  transform: function(data, enc, next) {
    let t = data + count++;
    return next(null, t);
  }
});
```

### ObjectMode
By default, chunk values are buffers. which needed `buffers.toString()` for understandable values
If objectMode: true ; chunk value will be parsed as js values. useful when processing data within app.
For external program communication - we need to convert again to string/buffers to pass data to another program


### Chunks
Default Chunk size : 64Kb when read 
Chunk is the amoud of data that can be placed in the internal buffer to process

Note: To read files line by line - use `readline` module - check examples

## Different ways to read, write data, pipe etc
Check the other .js files

## pipe vs piplineCb vs pipelinePromise
Check .js file

## Iterators and  Streams
TODO


 
