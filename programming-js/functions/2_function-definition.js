/**
* Types of function definition
* - function declaration
* - anonymous function/function Expression
* - Named function expression
*/



//Function declaration
function foo(){
	// console.log('foo',arguments.callee);
	return arguments.callee;
}

//Anonymous function 
var anonymousFoo=function(){
	// console.log('anonymousFoo',arguments.callee);
	return arguments.callee;
};


//Named function expression
var namedFoo=function foo(){
	// console.log('namedFoo',arguments.callee);
	return arguments.callee;
};

// foo();
// anonymousFoo();
// namedFoo();


//assigning function conditionally
var score = 4;
var grade=null;
if(score > 5){
	grade = function grade (){
		return 'pass';
	}
}else{
	grade = function grade () {
		return 'fail';
	}	
}

grade();

/*
Note:
Function declaration tends to encourage large piles of loosely related functions
to grow in your module with no hints about what goes where, whether its public/private
or how the functions work together
Also it does not suit for declaring the function conditionally

Named function Expression 
helps to organize the related function together
can assign functions conditionally
stack trace wont show anonymous function if Named function expression are used

*/