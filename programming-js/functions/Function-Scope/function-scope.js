/**

What is Variable Scope:
	is the section of code in which the identifier(var x) refers to the expected value
	Outside a variable's scope, the variable is undefined / replaced by another variable
	with the same name
	
What is Block scope: {}
	you can create blocks arbitarily to contain variables
	Note:
		'var' is not block scoped but function scoped
		'let' is block scoped
		
Note:
	Don't prefer to use block scope.If the code demands it then it is a code 
	smell that tells that it can be modularized more

*/

//Illustration of 'var' not block scoped
var var_x = 'sandeep';
{
	var_x = 'navin'
}

console.log(var_x);//navin. value is overridden


//Illustration of 'let' block scoped

var let_x = 'sandeep';
{
	let let_x = 'navin';
}

console.log(let_x); //sandeep

let let_x = 'sandeep';
{
	let let_x = 'navin';
}
//throws error saying that identifier x has already been declared


//Illustration of 'var' not function scoped
var x = 'sandeep';
function scope () {
	var x = 'navin'
}
scope();

console.log(x); //sandeep

