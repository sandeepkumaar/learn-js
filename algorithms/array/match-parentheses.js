/**
 * Match parentheses
 * Use stack to add for open paren and pop on close paren 
 * if match continue. if no exit
*/

let openParens = ['[', '{', '('];
let closeParens = [']', '}', ')']

let parenRegex = /^[[|\]|{|}|(|)]$/
let map = new Map([
  ['[', ']'], 
  ['{', '}'], 
  ['(', ')'], 
])
function matchParen(parens) {
  let stack = [];
  for(let ch of parens) {
    if(!parenRegex.test(ch)) continue;
    if(map.has(ch)) {
      stack.push(ch);
    } else {
      let open = stack.pop();
      if(map.get(open) === ch) continue;
      return false;
    }
  };
  return true;
};

let parens = "()[asd){}"
let result = matchParen(parens);
console.log(result);

