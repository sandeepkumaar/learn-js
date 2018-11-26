/**
* A lambda is a function that is used as a data
* lambdas are commonly used to 
		- Perform operations on the other args passed in 
		
		- Attach event handlers for DOM interactions
		
		- Pass in a callback function to be executed when the current function
			is complete
			
		- Wrap existing functions with additional functionality (often used to implement
			cross-cutting concerns,such as logging).A function that adds functionality to 
			another function is called a function decorator
			
		- Take a function that requires multiple parameters, and return a function that 
			requires fewer parameters -for eg:by fixing one or more of the parameters to 
			specific values ("Partial Application and Currying")
			
		- Return a function from another function.For example, you might have a function
			that takes an argument and returns a curried function that applies that argument in 
			a predetermined calculation
			
	Lambdas are confused with the following. The concepts are all similar, but they mean
	different things
		- anonymous functions
		- closures
		- first-class functions
		- higher order functions
		
	Anonymous functions ie. function without a name cannot necessarily be lambda
	Note: Any function without a name can become a anonymous function.But lambda 
	are treated as data that can be passed around as inputs and outputs between other
	functions,regardless whether or not they are named
	Function anonimity in lambda is merely a syntactic sugar.
	
	Closure vs Lambda
	Not all lambdas are closures, and not all closures are lambdas
	This also means 
	Not all lambdas are closures - some lambdas can be closures
	Not all closures are labmda  - some closure are lambda
	
	This means that lambda can be a closure.Or A closure can be used as a 
	data that can be passed in or returned which we may call that as lambda
	
	Note: A closure is created when a function references data that is contained 
	outside the function scope
	
	All function in Javascript are first class, meaning u can treat a function like 
	u would treat a variable
	This means Functions in javascript has the extra capability to behave like 
	variables
	Lambdas are formed based on this capability ie, treating function like a value
	
	Higher-order functions are functions that consume a function and return a 
	function as data. 
	lambda are THE data that is passed between these higher order functions
	Note: A function can be both a lambda and a higher order function
	but not all higher order functions are lambdas
	
	Simple:
	
	If a function is used as an argument or return value, it's a lambda
	
	
		
*/


var sum = function sum() {
  var result = 0;
	//forEach takes an Lambda as an argument
  [5, 5, 5].forEach(
			//lambda //here as an argument
			// lambda which is a closure and anonymous function
			function addTo(number) { 
				result += number; 
			}
		);

  return result;
};


