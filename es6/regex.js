/**
 * Assertions
 * ^, 
*/
// ^ : character/group should be a starting char/set
'aba'.match(/^a/g); // [a];

// $ - ending 

//  \b : should not preceded/followed by a word based on where \b is placed
'sk sandeep'.match(/\bs/g) // ['s', 's'] // s is not preceded by any word
'sk sandeep'.match(/k\b/g) // ['k']  // k is not followed by any word

// "\B" is opposite. it *should* be preceded/followed by char
// Note \B is equivalent to normal regex "aba".match(/b/)

// x(?=y) : x should be followed by y
"sandeep kumar sandeep navin".match(/sandeep\s(?=kumar)/g);
"sandeep kumar navin kumar".match(/(?<=sandeep|navin)\skumar/g);

/**
 * Character classes
 * . : any character
 * [abc] or [a-c] 
 * \d or [0-9] number
 * \w or [A-Za-z0-9_] alpha numeric
 * \s, \r, \n
 * x|y
*/

/**
 * Groups and backreferences
*/

const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames = /First_Name: (\w+), Last_Name: (\w+)/gm;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match[1]} ${match[2]}`);
}
/**
 * Quantifiers
 * x* = 0 or more
 * x+ = 1 or more
 * x? = 0 or 1 followed by. optional char
 * x{n}  = followed 
 * x{n,}
 * x{n,m}
*/


/**
 * flags
 * g - global
 * i - case insensitive
 * m - multiline for ^, $
*/

/**
 * Methods
 * String: match, matchAll, replace, search, split
*/
'aba'.match(/a/g); // [a, a];
'aba'.match(/a/); // [a, index: 0, input: abc, group: undefined]
let regexExpressionStringIterator = 'aba'.matchAll(/a/g); // global flag is required for matchAll. 

'aba'.replace(/a/g); // xbx
'aba'.replace(/a/); // xba

'aba'.search(/a/g); // 0
'aba'.search(/a/); // 0 - returns the first match index. else -1

'aba'.split(/a/); // ['', 'b', '']

/*Regex*/
var x = /a/g;
// works like a iterator
x.test('aba'); // true
x.test('aba'); // true
x.test('aba'); // false

// Iterator with index details
x.exec('aba')
//['a', index: 0, input: 'aba', groups: undefined]
x.exec('aba')
//['a', index: 2, input: 'aba', groups: undefined]
x.exec('aba')

